<script setup lang="ts">


import {onUnmounted, reactive, ref} from "vue";
import {
  addCallListeners,
  CallEventType,
  destoryAudio, formatterTime,
  playMusic,
  randomNumbers,
  removeListeners, stopMusic
} from "@/pages/Other/help/call";
import {V2NIMUser} from 'nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMUserService'
import NERTC from "nertc-web-sdk";
import {onLoad} from '@dcloudio/uni-app'
import Avatar from "@/components/Avatar.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {
  V2NIMSignallingCallResult,
  V2NIMSignallingCallSetupResult,
  V2NIMSignallingEvent, V2NIMSignallingRoomInfo
} from "nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMSignallingService";
import {V2NIMConst} from "@/utils/nim";
import {Stream} from "nertc-web-sdk/types/stream";
import config from "@/utils/config";
import {V2NIMMessage} from "nim-web-sdk-ng/dist/esm/nim/src/V2NIMMessageService";
import {events} from "@/utils/constants";
import {customNavigateTo} from "@/utils/customNavigate";

let client: Client;
const connect = ref(false);  //双方的链接状态
const renderBox = ref();
const params = reactive({
  isSilence: false,
  isStop: false,

  localUid: '',
  localStream: null,
  remoteStreams: [],
  max: 20,
  devicesId: [], //0前置相机 1后置相机
  currentDevice: 0,
  showStatistics: false,
  uplinkNetworkQuality: "grey",
  downlinkNetworkQuality: "grey",
  networkQuality: ["grey", "green", "green", "yellow", "red", "red"],
  audioSendBitrate: 0,
  videoSendBitrate: 0,
  sendFrameRate: 0,
  sendResolutionHeight: 0,
  sendResolutionWidth: 0,
  vConsole: null,
  localVideoStatsInterval: null,
  localAudioStatsInterval: null,
})
const requestId = `${Date.now()}_${Math.random().toString(7)}`;
const channelName = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

const userInfo = ref<V2NIMUser>();
let room: V2NIMSignallingCallResult;
let joinRoomInfo: V2NIMSignallingCallSetupResult;
let timer = null;
const userIsJoin = ref(false);
let query = reactive({
  uid: "",
  roomId: null,
  requestId: "",
  type: 1,
})

const createUser = ref(false);

onLoad(async (options) => {
  client = NERTC.createClient({
    appkey: config.appKey,
    debug: true,
  });

  query = options;
  uni.$UIKitStore.userStore.getUserForceActive(options.uid).then((res) => {
    userInfo.value = res;
  })
  params.localUid = uni.$UIKitStore.userStore.myUserInfo.accountId;

  if (!options.roomId) {
    query.roomId = channelName;

    createRoom();
  }

  playMusic('/static/call-music.mp3', 'call')
})


onUnmounted(async () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  if (params.localStream != null) {
    params.localStream
        .close({
          type: "audio",
        }).then(res => {
      params.localStream.destroy();
    })
    (params.remoteStreams as Stream).destroy();
  }
  removeListeners(client)
  uni.$off('on-invite')
  destoryAudio();

})

function removeStream(stream, userId) {
  params.remoteStreams = params.remoteStreams.map((item) =>
      item.getId() === userId ? stream : item
  );
}

async function addStream(stream, userId) {
  if (params.remoteStreams.some((item) => item.getId() === userId)) {
    console.warn("收到已订阅的远端发布，需要更新", stream);
    params.remoteStreams = params.remoteStreams.map((item) =>
        item.getId() === userId ? stream : item
    );
    //订阅其发布的媒体，可以渲染播放
    await subscribe(stream);
  } else if (params.remoteStreams.length < params.max - 1) {
    console.warn("收到新的远端发布消息", stream);
    params.remoteStreams = params.remoteStreams.concat(stream);
    //订阅其发布的媒体，可以渲染播放
    await subscribe(stream);
  } else {
    console.warn("房间人数已满");
  }
}


async function destory() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  playMusic('/static/call-stop.mp3', 'jieting')
  const id = uni.$UIKitNIM.V2NIMConversationIdUtil.p2pConversationId(
      query.uid
  )

  if (createUser.value && connect.value) {
    createCallMessage({

      channelId: query.roomId,
      uid: query.uid,
      type: 1,
      conversationId: id || uni.getStorageSync('currentConversation')
    })
    close();

    return;
  }

  if (createUser.value) {
    await uni.$UIKitNIM.V2NIMSignallingService.cancelInvite({
      requestId: requestId,
      inviteeAccountId: query.uid,
      channelId: room.roomInfo.channelInfo.channelId
    })
    // createCallMessage({
    //   channelInfo: {
    //     channelId: query.roomId,
    //   },
    //   operatorAccountId: uni.$UIKitStore.userStore.myUserInfo.accountId,
    // },2,id)
  } else {
    await uni.$UIKitNIM.V2NIMSignallingService.rejectInvite({
      channelId: query.roomId,
      inviterAccountId: query.uid,
      requestId: query.requestId
    });
    createCallMessage({
      channelId: query.roomId,
      type: 3,
      conversationId: id,
      uid: query.uid
    })
    // |1|query.uid


    console.log(`${id}`, 'uni.$UIKitStore.userStore.myUserInfo.accountId|1|query.uid')
  }

  uni.navigateBack();
}

async function close() {
  if (connect) {
    if (room != null) await uni.$UIKitNIM.V2NIMSignallingService.leaveRoom(room.roomInfo.channelInfo.channelId);
    if (joinRoomInfo != null) await uni.$UIKitNIM.V2NIMSignallingService.leaveRoom(joinRoomInfo.roomInfo.channelInfo.channelId);


    await client.leave();
  }
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  uni.navigateBack();
}

const time = ref('');

function getLocalAudioStats() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  timer = setInterval(async () => {
    // 加入房间之后调用
    let sessionStats = await client.getSessionStats()
    console.log(`===== sessionStats =====`)
    console.log(`Duration: ${sessionStats.Duration}`)

    time.value = formatterTime(sessionStats.Duration)
    console.log(`RecvBitrate: ${sessionStats.RecvBitrate}`)
    console.log(`RecvBytes: ${sessionStats.RecvBytes}`)
    console.log(`SendBitrate: ${sessionStats.SendBitrate}`)
    console.log(`SendBytes: ${sessionStats.SendBytes}`)
    console.log(`UserCount: ${sessionStats.UserCount}`)

  }, 1000)
}


const closeVolume = ref(false);

async function muteAudio() {
  closeVolume.value = !closeVolume.value;
  if (closeVolume.value) {
    params.remoteStreams.forEach((remoteStream: Stream) => {
      remoteStream
          .stop("audio")

    });
  } else {
    params.remoteStreams.forEach((remoteStream: Stream) => {
      remoteStream
          .resume()
      ;
    });
  }


}


function initLocalStream() {
  //初始化本地的Stream实例，用于管理本端的音视频流
  params.localStream = NERTC.createStream({
    client: client,
    uid: randomNumbers(),
    audio: true, //是否启动mic
    video: false, //是否启动camera
    screen: false, //是否启动屏幕共享
  });


  //设置本地音频质量
  (params.localStream as Stream).setAudioProfile("speech_low_quality");
  //启动媒体，打开实例对象中设置的媒体设备
  params.localStream
      .init()
      .then(() => {
        // 发布

        publish();

        // 获取本地流音频统计信息
        getLocalAudioStats();
        // 获取本地流视频统计信息
        connect.value = true;
      })
      .catch((err) => {
        console.warn("音视频初始化失败: ", err.message, err.code);

        params.localStream = null;
      });
}

function publish() {
  console.warn("开始发布视频流");
  //发布本地媒体给房间对端
  client
      .publish(params.localStream, 'audio')
      .then(() => {
        console.warn("本地 publish 成功");
      })
      .catch((err) => {
        console.error("本地 publish 失败: ", err);
      });
}

function subscribe(remoteStream) {
  //这里可以控制是否订阅某一类媒体，这里设置的是用户主观意愿
  //比如这里都是设置为true，如果stream-added事件中通知了是audio发布了，则本次调用会订阅音频，如果video、screen之前已经有stream-added通知，则也会同时订阅video、screen，反之会忽略
  remoteStream.setSubscribeConfig({
    audio: query.type == 1,
    video: false,
    screen: true,
  });
  client
      .subscribe(remoteStream)
      .then(() => {
        console.warn("本地 subscribe 成功");
      })
      .catch((err) => {
        console.warn("本地 subscribe 失败: ", err);
      });
}

function setOrRelieveSilence() {
  const {isSilence} = params;
  params.isSilence = !isSilence;
  if (params.isSilence) {
    console.warn("关闭mic");
    params.localStream
        .close({
          type: "audio",
        })
        .then(() => {
          console.warn("关闭 mic sucess");
        })
        .catch((err) => {
          console.warn("关闭 mic 失败: ", err);
        });
  } else {
    console.warn("打开mic");
    if (!params.localStream) {
      return;
    }
    (params.localStream as Stream)
        .open({
          type: "audio",
        })
        .then(() => {
          console.warn("打开mic sucess");
        })
        .catch((err) => {
          console.warn("打开mic失败: ", err);
        });
  }
}


async function createRoom() {


  createUser.value = true;
  room = await uni.$UIKitNIM.V2NIMSignallingService.call({
    channelName: query.roomId,
    calleeAccountId: query.uid,
    requestId: requestId,
    serverExtension: uni.getStorageSync('currentConversation'),
    channelType: V2NIMConst.V2NIMSignallingChannelType.V2NIM_SIGNALLING_CHANNEL_TYPE_AUDIO
  })
  if (room.callStatus != 200) {
    uni.showToast({
      title: "对方不在线",
      icon: "none",
      duration: 1000,
      success: () => {
        close();
      }
    })
    return;
  }


}

async function joinRoom() {
  stopMusic('call');
  joinRoomInfo = await uni.$UIKitNIM.V2NIMSignallingService.callSetup({
    channelId: query.roomId,
    callerAccountId: query.uid,
    requestId: query.requestId,
  })

  if (joinRoomInfo.callStatus != 200) {
    uni.showToast({
      title: "对方不在线",
      icon: "none",
      duration: 1000,
      success: () => {
        close();
      }
    })
    return;
  }
  await client.join({
    channelName: query.audioRoomId,
    uid: randomNumbers()
  })
  playMusic('/static/call-stop.mp3', 'jieting')
  addCallListeners(client, (type: CallEventType, data) => {


    if (type == CallEventType.PeerOnline) {
    } else if (type == CallEventType.StreamAdded) {
      addStream(data.stream, data.uid)
    } else if (type == CallEventType.StreamRemove) {

      removeStream(data.stream, data.uid)
    } else if (type == CallEventType.StreamSubscribed) {
      params.remoteStreams.forEach((remoteStream) => {
        remoteStream
            .play(null, {
              audio: true,
              video: false,
            })
            .then(() => {
              console.warn("播放音频", remoteStream.getId());
            })
            .catch((err) => {
              console.warn("播放对方音频失败了: ", err);
            });
      });
    }
  })
  initLocalStream();

  createUser.value = false;

}


uni.$on('on-invite', async (data: V2NIMSignallingEvent) => {
  const type = data.eventType;
  const otherid = uni.$UIKitNIM.V2NIMConversationIdUtil.p2pConversationId(
      query.uid
  )
  if (type == 6) {
    userIsJoin.value = true;
    await client.join({
      channelName: query.roomId,
      uid: randomNumbers().toString(),
    })

    stopMusic('call');
    playMusic('/static/call-stop.mp3', 'jieting')
    initLocalStream();
    addCallListeners(client, (type: CallEventType, data: { uid: string, stream: Stream }) => {
      if (type == CallEventType.PeerOnline) {
        connect.value = true;
      } else if (type == CallEventType.PeerLeave) {

      } else if (type == CallEventType.StreamAdded) {
        addStream(data.stream, data.uid)
      } else if (type == CallEventType.StreamRemove) {
        removeStream(data.stream, data.uid)
      } else if (type == CallEventType.StreamSubscribed) {
        params.remoteStreams.forEach((remoteStream) => {
          remoteStream
              .play(null, {
                audio: true,
                video: false,
              })
              .then(() => {
                console.warn("播放音频", remoteStream.getId());
              })
              .catch((err) => {
                console.warn("播放对方音频失败了: ", err);
              });
        });
      } else if (type == CallEventType.AUDIOLEVEL_NOT_SUPPORTED) {

        close();
      }
    })

  } else if (type == 4) {

    uni.showToast({
      title: "已取消",
      icon: "none",
      duration: 1000,
      success: () => {

        playMusic('jujue');
        createCallMessage({
          channelId: data.channelInfo.channelId,
          conversationId: otherid,
          type: 2,
          uid: query.uid
        })
        close();
      }
    })


  } else if (type == 5) {
    const msg = data.operatorAccountId == data.inviterAccountId ? "已取消" : '对方已拒绝';
    uni.showToast({
      title: msg,
      icon: "none",
      duration: 1000,
      success: () => {

        playMusic('jujue');

        const id = data.operatorAccountId == data.inviterAccountId ? uni.getStorageSync('currentConversation') : otherid
        createCallMessage({
          channelId: data.channelInfo.channelId,
          conversationId: id,
          type: 2,
          uid: query.uid
        })
        close();
      }
    })
  } else if (type == 7) {
    uni.showToast({
      title: "对方已挂断",
      icon: "none",
      duration: 1000,
      success: () => {
        createCallMessage({
          channelId: data.channelInfo.channelId,
          conversationId: uni.getStorageSync('currentConversation'),
          type: 2,
          uid: query.uid
        })
        playMusic('jujue',);

        close();
      }
    })

  }
})

async function createCallMessage(opt: {
  channelId: string, type: number, conversationId: string
}) {

  let sessionStats = await client.getSessionStats()
  const msg = uni.$UIKitNIM.V2NIMMessageCreator.createCallMessage(1, opt.channelId, opt.type || 1, connect.value ? [{
    accountId: query.uid,
    /**
     * 通话时长
     */
    duration: Math.ceil(sessionStats.Duration) || 0
  }, {
    accountId: uni.$UIKitStore.userStore.myUserInfo.accountId,
    /**
     * 通话时长
     */
    duration: Math.ceil(sessionStats.Duration) || 0
  }] : [{accountId: query.uid,}, {accountId: uni.$UIKitStore.userStore.myUserInfo.accountId,}])


  await uni.$UIKitStore.msgStore
      .sendMessageActive({
        msg: msg as unknown as V2NIMMessage,
        conversationId: opt.conversationId,
        conversationType: V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_P2P,
        sendBefore: () => {
          uni.$emit(events.ON_SCROLL_BOTTOM)
        },
      })
}

</script>

<template>
  <div class="call-wrapper" ref="renderBox">


    <div class="user">
      <Avatar :account="userInfo.accountId" width="100px" height="100px" v-if="userInfo && userInfo.accountId"></Avatar>
      <div class="default-text font-14" style="color:#fff;margin-top: 6px;" v-if="userInfo && userInfo.accountId">
        {{ userInfo.accountId }}
      </div>
      <div class="default-text font-14" style="color:#fff;margin-top: 6px;" v-if="!connect">
        {{ createUser ? '等待对方接听。。。' : "邀请你语音通话" }}
      </div>
      <div class="default-text font-14" style="color:#fff;margin-top: 6px;" v-else>
        正在通话中&nbsp;&nbsp;&nbsp;{{ time }}
      </div>
    </div>
    <div class="call-action" v-if="!connect">
      <AssetsImage
          @tap="destory"
          path="/static/guaduan.png" width="80px" height="80px" :circle="true"></AssetsImage>
      <AssetsImage
          v-if="!createUser"
          path="/static/jieting.png" width="90px" height="90px" :circle="true" @tap="joinRoom"></AssetsImage>
    </div>
    <div v-else class="call-action">
      <div class="icon-container" style=" background-color: #fff;">
        <AssetsImage
            @tap="setOrRelieveSilence"
            :path="params.isSilence?'/static/voice_close.png':'/static/voice_open.png'" width="30px"
            height="30px"></AssetsImage>
      </div>

      <AssetsImage
          @tap="destory"
          path="/static/guaduan.png" width="80px" height="80px"></AssetsImage>
      <div class="icon-container" style=" background-color: #666;">
        <AssetsImage

            :path="closeVolume?'/static/audio_close.png':'/static/audio_open.png'" width="30px" height="30px"
            @tap="muteAudio"></AssetsImage>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.common-light {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  display: inline-block;
}

.call-wrapper {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(179deg, #141417 0%, #181824 100%);
  display: flex;
  flex-direction: column;

  .main-window {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    background: #25252d;
    position: relative;

    .statistics-box {
      position: absolute;
      top: 10px;
      left: 10px;
      background-color: rgba(30, 30, 30, 0.6);
      //width: 200px;
      height: auto;
      color: green;
      font-size: 12px;
      padding: 5px;
      z-index: 9;

      .grey .common-light {
        background-color: grey;
      }

      .green .common-light {
        background-color: green;
      }

      .red .common-light {
        background-color: red;
      }

      .yellow .common-light {
        background-color: yellow;
      }
    }

    .sub-window-wrapper {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 9;
      width: 165px;

      .sub-window {
        background: #25252d;
        border: 1px solid #ffffff;
        margin-bottom: 20px;
        width: 165px;
        height: 92px;
        text-align: center;

        .loading-text {
          display: block;
          width: 100%;
          text-align: center;
          line-height: 90px;
          font-size: 12px;
          color: #fff;
          font-weight: 400;
        }
      }
    }
  }

  .tab-bar {
    height: 54px;
    width: 100%;
    background-image: linear-gradient(180deg, #292933 7%, #212129 100%);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    li {
      height: 54px;
      width: 125px;
      cursor: pointer;

      &.set-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: #18181d;
        }

        .set {
          background-color: #2a6af2;
          color: #fff;
          display: inline-block;
          width: 68px;
          height: 36px;
          text-align: center;
          line-height: 36px;
          font-size: 12px;
          text-decoration: none;
          font-weight: 500;
          border-radius: 100px;
        }
      }

      //静音
      &.silence {
        background: url("../../assets/img/icon/silence.png") no-repeat center;
        background-size: 60px 54px;

        &:hover {
          background: url("../../assets/img/icon/silence-hover.png") no-repeat center;
          background-size: 60px 54px;
        }

        &:active {
          background: url("../../assets/img/icon/silence-click.png") no-repeat center;
          background-size: 60px 54px;
        }

        &.isSilence {
          //已经开启静音
          background: url("../../assets/img/icon/relieve-silence.png") no-repeat center;
          background-size: 60px 54px;

          &:hover {
            background: url("../../assets/img/icon/relieve-silence-hover.png") no-repeat center;
            background-size: 60px 54px;
          }

          &:active {
            background: url("../../assets/img/icon/relieve-silence-click.png") no-repeat center;
            background-size: 60px 54px;
          }
        }
      }

      //结束按钮
      &.over {
        background: url("../../assets/img/icon/over.png") no-repeat center;
        background-size: 68px 36px;

        &:hover {
          background: url("../../assets/img/icon/over-hover.png") no-repeat center;
          background-size: 68px 36px;
        }

        &:active {
          background: url("../../assets/img/icon/over-click.png") no-repeat center;
          background-size: 68px 36px;
        }
      }

      // 停止按钮
      &.stop {
        background: url("../../assets/img/icon/stop.png") no-repeat center;
        background-size: 60px 54px;

        &:hover {
          background: url("../../assets/img/icon/stop-hover.png") no-repeat center;
          background-size: 60px 54px;
        }

        &:active {
          background: url("../../assets/img/icon/stop-click.png") no-repeat center;
          background-size: 60px 54px;
        }

        //已经是停止状态
        &.isStop {
          background: url("../../assets/img/icon/open.png") no-repeat center;
          background-size: 60px 54px;

          &:hover {
            background: url("../../assets/img/icon/open-hover.png") no-repeat center;
            background-size: 60px 54px;
          }

          &:active {
            background: url("../../assets/img/icon/open-click.png") no-repeat center;
            background-size: 60px 54px;
          }
        }
      }
    }
  }
}


.user {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.call-action {
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
}

.icon-container {
  width: 80px;
  height: 80px;
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
