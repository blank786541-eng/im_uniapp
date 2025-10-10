import "./chunk-LQ2VYIYD.js";

// ../../../../../../Users/mac/production/workspace/im/node_modules/nim-web-sdk-ng/dist/esm/nim.js
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function createCommonjsModule(t2) {
  var o2 = { exports: {} };
  return t2(o2, o2.exports), o2.exports;
}
var o;
var a;
var m;
var u;
var h;
var g;
var I;
var M;
var _;
var E;
var S;
var T;
var C;
var N;
var A;
var O;
var R;
var b;
var V;
var k;
var P;
var L;
var w;
var D;
var U;
var x;
var B;
var $;
var j;
var G;
var q;
var H;
var z;
var Y;
var K;
var W;
var J;
var X;
var Q;
var Z;
var ee;
var te;
var re;
var ie;
var oe;
var se;
var ne;
var ae;
var ce;
var de;
var le;
var pe;
var me;
var ue;
var he;
var ge;
var ve = createCommonjsModule(function(t2) {
  var o2 = Object.prototype.hasOwnProperty, a2 = "~";
  function Events() {
  }
  function EE(t3, o3, a3) {
    this.fn = t3, this.context = o3, this.once = a3 || false;
  }
  function addListener(t3, o3, m2, u2, h2) {
    if ("function" != typeof m2)
      throw new TypeError("The listener must be a function");
    var g2 = new EE(m2, u2 || t3, h2), I2 = a2 ? a2 + o3 : o3;
    return t3._events[I2] ? t3._events[I2].fn ? t3._events[I2] = [t3._events[I2], g2] : t3._events[I2].push(g2) : (t3._events[I2] = g2, t3._eventsCount++), t3;
  }
  function clearEvent(t3, o3) {
    0 == --t3._eventsCount ? t3._events = new Events() : delete t3._events[o3];
  }
  function EventEmitter() {
    this._events = new Events(), this._eventsCount = 0;
  }
  Object.create && (Events.prototype = /* @__PURE__ */ Object.create(null), new Events().__proto__ || (a2 = false)), EventEmitter.prototype.eventNames = function eventNames() {
    var t3, m2, u2 = [];
    if (0 === this._eventsCount)
      return u2;
    for (m2 in t3 = this._events)
      o2.call(t3, m2) && u2.push(a2 ? m2.slice(1) : m2);
    return Object.getOwnPropertySymbols ? u2.concat(Object.getOwnPropertySymbols(t3)) : u2;
  }, EventEmitter.prototype.listeners = function listeners(t3) {
    var o3 = a2 ? a2 + t3 : t3, m2 = this._events[o3];
    if (!m2)
      return [];
    if (m2.fn)
      return [m2.fn];
    for (var u2 = 0, h2 = m2.length, g2 = new Array(h2); u2 < h2; u2++)
      g2[u2] = m2[u2].fn;
    return g2;
  }, EventEmitter.prototype.listenerCount = function listenerCount(t3) {
    var o3 = a2 ? a2 + t3 : t3, m2 = this._events[o3];
    return m2 ? m2.fn ? 1 : m2.length : 0;
  }, EventEmitter.prototype.emit = function emit(t3, o3, m2, u2, h2, g2) {
    var I2 = a2 ? a2 + t3 : t3;
    if (!this._events[I2])
      return false;
    var M2, _2, E2 = this._events[I2], S2 = arguments.length;
    if (E2.fn) {
      switch (E2.once && this.removeListener(t3, E2.fn, void 0, true), S2) {
        case 1:
          return E2.fn.call(E2.context), true;
        case 2:
          return E2.fn.call(E2.context, o3), true;
        case 3:
          return E2.fn.call(E2.context, o3, m2), true;
        case 4:
          return E2.fn.call(E2.context, o3, m2, u2), true;
        case 5:
          return E2.fn.call(E2.context, o3, m2, u2, h2), true;
        case 6:
          return E2.fn.call(E2.context, o3, m2, u2, h2, g2), true;
      }
      for (_2 = 1, M2 = new Array(S2 - 1); _2 < S2; _2++)
        M2[_2 - 1] = arguments[_2];
      E2.fn.apply(E2.context, M2);
    } else {
      var T2, C2 = E2.length;
      for (_2 = 0; _2 < C2; _2++)
        switch (E2[_2].once && this.removeListener(t3, E2[_2].fn, void 0, true), S2) {
          case 1:
            E2[_2].fn.call(E2[_2].context);
            break;
          case 2:
            E2[_2].fn.call(E2[_2].context, o3);
            break;
          case 3:
            E2[_2].fn.call(E2[_2].context, o3, m2);
            break;
          case 4:
            E2[_2].fn.call(E2[_2].context, o3, m2, u2);
            break;
          default:
            if (!M2)
              for (T2 = 1, M2 = new Array(S2 - 1); T2 < S2; T2++)
                M2[T2 - 1] = arguments[T2];
            E2[_2].fn.apply(E2[_2].context, M2);
        }
    }
    return true;
  }, EventEmitter.prototype.on = function on(t3, o3, a3) {
    return addListener(this, t3, o3, a3, false);
  }, EventEmitter.prototype.once = function once(t3, o3, a3) {
    return addListener(this, t3, o3, a3, true);
  }, EventEmitter.prototype.removeListener = function removeListener(t3, o3, m2, u2) {
    var h2 = a2 ? a2 + t3 : t3;
    if (!this._events[h2])
      return this;
    if (!o3)
      return clearEvent(this, h2), this;
    var g2 = this._events[h2];
    if (g2.fn)
      g2.fn !== o3 || u2 && !g2.once || m2 && g2.context !== m2 || clearEvent(this, h2);
    else {
      for (var I2 = 0, M2 = [], _2 = g2.length; I2 < _2; I2++)
        (g2[I2].fn !== o3 || u2 && !g2[I2].once || m2 && g2[I2].context !== m2) && M2.push(g2[I2]);
      M2.length ? this._events[h2] = 1 === M2.length ? M2[0] : M2 : clearEvent(this, h2);
    }
    return this;
  }, EventEmitter.prototype.removeAllListeners = function removeAllListeners(t3) {
    var o3;
    return t3 ? (o3 = a2 ? a2 + t3 : t3, this._events[o3] && clearEvent(this, o3)) : (this._events = new Events(), this._eventsCount = 0), this;
  }, EventEmitter.prototype.off = EventEmitter.prototype.removeListener, EventEmitter.prototype.addListener = EventEmitter.prototype.on, EventEmitter.prefixed = a2, EventEmitter.EventEmitter = EventEmitter, t2.exports = EventEmitter;
});
var fe = createCommonjsModule(function(t2, o2) {
  t2.exports = function() {
    function _regeneratorRuntime() {
      _regeneratorRuntime = function() {
        return t4;
      };
      var t4 = {}, o4 = Object.prototype, a3 = o4.hasOwnProperty, m3 = "function" == typeof Symbol ? Symbol : {}, u3 = m3.iterator || "@@iterator", h2 = m3.asyncIterator || "@@asyncIterator", g2 = m3.toStringTag || "@@toStringTag";
      function define(t5, o5, a4) {
        return Object.defineProperty(t5, o5, { value: a4, enumerable: true, configurable: true, writable: true }), t5[o5];
      }
      try {
        define({}, "");
      } catch (t5) {
        define = function(t6, o5, a4) {
          return t6[o5] = a4;
        };
      }
      function wrap(t5, o5, a4, m4) {
        var u4 = o5 && o5.prototype instanceof Generator ? o5 : Generator, h3 = Object.create(u4.prototype), g3 = new Context(m4 || []);
        return h3._invoke = /* @__PURE__ */ function(t6, o6, a5) {
          var m5 = "suspendedStart";
          return function(u5, h4) {
            if ("executing" === m5)
              throw new Error("Generator is already running");
            if ("completed" === m5) {
              if ("throw" === u5)
                throw h4;
              return doneResult();
            }
            for (a5.method = u5, a5.arg = h4; ; ) {
              var g4 = a5.delegate;
              if (g4) {
                var M3 = maybeInvokeDelegate(g4, a5);
                if (M3) {
                  if (M3 === I2)
                    continue;
                  return M3;
                }
              }
              if ("next" === a5.method)
                a5.sent = a5._sent = a5.arg;
              else if ("throw" === a5.method) {
                if ("suspendedStart" === m5)
                  throw m5 = "completed", a5.arg;
                a5.dispatchException(a5.arg);
              } else
                "return" === a5.method && a5.abrupt("return", a5.arg);
              m5 = "executing";
              var _3 = tryCatch(t6, o6, a5);
              if ("normal" === _3.type) {
                if (m5 = a5.done ? "completed" : "suspendedYield", _3.arg === I2)
                  continue;
                return { value: _3.arg, done: a5.done };
              }
              "throw" === _3.type && (m5 = "completed", a5.method = "throw", a5.arg = _3.arg);
            }
          };
        }(t5, a4, g3), h3;
      }
      function tryCatch(t5, o5, a4) {
        try {
          return { type: "normal", arg: t5.call(o5, a4) };
        } catch (t6) {
          return { type: "throw", arg: t6 };
        }
      }
      t4.wrap = wrap;
      var I2 = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var M2 = {};
      define(M2, u3, function() {
        return this;
      });
      var _2 = Object.getPrototypeOf, E2 = _2 && _2(_2(values([])));
      E2 && E2 !== o4 && a3.call(E2, u3) && (M2 = E2);
      var S2 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(M2);
      function defineIteratorMethods(t5) {
        ["next", "throw", "return"].forEach(function(o5) {
          define(t5, o5, function(t6) {
            return this._invoke(o5, t6);
          });
        });
      }
      function AsyncIterator(t5, o5) {
        function invoke(m5, u4, h3, g3) {
          var I3 = tryCatch(t5[m5], t5, u4);
          if ("throw" !== I3.type) {
            var M3 = I3.arg, _3 = M3.value;
            return _3 && "object" == typeof _3 && a3.call(_3, "__await") ? o5.resolve(_3.__await).then(function(t6) {
              invoke("next", t6, h3, g3);
            }, function(t6) {
              invoke("throw", t6, h3, g3);
            }) : o5.resolve(_3).then(function(t6) {
              M3.value = t6, h3(M3);
            }, function(t6) {
              return invoke("throw", t6, h3, g3);
            });
          }
          g3(I3.arg);
        }
        var m4;
        this._invoke = function(t6, a4) {
          function callInvokeWithMethodAndArg() {
            return new o5(function(o6, m5) {
              invoke(t6, a4, o6, m5);
            });
          }
          return m4 = m4 ? m4.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        };
      }
      function maybeInvokeDelegate(t5, o5) {
        var a4 = t5.iterator[o5.method];
        if (void 0 === a4) {
          if (o5.delegate = null, "throw" === o5.method) {
            if (t5.iterator.return && (o5.method = "return", o5.arg = void 0, maybeInvokeDelegate(t5, o5), "throw" === o5.method))
              return I2;
            o5.method = "throw", o5.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return I2;
        }
        var m4 = tryCatch(a4, t5.iterator, o5.arg);
        if ("throw" === m4.type)
          return o5.method = "throw", o5.arg = m4.arg, o5.delegate = null, I2;
        var u4 = m4.arg;
        return u4 ? u4.done ? (o5[t5.resultName] = u4.value, o5.next = t5.nextLoc, "return" !== o5.method && (o5.method = "next", o5.arg = void 0), o5.delegate = null, I2) : u4 : (o5.method = "throw", o5.arg = new TypeError("iterator result is not an object"), o5.delegate = null, I2);
      }
      function pushTryEntry(t5) {
        var o5 = { tryLoc: t5[0] };
        1 in t5 && (o5.catchLoc = t5[1]), 2 in t5 && (o5.finallyLoc = t5[2], o5.afterLoc = t5[3]), this.tryEntries.push(o5);
      }
      function resetTryEntry(t5) {
        var o5 = t5.completion || {};
        o5.type = "normal", delete o5.arg, t5.completion = o5;
      }
      function Context(t5) {
        this.tryEntries = [{ tryLoc: "root" }], t5.forEach(pushTryEntry, this), this.reset(true);
      }
      function values(t5) {
        if (t5) {
          var o5 = t5[u3];
          if (o5)
            return o5.call(t5);
          if ("function" == typeof t5.next)
            return t5;
          if (!isNaN(t5.length)) {
            var m4 = -1, h3 = function next() {
              for (; ++m4 < t5.length; )
                if (a3.call(t5, m4))
                  return next.value = t5[m4], next.done = false, next;
              return next.value = void 0, next.done = true, next;
            };
            return h3.next = h3;
          }
        }
        return { next: doneResult };
      }
      function doneResult() {
        return { value: void 0, done: true };
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(S2, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, g2, "GeneratorFunction"), t4.isGeneratorFunction = function(t5) {
        var o5 = "function" == typeof t5 && t5.constructor;
        return !!o5 && (o5 === GeneratorFunction || "GeneratorFunction" === (o5.displayName || o5.name));
      }, t4.mark = function(t5) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t5, GeneratorFunctionPrototype) : (t5.__proto__ = GeneratorFunctionPrototype, define(t5, g2, "GeneratorFunction")), t5.prototype = Object.create(S2), t5;
      }, t4.awrap = function(t5) {
        return { __await: t5 };
      }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, h2, function() {
        return this;
      }), t4.AsyncIterator = AsyncIterator, t4.async = function(o5, a4, m4, u4, h3) {
        void 0 === h3 && (h3 = Promise);
        var g3 = new AsyncIterator(wrap(o5, a4, m4, u4), h3);
        return t4.isGeneratorFunction(a4) ? g3 : g3.next().then(function(t5) {
          return t5.done ? t5.value : g3.next();
        });
      }, defineIteratorMethods(S2), define(S2, g2, "Generator"), define(S2, u3, function() {
        return this;
      }), define(S2, "toString", function() {
        return "[object Generator]";
      }), t4.keys = function(t5) {
        var o5 = [];
        for (var a4 in t5)
          o5.push(a4);
        return o5.reverse(), function next() {
          for (; o5.length; ) {
            var a5 = o5.pop();
            if (a5 in t5)
              return next.value = a5, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, t4.values = values, Context.prototype = { constructor: Context, reset: function(t5) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !t5)
          for (var o5 in this)
            "t" === o5.charAt(0) && a3.call(this, o5) && !isNaN(+o5.slice(1)) && (this[o5] = void 0);
      }, stop: function() {
        this.done = true;
        var t5 = this.tryEntries[0].completion;
        if ("throw" === t5.type)
          throw t5.arg;
        return this.rval;
      }, dispatchException: function(t5) {
        if (this.done)
          throw t5;
        var o5 = this;
        function handle(a4, m5) {
          return h3.type = "throw", h3.arg = t5, o5.next = a4, m5 && (o5.method = "next", o5.arg = void 0), !!m5;
        }
        for (var m4 = this.tryEntries.length - 1; m4 >= 0; --m4) {
          var u4 = this.tryEntries[m4], h3 = u4.completion;
          if ("root" === u4.tryLoc)
            return handle("end");
          if (u4.tryLoc <= this.prev) {
            var g3 = a3.call(u4, "catchLoc"), I3 = a3.call(u4, "finallyLoc");
            if (g3 && I3) {
              if (this.prev < u4.catchLoc)
                return handle(u4.catchLoc, true);
              if (this.prev < u4.finallyLoc)
                return handle(u4.finallyLoc);
            } else if (g3) {
              if (this.prev < u4.catchLoc)
                return handle(u4.catchLoc, true);
            } else {
              if (!I3)
                throw new Error("try statement without catch or finally");
              if (this.prev < u4.finallyLoc)
                return handle(u4.finallyLoc);
            }
          }
        }
      }, abrupt: function(t5, o5) {
        for (var m4 = this.tryEntries.length - 1; m4 >= 0; --m4) {
          var u4 = this.tryEntries[m4];
          if (u4.tryLoc <= this.prev && a3.call(u4, "finallyLoc") && this.prev < u4.finallyLoc) {
            var h3 = u4;
            break;
          }
        }
        h3 && ("break" === t5 || "continue" === t5) && h3.tryLoc <= o5 && o5 <= h3.finallyLoc && (h3 = null);
        var g3 = h3 ? h3.completion : {};
        return g3.type = t5, g3.arg = o5, h3 ? (this.method = "next", this.next = h3.finallyLoc, I2) : this.complete(g3);
      }, complete: function(t5, o5) {
        if ("throw" === t5.type)
          throw t5.arg;
        return "break" === t5.type || "continue" === t5.type ? this.next = t5.arg : "return" === t5.type ? (this.rval = this.arg = t5.arg, this.method = "return", this.next = "end") : "normal" === t5.type && o5 && (this.next = o5), I2;
      }, finish: function(t5) {
        for (var o5 = this.tryEntries.length - 1; o5 >= 0; --o5) {
          var a4 = this.tryEntries[o5];
          if (a4.finallyLoc === t5)
            return this.complete(a4.completion, a4.afterLoc), resetTryEntry(a4), I2;
        }
      }, catch: function(t5) {
        for (var o5 = this.tryEntries.length - 1; o5 >= 0; --o5) {
          var a4 = this.tryEntries[o5];
          if (a4.tryLoc === t5) {
            var m4 = a4.completion;
            if ("throw" === m4.type) {
              var u4 = m4.arg;
              resetTryEntry(a4);
            }
            return u4;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(t5, o5, a4) {
        return this.delegate = { iterator: values(t5), resultName: o5, nextLoc: a4 }, "next" === this.method && (this.arg = void 0), I2;
      } }, t4;
    }
    function _typeof(t4) {
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t5) {
        return typeof t5;
      } : function(t5) {
        return t5 && "function" == typeof Symbol && t5.constructor === Symbol && t5 !== Symbol.prototype ? "symbol" : typeof t5;
      }, _typeof(t4);
    }
    function _classCallCheck(t4, o4) {
      if (!(t4 instanceof o4))
        throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(t4, o4) {
      for (var a3 = 0; a3 < o4.length; a3++) {
        var m3 = o4[a3];
        m3.enumerable = m3.enumerable || false, m3.configurable = true, "value" in m3 && (m3.writable = true), Object.defineProperty(t4, m3.key, m3);
      }
    }
    function _createClass(t4, o4, a3) {
      return o4 && _defineProperties(t4.prototype, o4), a3 && _defineProperties(t4, a3), Object.defineProperty(t4, "prototype", { writable: false }), t4;
    }
    function __awaiter2(t4, o4, a3, m3) {
      function adopt(t5) {
        return t5 instanceof a3 ? t5 : new a3(function(o5) {
          o5(t5);
        });
      }
      return new (a3 || (a3 = Promise))(function(a4, u3) {
        function fulfilled(t5) {
          try {
            step(m3.next(t5));
          } catch (t6) {
            u3(t6);
          }
        }
        function rejected(t5) {
          try {
            step(m3.throw(t5));
          } catch (t6) {
            u3(t6);
          }
        }
        function step(t5) {
          t5.done ? a4(t5.value) : adopt(t5.value).then(fulfilled, rejected);
        }
        step((m3 = m3.apply(t4, o4 || [])).next());
      });
    }
    var t3 = { isDataReportEnable: true, maxSize: 100, msgListMaxSize: 1e3, cacheMaxSize: 1e3, maxDelay: 3e5, maxInterval: 3e4, minInterval: 1e4, timeout: 5e3, autoStart: true, loginFailIgnoreInterval: 72e5 }, o3 = 12, a2 = 8e3, m2 = function emptyFn() {
    }, u2 = function() {
      function Reporter(o4) {
        _classCallCheck(this, Reporter), this.isUploadEnable = true, this.serverAllowUpload = false, this.initConfigLoaded = false, this.loading = false, this.isDestroyed = false, this.reportConfig = t3, this.configPath = "dispatcher/req", this.dataReportPath = "statics/report/common/form", this.traceMsgCache = {}, this.reqRetryCount = 0, this.highPriorityMsgList = [], this.msgList = [], this.lowPriorityMsgList = [], this.cacheMsgList = [], this.lastReportTime = Date.now(), this.timer = null, this.endedAsyncMsgByModule = {}, this.lastFailLogin = {}, this.setConfig(o4), this.reportConfig.isDataReportEnable && this.reportConfig.autoStart && this.initUploadConfig();
      }
      return _createClass(Reporter, [{ key: "setConfig", value: function setConfig(t4) {
        var o4 = Object.assign({}, this.reportConfig.common, t4.common);
        this.reportConfig = Object.assign({}, this.reportConfig, t4), this.reportConfig.common = o4, this.reportConfig.common.sdk_type || (this.reportConfig.common.sdk_type = "im");
      } }, { key: "reportImmediately", value: function reportImmediately(t4, o4) {
        var a3 = this;
        this.reportConfig.isDataReportEnable && this.reportConfig.request(t4, Object.assign({ dataType: "json", method: "POST", timeout: this.reportConfig.timeout }, o4)).catch(function(t5) {
          var o5, m3;
          null === (m3 = null === (o5 = a3.reportConfig) || void 0 === o5 ? void 0 : o5.logger) || void 0 === m3 || m3.warn("Reporter immediately upload failed", t5);
        });
      } }, { key: "report", value: function report(o4, a3) {
        var m3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (m3.priority || (m3.priority = this.getEventPriority(o4, a3)), this.reportConfig.isDataReportEnable && o4) {
          if ("login" === o4 && false === a3.succeed && a3.process_id) {
            var u3 = a3.extension && a3.extension.find(function(t4) {
              return "TCP" === t4.operation_type;
            }), h2 = u3 && u3.target || "", g2 = a3.process_id + h2, I2 = this.lastFailLogin[g2] || 0;
            if (a3.start_time - I2 < t3.loginFailIgnoreInterval)
              return;
            this.lastFailLogin[g2] = a3.start_time;
          }
          var M2 = Date.now();
          "HIGH" === m3.priority ? this.highPriorityMsgList.push({ module: o4, msg: a3, createTime: M2 }) : "NORMAL" === m3.priority ? this.msgList.push({ module: o4, msg: a3, createTime: M2 }) : "LOW" === m3.priority && this.lowPriorityMsgList.push({ module: o4, msg: a3, createTime: M2 }), this.highPriorityMsgList.length > this.reportConfig.msgListMaxSize && this.highPriorityMsgList.shift(), this.msgList.length > this.reportConfig.msgListMaxSize && this.msgList.shift(), this.lowPriorityMsgList.length > this.reportConfig.msgListMaxSize && this.lowPriorityMsgList.shift(), this.doReport();
        }
      } }, { key: "reportTraceStart", value: function reportTraceStart(t4, o4) {
        if (this.reportConfig.isDataReportEnable && t4 && !this.traceMsgCache[t4]) {
          var a3 = Object.assign(Object.assign({ start_time: Date.now() }, o4), { extension: [] });
          this.traceMsgCache[t4] = a3;
        }
      } }, { key: "reportTraceUpdate", value: function reportTraceUpdate(t4) {
      } }, { key: "reportTraceUpdateV2", value: function reportTraceUpdateV2(t4, o4, a3) {
        var m3, u3 = this;
        if (this.reportConfig.isDataReportEnable && this.traceMsgCache[t4]) {
          var h2 = this.traceMsgCache[t4].extension, g2 = h2.length, I2 = (/* @__PURE__ */ new Date()).getTime();
          0 === g2 ? o4.duration = I2 - this.traceMsgCache[t4].start_time : h2[g2 - 1].end_time ? o4.duration = I2 - h2[g2 - 1].end_time : o4.duration = I2 - this.traceMsgCache[t4].start_time, h2.push(Object.assign({ end_time: I2 }, o4));
          var M2 = h2.length - 1;
          (null == a3 ? void 0 : a3.asyncParams) && ((m3 = this.traceMsgCache[t4]).asyncPromiseArray || (m3.asyncPromiseArray = []), this.traceMsgCache[t4].asyncPromiseArray.push(a3.asyncParams.then(function(o5) {
            u3.traceMsgCache[t4] && u3.traceMsgCache[t4].extension[M2] && Object.assign(u3.traceMsgCache[t4].extension[M2], o5);
          })));
        }
      } }, { key: "reportTraceEnd", value: function reportTraceEnd(t4) {
        var o4, a3 = this, m3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.reportConfig.isDataReportEnable && this.traceMsgCache[t4])
          if ("nos" !== t4 || false === m3) {
            "boolean" == typeof m3 ? this.traceMsgCache[t4].succeed = !!m3 : this.traceMsgCache[t4].state = m3, this.traceMsgCache[t4].duration = Date.now() - this.traceMsgCache[t4].start_time, this.traceMsgCache[t4].extension.forEach(function(t5) {
              delete t5.end_time;
            });
            var u3 = this.traceMsgCache[t4];
            if (this.traceMsgCache[t4] = null, u3.asyncPromiseArray) {
              (o4 = this.endedAsyncMsgByModule)[t4] || (o4[t4] = []), this.endedAsyncMsgByModule[t4].push(u3);
              var h2 = function asyncCallback() {
                a3.endedAsyncMsgByModule[t4] && a3.endedAsyncMsgByModule[t4].includes(u3) && (delete u3.asyncPromiseArray, a3.report(t4, u3, { priority: a3.getEventPriority(t4, u3) }));
              };
              Promise.all(u3.asyncPromiseArray).then(h2).catch(h2);
            } else
              this.report(t4, u3, { priority: this.getEventPriority(t4, u3) });
          } else
            this.traceMsgCache[t4] = null;
      } }, { key: "getEventPriority", value: function getEventPriority(t4, o4) {
        if ("exceptions" === t4) {
          if (0 === o4.action)
            return "HIGH";
          if (2 === o4.action)
            return "HIGH";
          if (1 === o4.action && 0 !== o4.exception_service)
            return "HIGH";
        } else {
          if ("msgReceive" === t4)
            return "LOW";
          if ("nim_api_trace" === t4)
            return "LOW";
        }
        return "NORMAL";
      } }, { key: "reportTraceCancel", value: function reportTraceCancel(t4) {
        this.reportConfig.isDataReportEnable && (this.endedAsyncMsgByModule[t4] = [], this.traceMsgCache[t4] = null);
      } }, { key: "pause", value: function pause() {
        this.reportConfig.isDataReportEnable && (this.isUploadEnable = false);
      } }, { key: "restore", value: function restore() {
        this.reportConfig.isDataReportEnable && (this.isUploadEnable = true, this.initConfigLoaded || this.initUploadConfig());
      } }, { key: "destroy", value: function destroy() {
        var t4 = this;
        this.reportConfig.isDataReportEnable && (Object.keys(this.traceMsgCache).forEach(function(o4) {
          t4.reportTraceEnd(o4, 1);
        }), null !== this.timer && clearTimeout(this.timer), this.setConfig = m2, this.report = m2, this.reportTraceStart = m2, this.reportTraceUpdate = m2, this.reportTraceEnd = m2, this.pause = m2, this.restore = m2, this.destroy = m2, this.reqRetryCount = 0, this.cacheMsgList = [], this.traceMsgCache = {}, this.lowPriorityMsgList = [], this.msgList = [], this.highPriorityMsgList = [], this.reportConfig = {}, this.isDestroyed = true);
      } }, { key: "initUploadConfig", value: function initUploadConfig() {
        var t4, m3;
        return __awaiter2(this, void 0, void 0, _regeneratorRuntime().mark(function _callee() {
          var u3, h2, g2, I2, M2, _2 = this;
          return _regeneratorRuntime().wrap(function _callee$(E2) {
            for (; ; )
              switch (E2.prev = E2.next) {
                case 0:
                  if (!this.loading) {
                    E2.next = 2;
                    break;
                  }
                  return E2.abrupt("return");
                case 2:
                  this.loading = true, u3 = this.reportConfig.common || {}, h2 = this.reportConfig.compassDataEndpoint.split(",").map(function(t5) {
                    return "".concat(t5, "/").concat(_2.configPath);
                  }), g2 = _regeneratorRuntime().mark(function _loop(g3) {
                    return _regeneratorRuntime().wrap(function _loop$(I3) {
                      for (; ; )
                        switch (I3.prev = I3.next) {
                          case 0:
                            if (!_2.initConfigLoaded && !_2.isDestroyed) {
                              I3.next = 2;
                              break;
                            }
                            return I3.abrupt("return", "break");
                          case 2:
                            return I3.prev = 2, I3.next = 5, _2.reportConfig.request(h2[g3], { method: "GET", dataType: "json", params: { deviceId: u3.dev_id, sdkVer: u3.sdk_ver, platform: u3.platform, hostEnv: u3.host_env, appkey: u3.app_key }, timeout: _2.reportConfig.timeout }).then(function(t5) {
                              var o4, a3;
                              if (!_2.isDestroyed) {
                                if (200 === t5.status && t5.data && 200 === t5.data.code) {
                                  _2.initConfigLoaded = true;
                                  var m4 = t5.data.data || {};
                                  _2.reportConfig.maxSize = m4.maxSize > 1e3 ? 1e3 : m4.maxSize, _2.reportConfig.maxInterval = m4.maxInterval > 1e4 ? 1e4 : m4.maxInterval, _2.reportConfig.maxInterval = m4.maxInterval < 10 ? 10 : m4.maxInterval, _2.reportConfig.minInterval = m4.minInterval < 2 ? 2 : m4.minInterval, _2.reportConfig.maxDelay = m4.maxDelay || 300, _2.reportConfig.maxInterval = 1e3 * _2.reportConfig.maxInterval, _2.reportConfig.minInterval = 1e3 * _2.reportConfig.minInterval, _2.reportConfig.maxDelay = 1e3 * _2.reportConfig.maxDelay, m4.endpoint ? _2.dataReportEndpoint = m4.endpoint : _2.dataReportEndpoint = h2[g3], _2.serverAllowUpload = true, _2.loading = false, _2.reportHeartBeat();
                                } else
                                  200 === t5.status && (_2.initConfigLoaded = true);
                                null === (a3 = null === (o4 = _2.reportConfig) || void 0 === o4 ? void 0 : o4.logger) || void 0 === a3 || a3.log("Get reporter upload config success");
                              }
                            }).catch(function(t5) {
                              var m4, u4;
                              _2.isDestroyed || (_2.loading = false, null === (u4 = null === (m4 = _2.reportConfig) || void 0 === m4 ? void 0 : m4.logger) || void 0 === u4 || u4.error("Get reporter upload config failed", t5), _2.reqRetryCount < o3 && (_2.reqRetryCount++, setTimeout(function() {
                                _2.isDestroyed || _2.initUploadConfig();
                              }, a2)));
                            });
                          case 5:
                            I3.next = 14;
                            break;
                          case 7:
                            if (I3.prev = 7, I3.t0 = I3.catch(2), !_2.isDestroyed) {
                              I3.next = 11;
                              break;
                            }
                            return I3.abrupt("return", { v: void 0 });
                          case 11:
                            _2.loading = false, null === (m3 = null === (t4 = _2.reportConfig) || void 0 === t4 ? void 0 : t4.logger) || void 0 === m3 || m3.error("Exec reporter request failed", I3.t0), _2.reqRetryCount < o3 && (_2.reqRetryCount++, setTimeout(function() {
                              _2.isDestroyed || _2.initUploadConfig();
                            }, a2));
                          case 14:
                          case "end":
                            return I3.stop();
                        }
                    }, _loop, null, [[2, 7]]);
                  }), I2 = 0;
                case 7:
                  if (!(I2 < h2.length)) {
                    E2.next = 17;
                    break;
                  }
                  return E2.delegateYield(g2(I2), "t0", 9);
                case 9:
                  if ("break" !== (M2 = E2.t0)) {
                    E2.next = 12;
                    break;
                  }
                  return E2.abrupt("break", 17);
                case 12:
                  if ("object" !== _typeof(M2)) {
                    E2.next = 14;
                    break;
                  }
                  return E2.abrupt("return", M2.v);
                case 14:
                  I2++, E2.next = 7;
                  break;
                case 17:
                case "end":
                  return E2.stop();
              }
          }, _callee, this);
        }));
      } }, { key: "reportHeartBeat", value: function reportHeartBeat() {
        var t4 = this;
        this.isDestroyed || (this.timer = setTimeout(function() {
          t4.reportHeartBeat();
        }, this.reportConfig.minInterval), this.doReport());
      } }, { key: "doReport", value: function doReport() {
        if (!this.isDestroyed) {
          var t4 = this.highPriorityMsgList.length + this.msgList.length + this.lowPriorityMsgList.length + this.cacheMsgList.length > 2 * this.reportConfig.maxSize ? this.reportConfig.minInterval : this.reportConfig.maxInterval;
          Date.now() - this.lastReportTime >= t4 && this.upload();
        }
      } }, { key: "getUploadMsg", value: function getUploadMsg() {
        var t4 = this, o4 = {}, a3 = Date.now();
        this.highPriorityMsgList = this.highPriorityMsgList.filter(function(o5) {
          return a3 - o5.createTime < t4.reportConfig.maxDelay;
        }), this.msgList = this.msgList.filter(function(o5) {
          return a3 - o5.createTime < t4.reportConfig.maxDelay;
        }), this.lowPriorityMsgList = this.lowPriorityMsgList.filter(function(o5) {
          return a3 - o5.createTime < t4.reportConfig.maxDelay;
        }), this.cacheMsgList = this.cacheMsgList.filter(function(o5) {
          return a3 - o5.createTime < t4.reportConfig.maxDelay;
        });
        var m3 = this.highPriorityMsgList.slice(0, this.reportConfig.maxSize);
        if (this.highPriorityMsgList = this.highPriorityMsgList.slice(m3.length), m3.length < this.reportConfig.maxSize) {
          var u3 = this.reportConfig.maxSize - m3.length;
          m3 = m3.concat(this.msgList.slice(0, u3)), this.msgList = this.msgList.slice(u3);
        }
        if (m3.length < this.reportConfig.maxSize) {
          var h2 = this.reportConfig.maxSize - m3.length;
          m3 = m3.concat(this.lowPriorityMsgList.slice(0, h2)), this.lowPriorityMsgList = this.lowPriorityMsgList.slice(h2);
        }
        if (m3.length < this.reportConfig.maxSize) {
          var g2 = this.reportConfig.maxSize - m3.length;
          m3 = m3.concat(this.cacheMsgList.slice(0, g2)), this.cacheMsgList = this.cacheMsgList.slice(g2);
        }
        return m3.forEach(function(t5) {
          o4[t5.module] ? o4[t5.module].push(t5.msg) : o4[t5.module] = [t5.msg];
        }), { uploadMsgArr: m3, uploadMsg: o4 };
      } }, { key: "upload", value: function upload() {
        var t4, o4, a3 = this;
        if (this.isUploadEnable && this.serverAllowUpload && !(this.lastReportTime && Date.now() - this.lastReportTime < this.reportConfig.minInterval)) {
          var m3 = this.getUploadMsg(), u3 = m3.uploadMsgArr, h2 = m3.uploadMsg;
          if (u3.length) {
            this.lastReportTime = Date.now();
            try {
              var g2 = "".concat(this.dataReportEndpoint, "/").concat(this.dataReportPath);
              this.reportConfig.request(g2, { dataType: "json", method: "POST", data: { common: this.reportConfig.common, event: h2 }, headers: { sdktype: "im" }, timeout: this.reportConfig.timeout }).catch(function(t5) {
                var o5, m4;
                a3.cacheMsgList = a3.cacheMsgList.concat(u3).slice(0, a3.reportConfig.cacheMaxSize), null === (m4 = null === (o5 = a3.reportConfig) || void 0 === o5 ? void 0 : o5.logger) || void 0 === m4 || m4.warn("Reporter upload failed", t5);
              });
            } catch (a4) {
              null === (o4 = null === (t4 = this.reportConfig) || void 0 === t4 ? void 0 : t4.logger) || void 0 === o4 || o4.warn("Exec reporter request failed", a4);
            }
            clearTimeout(this.timer), this.reportHeartBeat();
          }
        }
      } }]), Reporter;
    }();
    return u2;
  }();
});
!function(t2) {
  t2[t2.V2NIM_DATA_SYNC_TYPE_LEVEL_FULL = 0] = "V2NIM_DATA_SYNC_TYPE_LEVEL_FULL", t2[t2.V2NIM_DATA_SYNC_TYPE_LEVEL_BASIC = 1] = "V2NIM_DATA_SYNC_TYPE_LEVEL_BASIC";
}(o || (o = {})), function(t2) {
  t2[t2.V2NIM_DATA_SYNC_TYPE_MAIN = 1] = "V2NIM_DATA_SYNC_TYPE_MAIN", t2[t2.V2NIM_DATA_SYNC_TYPE_TEAM_MEMBER = 2] = "V2NIM_DATA_SYNC_TYPE_TEAM_MEMBER", t2[t2.V2NIM_DATA_SYNC_TYPE_SUPER_TEAM_MEMBER = 3] = "V2NIM_DATA_SYNC_TYPE_SUPER_TEAM_MEMBER";
}(a || (a = {})), function(t2) {
  t2[t2.V2NIM_DATA_SYNC_STATE_WAITING = 1] = "V2NIM_DATA_SYNC_STATE_WAITING", t2[t2.V2NIM_DATA_SYNC_STATE_SYNCING = 2] = "V2NIM_DATA_SYNC_STATE_SYNCING", t2[t2.V2NIM_DATA_SYNC_STATE_COMPLETED = 3] = "V2NIM_DATA_SYNC_STATE_COMPLETED";
}(m || (m = {})), function(t2) {
  t2[t2.V2NIM_CONVERSATION_TYPE_UNKNOWN = 0] = "V2NIM_CONVERSATION_TYPE_UNKNOWN", t2[t2.V2NIM_CONVERSATION_TYPE_P2P = 1] = "V2NIM_CONVERSATION_TYPE_P2P", t2[t2.V2NIM_CONVERSATION_TYPE_TEAM = 2] = "V2NIM_CONVERSATION_TYPE_TEAM", t2[t2.V2NIM_CONVERSATION_TYPE_SUPER_TEAM = 3] = "V2NIM_CONVERSATION_TYPE_SUPER_TEAM";
}(u || (u = {})), function(t2) {
  t2[t2.V2NIM_MESSAGE_STATUS_DEFAULT = 0] = "V2NIM_MESSAGE_STATUS_DEFAULT", t2[t2.V2NIM_MESSAGE_STATUS_REVOKE = 1] = "V2NIM_MESSAGE_STATUS_REVOKE", t2[t2.V2NIM_MESSAGE_STATUS_BACKFILL = 2] = "V2NIM_MESSAGE_STATUS_BACKFILL";
}(h || (h = {})), function(t2) {
  t2[t2.V2NIM_FRIEND_MODE_TYPE_ADD = 1] = "V2NIM_FRIEND_MODE_TYPE_ADD", t2[t2.V2NIM_FRIEND_MODE_TYPE_APPLY = 2] = "V2NIM_FRIEND_MODE_TYPE_APPLY";
}(g || (g = {})), function(t2) {
  t2[t2.V2NIM_FRIEND_ADD_APPLICATION_TYPE_RECEIVED = 1] = "V2NIM_FRIEND_ADD_APPLICATION_TYPE_RECEIVED", t2[t2.V2NIM_FRIEND_ADD_APPLICATION_TYPE_REJECTED = 2] = "V2NIM_FRIEND_ADD_APPLICATION_TYPE_REJECTED";
}(I || (I = {})), function(t2) {
  t2[t2.V2NIM_FRIEND_ADD_APPLICATION_STATUS_INIT = 0] = "V2NIM_FRIEND_ADD_APPLICATION_STATUS_INIT", t2[t2.V2NIM_FRIEND_ADD_APPLICATION_STATUS_AGREED = 1] = "V2NIM_FRIEND_ADD_APPLICATION_STATUS_AGREED", t2[t2.V2NIM_FRIEND_ADD_APPLICATION_STATUS_REJECTED = 2] = "V2NIM_FRIEND_ADD_APPLICATION_STATUS_REJECTED", t2[t2.V2NIM_FRIEND_ADD_APPLICATION_STATUS_EXPIRED = 3] = "V2NIM_FRIEND_ADD_APPLICATION_STATUS_EXPIRED", t2[t2.V2NIM_FRIEND_ADD_APPLICATION_STATUS_DIRECT_ADD = 4] = "V2NIM_FRIEND_ADD_APPLICATION_STATUS_DIRECT_ADD";
}(M || (M = {})), function(t2) {
  t2[t2.V2NIM_FRIEND_DELETION_TYPE_BY_SELF = 1] = "V2NIM_FRIEND_DELETION_TYPE_BY_SELF", t2[t2.V2NIM_FRIEND_DELETION_TYPE_BY_PEER = 2] = "V2NIM_FRIEND_DELETION_TYPE_BY_PEER";
}(_ || (_ = {})), function(t2) {
  t2[t2.V2NIM_FRIEND_VERIFY_TYPE_ADD = 1] = "V2NIM_FRIEND_VERIFY_TYPE_ADD", t2[t2.V2NIM_FRIEND_VERIFY_TYPE_APPLY = 2] = "V2NIM_FRIEND_VERIFY_TYPE_APPLY", t2[t2.V2NIM_FRIEND_VERIFY_TYPE_ACCEPT = 3] = "V2NIM_FRIEND_VERIFY_TYPE_ACCEPT", t2[t2.V2NIM_FRIEND_VERIFY_TYPE_REJECT = 4] = "V2NIM_FRIEND_VERIFY_TYPE_REJECT";
}(E || (E = {})), function(t2) {
  t2[t2.V2NIM_LOGIN_AUTH_TYPE_DEFAULT = 0] = "V2NIM_LOGIN_AUTH_TYPE_DEFAULT", t2[t2.V2NIM_LOGIN_AUTH_TYPE_DYNAMIC_TOKEN = 1] = "V2NIM_LOGIN_AUTH_TYPE_DYNAMIC_TOKEN", t2[t2.V2NIM_LOGIN_AUTH_TYPE_THIRD_PARTY = 2] = "V2NIM_LOGIN_AUTH_TYPE_THIRD_PARTY";
}(S || (S = {})), function(t2) {
  t2[t2.V2NIM_LOGIN_STATUS_LOGOUT = 0] = "V2NIM_LOGIN_STATUS_LOGOUT", t2[t2.V2NIM_LOGIN_STATUS_LOGINED = 1] = "V2NIM_LOGIN_STATUS_LOGINED", t2[t2.V2NIM_LOGIN_STATUS_LOGINING = 2] = "V2NIM_LOGIN_STATUS_LOGINING", t2[t2.V2NIM_LOGIN_STATUS_UNLOGIN = 3] = "V2NIM_LOGIN_STATUS_UNLOGIN";
}(T || (T = {})), function(t2) {
  t2[t2.V2NIM_LOGIN_CLIENT_TYPE_UNKNOWN = 0] = "V2NIM_LOGIN_CLIENT_TYPE_UNKNOWN", t2[t2.V2NIM_LOGIN_CLIENT_TYPE_ANDROID = 1] = "V2NIM_LOGIN_CLIENT_TYPE_ANDROID", t2[t2.V2NIM_LOGIN_CLIENT_TYPE_IOS = 2] = "V2NIM_LOGIN_CLIENT_TYPE_IOS", t2[t2.V2NIM_LOGIN_CLIENT_TYPE_PC = 4] = "V2NIM_LOGIN_CLIENT_TYPE_PC", t2[t2.V2NIM_LOGIN_CLIENT_TYPE_WP = 8] = "V2NIM_LOGIN_CLIENT_TYPE_WP", t2[t2.V2NIM_LOGIN_CLIENT_TYPE_WEB = 16] = "V2NIM_LOGIN_CLIENT_TYPE_WEB", t2[t2.V2NIM_LOGIN_CLIENT_TYPE_RESTFUL = 32] = "V2NIM_LOGIN_CLIENT_TYPE_RESTFUL", t2[t2.V2NIM_LOGIN_CLIENT_TYPE_MAC_OS = 64] = "V2NIM_LOGIN_CLIENT_TYPE_MAC_OS", t2[t2.V2NIM_LOGIN_CLIENT_TYPE_HARMONY_OS = 65] = "V2NIM_LOGIN_CLIENT_TYPE_HARMONY_OS";
}(C || (C = {})), function(t2) {
  t2[t2.V2NIM_KICKED_OFFLINE_REASON_CLIENT_EXCLUSIVE = 1] = "V2NIM_KICKED_OFFLINE_REASON_CLIENT_EXCLUSIVE", t2[t2.V2NIM_KICKED_OFFLINE_REASON_SERVER = 2] = "V2NIM_KICKED_OFFLINE_REASON_SERVER", t2[t2.V2NIM_KICKED_OFFLINE_REASON_CLIENT = 3] = "V2NIM_KICKED_OFFLINE_REASON_CLIENT", t2[t2.V2NIM_KICKED_OFFLINE_REASON_CLIENT_QUIETLY = 4] = "V2NIM_KICKED_OFFLINE_REASON_CLIENT_QUIETLY";
}(N || (N = {})), function(t2) {
  t2[t2.V2NIM_LOGIN_CLIENT_CHANGE_LIST = 1] = "V2NIM_LOGIN_CLIENT_CHANGE_LIST", t2[t2.V2NIM_LOGIN_CLIENT_CHANGE_LOGIN = 2] = "V2NIM_LOGIN_CLIENT_CHANGE_LOGIN", t2[t2.V2NIM_LOGIN_CLIENT_CHANGE_LOGOUT = 3] = "V2NIM_LOGIN_CLIENT_CHANGE_LOGOUT";
}(A || (A = {})), function(t2) {
  t2[t2.V2NIM_CONNECT_STATUS_DISCONNECTED = 0] = "V2NIM_CONNECT_STATUS_DISCONNECTED", t2[t2.V2NIM_CONNECT_STATUS_CONNECTED = 1] = "V2NIM_CONNECT_STATUS_CONNECTED", t2[t2.V2NIM_CONNECT_STATUS_CONNECTING = 2] = "V2NIM_CONNECT_STATUS_CONNECTING", t2[t2.V2NIM_CONNECT_STATUS_WAITING = 3] = "V2NIM_CONNECT_STATUS_WAITING";
}(O || (O = {})), function(t2) {
  t2[t2.NIM_MESSAGE_AI_STREAM_STATUS_STREAMING = -1] = "NIM_MESSAGE_AI_STREAM_STATUS_STREAMING", t2[t2.NIM_MESSAGE_AI_STREAM_STATUS_NONE = 0] = "NIM_MESSAGE_AI_STREAM_STATUS_NONE", t2[t2.NIM_MESSAGE_AI_STREAM_STATUS_PLACEHOLDER = 1] = "NIM_MESSAGE_AI_STREAM_STATUS_PLACEHOLDER", t2[t2.NIM_MESSAGE_AI_STREAM_STATUS_CANCEL = 2] = "NIM_MESSAGE_AI_STREAM_STATUS_CANCEL", t2[t2.NIM_MESSAGE_AI_STREAM_STATUS_UPDATE = 3] = "NIM_MESSAGE_AI_STREAM_STATUS_UPDATE", t2[t2.NIM_MESSAGE_AI_STREAM_STATUS_COMPLETE = 4] = "NIM_MESSAGE_AI_STREAM_STATUS_COMPLETE", t2[t2.NIM_MESSAGE_AI_STREAM_STATUS_EXCEPTION = 5] = "NIM_MESSAGE_AI_STREAM_STATUS_EXCEPTION";
}(R || (R = {})), function(t2) {
  t2[t2.V2NIM_MESSAGE_AI_STREAM_STOP_OP_DEFAULT = 0] = "V2NIM_MESSAGE_AI_STREAM_STOP_OP_DEFAULT", t2[t2.V2NIM_MESSAGE_AI_STREAM_STOP_OP_REVOKE = 1] = "V2NIM_MESSAGE_AI_STREAM_STOP_OP_REVOKE", t2[t2.V2NIM_MESSAGE_AI_STREAM_STOP_OP_UPDATE = 2] = "V2NIM_MESSAGE_AI_STREAM_STOP_OP_UPDATE";
}(b || (b = {})), function(t2) {
  t2[t2.V2NIM_MESSAGE_AI_REGEN_OP_UPDATE = 1] = "V2NIM_MESSAGE_AI_REGEN_OP_UPDATE", t2[t2.V2NIM_MESSAGE_AI_REGEN_OP_NEW = 2] = "V2NIM_MESSAGE_AI_REGEN_OP_NEW";
}(V || (V = {})), function(t2) {
  t2[t2.V2NIM_MESSAGE_AI_STATUS_UNKNOW = 0] = "V2NIM_MESSAGE_AI_STATUS_UNKNOW", t2[t2.V2NIM_MESSAGE_AI_STATUS_AT = 1] = "V2NIM_MESSAGE_AI_STATUS_AT", t2[t2.V2NIM_MESSAGE_AI_STATUS_RESPONSE = 2] = "V2NIM_MESSAGE_AI_STATUS_RESPONSE";
}(k || (k = {})), function(t2) {
  t2[t2.V2NIM_MESSAGE_TYPE_INVALID = -1] = "V2NIM_MESSAGE_TYPE_INVALID", t2[t2.V2NIM_MESSAGE_TYPE_TEXT = 0] = "V2NIM_MESSAGE_TYPE_TEXT", t2[t2.V2NIM_MESSAGE_TYPE_IMAGE = 1] = "V2NIM_MESSAGE_TYPE_IMAGE", t2[t2.V2NIM_MESSAGE_TYPE_AUDIO = 2] = "V2NIM_MESSAGE_TYPE_AUDIO", t2[t2.V2NIM_MESSAGE_TYPE_VIDEO = 3] = "V2NIM_MESSAGE_TYPE_VIDEO", t2[t2.V2NIM_MESSAGE_TYPE_LOCATION = 4] = "V2NIM_MESSAGE_TYPE_LOCATION", t2[t2.V2NIM_MESSAGE_TYPE_NOTIFICATION = 5] = "V2NIM_MESSAGE_TYPE_NOTIFICATION", t2[t2.V2NIM_MESSAGE_TYPE_FILE = 6] = "V2NIM_MESSAGE_TYPE_FILE", t2[t2.V2NIM_MESSAGE_TYPE_AVCHAT = 7] = "V2NIM_MESSAGE_TYPE_AVCHAT", t2[t2.V2NIM_MESSAGE_TYPE_TIPS = 10] = "V2NIM_MESSAGE_TYPE_TIPS", t2[t2.V2NIM_MESSAGE_TYPE_ROBOT = 11] = "V2NIM_MESSAGE_TYPE_ROBOT", t2[t2.V2NIM_MESSAGE_TYPE_CALL = 12] = "V2NIM_MESSAGE_TYPE_CALL", t2[t2.V2NIM_MESSAGE_TYPE_CUSTOM = 100] = "V2NIM_MESSAGE_TYPE_CUSTOM";
}(P || (P = {})), function(t2) {
  t2[t2.V2NIM_SEARCH_KEYWORD_MATCH_TYPE_OR = 0] = "V2NIM_SEARCH_KEYWORD_MATCH_TYPE_OR", t2[t2.V2NIM_SEARCH_KEYWORD_MATCH_TYPE_AND = 1] = "V2NIM_SEARCH_KEYWORD_MATCH_TYPE_AND";
}(L || (L = {})), function(t2) {
  t2[t2.V2NIM_SEARCH_DIRECTION_BACKWARD = 0] = "V2NIM_SEARCH_DIRECTION_BACKWARD", t2[t2.V2NIM_SEARCH_DIRECTION_FORWARD = 1] = "V2NIM_SEARCH_DIRECTION_FORWARD";
}(w || (w = {})), function(t2) {
  t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_UNDEFINED = -1] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_UNDEFINED", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_INVITE = 0] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_INVITE", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_KICK = 1] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_KICK", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_LEAVE = 2] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_LEAVE", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_UPDATE_TINFO = 3] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_UPDATE_TINFO", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_DISMISS = 4] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_DISMISS", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_APPLY_PASS = 5] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_APPLY_PASS", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_OWNER_TRANSFER = 6] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_OWNER_TRANSFER", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_ADD_MANAGER = 7] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_ADD_MANAGER", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_REMOVE_MANAGER = 8] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_REMOVE_MANAGER", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_INVITE_ACCEPT = 9] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_INVITE_ACCEPT", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_BANNED_TEAM_MEMBER = 10] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_TEAM_BANNED_TEAM_MEMBER", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_INVITE = 401] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_INVITE", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_KICK = 402] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_KICK", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_LEAVE = 403] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_LEAVE", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_UPDATE_TINFO = 404] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_UPDATE_TINFO", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_DISMISS = 405] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_DISMISS", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_APPLY_PASS = 410] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_APPLY_PASS", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_OWNER_TRANSFER = 406] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_OWNER_TRANSFER", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_ADD_MANAGER = 407] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_ADD_MANAGER", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_REMOVE_MANAGER = 408] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_REMOVE_MANAGER", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_INVITE_ACCEPT = 411] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_INVITE_ACCEPT", t2[t2.V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_BANNED_TEAM_MEMBER = 409] = "V2NIM_MESSAGE_NOTIFICATION_TYPE_SUPER_TEAM_BANNED_TEAM_MEMBER";
}(D || (D = {})), function(t2) {
  t2[t2.V2NIM_MESSAGE_ATTACHMENT_UPLOAD_STATE_UNKNOWN = 0] = "V2NIM_MESSAGE_ATTACHMENT_UPLOAD_STATE_UNKNOWN", t2[t2.V2NIM_MESSAGE_ATTACHMENT_UPLOAD_STATE_SUCCESS = 1] = "V2NIM_MESSAGE_ATTACHMENT_UPLOAD_STATE_SUCCESS", t2[t2.V2NIM_MESSAGE_ATTACHMENT_UPLOAD_STATE_FAILED = 2] = "V2NIM_MESSAGE_ATTACHMENT_UPLOAD_STATE_FAILED", t2[t2.V2NIM_MESSAGE_ATTACHMENT_UPLOAD_STATE_UPLOADING = 3] = "V2NIM_MESSAGE_ATTACHMENT_UPLOAD_STATE_UPLOADING";
}(U || (U = {})), function(t2) {
  t2[t2.V2NIM_MESSAGE_SENDING_STATE_UNKNOWN = 0] = "V2NIM_MESSAGE_SENDING_STATE_UNKNOWN", t2[t2.V2NIM_MESSAGE_SENDING_STATE_SUCCEEDED = 1] = "V2NIM_MESSAGE_SENDING_STATE_SUCCEEDED", t2[t2.V2NIM_MESSAGE_SENDING_STATE_FAILED = 2] = "V2NIM_MESSAGE_SENDING_STATE_FAILED", t2[t2.V2NIM_MESSAGE_SENDING_STATE_SENDING = 3] = "V2NIM_MESSAGE_SENDING_STATE_SENDING";
}(x || (x = {})), function(t2) {
  t2[t2.V2NIM_QUERY_DIRECTION_DESC = 0] = "V2NIM_QUERY_DIRECTION_DESC", t2[t2.V2NIM_QUERY_DIRECTION_ASC = 1] = "V2NIM_QUERY_DIRECTION_ASC";
}(B || (B = {})), function(t2) {
  t2[t2.V2NIM_CLEAR_HISTORY_MODE_ALL = 0] = "V2NIM_CLEAR_HISTORY_MODE_ALL", t2[t2.V2NIM_CLEAR_HISTORY_MODE_LOCAL = 1] = "V2NIM_CLEAR_HISTORY_MODE_LOCAL", t2[t2.V2NIM_CLEAR_HISTORY_MODE_LOCAL_IRREPARABLY = 2] = "V2NIM_CLEAR_HISTORY_MODE_LOCAL_IRREPARABLY";
}($ || ($ = {})), function(t2) {
  t2[t2.V2NIM_MESSAGE_REVOKE_TYPE_UNDEFINED = 0] = "V2NIM_MESSAGE_REVOKE_TYPE_UNDEFINED", t2[t2.V2NIM_MESSAGE_REVOKE_TYPE_P2P_BOTHWAY = 1] = "V2NIM_MESSAGE_REVOKE_TYPE_P2P_BOTHWAY", t2[t2.V2NIM_MESSAGE_REVOKE_TYPE_TEAM_BOTHWAY = 2] = "V2NIM_MESSAGE_REVOKE_TYPE_TEAM_BOTHWAY", t2[t2.V2NIM_MESSAGE_REVOKE_TYPE_SUPERTEAM_BOTHWAY = 3] = "V2NIM_MESSAGE_REVOKE_TYPE_SUPERTEAM_BOTHWAY", t2[t2.V2NIM_MESSAGE_REVOKE_TYPE_P2P_ONEWAY = 4] = "V2NIM_MESSAGE_REVOKE_TYPE_P2P_ONEWAY", t2[t2.V2NIM_MESSAGE_REVOKE_TYPE_TEAM_ONEWAY = 5] = "V2NIM_MESSAGE_REVOKE_TYPE_TEAM_ONEWAY";
}(j || (j = {})), function(t2) {
  t2[t2.V2NIM_MESSAGE_PIN_STATE_NOT_PINNED = 0] = "V2NIM_MESSAGE_PIN_STATE_NOT_PINNED", t2[t2.V2NIM_MESSAGE_PIN_STATE_PINNED = 1] = "V2NIM_MESSAGE_PIN_STATE_PINNED", t2[t2.V2NIM_MESSAGE_PIN_STATE_UPDATED = 2] = "V2NIM_MESSAGE_PIN_STATE_UPDATED";
}(G || (G = {})), function(t2) {
  t2[t2.V2NIM_QUICK_COMMENT_STATE_ADD = 1] = "V2NIM_QUICK_COMMENT_STATE_ADD", t2[t2.V2NIM_QUICK_COMMENT_STATE_REMOVE = 2] = "V2NIM_QUICK_COMMENT_STATE_REMOVE";
}(q || (q = {})), function(t2) {
  t2[t2.V2NIM_CLIENT_ANTISPAM_OPERATE_NONE = 0] = "V2NIM_CLIENT_ANTISPAM_OPERATE_NONE", t2[t2.V2NIM_CLIENT_ANTISPAM_OPERATE_REPLACE = 1] = "V2NIM_CLIENT_ANTISPAM_OPERATE_REPLACE", t2[t2.V2NIM_CLIENT_ANTISPAM_OPERATE_CLIENT_SHIELD = 2] = "V2NIM_CLIENT_ANTISPAM_OPERATE_CLIENT_SHIELD", t2[t2.V2NIM_CLIENT_ANTISPAM_OPERATE_SERVER_SHIELD = 3] = "V2NIM_CLIENT_ANTISPAM_OPERATE_SERVER_SHIELD";
}(H || (H = {})), function(t2) {
  t2[t2.V2NIM_SORT_ORDER_DESC = 0] = "V2NIM_SORT_ORDER_DESC", t2[t2.V2NIM_SORT_ORDER_ASC = 1] = "V2NIM_SORT_ORDER_ASC";
}(z || (z = {})), function(t2) {
  t2[t2.P2P_DELETE_MSG = 7] = "P2P_DELETE_MSG", t2[t2.TEAM_DELETE_MSG = 8] = "TEAM_DELETE_MSG", t2[t2.SUPERTEAM_DELETE_MSG = 12] = "SUPERTEAM_DELETE_MSG", t2[t2.P2P_ONE_WAY_DELETE_MSG = 13] = "P2P_ONE_WAY_DELETE_MSG", t2[t2.TEAM_ONE_WAY_DELETE_MSG = 14] = "TEAM_ONE_WAY_DELETE_MSG", t2[t2.CUSTOM_P2P_MSG = 100] = "CUSTOM_P2P_MSG", t2[t2.CUSTOM_TEAM_MSG = 101] = "CUSTOM_TEAM_MSG", t2[t2.CUSTOM_SUPERTEAM_MSG = 103] = "CUSTOM_SUPERTEAM_MSG";
}(Y || (Y = {})), function(t2) {
  t2[t2.NIM_MESSAGE_STREAM_STATUS_STREAMING = -1] = "NIM_MESSAGE_STREAM_STATUS_STREAMING", t2[t2.NIM_MESSAGE_STREAM_STATUS_NONE = 0] = "NIM_MESSAGE_STREAM_STATUS_NONE", t2[t2.NIM_MESSAGE_STREAM_STATUS_PLACEHOLDER = 1] = "NIM_MESSAGE_STREAM_STATUS_PLACEHOLDER", t2[t2.NIM_MESSAGE_STREAM_STATUS_CANCEL = 2] = "NIM_MESSAGE_STREAM_STATUS_CANCEL", t2[t2.NIM_MESSAGE_AI_STREAM_STATUS_UPDATE = 3] = "NIM_MESSAGE_AI_STREAM_STATUS_UPDATE", t2[t2.NIM_MESSAGE_STREAM_STATUS_COMPLETE = 4] = "NIM_MESSAGE_STREAM_STATUS_COMPLETE", t2[t2.NIM_MESSAGE_STREAM_STATUS_EXCEPTION = 5] = "NIM_MESSAGE_STREAM_STATUS_EXCEPTION";
}(K || (K = {})), function(t2) {
  t2[t2.V2NIM_MESSAGE_SOURCE_UNKNOWN = 0] = "V2NIM_MESSAGE_SOURCE_UNKNOWN", t2[t2.V2NIM_MESSAGE_SOURCE_ONLINE = 1] = "V2NIM_MESSAGE_SOURCE_ONLINE", t2[t2.V2NIM_MESSAGE_SOURCE_OFFLINE = 2] = "V2NIM_MESSAGE_SOURCE_OFFLINE", t2[t2.V2NIM_MESSAGE_SOURCE_ROAMING = 3] = "V2NIM_MESSAGE_SOURCE_ROAMING";
}(W || (W = {})), function(t2) {
  t2[t2.V2NIM_TEAM_MESSAGE_MUTE_MODE_OFF = 0] = "V2NIM_TEAM_MESSAGE_MUTE_MODE_OFF", t2[t2.V2NIM_TEAM_MESSAGE_MUTE_MODE_ON = 1] = "V2NIM_TEAM_MESSAGE_MUTE_MODE_ON", t2[t2.V2NIM_TEAM_MESSAGE_MUTE_MODE_NORMAL_ON = 2] = "V2NIM_TEAM_MESSAGE_MUTE_MODE_NORMAL_ON";
}(J || (J = {})), function(t2) {
  t2[t2.V2NIM_P2P_MESSAGE_MUTE_MODE_OFF = 0] = "V2NIM_P2P_MESSAGE_MUTE_MODE_OFF", t2[t2.V2NIM_P2P_MESSAGE_MUTE_MODE_ON = 1] = "V2NIM_P2P_MESSAGE_MUTE_MODE_ON";
}(X || (X = {})), function(t2) {
  t2[t2.V2NIM_TEAM_MEMBER_ROLE_QUERY_TYPE_ALL = 0] = "V2NIM_TEAM_MEMBER_ROLE_QUERY_TYPE_ALL", t2[t2.V2NIM_TEAM_MEMBER_ROLE_QUERY_TYPE_NORMAL = 1] = "V2NIM_TEAM_MEMBER_ROLE_QUERY_TYPE_NORMAL", t2[t2.V2NIM_TEAM_MEMBER_ROLE_QUERY_TYPE_MANAGER = 2] = "V2NIM_TEAM_MEMBER_ROLE_QUERY_TYPE_MANAGER";
}(Q || (Q = {})), function(t2) {
  t2[t2.V2NIM_TEAM_TYPE_INVALID = 0] = "V2NIM_TEAM_TYPE_INVALID", t2[t2.V2NIM_TEAM_TYPE_ADVANCED = 1] = "V2NIM_TEAM_TYPE_ADVANCED", t2[t2.V2NIM_TEAM_TYPE_SUPER = 2] = "V2NIM_TEAM_TYPE_SUPER";
}(Z || (Z = {})), function(t2) {
  t2[t2.V2NIM_TEAM_JOIN_MODE_FREE = 0] = "V2NIM_TEAM_JOIN_MODE_FREE", t2[t2.V2NIM_TEAM_JOIN_MODE_APPLY = 1] = "V2NIM_TEAM_JOIN_MODE_APPLY", t2[t2.V2NIM_TEAM_JOIN_MODE_INVITE = 2] = "V2NIM_TEAM_JOIN_MODE_INVITE";
}(ee || (ee = {})), function(t2) {
  t2[t2.V2NIM_TEAM_AGREE_MODE_AUTH = 0] = "V2NIM_TEAM_AGREE_MODE_AUTH", t2[t2.V2NIM_TEAM_AGREE_MODE_NO_AUTH = 1] = "V2NIM_TEAM_AGREE_MODE_NO_AUTH";
}(te || (te = {})), function(t2) {
  t2[t2.V2NIM_TEAM_INVITE_MODE_MANAGER = 0] = "V2NIM_TEAM_INVITE_MODE_MANAGER", t2[t2.V2NIM_TEAM_INVITE_MODE_ALL = 1] = "V2NIM_TEAM_INVITE_MODE_ALL";
}(re || (re = {})), function(t2) {
  t2[t2.V2NIM_TEAM_UPDATE_INFO_MODE_MANAGER = 0] = "V2NIM_TEAM_UPDATE_INFO_MODE_MANAGER", t2[t2.V2NIM_TEAM_UPDATE_INFO_MODE_ALL = 1] = "V2NIM_TEAM_UPDATE_INFO_MODE_ALL";
}(ie || (ie = {})), function(t2) {
  t2[t2.V2NIM_TEAM_CHAT_BANNED_MODE_UNBAN = 0] = "V2NIM_TEAM_CHAT_BANNED_MODE_UNBAN", t2[t2.V2NIM_TEAM_CHAT_BANNED_MODE_BANNED_NORMAL = 1] = "V2NIM_TEAM_CHAT_BANNED_MODE_BANNED_NORMAL", t2[t2.V2NIM_TEAM_CHAT_BANNED_MODE_BANNED_ALL = 3] = "V2NIM_TEAM_CHAT_BANNED_MODE_BANNED_ALL";
}(oe || (oe = {})), function(t2) {
  t2[t2.V2NIM_TEAM_UPDATE_EXTENSION_MODE_MANAGER = 0] = "V2NIM_TEAM_UPDATE_EXTENSION_MODE_MANAGER", t2[t2.V2NIM_TEAM_UPDATE_EXTENSION_MODE_ALL = 1] = "V2NIM_TEAM_UPDATE_EXTENSION_MODE_ALL";
}(se || (se = {})), function(t2) {
  t2[t2.V2NIM_TEAM_MEMBER_ROLE_NORMAL = 0] = "V2NIM_TEAM_MEMBER_ROLE_NORMAL", t2[t2.V2NIM_TEAM_MEMBER_ROLE_OWNER = 1] = "V2NIM_TEAM_MEMBER_ROLE_OWNER", t2[t2.V2NIM_TEAM_MEMBER_ROLE_MANAGER = 2] = "V2NIM_TEAM_MEMBER_ROLE_MANAGER";
}(ne || (ne = {})), function(t2) {
  t2[t2.V2NIM_TEAM_JOIN_ACTION_TYPE_APPLICATION = 0] = "V2NIM_TEAM_JOIN_ACTION_TYPE_APPLICATION", t2[t2.V2NIM_TEAM_JOIN_ACTION_TYPE_REJECT_APPLICATION = 1] = "V2NIM_TEAM_JOIN_ACTION_TYPE_REJECT_APPLICATION", t2[t2.V2NIM_TEAM_JOIN_ACTION_TYPE_INVITATION = 2] = "V2NIM_TEAM_JOIN_ACTION_TYPE_INVITATION", t2[t2.V2NIM_TEAM_JOIN_ACTION_TYPE_REJECT_INVITATION = 3] = "V2NIM_TEAM_JOIN_ACTION_TYPE_REJECT_INVITATION";
}(ae || (ae = {})), function(t2) {
  t2[t2.V2NIM_TEAM_JOIN_ACTION_STATUS_INIT = 0] = "V2NIM_TEAM_JOIN_ACTION_STATUS_INIT", t2[t2.V2NIM_TEAM_JOIN_ACTION_STATUS_AGREED = 1] = "V2NIM_TEAM_JOIN_ACTION_STATUS_AGREED", t2[t2.V2NIM_TEAM_JOIN_ACTION_STATUS_REJECTED = 2] = "V2NIM_TEAM_JOIN_ACTION_STATUS_REJECTED", t2[t2.V2NIM_TEAM_JOIN_ACTION_STATUS_EXPIRED = 3] = "V2NIM_TEAM_JOIN_ACTION_STATUS_EXPIRED";
}(ce || (ce = {})), function(t2) {
  t2[t2.teamApply = 0] = "teamApply", t2[t2.teamApplyReject = 1] = "teamApplyReject", t2[t2.teamInvite = 2] = "teamInvite", t2[t2.teamInviteReject = 3] = "teamInviteReject", t2[t2.tlistUpdate = 4] = "tlistUpdate", t2[t2.superTeamApply = 15] = "superTeamApply", t2[t2.superTeamApplyReject = 16] = "superTeamApplyReject", t2[t2.superTeamInvite = 17] = "superTeamInvite", t2[t2.superTeamInviteReject = 18] = "superTeamInviteReject";
}(de || (de = {})), function(t2) {
  t2[t2.V2NIM_AI_MODEL_TYPE_UNKNOW = 0] = "V2NIM_AI_MODEL_TYPE_UNKNOW", t2[t2.V2NIM_AI_MODEL_TYPE_QWEN = 1] = "V2NIM_AI_MODEL_TYPE_QWEN", t2[t2.V2NIM_AI_MODEL_TYPE_AZURE = 2] = "V2NIM_AI_MODEL_TYPE_AZURE", t2[t2.V2NIM_AI_MODEL_TYPE_PRIVATE = 3] = "V2NIM_AI_MODEL_TYPE_PRIVATE";
}(le || (le = {})), function(t2) {
  t2[t2.V2NIM_AI_MODEL_STREAM_CALL_STATUS_NONE = 0] = "V2NIM_AI_MODEL_STREAM_CALL_STATUS_NONE", t2[t2.V2NIM_AI_MODEL_STREAM_CALL_STATUS_CANCEL = 2] = "V2NIM_AI_MODEL_STREAM_CALL_STATUS_CANCEL", t2[t2.V2NIM_AI_MODEL_STREAM_CALL_STATUS_COMPLETE = 4] = "V2NIM_AI_MODEL_STREAM_CALL_STATUS_COMPLETE", t2[t2.V2NIM_AI_MODEL_STREAM_CALL_STATUS_EXCEPTION = 5] = "V2NIM_AI_MODEL_STREAM_CALL_STATUS_EXCEPTION";
}(pe || (pe = {})), function(t2) {
  t2.V2NIM_AI_MODEL_ROLE_TYPE_SYSTEM = "system", t2.V2NIM_AI_MODEL_ROLE_TYPE_USER = "user", t2.V2NIM_AI_MODEL_ROLE_TYPE_ASSISTANT = "assistant";
}(me || (me = {})), function(t2) {
  t2[t2.V2NIM_SIGNALLING_EVENT_TYPE_UNKNOWN = 0] = "V2NIM_SIGNALLING_EVENT_TYPE_UNKNOWN", t2[t2.V2NIM_SIGNALLING_EVENT_TYPE_CLOSE = 1] = "V2NIM_SIGNALLING_EVENT_TYPE_CLOSE", t2[t2.V2NIM_SIGNALLING_EVENT_TYPE_JOIN = 2] = "V2NIM_SIGNALLING_EVENT_TYPE_JOIN", t2[t2.V2NIM_SIGNALLING_EVENT_TYPE_INVITE = 3] = "V2NIM_SIGNALLING_EVENT_TYPE_INVITE", t2[t2.V2NIM_SIGNALLING_EVENT_TYPE_CANCEL_INVITE = 4] = "V2NIM_SIGNALLING_EVENT_TYPE_CANCEL_INVITE", t2[t2.V2NIM_SIGNALLING_EVENT_TYPE_REJECT = 5] = "V2NIM_SIGNALLING_EVENT_TYPE_REJECT", t2[t2.V2NIM_SIGNALLING_EVENT_TYPE_ACCEPT = 6] = "V2NIM_SIGNALLING_EVENT_TYPE_ACCEPT", t2[t2.V2NIM_SIGNALLING_EVENT_TYPE_LEAVE = 7] = "V2NIM_SIGNALLING_EVENT_TYPE_LEAVE", t2[t2.V2NIM_SIGNALLING_EVENT_TYPE_CONTROL = 8] = "V2NIM_SIGNALLING_EVENT_TYPE_CONTROL", t2[t2.V2NIM_SIGNALLING_EVENT_TYPE_KICK = 9] = "V2NIM_SIGNALLING_EVENT_TYPE_KICK";
}(ue || (ue = {})), function(t2) {
  t2[t2.V2NIM_SIGNALLING_CHANNEL_TYPE_AUDIO = 1] = "V2NIM_SIGNALLING_CHANNEL_TYPE_AUDIO", t2[t2.V2NIM_SIGNALLING_CHANNEL_TYPE_VIDEO = 2] = "V2NIM_SIGNALLING_CHANNEL_TYPE_VIDEO", t2[t2.V2NIM_SIGNALLING_CHANNEL_TYPE_CUSTOM = 3] = "V2NIM_SIGNALLING_CHANNEL_TYPE_CUSTOM";
}(he || (he = {})), function(t2) {
  t2[t2.V2NIM_USER_STATUS_TYPE_UNKNOWN = 0] = "V2NIM_USER_STATUS_TYPE_UNKNOWN", t2[t2.V2NIM_USER_STATUS_TYPE_LOGIN = 1] = "V2NIM_USER_STATUS_TYPE_LOGIN", t2[t2.V2NIM_USER_STATUS_TYPE_LOGOUT = 2] = "V2NIM_USER_STATUS_TYPE_LOGOUT", t2[t2.V2NIM_USER_STATUS_TYPE_DISCONNECT = 3] = "V2NIM_USER_STATUS_TYPE_DISCONNECT";
}(ge || (ge = {}));
var Ie = { V2NIM_ERROR_CODE_UNKNOWN: { code: 0, message: "unknown error" }, V2NIM_ERROR_CODE_SUCCESS: { code: 200, message: "success" }, V2NIM_ERROR_CODE_HANDSHAKE: { code: 201, message: "handshake error" }, V2NIM_ERROR_CODE_REQUEST_TEMPERARY_FORBIDDEN: { code: 398, message: "request temprary forbidden" }, V2NIM_ERROR_CODE_SERVER_UNIT_ERROR: { code: 399, message: "server unit error" }, V2NIM_ERROR_CODE_FORBIDDEN: { code: 403, message: "forbidden" }, V2NIM_ERROR_CODE_NOT_FOUND: { code: 404, message: "not found" }, V2NIM_ERROR_CODE_PARAMETER_ERROR: { code: 414, message: "parameter error" }, V2NIM_ERROR_CODE_RATE_LIMIT_REACHED: { code: 416, message: "rate limit reached" }, V2NIM_ERROR_CODE_MULTI_LOGIN_FORBIDDEN: { code: 417, message: "multi login forbidden" }, V2NIM_ERROR_CODE_SERVER_INTERNAL_ERROR: { code: 500, message: "server internal error" }, V2NIM_ERROR_CODE_SERVER_BUSY: { code: 503, message: "server busy" }, V2NIM_ERROR_CODE_APP_UNREACHABLE: { code: 511, message: "app server unreachable" }, V2NIM_ERROR_CODE_SERVICE_UNAVAILABLE: { code: 514, message: "service unavailable" }, V2NIM_ERROR_CODE_PROTOCOL_BLACKHOLE_FILTERED: { code: 599, message: "protocol filtered by blackhole rule" }, V2NIM_ERROR_CODE_NO_PERMISSION: { code: 997, message: "appid has no permission to call the protocol" }, V2NIM_ERROR_CODE_UNPACK_ERROR: { code: 998, message: "unpack error" }, V2NIM_ERROR_CODE_PACK_ERROR: { code: 999, message: "pack error" }, V2NIM_ERROR_CODE_IM_DISABLED: { code: 101301, message: "IM disabled" }, V2NIM_ERROR_CODE_SERVICE_ADDRESS_INVALID: { code: 101302, message: "service address invalid" }, V2NIM_ERROR_CODE_APPKEY_NOT_EXIST: { code: 101303, message: "appkey not exist" }, V2NIM_ERROR_CODE_BUNDLEID_CHECK_FAILED: { code: 101304, message: "bundleid check failed" }, V2NIM_ERROR_CODE_APPKEY_BLOCKED: { code: 101403, message: "appkey blocked" }, V2NIM_ERROR_CODE_INVALID_TOKEN: { code: 102302, message: "invalid token" }, V2NIM_ERROR_CODE_ROBOT_NOT_ALLOWED: { code: 102303, message: "robot not allowed" }, V2NIM_ERROR_CODE_ACCOUNT_NOT_EXIST: { code: 102404, message: "account not exist" }, V2NIM_ERROR_CODE_ACCOUNT_CHAT_BANNED: { code: 102421, message: "account chat banned" }, V2NIM_ERROR_CODE_ACCOUNT_BANNED: { code: 102422, message: "account banned" }, V2NIM_ERROR_CODE_ACCOUNT_IN_BLOCK_LIST: { code: 102426, message: "account in block list" }, V2NIM_ERROR_CODE_USER_PROFILE_NOT_EXIST: { code: 103404, message: "user profile not exist" }, V2NIM_ERROR_CODE_USER_PROFILE_HIT_ANTISPAM: { code: 103451, message: "user profile hit antispam" }, V2NIM_ERROR_CODE_PEER_FRIEND_LIMIT: { code: 104301, message: "peer friend limit" }, V2NIM_ERROR_CODE_FRIEND_APPLICATION_NOT_EXIST: { code: 104302, message: "friend application not exist" }, V2NIM_ERROR_CODE_FRIEND_NOT_EXIST: { code: 104404, message: "friend not exist" }, V2NIM_ERROR_CODE_FRIEND_ALREADY_EXIST: { code: 104405, message: "friend already exist" }, V2NIM_ERROR_CODE_SELF_FRIEND_OPERATION_NOT_ALLOWED: { code: 104429, message: "self friend operation not allowed" }, V2NIM_ERROR_CODE_FRIEND_LIMIT: { code: 104435, message: "friend limit" }, V2NIM_ERROR_CODE_FRIEND_OPERATION_RATE_LIMIT: { code: 104449, message: "friend operation rate limit" }, V2NIM_ERROR_CODE_FRIEND_HIT_ANTISPAM: { code: 104451, message: "friend hit antispam" }, V2NIM_ERROR_CODE_SELF_MUTE_OPERATION_NOT_ALLOWED: { code: 105429, message: "self mute operation not allowed" }, V2NIM_ERROR_CODE_MUTE_LIST_LIMIT: { code: 105435, message: "mute list limit" }, V2NIM_ERROR_CODE_SELF_BLOCK_LIST_OPERATION_NOT_ALLOWED: { code: 106429, message: "self block list operation not allowed" }, V2NIM_ERROR_CODE_BLOCK_LIST_LIMIT: { code: 106435, message: "block list limit" }, V2NIM_ERROR_CODE_REVOKE_THIRD_PARTY_MESSAGE_NOT_ALLOWED: { code: 107301, message: "revoke third party message not allowed" }, V2NIM_ERROR_CODE_SHORT_TO_LONG_URL_FAILED: { code: 107307, message: "short to long URL failed" }, V2NIM_ERROR_CODE_URL_INVALID: { code: 107308, message: "URL invalid" }, V2NIM_ERROR_CODE_DURATION_OUT_OF_RANGE: { code: 107309, message: "duration out of range" }, V2NIM_ERROR_CODE_GET_FILE_META_INFO_FAILED: { code: 107310, message: "get file meta info failed" }, V2NIM_ERROR_CODE_AUDIO_FILE_SIZE_LIMIT: { code: 107311, message: "audio file size limit" }, V2NIM_ERROR_CODE_VOICE_TO_TEXT_TIMEOUT: { code: 107312, message: "voice to text timeout" }, V2NIM_ERROR_CODE_VOICE_TO_TEXT_FAILED: { code: 107313, message: "voice to text failed" }, V2NIM_ERROR_CODE_REVOKE_EXCEED_TIME_LIMIT: { code: 107314, message: "revoke message exceed time limit" }, V2NIM_ERROR_CODE_REVOKE_MESSAGE_NOT_ALLOWED: { code: 107315, message: "revoke specific message not allowed" }, V2NIM_ERROR_CODE_FORCE_PUSH_LIST_LIMIT: { code: 107316, message: "force push list limit" }, V2NIM_ERROR_CODE_TEAM_MESSAGE_RECEIPT_RATE_LIMIT: { code: 107317, message: "team message receipt rate limit" }, V2NIM_ERROR_CODE_SNAPSHOT_NOT_EXIST: { code: 107318, message: "snapshot not exist" }, V2NIM_ERROR_CODE_PIN_LIMIT: { code: 107319, message: "pin limit" }, V2NIM_ERROR_CODE_PIN_NOT_EXIST: { code: 107320, message: "pin not exist" }, V2NIM_ERROR_CODE_QUICK_COMMENT_LIMIT: { code: 107321, message: "quick comment limit" }, V2NIM_ERROR_CODE_PIN_ALREADY_EXIST: { code: 107322, message: "pin already exist" }, V2NIM_ERROR_CODE_VOICE_TO_TEXT_FUNCTION_DISABLED: { code: 107333, message: "voice to text function disabled" }, V2NIM_ERROR_CODE_CLOUD_SEARCH_FUNCTION_DISABLED: { code: 107334, message: "cloud search function disabled" }, V2NIM_ERROR_CODE_ONE_WAY_DELETE_FUNCTION_DISABLED: { code: 107335, message: "one-way delete function disabled" }, V2NIM_ERRPR_CODE_ONEWAY_DELETION_NOT_ALLOW_FOR_TARGET_MESSAGES: { code: 107338, message: "one-way deletion is not allowed for target messages" }, V2NIM_ERRPR_CODE_SENDER_CANNOT_INCLUDED_IN_TARGET_LIST: { code: 107339, message: "The message sender cannot be included in the target list" }, V2NIM_ERROR_CODE_ROBOT_CANNOT_SEND_TARGET_MESSAGE: { code: 107340, message: "Robot can not send target message" }, V2NIM_ERROR_CODE_PIN_TARGET_MESSAGE_NOT_ALLOWED: { code: 107345, message: "Pin target message is not allowed" }, V2NIM_ERROR_CODE_TARGET_MESSAGE_NOT_ALLOWED_REPLY: { code: 107346, message: "Target message not allowed reply" }, V2NIM_ERROR_CODE_TARGET_MESSAGE_NOT_ALLOWED_QUICK_COMMENT: { code: 107347, message: "Target message not allowed quick comment" }, V2NIM_ERROR_CODE_REVOKE_MESSAGE_TO_SELF_NOT_ALLOWED: { code: 107429, message: "revoke message to self not allowed" }, V2NIM_ERROR_CODE_APP_CHAT_BANNED: { code: 107410, message: "app chat banned" }, V2NIM_ERROR_CODE_QUICK_COMMENT_FUNCTION_DISABLED: { code: 107326, message: "quick comment function disabled" }, V2NIM_ERROR_CODE_PIN_FUNCTION_DISABLED: { code: 107327, message: "PIN function disabled" }, V2NIM_ERROR_CODE_TEAM_READ_RECEIPT_FUNCTION_DISABLED: { code: 107324, message: "read receipt for team messages function disabled" }, V2NIM_ERROR_CODE_P2P_READ_RECEIPT_FUNCTION_DISABLED: { code: 107325, message: "read receipt for p2p messages function disabled" }, V2NIM_ERROR_CODE_RATE_LIMIT_FOR_MESSAGING_REACHED: { code: 107323, message: "rate limit for messaging reached" }, V2NIM_ERROR_CODE_MESSAGE_HIT_ANTISPAM: { code: 107451, message: "message hit antispam" }, V2NIM_ERROR_CODE_MESSAGE_NOT_EXIST: { code: 107404, message: "message not exist" }, V2NIM_ERROR_CODE_UNSENDING_MESSAGE_EXPIRED: { code: 107406, message: "unsending message expired" }, V2NIM_ERROR_CODE_TEAM_MARK_READ_FAILED: { code: 107302, message: "sending message failed for marking message read failed for too many team members" }, V2NIM_ERROR_CODE_SENDER_OR_MANAGER_PERMISSION_ONLY_REVOKE: { code: 107303, message: "only sender or manager can revoke message" }, V2NIM_ERROR_CODE_DELETE_SELF_MESSAGE_NOT_ALLOWED: { code: 107328, message: "delete self message not allowed" }, V2NIM_ERROR_CODE_NOT_CHATBOT_ACCOUNT: { code: 107329, message: "is not chatbot account" }, V2NIM_ERROR_CODE_MESSAGE_SENSE_REQUIRED: { code: 107330, message: "sender or receiver must sense message" }, V2NIM_ERROR_CODE_HIGH_PRIORITY_MESSAGE_RATE_LIMIT: { code: 107304, message: "rate limit of high-priority messages exceeded" }, ACK_MESSAGE_BE_HIGH_PRIORITY: { code: 107305, message: "ack message should be high-priority" }, V2NIM_ERROR_CODE_DUPLICATE_CLIENT_MESSAGE_ID: { code: 107306, message: "duplicate client message ID" }, V2NIM_ERROR_CODE_INVALID_TIME_RANGE: { code: 107439, message: "invalid time range" }, V2NIM_ERROR_CODE_NOT_ADVANCED_TEAM: { code: 108302, message: "not advanced team" }, V2NIM_ERROR_CODE_TEAM_MANAGER_LIMIT: { code: 108303, message: "team manager limit" }, V2NIM_ERROR_CODE_JOINED_TEAM_LIMIT: { code: 108305, message: "joined team limit" }, V2NIM_ERROR_CODE_TEAM_NORMAL_MEMBER_CHAT_BANNED: { code: 108306, message: "team normal member chat banned" }, V2NIM_ERROR_CODE_INVITED_ACCOUNT_NOT_FRIEND: { code: 108307, message: "invited account not friend" }, V2NIM_ERROR_CODE_REJECT_ALL_TEAM_APPLICATIONS: { code: 108308, message: "reject all team applications" }, V2NIM_ERROR_CODE_TARGETING_MESSAGE_FOR_TEAM_DISABLED: { code: 108318, message: "Targeting messages for group chat is disabled" }, V2NIM_ERROR_CODE_INCLUSIVE_AS_FALSE_NOT_ALLOWED_FOR_SUPER_TEAM: { code: 108319, message: 'Setting "inclusive" to false for super teams is not allowed' }, V2NIM_ERROR_CODE_CANNOT_MAKE_SUPER_TEAM_MESSAGE_VISIBLE_TO_NEW_MEMBERS: { code: 108320, message: "Cannot make super team targeted messages visible to new members" }, V2NIM_ERROR_CODE_CANNOT_ALLOW_TARGETED_MESSAGES_INCLUSIVE_TO_NEW_MEMBERS: { code: 108321, message: "Cannot allow targeted messages inclusive to new members" }, V2NIM_ERROR_CODE_TEAM_NOT_EXIST: { code: 108404, message: "team not exist" }, V2NIM_ERROR_CODE_TEAM_ALREADY_CHAT_BANNED: { code: 108420, message: "team already chat banned" }, V2NIM_ERROR_CODE_ALL_TEAM_MEMBER_CHAT_BANNED: { code: 108423, message: "all team member chat banned" }, V2NIM_ERROR_CODE_EXTENDED_SUPER_TEAM_LIMIT: { code: 108434, message: "extended super team limit" }, V2NIM_ERROR_CODE_CREATED_TEAM_LIMIT: { code: 108435, message: "created team limit" }, V2NIM_ERROR_CODE_TEAM_INVITATION_LIMIT: { code: 108437, message: "team invitation limit" }, V2NIM_ERROR_CODE_TEAM_HIT_ANTISPAM: { code: 108451, message: "team hit antispam" }, V2NIM_ERROR_CODE_EXTENDED_SUPER_TEAM_LIMIT_NOT_CONFIGURED: { code: 108304, message: "extended super team limit not configured" }, V2NIM_ERROR_CODE_SUPER_TEAM_SERVICE_DISABLED: { code: 108311, message: "super team service disabled" }, V2NIM_ERROR_CODE_TEAM_READ_RECEIPT_RECORD_NOT_FOUND: { code: 108301, message: "read receipt record for the team message not found" }, V2NIM_ERROR_CODE_NOT_MANAGER: { code: 108430, message: "unable to assign owner manager" }, V2NIM_ERROR_CODE_ONLINE_MEMBER_COUNT_DISABLED: { code: 108406, message: "number of online users service disabled" }, V2NIM_ERROR_CODE_TRANSFER_DISABLED: { code: 108310, message: "unable to transfer the ownership to owner" }, V2NIM_ERROR_CODE_CREATE_TEAM_DISABLED: { code: 108309, message: "unable to create team with more than %s people" }, V2NIM_ERROR_CODE_EXTENDED_SUPER_TEAM_CREATE_FAILED: { code: 108313, message: "/ extended super team creation failed，use open api to create the team" }, V2NIM_ERROR_CODE_TEAM_MESSAGE_READ_RECEIPT_DISABLED: { code: 108312, message: "read receipt for team messages function disabled" }, V2NIM_ERROR_CODE_RETRY: { code: 108449, message: "an error occurred, try again" }, V2NIM_ERROR_CODE_CHAT_BAN_LIST_CONTAIN_NOT_TEAM_MEMBER: { code: 109301, message: "list of chat banned users contains non team members" }, V2NIM_ERROR_CODE_CHAT_BAN_LIST_CONTAIN_OPERATOR: { code: 109303, message: "list of chat banned users contains the operator" }, V2NIM_ERROR_CODE_CHAT_BAN_LIST_CONTAIN_TEAM_OWNER: { code: 109304, message: "list of chat banned users contains the team owner" }, V2NIM_ERROR_CODE_OPERATION_ON_TEAM_MANAGER_NOT_ALLOWED: { code: 109305, message: "operation on team manager not allowed" }, V2NIM_ERROR_CODE_NO_TEAM_INVITE_PERMISSION: { code: 109306, message: "no team invite permission" }, V2NIM_ERROR_CODE_TEAM_OWNER_QUIT_NOT_ALLOWED: { code: 109307, message: "team owner quit not allowed" }, V2NIM_ERROR_CODE_TEAM_OWNER_IN_KICK_LIST: { code: 109308, message: "list of kicked user contains the team owner" }, V2NIM_ERROR_CODE_INVITE_ROBOT_ACCOUNT_NOT_ALLOWED: { code: 109309, message: "invite robot account not allowed" }, V2NIM_ERROR_CODE_KICK_OPERATOR_NOT_ALLOWED: { code: 109310, message: "kick operator not allowed" }, V2NIM_ERROR_CODE_TEAM_MEMBER_ALREADY_EXIST: { code: 109311, message: "team member already exist" }, V2NIM_ERROR_CODE_TEAM_INVITATION_OR_APPLICATION_NOT_EXIST: { code: 109313, message: "team invitation or application not exist" }, V2NIM_ERROR_CODE_OPERATION_ON_TEAM_OWNER_NOT_ALLOWED: { code: 109314, message: "operation on team owner not allowed" }, V2NIM_ERROR_CODE_FORCED_PUSH_LIST_INCLUDES_NON_TARGETED_ACCOUNTS: { code: 109318, message: "The forced push list includes non-targeted accounts" }, V2NIM_ERROR_CODE_TEAM_MEMBER_NOT_EXIST: { code: 109404, message: "team member not exist" }, V2NIM_ERROR_CODE_TEAM_MEMBER_CHAT_BANNED: { code: 109424, message: "team member chat banned" }, V2NIM_ERROR_CODE_TEAM_OWNER_OPERATION_PERMISSION_REQUIRED: { code: 109427, message: "team owner operation permission required" }, V2NIM_ERROR_CODE_TEAM_OWNER_OR_MANAGER_OPERATION_PERMISSION_REQUIRED: { code: 109432, message: "team owner or manager operation permission required" }, V2NIM_ERROR_CODE_TEAM_MEMBER_CONCURRENT_OPERATION_FAILED: { code: 109449, message: "team member concurrent operation failed" }, V2NIM_ERROR_CODE_TEAM_MEMBER_HIT_ANTISPAM: { code: 109451, message: "team member hit antispam" }, V2NIM_ERROR_CODE_CONVERSATION_AND_ACCOUNT_MISMATCH: { code: 110302, message: "conversation and account mismatch" }, V2NIM_ERROR_CODE_CONVERSATION_STICK_TOP_LIMIT: { code: 110303, message: "conversation stick top limit" }, V2NIM_ERROR_CODE_CONVERSATION_BELONGED_GROUP_LIMIT: { code: 110304, message: "conversation belonged group limit" }, V2NIM_ERROR_CODE_CONVERSATION_IS_NOT_STICK_TOP: { code: 110305, message: "conversation is not stick top" }, V2NIM_ERROR_CODE_STICK_TOP_DISABLED: { code: 110306, message: "conversation stick top disabled" }, V2NIM_ERROR_CODE_CONVERSATION_NOT_EXIST: { code: 110404, message: "conversation not exist" }, V2NIM_ERROR_CODE_CHATROOM_LINK_UNAVAILABLE: { code: 113304, message: "chatroom link unavailable" }, V2NIM_ERROR_CODE_IM_CONNECTION_ABNORMAL: { code: 113305, message: "IM connection abnormal" }, V2NIM_ERROR_CODE_CHATROOM_NOT_EXIST: { code: 113404, message: "chatroom not exist" }, V2NIM_ERROR_CODE_CHATROOM_CLOSED: { code: 113406, message: "chatroom closed" }, V2NIM_ERROR_CODE_CHATROOM_REPEATED_OPERATION: { code: 113409, message: "chatroom repeated operation" }, V2NIM_ERROR_CODE_CHATROOM_DISABLED: { code: 113410, message: "chatroom disabled" }, V2NIM_ERROR_CODE_ALL_CHATROOM_MEMBER_CHAT_BANNED: { code: 113423, message: "all chatroom member chat banned" }, V2NIM_ERROR_CODE_CHATROOM_HIT_ANTISPAM: { code: 113451, message: "chatroom hit antispam" }, V2NIM_ERROR_CODE_ANONYMOUS_MEMBER_FORBIDDEN: { code: 114303, message: "anonymous member forbidden" }, V2NIM_ERROR_CODE_CHATROOM_MEMBER_NOT_EXIST: { code: 114404, message: "chatroom member not exist" }, V2NIM_ERROR_CODE_CHATROOM_MEMBER_REPEATED_OPERATION: { code: 114405, message: "chatroom member repeated operation" }, V2NIM_ERROR_CODE_CHATROOM_MEMBER_CHAT_BANNED: { code: 114421, message: "chatroom member chat banned" }, V2NIM_ERROR_CODE_ACCOUNT_IN_CHATROOM_BLOCK_LIST: { code: 114426, message: "account in chatroom block list" }, V2NIM_ERROR_CODE_CHATROOM_OWNER_OPERATION_PERMISSION_REQUIRED: { code: 114427, message: "chatroom owner operation permission required" }, V2NIM_ERROR_CODE_SELF_IN_CHATROOM_MEMBER_OPERATION_LIST: { code: 114429, message: "self in chatroom member operation list" }, V2NIM_ERROR_CODE_CHATROOM_OWNER_OR_MANAGER_OPERATION_PERMISSION_REQUIRED: { code: 114432, message: "chatroom owner or manager operation permission required" }, V2NIM_ERROR_CODE_CHATROOM_MEMBER_LIMIT: { code: 114437, message: "chatroom member limit" }, V2NIM_ERROR_CODE_CHATROOM_MEMBER_CONCURRENT_OPERATION_FAILED: { code: 114449, message: "chatroom member concurrent operation failed" }, V2NIM_ERROR_CODE_CHATROOM_MEMBER_HIT_ANTISPAM: { code: 114451, message: "chatroom member hit antispam" }, V2NIM_ERROR_CODE_CONVERSATION_GROUP_NOT_EXIST: { code: 116404, message: "conversation group not exist" }, V2NIM_ERROR_CODE_CONVERSATION_GROUP_LIMIT: { code: 116435, message: "conversation group limit" }, V2NIM_ERROR_CODE_CONVERSATIONS_IN_GROUP_LIMIT: { code: 116437, message: "conversations in group limit" }, V2NIM_ERROR_CODE_COLLECTION_LIMIT: { code: 189301, message: "collection limit" }, V2NIM_ERROR_CODE_COLLECTION_NOT_EXIST: { code: 189302, message: "collection not exist" }, V2NIM_ERROR_CODE_COLLECTION_CONCURRENT_OPERATION_FAILED: { code: 189449, message: "collection concurrent operation failed" }, V2NIM_ERROR_CODE_INTERNAL: { code: 190001, message: "internal error" }, V2NIM_ERROR_CODE_ILLEGAL_STATE: { code: 190002, message: "illegal state" }, V2NIM_ERROR_CODE_MISUSE: { code: 191001, message: "misuse" }, V2NIM_ERROR_CODE_CANCELLED: { code: 191002, message: "operation cancelled" }, V2NIM_ERROR_CODE_CALLBACK_FAILED: { code: 191003, message: "callback failed" }, V2NIM_ERROR_CODE_INVALID_PARAMETER: { code: 191004, message: "invalid parameter" }, V2NIM_ERROR_CODE_TIMEOUT: { code: 191005, message: "timeout" }, V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST: { code: 191006, message: "resource not exist" }, V2NIM_ERROR_CODE_RESOURCE_ALREADY_EXIST: { code: 191007, message: "resource already exist" }, V2NIM_ERROR_CODE_CONNECT_FAILED: { code: 192001, message: "connect failed" }, V2NIM_ERROR_CODE_CONNECT_TIMEOUT: { code: 192002, message: "connect timeout" }, V2NIM_ERROR_CODE_DISCONNECT: { code: 192003, message: "disconnect" }, V2NIM_ERROR_CODE_PROTOCOL_TIMEOUT: { code: 192004, message: "protocol timeout" }, V2NIM_ERROR_CODE_PROTOCOL_SEND_FAILED: { code: 192005, message: "protocol send failed" }, V2NIM_ERROR_CODE_REQUEST_FAILED: { code: 192006, message: "request failed" }, V2NIM_ERROR_CODE_FILE_NOT_FOUND: { code: 194001, message: "file not found" }, V2NIM_ERROR_CODE_FILE_CREATE_FAILED: { code: 194002, message: "file create failed" }, V2NIM_ERROR_CODE_FILE_OPEN_FAILED: { code: 194003, message: "file open failed" }, V2NIM_ERROR_CODE_FILE_WRITE_FAILED: { code: 194004, message: "file write failed" }, V2NIM_ERROR_CODE_FILE_READ_FAILED: { code: 194005, message: "file read failed" }, V2NIM_ERROR_CODE_FILE_UPLOAD_FAILED: { code: 194006, message: "file upload failed" }, V2NIM_ERROR_CODE_FILE_DOWNLOAD_FAILED: { code: 194007, message: "file download failed" }, V2NIM_ERROR_CODE_CLIENT_ANTISPAM: { code: 195001, message: "client anti-spam" }, V2NIM_ERROR_CODE_SERVER_ANTISPAM: { code: 195002, message: "server anti-spam" }, V2NIM_ERROR_CODE_STREAM_OUTPUT_STOPPED: { code: 189318, message: "Streaming text response stopped" }, V2NIM_ERROR_CODE_STREAM_OUTPUT_GENERATED: { code: 189319, message: "Streaming text response generated" }, V2NIM_ERROR_CODE_STREAM_OUTPUT_ABORTED: { code: 189320, message: "Streaming text response aborted due to exception" }, V2NIM_ERROR_CODE_INTERRUPTION_REJECTED: { code: 189321, message: "Non-streaming messages cannot be interrupted" } };
var ye = Object.keys(Ie);
var Me = ye.reduce(function(t2, o2) {
  var a2 = Ie[o2];
  return t2[o2] = a2.code, t2;
}, {});
var _e = ye.reduce(function(t2, o2) {
  var a2 = Ie[o2];
  return t2[a2.code] = a2.message, t2;
}, {});
var Ee = Object.freeze({ __proto__: null, V2NIMErrorCode: Me, V2NIMErrorDesc: _e, get V2NIMDataSyncLevel() {
  return o;
}, get V2NIMDataSyncType() {
  return a;
}, get V2NIMDataSyncState() {
  return m;
}, get V2NIMConversationType() {
  return u;
}, get V2NIMLastMessageState() {
  return h;
}, get V2NIMFriendAddMode() {
  return g;
}, get V2NIMFriendAddApplicationType() {
  return I;
}, get V2NIMFriendAddApplicationStatus() {
  return M;
}, get V2NIMFriendDeletionType() {
  return _;
}, get V2NIMFriendVerifyType() {
  return E;
}, get V2NIMLoginAuthType() {
  return S;
}, get V2NIMLoginStatus() {
  return T;
}, get V2NIMLoginClientType() {
  return C;
}, get V2NIMKickedOfflineReason() {
  return N;
}, get V2NIMLoginClientChange() {
  return A;
}, get V2NIMConnectStatus() {
  return O;
}, get V2NIMMessageType() {
  return P;
}, get V2NIMMessageNotificationType() {
  return D;
}, get V2NIMMessageAttachmentUploadState() {
  return U;
}, get V2NIMMessageSendingState() {
  return x;
}, get V2NIMQueryDirection() {
  return B;
}, get V2NIMMessageRevokeType() {
  return j;
}, get V2NIMMessagePinState() {
  return G;
}, get V2NIMMessageQuickCommentType() {
  return q;
}, get V2NIMClientAntispamOperateType() {
  return H;
}, get V2NIMSortOrder() {
  return z;
}, get V2NIMSystemMessageType() {
  return Y;
}, get V2NIMMessageAIStreamStatus() {
  return R;
}, get V2NIMMessageAIStreamStopOpType() {
  return b;
}, get V2NIMMessageAIRegenOpType() {
  return V;
}, get V2NIMMessageAIStatus() {
  return k;
}, get V2NIMSearchKeywordMatchType() {
  return L;
}, get V2NIMClearHistoryMode() {
  return $;
}, get V2NIMMessageStreamStatus() {
  return K;
}, get V2NIMTeamMessageMuteMode() {
  return J;
}, get V2NIMP2PMessageMuteMode() {
  return X;
}, get V2NIMTeamMemberRoleQueryType() {
  return Q;
}, get V2NIMTeamType() {
  return Z;
}, get V2NIMTeamJoinMode() {
  return ee;
}, get V2NIMTeamAgreeMode() {
  return te;
}, get V2NIMTeamInviteMode() {
  return re;
}, get V2NIMTeamUpdateInfoMode() {
  return ie;
}, get V2NIMTeamChatBannedMode() {
  return oe;
}, get V2NIMTeamUpdateExtensionMode() {
  return se;
}, get V2NIMTeamJoinActionType() {
  return ae;
}, get V2NIMTeamJoinActionStatus() {
  return ce;
}, get V2NIMTeamNotificationType() {
  return de;
}, get V2NIMTeamMemberRole() {
  return ne;
}, get V2NIMAIModelRoleType() {
  return me;
}, get V2NIMAIModelType() {
  return le;
}, get V2NIMAIModelStreamCallStatus() {
  return pe;
}, get V2NIMSignallingChannelType() {
  return he;
}, get V2NIMSignallingEventType() {
  return ue;
}, get V2NIMUserStatusType() {
  return ge;
} });
var V2NIMErrorImpl = class extends Error {
  constructor(t2) {
    super(t2.desc), this.name = "V2NIMError", this.code = t2.code || 0, this.desc = t2.desc || _e[this.code] || Se[this.code] || "", this.message = this.desc, this.detail = t2.detail || {};
  }
  toString() {
    var t2, o2 = `${this.name}
 code: ${this.code}
 message: "${this.message}"
 detail: ${this.detail ? JSON.stringify(this.detail) : ""}`;
    return (null === (t2 = null == this ? void 0 : this.detail) || void 0 === t2 ? void 0 : t2.rawError) && (o2 += `
 rawError: ${this.detail.rawError.message}`), o2;
  }
};
var ValidateError = class extends V2NIMErrorImpl {
  constructor(t2, o2 = {}, a2) {
    super({ code: Me.V2NIM_ERROR_CODE_PARAMETER_ERROR, detail: { reason: t2, rules: a2, data: o2 } }), this.name = "validateError", this.message = this.message + "\n" + JSON.stringify(this.detail, null, 2), this.data = o2, this.rules = a2;
  }
};
var ValidateErrorV2 = class extends V2NIMErrorImpl {
  constructor(t2) {
    var o2, a2, m2;
    super({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: null === (o2 = t2.detail) || void 0 === o2 ? void 0 : o2.reason, rules: null === (a2 = t2.detail) || void 0 === a2 ? void 0 : a2.rules, data: null === (m2 = t2.detail) || void 0 === m2 ? void 0 : m2.data } }), this.name = "ValidateErrorV2";
  }
};
var UploadError = class extends V2NIMErrorImpl {
  constructor(t2) {
    super(Object.assign({ code: 400 }, t2)), this.desc = this.desc || "upload file error", this.message = this.desc, this.name = "uploadError";
  }
};
var Se = { 200: null, 406: null, 808: null, 810: null, 302: "The user name or password is incorrect.", 405: "Parameter length too long", 408: "Client request timed out", 415: "Client network unavailable", 422: "Account disabled", 508: "Expiration date", 509: "Invalid", 7101: "Be pulled black", 700: "Partial failure of batch operation", 801: "The number of people in the team has reached the upper limit", 802: "No permission", 803: "The team does not exist or has not changed", 804: "The user is not in the team", 805: "Team type mismatch", 806: "The number of teams created has reached the limit", 807: "Team member not valid", 809: "Already in the team", 811: "The number of accounts in the forced push list exceeds the limit", 812: "The team is muted", 813: "Due to the limited number of team, some pull people successfully", 814: "Disable team message read service", 815: "Maximum number of team administrators", 816: "Batch operation partial failure", 9102: "Channel failure", 9103: "This call has been answered / rejected at another end", 10201: "Signaling: target NIM client is offline", 10202: "Signaling: push is unreachable", 10404: "Signaling: channel not exists", 10405: "Signaling: channel already exists", 10406: "Signaling: member of channel not exists", 10407: "Signaling: member of channel already exists", 10408: "Signaling: the invitation request does not exist or has expired", 10409: "Signaling: the invitation request has been rejected", 10410: "Signaling: the invitation request has been accepted", 10414: "Signaling: request parameter error", 10417: "Signaling: uid conflict", 10419: "Signaling: the number of members of channel exceed the limit", 10420: "Signaling: member is already in the channel on other client", 10700: "Signaling: phased success", 13002: "Abnormal chatroom status", 13003: "In the blacklist", 13004: "In the mute list", 13006: "All members are muted, and only the administrator can speak" };
function replacer(t2, o2) {
  return o2 instanceof RegExp ? "__REGEXP " + o2.toString() : o2;
}
function validate(t2, o2 = {}, a2, m2 = false) {
  var u2 = {};
  return Object.keys(t2).forEach((h2) => {
    var g2 = t2[h2].type, I2 = a2 ? `In ${a2}, ` : "";
    if (null == o2) {
      var M2 = `${I2}param is null or undefined`;
      throw m2 ? new ValidateErrorV2({ detail: { reason: M2, data: { key: h2 }, rules: "required" } }) : new ValidateError(M2, { key: h2 }, "required");
    }
    if (void 0 === o2[h2]) {
      if (false === t2[h2].required)
        return void (u2[h2] = o2[h2]);
      var _2 = `${I2}param '${h2}' is required`;
      throw m2 ? new ValidateErrorV2({ detail: { reason: _2, data: { key: h2 }, rules: "required" } }) : new ValidateError(_2, { key: h2 }, "required");
    }
    var E2 = Te[g2];
    if (E2 && !E2(o2, h2, t2[h2], m2)) {
      var S2 = `${I2}param '${h2}' unexpected`, T2 = { key: h2, value: o2[h2] };
      throw m2 ? new ValidateErrorV2({ detail: { reason: S2, data: T2, rules: JSON.stringify(t2[h2], replacer) } }) : new ValidateError(S2, T2, JSON.stringify(t2[h2], replacer));
    }
    u2[h2] = o2[h2];
  }), u2;
}
var Te = { string: function(t2, o2, a2) {
  var { allowEmpty: m2, max: u2, min: h2, regExp: g2 } = a2, I2 = t2[o2];
  return "string" == typeof I2 && ((false !== m2 || "" !== I2) && (!("number" == typeof u2 && I2.length > u2) && (!("number" == typeof h2 && I2.length < h2) && !(function isRegExp(t3) {
    return "[object RegExp]" === Object.prototype.toString.call(t3);
  }(g2) && !g2.test(I2)))));
}, number: function(t2, o2, a2) {
  var { min: m2, max: u2 } = a2, h2 = t2[o2];
  return "number" == typeof h2 && (!("number" == typeof m2 && h2 < m2) && !("number" == typeof u2 && h2 > u2));
}, boolean: function(t2, o2) {
  return "boolean" == typeof t2[o2];
}, file: function(t2, o2) {
  return true;
}, enum: function(t2, o2, a2) {
  var { values: m2 } = a2, u2 = t2[o2];
  return !m2 || m2.indexOf(u2) > -1;
}, jsonstr: function(t2, o2) {
  try {
    var a2 = JSON.parse(t2[o2]);
    return "object" == typeof a2 && null !== a2;
  } catch (t3) {
    return false;
  }
}, func: function(t2, o2) {
  return "function" == typeof t2[o2];
}, array: function(t2, o2, a2, m2 = false) {
  var { itemType: u2, itemRules: h2, rules: g2, min: I2, max: M2, values: _2 } = a2, E2 = t2[o2];
  if (!Array.isArray(E2))
    return false;
  if ("number" == typeof M2 && E2.length > M2)
    return false;
  if ("number" == typeof I2 && E2.length < I2)
    return false;
  if (h2)
    E2.forEach((t3, a3) => {
      validate({ [a3]: h2 }, { [a3]: t3 }, `${o2}[${a3}]`, m2);
    });
  else if (g2)
    E2.forEach((t3, a3) => validate(g2, t3, `${o2}[${a3}]`, m2));
  else if ("enum" === u2) {
    if (_2 && function difference(t3, o3) {
      return o3 = o3 || [], (t3 = t3 || []).filter((t4) => -1 === o3.indexOf(t4));
    }(E2, _2).length)
      return false;
  } else if (u2 && !E2.every((t3) => typeof t3 === u2))
    return false;
  return true;
}, object: function(t2, o2, a2, m2 = false) {
  var { rules: u2, allowEmpty: h2 } = a2, g2 = t2[o2];
  if ("object" != typeof g2 || null === g2)
    return false;
  if (u2) {
    var I2 = Object.keys(u2), M2 = Object.keys(g2).filter((t3) => I2.indexOf(t3) > -1);
    if (false === h2 && 0 === M2.length)
      return false;
    validate(u2, g2, o2, m2);
  }
  return true;
} };
function validateConversationId(t2, o2) {
  if (!t2)
    throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_ILLEGAL_STATE });
  validate({ conversationId: { type: "string", allowEmpty: false, regExp: new RegExp(`^${t2}\\|[1-3]\\|`) } }, { conversationId: o2 }, "", true);
}
var TimerManager = class {
  constructor() {
    this.timerList = [], this.id = 1, this.timer = null, this.timeout = 0;
  }
  addTimer(t2, o2 = 0, a2 = 1) {
    var m2 = (/* @__PURE__ */ new Date()).getTime(), u2 = this.id;
    return this.timerList.push({ id: u2, loop: a2, count: 0, timeout: m2 + o2, interval: o2, callback: t2 }), this.id++, this.checkTimer(m2), u2;
  }
  checkTimer(t2 = (/* @__PURE__ */ new Date()).getTime()) {
    if (this.removeFinished(), 0 !== this.timerList.length || null == this.timer) {
      var o2 = 0;
      for (var a2 of this.timerList)
        (0 === o2 || o2 > a2.timeout) && (o2 = a2.timeout);
      0 !== this.timerList.length && (null === this.timer || o2 < this.timeout || this.timeout < t2) && (this.timer = setTimeout(this.nowTime.bind(this), o2 - t2), this.timeout = o2);
    }
  }
  nowTime() {
    var t2 = (/* @__PURE__ */ new Date()).getTime();
    for (var o2 of this.timerList)
      t2 >= o2.timeout && (o2.callback(), o2.count++, o2.timeout = t2 + o2.interval);
    this.clerTime(), this.checkTimer(t2);
  }
  clerTime() {
    null !== this.timer && (clearTimeout(this.timer), this.timer = null);
  }
  deleteTimer(t2) {
    for (var o2 = this.timerList.length - 1; o2 >= 0; o2--) {
      this.timerList[o2].id === t2 && this.timerList.splice(o2, 1);
    }
  }
  removeFinished() {
    for (var t2 = this.timerList.length - 1; t2 >= 0; t2--) {
      var o2 = this.timerList[t2];
      o2.loop >= 0 && o2.count >= o2.loop && this.timerList.splice(t2, 1);
    }
  }
  destroy() {
    this.clerTime(), this.timerList = [], this.id = 1, this.timer = null;
  }
};
function __rest(t2, o2) {
  var a2 = {};
  for (var m2 in t2)
    Object.prototype.hasOwnProperty.call(t2, m2) && o2.indexOf(m2) < 0 && (a2[m2] = t2[m2]);
  if (null != t2 && "function" == typeof Object.getOwnPropertySymbols) {
    var u2 = 0;
    for (m2 = Object.getOwnPropertySymbols(t2); u2 < m2.length; u2++)
      o2.indexOf(m2[u2]) < 0 && Object.prototype.propertyIsEnumerable.call(t2, m2[u2]) && (a2[m2[u2]] = t2[m2[u2]]);
  }
  return a2;
}
function __awaiter(t2, o2, a2, m2) {
  return new (a2 || (a2 = Promise))(function(u2, h2) {
    function fulfilled(t3) {
      try {
        step(m2.next(t3));
      } catch (t4) {
        h2(t4);
      }
    }
    function rejected(t3) {
      try {
        step(m2.throw(t3));
      } catch (t4) {
        h2(t4);
      }
    }
    function step(t3) {
      t3.done ? u2(t3.value) : function adopt(t4) {
        return t4 instanceof a2 ? t4 : new a2(function(o3) {
          o3(t4);
        });
      }(t3.value).then(fulfilled, rejected);
    }
    step((m2 = m2.apply(t2, o2 || [])).next());
  });
}
function isPlainObject(t2) {
  return null != t2 && "object" == typeof t2 && Object.getPrototypeOf(t2) == Object.prototype;
}
function merge(t2, o2) {
  var a2 = isPlainObject(t2) || Array.isArray(t2), m2 = isPlainObject(o2) || Array.isArray(o2);
  if (a2 && m2) {
    for (var u2 in o2) {
      var h2 = merge(t2[u2], o2[u2]);
      void 0 !== h2 && (t2[u2] = h2);
    }
    return t2;
  }
  return o2;
}
var Ce = { getNetworkStatus: () => Promise.resolve({ net_type: 0, net_connect: true }), onNetworkStatusChange(t2) {
}, offNetworkStatusChange() {
} };
var Ne = { isActive: () => true, getStatus: () => 0, setStatus(t2) {
}, destroy() {
} };
var Ae = { setLogger: function(t2) {
  throw new Error("setLogger not implemented.");
}, platform: "", WebSocket: class AdapterSocket {
  constructor(t2, o2) {
    throw this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3, this.binaryType = "", new Error("Method not implemented.");
  }
  close(t2, o2) {
    throw new Error("Method not implemented.");
  }
  send(t2) {
    throw new Error("Method not implemented.");
  }
  onclose(t2) {
    throw new Error("Method not implemented.");
  }
  onerror(t2) {
    throw new Error("Method not implemented.");
  }
  onmessage(t2) {
    throw new Error("Method not implemented.");
  }
  onopen(t2) {
    throw new Error("Method not implemented.");
  }
}, localStorage: {}, request: function(t2, o2) {
  throw new Error("request not implemented.");
}, uploadFile: function(t2) {
  throw new Error("uploadFile not implemented.");
}, getSystemInfo: function() {
  throw new Error("getSystemInfo not implemented.");
}, getFileUploadInformation(t2) {
  throw new Error("getFileUploadInformation not implemented.");
}, envPayload: {}, net: Ce, powerMonitor: Ne, logStorage: class AdapterLogStorageImpl {
  constructor(t2) {
  }
  open() {
    return Promise.resolve();
  }
  close() {
  }
  addLogs(t2) {
    return Promise.resolve();
  }
  extractLogs() {
    return Promise.resolve();
  }
  afterUpload() {
    return Promise.resolve();
  }
} };
function setAdapters(t2) {
  merge(Ae, t2());
}
var Oe = ["error", "warn", "log", "debug"];
var emptyFunc$1 = function() {
};
var Re = ["off", "error", "warn", "log", "debug"];
var Logger = class {
  constructor(t2, o2 = {}) {
    this.storageArr = [], this.debugLevel = "off", this.timer = 0, this.strategies = { debug: { name: "debg", func: console.log }, log: { name: "info", func: console.log }, warn: { name: "warn", func: console.warn }, error: { name: "erro", func: console.error } }, this.debug = emptyFunc$1, this.log = emptyFunc$1, this.warn = emptyFunc$1, this.error = emptyFunc$1, this.iid = Math.round(1e3 * Math.random()), this.debugLevel = Re.includes(t2) ? t2 : "off", o2.debugLevel && (this.debugLevel = Re.includes(o2.debugLevel) ? o2.debugLevel : this.debugLevel), this.logStorage = false === o2.storageEnable ? null : new Ae.logStorage(null == o2 ? void 0 : o2.storageName), this.setOptions(o2), this.setLogFunc(this.debugLevel), this.setTimer(), Ae.setLogger(this), this.open();
  }
  getDebugMode() {
    return "debug" === this.debugLevel;
  }
  open() {
    this.logStorage && this.logStorage.open().then(() => {
      this.log("Logger::open success");
    }).catch((t2) => {
      this.warn("Logger::open failed", t2);
    });
  }
  setOptions(t2) {
    if (t2 && t2.logFunc) {
      var o2 = t2.logFunc;
      for (var a2 in o2) {
        var m2 = a2, u2 = o2[m2];
        u2 && (this.strategies[m2].func = u2);
      }
    }
  }
  setLogFunc(t2, o2 = "log") {
    var a2 = Oe.findIndex((o3) => o3 === t2), m2 = Oe.findIndex((t3) => t3 === o2);
    Oe.forEach((t3, o3) => {
      this[t3] = function() {
        if (!(o3 > a2 && o3 > m2)) {
          var u2 = Array.prototype.slice.call(arguments), h2 = this.strategies[t3], g2 = this.formatArgs(u2, h2.name);
          o3 <= m2 && this.logStorage && this.prepareSaveLog(g2, t3), o3 <= a2 && h2.func(g2);
        }
      };
    });
  }
  extractLogs() {
    var t2;
    return this.logStorage ? null === (t2 = this.logStorage) || void 0 === t2 ? void 0 : t2.extractLogs() : Promise.resolve("");
  }
  afterUpload() {
    var t2;
    return this.logStorage ? null === (t2 = this.logStorage) || void 0 === t2 ? void 0 : t2.afterUpload() : Promise.resolve("");
  }
  prepareSaveLog(t2, o2) {
    this.storageArr.push({ text: t2, level: o2, time: Date.now(), iid: this.iid }), this.timer || this.setTimer(), this.storageArr.length >= 100 && (this.triggerTimer(), this.storageArr = []);
  }
  saveLogs() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.logStorage) {
        var t2 = this.storageArr;
        this.storageArr = [];
        try {
          yield this.logStorage.addLogs(t2);
        } catch (t3) {
        }
      }
    });
  }
  clearTimer() {
    this.timer && clearTimeout(this.timer), this.timer = 0;
  }
  setTimer() {
    this.clearTimer(), this.timer = setTimeout(this.triggerTimer.bind(this), 5e3);
  }
  triggerTimer() {
    this.clearTimer(), this.saveLogs();
  }
  formatArgs(t2, o2) {
    var a2 = /* @__PURE__ */ new Date();
    return `[NIM ${this.iid} ${o2} ${`${a2.getMonth() + 1}-${a2.getDate()} ${a2.getHours()}:${a2.getMinutes()}:${a2.getSeconds()}:${a2.getMilliseconds()}`}] ` + t2.map((t3) => t3 instanceof V2NIMErrorImpl ? t3.toString() : t3 instanceof Error ? t3 && t3.message ? t3.message : t3 : "object" == typeof t3 ? JSON.stringify(t3) : t3).join(" ");
  }
  destroy() {
    this.debug = emptyFunc$1, this.log = emptyFunc$1, this.warn = emptyFunc$1, this.error = emptyFunc$1, this.saveLogs(), this.clearTimer(), this.storageArr = [], this.logStorage && this.logStorage.close();
  }
};
function get(t2, o2) {
  if ("object" != typeof t2 || null === t2)
    return t2;
  for (var a2 = (o2 = o2 || "").split("."), m2 = 0; m2 < a2.length; m2++) {
    var u2 = a2[m2], h2 = t2[u2], g2 = u2.indexOf("["), I2 = u2.indexOf("]");
    if (-1 !== g2 && -1 !== I2 && g2 < I2) {
      var M2 = u2.slice(0, g2), _2 = parseInt(u2.slice(g2 + 1, I2));
      h2 = t2[M2], h2 = Array.isArray(h2) ? h2[_2] : void 0;
    }
    if (null == h2)
      return h2;
    t2 = h2;
  }
  return t2;
}
var be;
var Ve = (be = function() {
  return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
}, function() {
  return be() + be() + be() + be() + be() + be() + be() + be();
});
function pendingIsMiniappEnv() {
  var { hostEnvEnum: t2 } = Ae.getSystemInfo();
  return 6 === t2 || 102 === t2 || 103 === t2 || 104 === t2;
}
function assignOptions(t2, o2) {
  return function assignWith(t3, o3, a2, m2) {
    for (var u2 in t3 = t3 || {}, a2 = a2 || {}, m2 = m2 || (() => {
    }), o3 = o3 || {}) {
      var h2 = m2(t3[u2], o3[u2]);
      t3[u2] = void 0 === h2 ? o3[u2] : h2;
    }
    for (var g2 in a2) {
      var I2 = m2(t3[g2], a2[g2]);
      t3[g2] = void 0 === I2 ? a2[g2] : I2;
    }
    return t3;
  }({}, t2, o2, function(t3, o3) {
    return void 0 === o3 ? t3 : o3;
  });
}
function emptyFuncWithPromise() {
  return Promise.resolve();
}
function emptyFunc() {
}
function getFileExtension(t2) {
  var o2 = t2.lastIndexOf("."), a2 = o2 > -1 ? t2.slice(o2 + 1) : "";
  return /^\d+$/.test(a2.trim()) && (a2 = ""), a2;
}
function findIndexWithinTargetValue(t2, o2, a2) {
  return 0 === t2.length || t2[0][o2] <= a2 ? 0 : t2[t2.length - 1][o2] > a2 ? t2.length : t2.findIndex((m2, u2) => {
    if (t2[u2 - 1] && t2[u2 - 1][o2] > a2 && a2 >= m2[o2])
      return true;
  });
}
function fillIdServer(t2, o2, a2, m2) {
  var u2 = "number" == typeof get(t2, "raw.r[0]") ? `${t2.raw.r[0]}` : void 0;
  return o2[a2] = o2[a2] || u2 || m2, o2;
}
var CoreAdapters = class {
  constructor(t2) {
    this.lastSuccUploadHost = "", this.core = t2;
  }
  getFileUploadInformation(t2) {
    return Ae.getFileUploadInformation(t2);
  }
  request(t2, o2, a2) {
    var m2 = (/* @__PURE__ */ new Date()).getTime(), u2 = (null == a2 ? void 0 : a2.exception_service) || 0;
    return Ae.request(t2, o2).catch((a3) => {
      var h2, g2, I2, M2, _2 = a3;
      throw this.core.reporter.reportTraceStart("exceptions", { user_id: this.core.options.account || (null === (g2 = null === (h2 = this.core) || void 0 === h2 ? void 0 : h2.auth) || void 0 === g2 ? void 0 : g2.account), trace_id: null === (M2 = null === (I2 = this.core.clientSocket) || void 0 === I2 ? void 0 : I2.socket) || void 0 === M2 ? void 0 : M2.sessionId, start_time: m2, action: 1, exception_service: u2 }), this.core.reporter.reportTraceUpdateV2("exceptions", { code: "number" == typeof _2.code ? _2.code : 0, description: _2.message || `${_2.code}`, operation_type: 0, target: t2, context: o2 ? JSON.stringify(o2) : "" }, { asyncParams: Ae.net.getNetworkStatus() }), this.core.reporter.reportTraceEnd("exceptions", 1), a3;
    });
  }
  uploadFile(t2) {
    var o2, a2, m2, u2;
    return __awaiter(this, void 0, void 0, function* () {
      for (var h2 = "BROWSER" === Ae.platform, g2 = h2 ? t2.chunkUploadHostBackupList : t2.commonUploadHostBackupList, I2 = h2 ? t2.chunkUploadHost : t2.commonUploadHost, M2 = g2.indexOf(I2), _2 = -1 === M2 ? [I2, ...g2] : [I2, ...g2.slice(0, M2), ...g2.slice(M2 + 1)], E2 = Math.max(_2.indexOf(this.lastSuccUploadHost), 0), S2 = null, T2 = 0; T2 < _2.length; T2++) {
        var C2 = (/* @__PURE__ */ new Date()).getTime(), N2 = _2[(T2 + E2) % _2.length];
        try {
          var A2 = yield Ae.uploadFile(Object.assign(Object.assign({}, t2), h2 ? { chunkUploadHost: N2 } : { commonUploadHost: N2 }));
          return this.lastSuccUploadHost = N2, "string" == typeof A2.size && (A2.size = parseInt(A2.size)), "string" == typeof A2.dur && (A2.dur = parseInt(A2.dur)), "string" == typeof A2.w && (A2.w = parseInt(A2.w)), "string" == typeof A2.h && (A2.h = parseInt(A2.h)), A2;
        } catch (t3) {
          this.core.cloudStorage.nos.nosErrorCount--, S2 = t3;
          var O2 = t3;
          this.core.reporter.reportTraceStart("exceptions", { user_id: this.core.options.account || (null === (a2 = null === (o2 = this.core) || void 0 === o2 ? void 0 : o2.auth) || void 0 === a2 ? void 0 : a2.account), trace_id: null === (u2 = null === (m2 = this.core.clientSocket) || void 0 === m2 ? void 0 : m2.socket) || void 0 === u2 ? void 0 : u2.sessionId, start_time: C2, action: 1, exception_service: 3 }), this.core.reporter.reportTraceUpdateV2("exceptions", { code: "number" == typeof O2.code ? O2.code : 0, description: O2.message || `${O2.code}`, operation_type: 1, target: N2 }, { asyncParams: Ae.net.getNetworkStatus() }), this.core.reporter.reportTraceEnd("exceptions", 1), this._uploadFileErrHanler(t3);
        }
      }
      throw S2;
    });
  }
  _uploadFileErrHanler(t2) {
    if (t2 && (t2.code > 200 || t2.errCode > 200))
      throw t2;
  }
};
var ke = "https://abt-online.netease.im/v1/api/abt/client/getExperimentInfo";
var ABTest = class {
  constructor(t2, o2) {
    this.abtInfo = {}, this.core = t2, this.config = assignOptions({ isAbtestEnable: true, abtestUrl: ke, abtestProjectKey: "imElite_sdk_abtest_web" }, o2);
  }
  setOptions(t2) {
    this.config = assignOptions(this.config, t2);
  }
  abtRequest() {
    var t2, o2;
    return __awaiter(this, void 0, void 0, function* () {
      if (this.config.isAbtestEnable && !this.abtInfo.experiments && this.config.abtestUrl) {
        var a2;
        try {
          a2 = yield this.core.adapters.request(this.config.abtestUrl, { method: "POST", dataType: "json", headers: { sdktype: "ABTest" }, data: { clientInfo: { projectKey: this.config.abtestProjectKey, appKey: this.core.options.appkey, osType: "Web", sdkVersion: "10.9.41", deviceId: this.core.config.deviceId }, useLocalCache: true } }, { exception_service: 7 });
        } catch (t3) {
          this.core.logger.warn("ABTest request failed");
        }
        this.abtInfo = (null === (o2 = null === (t2 = null == a2 ? void 0 : a2.data) || void 0 === t2 ? void 0 : t2.data) || void 0 === o2 ? void 0 : o2.abtInfo) || {};
      }
    });
  }
};
var PromiseManager = class {
  constructor() {
    this.abortFns = [];
  }
  add(t2) {
    var o2 = function getPromiseWithAbort(t3) {
      var o3 = {}, a2 = new Promise(function(t4, a3) {
        o3.abort = a3;
      });
      return o3.promise = Promise.race([t3, a2]), o3;
    }(t2);
    return this.abortFns.push(o2.abort), o2.promise;
  }
  clear(t2) {
    this.abortFns.forEach((o2) => o2(t2 || new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_CANCELLED, detail: { reason: "Aborted" } }))), this.abortFns = [];
  }
  destroy() {
    this.clear();
  }
};
var Pe = { tolerantRTT: 3e3, bestRTT: 100, maxChances: 5, enable: true };
var Le = { timestamp: 0, rtt: 0, baseClock: 0, baseTime: 0 };
var TimeOrigin = class _TimeOrigin {
  constructor(t2, o2, a2 = "getServerTime") {
    this.serverOrigin = Le, this.config = Pe, this.isSettingNTP = false, this.currentChance = 0, this.failedDelay = 2e3, this.successDelay = 3e5, this.timer = 0, this.cmdName = "getServerTime", this.core = t2, this.logger = t2.logger, this.promiseManager = new PromiseManager(), this.cmdName = a2, o2 && this.setOptions(o2);
  }
  setOptions(t2) {
    this.config = Object.assign({}, Pe, this.config, t2);
  }
  reset() {
    this.timer && clearTimeout(this.timer), this.promiseManager.clear(), this.serverOrigin = Le, this.currentChance = 0;
  }
  setOriginTimetick() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.config.enable && !(this.isSettingNTP || this.currentChance >= this.config.maxChances)) {
        var t2 = get(this.core, "auth.status"), o2 = get(this.core, "status"), a2 = get(this.core, "V2NIMLoginService.lifeCycle.loginStatus");
        if ("logined" === t2 || "logined" === o2 || 1 === a2) {
          this.isSettingNTP = true, this.currentChance++, this.timer && clearTimeout(this.timer), this.timer = 0;
          var m2, u2 = "TimeOrigin::setOriginTimetick:", h2 = Date.now();
          this.core.logger.debug(`${u2} getServerTime start, times ${this.currentChance}`);
          try {
            m2 = get(yield this.promiseManager.add(this.core.sendCmd(this.cmdName)), "content.time"), this.isSettingNTP = false;
          } catch (t3) {
            var g2 = t3;
            return this.isSettingNTP = false, this.logger.warn(`${u2} Calculate Delay time, getServerTime error`, g2), void (g2.code !== Me.V2NIM_ERROR_CODE_CANCELLED && (clearTimeout(this.timer), this.timer = setTimeout(this.setOriginTimetick.bind(this), this.failedDelay)));
          }
          if (!m2)
            return this.core.logger.warn(`${u2} Calculate Delay time incorrect format`), void (this.config.enable = false);
          var I2 = Date.now() - h2;
          this.doSet(m2, I2);
        }
      }
    });
  }
  doSet(t2, o2) {
    var a2 = "TimeOrigin::setOriginTimetick:";
    o2 > this.config.tolerantRTT ? (this.logger.warn(`${a2} denied RTT:${o2}`), clearTimeout(this.timer), this.timer = setTimeout(this.setOriginTimetick.bind(this), this.failedDelay)) : o2 > this.config.bestRTT ? (this.serverOrigin.rtt && o2 >= this.serverOrigin.rtt ? this.logger.warn(`${a2} ignore RTT:${o2}`) : (this.setServerOrigin(o2, t2), this.logger.log(`${a2} accept reluctantly RTT:${o2}`)), clearTimeout(this.timer), this.timer = setTimeout(this.setOriginTimetick.bind(this), this.failedDelay)) : (this.setServerOrigin(o2, t2), this.logger.debug(`${a2} accept best RTT:${o2}`), this.currentChance = 0, clearTimeout(this.timer), this.timer = setTimeout(this.setOriginTimetick.bind(this), this.successDelay));
  }
  getNTPTime(t2) {
    if (void 0 === t2 && (t2 = this.getTimeNode()), this.checkNodeReliable(t2)) {
      var o2 = Math.floor(t2.time - this.serverOrigin.baseTime);
      return this.serverOrigin.timestamp + o2;
    }
    return Date.now();
  }
  checkNodeReliable(t2) {
    if (void 0 === t2 && (t2 = this.getTimeNode()), this.serverOrigin.timestamp) {
      if (0 === this.serverOrigin.baseClock)
        return true;
      var o2 = t2.clock - this.serverOrigin.baseClock, a2 = t2.time - this.serverOrigin.baseTime;
      return Math.abs(a2 - o2) < 500;
    }
    return false;
  }
  checkPerformance() {
    return "BROWSER" === Ae.platform && !("undefined" == typeof performance || !performance.now);
  }
  static checkPerformance() {
    return "BROWSER" === Ae.platform && !("undefined" == typeof performance || !performance.now);
  }
  getTimeNode() {
    return { clock: this.checkPerformance() ? performance.now() : 0, time: Date.now() };
  }
  static getTimeNode() {
    return { clock: _TimeOrigin.checkPerformance() ? performance.now() : 0, time: Date.now() };
  }
  setServerOrigin(t2, o2) {
    this.serverOrigin = { timestamp: o2 + Math.floor(t2 / 2), rtt: t2, baseClock: this.checkPerformance() ? performance.now() : 0, baseTime: Date.now() };
  }
};
var we = { user_id: "", trace_id: "", action: 7, exception_service: 6, duration: 0, start_time: 0, state: 1, extension: [] };
var ReporterHookLinkKeep = class {
  constructor(t2, o2) {
    this.traceData = we, this.core = t2, this.traceData = Object.assign({}, we, o2), this.traceData.extension = [];
  }
  reset() {
    this.traceData = Object.assign({}, we), this.traceData.extension = [];
  }
  start() {
    var t2, o2;
    this.reset(), this.traceData.user_id = this.core.account, this.traceData.trace_id = (null === (o2 = null === (t2 = this.core.clientSocket) || void 0 === t2 ? void 0 : t2.socket) || void 0 === o2 ? void 0 : o2.sessionId) || "", this.traceData.start_time = (/* @__PURE__ */ new Date()).getTime();
  }
  update(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var { net_type: o2, net_connect: a2 } = yield Ae.net.getNetworkStatus();
      this.traceData.extension.push(Object.assign({ code: 0, foreground: true, foreg_backg_switch: false, net_type: o2, net_connect: a2 }, t2));
    });
  }
  end(t2) {
    var o2 = this.traceData.extension[0], a2 = this.traceData.extension[1];
    if (o2 && 0 === o2.operation_type && a2 && 1 === a2.operation_type) {
      var m2 = o2.net_type !== a2.net_type || o2.net_connect !== a2.net_connect;
      if (t2 || !m2)
        return this.traceData.duration = (/* @__PURE__ */ new Date()).getTime() - this.traceData.start_time, this.core.reporter.report("exceptions", this.traceData), void this.reset();
      this.reset();
    } else
      this.reset();
  }
};
var De = { user_id: "", trace_id: "", net_connect: true, net_type: 0, duration: 0, start_time: 0, history: [], succeed: false };
var ReporterHookLBS = class {
  constructor(t2) {
    this.traceData = De, this.core = t2, this.reset();
  }
  reset() {
    this.traceData = Object.assign({}, De), this.traceData.history = [];
  }
  start(t2) {
    this.reset(), this.traceData.user_id = t2, this.traceData.start_time = Date.now();
  }
  updateBegin(t2) {
    this.traceData.history.push(Object.assign({ head: "", body: "", start_time: Date.now(), httpdns: false, index: 0 }, t2));
  }
  updateComplete(t2) {
    this.traceData.history.forEach((o2) => {
      o2.target === t2.target && (Object.assign(o2, t2), o2.duration = Date.now() - o2.start_time);
    });
  }
  end(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.traceData.succeed = t2, this.traceData.history = this.traceData.history.filter((t3) => void 0 !== t3.code), 0 !== this.traceData.history.length) {
        this.traceData.duration = Date.now() - this.traceData.start_time;
        var { net_type: o2, net_connect: a2 } = yield Ae.net.getNetworkStatus();
        this.traceData.net_type = o2, this.traceData.net_connect = a2, this.core.reporter.report("nim_sdk_lbs_records", this.traceData), this.reset();
      } else
        this.reset();
    });
  }
};
function getIsDataReportEnable(t2) {
  var o2, a2, m2 = true;
  return "boolean" == typeof (null === (o2 = null == t2 ? void 0 : t2.reporterConfig) || void 0 === o2 ? void 0 : o2.enableCompass) ? m2 = t2.reporterConfig.enableCompass : "boolean" == typeof (null === (a2 = null == t2 ? void 0 : t2.reporterConfig) || void 0 === a2 ? void 0 : a2.isDataReportEnable) && (m2 = t2.reporterConfig.isDataReportEnable), m2;
}
var Ue = { user_id: "", trace_id: "", action: 0, state: 0, duration: 0, start_time: 0, offset: 0, full_size: 0, transferred_size: 0, operation_type: 0, remote_addr: "" };
var xe = "ReporterHook::setMonitorForResources:";
var ReporterHookCloudStorage = class {
  constructor(t2, o2) {
    this.traceData = Ue, this.core = t2, this.traceData = Object.assign({}, Ue, o2);
  }
  reset() {
    this.traceData = Object.assign({}, Ue);
  }
  start() {
    var t2, o2;
    this.reset(), this.traceData.user_id = this.core.account, this.traceData.trace_id = (null === (o2 = null === (t2 = this.core.clientSocket) || void 0 === t2 ? void 0 : t2.socket) || void 0 === o2 ? void 0 : o2.sessionId) || "", this.traceData.start_time = "timeOrigin" in this.core ? this.core.timeOrigin.getNTPTime() : Date.now();
  }
  update(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.traceData.user_id && (this.core.logger.log(`${xe} upload update`, t2), Object.assign(this.traceData, t2));
    });
  }
  end(t2) {
    this.traceData.user_id && (this.core.logger.log(`${xe} upload end cause of ${t2}`), this.traceData.state = t2, this.traceData.duration = ("timeOrigin" in this.core ? this.core.timeOrigin.getNTPTime() : Date.now()) - this.traceData.start_time, this.core.reporter.report("nim_sdk_resources", this.traceData), this.traceData = Ue);
  }
};
var Fe = {};
var Be = {};
var $e = {};
var je = { apiVersion: "v1", debugLevel: "off", needReconnect: true, reconnectionAttempts: Number.MAX_SAFE_INTEGER, lbsUrls: ["https://lbs.netease.im/lbs/webconf.jsp"], linkUrl: "weblink.netease.im:443", abtestUrl: ke, isAbtestEnable: true };
var NIM$1 = class _NIM$1 extends ve {
  constructor(t2, o2 = {}) {
    if (super(), this.instanceName = "NIM", this.pluginMap = {}, this.eventBus = new ve(), this.options = {}, this.V2NIMConversationIdUtil = {}, this.V2NIMMessageCreator = {}, this.V2NIMMessageAttachmentCreator = {}, this.V2NIMClientAntispamUtil = {}, this.DataStructureConverter = {}, this.V2NIMMessageConverter = {}, this.V2NIMMessageLogUtil = {}, this.V2NIMMessageExtendUtil = {}, this.V2NIMStorageUtil = {}, this.V2NIMNotificationService = {}, this.V2NIMStorageService = {}, this.auth = {}, this.V1NIMLoginService = {}, this.V2NIMLoginService = {}, this.clientSocket = {}, this.V2NIMSyncService = {}, this.V2NIMLocalConversationService = {}, this.V2NIMConversationService = {}, this.V2NIMConversationGroupService = {}, this.V2NIMMessageService = {}, this.V2NIMTeamService = {}, this.V2NIMUserService = {}, this.V2NIMFriendService = {}, this.V2NIMSettingService = {}, this.V2NIMAIService = {}, this.V2NIMSignallingService = {}, this.V2NIMSubscriptionService = {}, this.V2NIMPassthroughService = {}, this.YSFService = {}, this.offlinePush = {}, this.sync = {}, this.msg = {}, this.msgLog = {}, this.session = {}, this.cloudSession = {}, this.misc = {}, this.user = {}, this.friend = {}, this.systemMessage = {}, this.team = {}, this.event = {}, this.msgExtend = {}, this.cloudStorage = {}, this.passThrough = {}, this.superTeam = {}, this.plugin = {}, this.signaling = {}, this.qchatChannel = {}, this.qchatMedia = {}, this.qchatMsg = {}, this.qchatRole = {}, this.qchatServer = {}, this.pluginMap = $e, this.logger = new Logger(t2.debugLevel, o2.loggerConfig), o2.privateConf) {
      var { authConfig: a2, cloudStorageConfig: m2, reporterConfig: u2 } = this.getConfigFromPrivate(o2.privateConf);
      Object.assign(t2, a2), this.setInitOptions(t2), this.otherOptions = Object.assign(Object.assign({}, o2), { cloudStorageConfig: Object.assign(Object.assign({ storageKeyPrefix: "NIM" }, o2.cloudStorageConfig), m2), reporterConfig: Object.assign(Object.assign({}, o2.reporterConfig), u2), V1NIMLoginServiceConfig: Object.assign(Object.assign(Object.assign({}, t2), o2.V1NIMLoginServiceConfig), a2), V2NIMLoginServiceConfig: Object.assign(Object.assign({}, o2.V2NIMLoginServiceConfig), a2) });
    } else
      this.setInitOptions(t2), this.otherOptions = Object.assign(Object.assign({}, o2), { V1NIMLoginServiceConfig: Object.assign(Object.assign({}, t2), o2.V1NIMLoginServiceConfig), cloudStorageConfig: Object.assign({ storageKeyPrefix: "NIM" }, o2.cloudStorageConfig) });
    this.timerManager = new TimerManager(), this.timeOrigin = new TimeOrigin(this), this.adapters = new CoreAdapters(this), this.abtest = new ABTest(this, Object.assign(Object.assign({ isAbtestEnable: this.options.isAbtestEnable, abtestUrl: this.options.abtestUrl }, this.otherOptions.abtestConfig), { abtestProjectKey: "imElite_sdk_abtest_web" }));
    var h2 = Ae.getSystemInfo(), g2 = function getCompassDataEndpoint(t3, o3) {
      var a3, m3, u3 = null === (a3 = null == o3 ? void 0 : o3.reporterConfig) || void 0 === a3 ? void 0 : a3.compassDataEndpoint, h3 = null === (m3 = null == o3 ? void 0 : o3.reporterConfig) || void 0 === m3 ? void 0 : m3.reportConfigUrl;
      if (u3)
        return u3;
      if (h3) {
        var g3 = h3.match(/^https:\/\/([^/]+)\/*/);
        if (Array.isArray(g3) && g3.length >= 1)
          return `https://${g3[1]}`;
        t3.error(`Invalid reportConfigUrl: ${h3}`);
      }
      return pendingIsMiniappEnv() ? "https://statistic.live.126.net" : "https://statistic.live.126.net,https://statistic-overseas.yunxinfw.com";
    }(this.logger, this.otherOptions);
    this.reporter = new fe(Object.assign(Object.assign({}, g2 ? { compassDataEndpoint: g2 } : {}), { isDataReportEnable: getIsDataReportEnable(this.otherOptions), common: { app_key: t2.appkey, dev_id: "", platform: "Web", sdk_ver: "10.9.41", env: "online", os_name: h2.os, os_ver: h2.osVer, lib_env: h2.libEnv, host_env: h2.hostEnv, host_env_ver: h2.hostEnvVer, manufactor: h2.manufactor, model: h2.model, v2: "v1" !== this.options.apiVersion }, request: Ae.request, logger: this.logger, autoStart: true })), this.reporterHookLinkKeep = new ReporterHookLinkKeep(this), this.reporterHookCloudStorage = new ReporterHookCloudStorage(this), this.reporterHookLBS = new ReporterHookLBS(this), this.getServiceKeys(Object.keys(Fe)).forEach((t3) => {
      if (!this[t3] || !this[t3].name) {
        var o3 = Fe[t3];
        this[t3] = new o3(this);
      }
    }), Object.keys(Fe).forEach((t3) => {
      this.callSetOptions(t3);
    }), Object.keys(Be).forEach((t3) => {
      var o3 = Be[t3];
      void 0 !== o3 && (this[t3] = new o3(this));
    }), _NIM$1.instance = this, this.logger.log(`NIM init, version:10.9.41, sdk version:100941, appkey:${t2.appkey}`);
  }
  getServiceKeys(t2) {
    var o2 = t2.findIndex((t3) => "V1NIMLoginService" === t3);
    if (o2 > -1) {
      var a2 = t2[o2];
      t2.splice(o2, 1), "v1" === this.options.apiVersion && t2.unshift(a2);
    }
    var m2 = t2.findIndex((t3) => "V2NIMLoginService" === t3);
    if (m2 > -1) {
      var u2 = t2[m2];
      t2.splice(m2, 1), "v2" === this.options.apiVersion && t2.unshift(u2);
    }
    var h2 = t2.findIndex((t3) => "sync" === t3);
    if (h2 > -1) {
      var g2 = t2[h2];
      t2.splice(h2, 1), "v1" === this.options.apiVersion && t2.push(g2);
    }
    var I2 = t2.findIndex((t3) => "V2NIMSyncService" === t3);
    if (I2 > -1) {
      var M2 = t2[I2];
      t2.splice(I2, 1), "v2" === this.options.apiVersion && t2.push(M2);
    }
    return t2;
  }
  static getInstance(t2, o2) {
    if (!_NIM$1.instance) {
      if (t2)
        return new _NIM$1(t2, o2);
      throw new Error("Instance not exist, please input options");
    }
    if (t2) {
      if (_NIM$1.instance.options.account === t2.account && _NIM$1.instance.options.appkey === t2.appkey)
        return _NIM$1.instance.setOptions(t2), _NIM$1.instance;
      throw new Error("Unexpected login");
    }
    return _NIM$1.instance;
  }
  setInitOptions(t2) {
    validate({ appkey: { type: "string" }, apiVersion: { type: "enum", values: ["v1", "v2"], required: false }, binaryWebsocket: { type: "boolean", required: false }, needReconnect: { type: "boolean", required: false }, reconnectionAttempts: { type: "number", required: false }, customClientType: { type: "number", min: 1, required: false }, authType: { type: "number", min: 0, max: 2, required: false }, lbsUrls: { type: "array", itemType: "string", min: 1, required: false }, linkUrl: { type: "string", allowEmpty: false, required: false } }, t2), this.options = Object.assign(Object.assign({}, je), t2);
  }
  getConfigFromPrivate(t2) {
    var o2;
    return t2 ? { authConfig: JSON.parse(JSON.stringify({ appkey: t2.appkey || void 0, lbsUrls: t2.weblbsUrl ? [t2.weblbsUrl] : void 0, linkUrl: t2.link_web || void 0, linkSSL: null !== (o2 = t2.websdkSsl) && void 0 !== o2 ? o2 : void 0 })), cloudStorageConfig: JSON.parse(JSON.stringify({ chunkUploadHost: t2.nos_uploader || void 0, commonUploadHost: t2.nos_uploader || void 0, commonUploadHostBackupList: t2.nos_uploader ? [t2.nos_uploader] : void 0, chunkUploadHostBackupList: t2.nos_uploader ? [t2.nos_uploader] : void 0, uploadReplaceFormat: t2.nos_downloader_v2 ? `${t2.nosSsl ? "https://" : "http://"}${t2.nos_downloader_v2}` : void 0, downloadUrl: void 0 !== t2.nos_accelerate ? t2.nos_accelerate : void 0, downloadHostList: "" === t2.nos_accelerate_host ? [] : "string" == typeof t2.nos_accelerate_host ? [t2.nos_accelerate_host] : Array.isArray(t2.nos_accelerate_host) ? t2.nos_accelerate_host : void 0 })), reporterConfig: JSON.parse(JSON.stringify({ enableCompass: "boolean" == typeof t2.enableCompass ? t2.enableCompass : void 0, compassDataEndpoint: t2.compassDataEndpoint || void 0 })) } : { authConfig: {}, cloudStorageConfig: {}, reporterConfig: {} };
  }
  connect(t2 = {}) {
    return this.V1NIMLoginService.login(t2);
  }
  setOptions(t2) {
    if ("object" == typeof t2 && null !== t2) {
      if (Object.prototype.hasOwnProperty.call(t2, "account") && t2.account !== this.options.account || Object.prototype.hasOwnProperty.call(t2, "appkey") && t2.appkey !== this.options.appkey)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "NIM::setOptions account and appkey is not allowed to reset" } });
      if (Object.prototype.hasOwnProperty.call(t2, "apiVersion") && t2.apiVersion !== this.options.apiVersion)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "NIM::setOptions apiVersion is not allowed to reset" } });
      if (Object.prototype.hasOwnProperty.call(t2, "binaryWebsocket") && t2.binaryWebsocket !== this.options.binaryWebsocket)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "NIM::setOptions binaryWebsocket is not allowed to reset" } });
      validate({ token: { type: "string", required: false }, needReconnect: { type: "boolean", required: false }, reconnectionAttempts: { type: "number", required: false }, customClientType: { type: "number", min: 1, required: false }, authType: { type: "number", min: 0, max: 2, required: false }, lbsUrls: { type: "array", itemType: "string", min: 1, required: false }, linkUrl: { type: "string", allowEmpty: false, required: false } }, t2), this.logger.log("NIM::setOptions options is", t2), this.options = Object.assign(Object.assign({}, this.options), t2), this.V1NIMLoginService.setOptions && this.V1NIMLoginService.setOptions(this.options);
    }
  }
  getOptions() {
    return this.options;
  }
  disconnect() {
    return this.V1NIMLoginService.logout();
  }
  _disconnect() {
    return "v1" === this.options.apiVersion ? this.V1NIMLoginService.logout() : "v2" === this.options.apiVersion ? 0 === get(this.V2NIMLoginService, "lifeCycle.connectStatus") && 0 === get(this.V2NIMLoginService, "lifeCycle.loginStatus") ? Promise.resolve() : this.V2NIMLoginService.logout() : Promise.resolve();
  }
  destroy() {
    return _NIM$1.instance = void 0, this._disconnect().then(() => {
      this.status = "destroyed", this.removeAllListeners(), this.eventBus.removeAllListeners(), this.logger.destroy(), this.reporter.destroy(), this.timerManager.destroy(), this._clearModuleData("destroy"), this._removeAllModuleListeners(), this.connect = emptyFuncWithPromise, this.disconnect = emptyFuncWithPromise, this._disconnect = emptyFuncWithPromise, this.destroy = emptyFuncWithPromise;
    });
  }
  _clearModuleData(t2 = "logout") {
    Object.values(this).forEach((o2) => {
      o2 && "function" == typeof o2.reset && o2.reset(t2);
    });
  }
  _removeAllModuleListeners() {
    Object.values(this).forEach((t2) => {
      t2 && "function" == typeof t2.removeAllListeners && t2.removeAllListeners();
    });
  }
  kick(t2) {
    return this.V1NIMLoginService.kick(t2);
  }
  sendCmd(t2, o2, a2) {
    return this.clientSocket.sendCmd(t2, o2, a2);
  }
  emit(t2, ...o2) {
    try {
      var a2 = Date.now(), m2 = super.emit(t2, ...o2), u2 = Date.now() - a2;
      return u2 >= 10 && this.logger.warn(`Core::emit event: ${t2} process takes: ${u2}ms`), m2;
    } catch (o3) {
      return this.logger.error(`Core::emit event: ${t2}. Error: ${o3}`), setTimeout(() => {
        throw this.logger.error(`Core::emit throw error in setTimeout. event: ${t2}. Error: ${o3}`), o3;
      }, 0), false;
    }
  }
  get account() {
    return this.auth.account;
  }
  get status() {
    return this.V1NIMLoginService.status;
  }
  set status(t2) {
    this.V1NIMLoginService.status = t2;
  }
  get config() {
    return { timeout: 8e3, deviceId: this.auth.deviceId };
  }
  _registerDep(t2, o2) {
    this[o2] && this[o2].name || (this[o2] = new t2(this), this.callSetOptions(o2));
  }
  callSetOptions(t2) {
    var o2 = `${t2}Config`, a2 = `${t2}Options`, m2 = this.otherOptions[o2] || this.otherOptions[a2] || {}, u2 = get(this, `${t2}.setOptions`);
    "function" == typeof u2 && ("cloudStorage" === t2 && (m2 = this.otherOptions[o2] || this.otherOptions.serverConfig || {}), u2.call(this[t2], m2));
  }
  static registerService(t2, o2) {
    Fe[o2] = t2;
  }
  static registerPrivateService(t2, o2) {
    Be[o2] = t2;
  }
  static registerPlugin(t2, o2) {
    $e[o2] = t2;
  }
};
NIM$1.sdkVersion = 100941, NIM$1.sdkVersionFormat = "10.9.41";
var Ge = {};
var qe = {};
function createCmd(t2, o2, a2, m2) {
  var u2 = Ge[t2];
  if (!u2)
    return a2.error("createCmd:: can not find cmd config: ", t2), null;
  var h2 = { SER: o2, SID: u2.sid, CID: u2.cid, Q: [] };
  return u2.params && m2 && u2.params.forEach(function(t3) {
    var o3 = m2[t3.name];
    if (null != o3) {
      var a3 = t3.type, { reflectMapper: u3, select: g2 } = t3;
      switch (t3.type) {
        case "PropertyArray":
          a3 = "ArrayMable", o3 = o3.map((t4) => ({ t: "Property", v: u3 ? serialize(t4, u3, g2) : t4 }));
          break;
        case "Property":
          o3 = u3 ? serialize(o3, u3, g2) : o3;
          break;
        case "Bool":
          o3 = o3 ? "true" : "false";
      }
      h2.Q.push({ t: a3, v: o3 });
    }
  }), { packet: h2, hasPacketResponse: "boolean" != typeof u2.hasPacketResponse || u2.hasPacketResponse, hasPacketTimer: "boolean" != typeof u2.hasPacketTimer || u2.hasPacketTimer };
}
function parseCmd(t2, o2) {
  var a2;
  try {
    a2 = JSON.parse(t2);
  } catch (a3) {
    return void o2.error(`Parse command error:"${t2}"`);
  }
  var m2 = a2.sid + "_" + a2.cid, u2 = a2.r;
  if (["4_1", "4_2", "4_10", "4_11"].includes(m2)) {
    var h2 = a2.r[1].headerPacket;
    m2 = `${h2.sid}_${h2.cid}`, a2.sid = h2.sid, a2.cid = h2.cid, u2 = a2.r[1].body;
  }
  var g2 = qe[m2], I2 = [];
  if (g2 && g2.length > 0) {
    for (var M2 of g2)
      I2.push(parseEachCmd(a2, M2.config, M2.cmd, u2, o2));
    return I2;
  }
  o2.error("parseCmd:: mapper not exist", m2, a2.code);
}
function parseEachCmd(t2, o2, a2, m2, u2) {
  var h2, g2 = { cmd: a2, raw: t2, error: null, service: null == o2 ? void 0 : o2.service, content: {}, __receiveTimeNode: TimeOrigin.getTimeNode() };
  (18 === o2.sid || o2.sid >= 26 && o2.sid < 100) && (t2.code = function toReadableCode(t3) {
    if ("number" != typeof t3 || t3 != t3)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INTERNAL, detail: { reason: "Read code failed", rawData: `${t3}` } });
    if (t3 < 0 || t3 >= 0 && t3 < 1e3 || t3 >= 2e4 && t3 <= 20099)
      return t3;
    var o3 = (65535 & t3) >> 9;
    o3 -= o3 <= 38 ? 1 : 2;
    return 1e5 + 1e3 * o3 + (511 & t3);
  }(t2.code));
  var I2 = function genCmdError(t3, o3) {
    var a3 = _e[t3], m3 = Se[t3];
    return null === m3 ? null : new V2NIMErrorImpl({ code: t3, desc: a3 || m3 || t3, detail: { cmd: o3, timetag: Date.now() } });
  }(t2.code, a2);
  if (g2.error = I2, g2.error) {
    if (g2.error.detail.cmd = a2, !(null === (h2 = null == o2 ? void 0 : o2.ignoreErrCodes) || void 0 === h2 ? void 0 : h2.includes(t2.code)))
      return g2;
    u2.warn("parseCmd:: ignore error ", g2.error), g2.error.detail.ignore = true;
  }
  return o2.response && o2.response.forEach((t3, o3) => {
    var a3 = m2[o3], u3 = t3.type, h3 = t3.name, I3 = t3.reflectMapper;
    if (void 0 !== a3)
      switch (u3) {
        case "Property":
          g2.content[h3] = I3 ? deserialize(a3, I3) : a3;
          break;
        case "PropertyArray":
          g2.content[h3] = a3.map((t4) => I3 ? deserialize(t4, I3) : t4);
          break;
        case "Int":
        case "Long":
        case "Byte":
          g2.content[h3] = +a3;
          break;
        case "Bool":
          g2.content[h3] = "true" === a3 || true === a3 || 1 === a3;
          break;
        default:
          g2.content[h3] = a3;
      }
  }), g2;
}
function serialize(t2, o2, a2) {
  var m2 = {};
  for (var u2 in t2 = function flattenObjByMapper(t3, o3) {
    var a3 = {};
    for (var m3 in o3) {
      var u3 = o3[m3], h3 = "number" == typeof u3 ? m3 : u3.access ? u3.access : m3, g3 = h3.split("."), I3 = t3;
      for (var M2 of g3) {
        if (void 0 === I3[M2] || null === I3[M2]) {
          I3 = void 0;
          break;
        }
        I3 = I3[M2];
      }
      void 0 !== I3 && (a3[h3] = I3);
    }
    return a3;
  }(t2, o2), o2) {
    var h2 = o2[u2], g2 = "number" == typeof h2 ? u2 : h2.access ? h2.access : u2;
    if (!a2 || a2.includes(u2))
      if (g2 in t2) {
        if ("number" == typeof h2)
          m2[h2] = t2[g2];
        else if ("object" == typeof h2)
          if (h2.converter) {
            var I2 = h2.converter(t2[g2], t2);
            void 0 !== I2 && (m2[h2.id] = I2);
          } else
            m2[h2.id] = t2[g2];
      } else
        "object" == typeof h2 && h2.def && ("function" == typeof h2.def ? m2[h2.id] = h2.def(t2) : m2[h2.id] = h2.def);
  }
  return m2;
}
function deserialize(t2, o2) {
  var a2 = {};
  for (var m2 in t2) {
    var u2 = o2[m2];
    if ("string" == typeof u2)
      a2[u2] = t2[m2];
    else if ("object" == typeof u2 && "prop" in u2) {
      var h2 = u2.access ? u2.access : u2.prop;
      if (u2.converter) {
        var g2 = u2.converter(t2[m2], t2);
        void 0 !== g2 && (a2[h2] = g2);
      } else
        u2.type && "number" === u2.type ? a2[h2] = +t2[m2] : u2.type && "boolean" === u2.type ? a2[h2] = !("0" === t2[m2] || !t2[m2]) : a2[h2] = t2[m2];
    }
  }
  for (var I2 in o2) {
    var M2 = o2[I2];
    if (M2 && void 0 !== M2.def) {
      var _2 = M2.access ? M2.access : M2.prop;
      _2 in a2 || ("function" == typeof M2.def ? a2[_2] = M2.def(t2) : a2[_2] = M2.def);
    }
  }
  return a2 = function unflattenObj(t3) {
    var o3 = {}, _loop = function(a4) {
      var m3 = a4.split(".");
      m3.reduce(function(o4, u3, h3) {
        return o4[u3] || (o4[u3] = isNaN(Number(m3[h3 + 1])) ? m3.length - 1 == h3 ? t3[a4] : {} : []);
      }, o3);
    };
    for (var a3 in t3)
      _loop(a3);
    return o3;
  }(a2), a2;
}
function registerParser(t2) {
  for (var o2 in Object.assign(Ge, t2.cmdConfig), t2.cmdMap) {
    var a2 = t2.cmdMap[o2], m2 = t2.cmdConfig[a2];
    if (m2)
      if (Array.isArray(qe[o2])) {
        var u2 = false;
        for (var h2 of qe[o2])
          if (h2.cmd === a2 && h2.config.service === m2.service) {
            u2 = true;
            break;
          }
        u2 || qe[o2].push({ config: m2, cmd: a2 });
      } else
        qe[o2] = [{ config: m2, cmd: a2 }];
  }
}
function invertSerializeItem(t2) {
  var o2 = {};
  for (var a2 in t2) {
    var m2 = t2[a2];
    "number" == typeof m2 ? o2[m2] = a2 : "object" == typeof m2 && (o2[m2.id] = { prop: a2, type: m2.retType, access: m2.retAccess ? m2.retAccess : m2.access ? m2.access : a2, def: m2.retDef, converter: m2.retConverter });
  }
  return o2;
}
function boolToInt(t2) {
  return t2 ? 1 : 0;
}
function intToBool(t2) {
  return 1 === parseInt(t2);
}
function objectToJSONString(t2) {
  if (t2 && "object" == typeof t2)
    try {
      return JSON.stringify(t2);
    } catch (t3) {
      return;
    }
}
function stringToJSONObject(t2) {
  if (t2 && "string" == typeof t2)
    try {
      return JSON.parse(t2);
    } catch (t3) {
      return;
    }
}
function format(t2, o2) {
  if (!isPlainObject(o2))
    return {};
  var a2 = JSON.parse(JSON.stringify(o2)), m2 = doFormat(t2, a2);
  return JSON.parse(JSON.stringify(Object.assign(Object.assign({}, a2), m2)));
}
function doFormat(t2, o2) {
  if (!isPlainObject(o2))
    return {};
  var a2 = {};
  return Object.keys(t2).forEach((m2) => {
    var u2 = t2[m2].type;
    if ("string" != typeof u2) {
      var h2 = doFormat(t2[m2], o2);
      Object.keys(h2).length > 0 && (a2[m2] = h2);
    } else {
      var g2 = t2[m2], I2 = g2.rawKey || m2, M2 = He[u2](o2, I2, g2);
      void 0 !== M2 && (o2[I2] = void 0, a2[m2] = M2);
    }
  }), a2;
}
var He = { number: function(t2, o2) {
  if (void 0 !== t2[o2])
    return +t2[o2];
}, string: function(t2, o2) {
  if (void 0 !== t2[o2])
    return t2[o2];
}, boolean: function(t2, o2) {
  return +t2[o2] > 0 || 0 != +t2[o2] && void 0;
}, enum: function(t2, o2, a2) {
  return a2.values[t2[o2]];
}, object: function(t2, o2) {
  if (void 0 !== t2[o2])
    try {
      return JSON.parse(t2[o2]);
    } catch (t3) {
      return {};
    }
} };
function formatLoginInfo(t2) {
  return format({ type: { type: "number" }, port: { type: "number" }, customClientType: { type: "number" }, timestamp: { type: "number" }, loginType: { type: "number" } }, t2);
}
var ze = { "26_3": "v2Login", "26_5": "v2Logout", "26_8": "v2KickOffline", "26_9": "v2BeKicked", "26_10": "v2LoginClientChange", "36_1": "v2GetChatroomLinkAddress" };
var Ye = { "1_2": "heartbeat", "2_7": "nimLoginClientChange", "24_8": "qchatLoginClientChange" };
var Ke = { webLoginReqTag: { clientType: 3, os: 4, sdkVersion: 6, appLogin: 8, protocolVersion: 9, pushTokenName: 10, pushToken: 11, clientId: 13, appkey: 18, account: 19, browser: 24, clientSession: 26, deviceInfo: 32, isReactNative: 112, customTag: 38, customClientType: 39, sdkHumanVersion: 40, hostEnv: 41, userAgent: 42, libEnv: 44, authType: 115, thirdPartyExtension: 116, env: 119, isRoutable: 120, token: 1e3 }, mixAuthRepTag: { clientId: 1, consid: 2, clientIP: 3, port: 4, type: 5, customClientType: 6, timestamp: 7, customTag: 8, os: 9, pushType: 10, hasTokenPreviously: 11, loginType: 12 }, nimAuthRepTag: { type: 3, os: 4, mac: 5, clientId: 13, account: 19, deviceInfo: 32, customTag: 38, customClientType: 39, consid: 102, clientIP: 103, port: 104, timestamp: 109, pushType: 110, hasTokenPreviously: 111 }, qchatAuthRepTag: { clientId: 8, consid: 102, clientIP: 103, port: 104, type: 6, customClientType: 13, timestamp: 105, os: 30, pushType: 100, hasTokenPreviously: 101 } };
var We = { v2Login: { sid: 26, cid: 3, service: "auth", params: [{ type: "Property", name: "tag", reflectMapper: Ke.webLoginReqTag }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Ke.mixAuthRepTag) }, { type: "PropertyArray", name: "loginClients", reflectMapper: invertSerializeItem(Ke.mixAuthRepTag) }] }, v2Logout: { sid: 26, cid: 5, service: "auth" }, v2KickOffline: { sid: 26, cid: 8, service: "auth", params: [{ type: "StrArray", name: "clientIds" }], response: [{ type: "StrArray", name: "clientIds" }] }, v2BeKicked: { sid: 26, cid: 9, service: "auth", response: [{ type: "Int", name: "clientType" }, { type: "Int", name: "reason" }, { type: "String", name: "reasonDesc" }, { type: "Int", name: "customClientType" }] }, v2LoginClientChange: { sid: 26, cid: 10, service: "auth", response: [{ type: "Byte", name: "state" }, { type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Ke.mixAuthRepTag) }] }, v2GetChatroomLinkAddress: { sid: 36, cid: 1, service: "auth", params: [{ type: "Long", name: "roomId" }, { type: "Bool", name: "miniProgram" }], response: [{ type: "StrArray", name: "linkAddress" }] } };
var Je = { heartbeat: { sid: 1, cid: 2, service: "auth" }, nimLoginClientChange: { sid: 2, cid: 7, service: "auth", response: [{ type: "Byte", name: "state" }, { type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Ke.nimAuthRepTag) }] }, qchatLoginClientChange: { sid: 24, cid: 8, service: "auth", response: [{ type: "Byte", name: "state" }, { type: "Property", name: "data", reflectMapper: invertSerializeItem(Ke.qchatAuthRepTag) }] } };
var Xe = Backoff;
function Backoff(t2) {
  t2 = t2 || {}, this.ms = t2.min || 100, this.max = t2.max || 1e4, this.factor = t2.factor || 2, this.jitter = t2.jitter > 0 && t2.jitter <= 1 ? t2.jitter : 0, this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var t2 = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var o2 = Math.random(), a2 = Math.floor(o2 * this.jitter * t2);
    t2 = 0 == (1 & Math.floor(10 * o2)) ? t2 - a2 : t2 + a2;
  }
  return 0 | Math.min(t2, this.max);
}, Backoff.prototype.reset = function() {
  this.attempts = 0;
}, Backoff.prototype.setMin = function(t2) {
  this.ms = t2;
}, Backoff.prototype.setMax = function(t2) {
  this.max = t2;
}, Backoff.prototype.setJitter = function(t2) {
  this.jitter = t2;
};
var abs = function(t2) {
  var o2;
  if (void 0 !== t2)
    return (o2 = BigNumber(t2)).sign = 1, o2;
};
var isArray = function(t2) {
  return "[object Array]" === Object.prototype.toString.call(t2);
};
var isValidType = function(t2) {
  return ["number" == typeof t2, "string" == typeof t2 && t2.length > 0, isArray(t2) && t2.length > 0, t2 instanceof BigNumber].some(function(t3) {
    return true === t3;
  });
};
var Qe = "Invalid Number";
var Ze = "Invalid Number - Division By Zero";
function BigNumber(t2) {
  var o2;
  if (!(this instanceof BigNumber))
    return new BigNumber(t2);
  if (this.number = [], this.sign = 1, this.rest = 0, isValidType(t2)) {
    if (isArray(t2)) {
      for ((t2.length && "-" === t2[0] || "+" === t2[0]) && (this.sign = "+" === t2[0] ? 1 : -1, t2.shift(0)), o2 = t2.length - 1; o2 >= 0; o2--)
        if (!this.addDigit(t2[o2]))
          return;
    } else
      for ("-" !== (t2 = t2.toString()).charAt(0) && "+" !== t2.charAt(0) || (this.sign = "+" === t2.charAt(0) ? 1 : -1, t2 = t2.substring(1)), o2 = t2.length - 1; o2 >= 0; o2--)
        if (!this.addDigit(parseInt(t2.charAt(o2), 10)))
          return;
  } else
    this.number = Qe;
}
BigNumber.prototype.addDigit = function(t2) {
  return function(t3) {
    return /^\d$/.test(t3);
  }(t2) ? (this.number.push(t2), this) : (this.number = Qe, false);
}, BigNumber.prototype._compare = function(t2) {
  var o2, a2;
  if (!isValidType(t2))
    return null;
  if (o2 = BigNumber(t2), this.sign !== o2.sign)
    return this.sign;
  if (this.number.length > o2.number.length)
    return this.sign;
  if (this.number.length < o2.number.length)
    return -1 * this.sign;
  for (a2 = this.number.length - 1; a2 >= 0; a2--) {
    if (this.number[a2] > o2.number[a2])
      return this.sign;
    if (this.number[a2] < o2.number[a2])
      return -1 * this.sign;
  }
  return 0;
}, BigNumber.prototype.gt = function(t2) {
  return this._compare(t2) > 0;
}, BigNumber.prototype.gte = function(t2) {
  return this._compare(t2) >= 0;
}, BigNumber.prototype.equals = function(t2) {
  return 0 === this._compare(t2);
}, BigNumber.prototype.lte = function(t2) {
  return this._compare(t2) <= 0;
}, BigNumber.prototype.lt = function(t2) {
  return this._compare(t2) < 0;
}, BigNumber.prototype.subtract = function(t2) {
  var o2;
  return void 0 === t2 ? this : (o2 = BigNumber(t2), this.sign !== o2.sign ? (this.number = BigNumber._add(this, o2), this) : (this.sign = this.lt(o2) ? -1 : 1, this.number = abs(this).lt(abs(o2)) ? BigNumber._subtract(o2, this) : BigNumber._subtract(this, o2), this));
}, BigNumber._add = function(t2, o2) {
  var a2, m2 = 0, u2 = Math.max(t2.number.length, o2.number.length);
  for (a2 = 0; a2 < u2 || m2 > 0; a2++)
    t2.number[a2] = (m2 += (t2.number[a2] || 0) + (o2.number[a2] || 0)) % 10, m2 = Math.floor(m2 / 10);
  return t2.number;
}, BigNumber._subtract = function(t2, o2) {
  var a2, m2 = 0, u2 = t2.number.length;
  for (a2 = 0; a2 < u2; a2++)
    t2.number[a2] -= (o2.number[a2] || 0) + m2, t2.number[a2] += 10 * (m2 = t2.number[a2] < 0 ? 1 : 0);
  for (a2 = 0, u2 = t2.number.length - 1; 0 === t2.number[u2 - a2] && u2 - a2 > 0; )
    a2++;
  return a2 > 0 && t2.number.splice(-a2), t2.number;
}, BigNumber.prototype.multiply = function(t2) {
  if (void 0 === t2)
    return this;
  var o2, a2, m2 = BigNumber(t2), u2 = 0, h2 = [];
  if (this.isZero() || m2.isZero())
    return BigNumber(0);
  for (this.sign *= m2.sign, o2 = 0; o2 < this.number.length; o2++)
    for (u2 = 0, a2 = 0; a2 < m2.number.length || u2 > 0; a2++)
      h2[o2 + a2] = (u2 += (h2[o2 + a2] || 0) + this.number[o2] * (m2.number[a2] || 0)) % 10, u2 = Math.floor(u2 / 10);
  return this.number = h2, this;
}, BigNumber.prototype.divide = function(t2) {
  if (void 0 === t2)
    return this;
  var o2, a2, m2 = BigNumber(t2), u2 = [], h2 = BigNumber(0);
  if (m2.isZero())
    return this.number = Ze, this;
  if (this.isZero())
    return this.rest = BigNumber(0), this;
  if (this.sign *= m2.sign, m2.sign = 1, 1 === m2.number.length && 1 === m2.number[0])
    return this.rest = BigNumber(0), this;
  for (o2 = this.number.length - 1; o2 >= 0; o2--)
    for (h2.multiply(10), h2.number[0] = this.number[o2], u2[o2] = 0; m2.lte(h2); )
      u2[o2]++, h2.subtract(m2);
  for (o2 = 0, a2 = u2.length - 1; 0 === u2[a2 - o2] && a2 - o2 > 0; )
    o2++;
  return o2 > 0 && u2.splice(-o2), this.rest = h2, this.number = u2, this;
}, BigNumber.prototype.mod = function(t2) {
  return this.divide(t2).rest;
}, BigNumber.prototype.isZero = function() {
  var t2;
  for (t2 = 0; t2 < this.number.length; t2++)
    if (0 !== this.number[t2])
      return false;
  return true;
}, BigNumber.prototype.toString = function() {
  var t2, o2 = "";
  if ("string" == typeof this.number)
    return this.number;
  for (t2 = this.number.length - 1; t2 >= 0; t2--)
    o2 += this.number[t2];
  return this.sign > 0 ? o2 : "-" + o2;
};
var et;
var rt = Math.pow(2, 32);
function varintToBytes(t2) {
  for (var o2 = new Uint8Array(5), a2 = new DataView(o2.buffer), m2 = 0; 0 != (4294967168 & t2); )
    a2.setUint8(m2++, 127 & t2 | 128), t2 >>>= 7;
  return a2.setUint8(m2++, 127 & t2), o2.slice(0, m2);
}
function decodeText(t2) {
  return "function" == typeof TextDecoder ? new TextDecoder("utf-8").decode(t2) : function textDecoder(t3) {
    for (var o2 = "", a2 = 0; a2 < t3.length; ) {
      var m2 = t3[a2], u2 = 0, h2 = 0;
      if (m2 <= 127 ? (u2 = 0, h2 = 255 & m2) : m2 <= 223 ? (u2 = 1, h2 = 31 & m2) : m2 <= 239 ? (u2 = 2, h2 = 15 & m2) : m2 <= 244 && (u2 = 3, h2 = 7 & m2), t3.length - a2 - u2 > 0)
        for (var g2 = 0; g2 < u2; )
          h2 = h2 << 6 | 63 & (m2 = t3[a2 + g2 + 1]), g2 += 1;
      else
        h2 = 65533, u2 = t3.length - a2;
      o2 += String.fromCodePoint(h2), a2 += u2 + 1;
    }
    return o2;
  }(t2);
}
var Unpack = class {
  constructor(t2) {
    this.offset = 0, this.buffer = new Uint8Array(t2), this.view = new DataView(t2);
  }
  checkBufferBoundaryAccess() {
    return this.offset >= this.buffer.byteLength;
  }
  length() {
    var t2;
    return (null === (t2 = this.view) || void 0 === t2 ? void 0 : t2.byteLength) || 0;
  }
  getBuffer() {
    return this.view.buffer;
  }
  getOffset() {
    return this.offset;
  }
  popRaw(t2) {
    try {
      var o2 = this.buffer.slice(this.offset, this.offset + t2);
      return this.offset += t2, o2;
    } catch (t3) {
      throw new Error(`UnpackException raw ${t3 && t3.message}`);
    }
  }
  popByte() {
    try {
      var t2 = this.view.getUint8(this.offset);
      return this.offset += 1, t2;
    } catch (t3) {
      throw new Error(`UnpackException byte ${t3 && t3.message}`);
    }
  }
  popVarbin() {
    return this.popRaw(this.popVarInt());
  }
  popString() {
    try {
      return decodeText(this.popVarbin());
    } catch (t2) {
      throw new Error(`UnpackException string ${t2 && t2.message}`);
    }
  }
  popInt() {
    try {
      var t2 = this.view.getUint32(this.offset, true);
      return this.offset += 4, t2;
    } catch (t3) {
      throw new Error(`UnpackException int ${t3 && t3.message}`);
    }
  }
  popVarInt() {
    var t2 = 1, o2 = 0, a2 = 0, m2 = 0;
    do {
      if (o2 += (127 & (a2 = this.popByte())) * t2, t2 *= 128, (m2 += 1) > 5)
        throw new Error("Variable length quantity is too long");
    } while (0 != (128 & a2));
    return o2;
  }
  popLong() {
    try {
      var t2 = function getBigUint64(t3, o2 = false) {
        var a2 = new DataView(t3.buffer), [m2, u2] = o2 ? [4, 0] : [0, 4], h2 = a2.getUint32(m2, o2), g2 = a2.getUint32(u2, o2);
        return h2 > 0 ? h2 * rt + g2 : g2;
      }(this.buffer.slice(this.offset, this.offset + 8), true);
      return this.offset += 8, Number(t2);
    } catch (t3) {
      throw new Error(`UnpackException long ${t3 && t3.message}`);
    }
  }
  popShort() {
    try {
      var t2 = this.view.getUint16(this.offset, true);
      return this.offset += 2, t2;
    } catch (t3) {
      throw new Error(`UnpackException short ${t3 && t3.message}`);
    }
  }
  popBoolean() {
    return this.popByte() > 0;
  }
  toString() {
    return Array.from(new Uint8Array(this.buffer)).toString();
  }
  reset() {
    this.offset = 0, this.buffer = null, this.view = null;
  }
};
var PacketDecoder = class _PacketDecoder {
  constructor(t2) {
    this.packetLength = 0, this.serviceId = 0, this.commandId = 0, this.serialId = 0, this.tag = 0, this.resCode = 200, this.innerHeader = null, this.msgId = 0, this.bodyArr = [], this.unpack = new Unpack(t2);
  }
  reset() {
    this.innerHeader = null, this.bodyArr = [], this.unpack.reset();
  }
  getBodyDetail() {
    return this.bodyArr.join("");
  }
  unmarshalHeader() {
    var t2 = this._unmarshalHeader();
    this.packetLength = t2.packetLength, this.serviceId = t2.serviceId, this.commandId = t2.commandId, this.serialId = t2.serialId, this.tag = t2.tag, this.resCode = t2.resCode, 4 === t2.serviceId && [1, 2, 10, 11].includes(t2.commandId) && (this.msgId = this.unmarshalLong(), this.innerHeader = this._unmarshalHeader());
  }
  _unmarshalHeader() {
    var t2 = this.unpack.popVarInt(), o2 = this.unpack.popByte(), a2 = this.unpack.popByte(), m2 = this.unpack.popShort(), u2 = this.unpack.popByte(), h2 = 200;
    return this.hasRescode(u2) && (h2 = this.unpack.popShort()), { packetLength: t2, serviceId: o2, commandId: a2, serialId: m2, tag: u2, resCode: h2 };
  }
  hasRescode(t2) {
    return 0 != ((t2 = t2 || this.tag) & _PacketDecoder.RES_CODE);
  }
  getHeader() {
    return { packetLength: this.packetLength, sid: this.serviceId, cid: this.commandId, ser: this.serialId, code: this.resCode };
  }
  getInnerHeader() {
    return this.innerHeader ? { sid: this.innerHeader.serviceId, cid: this.innerHeader.commandId } : null;
  }
  unmarshalProperty() {
    var t2 = this.unpack.popVarInt(), o2 = {};
    this.bodyArr.push(`
Property(${t2}) {`);
    for (var a2 = 0; a2 < t2; a2++) {
      var m2 = this.unpack.popVarInt();
      this.bodyArr.push(`${m2}:`);
      var u2 = this.unpack.popString();
      this.bodyArr.push(`"${u2.length} ${this.unpack.getOffset()}",`), o2[m2] = u2;
    }
    return this.bodyArr.push("},"), o2;
  }
  unmarshalPropertyArray() {
    var t2 = this.unpack.popVarInt(), o2 = [];
    this.bodyArr.push(`
PropertyArray(${t2}) [`);
    for (var a2 = 0; a2 < t2; a2++)
      o2.push(this.unmarshalProperty());
    return this.bodyArr.push("],"), o2;
  }
  unmarshalLong() {
    var t2 = this.unpack.popLong();
    return this.bodyArr.push(`
Long:${t2}`), t2;
  }
  unmarshalLongArray() {
    var t2 = this.unpack.popVarInt(), o2 = [];
    this.bodyArr.push(`
LongArray ${t2}:`);
    for (var a2 = 0; a2 < t2; a2++) {
      var m2 = this.unpack.popLong();
      this.bodyArr.push(`${m2},`), o2.push(m2);
    }
    return o2;
  }
  unmarshalStrArray() {
    var t2 = this.unpack.popVarInt(), o2 = [];
    this.bodyArr.push(`
StrArray ${t2}:`);
    for (var a2 = 0; a2 < t2; a2++) {
      var m2 = this.unpack.popString();
      this.bodyArr.push(`${m2},`), o2.push(m2);
    }
    return o2;
  }
  unmarshalStrLongMap() {
    var t2 = this.unpack.popVarInt(), o2 = {};
    this.bodyArr.push(`
StrLongMap ${t2}:`);
    for (var a2 = 0; a2 < t2; a2++) {
      var m2 = this.unpack.popString();
      this.bodyArr.push(`${m2},`);
      var u2 = this.unpack.popLong();
      this.bodyArr.push(`${u2};`), o2[m2] = u2;
    }
    return o2;
  }
  unmarshalStrStrMap() {
    var t2 = this.unpack.popVarInt(), o2 = {};
    this.bodyArr.push(`
StrStrMap ${t2}:`);
    for (var a2 = 0; a2 < t2; a2++) {
      var m2 = this.unpack.popString();
      this.bodyArr.push(`${m2},`);
      var u2 = this.unpack.popString();
      this.bodyArr.push(`${u2};`), o2[m2] = u2;
    }
    return o2;
  }
  unmarshalLongLongMap() {
    var t2 = this.unpack.popVarInt(), o2 = {};
    this.bodyArr.push(`
StrLongLongMap ${t2}:`);
    for (var a2 = 0; a2 < t2; a2++) {
      var m2 = this.unpack.popLong();
      this.bodyArr.push(`${m2},`);
      var u2 = this.unpack.popLong();
      this.bodyArr.push(`${u2};`), o2[m2] = u2;
    }
    return { m_map: o2 };
  }
  unmarshalKVArray() {
    var t2 = this.unpack.popVarInt(), o2 = [];
    this.bodyArr.push(`
KVArray ${t2}:`);
    for (var a2 = 0; a2 < t2; a2++)
      o2.push(this.unmarshalStrStrMap());
    return o2;
  }
  unmarshal(t2) {
    var o2 = Object.assign(Object.assign({}, this.getHeader()), { r: [] });
    if (this.innerHeader && (o2.r[0] = this.msgId, o2.r[1] = { body: [], headerPacket: this.getInnerHeader() }), ![200, 406, 808, 810, 7101].includes(o2.code))
      return JSON.stringify(o2);
    if (this.packetLength > 0 && this.packetLength > this.unpack.length())
      throw new Error(`UnpackException packetLength(${this.packetLength}) greater than bufferLength(${this.unpack.length()})`);
    var a2 = [];
    return t2 && t2.forEach((t3) => {
      if (!this.unpack.checkBufferBoundaryAccess())
        switch (t3.type) {
          case "PropertyArray":
            a2.push(this.unmarshalPropertyArray());
            break;
          case "Property":
            a2.push(this.unmarshalProperty());
            break;
          case "Byte":
            a2.push(this.unpack.popByte());
            break;
          case "Int":
            a2.push(this.unpack.popInt());
            break;
          case "Bool":
            a2.push(this.unpack.popBoolean());
            break;
          case "Long":
            a2.push(this.unmarshalLong());
            break;
          case "LongArray":
            a2.push(this.unmarshalLongArray());
            break;
          case "String":
            a2.push(this.unpack.popString());
            break;
          case "StrArray":
            a2.push(this.unmarshalStrArray());
            break;
          case "StrStrMap":
            a2.push(this.unmarshalStrStrMap());
            break;
          case "StrLongMap":
            a2.push(this.unmarshalStrLongMap());
            break;
          case "LongLongMap":
            a2.push(this.unmarshalLongLongMap());
            break;
          case "KVArray":
            a2.push(this.unmarshalKVArray());
        }
    }), this.innerHeader ? o2.r[1].body = a2 : o2.r = a2, JSON.stringify(o2);
  }
};
PacketDecoder.RES_CODE = 2;
var Pack = class {
  constructor() {
    this.offset = 0, this.pageSize = 1024, this.capacity = 1048576, this.buffer = new Uint8Array(this.pageSize), this.view = new DataView(this.buffer.buffer);
  }
  reset() {
    this.offset = 0, this.buffer = null, this.view = null;
  }
  size() {
    return this.offset;
  }
  getBuffer() {
    return this.buffer.slice(0, this.offset).buffer;
  }
  ensureCapacity(t2) {
    var o2 = this.offset + t2;
    if (o2 > this.capacity)
      throw new Error("PackException over limit");
    if (o2 > this.buffer.byteLength) {
      var a2 = Math.ceil(o2 / this.pageSize) * this.pageSize, m2 = new Uint8Array(a2);
      m2.set(this.buffer), this.buffer = m2, this.view = new DataView(this.buffer.buffer);
    }
  }
  putRaw(t2) {
    this.ensureCapacity(t2.length);
    try {
      this.buffer.set(t2, this.offset), this.offset += t2.length;
    } catch (t3) {
      throw new Error("PackException raw");
    }
  }
  putByte(t2) {
    this.ensureCapacity(1);
    try {
      this.view.setUint8(this.offset++, t2);
    } catch (t3) {
      throw new Error("PackException byte");
    }
  }
  putString(t2) {
    try {
      var o2 = function encodeText(t3) {
        if ("function" == typeof TextEncoder)
          return new TextEncoder().encode(t3);
        var o3 = function textEncoder(t4) {
          for (var o4 = [], a2 = t4.length, m2 = 0; m2 < a2; ) {
            var u2 = t4.codePointAt(m2), h2 = 0, g2 = 0;
            for (u2 <= 127 ? (h2 = 0, g2 = 0) : u2 <= 2047 ? (h2 = 6, g2 = 192) : u2 <= 65535 ? (h2 = 12, g2 = 224) : u2 <= 2097151 && (h2 = 18, g2 = 240), o4.push(g2 | u2 >> h2), h2 -= 6; h2 >= 0; )
              o4.push(128 | u2 >> h2 & 63), h2 -= 6;
            m2 += u2 >= 65536 ? 2 : 1;
          }
          return o4;
        }(t3);
        return new Uint8Array(o3);
      }(t2);
      this.putVarbin(o2);
    } catch (t3) {
      throw new Error("PackException string");
    }
  }
  putInt(t2) {
    this.ensureCapacity(4);
    try {
      this.view.setInt32(this.offset, t2, true), this.offset += 4;
    } catch (t3) {
      throw new Error("PackException int");
    }
  }
  putVarInt(t2) {
    var o2 = varintToBytes(t2);
    this.putRaw(o2);
  }
  putBoolean(t2) {
    this.ensureCapacity(1);
    try {
      this.view.setUint8(this.offset++, t2 ? 1 : 0);
    } catch (t3) {
      throw new Error("PackException boolean");
    }
  }
  putLong(t2) {
    this.ensureCapacity(8);
    try {
      var o2 = function setBigUint64(t3, o3 = false) {
        var a2 = new Uint8Array(8), m2 = new DataView(a2.buffer), u2 = Number(t3 > rt - 1 ? t3 / rt : 0), h2 = Number(4294967295 & t3), [g2, I2] = o3 ? [4, 0] : [0, 4];
        return m2.setUint32(g2, u2, o3), m2.setUint32(I2, h2, o3), a2;
      }(t2, true);
      this.buffer.set(o2, this.offset), this.offset += 8;
    } catch (t3) {
      throw new Error("PackException long");
    }
  }
  putStringAsLong(t2) {
    this.ensureCapacity(8);
    try {
      var o2 = function setBigUint64ForNumberOverflow(t3, o3 = false) {
        var a2 = new Uint8Array(8), m2 = new DataView(a2.buffer), u2 = BigNumber(t3).divide(rt).number.reverse().join(""), h2 = BigNumber(t3).mod(rt).number.reverse().join(""), g2 = Number(u2), I2 = Number(h2), [M2, _2] = o3 ? [4, 0] : [0, 4];
        return m2.setUint32(M2, g2, o3), m2.setUint32(_2, I2, o3), a2;
      }(t2, true);
      this.buffer.set(o2, this.offset), this.offset += 8;
    } catch (t3) {
      throw new Error("PackException stringAsLong");
    }
  }
  putShort(t2) {
    this.ensureCapacity(2);
    try {
      this.view.setInt16(this.offset, t2, true), this.offset += 2;
    } catch (t3) {
      throw new Error("PackException short");
    }
  }
  putVarbin(t2) {
    if (!t2)
      return this.ensureCapacity(1), this.putVarInt(0);
    if (t2.byteLength > Math.pow(2, 31) - 2)
      throw new Error("PackException varbin. too long");
    var o2 = varintToBytes(t2.length);
    this.ensureCapacity(o2.length + t2.length);
    try {
      this.buffer.set(o2, this.offset), this.offset += o2.length, this.buffer.set(t2, this.offset), this.offset += t2.length;
    } catch (t3) {
      throw new Error("PackException varbin");
    }
  }
};
function isConvertibleToNumber(t2) {
  if ("number" != typeof t2) {
    if (null == t2)
      return false;
    t2 = Number(t2);
  }
  if (isNaN(t2))
    throw new Error("Number type conversion error");
  return true;
}
function isUndefinedOrNull(t2) {
  return null == t2;
}
var PacketEncoder = class {
  constructor(t2, o2, a2) {
    this.pack = new Pack(), this.packetLength = 0, this.serviceId = 0, this.commandId = 0, this.serialId = 0, this.tag = 0, this.serviceId = t2, this.commandId = o2, this.serialId = a2;
  }
  marshalHeader() {
    this.pack.putVarInt(this.packetLength), this.pack.putByte(this.serviceId), this.pack.putByte(this.commandId), this.pack.putShort(this.serialId), this.pack.putByte(this.tag);
  }
  marshalProperty(t2) {
    var o2 = Object.keys(t2).filter((t3) => !isUndefinedOrNull(t3));
    this.pack.putVarInt(o2.length), o2.forEach((o3) => {
      this.pack.putVarInt(Number(o3)), Array.isArray(t2[o3]) || "[object Object]" === Object.prototype.toString.call(t2[o3]) ? this.pack.putString(JSON.stringify(t2[o3])) : this.pack.putString(String(t2[o3]));
    });
  }
  marshalPropertyArray(t2) {
    var o2 = t2.length;
    this.pack.putVarInt(o2), t2.forEach((t3) => {
      this.marshalProperty(null == t3 ? void 0 : t3.v);
    });
  }
  marshalStrArray(t2) {
    var o2 = t2.filter((t3) => !isUndefinedOrNull(t3)), a2 = o2.length;
    this.pack.putVarInt(a2), o2.forEach((t3) => {
      this.pack.putString(String(t3));
    });
  }
  marshalLongArray(t2) {
    var o2 = t2.filter((t3) => isConvertibleToNumber(t3)), a2 = o2.length;
    this.pack.putVarInt(a2), o2.forEach((t3) => {
      this.putLong(t3);
    });
  }
  marshalStrStrMap(t2) {
    var o2 = Object.keys(t2).filter((o3) => !isUndefinedOrNull(t2[o3]) && !isUndefinedOrNull(o3));
    this.pack.putVarInt(o2.length), o2.forEach((o3) => {
      this.pack.putString(String(o3)), this.pack.putString(String(t2[o3]));
    });
  }
  marshalStrLongMap(t2) {
    var o2 = Object.keys(t2).filter((o3) => isConvertibleToNumber(t2[o3]) && !isUndefinedOrNull(o3));
    this.pack.putVarInt(o2.length), o2.forEach((o3) => {
      this.pack.putString(String(o3)), this.putLong(t2[o3]);
    });
  }
  marshalLongLongMap(t2) {
    var o2 = Object.keys(t2).filter((o3) => {
      var a2 = Number(o3);
      return isConvertibleToNumber(a2) && isConvertibleToNumber(t2[a2]);
    });
    this.pack.putVarInt(o2.length), o2.forEach((o3) => {
      var a2 = Number(o3);
      this.putLong(a2), this.putLong(t2[a2]);
    });
  }
  marshalKVArray(t2) {
    var o2 = t2.length;
    this.pack.putVarInt(o2), t2.forEach((t3) => {
      this.marshalStrStrMap(t3);
    });
  }
  putLong(t2) {
    "string" == typeof t2 && t2.length > 15 ? this.pack.putStringAsLong(t2) : this.pack.putLong(Number(t2));
  }
  marshal(t2, o2) {
    return this.marshalHeader(), o2 && o2.forEach((o3, a2) => {
      var m2, u2 = o3.type, h2 = null === (m2 = t2[a2]) || void 0 === m2 ? void 0 : m2.v;
      if (!isUndefinedOrNull(h2))
        switch (u2) {
          case "PropertyArray":
            this.marshalPropertyArray(h2);
            break;
          case "Property":
            this.marshalProperty(h2);
            break;
          case "Byte":
            if (!isConvertibleToNumber(h2))
              return;
            this.pack.putByte(Number(h2));
            break;
          case "Int":
            if (!isConvertibleToNumber(h2))
              return;
            this.pack.putInt(Number(h2));
            break;
          case "Bool":
            "false" === h2 ? h2 = false : "true" === h2 && (h2 = true), this.pack.putBoolean(h2);
            break;
          case "Long":
            if (!isConvertibleToNumber(h2))
              return;
            this.putLong(h2);
            break;
          case "LongArray":
            this.marshalLongArray(h2);
            break;
          case "String":
            this.pack.putString(String(h2));
            break;
          case "StrArray":
            this.marshalStrArray(h2);
            break;
          case "StrStrMap":
            this.marshalStrStrMap(h2);
            break;
          case "StrLongMap":
            this.marshalStrLongMap(h2);
            break;
          case "LongLongMap":
            this.marshalLongLongMap(h2);
            break;
          case "KVArray":
            this.marshalKVArray(h2);
        }
    }), this.pack.getBuffer();
  }
  reset() {
    this.pack.reset();
  }
};
var BaseWebsocket$1 = class extends ve {
  constructor(t2, o2, a2) {
    super(), this.websocket = null, this.socketConnectTimer = 0, this.linkSSL = true, this.url = "", this.core = t2, this.url = o2, this.linkSSL = a2, this.status = "disconnected", this.logger = t2.logger, this.connect();
  }
  connect() {
    "connecting" !== this.status && "connected" !== this.status ? (this.status = "connecting", this._createWebsocket(`${this.linkSSL ? "wss" : "ws"}://${this.url}/websocket`)) : this.logger.warn("imsocket::socket is connecting or connected", this.status);
  }
  close() {
    if (this.status = "disconnected", this.websocket) {
      this.logger.log("imsocket:: close websocket");
      try {
        this.websocket.close();
      } catch (t2) {
        this.logger.warn("imsocket::attempt to close websocket error", t2);
      }
      this.clean(), this.emit("disconnect");
    }
  }
  clean() {
    this.status = "disconnected", clearTimeout(this.socketConnectTimer), this.websocket && (this.socketUrl = void 0, this.websocket.onmessage = null, this.websocket.onopen = null, this.websocket.onerror = null, this.websocket.onclose = null, this.websocket = null);
  }
  onConnect() {
    this.status = "connected", this.emit("connect"), clearTimeout(this.socketConnectTimer);
  }
  _createWebsocket(t2) {
    this.socketConnectTimer = setTimeout(() => {
      this.logger.error("imsocket::Websocket connect timeout. url: ", t2), this.emit("connectFailed", new V2NIMErrorImpl({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_CONNECT_TIMEOUT : 415, detail: { reason: `imsocket::Websocket connect timeout. url: ${t2}` } }));
    }, this.core.options.socketConnectTimeout || 8e3), this.socketUrl = t2, this.websocket = new Ae.WebSocket(t2), this.websocket.binaryType = "arraybuffer", this.websocket.onmessage = this.onMessage.bind(this), this.websocket.onclose = (t3) => {
      t3 = t3 || {}, this.logger.log(`imsocket::Websocket onclose done ${t3.wasClean}/${t3.code}/${t3.reason}`), "connected" === this.status ? (this.clean(), this.emit("disconnect")) : (this.clean(), this.emit("connectFailed", new V2NIMErrorImpl({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_CONNECT_FAILED : 414, detail: { reason: "imsocket::Websocket onclose done" } })));
    }, this.websocket.onerror = (t3) => {
      this.logger.error("imsocket::Websocket onerror", t3), "connected" === this.status ? (this.clean(), this.emit("disconnect")) : (this.clean(), this.emit("connectFailed", new V2NIMErrorImpl({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_CONNECT_FAILED : 414, detail: { reason: "imsocket::Websocket onerror." } })));
    }, this.websocket.onopen = () => {
      this.onConnect();
    };
  }
  onMessage(t2) {
    if (t2.data) {
      var o2 = new PacketDecoder(t2.data), a2 = { sid: -1, cid: -1, ser: -1, packetLength: -1 }, m2 = null;
      try {
        o2.unmarshalHeader(), a2 = o2.getHeader(), m2 = o2.getInnerHeader();
      } catch (o3) {
        this.reportBinaryError({ err: o3, sid: m2 ? m2.sid : null == a2 ? void 0 : a2.sid, cid: m2 ? m2.cid : null == a2 ? void 0 : a2.cid, rawBuf: t2.data, type: "decode" });
      }
      var u2 = m2 ? m2.sid : a2.sid, h2 = m2 ? m2.cid : a2.cid, g2 = `${u2}_${h2}`, I2 = qe[g2];
      if (I2 && I2.length > 0) {
        var M2, _2 = I2[0].config;
        try {
          M2 = o2.unmarshal(_2.response);
        } catch (m3) {
          var E2 = o2.getBodyDetail();
          this.reportBinaryError({ err: m3, rawBuf: t2.data, sid: u2, cid: h2, parseDetail: E2, type: "decode" }), o2.reset();
          var S2 = Object.assign(Object.assign({}, a2), { sid: u2, cid: h2, code: Me.V2NIM_ERROR_CODE_UNPACK_ERROR });
          return this.logger.error(`imsocket::onMessage "${S2.sid}_${S2.cid}", ser ${S2.ser}, packetLength ${S2.packetLength} unmarshal error. ${E2} 
`, m3), void this.emit("message", JSON.stringify(S2));
        }
        this.emit("message", M2);
      } else
        this.core.logger.warn("imsocket::onMessage cmd not found", g2);
      o2.reset();
    }
  }
  send(t2, o2, a2, m2, u2) {
    var h2, g2, I2 = new PacketEncoder(t2, o2, a2), M2 = Ge[m2], _2 = "";
    try {
      _2 = JSON.stringify(u2), g2 = I2.marshal(JSON.parse(_2), M2.params);
    } catch (m3) {
      throw this.reportBinaryError({ err: m3, sid: t2, cid: o2, rawStr: _2, type: "encode" }), I2.reset(), new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_PACK_ERROR, detail: { reason: `${t2}-${o2}, ser ${a2} marshal error`, rawError: m3 } });
    }
    null === (h2 = this.websocket) || void 0 === h2 || h2.send(g2), I2.reset();
  }
  reportBinaryError(t2) {
    var o2, a2, m2, { err: u2, rawStr: h2, sid: g2, cid: I2, type: M2, parseDetail: _2 } = t2, E2 = t2.rawBuf;
    if (E2) {
      try {
        m2 = function arrayBufferToBase64(t3) {
          if ("function" != typeof btoa)
            return "";
          for (var o3 = "", a3 = new Uint8Array(t3), m3 = a3.byteLength, u3 = 0; u3 < m3; u3++)
            o3 += String.fromCharCode(a3[u3]);
          return a3 = null, btoa(o3);
        }(E2);
      } catch (t3) {
        m2 = `reportBinaryError::arrayBufferToBase64 parsing failed, error: ${null == t3 ? void 0 : t3.message}, sid: ${g2}, cid: ${I2}`, this.core.logger.error(m2);
      }
      E2 = null;
    }
    this.core.reporter.reportTraceStart("exceptions", { user_id: null === (o2 = this.core.auth) || void 0 === o2 ? void 0 : o2.account, trace_id: null === (a2 = this.core.clientSocket.socket) || void 0 === a2 ? void 0 : a2.sessionId, start_time: Date.now(), action: 2, exception_service: 9 });
    var S2 = u2 ? (`${u2.message};;;` || `${u2.code};;;`) + (_2 ? `parseDetail: ${_2};;;` : "") + (h2 ? ` rawStr: ${h2}` : "") + (m2 ? ` rawBuf: ${m2}` : "") : "";
    this.core.reporter.reportTraceUpdateV2("exceptions", { code: "encode" === M2 ? Me.V2NIM_ERROR_CODE_PACK_ERROR : Me.V2NIM_ERROR_CODE_UNPACK_ERROR, description: S2, operation_type: "encode" === M2 ? 3 : 4, target: `${g2}-${I2}` }, { asyncParams: Ae.net.getNetworkStatus() }), this.core.reporter.reportTraceEnd("exceptions", 1);
  }
};
!function(t2) {
  t2[t2.ACTIVE = 1] = "ACTIVE", t2[t2.KICKED = 2] = "KICKED", t2[t2.OFFLINE = 3] = "OFFLINE";
}(et || (et = {}));
var V2BinaryClientSocket = class {
  constructor(t2) {
    this.isReconnect = false, this.packetTimeout = 8e3, this.linkSSL = true, this.packetSer = 1, this.backoff = new Xe({ max: 8e3, min: 1600, jitter: 0.01 }), this.sendingCmdMap = /* @__PURE__ */ new Map(), this.pingTimer = 0, this.hasNetworkListener = false, this.core = t2, this.auth = t2.auth, this.logger = t2.logger, this.reporter = t2.reporter, this.timerManager = t2.timerManager, this.eventBus = t2.eventBus, this.setListener();
  }
  setListener() {
    this.core.eventBus.on("V2NIMLoginService/loginLifeCycleLoginSucc", () => {
      this.isReconnect = true;
    });
  }
  setSessionId(t2) {
    this.socket && (this.socket.sessionId = t2);
  }
  setLinkSSL(t2) {
    this.linkSSL = t2;
  }
  connect(t2, o2 = false) {
    var a2, m2;
    return __awaiter(this, void 0, void 0, function* () {
      this.isReconnect = o2;
      var u2 = this.core.auth.getConnectStatus();
      if (1 === u2) {
        var h2 = `clientSocket::connect status is ${u2}, and would not repeat connect`, g2 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_ILLEGAL_STATE, detail: { reason: h2 } });
        return this.logger.warn(h2), Promise.reject(g2);
      }
      this.auth.lifeCycle.processEvent("connect");
      try {
        yield this.auth.doLoginStepsManager.add(this.doConnect(t2)), this.logger.log(`clientSocketV2:: connect success with link url: ${t2}, isReconnect: ${o2}`), this.core.reporter.reportTraceUpdateV2("login", { operation_type: "TCP", target: t2, code: 200, mixlink: true, succeed: true }, { asyncParams: Ae.net.getNetworkStatus() }), this.auth.lifeCycle.processEvent("connectSucc");
      } catch (o3) {
        var I2 = o3;
        if (this.core.reporter.reportTraceUpdateV2("login", { operation_type: "TCP", target: t2, code: I2.code || 0, description: `connectFailed:${I2.message}`, mixlink: true, succeed: false }, { asyncParams: Ae.net.getNetworkStatus() }), I2.code === Me.V2NIM_ERROR_CODE_CANCELLED || I2.code === Me.V2NIM_ERROR_CODE_TIMEOUT)
          throw null === (a2 = this.socket) || void 0 === a2 || a2.close(), null === (m2 = this.socket) || void 0 === m2 || m2.removeAllListeners(), this.socket = void 0, o3;
        throw this.logger.warn(`clientSocketV2::connect failed with link url: ${t2}`, I2), this.auth.lifeCycle.processEvent("connectFail", I2), o3;
      }
    });
  }
  doConnect(t2) {
    var o2 = false;
    return new Promise((a2, m2) => {
      this.socket = new BaseWebsocket$1(this.core, t2, this.linkSSL), this.socket.on("connect", () => {
        this.logger.log("clientSocketV2::socket on connect", t2), this.core.reporterHookLinkKeep.start(), this.core.reporterHookLinkKeep.update({ code: 0, description: "connection begin", operation_type: 0, target: t2 }), o2 = true, a2();
      }), this.socket.on("message", this.onMessage.bind(this)), this.socket.on("disconnect", (a3) => __awaiter(this, void 0, void 0, function* () {
        o2 = true, this.logger.log(`clientSocketV2::socket on disconnect ${t2}`, a3), yield this.core.reporterHookLinkKeep.update({ code: (null == a3 ? void 0 : a3.code) || 0, description: (null == a3 ? void 0 : a3.reason) || "socket on disconnect", operation_type: 1, target: t2 }), this.core.reporterHookLinkKeep.end(false), this.doDisconnect(et.OFFLINE, "SocketOnDisconnect");
      })), this.socket.on("connectFailed", (a3) => {
        o2 ? this.ping() : (this.logger.error(`clientSocketV2::connectFailed:${t2}, reason:${a3 && a3.message}`), this.cleanSocket()), o2 = true, m2(a3);
      });
    });
  }
  cleanSocket() {
    this.socket && ("function" == typeof this.socket.removeAllListeners && this.socket.removeAllListeners(), "function" == typeof this.socket.close && this.socket.close(), this.socket = void 0);
  }
  resetSocketConfig() {
    this.backoff.reset(), this.initOnlineListener();
  }
  doDisconnect(t2, o2) {
    if (this.logger.log(`clientSocketV2::doDisconnect:type:${t2},reason:`, o2), 0 !== this.core.auth.getConnectStatus()) {
      var a2 = { 1: "close", 2: "kicked", 3: "broken" }[t2] || "";
      this.markAllCmdInvaild(new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_DISCONNECT, detail: { reason: "Packet timeout due to instance disconnect", disconnect_reason: a2 } })), this.timerManager.destroy(), clearTimeout(this.pingTimer), this.cleanSocket(), t2 === et.ACTIVE || t2 === et.KICKED ? this.destroyOnlineListener() : t2 === et.OFFLINE && (this.auth.lifeCycle.processEvent("connectionBroken", new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_DISCONNECT, detail: { reason: "connection broken due to internal reasons" } })), this.logger.log(`clientSocketV2::doDisconnect: pending reconnect ${this.isReconnect}`), this.isReconnect && this.auth.lifeCycle.processEvent("waiting"));
    } else
      this.logger.warn("clientSocketV2::doDisconnect:already disconnected");
  }
  sendCmd(t2, o2, a2) {
    var m2 = this.core.auth.getLoginStatus(), u2 = { cmd: t2 };
    if (1 !== m2 && !["v2Login", "login", "chatroomLogin", "v2ChatroomLogin"].includes(t2))
      return this.logger.warn(`clientSocketV2::NIM login status is ${m2}, so can not sendCmd ${t2}`), Promise.reject(new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_ILLEGAL_STATE, detail: Object.assign({ reason: "Can not sendCmd due to no logined" }, u2) }));
    var h2 = "heartbeat" !== t2, g2 = h2 ? this.packetSer++ : 0, I2 = createCmd(t2, g2, this.logger, o2);
    if (!I2) {
      var M2 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INTERNAL, detail: Object.assign(Object.assign({}, u2), { reason: `SendCmd::createCmd error: ${g2} ${t2}` }) });
      return this.logger.error(M2), Promise.reject(M2);
    }
    var { packet: _2, hasPacketResponse: E2, hasPacketTimer: S2 } = I2, T2 = JSON.stringify(_2);
    h2 && (this.logger.getDebugMode() ? this.logger.debug(`clientSocketV2::sendCmd: ${_2.SID}_${_2.CID},${t2},ser:${g2}`, T2) : this.logger.log(`clientSocketV2::sendCmd: ${_2.SID}_${_2.CID},${t2},ser:${g2}`));
    var C2 = (/* @__PURE__ */ new Date()).getTime();
    return new Promise((m3, h3) => {
      E2 && this.sendingCmdMap.set(g2, { cmd: t2, params: o2, callback: [m3, h3], timer: S2 ? setTimeout(() => {
        var o3 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_PROTOCOL_TIMEOUT, detail: Object.assign({ ser: g2, reason: `Packet Timeout: ser ${g2} cmd ${t2}`, timetag: (/* @__PURE__ */ new Date()).getTime() }, u2) });
        this.markCmdInvalid(g2, o3, t2);
      }, a2 && a2.timeout ? a2.timeout : this.packetTimeout) : null });
      try {
        this.socket.send(_2.SID, _2.CID, g2, t2, _2.Q), E2 || m3(_2);
      } catch (o3) {
        var I3 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_PROTOCOL_SEND_FAILED, detail: Object.assign({ ser: g2, reason: "Unable to send packet" + (o3 && o3.message ? ": " + o3.message : ""), timetag: (/* @__PURE__ */ new Date()).getTime(), rawError: o3 }, u2) });
        this.markCmdInvalid(g2, I3, t2), h3(I3);
      }
    }).catch((t3) => __awaiter(this, void 0, void 0, function* () {
      var o3 = t3;
      return [Me.V2NIM_ERROR_CODE_DISCONNECT, Me.V2NIM_ERROR_CODE_PROTOCOL_TIMEOUT, Me.V2NIM_ERROR_CODE_PROTOCOL_SEND_FAILED].includes(o3.code) ? (this.reportSendCmdFailed(o3, { sid: _2.SID, cid: _2.CID, ser: g2 }, C2), Promise.reject(o3)) : Promise.reject(o3);
    }));
  }
  reportSendCmdFailed(t2, o2, a2) {
    var m2;
    this.reporter.reportTraceStart("exceptions", { user_id: this.core.auth.getLoginUser(), trace_id: null === (m2 = this.socket) || void 0 === m2 ? void 0 : m2.sessionId, start_time: a2, action: 2, exception_service: 6 });
    var u2 = get(t2, "detail.disconnect_reason") || "", h2 = t2.code === Me.V2NIM_ERROR_CODE_DISCONNECT ? JSON.stringify({ disconnect_reason: u2 }) : t2.detail.reason;
    this.reporter.reportTraceUpdateV2("exceptions", { code: t2.code, description: h2, operation_type: 1, target: `${o2.sid}-${o2.cid}`, context: `${o2.ser}` }, { asyncParams: Ae.net.getNetworkStatus() }), this.reporter.reportTraceEnd("exceptions", 1);
  }
  onMessage(t2) {
    var o2 = parseCmd(t2, this.logger);
    if (o2 && o2.length > 0) {
      var a2 = o2[0], m2 = a2.raw.ser;
      for (var u2 of (a2.error && (this.logger.error("clientSocketV2::onMessage packet error", `${a2.raw.sid}_${a2.raw.cid}, ser:${m2},`, a2.error), a2.error.code === Me.V2NIM_ERROR_CODE_UNPACK_ERROR && this.core.eventBus.emit("BinaryClientSocket/unpackError")), "heartbeat" !== a2.cmd && (this.logger.getDebugMode() ? this.logger.debug(`clientSocketV2::recvCmd ${a2.raw.sid}_${a2.raw.cid},${a2.cmd},ser:${m2}`, t2) : this.logger.log(`clientSocketV2::recvCmd ${a2.raw.sid}_${a2.raw.cid},${a2.cmd},ser:${m2},code:${a2.raw.code}`)), o2))
        this.packetHandler(u2);
    }
  }
  packetHandler(t2) {
    var o2, a2, m2, u2;
    if (t2) {
      var h2 = t2.raw.ser, g2 = this.sendingCmdMap.get(h2);
      if (g2 && g2.cmd === t2.cmd) {
        var { callback: I2, timer: M2, params: _2 } = g2;
        if (clearTimeout(M2), t2.params = _2, this.sendingCmdMap.delete(h2), "heartbeat" === t2.cmd)
          return void I2[0]();
        var E2 = null === (a2 = null === (o2 = this.core[t2.service]) || void 0 === o2 ? void 0 : o2.process) || void 0 === a2 ? void 0 : a2.call(o2, t2);
        E2 && "function" == typeof E2.then ? E2.then((t3) => {
          I2[0](t3);
        }).catch((t3) => {
          I2[1](t3);
        }) : (this.logger.log("clientSocketV2::handlerFn without promise", t2.service, t2.cmd), I2[0](t2));
      } else {
        var S2 = null === (u2 = null === (m2 = this.core[t2.service]) || void 0 === m2 ? void 0 : m2.process) || void 0 === u2 ? void 0 : u2.call(m2, t2);
        S2 && "function" == typeof S2.then && S2.catch((t3) => {
          this.logger.error("clientSocketV2::no obj cache, no process handler", t3);
        });
      }
    }
  }
  markCmdInvalid(t2, o2, a2) {
    var m2 = this.sendingCmdMap.get(t2);
    if (m2) {
      var { callback: u2, timer: h2 } = m2;
      h2 && clearTimeout(h2), this.sendingCmdMap.delete(t2), this.logger.warn(`clientSocketV2::packet ${t2}, ${a2} is invalid:`, o2), u2[1](o2);
    }
  }
  markAllCmdInvaild(t2) {
    this.logger.log("markAllCmdInvaild", t2), this.sendingCmdMap.forEach((o2) => {
      var { callback: a2, timer: m2, cmd: u2 } = o2;
      this.logger.log(`clientSocketV2::markAllCmdInvaild:cmd ${u2}`), m2 && clearTimeout(m2), a2[1](t2);
    }), this.sendingCmdMap.clear();
  }
  ping() {
    var t2;
    return __awaiter(this, void 0, void 0, function* () {
      clearTimeout(this.pingTimer);
      try {
        yield this.sendCmd("heartbeat");
      } catch (o2) {
        if (o2.code === Me.V2NIM_ERROR_CODE_DISCONNECT)
          return;
        if (yield this.testHeartBeat5Timeout())
          return yield this.core.reporterHookLinkKeep.update({ code: 0, description: "Heartbeat-discovered link failure", operation_type: 1, target: null === (t2 = this.socket) || void 0 === t2 ? void 0 : t2.url }), this.core.reporterHookLinkKeep.end(true), void this.doDisconnect(et.OFFLINE, "PingError");
      }
      this.pingTimer = setTimeout(() => {
        this.ping();
      }, 3e4);
    });
  }
  testHeartBeat5Timeout() {
    return __awaiter(this, void 0, void 0, function* () {
      clearTimeout(this.pingTimer);
      for (var t2 = 0; t2 < 5; t2++)
        try {
          return yield this.sendCmd("heartbeat", {}, { timeout: 3e3 }), false;
        } catch (o2) {
          this.logger.log(`clientSocketV2::test heartbeat ${t2} Timeout`);
        }
      return true;
    });
  }
  initOnlineListener() {
    this.hasNetworkListener || (this.logger.log("clientSocketV2::onlineListener:init"), this.hasNetworkListener = true, Ae.net.onNetworkStatusChange((t2) => {
      this.logger.log("clientSocketV2::onlineListener:network change", t2);
      var o2 = this.auth.getLoginStatus();
      t2.isConnected && 1 === o2 ? this.ping() : t2.isConnected && 3 === o2 ? (this.logger.log("clientSocketV2::onlineListener:online and connectStatus is waiting, do reLogin"), this.auth.reconnect.clearReconnectTimer(), this.auth.reconnect.doReLogin()) : t2.isConnected || this.doDisconnect(et.OFFLINE, "OfflineListener");
    }));
  }
  destroyOnlineListener() {
    this.logger.log("clientSocketV2::onlineListener:destroy"), Ae.net.offNetworkStatusChange(), this.hasNetworkListener = false;
  }
};
var it;
var ot = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
var st = ["transport not supported", "client not handshaken", "unauthorized"];
var nt = ["reconnect"];
var BaseWebsocket = class extends ve {
  constructor(t2, o2, a2) {
    super(), this.websocket = null, this.socketConnectTimer = 0, this.url = "", this.linkSSL = true, this.core = t2, this.url = o2, this.linkSSL = a2, this.status = "disconnected", this.logger = t2.logger, this.connect();
  }
  connect() {
    "connecting" !== this.status && "connected" !== this.status ? (this.status = "connecting", this.core.adapters.request(`${this.linkSSL ? "https" : "http"}://${this.url}/socket.io/1/?t=${Date.now()}`, { method: "GET", dataType: "text", timeout: this.core.options.xhrConnectTimeout || 8e3 }, { exception_service: 6 }).then((t2) => {
      if ("connecting" === this.status) {
        var [o2, a2] = t2.data.split(":");
        return this.sessionId = o2, this.logger.log(`imsocket::XHR success. status ${this.status}, ${"connecting" === this.status ? "continue websocket connection" : "stop websocket connection"}`), this._createWebsocket(`${this.linkSSL ? "wss" : "ws"}://${this.url}/socket.io/1/websocket/${o2}`);
      }
    }).catch((t2) => {
      if ("connecting" === this.status) {
        var o2 = `imsocket::XHR fail. raw message: "${(t2 = t2 || {}).message}", code: "${t2.code}"`, a2 = t2.code;
        a2 = "v2" === get(this.core, "options.apiVersion") ? t2.code === Me.V2NIM_ERROR_CODE_CONNECT_TIMEOUT ? Me.V2NIM_ERROR_CODE_CONNECT_TIMEOUT : Me.V2NIM_ERROR_CODE_CONNECT_FAILED : 408 === t2.code ? 408 : 415;
        var m2 = new V2NIMErrorImpl({ code: a2, detail: { reason: o2, rawError: t2 } });
        this.logger.error(o2), this.status = "disconnected", this.emit("handshakeFailed", m2);
      }
    })) : this.logger.warn("imsocket::socket is connecting or connected", this.status);
  }
  close() {
    if (this.status = "disconnected", this.websocket) {
      this.logger.log("imsocket:: close websocket");
      try {
        this.websocket.send(this.encodePacket({ type: "disconnect" }));
      } catch (t2) {
        this.logger.warn("imsocket::attempt to send encodePacket error", t2);
      }
      try {
        this.websocket.close();
      } catch (t2) {
        this.logger.warn("imsocket::attempt to close websocket error", t2);
      }
      this.clean(), this.emit("disconnect", { code: 0, reason: "Active close websocket" });
    }
  }
  clean() {
    this.status = "disconnected", clearTimeout(this.socketConnectTimer), this.websocket && (this.socketUrl = void 0, this.websocket.onmessage = null, this.websocket.onopen = null, this.websocket.onerror = null, this.websocket.onclose = null, this.websocket = null);
  }
  onConnect() {
    this.status = "connected", this.emit("connect"), clearTimeout(this.socketConnectTimer);
  }
  _createWebsocket(t2) {
    this.socketConnectTimer = setTimeout(() => {
      this.logger.error("imsocket::Websocket connect timeout. url: ", this.socketUrl), this.emit("handshakeFailed", new V2NIMErrorImpl({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_CONNECT_TIMEOUT : 415, detail: { reason: `imsocket::Websocket connect timeout. url: ${this.socketUrl}` } }));
    }, this.core.options.socketConnectTimeout || 8e3), this.socketUrl = t2, this.websocket = new Ae.WebSocket(t2), this.websocket.onmessage = this.onMessage.bind(this), this.websocket.onclose = (t3) => {
      t3 = t3 || {}, this.logger.log(`imsocket::Websocket onclose done ${t3.wasClean}/${t3.code}/${t3.reason}`), this.clean(), this.emit("disconnect", { code: t3.code || 0, reason: t3.reason });
    }, this.websocket.onerror = (t3) => {
      this.logger.error("imsocket::Websocket onerror", t3), "logined" === this.core.status && this.core.clientSocket.ping();
    };
  }
  onMessage(t2) {
    var o2, a2 = this.decodePacket(t2.data);
    if (a2)
      switch (a2.type) {
        case "connect":
          this.onConnect();
          break;
        case "disconnect":
          this.close(), this.emit("disconnect", { code: 0, reason: "MessageEvent type disconnect" });
          break;
        case "message":
        case "json":
          this.emit("message", a2.data);
          break;
        case "event":
          a2.name && this.emit(a2.name, a2.args);
          break;
        case "error":
          "unauthorized" === a2.reason ? this.emit("connect_failed", a2.reason) : this.emit("error", a2.reason), this.logger.error("imsocket::Websocket connect failed, onmessage type error. url: ", this.socketUrl), clearTimeout(this.socketConnectTimer), this.emit("handshakeFailed", new V2NIMErrorImpl({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_CONNECT_FAILED : 408, detail: { reason: `imsocket::Websocket connect failed, onMessage socket error. url: ${this.socketUrl}` } }));
          break;
        case "heartbeat":
          null === (o2 = this.websocket) || void 0 === o2 || o2.send(this.encodePacket({ type: "heartbeat" }));
          break;
        default:
          this.logger.warn("imsocket::Websocket no handler type", a2.type);
      }
  }
  encodePacket(t2) {
    var o2, a2, { type: m2, id: u2 = "", endpoint: h2 = "", ack: g2 } = t2, I2 = null;
    if (!m2)
      return "";
    switch (m2) {
      case "error":
        o2 = t2.reason ? st.indexOf(t2.reason) : "", a2 = t2.advice ? nt.indexOf(t2.advice) : "", "" === o2 && "" === a2 || (I2 = o2 + ("" !== a2 ? "+" + a2 : ""));
        break;
      case "message":
        "" !== t2.data && (I2 = t2.data);
        break;
      case "event":
        o2 = { name: t2.name }, o2 = t2.args && t2.args.length ? { name: t2.name, args: t2.args } : { name: t2.name }, I2 = JSON.stringify(o2);
        break;
      case "json":
        I2 = JSON.stringify(t2.data);
        break;
      case "connect":
        t2.qs && (I2 = t2.qs);
        break;
      case "ack":
        I2 = t2.ackId + (t2.args && t2.args.length ? "+" + JSON.stringify(t2.args) : "");
    }
    var M2 = [ot.indexOf(m2), u2 + ("data" === g2 ? "+" : ""), h2];
    return null != I2 && M2.push(I2), M2.join(":");
  }
  decodePacket(t2) {
    if (t2)
      if ("�" != t2.charAt(0)) {
        var o2 = t2.match(/([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/);
        if (o2) {
          var a2, [, m2, u2, h2, g2, I2] = o2, M2 = { type: ot[+m2], endpoint: g2 };
          switch (u2 && (M2.id = u2, M2.ack = !h2 || "data"), M2.type) {
            case "error":
              a2 = I2.split("+"), M2.reason = st[+a2[0]] || "";
              break;
            case "message":
              M2.data = I2 || "";
              break;
            case "connect":
              M2.qs = I2 || "";
              break;
            case "event":
              try {
                var _2 = JSON.parse(I2);
                M2.name = _2.name, M2.args = _2.args;
              } catch (t3) {
                this.logger.error("imsocket::parseData::type::event error", t3);
              }
              M2.args = M2.args || [];
              break;
            case "json":
              try {
                M2.data = JSON.parse(I2);
              } catch (t3) {
                this.logger.error("imsocket::parseData::type::json error", t3);
              }
              break;
            case "ack":
              if ((a2 = I2.match(/^([0-9]+)(\+)?(.*)/)) && (M2.ackId = a2[1], M2.args = [], a2[3]))
                try {
                  M2.args = a2[3] ? JSON.parse(a2[3]) : [];
                } catch (t3) {
                  this.logger.error("imsocket::parseData::type::ack error", t3);
                }
          }
          return M2;
        }
      } else
        this.logger.error("imsocket::unrecognize dataStr", t2.slice(0, 20));
  }
  send(t2) {
    var o2, a2 = { data: t2, type: "message", endpoint: "" };
    null === (o2 = this.websocket) || void 0 === o2 || o2.send(this.encodePacket(a2));
  }
};
!function(t2) {
  t2[t2.ACTIVE = 1] = "ACTIVE", t2[t2.KICKED = 2] = "KICKED", t2[t2.OFFLINE = 3] = "OFFLINE";
}(it || (it = {}));
var V2ClientSocket = class {
  constructor(t2) {
    this.isReconnect = false, this.packetTimeout = 8e3, this.linkSSL = true, this.packetSer = 1, this.backoff = new Xe({ max: 8e3, min: 1600, jitter: 0.01 }), this.sendingCmdMap = /* @__PURE__ */ new Map(), this.pingTimer = 0, this.hasNetworkListener = false, this.core = t2, this.auth = t2.auth, this.logger = t2.logger, this.reporter = t2.reporter, this.timerManager = t2.timerManager, this.eventBus = t2.eventBus, this.setListener();
  }
  setListener() {
    this.core.eventBus.on("V2NIMLoginService/loginLifeCycleLoginSucc", () => {
      this.isReconnect = true;
    });
  }
  setSessionId(t2) {
    this.socket && (this.socket.sessionId = t2);
  }
  setLinkSSL(t2) {
    this.linkSSL = t2;
  }
  connect(t2, o2 = false) {
    var a2, m2;
    return __awaiter(this, void 0, void 0, function* () {
      this.isReconnect = o2;
      var u2 = this.core.auth.getConnectStatus();
      if (1 === u2) {
        var h2 = `clientSocket::connect status is ${u2}, and would not repeat connect`, g2 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_ILLEGAL_STATE, detail: { reason: h2 } });
        return this.logger.warn(h2), Promise.reject(g2);
      }
      this.auth.lifeCycle.processEvent("connect");
      try {
        yield this.auth.doLoginStepsManager.add(this.doConnect(t2)), this.logger.log(`clientSocketV2:: connect success with link url: ${t2}, isReconnect: ${o2}`), this.core.reporter.reportTraceUpdateV2("login", { operation_type: "TCP", target: t2, code: 200, mixlink: true, succeed: true }, { asyncParams: Ae.net.getNetworkStatus() }), this.auth.lifeCycle.processEvent("connectSucc");
      } catch (o3) {
        var I2 = o3;
        if (this.core.reporter.reportTraceUpdateV2("login", { operation_type: "TCP", target: t2, code: I2.code || 0, description: `connectFailed:${I2.message}`, mixlink: true, succeed: false }, { asyncParams: Ae.net.getNetworkStatus() }), I2.code === Me.V2NIM_ERROR_CODE_CANCELLED || I2.code === Me.V2NIM_ERROR_CODE_TIMEOUT)
          throw null === (a2 = this.socket) || void 0 === a2 || a2.close(), null === (m2 = this.socket) || void 0 === m2 || m2.removeAllListeners(), this.socket = void 0, o3;
        throw this.logger.warn(`clientSocketV2::connect failed with link url: ${t2}`, I2), this.auth.lifeCycle.processEvent("connectFail", I2), o3;
      }
    });
  }
  doConnect(t2) {
    var o2 = false;
    return new Promise((a2, m2) => {
      this.socket = new BaseWebsocket(this.core, t2, this.linkSSL), this.socket.on("connect", () => {
        this.logger.log("clientSocketV2::socket on connect", t2), this.core.reporterHookLinkKeep.start(), this.core.reporterHookLinkKeep.update({ code: 0, description: "connection begin", operation_type: 0, target: t2 }), o2 = true, a2();
      }), this.socket.on("message", this.onMessage.bind(this)), this.socket.on("disconnect", (a3) => __awaiter(this, void 0, void 0, function* () {
        o2 = true, this.logger.log("clientSocketV2::socket on disconnect", a3), yield this.core.reporterHookLinkKeep.update({ code: (null == a3 ? void 0 : a3.code) || 0, description: (null == a3 ? void 0 : a3.reason) || "socket on disconnect", operation_type: 1, target: t2 }), this.core.reporterHookLinkKeep.end(false), this.doDisconnect(it.OFFLINE, "SocketOnDisconnect");
      })), this.socket.on("handshakeFailed", (t3) => {
        o2 ? this.ping() : (this.logger.error(`clientSocketV2::handshake failed: "${t3 && t3.message}"`), this.cleanSocket()), o2 = true, m2(t3);
      });
    });
  }
  cleanSocket() {
    this.socket && ("function" == typeof this.socket.removeAllListeners && this.socket.removeAllListeners(), "function" == typeof this.socket.close && this.socket.close(), this.socket = void 0);
  }
  resetSocketConfig() {
    this.backoff.reset(), this.initOnlineListener();
  }
  doDisconnect(t2, o2) {
    if (this.logger.log(`clientSocketV2::doDisconnect:type:${t2},reason:`, o2), 0 !== this.core.auth.getConnectStatus()) {
      var a2 = { 1: "close", 2: "kicked", 3: "broken" }[t2] || "";
      this.markAllCmdInvaild(new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_DISCONNECT, detail: { reason: "Packet timeout due to instance disconnect", disconnect_reason: a2 } })), this.timerManager.destroy(), clearTimeout(this.pingTimer), this.cleanSocket(), t2 === it.ACTIVE || t2 === it.KICKED ? this.destroyOnlineListener() : t2 === it.OFFLINE && (this.auth.lifeCycle.processEvent("connectionBroken", new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_DISCONNECT, detail: { reason: "connection broken due to internal reasons" } })), this.logger.log(`clientSocketV2::doDisconnect: pending reconnect ${this.isReconnect}`), this.isReconnect && this.auth.lifeCycle.processEvent("waiting"));
    } else
      this.logger.warn("clientSocketV2::doDisconnect:already disconnected");
  }
  sendCmd(t2, o2, a2) {
    var m2 = this.core.auth.getLoginStatus(), u2 = { cmd: t2 };
    if (1 !== m2 && !["v2Login", "login", "chatroomLogin", "v2ChatroomLogin"].includes(t2))
      return this.logger.warn(`clientSocketV2::NIM login status is ${m2}, so can not sendCmd ${t2}`), Promise.reject(new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_ILLEGAL_STATE, detail: Object.assign({ reason: "Can not sendCmd due to no logined" }, u2) }));
    var h2 = "heartbeat" !== t2, g2 = h2 ? this.packetSer++ : 0, I2 = createCmd(t2, g2, this.logger, o2);
    if (!I2) {
      var M2 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INTERNAL, detail: Object.assign(Object.assign({}, u2), { reason: `SendCmd::createCmd error: ${g2} ${t2}` }) });
      return this.logger.error(M2), Promise.reject(M2);
    }
    var { packet: _2, hasPacketResponse: E2, hasPacketTimer: S2 } = I2, T2 = JSON.stringify(_2);
    h2 && (this.logger.getDebugMode() ? this.logger.debug(`clientSocketV2::sendCmd: ${_2.SID}_${_2.CID},${t2},ser:${g2}`, T2) : this.logger.log(`clientSocketV2::sendCmd: ${_2.SID}_${_2.CID},${t2},ser:${g2}`));
    var C2 = (/* @__PURE__ */ new Date()).getTime();
    return new Promise((m3, h3) => {
      E2 && this.sendingCmdMap.set(g2, { cmd: t2, params: o2, callback: [m3, h3], timer: S2 ? setTimeout(() => {
        var o3 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_PROTOCOL_TIMEOUT, detail: Object.assign({ ser: g2, reason: `Packet Timeout: ser ${g2} cmd ${t2}`, timetag: (/* @__PURE__ */ new Date()).getTime() }, u2) });
        this.markCmdInvalid(g2, o3, t2);
      }, a2 && a2.timeout ? a2.timeout : this.packetTimeout) : null });
      try {
        this.socket.send(T2), E2 || m3(_2);
      } catch (o3) {
        var I3 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_PROTOCOL_SEND_FAILED, detail: Object.assign({ ser: g2, reason: "Unable to send packet" + (o3 && o3.message ? ": " + o3.message : ""), timetag: (/* @__PURE__ */ new Date()).getTime(), rawError: o3 }, u2) });
        this.markCmdInvalid(g2, I3, t2), h3(I3);
      }
    }).catch((t3) => __awaiter(this, void 0, void 0, function* () {
      var o3, a3 = t3;
      if (![Me.V2NIM_ERROR_CODE_DISCONNECT, Me.V2NIM_ERROR_CODE_PROTOCOL_TIMEOUT, Me.V2NIM_ERROR_CODE_PROTOCOL_SEND_FAILED].includes(a3.code))
        return Promise.reject(a3);
      this.reporter.reportTraceStart("exceptions", { user_id: this.core.auth.getLoginUser(), trace_id: null === (o3 = this.socket) || void 0 === o3 ? void 0 : o3.sessionId, start_time: C2, action: 2, exception_service: 6 });
      var m3 = get(a3, "detail.disconnect_reason") || "", u3 = a3.code === Me.V2NIM_ERROR_CODE_DISCONNECT ? JSON.stringify({ disconnect_reason: m3 }) : a3.detail.reason;
      return this.reporter.reportTraceUpdateV2("exceptions", { code: a3.code, description: u3, operation_type: 1, target: `${_2.SID}-${_2.CID}`, context: `${_2.SER}` }, { asyncParams: Ae.net.getNetworkStatus() }), this.reporter.reportTraceEnd("exceptions", 1), Promise.reject(a3);
    }));
  }
  onMessage(t2) {
    var o2 = parseCmd(t2, this.logger);
    if (o2 && o2.length > 0) {
      var a2 = o2[0], m2 = a2.raw.ser;
      for (var u2 of (a2.error && this.logger.error("clientSocketV2::onMessage packet error", `${a2.raw.sid}_${a2.raw.cid}, ser:${m2},`, a2.error), "heartbeat" !== a2.cmd && (this.logger.getDebugMode() ? this.logger.debug(`clientSocketV2::recvCmd ${a2.raw.sid}_${a2.raw.cid},${a2.cmd},ser:${m2}`, a2.content) : this.logger.log(`clientSocketV2::recvCmd ${a2.raw.sid}_${a2.raw.cid},${a2.cmd},ser:${m2};code:${a2.raw.code}`)), o2))
        this.packetHandler(u2);
    }
  }
  packetHandler(t2) {
    var o2, a2, m2, u2;
    if (t2) {
      var h2 = t2.raw.ser, g2 = this.sendingCmdMap.get(h2);
      if (g2 && g2.cmd === t2.cmd) {
        var { callback: I2, timer: M2, params: _2 } = g2;
        if (clearTimeout(M2), t2.params = _2, this.sendingCmdMap.delete(h2), "heartbeat" === t2.cmd)
          return void I2[0]();
        var E2 = null === (a2 = null === (o2 = this.core[t2.service]) || void 0 === o2 ? void 0 : o2.process) || void 0 === a2 ? void 0 : a2.call(o2, t2);
        E2 && "function" == typeof E2.then ? E2.then((t3) => {
          I2[0](t3);
        }).catch((t3) => {
          I2[1](t3);
        }) : (this.logger.log("clientSocketV2::handlerFn without promise", t2.service, t2.cmd), I2[0](t2));
      } else {
        var S2 = null === (u2 = null === (m2 = this.core[t2.service]) || void 0 === m2 ? void 0 : m2.process) || void 0 === u2 ? void 0 : u2.call(m2, t2);
        S2 && "function" == typeof S2.then && S2.catch((t3) => {
          this.logger.error("clientSocketV2::no obj cache, no process handler", t3);
        });
      }
    }
  }
  markCmdInvalid(t2, o2, a2) {
    var m2 = this.sendingCmdMap.get(t2);
    if (m2) {
      var { callback: u2, timer: h2 } = m2;
      h2 && clearTimeout(h2), this.sendingCmdMap.delete(t2), this.logger.warn(`clientSocketV2::packet ${t2}, ${a2} is invalid:`, o2), u2[1](o2);
    }
  }
  markAllCmdInvaild(t2) {
    this.logger.log("markAllCmdInvaild", t2), this.sendingCmdMap.forEach((o2) => {
      var { callback: a2, timer: m2, cmd: u2 } = o2;
      this.logger.log(`clientSocketV2::markAllCmdInvaild:cmd ${u2}`), m2 && clearTimeout(m2), a2[1](t2);
    }), this.sendingCmdMap.clear();
  }
  ping() {
    var t2;
    return __awaiter(this, void 0, void 0, function* () {
      clearTimeout(this.pingTimer);
      try {
        yield this.sendCmd("heartbeat");
      } catch (o2) {
        if (o2.code === Me.V2NIM_ERROR_CODE_DISCONNECT)
          return;
        if (yield this.testHeartBeat5Timeout())
          return yield this.core.reporterHookLinkKeep.update({ code: 0, description: "Heartbeat-discovered link failure", operation_type: 1, target: null === (t2 = this.socket) || void 0 === t2 ? void 0 : t2.url }), this.core.reporterHookLinkKeep.end(true), void this.doDisconnect(it.OFFLINE, "PingError");
      }
      this.pingTimer = setTimeout(() => {
        this.ping();
      }, 3e4);
    });
  }
  testHeartBeat5Timeout() {
    return __awaiter(this, void 0, void 0, function* () {
      clearTimeout(this.pingTimer);
      for (var t2 = 0; t2 < 5; t2++)
        try {
          return yield this.sendCmd("heartbeat", {}, { timeout: 3e3 }), false;
        } catch (o2) {
          this.logger.log(`clientSocketV2::test heartbeat ${t2} Timeout`);
        }
      return true;
    });
  }
  initOnlineListener() {
    this.hasNetworkListener || (this.logger.log("clientSocketV2::onlineListener:init"), this.hasNetworkListener = true, Ae.net.onNetworkStatusChange((t2) => {
      this.logger.log("clientSocketV2::onlineListener:network change", t2);
      var o2 = this.auth.getConnectStatus(), a2 = this.auth.getLoginStatus();
      t2.isConnected && 1 === a2 ? this.ping() : t2.isConnected && 3 === o2 ? (this.logger.log("clientSocketV2::onlineListener:online and connectStatus is waiting, do reLogin"), this.auth.reconnect.clearReconnectTimer(), this.auth.reconnect.doReLogin()) : t2.isConnected || this.doDisconnect(it.OFFLINE, "OfflineListener");
    }));
  }
  destroyOnlineListener() {
    this.logger.log("clientSocketV2::onlineListener:destroy"), Ae.net.offNetworkStatusChange(), this.hasNetworkListener = false;
  }
};
var V2NIMLoginReconnect = class {
  constructor(t2) {
    var o2, a2;
    this.currenRetryCount = 0, this.backoff = new Xe({ max: 8e3, min: 1600, jitter: 0.01 }), this.reconnectTimer = 0, this.core = t2, this.auth = t2.V2NIMLoginService, null === (a2 = (o2 = Ae.powerMonitor).on) || void 0 === a2 || a2.call(o2, "onPowerMonitorTurnActive", () => {
      this.core.logger.debug("reconnect::powerMonitor turn active"), 3 === this.auth.getLoginStatus() && (this.core.logger.log("reconnect::powerMonitor turn active, try to reconnect"), this.auth.reconnect.clearReconnectTimer(), this.auth.reconnect.doReLogin());
    });
  }
  reset() {
    this.currenRetryCount = 0, this.backoff.reset(), this.reconnectTimer && clearTimeout(this.reconnectTimer);
  }
  destroy() {
    var t2, o2;
    this.currenRetryCount = 0, this.backoff.reset(), this.reconnectTimer && clearTimeout(this.reconnectTimer), Ae.powerMonitor.destroy(), null === (o2 = (t2 = Ae.powerMonitor).off) || void 0 === o2 || o2.call(t2, "onPowerMonitorTurnActive");
  }
  clearReconnectTimer() {
    this.reconnectTimer && clearTimeout(this.reconnectTimer);
  }
  attempToReLogin() {
    var t2 = this.backoff.duration();
    if ("function" == typeof this.reconnectDelayProvider)
      try {
        var o2 = this.reconnectDelayProvider(t2);
        "number" == typeof o2 && o2 >= 0 && (t2 = o2 >= 1e3 ? o2 : o2 + 200 + Math.ceil(300 * Math.random()));
      } catch (t3) {
        this.core.logger.error("reconnect::connectDelayProvider excute failed,", t3);
      }
    return this.currenRetryCount++, this.core.logger.log(`reconnect::reconnect timer is about to be set, delay ${t2} ms, current retry count is ${this.currenRetryCount}`), this.core.reporter.reportTraceStart("login", { user_id: this.auth.getLoginUser(), action: "auto_login", binary_websocket: this.auth.binaryWebsocket }), this.clearReconnectTimer(), this.reconnectTimer = setTimeout(() => {
      this.core.logger.log("reconnect::reconnect timer is now triggered");
      var t3 = this.auth.getConnectStatus();
      3 === t3 ? this.doReLogin() : this.core.logger.warn(`reconnect::reconnect timer is over because connect status now is ${t3}`);
    }, t2), true;
  }
  doReLogin() {
    if (!Ae.powerMonitor.isActive())
      return this.core.logger.log("reconnect::reLogin skip, cause app powerMonitor is not active"), void this.auth.lifeCycle.processEvent("waiting");
    this.auth.loginOption.forceMode = false, this.auth.originLoginPromise = this.auth.doLogin(true);
    var t2 = this.auth.previousLoginManager.add(this.auth.originLoginPromise);
    return t2.then(() => {
      this.core.reporter.reportTraceEnd("login", true);
    }).catch((t3) => {
      var o2 = t3;
      if (this.core.logger.warn("reconnect::try login but failed due to", o2), this.core.reporter.reportTraceEnd("login", false), this.auth.checkLoginTerminalCode(o2 && o2.code))
        return this.auth.clientSocket.doDisconnect(et.ACTIVE, "ReloginTerminated"), void this.auth.lifeCycle.processEvent("exited", o2);
      o2 && 399 === o2.code && this.auth.lbs.reset(), this.auth.lifeCycle.processEvent("waiting");
    }), t2;
  }
  _setReconnectDelayProvider(t2) {
    this.reconnectDelayProvider = t2;
  }
};
function uniq(t2) {
  t2 = t2 || [];
  for (var o2 = [], a2 = 0; a2 < t2.length; a2++)
    -1 === o2.indexOf(t2[a2]) && o2.push(t2[a2]);
  return o2;
}
var V2NIMLoginLbs = class {
  constructor(t2) {
    this.socketLinkUrls = [], this.timer = 0, this.failedCount = 0, this.core = t2, this.auth = t2.V2NIMLoginService;
  }
  getLbsInfos() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.socketLinkUrls.length > 0) {
        var t2 = this.socketLinkUrls.shift();
        return this.core.logger.log("V2NIMLoginService::getLbsInfos:use cache link", t2), Promise.resolve(t2);
      }
      this.auth.lifeCycle.processEvent("addressing"), this.core.reporterHookLBS.start(this.core.account);
      var o2 = uniq(this.auth.config.lbsUrls);
      try {
        var a2 = yield this.ladderLoad(o2);
        if (200 !== a2.status || !a2.data)
          throw this.core.logger.error("V1NIMLoginService::getLbsInfos:error status", a2.status, a2), new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INTERNAL, detail: { reason: `V2NIMLoginService::getLbsInfos failed, status ${a2.status}` } });
        this.success(a2);
      } catch (t3) {
        var m2 = t3;
        if (this.core.logger.error(`V2NIMLoginService::lbs getLbsInfos error, use default link: ${this.auth.config.linkUrl}. error:`, t3), this.reportForFail(o2[0], m2.code, m2.message), this.checkTerminator(m2.code))
          throw t3;
        this.socketLinkUrls = [this.auth.config.linkUrl];
      }
      return this.socketLinkUrls.shift();
    });
  }
  checkTerminator(t2) {
    return t2 === Me.V2NIM_ERROR_CODE_CANCELLED || t2 === Me.V2NIM_ERROR_CODE_TIMEOUT;
  }
  generateUrl(t2) {
    var o2 = (t2 = this.processLbsUrl(t2)).indexOf("?") > -1 ? "&" : "?";
    return t2 + o2 + "k=" + this.core.options.appkey + "&id=" + this.core.auth.getLoginUser() + "&sv=180&pv=1&networkType=0&lv=1";
  }
  processLbsUrl(t2) {
    return pendingIsMiniappEnv() ? t2.replace("/webconf", "/wxwebconf") : t2;
  }
  requstLbs(t2) {
    return this.auth.doLoginStepsManager.add(this.core.adapters.request(this.generateUrl(t2), { method: "GET", dataType: "json", timeout: 8e3 }));
  }
  setLadderTimer(t2, o2, a2, m2) {
    this.timer && clearTimeout(this.timer);
    var u2 = t2[o2];
    this.timer = setTimeout(() => {
      u2 && (this.setLadderTimer(t2, o2 + 1, a2, m2), this.core.logger.log(`V2NIMLoginService::getLbsInfos ${o2}:`, this.processLbsUrl(u2)), this.reportForLbsStart(u2, o2), this.requstLbs(u2).then((t3) => {
        this.reset(), a2(Object.assign(Object.assign({}, t3), { url: u2 }));
      }).catch((a3) => {
        var h2;
        if (this.core.logger.warn(`V2NIMLoginService::getLbsInfos ${o2} failed:`, a3), this.failedCount += 1, this.reportForFailOnce(u2, a3.code, (null === (h2 = a3.detail) || void 0 === h2 ? void 0 : h2.reason) || a3.message), this.failedCount >= t2.length || this.checkTerminator(a3.code))
          return this.reset(), void m2(a3);
      }));
    }, 2e3);
  }
  ladderLoad(t2) {
    return new Promise((o2, a2) => {
      t2.length > 1 && this.setLadderTimer(t2, 1, o2, a2);
      var m2 = t2[0];
      this.core.logger.log("V2NIMLoginService::getLbsInfos 0:", m2), this.reportForLbsStart(m2, 0), this.requstLbs(m2).then((t3) => {
        this.reset(), o2(Object.assign(Object.assign({}, t3), { url: m2 }));
      }).catch((o3) => {
        var u2;
        this.failedCount += 1, this.core.logger.warn("V2NIMLoginService::getLbsInfos 0 failed:", o3), this.reportForFailOnce(m2, o3.code, (null === (u2 = o3.detail) || void 0 === u2 ? void 0 : u2.reason) || o3.message), (this.failedCount >= t2.length || this.checkTerminator(o3.code)) && (this.reset(), a2(o3));
      });
    });
  }
  success(t2) {
    var o2, a2, m2 = t2.data.common, u2 = m2["mix.link"] || [], h2 = m2["link.default"] || [];
    this.socketLinkUrls = u2.concat(h2).concat(this.auth.config.linkUrl), t2.data["nos-chunk"] && (null === (o2 = this.core.cloudStorage) || void 0 === o2 ? void 0 : o2.setOptions) && (this.core.logger.log("getLbsInfos success. lbs.nos-chunk", t2.data["nos-chunk"]), this.core.cloudStorage.setOptions({ chunkUploadHost: t2.data["nos-chunk"] })), Array.isArray(t2.data.nosup) && t2.data.nosup.length > 0 && (null === (a2 = this.core.cloudStorage) || void 0 === a2 ? void 0 : a2.setOptions) && (this.core.logger.log("getLbsInfos success. lbs.nosup", t2.data.nosup), this.core.cloudStorage.setOptions({ commonUploadHostBackupList: t2.data.nosup, commonUploadHost: t2.data.nosup[0] })), this.core.logger.log("V2NIMLoginService::getLbsInfos success, socket link:", this.socketLinkUrls.slice(0), "chunkUploadHost: ", t2.data["nos-chunk"]), this.reportForLbsSuccess(t2.url, t2.data);
  }
  reportForLbsStart(t2, o2) {
    this.core.reporterHookLBS.updateBegin({ target: t2, index: o2 });
  }
  reportForLbsSuccess(t2, o2) {
    this.core.reporterHookLBS.updateComplete({ target: t2, code: 200, body: JSON.stringify(o2) }), this.core.reporterHookLBS.end(true), this.core.reporter.reportTraceUpdateV2("login", { operation_type: "HTTP", target: t2, code: 200, succeed: true }, { asyncParams: Ae.net.getNetworkStatus() });
  }
  reportForFailOnce(t2, o2, a2) {
    this.core.reporterHookLBS.updateComplete({ target: t2, code: o2, body: a2 });
  }
  reportForFail(t2, o2, a2) {
    this.core.reporterHookLBS.end(false), this.core.reporter.reportTraceUpdateV2("login", { operation_type: "HTTP", target: t2, description: a2, code: o2, succeed: false }, { asyncParams: Ae.net.getNetworkStatus() });
  }
  reset() {
    this.socketLinkUrls = [], this.failedCount = 0, clearTimeout(this.timer);
  }
};
var V2NIMLoginAuthenticator = class {
  constructor(t2) {
    this.lastLoginClientKey = "__NIM_LAST_LOGIN_CLIENT__", this.loginClients = [], this.loginClientOfThisConnection = {}, this.core = t2, this.auth = t2.V2NIMLoginService;
  }
  verifyAuthentication(t2) {
    var o2, a2;
    return __awaiter(this, void 0, void 0, function* () {
      var m2 = yield this.auth.doLoginStepsManager.add(this.refreshLoginToken(this.auth.account)), u2 = yield this.auth.doLoginStepsManager.add(this.refreshThirdPartyExt(this.auth.account));
      this.auth.token = m2;
      var h2, g2 = Ae.getSystemInfo(), I2 = { appkey: this.core.options.appkey, account: this.auth.account, token: m2, authType: this.auth.loginOption.authType, appLogin: t2 ? 0 : 1, clientType: 16, clientSession: this.auth.clientSession, clientId: this.auth.deviceId, sdkVersion: 100941, userAgent: this.core.options.loginSDKTypeParamCompat ? "Native/10.9.41" : g2.userAgent.replace("{{appkey}}", this.core.options.appkey).slice(0, 299), libEnv: this.core.options.flutterSdkVersion ? "FLUTTER" : this.core.options.loginSDKTypeParamCompat ? void 0 : g2.libEnv, hostEnv: this.core.options.flutterSdkVersion ? 4 : this.core.options.loginSDKTypeParamCompat ? 0 : g2.hostEnvEnum, sdkHumanVersion: this.core.options.flutterSdkVersion || "10.9.41", os: g2.os, browser: g2.browser, protocolVersion: 1, customClientType: this.auth.config.customClientType, customTag: this.auth.config.customTag, thirdPartyExtension: u2, isRoutable: false === (null === (o2 = this.auth.loginOption.routeConfig) || void 0 === o2 ? void 0 : o2.routeEnabled) ? 0 : 1, env: null === (a2 = this.auth.loginOption.routeConfig) || void 0 === a2 ? void 0 : a2.routeEnvironment }, M2 = g2.os.toLowerCase(), _2 = 110 === g2.hostEnvEnum;
      "UNIAPP" === Ae.platform && _2 ? (I2.isReactNative = 1, I2.clientType = "ios" === M2 ? 2 : "android" === M2 ? 1 : 65, g2.pushDeviceInfo && g2.pushDeviceInfo.MANUFACTURER && (I2.deviceInfo = JSON.stringify(Object.assign({ IS_SUPPORT_HONOR: true }, g2.pushDeviceInfo)))) : "React Native" === Ae.platform && (this.core.logger.log("V2NIMLoginService deviceInfo", this.core.V2NIMLoginService.deviceInfo, "os", M2), I2.isReactNative = 1, I2.clientType = "ios" === M2 ? 2 : 1, I2.deviceInfo = JSON.stringify(Object.assign({ IS_SUPPORT_HONOR: true }, this.core.V2NIMLoginService.deviceInfo))), this.core.logger.log(`V2NIMLoginService::do login,accid:${I2.account};clientSession:${I2.clientSession};appLogin:${I2.appLogin}`);
      try {
        h2 = yield this.auth.doLoginStepsManager.add(this.auth.clientSocket.sendCmd("v2Login", { tag: I2 }));
      } catch (t3) {
        var E2 = t3;
        if (this.core.reporter.reportTraceUpdateV2("login", { operation_type: "protocol", target: "26-3", code: E2.code || 0, succeed: false, description: E2.message }, { asyncParams: Ae.net.getNetworkStatus() }), E2.code === Me.V2NIM_ERROR_CODE_CANCELLED || E2.code === Me.V2NIM_ERROR_CODE_TIMEOUT)
          throw E2;
        throw this.processLoginFailed(E2), E2;
      }
      var { data: S2, loginClients: T2 } = h2.content;
      return this.changeLoginClient(1, T2), this.core.reporter.reportTraceUpdateV2("login", { operation_type: "protocol", target: "26-3", code: 200, succeed: true }, { asyncParams: Ae.net.getNetworkStatus() }), this.loginClientOfThisConnection = formatLoginInfo(S2), this.core.clientSocket.setSessionId(S2.consid), Ae.localStorage.setItem(this.lastLoginClientKey, JSON.stringify(Object.assign({ account: this.auth.account }, this.loginClientOfThisConnection))), this.loginClientOfThisConnection;
    });
  }
  refreshLoginToken(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (0 === this.auth.loginOption.authType)
        return this.auth.token;
      if ("function" != typeof this.auth.loginOption.tokenProvider)
        return this.auth.token;
      try {
        var o2 = yield this.auth.loginOption.tokenProvider(t2);
        if ("string" == typeof o2)
          return o2;
        throw this.core.logger.error("V2NIMLoginService::excute tokenProvider complete but got Unexpected value:", o2), new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_CALLBACK_FAILED, detail: { reason: "Excute tokenProvider complete but got Unexpected value", rawData: o2 } });
      } catch (t3) {
        var a2 = t3, m2 = a2;
        throw a2.code !== Me.V2NIM_ERROR_CODE_CALLBACK_FAILED && (this.core.logger.error("V2NIMLoginService::excute tokenProvider error:", a2), m2 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_CALLBACK_FAILED, desc: "Excute tokenProvider error", detail: { rawError: t3 } })), this.processLoginFailed(a2), m2;
      }
    });
  }
  refreshThirdPartyExt(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if ("function" != typeof this.auth.loginOption.loginExtensionProvider)
        return "";
      try {
        var o2 = yield this.auth.loginOption.loginExtensionProvider(t2);
        if ("string" == typeof o2)
          return o2;
        throw this.core.logger.error("V2NIMLoginService::excute loginExtensionProvider complete but got Unexpected value:", o2), new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_CALLBACK_FAILED, detail: { reason: "Excute loginExtensionProvider complete but got Unexpected value", rawData: o2 } });
      } catch (t3) {
        var a2 = t3, m2 = a2;
        if (a2.code !== Me.V2NIM_ERROR_CODE_CALLBACK_FAILED && (this.core.logger.error("V2NIMLoginService::excute loginExtensionProvider error:", a2), m2 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_CALLBACK_FAILED, detail: { reason: "Excute loginExtensionProvider error", rawError: t3 } })), 2 === this.auth.loginOption.authType)
          throw this.processLoginFailed(a2), m2;
        return "";
      }
    });
  }
  processLoginFailed(t2) {
    this.auth.clientSocket.doDisconnect(et.ACTIVE, t2), this.checkLoginTerminalCode(t2.code) && (this.auth.authenticator.reset(), this.auth.authenticator.clearLastLoginClient()), this.auth.lifeCycle.processEvent("loginFail", t2);
  }
  changeLoginClient(t2, o2) {
    var a2 = o2.map((t3) => formatLoginInfo(t3));
    if (1 === t2)
      this.loginClients = a2, this.auth.emit("onLoginClientChanged", t2, this.loginClients);
    else if (2 === t2) {
      var m2 = a2.filter((t3) => {
        var o3 = this.loginClients.filter((o4) => o4.clientId === t3.clientId);
        return this.loginClients.push(t3), 0 === o3.length;
      });
      m2.length > 0 && this.auth.emit("onLoginClientChanged", t2, m2);
    } else if (3 === t2) {
      var u2 = a2.filter((t3) => (function remove(t4, o3) {
        o3 = o3 || (() => true);
        for (var a3 = [], m3 = (t4 = t4 || []).length, u3 = 0, h2 = 0; h2 < m3; h2++)
          o3(t4[h2 - u3]) && (a3.push(t4.splice(h2 - u3, 1)[0]), u3 += 1);
        return a3;
      }(this.loginClients, (o3) => o3.clientId === t3.clientId && o3.consid === t3.consid), 0 === this.loginClients.filter((o3) => o3.clientId === t3.clientId).length));
      u2.length > 0 && this.auth.emit("onLoginClientChanged", t2, u2);
    }
  }
  checkAutoLogin(t2) {
    if (t2)
      return false;
    var o2 = Ae.localStorage.getItem(this.lastLoginClientKey);
    if (!o2)
      return false;
    var a2 = "", m2 = "";
    try {
      var u2 = JSON.parse(o2);
      a2 = get(u2, "clientId"), m2 = get(u2, "account");
    } catch (t3) {
      return false;
    }
    return a2 === this.auth.deviceId && m2 === this.auth.account;
  }
  checkLoginTerminalCode(t2) {
    return [Me.V2NIM_ERROR_CODE_CANCELLED, Me.V2NIM_ERROR_CODE_TIMEOUT, Me.V2NIM_ERROR_CODE_HANDSHAKE, 302, 317, Me.V2NIM_ERROR_CODE_FORBIDDEN, Me.V2NIM_ERROR_CODE_NOT_FOUND, Me.V2NIM_ERROR_CODE_PARAMETER_ERROR, Me.V2NIM_ERROR_CODE_MULTI_LOGIN_FORBIDDEN, 422, Me.V2NIM_ERROR_CODE_IM_DISABLED, Me.V2NIM_ERROR_CODE_APPKEY_NOT_EXIST, Me.V2NIM_ERROR_CODE_BUNDLEID_CHECK_FAILED, Me.V2NIM_ERROR_CODE_APPKEY_BLOCKED, Me.V2NIM_ERROR_CODE_INVALID_TOKEN, Me.V2NIM_ERROR_CODE_ROBOT_NOT_ALLOWED, Me.V2NIM_ERROR_CODE_ACCOUNT_NOT_EXIST, Me.V2NIM_ERROR_CODE_ACCOUNT_BANNED, Me.V2NIM_ERROR_CODE_USER_PROFILE_NOT_EXIST].includes(t2);
  }
  reset() {
    this.loginClients = [], this.loginClientOfThisConnection = {};
  }
  clearLastLoginClient() {
    Ae.localStorage.removeItem(this.lastLoginClientKey);
  }
};
var V2Service = class extends ve {
  constructor(t2, o2) {
    super(), this.name = t2, this.logger = o2.logger, this.core = o2;
  }
  checkV2() {
    var t2 = this.core.options.apiVersion;
    if ("v2" === t2)
      return true;
    throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: `The version "${t2}" of client is not supported.` } });
  }
  checkLogin() {
    if (0 === this.core.V2NIMLoginService.getLoginStatus())
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_ILLEGAL_STATE, detail: { reason: "Client logout." } });
  }
  emit(t2, ...o2) {
    this.logger.debug(`${this.name}::emit event: '${t2.toString()}',`, void 0 !== o2[0] ? o2[0] : "", void 0 !== o2[1] ? o2[1] : "", void 0 !== o2[2] ? o2[2] : "");
    try {
      return super.emit(t2, ...o2);
    } catch (o3) {
      return setTimeout(() => {
        throw this.logger.error(`${this.name}::emit throw error in setTimeout. event: ${t2.toString()}. Error`, o3), o3;
      }, 0), false;
    }
  }
  process(t2) {
    var o2 = this[t2.cmd + "Handler"], a2 = this.handler && this.handler[t2.cmd + "Handler"];
    if ("function" == typeof o2 || "function" == typeof a2) {
      if (t2.error)
        return this.logger.error(`${t2.cmd}::recvError`, t2.error), Promise.reject(t2.error);
      try {
        var m2 = o2 ? o2.call(this, t2) : a2.call(this.handler, t2);
        return Promise.resolve(m2);
      } catch (t3) {
        return Promise.reject(t3);
      }
    }
    var u2 = get(t2, "error.detail.ignore");
    return t2.error && !u2 ? Promise.reject(t2.error) : Promise.resolve(t2);
  }
};
var V2NIMLoginLifeCycle = class {
  constructor(t2) {
    this.name = "V2NIMLoginLifeCycle", this.loginStatus = 0, this.connectStatus = 0, this.core = t2, this.auth = t2.V2NIMLoginService, this.logger = t2.logger;
  }
  processEvent(t2, o2, a2) {
    var m2 = this.getConnectStatus();
    switch (t2) {
      case "addressing":
        this.logger.log(`${this.name}::addressing`), this.setLoginStatus(2), this.setConnectStatus(2);
        break;
      case "connect":
        this.logger.log(`${this.name}::connecting`), this.setLoginStatus(2), this.setConnectStatus(2);
        break;
      case "connectSucc":
        this.logger.log(`${this.name}::connect success`), this.setLoginStatus(2), this.setConnectStatus(1);
        break;
      case "connectFail":
        this.logger.log(`${this.name}::connect fail`, o2), this.setLoginStatus(3), this.setConnectStatus(0, o2);
        break;
      case "connectionBroken":
        this.logger.log(`${this.name}::connectionBroken:`, o2), this.setLoginStatus(3), this.setConnectStatus(0, o2), this.core.eventBus.emit("V2NIMLoginService/loginLifeCycleDisconnected", o2);
        break;
      case "loginSucc":
        this.logger.log(`${this.name}::login success, verify authentication success`), this.setLoginStatus(1), this.core.eventBus.emit("V2NIMLoginService/loginLifeCycleLoginSucc", a2);
        break;
      case "loginFail":
        if (this.logger.log(`${this.name}::login fail due to verify authentication failed:`, o2), !o2)
          return;
        this.setLoginStatus(this.auth.authenticator.checkLoginTerminalCode(o2.code) ? 0 : 3), this.setConnectStatus(0, o2), this.auth.emit("onLoginFailed", o2);
        break;
      case "logout":
        this.logger.log(`${this.name}::logout`), this.setLoginStatus(0), this.setConnectStatus(0), this.core.eventBus.emit("V2NIMLoginService/loginLifeCycleLogout");
        break;
      case "kicked":
        this.logger.log(`${this.name}::kicked`, a2), this.setLoginStatus(0), this.setConnectStatus(0, o2), this.core.eventBus.emit("V2NIMLoginService/loginLifeCycleKicked");
        break;
      case "exited":
        this.logger.log(`${this.name}::exited`, o2), this.setLoginStatus(0), this.setConnectStatus(0, o2);
        break;
      case "waiting":
        this.logger.log(`${this.name}::waiting to reconnect`), this.setLoginStatus(3), this.setConnectStatus(3), 2 !== m2 && this.auth.reconnect.attempToReLogin();
    }
  }
  getConnectStatus() {
    return this.connectStatus;
  }
  getLoginStatus() {
    return this.loginStatus;
  }
  setLoginStatus(t2) {
    t2 !== this.loginStatus && (this.loginStatus = t2, this.auth.emit("onLoginStatus", t2));
  }
  setConnectStatus(t2, o2) {
    if (t2 !== this.connectStatus) {
      var a2 = this.connectStatus;
      this.connectStatus = t2, this.auth.emit("onConnectStatus", t2), this.delegateConnectEvent(a2, t2, o2);
    }
  }
  delegateConnectEvent(t2, o2, a2) {
    1 === t2 && 0 === o2 && a2 && this.auth.emit("onDisconnected", a2), 2 === t2 && 0 === o2 && a2 && this.auth.emit("onConnectFailed", a2);
  }
};
var V2NIMLoginDataSync = class {
  constructor(t2) {
    this.core = t2, this.auth = t2.V2NIMLoginService, this.datas = [];
  }
  switchDataSync(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var { type: o2, state: a2, error: m2, subType: u2 } = t2, h2 = this.datas.filter((t3) => t3.type === o2 && t3.subType === u2);
      h2.length > 0 ? (h2[0].state = a2, h2[0].error = m2) : this.datas.push({ type: o2, state: a2, subType: u2 });
      var g2 = this.datas.every((t3) => 3 === t3.state);
      1 === o2 && (2 === a2 && "mainSync" === u2 ? (this.core.eventBus.emit("V2NIMLoginService/syncing"), this.auth.emit("onDataSync", o2, a2)) : 3 === a2 && g2 && (this.core.eventBus.emit("V2NIMLoginService/syncDone", m2), this.auth.emit("onDataSync", o2, a2, m2)));
    });
  }
  checkSyncing() {
    return this.datas.some((t2) => "mainSync" === t2.subType && 2 === t2.state);
  }
  reset() {
    this.datas = [];
  }
};
var at = { "6_3": "notifylog", "6_4": "uploadLog", "6_23": "getServerTime", "6_31": "notifyDetect", "6_32": "uploadDetect", "6_37": "wsDetect" };
var ct = { type: 1, params: 2, result: 3, t1: 100, t2: 101, t3: 102, t4: 103, t5: 104, t6: 105 };
var dt = { k1: 1, k2: 2, k3: 3, k4: 4, k5: 5, k6: 6, k7: 7, k8: 8, k9: 9, k10: 10 };
var lt = { notifylog: { sid: 6, cid: 3, service: "misc" }, uploadLog: { sid: 6, cid: 4, service: "misc", hasPacketResponse: false, params: [{ type: "String", name: "url" }, { type: "Property", name: "data", reflectMapper: { type: 1, content: 2 } }] }, getServerTime: { sid: 6, cid: 23, service: "misc", response: [{ type: "Long", name: "time" }] }, notifyDetect: { sid: 6, cid: 31, service: "misc", response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ct) }] }, uploadDetect: { sid: 6, cid: 32, service: "misc", hasPacketResponse: false, params: [{ type: "Property", name: "data", reflectMapper: ct }] }, wsDetect: { sid: 6, cid: 37, service: "misc", params: [{ type: "Property", name: "tag", reflectMapper: dt }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(dt) }] } };
var pt = { type: { type: "number" }, t1: { type: "number" }, t2: { type: "number" }, t3: { type: "number" }, t4: { type: "number" }, t5: { type: "number" }, t6: { type: "number" } };
var MiscService = class extends class Service {
  constructor(t2, o2) {
    this.name = t2, this.core = o2, this.name = t2, this.logger = o2.logger, this.core = o2;
  }
  process(t2) {
    var o2 = this[t2.cmd + "Handler"];
    if ("function" == typeof o2)
      return o2.call(this, t2);
    var a2 = get(t2, "error.detail.ignore");
    return t2.error && !a2 ? Promise.reject(t2.error) : Promise.resolve(t2);
  }
} {
  constructor(t2) {
    super("misc", t2), this.logLock = false, this.core = t2, registerParser({ cmdMap: at, cmdConfig: lt }), this.setListener();
  }
  setListener() {
    this.core.eventBus.on("BinaryClientSocket/unpackError", this.wsDetect.bind(this)), this.core.eventBus.on("V2NIMLoginService/loginLifeCycleLoginSucc", () => {
      this.core.timeOrigin.setOriginTimetick();
    }), this.core.eventBus.on("logined", () => {
      this.core.timeOrigin.setOriginTimetick();
    });
  }
  getServerTime() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2 = yield this.core.clientSocket.sendCmd("getServerTime");
      return parseInt(t2.content.time);
    });
  }
  wsDetect(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var o2 = Object.assign({ k1: "val1", k2: "val2" }, t2), a2 = null;
      try {
        a2 = (yield this.core.clientSocket.sendCmd("wsDetect", { tag: o2 })).content.data;
      } catch (t3) {
        var m2 = t3;
        return void (m2.code === Me.V2NIM_ERROR_CODE_UNPACK_ERROR ? (this.logger.warn("misc::wsDetect:998"), this.wsDetectUnreliable(), this.reportBinarySocketDetectResult("packet 998")) : this.logger.warn(`misc::wsDetect:failed ${m2.code}`));
      }
      a2 && JSON.stringify(a2) !== JSON.stringify(o2) ? (this.logger.warn("misc::wsDetect:content unreliable"), this.wsDetectUnreliable(), this.reportBinarySocketDetectResult("content unreliable")) : this.logger.log("misc::wsDetect:success");
    });
  }
  wsDetectUnreliable() {
    this.core.clientSocket.doDisconnect(3, "WSDetectUnreliable");
  }
  reportBinarySocketDetectResult(t2) {
    var o2;
    this.core.reporter.reportTraceStart("exceptions", { user_id: this.core.account, trace_id: null === (o2 = this.core.clientSocket.socket) || void 0 === o2 ? void 0 : o2.sessionId, start_time: Date.now(), action: 2, exception_service: 9 }), this.core.reporter.reportTraceUpdateV2("exceptions", { code: 998, description: `wsDetect::reconnect cause: ${t2}`, operation_type: "5", target: "6-37" }), this.core.reporter.reportTraceEnd("exceptions", 1);
  }
  notifyDetectHandler(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var o2 = function formatNotifyDetectTag(t3) {
        return format(pt, t3);
      }(t2.content.data);
      o2.t3 = t2.__receiveTimeNode.time, o2.t4 = Date.now();
      try {
        yield this.core.clientSocket.sendCmd("uploadDetect", { data: o2 });
      } catch (t3) {
        this.core.logger.warn("misc::notifyDetectHandler:upload failed", t3);
      }
    });
  }
  notifylogHandler() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2 = void 0;
      if (this.logLock)
        this.core.logger.warn("misc::notifylogHandler:locked");
      else {
        this.logLock = true;
        try {
          t2 = yield this.core.logger.extractLogs();
        } catch (t3) {
          return void (this.logLock = false);
        }
        if (t2) {
          var o2 = "";
          try {
            o2 = (yield this.core.cloudStorage.uploadFile("string" == typeof t2 ? { type: "file", filePath: t2 } : { type: "file", file: t2 })).url;
          } catch (t3) {
            return void (this.logLock = false);
          }
          if (o2) {
            o2 += (o2.indexOf("?") > 0 ? "&" : "?") + "download=" + (/* @__PURE__ */ new Date()).getTime() + "_web.log";
            try {
              yield this.core.clientSocket.sendCmd("uploadLog", { url: o2 });
            } catch (t3) {
              return void (this.logLock = false);
            }
            try {
              yield this.logger.afterUpload();
            } catch (t3) {
            }
            this.logLock = false;
          } else
            this.logLock = false;
        } else
          this.logLock = false;
      }
    });
  }
};
function pick(t2, o2) {
  t2 = t2 || {};
  var a2 = {};
  return (o2 = o2 || []).forEach((o3) => {
    void 0 !== t2[o3] && (a2[o3] = t2[o3]);
  }), a2;
}
var mt = { retryCount: { type: "number", min: 0, required: false }, forceMode: { type: "boolean", required: false }, authType: { type: "enum", values: [0, 1, 2], required: false }, syncLevel: { type: "enum", values: [1, 0], required: false }, routeConfig: { type: "object", required: false, rules: { routeEnabled: { type: "boolean", required: false }, routeEnvironment: { type: "string", required: false } } } };
var ut = ["https://lbs.netease.im/lbs/webconf.jsp"];
var ht = { retryCount: 3, timeout: 6e4, forceMode: false, authType: 0, syncLevel: 0 };
var gt = { "27_1": "v2NIMSync", "27_10": "v2QChatSync" };
var vt = { v2NIMSync: { sid: 27, cid: 1, service: "V2NIMSyncService", hasPacketTimer: false, params: [{ type: "Property", name: "tag", reflectMapper: { myInfo: 1, offlineMsgs: 2, teams: 3, roamingMsgs: 7, relations: 9, friends: 11, friendUsers: 13, msgReceipts: 14, myTeamMembers: 15, donnop: 16, recallMsg: 17, sessionAck: 18, broadcastMsgs: 20, avSignal: 21, superTeams: 22, mySuperTeamMembers: 23, superTeamRoamingMsgs: 24, deleteSuperTeamMsg: 25, superTeamSessionAck: 26, deleteSelfMsgs: 27, stickTopSessions: 28, sessionHistoryMsgsDelete: 29, p2pTeamModifyMessage: 30, superTeamModifyMessage: 31, filterMsgs: 100 } }], response: [{ type: "Long", name: "timetag" }] }, v2QChatSync: { sid: 27, cid: 10, service: "V2NIMSyncService", hasPacketTimer: false, params: [{ type: "Property", name: "tag", reflectMapper: { systemNotification: 1, pushConfig: 2 } }], response: [{ type: "Long", name: "timetag" }] } };
var ft = { debug(...t2) {
}, log(...t2) {
}, warn(...t2) {
}, error(...t2) {
} };
function setLogger(t2) {
  ft = t2;
}
function getLogger() {
  return ft;
}
function base64ToArrayBuffer(t2) {
  for (var o2 = function base64Decode(t3) {
    var o3 = String(t3).replace(/[=]+$/, "");
    if (o3.length % 4 == 1)
      throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    for (var a3, m3 = "", u3 = 0, h2 = 0, g2 = 0; a3 = o3.charAt(g2++); ~a3 && (h2 = u3 % 4 ? 64 * h2 + a3 : a3, u3++ % 4) ? m3 += String.fromCharCode(255 & h2 >> (-2 * u3 & 6)) : 0)
      a3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a3);
    return m3;
  }(t2), a2 = o2.length, m2 = new Uint8Array(a2), u2 = 0; u2 < a2; u2++)
    m2[u2] = o2.charCodeAt(u2);
  return m2.buffer;
}
function isMobile() {
  if (!navigator || !navigator.userAgent)
    return false;
  return [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i].some((t2) => navigator.userAgent.match(t2));
}
function isElectron() {
  return !(!navigator || !navigator.userAgent) && ("object" == typeof navigator && "string" == typeof navigator.userAgent && navigator.userAgent.indexOf("Electron") >= 0);
}
function isBrowser() {
  return navigator && navigator.userAgent;
}
var It = { clear() {
  uni.clearStorageSync();
}, getItem: (t2) => uni.getStorageSync(t2), setItem: (t2, o2) => uni.setStorageSync(t2, o2), removeItem: (t2) => uni.removeStorageSync(t2) };
var LogStorageImpl$2 = class {
  constructor(t2 = "nim_logs") {
    this.dirPath = "", this.filePath = "", this.copyFilePath = "", this.enable = false, this.maxCapacity = 26214400, this.remainCapacity = 8388608, this.count = 0, this.maxCount = 100, this.lastErrorMsg = void 0;
    var o2 = uni.getSystemInfoSync(), a2 = "mp-weixin" === o2.uniPlatform || "mp-alipay" === o2.uniPlatform;
    if (this.enable = a2, a2) {
      var m2 = this.getAPIEnv();
      m2 && (this.dirPath = `${m2.env.USER_DATA_PATH}/__nim`, this.filePath = `${this.dirPath}/${t2}.log`, this.copyFilePath = `${this.dirPath}/${t2}_copy.log`);
    }
  }
  getAPIEnv() {
    if (!("undefined" != typeof tt && tt.getSystemInfoSync || "undefined" != typeof swan && swan.getSystemInfoSync))
      return "undefined" != typeof my && my.getSystemInfoSync ? my : "undefined" != typeof wx && wx.getAppBaseInfo ? wx : void 0;
  }
  makeDir() {
    if (this.enable) {
      var t2 = this.getAPIEnv();
      if (t2) {
        var o2 = getLogger(), a2 = t2.getFileSystemManager();
        try {
          var m2 = a2.accessSync(this.dirPath);
          o2.log("logStorage::access dir:", m2), ("object" == typeof m2 && null !== m2 ? m2.error || m2.errno || m2.errCode || m2.errNo : 0) > 200 && a2.mkdirSync(this.dirPath, true);
        } catch (t3) {
          a2.mkdirSync(this.dirPath, true);
        }
        try {
          var u2 = a2.accessSync(this.filePath);
          o2.log("logStorage::access file:", u2), ("object" == typeof u2 && null !== u2 ? u2.error || u2.errno || u2.errCode || u2.errNo : 0) > 200 && a2.writeFileSync(this.filePath, "===", "utf8");
        } catch (t3) {
          a2.writeFileSync(this.filePath, "===", "utf8");
        }
      }
    }
  }
  open() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.enable) {
        var t2 = getLogger();
        try {
          this.makeDir(), t2.log(`logStorage::open log file success:${this.filePath}`);
        } catch (o2) {
          t2.warn(`logStorage::open log file failed:${this.filePath}`, o2);
        }
        yield this.checkCapacity(this.remainCapacity);
      }
    });
  }
  checkCapacity(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.enable) {
        var o2 = this.getAPIEnv();
        if (o2) {
          var a2 = getLogger(), m2 = o2.getFileSystemManager(), u2 = this.getSize();
          if (u2 > this.maxCapacity) {
            a2.log(`logStorage::checksize:exceed,${u2} byte`);
            var h2 = "";
            try {
              h2 = yield this.readLogs(u2 - t2);
            } catch (t3) {
              return void a2.log("logStorage::checkCapacity:read failed", t3);
            }
            a2.log(`logStorage::checksize:read success ${u2 - t2} byte`);
            try {
              m2.unlinkSync(this.filePath);
            } catch (t3) {
              return void a2.log("logStorage::checkCapacity:unlink failed", t3);
            }
            try {
              m2.writeFileSync(this.filePath, h2, "utf8");
            } catch (t3) {
              return void a2.log("logStorage::checkCapacity:write failed", t3);
            }
          } else
            a2.log(`logStorage::checkCapacity:not exceeding,${u2} byte`);
        }
      }
    });
  }
  getSize() {
    var t2;
    if (!this.enable)
      return 0;
    var o2 = this.getAPIEnv();
    if (!o2)
      return 0;
    var a2, m2 = getLogger(), u2 = o2.getFileSystemManager();
    try {
      a2 = u2.statSync(this.filePath, false);
    } catch (t3) {
      return m2.warn("logStorage::stat failed", t3), 0;
    }
    return a2.size || (null === (t2 = a2.stats) || void 0 === t2 ? void 0 : t2.size);
  }
  readLogs(t2 = 0) {
    if (!this.enable)
      return Promise.resolve("");
    var o2 = this.getAPIEnv();
    if (!o2)
      return Promise.resolve("");
    var a2 = getLogger(), m2 = o2.getFileSystemManager();
    return new Promise((o3, u2) => {
      m2.readFile({ filePath: this.filePath, encoding: "utf8", position: t2, success: (t3) => {
        var m3 = t3.data;
        "string" == typeof m3 ? (a2.warn(`logStorage::readLogs success ${m3.length}`), o3(m3)) : (a2.warn("logStorage::readLogs empty"), u2(new Error("logStorage::readLogs empty")));
      }, fail: (t3) => {
        var o4 = t3.errMsg || t3.errorMessage || t3.message;
        a2.warn(`logStorage::readLogs failed ${o4}`);
        var m3 = { code: t3.errCode || 0, message: o4 };
        u2(m3);
      } });
    });
  }
  close() {
  }
  addLogs(t2) {
    if (!this.enable)
      return Promise.resolve();
    var o2 = this.getAPIEnv();
    if (!o2)
      return Promise.resolve();
    var a2 = getLogger(), m2 = t2.map((t3) => t3.text).concat("").join("\n");
    try {
      o2.getFileSystemManager().appendFileSync(this.filePath, m2, "utf8");
    } catch (t3) {
      var u2 = t3.errMsg || t3.errorMessage || t3.message;
      this.lastErrorMsg !== u2 && a2.warn("logStorage::append failed", t3), this.lastErrorMsg = u2;
    }
    return this.count += 1, this.count > this.maxCount && (this.count = 0, this.checkCapacity(this.remainCapacity)), Promise.resolve();
  }
  extractLogs() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.enable) {
        var t2 = this.getAPIEnv();
        if (t2) {
          var o2 = getLogger(), a2 = t2.getFileSystemManager();
          if (this.getSize() > 0) {
            try {
              a2.copyFileSync(this.filePath, this.copyFilePath);
            } catch (t3) {
              return void o2.warn("logStorage::copyFileSync failed", t3);
            }
            return this.copyFilePath;
          }
          o2.warn("logStorage::extractLogs empty");
        }
      }
    });
  }
  afterUpload() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.enable) {
        var t2 = this.getAPIEnv();
        if (t2) {
          var o2 = getLogger(), a2 = t2.getFileSystemManager();
          try {
            a2.unlinkSync(this.copyFilePath);
          } catch (t3) {
            return void o2.log("logStorage::delete copyFilePath failed", t3);
          }
        }
      }
    });
  }
};
var yt = { wifi: 2, "2g": 3, "3g": 4, "4g": 5, "5g": 6, ethernet: 1, unknown: 0, none: 0, notreachable: 0, wwan: 0 };
function getNetFn(t2) {
  var o2 = null;
  return { getNetworkStatus: () => new Promise((o3, a2) => {
    t2.getNetworkType({ success: function(t3) {
      var a3 = false;
      a3 = "boolean" == typeof t3.networkAvailable ? t3.networkAvailable : "none" !== t3.networkType.toLowerCase(), o3({ net_type: yt[t3.networkType.toLowerCase()], net_connect: a3 });
    }, fail: function() {
      a2(new Error("getNetworkType failed"));
    } });
  }), onNetworkStatusChange(a2) {
    this.offNetworkStatusChange(), t2.onNetworkStatusChange && (o2 = function(t3) {
      var o3 = t3.networkType.toLowerCase();
      a2({ isConnected: t3.isConnected || "none" !== o3, networkType: yt[o3] });
    }, t2.onNetworkStatusChange(o2));
  }, offNetworkStatusChange() {
    t2.offNetworkStatusChange && (o2 && t2.offNetworkStatusChange(o2), o2 = null);
  } };
}
var Mt = { __onNetworkStatusChangeFn: null, getNetworkStatus() {
  var t2 = uni.getSystemInfoSync() || {};
  return "app" === t2.uniPlatform && "harmonyos" === t2.osName ? Promise.resolve({ net_type: 0, net_connect: true }) : new Promise((t3, o2) => {
    uni.getNetworkType({ success: function(o3) {
      var a2 = false;
      a2 = "boolean" == typeof o3.networkAvailable ? o3.networkAvailable : "none" !== o3.networkType.toLowerCase(), t3({ net_type: yt[o3.networkType.toLowerCase()], net_connect: a2 });
    }, fail: function() {
      o2(new Error("getNetworkType failed"));
    } });
  });
}, onNetworkStatusChange(t2) {
  this.offNetworkStatusChange(), uni.onNetworkStatusChange && (this.__onNetworkStatusChangeFn = function(o2) {
    var a2 = o2.networkType.toLowerCase();
    t2({ isConnected: o2.isConnected || "none" !== a2, networkType: yt[a2] });
  }, uni.onNetworkStatusChange(this.__onNetworkStatusChangeFn));
}, offNetworkStatusChange() {
  uni.offNetworkStatusChange && (this.__onNetworkStatusChangeFn && uni.offNetworkStatusChange(this.__onNetworkStatusChangeFn), this.__onNetworkStatusChangeFn = null);
} };
var _t = getLogger();
var PowerMonitor$2 = class extends ve {
  constructor() {
    super(), this.status = 0, this.appShowListener = null, this.appHideListener = null, this.flag = false, this._initAppLifecycleListener();
  }
  isActive() {
    return 0 === this.status;
  }
  getStatus() {
    return this.status;
  }
  setStatus(t2) {
    var o2 = this.status;
    t2 !== o2 && (this.status = t2, 0 === t2 && 1 === o2 && this.emit("onPowerMonitorTurnActive"), _t.log("Adapter powerMonitor::setStatus: ", t2));
  }
  destroy() {
    this.status = 0, this.flag = false, this._canIUse() && (this.appShowListener && (uni.offAppShow(this.appShowListener), this.appShowListener = null), this.appHideListener && (uni.offAppHide(this.appHideListener), this.appHideListener = null));
  }
  _initAppLifecycleListener() {
    this.flag || (false !== this._canIUse() ? (this.appShowListener = () => {
      var t2 = this.status;
      this.status = 0, 1 === t2 && this.emit("onPowerMonitorTurnActive"), _t.log("Adapter powerMonitor::onAppShow status:", this.status);
    }, this.appHideListener = () => {
      this.status = 1, _t.log("Adapter powerMonitor::onAppHide status:", this.status);
    }, uni.onAppShow(this.appShowListener), uni.onAppHide(this.appHideListener), this.flag = true, _t.log("Adapter powerMonitor::_initAppLifecycleListener success")) : _t.warn("Adapter powerMonitor::_initAppLifecycleListener env.onAppShow/env.onAppHide not available"));
  }
  _canIUse() {
    return "undefined" != typeof uni && "function" == typeof uni.onAppShow && "function" == typeof uni.onAppHide && "function" == typeof uni.offAppShow && "function" == typeof uni.offAppHide;
  }
};
function requestFn$4(t2, o2) {
  return o2 && (o2.data = o2.data || (null == o2 ? void 0 : o2.params) || {}), new Promise((a2, m2) => {
    uni.request(Object.assign(Object.assign({ method: "GET", url: t2 }, o2), { success: function(o3) {
      "number" == typeof (o3 = o3 || {}).statusCode && o3.statusCode.toString().startsWith("2") ? (o3 = { data: o3.data, status: o3.statusCode, errMsg: o3.errMsg, header: o3.header }, a2(o3)) : m2({ code: o3.statusCode || 0, message: o3.data || `uniApp request fail. url: ${t2}` });
    }, fail: function(o3) {
      var a3 = `uniApp request fail. url: ${t2}`;
      m2(o3 ? { code: o3.errCode || 0, message: o3.errMsg || a3 } : { code: 0, message: a3 });
    } }));
  });
}
var getUserAgent = function() {
  var t2 = uni.getSystemInfoSync() || {};
  if ("mp-weixin" === t2.uniPlatform && "undefined" != typeof wx && wx.getAppBaseInfo) {
    var o2 = wx.getAppBaseInfo();
    return `NIM/Web/UNIAPP(${t2.uniRuntimeVersion})/WeChatMiniApp(${o2.SDKVersion})/V10.9.41/{{appkey}}`;
  }
  if ("undefined" != typeof tt && tt.getSystemInfoSync) {
    var a2 = tt.getSystemInfoSync();
    return `NIM/Web/UNIAPP(${t2.uniRuntimeVersion})/TiktokMiniApp(${a2.SDKVersion})/V10.9.41/{{appkey}}`;
  }
  if ("undefined" != typeof swan && swan.getSystemInfoSync) {
    var m2 = swan.getSystemInfoSync();
    return `NIM/Web/UNIAPP(${t2.uniRuntimeVersion})/BaiduMiniApp(${m2.SDKVersion})/V10.9.41/{{appkey}}`;
  }
  if ("undefined" != typeof my && my.getSystemInfoSync) {
    var u2 = my.getSystemInfoSync();
    return `NIM/Web/UNIAPP(${t2.uniRuntimeVersion})/AliMiniApp(${u2.SDKVersion})/V10.9.41/{{appkey}}`;
  }
  if (navigator && navigator.userAgent)
    return navigator.userAgent;
  if (t2.ua)
    return t2.ua;
  var h2 = uni.getSystemInfoSync();
  return `NIM/Web/UNIAPP(${h2.uniRuntimeVersion})/${h2.osName}(${h2.osVersion})/V10.9.41/{{appkey}}`;
};
var getHostEnvVer = function() {
  var t2 = uni.getSystemInfoSync() || {};
  if ("mp-weixin" === t2.uniPlatform && "undefined" != typeof wx && wx.getAppBaseInfo) {
    var o2 = wx.getAppBaseInfo();
    return `${t2.uniRuntimeVersion}/${o2.version}`;
  }
  if ("undefined" != typeof tt && tt.getSystemInfoSync) {
    var a2 = tt.getSystemInfoSync();
    return `${t2.uniRuntimeVersion}/${a2.version}`;
  }
  if ("undefined" != typeof swan && swan.getSystemInfoSync) {
    var m2 = swan.getSystemInfoSync();
    return `${t2.uniRuntimeVersion}/${m2.version}`;
  }
  if ("undefined" != typeof my && my.getSystemInfoSync) {
    var u2 = my.getSystemInfoSync();
    return `${t2.uniRuntimeVersion}/${u2.version}`;
  }
  return `${t2.uniRuntimeVersion}`;
};
var getModel = function() {
  var t2 = uni.getSystemInfoSync() || {};
  if ("mp-weixin" === t2.uniPlatform && "undefined" != typeof wx && wx.getAppBaseInfo) {
    var o2 = wx.getAppBaseInfo();
    return `${t2.uniRuntimeVersion}/${o2.SDKVersion}`;
  }
  if ("undefined" != typeof tt && tt.getSystemInfoSync) {
    var a2 = tt.getSystemInfoSync();
    return `${t2.uniRuntimeVersion}/${a2.SDKVersion}`;
  }
  if ("undefined" != typeof swan && swan.getSystemInfoSync) {
    var m2 = swan.getSystemInfoSync();
    return `${t2.uniRuntimeVersion}/${m2.SDKVersion}`;
  }
  return "undefined" != typeof my && my.getSystemInfoSync ? (my.getSystemInfoSync(), `${t2.uniRuntimeVersion}/${my.SDKVersion}`) : `${t2.uniRuntimeVersion}`;
};
function getSystemInfoFn$5() {
  var t2, o2 = "app" === (t2 = (uni.getSystemInfoSync() || {}).uniPlatform) ? [110, "APP"] : "web" === t2 || "h5" === t2 ? [101, "H5"] : "mp-weixin" === t2 ? [6, "WeiXin"] : "mp-alipay" === t2 ? [102, "Ali"] : "mp-baidu" === t2 ? [103, "Baidu"] : "mp-toutiao" === t2 ? [104, "Tiktok"] : 0 === t2.indexOf("mp-") || 0 === t2.indexOf("quickapp") ? [105, "OtherMiniProgram"] : [0, "Unset"], a2 = uni.getSystemInfoSync() || {};
  return { os: a2.osName || "UNIAPP_UNKNOW", osVer: a2.osVersion, browser: a2.browserName || "", browserVer: a2.browserVersion || "", libEnv: "UNIAPP", hostEnv: o2[1], hostEnvEnum: o2[0], hostEnvVer: getHostEnvVer(), userAgent: getUserAgent(), model: getModel(), manufactor: o2[1], pushDeviceInfo: { PRODUCT: a2.model, DEVICE: a2.model, MANUFACTURER: a2.brand } };
}
function uploadFileFn$5(t2) {
  var o2 = getLogger(), a2 = t2.headers || {};
  return t2.md5 && (a2["Content-MD5"] = t2.md5), new Promise((m2, u2) => {
    var h2 = uni.uploadFile(Object.assign(Object.assign({ url: `${t2.commonUploadHost}/${t2.nosToken.bucket}` }, Object.keys(a2).length > 0 ? { header: a2 } : {}), { formData: { Object: decodeURIComponent(t2.nosToken.objectName), "x-nos-token": t2.nosToken.token, "x-nos-entity-type": "json" }, name: "file", fileType: t2.type, filePath: t2.filePath, success(o3) {
      if (200 == o3.statusCode)
        try {
          var a3;
          try {
            a3 = JSON.parse(o3.data);
          } catch (t3) {
            a3 = {};
          }
          a3.name = t2.filePath, a3.ext = a3.name.lastIndexOf(".") > -1 ? a3.name.slice(a3.name.lastIndexOf(".") + 1).toLowerCase() : "", m2(a3);
        } catch (t3) {
          u2({ code: o3.statusCode, message: o3.errMsg, rawData: o3.data });
        }
      else
        u2({ code: o3.statusCode, message: o3.errMsg, rawData: o3.data });
    }, fail(t3) {
      "uploadFile:fail abort" === t3.errMsg && (t3.code = Me.V2NIM_ERROR_CODE_CANCELLED), t3.message = t3.errMsg, u2(t3);
    } }));
    try {
      t2.onUploadStart && t2.onUploadStart(h2);
    } catch (t3) {
      o2.error("Adapter uploadFile: options.onUploadStart error", t3 && t3.message), h2.abort(), u2(t3);
    }
    t2.onUploadProgress && h2.onProgressUpdate(function(o3) {
      t2.onUploadProgress && t2.onUploadProgress({ total: o3.totalBytesExpectedToSend, loaded: o3.totalBytesSent, percentage: parseFloat((o3.totalBytesSent / o3.totalBytesExpectedToSend).toFixed(2)), percentageText: o3.progress + "%" });
    });
  });
}
function getFileUploadInformationFn$5(t2) {
  return null;
}
var WebsocketFn = class {
  constructor(t2, o2 = "") {
    if (this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3, this.binaryType = "", this.onclose = function(t3) {
      getLogger().log("Adapter uniapp: sockets on close ", t3);
    }, this.onerror = function(t3) {
      getLogger().error("Adapter uniapp: sockets error ", t3);
    }, this.onmessage = function(t3) {
    }, this.onopen = function() {
    }, !t2)
      throw new Error("Failed to construct 'socket': url required");
    this.url = t2.replace(/:443(\/|$)/, "$1"), this.protocol = o2, this.readyState = this.CONNECTING;
    var a2 = this.protocol ? { protocols: this.protocol } : {};
    this.socketTask = uni.connectSocket(Object.assign(Object.assign({ url: this.url }, a2), { multiple: true, fail: (t3) => {
      this.errorHandler(t3);
    } })), this.socketTask.onOpen((t3) => {
      getLogger().log("Adapter uniapp:: onOpen. event: ", t3), this.readyState = this.OPEN, this.binaryType ? this.onopen() : this.onmessage && this.onmessage({ type: "open", header: t3 });
    }), this.socketTask.onError((t3) => {
      getLogger().log("Adapter uniapp:: onError. event: ", t3), this.errorHandler(t3);
    }), this.socketTask.onClose((t3) => {
      (this.readyState = this.CLOSED, "function" == typeof this.onclose) && (this.onclose && this.onclose(t3), getLogger().log("Adapter uniapp:: onClose. event: ", t3));
      this.socketTask = null;
    }), this.socketTask.onMessage((t3) => {
      var o3;
      o3 = "string" == typeof t3.data || t3.data instanceof ArrayBuffer ? t3.data : t3.data.isBuffer && "string" == typeof t3.data.data ? base64ToArrayBuffer(t3.data.data) : t3.data.data, this.onmessage && this.onmessage({ data: o3 });
    });
  }
  close() {
    getLogger().log("Adapter uniapp:: close uni socket actively"), this.socketTask.close({ code: 1e3, reason: "user force close websocket", complete: () => {
      this.socketTask = null;
    } });
  }
  send(t2) {
    if (this.readyState !== this.OPEN)
      throw new Error(`Adapter uniapp:: socket sendMsg when readyState=${this.readyState}`);
    if (!("string" == typeof t2 || t2 instanceof ArrayBuffer))
      throw new TypeError("Adapter uniapp:: socket sendMsg only String/ArrayBuffer supported");
    this.socketTask.send({ data: t2 });
  }
  errorHandler(t2) {
    getLogger().error("Adapter uniapp:: errorHandler. event: ", t2), this.readyState = this.CLOSED, this.onerror && this.onerror({ type: "error", message: t2 && t2.errMsg }), t2.errMsg && "[object Array]" === Object.prototype.toString.call(t2.errMsg) && (t2.errMsg.indexOf("断裂管道") > 0 || t2.errMsg.indexOf("broken pipe") > 0) && this.onclose && this.onclose(t2);
  }
};
var getAdapter$5 = () => ({ setLogger, platform: "UNIAPP", localStorage: It, request: requestFn$4, WebSocket: WebsocketFn, uploadFile: uploadFileFn$5, getFileUploadInformation: getFileUploadInformationFn$5, getSystemInfo: getSystemInfoFn$5, net: Mt, powerMonitor: new PowerMonitor$2(), logStorage: LogStorageImpl$2 });
var Et = createCommonjsModule(function(t2, o2) {
  t2.exports = /* @__PURE__ */ function() {
    function object2String(t3) {
      if (t3) {
        var o3 = "";
        return Object.keys(t3).forEach(function(a2, m2) {
          o3 += 0 === m2 ? "?" : "&", o3 += `${a2}=${t3[a2]}`;
        }), o3;
      }
      return "";
    }
    class V2NIMError extends Error {
      constructor(t3, o3, a2, m2) {
        super(a2), this.source = t3, this.code = o3, this.desc = a2, this.detail = m2 || {};
      }
    }
    function request(t3, o3 = { dataType: "json", method: "GET", timeout: 5e3 }) {
      var a2 = "text" === o3.dataType ? "text/plain; charset=UTF-8" : "application/json; charset=UTF-8", m2 = "GET" === o3.method ? object2String(o3.params) : "";
      return new Promise(function(u2, h2) {
        if (window.XMLHttpRequest) {
          var g2, I2 = new XMLHttpRequest();
          if (I2.onreadystatechange = function() {
            if (4 === I2.readyState)
              if (200 === I2.status) {
                try {
                  g2 = JSON.parse(I2.response || "{}");
                } catch (t4) {
                  g2 = I2.response;
                }
                u2({ status: I2.status, data: g2 });
              } else
                setTimeout(() => {
                  h2(new V2NIMError(1, I2.status, `readyState: ${I2.readyState}; statusText: ${I2.statusText}`));
                }, 0);
          }, I2.open(o3.method, `${t3}${m2}`), I2.timeout = o3.timeout || 5e3, I2.setRequestHeader("Content-Type", a2), o3.headers)
            for (var M2 in o3.headers)
              I2.setRequestHeader(M2, o3.headers[M2]);
          I2.ontimeout = function(t4) {
            h2(new V2NIMError(1, 408, t4 && t4.message ? t4.message : "request timeout"));
          }, I2.send(JSON.stringify(o3.data));
        } else
          h2(new V2NIMError(2, 10400, "request no suppout"));
      });
    }
    return request;
  }();
});
var St = createCommonjsModule(function(t2, o2) {
  self, t2.exports = function() {
    var t3 = { d: function(o4, a3) {
      for (var m3 in a3)
        t3.o(a3, m3) && !t3.o(o4, m3) && Object.defineProperty(o4, m3, { enumerable: true, get: a3[m3] });
    }, o: function(t4, o4) {
      return Object.prototype.hasOwnProperty.call(t4, o4);
    } }, o3 = {};
    t3.d(o3, { default: function() {
      return S2;
    } });
    var a2 = function e(t4) {
      for (var o4 in function(t5, o5) {
        if (!(t5 instanceof o5))
          throw new TypeError("Cannot call a class as a function");
      }(this, e), this.directUploadAddr = "https://wanproxy-web.127.net", this.retryCount = 4, this.trunkSize = 4194304, this.trunkUploadTimeout = 5e4, this.getOffsetTimeout = 1e4, this.version = "1.0", this.enableCache = true, this.logger = console, this.onError = function(t5) {
      }, this.onProgress = function(t5) {
      }, this.onUploadProgress = function(t5) {
      }, this.onComplete = function(t5) {
      }, t4)
        this[o4] = t4[o4];
    };
    function n(t4, o4) {
      var a3 = "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
      if (!a3) {
        if (Array.isArray(t4) || (a3 = function(t5, o5) {
          if (t5) {
            if ("string" == typeof t5)
              return r(t5, o5);
            var a4 = Object.prototype.toString.call(t5).slice(8, -1);
            return "Object" === a4 && t5.constructor && (a4 = t5.constructor.name), "Map" === a4 || "Set" === a4 ? Array.from(t5) : "Arguments" === a4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a4) ? r(t5, o5) : void 0;
          }
        }(t4)) || o4 && t4 && "number" == typeof t4.length) {
          a3 && (t4 = a3);
          var m3 = 0, i = function() {
          };
          return { s: i, n: function() {
            return m3 >= t4.length ? { done: true } : { done: false, value: t4[m3++] };
          }, e: function(t5) {
            throw t5;
          }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var u3, h3 = true, g3 = false;
      return { s: function() {
        a3 = a3.call(t4);
      }, n: function() {
        var t5 = a3.next();
        return h3 = t5.done, t5;
      }, e: function(t5) {
        g3 = true, u3 = t5;
      }, f: function() {
        try {
          h3 || null == a3.return || a3.return();
        } finally {
          if (g3)
            throw u3;
        }
      } };
    }
    function r(t4, o4) {
      (null == o4 || o4 > t4.length) && (o4 = t4.length);
      for (var a3 = 0, m3 = new Array(o4); a3 < o4; a3++)
        m3[a3] = t4[a3];
      return m3;
    }
    var m2 = { privateObj: {}, setItem: function(t4, o4) {
      m2.privateObj[t4] = o4;
    }, getItem: function(t4) {
      return m2.privateObj[t4];
    }, removeItem: function(t4) {
      delete m2.privateObj[t4];
    }, getKeys: function() {
      return Object.keys(m2.privateObj);
    } }, u2 = { getFileKey: function(t4) {
      var o4 = t4.size.toString(), a3 = t4.lastModified.toString();
      return "_NosUploader_" + t4.name + o4.slice(o4.length - 5) + a3.slice(a3.length - 5);
    }, getFileInfo: function(t4) {
      var o4 = m2.getItem(t4);
      if (!o4)
        return null;
      try {
        return JSON.parse(o4);
      } catch (t5) {
        return null;
      }
    }, initFile: function(t4, o4, a3) {
      u2.clearExpiredInfo();
      var h3 = this.getFileKey(o4), g3 = { ctx: void 0 !== t4.ctx ? t4.ctx : "", bucket: t4.bucketName, obj: t4.objectName, token: t4.token, modifyAt: Date.now(), end: false };
      return t4.payload && (g3.payload = t4.payload), a3 && m2.setItem(h3, JSON.stringify(g3)), h3;
    }, setUploadContext: function(t4, o4, a3) {
      var u3 = this.getFileInfo(t4);
      u3 && (u3.ctx = o4, a3 && m2.setItem(t4, JSON.stringify(u3)));
    }, setComplete: function(t4, o4) {
      var a3 = this.getFileInfo(t4);
      a3 && (a3.modifyAt = Date.now(), a3.end = true, o4 && m2.setItem(t4, JSON.stringify(a3)));
    }, getUploadContext: function(t4) {
      var o4 = this.getFileInfo(t4);
      return o4 ? o4.ctx : "";
    }, removeFileInfo: function(t4) {
      0 === t4.indexOf("_NosUploader_") && m2.removeItem(t4);
    }, clearExpiredInfo: function() {
      var t4, o4 = "function" == typeof m2.getKeys ? m2.getKeys() : Object.keys(m2), a3 = Date.now(), h3 = [], g3 = n(o4);
      try {
        for (g3.s(); !(t4 = g3.n()).done; ) {
          var I3 = t4.value;
          if (0 === I3.indexOf("_NosUploader_")) {
            var M3 = u2.getFileInfo(I3);
            null === M3 || a3 - M3.modifyAt > S2.expireTime ? m2.removeItem(I3) : h3.push({ fileInfo: M3, key: I3 });
          }
        }
      } catch (t5) {
        g3.e(t5);
      } finally {
        g3.f();
      }
      if (h3.length > S2.maxFileCache) {
        var _3, E3 = n(h3.sort(function(t5, o5) {
          return o5.fileInfo.modifyAt - t5.fileInfo.modifyAt;
        }).slice(S2.maxFileCache));
        try {
          for (E3.s(); !(_3 = E3.n()).done; ) {
            var T2 = _3.value;
            0 === T2.key.indexOf("_NosUploader_") && m2.removeItem(T2.key);
          }
        } catch (t5) {
          E3.e(t5);
        } finally {
          E3.f();
        }
      }
    } }, h2 = u2;
    function c(t4) {
      return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t5) {
        return typeof t5;
      } : function(t5) {
        return t5 && "function" == typeof Symbol && t5.constructor === Symbol && t5 !== Symbol.prototype ? "symbol" : typeof t5;
      })(t4);
    }
    function s(t4, o4) {
      return !o4 || "object" !== c(o4) && "function" != typeof o4 ? function(t5) {
        if (void 0 === t5)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t5;
      }(t4) : o4;
    }
    function f(t4) {
      var o4 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
      return (f = function(t5) {
        if (null === t5 || (a3 = t5, -1 === Function.toString.call(a3).indexOf("[native code]")))
          return t5;
        var a3;
        if ("function" != typeof t5)
          throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== o4) {
          if (o4.has(t5))
            return o4.get(t5);
          o4.set(t5, n2);
        }
        function n2() {
          return l(t5, arguments, y(this).constructor);
        }
        return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), d(n2, t5);
      })(t4);
    }
    function l(t4, o4, a3) {
      return (l = p() ? Reflect.construct : function(t5, o5, a4) {
        var m3 = [null];
        m3.push.apply(m3, o5);
        var u3 = new (Function.bind.apply(t5, m3))();
        return a4 && d(u3, a4.prototype), u3;
      }).apply(null, arguments);
    }
    function p() {
      if ("undefined" == typeof Reflect || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if ("function" == typeof Proxy)
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t4) {
        return false;
      }
    }
    function d(t4, o4) {
      return (d = Object.setPrototypeOf || function(t5, o5) {
        return t5.__proto__ = o5, t5;
      })(t4, o4);
    }
    function y(t4) {
      return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t5) {
        return t5.__proto__ || Object.getPrototypeOf(t5);
      })(t4);
    }
    var g2 = function(t4) {
      !function(t5, o5) {
        if ("function" != typeof o5 && null !== o5)
          throw new TypeError("Super expression must either be null or a function");
        t5.prototype = Object.create(o5 && o5.prototype, { constructor: { value: t5, writable: true, configurable: true } }), o5 && d(t5, o5);
      }(r2, t4);
      var o4, a3, m3 = (o4 = r2, a3 = p(), function() {
        var t5, m4 = y(o4);
        if (a3) {
          var u3 = y(this).constructor;
          t5 = Reflect.construct(m4, arguments, u3);
        } else
          t5 = m4.apply(this, arguments);
        return s(this, t5);
      });
      function r2(t5, o5) {
        var a4;
        return function(t6, o6) {
          if (!(t6 instanceof o6))
            throw new TypeError("Cannot call a class as a function");
        }(this, r2), (a4 = m3.call(this, "NosUploadError:" + t5)).errCode = o5, a4.errMsg = t5, a4;
      }
      return r2;
    }(f(Error)), I2 = function e(t4, o4, a3) {
      if ("uploading" === t4.uploadState) {
        var m3 = t4.config, u3 = t4.param, I3 = h2.getUploadContext(t4.fileKey);
        if (!I3)
          return a3(0);
        var M3 = new XMLHttpRequest(), _3 = m3.directUploadAddr + "/".concat(u3.bucketName) + "/".concat(encodeURIComponent(u3.objectName)) + "?uploadContext" + "&context=".concat(I3) + "&version=".concat(m3.version);
        M3.onreadystatechange = function() {
          var u4;
          if ("abort" !== t4.uploadState && 4 === M3.readyState) {
            var I4;
            try {
              I4 = JSON.parse(M3.responseText);
            } catch (t5) {
              I4 = { errMsg: "JsonParseError in getOffset. xhr.status = " + M3.status + ". xhr.responseText: " + M3.responseText, errCode: 500 };
            }
            200 === M3.status ? I4.errCode ? t4.config.onError(new g2(I4.errMsg, I4.errCode)) : a3(I4.offset) : M3.status.toString().match(/^5/) ? e(t4, o4 - 1, a3) : o4 > 0 ? ("function" == typeof (null === (u4 = m3.logger) || void 0 === u4 ? void 0 : u4.error) && m3.logger.error("getOffset(".concat(_3, ") error. retry after 3 seconds. ").concat((/* @__PURE__ */ new Date()).toTimeString())), setTimeout(function() {
              e(t4, o4 - 1, a3);
            }, 3500)) : M3.status ? (h2.removeFileInfo(t4.fileKey), m3.onError(new g2("getOffset(".concat(_3, ") error: ").concat(M3.status, " ").concat(M3.statusText)))) : m3.onError(new g2("getOffset(".concat(_3, ") error. no Error Code")));
          }
        }, M3.open("get", _3), M3.setRequestHeader("x-nos-token", u3.token), M3.timeout = m3.getOffsetTimeout, M3.send();
      }
    }, M2 = function e(t4, o4, a3, m3) {
      if ("uploading" === t4.uploadState) {
        var u3 = t4.param, I3 = t4.config, M3 = File.prototype.slice, _3 = void 0 !== u3.ctx ? u3.ctx : "", E3 = o4 + I3.trunkSize >= t4.file.size, S3 = E3 ? t4.file.size : o4 + I3.trunkSize, T2 = new XMLHttpRequest(), C2 = I3.directUploadAddr + "/".concat(u3.bucketName) + "/".concat(encodeURIComponent(u3.objectName));
        if (T2.upload.onprogress = function(a4) {
          if ("abort" !== t4.uploadState) {
            var m4 = 0;
            a4.lengthComputable ? (m4 = (o4 + a4.loaded) / t4.file.size, I3.onProgress(m4), I3.onUploadProgress({ loaded: a4.loaded, total: t4.file.size, percentage: m4, percentageText: (100 * m4).toFixed(2) + "%" })) : I3.onError(new g2("browser does not support query upload progress"));
          }
        }, T2.onreadystatechange = function() {
          var u4, M4;
          if ("abort" !== t4.uploadState && 4 === T2.readyState) {
            var _4;
            try {
              _4 = JSON.parse(T2.responseText);
            } catch (t5) {
              "function" == typeof (null === (u4 = I3.logger) || void 0 === u4 ? void 0 : u4.error) && I3.logger.error("JsonParseError in uploadTrunk. xhr.status = " + T2.status + ". xhr.responseText: " + T2.responseText, t5), _4 = { errMsg: "JsonParseError in uploadTrunk. xhr.status = " + T2.status + ". xhr.responseText: " + T2.responseText };
            }
            200 === T2.status ? (t4.setContext(_4.context), E3 ? (m3(), t4.setComplete()) : e(t4, _4.offset, I3.retryCount, m3)) : T2.status.toString().match(/^5/) ? a3 > 0 ? e(t4, o4, a3 - 1, m3) : (h2.removeFileInfo(t4.fileKey), I3.onError(new g2(_4.errMsg, _4.errCode))) : a3 > 0 ? ("function" == typeof (null === (M4 = I3.logger) || void 0 === M4 ? void 0 : M4.error) && I3.logger.error("uploadTrunk(".concat(C2, ") error. retry after 3 seconds. ").concat((/* @__PURE__ */ new Date()).toTimeString())), setTimeout(function() {
              e(t4, o4, a3 - 1, m3);
            }, 3500)) : T2.status ? (h2.removeFileInfo(t4.fileKey), I3.onError(new g2("uploadTrunk(".concat(C2, ") error: ").concat(T2.status, " ").concat(T2.statusText)))) : I3.onError(new g2("uploadTrunk(".concat(C2, ") error. no Error Code. Please check your network")));
          }
        }, T2.open("post", C2 + "?offset=".concat(o4) + "&complete=".concat(E3) + "&context=".concat(_3) + "&version=".concat(I3.version)), T2.setRequestHeader("x-nos-token", u3.token), u3.md5 && T2.setRequestHeader("content-md5", u3.md5), t4.file.type && T2.setRequestHeader("content-type", t4.file.type), T2.timeout = I3.trunkUploadTimeout, "undefined" != typeof FileReader) {
          var N2 = new FileReader();
          N2.addEventListener("load", function(t5) {
            var o5;
            (null === (o5 = null == t5 ? void 0 : t5.target) || void 0 === o5 ? void 0 : o5.result) instanceof ArrayBuffer && t5.target.result.byteLength > 0 ? T2.send(t5.target.result) : I3.onError(new g2("Read ArrayBuffer failed", 194003));
          }), N2.addEventListener("error", function(t5) {
            var o5 = t5.target.error;
            I3.onError(new g2("Read ArrayBuffer error. ".concat(o5.toString()), 194003));
          }), N2.readAsArrayBuffer(M3.call(t4.file, o4, S3));
        } else
          T2.send(M3.call(t4.file, o4, S3));
      }
    };
    function v(t4, o4) {
      for (var a3 = 0; a3 < o4.length; a3++) {
        var m3 = o4[a3];
        m3.enumerable = m3.enumerable || false, m3.configurable = true, "value" in m3 && (m3.writable = true), Object.defineProperty(t4, m3.key, m3);
      }
    }
    var _2 = function() {
      function e(t5, o4, a3) {
        !function(t6, o5) {
          if (!(t6 instanceof o5))
            throw new TypeError("Cannot call a class as a function");
        }(this, e), this.uploadState = "paused", this.config = a3, this.file = t5, this.param = o4, this.fileKey = h2.initFile(o4, t5, this.config.enableCache), this.resume();
      }
      var t4;
      return (t4 = [{ key: "resume", value: function() {
        var t5 = this;
        if ("uploading" !== this.uploadState) {
          this.setUploadState("uploading");
          var o4 = this.config;
          I2(this, o4.retryCount, function(a3) {
            M2(t5, a3, o4.retryCount, function() {
              t5.setUploadState("ended"), "function" == typeof o4.onComplete && o4.onComplete(t5.param);
            });
          });
        }
      } }, { key: "pause", value: function() {
        this.setUploadState("paused");
      } }, { key: "abort", value: function() {
        "ended" !== this.uploadState && "abort" !== this.uploadState && (this.setUploadState("abort"), this.config.onError(new g2("Upload Aborted", 10499)));
      } }, { key: "setUploadState", value: function(t5) {
        t5 !== this.uploadState && (this.uploadState = t5);
      } }, { key: "setContext", value: function(t5) {
        h2.setUploadContext(this.fileKey, t5, this.config.enableCache), this.param.ctx = t5;
      } }, { key: "setComplete", value: function() {
        h2.setComplete(this.fileKey, this.config.enableCache), this.setUploadState("ended");
      } }]) && v(e.prototype, t4), e;
    }(), E2 = { maxFileCache: 1 / 0, expireTime: 864e5, getFileUploadInformation: function(t4) {
      var o4 = h2.getFileKey(t4), a3 = h2.getFileInfo(o4);
      return null === a3 ? null : Date.now() - a3.modifyAt > E2.expireTime ? (h2.removeFileInfo(o4), null) : { uploadInfo: Object.assign({ bucketName: a3.bucket, objectName: a3.obj, token: a3.token, ctx: a3.ctx }, a3.payload ? { payload: a3.payload } : {}), complete: a3.end };
    }, setMaxFileCache: function(t4) {
      E2.maxFileCache = t4;
    }, setExpireTime: function(t4) {
      E2.expireTime = t4;
    }, printCaches: function() {
      if ("undefined" != typeof localStorage)
        for (var t4 = 0, o4 = Object.keys(localStorage); t4 < o4.length; t4++) {
          var a3 = o4[t4], m3 = h2.getFileInfo(a3);
          m3 && console.log(m3, "modifiedAt", new Date(m3.modifyAt).toTimeString());
        }
    }, createConfig: function(t4) {
      return new a2(t4);
    }, createTask: function(t4, o4, a3) {
      return new _2(t4, o4, a3);
    } }, S2 = E2;
    return o3.default;
  }();
});
function uploadFileFn$4(t2) {
  return __awaiter(this, void 0, void 0, function* () {
    var o2, a2 = getLogger();
    if (!t2.fileInput && !t2.file)
      throw new Error("File not exist");
    if (t2.file)
      o2 = t2.file;
    else if ("string" == typeof t2.fileInput) {
      var m2 = document.getElementById(t2.fileInput);
      if (!(m2 && m2.files && m2.files[0]))
        throw new Error("Can not get file from fileInput");
      o2 = m2.files[0];
    } else {
      if (!(t2.fileInput && t2.fileInput.files && t2.fileInput.files[0]))
        throw new Error(`Can not get file from fileInput ${t2.fileInput}`);
      o2 = t2.fileInput.files[0];
    }
    if (t2.maxSize && o2.size > t2.maxSize)
      throw new Error(`The file exceeds maxSize limit. maxSize: ${t2.maxSize}, get ${o2.size}`);
    var u2 = yield new Promise((m3, u3) => {
      var h2, g2 = St.getFileUploadInformation(o2), I2 = St.createConfig({ enableCache: true, retryCount: 0, directUploadAddr: t2.chunkUploadHost, onError: function(t3) {
        u3(t3);
      }, onUploadProgress: t2.onUploadProgress || function() {
      }, onComplete: function(t3) {
        m3(t3);
      } });
      if (g2)
        if (g2.complete)
          t2.onUploadProgress && t2.onUploadProgress({ total: o2.size, loaded: o2.size, percentage: 1, percentageText: "100%" }), m3(g2.uploadInfo);
        else {
          h2 = St.createTask(o2, g2.uploadInfo, I2);
          try {
            t2.onUploadStart && t2.onUploadStart(h2);
          } catch (t3) {
            a2.error("Adapter uploadFile: options.onUploadStart error", t3 && t3.message), h2.abort(), u3(t3);
          }
        }
      else {
        h2 = St.createTask(o2, Object.assign(Object.assign({ bucketName: t2.nosToken.bucket, objectName: decodeURIComponent(t2.nosToken.objectName), token: t2.nosToken.token }, t2.md5 ? { md5: t2.md5 } : {}), t2.payload ? { payload: t2.payload } : {}), I2);
        try {
          t2.onUploadStart && t2.onUploadStart(h2);
        } catch (t3) {
          a2.error("Adapter uploadFile: options.onUploadStart error", t3 && t3.message), h2.abort(), u3(t3);
        }
      }
    });
    return u2.name = o2.name, u2.size = o2.size, u2.type = o2.type, u2.ext = u2.name.lastIndexOf(".") > -1 ? u2.name.slice(u2.name.lastIndexOf(".") + 1).toLowerCase() : "", u2;
  });
}
function getFileUploadInformationFn$4(t2) {
  var o2;
  if (t2.file)
    o2 = t2.file;
  else if ("string" == typeof t2.fileInput) {
    var a2 = document.getElementById(t2.fileInput);
    if (!(a2 && a2.files && a2.files[0]))
      throw new Error("Can not get file from fileInput");
    o2 = a2.files[0];
  } else {
    if (!(t2.fileInput && t2.fileInput.files && t2.fileInput.files[0]))
      throw new Error(`Can not get file from fileInput ${t2.fileInput}`);
    o2 = t2.fileInput.files[0];
  }
  return St.getFileUploadInformation(o2);
}
var Tt = createCommonjsModule(function(o2, a2) {
  (function() {
    var m2 = { function: true, object: true }[typeof window] && window || this, u2 = a2, h2 = o2 && !o2.nodeType && o2, g2 = u2 && h2 && "object" == typeof t && t;
    !g2 || g2.global !== g2 && g2.window !== g2 && g2.self !== g2 || (m2 = g2);
    var I2 = Math.pow(2, 53) - 1, M2 = /\bOpera/, _2 = Object.prototype, E2 = _2.hasOwnProperty, S2 = _2.toString;
    function capitalize(t2) {
      return (t2 = String(t2)).charAt(0).toUpperCase() + t2.slice(1);
    }
    function format2(t2) {
      return t2 = trim(t2), /^(?:webOS|i(?:OS|P))/.test(t2) ? t2 : capitalize(t2);
    }
    function forOwn(t2, o3) {
      for (var a3 in t2)
        E2.call(t2, a3) && o3(t2[a3], a3, t2);
    }
    function getClassOf(t2) {
      return null == t2 ? capitalize(t2) : S2.call(t2).slice(8, -1);
    }
    function qualify(t2) {
      return String(t2).replace(/([ -])(?!$)/g, "$1?");
    }
    function reduce(t2, o3) {
      var a3 = null;
      return function each(t3, o4) {
        var a4 = -1, m3 = t3 ? t3.length : 0;
        if ("number" == typeof m3 && m3 > -1 && m3 <= I2)
          for (; ++a4 < m3; )
            o4(t3[a4], a4, t3);
        else
          forOwn(t3, o4);
      }(t2, function(m3, u3) {
        a3 = o3(a3, m3, u3, t2);
      }), a3;
    }
    function trim(t2) {
      return String(t2).replace(/^ +| +$/g, "");
    }
    var T2 = function parse(t2) {
      var o3 = m2, a3 = t2 && "object" == typeof t2 && "String" != getClassOf(t2);
      a3 && (o3 = t2, t2 = null);
      var u3 = o3.navigator || {}, h3 = u3.userAgent || "";
      t2 || (t2 = h3);
      var g3, I3, _3 = a3 ? !!u3.likeChrome : /\bChrome\b/.test(t2) && !/internal|\n/i.test(S2.toString()), E3 = "Object", T3 = a3 ? E3 : "ScriptBridgingProxyObject", C2 = a3 ? E3 : "Environment", N2 = a3 && o3.java ? "JavaPackage" : getClassOf(o3.java), A2 = a3 ? E3 : "RuntimeObject", O2 = /\bJava/.test(N2) && o3.java, R2 = O2 && getClassOf(o3.environment) == C2, b2 = O2 ? "a" : "α", V2 = O2 ? "b" : "β", k2 = o3.document || {}, P2 = o3.operamini || o3.opera, L2 = M2.test(L2 = a3 && P2 ? P2["[[Class]]"] : getClassOf(P2)) ? L2 : P2 = null, w2 = t2, D2 = [], U2 = null, x2 = t2 == h3, B2 = x2 && P2 && "function" == typeof P2.version && P2.version(), $2 = function getLayout(o4) {
        return reduce(o4, function(o5, a4) {
          return o5 || RegExp("\\b" + (a4.pattern || qualify(a4)) + "\\b", "i").exec(t2) && (a4.label || a4);
        });
      }([{ label: "EdgeHTML", pattern: "Edge" }, "Trident", { label: "WebKit", pattern: "AppleWebKit" }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]), j2 = function getName(o4) {
        return reduce(o4, function(o5, a4) {
          return o5 || RegExp("\\b" + (a4.pattern || qualify(a4)) + "\\b", "i").exec(t2) && (a4.label || a4);
        });
      }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", { label: "Microsoft Edge", pattern: "(?:Edge|Edg|EdgA|EdgiOS)" }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", { label: "Samsung Internet", pattern: "SamsungBrowser" }, "SeaMonkey", { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Sleipnir", "SlimBrowser", { label: "SRWare Iron", pattern: "Iron" }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", { label: "Yandex Browser", pattern: "YaBrowser" }, { label: "UC Browser", pattern: "UCBrowser" }, "Opera Mini", { label: "Opera Mini", pattern: "OPiOS" }, "Opera", { label: "Opera", pattern: "OPR" }, "Chromium", "Chrome", { label: "Chrome", pattern: "(?:HeadlessChrome)" }, { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" }, { label: "Firefox", pattern: "(?:Firefox|Minefield)" }, { label: "Firefox for iOS", pattern: "FxiOS" }, { label: "IE", pattern: "IEMobile" }, { label: "IE", pattern: "MSIE" }, "Safari"]), G2 = getProduct([{ label: "BlackBerry", pattern: "BB10" }, "BlackBerry", { label: "Galaxy S", pattern: "GT-I9000" }, { label: "Galaxy S2", pattern: "GT-I9100" }, { label: "Galaxy S3", pattern: "GT-I9300" }, { label: "Galaxy S4", pattern: "GT-I9500" }, { label: "Galaxy S5", pattern: "SM-G900" }, { label: "Galaxy S6", pattern: "SM-G920" }, { label: "Galaxy S6 Edge", pattern: "SM-G925" }, { label: "Galaxy S7", pattern: "SM-G930" }, { label: "Galaxy S7 Edge", pattern: "SM-G935" }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", { label: "Wii U", pattern: "WiiU" }, "Wii", "Xbox One", { label: "Xbox 360", pattern: "Xbox" }, "Xoom"]), q2 = function getManufacturer(o4) {
        return reduce(o4, function(o5, a4, m3) {
          return o5 || (a4[G2] || a4[/^[a-z]+(?: +[a-z]+\b)*/i.exec(G2)] || RegExp("\\b" + qualify(m3) + "(?:\\b|\\w*\\d)", "i").exec(t2)) && m3;
        });
      }({ Apple: { iPad: 1, iPhone: 1, iPod: 1 }, Alcatel: {}, Archos: {}, Amazon: { Kindle: 1, "Kindle Fire": 1 }, Asus: { Transformer: 1 }, "Barnes & Noble": { Nook: 1 }, BlackBerry: { PlayBook: 1 }, Google: { "Google TV": 1, Nexus: 1 }, HP: { TouchPad: 1 }, HTC: {}, Huawei: {}, Lenovo: {}, LG: {}, Microsoft: { Xbox: 1, "Xbox One": 1 }, Motorola: { Xoom: 1 }, Nintendo: { "Wii U": 1, Wii: 1 }, Nokia: { Lumia: 1 }, Oppo: {}, Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 }, Sony: { PlayStation: 1, "PlayStation Vita": 1 }, Xiaomi: { Mi: 1, Redmi: 1 } }), H2 = function getOS(o4) {
        return reduce(o4, function(o5, a4) {
          var m3 = a4.pattern || qualify(a4);
          return !o5 && (o5 = RegExp("\\b" + m3 + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t2)) && (o5 = function cleanupOS(t3, o6, a5) {
            var m4 = { "10.0": "10", 6.4: "10 Technical Preview", 6.3: "8.1", 6.2: "8", 6.1: "Server 2008 R2 / 7", "6.0": "Server 2008 / Vista", 5.2: "Server 2003 / XP 64-bit", 5.1: "XP", 5.01: "2000 SP1", "5.0": "2000", "4.0": "NT", "4.90": "ME" };
            return o6 && a5 && /^Win/i.test(t3) && !/^Windows Phone /i.test(t3) && (m4 = m4[/[\d.]+$/.exec(t3)]) && (t3 = "Windows " + m4), t3 = String(t3), o6 && a5 && (t3 = t3.replace(RegExp(o6, "i"), a5)), format2(t3.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]);
          }(o5, m3, a4.label || a4)), o5;
        });
      }(["Windows Phone", "KaiOS", "Android", "CentOS", { label: "Chrome OS", pattern: "CrOS" }, "Debian", { label: "DragonFly BSD", pattern: "DragonFly" }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
      function getProduct(o4) {
        return reduce(o4, function(o5, a4) {
          var m3 = a4.pattern || qualify(a4);
          return !o5 && (o5 = RegExp("\\b" + m3 + " *\\d+[.\\w_]*", "i").exec(t2) || RegExp("\\b" + m3 + " *\\w+-[\\w]*", "i").exec(t2) || RegExp("\\b" + m3 + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t2)) && ((o5 = String(a4.label && !RegExp(m3, "i").test(a4.label) ? a4.label : o5).split("/"))[1] && !/[\d.]+/.test(o5[0]) && (o5[0] += " " + o5[1]), a4 = a4.label || a4, o5 = format2(o5[0].replace(RegExp(m3, "i"), a4).replace(RegExp("; *(?:" + a4 + "[_-])?", "i"), " ").replace(RegExp("(" + a4 + ")[-_.]?(\\w)", "i"), "$1 $2"))), o5;
        });
      }
      function getVersion(o4) {
        return reduce(o4, function(o5, a4) {
          return o5 || (RegExp(a4 + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t2) || 0)[1] || null;
        });
      }
      if ($2 && ($2 = [$2]), /\bAndroid\b/.test(H2) && !G2 && (g3 = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t2)) && (G2 = trim(g3[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), q2 && !G2 ? G2 = getProduct([q2]) : q2 && G2 && (G2 = G2.replace(RegExp("^(" + qualify(q2) + ")[-_.\\s]", "i"), q2 + " ").replace(RegExp("^(" + qualify(q2) + ")[-_.]?(\\w)", "i"), q2 + " $2")), (g3 = /\bGoogle TV\b/.exec(G2)) && (G2 = g3[0]), /\bSimulator\b/i.test(t2) && (G2 = (G2 ? G2 + " " : "") + "Simulator"), "Opera Mini" == j2 && /\bOPiOS\b/.test(t2) && D2.push("running in Turbo/Uncompressed mode"), "IE" == j2 && /\blike iPhone OS\b/.test(t2) ? (q2 = (g3 = parse(t2.replace(/like iPhone OS/, ""))).manufacturer, G2 = g3.product) : /^iP/.test(G2) ? (j2 || (j2 = "Safari"), H2 = "iOS" + ((g3 = / OS ([\d_]+)/i.exec(t2)) ? " " + g3[1].replace(/_/g, ".") : "")) : "Konqueror" == j2 && /^Linux\b/i.test(H2) ? H2 = "Kubuntu" : q2 && "Google" != q2 && (/Chrome/.test(j2) && !/\bMobile Safari\b/i.test(t2) || /\bVita\b/.test(G2)) || /\bAndroid\b/.test(H2) && /^Chrome/.test(j2) && /\bVersion\//i.test(t2) ? (j2 = "Android Browser", H2 = /\bAndroid\b/.test(H2) ? H2 : "Android") : "Silk" == j2 ? (/\bMobi/i.test(t2) || (H2 = "Android", D2.unshift("desktop mode")), /Accelerated *= *true/i.test(t2) && D2.unshift("accelerated")) : "UC Browser" == j2 && /\bUCWEB\b/.test(t2) ? D2.push("speed mode") : "PaleMoon" == j2 && (g3 = /\bFirefox\/([\d.]+)\b/.exec(t2)) ? D2.push("identifying as Firefox " + g3[1]) : "Firefox" == j2 && (g3 = /\b(Mobile|Tablet|TV)\b/i.exec(t2)) ? (H2 || (H2 = "Firefox OS"), G2 || (G2 = g3[1])) : !j2 || (g3 = !/\bMinefield\b/i.test(t2) && /\b(?:Firefox|Safari)\b/.exec(j2)) ? (j2 && !G2 && /[\/,]|^[^(]+?\)/.test(t2.slice(t2.indexOf(g3 + "/") + 8)) && (j2 = null), (g3 = G2 || q2 || H2) && (G2 || q2 || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(H2)) && (j2 = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(H2) ? H2 : g3) + " Browser")) : "Electron" == j2 && (g3 = (/\bChrome\/([\d.]+)\b/.exec(t2) || 0)[1]) && D2.push("Chromium " + g3), B2 || (B2 = getVersion(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", qualify(j2), "(?:Firefox|Minefield|NetFront)"])), (g3 = ("iCab" == $2 && parseFloat(B2) > 3 ? "WebKit" : /\bOpera\b/.test(j2) && (/\bOPR\b/.test(t2) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t2) && !/^(?:Trident|EdgeHTML)$/.test($2) && "WebKit" || !$2 && /\bMSIE\b/i.test(t2) && ("Mac OS" == H2 ? "Tasman" : "Trident") || "WebKit" == $2 && /\bPlayStation\b(?! Vita\b)/i.test(j2) && "NetFront") && ($2 = [g3]), "IE" == j2 && (g3 = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t2) || 0)[1]) ? (j2 += " Mobile", H2 = "Windows Phone " + (/\+$/.test(g3) ? g3 : g3 + ".x"), D2.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t2) ? (j2 = "IE Mobile", H2 = "Windows Phone 8.x", D2.unshift("desktop mode"), B2 || (B2 = (/\brv:([\d.]+)/.exec(t2) || 0)[1])) : "IE" != j2 && "Trident" == $2 && (g3 = /\brv:([\d.]+)/.exec(t2)) && (j2 && D2.push("identifying as " + j2 + (B2 ? " " + B2 : "")), j2 = "IE", B2 = g3[1]), x2) {
        if (function isHostType(t3, o4) {
          var a4 = null != t3 ? typeof t3[o4] : "number";
          return !(/^(?:boolean|number|string|undefined)$/.test(a4) || "object" == a4 && !t3[o4]);
        }(o3, "global"))
          if (O2 && (w2 = (g3 = O2.lang.System).getProperty("os.arch"), H2 = H2 || g3.getProperty("os.name") + " " + g3.getProperty("os.version")), R2) {
            try {
              B2 = o3.require("ringo/engine").version.join("."), j2 = "RingoJS";
            } catch (t3) {
              (g3 = o3.system) && g3.global.system == o3.system && (j2 = "Narwhal", H2 || (H2 = g3[0].os || null));
            }
            j2 || (j2 = "Rhino");
          } else
            "object" == typeof o3.process && !o3.process.browser && (g3 = o3.process) && ("object" == typeof g3.versions && ("string" == typeof g3.versions.electron ? (D2.push("Node " + g3.versions.node), j2 = "Electron", B2 = g3.versions.electron) : "string" == typeof g3.versions.nw && (D2.push("Chromium " + B2, "Node " + g3.versions.node), j2 = "NW.js", B2 = g3.versions.nw)), j2 || (j2 = "Node.js", w2 = g3.arch, H2 = g3.platform, B2 = (B2 = /[\d.]+/.exec(g3.version)) ? B2[0] : null));
        else
          getClassOf(g3 = o3.runtime) == T3 ? (j2 = "Adobe AIR", H2 = g3.flash.system.Capabilities.os) : getClassOf(g3 = o3.phantom) == A2 ? (j2 = "PhantomJS", B2 = (g3 = g3.version || null) && g3.major + "." + g3.minor + "." + g3.patch) : "number" == typeof k2.documentMode && (g3 = /\bTrident\/(\d+)/i.exec(t2)) ? (B2 = [B2, k2.documentMode], (g3 = +g3[1] + 4) != B2[1] && (D2.push("IE " + B2[1] + " mode"), $2 && ($2[1] = ""), B2[1] = g3), B2 = "IE" == j2 ? String(B2[1].toFixed(1)) : B2[0]) : "number" == typeof k2.documentMode && /^(?:Chrome|Firefox)\b/.test(j2) && (D2.push("masking as " + j2 + " " + B2), j2 = "IE", B2 = "11.0", $2 = ["Trident"], H2 = "Windows");
        H2 = H2 && format2(H2);
      }
      if (B2 && (g3 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(B2) || /(?:alpha|beta)(?: ?\d)?/i.exec(t2 + ";" + (x2 && u3.appMinorVersion)) || /\bMinefield\b/i.test(t2) && "a") && (U2 = /b/i.test(g3) ? "beta" : "alpha", B2 = B2.replace(RegExp(g3 + "\\+?$"), "") + ("beta" == U2 ? V2 : b2) + (/\d+\+?/.exec(g3) || "")), "Fennec" == j2 || "Firefox" == j2 && /\b(?:Android|Firefox OS|KaiOS)\b/.test(H2))
        j2 = "Firefox Mobile";
      else if ("Maxthon" == j2 && B2)
        B2 = B2.replace(/\.[\d.]+/, ".x");
      else if (/\bXbox\b/i.test(G2))
        "Xbox 360" == G2 && (H2 = null), "Xbox 360" == G2 && /\bIEMobile\b/.test(t2) && D2.unshift("mobile mode");
      else if (!/^(?:Chrome|IE|Opera)$/.test(j2) && (!j2 || G2 || /Browser|Mobi/.test(j2)) || "Windows CE" != H2 && !/Mobi/i.test(t2))
        if ("IE" == j2 && x2)
          try {
            null === o3.external && D2.unshift("platform preview");
          } catch (t3) {
            D2.unshift("embedded");
          }
        else
          (/\bBlackBerry\b/.test(G2) || /\bBB10\b/.test(t2)) && (g3 = (RegExp(G2.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t2) || 0)[1] || B2) ? (H2 = ((g3 = [g3, /BB10/.test(t2)])[1] ? (G2 = null, q2 = "BlackBerry") : "Device Software") + " " + g3[0], B2 = null) : this != forOwn && "Wii" != G2 && (x2 && P2 || /Opera/.test(j2) && /\b(?:MSIE|Firefox)\b/i.test(t2) || "Firefox" == j2 && /\bOS X (?:\d+\.){2,}/.test(H2) || "IE" == j2 && (H2 && !/^Win/.test(H2) && B2 > 5.5 || /\bWindows XP\b/.test(H2) && B2 > 8 || 8 == B2 && !/\bTrident\b/.test(t2))) && !M2.test(g3 = parse.call(forOwn, t2.replace(M2, "") + ";")) && g3.name && (g3 = "ing as " + g3.name + ((g3 = g3.version) ? " " + g3 : ""), M2.test(j2) ? (/\bIE\b/.test(g3) && "Mac OS" == H2 && (H2 = null), g3 = "identify" + g3) : (g3 = "mask" + g3, j2 = L2 ? format2(L2.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(g3) && (H2 = null), x2 || (B2 = null)), $2 = ["Presto"], D2.push(g3));
      else
        j2 += " Mobile";
      (g3 = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t2) || 0)[1]) && (g3 = [parseFloat(g3.replace(/\.(\d)$/, ".0$1")), g3], "Safari" == j2 && "+" == g3[1].slice(-1) ? (j2 = "WebKit Nightly", U2 = "alpha", B2 = g3[1].slice(0, -1)) : B2 != g3[1] && B2 != (g3[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t2) || 0)[1]) || (B2 = null), g3[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t2) || 0)[1], 537.36 == g3[0] && 537.36 == g3[2] && parseFloat(g3[1]) >= 28 && "WebKit" == $2 && ($2 = ["Blink"]), x2 && (_3 || g3[1]) ? ($2 && ($2[1] = "like Chrome"), g3 = g3[1] || ((g3 = g3[0]) < 530 ? 1 : g3 < 532 ? 2 : g3 < 532.05 ? 3 : g3 < 533 ? 4 : g3 < 534.03 ? 5 : g3 < 534.07 ? 6 : g3 < 534.1 ? 7 : g3 < 534.13 ? 8 : g3 < 534.16 ? 9 : g3 < 534.24 ? 10 : g3 < 534.3 ? 11 : g3 < 535.01 ? 12 : g3 < 535.02 ? "13+" : g3 < 535.07 ? 15 : g3 < 535.11 ? 16 : g3 < 535.19 ? 17 : g3 < 536.05 ? 18 : g3 < 536.1 ? 19 : g3 < 537.01 ? 20 : g3 < 537.11 ? "21+" : g3 < 537.13 ? 23 : g3 < 537.18 ? 24 : g3 < 537.24 ? 25 : g3 < 537.36 ? 26 : "Blink" != $2 ? "27" : "28")) : ($2 && ($2[1] = "like Safari"), g3 = (g3 = g3[0]) < 400 ? 1 : g3 < 500 ? 2 : g3 < 526 ? 3 : g3 < 533 ? 4 : g3 < 534 ? "4+" : g3 < 535 ? 5 : g3 < 537 ? 6 : g3 < 538 ? 7 : g3 < 601 ? 8 : g3 < 602 ? 9 : g3 < 604 ? 10 : g3 < 606 ? 11 : g3 < 608 ? 12 : "12"), $2 && ($2[1] += " " + (g3 += "number" == typeof g3 ? ".x" : /[.+]/.test(g3) ? "" : "+")), "Safari" == j2 && (!B2 || parseInt(B2) > 45) ? B2 = g3 : "Chrome" == j2 && /\bHeadlessChrome/i.test(t2) && D2.unshift("headless")), "Opera" == j2 && (g3 = /\bzbov|zvav$/.exec(H2)) ? (j2 += " ", D2.unshift("desktop mode"), "zvav" == g3 ? (j2 += "Mini", B2 = null) : j2 += "Mobile", H2 = H2.replace(RegExp(" *" + g3 + "$"), "")) : "Safari" == j2 && /\bChrome\b/.exec($2 && $2[1]) ? (D2.unshift("desktop mode"), j2 = "Chrome Mobile", B2 = null, /\bOS X\b/.test(H2) ? (q2 = "Apple", H2 = "iOS 4.3+") : H2 = null) : /\bSRWare Iron\b/.test(j2) && !B2 && (B2 = getVersion("Chrome")), B2 && 0 == B2.indexOf(g3 = /[\d.]+$/.exec(H2)) && t2.indexOf("/" + g3 + "-") > -1 && (H2 = trim(H2.replace(g3, ""))), H2 && -1 != H2.indexOf(j2) && !RegExp(j2 + " OS").test(H2) && (H2 = H2.replace(RegExp(" *" + qualify(j2) + " *"), "")), $2 && !/\b(?:Avant|Nook)\b/.test(j2) && (/Browser|Lunascape|Maxthon/.test(j2) || "Safari" != j2 && /^iOS/.test(H2) && /\bSafari\b/.test($2[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(j2) && $2[1]) && (g3 = $2[$2.length - 1]) && D2.push(g3), D2.length && (D2 = ["(" + D2.join("; ") + ")"]), q2 && G2 && G2.indexOf(q2) < 0 && D2.push("on " + q2), G2 && D2.push((/^on /.test(D2[D2.length - 1]) ? "" : "on ") + G2), H2 && (g3 = / ([\d.+]+)$/.exec(H2), I3 = g3 && "/" == H2.charAt(H2.length - g3[0].length - 1), H2 = { architecture: 32, family: g3 && !I3 ? H2.replace(g3[0], "") : H2, version: g3 ? g3[1] : null, toString: function() {
        var t3 = this.version;
        return this.family + (t3 && !I3 ? " " + t3 : "") + (64 == this.architecture ? " 64-bit" : "");
      } }), (g3 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(w2)) && !/\bi686\b/i.test(w2) ? (H2 && (H2.architecture = 64, H2.family = H2.family.replace(RegExp(" *" + g3), "")), j2 && (/\bWOW64\b/i.test(t2) || x2 && /\w(?:86|32)$/.test(u3.cpuClass || u3.platform) && !/\bWin64; x64\b/i.test(t2)) && D2.unshift("32-bit")) : H2 && /^OS X/.test(H2.family) && "Chrome" == j2 && parseFloat(B2) >= 39 && (H2.architecture = 64), t2 || (t2 = null);
      var z2 = {};
      return z2.description = t2, z2.layout = $2 && $2[0], z2.manufacturer = q2, z2.name = j2, z2.prerelease = U2, z2.product = G2, z2.ua = t2, z2.version = j2 && B2, z2.os = H2 || { architecture: null, family: null, version: null, toString: function() {
        return "null";
      } }, z2.parse = parse, z2.toString = function toStringPlatform() {
        return this.description || "";
      }, z2.version && D2.unshift(B2), z2.name && D2.unshift(j2), H2 && j2 && (H2 != String(H2).split(" ")[0] || H2 != j2.split(" ")[0] && !G2) && D2.push(G2 ? "(" + H2 + ")" : "on " + H2), D2.length && (z2.description = D2.join(" ")), z2;
    }();
    u2 && h2 ? forOwn(T2, function(t2, o3) {
      u2[o3] = t2;
    }) : m2.platform = T2;
  }).call(t);
});
function getSystemInfoFn$4() {
  var t2, o2, a2 = Tt.version || "";
  if (isElectron())
    try {
      var m2 = navigator.userAgent.match(/Electron\/([\d.]+\d+)/);
      m2 && m2[1] && "string" == typeof m2[1] && (a2 = m2[1]);
    } catch (t3) {
    }
  return { os: (null === (t2 = Tt.os) || void 0 === t2 ? void 0 : t2.family) || "", osVer: (null === (o2 = Tt.os) || void 0 === o2 ? void 0 : o2.version) || "", browser: Tt.name || "", browserVer: Tt.version || "", libEnv: "BROWSER", hostEnv: isElectron() ? "Electron" : isMobile() ? "H5" : isBrowser() ? "BROWSER" : "Unset", hostEnvEnum: isElectron() ? 5 : isMobile() ? 101 : isBrowser() ? 100 : 0, hostEnvVer: a2, userAgent: navigator && navigator.userAgent, model: a2, manufactor: Tt.name || "" };
}
var Ct = null;
var Nt = null;
var At = { getNetworkStatus: () => Promise.resolve({ net_type: 0, net_connect: "undefined" == typeof navigator || "boolean" != typeof navigator.onLine || navigator.onLine }), onNetworkStatusChange(t2) {
  Ct = function() {
    t2({ isConnected: true, networkType: 0 });
  }, Nt = function() {
    t2({ isConnected: false, networkType: 0 });
  }, window.addEventListener("online", Ct), window.addEventListener("offline", Nt);
}, offNetworkStatusChange() {
  Ct && window.removeEventListener("online", Ct), Nt && window.removeEventListener("offline", Nt), Ct = null, Nt = null;
} };
var Ot = getLogger();
var getVisibilityEvent = () => {
  var t2 = "hidden", o2 = "visibilitychange";
  return "undefined" == typeof document || void 0 !== document.hidden || (void 0 !== document.webkitHidden ? (t2 = "webkitHidden", o2 = "webkitvisibilitychange") : void 0 !== document.msHidden ? (t2 = "msHidden", o2 = "msvisibilitychange") : void 0 !== document.mozHidden && (t2 = "mozHidden", o2 = "mozvisibilitychange")), { hidden: t2, visibilityChange: o2 };
};
var PowerMonitor$1 = class extends ve {
  constructor() {
    super(), this.status = 0, this.visibilityListener = null, this.flag = false, this._initVisibilityListener();
  }
  isActive() {
    return 0 === this.status;
  }
  getStatus() {
    return this.status;
  }
  setStatus(t2) {
    var o2 = this.status;
    t2 !== o2 && (this.status = t2, 0 === t2 && 1 === o2 && this.emit("onPowerMonitorTurnActive"), Ot.log("Adapter powerMonitor::setStatus: ", t2));
  }
  destroy() {
    if (this.status = 0, this.flag = false, this._canIUse() && this.visibilityListener) {
      var { visibilityChange: t2 } = getVisibilityEvent();
      document.removeEventListener(t2, this.visibilityListener), this.visibilityListener = null;
    }
  }
  _initVisibilityListener() {
    if (!this.flag)
      if (false !== this._canIUse()) {
        var t2, { hidden: o2, visibilityChange: a2 } = getVisibilityEvent();
        o2 && void 0 !== document[o2] && (this.visibilityListener = (t2 = this, () => {
          var o3 = t2.status, { hidden: a3 } = getVisibilityEvent();
          a3 && document[a3] ? t2.status = 1 : (t2.status = 0, 1 === o3 && t2.emit("onPowerMonitorTurnActive")), Ot.log("Adapter powerMonitor::visibility change status:", t2.status);
        }), document.addEventListener(a2, this.visibilityListener), this.flag = true, Ot.log("Adapter powerMonitor::_initVisibilityListener success, isHidden:", null === document || void 0 === document ? void 0 : document[o2]));
      } else
        Ot.warn("Adapter powerMonitor::_initVisibilityListener no document.addEventListener");
  }
  _canIUse() {
    return "undefined" != typeof document && void 0 !== document.addEventListener;
  }
};
var IDB = class {
  constructor(t2, o2) {
    this.db = null, this.stores = [], this.name = t2, this.version = o2;
  }
  getDB() {
    if (!this.db)
      throw new Error("DB not ready");
    return this.db;
  }
  getStore(t2) {
    var o2 = this.stores.find((o3) => o3.storeName === t2);
    if (!o2)
      throw new Error(`LogStorage: store not found. ${t2}`);
    return o2;
  }
  open() {
    var t2 = window.indexedDB.open(this.name, this.version);
    return new Promise((o2, a2) => {
      t2.onerror = (t3) => {
        var o3 = t3.target;
        a2(o3.error);
      }, t2.onsuccess = (t3) => {
        var a3 = t3.target;
        this.db = a3.result, this.db.removeEventListener("close", this.triggerDBCloseEvt.bind(this)), this.db.addEventListener("close", this.triggerDBCloseEvt.bind(this)), this.stores.push(new IDBStore("log", this)), o2();
      }, t2.onupgradeneeded = (t3) => {
        var o3 = t3.target;
        this.upgradeDBBySchema(o3);
      };
    });
  }
  triggerDBCloseEvt() {
    try {
      this.db && this.db.close(), this.db = null;
    } catch (t2) {
    }
    this.open();
  }
  upgradeDBBySchema(t2) {
    var o2 = t2.result, a2 = t2.transaction && o2.objectStoreNames.contains("log") ? t2.transaction.objectStore("log") : o2.createObjectStore("log", { keyPath: "id", autoIncrement: true });
    try {
      a2.index("time");
    } catch (t3) {
      a2.createIndex("time", "time", { unique: false });
    }
  }
  close() {
    this.db && (this.db.removeEventListener("close", this.triggerDBCloseEvt.bind(this)), this.db.close(), this.stores = [], this.db = null);
  }
};
var IDBStore = class {
  constructor(t2, o2) {
    this.idb = null, this.storeName = t2, this.idb = o2;
  }
  getDB() {
    if (!this.idb)
      throw new Error("DB not ready");
    return this.idb.getDB();
  }
  getStoreName() {
    return this.storeName;
  }
  bulkCreate(t2) {
    var o2 = this.getDB(), a2 = this.getStoreName(), m2 = o2.transaction(a2, "readwrite"), u2 = m2.objectStore(a2);
    return t2.forEach((t3) => {
      u2.add(t3);
    }), new Promise(function(t3, o3) {
      m2.oncomplete = function() {
        t3();
      }, m2.onerror = function(t4) {
        var a3 = t4.target;
        o3(a3.error);
      }, m2.onabort = function(t4) {
        var a3 = t4.target;
        a3.error instanceof Error ? o3(a3.error) : o3(new Error("TransactionAborted"));
      };
    });
  }
  bulkDelete(t2) {
    var { keyName: o2, lower: a2, upper: m2, lowerOpen: u2 = false, upperOpen: h2 = false } = t2, g2 = IDBKeyRange.bound(a2, m2, u2, h2), I2 = this.getDB(), M2 = this.getStoreName(), _2 = I2.transaction(M2, "readwrite"), E2 = _2.objectStore(M2).index(o2).openCursor(g2), S2 = 0;
    return E2.onsuccess = function(t3) {
      var o3 = t3.target.result;
      o3 && (o3.delete(), S2++, o3.continue());
    }, new Promise(function(t3, o3) {
      _2.oncomplete = function() {
        t3(S2);
      }, _2.onerror = function(t4) {
        var a3 = t4.target;
        o3(a3.error);
      }, _2.onabort = function(t4) {
        var a3 = t4.target;
        a3.error instanceof Error ? o3(a3.error) : o3(new Error("TransactionAborted"));
      };
    });
  }
  readAll() {
    var t2 = this.getDB(), o2 = this.getStoreName(), a2 = t2.transaction(o2, "readonly").objectStore(o2);
    if (!a2.getAll)
      throw new Error("IDBExtract not support");
    var m2 = a2.getAll();
    return new Promise((t3, o3) => {
      m2.onsuccess = function(o4) {
        var a3 = o4.target;
        t3(a3.result);
      }, m2.onerror = function(t4) {
        var a3 = t4.target;
        o3(a3.error);
      };
    });
  }
};
var LogStorageImpl$1 = class {
  constructor(t2 = "nim_logs") {
    this.idb = new IDB(t2, 1);
  }
  open() {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.idb.open();
      var t2 = this.idb.getStore("log");
      try {
        yield t2.bulkDelete({ keyName: "time", lower: 0, upper: Date.now() - 2592e5 });
      } catch (t3) {
      }
    });
  }
  close() {
    this.idb.close();
  }
  addLogs(t2) {
    return this.idb.getStore("log").bulkCreate(t2);
  }
  extractLogs() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2 = this.idb.getStore("log"), o2 = yield t2.readAll();
      if (0 !== o2.length) {
        var a2 = o2.reduce((t3, o3) => {
          var a3 = o3.iid;
          return t3[a3] || (t3[a3] = []), t3[a3].push(o3), t3;
        }, {}), m2 = Object.keys(a2).map((t3) => `==========iid:${t3}==========
 ${a2[t3].map((t4) => t4.text).join("\n")}`).join("\n");
        return new File([m2], "nim-logs.txt", { type: "text/plain" });
      }
    });
  }
  afterUpload() {
    return Promise.resolve();
  }
};
var getAdapter$4 = () => ({ setLogger, platform: "BROWSER", localStorage: window.localStorage, request: Et, WebSocket: window.WebSocket, uploadFile: uploadFileFn$4, getFileUploadInformation: getFileUploadInformationFn$4, getSystemInfo: getSystemInfoFn$4, net: At, powerMonitor: new PowerMonitor$1(), logStorage: LogStorageImpl$1 });
var Rt = getLogger();
var PowerMonitor = class extends ve {
  constructor(t2) {
    super(), this.env = t2, this.status = 0, this.appShowListener = null, this.appHideListener = null, this.flag = false, this._initAppLifecycleListener();
  }
  isActive() {
    return 0 === this.status;
  }
  getStatus() {
    return this.status;
  }
  setStatus(t2) {
    var o2 = this.status;
    t2 !== o2 && (this.status = t2, 0 === t2 && 1 === o2 && this.emit("onPowerMonitorTurnActive"), Rt.log("Adapter powerMonitor::setStatus: ", t2));
  }
  destroy() {
    this.status = 0, this.flag = false, this._canIUse() && (this.appShowListener && (this.env.offAppShow(this.appShowListener), this.appShowListener = null), this.appHideListener && (this.env.offAppHide(this.appHideListener), this.appHideListener = null));
  }
  _initAppLifecycleListener() {
    this.flag || (false !== this._canIUse() ? (this.appShowListener = () => {
      var t2 = this.status;
      this.status = 0, 1 === t2 && this.emit("onPowerMonitorTurnActive"), Rt.log("Adapter powerMonitor::onAppShow status:", this.status);
    }, this.appHideListener = () => {
      this.status = 1, Rt.log("Adapter powerMonitor::onAppHide status:", this.status);
    }, this.env.onAppShow(this.appShowListener), this.env.onAppHide(this.appHideListener), this.flag = true, Rt.log("Adapter powerMonitor::_initAppLifecycleListener success")) : Rt.warn("Adapter powerMonitor::_initAppLifecycleListener env.onAppShow/env.onAppHide not available"));
  }
  _canIUse() {
    return void 0 !== this.env && "function" == typeof this.env.onAppShow && "function" == typeof this.env.onAppHide && "function" == typeof this.env.offAppShow && "function" == typeof this.env.offAppHide;
  }
};
function getAPIEnv() {
  return "undefined" != typeof tt && tt.getSystemInfoSync ? tt : "undefined" != typeof swan && swan.getSystemInfoSync ? swan : "undefined" != typeof my && my.getSystemInfoSync ? my : "undefined" != typeof wx && wx.getAppBaseInfo ? wx : void 0;
}
var LogStorageImpl = class {
  constructor(t2 = "nim_logs") {
    this.dirPath = "", this.filePath = "", this.copyFilePath = "", this.maxCapacity = 26214400, this.remainCapacity = 8388608, this.count = 0, this.maxCount = 60, this.lastErrorMsg = void 0;
    var o2 = getAPIEnv();
    o2 && (this.dirPath = `${o2.env.USER_DATA_PATH}/__nim`, this.filePath = `${this.dirPath}/${t2}.log`, this.copyFilePath = `${this.dirPath}/${t2}_copy.log`);
  }
  makeDir() {
    var t2 = getAPIEnv();
    if (t2) {
      var o2 = getLogger(), a2 = t2.getFileSystemManager();
      try {
        var m2 = a2.accessSync(this.dirPath);
        o2.log("logStorage::access dir:", m2), ("object" == typeof m2 && null !== m2 ? m2.error || m2.errno || m2.errCode || m2.errNo : 0) > 200 && a2.mkdirSync(this.dirPath, true);
      } catch (t3) {
        a2.mkdirSync(this.dirPath, true);
      }
      try {
        var u2 = a2.accessSync(this.filePath);
        o2.log("logStorage::access file:", u2), ("object" == typeof u2 && null !== u2 ? u2.error || u2.errno || u2.errCode || u2.errNo : 0) > 200 && a2.writeFileSync(this.filePath, "===", "utf8");
      } catch (t3) {
        a2.writeFileSync(this.filePath, "===", "utf8");
      }
    }
  }
  open() {
    return __awaiter(this, void 0, void 0, function* () {
      if (getAPIEnv()) {
        var t2 = getLogger();
        try {
          this.makeDir(), t2.log(`logStorage::open log file success:${this.filePath}`);
        } catch (o2) {
          t2.warn(`logStorage::open log file failed:${this.filePath}`, o2);
        }
        yield this.checkCapacity(this.remainCapacity);
      }
    });
  }
  checkCapacity(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var o2 = getAPIEnv();
      if (o2) {
        var a2 = getLogger(), m2 = o2.getFileSystemManager(), u2 = this.getSize();
        if (u2 > this.maxCapacity) {
          a2.log(`logStorage::checksize:exceed,${u2} byte`);
          var h2 = "";
          try {
            h2 = yield this.readLogs(u2 - t2);
          } catch (t3) {
            return void a2.log("logStorage::checkCapacity:read failed", t3);
          }
          a2.log(`logStorage::checksize:read success ${u2 - t2} byte`);
          try {
            m2.unlinkSync(this.filePath);
          } catch (t3) {
            return void a2.log("logStorage::checkCapacity:unlink failed", t3);
          }
          try {
            m2.writeFileSync(this.filePath, h2, "utf8");
          } catch (t3) {
            return void a2.log("logStorage::checkCapacity:write failed", t3);
          }
        } else
          a2.log(`logStorage::checkCapacity:not exceeding,${u2} byte`);
      }
    });
  }
  getSize() {
    var t2, o2 = getAPIEnv();
    if (!o2)
      return 0;
    var a2, m2 = getLogger(), u2 = o2.getFileSystemManager();
    try {
      a2 = u2.statSync(this.filePath, false);
    } catch (t3) {
      return m2.warn("logStorage::stat failed", t3), 0;
    }
    return a2.size || (null === (t2 = a2.stats) || void 0 === t2 ? void 0 : t2.size);
  }
  readLogs(t2 = 0) {
    var o2 = getAPIEnv();
    if (!o2)
      return Promise.resolve("");
    var a2 = getLogger(), m2 = o2.getFileSystemManager();
    return new Promise((o3, u2) => {
      m2.readFile({ filePath: this.filePath, encoding: "utf8", position: t2, success: (t3) => {
        var m3 = t3.data;
        "string" == typeof m3 ? (a2.warn(`logStorage::readLogs success ${m3.length}`), o3(m3)) : (a2.warn("logStorage::readLogs empty"), u2(new Error("logStorage::readLogs empty")));
      }, fail: (t3) => {
        var o4 = t3.errMsg || t3.errorMessage || t3.message;
        a2.warn(`logStorage::readLogs failed ${o4}`);
        var m3 = { code: t3.errCode || 0, message: o4 };
        u2(m3);
      } });
    });
  }
  close() {
  }
  addLogs(t2) {
    var o2 = getAPIEnv();
    if (!o2)
      return Promise.resolve();
    var a2 = getLogger(), m2 = t2.map((t3) => t3.text).concat("").join("\n");
    try {
      o2.getFileSystemManager().appendFileSync(this.filePath, m2, "utf8");
    } catch (t3) {
      var u2 = t3.errMsg || t3.errorMessage || t3.message;
      this.lastErrorMsg !== u2 && a2.warn("logStorage::append failed", t3), this.lastErrorMsg = u2;
    }
    return this.count += 1, this.count > this.maxCount && (this.count = 0, this.checkCapacity(this.remainCapacity)), Promise.resolve();
  }
  extractLogs() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2 = getAPIEnv();
      if (t2) {
        var o2 = getLogger(), a2 = this.getSize(), m2 = t2.getFileSystemManager();
        if (a2 > 0) {
          try {
            m2.copyFileSync(this.filePath, this.copyFilePath);
          } catch (t3) {
            return void o2.warn("logStorage::copyFileSync failed", t3);
          }
          return this.copyFilePath;
        }
        o2.warn("logStorage::extractLogs empty");
      }
    });
  }
  afterUpload() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2 = getAPIEnv();
      if (t2) {
        var o2 = getLogger(), a2 = t2.getFileSystemManager();
        try {
          a2.unlinkSync(this.copyFilePath);
        } catch (t3) {
          return void o2.log("logStorage::delete copyFilePath failed", t3);
        }
      }
    });
  }
};
var bt = { clear: () => wx.clearStorageSync(), getItem: (t2) => wx.getStorageSync(t2), setItem: (t2, o2) => wx.setStorageSync(t2, o2), removeItem: (t2) => wx.removeStorageSync(t2) };
function requestFn$3(t2, o2) {
  return o2 && (o2.header = o2.headers, o2.data = o2.data || (null == o2 ? void 0 : o2.params) || {}), new Promise((a2, m2) => {
    wx.request(Object.assign(Object.assign({ url: t2 }, o2), { success: function(o3) {
      "number" == typeof (o3 = o3 || {}).statusCode && o3.statusCode.toString().startsWith("2") ? (o3 = { data: o3.data, status: o3.statusCode, errMsg: o3.errMsg, header: o3.header }, a2(o3)) : m2({ code: o3.statusCode || 0, message: o3.data || `wechat request fail. url: ${t2}` });
    }, fail: function(o3) {
      var a3 = `wechat request fail. url: ${t2}`;
      m2(o3 ? { code: 5 === o3.errno ? Me.V2NIM_ERROR_CODE_TIMEOUT : o3.errno, message: o3.errMsg || a3 } : { code: 0, message: a3 });
    } }));
  });
}
function getSystemInfoFn$3() {
  var t2 = wx.getSystemInfoSync() || {};
  return { os: t2.platform || "", osVer: t2.system || "", browser: "", browserVer: "", libEnv: "MINIAPP", hostEnv: "WeiXin", hostEnvEnum: 6, hostEnvVer: t2.version, model: t2.SDKVersion, manufactor: "WeiXin", userAgent: `NIM/Web/WeChatMiniApp(${t2.SDKVersion})/V10.9.41/{{appkey}}`, pushDeviceInfo: { PRODUCT: t2.model, DEVICE: t2.model, MANUFACTURER: t2.brand } };
}
function uploadFileFn$3(t2) {
  var o2 = getLogger(), a2 = t2.headers || {};
  return t2.md5 && (a2["Content-MD5"] = t2.md5), new Promise((m2, u2) => {
    var h2 = wx.uploadFile(Object.assign(Object.assign({ url: `${t2.commonUploadHost}/${t2.nosToken.bucket}`, header: a2 }, Object.keys(a2).length > 0 ? { header: a2 } : {}), { formData: { Object: decodeURIComponent(t2.nosToken.objectName), "x-nos-token": t2.nosToken.token, "x-nos-entity-type": "json" }, name: "file", filePath: t2.filePath, success(o3) {
      if (200 == o3.statusCode)
        try {
          var a3 = JSON.parse(o3.data);
          a3.name = t2.filePath, a3.ext = a3.name.lastIndexOf(".") > -1 ? a3.name.slice(a3.name.lastIndexOf(".") + 1).toLowerCase() : "", m2(a3);
        } catch (t3) {
          u2({ code: o3.statusCode, message: o3.errMsg, rawData: o3.data });
        }
      else
        u2({ code: o3.statusCode, message: o3.errMsg, rawData: o3.data });
    }, fail(t3) {
      t3.code = "uploadFile:fail abort" === t3.errMsg ? Me.V2NIM_ERROR_CODE_CANCELLED : t3.errno, t3.message = t3.errMsg, u2(t3);
    } }));
    try {
      t2.onUploadStart && t2.onUploadStart(h2);
    } catch (t3) {
      o2.error("uploadFile: options.onUploadStart error", t3), h2.abort(), u2(t3);
    }
    t2.onUploadProgress && h2.onProgressUpdate(function(o3) {
      t2.onUploadProgress && t2.onUploadProgress({ total: o3.totalBytesExpectedToSend, loaded: o3.totalBytesSent, percentage: parseFloat((o3.totalBytesSent / o3.totalBytesExpectedToSend).toFixed(2)), percentageText: o3.progress + "%" });
    });
  });
}
function getFileUploadInformationFn$3(t2) {
  return null;
}
var WebSocketFn$3 = class {
  constructor(t2, o2 = "") {
    if (this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3, this.binaryType = "", this.onclose = function(t3) {
      getLogger().log("wx-app: sockets on close ", t3);
    }, this.onerror = function(t3) {
      getLogger().error("wx-app: sockets error ", t3);
    }, this.onmessage = function(t3) {
    }, this.onopen = function() {
    }, !t2)
      throw new Error("Failed to construct 'socket': url required");
    this.url = t2.replace(/:443(\/|$)/, "$1"), this.protocol = o2, this.readyState = this.CONNECTING;
    var a2 = this.protocol ? { protocols: [this.protocol] } : {};
    this.socketTask = wx.connectSocket(Object.assign(Object.assign({ url: this.url }, a2), { fail: (t3) => {
      this.errorHandler(t3);
    }, success: () => {
    } })), this.socketTask.onOpen((t3) => {
      this.readyState = this.OPEN, this.binaryType ? this.onopen() : this.onmessage && this.onmessage({ type: "open", header: t3 });
    }), this.socketTask.onError((t3) => {
      this.errorHandler(t3);
    }), this.socketTask.onClose((t3) => {
      this.readyState = this.CLOSED;
      var { code: o3, reason: a3, wasClean: m2 } = t3;
      "function" == typeof this.onclose && this.onclose && this.onclose({ code: o3, reason: a3, wasClean: m2, type: "close" });
    }), this.socketTask.onMessage((t3) => {
      this.onmessage && this.onmessage(t3);
    });
  }
  close() {
    this.socketTask.close({ code: 1e3, reason: "user force close websocket", complete: () => {
      this.socketTask = null;
    } });
  }
  send(t2) {
    if (this.readyState !== this.OPEN)
      throw new Error(`wx-app: socket sendMsg when readyState=${this.readyState}`);
    if (!("string" == typeof t2 || t2 instanceof ArrayBuffer))
      throw new TypeError("wx-app: socket sendMsg only String/ArrayBuffer supported");
    this.socketTask.send({ data: t2 });
  }
  errorHandler(t2) {
    getLogger().error("wx-app::ws: onerror ", t2), this.readyState = this.CLOSED, this.onerror && this.onerror({ type: "error", message: t2 && t2.errMsg });
  }
};
var getAdapter$3 = () => ({ setLogger, platform: "WXAPP", localStorage: bt, request: requestFn$3, WebSocket: WebSocketFn$3, uploadFile: uploadFileFn$3, getFileUploadInformation: getFileUploadInformationFn$3, getSystemInfo: getSystemInfoFn$3, net: getNetFn(wx), powerMonitor: new PowerMonitor(wx), logStorage: LogStorageImpl });
var Vt = { clear() {
  my.clearStorageSync();
}, getItem: (t2) => my.getStorageSync({ key: t2 }).data, setItem: (t2, o2) => my.setStorageSync({ key: t2, data: o2 }), removeItem: (t2) => my.removeStorageSync({ key: t2 }) };
function requestFn$2(t2, o2) {
  return o2 && (o2.data = o2.data || (null == o2 ? void 0 : o2.params) || {}), new Promise((a2, m2) => {
    my.request(Object.assign(Object.assign({ url: t2 }, o2), { success: function(o3) {
      "number" == typeof (o3 = o3 || {}).status && o3.status.toString().startsWith("2") ? (o3 = { data: o3.data, status: o3.status, errMsg: o3.errMsg, header: o3.header }, a2(o3)) : m2({ code: o3.status || 0, message: o3.data || `ali request fail. url: ${t2}` });
    }, fail: function(o3) {
      var a3 = `ali request fail. url: ${t2}`;
      m2(o3 ? { code: 13 === o3.error ? Me.V2NIM_ERROR_CODE_TIMEOUT : o3.error, message: o3.errorMessage || a3 } : { code: 0, message: a3 });
    } }));
  });
}
function getSystemInfoFn$2() {
  var t2 = my.getSystemInfoSync() || {};
  return { libEnv: "MINIAPP", os: t2.platform || "", osVer: t2.system || "", browser: "", browserVer: "", hostEnv: "Ali", hostEnvEnum: 102, hostEnvVer: t2.version, userAgent: `NIM/Web/AliMiniApp(${my.SDKVersion})/V10.9.41/{{appkey}}`, model: my.SDKVersion, manufactor: "Ali", pushDeviceInfo: { PRODUCT: t2.model, DEVICE: t2.model, MANUFACTURER: t2.brand } };
}
function uploadFileFn$2(t2) {
  var o2 = getLogger(), a2 = t2.headers || {};
  return t2.md5 && (a2["Content-MD5"] = t2.md5), new Promise((m2, u2) => {
    var h2 = my.uploadFile(Object.assign(Object.assign({ url: `${t2.commonUploadHost}/${t2.nosToken.bucket}` }, Object.keys(a2).length > 0 ? { header: a2 } : {}), { formData: { Object: decodeURIComponent(t2.nosToken.objectName), "x-nos-token": t2.nosToken.token, "x-nos-entity-type": "json" }, fileType: t2.type, fileName: "file", filePath: t2.filePath, success(o3) {
      if (200 == o3.statusCode)
        try {
          var a3 = JSON.parse(o3.data);
          a3.name = t2.filePath, a3.ext = a3.name.lastIndexOf(".") > -1 ? a3.name.slice(a3.name.lastIndexOf(".") + 1).toLowerCase() : "", m2(a3);
        } catch (t3) {
          u2({ code: o3.statusCode, message: o3.errMsg, rawData: o3.data });
        }
      else
        u2({ code: o3.statusCode, message: o3.errMsg, rawData: o3.data });
    }, fail(t3) {
      t3.code = 9 === t3.error ? Me.V2NIM_ERROR_CODE_CANCELLED : t3.error, t3.message = t3.errorMessage, u2(t3);
    } }));
    try {
      t2.onUploadStart && t2.onUploadStart(h2);
    } catch (t3) {
      o2.error("uploadFile: options.onUploadStart error", t3), h2.abort(), u2(t3);
    }
    t2.onUploadProgress && h2.onProgressUpdate(function(o3) {
      t2.onUploadProgress && t2.onUploadProgress({ total: o3.totalBytesExpectedToWrite, loaded: o3.totalBytesWritten, percentage: parseFloat((o3.totalBytesWritten / o3.totalBytesExpectedToWrite).toFixed(2)), percentageText: o3.progress + "%" });
    });
  });
}
function getFileUploadInformationFn$2(t2) {
  return null;
}
var WebSocketFn$2 = class {
  constructor(t2, o2 = "") {
    if (this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3, this.binaryType = "", this.onclose = function(t3) {
      getLogger().log("my-app: sockets on close ", t3);
    }, this.onerror = function(t3) {
      getLogger().error("my-app: sockets error ", t3);
    }, this.onmessage = function(t3) {
    }, this.onopen = function() {
    }, !t2)
      throw new Error("Failed to construct 'socket': url required");
    this.url = t2.replace(/:443(\/|$)/, "$1"), this.protocol = o2, this.readyState = this.CONNECTING, this.socketTask = my.connectSocket({ url: this.url, multiple: true, fail: (t3) => {
      this.errorHandler(t3);
    }, success: () => {
      this.readyState = this.OPEN;
    } }), this.socketTask.onOpen((t3) => {
      this.readyState = this.OPEN, this.binaryType ? this.onopen() : this.onmessage && this.onmessage({ type: "open", header: t3 });
    }), this.socketTask.onError((t3) => {
      this.errorHandler(t3);
    }), this.socketTask.onClose((t3) => {
      this.readyState = this.CLOSED;
      var { code: o3, reason: a2, wasClean: m2 } = t3;
      "function" == typeof this.onclose && this.onclose && this.onclose({ code: o3, reason: a2, wasClean: m2, type: "close" }), this.socketTask = null;
    }), this.socketTask.onMessage((t3) => {
      var o3, a2 = null === (o3 = t3.data) || void 0 === o3 ? void 0 : o3.data, m2 = a2;
      t3.data.isBuffer && (m2 = base64ToArrayBuffer(a2)), this.onmessage && this.onmessage({ data: m2 });
    });
  }
  close() {
    this.socketTask && this.socketTask.close({ code: 1e3, reason: "user force close websocket", complete: () => {
      this.socketTask = null;
    } });
  }
  send(t2) {
    if (this.readyState !== this.OPEN)
      throw new Error(`my-app: socket sendMsg when readyState=${this.readyState}`);
    if (!("string" == typeof t2 || t2 instanceof ArrayBuffer))
      throw new TypeError("my-app: socket sendMsg only String/ArrayBuffer supported");
    this.socketTask && this.socketTask.send({ data: t2, isBuffer: t2 instanceof ArrayBuffer });
  }
  errorHandler(t2) {
    getLogger().error("my-app::ws: onerror ", t2), this.readyState = this.CLOSED, this.onerror && this.onerror({ type: "error", code: null == t2 ? void 0 : t2.error, message: null == t2 ? void 0 : t2.errorMessage });
  }
};
var getAdapter$2 = () => ({ setLogger, platform: "ALIAPP", localStorage: Vt, request: requestFn$2, WebSocket: WebSocketFn$2, uploadFile: uploadFileFn$2, getSystemInfo: getSystemInfoFn$2, getFileUploadInformation: getFileUploadInformationFn$2, net: getNetFn(my), powerMonitor: new PowerMonitor(my), logStorage: LogStorageImpl });
var kt = { clear() {
  swan.clearStorageSync();
}, getItem: (t2) => swan.getStorageSync(t2), setItem: (t2, o2) => swan.setStorageSync(t2, o2), removeItem: (t2) => swan.removeStorageSync(t2) };
function requestFn$1(t2, o2) {
  return o2 && (o2.header = o2.headers, o2.data = o2.data || (null == o2 ? void 0 : o2.params) || {}), new Promise((a2, m2) => {
    swan.request(Object.assign(Object.assign({ url: t2 }, o2), { success: function(o3) {
      "number" == typeof (o3 = o3 || {}).statusCode && o3.statusCode.toString().startsWith("2") ? (o3 = { data: o3.data, status: o3.statusCode, errMsg: o3.errMsg, header: o3.header }, a2(o3)) : m2({ code: o3.statusCode || 0, message: o3.data || `baidu request fail. url: ${t2}` });
    }, fail: function(o3) {
      var a3 = `baidu request fail. url: ${t2}`;
      m2(o3 ? { code: 1 === o3.errCode ? Me.V2NIM_ERROR_CODE_TIMEOUT : o3.errCode, message: o3.errMsg || a3 } : { code: 0, message: a3 });
    } }));
  });
}
function getSystemInfoFn$1() {
  var t2 = swan.getSystemInfoSync() || {};
  return { os: t2.platform || "", osVer: t2.system || "", browser: "", browserVer: "", libEnv: "MINIAPP", hostEnv: "Baidu", userAgent: `NIM/Web/BaiduMiniApp(${t2.SDKVersion})/V10.9.41/{{appkey}}`, hostEnvVer: t2.version, hostEnvEnum: 103, model: t2.SDKVersion, manufactor: "Baidu", pushDeviceInfo: { PRODUCT: t2.model, DEVICE: t2.model, MANUFACTURER: t2.brand } };
}
function uploadFileFn$1(t2) {
  var o2 = getLogger(), a2 = t2.headers || {};
  return t2.md5 && (a2["Content-MD5"] = t2.md5), new Promise((m2, u2) => {
    var h2 = swan.uploadFile(Object.assign(Object.assign({ url: `${t2.commonUploadHost}/${t2.nosToken.bucket}` }, Object.keys(a2).length > 0 ? { header: a2 } : {}), { formData: { Object: decodeURIComponent(t2.nosToken.objectName), "x-nos-token": t2.nosToken.token, "x-nos-entity-type": "json" }, name: "file", filePath: t2.filePath, success(o3) {
      if (200 == o3.statusCode)
        try {
          var a3 = JSON.parse(o3.data);
          a3.name = t2.filePath, a3.ext = a3.name.lastIndexOf(".") > -1 ? a3.name.slice(a3.name.lastIndexOf(".") + 1).toLowerCase() : "", m2(a3);
        } catch (t3) {
          u2({ code: o3.statusCode, message: o3.errMsg, rawData: o3.data });
        }
      else
        u2({ code: o3.statusCode, message: o3.errMsg, rawData: o3.data });
    }, fail(t3) {
      t3.code = "uploadFile:fail abort" === t3.errMsg ? Me.V2NIM_ERROR_CODE_CANCELLED : t3.errCode, t3.message = t3.errMsg, u2(t3);
    } }));
    try {
      t2.onUploadStart && t2.onUploadStart(h2);
    } catch (t3) {
      o2.error("uploadFile: options.onUploadStart error", t3), h2.abort(), u2(t3);
    }
    t2.onUploadProgress && h2.onProgressUpdate(function(o3) {
      t2.onUploadProgress && t2.onUploadProgress({ total: o3.totalBytesExpectedToSend, loaded: o3.totalBytesSent, percentage: parseFloat((o3.totalBytesSent / o3.totalBytesExpectedToSend).toFixed(2)), percentageText: o3.progress + "%" });
    });
  });
}
function getFileUploadInformationFn$1(t2) {
  return null;
}
var WebSocketFn$1 = class {
  constructor(t2, o2 = "") {
    if (this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3, this.binaryType = "", this.onclose = function(t3) {
      getLogger().log("baidu-app: sockets on close ", t3);
    }, this.onerror = function(t3) {
      getLogger().error("baidu-app: sockets error ", t3);
    }, this.onmessage = function(t3) {
    }, this.onopen = function() {
    }, !t2)
      throw new Error("Failed to construct 'socket': url required");
    this.url = t2.replace(/:443(\/|$)/, "$1"), this.protocol = o2, this.readyState = this.CONNECTING;
    var a2 = this.protocol ? { protocols: [this.protocol] } : {};
    this.socketTask = swan.connectSocket(Object.assign(Object.assign({ url: this.url }, a2), { fail: (t3) => {
      this.errorHandler(t3);
    }, success: () => {
    } })), this.socketTask.onOpen((t3) => {
      this.readyState = this.OPEN, this.binaryType ? this.onopen() : this.onmessage && this.onmessage({ type: "open", header: t3 });
    }), this.socketTask.onError((t3) => {
      this.errorHandler(t3);
    }), this.socketTask.onClose((t3) => {
      this.readyState = this.CLOSED;
      var { code: o3, reason: a3, wasClean: m2 } = t3;
      "function" == typeof this.onclose && this.onclose && this.onclose({ code: o3, reason: a3, wasClean: m2, type: "close" });
    }), this.socketTask.onMessage((t3) => {
      this.onmessage && this.onmessage({ data: t3.data });
    });
  }
  close() {
    this.socketTask.close({ code: 1e3, reason: "user force close websocket", complete: () => {
      this.socketTask = null;
    } });
  }
  send(t2) {
    if (this.readyState !== this.OPEN)
      throw new Error(`wx-app: socket sendMsg when readyState=${this.readyState}`);
    if (!("string" == typeof t2 || t2 instanceof ArrayBuffer))
      throw new TypeError("wx-app: socket sendMsg only String/ArrayBuffer supported");
    this.socketTask.send({ data: t2 });
  }
  errorHandler(t2) {
    this.readyState = this.CLOSED, this.onerror && this.onerror({ type: "error", message: t2 && t2.errMsg });
  }
};
var getAdapter$1 = () => ({ setLogger, platform: "BAIDUAPP", localStorage: kt, request: requestFn$1, WebSocket: WebSocketFn$1, uploadFile: uploadFileFn$1, getFileUploadInformation: getFileUploadInformationFn$1, getSystemInfo: getSystemInfoFn$1, net: getNetFn(swan) });
var Pt = { clear() {
  tt.clearStorageSync();
}, getItem: (t2) => tt.getStorageSync(t2), setItem: (t2, o2) => tt.setStorageSync(t2, o2), removeItem: (t2) => tt.removeStorageSync(t2) };
function requestFn(t2, o2) {
  return o2 && (o2.header = o2.headers, o2.data = o2.data || (null == o2 ? void 0 : o2.params) || {}), new Promise((a2, m2) => {
    tt.request(Object.assign(Object.assign({ url: t2 }, o2), { success: function(o3) {
      "number" == typeof (o3 = o3 || {}).statusCode && o3.statusCode.toString().startsWith("2") ? (o3 = { data: o3.data, status: o3.statusCode, errMsg: o3.errMsg, header: o3.header }, a2(o3)) : m2({ code: o3.statusCode || 0, message: o3.data || `tt request fail. url: ${t2}` });
    }, fail: function(o3) {
      var a3 = `tt request fail. url: ${t2}`;
      m2(o3 ? { code: 21103 === o3.errNo ? Me.V2NIM_ERROR_CODE_TIMEOUT : o3.errNo, message: o3.errMsg || a3 } : { code: 0, message: a3 });
    } }));
  });
}
function getSystemInfoFn() {
  var t2 = tt.getSystemInfoSync() || {};
  return { os: t2.platform || "", osVer: t2.system || "", browser: "", browserVer: "", libEnv: "MINIAPP", hostEnv: "Tiktok", hostEnvEnum: 104, hostEnvVer: t2.version, model: t2.SDKVersion, manufactor: "Tiktok", userAgent: `NIM/Web/TiktokMiniApp(${t2.SDKVersion})/V10.9.41/{{appkey}}`, pushDeviceInfo: { PRODUCT: t2.model, DEVICE: t2.model, MANUFACTURER: t2.brand } };
}
function uploadFileFn(t2) {
  var o2 = getLogger(), a2 = t2.headers || {};
  return t2.md5 && (a2["Content-MD5"] = t2.md5), new Promise((m2, u2) => {
    var h2 = tt.uploadFile(Object.assign(Object.assign({ url: `${t2.commonUploadHost}/${t2.nosToken.bucket}` }, Object.keys(a2).length > 0 ? { header: a2 } : {}), { formData: { Object: decodeURIComponent(t2.nosToken.objectName), "x-nos-token": t2.nosToken.token, "x-nos-entity-type": "json" }, name: "file", filePath: t2.filePath, success(o3) {
      if (200 == o3.statusCode)
        try {
          var a3 = JSON.parse(o3.data);
          a3.name = t2.filePath, a3.ext = a3.name.lastIndexOf(".") > -1 ? a3.name.slice(a3.name.lastIndexOf(".") + 1).toLowerCase() : "", m2(a3);
        } catch (t3) {
          u2({ code: o3.statusCode, message: o3.errMsg, rawData: o3.data });
        }
      else
        u2({ code: o3.statusCode, message: o3.errMsg, rawData: o3.data });
    }, fail(t3) {
      t3.code = 21104 === t3.errNo ? Me.V2NIM_ERROR_CODE_CANCELLED : t3.errNo, t3.message = t3.errMsg, u2(t3);
    } }));
    try {
      t2.onUploadStart && t2.onUploadStart(h2);
    } catch (t3) {
      o2.error("uploadFile: options.onUploadStart error", t3), h2.abort(), u2(t3);
    }
    t2.onUploadProgress && h2.onProgressUpdate(function(o3) {
      t2.onUploadProgress && t2.onUploadProgress({ total: o3.totalBytesExpectedToSend, loaded: o3.totalBytesSent, percentage: parseFloat((o3.totalBytesSent / o3.totalBytesExpectedToSend).toFixed(2)), percentageText: o3.progress + "%" });
    });
  });
}
function getFileUploadInformationFn(t2) {
  return null;
}
var WebSocketFn = class {
  constructor(t2, o2 = "") {
    if (this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3, this.binaryType = "", this.onclose = function(t3) {
      getLogger().log("wx-app: sockets on close ", t3);
    }, this.onerror = function(t3) {
      getLogger().error("wx-app: sockets error ", t3);
    }, this.onmessage = function(t3) {
    }, this.onopen = function() {
    }, !t2)
      throw new Error("Failed to construct 'socket': url required");
    this.url = t2.replace(/:443(\/|$)/, "$1"), this.protocol = o2, this.readyState = this.CONNECTING;
    var a2 = this.protocol ? { protocols: [this.protocol] } : {};
    this.socketTask = tt.connectSocket(Object.assign(Object.assign({ url: this.url }, a2), { fail: (t3) => {
      this.errorHandler(t3);
    }, success: () => {
    } })), this.socketTask.onOpen((t3) => {
      this.readyState = this.OPEN, this.binaryType ? this.onopen() : this.onmessage && this.onmessage({ type: "open", header: t3.header });
    }), this.socketTask.onError((t3) => {
      this.errorHandler(t3);
    }), this.socketTask.onClose((t3) => {
      this.readyState = this.CLOSED;
      var { code: o3, reason: a3, wasClean: m2 } = t3;
      "function" == typeof this.onclose && this.onclose && this.onclose({ code: o3, reason: a3, wasClean: m2, type: "close" });
    }), this.socketTask.onMessage((t3) => {
      this.onmessage && this.onmessage({ data: t3.data });
    });
  }
  close() {
    this.socketTask && this.socketTask.close({ code: 1e3, reason: "user force close websocket", complete: () => {
    } });
  }
  send(t2) {
    if (this.readyState !== this.OPEN)
      throw new Error(`tt-app: socket sendMsg when readyState=${this.readyState}`);
    if (!("string" == typeof t2 || t2 instanceof ArrayBuffer))
      throw new TypeError("tt-app: socket sendMsg only String/ArrayBuffer supported");
    this.socketTask && this.socketTask.send({ data: t2 });
  }
  errorHandler(t2) {
    getLogger().error("tt-app::ws: onerror ", t2), this.readyState = this.CLOSED, this.onerror && this.onerror({ type: "error", message: t2 && t2.errMsg });
  }
};
var getAdapter = () => ({ setLogger, platform: "TTAPP", localStorage: Pt, request: requestFn, WebSocket: WebSocketFn, uploadFile: uploadFileFn, getSystemInfo: getSystemInfoFn, getFileUploadInformation: getFileUploadInformationFn, net: getNetFn(tt) });
var V2NIMConversationIdUtilImpl = class {
  constructor(t2) {
    this.name = "V2NIMConversationIdUtil", this.core = t2;
  }
  conversationId(t2, o2) {
    return `${this.core.account}|${t2}|${o2}`;
  }
  p2pConversationId(t2) {
    return `${this.core.account}|1|${t2}`;
  }
  teamConversationId(t2) {
    return `${this.core.account}|2|${t2}`;
  }
  superTeamConversationId(t2) {
    return `${this.core.account}|3|${t2}`;
  }
  messageConversationId(t2) {
    return 1 === t2.conversationType ? t2.senderId === this.core.account ? this.p2pConversationId(t2.receiverId) : this.p2pConversationId(t2.senderId) : 2 === t2.conversationType ? this.teamConversationId(t2.receiverId) : this.superTeamConversationId(t2.receiverId);
  }
  parseConversationType(t2) {
    try {
      if (t2 && t2.startsWith(`${this.core.account}|`)) {
        var o2 = t2.replace(`${this.core.account}|`, "");
        return Number(o2[0]);
      }
      return this.core.logger.warn(`conversationId is not start with ${this.core.account}`), 0;
    } catch (t3) {
      return 0;
    }
  }
  parseConversationTargetId(t2) {
    try {
      return t2 && t2.startsWith(`${this.core.account}|`) ? t2.replace(`${this.core.account}|`, "").slice(2) : (this.core.logger.warn(`conversationId is not start with ${this.core.account}`), "");
    } catch (t3) {
      return "";
    }
  }
  convertToV1ConversationId(t2) {
    var o2 = this.parseConversationType(t2);
    return `${1 === o2 ? "p2p" : 2 === o2 ? "team" : "superTeam"}|${this.parseConversationTargetId(t2)}`;
  }
};
var V2NIMMessageModelImpl = class {
  constructor() {
    this.messages = /* @__PURE__ */ new Map(), this.capacity = 1e4;
  }
  reset() {
    this.messages.clear();
  }
  getMessageById(t2) {
    if (t2)
      return this.messages.get(t2);
  }
  getMessagesByConversationId(t2) {
    var o2 = [];
    return this.messages.forEach((a2) => {
      a2.conversationId === t2 && o2.push(a2);
    }), o2;
  }
  getLastMessageOfConversation(t2) {
    var o2 = this.getMessagesByConversationId(t2);
    if (0 !== o2.length)
      return o2.reduce((t3, o3) => o3.createTime > t3.createTime ? o3 : t3, o2[0]);
  }
  upsertMessages(t2) {
    t2.forEach((t3) => {
      this.setLRU(t3.messageClientId, t3);
    });
  }
  setLRU(t2, o2) {
    if (this.messages.has(t2))
      this.messages.delete(t2);
    else if (this.messages.size >= this.capacity) {
      var a2 = this.messages.keys().next().value;
      a2 && this.messages.delete(a2);
    }
    this.messages.set(t2, o2);
  }
  deleteMessage(t2) {
    this.messages.delete(t2);
  }
  deleteMessages(t2, o2) {
    this.messages.forEach((a2) => {
      t2 === a2.conversationId && (!o2 || o2 && a2.createTime < o2) && this.messages.delete(a2.messageClientId);
    });
  }
};
var Lt = { accountId: { type: "string", allowEmpty: false }, content: { type: "object", required: false, rules: { msg: { type: "string", allowEmpty: false }, type: { type: "number", allowEmpty: false } } }, messages: { type: "array", required: false, rules: { msg: { type: "string", allowEmpty: false }, type: { type: "number" }, role: { type: "enum", values: ["assistant", "user", "system"] } } }, promptVariables: { type: "jsonstr", required: false }, modelConfigParams: { type: "object", required: false, rules: { prompt: { type: "string", required: false }, maxTokens: { type: "number", required: false }, topP: { type: "number", required: false }, temperature: { type: "number", required: false } } }, aiStream: { type: "boolean", required: false } };
var wt = Object.assign({ requestId: { type: "string", allowEmpty: false } }, Lt);
var Dt = { requestId: { type: "string", allowEmpty: false }, accountId: { type: "string", allowEmpty: false } };
var Ut = [1, 3, 2, 0];
var xt = [2, 7, 12, 100, 6, 1, -1, 4, 5, 11, 0, 10, 3];
var Ft = { routeEnabled: { type: "boolean", required: false }, routeEnvironment: { type: "string", required: false } };
var Bt = { pushEnabled: { type: "boolean", required: false }, pushNickEnabled: { type: "boolean", required: false }, pushContent: { type: "string", required: false }, pushPayload: { type: "string", required: false }, forcePush: { type: "boolean", required: false }, forceContent: { type: "string", required: false }, forcePushAccountIds: { type: "array", required: false, itemType: "string" } };
var $t = { antispamEnabled: { type: "boolean", required: false }, antispamBusinessId: { type: "string", required: false }, antispamCustomMessage: { type: "string", required: false }, antispamCheating: { type: "string", required: false }, antispamExtension: { type: "string", required: false } };
var jt = { messageConfig: { type: "object", required: false, rules: { readReceiptEnabled: { type: "boolean", required: false }, lastMessageUpdateEnabled: { type: "boolean", required: false }, historyEnabled: { type: "boolean", required: false }, roamingEnabled: { type: "boolean", required: false }, onlineSyncEnabled: { type: "boolean", required: false }, offlineEnabled: { type: "boolean", required: false }, unreadEnabled: { type: "boolean", required: false } } }, routeConfig: { type: "object", required: false, rules: Ft }, pushConfig: { type: "object", required: false, rules: Bt }, antiSpamConfig: { type: "object", required: false, rules: $t }, robotConfig: { type: "object", required: false, rules: { accountId: { type: "string", required: false }, topic: { type: "string", required: false }, function: { type: "string", required: false }, customContent: { type: "string", required: false } } }, aiConfig: { type: "object", required: false, rules: Lt }, targetConfig: { type: "object", required: false, rules: { receiverIds: { type: "array", itemType: "string" }, inclusive: { type: "boolean" }, newMemberVisible: { type: "boolean", required: false } } }, clientAntispamEnabled: { type: "boolean", required: false }, clientAntispamReplace: { type: "string", required: false } };
var Gt = { message: { type: "object", rules: { text: { type: "string", required: false }, messageType: { type: "enum", values: xt }, messageClientId: { type: "string", allowEmpty: false } } }, params: { type: "object", rules: jt, required: false }, replyMessage: { type: "object", rules: { conversationType: { type: "enum", values: [1, 3, 2, 0] }, receiverId: { type: "string", allowEmpty: false }, senderId: { type: "string", allowEmpty: false }, messageClientId: { type: "string", allowEmpty: false }, messageServerId: { type: "string", allowEmpty: false }, createTime: { type: "number" } } } };
var qt = { conversationId: { type: "string", allowEmpty: false }, message: { type: "object", rules: { text: { type: "string", required: false }, messageType: { type: "enum", values: xt }, messageClientId: { type: "string", allowEmpty: false }, attachment: { type: "object", required: false, rules: { file: { type: "file", required: false } } } } }, params: { type: "object", required: false, rules: jt } };
var Ht = { message: { type: "object", rules: { messageClientId: { type: "string", allowEmpty: false }, messageServerId: { type: "string", allowEmpty: false }, conversationType: { type: "enum", values: Ut }, createTime: { type: "number" } } }, params: { type: "object", rules: { postscript: { type: "string", required: false }, serverExtension: { type: "string", required: false }, pushContent: { type: "string", required: false }, pushPayload: { type: "string", required: false }, env: { type: "string", required: false } }, required: false } };
var zt = { conversationId: { type: "string", allowEmpty: false }, messageTypes: { type: "array", required: false, itemType: "enum", values: xt }, beginTime: { type: "number", required: false }, endTime: { type: "number", required: false }, limit: { type: "number", min: 1, required: false }, direction: { type: "enum", values: [1, 0], required: false }, anchorMessage: { type: "object", required: false, rules: { messageServerId: { type: "string", allowEmpty: false }, createTime: { type: "number" } } } };
var Yt = { conversationType: { type: "enum", values: Ut }, receiverId: { type: "string", allowEmpty: false }, senderId: { type: "string", allowEmpty: false }, messageServerId: { type: "string", allowEmpty: false }, messageClientId: { type: "string", allowEmpty: false } };
var Kt = { messageRefers: { type: "array", required: true, rules: Yt } };
var Wt = { conversationId: { type: "string", allowEmpty: false }, conversationType: { type: "enum", values: Ut }, receiverId: { type: "string", allowEmpty: false }, senderId: { type: "string", allowEmpty: false }, messageClientId: { type: "string", allowEmpty: false }, createTime: { type: "number" } };
var Jt = { messages: { type: "array", rules: Wt } };
var Xt = { conversationId: { type: "string", allowEmpty: false }, serverExtension: { type: "string", required: false }, onlineSync: { type: "boolean", required: false }, deleteRoam: { type: "boolean", required: false }, clearMode: { type: "enum", values: [0, 1, 2], required: false } };
var Qt = { serverExtension: { type: "string", required: false } };
var Zt = { messageClientId: { type: "string", allowEmpty: false }, conversationType: { type: "enum", values: [1] }, receiverId: { type: "string", allowEmpty: false }, createTime: { type: "number" } };
var er = { messages: { type: "array", rules: { messageClientId: { type: "string", allowEmpty: false }, conversationType: { type: "enum", values: [2] }, receiverId: { type: "string", allowEmpty: false }, createTime: { type: "number" } }, min: 1 } };
var tr = { voiceUrl: { type: "string", required: false, allowEmpty: false }, file: { type: "file", required: false }, voicePath: { type: "string", required: false, allowEmpty: false }, mimeType: { type: "string", required: false, allowEmpty: false }, sampleRate: { type: "string", required: false, allowEmpty: false }, duration: { type: "number", required: true, min: 0 }, sceneName: { type: "string", required: false } };
var rr = { message: { type: "object", rules: { conversationType: { type: "enum", values: Ut }, receiverId: { type: "string", allowEmpty: false }, senderId: { type: "string", allowEmpty: false }, messageServerId: { type: "string", allowEmpty: false }, messageClientId: { type: "string", allowEmpty: false }, createTime: { type: "number" } } }, index: { type: "number", min: 1 }, serverExtension: { type: "string", required: false }, pushConfig: { type: "object", required: false, rules: { pushEnabled: { type: "boolean", required: false }, needBadge: { type: "boolean", required: false }, title: { type: "string", required: false, allowEmpty: false }, content: { type: "string", required: false, allowEmpty: false }, pushPayload: { type: "string", required: false, allowEmpty: false } } } };
var ir = { messages: { type: "array", rules: { conversationType: { type: "enum", values: [1, 3, 2, 0] }, receiverId: { type: "string", allowEmpty: false }, senderId: { type: "string", allowEmpty: false }, messageServerId: { type: "string", allowEmpty: false }, messageClientId: { type: "string", allowEmpty: false }, createTime: { type: "number" } } } };
var or = { params: { type: "object", rules: { collectionType: { type: "number", min: 1 }, collectionData: { type: "string", allowEmpty: false }, serverExtension: { type: "string", required: false }, uniqueId: { type: "string", required: false } } } };
var sr = { collections: { type: "array", min: 1, rules: { collectionId: { type: "string", allowEmpty: false }, createTime: { type: "number" } } } };
var nr = { serverExtension: { type: "string", required: false }, collection: { type: "object", rules: { collectionId: { type: "string", allowEmpty: false }, collectionType: { type: "number" }, createTime: { type: "number" } } } };
var ar = { beginTime: { type: "number", required: false }, endTime: { type: "number", required: false }, limit: { type: "number", min: 1, required: false }, direction: { type: "enum", required: false, values: [1, 0] }, collectionType: { type: "number", required: false }, anchorCollection: { type: "object", required: false, rules: { collectionId: { type: "string", allowEmpty: false, required: false }, createTime: { type: "number", required: false } } } };
var cr = { keyword: { type: "string", allowEmpty: false }, beginTime: { type: "number", required: false }, endTime: { type: "number", required: false }, sortOrder: { type: "enum", values: [1, 0], required: false }, conversationLimit: { type: "number", min: 0, required: false }, messageLimit: { type: "number", min: 1, required: false }, p2pAccountIds: { type: "array", required: false, itemType: "string" }, teamIds: { type: "array", required: false, itemType: "string" }, senderAccountIds: { type: "array", required: false, itemType: "string" }, messageTypes: { type: "array", required: false, itemType: "enum", values: xt }, messageSubtypes: { type: "array", required: false, itemType: "number" } };
var dr = { conversationId: { type: "string", required: false, allowEmpty: false }, keywordList: { type: "array", required: false, itemType: "string" }, keywordMatchType: { type: "enum", values: [1, 0], required: false }, senderAccountIds: { type: "array", required: false, itemType: "string" }, messageTypes: { type: "array", required: false, itemType: "enum", values: xt }, messageSubtypes: { type: "array", required: false, itemType: "number" }, searchStartTime: { type: "number", required: false }, searchTimePeriod: { type: "number", required: false }, limit: { type: "number", min: 1, required: false }, direction: { type: "enum", values: [0, 1], required: false }, pageToken: { type: "string", required: false } };
var lr = { message: { type: "object", rules: { receiverId: { type: "string", allowEmpty: false }, messageServerId: { type: "string", allowEmpty: false }, conversationType: { type: "enum", values: [2] } } } };
var pr = { messages: { type: "array", rules: { receiverId: { type: "string", allowEmpty: false }, messageServerId: { type: "string", allowEmpty: false }, conversationType: { type: "enum", values: [2] } }, min: 1 } };
var mr = { sceneName: { type: "string", required: false }, name: { type: "string", required: false } };
var ur = Object.assign(Object.assign({}, mr), { duration: { type: "number", required: false } });
var hr = Object.assign(Object.assign({}, ur), { width: { type: "number", required: false }, height: { type: "number", required: false } });
var gr = Object.assign(Object.assign({}, mr), { width: { type: "number", required: false }, height: { type: "number", required: false } });
var vr = { messageRefer: { type: "object", required: true, rules: Yt }, beginTime: { type: "number", required: false }, endTime: { type: "number", required: false }, limit: { type: "number", min: 1, required: false }, direction: { type: "enum", values: [1, 0], required: false }, excludeMessageServerId: { type: "string", required: false, allowEmpty: false } };
var fr = { senderId: { type: "string", allowEmpty: false }, receiverId: { type: "string", allowEmpty: false }, createTime: { type: "number" }, messageClientId: { type: "string", allowEmpty: false }, messageServerId: { type: "string", allowEmpty: false } };
var Ir = { subType: { type: "number", min: 0, required: false }, text: { type: "string", required: false }, attachment: { type: "object", required: false }, serverExtension: { type: "string", required: false }, routeConfig: { type: "object", required: false, rules: Ft }, pushConfig: { type: "object", required: false, rules: Bt }, antiSpamConfig: { type: "object", required: false, rules: $t }, clientAntispamEnabled: { type: "boolean", required: false }, clientAntispamReplace: { type: "string", required: false } };
var yr = { messageClientId: { type: "string", allowEmpty: false }, messageServerId: { type: "string", allowEmpty: false }, createTime: { type: "number" }, aiConfig: { type: "object", rules: Lt } };
var Mr = { operationType: { type: "enum", values: [0, 1, 2] }, updateContent: { type: "string", allowEmpty: true, required: false } };
var _r = { operationType: { type: "enum", values: [2, 1], required: true } };
var ReceiptUtil = class {
  constructor(t2, o2) {
    this.p2pMessageReceipts = {}, this.core = t2, this.service = o2;
  }
  reset() {
    this.p2pMessageReceipts = {};
  }
  sendP2PMessageReceipt(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate(Zt, t2, "", true), t2.senderId === this.core.account)
        throw new ValidateErrorV2({ detail: { reason: `sendP2PMessageReceipt. sender: ${t2.senderId} is not allowed to send msg receipt` } });
      yield this.core.sendCmd("v2SendP2PMessageReceipt", { tag: { receiverId: t2.senderId, messageClientId: t2.messageClientId, createTime: t2.createTime } });
    });
  }
  isPeerRead(t2) {
    if (1 !== t2.conversationType)
      return false;
    if (t2.senderId !== this.core.account)
      return false;
    if (t2.senderId === this.core.account && t2.receiverId === this.core.account)
      return true;
    var o2 = this.core.V2NIMConversationIdUtil.messageConversationId(t2), a2 = this.p2pMessageReceipts[o2] || 0;
    return t2.createTime <= a2;
  }
  getP2PMessageReceipt(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validateConversationId(this.core.account, t2), 1 !== this.core.V2NIMConversationIdUtil.parseConversationType(t2))
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "getP2PMessageReceipt: conversationId is not p2p conversationId" } });
      return { conversationId: t2, timestamp: this.p2pMessageReceipts[t2] || 0 };
    });
  }
  getTeamMessageReceipts(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate(pr, { messages: t2 }, "", true), t2.some((t3) => t3.senderId !== this.core.account))
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "getTeamMessageReceipts: exist messages senderId is not current user" } });
      if (t2.some((o2) => o2.receiverId !== t2[0].receiverId))
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "getTeamMessageReceipts: exist messages receiverId is not same" } });
      return (yield this.core.sendCmd("v2GetTeamMessageReceipts", { tag: t2 })).content.data.map((t3) => Object.assign(Object.assign({}, t3), { conversationId: this.core.V2NIMConversationIdUtil.teamConversationId(t3.receiverId) }));
    });
  }
  getTeamMessageReceiptDetail(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate(lr, { message: t2 }, "", true), t2.senderId !== this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: `getTeamMessageReceiptDetail::senderId ${t2.senderId} incorrect` } });
      var o2 = yield this.core.sendCmd("v2GetTeamMessageReceiptDetail", { tag: t2 });
      return { readReceipt: { conversationId: this.core.V2NIMConversationIdUtil.teamConversationId(t2.receiverId), messageClientId: t2.messageClientId, messageServerId: t2.messageServerId, readCount: o2.content.readAccountList.length, unreadCount: o2.content.unreadAccountList.length }, readAccountList: o2.content.readAccountList, unreadAccountList: o2.content.unreadAccountList };
    });
  }
  sendTeamMessageReceipts(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (t2.some((o2) => o2.conversationId !== t2[0].conversationId))
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "getTeamMessageReceipts: conversationId not same" } });
      if (validate(er, { messages: t2 }, "", true), t2.some((t3) => t3.senderId === this.core.account))
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "getTeamMessageReceipts: exist messages senderId is not current user" } });
      yield this.core.sendCmd("v2SendTeamMessageReceipts", { tag: t2 });
    });
  }
  syncP2PMessagReceiptsHandler(t2) {
    var o2 = t2.content.data.map((t3) => {
      var o3 = this.core.V2NIMConversationIdUtil.p2pConversationId(t3.senderId), a2 = t3.createTime;
      return this.p2pMessageReceipts[o3] = a2, { conversationId: o3, timestamp: a2 };
    });
    this.service.emit("onReceiveP2PMessageReadReceipts", o2);
  }
  onP2PMessageReceiptsHandler(t2) {
    var o2 = this.core.V2NIMConversationIdUtil.p2pConversationId(t2.content.data.senderId), a2 = t2.content.data.createTime;
    this.p2pMessageReceipts[o2] = a2, this.service.emit("onReceiveP2PMessageReadReceipts", [{ conversationId: o2, timestamp: a2 }]);
  }
  onTeamMessageReceiptsHandler(t2) {
    var o2 = t2.content.data.map((t3) => ({ conversationId: this.core.V2NIMConversationIdUtil.teamConversationId(t3.receiverId), messageServerId: t3.messageServerId, messageClientId: t3.messageClientId, readCount: t3.readCount, unreadCount: t3.unreadCount, latestReadAccount: t3.latestReadAccount }));
    this.service.emit("onReceiveTeamMessageReadReceipts", o2);
  }
};
var Er = { "31_1": "v2TeamCreate", "32_1": "v2SuperTeamCreate", "31_5": "v2TeamInviteMembers", "32_5": "v2SuperTeamInviteMembers", "31_6": "v2TeamKickMembers", "32_6": "v2SuperTeamKickMembers", "31_8": "v2TeamLeave", "32_7": "v2SuperTeamLeave", "31_7": "v2TeamUpdateInfo", "32_8": "v2SuperTeamUpdateInfo", "31_9": "v2TeamGetInfo", "32_9": "v2SuperTeamGetInfo", "31_12": "v2TeamDismiss", "32_4": "v2SuperTeamDismiss", "31_13": "v2TeamApplyToJoin", "32_20": "v2SuperTeamApplyToJoin", "31_14": "v2TeamAcceptJoinApplication", "32_21": "v2SuperTeamAcceptJoinApplication", "31_15": "v2TeamRejectJoinApplication", "32_22": "v2SuperTeamRejectJoinApplication", "31_16": "v2TeamAddManagers", "32_26": "v2SuperTeamAddManagers", "31_17": "v2TeamRemoveManagers", "32_27": "v2SuperTeamRemoveManagers", "31_18": "v2TeamTransferOwner", "32_31": "v2SuperTeamTransferOwner", "31_19": "v2TeamUpdateSelfMemberInfo", "32_10": "v2SuperTeamUpdateSelfMemberInfo", "31_20": "v2TeamUpdateMember", "32_30": "v2SuperTeamUpdateMember", "31_21": "v2TeamAcceptInvitation", "32_23": "v2SuperTeamAcceptInvitation", "31_22": "v2TeamRejectInvite", "32_24": "v2SuperTeamRejectInvite", "31_33": "v2TeamGetMemberInvitor", "32_35": "v2SuperTeamGetMemberInvitor", "31_25": "v2TeamMemberSetChatBannedStatus", "32_29": "v2SuperTeamMemberSetChatBannedStatus", "31_32": "v2TeamSetChatBannedMode", "32_28": "v2SuperTeamSetChatBannedMode", "31_34": "v2TeamGetByIds", "32_36": "v2SuperTeamGetByIds", "31_35": "v2TeamMemberGetListByIds", "32_37": "v2SuperTeamMemberGetListByIds", "31_36": "v2TeamMemberGetList", "8_101": "v2TeamCreateMultiSync", "8_109": "v2TeamSync", "8_119": "v2TeamMemberUpdateMultiSync", "8_126": "v2TeamMembersOfSelfInSync", "21_101": "v2SuperTeamCreateMultiSync", "21_109": "v2SuperTeamSync", "21_110": "v2SuperTeamMemberUpdateMultiSync", "21_111": "v2SuperTeamMembersOfSelfInSync" };
var Sr = { antispamBusinessId: 1 };
var Tr = "V2NIMTeamService";
var Cr = { teamId: 1, name: 3, teamType: { id: 4, retConverter: (t2) => 0 == +t2 ? 1 : +t2 }, ownerAccountId: 5, memberLimit: { id: 6, retType: "number" }, isValidTeam: { id: 8, retConverter: (t2, o2) => 1 == +t2 && (void 0 === o2[13] || 1 == +o2[13]) }, memberCount: { id: 9, retType: "number" }, memberUpdateTime: { id: 10, retType: "number" }, createTime: { id: 11, retType: "number" }, updateTime: { id: 12, retType: "number" }, intro: 14, announcement: 15, joinMode: { id: 16, retType: "number" }, serverExtension: 18, customerExtension: 19, avatar: 20, agreeMode: { id: 21, retType: "number" }, inviteMode: { id: 22, retType: "number" }, updateInfoMode: { id: 23, retType: "number" }, updateExtensionMode: { id: 24, retType: "number" }, chatBannedMode: { id: 101, retType: "number" } };
var Nr = { teamId: 1, accountId: 3, memberRole: { id: 4, retType: "number" }, teamNick: 5, bits: { id: 7, retType: "number" }, inTeam: { id: 9, retType: "boolean" }, joinTime: { id: 10, retType: "number" }, updateTime: { id: 11, retType: "number" }, serverExtension: 12, chatBanned: { id: 13, retType: "boolean" }, invitorAccountId: 14, followAccountIds: { id: 16, retConverter: (t2) => {
  try {
    return JSON.parse(t2);
  } catch (t3) {
    return [];
  }
} } };
var Ar = { teamId: 1, accountId: 3, memberRole: { id: 4, retType: "number" }, teamNick: 5, bits: { id: 7, retType: "number" }, inTeam: { id: 9, retType: "boolean" }, updateTime: { id: 11, retType: "number" }, serverExtension: 12, chatBanned: { id: 13, retType: "boolean" }, invitorAccountId: 14, joinTime: { id: 15, retType: "number" }, followAccountIds: { id: 17, retConverter: (t2) => {
  try {
    return JSON.parse(t2);
  } catch (t3) {
    return [];
  }
} } };
var Or = { accountIds: { id: 1, converter: (t2) => JSON.stringify(t2) }, operation: 2 };
var Rr = { teamId: 1, teamType: 2, roleQueryType: 3, onlyChatBanned: { id: 4, converter: (t2) => +t2 }, nextToken: 5, limit: 6, direction: 7 };
var br = { v2TeamCreate: { sid: 31, cid: 1, service: Tr, params: [{ type: "Property", name: "team", reflectMapper: Cr }, { type: "StrArray", name: "inviteeAccountIds" }, { type: "String", name: "postscript" }, { type: "Property", name: "antispamConfig", reflectMapper: Sr }], response: [{ type: "Property", name: "team", reflectMapper: invertSerializeItem(Cr) }, { type: "StrArray", name: "failedList" }] }, v2SuperTeamCreate: { sid: 32, cid: 1, service: Tr, params: [{ type: "Property", name: "team", reflectMapper: Cr }, { type: "StrArray", name: "inviteeAccountIds" }, { type: "String", name: "postscript" }, { type: "Property", name: "antispamConfig", reflectMapper: Sr }], response: [{ type: "Property", name: "team", reflectMapper: invertSerializeItem(Cr) }, { type: "StrArray", name: "failedList" }] }, v2TeamInviteMembers: { sid: 31, cid: 5, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "StrArray", name: "accounts" }, { type: "String", name: "ps" }, { type: "String", name: "attach" }], response: [{ type: "Long", name: "time" }, { type: "StrArray", name: "abortedAccidList" }] }, v2SuperTeamInviteMembers: { sid: 32, cid: 5, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "StrArray", name: "accounts" }, { type: "String", name: "ps" }, { type: "String", name: "attach" }], response: [{ type: "StrArray", name: "abortedAccidList" }, { type: "Long", name: "time" }] }, v2TeamUpdateInfo: { sid: 31, cid: 7, service: Tr, params: [{ type: "Property", name: "team", reflectMapper: Cr }, { type: "Property", name: "antispamConfig", reflectMapper: Sr }], response: [{ type: "Long", name: "teamId" }, { type: "Long", name: "timestamp" }] }, v2SuperTeamUpdateInfo: { sid: 32, cid: 8, service: Tr, params: [{ type: "Property", name: "team", reflectMapper: Cr }, { type: "Property", name: "antispamConfig", reflectMapper: Sr }], response: [{ type: "Long", name: "timestamp" }] }, v2TeamLeave: { sid: 31, cid: 8, service: Tr, params: [{ type: "Long", name: "teamId" }] }, v2SuperTeamLeave: { sid: 32, cid: 7, service: Tr, params: [{ type: "Long", name: "teamId" }] }, v2TeamGetInfo: { sid: 31, cid: 9, service: Tr, params: [{ type: "Long", name: "teamId" }], response: [{ type: "Property", name: "team", reflectMapper: invertSerializeItem(Cr) }] }, v2SuperTeamGetInfo: { sid: 32, cid: 9, service: Tr, params: [{ type: "Long", name: "teamId" }], response: [{ type: "Property", name: "team", reflectMapper: invertSerializeItem(Cr) }] }, v2TeamGetByIds: { sid: 31, cid: 34, service: Tr, params: [{ type: "LongArray", name: "teamIds" }], response: [{ type: "PropertyArray", name: "teams", reflectMapper: invertSerializeItem(Cr) }, { type: "LongArray", name: "tids" }] }, v2SuperTeamGetByIds: { sid: 32, cid: 36, service: Tr, params: [{ type: "LongArray", name: "teamIds" }], response: [{ type: "PropertyArray", name: "teams", reflectMapper: invertSerializeItem(Cr) }, { type: "LongArray", name: "tids" }] }, v2TeamDismiss: { sid: 31, cid: 12, service: Tr, params: [{ type: "Long", name: "teamId" }] }, v2SuperTeamDismiss: { sid: 32, cid: 4, service: Tr, params: [{ type: "Long", name: "teamId" }] }, v2TeamAcceptInvitation: { sid: 31, cid: 21, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "from" }], response: [{ type: "Property", name: "team", reflectMapper: invertSerializeItem(Cr) }] }, v2SuperTeamAcceptInvitation: { sid: 32, cid: 23, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "from" }], response: [{ type: "Property", name: "team", reflectMapper: invertSerializeItem(Cr) }] }, v2TeamRejectInvite: { sid: 31, cid: 22, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "from" }, { type: "String", name: "ps" }] }, v2SuperTeamRejectInvite: { sid: 32, cid: 24, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "from" }, { type: "String", name: "ps" }] }, v2TeamKickMembers: { sid: 31, cid: 6, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "StrArray", name: "accounts" }] }, v2SuperTeamKickMembers: { sid: 32, cid: 6, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "StrArray", name: "accounts" }] }, v2TeamApplyToJoin: { sid: 31, cid: 13, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "ps" }], response: [{ type: "Property", name: "team", reflectMapper: invertSerializeItem(Cr) }, { type: "Int", name: "isInTeam" }] }, v2SuperTeamApplyToJoin: { sid: 32, cid: 20, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "ps" }], response: [{ type: "Property", name: "team", reflectMapper: invertSerializeItem(Cr) }, { type: "Int", name: "isInTeam" }] }, v2TeamAcceptJoinApplication: { sid: 31, cid: 14, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "from" }] }, v2SuperTeamAcceptJoinApplication: { sid: 32, cid: 21, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "from" }] }, v2TeamRejectJoinApplication: { sid: 31, cid: 15, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "from" }, { type: "String", name: "ps" }] }, v2SuperTeamRejectJoinApplication: { sid: 32, cid: 22, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "from" }, { type: "String", name: "ps" }] }, v2TeamAddManagers: { sid: 31, cid: 16, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "StrArray", name: "accounts" }] }, v2SuperTeamAddManagers: { sid: 32, cid: 26, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "StrArray", name: "accounts" }] }, v2TeamRemoveManagers: { sid: 31, cid: 17, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "StrArray", name: "accounts" }] }, v2SuperTeamRemoveManagers: { sid: 32, cid: 27, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "StrArray", name: "accounts" }] }, v2TeamTransferOwner: { sid: 31, cid: 18, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "account" }, { type: "Bool", name: "leave" }] }, v2SuperTeamTransferOwner: { sid: 32, cid: 31, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "account" }, { type: "Bool", name: "leave" }] }, v2TeamUpdateSelfMemberInfo: { sid: 31, cid: 19, service: Tr, params: [{ type: "Property", name: "teamMember", reflectMapper: Nr }, { type: "Property", name: "specialFollowUpdate", reflectMapper: Or }, { type: "Property", name: "antispam", reflectMapper: Sr }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Nr) }] }, v2SuperTeamUpdateSelfMemberInfo: { sid: 32, cid: 10, service: Tr, params: [{ type: "Property", name: "teamMember", reflectMapper: Ar }, { type: "Property", name: "specialFollowUpdate", reflectMapper: Or }, { type: "Property", name: "antispam", reflectMapper: Sr }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Ar) }] }, v2TeamUpdateMember: { sid: 31, cid: 20, service: Tr, params: [{ type: "Property", name: "teamMember", reflectMapper: Nr }, { type: "Property", name: "antispam", reflectMapper: Sr }] }, v2SuperTeamUpdateMember: { sid: 32, cid: 30, service: Tr, params: [{ type: "Property", name: "teamMember", reflectMapper: Ar }, { type: "Property", name: "antispam", reflectMapper: Sr }] }, v2TeamGetMemberInvitor: { sid: 31, cid: 33, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "StrArray", name: "accounts" }], response: [{ type: "StrStrMap", name: "accountsMap" }] }, v2SuperTeamGetMemberInvitor: { sid: 32, cid: 35, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "StrArray", name: "accounts" }], response: [{ type: "StrStrMap", name: "accountsMap" }] }, v2TeamMemberSetChatBannedStatus: { sid: 31, cid: 25, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "String", name: "accountId" }, { type: "Int", name: "chatBanned" }] }, v2SuperTeamMemberSetChatBannedStatus: { sid: 32, cid: 29, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "StrArray", name: "accountId" }, { type: "Int", name: "chatBanned" }] }, v2TeamSetChatBannedMode: { sid: 31, cid: 32, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "Int", name: "chatBannedMode" }] }, v2SuperTeamSetChatBannedMode: { sid: 32, cid: 28, service: Tr, params: [{ type: "Long", name: "teamId" }, { type: "Int", name: "chatBannedMode" }] }, v2TeamMemberGetListByIds: { sid: 31, cid: 35, service: Tr, params: [{ type: "StrArray", name: "tag" }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Nr) }] }, v2SuperTeamMemberGetListByIds: { sid: 32, cid: 37, service: Tr, params: [{ type: "StrArray", name: "tag" }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Ar) }] }, v2TeamMemberGetList: { sid: 31, cid: 36, service: Tr, params: [{ type: "Property", name: "tag", reflectMapper: Rr }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Nr) }, { type: "Property", name: "pageInfo", reflectMapper: { 1: "hasMore", 2: "nextToken" } }] }, v2TeamSync: { sid: 8, cid: 109, service: Tr, response: [{ type: "Long", name: "timetag" }, { type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Cr) }] }, v2TeamCreateMultiSync: { sid: 8, cid: 101, service: Tr, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Cr) }] }, v2TeamMemberUpdateMultiSync: { sid: 8, cid: 119, service: Tr, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Nr) }] }, v2TeamMembersOfSelfInSync: { sid: 8, cid: 126, service: Tr, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Nr) }, { type: "Long", name: "timetag" }] }, v2SuperTeamSync: { sid: 21, cid: 109, service: Tr, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Cr) }, { type: "Bool", name: "isAll" }, { type: "Long", name: "timetag" }] }, v2SuperTeamCreateMultiSync: { sid: 21, cid: 101, service: Tr, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Cr) }] }, v2SuperTeamMemberUpdateMultiSync: { sid: 21, cid: 110, service: Tr, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Ar) }] }, v2SuperTeamMembersOfSelfInSync: { sid: 21, cid: 111, service: Tr, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Ar) }, { type: "Long", name: "timetag" }] } };
function formatTeamNotificationAttachData(t2, o2) {
  if (!t2)
    return {};
  var a2 = t2;
  return a2.tinfo && (a2.tinfo = function formatTeamFromTinfo(t3) {
    return deserialize(t3, invertSerializeItem(Cr));
  }(a2.tinfo), a2.tinfo.teamType = o2), a2.uinfos, void 0 !== a2.mute && (a2.mute = parseInt(a2.mute)), a2;
}
function generateTeamByTeamId(t2, o2, a2 = {}) {
  return Object.assign({ teamId: t2, teamType: o2, name: "", ownerAccountId: "", memberLimit: 0, memberCount: 0, createTime: 0, updateTime: 0, intro: "", announcement: "", avatar: "", joinMode: 0, agreeMode: 0, inviteMode: 0, updateInfoMode: 0, updateExtensionMode: 0, chatBannedMode: 0, isValidTeam: true }, a2);
}
function generateMemberByTeamId(t2, o2, a2, m2 = {}) {
  return Object.assign({ teamId: t2, teamType: o2, accountId: a2, joinTime: 0, inTeam: true, memberRole: 0, chatBanned: false }, m2);
}
function processTeamMembers(t2, o2 = 1) {
  return t2.map((t3) => function processTeamMember(t4, o3 = 1) {
    return t4.teamType = o3, t4.chatBanned = void 0 !== t4.chatBanned && t4.chatBanned, t4;
  }(t3, o2));
}
function completeMessage(t2, o2, a2) {
  var m2, u2 = Object.assign(Object.assign({}, o2), { conversationId: t2.V2NIMConversationIdUtil.messageConversationId(o2), isSelf: o2.senderId === t2.account, sendingState: 1, messageStatus: { errorCode: (null === (m2 = null == o2 ? void 0 : o2.messageStatus) || void 0 === m2 ? void 0 : m2.errorCode) || 200 }, messageSource: a2 || 0 });
  if (u2.threadReply && (u2.threadReply = Object.assign(Object.assign({}, u2.threadReply), { conversationType: u2.conversationType, conversationId: u2.conversationId })), u2.threadRoot && (u2.threadRoot = Object.assign(Object.assign({}, u2.threadRoot), { conversationType: u2.conversationType, conversationId: u2.conversationId })), u2.isInBlackList && (u2.sendingState = 2, u2.messageStatus.errorCode = Me.V2NIM_ERROR_CODE_ACCOUNT_IN_BLOCK_LIST, delete u2.isInBlackList), u2.streamConfig) {
    var h2 = get(u2.streamConfig, "isStream");
    if (false === h2)
      delete u2.streamConfig;
    else if (true === h2 && void 0 === u2.streamConfig.status)
      delete u2.streamConfig, o2.aiConfig && (o2.aiConfig.aiStream = true, o2.aiConfig.aiStreamStatus = 0);
    else if ("number" == typeof u2.streamConfig.status)
      return u2.streamConfig = { status: u2.streamConfig.status }, function completeMessageStreamConfig(t3) {
        t3.streamConfig && t3.aiConfig && (t3.aiConfig.aiStream = true, t3.aiConfig.aiStreamStatus = t3.streamConfig.status);
        if (t3.attachment && t3.streamConfig) {
          var o3 = t3.attachment;
          t3.streamConfig.lastChunk = { content: o3.msg, messageTime: t3.createTime, chunkTime: o3.timestamp, type: o3.type, index: o3.index }, t3.aiConfig && (t3.aiConfig.aiStreamLastChunk = t3.streamConfig.lastChunk), delete t3.attachment;
        }
        return t3;
      }(u2);
  }
  return formatMessageAttachment(u2, t2);
}
function formatMessageAttachment(t2, o2) {
  return 5 === t2.messageType ? function formatNotificationMessage(t3, o3) {
    var a2, m2, u2, h2, g2, I2 = o3.attachment || {};
    if (o3.attachment && "type" in o3.attachment)
      return o3;
    var M2 = void 0;
    if (null === (a2 = I2.data) || void 0 === a2 ? void 0 : a2.tinfo) {
      var { id: _2, data: E2 } = I2, S2 = _2 > 400 ? 2 : 1, { tinfo: T2 } = formatTeamNotificationAttachData(Object.assign({}, E2), S2);
      M2 = {}, M2 = __rest(T2, ["teamId"]);
    }
    var C2 = Object.assign(Object.assign(Object.assign(Object.assign({ raw: I2.raw, type: convertNotificationType(t3, I2.id) }, M2 ? { updatedTeamInfo: M2 } : {}), { targetIds: (null === (m2 = I2.data) || void 0 === m2 ? void 0 : m2.ids) || ((null === (u2 = I2.data) || void 0 === u2 ? void 0 : u2.id) ? [I2.data.id] : []) }), "string" == typeof (null === (h2 = I2.data) || void 0 === h2 ? void 0 : h2.attach) ? { serverExtension: I2.data.attach } : {}), "number" == typeof (null === (g2 = I2.data) || void 0 === g2 ? void 0 : g2.mute) ? { chatBanned: 0 !== I2.data.mute } : {});
    return Object.assign(Object.assign({}, o3), { attachment: C2 });
  }(o2, t2) : 100 === t2.messageType ? function formatCustomMessage(t3, o3) {
    var a2, m2, u2;
    if ("string" == typeof (null === (a2 = o3.attachment) || void 0 === a2 ? void 0 : a2.raw) && (null === (u2 = null === (m2 = t3.V2NIMMessageService) || void 0 === m2 ? void 0 : m2.customAttachmentParsers) || void 0 === u2 ? void 0 : u2.length) > 0) {
      var h2 = o3.subType || 0, g2 = t3.V2NIMMessageService.customAttachmentParsers, I2 = o3.attachment.raw;
      g2.some((a3) => {
        try {
          var m3 = a3(h2, I2);
          if (isPlainObject(m3))
            return m3.raw = I2, o3.attachment = m3, true;
        } catch (o4) {
          return t3.logger.warn(`customAttachmentParser: subType ${h2}, raw: ${I2}. parse error with ${o4}`), false;
        }
        return false;
      });
    }
    return o3;
  }(o2, t2) : t2;
}
function completeMessageRefer(t2, o2) {
  return Object.assign(Object.assign({}, o2), { conversationId: t2.V2NIMConversationIdUtil.messageConversationId(o2) });
}
function formatMessageRefer(t2, o2) {
  var { createTime: a2, senderId: m2, receiverId: u2, conversationType: h2 } = o2;
  return { conversationType: h2, conversationId: t2.V2NIMConversationIdUtil.messageConversationId({ conversationType: h2, senderId: m2, receiverId: u2 }), senderId: o2.senderId, receiverId: o2.receiverId, messageServerId: o2.messageServerId, createTime: a2, messageClientId: o2.messageClientId };
}
function formatRevokeMessage(t2, o2) {
  var a2 = { 7: 1, 8: 2, 12: 3, 13: 1, 14: 2 }[o2.sysMsgType];
  return { postscript: o2.postscript, revokeType: { 7: 1, 8: 2, 12: 3, 13: 4, 14: 5 }[o2.sysMsgType] || 0, revokeAccountId: o2.opeAccount || o2.senderId, callbackExtension: o2.callbackExtension, serverExtension: o2.attach || "", messageRefer: { conversationType: a2, conversationId: t2.V2NIMConversationIdUtil.messageConversationId(Object.assign(Object.assign({}, o2), { conversationType: a2, senderId: o2.senderId, receiverId: o2.receiverId })), senderId: o2.senderId, receiverId: o2.receiverId, messageServerId: o2.messageServerId, createTime: o2.deleteMsgCreatetime, messageClientId: o2.messageClientId } };
}
function formatClearHistoryNotification(t2, o2) {
  return { conversationId: 1 === o2.conversationType ? t2.V2NIMConversationIdUtil.p2pConversationId(o2.receiverId) : 2 === o2.conversationType ? t2.V2NIMConversationIdUtil.teamConversationId(o2.teamId) : t2.V2NIMConversationIdUtil.superTeamConversationId(o2.teamId), deleteTime: o2.deleteTime, serverExtension: o2.serverExtension };
}
function convertNotificationType(t2, o2) {
  var a2 = { 0: 0, 401: 401, 1: 1, 402: 402, 2: 2, 403: 403, 3: 3, 404: 404, 4: 4, 405: 405, 5: 5, 410: 410, 6: 6, 406: 406, 7: 7, 407: 407, 8: 8, 408: 408, 9: 9, 411: 411, 10: 10, 409: 409 };
  return void 0 === a2[o2] && t2.logger.warn(`[V2NIMMessageService] undefined notification type: ${o2}`), "number" == typeof a2[o2] ? a2[o2] : -1;
}
function formatSearchCloudMessageListEx(t2, o2) {
  var a2 = [], m2 = {};
  for (var u2 in o2.forEach((t3) => {
    var o3 = t3.conversationId;
    m2[o3] || (m2[o3] = { conversationId: o3, messages: [], count: 0 }), m2[o3].messages.push(t3), m2[o3].count++;
  }), m2) {
    var h2 = m2[u2];
    a2.push(h2);
  }
  return a2;
}
function attachmentToRaw(t2, o2) {
  if (!o2)
    return "";
  switch (t2) {
    case 100:
      return o2.raw || "";
    case 1:
    case 3:
    case 2:
    case 6:
      return function mediaAttachmentToRaw(t3) {
        var o3 = t3, { width: a2, height: m2, duration: u2, path: h2, file: g2, raw: I2, ctx: M2, payload: _2, bucketName: E2, objectName: S2, token: T2, ext: C2 } = o3, N2 = __rest(o3, ["width", "height", "duration", "path", "file", "raw", "ctx", "payload", "bucketName", "objectName", "token", "ext"]), A2 = "string" == typeof C2 && "." === C2[0] ? C2.slice(1) : C2;
        return JSON.stringify(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, N2), void 0 === C2 ? {} : { ext: A2 }), void 0 === a2 ? {} : { w: a2 }), void 0 === m2 ? {} : { h: m2 }), void 0 === u2 ? {} : { dur: u2 }));
      }(o2);
    case 4:
      return function locationAttachmentToRaw(t3) {
        return JSON.stringify({ lat: t3.latitude, lng: t3.longitude, title: t3.address });
      }(o2);
    case 12:
      return function callAttachmentToRaw(t3) {
        var o3 = __rest(t3, ["raw"]);
        try {
          return JSON.stringify(Object.assign(Object.assign({}, o3), { durations: t3.durations.map((t4) => ({ accid: t4.accountId, duration: t4.duration })) }));
        } catch (o4) {
          return JSON.stringify(t3);
        }
      }(o2);
    default:
      return o2.raw || JSON.stringify(o2);
  }
}
function rawToAttachment(t2, o2) {
  var a2;
  try {
    switch (a2 = JSON.parse(t2), o2) {
      case 100:
        return { raw: t2 };
      case 4:
        return function locationRawToAttachment(t3, o3) {
          return { latitude: o3.lat, longitude: o3.lng, address: o3.title, raw: t3 };
        }(t2, a2);
      case 2:
      case 3:
      case 1:
      case 6:
        return function mediaRawToAttachment(t3, o3) {
          var { w: a3, h: m2, dur: u2, ext: h2 } = o3, g2 = __rest(o3, ["w", "h", "dur", "ext"]), I2 = "string" == typeof h2 && "." !== h2[0] ? `.${h2}` : h2;
          return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, g2), void 0 === h2 ? {} : { ext: I2 }), void 0 === a3 ? {} : { width: a3 }), void 0 === m2 ? {} : { height: m2 }), void 0 === u2 ? {} : { duration: u2 }), { raw: t3 });
        }(t2, a2);
      case 12:
        return function callRawToAttachment(t3, o3) {
          return Object.assign(Object.assign({}, o3), { durations: o3.durations.map((t4) => ({ accountId: t4.accid, duration: t4.duration })), raw: t3 });
        }(t2, a2);
      default:
        return "object" == typeof a2 && a2 ? Object.assign(Object.assign({}, a2), { raw: t2 }) : { raw: t2 };
    }
  } catch (o3) {
    return "object" == typeof a2 && a2 ? Object.assign(Object.assign({}, a2), { raw: t2 }) : { raw: t2 };
  }
}
var FileUtil = class {
  constructor(t2) {
    this.core = t2;
  }
  doSendFile(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      var a2 = t2.attachment;
      try {
        var [m2, u2] = yield this.core.V2NIMStorageService._uploadFile({ taskId: t2.messageClientId, uploadParams: { fileObj: (null == a2 ? void 0 : a2.file) || (null == a2 ? void 0 : a2.path), sceneName: null == a2 ? void 0 : a2.sceneName } }, o2, { fileType: t2.messageType }), h2 = Object.assign(Object.assign({}, a2), { uploadState: 1 });
        void 0 !== u2.w && (h2.width = h2.width || u2.w), void 0 !== u2.h && (h2.height = h2.height || u2.h), void 0 !== u2.dur && (h2.duration = h2.duration || u2.dur), h2.ext = h2.ext && -1 === h2.ext.indexOf(".") ? `.${h2.ext}` : h2.ext;
        var g2 = ["w", "h", "dur", "ext", "name"];
        for (var I2 in u2)
          g2.includes(I2) || (h2[I2] = u2[I2]);
        var { raw: M2, file: _2, path: E2 } = h2, S2 = __rest(h2, ["raw", "file", "path"]);
        t2.attachment = JSON.parse(JSON.stringify(S2)), t2.attachment && (t2.attachment.raw = attachmentToRaw(t2.messageType, t2.attachment));
      } catch (o3) {
        throw t2.attachment && (t2.attachment.uploadState = 2), o3;
      }
    });
  }
  cancelMessageAttachmentUpload(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate({ messageClientId: { type: "string", allowEmpty: false } }, t2, "", true), ![2, 6, 1, 3].includes(t2.messageType))
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: `cancelMessageAttachmentUpload: messageType ${t2.messageType} incorrect` } });
      if (2 === t2.sendingState || 1 === t2.sendingState)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST, detail: { reason: "cancelMessageAttachmentUpload: message is already failed or succeeded" } });
      yield this.core.V2NIMStorageService._cancelUploadFile(t2.messageClientId);
    });
  }
};
var Vr = "V2NIMMessageService";
var kr = { "30_1": "v2SendP2pMessage", "31_2": "v2SendTeamMessage", "30_31": "v2MessageP2pModify", "31_37": "v2MessageTeamModify", "32_38": "v2MessageSuperTeamModify", "7_33": "v2MessageOnModified", "4_27": "v2MessageSyncModified", "4_28": "v2MessageSuperTeamSyncModified", "4_5": "v2BatchMarkRead", "4_12": "syncP2PMessagReceipts", "30_11": "v2SendP2PMessageReceipt", "31_28": "v2SendTeamMessageReceipts", "32_2": "v2SendSuperTeamMessage", "7_12": "onP2PMessageReceipts", "8_31": "onTeamMessageReceipts", "31_29": "v2GetTeamMessageReceipts", "31_30": "v2GetTeamMessageReceiptDetail", "7_2": "onMsg", "8_3": "onMsg", "7_101": "onMsg", "8_102": "onMsg", "21_3": "onMsg", "21_102": "onMsg", "4_4": "syncOfflineMsgs", "4_9": "syncRoamingMsgs", "4_17": "syncRoamingMsgs", "30_13": "v2RevokeMessage", "32_17": "v2RevokeSuperTeamMessage", "7_14": "onRevokeMessage", "7_15": "syncRevokeMessage", "21_18": "onRevokeMessage", "21_117": "onRevokeMessage", "30_23": "v2DeleteMessage", "30_24": "v2DeleteMessages", "4_21": "syncOnDeleteMessages", "7_123": "onDeleteMessage", "7_124": "onDeleteMessages", "29_17": "v2DownloadLocalAntiSpamVocabs" };
var Pr = { conversationType: { id: 0, converter: conversationTypeV2ToV1, retConverter: conversationTypeV1ToV2 }, receiverId: 1, senderId: 2, fromClientType: 4, fromDeviceId: 5, fromNick: 6, createTime: { id: 7, retType: "number" }, messageType: { id: 8, retType: "number" }, text: 9, attachment: { id: 10, converter: (t2, o2) => attachmentToRaw(o2.messageType, t2), retConverter: (t2, o2) => rawToAttachment(t2, Number(o2[8])) }, messageClientId: 11, messageServerId: 12, resend: { id: 13, converter: boolToInt, retType: "boolean" }, userUpdateTime: { id: 14, retType: "number" }, serverExtension: 15, pushPayload: { id: 16, access: "pushConfig.pushPayload" }, pushContent: { id: 17, access: "pushConfig.pushContent" }, forcePushAccountIds: { id: 18, access: "pushConfig.forcePushAccountIds", def: (t2) => {
  if (t2["pushConfig.forcePush"])
    return "#%@all@%#";
}, converter: (t2, o2) => {
  if (o2["pushConfig.forcePush"])
    return t2 ? JSON.stringify(t2) : "#%@all@%#";
}, retConverter(t2) {
  if ("#%@all@%#" !== t2 && t2)
    try {
      return JSON.parse(t2);
    } catch (t3) {
      return [];
    }
} }, forcePushContent: { id: 19, access: "pushConfig.forcePushContent" }, forcePush: { id: 20, access: "pushConfig.forcePush", converter: boolToInt, retType: "boolean" }, antispamCustomMessageEnabled: { id: 21, def: (t2) => get(t2, "antispamConfig.antispamCustomMessage") ? 1 : void 0, retConverter: () => {
} }, antispamCustomMessage: { id: 22, access: "antispamConfig.antispamCustomMessage" }, antispamBusinessId: { id: 23, access: "antispamConfig.antispamBusinessId" }, clientAntispamHit: { id: 24, access: "clientAntispamHit", converter: boolToInt, retType: "boolean" }, antispamEnabled: { id: 25, access: "antispamConfig.antispamEnabled", converter: boolToInt, retType: "boolean" }, needAck: { id: 26, access: "messageConfig.readReceiptEnabled", converter: boolToInt, retType: "boolean" }, lastMessageUpdateEnabled: { id: 28, access: "messageConfig.lastMessageUpdateEnabled", converter: boolToInt, retType: "boolean" }, threadReplySenderId: { id: 29, access: "threadReply.senderId" }, threadReplyReceiverId: { id: 30, access: "threadReply.receiverId" }, threadReplyTime: { id: 31, access: "threadReply.createTime", retType: "number" }, threadReplyServerId: { id: 32, access: "threadReply.messageServerId" }, threadReplyClientId: { id: 33, access: "threadReply.messageClientId" }, threadRootSenderId: { id: 34, access: "threadRoot.senderId" }, threadRootReceiverId: { id: 35, access: "threadRoot.receiverId" }, threadRootTime: { id: 36, access: "threadRoot.createTime", retType: "number" }, threadRootServerId: { id: 37, access: "threadRoot.messageServerId" }, threadRootClientId: { id: 38, access: "threadRoot.messageClientId" }, isDeleted: { id: 39, converter: boolToInt, retType: "boolean" }, callbackExtension: 40, subType: { id: 41, retType: "number" }, antispamCheating: { id: 42, access: "antispamConfig.antispamCheating" }, routeEnvironment: { id: 43, access: "routeConfig.routeEnvironment" }, antispamExtension: { id: 44, access: "antispamConfig.antispamExtension" }, antispamResult: 45, __clientExt: { id: 46, converter: objectToJSONString, retConverter: stringToJSONObject }, robotFunction: { id: 47, access: "robotConfig.function" }, robotTopic: { id: 48, access: "robotConfig.topic" }, robotCustomContent: { id: 49, access: "robotConfig.customContent" }, robotAccount: { id: 50, access: "robotConfig.accountId" }, _conversationOnlineSyncNotify: { id: 51 }, _conversationOnlineSyncData: { id: 52 }, aiAgentMsgDirection: { id: 55, access: "aiConfig.aiStatus", retAccess: "aiConfig.aiStatus", retType: "number" }, aiAgentAccount: { id: 56, access: "aiConfig.accountId", retAccess: "aiConfig.accountId" }, aiAgentContent: { id: 57, access: "aiConfig.content", converter: objectToJSONString, retConverter: emptyFunc }, aiAgentMessages: { id: 58, access: "aiConfig.messages", converter: objectToJSONString, retConverter: emptyFunc }, aiAgentPromptVariables: { id: 59, access: "aiConfig.promptVariables", retConverter: emptyFunc }, aiAgentModelConfigParams: { id: 60, access: "aiConfig.modelConfigParams", converter: objectToJSONString, retConverter: emptyFunc }, errorCode: { id: 61, access: "messageStatus.errorCode", converter: emptyFunc, retType: "number" }, modifyTime: { id: 62, retType: "number" }, modifyAccountId: 63, aiStream: { id: 65, access: "aiConfig.aiStream", retAccess: "streamConfig.isStream", converter: boolToInt, retConverter: intToBool }, aiRAGs: { id: 66, access: "aiConfig.aiRAGs", retConverter: function aiAgentStreamAIRAGsRetConverter$1(t2) {
  try {
    var o2 = JSON.parse(t2);
    return o2 && o2.length > 0 ? o2.map((t3) => (t3.description = t3.desc, delete t3.desc, t3)) : [];
  } catch (t3) {
    return [];
  }
} }, aiStreamStatus: { id: 67, access: "streamConfig.status", retType: "number" }, historyEnabled: { id: 100, access: "messageConfig.historyEnabled", converter: boolToInt, retType: "boolean" }, roamingEnabled: { id: 101, access: "messageConfig.roamingEnabled", converter: boolToInt, retType: "boolean" }, onlineSyncEnabled: { id: 102, access: "messageConfig.onlineSyncEnabled", converter: boolToInt, retType: "boolean" }, routeEnabled: { id: 105, access: "routeConfig.routeEnabled", converter: boolToInt, retType: "boolean" }, isInBlackList: { id: 106, access: "isInBlackList", converter: boolToInt, retType: "boolean" }, pushEnable: { id: 107, access: "pushConfig.pushEnabled", converter: boolToInt, retType: "boolean" }, offlineEnabled: { id: 108, access: "messageConfig.offlineEnabled", converter: boolToInt, retType: "boolean" }, unreadEnabled: { id: 109, access: "messageConfig.unreadEnabled", converter: boolToInt, retType: "boolean" }, pushNickEnabled: { id: 110, access: "pushConfig.pushNickEnabled", converter: boolToInt, retType: "boolean" }, msgAckSnapshot: { id: 112, retType: "number" }, receiverIds: { id: 154, access: "targetConfig.receiverIds", converter: objectToJSONString, retConverter: () => {
} }, inclusive: { id: 155, access: "targetConfig.inclusive", converter: (t2) => t2 ? 1 : 2, retConverter: () => {
} }, newMemberVisible: { id: 156, access: "targetConfig.newMemberVisible", converter: (t2) => t2 ? 1 : 2, retConverter: () => {
} } };
var Lr = invertSerializeItem(Pr);
var wr = { conversationType: { id: 1, access: "messageRefer.conversationType", retType: "number" }, senderId: { id: 2, access: "messageRefer.senderId" }, receiverId: { id: 3, access: "messageRefer.receiverId" }, messageServerId: { id: 4, access: "messageRefer.messageServerId" }, messageClientId: { id: 5, access: "messageRefer.messageClientId" }, createTime: { id: 6, access: "messageRefer.createTime", retType: "number" }, deleteTime: { id: 7, retType: "number" }, serverExtension: 8 };
invertSerializeItem(wr);
var Dr = { version: 1, md5: 2, nosurl: 3, thesaurus: 4 };
var Ur = { createTime: { id: 0, retType: "number" }, sysMsgType: 1, receiverId: 2, senderId: 3, postscript: 4, attach: 5, pushContent: 8, pushPayload: 9, messageClientId: 10, messageServerId: 11, deleteMsgCreatetime: { id: 14, retType: "number" }, opeAccount: 16, env: 21, callbackExtension: 22 };
var xr = { receiverId: 0, messageServerId: 1, readCount: { id: 100, retType: "number" }, unreadCount: { id: 101, retType: "number" }, messageClientId: 102, latestReadAccount: 103 };
var Fr = { v2BatchMarkRead: { sid: 4, cid: 5, service: Vr, hasPacketResponse: false, params: [{ type: "Byte", name: "sid" }, { type: "Byte", name: "cid" }, { type: "LongArray", name: "ids" }] }, v2SendP2pMessage: { sid: 30, cid: 1, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: Pr }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, onMsg: { sid: 7, cid: 2, service: Vr, response: [{ type: "Property", name: "msg", reflectMapper: invertSerializeItem(Pr) }] }, syncOfflineMsgs: { sid: 4, cid: 4, service: Vr, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Pr) }] }, syncRoamingMsgs: { sid: 4, cid: 9, service: Vr, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Pr) }] }, v2SendP2PMessageReceipt: { sid: 30, cid: 11, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: Pr }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, v2RevokeMessage: { sid: 30, cid: 13, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: Ur }] }, v2DeleteMessage: { sid: 30, cid: 23, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: wr }], response: [{ type: "Long", name: "timetag" }] }, v2DeleteMessages: { sid: 30, cid: 24, service: Vr, params: [{ type: "PropertyArray", name: "tag", reflectMapper: wr }], response: [{ type: "Long", name: "timetag" }] }, v2SendTeamMessage: { sid: 31, cid: 2, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: Pr }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, v2SendTeamMessageReceipts: { sid: 31, cid: 28, service: Vr, params: [{ type: "PropertyArray", name: "tag", reflectMapper: xr }], response: [{ type: "PropertyArray", name: "tag", reflectMapper: invertSerializeItem(xr) }] }, v2SendSuperTeamMessage: { sid: 32, cid: 2, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: Pr }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, v2RevokeSuperTeamMessage: { sid: 32, cid: 17, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: Ur }] }, syncP2PMessagReceipts: { sid: 4, cid: 12, service: Vr, response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, onP2PMessageReceipts: { sid: 7, cid: 12, service: Vr, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, v2GetTeamMessageReceipts: { sid: 31, cid: 29, service: Vr, params: [{ type: "PropertyArray", name: "tag", reflectMapper: xr }], response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(xr) }] }, v2GetTeamMessageReceiptDetail: { sid: 31, cid: 30, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: xr, select: ["receiverId", "messageServerId"] }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(xr) }, { type: "StrArray", name: "readAccountList" }, { type: "StrArray", name: "unreadAccountList" }] }, onTeamMessageReceipts: { sid: 8, cid: 31, service: Vr, response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(xr) }] }, onRevokeMessage: { sid: 7, cid: 14, service: Vr, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Ur) }] }, syncRevokeMessage: { sid: 7, cid: 15, service: Vr, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Ur) }] }, syncOnDeleteMessages: { sid: 4, cid: 21, service: Vr, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(wr) }] }, onDeleteMessage: { sid: 7, cid: 123, service: Vr, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(wr) }] }, onDeleteMessages: { sid: 7, cid: 124, service: Vr, response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(wr) }] }, v2DownloadLocalAntiSpamVocabs: { sid: 29, cid: 17, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: Dr }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Dr) }] }, v2MessageP2pModify: { sid: 30, cid: 31, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: Pr }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, v2MessageTeamModify: { sid: 31, cid: 37, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: Pr }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, v2MessageSuperTeamModify: { sid: 32, cid: 38, service: Vr, params: [{ type: "Property", name: "tag", reflectMapper: Pr }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, v2MessageOnModified: { sid: 7, cid: 33, service: Vr, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, v2MessageSyncModified: { sid: 4, cid: 27, service: Vr, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Pr) }, { type: "Long", name: "time" }] }, v2MessageSuperTeamSyncModified: { sid: 4, cid: 28, service: Vr, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Pr) }, { type: "Long", name: "time" }] } };
function conversationTypeV2ToV1(t2) {
  return 1 === t2 ? 0 : 2 === t2 ? 1 : 3 === t2 ? 5 : void 0;
}
function conversationTypeV1ToV2(t2) {
  var o2 = parseInt(t2);
  return 0 === o2 ? 1 : 1 === o2 ? 2 : 5 === o2 ? 3 : 0;
}
var Br = "V2NIMNotificationService";
var $r = { "30_7": "v2SendCustomNotification", "32_16": "v2SendCustomNotificationWithSuperTeam", "7_3": "onSysNotification", "21_19": "onSysNotification", "4_6": "v2SyncOfflineSysNotifications", "4_18": "v2SyncOfflineSysNotifications", "7_14": "v2NotificationRevoke", "21_18": "v2NotificationRevoke", "21_117": "v2NotificationRevoke", "4_19": "v2NotificationSyncRevoke", "7_15": "v2NotificationSyncRevoke", "4_16": "syncBroadcastMsg", "7_17": "onBroadcastMsg" };
var jr = { timestamp: { id: 0, retType: "number" }, type: { id: 1, retType: "number" }, receiverId: 2, senderId: 3, postscript: 4, content: 5, idServer: 6, offlineEnabled: { id: 7, converter: boolToInt, retConverter: function(t2, o2) {
  return "0" !== o2[6] && !!parseInt(t2);
}, access: "notificationConfig.offlineEnabled" }, pushContent: { id: 8, access: "pushConfig.pushContent" }, pushPayload: { id: 9, access: "pushConfig.pushPayload" }, deletedIdClient: 10, deletedIdServer: 11, antispamEnabled: { id: 12, converter: boolToInt, retType: "boolean", access: "antispamConfig.antispamEnabled" }, antispamCustomNotification: { id: 13, access: "antispamConfig.antispamCustomNotification" }, deletedMsgCreateTime: 14, deletedMsgFromNick: 15, opeAccount: 16, forcePushAccountIds: { id: 18, access: "pushConfig.forcePushAccountIds", def: (t2) => {
  if (101 === t2.type && t2["pushConfig.forcePush"])
    return "#%@all@%#";
}, converter: (t2, o2) => {
  if (o2["pushConfig.forcePush"])
    return t2 ? JSON.stringify(t2) : "#%@all@%#";
}, retConverter(t2) {
  if ("#%@all@%#" !== t2 && t2)
    try {
      return JSON.parse(t2);
    } catch (t3) {
      return [];
    }
} }, forcePushContent: { id: 19, access: "pushConfig.forcePushContent" }, forcePush: { id: 20, converter: boolToInt, retType: "boolean", access: "pushConfig.forcePush" }, routeEnvironment: { id: 21, access: "routeConfig.routeEnvironment" }, callbackExt: 22, clientNotificationId: { id: 23, access: "notificationConfig.clientNotificationId" }, conversationOnlineSyncNotify: 24, conversationOnlineSyncData: 25, routeEnabled: { id: 105, converter: boolToInt, retType: "boolean", access: "routeConfig.routeEnabled" }, pushEnabled: { id: 107, converter: boolToInt, retType: "boolean", access: "pushConfig.pushEnabled" }, unreadEnabled: { id: 109, converter: boolToInt, retType: "boolean", access: "notificationConfig.unreadEnabled" }, pushNickEnabled: { id: 110, converter: boolToInt, retType: "boolean", access: "pushConfig.pushNickEnabled" } };
var Gr = { id: 1, senderId: 2, timestamp: { id: 4, retType: "number" }, content: 5 };
var qr = { v2SendCustomNotification: { sid: 30, cid: 7, service: Br, params: [{ type: "Property", name: "tag", reflectMapper: jr }] }, v2SendCustomNotificationWithSuperTeam: { sid: 32, cid: 16, service: Br, params: [{ type: "Property", name: "tag", reflectMapper: jr }] }, onSysNotification: { sid: 7, cid: 3, service: Br, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(jr) }] }, syncBroadcastMsg: { sid: 4, cid: 16, service: Br, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Gr) }] }, onBroadcastMsg: { sid: 7, cid: 17, service: Br, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Gr) }] }, v2SyncOfflineSysNotifications: { sid: 4, cid: 9, service: Br, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(jr) }] }, v2NotificationRevoke: { sid: 7, cid: 14, service: Br, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(jr) }] }, v2NotificationSyncRevoke: { sid: 7, cid: 15, service: Br, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(jr) }, { type: "Long", name: "timetag" }, { type: "Byte", name: "type" }] } };
var Hr = { "4_5": "ysfBatchMarkRead", "101_1": "ysfSendMessage", "101_2": "ysfOnMsg", "4_100": "ysfSyncOfflineMsgs", "101_3": "ysfOnSysNotification", "101_7": "ysfSendCustomNotification", "4_101": "ysfSyncSysNotification" };
var zr = { ysfBatchMarkRead: { sid: 4, cid: 5, service: "YSFService", hasPacketResponse: false, params: [{ type: "Byte", name: "sid" }, { type: "Byte", name: "cid" }, { type: "LongArray", name: "ids" }] }, ysfSendMessage: { sid: 101, cid: 1, service: "YSFService", params: [{ type: "Property", name: "tag", reflectMapper: Pr }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, ysfOnMsg: { sid: 101, cid: 2, service: "YSFService", response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, ysfSyncOfflineMsgs: { sid: 4, cid: 100, service: "YSFService", response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Pr) }] }, ysfOnSysNotification: { sid: 101, cid: 3, service: "YSFService", response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(jr) }] }, ysfSendCustomNotification: { sid: 101, cid: 7, service: "YSFService", params: [{ type: "Property", name: "tag", reflectMapper: jr }] }, ysfSyncSysNotification: { sid: 4, cid: 101, service: "YSFService", response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(jr) }] } };
var Yr = { content: { type: "string", allowEmpty: false }, params: { type: "object", required: false, rules: { notificationConfig: { type: "object", required: false, rules: { offlineEnabled: { type: "boolean", required: false }, unreadEnabled: { type: "boolean", required: false } } }, pushConfig: { type: "object", required: false, rules: { pushEnabled: { type: "boolean", required: false }, pushNickEnabled: { type: "boolean", required: false }, pushContent: { type: "string", required: false }, pushPayload: { type: "string", required: false }, forcePush: { type: "boolean", required: false }, forcePushContent: { type: "string", required: false }, forcePushAccountIds: { type: "array", required: false, itemType: "string" } } }, antispamConfig: { type: "object", required: false, rules: { antispamEnabled: { type: "boolean", required: false }, antispamCustomNotification: { type: "string", required: false } } }, routeConfig: { type: "object", required: false, rules: { routeEnabled: { type: "boolean", required: false }, routeEnvironment: { type: "string", required: false } } } } } };
var NotificationUtil = class {
  constructor(t2) {
    this.core = t2;
  }
  generateNotificationTag(t2, o2, a2 = {}) {
    var m2 = this.core.V2NIMConversationIdUtil.parseConversationType(t2), u2 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(t2), h2 = Date.now(), g2 = { 1: 100, 2: 101, 3: 103 };
    return Object.assign(Object.assign({}, a2), { notificationConfig: Object.assign({ unreadEnabled: true, offlineEnabled: true }, null == a2 ? void 0 : a2.notificationConfig), pushConfig: Object.assign({ pushEnabled: true, pushNickEnabled: true }, null == a2 ? void 0 : a2.pushConfig), antispamConfig: Object.assign({ antispamEnabled: true }, null == a2 ? void 0 : a2.antispamConfig), routeConfig: Object.assign({ routeEnabled: true }, null == a2 ? void 0 : a2.routeConfig), timestamp: h2, type: g2[m2], receiverId: u2, content: o2 });
  }
};
function getFileOrPath(t2) {
  var o2 = "object" == typeof t2 ? t2 : void 0, a2 = "string" == typeof t2 ? t2 : void 0;
  if (!o2 && !a2)
    throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "getFileOrPath::incorrect file and path" } });
  if ("string" == typeof a2) {
    if (0 === a2.indexOf("nim-external")) {
      var m2 = document.getElementById(a2);
      if (!(m2 && m2.files && m2.files[0]))
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_FILE_NOT_FOUND, detail: { reason: `getFileOrPath::file not exist: ${a2}` } });
      o2 = m2.files[0];
    } else if ("BROWSER" === Ae.platform)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: `getFileOrPath::incorrect path: ${a2}` } });
  }
  if ("object" == typeof o2 && void 0 === o2.size)
    throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "getFileOrPath::file no size" } });
  return { file: o2, path: a2 };
}
var Kr = { attachment: { type: "object", rules: { url: { type: "string", allowEmpty: false } } }, thumbSize: { type: "object", rules: { width: { type: "number", required: false, min: 0 }, height: { type: "number", required: false, min: 0 } } } };
var V2NIMStorageUtil = class extends V2Service {
  constructor(t2) {
    super("V2NIMStorageUtil", t2), this.core = t2;
  }
  imageThumbUrl(t2, o2) {
    return t2 + `?imageView&thumbnail=${o2}z${o2}`;
  }
  videoCoverUrl(t2, o2) {
    return t2 + `?vframe&offset=${o2}`;
  }
  getImageThumbUrl(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2();
      var a2 = t2;
      validate(Kr, { attachment: a2, thumbSize: o2 }, "", true), o2.width = o2.width || 0, o2.height = o2.height || 0, 0 === o2.width && 0 === o2.height && (o2.width = 150);
      var m2 = a2.url;
      try {
        m2 = yield this.core.V2NIMStorageService.shortUrlToLong(a2.url);
      } catch (t3) {
        this.core.logger.warn("shortUrlToLong error:", t3);
      }
      return { url: this.core.cloudStorage.getThumbUrl(m2, o2) };
    });
  }
  getVideoCoverUrl(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2();
      var a2 = t2;
      validate(Kr, { attachment: a2, thumbSize: o2 }, "", true), o2.width = o2.width || 0, o2.height = o2.height || 0, 0 === o2.width && 0 === o2.height && (o2.width = 150);
      var m2 = a2.url;
      try {
        m2 = yield this.core.V2NIMStorageService.shortUrlToLong(a2.url);
      } catch (t3) {
        this.core.logger.warn("shortUrlToLong error:", t3);
      }
      return { url: this.core.cloudStorage.getVideoCoverUrl(m2, o2) };
    });
  }
};
var Wr;
var Jr;
var Xr = { file: { md5: "$(Etag)", size: "$(ObjectSize)" }, image: { md5: "$(Etag)", size: "$(ObjectSize)", w: "$(ImageInfo.Width)", h: "$(ImageInfo.Height)", orientation: "$(ImageInfo.Orientation)" }, audio: { md5: "$(Etag)", size: "$(ObjectSize)", dur: "$(AVinfo.Audio.Duration)" }, video: { md5: "$(Etag)", size: "$(ObjectSize)", dur: "$(AVinfo.Video.Duration)", w: "$(AVinfo.Video.Width)", h: "$(AVinfo.Video.Height)" } };
var Qr = { accessKeyId: "", secretAccessKey: "", sessionToken: "", region: "", maxRetries: 0, bucket: "", objectName: "", token: "", shortUrl: "" };
function getUploadResponseFormat(t2 = "file") {
  var o2 = Xr[t2] || {};
  return JSON.stringify(o2).replace(/"/gi, '\\"');
}
!function(t2) {
  t2[t2.nos = 1] = "nos", t2[t2.s3 = 2] = "s3";
}(Wr || (Wr = {})), function(t2) {
  t2[t2.dontNeed = -1] = "dontNeed", t2[t2.time = 2] = "time", t2[t2.urls = 3] = "urls";
}(Jr || (Jr = {}));
var Zr = { chunkUploadHost: "https://wannos-web.127.net", chunkUploadHostBackupList: ["https://fileup.chatnos.com", "https://oss.chatnos.com"], commonUploadHost: "https://fileup.chatnos.com", commonUploadHostBackupList: ["https://oss.chatnos.com"], chunkMaxSize: 4194304e4, commonMaxSize: 104857600, uploadReplaceFormat: "https://{host}/{object}", cdn: { defaultCdnDomain: "nim-nosdn.netease.im", cdnDomain: "", bucket: "", objectNamePrefix: "" }, downloadUrl: "https://{bucket}-nosdn.netease.im/{object}", downloadHostList: ["nos.netease.com"], nosCdnEnable: true, isNeedToGetUploadPolicyFromServer: true };
function pickBy(t2, o2) {
  t2 = t2 || {}, o2 = o2 || (() => true);
  var a2 = {};
  for (var m2 in t2)
    o2(t2[m2]) && (a2[m2] = t2[m2]);
  return a2;
}
var NOS = class {
  constructor(t2, o2) {
    this.nosCdnHostTimer = 0, this.nosErrorCount = 0, this.core = t2, this.cloudStorage = o2;
  }
  get config() {
    return this.cloudStorage.config;
  }
  reset() {
    this.nosErrorCount = 0;
  }
  getNosAccessToken(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var o2 = get(yield this.core.sendCmd("getNosAccessToken", { tag: t2 }), "content.nosAccessTokenTag.token"), a2 = t2.url;
      return { token: o2, url: -1 !== a2.indexOf("?") ? a2 + "&token=" + o2 : a2 + "?token=" + o2 };
    });
  }
  deleteNosAccessToken(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.core.sendCmd("deleteNosAccessToken", { tag: t2 });
    });
  }
  nosUpload(t2, o2) {
    var a2, m2, u2, h2, g2, I2, M2, _2;
    return __awaiter(this, void 0, void 0, function* () {
      var E2 = get(this.core, "config.cdn.bucket"), S2 = { tag: t2.nosScenes || E2 || "nim" };
      t2.nosSurvivalTime && (S2.expireSec = t2.nosSurvivalTime);
      var T2, C2 = this.core.adapters.getFileUploadInformation(t2);
      if (!o2 && !C2)
        try {
          T2 = yield this.core.sendCmd("getNosToken", { responseBody: getUploadResponseFormat(t2.type), nosToken: S2 });
        } catch (t3) {
          if (this.core.logger.error("uploadFile:: getNosToken error", t3), t3 instanceof V2NIMErrorImpl)
            throw t3;
          throw new UploadError({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_FILE_UPLOAD_FAILED : 400, detail: { reason: "getNosToken error", rawError: t3, curProvider: 1 } });
        }
      var N2 = this.config.uploadReplaceFormat.replace("{host}", this.config.cdn.cdnDomain || this.config.cdn.defaultCdnDomain).replace("{object}", C2 ? null === (a2 = C2.uploadInfo) || void 0 === a2 ? void 0 : a2.objectName : o2 ? null == o2 ? void 0 : o2.objectName : T2.content.nosToken.objectName), A2 = "";
      o2 && o2.shortUrl && (A2 = o2.shortUrl), (null === (h2 = null === (u2 = null === (m2 = null == C2 ? void 0 : C2.uploadInfo) || void 0 === m2 ? void 0 : m2.payload) || void 0 === u2 ? void 0 : u2.mixStoreToken) || void 0 === h2 ? void 0 : h2.shortUrl) && (A2 = C2.uploadInfo.payload.mixStoreToken.shortUrl);
      var O2, R2 = A2 || N2;
      try {
        var b2 = C2 ? { token: null === (g2 = null == C2 ? void 0 : C2.uploadInfo) || void 0 === g2 ? void 0 : g2.token, bucket: null === (I2 = null == C2 ? void 0 : C2.uploadInfo) || void 0 === I2 ? void 0 : I2.bucketName, objectName: null === (M2 = null == C2 ? void 0 : C2.uploadInfo) || void 0 === M2 ? void 0 : M2.objectName } : o2 || T2.content.nosToken;
        this.core.logger.log("uploadFile:: uploadFile params", { nosToken: b2, chunkUploadHost: this.config.chunkUploadHost, chunkUploadHostBackupList: this.config.chunkUploadHostBackupList, commonUploadHost: this.config.commonUploadHost, commonUploadHostBackupList: this.config.commonUploadHostBackupList, platform: Ae.platform });
        var V2 = "BROWSER" === Ae.platform ? this.config.chunkUploadHost : `${this.config.commonUploadHost}/${b2 && b2.bucket}`;
        this.core.reporterHookCloudStorage.update({ remote_addr: V2, operation_type: o2 ? 2 : 0 }), O2 = yield this.core.adapters.uploadFile(Object.assign(Object.assign(Object.assign({}, t2), { nosToken: b2, chunkUploadHost: this.config.chunkUploadHost, chunkUploadHostBackupList: this.config.chunkUploadHostBackupList, commonUploadHost: this.config.commonUploadHost, commonUploadHostBackupList: this.config.commonUploadHostBackupList, maxSize: t2.maxSize || this.config.chunkMaxSize }), o2 ? { payload: { mixStoreToken: o2 } } : {}));
      } catch (a3) {
        this.core.logger.error("uploadFile::nos uploadFile error:", a3);
        var k2 = "v2" === get(this.core, "options.apiVersion");
        if (a3.code === Me.V2NIM_ERROR_CODE_CANCELLED || 10499 === a3.errCode)
          throw new UploadError({ code: k2 ? Me.V2NIM_ERROR_CODE_CANCELLED : 400, detail: { reason: get(a3, "message") || "Request abort", rawError: a3, curProvider: 1 } });
        if (k2 && a3.errCode === Me.V2NIM_ERROR_CODE_FILE_OPEN_FAILED)
          throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_FILE_OPEN_FAILED, detail: { reason: get(a3, "message") || "Read file failed", rawError: a3, curProvider: 1 } });
        var { net_connect: P2 } = yield Ae.net.getNetworkStatus();
        if (false === P2)
          throw new UploadError({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_FILE_UPLOAD_FAILED : 400, detail: { reason: "No network", rawError: a3, curProvider: 1 } });
        if (o2) {
          if (this.nosErrorCount <= 0) {
            try {
              this.cloudStorage.mixStorage._addCircuitTimer();
            } catch (o3) {
              throw new UploadError({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_FILE_UPLOAD_FAILED : 400, detail: { reason: "All upload attempts failed", rawError: o3, curProvider: this.cloudStorage.mixStorage.curProvider, mixStorePolicy: this.cloudStorage.mixStorage.mixStorePolicy, file: t2.file || t2.filePath } });
            }
            return this.nosErrorCount = get(this.cloudStorage, "mixStorePolicy.nosPolicy.uploadConfig.retryPolicy.retry"), this.cloudStorage._uploadFile(t2);
          }
          return this.nosErrorCount--, this.nosUpload(t2, o2);
        }
        throw new UploadError({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_FILE_UPLOAD_FAILED : 400, detail: { reason: "NOS attempts failed", rawError: a3, curProvider: 1 } });
      }
      var L2 = null == O2 ? void 0 : O2.type, w2 = L2 && L2.indexOf("/") > -1 ? L2.slice(0, L2.indexOf("/")) : "";
      w2 || (w2 = t2.type || "");
      var D2, U2 = { image: "imageInfo", video: "vinfo", audio: "vinfo" };
      if (!U2[w2])
        return Object.assign({ url: R2 }, O2);
      try {
        D2 = yield this.core.adapters.request(`${N2}?${U2[w2]}`, { method: "GET", dataType: "json", timeout: 5e3 }, { exception_service: 3 });
      } catch (t3) {
        return this.core.logger.error("uploadFile:: fetch file info error", t3), Object.assign({ url: R2 }, O2);
      }
      if (D2) {
        var { data: x2 } = D2, B2 = "imageInfo" === U2[w2] ? x2 : null === (_2 = null == x2 ? void 0 : x2.GetVideoInfo) || void 0 === _2 ? void 0 : _2.VideoInfo;
        return pickBy({ url: R2, name: O2.name, size: O2.size, ext: O2.ext, w: null == B2 ? void 0 : B2.Width, h: null == B2 ? void 0 : B2.Height, orientation: null == B2 ? void 0 : B2.Orientation, dur: null == B2 ? void 0 : B2.Duration, audioCodec: null == B2 ? void 0 : B2.AudioCodec, videoCodec: null == B2 ? void 0 : B2.VideoCodec, container: null == B2 ? void 0 : B2.Container }, function(t3) {
          return void 0 !== t3;
        });
      }
      return Object.assign({ url: R2 }, O2);
    });
  }
  _getNosCdnHost() {
    var t2;
    return __awaiter(this, void 0, void 0, function* () {
      var o2;
      try {
        o2 = yield this.core.sendCmd("getNosCdnHost");
      } catch (t3) {
        return void this.core.logger.error("getNosCdnHost::error", t3);
      }
      if (o2) {
        var a2 = null === (t2 = null == o2 ? void 0 : o2.content) || void 0 === t2 ? void 0 : t2.nosConfigTag, m2 = parseInt(null == a2 ? void 0 : a2.expire);
        0 !== m2 && a2.cdnDomain ? -1 === m2 ? (this.config.cdn.bucket = a2.bucket, this.config.cdn.cdnDomain = a2.cdnDomain, this.config.cdn.objectNamePrefix = a2.objectNamePrefix) : (this.config.cdn.bucket = a2.bucket, this.config.cdn.cdnDomain = a2.cdnDomain, this.config.cdn.objectNamePrefix = a2.objectNamePrefix, this.nosCdnHostTimer = this.core.timerManager.addTimer(() => {
          this._getNosCdnHost();
        }, 1e3 * m2)) : (this.config.cdn.bucket = "", this.config.cdn.cdnDomain = "", this.config.cdn.objectNamePrefix = "");
      }
    });
  }
};
var ei = { "6_2": "getNosToken", "6_22": "getOriginUrl", "6_24": "getNosAccessToken", "6_25": "deleteNosAccessToken", "6_26": "getNosCdnHost", "6_27": "getGrayscaleConfig", "6_28": "getMixStorePolicy", "6_29": "getMixStoreToken", "6_30": "getFileAuthToken" };
var ti = { nosToken: { objectName: 1, token: 2, bucket: 3, expireTime: 4, expireSec: 7, tag: 8, shortUrl: 9 }, mixStoreTokenReqTag: { provider: 0, tokenCount: 1, nosSurvivalTime: 2, tag: 3, returnBody: 4, policyVersion: 5 }, nosConfigTag: { bucket: 1, cdnDomain: 2, expire: 3, objectNamePrefix: 4 }, grayConfigTag: { config: 0, ttl: 1 }, mixStorePolicyTag: { providers: 0, ttl: 1, mixEnable: 2, nosPolicy: 3, s3Policy: 4, policyVersion: 5 }, mixStoreTokenResTag: { provider: 0, accessKeyId: 1, secretAccessKey: 2, sessionToken: 3, token: 4, expireTime: 5, bucket: 6, objectName: 7, fileExpireSec: 8, tag: 9, shortUrl: 10, region: 11 }, nosSafeUrlTag: { safeUrl: 0, originUrl: 1 }, mixStoreAuthTokenReqTag: { type: 1, urls: 2 }, mixStoreAuthTokenResTag: { type: 1, tokens: 2, token: 3, ttl: 4 }, nosAccessTokenTag: { token: 0, url: 1, userAgent: 2, ext: 3 } };
var ri = { getNosToken: { sid: 6, cid: 2, service: "cloudStorage", params: [{ type: "String", name: "responseBody" }, { type: "Property", name: "nosToken", entity: "nosToken", reflectMapper: ti.nosToken }], response: [{ type: "Property", name: "nosToken", reflectMapper: invertSerializeItem(ti.nosToken) }] }, getOriginUrl: { sid: 6, cid: 22, service: "cloudStorage", params: [{ type: "Property", name: "nosSafeUrlTag", reflectMapper: ti.nosSafeUrlTag }], response: [{ type: "Property", name: "nosSafeUrlTag", reflectMapper: invertSerializeItem(ti.nosSafeUrlTag) }] }, getNosCdnHost: { sid: 6, cid: 26, service: "cloudStorage", response: [{ type: "Property", name: "nosConfigTag", reflectMapper: invertSerializeItem(ti.nosConfigTag) }] }, getGrayscaleConfig: { sid: 6, cid: 27, service: "cloudStorage", params: [{ type: "Property", name: "config" }], response: [{ type: "Property", name: "grayConfigTag", reflectMapper: invertSerializeItem(ti.grayConfigTag) }] }, getMixStorePolicy: { sid: 6, cid: 28, service: "cloudStorage", params: [{ type: "LongArray", name: "supportType" }], response: [{ type: "Property", name: "mixStorePolicyTag", reflectMapper: invertSerializeItem(ti.mixStorePolicyTag) }] }, getMixStoreToken: { sid: 6, cid: 29, service: "cloudStorage", params: [{ type: "Property", name: "mixStoreTokenReqTag", reflectMapper: ti.mixStoreTokenReqTag }], response: [{ type: "Property", name: "mixStoreTokenResTag", reflectMapper: invertSerializeItem(ti.mixStoreTokenResTag) }] }, getFileAuthToken: { sid: 6, cid: 30, service: "cloudStorage", params: [{ type: "Property", name: "mixStoreAuthTokenReqTag", reflectMapper: ti.mixStoreAuthTokenReqTag }], response: [{ type: "Property", name: "mixStoreAuthTokenResTag", reflectMapper: invertSerializeItem(ti.mixStoreAuthTokenResTag) }] }, getNosAccessToken: { sid: 6, cid: 24, service: "cloudStorage", params: [{ type: "Property", name: "tag", reflectMapper: ti.nosAccessTokenTag }], response: [{ type: "Property", name: "tag", reflectMapper: invertSerializeItem(ti.nosAccessTokenTag) }] }, deleteNosAccessToken: { sid: 6, cid: 25, service: "cloudStorage", params: [{ type: "Property", name: "tag", reflectMapper: ti.nosAccessTokenTag }] } };
var MixStorage = class {
  constructor(t2, o2) {
    this.GRAYKEY = "AllGrayscaleConfig", this.MIXSTOREKEY = "AllMixStorePolicy", this.grayConfig = { mixStoreEnable: false, timeStamp: 0, ttl: 0 }, this.mixStorePolicy = { providers: [], timeStamp: 0, ttl: 0, s3Policy: null, nosPolicy: null, policyVersion: void 0 }, this.curProvider = 1, this.mixStoreErrorCount = 10, this.circuitTimer = 0, this.core = t2, this.cloudStorage = o2, this.logger = t2.logger;
  }
  reset() {
    this.grayConfig = null, this.mixStorePolicy = { providers: [], timeStamp: 0, ttl: 0, s3Policy: null, nosPolicy: null, policyVersion: void 0 }, this.curProvider = 1, this.mixStoreErrorCount = 10;
  }
  getGrayscaleConfig(t2, o2) {
    var a2;
    return __awaiter(this, void 0, void 0, function* () {
      if (Ae.localStorage)
        try {
          Ae.localStorage.getItem && Ae.localStorage.getItem(this.GRAYKEY) && (this.grayConfig = JSON.parse(Ae.localStorage.getItem(this.GRAYKEY))[t2]);
        } catch (t3) {
          Ae.localStorage.getItem(this.GRAYKEY) && this.core.logger.error("uploadFile:: JSON.parse grayscaleConfig error ", t3);
        }
      if (!this.grayConfig || this.grayConfig.timeStamp + 1e3 * this.grayConfig.ttl < o2) {
        var m2 = yield this.core.sendCmd("getGrayscaleConfig", { config: {} });
        if (m2.content && m2.content.grayConfigTag) {
          this.logger.log("uploadFile::getAppGrayConfigRequest success ");
          try {
            this.grayConfig = JSON.parse(m2.content.grayConfigTag.config), this.grayConfig.ttl = JSON.parse(m2.content.grayConfigTag.ttl);
          } catch (t3) {
            this.logger.error("getGrayscaleConfig error", t3);
          }
          if (!this.grayConfig)
            return;
          var u2 = Ae.localStorage.getItem(this.GRAYKEY) ? JSON.parse(Ae.localStorage.getItem(this.GRAYKEY)) : {};
          this.grayConfig.timeStamp = (/* @__PURE__ */ new Date()).getTime(), u2[t2] = this.grayConfig, Ae.localStorage.setItem(this.GRAYKEY, JSON.stringify(u2));
        } else
          this.logger.log("uploadFile:: result grayConfig:", m2.content);
      }
      (null === (a2 = this.grayConfig) || void 0 === a2 ? void 0 : a2.mixStoreEnable) && (yield this._getMixStorePolicy(t2));
    });
  }
  _getMixStorePolicy(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var o2 = (/* @__PURE__ */ new Date()).getTime();
      if (Ae.localStorage)
        try {
          if (this.mixStorePolicy = JSON.parse(Ae.localStorage.getItem(this.MIXSTOREKEY))[t2], this.curProvider = parseInt(this.mixStorePolicy.providers[0]), this.mixStorePolicy.timeStamp && this.mixStorePolicy.timeStamp + 1e3 * this.mixStorePolicy.ttl > o2) {
            var a2 = this.mixStorePolicy.timeStamp + 1e3 * this.mixStorePolicy.ttl - o2;
            this.core.timerManager.addTimer(this._getMixStorePolicy.bind(this, t2), a2);
          }
        } catch (o3) {
          Ae.localStorage.getItem(this.MIXSTOREKEY) && JSON.parse(Ae.localStorage.getItem(this.MIXSTOREKEY))[t2] && this.core.logger.error("uploadFile:: JSON.parse mixStorePolicy error ", o3);
        }
      if (!this.mixStorePolicy || this.mixStorePolicy.timeStamp + 1e3 * this.mixStorePolicy.ttl <= o2)
        try {
          var m2 = (yield this.core.sendCmd("getMixStorePolicy", { supportType: this.cloudStorage.aws.s3 ? [1, 2] : [1] })).content.mixStorePolicyTag;
          this.mixStorePolicy = { providers: [], timeStamp: 0, ttl: 0, s3Policy: null, nosPolicy: null, policyVersion: void 0 }, this.mixStorePolicy.policyVersion = m2.policyVersion, this.mixStorePolicy.ttl = Number(m2.ttl), this.mixStorePolicy.providers = m2.providers.split(","), this.circuitTimer && this.core.timerManager.deleteTimer(this.circuitTimer), this.curProvider = parseInt(this.mixStorePolicy.providers[0]), this.mixStorePolicy.nosPolicy = m2.nosPolicy ? JSON.parse(m2.nosPolicy) : null, this.mixStorePolicy.s3Policy = m2.s3Policy ? JSON.parse(m2.s3Policy) : null, null === this.mixStorePolicy.s3Policy ? this.mixStorePolicy.providers = ["1"] : null === this.mixStorePolicy.nosPolicy ? this.mixStorePolicy.providers = ["2"] : this.mixStorePolicy.providers = this.mixStorePolicy.s3Policy.priority < this.mixStorePolicy.nosPolicy.priority ? ["2", "1"] : ["1", "2"], this.core.timerManager.addTimer(this._getMixStorePolicy.bind(this, t2), 1e3 * this.mixStorePolicy.ttl);
          var u2 = Ae.localStorage.getItem(this.MIXSTOREKEY) ? JSON.parse(Ae.localStorage.getItem(this.MIXSTOREKEY)) : {};
          this.mixStorePolicy.timeStamp = (/* @__PURE__ */ new Date()).getTime(), u2[t2] = this.mixStorePolicy, Ae.localStorage.setItem(this.MIXSTOREKEY, JSON.stringify(u2));
        } catch (o3) {
          if (this.logger.error("getMixStorePolicy error", o3), 0 === this.mixStoreErrorCount)
            throw new Error("getMixStorePolicy all count error");
          this._getMixStorePolicy(t2), this.mixStoreErrorCount--;
        }
      this.mixStorePolicy.nosPolicy && (this.cloudStorage.nos.nosErrorCount = this.mixStorePolicy.nosPolicy.uploadConfig.retryPolicy.retry);
    });
  }
  _addCircuitTimer() {
    var t2 = this.mixStorePolicy.providers, o2 = t2[(t2.indexOf(String(this.curProvider)) + 1) % t2.length];
    if (!o2)
      throw new Error("uploadFile nextProvider error");
    if (o2 === t2[0])
      throw new Error("uploadFile all policy fail");
    if (this.logger.log(`uploadFile:: upload policy will change,now policy:${this.curProvider} nextProvider:${o2}`), this.curProvider = parseInt(o2), this.mixStorePolicy.nosPolicy && this.mixStorePolicy.s3Policy) {
      var a2 = this.mixStorePolicy[1 === this.curProvider ? "nosPolicy" : "s3Policy"].uploadConfig.retryPolicy.circuit;
      if (!a2 || 0 === a2)
        throw new Error("uploadFile circuit error");
      this.circuitTimer = this.core.timerManager.addTimer(() => {
        this.logger.log(`uploadFile:: upload policy will change,now policy:${this.curProvider} nextProvider:${parseInt(this.mixStorePolicy.providers[0])}`), this.curProvider = parseInt(this.mixStorePolicy.providers[0]), this.core.timerManager.deleteTimer(this.circuitTimer);
      }, 1e3 * a2);
    }
    throw new Error("uploadFile will not retry again");
  }
  getFileAuthToken(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.core.sendCmd("getFileAuthToken", { mixStoreAuthTokenReqTag: t2 })).content.mixStoreAuthTokenResTag;
    });
  }
};
var ii = -1;
var AWS = class {
  constructor(t2, o2) {
    this.s3 = null, this.core = t2, this.cloudStorage = o2, this.logger = t2.logger;
  }
  get mixStorePolicy() {
    return this.cloudStorage.mixStorage.mixStorePolicy;
  }
  s3Upload(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      var a2;
      if (ii += 1, t2.file)
        a2 = t2.file;
      else if ("string" == typeof t2.fileInput) {
        this.logger.warn("fileInput will abandon,Please use file or filepath");
        var m2 = document.getElementById(t2.fileInput);
        if (!(m2 && m2.files && m2.files[0]))
          throw new Error("Can not get file from fileInput");
        a2 = m2.files[0];
      } else {
        if (!(t2.fileInput && t2.fileInput.files && t2.fileInput.files[0]))
          throw new Error(`Can not get file from fileInput ${t2.fileInput}`);
        a2 = t2.fileInput.files[0];
      }
      if (!this.mixStorePolicy.s3Policy)
        throw new Error("dont get s3 policy");
      var u2 = { accessKeyId: o2.accessKeyId, secretAccessKey: o2.secretAccessKey, sessionToken: o2.sessionToken, region: o2.region, maxRetries: this.mixStorePolicy.s3Policy.uploadConfig.retryPolicy.retry }, h2 = this.s3, g2 = decodeURIComponent(o2.bucket), I2 = decodeURIComponent(o2.objectName), M2 = a2, _2 = `https://${g2}.s3.amazonaws.com/${I2}`, E2 = {}, S2 = this.mixStorePolicy.s3Policy;
      if (S2 && S2.uploadConfig && Array.isArray(S2.uploadConfig.uploadUrl) && S2.uploadConfig.uploadUrl.length > 0) {
        var T2 = S2.uploadConfig.uploadUrl.length;
        ii %= T2, E2.endpoint = S2.uploadConfig.uploadUrl[ii], E2.s3ForcePathStyle = true, _2 = `${E2.endpoint}/${g2}/${I2}`;
      }
      this.core.reporterHookCloudStorage.update({ remote_addr: _2, operation_type: 1 });
      var C2 = new h2(E2);
      C2.config.update(u2);
      var N2 = { Bucket: g2, Key: I2, Body: M2, Metadata: { token: o2.token }, ContentType: M2.type || "application/octet-stream" };
      this.core.logger.log("uploadFile:: s3 upload params:", N2);
      var A2 = C2.upload(N2);
      return A2.on("httpUploadProgress", (o3) => {
        var a3 = parseFloat((o3.loaded / o3.total).toFixed(2));
        t2.onUploadProgress && t2.onUploadProgress({ total: o3.total, loaded: o3.loaded, percentage: a3, percentageText: Math.round(100 * a3) + "%" });
      }), new Promise((a3, m3) => {
        var u3 = (/* @__PURE__ */ new Date()).getTime();
        A2.send((h3, _3) => __awaiter(this, void 0, void 0, function* () {
          var E3, S3, T3;
          if (h3 && "RequestAbortedError" === h3.code)
            this.logger.error("uploadFile:", "api::s3:upload file abort.", h3), m3(new UploadError({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_CANCELLED : 400, detail: { reason: "S3RequestAbortedError", rawError: h3, curProvider: 2 } }));
          else {
            if (!h3) {
              var C3 = this.mixStorePolicy.s3Policy.cdnSchema;
              C3 = (C3 = C3.replace("{cdnDomain}", this.mixStorePolicy.s3Policy.dlcdn)).replace("{objectName}", _3.Key);
              var N3 = { size: M2.size, name: M2.name, url: o2.shortUrl ? o2.shortUrl : C3, ext: M2.name.split(".")[1] || "unknown" }, A3 = t2.type || "", O2 = { image: "imageInfo" };
              return a3(O2[A3] ? yield this.getS3FileInfo({ url: C3, infoSuffix: O2[A3], s3Result: N3 }) : N3);
            }
            this.logger.error("uploadFile:", "api::s3:upload file failed.", h3), this.core.reporter.reportTraceStart("exceptions", { user_id: this.core.options.account || (null === (S3 = null === (E3 = this.core) || void 0 === E3 ? void 0 : E3.auth) || void 0 === S3 ? void 0 : S3.account), trace_id: null === (T3 = this.core.clientSocket.socket) || void 0 === T3 ? void 0 : T3.sessionId, start_time: u3, action: 1, exception_service: 4 }), this.core.reporter.reportTraceUpdateV2("exceptions", { code: "number" == typeof h3.status ? h3.status : "number" == typeof h3.code ? h3.code : 0, description: h3.message || `${h3.code}`, operation_type: 1, target: JSON.stringify({ bucket: g2, object: I2 }) }, { asyncParams: Ae.net.getNetworkStatus() }), this.core.reporter.reportTraceEnd("exceptions", 1);
            var { net_connect: R2 } = yield Ae.net.getNetworkStatus();
            if (false === R2)
              return m3(new UploadError({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_FILE_UPLOAD_FAILED : 400, detail: { reason: "No network", rawError: h3, curProvider: this.cloudStorage.mixStorage.curProvider } }));
            try {
              this.cloudStorage.mixStorage._addCircuitTimer();
            } catch (o3) {
              return m3(new UploadError({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_FILE_UPLOAD_FAILED : 400, detail: { reason: "All upload attempts failed", rawError: o3, curProvider: this.cloudStorage.mixStorage.curProvider, mixStorePolicy: this.mixStorePolicy, file: t2.file || t2.filePath } }));
            }
            a3(this.cloudStorage._uploadFile(t2));
          }
        })), t2.onUploadStart && t2.onUploadStart(A2);
      });
    });
  }
  getS3FileInfo(t2) {
    var o2;
    return __awaiter(this, void 0, void 0, function* () {
      var a2, { url: m2, infoSuffix: u2, s3Result: h2 } = t2;
      try {
        a2 = yield this.core.adapters.request(`${m2}?${u2}`, { method: "GET", dataType: "text", timeout: 5e3 }, { exception_service: 3 });
      } catch (t3) {
        return this.core.logger.error("uploadFile:: fetch file info error", t3), h2;
      }
      if (a2) {
        var { data: g2 } = a2, I2 = "imageInfo" === u2 ? g2 : null === (o2 = null == g2 ? void 0 : g2.GetVideoInfo) || void 0 === o2 ? void 0 : o2.VideoInfo;
        return pickBy(Object.assign(Object.assign({}, h2), { w: null == I2 ? void 0 : I2.Width, h: null == I2 ? void 0 : I2.Height, orientation: null == I2 ? void 0 : I2.Orientation, dur: null == I2 ? void 0 : I2.Duration, audioCodec: null == I2 ? void 0 : I2.AudioCodec, videoCodec: null == I2 ? void 0 : I2.VideoCodec, container: null == I2 ? void 0 : I2.Container }), function(t3) {
          return void 0 !== t3;
        });
      }
      return this.core.logger.error("uploadFile:: fetch s3 file info no result", `${m2}?${u2}`), h2;
    });
  }
};
var CloudStorageService = class {
  constructor(t2, o2 = {}) {
    this.config = {}, this.uploadTaskMap = {}, this.name = "cloudStorage", this.logger = t2.logger, this.core = t2, this.nos = new NOS(t2, this), this.mixStorage = new MixStorage(t2, this), this.aws = new AWS(t2, this), registerParser({ cmdMap: ei, cmdConfig: ri }), this.setOptions(o2), this.setListeners();
  }
  setOptions(t2 = {}) {
    var o2 = t2.storageKeyPrefix || "NIMClient";
    this.mixStorage.GRAYKEY = o2 + "-AllGrayscaleConfig", this.mixStorage.MIXSTOREKEY = o2 + "-AllMixStorePolicy";
    var { s3: a2 } = t2, m2 = __rest(t2, ["s3"]), u2 = Object.assign({}, Zr, this.config);
    if (m2 && Object.prototype.hasOwnProperty.call(m2, "cdn")) {
      var h2 = Object.assign(Object.assign({}, u2.cdn), m2.cdn);
      this.config = Object.assign({}, u2, m2), this.config.cdn = h2;
    } else
      this.config = Object.assign({}, u2, m2);
    a2 && (this.aws.s3 = a2);
  }
  setListeners() {
    this.core.eventBus.on("kicked", this._clearUnCompleteTask.bind(this)), this.core.eventBus.on("disconnect", this._clearUnCompleteTask.bind(this)), this.core.eventBus.on("V2NIMLoginService/loginLifeCycleLogout", this._clearUnCompleteTask.bind(this)), this.core.eventBus.on("V2NIMLoginService/loginLifeCycleKicked", this._clearUnCompleteTask.bind(this));
  }
  _clearUnCompleteTask() {
    Object.keys(this.uploadTaskMap).forEach((t2) => {
      var o2 = this.uploadTaskMap[t2];
      o2 && o2.abort && o2.abort();
    }), this.uploadTaskMap = {};
  }
  init(t2 = Date.now()) {
    return __awaiter(this, void 0, void 0, function* () {
      this.mixStorage.reset(), this.nos.reset(), this.config.isNeedToGetUploadPolicyFromServer && (yield this.mixStorage.getGrayscaleConfig(this.core.options.appkey, t2)), yield this.nos._getNosCdnHost();
    });
  }
  processCallback(t2, o2) {
    var a2 = t2.onUploadProgress, m2 = t2.onUploadDone, u2 = t2.onUploadStart;
    return { onUploadStart: "function" == typeof u2 ? (t3) => {
      this.uploadTaskMap[o2] = t3;
      try {
        u2(t3);
      } catch (t4) {
        this.logger.error("CloudStorage::uploadFile:options.onUploadStart execute error", t4);
      }
    } : (t3) => {
      this.uploadTaskMap[o2] = t3;
    }, onUploadProgress: "function" == typeof a2 ? (t3) => {
      this.core.reporterHookCloudStorage.update({ transferred_size: t3.loaded, full_size: t3.total });
      try {
        a2(t3);
      } catch (t4) {
        this.logger.error("CloudStorage::uploadFile:options.onUploadProgress execute error", t4);
      }
    } : (t3) => {
      this.core.reporterHookCloudStorage.update({ transferred_size: t3.loaded, full_size: t3.total });
    }, onUploadDone: "function" == typeof m2 ? (t3) => {
      this.core.reporterHookCloudStorage.end(0);
      try {
        m2(t3);
      } catch (t4) {
        this.logger.error("CloudStorage::uploadFile:options.onUploadDone execute error", t4);
      }
    } : () => {
      this.core.reporterHookCloudStorage.end(0);
    }, taskKey: o2 };
  }
  uploadFile(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate({ maxSize: { type: "number", required: false }, type: { type: "enum", values: ["file", "image", "audio", "video"] } }, t2), !t2.fileInput && !t2.file && !t2.filePath)
        throw new Error("uploadFile needs target file object or a filePath");
      if (t2.type && "file" !== t2.type) {
        var o2 = get(t2, "file.type");
        if (o2 && "string" == typeof o2 && -1 === o2.indexOf(t2.type))
          throw new Error(`The meta type "${o2}" does not match "${t2.type}"`);
      }
      if (this.core.reporterHookCloudStorage.start(), t2.file)
        this.core.reporterHookCloudStorage.update({ full_size: t2.file.size });
      else if ("string" == typeof t2.fileInput) {
        var a2 = document.getElementById(t2.fileInput);
        a2 && a2.files && a2.files[0] && this.core.reporterHookCloudStorage.update({ full_size: a2.files[0].size });
      } else
        t2.fileInput && t2.fileInput.files && t2.fileInput.files[0] && this.core.reporterHookCloudStorage.update({ full_size: t2.fileInput.files[0].size });
      var m2 = Ve(), { onUploadStart: u2, onUploadProgress: h2, onUploadDone: g2 } = this.processCallback(t2, m2);
      t2.onUploadStart = u2, t2.onUploadProgress = h2, t2.onUploadDone = g2;
      var I2 = null;
      try {
        I2 = yield this._uploadFile(t2), t2.md5 && (I2.md5 = t2.md5), delete this.uploadTaskMap[m2];
      } catch (t3) {
        throw delete this.uploadTaskMap[m2], this.core.reporterHookCloudStorage.end((t3 && t3.code) === Me.V2NIM_ERROR_CODE_CANCELLED ? 3 : 1), t3;
      }
      return I2 && (I2.size = void 0 === I2.size ? void 0 : Number(I2.size), I2.w = void 0 === I2.w ? void 0 : Number(I2.w), I2.h = void 0 === I2.h ? void 0 : Number(I2.h), I2.dur = void 0 === I2.dur ? void 0 : Number(I2.dur)), I2.url = decodeURIComponent(I2.url), t2.onUploadDone({ size: I2.size, name: I2.name, url: I2.url, ext: I2.name.split(".")[1] || "unknown" }), I2;
    });
  }
  _uploadFile(t2) {
    var o2, a2;
    return __awaiter(this, void 0, void 0, function* () {
      if (!get(this.mixStorage, "grayConfig.mixStoreEnable") || !get(this.mixStorage, "mixStorePolicy.providers.length"))
        return this.logger.log("uploadFile:: uploadFile begin, use old nos"), this.nos.nosUpload(t2);
      this.logger.log(`uploadFile::_uploadFile, grayConfig enable:${get(this.mixStorage, "grayConfig.mixStoreEnable")} curProvider:${get(this.mixStorage, "curProvider")}`);
      var m2 = this.core.adapters.getFileUploadInformation(t2), u2 = true;
      m2 ? false === m2.complete && 2 === this.mixStorage.curProvider && (u2 = false) : u2 = false, this.aws.s3 || (this.mixStorage.curProvider = 1);
      var h2 = Qr;
      if (!u2)
        try {
          h2 = (yield this.core.sendCmd("getMixStoreToken", { mixStoreTokenReqTag: { provider: this.mixStorage.curProvider, tokenCount: 1, tag: "qchat", nosSurvivalTime: t2.nosSurvivalTime, returnBody: getUploadResponseFormat(t2.type), policyVersion: this.mixStorage.mixStorePolicy.policyVersion } })).content.mixStoreTokenResTag;
        } catch (t3) {
          if (this.core.logger.error("uploadFile:: getMixStoreToken error", t3), t3 instanceof V2NIMErrorImpl)
            throw t3;
          throw new UploadError({ code: "v2" === get(this.core, "options.apiVersion") ? Me.V2NIM_ERROR_CODE_FILE_UPLOAD_FAILED : 400, detail: { reason: "getMixStoreToken error", rawError: t3, curProvider: this.mixStorage.curProvider, mixStorePolicy: this.mixStorage.mixStorePolicy } });
        }
      return u2 ? this.nos.nosUpload(t2, null === (a2 = null === (o2 = null == m2 ? void 0 : m2.uploadInfo) || void 0 === o2 ? void 0 : o2.payload) || void 0 === a2 ? void 0 : a2.mixStoreToken) : 2 === this.mixStorage.curProvider ? this.aws.s3Upload(t2, h2) : this.nos.nosUpload(t2, h2);
    });
  }
  getThumbUrl(t2, o2) {
    var a2, m2, u2, h2, g2;
    if (!new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/).test(t2))
      return this.logger.error("illegal file url:" + t2), t2;
    var [I2, M2, _2, E2, S2, T2, C2, N2] = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(t2);
    if (null === (a2 = this.grayConfig) || void 0 === a2 ? void 0 : a2.mixStoreEnable) {
      var A2 = this._getUrlType(t2);
      if (2 === A2 && this.mixStorePolicy.s3Policy && get(this.mixStorePolicy, "s3Policy.thumbPolicy.imagethumb"))
        return (null === (u2 = null === (m2 = this.mixStorePolicy.s3Policy) || void 0 === m2 ? void 0 : m2.thumbPolicy) || void 0 === u2 ? void 0 : u2.imagethumb).replace("{cdnDomain}", this.mixStorePolicy.s3Policy.dlcdn).replace("{objectName}", T2).replace("{x}", o2.width.toString()).replace("{y}", o2.height.toString());
      if (1 === A2 && this.mixStorePolicy.nosPolicy && get(this.mixStorePolicy, "nosPolicy.thumbPolicy.imagethumb"))
        return (null === (g2 = null === (h2 = this.mixStorePolicy.nosPolicy) || void 0 === h2 ? void 0 : h2.thumbPolicy) || void 0 === g2 ? void 0 : g2.imagethumb).replace("{cdnDomain}", this.mixStorePolicy.nosPolicy.dlcdn).replace("{objectName}", T2).replace("{x}", o2.width.toString()).replace("{y}", o2.height.toString());
    }
    return t2.includes("?") ? t2 + `&imageView&thumbnail=${o2.width}x${o2.height}` : t2 + `?imageView&thumbnail=${o2.width}x${o2.height}`;
  }
  getVideoCoverUrl(t2, o2) {
    var a2, m2, u2, h2, g2;
    if (!new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/).test(t2))
      return this.logger.error("illegal file url:" + t2), t2;
    var [I2, M2, _2, E2, S2, T2, C2, N2] = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(t2);
    if (null === (a2 = this.grayConfig) || void 0 === a2 ? void 0 : a2.mixStoreEnable) {
      var A2 = this._getUrlType(t2);
      if (2 === A2 && this.mixStorePolicy.s3Policy && get(this.mixStorePolicy, "s3Policy.thumbPolicy.vframe"))
        return (null === (u2 = null === (m2 = this.mixStorePolicy.s3Policy) || void 0 === m2 ? void 0 : m2.thumbPolicy) || void 0 === u2 ? void 0 : u2.vframe).replace("{cdnDomain}", this.mixStorePolicy.s3Policy.dlcdn).replace("{objectName}", T2).replace("{x}", o2.width.toString()).replace("{y}", o2.height.toString()).replace("{offset}", "0").replace("{type}", "png");
      if (1 === A2 && this.mixStorePolicy.nosPolicy && get(this.mixStorePolicy, "nosPolicy.thumbPolicy.vframe"))
        return (null === (g2 = null === (h2 = this.mixStorePolicy.nosPolicy) || void 0 === h2 ? void 0 : h2.thumbPolicy) || void 0 === g2 ? void 0 : g2.vframe).replace("{cdnDomain}", this.mixStorePolicy.nosPolicy.dlcdn).replace("{objectName}", T2).replace("{x}", o2.width.toString()).replace("{y}", o2.height.toString()).replace("{offset}", "0").replace("{type}", "png");
    }
    return t2.includes("?") ? t2 + `&vframe&offset=0&resize=${o2.width}x${o2.height}&type=png` : t2 + `?vframe&offset=0&resize=${o2.width}x${o2.height}&type=png`;
  }
  getPrivateUrl(t2) {
    var o2;
    if (!new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/).test(t2))
      return this.logger.error("illegal file url:" + t2), "";
    var [a2, m2, u2, h2, g2, I2, M2, _2] = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(t2);
    if (null === (o2 = this.grayConfig) || void 0 === o2 ? void 0 : o2.mixStoreEnable) {
      var E2 = this._getUrlType(t2);
      return 2 === E2 && this.mixStorePolicy.s3Policy && (t2 = this.mixStorePolicy.s3Policy.cdnSchema.replace("{cdnDomain}", this.mixStorePolicy.s3Policy.dlcdn).replace("{objectName}", I2)), 1 === E2 && this.mixStorePolicy.nosPolicy && (t2 = this.mixStorePolicy.nosPolicy.cdnSchema.replace("{cdnDomain}", this.mixStorePolicy.nosPolicy.dlcdn).replace("{objectName}", I2)), t2;
    }
    var { downloadUrl: S2, downloadHostList: T2, nosCdnEnable: C2 } = this.config, N2 = this.config.cdn.cdnDomain, A2 = this.config.cdn.objectNamePrefix ? decodeURIComponent(this.config.cdn.objectNamePrefix) : "", O2 = decodeURIComponent(I2), R2 = O2.indexOf(A2);
    if (N2 && R2 > -1 && C2)
      return `${m2}${N2}/${O2.slice(R2)}`;
    if (T2.includes(h2) && I2.includes("/")) {
      var b2 = I2.indexOf("/"), V2 = I2.substring(0, b2), k2 = I2.substring(b2 + 1);
      return S2.replace("{bucket}", V2).replace("{object}", k2);
    }
    var P2 = T2.filter((t3) => "string" == typeof h2 && h2.includes(t3))[0], L2 = P2 ? h2.replace(P2, "").replace(/\W/g, "") : null;
    return L2 ? S2.replace("{bucket}", L2).replace("{object}", I2) : t2;
  }
  getOriginUrl(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return "string" == typeof t2 && t2.includes("_im_url=1") ? (yield this.core.sendCmd("getOriginUrl", { nosSafeUrlTag: { safeUrl: t2 } })).content.nosSafeUrlTag.originUrl : t2;
    });
  }
  getFileToken(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      validate({ type: { type: "number", min: 2, max: 3 }, urls: { type: "array", required: false, itemType: "string" } }, t2);
      var o2 = this.mixStorePolicy.nosPolicy ? this.mixStorePolicy.nosPolicy.authPolicy.policyType : null, a2 = this.mixStorePolicy.s3Policy ? this.mixStorePolicy.s3Policy.authPolicy.policyType : null;
      if (o2 === String(-1) && a2 === String(-1))
        throw this.logger.error("don't need token"), new Error("don't need token");
      if (2 === t2.type) {
        if (o2 && o2.indexOf(String(2)) >= 0 || a2 && a2.indexOf(String(2)) > 0)
          return this.mixStorage.getFileAuthToken(t2);
        throw this.logger.error("don't support time token "), new Error("don't support type time token ");
      }
      if (!t2.urls || !t2.urls.length)
        throw this.logger.error("urls is required when urls token"), new Error("urls is required when urls token");
      var m2 = [], u2 = [];
      if (t2.urls.forEach((t3) => {
        var o3 = this._getUrlType(t3);
        1 === o3 && u2.push(t3), 2 === o3 && m2.push(t3);
      }), (!a2 || 0 !== m2.length && a2.indexOf(String(3)) < 0) && (this.logger.warn("s3 url don't support url token"), m2 = []), (!o2 || 0 !== u2.length && o2.indexOf(String(3)) < 0) && (this.logger.warn("nos url don't support url token"), u2 = []), 0 === m2.length && 0 === u2.length)
        throw this.logger.error("not support urls"), new Error("not support urls");
      if (0 === m2.length || 0 === u2.length)
        return t2.urls = JSON.stringify(t2.urls), this.mixStorage.getFileAuthToken(t2);
    });
  }
  _getUrlType(t2) {
    return this.mixStorePolicy.nosPolicy && this.mixStorePolicy.nosPolicy.dlcdns.some((o2) => t2.indexOf(o2) >= 0) ? 1 : this.mixStorePolicy.s3Policy && this.mixStorePolicy.s3Policy.dlcdns.some((o2) => t2.indexOf(o2) >= 0) ? 2 : null;
  }
  getNosAccessToken(t2) {
    return validate({ url: { type: "string", allowEmpty: false } }, t2), this.nos.getNosAccessToken(t2);
  }
  deleteNosAccessToken(t2) {
    return validate({ token: { type: "string", allowEmpty: false } }, t2), this.nos.deleteNosAccessToken(t2);
  }
  get grayConfig() {
    return this.mixStorage.grayConfig;
  }
  get mixStorePolicy() {
    return this.mixStorage.mixStorePolicy;
  }
  process(t2) {
    var o2 = get(t2, "error.detail.ignore");
    return t2.error && !o2 ? Promise.reject(t2.error) : Promise.resolve(t2);
  }
};
var V2NIMStorageServiceImpl = class extends V2Service {
  constructor(t2) {
    super("V2NIMStorageService", t2), this.sceneMap = { nim_default_profile_icon: { sceneName: "nim_default_profile_icon", expireTime: 0 }, nim_default_im: { sceneName: "nim_default_im", expireTime: 0 }, nim_system_nos_scene: { sceneName: "nim_system_nos_scene", expireTime: 0 }, nim_security: { sceneName: "nim_security", expireTime: 0 } }, this.uploadingMessageInfo = {}, this.core = t2, this.core._registerDep(CloudStorageService, "cloudStorage"), this.core._registerDep(V2NIMStorageUtil, "V2NIMStorageUtil");
  }
  addCustomStorageScene(t2, o2) {
    return this.checkV2(), validate({ sceneName: { type: "string", allowEmpty: false }, expireTime: { type: "number", min: 0 } }, { sceneName: t2, expireTime: o2 }, "", true), this.sceneMap[t2] = { sceneName: t2, expireTime: o2 }, { sceneName: t2, expireTime: o2 };
  }
  getStorageSceneList() {
    return this.checkV2(), Object.values(this.sceneMap);
  }
  getStorageScene(t2) {
    return t2 && this.sceneMap[t2] || this.sceneMap.nim_default_im;
  }
  hasStorageScene(t2) {
    return void 0 !== this.sceneMap[t2];
  }
  createUploadFileTask(t2) {
    if (this.checkV2(), "string" == typeof t2.fileObj && 0 === t2.fileObj.indexOf("nim-external")) {
      var o2 = document.getElementById(t2.fileObj);
      o2 && o2.files && o2.files[0] && (t2.fileObj = o2.files[0]);
    }
    return { taskId: Ve(), uploadParams: t2 };
  }
  uploadFile(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), validate({ taskId: { type: "string", allowEmpty: false } }, t2, "fileTask", true), (yield this._uploadFile(t2, o2))[0];
    });
  }
  uploadFileWithMetaInfo(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), validate({ taskId: { type: "string", allowEmpty: false } }, t2, "fileTask", true), function formatV2NIMFileMetaInfo(t3) {
        var { url: o3, name: a2, size: m2, ext: u2, md5: h2, h: g2, w: I2, orientation: M2, dur: _2, audioCodec: E2, videoCodec: S2, container: T2 } = t3;
        return JSON.parse(JSON.stringify({ url: o3, name: a2, size: m2, ext: u2, md5: h2, height: g2, width: I2, orientation: M2, duration: _2, audioCodec: E2, videoCodec: S2, container: T2 }));
      }((yield this._uploadFile(t2, o2))[1]);
    });
  }
  _uploadFile(t2, o2, a2) {
    var m2;
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.core.cloudStorage || !this.core.cloudStorage.uploadFile)
        throw new Error('Service "cloudStorage" does not exist');
      var { uploadParams: u2, taskId: h2 } = t2, { file: g2, path: I2 } = getFileOrPath(u2.fileObj), { fileType: M2 } = a2 || {};
      if (this.uploadingMessageInfo[h2])
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_ALREADY_EXIST, detail: { reason: "V2NIMStorageService.uploadFile: repeat upload" } });
      try {
        var _2 = {};
        g2 ? _2.file = g2 : I2 && (0 === (null == I2 ? void 0 : I2.indexOf("nim-external")) ? _2.fileInput = I2 : _2.filePath = I2);
        var E2 = this.getStorageScene(u2.sceneName);
        if (_2.nosScenes = E2.sceneName, _2.nosSurvivalTime = E2.expireTime, _2.type = 1 === M2 ? "image" : 2 === M2 ? "audio" : 3 === M2 ? "video" : "file", _2.file && this.core.pluginMap["browser-md5-file"]) {
          var S2 = yield this.getFileMd5(this.core.pluginMap["browser-md5-file"], h2, _2.file);
          _2.md5 = S2;
        }
        _2.onUploadProgress = (t3) => {
          "function" == typeof o2 && o2(Math.round(100 * t3.percentage));
        }, _2.onUploadStart = (t3) => {
          var o3;
          if (null === (o3 = this.uploadingMessageInfo[h2]) || void 0 === o3 ? void 0 : o3.abort)
            return t3.abort(), void delete this.uploadingMessageInfo[h2];
          this.uploadingMessageInfo[h2] = { abort: false, task: t3 };
        }, this.uploadingMessageInfo[h2] = { abort: false };
        var T2 = yield this.core.cloudStorage.uploadFile(_2);
        if (null === (m2 = this.uploadingMessageInfo[h2]) || void 0 === m2 ? void 0 : m2.abort)
          throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_CANCELLED, detail: { reason: "upload file aborted" } });
        return delete this.uploadingMessageInfo[h2], [T2.url, T2];
      } catch (t3) {
        throw delete this.uploadingMessageInfo[h2], this.core.logger.error("sendFile:: upload File error or abort.", t3), t3;
      }
    });
  }
  cancelUploadFile(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), yield this._cancelUploadFile(t2.taskId);
    });
  }
  _cancelUploadFile(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2();
      var o2 = this.uploadingMessageInfo[t2];
      if (null == o2 ? void 0 : o2.task)
        try {
          this.logger.log("V2NIMStorageService.cancelUploadFile: uploadInfo task exist"), yield o2.task.abort(), delete this.uploadingMessageInfo[t2];
        } catch (o3) {
          delete this.uploadingMessageInfo[t2], this.core.logger.error("cancelMessageAttachmentUpload::abort error.", o3);
        }
      else {
        if (!o2)
          throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST, detail: { reason: "V2NIMStorageService.cancelUploadFile: uploadInfo not exist" } });
        this.logger.log("V2NIMStorageService.cancelUploadFile: uploadInfo task not exist"), o2.abort = true;
      }
    });
  }
  getFileMd5(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((m2, u2) => {
        var h2, g2 = new t2();
        (null === (h2 = this.uploadingMessageInfo[o2]) || void 0 === h2 ? void 0 : h2.abort) ? u2(new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_CANCELLED, detail: { reason: "upload file aborted" } })) : this.uploadingMessageInfo[o2] = { abort: false, task: g2 };
        try {
          g2.md5(a2, (t3, o3) => {
            "aborted" === t3 ? u2(new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_CANCELLED, detail: { reason: t3 } })) : t3 ? u2(new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INTERNAL, detail: { reason: "md5 calculate error in callback", rawError: t3 } })) : m2(o3);
          });
        } catch (t3) {
          u2(new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INTERNAL, detail: { reason: "md5 calculate error", rawError: t3 } }));
        }
      });
    });
  }
  shortUrlToLong(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this.core.cloudStorage.getOriginUrl(t2);
    });
  }
  getImageThumbUrl(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.core.V2NIMStorageUtil.getImageThumbUrl(t2, o2);
    });
  }
  getVideoCoverUrl(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.core.V2NIMStorageUtil.getVideoCoverUrl(t2, o2);
    });
  }
};
var V2NIMMessageCreatorImpl = class extends V2Service {
  constructor(t2) {
    super("V2NIMMessageCreator", t2), this.name = "V2NIMMessageCreator", this.defaultNosSceneName = "nim_default_im", this.core = t2;
  }
  createMessage(t2, o2) {
    return Object.assign(Object.assign(Object.assign({ messageClientId: Ve(), messageType: t2, createTime: this.core.timeOrigin.getNTPTime(), sendingState: 0, messageStatus: { errorCode: 200 }, messageSource: 0, isSelf: true }, o2), o2.attachment ? { attachment: Object.assign(Object.assign({}, o2.attachment), { raw: attachmentToRaw(t2, o2.attachment) }) } : {}), { senderId: "", receiverId: "", conversationType: 0, conversationId: "", messageServerId: "", messageConfig: Object.assign({ unreadEnabled: true, roamingEnabled: true, readReceiptEnabled: false, lastMessageUpdateEnabled: true, historyEnabled: true, onlineSyncEnabled: true, offlineEnabled: true }, o2.messageConfig), pushConfig: Object.assign({ pushEnabled: true, pushNickEnabled: true, forcePush: false }, o2.pushConfig), routeConfig: Object.assign({ routeEnabled: true }, o2.routeConfig), antispamConfig: Object.assign({ antispamEnabled: true }, o2.antispamConfig) });
  }
  createTextMessage(t2) {
    return this.checkV2(), validate({ text: { type: "string", allowEmpty: false } }, { text: t2 }, "", true), this.createMessage(0, { text: t2 });
  }
  createImageMessage(t2, o2, a2, m2, u2) {
    this.checkV2(), validate(gr, { name: o2, sceneName: a2, width: m2, height: u2 }, "", true);
    var h2 = this.createGenericFileMessageAttachment(t2, o2, a2, void 0, m2, u2, "jpeg");
    return this.createMessage(1, { attachment: h2, attachmentUploadState: 0 });
  }
  createAudioMessage(t2, o2, a2, m2) {
    this.checkV2(), validate(ur, { name: o2, sceneName: a2, duration: m2 }, "", true);
    var u2 = this.createGenericFileMessageAttachment(t2, o2, a2, m2, void 0, void 0, "aac");
    return this.createMessage(2, { attachment: u2, attachmentUploadState: 0 });
  }
  createVideoMessage(t2, o2, a2, m2, u2, h2) {
    this.checkV2(), validate(hr, { name: o2, sceneName: a2, duration: m2, width: u2, height: h2 }, "", true);
    var g2 = this.createGenericFileMessageAttachment(t2, o2, a2, m2, u2, h2, "mp4");
    return this.createMessage(3, { attachment: g2, attachmentUploadState: 0 });
  }
  createFileMessage(t2, o2, a2) {
    this.checkV2(), validate(mr, { name: o2, sceneName: a2 }, "", true);
    var m2 = this.createGenericFileMessageAttachment(t2, o2, a2, void 0, void 0, void 0, "txt");
    return this.createMessage(6, { attachment: m2, attachmentUploadState: 0 });
  }
  createGenericFileMessageAttachment(t2, o2, a2, m2, u2, h2, g2) {
    if (a2 = a2 || this.defaultNosSceneName, !this.core.V2NIMStorageService.hasStorageScene)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "V2NIMStorageService not exist" } });
    if (!this.core.V2NIMStorageService.hasStorageScene(a2))
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "sceneName: " + a2 + " has not been added" } });
    var { file: I2, path: M2 } = getFileOrPath(t2), _2 = Object.assign(Object.assign(Object.assign({ name: o2, uploadState: 0, sceneName: a2 || this.defaultNosSceneName }, m2 ? { duration: m2 } : {}), u2 ? { width: u2 } : {}), h2 ? { height: h2 } : {});
    if (I2) {
      var E2 = I2.name.lastIndexOf("."), S2 = -1 === E2 ? I2.name : I2.name.substring(0, E2);
      _2.name = _2.name || S2, _2.size = I2.size, _2.ext = `.${getFileExtension(I2.name) || getFileExtension(o2 || "") || g2}`;
    } else if (M2) {
      var T2 = M2.lastIndexOf("/"), C2 = M2.lastIndexOf("."), N2 = -1 === C2 ? M2.substring(T2 + 1) : M2.substring(T2 + 1, C2);
      _2.name = _2.name || N2, _2.ext = `.${getFileExtension(M2) || getFileExtension(o2 || "") || g2}`;
    }
    return _2 = JSON.parse(JSON.stringify(_2)), M2 ? _2.path = M2 : I2 && (_2.file = I2), _2;
  }
  createLocationMessage(t2, o2, a2) {
    return this.checkV2(), validate({ latitude: { type: "number", allowEmpty: false }, longitude: { type: "number", allowEmpty: false }, address: { type: "string", allowEmpty: false } }, { latitude: t2, longitude: o2, address: a2 }, "", true), this.createMessage(4, { attachment: { latitude: t2, longitude: o2, address: a2 } });
  }
  createCustomMessage(t2, o2) {
    return this.checkV2(), validate({ text: { type: "string" } }, { text: t2 }, "", true), validate({ rawAttachment: { type: "string" } }, { rawAttachment: o2 }, "", true), this.createMessage(100, { text: t2, attachment: { raw: o2 } });
  }
  createCustomMessageWithAttachment(t2, o2) {
    return this.checkV2(), validate({ raw: { type: "string" } }, t2, "attachment", true), validate({ subType: { type: "number", min: 0, required: false } }, { subType: o2 }, "", true), this.createMessage(100, o2 ? { attachment: t2, subType: o2 } : { attachment: t2 });
  }
  createCallMessage(t2, o2, a2, m2, u2) {
    return this.checkV2(), validate({ type: { type: "number", allowEmpty: false } }, { type: t2 }, "", true), validate({ channelId: { type: "string", allowEmpty: false } }, { channelId: o2 }, "", true), validate({ status: { type: "number", allowEmpty: false } }, { status: a2 }, "", true), validate({ durations: { type: "array", allowEmpty: false } }, { durations: m2 }, "", true), this.createMessage(12, { text: u2 || "", attachment: { type: t2, channelId: o2, durations: m2, status: a2 } });
  }
  createForwardMessage(t2) {
    this.checkV2();
    if (!t2 || [11, 5, 7, 10].includes(t2.messageType))
      return null;
    var o2 = { messageClientId: Ve(), messageType: t2.messageType };
    return t2.text && (o2.text = t2.text), t2.attachment && (o2.attachment = t2.attachment), t2.attachment && "uploadState" in t2.attachment && (o2.attachmentUploadState = t2.attachment.uploadState), this.createMessage(t2.messageType, o2);
  }
  createTipsMessage(t2) {
    return this.checkV2(), validate({ text: { type: "string", allowEmpty: false } }, { text: t2 }, "", true), this.createMessage(10, { text: t2 });
  }
};
var V2NIMMessageAttachmentCreatorImpl = class {
  constructor() {
    this.name = "V2NIMMessageAttachmentCreator";
  }
  createLocationMessageAttachment(t2, o2, a2) {
    return { latitude: "number" == typeof t2 ? t2 : 0, longitude: "number" == typeof o2 ? o2 : 0, address: "string" == typeof a2 ? a2 : "" };
  }
  createCustomMessageAttachment(t2) {
    return { raw: "string" == typeof t2 ? t2 : "" };
  }
};
var V2NIMClientAntispamUtilImpl = class {
  constructor(t2) {
    this.config = { enable: false }, this.name = "V2NIMClientAntispamUtil", this.core = t2;
  }
  setOptions(t2) {
    this.config = Object.assign(this.config, t2);
  }
  reset(t2) {
    "destroy" === t2 && (this.vocabInfo = void 0);
  }
  downloadLocalAntiSpamVocabs() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.config.enable && !this.vocabInfo)
        try {
          var t2 = yield this.core.sendCmd("v2DownloadLocalAntiSpamVocabs", { tag: { version: 0, md5: "" } });
          this.vocabInfo = Object.assign(Object.assign({}, t2.content.data), { thesaurus: JSON.parse(t2.content.data.thesaurus).thesaurus });
        } catch (t3) {
          this.core.logger.warn("V2NIMLocalAntispamUtil::downloadLocalAntiSpamVocabs error", t3);
        }
    });
  }
  checkTextAntispam(t2, o2 = "**") {
    if (!this.config.enable)
      return { operateType: 0, replacedText: t2 };
    if (validate({ text: { type: "string", required: true, allowEmpty: false }, replace: { type: "string" } }, { text: t2, replace: o2 }, "", true), !this.vocabInfo)
      return { operateType: 0, replacedText: t2 };
    for (var a2 = t2, m2 = 0; m2 < this.vocabInfo.thesaurus.length; m2++) {
      var u2 = this.filterContent(a2, this.vocabInfo.thesaurus[m2], o2);
      if (a2 = u2.replacedText, 2 === u2.operateType || 3 === u2.operateType)
        return u2;
    }
    return { operateType: a2 === t2 ? 0 : 1, replacedText: a2 };
  }
  filterContent(t2, o2, a2) {
    for (var m2 = 0; m2 < o2.keys.length; m2++) {
      var u2 = o2.keys[m2], h2 = u2.match || o2.match, g2 = u2.operate || o2.operate, I2 = void 0;
      try {
        I2 = this.matchContent(t2, u2.key, h2, g2, a2);
      } catch (t3) {
      }
      if (I2 && (t2 = I2.replacedText, 2 === I2.operateType || 3 === I2.operateType))
        return I2;
    }
    return { operateType: 1, replacedText: t2 };
  }
  matchContent(t2, o2, a2, m2, u2) {
    var h2 = false, g2 = null;
    if (1 === a2) {
      if (t2.indexOf(o2) >= 0) {
        h2 = true;
        var I2 = o2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        g2 = new RegExp(I2, "g");
      }
    } else
      2 === a2 && (g2 = new RegExp(o2, "g")).test(t2) && (h2 = true);
    if (h2 && g2)
      switch (m2) {
        case 1:
          return { operateType: 1, replacedText: t2.replace(g2, u2) };
        case 2:
          return { operateType: 2, replacedText: t2 };
        case 3:
          return { operateType: 3, replacedText: t2 };
      }
    return { operateType: 0, replacedText: t2 };
  }
};
var YSFServiceImpl = class extends V2Service {
  constructor(t2) {
    super("YSFService", t2), this.core._registerDep(V2NIMConversationIdUtilImpl, "V2NIMConversationIdUtil"), this.core._registerDep(V2NIMMessageCreatorImpl, "V2NIMMessageCreator"), this.core._registerDep(V2NIMMessageAttachmentCreatorImpl, "V2NIMMessageAttachmentCreator"), this.core._registerDep(V2NIMClientAntispamUtilImpl, "V2NIMClientAntispamUtil"), this.core._registerDep(V2NIMStorageServiceImpl, "V2NIMStorageService"), this.sendUtil = new SendUtil(this.core, this), this.fileUtil = new FileUtil(this.core), this.model = new V2NIMMessageModelImpl(), this.notificationUtil = new NotificationUtil(this.core), registerParser({ cmdMap: Hr, cmdConfig: zr });
  }
  emit(t2, ...o2) {
    var a2, m2 = `${this.name}::emit ${t2.toString()}`;
    if ("onSendMessage" === t2) {
      var u2 = o2[0];
      this.logger.log(`${m2}`, `${u2.messageClientId}/${u2.messageServerId};createTime:${u2.createTime};`, `sendingState:${u2.sendingState};attachmentUploadState:${u2.attachmentUploadState || 0};messageStatus:${null === (a2 = u2.messageStatus) || void 0 === a2 ? void 0 : a2.errorCode}`);
    } else if ("onReceiveMessages" === t2) {
      var h2 = o2[0];
      this.logger.log(`${m2}`, h2.map((t3) => `${t3.messageClientId}/${t3.messageServerId};createTime:${t3.createTime}`));
    } else if ("onReceiveCustomNotifications" === t2) {
      var g2 = o2[0];
      this.logger.log(`${m2}`, g2.map((t3) => `sender:${t3.senderId};receiver:${t3.receiverId};ctype:${t3.conversationType};time:${t3.timestamp}`));
    } else
      this.logger.log(`${m2}`, ...o2);
    return super.emit(t2, ...o2);
  }
  sendMessage(t2, o2, a2 = {}, m2) {
    return __awaiter(this, void 0, void 0, function* () {
      validate({ message: { type: "object" } }, { message: t2 }, "", true), t2.messageClientId = t2.messageClientId || Ve(), validate(qt, { conversationId: o2, message: t2, params: a2 }, "", true), validateConversationId(this.core.account, o2);
      var u2 = this.core.timeOrigin.getTimeNode(), { messageBeforeSend: h2, clientAntispamResult: g2, hiddenParams: I2 } = this.sendUtil.prepareMessage(t2, o2, a2), M2 = yield this.sendUtil.doSendMessage({ apiCallingTimeNode: u2, messageBeforeSend: h2, clientAntispamResult: g2, hiddenParams: I2, progress: m2 });
      return M2.message.senderId === M2.message.receiverId && this.markMsgsAck([M2.message]), M2;
    });
  }
  sendCustomNotification(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validateConversationId(this.core.account, t2), validate(Yr, { content: o2, params: a2 }, "", true);
      var m2 = this.notificationUtil.generateNotificationTag(t2, o2, a2);
      m2.type = 100, yield this.core.sendCmd("ysfSendCustomNotification", { tag: m2 });
    });
  }
  sendMessageFn(t2) {
  }
  cancelMessageAttachmentUpload(t2) {
    return this.fileUtil.cancelMessageAttachmentUpload(t2);
  }
  markMsgsAck(t2) {
    if (t2 && t2.length > 0) {
      var o2 = t2.map((t3) => t3.messageServerId).filter((t3) => t3 && "0" !== t3);
      0 !== o2.length && this.core.sendCmd("ysfBatchMarkRead", { sid: 101, cid: 2, ids: o2 });
    }
  }
  markNotificationAck(t2) {
    if (t2 && t2.length > 0) {
      var o2 = t2.map((t3) => t3.idServer).filter((t3) => t3 && "0" !== t3);
      0 !== o2.length && this.core.sendCmd("ysfBatchMarkRead", { sid: 101, cid: 3, ids: o2 });
    }
  }
  ysfOnMsgHandler(t2) {
    var o2 = fillIdServer(t2, t2.content.data, "messageServerId"), a2 = completeMessage(this.core, o2);
    delete a2.__clientExt, this.emit("onReceiveMessages", [a2]), this.model.upsertMessages([a2]), this.markMsgsAck([a2]);
  }
  ysfSyncOfflineMsgsHandler(t2) {
    var o2 = t2.content.datas;
    o2 = o2.map((t3) => completeMessage(this.core, t3)), this.markMsgsAck(o2), this.emit("onReceiveMessages", o2), this.model.upsertMessages(o2);
  }
  ysfOnSysNotificationHandler(t2) {
    var o2 = fillIdServer(t2, t2.content.data, "idServer");
    this.markNotificationAck([o2]);
    var a2 = this.processSystemNotification(o2);
    a2 && this.emit("onReceiveCustomNotifications", [a2]);
  }
  processSystemNotification(t2) {
    var o2 = Object.assign(Object.assign({}, t2), { conversationType: 1 });
    return delete o2.type, o2;
  }
  ysfSyncSysNotificationHandler(t2) {
    this.markNotificationAck(t2.content.datas);
    var o2 = t2.content.datas.sort((t3, o3) => t3.timestamp - o3.timestamp).map((t3) => this.processSystemNotification(t3)).filter((t3) => t3);
    o2 && this.emit("onReceiveCustomNotifications", o2);
  }
};
var SendUtil = class {
  constructor(t2, o2) {
    this.uploadingMessageInfo = {}, this.core = t2, this.service = o2;
  }
  prepareMessage(t2, o2, a2, m2) {
    var u2 = this.checkIfResend(t2), h2 = this.generateSendMessage({ message: t2, params: a2, resend: u2, conversationId: o2, replyMessage: m2 }), g2 = Object.assign({}, a2.targetConfig ? { targetConfig: a2.targetConfig } : {}), { clientAntispamResult: I2, text: M2 } = this.checkIfAntispam(a2, h2);
    return h2.text = M2, h2.clientAntispamHit = !!I2 && 3 === I2.operateType, { messageBeforeSend: h2, clientAntispamResult: I2, hiddenParams: g2 };
  }
  checkIfAntispam(t2, o2) {
    var a2, m2 = o2.text;
    if (t2.clientAntispamEnabled && (0 === o2.messageType || 10 === o2.messageType)) {
      if (1 === (a2 = this.core.V2NIMClientAntispamUtil.checkTextAntispam ? this.core.V2NIMClientAntispamUtil.checkTextAntispam(o2.text || "", t2.clientAntispamReplace) : { operateType: 0, replacedText: "" }).operateType)
        m2 = a2.replacedText;
      else if (2 === a2.operateType)
        throw this.service.emit("onSendMessage", Object.assign(Object.assign({}, o2), { sendingState: 2, messageStatus: { errorCode: Me.V2NIM_ERROR_CODE_CLIENT_ANTISPAM } })), new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_CLIENT_ANTISPAM, detail: { reason: "sendMessage: text intercepted by client antispam" } });
    }
    return { clientAntispamResult: a2, text: m2 };
  }
  doMsgReceiveReport(t2, o2) {
    if (t2.senderId !== this.core.account) {
      var a2 = get(t2, "__clientExt.statistics.apiCallingTime") || 0, m2 = get(t2, "__clientExt.statistics.sendTime") || 0, u2 = get(t2, "__clientExt.statistics.attachUploadDuration") || 0, h2 = this.core.timeOrigin.getNTPTime(), g2 = t2.createTime, I2 = this.core.timeOrigin.checkNodeReliable(o2.__receiveTimeNode) ? this.core.timeOrigin.getNTPTime(o2.__receiveTimeNode) : h2;
      this.core.reporter.report("msgReceive", { msgId: t2.messageServerId, clientId: t2.messageClientId, serverTime: t2.createTime, receiveTime: I2, fromAccid: 1 === t2.conversationType ? t2.senderId : "", toAccid: t2.receiverId, type: conversationTypeV2ToV1(t2.conversationType), tid: 1 === t2.conversationType ? "" : t2.receiverId, apiCallingTime: a2, sendTime: m2, attachUploadDuration: u2, callbackTime: h2, preHandleTime: h2, result: 200, failReason: "", rt: h2 - g2 });
    }
  }
  checkIfResend(t2) {
    var o2 = this.service.model.getMessageById(t2.messageClientId), a2 = false;
    if ("messageServerId" in t2 && "0" !== t2.messageServerId && "" !== t2.messageServerId)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "sendMessage: message has already been sent" } });
    if (o2 && "messageServerId" in o2 && "0" !== o2.messageServerId && "" !== o2.messageServerId)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "sendMessage: message has already been sent" } });
    return o2 && (a2 = true), a2;
  }
  doSendMessage(t2) {
    var o2;
    return __awaiter(this, void 0, void 0, function* () {
      var a2, m2, { apiCallingTimeNode: u2, messageBeforeSend: h2, clientAntispamResult: g2, hiddenParams: I2, progress: M2 } = t2, _2 = {}, E2 = this.service instanceof YSFServiceImpl;
      if (E2)
        a2 = "ysfSendMessage";
      else if (1 === h2.conversationType)
        a2 = "v2SendP2pMessage";
      else if (2 === h2.conversationType)
        a2 = "v2SendTeamMessage";
      else {
        if (3 !== h2.conversationType)
          throw new ValidateErrorV2({ detail: { reason: `conversationType: ${h2.conversationType} is not supported` } });
        a2 = "v2SendSuperTeamMessage";
      }
      if (this.service.sendMessageFn(h2), !E2 && this.core.eventBus.emit("forwardSend/V2NIMMessageService/sendMsg", h2), !h2.attachment || !("uploadState" in h2.attachment) || h2.attachment.url || 0 !== h2.attachment.uploadState && 2 !== h2.attachment.uploadState)
        this.service.emit("onSendMessage", h2);
      else {
        var S2 = Date.now();
        try {
          h2.attachmentUploadState = 3, h2.attachment.uploadState = 3, this.service.emit("onSendMessage", h2), yield this.service.fileUtil.doSendFile(h2, M2), h2.attachmentUploadState = 1, h2.attachment.uploadState = 1, this.service.emit("onSendMessage", h2);
        } catch (t3) {
          throw h2.attachmentUploadState = 2, h2.attachment.uploadState = 2, h2.sendingState = 2, h2.messageStatus = { errorCode: t3.code || Me.V2NIM_ERROR_CODE_UNKNOWN }, this.service.emit("onSendMessage", h2), _2.attachUploadDuration = Date.now() - S2, this.doSendMessageFailed(u2, _2, h2, t3), t3;
        }
        _2.attachUploadDuration = Date.now() - S2;
      }
      this.core.timeOrigin.checkNodeReliable(u2) && (_2.apiCallingTime = this.core.timeOrigin.getNTPTime(u2), _2.sendTime = this.core.timeOrigin.getNTPTime(), h2.__clientExt = { statistics: _2 });
      try {
        m2 = yield this.core.sendCmd(a2, { tag: Object.assign({}, h2, I2) });
      } catch (t3) {
        throw this.doSendMessageFailed(u2, _2, h2, t3), h2.sendingState = 2, h2.messageStatus = { errorCode: t3.code || Me.V2NIM_ERROR_CODE_UNKNOWN }, this.service.emit("onSendMessage", h2), t3;
      }
      var T2 = get(m2, "content.data.errorCode"), C2 = Object.assign(Object.assign(Object.assign(Object.assign({}, h2), m2.content.data), h2.aiConfig ? { aiConfig: Object.assign(Object.assign({}, h2.aiConfig), (null === (o2 = m2.content.data) || void 0 === o2 ? void 0 : o2.aiConfig) || {}) } : {}), { sendingState: 1, messageStatus: { errorCode: T2 && 200 !== T2 ? T2 : 200 } });
      this.service.sendMessageFn(C2), !E2 && this.core.eventBus.emit("forwardSend/V2NIMMessageService/sendMsg", C2), this.doMsgSendReport(u2, _2, h2);
      var N2 = C2.antispamResult;
      return N2 && (C2.messageStatus.errorCode = Me.V2NIM_ERROR_CODE_SERVER_ANTISPAM), delete C2.antispamResult, this.service.emit("onSendMessage", C2), Object.assign(Object.assign({ message: C2 }, N2 ? { antispamResult: N2 } : {}), g2 ? { clientAntispamResult: g2 } : {});
    });
  }
  doSendMessageFailed(t2, o2, a2, m2) {
    var u2 = Object.assign(Object.assign({}, a2), { sendingState: 2 });
    this.core.eventBus.emit("forwardSend/V2NIMMessageService/sendMsg", u2), this.service.sendMessageFn(u2), this.doMsgSendReport(t2, o2, a2, m2);
  }
  doMsgSendReport(t2, o2, a2, m2) {
    o2.apiCallingTime = this.core.timeOrigin.getNTPTime(t2), o2.sendTime = this.core.timeOrigin.getNTPTime();
    var u2 = this.core.timeOrigin.getNTPTime(), h2 = get(m2, "detail.reason");
    this.core.reporter.report("msgSend", { msgId: a2.messageServerId, clientId: a2.messageClientId, msgTime: a2.createTime, fromAccid: 1 === a2.conversationType ? a2.senderId : "", toAccid: a2.receiverId, type: conversationTypeV2ToV1(a2.conversationType), tid: 1 === a2.conversationType ? "" : a2.receiverId, result: m2 ? m2.code : 200, failReason: h2 || (null == m2 ? void 0 : m2.message) || "", rt: u2 - o2.apiCallingTime, apiCallingTime: o2.apiCallingTime, sendTime: o2.sendTime, attachUploadDuration: o2.attachUploadDuration, apiCallbackTime: u2 });
  }
  generateSendMessage(t2) {
    var o2, a2, { conversationId: m2, replyMessage: u2, resend: h2, message: g2, params: I2 } = t2, M2 = {};
    if (u2) {
      var _2 = u2.threadRoot;
      M2 = { threadReply: { senderId: u2.senderId, receiverId: u2.receiverId, messageServerId: u2.messageServerId, createTime: u2.createTime, messageClientId: u2.messageClientId, conversationType: u2.conversationType, conversationId: u2.conversationId }, threadRoot: { senderId: _2 ? _2.senderId : u2.senderId, receiverId: _2 ? _2.receiverId : u2.receiverId, messageServerId: _2 ? _2.messageServerId : u2.messageServerId, createTime: _2 ? _2.createTime : u2.createTime, messageClientId: _2 ? _2.messageClientId : u2.messageClientId, conversationType: _2 ? _2.conversationType : u2.conversationType, conversationId: _2 ? _2.conversationId : u2.conversationId } };
    }
    var E2 = this.core.V2NIMConversationIdUtil.parseConversationType(m2), S2 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(m2);
    I2.pushConfig && true !== I2.pushConfig.forcePush && (delete I2.pushConfig.forcePushContent, delete I2.pushConfig.forcePushAccountIds);
    var T2 = {}, C2 = {};
    if (I2.aiConfig) {
      var N2 = get(I2, "aiConfig.content.msg"), A2 = get(I2, "aiConfig.content.type") || 0;
      N2 ? C2 = { msg: N2, type: A2 } : void 0 === N2 && 0 === g2.messageType && (C2 = { msg: g2.text || "", type: A2 }), (T2 = Object.assign({ aiStreamStatus: 0, aiStream: false }, I2.aiConfig)).aiStatus = 1, void 0 !== C2.msg && (T2.content = C2);
    }
    var O2 = null === (a2 = null === (o2 = this.core.V2NIMUserService) || void 0 === o2 ? void 0 : o2.model) || void 0 === a2 ? void 0 : a2.getUser(this.core.account), R2 = (null == O2 ? void 0 : O2.updateTime) || 0;
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, g2), M2), { messageConfig: Object.assign(Object.assign({}, g2.messageConfig), I2.messageConfig), routeConfig: Object.assign(Object.assign({}, g2.routeConfig), I2.routeConfig), pushConfig: Object.assign(Object.assign({}, g2.pushConfig), I2.pushConfig), antispamConfig: Object.assign(Object.assign({}, g2.antispamConfig), I2.antispamConfig), robotConfig: Object.assign(Object.assign({}, g2.robotConfig), I2.robotConfig) }), T2 && T2.accountId ? { aiConfig: T2 } : {}), g2.attachment ? { attachment: Object.assign({}, g2.attachment) } : {}), { resend: h2, senderId: this.core.account, conversationType: E2, receiverId: S2, conversationId: this.core.V2NIMConversationIdUtil.messageConversationId({ conversationType: E2, senderId: this.core.account, receiverId: S2 }) }), R2 ? { userUpdateTime: R2 } : {}), { sendingState: 3 });
  }
};
var ModifyUtil = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2;
  }
  checkIfModify(t2, o2) {
    if ("0" === t2.messageServerId)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "modifyMessage: messageServerId cannot be empty" } });
    if (![0, 1, 2, 3, 4, 6, 10, 12, 100].includes(t2.messageType))
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: `modifyMessage: messageType ${t2.messageType} not correct` } });
    if ([0, 1, 2, 3, 6, 10, 12].includes(t2.messageType) && o2.attachment)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: `modifyMessage: messageType ${t2.messageType} can not modify attachment` } });
    var a2 = ["subType", "text", "serverExtension", "attachment"];
    if (!a2.some((t3) => void 0 !== get(o2, t3)))
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "modifyMessage: missing modified params" } });
    if (a2.every((a3) => "attachment" === a3 ? t2.attachment && o2.attachment ? attachmentToRaw(t2.messageType, t2.attachment) === attachmentToRaw(t2.messageType, o2.attachment) : !o2.attachment : get(t2, a3) === get(o2, a3)))
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "modifyMessage: no change" } });
  }
  prepareMessage(t2, o2) {
    var a2 = this.generateSendMessage(t2, o2), { clientAntispamResult: m2, text: u2 } = this.checkIfAntispam(o2, a2);
    return a2.text = u2, a2.clientAntispamHit = !!m2 && 3 === m2.operateType, { messageBeforeSend: a2, clientAntispamResult: m2 };
  }
  modifyMessage(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      var a2;
      if (1 === t2.conversationType)
        a2 = "v2MessageP2pModify";
      else if (2 === t2.conversationType)
        a2 = "v2MessageTeamModify";
      else {
        if (3 !== t2.conversationType)
          throw new ValidateErrorV2({ detail: { reason: `conversationType: ${t2.conversationType} is not supported` } });
        a2 = "v2MessageSuperTeamModify";
      }
      var m2 = yield this.core.sendCmd(a2, { tag: t2 });
      if (o2 && 3 === o2.operateType)
        return { errorCode: Me.V2NIM_ERROR_CODE_CLIENT_ANTISPAM, clientAntispamResult: o2 };
      var u2 = Object.assign(Object.assign({}, t2), m2.content.data), h2 = u2.antispamResult;
      if (h2)
        return Object.assign({ errorCode: Me.V2NIM_ERROR_CODE_SERVER_ANTISPAM, antispamResult: h2 }, o2 ? { clientAntispamResult: o2 } : {});
      delete u2.antispamResult;
      var g2 = completeMessage(this.core, u2);
      return this.service.model.upsertMessages([g2]), this.core.eventBus.emit("V2NIMMessageService/modifyMsg", g2), this.core.eventBus.emit("forwardSend/V2NIMMessageService/modifyMsg", g2), Object.assign(Object.assign({ errorCode: 200, message: g2 }, h2 ? { antispamResult: h2 } : {}), o2 ? { clientAntispamResult: o2 } : {});
    });
  }
  checkIfAntispam(t2, o2) {
    var a2, m2 = o2.text;
    if (t2.clientAntispamEnabled && (0 === o2.messageType || 10 === o2.messageType)) {
      if (1 === (a2 = this.core.V2NIMClientAntispamUtil.checkTextAntispam ? this.core.V2NIMClientAntispamUtil.checkTextAntispam(o2.text || "", t2.clientAntispamReplace) : { operateType: 0, replacedText: "" }).operateType)
        m2 = a2.replacedText;
      else if (2 === a2.operateType)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_CLIENT_ANTISPAM, detail: { reason: "sendMessage: text intercepted by client antispam" } });
    }
    return { clientAntispamResult: a2, text: m2 };
  }
  generateSendMessage(t2, o2) {
    var a2;
    return Object.assign(Object.assign({ messageConfig: { lastMessageUpdateEnabled: null === (a2 = t2.messageConfig) || void 0 === a2 ? void 0 : a2.lastMessageUpdateEnabled }, routeConfig: Object.assign({ routeEnabled: true }, o2.routeConfig), pushConfig: Object.assign({ pushEnabled: true, pushNickEnabled: true, forcePush: false }, o2.pushConfig), antispamConfig: Object.assign({ antispamEnabled: true }, o2.antispamConfig) }, o2.attachment ? { attachment: o2.attachment } : {}), { conversationType: t2.conversationType, senderId: t2.senderId, receiverId: t2.receiverId, createTime: t2.createTime, messageClientId: t2.messageClientId, messageServerId: t2.messageServerId, messageType: t2.messageType, subType: o2.subType, text: o2.text, serverExtension: o2.serverExtension });
  }
};
var DeleteUtil = class {
  constructor(t2, o2) {
    this.emitRevokeMessage = (t3) => {
      var o3 = t3.map((t4) => {
        var o4 = formatRevokeMessage(this.core, t4);
        return 3 === o4.messageRefer.conversationType ? this.core.eventBus.emit("V2NIMSync/updateTimetag", { deleteSuperTeamMsg: t4.createTime }) : this.core.eventBus.emit("V2NIMSync/updateTimetag", { recallMsg: t4.createTime }), o4;
      });
      o3.forEach((t4) => {
        this.service.model.deleteMessage(t4.messageRefer.messageClientId);
      }), this.service.emit("onMessageRevokeNotifications", o3), this.core.eventBus.emit("V2NIMMessageService/revokeMessages", o3);
    }, this.core = t2, this.service = o2, this.logger = t2.logger;
  }
  revokeMessage(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate(Ht, { message: t2, params: o2 }, "", true), validateConversationId(this.core.account, t2.conversationId), 1 === t2.conversationType && t2.senderId !== this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "revokeMessage: p2p message senderId is not current user" } });
      if (!t2.messageServerId || "0" === t2.messageServerId)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "revokeMessage: cannot revoke message with invalid messageServerId: " + t2.messageServerId } });
      var a2 = 3 === t2.conversationType ? "v2RevokeSuperTeamMessage" : "v2RevokeMessage", m2 = { 1: 7, 2: 8, 3: 12 }, u2 = Object.assign(Object.assign(Object.assign({}, t2), o2), { attach: o2 && o2.serverExtension, sysMsgType: m2[t2.conversationType], opeAccount: this.core.account });
      yield this.core.sendCmd(a2, { tag: u2 });
      var h2 = { 1: 1, 2: 2, 3: 3 }, g2 = [JSON.parse(JSON.stringify({ postscript: o2 && o2.postscript, revokeType: h2[t2.conversationType], revokeAccountId: this.core.account, serverExtension: o2 && o2.serverExtension, messageRefer: formatMessageRefer(this.core, t2) }))];
      this.revokeMessagesFn(g2), this.core.eventBus.emit("forwardSend/V2NIMMessageService/revokeMessage", u2);
    });
  }
  deleteMessage(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate(Wt, t2, "", true), 3 === t2.sendingState)
        this.service.fileUtil.cancelMessageAttachmentUpload(t2);
      else if (t2.sendingState && 1 !== t2.sendingState)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "deleteMessage: cannot delete unsent message" } });
      var a2 = { messageRefer: formatMessageRefer(this.core, t2), serverExtension: o2 }, m2 = Date.now();
      t2.messageServerId && "0" !== t2.messageServerId && (m2 = (yield this.core.sendCmd("v2DeleteMessage", { tag: a2 })).content.timetag);
      var u2 = [{ serverExtension: o2, messageRefer: formatMessageRefer(this.core, t2), deleteTime: m2 }];
      this.core.eventBus.emit("forwardSend/V2NIMMessageService/deleteSelfMsgs", [Object.assign(Object.assign({}, a2), { deleteTime: m2 })]), this.deleteMessagesFn(u2);
    });
  }
  deleteMessages(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      validate(Jt, { messages: t2 }, "", true);
      var a2 = [], m2 = [];
      if (0 === t2.length)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "deleteMessages: message array length is 0" } });
      for (var u2 = t2[0].conversationId, h2 = 0; h2 < t2.length; h2++) {
        if (3 === t2[h2].sendingState)
          this.service.fileUtil.cancelMessageAttachmentUpload(t2[h2]);
        else if (t2[h2].sendingState && 1 !== t2[h2].sendingState)
          throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: `deleteMessage: sendingState should be succeeded, please check message at index: ${h2}` } });
        if (h2 >= 1 && t2[h2].conversationId !== u2)
          throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "deleteMessages: only allow to delete messages from same conversation" } });
        t2[h2].messageServerId && "0" !== t2[h2].messageServerId ? a2.push(t2[h2]) : m2.push(t2[h2]);
      }
      var g2 = Date.now(), I2 = [...m2];
      try {
        if (a2.length > 0) {
          var M2 = yield this.core.sendCmd("v2DeleteMessages", { tag: a2.map((t3) => ({ messageRefer: t3, serverExtension: o2 })) });
          g2 = M2.content.timetag, I2 = [...I2, ...a2];
        }
      } catch (t3) {
        if (0 === m2.length)
          throw t3;
        this.logger.warn("V2NIMMessageService:deleteMessages: delete messages with serverId failed");
      }
      var _2 = I2.map((t3) => ({ serverExtension: o2, messageRefer: formatMessageRefer(this.core, t3), deleteTime: g2 }));
      this.core.eventBus.emit("forwardSend/V2NIMMessageService/deleteSelfMsgs", I2.map((t3) => ({ messageRefer: t3, serverExtension: o2, deleteTime: g2 }))), this.deleteMessagesFn(_2);
    });
  }
  revokeMessagesFn(t2) {
    t2.forEach((t3) => {
      this.service.model.deleteMessage(t3.messageRefer.messageClientId);
    }), this.service.emit("onMessageRevokeNotifications", t2), this.core.eventBus.emit("V2NIMMessageService/revokeMessages", t2);
  }
  deleteMessagesFn(t2) {
    t2.forEach((t3) => {
      this.service.model.deleteMessage(t3.messageRefer.messageClientId), this.core.eventBus.emit("V2NIMSync/updateTimetag", { deleteSelfMsgs: t3.deleteTime });
    }), this.service.emit("onMessageDeletedNotifications", t2), this.core.eventBus.emit("V2NIMMessageService/deleteMessages", t2);
  }
};
var AIUtil = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.logger = t2.logger;
  }
  stopAIStreamMessage(t2, o2) {
    var a2;
    return __awaiter(this, void 0, void 0, function* () {
      this.checkAI(), yield this.core.sendCmd("v2AIStopModelStreamCall", { tag: { serverId: t2.messageServerId, clientId: t2.messageClientId, type: t2.conversationType, from: t2.senderId, to: t2.receiverId, aiAccount: null === (a2 = t2.aiConfig) || void 0 === a2 ? void 0 : a2.accountId, opeType: o2.operationType, updateContent: o2.updateContent, messageTime: t2.createTime } }), this.logger.log(`V2AIUtil::streamMessageStop,clientId:${t2.messageClientId}`), this.core.V2NIMAIService.model.completeAiStream(t2.messageClientId);
    });
  }
  regenAIMessage(t2, o2) {
    var a2, m2, u2, h2, g2, I2, M2, _2;
    return __awaiter(this, void 0, void 0, function* () {
      this.checkAI();
      var E2 = this.core.V2NIMAIService.model.getAiStream(t2.messageClientId);
      if (E2) {
        if (!(null == E2 ? void 0 : E2.isComplete))
          throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: `msg::regenAIMessage streamCache is not complete, msgId:${t2.messageClientId}` } });
      } else if (-1 === (null === (a2 = t2.streamConfig) || void 0 === a2 ? void 0 : a2.status) || 1 === (null === (m2 = t2.streamConfig) || void 0 === m2 ? void 0 : m2.status))
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: `msg::regenAIMessage message streamConfig.status forbidden ${t2.streamConfig.status}` } });
      yield this.core.sendCmd("v2AIRegenMessage", { tag: { fromAccount: t2.senderId, to: t2.receiverId, aiAccount: null === (u2 = t2.aiConfig) || void 0 === u2 ? void 0 : u2.accountId, serverId: t2.messageServerId, clientId: t2.messageClientId, time: t2.createTime, type: t2.conversationType, opeType: o2.operationType, replyMsgFromAccount: null === (h2 = t2.threadReply) || void 0 === h2 ? void 0 : h2.senderId, replyMsgToAccount: null === (g2 = t2.threadReply) || void 0 === g2 ? void 0 : g2.receiverId, replyMsgTime: null === (I2 = t2.threadReply) || void 0 === I2 ? void 0 : I2.createTime, replyMsgIdServer: null === (M2 = t2.threadReply) || void 0 === M2 ? void 0 : M2.messageServerId, replyMsgIdClient: null === (_2 = t2.threadReply) || void 0 === _2 ? void 0 : _2.messageClientId } }), 1 === o2.operationType && this.core.V2NIMAIService.model.setAiStream(t2.messageClientId, { isComplete: false, queryStatus: 0, chunks: [] });
    });
  }
  checkAI() {
    if (!this.hasAI())
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "V2NIMAIService is not registered" } });
  }
  hasAI() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMAIService) || void 0 === t2 ? void 0 : t2.name);
  }
};
var V2NIMMMessageHandlerImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.model = o2.model, this.receiptUtil = o2.receiptUtil, this.logger = this.core.logger;
  }
  setAIStreamPlaceholder(t2) {
    this.service.aiUtil.hasAI() && t2.forEach((t3) => {
      var o2;
      1 === (null === (o2 = t3.streamConfig) || void 0 === o2 ? void 0 : o2.status) && this.core.V2NIMAIService.model.setAiStream(t3.messageClientId, { isComplete: false, queryStatus: 0, chunks: [], msg: t3 }, true);
    });
  }
  onMsgHandler(t2) {
    var o2 = fillIdServer(t2, t2.content.msg, "messageServerId"), { _conversationOnlineSyncNotify: a2, _conversationOnlineSyncData: m2 } = o2, u2 = __rest(o2, ["_conversationOnlineSyncNotify", "_conversationOnlineSyncData"]), h2 = completeMessage(this.core, u2, 1), g2 = this.service._filterMessage(h2);
    this.logger.log(`v2OnMsgHandler::recvMsg ${h2.messageClientId}/${h2.messageServerId}/${h2.createTime};isHitFilter:${g2}`), 3 === h2.conversationType ? this.core.eventBus.emit("V2NIMSync/updateTimetag", { superTeamRoamingMsgs: h2.createTime, offlineMsgs: h2.createTime }) : this.core.eventBus.emit("V2NIMSync/updateTimetag", { roamingMsgs: h2.createTime, offlineMsgs: h2.createTime }), this.service.config.compatibleWithV1 || (this.service.markMsgsAck([h2]), this.service.sendUtil.doMsgReceiveReport(h2, t2)), delete h2.__clientExt, this.setAIStreamPlaceholder([h2]), 5 !== h2.messageType && this.core.V2NIMUserService.checkUserUpdate && this.core.V2NIMUserService.checkUserUpdate(h2, h2.userUpdateTime), 5 === h2.messageType && this.core.eventBus.emit("V2NIMTeamService/notification", o2), g2 || (this.service.emit("onReceiveMessages", [h2]), this.model.upsertMessages([h2]), a2 && this.core.eventBus.emit("V2NIMConversationService/conversationOnlineSyncNotify", { content: { info: JSON.parse(a2), data: JSON.parse(m2) } }, h2), this.core.eventBus.emit("V2NIMMessageService/onMsg", h2));
  }
  syncOfflineMsgsHandler(t2) {
    var o2 = t2.content.datas;
    o2 = o2.map((t3) => completeMessage(this.core, t3, 2)), 0 !== (o2 = this.service._filterMessagesByFn(o2)).length && (!this.service.config.compatibleWithV1 && this.service.markMsgsAck(o2), this.service.emit("onReceiveMessages", o2), this.model.upsertMessages(o2), this.core.eventBus.emit("V2NIMMessageService/offlineMsgs", o2));
  }
  syncRoamingMsgsHandler(t2) {
    var o2 = t2.content.datas;
    o2 = o2.map((t3) => completeMessage(this.core, t3, 3)), this.setAIStreamPlaceholder(o2), 0 !== (o2 = this.service._filterMessagesByFn(o2)).length && (this.service.emit("onReceiveMessages", o2), this.model.upsertMessages(o2), this.core.eventBus.emit("V2NIMMessageService/roamingMsgs", o2));
  }
  onP2PMessageReceiptsHandler(t2) {
    this.receiptUtil.onP2PMessageReceiptsHandler(t2);
  }
  onTeamMessageReceiptsHandler(t2) {
    this.receiptUtil.onTeamMessageReceiptsHandler(t2);
  }
  syncP2PMessagReceiptsHandler(t2) {
    this.receiptUtil.syncP2PMessagReceiptsHandler(t2);
  }
  syncRevokeMessageHandler(t2) {
    this.service.deleteUtil.emitRevokeMessage(t2.content.datas);
  }
  onRevokeMessageHandler(t2) {
    var o2 = t2.content.data;
    this.service.deleteUtil.emitRevokeMessage([o2]);
  }
  onDeleteMessageHandler(t2) {
    var o2 = t2.content.data, a2 = { serverExtension: o2.serverExtension, deleteTime: o2.deleteTime, messageRefer: completeMessageRefer(this.core, o2.messageRefer) };
    this.service.deleteUtil.deleteMessagesFn([a2]);
  }
  onDeleteMessagesHandler(t2) {
    var o2 = t2.content.data.map((t3) => ({ serverExtension: t3.serverExtension, deleteTime: t3.deleteTime, messageRefer: completeMessageRefer(this.core, t3.messageRefer) }));
    this.service.deleteUtil.deleteMessagesFn(o2);
  }
  syncOnDeleteMessagesHandler(t2) {
    var o2 = t2.content.datas.map((t3) => ({ serverExtension: t3.serverExtension, deleteTime: t3.deleteTime, messageRefer: completeMessageRefer(this.core, t3.messageRefer) }));
    this.service.emit("onMessageDeletedNotifications", o2);
  }
  v2MessageOnModifiedHandler(t2) {
    var o2 = completeMessage(this.core, t2.content.data);
    this.model.upsertMessages([o2]), this.service.aiUtil.hasAI() && this.core.V2NIMAIService.model.completeAiStream(o2.messageClientId), this.core.eventBus.emit("forwardSend/V2NIMMessageService/modifyMsg", o2), this.core.eventBus.emit("V2NIMMessageService/modifyMsg", o2), this.core.eventBus.emit("V2NIMSync/updateTimetag", 3 === o2.conversationType ? { superTeamModifyMessage: o2.modifyTime } : { p2pTeamModifyMessage: o2.modifyTime }), this.service.emit("onReceiveMessagesModified", [o2]);
  }
  v2MessageSyncModifiedHandler(t2) {
    var o2 = t2.content.datas.map((t3) => completeMessage(this.core, t3)).filter((t3) => {
      var o3, a2 = (null === (o3 = this.model.getMessageById(t3.messageClientId)) || void 0 === o3 ? void 0 : o3.modifyTime) || 0;
      return (t3.modifyTime || 0) > a2;
    });
    o2.length > 0 && (this.model.upsertMessages(o2), o2.forEach((t3) => {
      this.service.aiUtil.hasAI() && this.core.V2NIMAIService.model.completeAiStream(t3.messageClientId), this.core.eventBus.emit("forwardSend/V2NIMMessageService/modifyMsg", t3);
    }), this.service.emit("onReceiveMessagesModified", o2));
  }
  v2MessageSyncSuperTeamModifiedHandler(t2) {
    this.v2MessageSyncModifiedHandler(t2);
  }
};
var V2NIMMessageEventImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.logger = this.core.logger;
  }
  setListener() {
    this.core.eventBus.on("forwardReceive/V2NIMMessageService/sendMsg", this.service.sendMessageFn.bind(this.service)), this.core.eventBus.on("forwardReceive/V2NIMMessageService/revokeMessages", this.service.deleteUtil.emitRevokeMessage.bind(this.service.deleteUtil)), this.core.eventBus.on("forwardReceive/V2NIMMessageService/deleteMessages", this.service.deleteUtil.deleteMessagesFn.bind(this.service.deleteUtil)), this.core.eventBus.on("V2NIMConversationService/deleteConversation", (t2) => {
      t2.forEach((t3) => this.service.model.deleteMessages(t3));
    }), this.core.eventBus.on("V2NIMAIService/receiveMessagesModified", (t2) => this.service.emit("onReceiveMessagesModified", t2));
  }
  beforeEmit(t2, ...o2) {
    var a2, m2, u2, h2 = `${this.service.name}::emit ${t2.toString()}`;
    if ("onSendMessage" === t2) {
      var g2 = o2[0];
      this.logger.log(`${h2}`, `${g2.messageClientId}/${g2.messageServerId}/${g2.createTime};`, `sendingState:${g2.sendingState};attachmentUploadState:${g2.attachmentUploadState || 0};messageStatus:${null === (a2 = g2.messageStatus) || void 0 === a2 ? void 0 : a2.errorCode};config.lastMsg:${null === (m2 = g2.messageConfig) || void 0 === m2 ? void 0 : m2.lastMessageUpdateEnabled};config.unread:${null === (u2 = g2.messageConfig) || void 0 === u2 ? void 0 : u2.unreadEnabled}`);
    } else if ("onReceiveMessages" === t2 || "onReceiveMessagesModified" === t2) {
      var I2 = o2[0];
      this.logger.log(`${h2}`, I2.map((t3) => {
        var o3, a3;
        return `${t3.messageClientId}/${t3.messageServerId}/${t3.createTime};config.lastMsg:${null === (o3 = t3.messageConfig) || void 0 === o3 ? void 0 : o3.lastMessageUpdateEnabled};config.unread:${null === (a3 = t3.messageConfig) || void 0 === a3 ? void 0 : a3.unreadEnabled}`;
      }));
    } else if ("onMessageRevokeNotifications" === t2) {
      var M2 = o2[0];
      this.logger.log(`${h2}`, M2.map((t3) => `msg:${t3.messageRefer.messageClientId}/${t3.messageRefer.messageServerId};revokeAccountId:${t3.revokeAccountId}`));
    } else if ("onMessageDeletedNotifications" === t2) {
      var _2 = o2[0];
      this.logger.log(`${h2}`, _2.map((t3) => `msg:${t3.messageRefer.messageClientId}/${t3.messageRefer.messageServerId};deleteTime:${t3.deleteTime}`));
    } else
      this.logger.log(`${h2}`, ...o2);
  }
};
var V2NIMMessageServiceImpl = class extends V2Service {
  constructor(t2, o2 = {}) {
    super("V2NIMMessageService", t2), this.customAttachmentParsers = [], this.config = { compatibleWithV1: true }, this.filterFn = void 0, this.core._registerDep(V2NIMConversationIdUtilImpl, "V2NIMConversationIdUtil"), this.core._registerDep(V2NIMMessageCreatorImpl, "V2NIMMessageCreator"), this.core._registerDep(V2NIMMessageAttachmentCreatorImpl, "V2NIMMessageAttachmentCreator"), this.core._registerDep(V2NIMClientAntispamUtilImpl, "V2NIMClientAntispamUtil"), this.receiptUtil = new ReceiptUtil(this.core, this), this.fileUtil = new FileUtil(this.core), this.sendUtil = new SendUtil(this.core, this), this.modifyUtil = new ModifyUtil(this.core, this), this.deleteUtil = new DeleteUtil(this.core, this), this.aiUtil = new AIUtil(this.core, this), this.model = new V2NIMMessageModelImpl(), this.event = new V2NIMMessageEventImpl(this.core, this), this.handler = new V2NIMMMessageHandlerImpl(this.core, this), "v2" === this.core.options.apiVersion && (registerParser({ cmdMap: kr, cmdConfig: Fr }), this.setOptions(o2), this.setListener());
  }
  setOptions(t2) {
    var o2;
    (null === (o2 = this.core.msg) || void 0 === o2 ? void 0 : o2.name) ? this.config.compatibleWithV1 = true : this.config.compatibleWithV1 = false, this.config = Object.assign(this.config, t2);
  }
  setListener() {
    this.event.setListener();
  }
  reset() {
    this.model.reset(), this.receiptUtil.reset();
  }
  emit(t2, ...o2) {
    return this.event.beforeEmit(t2, ...o2), super.emit(t2, ...o2);
  }
  checkExtendUtil() {
    var t2;
    if (!(null === (t2 = this.core.V2NIMMessageExtendUtil) || void 0 === t2 ? void 0 : t2.name))
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "V2NIMMessageLogUtil is not registered" } });
  }
  checkLogUtil() {
    var t2;
    if (!(null === (t2 = this.core.V2NIMMessageLogUtil) || void 0 === t2 ? void 0 : t2.name))
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "V2NIMMessageExtendUtil is not registered" } });
  }
  getMessageList(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.checkLogUtil();
      var o2 = yield this.core.V2NIMMessageLogUtil.getMessageList(t2);
      return o2 = this._filterMessageByClearTime(t2.conversationId, o2), o2 = this._filterMessagesByFn(o2);
    });
  }
  getMessageListEx(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.checkLogUtil();
      var o2 = yield this.core.V2NIMMessageLogUtil.getMessageList(t2);
      return o2 = this._filterMessageByClearTime(t2.conversationId, o2), { messages: this._filterMessagesByFn(o2), anchorMessage: o2.length > 0 ? o2[o2.length - 1] : null };
    });
  }
  getMessageListByRefers(t2) {
    return this.checkV2(), this.checkLogUtil(), this.core.V2NIMMessageLogUtil.getMessageListByRefers(t2);
  }
  clearHistoryMessage(t2) {
    return this.checkV2(), this.checkLogUtil(), this.core.V2NIMMessageLogUtil.clearHistoryMessage(t2);
  }
  clearRoamingMessage(t2) {
    return this.checkV2(), this.checkLogUtil(), this.core.V2NIMMessageLogUtil.clearRoamingMessage(t2);
  }
  pinMessage(t2, o2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.pinMessage(t2, o2);
  }
  unpinMessage(t2, o2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.unpinMessage(t2, o2);
  }
  updatePinMessage(t2, o2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.updatePinMessage(t2, o2);
  }
  voiceToText(t2) {
    return this.checkV2(), this.checkExtendUtil(), "string" == typeof t2.duration && (t2.duration = Number(t2.duration)), this.core.V2NIMMessageExtendUtil.voiceToText(t2);
  }
  getPinnedMessageList(t2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.getPinnedMessageList(t2);
  }
  addQuickComment(t2, o2, a2, m2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.addQuickComment(t2, o2, a2, m2);
  }
  removeQuickComment(t2, o2, a2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.removeQuickComment(t2, o2, a2);
  }
  getQuickCommentList(t2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.getQuickCommentList(t2);
  }
  addCollection(t2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.addCollection(t2);
  }
  removeCollections(t2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.removeCollections(t2);
  }
  updateCollectionExtension(t2, o2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.updateCollectionExtension(t2, o2);
  }
  getCollectionListByOption(t2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.getCollectionListByOption(t2);
  }
  getCollectionListExByOption(t2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.getCollectionListExByOption(t2);
  }
  searchCloudMessages(t2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.searchCloudMessages(t2);
  }
  searchCloudMessagesEx(t2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.searchCloudMessagesEx(t2);
  }
  getThreadMessageList(t2) {
    return this.checkV2(), this.checkExtendUtil(), this.core.V2NIMMessageExtendUtil.getThreadMessageList(t2);
  }
  registerCustomAttachmentParser(t2) {
    "function" == typeof t2 && -1 === this.customAttachmentParsers.indexOf(t2) && this.customAttachmentParsers.unshift(t2);
  }
  unregisterCustomAttachmentParser(t2) {
    var o2 = this.customAttachmentParsers.indexOf(t2);
    o2 > -1 && this.customAttachmentParsers.splice(o2, 1);
  }
  sendP2PMessageReceipt(t2) {
    return this.checkV2(), this.receiptUtil.sendP2PMessageReceipt(t2);
  }
  isPeerRead(t2) {
    return this.checkV2(), this.receiptUtil.isPeerRead(t2);
  }
  getP2PMessageReceipt(t2) {
    return this.checkV2(), this.receiptUtil.getP2PMessageReceipt(t2);
  }
  getTeamMessageReceipts(t2) {
    return this.checkV2(), this.receiptUtil.getTeamMessageReceipts(t2);
  }
  getTeamMessageReceiptDetail(t2) {
    return this.checkV2(), this.receiptUtil.getTeamMessageReceiptDetail(t2);
  }
  sendTeamMessageReceipts(t2) {
    return this.checkV2(), this.receiptUtil.sendTeamMessageReceipts(t2);
  }
  revokeMessage(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this.deleteUtil.revokeMessage(t2, o2);
    });
  }
  deleteMessage(t2, o2) {
    return this.checkV2(), this.deleteUtil.deleteMessage(t2, o2);
  }
  deleteMessages(t2, o2) {
    return this.checkV2(), this.deleteUtil.deleteMessages(t2, o2);
  }
  cancelMessageAttachmentUpload(t2) {
    return this.checkV2(), this.fileUtil.cancelMessageAttachmentUpload(t2);
  }
  markMsgsAck(t2) {
    if (t2 && t2.length > 0) {
      var o2 = [], a2 = [];
      t2.forEach((t3) => {
        t3.senderId === this.core.account && t3.senderId !== t3.receiverId || (1 === t3.conversationType ? o2.push(t3) : 2 === t3.conversationType && a2.push(t3));
      }), o2.length > 0 && this.core.sendCmd("v2BatchMarkRead", { sid: 7, cid: 2, ids: o2.map((t3) => t3.messageServerId) }), a2.length > 0 && this.core.sendCmd("v2BatchMarkRead", { sid: 8, cid: 3, ids: a2.map((t3) => t3.messageServerId) });
    }
  }
  sendMessage(t2, o2, a2 = {}, m2) {
    var u2;
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate({ message: { type: "object" } }, { message: t2 }, "", true), t2.messageClientId = t2.messageClientId || Ve(), t2.conversationId && t2.conversationId !== o2)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "sendMessage: message.conversationId is not equal to conversationId" } });
      validate(qt, { conversationId: o2, message: t2, params: a2 }, "", true), validateConversationId(this.core.account, o2);
      var h2 = this.core.V2NIMConversationIdUtil.parseConversationType(o2);
      if ((2 === h2 || 3 === h2) && a2.robotConfig && !a2.robotConfig.accountId)
        throw new ValidateErrorV2({ detail: { reason: "When conversationType is team or superTeam, account is required in robotInfo account is required" } });
      if (2 !== h2 && 3 !== h2 || !a2.targetConfig)
        a2.targetConfig = void 0;
      else {
        var g2 = a2.targetConfig.receiverIds;
        if (3 === h2 && false === a2.targetConfig.inclusive)
          throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "setting inclusive to false for super teams is not allowed" } });
        if (0 === (g2 = g2.filter((t3) => t3 && t3 !== this.core.account)).length)
          throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "receiverIds cannot be empty or only contain yourself" } });
        a2.targetConfig.receiverIds = g2;
      }
      (null === (u2 = a2.aiConfig) || void 0 === u2 ? void 0 : u2.aiStream) && this.aiUtil.checkAI();
      var I2, M2 = this.core.timeOrigin.getTimeNode(), { messageBeforeSend: _2, clientAntispamResult: E2, hiddenParams: S2 } = this.sendUtil.prepareMessage(t2, o2, a2);
      this.logger.log(`V2SendMessage start:${_2.messageClientId}/${_2.createTime};conversation:${o2};`, `NTPTime:${this.core.timeOrigin.getNTPTime(M2)}`);
      try {
        I2 = yield this.sendUtil.doSendMessage({ apiCallingTimeNode: M2, messageBeforeSend: _2, clientAntispamResult: E2, hiddenParams: S2, progress: m2 });
      } catch (t3) {
        throw this.logger.warn(`V2SendMessage end:${_2.messageClientId}.`, t3 instanceof V2NIMErrorImpl ? `failed:${t3.code}` : "failed"), t3;
      }
      return I2.message.senderId === I2.message.receiverId && this.markMsgsAck([I2.message]), this.logger.log(`V2SendMessage end:${I2.message.messageClientId}/${I2.message.messageServerId}/${I2.message.createTime}`), I2;
    });
  }
  replyMessage(t2, o2, a2 = {}, m2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate({ message: { type: "object" } }, { message: t2 }, "", true), t2.messageClientId = t2.messageClientId || Ve(), validate(Gt, { message: t2, replyMessage: o2, params: a2 }, "", true), validateConversationId(this.core.account, o2.conversationId), (2 === t2.conversationType || 3 === t2.conversationType) && a2.robotConfig && !a2.robotConfig.accountId)
        throw new ValidateErrorV2({ detail: { reason: "When conversationType is team or superTeam, account is required in robotInfo account is required" } });
      var u2 = this.core.timeOrigin.getTimeNode(), { messageBeforeSend: h2, clientAntispamResult: g2, hiddenParams: I2 } = this.sendUtil.prepareMessage(t2, o2.conversationId, a2, o2), M2 = yield this.sendUtil.doSendMessage({ apiCallingTimeNode: u2, messageBeforeSend: h2, clientAntispamResult: g2, hiddenParams: I2, progress: m2 });
      return M2.message.senderId === M2.message.receiverId && this.markMsgsAck([M2.message]), M2;
    });
  }
  modifyMessage(t2, o2) {
    this.checkV2(), this.checkLogin(), validate(fr, t2, "message", true), validate(Ir, o2, "params", true), this.modifyUtil.checkIfModify(t2, o2);
    var { messageBeforeSend: a2, clientAntispamResult: m2 } = this.modifyUtil.prepareMessage(t2, o2);
    return this.modifyUtil.modifyMessage(a2, m2);
  }
  stopAIStreamMessage(t2, o2) {
    if (this.checkV2(), this.aiUtil.checkAI(), validate(yr, t2, "message", true), validate(Mr, o2, "params", true), 2 === o2.operationType && !o2.updateContent)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "V2NIMMessage::stopAIStreamMessage updateContent empty" } });
    return this.aiUtil.stopAIStreamMessage(t2, o2);
  }
  regenAIMessage(t2, o2) {
    return this.checkV2(), this.aiUtil.checkAI(), validate(yr, t2, "message", true), validate(_r, o2, "params", true), this.aiUtil.regenAIMessage(t2, o2);
  }
  sendMessageFn(t2) {
    if (t2.msgAckSnapshot) {
      var o2 = t2.msgAckSnapshot, a2 = { conversationId: t2.conversationId, messageServerId: t2.messageServerId, messageClientId: t2.messageClientId, readCount: 0, unreadCount: Number(o2) };
      delete t2.msgAckSnapshot, this.emit("onReceiveTeamMessageReadReceipts", [a2]);
    }
    t2 = formatMessageAttachment(t2, this.core), this.model.upsertMessages([t2]), this.core.eventBus.emit("V2NIMMessageService/sendMessage", t2, t2.sendingState);
  }
  setMessageFilter(t2) {
    null != t2 ? t2 && "function" == typeof t2.shouldIgnore && (this.filterFn = t2.shouldIgnore) : this.filterFn = void 0;
  }
  _filterMessage(t2) {
    if ("function" == typeof this.filterFn)
      try {
        return true === this.filterFn(t2);
      } catch (o2) {
        return this.logger.error(`V2NIMMessage::triggerMessageFilter ${t2.messageClientId} error:`, o2), false;
      }
    return false;
  }
  _filterMessagesByFn(t2) {
    return t2.filter((t3) => !this._filterMessage(t3));
  }
  _filterMessageByClearTime(t2, o2) {
    var a2 = Ae.localStorage.getItem(`nim_${this.core.account}_${t2}_clearTime`), m2 = a2 ? parseInt(a2) : 0;
    return m2 > 0 ? o2.filter((t3) => t3.createTime >= m2) : o2;
  }
};
var oi = { super_team: 3, p2p: 1, team: 2 };
var si = { 3: "super_team", 1: "p2p", 0: "p2p", 2: "team" };
function getConvInfoFromSessionId(t2, o2 = "|") {
  var a2 = t2.indexOf(o2);
  if (-1 === a2)
    return { target: "", type: 0 };
  var m2 = t2.slice(0, a2);
  return { target: t2.slice(a2 + 1), type: oi[m2] || 0 };
}
function getSessionIdFromConvInfo(t2, o2) {
  return `${si[t2]}|${o2}`;
}
var V2NIMLocalConversationModelImpl = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.capacity = 1e4, this.readTimeMap = /* @__PURE__ */ new Map(), this.stickTopMap = /* @__PURE__ */ new Map();
  }
  reset() {
    this.map.clear(), this.readTimeMap.clear(), this.stickTopMap.clear();
  }
  count() {
    return this.map.size;
  }
  sort() {
    var t2 = Array.from(this.map.values());
    t2.sort((t3, o2) => o2.sortOrder - t3.sortOrder), this.map.clear(), t2.forEach((t3) => {
      this.map.set(t3.conversationId, t3);
    });
  }
  processConversation(t2) {
    return "string" == typeof t2.lastMessage && delete t2.lastMessage, void 0 === t2.localExtension && (t2.localExtension = ""), t2;
  }
  getById(t2) {
    return this.map.get(t2);
  }
  getAll() {
    return Array.from(this.map.values()).sort((t2, o2) => o2.sortOrder - t2.sortOrder);
  }
  getStickTopList() {
    return Array.from(this.map.values()).filter((t2) => t2.stickTop).sort((t2, o2) => o2.sortOrder - t2.sortOrder);
  }
  getByOption(t2, o2, a2) {
    var { conversationTypes: m2, onlyUnread: u2 } = a2, h2 = [];
    this.map.forEach((t3) => {
      m2 && m2.length > 0 && !m2.includes(t3.type) || u2 && !t3.unreadCount || a2.ignoreMuted && t3.mute || h2.push(t3);
    }), h2 = h2.sort((t3, o3) => o3.sortOrder - t3.sortOrder);
    var g2 = 0;
    t2 > 0 && (g2 = findIndexWithinTargetValue(h2, "sortOrder", t2), h2[g2] && h2[g2].sortOrder === t2 && (g2 += 1));
    var I2 = h2.slice(g2).length;
    return (h2 = h2.slice(g2, g2 + o2)).length > 0 ? { offset: I2 > o2 ? h2[h2.length - 1].sortOrder : 0, finished: !(I2 > o2), conversationList: h2 } : { offset: 0, finished: true, conversationList: h2 };
  }
  upsert(t2) {
    var o2 = t2.conversationId, a2 = this.map.get(o2);
    if (!a2) {
      var m2 = this.processConversation(Object.assign({ stickTop: this.getStickTop(o2), localExtension: "", lastMessage: null, unreadCount: 0, sortOrder: 0, createTime: 0, updateTime: 0 }, t2));
      return this.setLRU(o2, m2), m2.unreadCount > 0;
    }
    var u2 = t2.unreadCount !== a2.unreadCount, h2 = Object.assign({}, a2, t2);
    return h2 = this.processConversation(h2), this.setLRU(o2, h2), u2;
  }
  setLRU(t2, o2) {
    if (this.map.has(t2))
      this.map.delete(t2);
    else if (this.map.size >= this.capacity) {
      var a2 = this.map.keys().next().value;
      a2 && this.map.delete(a2);
    }
    this.map.set(t2, o2);
  }
  bulkUpsert(t2) {
    var o2 = false;
    return t2.forEach((t3) => {
      this.upsert(t3) && (o2 = true);
    }), o2;
  }
  deleteById(t2) {
    var o2 = this.getById(t2);
    if (o2)
      return this.map.delete(t2), o2;
  }
  updateReadTime(t2, o2) {
    this.readTimeMap.set(t2, o2);
  }
  getReadTime(t2) {
    return this.readTimeMap.get(t2) || 0;
  }
  updateStickTop(t2, o2) {
    o2 ? this.stickTopMap.set(t2, true) : this.stickTopMap.delete(t2);
  }
  getStickTop(t2) {
    return this.stickTopMap.get(t2) || false;
  }
};
var ni = { "4_14": "v2LocalConvSyncReadTime", "4_20": "v2LocalConvSyncSuperTeamReadTime", "4_22": "v2LocalConvSyncMoreRoaming", "4_23": "v2LocalConvSyncStickTop", "4_25": "v2LocalConvSyncReliableInfo", "7_16": "v2LocalConvMarkReadTime", "7_25": "v2LocalConvMultiMarkReadTime", "7_116": "v2LocalConvMultiSyncReadTime", "21_25": "v2LocalConvSuperTeamMarkReadTime", "21_32": "v2LocalConvSuperTeamMultiMarkReadTime", "21_125": "v2LocalConvSuperTeamMultiSyncReadTime", "33_12": "v2LocalConvStickTopAdd", "33_13": "v2LocalConvStickTopDelete", "23_112": "v2LocalConvStickTopMultiSyncAdd", "23_113": "v2LocalConvStickTopMultiSyncDelete", "23_114": "v2LocalConvStickTopMultiSyncUpdate" };
var ai = "V2NIMLocalConversationService";
var ci = { id: 1, ext: 2, createTime: { id: 3, retType: "number" }, updateTime: { id: 4, retType: "number" } };
var di = { scene: 1, to: 2, timetag: 3 };
var li = { v2LocalConvSyncReadTime: { sid: 4, cid: 14, service: ai, response: [{ type: "StrLongMap", name: "p2p" }, { type: "LongLongMap", name: "team" }, { type: "Long", name: "timetag" }] }, v2LocalConvSyncSuperTeamReadTime: { sid: 4, cid: 20, service: ai, response: [{ type: "LongLongMap", name: "superTeam" }] }, v2LocalConvSyncMoreRoaming: { sid: 4, cid: 22, service: ai, response: [] }, v2LocalConvSyncStickTop: { sid: 4, cid: 23, service: ai, response: [{ type: "Long", name: "timetag" }, { type: "Bool", name: "isThereAnyChange" }, { type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(ci) }] }, v2LocalConvSyncReliableInfo: { sid: 4, cid: 25, service: ai, response: [] }, v2LocalConvMarkReadTime: { sid: 7, cid: 16, service: ai, params: [{ type: "Byte", name: "scene" }, { type: "String", name: "to" }, { type: "Long", name: "timetag" }] }, v2LocalConvMultiMarkReadTime: { sid: 7, cid: 25, service: ai, ignoreErrCodes: [700], params: [{ type: "PropertyArray", name: "tags", reflectMapper: di }] }, v2LocalConvMultiSyncReadTime: { sid: 7, cid: 116, service: ai, response: [{ type: "Byte", name: "scene" }, { type: "String", name: "to" }, { type: "Long", name: "timetag" }] }, v2LocalConvSuperTeamMarkReadTime: { sid: 21, cid: 25, service: ai, params: [{ type: "Long", name: "to" }, { type: "Long", name: "timetag" }] }, v2LocalConvSuperTeamMultiMarkReadTime: { sid: 21, cid: 32, service: ai, ignoreErrCodes: [700], params: [{ type: "PropertyArray", name: "tags", reflectMapper: di }] }, v2LocalConvSuperTeamMultiSyncReadTime: { sid: 21, cid: 125, service: ai, response: [{ type: "Long", name: "to" }, { type: "Long", name: "timetag" }] }, v2LocalConvStickTopAdd: { sid: 33, cid: 12, service: ai, params: [{ type: "Property", name: "tag", reflectMapper: ci }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ci) }] }, v2LocalConvStickTopDelete: { sid: 33, cid: 13, service: ai, params: [{ type: "Property", name: "tag", reflectMapper: ci }], response: [{ type: "Long", name: "timetag" }] }, v2LocalConvStickTopMultiSyncAdd: { sid: 23, cid: 112, service: ai, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ci) }] }, v2LocalConvStickTopMultiSyncDelete: { sid: 23, cid: 113, service: ai, response: [{ type: "Long", name: "timetag" }, { type: "Property", name: "data", reflectMapper: invertSerializeItem(ci) }] }, v2LocalConvStickTopMultiSyncUpdate: { sid: 23, cid: 114, service: ai, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ci) }] } };
function chunk(t2, o2) {
  t2 = t2 || [], o2 = o2 || 1, o2 = Math.max(Math.floor(o2), 1);
  for (var a2 = [], m2 = 0; m2 < t2.length; m2 += o2)
    a2.push(t2.slice(m2, m2 + o2));
  return a2;
}
function isObject(t2) {
  var o2 = typeof t2;
  return null != t2 && ("object" == o2 || "function" == o2);
}
var pi = Math.max;
var mi = Math.min;
function debounce(t2, o2, a2) {
  var m2, u2, h2, g2, I2, M2, _2 = 0, E2 = false, S2 = false, T2 = true;
  if ("function" != typeof t2)
    throw new TypeError("Expected a function");
  function invokeFunc(o3) {
    var a3 = m2, h3 = u2;
    return m2 = u2 = void 0, _2 = o3, g2 = t2.apply(h3, a3);
  }
  function leadingEdge(t3) {
    return _2 = t3, I2 = setTimeout(timerExpired, o2), E2 ? invokeFunc(t3) : g2;
  }
  function shouldInvoke(t3) {
    var a3 = t3 - M2;
    return void 0 === M2 || a3 >= o2 || a3 < 0 || S2 && t3 - _2 >= h2;
  }
  function timerExpired() {
    var t3 = Date.now();
    if (shouldInvoke(t3))
      return trailingEdge(t3);
    I2 = setTimeout(timerExpired, function remainingWait(t4) {
      var a3 = o2 - (t4 - M2);
      return S2 ? mi(a3, h2 - (t4 - _2)) : a3;
    }(t3));
  }
  function trailingEdge(t3) {
    return I2 = void 0, T2 && m2 ? invokeFunc(t3) : (m2 = u2 = void 0, g2);
  }
  function debounced() {
    var t3 = Date.now(), a3 = shouldInvoke(t3);
    if (m2 = arguments, u2 = this, M2 = t3, a3) {
      if (void 0 === I2)
        return leadingEdge(M2);
      if (S2)
        return clearTimeout(I2), I2 = setTimeout(timerExpired, o2), invokeFunc(M2);
    }
    return void 0 === I2 && (I2 = setTimeout(timerExpired, o2)), g2;
  }
  return o2 = Number(o2) || 0, isObject(a2) && (E2 = !!a2.leading, h2 = (S2 = "maxWait" in a2) ? pi(Number(a2.maxWait) || 0, o2) : h2, T2 = "trailing" in a2 ? !!a2.trailing : T2), debounced.cancel = function cancel() {
    void 0 !== I2 && clearTimeout(I2), _2 = 0, m2 = M2 = u2 = I2 = void 0;
  }, debounced.flush = function flush() {
    return void 0 === I2 ? g2 : trailingEdge(Date.now());
  }, debounced;
}
var ui;
var V2NIMLocalConversationUnreadImpl = class {
  constructor(t2, o2) {
    this.totalUnreadCount = void 0, this.unreadCountByFilter = {}, this.currentConversationId = void 0, this._setCurrConvThrottle = function throttle(t3, o3, a2) {
      var m2 = true, u2 = true;
      if ("function" != typeof t3)
        throw new TypeError("Expected a function");
      return isObject(a2) && (m2 = "leading" in a2 ? !!a2.leading : m2, u2 = "trailing" in a2 ? !!a2.trailing : u2), debounce(t3, o3, { leading: m2, maxWait: o3, trailing: u2 });
    }(() => {
      this.currentConversationId && this._setCurrConv(this.currentConversationId);
    }, 5e3, { leading: false }), this.core = t2, this.service = o2, this.model = o2.model, this.logger = o2.logger;
  }
  reset() {
    this.totalUnreadCount = void 0, this.unreadCountByFilter = {}, this.currentConversationId = void 0, this._setCurrConvThrottle.flush();
  }
  getTotalUnreadCount() {
    return this.totalUnreadCount;
  }
  resetTotalAfterSyncDone() {
    var t2 = this.service.model.getAll().reduce((t3, o3) => t3 + (o3.unreadCount || 0), 0), o2 = this.totalUnreadCount;
    return void 0 !== o2 && o2 === t2 || (this.totalUnreadCount = t2, this.service.emit("onTotalUnreadCountChanged", t2)), t2;
  }
  digestUnreadCountChange() {
    this._digest();
  }
  _digest() {
    var t2 = this.totalUnreadCount, o2 = this.service.model.getAll().reduce((t3, o3) => t3 + (o3.unreadCount || 0), 0);
    this.core.logger.log(`V2NIMConversation::digestUnreadCountChange:oldUnreadCount ${t2}, newUnreadCount ${o2}`), t2 !== o2 && (this.totalUnreadCount = o2, this.service.emit("onTotalUnreadCountChanged", o2)), Object.keys(this.unreadCountByFilter).forEach((t3) => {
      var o3 = JSON.parse(t3), a2 = this.getUnreadCountByFilter(o3), m2 = this.unreadCountByFilter[t3];
      this.unreadCountByFilter[t3] = a2, o3.equals = equals$1.bind(o3), m2 !== a2 && this.service.emit("onUnreadCountChangedByFilter", o3, a2);
    });
  }
  clearUnreadCount(t2) {
    var o2 = t2.reduce((t3, o3) => (this.service.model.upsert({ conversationId: o3.conversationId, type: o3.type, unreadCount: 0 }) && t3.push(o3.conversationId), t3), []);
    if (o2.length > 0) {
      var a2 = o2.map((t3) => this.service.model.getById(t3));
      this.service.triggerConversationChanged(a2), this.digestUnreadCountChange();
    }
  }
  getUnreadCountByIds(t2) {
    return (t2 = uniq(t2)).reduce((t3, o2) => {
      var a2 = this.service.model.getById(o2);
      return t3 + (a2 && a2.unreadCount || 0);
    }, 0);
  }
  getUnreadCountByFilter(t2) {
    var o2 = this.service.model.count();
    return this.service.model.getByOption(0, o2, { conversationTypes: t2.conversationTypes, ignoreMuted: t2.ignoreMuted }).conversationList.reduce((t3, o3) => t3 + (o3.unreadCount || 0), 0);
  }
  isMessageUnread(t2, o2 = 0) {
    var a2;
    return t2.createTime > o2 && t2.senderId !== this.core.account && 200 === t2.messageStatus.errorCode && false !== (null === (a2 = t2.messageConfig) || void 0 === a2 ? void 0 : a2.unreadEnabled);
  }
  isMessageReferUnread(t2, o2 = 0) {
    var a2 = this.core.V2NIMMessageService.model.getMessageById(t2.messageClientId);
    return a2 ? this.isMessageUnread(a2, o2) : t2.createTime > o2 && t2.senderId !== this.core.account;
  }
  countUnreadByMessageInMemory(t2, o2 = 0) {
    var a2 = 0;
    return this.core.V2NIMMessageService.model.getMessagesByConversationId(t2).forEach((t3) => {
      this.isMessageUnread(t3, o2) && a2++;
    }), a2;
  }
  addFilter(t2) {
    var o2 = generateFilterKey$1(t2);
    if (void 0 !== this.unreadCountByFilter[o2])
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_ALREADY_EXIST });
    var a2 = JSON.parse(o2), m2 = this.getUnreadCountByFilter(a2);
    this.unreadCountByFilter[o2] = m2, this.service.emit("onUnreadCountChangedByFilter", a2, m2);
  }
  deleteFilter(t2) {
    var o2 = generateFilterKey$1(t2);
    if (void 0 === this.unreadCountByFilter[o2])
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST });
    delete this.unreadCountByFilter[o2];
  }
  markConversationRead(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var o2 = this.model.getById(t2), a2 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(t2), m2 = this.core.V2NIMConversationIdUtil.parseConversationType(t2), u2 = this.model.getReadTime(t2);
      if (!o2)
        return u2 || this.core.timeOrigin.getNTPTime();
      var h2 = this.service.compute.computeReadTimeForMark(o2);
      return u2 >= h2 ? (this.logger.log(`V2LocalConv::markConversationRead currentReadTime >= readTime ${t2},${u2},${h2}`), u2) : (3 === m2 ? yield this.core.sendCmd("v2LocalConvSuperTeamMarkReadTime", { timetag: h2, to: a2 }) : yield this.core.sendCmd("v2LocalConvMarkReadTime", { scene: 1 === m2 ? 0 : 2 === m2 ? 1 : 2, timetag: h2, to: a2 }), this.model.updateReadTime(t2, h2), h2);
    });
  }
  markMultiConversationRead(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var o2 = { cmd: "v2LocalConvSuperTeamMultiMarkReadTime", params: [] }, a2 = { cmd: "v2LocalConvMultiMarkReadTime", params: [] };
      t2.forEach((t3) => {
        var m3 = this.model.getById(t3);
        if (m3) {
          var u3 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(t3), h3 = this.core.V2NIMConversationIdUtil.parseConversationType(t3), g3 = this.model.getReadTime(t3), I2 = this.service.compute.computeReadTimeForMark(m3);
          if (!(g3 >= I2)) {
            var M2 = { conversationId: t3, scene: 1 === h3 ? 0 : 2 === h3 ? 1 : 2, timetag: I2, to: u3 };
            3 === h3 ? o2.params.push(M2) : a2.params.push(M2);
          }
        }
      });
      var m2 = chunk(o2.params, 50), u2 = chunk(a2.params, 50);
      for (var h2 of m2) {
        try {
          yield this.core.sendCmd(o2.cmd, { tags: h2 });
        } catch (t3) {
          this.logger.warn("markMultiConversationRead::error:", h2.map((t4) => t4.conversationId), t3);
        }
        h2.forEach((t3) => {
          this.model.updateReadTime(t3.conversationId, t3.timetag);
        });
      }
      for (var g2 of u2) {
        try {
          yield this.core.sendCmd(a2.cmd, { tags: g2 });
        } catch (t3) {
          this.logger.warn("markMultiConversationRead::error:", g2.map((t4) => t4.conversationId), t3);
        }
        g2.forEach((t3) => {
          this.model.updateReadTime(t3.conversationId, t3.timetag);
        });
      }
    });
  }
  setCurrentConversation(t2) {
    var o2 = this.currentConversationId;
    this.currentConversationId = t2, this.currentConversationId && this._setCurrConv(this.currentConversationId), o2 && o2 !== this.currentConversationId && (this._setCurrConvThrottle.flush(), this._setCurrConv(o2));
  }
  _setCurrConv(t2) {
    var o2 = this.model.getById(t2), a2 = (null == o2 ? void 0 : o2.unreadCount) || 0;
    o2 && (o2.unreadCount = 0), o2 && a2 > 0 && (this.service.triggerConversationChanged([o2]), this._digest()), this.markConversationRead(t2).catch((t3) => {
      this.logger.warn("_setConv markRead failed", t3);
    });
  }
};
function generateFilterKey$1(t2) {
  var { conversationTypes: o2 } = t2;
  return o2 && (o2 = o2.sort()), JSON.stringify({ conversationGroupId: t2.conversationGroupId, conversationTypes: o2, ignoreMuted: t2.ignoreMuted });
}
function equals$1(t2) {
  return JSON.stringify(this) === generateFilterKey$1(t2);
}
function formatLastMessageFromMessage(t2, o2, a2 = 0, m2) {
  var u2, h2;
  o2 = formatMessageAttachment(o2, t2);
  var { messageType: g2, subType: I2, text: M2, attachment: _2, serverExtension: E2 } = o2, S2 = "";
  if (o2.senderId !== t2.account && 5 !== g2) {
    S2 = get(o2, "fromNick");
    var T2 = null === (h2 = null === (u2 = t2.V2NIMFriendService) || void 0 === u2 ? void 0 : u2.model) || void 0 === h2 ? void 0 : h2.getFriend(o2.senderId);
    T2 && T2.alias && (S2 = T2.alias);
  }
  return JSON.parse(JSON.stringify({ lastMessageState: a2, messageRefer: formatMessageRefer(t2, o2), messageType: g2, subType: I2, text: M2, attachment: _2, serverExtension: E2, callbackExtension: o2.callbackExtension, sendingState: m2, senderName: S2 }));
}
function formatConversationFields(t2, o2) {
  return o2 && o2.length > 0 ? o2.map((o3) => formatConversationField(t2, o3)) : [];
}
function formatConversationField(t2, o2) {
  var a2 = o2;
  if ("string" == typeof a2.lastMessage)
    if ("" === a2.lastMessage)
      ;
    else if (1 === a2.lastMessageState) {
      var m2 = formatRevokeMessage(t2, deserialize(JSON.parse(a2.lastMessage), invertSerializeItem(Ur)));
      a2.lastMessage = function formatLastMessageFromNotification(t3, o3) {
        var { messageRefer: a3, revokeAccountId: m3, revokeType: u3, callbackExtension: h2, serverExtension: g2, postscript: I2 } = o3, M2 = function calcSenderNameFromNotification(t4, o4, a4, m4) {
          var u4, h3, g3, I3, M3, _2, E2, S2;
          if (o4 !== t4.account) {
            var T2 = null === (h3 = null === (u4 = t4.V2NIMFriendService) || void 0 === u4 ? void 0 : u4.model) || void 0 === h3 ? void 0 : h3.getFriend(o4);
            if (T2 && T2.alias)
              return T2.alias;
            if (2 === a4) {
              var C2 = null === (I3 = null === (g3 = t4.V2NIMTeamService) || void 0 === g3 ? void 0 : g3.memberModel) || void 0 === I3 ? void 0 : I3.getById(m4, 1, o4);
              if (C2 && C2.teamNick)
                return C2.teamNick;
            } else if (3 === a4) {
              var N2 = null === (_2 = null === (M3 = t4.V2NIMTeamService) || void 0 === M3 ? void 0 : M3.memberModel) || void 0 === _2 ? void 0 : _2.getById(m4, 1, o4);
              if (N2 && N2.teamNick)
                return N2.teamNick;
            }
            var A2 = null === (S2 = null === (E2 = t4.V2NIMUserService) || void 0 === E2 ? void 0 : E2.model) || void 0 === S2 ? void 0 : S2.getUser(o4);
            return A2 && A2.name ? A2.name : void 0;
          }
        }(t3, o3.revokeAccountId, o3.messageRefer.conversationType, o3.messageRefer.receiverId) || "";
        return JSON.parse(JSON.stringify({ lastMessageState: 1, messageRefer: a3, revokeAccountId: m3, revokeType: u3, callbackExtension: h2, serverExtension: g2, text: I2 || "", senderName: M2 }));
      }(t2, m2);
    } else if (0 === a2.lastMessageState) {
      var u2 = deserialize(JSON.parse(a2.lastMessage), invertSerializeItem(Pr));
      a2.lastMessage = formatLastMessageFromMessage(t2, u2, a2.lastMessageState, u2.senderId === t2.account ? 1 : void 0);
    } else
      2 === a2.lastMessageState && delete a2.lastMessage;
  return a2;
}
function formatConversationByField(t2) {
  var { version: o2, deleteFlag: a2 } = t2;
  return { conversation: __rest(t2, ["version", "deleteFlag"]), version: o2, deleteFlag: a2 };
}
!function(t2) {
  t2[t2.createConversation = 1] = "createConversation", t2[t2.deleteConversation = 2] = "deleteConversation", t2[t2.updateConversation = 3] = "updateConversation", t2[t2.setConversationTop = 4] = "setConversationTop", t2[t2.clearConversationUnread = 5] = "clearConversationUnread", t2[t2.addConversationToGroup = 6] = "addConversationToGroup", t2[t2.removeConversationFromGroup = 7] = "removeConversationFromGroup", t2[t2.modifyConversationOnSendMessage = 8] = "modifyConversationOnSendMessage", t2[t2.modifyConversationOnDeleteMessage = 9] = "modifyConversationOnDeleteMessage", t2[t2.modifyConversationOnRecallMessage = 10] = "modifyConversationOnRecallMessage", t2[t2.modifyConversationOnClearMessage = 11] = "modifyConversationOnClearMessage", t2[t2.oneClickClearConversationUnread = 12] = "oneClickClearConversationUnread", t2[t2.modifyConversationOnUpdateMessage = 13] = "modifyConversationOnUpdateMessage";
}(ui || (ui = {}));
var V2NIMLocalConversationComputeImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2;
  }
  get hasUserService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMUserService) || void 0 === t2 ? void 0 : t2.name);
  }
  get hasFriendService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMFriendService) || void 0 === t2 ? void 0 : t2.name);
  }
  get hasTeamService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMTeamService) || void 0 === t2 ? void 0 : t2.name);
  }
  get hasMessageService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMMessageService) || void 0 === t2 ? void 0 : t2.name);
  }
  computeFromExternal(t2) {
    var o2, a2, m2;
    if (0 === t2.type)
      return t2;
    var u2 = this.core.V2NIMConversationIdUtil.parseConversationType(t2.conversationId), h2 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(t2.conversationId), g2 = {};
    if ((null === (o2 = this.core.V2NIMSettingService) || void 0 === o2 ? void 0 : o2.name) && (g2.mute = this.core.V2NIMSettingService.getConversationMuteStatus(t2.conversationId)), 1 === u2 && this.hasUserService) {
      var I2, M2 = this.core.V2NIMUserService.model.getUser(h2), _2 = this.hasFriendService ? this.core.V2NIMFriendService.model.getFriend(h2) : void 0;
      t2.conversationId === (null === (a2 = t2.lastMessage) || void 0 === a2 ? void 0 : a2.messageRefer.conversationId) && (I2 = null === (m2 = t2.lastMessage) || void 0 === m2 ? void 0 : m2.senderName), g2.name = (null == _2 ? void 0 : _2.alias) || (null == M2 ? void 0 : M2.name) || I2 || h2, g2.avatar = (null == M2 ? void 0 : M2.avatar) || "";
    } else if (2 === u2 && this.hasTeamService) {
      var E2 = this.core.V2NIMTeamService.model.getById(h2, 1);
      g2.name = (null == E2 ? void 0 : E2.name) || h2, g2.avatar = (null == E2 ? void 0 : E2.avatar) || "";
    } else if (3 === u2 && this.hasTeamService) {
      var S2 = this.core.V2NIMTeamService.model.getById(h2, 2);
      g2.name = (null == S2 ? void 0 : S2.name) || h2, g2.avatar = (null == S2 ? void 0 : S2.avatar) || "";
    }
    return Object.assign(t2, g2), t2;
  }
  computeSortOrder(t2, o2) {
    return o2 ? t2 ? o2 + 1e15 : o2 : t2 ? 1e15 : 0;
  }
  computeReadTimeForMark(t2) {
    var o2, a2, m2, u2 = t2.conversationId, h2 = this.service.model.getReadTime(u2);
    if (null === (a2 = null === (o2 = null == t2 ? void 0 : t2.lastMessage) || void 0 === o2 ? void 0 : o2.messageRefer) || void 0 === a2 ? void 0 : a2.createTime)
      m2 = t2.lastMessage.messageRefer.createTime;
    else {
      if (0 === t2.unreadCount && h2 > 0)
        return h2;
      if (!this.core.timeOrigin.checkNodeReliable())
        return h2 || 0;
      m2 = this.core.timeOrigin.getNTPTime();
    }
    return m2;
  }
  computeConvWithLastMsg(t2, o2) {
    var a2, m2 = o2 || this.core.V2NIMMessageService.model.getLastMessageOfConversation(t2.conversationId);
    if (m2 && false !== (null === (a2 = m2.messageConfig) || void 0 === a2 ? void 0 : a2.lastMessageUpdateEnabled)) {
      var u2 = formatLastMessageFromMessage(this.core, m2, 0, m2.sendingState);
      t2.lastMessage = u2, t2.createTime = t2.createTime || m2.createTime, t2.updateTime = m2.createTime, t2.sortOrder = this.computeSortOrder(t2.stickTop, m2.createTime);
    }
    return t2;
  }
  computeConvWithUnread(t2, o2) {
    var a2 = this.service.model.getReadTime(t2.conversationId), m2 = this.service.unread.currentConversationId;
    if (m2 && (null == o2 ? void 0 : o2.conversationId) === m2)
      return t2.unreadCount = 0, this.service.unread._setCurrConvThrottle(), t2;
    var u2 = t2.unreadCount || 0;
    return o2 ? o2 && this.service.unread.isMessageUnread(o2) && (u2 += 1) : u2 = this.service.unread.countUnreadByMessageInMemory(t2.conversationId, a2), t2.unreadCount = u2, t2;
  }
  computeConvByMsgsCache(t2, o2) {
    var a2, m2 = this.service.model.getById(t2), u2 = this.core.V2NIMConversationIdUtil.parseConversationType(t2), h2 = this.core.V2NIMMessageService.model.getLastMessageOfConversation(t2), g2 = null == o2 ? void 0 : o2.updateTime, I2 = 0;
    I2 = g2 || (h2 && h2.createTime ? h2.createTime : m2 && m2.updateTime ? m2.updateTime : this.core.timeOrigin.getNTPTime());
    var M2 = this.service.model.getStickTop(t2), _2 = Object.assign(Object.assign({ conversationId: t2, type: u2, stickTop: M2, localExtension: (null == m2 ? void 0 : m2.localExtension) || "", lastMessage: null, unreadCount: 0 }, o2), { createTime: (null == m2 ? void 0 : m2.createTime) || I2, updateTime: I2, sortOrder: this.computeSortOrder(M2, I2) });
    if (h2 && false !== (null === (a2 = h2.messageConfig) || void 0 === a2 ? void 0 : a2.lastMessageUpdateEnabled)) {
      var E2 = formatLastMessageFromMessage(this.core, h2, 0, h2.sendingState);
      _2.lastMessage = E2;
    }
    return _2;
  }
};
var V2NIMLocalConversationHandlerImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.model = this.service.model, this.logger = this.core.logger;
  }
  v2LocalConvSyncStickTopHandler(t2) {
    var { timetag: o2, isThereAnyChange: a2, datas: m2 } = t2.content;
    if (a2) {
      var u2 = this.model.getAll(), h2 = m2.map((t3) => {
        var { target: o3, type: a3 } = getConvInfoFromSessionId(t3.id), m3 = this.core.V2NIMConversationIdUtil.conversationId(a3, o3);
        return this.model.updateStickTop(m3, true), m3;
      });
      u2.forEach((t3) => {
        h2.includes(t3.conversationId) ? (t3.stickTop = true, t3.updateTime = t3.updateTime > o2 ? t3.updateTime : o2) : t3.stickTop = false, this.model.updateStickTop(t3.conversationId, t3.stickTop);
      }), this.model.bulkUpsert(u2);
    }
  }
  v2LocalConvSyncReadTimeHandler(t2) {
    var o2 = t2.content.p2p || {}, a2 = t2.content.team.m_map || {};
    this.logger.log("v2SyncLocalConvAck::", o2, a2), Object.keys(o2).forEach((t3) => {
      var a3 = this.core.V2NIMConversationIdUtil.p2pConversationId(t3), m2 = this.model.getReadTime(a3);
      o2[t3] > m2 && (this.model.updateReadTime(a3, o2[t3]), this.service.emit("onConversationReadTimeUpdated", a3, o2[t3]));
    }), Object.keys(a2).forEach((t3) => {
      var o3 = this.core.V2NIMConversationIdUtil.teamConversationId(t3), m2 = this.model.getReadTime(o3);
      a2[t3] > m2 && (this.model.updateReadTime(o3, a2[t3]), this.service.emit("onConversationReadTimeUpdated", o3, a2[t3]));
    });
  }
  v2LocalConvSyncSuperTeamReadTimeHandler(t2) {
    var o2 = t2.content.superTeam.m_map;
    this.logger.log("v2SyncLocalSuperTeamConvAck::", o2), Object.keys(o2).forEach((t3) => {
      var a2 = this.core.V2NIMConversationIdUtil.superTeamConversationId(t3), m2 = this.model.getReadTime(a2);
      o2[t3] > m2 && (this.model.updateReadTime(a2, o2[t3]), this.service.emit("onConversationReadTimeUpdated", a2, o2[t3]));
    });
  }
  v2LocalConvMultiSyncReadTimeHandler(t2) {
    var o2 = t2.content, a2 = `${0 === o2.scene ? "p2p" : 1 === o2.scene ? "team" : "super_team"}-${o2.to}`, { type: m2, target: u2 } = getConvInfoFromSessionId(a2, "-"), h2 = this.core.V2NIMConversationIdUtil.conversationId(m2, u2), g2 = this.model.getById(h2), I2 = null == g2 ? void 0 : g2.unreadCount, M2 = this.model.getReadTime(h2);
    o2.timetag <= M2 ? this.logger.warn(`v2LocalConvMultiSyncReadTimeHandler: ${h2} do not need update ack ${o2.timetag}/${M2}`) : (this.model.updateReadTime(h2, o2.timetag), this.service.emit("onConversationReadTimeUpdated", h2, o2.timetag), g2 ? (g2 = this.service.compute.computeConvWithUnread(g2), this.model.upsert(g2), this.service.unread.digestUnreadCountChange(), void 0 === I2 && g2.unreadCount > 0 ? this.service.triggerConversationCreated(g2) : "number" == typeof I2 && g2.unreadCount !== I2 && this.service.triggerConversationChanged([g2])) : this.logger.log(`v2LocalConvMultiSyncReadTimeHandler: ${h2} not exist`));
  }
  v2LocalConvSuperTeamMultiSyncReadTimeHandler(t2) {
    this.v2LocalConvMultiSyncReadTimeHandler(t2);
  }
  v2LocalConvStickTopMultiSyncAddHandler(t2) {
    var { data: o2 } = t2.content, { target: a2, type: m2 } = getConvInfoFromSessionId(o2.id), u2 = this.core.V2NIMConversationIdUtil.conversationId(m2, a2);
    this.model.updateStickTop(u2, true);
    var h2 = this.model.getById(u2);
    h2 && (h2.stickTop = true, h2.updateTime = h2.updateTime > o2.updateTime ? h2.updateTime : o2.updateTime, h2.sortOrder = this.service.compute.computeSortOrder(true, o2.updateTime), this.model.upsert(h2), this.service.triggerConversationChanged([h2]));
  }
  v2LocalConvStickTopMultiSyncDeleteHandler(t2) {
    var { data: o2, timetag: a2 } = t2.content, { target: m2, type: u2 } = getConvInfoFromSessionId(o2.id), h2 = this.core.V2NIMConversationIdUtil.conversationId(u2, m2);
    this.model.updateStickTop(h2, false);
    var g2 = this.model.getById(h2);
    g2 && (g2.stickTop = false, g2.updateTime = g2.updateTime > a2 ? g2.updateTime : a2, g2.sortOrder = this.service.compute.computeSortOrder(false, a2), this.model.upsert(g2), this.service.triggerConversationChanged([g2]));
  }
};
var V2NIMLocalConversationEventImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.model = this.service.model, this.compute = this.service.compute, this.logger = this.core.logger;
  }
  setListener() {
    this.core.eventBus.on("V2NIMLoginService/syncing", () => this.service.emit("onSyncStarted")), this.core.eventBus.on("V2NIMLoginService/syncDone", this.onSyncDone.bind(this)), this.core.eventBus.on("V2NIMMessageService/sendMessage", this.sendMsg.bind(this)), this.core.eventBus.on("V2NIMMessageService/onMsg", this.recvMsg.bind(this)), this.core.eventBus.on("V2NIMMessageService/modifyMsg", this.modifyMsg.bind(this)), this.core.eventBus.on("V2NIMMessageService/deleteMessages", this.deleteMessages.bind(this)), this.core.eventBus.on("V2NIMMessageService/revokeMessages", this.deleteMessages.bind(this)), this.core.eventBus.on("V2NIMMessageLogUtil/onClearHistoryNotifications", this.clearMessages.bind(this)), this.core.eventBus.on("V2NIMMessageService/roamingMsgs", this.generateConv.bind(this)), this.core.eventBus.on("V2NIMMessageService/offlineMsgs", this.generateConv.bind(this)), this.core.eventBus.on("V2NIMSettingService/setMute", this.setMute.bind(this));
  }
  beforeEmit(t2, ...o2) {
    var a2, m2 = `${this.service.name}::emit ${t2.toString()}`;
    if ("onConversationCreated" === t2) {
      var u2 = o2[0], h2 = null === (a2 = u2.lastMessage) || void 0 === a2 ? void 0 : a2.messageRefer;
      this.logger.log(`${m2}`, `id:${u2.conversationId};unread:${u2.unreadCount};lastMsg:${(null == h2 ? void 0 : h2.messageClientId) || ""}/${(null == h2 ? void 0 : h2.messageServerId) || ""}`);
    } else if ("onConversationChanged" === t2) {
      var g2 = o2[0];
      this.logger.log(`${m2}`, g2.map((t3) => {
        var o3, a3 = null === (o3 = t3.lastMessage) || void 0 === o3 ? void 0 : o3.messageRefer;
        return `id:${t3.conversationId};unread:${t3.unreadCount};lastMsg:${(null == a3 ? void 0 : a3.messageClientId) || ""}/${(null == a3 ? void 0 : a3.messageServerId) || ""}`;
      }));
    } else
      this.logger.log(`${m2}`, ...o2);
  }
  onSyncDone(t2) {
    if (t2)
      this.service.emit("onSyncFailed", t2);
    else {
      var o2 = this.model.getAll();
      (o2 = o2.map((t3) => {
        var o3 = t3.conversationId, a2 = this.compute.computeConvByMsgsCache(o3);
        return a2 = this.compute.computeConvWithUnread(a2), a2 = this.compute.computeFromExternal(a2), this.model.upsert(a2), this.model.getById(o3);
      })).length > 0 && (this.service.triggerConversationChanged(o2), this.service.unread.resetTotalAfterSyncDone()), this.service.emit("onSyncFinished");
    }
  }
  generateConv(t2) {
    uniq(t2.map((t3) => t3.conversationId)).forEach((t3) => {
      var o2 = this.compute.computeConvByMsgsCache(t3);
      this.model.upsert(o2);
    });
  }
  setMute(t2, o2) {
    var a2 = this.model.getById(t2);
    a2 && a2.mute !== o2 && (a2.mute = o2, this.model.upsert(a2), this.service.triggerConversationChanged([a2]));
  }
  deleteMessages(t2) {
    var o2 = /* @__PURE__ */ new Set();
    t2.forEach((t3) => {
      var a3, m2 = t3.messageRefer.conversationId, u2 = this.model.getById(m2);
      if (u2) {
        if (t3.messageRefer.messageClientId === (null === (a3 = u2.lastMessage) || void 0 === a3 ? void 0 : a3.messageRefer.messageClientId)) {
          o2.add(m2);
          var h2 = this.core.V2NIMMessageService.model.getLastMessageOfConversation(m2);
          u2.lastMessage = h2 ? formatLastMessageFromMessage(this.core, h2, 0, h2.sendingState) : void 0;
        }
        var g2 = this.model.getReadTime(m2);
        if (u2.unreadCount > 0 && this.service.unread.isMessageReferUnread(t3.messageRefer, g2) && (o2.add(m2), u2.unreadCount--), "deleteTime" in t3)
          t3.deleteTime > u2.updateTime && (u2.updateTime = t3.deleteTime, u2.sortOrder = this.compute.computeSortOrder(u2.stickTop, u2.updateTime));
        else {
          var I2 = this.core.timeOrigin.getNTPTime();
          u2.updateTime = I2, u2.sortOrder = this.compute.computeSortOrder(u2.stickTop, I2);
        }
        this.model.upsert(u2);
      }
    });
    var a2 = Array.from(o2);
    !this.core.V2NIMLoginService.dataSync.checkSyncing() && a2.length > 0 && (this.service.triggerConversationChanged(a2.map((t3) => this.model.getById(t3))), this.service.unread.digestUnreadCountChange());
  }
  sendMsg(t2) {
    var o2 = t2.conversationId, a2 = this.model.getById(o2);
    if (a2) {
      var m2 = a2.lastMessage, u2 = this.updateCauseMessage(a2, t2);
      m2 !== u2.lastMessage && this.service.triggerConversationChanged([u2]);
    } else {
      var h2 = this.createCauseMessage(o2, t2);
      if (!h2)
        return;
      this.service.triggerConversationCreated(h2);
    }
  }
  recvMsg(t2) {
    var o2 = t2.conversationId, a2 = this.model.getById(o2);
    if (a2) {
      var m2 = a2.lastMessage, u2 = a2.unreadCount, h2 = this.updateCauseMessage(a2, t2);
      h2 = this.compute.computeConvWithUnread(h2, t2);
      var g2 = m2 !== (h2 = this.compute.computeFromExternal(h2)).lastMessage, I2 = u2 !== h2.unreadCount;
      this.model.upsert(h2), (g2 || I2) && this.service.triggerConversationChanged([h2]);
    } else {
      var M2 = this.createCauseMessage(o2, t2);
      if (!M2)
        return;
      M2 = this.compute.computeConvWithUnread(M2, t2), M2 = this.compute.computeFromExternal(M2), this.model.upsert(M2), this.service.triggerConversationCreated(M2);
    }
    this.service.unread.digestUnreadCountChange();
  }
  updateCauseMessage(t2, o2) {
    return t2 = this.compute.computeConvWithLastMsg(t2, o2), this.model.upsert(t2), this.model.getById(t2.conversationId);
  }
  createCauseMessage(t2, o2) {
    var a2, m2, u2;
    if (false !== (null === (a2 = o2.messageConfig) || void 0 === a2 ? void 0 : a2.unreadEnabled) || false !== (null === (m2 = o2.messageConfig) || void 0 === m2 ? void 0 : m2.lastMessageUpdateEnabled)) {
      var h2 = this.core.V2NIMConversationIdUtil.parseConversationType(t2), g2 = this.model.getStickTop(t2), I2 = false === (null === (u2 = o2.messageConfig) || void 0 === u2 ? void 0 : u2.lastMessageUpdateEnabled) ? void 0 : formatLastMessageFromMessage(this.core, o2, 0, o2.sendingState), M2 = this.core.timeOrigin.getNTPTime(), _2 = { conversationId: t2, type: h2, createTime: I2 ? o2.createTime : M2, updateTime: I2 ? o2.createTime : M2, sortOrder: this.compute.computeSortOrder(g2, I2 ? o2.createTime : M2), stickTop: g2, localExtension: "", lastMessage: I2, unreadCount: 0 };
      return this.model.upsert(_2), _2;
    }
  }
  clearMessages(t2) {
    var o2 = /* @__PURE__ */ new Set();
    t2.forEach((t3) => {
      var { conversationId: a3, deleteTime: m2 } = t3, u2 = this.model.getById(a3);
      u2 && (u2.unreadCount > 0 && (u2.unreadCount = 0, o2.add(a3)), u2.lastMessage && u2.lastMessage.messageRefer.createTime <= t3.deleteTime && (u2.lastMessage = void 0, o2.add(a3)), m2 > u2.updateTime && (u2.updateTime = m2, u2.sortOrder = this.compute.computeSortOrder(u2.stickTop, u2.updateTime)), this.model.upsert(u2));
    });
    var a2 = Array.from(o2);
    !this.core.V2NIMLoginService.dataSync.checkSyncing() && a2.length > 0 && (this.service.triggerConversationChanged(a2.map((t3) => this.model.getById(t3))), this.service.unread.digestUnreadCountChange());
  }
  modifyMsg(t2) {
    var o2, a2 = t2.conversationId, m2 = t2.messageClientId, u2 = this.model.getById(a2), h2 = this.core.V2NIMMessageService.model.getMessageById(m2);
    if (u2 || h2)
      if (u2)
        t2.messageClientId === (null === (o2 = u2.lastMessage) || void 0 === o2 ? void 0 : o2.messageRefer.messageClientId) && (u2.lastMessage = formatLastMessageFromMessage(this.core, t2, 0, t2.sendingState), this.service.triggerConversationChanged([u2]));
      else {
        var g2 = this.createCauseMessage(a2, t2);
        if (!g2)
          return;
        this.service.triggerConversationCreated(g2);
      }
  }
};
var hi = { type: "array", itemRules: { type: "enum", values: [1, 2, 3] }, min: 1 };
var V2NIMLocalConversationServiceImpl = class extends V2Service {
  constructor(t2, o2 = {}) {
    super("V2NIMLocalConversationService", t2), this.config = {}, this.model = new V2NIMLocalConversationModelImpl(), this.unread = new V2NIMLocalConversationUnreadImpl(this.core, this), this.compute = new V2NIMLocalConversationComputeImpl(this.core, this), this.event = new V2NIMLocalConversationEventImpl(this.core, this), this.handler = new V2NIMLocalConversationHandlerImpl(this.core, this), this.core._registerDep(V2NIMConversationIdUtilImpl, "V2NIMConversationIdUtil"), this.core._registerDep(V2NIMMessageServiceImpl, "V2NIMMessageService"), "v2" === this.core.options.apiVersion && (registerParser({ cmdMap: ni, cmdConfig: li }), this.setOptions(o2), this.setListener());
  }
  setOptions(t2) {
    this.config = Object.assign(this.config, t2);
  }
  setListener() {
    this.event.setListener();
  }
  reset() {
    this.model.reset(), this.unread.reset();
  }
  emit(t2, ...o2) {
    return this.event.beforeEmit(t2, ...o2), super.emit(t2, ...o2);
  }
  getConversationList(t2, o2) {
    this.checkV2(), validate({ offset: { type: "number", min: 0 } }, { offset: t2 }, "", true), validate({ limit: { type: "number", min: 1 } }, { limit: o2 }, "", true), this.core.V2NIMLoginService.checkIllegalState();
    var a2 = this.model.getByOption(t2, o2, {});
    return a2.conversationList = a2.conversationList.map((t3) => this.compute.computeFromExternal(t3)), Promise.resolve(a2);
  }
  getConversationListByOption(t2, o2, a2) {
    this.checkV2(), validate({ offset: { type: "number", min: 0 } }, { offset: t2 }, "", true), validate({ limit: { type: "number", min: 1 } }, { limit: o2 }, "", true), validate({ conversationTypes: { type: "array", itemType: "number", required: false }, onlyUnread: { type: "boolean", required: false } }, a2, "option", true), this.core.V2NIMLoginService.checkIllegalState();
    var m2 = this.model.getByOption(t2, o2, a2);
    return m2.conversationList = m2.conversationList.map((t3) => this.compute.computeFromExternal(t3)), Promise.resolve(m2);
  }
  getConversation(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validateConversationId(this.core.account, t2);
      var o2 = this.model.getById(t2);
      if (o2)
        return this.compute.computeFromExternal(o2);
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST });
    });
  }
  getConversationListByIds(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate({ conversationIds: { type: "array", itemType: "string", min: 1 } }, { conversationIds: t2 }, "", true), this.core.V2NIMLoginService.checkIllegalState();
      var o2 = t2.map((t3) => this.model.getById(t3)).filter((t3) => !!t3);
      return o2 = o2.map((t3) => this.compute.computeFromExternal(t3));
    });
  }
  createConversation(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validateConversationId(this.core.account, t2);
      var o2 = this.model.getById(t2);
      if (o2)
        return this.compute.computeFromExternal(o2);
      var a2 = this.compute.computeConvByMsgsCache(t2, { updateTime: this.core.timeOrigin.getNTPTime() });
      a2 = this.compute.computeConvWithUnread(a2), a2 = this.compute.computeFromExternal(a2), this.model.upsert(a2);
      var m2 = this.model.getById(t2);
      return this.triggerConversationCreated(m2), m2;
    });
  }
  deleteConversation(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validateConversationId(this.core.account, t2), validate({ clearMessage: { type: "boolean", required: false } }, { clearMessage: o2 }, "", true), yield this.unread.markConversationRead(t2);
      var a2 = this.model.deleteById(t2);
      if (!a2)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST });
      o2 && this.core.V2NIMMessageService.model.deleteMessages(t2), !!(a2 && a2.unreadCount > 0) && this.unread.digestUnreadCountChange(), this.emit("onConversationDeleted", [t2]);
    });
  }
  deleteConversationListByIds(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate({ conversationIds: { type: "array", itemType: "string", min: 1 } }, { conversationIds: t2 }, "", true), validate({ clearMessage: { type: "boolean", required: false } }, { clearMessage: o2 }, "", true), yield this.unread.markMultiConversationRead(t2);
      var a2 = false;
      return t2.forEach((t3) => {
        o2 && this.core.V2NIMMessageService.model.deleteMessages(t3), this.model.deleteById(t3) && (a2 = true);
      }), a2 && this.unread.digestUnreadCountChange(), this.emit("onConversationDeleted", t2), [];
    });
  }
  getStickTopConversationList() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), this.model.getStickTopList();
    });
  }
  stickTopConversation(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validateConversationId(this.core.account, t2), validate({ stickTop: { type: "boolean" } }, { stickTop: o2 }, "", true);
      var a2 = this.model.getById(t2);
      if ((null == a2 ? void 0 : a2.stickTop) !== o2) {
        var m2 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(t2), u2 = this.core.V2NIMConversationIdUtil.parseConversationType(t2), h2 = yield this.core.sendCmd(o2 ? "v2LocalConvStickTopAdd" : "v2LocalConvStickTopDelete", { tag: { id: getSessionIdFromConvInfo(u2, m2) } });
        this.model.updateStickTop(t2, o2);
        var g2 = h2.content.timetag || h2.content.data.updateTime;
        this.model.upsert({ conversationId: t2, type: u2, stickTop: o2, updateTime: g2, sortOrder: this.compute.computeSortOrder(o2, g2) });
        var I2 = [this.model.getById(t2)];
        this.triggerConversationChanged(I2);
      }
    });
  }
  updateConversationLocalExtension(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validateConversationId(this.core.account, t2), validate({ localExtension: { type: "string" } }, { localExtension: o2 }, "", true);
      var a2 = this.model.getById(t2);
      if (!a2)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST });
      if (a2.localExtension !== o2) {
        var m2 = Object.assign(Object.assign({}, a2), { localExtension: o2 });
        this.model.upsert(m2), this.triggerConversationChanged([m2]);
      }
    });
  }
  getTotalUnreadCount() {
    return this.checkV2(), this.unread.getTotalUnreadCount() || 0;
  }
  getUnreadCountByIds(t2) {
    this.checkV2(), validate({ conversationIds: { type: "array", itemType: "string", min: 1 } }, { conversationIds: t2 }, "", true);
    var o2 = this.unread.getUnreadCountByIds(t2);
    return Promise.resolve(o2);
  }
  getUnreadCountByFilter(t2) {
    this.checkV2(), this.valiteFilter(t2);
    var o2 = this.unread.getUnreadCountByFilter(t2);
    return Promise.resolve(o2);
  }
  clearTotalUnreadCount() {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.checkLogin();
      var t2 = this.model.getAll();
      yield this.unread.markMultiConversationRead(t2.map((t3) => t3.conversationId)), this.unread.clearUnreadCount(t2);
    });
  }
  clearUnreadCountByIds(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.checkLogin(), validate({ conversationIds: { type: "array", itemType: "string", min: 1 } }, { conversationIds: t2 }, "", true);
      var o2 = [], a2 = [], m2 = new RegExp(`^${this.core.account}\\|[1-3]\\|`);
      if (t2.forEach((t3) => {
        m2.test(t3) ? o2.push(t3) : a2.push(t3);
      }), o2.length > 0) {
        var u2 = o2.map((t3) => this.model.getById(t3)).filter((t3) => !!t3);
        yield this.unread.markMultiConversationRead(o2), this.unread.clearUnreadCount(u2);
      }
      return a2.map((t3) => ({ conversationId: t3, error: new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST }) }));
    });
  }
  clearUnreadCountByTypes(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.checkLogin(), validate({ types: hi }, { types: t2 }, "", true);
      var o2 = this.model.getByOption(0, 1e3, { conversationTypes: t2 });
      yield this.unread.markMultiConversationRead(o2.conversationList.map((t3) => t3.conversationId)), this.unread.clearUnreadCount(o2.conversationList);
    });
  }
  subscribeUnreadCountByFilter(t2) {
    var o2;
    this.checkV2(), this.checkLogin(), this.valiteFilter(t2), 0 === (null === (o2 = t2.conversationTypes) || void 0 === o2 ? void 0 : o2.length) && delete t2.conversationTypes, this.unread.addFilter(t2);
  }
  unsubscribeUnreadCountByFilter(t2) {
    var o2;
    this.checkV2(), this.checkLogin(), this.valiteFilter(t2), 0 === (null === (o2 = t2.conversationTypes) || void 0 === o2 ? void 0 : o2.length) && delete t2.conversationTypes, this.unread.deleteFilter(t2);
  }
  getConversationReadTime(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), validateConversationId(this.core.account, t2), this.model.getReadTime(t2);
    });
  }
  markConversationRead(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this.checkLogin(), validateConversationId(this.core.account, t2), this.unread.markConversationRead(t2);
    });
  }
  setCurrentConversation(t2) {
    this.checkV2(), t2 && validateConversationId(this.core.account, t2), this.unread.setCurrentConversation(t2);
  }
  valiteFilter(t2) {
    if (validate({ filter: { type: "object", required: true, rules: { conversationTypes: { type: "array", itemType: "number", required: false }, ignoreMuted: { type: "boolean", required: false } } } }, { filter: t2 }, "", true), void 0 === t2.conversationTypes && true !== t2.ignoreMuted)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "Filter cannot be empty" } });
  }
  triggerConversationChanged(t2) {
    t2 = t2.map((t3) => this.compute.computeFromExternal(t3)), (t2 = JSON.parse(JSON.stringify(t2))).forEach((t3) => {
      t3.lastMessage || (t3.lastMessage = void 0), delete t3.lastMessageState;
    }), this.emit("onConversationChanged", t2);
  }
  triggerConversationCreated(t2) {
    t2 = this.compute.computeFromExternal(t2), delete (t2 = JSON.parse(JSON.stringify(t2))).lastMessageState, this.emit("onConversationCreated", t2);
  }
};
var V2NIMConversationModelImpl = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.readTimeMap = /* @__PURE__ */ new Map();
  }
  set(t2) {
    t2.forEach((t3) => {
      t3 = this.processConversation(t3), this.map.set(t3.conversationId, t3);
    });
  }
  reset() {
    this.map.clear(), this.readTimeMap.clear();
  }
  count() {
    return this.map.size;
  }
  sort() {
    var t2 = Array.from(this.map.values());
    t2.sort((t3, o2) => o2.sortOrder - t3.sortOrder), this.map.clear(), t2.forEach((t3) => {
      this.map.set(t3.conversationId, t3);
    });
  }
  processConversation(t2) {
    return "string" == typeof t2.lastMessage && delete t2.lastMessage, void 0 === t2.localExtension && (t2.localExtension = ""), t2;
  }
  getById(t2) {
    return this.map.get(t2);
  }
  getStickTopList() {
    return Array.from(this.map.values()).filter((t2) => t2.stickTop).sort((t2, o2) => o2.sortOrder - t2.sortOrder);
  }
  getAll() {
    return Array.from(this.map.values()).sort((t2, o2) => o2.sortOrder - t2.sortOrder);
  }
  getByOption(t2, o2, a2) {
    var { conversationTypes: m2, onlyUnread: u2, conversationGroupIds: h2 } = a2, g2 = [];
    this.map.forEach((t3) => {
      if ((!(m2 && m2.length > 0) || m2.includes(t3.type)) && (!u2 || t3.unreadCount) && (!a2.ignoreMuted || !t3.mute)) {
        if (h2) {
          var o3 = t3.groupIds, I3 = (null == o3 ? void 0 : o3.length) || 0;
          if (0 === h2.length && I3 > 0)
            return;
          if (h2.length > 0 && 0 === I3)
            return;
          if (h2.length > 0 && I3 > 0 && !h2.some((t4) => o3 && o3.includes(t4)))
            return;
        }
        g2.push(t3);
      }
    }), g2 = g2.sort((t3, o3) => o3.sortOrder - t3.sortOrder);
    var I2 = 0;
    t2 > 0 && (I2 = findIndexWithinTargetValue(g2, "sortOrder", t2), g2[I2] && g2[I2].sortOrder === t2 && (I2 += 1));
    var M2 = g2.slice(I2).length;
    return (g2 = g2.slice(I2, I2 + o2)).length > 0 ? { offset: M2 > o2 ? g2[g2.length - 1].sortOrder : 0, finished: !(M2 > o2), conversationList: g2 } : { offset: 0, finished: true, conversationList: g2 };
  }
  upsert(t2) {
    var o2 = t2.conversationId, a2 = this.map.get(o2);
    if (!a2)
      return t2 = this.processConversation(Object.assign({}, t2)), this.map.set(o2, t2), t2.unreadCount > 0;
    var m2 = t2.unreadCount !== a2.unreadCount, u2 = Object.assign({}, a2, t2);
    return u2 = this.processConversation(u2), this.map.set(o2, u2), m2;
  }
  bulkUpsert(t2) {
    var o2 = false;
    return t2.forEach((t3) => {
      this.upsert(t3) && (o2 = true);
    }), o2;
  }
  deleteById(t2) {
    var o2 = this.getById(t2);
    if (o2)
      return this.map.delete(t2), o2;
  }
  updateReadTime(t2, o2) {
    this.readTimeMap.set(t2, o2);
  }
  getReadTime(t2) {
    return this.readTimeMap.get(t2) || 0;
  }
};
function isEqual(t2, o2) {
  var a2 = typeof t2;
  if (a2 !== typeof o2)
    return false;
  if ("object" === a2) {
    if (Object.prototype.toString.call(t2) !== Object.prototype.toString.call(o2))
      return false;
    if (Array.isArray(t2)) {
      if (t2.length !== o2.length)
        return false;
      for (var m2 = 0; m2 < t2.length; m2++)
        if (!isEqual(t2[m2], o2[m2]))
          return false;
      return true;
    }
    if (t2 instanceof RegExp && o2 instanceof RegExp)
      return t2.toString() === o2.toString();
    if (t2 instanceof Date && o2 instanceof Date)
      return t2.getTime() === o2.getTime();
    if (null === t2 && null === o2)
      return true;
    if (Object.keys(t2).length !== Object.keys(o2).length)
      return false;
    for (var u2 in t2)
      if (!isEqual(t2[u2], o2[u2]))
        return false;
    return true;
  }
  return t2 === o2;
}
var V2NIMConversationVersionCacheImpl = class {
  constructor(t2, o2) {
    this.fieldVersion = {}, this.conversationIdsForBackFill = {}, this.tempPacket = [], this.isSyncing = false, this.nextCursor = 0, this.core = t2, this.service = o2;
  }
  reset() {
    this.tempPacket = [], this.fieldVersion = {}, this.conversationIdsForBackFill = {}, this.isSyncing = false, this.nextCursor = 0;
  }
  doSync() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2;
      this.isSyncing = true, this.service.emit("onSyncStarted"), this.core.V2NIMLoginService.dataSync.switchDataSync({ type: 1, state: 2, subType: "conversationSync" });
      try {
        t2 = yield this.core.sendCmd("v2ConversationSync", { tag: { cursor: this.nextCursor } });
      } catch (t3) {
        var o2 = t3;
        if (o2.code === Me.V2NIM_ERROR_CODE_CANCELLED)
          return;
        return this.isSyncing = false, this.service.emit("onSyncFailed", o2), this.core.V2NIMLoginService.dataSync.switchDataSync({ type: 1, state: 3, error: o2, subType: "conversationSync" }), void this.processTempPacket();
      }
      var a2 = 0 === parseInt(get(t2, "content.info.syncType")), m2 = get(t2, "content.info.nextCursor");
      this.doSyncAndSuccess(a2, m2);
    });
  }
  doSyncAndSuccess(t2, o2) {
    t2 && this.service.model.sort(), this.isSyncing = false, this.nextCursor = parseInt(o2) || 0, this.service.unread.resetTotalAfterSyncDone(), this.service.unread.digestUnreadCountChange(), this.service.emit("onSyncFinished"), this.core.V2NIMLoginService.dataSync.switchDataSync({ type: 1, state: 3, subType: "conversationSync" }), this.processTempPacket();
  }
  setBackFillIds(t2) {
    return t2.forEach((t3) => {
      if (2 === t3.lastMessageState && this.service.compute.hasMessageService) {
        this.conversationIdsForBackFill[t3.conversationId] = true;
        var o2 = this.core.V2NIMMessageService.model.getLastMessageOfConversation(t3.conversationId);
        t3.lastMessage = o2 ? formatLastMessageFromMessage(this.core, o2, t3.lastMessageState, o2.sendingState) : "";
      } else
        this.conversationIdsForBackFill[t3.conversationId] = false;
      delete t3.lastMessageState;
    }), t2;
  }
  recvConversationFromSyncAction(t2) {
    var { syncType: o2 } = get(t2, "content.info"), a2 = formatConversationFields(this.core, get(t2, "content.datas"));
    0 === (o2 = parseInt(o2)) ? (a2.forEach((t3) => {
      this.initFieldVersion(t3.conversationId, t3.version);
    }), a2 = this.setBackFillIds(a2), this.setModel(a2)) : (a2 = this.setBackFillIds(a2), this.recvConversationForCreated(a2) < a2.length && this.recvConversationForChanged(a2));
  }
  recvConversation(t2) {
    if (this.isSyncing)
      this.tempPacket.push(t2);
    else {
      var o2 = formatConversationFields(this.core, get(t2, "content.datas")).filter((t3) => !!t3.conversationId), a2 = get(t2, "content.info"), m2 = o2.map((t3) => `id:${t3.conversationId}, ver:${t3.version}`).join(";");
      if (this.core.logger.getDebugMode() ? this.core.logger.debug(`V2NIMConversation::recvConversation: ${m2}.`, a2, o2) : this.core.logger.log(`V2NIMConversation::recvConversation: ${m2}.`, a2), 2 === a2.type) {
        var u2 = o2.map((t3) => (delete this.fieldVersion[t3.conversationId], this.service.model.deleteById(t3.conversationId), t3.conversationId));
        return this.service.emit("onConversationDeleted", u2), void this.service.unread.digestUnreadCountChange();
      }
      if (12 !== a2.type)
        a2.type, o2 = this.setBackFillIds(o2), this.recvConversationForCreated(o2) < o2.length && this.recvConversationForChanged(o2);
      else
        this.compareAndClearUnreadInModel(a2);
    }
  }
  recvConversationForCreated(t2) {
    var o2 = t2.filter((t3) => !this.fieldVersion[t3.conversationId]);
    return o2.reduce((t3, o3) => {
      if (!this.fieldVersion[o3.conversationId]) {
        this.initFieldVersion(o3.conversationId, o3.version), t3 = !!this.updateModel(o3) || t3;
        var a2 = this.service.model.getById(o3.conversationId);
        return a2 && this.service.triggerConversationCreated(a2), t3;
      }
      return t3;
    }, false) && this.service.unread.digestUnreadCountChange(), o2.length;
  }
  recvConversationForChanged(t2) {
    var o2 = this.bulkCompare(t2);
    if (0 !== o2.length) {
      this.bulkUpdateModel(o2);
      var a2 = o2.map((t3) => this.service.model.getById(t3.conversationId)).filter((t3) => !!t3);
      this.service.triggerConversationChanged(a2);
    }
  }
  processTempPacket() {
    this.tempPacket.forEach((t2) => {
      this.recvConversation(t2);
    }), this.tempPacket = [];
  }
  bulkCompare(t2) {
    return t2.map((t3) => this.compare(t3)).filter((t3) => !!t3);
  }
  compare(t2) {
    var { version: o2, conversationId: a2, deleteFlag: m2, type: u2 } = t2, h2 = {}, g2 = 0;
    return ["stickTop", "groupIds", "serverExtension", "localExtension", "lastMessage", "lastMessageState", "unreadCount", "sortOrder", "createTime", "updateTime", "lastReadTime"].forEach((m3) => {
      var u3 = m3;
      if (void 0 !== t2[u3]) {
        var I2 = this.fieldVersion[a2];
        I2 && "number" == typeof I2[u3] && I2[u3] >= o2 || (this.fieldVersion[a2] = this.fieldVersion[a2] || {}, this.fieldVersion[a2][u3] = o2, h2[u3] = t2[u3], g2 += 1);
      }
    }), g2 ? Object.assign(Object.assign({}, h2), { conversationId: a2, deleteFlag: m2, version: o2, type: u2 }) : void 0;
  }
  bulkUpdateModel(t2) {
    var o2 = false;
    t2.forEach((t3) => {
      this.updateModel(t3) && (o2 = true);
    }), o2 && this.service.unread.digestUnreadCountChange();
  }
  initFieldVersion(t2, o2) {
    this.fieldVersion[t2] = { stickTop: o2, groupIds: o2, serverExtension: o2, lastMessage: o2, lastMessageState: o2, unreadCount: o2, sortOrder: o2, createTime: o2, updateTime: o2, lastReadTime: o2 };
  }
  initConversation(t2, o2) {
    var a2 = Date.now();
    return Object.assign({ conversationId: t2, type: this.core.V2NIMConversationIdUtil.parseConversationType(t2), stickTop: false, localExtension: "", serverExtension: "", unreadCount: 0, lastReadTime: 0, createTime: a2, updateTime: a2, sortOrder: a2 }, o2);
  }
  updateModel(t2) {
    var { deleteFlag: o2, conversation: a2 } = formatConversationByField(t2);
    if (o2) {
      var m2 = this.service.model.deleteById(a2.conversationId);
      return !!(m2 && m2.unreadCount > 0);
    }
    return this.service.model.upsert(a2);
  }
  setModel(t2) {
    var o2 = t2.filter((t3) => !t3.deleteFlag).map((t3) => formatConversationByField(t3).conversation);
    this.service.model.set(o2);
  }
  updateModelWithLastMessage(t2, o2, a2, m2) {
    var u2 = this.service.model.getById(t2), h2 = o2 ? formatLastMessageFromMessage(this.core, o2, a2, m2) : void 0;
    if (!isEqual(null == u2 ? void 0 : u2.lastMessage, h2))
      if (u2) {
        var g2 = Object.assign(Object.assign({}, u2), { sortOrder: h2 ? u2.stickTop ? h2.messageRefer.createTime + 1e15 : h2.messageRefer.createTime : u2.sortOrder, lastMessage: h2 });
        this.service.model.upsert(g2), this.service.triggerConversationChanged([g2]);
      } else {
        this.initFieldVersion(t2, -1);
        var I2 = this.initConversation(t2, { lastMessage: h2 });
        this.service.model.upsert(I2), this.service.triggerConversationCreated(I2);
      }
  }
  updateModelByRevoke(t2) {
    var o2 = [];
    t2.forEach((t3) => {
      var { postscript: a2, messageRefer: m2 } = t3, u2 = __rest(t3, ["postscript", "messageRefer"]), h2 = m2.conversationId, g2 = this.service.model.getById(h2);
      g2 && g2.lastMessage && g2.lastMessage.messageRefer.messageClientId === m2.messageClientId && 1 !== g2.lastMessage.lastMessageState && (g2.lastMessage.lastMessageState = 1, a2 && (g2.lastMessage.text = a2), Object.assign(g2.lastMessage, u2), this.service.model.upsert(g2), o2.push(g2));
    }), o2.length > 0 && this.service.triggerConversationChanged(o2);
  }
  compareAndUpdateModel(t2) {
    this.core.logger.log("V2NIMConversation::compareAndUpdateModel", t2.map((t3) => t3.conversationId));
    var o2 = false, a2 = [];
    t2.forEach((t3) => {
      var m2 = this.compare(t3);
      if (m2) {
        var u2 = this.service.model.getById(t3.conversationId);
        this.updateModel(m2) && (o2 = true);
        var h2 = this.service.model.getById(t3.conversationId);
        h2 && (u2 ? a2.push(h2) : this.service.triggerConversationCreated(h2));
      }
    }), a2.length > 0 && this.service.triggerConversationChanged(a2), o2 && this.service.unread.digestUnreadCountChange();
  }
  compareAndDeleteModel(t2) {
    this.core.logger.log("V2NIMConversation::compareAndDeleteModel", t2);
    var o2 = t2.reduce((t3, o3) => {
      delete this.fieldVersion[o3];
      var a2 = this.service.model.deleteById(o3);
      return !!!!(a2 && a2.unreadCount > 0) || t3;
    }, false);
    this.service.emit("onConversationDeleted", t2), o2 && this.service.unread.digestUnreadCountChange();
  }
  compareAndDeleteGroupInModel(t2, o2) {
    this.core.logger.log("V2NIMConversation::compareAndDeleteGroupInModel", t2, o2);
    var a2 = [];
    Object.keys(this.fieldVersion).forEach((m2) => {
      var u2 = this.fieldVersion[m2];
      if (void 0 === u2.groupIds || t2 > u2.groupIds) {
        u2.groupIds = t2;
        var h2 = this.service.model.getById(m2);
        if (h2 && h2.groupIds && h2.groupIds.length > 0) {
          var g2 = h2.groupIds.filter((t3) => t3 !== o2);
          if (g2.length !== h2.groupIds.length) {
            var I2 = Object.assign(Object.assign({}, h2), { groupIds: g2 });
            this.service.model.upsert(I2), I2 && a2.push(I2);
          }
        }
      }
    }), a2.length > 0 && this.service.triggerConversationChanged(a2);
  }
  compareAndClearUnreadInModel(t2) {
    var { oneClickClearUnreadType: o2, oneClickClearUnreadVersion: a2, oneClickClearUnreadLastReadTime: m2, oneClickClearUnreadConversationType: u2, oneClickClearUnreadGroupId: h2 } = t2;
    this.core.logger.log(`V2NIMConversation::compareAndClearUnreadInModel.ver:${a2};type:${o2};lastReadTime:${m2};filter:${u2 || ""};grounp:${h2 || ""}`);
    var g2 = [], I2 = [];
    if (1 === o2)
      I2 = this.service.model.getAll();
    else if (u2 || h2) {
      var M2 = this.service.model.count();
      I2 = this.service.model.getByOption(0, M2, { conversationTypes: u2, conversationGroupIds: h2 ? [h2] : void 0 }).conversationList;
    }
    I2.forEach((t3) => {
      var o3 = t3.conversationId, u3 = this.fieldVersion[o3];
      if (void 0 === u3.unreadCount || a2 > u3.unreadCount) {
        u3.unreadCount = a2, u3.lastReadTime = a2;
        var h3 = t3.unreadCount, I3 = Object.assign(Object.assign({}, t3), { lastReadTime: m2, unreadCount: 0 });
        this.service.model.upsert(I3), h3 > 0 && g2.push(I3);
      }
    }), g2.length > 0 && this.service.triggerConversationChanged(g2), this.service.unread.digestUnreadCountChange();
  }
  backfillLastMsg(t2, o2) {
    var a2 = t2 = uniq(t2);
    (o2 || 0 !== (a2 = t2.filter((t3) => this.conversationIdsForBackFill[t3])).length) && a2.forEach((t3) => {
      var o3 = get(this.service.model.getById(t3), "lastMessage.messageRefer.messageClientId"), a3 = this.service.compute.hasMessageService ? this.core.V2NIMMessageService.model.getLastMessageOfConversation(t3) : void 0;
      (a3 && a3.messageClientId) !== o3 && (this.conversationIdsForBackFill[t3] = false, a3 ? this.updateModelWithLastMessage(t3, a3, 2, a3.sendingState) : this.updateModelWithLastMessage(t3, void 0, 2, 0));
    });
  }
};
var gi = { "28_1": "v2ConversationCreate", "28_2": "v2ConversationDelete", "28_3": "v2ConversationUpdate", "28_4": "v2ConversationSetTop", "28_5": "v2ConversationUnreadClear", "28_6": "v2ConversationGet", "28_7": "v2ConversationGetByIds", "28_8": "v2ConversationGetList", "28_17": "v2ConversationsDelete", "28_18": "v2ConversationsUnreadClear", "28_19": "v2ConversationSync", "28_20": "v2ConversationNotifySync", "28_21": "v2ConversationNotifySyncOnline", "28_23": "v2ConversationClearTotalUnread", "28_24": "v2ConversationClearTypeUnread", "28_25": "v2ConversationClearGroupUnread", "4_14": "syncConversationReadTime", "4_20": "syncSuperTeamReadTime", "4_22": "v2SyncSessionsWithMoreRoaming", "4_25": "v2SyncSessionReliableInfo", "30_16": "v2MarkConversationReadTime", "32_25": "v2MarkSuperTeamReadTime", "7_116": "v2MultiDeviceConversationReadTime", "21_125": "v2MultiDeviceSuperTeamReadTime" };
var vi = "V2NIMConversationService";
var fi = { conversationId: 1, type: { id: 2, retType: "number" }, serverExtension: 3, groupIds: { id: 4, retConverter: (t2) => t2 ? JSON.parse(t2) : void 0 }, lastMessage: 5, lastMessageState: { id: 6, retType: "number" }, unreadCount: { id: 7, retType: "number" }, stickTop: { id: 8, retType: "boolean" }, sortOrder: { id: 9, retType: "number" }, version: { id: 10, retType: "number" }, deleteFlag: { id: 11, retType: "boolean" }, createTime: { id: 12, retType: "number" }, updateTime: { id: 13, retType: "number" }, lastReadTime: { id: 14, retType: "number" } };
var Ii = { type: { id: 1, retType: "number" }, oneClickClearUnreadType: { id: 2, retType: "number" }, oneClickClearUnreadConversationType: { id: 3, retConverter: stringToJSONObject }, oneClickClearUnreadGroupId: { id: 4, retType: "string" }, oneClickClearUnreadVersion: { id: 5, retType: "number" }, oneClickClearUnreadLastReadTime: { id: 6, retType: "number" } };
var yi = { v2ConversationCreate: { sid: 28, cid: 1, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { conversationId: 1 } }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(fi) }] }, v2ConversationDelete: { sid: 28, cid: 2, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { conversationId: 1, clearMessage: 2 } }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(fi) }] }, v2ConversationUpdate: { sid: 28, cid: 3, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { conversationId: 1, serverExtension: 2 } }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(fi) }] }, v2ConversationSetTop: { sid: 28, cid: 4, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { conversationId: 1, stickTop: 2 } }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(fi) }] }, v2ConversationUnreadClear: { sid: 28, cid: 5, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { conversationId: 1 } }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(fi) }] }, v2ConversationGet: { sid: 28, cid: 6, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { conversationId: 1 } }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(fi) }] }, v2ConversationGetByIds: { sid: 28, cid: 7, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { conversationIds: 1 } }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(fi) }, { type: "Property", name: "info", reflectMapper: { 1: "failedMap" } }] }, v2ConversationGetList: { sid: 28, cid: 8, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { cursor: 1, limit: 2 } }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(fi) }, { type: "Property", name: "info", reflectMapper: { 1: "hasMore", 2: "offset" } }] }, v2ConversationsDelete: { sid: 28, cid: 17, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { conversationIds: 1, clearMessage: 2 } }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(fi) }, { type: "Property", name: "info", reflectMapper: { 1: "failedMap" } }] }, v2ConversationsUnreadClear: { sid: 28, cid: 18, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { conversationIds: 1 } }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(fi) }, { type: "Property", name: "info", reflectMapper: { 1: "failedMap" } }] }, v2ConversationSync: { sid: 28, cid: 19, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { cursor: 1 } }], response: [{ type: "Property", name: "info", reflectMapper: { 1: "nextCursor", 2: "syncType" } }] }, v2ConversationNotifySync: { sid: 28, cid: 20, service: vi, response: [{ type: "Property", name: "info", reflectMapper: { 1: "nextCursor", 2: "syncType" } }, { type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(fi) }] }, v2ConversationNotifySyncOnline: { sid: 28, cid: 21, service: vi, response: [{ type: "Property", name: "info", reflectMapper: invertSerializeItem(Ii) }, { type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(fi) }] }, v2ConversationClearTotalUnread: { sid: 28, cid: 23, service: vi, response: [{ type: "Property", name: "info", reflectMapper: invertSerializeItem(Ii) }] }, v2ConversationClearTypeUnread: { sid: 28, cid: 24, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { conversationType: 1 } }], response: [{ type: "Property", name: "info", reflectMapper: invertSerializeItem(Ii) }] }, v2ConversationClearGroupUnread: { sid: 28, cid: 25, service: vi, params: [{ type: "Property", name: "tag", reflectMapper: { groupId: 1 } }], response: [{ type: "Property", name: "info", reflectMapper: invertSerializeItem(Ii) }] }, syncConversationReadTime: { sid: 4, cid: 14, service: vi, response: [{ type: "StrLongMap", name: "p2p" }, { type: "LongLongMap", name: "team" }, { type: "Long", name: "timetag" }] }, syncSuperTeamReadTime: { sid: 4, cid: 20, service: vi, response: [{ type: "LongLongMap", name: "superTeam" }] }, v2SyncSessionsWithMoreRoaming: { sid: 4, cid: 22, service: vi, response: [] }, v2SyncSessionReliableInfo: { sid: 4, cid: 25, service: vi, response: [] }, v2MarkConversationReadTime: { sid: 30, cid: 16, service: vi, params: [{ type: "Byte", name: "scene" }, { type: "String", name: "to" }, { type: "Long", name: "timetag" }] }, v2MarkSuperTeamReadTime: { sid: 32, cid: 25, service: vi, params: [{ type: "Long", name: "to" }, { type: "Long", name: "timetag" }] }, v2MultiDeviceConversationReadTime: { sid: 30, cid: 116, service: vi, response: [{ type: "Byte", name: "scene" }, { type: "String", name: "to" }, { type: "Long", name: "timetag" }] }, v2MultiDeviceSuperTeamReadTime: { sid: 21, cid: 125, service: vi, response: [{ type: "Long", name: "to" }, { type: "Long", name: "timetag" }] } };
var V2NIMConversationUnreadImpl = class {
  constructor(t2, o2) {
    this.totalUnreadCount = void 0, this.unreadCountByFilter = {}, this.core = t2, this.service = o2;
  }
  reset() {
    this.totalUnreadCount = void 0, this.unreadCountByFilter = {};
  }
  getTotalUnreadCount() {
    return this.totalUnreadCount;
  }
  resetTotalAfterSyncDone() {
    var t2 = this.service.model.getAll().reduce((t3, o3) => t3 + (o3.unreadCount || 0), 0), o2 = this.totalUnreadCount;
    return void 0 !== o2 && o2 === t2 || (this.totalUnreadCount = t2, this.service.emit("onTotalUnreadCountChanged", t2)), t2;
  }
  digestUnreadCountChange() {
    this._digest();
  }
  _digest() {
    var t2 = this.totalUnreadCount, o2 = this.service.model.getAll().reduce((t3, o3) => t3 + (o3.unreadCount || 0), 0);
    this.core.logger.log(`V2NIMConversation::digestUnreadCountChange:oldUnreadCount ${t2}, newUnreadCount ${o2}`), t2 !== o2 && (this.totalUnreadCount = o2, this.service.emit("onTotalUnreadCountChanged", o2)), Object.keys(this.unreadCountByFilter).forEach((t3) => {
      var o3 = JSON.parse(t3), a2 = this.getUnreadCountByFilter(o3), m2 = this.unreadCountByFilter[t3];
      this.unreadCountByFilter[t3] = a2, o3.equals = equals.bind(o3), m2 !== a2 && this.service.emit("onUnreadCountChangedByFilter", o3, a2);
    });
  }
  getUnreadCountByIds(t2) {
    return t2.reduce((t3, o2) => {
      var a2 = this.service.model.getById(o2);
      return t3 + (a2 && a2.unreadCount || 0);
    }, 0);
  }
  getUnreadCountByFilter(t2) {
    var o2 = this.service.model.count();
    return this.service.model.getByOption(0, o2, { conversationTypes: t2.conversationTypes, conversationGroupIds: t2.conversationGroupId ? [t2.conversationGroupId] : void 0, ignoreMuted: t2.ignoreMuted }).conversationList.reduce((t3, o3) => t3 + (o3.unreadCount || 0), 0);
  }
  addFilter(t2) {
    var o2 = generateFilterKey(t2);
    if (void 0 !== this.unreadCountByFilter[o2])
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_ALREADY_EXIST });
    var a2 = JSON.parse(o2), m2 = this.getUnreadCountByFilter(a2);
    this.unreadCountByFilter[o2] = m2, this.service.emit("onUnreadCountChangedByFilter", a2, m2);
  }
  deleteFilter(t2) {
    var o2 = generateFilterKey(t2);
    if (void 0 === this.unreadCountByFilter[o2])
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST });
    delete this.unreadCountByFilter[o2];
  }
};
function generateFilterKey(t2) {
  var { conversationTypes: o2 } = t2;
  return o2 && (o2 = o2.sort()), JSON.stringify({ conversationGroupId: t2.conversationGroupId, conversationTypes: o2, ignoreMuted: t2.ignoreMuted });
}
function equals(t2) {
  return JSON.stringify(this) === generateFilterKey(t2);
}
var Mi = { createTime: { type: "number" }, updateTime: { type: "number" } };
function formatConversationGroups(t2) {
  return t2 && t2.length > 0 ? t2.map((t3) => formatConversationGroup(t3)) : [];
}
function formatConversationGroup(t2) {
  return format(Mi, t2);
}
function formatFailedMap(t2) {
  var o2 = JSON.parse(t2);
  return Object.keys(o2).map((t3) => ({ conversationId: t3, error: new V2NIMErrorImpl({ code: o2[t3] }) }));
}
var _i;
var Ei = { type: { type: "number" }, deleteVersion: { type: "number" }, conversationIds: { type: "object" } };
function formatConversationGroupNotify(t2) {
  return format(Ei, t2);
}
!function(t2) {
  t2[t2.createConversationGroup = 1] = "createConversationGroup", t2[t2.deleteConversationGroup = 2] = "deleteConversationGroup", t2[t2.updateConversationGroup = 3] = "updateConversationGroup", t2[t2.addConversationToGroup = 4] = "addConversationToGroup", t2[t2.removeConversationFromGroup = 5] = "removeConversationFromGroup";
}(_i || (_i = {}));
var V2NIMConversationComputeImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2;
  }
  get hasUserService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMUserService) || void 0 === t2 ? void 0 : t2.name);
  }
  get hasFriendService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMFriendService) || void 0 === t2 ? void 0 : t2.name);
  }
  get hasTeamService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMTeamService) || void 0 === t2 ? void 0 : t2.name);
  }
  get hasMessageService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMMessageService) || void 0 === t2 ? void 0 : t2.name);
  }
  computeConvs(t2) {
    return t2.map((t3) => this.computeConv(t3));
  }
  computeConv(t2) {
    var o2, a2, m2, u2, h2;
    if (0 === t2.type)
      return t2;
    var g2 = this.core.V2NIMConversationIdUtil.parseConversationType(t2.conversationId), I2 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(t2.conversationId), M2 = {};
    if (t2.lastReadTime || (M2.lastReadTime = this.service.model.getReadTime(t2.conversationId)), (null === (o2 = this.core.V2NIMSettingService) || void 0 === o2 ? void 0 : o2.name) && (M2.mute = this.core.V2NIMSettingService.getConversationMuteStatus(t2.conversationId)), 1 === g2 && this.hasUserService) {
      var _2, E2 = this.core.V2NIMUserService.model.getUser(I2), S2 = this.hasFriendService ? this.core.V2NIMFriendService.model.getFriend(I2) : void 0;
      t2.conversationId !== (null === (a2 = t2.lastMessage) || void 0 === a2 ? void 0 : a2.messageRefer.conversationId) || 0 !== (null === (m2 = t2.lastMessage) || void 0 === m2 ? void 0 : m2.lastMessageState) && 2 !== (null === (u2 = t2.lastMessage) || void 0 === u2 ? void 0 : u2.lastMessageState) || (_2 = null === (h2 = t2.lastMessage) || void 0 === h2 ? void 0 : h2.senderName), M2.name = (null == S2 ? void 0 : S2.alias) || (null == E2 ? void 0 : E2.name) || _2 || I2, M2.avatar = (null == E2 ? void 0 : E2.avatar) || "";
    } else if (2 === g2 && this.hasTeamService) {
      var T2 = this.core.V2NIMTeamService.model.getById(I2, 1);
      M2.name = (null == T2 ? void 0 : T2.name) || I2, M2.avatar = (null == T2 ? void 0 : T2.avatar) || "";
    } else if (3 === g2 && this.hasTeamService) {
      var C2 = this.core.V2NIMTeamService.model.getById(I2, 2);
      M2.name = (null == C2 ? void 0 : C2.name) || I2, M2.avatar = (null == C2 ? void 0 : C2.avatar) || "";
    }
    return Object.assign(t2, M2), t2;
  }
  computeReadTimeForMark(t2) {
    var o2, a2, m2, u2 = t2.conversationId, h2 = this.service.model.getReadTime(u2);
    if (null === (a2 = null === (o2 = null == t2 ? void 0 : t2.lastMessage) || void 0 === o2 ? void 0 : o2.messageRefer) || void 0 === a2 ? void 0 : a2.createTime)
      m2 = t2.lastMessage.messageRefer.createTime;
    else {
      if (!this.core.timeOrigin.checkNodeReliable())
        return h2 || 0;
      m2 = this.core.timeOrigin.getNTPTime();
    }
    return m2;
  }
};
var V2NIMConversationHandlerImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.model = this.service.model, this.logger = this.core.logger;
  }
  get ifEnabled() {
    return true === this.core.options.enableV2CloudConversation;
  }
  v2ConversationNotifySyncHandler(t2) {
    this.ifEnabled && this.service.versionCache.recvConversationFromSyncAction(t2);
  }
  v2ConversationNotifySyncOnlineHandler(t2) {
    this.ifEnabled && this.service.versionCache.recvConversation(t2);
  }
  syncConversationReadTimeHandler(t2) {
    var o2, a2, m2;
    if (this.ifEnabled) {
      if (null === (o2 = null == t2 ? void 0 : t2.content) || void 0 === o2 ? void 0 : o2.p2p)
        for (var [u2, h2] of Object.entries(t2.content.p2p))
          this.model.updateReadTime(this.core.V2NIMConversationIdUtil.p2pConversationId(u2), h2), this.service.emit("onConversationReadTimeUpdated", this.core.V2NIMConversationIdUtil.p2pConversationId(u2), h2);
      if (null === (m2 = null === (a2 = null == t2 ? void 0 : t2.content) || void 0 === a2 ? void 0 : a2.team) || void 0 === m2 ? void 0 : m2.m_map)
        for (var [g2, I2] of Object.entries(t2.content.team.m_map))
          this.model.updateReadTime(this.core.V2NIMConversationIdUtil.teamConversationId(g2), I2), this.service.emit("onConversationReadTimeUpdated", this.core.V2NIMConversationIdUtil.teamConversationId(g2), I2);
    }
  }
  syncSuperTeamReadTimeHandler(t2) {
    var o2, a2;
    if (this.ifEnabled && (null === (a2 = null === (o2 = null == t2 ? void 0 : t2.content) || void 0 === o2 ? void 0 : o2.superTeam) || void 0 === a2 ? void 0 : a2.m_map))
      for (var [m2, u2] of Object.entries(t2.content.superTeam.m_map))
        this.model.updateReadTime(this.core.V2NIMConversationIdUtil.superTeamConversationId(m2), u2), this.service.emit("onConversationReadTimeUpdated", this.core.V2NIMConversationIdUtil.superTeamConversationId(m2), u2);
  }
  v2MultiDeviceConversationReadTimeHandler(t2) {
    var o2;
    this.ifEnabled && (null === (o2 = null == t2 ? void 0 : t2.content) || void 0 === o2 ? void 0 : o2.to) && (0 === t2.content.scene ? (this.model.updateReadTime(this.core.V2NIMConversationIdUtil.p2pConversationId(t2.content.to), t2.content.timetag), this.service.emit("onConversationReadTimeUpdated", this.core.V2NIMConversationIdUtil.p2pConversationId(t2.content.to), t2.content.timetag)) : (this.model.updateReadTime(this.core.V2NIMConversationIdUtil.teamConversationId(t2.content.to), t2.content.timetag), this.service.emit("onConversationReadTimeUpdated", this.core.V2NIMConversationIdUtil.teamConversationId(t2.content.to), t2.content.timetag)));
  }
  v2MultiDeviceSuperTeamReadTimeHandler(t2) {
    var o2;
    this.ifEnabled && (null === (o2 = null == t2 ? void 0 : t2.content) || void 0 === o2 ? void 0 : o2.to) && (this.model.updateReadTime(this.core.V2NIMConversationIdUtil.superTeamConversationId(t2.content.to), t2.content.timetag), this.service.emit("onConversationReadTimeUpdated", this.core.V2NIMConversationIdUtil.superTeamConversationId(t2.content.to), t2.content.timetag));
  }
};
var V2NIMConversationEventImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.model = this.service.model, this.versionCache = this.service.versionCache, this.logger = this.core.logger;
  }
  setListener() {
    this.core.eventBus.on("V2NIMLoginService/loginLifeCycleLoginSucc", () => this.versionCache.doSync()), this.core.eventBus.on("V2NIMConversationService/conversationOnlineSyncNotify", this.conversationOnlineSyncNotify.bind(this)), this.core.eventBus.on("V2NIMMessageService/sendMessage", this.sendMessage.bind(this)), this.core.eventBus.on("V2NIMMessageService/deleteMessages", this.deleteMessages.bind(this)), this.core.eventBus.on("V2NIMMessageService/revokeMessages", this.revokeMessages.bind(this)), this.core.eventBus.on("V2NIMMessageService/roamingMsgs", this.roamingOrOfflineMsgs.bind(this)), this.core.eventBus.on("V2NIMMessageService/offlineMsgs", this.roamingOrOfflineMsgs.bind(this)), this.core.eventBus.on("V2NIMSettingService/setMute", this.setMute.bind(this));
  }
  beforeEmit(t2, ...o2) {
    var a2, m2, u2 = `${this.service.name}::emit ${t2.toString()}`;
    if ("onConversationCreated" === t2) {
      var h2 = o2[0];
      this.logger.log(`${u2}`, `id:${h2.conversationId};unread:${h2.unreadCount};lastMsg:${null === (a2 = h2.lastMessage) || void 0 === a2 ? void 0 : a2.messageRefer.messageClientId}/${null === (m2 = h2.lastMessage) || void 0 === m2 ? void 0 : m2.messageRefer.messageServerId}`);
    } else if ("onConversationChanged" === t2) {
      var g2 = o2[0];
      this.logger.log(`${u2}`, g2.map((t3) => {
        var o3, a3;
        return `id:${t3.conversationId};unread:${t3.unreadCount};lastMsg:${null === (o3 = t3.lastMessage) || void 0 === o3 ? void 0 : o3.messageRefer.messageClientId}/${null === (a3 = t3.lastMessage) || void 0 === a3 ? void 0 : a3.messageRefer.messageServerId}`;
      }));
    } else
      this.logger.log(`${u2}`, ...o2);
  }
  conversationOnlineSyncNotify(t2, o2) {
    var a2;
    false !== (null === (a2 = null == o2 ? void 0 : o2.messageConfig) || void 0 === a2 ? void 0 : a2.lastMessageUpdateEnabled) && (t2.content.info = deserialize(t2.content.info, invertSerializeItem(Ii)), t2.content.data = deserialize(t2.content.data, invertSerializeItem(fi)), o2 && (t2.content.data.lastMessage = formatLastMessageFromMessage(this.core, o2, 0)), t2.content.datas = [t2.content.data], this.service.handler.v2ConversationNotifySyncOnlineHandler.call(this, t2));
  }
  sendMessage(t2, o2) {
    var a2, m2;
    1 === o2 && true === (null === (a2 = t2.messageConfig) || void 0 === a2 ? void 0 : a2.historyEnabled) || false !== (null === (m2 = null == t2 ? void 0 : t2.messageConfig) || void 0 === m2 ? void 0 : m2.lastMessageUpdateEnabled) && this.versionCache.updateModelWithLastMessage(t2.conversationId, t2, 2, o2);
  }
  deleteMessages(t2) {
    var o2 = t2.map((t3) => t3.messageRefer.conversationId);
    this.versionCache.backfillLastMsg(o2, true);
  }
  revokeMessages(t2) {
    this.versionCache.updateModelByRevoke(t2);
  }
  roamingOrOfflineMsgs(t2) {
    var o2 = uniq(t2.map((t3) => t3.conversationId));
    this.versionCache.backfillLastMsg(o2, false);
  }
  setMute(t2, o2) {
    var a2 = this.model.getById(t2);
    a2 && a2.mute !== o2 && (a2.mute = o2, this.model.upsert(a2), this.service.triggerConversationChanged([a2]));
  }
};
var V2NIMConversationServiceImpl = class extends V2Service {
  constructor(t2, o2 = {}) {
    super("V2NIMConversationService", t2), this.config = {}, this.model = new V2NIMConversationModelImpl(), this.versionCache = new V2NIMConversationVersionCacheImpl(this.core, this), this.unread = new V2NIMConversationUnreadImpl(this.core, this), this.compute = new V2NIMConversationComputeImpl(this.core, this), this.event = new V2NIMConversationEventImpl(this.core, this), this.handler = new V2NIMConversationHandlerImpl(this.core, this), this.core._registerDep(V2NIMConversationIdUtilImpl, "V2NIMConversationIdUtil"), "v2" === this.core.options.apiVersion && true === this.core.options.enableV2CloudConversation && (registerParser({ cmdMap: gi, cmdConfig: yi }), this.setOptions(o2), this.setListener());
  }
  setOptions(t2) {
    this.config = Object.assign(this.config, t2);
  }
  setListener() {
    this.event.setListener();
  }
  reset() {
    this.versionCache.reset(), this.model.reset(), this.unread.reset();
  }
  emit(t2, ...o2) {
    return this.event.beforeEmit(t2, ...o2), super.emit(t2, ...o2);
  }
  checkEnable() {
    if (true !== this.core.options.enableV2CloudConversation)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "V2CloudConversation is not enabled" } });
  }
  getConversationList(t2, o2) {
    this.checkEnable(), this.checkV2(), validate({ offset: { type: "number", min: 0 } }, { offset: t2 }, "", true), validate({ limit: { type: "number", min: 1 } }, { limit: o2 }, "", true), this.core.V2NIMLoginService.checkIllegalState();
    var a2 = this.model.getByOption(t2, o2, {});
    return a2.conversationList = this.compute.computeConvs(a2.conversationList), Promise.resolve(a2);
  }
  getConversationListByOption(t2, o2, a2) {
    this.checkEnable(), this.checkV2(), validate({ offset: { type: "number", min: 0 } }, { offset: t2 }, "", true), validate({ limit: { type: "number", min: 1 } }, { limit: o2 }, "", true), validate({ option: { type: "object", required: true, rules: { conversationTypes: { type: "array", itemType: "number", required: false }, onlyUnread: { type: "boolean", required: false }, conversationGroupIds: { type: "array", itemType: "string", required: false } } } }, { option: a2 }, "", true), this.core.V2NIMLoginService.checkIllegalState();
    var m2 = this.model.getByOption(t2, o2, a2);
    return m2.conversationList = this.compute.computeConvs(m2.conversationList), Promise.resolve(m2);
  }
  getConversation(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validateConversationId(this.core.account, t2);
      var o2 = this.model.getById(t2);
      if (o2)
        return this.compute.computeConv(o2);
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST });
    });
  }
  getConversationListByIds(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validate({ conversationIds: { type: "array", itemType: "string", min: 1 } }, { conversationIds: t2 }, "", true), this.core.V2NIMLoginService.checkIllegalState();
      var o2 = t2.map((t3) => this.model.getById(t3)).filter((t3) => !!t3);
      return o2 = this.compute.computeConvs(o2);
    });
  }
  createConversation(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validateConversationId(this.core.account, t2);
      var o2 = get(yield this.core.sendCmd("v2ConversationCreate", { tag: { conversationId: t2 } }), "content.data"), a2 = formatConversationField(this.core, o2);
      this.versionCache.compareAndUpdateModel([a2]);
      var m2 = this.model.getById(t2);
      if (m2)
        return this.compute.computeConv(m2);
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST });
    });
  }
  deleteConversation(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validateConversationId(this.core.account, t2), validate({ clearMessage: { type: "boolean", required: false } }, { clearMessage: o2 }, "", true);
      try {
        yield this.core.sendCmd("v2ConversationDelete", { tag: { conversationId: t2, clearMessage: Number(o2 || false) } });
      } catch (o3) {
        this.logger.warn(`V2NIMConversationService:deleteConversation: delete conversation failed: ${t2}`);
      }
      this.model.getById(t2) && (o2 && this.core.eventBus.emit("V2NIMConversationService/deleteConversation", [t2]), this.versionCache.compareAndDeleteModel([t2]));
    });
  }
  deleteConversationListByIds(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validate({ conversationIds: { type: "array", itemType: "string", min: 1 } }, { conversationIds: t2 }, "", true), validate({ clearMessage: { type: "boolean", required: false } }, { clearMessage: o2 }, "", true);
      var a2 = formatFailedMap(get(yield this.core.sendCmd("v2ConversationsDelete", { tag: { conversationIds: JSON.stringify(t2), clearMessage: Number(o2 || false) } }), "content.info.failedMap")).filter((t3) => t3.error.code !== Me.V2NIM_ERROR_CODE_CONVERSATION_NOT_EXIST || !this.model.getById(t3.conversationId));
      return a2.length < t2.length && (o2 && this.core.eventBus.emit("V2NIMConversationService/deleteConversation", t2), this.versionCache.compareAndDeleteModel(t2)), a2;
    });
  }
  getStickTopConversationList() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), this.model.getStickTopList();
    });
  }
  stickTopConversation(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validateConversationId(this.core.account, t2), validate({ stickTop: { type: "boolean" } }, { stickTop: o2 }, "", true);
      var a2 = get(yield this.core.sendCmd("v2ConversationSetTop", { tag: { conversationId: t2, stickTop: Number(o2) } }), "content.data"), m2 = formatConversationField(this.core, a2);
      this.versionCache.compareAndUpdateModel([m2]);
    });
  }
  updateConversation(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validateConversationId(this.core.account, t2), validate({ updateInfo: { type: "object", required: true, rules: { serverExtension: { type: "string" } } } }, { updateInfo: o2 }, "", true);
      var a2 = get(yield this.core.sendCmd("v2ConversationUpdate", { tag: Object.assign({ conversationId: t2 }, o2) }), "content.data"), m2 = formatConversationField(this.core, a2);
      this.versionCache.compareAndUpdateModel([m2]);
    });
  }
  updateConversationLocalExtension(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validateConversationId(this.core.account, t2), validate({ localExtension: { type: "string" } }, { localExtension: o2 }, "", true);
      var a2 = this.model.getById(t2);
      if (!a2)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_RESOURCE_NOT_EXIST });
      if (a2.localExtension !== o2) {
        var m2 = Object.assign(Object.assign({}, a2), { localExtension: o2 });
        this.model.upsert(m2), this.triggerConversationChanged([m2]);
      }
    });
  }
  getTotalUnreadCount() {
    return this.checkEnable(), this.checkV2(), this.unread.getTotalUnreadCount() || 0;
  }
  getUnreadCountByIds(t2) {
    this.checkEnable(), this.checkV2(), validate({ conversationIds: { type: "array", itemType: "string", min: 1 } }, { conversationIds: t2 }, "", true);
    var o2 = this.unread.getUnreadCountByIds(t2);
    return Promise.resolve(o2);
  }
  getUnreadCountByFilter(t2) {
    this.checkEnable(), this.checkV2(), this.valiteFilter(t2);
    var o2 = this.unread.getUnreadCountByFilter(t2);
    return Promise.resolve(o2);
  }
  clearTotalUnreadCount() {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2();
      var t2 = get(yield this.core.sendCmd("v2ConversationClearTotalUnread"), "content.info");
      this.versionCache.compareAndClearUnreadInModel(t2);
    });
  }
  clearUnreadCountByIds(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validate({ conversationIds: { type: "array", itemType: "string", min: 1 } }, { conversationIds: t2 }, "", true);
      var o2 = yield this.core.sendCmd("v2ConversationsUnreadClear", { tag: { conversationIds: JSON.stringify(t2) } }), a2 = formatConversationFields(this.core, get(o2, "content.datas")), m2 = formatFailedMap(get(o2, "content.info.failedMap"));
      return this.versionCache.compareAndUpdateModel(a2), m2;
    });
  }
  clearUnreadCountByGroupId(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validate({ groupId: { type: "string" } }, { groupId: t2 }, "", true), yield this.core.sendCmd("v2ConversationClearGroupUnread", { tag: { groupId: t2 } });
    });
  }
  clearUnreadCountByTypes(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validate({ types: hi }, { types: t2 }, "", true);
      var o2 = get(yield this.core.sendCmd("v2ConversationClearTypeUnread", { tag: { conversationType: JSON.stringify(t2) } }), "content.info");
      this.versionCache.compareAndClearUnreadInModel(o2);
    });
  }
  markConversationRead(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), this.checkLogin(), validateConversationId(this.core.account, t2);
      var o2 = this.model.getById(t2);
      if (!o2)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "Conversation not exist" } });
      var a2 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(t2), m2 = this.core.V2NIMConversationIdUtil.parseConversationType(t2), u2 = this.model.getReadTime(t2), h2 = this.compute.computeReadTimeForMark(o2);
      return u2 >= h2 ? (this.logger.log(`V2Conv::markConversationRead currentReadTime >= readTime ${t2},${u2},${h2}`), u2) : (3 === m2 ? yield this.core.sendCmd("v2MarkSuperTeamReadTime", { timetag: h2, to: a2 }) : yield this.core.sendCmd("v2MarkConversationReadTime", { scene: 1 === m2 ? 0 : 2 === m2 ? 1 : 2, timetag: h2, to: a2 }), this.model.updateReadTime(t2, h2), h2);
    });
  }
  getConversationReadTime(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkEnable(), this.checkV2(), validateConversationId(this.core.account, t2), this.model.getReadTime(t2);
    });
  }
  subscribeUnreadCountByFilter(t2) {
    var o2;
    this.checkEnable(), this.checkV2(), this.checkLogin(), this.valiteFilter(t2), 0 === (null === (o2 = t2.conversationTypes) || void 0 === o2 ? void 0 : o2.length) && delete t2.conversationTypes, this.unread.addFilter(t2);
  }
  unsubscribeUnreadCountByFilter(t2) {
    var o2;
    this.checkEnable(), this.checkV2(), this.checkLogin(), this.valiteFilter(t2), 0 === (null === (o2 = t2.conversationTypes) || void 0 === o2 ? void 0 : o2.length) && delete t2.conversationTypes, this.unread.deleteFilter(t2);
  }
  valiteFilter(t2) {
    if (validate({ filter: { type: "object", required: true, rules: { conversationTypes: { type: "array", itemType: "number", required: false }, conversationGroupId: { type: "string", allowEmpty: false, required: false }, ignoreMuted: { type: "boolean", required: false } } } }, { filter: t2 }, "", true), void 0 === t2.conversationTypes && void 0 === t2.conversationGroupId && true !== t2.ignoreMuted)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "Filter cannot be empty" } });
  }
  triggerConversationChanged(t2) {
    t2 = this.compute.computeConvs(t2), (t2 = JSON.parse(JSON.stringify(t2))).forEach((t3) => {
      t3.lastMessage || (t3.lastMessage = void 0), delete t3.lastMessageState;
    }), this.emit("onConversationChanged", t2);
  }
  triggerConversationCreated(t2) {
    t2 = this.compute.computeConv(t2), delete (t2 = JSON.parse(JSON.stringify(t2))).lastMessageState, this.emit("onConversationCreated", t2);
  }
};
var Si = { "28_9": "v2ConversationGroupCreate", "28_10": "v2ConversationGroupDelete", "28_11": "v2ConversationGroupUpdate", "28_12": "v2ConversationGroupGet", "28_13": "v2ConversationGroupsGet", "28_14": "v2ConversationGroupListGet", "28_15": "v2ConversationGroupAddTo", "28_16": "v2ConversationGroupRemoveFrom", "28_22": "v2ConversationGroupNotifySyncOnline" };
var Ti = "V2NIMConversationGroupService";
var Ci = { groupId: 1, name: 2, serverExtension: 3, createTime: 4, updateTime: 5 };
var Ni = { v2ConversationGroupCreate: { sid: 28, cid: 9, service: Ti, params: [{ type: "Property", name: "tag", reflectMapper: { conversationIds: 1, name: 2, serverExtension: 3 } }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Ci) }, { type: "PropertyArray", name: "conversations", reflectMapper: invertSerializeItem(fi) }, { type: "Property", name: "info", reflectMapper: { 1: "failedMap" } }] }, v2ConversationGroupDelete: { sid: 28, cid: 10, service: Ti, params: [{ type: "Property", name: "tag", reflectMapper: { groupId: 1 } }], response: [{ type: "Property", name: "info", reflectMapper: { 1: "type", 2: "deleteVersion", 3: "groupList" } }] }, v2ConversationGroupUpdate: { sid: 28, cid: 11, service: Ti, params: [{ type: "Property", name: "tag", reflectMapper: { groupId: 1, name: 2, serverExtension: 3 } }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Ci) }] }, v2ConversationGroupGet: { sid: 28, cid: 12, service: Ti, params: [{ type: "Property", name: "tag", reflectMapper: { groupId: 1 } }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Ci) }] }, v2ConversationGroupsGet: { sid: 28, cid: 13, service: Ti, params: [{ type: "Property", name: "tag", reflectMapper: { groupIds: 1 } }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Ci) }, { type: "Property", name: "info", reflectMapper: { 1: "failedMap" } }] }, v2ConversationGroupListGet: { sid: 28, cid: 14, service: Ti, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(Ci) }] }, v2ConversationGroupAddTo: { sid: 28, cid: 15, service: Ti, params: [{ type: "Property", name: "tag", reflectMapper: { groupId: 1, conversationIds: 2 } }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(fi) }, { type: "Property", name: "info", reflectMapper: { 1: "failedMap" } }] }, v2ConversationGroupRemoveFrom: { sid: 28, cid: 16, service: Ti, params: [{ type: "Property", name: "tag", reflectMapper: { groupId: 1, conversationIds: 2 } }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(fi) }, { type: "Property", name: "info", reflectMapper: { 1: "failedMap" } }] }, v2ConversationGroupNotifySyncOnline: { sid: 28, cid: 22, service: Ti, response: [{ type: "Property", name: "info", reflectMapper: { 1: "type", 2: "deleteVersion", 3: "conversationIds" } }, { type: "Property", name: "data", reflectMapper: invertSerializeItem(Ci) }] } };
var V2NIMConversationGroupServiceImpl = class extends V2Service {
  constructor(t2, o2 = {}) {
    super("V2NIMConversationGroupService", t2), this.config = {}, this.core._registerDep(V2NIMConversationServiceImpl, "V2NIMConversationService"), "v2" === this.core.options.apiVersion && true === this.core.options.enableV2CloudConversation && (registerParser({ cmdMap: Si, cmdConfig: Ni }), this.setOptions(o2));
  }
  setOptions(t2) {
    this.config = Object.assign(this.config, t2);
  }
  emit(t2, ...o2) {
    var a2 = `${this.name}::emit ${t2.toString()}`;
    if ("onConversationsAddedToGroup" === t2) {
      var m2 = o2[0], u2 = o2[1];
      this.logger.log(`${a2}`, `groupId:${m2}`, `conversations:${u2.map((t3) => t3.conversationId).join(",")}`);
    } else
      this.logger.log(`${a2}`, ...o2);
    return super.emit(t2, ...o2);
  }
  get ifEnabled() {
    return true === this.core.options.enableV2CloudConversation;
  }
  checkEnable() {
    if (true !== this.core.options.enableV2CloudConversation)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "V2CloudConversation is not enabled" } });
  }
  createConversationGroup(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validate({ name: { type: "string", allowEmpty: false } }, { name: t2 }, "", true), validate({ serverExtension: { type: "string", required: false } }, { serverExtension: o2 }, "", true), validate({ conversationIds: { type: "array", itemType: "string", required: false } }, { conversationIds: a2 }, "", true);
      var m2 = yield this.core.sendCmd("v2ConversationGroupCreate", { tag: { name: t2, serverExtension: o2 || "", conversationIds: a2 && JSON.stringify(a2) } }), u2 = formatConversationGroup(get(m2, "content.data")), h2 = formatConversationFields(this.core, get(m2, "content.conversations")), g2 = formatFailedMap(get(m2, "content.info.failedMap"));
      return this.emit("onConversationGroupCreated", u2), h2.length > 0 && (this.core.V2NIMConversationService.versionCache.compareAndUpdateModel(h2), this.emit("onConversationsAddedToGroup", u2.groupId, h2.map((t3) => this.core.V2NIMConversationService.model.getById(t3.conversationId)).filter((t3) => !!t3))), { group: u2, failedList: g2 };
    });
  }
  deleteConversationGroup(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validate({ groupId: { type: "string", allowEmpty: false } }, { groupId: t2 }, "", true);
      var o2 = formatConversationGroupNotify(get(yield this.core.sendCmd("v2ConversationGroupDelete", { tag: { groupId: t2 } }), "content.info"));
      this.core.V2NIMConversationService.versionCache.compareAndDeleteGroupInModel(o2.deleteVersion, t2), this.emit("onConversationGroupDeleted", t2);
    });
  }
  updateConversationGroup(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkEnable(), this.checkV2(), validate({ groupId: { type: "string", allowEmpty: false } }, { groupId: t2 }, "", true), validate({ name: { type: "string", required: false } }, { name: o2 }, "", true), validate({ serverExtension: { type: "string", required: false } }, { serverExtension: a2 }, "", true), void 0 === o2 && void 0 === a2)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER });
      var m2 = formatConversationGroup(get(yield this.core.sendCmd("v2ConversationGroupUpdate", { tag: { groupId: t2, name: o2, serverExtension: a2 } }), "content.data"));
      this.emit("onConversationGroupChanged", m2);
    });
  }
  addConversationsToGroup(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validate({ groupId: { type: "string", allowEmpty: false } }, { groupId: t2 }, "", true), validate({ conversationIds: { type: "array", itemType: "string", min: 1, allowEmpty: false } }, { conversationIds: o2 }, "", true);
      var a2 = yield this.core.sendCmd("v2ConversationGroupAddTo", { tag: { groupId: t2, conversationIds: JSON.stringify(o2) } }), m2 = get(a2, "content.info.failedMap") || "", u2 = [];
      m2 && (u2 = formatFailedMap(m2));
      var h2 = formatConversationFields(this.core, get(a2, "content.datas"));
      this.core.V2NIMConversationService.versionCache.compareAndUpdateModel(h2);
      var g2 = h2.map((t3) => this.core.V2NIMConversationService.model.getById(t3.conversationId)).filter((t3) => !!t3);
      return g2.length > 0 && this.emit("onConversationsAddedToGroup", t2, g2), u2;
    });
  }
  removeConversationsFromGroup(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validate({ groupId: { type: "string", allowEmpty: false } }, { groupId: t2 }, "", true), validate({ conversationIds: { type: "array", itemType: "string", min: 1, allowEmpty: false } }, { conversationIds: o2 }, "", true);
      var a2 = yield this.core.sendCmd("v2ConversationGroupRemoveFrom", { tag: { groupId: t2, conversationIds: JSON.stringify(o2) } }), m2 = get(a2, "content.info.failedMap") || "", u2 = [];
      m2 && (u2 = formatFailedMap(m2));
      var h2 = formatConversationFields(this.core, get(a2, "content.datas"));
      return this.core.V2NIMConversationService.versionCache.compareAndUpdateModel(h2), this.emit("onConversationsRemovedFromGroup", t2, h2.map((t3) => t3.conversationId)), u2;
    });
  }
  getConversationGroup(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkEnable(), this.checkV2(), validate({ groupId: { type: "string", allowEmpty: false } }, { groupId: t2 }, "", true), formatConversationGroup(get(yield this.core.sendCmd("v2ConversationGroupGet", { tag: { groupId: t2 } }), "content.data"));
    });
  }
  getConversationGroupList() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkEnable(), this.checkV2(), formatConversationGroups(get(yield this.core.sendCmd("v2ConversationGroupListGet"), "content.datas"));
    });
  }
  getConversationGroupListByIds(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkEnable(), this.checkV2(), validate({ groupIds: { type: "array", itemType: "string", min: 1 } }, { groupIds: t2 }, "", true);
      var o2 = formatConversationGroups(get(yield this.core.sendCmd("v2ConversationGroupsGet", { tag: { groupIds: t2 && JSON.stringify(t2) } }), "content.datas"));
      return t2.map((t3) => o2.filter((o3) => o3.groupId === t3)[0]).filter((t3) => !!t3);
    });
  }
  v2ConversationGroupNotifySyncOnlineHandler(t2) {
    if (this.ifEnabled) {
      var o2 = formatConversationGroupNotify(get(t2, "content.info")), { type: a2, deleteVersion: m2, conversationIds: u2 } = o2, h2 = formatConversationGroup(get(t2, "content.data"));
      if (this.core.logger.log("v2ConversationGroupNotifySyncOnlineHandler", o2, h2), 1 === a2)
        this.emit("onConversationGroupCreated", h2), u2 && u2.length > 0 && this.emit("onConversationsAddedToGroup", h2.groupId, u2.map((t3) => this.core.V2NIMConversationService.model.getById(t3)).filter((t3) => !!t3));
      else if (2 === a2)
        this.emit("onConversationGroupDeleted", h2.groupId), this.core.V2NIMConversationService.versionCache.compareAndDeleteGroupInModel(m2, h2.groupId);
      else if (3 === a2)
        this.emit("onConversationGroupChanged", h2);
      else if (4 === a2) {
        var g2 = u2.map((t3) => this.core.V2NIMConversationService.model.getById(t3)).filter((t3) => !!t3);
        this.emit("onConversationsAddedToGroup", h2.groupId, g2);
      } else
        5 === a2 && this.emit("onConversationsRemovedFromGroup", h2.groupId, u2);
    }
  }
};
var V2NIMMessageConverterImpl = class {
  constructor(t2) {
    this.name = "V2NIMMessageConverter", this.core = t2;
  }
  messageSerialization(t2) {
    if (!t2)
      return null;
    var o2 = serialize(t2, Pr);
    return JSON.stringify(o2);
  }
  messageDeserialization(t2) {
    var o2, a2, m2, u2, h2, g2, I2, M2, _2, E2, S2, T2, C2, N2, A2, O2, R2, b2, V2, k2, P2, L2, w2;
    if (!t2)
      return null;
    try {
      var D2 = deserialize(JSON.parse(t2), Lr);
      return D2.sendingState = 0, 1 !== D2.conversationType || D2.senderId !== this.core.account && D2.receiverId !== this.core.account ? 2 === D2.conversationType ? D2.conversationId = this.core.V2NIMConversationIdUtil.teamConversationId(D2.receiverId) : 3 === D2.conversationType && (D2.conversationId = this.core.V2NIMConversationIdUtil.superTeamConversationId(D2.receiverId)) : D2.conversationId = this.core.V2NIMConversationIdUtil.p2pConversationId(D2.senderId === this.core.account ? D2.receiverId : D2.senderId), D2.threadReply && (D2.threadReply.conversationType = D2.conversationType, D2.threadReply = completeMessageRefer(this.core, D2.threadReply)), D2.threadRoot && (D2.threadRoot.conversationType = D2.conversationType, D2.threadRoot = completeMessageRefer(this.core, D2.threadRoot)), [1, 3, 2, 0].includes(D2.conversationType) || this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid conversationType(enum): ${D2.conversationType}`), D2.senderId && "string" != typeof D2.senderId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid senderId(string): ${D2.senderId}`), D2.receiverId && "string" != typeof D2.receiverId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid receiverId(string): ${D2.receiverId}`), "createTime" in D2 && isNaN(D2.createTime) && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid createTime(number): ${D2.createTime}`), [2, 7, 12, 100, 6, 1, -1, 4, 5, 11, 0, 10, 3].includes(D2.messageType) || this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid messageType(enum): ${D2.messageType}`), "subType" in D2 && isNaN(D2.subType) && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid subType(number): ${D2.subType}`), D2.messageClientId && "string" != typeof D2.messageClientId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid messageClientId(string): ${D2.messageClientId}`), D2.messageServerId && "string" != typeof D2.messageServerId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid messageServerId(string): ${D2.messageServerId}`), D2.attachment && "object" != typeof D2.attachment && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid attachment(object): ${D2.attachment}`), D2.text && "string" != typeof D2.text && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid text(string): ${D2.text}`), D2.serverExtension && "string" != typeof D2.serverExtension && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid serverExtension(string): ${D2.serverExtension}`), D2.callbackExtension && "string" != typeof D2.callbackExtension && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid callbackExtension(string): ${D2.callbackExtension}`), (null === (o2 = D2.pushConfig) || void 0 === o2 ? void 0 : o2.pushContent) && "string" != typeof D2.pushConfig.pushContent && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid pushContent(string): ${D2.pushConfig.pushContent}`), (null === (a2 = D2.pushConfig) || void 0 === a2 ? void 0 : a2.pushPayload) && "string" != typeof D2.pushConfig.pushPayload && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid pushPayload(string): ${D2.pushConfig.pushPayload}`), (null === (m2 = D2.pushConfig) || void 0 === m2 ? void 0 : m2.forcePushContent) && "string" != typeof D2.pushConfig.forcePushContent && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid forcePushContent(string): ${D2.pushConfig.forcePushContent}`), (null === (u2 = D2.pushConfig) || void 0 === u2 ? void 0 : u2.forcePushAccountIds) && !Array.isArray(D2.pushConfig.forcePushAccountIds) && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid forcePushAccountIds(array): ${D2.pushConfig.forcePushAccountIds}`), (null === (h2 = D2.routeConfig) || void 0 === h2 ? void 0 : h2.routeEnvironment) && "string" != typeof D2.routeConfig.routeEnvironment && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid routeEnvironment(string): ${D2.routeConfig.routeEnvironment}`), (null === (g2 = D2.antispamConfig) || void 0 === g2 ? void 0 : g2.antispamBusinessId) && "string" != typeof D2.antispamConfig.antispamBusinessId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid antispamBusinessId(string): ${D2.antispamConfig.antispamBusinessId}`), (null === (I2 = D2.antispamConfig) || void 0 === I2 ? void 0 : I2.antispamCustomMessage) && "string" != typeof D2.antispamConfig.antispamCustomMessage && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid antispamCustomMessage(string): ${D2.antispamConfig.antispamCustomMessage}`), (null === (M2 = D2.antispamConfig) || void 0 === M2 ? void 0 : M2.antispamCheating) && "string" != typeof D2.antispamConfig.antispamCheating && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid antispamCheating(string): ${D2.antispamConfig.antispamCheating}`), (null === (_2 = D2.antispamConfig) || void 0 === _2 ? void 0 : _2.antispamExtension) && "string" != typeof D2.antispamConfig.antispamExtension && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid antispamExtension(string): ${D2.antispamConfig.antispamExtension}`), (null === (E2 = D2.robotConfig) || void 0 === E2 ? void 0 : E2.accountId) && "string" != typeof D2.robotConfig.accountId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid accountId(string): ${D2.robotConfig.accountId}`), (null === (S2 = D2.robotConfig) || void 0 === S2 ? void 0 : S2.topic) && "string" != typeof D2.robotConfig.topic && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid topic(string): ${D2.robotConfig.topic}`), (null === (T2 = D2.robotConfig) || void 0 === T2 ? void 0 : T2.function) && "string" != typeof D2.robotConfig.function && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid function(string): ${D2.robotConfig.function}`), (null === (C2 = D2.robotConfig) || void 0 === C2 ? void 0 : C2.customContent) && "string" != typeof D2.robotConfig.customContent && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid customContent(string): ${D2.robotConfig.customContent}`), (null === (N2 = D2.threadRoot) || void 0 === N2 ? void 0 : N2.senderId) && "string" != typeof D2.threadRoot.senderId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid senderId(string): ${D2.threadRoot.senderId}`), (null === (A2 = D2.threadRoot) || void 0 === A2 ? void 0 : A2.receiverId) && "string" != typeof D2.threadRoot.receiverId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid receiverId(string): ${D2.threadRoot.receiverId}`), (null === (O2 = D2.threadRoot) || void 0 === O2 ? void 0 : O2.messageClientId) && "string" != typeof D2.threadRoot.messageClientId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid messageClientId(string): ${D2.threadRoot.messageClientId}`), (null === (R2 = D2.threadRoot) || void 0 === R2 ? void 0 : R2.messageServerId) && "string" != typeof D2.threadRoot.messageServerId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid messageServerId(string): ${D2.threadRoot.messageServerId}`), D2.threadRoot && "createTime" in D2.threadRoot && isNaN(D2.threadRoot.createTime) && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid createTime(number): ${D2.threadRoot.createTime}`), D2.threadRoot && ![1, 3, 2, 0].includes(D2.threadRoot.conversationType) && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid conversationType(enum): ${D2.threadRoot.conversationType}`), (null === (b2 = D2.threadRoot) || void 0 === b2 ? void 0 : b2.conversationId) && "string" != typeof D2.threadRoot.conversationId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid conversationId(string): ${D2.threadRoot.conversationId}`), (null === (V2 = D2.threadReply) || void 0 === V2 ? void 0 : V2.senderId) && "string" != typeof D2.threadReply.senderId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid senderId(string): ${D2.threadReply.senderId}`), (null === (k2 = D2.threadReply) || void 0 === k2 ? void 0 : k2.receiverId) && "string" != typeof D2.threadReply.receiverId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid receiverId(string): ${D2.threadReply.receiverId}`), (null === (P2 = D2.threadReply) || void 0 === P2 ? void 0 : P2.messageClientId) && "string" != typeof D2.threadReply.messageClientId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid messageClientId(string): ${D2.threadReply.messageClientId}`), (null === (L2 = D2.threadReply) || void 0 === L2 ? void 0 : L2.messageServerId) && "string" != typeof D2.threadReply.messageServerId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid messageServerId(string): ${D2.threadReply.messageServerId}`), D2.threadReply && "createTime" in D2.threadReply && isNaN(D2.threadReply.createTime) && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid createTime(number): ${D2.threadReply.createTime}`), D2.threadReply && ![1, 3, 2, 0].includes(D2.threadReply.conversationType) && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid conversationType(enum): ${D2.threadReply.conversationType}`), (null === (w2 = D2.threadReply) || void 0 === w2 ? void 0 : w2.conversationId) && "string" != typeof D2.threadReply.conversationId && this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid conversationId(string): ${D2.threadReply.conversationId}`), delete D2.__clientExt, delete D2.userUpdateTime, D2;
    } catch (o3) {
      return this.core.logger.error(`V2NIMMessageConverterImpl.messageDeserialization: invalid message string: ${t2}`), null;
    }
  }
};
var Ai = "V2NIMMessageLogUtil";
var Oi = { "30_6": "v2GetMessageList", "33_2": "v2GetMessageListByRefers", "30_9": "v2ClearRoamingMessage", "30_18": "v2ClearHistoryMessage", "7_118": "onClearHistoryMessage", "4_24": "syncClearHistoryMessage", "31_23": "v2GetTeamMessageList", "32_14": "v2GetSuperTeamMessageList" };
var Ri = { conversationType: { id: 0, retType: "number" }, receiverId: 1, deleteRoam: { id: 2, converter: boolToInt }, teamId: 3, onlineSync: { id: 4, converter: boolToInt }, deleteTime: { id: 6, retType: "number" }, serverExtension: 7 };
var bi = [{ type: "Long", name: "beginTime" }, { type: "Long", name: "endTime" }, { type: "Long", name: "lastMsgId" }, { type: "Int", name: "limit" }, { type: "Bool", name: "direction" }, { type: "LongArray", name: "msgTypes" }];
var Vi = { v2GetMessageList: { sid: 30, cid: 6, service: Ai, params: [{ type: "String", name: "to" }, ...bi], response: [{ type: "PropertyArray", name: "msgs", reflectMapper: invertSerializeItem(Pr) }] }, v2GetMessageListByRefers: { sid: 33, cid: 2, service: Ai, params: [{ type: "PropertyArray", name: "tag", reflectMapper: Pr, select: ["conversationType", "senderId", "receiverId", "createTime", "messageServerId"] }], response: [{ type: "PropertyArray", name: "msgs", reflectMapper: invertSerializeItem(Pr) }] }, v2ClearRoamingMessage: { sid: 30, cid: 9, service: Ai, params: [{ type: "StrArray", name: "conversationIds" }] }, v2ClearHistoryMessage: { sid: 30, cid: 18, service: Ai, params: [{ type: "Property", name: "tag", reflectMapper: Ri }], response: [{ type: "Long", name: "timetag" }] }, v2GetTeamMessageList: { sid: 31, cid: 23, service: Ai, params: [{ type: "Long", name: "to" }, ...bi], response: [{ type: "PropertyArray", name: "msgs", reflectMapper: invertSerializeItem(Pr) }] }, v2GetSuperTeamMessageList: { sid: 32, cid: 14, service: Ai, params: [{ type: "Long", name: "to" }, ...bi], response: [{ type: "PropertyArray", name: "msgs", reflectMapper: invertSerializeItem(Pr) }] }, onClearHistoryMessage: { sid: 7, cid: 118, service: Ai, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Ri) }] }, syncClearHistoryMessage: { sid: 4, cid: 24, service: Ai, response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(Ri) }] } };
var V2NIMMessageLogUtil = class extends V2Service {
  constructor(t2) {
    super("V2NIMMessageLogUtil", t2), this.clearHistoryMessageFn = (t3) => {
      var o2 = formatClearHistoryNotification(this.core, t3);
      this.emitClearHistoryMessage([o2]);
    }, this.core = t2, this.service = this.core.V2NIMMessageService, "v2" === this.core.options.apiVersion && (registerParser({ cmdMap: Oi, cmdConfig: Vi }), this.setListener());
  }
  setListener() {
    this.core.eventBus.on("forwardReceive/V2NIMMessageLogService/clearHistoryMessage", this.clearHistoryMessageFn);
  }
  getMessageListByRefers(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate(Kt, { messageRefers: t2 }, "", true), 0 === t2.length)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "getMessageListByRefers: messageRefers cannot be an empty array" } });
      var o2 = [], a2 = t2.map((t3) => {
        var a3 = this.service.model.getMessageById(t3.messageClientId);
        return !a3 && t3.messageServerId && "0" !== t3.messageServerId && o2.push(t3), a3;
      }), m2 = [];
      if (o2.length > 0) {
        var u2 = yield this.core.sendCmd("v2GetMessageListByRefers", { tag: o2 });
        m2 = u2.content.msgs;
      }
      return a2.map((o3, a3) => {
        if (o3)
          return o3;
        var u3 = t2[a3], h2 = m2.find((t3) => t3.messageServerId === u3.messageServerId);
        return h2 ? completeMessage(this.core, h2) : void 0;
      }).filter((t3) => void 0 !== t3 && !this.service._filterMessage(t3));
    });
  }
  getMessageList(t2) {
    var o2;
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(zt, t2, "", true), validateConversationId(this.core.account, t2.conversationId);
      var a2 = this.core.V2NIMConversationIdUtil.parseConversationType(t2.conversationId), m2 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(t2.conversationId), u2 = 1 === a2 ? "v2GetMessageList" : 2 === a2 ? "v2GetTeamMessageList" : "v2GetSuperTeamMessageList", h2 = t2.beginTime || 0, g2 = t2.endTime || 0;
      if (0 !== h2 && 0 !== g2 && h2 > g2)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "getMessageList: beginTime cannot be greater than endTime" } });
      var I2 = void 0 === t2.direction ? 0 : t2.direction;
      if (t2.anchorMessage) {
        if (0 === I2) {
          if (0 === g2)
            g2 = t2.anchorMessage.createTime;
          else if (g2 !== t2.anchorMessage.createTime)
            throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "getMessageList: When providing anchorMessage, when sorting in descending order, endTime does not need to be provided, or endTime should be equal to anchorMessage.createTime" } });
        } else if (0 === h2)
          h2 = t2.anchorMessage.createTime;
        else if (h2 !== t2.anchorMessage.createTime)
          throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "getMessageList: When providing anchorMessage, when sorting in ascending order, there is no need to provide beginTime, or beginTime should be equal to anchorMessage.createTime" } });
      }
      var M2 = null === (o2 = t2.anchorMessage) || void 0 === o2 ? void 0 : o2.messageServerId, _2 = yield this.core.sendCmd(u2, { beginTime: h2, endTime: g2, lastMsgId: M2 || 0, limit: t2.limit || 50, direction: I2, msgTypes: t2.messageTypes ? t2.messageTypes.slice() : [], to: m2 }), { content: E2 } = _2, S2 = E2.msgs.map((t3) => completeMessage(this.core, t3));
      return M2 && (S2 = S2.filter((t3) => t3.messageServerId !== M2)), this.getMessageListMonkeyPatch(S2, t2);
    });
  }
  getMessageListMonkeyPatch(t2, o2) {
    var a2 = o2.conversationId, m2 = t2, u2 = m2.reduce((t3, o3) => (t3[o3.messageClientId] = true, t3), {}), h2 = this.service.model.getMessagesByConversationId(a2);
    h2 = h2.sort((t3, a3) => 1 === o2.direction ? t3.createTime - a3.createTime : a3.createTime - t3.createTime);
    var g2 = 0, I2 = o2.beginTime || 0, M2 = o2.endTime || 0;
    o2.anchorMessage && (0 === o2.direction ? M2 = o2.anchorMessage.createTime : I2 = o2.anchorMessage.createTime, g2 = h2.findIndex((t3) => {
      var a3;
      return t3.messageClientId === (null === (a3 = o2.anchorMessage) || void 0 === a3 ? void 0 : a3.messageClientId);
    }), g2 += 1);
    for (var _2 = g2; _2 < h2.length; _2++) {
      var E2 = h2[_2], S2 = !u2[E2.messageClientId], T2 = void 0 === E2.sendingState || 1 === E2.sendingState, C2 = E2.conversationId === a2, N2 = E2.createTime > I2 && (E2.createTime < M2 || 0 === M2), A2 = !o2.messageTypes || o2.messageTypes.includes(E2.messageType);
      S2 && T2 && C2 && N2 && A2 && m2.push(h2[_2]);
    }
    return (m2 = m2.sort((t3, a3) => 1 === o2.direction ? t3.createTime - a3.createTime : a3.createTime - t3.createTime)).slice(0, o2.limit || 50);
  }
  clearHistoryMessage(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xt, t2, "", true), validateConversationId(this.core.account, t2.conversationId);
      var { conversationId: o2, deleteRoam: a2, onlineSync: m2, serverExtension: u2 } = t2, h2 = this.core.V2NIMConversationIdUtil.parseConversationType(o2), g2 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(o2), I2 = { deleteRoam: a2, onlineSync: m2, serverExtension: u2, conversationType: h2 };
      1 === h2 ? I2.receiverId = g2 : I2.teamId = g2;
      var M2 = this.core.timeOrigin.getNTPTime();
      (t2.clearMode = t2.clearMode || 0, 0 === t2.clearMode) && (M2 = (yield this.core.sendCmd("v2ClearHistoryMessage", { tag: I2 })).content.timetag);
      2 === t2.clearMode && Ae.localStorage.setItem(`nim_${this.core.account}_${o2}_clearTime`, M2.toString()), this.core.eventBus.emit("forwardSend/V2NIMMessageLogService/clearHistoryMessage", Object.assign(Object.assign({}, I2), { deleteTime: M2 })), this.emitClearHistoryMessage([{ deleteTime: M2, serverExtension: u2, conversationId: o2 }]);
    });
  }
  clearRoamingMessage(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate({ conversationIds: { type: "array", itemType: "string", min: 1 } }, { conversationIds: t2 }, void 0, true);
      var o2 = [];
      try {
        o2 = t2.map((t3) => {
          var o3 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(t3);
          return getSessionIdFromConvInfo(this.core.V2NIMConversationIdUtil.parseConversationType(t3), o3);
        });
      } catch (o3) {
        throw this.logger.error(`V2NIMMessage::clearRoamingMessage with ${t2}`, o3), new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_PARAMETER_ERROR, detail: { reason: "Failed to create session", rawData: `${t2}` } });
      }
      yield this.core.sendCmd("v2ClearRoamingMessage", { conversationIds: o2 });
    });
  }
  syncClearHistoryMessageHandler(t2) {
    var o2 = t2.content.data.map((t3) => formatClearHistoryNotification(this.core, t3));
    this.emitClearHistoryMessage(o2);
  }
  onClearHistoryMessageHandler(t2) {
    var o2 = formatClearHistoryNotification(this.core, t2.content.data);
    this.emitClearHistoryMessage([o2]);
  }
  emitClearHistoryMessage(t2) {
    t2.forEach((t3) => {
      this.service.model.deleteMessages(t3.conversationId, t3.deleteTime), this.core.eventBus.emit("V2NIMSync/updateTimetag", { sessionHistoryMsgsDelete: t3.deleteTime });
    }), this.core.eventBus.emit("V2NIMMessageLogUtil/onClearHistoryNotifications", t2), this.service.emit("onClearHistoryNotifications", t2);
  }
};
var ki = "V2NIMMessageExtendUtil";
var Pi = { "29_5": "v2VoiceToText", "33_15": "v2PinMessage", "33_16": "v2UpdatePinMessage", "33_17": "v2UnpinMessage", "23_18": "onPinMessage", "23_19": "onUpdatePinMessage", "23_20": "onUnpinMessage", "23_115": "onPinMessage", "23_116": "onUpdatePinMessage", "23_117": "onUnpinMessage", "33_21": "v2GetPinMessageList", "33_3": "v2AddQuickComment", "33_4": "v2RemoveQuickComment", "33_7": "v2GetQuickComment", "23_5": "onAddQuickComment", "23_6": "onRemoveQuickComment", "23_103": "onAddQuickComment", "23_104": "onRemoveQuickComment", "33_8": "v2AddCollection", "33_9": "v2RemoveCollections", "33_10": "v2UpdateCollectionExtension", "33_11": "v2GetCollectionListByOption", "30_26": "v2SearchCloudMessagesGroupByConversation", "30_27": "v2SearchCloudMessages", "30_34": "v2SearchCloudMessagesEx", "33_1": "v2GetThreadMessageList" };
var Li = { conversationType: { id: 1, converter: conversationTypeV2ToV1, retConverter: conversationTypeV1ToV2, access: "messageRefer.conversationType" }, senderId: { id: 2, access: "messageRefer.senderId" }, receiverId: { id: 3, access: "messageRefer.receiverId" }, createTime: { id: 4, retType: "number", access: "messageRefer.createTime" }, messageServerId: { id: 5, access: "messageRefer.messageServerId" }, messageClientId: { id: 6, access: "messageRefer.messageClientId" }, detail: 7, modify: { id: 8, retType: "number" } };
var wi = { conversationType: { id: 1, access: "messageRefer.conversationType", retConverter: conversationTypeV1ToV2 }, senderId: { id: 2, access: "messageRefer.senderId" }, receiverId: { id: 3, access: "messageRefer.receiverId" }, time: { id: 4, access: "messageRefer.createTime", converter: boolToInt, retType: "number" }, messageServerId: { id: 5, access: "messageRefer.messageServerId" }, messageClientId: { id: 6, access: "messageRefer.messageClientId" }, operatorId: 7, serverExtension: 8, createTime: { id: 9, converter: boolToInt, retType: "number" }, updateTime: { id: 10, converter: boolToInt, retType: "number" } };
var Di = { operatorId: 1, index: { id: 2, retType: "number" }, createTime: { id: 3, retType: "number" }, serverExtension: 4, pushEnabled: { id: 5, access: "pushConfig.pushEnabled", converter: boolToInt }, needBadge: { id: 6, access: "pushConfig.needBadge", converter: boolToInt }, title: { id: 7, access: "pushConfig.title" }, pushContent: { id: 8, access: "pushConfig.pushContent" }, pushPayload: { id: 9, access: "pushConfig.pushPayload" } };
var Ui = { accid: 1, serverExtension: 2, createTime: { id: 3, retType: "number" }, updateTime: { id: 4, retType: "number" } };
var xi = { collectionId: 1, collectionType: { id: 2, retType: "number" }, collectionData: 3, serverExtension: 4, uniqueId: 5, createTime: { id: 6, retType: "number" }, updateTime: { id: 7, retType: "number" } };
var Fi = { keyword: 1, beginTime: 2, endTime: 3, messageLimit: 5, sortOrder: { id: 6, converter: (t2) => 0 === t2 ? 2 : 1 }, p2pAccountIds: { id: 7, converter: (t2) => t2.join(",") }, teamIds: { id: 8, converter: (t2) => t2.join(",") }, senderAccountIds: { id: 9, converter: (t2) => t2.join(",") }, messageTypes: { id: 10, converter: (t2) => t2.join(",") }, messageSubtypes: { id: 11, converter: (t2) => t2.join(",") } };
var Bi = { keywordList: { id: 1, converter: (t2) => objectToJSONString(t2) }, keywordMatchType: 2, searchStartTime: 3, searchTimePeriod: 4, pageToken: 5, limit: 7, direction: 8, conversationId: 9, senderAccountIds: { id: 12, converter: (t2) => t2.join(",") }, messageTypes: { id: 13, converter: (t2) => t2.join(",") }, messageSubtypes: { id: 14, converter: (t2) => t2.join(",") } };
var $i = Object.assign(Object.assign({}, Fi), { conversationLimit: 4 });
var ji = { v2PinMessage: { sid: 33, cid: 15, service: ki, params: [{ type: "Property", name: "msg", reflectMapper: Pr, select: ["conversationType", "receiverId", "senderId", "createTime", "messageClientId", "messageServerId"] }, { type: "Property", name: "msgPin", reflectMapper: Ui }], response: [{ type: "Long", name: "timetag" }] }, v2UnpinMessage: { sid: 33, cid: 17, service: ki, params: [{ type: "Property", name: "msg", reflectMapper: Pr, select: ["conversationType", "receiverId", "senderId", "createTime", "messageClientId", "messageServerId"] }, { type: "Property", name: "msgPin", reflectMapper: Ui }], response: [{ type: "Long", name: "timetag" }] }, v2UpdatePinMessage: { sid: 33, cid: 16, service: ki, params: [{ type: "Property", name: "msg", reflectMapper: Pr, select: ["conversationType", "receiverId", "senderId", "createTime", "messageClientId", "messageServerId"] }, { type: "Property", name: "msgPin", reflectMapper: Ui }], response: [{ type: "Long", name: "timetag" }] }, v2GetPinMessageList: { sid: 33, cid: 21, service: ki, params: [{ type: "Property", name: "tag", reflectMapper: { conversationId: 1, timetag: 2 } }], response: [{ type: "Long", name: "timetag" }, { type: "Bool", name: "changed" }, { type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(wi) }] }, v2VoiceToText: { sid: 29, cid: 5, service: ki, params: [{ type: "Property", name: "tag", reflectMapper: { mimeType: 0, sampleRate: 1, voiceUrl: 2, duration: 3 } }], response: [{ type: "String", name: "data" }] }, v2AddQuickComment: { sid: 33, cid: 3, service: ki, params: [{ type: "Property", name: "message", reflectMapper: Pr, select: ["conversationType", "senderId", "receiverId", "createTime", "messageClientId", "messageServerId"] }, { type: "Property", name: "quickComment", reflectMapper: Di }], response: [{ type: "Long", name: "timetag" }] }, v2RemoveQuickComment: { sid: 33, cid: 4, service: ki, params: [{ type: "Property", name: "message", reflectMapper: Pr, select: ["conversationType", "senderId", "receiverId", "createTime", "messageClientId", "messageServerId"] }, { type: "Property", name: "quickComment", reflectMapper: Di }], response: [{ type: "Long", name: "timetag" }] }, onAddQuickComment: { sid: 23, cid: 5, service: ki, response: [{ type: "Property", name: "message", reflectMapper: invertSerializeItem(Pr) }, { type: "Property", name: "quickComment", reflectMapper: invertSerializeItem(Di) }] }, onRemoveQuickComment: { sid: 23, cid: 6, service: ki, response: [{ type: "Property", name: "message", reflectMapper: invertSerializeItem(Pr) }, { type: "Property", name: "quickComment", reflectMapper: invertSerializeItem(Di) }] }, v2GetQuickComment: { sid: 33, cid: 7, service: ki, params: [{ type: "PropertyArray", name: "tag", reflectMapper: Li }], response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(Li) }] }, onPinMessage: { sid: 23, cid: 18, service: ki, response: [{ type: "Property", name: "msg", reflectMapper: invertSerializeItem(Pr) }, { type: "Property", name: "pinInfo", reflectMapper: invertSerializeItem(Ui) }] }, onUpdatePinMessage: { sid: 23, cid: 19, service: ki, response: [{ type: "Property", name: "msg", reflectMapper: invertSerializeItem(Pr) }, { type: "Property", name: "pinInfo", reflectMapper: invertSerializeItem(Ui) }] }, onUnpinMessage: { sid: 23, cid: 20, service: ki, response: [{ type: "Property", name: "msg", reflectMapper: invertSerializeItem(Pr) }, { type: "Property", name: "pinInfo", reflectMapper: invertSerializeItem(Ui) }] }, v2AddCollection: { sid: 33, cid: 8, service: ki, params: [{ type: "Property", name: "tag", reflectMapper: xi }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(xi) }] }, v2RemoveCollections: { sid: 33, cid: 9, service: ki, params: [{ type: "PropertyArray", name: "tag", reflectMapper: xi, select: ["collectionId", "createTime"] }], response: [{ type: "Int", name: "data" }] }, v2UpdateCollectionExtension: { sid: 33, cid: 10, service: ki, params: [{ type: "Property", name: "tag", reflectMapper: xi }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(xi) }] }, v2GetCollectionListByOption: { sid: 33, cid: 11, service: ki, params: [{ type: "Property", name: "tag", reflectMapper: { beginTime: 1, endTime: 2, excludeId: 3, limit: 4, direction: 5, collectionType: 6 } }], response: [{ type: "Long", name: "total" }, { type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(xi) }] }, v2SearchCloudMessagesGroupByConversation: { sid: 30, cid: 26, service: ki, params: [{ type: "Property", name: "tag", reflectMapper: $i }], response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, v2SearchCloudMessages: { sid: 30, cid: 27, service: ki, params: [{ type: "Property", name: "tag", reflectMapper: Fi }], response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(Pr) }] }, v2SearchCloudMessagesEx: { sid: 30, cid: 34, service: ki, params: [{ type: "Property", name: "tag", reflectMapper: Bi }], response: [{ type: "PropertyArray", name: "msgs", reflectMapper: invertSerializeItem(Pr) }, { type: "Int", name: "hasMore" }, { type: "String", name: "nextPageToken" }] }, v2GetThreadMessageList: { sid: 33, cid: 1, service: ki, params: [{ type: "Property", name: "messageRefer", reflectMapper: Pr }, { type: "Property", name: "tag", reflectMapper: { beginTime: 1, endTime: 2, excludeMessageServerId: 3, limit: 4, reverse: 5 } }], response: [{ type: "Property", name: "message", reflectMapper: invertSerializeItem(Pr) }, { type: "Property", name: "replyResult", reflectMapper: invertSerializeItem({ total: { id: 1, retType: "number" }, timestamp: { id: 2, retType: "number" } }) }, { type: "PropertyArray", name: "replyList", reflectMapper: invertSerializeItem(Pr) }] } };
var V2NIMMessageExtendUtil = class extends V2Service {
  constructor(t2) {
    super("V2NIMMessageExtendUtil", t2), this.core = t2, this.service = this.core.V2NIMMessageService, "v2" === this.core.options.apiVersion && registerParser({ cmdMap: Pi, cmdConfig: ji });
  }
  pinMessage(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Yt, t2, "message", true), validate(Qt, { serverExtension: o2 }, "", true);
      var a2 = yield this.core.sendCmd("v2PinMessage", { msg: t2, msgPin: { serverExtension: o2 } });
      this.emitPinNotification({ pinState: 1, message: t2, serverExtension: o2, createTime: a2.content.timetag, updateTime: a2.content.timetag, operatorId: this.core.account });
    });
  }
  unpinMessage(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Yt, t2, "messageRefer", true), validate(Qt, { serverExtension: o2 }, "", true);
      var a2 = yield this.core.sendCmd("v2UnpinMessage", { msg: t2, msgPin: { serverExtension: o2 } });
      this.emitPinNotification({ pinState: 0, message: t2, serverExtension: o2, updateTime: a2.content.timetag, operatorId: this.core.account });
    });
  }
  updatePinMessage(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Yt, t2, "message", true), validate(Qt, { serverExtension: o2 }, "", true);
      var a2 = yield this.core.sendCmd("v2UpdatePinMessage", { msg: t2, msgPin: { serverExtension: o2 } });
      this.emitPinNotification({ pinState: 2, message: t2, serverExtension: o2, updateTime: a2.content.timetag, operatorId: this.core.account });
    });
  }
  getPinnedMessageList(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), !this.core.V2NIMConversationIdUtil || !this.core.V2NIMConversationIdUtil.parseConversationType)
        throw new Error('Service "V2NIMConversationService" does not exist');
      validateConversationId(this.core.account, t2);
      var o2 = this.core.V2NIMConversationIdUtil.convertToV1ConversationId(t2);
      return o2 = o2.replace("superTeam", "super_team"), (yield this.core.sendCmd("v2GetPinMessageList", { tag: { conversationId: o2, timetag: 0 } })).content.data.map((t3) => Object.assign(Object.assign({}, t3), { messageRefer: Object.assign(Object.assign({}, t3.messageRefer), { conversationId: this.core.V2NIMConversationIdUtil.messageConversationId(t3.messageRefer) }) })).sort((t3, o3) => o3.updateTime - t3.updateTime);
    });
  }
  addQuickComment(t2, o2, a2, m2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(rr, { message: t2, index: o2, serverExtension: a2, pushConfig: m2 }, "", true);
      var u2 = yield this.core.sendCmd("v2AddQuickComment", { message: t2, quickComment: { index: o2, serverExtension: a2, pushConfig: m2 } }), h2 = { operationType: 1, quickComment: { messageRefer: formatMessageRefer(this.core, t2), createTime: u2.content.timetag, index: o2, serverExtension: a2 || "", operatorId: this.core.account } };
      this.core.V2NIMMessageService.emit("onMessageQuickCommentNotification", h2);
    });
  }
  removeQuickComment(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Yt, t2, "messageRefer", true), validate({ index: { type: "number", min: 1 } }, { index: o2 }, "", true), validate({ serverExtension: { type: "string", required: false } }, { serverExtension: a2 }, "", true);
      var m2 = yield this.core.sendCmd("v2RemoveQuickComment", { message: t2, quickComment: { index: o2, serverExtension: a2 } }), u2 = { operationType: 2, quickComment: { messageRefer: formatMessageRefer(this.core, t2), createTime: m2.content.timetag, index: o2, serverExtension: a2 || "", operatorId: this.core.account } };
      this.core.V2NIMMessageService.emit("onMessageQuickCommentNotification", u2);
    });
  }
  getQuickCommentList(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(ir, { messages: t2 }, "", true);
      var o2 = {};
      return (yield this.core.sendCmd("v2GetQuickComment", { tag: t2.map((t3) => ({ messageRefer: t3 })) })).content.data.forEach((t3) => {
        var a2, m2;
        try {
          if (!t3.detail)
            return void (o2[a2 = t3.messageRefer.messageClientId] || (o2[a2] = []));
          var u2 = JSON.parse(t3.detail);
          o2[m2 = t3.messageRefer.messageClientId] || (o2[m2] = []), u2.forEach((a3) => {
            o2[t3.messageRefer.messageClientId].push({ messageRefer: Object.assign(Object.assign({}, t3.messageRefer), { conversationId: this.core.V2NIMConversationIdUtil.messageConversationId(t3.messageRefer) }), operatorId: a3[1], index: parseInt(a3[2]), createTime: parseInt(a3[3]), serverExtension: a3[4] });
          });
        } catch (o3) {
          this.logger.error("getQuickCommentList JSON Parse Error", t3.detail, o3);
        }
      }), o2;
    });
  }
  voiceToText(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate(tr, t2, "", true), !t2.voicePath && !t2.voiceUrl && !t2.file)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "voiceToText: voicePath、voiceUrl、file cannot be empty at the same time" } });
      var { voicePath: o2, file: a2, mimeType: m2, sampleRate: u2, duration: h2, sceneName: g2 } = t2, I2 = g2 ? this.core.V2NIMStorageService.getStorageScene(g2) : null, M2 = t2.voiceUrl;
      if (!M2) {
        var _2 = {};
        a2 ? _2.file = a2 : 0 === (null == o2 ? void 0 : o2.indexOf("nim-external")) ? _2.fileInput = o2 : _2.filePath = o2, M2 = (yield this.core.cloudStorage.uploadFile(Object.assign({ type: "audio", nosScenes: I2 ? I2.sceneName : void 0, nosSurvivalTime: I2 ? I2.expireTime : void 0 }, _2))).url;
      }
      return (yield this.core.sendCmd("v2VoiceToText", { tag: { voiceUrl: M2, mimeType: m2, sampleRate: u2, duration: h2 } }, { timeout: 3e4 })).content.data;
    });
  }
  onPinMessageHandler(t2) {
    return this.pinMessageChangeHandler(t2, 1);
  }
  onUnpinMessageHandler(t2) {
    return this.pinMessageChangeHandler(t2, 0);
  }
  onUpdatePinMessageHandler(t2) {
    return this.pinMessageChangeHandler(t2, 2);
  }
  pinMessageChangeHandler(t2, o2) {
    var a2 = t2.content.msg, m2 = t2.content.pinInfo;
    a2.conversationId = this.core.V2NIMConversationIdUtil.messageConversationId(a2), this.emitPinNotification({ pinState: o2, message: a2, serverExtension: m2.serverExtension, createTime: m2.createTime, updateTime: m2.updateTime, operatorId: m2.accid });
  }
  emitPinNotification(t2) {
    var o2 = { pinState: t2.pinState, pin: Object.assign(Object.assign({ serverExtension: t2.serverExtension || "", operatorId: t2.operatorId }, t2.createTime ? { createTime: t2.createTime } : {}), { updateTime: t2.updateTime, messageRefer: formatMessageRefer(this.core, t2.message) }) };
    this.core.V2NIMMessageService.emit("onMessagePinNotification", o2);
  }
  onAddQuickCommentHandler(t2) {
    return this.onQuickCommentNotificationHandler(t2, 1);
  }
  onRemoveQuickCommentHandler(t2) {
    return this.onQuickCommentNotificationHandler(t2, 2);
  }
  onQuickCommentNotificationHandler(t2, o2) {
    var a2 = { operationType: o2, quickComment: Object.assign({ messageRefer: Object.assign(Object.assign({}, t2.content.message), { conversationId: this.core.V2NIMConversationIdUtil.messageConversationId(t2.content.message) }) }, t2.content.quickComment) };
    this.core.V2NIMMessageService.emit("onMessageQuickCommentNotification", a2);
  }
  addCollection(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), validate(or, { params: t2 }, "", true), (yield this.core.sendCmd("v2AddCollection", { tag: t2 })).content.data;
    });
  }
  removeCollections(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), validate(sr, { collections: t2 }, "", true), (yield this.core.sendCmd("v2RemoveCollections", { tag: t2 })).content.data;
    });
  }
  updateCollectionExtension(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), validate(nr, { collection: t2, serverExtension: o2 }, "", true), (yield this.core.sendCmd("v2UpdateCollectionExtension", { tag: Object.assign(Object.assign({}, t2), { serverExtension: o2 }) })).content.data;
    });
  }
  getCollectionListByOption(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), validate(ar, t2, "", true), (yield this.getCollectionListExByOption(t2)).collectionList;
    });
  }
  getCollectionListExByOption(t2) {
    var o2, a2;
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(ar, t2, "", true);
      var m2 = t2.beginTime || 0, u2 = t2.endTime || 0, h2 = void 0 === t2.direction ? 0 : t2.direction;
      if (void 0 !== (null === (o2 = t2.anchorCollection) || void 0 === o2 ? void 0 : o2.collectionId)) {
        if (0 === t2.direction) {
          if (0 === u2)
            u2 = t2.anchorCollection.createTime;
          else if (u2 !== t2.anchorCollection.createTime)
            throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "getCollectionListExByOption: When providing anchorCollection, when sorting in descending order, endTime does not need to be provided, or endTime should be equal to anchorCollection.createTime" } });
        } else if (0 === m2)
          m2 = t2.anchorCollection.createTime;
        else if (m2 !== t2.anchorCollection.createTime)
          throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "getCollectionListExByOption: When providing anchorCollection, when sorting in ascending order, there is no need to provide beginTime, or beginTime should be equal to anchorCollection.createTime" } });
      }
      if (0 !== m2 && 0 !== u2 && m2 >= u2)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "getCollectionListExByOption: beginTime cannot be greater than endTime" } });
      var g2 = { beginTime: m2, endTime: u2, direction: h2, limit: t2.limit, collectionType: t2.collectionType, excludeId: (null === (a2 = t2.anchorCollection) || void 0 === a2 ? void 0 : a2.collectionId) ? t2.anchorCollection.collectionId : 0 };
      g2.collectionType || delete g2.collectionType;
      var I2 = yield this.core.sendCmd("v2GetCollectionListByOption", { tag: g2 });
      return { totalCount: I2.content.total, collectionList: I2.content.data };
    });
  }
  searchCloudMessages(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(cr, t2, "", true);
      var o2 = t2.beginTime || 0, a2 = t2.endTime || 0;
      if (0 !== o2 && 0 !== a2 && o2 > a2)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "searchCloudMessages: beginTime cannot be greater than endTime" } });
      var m2 = void 0 === t2.sortOrder ? 0 : t2.sortOrder, u2 = t2.conversationLimit || 0, h2 = t2.messageLimit || 10, g2 = u2 > 0 ? "v2SearchCloudMessagesGroupByConversation" : "v2SearchCloudMessages", I2 = yield this.core.sendCmd(g2, { tag: Object.assign(Object.assign({}, t2), { beginTime: o2, endTime: a2, sortOrder: m2, conversationLimit: u2, messageLimit: h2 }) });
      return this.service._filterMessagesByFn(I2.content.data.map((t3) => completeMessage(this.core, t3)));
    });
  }
  searchCloudMessagesEx(t2) {
    var o2, a2, m2;
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate(dr, t2, "", true), t2.conversationId && validateConversationId(this.core.account, t2.conversationId), !(null === (o2 = t2.keywordList) || void 0 === o2 ? void 0 : o2.length) && !(null === (a2 = t2.senderAccountIds) || void 0 === a2 ? void 0 : a2.length) && !(null === (m2 = t2.messageTypes) || void 0 === m2 ? void 0 : m2.length))
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "searchCloudMessagesEx: keywordList senderAccountIds messageTypes cannot be empty at the same time" } });
      0 === t2.searchTimePeriod && delete t2.searchTimePeriod;
      var u2 = yield this.core.sendCmd("v2SearchCloudMessagesEx", { tag: Object.assign({}, t2) }), { msgs: h2, hasMore: g2, nextPageToken: I2 } = u2.content, M2 = this.service._filterMessagesByFn(h2.map((t3) => completeMessage(this.core, t3))).sort((t3, o3) => o3.createTime - t3.createTime);
      return { count: h2.length, items: formatSearchCloudMessageListEx(this.core, M2), hasMore: intToBool(g2), nextPageToken: I2 };
    });
  }
  getThreadMessageList(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate(vr, t2, "getThreadMessageList", true), t2.beginTime = t2.beginTime || 0, t2.endTime && t2.beginTime > t2.endTime)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "getThreadMessageList: beginTime cannot be greater than endTime" } });
      var o2 = yield this.core.sendCmd("v2GetThreadMessageList", { messageRefer: t2.messageRefer, tag: { beginTime: t2.beginTime, endTime: t2.endTime, limit: t2.limit, reverse: 1 === t2.direction ? 1 : 0, excludeMessageServerId: t2.excludeMessageServerId } }), { message: a2, replyResult: m2, replyList: u2 } = o2.content, h2 = completeMessage(this.core, a2), g2 = u2.map((t3) => completeMessage(this.core, t3));
      return g2 = this.service._filterMessagesByFn(g2), g2 = this.service._filterMessageByClearTime(h2.conversationId, g2), { message: h2, timestamp: m2.timestamp, replyCount: m2.total, replyList: g2 };
    });
  }
};
var V2NIMNotificationServiceImpl = class extends V2Service {
  constructor(t2, o2) {
    super("V2NIMNotificationService", t2), this.config = { compatibleWithV1: true }, this.notificationUtil = new NotificationUtil(this.core), this.core._registerDep(V2NIMConversationIdUtilImpl, "V2NIMConversationIdUtil"), "v2" === this.core.options.apiVersion && (registerParser({ cmdMap: $r, cmdConfig: qr }), this.setOptions(o2));
  }
  setOptions(t2) {
    var o2;
    (null === (o2 = this.core.systemMessage) || void 0 === o2 ? void 0 : o2.name) ? this.config.compatibleWithV1 = true : this.config.compatibleWithV1 = false, this.config = Object.assign(this.config, t2);
  }
  emit(t2, ...o2) {
    var a2 = `${this.name}::emit ${t2.toString()}`;
    if ("onReceiveCustomNotifications" === t2) {
      var m2 = o2[0];
      this.logger.log(`${a2}`, m2.map((t3) => `sender:${t3.senderId};receiver:${t3.receiverId};ctype:${t3.conversationType};time:${t3.timestamp}`));
    } else if ("onReceiveBroadcastNotifications" === t2) {
      var u2 = o2[0];
      this.logger.log(`${a2}`, u2.map((t3) => `id:${t3.id};sender:${t3.senderId};time:${t3.timestamp}`));
    } else
      this.logger.log(`${a2}`, ...o2);
    return super.emit(t2, ...o2);
  }
  sendCustomNotification(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validateConversationId(this.core.account, t2), validate(Yr, { content: o2, params: a2 }, "", true);
      var m2 = 3 === this.core.V2NIMConversationIdUtil.parseConversationType(t2) ? "v2SendCustomNotificationWithSuperTeam" : "v2SendCustomNotification", u2 = this.notificationUtil.generateNotificationTag(t2, o2, a2);
      yield this.core.sendCmd(m2, { tag: u2 });
    });
  }
  processSystemNotification(t2) {
    var o2 = t2.type;
    if ([0, 1, 2, 3, 4, 15, 16, 17, 18].includes(o2))
      this.core.eventBus.emit("V2NIMTeamService/sysNotification", t2);
    else {
      if (![5, 6].includes(o2)) {
        var a2 = Object.assign(Object.assign({}, t2), { conversationType: { 100: 1, 101: 2, 102: 1, 103: 3 }[o2] });
        return delete a2.type, a2;
      }
      this.core.eventBus.emit("V2NIMFriendService/sysNotification", t2);
    }
  }
  markBroadcastMsgAck(t2) {
    this.config.compatibleWithV1 || this.core.sendCmd("v2BatchMarkRead", { sid: 7, cid: 17, ids: t2.map((t3) => t3.id) });
  }
  syncBroadcastMsgHandler(t2) {
    var o2 = t2.content.datas;
    this.markBroadcastMsgAck(o2), o2.forEach((t3) => {
      this.core.eventBus.emit("V2NIMSync/updateTimetag", { broadcastMsgs: parseInt(t3.id) });
    }), this.emit("onReceiveBroadcastNotifications", o2);
  }
  onBroadcastMsgHandler(t2) {
    var o2 = t2.content.data;
    this.markBroadcastMsgAck([o2]), this.core.eventBus.emit("V2NIMSync/updateTimetag", { broadcastMsgs: parseInt(o2.id) }), this.emit("onReceiveBroadcastNotifications", [o2]);
  }
  onSysNotificationHandler(t2) {
    var o2 = fillIdServer(t2, t2.content.data, "idServer");
    this.markSysNotificationAck([o2]);
    var a2 = this.processSystemNotification(o2);
    a2 && this.emit("onReceiveCustomNotifications", [a2]);
  }
  v2SyncOfflineSysNotificationsHandler(t2) {
    this.markSysNotificationAck(t2.content.datas);
    var o2 = t2.content.datas.sort((t3, o3) => t3.timestamp - o3.timestamp).map((t3) => this.processSystemNotification(t3)).filter((t3) => t3);
    o2 && this.emit("onReceiveCustomNotifications", o2);
  }
  v2NotificationRevokeHandler(t2) {
    var o2 = fillIdServer(t2, t2.content.data, "idServer");
    this.markSysNotificationAck([o2]);
  }
  v2NotificationSyncRevokeHandler(t2) {
    var { type: o2 } = t2.content;
    1 === parseInt(o2) && this.markSysNotificationAck(t2.content.datas);
  }
  markSysNotificationAck(t2) {
    if (!this.config.compatibleWithV1) {
      var o2 = [], a2 = [], m2 = [15, 16, 17, 18, 103];
      t2.forEach((t3) => {
        t3.idServer && (m2.includes(t3.type) ? a2.push(t3.idServer) : o2.push(t3.idServer));
      }), o2.length > 0 && this.core.sendCmd("v2BatchMarkRead", { sid: "7", cid: "3", ids: o2 }), a2.length > 0 && this.core.sendCmd("v2BatchMarkRead", { sid: "21", cid: "19", ids: a2 });
    }
  }
};
var Gi;
var qi = { joinMode: { type: "enum", values: [1, 0, 2], required: false }, agreeMode: { type: "enum", values: [0, 1], required: false }, inviteMode: { type: "enum", values: [1, 0], required: false }, updateInfoMode: { type: "enum", values: [1, 0], required: false }, updateExtensionMode: { type: "enum", values: [1, 0], required: false }, chatBannedMode: { type: "enum", values: [0, 1], required: false } };
var Hi = { type: "object", required: true, rules: Object.assign({ name: { type: "string", allowEmpty: false }, teamType: { type: "enum", values: [1, 2] }, memberLimit: { type: "number", min: 1, required: false } }, qi) };
var zi = { type: "array", min: 1, itemType: "string" };
var Yi = { type: "boolean" };
var Ki = { type: "string" };
var Wi = { type: "string", allowEmpty: false };
var Ji = { type: "object", rules: { antispamBusinessId: { type: "string", required: false } }, required: false };
var Xi = { teamId: { type: "string", regExp: /^[1-9]\d*$/, allowEmpty: false } };
var Qi = { teamIds: { type: "array", itemRules: { type: "string", allowEmpty: false, regExp: /^[1-9]\d*$/ }, min: 1 } };
var Zi = { teamType: { type: "enum", values: [1, 2] } };
var eo = { teamTypes: { type: "array", itemType: "enum", values: [1, 2], required: false } };
var to = { inviteeParams: { type: "object", required: true, rules: { inviteeAccountIds: zi, postscript: Object.assign(Object.assign({}, Ki), { required: false }), serverExtension: Object.assign(Object.assign({}, Ki), { required: false }) } } };
var ro = { updateTeamInfoParams: { type: "object", required: true, rules: Object.assign({ name: { type: "string", allowEmpty: false, required: false }, memberLimit: { type: "number", min: 1, required: false } }, qi) } };
var io = { type: "enum", values: [0, 2] };
var oo = { memberInfoParams: { type: "object", rules: { teamNick: { type: "string", required: false }, serverExtension: { type: "string", required: false }, antispamConfig: { type: "object", required: false, rules: { antispamBusinessId: { type: "string", required: false } } } } } };
var so = { chatBannedMode: { type: "enum", values: [0, 1] } };
var no = { queryOption: { type: "object", rules: { roleQueryType: { type: "enum", values: [0, 2, 1] }, onlyChatBanned: { type: "boolean", required: false }, direction: { type: "enum", values: [1, 0], required: false }, limit: { type: "number", min: 1, required: false }, nextToken: { type: "string", required: false } } } };
var ao = { teamId: Xi.teamId, teamType: { type: "enum", values: [1, 2] }, operatorAccountId: { type: "string", allowEmpty: false } };
var co = { actionType: { type: "enum", values: [2, 0, 1, 3] } };
var lo = { actionType: { type: "enum", values: [2] } };
var po = { actionType: { type: "enum", values: [0] } };
var mo = { types: { type: "array", itemType: "enum", values: [0, 2, 1, 3], required: false }, status: { type: "array", itemType: "enum", values: [1, 3, 0, 2], required: false }, offset: { type: "number", min: 0, required: false }, limit: { type: "number", min: 1, required: false } };
var uo = { teamId: Xi.teamId, teamType: Zi.teamType, accountIds: zi };
var ho = { accountId: { type: "string", allowEmpty: false }, teamNick: { type: "string" }, antispamConfig: { type: "object", required: false, rules: { antispamBusinessId: { type: "string", required: false } } } };
var V2NIMTeamModelImpl = class {
  constructor() {
    this.teamMap = /* @__PURE__ */ new Map(), this.superTeamMap = /* @__PURE__ */ new Map();
  }
  set(t2) {
    t2.forEach((t3) => {
      this.chooseMap(t3.teamType).set(t3.teamId, t3);
    });
  }
  reset() {
    this.teamMap.clear(), this.superTeamMap.clear();
  }
  count(t2, o2 = true) {
    var a2 = this.chooseMap(t2), m2 = 0;
    return a2.forEach((t3) => {
      o2 && t3.isValidTeam && m2++, o2 || m2++;
    }), m2;
  }
  chooseMap(t2) {
    return 2 === t2 ? this.superTeamMap : 1 === t2 ? this.teamMap : /* @__PURE__ */ new Map();
  }
  getById(t2, o2, a2 = true) {
    var m2 = this.chooseMap(o2).get(t2);
    if (m2) {
      if (a2 && m2.isValidTeam)
        return m2;
      if (!a2)
        return m2;
    }
  }
  getAll(t2, o2 = true) {
    var a2 = this.chooseMap(t2);
    return Array.from(a2.values()).filter((t3) => !(!o2 || !t3.isValidTeam) || (!o2 || void 0)).sort((t3, o3) => o3.updateTime - t3.updateTime);
  }
  upsert(t2) {
    var o2 = t2.teamId, a2 = t2.teamType, m2 = this.chooseMap(a2), u2 = m2.get(o2) || {}, h2 = Object.assign({}, u2, t2);
    return m2.set(o2, h2), h2;
  }
  deleteById(t2, o2) {
    var a2 = this.getById(t2, o2);
    if (a2)
      return a2.isValidTeam = false, a2;
  }
  searchTeamByKeyword(t2) {
    var o2 = [];
    return this.teamMap.forEach((a2) => {
      a2.name.includes(t2) && o2.push(a2);
    }), this.superTeamMap.forEach((a2) => {
      a2.name.includes(t2) && o2.push(a2);
    }), o2;
  }
};
var V2NIMTeamMemberModelImpl = class {
  constructor() {
    this.teamMembers = [], this.superTeamMembers = [], this.maxSize = 2e3;
  }
  reset() {
    this.teamMembers = [], this.superTeamMembers = [];
  }
  setData(t2) {
    t2.forEach((t3) => {
      this.chooseList(t3.teamType).push(t3);
    });
  }
  chooseList(t2) {
    return 2 === t2 ? this.superTeamMembers : 1 === t2 ? this.teamMembers : [];
  }
  getById(t2, o2, a2) {
    return this.chooseList(o2).find((o3) => o3.teamId === t2 && o3.accountId === a2);
  }
  upsert(t2) {
    var o2 = t2.teamType, a2 = t2.teamId, m2 = this.chooseList(o2), u2 = m2.findIndex((o3) => o3.teamId === a2 && o3.accountId === t2.accountId);
    -1 === u2 ? m2.push(t2) : m2[u2] = Object.assign(Object.assign({}, m2[u2]), t2), m2.length > this.maxSize && m2.shift();
  }
  deleteByAccount(t2, o2, a2) {
    var m2 = this.chooseList(o2), u2 = m2.findIndex((o3) => o3.teamId === t2 && o3.accountId === a2);
    if (-1 !== u2) {
      var h2 = m2[u2];
      return h2.inTeam = false, m2.splice(u2, 1), h2;
    }
  }
  deleteByTeamId(t2, o2) {
    var a2 = this.chooseList(o2).filter((o3) => o3.teamId !== t2);
    2 === o2 ? this.superTeamMembers = a2 : this.teamMembers = a2;
  }
};
var V2NIMTeamNotificationImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2;
  }
  processNotification(t2) {
    var { attachment: o2, senderId: a2, receiverId: m2, createTime: u2 } = t2, { id: h2, data: g2 } = o2, I2 = h2 > 400 ? 2 : 1, { id: M2, ids: _2, tinfo: E2, mute: S2 } = formatTeamNotificationAttachData(g2, I2), T2 = this.service.model.getById(m2, I2);
    switch (this.core.logger.log(`v2Team::processNotification, notificationType:${h2}, teamId:${m2}`, g2), h2) {
      case Gi.SUPER_TEAM_INVITATION:
      case Gi.TEAM_INVITATION:
        _2.includes(this.core.account) && this.onTeamJoined(E2), this.onTeamMembersJoined(E2, _2.filter((t3) => t3 !== this.core.account));
        break;
      case Gi.SUPER_TEAM_INVITE_ACCEPT:
      case Gi.TEAM_INVITE_ACCEPT:
        a2 === this.core.account ? this.onTeamJoined(E2) : this.onTeamMemberJoined(E2, a2);
        break;
      case Gi.SUPER_TEAM_APPLY_ACCEPT:
      case Gi.TEAM_APPLY_ACCEPT:
        M2 === this.core.account ? this.onTeamJoined(E2) : this.onTeamMemberJoined(E2, M2);
        break;
      case Gi.SUPER_TEAM_ADD_MANAGER:
      case Gi.TEAM_ADD_MANAGER:
        this.updateTeamMemberRole(m2, I2, _2, { memberRole: 2, updateTime: u2 });
        break;
      case Gi.SUPER_TEAM_REMOVE_MANAGER:
      case Gi.TEAM_REMOVE_MANAGER:
        this.updateTeamMemberRole(m2, I2, _2, { memberRole: 0, updateTime: u2 });
        break;
      case Gi.SUPER_TEAM_KICK:
      case Gi.TEAM_KICK:
        this.onTeamInfoUpdated(E2), _2.forEach((t3) => {
          t3 === this.core.account ? this.onTeamLeft(m2, I2, true) : this.onTeamMemberKicked(a2, E2.teamId, E2.teamType, t3);
        });
        break;
      case Gi.SUPER_TEAM_LEAVE:
      case Gi.TEAM_LEAVE:
        E2 ? this.onTeamInfoUpdated(E2) : T2 && a2 === this.core.account && (T2.isValidTeam = false, this.onTeamInfoUpdated(T2)), a2 === this.core.account ? this.onTeamLeft(m2, I2, false) : this.onTeamMemberLeft(m2, I2, a2);
        break;
      case Gi.SUPER_TEAM_DISMISS:
      case Gi.TEAM_DISMISS:
        this.onTeamDismissed(m2, I2);
        break;
      case Gi.SUPER_TEAM_UPDATE:
      case Gi.TEAM_UPDATED:
        this.onTeamInfoUpdated(E2);
        break;
      case Gi.SUPER_TEAM_TRANSFER_OWNER:
      case Gi.TEAM_TRANSFER_OWNER:
        this.onTeamInfoUpdated(E2), this.updateTeamMemberRole(m2, I2, [a2, E2.ownerAccountId], [{ memberRole: 0, updateTime: u2 }, { memberRole: 1, updateTime: u2, joinTime: u2 }], false);
        break;
      case Gi.SUPER_TEAM_MEMBER_MUTE:
      case Gi.TEAM_MEMBER_MUTE:
        this.service.model.upsert(E2), this.updateTeamMemberRole(m2, I2, M2 ? [M2] : _2, { chatBanned: 0 !== S2, updateTime: u2 });
    }
  }
  onTeamJoined(t2) {
    this.service.model.upsert(t2), this.service.emit("onTeamJoined", t2), this.service.getTeamMemberListByIds(t2.teamId, t2.teamType, [this.core.account]).catch((t3) => {
      this.core.logger.error("Get Member error after onTeamJoined", t3);
    });
  }
  onTeamLeft(t2, o2, a2) {
    var m2 = this.service.model.deleteById(t2, o2) || generateTeamByTeamId(t2, o2, { isValidTeam: false });
    this.service.memberModel.deleteByAccount(t2, o2, this.core.account), this.service.emit("onTeamLeft", m2, a2);
  }
  onTeamDismissed(t2, o2) {
    var a2 = this.service.model.deleteById(t2, o2);
    a2 || (a2 = generateTeamByTeamId(t2, o2, { isValidTeam: false })), this.service.memberModel.deleteByTeamId(t2, o2), this.service.emit("onTeamDismissed", a2);
  }
  onTeamInfoUpdated(t2) {
    var o2 = this.service.model.upsert(t2);
    this.service.emit("onTeamInfoUpdated", o2);
  }
  onTeamMemberJoined(t2, o2) {
    this.service.model.upsert(t2), this.service.emit("onTeamInfoUpdated", t2);
    var a2 = t2.updateTime || t2.createTime, m2 = generateMemberByTeamId(t2.teamId, t2.teamType, o2, { joinTime: a2, updateTime: a2 });
    this.service.emit("onTeamMemberJoined", [m2]);
  }
  onTeamMembersJoined(t2, o2) {
    var a2 = t2.updateTime || t2.createTime, m2 = o2.map((o3) => generateMemberByTeamId(t2.teamId, t2.teamType, o3, { joinTime: a2, updateTime: a2 }));
    0 !== m2.length && (this.service.model.upsert(t2), this.service.emit("onTeamInfoUpdated", t2), this.service.emit("onTeamMemberJoined", m2));
  }
  onTeamMemberLeft(t2, o2, a2) {
    var m2 = this.service.memberModel.deleteByAccount(t2, o2, a2);
    m2 || (m2 = generateMemberByTeamId(t2, o2, a2, { inTeam: false })), this.service.emit("onTeamMemberLeft", [m2]);
  }
  onTeamMemberKicked(t2, o2, a2, m2) {
    var u2 = this.service.memberModel.deleteByAccount(o2, a2, m2);
    u2 || (u2 = generateMemberByTeamId(o2, a2, m2, { inTeam: false })), this.service.emit("onTeamMemberKicked", t2, [u2]);
  }
  onTeamMemberInfoUpdated(t2) {
    t2.forEach((t3) => {
      if (t3.accountId === this.core.account && this.core.V2NIMSettingService.name && this.core.V2NIMConversationIdUtil.name) {
        var o2 = 1 === t3.teamType ? this.core.V2NIMConversationIdUtil.teamConversationId(t3.teamId) : this.core.V2NIMConversationIdUtil.superTeamConversationId(t3.teamId), a2 = this.core.V2NIMSettingService.getConversationMuteStatus(o2);
        this.core.eventBus.emit("V2NIMSettingService/setMute", o2, a2);
      }
    }), this.service.emit("onTeamMemberInfoUpdated", t2);
  }
  updateTeamMemberRole(t2, o2, a2, m2, u2 = true) {
    return __awaiter(this, void 0, void 0, function* () {
      var h2 = a2.filter((a3, u3) => {
        var h3 = this.service.memberModel.getById(t2, o2, a3);
        return h3 && this.service.memberModel.upsert(Object.assign(Object.assign({}, h3), Array.isArray(m2) ? m2[u3] : m2)), !h3;
      });
      if (u2 && h2.length > 0)
        try {
          (yield this.service.getTeamMemberListByIds(t2, o2, h2)).forEach((t3) => this.service.memberModel.upsert(t3));
        } catch (t3) {
          this.core.logger.warn("v2Team::processNotification, getTeamMemberListByIds failed", t3);
        }
      var g2 = a2.map((a3, h3) => {
        var g3 = this.service.memberModel.getById(t2, o2, a3);
        return g3 || u2 ? g3 : generateMemberByTeamId(t2, o2, a3, Array.isArray(m2) ? m2[h3] : m2);
      }).filter((t3) => !!t3);
      g2.length > 0 && this.onTeamMemberInfoUpdated(g2);
    });
  }
  processSysNotification(t2) {
    var { receiverId: o2, postscript: a2, senderId: m2, timestamp: u2, content: h2 } = t2, g2 = {};
    try {
      g2 = JSON.parse(h2);
    } catch (t3) {
      this.core.logger.warn("v2Team::processSysNotification, parse content failed", h2);
    }
    var I2 = { actionType: { 0: 0, 1: 1, 2: 2, 3: 3, 15: 0, 16: 1, 17: 2, 18: 3 }[t2.type], teamId: o2, teamType: t2.type >= 15 ? 2 : 1, operatorAccountId: m2, postscript: a2, timestamp: u2, actionStatus: 0, read: false };
    g2.attach && (I2.serverExtension = g2.attach), this.core.logger.log("v2Team::processSysNotification, type:", t2.type, I2), this.service.notificationModel.create(I2), this.service.emit("onReceiveTeamJoinActionInfo", I2);
  }
  updateTeamActionStatus(t2, o2) {
    this.service.notificationModel.update({ teamId: t2.teamId, teamType: t2.teamType, operatorAccountId: t2.operatorAccountId, actionType: t2.actionType, actionStatus: o2 });
  }
  checkIfExpired(t2) {
    return !!t2 && (509 === t2 || !(t2 >= 500 && t2 <= 599) && !(t2 >= 19e4));
  }
};
!function(t2) {
  t2[t2.TEAM_INVITATION = 0] = "TEAM_INVITATION", t2[t2.TEAM_KICK = 1] = "TEAM_KICK", t2[t2.TEAM_LEAVE = 2] = "TEAM_LEAVE", t2[t2.TEAM_UPDATED = 3] = "TEAM_UPDATED", t2[t2.TEAM_DISMISS = 4] = "TEAM_DISMISS", t2[t2.TEAM_APPLY_ACCEPT = 5] = "TEAM_APPLY_ACCEPT", t2[t2.TEAM_TRANSFER_OWNER = 6] = "TEAM_TRANSFER_OWNER", t2[t2.TEAM_ADD_MANAGER = 7] = "TEAM_ADD_MANAGER", t2[t2.TEAM_REMOVE_MANAGER = 8] = "TEAM_REMOVE_MANAGER", t2[t2.TEAM_INVITE_ACCEPT = 9] = "TEAM_INVITE_ACCEPT", t2[t2.TEAM_MEMBER_MUTE = 10] = "TEAM_MEMBER_MUTE", t2[t2.SUPER_TEAM_INVITATION = 401] = "SUPER_TEAM_INVITATION", t2[t2.SUPER_TEAM_KICK = 402] = "SUPER_TEAM_KICK", t2[t2.SUPER_TEAM_LEAVE = 403] = "SUPER_TEAM_LEAVE", t2[t2.SUPER_TEAM_UPDATE = 404] = "SUPER_TEAM_UPDATE", t2[t2.SUPER_TEAM_DISMISS = 405] = "SUPER_TEAM_DISMISS", t2[t2.SUPER_TEAM_TRANSFER_OWNER = 406] = "SUPER_TEAM_TRANSFER_OWNER", t2[t2.SUPER_TEAM_ADD_MANAGER = 407] = "SUPER_TEAM_ADD_MANAGER", t2[t2.SUPER_TEAM_REMOVE_MANAGER = 408] = "SUPER_TEAM_REMOVE_MANAGER", t2[t2.SUPER_TEAM_MEMBER_MUTE = 409] = "SUPER_TEAM_MEMBER_MUTE", t2[t2.SUPER_TEAM_APPLY_ACCEPT = 410] = "SUPER_TEAM_APPLY_ACCEPT", t2[t2.SUPER_TEAM_INVITE_ACCEPT = 411] = "SUPER_TEAM_INVITE_ACCEPT";
}(Gi || (Gi = {}));
var V2NIMTeamNotificationModelImpl = class {
  constructor() {
    this.list = [], this.maxCount = 1e3;
  }
  reset() {
    this.list = [];
  }
  checkSameAction(t2, o2, a2 = false) {
    return t2.teamId === o2.teamId && t2.teamType === o2.teamType && t2.actionType === o2.actionType && t2.operatorAccountId === o2.operatorAccountId && (!a2 || t2.timestamp === o2.timestamp);
  }
  create(t2) {
    this.list.push(t2), this.list.length > this.maxCount && this.list.shift();
  }
  update(t2) {
    this.list.forEach((o2) => {
      this.checkSameAction(o2, t2) && 0 === o2.actionStatus && Object.assign(o2, t2);
    });
  }
  delete(t2) {
    this.list = this.list.map((o2) => {
      if (!this.checkSameAction(o2, t2, false))
        return o2;
    }).filter((t3) => t3);
  }
  getByOption(t2) {
    var { types: o2, status: a2, offset: m2 = 0, limit: u2 = 50 } = t2, h2 = [];
    this.list.forEach((t3) => {
      o2 && o2.length > 0 && !o2.includes(t3.actionType) || a2 && a2.length > 0 && !a2.includes(t3.actionStatus) || h2.push(t3);
    }), h2 = h2.sort((t3, o3) => o3.timestamp - t3.timestamp);
    var g2 = 0;
    m2 > 0 && (g2 = findIndexWithinTargetValue(h2, "timestamp", m2), h2[g2] && h2[g2].timestamp === m2 && (g2 += 1));
    var I2 = h2.slice(g2).length;
    return (h2 = h2.slice(g2, g2 + u2)).length > 0 ? { offset: I2 > u2 ? h2[h2.length - 1].timestamp : 0, finished: !(I2 > u2), infos: h2 } : { offset: 0, finished: true, infos: h2 };
  }
  setRead(t2) {
    for (var o2 of this.list)
      this.checkSameAction(o2, t2) && (o2.read = true);
  }
  setAllRead() {
    for (var t2 of this.list)
      t2.read = true;
  }
  getUnreadCount() {
    var t2 = /* @__PURE__ */ new Set();
    for (var o2 of this.list)
      o2.read || 0 !== o2.actionStatus || 0 !== o2.actionType && 2 !== o2.actionType || t2.add(`${o2.operatorAccountId}_${o2.teamType}_${o2.teamId}`);
    return t2.size;
  }
};
var V2NIMTeamEventImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.model = o2.model, this.memberModel = o2.memberModel, this.notification = o2.notification, this.logger = this.core.logger;
  }
  setListener() {
    this.core.eventBus.on("V2NIMTeamService/onSyncStarted", () => {
      this.service.emit("onSyncStarted");
    }), this.core.eventBus.on("V2NIMTeamService/onSyncFinished", () => {
      this.service.emit("onSyncFinished");
    }), this.core.eventBus.on("V2NIMTeamService/onSyncFailed", (t2) => {
      this.service.emit("onSyncFailed", t2);
    }), this.core.eventBus.on("forwardReceive/V2NIMTeamService/created", (t2) => {
      this.model.upsert(t2);
      var o2 = generateMemberByTeamId(t2.teamId, t2.teamType, this.core.account, { memberRole: 1 });
      this.memberModel.upsert(o2), this.service.emit("onTeamCreated", t2);
    }), this.core.eventBus.on("forwardReceive/V2NIMTeamService/updateSelfTeamMemberInfo", (t2) => {
      this.memberModel.upsert(t2), this.service.emit("onTeamInfoUpdated", [t2]);
    }), this.core.eventBus.on("forwardReceive/V2NIMTeamService/updateTeamActionStatus", this.notification.updateTeamActionStatus.bind(this.notification)), this.core.eventBus.on("V2NIMTeamService/sysNotification", this.notification.processSysNotification.bind(this.notification)), this.core.eventBus.on("V2NIMTeamService/notification", this.notification.processNotification.bind(this.notification));
  }
  beforeEmit(t2, ...o2) {
    var a2 = `${this.service.name}::emit ${t2.toString()}`;
    if ("onTeamCreated" === t2 || "onTeamDismissed" === t2 || "onTeamJoined" === t2 || "onTeamLeft" === t2 || "onTeamInfoUpdated" === t2) {
      var m2 = o2[0];
      this.logger.log(`${a2}`, `team:${m2.teamId}_${m2.teamType};updateTime:${m2.updateTime}`);
    } else if ("onTeamMemberJoined" === t2 || "onTeamMemberLeft" === t2 || "onTeamMemberInfoUpdated" === t2) {
      var u2 = o2[0];
      this.logger.log(`${a2}`, u2.map((t3) => `team:${t3.teamId}_${t3.teamType};account:${t3.accountId}`));
    } else if ("onTeamMemberKicked" === t2) {
      var h2 = o2[0], g2 = o2[1];
      this.logger.log(`${a2}`, `operator${h2}`, g2.map((t3) => `team:${t3.teamId}_${t3.teamType};account:${t3.accountId}`));
    } else
      this.logger.log(`${a2}`, ...o2);
  }
  onSyncDone(t2) {
    t2 ? this.service.emit("onSyncFailed", t2) : this.service.emit("onSyncFinished");
  }
};
var V2NIMTeamHandlerImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.model = o2.model, this.memberModel = o2.memberModel, this.logger = this.core.logger;
  }
  v2TeamSyncHandler(t2) {
    this.model.set(t2.content.datas);
  }
  v2SuperTeamSyncHandler(t2) {
    this.model.set(t2.content.datas);
  }
  v2TeamCreateMultiSyncHandler(t2) {
    var o2 = t2.content.data;
    this.model.upsert(o2);
    var a2 = generateMemberByTeamId(o2.teamId, o2.teamType, this.core.account, { memberRole: 1 });
    this.memberModel.upsert(a2), this.service.emit("onTeamCreated", o2);
  }
  v2SuperTeamCreateMultiSyncHandler(t2) {
    var o2 = t2.content.data;
    this.model.upsert(o2);
    var a2 = generateMemberByTeamId(o2.teamId, o2.teamType, this.core.account, { memberRole: 1 });
    this.memberModel.upsert(a2), this.service.emit("onTeamCreated", o2);
  }
  v2TeamMemberUpdateMultiSyncHandler(t2) {
    var o2 = t2.content.data;
    o2.teamType = 1;
    var a2 = this.memberModel.getById(o2.teamId, o2.teamType, o2.accountId);
    this.service.notification.updateTeamMemberRole(o2.teamId, o2.teamType, [o2.accountId], o2), o2.accountId === this.core.account && a2 && a2.bits !== o2.bits && this.core.eventBus.emit("V2NIMSettingService/updateBits", o2.teamId, o2.teamType, o2.bits);
  }
  v2SuperTeamMemberUpdateMultiSyncHandler(t2) {
    var o2 = t2.content.data;
    o2.teamType = 2;
    var a2 = this.memberModel.getById(o2.teamId, o2.teamType, o2.accountId);
    this.service.notification.updateTeamMemberRole(o2.teamId, o2.teamType, [o2.accountId], o2), o2.accountId === this.core.account && a2 && a2.bits !== o2.bits && this.core.eventBus.emit("V2NIMSettingService/updateBits", o2.teamId, o2.teamType, o2.bits);
  }
  v2TeamMembersOfSelfInSyncHandler(t2) {
    t2.content.datas.forEach((t3) => {
      t3.teamType = 1, this.memberModel.upsert(t3);
    });
  }
  v2SuperTeamMembersOfSelfInSyncHandler(t2) {
    t2.content.datas.forEach((t3) => {
      t3.teamType = 2, this.memberModel.upsert(t3);
    });
  }
};
var V2NIMTeamServiceImpl = class extends V2Service {
  constructor(t2) {
    super("V2NIMTeamService", t2), this.core._registerDep(V2NIMConversationIdUtilImpl, "V2NIMConversationIdUtil"), this.model = new V2NIMTeamModelImpl(), this.memberModel = new V2NIMTeamMemberModelImpl(), this.notificationModel = new V2NIMTeamNotificationModelImpl(), this.notification = new V2NIMTeamNotificationImpl(t2, this), this.event = new V2NIMTeamEventImpl(t2, this), this.handler = new V2NIMTeamHandlerImpl(t2, this), "v2" === this.core.options.apiVersion && (registerParser({ cmdMap: Er, cmdConfig: br }), this.setListener());
  }
  setListener() {
    this.event.setListener();
  }
  reset() {
    this.model.reset(), this.memberModel.reset(), this.notificationModel.reset();
  }
  emit(t2, ...o2) {
    return this.event.beforeEmit(t2, ...o2), super.emit(t2, ...o2);
  }
  createTeam(t2, o2, a2, m2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate({ createTeamParams: Hi }, { createTeamParams: t2 }, "", true), validate({ inviteeAccountIds: Object.assign(Object.assign({}, zi), { min: 0, required: false }) }, { inviteeAccountIds: o2 }, "", true), validate({ antispamConfig: Ji }, { antispamConfig: m2 }, "", true);
      var u2 = 2 === t2.teamType ? "v2SuperTeamCreate" : "v2TeamCreate", h2 = yield this.core.sendCmd(u2, { team: t2, inviteeAccountIds: o2 || [], postscript: a2 || "", antispamConfig: m2 }), g2 = h2.content.team;
      return this.model.upsert(g2), this.getTeamMemberListByIds(g2.teamId, g2.teamType, [this.core.account]).catch((t3) => {
        this.core.logger.error("Get Member error after createTeam", t3);
      }), this.emit("onTeamCreated", g2), { team: g2, failedList: h2.content.failedList };
    });
  }
  updateTeamInfo(t2, o2, a2, m2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate(ro, { updateTeamInfoParams: a2 }, "", true), validate({ antispamConfig: Ji }, { antispamConfig: m2 }, "", true);
      var u2 = Object.assign({ teamId: t2, teamType: o2 }, a2), h2 = 2 === o2 ? "v2SuperTeamUpdateInfo" : "v2TeamUpdateInfo";
      yield this.core.sendCmd(h2, { team: u2, antispamConfig: m2 }), this.model.upsert(u2);
    });
  }
  leaveTeam(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true);
      var a2 = 2 === o2 ? "v2SuperTeamLeave" : "v2TeamLeave";
      yield this.core.sendCmd(a2, { teamId: t2 }), this.model.deleteById(t2, o2);
    });
  }
  getTeamInfo(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true);
      var a2 = 2 === o2 ? "v2SuperTeamGetInfo" : "v2TeamGetInfo", m2 = this.model.getById(t2, o2, false);
      if (m2)
        return m2;
      var u2 = (yield this.core.sendCmd(a2, { teamId: t2 })).content.team;
      return this.model.upsert(u2), u2;
    });
  }
  getJoinedTeamList(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(eo, { teamTypes: t2 }, "", true), this.core.V2NIMLoginService.checkIllegalState(), t2 && 0 !== t2.length || (t2 = [1, 2]);
      var o2 = [];
      return t2.forEach((t3) => {
        o2 = o2.concat(this.model.getAll(t3));
      }), o2.sort((t3, o3) => t3.createTime - o3.createTime);
    });
  }
  getJoinedTeamCount(t2) {
    this.checkV2(), validate(eo, { teamTypes: t2 }, "", true), this.core.V2NIMLoginService.checkIllegalState(), t2 && 0 !== t2.length || (t2 = [1, 2]);
    var o2 = 0;
    return t2.forEach((t3) => {
      o2 += this.model.count(t3);
    }), o2;
  }
  getJoinedTeamMembers(t2) {
    this.checkV2(), validate(eo, { teamTypes: t2 }, "", true), this.core.V2NIMLoginService.checkIllegalState(), t2 && 0 !== t2.length || (t2 = [1, 2]);
    var o2 = [];
    return t2.forEach((t3) => {
      var a2 = this.memberModel.chooseList(t3).filter((t4) => t4.accountId === this.core.account);
      o2 = o2.concat(a2);
    }), Promise.resolve(o2);
  }
  getTeamInfoByIds(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Qi, { teamIds: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true);
      var a2 = 2 === o2 ? "v2SuperTeamGetByIds" : "v2TeamGetByIds", m2 = t2.map((t3) => this.model.getById(t3, o2, false)), u2 = t2.filter((t3, o3) => !m2[o3]);
      if (0 === u2.length)
        return m2;
      var h2 = (yield this.core.sendCmd(a2, { teamIds: u2 })).content.teams;
      return m2.map((o3, a3) => {
        if (o3)
          return o3;
        var m3 = t2[a3], u3 = h2.find((t3) => t3.teamId === m3);
        return u3 && this.model.upsert(u3), u3;
      }).filter((t3) => !!t3);
    });
  }
  dismissTeam(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true);
      var a2 = 2 === o2 ? "v2SuperTeamDismiss" : "v2TeamDismiss";
      yield this.core.sendCmd(a2, { teamId: t2 });
    });
  }
  inviteMember(t2, o2, a2, m2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate({ inviteeAccountIds: zi }, { inviteeAccountIds: a2 }, "", true), validate({ postscript: Object.assign(Object.assign({}, Ki), { required: false }) }, { postscript: m2 }, "", true);
      var u2 = 2 === o2 ? "v2SuperTeamInviteMembers" : "v2TeamInviteMembers";
      return (yield this.core.sendCmd(u2, { teamId: t2, accounts: a2, ps: m2 || "" })).content.abortedAccidList;
    });
  }
  inviteMemberEx(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate(to, { inviteeParams: a2 }, "", true);
      var m2 = 2 === o2 ? "v2SuperTeamInviteMembers" : "v2TeamInviteMembers";
      return (yield this.core.sendCmd(m2, { teamId: t2, accounts: a2.inviteeAccountIds, ps: a2.postscript || "", attach: a2.serverExtension })).content.abortedAccidList;
    });
  }
  acceptInvitation(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(ao, t2, "invitationInfo", true), validate(lo, t2, "invitationInfo", true);
      var { teamType: o2, teamId: a2, operatorAccountId: m2 } = t2, u2 = 2 === o2 ? "v2SuperTeamAcceptInvitation" : "v2TeamAcceptInvitation";
      try {
        var h2 = yield this.core.sendCmd(u2, { teamId: a2, from: m2 });
        return this.notification.updateTeamActionStatus(t2, 1), h2.content.team;
      } catch (o3) {
        var g2 = o3;
        throw this.notification.checkIfExpired(g2.code) && this.notification.updateTeamActionStatus(t2, 3), o3;
      }
    });
  }
  rejectInvitation(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(ao, t2, "invitationInfo", true), validate(lo, t2, "invitationInfo", true), validate({ postscript: Object.assign(Object.assign({}, Ki), { required: false }) }, { postscript: o2 }, "", true);
      var { teamType: a2, teamId: m2, operatorAccountId: u2 } = t2, h2 = 2 === a2 ? "v2SuperTeamRejectInvite" : "v2TeamRejectInvite";
      try {
        yield this.core.sendCmd(h2, { teamId: m2, from: u2, ps: o2 || "" }), this.notification.updateTeamActionStatus(t2, 2);
      } catch (o3) {
        var g2 = o3;
        throw this.notification.checkIfExpired(g2.code) && this.notification.updateTeamActionStatus(t2, 3), o3;
      }
    });
  }
  kickMember(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate({ memberAccountIds: zi }, { memberAccountIds: a2 }, "", true);
      var m2 = 2 === o2 ? "v2SuperTeamKickMembers" : "v2TeamKickMembers";
      yield this.core.sendCmd(m2, { teamId: t2, accounts: a2 });
    });
  }
  applyJoinTeam(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true);
      var m2 = 2 === o2 ? "v2SuperTeamApplyToJoin" : "v2TeamApplyToJoin", u2 = yield this.core.sendCmd(m2, { teamId: t2, ps: a2 || "" }), h2 = u2.content.team, g2 = u2.content.isInTeam;
      return h2.isValidTeam = !!h2.isValidTeam && !!g2, h2;
    });
  }
  acceptJoinApplication(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(ao, t2, "applicationInfo", true), validate(po, t2, "applicationInfo", true);
      var { teamType: o2, teamId: a2, operatorAccountId: m2 } = t2, u2 = 2 === o2 ? "v2SuperTeamAcceptJoinApplication" : "v2TeamAcceptJoinApplication";
      try {
        yield this.core.sendCmd(u2, { teamId: a2, from: m2 }), this.notification.updateTeamActionStatus(t2, 1);
      } catch (o3) {
        var h2 = o3;
        throw this.notification.checkIfExpired(h2.code) && this.notification.updateTeamActionStatus(t2, 3), o3;
      }
    });
  }
  rejectJoinApplication(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(ao, t2, "applicationInfo", true), validate(po, t2, "applicationInfo", true), validate({ postscript: Object.assign(Object.assign({}, Ki), { required: false }) }, { postscript: o2 }, "", true);
      var { teamType: a2, teamId: m2, operatorAccountId: u2 } = t2, h2 = 2 === a2 ? "v2SuperTeamRejectJoinApplication" : "v2TeamRejectJoinApplication";
      try {
        yield this.core.sendCmd(h2, { teamId: m2, from: u2, ps: o2 || "" }), this.notification.updateTeamActionStatus(t2, 2);
      } catch (o3) {
        var g2 = o3;
        throw this.notification.checkIfExpired(g2.code) && this.notification.updateTeamActionStatus(t2, 3), o3;
      }
    });
  }
  updateTeamMemberRole(t2, o2, a2, m2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate({ memberAccountIds: zi }, { memberAccountIds: a2 }, "", true), validate({ memberRole: io }, { memberRole: m2 }, "", true);
      var u2 = 2 === m2 ? "AddManagers" : "RemoveManagers";
      u2 = 2 === o2 ? `v2SuperTeam${u2}` : `v2Team${u2}`, yield this.core.sendCmd(u2, { teamId: t2, accounts: uniq(a2) });
    });
  }
  transferTeamOwner(t2, o2, a2, m2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate({ accountId: Wi }, { accountId: a2 }, "", true), validate({ leave: { type: "boolean", required: false } }, { leave: m2 }, "", true);
      var u2 = this.model.getById(t2, o2);
      if (u2 && u2.ownerAccountId === a2)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "Transfer to self is not allowed" } });
      var h2 = 2 === o2 ? "v2SuperTeamTransferOwner" : "v2TeamTransferOwner";
      yield this.core.sendCmd(h2, { teamId: t2, account: a2, leave: m2 || false });
    });
  }
  updateSelfTeamMemberInfo(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate(oo, { memberInfoParams: a2 }, "", true), void 0 === a2.teamNick && void 0 === a2.serverExtension)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER });
      var m2 = 2 === o2 ? "v2SuperTeamUpdateSelfMemberInfo" : "v2TeamUpdateSelfMemberInfo", u2 = Object.assign(Object.assign({}, a2), { teamId: t2, accountId: this.core.account }), h2 = a2.antispamConfig ? { teamMember: u2, specialFollowUpdate: {}, antispam: a2.antispamConfig } : { teamMember: u2 };
      yield this.core.sendCmd(m2, h2), yield this.notification.updateTeamMemberRole(t2, o2, [this.core.account], u2);
      var g2 = this.memberModel.getById(t2, o2, this.core.account);
      if (this.core.V2NIMSettingService.name && this.core.V2NIMConversationIdUtil.name) {
        var I2 = 1 === o2 ? this.core.V2NIMConversationIdUtil.teamConversationId(t2) : this.core.V2NIMConversationIdUtil.superTeamConversationId(t2), M2 = this.core.V2NIMSettingService.getConversationMuteStatus(I2);
        this.core.eventBus.emit("V2NIMSettingService/setMute", I2, M2);
      }
      this.core.eventBus.emit("forwardSend/V2NIMTeamService/updateSelfTeamMemberInfo", g2);
    });
  }
  updateTeamMemberNick(t2, o2, a2, m2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate({ accountId: Wi }, { accountId: a2 }, "", true), validate({ nick: Ki }, { nick: m2 }, "", true), a2 === this.core.account)
        return this.updateSelfTeamMemberInfo(t2, o2, { teamNick: m2 });
      var u2 = 2 === o2 ? "v2SuperTeamUpdateMember" : "v2TeamUpdateMember";
      yield this.core.sendCmd(u2, { teamMember: { teamNick: m2, teamId: t2, accountId: a2 } });
    });
  }
  updateTeamMemberNickEx(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate(ho, a2, "", true), a2.accountId === this.core.account)
        return this.updateSelfTeamMemberInfo(t2, o2, { teamNick: a2.teamNick, antispamConfig: a2.antispamConfig });
      var m2 = 2 === o2 ? "v2SuperTeamUpdateMember" : "v2TeamUpdateMember";
      yield this.core.sendCmd(m2, { teamMember: { teamNick: a2.teamNick, teamId: t2, accountId: a2.accountId }, antispam: a2.antispamConfig });
    });
  }
  setTeamChatBannedMode(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate(so, { chatBannedMode: a2 }, "", true);
      var m2 = 2 === o2 ? "v2SuperTeamSetChatBannedMode" : "v2TeamSetChatBannedMode";
      yield this.core.sendCmd(m2, { teamId: t2, chatBannedMode: a2 }), this.model.upsert({ teamId: t2, teamType: o2, chatBannedMode: a2 });
    });
  }
  setTeamMemberChatBannedStatus(t2, o2, a2, m2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate({ accountId: Wi }, { accountId: a2 }, "", true), validate({ chatBanned: Yi }, { chatBanned: m2 }, "", true);
      var u2 = 2 === o2 ? "v2SuperTeamMemberSetChatBannedStatus" : "v2TeamMemberSetChatBannedStatus";
      yield this.core.sendCmd(u2, { teamId: t2, accountId: 2 === o2 ? [a2] : a2, chatBanned: m2 ? 1 : 0 });
    });
  }
  getTeamMemberList(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate(no, { queryOption: a2 }, "", true);
      var m2 = void 0 === a2.direction ? 0 : a2.direction;
      m2 = 0 === m2 ? 1 : 0;
      var u2 = yield this.core.sendCmd("v2TeamMemberGetList", { tag: Object.assign(Object.assign({ teamId: t2, teamType: o2, onlyChatBanned: false, nextToken: "", limit: 100 }, a2), { direction: m2 }) }), h2 = u2.content.datas, g2 = get(u2, "raw.r.0");
      return 2 === o2 && g2 && g2.map && (h2 = g2.map((t3) => deserialize(t3, invertSerializeItem(Ar)))), { nextToken: u2.content.pageInfo.nextToken || "", finished: !+u2.content.pageInfo.hasMore, memberList: processTeamMembers(h2, o2) };
    });
  }
  getTeamMemberListByIds(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate({ accountIds: zi }, { accountIds: a2 }, "", true);
      for (var m2 = 2 === o2 ? "v2SuperTeamMemberGetListByIds" : "v2TeamMemberGetListByIds", u2 = a2.map((o3) => `${t2}|${o3}`), h2 = [], g2 = 0; g2 < u2.length; g2 += 20) {
        var I2 = processTeamMembers((yield this.core.sendCmd(m2, { tag: u2.slice(g2, g2 + 20) })).content.datas, o2);
        h2 = h2.concat(I2), I2.forEach((t3) => this.memberModel.upsert(t3));
      }
      return h2;
    });
  }
  getTeamMemberInvitor(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate({ accountIds: zi }, { accountIds: a2 }, "", true);
      var m2 = 2 === o2 ? "v2SuperTeamGetMemberInvitor" : "v2TeamGetMemberInvitor";
      return (yield this.core.sendCmd(m2, { teamId: t2, accounts: a2 })).content.accountsMap;
    });
  }
  searchTeamByKeyword(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this.checkLogin(), validate({ keyword: Wi }, { keyword: t2 }, "", true), this.model.searchTeamByKeyword(t2);
    });
  }
  addTeamMembersFollow(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(uo, { teamId: t2, teamType: o2, accountIds: a2 }, "", true);
      var m2 = 2 === o2 ? "v2SuperTeamUpdateSelfMemberInfo" : "v2TeamUpdateSelfMemberInfo", [u2] = yield this.getTeamMemberListByIds(t2, o2, [this.core.account]), h2 = (yield this.core.sendCmd(m2, { teamMember: { teamId: t2 }, specialFollowUpdate: { accountIds: a2, operation: 1 } })).content.data;
      Object.keys(h2).length > 0 && (Object.assign(u2, h2), this.emit("onTeamMemberInfoUpdated", [u2]), this.memberModel.upsert(u2));
    });
  }
  removeTeamMembersFollow(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(uo, { teamId: t2, teamType: o2, accountIds: a2 }, "", true);
      var [m2] = yield this.getTeamMemberListByIds(t2, o2, [this.core.account]), u2 = 2 === o2 ? "v2SuperTeamUpdateSelfMemberInfo" : "v2TeamUpdateSelfMemberInfo", h2 = (yield this.core.sendCmd(u2, { teamMember: { teamId: t2 }, specialFollowUpdate: { accountIds: a2, operation: 0 } })).content.data;
      Object.keys(h2).length > 0 && (Object.assign(m2, h2), this.emit("onTeamMemberInfoUpdated", [m2]), this.memberModel.upsert(m2));
    });
  }
  getTeamJoinActionInfoList(t2) {
    return this.checkV2(), validate(mo, t2, "option", true), this.core.V2NIMLoginService.checkIllegalState(), Promise.resolve(this.notificationModel.getByOption(t2));
  }
  clearAllTeamJoinActionInfo() {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), this.notificationModel.reset();
    });
  }
  deleteTeamJoinActionInfo(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), validate(ao, t2, "", true), validate(co, t2, "", true), validate({ timestamp: { type: "number", min: 1 } }, t2, "", true), this.notificationModel.delete(t2);
    });
  }
  setTeamJoinActionInfoRead(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), t2 ? (validate(ao, t2, "", true), validate(co, t2, "", true), this.notificationModel.setRead(t2)) : this.notificationModel.setAllRead();
    });
  }
  getTeamJoinActionInfoUnreadCount() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), this.notificationModel.getUnreadCount();
    });
  }
};
var go = "V2NIMUserService";
var vo = { "34_3": "v2UpdateBlockList", "34_7": "v2GetUserList", "34_10": "v2UpdateSelfUserProfile", "3_109": "v2SyncSelfUserInfo", "3_110": "onUpdateUserProfile", "3_103": "onUpdateBlockList", "3_8": "syncBlockAndMuteList", "34_5": "v2SetP2PMessageMuteMode", "3_105": "v2OnUpdateMuteList" };
var fo = { accountId: 1, name: 3, avatar: 4, sign: 5, gender: { id: 6, retType: "number" }, email: 7, birthday: 8, mobile: 9, serverExtension: 10, createTime: { id: 12, retType: "number" }, updateTime: { id: 13, retType: "number" } };
var Io = { v2UpdateBlockList: { sid: 34, cid: 3, service: go, params: [{ type: "String", name: "accountId" }, { type: "Bool", name: "addToBlockList" }] }, v2GetUserList: { sid: 34, cid: 7, service: go, params: [{ type: "StrArray", name: "accountIds" }], response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(fo) }] }, v2UpdateSelfUserProfile: { sid: 34, cid: 10, service: go, params: [{ type: "Property", name: "tag", reflectMapper: fo }], response: [{ type: "Long", name: "updateTime" }] }, onUpdateUserProfile: { sid: 3, cid: 110, service: go, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(fo) }] }, onUpdateBlockList: { sid: 3, cid: 103, service: go, response: [{ type: "String", name: "accountId" }, { type: "Bool", name: "addToBlockList" }] }, syncBlockAndMuteList: { sid: 3, cid: 8, service: go, response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem({ accountId: 0, isMute: { id: 1, retType: "boolean" }, isBlock: { id: 2, retType: "boolean" } }) }, { type: "Long", name: "timetag" }] }, v2SyncSelfUserInfo: { sid: 3, cid: 109, service: go, response: [{ type: "Property", name: "user", reflectMapper: invertSerializeItem(fo) }] }, v2SetP2PMessageMuteMode: { sid: 34, cid: 5, service: go, params: [{ type: "String", name: "accountId" }, { type: "Bool", name: "muteMode" }] }, v2OnUpdateMuteList: { sid: 3, cid: 105, service: go, response: [{ type: "String", name: "accountId" }, { type: "Bool", name: "mute" }] } };
var V2NIMUserModelImpl = class {
  constructor() {
    this.muteList = /* @__PURE__ */ new Set(), this.userMap = /* @__PURE__ */ new Map(), this.blockList = [];
  }
  reset() {
    this.muteList.clear(), this.userMap.clear(), this.blockList = [];
  }
  setAccountMuteMode(t2, o2) {
    1 === o2 ? this.muteList.add(t2) : this.muteList.delete(t2);
  }
  setUser(t2) {
    this.userMap.set(t2.accountId, t2);
  }
  getUser(t2) {
    return this.userMap.get(t2);
  }
  getUserListBySearchOption(t2) {
    return Array.from(this.userMap.values()).filter((o2) => !(void 0 !== t2.searchName && !t2.searchName || !o2.name.includes(t2.keyword)) || (!(!t2.searchAccountId || !o2.accountId.includes(t2.keyword)) || !!(o2.mobile && t2.searchMobile && o2.mobile.includes(t2.keyword))));
  }
  addToBlockList(t2) {
    t2.forEach((t3) => {
      this.blockList.includes(t3) || this.blockList.push(t3);
    });
  }
  removeFromBlockList(t2) {
    t2.forEach((t3) => {
      var o2 = this.blockList.indexOf(t3);
      -1 !== o2 && this.blockList.splice(o2, 1);
    });
  }
  checkBlock(t2) {
    var o2 = {};
    return t2.forEach((t3) => {
      o2[t3] = this.blockList.includes(t3);
    }), o2;
  }
};
var yo = { type: "string", required: true, allowEmpty: false };
var Mo = { type: "string", required: false, allowEmpty: true };
var _o = { name: { type: "string", required: false, allowEmpty: true }, avatar: Mo, sign: Mo, email: Mo, birthday: Mo, mobile: Mo, gender: { type: "number", required: false }, serverExtension: Mo };
var V2NIMUserServiceImpl = class extends V2Service {
  constructor(t2) {
    super("V2NIMUserService", t2), registerParser({ cmdMap: vo, cmdConfig: Io }), this.model = new V2NIMUserModelImpl(), "v2" === this.core.options.apiVersion && this.setListener();
  }
  reset() {
    this.model.reset();
  }
  setListener() {
    this.core.eventBus.on("forwardReceive/V2NIMUserService/updateBlockList", (t2, o2) => {
      o2 ? this.model.addToBlockList([t2]) : this.model.removeFromBlockList([t2]), o2 ? this.emitBlockListAdded(t2) : this.emit("onBlockListRemoved", t2);
    }), this.core.eventBus.on("forwardReceive/V2NIMUserService/updateUserProfile", (t2) => {
      this.updateUserProfileInMemory(t2);
    });
  }
  emit(t2, ...o2) {
    var a2 = `${this.name}::emit ${t2.toString()}`;
    if ("onUserProfileChanged" === t2) {
      var m2 = o2[0];
      this.logger.log(`${a2}`, m2.map((t3) => `id:${t3.accountId};name:${t3.name};updateTime:${t3.updateTime}`));
    } else if ("onBlockListAdded" === t2) {
      var u2 = o2[0];
      this.logger.log(`${a2}`, `id:${u2.accountId};name:${u2.name};updateTime:${u2.updateTime}`);
    } else
      this.logger.log(`${a2}`, ...o2);
    return super.emit(t2, ...o2);
  }
  getUserList(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this._getUserList(t2);
    });
  }
  _getUserList(t2) {
    var o2;
    return __awaiter(this, void 0, void 0, function* () {
      validate({ accountIds: zi }, { accountIds: t2 }, "", true);
      var a2 = [];
      t2.forEach((t3) => {
        this.model.getUser(t3) || a2.push(t3);
      });
      var m2 = null;
      a2.length > 0 && (m2 = yield this.core.sendCmd("v2GetUserList", { accountIds: a2 })), ((null === (o2 = null == m2 ? void 0 : m2.content) || void 0 === o2 ? void 0 : o2.data) || []).forEach((t3) => {
        this.model.setUser(t3);
      });
      var u2 = [];
      return t2.forEach((t3) => {
        var o3 = this.model.getUser(t3);
        o3 && u2.push(o3);
      }), u2;
    });
  }
  getUserListFromCloud(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate({ accountIds: { type: "array", min: 1, max: 500, itemType: "string" } }, { accountIds: t2 }, "", true);
      var o2 = (yield this.core.sendCmd("v2GetUserList", { accountIds: t2 })).content.data || [], a2 = [];
      o2.forEach((t3) => {
        var o3 = this.model.getUser(t3.accountId);
        this.compareUserForUpdate(o3, t3) && a2.push(t3), this.model.setUser(t3);
      });
      var m2 = t2.reduce((t3, o3) => {
        var a3 = this.model.getUser(o3);
        return a3 && t3.push(a3), t3;
      }, []);
      return a2.length > 0 && this.emit("onUserProfileChanged", a2), m2;
    });
  }
  compareUserForUpdate(t2, o2) {
    return !t2 || !("number" == typeof t2.updateTime && "number" == typeof o2.updateTime && t2.updateTime >= o2.updateTime);
  }
  updateSelfUserProfile(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(_o, t2, "", true);
      var o2 = yield this.core.sendCmd("v2UpdateSelfUserProfile", { tag: Object.assign(Object.assign({}, t2), { accountId: this.core.account }) });
      yield this.updateUserProfileInMemory(Object.assign(Object.assign({}, t2), { updateTime: o2.content.updateTime }));
    });
  }
  addUserToBlockList(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), t2 === this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "Cannot block yourself" } });
      validate({ accountId: yo }, { accountId: t2 }, "", true), yield this.core.sendCmd("v2UpdateBlockList", { accountId: t2, addToBlockList: true }), this.model.addToBlockList([t2]), this.emitBlockListAdded(t2);
    });
  }
  removeUserFromBlockList(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), t2 === this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "Cannot unblock yourself" } });
      validate({ accountId: yo }, { accountId: t2 }, "", true), yield this.core.sendCmd("v2UpdateBlockList", { accountId: t2, addToBlockList: false }), this.model.removeFromBlockList([t2]), this.emit("onBlockListRemoved", t2);
    });
  }
  searchUserByOption(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), validate({ keyword: { type: "string", allowEmpty: false }, searchName: { type: "boolean", required: false }, searchAccountId: { type: "boolean", required: false }, searchMobile: { type: "boolean", required: false } }, t2, "", true), false === (void 0 === t2.searchName || t2.searchName) && !t2.searchAccountId && !t2.searchMobile)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "one of searchName, searchAccountId, searchMobile must be true" } });
      return this.model.getUserListBySearchOption(t2);
    });
  }
  getBlockList() {
    return this.checkV2(), Promise.resolve(this.model.blockList);
  }
  checkBlock(t2) {
    return this.checkV2(), validate({ accountIds: zi }, { accountIds: t2 }, "", true), Promise.resolve(this.model.checkBlock(t2));
  }
  updateUserProfileInMemory(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var o2 = this.model.getUser(this.core.account);
      o2 ? (Object.assign(o2, t2), this.model.setUser(o2)) : o2 = (yield this._getUserList([this.core.account]))[0];
      o2 && this.emit("onUserProfileChanged", [o2]);
    });
  }
  onUpdateUserProfileHandler(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var o2 = t2.content.data;
      yield this.updateUserProfileInMemory(o2);
    });
  }
  onUpdateBlockListHandler(t2) {
    var o2 = t2.content.accountId;
    t2.content.addToBlockList ? (this.model.addToBlockList([o2]), this.emitBlockListAdded(o2)) : (this.model.removeFromBlockList([o2]), this.emit("onBlockListRemoved", o2));
  }
  syncBlockAndMuteListHandler(t2) {
    t2.content.data.forEach((t3) => {
      t3.isBlock ? this.model.addToBlockList([t3.accountId]) : this.model.setAccountMuteMode(t3.accountId, t3.isMute ? 1 : 0);
    });
  }
  v2SyncSelfUserInfoHandler(t2) {
    var o2 = t2.content.user;
    this.model.setUser(o2);
  }
  checkUserUpdate(t2, o2) {
    var a2 = t2.senderId;
    a2 !== this.core.account && this.refreshUserInfo(a2, o2);
  }
  refreshUserInfo(t2, o2 = 0) {
    return __awaiter(this, void 0, void 0, function* () {
      if (t2 && "string" == typeof t2) {
        var a2 = this.model.getUser(t2), m2 = [];
        if (!a2 || a2 && "number" == typeof a2.updateTime && "number" == typeof o2 && !isNaN(a2.updateTime) && !isNaN(o2) && a2.updateTime < o2)
          try {
            m2 = (yield this.core.sendCmd("v2GetUserList", { accountIds: [t2] })).content.data;
          } catch (o3) {
            return void this.logger.warn(`V2NIMUserService:refreshUserInfo: failed for ${t2}`);
          }
        for (var u2 of m2)
          this.model.setUser(u2), this.emit("onUserProfileChanged", [u2]);
      }
    });
  }
  emitBlockListAdded(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var o2 = yield this._getUserList([t2]);
      1 === o2.length && this.emit("onBlockListAdded", o2[0]);
    });
  }
  v2OnUpdateMuteListHandler(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      var { accountId: o2, mute: a2 } = t2.content, m2 = a2 ? 1 : 0;
      this.core.eventBus.emit("v2NIMUserService/updateMuteList", o2, m2);
    });
  }
};
var Eo = "V2NIMFriendService";
var So = { "35_1": "v2AddFriend", "35_2": "v2DeleteFriend", "35_3": "v2SetFriendInfo", "35_4": "v2IncFriendInfo", "12_101": "v2OnAddFriend", "12_102": "v2OnDeleteFriend", "12_103": "v2OnUpdateFriendInfo", "12_5": "v2SyncFriendList", "12_6": "v2SyncFriendUserList" };
var To = { accountId: 4, relationShip: { id: 5, retType: "number" }, source: { id: 7, retType: "number" }, alias: 8, serverExtension: 10, createTime: { id: 11, retType: "number" }, updateTime: { id: 12, retType: "number" }, customerExtension: 13 };
var Co = { v2AddFriend: { sid: 35, cid: 1, service: Eo, params: [{ type: "String", name: "accountId" }, { type: "Byte", name: "verifyType" }, { type: "String", name: "postscript" }], response: [] }, v2DeleteFriend: { sid: 35, cid: 2, service: Eo, params: [{ type: "String", name: "accountId" }, { type: "Property", name: "params", reflectMapper: { deleteAlias: { id: 1, converter: boolToInt } } }] }, v2SetFriendInfo: { sid: 35, cid: 3, service: Eo, params: [{ type: "Property", name: "tag", reflectMapper: To }] }, v2OnAddFriend: { sid: 12, cid: 101, service: Eo, response: [{ type: "String", name: "accountId" }, { type: "Byte", name: "verifyType" }, { type: "String", name: "postscript" }, { type: "Property", name: "ext", reflectMapper: invertSerializeItem({ serverExt: 1 }) }] }, v2OnDeleteFriend: { sid: 12, cid: 102, service: Eo, response: [{ type: "String", name: "accountId" }] }, v2OnUpdateFriendInfo: { sid: 12, cid: 103, service: Eo, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(To) }] }, v2SyncFriendList: { sid: 12, cid: 5, service: Eo, response: [{ type: "PropertyArray", name: "friends", reflectMapper: invertSerializeItem(To) }, { type: "Long", name: "timetag" }] }, v2SyncFriendUserList: { sid: 12, cid: 6, service: Eo, response: [{ type: "PropertyArray", name: "users", reflectMapper: invertSerializeItem(fo) }] }, v2IncFriendInfo: { sid: 35, cid: 4, service: Eo, params: [{ type: "Long", name: "timetag" }], response: [{ type: "PropertyArray", name: "friends", reflectMapper: invertSerializeItem(To) }, { type: "Long", name: "timetag" }] } };
var No = { accountId: { type: "string", required: true, allowEmpty: false }, params: { type: "object", required: true, rules: { addMode: { type: "enum", required: true, values: [1, 2] }, postscript: { type: "string", required: false, allowEmpty: true } } } };
var Ao = { accountId: { type: "string", required: true, allowEmpty: false }, params: { type: "object", required: false, rules: { deleteAlias: { type: "boolean", required: false } } } };
var Oo = { accountId: { type: "string", required: true, allowEmpty: false }, params: { type: "object", required: false, rules: { alias: { type: "string", required: false, allowEmpty: true }, serverExtension: { type: "string", required: false, allowEmpty: true } } } };
var Ro = { applicantAccountId: { type: "string", allowEmpty: false }, recipientAccountId: { type: "string", allowEmpty: false }, operatorAccountId: { type: "string", required: false, allowEmpty: false }, postscript: { type: "string", required: false, allowEmpty: true }, status: { type: "enum", values: [1, 4, 3, 0, 2] }, timestamp: { type: "number", min: 1 } };
function checkApplication(t2, o2) {
  if (validate(Ro, t2, "", true), t2 && t2.applicantAccountId !== o2 && t2.recipientAccountId !== o2)
    throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "Friend application is not your own" } });
}
var bo = { offset: { type: "number", required: false }, limit: { type: "number", required: false }, status: { type: "array", itemType: "enum", required: false, values: [1, 4, 3, 0, 2] } };
var V2NIMFriendNotificationImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2;
  }
  processSysNotification(t2) {
    if (6 === t2.type) {
      var o2 = t2.senderId;
      this.core.V2NIMFriendService.handleDeleteFriend(o2, 2);
    } else if (5 === t2.type)
      try {
        var a2 = JSON.parse(t2.content);
        if (1 === (null == a2 ? void 0 : a2.vt)) {
          this.core.V2NIMFriendService.handleAddFriend(t2.senderId, t2.timestamp);
          var m2 = { applicantAccountId: t2.senderId, recipientAccountId: t2.receiverId, operatorAccountId: t2.senderId, postscript: t2.postscript, timestamp: t2.timestamp, status: 4, read: false };
          this.service.notificationModel.appendFriendAddApplication(m2), this.service.notificationModel.updateFriendAddApplicationStatus(m2.applicantAccountId, 4, m2.applicantAccountId);
        } else if (2 === (null == a2 ? void 0 : a2.vt)) {
          var u2 = { applicantAccountId: t2.senderId, recipientAccountId: t2.receiverId, operatorAccountId: t2.senderId, postscript: t2.postscript, timestamp: t2.timestamp, status: 0, read: false };
          this.service.handleApplyFriend(u2), this.service.notificationModel.appendFriendAddApplication(u2);
        } else if (3 === (null == a2 ? void 0 : a2.vt)) {
          this.core.V2NIMFriendService.handleAddFriend(t2.senderId, t2.timestamp);
          var h2 = { applicantAccountId: t2.receiverId, recipientAccountId: t2.senderId, operatorAccountId: t2.senderId, timestamp: t2.timestamp, postscript: t2.postscript, status: 1, read: false };
          this.service.notificationModel.appendFriendAddApplication(h2);
        } else if (4 === (null == a2 ? void 0 : a2.vt)) {
          var g2 = { applicantAccountId: t2.receiverId, recipientAccountId: t2.senderId, operatorAccountId: t2.senderId, timestamp: t2.timestamp, postscript: t2.postscript, status: 2, read: false };
          this.service.notificationModel.appendFriendAddApplication(g2), this.service.emit("onFriendAddRejected", g2);
        }
      } catch (t3) {
        this.core.logger.warn("V2NIMFriendNotificationImpl::processSysNotification, parse content error:", t3);
      }
  }
};
var V2NIMFriendModelImpl = class {
  constructor() {
    this.validFriendIds = /* @__PURE__ */ new Set(), this.friendMap = /* @__PURE__ */ new Map(), this.friendTimetag = 0;
  }
  reset() {
    this.friendMap.clear(), this.validFriendIds.clear();
  }
  upsertFriend(t2, o2) {
    delete o2.relationShip;
    var a2 = this.friendMap.get(t2) || {}, m2 = Object.assign({ accountId: t2 }, a2, o2);
    return this.friendMap.set(t2, m2), this.validFriendIds.add(t2), m2;
  }
  addFriend(t2) {
    this.validFriendIds.add(t2);
  }
  deleteFriend(t2) {
    this.validFriendIds.delete(t2);
  }
  getFriend(t2) {
    return this.validFriendIds.has(t2) ? this.friendMap.get(t2) : void 0;
  }
  getFriendList() {
    return Array.from(this.validFriendIds.values()).map((t2) => this.getFriend(t2)).filter((t2) => !!t2);
  }
  getFriendListBySearchOption(t2) {
    return Array.from(this.validFriendIds.values()).map((t3) => this.getFriend(t3)).filter((o2) => {
      var a2 = void 0 === t2.searchAlias || t2.searchAlias;
      return void 0 !== o2 && (!!(a2 && o2.alias && o2.alias.includes(t2.keyword)) || !(!t2.searchAccountId || !o2.accountId.includes(t2.keyword)));
    });
  }
  getFriendByIds(t2) {
    return t2.map((t3) => this.getFriend(t3)).filter((t3) => !!t3);
  }
  setFriendTimetag(t2) {
    this.friendTimetag = t2;
  }
  getFriendTimetag() {
    return this.friendTimetag;
  }
};
var V2NIMFriendNotificationModelImpl = class {
  constructor() {
    this.list = [], this.maxCount = 1e3;
  }
  reset() {
    this.list = [];
  }
  updateFriendAddApplicationStatus(t2, o2, a2) {
    if (0 !== o2)
      for (var m2 of this.list)
        m2.applicantAccountId === t2 && 0 === m2.status && (m2.status = o2, m2.operatorAccountId = a2);
  }
  getAddApplicationList(t2) {
    var o2 = void 0 === t2.offset ? 0 : t2.offset, a2 = this.list.filter((o3) => {
      var a3 = t2.status || [];
      return 0 === a3.length || !!a3.includes(o3.status);
    }).reverse(), m2 = t2.limit || 50, u2 = a2.slice(o2, o2 + m2), h2 = o2 + m2 >= a2.length;
    return { infos: u2, finished: h2, offset: h2 ? 0 : o2 + m2 };
  }
  checkSameApplication(t2, o2, a2 = false) {
    return t2.applicantAccountId === o2.applicantAccountId && t2.recipientAccountId === o2.recipientAccountId && (!a2 || t2.timestamp === o2.timestamp);
  }
  setAllApplicationRead() {
    for (var t2 of this.list)
      t2.read = true;
  }
  setApplicationRead(t2) {
    for (var o2 of this.list)
      this.checkSameApplication(o2, t2) && (o2.read = true);
  }
  getAddApplicationUnreadCount() {
    var t2 = /* @__PURE__ */ new Set();
    for (var o2 of this.list)
      o2.read || 0 !== o2.status || t2.add(o2.applicantAccountId);
    return t2.size;
  }
  appendFriendAddApplication(t2) {
    this.list.push(t2), this.list.length > this.maxCount && this.list.shift();
  }
  clearApplicationList() {
    this.list = [];
  }
  deleteApplication(t2) {
    this.list = this.list.map((o2) => {
      if (!this.checkSameApplication(o2, t2, false))
        return o2;
    }).filter((t3) => t3);
  }
};
var V2NIMUFriendServiceImpl = class extends V2Service {
  constructor(t2) {
    super("V2NIMFriendService", t2), this.notification = new V2NIMFriendNotificationImpl(this.core, this), this.model = new V2NIMFriendModelImpl(), this.notificationModel = new V2NIMFriendNotificationModelImpl(), this.core._registerDep(V2NIMUserServiceImpl, "V2NIMUserService"), "v2" === this.core.options.apiVersion && (registerParser({ cmdMap: So, cmdConfig: Co }), this.setListener());
  }
  reset() {
    this.model.reset();
  }
  setListener() {
    this.core.eventBus.on("V2NIMFriendService/sysNotification", this.notification.processSysNotification.bind(this.notification)), this.core.eventBus.on("forwardReceive/V2NIMFriendService/addFriend", this.handleAddFriend.bind(this)), this.core.eventBus.on("forwardReceive/V2NIMFriendService/deleteFriend", this.handleDeleteFriend.bind(this)), this.core.eventBus.on("forwardReceive/V2NIMFriendService/setFriendInfo", this.handleSetFriendInfo.bind(this)), this.core.eventBus.on("forwardReceive/V2NIMFriendService/acceptAddApplication", this.handlePassFriendApply.bind(this)), this.core.eventBus.on("forwardReceive/V2NIMFriendService/rejectAddApplication", this.handleRejectFriendApply.bind(this));
  }
  emit(t2, ...o2) {
    var a2 = `${this.name}::emit ${t2.toString()}`;
    if ("onFriendAdded" === t2 || "onFriendInfoChanged" === t2) {
      var m2 = o2[0];
      this.logger.log(`${a2}`, `${m2.accountId};updateTime:${m2.updateTime}`);
    } else
      this.logger.log(`${a2}`, ...o2);
    return super.emit(t2, ...o2);
  }
  get hasUserService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMUserService) || void 0 === t2 ? void 0 : t2.name);
  }
  addFriend(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), t2 === this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "Cannot add yourself" } });
      validate(No, { accountId: t2, params: o2 }, "", true), yield this.core.sendCmd("v2AddFriend", { accountId: t2, verifyType: o2.addMode, postscript: o2.postscript || "" }), 1 === o2.addMode && (yield this.handleAddFriend(t2), this.notificationModel.updateFriendAddApplicationStatus(t2, 4, this.core.account));
    });
  }
  deleteFriend(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), t2 === this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "Cannot delete yourself" } });
      validate(Ao, { accountId: t2, params: o2 }, "", true), yield this.core.sendCmd("v2DeleteFriend", { accountId: t2, params: o2 }), o2.deleteAlias && this.model.upsertFriend(t2, { alias: "" }), this.handleDeleteFriend(t2);
    });
  }
  acceptAddApplication(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), checkApplication(t2, this.core.account);
      try {
        yield this.core.sendCmd("v2AddFriend", { accountId: t2.applicantAccountId, verifyType: 3, postscript: "" }), this.handlePassFriendApply(t2.applicantAccountId);
      } catch (o2) {
        throw this.handlePassFriendApply(t2.applicantAccountId, o2), o2;
      }
    });
  }
  rejectAddApplication(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), checkApplication(t2, this.core.account);
      try {
        yield this.core.sendCmd("v2AddFriend", { accountId: t2.applicantAccountId, verifyType: 4, postscript: o2 || "" }), this.handleRejectFriendApply({ applicantAccountId: t2.applicantAccountId, recipientAccountId: t2.recipientAccountId, operatorAccountId: this.core.account, postscript: o2 || "", timestamp: this.core.timeOrigin.getNTPTime(), read: false, status: 2 });
      } catch (a2) {
        throw this.handleRejectFriendApply({ applicantAccountId: t2.applicantAccountId, recipientAccountId: t2.recipientAccountId, operatorAccountId: this.core.account, postscript: o2 || "", timestamp: this.core.timeOrigin.getNTPTime(), read: false, status: 3 }, a2), a2;
      }
    });
  }
  setFriendInfo(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate(Oo, { accountId: t2, params: o2 }, "", true), t2 === this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "Cannot set yourself" } });
      yield this.core.sendCmd("v2SetFriendInfo", { tag: Object.assign({ accountId: t2 }, o2) }), this.handleSetFriendInfo(t2, o2);
    });
  }
  getFriendList() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), this.computedFields(this.model.getFriendList());
    });
  }
  getFriendByIds(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), validate({ accountIds: { type: "array", itemType: "string", required: true, min: 1 } }, { accountIds: t2 }, "", true), this.computedFields(this.model.getFriendByIds(t2));
    });
  }
  checkFriend(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), validate({ accountIds: { type: "array", itemType: "string", required: true, min: 1 } }, { accountIds: t2 }, "", true);
      var o2 = {};
      return t2.forEach((t3) => {
        o2[t3] = !!this.model.getFriend(t3);
      }), o2;
    });
  }
  getAddApplicationList(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), validate(bo, t2, "", true), this.notificationModel.getAddApplicationList(t2);
    });
  }
  setAddApplicationRead() {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), this.notificationModel.setAllApplicationRead();
    });
  }
  setAddApplicationReadEx(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), t2 ? (checkApplication(t2, this.core.account), this.notificationModel.setApplicationRead(t2)) : this.notificationModel.setAllApplicationRead();
    });
  }
  getAddApplicationUnreadCount() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), this.notificationModel.getAddApplicationUnreadCount();
    });
  }
  clearAllAddApplication() {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), this.notificationModel.clearApplicationList();
    });
  }
  deleteAddApplication(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), checkApplication(t2, this.core.account), this.notificationModel.deleteApplication(t2);
    });
  }
  searchFriendByOption(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), this.core.V2NIMLoginService.checkIllegalState(), validate({ keyword: { type: "string", allowEmpty: false }, searchAccountId: { type: "boolean", required: false } }, t2, "", true), !(void 0 === t2.searchAlias || t2.searchAlias) && !t2.searchAccountId)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "searchAlias and searchAccountId cannot be false at the same time" } });
      return this.computedFields(this.model.getFriendListBySearchOption(t2));
    });
  }
  v2OnAddFriendHandler(t2) {
    var { accountId: o2, verifyType: a2, postscript: m2 } = t2.content;
    if (1 === a2)
      this.handleAddFriend(o2), this.notificationModel.updateFriendAddApplicationStatus(o2, 4, this.core.account);
    else if (2 === a2) {
      var u2 = { applicantAccountId: this.core.account, recipientAccountId: o2, operatorAccountId: this.core.account, postscript: m2, timestamp: this.core.timeOrigin.getNTPTime(), status: 0, read: false };
      this.handleApplyFriend(u2);
    } else if (3 === a2)
      this.handlePassFriendApply(o2);
    else if (4 === a2) {
      var h2 = { applicantAccountId: o2, recipientAccountId: this.core.account, operatorAccountId: this.core.account, postscript: m2, timestamp: this.core.timeOrigin.getNTPTime(), status: 2, read: false };
      this.handleRejectFriendApply(h2);
    }
  }
  v2OnDeleteFriendHandler(t2) {
    var { accountId: o2 } = t2.content;
    this.handleDeleteFriend(o2);
  }
  v2OnUpdateFriendInfoHandler(t2) {
    var { data: o2 } = t2.content, a2 = this.model.upsertFriend(o2.accountId, o2);
    this.emit("onFriendInfoChanged", this.computedField(a2));
  }
  v2SyncFriendListHandler(t2) {
    var { friends: o2, timetag: a2 } = t2.content;
    this.model.setFriendTimetag(a2), o2.forEach((t3) => {
      t3.serverExtension || (t3.serverExtension = ""), t3.customerExtension || (t3.customerExtension = ""), 0 === t3.relationShip ? this.model.deleteFriend(t3.accountId) : this.model.upsertFriend(t3.accountId, t3);
    });
  }
  v2SyncFriendUserListHandler(t2) {
    var { users: o2 } = t2.content;
    this.hasUserService && o2.forEach((t3) => {
      this.core.V2NIMUserService.model.setUser(t3);
    });
  }
  handleApplyFriend(t2) {
    this.emit("onFriendAddApplication", t2);
  }
  handleAddFriend(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.model.addFriend(t2), yield this.incrementSyncFriend(), yield this.core.V2NIMUserService.refreshUserInfo(t2);
      var o3 = this.model.getFriend(t2);
      o3 && this.emit("onFriendAdded", this.computedField(o3));
    });
  }
  handleDeleteFriend(t2, o2) {
    o2 = void 0 === o2 ? 1 : o2, this.emit("onFriendDeleted", t2, o2), this.model.deleteFriend(t2);
  }
  handleSetFriendInfo(t2, o2) {
    var a2 = this.model.upsertFriend(t2, o2);
    this.emit("onFriendInfoChanged", this.computedField(a2));
  }
  handlePassFriendApply(t2, o2) {
    var a2 = o2 ? null == o2 ? void 0 : o2.code : 200;
    if (!(a2 >= 19e4 || a2 === Me.V2NIM_ERROR_CODE_FRIEND_OPERATION_RATE_LIMIT))
      if (200 === a2 || a2 === Me.V2NIM_ERROR_CODE_FRIEND_ALREADY_EXIST)
        this.notificationModel.updateFriendAddApplicationStatus(t2, 1, this.core.account), this.handleAddFriend(t2);
      else {
        if (a2 >= 500 && a2 <= 599 && 509 !== a2)
          return;
        this.notificationModel.updateFriendAddApplicationStatus(t2, 3, this.core.account);
      }
  }
  handleRejectFriendApply(t2, o2) {
    var a2 = o2 ? null == o2 ? void 0 : o2.code : 200;
    if (!(a2 >= 19e4 || a2 === Me.V2NIM_ERROR_CODE_FRIEND_OPERATION_RATE_LIMIT))
      if (200 === a2)
        this.emit("onFriendAddRejected", t2), this.notificationModel.updateFriendAddApplicationStatus(t2.applicantAccountId, 2, this.core.account);
      else if (a2 === Me.V2NIM_ERROR_CODE_FRIEND_ALREADY_EXIST)
        this.notificationModel.updateFriendAddApplicationStatus(t2.applicantAccountId, 1, this.core.account);
      else {
        if (a2 >= 500 && a2 <= 599 && 509 !== a2)
          return;
        this.notificationModel.updateFriendAddApplicationStatus(t2.applicantAccountId, 3, this.core.account);
      }
  }
  incrementSyncFriend() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2 = yield this.core.sendCmd("v2IncFriendInfo", { timetag: this.model.getFriendTimetag() }), { friends: o2, timetag: a2 } = t2.content;
      this.model.setFriendTimetag(a2), o2.forEach((t3) => {
        this.model.upsertFriend(t3.accountId, t3);
      });
    });
  }
  computedFields(t2) {
    return t2.map((t3) => this.computedField(t3));
  }
  computedField(t2) {
    var o2, a2, m2 = null === (a2 = null === (o2 = this.core.V2NIMUserService) || void 0 === o2 ? void 0 : o2.model) || void 0 === a2 ? void 0 : a2.getUser(t2.accountId);
    return m2 ? Object.assign({}, t2, { userProfile: m2 }) : t2;
  }
};
var Vo = { muteMode: { type: "enum", values: [2, 0, 1] } };
var ko = { accountId: { type: "string", required: true, allowEmpty: false }, muteMode: { type: "enum", required: true, values: [2, 0, 1] } };
var Po = { type: "object", required: false, rules: { certificateName: { type: "string", required: true, allowEmpty: false }, appId: { type: "string", required: false, allowEmpty: false }, appKey: { type: "string", required: false, allowEmpty: false }, secret: { type: "string", required: false, allowEmpty: false } } };
var Lo = { config: { type: "object", required: true, rules: { apns: Po, hwPush: Po, miPush: Po, vivoPush: Po, oppoPush: Po, honorPush: Po, fcmPush: Po, mzPush: Po } } };
var wo = "V2NIMSettingService";
var Do = { "34_1": "v2SetDeviceToken", "34_2": "v2SetAppBackground", "34_15": "v2SetPushMobileOnDesktopOnline", "3_115": "v2SettingMutilSyncDonnop", "4_13": "v2SettingSyncDonnop" };
var Uo = { need: { id: 1, converter: (t2) => t2 ? 2 : 1, retConverter: (t2) => "2" === t2 } };
var xo = { v2SetDeviceToken: { sid: 34, cid: 1, service: wo, params: [{ type: "String", name: "certificateName" }, { type: "String", name: "pushDeviceToken" }, { type: "Int", name: "pushkit" }] }, v2SetAppBackground: { sid: 34, cid: 2, service: wo, params: [{ type: "Bool", name: "isBackground" }, { type: "Int", name: "badge" }] }, v2SetPushMobileOnDesktopOnline: { sid: 34, cid: 15, service: wo, params: [{ type: "Property", name: "tag", reflectMapper: Uo }] }, v2SettingMutilSyncDonnop: { sid: 3, cid: 115, service: wo, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Uo) }, { type: "Long", name: "timetag" }] }, v2SettingSyncDonnop: { sid: 4, cid: 13, service: wo, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Uo) }, { type: "Long", name: "timetag" }] } };
var V2NIMSettingHandlerImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2;
  }
  v2SettingMutilSyncDonnopHandler(t2) {
    var { need: o2 } = t2.content.data;
    this.service.needToPushMobileOnDesktopOnline = o2, this.service.emit("onPushMobileOnDesktopOnline", o2);
  }
  v2SettingSyncDonnopHandler(t2) {
    var { need: o2 } = t2.content.data;
    this.service.needToPushMobileOnDesktopOnline = o2, this.service.emit("onPushMobileOnDesktopOnline", o2);
  }
};
var Fo = Fo || function(t2) {
  var o2;
  "undefined" != typeof window && window.crypto && (o2 = window.crypto), "undefined" != typeof self && self.crypto && (o2 = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (o2 = globalThis.crypto), !o2 && "undefined" != typeof window && window.msCrypto && (o2 = window.msCrypto), !o2 && "undefined" != typeof global && global.crypto && (o2 = global.crypto);
  var cryptoSecureRandomInt = function() {
    if (o2) {
      if ("function" == typeof o2.getRandomValues)
        try {
          return o2.getRandomValues(new Uint32Array(1))[0];
        } catch (t3) {
        }
      if ("function" == typeof o2.randomBytes)
        try {
          return o2.randomBytes(4).readInt32LE();
        } catch (t3) {
        }
    }
    throw new Error("Native crypto module could not be used to get secure random number.");
  }, a2 = Object.create || /* @__PURE__ */ function() {
    function F() {
    }
    return function(t3) {
      var o3;
      return F.prototype = t3, o3 = new F(), F.prototype = null, o3;
    };
  }(), m2 = {}, u2 = m2.lib = {}, h2 = u2.Base = { extend: function(t3) {
    var o3 = a2(this);
    return t3 && o3.mixIn(t3), o3.hasOwnProperty("init") && this.init !== o3.init || (o3.init = function() {
      o3.$super.init.apply(this, arguments);
    }), o3.init.prototype = o3, o3.$super = this, o3;
  }, create: function() {
    var t3 = this.extend();
    return t3.init.apply(t3, arguments), t3;
  }, init: function() {
  }, mixIn: function(t3) {
    for (var o3 in t3)
      t3.hasOwnProperty(o3) && (this[o3] = t3[o3]);
    t3.hasOwnProperty("toString") && (this.toString = t3.toString);
  }, clone: function() {
    return this.init.prototype.extend(this);
  } }, g2 = u2.WordArray = h2.extend({ init: function(t3, o3) {
    t3 = this.words = t3 || [], this.sigBytes = null != o3 ? o3 : 4 * t3.length;
  }, toString: function(t3) {
    return (t3 || M2).stringify(this);
  }, concat: function(t3) {
    var o3 = this.words, a3 = t3.words, m3 = this.sigBytes, u3 = t3.sigBytes;
    if (this.clamp(), m3 % 4)
      for (var h3 = 0; h3 < u3; h3++) {
        var g3 = a3[h3 >>> 2] >>> 24 - h3 % 4 * 8 & 255;
        o3[m3 + h3 >>> 2] |= g3 << 24 - (m3 + h3) % 4 * 8;
      }
    else
      for (var I3 = 0; I3 < u3; I3 += 4)
        o3[m3 + I3 >>> 2] = a3[I3 >>> 2];
    return this.sigBytes += u3, this;
  }, clamp: function() {
    var o3 = this.words, a3 = this.sigBytes;
    o3[a3 >>> 2] &= 4294967295 << 32 - a3 % 4 * 8, o3.length = t2.ceil(a3 / 4);
  }, clone: function() {
    var t3 = h2.clone.call(this);
    return t3.words = this.words.slice(0), t3;
  }, random: function(t3) {
    for (var o3 = [], a3 = 0; a3 < t3; a3 += 4)
      o3.push(cryptoSecureRandomInt());
    return new g2.init(o3, t3);
  } }), I2 = m2.enc = {}, M2 = I2.Hex = { stringify: function(t3) {
    for (var o3 = t3.words, a3 = t3.sigBytes, m3 = [], u3 = 0; u3 < a3; u3++) {
      var h3 = o3[u3 >>> 2] >>> 24 - u3 % 4 * 8 & 255;
      m3.push((h3 >>> 4).toString(16)), m3.push((15 & h3).toString(16));
    }
    return m3.join("");
  }, parse: function(t3) {
    for (var o3 = t3.length, a3 = [], m3 = 0; m3 < o3; m3 += 2)
      a3[m3 >>> 3] |= parseInt(t3.substr(m3, 2), 16) << 24 - m3 % 8 * 4;
    return new g2.init(a3, o3 / 2);
  } }, _2 = I2.Latin1 = { stringify: function(t3) {
    for (var o3 = t3.words, a3 = t3.sigBytes, m3 = [], u3 = 0; u3 < a3; u3++) {
      var h3 = o3[u3 >>> 2] >>> 24 - u3 % 4 * 8 & 255;
      m3.push(String.fromCharCode(h3));
    }
    return m3.join("");
  }, parse: function(t3) {
    for (var o3 = t3.length, a3 = [], m3 = 0; m3 < o3; m3++)
      a3[m3 >>> 2] |= (255 & t3.charCodeAt(m3)) << 24 - m3 % 4 * 8;
    return new g2.init(a3, o3);
  } }, E2 = I2.Utf8 = { stringify: function(t3) {
    try {
      return decodeURIComponent(escape(_2.stringify(t3)));
    } catch (t4) {
      throw new Error("Malformed UTF-8 data");
    }
  }, parse: function(t3) {
    return _2.parse(unescape(encodeURIComponent(t3)));
  } }, S2 = u2.BufferedBlockAlgorithm = h2.extend({ reset: function() {
    this._data = new g2.init(), this._nDataBytes = 0;
  }, _append: function(t3) {
    "string" == typeof t3 && (t3 = E2.parse(t3)), this._data.concat(t3), this._nDataBytes += t3.sigBytes;
  }, _process: function(o3) {
    var a3, m3 = this._data, u3 = m3.words, h3 = m3.sigBytes, I3 = this.blockSize, M3 = h3 / (4 * I3), _3 = (M3 = o3 ? t2.ceil(M3) : t2.max((0 | M3) - this._minBufferSize, 0)) * I3, E3 = t2.min(4 * _3, h3);
    if (_3) {
      for (var S3 = 0; S3 < _3; S3 += I3)
        this._doProcessBlock(u3, S3);
      a3 = u3.splice(0, _3), m3.sigBytes -= E3;
    }
    return new g2.init(a3, E3);
  }, clone: function() {
    var t3 = h2.clone.call(this);
    return t3._data = this._data.clone(), t3;
  }, _minBufferSize: 0 });
  u2.Hasher = S2.extend({ cfg: h2.extend(), init: function(t3) {
    this.cfg = this.cfg.extend(t3), this.reset();
  }, reset: function() {
    S2.reset.call(this), this._doReset();
  }, update: function(t3) {
    return this._append(t3), this._process(), this;
  }, finalize: function(t3) {
    return t3 && this._append(t3), this._doFinalize();
  }, blockSize: 16, _createHelper: function(t3) {
    return function(o3, a3) {
      return new t3.init(a3).finalize(o3);
    };
  }, _createHmacHelper: function(t3) {
    return function(o3, a3) {
      return new T2.HMAC.init(t3, a3).finalize(o3);
    };
  } });
  var T2 = m2.algo = {};
  return m2;
}(Math);
var Bo = Fo.enc.Utf8;
var $o = Fo;
var jo = $o.lib;
var Go = jo.Base;
var qo = jo.WordArray;
var Ho = $o.algo;
var zo = Ho.MD5;
var Yo = Ho.EvpKDF = Go.extend({ cfg: Go.extend({ keySize: 4, hasher: zo, iterations: 1 }), init: function(t2) {
  this.cfg = this.cfg.extend(t2);
}, compute: function(t2, o2) {
  for (var a2, m2 = this.cfg, u2 = m2.hasher.create(), h2 = qo.create(), g2 = h2.words, I2 = m2.keySize, M2 = m2.iterations; g2.length < I2; ) {
    a2 && u2.update(a2), a2 = u2.update(t2).finalize(o2), u2.reset();
    for (var _2 = 1; _2 < M2; _2++)
      a2 = u2.finalize(a2), u2.reset();
    h2.concat(a2);
  }
  return h2.sigBytes = 4 * I2, h2;
} });
$o.EvpKDF = function(t2, o2, a2) {
  return Yo.create(a2).compute(t2, o2);
}, Fo.EvpKDF;
var Ko = Fo;
var Wo = Ko.lib.WordArray;
Ko.enc.Base64 = { stringify: function(t2) {
  var o2 = t2.words, a2 = t2.sigBytes, m2 = this._map;
  t2.clamp();
  for (var u2 = [], h2 = 0; h2 < a2; h2 += 3)
    for (var g2 = (o2[h2 >>> 2] >>> 24 - h2 % 4 * 8 & 255) << 16 | (o2[h2 + 1 >>> 2] >>> 24 - (h2 + 1) % 4 * 8 & 255) << 8 | o2[h2 + 2 >>> 2] >>> 24 - (h2 + 2) % 4 * 8 & 255, I2 = 0; I2 < 4 && h2 + 0.75 * I2 < a2; I2++)
      u2.push(m2.charAt(g2 >>> 6 * (3 - I2) & 63));
  var M2 = m2.charAt(64);
  if (M2)
    for (; u2.length % 4; )
      u2.push(M2);
  return u2.join("");
}, parse: function(t2) {
  var o2 = t2.length, a2 = this._map, m2 = this._reverseMap;
  if (!m2) {
    m2 = this._reverseMap = [];
    for (var u2 = 0; u2 < a2.length; u2++)
      m2[a2.charCodeAt(u2)] = u2;
  }
  var h2 = a2.charAt(64);
  if (h2) {
    var g2 = t2.indexOf(h2);
    -1 !== g2 && (o2 = g2);
  }
  return function parseLoop(t3, o3, a3) {
    for (var m3 = [], u3 = 0, h3 = 0; h3 < o3; h3++)
      if (h3 % 4) {
        var g3 = a3[t3.charCodeAt(h3 - 1)] << h3 % 4 * 2 | a3[t3.charCodeAt(h3)] >>> 6 - h3 % 4 * 2;
        m3[u3 >>> 2] |= g3 << 24 - u3 % 4 * 8, u3++;
      }
    return Wo.create(m3, u3);
  }(t2, o2, m2);
}, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" }, Fo.enc.Base64, function(t2) {
  t2.lib.Cipher || function() {
    var o2 = t2, a2 = o2.lib, m2 = a2.Base, u2 = a2.WordArray, h2 = a2.BufferedBlockAlgorithm, g2 = o2.enc;
    g2.Utf8;
    var I2 = g2.Base64, M2 = o2.algo.EvpKDF, _2 = a2.Cipher = h2.extend({ cfg: m2.extend(), createEncryptor: function(t3, o3) {
      return this.create(this._ENC_XFORM_MODE, t3, o3);
    }, createDecryptor: function(t3, o3) {
      return this.create(this._DEC_XFORM_MODE, t3, o3);
    }, init: function(t3, o3, a3) {
      this.cfg = this.cfg.extend(a3), this._xformMode = t3, this._key = o3, this.reset();
    }, reset: function() {
      h2.reset.call(this), this._doReset();
    }, process: function(t3) {
      return this._append(t3), this._process();
    }, finalize: function(t3) {
      return t3 && this._append(t3), this._doFinalize();
    }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: /* @__PURE__ */ function() {
      function selectCipherStrategy(t3) {
        return "string" == typeof t3 ? b2 : O2;
      }
      return function(t3) {
        return { encrypt: function(o3, a3, m3) {
          return selectCipherStrategy(a3).encrypt(t3, o3, a3, m3);
        }, decrypt: function(o3, a3, m3) {
          return selectCipherStrategy(a3).decrypt(t3, o3, a3, m3);
        } };
      };
    }() });
    a2.StreamCipher = _2.extend({ _doFinalize: function() {
      return this._process(true);
    }, blockSize: 1 });
    var E2 = o2.mode = {}, S2 = a2.BlockCipherMode = m2.extend({ createEncryptor: function(t3, o3) {
      return this.Encryptor.create(t3, o3);
    }, createDecryptor: function(t3, o3) {
      return this.Decryptor.create(t3, o3);
    }, init: function(t3, o3) {
      this._cipher = t3, this._iv = o3;
    } }), T2 = E2.CBC = function() {
      var t3 = S2.extend();
      function xorBlock(t4, o3, a3) {
        var m3, u3 = this._iv;
        u3 ? (m3 = u3, this._iv = void 0) : m3 = this._prevBlock;
        for (var h3 = 0; h3 < a3; h3++)
          t4[o3 + h3] ^= m3[h3];
      }
      return t3.Encryptor = t3.extend({ processBlock: function(t4, o3) {
        var a3 = this._cipher, m3 = a3.blockSize;
        xorBlock.call(this, t4, o3, m3), a3.encryptBlock(t4, o3), this._prevBlock = t4.slice(o3, o3 + m3);
      } }), t3.Decryptor = t3.extend({ processBlock: function(t4, o3) {
        var a3 = this._cipher, m3 = a3.blockSize, u3 = t4.slice(o3, o3 + m3);
        a3.decryptBlock(t4, o3), xorBlock.call(this, t4, o3, m3), this._prevBlock = u3;
      } }), t3;
    }(), C2 = (o2.pad = {}).Pkcs7 = { pad: function(t3, o3) {
      for (var a3 = 4 * o3, m3 = a3 - t3.sigBytes % a3, h3 = m3 << 24 | m3 << 16 | m3 << 8 | m3, g3 = [], I3 = 0; I3 < m3; I3 += 4)
        g3.push(h3);
      var M3 = u2.create(g3, m3);
      t3.concat(M3);
    }, unpad: function(t3) {
      var o3 = 255 & t3.words[t3.sigBytes - 1 >>> 2];
      t3.sigBytes -= o3;
    } };
    a2.BlockCipher = _2.extend({ cfg: _2.cfg.extend({ mode: T2, padding: C2 }), reset: function() {
      var t3;
      _2.reset.call(this);
      var o3 = this.cfg, a3 = o3.iv, m3 = o3.mode;
      this._xformMode == this._ENC_XFORM_MODE ? t3 = m3.createEncryptor : (t3 = m3.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == t3 ? this._mode.init(this, a3 && a3.words) : (this._mode = t3.call(m3, this, a3 && a3.words), this._mode.__creator = t3);
    }, _doProcessBlock: function(t3, o3) {
      this._mode.processBlock(t3, o3);
    }, _doFinalize: function() {
      var t3, o3 = this.cfg.padding;
      return this._xformMode == this._ENC_XFORM_MODE ? (o3.pad(this._data, this.blockSize), t3 = this._process(true)) : (t3 = this._process(true), o3.unpad(t3)), t3;
    }, blockSize: 4 });
    var N2 = a2.CipherParams = m2.extend({ init: function(t3) {
      this.mixIn(t3);
    }, toString: function(t3) {
      return (t3 || this.formatter).stringify(this);
    } }), A2 = (o2.format = {}).OpenSSL = { stringify: function(t3) {
      var o3 = t3.ciphertext, a3 = t3.salt;
      return (a3 ? u2.create([1398893684, 1701076831]).concat(a3).concat(o3) : o3).toString(I2);
    }, parse: function(t3) {
      var o3, a3 = I2.parse(t3), m3 = a3.words;
      return 1398893684 == m3[0] && 1701076831 == m3[1] && (o3 = u2.create(m3.slice(2, 4)), m3.splice(0, 4), a3.sigBytes -= 16), N2.create({ ciphertext: a3, salt: o3 });
    } }, O2 = a2.SerializableCipher = m2.extend({ cfg: m2.extend({ format: A2 }), encrypt: function(t3, o3, a3, m3) {
      m3 = this.cfg.extend(m3);
      var u3 = t3.createEncryptor(a3, m3), h3 = u3.finalize(o3), g3 = u3.cfg;
      return N2.create({ ciphertext: h3, key: a3, iv: g3.iv, algorithm: t3, mode: g3.mode, padding: g3.padding, blockSize: t3.blockSize, formatter: m3.format });
    }, decrypt: function(t3, o3, a3, m3) {
      return m3 = this.cfg.extend(m3), o3 = this._parse(o3, m3.format), t3.createDecryptor(a3, m3).finalize(o3.ciphertext);
    }, _parse: function(t3, o3) {
      return "string" == typeof t3 ? o3.parse(t3, this) : t3;
    } }), R2 = (o2.kdf = {}).OpenSSL = { execute: function(t3, o3, a3, m3) {
      m3 || (m3 = u2.random(8));
      var h3 = M2.create({ keySize: o3 + a3 }).compute(t3, m3), g3 = u2.create(h3.words.slice(o3), 4 * a3);
      return h3.sigBytes = 4 * o3, N2.create({ key: h3, iv: g3, salt: m3 });
    } }, b2 = a2.PasswordBasedCipher = O2.extend({ cfg: O2.cfg.extend({ kdf: R2 }), encrypt: function(t3, o3, a3, m3) {
      var u3 = (m3 = this.cfg.extend(m3)).kdf.execute(a3, t3.keySize, t3.ivSize);
      m3.iv = u3.iv;
      var h3 = O2.encrypt.call(this, t3, o3, u3.key, m3);
      return h3.mixIn(u3), h3;
    }, decrypt: function(t3, o3, a3, m3) {
      m3 = this.cfg.extend(m3), o3 = this._parse(o3, m3.format);
      var u3 = m3.kdf.execute(a3, t3.keySize, t3.ivSize, o3.salt);
      return m3.iv = u3.iv, O2.decrypt.call(this, t3, o3, u3.key, m3);
    } });
  }();
}(Fo);
var Jo = Fo;
var Xo = Jo.lib.StreamCipher;
var Qo = Jo.algo;
var Zo = Qo.RC4 = Xo.extend({ _doReset: function() {
  for (var t2 = this._key, o2 = t2.words, a2 = t2.sigBytes, m2 = this._S = [], u2 = 0; u2 < 256; u2++)
    m2[u2] = u2;
  u2 = 0;
  for (var h2 = 0; u2 < 256; u2++) {
    var g2 = u2 % a2, I2 = o2[g2 >>> 2] >>> 24 - g2 % 4 * 8 & 255;
    h2 = (h2 + m2[u2] + I2) % 256;
    var M2 = m2[u2];
    m2[u2] = m2[h2], m2[h2] = M2;
  }
  this._i = this._j = 0;
}, _doProcessBlock: function(t2, o2) {
  t2[o2] ^= generateKeystreamWord.call(this);
}, keySize: 8, ivSize: 0 });
function generateKeystreamWord() {
  for (var t2 = this._S, o2 = this._i, a2 = this._j, m2 = 0, u2 = 0; u2 < 4; u2++) {
    a2 = (a2 + t2[o2 = (o2 + 1) % 256]) % 256;
    var h2 = t2[o2];
    t2[o2] = t2[a2], t2[a2] = h2, m2 |= t2[(t2[o2] + t2[a2]) % 256] << 24 - 8 * u2;
  }
  return this._i = o2, this._j = a2, m2;
}
Jo.RC4 = Xo._createHelper(Zo);
var es = Qo.RC4Drop = Zo.extend({ cfg: Zo.cfg.extend({ drop: 192 }), _doReset: function() {
  Zo._doReset.call(this);
  for (var t2 = this.cfg.drop; t2 > 0; t2--)
    generateKeystreamWord.call(this);
} });
Jo.RC4Drop = Xo._createHelper(es);
var ts = Fo.RC4;
var V2NIMSettingPushImpl = class {
  constructor(t2, o2) {
    this.offlinePushPlugin = void 0, this.offlinePushConfig = void 0, this.authConfig = void 0, this.aosPushInfo = void 0, this.appBackgroundOptions = { badge: 0, isBackground: false }, this.setTokenAndBackgroundStateAfterLogin = (t3) => {
      this.aosPushInfo = t3, this.logger.log("OfflinePushService: setToken, deviceClientId:", null == t3 ? void 0 : t3.clientId), this.offlinePushPlugin && (this.logger.log("OfflinePushService: setToken plugin is provided"), this.logger.log("OfflinePushService: setToken pushType is: ", t3 && t3.pushType), this.regToken(), this.core.sendCmd("v2SetAppBackground", { isBackground: this.appBackgroundOptions.isBackground, badge: this.appBackgroundOptions.badge || 0 }));
    }, this.core = t2, this.service = o2, this.logger = t2.logger;
  }
  getRNDeviceInfo() {
    var t2;
    return this.logger.log("OfflinePushService:getDeviceInfo start"), null === (t2 = this.offlinePushPlugin) || void 0 === t2 || t2.init(JSON.stringify(this.authConfig), (t3, o2, a2) => {
      if (this.logger.log(`OfflinePushService:: type: ${t3}, tokenName: ${o2}, token: ${a2}`), a2) {
        var m2 = "", u2 = Ae.getSystemInfo() || {}, h2 = u2.os ? u2.os.toLowerCase() : "";
        this.aosPushInfo && this.aosPushInfo.pushType ? m2 = this.aosPushInfo.pushType : "ios" === h2 ? m2 = "" : "android" === h2 && (m2 = "8"), this.pushTokenToServer(m2, a2);
      } else
        this.logger.warn("OfflinePushService:: token is empty. Please check your parameters");
    }), new Promise((t3, o2) => {
      var a2;
      null === (a2 = this.offlinePushPlugin) || void 0 === a2 || a2.getDeviceInfo((a3) => {
        try {
          this.logger.log(`OfflinePushService:getDeviceInfo result ${a3 ? JSON.stringify(a3) : ""}`), t3(JSON.parse(a3));
        } catch (t4) {
          o2(new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INTERNAL, detail: { reason: "OfflinePushService:getDeviceInfo error" } }));
        }
      }), setTimeout(() => {
        o2(new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INTERNAL, detail: { reason: "OfflinePushService:getDeviceInfo timeout" } }));
      }, 2e3);
    });
  }
  pushTokenToServer(t2, o2) {
    var a2, m2, u2, h2, g2, I2, M2, _2, E2 = "", S2 = this.offlinePushConfig;
    switch (t2) {
      case "5":
        E2 = null === (a2 = null == S2 ? void 0 : S2.miPush) || void 0 === a2 ? void 0 : a2.certificateName;
        break;
      case "6":
        E2 = null === (m2 = null == S2 ? void 0 : S2.hwPush) || void 0 === m2 ? void 0 : m2.certificateName;
        break;
      case "7":
        E2 = null === (u2 = null == S2 ? void 0 : S2.mzPush) || void 0 === u2 ? void 0 : u2.certificateName;
        break;
      case "8":
        E2 = null === (h2 = null == S2 ? void 0 : S2.fcmPush) || void 0 === h2 ? void 0 : h2.certificateName;
        break;
      case "9":
        E2 = null === (g2 = null == S2 ? void 0 : S2.vivoPush) || void 0 === g2 ? void 0 : g2.certificateName;
        break;
      case "10":
        E2 = null === (I2 = null == S2 ? void 0 : S2.oppoPush) || void 0 === I2 ? void 0 : I2.certificateName;
        break;
      case "11":
        E2 = null === (M2 = null == S2 ? void 0 : S2.honorPush) || void 0 === M2 ? void 0 : M2.certificateName;
        break;
      default:
        E2 = null === (_2 = null == S2 ? void 0 : S2.apns) || void 0 === _2 ? void 0 : _2.certificateName;
    }
    if ("" === E2 || void 0 === E2)
      this.logger.warn("OfflinePushService:: certificate name is empty for push type: ", t2);
    else
      try {
        if ("UNIAPP" === Ae.platform) {
          var T2 = Bo.parse("557d1e3cafa43e2589a588270c53d56f"), C2 = Bo.stringify(ts.decrypt(o2, T2));
          this.logger.log("OfflinePushService:: token", C2), this.core.sendCmd("v2SetDeviceToken", { certificateName: E2, pushDeviceToken: C2, pushkit: 0 });
        } else
          this.core.sendCmd("v2SetDeviceToken", { certificateName: E2, pushDeviceToken: o2, pushkit: 0 });
      } catch (t3) {
        return this.logger.log("OfflinePushService:: decrypt error", t3), void this.logger.warn("OfflinePushService:: token before decrypt", o2);
      }
  }
  regToken() {
    var t2 = Ae.getSystemInfo() || {}, o2 = t2.os ? t2.os.toLowerCase() : "";
    if (this.logger.log("OfflinePushService: os", o2), "ios" === o2 || "android" === o2)
      if (!this.offlinePushPlugin || "UNIAPP" === Ae.platform && "function" != typeof this.offlinePushPlugin.getDeviceToken || "React Native" === Ae.platform && "android" === o2 && "function" != typeof this.offlinePushPlugin.init || "React Native" === Ae.platform && "ios" === o2 && "function" != typeof this.offlinePushPlugin.checkPermissions)
        this.logger.warn("OfflinePushService: plugin is not correct, please check your plugin according to Yunxin Official Documentation");
      else {
        "React Native" === Ae.platform && Ae.envPayload.AppState && Ae.envPayload.AppState.addEventListener("change", this.handleRNAppStateChange.bind(this));
        var a2 = "";
        this.aosPushInfo && this.aosPushInfo.pushType ? a2 = this.aosPushInfo.pushType : "ios" === o2 ? a2 = "" : "android" === o2 && (a2 = "8"), this.logger.log("OfflinePushService:: prepare to get device token. suggestPushType: " + a2), this.logger.log("OfflinePushService push config", JSON.stringify(this.authConfig, null, 2), "platform", Ae.platform), "UNIAPP" === Ae.platform ? this.offlinePushPlugin.getDeviceToken({ suggestPushType: a2, config: this.authConfig }, (t3) => {
          t3 ? (this.logger.log("OfflinePushService:: token is :" + t3), this.pushTokenToServer(a2, t3)) : this.logger.warn("OfflinePushService:: token is empty. Please check your parameters");
        }) : "React Native" === Ae.platform && "android" === o2 ? (this.logger.log("OfflinePushService:: onLogin", this.core.account, typeof a2, a2), this.offlinePushPlugin.onLogin(this.core.account, parseInt(a2), false, "")) : "React Native" === Ae.platform && "ios" === o2 ? this.offlinePushPlugin.checkPermissions(() => {
          this.logger.log("OfflinePushService addEventListener requestPermissions");
          try {
            this.offlinePushPlugin.requestPermissions();
          } catch (t3) {
            this.logger.log("OfflinePushService:: requestPermissions error", t3);
          }
          this.offlinePushPlugin.addEventListener("register", (t3) => {
            this.logger.log(`OfflinePushService:: ios token: ${t3}`), this.pushTokenToServer(a2, t3);
          }), this.offlinePushPlugin.addEventListener("registrationError", (t3) => {
            this.logger.log("OfflinePushService:: ios registerError", t3);
          });
        }) : this.logger.error(`OfflinePushService:: platform is not supported. Please check your parameters. Platform: ${Ae.platform}. os: ${o2}`);
      }
    else
      this.logger.warn("OfflinePushService: only Android or IOS support offline push");
  }
  handleRNAppStateChange(t2) {
    this.logger.log(`push::handleAppStateChange: pushConfig ios/aos; state: ${t2}`), this.appBackgroundOptions = { badge: this.core.V2NIMConversationService.getTotalUnreadCount(), isBackground: "background" === t2 || "inactive" === t2 }, this.setAppBackground(this.appBackgroundOptions.isBackground, this.appBackgroundOptions.badge);
  }
  setOfflinePushConfig(t2, o2) {
    var a2, m2, u2, h2, g2, I2, M2, _2, E2, S2, T2, C2, N2, A2, O2, R2, b2, V2, k2, P2, L2, w2, D2, U2, x2, B2, $2, j2, G2, q2, H2, z2, Y2, K2, W2, J2;
    this.logger.log("setOfflinePushConfig", "plugin", t2, "config", o2), this.offlinePushPlugin = t2, this.offlinePushConfig = o2, this.authConfig = { xmAppId: null === (m2 = null === (a2 = this.offlinePushConfig) || void 0 === a2 ? void 0 : a2.miPush) || void 0 === m2 ? void 0 : m2.appId, xmAppKey: null === (h2 = null === (u2 = this.offlinePushConfig) || void 0 === u2 ? void 0 : u2.miPush) || void 0 === h2 ? void 0 : h2.appKey, xmCertificateName: null === (I2 = null === (g2 = this.offlinePushConfig) || void 0 === g2 ? void 0 : g2.miPush) || void 0 === I2 ? void 0 : I2.certificateName, hwAppId: null === (_2 = null === (M2 = this.offlinePushConfig) || void 0 === M2 ? void 0 : M2.hwPush) || void 0 === _2 ? void 0 : _2.appId, hwCertificateName: null === (S2 = null === (E2 = this.offlinePushConfig) || void 0 === E2 ? void 0 : E2.hwPush) || void 0 === S2 ? void 0 : S2.certificateName, oppoAppId: null === (C2 = null === (T2 = this.offlinePushConfig) || void 0 === T2 ? void 0 : T2.oppoPush) || void 0 === C2 ? void 0 : C2.appId, oppoAppKey: null === (A2 = null === (N2 = this.offlinePushConfig) || void 0 === N2 ? void 0 : N2.oppoPush) || void 0 === A2 ? void 0 : A2.appKey, oppoAppSecret: null === (R2 = null === (O2 = this.offlinePushConfig) || void 0 === O2 ? void 0 : O2.oppoPush) || void 0 === R2 ? void 0 : R2.secret, oppoCertificateName: null === (V2 = null === (b2 = this.offlinePushConfig) || void 0 === b2 ? void 0 : b2.oppoPush) || void 0 === V2 ? void 0 : V2.certificateName, vivoAppId: null === (P2 = null === (k2 = this.offlinePushConfig) || void 0 === k2 ? void 0 : k2.vivoPush) || void 0 === P2 ? void 0 : P2.appId, vivoAppKey: null === (w2 = null === (L2 = this.offlinePushConfig) || void 0 === L2 ? void 0 : L2.vivoPush) || void 0 === w2 ? void 0 : w2.appKey, vivoCertificateName: null === (U2 = null === (D2 = this.offlinePushConfig) || void 0 === D2 ? void 0 : D2.vivoPush) || void 0 === U2 ? void 0 : U2.certificateName, fcmCertificateName: null === (B2 = null === (x2 = this.offlinePushConfig) || void 0 === x2 ? void 0 : x2.fcmPush) || void 0 === B2 ? void 0 : B2.certificateName, mzAppId: null === (j2 = null === ($2 = this.offlinePushConfig) || void 0 === $2 ? void 0 : $2.mzPush) || void 0 === j2 ? void 0 : j2.appId, mzAppKey: null === (q2 = null === (G2 = this.offlinePushConfig) || void 0 === G2 ? void 0 : G2.mzPush) || void 0 === q2 ? void 0 : q2.appKey, mzCertificateName: null === (z2 = null === (H2 = this.offlinePushConfig) || void 0 === H2 ? void 0 : H2.mzPush) || void 0 === z2 ? void 0 : z2.certificateName, apnsCertificateName: null === (K2 = null === (Y2 = this.offlinePushConfig) || void 0 === Y2 ? void 0 : Y2.apns) || void 0 === K2 ? void 0 : K2.certificateName, honorCertificateName: null === (J2 = null === (W2 = this.offlinePushConfig) || void 0 === W2 ? void 0 : W2.honorPush) || void 0 === J2 ? void 0 : J2.certificateName };
  }
  setAppBackground(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.appBackgroundOptions = { isBackground: t2, badge: o2 || 0 }, yield this.core.sendCmd("v2SetAppBackground", { isBackground: t2, badge: o2 || 0 });
    });
  }
};
var V2NIMSettingMuteImpl = class {
  constructor(t2, o2) {
    this.p2pMessageMuteModeChangeHandler = (t3, o3) => {
      this.service.emit("onP2PMessageMuteModeChanged", t3, o3), this.hasUserService && this.core.V2NIMUserService.model.setAccountMuteMode(t3, o3);
      var a2 = this.core.V2NIMConversationIdUtil.p2pConversationId(t3), m2 = 1 === o3;
      this.core.eventBus.emit("V2NIMSettingService/setMute", a2, m2);
    }, this.core = t2, this.service = o2;
  }
  get hasUserService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMUserService) || void 0 === t2 ? void 0 : t2.name);
  }
  get hasTeamService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMTeamService) || void 0 === t2 ? void 0 : t2.name);
  }
  getConversationMuteStatus(t2) {
    if ("string" != typeof t2)
      return false;
    var o2 = this.core.V2NIMConversationIdUtil.parseConversationType(t2), a2 = this.core.V2NIMConversationIdUtil.parseConversationTargetId(t2);
    return 3 === o2 ? 0 !== this.getTeamMessageMuteMode(a2, 2) : 2 === o2 ? 0 !== this.getTeamMessageMuteMode(a2, 1) : !(1 !== o2 || !this.hasUserService) && !!this.core.V2NIMUserService.model.muteList.has(a2);
  }
  setTeamMessageMuteMode(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      var m2 = 2 === o2 ? "v2SuperTeamUpdateSelfMemberInfo" : "v2TeamUpdateSelfMemberInfo", u2 = { teamId: t2, teamType: o2, accountId: this.core.account, bits: a2 };
      yield this.core.sendCmd(m2, { teamMember: u2 }), this.core.V2NIMTeamService.memberModel.upsert(u2), this.service.emit("onTeamMessageMuteModeChanged", t2, o2, a2);
      var h2 = 1 === o2 ? this.core.V2NIMConversationIdUtil.teamConversationId(t2) : this.core.V2NIMConversationIdUtil.superTeamConversationId(t2), g2 = this.getConversationMuteStatus(h2);
      this.core.eventBus.emit("V2NIMSettingService/setMute", h2, g2);
    });
  }
  getTeamMessageMuteMode(t2, o2) {
    var a2;
    return "string" != typeof t2 || "number" != typeof o2 ? 0 : this.hasTeamService ? 3 & ((null === (a2 = this.core.V2NIMTeamService.memberModel.getById(t2, o2, this.core.account)) || void 0 === a2 ? void 0 : a2.bits) || 0) : 0;
  }
  getAllTeamMessageMuteMode(t2) {
    if (!this.hasTeamService)
      return Promise.resolve({});
    var o2 = this.core.V2NIMTeamService.memberModel.chooseList(t2), a2 = {};
    return o2.forEach((t3) => {
      if (t3.accountId === this.core.account) {
        var o3 = t3.bits || 0;
        a2[t3.teamId] = 3 & o3;
      }
    }), Promise.resolve(a2);
  }
  setP2PMessageMuteMode(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.core.sendCmd("v2SetP2PMessageMuteMode", { accountId: t2, muteMode: 1 === o2 }), this.p2pMessageMuteModeChangeHandler(t2, o2);
    });
  }
  getP2PMessageMuteMode(t2) {
    return this.hasUserService && this.core.V2NIMUserService.model.muteList.has(t2) ? 1 : 0;
  }
  getP2PMessageMuteList() {
    return this.hasUserService ? Promise.resolve(Array.from(this.core.V2NIMUserService.model.muteList)) : Promise.resolve([]);
  }
};
var V2NIMSettingEventImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.push = o2.push, this.mute = o2.mute;
  }
  setListener() {
    this.core.eventBus.on("V2NIMSettingService/updateBits", (t2, o2, a2) => {
      this.service.emit("onTeamMessageMuteModeChanged", t2, o2, a2);
    }), this.core.eventBus.on("V2NIMLoginService/loginLifeCycleLoginSucc", this.push.setTokenAndBackgroundStateAfterLogin.bind(this.push)), this.core.eventBus.on("v2NIMUserService/updateMuteList", this.mute.p2pMessageMuteModeChangeHandler.bind(this.mute)), this.core.eventBus.on("forwardReceive/v2NIMSettingService/setP2PMessageMuteMode", this.mute.p2pMessageMuteModeChangeHandler.bind(this.mute));
  }
};
var V2NIMSettingServiceImpl = class extends V2Service {
  constructor(t2) {
    super("V2NIMSettingService", t2), this.needToPushMobileOnDesktopOnline = true, this.core._registerDep(V2NIMConversationIdUtilImpl, "V2NIMConversationIdUtil"), this.push = new V2NIMSettingPushImpl(t2, this), this.mute = new V2NIMSettingMuteImpl(t2, this), this.event = new V2NIMSettingEventImpl(t2, this), this.handler = new V2NIMSettingHandlerImpl(t2, this), "v2" === this.core.options.apiVersion && (this.setListener(), registerParser({ cmdMap: Do, cmdConfig: xo }));
  }
  get hasUserService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMUserService) || void 0 === t2 ? void 0 : t2.name);
  }
  get hasTeamService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMTeamService) || void 0 === t2 ? void 0 : t2.name);
  }
  setListener() {
    this.event.setListener();
  }
  emit(t2, ...o2) {
    var a2 = `${this.name}::emit ${t2.toString()}`;
    return this.logger.log(`${a2}`, ...o2), super.emit(t2, ...o2);
  }
  getConversationMuteStatus(t2) {
    return this.mute.getConversationMuteStatus(t2);
  }
  setTeamMessageMuteMode(t2, o2, a2) {
    if (!this.hasTeamService)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: "setTeamMessageMuteMode: no team service" } });
    return this.checkV2(), validate(Xi, { teamId: t2 }, "", true), validate(Zi, { teamType: o2 }, "", true), validate(Vo, { muteMode: a2 }, "", true), this.mute.setTeamMessageMuteMode(t2, o2, a2);
  }
  getTeamMessageMuteMode(t2, o2) {
    return this.mute.getTeamMessageMuteMode(t2, o2);
  }
  getAllTeamMessageMuteMode(t2) {
    return this.checkV2(), this.checkLogin(), validate(Zi, { teamType: t2 }, "", true), this.mute.getAllTeamMessageMuteMode(t2);
  }
  setP2PMessageMuteMode(t2, o2) {
    if (this.checkV2(), validate(ko, { accountId: t2, muteMode: o2 }, "", true), t2 === this.core.account)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "can not set mute mode for self" } });
    return this.mute.setP2PMessageMuteMode(t2, o2);
  }
  getP2PMessageMuteMode(t2) {
    return validate({ accountId: { type: "string", required: true, allowEmpty: false } }, { accountId: t2 }, "", true), this.mute.getP2PMessageMuteMode(t2);
  }
  getP2PMessageMuteList() {
    return this.mute.getP2PMessageMuteList();
  }
  setAppBackground(t2, o2) {
    return this.checkV2(), validate({ isBackground: { type: "boolean" }, badge: { type: "number", required: false } }, { isBackground: t2, badge: o2 }, "", true), this.push.setAppBackground(t2, o2);
  }
  setOfflinePushConfig(t2, o2) {
    validate(Lo, { config: o2 }, "", true), this.push.setOfflinePushConfig(t2, o2);
  }
  setPushMobileOnDesktopOnline(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate({ need: { type: "boolean", required: false } }, { need: t2 }, "", true), t2 = void 0 === t2 || t2, yield this.core.sendCmd("v2SetPushMobileOnDesktopOnline", { tag: { need: t2 } }), this.needToPushMobileOnDesktopOnline = t2, this.emit("onPushMobileOnDesktopOnline", t2);
    });
  }
  getPushMobileOnDesktopOnline() {
    return this.checkLogin(), Promise.resolve(this.needToPushMobileOnDesktopOnline);
  }
};
var V2NIMAIModelImpl = class {
  constructor() {
    this.aiStreamMap = /* @__PURE__ */ new Map();
  }
  reset() {
    this.aiStreamMap.clear();
  }
  getAiStream(t2) {
    return this.aiStreamMap.get(t2);
  }
  getAiStreamIsComplete(t2) {
    var o2 = this.aiStreamMap.get(t2);
    return !o2 || o2.isComplete;
  }
  getAiStreamQueryStatus(t2) {
    var o2 = this.aiStreamMap.get(t2);
    return o2 ? o2.queryStatus : 0;
  }
  upsertAiStreamChunks(t2, o2, a2) {
    var m2 = this.aiStreamMap.get(t2);
    return m2 && !m2.isComplete && (m2.chunks[o2] = a2), m2 || { isComplete: false, queryStatus: 0, chunks: [] };
  }
  setAiStream(t2, o2, a2 = false) {
    var m2 = this.aiStreamMap.get(t2);
    return m2 ? this.aiStreamMap.set(t2, Object.assign(Object.assign({}, m2), o2)) : a2 && this.aiStreamMap.set(t2, Object.assign({ isComplete: false, queryStatus: 0, chunks: [] }, o2)), this.aiStreamMap.get(t2) || { isComplete: false, queryStatus: 0, chunks: [] };
  }
  completeAiStream(t2) {
    var o2 = this.aiStreamMap.get(t2);
    o2 && this.aiStreamMap.set(t2, Object.assign(Object.assign({}, o2), { isComplete: true, queryStatus: 0, chunks: [], aiRAGs: void 0 }));
  }
};
var rs = { "4_26": "v2AIChatNotify", "29_35": "v2AIProxyModelCall", "29_36": "v2AIGetUserList", "4_29": "v2AIOnStreamMessageChunk", "4_30": "v2AIChatStreamNotify", "29_38": "v2AIStopModelStreamCall", "29_39": "v2AIStreamQuery", "29_40": "v2AIRegenMessage" };
var is = { accountId: 1, messages: { id: 2, converter: objectToJSONString, retConverter: stringToJSONObject }, requestId: 3, content: { id: 4, converter: objectToJSONString, retConverter: stringToJSONObject }, promptVariables: 5, modelConfigParams: { id: 6, converter: objectToJSONString, retConverter: stringToJSONObject }, antispamBusinessId: 7, antispamEnabled: { id: 8, converter: boolToInt }, aiStream: { id: 9, converter: boolToInt } };
var os = { accountId: 1, name: 3, avatar: 4, sign: 5, gender: { id: 6, retType: "number" }, email: 7, birthday: 8, mobile: 9, serverExtension: 10, modelType: { id: 11, retType: "number" }, modelConfig: { id: 12, retConverter: (t2) => {
  if (t2 = stringToJSONObject(t2)) {
    var o2 = Object.keys(t2).reduce((o3, a2) => (o3[function camelCase(t3) {
      return (t3 = t3 || "").split("_").map((t4, o4) => 0 === o4 ? t4 : t4[0].toUpperCase() + t4.slice(1)).join("");
    }(a2)] = t2[a2], o3), {});
    if ("string" == typeof o2.promptKeys)
      try {
        o2.promptKeys = JSON.parse(o2.promptKeys);
      } catch (t3) {
      }
    return o2;
  }
} }, yunxinConfig: { id: 13, retConverter: (t2) => {
  if (t2 = stringToJSONObject(t2))
    return t2;
} }, valid: { id: 14, retType: "boolean" }, createTime: { id: 15, retType: "number" }, updateTime: { id: 16, retType: "number" } };
function aiAgentStreamContentRetConverter(t2) {
  try {
    var o2 = JSON.parse(t2);
    return "number" == typeof o2.index ? { msg: o2.msg || "", type: o2.type, lastChunk: { content: o2.msg, chunkTime: parseInt(o2.timestamp), type: o2.type, index: parseInt(o2.index) } } : o2;
  } catch (t3) {
    return;
  }
}
function aiAgentStreamAIRAGsRetConverter(t2) {
  try {
    var o2 = JSON.parse(t2);
    return o2 && o2.length > 0 ? o2.map((t3) => (t3.description = t3.desc, delete t3.desc, t3)) : [];
  } catch (t3) {
    return [];
  }
}
var ss = { code: { id: 1, retType: "number" }, accountId: 2, requestId: 3, content: { id: 4, retConverter: aiAgentStreamContentRetConverter }, aiRAGs: { id: 5, retConverter: aiAgentStreamAIRAGsRetConverter }, timestamp: { id: 6, retType: "number" }, aiStreamStatus: { id: 7, retType: "number" }, aiStream: { id: 8, retType: "boolean" } };
var ns = { serverId: 1, clientId: 2, type: { id: 3, retType: "number" }, from: 4, to: 5, aiAccount: 6, startIndex: { id: 7, retType: "number" }, endIndex: { id: 8, retType: "number" }, excludeIndex: { id: 9, converter: objectToJSONString } };
var as = { serverId: 1, clientId: 2, type: { id: 3, retType: "number" }, content: { id: 4, retConverter: aiAgentStreamContentRetConverter }, aiRAGs: { id: 6, retConverter: aiAgentStreamAIRAGsRetConverter } };
var cs = { v2AIChatNotify: { sid: 4, cid: 26, service: "V2NIMAIService", response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ss) }] }, v2AIProxyModelCall: { sid: 29, cid: 35, service: "V2NIMAIService", params: [{ type: "Property", name: "tag", reflectMapper: is }] }, v2AIGetUserList: { sid: 29, cid: 36, service: "V2NIMAIService", params: [{ type: "Property", name: "tag", reflectMapper: { pageToken: 1, limit: 2 } }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(os) }, { type: "Property", name: "queryTag", reflectMapper: invertSerializeItem({ hasMore: { id: 16, retType: "boolean" }, nextToken: 2 }) }] }, v2AIOnStreamMessageChunk: { sid: 4, cid: 29, service: "V2NIMAIService", response: [{ type: "Property", name: "msg", reflectMapper: invertSerializeItem(Pr) }] }, v2AIChatStreamNotify: { sid: 4, cid: 30, service: "V2NIMAIService", response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ss) }] }, v2AIStopModelStreamCall: { sid: 29, cid: 38, service: "V2NIMAIService", params: [{ type: "Property", name: "tag", reflectMapper: { serverId: 1, clientId: 2, type: { id: 3, retType: "number" }, from: 4, to: 5, aiAccount: 6, opeType: { id: 7, retType: "number" }, updateContent: { id: 8 }, messageTime: { id: 11, retType: "number" } } }] }, v2AIStreamQuery: { sid: 29, cid: 39, service: "V2NIMAIService", params: [{ type: "Property", name: "tag", reflectMapper: ns }], response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(as) }] }, v2AIRegenMessage: { sid: 29, cid: 40, service: "V2NIMAIService", params: [{ type: "Property", name: "tag", reflectMapper: { fromAccount: 1, to: 2, aiAccount: 3, serverId: 4, clientId: 5, time: { id: 6, retType: "number" }, type: { id: 7, retType: "number" }, opeType: { id: 8, retType: "number" }, replyMsgFromAccount: 9, replyMsgToAccount: 10, replyMsgTime: { id: 11, retType: "number" }, replyMsgIdServer: 12, replyMsgIdClient: 13 } }] } };
var V2NIMAIEventImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.logger = this.core.logger;
  }
  setListener() {
  }
  beforeEmit(t2, ...o2) {
    var a2, m2, u2 = `${this.service.name}::emit ${t2.toString()}`;
    if ("onProxyAIModelCall" === t2) {
      var h2 = o2[0];
      this.logger.log(`${u2}`, `requestId:${h2.requestId};aiStreamStatus:${h2.aiStreamStatus}`);
    } else if ("onProxyAIModelStreamCall" === t2) {
      var g2 = o2[0];
      this.logger.log(`${u2}`, `requestId:${g2.requestId};chunkIndex:${null === (a2 = g2.content) || void 0 === a2 ? void 0 : a2.lastChunk.index};chunkTime:${null === (m2 = g2.content) || void 0 === m2 ? void 0 : m2.lastChunk.chunkTime}`);
    } else
      this.logger.log(`${u2}`, ...o2);
  }
};
var V2NIMAIHandlerImpl = class {
  constructor(t2, o2) {
    this.core = t2, this.service = o2, this.model = o2.model, this.logger = this.core.logger;
  }
  v2AIChatNotifyHandler(t2) {
    var o2 = t2.content.data;
    o2 && o2.requestId && (this.model.completeAiStream(o2.requestId), o2.aiStreamStatus = o2.aiStreamStatus || 0, o2.aiStream = o2.aiStream || false, o2.content && (o2.content.msg = o2.content.msg || ""), this.service.emit("onProxyAIModelCall", o2));
  }
  v2AIChatStreamNotifyHandler(t2) {
    var o2 = t2.content.data;
    if (o2 && o2.requestId && o2.content && o2.content.msg) {
      var a2 = this.model.getAiStream(o2.requestId);
      if (a2 || (a2 = this.model.setAiStream(o2.requestId, { isComplete: false, queryStatus: 0, chunks: [] }, true)), !a2.isComplete) {
        var { lastChunk: m2 } = o2.content;
        if (0 === m2.index && o2.aiRAGs && (a2 = this.model.setAiStream(o2.requestId, { aiRAGs: o2.aiRAGs })), this.logger.log(`V2AI::streamNotify requestId:${o2.requestId};index:${m2.index};cacheChunkLength:${a2.chunks.length};chunkTime:${m2.chunkTime}.`), 0 === a2.chunks.length && m2.index > 0)
          this.logger.log(`V2AI::streamNotify requestId:${o2.requestId};chunks missing 0,currentIdx:${m2.index},needQuery:${0 === a2.queryStatus}.`), 0 === a2.queryStatus && (a2 = this.model.setAiStream(o2.requestId, { queryStatus: 1 }), this.service._queryAiStream({ clientId: o2.requestId, type: 4, from: this.core.account, aiAccount: o2.accountId, startIndex: 0, endIndex: m2.index - 1 }));
        else if (m2.index > 0 && a2.chunks.length > 0 && void 0 === a2.chunks[m2.index - 1]) {
          var u2 = a2.chunks.reduce((t3, o3, a3) => (void 0 !== o3 && t3.push(a3), t3), []);
          this.logger.log(`V2AI::streamNotify requestId:${o2.requestId};out of order,currenIdx:${m2.index},cacheIdx:[${u2.join(",")}],needReport:${!a2.hasReported}.`), a2.hasReported || (a2 = this.model.setAiStream(o2.requestId, { hasReported: true }), this.reportOutOfOrder({ requestId: o2.requestId, cacheIds: u2, targetIndex: m2.index, target: "4-30" }));
        }
        (a2 = this.model.upsertAiStreamChunks(o2.requestId, m2.index, m2.content)).chunks[0] || 1 !== a2.queryStatus ? (o2.content.msg = a2.chunks.join(""), a2.aiRAGs && (o2.aiRAGs = a2.aiRAGs), this.service.emit("onProxyAIModelStreamCall", o2)) : this.logger.log(`V2AI::streamNotify requestId:${o2.requestId};chunks ignore index:${m2.index};queryStatus:${a2.queryStatus}.`);
      }
    }
  }
  v2AIOnStreamMessageChunkHandler(t2) {
    var o2, a2, m2, u2 = completeMessage(this.core, t2.content.msg);
    if (u2.streamConfig && u2.streamConfig.lastChunk) {
      var h2 = this.model.getAiStream(u2.messageClientId);
      if (!h2 || !h2.isComplete) {
        h2 || (h2 = this.model.setAiStream(u2.messageClientId, { isComplete: false, queryStatus: 0, chunks: [] }, true));
        var g2 = u2.streamConfig.lastChunk, I2 = u2.messageClientId;
        if (0 === g2.index && (null === (o2 = u2.aiConfig) || void 0 === o2 ? void 0 : o2.aiRAGs) && (h2 = this.model.setAiStream(I2, { aiRAGs: u2.aiConfig.aiRAGs })), this.logger.log(`V2AI::aiStream requestId:${I2};index:${g2.index};cacheChunkLength:${h2.chunks.length};chunkTime:${g2.chunkTime}.`), 0 === h2.chunks.length && g2.index > 0)
          this.logger.log(`V2AI::msg:aiStream requestId:${I2};chunks missing 0,currentIdx:${g2.index},needQuery:${0 === h2.queryStatus}.`), 0 === h2.queryStatus && (h2 = this.model.setAiStream(I2, { queryStatus: 1 }), this.service._queryAiStream({ serverId: u2.messageServerId, clientId: I2, type: (null === (a2 = u2.aiConfig) || void 0 === a2 ? void 0 : a2.accountId) ? u2.conversationType : 5, from: u2.senderId, to: u2.receiverId, aiAccount: null === (m2 = u2.aiConfig) || void 0 === m2 ? void 0 : m2.accountId, startIndex: 0, endIndex: g2.index - 1 }));
        else if (g2.index > 0 && h2.chunks.length > 0 && void 0 === h2.chunks[g2.index - 1]) {
          var M2 = h2.chunks.reduce((t3, o3, a3) => (void 0 !== o3 && t3.push(a3), t3), []);
          this.logger.log(`V2AI::msg:aiStream requestId:${I2};out of order,currenIdx:${g2.index};streamCache.chunks:${JSON.stringify(h2.chunks)},cacheIdx:[${M2.join(",")}],needReport:${!h2.hasReported}.`), h2.hasReported || (h2 = this.model.setAiStream(I2, { hasReported: true }), this.reportOutOfOrder({ requestId: I2, cacheIds: M2, targetIndex: g2.index, target: "4-29" }));
        }
        (h2 = this.model.upsertAiStreamChunks(I2, g2.index, g2.content)).chunks[0] || 1 !== h2.queryStatus ? (u2.streamConfig.status = -1, u2.aiConfig && (u2.aiConfig.aiStreamStatus = -1), u2.text = h2.chunks.join(""), h2.aiRAGs && u2.aiConfig && (u2.aiConfig.aiRAGs = h2.aiRAGs), h2.msg && (u2 = Object.assign({}, h2.msg, Object.assign({ text: u2.text, modifyTime: g2.chunkTime, modifyAccountId: h2.msg.senderId, streamConfig: u2.streamConfig }, u2.aiConfig ? { aiConfig: u2.aiConfig } : {}))), this.core.eventBus.emit("V2NIMAIService/receiveMessagesModified", [u2])) : this.logger.log(`V2AI::msg:callStream requestId:${I2};chunks ignore index:${g2.index};queryStatus:${h2.queryStatus}.`);
      }
    }
  }
  reportOutOfOrder(t2) {
    this.core.reporter.reportTraceStart("exceptions", { user_id: this.core.account, trace_id: get(this.core, "clientSocket.socket.sessionId"), action: 2, exception_service: 0 }), this.core.reporter.reportTraceUpdateV2("exceptions", { code: 0, context: t2.requestId, description: `[${t2.cacheIds.join(",")}],${t2.targetIndex}`, operation_type: 2, target: t2.target, net_connect: true }), this.core.reporter.reportTraceEnd("exceptions", 4);
  }
};
var V2NIMAIServiceImpl = class extends V2Service {
  constructor(t2) {
    super("V2NIMAIService", t2), this.model = new V2NIMAIModelImpl(), this.event = new V2NIMAIEventImpl(this.core, this), this.handler = new V2NIMAIHandlerImpl(this.core, this), registerParser({ cmdMap: rs, cmdConfig: cs });
  }
  setListener() {
    this.event.setListener();
  }
  reset() {
    this.model.reset();
  }
  emit(t2, ...o2) {
    return this.event.beforeEmit(t2, ...o2), super.emit(t2, ...o2);
  }
  getAIUserList() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), (yield this.core.sendCmd("v2AIGetUserList", { tag: {} })).content.datas;
    });
  }
  proxyAIModelCall(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate(wt, t2, "", true), this.model.getAiStream(t2.requestId))
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, desc: "Same requestId", detail: { rawData: t2.requestId } });
      this.model.setAiStream(t2.requestId, { isComplete: false, queryStatus: 0, chunks: [] }, true), yield this.core.sendCmd("v2AIProxyModelCall", { tag: t2 });
    });
  }
  stopAIModelStreamCall(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      validate(Dt, t2, "", true), yield this.core.sendCmd("v2AIStopModelStreamCall", { tag: { clientId: t2.requestId, aiAccount: t2.accountId, type: 4, from: this.core.account } }), this.logger.log(`V2AI::streamCallStop,requestId:${t2.requestId}`), this.model.completeAiStream(t2.requestId);
    });
  }
  _queryAiStream(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.model.setAiStream(t2.clientId, { queryStatus: 1 });
      try {
        var o2 = yield this.core.sendCmd("v2AIStreamQuery", { tag: t2 });
        this.model.setAiStream(t2.clientId, { queryStatus: 2 });
        var a2 = o2.content.datas;
        if (!(a2 && a2.length > 0))
          return;
        a2.forEach((t3) => {
          var o3 = t3.clientId, a3 = this.model.getAiStream(o3);
          if (a3 && (!a3 || !a3.isComplete) && t3.content && t3.content.lastChunk) {
            var m2 = t3.content.lastChunk;
            this.model.upsertAiStreamChunks(o3, m2.index, m2.content), 0 === m2.index && t3.aiRAGs && this.model.setAiStream(o3, { aiRAGs: t3.aiRAGs }), this.logger.log(`V2AI::queryAiStream requestId:${o3};index:${m2.index};cacheChunkLength:${a3.chunks.length};chunkTime:${m2.chunkTime}.`);
          }
        });
      } catch (o3) {
        this.logger.warn(`V2AI::queryAiStream requestId:${t2.clientId};error:`, o3), this.model.setAiStream(t2.clientId, { queryStatus: 2 });
      }
    });
  }
};
var ds = { "18_1": "v2SignallingCreateRoom", "18_2": "v2SignallingDelayRoom", "18_3": "v2SignallingCloseRoom", "18_4": "v2SignallingJoinRoom", "18_5": "v2SignallingLeaveRoom", "18_6": "v2SignallingInvite", "18_7": "v2SignallingCancelInvite", "18_16": "v2SignallingCall", "18_17": "v2SignallingCallSetup", "18_8": "v2SignallingRejectInvite", "18_9": "v2SignallingAcceptInvite", "18_10": "v2SignallingSendControl", "15_11": "v2SignallingOnlineEvent", "15_12": "v2SignallingMultiClientEvent", "15_13": "v2SignallingOfflineEvent", "15_14": "v2SignallingSyncChannels", "18_15": "v2SignallingGetRoomInfo" };
var ls = "V2NIMSignallingService";
var ps = { accountId: 1, uid: { id: 2, retType: "number" }, joinTime: { id: 3, retType: "number" }, expireTime: { id: 4, retType: "number" }, deviceId: 5 };
var ms = { channelType: { id: 1, retType: "number", retAccess: "channelInfo.channelType" }, channelName: { id: 2, retAccess: "channelInfo.channelName" }, channelId: { id: 3, retAccess: "channelInfo.channelId" }, createTime: { id: 4, retType: "number", retAccess: "channelInfo.createTime" }, expireTime: { id: 5, retType: "number", retAccess: "channelInfo.expireTime" }, creatorAccountId: { id: 6, retAccess: "channelInfo.creatorAccountId" }, channelExtension: { id: 7, retAccess: "channelInfo.channelExtension" }, channelValid: { id: 8, retDef: true, retAccess: "channelInfo.channelValid", retConverter: (t2) => 1 !== parseInt(t2) }, fromAccid: 10, toAccid: 11, requestId: 12, pushEnabled: { id: 13, access: "pushConfig.pushEnabled", converter: boolToInt, retType: "boolean" }, pushTitle: { id: 14, access: "pushConfig.pushTitle" }, pushContent: { id: 15, access: "pushConfig.pushContent" }, pushPayload: { id: 16, access: "pushConfig.pushPayload" }, unreadEnabled: { id: 17, access: "signallingConfig.unreadEnabled", converter: boolToInt, retType: "boolean", def: 1 }, members: { id: 18, retAccess: "members", retConverter: (t2) => {
  try {
    return JSON.parse(t2).map((t3) => deserialize(t3, invertSerializeItem(ps)));
  } catch (t3) {
    return;
  }
} }, attach: { id: 19, retConverter: stringToJSONObject }, serverExtension: { id: 20, retDef: "" }, offlineEnabled: { id: 21, converter: boolToInt, retType: "boolean", def: 1 }, msgId: 22, selfUid: { id: 23, retType: "number", access: "signallingConfig.selfUid" }, time: { id: 24, retType: "number" }, rtcChannelName: { id: 25, access: "rtcConfig.rtcChannelName" }, rtcTokenTtl: { id: 26, retType: "number", access: "rtcConfig.rtcTokenTtl", retAccess: "rtcInfo.rtcTokenTtl" }, rtcToken: { id: 27, retAccess: "rtcInfo.rtcToken" }, rtcParams: { id: 28, access: "rtcConfig.rtcParams", retAccess: "rtcInfo.rtcParams" }, callStatus: { id: 30, retType: "number" } };
var us = { v2SignallingCall: { sid: 18, cid: 16, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingCallSetup: { sid: 18, cid: 17, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingCreateRoom: { sid: 18, cid: 1, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingDelayRoom: { sid: 18, cid: 2, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingCloseRoom: { sid: 18, cid: 3, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingJoinRoom: { sid: 18, cid: 4, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingLeaveRoom: { sid: 18, cid: 5, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingInvite: { sid: 18, cid: 6, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingCancelInvite: { sid: 18, cid: 7, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingRejectInvite: { sid: 18, cid: 8, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }] }, v2SignallingAcceptInvite: { sid: 18, cid: 9, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }] }, v2SignallingSendControl: { sid: 18, cid: 10, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }] }, v2SignallingOnlineEvent: { sid: 15, cid: 11, service: ls, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingMultiClientEvent: { sid: 15, cid: 12, service: ls, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingOfflineEvent: { sid: 15, cid: 13, service: ls, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingSyncChannels: { sid: 15, cid: 14, service: ls, response: [{ type: "PropertyArray", name: "datas", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingGetRoomInfo: { sid: 18, cid: 15, service: ls, params: [{ type: "Property", name: "tag", reflectMapper: ms }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ms) }] }, v2SignallingBatchMarkRead: { sid: 4, cid: 5, hasPacketResponse: false, service: ls, params: [{ type: "Byte", name: "sid" }, { type: "Byte", name: "cid" }, { type: "LongArray", name: "ids" }] } };
var hs = { calleeAccountId: { type: "string", required: true, allowEmpty: false }, requestId: { type: "string", required: true, allowEmpty: false }, channelType: { type: "enum", values: [1, 3, 2] }, channelName: { type: "string", required: false, allowEmpty: true }, channelExtension: { type: "string", required: false, allowEmpty: true }, serverExtension: { type: "string", required: false, allowEmpty: true }, signallingConfig: { type: "object", required: false, rules: { offlineEnabled: { type: "boolean", required: false }, unreadEnabled: { type: "boolean", required: false }, selfUid: { type: "number", required: false } } }, pushConfig: { type: "object", required: false, rules: { pushEnabled: { type: "boolean", required: false }, pushTitle: { type: "string", required: false, allowEmpty: true }, pushContent: { type: "string", required: false, allowEmpty: true }, pushPayload: { type: "string", required: false, allowEmpty: true } } }, rtcConfig: { type: "object", required: false, rules: { rtcChannelName: { type: "string", required: false, allowEmpty: true }, rtcTokenTtl: { type: "number", required: false }, rtcParams: { type: "string", required: false, allowEmpty: true } } } };
var gs = { channelId: { type: "string", required: true, allowEmpty: false }, callerAccountId: { type: "string", required: true, allowEmpty: false }, requestId: { type: "string", required: true, allowEmpty: false }, serverExtension: { type: "string", required: false, allowEmpty: true }, signallingConfig: { type: "object", required: false, rules: { offlineEnabled: { type: "boolean", required: false }, unreadEnabled: { type: "boolean", required: false }, selfUid: { type: "number", required: false } } }, rtcConfig: { type: "object", required: false, rules: { rtcChannelName: { type: "string", required: false, allowEmpty: true }, rtcTokenTtl: { type: "number", required: false }, rtcParams: { type: "string", required: false, allowEmpty: true } } } };
var vs = { channelType: { type: "enum", values: [1, 3, 2] }, channelName: { type: "string", required: false, allowEmpty: true }, channelExtension: { type: "string", required: false, allowEmpty: true } };
var fs = { channelId: { type: "string", required: true, allowEmpty: false }, offlineEnabled: { type: "boolean", required: false }, serverExtension: { type: "string", required: false, allowEmpty: true } };
var Is = { channelId: { type: "string", required: true, allowEmpty: false }, serverExtension: { type: "string", required: false, allowEmpty: true }, signallingConfig: { type: "object", required: false, rules: { offlineEnabled: { type: "boolean", required: false }, unreadEnabled: { type: "boolean", required: false }, selfUid: { type: "number", required: false } } }, rtcConfig: { type: "object", required: false, rules: { rtcChannelName: { type: "string", required: false, allowEmpty: true }, rtcTokenTtl: { type: "number", required: false }, rtcParams: { type: "string", required: false, allowEmpty: true } } } };
var ys = { channelId: { type: "string", required: true, allowEmpty: false }, offlineEnabled: { type: "boolean", required: false }, serverExtension: { type: "string", required: false, allowEmpty: true } };
var Ms = { channelId: { type: "string", required: true, allowEmpty: false }, inviteeAccountId: { type: "string", required: true, allowEmpty: false }, requestId: { type: "string", required: true, allowEmpty: false }, serverExtension: { type: "string", required: false, allowEmpty: true }, signallingConfig: { type: "object", required: false, rules: { offlineEnabled: { type: "boolean", required: false }, unreadEnabled: { type: "boolean", required: false }, selfUid: { type: "number", required: false } } }, pushConfig: { type: "object", required: false, rules: { pushEnabled: { type: "boolean", required: false }, pushTitle: { type: "string", required: false, allowEmpty: true }, pushContent: { type: "string", required: false, allowEmpty: true }, pushPayload: { type: "string", required: false, allowEmpty: true } } } };
var _s = { channelId: { type: "string", required: true, allowEmpty: false }, inviteeAccountId: { type: "string", required: true, allowEmpty: false }, requestId: { type: "string", required: true, allowEmpty: false }, serverExtension: { type: "string", required: false, allowEmpty: true }, offlineEnabled: { type: "boolean", required: false }, pushConfig: { type: "object", required: false, rules: { pushEnabled: { type: "boolean", required: false }, pushTitle: { type: "string", required: false, allowEmpty: true }, pushContent: { type: "string", required: false, allowEmpty: true }, pushPayload: { type: "string", required: false, allowEmpty: true } } } };
var Es = { channelId: { type: "string", allowEmpty: false }, receiverAccountId: { type: "string", required: false }, serverExtension: { type: "string", required: false, allowEmpty: true } };
var Ss = { channelId: { type: "string", allowEmpty: false }, inviterAccountId: { type: "string", allowEmpty: false }, requestId: { type: "string", allowEmpty: false }, serverExtension: { type: "string", required: false, allowEmpty: true }, offlineEnabled: { type: "boolean", required: false } };
var Ts = Ss;
function formatSignalingEvent(t2) {
  var o2, a2 = t2.attach, m2 = { eventType: a2.type, channelInfo: t2.channelInfo, operatorAccountId: t2.fromAccid, time: t2.time, serverExtension: t2.serverExtension, requestId: t2.requestId, pushConfig: t2.pushConfig, unreadEnabled: null === (o2 = t2.signallingConfig) || void 0 === o2 ? void 0 : o2.unreadEnabled }, { fromAccid: u2, toAccid: h2 } = t2;
  switch (m2.eventType) {
    case 1:
      break;
    case 2:
      m2.member = { accountId: a2.member[1], uid: Number(a2.member[2]), joinTime: Number(a2.member[3]), expireTime: Number(a2.member[4]), deviceId: a2.member[5] };
      break;
    case 3:
    case 4:
      m2.operatorAccountId = u2, m2.inviteeAccountId = h2, m2.inviterAccountId = u2;
      break;
    case 5:
    case 6:
      m2.operatorAccountId = u2, m2.inviterAccountId = h2, m2.inviteeAccountId = u2;
  }
  return JSON.parse(JSON.stringify(m2));
}
function cloneDeep(t2, o2) {
  if ((o2 = /* @__PURE__ */ new Map()).get(t2))
    return t2;
  if (t2 instanceof RegExp)
    return new RegExp(t2);
  if (t2 instanceof Date)
    return new Date(t2.getTime());
  if (Array.isArray(t2))
    return o2.set(t2, true), t2.map((t3) => cloneDeep(t3, o2));
  if ("object" == typeof t2 && null !== t2) {
    o2.set(t2, true);
    var a2 = {};
    return Object.keys(t2).forEach((m2) => {
      a2[m2] = cloneDeep(t2[m2], o2);
    }), a2;
  }
  return t2;
}
var V2NIMSignallingServiceImpl = class extends V2Service {
  constructor(t2, o2 = {}) {
    super("V2NIMSignallingService", t2), this.config = { compatibleWithV1: true }, this.channels = {}, this.timer = 0, this.pollingInterval = 12e4, "v2" === this.core.options.apiVersion && (registerParser({ cmdMap: ds, cmdConfig: us }), this.setOptions(o2));
  }
  reset() {
    this.timer = 0, this.channels = {};
  }
  setOptions(t2) {
    var o2;
    (null === (o2 = this.core.signaling) || void 0 === o2 ? void 0 : o2.name) ? this.config.compatibleWithV1 = true : this.config.compatibleWithV1 = false, this.config = Object.assign(this.config, t2);
  }
  emit(t2, ...o2) {
    var a2 = `${this.name}::emit ${t2.toString()}`;
    return this.logger.log(`${a2}`, ...o2), super.emit(t2, ...o2);
  }
  call(t2) {
    var o2;
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate(hs, t2, "", true), t2.calleeAccountId === this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "You cannot call yourself" } });
      var a2 = void 0 !== t2.pushConfig && (void 0 !== t2.pushConfig.pushEnabled && t2.pushConfig.pushEnabled), m2 = (yield this.core.sendCmd("v2SignallingCall", { tag: Object.assign(Object.assign({}, t2), { toAccid: t2.calleeAccountId, offlineEnabled: void 0 === (null === (o2 = t2.signallingConfig) || void 0 === o2 ? void 0 : o2.offlineEnabled) || t2.signallingConfig.offlineEnabled, pushConfig: Object.assign(Object.assign({}, t2.pushConfig || {}), { pushEnabled: a2 }) }) })).content.data;
      return this.channels[m2.channelInfo.channelId] = cloneDeep(m2.channelInfo), this.timer || (this.timer = this.core.timerManager.addTimer(this.aotoDelay.bind(this), this.pollingInterval, -1)), { callStatus: m2.callStatus, rtcInfo: m2.rtcInfo, roomInfo: { channelInfo: m2.channelInfo, members: m2.members } };
    });
  }
  callSetup(t2) {
    var o2;
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate(gs, t2, "", true), t2.callerAccountId === this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "callSetup: cannot be yourself" } });
      var a2 = (yield this.core.sendCmd("v2SignallingCallSetup", { tag: Object.assign(Object.assign({}, t2), { toAccid: t2.callerAccountId, offlineEnabled: void 0 === (null === (o2 = t2.signallingConfig) || void 0 === o2 ? void 0 : o2.offlineEnabled) || t2.signallingConfig.offlineEnabled }) })).content.data;
      return this.channels[a2.channelInfo.channelId] = cloneDeep(a2.channelInfo), this.timer || (this.timer = this.core.timerManager.addTimer(this.aotoDelay.bind(this), this.pollingInterval, -1)), { callStatus: a2.callStatus, rtcInfo: a2.rtcInfo, roomInfo: { channelInfo: a2.channelInfo, members: a2.members } };
    });
  }
  createRoom(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), validate(vs, { channelType: t2, channelName: o2, channelExtension: a2 }, "", true), (yield this.core.sendCmd("v2SignallingCreateRoom", { tag: { channelType: t2, channelName: o2, channelExtension: a2 } })).content.data.channelInfo;
    });
  }
  delayRoom(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2();
      var o2 = yield this.core.sendCmd("v2SignallingDelayRoom", { tag: { channelId: t2 } });
      return { channelInfo: o2.content.data.channelInfo, members: o2.content.data.members };
    });
  }
  closeRoom(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(fs, { channelId: t2, offlineEnabled: o2, serverExtension: a2 }, "", true), yield this.core.sendCmd("v2SignallingCloseRoom", { tag: { channelId: t2, offlineEnabled: void 0 !== o2 && o2, serverExtension: a2 } });
    });
  }
  joinRoom(t2) {
    var o2;
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(Is, t2, "", true);
      var a2 = (yield this.core.sendCmd("v2SignallingJoinRoom", { tag: Object.assign(Object.assign({}, t2), { offlineEnabled: void 0 === (null === (o2 = t2.signallingConfig) || void 0 === o2 ? void 0 : o2.offlineEnabled) || t2.signallingConfig.offlineEnabled }) })).content.data;
      this.channels[a2.channelInfo.channelId] = cloneDeep(a2.channelInfo), this.timer || (this.timer = this.core.timerManager.addTimer(this.aotoDelay.bind(this), this.pollingInterval, -1));
      var { channelInfo: m2, members: u2, rtcInfo: h2 } = a2;
      return { roomInfo: { channelInfo: m2, members: u2 }, rtcInfo: h2 };
    });
  }
  leaveRoom(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkV2(), validate(ys, { channelId: t2, offlineEnabled: o2, serverExtension: a2 }, "", true), yield this.core.sendCmd("v2SignallingLeaveRoom", { tag: { channelId: t2, offlineEnabled: void 0 !== o2 && o2, serverExtension: a2 } }), delete this.channels[t2];
    });
  }
  invite(t2) {
    var o2;
    return __awaiter(this, void 0, void 0, function* () {
      if (this.checkV2(), validate(Ms, t2, "", true), t2.inviteeAccountId === this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "invite: cannot be yourself" } });
      var a2 = void 0 !== t2.pushConfig && (void 0 !== t2.pushConfig.pushEnabled && t2.pushConfig.pushEnabled);
      return (yield this.core.sendCmd("v2SignallingInvite", { tag: Object.assign(Object.assign({}, t2), { toAccid: t2.inviteeAccountId, offlineEnabled: void 0 === (null === (o2 = t2.signallingConfig) || void 0 === o2 ? void 0 : o2.offlineEnabled) || t2.signallingConfig.offlineEnabled, pushConfig: Object.assign(Object.assign({}, t2.pushConfig || {}), { pushEnabled: a2 }) }) })).content.data;
    });
  }
  cancelInvite(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkV2(), validate(_s, t2, "", true), (yield this.core.sendCmd("v2SignallingCancelInvite", { tag: Object.assign(Object.assign({}, t2), { toAccid: t2.inviteeAccountId }) })).content.data;
    });
  }
  rejectInvite(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate(Ss, t2, "", true), t2.inviterAccountId === this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "rejectInvite: cannot be yourself" } });
      yield this.core.sendCmd("v2SignallingRejectInvite", { tag: Object.assign(Object.assign({}, t2), { toAccid: t2.inviterAccountId }) });
    });
  }
  acceptInvite(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate(Ts, t2, "", true), t2.inviterAccountId === this.core.account)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: "acceptInvite: cannot be yourself" } });
      yield this.core.sendCmd("v2SignallingAcceptInvite", { tag: Object.assign(Object.assign({}, t2), { toAccid: t2.inviterAccountId }) });
    });
  }
  sendControl(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      validate(Es, { channelId: t2, receiverAccountId: o2, serverExtension: a2 }, "", true), yield this.core.sendCmd("v2SignallingSendControl", { tag: { channelId: t2, toAccid: o2, serverExtension: a2 } });
    });
  }
  getRoomInfoByChannelName(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      validate({ channelName: { type: "string", allowEmpty: false } }, { channelName: t2 }, "", true);
      var o2 = yield this.core.sendCmd("v2SignallingGetRoomInfo", { tag: { channelName: t2 } }), { members: a2, channelInfo: m2 } = o2.content.data;
      return { channelInfo: m2, members: a2 || [] };
    });
  }
  aotoDelay() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2 = Object.keys(this.channels);
      if (0 === t2.length)
        return this.timer && this.core.timerManager.deleteTimer(this.timer), void (this.timer = 0);
      this.logger.log("v2Signlling:autoDelay", t2);
      for (var o2 = 0; o2 < t2.length; o2++) {
        var a2 = t2[o2];
        try {
          var m2 = yield this.core.sendCmd("v2SignallingDelayRoom", { tag: { channelId: a2 } });
          this.channels[a2] = m2.content.data.channelInfo;
        } catch (t3) {
          this.logger.warn(`signling:autoDelay ${a2} failed`, t3), delete this.channels[a2];
        }
      }
    });
  }
  v2SignallingOnlineEventHandler(t2) {
    var o2 = fillIdServer(t2, t2.content.data, "msgId", "0"), a2 = o2.msgId;
    !this.config.compatibleWithV1 && a2 && parseInt(a2) && this.core.sendCmd("v2SignallingBatchMarkRead", { sid: 15, cid: 11, ids: [a2] }), this.handleLeaveRoom(o2), this.emit("onOnlineEvent", formatSignalingEvent(o2));
  }
  v2SignallingMultiClientEventHandler(t2) {
    this.handleLeaveRoom(t2.content.data), this.emit("onMultiClientEvent", formatSignalingEvent(t2.content.data));
  }
  v2SignallingOfflineEventHandler(t2) {
    if (t2.content.datas && t2.content.datas.length > 0) {
      if (!this.config.compatibleWithV1) {
        var o2 = t2.content.datas.map((t3) => t3.msgId);
        o2.length > 0 && this.core.sendCmd("v2SignallingBatchMarkRead", { sid: 15, cid: 11, ids: o2 });
      }
      var a2 = t2.content.datas.map((t3) => (this.handleLeaveRoom(t3), formatSignalingEvent(t3)));
      this.emit("onOfflineEvent", a2);
    }
  }
  v2SignallingSyncChannelsHandler(t2) {
    if (this.timer = 0, this.channels = {}, t2.content.datas && t2.content.datas.length > 0) {
      var o2 = t2.content.datas;
      o2.forEach((t3) => {
        var o3 = t3.channelInfo.channelId;
        this.channels[o3] = cloneDeep(t3.channelInfo);
      }), this.timer || (this.timer = this.core.timerManager.addTimer(this.aotoDelay.bind(this), this.pollingInterval, -1)), this.emit("onSyncRoomInfoList", o2);
    }
  }
  handleLeaveRoom(t2) {
    switch (t2.attach.type) {
      case 1:
      case 7:
      case 9:
        delete this.channels[t2.channelInfo.channelId];
    }
  }
};
var Cs;
var Ns = { "19_1": "v2PublishEvent", "14_2": "v2OnUserStatusChange", "19_3": "v2SubscribeUserStatus", "19_4": "v2UnsubscribeUserStatus", "19_5": "v2UnsubscribeAllUserStatus", "19_6": "v2QuerySubscribeEvent", "19_7": "v2QueryAllSubscribeEvent", "14_9": "v2OnMultiUserStatusChange" };
var As = "V2NIMSubscriptionService";
var Os = { eventType: { id: 1, retType: "number" }, statusType: { id: 2, retType: "number" }, uniqueId: 3, extension: 4, duration: { id: 5, retType: "number" }, onlineOnly: { id: 6, retType: "boolean", converter: (t2) => t2 ? 1 : 2 }, multiSync: { id: 7, retType: "boolean", converter: boolToInt }, publishTime: { id: 10, retType: "number" }, serverId: 11, clientType: { id: 12, retType: "number" }, serverExtension: 13, extensionReceived: 14, accountId: 103 };
var Rs = { eventType: { id: 1, retType: "number" }, duration: { id: 2, retType: "number" }, immediateSync: { id: 3, retType: "number", converter: boolToInt }, accountId: 102, subscribeTime: { id: 105, retType: "number" } };
var bs = { v2PublishEvent: { sid: 19, cid: 1, service: As, params: [{ type: "Property", name: "tag", reflectMapper: Os }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Os) }] }, v2OnUserStatusChange: { sid: 14, cid: 2, service: As, response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(Os) }] }, v2SubscribeUserStatus: { sid: 19, cid: 3, service: As, params: [{ type: "Property", name: "tag", reflectMapper: Rs }, { type: "StrArray", name: "accountIds" }], response: [{ type: "StrArray", name: "failedList" }] }, v2UnsubscribeUserStatus: { sid: 19, cid: 4, service: As, params: [{ type: "Property", name: "tag", reflectMapper: Rs }, { type: "StrArray", name: "accountIds" }], response: [{ type: "StrArray", name: "failedList" }] }, v2UnsubscribeAllUserStatus: { sid: 19, cid: 5, service: As, params: [{ type: "Property", name: "tag", reflectMapper: Rs }] }, v2QuerySubscribeEvent: { sid: 19, cid: 6, service: As, params: [{ type: "Property", name: "tag", reflectMapper: Rs }, { type: "StrArray", name: "accountIds" }], response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(Rs) }] }, v2QueryAllSubscribeEvent: { sid: 19, cid: 7, service: As, params: [{ type: "Property", name: "tag", reflectMapper: Rs }], response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(Rs) }] }, v2OnMultiUserStatusChange: { sid: 14, cid: 9, service: As, response: [{ type: "PropertyArray", name: "data", reflectMapper: invertSerializeItem(Os) }] } };
var Vs = { accountIds: { type: "array", required: true, itemType: "string", min: 1, max: 100 }, duration: { type: "number", required: false, min: 60, max: 2592e3 }, immediateSync: { type: "boolean", required: false } };
var ks = { accountIds: { type: "array", required: false, itemType: "string", max: 100 } };
var Ps = { statusType: { type: "number", required: true, min: 1e4, max: 2147483647 }, duration: { type: "number", required: false, min: 60, max: 604800 }, extension: { type: "jsonstr", required: false }, onlineOnly: { type: "boolean", required: false }, multiSync: { type: "boolean", required: false } };
var V2NIMSubscriptionServiceImpl = class extends V2Service {
  constructor(t2) {
    super("V2NIMSubscriptionService", t2), "v2" === this.core.options.apiVersion && registerParser({ cmdMap: Ns, cmdConfig: bs });
  }
  emit(t2, ...o2) {
    var a2 = `${this.name}::emit ${t2.toString()}`;
    return this.logger.log(`${a2}`, ...o2), super.emit(t2, ...o2);
  }
  subscribeUserStatus(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkLogin(), this.checkV2(), validate(Vs, t2, "", true), (yield this.core.sendCmd("v2SubscribeUserStatus", { tag: { eventType: 1, duration: t2.duration || 60, immediateSync: void 0 !== t2.immediateSync && t2.immediateSync }, accountIds: t2.accountIds })).content.failedList;
    });
  }
  unsubscribeUserStatus(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkLogin(), this.checkV2(), validate(ks, t2, "", true);
      var o2 = [];
      t2.accountIds.length > 0 ? o2 = (yield this.core.sendCmd("v2UnsubscribeUserStatus", { tag: { eventType: 1 }, accountIds: t2.accountIds })).content.failedList : (yield this.core.sendCmd("v2UnsubscribeAllUserStatus", { tag: { eventType: 1 } }), o2 = []);
      return o2;
    });
  }
  publishCustomUserStatus(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.checkLogin(), this.checkV2(), validate(Ps, t2, "", true), (yield this.core.sendCmd("v2PublishEvent", { tag: Object.assign(Object.assign({}, t2), { eventType: 1, uniqueId: Ve(), duration: t2.duration || 60, onlineOnly: void 0 === t2.onlineOnly || t2.onlineOnly, multiSync: void 0 !== t2.multiSync && t2.multiSync }) })).content.data;
    });
  }
  queryUserStatusSubscriptions(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      this.checkLogin(), this.checkV2(), validate({ accountIds: { type: "array", required: true, itemType: "string", max: 3e3 } }, { accountIds: t2 }, "", true);
      var o2 = [];
      if (t2.length > 0)
        for (var a2 = 0; a2 < t2.length; a2 += 100) {
          var m2 = yield this.core.sendCmd("v2QuerySubscribeEvent", { tag: { eventType: 1 }, accountIds: t2.slice(a2, a2 + 100) });
          o2 = o2.concat(m2.content.data.map((t3) => ({ accountId: t3.accountId, subscribeTime: t3.subscribeTime, duration: t3.duration })));
        }
      else {
        var u2 = yield this.core.sendCmd("v2QueryAllSubscribeEvent", { tag: { eventType: 1 } });
        o2 = o2.concat(u2.content.data.map((t3) => ({ accountId: t3.accountId, subscribeTime: t3.subscribeTime, duration: t3.duration })));
      }
      return o2;
    });
  }
  v2OnUserStatusChangeHandler(t2) {
    var o2 = t2.content.data, { eventType: a2, extensionReceived: m2 } = o2, u2 = __rest(o2, ["eventType", "extensionReceived"]);
    1 === a2 ? this.emit("onUserStatusChanged", [Object.assign(Object.assign({}, u2), { extension: m2 })]) : this.logger.log("v2OnUserStatusChangeHandler eventType = ", a2, "msgEvent = ", o2);
  }
  v2OnMultiUserStatusChangeHandler(t2) {
    var o2 = t2.content.data.filter((t3) => 1 === t3.eventType).map((t3) => {
      var { eventType: o3, extensionReceived: a2 } = t3, m2 = __rest(t3, ["eventType", "extensionReceived"]);
      return Object.assign(Object.assign({}, m2), { extension: a2 });
    });
    o2.length > 0 && this.emit("onUserStatusChanged", o2);
  }
};
!function(t2) {
  t2[t2.V2NIM_PROXY_REQUEST_METHOD_GET = 1] = "V2NIM_PROXY_REQUEST_METHOD_GET", t2[t2.V2NIM_PROXY_REQUEST_METHOD_POST = 2] = "V2NIM_PROXY_REQUEST_METHOD_POST", t2[t2.V2NIM_PROXY_REQUEST_METHOD_PUT = 3] = "V2NIM_PROXY_REQUEST_METHOD_PUT", t2[t2.V2NIM_PROXY_REQUEST_METHOD_DELETE = 4] = "V2NIM_PROXY_REQUEST_METHOD_DELETE";
}(Cs || (Cs = {}));
var Ls = { "22_1": "v2ProxyRequest", "22_2": "v2ProxyOnRequest" };
var ws = { zone: 1, path: 2, method: 3, header: 4, body: 5 };
var Ds = { v2ProxyRequest: { sid: 22, cid: 1, service: "V2NIMPassthroughService", params: [{ type: "Property", name: "tag", reflectMapper: ws }], response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem(ws) }] }, v2ProxyOnRequest: { sid: 22, cid: 2, service: "V2NIMPassthroughService", response: [{ type: "Property", name: "data", reflectMapper: invertSerializeItem({ fromAccountId: 1, body: 2, time: { id: 3, retType: "number" } }) }] } };
var Us = { path: { type: "string", allowEmpty: false }, zone: { type: "string", required: false }, method: { type: "enum", values: [Cs.V2NIM_PROXY_REQUEST_METHOD_DELETE, Cs.V2NIM_PROXY_REQUEST_METHOD_GET, Cs.V2NIM_PROXY_REQUEST_METHOD_POST, Cs.V2NIM_PROXY_REQUEST_METHOD_PUT], required: false }, header: { type: "jsonstr", required: false }, body: { type: "string", required: false } };
var V2NIMPassthroughServiceImpl = class extends V2Service {
  constructor(t2) {
    super("V2NIMPassthroughService", t2), registerParser({ cmdMap: Ls, cmdConfig: Ds });
  }
  emit(t2, ...o2) {
    var a2 = `${this.name}::emit ${t2.toString()}`;
    return this.logger.log(`${a2}`, ...o2), super.emit(t2, ...o2);
  }
  httpProxy(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate(Us, t2, "", true), t2.method === Cs.V2NIM_PROXY_REQUEST_METHOD_GET && t2.body || t2.method === Cs.V2NIM_PROXY_REQUEST_METHOD_POST && !t2.body || t2.method === Cs.V2NIM_PROXY_REQUEST_METHOD_PUT && !t2.body)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INVALID_PARAMETER, detail: { reason: `method ${t2.method}, incorrect body` } });
      return (yield this.core.sendCmd("v2ProxyRequest", { tag: t2 })).content.data;
    });
  }
  v2ProxyOnRequestHandler(t2) {
    var { data: o2 } = t2.content;
    this.emit("onProxyNotify", o2);
  }
};
var xs = NIM$1;
xs.registerService(class V2NIMLoginServiceImpl extends V2Service {
  constructor(t2, o2 = {}) {
    var a2;
    super("V2NIMLoginService", t2), this.account = "", this.previousLoginAccount = "", this.token = "", this.deviceId = "", this.clientSession = "", this.processId = "", this.kickedDetail = null, this.binaryWebsocket = true, this.core._registerDep(MiscService, "misc"), registerParser({ cmdMap: ze, cmdConfig: We }), "v2" === t2.options.apiVersion && (registerParser({ cmdMap: Ye, cmdConfig: Je }), this.core.auth = this), this.previousLoginManager = new PromiseManager(), this.doLoginStepsManager = new PromiseManager(), this.loginTimerManager = new TimerManager(), this.loginOption = Object.assign({}, ht), this.config = { lbsUrls: ut, linkUrl: "weblink.netease.im:443", linkSSL: true }, this.setOptions(o2), t2.V2NIMLoginService = this, false !== this.core.options.binaryWebsocket && "function" == typeof Uint8Array ? (this.binaryWebsocket = true, a2 = new V2BinaryClientSocket(this.core)) : (this.binaryWebsocket = false, a2 = new V2ClientSocket(this.core)), this.clientSocket = a2, "v2" === this.core.options.apiVersion && (this.core.clientSocket = a2), this.lifeCycle = new V2NIMLoginLifeCycle(t2), this.reconnect = new V2NIMLoginReconnect(t2), this.lbs = new V2NIMLoginLbs(t2), this.authenticator = new V2NIMLoginAuthenticator(t2), this.dataSync = new V2NIMLoginDataSync(t2);
  }
  get hasSettingService() {
    var t2;
    return !!(null === (t2 = this.core.V2NIMSettingService) || void 0 === t2 ? void 0 : t2.name);
  }
  setOptions(t2) {
    var o2, a2, m2;
    validate({ lbsUrls: { type: "array", itemType: "string", min: 1, required: false }, linkUrl: { type: "string", allowEmpty: false, required: false } }, t2, "", true), this.config = assignOptions(this.config, t2), null === (a2 = null === (o2 = this.core.clientSocket) || void 0 === o2 ? void 0 : o2.setLinkSSL) || void 0 === a2 || a2.call(o2, null === (m2 = this.config.linkSSL) || void 0 === m2 || m2);
    var u2 = "", h2 = "";
    this.config.isFixedDeviceId ? (u2 = Ae.localStorage.getItem("__NIM_DEVC_ID__") || Ve(), h2 = Ae.localStorage.getItem("__NIM_CLIENT_SESSION_ID__") || Ve(), Ae.localStorage.setItem("__NIM_DEVC_ID__", u2), Ae.localStorage.setItem("__NIM_CLIENT_SESSION_ID__", h2)) : (u2 = Ve(), h2 = Ve()), this.deviceId = u2, this.clientSession = h2, this.core.reporter.setConfig({ common: { dev_id: u2 } });
  }
  reset() {
    this.account = "", this.token = "", this.processId = "", this.lbs.reset(), this.reconnect.destroy(), this.authenticator.reset(), this.authenticator.clearLastLoginClient(), this.dataSync.reset();
  }
  login(t2, o2, a2 = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      this._checkApiVersion();
      var m2 = Ae.getSystemInfo() || {}, u2 = m2.os ? m2.os.toLowerCase() : "";
      if ("React Native" === Ae.platform && "android" === u2 && this.hasSettingService && get(this.core.V2NIMSettingService, "push.offlinePushPlugin"))
        try {
          this.deviceInfo = yield this.core.V2NIMSettingService.push.getRNDeviceInfo();
        } catch (t3) {
          this.logger.error(t3);
        }
      if ("string" != typeof t2 || "" === t2.trim())
        throw new ValidateErrorV2({ detail: { reason: "Account must be string" } });
      if (validate(mt, a2, "", true), 0 === (a2 = assignOptions(ht, a2)).authType && !o2)
        throw new ValidateErrorV2({ detail: { reason: "When authType is 0, token cannot be empty" } });
      if ("" !== this.previousLoginAccount && this.previousLoginAccount !== t2 && this.core._clearModuleData(), 0 === this.getLoginStatus())
        this.logger.log(`V2NIMLoginService::login:allowLogin:${t2}`, a2);
      else {
        if (1 === this.getLoginStatus())
          return this.smoothForLogined(t2, o2, a2);
        if (2 === this.getLoginStatus())
          return this.smoothForLogining(t2, o2, a2);
      }
      this.account = t2, this.previousLoginAccount = t2, this.token = o2, this.processId = Ve(), this.loginOption = assignOptions(ht, a2), this.kickedDetail = null, this.loginTimerManager.destroy(), this.loginTimerManager.addTimer(() => {
        var t3 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_TIMEOUT, detail: { reason: "Login API timeout" } });
        this.doLoginStepsManager.clear(t3), this.previousLoginManager.clear(t3), this.originLoginPromise = void 0, this.lifeCycle.processEvent("exited", t3);
      }, this.loginOption.timeout > 0 ? this.loginOption.timeout : 6e4, 1);
      try {
        yield this.multiTryDoLogin(), this.loginTimerManager.destroy();
      } catch (t3) {
        throw this.loginTimerManager.destroy(), t3;
      }
    });
  }
  setAppVisibility() {
    this.logger.warn("V2NIMLoginService::setAppVisibility is deprecated @v10.9.40");
  }
  getChatroomLinkAddress(t2, o2) {
    return __awaiter(this, void 0, void 0, function* () {
      return validate({ roomId: { type: "string", regExp: /^\d+$/, required: true, allowEmpty: false }, miniProgram: { type: "boolean", required: false } }, { roomId: t2, miniProgram: o2 }, "", true), o2 = void 0 === o2 ? pendingIsMiniappEnv() : o2, (yield this.clientSocket.sendCmd("v2GetChatroomLinkAddress", { roomId: t2, miniProgram: o2 })).content.linkAddress;
    });
  }
  multiTryDoLogin(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      for (var o2 = new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INTERNAL, detail: { reason: "loginFailed" } }), a2 = 0; a2 <= this.loginOption.retryCount; a2++) {
        var m2 = `V2NIMLoginService::times of login try: ${a2}`;
        a2 > 0 ? this.logger.warn(m2) : this.logger.log(m2);
        try {
          this.originLoginPromise = t2 || this.doLogin(false), t2 = void 0;
          var u2 = yield this.previousLoginManager.add(this.originLoginPromise);
          return this.core.reporter.reportTraceEnd("login", true), this.doLoginStepsManager.clear(), this.previousLoginManager.clear(), this.originLoginPromise = void 0, u2;
        } catch (t3) {
          if (o2 = t3 || o2, this.logger.error(`V2NIMLoginService::login failed, times of login try: ${a2}, err.code: ${null == o2 ? void 0 : o2.code}, err.message: "${null == o2 ? void 0 : o2.message}"`), o2.code !== Me.V2NIM_ERROR_CODE_CANCELLED && this.core.reporter.reportTraceEnd("login", false), this.reconnect.clearReconnectTimer(), this.checkLoginTerminalCode(o2 && o2.code))
            throw this.lifeCycle.processEvent("exited", o2), o2;
          o2 && 399 === o2.code && this.lbs.reset();
        }
      }
      throw this.lifeCycle.processEvent("exited", o2), o2;
    });
  }
  doLogin(t2) {
    var o2, a2;
    return __awaiter(this, void 0, void 0, function* () {
      var m2 = !!t2 || this.authenticator.checkAutoLogin(this.loginOption.forceMode);
      this.core.reporter.reportTraceCancel("login"), this.core.reporter.reportTraceStart("login", m2 ? { user_id: this.account, action: "auto_login", process_id: this.processId, binary_websocket: this.binaryWebsocket } : { user_id: this.account, action: "manual_login", process_id: this.processId, binary_websocket: this.binaryWebsocket }), this.core.reporter.reportTraceUpdateV2("login", { code: 0, description: JSON.stringify(this.loginOption), operation_type: "conf_init", succeed: true, duration: 0, target: "" }, { asyncParams: Ae.net.getNetworkStatus() });
      var u2 = yield this.doLoginStepsManager.add(this.lbs.getLbsInfos());
      yield this.doLoginStepsManager.add(this.clientSocket.connect(u2, t2));
      var h2 = yield this.doLoginStepsManager.add(this.authenticator.verifyAuthentication(m2));
      if (this.processId = Ve(), this.clientSocket.resetSocketConfig(), this.reconnect.reset(), this.dataSync.reset(), this.lifeCycle.processEvent("loginSucc", void 0, Object.assign(Object.assign({}, h2), { isReconnect: t2 })), this.clientSocket.ping(), this.core.abtest.abtRequest(), "function" == typeof (null === (o2 = this.core.V2NIMClientAntispamUtil) || void 0 === o2 ? void 0 : o2.downloadLocalAntiSpamVocabs) && this.core.V2NIMClientAntispamUtil.downloadLocalAntiSpamVocabs(), "function" == typeof (null === (a2 = this.core.cloudStorage) || void 0 === a2 ? void 0 : a2.init))
        try {
          yield this.core.cloudStorage.init(h2.timestamp);
        } catch (t3) {
          this.logger.warn("doLogin::cloudStorage init error", t3);
        }
      return h2;
    });
  }
  smoothForLogined(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      var m2 = this.checkIsSameLogin(t2, o2, a2);
      return this.logger.warn(`V2NIMLoginService::smoothForLogined:Logined, isSameLogin ${m2}`), m2 ? void 0 : (yield this.logout(), this.login(t2, o2, a2));
    });
  }
  smoothForLogining(t2, o2, a2) {
    return __awaiter(this, void 0, void 0, function* () {
      var m2 = this.checkIsSameLogin(t2, o2, a2);
      if (this.logger.warn(`V2NIMLoginService::smoothForLogining:Logining progress exists, abort the previous login attempt and start next attempt, isSameLogin ${m2}`), this.previousLoginManager.clear(), this.reconnect.reset(), this.account = t2, this.previousLoginAccount = t2, this.token = o2, this.loginOption = assignOptions(this.loginOption, a2), !m2)
        return this.doLoginStepsManager.clear(), this.clientSocket.doDisconnect(et.ACTIVE, "Aborted"), this.reset(), this.lifeCycle.processEvent("logout"), yield Promise.resolve(), this.login(t2, o2, a2);
      if (!this.originLoginPromise)
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_INTERNAL, detail: { reason: "NoPreviousLoginExists" } });
      this.reconnect.reset(), yield Promise.resolve(), yield this.multiTryDoLogin(this.originLoginPromise);
    });
  }
  checkIsSameLogin(t2, o2, a2) {
    return this.account === t2 && this.loginOption.authType === a2.authType && (0 !== a2.authType || this.token === o2);
  }
  logout() {
    return __awaiter(this, void 0, void 0, function* () {
      this._checkApiVersion(), this.doLoginStepsManager.clear(), this.previousLoginManager.clear(), this.loginTimerManager.destroy(), this.originLoginPromise = void 0;
      var t2 = this.getConnectStatus(), o2 = this.getLoginStatus();
      switch (o2) {
        case 1:
          try {
            yield this.clientSocket.sendCmd("v2Logout", void 0, { timeout: 1e3 }), this.clientSocket.doDisconnect(et.ACTIVE, "UserActiveDisconnect"), this.core._clearModuleData(), this.lifeCycle.processEvent("logout");
          } catch (t3) {
            this.logger.error("Instance::disconnect sendCmd:logout error", t3), this.clientSocket.doDisconnect(et.ACTIVE, "UserActiveDisconnect"), this.core._clearModuleData(), this.lifeCycle.processEvent("logout");
          }
          break;
        case 2:
        case 3:
          this.clientSocket.doDisconnect(et.ACTIVE, "UserActiveDisconnect"), this.core._clearModuleData(), this.lifeCycle.processEvent("logout");
          break;
        case 0:
          throw this.core._clearModuleData(), new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_ILLEGAL_STATE, detail: { reason: `Illegal logout. loginStatus ${o2}. connectStatus ${t2}` } });
        default:
          throw this.core._clearModuleData(), new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_ILLEGAL_STATE, detail: { reason: `Illegal logout. illegal status: loginStatus ${o2}. connectStatus ${t2}` } });
      }
    });
  }
  getConnectStatus() {
    return this.lifeCycle.getConnectStatus();
  }
  getLoginStatus() {
    return this.lifeCycle.getLoginStatus();
  }
  getLoginUser() {
    return this.account;
  }
  getLoginClients() {
    return function uniqBy(t2, o2) {
      t2 = t2 || [], o2 = o2 || "";
      for (var a2 = [], m2 = [], u2 = 0; u2 < t2.length; u2++) {
        var h2 = t2[u2][o2];
        -1 === m2.indexOf(h2) && (m2.push(h2), a2.push(t2[u2]));
      }
      return a2;
    }(this.authenticator.loginClients, "clientId").map((t2) => pick(t2, ["type", "os", "timestamp", "customTag", "customClientType", "clientId", "clientIP"]));
  }
  getCurrentLoginClient() {
    var t2;
    if (null === (t2 = this.authenticator.loginClientOfThisConnection) || void 0 === t2 ? void 0 : t2.clientId)
      return pick(this.authenticator.loginClientOfThisConnection, ["type", "os", "timestamp", "customTag", "customClientType", "clientId", "clientIP"]);
  }
  getDataSync() {
    var t2 = this.dataSync.datas;
    return t2 && t2.length > 0 ? t2.map((t3) => ({ type: t3.type, state: t3.state })) : null;
  }
  setReconnectDelayProvider(t2) {
    this.reconnect._setReconnectDelayProvider(t2);
  }
  kickOffline(t2) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._checkApiVersion(), validate({ clientId: { type: "string", allowEmpty: false } }, t2, "", true), 0 === get(yield this.clientSocket.sendCmd("v2KickOffline", { clientIds: [t2.clientId] }), "content.clientIds.length"))
        throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_REQUEST_FAILED });
    });
  }
  getKickedOfflineDetail() {
    return this.kickedDetail;
  }
  checkLoginTerminalCode(t2) {
    return this.authenticator.checkLoginTerminalCode(t2);
  }
  checkIllegalState() {
    if (!this.getLoginUser())
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_ILLEGAL_STATE });
  }
  _checkApiVersion() {
    if ("v2" !== this.core.options.apiVersion)
      throw new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_MISUSE, detail: { reason: 'apiVersion is not "v2"' } });
  }
  v2LoginHandler(t2) {
    if (t2.error)
      throw this.clientSocket.doDisconnect(et.ACTIVE, t2.error), t2.error;
    return t2;
  }
  v2LoginClientChangeHandler(t2) {
    this.authenticator.changeLoginClient(parseInt(t2.content.state), t2.content.datas);
  }
  nimLoginClientChangeHandler(t2) {
    this.authenticator.changeLoginClient(parseInt(t2.content.state), t2.content.datas);
  }
  qchatLoginClientChangeHandler(t2) {
    var o2 = parseInt(t2.content.state);
    o2 = 1 === o2 ? 2 : 3, this.authenticator.changeLoginClient(o2, [t2.content.data]);
  }
  v2BeKickedHandler(t2) {
    if (t2.error)
      this.core.logger.error("v2BeKickedHandler error, ", t2.error);
    else {
      var o2 = function formatBeKickedTag(t3) {
        return format({ reason: { type: "number" }, clientType: { type: "number" }, customClientType: { type: "number" } }, t3);
      }(t2.content);
      this.core.logger.warn("v2Bekicked::", o2), this.kickedDetail = o2, this.clientSocket.doDisconnect(et.KICKED, o2), this.core._clearModuleData(), this.lifeCycle.processEvent("kicked", new V2NIMErrorImpl({ code: Me.V2NIM_ERROR_CODE_DISCONNECT, detail: { reason: "disconnect due to kicked" } }), o2), this.emit("onKickedOffline", o2);
    }
  }
  emit(t2, ...o2) {
    var a2 = `${this.name}::emit ${t2.toString()}`;
    if ("onLoginFailed" === t2 || "onDisconnected" === t2 || "onConnectFailed" === t2) {
      var m2 = o2[0];
      this.logger.log(`${a2}`, m2.toString());
    } else if ("onDataSync" === t2) {
      var u2 = o2[2];
      this.logger.log(`${a2}`, o2[0], o2[1], u2 && u2.toString());
    } else
      this.logger.log(`${a2}`, ...o2);
    return super.emit(t2, ...o2);
  }
}, "V2NIMLoginService"), xs.registerService(class V2NIMSyncServiceImpl extends V2Service {
  constructor(t2) {
    super("V2NIMSyncService", t2), this.teamKey = ["teams", "superTeams", "myTeamMembers", "mySuperTeamMembers"], this.config = {}, this.timetags = {}, "v2" === this.core.options.apiVersion && (this.initEventListeners(), registerParser({ cmdMap: gt, cmdConfig: vt }), this.setListener());
  }
  reset() {
    this.timetags = {};
  }
  setListener() {
    this.core.eventBus.on("V2NIMSync/updateTimetag", (t2) => {
      Object.keys(t2).forEach((o2) => {
        t2[o2] > (this.timetags[o2] || 0) && (this.timetags[o2] = t2[o2]);
      });
    });
  }
  setOptions(t2) {
    var o2 = this.core, a2 = !(!o2.V2NIMConversationService.name && !o2.V2NIMLocalConversationService.name);
    return this.config = Object.assign({ myInfo: !!o2.V2NIMUserService.name, offlineMsgs: !!o2.V2NIMMessageService.name, roamingMsgs: !!o2.V2NIMMessageService.name, relations: !!o2.V2NIMUserService.name, friends: !!o2.V2NIMFriendService.name, friendUsers: !!o2.V2NIMUserService.name, msgReceipts: !!o2.V2NIMMessageService.name, broadcastMsgs: !!o2.V2NIMNotificationService.name, recallMsg: !!o2.V2NIMMessageService.name, sessionAck: a2, superTeamSessionAck: a2, stickTopSessions: a2, superTeamRoamingMsgs: !!o2.V2NIMTeamService.name, deleteSuperTeamMsg: !!o2.V2NIMTeamService.name, deleteSelfMsgs: !!o2.V2NIMMessageService.name, sessionHistoryMsgsDelete: !!o2.V2NIMMessageService.name, avSignal: !!o2.V2NIMSignallingService.name, teams: !!o2.V2NIMTeamService.name, superTeams: !!o2.V2NIMTeamService.name, myTeamMembers: !!o2.V2NIMTeamService.name, mySuperTeamMembers: !!o2.V2NIMTeamService.name, donnop: !!o2.V2NIMSettingService.name, p2pTeamModifyMessage: !!o2.V2NIMMessageService.name, superTeamModifyMessage: !!o2.V2NIMMessageService.name }, t2), this.config;
  }
  doBasicSync() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2 = Object.keys(this.config).filter((t3) => !this.teamKey.includes(t3) && this.config[t3]), o2 = this.genSyncParams(t2);
      this.logger.log("V2Sync:basic", o2);
      var a2 = (yield this.core.clientSocket.sendCmd("v2NIMSync", { tag: o2 })).content.timetag;
      this.setTimetags(a2, t2.filter((t3) => "broadcastMsgs" !== t3)), yield this.delaySyncDone(), yield this.handleImmediate(), this.core.logger.log("sync::basic sync complete in", a2);
    });
  }
  doTeamSync() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2 = this.teamKey.filter((t3) => this.config[t3]);
      if (0 !== t2.length) {
        var o2 = this.genSyncParams(t2);
        this.core.eventBus.emit("V2NIMTeamService/onSyncStarted"), this.logger.log("V2Sync:team", o2);
        var a2 = null;
        try {
          a2 = yield this.core.clientSocket.sendCmd("v2NIMSync", { tag: o2 });
        } catch (t3) {
          throw this.core.eventBus.emit("V2NIMTeamService/onSyncFailed", t3), t3;
        }
        this.core.eventBus.emit("V2NIMTeamService/onSyncFinished");
        var m2 = a2.content.timetag;
        this.setTimetags(m2, this.teamKey), this.core.logger.log("sync::team sync complete in", m2);
      }
    });
  }
  doQchatSync() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2 = yield this.core.clientSocket.sendCmd("v2QChatSync", { tag: { systemNotification: 0 } });
      this.core.logger.log("sync::qchat sync complete in", t2.content.timetag);
    });
  }
  doSync() {
    return __awaiter(this, void 0, void 0, function* () {
      var t2 = get(this.core, "V2NIMLoginService.authenticator.loginClientOfThisConnection.loginType");
      if (void 0 !== t2) {
        if (this.logger.log(`sync::doSync:type ${t2}`), this.core.V2NIMLoginService.dataSync.switchDataSync({ type: 1, state: 2, subType: "mainSync" }), 1 === t2)
          try {
            yield this.doBasicSync(), yield this.doTeamSync();
          } catch (t3) {
            return void this.doSyncComplete(t3);
          }
        else if (2 === t2)
          try {
            yield this.doQchatSync();
          } catch (t3) {
            return void this.doSyncComplete(t3);
          }
        else {
          if (3 !== t2)
            return;
          try {
            yield this.doBasicSync(), yield this.doTeamSync(), yield this.doQchatSync();
          } catch (t3) {
            return void this.doSyncComplete(t3);
          }
        }
        this.doSyncComplete();
      } else
        this.logger.warn("sync::doSync: no loginType, stop sync");
    });
  }
  doSyncComplete(t2) {
    t2 && this.core.logger.log("sync::doSync complete but got error", t2), this.core.V2NIMLoginService.dataSync.switchDataSync({ type: 1, state: 3, error: t2, subType: "mainSync" });
  }
  initEventListeners() {
    this.core.eventBus.on("V2NIMLoginService/loginLifeCycleLoginSucc", () => {
      this.doSync();
    });
  }
  genSyncParams(t2) {
    return t2.reduce((t3, o2) => {
      var a2 = o2;
      return t3[a2] = this.timetags[a2] || 0, t3;
    }, {});
  }
  setTimetags(t2, o2) {
    o2.forEach((o3) => {
      this.timetags[o3] = t2;
    });
  }
  handleImmediate() {
    return this.core.session && this.core.session.onSyncDone && this.core.session.onSyncDone(), Promise.resolve();
  }
  delaySyncDone() {
    var { hostEnvEnum: t2 } = Ae.getSystemInfo();
    return 102 === t2 ? (this.core.logger.log("sync: emit ALIAPP sycnHandler, handle later"), new Promise((t3) => {
      setTimeout(() => {
        t3();
      }, 100);
    })) : Promise.resolve();
  }
}, "V2NIMSyncService");
export {
  xs as NIM,
  V2NIMAIServiceImpl as V2NIMAIService,
  Ee as V2NIMConst,
  V2NIMConversationGroupServiceImpl as V2NIMConversationGroupService,
  V2NIMConversationServiceImpl as V2NIMConversationService,
  V2NIMUFriendServiceImpl as V2NIMFriendService,
  V2NIMLocalConversationServiceImpl as V2NIMLocalConversationService,
  V2NIMMessageConverterImpl as V2NIMMessageConverter,
  V2NIMMessageExtendUtil,
  V2NIMMessageLogUtil,
  V2NIMMessageServiceImpl as V2NIMMessageService,
  V2NIMNotificationServiceImpl as V2NIMNotificationService,
  V2NIMPassthroughServiceImpl as V2NIMPassthroughService,
  V2NIMSettingServiceImpl as V2NIMSettingService,
  V2NIMSignallingServiceImpl as V2NIMSignallingService,
  V2NIMStorageServiceImpl as V2NIMStorageService,
  V2NIMSubscriptionServiceImpl as V2NIMSubscriptionService,
  V2NIMTeamServiceImpl as V2NIMTeamService,
  V2NIMUserServiceImpl as V2NIMUserService,
  YSFServiceImpl as YSFService,
  getAdapter$2 as aliAdapters,
  getAdapter$1 as baiduAdapters,
  getAdapter$4 as browserAdapters,
  setAdapters,
  getAdapter as ttAdapters,
  getAdapter$5 as uniAppAdapters,
  getAdapter$3 as wxAdapters
};
/*! Bundled license information:

nim-web-sdk-ng/dist/esm/nim.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
  (*!
   * Platform.js v1.3.6
   * Copyright 2014-2020 Benjamin Tan
   * Copyright 2011-2013 John-David Dalton
   * Available under MIT license
   *)
*/
//# sourceMappingURL=nim-web-sdk-ng_dist_esm_nim.js.map
