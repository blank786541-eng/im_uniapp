<template>
  <div>
    <div v-if="banned" class="input-root">
      <div class="banned">
        <span class="default-text font-14" style="  color: #999;">您已被禁言</span>
      </div>
    </div>
    <div class="input-root" v-else>
      <div class="msg-input-wrapper">
        <!-- 当回复他人消息时，输入框上方需要展示被回复消息相关内容 -->
        <div v-if="isReplyMsg" class="reply-message-wrapper">
          <div class="reply-message-close" @tap="removeReplyMsg">
            <Icon
                color="#929299"
                :iconStyle="{ fontWeight: '200' }"
                :size="13"
                type="icon-guanbi1"
            />
          </div>
          <div class="reply-line">｜</div>
          <div class="reply-title">{{ t('replyText') }}</div>
          <div class="reply-to">
            <Appellation
                :account="replyMsg && replyMsg.senderId"
                :team-id="
              props.conversationType ===
              V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_TEAM
                ? to
                : ''
            "
                color="#929299"
                :fontSize="13"
            >
            </Appellation>
          </div>
          <div class="reply-to-colon">:</div>
          <div
              v-if="replyMsg && replyMsg.messageClientId === 'noFind'"
              class="reply-noFind"
          >
            {{ t('replyNotFindText') }}
          </div>
          <div class="reply-message" v-else>
            <message-one-line
                v-if="
              replyMsg &&
              replyMsg.messageType ===
                V2NIMConst.V2NIMMessageType.V2NIM_MESSAGE_TYPE_TEXT
            "
                :text="replyMsg && replyMsg.text"
            ></message-one-line>
            <div v-else>
              {{
                replyMsg
                    ? '[' + REPLY_MSG_TYPE_MAP[replyMsg.messageType] + ']'
                    : ''
              }}
            </div>
          </div>
        </div>
        <div v-if="inputVisible" class="msg-input">
          <!-- 当从表情面板切换到文字输入时，直接唤起键盘，会导致input框滚动消失，故此处需要用EmojiInput兼容下，保证先隐藏表情面板，再弹出键盘 -->
          <div
              v-show="showEmojiInput"
              @click="onClickEmojiInput"
              class="input-emoji"
          >
            <div v-if="inputText" class="input-text">{{ inputText }}</div>
            <div v-else class="input-placeholder">
              {{
                isTeamMute ? t('teamMutePlaceholder') : t('chatInputPlaceHolder')
              }}
            </div>
          </div>
          <div class="flex-box flex-y-center" style="position: relative">

            <div class="flex-box flex-y-center" style="width: 100%;position: relative;" >
              <AssetsImage path="/static/emoji.png" width="30px" height="30px" @tap="handleEmojiVisible"
                           v-show="!showEmojiInput" style="margin-right: 4px"></AssetsImage>
           <div style="min-height:40px;width:100%"> <textarea
               v-show="!showEmojiInput"
               :focus="isFocus"

               :maxlength="-1"
               :placeholder="
            isTeamMute ? t('teamMutePlaceholder') : t('chatInputPlaceHolder')
          "
               v-model="inputText"
               type="text"
               :disabled="isTeamMute"
               :confirm-hold="true"
               cursor-spacing="20"
               adjust-position="true"
               confirm-type="send"
               @confirm=""
               :auto-height="true"
               @blur="handleInputBlur"
               @input="handleInput"
           /></div>
              <AssetsImage path="/static/action.png" width="30px" height="30px " v-show="!showEmojiInput"
                           @tap="showMoreAction"></AssetsImage>
            </div>

<!--            <mumu-recorder ref='recorder' @success='handlerSuccess' @error='handlerError'></mumu-recorder>-->
            <div v-if="!inputText"
                 class="flex-center"
                 style="width: 40px"
                 @tap="handleAudioVisible"

                >

              <AssetsImage

                  path="/static/audio1.png" width="26px" height="26px"
              ></AssetsImage>
            </div>


            <el-button size="mini" v-else-if="inputText && !emojiVisible"
                       style="background:#DBB077;padding:4px 8px;border-radius: 8px;margin-left: 4px;flex-shrink: 0">
            <span style="font-size: 13px;color:#fff" @tap="handleSendTextMsg">
              发送
            </span>
            </el-button>

          </div>
        </div>

        <!-- 表情面板 -->
        <div v-if="emojiVisible" class="msg-emoji-panel" @click.stop="() => {}">
          <Face
              @emojiClick="handleEmoji"
              @emojiDelete="handleEmojiDelete"
              @emojiSend="handleSendTextMsg"
          />
        </div>
        <!-- 发送语音消息面板 -->

        <div
            v-if="audioPanelVisible"
            class="msg-audio-panel"
            @click.stop="() => {}"
        >
          <VoicePanel @handleSendAudioMsg="handleSendAudioMsg"></VoicePanel>
        </div>
        <!-- 发送更多面板 -->
        <div
            v-if="sendMoreVisible"
            class="send-more-panel"
            @click.stop="() => {}"
        >
          <div class="send-more-panel-item-wrapper">
            <div
                class="send-more-panel-item"
                @tap="(event:any) => handleSendVideoMsg('camera', event)"
            >
              <Icon type="icon-paishe" :size="30"></Icon>
            </div>
            <div class="icon-text">{{ t('shootText') }}</div>
          </div>
          <div class="send-more-panel-item-wrapper">
            <div
                class="send-more-panel-item"
                @tap="(event: any) => handleSendVideoMsg('album', event)"
            >
              <Icon type="icon-shipin2" :size="30"></Icon>
            </div>
            <div class="icon-text">{{ t('albumText') }}</div>
          </div>
          <!-- 音频呼叫 -->
          <div
              class="send-more-panel-item-wrapper"
              v-if="
            isAndroidOrIosApp &&
            props.conversationType !==
              V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_TEAM
          "
          >
            <div class="send-more-panel-item" @tap="handleCall(1)">
              <Icon type="icon-audio-call" :size="30"></Icon>
            </div>
            <div class="icon-text">{{ t('voiceCallText') }}</div>
          </div>

          <!-- 视频呼叫 -->
          <div
              class="send-more-panel-item-wrapper"
              v-if="
            isAndroidOrIosApp &&
            props.conversationType !==
              V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_TEAM
          "
          >
            <div class="send-more-panel-item" @tap="() => handleCall(2)">
              <Icon type="icon-video-call" :size="30"></Icon>
            </div>
            <div class="icon-text">{{ t('videoCallText') }}</div>
          </div>
          <div
              v-if="isWeb"
              class="send-more-panel-item-wrapper"
              @tap="handleSendFileMsg"
          >
            <div class="send-more-panel-item">
              <Icon type="icon-file" :size="30"></Icon>
            </div>
            <div class="icon-text">{{ t('fileText') }}</div>
          </div>
        </div>
      </div>

      <MessageActions :mute="isTeamMute"
                      :other-account-id="to"
                      :conversation-type="conversationType"
                      :conversationId="conversationId" :show="showMore"></MessageActions>
      <!-- @消息相关 popup -->
      <UniPopup
          ref="popupRef"
          background-color="#ffffff"
          type="bottom"
          mask-background-color="rgba(0,0,0,0.4)"
          @change="onPopupChange"
      >
        <MentionMemberList :team-id="to"></MentionMemberList>
      </UniPopup>
    </div>
  </div>
</template>

<script lang="ts" setup>
/** 消息页面输入框组件 */

import Face from './face.vue'
import VoicePanel from './voice-panel.vue'
import Icon from '../../../components/Icon.vue'
import {ref, getCurrentInstance, computed, onUnmounted, onMounted, watch} from 'vue'
import {ALLOW_AT, events, REPLY_MSG_TYPE_MAP} from '../../../utils/constants'
import {emojiMap} from '../../../utils/emoji'
import {t} from '../../../utils/i18n'
import {handleNoPermission} from '../../../utils/permission'
import {customNavigateTo} from '../../../utils/customNavigate'
import MessageOneLine from '../../../components/MessageOneLine.vue'
import {
  isAndroidApp,
  stopAllAudio,
  isIosWeb,
  isWeb,
  isWxApp,
  startCall,
  isAndroidOrIosApp,
  isHarmonyOs, getUniPlatform,
} from '../../../utils'
// @ts-ignore
import UniPopup from '../../../components/uni-components/uni-popup/components/uni-popup/uni-popup.vue'
// @ts-ignore
import MentionMemberList from './mention-member-list.vue'
import Appellation from '../../../components/Appellation.vue'
import {AT_ALL_ACCOUNT} from '../../../utils/constants'
import {replaceEmoji} from '../../../utils'
import {autorun} from 'mobx'

import {
  V2NIMTeam,
  V2NIMTeamChatBannedMode,
  V2NIMTeamMember,
} from 'nim-web-sdk-ng/dist/esm/nim/src/V2NIMTeamService'
import {
  V2NIMMessageForUI,
  YxServerExt,
  YxAitMsg,
} from '@xkit-yx/im-store-v2/dist/types/types'
//@ts-ignore
import {V2NIMConst} from '../../../utils/nim'
import {V2NIMMessage} from 'nim-web-sdk-ng/dist/esm/nim/src/V2NIMMessageService'
import AssetsImage from "@/components/AssetsImage.vue";
import MessageActions from "@/pages/Chat/message/Message-actions.vue";

import RecordPanal from "@/pages/Chat/message/record-panal.vue";

export type MentionedMember = { accountId: string; appellation: string }

const props = withDefaults(
    defineProps<{
      conversationType: V2NIMConst.V2NIMConversationType
      to: string
      replyMsgsMap?: {
        [key: string]: V2NIMMessageForUI
      }
      showMore: boolean
    }>(),
    {}
)

uni.$on('closeMore', () => {
  uni.hideKeyboard();
  showMore.value = false;
  audioPanelVisible.value=false;
  emojiVisible.value=false;
  uni.$emit('closeRecord')
})
const platform = ref(getUniPlatform());
/** 会话ID */
const conversationId =
    props.conversationType ===
    V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_P2P
        ? uni.$UIKitNIM.V2NIMConversationIdUtil.p2pConversationId(props.to)
        : uni.$UIKitNIM.V2NIMConversationIdUtil.teamConversationId(props.to)

/** 输入框内容 */
const inputText = ref('')
const extVisible = ref(false)
/** 音频面板flag */
const audioPanelVisible = ref(false)
/** 发送更多面板flag */
const sendMoreVisible = ref(false)
/** 表情面板flag */
const emojiVisible = ref(false)
/** input框flag */
const inputVisible = computed(() => {
  if (audioPanelVisible.value || sendMoreVisible.value) {
    return false
  } else {
    return true
  }
})

/** 发起呼叫，type: 1 音频呼叫，2 视频呼叫 */
const handleCall = (type: number) => {
  const myAccount = uni.$UIKitStore.userStore.myUserInfo.accountId

  const remoteShowName = uni.$UIKitStore.uiStore.getAppellation({
    account: props.to,
  })
  if (myAccount) {
    startCall({
      remoteUserAccid: props.to,
      currentUserAccid: myAccount,
      type: type,
      remoteShowName: remoteShowName,
    })
  } else {
    uni.showToast({
      title: t('callFailedText'),
      icon: 'none',
    })
  }
}

/** 用于解决表情面板和键盘冲突，导致输入框滚动消失问题 */
const showEmojiInput = ref(false)
const showMore = ref(false);
/** 回复消息相关 */
const isReplyMsg = ref(false)
const isFocus = ref(false)
const replyMsg = ref<V2NIMMessageForUI>()

/** @ 消息相关 */
const ctx = getCurrentInstance()
const popupRef = ref(null)
/** @ 成员列表 */
const selectedAtMembers = ref<MentionedMember[]>([])

/** 群相关 */
const team = ref<V2NIMTeam>()
/** 群成员 */
const teamMembers = ref<V2NIMTeamMember[]>([])
/** 群禁言模式 */
const teamMute = ref<V2NIMTeamChatBannedMode>(
    V2NIMConst.V2NIMTeamChatBannedMode.V2NIM_TEAM_CHAT_BANNED_MODE_UNBAN
)
/** 是否是群主 */
const isGroupOwner = ref(false)
/** 是否是群管理员 */
const isGroupManager = ref(false)
/** 群是否禁言 */
const isTeamMute = ref(false)
const emit = defineEmits(['changeState']);
/** 是否允许@ 所有人 */
const allowAtAll = computed(() => {
  let ext: YxServerExt = {}
  try {
    ext = JSON.parse((team.value || {}).serverExtension || '{}')
  } catch (error) {
    //
  }
  if (ext[ALLOW_AT] === 'manager') {
    return isGroupOwner.value || isGroupManager.value
  }
  return true
})
/** 更新群禁言 */
const updateTeamMute = () => {
  if (
      teamMute.value ===
      V2NIMConst.V2NIMTeamChatBannedMode.V2NIM_TEAM_CHAT_BANNED_MODE_UNBAN
  ) {
    isTeamMute.value = false
    return
  }

  /** 群主或者群管理员在群禁言时，可以发送消息 */
  if (isGroupOwner.value || isGroupManager.value) {
    isTeamMute.value = false
    return
  }
  isTeamMute.value = true
  return
}

/** 弹窗*/
const onPopupChange = (e: any) => {

  uni.$emit(events.HANDLE_MOVE_THROUGH, e.value)
}

/** 点击@ 群成员 */
const handleMentionItemClick = (member: MentionedMember) => {
  //@ts-ignore
  ctx.refs.popupRef.close()
  uni.$emit(events.HANDLE_MOVE_THROUGH, false)
  const nickInTeam = member.accountId
  selectedAtMembers.value = [
    ...selectedAtMembers.value.filter(
        (item) => item.accountId !== member.accountId
    ),
    member,
  ]
  console.log('HANDLE_AIT_MEMBER', member);
  const newInputText = inputText.value + nickInTeam + ' '
  // 更新input框的内容
  inputText.value = newInputText
}

/** 关闭popup */
const closePopup = () => {
  //@ts-ignore
  ctx.refs.popupRef.close()
}

/** 点击表情输入框，隐藏表情面板，显示键盘 */
const onClickEmojiInput = () => {
  showEmojiInput.value = false
  extVisible.value = false
  emojiVisible.value = false
  if (isIosWeb) {
    showKeyboard()
  } else if (!isHarmonyOs) {
    const timeout = setTimeout(() => {
      showKeyboard()
      clearTimeout(timeout)
    }, 500)
  }
}


function showMoreAction() {
  handleInputBlur();
  uni.hideKeyboard();
  showMore.value = !showMore.value;
  emit('changeState', showMore.value)
  uni.$emit(events.ON_SCROLL_BOTTOM)
}

/** 输入框失焦 */
const handleInputBlur = () => {
  isFocus.value = false
}

/** 滚动到底部 */
const scrollBottom = () => {
  if (!isWeb) {
    setTimeout(() => {
      uni.$emit(events.ON_SCROLL_BOTTOM)
    }, 300)
  } else {
    uni.$emit(events.ON_SCROLL_BOTTOM)
  }
}

/** 输入框输入事件 */
const handleInput = (event: any) => {
  const text = event?.detail?.value
  const isAit = text.endsWith('@') || text.endsWith('@\n')
  if (
      props.conversationType ==
      V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_TEAM
  ) {
    if (isAit) {
      /** 当前输入的是@ */
      uni.hideKeyboard()
      // @ts-ignore
      ctx.refs.popupRef.open('bottom')
      isFocus.value = false
      uni.$emit(events.HANDLE_MOVE_THROUGH, true)
    }
  }
}

/** 发送文本消息 */
const handleSendTextMsg = () => {
  if (inputText.value.trim() === '') return
  const ext = onAtMembersExtHandler()
  let text = replaceEmoji(inputText.value)
  const textMsg = uni.$UIKitNIM.V2NIMMessageCreator.createTextMessage(text)


  uni.$UIKitStore.msgStore
      .sendMessageActive({
        msg: textMsg as unknown as V2NIMMessage,
        conversationId,
        serverExtension: selectedAtMembers.value.length && (ext as any),
        sendBefore: () => {
          scrollBottom()
        },
      })
      .catch(() => {
        uni.showToast({
          icon: 'error',
          title: t('sendMsgFailedText'),
        })
      })
      .finally(() => {
        scrollBottom()
      })

  inputText.value = ''
  isReplyMsg.value = false
  replyMsg.value = undefined
  selectedAtMembers.value = []
}


/** 移除回复消息 */
const removeReplyMsg = () => {
  uni.$UIKitStore.msgStore.removeReplyMsgActive(
      replyMsg?.value?.conversationId as string
  )
  isReplyMsg.value = false
}

/** 显示表情面板 */
const handleEmojiVisible = () => {
  if (isTeamMute.value) return
  if (isWxApp || isAndroidApp || isHarmonyOs) {
    const timeout = setTimeout(() => {
      emojiVisible.value = true
      extVisible.value = true
      uni.$emit(events.ON_SCROLL_BOTTOM)
      clearTimeout(timeout)
    }, 300)
  } else {
    emojiVisible.value = true
    extVisible.value = true
  }
  showEmojiInput.value = true
  audioPanelVisible.value = false
  sendMoreVisible.value = false
  uni.$emit(events.ON_SCROLL_BOTTOM)
}

/** 显示发送更多"+"面板 */
const handleSendMoreVisible = () => {
  if (isTeamMute.value) return
  audioPanelVisible.value = false
  emojiVisible.value = false
  sendMoreVisible.value = !sendMoreVisible.value
  setTimeout(() => {
    uni.$emit(events.ON_SCROLL_BOTTOM)
  }, 300)
}

/** 点击表情 */
const handleEmoji = (emoji: { key: string; type: string }) => {
  inputText.value += emoji.key
}

/** 删除表情 */
const handleEmojiDelete = () => {
  let target = ''
  const isEmojiEnd = Object.keys(emojiMap).reduce((prev, cur) => {
    const isEnd = inputText.value.endsWith(cur)
    if (isEnd) {
      target = cur
    }
    return prev || isEnd
  }, false)
  if (isEmojiEnd && target) {
    inputText.value = inputText.value.replace(target, '')
  } else {
    inputText.value = inputText.value.slice(0, -1)
  }
}


const recordStata = ref(false)

function handleTouchEnd() {

}

function handleContextMenu(e) {
  e.stopPropagation()
  e.preventDefault();
}

const clientX = ref()
const system = uni.getSystemInfoSync();
const height = ref(100);
const width = ref(100);

function reset() {
  alert('reset====')
  recordStata.value = false;
  height.value = 100;
  width.value = 100;
  clientX.value = 0;
}

function handleMove(e) {
  if (!recordStata.value) {
    return;
  }
  clientX.value = -(system.screenWidth - e.changedTouches[0].clientX);
  const cache = 100 * (e.changedTouches[0].clientX / system.screenWidth);

  if (cache < 50) {
    reset();
    return false;
  }

  if (cache < 100) {
    height.value = cache;
    width.value = cache;
    uni.$emit('slide', clientX.value,cache/100);
  }


}

/** 显示语音面板 */
const handleAudioVisible = (e) => {
  // handleCall(1);
  // return;
  audioPanelVisible.value=true;
  e.stopPropagation();
  e.preventDefault();
  recordStata.value = true;
  if (isTeamMute.value) return
  // audioPanelVisible.value = !audioPanelVisible.value
  emojiVisible.value = false
  setTimeout(() => {
    uni.$emit(events.ON_SCROLL_BOTTOM)
  }, 300)
}


/** 发送语音消息 */
const handleSendAudioMsg = (filePath: string, duration: number) => {
  audioPanelVisible.value = false;
  const audioMsg =

      uni.$UIKitNIM.V2NIMMessageCreator.createAudioMessage(filePath,`audio_${filePath}`,"",duration)
  // V2NIMStorageSceneConfig.DEFAULT_IM
  uni.$UIKitStore.msgStore
      .sendMessageActive({
        msg: audioMsg as unknown as V2NIMMessage,
        conversationId,
        progress: () => true,
        sendBefore: (msg) => {
          scrollBottom()
          uni.$UIKitStore.msgStore.addMsg(msg.conversationId, [
            {
              ...msg,
              //@ts-ignore
              attachment: {
                duration: duration,
              },
            },
          ])
        },
      })
      .then(() => {
        scrollBottom()
      })
      .catch(() => {
        uni.showToast({
          icon: 'error',
          title: t('sendAudioFailedText'),
        })
        scrollBottom()
      })


}


let teamWatch = () => {
}
/** 编译到鸿蒙上时，通过isFocus来唤起键盘，会导致input框滚动消失，故鸿蒙不使用isFocus来唤起键盘，由用户手动唤起 */
const showKeyboard = () => {
  isFocus.value = true
}

const banned = ref<boolean>(false)


uni.$UIKitNIM.V2NIMLocalConversationService.on('onConversationChanged',(conversations)=>{
    conversations.forEach(item=>{
       if(item.type== V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_TEAM){
        checkBanned();
       }
    })
})

function checkBanned() {

  const myUser = uni.$UIKitStore.userStore.myUserInfo
  const teamMember = uni.$UIKitStore.teamMemberStore.getTeamMember(props.to, [
    myUser.accountId,
  ])

  if(teamMember.length>0){
  banned.value = teamMember[0].chatBanned || false;
  }


}
uni.$on(events.REPLY_MSG, (msg: V2NIMMessageForUI) => {
  isReplyMsg.value = true
  replyMsg.value = msg
  console.log(`${events.REPLY_MSG} events.REPLY_MSG`)
  if (!isHarmonyOs) {
    showKeyboard()
  }
})

/** 撤回后，重新编辑消息 */
uni.$on(events.ON_REEDIT_MSG, (msg: V2NIMMessageForUI) => {
  const _replyMsg = props.replyMsgsMap?.[msg.messageClientId]

  // 为了解决 1.撤回回复消息A 2.再撤回普通文本消息B 3.重新编辑消息A 4.再重新编辑消息B后 输入框显示A的引用内容，发送后显示A的引用内容的问题

  if (msg.conversationId) {
    uni.$UIKitStore.msgStore.removeReplyMsgActive(msg.conversationId)
    isReplyMsg.value = false
  }

  /** 如果重新编辑的是回复消息，则需要将回复消息展示在输入框上方 */
  if (_replyMsg?.messageClientId) {
    _replyMsg && uni.$UIKitStore.msgStore.replyMsgActive(_replyMsg)
    replyMsg.value = _replyMsg
    isReplyMsg.value = true
  }

  /** 如果重新编辑的是@消息，则需要将被@ 的成员重新加入selectedAtMembers */
  if (msg.serverExtension) {
    const extObj = JSON.parse(msg.serverExtension)
    const yxAitMsg = extObj.yxAitMsg
    if (yxAitMsg) {
      const _mentionedMembers: MentionedMember[] = []
      Object.keys(yxAitMsg).forEach((key) => {
        if (key == AT_ALL_ACCOUNT) {
          _mentionedMembers.push({
            accountId: key,
            appellation: '所有人',
          })
        } else {
          _mentionedMembers.push({
            accountId: key,
            appellation: uni.$UIKitStore.uiStore.getAppellation({
              account: key,
              teamId: props.to,
              ignoreAlias: true,
            }),
          })
        }
      })
      selectedAtMembers.value = _mentionedMembers
    }
  }
  inputText.value = msg?.oldText || ''
  if (!isHarmonyOs) {
    showKeyboard()
  }
})



uni.$on(events.AIT_TEAM_MEMBER, (member: MentionedMember) => {
  selectedAtMembers.value = [
    ...selectedAtMembers.value.filter(
        (item) => item.accountId !== member.accountId
    ),
    member,
  ]

  console.log(member,'member====')
  const newInputText = inputText.value + '@' + member.accountId + ' '
  /** 更新input框的内容 */
  inputText.value = newInputText
})

/** 关闭表情、语音、发送更多面板 */
uni.$on(events.CLOSE_PANEL, () => {
  emojiVisible.value = false
  extVisible.value = false
  audioPanelVisible.value = false
  sendMoreVisible.value = false
})

/** @ 消息 @ 群成员 */
uni.$on(events.HANDLE_AIT_MEMBER, (member: MentionedMember) => {
  handleMentionItemClick(member)
})

/** 关闭@ 群成员面板 */
uni.$on(events.CLOSE_AIT_POPUP, () => {
  closePopup()
})

/** 表情点击 */
uni.$on(events.EMOJI_CLICK, (emoji) => {
  handleEmoji(emoji)
})

/** 表情删除 */
uni.$on(events.EMOJI_DELETE, () => {
  handleEmojiDelete()
})

/** 表情发送 */
uni.$on(events.EMOJI_SEND, () => {
  emojiVisible.value = false
  extVisible.value = false
  handleSendTextMsg()
})

onMounted(() => {
  const isTeam =
      props.conversationType ===
      V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_TEAM || V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_SUPER_TEAM;
  if (isTeam) {
    checkBanned();
  }
  /** 群监听 */
  teamWatch = autorun(() => {
    if (
        props.conversationType ===
        V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_TEAM
    ) {
      //@ts-expect-error
      const _team: V2NIMTeam = uni.$UIKitStore.teamStore.teams.get(props.to)

      teamMembers.value = uni.$UIKitStore.teamMemberStore.getTeamMember(
          props.to
      )

      const myUser = uni.$UIKitStore.userStore.myUserInfo
      isGroupOwner.value = _team?.ownerAccountId == myUser.accountId
      isGroupManager.value = teamMembers.value
          .filter(
              (item) =>
                  item.memberRole ===
                  V2NIMConst.V2NIMTeamMemberRole.V2NIM_TEAM_MEMBER_ROLE_MANAGER
          )
          .some((member) => member.accountId === (myUser ? myUser.accountId : ''))
      team.value = _team
      if (_team) {
        teamMute.value = _team.chatBannedMode
      }
      updateTeamMute()
    }
  })


  if (uni.onKeyboardHeightChange) {
    uni.onKeyboardHeightChange((res) => {
      const isAndroidWxapp =
          uni.getSystemInfoSync().platform == 'android' && isWxApp
      // 此处是为了点击安卓键盘上的收起按钮时，表情面板需要隐藏
      if (
          (res.height === 0 && isAndroidApp) ||
          (res.height === 0 && isAndroidWxapp)
      ) {
        emojiVisible.value = false
        extVisible.value = false
      }
    })
  }
})

/** 处理选中的@ 成员 */
const onAtMembersExtHandler = () => {
  let ext: YxServerExt
  if (selectedAtMembers.value.length) {
    selectedAtMembers.value
        .filter((member) => {
          if (!allowAtAll.value && member.accountId === AT_ALL_ACCOUNT) {
            return false
          }
          return true
        })
        .forEach((member) => {
          const substr = `@${member.accountId}`
          const positions: number[] = []
          let pos = inputText.value?.indexOf(substr)
          while (pos !== -1) {
            positions.push(pos)
            pos = inputText.value?.indexOf(substr, pos + 1)
          }
          if (positions.length) {
            if (!ext) {
              ext = {
                yxAitMsg: {
                  [member.accountId]: {
                    text: substr,
                    segments: [],
                  },
                },
              }
            } else {
              ;(ext.yxAitMsg as YxAitMsg)[member.accountId] = {
                text: substr,
                segments: [],
              }
            }
            positions.forEach((position) => {
              const start = position
              ;(ext?.yxAitMsg as YxAitMsg)[member.accountId].segments.push({
                start,
                end: start + substr.length,
                broken: false,
              })
            })
          }
        })
  }
  // @ts-ignore
  return ext
}

onUnmounted(() => {
  uni.$off(events.REPLY_MSG)
  uni.$off(events.ON_REEDIT_MSG)
  uni.$off(events.REPLY_MSG)
  uni.$off(events.AIT_TEAM_MEMBER)
  // 关闭表情面板
  uni.$off(events.CLOSE_PANEL)
  // @消息 @群成员
  uni.$off(events.HANDLE_AIT_MEMBER)
  // 关闭@群成员面板
  uni.$off(events.CLOSE_AIT_POPUP)
  // 表情点击
  uni.$off(events.EMOJI_CLICK)
  // 表情删除
  uni.$off(events.EMOJI_DELETE)
  // 表情发送
  uni.$off(events.EMOJI_SEND)
  uni.$off('closeMore')
  uni.$UIKitNIM.V2NIMLocalConversationService.off('onConversationChanged',()=>{});
  removeReplyMsg()
  teamWatch()
})


const recorder = ref();
const status = ref(false);




function handlerSuccess(res) {
  // recordStata.value = false;
  // recorder.value = res

    console.log(res);


}

function handlerError(code) {
  switch (code) {
    case '101':
      uni.showModal({
        content: '当前浏览器版本较低，请更换浏览器使用，推荐在微信中打开。'
      })
      break;
    case '201':
      uni.showModal({
        content: '麦克风权限被拒绝，请刷新页面后授权麦克风权限。'
      })
      break
    default:
      uni.showModal({
        content: '未知错误，请刷新页面重试'
      })
      break
  }
}

</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.input-root {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 300px;

}

.input-root-h5 {
  height: auto;
  position: relative;
  order: 1;
}

.msg-input-wrapper {
  width: 100%;
  height: 100%;
  background-color: #eff1f3;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 999;
  padding: 10px 0;
  box-sizing: border-box;

}

//.msg-input {
//  overflow-x: hidden;
//  background-color: #F5F7FC;
//  padding:10px 7px;
//  &-input {
//    background-color: #fff;
//    height: 50px;
//    font-size: 16px;
//    padding: 0 12px;
//    border-radius: 9px;
//    margin-bottom: 5px;
//    word-break: break-word;
//    flex: 1;
//    box-sizing: border-box;
//
//    &::placeholder {
//      padding: 0 12px;
//    }
//  }
//}

.msg-button-group {
  padding: 12px 20px 2px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.msg-input-button {
  flex: 1;
  // &:not(:last-child) {
  //   margin-right: 60px;
  // }

  &.msg-input-loading {
    animation: loadingCircle 1s infinite linear;
    z-index: 1;
    width: 20px;
    height: 20px;
    margin-top: 4px;

    .loading {
      width: 100%;
      height: 100%;
    }
  }
}

.msg-ext {
  overflow-y: auto;
  width: 100%;
  height: 300px;
  background-color: #eff1f3;
  z-index: 1;
}

.msg-emoji-panel {
  overflow-y: auto;
  width: 100%;
  height: 246px;
  background-color: #eff1f3;
  z-index: 1;
}

.msg-audio-panel {
  overflow-y: hidden;
  width: 100%;
  height: 300px;
  background-color: #eff1f3;
  z-index: 1;
}

.send-more-panel {
  padding: 15px;
  overflow-y: hidden;
  width: 100%;
  height: 300px;
  background-color: #eff1f3;
  z-index: 1;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.send-more-panel-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  display: inline-block;
  margin-bottom: 10px;

  .send-more-panel-item {
    background-color: #fff;
    border-radius: 8px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    margin: 0 15px;
    justify-content: center;
  }

  .icon-text {
    font-size: 12px;
    color: #747475;
    margin-top: 8px;
    text-align: center;
  }
}

.reply-message-wrapper {
  display: flex;
  font-size: 13px;
  background-color: #eff1f2;
  height: 25px;
  padding-top: 6px;
  align-items: center;
  color: #929299;

  .reply-noFind {
    width: fit-content;
  }

  .reply-to-colon {
    flex-basis: 3px;
    margin-right: 2px;
  }

  .reply-message-close {
    flex-basis: 14px;
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  .reply-message {
    flex: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    message-one-line {
      flex: 1;
      font-size: 13px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .reply-title {
    flex-basis: 30px;
    white-space: nowrap;
    margin-right: 5px;
  }

  .reply-to {
    max-width: 120px;
    flex: 0 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
  }
}

.input-emoji {
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding: 0 12px;
  border-radius: 6px;
}

.input-text {
  white-space: nowrap;
}

.input-placeholder {
  background-color: #fff;
  min-height: 40px !important;
  line-height: 40px;
  font-size: 16px;
  padding: 0 12px;
  border-radius: 6px;
  color: gray;
}

.file-picker-wrapper {
  position: absolute;
  width: 60px;
  height: 60px;
  z-index: 1;

  .files-button {
    width: 60px;
    height: 60px;
  }
}

.banned {
  height: 60px;
  background-color: #efefef;

  display: flex;
  align-items: center;
  justify-content: center;
}

.record {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #efefef;
}


page {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow-x: hidden;
}

.record-voice {

  border-radius: 100px;
  background-color: #DBB077;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
