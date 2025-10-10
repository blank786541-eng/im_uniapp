import {
  EventTracking$1,
  logDebug$1
} from "./chunk-JYV3HI4P.js";
import {
  makeAutoObservable
} from "./chunk-E5XF6PSN.js";
import "./chunk-X6CISQTJ.js";
import "./chunk-LQ2VYIYD.js";

// ../../../../../../Users/mac/production/workspace/im/node_modules/@xkit-yx/im-store-v2/dist/index.esm.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var ConnectStore = (
  /** @class */
  function() {
    function ConnectStore2(rootStore, nim, localOptions) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.localOptions = localOptions;
      this.connectStatus = 3;
      this.loginStatus = 0;
      this.logger = null;
      makeAutoObservable(this);
      this._onLoginStatus = this._onLoginStatus.bind(this);
      this._onLoginFailed = this._onLoginFailed.bind(this);
      this._onKickedOffline = this._onKickedOffline.bind(this);
      this._onLoginClientChanged = this._onLoginClientChanged.bind(this);
      this._onConnectStatus = this._onConnectStatus.bind(this);
      this._onDisconnected = this._onDisconnected.bind(this);
      this._onConnectFailed = this._onConnectFailed.bind(this);
      this._onDataSync = this._onDataSync.bind(this);
      this.logger = rootStore.logger;
      nim.V2NIMLoginService.on("onLoginStatus", this._onLoginStatus);
      nim.V2NIMLoginService.on("onLoginFailed", this._onLoginFailed);
      nim.V2NIMLoginService.on("onKickedOffline", this._onKickedOffline);
      nim.V2NIMLoginService.on("onLoginClientChanged", this._onLoginClientChanged);
      nim.V2NIMLoginService.on("onConnectStatus", this._onConnectStatus);
      nim.V2NIMLoginService.on("onDisconnected", this._onDisconnected);
      nim.V2NIMLoginService.on("onConnectFailed", this._onConnectFailed);
      nim.V2NIMLoginService.on("onDataSync", this._onDataSync);
    }
    ConnectStore2.prototype.destroy = function() {
      this.nim.V2NIMLoginService.off("onLoginStatus", this._onLoginStatus);
      this.nim.V2NIMLoginService.off("onLoginFailed", this._onLoginFailed);
      this.nim.V2NIMLoginService.off("onKickedOffline", this._onKickedOffline);
      this.nim.V2NIMLoginService.off("onLoginClientChanged", this._onLoginClientChanged);
      this.nim.V2NIMLoginService.off("onConnectStatus", this._onConnectStatus);
      this.nim.V2NIMLoginService.off("onDisconnected", this._onDisconnected);
      this.nim.V2NIMLoginService.off("onConnectFailed", this._onConnectFailed);
      this.nim.V2NIMLoginService.off("onDataSync", this._onDataSync);
    };
    ConnectStore2.prototype._onLoginStatus = function(e) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onLoginStatus", e);
      this.loginStatus = e;
    };
    ConnectStore2.prototype._onLoginFailed = function(e) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onLoginFailed", e);
    };
    ConnectStore2.prototype._onKickedOffline = function(e) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onKickedOffline", e);
    };
    ConnectStore2.prototype._onLoginClientChanged = function(e) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onLoginClientChanged", e);
    };
    ConnectStore2.prototype._onConnectStatus = function(e) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onConnectStatus", e);
      this.connectStatus = e;
      if (e === 1) {
        this.rootStore.subscriptionStore.resetState();
      }
    };
    ConnectStore2.prototype._onDisconnected = function(e) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onDisconnected", e);
    };
    ConnectStore2.prototype._onConnectFailed = function(e) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onConnectFailed", e);
    };
    ConnectStore2.prototype._onDataSync = function(type, V2NIMDataSyncState) {
      var _a, _b, _c, _d;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onDataSync", type, V2NIMDataSyncState);
      this.rootStore.userStore.getMyUserInfoActive();
      this.rootStore.relationStore.getBlockListActive();
      this.rootStore.relationStore.getP2PMuteListActive();
      if ((_b = this.rootStore.sdkOptions) === null || _b === void 0 ? void 0 : _b.enableV2CloudConversation) {
        (_c = this.rootStore.conversationStore) === null || _c === void 0 ? void 0 : _c.getConversationListActive(0, this.localOptions.conversationLimit || 100);
      } else {
        (_d = this.rootStore.localConversationStore) === null || _d === void 0 ? void 0 : _d.getConversationListActive(0, this.localOptions.conversationLimit || 100);
      }
      this.rootStore.teamStore.getJoinedTeamListActive();
      this.rootStore.friendStore.getFriendListActive();
      this.rootStore.friendStore.getAddApplicationListActive({
        status: [],
        offset: 0,
        limit: 100
      });
      this.rootStore.teamStore.getTeamJoinActionInfoListActive({
        offset: 0,
        limit: 100
      });
      if (this.localOptions.aiVisible) {
        this.rootStore.aiUserStore.getAIUserListActive();
      }
    };
    return ConnectStore2;
  }()
);
var FriendStore = (
  /** @class */
  function() {
    function FriendStore2(rootStore, nim) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.friends = /* @__PURE__ */ new Map();
      this.logger = null;
      makeAutoObservable(this);
      this._onFriendAdded = this._onFriendAdded.bind(this);
      this._onFriendDeleted = this._onFriendDeleted.bind(this);
      this._onFriendAddApplication = this._onFriendAddApplication.bind(this);
      this._onFriendAddRejected = this._onFriendAddRejected.bind(this);
      this._onFriendInfoChanged = this._onFriendInfoChanged.bind(this);
      this.logger = rootStore.logger;
      nim.V2NIMFriendService.on("onFriendAdded", this._onFriendAdded);
      nim.V2NIMFriendService.on("onFriendDeleted", this._onFriendDeleted);
      nim.V2NIMFriendService.on("onFriendAddApplication", this._onFriendAddApplication);
      nim.V2NIMFriendService.on("onFriendAddRejected", this._onFriendAddRejected);
      nim.V2NIMFriendService.on("onFriendInfoChanged", this._onFriendInfoChanged);
    }
    FriendStore2.prototype.resetState = function() {
      this.friends.clear();
    };
    FriendStore2.prototype.destroy = function() {
      this.resetState();
      this.nim.V2NIMFriendService.off("onFriendAdded", this._onFriendAdded);
      this.nim.V2NIMFriendService.off("onFriendDeleted", this._onFriendDeleted);
      this.nim.V2NIMFriendService.off("onFriendAddApplication", this._onFriendAddApplication);
      this.nim.V2NIMFriendService.off("onFriendAddRejected", this._onFriendAddRejected);
      this.nim.V2NIMFriendService.off("onFriendInfoChanged", this._onFriendInfoChanged);
    };
    FriendStore2.prototype.getFriendListActive = function() {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var friends, error_1;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getFriendListActive");
              return [4, this.nim.V2NIMFriendService.getFriendList()];
            case 1:
              friends = _d.sent();
              this.addFriend(friends);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getFriendListActive success", friends);
              return [2, friends];
            case 2:
              error_1 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getFriendListActive failed: ", error_1);
              throw error_1;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    FriendStore2.prototype.getFriendByIdsActive = function(ids) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var friends, error_2;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getFriendByIdsActive", ids);
              return [4, this.nim.V2NIMFriendService.getFriendByIds(ids)];
            case 1:
              friends = _d.sent();
              this.addFriend(friends);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getFriendByIdsActive success", friends);
              return [2, friends];
            case 2:
              error_2 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getFriendByIdsActive failed: ", error_2);
              throw error_2;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    FriendStore2.prototype.getAddApplicationListActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_3;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getAddApplicationListActive");
              return [4, this.nim.V2NIMFriendService.getAddApplicationList(options)];
            case 1:
              res = _d.sent();
              this.rootStore.sysMsgStore.addFriendApplyMsg(res.infos);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getAddApplicationListActive success", res);
              return [2, res];
            case 2:
              error_3 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getAddApplicationListActive failed: ", error_3);
              throw error_3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    FriendStore2.prototype.addFriendActive = function(accountId, params) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_4;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("addFriendActive", accountId);
              return [4, this.nim.V2NIMFriendService.addFriend(accountId, params)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("addFriendActive success", accountId, params);
              return [3, 3];
            case 2:
              error_4 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("addFriendActive failed: ", accountId, params, error_4);
              throw error_4;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    FriendStore2.prototype.acceptAddApplicationActive = function(application) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_5;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("acceptAddApplicationActive", application);
              return [4, this.nim.V2NIMFriendService.acceptAddApplication(application)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("acceptAddApplicationActive success", application);
              return [3, 3];
            case 2:
              error_5 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("acceptAddApplicationActive failed: ", application, error_5);
              throw error_5;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    FriendStore2.prototype.rejectAddApplicationActive = function(application, postscript) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_6;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("rejectAddApplicationActive", application, postscript);
              return [
                4,
                this.nim.V2NIMFriendService.rejectAddApplication(application, postscript)
                // this.rootStore.sysMsgStore.updateFriendApplyMsg([
                //   {
                //     ...application,
                //     status:
                //       V2NIMConst.V2NIMFriendAddApplicationStatus
                //         .V2NIM_FRIEND_ADD_APPLICATION_STATUS_REJECTED,
                //     isRead: true,
                //   },
                // ])
              ];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("rejectFriendApplyActive success", application, postscript);
              return [3, 3];
            case 2:
              error_6 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("rejectFriendApplyActive failed: ", application, postscript, error_6);
              throw error_6;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    FriendStore2.prototype.deleteFriendActive = function(accountId) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_7;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("deleteFriendActive", accountId);
              return [4, this.nim.V2NIMFriendService.deleteFriend(accountId, {
                deleteAlias: true
              })];
            case 1:
              _d.sent();
              this.removeFriend([accountId]);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("deleteFriendActive success", accountId);
              return [3, 3];
            case 2:
              error_7 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("deleteFriendActive failed: ", accountId, error_7);
              throw error_7;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    FriendStore2.prototype.setFriendInfoActive = function(accountId, params) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_8;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("setFriendInfoActive", accountId, params);
              return [4, this.nim.V2NIMFriendService.setFriendInfo(accountId, params)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("setFriendInfoActive success", accountId, params);
              return [3, 3];
            case 2:
              error_8 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("setFriendInfoActive failed: ", accountId, params, error_8);
              throw error_8;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    FriendStore2.prototype.addFriend = function(data) {
      var _this = this;
      data.filter(function(item) {
        return !!item.accountId;
      }).forEach(function(item) {
        var oldFriend = _this.friends.get(item.accountId);
        if (!oldFriend) {
          _this.friends.set(item.accountId, __assign(__assign({}, item), item.userProfile));
        } else {
          _this.friends.set(item.accountId, __assign(__assign(__assign({}, oldFriend), item), item.userProfile));
        }
      });
      this.rootStore.userStore.addUsers(data.map(function(item) {
        return __assign(__assign({}, item), item.userProfile);
      }));
    };
    FriendStore2.prototype.removeFriend = function(accounts) {
      var _this = this;
      accounts.forEach(function(item) {
        _this.friends.delete(item);
      });
    };
    FriendStore2.prototype._onFriendAdded = function(friend) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onFriendAdded", friend);
      this.addFriend([friend]);
      this.rootStore.sysMsgStore.updateFriendApplyMsg([
        {
          operatorAccountId: this.rootStore.userStore.myUserInfo.accountId,
          applicantAccountId: friend.accountId,
          recipientAccountId: this.rootStore.userStore.myUserInfo.accountId,
          timestamp: Date.now(),
          status: 1,
          isRead: true,
          read: true
        }
      ]);
    };
    FriendStore2.prototype._onFriendDeleted = function(accountId) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onFriendDeleted", accountId);
      if (accountId) {
        this.removeFriend([accountId]);
      }
    };
    FriendStore2.prototype._onFriendAddApplication = function(application) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onFriendAddApplication", application);
      if (application.applicantAccountId !== this.rootStore.userStore.myUserInfo.accountId) {
        this.rootStore.sysMsgStore.addFriendApplyMsg([application]);
      }
    };
    FriendStore2.prototype._onFriendAddRejected = function(rejection) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onFriendAddRejected", rejection);
      this.rootStore.sysMsgStore.addFriendApplyMsg([
        __assign(__assign({}, rejection), { isRead: true })
      ]);
    };
    FriendStore2.prototype._onFriendInfoChanged = function(friend) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onFriendInfoChanged", friend);
      this.addFriend([friend]);
    };
    return FriendStore2;
  }()
);
var AT_ALL_ACCOUNT = "ait_all";
var BE_MENTIONED = "beMentioned";
var AT_ALL_ACCOUNT_TOSDK = "#%@all@%#";
var HISTORY_LIMIT = 20;
var PIN_CONVERSATION_LIMIT = 20;
var RECALL_TIME = 2 * 60 * 1e3;
var AI_MESSAGE_LIMIT = 30;
var constant = Object.freeze({
  __proto__: null,
  AT_ALL_ACCOUNT,
  BE_MENTIONED,
  AT_ALL_ACCOUNT_TOSDK,
  HISTORY_LIMIT,
  PIN_CONVERSATION_LIMIT,
  RECALL_TIME,
  AI_MESSAGE_LIMIT
});
var name$1 = "@xkit-yx/im-store-v2";
var version$1 = "0.8.5";
var description$1 = "云信即时通讯 store V2 版本";
var license$1 = "MIT";
var main$1 = "dist/index.cjs.js";
var module = "dist/index.esm.js";
var typings = "dist/types/index.d.ts";
var publishConfig = {
  access: "public"
};
var scripts$1 = {
  dev: "rollup -c --environment DEV",
  build: "rollup -c --environment PROD"
};
var files$1 = [
  "dist"
];
var author$1 = "";
var devDependencies$1 = {
  "@rollup/plugin-commonjs": "^17.1.0",
  "@rollup/plugin-json": "^4.1.0",
  "@rollup/plugin-node-resolve": "^11.2.0",
  del: "^6.0.0",
  gulp: "^4.0.2",
  "gulp-less": "^5.0.0",
  "gulp-rename": "^2.0.0",
  "gulp-typescript": "^6.0.0-alpha.1",
  less: "^4.1.1",
  "less-plugin-npm-import": "^2.1.0",
  "nim-web-sdk-ng": "10.9.30",
  postcss: "^8.3.5",
  "postcss-nested": "^5.0.5",
  rollup: "^2.39.0",
  "rollup-plugin-postcss": "^4.0.0",
  "rollup-plugin-terser": "^7.0.2",
  "rollup-plugin-typescript2": "^0.31.0",
  tslib: "^2.5.0",
  typescript: "^4.6.4"
};
var peerDependencies = {
  "nim-web-sdk-ng": "^10.x"
};
var dependencies = {
  "@xkit-yx/utils": "^0.7.2",
  mobx: "^6.6.1"
};
var packageJson = {
  name: name$1,
  version: version$1,
  description: description$1,
  license: license$1,
  main: main$1,
  module,
  typings,
  publishConfig,
  scripts: scripts$1,
  files: files$1,
  author: author$1,
  devDependencies: devDependencies$1,
  peerDependencies,
  dependencies
};
var logger = logDebug$1({
  level: "debug",
  version: packageJson.version,
  appName: packageJson.name,
  needStringify: false
});
var frequencyControl = function(fn, delay, limit) {
  var promiseQueue = [];
  var requesting = false;
  var timer;
  return function(args) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var p = promiseQueue.find(function(item) {
        return item.args === args;
      });
      if (p) {
        p.queue.push({ resolve, reject });
      } else {
        promiseQueue.push({ args, queue: [{ resolve, reject }] });
      }
      if (requesting) {
        return;
      }
      var handler = function(pq) {
        if (!pq.length) {
          return;
        }
        requesting = true;
        fn.call(
          // @ts-ignore
          _this,
          pq.map(function(item) {
            return item.args;
          })
        ).then(function(res) {
          var _loop_1 = function() {
            var p_1 = pq.shift();
            if (p_1) {
              var _1 = res.find(function(j) {
                return j.accountId === p_1.args;
              });
              p_1.queue.forEach(function(j) {
                return j.resolve(_1);
              });
            }
          };
          while (pq.length) {
            _loop_1();
          }
        }).catch(function(err) {
          while (pq.length) {
            var p_2 = pq.shift();
            if (p_2) {
              p_2.queue.forEach(function(item) {
                return item.reject(err);
              });
            }
          }
        }).finally(function() {
          requesting = false;
          if (promiseQueue.length) {
            handler(promiseQueue.splice(0, limit));
          }
        });
      };
      if (promiseQueue.length >= limit) {
        clearTimeout(timer);
        handler(promiseQueue.splice(0, limit));
      } else {
        clearTimeout(timer);
        timer = setTimeout(function() {
          handler(promiseQueue.splice(0, limit));
        }, delay);
      }
    });
  };
};
var getFilterMsgs = function(msgs, filterFn) {
  var filterMsgs = __spreadArray([], __read(msgs), false);
  if (filterFn) {
    filterMsgs = filterMsgs.filter(filterFn);
  }
  var res = [];
  var filterRecallMsg = [];
  var startWithoutRecallMsg;
  filterMsgs.forEach(function(item) {
    if (!(item.messageType === 100 && ["beReCallMsg", "reCallMsg"].includes(item.recallType || "")) && startWithoutRecallMsg === void 0) {
      startWithoutRecallMsg = item.createTime;
    }
    if (item.messageType === 100 && ["beReCallMsg", "reCallMsg"].includes(item.recallType || "")) {
      if (startWithoutRecallMsg !== void 0 && item.createTime >= startWithoutRecallMsg) {
        res.push(item);
      } else {
        filterRecallMsg.push(item);
      }
    } else {
      res.push(item);
    }
  });
  if (!res.length && filterRecallMsg.length) {
    return filterRecallMsg;
  }
  return res;
};
var batchRequest = function(fn, max) {
  return function(params) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function() {
      var batches, i, batches_1, batches_1_1, batch, e_1_1;
      var e_1, _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            if (!!params.length)
              return [3, 2];
            return [4, fn.apply(this, [params].concat(args))];
          case 1:
            _b.sent();
            _b.label = 2;
          case 2:
            batches = [];
            for (i = 0; i < params.length; i += max) {
              batches.push(params.slice(i, i + max));
            }
            _b.label = 3;
          case 3:
            _b.trys.push([3, 8, 9, 10]);
            batches_1 = __values(batches), batches_1_1 = batches_1.next();
            _b.label = 4;
          case 4:
            if (!!batches_1_1.done)
              return [3, 7];
            batch = batches_1_1.value;
            return [4, fn.apply(this, [batch].concat(args))];
          case 5:
            _b.sent();
            _b.label = 6;
          case 6:
            batches_1_1 = batches_1.next();
            return [3, 4];
          case 7:
            return [3, 10];
          case 8:
            e_1_1 = _b.sent();
            e_1 = { error: e_1_1 };
            return [3, 10];
          case 9:
            try {
              if (batches_1_1 && !batches_1_1.done && (_a = batches_1.return))
                _a.call(batches_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
            return [
              7
              /*endfinally*/
            ];
          case 10:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
};
function detectLanguage() {
  var _a, _b;
  if (typeof window !== "undefined") {
    if (window === null || window === void 0 ? void 0 : window.__VUE__) {
      return ((_b = (_a = window === null || window === void 0 ? void 0 : window.Vue) === null || _a === void 0 ? void 0 : _a.version) === null || _b === void 0 ? void 0 : _b.startsWith("2")) ? "Vue2" : "Vue3";
    }
    if (window === null || window === void 0 ? void 0 : window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      return "React";
    }
  }
  return "unknown";
}
function detectContainer(platform) {
  var _a, _b;
  if (platform === "Web") {
    return "WEB";
  }
  if (platform === "H5") {
    return "H5";
  }
  if (platform === "UniApp") {
    return (_b = (_a = uni === null || uni === void 0 ? void 0 : uni.getSystemInfoSync()) === null || _a === void 0 ? void 0 : _a.uniPlatform) === null || _b === void 0 ? void 0 : _b.toUpperCase();
  }
}
var utils = Object.freeze({
  __proto__: null,
  logDebug: logDebug$1,
  logger,
  frequencyControl,
  getFilterMsgs,
  batchRequest,
  detectLanguage,
  detectContainer
});
var Queue = (
  /** @class */
  function() {
    function Queue2(itemLength, flow) {
      if (itemLength === void 0) {
        itemLength = 20;
      }
      if (flow === void 0) {
        flow = "rightToLeft";
      }
      this.itemLength = itemLength;
      this.flow = flow;
      this.queue = [];
      makeAutoObservable(this);
    }
    Queue2.prototype.push = function(item, noLimit) {
      this.queue.push(item);
      this._handle(noLimit);
    };
    Queue2.prototype.unshift = function(item, noLimit) {
      this.queue.unshift(item);
      this._handle(noLimit);
    };
    Queue2.prototype.pop = function() {
      return this.queue.pop();
    };
    Queue2.prototype.shift = function() {
      return this.queue.shift();
    };
    Queue2.prototype.resetLimitState = function() {
      this._handle();
    };
    Queue2.prototype.clear = function() {
      this.queue.length = 0;
    };
    Queue2.prototype.get = function() {
      return this.queue;
    };
    Queue2.prototype.set = function(value, noLimit) {
      this.queue = value;
      this._handle(noLimit);
    };
    Object.defineProperty(Queue2.prototype, "length", {
      get: function() {
        return this.queue.length;
      },
      enumerable: false,
      configurable: true
    });
    Queue2.prototype._handle = function(noLimit) {
      if (noLimit === void 0) {
        noLimit = false;
      }
      if (this.queue.length > this.itemLength && !noLimit) {
        if (this.flow === "leftToRight") {
          this.queue.splice(this.itemLength, this.queue.length - this.itemLength);
        } else {
          this.queue.splice(0, this.queue.length - this.itemLength);
        }
      }
    };
    return Queue2;
  }()
);
var QueueMap = (
  /** @class */
  function() {
    function QueueMap2(itemLength, flow) {
      if (itemLength === void 0) {
        itemLength = 20;
      }
      if (flow === void 0) {
        flow = "rightToLeft";
      }
      this.itemLength = itemLength;
      this.flow = flow;
      this.map = /* @__PURE__ */ new Map();
      makeAutoObservable(this);
    }
    QueueMap2.prototype.get = function(key) {
      var _a;
      return (_a = this.map.get(key)) === null || _a === void 0 ? void 0 : _a.get();
    };
    QueueMap2.prototype.set = function(key, value, noLimit) {
      var queue = new Queue(this.itemLength, this.flow);
      queue.set(value, noLimit);
      this.map.set(key, queue);
    };
    QueueMap2.prototype.delete = function(key) {
      var _a;
      (_a = this.map.get(key)) === null || _a === void 0 ? void 0 : _a.clear();
      return this.map.delete(key);
    };
    QueueMap2.prototype.resetLimitState = function() {
      this.map.forEach(function(item) {
        return item.resetLimitState();
      });
    };
    QueueMap2.prototype.clear = function() {
      this.map.forEach(function(item) {
        return item.clear();
      });
      this.map.clear();
    };
    QueueMap2.prototype.values = function() {
      return __spreadArray([], __read(this.map.values()), false).map(function(item) {
        return item.get();
      }).flat();
    };
    return QueueMap2;
  }()
);
var PinMsgsMap = (
  /** @class */
  function() {
    function PinMsgsMap2(limit) {
      if (limit === void 0) {
        limit = PIN_CONVERSATION_LIMIT;
      }
      this.map = /* @__PURE__ */ new Map();
      this.pinConversationLimit = PIN_CONVERSATION_LIMIT;
      this.pinConversationLimit = limit;
      makeAutoObservable(this);
    }
    PinMsgsMap2.prototype.set = function(conversationId, pinInfos) {
      var map = this.map.get(conversationId) || /* @__PURE__ */ new Map();
      if (this.map.has(conversationId)) {
        this.map.delete(conversationId);
      }
      pinInfos.forEach(function(pinInfo) {
        if (pinInfo.pinState !== 0) {
          map.set(pinInfo.messageRefer.messageClientId, pinInfo);
        } else {
          map.delete(pinInfo.messageRefer.messageClientId);
        }
      });
      this.map.set(conversationId, map);
      if (this.map.size > this.pinConversationLimit) {
        var val = this.map.keys().next().value;
        if (val)
          this.map.delete(val);
      }
    };
    PinMsgsMap2.prototype.get = function(conversationId) {
      var map = this.map.get(conversationId);
      if (map) {
        this.map.delete(conversationId);
        this.map.set(conversationId, map);
        return map;
      } else {
        return null;
      }
    };
    PinMsgsMap2.prototype.delete = function(conversationId, messageClientIds) {
      var curMap = this.map.get(conversationId);
      if (curMap) {
        this.map.delete(conversationId);
        messageClientIds.forEach(function(messageClientId) {
          curMap.delete(messageClientId);
        });
        this.map.set(conversationId, curMap);
      }
    };
    PinMsgsMap2.prototype.clear = function() {
      if (this.map) {
        this.map.forEach(function(map) {
          map.clear();
        });
        this.map.clear();
      }
    };
    return PinMsgsMap2;
  }()
);
var PinMsgsMap$1 = PinMsgsMap;
var MsgStore = (
  /** @class */
  function() {
    function MsgStore2(rootStore, nim, localOptions) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.localOptions = localOptions;
      this.msgs = new QueueMap(HISTORY_LIMIT, "rightToLeft");
      this.replyMsgs = /* @__PURE__ */ new Map();
      this.logger = null;
      this.pinMsgs = new PinMsgsMap$1();
      this.collectionMsgs = /* @__PURE__ */ new Map();
      makeAutoObservable(this);
      this.logger = rootStore.logger;
      this._onReceiveMessages = this._onReceiveMessages.bind(this);
      this._onClearHistoryNotifications = this._onClearHistoryNotifications.bind(this);
      this._onMessageDeletedNotifications = this._onMessageDeletedNotifications.bind(this);
      this._onMessagePinNotification = this._onMessagePinNotification.bind(this);
      this._onMessageQuickCommentNotification = this._onMessageQuickCommentNotification.bind(this);
      this._onMessageRevokeNotifications = this._onMessageRevokeNotifications.bind(this);
      this._onReceiveP2PMessageReadReceipts = this._onReceiveP2PMessageReadReceipts.bind(this);
      this._onReceiveTeamMessageReadReceipts = this._onReceiveTeamMessageReadReceipts.bind(this);
      this._onReceiveMessagesModified = this._onReceiveMessagesModified.bind(this);
      this.getTeamMsgReadsActive = batchRequest(this.getTeamMsgReadsActive, 50);
      nim.V2NIMMessageService.on("onReceiveMessages", this._onReceiveMessages);
      nim.V2NIMMessageService.on("onClearHistoryNotifications", this._onClearHistoryNotifications);
      nim.V2NIMMessageService.on("onMessageDeletedNotifications", this._onMessageDeletedNotifications);
      nim.V2NIMMessageService.on("onMessagePinNotification", this._onMessagePinNotification);
      nim.V2NIMMessageService.on("onMessageQuickCommentNotification", this._onMessageQuickCommentNotification);
      nim.V2NIMMessageService.on("onMessageRevokeNotifications", this._onMessageRevokeNotifications);
      nim.V2NIMMessageService.on("onReceiveP2PMessageReadReceipts", this._onReceiveP2PMessageReadReceipts);
      nim.V2NIMMessageService.on("onReceiveTeamMessageReadReceipts", this._onReceiveTeamMessageReadReceipts);
      nim.V2NIMMessageService.on("onReceiveMessagesModified", this._onReceiveMessagesModified);
    }
    MsgStore2.prototype.resetState = function() {
      this.msgs.clear();
      this.replyMsgs.clear();
      this.pinMsgs.clear();
    };
    MsgStore2.prototype.destroy = function() {
      var _this = this;
      this.resetState();
      this.nim.V2NIMMessageService.off("onReceiveMessages", this._onReceiveMessages);
      this.nim.V2NIMMessageService.off("onClearHistoryNotifications", this._onClearHistoryNotifications);
      this.nim.V2NIMMessageService.off("onMessageDeletedNotifications", this._onMessageDeletedNotifications);
      this.nim.V2NIMMessageService.off("onMessagePinNotification", this._onMessagePinNotification);
      this.nim.V2NIMMessageService.off("onMessageQuickCommentNotification", this._onMessageQuickCommentNotification);
      this.nim.V2NIMMessageService.off("onMessageRevokeNotifications", this._onMessageRevokeNotifications);
      this.nim.V2NIMMessageService.off("onReceiveP2PMessageReadReceipts", this._onReceiveP2PMessageReadReceipts);
      this.nim.V2NIMMessageService.off("onReceiveTeamMessageReadReceipts", this._onReceiveTeamMessageReadReceipts);
      this.getMsg().forEach(function(msg) {
        _this._handleClearMsgTimer(msg);
      });
    };
    MsgStore2.prototype.replyMsgActive = function(msg) {
      if (msg === null || msg === void 0 ? void 0 : msg.conversationId) {
        this.replyMsgs.set(msg.conversationId, msg);
      }
    };
    MsgStore2.prototype.removeReplyMsgActive = function(conversationId) {
      this.replyMsgs.delete(conversationId);
    };
    MsgStore2.prototype.getReplyMsgActive = function(conversationId) {
      var msg = this.replyMsgs.get(conversationId);
      if (msg) {
        return this.handleMsgForSDK(msg);
      }
    };
    MsgStore2.prototype.reCallMsgActive = function(msg) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var recallMsg, error_1;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("reCallMsgActive", msg);
              return [4, this.nim.V2NIMMessageService.revokeMessage(this.handleMsgForSDK(msg))];
            case 1:
              _d.sent();
              this.removeMsg(msg.conversationId, [msg.messageClientId]);
              recallMsg = this._createReCallMsg(msg);
              this.addMsg(recallMsg.conversationId, [recallMsg]);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("reCallMsgActive success", msg);
              return [3, 3];
            case 2:
              error_1 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("reCallMsgActive failed: ", msg, error_1);
              throw error_1;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.deleteMsgActive = function(msgs) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var conversationId, messageClientIds, error_2;
        var _this = this;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("deleteMsgActive", msgs);
              return [4, this.nim.V2NIMMessageService.deleteMessages(msgs.map(function(item) {
                return _this.handleMsgForSDK(item);
              }))];
            case 1:
              _d.sent();
              conversationId = msgs[0].conversationId;
              if (conversationId) {
                messageClientIds = msgs.map(function(item) {
                  return item.messageClientId;
                });
                this.removeMsg(conversationId, messageClientIds);
              }
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("deleteMsgActive success", msgs);
              return [3, 3];
            case 2:
              error_2 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.warn("deleteMsgActive failed, but delete msgs from memory: ", msgs, error_2);
              throw error_2;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.replyMessageByThreadActive = function(message, repliedMessage, conversationId, params) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var result, error_3;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("replyMessageByThreadActive", message, repliedMessage);
              return [4, this.nim.V2NIMMessageService.replyMessage(message, repliedMessage, params)];
            case 1:
              result = _d.sent();
              this.removeReplyMsgActive(conversationId);
              this._handleSendMsgSuccess(result.message);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("replyMessageByThreadActive success", { message, repliedMessage }, result);
              return [3, 3];
            case 2:
              error_3 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("replyMessageByThreadActive fail", message, repliedMessage);
              message.threadReply = repliedMessage;
              this._handleSendMsgSuccess(message);
              throw error_3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.sendMessageActive = function(params) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j;
      return __awaiter(this, void 0, void 0, function() {
        var msg, conversationId, conversationType, progress, sendBefore, serverExtension, previewImg, onAISend, newMsg, finalServerExtension, sendMsgParams, aiConfig, finalAIConfig, finalParams, replyMsg, message, error_4;
        var _this = this;
        return __generator(this, function(_k) {
          switch (_k.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("sendMessageActive", params);
              msg = params.msg, conversationId = params.conversationId, conversationType = params.conversationType, progress = params.progress, sendBefore = params.sendBefore, serverExtension = params.serverExtension, previewImg = params.previewImg, onAISend = params.onAISend;
              newMsg = __assign({}, msg);
              finalServerExtension = {};
              if ((_b = this.localOptions) === null || _b === void 0 ? void 0 : _b.sendReplyMsgByExt) {
                finalServerExtension = this._formatExtField(conversationId, serverExtension || JSON.parse(newMsg.serverExtension || "{}"));
              } else {
                finalServerExtension = serverExtension || JSON.parse(newMsg.serverExtension || "{}");
              }
              newMsg.serverExtension = Object.keys(finalServerExtension).length ? JSON.stringify(finalServerExtension) : void 0;
              newMsg.senderId = this.rootStore.userStore.myUserInfo.accountId;
              newMsg.receiverId = this.nim.V2NIMConversationIdUtil.parseConversationTargetId(conversationId);
              newMsg.conversationId = conversationId;
              if (conversationType !== void 0) {
                newMsg.conversationType = conversationType;
              }
              newMsg.sendingState = 3;
              if (previewImg) {
                newMsg.previewImg = previewImg;
              }
              if (progress) {
                newMsg.uploadProgress = 0;
              }
              _k.label = 1;
            case 1:
              _k.trys.push([1, 6, , 7]);
              return [4, (_d = (_c = this.localOptions).sendMsgBefore) === null || _d === void 0 ? void 0 : _d.call(_c, params)];
            case 2:
              sendMsgParams = _k.sent();
              if (sendMsgParams === false) {
                (_e = this.logger) === null || _e === void 0 ? void 0 : _e.log("sendMessageActive cancel", params, sendMsgParams);
                return [
                  2
                  /*return*/
                ];
              }
              aiConfig = this._getAIConfig(newMsg);
              this.addMsg(newMsg.conversationId, [newMsg]);
              sendBefore === null || sendBefore === void 0 ? void 0 : sendBefore(newMsg);
              finalAIConfig = aiConfig || (sendMsgParams === null || sendMsgParams === void 0 ? void 0 : sendMsgParams.aiConfig) ? __assign(__assign({}, aiConfig), sendMsgParams === null || sendMsgParams === void 0 ? void 0 : sendMsgParams.aiConfig) : void 0;
              finalParams = __assign(__assign({}, sendMsgParams), { pushConfig: (sendMsgParams === null || sendMsgParams === void 0 ? void 0 : sendMsgParams.pushConfig) || ((finalServerExtension === null || finalServerExtension === void 0 ? void 0 : finalServerExtension.yxAitMsg) ? this._formatExtAitToPushInfo(finalServerExtension.yxAitMsg, newMsg.text || "") : void 0), messageConfig: __assign({
                // 需要开启已读回执
                readReceiptEnabled: true
              }, sendMsgParams === null || sendMsgParams === void 0 ? void 0 : sendMsgParams.messageConfig), aiConfig: finalAIConfig });
              (_f = this.logger) === null || _f === void 0 ? void 0 : _f.log("sendMessageActive finalParams: ", newMsg, conversationId, finalParams);
              replyMsg = this.getReplyMsgActive(conversationId);
              if (!(replyMsg && !((_g = this.localOptions) === null || _g === void 0 ? void 0 : _g.sendReplyMsgByExt)))
                return [3, 4];
              newMsg.serverExtension = Object.keys(finalServerExtension).length ? JSON.stringify(finalServerExtension) : void 0;
              return [4, this.replyMessageByThreadActive(newMsg, replyMsg, conversationId, finalParams)];
            case 3:
              _k.sent();
              sendBefore === null || sendBefore === void 0 ? void 0 : sendBefore(newMsg);
              return [
                2
                /*return*/
              ];
            case 4:
              return [4, this.nim.V2NIMMessageService.sendMessage(newMsg, conversationId, finalParams, function(percentage) {
                var shouldContinue = progress === null || progress === void 0 ? void 0 : progress(percentage);
                if (shouldContinue) {
                  var _msg = _this.getMsg(conversationId, [
                    newMsg.messageClientId
                  ])[0];
                  if (_msg) {
                    _this.addMsg(conversationId, [
                      __assign(__assign({}, _msg), { uploadProgress: percentage })
                    ]);
                  }
                }
              })];
            case 5:
              message = _k.sent().message;
              if (finalAIConfig) {
                onAISend === null || onAISend === void 0 ? void 0 : onAISend(message, finalAIConfig);
              }
              if (msg.messageType === 6 || msg.messageType === 1 || msg.messageType === 3) {
                message.uploadProgress = 100;
              }
              this._handleSendMsgSuccess(message);
              (_h = this.logger) === null || _h === void 0 ? void 0 : _h.log("sendMessageActive success", message);
              if (newMsg.messageType === 0) {
                this.removeReplyMsgActive(conversationId);
              }
              return [2, message];
            case 6:
              error_4 = _k.sent();
              (_j = this.logger) === null || _j === void 0 ? void 0 : _j.error("sendMessageActive failed: ", error_4.toString(), newMsg);
              if (error_4.code === 191002) {
                this.removeMsg(conversationId, [newMsg.messageClientId]);
              } else {
                this._handleSendMsgFail(newMsg, error_4.code);
              }
              if (newMsg.messageType === 0) {
                this.removeReplyMsgActive(conversationId);
              }
              throw error_4;
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.cancelMessageAttachmentUploadActive = function(msg) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_5;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("cancelMessageAttachmentUploadActive", msg);
              return [4, this.nim.V2NIMMessageService.cancelMessageAttachmentUpload(this.handleMsgForSDK(msg))];
            case 1:
              _d.sent();
              this.removeMsg(msg.conversationId, [msg.messageClientId]);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("cancelMessageAttachmentUploadActive success", msg);
              return [3, 3];
            case 2:
              error_5 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("cancelMessageAttachmentUploadActive failed: ", msg, error_5);
              throw error_5;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.sendMsgReceiptActive = function(msg) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_6;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("sendMsgReceiptActive", msg);
              return [4, this.nim.V2NIMMessageService.sendP2PMessageReceipt(this.handleMsgForSDK(msg))];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("sendMsgReceiptActive success", msg);
              return [3, 3];
            case 2:
              error_6 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("sendMsgReceiptActive failed: ", msg, error_6.toString());
              throw error_6;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.addCollectionActive = function(params) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_7;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("addCollectionActive", params);
              return [4, this.nim.V2NIMMessageService.addCollection(params)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("addCollectionActive success", params);
              return [3, 3];
            case 2:
              error_7 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("addCollectionActive failed: ", params, error_7.toString());
              throw error_7;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.removeCollectionsActive = function(collections) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_8;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("removeCollectionsActive", collections);
              return [4, this.nim.V2NIMMessageService.removeCollections(collections)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("removeCollectionsActive success", collections);
              return [3, 3];
            case 2:
              error_8 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("removeCollectionsActive failed: ", collections, error_8.toString());
              throw error_8;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.getCollectionListByOptionActive = function(option) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_9;
        var _this = this;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              res = [];
              _d.label = 1;
            case 1:
              _d.trys.push([1, 3, , 4]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getCollectionListByOptionActive", option);
              return [4, this.nim.V2NIMMessageService.getCollectionListByOption(option)];
            case 2:
              res = _d.sent();
              res.forEach(function(item) {
                var collectionData = JSON.parse(item.collectionData);
                var msg = _this.nim.V2NIMMessageConverter.messageDeserialization(collectionData.message);
                if (msg) {
                  _this.collectionMsgs.set(msg.messageClientId, msg);
                }
              });
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getCollectionListByOptionActive success", option);
              return [3, 4];
            case 3:
              error_9 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getCollectionListByOptionActive failed: ", option, error_9.toString());
              throw error_9;
            case 4:
              return [2, res];
          }
        });
      });
    };
    MsgStore2.prototype.sendTeamMsgReceiptActive = function(msgs) {
      var _a, _b, _c, _d;
      return __awaiter(this, void 0, void 0, function() {
        var finalMsgs, error_10;
        var _this = this;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 3, , 4]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("sendTeamMsgReceiptActive", msgs);
              if (!msgs.length)
                return [3, 2];
              finalMsgs = msgs.map(function(item) {
                return _this.handleMsgForSDK(item);
              });
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("sendTeamMsgReceiptActive finalParams: ", finalMsgs);
              return [4, this.nim.V2NIMMessageService.sendTeamMessageReceipts(finalMsgs)];
            case 1:
              _e.sent();
              _e.label = 2;
            case 2:
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("sendTeamMsgReceiptActive success", msgs);
              return [3, 4];
            case 3:
              error_10 = _e.sent();
              (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error("sendTeamMsgReceiptActive failed: ", msgs, error_10.toString());
              throw error_10;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.getTeamMessageReceiptDetailsActive = function(message, memberAccountIds) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_11;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getTeamMessageReceiptDetailsActive", message, memberAccountIds);
              return [4, this.nim.V2NIMMessageService.getTeamMessageReceiptDetail(message, memberAccountIds)];
            case 1:
              res = _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getTeamMessageReceiptDetailsActive success:", message, memberAccountIds, res);
              return [2, res];
            case 2:
              error_11 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getTeamMessageReceiptDetailsActive failed: ", message, memberAccountIds, error_11.toString());
              throw error_11;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.getHistoryMsgActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var conversationId, endTime, lastMsgId, _d, limit, conversationType, finalParams, anchorMessage, msgs, myMsgs, error_12;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 4, , 5]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getHistoryMsgActive", options);
              conversationId = options.conversationId, endTime = options.endTime, lastMsgId = options.lastMsgId, _d = options.limit, limit = _d === void 0 ? 100 : _d;
              conversationType = this.nim.V2NIMConversationIdUtil.parseConversationType(conversationId);
              finalParams = {
                conversationId,
                endTime,
                limit
              };
              if (lastMsgId) {
                anchorMessage = this.getMsg(conversationId, [lastMsgId])[0];
                if (anchorMessage) {
                  finalParams.anchorMessage = anchorMessage;
                }
              }
              return [4, this.nim.V2NIMMessageService.getMessageList(finalParams)];
            case 1:
              msgs = _e.sent();
              this.addMsg(conversationId, msgs);
              if (!(conversationType === 2 && this.rootStore.localOptions.teamMsgReceiptVisible))
                return [3, 3];
              myMsgs = msgs.filter(function(item) {
                return item.isSelf;
              }).filter(function(item) {
                return ![
                  5,
                  10
                ].includes(item.messageType);
              });
              return [4, this.getTeamMsgReadsActive(myMsgs, conversationId)];
            case 2:
              _e.sent();
              _e.label = 3;
            case 3:
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getHistoryMsgActive success", options, finalParams, msgs);
              return [2, msgs];
            case 4:
              error_12 = _e.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getHistoryMsgActive failed: ", options, error_12.toString());
              throw error_12;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.forwardMsgActive = function(msg, conversationId, comment) {
      var _a, _b, _c, _d;
      return __awaiter(this, void 0, void 0, function() {
        var serverExtension, deleteKeys, finalMsg, forwardMsg, textMsg, error_13;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 5, , 6]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("forwardMsgActive", msg, conversationId, comment);
              serverExtension = msg === null || msg === void 0 ? void 0 : msg.serverExtension;
              if (serverExtension) {
                try {
                  serverExtension = JSON.parse(serverExtension);
                  delete serverExtension.yxReplyMsg;
                  delete serverExtension.yxAitMsg;
                  serverExtension = JSON.stringify(serverExtension);
                } catch (error) {
                }
              }
              deleteKeys = ["canRecall", "reCallTimer", "yxUnread", "yxRead"];
              deleteKeys.forEach(function(key) {
                delete msg[key];
              });
              if (((_b = msg.pushConfig) === null || _b === void 0 ? void 0 : _b.pushContent) === "") {
                delete msg.pushConfig.pushContent;
              }
              finalMsg = this.handleMsgForSDK(__assign(__assign({}, msg), { serverExtension }));
              forwardMsg = this.nim.V2NIMMessageCreator.createForwardMessage(finalMsg);
              if (!forwardMsg)
                return [3, 2];
              return [4, this.sendMessageActive({
                msg: forwardMsg,
                conversationId
              })];
            case 1:
              _e.sent();
              _e.label = 2;
            case 2:
              if (!comment)
                return [3, 4];
              textMsg = this.nim.V2NIMMessageCreator.createTextMessage(comment);
              return [4, this.sendMessageActive({ msg: textMsg, conversationId })];
            case 3:
              _e.sent();
              _e.label = 4;
            case 4:
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("forwardMsgActive success", msg, conversationId, comment);
              return [3, 6];
            case 5:
              error_13 = _e.sent();
              (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error("forwardMsgActive failed: ", error_13);
              throw error_13;
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.getTeamMsgReadsActive = function(msgs, conversationId) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_14, newMsgs;
        var _this = this;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getTeamMsgReadsActive", msgs, conversationId);
              res = [];
              if (!msgs.length)
                return [3, 4];
              _c.label = 1;
            case 1:
              _c.trys.push([1, 3, , 4]);
              return [4, this.nim.V2NIMMessageService.getTeamMessageReceipts(msgs.map(function(item) {
                return _this.handleMsgForSDK(item);
              }))];
            case 2:
              res = _c.sent();
              return [3, 4];
            case 3:
              error_14 = _c.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn("getTeamMsgReadsActive failed but continue: ", error_14.toString());
              return [3, 4];
            case 4:
              newMsgs = msgs.filter(function(msg) {
                return res.some(function(status) {
                  return msg.messageClientId === status.messageClientId;
                });
              }).map(function(item) {
                var teamMsgReceipt = res.find(function(j) {
                  return j.messageClientId === item.messageClientId;
                });
                if (teamMsgReceipt) {
                  return _this._updateReceiptMsg(item, {
                    unread: teamMsgReceipt.unreadCount,
                    read: teamMsgReceipt.readCount
                  });
                }
                return item;
              });
              this.addMsg(conversationId, newMsgs);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.pinMessageActive = function(message, serverExtension) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var error_15;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("pinMessageActive", message, serverExtension);
              _c.label = 1;
            case 1:
              _c.trys.push([1, 3, , 4]);
              return [4, this.nim.V2NIMMessageService.pinMessage(message, serverExtension)];
            case 2:
              _c.sent();
              return [3, 4];
            case 3:
              error_15 = _c.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn("pinMessageActive failed but continue: ", error_15.toString());
              throw error_15;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.unpinMessageActive = function(messageRefer, serverExtension) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var error_16;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("uppinMessageActive", messageRefer, serverExtension);
              _c.label = 1;
            case 1:
              _c.trys.push([1, 3, , 4]);
              return [4, this.nim.V2NIMMessageService.unpinMessage(messageRefer, serverExtension)];
            case 2:
              _c.sent();
              return [3, 4];
            case 3:
              error_16 = _c.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn("uppinMessageActive failed but continue: ", error_16.toString());
              throw error_16;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.updatePinMessageActive = function(message, serverExtension) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var error_17;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("updatePinMessageActive", message, serverExtension);
              _c.label = 1;
            case 1:
              _c.trys.push([1, 3, , 4]);
              return [4, this.nim.V2NIMMessageService.updatePinMessage(message, serverExtension)];
            case 2:
              _c.sent();
              return [3, 4];
            case 3:
              error_17 = _c.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn("updatePinMessageActive failed but continue: ", error_17.toString());
              throw error_17;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.getPinnedMessageListActive = function(conversationId) {
      return __awaiter(this, void 0, void 0, function() {
        var curPinMsgsMap, pinInfos;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              curPinMsgsMap = this.pinMsgs.get(conversationId);
              pinInfos = [];
              if (!curPinMsgsMap)
                return [3, 1];
              pinInfos = __spreadArray([], __read(curPinMsgsMap.values()), false);
              return [3, 3];
            case 1:
              return [4, this._getPinnedMessageListByServer(conversationId)];
            case 2:
              pinInfos = _a.sent();
              _a.label = 3;
            case 3:
              return [
                4,
                this.completePinnedMessageList(conversationId, pinInfos)
                // 这里
              ];
            case 4:
              pinInfos = _a.sent();
              pinInfos = pinInfos.filter(function(pinInfo) {
                return pinInfo.pinState > 0 && pinInfo.message;
              }).sort(function(a, b) {
                return b.message.createTime - a.message.createTime;
              });
              return [2, pinInfos];
          }
        });
      });
    };
    MsgStore2.prototype.stopAIStreamMessageActive = function(message, params) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var error_18;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("stopAIStreamMessageActive", message);
              _c.label = 1;
            case 1:
              _c.trys.push([1, 3, , 4]);
              return [4, this.nim.V2NIMMessageService.stopAIStreamMessage(message, params)];
            case 2:
              _c.sent();
              return [3, 4];
            case 3:
              error_18 = _c.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.error("stopAIStreamMessageActive failed ", error_18.toString());
              throw error_18;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.regenAIMessageActive = function(message, params) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var error_19;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("regenAIMessageActive", message);
              _c.label = 1;
            case 1:
              _c.trys.push([1, 3, , 4]);
              return [4, this.nim.V2NIMMessageService.regenAIMessage(message, params)];
            case 2:
              _c.sent();
              return [3, 4];
            case 3:
              error_19 = _c.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.error("regenAIMessageActive failed ", error_19.toString());
              throw error_19;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.voiceToTextActive = function(message) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var text, error_20;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              if (message.textOfVoice)
                return [
                  2
                  /*return*/
                ];
              if (!message.attachment)
                return [
                  2
                  /*return*/
                ];
              if (!("url" in message.attachment))
                return [
                  2
                  /*return*/
                ];
              if (!message.attachment.url)
                return [
                  2
                  /*return*/
                ];
              if (!("duration" in message.attachment))
                return [
                  2
                  /*return*/
                ];
              if (!message.attachment.duration)
                return [
                  2
                  /*return*/
                ];
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("voiceToTextActive", message);
              _c.label = 1;
            case 1:
              _c.trys.push([1, 3, , 4]);
              return [4, this.nim.V2NIMMessageService.voiceToText({
                voiceUrl: message.attachment.url,
                duration: message.attachment.duration,
                sceneName: message.attachment.sceneName,
                // 在群里与产品孙有军交流, 得知可以写死 aac 和 16000
                mimeType: "aac",
                sampleRate: "16000"
              })];
            case 2:
              text = _c.sent();
              if (!text)
                throw new Error("voiceToText empty");
              this.updateMsg(message.conversationId, message.messageClientId, {
                textOfVoice: text
              });
              return [3, 4];
            case 3:
              error_20 = _c.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn("voiceToTextActive failed: ", error_20.toString());
              throw error_20;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    MsgStore2.prototype.addMsg = function(conversationId, msgs) {
      var _this = this;
      var sortFunc = function(a, b) {
        return a.createTime - b.createTime;
      };
      var _msgs = this.msgs.get(conversationId) || [];
      var curPinMsgsMap = this.pinMsgs.get(conversationId);
      msgs.filter(function(item) {
        return !!item.messageClientId;
      }).map(function(item) {
        item = _this.handleReceiveAIMsg(item);
        if (curPinMsgsMap)
          item = _this.handleMsgPinState(item, curPinMsgsMap);
        return item;
      }).forEach(function(item) {
        var newMsg = __assign({}, item);
        var _msg = _msgs.find(function(msg) {
          return msg.messageClientId === newMsg.messageClientId;
        });
        if (_msg) {
          if (_msg.createTime <= newMsg.createTime || _msg.sendingState === 3) {
            if (_msg.canRecall !== void 0 && _msg.reCallTimer !== void 0) {
              newMsg.canRecall = _msg.canRecall;
              newMsg.reCallTimer = _msg.reCallTimer;
            }
            if (_msg.textOfVoice) {
              newMsg.textOfVoice = _msg.textOfVoice;
            }
            _msgs.splice(_msgs.indexOf(_msg), 1, newMsg);
          }
        } else {
          _msgs.push(item);
        }
      });
      this.msgs.set(conversationId, __spreadArray([], __read(_msgs), false).sort(sortFunc), this.rootStore.uiStore.selectedConversation === conversationId);
    };
    MsgStore2.prototype.removeMsg = function(conversationId, idClients) {
      var _this = this;
      if (!conversationId) {
        this.getMsg().forEach(function(item) {
          _this._handleClearMsgTimer(item);
        });
        this.msgs.clear();
        return;
      }
      var msgs = this.msgs.get(conversationId);
      if (!msgs) {
        return;
      }
      if (!idClients || !idClients.length) {
        msgs.forEach(function(item) {
          _this._handleClearMsgTimer(item);
        });
        this.msgs.delete(conversationId);
        return;
      }
      this.msgs.set(conversationId, msgs.filter(function(msg) {
        var isDelete = idClients.includes(msg.messageClientId) && // 无法删除撤回消息
        !(msg.messageType === 100 && msg.recallType === "beReCallMsg");
        if (isDelete) {
          _this._handleClearMsgTimer(msg);
        }
        return !isDelete;
      }), this.rootStore.uiStore.selectedConversation === conversationId);
    };
    MsgStore2.prototype.deletePinInfoByMessageClientId = function(conversationId, messageClientIds) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("deletePinInfoByMessageClientId", conversationId, messageClientIds);
      this.pinMsgs.delete(conversationId, messageClientIds);
    };
    MsgStore2.prototype.getMsg = function(conversationId, idClients) {
      if (!conversationId) {
        return this.msgs.values();
      }
      var msgs = this.msgs.get(conversationId) || [];
      if (!idClients || !idClients.length) {
        return msgs;
      }
      return msgs.filter(function(item) {
        return idClients.includes(item.messageClientId);
      });
    };
    MsgStore2.prototype.updateMsg = function(conversationId, idClient, updateParam) {
      var msgs = this.msgs.get(conversationId);
      if (!msgs)
        return;
      var msg = msgs.findIndex(function(item) {
        return item.messageClientId === idClient;
      });
      if (!msg)
        return;
      this.msgs.set(conversationId, msgs.map(function(msg2) {
        if (msg2.messageClientId === idClient) {
          msg2 = __assign(__assign({}, msg2), updateParam);
        }
        return msg2;
      }), this.rootStore.uiStore.selectedConversation === conversationId);
    };
    MsgStore2.prototype.handleReceiveAIMsg = function(msg) {
      var myAccountId = this.rootStore.userStore.myUserInfo.accountId;
      var aiConfig = msg.aiConfig;
      var senderId = aiConfig ? aiConfig.aiStatus === 2 ? aiConfig.accountId : msg.senderId : msg.senderId;
      var isSelf = senderId === myAccountId;
      return __assign(__assign({}, msg), { __kit__isSelf: msg.isSelf, __kit__senderId: msg.senderId, isSelf });
    };
    MsgStore2.prototype.handleMsgPinState = function(msg, curPinMsgsMap) {
      var pinInfo = curPinMsgsMap.get(msg.messageClientId);
      if (pinInfo) {
        msg.pinState = pinInfo.pinState;
        msg.operatorId = pinInfo.operatorId;
      }
      return msg;
    };
    MsgStore2.prototype.handleMsgForSDK = function(msg) {
      var __kit__isSelf = msg.__kit__isSelf, __kit__senderId = msg.__kit__senderId, rest = __rest(msg, ["__kit__isSelf", "__kit__senderId"]);
      var senderId = msg.senderId, isSelf = msg.isSelf;
      if (__kit__isSelf) {
        isSelf = __kit__isSelf;
      }
      if (__kit__senderId) {
        senderId = __kit__senderId;
      }
      return __assign(__assign({}, rest), { senderId, isSelf });
    };
    MsgStore2.prototype._getMessageListByRefer = function(messageRefers) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_21;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              res = [];
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this.nim.V2NIMMessageService.getMessageListByRefers(messageRefers)];
            case 2:
              res = _b.sent();
              return [3, 4];
            case 3:
              error_21 = _b.sent();
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.warn("_getMessageListByRefer failed but continue: ", error_21.toString());
              return [3, 4];
            case 4:
              return [2, res];
          }
        });
      });
    };
    MsgStore2.prototype._getPinnedMessageListByServer = function(conversationId) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var res, pinInfos, error_22;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_getPinnedMessageListByServer", conversationId);
              res = [];
              pinInfos = [];
              _c.label = 1;
            case 1:
              _c.trys.push([1, 3, , 4]);
              return [4, this.nim.V2NIMMessageService.getPinnedMessageList(conversationId)];
            case 2:
              res = _c.sent();
              return [3, 4];
            case 3:
              error_22 = _c.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn("_getPinnedMessageListByServer failed but continue: ", error_22.toString());
              return [3, 4];
            case 4:
              res.forEach(function(pin) {
                pinInfos.push(__assign({ pinState: 1 }, pin));
              });
              this.pinMsgs.set(conversationId, pinInfos);
              if (pinInfos.length) {
                this._updateMsgsPinState(conversationId, pinInfos);
              }
              return [2, pinInfos];
          }
        });
      });
    };
    MsgStore2.prototype.completePinnedMessageList = function(conversationId, pinInfos) {
      return __awaiter(this, void 0, void 0, function() {
        var res, messageRefers;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              res = [];
              if (!pinInfos.length)
                return [2, pinInfos];
              messageRefers = [];
              pinInfos.forEach(function(pinInfo) {
                if (!pinInfo.message) {
                  messageRefers.push(pinInfo.messageRefer);
                }
              });
              if (!messageRefers.length)
                return [
                  2,
                  pinInfos
                  // 这里不做 try catch，因为 _getMessageListByRefer 已经处理了
                  // 这里全都从服务器获取补全的消息，不从内存中获取已有的补全消息
                ];
              return [4, this._getMessageListByRefer(messageRefers)];
            case 1:
              res = _a.sent();
              if (res.length) {
                pinInfos = pinInfos.map(function(pinInfo) {
                  var msg = res.find(function(item) {
                    return item.messageClientId === pinInfo.messageRefer.messageClientId;
                  });
                  if (msg) {
                    pinInfo = __assign(__assign({}, pinInfo), { message: msg });
                  }
                  return pinInfo;
                });
                this.pinMsgs.set(conversationId, pinInfos);
              }
              return [2, pinInfos];
          }
        });
      });
    };
    MsgStore2.prototype._handleSendMsgSuccess = function(msg) {
      if (msg && msg.conversationId) {
        this.addMsg(msg.conversationId, [msg]);
      }
    };
    MsgStore2.prototype._handleSendMsgFail = function(msg, errorCode) {
      if (msg && msg.conversationId) {
        var oldMsg = this.getMsg(msg.conversationId, [msg.messageClientId])[0];
        this._handleClearMsgTimer(oldMsg);
        this.addMsg(msg.conversationId, [
          __assign(__assign(__assign({}, oldMsg), msg), {
            messageStatus: {
              errorCode
            },
            uploadProgress: void 0,
            sendingState: 2,
            errorCode
          })
        ]);
      }
    };
    MsgStore2.prototype._handleClearMsgTimer = function(msg) {
      if (msg) {
        clearTimeout(msg.canEditTimer);
        clearTimeout(msg.reCallTimer);
      }
    };
    MsgStore2.prototype._onReceiveMessages = function(data) {
      var _this = this;
      var _a, _b, _c, _d;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onReceiveMessages: ", data);
      data.forEach(function(item) {
        _this.addMsg(item.conversationId, [item]);
      });
      if ((_b = this.rootStore.sdkOptions) === null || _b === void 0 ? void 0 : _b.enableV2CloudConversation) {
        (_c = this.rootStore.conversationStore) === null || _c === void 0 ? void 0 : _c.handleConversationWithAit(data);
      } else {
        (_d = this.rootStore.localConversationStore) === null || _d === void 0 ? void 0 : _d.handleConversationWithAit(data);
      }
    };
    MsgStore2.prototype._onReceiveMessagesModified = function(data) {
      var _this = this;
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onReceiveMessagesModified: ", data);
      data.forEach(function(item) {
        _this.addMsg(item.conversationId, [item]);
      });
    };
    MsgStore2.prototype._onClearHistoryNotifications = function(data) {
      var _this = this;
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onClearHistory: ", data);
      data.forEach(function(item) {
        _this.removeMsg(item.conversationId);
      });
    };
    MsgStore2.prototype._onMessageDeletedNotifications = function(data) {
      var _this = this;
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onMessageDeletedNotifications: ", data);
      var res = {};
      data.forEach(function(item) {
        var conversationId = item.messageRefer.conversationId;
        if (res[conversationId]) {
          res[conversationId].push(item);
        } else {
          res[conversationId] = [item];
        }
      });
      Object.keys(res).forEach(function(conversationId) {
        var messageClientIds = res[conversationId].map(function(item) {
          return item.messageRefer.messageClientId;
        });
        _this.removeMsg(conversationId, messageClientIds);
        _this.deletePinInfoByMessageClientId(conversationId, messageClientIds);
      });
    };
    MsgStore2.prototype._onMessagePinNotification = function(data) {
      var _this = this;
      var _a = data.pin, operatorId = _a.operatorId, messageRefer = _a.messageRefer, serverExtension = _a.serverExtension, createTime = _a.createTime, updateTime = _a.updateTime;
      var curPinMsgsMap = this.pinMsgs.get(messageRefer.conversationId);
      if (!curPinMsgsMap)
        return;
      var pinState = data.pinState;
      var pinInfo = curPinMsgsMap === null || curPinMsgsMap === void 0 ? void 0 : curPinMsgsMap.get(messageRefer.messageClientId);
      var newPinInfo = [
        {
          pinState,
          messageRefer,
          operatorId,
          serverExtension,
          // @ts-ignore
          createTime: (pinInfo === null || pinInfo === void 0 ? void 0 : pinInfo.createTime) || createTime,
          updateTime
        }
      ];
      this.completePinnedMessageList(messageRefer.conversationId, newPinInfo).then(function(pinInfo2) {
        _this._updateMsgsPinState(messageRefer.conversationId, pinInfo2);
      });
    };
    MsgStore2.prototype._updateMsgsPinState = function(conversationId, pinInfos) {
      var _msgs = this.getMsg(conversationId) || [];
      var hasChange = false;
      pinInfos.forEach(function(pinInfo) {
        var msg = _msgs.find(function(msg2) {
          return msg2.messageClientId === pinInfo.messageRefer.messageClientId;
        });
        if (msg && msg.pinState !== pinInfo.pinState) {
          var newMsg = __assign({}, msg);
          newMsg.pinState = pinInfo.pinState;
          newMsg.operatorId = pinInfo.operatorId;
          _msgs.splice(_msgs.indexOf(msg), 1, newMsg);
          hasChange = true;
        }
      });
      if (hasChange) {
        this.msgs.set(conversationId, _msgs, this.rootStore.uiStore.selectedConversation === conversationId);
      }
    };
    MsgStore2.prototype._onMessageQuickCommentNotification = function() {
    };
    MsgStore2.prototype._onMessageRevokeNotifications = function(data) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_b) {
          (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onMessageRevokeNotifications: ", data);
          data.forEach(function(item) {
            return __awaiter(_this, void 0, void 0, function() {
              var oldMsg, conversationId, messageClientIds, msg, conversation, aitMsgs, messageClientId_1;
              var _a2, _b2, _c, _d, _e, _f;
              return __generator(this, function(_g) {
                oldMsg = this.getMsg(item.messageRefer.conversationId, [
                  item.messageRefer.messageClientId
                ])[0];
                if (oldMsg && oldMsg.recallType) {
                  return [
                    2
                    /*return*/
                  ];
                }
                conversationId = item.messageRefer.conversationId;
                messageClientIds = [item.messageRefer.messageClientId];
                this.removeMsg(conversationId, messageClientIds);
                this.deletePinInfoByMessageClientId(conversationId, messageClientIds);
                msg = this._createBeReCallMsg(item);
                this.addMsg(msg.conversationId, [msg]);
                if (item.messageRefer.conversationType === 2) {
                  conversation = ((_a2 = this.rootStore.sdkOptions) === null || _a2 === void 0 ? void 0 : _a2.enableV2CloudConversation) ? (_b2 = this.rootStore.conversationStore) === null || _b2 === void 0 ? void 0 : _b2.conversations.get(conversationId) : (_c = this.rootStore.localConversationStore) === null || _c === void 0 ? void 0 : _c.conversations.get(conversationId);
                  if (conversation) {
                    aitMsgs = conversation.aitMsgs || [];
                    messageClientId_1 = item.messageRefer.messageClientId;
                    if (aitMsgs.includes(messageClientId_1)) {
                      aitMsgs = aitMsgs.filter(function(item2) {
                        return item2 !== messageClientId_1;
                      });
                      if ((_d = this.rootStore.sdkOptions) === null || _d === void 0 ? void 0 : _d.enableV2CloudConversation) {
                        (_e = this.rootStore.conversationStore) === null || _e === void 0 ? void 0 : _e.updateConversation([
                          __assign(__assign({}, conversation), { aitMsgs })
                        ]);
                      } else {
                        (_f = this.rootStore.localConversationStore) === null || _f === void 0 ? void 0 : _f.updateConversation([
                          __assign(__assign({}, conversation), { aitMsgs })
                        ]);
                      }
                    }
                  }
                }
                return [
                  2
                  /*return*/
                ];
              });
            });
          });
          return [
            2
            /*return*/
          ];
        });
      });
    };
    MsgStore2.prototype._onReceiveP2PMessageReadReceipts = function(data) {
      var _this = this;
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onReceiveP2PMessageReadReceipts: ", data);
      data.forEach(function(item) {
        var _a2, _b, _c, _d, _e, _f;
        var oldConversation = ((_a2 = _this.rootStore.sdkOptions) === null || _a2 === void 0 ? void 0 : _a2.enableV2CloudConversation) ? (_b = _this.rootStore.conversationStore) === null || _b === void 0 ? void 0 : _b.conversations.get(item.conversationId) : (_c = _this.rootStore.localConversationStore) === null || _c === void 0 ? void 0 : _c.conversations.get(item.conversationId);
        if (oldConversation && item.timestamp > (oldConversation.msgReceiptTime || 0)) {
          if ((_d = _this.rootStore.sdkOptions) === null || _d === void 0 ? void 0 : _d.enableV2CloudConversation) {
            (_e = _this.rootStore.conversationStore) === null || _e === void 0 ? void 0 : _e.updateConversation([
              __assign(__assign({}, oldConversation), { msgReceiptTime: item.timestamp })
            ]);
          } else {
            (_f = _this.rootStore.localConversationStore) === null || _f === void 0 ? void 0 : _f.updateConversation([
              __assign(__assign({}, oldConversation), { msgReceiptTime: item.timestamp })
            ]);
          }
        }
      });
    };
    MsgStore2.prototype._onReceiveTeamMessageReadReceipts = function(data) {
      var _this = this;
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onReceiveTeamMessageReadReceipts: ", data);
      data.sort(function(a, b) {
        return a.readCount - b.readCount;
      });
      data.forEach(function(msgReadReceipt) {
        var conversationId = msgReadReceipt.conversationId;
        var msg = _this.getMsg(conversationId, [
          msgReadReceipt.messageClientId
        ])[0];
        if (msg) {
          var newMsg = _this._updateReceiptMsg(msg, {
            unread: msgReadReceipt.unreadCount,
            read: msgReadReceipt.readCount
          });
          _this.addMsg(conversationId, [newMsg]);
        }
      });
    };
    MsgStore2.prototype._formatExtField = function(conversationId, serverExtension) {
      var extObj = serverExtension || {};
      var replyMsg = this.getReplyMsgActive(conversationId);
      if (replyMsg) {
        extObj.yxReplyMsg = {
          idClient: replyMsg.messageClientId,
          scene: replyMsg.conversationType,
          from: replyMsg.senderId,
          receiverId: replyMsg.receiverId,
          to: replyMsg.conversationId,
          idServer: replyMsg.messageServerId,
          time: replyMsg.createTime
        };
      }
      return extObj;
    };
    MsgStore2.prototype._updateReceiptMsg = function(originMsg, data) {
      return __assign(__assign({}, originMsg), { yxUnread: Number(data.unread), yxRead: Number(data.read) });
    };
    MsgStore2.prototype._formatExtAitToPushInfo = function(yxAitMsg, content) {
      function getForcePushIDsList(obj) {
        return Object.keys(obj).includes(AT_ALL_ACCOUNT) ? void 0 : Object.keys(obj);
      }
      var pushInfo = {
        forcePushAccountIds: getForcePushIDsList(yxAitMsg),
        forcePush: true,
        forcePushContent: content
      };
      return pushInfo;
    };
    MsgStore2.prototype._createReCallMsg = function(msg) {
      var _this = this;
      var recallMsg = __assign(__assign({}, msg), {
        isSelf: true,
        sendingState: 1,
        messageType: 100,
        recallType: "reCallMsg",
        messageClientId: "recall-".concat(msg.messageClientId)
      });
      if ([
        100,
        0
      ].includes(msg.messageType)) {
        recallMsg.oldText = msg.text;
        recallMsg.canEdit = true;
        recallMsg.isRecallMsg = true;
        recallMsg.canEditTimer = setTimeout(function() {
          var newMsg = _this.getMsg(recallMsg.conversationId, [
            recallMsg.messageClientId
          ])[0];
          if (newMsg) {
            _this.addMsg(newMsg.conversationId, [
              __assign(__assign({}, newMsg), { canEdit: false })
            ]);
          }
        }, RECALL_TIME);
      }
      return recallMsg;
    };
    MsgStore2.prototype._createBeReCallMsg = function(data) {
      return __assign(__assign({}, data.messageRefer), {
        isSelf: data.messageRefer.senderId === this.rootStore.userStore.myUserInfo.accountId,
        sendingState: 1,
        messageType: 100,
        recallType: "beReCallMsg",
        messageClientId: "recall-".concat(data.messageRefer.messageClientId)
      });
    };
    MsgStore2.prototype._getAIConfig = function(msg) {
      var _this = this;
      var _a;
      var serverExtension = msg.serverExtension, conversationId = msg.conversationId, receiverId = msg.receiverId, messageType = msg.messageType, _b = msg.text, text = _b === void 0 ? "" : _b;
      var serverExt;
      try {
        serverExt = JSON.parse(serverExtension || "{}");
      } catch (error) {
        serverExt = {};
      }
      var yxAitMsg = serverExt.yxAitMsg || {};
      var replyMsg = this.getReplyMsgActive(conversationId);
      var relation = this.rootStore.uiStore.getRelation(receiverId).relation;
      var myAccountId = this.rootStore.userStore.myUserInfo.accountId;
      var aiConfig = void 0;
      if (relation === "ai") {
        if (messageType === 0) {
          var _msgs = (this.msgs.get(conversationId) || []).slice(-AI_MESSAGE_LIMIT).filter(function(item) {
            return item.messageType === 0;
          });
          var myIndex = _msgs.findIndex(function(item) {
            return item.senderId === myAccountId;
          });
          _msgs = myIndex === -1 ? [] : _msgs.slice(myIndex);
          aiConfig = {
            accountId: receiverId,
            content: { msg: text, type: 0 },
            // 取最后30条消息作为上下文
            messages: _msgs.map(function(item) {
              var role = item.senderId === myAccountId ? "user" : "assistant";
              return {
                role,
                msg: item.text || "",
                type: 0
              };
            })
          };
        } else {
          aiConfig = {
            accountId: receiverId
          };
        }
      }
      var newYxAitMsg = {};
      Object.keys(yxAitMsg).forEach(function(account) {
        if (_this.rootStore.aiUserStore.aiUsers.has(account)) {
          newYxAitMsg[account] = yxAitMsg[account];
        }
      });
      var aiAtAccount = this._findMinStart(newYxAitMsg);
      var aiAtMember = this.rootStore.aiUserStore.aiUsers.get(aiAtAccount || "");
      if (aiAtMember) {
        aiConfig = {
          accountId: aiAtMember.accountId,
          content: { msg: text, type: 0 }
        };
      }
      if (replyMsg && aiConfig) {
        if (replyMsg.messageType === 0) {
          aiConfig.messages = [
            {
              role: "user",
              msg: replyMsg.text || "",
              type: 0
            }
          ];
        } else {
          aiConfig.messages = void 0;
        }
      }
      aiConfig === null || aiConfig === void 0 ? void 0 : aiConfig.aiStream = (_a = this.localOptions) === null || _a === void 0 ? void 0 : _a.aiStream;
      return aiConfig;
    };
    MsgStore2.prototype._findMinStart = function(data) {
      var e_1, _a;
      var minStart = Number.MAX_VALUE;
      var minStartKey = void 0;
      for (var key in data) {
        var segments = data[key].segments;
        try {
          for (var segments_1 = (e_1 = void 0, __values(segments)), segments_1_1 = segments_1.next(); !segments_1_1.done; segments_1_1 = segments_1.next()) {
            var segment = segments_1_1.value;
            if (segment.start < minStart) {
              minStart = segment.start;
              minStartKey = key;
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (segments_1_1 && !segments_1_1.done && (_a = segments_1.return))
              _a.call(segments_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
      return minStartKey;
    };
    return MsgStore2;
  }()
);
var RelationStore = (
  /** @class */
  function() {
    function RelationStore2(rootStore, nim) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.blacklist = [];
      this.mutes = [];
      this.logger = null;
      makeAutoObservable(this);
      this.logger = rootStore.logger;
      this._onBlockListAdded = this._onBlockListAdded.bind(this);
      this._onBlockListRemoved = this._onBlockListRemoved.bind(this);
      this._onP2PMessageMuteModeChanged = this._onP2PMessageMuteModeChanged.bind(this);
      nim.V2NIMUserService.on("onBlockListAdded", this._onBlockListAdded);
      nim.V2NIMUserService.on("onBlockListRemoved", this._onBlockListRemoved);
      nim.V2NIMSettingService.on("onP2PMessageMuteModeChanged", this._onP2PMessageMuteModeChanged);
    }
    RelationStore2.prototype.resetState = function() {
      this.blacklist = [];
      this.mutes = [];
    };
    RelationStore2.prototype.destroy = function() {
      this.resetState();
      this.nim.V2NIMUserService.off("onBlockListAdded", this._onBlockListAdded);
      this.nim.V2NIMUserService.off("onBlockListRemoved", this._onBlockListRemoved);
      this.nim.V2NIMSettingService.off("onP2PMessageMuteModeChanged", this._onP2PMessageMuteModeChanged);
    };
    RelationStore2.prototype.addBlacklist = function(accounts) {
      this.blacklist = __spreadArray([], __read(new Set(this.blacklist.concat(accounts))), false);
    };
    RelationStore2.prototype.removeBlacklist = function(accounts) {
      this.blacklist = this.blacklist.filter(function(i) {
        return accounts.every(function(j) {
          return i !== j;
        });
      });
    };
    RelationStore2.prototype.isInBlacklist = function(account) {
      return this.blacklist.includes(account);
    };
    RelationStore2.prototype.addMutes = function(accounts) {
      this.mutes = __spreadArray([], __read(new Set(this.mutes.concat(accounts))), false);
    };
    RelationStore2.prototype.removeMutes = function(accounts) {
      this.mutes = this.mutes.filter(function(i) {
        return accounts.every(function(j) {
          return i !== j;
        });
      });
    };
    RelationStore2.prototype.getBlockListActive = function() {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_1;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getBlockListActive");
              return [4, this.nim.V2NIMUserService.getBlockList()];
            case 1:
              res = _c.sent();
              this.addBlacklist(res);
              return [2, res];
            case 2:
              error_1 = _c.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.error("getBlockListActive failed: ", error_1);
              throw error_1;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    RelationStore2.prototype.getP2PMuteListActive = function() {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_2;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getP2PMuteListActive");
              return [4, this.nim.V2NIMSettingService.getP2PMessageMuteList()];
            case 1:
              res = _c.sent();
              this.addMutes(res);
              return [2, res];
            case 2:
              error_2 = _c.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.error("getP2PMuteListActive failed: ", error_2);
              throw error_2;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    RelationStore2.prototype.addUserToBlockListActive = function(accountId) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_3;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("addUserToBlockListActive", accountId);
              return [4, this.nim.V2NIMUserService.addUserToBlockList(accountId)];
            case 1:
              _d.sent();
              this.addBlacklist([accountId]);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("addUserToBlockListActive success", accountId);
              return [3, 3];
            case 2:
              error_3 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("addUserToBlockListActive failed: ", accountId, error_3);
              throw error_3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    RelationStore2.prototype.removeUserFromBlockListActive = function(accountId) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_4;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("removeUserFromBlockListActive", accountId);
              return [4, this.nim.V2NIMUserService.removeUserFromBlockList(accountId)];
            case 1:
              _d.sent();
              this.removeBlacklist([accountId]);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("removeUserFromBlockListActive success", accountId);
              return [3, 3];
            case 2:
              error_4 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("removeUserFromBlockListActive failed: ", accountId, error_4);
              throw error_4;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    RelationStore2.prototype.setP2PMessageMuteModeActive = function(accountId, muteMode) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_5;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("setP2PMessageMuteModeActive", accountId, muteMode);
              return [4, this.nim.V2NIMSettingService.setP2PMessageMuteMode(accountId, muteMode)];
            case 1:
              _d.sent();
              if (muteMode === 1) {
                this.addMutes([accountId]);
              } else if (muteMode === 0) {
                this.removeMutes([accountId]);
              }
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("setP2PMessageMuteModeActive success", {
                accountId,
                muteMode
              });
              return [3, 3];
            case 2:
              error_5 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("setP2PMessageMuteModeActive failed: ", { accountId, muteMode }, error_5);
              throw error_5;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    RelationStore2.prototype._onBlockListAdded = function(user) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onBlockListAdded", user);
      this.addBlacklist([user.accountId]);
    };
    RelationStore2.prototype._onBlockListRemoved = function(accountId) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onBlockListRemoved", accountId);
      this.removeBlacklist([accountId]);
    };
    RelationStore2.prototype._onP2PMessageMuteModeChanged = function(accountId, muteMode) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onP2PMessageMuteModeChanged", accountId, muteMode);
      if (muteMode === 1) {
        this.addMutes([accountId]);
      } else if (muteMode === 0) {
        this.removeMutes([accountId]);
      }
    };
    return RelationStore2;
  }()
);
var ConversationStore = (
  /** @class */
  function() {
    function ConversationStore2(rootStore, nim) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.conversations = /* @__PURE__ */ new Map();
      this.totalUnreadCount = 0;
      this.logger = null;
      makeAutoObservable(this);
      this._onSyncStarted = this._onSyncStarted.bind(this);
      this._onSyncFinished = this._onSyncFinished.bind(this);
      this._onSyncFailed = this._onSyncFailed.bind(this);
      this._onConversationCreated = this._onConversationCreated.bind(this);
      this._onConversationDeleted = this._onConversationDeleted.bind(this);
      this._onConversationChanged = this._onConversationChanged.bind(this);
      this._onTotalUnreadCountChanged = this._onTotalUnreadCountChanged.bind(this);
      this.logger = rootStore.logger;
      nim.V2NIMConversationService.on("onSyncStarted", this._onSyncStarted);
      nim.V2NIMConversationService.on("onSyncFinished", this._onSyncFinished);
      nim.V2NIMConversationService.on("onSyncFailed", this._onSyncFailed);
      nim.V2NIMConversationService.on("onConversationCreated", this._onConversationCreated);
      nim.V2NIMConversationService.on("onConversationDeleted", this._onConversationDeleted);
      nim.V2NIMConversationService.on("onConversationChanged", this._onConversationChanged);
      nim.V2NIMConversationService.on("onTotalUnreadCountChanged", this._onTotalUnreadCountChanged);
    }
    ConversationStore2.prototype.resetState = function() {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("Conversation resetState");
      this.conversations.clear();
      this.totalUnreadCount = 0;
    };
    ConversationStore2.prototype.destroy = function() {
      this.resetState();
      this.nim.V2NIMConversationService.off("onSyncStarted", this._onSyncStarted);
      this.nim.V2NIMConversationService.off("onSyncFinished", this._onSyncFinished);
      this.nim.V2NIMConversationService.off("onSyncFailed", this._onSyncFailed);
      this.nim.V2NIMConversationService.off("onConversationCreated", this._onConversationCreated);
      this.nim.V2NIMConversationService.off("onConversationDeleted", this._onConversationDeleted);
      this.nim.V2NIMConversationService.off("onConversationChanged", this._onConversationChanged);
      this.nim.V2NIMConversationService.off("onTotalUnreadCountChanged", this._onTotalUnreadCountChanged);
    };
    ConversationStore2.prototype.addConversation = function(conversations) {
      var _this = this;
      conversations.filter(function(item) {
        return !!item.conversationId;
      }).filter(function(item) {
        return [
          1,
          2
        ].includes(item.type);
      }).forEach(function(item) {
        return __awaiter(_this, void 0, void 0, function() {
          var oldConversation;
          return __generator(this, function(_a) {
            oldConversation = this.conversations.get(item.conversationId);
            this.conversations.set(item.conversationId, __assign(__assign({}, oldConversation), item));
            return [
              2
              /*return*/
            ];
          });
        });
      });
    };
    ConversationStore2.prototype.updateConversation = function(conversations) {
      var _this = this;
      conversations.filter(function(item) {
        return !!item.conversationId;
      }).filter(function(item) {
        return [
          1,
          2
        ].includes(item.type);
      }).forEach(function(item) {
        var oldConversation = _this.conversations.get(item.conversationId);
        _this.conversations.set(item.conversationId, __assign(__assign({}, oldConversation), item));
      });
    };
    ConversationStore2.prototype.removeConversation = function(conversationIds) {
      var _this = this;
      conversationIds.forEach(function(item) {
        _this.conversations.delete(item);
        if (_this.rootStore.uiStore.selectedConversation === item) {
          _this.rootStore.uiStore.unselectConversation();
        }
      });
    };
    ConversationStore2.prototype.resetConversation = function(conversationId) {
      var _a, _b, _c, _d;
      return __awaiter(this, void 0, void 0, function() {
        var conversation, error_1;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("resetConversation", conversationId);
              conversation = this.conversations.get(conversationId);
              if (!conversation) {
                (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn("resetConversation: conversation is not found.", conversationId);
                return [
                  2
                  /*return*/
                ];
              }
              _e.label = 1;
            case 1:
              _e.trys.push([1, 4, , 5]);
              if (!conversation.unreadCount)
                return [3, 3];
              this._resetMemoryConversationUnreadCount(conversation);
              return [4, this.nim.V2NIMConversationService.clearUnreadCountByIds([
                conversation.conversationId
              ])];
            case 2:
              _e.sent();
              this._resetMemoryConversationUnreadCount(conversation);
              _e.label = 3;
            case 3:
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("resetConversation success");
              return [3, 5];
            case 4:
              error_1 = _e.sent();
              (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error("resetConversation failed: ", error_1);
              throw error_1;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ConversationStore2.prototype.insertConversationActive = function(conversationType, receiverId, isSelected) {
      var _a, _b, _c;
      if (isSelected === void 0) {
        isSelected = true;
      }
      return __awaiter(this, void 0, void 0, function() {
        var conversationId, conversation, error_2;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 5, , 6]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("insertConversationActive", {
                conversationType,
                receiverId,
                isSelected
              });
              conversationId = "";
              if (conversationType === 1) {
                conversationId = this.nim.V2NIMConversationIdUtil.p2pConversationId(receiverId);
              } else if (conversationType === 2) {
                conversationId = this.nim.V2NIMConversationIdUtil.teamConversationId(receiverId);
              } else {
                throw new Error("Unsupported conversation type");
              }
              if (!!this.conversations.has(conversationId))
                return [3, 2];
              return [4, this.nim.V2NIMConversationService.createConversation(conversationId)];
            case 1:
              conversation = _d.sent();
              this.addConversation([conversation]);
              _d.label = 2;
            case 2:
              if (!isSelected)
                return [3, 4];
              return [4, this.rootStore.uiStore.selectConversation(conversationId)];
            case 3:
              _d.sent();
              _d.label = 4;
            case 4:
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("insertConversationActive success", {
                conversationType,
                receiverId,
                isSelected
              });
              return [3, 6];
            case 5:
              error_2 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("insertConversationActive failed: ", { conversationType, receiverId, isSelected }, error_2);
              throw error_2;
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ConversationStore2.prototype.deleteConversationActive = function(conversationId) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_4;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 6, , 7]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("deleteConversationActive", conversationId);
              _d.label = 1;
            case 1:
              _d.trys.push([1, 3, , 4]);
              return [4, this.stickTopConversationActive(conversationId, false)];
            case 2:
              _d.sent();
              return [3, 4];
            case 3:
              _d.sent();
              return [3, 4];
            case 4:
              this.removeConversation([conversationId]);
              return [4, this.nim.V2NIMConversationService.deleteConversation(conversationId, false)];
            case 5:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("deleteConversationActive success");
              return [3, 7];
            case 6:
              error_4 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.warn("deleteConversationActive failed but continue: ", error_4);
              return [3, 7];
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ConversationStore2.prototype.stickTopConversationActive = function(conversationId, stickTop) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_5;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("stickTopConversationActive", conversationId, stickTop);
              return [4, this.nim.V2NIMConversationService.stickTopConversation(conversationId, stickTop)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("stickTopConversationActive success");
              return [3, 3];
            case 2:
              error_5 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("stickTopConversationActive failed: ", error_5);
              throw error_5;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ConversationStore2.prototype.getConversationListActive = function(offset, limit) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_6;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 3, , 4]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getConversationListActive", offset, limit);
              return [4, this.nim.V2NIMConversationService.getConversationList(offset, limit)];
            case 1:
              res = _d.sent();
              this.addConversation(res.conversationList);
              return [4, this.getP2PMessageReceipt(res.conversationList.filter(function(item) {
                return item.type === 1;
              }).map(function(item) {
                return item.conversationId;
              }))];
            case 2:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getConversationListActive success", offset, limit, res);
              return [2, res];
            case 3:
              error_6 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getConversationListActive failed: ", error_6, offset, limit);
              throw error_6;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ConversationStore2.prototype.getP2PMessageReceipt = function(conversationIds) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, conversations, error_7;
        var _this = this;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getP2PMessageReceipt", conversationIds);
              return [4, Promise.all(conversationIds.map(function(item) {
                return _this.nim.V2NIMMessageService.getP2PMessageReceipt(item);
              }))];
            case 1:
              res = _d.sent();
              conversations = res.map(function(item) {
                var conversation = _this.conversations.get(item.conversationId);
                if (conversation) {
                  return __assign(__assign({}, conversation), { msgReceiptTime: item.timestamp });
                }
              }).filter(function(item) {
                return !!item;
              });
              this.updateConversation(conversations);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getP2PMessageReceipt success", conversationIds, res);
              return [2, res];
            case 2:
              error_7 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getP2PMessageReceipt failed: ", error_7, conversationIds);
              throw error_7;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ConversationStore2.prototype._resetMemoryConversationUnreadCount = function(conversation) {
      var newConversation = this.conversations.get(conversation.conversationId);
      if (newConversation) {
        this.updateConversation([__assign(__assign({}, newConversation), { unreadCount: 0 })]);
      }
    };
    ConversationStore2.prototype.getConversationReadTimeActive = function(conversationId) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_8;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getConversationReadTimeActive", conversationId);
              return [4, this.nim.V2NIMConversationService.getConversationReadTime(conversationId)];
            case 1:
              res = _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getConversationReadTimeActive success", conversationId, res);
              return [2, res];
            case 2:
              error_8 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getConversationReadTimeActive failed: ", error_8, conversationId);
              throw error_8;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ConversationStore2.prototype.markConversationReadActive = function(conversationId) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_9;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("markConversationReadActive", conversationId);
              return [4, this.nim.V2NIMConversationService.markConversationRead(conversationId)];
            case 1:
              res = _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("markConversationReadActive success", conversationId, res);
              return [2, res];
            case 2:
              error_9 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("markConversationReadActive failed: ", error_9, conversationId);
              throw error_9;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ConversationStore2.prototype.handleConversationWithAit = function(msgs) {
      var _this = this;
      msgs.map(function(item) {
        return __awaiter(_this, void 0, void 0, function() {
          var hasAitMsg, conversationReadTime, isCurConversation, isSendFromMe, conversation, aitMsgs;
          var _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                if (!(item.conversationType === 2 || item.conversationType === 3))
                  return [3, 2];
                if (!(item === null || item === void 0 ? void 0 : item.serverExtension))
                  return [3, 2];
                hasAitMsg = this.hasAitMsg([item.serverExtension]);
                return [4, this.getConversationReadTimeActive(item.conversationId)];
              case 1:
                conversationReadTime = _b.sent();
                isCurConversation = item.conversationId == this.rootStore.uiStore.selectedConversation;
                isSendFromMe = item.senderId === ((_a = this.rootStore.userStore.myUserInfo) === null || _a === void 0 ? void 0 : _a.accountId);
                if (item.createTime > conversationReadTime && hasAitMsg && !isCurConversation && !isSendFromMe) {
                  conversation = this.conversations.get(item.conversationId);
                  if (conversation) {
                    aitMsgs = conversation.aitMsgs || [];
                    if (aitMsgs.length === 0) {
                      this.updateConversation([
                        __assign(__assign({}, conversation), { aitMsgs: [item.messageClientId] })
                      ]);
                    } else {
                      this.updateConversation([
                        __assign(__assign({}, conversation), { aitMsgs: __spreadArray(__spreadArray([], __read(aitMsgs), false), [item.messageClientId], false) })
                      ]);
                    }
                  }
                }
                _b.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      });
    };
    ConversationStore2.prototype.resetConversationAit = function(conversationId) {
      var conversation = this.conversations.get(conversationId);
      if ((conversation === null || conversation === void 0 ? void 0 : conversation.type) === 2 || (conversation === null || conversation === void 0 ? void 0 : conversation.type) === 3) {
        this.updateConversation([
          __assign(__assign({}, conversation), { aitMsgs: [] })
        ]);
      }
    };
    ConversationStore2.prototype.hasAitMsg = function(serverExtensions) {
      var _this = this;
      var flag = false;
      if (serverExtensions === null || serverExtensions === void 0 ? void 0 : serverExtensions.length) {
        serverExtensions === null || serverExtensions === void 0 ? void 0 : serverExtensions.forEach(function(item) {
          var _a, _b;
          try {
            var extObj = JSON.parse(item || "{}");
            var yxAitMsg = extObj.yxAitMsg;
            var account_1 = _this.rootStore.userStore.myUserInfo.accountId;
            if (yxAitMsg) {
              (_a = Object.keys(yxAitMsg)) === null || _a === void 0 ? void 0 : _a.forEach(function(key) {
                if (key === account_1 || key === AT_ALL_ACCOUNT) {
                  flag = true;
                }
              });
            }
          } catch (_c) {
            (_b = _this.logger) === null || _b === void 0 ? void 0 : _b.error("parse serverExtension failed: ", item);
          }
        });
      }
      return flag;
    };
    ConversationStore2.prototype._onSyncStarted = function() {
      var _a, _b, _c;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onSyncStarted");
      (_b = this.rootStore.conversationStore) === null || _b === void 0 ? void 0 : _b.getConversationListActive(0, this.rootStore.localOptions.conversationLimit || 100);
      (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("_onSyncFinished");
    };
    ConversationStore2.prototype._onSyncFinished = function() {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_c) {
          (_a = this.rootStore.conversationStore) === null || _a === void 0 ? void 0 : _a.getConversationListActive(0, this.rootStore.localOptions.conversationLimit || 100);
          (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("_onSyncFinished");
          return [
            2
            /*return*/
          ];
        });
      });
    };
    ConversationStore2.prototype._onSyncFailed = function(e) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onSyncFailed", e);
    };
    ConversationStore2.prototype._onConversationCreated = function(data) {
      var _this = this;
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onConversationCreated", data);
      if (data.type === 2) {
        this.nim.V2NIMConversationService.getConversation(data.conversationId).then(function(conversation) {
          _this.addConversation([conversation]);
          if (conversation.lastMessage) {
            _this.handleConversationWithAit([
              __assign(__assign({}, conversation.lastMessage), conversation.lastMessage.messageRefer)
            ]);
          }
        });
      } else {
        this.addConversation([data]);
        if (data.type === 1) {
          var conversationId_1 = data.conversationId;
          this.nim.V2NIMMessageService.getP2PMessageReceipt(conversationId_1).then(function(res) {
            var conversation = _this.conversations.get(conversationId_1);
            if (conversation) {
              _this.updateConversation([
                __assign(__assign({}, conversation), { msgReceiptTime: res.timestamp })
              ]);
            }
          });
        }
      }
    };
    ConversationStore2.prototype._onConversationDeleted = function(conversationIds) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onConversationDeleted", conversationIds);
      this.removeConversation(conversationIds);
    };
    ConversationStore2.prototype._onConversationChanged = function(data) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_b) {
          (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onConversationChanged", data);
          this.addConversation(data);
          data.forEach(function(item) {
            return __awaiter(_this, void 0, void 0, function() {
              var attachment, type;
              var _a2, _b2, _c, _d;
              return __generator(this, function(_e) {
                switch (_e.label) {
                  case 0:
                    attachment = (_a2 = item.lastMessage) === null || _a2 === void 0 ? void 0 : _a2.attachment;
                    type = attachment === null || attachment === void 0 ? void 0 : attachment.type;
                    if (!(((_b2 = item.lastMessage) === null || _b2 === void 0 ? void 0 : _b2.messageType) === 5 && (type === 1 && ((_c = attachment === null || attachment === void 0 ? void 0 : attachment.targetIds) === null || _c === void 0 ? void 0 : _c.includes(this.rootStore.userStore.myUserInfo.accountId)) || type === 2 && ((_d = item.lastMessage) === null || _d === void 0 ? void 0 : _d.messageRefer.senderId) === this.rootStore.userStore.myUserInfo.accountId || type === 4)))
                      return [3, 2];
                    return [4, this.deleteConversationActive(item.conversationId)];
                  case 1:
                    _e.sent();
                    return [3, 4];
                  case 2:
                    if (!(this.rootStore.uiStore.selectedConversation === item.conversationId))
                      return [3, 4];
                    return [4, this.resetConversation(item.conversationId)];
                  case 3:
                    _e.sent();
                    _e.label = 4;
                  case 4:
                    if (item.type === 2 && item.unreadCount == 0) {
                      this.resetConversationAit(item.conversationId);
                    }
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          });
          return [
            2
            /*return*/
          ];
        });
      });
    };
    ConversationStore2.prototype._onTotalUnreadCountChanged = function(data) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onTotalUnreadCountChanged", data);
      this.totalUnreadCount = data;
    };
    return ConversationStore2;
  }()
);
var TeamStore = (
  /** @class */
  function() {
    function TeamStore2(rootStore, nim, localOptions) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.localOptions = localOptions;
      this.teams = /* @__PURE__ */ new Map();
      this.logger = null;
      makeAutoObservable(this);
      this.logger = rootStore.logger;
      this._onReceiveTeamJoinActionInfo = this._onReceiveTeamJoinActionInfo.bind(this);
      this._onSyncFailed = this._onSyncFailed.bind(this);
      this._onSyncFinished = this._onSyncFinished.bind(this);
      this._onSyncStarted = this._onSyncStarted.bind(this);
      this._onTeamCreated = this._onTeamCreated.bind(this);
      this._onTeamDismissed = this._onTeamDismissed.bind(this);
      this._onTeamInfoUpdated = this._onTeamInfoUpdated.bind(this);
      this._onTeamJoined = this._onTeamJoined.bind(this);
      this._onTeamLeft = this._onTeamLeft.bind(this);
      this._onTeamMemberInfoUpdated = this._onTeamMemberInfoUpdated.bind(this);
      this._onTeamMemberJoined = this._onTeamMemberJoined.bind(this);
      this._onTeamMemberKicked = this._onTeamMemberKicked.bind(this);
      this._onTeamMemberLeft = this._onTeamMemberLeft.bind(this);
      nim.V2NIMTeamService.on("onReceiveTeamJoinActionInfo", this._onReceiveTeamJoinActionInfo);
      nim.V2NIMTeamService.on("onSyncFailed", this._onSyncFailed);
      nim.V2NIMTeamService.on("onSyncFinished", this._onSyncFinished);
      nim.V2NIMTeamService.on("onSyncStarted", this._onSyncStarted);
      nim.V2NIMTeamService.on("onTeamCreated", this._onTeamCreated);
      nim.V2NIMTeamService.on("onTeamDismissed", this._onTeamDismissed);
      nim.V2NIMTeamService.on("onTeamInfoUpdated", this._onTeamInfoUpdated);
      nim.V2NIMTeamService.on("onTeamJoined", this._onTeamJoined);
      nim.V2NIMTeamService.on("onTeamLeft", this._onTeamLeft);
      nim.V2NIMTeamService.on("onTeamMemberInfoUpdated", this._onTeamMemberInfoUpdated);
      nim.V2NIMTeamService.on("onTeamMemberJoined", this._onTeamMemberJoined);
      nim.V2NIMTeamService.on("onTeamMemberKicked", this._onTeamMemberKicked);
      nim.V2NIMTeamService.on("onTeamMemberLeft", this._onTeamMemberLeft);
      nim.V2NIMSettingService.on("onTeamMessageMuteModeChanged", this._onTeamMessageMuteModeChanged);
    }
    TeamStore2.prototype.resetState = function() {
      this.teams.clear();
    };
    TeamStore2.prototype.destroy = function() {
      this.resetState();
      this.nim.V2NIMTeamService.off("onReceiveTeamJoinActionInfo", this._onReceiveTeamJoinActionInfo);
      this.nim.V2NIMTeamService.off("onSyncFailed", this._onSyncFailed);
      this.nim.V2NIMTeamService.off("onSyncFinished", this._onSyncFinished);
      this.nim.V2NIMTeamService.off("onSyncStarted", this._onSyncStarted);
      this.nim.V2NIMTeamService.off("onTeamCreated", this._onTeamCreated);
      this.nim.V2NIMTeamService.off("onTeamDismissed", this._onTeamDismissed);
      this.nim.V2NIMTeamService.off("onTeamInfoUpdated", this._onTeamInfoUpdated);
      this.nim.V2NIMTeamService.off("onTeamJoined", this._onTeamJoined);
      this.nim.V2NIMTeamService.off("onTeamLeft", this._onTeamLeft);
      this.nim.V2NIMTeamService.off("onTeamMemberInfoUpdated", this._onTeamMemberInfoUpdated);
      this.nim.V2NIMTeamService.off("onTeamMemberJoined", this._onTeamMemberJoined);
      this.nim.V2NIMTeamService.off("onTeamMemberKicked", this._onTeamMemberKicked);
      this.nim.V2NIMTeamService.off("onTeamMemberLeft", this._onTeamMemberLeft);
      this.nim.V2NIMSettingService.off("onTeamMessageMuteModeChanged", this._onTeamMessageMuteModeChanged);
    };
    TeamStore2.prototype.addTeam = function(teams) {
      var _this = this;
      teams.filter(function(item) {
        return !!item.isValidTeam;
      }).filter(function(item) {
        return !!item.teamId;
      }).forEach(function(item) {
        _this.teams.set(item.teamId, item);
      });
    };
    TeamStore2.prototype.removeTeam = function(teamIds) {
      var _this = this;
      teamIds.forEach(function(item) {
        _this.teams.delete(item);
      });
    };
    TeamStore2.prototype.updateTeam = function(data) {
      var _this = this;
      data.filter(function(item) {
        return !!item.teamId;
      }).forEach(function(item) {
        var oldTeam = _this.teams.get(item.teamId);
        if (oldTeam) {
          var newTeam = __assign(__assign({}, oldTeam), item);
          _this.teams.set(item.teamId, newTeam);
        }
      });
    };
    TeamStore2.prototype.createTeamActive = function(_a) {
      var _b, _c, _d;
      var accounts = _a.accounts, _e = _a.type, type = _e === void 0 ? 1 : _e, avatar = _a.avatar, name2 = _a.name, intro = _a.intro, serverExtension = _a.serverExtension, joinMode = _a.joinMode, agreeMode = _a.agreeMode, inviteMode = _a.inviteMode, updateInfoMode = _a.updateInfoMode, updateExtensionMode = _a.updateExtensionMode;
      return __awaiter(this, void 0, void 0, function() {
        var team, error_1;
        return __generator(this, function(_f) {
          switch (_f.label) {
            case 0:
              _f.trys.push([0, 2, , 3]);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("createTeamActive", {
                accounts,
                type,
                avatar,
                name: name2,
                intro,
                serverExtension
              });
              return [4, this.nim.V2NIMTeamService.createTeam({
                avatar,
                teamType: type,
                joinMode: joinMode || this.localOptions.teamJoinMode,
                agreeMode: agreeMode || this.localOptions.teamAgreeMode,
                inviteMode: inviteMode || this.localOptions.teamInviteMode,
                updateInfoMode: updateInfoMode || this.localOptions.teamUpdateTeamMode,
                updateExtensionMode: updateExtensionMode || this.localOptions.teamUpdateExtMode,
                name: name2,
                intro,
                serverExtension
              }, accounts, "")];
            case 1:
              team = _f.sent().team;
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("createTeamActive success", team);
              return [2, team];
            case 2:
              error_1 = _f.sent();
              (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error("createTeamActive failed: ", { accounts, type, avatar, name: name2, intro, serverExtension }, error_1, error_1.code, error_1.detail);
              throw error_1;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.applyTeamActive = function(teamId, type) {
      var _a, _b, _c;
      if (type === void 0) {
        type = 1;
      }
      return __awaiter(this, void 0, void 0, function() {
        var team, error_2;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("applyTeamActive", teamId);
              return [4, this.nim.V2NIMTeamService.applyJoinTeam(teamId, type)];
            case 1:
              team = _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("applyTeamActive success", teamId);
              return [2, team];
            case 2:
              error_2 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("applyTeamActive failed: ", teamId, error_2);
              throw error_2;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.leaveTeamActive = function(teamId, type) {
      var _a, _b, _c;
      if (type === void 0) {
        type = 1;
      }
      return __awaiter(this, void 0, void 0, function() {
        var error_3;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("leaveTeamActive", teamId);
              return [4, this.nim.V2NIMTeamService.leaveTeam(teamId, type)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("leaveTeamActive success", teamId);
              return [3, 3];
            case 2:
              error_3 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("leaveTeamActive failed: ", teamId, error_3);
              throw error_3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.dismissTeamActive = function(teamId, type) {
      var _a, _b, _c;
      if (type === void 0) {
        type = 1;
      }
      return __awaiter(this, void 0, void 0, function() {
        var error_4;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("dismissTeamActive", teamId);
              return [
                4,
                this.nim.V2NIMTeamService.dismissTeam(teamId, type)
                // 会收到一条 onDissmiss 事件
              ];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("dismissTeamActive success", teamId);
              return [3, 3];
            case 2:
              error_4 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("dismissTeamActive failed: ", teamId, error_4);
              throw error_4;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.transferTeamActive = function(_a) {
      var _b, _c, _d;
      var teamId = _a.teamId, _e = _a.type, type = _e === void 0 ? 1 : _e, account = _a.account, leave = _a.leave;
      return __awaiter(this, void 0, void 0, function() {
        var error_5;
        return __generator(this, function(_f) {
          switch (_f.label) {
            case 0:
              _f.trys.push([0, 2, , 3]);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("transferTeamActive", { teamId, type, account, leave });
              return [4, this.nim.V2NIMTeamService.transferTeamOwner(teamId, type, account, leave !== null && leave !== void 0 ? leave : this.localOptions.leaveOnTransfer)];
            case 1:
              _f.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("transferTeamActive success", {
                teamId,
                type,
                account,
                leave
              });
              return [3, 3];
            case 2:
              error_5 = _f.sent();
              (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error("transferTeamActive failed: ", { teamId, type, account, leave }, error_5);
              throw error_5;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.setTeamChatBannedActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_6;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("muteTeamActive", options);
              return [4, this.nim.V2NIMTeamService.setTeamChatBannedMode(options.teamId, options.type || 1, options.chatBannedMode)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("muteTeamActive success", options);
              return [3, 3];
            case 2:
              error_6 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("muteTeamActive failed: ", options, error_6);
              throw error_6;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.updateTeamActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var teamId, _d, type, info, error_7;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("updateTeamActive", options);
              teamId = options.teamId, _d = options.type, type = _d === void 0 ? 1 : _d, info = options.info;
              return [
                4,
                this.nim.V2NIMTeamService.updateTeamInfo(teamId, type, info)
                // 后续在事件中处理
              ];
            case 1:
              _e.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("updateTeamActive success", options);
              return [3, 3];
            case 2:
              error_7 = _e.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("updateTeamActive failed: ", options, error_7);
              throw error_7;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.getTeamActive = function(teamId, type) {
      var _a;
      if (type === void 0) {
        type = 1;
      }
      return __awaiter(this, void 0, void 0, function() {
        var team;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getTeamActive: ", teamId);
              team = this.teams.get(teamId);
              if (team) {
                return [2, team];
              }
              return [4, this.getTeamForceActive(teamId, type)];
            case 1:
              team = _b.sent();
              this.addTeam([team]);
              return [2, team];
          }
        });
      });
    };
    TeamStore2.prototype.getTeamForceActive = function(teamId, type) {
      var _a, _b, _c;
      if (type === void 0) {
        type = 1;
      }
      return __awaiter(this, void 0, void 0, function() {
        var res, error_8;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getTeamForceActive: ", teamId);
              return [4, this.nim.V2NIMTeamService.getTeamInfo(teamId, type)];
            case 1:
              res = _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getTeamForceActive success", res);
              return [2, res];
            case 2:
              error_8 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getTeamForceActive failed: ", teamId, error_8);
              throw error_8;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.setTeamMessageMuteModeActive = function(teamId, teamType, muteMode) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_9;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("setTeamMessageMuteModeActive", {
                teamId,
                teamType,
                muteMode
              });
              return [4, this.nim.V2NIMSettingService.setTeamMessageMuteMode(teamId, teamType, muteMode)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("setTeamMessageMuteModeActive success", {
                teamId,
                teamType,
                muteMode
              });
              return [3, 3];
            case 2:
              error_9 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("setTeamMessageMuteModeActive failed: ", { teamId, teamType, muteMode }, error_9);
              throw error_9;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.acceptTeamInviteActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_10;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("acceptTeamInviteActive: ", options);
              return [4, this.nim.V2NIMTeamService.acceptInvitation(options)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("acceptTeamInviteActive success", options);
              return [3, 3];
            case 2:
              error_10 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("acceptTeamInviteActive failed: ", options, error_10);
              throw error_10;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.rejectTeamInviteActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_11;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("rejectTeamInviteActive: ", options);
              return [4, this.nim.V2NIMTeamService.rejectInvitation(options)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("rejectTeamInviteActive success", options);
              return [3, 3];
            case 2:
              error_11 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("rejectTeamInviteActive failed: ", options, error_11);
              throw error_11;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.acceptJoinApplicationActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_12;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("acceptJoinApplicationActive: ", options);
              return [4, this.nim.V2NIMTeamService.acceptJoinApplication(options)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("acceptJoinApplicationActive success", options);
              return [3, 3];
            case 2:
              error_12 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("acceptJoinApplicationActive failed: ", options, error_12);
              throw error_12;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.rejectTeamApplyActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_13;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("rejectTeamApplyActive: ", options);
              return [4, this.nim.V2NIMTeamService.rejectJoinApplication(options)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("rejectTeamApplyActive success", options);
              return [3, 3];
            case 2:
              error_13 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("rejectTeamApplyActive failed: ", options, error_13);
              throw error_13;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.updateTeamMemberRoleActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var teamId, _d, type, accounts, role, error_14;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("addTeamManagersActive: ", options);
              teamId = options.teamId, _d = options.type, type = _d === void 0 ? 1 : _d, accounts = options.accounts, role = options.role;
              return [4, this.nim.V2NIMTeamService.updateTeamMemberRole(teamId, type, accounts, role)];
            case 1:
              _e.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("addTeamManagersActive success", options);
              return [3, 3];
            case 2:
              error_14 = _e.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("addTeamManagersActive failed: ", options, error_14);
              throw error_14;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.getTeamJoinActionInfoListActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_15;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getTeamJoinActionInfoListActive: ", options);
              return [4, this.nim.V2NIMTeamService.getTeamJoinActionInfoList(options)];
            case 1:
              res = _d.sent();
              this.rootStore.sysMsgStore.addTeamJoinActionMsg(res.infos);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getTeamJoinActionInfoListActive success", res);
              return [2, res];
            case 2:
              error_15 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getTeamJoinActionInfoListActive failed: ", options, error_15);
              throw error_15;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.getJoinedTeamListActive = function() {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var teams, error_16;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getJoinedTeamListActive");
              return [4, this.nim.V2NIMTeamService.getJoinedTeamList([1])];
            case 1:
              teams = _d.sent();
              this.addTeam(teams);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getJoinedTeamListActive success", teams);
              return [2, teams];
            case 2:
              error_16 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getJoinedTeamListActive failed: ", error_16);
              throw error_16;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype.getTeamMessageMuteModeActive = function(teamId, teamType) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var muteMode, error_17;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getTeamMessageMuteModeActive", teamId, teamType);
              return [4, this.nim.V2NIMSettingService.getTeamMessageMuteMode(teamId, teamType)];
            case 1:
              muteMode = _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getTeamMessageMuteModeActive success", teamId, teamType);
              return [2, muteMode];
            case 2:
              error_17 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getTeamMessageMuteModeActive failed: ", teamId, teamType, error_17);
              throw error_17;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamStore2.prototype._onReceiveTeamJoinActionInfo = function(data) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onReceiveTeamJoinActionInfo: ", data);
      this.rootStore.sysMsgStore.addTeamJoinActionMsg([data]);
    };
    TeamStore2.prototype._onSyncFailed = function(data) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onSyncFailed: ", data);
    };
    TeamStore2.prototype._onSyncFinished = function() {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_c) {
          (_a = this.rootStore.conversationStore) === null || _a === void 0 ? void 0 : _a.getConversationListActive(0, this.rootStore.localOptions.conversationLimit || 100);
          (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("V2NIMTeamService _onSyncFinished");
          return [
            2
            /*return*/
          ];
        });
      });
    };
    TeamStore2.prototype._onSyncStarted = function() {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onSyncStarted");
    };
    TeamStore2.prototype._onTeamCreated = function(data) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onTeamCreated: ", data);
      this.addTeam([data]);
    };
    TeamStore2.prototype._onTeamDismissed = function(data) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onTeamDismissed: ", data);
      this._handleRemoveTeam(data.teamId);
    };
    TeamStore2.prototype._onTeamInfoUpdated = function(data) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onTeamInfoUpdated: ", data);
      this.updateTeam([data]);
    };
    TeamStore2.prototype._onTeamJoined = function(data) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onTeamJoined: ", data);
      this.addTeam([data]);
    };
    TeamStore2.prototype._onTeamLeft = function(data) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_b) {
          (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onTeamLeft: ", data);
          this._handleRemoveTeam(data.teamId);
          return [
            2
            /*return*/
          ];
        });
      });
    };
    TeamStore2.prototype._onTeamMemberInfoUpdated = function(data) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onTeamMemberInfoUpdated: ", data);
      var teamId = data[0].teamId;
      this.rootStore.teamMemberStore.updateTeamMember(teamId, data);
    };
    TeamStore2.prototype._onTeamMemberJoined = function(data) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var teamId;
        return __generator(this, function(_b) {
          (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onTeamMemberJoined: ", data);
          teamId = data[0].teamId;
          this.rootStore.teamMemberStore.addTeamMember(teamId, data);
          return [
            2
            /*return*/
          ];
        });
      });
    };
    TeamStore2.prototype._onTeamMemberKicked = function(opeartorId, data) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var teamId;
        return __generator(this, function(_b) {
          (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onTeamMemberKicked: ", opeartorId, data);
          teamId = data[0].teamId;
          this.rootStore.teamMemberStore.removeTeamMember(teamId, data.map(function(item) {
            return item.accountId;
          }));
          return [
            2
            /*return*/
          ];
        });
      });
    };
    TeamStore2.prototype._onTeamMemberLeft = function(data) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var teamId;
        return __generator(this, function(_b) {
          (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onTeamMemberLeft: ", data);
          teamId = data[0].teamId;
          this.rootStore.teamMemberStore.removeTeamMember(teamId, data.map(function(item) {
            return item.accountId;
          }));
          return [
            2
            /*return*/
          ];
        });
      });
    };
    TeamStore2.prototype._handleRemoveTeam = function(teamId) {
      this.removeTeam([teamId]);
      this.rootStore.teamMemberStore.removeTeamMember(teamId);
    };
    TeamStore2.prototype._onTeamMessageMuteModeChanged = function(teamId, teamType, muteMode) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("V2NIMTeamService _onTeamMessageMuteModeChanged: ", teamId, teamType, muteMode);
    };
    return TeamStore2;
  }()
);
var TeamMemberStore = (
  /** @class */
  function() {
    function TeamMemberStore2(rootStore, nim) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.teamMembers = /* @__PURE__ */ new Map();
      this.logger = null;
      makeAutoObservable(this);
      this.logger = rootStore.logger;
    }
    TeamMemberStore2.prototype.resetState = function() {
      this.teamMembers.clear();
    };
    TeamMemberStore2.prototype.destroy = function() {
      this.resetState();
    };
    TeamMemberStore2.prototype.addTeamMemberActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var teamId, _d, type, accounts, ps, error_1;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("addTeamMemberActive", options);
              teamId = options.teamId, _d = options.type, type = _d === void 0 ? 1 : _d, accounts = options.accounts, ps = options.ps;
              return [
                4,
                this.nim.V2NIMTeamService.inviteMember(teamId, type, accounts, ps)
                // 事件中处理
              ];
            case 1:
              _e.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("addTeamMemberActive success", options);
              return [3, 3];
            case 2:
              error_1 = _e.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("addTeamMemberActive failed: ", options, error_1);
              throw error_1;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamMemberStore2.prototype.removeTeamMemberActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var teamId, _d, type, accounts, error_2;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("removeTeamMemberActive", options);
              teamId = options.teamId, _d = options.type, type = _d === void 0 ? 1 : _d, accounts = options.accounts;
              return [
                4,
                this.nim.V2NIMTeamService.kickMember(teamId, type, accounts)
                // 事件中处理
              ];
            case 1:
              _e.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("removeTeamMemberActive success", options);
              return [3, 3];
            case 2:
              error_2 = _e.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("removeTeamMemberActive failed: ", options, error_2);
              throw error_2;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamMemberStore2.prototype.getTeamMemberActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var teamId, queryOption, _d, type, res, error_3;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getTeamMemberActive", options);
              teamId = options.teamId, queryOption = options.queryOption, _d = options.type, type = _d === void 0 ? 1 : _d;
              return [4, this.nim.V2NIMTeamService.getTeamMemberList(teamId, type, queryOption)];
            case 1:
              res = _e.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getTeamMemberActive success: ", teamId, type, queryOption, res);
              this.setTeamMembers(teamId, res.memberList);
              return [2, res];
            case 2:
              error_3 = _e.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getTeamMemberActive failed: ", options, error_3);
              throw error_3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamMemberStore2.prototype.updateMyMemberInfoActive = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var teamId, _d, type, memberInfo, error_4;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("updateMyMemberInfo", options);
              teamId = options.teamId, _d = options.type, type = _d === void 0 ? 1 : _d, memberInfo = options.memberInfo;
              return [4, this.nim.V2NIMTeamService.updateSelfTeamMemberInfo(teamId, type, memberInfo)];
            case 1:
              _e.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("updateMyMemberInfo success: ", options);
              return [3, 3];
            case 2:
              error_4 = _e.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("updateMyMemberInfo failed: ", options, error_4);
              throw error_4;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    TeamMemberStore2.prototype.setTeamMembers = function(teamId, members) {
      var teamMembers = /* @__PURE__ */ new Map();
      members.forEach(function(item) {
        teamMembers.set(item.accountId, item);
      });
      this.teamMembers.set(teamId, teamMembers);
    };
    TeamMemberStore2.prototype.addTeamMember = function(teamId, members) {
      var teamMembers = this.teamMembers.get(teamId);
      if (!teamMembers) {
        teamMembers = /* @__PURE__ */ new Map();
      }
      members.filter(function(item) {
        return !!item.inTeam;
      }).filter(function(item) {
        return !!item.accountId;
      }).forEach(function(item) {
        teamMembers.set(item.accountId, item);
      });
      this.teamMembers.set(teamId, teamMembers);
    };
    TeamMemberStore2.prototype.removeTeamMember = function(teamId, accounts) {
      if (!accounts || !accounts.length) {
        this.teamMembers.delete(teamId);
        return;
      }
      var teamMembers = this.teamMembers.get(teamId);
      if (!teamMembers) {
        return;
      }
      accounts.forEach(function(item) {
        teamMembers.delete(item);
      });
      this.teamMembers.set(teamId, teamMembers);
    };
    TeamMemberStore2.prototype.updateTeamMember = function(teamId, members) {
      var teamMembers = this.teamMembers.get(teamId);
      if (!teamMembers) {
        return;
      }
      members.forEach(function(item) {
        var m = teamMembers.get(item.accountId);
        if (m) {
          m = __assign(__assign({}, m), item);
          teamMembers.set(item.accountId, m);
        }
      });
      this.teamMembers.set(teamId, teamMembers);
    };
    TeamMemberStore2.prototype.getTeamMember = function(teamId, accounts) {
      var _a;
      var teamMembers = __spreadArray([], __read(((_a = this.teamMembers.get(teamId)) === null || _a === void 0 ? void 0 : _a.values()) || []), false);
      if (!accounts || !accounts.length) {
        return teamMembers;
      }
      return teamMembers.filter(function(item) {
        return accounts.some(function(j) {
          return j === item.accountId;
        });
      });
    };
    return TeamMemberStore2;
  }()
);
var SysMsgStore = (
  /** @class */
  function() {
    function SysMsgStore2(rootStore, nim) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.friendApplyMsg = /* @__PURE__ */ new Map();
      this.teamJoinActionMsg = /* @__PURE__ */ new Map();
      this.logger = null;
      makeAutoObservable(this);
      this.logger = rootStore.logger;
    }
    SysMsgStore2.prototype.resetState = function() {
      this.friendApplyMsg.clear();
      this.teamJoinActionMsg.clear();
    };
    SysMsgStore2.prototype.destroy = function() {
      this.resetState();
    };
    Object.defineProperty(SysMsgStore2.prototype, "friendApplyMsgs", {
      get: function() {
        return Array.from(this.friendApplyMsg.values()).sort(function(a, b) {
          return b.timestamp - a.timestamp;
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SysMsgStore2.prototype, "teamJoinActionMsgs", {
      get: function() {
        return Array.from(this.teamJoinActionMsg.values()).sort(function(a, b) {
          return b.timestamp - a.timestamp;
        });
      },
      enumerable: false,
      configurable: true
    });
    SysMsgStore2.prototype.addFriendApplyMsg = function(msgs) {
      var _this = this;
      msgs.forEach(function(msg) {
        var key = _this.createFriendApplyMsgKey(msg);
        _this.friendApplyMsg.set(key, msg);
      });
    };
    SysMsgStore2.prototype.deleteFriendApplyMsg = function(msgs) {
      var _this = this;
      msgs.forEach(function(msg) {
        var key = _this.createFriendApplyMsgKey(msg);
        _this.friendApplyMsg.delete(key);
      });
    };
    SysMsgStore2.prototype.updateFriendApplyMsg = function(msgs) {
      var _this = this;
      msgs.forEach(function(msg) {
        var key = _this.createFriendApplyMsgKey(msg);
        var oldMsg = _this.friendApplyMsg.get(key);
        if (oldMsg) {
          _this.friendApplyMsg.set(key, __assign(__assign({}, oldMsg), msg));
        }
      });
    };
    SysMsgStore2.prototype.addTeamJoinActionMsg = function(msgs) {
      var _this = this;
      msgs.forEach(function(msg) {
        var key = _this.createTeamJoinActionMsgKey(msg);
        _this.teamJoinActionMsg.set(key, msg);
      });
    };
    SysMsgStore2.prototype.deleteTeamJoinActionMsg = function(msgs) {
      var _this = this;
      msgs.forEach(function(msg) {
        var key = _this.createTeamJoinActionMsgKey(msg);
        _this.teamJoinActionMsg.delete(key);
      });
    };
    SysMsgStore2.prototype.updateTeamJoinActionMsg = function(msgs) {
      var _this = this;
      msgs.forEach(function(msg) {
        var key = _this.createTeamJoinActionMsgKey(msg);
        var oldMsg = _this.teamJoinActionMsg.get(key);
        var newMsg = __assign(__assign({}, oldMsg), msg);
        _this.teamJoinActionMsg.set(key, newMsg);
      });
    };
    SysMsgStore2.prototype.getUnreadFriendApplyMsgsCount = function() {
      return this.friendApplyMsgs.filter(function(msg) {
        return !msg.isRead;
      }).length;
    };
    SysMsgStore2.prototype.getUnreadTeamJoinActionMsgsCount = function() {
      return this.teamJoinActionMsgs.filter(function(msg) {
        return !msg.isRead;
      }).length;
    };
    SysMsgStore2.prototype.getTotalUnreadMsgsCount = function() {
      return this.getUnreadFriendApplyMsgsCount() + this.getUnreadTeamJoinActionMsgsCount();
    };
    SysMsgStore2.prototype.setAllApplyMsgRead = function() {
      this.updateFriendApplyMsg(this.friendApplyMsgs.map(function(msg) {
        return __assign(__assign({}, msg), { isRead: true });
      }));
      this.updateTeamJoinActionMsg(this.teamJoinActionMsgs.map(function(msg) {
        return __assign(__assign({}, msg), { isRead: true });
      }));
    };
    SysMsgStore2.prototype.createTeamJoinActionMsgKey = function(msg) {
      return "".concat(msg.teamId, "_").concat(msg.operatorAccountId, "_").concat(msg.actionType);
    };
    SysMsgStore2.prototype.createFriendApplyMsgKey = function(msg) {
      return "".concat(msg.applicantAccountId, "_").concat(msg.recipientAccountId);
    };
    return SysMsgStore2;
  }()
);
var UserStore = (
  /** @class */
  function() {
    function UserStore2(rootStore, nim) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.users = /* @__PURE__ */ new Map();
      this.myUserInfo = {
        accountId: this.nim.V2NIMLoginService.getLoginUser(),
        name: "",
        createTime: Date.now(),
        updateTime: Date.now()
      };
      this.logger = null;
      this._getUserInfo = frequencyControl(this._getUserInfos, 1e3, 100);
      makeAutoObservable(this);
      this._onUserProfileChanged = this._onUserProfileChanged.bind(this);
      this.logger = rootStore.logger;
      nim.V2NIMUserService.on("onUserProfileChanged", this._onUserProfileChanged);
    }
    UserStore2.prototype.resetState = function() {
      this.users.clear();
      this.myUserInfo = {
        accountId: this.nim.V2NIMLoginService.getLoginUser(),
        name: "",
        createTime: Date.now(),
        updateTime: Date.now()
      };
    };
    UserStore2.prototype.destroy = function() {
      this.resetState();
      this.nim.V2NIMUserService.off("onUserProfileChanged", this._onUserProfileChanged);
    };
    UserStore2.prototype.addUsers = function(users) {
      var _this = this;
      users.filter(function(item) {
        return !!item.accountId;
      }).forEach(function(item) {
        _this.users.set(item.accountId, item);
      });
    };
    UserStore2.prototype.removeUsers = function(accounts) {
      var _this = this;
      accounts.forEach(function(item) {
        _this.users.delete(item);
      });
    };
    UserStore2.prototype.getMyUserServerExt = function() {
      var _a;
      var serverExt = {};
      try {
        serverExt = JSON.parse(((_a = this.myUserInfo) === null || _a === void 0 ? void 0 : _a.serverExtension) || "{}");
      } catch (error) {
      }
      return serverExt;
    };
    UserStore2.prototype.updateSelfUserProfileActive = function(updateParams, fileObj) {
      var _a, _b, _c, _d;
      return __awaiter(this, void 0, void 0, function() {
        var task, avatarUrl, error_1, error_2;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 6, , 7]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("updateSelfUserProfileActive", updateParams, fileObj);
              if (!fileObj)
                return [3, 4];
              _e.label = 1;
            case 1:
              _e.trys.push([1, 3, , 4]);
              task = this.nim.V2NIMStorageService.createUploadFileTask({
                fileObj
              });
              return [4, this.nim.V2NIMStorageService.uploadFile(task, function() {
              })];
            case 2:
              avatarUrl = _e.sent();
              updateParams.avatar = avatarUrl;
              return [3, 4];
            case 3:
              error_1 = _e.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn("upload avatar error and save continue.", error_1);
              return [3, 4];
            case 4:
              return [4, this.nim.V2NIMUserService.updateSelfUserProfile(updateParams)];
            case 5:
              _e.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("updateSelfUserProfileActive success", updateParams, fileObj);
              return [3, 7];
            case 6:
              error_2 = _e.sent();
              (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error("updateSelfUserProfileActive failed:", updateParams, error_2, fileObj);
              throw error_2;
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    UserStore2.prototype.getUserActive = function(accountId) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var user;
        return __generator(this, function(_c) {
          (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getUserListActive", accountId);
          user = this.users.get(accountId);
          if (user) {
            (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getUserListActive success", user, accountId);
            return [2, user];
          }
          return [2, this.getUserForceActive(accountId)];
        });
      });
    };
    UserStore2.prototype.getUserForceActive = function(accountId) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var user, error_3;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getUserForceActive", accountId);
              return [4, this._getUserInfo(accountId)];
            case 1:
              user = _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getUserForceActive success", user, accountId);
              return [2, user];
            case 2:
              error_3 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getUserForceActive failed: ", accountId, error_3);
              throw error_3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    UserStore2.prototype.getUserListFromCloudActive = function(accountIds) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var users, error_4;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getUserListFromCloudActive", accountIds);
              return [4, this.nim.V2NIMUserService.getUserListFromCloud(accountIds)];
            case 1:
              users = _d.sent();
              this.addUsers(users);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getUserListFromCloudActive success", users, accountIds);
              return [2, users];
            case 2:
              error_4 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getUserListFromCloudActive failed: ", accountIds, error_4);
              throw error_4;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    UserStore2.prototype.getMyUserInfoActive = function() {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var myUserInfo, error_5;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getMyUserInfoActive");
              return [4, this.nim.V2NIMUserService.getUserList([
                this.nim.V2NIMLoginService.getLoginUser()
              ])];
            case 1:
              myUserInfo = _d.sent();
              this.myUserInfo = myUserInfo[0];
              this.addUsers(myUserInfo);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getMyUserInfoActive success", myUserInfo);
              return [2, myUserInfo[0]];
            case 2:
              error_5 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("getMyUserInfoActive failed: ", error_5);
              throw error_5;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    UserStore2.prototype._getUserInfos = function(accountIds) {
      return __awaiter(this, void 0, void 0, function() {
        var users;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.nim.V2NIMUserService.getUserList(accountIds)];
            case 1:
              users = _a.sent();
              this.addUsers(users);
              return [2, users];
          }
        });
      });
    };
    UserStore2.prototype._onUserProfileChanged = function(data) {
      var _this = this;
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onUserProfileChanged: ", data);
      data.forEach(function(item) {
        if (item.accountId === _this.myUserInfo.accountId) {
          _this.myUserInfo = item;
        }
      });
      this.addUsers(data);
    };
    return UserStore2;
  }()
);
var AIUserStore = (
  /** @class */
  function() {
    function AIUserStore2(rootStore, nim, localOptions) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.localOptions = localOptions;
      this.aiUsers = /* @__PURE__ */ new Map();
      this.aiReqMsgs = [];
      this.aiResMsgs = [];
      this.logger = null;
      this.onSendAIProxyErrorHandler = function() {
      };
      this.requestIds = [];
      this.proxyAccountId = "";
      makeAutoObservable(this);
      this.logger = rootStore.logger;
      this._onProxyAIModelCall = this._onProxyAIModelCall.bind(this);
      this.nim.V2NIMAIService.on("onProxyAIModelCall", this._onProxyAIModelCall);
    }
    Object.defineProperty(AIUserStore2.prototype, "aiProxying", {
      get: function() {
        return this.aiReqMsgs.length > this.aiResMsgs.length;
      },
      enumerable: false,
      configurable: true
    });
    AIUserStore2.prototype.resetState = function() {
      this.aiUsers.clear();
      this.aiReqMsgs = [];
      this.aiResMsgs = [];
    };
    AIUserStore2.prototype.destroy = function() {
      this.resetState();
      this.nim.V2NIMAIService.off("onProxyAIModelCall", this._onProxyAIModelCall);
    };
    AIUserStore2.prototype.addAIUsers = function(aiUsers) {
      var _this = this;
      aiUsers.filter(function(item) {
        return !!item.accountId;
      }).forEach(function(item) {
        _this.aiUsers.set(item.accountId, item);
      });
    };
    AIUserStore2.prototype.removeAIUsers = function(accounts) {
      var _this = this;
      accounts.forEach(function(item) {
        _this.aiUsers.delete(item);
      });
    };
    AIUserStore2.prototype.getAIUserList = function(accountIds) {
      var aiUsers = __spreadArray([], __read(this.aiUsers.values()), false);
      var sortHandler = function(a, b) {
        return b.createTime - a.createTime;
      };
      if (accountIds && accountIds.length) {
        return aiUsers.filter(function(item) {
          return accountIds.includes(item.accountId);
        }).sort(sortHandler);
      }
      return aiUsers.sort(sortHandler);
    };
    AIUserStore2.prototype.getAISearchUser = function() {
      var _a, _b;
      var aiUsers = this.getAIUserList();
      return (_b = (_a = this.localOptions.aiUserAgentProvider) === null || _a === void 0 ? void 0 : _a.getAISearchUser) === null || _b === void 0 ? void 0 : _b.call(_a, aiUsers);
    };
    AIUserStore2.prototype.getAITranslateUser = function() {
      var _a, _b;
      var aiUsers = this.getAIUserList();
      return (_b = (_a = this.localOptions.aiUserAgentProvider) === null || _a === void 0 ? void 0 : _a.getAITranslateUser) === null || _b === void 0 ? void 0 : _b.call(_a, aiUsers);
    };
    AIUserStore2.prototype.getAITranslateLangs = function() {
      var _a, _b;
      var aiUsers = this.getAIUserList();
      return ((_b = (_a = this.localOptions.aiUserAgentProvider) === null || _a === void 0 ? void 0 : _a.getAITranslateLangs) === null || _b === void 0 ? void 0 : _b.call(_a, aiUsers)) || [];
    };
    AIUserStore2.prototype.getAIUserServerExt = function(accountId) {
      var aiUser = this.aiUsers.get(accountId);
      if (!aiUser) {
        return {};
      }
      try {
        return JSON.parse(aiUser.serverExtension || "{}");
      } catch (error) {
        return {};
      }
    };
    AIUserStore2.prototype.getAIChatUser = function() {
      var _this = this;
      var aiUsers = this.getAIUserList();
      return aiUsers.filter(function(item) {
        var serverExt = _this.getAIUserServerExt(item.accountId);
        return serverExt.aiChat === 1;
      });
    };
    AIUserStore2.prototype.getAIPinDefaultUser = function() {
      var _this = this;
      var aiUsers = this.getAIUserList();
      return aiUsers.filter(function(item) {
        var serverExt = _this.getAIUserServerExt(item.accountId);
        return serverExt.pinDefault === 1;
      });
    };
    AIUserStore2.prototype.getAIPinUser = function() {
      var myUserServerExt = this.rootStore.userStore.getMyUserServerExt();
      return this.getAIPinDefaultUser().filter(function(item) {
        var _a;
        return !((_a = myUserServerExt.unpinAIUsers) === null || _a === void 0 ? void 0 : _a.includes(item.accountId));
      });
    };
    AIUserStore2.prototype.isAIPinUser = function(accountId) {
      return this.getAIPinUser().some(function(item) {
        return item.accountId === accountId;
      });
    };
    AIUserStore2.prototype.isAISearching = function() {
      var _a;
      return this.proxyAccountId === ((_a = this.getAISearchUser()) === null || _a === void 0 ? void 0 : _a.accountId);
    };
    AIUserStore2.prototype.isAITranslating = function() {
      var _a;
      return this.proxyAccountId === ((_a = this.getAITranslateUser()) === null || _a === void 0 ? void 0 : _a.accountId);
    };
    AIUserStore2.prototype.isAIUser = function(accountId) {
      return this.aiUsers.has(accountId);
    };
    AIUserStore2.prototype.resetAIProxy = function() {
      this.requestIds = [];
      this.aiReqMsgs = [];
      this.aiResMsgs = [];
      this.proxyAccountId = "";
      this.onSendAIProxyErrorHandler = function() {
      };
    };
    AIUserStore2.prototype.getAIUserListActive = function() {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var aiUsers, error_1;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("getAIUserListActive");
              return [4, this.nim.V2NIMAIService.getAIUserList()];
            case 1:
              aiUsers = _d.sent();
              this.addAIUsers(aiUsers);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("getAIUserListActive success:", aiUsers);
              return [3, 3];
            case 2:
              error_1 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("getAIUserListActive failed:", error_1);
              return [3, 3];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    AIUserStore2.prototype.sendAIProxyActive = function(params) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var finalParams, error_2;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("sendAIProxyActive", params);
              finalParams = __assign({}, params);
              if (params.requestId) {
                this.resetAIProxy();
                this.requestIds.push(params.requestId);
                this.proxyAccountId = params.accountId;
              } else {
                finalParams.requestId = Math.random().toString(36).slice(2);
                this.requestIds.push(finalParams.requestId);
              }
              if (params.onSendAIProxyErrorHandler) {
                this.onSendAIProxyErrorHandler = params.onSendAIProxyErrorHandler;
              }
              return [4, this.nim.V2NIMAIService.proxyAIModelCall(finalParams)];
            case 1:
              _d.sent();
              this.aiReqMsgs.push(params.content);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("sendAIProxyActive success:", params);
              return [3, 3];
            case 2:
              error_2 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("sendAIProxyActive failed:", error_2.toString());
              this.onSendAIProxyErrorHandler(error_2.code);
              throw error_2;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    AIUserStore2.prototype._onProxyAIModelCall = function(res) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("_onProxyAIModelCall", res);
      if (this.requestIds.includes(res.requestId)) {
        if (res.code === 200) {
          this.aiResMsgs.push(res.content.msg);
        } else {
          this.aiReqMsgs.pop();
          this.onSendAIProxyErrorHandler(res.code);
        }
      }
    };
    return AIUserStore2;
  }()
);
var UiStore = (
  /** @class */
  function() {
    function UiStore2(rootStore) {
      this.rootStore = rootStore;
      this.selectedContactType = "";
      this.selectedConversation = "";
      this.logger = null;
      makeAutoObservable(this);
      this.logger = rootStore.logger;
    }
    UiStore2.prototype.resetState = function() {
      this.selectedContactType = "";
      this.selectedConversation = "";
    };
    UiStore2.prototype.destroy = function() {
      this.resetState();
    };
    UiStore2.prototype.selectContactType = function(contactType) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("selectContactType: ", contactType);
      this.selectedContactType = contactType;
    };
    UiStore2.prototype.unselectContactType = function() {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("unselectContactType");
      this.selectedContactType = "";
    };
    UiStore2.prototype.selectConversation = function(conversationId) {
      var _a, _b, _c, _d, _e, _f;
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_g) {
          switch (_g.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("selectConversation: ", conversationId);
              if (conversationId === this.selectedConversation) {
                return [
                  2
                  /*return*/
                ];
              }
              this.rootStore.msgStore.msgs.resetLimitState();
              this.selectedConversation = conversationId;
              if (!conversationId)
                return [3, 4];
              if (!((_b = this.rootStore.sdkOptions) === null || _b === void 0 ? void 0 : _b.enableV2CloudConversation))
                return [3, 2];
              (_c = this.rootStore.conversationStore) === null || _c === void 0 ? void 0 : _c.resetConversationAit(conversationId);
              return [4, (_d = this.rootStore.conversationStore) === null || _d === void 0 ? void 0 : _d.resetConversation(conversationId)];
            case 1:
              _g.sent();
              return [3, 4];
            case 2:
              (_e = this.rootStore.localConversationStore) === null || _e === void 0 ? void 0 : _e.resetConversationAit(conversationId);
              return [4, (_f = this.rootStore.localConversationStore) === null || _f === void 0 ? void 0 : _f.resetConversation(conversationId)];
            case 3:
              _g.sent();
              _g.label = 4;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    UiStore2.prototype.unselectConversation = function() {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("unselectConversation");
      this.selectedConversation = "";
      this.rootStore.msgStore.msgs.resetLimitState();
    };
    UiStore2.prototype.getRelation = function(account) {
      var res = "stranger";
      if (this.rootStore.userStore.myUserInfo.accountId === account) {
        res = "myself";
      } else if (this.rootStore.aiUserStore.aiUsers.has(account)) {
        res = "ai";
      } else if (this.rootStore.friendStore.friends.has(account)) {
        res = "friend";
      } else {
        res = "stranger";
      }
      return {
        relation: res,
        isInBlacklist: this.rootStore.relationStore.isInBlacklist(account)
      };
    };
    UiStore2.prototype.getFriendWithUserNameCard = function(account) {
      var friend = this.rootStore.friendStore.friends.get(account) || {
        accountId: "",
        serverExtension: "",
        customerExtension: ""
      };
      var userCard = this.rootStore.userStore.users.get(account) || {
        accountId: "",
        name: "",
        createTime: Date.now()
      };
      return __assign(__assign({}, friend), userCard);
    };
    UiStore2.prototype.getAppellation = function(_a) {
      var _b;
      var account = _a.account, _c = _a.teamId, teamId = _c === void 0 ? "" : _c, _d = _a.ignoreAlias, ignoreAlias = _d === void 0 ? false : _d, _e = _a.nickFromMsg, nickFromMsg = _e === void 0 ? "" : _e;
      var aiUser = this.rootStore.aiUserStore.aiUsers.get(account);
      if (aiUser) {
        return aiUser.name || account;
      }
      var friend = this.rootStore.friendStore.friends.get(account);
      var user = this.rootStore.userStore.users.get(account);
      var teamMember = (_b = this.rootStore.teamMemberStore.teamMembers.get(teamId)) === null || _b === void 0 ? void 0 : _b.get(account);
      return !ignoreAlias && (friend === null || friend === void 0 ? void 0 : friend.alias) || (teamMember === null || teamMember === void 0 ? void 0 : teamMember.teamNick) || (user === null || user === void 0 ? void 0 : user.name) || nickFromMsg || account;
    };
    Object.defineProperty(UiStore2.prototype, "friends", {
      get: function() {
        return __spreadArray([], __read(this.rootStore.friendStore.friends.values()), false);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(UiStore2.prototype, "conversations", {
      get: function() {
        var _a;
        return ((_a = this.rootStore.conversationStore) === null || _a === void 0 ? void 0 : _a.conversations.values()) ? __spreadArray([], __read(this.rootStore.conversationStore.conversations.values()), false) : [];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(UiStore2.prototype, "localConversations", {
      get: function() {
        var _a;
        return ((_a = this.rootStore.localConversationStore) === null || _a === void 0 ? void 0 : _a.conversations.values()) ? __spreadArray([], __read(this.rootStore.localConversationStore.conversations.values()), false) : [];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(UiStore2.prototype, "users", {
      get: function() {
        return __spreadArray([], __read(this.rootStore.userStore.users.values()), false);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(UiStore2.prototype, "teamList", {
      get: function() {
        var teams = __spreadArray([], __read(this.rootStore.teamStore.teams.values()), false);
        return teams.filter(function(item) {
          return item.isValidTeam;
        }).sort(function(a, b) {
          return b.createTime - a.createTime;
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(UiStore2.prototype, "applyMsgs", {
      get: function() {
        return __spreadArray([], __read(this.rootStore.sysMsgStore.friendApplyMsg.values()), false);
      },
      enumerable: false,
      configurable: true
    });
    return UiStore2;
  }()
);
var StorageStore = (
  /** @class */
  function() {
    function StorageStore2(rootStore, nim) {
      this.rootStore = rootStore;
      this.nim = nim;
      makeAutoObservable(this);
    }
    StorageStore2.prototype.uploadFileActive = function(fileObj) {
      return __awaiter(this, void 0, void 0, function() {
        var errorContent, avatarUrl, task, error_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              logger.log("uploadFileActive", fileObj);
              if (!fileObj) {
                errorContent = "upload avatar error, no file or filepath";
                logger.warn(errorContent);
                throw new Error(errorContent);
              }
              avatarUrl = "";
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              task = this.nim.V2NIMStorageService.createUploadFileTask({
                fileObj
              });
              return [4, this.nim.V2NIMStorageService.uploadFile(task, function() {
              })];
            case 2:
              avatarUrl = _a.sent();
              return [3, 4];
            case 3:
              error_1 = _a.sent();
              logger.warn("upload avatar error ", error_1);
              throw error_1;
            case 4:
              return [2, avatarUrl];
          }
        });
      });
    };
    return StorageStore2;
  }()
);
var name = "nim-web-sdk-ng";
var version = "10.9.30";
var sdk = {
  version: 100930,
  versionFormat: "10.9.30"
};
var description = "Yunxin IM SDK next generation";
var main = "./dist/v2/NIM_BROWSER_SDK.js";
var types = "./dist/v2/NIM_BROWSER_SDK/index.d.ts";
var scripts = {
  test: "jest --maxWorkers 1 --silent",
  lint: "npx eslint ./src",
  dev: "cd pages/ && npm run dev",
  clean: "rm -rf ./dist",
  emitTypes: "tsc --emitDeclarationOnly --declaration --declarationDir temp/types",
  "build:esm": "npm run emitTypes && rollup --config ./build/esm.config.js",
  build: "npm run clean && npm run emitTypes && node script/copyPlugin.js && rollup --config ./build/v1.config.js && rollup --config ./build/v2.config.js && rollup --config ./build/esm.config.js",
  analyze: 'npm run clean && npx rollup --config ./build/analyze.config.js && ls -lhR dist | grep ".js"',
  "pages:build": "cd pages/ && npm install && npm run build && cp -rf dist/ ../dist/",
  api: "npm run translate && node script/buildApi.js",
  translate: "rm -rf ./apidocs && multilingual-tool convert --indir=src/typings --outdir=apidocs --includes=ts",
  "api-diff": "multilingual-tool diff --dir=src/typings --receiver=3070898 --exclude=DS_Store",
  updateVerInNdp: "node ./script/updateVerInNdp.js"
};
var repository = {
  type: "git",
  url: "ssh://git@g.hz.netease.com:22222/yunxin/im/sdk.git"
};
var keywords = [
  "im",
  "sdk"
];
var author = "yunxin";
var license = "ISC";
var eslintIgnore = [
  "dist/"
];
var files = [
  "README.md",
  "CHANGELOG.md",
  "dist/v1/NIM*",
  "dist/v1/CHATROOM*",
  "dist/v1/QCHAT*",
  "dist/v2/NIM*",
  "dist/v2/CHATROOM*",
  "dist/esm/*"
];
var devDependencies = {
  "@babel/core": "^7.13.15",
  "@babel/plugin-proposal-class-properties": "^7.13.0",
  "@babel/plugin-transform-block-scoping": "^7.23.4",
  "@babel/plugin-transform-runtime": "^7.13.15",
  "@babel/preset-env": "^7.13.15",
  "@babel/preset-typescript": "^7.13.0",
  "@babel/runtime": "^7.13.10",
  "@babel/runtime-corejs3": "^7.13.10",
  "@microsoft/api-extractor": "^7.19.4",
  "@rollup/plugin-babel": "^5.3.0",
  "@rollup/plugin-commonjs": "^18.0.0",
  "@rollup/plugin-json": "^4.1.0",
  "@rollup/plugin-node-resolve": "^11.2.1",
  "@rollup/plugin-replace": "^3.0.0",
  "@rollup/plugin-typescript": "^8.3.0",
  "@types/backo2": "^1.0.1",
  "@types/jest": "^27.4.1",
  "@types/lodash": "^4.14.177",
  "@types/platform": "^1.3.3",
  "@typescript-eslint/eslint-plugin": "^5.12.0",
  "@typescript-eslint/parser": "^5.12.0",
  "@yxfe/multilingual-tool": "^1.0.30",
  "@yxfe/nim-log-reporter": "^1.0.6",
  "@yxfe/nos-uploader": "^1.0.28",
  "@yxfe/request": "^0.2.12",
  backo2: "^1.0.2",
  "browser-md5-file": "^1.1.1",
  "core-js": "^3.10.1",
  "cross-env": "^7.0.3",
  eslint: "^8.9.0",
  "eslint-config-prettier": "^8.5.0",
  "eslint-plugin-prettier": "^4.0.0",
  eventemitter3: "^4.0.7",
  husky: "^7.0.4",
  jest: "^27.5.1",
  "lodash-es": "^4.17.21",
  "neroom-web-sdk": "1.7.0",
  platform: "^1.3.6",
  "pre-commit": "^1.2.2",
  prettier: "^2.6.1",
  "react-native": "^0.75.2",
  rollup: "^2.45.2",
  "rollup-plugin-banner": "^0.2.1",
  "rollup-plugin-banner2": "^1.2.2",
  "rollup-plugin-copy": "^3.4.0",
  "rollup-plugin-insert": "^1.3.2",
  "rollup-plugin-terser": "^7.0.2",
  "rollup-plugin-visualizer": "^5.12.0",
  "ts-jest": "^27.1.4",
  tslib: "^2.3.1",
  typedoc: "^0.22.11",
  typescript: "^4.5.4"
};
var sdkPkg = {
  name,
  version,
  sdk,
  description,
  main,
  types,
  scripts,
  repository,
  keywords,
  author,
  license,
  eslintIgnore,
  files,
  devDependencies
};
var LocalConversationStore = (
  /** @class */
  function() {
    function LocalConversationStore2(rootStore, nim) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.conversations = /* @__PURE__ */ new Map();
      this.totalUnreadCount = 0;
      this.logger = null;
      makeAutoObservable(this);
      this._onSyncStarted = this._onSyncStarted.bind(this);
      this._onSyncFinished = this._onSyncFinished.bind(this);
      this._onSyncFailed = this._onSyncFailed.bind(this);
      this._onConversationCreated = this._onConversationCreated.bind(this);
      this._onConversationDeleted = this._onConversationDeleted.bind(this);
      this._onConversationChanged = this._onConversationChanged.bind(this);
      this._onTotalUnreadCountChanged = this._onTotalUnreadCountChanged.bind(this);
      this.logger = rootStore.logger;
      nim.V2NIMLocalConversationService.on("onSyncStarted", this._onSyncStarted);
      nim.V2NIMLocalConversationService.on("onSyncFinished", this._onSyncFinished);
      nim.V2NIMLocalConversationService.on("onSyncFailed", this._onSyncFailed);
      nim.V2NIMLocalConversationService.on("onConversationCreated", this._onConversationCreated);
      nim.V2NIMLocalConversationService.on("onConversationDeleted", this._onConversationDeleted);
      nim.V2NIMLocalConversationService.on("onConversationChanged", this._onConversationChanged);
      nim.V2NIMLocalConversationService.on("onTotalUnreadCountChanged", this._onTotalUnreadCountChanged);
    }
    LocalConversationStore2.prototype.resetState = function() {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore Conversation resetState");
      this.conversations.clear();
      this.totalUnreadCount = 0;
    };
    LocalConversationStore2.prototype.destroy = function() {
      this.resetState();
      this.nim.V2NIMLocalConversationService.off("onSyncStarted", this._onSyncStarted);
      this.nim.V2NIMLocalConversationService.off("onSyncFinished", this._onSyncFinished);
      this.nim.V2NIMLocalConversationService.off("onSyncFailed", this._onSyncFailed);
      this.nim.V2NIMLocalConversationService.off("onConversationCreated", this._onConversationCreated);
      this.nim.V2NIMLocalConversationService.off("onConversationDeleted", this._onConversationDeleted);
      this.nim.V2NIMLocalConversationService.off("onConversationChanged", this._onConversationChanged);
      this.nim.V2NIMLocalConversationService.off("onTotalUnreadCountChanged", this._onTotalUnreadCountChanged);
    };
    LocalConversationStore2.prototype.addConversation = function(conversations) {
      var _this = this;
      conversations.filter(function(item) {
        return !!item.conversationId;
      }).filter(function(item) {
        return [
          1,
          2
        ].includes(item.type);
      }).forEach(function(item) {
        return __awaiter(_this, void 0, void 0, function() {
          var oldConversation;
          return __generator(this, function(_a) {
            oldConversation = this.conversations.get(item.conversationId);
            this.conversations.set(item.conversationId, __assign(__assign({}, oldConversation), item));
            return [
              2
              /*return*/
            ];
          });
        });
      });
    };
    LocalConversationStore2.prototype.updateConversation = function(conversations) {
      var _this = this;
      conversations.filter(function(item) {
        return !!item.conversationId;
      }).filter(function(item) {
        return [
          1,
          2
        ].includes(item.type);
      }).forEach(function(item) {
        var oldConversation = _this.conversations.get(item.conversationId);
        _this.conversations.set(item.conversationId, __assign(__assign({}, oldConversation), item));
      });
    };
    LocalConversationStore2.prototype.removeConversation = function(conversationIds) {
      var _this = this;
      conversationIds.forEach(function(item) {
        _this.conversations.delete(item);
        if (_this.rootStore.uiStore.selectedConversation === item) {
          _this.rootStore.uiStore.unselectConversation();
        }
      });
    };
    LocalConversationStore2.prototype.resetConversation = function(conversationId) {
      var _a, _b, _c, _d;
      return __awaiter(this, void 0, void 0, function() {
        var conversation, error_1;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore resetConversation", conversationId);
              conversation = this.conversations.get(conversationId);
              if (!conversation) {
                (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn("LocalConversationStore resetConversation: conversation is not found.", conversationId);
                return [
                  2
                  /*return*/
                ];
              }
              _e.label = 1;
            case 1:
              _e.trys.push([1, 4, , 5]);
              if (!conversation.unreadCount)
                return [3, 3];
              this._resetMemoryConversationUnreadCount(conversation);
              return [4, this.nim.V2NIMLocalConversationService.clearUnreadCountByIds([
                conversation.conversationId
              ])];
            case 2:
              _e.sent();
              this._resetMemoryConversationUnreadCount(conversation);
              _e.label = 3;
            case 3:
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("LocalConversationStore resetConversation success");
              return [3, 5];
            case 4:
              error_1 = _e.sent();
              (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error("LocalConversationStore resetConversation failed: ", error_1);
              throw error_1;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    LocalConversationStore2.prototype.insertConversationActive = function(conversationType, receiverId, isSelected) {
      var _a, _b, _c;
      if (isSelected === void 0) {
        isSelected = true;
      }
      return __awaiter(this, void 0, void 0, function() {
        var conversationId, conversation, error_2;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 5, , 6]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore insertConversationActive", {
                conversationType,
                receiverId,
                isSelected
              });
              conversationId = "";
              if (conversationType === 1) {
                conversationId = this.nim.V2NIMConversationIdUtil.p2pConversationId(receiverId);
              } else if (conversationType === 2) {
                conversationId = this.nim.V2NIMConversationIdUtil.teamConversationId(receiverId);
              } else {
                throw new Error("Unsupported conversation type");
              }
              if (!!this.conversations.has(conversationId))
                return [3, 2];
              return [4, this.nim.V2NIMLocalConversationService.createConversation(conversationId)];
            case 1:
              conversation = _d.sent();
              this.addConversation([conversation]);
              _d.label = 2;
            case 2:
              if (!isSelected)
                return [3, 4];
              return [4, this.rootStore.uiStore.selectConversation(conversationId)];
            case 3:
              _d.sent();
              _d.label = 4;
            case 4:
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("LocalConversationStore insertConversationActive success", {
                conversationType,
                receiverId,
                isSelected
              });
              return [3, 6];
            case 5:
              error_2 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("LocalConversationStore insertConversationActive failed: ", { conversationType, receiverId, isSelected }, error_2);
              throw error_2;
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    LocalConversationStore2.prototype.deleteConversationActive = function(conversationId) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_4;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 6, , 7]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore deleteConversationActive", conversationId);
              _d.label = 1;
            case 1:
              _d.trys.push([1, 3, , 4]);
              return [4, this.stickTopConversationActive(conversationId, false)];
            case 2:
              _d.sent();
              return [3, 4];
            case 3:
              _d.sent();
              return [3, 4];
            case 4:
              this.removeConversation([conversationId]);
              return [4, this.nim.V2NIMLocalConversationService.deleteConversation(conversationId, false)];
            case 5:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("LocalConversationStore deleteConversationActive success");
              return [3, 7];
            case 6:
              error_4 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.warn("LocalConversationStore deleteConversationActive failed but continue: ", error_4);
              return [3, 7];
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    LocalConversationStore2.prototype.stickTopConversationActive = function(conversationId, stickTop) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var error_5;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore stickTopConversationActive", conversationId, stickTop);
              return [4, this.nim.V2NIMLocalConversationService.stickTopConversation(conversationId, stickTop)];
            case 1:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("LocalConversationStore stickTopConversationActive success");
              return [3, 3];
            case 2:
              error_5 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("LocalConversationStore stickTopConversationActive failed: ", error_5);
              throw error_5;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    LocalConversationStore2.prototype.getConversationListActive = function(offset, limit) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_6;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 3, , 4]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore getConversationListActive", offset, limit);
              return [4, this.nim.V2NIMLocalConversationService.getConversationList(offset, limit)];
            case 1:
              res = _d.sent();
              this.addConversation(res.conversationList);
              return [4, this.getP2PMessageReceipt(res.conversationList.filter(function(item) {
                return item.type === 1;
              }).map(function(item) {
                return item.conversationId;
              }))];
            case 2:
              _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("LocalConversationStore getConversationListActive success", offset, limit, res);
              return [2, res];
            case 3:
              error_6 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("LocalConversationStore getConversationListActive failed: ", error_6, offset, limit);
              throw error_6;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    LocalConversationStore2.prototype.getP2PMessageReceipt = function(conversationIds) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, conversations, error_7;
        var _this = this;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore getP2PMessageReceipt", conversationIds);
              return [4, Promise.all(conversationIds.map(function(item) {
                return _this.nim.V2NIMMessageService.getP2PMessageReceipt(item);
              }))];
            case 1:
              res = _d.sent();
              conversations = res.map(function(item) {
                var conversation = _this.conversations.get(item.conversationId);
                if (conversation) {
                  return __assign(__assign({}, conversation), { msgReceiptTime: item.timestamp });
                }
              }).filter(function(item) {
                return !!item;
              });
              this.updateConversation(conversations);
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("LocalConversationStore getP2PMessageReceipt success", conversationIds, res);
              return [2, res];
            case 2:
              error_7 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("LocalConversationStore getP2PMessageReceipt failed: ", error_7, conversationIds);
              throw error_7;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    LocalConversationStore2.prototype._resetMemoryConversationUnreadCount = function(conversation) {
      var newConversation = this.conversations.get(conversation.conversationId);
      if (newConversation) {
        this.updateConversation([__assign(__assign({}, newConversation), { unreadCount: 0 })]);
      }
    };
    LocalConversationStore2.prototype.getConversationReadTimeActive = function(conversationId) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_8;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore getConversationReadTimeActive", conversationId);
              return [4, this.nim.V2NIMLocalConversationService.getConversationReadTime(conversationId)];
            case 1:
              res = _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("LocalConversationStore getConversationReadTimeActive success", conversationId, res);
              return [2, res];
            case 2:
              error_8 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("LocalConversationStore getConversationReadTimeActive failed: ", error_8, conversationId);
              throw error_8;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    LocalConversationStore2.prototype.markConversationReadActive = function(conversationId) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var res, error_9;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore markConversationReadActive", conversationId);
              return [4, this.nim.V2NIMLocalConversationService.markConversationRead(conversationId)];
            case 1:
              res = _d.sent();
              (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("LocalConversationStore markConversationReadActive success", conversationId, res);
              return [2, res];
            case 2:
              error_9 = _d.sent();
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.error("LocalConversationStore markConversationReadActive failed: ", error_9, conversationId);
              throw error_9;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    LocalConversationStore2.prototype.handleConversationWithAit = function(msgs) {
      var _this = this;
      msgs.map(function(item) {
        return __awaiter(_this, void 0, void 0, function() {
          var hasAitMsg, conversationReadTime, isCurConversation, isSendFromMe, conversation, aitMsgs;
          var _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                if (!(item.conversationType === 2 || item.conversationType === 3))
                  return [3, 2];
                if (!(item === null || item === void 0 ? void 0 : item.serverExtension))
                  return [3, 2];
                hasAitMsg = this.hasAitMsg([item.serverExtension]);
                return [4, this.getConversationReadTimeActive(item.conversationId)];
              case 1:
                conversationReadTime = _b.sent();
                isCurConversation = item.conversationId == this.rootStore.uiStore.selectedConversation;
                isSendFromMe = item.senderId === ((_a = this.rootStore.userStore.myUserInfo) === null || _a === void 0 ? void 0 : _a.accountId);
                if (item.createTime > conversationReadTime && hasAitMsg && !isCurConversation && !isSendFromMe) {
                  conversation = this.conversations.get(item.conversationId);
                  if (conversation) {
                    aitMsgs = conversation.aitMsgs || [];
                    if (aitMsgs.length === 0) {
                      this.updateConversation([
                        __assign(__assign({}, conversation), { aitMsgs: [item.messageClientId] })
                      ]);
                    } else {
                      this.updateConversation([
                        __assign(__assign({}, conversation), { aitMsgs: __spreadArray(__spreadArray([], __read(aitMsgs), false), [item.messageClientId], false) })
                      ]);
                    }
                  } else {
                    this.addConversation([
                      //@ts-ignore
                      {
                        conversationId: item.conversationId,
                        type: item.conversationType,
                        aitMsgs: [item.messageClientId]
                      }
                    ]);
                  }
                }
                _b.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      });
    };
    LocalConversationStore2.prototype.resetConversationAit = function(conversationId) {
      var conversation = this.conversations.get(conversationId);
      if ((conversation === null || conversation === void 0 ? void 0 : conversation.type) === 2 || (conversation === null || conversation === void 0 ? void 0 : conversation.type) === 3) {
        this.updateConversation([
          __assign(__assign({}, conversation), { aitMsgs: [] })
        ]);
      }
    };
    LocalConversationStore2.prototype.hasAitMsg = function(serverExtensions) {
      var _this = this;
      var flag = false;
      if (serverExtensions === null || serverExtensions === void 0 ? void 0 : serverExtensions.length) {
        serverExtensions === null || serverExtensions === void 0 ? void 0 : serverExtensions.forEach(function(item) {
          var _a, _b;
          try {
            var extObj = JSON.parse(item || "{}");
            var yxAitMsg = extObj.yxAitMsg;
            var account_1 = _this.rootStore.userStore.myUserInfo.accountId;
            if (yxAitMsg) {
              (_a = Object.keys(yxAitMsg)) === null || _a === void 0 ? void 0 : _a.forEach(function(key) {
                if (key === account_1 || key === AT_ALL_ACCOUNT) {
                  flag = true;
                }
              });
            }
          } catch (_c) {
            (_b = _this.logger) === null || _b === void 0 ? void 0 : _b.error("LocalConversationStore parse serverExtension failed: ", item);
          }
        });
      }
      return flag;
    };
    LocalConversationStore2.prototype._onSyncStarted = function() {
      var _a, _b;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore _onSyncStarted");
      (_b = this.rootStore.localConversationStore) === null || _b === void 0 ? void 0 : _b.getConversationListActive(0, this.rootStore.localOptions.conversationLimit || 100);
    };
    LocalConversationStore2.prototype._onSyncFinished = function() {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_c) {
          (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore _onSyncFinished");
          (_b = this.rootStore.localConversationStore) === null || _b === void 0 ? void 0 : _b.getConversationListActive(0, this.rootStore.localOptions.conversationLimit || 100);
          return [
            2
            /*return*/
          ];
        });
      });
    };
    LocalConversationStore2.prototype._onSyncFailed = function(e) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore _onSyncFailed", e);
    };
    LocalConversationStore2.prototype._onConversationCreated = function(data) {
      var _this = this;
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore _onConversationCreated", data);
      if (data.type === 2) {
        this.nim.V2NIMLocalConversationService.getConversation(data.conversationId).then(function(conversation) {
          _this.addConversation([conversation]);
          if (conversation.lastMessage) {
            _this.handleConversationWithAit([
              __assign(__assign({}, conversation.lastMessage), conversation.lastMessage.messageRefer)
            ]);
          }
        });
      } else {
        this.addConversation([data]);
        if (data.type === 1) {
          var conversationId_1 = data.conversationId;
          this.nim.V2NIMMessageService.getP2PMessageReceipt(conversationId_1).then(function(res) {
            var conversation = _this.conversations.get(conversationId_1);
            if (conversation) {
              _this.updateConversation([
                __assign(__assign({}, conversation), { msgReceiptTime: res.timestamp })
              ]);
            }
          });
        }
      }
    };
    LocalConversationStore2.prototype._onConversationDeleted = function(conversationIds) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore _onConversationDeleted", conversationIds);
      this.removeConversation(conversationIds);
    };
    LocalConversationStore2.prototype._onConversationChanged = function(data) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_b) {
          (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore _onConversationChanged", data);
          this.addConversation(data);
          data.forEach(function(item) {
            return __awaiter(_this, void 0, void 0, function() {
              var attachment, type;
              var _a2, _b2, _c, _d;
              return __generator(this, function(_e) {
                switch (_e.label) {
                  case 0:
                    attachment = (_a2 = item.lastMessage) === null || _a2 === void 0 ? void 0 : _a2.attachment;
                    type = attachment === null || attachment === void 0 ? void 0 : attachment.type;
                    if (!(((_b2 = item.lastMessage) === null || _b2 === void 0 ? void 0 : _b2.messageType) === 5 && (type === 1 && ((_c = attachment === null || attachment === void 0 ? void 0 : attachment.targetIds) === null || _c === void 0 ? void 0 : _c.includes(this.rootStore.userStore.myUserInfo.accountId)) || type === 2 && ((_d = item.lastMessage) === null || _d === void 0 ? void 0 : _d.messageRefer.senderId) === this.rootStore.userStore.myUserInfo.accountId || type === 4)))
                      return [3, 2];
                    return [4, this.deleteConversationActive(item.conversationId)];
                  case 1:
                    _e.sent();
                    return [3, 4];
                  case 2:
                    if (!(this.rootStore.uiStore.selectedConversation === item.conversationId))
                      return [3, 4];
                    return [4, this.resetConversation(item.conversationId)];
                  case 3:
                    _e.sent();
                    _e.label = 4;
                  case 4:
                    if (item.type === 2 && item.unreadCount == 0) {
                      this.resetConversationAit(item.conversationId);
                    }
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          });
          return [
            2
            /*return*/
          ];
        });
      });
    };
    LocalConversationStore2.prototype._onTotalUnreadCountChanged = function(data) {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("LocalConversationStore _onTotalUnreadCountChanged", data);
      this.totalUnreadCount = data;
    };
    return LocalConversationStore2;
  }()
);
var SubscriptionStore = (
  /** @class */
  function() {
    function SubscriptionStore2(rootStore, nim) {
      this.rootStore = rootStore;
      this.nim = nim;
      this.stateMap = /* @__PURE__ */ new Map();
      this.logger = null;
      makeAutoObservable(this);
      this._onUserStatusChanged = this._onUserStatusChanged.bind(this);
      this.nim.V2NIMSubscriptionService.on("onUserStatusChanged", this._onUserStatusChanged);
      this.logger = rootStore.logger;
    }
    SubscriptionStore2.prototype.resetState = function() {
      var _a;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("SubscriptionStore resetState");
      this.stateMap.clear();
    };
    SubscriptionStore2.prototype.destroy = function() {
      this.resetState();
      this.nim.V2NIMSubscriptionService.off("onUserStatusChanged", this._onUserStatusChanged);
    };
    SubscriptionStore2.prototype.getUserStatus = function(accountId) {
      return this.stateMap.get(accountId);
    };
    SubscriptionStore2.prototype.getUserStatusList = function() {
      return __spreadArray([], __read(this.stateMap.values()), false);
    };
    SubscriptionStore2.prototype.subscribeUserStatusActive = function(accountIds) {
      var _a, _b, _c, _d;
      return __awaiter(this, void 0, void 0, function() {
        var failedAccounts, err_1;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              _e.trys.push([0, 2, , 3]);
              (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("subscribeUserStatusActive", accountIds);
              return [4, this.nim.V2NIMSubscriptionService.subscribeUserStatus({
                accountIds,
                duration: 3600 * 24 * 7,
                immediateSync: true
              })];
            case 1:
              failedAccounts = _e.sent();
              if (failedAccounts.length > 0) {
                (_b = this.logger) === null || _b === void 0 ? void 0 : _b.warn("subscribeUserStatusActive failed accounts", failedAccounts);
                return [2, failedAccounts];
              }
              (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("subscribeUserStatusActive success");
              return [3, 3];
            case 2:
              err_1 = _e.sent();
              (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error("subscribeUserStatusActive err", err_1);
              return [3, 3];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    SubscriptionStore2.prototype._onUserStatusChanged = function(userStatusList) {
      var e_1, _a;
      var _b;
      (_b = this.logger) === null || _b === void 0 ? void 0 : _b.log("_onUserStatusChanged", userStatusList);
      try {
        for (var userStatusList_1 = __values(userStatusList), userStatusList_1_1 = userStatusList_1.next(); !userStatusList_1_1.done; userStatusList_1_1 = userStatusList_1.next()) {
          var userStatus = userStatusList_1_1.value;
          this.stateMap.set(userStatus.accountId, userStatus);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (userStatusList_1_1 && !userStatusList_1_1.done && (_a = userStatusList_1.return))
            _a.call(userStatusList_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    return SubscriptionStore2;
  }()
);
var RootStore = (
  /** @class */
  function() {
    function RootStore2(nim, localOptions, platform) {
      if (platform === void 0) {
        platform = "Web";
      }
      var _this = this;
      var _a, _b, _c, _d, _e;
      this.localOptions = {
        addFriendNeedVerify: true,
        teamJoinMode: 0,
        teamAgreeMode: 1,
        teamInviteMode: 0,
        teamUpdateTeamMode: 0,
        teamUpdateExtMode: 1,
        enableTeam: true,
        enableChangeTeamJoinMode: true,
        enableChangeTeamAgreeMode: true,
        leaveOnTransfer: false,
        needMention: true,
        p2pMsgReceiptVisible: false,
        teamMsgReceiptVisible: false,
        loginStateVisible: false,
        allowTransferTeamOwner: false,
        teamManagerVisible: false,
        aiVisible: true,
        teamManagerLimit: 10,
        sendMsgBefore: function(options) {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a2) {
              return [2, options];
            });
          });
        },
        aiUserAgentProvider: {},
        conversationLimit: 100,
        debug: "debug",
        aiStream: true,
        iconfontUrl: []
      };
      this.sdkOptions = {};
      this.conversationStore = null;
      this.localConversationStore = null;
      this.logger = null;
      makeAutoObservable(this);
      this.nim = nim;
      this.localOptions = __assign(__assign({}, this.localOptions), localOptions);
      this.logger = ((_a = this.localOptions) === null || _a === void 0 ? void 0 : _a.debug) == "off" ? null : logDebug$1({
        level: (_b = this.localOptions) === null || _b === void 0 ? void 0 : _b.debug,
        version: packageJson.version,
        appName: packageJson.name,
        needStringify: false
      });
      (_c = this.logger) === null || _c === void 0 ? void 0 : _c.log("store init", {
        localOptions: this.localOptions
      });
      this.sdkOptions = __assign({}, (_d = this.nim) === null || _d === void 0 ? void 0 : _d.getOptions());
      this.connectStore = new ConnectStore(this, nim, this.localOptions);
      this.friendStore = new FriendStore(this, nim);
      this.msgStore = new MsgStore(this, nim, this.localOptions);
      this.relationStore = new RelationStore(this, nim);
      if ((_e = this.sdkOptions) === null || _e === void 0 ? void 0 : _e.enableV2CloudConversation) {
        this.conversationStore = new ConversationStore(this, nim);
      } else {
        this.localConversationStore = new LocalConversationStore(this, nim);
      }
      this.teamStore = new TeamStore(this, nim, this.localOptions);
      this.teamMemberStore = new TeamMemberStore(this, nim);
      this.sysMsgStore = new SysMsgStore(this, nim);
      this.userStore = new UserStore(this, nim);
      this.aiUserStore = new AIUserStore(this, nim, this.localOptions);
      this.uiStore = new UiStore(this);
      this.storageStore = new StorageStore(this, nim);
      this.subscriptionStore = new SubscriptionStore(this, nim);
      var reportComponents = [
        "ContactKit",
        "ConversationKit",
        "ChatKit",
        "SearchKit"
      ];
      reportComponents.forEach(function(item) {
        var eventTracking = new EventTracking$1({
          appKey: _this.nim.options.appkey,
          version: "",
          component: item,
          imVersion: sdkPkg.version,
          platform,
          channel: "netease",
          os: "",
          framework: "",
          language: detectLanguage(),
          container: detectContainer(platform)
        });
        eventTracking.track("init", "");
      });
    }
    RootStore2.prototype.resetState = function() {
      var _a, _b, _c, _d;
      (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log("store resetState");
      this.friendStore.resetState();
      this.msgStore.resetState();
      this.relationStore.resetState();
      if ((_b = this.sdkOptions) === null || _b === void 0 ? void 0 : _b.enableV2CloudConversation) {
        (_c = this.conversationStore) === null || _c === void 0 ? void 0 : _c.resetState();
      } else {
        (_d = this.localConversationStore) === null || _d === void 0 ? void 0 : _d.resetState();
      }
      this.teamStore.resetState();
      this.teamMemberStore.resetState();
      this.sysMsgStore.resetState();
      this.userStore.resetState();
      this.aiUserStore.resetState();
      this.uiStore.resetState();
      this.subscriptionStore.resetState();
    };
    RootStore2.prototype.destroy = function() {
      var _a, _b, _c;
      logger.log("store destroyed");
      this.connectStore.destroy();
      this.friendStore.destroy();
      this.msgStore.destroy();
      this.relationStore.destroy();
      if ((_a = this.sdkOptions) === null || _a === void 0 ? void 0 : _a.enableV2CloudConversation) {
        (_b = this.conversationStore) === null || _b === void 0 ? void 0 : _b.destroy();
      } else {
        (_c = this.localConversationStore) === null || _c === void 0 ? void 0 : _c.destroy();
      }
      this.teamStore.destroy();
      this.teamMemberStore.destroy();
      this.sysMsgStore.destroy();
      this.userStore.destroy();
      this.aiUserStore.destroy();
      this.uiStore.destroy();
      this.subscriptionStore.destroy();
    };
    RootStore2.getInstance = function(nim, localOptions, platform) {
      if (platform === void 0) {
        platform = "Web";
      }
      if (!this.ins) {
        this.ins = new RootStore2(nim, localOptions, platform);
      }
      return this.ins;
    };
    return RootStore2;
  }()
);
export {
  AIUserStore,
  ConnectStore,
  ConversationStore,
  FriendStore,
  LocalConversationStore,
  MsgStore,
  RelationStore,
  RootStore,
  StorageStore,
  SubscriptionStore,
  SysMsgStore,
  TeamMemberStore,
  TeamStore,
  UiStore,
  UserStore,
  RootStore as default,
  constant as storeConstants,
  utils as storeUtils
};
//# sourceMappingURL=@xkit-yx_im-store-v2.js.map
