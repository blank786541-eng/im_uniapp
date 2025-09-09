<script lang="ts">
import RootStore from "@xkit-yx/im-store-v2";
/** esm 版本 */
//@ts-ignore
// import { V2NIMConst, NIM } from './esmNim.js'
/** 常规版本*/
import NIM from "nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK";
import {V2NIMConst} from "nim-web-sdk-ng/dist/esm/nim";

import {
  customNavigateTo,
  customRedirectTo,
  customReLaunch,
  customSwitchTab,
} from "./utils/customNavigate";
import {getMsgContentTipByType} from "./utils/msg";
import {STORAGE_KEY} from "./utils/constants";
import {isWxApp} from "./utils";
/** 国际化*/
import {setLanguage} from "./utils/i18n";
import config from './config'
import {initNim, initPlugin, onImHideApp, onImShowApp} from "@/utils/imUtils";
import {
  V2NIMSignallingEvent,
  V2NIMSignallingEventType, V2NIMSignallingRoomInfo
} from "nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMSignallingService";
import {addCallListeners, CallEventType} from "@/pages/Other/help/call";
// // #ifdef APP-PLUS
// /** 推送插件 */
// const nimPushPlugin = uni.requireNativePlugin("NIMUniPlugin-PluginModule");
// /** 音视频通话插件 */
// const nimCallKit = (uni.$UIKitCallKit =
//   uni.requireNativePlugin("netease-CallKit"));
// // #endif
initPlugin();
let startByNotificationId = "";

export default {
  onLaunch() {

    // #ifdef APP-PLUS
    /** 关闭启动画面，锁定竖屏 */
    plus.navigator.closeSplashscreen();
    plus.screen.lockOrientation("portrait-primary");
    // #endif

    /** 设置语言 （此处为了方便demo切换语言，将其存到本地，实际需根据业务情况设置）*/
    setLanguage(
        uni.getStorageSync("switchToEnglishFlag") == "en" ? "en" : "zh"
    );
    /** 已经登录了 不用走初始化逻辑*/
    if (
        uni?.$UIKitStore?.connectStore?.connectStatus ===
        V2NIMConst.V2NIMConnectStatus.V2NIM_CONNECT_STATUS_CONNECTED
    ) {
      return;
    }
    const opts = uni.getStorageSync(STORAGE_KEY);
    const autoLogin = uni.getStorageSync("autoLogin");
    if (opts && opts.account && opts.token) {
      initNim(opts)
    } else {
      customRedirectTo({
        url: isWxApp ? "/pages/index/index" : "/pages/Login/login-form",
      });
    }


  },
  onShow() {
    // // #ifdef APP-PLUS
    // uni?.$UIKitNIM?.V2NIMSettingService?.setAppBackground(false);
    //
    // // 点击通知栏推送监听
    // nimPushPlugin.addOpenNotificationListener((res: any) => {
    //   if (typeof res == "object" && res?.sessionId && res?.sessionType) {
    //     // 当前登录账号id 具体获取根据您的业务逻辑调整
    //     const imOptions = uni.getStorageSync(STORAGE_KEY);
    //     // 会话类型
    //     const type = res?.sessionType;
    //     // 拼装会话ID
    //     startByNotificationId = `${imOptions.account}|${type}|${res?.sessionId}`;
    //   }
    // });
    // // #endif

    uni.$UIKitNIM.V2NIMSignallingService.on("onSyncRoomInfoList",(rooms:V2NIMSignallingRoomInfo[])=>{
      for(let i=0;i<rooms.length;i++){
        uni.$UIKitNIM.V2NIMSignallingService.leaveRoom(rooms[i].channelInfo.channelId);
      }
    });
    uni.$UIKitNIM.V2NIMSignallingService.on("onOnlineEvent", (data:V2NIMSignallingEvent) => {
      console.warn(data,'onOnlineEvent=====')
      if(data.eventType==3){
        if(data.serverExtension=="teamcall"){
          customNavigateTo({
            url: `/pages/Other/team-video-call?uid=${data.inviterAccountId}&channelName=${data.channelInfo.channelName}&roomId=${data.channelInfo.channelId}&requestId=${data.requestId}&type=${data.channelInfo.channelType}`,
          })
        }else{
          uni.setStorageSync('currentConversation',data.serverExtension);
          customNavigateTo({
            url: `/pages/Other/video-call?uid=${data.inviterAccountId}&audioRoomId=${data.channelInfo.channelName}&roomId=${data.channelInfo.channelId}&requestId=${data.requestId}&type=${data.channelInfo.channelType}`,
          })
        }

      }else {

        uni.$emit('on-invite',data)
      }
    })
    onImShowApp()
  },
  onHide() {
    onImHideApp();
    // // #ifdef APP-PLUS
    // uni?.$UIKitNIM?.V2NIMSettingService?.setAppBackground(true);
    // // #endif
    //
    // // 重置推送 startByNotificationId
    // startByNotificationId = "";
  },
  methods: {},
};
</script>
<style lang="scss">
uni-page-body {
  height: 100%;
}

uni-page-body > uni-view {
  height: 100%;
}
</style>
