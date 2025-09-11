<template>
  <div class="call-wrapper">
    <div class="flex-box flex-direction-column" style="height:100%">
      <div class="flex-box " style="flex-wrap: wrap;padding:10px">
        <div v-for="(item,index) in userInfos" :key="index" class="flex-box user-item ">
          <Avatar :account="item.accountId" width="30px" height="30px"></Avatar>
          <div style="width: 10px"></div>
          <span>{{ item.name || item.accountId }}</span>
          <div style="width: 10px"></div>
          <AssetsImage :path="item.serverExtension=='muteUser'?'/static/audio_close.png':'/static/audio_open.png'"
                       width="20px" height="20px"
                       v-if="creater" @tap="muteUserAudio(item,index)"/>
          <div style="width: 16px"></div>
          <AssetsImage path="/static/cancel.png" width="16px" height="16px" @tap="nickUser(item.accountId)"
                       v-if="creater"/>
        </div>

      </div>
      <div style="flex:1" class="flex-center flex-direction-column">
        <avatar :account="query.uid" v-if="!creater"></avatar>
        <div class="default-text font-14" style="color:#fff;margin-top: 15px" v-if="!connect">{{
            creater ? '等待用户加入' : "加入群语音"
          }}
        </div>
        <div class="default-text font-14" style="color:#fff;margin-top: 15px;" v-else>
          正在通话中&nbsp;&nbsp;&nbsp;{{ time }}
        </div>
      </div>
      <div class="flex-box" style="margin-bottom: 60px;justify-content: space-around" v-if="!connect">
        <AssetsImage
            @tap="destroy"
            path="/static/guaduan.png" width="80px" height="80px" :circle="true"></AssetsImage>
        <!--          v-if="!creater"-->
        <AssetsImage
            v-if="!creater"
            path="/static/jieting.png" width="90px" height="90px" :circle="true" @tap="joinRoom"></AssetsImage>
      </div>
      <div v-else class="call-action">
        <div class="icon-container" style=" background-color: #fff;">
          <AssetsImage
              @tap="setOrRelieveSilence"
              :path="isSilence || muteAudioBycreate?'/static/voice_close.png':'/static/voice_open.png'" width="30px"
              height="30px"></AssetsImage>
        </div>

        <AssetsImage
            @tap="destroy"
            path="/static/guaduan.png" width="80px" height="80px"></AssetsImage>
        <div class="icon-container" style=" background-color: #666;">
          <AssetsImage

              :path="closeVolume?'/static/audio_close.png':'/static/audio_open.png'" width="30px" height="30px"
              @tap="muteAudio"></AssetsImage>
        </div>

      </div>
    </div>


  </div>
</template>
<script setup lang="ts">

import Avatar from "@/components/Avatar.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {onUnmounted, reactive, ref} from "vue";
import {
  addCallListeners,
  CallEventType, createCallMessage,
  createTeamRoom, destory, destoryAudio, formatterTime, getParamsValues,
  playMusic,
  randomNumbers,
  removeListeners, stopMusic
} from "@/pages/Other/help/call";
import {onLoad} from '@dcloudio/uni-app'
import {
  V2NIMSignallingCallResult,
  V2NIMSignallingChannelInfo, V2NIMSignallingEvent, V2NIMSignallingRoomInfo
} from "nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMSignallingService";
import NERTC from "nertc-web-sdk";
import {Stream} from "nertc-web-sdk/types/stream";
import {V2NIMUser} from "nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMUserService";
import config from "@/utils/config";


const isSilence = ref(false);
const userInfos = ref<V2NIMUser[]>([]);
let roomsInfo: V2NIMSignallingChannelInfo;
let changeName: string = "";
let requestId: string = "";
let client: Client;
let localStream: Stream;
let remoteStreams: Stream[] = [];
let localUid;
let joinRoomInfo: V2NIMSignallingRoomInfo;

const muteAudioBycreate = ref(false);
const creater = ref(false);
let query = reactive({
  uid: "",
  roomId: null,
  requestId: "",
  channelName: "",
  teamId: "",
  type: 1,
})
const connect = ref(false);
const accountName = `name=${uni.$UIKitStore.userStore.myUserInfo.name || uni.$UIKitStore.userStore.myUserInfo.accountId}&accountId=${uni.$UIKitStore.userStore.myUserInfo.accountId}`;
onLoad(async (options) => {
  client = NERTC.createClient({
    appkey: config.appKey,
    debug: true,
  });
  if (!options.roomId) {


    let obj = await createTeamRoom(client, options.conversationId, options.teamId)
    requestId = obj.requestId;
    changeName = obj.channelName;
    roomsInfo = obj.roomInfo;
    localUid = obj.streamId;
    userInfos.value = await uni.$UIKitStore.userStore.getUserListFromCloudActive(uni.getStorageSync('inviteUsers'));
    addListeners();
    creater.value = true;
    query.roomId = roomsInfo.channelId
    query.channelName = obj.channelName;
    query.conversationId = options.conversationId;
    query.teamId = options.teamId;
    console.warn(obj, 'obj======')
    uni.$emit('open-team-call', {
      teamId: options.teamId,
      requestId: obj.requestId,
      channelName: obj.channelName,
      channelId: roomsInfo.channelId,
      inviterAccountId: uni.$UIKitStore.userStore.myUserInfo.accountId
    })
  } else {
    changeName = options.roomId;
    requestId = options.requestId;
    localUid = randomNumbers();
    query = options;
    getUsers()
  }
  playMusic('/static/call-music.mp3', 'call')

})

const closeVolume = ref(false)

async function muteAudio() {
  closeVolume.value = !closeVolume.value;
  if (closeVolume.value) {

    remoteStreams.forEach((stream) => {
      stream.muteAudio()
    })
  } else {
    remoteStreams.forEach((stream) => {
      stream.unmuteAudio()
    })
  }

}

function setOrRelieveSilence() {
  if (muteAudioBycreate.value) {
    uni.showToast({
      title: '待群主解除禁言',
      icon: "none"
    });
    return;
  }
  isSilence.value = !isSilence.value;
  if (isSilence.value) {
    console.warn("关闭mic");
    localStream
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
    if (!localStream) {
      return;
    }
    (localStream as Stream)
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

function setOtherSilence() {
  if (muteAudioBycreate.value) {
    console.warn("关闭mic");
    localStream
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
    if (!localStream) {
      return;
    }
    (localStream as Stream)
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

let timer = null;
const time = ref('');

function getLocalAudioStats() {
  timer = setInterval(async () => {
    // 加入房间之后调用
    let sessionStats = await client.getSessionStats()


    time.value = formatterTime(sessionStats.Duration)


  }, 1000)
}

function initLocalStream() {
  //初始化本地的Stream实例，用于管理本端的音视频流

  localStream = NERTC.createStream({
    client: client,
    uid: localUid.toString(),
    audio: true, //是否启动mic
    video: false, //是否启动camera
    screen: false, //是否启动屏幕共享
  });


  //设置本地音频质量
  (localStream as Stream).setAudioProfile("speech_low_quality");
  //启动媒体，打开实例对象中设置的媒体设备
  localStream
      .init()
      .then(() => {
        // 发布

        publish();
        getLocalAudioStats();
        // 获取本地流视频统计信息
        connect.value = true;
      })
      .catch((err) => {
        console.warn("音视频初始化失败: ", err);

        localStream = null;
      });
}

function publish() {
  console.warn("开始发布视频流");
  //发布本地媒体给房间对端
  client
      .publish(localStream, 'audio')
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
    audio: true,
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

function removeStream(stream, userId) {
  remoteStreams = remoteStreams.map((item) =>
      item.getId() === userId ? stream : item
  );
}

async function addStream(stream, userId) {
  if (remoteStreams.some((item) => item.getId() === userId)) {
    console.warn("收到已订阅的远端发布，需要更新", stream);
    remoteStreams = remoteStreams.map((item) =>
        item.getId() === userId ? stream : item
    );
    //订阅其发布的媒体，可以渲染播放
    await subscribe(stream);
  } else if (remoteStreams.length < 20 - 1) {
    console.warn("收到新的远端发布消息", stream);
    remoteStreams = remoteStreams.concat(stream);
    //订阅其发布的媒体，可以渲染播放
    await subscribe(stream);
  } else {
    console.warn("房间人数已满");
  }
}


const join = ref(false);

async function joinRoom() {
  stopMusic('call');


  playMusic('/static/call-stop.mp3', 'jieting')
  console.log(query, 'joinRoom=====');
  try {
    await uni.$UIKitNIM.V2NIMSignallingService.joinRoom({
      channelId: query.roomId
    })
    await uni.$UIKitNIM.V2NIMSignallingService.acceptInvite({
      channelId: query.roomId,
      inviterAccountId: query.uid,
      requestId: query.requestId,
      serverExtension: accountName
    })
  } catch (e) {
    console.log(e.toString(), 'joinRoom=====error');
  }
  connect.value = true;
  console.warn(query.roomId, localUid, 'joinROOM=====', query.channelName,);
  await client.join({
    channelName: query.roomId,
    uid: localUid.toString()
  })


  initLocalStream();

  addListeners();


  console.log(joinRoomInfo, 'joinRoomInfo=====')
  getUsers();
}


async function getUsers() {
  joinRoomInfo = await uni.$UIKitNIM.V2NIMSignallingService.getRoomInfoByChannelName(query.channelName);
  let ids = joinRoomInfo.members.map((item) => item.accountId);

  userInfos.value = await uni.$UIKitStore.userStore.getUserListFromCloudActive(ids)

  let findIndex = userInfos.value.findIndex((item) => item.accountId == uni.$UIKitStore.userStore.myUserInfo.accountId);

  if (findIndex > -1) {
    userInfos.value.splice(findIndex, 1);
  }

}

async function destroy() {
  playMusic('/static/call-stop.mp3', 'jujue')
  if (!connect.value) {
    if (!creater.value) {

      try {
        await uni.$UIKitNIM.V2NIMSignallingService.rejectInvite({
          channelId: query.roomId,
          inviterAccountId: query.uid,
          requestId: query.requestId,
          serverExtension: accountName
        });
      } catch (e) {
        console.log(e.toString(), 'e.toString()', e.message.toString());
      }

    } else {


      let ids = uni.getStorageSync('inviteUsers')
      ids.forEach((item) => {
        uni.$UIKitNIM.V2NIMSignallingService.cancelInvite({
          channelId: query.roomId,
          inviteeAccountId: item,
          requestId: requestId,
        }).catch((e) => {
          console.log(e.toString(), 'err========');
        });
      })
      client.leave();
    }

  } else {


    let channelId: string = creater.value ? roomsInfo.channelId : joinRoomInfo.channelInfo.channelId
    console.warn(roomsInfo, 'destroy=======', joinRoomInfo);
    try {
      await uni.$UIKitNIM.V2NIMSignallingService.leaveRoom(channelId, false, accountName);

      leave({
        accountId: uni.$UIKitStore.userStore.myUserInfo.accountId,

      }, channelId, false);


    } catch (e) {
      console.error(e.toString(), 'error======')
    }
    client.leave();
  }
  uni.removeStorageSync('inviteUsers');

  uni.$off('on-invite')
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  uni.navigateBack();
}

function addListeners() {
  addCallListeners(client, (type: CallEventType, data) => {
    if (type == CallEventType.PeerOnline) {
    } else if (type == CallEventType.PeerLeave) {
      console.warn('CallEventType.PeerLeave', data)
    } else if (type == CallEventType.StreamAdded) {
      addStream(data.stream, data.uid)
    } else if (type == CallEventType.StreamRemove) {

      removeStream(data.stream, data.uid)
    } else if (type == CallEventType.StreamSubscribed) {
      remoteStreams.forEach((remoteStream) => {
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
}

onUnmounted(() => {
  destoryAudio();
  if (localStream) {
    localStream
        .close({
          type: "audio",
        }).then(res => {
      localStream.destroy();
    })
    remoteStreams.forEach((remoteStream) => {
      remoteStream.stop()
    });
    remoteStreams.forEach((remoteStream) => {
      remoteStream.destroy()
    });

  }
  removeListeners(client)
})

uni.$on('on-invite', async (data: V2NIMSignallingEvent) => {
  const obj = getParamsValues(data.serverExtension);
  const type = data.eventType;
  if (type == 6) {
    stopMusic('call')
    playMusic('/static/call-stop.mp3', 'jujue')
    await client.join({
      channelName: roomsInfo.channelId,
      uid: localUid,
    })
    connect.value = true;
    uni.showToast({
      title: `${obj.name} 已加入`,
      icon: "none",
      success: () => {

        getUsers();
      }
    })
    addListeners();
    initLocalStream();
  } else if (type == 5) {
    // uni.showToast({
    //   title: `${obj.name} 已拒绝加入`,
    //   icon: "none",
    //   success: () => {
    //     leave(obj, data.channelInfo.channelId);
    //
    //   }
    // })
    if (creater.value) {


      uni.showToast({
        title: `${obj.name} 已拒绝加入`,
        icon: "none",
        success: () => {
          leave(obj, data.channelInfo.channelId);

        }
      })
    } else {
      getUsers()
    }
  } else if (type == 7) {

    uni.showToast({
      title: `${obj.name} 已离开`,
      success: () => {
        leave(obj, data.channelInfo.channelId);
      }
    })
  } else if (type == 4) {
    uni.showToast({
      title: "已取消",
      icon: "none",
      duration: 1000,
      success: () => {

        playMusic('jujue');
        uni.$UIKitNIM.V2NIMSignallingService.leaveRoom(data.channelInfo.channelId, false, accountName);
        client.leave();
        uni.navigateBack();
      }
    })

  } else {
    if (data.serverExtension == "kickByCreate") {
      uni.showToast({
        title: "您已被踢出房间",
        icon: 'none',
        duration: 1000,
        success: () => {
          playMusic('jujue');
          uni.$UIKitNIM.V2NIMSignallingService.leaveRoom(data.channelInfo.channelId, false, accountName);
          client.leave();
          uni.navigateBack();
        }
      })

    } else if (data.serverExtension == 'muteUser') {

      muteAudioBycreate.value = true;
      setOtherSilence();
      uni.showToast({
        title: "您已被禁言",
        icon: 'none',
        duration: 1000,
        success: () => {

        }
      })

    } else if (data.serverExtension == 'unMuteUser') {

      muteAudioBycreate.value = false;
      setOtherSilence();
      uni.showToast({
        title: "您解除禁言",
        icon: 'none',
        duration: 1000,
        success: () => {

        }
      })

    }
  }
  // } else if (type == 4 || type == 5) {
  //   destroy();
  // } else if (type == 7) {
  //   destroy();
  // }
})

function nickUser(accountId: string) {
  uni.$UIKitNIM.V2NIMSignallingService.sendControl(query.roomId, accountId, 'kickByCreate');
}

function muteUserAudio(item, index) {
  if (userInfos.value[index].serverExtension != "muteUser") {
    userInfos.value[index].serverExtension = 'muteUser'
  } else {
    userInfos.value[index].serverExtension = 'unMuteUser'
  }
  uni.$UIKitNIM.V2NIMSignallingService.sendControl(query.roomId, item.accountId, userInfos.value[index].serverExtension);
}

async function leave(obj: { accountId: string, name: string }, channelId: string, isReciver: boolean = true) {
  let data: V2NIMSignallingRoomInfo = await uni.$UIKitNIM.V2NIMSignallingService.getRoomInfoByChannelName(query.channelName);
  console.warn('getRoomInfoByChannelName', data.members);
  if (data.members.length == 1 && isReciver) {
    uni.showToast({
      title: `人员已全部离开，3秒后挂断`,
      duration: 3000,
      success: () => {
        setTimeout(() => {

          createCallMessage({
            channelId: channelId,
            type: 1,
            uid: query.teamId,
            client: client
          })
          if (timer) clearTimeout(timer);
          uni.$UIKitNIM.V2NIMSignallingService.leaveRoom(channelId, false, accountName);
          uni.navigateBack()
        }, 3000)

      }
    })
  } else {
    getUsers();
  }
}

</script>
<style scoped lang="scss">
.call-wrapper {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(179deg, #141417 0%, #181824 100%);
  display: flex;
  flex-direction: column;
}

.user-item {
  margin-top: 20px;
  color: #fff;
  font-size: 14px;
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 10px;
  background-color: #1C1A21;
  border-radius: 10px;
  margin-right: 10px
}

.call-action {
  display: flex;
  justify-content: space-around;
  margin-bottom: 160px;
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
