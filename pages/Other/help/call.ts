import {Client} from "nertc-web-sdk/types/client";
import {V2NIMConst} from "@/utils/nim";
import {
    V2NIMSignallingCallResult,
    V2NIMSignallingChannelInfo
} from "nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMSignallingService";
import {V2NIMUser} from "nim-web-sdk-ng/dist/esm/nim/src/V2NIMUserService";
import InnerAudioContext = UniNamespace.InnerAudioContext;
import {V2NIMMessage} from "nim-web-sdk-ng/dist/esm/nim/src/V2NIMMessageService";
import {events} from "@/utils/constants";

export const enum CallEventType {
    PeerOnline = "peer-online",
    PeerLeave = "peer-leave",
    StreamAdded = "stream-added",
    StreamRemove = "stream-removed",
    ConnectionStateChange = "connection-state-change",
    NetworkQuality = "network-quality",
    StreamSubscribed = "stream-subscribed",
    AUDIOLEVEL_NOT_SUPPORTED = "AUDIOLEVEL_NOT_SUPPORTED",
    Error = "exception",
    DISCONNECTED = "connection-state-change",
}

export function getExtentionData(data: string): { channelName: string, uid: string } {
    let result = {read: 0};
    if (!data) return result;
    let arr = data.split(',');

    arr.forEach(item => {
        let current = item.split('=');
        result[current[0]] = current[1];
    })

    return result;
}


export function getParamsValues(value: string): {
    name: string,
    accountId: string,
    teamId?: string,
} {
    const arr = value.split('&');
    let obj = {}

    arr.forEach(item => {
        let value = item.split("=");
        obj[value[0]] = value[1];
    })

    return obj;
}

export function removeListeners(client: Client) {
    client.off(CallEventType.StreamRemove);
    client.off(CallEventType.StreamAdded);
    client.off(CallEventType.PeerOnline);
    client.off(CallEventType.PeerLeave);
    client.off(CallEventType.ConnectionStateChange);
    client.off(CallEventType.NetworkQuality);
    client.off(CallEventType.StreamSubscribed);
    client.off(CallEventType.Error);
    client.off(CallEventType.DISCONNECTED);
    client.destroy();
}

export function addCallListeners(client: Client, callback: (event: CallEventType, {
    uid: string,
    stream: Stream,
}) => void) {


    console.log(`addCallListeners  ${client}`);
    //监听事件
    client.on("peer-online", (evt) => {
        console.warn(`${evt.uid} 加入房间`);
        callback(CallEventType.PeerOnline);
    });
    client.on("peer-leave", (evt) => {
        console.warn(`${evt.uid} 离开房间`);
        console.warn(`${evt.reason} 离开房间`);
        // this.remoteStreams = this.remoteStreams.filter(
        //     (item) => !!item.getId() && item.getId() !== evt.uid
        // );
        callback(CallEventType.PeerLeave, {
            uid: evt.uid
        });
    });

    client.on("stream-added", async (evt) => {
        //收到房间中其他成员发布自己的媒体的通知，对端同一个人同时开启了麦克风、摄像头、屏幕贡献，这里会通知多次
        const stream = evt.stream;
        const userId = stream.getId();
        console.warn(`收到 ${userId} 的发布 ${evt.mediaType} 的通知`); // mediaType为：'audio' | 'video' | 'screen'

        callback(CallEventType.StreamAdded, {
            uid: userId,
            stream: stream
        })

    });

    client.on("connection-state-change", (evt) => {

        console.warn(
            `connection-state-change: ${evt}`
        );
        if (evt.curState === "DISCONNECTED") {
            callback()
        }
    });
    client.on("exception", (evt) => {
        if (evt.uid === this.localUid) {
            switch (evt.msg) {
                case "FRAMERATE_SENT_TOO_LOW":
                    return Toast("视频发送帧率过低");
                case "FRAMERATE_VIDEO_BITRATE_TOO_LOW":
                    return Toast("视频发送码率过低");
                case "AUDIO_INPUT_LEVEL_TOO_LOW":
                    return Toast("发送音量过低");
                case "SEND_AUDIO_BITRATE_TOO_LOW":
                    return Toast("音频发送码率过低");
            }
        }
    });

    client.on("stream-removed", (evt) => {
        const stream = evt.stream;
        const userId = stream.getId();
        console.warn(`收到 ${userId} 的停止发布 ${evt.mediaType} 的通知`); // mediaType为：'audio' | 'video' | 'screen'
        stream.stop(evt.mediaType);
        callback(CallEventType.StreamAdded, {
            uid: userId,
            stream: stream
        })
        // this.remoteStreams = this.remoteStreams.map((item) =>
        //     item.getId() === userId ? stream : item
        // );
        console.warn("远端流停止订阅，需要更新", userId, stream);
    });

    client.on("network-quality", (stats) => {
        stats.forEach((item) => {
            // if (item.uid === this.localUid) {
            //     this.uplinkNetworkQuality =
            //         this.networkQuality[Number(item.uplinkNetworkQuality)];
            //     this.downlinkNetworkQuality =
            //         this.networkQuality[Number(item.downlinkNetworkQuality)];
            // }
        });
    });

    client.on("stream-subscribed", (evt) => {
        console.warn("收到了对端的流，准备播放");
        callback(CallEventType.StreamSubscribed, {
            uid: evt.stream.getId(),
            stream: evt.stream
        })

    });
    client.on("uid-duplicate", () => {
        console.warn("==== uid重复，你被踢出");
    });

    client.on("error", (type) => {
        console.error("===== 发生错误事件：", type);
        if (type === "SOCKET_ERROR") {
            console.warn("==== 网络异常，已经退出房间");
        } else if (type == "AUDIOLEVEL_NOT_SUPPORTED") {
            uni.showToast({
                title: "未找到输入设备",
                icon: "none",
                duration: 1000,
                success: () => {
                    callback(CallEventType.AUDIOLEVEL_NOT_SUPPORTED)
                }
            })
        }
    });

    client.on("accessDenied", (type) => {
        console.warn(`==== ${type}设备开启的权限被禁止`);
    });

    client.on("connection-state-change", (evt) => {
        console.warn(
            `网络状态变更: ${evt.prevState} => ${evt.curState}, 当前是否在重连：${evt.reconnect}`
        );
    });

    // this.getToken()
    //     .then((token) => {
    //         this.joinChannel(token);
    //     })
    //     .catch((e) => {
    //         message(e);
    //         console.error(e);
    //     });
}


export async function createTeamRoom(client: Client, conversationId:string,teamId: string): Promise<{
    roomInfo: V2NIMSignallingChannelInfo,
    channelName: string,
    requestId: string,
    streamId: string,
}> {
    const requestId = `${Date.now()}${Math.random().toString(7)}`;
    const channelName = `${Date.now()}${Math.random().toString(36)}`;
    const uid = randomNumbers();
    console.log(`${requestId}  ${channelName} ${uid}`, '---------------');
    let room: V2NIMSignallingChannelInfo = await uni.$UIKitNIM.V2NIMSignallingService.createRoom(V2NIMConst.V2NIMSignallingChannelType.V2NIM_SIGNALLING_CHANNEL_TYPE_AUDIO, channelName)
    await uni.$UIKitNIM.V2NIMSignallingService.joinRoom({
        channelId: room.channelId
    })
    const ids = uni.getStorageSync("inviteUsers")

    for (let i = 0; i < ids.length; i++) {
        uni.$UIKitNIM.V2NIMSignallingService.invite({
            serverExtension: `teamId=${teamId}&conversationId=${conversationId}&ids=${ids.toString()}`,
            channelId: room.channelId,
            inviteeAccountId: ids[i],
            requestId: requestId,
            channelType: V2NIMConst.V2NIMSignallingChannelType.V2NIM_SIGNALLING_CHANNEL_TYPE_AUDIO
        })
    }


    // await client.join({
    //     channelName: room.channelId,
    //     uid: uid,
    // })
    return {
        roomInfo: room,
        channelName: channelName,
        channelId: room.channelId,
        requestId: requestId,
        streamId: uid,
    };
}


export function randomNumbers() {
    let result = '';
    for (let i = 0; i < 16; i++) {
        // 生成1-9的随机整数
        result += Math.floor(Math.random() * 9 + 1);
    }

    // if (numbers.concat(result)) {
    //     randomNumbers(numbers);
    // } else {
    //     numbers.push(result)
    // }
    return result;
}


export function formatterTime(times: number | any) {
    let timeFormat = "";
    let time = Math.ceil(times);
    if (time < 10) {
        timeFormat = "00:0" + time;
    } else if (time > 60) {

        const hourTime = time / 60;
        const minTime = time % 60;


        const hour = Math.floor((time / 60)) < 10 ? '0' + Math.floor((time / 60)) : Math.floor((time / 60));
        const min = time % 60 < 10 ? '0' + time % 60 : time % 60;

        console.log(hourTime, minTime, 'time=======', hour, min);
        timeFormat = `${hour}:${min}`;
    }else if (time >= 10) {
        timeFormat = "00:" + time;
    }
    return timeFormat;
}


// 音频文件需放在static目录

let audioMap = [<{
    key: 'call' | 'jieting' | 'jujue',
    value: InnerAudioContext
}>{
    key: 'call',
    value: uni.createInnerAudioContext()
}, {
    key: 'jieting',
    value: uni.createInnerAudioContext()
}, {
    key: 'jujue',
    value: uni.createInnerAudioContext()
},

]

// 播放控制
export function playMusic(path: string, key: 'call' | 'jieting' | 'jujue',) {
    const audio: InnerAudioContext = audioMap.find((item) => item.key === key)?.value;
    if (audio) {
        audio.src = path;
        if (key == 'call') {
            audio.loop = true;
        }

        audio.play();
    }


}


export function destoryAudio() {
    audioMap.forEach((item, value) => {
        item.value.stop();

    })
    audioMap = [<{
        key: 'call' | 'jieting' | 'jujue',
        value: InnerAudioContext
    }>{
        key: 'call',
        value: uni.createInnerAudioContext()
    }, {
        key: 'jieting',
        value: uni.createInnerAudioContext()
    }, {
        key: 'jujue',
        value: uni.createInnerAudioContext()
    },

    ]
}

export function stopMusic(key: 'call' | 'jieting' | 'jujue') {

    audioMap.forEach((item, value) => {
        if (item.key == key) {
            item.value.stop();
        }
    })

}

export async function createCallMessage(opt: {
    channelId: string, type: number,
    uid: string,
    client: Client
}): Promise<void> {
    console.warn(opt, 'opts=========')
    const teamConversationId = uni.$UIKitNIM.V2NIMConversationIdUtil.teamConversationId(
        opt.uid
    )
    let sessionStats = await opt.client.getSessionStats()
    const msg = uni.$UIKitNIM.V2NIMMessageCreator.createCallMessage(1, opt.channelId, opt.type || 1, [ {
        accountId: uni.$UIKitStore.userStore.myUserInfo.accountId,
        /**
         * 通话时长
         */
        duration: Math.ceil(sessionStats.Duration) || 0
    }])

    try{
        await uni.$UIKitStore.msgStore
            .sendMessageActive({
                msg: msg as unknown as V2NIMMessage,
                conversationId: teamConversationId,
                conversationType: V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_TEAM,
                sendBefore: () => {
                    uni.$emit(events.ON_SCROLL_BOTTOM)
                },
            })
    }catch (e) {
        console.warn(e.toString(),e.message.toString(),'sendMessageActive')
    }

}
