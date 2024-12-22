/*! Thunder 11 BY LUOCHENZHIMU */
/*! Last updated on 2020/12/27 */
/*! https://www.luochenzhimu.com */
module.exports = function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 51)
}([function (e, t) {
    e.exports = require("electron")
}, function (e, t) {
    e.exports = require("path")
}, function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e[e.Critical = 1] = "Critical", e[e.Error = 2] = "Error", e[e.Warning = 3] = "Warning", e[e.Information = 4] = "Information", e[e.Verbose = 5] = "Verbose"
    }(r = t.LogLevel || (t.LogLevel = {})), t.outputLoggerConsole = ((i = {})[r.Critical] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.error.apply(console, e)
    }, i[r.Error] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.error.apply(console, e)
    }, i[r.Warning] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.warn.apply(console, e)
    }, i[r.Information] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.info.apply(console, e)
    }, i[r.Verbose] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return console.log.apply(console, e)
    }, i);
    var i, o = function () {
        function e(e) {
            this.level = process.env.TL_LEVEL ? parseInt(process.env.TL_LEVEL, 10) : r.Information, this.moduleName = "", this.moduleName = e
        }

        return e.getLogger = function (t) {
            return new e(t)
        }, e.hook = function (t, n) {
            t && n && "function" == typeof n && (e.hooks[t] = (e.hooks[t] || []).concat([n]))
        }, e.callHook = function (t, n, r) {
            for (var i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
            t in e.hooks && e.hooks[t].forEach(function (e) {
                return e.apply(void 0, [n, r].concat(i))
            })
        }, e.prototype.critical = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [r.Critical].concat(e))
        }, e.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [r.Error].concat(e))
        }, e.prototype.warning = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [r.Warning].concat(e))
        }, e.prototype.information = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [r.Information].concat(e))
        }, e.prototype.verbose = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.log.apply(this, [r.Verbose].concat(e))
        }, e.prototype.log = function (t) {
            for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            e.callHook.apply(e, ["beforeLog", t, this.moduleName].concat(n)), this.checkShouldLog(t) && (this.writeLog.apply(this, [t, "[" + this.moduleName + "]"].concat(n)), e.callHook.apply(e, ["logged", t, this.moduleName].concat(n)))
        }, e.prototype.writeLog = function (t) {
            for (var n, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
            (n = e.outputLogger)[t].apply(n, r)
        }, e.prototype.checkShouldLog = function (t) {
            return e.enableLogger && t <= this.level && this.checkfilter()
        }, e.prototype.checkfilter = function () {
            return "all" === e.moduleFilter || e.moduleFilter.includes(this.moduleName)
        }, e.outputLogger = t.outputLoggerConsole, e.hooks = {}, e.enableLogger = "1" === process.env.TL_ENABLE, e.moduleFilter = process.env.TL_MODULE_FILTER || "all", e
    }();
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        return require(e)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(39), i = n(92), o = Object.prototype.toString;

    function s(e) {
        return "[object Array]" === o.call(e)
    }

    function a(e) {
        return null !== e && "object" == typeof e
    }

    function l(e) {
        return "[object Function]" === o.call(e)
    }

    function d(e, t) {
        if (null !== e && void 0 !== e) if ("object" != typeof e && (e = [e]), s(e)) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
    }

    e.exports = {
        isArray: s, isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === o.call(e)
        }, isBuffer: i, isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }, isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }, isString: function (e) {
            return "string" == typeof e
        }, isNumber: function (e) {
            return "number" == typeof e
        }, isObject: a, isUndefined: function (e) {
            return void 0 === e
        }, isDate: function (e) {
            return "[object Date]" === o.call(e)
        }, isFile: function (e) {
            return "[object File]" === o.call(e)
        }, isBlob: function (e) {
            return "[object Blob]" === o.call(e)
        }, isFunction: l, isStream: function (e) {
            return a(e) && l(e.pipe)
        }, isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }, isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        }, forEach: d, merge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
            }

            for (var r = 0, i = arguments.length; r < i; r++) d(arguments[r], n);
            return t
        }, extend: function (e, t, n) {
            return d(t, function (t, i) {
                e[i] = n && "function" == typeof t ? r(t, n) : t
            }), e
        }, trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (e, t) {
    e.exports = require("util")
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(14), o = n(57), s = n(16), a = n(27);

    function l(e) {
        a.information("on object freeer"), global.__xdasIPCClienInstance.notifyFreer(e.remoteId, e.callbackId)
    }

    let d = void 0;
    global.__xdasIPCClienInstance || (global.__xdasIPCClienInstance = new class extends i.EventEmitter {
        constructor() {
            super(), this.rid = 0, this.apis = {}, this.singletonMap = {}, this.connectedMap = {}, this.retCallbackMap = {}, this.eventCallbackMaps = {}, this.contextCallbackMap = {}
        }

        start(e, t, n, r) {
            do {
                if (t || (t = s.getDefaultPrex()), this.singletonMap.hasOwnProperty(t.toLowerCase())) {
                    if (r) if (this.connectedMap.hasOwnProperty(t.toLowerCase())) r("connect"); else {
                        let e = this.singletonMap[t.toLowerCase()];
                        e.on("error", e => {
                            r("error", e)
                        }), e.on("connect", () => {
                            r("connect")
                        }), e.on("end", () => {
                            let t = e.isInprocess();
                            r("end", e.getContext(), n, t)
                        })
                    }
                    break
                }
                if (global.__xdasPluginConfig && global.__xdasPluginConfig.name ? e = {
                    name: global.__xdasPluginConfig.name,
                    version: global.__xdasPluginConfig.version
                } : void 0 !== e && null !== e || (e = this.parseContext()), !e) {
                    if (!this.client || !this.client.getContext()) throw new Error("no suitable context for client, please specify context with start function");
                    e = {name: this.client.getContext().name, version: this.client.getContext().version}
                }
                if (e.name === s.serverContextName) throw new Error("client context must difference from server");
                if (n && !this.client) throw new Error("connect to other product must start self firstly");
                global.__xdasPluginConfig || (global.__xdasPluginConfig = e);
                let i = new o.Client({context: e, socketPrex: t});
                this.singletonMap[t.toLowerCase()] = i, n || (this.client = i), i.on("message", e => {
                    if ("fire_event" === e.action) this.fireServerEvent(i, e.name, [e.__context].concat(e.args)); else if ("client_context_freer" === e.action) do {
                        let t = e.rid;
                        if (t) {
                            if (!this.contextCallbackMap[t]) break;
                            delete this.contextCallbackMap[t]
                        }
                    } while (0); else if ("call_client_by_id" === e.action) this.callFunctionById(i, e.rid, e.s_rid, e.args); else if ("call_client_api" === e.action) this.callRegisterFunction(i, e); else if ("check_client_function" === e.action) {
                        let t = e.method, n = !0;
                        t && this.apis && this.apis[t] || (n = !1), this.sendAdapter(i, {
                            s_rid: e.s_rid,
                            action: "check_client_function_callback",
                            success: !0,
                            data: n
                        })
                    } else if (void 0 !== e.success && null !== e.success) {
                        let t = e;
                        this.client === i && this.emit("stat_call_function_back", i.getContext(), e);
                        const n = this.retCallbackMap[t.rid].callback;
                        if (n) if (t.success) do {
                            if ("remote_client_callback" === e.action && e.__context && e.__context.name && e.__context.productId) {
                                let r = `${e.__context.productId}-${e.__context.name}`.toLowerCase();
                                n(null, this.decodeParameter(t.data, r));
                                break
                            }
                            n(null, t.data)
                        } while (0); else n(t.error, t.data);
                        delete this.retCallbackMap[t.rid]
                    }
                }), i.on("error", e => {
                    r && r("error", e), this.emit("socket-error", e, i.getContext(), n, i.isInprocess()), delete this.singletonMap[t.toLowerCase()], delete this.connectedMap[t.toLowerCase()], n || (this.client = null)
                }), i.isInprocess() ? (this.connectedMap[t.toLowerCase()] = i, r && r("connect"), this.emit("connect", i.getContext(), n, !0)) : i.on("connect", () => {
                    this.connectedMap[t.toLowerCase()] = i, r && r("connect"), this.emit("connect", i.getContext(), n, !1)
                }), i.on("end", () => {
                    let e = i.isInprocess();
                    a.information("server is ended, and this client emit end", t, n, e), r && r("end", i.getContext(), n, e), this.emit("end", i.getContext(), n, e), delete this.singletonMap[t.toLowerCase()], delete this.connectedMap[t.toLowerCase()], n || (this.client = null)
                }), this.registry(i)
            } while (0)
        }

        registerFunctions(e) {
            do {
                if (!e) break;
                let t = void 0;
                for (let n in e) if (this.apis.hasOwnProperty(n)) {
                    t = n;
                    break
                }
                if (t) throw new Error(`try to coverd function ${t}`);
                this.apis = Object.assign({}, this.apis, e)
            } while (0)
        }

        checkServerFunction(e) {
            return r(this, void 0, void 0, function* () {
                return this.internalCheckServerFunction(this.client, e)
            })
        }

        callServerFunction(e, ...t) {
            return r(this, void 0, void 0, function* () {
                let n = null, r = yield this.callServerFunctionEx(e, ...t);
                return r && (n = r[0]), n
            })
        }

        callServerFunctionEx(e, ...t) {
            return this.internalCallServerFunctionEx(this.client, e, ...t)
        }

        isRemoteClientExist(e) {
            return this.internalIsRemoteClientExist(this.client, e)
        }

        checkRemoteFunction(e, t) {
            return this.internalCheckRemoteFunction(this.client, e, t)
        }

        callRemoteClientFunction(e, t, ...n) {
            return this.internalCallRemoteClientFunction(this.client, e, t, ...n)
        }

        notifyFreer(e, t) {
            this.sendAdapter(this.client, {action: "client_context_freer", dst: e, rid: t})
        }

        callRemoteContextById(e, t, ...n) {
            this.sendAdapter(this.client, {dst: e, action: "call_remote_context_by_id", rid: t, args: n})
        }

        attachServerEvent(e, t) {
            return this.internalAttachServerEvent(this.client, e, t)
        }

        detachServerEvent(e, t) {
            this.internalDetachServerEvent(this.client, e, t)
        }

        broadcastEvent(e, ...t) {
            this.sendAdapter(this.client, {action: "broadcast", name: e, args: t})
        }

        crossCheckServerFunction(e, t) {
            return r(this, void 0, void 0, function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let n = this.singletonMap[e.toLowerCase()];
                    if (!n) throw new Error("Please call the 'start' interface first");
                    return this.internalCheckServerFunction(n, t)
                }
            })
        }

        crossCallServerFunction(e, t, ...n) {
            return r(this, void 0, void 0, function* () {
                let r = null, i = yield this.crossCallServerFunctionEx(e, t, ...n);
                return i && (r = i[0]), r
            })
        }

        crossCallServerFunctionEx(e, t, ...n) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let r = this.singletonMap[e.toLowerCase()];
                if (!r) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'funcName' was not provided");
                return this.internalCallServerFunctionEx(r, t, ...n)
            }
        }

        crossIsRemoteClientExist(e, t) {
            return r(this, void 0, void 0, function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let n = this.singletonMap[e.toLowerCase()];
                    if (!n) throw new Error("Please call the 'start' interface first");
                    return this.internalIsRemoteClientExist(n, t)
                }
            })
        }

        crossCheckRemoteFunction(e, t, n) {
            return r(this, void 0, void 0, function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let r = this.singletonMap[e.toLowerCase()];
                    if (!r) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'remoteId' was not provided");
                    if (!n) throw new Error("An argument for 'funcName' was not provided");
                    return this.internalCheckRemoteFunction(r, t, n)
                }
            })
        }

        crossCallRemoteClientFunction(e, t, n, ...r) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let i = this.singletonMap[e.toLowerCase()];
                if (!i) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'remoteId' was not provided");
                if (!n) throw new Error("An argument for 'funcName' was not provided");
                return this.internalCallRemoteClientFunction(i, t, n, ...r)
            }
        }

        crossAttachServerEvent(e, t, n) {
            let r = void 0;
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let i = this.singletonMap[e.toLowerCase()];
                if (!i) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'eventName' was not provided");
                r = this.internalAttachServerEvent(i, t, n)
            }
            return r
        }

        crossDetachServerEvent(e, t, n) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let r = this.singletonMap[e.toLowerCase()];
                if (!r) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'eventName' was not provided");
                this.internalDetachServerEvent(r, t, n)
            }
        }

        crossBroadcastEvent(e, t, ...n) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let r = this.singletonMap[e.toLowerCase()];
                if (!r) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'eventName' was not provided");
                this.sendAdapter(r, {
                    action: "broadcast",
                    name: t,
                    args: n,
                    __context: Object.assign({}, this.client.getContext())
                })
            }
        }

        registry(e) {
            let t = this.getFullContextName(this.client);
            return new Promise((n, r) => {
                do {
                    if (!t) {
                        n(!1);
                        break
                    }
                    let r = this.generateId();
                    const i = {alias: t, action: "register", rid: r};
                    let o = (e, r) => {
                        e ? (a.error("register error", e.message), n(r)) : n(t)
                    };
                    this.retCallbackMap[r] = Object.assign({callback: o}, i), this.sendAdapter(e, i)
                } while (0)
            })
        }

        getNow() {
            return Date.now()
        }

        sendAdapter(e, t) {
            do {
                if (!t) break;
                let n = this.getNow();
                if (t.timestamp ? t.timestamp = [...t.timestamp].concat(n) : t.timestamp = [].concat(n), !t.__context) {
                    let n = e.getContext();
                    n && (t = Object.assign({__context: n}, t))
                }
                e.isInprocess() ? (a.information("send to server in process"), global.__xdasIPCServer.emit("message", t, e)) : e.send(t)
            } while (0)
        }

        parseContext() {
            let e = void 0;
            do {
                let t = "";
                for (let e = 0; e < process.argv.length; e++) {
                    let n = process.argv[e];
                    if (0 === n.indexOf("--xdas-plugin-name=", 0)) {
                        t = n.substr("--xdas-plugin-name=".length);
                        break
                    }
                }
                if (!t) break;
                e = {name: t}
            } while (0);
            return e
        }

        generateId() {
            return this.rid++
        }

        getFullContextName(e, t) {
            let n = "";
            do {
                if (t === s.serverContextName) {
                    n = t;
                    break
                }
                if (void 0 === t) {
                    n = `${e.getContext().productId}-${e.getContext().name}`.toLowerCase();
                    break
                }
                n = `${e.getContext().productId}-${t}`.toLowerCase()
            } while (0);
            return n
        }

        internalCheckServerFunction(e, t) {
            return new Promise((n, r) => {
                do {
                    if (!e) {
                        n(!1);
                        break
                    }
                    if (!t) {
                        n(!1);
                        break
                    }
                    let r = this.generateId();
                    const i = {action: "check_server_function_exist", method: t, rid: r};
                    let o = (e, t) => {
                        n(!e && t)
                    };
                    this.retCallbackMap[r] = Object.assign({callback: o}, i), this.sendAdapter(e, i)
                } while (0)
            })
        }

        internalCallServerFunctionEx(e, t, ...n) {
            return new Promise((r, i) => {
                do {
                    if (!e) {
                        r([null, "client doesn't ready"]);
                        break
                    }
                    if (!t) {
                        r([null, "funcName is not specifed"]);
                        break
                    }
                    e === this.client && this.emit("stat_call_function", this.client.getContext(), t);
                    let i = this.generateId();
                    if (n) for (let e = 0; e < n.length; e++) n[e] = this.convertFunction2IdEx(n[e]);
                    const o = {rid: i, method: t, args: n};
                    let s = (t, n) => {
                        t ? (a.error("callServerFunction error", t, e.getContext()), r([null, t])) : r([n, void 0])
                    };
                    this.retCallbackMap[i] = Object.assign({callback: s}, o), this.sendAdapter(e, o)
                } while (0)
            })
        }

        internalIsRemoteClientExist(e, t) {
            return new Promise((n, r) => {
                do {
                    if (!t) {
                        n([!1, "remote client alias is not specifed"]);
                        break
                    }
                    if (e === this.client && t.toLowerCase() === e.getContext().name.toLowerCase()) {
                        n([!0, "self is exist"]);
                        break
                    }
                    let r = this.generateId();
                    const i = {dst: this.getFullContextName(e, t), action: "check_client_exist", rid: r};
                    let o = (e, t) => {
                        n(e ? [!1, e] : [t, "success"])
                    };
                    this.retCallbackMap[r] = Object.assign({callback: o}, i), this.sendAdapter(e, i)
                } while (0)
            })
        }

        internalCheckRemoteFunction(e, t, n) {
            return new Promise((r, i) => {
                do {
                    if (!e) {
                        r(!1);
                        break
                    }
                    if (!t) {
                        r(!1);
                        break
                    }
                    if (!n) {
                        r(!1);
                        break
                    }
                    if (e === this.client && t.toLowerCase() === e.getContext().name.toLowerCase()) {
                        r(!(!this.apis || !this.apis[n]));
                        break
                    }
                    let i = this.generateId();
                    const o = {
                        action: "check_client_function_exist",
                        method: n,
                        rid: i,
                        src: this.getFullContextName(this.client),
                        dst: this.getFullContextName(e, t)
                    };
                    let s = (e, t) => {
                        r(!e && t)
                    };
                    this.retCallbackMap[i] = Object.assign({callback: s}, o), this.sendAdapter(e, o)
                } while (0)
            })
        }

        internalCallRemoteClientFunction(e, t, n, ...r) {
            return new Promise((i, o) => {
                do {
                    if (!e) {
                        i([null, "client doesn't ready"]);
                        break
                    }
                    if (!t) {
                        i([null, "remote client alias is not specifed"]);
                        break
                    }
                    if (!n) {
                        i([null, "funcName is not specifed"]);
                        break
                    }
                    let o = (e, t) => {
                        e ? (a.information("callRemoteClientFunction", e.message), i([null, e])) : i([t, void 0])
                    };
                    if (r) for (let e = 0; e < r.length; e++) r[e] = this.convertFunction2IdEx(r[e]);
                    let s = this.generateId();
                    const l = {
                        src: this.getFullContextName(this.client),
                        dst: this.getFullContextName(e, t),
                        action: "call_remote_client_api",
                        method: n,
                        args: r,
                        rid: s
                    };
                    this.retCallbackMap[s] = Object.assign({callback: o}, l), this.sendAdapter(e, l)
                } while (0)
            })
        }

        internalAttachServerEvent(e, t, n) {
            let r = e.getContext().productId.toLowerCase();
            this.eventCallbackMaps.hasOwnProperty(r) || (this.eventCallbackMaps[r] = {}), this.eventCallbackMaps[r].hasOwnProperty(t) || (this.eventCallbackMaps[r][t] = {}), s.isObjectEmpty(this.eventCallbackMaps[r][t]) && this.sendAdapter(e, {
                action: "attach_event",
                name: t
            });
            let i = this.generateId();
            return this.eventCallbackMaps[r][t][i] = n, i
        }

        internalDetachServerEvent(e, t, n) {
            let r = e.getContext().productId.toLowerCase();
            do {
                if (!this.eventCallbackMaps.hasOwnProperty(r)) break;
                if (!this.eventCallbackMaps[r].hasOwnProperty(t)) break;
                delete this.eventCallbackMaps[r][t][n], s.isObjectEmpty(this.eventCallbackMaps[r][t]) && this.sendAdapter(e, {
                    action: "detach_event",
                    name: t
                })
            } while (0)
        }

        fireServerEvent(e, t, ...n) {
            let r = e.getContext().productId.toLowerCase();
            do {
                if (!this.eventCallbackMaps.hasOwnProperty(r)) break;
                if (!this.eventCallbackMaps[r].hasOwnProperty(t)) break;
                let e = this.eventCallbackMaps[r][t];
                for (let t in e) {
                    let r = e[t];
                    r && r.apply(null, ...n)
                }
            } while (0)
        }

        callFunctionById(e, t, n, ...r) {
            let i = void 0, o = !1;
            do {
                const s = this.contextCallbackMap[t];
                if (!s) {
                    a.error("the context function has been freeer", t), i = {
                        s_rid: n,
                        action: "call_client_by_id_callback",
                        success: !1,
                        error: "the context function has been freeer"
                    };
                    break
                }
                let l = void 0, d = void 0;
                try {
                    l = s.apply(null, ...r)
                } catch (e) {
                    d = e.message;
                    break
                }
                if (void 0 === n || null === n) break;
                if (i = {s_rid: n, action: "call_client_by_id_callback", success: !1}, void 0 !== d) {
                    i.error = d;
                    break
                }
                if (l && l.then) {
                    l.then(t => {
                        i.data = this.convertFunction2IdEx(t), i.success = !0, this.sendAdapter(e, i)
                    }).catch(t => {
                        i.error = t instanceof Error ? t.message : t, this.sendAdapter(e, i)
                    }), o = !0;
                    break
                }
                i.success = !0, i.data = this.convertFunction2IdEx(l)
            } while (0);
            !o && i && this.sendAdapter(e, i)
        }

        convertFunction2IdEx(e) {
            let t = e;
            if ("function" == typeof e) {
                let n = this.generateId();
                this.contextCallbackMap[n] = e, t = {"__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}": n}
            } else if (e && "object" == typeof e) {
                t = Array.isArray(e) ? [...e] : Object.assign({}, e);
                for (let e in t) {
                    let n = t[e];
                    if ("function" == typeof n) {
                        let r = this.generateId();
                        this.contextCallbackMap[r] = n, t[e] = {"__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}": r}
                    } else n && "object" == typeof n && (t[e] = this.convertFunction2IdEx(n))
                }
            }
            return t
        }

        decodeParameter(e, t) {
            let n = e;
            do {
                if (!e) break;
                if (!t) break;
                if ("object" != typeof e) break;
                let r = e["__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}"];
                if (r) {
                    n = ((...e) => {
                        this.callRemoteContextById(t, r, ...e)
                    }), global.__xdasObjectLiftMonitor && global.__xdasObjectLiftMonitor.setObjectFreer(n, {
                        remoteId: t,
                        callbackId: r
                    }, l);
                    break
                }
                for (let n in e) {
                    let r = e[n];
                    e[n] = this.decodeParameter(r, t)
                }
            } while (0);
            return n
        }

        callRegisterFunction(e, t) {
            let n = void 0, r = !1;
            do {
                if (!t) break;
                let i = t.method;
                if (!i) break;
                let o = this.getNow();
                if (n = {
                    s_rid: t.s_rid,
                    action: "remote_client_callback",
                    success: !1,
                    rid: t.rid,
                    method: t.method,
                    src: t.src,
                    timestamp: t.timestamp ? t.timestamp.concat(o) : [].concat(o)
                }, !this.apis || !this.apis[i]) {
                    n.error = `callRegisterFunction ${i} is undefined`;
                    break
                }
                let s = void 0, a = this.decodeParameter(t.args, t.src);
                try {
                    s = this.apis[i].apply(null, [t.src].concat(a))
                } catch (e) {
                    n.error = e.message;
                    break
                }
                if (s && s.then) {
                    s.then(t => {
                        n.data = this.convertFunction2IdEx(t), n.success = !0, this.sendAdapter(e, n)
                    }).catch(t => {
                        n.error = t instanceof Error ? t.message : t, this.sendAdapter(e, n)
                    }), r = !0;
                    break
                }
                n.success = !0, n.data = this.convertFunction2IdEx(s)
            } while (0);
            a.information("callRegisterFunction", n), !r && n && this.sendAdapter(e, n)
        }
    }), d = global.__xdasIPCClienInstance, t.client = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(1), i = n(0), o = n(6), s = n(15), a = n(2), l = n(3), d = n(5),
        c = l.default(r.join(__rootDir, "../bin/ThunderHelper.node")), u = a.default.getLogger("RoundRectWindow");
    let f = new Map;

    function h(e) {
        let t = 1;
        return t = c.getDPIAwareSupport() ? c.getMonitorDPIFactor(e) : c.getSysDPIFactor()
    }

    class p {
        constructor() {
            this.win = null, this.winId = void 0, this.shadowHandle = 0, this.winHandle = 0, this.area = 16, this.closeHandler = null, this.resizeHandler = null, this.moveHandler = null, this.focusHandler = null, this.blurHandler = null, this.showHandler = null, this.hideHandler = null
        }

        getParentWindowRect() {
            let e = this.area / 2, t = c.getWindowRect(this.winHandle), n = h(this.winHandle),
                r = {x: 0, y: 0, width: 0, height: 0};
            return r.x = Math.floor(t.x - e * n), r.y = Math.floor(t.y - e * n), r.width = Math.floor(t.width + 2 * e * n), r.height = Math.floor(t.height + 2 * e * n), r
        }

        updateShadowWindowPos(e) {
            let t = this.getParentWindowRect(), n = c.getWindowRect(this.shadowHandle);
            if (n.x !== t.x || n.y !== t.y || n.width !== t.width || n.height !== t.height ? (c.setWindowPos(this.shadowHandle, this.winHandle, t.x, t.y, t.width, t.height, s.Uflag.SWP_NOACTIVATE), e = !0) : c.setWindowPos(this.shadowHandle, this.winHandle, 0, 0, 0, 0, s.Uflag.SWP_NOSIZE | s.Uflag.SWP_NOMOVE | s.Uflag.SWP_NOACTIVATE | s.Uflag.SWP_NOSENDCHANGING | s.Uflag.SWP_NOOWNERZORDER | s.Uflag.SWP_NOREDRAW), e) {
                let e = h(this.winHandle);
                u.information("drawShadowWindow dpi", e), c.drawShadowWindow(this.winHandle, 100 * e)
            }
        }

        onWindowClose() {
            u.information("onWindowClose"), w(this.winId), this.winId = void 0
        }

        onWindowResize() {
            this.updateShadowWindowPos(!0)
        }

        onWindowMove() {
            this.updateShadowWindowPos()
        }

        onWindowFocus() {
            this.updateShadowWindowPos()
        }

        onWindowBlur() {
            this.updateShadowWindowPos()
        }

        onWindowShow() {
            this.updateShadowWindowPos(), c.showWindow(this.shadowHandle, s.CmdShow.SW_SHOWNOACTIVATE)
        }

        onWindowHide() {
            c.showWindow(this.shadowHandle, s.CmdShow.SW_HIDE)
        }

        onWindowPosChanged() {
            if (this.shadowHandle && !this.win.isDestroyed() && this.win.isVisible()) {
                c.getNextWindow(this.shadowHandle, s.GWCmd.GW_HWNDPREV) !== this.winHandle && this.updateShadowWindowPos()
            }
        }

        attach(e, t, n, r, i, o, a) {
            do {
                this.win = e, this.winId = e.id;
                let l = e.getNativeWindowHandle();
                this.winHandle = l.readUIntLE(0, 4);
                let d = 0;
                t && (d = t.getNativeWindowHandle().readUIntLE(0, 4));
                let u = h(this.winHandle);
                if (this.shadowHandle = c.attachShadowWindow(this.winHandle, i, d, n, r, 100 * u, o, a), !this.shadowHandle) break;
                if (c.setShadowWindowResizable(this.winHandle, e.isResizable()), this.closeHandler = this.onWindowClose.bind(this), e.on("closed", this.closeHandler), n) break;
                this.updateShadowWindowPos(!0), e.isVisible() || c.showWindow(this.shadowHandle, s.CmdShow.SW_HIDE), this.resizeHandler = this.onWindowResize.bind(this), this.moveHandler = this.onWindowMove.bind(this), this.focusHandler = this.onWindowFocus.bind(this), this.blurHandler = this.onWindowBlur.bind(this), this.showHandler = this.onWindowShow.bind(this), this.hideHandler = this.onWindowHide.bind(this), e.on("resize", this.resizeHandler), e.on("move", this.moveHandler), e.on("focus", this.focusHandler), e.on("blur", this.blurHandler), e.on("show", this.showHandler), e.on("hide", this.hideHandler), e.hookWindowMessage(s.WindowMessage.WM_WINDOWPOSCHANGED, this.onWindowPosChanged.bind(this))
            } while (0);
            return this.shadowHandle
        }

        detach() {
            u.information("detach win.id:", this.winId), this.win.isDestroyed() || (this.closeHandler && (this.win.removeListener("close", this.closeHandler), this.closeHandler = null), this.resizeHandler && (this.win.removeListener("resize", this.resizeHandler), this.resizeHandler = null), this.moveHandler && (this.win.removeListener("move", this.moveHandler), this.moveHandler = null), this.focusHandler && (this.win.removeListener("focus", this.focusHandler), this.focusHandler = null), this.blurHandler && (this.win.removeListener("blur", this.blurHandler), this.blurHandler = null), this.showHandler && (this.win.removeListener("show", this.showHandler), this.showHandler = null), this.hideHandler && (this.win.removeListener("hide", this.hideHandler), this.hideHandler = null), this.win.unhookWindowMessage(s.WindowMessage.WM_WINDOWPOSCHANGED)), c.destroyShadowWindow(this.winHandle)
        }
    }

    function m(e, t, n = !0, r = !0, i = 16) {
        setTimeout(() => {
            let o = r ? `${__rootDir}/static/shadow-corner.png` : `${__rootDir}/static/shadow.png`;
            !function (e, t, n = !0, r = !0, i = 16, o = "", s = null) {
                let a = 0;
                do {
                    if (!e || e.isDestroyed()) {
                        u.warning("win is already destroyed!");
                        break
                    }
                    let l = f.get(e.id);
                    if (l) {
                        u.warning("shadowWindow is already attached! win id:", e.id);
                        break
                    }
                    l = new p, f.set(e.id, l), a = l.attach(e, t, n, r, i, o, s)
                } while (0)
            }(e, t, n, r, i, o, {left: 17, top: 17, right: 17, bottom: 17})
        }, 50)
    }

    function w(e) {
        do {
            if (d.isUndefined(e)) break;
            let t = f.get(e);
            if (!t) {
                u.warning("shadowWindow is not attached! win id:", e);
                break
            }
            t.detach(), f.delete(e)
        } while (0)
    }

    t.roundRectWindow = m, t.detachRoundRectWindow = w, t.detachAllRoundRectWindow = function () {
        f.forEach(e => {
            e.detach()
        }), f.clear()
    };
    let g = !1;
    t.registerRoundRectClientFunction = function (e) {
        do {
            if (g) break;
            g = !0;
            let t = {
                RoundRectWindow: (t, ...n) => {
                    do {
                        let t = n[0];
                        if (void 0 === t || null === t) break;
                        let r = i.BrowserWindow.fromId(t);
                        if (!r) break;
                        let o = n[1];
                        u.information("RoundRectWindow ", o);
                        let s = e;
                        if (void 0 !== o && null !== o) s = i.BrowserWindow.fromId(o); else {
                            let e = r.getParentWindow();
                            e && (s = e)
                        }
                        m(r, s)
                    } while (0)
                }
            };
            o.client.registerFunctions(t)
        } while (0)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.channelRMNewTaskReadyForSetTaskData = "RM_NEWTASK_READYRORSETTASKDATA", e.channelRMNewTaskSetTaskData = "RM_NEWTASK_SETTASKDATA", e.channelRMPreNewTaskSetTaskData = "RM_PRENEWTASK_SETTASKDATA", e.channelRMNewTaskCreateNewTask = "RM_NEWTASK_CREATENEWTASK", e.channelRMNewTaskClose = "RM_NEWTASK_CLOSE", e.channelRMPreNewTaskClose = "RM_PRENEWTASK_CLOSE", e.channelRMNewTaskSetBTInfo = "RM_NEWTASK_SETBTINFO", e.channelRMNewTaskDownloadTorrent = "RM_NEW_TASK_DOWNLOAD_TORRENT", e.channelRMNewTaskCreateBtTask = "RM_NEWTASK_CRATEBTTASK", e.channelRMNewTaskCancleMagnet = "RM_NEWTASK_CANCLE_MAGNET", e.channelRMImportTorrent = "RM_NEWTASK_IMPORT_TORRENT", e.channelRMGetConfigValueResolve = "RM_GET_CONFIG_VALUE_RESOLVE", e.channelRMGetConfigValueReject = "RM_GET_CONFIG_VALUE_REJECT", e.channelRMSetConfigValueReject = "RM_SET_CONFIG_VALUE_REJECT", e.channelMRTrayMenuClick = "MR_TRAY_MENU_CLICK", e.channelMRNewTaskMagnetTaskCreated = "MR_NEW_TASK_MAGNET_TASK_CREATED", e.channelMRNewTaskDownloadTorrentResult = "MR_NEW_TASK_DOWNLOAD_TORRENT_RESULT", e.channelMRNewTaskCreateNewTaskResult = "MR_NEWTASK_CREATENEWTASK_RESULT", e.channelMRNewTaskCreateBtTaskResult = "RM_NEWTASK_CRATEBTTASK_RESULT", e.channelMRGetConfigValue = "MR_GET_CONFIG_VALUE", e.channelMRSetConfigValue = "MR_SET_CONFIG_VALUE", e.channelRMCommitPlanTask = "RM_PLANTASK_COMMIT", e.channelRMPerformePlanTask = "RM_PLANTASK_PERFORME", e.channelRMProcessSend = "RM_RENDER_PROCESS_INFO", e.channelRMGetPrivateSpaceInfo = "RM_RENDER_GET_PRIVATE_SPACE_INFO", e.channelMRGetPrivateSpaceInfoResult = "MR_RENDER_GET_PRIVATE_SPACE_INFO_RESULT", e.channelRMFileCopy = "RM_FILE_COPY", e.channelRMFileMove = "RM_FILE_MOVE", e.channelMRFileCopyResult = "MR_FILE_COPY_RESULT", e.channelMRFileMoveResult = "MR_FILE_MOVE_RESULT", e.channelRMGetSutitleByCid = "RM_RENDER_GET_SUBTITLE_BY_CID", e.channelMRGetSutitleByCidResult = "MR_RENDER_GET_SUBTITLE_BY_CID_RESULT", e.channelRMGetSutitleByName = "RM_RENDER_GET_SUBTITLE_BY_NAME", e.channelMRGetSutitleByNameResult = "MR_RENDER_GET_SUBTITLE_BY_NAME_RESULT", e.channelRMDownloadSutitle = "RM_RENDER_DOWNLOAD_SUBTITLE", e.channelMRDownloadSutitleSuc = "MR_RENDER_DOWNLOAD_SUBTITLE_SUCCESS", e.channelMRDownloadSutitleFail = "MR_RENDER_DOWNLOAD_SUBTITLE_FAIL", e.channelRMGetDisplayName = "RM_RENDER_GET_SUBTITLE_DISPLAYNAME", e.channelMRGetDisplayNameResult = "MR_RENDER_GET_SUBTITLE_DISPLAYNAME_RESULT", e.channelMRBringWindowToTop = "MR_RENDER_BRING_WINDOW_TO_TOP", e.channelRMDownloadXmp = "RM_RENDER_DOWNLOAD_XMP", e.channelRMXmpFixBoxCreated = "RM_RENDER_XMPFIXBOX_CREATED", e.channelMRFixXmpSuc = "MR_RENDER_FIX_XMP_SUC", e.channelMRFixXMPFail = "MR_RENDER_FIX_XMP_FAIL", e.channelRMDownloadXmpEx = "RM_RENDER_DOWNLOAD_XMP_EX", e.channelRMSetPosition = "RM_SET_POSITION", e.channelRMSetFoucs = "RM_SET_FOCUS", e.channelRMCreateAddressDropWnd = "RM_CREATE_ADDRESS_DROPWND", e.channelRMRefreshAddressDropWnd = "RM_REFRESH_ADDRESS_DROPWND", e.channelRMSelectAddressDropItem = "RM_SELECT_ADDRESS_DROPITEM", e.channelRMCreateSearchWindow = "RM_CREATE_SEARCH_WINDOW", e.channelRMShowSearchWindow = "RM_SHOW_SEARCH_WINDOW", e.channelRMAddressKeyDown = "RM_ADDRESS_BAR_KEYDOWN", e.channelMRFWAddressKeyDown = "MR_ADDRESS_FW_BAR_KEYDOWN", e.channelMRFWSelectAddressDropItem = "MR_FW_SELECT_ADDRESS_DROPITEM", e.channelRMAddressDropWndKeyDown = "RM_ADDRESS_DROPWND_KEYDOWN", e.channelRMClickMouse = "RM_CLICK_MOUSE", e.channelMRSearchBarFocusChange = "MR_SEARCHBAR_FOCUS_CHANGE", e.channelMRFWAddressDropWndKeyDown = "MR_FW_ADDRESS_DROPWND_KEYDOWN", e.channelMRClickAddressDropItem = "MR_CLICK_ADDRESS_DROPITEM", e.channelMRMainWndMax = "MR_MAINWINDOW_MAX", e.channelMRMainWndMin = "MR_MAINWINDOW_MIN", e.channelMRMainWndRestore = "MR_MAINWINDOW_RESTORE", e.channelRMGetBrowserStartType = "RM_GET_BROWSER_START_TYPE", e.channelMRGetBrowserStartTypeResult = "MR_GET_BROWSER_START_TYPE_RESULT", e.channelRMExecute = "RM_SHELL_EXECUTE", e.channelMRExecuteResult = "MR_SHELL_EXECUTE_RESULT", e.channelMRAdTipsClick = "MR_AD_TIPS_CLICK", e.channelMRNotificationMsg = "MR_NOTIFICATION_MSG", e.channelRMSetProgressBar = "RM_SET_PROGRESS_BAR", e.channelRMRoundWindow = "RM_ROUND_WINDOW", e.channelMRShowOrHideWindow = "MR_SHOW_OR_HIDE_WINDOW", e.channelMRSuspensionWindowShowOrHide = "MR_SUSPENSION_WINDOW_SHOW_OR_HIDE", e.channelRMConfigInitFinished = "RM_CONFIG_INIT_FINISHED", e.channelRMConfigValueChanged = "RM_CONFIG_VALUE_CHANGED", e.channelRMIndividuationBrowserMsg = "RM_INDIVIDUATION_BROWSER_MSG", e.channelMRIndividuationBrowserMsg = "MR_INDIVIDUATION_BROWSER_MSG", e.channelRMSetEnvironmentVariable = "RM_SET_ENVIRONMENT_VARIABLE", e.channelMREmbedPlayerPos = "MR_EMBED_PLAYER_POSITION", e.channelRMUpdateLogEnviroment = "RM_UPDATE_LOG_ENVIRONMENT", e.channelMRUpdateLogEnviroment = "MR_UPDATE_LOG_ENVIRONMENT"
    }(t.ThunderChannelList || (t.ThunderChannelList = {}))
}, function (e, t) {
    e.exports = require("os")
}, function (e, t) {
    e.exports = require("fs")
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(1), o = n(3), s = n(2).default.getLogger("XLStat");
    let a = o.default(i.join(__rootDir, "../bin/ThunderHelper.node"));

    function l(e = "") {
        let t;
        if ("string" == typeof e) t = e; else if (d(e) && "object" == typeof e) {
            let n = [];
            for (let t in e) d(e[t]) && n.push(t + "=" + encodeURIComponent(e[t]));
            t = n.join(",")
        }
        return t
    }

    function d(e) {
        return void 0 !== e && null !== e
    }

    !function (e) {
        let t = null;

        function n() {
            return t || (t = a.xlstat4), t
        }

        function i(e, t = "", i = "", o = 0, a = 0, d = 0, c = 0, u = "", f = 0) {
            return r(this, void 0, void 0, function* () {
                let r = 0;
                do {
                    if (void 0 === e) {
                        r = 1;
                        break
                    }
                    let h = l(u);
                    r = "browser" === process.type ? yield new Promise(s => {
                        r = n().asyncTrackEvent(e, t, i, o, a, d, c, h, f, e => {
                            s(e)
                        })
                    }) : n().trackEvent(e, t, i, o, a, d, c, h, f), s.information(e, t, i, o, a, d, c, h, f)
                } while (0);
                return r
            })
        }

        function o(e, t = 0) {
            do {
                if (void 0 === e) break;
                "browser" !== process.type && n().trackClick(e, t)
            } while (0)
        }

        e.asyncTrackEvent = i, e.trackEvent = function (e, t = "", n = "", r = 0, o = 0, s = 0, a = 0, l = "", d = 0) {
            i(e, t, n, r, o, s, a, l, d).catch()
        }, e.trackClick = o, e.trackShow = function (e, t = 0) {
            o(e, t)
        }, e.setUserID = function (e = 0, t = 0) {
            "browser" !== process.type && n().setUserID(e, t)
        }, e.initParam = function (e) {
            return r(this, void 0, void 0, function* () {
                let t = -1;
                return t = "browser" === process.type ? yield new Promise(t => {
                    n().asyncInitParam(e, (e, n) => {
                        t(e ? n : -1)
                    })
                }) : yield new Promise(t => {
                    n().initParamRemote(e, e => {
                        t(e)
                    })
                })
            })
        }, e.asyncUninit = function (e) {
            return r(this, void 0, void 0, function* () {
                "browser" === process.type && (yield new Promise(t => {
                    n().asyncUninit(e, () => {
                        t()
                    })
                }))
            })
        }, e.uninit = function () {
            "browser" === process.type && n().waitFinish()
        }
    }(t.XLStatNS || (t.XLStatNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.assert = t.log = t.error = t.warn = t.info = t.trace = t.timeEnd = t.time = t.traceback = void 0;
    const r = n(1);
    let i, o = console;

    function s(e = 5) {
        let t = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i, n = /at\s+()(.*):(\d*):(\d*)/i,
            i = (new Error).stack.split("\n").slice(e + 1);
        i.shift();
        let o = [];
        return i.forEach((e, i) => {
            let s = t.exec(e) || n.exec(e), a = {};
            s && 5 === s.length && (a.method = s[1], a.path = s[2], a.line = s[3], a.pos = s[4], a.file = r.basename(a.path), o.push(a))
        }), o
    }

    if (i = "renderer" === process.type ? "[Renderer] [async-remote]:" : "browser" === process.type ? "[Browser] [async-remote]:" : `[${process.type}] [async-remote]`, t.traceback = function (e = 5) {
        return s(e).map(e => e.method + "@(" + e.file + ")").join(" <= ")
    }, t.time = function (...e) {
        o.time(...e)
    }, t.timeEnd = function (...e) {
        o.timeEnd(...e)
    }, t.trace = function (...e) {
        let t = s(), n = "";
        t[0] && t[0].method && (n = n), o.trace(i, ...e)
    }, t.info = function (...e) {
        let t = s(), n = "anonymous";
        t[0] && t[0].method && (n = n), o.info(i, "[" + n + "]", e.join(","))
    }, t.warn = function (...e) {
        let t = s(), n = "";
        t[0] && t[0].method && (n = n), o.warn("<WARN>" + i, "[" + n + "]", e.join(","))
    }, t.error = function (...e) {
        let t = s(), n = "";
        t[0] && t[0].method && (n = n), o.error("<ERROR>" + i, "[" + n + "]", e.join(","))
    }, t.log = function (...e) {
        o.log(i, ...e)
    }, t.assert = function (e, t) {
        if (!e) throw new Error(t)
    }, !process.env.DEBUG_ASYNC_REMOTE) {
        let e = function () {
        };
        t.traceback = e, t.time = e, t.timeEnd = e, t.trace = e, t.info = e, t.warn = e, t.error = e, t.log = e, t.assert = e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t, n, r, i, o, s, a, l, d, c, u, f, h, p, m, w, g, _, v, b, y, T;
        !function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.Create = 1] = "Create", e[e.InvaldParam = 2] = "InvaldParam", e[e.InvaldLink = 3] = "InvaldLink", e[e.InvaldConfig = 4] = "InvaldConfig", e[e.Timeout = 5] = "Timeout", e[e.VerifyData = 6] = "VerifyData", e[e.Forbidden = 7] = "Forbidden", e[e.RangeDispatch = 8] = "RangeDispatch", e[e.FilePathOverRanging = 9] = "FilePathOverRanging", e[e.FileCreate = 201] = "FileCreate", e[e.FileWrite = 202] = "FileWrite", e[e.FileRead = 203] = "FileRead", e[e.FileRename = 204] = "FileRename", e[e.FileFull = 205] = "FileFull", e[e.FileOccupied = 211] = "FileOccupied", e[e.FileAccessDenied = 212] = "FileAccessDenied", e[e.BtUploadExist = 601] = "BtUploadExist", e[e.ForbinddenResource = 701] = "ForbinddenResource", e[e.ForbinddenAccount = 702] = "ForbinddenAccount", e[e.ForbinddenArea = 703] = "ForbinddenArea", e[e.ForbinddenCopyright = 704] = "ForbinddenCopyright", e[e.ForbinddenReaction = 705] = "ForbinddenReaction", e[e.ForbinddenPorn = 706] = "ForbinddenPorn", e[e.DownloadSDKCrash = 10001] = "DownloadSDKCrash", e[e.torrentFileNotExist = 10002] = "torrentFileNotExist"
        }(t = e.TaskError || (e.TaskError = {})), function (e) {
            e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
        }(n = e.DcdnStatusCode || (e.DcdnStatusCode = {})), function (e) {
            e[e.Begin = -1] = "Begin", e[e.Unkown = 0] = "Unkown", e[e.StandBy = 1] = "StandBy", e[e.PreDownloading = 2] = "PreDownloading", e[e.StartWaiting = 3] = "StartWaiting", e[e.StartPending = 4] = "StartPending", e[e.Started = 5] = "Started", e[e.StopPending = 6] = "StopPending", e[e.Stopped = 7] = "Stopped", e[e.Succeeded = 8] = "Succeeded", e[e.Failed = 9] = "Failed", e[e.Seeding = 10] = "Seeding", e[e.DestroyPending = 11] = "DestroyPending", e[e.End = 12] = "End"
        }(r = e.TaskStatus || (e.TaskStatus = {})), function (e) {
            e[e.Begin = -1] = "Begin", e[e.StandBy = 0] = "StandBy", e[e.Stopped = 1] = "Stopped", e[e.Started = 2] = "Started", e[e.Complete = 3] = "Complete", e[e.Forbidden = 4] = "Forbidden", e[e.Error = 5] = "Error", e[e.End = 6] = "End"
        }(i = e.BtFileStatus || (e.BtFileStatus = {})), function (e) {
            e[e.DispatchStrategyNone = 0] = "DispatchStrategyNone", e[e.DispatchStrategyOrigin = 1] = "DispatchStrategyOrigin", e[e.DispatchStrategyP2s = 2] = "DispatchStrategyP2s", e[e.DispatchStrategyP2p = 4] = "DispatchStrategyP2p", e[e.DispatchStrategyAll = -1] = "DispatchStrategyAll"
        }(o = e.DispatchStrategy || (e.DispatchStrategy = {})), function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.P2sp = 1] = "P2sp", e[e.Bt = 2] = "Bt", e[e.Emule = 3] = "Emule", e[e.Group = 4] = "Group", e[e.Magnet = 5] = "Magnet"
        }(s = e.TaskType || (e.TaskType = {})), function (e) {
            e[e.Invalid = 0] = "Invalid", e[e.P2sp = 1] = "P2sp", e[e.Emule = 2] = "Emule"
        }(a = e.TaskCfgType || (e.TaskCfgType = {})), function (e) {
            e.Unkown = "Unkown", e.Downloading = "Downloading", e.Completed = "Completed", e.Recycle = "Recycle"
        }(l = e.CategroyViewID || (e.CategroyViewID = {})), function (e) {
            e[e.Unknow = 0] = "Unknow", e[e.TaskCreated = 1] = "TaskCreated", e[e.InsertToCategoryView = 2] = "InsertToCategoryView", e[e.RemoveFromCategoryView = 3] = "RemoveFromCategoryView", e[e.StatusChanged = 4] = "StatusChanged", e[e.DetailChanged = 5] = "DetailChanged", e[e.ChannelInfoChanged = 6] = "ChannelInfoChanged", e[e.DcdnStatusChanged = 7] = "DcdnStatusChanged", e[e.TaskDescriptionChanged = 8] = "TaskDescriptionChanged", e[e.TaskUserRead = 9] = "TaskUserRead", e[e.TaskRenamed = 10] = "TaskRenamed", e[e.TaskMovedEnd = 11] = "TaskMovedEnd", e[e.TaskMovingStateChange = 12] = "TaskMovingStateChange", e[e.BtSubFileDetailChanged = 13] = "BtSubFileDetailChanged", e[e.BtSubFileLoaded = 14] = "BtSubFileLoaded", e[e.BtSubFileForbidden = 15] = "BtSubFileForbidden", e[e.BtSubFileDcdnStatusChanged = 16] = "BtSubFileDcdnStatusChanged", e[e.TaskCategoryMovedEnd = 17] = "TaskCategoryMovedEnd", e[e.GroupTaskSubFileDetailChanged = 18] = "GroupTaskSubFileDetailChanged", e[e.TaskDestroying = 19] = "TaskDestroying", e[e.TaskDestroyed = 20] = "TaskDestroyed"
        }(d = e.TaskEventType || (e.TaskEventType = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.VirtualId = 2] = "VirtualId", e[e.SrcTotal = 3] = "SrcTotal", e[e.SrcUsing = 4] = "SrcUsing", e[e.FileSize = 5] = "FileSize", e[e.ReceivedSize = 6] = "ReceivedSize", e[e.DownloadSize = 7] = "DownloadSize", e[e.TotalDownloadSize = 8] = "TotalDownloadSize", e[e.CreateTime = 9] = "CreateTime", e[e.CompletionTime = 10] = "CompletionTime", e[e.DownloadingPeriod = 11] = "DownloadingPeriod", e[e.Progress = 12] = "Progress", e[e.RecycleTime = 13] = "RecycleTime", e[e.FileCreated = 14] = "FileCreated", e[e.Forbidden = 15] = "Forbidden", e[e.CategoryId = 16] = "CategoryId", e[e.UserRead = 17] = "UserRead", e[e.OpenOnComplete = 18] = "OpenOnComplete", e[e.GroupTaskId = 19] = "GroupTaskId", e[e.DownloadSubTask = 20] = "DownloadSubTask", e[e.NameType = 21] = "NameType", e[e.OwnerProduct = 22] = "OwnerProduct", e[e.FileIndex = 23] = "FileIndex", e[e.NameFixed = 24] = "NameFixed", e[e.ValidDownloadSize = 25] = "ValidDownloadSize", e[e.RealDownloadSize = 26] = "RealDownloadSize", e[e.ResourceLegal = 27] = "ResourceLegal", e[e.TaskType = 28] = "TaskType", e[e.ErrorCode = 29] = "ErrorCode", e[e.PlayPosition = 30] = "PlayPosition", e[e.Duration = 31] = "Duration", e[e.NumberEnd = 32] = "NumberEnd", e[e.BooleanStart = 4096] = "BooleanStart", e[e.Destroyed = 4097] = "Destroyed", e[e.Background = 4098] = "Background", e[e.Moving = 4099] = "Moving", e[e.BooleanEnd = 4100] = "BooleanEnd", e[e.StringStart = 8192] = "StringStart", e[e.TaskName = 8193] = "TaskName", e[e.SavePath = 8194] = "SavePath", e[e.RelativePath = 8195] = "RelativePath", e[e.TaskUrl = 8196] = "TaskUrl", e[e.RefUrl = 8197] = "RefUrl", e[e.Cid = 8198] = "Cid", e[e.Gcid = 8199] = "Gcid", e[e.Cookie = 8200] = "Cookie", e[e.ProductInfo = 8201] = "ProductInfo", e[e.Origin = 8202] = "Origin", e[e.Description = 8203] = "Description", e[e.UserData = 8204] = "UserData", e[e.OriginName = 8205] = "OriginName", e[e.HTTPContentType = 8206] = "HTTPContentType", e[e.CategoryViewId = 8207] = "CategoryViewId", e[e.YunTaskId = 8208] = "YunTaskId", e[e.StringEnd = 8209] = "StringEnd", e[e.ObjectStart = 12288] = "ObjectStart", e[e.ObjectEnd = 12289] = "ObjectEnd"
        }(c = e.TaskAttribute || (e.TaskAttribute = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown", e[e.SrcTotal = 1] = "SrcTotal", e[e.SrcUsing = 2] = "SrcUsing", e[e.FileSize = 4] = "FileSize", e[e.ReceivedSize = 8] = "ReceivedSize", e[e.DownloadSize = 16] = "DownloadSize", e[e.CompletionTime = 32] = "CompletionTime", e[e.DownloadingPeriod = 64] = "DownloadingPeriod", e[e.Progress = 128] = "Progress", e[e.RecycleTime = 256] = "RecycleTime", e[e.FileCreated = 512] = "FileCreated", e[e.Forbidden = 1024] = "Forbidden", e[e.UserRead = 2048] = "UserRead", e[e.OpenOnComplete = 4096] = "OpenOnComplete", e[e.DownloadSubTask = 8192] = "DownloadSubTask", e[e.TaskName = 16384] = "TaskName", e[e.SavePath = 32768] = "SavePath", e[e.Cid = 65536] = "Cid", e[e.Gcid = 131072] = "Gcid", e[e.UserData = 262144] = "UserData", e[e.CategoryViewId = 524288] = "CategoryViewId", e[e.ErrorCode = 1048576] = "ErrorCode", e[e.TaskSpeed = 2097152] = "TaskSpeed", e[e.ChannelInfo = 4194304] = "ChannelInfo", e[e.ValidDownloadSize = 8388608] = "ValidDownloadSize", e[e.OriginName = 16777216] = "OriginName", e[e.HTTPContentType = 33554432] = "HTTPContentType", e[e.PlayPosition = 67108864] = "PlayPosition", e[e.Duration = 134217728] = "Duration", e[e.YunTaskId = 268435456] = "YunTaskId"
        }(u = e.TaskDetailChangedFlags || (e.TaskDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(f = e.BtSubFileDetailChangedFlags || (e.BtSubFileDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(h = e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.UserRead = 12] = "UserRead", e[e.PlayPosition = 13] = "PlayPosition", e[e.Duration = 14] = "Duration", e[e.NumberEnd = 15] = "NumberEnd", e[e.StringStart = 4096] = "StringStart", e[e.FinalName = 4097] = "FinalName", e[e.RelativePath = 4098] = "RelativePath", e[e.FileName = 4099] = "FileName", e[e.FilePath = 4100] = "FilePath", e[e.Cid = 4101] = "Cid", e[e.Gcid = 4102] = "Gcid", e[e.StringEnd = 4103] = "StringEnd"
        }(p = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
            e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
        }(m = e.KeyType || (e.KeyType = {})), function (e) {
            e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
        }(w = e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
            e[e.ExtEqual = 1] = "ExtEqual", e[e.NameLikeAndExtEqual = 2] = "NameLikeAndExtEqual", e[e.TaskTypeEqual = 4] = "TaskTypeEqual"
        }(g = e.FilterKeyType || (e.FilterKeyType = {})), function (e) {
            e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
        }(_ = e.KeyFilter || (e.KeyFilter = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.LoadTaskBasic = 0] = "LoadTaskBasic", e[e.Create = 1] = "Create", e[e.Complete = 2] = "Complete", e[e.Recycle = 3] = "Recycle", e[e.Recover = 4] = "Recover", e[e.ReDownload = 5] = "ReDownload", e[e.MoveThoughCategory = 6] = "MoveThoughCategory"
        }(v = e.TaskInsertReason || (e.TaskInsertReason = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.Manual = 0] = "Manual", e[e.PauseAll = 1] = "PauseAll", e[e.DeleteTask = 2] = "DeleteTask", e[e.TaskJammed = 3] = "TaskJammed", e[e.LowSpeed = 4] = "LowSpeed", e[e.MaxDownloadReduce = 5] = "MaxDownloadReduce", e[e.MoveTask = 6] = "MoveTask", e[e.SelectDownloadLists = 7] = "SelectDownloadLists", e[e.PrivateLoginOut = 8] = "PrivateLoginOut", e[e.FreeDownload = 9] = "FreeDownload", e[e.Exit = 10] = "Exit"
        }(b = e.TaskStopReason || (e.TaskStopReason = {})), function (e) {
            e[e.RESOURCE_FROM_MEMBER = 1] = "RESOURCE_FROM_MEMBER", e[e.RESOURCE_FROM_OFFLINE = 2] = "RESOURCE_FROM_OFFLINE", e[e.RESOURCE_FROM_CRYSTAL_LARGE = 4] = "RESOURCE_FROM_CRYSTAL_LARGE", e[e.RESOURCE_FROM_CRYSTAL_SMALL = 8] = "RESOURCE_FROM_CRYSTAL_SMALL", e[e.RESOURCE_FROM_DCDN = 16] = "RESOURCE_FROM_DCDN", e[e.RESOURCE_FROM_FREEDCDN = 32] = "RESOURCE_FROM_FREEDCDN"
        }(y = e.XLResourceFrom || (e.XLResourceFrom = {})), function (e) {
            e[e.XL_TASKDOWNLOAD_STRATEGY_NORMALDOWNLOAD = 0] = "XL_TASKDOWNLOAD_STRATEGY_NORMALDOWNLOAD", e[e.XL_TASKDOWNLOAD_STRATEGY_DOWNLOADINGPLAYING = 1] = "XL_TASKDOWNLOAD_STRATEGY_DOWNLOADINGPLAYING", e[e.XL_TASKDOWNLOAD_STRATEGY_ONLINEPLAYING = 2] = "XL_TASKDOWNLOAD_STRATEGY_ONLINEPLAYING"
        }(T = e.XLDownloadStrategy || (e.XLDownloadStrategy = {}))
    }(t.DownloadKernel || (t.DownloadKernel = {}))
}, function (e, t) {
    e.exports = require("events")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e[e.HWND_NOTOPMOST = -2] = "HWND_NOTOPMOST", e[e.HWND_TOPMOST = -1] = "HWND_TOPMOST", e[e.HWND_TOP = 0] = "HWND_TOP", e[e.HWND_BOTTOM = 1] = "HWND_BOTTOM"
    }(t.OptionOfHWNDInAfter || (t.OptionOfHWNDInAfter = {})), function (e) {
        e[e.SWP_ASYNCWINDOWPOS = 16384] = "SWP_ASYNCWINDOWPOS", e[e.SWP_DEFERERASE = 8192] = "SWP_DEFERERASE", e[e.SWP_DRAWFRAME = 32] = "SWP_DRAWFRAME", e[e.SWP_FRAMECHANGED = 32] = "SWP_FRAMECHANGED", e[e.SWP_HIDEWINDOW = 128] = "SWP_HIDEWINDOW", e[e.SWP_NOACTIVATE = 16] = "SWP_NOACTIVATE", e[e.SWP_NOCOPYBITS = 256] = "SWP_NOCOPYBITS", e[e.SWP_NOMOVE = 2] = "SWP_NOMOVE", e[e.SWP_NOOWNERZORDER = 512] = "SWP_NOOWNERZORDER", e[e.SWP_NOREDRAW = 8] = "SWP_NOREDRAW", e[e.SWP_NOREPOSITION = 512] = "SWP_NOREPOSITION", e[e.SWP_NOSENDCHANGING = 1024] = "SWP_NOSENDCHANGING", e[e.SWP_NOSIZE = 1] = "SWP_NOSIZE", e[e.SWP_NOZORDER = 4] = "SWP_NOZORDER", e[e.SWP_SHOWWINDOW = 64] = "SWP_SHOWWINDOW"
    }(t.Uflag || (t.Uflag = {})), function (e) {
        e[e.SW_FORCEMINIMIZE = 11] = "SW_FORCEMINIMIZE", e[e.SW_HIDE = 0] = "SW_HIDE", e[e.SW_MAXIMIZE = 3] = "SW_MAXIMIZE", e[e.SW_MINIMIZE = 6] = "SW_MINIMIZE", e[e.SW_RESTORE = 9] = "SW_RESTORE", e[e.SW_SHOW = 5] = "SW_SHOW", e[e.SW_SHOWDEFAULT = 10] = "SW_SHOWDEFAULT", e[e.SW_SHOWMAXIMIZED = 3] = "SW_SHOWMAXIMIZED", e[e.SW_SHOWMINIMIZED = 2] = "SW_SHOWMINIMIZED", e[e.SW_SHOWMINNOACTIVE = 7] = "SW_SHOWMINNOACTIVE", e[e.SW_SHOWNA = 8] = "SW_SHOWNA", e[e.SW_SHOWNOACTIVATE = 4] = "SW_SHOWNOACTIVATE", e[e.SW_SHOWNORMAL = 1] = "SW_SHOWNORMAL"
    }(t.CmdShow || (t.CmdShow = {})), function (e) {
        e[e.WS_BORDER = 8388608] = "WS_BORDER", e[e.WS_CAPTION = 12582912] = "WS_CAPTION", e[e.WS_CHILD = 1073741824] = "WS_CHILD", e[e.WS_CHILDWINDOW = 1073741824] = "WS_CHILDWINDOW", e[e.WS_CLIPCHILDREN = 33554432] = "WS_CLIPCHILDREN", e[e.WS_CLIPSIBLINGS = 67108864] = "WS_CLIPSIBLINGS", e[e.WS_POPUP = 2147483648] = "WS_POPUP", e[e.WS_THICKFRAME = 262144] = "WS_THICKFRAME"
    }(t.WindowStyle || (t.WindowStyle = {})), function (e) {
        e[e.WS_EX_TOOLWINDOW = 128] = "WS_EX_TOOLWINDOW", e[e.WS_EX_APPWINDOW = 262144] = "WS_EX_APPWINDOW", e[e.WS_EX_TOPMOST = 8] = "WS_EX_TOPMOST", e[e.WS_EX_WINDOWEDGE = 256] = "WS_EX_WINDOWEDGE", e[e.WS_EX_NOACTIVATE = 134217728] = "WS_EX_NOACTIVATE", e[e.WS_EX_TRANSPARENT = 32] = "WS_EX_TRANSPARENT", e[e.WS_EX_LAYERED = 524288] = "WS_EX_LAYERED"
    }(t.WindowStyleEx || (t.WindowStyleEx = {})), function (e) {
        e[e.GWL_EXSTYLE = -20] = "GWL_EXSTYLE", e[e.GWL_HINSTANCE = -6] = "GWL_HINSTANCE", e[e.GWL_ID = -12] = "GWL_ID", e[e.GWL_STYLE = -16] = "GWL_STYLE", e[e.GWL_USERDATA = -21] = "GWL_USERDATA", e[e.GWL_WNDPROC = -4] = "GWL_WNDPROC"
    }(t.SetWindowType || (t.SetWindowType = {})), function (e) {
        e[e.WM_CREATE = 1] = "WM_CREATE", e[e.WM_DESTROY = 2] = "WM_DESTROY", e[e.WM_MOVE = 3] = "WM_MOVE", e[e.WM_SIZE = 5] = "WM_SIZE", e[e.WM_ACTIVATE = 6] = "WM_ACTIVATE", e[e.WM_SETFOCUS = 7] = "WM_SETFOCUS", e[e.WM_KILLFOCUS = 8] = "WM_KILLFOCUS", e[e.WM_ENABLE = 10] = "WM_ENABLE", e[e.WM_KEYDOWN = 256] = "WM_KEYDOWN", e[e.WM_KEYUP = 257] = "WM_KEYUP", e[e.WM_SYSKEYDOWN = 260] = "WM_SYSKEYDOWN", e[e.WM_MOUSEMOVE = 512] = "WM_MOUSEMOVE", e[e.WM_SETCURSOR = 32] = "WM_SETCURSOR", e[e.WM_LBUTTONDOWN = 513] = "WM_LBUTTONDOWN", e[e.WM_LBUTTONUP = 514] = "WM_LBUTTONUP", e[e.WM_LBUTTONDBLCLK = 515] = "WM_LBUTTONDBLCLK", e[e.WM_RBUTTONUP = 517] = "WM_RBUTTONUP", e[e.WM_MOUSEWHEEL = 522] = "WM_MOUSEWHEEL", e[e.WM_MOUSELEAVE = 675] = "WM_MOUSELEAVE", e[e.WM_DPICHANGED = 736] = "WM_DPICHANGED", e[e.WM_GETMINMAXINFO = 36] = "WM_GETMINMAXINFO", e[e.WM_NCHITTEST = 132] = "WM_NCHITTEST", e[e.WM_NCMOUSEMOVE = 160] = "WM_NCMOUSEMOVE", e[e.WM_NCLBUTTONDOWN = 161] = "WM_NCLBUTTONDOWN", e[e.WM_NCLBUTTONUP = 162] = "WM_NCLBUTTONUP", e[e.WM_NCLBUTTONDBLCLK = 163] = "WM_NCLBUTTONDBLCLK", e[e.WM_NCRBUTTONDOWN = 164] = "WM_NCRBUTTONDOWN", e[e.WM_NCRBUTTONUP = 165] = "WM_NCRBUTTONUP", e[e.WM_NCRBUTTONDBLCLK = 166] = "WM_NCRBUTTONDBLCLK", e[e.WM_NCMBUTTONDOWN = 167] = "WM_NCMBUTTONDOWN", e[e.WM_NCMBUTTONUP = 168] = "WM_NCMBUTTONUP", e[e.WM_NCMBUTTONDBLCLK = 169] = "WM_NCMBUTTONDBLCLK", e[e.WM_WINDOWPOSCHANGED = 71] = "WM_WINDOWPOSCHANGED", e[e.WM_WINDOWPOSCHANGING = 70] = "WM_WINDOWPOSCHANGING", e[e.WM_ACTIVATEAPP = 28] = "WM_ACTIVATEAPP", e[e.WM_DWMCOMPOSITIONCHANGED = 798] = "WM_DWMCOMPOSITIONCHANGED", e[e.WM_QUERYENDSESSION = 17] = "WM_QUERYENDSESSION"
    }(t.WindowMessage || (t.WindowMessage = {})), function (e) {
        e[e.GW_HWNDFIRST = 0] = "GW_HWNDFIRST", e[e.GW_HWNDLAST = 1] = "GW_HWNDLAST", e[e.GW_HWNDNEXT = 2] = "GW_HWNDNEXT", e[e.GW_HWNDPREV = 3] = "GW_HWNDPREV", e[e.GW_OWNER = 4] = "GW_OWNER", e[e.GW_CHILD = 5] = "GW_CHILD", e[e.GW_ENABLEDPOPUP = 6] = "GW_ENABLEDPOPUP"
    }(t.GWCmd || (t.GWCmd = {})), function (e) {
        e[e.HTERROR = -2] = "HTERROR", e[e.HTTRANSPARENT = -1] = "HTTRANSPARENT", e[e.HTNOWHERE = 0] = "HTNOWHERE", e[e.HTCLIENT = 1] = "HTCLIENT", e[e.HTCAPTION = 2] = "HTCAPTION", e[e.HTSYSMENU = 3] = "HTSYSMENU", e[e.HTGROWBOX = 4] = "HTGROWBOX", e[e.HTSIZE = 4] = "HTSIZE", e[e.HTMENU = 5] = "HTMENU", e[e.HTHSCROLL = 6] = "HTHSCROLL", e[e.HTVSCROLL = 7] = "HTVSCROLL", e[e.HTMINBUTTON = 8] = "HTMINBUTTON", e[e.HTMAXBUTTON = 9] = "HTMAXBUTTON", e[e.HTLEFT = 10] = "HTLEFT", e[e.HTRIGHT = 11] = "HTRIGHT", e[e.HTTOP = 12] = "HTTOP", e[e.HTTOPLEFT = 13] = "HTTOPLEFT", e[e.HTTOPRIGHT = 14] = "HTTOPRIGHT", e[e.HTBOTTOM = 15] = "HTBOTTOM", e[e.HTBOTTOMLEFT = 16] = "HTBOTTOMLEFT", e[e.HTBOTTOMRIGHT = 17] = "HTBOTTOMRIGHT", e[e.HTBORDER = 18] = "HTBORDER", e[e.HTREDUCE = 8] = "HTREDUCE", e[e.HTZOOM = 9] = "HTZOOM", e[e.HTSIZEFIRST = 10] = "HTSIZEFIRST", e[e.HTSIZELAST = 17] = "HTSIZELAST", e[e.HTOBJECT = 19] = "HTOBJECT", e[e.HTCLOSE = 20] = "HTCLOSE", e[e.HTHELP = 21] = "HTHELP"
    }(t.HitTestPositionCode || (t.HitTestPositionCode = {})), function (e) {
        e[e.VK_LBUTTON = 1] = "VK_LBUTTON", e[e.VK_RBUTTON = 2] = "VK_RBUTTON", e[e.VK_MBUTTON = 4] = "VK_MBUTTON", e[e.VK_BACK = 8] = "VK_BACK", e[e.VK_TAB = 9] = "VK_TAB", e[e.VK_RETURN = 13] = "VK_RETURN", e[e.VK_SHIFT = 16] = "VK_SHIFT", e[e.VK_CONTROL = 17] = "VK_CONTROL", e[e.VK_MENU = 18] = "VK_MENU", e[e.VK_ESCAPE = 27] = "VK_ESCAPE", e[e.VK_SPACE = 32] = "VK_SPACE", e[e.VK_PRIOR = 33] = "VK_PRIOR", e[e.VK_NEXT = 34] = "VK_NEXT", e[e.VK_END = 35] = "VK_END", e[e.VK_LEFT = 37] = "VK_LEFT", e[e.VK_UP = 38] = "VK_UP", e[e.VK_RIGHT = 39] = "VK_RIGHT", e[e.VK_DOWN = 40] = "VK_DOWN", e[e.VK_DELETE = 46] = "VK_DELETE", e[e.VK_F1 = 112] = "VK_F1", e[e.VK_F2 = 113] = "VK_F2", e[e.VK_F3 = 114] = "VK_F3", e[e.VK_F4 = 115] = "VK_F4", e[e.VK_F5 = 116] = "VK_F5", e[e.VK_F6 = 117] = "VK_F6", e[e.VK_F7 = 118] = "VK_F7", e[e.VK_F8 = 119] = "VK_F8", e[e.VK_F9 = 120] = "VK_F9", e[e.VK_F10 = 121] = "VK_F10", e[e.VK_F11 = 122] = "VK_F11", e[e.VK_F12 = 123] = "VK_F12", e[e.VK_OEM_1 = 186] = "VK_OEM_1", e[e.VK_OEM_PLUS = 187] = "VK_OEM_PLUS", e[e.VK_OEM_COMMA = 188] = "VK_OEM_COMMA", e[e.VK_OEM_MINUS = 189] = "VK_OEM_MINUS", e[e.VK_OEM_PERIOD = 190] = "VK_OEM_PERIOD", e[e.VK_OEM_2 = 191] = "VK_OEM_2", e[e.VK_OEM_3 = 192] = "VK_OEM_3", e[e.VK_OEM_4 = 219] = "VK_OEM_4", e[e.VK_OEM_5 = 220] = "VK_OEM_5", e[e.VK_OEM_6 = 221] = "VK_OEM_6", e[e.VK_OEM_7 = 222] = "VK_OEM_7", e[e.VK_PROCESSKEY = 229] = "VK_PROCESSKEY"
    }(t.VirtualKeyCode || (t.VirtualKeyCode = {})), function (e) {
        e[e.SW_HIDE = 0] = "SW_HIDE", e[e.SW_SHOWMAXIMIZED = 3] = "SW_SHOWMAXIMIZED", e[e.SW_SHOW = 5] = "SW_SHOW"
    }(t.ShowWindowCmd || (t.ShowWindowCmd = {})), function (e) {
        e[e.MIN_WINDOW_WIDTH = 520] = "MIN_WINDOW_WIDTH", e[e.MIN_WINDOW_HEIGHT = 335] = "MIN_WINDOW_HEIGHT", e[e.MIN_WINDOW_WIDTH_TAB = 910] = "MIN_WINDOW_WIDTH_TAB", e[e.MIN_WINDOW_HEIGHT_TAB = 600] = "MIN_WINDOW_HEIGHT_TAB", e[e.TOP_WINDOW_HEIGHT = 68] = "TOP_WINDOW_HEIGHT", e[e.TOP_WINDOW_HEIGHT_NORMAL = 68] = "TOP_WINDOW_HEIGHT_NORMAL", e[e.PLAYCTRL_HEIGHT = 82] = "PLAYCTRL_HEIGHT", e[e.PLAYLIST_WIDTH = 240] = "PLAYLIST_WIDTH", e[e.FRAME_BORDER = 0] = "FRAME_BORDER", e[e.FRAME_RESIZE_BORDER = 0] = "FRAME_RESIZE_BORDER", e[e.BROWSERWINDOW_SHADOW = 8] = "BROWSERWINDOW_SHADOW", e[e.SIDE_BAR_WIDTH = 25] = "SIDE_BAR_WIDTH", e[e.SIDE_BAR_HEIGHT = 100] = "SIDE_BAR_HEIGHT", e[e.SHOWHIDE_DELAY_TIME = 2e3] = "SHOWHIDE_DELAY_TIME", e[e.TIME_TIP_WINDOW_WIDTH = 111] = "TIME_TIP_WINDOW_WIDTH", e[e.TIME_TIP_WINDOW_HEIGHT = 30] = "TIME_TIP_WINDOW_HEIGHT", e[e.TIME_IMG_TIP_WINDOW_HEIGHT = 75] = "TIME_IMG_TIP_WINDOW_HEIGHT"
    }(t.WindowParams || (t.WindowParams = {})), function (e) {
        e[e.UNKNOWN_MODE = -1] = "UNKNOWN_MODE", e[e.TRANSPARENT_MODE = 0] = "TRANSPARENT_MODE", e[e.NORMAL_MODE = 1] = "NORMAL_MODE", e[e.MINI_MODE = 2] = "MINI_MODE", e[e.EMBED_CHILD_MODE = 3] = "EMBED_CHILD_MODE"
    }(t.XMPShowMode || (t.XMPShowMode = {})), function (e) {
        e[e.NO_TOPMOST_MODE = 0] = "NO_TOPMOST_MODE", e[e.PLAYING_TOPMOST_MODE = 1] = "PLAYING_TOPMOST_MODE", e[e.ALWAYLS_TOPMOST_MODE = 2] = "ALWAYLS_TOPMOST_MODE"
    }(t.WindowTopMode || (t.WindowTopMode = {})), function (e) {
        e[e.RGN_AND = 1] = "RGN_AND", e[e.RGN_OR = 2] = "RGN_OR", e[e.RGN_XOR = 3] = "RGN_XOR", e[e.RGN_DIFF = 4] = "RGN_DIFF", e[e.RGN_COPY = 5] = "RGN_COPY"
    }(t.CombineRgnType || (t.CombineRgnType = {})), function (e) {
        e[e.PLAY_UNKNOWN = 0] = "PLAY_UNKNOWN", e[e.PLAY_BY_DOWNLOAD = 1] = "PLAY_BY_DOWNLOAD", e[e.PLAY_BY_PAN = 2] = "PLAY_BY_PAN"
    }(t.XmpPlaySoure || (t.XmpPlaySoure = {})), function (e) {
        e.onOpenSucceeded = "OnOpenSucceeded", e.onOpenFailed = "OnOpenFailed", e.onPlayFailed = "OnPlayFailed", e.onPlaying = "OnPlaying", e.onPreOpen = "OnPreOpen", e.onPaused = "OnPaused", e.onPlayCompleted = "OnPlayCompleted", e.onPreStop = "OnPreStop", e.onStop = "OnStop", e.onXmpQuit = "OnXmpQuit", e.onXmpStartFailed = "OnXmpStartFailed", e.onError = "OnError"
    }(t.XmpEvent || (t.XmpEvent = {})), function (e) {
        e[e.Invalid = -100] = "Invalid", e[e.PreOpen = -10] = "PreOpen", e[e.QueryExt = -9] = "QueryExt", e[e.DownloadTorrent = -3] = "DownloadTorrent", e[e.ParserTorrent = -2] = "ParserTorrent", e[e.GetPlayUrl = -1] = "GetPlayUrl", e[e.Ready = 0] = "Ready", e[e.Opening = 1] = "Opening", e[e.Pausing = 2] = "Pausing", e[e.Paused = 3] = "Paused", e[e.Playing = 4] = "Playing", e[e.Play = 5] = "Play", e[e.Closeing = 6] = "Closeing", e[e.Completed = 7] = "Completed", e[e.Stopped = 8] = "Stopped", e[e.Error = 9] = "Error"
    }(t.XmpMediaState || (t.XmpMediaState = {})), function (e) {
        e[e.AbeLeft = 0] = "AbeLeft", e[e.AbeTop = 1] = "AbeTop", e[e.AbeRright = 2] = "AbeRright", e[e.AbeBottom = 3] = "AbeBottom"
    }(t.WindowTaskBarAbe || (t.WindowTaskBarAbe = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(9), i = n(1);
    t.getDefaultPrex = function () {
        return i.basename(process.execPath, ".exe")
    }, t.getSockPath = function (e) {
        const t = r.tmpdir();
        let n = e;
        e || (n = i.basename(process.execPath, ".exe"));
        let o = i.join(t, `${n}-xunlei-node-net-ipc-{FD196984-2591-4588-AA6F-5C8AC1266290}.sock`);
        return "win32" === process.platform && (o = "\\\\.\\pipe\\" + (o = (o = o.replace(/^\//, "")).replace(/\//g, "-"))), o
    }, t.serverContextName = "xunlei-node-net-ipc-server-{46105371-DE78-4442-B59F-FDA1D6D7D430}", t.mainProcessContext = "main-process", t.mainRendererContext = "main-renderer", t.isObjectEmpty = function (e) {
        let t = !0;
        do {
            if (!e) break;
            if (0 === Object.keys(e).length) break;
            t = !1
        } while (0);
        return t
    }
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(34), o = n(10), s = n(18), a = n(2).default.getLogger("Thunder.base.tools-utilities"), l = n(1),
        d = n(3).default(l.join(__rootDir, "../bin/ThunderHelper.node"));
    !function (e) {
        function t(e) {
            return r(this, void 0, void 0, function* () {
                let t;
                return t = e && (yield s.FileSystemAWNS.existsAW(e)) ? new Promise(t => {
                    d.asyncCalcuteFileMD5(e, (e, n) => {
                        e ? (n = n.toUpperCase(), t(n)) : t(void 0)
                    })
                }) : new Promise(e => {
                    e(void 0)
                })
            })
        }

        e.genarateMd5 = function (e) {
            let t = void 0, n = i.createHash("md5");
            return null !== n && (t = n.update(e).digest("hex")), t
        }, e.matchFileMd5 = function (e, n) {
            return r(this, void 0, void 0, function* () {
                let r = !1, i = yield t(e);
                return void 0 !== i && i === n.toUpperCase() && (a.information("check full md5 sucessful"), r = !0), r
            })
        }, e.calculateFileMd5Ex = function (e) {
            return r(this, void 0, void 0, function* () {
                let t;
                if (e && (yield s.FileSystemAWNS.existsAW(e))) {
                    let n = o.createReadStream(e), r = i.createHash("md5");
                    n.on("data", e => {
                        r.update(e)
                    }), t = new Promise(e => {
                        n.on("end", () => {
                            let t = r.digest("hex");
                            t = t.toUpperCase(), e(t)
                        })
                    })
                } else t = new Promise(e => {
                    e(void 0)
                });
                return t
            })
        }, e.calculateFileMd5 = t, e.encryptBuffer = function (e, t) {
            let n = null;
            try {
                let r = i.createCipheriv("aes-128-ecb", t, ""), o = r.update(e), s = r.final();
                n = Buffer.concat([o, s])
            } catch (e) {
                a.warning("encryptBuffer", e)
            }
            return n
        }, e.decryptBuffer = function (e, t) {
            let n = null;
            try {
                let r = i.createDecipheriv("aes-128-ecb", t, ""), o = r.update(e), s = r.final();
                n = Buffer.concat([o, s])
            } catch (e) {
                a.warning("decryptBuffer", e)
            }
            return n
        }, e.encryptSha1Buffer = function (e) {
            let t = null;
            try {
                t = i.createHash("sha1").update(e).digest("hex")
            } catch (e) {
                a.warning("encryptSha1Buffer", e)
            }
            return t
        }, e.encryptHmacBuffer = function (e, t, n, r = "hex") {
            let o = null;
            try {
                o = i.createHmac(e, t).update(n, "utf8").digest(r)
            } catch (e) {
                a.warning("encryptSha1Buffer", e)
            }
            return o
        }, e.setForegroundWindow = function (e, t) {
            return r(this, void 0, void 0, function* () {
                if (null !== e && null !== t) {
                    let n = void 0, i = [];
                    "renderer" === process.type ? (n = yield t.getNativeWindowHandle(), i = yield t.getChildWindows()) : (n = t.getNativeWindowHandle(), i = t.getChildWindows());
                    let o = [];
                    for (let e = 0; e < i.length; ++e) {
                        let t = i[e], n = !1;
                        "renderer" === process.type ? (yield t.isDestroyed()) || (n = yield t.isAlwaysOnTop()) : t.isDestroyed() || (n = t.isAlwaysOnTop()), n && o.push(t)
                    }
                    let s = n.readUIntLE(0, 4);
                    e.setForegroundWindow(s) ? a.information("setForegroundWindow sucessful") : a.information("setForegroundWindow failed"), o.forEach(e => r(this, void 0, void 0, function* () {
                        "renderer" === process.type ? (yield e.isDestroyed()) || e.setAlwaysOnTop(!0).catch() : e.isDestroyed() || e.setAlwaysOnTop(!0)
                    }))
                }
            })
        }
    }(t.ToolsUtilitiesAWNS || (t.ToolsUtilitiesAWNS = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(10), o = n(1), s = n(5).promisify, a = n(2).default.getLogger("Thunder.base.fs-utilities");
    !function (e) {
        function t(e) {
            return r(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const n = s(i.access);
                    try {
                        yield n(e), t = !0
                    } catch (e) {
                        a.information(e)
                    }
                }
                return t
            })
        }

        function l(e) {
            return r(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const n = s(i.mkdir);
                    try {
                        yield n(e), t = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }

        function d(e) {
            return r(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const n = s(i.rmdir);
                    try {
                        yield n(e), t = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }

        function c(e) {
            return r(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const n = s(i.unlink);
                    try {
                        yield n(e), t = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }

        function u(e) {
            return r(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const n = s(i.readdir);
                    try {
                        t = yield n(e)
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }

        function f(e) {
            return r(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const n = s(i.lstat);
                    try {
                        t = yield n(e)
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }

        function h(e, t) {
            return r(this, void 0, void 0, function* () {
                let n = !1;
                if (void 0 !== e && void 0 !== t) {
                    let r = o.join(e, t), i = yield f(r);
                    n = null !== i && i.isDirectory() ? yield p(r) : yield c(r)
                }
                return n
            })
        }

        function p(e) {
            return r(this, void 0, void 0, function* () {
                let n = !1;
                if (void 0 !== e) {
                    if (yield t(e)) {
                        n = !0;
                        let t = (yield u(e)) || [];
                        for (let r = 0; r < t.length; r++) n = (yield h(e, t[r])) && n;
                        (n || 0 === t.length) && (n = (yield d(e)) && n)
                    }
                }
                return n
            })
        }

        function m(e) {
            return r(this, void 0, void 0, function* () {
                let n = !1;
                return a.information("mkdirsAW", e), void 0 !== e && ((yield t(e)) ? n = !0 : o.dirname(e) === e ? n = !1 : (yield m(o.dirname(e))) && (n = yield l(e))), n
            })
        }

        function w(e, n) {
            return r(this, void 0, void 0, function* () {
                let r;
                if (e.toLowerCase() !== n.toLowerCase() && (yield t(e))) {
                    let t = i.createReadStream(e), o = i.createWriteStream(n);
                    r = new Promise(e => {
                        t.pipe(o).on("finish", () => {
                            e(!0)
                        })
                    })
                } else r = new Promise(e => {
                    e(!1)
                });
                return r
            })
        }

        e.readFileAW = function (e) {
            return r(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const n = s(i.readFile);
                    try {
                        t = yield n(e)
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }, e.writeFileAW = function (e, t) {
            return r(this, void 0, void 0, function* () {
                let n = !1;
                if (void 0 !== e && null !== t) {
                    const r = s(i.writeFile);
                    try {
                        yield r(e, t), n = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return n
            })
        }, e.existsAW = t, e.dirExistsAW = function (e) {
            return r(this, void 0, void 0, function* () {
                let n = !1;
                do {
                    if (!(n = yield t(e))) break;
                    let r = yield f(e);
                    if (!r) break;
                    n = r.isDirectory()
                } while (0);
                return n
            })
        }, e.mkdirAW = l, e.rmdirAW = d, e.unlinkAW = c, e.readdirAW = u, e.lstatAW = f, e.rmdirsAW = p, e.mkdirsAW = m, e.renameAW = function (e, t) {
            return r(this, void 0, void 0, function* () {
                if (void 0 !== e && void 0 !== t) {
                    const n = s(i.rename);
                    try {
                        yield n(e, t)
                    } catch (e) {
                        a.warning(e)
                    }
                }
            })
        }, e.copyFileAW = w, e.copyDirsAW = function e(n, i) {
            return r(this, void 0, void 0, function* () {
                let r = !1, s = yield f(n);
                if (s.isDirectory()) {
                    r = yield m(i);
                    let a = (yield u(n)) || [];
                    for (let l = 0; l < a.length; l++) {
                        let d = o.join(n, a[l]), c = o.join(i, a[l]);
                        (r = yield t(d)) && (r = (s = yield f(d)).isDirectory() ? yield e(d, c) : yield w(d, c))
                    }
                }
                return r
            })
        }, e.mkdtempAW = function () {
            return r(this, void 0, void 0, function* () {
                let e = !1;
                const t = s(i.mkdtemp), r = (yield Promise.resolve().then(() => n(9))).tmpdir();
                try {
                    e = yield t(`${r}${o.sep}`)
                } catch (e) {
                    a.warning(e)
                }
                return e
            })
        }, e.deleteEmptySubDirs = function (e, n) {
            return r(this, void 0, void 0, function* () {
                let r = !0;
                e = o.normalize(e), n = o.normalize(n), e.length > 3 && "\\" === e[e.length - 1] && (e = e.slice(0, e.length - 1)), n.length > 3 && "\\" === n[n.length - 1] && (n = n.slice(0, n.length - 1));
                do {
                    if (0 !== e.indexOf(n)) {
                        r = !1;
                        break
                    }
                    let i = e;
                    for (; i !== n;) {
                        if ((yield t(i)) && !(yield d(i))) {
                            r = !1;
                            break
                        }
                        i = o.dirname(i)
                    }
                } while (0);
                return r
            })
        }, e.getFileSize = function e(n) {
            return r(this, void 0, void 0, function* () {
                let r = 0;
                do {
                    if (!n) break;
                    if (!(yield t(n))) break;
                    let i = yield f(n);
                    if (i) if (i.isDirectory()) {
                        let t = yield u(n);
                        for (let i = 0; i < t.length; i++) r += (yield e(o.join(n, t[i])))
                    } else r = i.size
                } while (0);
                return r
            })
        }, e.isDirectoryEmptyAW = function (e, n = !0) {
            return r(this, void 0, void 0, function* () {
                let r = !0;
                do {
                    if (!e) {
                        r = !1;
                        break
                    }
                    if (!(yield t(e))) {
                        r = n;
                        break
                    }
                    let i = yield f(e);
                    if (!i) {
                        r = !1;
                        break
                    }
                    if (!i.isDirectory()) {
                        r = !1;
                        break
                    }
                    if ((yield u(e)).length > 0) {
                        r = !1;
                        break
                    }
                } while (0);
                return r
            })
        }
    }(t.FileSystemAWNS || (t.FileSystemAWNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.PRE_NEW_TASK = "pre-newtask-dlg", e.BT_NEW_TASK = "bt-newtask-dlg", e.NEW_TASK = "newtask-dlg", e.LOGIN = "login-dlg", e.BROWSER_GUIDE = "browser-guide-dlg", e.SIGN = "sign-dlg"
    }(t.PopView || (t.PopView = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(1), o = n(26), s = n(9), a = n(13), l = n(3).default(i.join(__rootDir, "../bin/ThunderHelper.node"));
    !function (e) {
        let t, n;

        function i(e) {
            let t = e;
            return /^[a-zA-Z]:\\/.test(e) ? t = e.slice(0, 3) : e && "\\" !== e[e.length - 1] && (t = e + "\\"), t
        }

        !function (e) {
            e[e.DRIVE_UNKNOWN = 0] = "DRIVE_UNKNOWN", e[e.DRIVE_NO_ROOT_DIR = 1] = "DRIVE_NO_ROOT_DIR", e[e.DRIVE_REMOVABLE = 2] = "DRIVE_REMOVABLE", e[e.DRIVE_FIXED = 3] = "DRIVE_FIXED", e[e.DRIVE_REMOTE = 4] = "DRIVE_REMOTE", e[e.DRIVE_CDROM = 5] = "DRIVE_CDROM", e[e.DRIVE_RAMDISK = 6] = "DRIVE_RAMDISK"
        }(t = e.DriverType || (e.DriverType = {})), function (e) {
            e[e.Unspecified = 0] = "Unspecified", e[e.HDD = 3] = "HDD", e[e.SSD = 4] = "SSD", e[e.SCM = 5] = "SCM"
        }(n = e.MediaType || (e.MediaType = {})), e.getDriveType = function (e) {
            return e = i(e), l.getDriveType(e)
        }, e.getDriveInfo = function (e) {
            return e = i(e), l.getDriveInfo(e)
        }, e.getFreePartitionSpace = function (e) {
            return e = i(e), l.getFreePartitionSpace(e)
        }, e.getLogicalDriveStrings = function () {
            return l.getLogicalDriveStrings()
        }, e.getPartitionSpace = function (e) {
            return e = i(e), l.getPartitionSpace(e)
        }, e.getSystemTempPath = function () {
            return l.getSystemTempPath()
        }, e.getTaskTypeFromUrl = function (e) {
            let t = l.getTaskTypeFromUrl(e);
            if (t === a.DownloadKernel.TaskType.Unkown && function (e) {
                e = e.toLowerCase();
                let t = !1;
                do {
                    if ("http://" === e.substr(0, "http://".length)) {
                        t = !0;
                        break
                    }
                    if ("https://" === e.substr(0, "https://".length)) {
                        t = !0;
                        break
                    }
                    if ("ftp://" === e.substr(0, "ftp://".length)) {
                        t = !0;
                        break
                    }
                } while (0);
                return t
            }(e)) {
                let n = /:\/\/\[(.+?)\].*/.exec(e);
                n || (n = /.+?:\/\/.*?\[(.+?)\].*/.exec(e)), n && n[1] && o.isIPv6(n[1]) && (t = a.DownloadKernel.TaskType.P2sp)
            }
            return t
        }, e.extractIcon = function (e, t) {
            return l.extractIcon(e, t)
        }, e.isWindow7 = function () {
            return 1 === l.isWin7()
        }, e.isWindow8OrLater = function () {
            let e = !1;
            do {
                let t = s.release();
                if (!t) break;
                let n = t.indexOf(".", 0);
                if (n < 0) break;
                let r = t.substring(0, n);
                if (!r) break;
                let i = parseInt(r, 10);
                i && i >= 8 && (e = !0)
            } while (0);
            return e
        }, e.isWindows10 = function () {
            let e = !1;
            do {
                let t = s.release();
                if (!t) break;
                if (0 === t.indexOf("10.0.")) {
                    e = !0;
                    break
                }
            } while (0);
            return e
        }, e.compareStr = function (e, t) {
            return l.compareStr(e, t)
        }, e.getTickCount = function () {
            return l.getTickCount()
        }, e.setScreenSaveActive = function (e) {
            return l.setScreenSaveActive(e)
        }, e.isSparseDriver = function (e) {
            return e = i(e), l.isSparseDriver(e)
        }, e.getAppList = function () {
            return r(this, void 0, void 0, function* () {
                return new Promise(e => {
                    l.getAppList(t => {
                        e(t)
                    })
                })
            })
        }, e.isSSD = function () {
            return r(this, void 0, void 0, function* () {
                return new Promise(e => {
                    l.isSSD((t, n) => {
                        e(n)
                    })
                })
            })
        }, e.getMemoryInfo = function () {
            return r(this, void 0, void 0, function* () {
                return new Promise(e => {
                    l.getMemoryInfo((t, n) => {
                        e({totalPhy: t, totalVir: n})
                    })
                })
            })
        }, e.getHardDiskSpaceList = function () {
            return r(this, void 0, void 0, function* () {
                return new Promise(e => {
                    l.getHardDiskSpaceList(t => {
                        e(t)
                    })
                })
            })
        }, e.getCpuList = function () {
            return r(this, void 0, void 0, function* () {
                return new Promise(e => {
                    l.getCpuList(t => {
                        e(t)
                    })
                })
            })
        }, e.getFixedDriveMediaType = function (e) {
            return r(this, void 0, void 0, function* () {
                return new Promise(t => {
                    e.length > 1 && (e = e.slice(0, 1)), l.getDriveMediaType(e.toUpperCase(), (e, n) => {
                        t(n)
                    })
                })
            })
        }, e.sleep = function (e) {
            return r(this, void 0, void 0, function* () {
                yield new Promise((t, n) => {
                    setTimeout(t, e)
                })
            })
        }
    }(t.ThunderHelper || (t.ThunderHelper = {}))
}, function (e, t, n) {
    "use strict";
    var r = n(4), i = n(94), o = {"Content-Type": "application/x-www-form-urlencoded"};

    function s(e, t) {
        !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }

    var a, l = {
        adapter: ("undefined" != typeof XMLHttpRequest ? a = n(95) : "undefined" != typeof process && (a = n(43)), a),
        transformRequest: [function (e, t) {
            return i(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
        }],
        transformResponse: [function (e) {
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (e) {
            }
            return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function (e) {
            return e >= 200 && e < 300
        }
    };
    l.headers = {common: {Accept: "application/json, text/plain, */*"}}, r.forEach(["delete", "get", "head"], function (e) {
        l.headers[e] = {}
    }), r.forEach(["post", "put", "patch"], function (e) {
        l.headers[e] = r.merge(o)
    }), e.exports = l
}, function (e, t, n) {
    "use strict";
    var r = n(41);
    e.exports = function (e, t, n, i, o) {
        var s = new Error(e);
        return r(s, t, n, i, o)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0), i = n(5), o = n(24), s = n(25);
    !function (e) {
        e.mainProcessContext = "main-process", e.mainRendererContext = "main-renderer", e.mainPageWebviewRendererContext = "main-page-webview-renderer", e.newTaskRendererContext = "new-task-renderer", e.preNewTaskRendererContext = "pre-new-task-renderer", e.loginRendererContext = "login-renderer";

        class t {
            constructor() {
                this.isConnected = !1, this.isOnIPCEvent = !1, this.rendererInfos = [], this.listeners = new Map, t.intervalIPCModuleMsgs = [s.CommonIPCMessage.msgIPCRendererConnect, s.CommonIPCMessage.msgIPCRendererDisconnect]
            }

            onMessage(e, t) {
                do {
                    if (!i.isString(e) || 0 === e.length) {
                        o.error("msgName is null");
                        break
                    }
                    if (i.isNullOrUndefined(t)) {
                        o.error("listener is null");
                        break
                    }
                    this.listeners.has(e) ? this.listeners.get(e).push(t) : this.listeners.set(e, [t])
                } while (0)
            }

            getCommunicatorInfo() {
                return this.currInfo
            }

            getAllRenderer() {
                return this.rendererInfos
            }

            getCommunicatorInfoById(e) {
                for (let t of this.rendererInfos) if (t.id === e) return t;
                return null
            }

            getCommunicatorInfoByContext(e) {
                for (let t of this.rendererInfos) if (t.context === e) return t;
                return null
            }

            startListenIPCMessage(e) {
                this.isOnIPCEvent || (this.isOnIPCEvent = !0, e && this.ListenSendToMainMsg(), this.ListenSendToRendererMsg(e))
            }

            ListenSendToMainMsg() {
                r.ipcMain.on(s.CommonIPCMessage.msgIPCSendToMain, (e, t) => {
                    let n = void 0;
                    do {
                        if (i.isNullOrUndefined(t)) {
                            o.error("msgInfo is empty");
                            break
                        }
                        if (!this.isConnected) {
                            o.warning("hasnot been connected yet");
                            break
                        }
                        let r = t.msg.name;
                        if (this.isIPCModuleIntervalMsg(r)) {
                            o.information(`IPC module interval msg : ${r}`);
                            let i = this.handleIPCModuleIntervalMsg(e.sender, t);
                            if (n = i[1], !i[0]) break;
                            o.information("need to dispatch msg:" + r)
                        }
                        i.isNullOrUndefined(n) ? n = this.NotifyListener(t) : this.NotifyListener(t)
                    } while (0);
                    i.isNullOrUndefined(n) || (e.returnValue = n), t = null
                })
            }

            ListenSendToRendererMsg(e) {
                (e ? r.ipcMain : r.ipcRenderer).on(s.CommonIPCMessage.msgIPCSendToRenderer, (t, n) => {
                    let r = void 0;
                    do {
                        if (i.isNullOrUndefined(n)) {
                            o.error("msgInfo is empty");
                            break
                        }
                        if (!this.isConnected) {
                            o.warning("hasnot been connected yet");
                            break
                        }
                        let s = n.msg.name;
                        if (this.isIPCModuleIntervalMsg(s)) {
                            o.information(`IPC module interval msg : ${s}`);
                            let e = this.handleIPCModuleIntervalMsg(t.sender, n);
                            if (r = e[1], !e[0]) break;
                            o.information("need to dispatch msg:" + s)
                        }
                        e ? (o.information("is main, handle forward msg"), this.handleForwardRendererToRendererMsg(n)) : (o.information("is renderer, handle business msg"), i.isNullOrUndefined(r) ? r = this.NotifyListener(n) : this.NotifyListener(n))
                    } while (0);
                    i.isNullOrUndefined(r) || (t.returnValue = r), n = null
                })
            }

            isIPCModuleIntervalMsg(e) {
                for (let n of t.intervalIPCModuleMsgs) if (e === n) return !0;
                return !1
            }

            handleIPCModuleIntervalMsg(e, t) {
                let n = [!1, void 0];
                do {
                    let r = t.msg.name;
                    if (r === s.CommonIPCMessage.msgIPCRendererConnect) {
                        n = [!0, this.handleRendererConnectMsg(e, t)];
                        break
                    }
                    if (r === s.CommonIPCMessage.msgIPCRendererDisconnect) {
                        n = [!0, this.handleRendererDisconnectMsg(e, t)];
                        break
                    }
                } while (0);
                return n
            }

            handleRendererConnectMsg(e, t) {
                o.verbose(e), o.verbose(t)
            }

            handleRendererDisconnectMsg(e, t) {
                o.verbose(e), o.verbose(t)
            }

            handleForwardRendererToRendererMsg(e) {
                this.sendForwardRendererToRendererMsg(e)
            }

            sendForwardRendererToRendererMsg(e) {
                o.verbose(e)
            }

            NotifyListener(e) {
                let t = void 0, n = e.msg.name;
                if (this.listeners.has(n)) {
                    let r = this.listeners.get(n), i = !0;
                    for (let n of r) i ? (i = !1, t = n(e)) : n(e)
                }
                return t
            }
        }

        e.Communicator = t
    }(t.CommonIPCBase || (t.CommonIPCBase = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.information = function (...e) {
    }, t.error = function (...e) {
    }, t.warning = function (...e) {
    }, t.critical = function (...e) {
    }, t.verbose = function (...e) {
    }, "development" === process.env.LOGGER_ENV && (t.information = function (...e) {
        console.log("information", e)
    }, t.error = function (...e) {
        console.log("error", e)
    }, t.warning = function (...e) {
        console.log("warning", e)
    }, t.critical = function (...e) {
        console.log("critical", e)
    }, t.verbose = function (...e) {
        console.log("verbose", e)
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.msgIPCCommunicatorForward = "ipc_communicator_forward", e.msgIPCSendToMain = "ipc_send_to_main", e.msgIPCSendToRenderer = "ipc_send_to_renderer", e.msgIPCRendererConnect = "ipc_renderer_connect", e.msgIPCRendererDisconnect = "ipc_renderer_disconnect", e.msgNCCallNativeFunction = "nc_call_native_function", e.msgNCCheckNativeFunction = "nc_check_native_function", e.msgNCCallJsFunctionById = "nc_call_js_function_by_id", e.msgNCCallJsFunctionByName = "nc_call_js_function_by_name", e.msgNCNativeFireEvent = "nc_native_fire_event", e.msgNCNativeCallReady = "nc_native_call_ready"
    }(t.CommonIPCMessage || (t.CommonIPCMessage = {}))
}, function (e, t) {
    e.exports = require("net")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.information = ((...e) => {
    }), t.error = ((...e) => {
    }), t.warning = ((...e) => {
    }), t.critical = ((...e) => {
    }), t.verbose = ((...e) => {
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(60);
    "browser" === process.type ? global.xlDesktopApplicationSolution = r.xlDesktopApplicationSolution : (window.xlDesktopApplicationSolution = r.xlDesktopApplicationSolution, process.once("loaded", () => {
        window.xlDesktopApplicationSolution = r.xlDesktopApplicationSolution
    }))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(9), o = (n(10), n(1)), s = n(5);
    let a = null;
    const l = n(11), d = n(0), c = n(2), u = n(3), f = n(8), h = n(30), p = "xdas_profile_stat";
    let m = "", w = void 0, g = null, _ = void 0, v = null,
        b = u.default(o.join(__rootDir, "../bin/ThunderHelper.node")), y = new Set;

    function T() {
        return r(this, void 0, void 0, function* () {
            return new Promise(e => r(this, void 0, void 0, function* () {
                void 0 === _ && (null === v && (v = new Promise(e => {
                    e(_ = function (e) {
                        let t = "";
                        if (0 === e.length && "renderer" === process.type) {
                            let e = o.normalize(decodeURIComponent(window.location.href)),
                                n = e.indexOf(process.resourcesPath);
                            n = n > -1 ? n + process.resourcesPath.length + 1 : n;
                            let r = e.length - 1, i = e.indexOf("?"), s = e.indexOf("#");
                            r = i > -1 ? Math.min(i - 1, r) : r, r = s > -1 ? Math.min(s - 1, r) : r, n > -1 && r >= n && (t = e.substr(n, r - n + 1))
                        }
                        return 0 === t.length && (t = 0 !== e.length ? e : process.type), t = t.replace(/\||,|;/g, "_")
                    }(""))
                })), _ = yield v), e(_)
            }))
        })
    }

    function S(e) {
        let t = "";
        do {
            if (null === e || void 0 === e) break;
            switch (typeof e) {
                case"string":
                    t = e;
                    break;
                case"object":
                    t = s.inspect(e) || "";
                    break;
                case"number":
                case"boolean":
                    t = e.toString() || ""
            }
        } while (0);
        return t
    }

    function C(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function E(e) {
        return r(this, void 0, void 0, function* () {
            return new Promise(t => r(this, void 0, void 0, function* () {
                let r = void 0;
                null === a && (a = yield Promise.resolve().then(() => n(34)));
                let i = a.createHash("md5");
                null !== i && (r = i.update(e).digest("hex")), t(r)
            }))
        })
    }

    function R() {
        return new Promise(e => r(this, void 0, void 0, function* () {
            let t = "";
            t = void 0 === w ? "browser" === process.type ? function () {
                if (void 0 === w) {
                    let e = process.argv.length, t = process.argv;
                    for (let n = 0; n < e; n++) {
                        let e = t[n];
                        if (e.startsWith("-StartType:")) {
                            w = e.substring("-StartType:".length);
                            break
                        }
                    }
                    void 0 === w && (w = "")
                }
                return w
            }() : yield function () {
                return r(this, void 0, void 0, function* () {
                    return null === g && (g = new Promise(e => {
                        d.ipcRenderer.send(f.ThunderChannelList.channelRMGetBrowserStartType), d.ipcRenderer.once(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, (t, n) => {
                            w = n, e(n), g = null
                        })
                    })), g
                })
            }() : w, e(t)
        }))
    }

    function N(e, t, n, i) {
        return r(this, void 0, void 0, function* () {
            let o = S(t), s = S(n), a = yield E(s), d = function (e) {
                let t = new RegExp(C("file:///"), "g"), n = new RegExp(C(process.resourcesPath + "\\"), "g"),
                    r = new RegExp(C(encodeURI(process.resourcesPath.replace(/\\/g, "/") + "/")), "g");
                return e.replace(t, "").replace(n, "").replace(r, "")
            }(S(i)), c = yield E(d), u = `${e}:${a}:${c}`;
            y.has(u) || (y.add(u), l.XLStatNS.trackEvent(p, "uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield T()},code=${o},message_hash=${a},message=${encodeURI(s)},stack_hash=${c},stack=${encodeURI(d)}`)), function (e, t, n, i) {
                return r(this, void 0, void 0, function* () {
                })
            }().catch()
        })
    }

    function O(e) {
        console.error(e);
        let t = e || {};
        N("unhandledRejection", t.code, t instanceof Error ? t.message : t, t.stack).catch()
    }

    !function (e) {
        e.init = function (e) {
            m = e
        }, e.trackColdStartUpEvent = function (e) {
            return r(this, void 0, void 0, function* () {
                let t = b.iSColdStartUp() ? 1 : 0, n = i.release(), r = b.performanceMonitorReporter.getProcessUptime(),
                    o = yield R(), s = `key=${e},start_type=${o},cold_start_up=${t},os_version=${n},cost_time=${r}`;
                l.XLStatNS.trackEvent(p, "cold_start_up", "", 0, 0, 0, 0, s)
            })
        }
    }(t.PerformanceMonitorStatNS || (t.PerformanceMonitorStatNS = {})), function () {
        return r(this, void 0, void 0, function* () {
            if (process.on("uncaughtException", e => {
                console.error(e);
                let t = e || {};
                N("uncaughtException", t.code, t.message, t.stack).catch()
            }), "browser" === process.type) process.on("unhandledRejection", (e, t) => {
                O(e)
            }), d.ipcMain.on(f.ThunderChannelList.channelRMGetBrowserStartType, function (e) {
                return r(this, void 0, void 0, function* () {
                    let t = yield R();
                    e.sender.send(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, t)
                })
            }); else if ("browser" !== process.type) {
                window.addEventListener("unhandledrejection", e => {
                    O(e && e.reason || {})
                });
                let e = yield h.asyncRemoteCall.getCurrentWebContents();
                null !== e && void 0 !== e && e.once("did-finish-load", () => {
                    (function () {
                        return r(this, void 0, void 0, function* () {
                            do {
                                if ("browser" === process.type) break;
                                if (null === window.performance.timing || void 0 === window.performance.timing) break;
                                let e = b.iSColdStartUp() ? 1 : 0, t = i.release(), n = window.performance.timing,
                                    r = n.loadEventEnd - n.navigationStart, o = n.fetchStart - n.navigationStart,
                                    s = n.domainLookupEnd - n.domainLookupStart, a = n.connectEnd - n.connectStart,
                                    d = n.responseStart - n.requestStart, c = n.responseEnd - n.responseStart,
                                    u = n.domComplete - n.domLoading, f = yield R();
                                l.XLStatNS.trackEvent(p, "page_load_time", "", 0, 0, 0, 0, `start_type=${f},cold_start_up=${e},os_version=${t},load_time=${r},before_fetch_time=${o},domin_lookup_time=${s},connect_time=${a},first_response_time=${d},responseTime=${c},domTime=${u},process=${m}`)
                            } while (0)
                        })
                    })().catch()
                })
            }
            c.default.hook("beforeLog", (e, t, ...n) => {
                e === c.LogLevel.Critical && l.XLStatNS.trackEvent(p, "critical_error", "", 0, 0, 0, 0, `module_name=${t},messages=${n}`)
            })
        })
    }().catch()
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(2).default.getLogger("async-remote-call"), o = n(31), s = n(14), a = n(5);
    t.asyncRemoteCall = new class extends s.EventEmitter {
        constructor() {
            super(), this.mapObj = new Map, this.mapObjIniting = new Map, "renderer" !== process.type && i.warning('can not import "renderer-process-call" module in non-renderer process', process.type)
        }

        getAppName() {
            return r(this, void 0, void 0, function* () {
                if (void 0 === this.appName) {
                    let e = yield this.getApp();
                    this.appName = yield e.getName()
                }
                return this.appName
            })
        }

        getAppVersion() {
            return r(this, void 0, void 0, function* () {
                if (void 0 === this.appVersion) {
                    let e = yield this.getApp();
                    this.appVersion = yield e.getVersion()
                }
                return this.appVersion
            })
        }

        getProcess() {
            return r(this, void 0, void 0, function* () {
                return o.global.process.__resolve()
            })
        }

        getIpcMain() {
            return r(this, void 0, void 0, function* () {
                return this.getCurrentObject("ipcMain")
            })
        }

        getDialog() {
            return r(this, void 0, void 0, function* () {
                return this.getCurrentObject("dialog")
            })
        }

        getApp() {
            return r(this, void 0, void 0, function* () {
                return this.getCurrentObject("app")
            })
        }

        getShell() {
            return r(this, void 0, void 0, function* () {
                return this.getCurrentObject("shell")
            })
        }

        getMenu() {
            return r(this, void 0, void 0, function* () {
                return this.getCurrentObject("Menu")
            })
        }

        getScreen() {
            return r(this, void 0, void 0, function* () {
                return this.getCurrentObject("screen")
            })
        }

        getBrowserWindow() {
            return r(this, void 0, void 0, function* () {
                return this.getCurrentObject("BrowserWindow")
            })
        }

        getWebContents() {
            return r(this, void 0, void 0, function* () {
                return this.getCurrentObject("webContents")
            })
        }

        getGlobalShortcut() {
            return r(this, void 0, void 0, function* () {
                return this.getCurrentObject("globalShortcut")
            })
        }

        getCurrentWebContents() {
            return r(this, void 0, void 0, function* () {
                let e = this.mapObj.get("currentWebContents");
                return void 0 === e && (this.mapObjIniting.get("currentWebContents") ? e = yield new Promise(e => r(this, void 0, void 0, function* () {
                    this.on("OnInitCurrentWebContents", t => {
                        e(t)
                    })
                })) : (this.mapObjIniting.set("currentWebContents", !0), e = yield o.getCurrentWebContents().__resolve(), this.mapObjIniting.set("currentWebContents", !1), this.emit("OnInitCurrentWebContents", e), this.listeners("OnInitCurrentWebContents").forEach(e => {
                    this.removeListener("OnInitCurrentWebContents", e)
                })), this.mapObj.set("currentWebContents", e)), e
            })
        }

        getCurrentWindow() {
            return r(this, void 0, void 0, function* () {
                let e = this.mapObj.get("currentWindow");
                return void 0 === e && (this.mapObjIniting.get("currentWindow") ? e = yield new Promise(e => r(this, void 0, void 0, function* () {
                    this.on("OnInitCurrentWindow", t => {
                        e(t)
                    })
                })) : (this.mapObjIniting.set("currentWindow", !0), e = yield o.getCurrentWindow().__resolve(), this.mapObjIniting.set("currentWindow", !1), this.emit("OnInitCurrentWindow", e), this.listeners("OnInitCurrentWindow").forEach(e => {
                    this.removeListener("OnInitCurrentWindow", e)
                })), this.mapObj.set("currentWindow", e)), e
            })
        }

        getCurrentObject(e) {
            return r(this, void 0, void 0, function* () {
                let t = this.mapObj.get(e);
                return a.isNullOrUndefined(t) && (this.mapObjIniting.get(e) ? t = yield new Promise(t => r(this, void 0, void 0, function* () {
                    this.on(e, e => {
                        t(e)
                    })
                })) : (this.mapObjIniting.set(e, !0), t = yield o.electron[e].__resolve(), this.mapObjIniting.set(e, !1), this.emit(e, t), this.listeners(e).forEach(t => {
                    this.removeListener(e, t)
                })), this.mapObj.set(e, t)), t
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    const r = n(12);
    if ("renderer" === process.type) {
        if (r.info("client running"), !global.__xdasAsyncRemoteExports) {
            let e = {};
            global.__xdasAsyncRemoteExports = e;
            let t = n(63);
            e.require = t.remoteRequire, e.getCurrentWebContents = t.getCurrentWebContents, e.getCurrentWindow = t.getCurrentWindow, e.Interest = t.Interest, e.global = new Proxy({}, {get: (e, n, r) => t.getGlobal(n)}), e.electron = new Proxy({}, {get: (e, n, r) => t.getBuiltin(n)}), Object.defineProperty(e, "currentWindow", {get: () => t.getCurrentWindow()}), Object.defineProperty(e, "currentWebContents", {get: () => t.getCurrentWebContents()}), Object.defineProperty(e, "process", {get: () => t.getGlobal("process")}), Object.defineProperty(e, "webContents", {get: () => t.getWebContents()})
        }
    } else if ("browser" === process.type && (r.info("server running"), !global.__xdasAsyncRemoteExports)) {
        let e = {};
        global.__xdasAsyncRemoteExports = e;
        const t = n(68);
        t.startServer(), e.getObjectRegistry = t.getObjectRegistry
    }
    e.exports = global.__xdasAsyncRemoteExports
}, function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t, n;
        !function (e) {
            e.require = "AR_BROWSER_REQUIRE", e.builtIn = "AR_BROWSER_GET_BUILTIN", e.global = "AR_BROWSER_GET_GLOBAL", e.functionCall = "AR_BROWSER_FUNCTION_CALL", e.construct = "AR_BROWSER_CONSTRUCTOR", e.memberConstruct = "AR_BROWSER_MEMBER_CONSTRUCTOR", e.memberCall = "AR_BROWSER_MEMBER_CALL", e.memberSet = "AR_BROWSER_MEMBER_SET", e.memberGet = "AR_BROWSER_MEMBER_GET", e.currentWindow = "AR_BROWSER_CURRENT_WINDOW", e.currentWebContents = "AR_BROWSER_CURRENT_WEB_CONTENTS", e.clientWebContents = "AR_BROWSER_CLIENT_WEB_CONTENTS", e.webContents = "AR_BROWSER_WEB_CONTENTS", e.sync = "AR_BROWSER_SYNC", e.contextRelease = "AR_BROWSER_CONTEXT_RELEASE"
        }(t = e.browser || (e.browser = {})), function (e) {
            e.requireReturn = "AR_RENDERER_REQUIRE_RETURN", e.getBuiltInReturn = "AR_RENDERER_BUILTIN_RETURN", e.getGlobalReturn = "AR_RENDERER_GLOBAL_RETURN", e.functionCallReturn = "AR_RENDERER_FUNCTION_CALL_RETURN", e.memberConstructReturn = "AR_RENDERER_MEMBER_CONSTRUCTOR_RETURN", e.constructReturn = "AR_RENDERER_CONSTRUCTOR_RETURN", e.memberCallReturn = "AR_RENDERER_MEMBER_CALL_RETURN", e.memberSetReturn = "AR_RENDERER_MEMBER_SET_RETURN", e.memberGetReturn = "AR_RENDERER_MEMBER_GET_RETURN", e.currentWindowReturn = "AR_BROWSER_CURRENT_WINDOW_RETURN", e.currentWebContentsReturn = "AR_RENDERER_CURRENT_WEB_CONTENTS_RETURN", e.clientWebContentsReturn = "AR_RENDERER_CLIENT_WEB_CONTENTS_RETURN", e.webContentsReturn = "AR_RENDERER_WEB_CONTENTS_RETURN", e.syncReturn = "AR_RENDERER_SYNC_RETURN", e.callback = "AR_RENDERER_CALLBACK"
        }(n = e.renderer || (e.renderer = {}))
    }(r || (r = {})), t.default = r
}, function (e, t, n) {
    "use strict";
    var r;
    !function (e) {
        e.getRemoteObjectName = function (e) {
            let t = typeof e;
            if ("function" === t) t = e.name; else if ("object" === t) {
                let t = e.name;
                if ("string" != typeof t) {
                    let n = e.constructor;
                    t = n ? n.name : Object.toString.call(e)
                }
            }
            return t
        }, e.isPromise = function (e) {
            return e && e.then && e.then instanceof Function && e.constructor && e.constructor.reject && e.constructor.reject instanceof Function && e.constructor.resolve && e.constructor.resolve instanceof Function
        }
    }(r || (r = {})), e.exports = r
}, function (e, t) {
    e.exports = require("crypto")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t;
        !function (e) {
            e[e.OK = 0] = "OK", e[e.Cancel = 1] = "Cancel", e[e.Close = 2] = "Close", e[e.Unknow = 3] = "Unknow"
        }(t = e.Action || (e.Action = {}))
    }(t.MessageBoxNS || (t.MessageBoxNS = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(30), s = n(8);
    !function (e) {
        e.resizeToFitContent = function (e = 0, t = 0, n) {
            return r(this, void 0, void 0, function* () {
                let r = yield o.asyncRemoteCall.getCurrentWindow();
                if (e > 0 && t > 0) window.resizeTo(e, t); else {
                    let e = document.querySelector(".td-dialog");
                    window.resizeTo(e.offsetWidth, e.offsetHeight)
                }
                n && "function" == typeof n && n(), window.requestIdleCallback(() => {
                    r.show()
                })
            })
        }, e.autoAdaptScrollIntoView = function (e, t, n) {
            let r = t.scrollTop, i = t.getBoundingClientRect(), o = e.getBoundingClientRect(), s = i.bottom;
            void 0 !== n && "number" == typeof n && n > 0 && (s = i.top + n), o.top < i.top ? t.scrollTop = r - (i.top - o.top) : o.bottom > s && (t.scrollTop = r + (o.bottom - s))
        }, e.fitWindowPosInParent = function (e, t) {
            return r(this, void 0, void 0, function* () {
                e || (e = yield o.asyncRemoteCall.getCurrentWindow()), t || (t = yield e.getParentWindow());
                let n = (yield e.getNativeWindowHandle()).readUIntLE(0, 4),
                    r = (yield t.getNativeWindowHandle()).readUIntLE(0, 4);
                i.ipcRenderer.sendSync(s.ThunderChannelList.channelRMSetPosition, n, r)
            })
        }, e.getWindowsInParentCenterPos = function (e, t, n) {
            return r(this, void 0, void 0, function* () {
                n || "browser" === process.type || (n = yield o.asyncRemoteCall.getCurrentWindow());
                let r = "browser" !== process.type ? yield n.getPosition() : n.getPosition(),
                    s = "browser" !== process.type ? yield n.getSize() : n.getSize(),
                    a = "browser" !== process.type ? yield o.asyncRemoteCall.getScreen() : i.screen,
                    l = yield a.getCursorScreenPoint(), d = yield a.getDisplayNearestPoint(l), c = d.size.width,
                    u = d.size.height, f = s[0], h = s[1];
                r[0] + f > c && (f = c - r[0]), r[1] + h > u && (h = u - r[1]);
                let p = r[0] + (f - e) / 2, m = r[1] + (h - t) / 2;
                return p < 0 ? p = 0 : p > c - e && (p = c - e), m < 0 ? m = 0 : m > u - t && (m = u - t), [Math.round(p), Math.round(m)]
            })
        }, e.centerWnd = function (e, t, n) {
            do {
                if ("browser" !== process.type) break;
                if (!e || !t) break;
                let r = e.getNativeWindowHandle().readUIntLE(0, 4);
                if (!r) break;
                let o = t.getPosition(), s = t.getSize(), a = e.getSize(), l = i.screen.getCursorScreenPoint(),
                    d = i.screen.getDisplayNearestPoint(l), c = d.scaleFactor, u = d.size.width, f = d.size.height,
                    h = s[0], p = s[1];
                o[0] + h > u && (h = u - o[0]), o[1] + p > f && (p = f - o[1]);
                let m = o[0] + (h - a[0]) / 2, w = o[1] + (p - a[1]) / 2;
                m < 0 ? m = 0 : m > u - a[0] && (m = u - a[0]), w < 0 ? w = 0 : w > f - a[1] && (w = f - a[1]), n.setWindowPos(r, 0, m * c, w * c, 0, 0, 5)
            } while (0)
        }, e.bringWindowToTop = function (e) {
            return r(this, void 0, void 0, function* () {
                if (!e) {
                    let t = yield(yield o.asyncRemoteCall.getCurrentWindow()).getNativeWindowHandle();
                    e = t.readUIntLE(0, 4)
                }
                i.ipcRenderer.send(s.ThunderChannelList.channelMRBringWindowToTop, e)
            })
        }
    }(t.ThunderWindowNS || (t.ThunderWindowNS = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(10), s = n(1), a = n(6), l = n(11), d = n(2), c = n(36), u = n(8), f = n(7), h = n(38),
        p = n(19), m = n(17), w = n(87), g = n(35), _ = n(29), v = d.default.getLogger("ThunderNewTask"), b = 860;
    const y = new class {
        constructor() {
            this.parent = null, this.helperObj = null, this.inited = !1, this.isReady = !1, this.preNewTaskWindow = null, this.newTaskWindow = null, this.btUrlTaskWindowsMap = {}, this.startupMap = {}
        }

        setReady(e) {
            this.isReady = e
        }

        init(e, t) {
            this.inited ? this.parent || (this.parent = e) : (this.inited = !0, this.parent = e, this.helperObj = t, i.ipcMain.on(u.ThunderChannelList.channelRMRoundWindow, (e, t, n, r) => {
                this.helperObj.attachShadowWindow(t, n, r)
            }), i.ipcMain.on("create-pre-new-task-window", (e, ...t) => r(this, void 0, void 0, function* () {
                let e = void 0, n = void 0;
                if (t[0]) try {
                    e = JSON.parse(t[0])
                } catch (e) {
                }
                if (t[4]) try {
                    n = JSON.parse(t[4])
                } catch (e) {
                }
                let r = t[1], i = t[2], o = t[3];
                this.createPreNewTaskWindow(e, r, i, o, n).catch()
            })), i.ipcMain.on("create-bt-task-window", (e, ...t) => {
                let n = void 0;
                if (t[0]) try {
                    n = JSON.parse(t[0])
                } catch (e) {
                }
                let r = {};
                if (t[1]) try {
                    r = JSON.parse(t[1])
                } catch (e) {
                    r = {}
                }
                if (n) {
                    let e = this.btUrlTaskWindowsMap[n.url ? n.url : n.seedFile];
                    e && !e.isDestroyed() ? (r && "clipboard" !== r.source && this.bringMainWindowToTop(!1).catch(), e.isVisible() && e.show()) : this.createBtTaskWindow(n, r).catch()
                }
            }), i.ipcMain.on("create-new-task-window", (e, ...t) => {
                let n = [];
                if (t[0]) try {
                    n = JSON.parse(t[0])
                } catch (e) {
                }
                n.length > 0 && this.createNewTaskWindow(n).catch()
            }))
        }

        autoTestSave(e = "autotesttaskshow.txt") {
            do {
                if (this.startupMap.hasOwnProperty(e)) break;
                if (this.startupMap[e] = !0, !process.argv.includes("--autotest:startup")) break;
                let t = new Date;
                o.writeFile(s.join(__rootDir, `..\\..\\${e}`), `${t.getTime()}`, e => {
                    e && v.information(e)
                })
            } while (0)
        }

        ipcMainGetConfigValueAW(e, t, n) {
            return r(this, void 0, void 0, function* () {
                return yield a.client.callServerFunction("GetConfigValue", e, t, n)
            })
        }

        bringMainWindowToTop(e) {
            return r(this, void 0, void 0, function* () {
                e = void 0 === e || e;
                do {
                    if (e && !(yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0))) break;
                    this.isReady && (null === this.parent || this.parent.isDestroyed() || (this.parent.isMinimized() && this.parent.restore(), this.parent.isVisible() ? this.parent.focus() : this.parent.show(), yield m.ToolsUtilitiesAWNS.setForegroundWindow(this.helperObj, this.parent)))
                } while (0)
            })
        }

        changeUrllistToNewTaskData(e, t) {
            return r(this, void 0, void 0, function* () {
                if (void 0 !== e && null !== e && void 0 !== e[0] && "string" == typeof e[0]) {
                    1 === e.length && (e = e[0].split(/[\n\r\n]/));
                    let n = [];
                    for (let r of e) {
                        let e = w.ThunderNewtaskHelperNS.getNewTaskDataByUrl(r, t);
                        void 0 !== e && n.push(e)
                    }
                    n.length > 0 && (e = n)
                }
                return e
            })
        }

        sendTaskDataToPreNewTaskRenderer(e, t, n, r, i) {
            this.preNewTaskWindow && this.preNewTaskWindow.webContents.send(u.ThunderChannelList.channelRMPreNewTaskSetTaskData, e, t, n, r, i)
        }

        createPreNewTaskWindow(e, t, n, o, s, d = !0) {
            return r(this, void 0, void 0, function* () {
                do {
                    if (null === this.preNewTaskWindow) {
                        let d = 320, m = d, w = 500, _ = [void 0, void 0];
                        e && e.length > 0 ? m = 525 : _ = yield c.ThunderWindowNS.getWindowsInParentCenterPos(w, m, this.parent), this.preNewTaskWindow = new i.BrowserWindow({
                            x: _[0],
                            y: _[1],
                            width: w,
                            height: m,
                            frame: !1,
                            resizable: !0,
                            alwaysOnTop: !0,
                            show: !1,
                            modal: !1,
                            minimizable: !1,
                            maximizable: !1,
                            minWidth: w,
                            minHeight: d,
                            maxWidth: b,
                            backgroundColor: "#FFF",
                            webPreferences: {
                                devTools: !1,
                                spellcheck: !1,
                                nodeIntegration: !0,
                                webSecurity: "development" !== process.env.RUN_ENV
                            }
                        });
                        let y = "development" === process.env.RUN_ENV ? "http://localhost:9080/pre-new-task-renderer/" : `file:///${__dirname}/pre-new-task-renderer/index.html`;
                        e && (y = h.ThunderUtil.setQueryString(y, {hasTask: "1"})), t && (y = h.ThunderUtil.setQueryString(y, {from: t})), this.preNewTaskWindow.loadURL(y).catch(), this.preNewTaskWindow.once("show", () => {
                            f.roundRectWindow(this.preNewTaskWindow)
                        }), this.preNewTaskWindow.on("ready-to-show", () => r(this, void 0, void 0, function* () {
                            if (e) if (e = yield this.changeUrllistToNewTaskData(e, t)) if (e.length <= 5) this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), n, o, s); else {
                                let t = JSON.stringify(e.slice(0, 5));
                                if (this.sendTaskDataToPreNewTaskRenderer(t, n, o, s, !0), void 0 !== (e = e.splice(5)) && e.length > 0) {
                                    let t = 100, r = Math.ceil(e.length / 100);
                                    r > 1 && (t = 100 * (r > 10 ? 10 : r)), setTimeout(() => {
                                        this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), n, o, s)
                                    }, t)
                                }
                            } else this.preNewTaskWindow.show(); else this.sendTaskDataToPreNewTaskRenderer(void 0, n, o, s);
                            let r = "source=Thunder,panel=PreNewTaskDlg";
                            l.XLStatNS.trackEvent("core_event", "create_task_panel_show", "", 0, 0, 0, 0, r), v.information("trackEvent", "core_event", "create_task_panel_show", r)
                        })), this.preNewTaskWindow.on("close", () => {
                            do {
                                if (a.client.callServerFunction("ClosePopMutual", p.PopView.PRE_NEW_TASK).catch(), null === this.parent || this.parent.isDestroyed()) break;
                                this.parent && this.parent.focus()
                            } while (0)
                        }), this.preNewTaskWindow.on("hide", () => {
                            this.parent && !this.parent.isDestroyed() && this.parent.focus()
                        }), this.preNewTaskWindow.on("closed", () => {
                            this.preNewTaskWindow = null
                        }), i.ipcMain.once(u.ThunderChannelList.channelRMPreNewTaskClose, (e, t) => r(this, void 0, void 0, function* () {
                            do {
                                if (this.preNewTaskWindow = null, null === this.parent || this.parent.isDestroyed()) break;
                                t === g.MessageBoxNS.Action.OK && (yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0)) && this.bringMainWindowToTop(!1).catch()
                            } while (0)
                        }))
                    } else {
                        if (o && "" !== o) break;
                        if ((e = yield this.changeUrllistToNewTaskData(e, t)) && this.preNewTaskWindow) do {
                            if (this.preNewTaskWindow.isVisible()) {
                                this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), n, o, s), this.preNewTaskWindow.show();
                                break
                            }
                            if ("clipboard" === t) {
                                let t = this.preNewTaskWindow.getParentWindow();
                                if (t && t.isMinimized()) {
                                    this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), n, o, s), this.preNewTaskWindow.show();
                                    break
                                }
                            }
                            this.preNewTaskWindow.once("show", () => {
                                this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), n, o, s)
                            })
                        } while (0)
                    }
                } while (0)
            })
        }

        createBtTaskWindow(e, t = {}) {
            return r(this, void 0, void 0, function* () {
                let n = "development" === process.env.RUN_ENV ? "http://localhost:9080/bt-task-renderer/" : `file:///${__dirname}/bt-task-renderer/index.html`;
                t && t.clickFrom && (n = h.ThunderUtil.setQueryString(n, {from: t.clickFrom}));
                let o = 614;
                "url" !== e.type && void 0 !== e.data || (o = 150);
                let s = yield c.ThunderWindowNS.getWindowsInParentCenterPos(500, o, this.parent),
                    l = ["newwindow_bt"].includes(t.source), d = "clipboard" !== t.source ? this.parent : null,
                    m = new i.BrowserWindow({
                        x: l ? s[0] : null,
                        y: l ? s[1] : null,
                        width: 500,
                        height: o,
                        frame: !1,
                        resizable: !0,
                        parent: d,
                        alwaysOnTop: !0,
                        minimizable: !1,
                        maximizable: !1,
                        show: !1,
                        modal: !1,
                        minWidth: 500,
                        minHeight: 150,
                        maxWidth: b,
                        backgroundColor: "#FFF",
                        webPreferences: {
                            spellcheck: !1,
                            nodeIntegration: !0,
                            webSecurity: "development" !== process.env.RUN_ENV
                        }
                    }), w = e.url ? e.url : e.seedFile;
                this.btUrlTaskWindowsMap[w] = m, m.loadURL(n).catch(), m.once("show", () => {
                    f.roundRectWindow(m, d)
                }), m.on("ready-to-show", () => {
                    m.webContents.send(u.ThunderChannelList.channelRMNewTaskSetBTInfo, m.id, e, t)
                }), m.on("close", () => {
                    a.client.callServerFunction("ClosePopMutual", p.PopView.BT_NEW_TASK).catch();
                    do {
                        if (null === this.parent || this.parent.isDestroyed()) break;
                        this.parent.focus()
                    } while (0)
                }), m.on("closed", () => r(this, void 0, void 0, function* () {
                    delete this.btUrlTaskWindowsMap[e.url]
                }))
            })
        }

        createNewTaskWindow(e, t = !0) {
            return r(this, void 0, void 0, function* () {
                do {
                    if (0 === e.length) break;
                    let n = "5";
                    t && (n = yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "OrignHostThreads", "5"));
                    let o = Number(n);
                    if (e = e.map(e => (e.thread && "number" == typeof e.thread || (e.thread = o), e)), null !== this.newTaskWindow) {
                        this.newTaskWindow.isVisible() ? this.newTaskWindow.webContents.send(u.ThunderChannelList.channelRMNewTaskSetTaskData, JSON.stringify(e)) : this.newTaskWindow.once("show", () => {
                            t || (this.autoTestSave(), _.PerformanceMonitorStatNS.trackColdStartUpEvent("show_of_newtaskwindow_in_main").catch()), this.newTaskWindow.webContents.send(u.ThunderChannelList.channelRMNewTaskSetTaskData, JSON.stringify(e))
                        });
                        break
                    }
                    let s = "development" === process.env.RUN_ENV ? "http://localhost:9080/new-task-renderer/" : `file:///${__dirname}/new-task-renderer/index.html`;
                    s = 1 === e.length ? h.ThunderUtil.setQueryString(s, {type: "single"}) : h.ThunderUtil.setQueryString(s, {type: "multi"});
                    let d = 340, c = 500;
                    this.newTaskWindow = new i.BrowserWindow({
                        width: c,
                        height: d,
                        frame: !1,
                        resizable: !0,
                        show: !1,
                        minimizable: !1,
                        maximizable: !1,
                        alwaysOnTop: !0,
                        minWidth: c,
                        minHeight: d,
                        maxWidth: b,
                        backgroundColor: "#FFF",
                        webPreferences: {
                            spellcheck: !1,
                            nodeIntegration: !0,
                            webSecurity: "development" !== process.env.RUN_ENV
                        }
                    }), v.information("create new task browser window created");
                    let m = 5, w = (() => r(this, void 0, void 0, function* () {
                        let t = {info: "", isPartial: !1};
                        if (e.length > 100) {
                            let n = e.slice(0, m);
                            t.info = JSON.stringify(n), t.isPartial = !0
                        } else t.info = JSON.stringify(e), t.isPartial = !1;
                        return t
                    }))();
                    i.ipcMain.once(u.ThunderChannelList.channelRMNewTaskReadyForSetTaskData, t => {
                        w.then(n => {
                            if (null !== n && t.sender.send(u.ThunderChannelList.channelRMNewTaskSetTaskData, n.info, n.isPartial), n.isPartial) {
                                let t = 100, n = Math.ceil(e.length / 100);
                                n > 1 && (t = 100 * (n > 10 ? 10 : n));
                                let r = e.splice(m);
                                setTimeout(() => {
                                    null !== this.newTaskWindow && this.newTaskWindow.webContents.send(u.ThunderChannelList.channelRMNewTaskSetTaskData, JSON.stringify(r), !1)
                                }, t)
                            }
                        }).catch()
                    }), this.newTaskWindow.once("show", () => {
                        t || (this.autoTestSave(), _.PerformanceMonitorStatNS.trackColdStartUpEvent("show_of_newtaskwindow_in_main").catch()), f.roundRectWindow(this.newTaskWindow), l.XLStatNS.trackEvent("core_event", "create_task_panel_show", "", 0, 0, 0, 0, "source=Thunder,panel=NewTaskDlg"), v.information("trackEvent", "core_event", "create_task_panel_show", "source=Thunder,panel=NewTaskDlg"), v.information("create new task browser window ready to show")
                    }), this.newTaskWindow.on("ready-to-show", () => r(this, void 0, void 0, function* () {
                    })), this.newTaskWindow.on("close", () => {
                        a.client.callServerFunction("ClosePopMutual", p.PopView.NEW_TASK).catch();
                        do {
                            if (null === this.parent || this.parent.isDestroyed()) break
                        } while (0)
                    }), this.newTaskWindow.on("closed", () => {
                        this.newTaskWindow = null
                    }), i.ipcMain.once(u.ThunderChannelList.channelRMNewTaskClose, (e, t) => r(this, void 0, void 0, function* () {
                        this.newTaskWindow = null;
                        do {
                            if (null === this.parent || this.parent.isDestroyed()) break;
                            t !== g.MessageBoxNS.Action.OK || (yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0)) && (this.parent && this.parent.focus(), this.bringMainWindowToTop(!1).catch())
                        } while (0)
                    })), this.newTaskWindow.loadURL(s).catch()
                } while (0)
            })
        }
    };
    !function (e) {
        e.instance = function () {
            return y
        }, e.init = function (e, t) {
            y.init(e, t)
        }, e.setReady = function (e) {
            y.setReady(e)
        }
    }(t.NewTaskDlgsManagerNS || (t.NewTaskDlgsManagerNS = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(1), s = n(2), a = n(18), l = n(20), d = s.default.getLogger("Thunder.Util"),
        c = "Thunder Network\\Thunder7.9\\";

    function u(e) {
        let t = e;
        return 0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 ? t = e.substring(1, e.length - 1) : 0 === e.indexOf("'") && e.lastIndexOf("'") === e.length - 1 && (t = e.substring(1, e.length - 1)), t
    }

    !function (e) {
        function t() {
            let e = l.ThunderHelper.getSystemTempPath(), t = l.ThunderHelper.getLogicalDriveStrings(), n = 0;
            for (let r = 0; r < t.length; r++) {
                if (l.ThunderHelper.getDriveType(t[r]) === l.ThunderHelper.DriverType.DRIVE_FIXED) {
                    let i = l.ThunderHelper.getDriveInfo(t[r]);
                    n < i.freeBytes && t[r] !== e && (n = i.freeBytes, e = t[r])
                }
            }
            return e.substring(0, 1) + ":\\迅雷下载"
        }

        function s(e) {
            let t = (e.style.webkitTransform || getComputedStyle(e, "").getPropertyValue("-webkit-transform") || e.style.transform || getComputedStyle(e, "").getPropertyValue("transform")).match(/\-?[0-9]+\.?[0-9]*/g);
            return {x: parseInt(t && (t[12] || t[4]) || "0", 10), y: parseInt(t && (t[13] || t[5]) || "0", 10)}
        }

        e.formatSize = function (e, t) {
            0 === t || (t = t || 2);
            let n = "0B";
            if ("number" == typeof e && e > 0) {
                let r = ["B", "KB", "MB", "GB", "TB"], i = 0, o = e;
                for (; o >= 1e3 && !(i >= 4);) o /= 1024, i += 1;
                n = -1 === String(o).indexOf(".") ? o + r[i] : o.toFixed(t) + r[i]
            }
            return n
        }, e.formatSizeCustom = function (e, t = 2, n = 5) {
            let r = "0B";
            if ("number" == typeof e && e > 0) {
                let i = ["B", "KB", "MB", "GB", "TB"], o = 0, s = e;
                for (; s >= 1e3 && !(o >= 4);) s /= 1024, o += 1;
                if (-1 === String(s).indexOf(".")) r = s + i[o]; else {
                    let e = s.toFixed(t);
                    e.length <= n ? r = "KB" !== i[o] && "MB" !== i[o] || 1 === t ? e + i[o] : s.toFixed(1) + i[o] : ("." === (e = e.substr(0, n))[n - 1] && (e = e.substr(0, n - 1)), r = e + i[o])
                }
            }
            return r
        }, e.isDigital = function (e) {
            let t = !1;
            return /^\d+$/.test(e) && (t = !0), t
        }, e.isAlpha = function (e) {
            let t = !1;
            return /[A-Za-z]/.test(e) && (t = !0), t
        }, e.isUpperCase = function (e) {
            let t = !1;
            return /[A-Z]/.test(e) && (t = !0), t
        }, e.isLowerCase = function (e) {
            let t = !1;
            return /[a-z]/.test(e) && (t = !0), t
        }, e.isChinese = function (e) {
            let t = !1;
            return /[\u4E00-\u9FA5]/.test(e) && (t = !0), t
        }, e.replaceNonDigital = function (e) {
            return e.replace(/[^\d]/g, "")
        }, e.replaceNonAlpha = function (e) {
            return e.replace(/[^A-Za-z]/g, "")
        }, e.replaceNonWord = function (e) {
            return e.replace(/[^\W]/g, "")
        }, e.getDefaultDownloadDir = t, e.getMaxFreeDriver = function () {
            return t().substring(0, 1)
        }, e.deepCopy = function (e) {
            let t = JSON.stringify(e), n = null;
            try {
                n = JSON.parse(t)
            } catch (e) {
                d.warning(e)
            }
            return n
        }, e.swap = function (e, t, n) {
            do {
                if (t < 0 || t >= e.length) break;
                if (n < 0 || n >= e.length) break;
                if (t === n) break;
                e[t] = e.splice(n, 1, e[t])[0]
            } while (0);
            return e
        }, e.compareNocase = function (e, t) {
            let n = !1;
            do {
                if (void 0 === e && void 0 === t) {
                    n = !0;
                    break
                }
                if (void 0 === e || void 0 === t) break;
                if ("string" != typeof e || "string" != typeof t) break;
                n = e.toLowerCase() === t.toLowerCase()
            } while (0);
            return n
        }, e.parseCommandLine = function (e) {
            let t = 0, n = "", r = !1, i = [], o = e.length;
            for (let s = 0; s < o; s++) {
                let a = e[s];
                if ('"' !== a && "'" !== a || ("" === n ? (r = !0, n = a) : n === a && (r = !1, n = "")), " " !== a || r || s === o - 1) {
                    if (s === o - 1) {
                        let n = e.substring(t);
                        "" !== n.trim() && i.push(u(n))
                    }
                } else {
                    let n = e.substring(t, s);
                    "" !== n.trim() && i.push(u(n)), t = s + 1
                }
            }
            return i
        }, e.getThunderTempPath = function (e, t) {
            return r(this, void 0, void 0, function* () {
                const r = yield Promise.resolve().then(() => n(9));
                let i = o.join(r.tmpdir(), c);
                return t && (i = o.join(i, t)), void 0 !== e && e && (yield a.FileSystemAWNS.mkdirsAW(i)), i
            })
        }, e.setQueryString = function (e, t) {
            return Object.keys(t).forEach((n, r) => {
                e += 0 === r ? "?" : "&", e += `${n}=${t[n]}`
            }), e
        }, e.setQueryStringEx = function (e, t) {
            for (let n in t) e += -1 === e.indexOf("?") ? "?" : "&", e += `${n}=${t[n]}`;
            return e
        }, e.getQueryString = function (e, t) {
            return e && t && e.match(new RegExp(`(^${t}|[?|&]${t})=([^&#]+)`)) ? RegExp.$2 : ""
        }, e.isClipboardTextFormatAvailable = function () {
            let e = !1, t = i.clipboard.availableFormats();
            for (let n of t) if ("text/plain" === n) {
                e = !0;
                break
            }
            return e
        }, e.keywordsHighLight = function (e, t, n) {
            if (!e) return "";
            if (!t) return e;
            if (0 === e.length) return e;
            if (0 === t.length) return e;
            let r = /\\/, i = t.split(" ");
            if (0 === (i = i.filter(e => e.trim().length > 0)).length) return e;
            for (let t = 0; t < i.length; t++) if (i[t].search(r) > 0) return e;
            n = void 0 === n || null === n ? "#FF0000" : n;
            let o = "", s = ["\\[", "\\^", "\\*", "\\(", "\\)", "\\|", "\\?", "\\$", "\\.", "\\+"], a = "", l = "|";
            for (let e = 0; e < i.length; e++) {
                for (let t = 0; t < s.length; t++) {
                    let n = new RegExp(s[t], "g");
                    i[e] = i[e].replace(n, s[t])
                }
                e === i.length - 1 && (l = ""), a = a.concat(i[e], l)
            }
            let d = new RegExp(a, "gi");
            return o = e.replace(d, e => '<span style= "color:' + n + '">' + e + "</span>")
        }, e.isDef = function (e) {
            return void 0 !== e && null !== e
        }, e.isUndef = function (e) {
            return void 0 === e || null === e
        }, e.setStyle = function (e, t) {
            Object.entries(t).forEach(([t, n]) => {
                e.style[t] = n
            })
        }, e.setCSSProperties = function (e, t) {
            Object.entries(t).forEach(([t, n]) => {
                e.style.setProperty(t, n)
            })
        }, e.versionCompare = function (e, t) {
            let n = e.split("."), r = t.split("."), i = 0;
            for (let e = 0; e < n.length; e++) {
                if (Number(n[e]) - Number(r[e]) > 0) {
                    i = 1;
                    break
                }
                if (Number(n[e]) - Number(r[e]) < 0) {
                    i = -1;
                    break
                }
            }
            return i
        }, e.throttle = function (e, t) {
            let n, r = 0;
            return (...i) => {
                const o = Date.now();
                clearTimeout(n), o - r > t ? (e(...i), r = o) : n = setTimeout(() => {
                    e(...i), r = o
                }, t)
            }
        }, e.debounce = function (e, t) {
            let n = null;
            return (...r) => {
                n && clearTimeout(n), n = setTimeout(() => {
                    e(...r)
                }, t)
            }
        }, e.getElementFixed = function (e) {
            let t = e.offsetLeft, n = e.offsetTop, r = e.offsetParent;
            for (; null !== r;) {
                let e = s(r);
                t += r.offsetLeft + e.x, n += r.offsetTop + e.y, r = r.offsetParent
            }
            return {x: t, y: n}
        }, e.escapeHTML = function (e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        }, e.unescapeHTML = function (e) {
            return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'")
        }, e.isValidPath = function (e) {
            let t = !1;
            do {
                let n = "", r = "";
                if (/^[a-zA-Z]:\\/.test(e)) n = e.slice(3); else {
                    if (0 !== e.indexOf("\\\\")) break;
                    {
                        let t = e.indexOf("\\", 2);
                        if (-1 === t || t === e.length - 1) break;
                        if ("" === (r = (n = e.slice(2)).substr(0, t - 2))) break
                    }
                }
                if (/[\*\"<>\?:\|]/i.test(n)) break;
                if (e.length > 256) break;
                if ("" === r) {
                    t = !0;
                    break
                }
                let i = r.indexOf(".ipv6-literal.net");
                -1 !== i ? (-1 !== (i = (r = r.substr(0, i)).indexOf("%")) && (r = r.substr(0, i)), r = r.replace(/\-/g, ":"), /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(r) && (t = !0)) : /(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))/.test(r) && (t = !0)
            } while (0);
            return t
        };
        let f = void 0;

        function h(e, t = "normal 12px sans-serif") {
            f || (f = document.createElement("canvas"));
            let n = f.getContext("2d");
            return n.font = t, n.measureText(e).width
        }

        function p(e, t, n = "normal 12px sans-serif", r = 1) {
            function i(e, t, r, o, s) {
                let a = -1;
                do {
                    if (e > t) {
                        a = t;
                        break
                    }
                    let l = Math.round((e + t) / 2), d = h(`${r.substr(0, l)}...${o}`, n);
                    if (s === d) {
                        a = l;
                        break
                    }
                    if (s > d) {
                        if (Math.round(s) === Math.round(d)) {
                            a = l;
                            break
                        }
                        a = i(l + 1, t, r, o, s)
                    } else if (d > s) {
                        if (Math.round(s) === Math.round(d)) {
                            a = l - 1;
                            break
                        }
                        a = i(e, l - 1, r, o, s)
                    }
                } while (0);
                return a
            }

            let s = e;
            do {
                if (!t) break;
                if (!e) break;
                let a = t.offsetWidth * r;
                if (a > h(e, n)) break;
                let l = o.extname(e);
                "" !== l && (l = l.substring(1));
                let d = e.substr(0, e.length - l.length - 1);
                if (!d) break;
                let c = i(0, d.length, d, l, a);
                if (-1 === c) break;
                s = `${d.substr(0, c - 2 * (r - 1))}...${l}`
            } while (0);
            return s
        }

        e.getTextWidth = h, e.getOmitName = p, e.getOmitNameMultiLine = function (e, t, n) {
            return p(e, t, "normal 12px microsoft yahei", 2)
        }, e.setTimeoutAw = function (e, t) {
            return new Promise((n, r) => {
                setTimeout(() => {
                    t && t(), n()
                }, e)
            })
        }
    }(t.ThunderUtil || (t.ThunderUtil = {}))
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(22);
    e.exports = function (e, t, n) {
        var i = n.config.validateStatus;
        n.status && i && !i(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, i) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = i, e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4);

    function i(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    e.exports = function (e, t, n) {
        if (!t) return e;
        var o;
        if (n) o = n(t); else if (r.isURLSearchParams(t)) o = t.toString(); else {
            var s = [];
            r.forEach(t, function (e, t) {
                null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function (e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(i(t) + "=" + i(e))
                }))
            }), o = s.join("&")
        }
        return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4), i = n(40), o = n(42), s = n(44), a = n(45), l = n(46).http, d = n(46).https, c = n(47), u = n(109),
        f = n(110), h = n(22), p = n(41);
    e.exports = function (e) {
        return new Promise(function (t, n) {
            var m, w = e.data, g = e.headers;
            if (g["User-Agent"] || g["user-agent"] || (g["User-Agent"] = "axios/" + f.version), w && !r.isStream(w)) {
                if (Buffer.isBuffer(w)) ; else if (r.isArrayBuffer(w)) w = new Buffer(new Uint8Array(w)); else {
                    if (!r.isString(w)) return n(h("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", e));
                    w = new Buffer(w, "utf-8")
                }
                g["Content-Length"] = w.length
            }
            var _ = void 0;
            e.auth && (_ = (e.auth.username || "") + ":" + (e.auth.password || ""));
            var v = c.parse(e.url), b = v.protocol || "http:";
            if (!_ && v.auth) {
                var y = v.auth.split(":");
                _ = (y[0] || "") + ":" + (y[1] || "")
            }
            _ && delete g.Authorization;
            var T = "https:" === b, S = T ? e.httpsAgent : e.httpAgent, C = {
                path: o(v.path, e.params, e.paramsSerializer).replace(/^\?/, ""),
                method: e.method,
                headers: g,
                agent: S,
                auth: _
            };
            e.socketPath ? C.socketPath = e.socketPath : (C.hostname = v.hostname, C.port = v.port);
            var E, R = e.proxy;
            if (!R && !1 !== R) {
                var N = b.slice(0, -1) + "_proxy", O = process.env[N] || process.env[N.toUpperCase()];
                if (O) {
                    var W = c.parse(O);
                    if (R = {host: W.hostname, port: W.port}, W.auth) {
                        var M = W.auth.split(":");
                        R.auth = {username: M[0], password: M[1]}
                    }
                }
            }
            if (R && (C.hostname = R.host, C.host = R.host, C.headers.host = v.hostname + (v.port ? ":" + v.port : ""), C.port = R.port, C.path = b + "//" + v.hostname + (v.port ? ":" + v.port : "") + C.path, R.auth)) {
                var k = new Buffer(R.auth.username + ":" + R.auth.password, "utf8").toString("base64");
                C.headers["Proxy-Authorization"] = "Basic " + k
            }
            e.transport ? E = e.transport : 0 === e.maxRedirects ? E = T ? a : s : (e.maxRedirects && (C.maxRedirects = e.maxRedirects), E = T ? d : l), e.maxContentLength && e.maxContentLength > -1 && (C.maxBodyLength = e.maxContentLength);
            var x = E.request(C, function (r) {
                if (!x.aborted) {
                    clearTimeout(m), m = null;
                    var o = r;
                    switch (r.headers["content-encoding"]) {
                        case"gzip":
                        case"compress":
                        case"deflate":
                            o = o.pipe(u.createUnzip()), delete r.headers["content-encoding"]
                    }
                    var s = r.req || x, a = {
                        status: r.statusCode,
                        statusText: r.statusMessage,
                        headers: r.headers,
                        config: e,
                        request: s
                    };
                    if ("stream" === e.responseType) a.data = o, i(t, n, a); else {
                        var l = [];
                        o.on("data", function (t) {
                            l.push(t), e.maxContentLength > -1 && Buffer.concat(l).length > e.maxContentLength && n(h("maxContentLength size of " + e.maxContentLength + " exceeded", e, null, s))
                        }), o.on("error", function (t) {
                            x.aborted || n(p(t, e, null, s))
                        }), o.on("end", function () {
                            var r = Buffer.concat(l);
                            "arraybuffer" !== e.responseType && (r = r.toString("utf8")), a.data = r, i(t, n, a)
                        })
                    }
                }
            });
            x.on("error", function (t) {
                x.aborted || n(p(t, e, null, x))
            }), e.timeout && !m && (m = setTimeout(function () {
                x.abort(), n(h("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", x))
            }, e.timeout)), e.cancelToken && e.cancelToken.promise.then(function (e) {
                x.aborted || (x.abort(), n(e))
            }), r.isStream(w) ? w.pipe(x) : x.end(w)
        })
    }
}, function (e, t) {
    e.exports = require("http")
}, function (e, t) {
    e.exports = require("https")
}, function (e, t, n) {
    var r = n(47), i = n(44), o = n(45), s = n(100), a = n(101).Writable, l = n(102)("follow-redirects"),
        d = {GET: !0, HEAD: !0, OPTIONS: !0, TRACE: !0}, c = Object.create(null);

    function u(e, t) {
        a.call(this), e.headers = e.headers || {}, this._options = e, this._redirectCount = 0, this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
        var n = this;
        if (this._onNativeResponse = function (e) {
            n._processResponse(e)
        }, !e.pathname && e.path) {
            var r = e.path.indexOf("?");
            r < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, r), e.search = e.path.substring(r))
        }
        this._performRequest()
    }

    function f(e) {
        var t = {maxRedirects: 21, maxBodyLength: 10485760}, n = {};
        return Object.keys(e).forEach(function (i) {
            var o = i + ":", a = n[o] = e[i], d = t[i] = Object.create(a);
            d.request = function (e, i) {
                return "string" == typeof e ? (e = r.parse(e)).maxRedirects = t.maxRedirects : e = Object.assign({
                    protocol: o,
                    maxRedirects: t.maxRedirects,
                    maxBodyLength: t.maxBodyLength
                }, e), e.nativeProtocols = n, s.equal(e.protocol, o, "protocol mismatch"), l("options", e), new u(e, i)
            }, d.get = function (e, t) {
                var n = d.request(e, t);
                return n.end(), n
            }
        }), t
    }

    ["abort", "aborted", "error", "socket", "timeout"].forEach(function (e) {
        c[e] = function (t) {
            this._redirectable.emit(e, t)
        }
    }), u.prototype = Object.create(a.prototype), u.prototype.write = function (e, t, n) {
        this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({
            data: e,
            encoding: t
        }), this._currentRequest.write(e, t, n)) : (this.emit("error", new Error("Request body larger than maxBodyLength limit")), this.abort())
    }, u.prototype.end = function (e, t, n) {
        var r = this._currentRequest;
        e ? this.write(e, t, function () {
            r.end(null, null, n)
        }) : r.end(null, null, n)
    }, u.prototype.setHeader = function (e, t) {
        this._options.headers[e] = t, this._currentRequest.setHeader(e, t)
    }, u.prototype.removeHeader = function (e) {
        delete this._options.headers[e], this._currentRequest.removeHeader(e)
    }, ["abort", "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive", "setTimeout"].forEach(function (e) {
        u.prototype[e] = function (t, n) {
            return this._currentRequest[e](t, n)
        }
    }), ["aborted", "connection", "socket"].forEach(function (e) {
        Object.defineProperty(u.prototype, e, {
            get: function () {
                return this._currentRequest[e]
            }
        })
    }), u.prototype._performRequest = function () {
        var e = this._options.protocol, t = this._options.nativeProtocols[e];
        if (this._options.agents) {
            var n = e.substr(0, e.length - 1);
            this._options.agent = this._options.agents[n]
        }
        var i = this._currentRequest = t.request(this._options, this._onNativeResponse);
        for (var o in this._currentUrl = r.format(this._options), i._redirectable = this, c) o && i.on(o, c[o]);
        if (this._isRedirect) {
            var s = this._requestBodyBuffers;
            !function e() {
                if (0 !== s.length) {
                    var t = s.pop();
                    i.write(t.data, t.encoding, e)
                } else i.end()
            }()
        }
    }, u.prototype._processResponse = function (e) {
        var t = e.headers.location;
        if (t && !1 !== this._options.followRedirects && e.statusCode >= 300 && e.statusCode < 400) {
            if (++this._redirectCount > this._options.maxRedirects) return void this.emit("error", new Error("Max redirects exceeded."));
            var n, i = this._options.headers;
            if (307 !== e.statusCode && !(this._options.method in d)) for (n in this._options.method = "GET", this._requestBodyBuffers = [], i) /^content-/i.test(n) && delete i[n];
            if (!this._isRedirect) for (n in i) /^host$/i.test(n) && delete i[n];
            var o = r.resolve(this._currentUrl, t);
            l("redirecting to", o), Object.assign(this._options, r.parse(o)), this._isRedirect = !0, this._performRequest()
        } else e.responseUrl = this._currentUrl, this.emit("response", e), this._requestBodyBuffers = []
    }, e.exports = f({http: i, https: o}), e.exports.wrap = f
}, function (e, t) {
    e.exports = require("url")
}, function (e, t, n) {
    function r(e) {
        var n;

        function r() {
            if (r.enabled) {
                var e = r, i = +new Date, o = i - (n || i);
                e.diff = o, e.prev = n, e.curr = i, n = i;
                for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                var l = 0;
                s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, r) {
                    if ("%%" === n) return n;
                    l++;
                    var i = t.formatters[r];
                    if ("function" == typeof i) {
                        var o = s[l];
                        n = i.call(e, o), s.splice(l, 1), l--
                    }
                    return n
                }), t.formatArgs.call(e, s), (r.log || t.log || console.log.bind(console)).apply(e, s)
            }
        }

        return r.namespace = e, r.enabled = t.enabled(e), r.useColors = t.useColors(), r.color = function (e) {
            var n, r = 0;
            for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
            return t.colors[Math.abs(r) % t.colors.length]
        }(e), r.destroy = i, "function" == typeof t.init && t.init(r), t.instances.push(r), r
    }

    function i() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0)
    }

    (t = e.exports = r.debug = r.default = r).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function () {
        t.enable("")
    }, t.enable = function (e) {
        var n;
        t.save(e), t.names = [], t.skips = [];
        var r = ("string" == typeof e ? e : "").split(/[\s,]+/), i = r.length;
        for (n = 0; n < i; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        for (n = 0; n < t.instances.length; n++) {
            var o = t.instances[n];
            o.enabled = t.enabled(o.namespace)
        }
    }, t.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;
        var n, r;
        for (n = 0, r = t.skips.length; n < r; n++) if (t.skips[n].test(e)) return !1;
        for (n = 0, r = t.names.length; n < r; n++) if (t.names[n].test(e)) return !0;
        return !1
    }, t.humanize = n(104), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        this.message = e
    }

    r.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function (e, t, n) {
    n(52), n(53), e.exports = n(55)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0), i = n(1);
    global.__rootDir = r.app.getAppPath(), global.__profilesDir = i.join(__rootDir, "../../../profiles")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(1), i = n(5), o = n(2), s = n(3), a = n(54), l = n(0), d = n(8),
        c = s.default(r.join(__rootDir, "../bin/ThunderHelper.node"));

    function u() {
        "console" === process.env.TL_OUTPUT ? o.default.outputLogger = o.outputLoggerConsole : o.default.outputLogger = function () {
            function e(e) {
                return function (...t) {
                    c.printEtwLog(e, function (...e) {
                        return e.map(e => i.inspect(e)).join(" ").replace(/%/g, "%%")
                    }(...t))
                }
            }

            return {
                [o.LogLevel.Critical]: e(o.LogLevel.Critical),
                [o.LogLevel.Error]: e(o.LogLevel.Error),
                [o.LogLevel.Warning]: e(o.LogLevel.Warning),
                [o.LogLevel.Information]: e(o.LogLevel.Information),
                [o.LogLevel.Verbose]: e(o.LogLevel.Verbose)
            }
        }()
    }

    function f() {
        let e = a.DevEnvHelperNS.isLogEnable();
        "1" === process.env.TL_ENABLE !== e && (process.env.TL_ENABLE = e ? "1" : "0", o.default.enableLogger = e, c.enableETWLogger(e));
        let t = a.DevEnvHelperNS.getLogOutput();
        t && t !== process.env.TL_OUTPUT && (process.env.TL_OUTPUT = t, u())
    }

    process.env.TL_ENABLE = "0", o.default.enableLogger = "1" === process.env.TL_ENABLE, u(), f(), "browser" === process.type ? l.ipcMain.on(d.ThunderChannelList.channelRMUpdateLogEnviroment, () => {
        l.BrowserWindow.getAllWindows().forEach(e => {
            e.isDestroyed() || e.webContents.send(d.ThunderChannelList.channelMRUpdateLogEnviroment)
        }), f()
    }) : "renderer" === process.type && l.ipcRenderer.on(d.ThunderChannelList.channelMRUpdateLogEnviroment, () => {
        f()
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(1), i = n(3).default(r.join(__rootDir, "../bin/ThunderHelper.node"));
    !function (e) {
        function t() {
            let e = !0;
            {
                0;
                let t = r.resolve("C:\\ETW_LOG\\log.ini");
                e = "1" === i.readINI(t, "Log", "enable")
            }
            return e
        }

        e.isDevToolsEnable = function () {
            return t()
        }, e.isLogEnable = t, e.getLogOutput = function () {
            let e = process.env.TL_OUTPUT;
            do {
                if (e && "" !== e) break;
                let t = r.resolve("C:\\ETW_LOG\\log.ini");
                e = i.readINI(t, "Log", "output")
            } while (0);
            return e
        }
    }(t.DevEnvHelperNS || (t.DevEnvHelperNS = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(23);
    n(56).CommonIPCMain.mainCommunicator.connect();
    const o = n(6);
    n(28);
    const s = n(29);
    s.PerformanceMonitorStatNS.init("browser"), s.PerformanceMonitorStatNS.trackColdStartUpEvent("entrance_in_main").catch(), n(71);
    const a = n(0), l = n(10);
    n(31);
    const d = n(2), c = n(8), u = n(11), f = n(72), h = n(1), p = n(3), m = n(73), w = n(17), g = n(74), _ = n(75),
        v = n(76), b = n(77), y = n(78), T = n(79), S = n(80), C = n(82), E = n(18), R = n(84), N = n(37), O = n(7),
        W = n(38), M = n(118), k = n(15), x = n(119);
    let {debounce: P} = W.ThunderUtil;
    a.app.allowRendererProcessReuse = !1, a.app.disableHardwareAcceleration(), a.app.commandLine.appendSwitch("disable-software-rasterizer"), a.app.commandLine.appendSwitch("disable-site-isolation-trials");
    let I = h.join(__rootDir, "..\\..\\Thunder.exe");
    a.app.setAppUserModelId(I);
    const D = p.default(h.join(__rootDir, "../bin/ThunderHelper.node")), L = d.default.getLogger("Thunder.Main");
    L.information("trackShow maininterfaceEffectivelyshow");
    let A = null, F = void 0, U = 0, B = !0, H = null, j = D.getTickCount(),
        V = f.HistoryDataNS.getMainWndSizeHistoryData(), G = !1, z = !0, K = 1060, $ = 1060, q = 680, X = global;
    X.mainRendererWindow = null, X.silentMainWnd = !1, X.silentSupsWnd = !1, X.appExit = !1;
    let Y = null, Z = !1;

    function J() {
        if (null !== H) {
            let e = H.getBounds(), t = e.x + Math.round((e.width - $) / 2), n = e.y + Math.round((e.height - q) / 2);
            H.setBounds({x: t, y: n, width: $, height: q})
        }
    }

    function Q() {
        if (null !== H) {
            let e = H.getNativeWindowHandle().readUIntLE(0, 4);
            D.showWindow(e, k.CmdShow.SW_SHOWMAXIMIZED)
        }
    }

    !function () {
        for (let e = 0; e < process.argv.length; e++) "--autotest:startup" === process.argv[e] ? G = !0 : "-StartType:Install" === process.argv[e] ? (V.exitState = "normal", V.width = K, V.height = 680) : "-silent" === process.argv[e] ? X.silentMainWnd = !0 : "-nofloatwnd" === process.argv[e] && (X.silentSupsWnd = !0)
    }(), a.ipcMain.on("closeMainWindow", (e, t) => r(this, void 0, void 0, function* () {
        if (null !== H) if ("BossKey" === t) if (H.isVisible() || A && !A.isDestroyed()) {
            yield o.client.callServerFunction("SetConfigValue", "BossKey", "BossKeyState", !0);
            let e = C.SuspensionWindowHelper.getSuspensionWindow();
            e && !e.isDestroyed() && e.hide(), H.minimize(), H.hide(), A.destroy()
        } else yield o.client.callServerFunction("SetConfigValue", "BossKey", "BossKeyState", !1), H.isMinimized() && H.restore(), H.show(), oe(); else if ("exit" === t) {
            X.appExit = !0;
            let e = C.SuspensionWindowHelper.getSuspensionWindow();
            e && !e.isDestroyed() && e.hide(), H.hide(), A && !A.isDestroyed() && A.destroy()
        } else H.minimize(), H.hide()
    })), a.ipcMain.on("maximizeMainWindow", () => {
        null !== H && (Y = H.getBounds()), Q()
    }), a.ipcMain.on("restoreMainWindow", () => {
        null !== H && ("max" === V.exitState && !0 === z ? (z = !1, J()) : (z = !1, H.restore(), Y && (H.setBounds(Y), Y = null)))
    }), a.ipcMain.on("minizeMainWindow", () => {
        null !== H && H.minimize()
    });
    let ee = [];
    a.ipcMain.on(c.ThunderChannelList.channelRMProcessSend, (e, t) => {
        ee.push(t), o.client.start({name: i.CommonIPCBase.mainProcessContext}), M.browserWindowCreator.init(H), v.default(H, D), O.registerRoundRectClientFunction(H), o.client.registerFunctions({
            SetTrayImage: (e, ...t) => r(this, void 0, void 0, function* () {
                let e = t[0];
                (yield E.FileSystemAWNS.existsAW(e)) && A.setImage(a.nativeImage.createFromPath(e))
            }), FlashTray: (e, ...t) => r(this, void 0, void 0, function* () {
                let e = t[0], n = t[1], r = t[2], i = `${__rootDir}/static/thunder11.ico`;
                n && (yield E.FileSystemAWNS.existsAW(n)) || (n = i);
                let o = `${__rootDir}/static/empty.ico`;
                void 0 !== F && (clearInterval(F), F = void 0, U = 0), r && A.setToolTip(r), F = setInterval(() => {
                    U % 2 == 0 ? A.setImage(a.nativeImage.createFromPath(o)) : A.setImage(a.nativeImage.createFromPath(n)), U++
                }, 450);
                let s = () => {
                    void 0 !== F && (clearInterval(F), F = void 0, U = 0, A.setImage(a.nativeImage.createFromPath(i)), r && A.setToolTip("迅雷"), e && e())
                };
                H.isVisible() && !H.isMinimized() ? A.once("click", () => {
                    s()
                }) : H.once("focus", s)
            }), IsSilentSupsWnd: (e, ...t) => X.silentSupsWnd, IsAppExit: (e, ...t) => X.appExit
        }), setTimeout(() => r(this, void 0, void 0, function* () {
            let e = yield o.client.callServerFunction("GetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "0"),
                t = null, n = P(() => r(this, void 0, void 0, function* () {
                    if (t && !t.isDestroyed()) {
                        let e = t.getBounds();
                        yield o.client.callServerFunction("SetConfigValue", "ConfigSuspensionXdas", "SuspensionX", e.x), yield o.client.callServerFunction("SetConfigValue", "ConfigSuspensionXdas", "SuspensionY", e.y)
                    }
                }), 50);
            2 !== Number(e) && (Z ? (t = yield C.SuspensionWindowHelper.createXdasSuspensionWindow(D)) && t.on("move", n) : C.SuspensionWindowHelper.createSuspensionWindow(D)), a.ipcMain.on(c.ThunderChannelList.channelRMConfigValueChanged, (e, i, o, s, a) => r(this, void 0, void 0, function* () {
                "ConfigFloatPanel" === i && "FloatPanelValue" === o && (2 === Number(s) && 2 !== Number(a) ? Z ? (t = yield C.SuspensionWindowHelper.createXdasSuspensionWindow(D)) && t.on("move", n) : C.SuspensionWindowHelper.createSuspensionWindow(D) : 2 !== Number(s) && 2 === Number(a) && (t = C.SuspensionWindowHelper.getSuspensionWindow()) && !t.isDestroyed() && t.close())
            })), D.initLiveUD()
        }), 2e3)
    }), setInterval(() => {
        for (let e = ee.length - 1; e >= 0; --e) try {
            process.kill(ee[e], 0)
        } catch (e) {
            f.HistoryDataNS.setExitType("normal"), a.app.quit()
        }
    }, 1e3);
    const te = "development" === process.env.RUN_ENV ? "http://localhost:9080/main-renderer/" : `file:///${__dirname}/main-renderer/index.html`,
        ne = `${__rootDir}/out/common-preload.js`;
    let re = !1;

    function ie() {
        re || (re = !0, function (e) {
            do {
                if (j <= 0) break;
                let t = (D.getTickCount() - j) / 1e3;
                if (t < 0) break;
                void 0 === e && (e = "manual"), m.MainWindowCoreEventStatNS.onExit();
                let n = "exitType=" + e + ",online_time=" + t;
                L.information("client_all_online_time", n), u.XLStatNS.trackEvent("core_event", "client_all_online_time", "", 0, 0, 0, 0, n)
            } while (0)
        }(), global.xlDesktopApplicationSolution.GetPerformanceMonitorReport().uninitPerformanceMonitor(), u.XLStatNS.uninit(), O.detachAllRoundRectWindow(), a.globalShortcut.unregister("ctrl+f12"), a.globalShortcut.unregister("Alt+D"), a.globalShortcut.unregisterAll(), L.information("main will quit"), D.uninitGDIPlus(), A.destroy())
    }

    function oe() {
        L.information(`${__rootDir}/static/thunder11.ico`);
        let e = null;
        try {
            e = a.nativeImage.createFromPath(`${__rootDir}/static/thunder11.ico`)
        } catch (e) {
            L.warning("createFromPath failed!", e)
        }
        null !== (A = new a.Tray(e)) && (L.information("settooltip"), A.setToolTip("迅雷"), A.on("click", () => {
            if (null !== H) {
                let e = H.isMinimized();
                if (!e && H.isVisible()) {
                    let e = "status=hidemain";
                    u.XLStatNS.trackEvent("client_quick", "tuopan_click_main_status_get", "", 0, 0, 0, 0, e), H.minimize(), H.hide()
                } else {
                    let t = "status=showmain";
                    u.XLStatNS.trackEvent("client_quick", "tuopan_click_main_status_get", "", 0, 0, 0, 0, t), e ? (H.restore(), H.show()) : H.show()
                }
            }
        }), A.on("right-click", () => r(this, void 0, void 0, function* () {
            let e = yield o.client.callServerFunction("GetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "0"),
                t = !0;
            1 !== Number(e) && 2 !== Number(e) || (t = !1);
            let n = !1;
            1 === Number(e) && (n = !0);
            let i = !1;
            2 === Number(e) && (i = !0);
            let s = [{
                type: "normal", label: "新建任务", icon: `${__rootDir}/static/icon/newtask.png`, click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=create"), H.webContents.send(c.ThunderChannelList.channelMRTrayMenuClick, "-task:newtask", "tray_menu")
                }
            }, {
                type: "normal",
                label: "开始全部任务",
                icon: `${__rootDir}/static/icon/startalltask.png`,
                enabled: B,
                click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=start"), H.webContents.send(c.ThunderChannelList.channelMRTrayMenuClick, "-task:startall")
                }
            }, {
                type: "normal", label: "暂停全部任务", icon: `${__rootDir}/static/icon/stoptask.png`, click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=pause"), H.webContents.send(c.ThunderChannelList.channelMRTrayMenuClick, "-task:pauseall")
                }
            }, {
                type: "normal", label: "退出", icon: `${__rootDir}/static/icon/exit.png`, click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=exit"), H.webContents.send(c.ThunderChannelList.channelMRTrayMenuClick, "-task:quitprocess")
                }
            }];
            if (t) {
                let e = (() => {
                    let e = null;
                    do {
                        if (H.isMaximized() && H.isVisible()) break;
                        let t = C.SuspensionWindowHelper.getSuspensionWindow();
                        if (!t || t.isDestroyed()) break;
                        if (!C.SuspensionWindowHelper.isReadyToShow()) break;
                        if (t.isVisible()) break;
                        e = {
                            label: "打开悬浮窗", click: () => r(this, void 0, void 0, function* () {
                                t && !t.isDestroyed() && t.webContents.send("suspension-window-restore")
                            })
                        }
                    } while (0);
                    return e
                })();
                e && s.splice(3, 0, e)
            }
            s.splice(3, 0, {
                type: "submenu",
                label: "悬浮窗设置",
                submenu: [{
                    type: "checkbox", label: "显示悬浮窗", checked: t, click() {
                        return r(this, void 0, void 0, function* () {
                            do {
                                if (t) break;
                                let e = "result=show";
                                u.XLStatNS.trackEvent("client_quick", "tuopan_rk_float_monitor_setting", "", 0, 0, 0, 0, e), yield o.client.callServerFunction("SetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "0")
                            } while (0)
                        })
                    }
                }, {
                    type: "checkbox", label: "下载时显示悬浮窗", checked: n, click() {
                        return r(this, void 0, void 0, function* () {
                            do {
                                if (n) break;
                                let e = "result=undl_hide";
                                u.XLStatNS.trackEvent("client_quick", "tuopan_rk_float_monitor_setting", "", 0, 0, 0, 0, e), yield o.client.callServerFunction("SetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "1")
                            } while (0)
                        })
                    }
                }, {
                    type: "checkbox", label: "隐藏悬浮窗", checked: i, click() {
                        return r(this, void 0, void 0, function* () {
                            u.XLStatNS.trackEvent("client_quick", "tuopan_rk_float_monitor_setting", "", 0, 0, 0, 0, "result=hide"), yield o.client.callServerFunction("SetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "2")
                        })
                    }
                }]
            }), H.isVisible() && !H.isMinimized() ? s.splice(0, 0, {
                label: "隐藏主界面", type: "normal", click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=hidemain"), H.minimize(), H.hide()
                }
            }) : s.splice(0, 0, {
                label: "显示主界面", type: "normal", click() {
                    u.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=showmain"), H.isMinimized() && H.restore(), H.show()
                }
            });
            let l = a.Menu.buildFromTemplate(s);
            A.popUpContextMenu(l, R.WindowPreferenceNS.getWindowPreference(!0))
        })))
    }

    function se(e) {
        return r(this, void 0, void 0, function* () {
            let t = [];
            if (yield function e(t, n) {
                return r(this, void 0, void 0, function* () {
                    do {
                        if (!t || !n || n.length > 50) break;
                        if (!(yield E.FileSystemAWNS.existsAW(t))) break;
                        let r = yield E.FileSystemAWNS.lstatAW(t);
                        if (r && r.isDirectory()) {
                            let r = yield E.FileSystemAWNS.readdirAW(t);
                            for (let i = 0; i < r.length; i++) yield e(h.join(t, r[i]), n)
                        } else r.size < 5242880 && n.push(t)
                    } while (0)
                })
            }(e, t), t.length > 0) for (let e = 0; e < t.length; ++e) D.asynPreLoadFile(t[e])
        })
    }

    function ae() {
        return r(this, void 0, void 0, function* () {
            let e = ["bt-task-renderer", "message-box-renderer", "modifier-userinfo-renderer", "new-task-renderer", "notification-renderer", "personal-info-renderer", "pre-new-task-renderer", "retry-login-renderer", "css/bt-task-renderer", "css/message-box-renderer", "css/modifier-userinfo-renderer", "css/new-task-renderer", "css/notification-renderer", "css/personal-info-renderer", "css/pre-new-task-renderer", "css/retry-login-renderer"];
            for (let t = 0; t < e.length; ++t) yield se(h.join(__dirname, e[t]))
        })
    }

    a.app.on("ready", () => {
        s.PerformanceMonitorStatNS.trackColdStartUpEvent("ready_of_app_in_main").catch(), D.initGDIPlus(), x.MainThunderNewTaskNS.instance().init(), N.NewTaskDlgsManagerNS.init(H, D), b.default(), function () {
            let e = V.width, t = V.height;
            (K = a.screen.getPrimaryDisplay().size.width) <= 1024 ? (K = 485, e = 485) : K = 485, H = new a.BrowserWindow({
                width: e,
                height: t,
                minWidth: K,
                minHeight: 365,
                frame: !1,
                show: !1,
                backgroundColor: "#FFF",
                webPreferences: {
                    devTools: !0,
                    preload: ne,
                    webSecurity: !1,
                    spellcheck: !1,
                    nodeIntegration: !0,
                    webviewTag: !0
                }
            }), S.loginUIObj.init(H, D), g.initMessageBox(H, D), N.NewTaskDlgsManagerNS.init(H, D), _.default(D), y.default(H, D), T.default(H, D), X.mainRendererWindow = H, H.loadURL(te).catch(), H.on("ready-to-show", () => {
                let e = H.getNativeWindowHandle().readUIntLE(0, 4);
                D.disableWindowAnimation(e);
                let t = D.findChildWindow(e, "Intermediate D3D Window");
                if (t && D.setWindowLong(t, k.SetWindowType.GWL_STYLE, k.WindowStyle.WS_CLIPSIBLINGS), D.setWindowLong(e, k.SetWindowType.GWL_STYLE, k.WindowStyle.WS_CLIPCHILDREN), N.NewTaskDlgsManagerNS.setReady(!0), s.PerformanceMonitorStatNS.trackColdStartUpEvent("ready_to_show_of_mainwindow_in_main").catch(), G) {
                    let e = new Date;
                    l.writeFile(h.join(__rootDir, "..\\..\\autoteststartup.txt"), `${e.getTime()}`, e => {
                        e && L.information(e)
                    })
                }
                "max" === V.exitState && Q();
                try {
                    let e = a.nativeImage.createFromPath(`${__rootDir}/static/thunder11.ico`);
                    H.setIcon(e)
                } catch (e) {
                    L.warning("createFromPath failed!", e)
                }
                oe(), L.information("endThunderStartProcess"), D.endThunderStartProcess(), f.HistoryDataNS.setExitType("");
                let n = "areo=0";
                D.isDwmCompositionEnabled() && (Z = !0, n = "areo=1"), D.isDropShadowEnabled() ? n += ",shadow=1" : n += ",shadow=0", u.XLStatNS.trackEvent("core_event", "system_setting", "", 0, 0, 0, 0, n), setTimeout(() => r(this, void 0, void 0, function* () {
                    yield ae(), setInterval(() => r(this, void 0, void 0, function* () {
                        yield ae()
                    }), 6e5)
                }), 5e3), X.silentMainWnd ? H.hide() : (H.isMinimized() && H.restore(), H.show(), w.ToolsUtilitiesAWNS.setForegroundWindow(D, H).catch()), setTimeout(() => r(this, void 0, void 0, function* () {
                    O.roundRectWindow(H, null, !1, !1)
                }), 500)
            }), H.prependListener("close", e => {
                let t = f.HistoryDataNS.getExitType();
                L.information("close:exitType = ", t), "normal" !== t && (null !== H && (H.minimize(), H.hide()), e.preventDefault())
            }), H.on("show", () => {
                X.silentMainWnd = !1, X.silentSupsWnd = !1
            }), H.on("unmaximize", () => {
                "max" === V.exitState && !0 === z && (z = !1, J())
            }), m.MainWindowCoreEventStatNS.watch(D, H), a.nativeTheme.themeSource = "light"
        }(), H.on("session-end", () => {
            ie(), H.webContents.send("OnQueryEndSession")
        }), a.Menu.setApplicationMenu(null)
    }), a.app.on("before-quit", () => {
        L.information("before-quit"), ie()
    }), a.app.on("window-all-closed", () => {
        "darwin" !== process.platform && a.app.quit()
    }), a.app.on("browser-window-created", (e, t) => {
        let n = t.webContents.getOSProcessId();
        t.once("closed", () => {
            D.removeProcessEnvironmentVariable(n.toString())
        }), t.webContents.on("dom-ready", () => {
            if (!t.isDestroyed()) {
                let e = t.webContents.getURL();
                D.setProcessEnvironmentVariable(n.toString(), e)
            }
        })
    }), process.on("SIGINT", () => {
        f.HistoryDataNS.setExitType("normal"), a.app.quit()
    }), a.ipcMain.on(c.ThunderChannelList.channelRMFileCopy, (e, t, n) => {
        L.information("asynCopyFile", t, n), D.asynCopyFile(t, n, (t, n) => {
            e.sender.isDestroyed() || e.sender.send(c.ThunderChannelList.channelMRFileCopyResult, t, n)
        })
    }), a.ipcMain.on(c.ThunderChannelList.channelRMFileMove, (e, t, n, r) => {
        L.information("asynMoveFile", t, n), D.asynMoveFile(t, n, (t, n, i) => {
            e.sender.isDestroyed() || e.sender.send(c.ThunderChannelList.channelMRFileMoveResult, t, n, r, i)
        })
    }), a.ipcMain.on(c.ThunderChannelList.channelRMSetEnvironmentVariable, function (e, t, n) {
        n ? D.setProcessEnvironmentVariable(t, n) : D.removeProcessEnvironmentVariable(t)
    }), a.ipcMain.on(c.ThunderChannelList.channelMRBringWindowToTop, (e, t) => {
        L.information("bringWindowToTop", t), D.bringWindowToTop(t)
    }), a.ipcMain.on(c.ThunderChannelList.channelRMSetProgressBar, (e, t) => {
        H && !H.isDestroyed() && H.setProgressBar(t)
    }), a.ipcMain.on(c.ThunderChannelList.channelRMSetFoucs, () => {
        L.information("setMainWindowFocus"), H && !H.isDestroyed() && H.focus()
    }), a.ipcMain.on("can-start-all-task", (e, t) => {
        B = t;
        let n = C.SuspensionWindowHelper.getSuspensionWindow();
        n && !n.isDestroyed() && n.webContents.send("can-start-all-task", t)
    }), a.ipcMain.on("onOpenExecute", (e, t, n, i) => r(this, void 0, void 0, function* () {
        if (null !== t && void 0 !== t && "" !== t) {
            null !== H && (H.isMinimized() && H.restore(), yield w.ToolsUtilitiesAWNS.setForegroundWindow(D, H), H.show());
            let e = h.dirname(t);
            null !== i && void 0 !== i && "" !== i && (e = i), D.asyncShellExecuteAndWait(t, e, n, (r, i) => {
                L.information("shellExecute:result = ", r, ";code = ", i, ";filePath = ", t, ";directory = ", e, ";params = ", n)
            })
        }
    })), a.ipcMain.on(c.ThunderChannelList.channelRMExecute, (e, t, n, r, i, o, s) => {
        let a = H.getNativeWindowHandle().readUIntLE(0, 4), l = D.shellExecute(a, n, r, i, o, s);
        e.sender.isDestroyed() || e.sender.send(c.ThunderChannelList.channelMRExecuteResult, t, l)
    }), a.ipcMain.on(c.ThunderChannelList.channelRMSetPosition, (e, t, n) => {
        let r = null, i = null;
        do {
            if (!t || !n) break;
            let e = a.BrowserWindow.getAllWindows();
            for (let o = 0; o < e.length; ++o) {
                let s = e[o].getNativeWindowHandle().readUIntLE(0, 4);
                if (t === s) {
                    if (r = e[o], i) break
                } else if (n === s && (i = e[o], r)) break
            }
            if (!r || !i) break;
            let o = i.getPosition(), s = i.getSize(), l = r.getSize(), d = a.screen.getCursorScreenPoint(),
                c = a.screen.getDisplayNearestPoint(d), u = c.scaleFactor, f = c.size.width, h = c.size.height,
                p = s[0], m = s[1];
            o[0] + p > f && (p = f - o[0]), o[1] + m > h && (m = h - o[1]);
            let w = o[0] + (p - l[0]) / 2, g = o[1] + (m - l[1]) / 2;
            w < 0 ? w = 0 : w > f - l[0] && (w = f - l[0]), g < 0 ? g = 0 : g > h - l[1] && (g = h - l[1]), D.setWindowPos(t, 0, w * u, g * u, 0, 0, 5)
        } while (0);
        e.returnValue = !0
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0), i = n(5), o = n(24), s = n(25), a = n(23);
    !function (e) {
        class t extends a.CommonIPCBase.Communicator {
            constructor() {
                super(), this.currInfo = {
                    id: void 0,
                    context: a.CommonIPCBase.mainProcessContext,
                    isMainCommunicator: !0
                }
            }

            connect() {
                this.isConnected ? o.warning("has been connected") : (this.isConnected = !0, this.startListenIPCMessage(!0))
            }

            disconnect() {
                this.isConnected ? this.isConnected = !1 : o.warning("hasnot been connected yet")
            }

            sendMessageToRenderer(e, t) {
                this.isConnected ? this.sendIPCMsgToRenderer(e, {
                    msg: t,
                    senderInfo: this.currInfo
                }) : o.warning("hasnot been connected yet")
            }

            sendMessageToAllRenderers(e) {
                if (this.isConnected) for (let t of this.rendererInfos) this.sendIPCMsgToRenderer(t.id, {
                    msg: e,
                    senderInfo: this.currInfo
                }); else o.warning("hasnot been connected yet")
            }

            handleRendererConnectMsg(e, t) {
                let n = void 0;
                do {
                    if (i.isNullOrUndefined(t)) {
                        o.error("msgInfo is null");
                        break
                    }
                    let a = t.senderInfo;
                    if (i.isNullOrUndefined(a)) {
                        o.error("connectRendererInfo is null");
                        break
                    }
                    let l = r.BrowserWindow.fromWebContents(e);
                    if (i.isNullOrUndefined(l)) {
                        o.error("rendererBrowserWindow is null");
                        break
                    }
                    if (a.id = l.id, i.isNullOrUndefined(a.id)) {
                        o.error("connectRendererInfo.id is null");
                        break
                    }
                    o.information(`Main: new renderer will connect, id = ${a.id}, context = ${a.context}`), this.sendMessageToAllRenderers({
                        name: s.CommonIPCMessage.msgIPCRendererConnect,
                        args: [a]
                    }), this.rendererInfos.push(a), n = [a.id, this.rendererInfos]
                } while (0);
                return n
            }

            handleRendererDisconnectMsg(e, t) {
                do {
                    if (i.isNullOrUndefined(t)) {
                        o.error("msgInfo is null");
                        break
                    }
                    let e = t.senderInfo;
                    if (i.isNullOrUndefined(e)) {
                        o.error("disconnectRendererInfo is null");
                        break
                    }
                    o.information(`renderer will disconnect, id = ${e.id}, context = ${e.context}`);
                    for (let t = 0; t < this.rendererInfos.length; ++t) if (this.rendererInfos[t] === e) {
                        this.rendererInfos.splice(t, 1);
                        break
                    }
                    this.sendMessageToAllRenderers({name: s.CommonIPCMessage.msgIPCRendererDisconnect, args: [e]})
                } while (0)
            }

            sendForwardRendererToRendererMsg(e) {
                let t = e.msg.args.shift();
                this.sendIPCMsgToRenderer(t, e)
            }

            sendIPCMsgToRenderer(e, t) {
                do {
                    let n = r.BrowserWindow.fromId(e);
                    if (i.isNullOrUndefined(n)) {
                        o.error("rendererBrowserWindow is null");
                        break
                    }
                    n.webContents.send(s.CommonIPCMessage.msgIPCSendToRenderer, t)
                } while (0)
            }
        }

        e.MainCommunicator = t, e.mainCommunicator = new t
    }(t.CommonIPCMain || (t.CommonIPCMain = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(26), i = n(14), o = n(27), s = n(58), a = n(16);
    t.Client = class extends i.EventEmitter {
        constructor(e) {
            if (e = e || {}, super(), this.inprocess = !1, this.context = void 0, e.context && (this.context = Object.assign({}, e.context), this.context.productId = e.socketPrex), e.socket) this.socket = e.socket, this.bind(); else if (global.__xdasIPCServer && global.__xdasIPCServer.getProductId().toLowerCase() === e.socketPrex.toLowerCase()) this.inprocess = !0; else {
                let t = a.getSockPath(e.socketPrex);
                this.socket = r.connect(t), this.bind()
            }
        }

        isInprocess() {
            return this.inprocess
        }

        getContext() {
            return this.context
        }

        bind() {
            const e = new s.Parser, t = this.socket;
            t.on("data", t => {
                e.feed(t)
            }), t.on("connect", () => {
                this.emit("connect")
            }), t.on("end", () => {
                o.information("socket is ended"), this.socket = null, this.emit("end")
            }), t.on("error", e => {
                this.socket = null, this.emit("error", e)
            }), e.on("message", e => {
                this.emit("message", e)
            }), this.parser = e
        }

        send(e) {
            if (this.socket) try {
                this.socket.write(this.parser.encode(e))
            } catch (e) {
                o.error(e.message)
            } else o.information("This socket has been ended by the other party", this.context && this.context.name)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(59), i = n(14);
    t.Parser = class extends i.EventEmitter {
        constructor() {
            super(), this.decoder = new r.StringDecoder("utf8"), this.jsonBuffer = ""
        }

        encode(e) {
            return JSON.stringify(e) + "\n"
        }

        feed(e) {
            let t = this.jsonBuffer, n = 0, r = (t += this.decoder.write(e)).indexOf("\n", n);
            for (; r >= 0;) {
                const e = t.slice(n, r), i = JSON.parse(e);
                this.emit("message", i), n = r + 1, r = t.indexOf("\n", n)
            }
            this.jsonBuffer = t.slice(n)
        }
    }
}, function (e, t) {
    e.exports = require("string_decoder")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(61);
    var i;
    !function (e) {
        e.XDAS = class {
            constructor() {
                this.performanceMonitorReport = null
            }

            GetPerformanceMonitorReport() {
                return null === this.performanceMonitorReport && (this.performanceMonitorReport = new r.PerformanceMonitorReport), this.performanceMonitorReport
            }
        }
    }(i || (i = {})), t.xlDesktopApplicationSolution = new i.XDAS
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(1), i = n(9), o = n(62);
    let s = n(3).default(r.join(o.GlobalDataNS.getRootDir(), "../bin/ThunderHelper.node")).performanceMonitorReporter;
    t.PerformanceMonitorReport = class {
        initPerformanceMonitor(e, t) {
            s.init("browser" === process.type, process.pid, function (e) {
                let t = "";
                if (0 === e.length && "renderer" === process.type) {
                    let e = r.normalize(decodeURIComponent(window.location.href)), n = e.indexOf(process.resourcesPath);
                    n = n > -1 ? n + process.resourcesPath.length + 1 : n;
                    let i = e.length - 1, o = e.indexOf("?"), s = e.indexOf("#");
                    i = o > -1 ? Math.min(o - 1, i) : i, i = s > -1 ? Math.min(s - 1, i) : i, n > -1 && i >= n && (t = e.substr(n, i - n + 1))
                }
                return 0 === t.length && (t = 0 !== e.length ? e : process.type), t = t.replace(/\||,|;/g, "_")
            }(e), i.release(), t), s.start()
        }

        uninitPerformanceMonitor() {
            s.stop()
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(1);
    let i = r.normalize(r.join(process.execPath, "../resources/app")),
        o = r.resolve(i, "../../../profiles").replace(/\\/g, "/");
    !function (e) {
        e.getRootDir = function () {
            return i
        }, e.getProfilesDir = function () {
            return o
        }
    }(t.GlobalDataNS || (t.GlobalDataNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.getWebContents = t.getCurrentWebContents = t.getCurrentWindow = t.getGlobal = t.getBuiltin = t.remoteRequire = t.Interest = void 0;
    const r = n(0), i = n(64), o = n(65), s = n(66), a = n(32), l = n(67), d = n(12), c = n(33), u = r.ipcRenderer,
        f = process.electronBinding("v8_util"), h = new o.default, p = f.createIDWeakMap(),
        m = f.getHiddenValue(global, "contextId");

    class w {
        constructor(e) {
            if ("object" == typeof e ? (this.on = "object" == typeof e.on ? e.on : {}, this.once = "object" == typeof e.once ? e.once : {}) : (this.on = {}, this.once = {}), !this.check()) throw new Error("unexpected param")
        }

        check() {
            let e = !0;
            do {
                let t = Object.getOwnPropertyNames(this.on);
                if (t.forEach(t => {
                    "function" != typeof this.on[t] && (e = !1)
                }), !e) break;
                (t = Object.getOwnPropertyNames(this.once)).forEach(t => {
                    "function" != typeof this.once[t] && (e = !1)
                })
            } while (0);
            return e
        }
    }

    function g(e, t = new Set) {
        const n = e => {
            if (t.has(e)) return {type: "value", value: null};
            let r = e;
            if (Array.isArray(e)) {
                t.add(e);
                let n = {type: "array", value: g(e, t)};
                return t.delete(e), n
            }
            if (ArrayBuffer.isView(r)) return {type: "buffer", value: i.Buffer.from(e)};
            if (e instanceof Date) return {type: "date", value: e.getTime()};
            if (null != e && "object" == typeof e) {
                if (c.isPromise(e)) return {
                    type: "promise", then: n(function (t, n) {
                        e.then(t, n)
                    })
                };
                if (f.getHiddenValue(e, "__remote_id__")) return {
                    type: "remote-object",
                    id: f.getHiddenValue(e, "__remote_id__")
                };
                let r = {
                    type: e instanceof w ? "interest" : "object",
                    name: e.constructor ? e.constructor.name : "",
                    members: []
                };
                t.add(e);
                for (let t in e) r.members.push({name: t, value: n(e[t])});
                return t.delete(e), r
            }
            if ("function" == typeof e) {
                return {
                    type: "function",
                    id: h.add(e),
                    location: f.getHiddenValue(e, "__remote_call_location__"),
                    length: e.length
                }
            }
            return {type: "value", value: e}
        };
        return e.map(n)
    }

    function _(e, t, n) {
        c.isPromise(e) ? e.then(e => {
            t(e)
        }, e => {
            n(e)
        }) : t(e)
    }

    function v(e, t, n, r = !1) {
        const i = t => {
            if (e.hasOwnProperty(t.name) && !r) return;
            let n, i = {enumerable: t.enumerable, configurable: !0};
            if ("method" === t.type) {
                if (t.value.refId) {
                    if (p.has(t.value.refId) && (n = p.get(t.value.refId)), null == n) throw new Error("member refId pointer to null" + t.value.refId + "name: " + t.name)
                } else n = S(t.value, e, t.name);
                i.get = (() => n), i.set = (e => n = e)
            } else "get" === t.type && (i.get = (() => n), t.writable && (i.set = (e => {
                n = e
            })), n = S(t.value));
            Object.defineProperty(e, t.name, i)
        };
        if (Array.isArray(n)) {
            let e = n.length;
            for (let t = 0; t < e; t++) i(n[t])
        }
    }

    function b(e, t, n) {
        if (n) {
            let t = S(n);
            Object.setPrototypeOf(e, t)
        }
    }

    function y(e, t) {
        f.setHiddenValue(e, "__remote_id__", t)
    }

    function T(e) {
        return f.getHiddenValue(e, "__remote_id__")
    }

    function S(e, t, n) {
        const r = {
            value: () => e.value,
            array: () => e.members.map(e => S(e)),
            buffer: () => i.Buffer.from(e.value),
            promise: () => Promise.resolve({then: S(e.then)}),
            error: () => (function (e) {
                const t = (() => "error" === e.type ? new Error : {})();
                for (let n = 0; n < e.members.length; n++) {
                    let {name: r, value: i} = e.members[n];
                    t[r] = i
                }
                return t
            })(e),
            date: () => new Date(e.value),
            exception: () => {
                throw new Error(`${e.message}\n${e.stack}`)
            }
        };
        let o;
        return e.type in r ? o = r[e.type]() : e.refId ? p.has(e.refId) ? (f.addRemoteObjectRef(m, e.refId), o = p.get(e.refId)) : (d.warn("[metaToValue] refId point to null" + e.refId), o = "function" === e.type ? () => {
        } : {}) : e.id ? p.has(e.id) ? (f.addRemoteObjectRef(m, e.id), v(o = p.get(e.id), e.id, e.members, !0), b(o, e.id, e.proto)) : (o = "function" === e.type ? t ? function (e, t, n) {
            if (p.has(n.id)) return p.get(n.id);
            let r = T(e), i = function (...e) {
                throw Error("never should come to a proxied function")
            };
            Object.defineProperty(i, "name", {value: t, writable: !1, enumerable: !0});
            let o = new Proxy(i, {
                apply: (e, n, i) => new Promise((e, o) => {
                    let d = T(n);
                    if (d || (d = T(n.__remoteObj_)), !d) throw Error("is this function was a bound function?");
                    let c = a.default.browser.memberCall, f = l.default(c), h = g(i);
                    u.send(c, m, f, d, r, t, h), s.default.add(f, t => {
                        try {
                            _(S(t), e, o)
                        } catch (e) {
                            o(e)
                        }
                    })
                }), construct: (e, n, i) => new Promise((e, i) => {
                    let o = a.default.browser.memberConstruct, d = l.default(o);
                    u.send(o, m, d, r, t, g(n)), s.default.add(d, t => {
                        try {
                            let n = S(t);
                            e(n)
                        } catch (e) {
                            i(e)
                        }
                    })
                })
            });
            return f.setHiddenValue(i, "__remote_id__", n.id), o
        }(t, n, e) : function (e) {
            let t = e.id;
            const n = function (...e) {
                throw new Error("Should Never com to a remoteFunction PlaceHolder")
            };
            return y(n, t), new Proxy(n, {
                apply: (e, n, r) => new Promise((e, i) => {
                    let o = a.default.browser.functionCall, d = l.default(o), c = T(n);
                    u.send(o, m, d, c, t, g(r)), s.default.add(d, t => {
                        try {
                            _(S(t), e, i)
                        } catch (e) {
                            i(e)
                        }
                    })
                }), construct: (e, n, r) => new Promise((e, r) => {
                    let i = a.default.browser.construct, o = l.default(i);
                    u.send(i, m, o, t, g(n)), s.default.add(o, t => {
                        try {
                            let n = S(t);
                            e(n)
                        } catch (e) {
                            r(e)
                        }
                    })
                })
            })
        }(e) : {}, f.setRemoteObjectFreer(o, m, e.id), p.set(e.id, o), f.setHiddenValue(o, "__remote_id__", e.id), f.addRemoteObjectRef(m, e.id), function (e) {
            let t = T(e);
            Object.defineProperties(e, {
                __set: {
                    enumerable: !1, writable: !1, value: function (n, r) {
                        if ("function" == typeof r) throw new Error("set a function to a remote member is dangerous");
                        return new Promise((i, o) => {
                            let d = a.default.browser.memberSet, c = l.default(d), f = g([r]);
                            u.send(d, m, c, t, n, f), s.default.add(c, t => {
                                try {
                                    let s = S(t);
                                    e[n] = r, i(s)
                                } catch (e) {
                                    o(e)
                                }
                            })
                        })
                    }
                }, __get: {
                    enumerable: !1, writable: !1, value: function (n) {
                        return new Promise((r, i) => {
                            let o = a.default.browser.memberGet, d = l.default(o);
                            u.send(o, m, d, t, n), s.default.add(d, t => {
                                try {
                                    const o = S(t);
                                    e[n] = o, r(o)
                                } catch (e) {
                                    i(e)
                                }
                            })
                        })
                    }
                }, __sync: {
                    enumerable: !1, writable: !1, value: function () {
                        return new Promise((e, n) => {
                            let r = a.default.browser.sync, i = l.default(r);
                            u.send(r, m, i, t), s.default.add(i, r => {
                                try {
                                    if (r.id !== t) throw Error("SYNC_RETURN: remote id not match");
                                    let i = S(r);
                                    e(i)
                                } catch (e) {
                                    n(e)
                                }
                            })
                        })
                    }
                }
            })
        }(o), v(o, e.id, e.members), b(o, e.id, e.proto), Object.defineProperty(o.constructor, "name", {value: e.name}), e.extendedMemberNames && e.extendedMemberNames.forEach((e, t) => {
            let n = o[e], r = o.__proto__;
            for (; r;) {
                if (Object.prototype.hasOwnProperty.call(r, e)) {
                    delete r[e];
                    break
                }
                r = r.__proto__
            }
            Object.defineProperty(o, e, {value: n, enumerable: !1, writable: !1, configurable: !0})
        })) : d.error("no id of meta:", e), o
    }

    t.Interest = w;

    class C {
        constructor(...e) {
            if (this.__resolved_ = !1, this.__promise_ = null, this.__remoteObj_ = null, this.__what_ = "", this.__name_ = "", "string" === typeof arguments[0]) {
                let e = arguments[0], t = arguments[1];
                this.__what_ = e, this.__name_ = t || e, this.__resolved_ = !1, this.__remoteObj_ = null, this.__promise_ = new Promise((n, r) => {
                    let i = this.getChannel(e), o = l.default(i);
                    u.send(i, m, o, t), s.default.add(o, e => {
                        try {
                            let t = S(e);
                            this.__remoteObj_ = t, this.__resolved_ = !0, n(t)
                        } catch (e) {
                            r(e)
                        }
                    })
                })
            } else this.__remoteObj_ = arguments[0], this.__resolved_ = !0, this.__promise_ = null
        }

        getChannel(e) {
            let t = "";
            switch (e) {
                case"module":
                    t = a.default.browser.require;
                    break;
                case"builtin":
                    t = a.default.browser.builtIn;
                    break;
                case"global":
                    t = a.default.browser.global;
                    break;
                case"current_window":
                    t = a.default.browser.currentWindow;
                    break;
                case"current_web_contents":
                    t = a.default.browser.currentWebContents;
                    break;
                case"client_web_contents":
                    t = a.default.browser.clientWebContents;
                    break;
                case"web_contents":
                    t = a.default.browser.webContents
            }
            return t
        }

        __resolve() {
            let e = this.__promise_;
            if (null !== e) ; else {
                if (!this.__resolved_) throw Error("missing the promise for ayncnomously get remote object");
                e = new Promise((e, t) => {
                    e(this.__remoteObj_)
                }), this.__promise_ = e
            }
            return e
        }

        __isResolved() {
            return this.__resolved_
        }
    }

    function E(e, t, n) {
        try {
            s.default.invoke(t, n).remove(t)
        } finally {
            s.default.remove(t)
        }
    }

    u.on(a.default.renderer.requireReturn, E), u.on(a.default.renderer.getBuiltInReturn, E), u.on(a.default.renderer.getGlobalReturn, E), u.on(a.default.renderer.currentWindowReturn, E), u.on(a.default.renderer.currentWebContentsReturn, E), u.on(a.default.renderer.functionCallReturn, E), u.on(a.default.renderer.constructReturn, E), u.on(a.default.renderer.memberCallReturn, E), u.on(a.default.renderer.memberSetReturn, E), u.on(a.default.renderer.memberGetReturn, E), u.on(a.default.renderer.memberConstructReturn, E), u.on(a.default.renderer.callback, (e, t, n) => {
        h.apply(t, S(n))
    }), u.on(a.default.renderer.syncReturn, E), u.on("ELECTRON_RENDERER_RELEASE_CALLBACK", (e, t) => {
        d.info("[RELEASE_CALLBACK]: callbackId:", t), h.remove(t)
    }), process.on("exit", () => {
        u.send(a.default.browser.contextRelease)
    });
    const R = ["__resolve", "__isResolved"], N = ["__promise_", "__resolved_", "__remoteObj_", "__name_", "__what_"],
        O = e => {
            if (!e.__isResolved()) throw Error("Can not access the property of a remote module which has not Resolved yet.")
        };

    function W(e) {
        const t = function () {
        };
        Object.defineProperty(t, "name", {value: e.__name_}), Object.defineProperty(t, "what", {
            enumerable: !1,
            value: e.__what_
        });
        let n = new Proxy(t, {
            getPrototypeOf: t => (O(e), Reflect.getPrototypeOf(e.__remoteObj_)),
            setPrototypeOf: (e, t) => {
                throw new Error("changing prototype of remote object is forbidden")
            },
            isExtensible: t => (O(e), Reflect.isExtensible(e.__remoteObj_)),
            preventExtensions: t => (O(e), Reflect.preventExtensions(e)),
            getOwnPropertyDescriptor: (t, n) => (O(e), Reflect.getOwnPropertyDescriptor(e.__remoteObj_, n)),
            has: (t, n) => (O(e), Reflect.has(e.__remoteObj_, n)),
            deleteProperty: (t, n) => (O(t), Reflect.deleteProperty(e.__remoteObj_, n)),
            defineProperty: (t, n, r) => (O(e), Reflect.defineProperty(e.__remoteObj_, n, r)),
            get: (t, n, r) => {
                if ("string" == typeof n) {
                    if (String.prototype.includes.call(N, n)) {
                        return e[n]
                    }
                    if (String.prototype.includes.call(R, n)) {
                        return e[n]
                    }
                }
                return O(e), Reflect.get(e.__remoteObj_, n)
            },
            set: (t, n, r, i) => (O(e), Reflect.set(e.__remoteObj_, n, r, i)),
            ownKeys: t => (O(e), Reflect.ownKeys(e.__remoteObj_)),
            apply: (t, n, r) => {
                O(e), Reflect.apply(e.__remoteObj_, n, r)
            },
            construct: (t, n, r) => {
                if (O(e), "function" != typeof e.__remoteObj_) throw Error("operator new ONLY used for function");
                return new Promise((t, r) => {
                    let i = a.default.browser.construct, o = l.default(i),
                        d = f.getHiddenValue(e.__remoteObj_, "__remote_id__");
                    u.send(i, m, o, d, g(n)), s.default.add(o, e => {
                        try {
                            t(S(e))
                        } catch (e) {
                            r(e)
                        }
                    })
                })
            }
        });
        return e.__promise_.then(e => {
            let t = typeof e;
            if ("function" === t || "object" === t) {
                let t = T(e);
                t && y(n, t)
            }
        }), n
    }

    t.remoteRequire = function (e) {
        return W(new C("module", e))
    }, t.getBuiltin = function (e) {
        return W(new C("builtin", e))
    }, t.getGlobal = function (e) {
        return W(new C("global", e))
    }, t.getCurrentWindow = function () {
        return W(new C("current_window"))
    }, t.getCurrentWebContents = function () {
        return W(new C("current_web_contents"))
    }, t.getWebContents = function () {
        return W(new C("web_contents"))
    }
}, function (e, t) {
    e.exports = require("buffer")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = process.electronBinding("v8_util");
    t.default = class {
        constructor() {
            this.nextId = 0, this.callbacks = {}
        }

        add(e) {
            let t = r.getHiddenValue(e, "__remote_callback_id__");
            if (null != t) return t;
            t = this.nextId -= 1;
            const n = /at (.*)/gi, i = (new Error).stack;
            let o, s = n.exec(i);
            for (; null !== s;) {
                const e = s[1];
                if (!e.includes("native") && !e.includes("electron.asar")) {
                    o = /([^/^)]*)\)?$/gi.exec(e)[1];
                    break
                }
                s = n.exec(i)
            }
            return this.callbacks[t] = e, r.setHiddenValue(e, "__remote_callback_id__", t), r.setHiddenValue(e, "__remote_call_location__", o), t
        }

        get(e) {
            return this.callbacks[e] || function () {
            }
        }

        apply(e, ...t) {
            return this.get(e).apply(global, ...t)
        }

        remove(e) {
            const t = this.callbacks[e];
            t && (r.deleteHiddenValue(t, "__remote_callback_id__"), delete this.callbacks[e])
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(12);
    var i;
    !function (e) {
        let t = {};
        e.add = function (e, n, r) {
            t[e] = {func: n, thisArg: r}
        }, e.invoke = function (n, ...i) {
            let o = t[n];
            return o ? o.thisArg ? o.func.apply(o.thisArg, ...i) : o.func(...i) : r.error(`Cannot invoke function by unrecognize id. ${n}`), e
        }, e.remove = function (e) {
            delete t[e]
        }
    }(i || (i = {})), t.default = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    let r = 0;
    t.default = function (e) {
        return e ? e.concat(".").concat(String(++r)) : String(++r)
    }
}, function (e, t, n) {
    "use strict";
    const r = n(0), i = n(69), o = n(32), s = n(70), a = n(12), l = n(33), d = r.ipcMain,
        c = process.electronBinding("v8_util");
    let u = c.createDoubleIDWeakMap();
    const f = new i.default;

    function h(e, t, n, r, i, o) {
        let s, l = !1, d = null, c = !1;
        do {
            try {
                s = t[r]
            } catch (e) {
                l = !0
            }
            if (l) try {
                s = n.value[r], l = !1, n.meta.extendedMemberNames.push(r), c = !0
            } catch (e) {
                a.error(`property ${r} untouchable, even try root[name]`)
            }
            if (l) break;
            let i = Object.getOwnPropertyDescriptor(t, r);
            if (void 0 === i) {
                a.warn(`descriptor of property ${r} is undefined`);
                break
            }
            d = {
                name: r,
                enumerable: i.enumerable,
                writable: !1,
                type: "get"
            }, void 0 === i.get && "function" == typeof s ? d.type = "method" : ((i.set || i.writable) && (d.writable = !0), d.type = "get"), c ? (d.configurable = !0, d.value = w(e, s, o, !1, null)) : d.value = w(e, s, o, !1, n)
        } while (0);
        return d
    }

    function p(e, t, n, r = null) {
        let i = Object.getOwnPropertyNames(t);
        "function" == typeof t && (i = i.filter(function (e) {
            return !String.prototype.includes.call(s.propertiesOfFunction, e)
        }));
        let o = [];
        do {
            if (0 === i.length) break;
            let s = i.length;
            for (let a = 0; a < s; a++) {
                let s = h(e, t, n, i[a], 0, r);
                s && o.push(s)
            }
        } while (0);
        return o
    }

    function m(e, t, n, r = null) {
        let i = null, o = Object.getPrototypeOf(t);
        return i = null === o || o === Object.prototype || o === Function.prototype ? null : w(e, o, r, !1, n)
    }

    function w(e, t, n = null, r = !1, i = null) {
        n = null === n ? {} : n;
        const o = {type: typeof t};
        "object" === o.type && (o.type = function (e, t) {
            let n = typeof e;
            if ("object" !== n) throw new Error("incorrect arg at index 0. non-object");
            return null === e ? n = "value" : ArrayBuffer.isView(e) ? n = "buffer" : Array.isArray(e) ? n = "array" : e instanceof Error ? n = "error" : e instanceof Date ? n = "date" : l.isPromise(e) ? n = "promise" : Object.prototype.hasOwnProperty.call(e, "callee") && null != e.length ? n = "array" : t && c.getHiddenValue(e, "simple") && (n = "value"), n
        }(t, r));
        do {
            if ("object" === o.type || "function" === o.type) {
                let r = f.getIdOfObject(t);
                if (r && n[r]) {
                    o.refId = r, f.add(e, t);
                    break
                }
            }
            "array" === o.type ? o.members = t.map(t => w(e, t, n)) : "object" === o.type || "function" === o.type ? (null == i && (o.extendedMemberNames = [], i = {
                value: t,
                meta: o
            }), o.name = t.constructor ? t.constructor.name : "", o.id = f.add(e, t), n[o.id] = !0, o.members = p(e, t, i, n), o.proto = m(e, t, i, n)) : "buffer" === o.type ? o.value = Buffer.from(t) : "promise" === o.type ? (t.then(function () {
            }, function () {
            }), o.then = w(e, function (e, n) {
                t.then(e, n)
            })) : "error" === o.type ? (o.members = g(t), o.members.push({
                name: "name",
                value: t.name
            })) : "date" === o.type ? o.value = t.getTime() : (o.type = "value", o.value = t)
        } while (0);
        return o
    }

    function g(e) {
        return Object.getOwnPropertyNames(e).map(t => ({name: t, value: e[t]}))
    }

    function _(e, t, n, i) {
        const s = function (i) {
            let l, d, h = 0, p = 0;
            switch (i.type) {
                case"value":
                    return i.value;
                case"remote-object":
                    return f.get(i.id);
                case"array":
                    return _(e, t, n, i.value);
                case"buffer":
                    return Buffer.from(i.value);
                case"date":
                    return new Date(i.value);
                case"promise":
                    return Promise.resolve({then: s(i.then)});
                case"object":
                case"interest": {
                    let e = {};
                    for (Object.defineProperty(e.constructor, "name", {value: i.name}), h = 0, p = (d = i.members).length; h < p; h++) e[(l = d[h]).name] = s(l.value);
                    return e
                }
                case"function": {
                    const s = e.id, l = [n, i.id];
                    if (a.info("renderer function id:" + l), u.has(l)) return u.get(l);
                    let d = function (...t) {
                        a.info("[CALLBACK] args", t);
                        let n = [...t];
                        e.isDestroyed() || s !== e.id ? function (e, t, n) {
                            let i = "Attempting to call a function in a renderer window that has been closed or released." + `\nFunction provided here: ${e.location}`;
                            if (t.length > 0 && t[0].sender && t[0].sender instanceof r.webContents.constructor) {
                                const {sender: e} = t[0], r = e.eventNames().filter(t => {
                                    let r = e.listeners(t), i = !1;
                                    return r.forEach(e => {
                                        e === n && (i = !0)
                                    }), i
                                });
                                r.length > 0 && (i += `\nRemote event names: ${r.join(", ")}`, r.forEach(t => {
                                    Object.getPrototypeOf(e).removeListener.call(e, t, n)
                                }))
                            }
                            a.warn(i)
                        }(i, n, d) : e.send(o.default.renderer.callback, i.id, w(e, n))
                    };
                    return Object.defineProperty(d, "length", {value: i.length}), c.setRemoteCallbackFreer(d, t, n, i.id, e), u.set(l, d), d
                }
                default:
                    throw new TypeError(`Unknown type: ${i.type}`)
            }
        };
        return i.map(s)
    }

    function v(e, t, n, r) {
        let i, o;
        try {
            return t.apply(n, r)
        } catch (e) {
            return o = t.name, new Error(`Could not call remote function '${i = null != o ? o : "anonymous"}'. Check that the function signature is correct. Underlying error: ${e.message}`)
        }
    }

    function b(e) {
        return {type: "exception", message: e.message, stack: e.stack || e}
    }

    function y(e) {
        const t = new Error(e);
        throw Object.defineProperty(t, "code", {value: "EBADRPC"}), Object.defineProperty(t, "errno", {value: -72}), t
    }

    var T;
    !function (e) {
        const t = (e, t, ...n) => {
            const r = e.sender;
            r.isDestroyed() ? a.warn("webcontext is destroyed.") : r.send(t, ...n)
        };
        e.startServer = function () {
            d.on(o.default.browser.require, (e, n, r, i) => {
                a.info(`[REQUIRE] module=${i} `);
                let s = process.mainModule.require(i), l = w(e.sender, s);
                t(e, o.default.renderer.requireReturn, r, l)
            }), d.on(o.default.browser.builtIn, (e, n, i, s) => {
                a.info(`[BUILTIN]: property=${s} contextId=${n}`);
                let l = r[s], d = w(e.sender, l);
                a.info(`[BUILTIN]: returns remoteId:${d.id}, type: ${typeof l}`), t(e, o.default.renderer.getBuiltInReturn, i, d)
            }), d.on(o.default.browser.global, (e, n, r, i) => {
                a.info(`[GLOBAL]: proerty:${i} contextId=${n}`);
                let s, l = global[i];
                s = w(e.sender, l), a.info(`[GLOBAL]: returns remoteid=${s.id}, obj=` + typeof l), t(e, o.default.renderer.getGlobalReturn, r, s)
            }), d.on(o.default.browser.currentWindow, (e, n, r, i) => {
                a.info(`[CURRENT_WINDOW]: property=${i} contextId=${n}`);
                let s = e.sender.getOwnerBrowserWindow.call(e.sender), l = w(e.sender, s);
                a.info(`[CURRENT_WINDOW]: returns remoteid=${l.id}, obj=` + s), t(e, o.default.renderer.currentWindowReturn, r, l)
            }), d.on(o.default.browser.currentWebContents, (e, n, r, i) => {
                t(e, o.default.renderer.currentWebContentsReturn, r, w(e.sender, e.sender))
            }), d.on(o.default.browser.webContents, (e, n, i, s) => {
                a.info(`[WebContents]: proerty:${s} contextId=${n}`);
                let l, d = r.webContents;
                l = w(e.sender, d), a.info(`[WebContents]: returns remoteid=${l.id}, obj=` + typeof d), t(e, o.default.renderer.webContentsReturn, i, l)
            });
            const e = (e, t) => {
                const n = (t, n) => {
                    t && Object.getOwnPropertyNames(t).forEach(r => {
                        n ? e.once(r, t[r]) : e.on(r, t[r])
                    })
                };
                t.on && n(t.on, !1), t.once && n(t.once, !0)
            };
            d.on(o.default.browser.construct, (n, r, i, s, l) => {
                let d, c = null;
                try {
                    a.info(`[CONSTRUCTOR]: remoteId=${s} `);
                    let u = l.length > 0 ? l[l.length - 1] : null;
                    l = _(n.sender, n.frameId, r, l);
                    let h = f.get(s);
                    null == h && y(`Cannot call constructor on missing remote object ${s}`), u && "interest" === u.type && (c = l.pop());
                    let p = new (Function.prototype.bind.apply(h, [null, ...l]));
                    p && c && e(p, c), d = w(n.sender, p, null, !1), a.info(`[CONSTRUCTOR]: returns remoteId =${d.id} name=${h.name} `)
                } catch (e) {
                    d = b(e)
                } finally {
                    t(n, o.default.renderer.constructReturn, i, d)
                }
            }), d.on(o.default.browser.functionCall, function (e, n, r, i, s, l) {
                let d;
                try {
                    a.info(`[FUNCTION_CALL]: remoteId=${s}`), l = _(e.sender, e.frameId, n, l);
                    let c = f.get(s);
                    if (null == c) a.error(`Cannot call function on missing remote object ${s}`), d = w(e.sender, void 0); else {
                        let t = i ? f.get(i) : global;
                        if (t) {
                            let n = v(0, c, t, l);
                            d = w(e.sender, n)
                        } else a.error(`Cannot call function(${s}) on missing context(${i})`), d = w(e.sender, void 0)
                    }
                    a.info(`[FUNCTION_CALL]: name=${c.name}`)
                } catch (e) {
                    d = b(e)
                } finally {
                    t(e, o.default.renderer.functionCallReturn, r, d)
                }
            }), d.on(o.default.browser.memberCall, function (e, n, r, i, s, l, d) {
                let c;
                a.info(`[MEMBER_CALL]: thisArg=${i}, remoteId=${s}, method=${l}, args count=${d.length}`);
                try {
                    d = _(e.sender, e.frameId, n, d);
                    let u = f.get(s);
                    null == u && y(`Cannot call function '${l}' on missing remote object ${s}`);
                    let h = i ? f.get(i) : u;
                    if (h) {
                        let t = v(0, u[l], h, d);
                        c = w(e.sender, t), a.info("[MEMBER_CALL]: return=" + t)
                    } else c = w(e.sender, void 0)
                } catch (e) {
                    c = b(e)
                } finally {
                    t(e, o.default.renderer.memberCallReturn, r, c)
                }
            }), d.on(o.default.browser.memberGet, function (e, n, r, i, s) {
                let l;
                try {
                    a.info(`[MEMBER_GET]: remoteId=${i}, property=`, s);
                    let n = f.get(i);
                    null == n && y(`Cannot get property '${Object.toString.call(s)}' on missing remote object ${i}`);
                    let d = n[s];
                    l = w(e.sender, d)
                } catch (e) {
                    l = b(e)
                } finally {
                    t(e, o.default.renderer.memberGetReturn, r, l)
                }
            }), d.on(o.default.browser.memberSet, function (e, n, r, i, s, l) {
                try {
                    a.info(`[MEMBER_SET]: remoteId=${i}, property=` + s), l = _(e.sender, e.frameId, n, l);
                    let d = f.get(i);
                    null == d && y(`Cannot set property '${Object.toString.call(s)}' on missing remote object ${i}`), d[s] = l[0], t(e, o.default.renderer.memberSetReturn, r, {
                        type: "value",
                        value: !0
                    })
                } catch (n) {
                    t(e, o.default.renderer.memberSetReturn, r, b(n))
                }
            }), d.on(o.default.browser.memberConstruct, function (n, r, i, s, l, d) {
                let c, u = null;
                try {
                    a.info(`[MEMBER_CONSTRUCTOR]: regId=${s}, method=${l}`);
                    let h = d.length > 0 ? d[d.length - 1] : null;
                    d = _(n.sender, n.frameId, r, d);
                    let p = f.get(s);
                    null == p && y(`Cannot call constructor '${l}' on missing remote object ${s}`), h && "interest" === h.type && (u = d.pop());
                    let m = p[l], g = new (Function.prototype.bind.apply(m, [null, ...d]));
                    g && u && e(g, u), c = w(n.sender, g)
                } catch (e) {
                    c = b(e)
                } finally {
                    t(n, o.default.renderer.memberConstructReturn, i, c)
                }
            }), d.on(o.default.browser.sync, function (e, n, r, i) {
                let s = f.get(i);
                t(e, o.default.renderer.syncReturn, r, w(e.sender, s))
            }), d.on("ELECTRON_BROWSER_DEREFERENCE", function (e, t) {
                let n = f.get(t);
                if (r.ipcMain.emit("log_to_renderer", "ELECTRON_BROWSER_DEREFERENCE", t, typeof n), n) {
                    let r = n.name;
                    r || (r = n.constructor ? n.constructor.name : ""), f.remove(e.sender.id, t)
                } else t < 0 && a.warn("remote id reference to nothing:", t)
            }), d.on(o.default.browser.contextRelease, e => {
                f.clear(e.sender.id)
            })
        }, e.getObjectRegistry = function () {
            return f
        }
    }(T || (T = {})), e.exports = T
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(12), i = -1 * Math.pow(2, 31), o = process.electronBinding("v8_util");
    t.default = class {
        constructor() {
            this.nextId = 0, this.storage = new Map, this.owners = new Map
        }

        add(e, t) {
            const n = this.saveToStorage(t), r = e.id;
            let i = this.owners.get(r);
            return i || (i = new Set, this.owners.set(r, i), this.registerDeleteListener(e, r)), i.has(n) || (i.add(n), this.storage.get(n).count++), n
        }

        getIdOfObject(e) {
            return o.getHiddenValue(e, "__remote_id__")
        }

        get(e) {
            const t = this.storage.get(e);
            if (void 0 !== t) return t.object
        }

        remove(e, t) {
            this.dereference(t);
            let n = this.owners.get(e);
            n && n.delete(t)
        }

        clear(e) {
            let t = this.owners.get(e);
            if (t) {
                for (let e of t) this.dereference(e);
                this.owners.delete(e)
            }
        }

        getStorageSize() {
            return this.storage.size
        }

        saveToStorage(e) {
            let t = o.getHiddenValue(e, "__remote_id__");
            if (!t) {
                if ((t = --this.nextId) <= i) throw new Error("object registry id overflow");
                this.storage.set(t, {object: e, count: 0}), o.setHiddenValue(e, "__remote_id__", t)
            }
            return t
        }

        dereference(e) {
            let t = this.storage.get(e);
            null != t && (t.count -= 1, 0 === t.count && (o.deleteHiddenValue(t.object, "__remote_id__"), this.storage.delete(e)))
        }

        registerDeleteListener(e, t) {
            const n = e.getProcessId(), i = (o, s) => {
                s === n && (r.info("render-view-deleted: processid=" + n), (() => {
                    r.info("before clear. objectsRegistry capacity=" + this.storage.size, "owners size:" + this.owners.size)
                })(), e.removeListener("render-view-deleted", i), this.clear(t))
            };
            e.on("render-view-deleted", i)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r;
    !function (e) {
        e.propertiesOfFunction = ["length", "name", "arguments", "caller", "prototype", "apply", "bind", "call", "toString"]
    }(r || (r = {})), e.exports = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), n(28), ("browser" === process.type ? global.xlDesktopApplicationSolution : window.xlDesktopApplicationSolution).GetPerformanceMonitorReport().initPerformanceMonitor("", {
        mainLoopHangCheckEnabled: !0,
        cpuUsageCheckEnabled: !0,
        memoryUsageCheckEnabled: !0
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(2), i = n(1), o = n(3).default(i.join(__rootDir, "../bin/ThunderHelper.node")),
        s = r.default.getLogger("HistoryDataNS");
    let a = i.resolve(__profilesDir, "mainWndData.ini"), l = 365, d = 700;
    !function (e) {
        e.getMainWndSizeHistoryData = function () {
            let e = null;
            s.information(a);
            let t = o.readINI(a, "MainBody", "ExitState"), n = o.readINI(a, "MainBody", "MainWndLastWidth"),
                r = o.readINI(a, "MainBody", "MainWndLastHeight");
            if (s.information(t, n, r), "" !== n && "" !== r) {
                let i = Number(n), o = Number(r);
                (i < l || o < d) && (i = l, o = d), (e = {}).width = i, e.height = o, e.exitState = t
            }
            return null === e && ((e = {}).exitState = "normal", e.width = l, e.height = d), e
        }, e.setExitType = function (e) {
            o.writeINI(a, "MainBody", "ExitType", e)
        }, e.getExitType = function () {
            return o.readINI(a, "MainBody", "ExitType")
        }
    }(t.HistoryDataNS || (t.HistoryDataNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(2), i = n(11), o = n(8), s = r.default.getLogger("Thunder.Main");
    let a = null, l = 0, d = void 0;

    function c(e, t) {
        let n = "status=smallwindow";
        e && (n = "status=bigwindow"), i.XLStatNS.trackEvent("core_event", "main_effective_show", "", 0, 0, 0, 0, n), l = a.getTickCount(), t && t.webContents.send("main-window-state-active-show")
    }

    function u() {
        do {
            if (0 === l) {
                s.information("window online stat not yet shown");
                break
            }
            let e = a.getTickCount();
            if (e < l) break;
            let t = (e - l) / 1e3, n = "online_time=" + t;
            l = 0, s.information("window online stat ", t), i.XLStatNS.trackEvent("core_event", "main_effective_online_time", "", 0, 0, 0, 0, n)
        } while (0)
    }

    function f(e) {
        let t = new Date;
        e.webContents.send(o.ThunderChannelList.channelMRShowOrHideWindow, "show", t.getTime())
    }

    function h(e) {
        let t = new Date;
        e.webContents.send(o.ThunderChannelList.channelMRShowOrHideWindow, "hide", t.getTime())
    }

    !function (e) {
        e.watch = function (e, t) {
            a = e, t.on("show", () => {
                t.webContents.send(o.ThunderChannelList.channelMRMainWndRestore), "" !== d && (c(t.isMaximized(), t), f(t)), d = ""
            }), t.on("restore", () => {
                t.webContents.send(o.ThunderChannelList.channelMRMainWndRestore), "minimize" !== d && "hide" !== d || (s.information("窗口展示上报resotre window show stat"), c(t.isMaximized(), t), f(t)), d = ""
            }), t.on("maximize", () => {
                t.webContents.send(o.ThunderChannelList.channelMRMainWndMax), "minimize" !== d && "hide" !== d || (s.information("窗口展示上报maximize window show stat"), c(t.isMaximized(), t), f(t)), d = ""
            }), t.on("hide", () => {
                t.webContents.send(o.ThunderChannelList.channelMRMainWndMin), d = "hide", u(), h(t)
            }), t.on("minimize", () => {
                t.webContents.send(o.ThunderChannelList.channelMRMainWndMin), d = "minimize", u(), h(t)
            })
        }, e.onExit = function () {
            u()
        }
    }(t.MainWindowCoreEventStatNS || (t.MainWindowCoreEventStatNS = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(7), s = n(35), a = n(5);
    let l = {};

    function d(e, t = {}, n) {
        let r = {
            width: 400,
            height: 174,
            frame: !1,
            resizable: !1,
            maximizable: !1,
            minimizable: !1,
            parent: n,
            show: !1,
            modal: !0,
            alwaysOnTop: !0,
            webPreferences: {
                devTools: !1,
                spellcheck: !1,
                nodeIntegration: !0,
                webSecurity: "development" !== process.env.RUN_ENV
            }
        };
        if (t && (r = Object.assign({}, r, t), t.webPreferences && (r.webPreferences = Object.assign({
            devTools: !1,
            spellcheck: !1,
            nodeIntegration: !0,
            webSecurity: "development" !== process.env.RUN_ENV
        }, t.webPreferences))), r.modal && l.confirm) return;
        r.modal && (l.confirm = !0);
        let s = "development" === process.env.RUN_ENV ? "http://localhost:9080/message-box-renderer/" : `file:///${__dirname}/message-box-renderer/index.html`;
        s += `?boxId=${e}`;
        let a = new i.BrowserWindow(r);
        a.loadURL(s).catch(), a.on("ready-to-show", () => {
            a.setAlwaysOnTop(!1), o.roundRectWindow(a, n)
        }), a.on("close", () => {
            l.confirm = !1, n.focus()
        })
    }

    t.initMessageBox = function (e, t) {
        const n = {};
        let r = new Map;
        i.ipcMain.on("message-box-confirm-create", (t, n) => {
            let r = e;
            if (n.options.parentId) {
                let e = i.BrowserWindow.fromId(n.options.parentId);
                e && (r = e)
            }
            d(n.boxId, Object.assign({}, n.dialogConf, {
                width: n.options.windowWidth,
                height: n.options.windowHeight
            }), r)
        }), i.ipcMain.on("message-box-pop-create", (t, n) => {
            let r = s.MessageBoxNS.Action.Unknow, a = e;
            if (n.parentId) {
                let e = i.BrowserWindow.fromId(n.parentId);
                e && (a = e)
            }
            let d = {
                frame: !1,
                resizable: !1,
                maximizable: !1,
                minimizable: !1,
                parent: a,
                show: !1,
                modal: !0,
                alwaysOnTop: !0,
                webPreferences: {
                    spellcheck: !1,
                    nodeIntegration: !0,
                    webSecurity: "development" !== process.env.RUN_ENV
                }
            };
            if (n.dialogConf && (d = Object.assign({}, d, n.dialogConf), n.dialogConf.webPreferences && (d.webPreferences = Object.assign({
                spellcheck: !1,
                nodeIntegration: !0,
                webSecurity: "development" !== process.env.RUN_ENV
            }, n.dialogConf.webPreferences))), d.modal && l.pop) return;
            d.modal && (l.pop = !0);
            let c = "development" === process.env.RUN_ENV ? "http://localhost:9080/message-box-renderer/" : `file:///${__dirname}/message-box-renderer/index.html`;
            c += `?boxId=${n.boxId}`;
            let u = new i.BrowserWindow(d);
            u.loadURL(c).catch(), u.on("ready-to-show", () => {
                u.setAlwaysOnTop(!1), o.roundRectWindow(u, a)
            }), u.on("close", () => {
                l.pop = !1, a.focus(), r === s.MessageBoxNS.Action.Unknow && u.webContents.send("message-box-resolve-systemmenu")
            }), i.ipcMain.once(`message-box-resolve-${n.boxId}`, (e, t, n) => {
                r = t
            })
        }), i.ipcMain.on("message-box-custom-create", (t, d) => {
            let c = s.MessageBoxNS.Action.Unknow, u = e;
            if (a.isNumber(d.options.parentId)) {
                let e = i.BrowserWindow.fromId(d.options.parentId);
                e && (u = e)
            }
            let f = {
                width: 300,
                height: 100,
                frame: !1,
                resizable: !1,
                maximizable: !1,
                minimizable: !1,
                parent: u,
                show: !1,
                modal: !0,
                alwaysOnTop: !1,
                webPreferences: {
                    spellcheck: !1,
                    nodeIntegration: !0,
                    webSecurity: "development" !== process.env.RUN_ENV
                }
            };
            if (d.dialogConf && (f = Object.assign({}, f, d.dialogConf), d.dialogConf.webPreferences && (f.webPreferences = Object.assign({
                spellcheck: !1,
                nodeIntegration: !0,
                webSecurity: "development" !== process.env.RUN_ENV
            }, d.dialogConf.webPreferences))), f.modal && l[d.popType]) return;
            if (f.modal && (l[d.popType] = !0), d.options.singleton) {
                if (r.get(d.popType)) return;
                r.set(d.popType, !0)
            }
            let h = "development" === process.env.RUN_ENV ? "http://localhost:9080/message-box-renderer/" : `file:///${__dirname}/message-box-renderer/index.html`;
            h += `?boxId=${d.boxId}`;
            let p = new i.BrowserWindow(f);
            p.loadURL(h).catch(), p.on("ready-to-show", () => {
                p.setAlwaysOnTop(!1), o.roundRectWindow(p, e)
            }), p.on("close", () => {
                l[d.popType] = !1, d.options.singleton && r.set(d.popType, !1), e.focus(), c === s.MessageBoxNS.Action.Unknow && p.webContents.send("message-box-resolve-systemmenu")
            }), n[d.popType] = p, i.ipcMain.once(`message-box-resolve-${d.boxId}`, (e, t, n) => {
                c = t
            })
        }), i.ipcMain.on("message-box-individuation-create", (t, a) => {
            let d = s.MessageBoxNS.Action.Unknow, c = void 0, u = {
                width: 300,
                height: 100,
                frame: !1,
                resizable: !1,
                maximizable: !1,
                minimizable: !1,
                parent: e,
                show: !1,
                modal: !0,
                alwaysOnTop: !1,
                webPreferences: {
                    spellcheck: !1,
                    nodeIntegration: !0,
                    webSecurity: "development" !== process.env.RUN_ENV
                }
            };
            if (a.dialogConf && (u = Object.assign({}, u, a.dialogConf), a.dialogConf.webPreferences && (u.webPreferences = Object.assign({
                spellcheck: !1,
                nodeIntegration: !0,
                webSecurity: "development" !== process.env.RUN_ENV
            }, a.dialogConf.webPreferences))), u.modal && l[a.popType]) return;
            if (u.modal && (l[a.popType] = !0), a.options.singleton) {
                if (r.get(a.popType)) return;
                r.set(a.popType, !0)
            }
            let f = "development" === process.env.RUN_ENV ? "http://localhost:9080/message-box-renderer/" : `file:///${__dirname}/message-box-renderer/index.html`;
            f += `?boxId=${a.boxId}`;
            let h = new i.BrowserWindow(u);
            h.loadURL(f).catch(), h.on("ready-to-show", () => {
                h.setAlwaysOnTop(!1), o.roundRectWindow(h, e)
            }), h.on("close", () => {
                l[a.popType] = !1, a.options.singleton && r.set(a.popType, !1), e.focus(), d === s.MessageBoxNS.Action.Unknow && h.webContents.send("message-box-resolve-systemmenu"), e.webContents.send(`message-box-resolve-${a.boxId}`, d, c)
            }), n[a.popType] = h, i.ipcMain.once(`message-box-resolve-${a.boxId}`, (e, t, n) => {
                d = t, c = n
            })
        }), i.ipcMain.on("message-box-open", (e, t) => {
            const r = t.name, i = t.position;
            n[r] && (i && n[r].setPosition(i.x, i.y), n[r].show())
        })
    }, t.confirm = function (e, t, n) {
        return r(this, void 0, void 0, function* () {
            let r = String(Math.random()).replace(/\D/, "");
            return i.ipcMain.once(`message-box-init-${r}`, t => {
                t.sender.send("message-box-init-reply", {popType: "confirm", options: e})
            }), d(r, Object.assign({}, t, {width: e.windowWidth, height: e.windowHeight}), n), new Promise(e => {
                i.ipcMain.once(`message-box-resolve-${r}`, (t, n, r) => {
                    e({action: n, checkboxChecked: r})
                })
            })
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0), i = n(7);
    t.default = function (e) {
        r.ipcMain.on("create-notify-window", (e, t) => {
            {
                let n = r.screen.getPrimaryDisplay().workArea, o = new r.BrowserWindow({
                    width: t.width || 440,
                    height: t.height || 245,
                    x: n.width - (t.width || 440),
                    y: n.height - (t.height || 245),
                    frame: !1,
                    resizable: !1,
                    show: !1,
                    alwaysOnTop: !0,
                    skipTaskbar: !0,
                    webPreferences: {devTools: !1, spellcheck: !1, nodeIntegration: !0}
                });
                o.once("ready-to-show", () => {
                    i.roundRectWindow(o, null, !1, !1)
                }), e.sender.send("notify-window-created", o.id)
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0), i = n(2), o = n(7), s = n(15), a = n(6), l = n(5), d = i.default.getLogger("SearchWindows");
    let c = null, u = null, f = !1, h = 0, p = 0;
    t.default = function (e, t) {
        (u = e).on("hide", () => {
            c && c.close()
        }), u.on("resize", () => {
            c && c.close()
        }), a.client.attachServerEvent("CreateSearchWindow", (n, ...i) => {
            if (!i || i.length < 3) return;
            let f = i[0], m = i[1];
            h = f, p = m;
            do {
                if (null !== c) break;
                const n = "development" === process.env.RUN_ENV ? "http://localhost:9080/search-renderer/" : `file:///${__dirname}/search-renderer/index.html`;
                let i = u.getBounds(), h = (c = new r.BrowserWindow({
                    x: i.x + f,
                    y: i.y + m,
                    width: 460,
                    height: 246,
                    parent: e,
                    frame: !1,
                    resizable: !1,
                    minimizable: !1,
                    alwaysOnTop: !1,
                    show: !1,
                    backgroundColor: "#FFF",
                    webPreferences: {
                        devTools: !1,
                        spellcheck: !1,
                        nodeIntegration: !0,
                        webSecurity: "development" !== process.env.RUN_ENV
                    }
                })).getNativeWindowHandle().readUIntLE(0, 4);
                t.modifyStyle(h, s.WindowStyle.WS_THICKFRAME, 0), t.modifyStyleEx(h, 0, s.WindowStyleEx.WS_EX_TOOLWINDOW), c.loadURL(n).catch(), c.once("show", () => {
                    d.information("search show......"), o.roundRectWindow(c, e)
                }), c.on("blur", () => {
                    setTimeout(() => {
                        u.isFocused() || c.isDestroyed() || c.close()
                    }, 100)
                }), u.on("blur", () => {
                    setTimeout(() => {
                        l.isNullOrUndefined(c) || c.isDestroyed() || c.isFocused() || c.close()
                    }, 50)
                }), u.on("move", () => {
                    l.isNullOrUndefined(c) || c.isDestroyed() || c.hide()
                }), c.on("focus", () => {
                    a.client.broadcastEvent("SearchBarFocusChange", !0)
                }), c.on("closed", () => {
                    c = null
                })
            } while (0)
        }), a.client.attachServerEvent("ShowSearchWindow", (e, ...t) => {
            if (!t || 0 === t.length) return;
            let n = t[0];
            do {
                if (!c) break;
                if (n && f) {
                    let e = u.getBounds();
                    c.setPosition(e.x + h, e.y + p), c.showInactive()
                } else c.hide()
            } while (0)
        }), a.client.attachServerEvent("OnSearchBarInputFocus", (e, ...t) => {
            t && 0 !== t.length && (f = t[0])
        }), a.client.attachServerEvent("OnSearchWindowClickMouse", (e, ...t) => {
            if (!t || t.length < 6) return;
            let n = t[0], i = t[1], o = t[2], s = t[3], l = t[4], d = t[5];
            if (null !== c) {
                let e = r.screen.getCursorScreenPoint(), t = r.screen.getDisplayNearestPoint(e).scaleFactor;
                n = Math.round(n / t), i = Math.round(i / t);
                let f = u.getBounds();
                (n < f.x + o || n > f.x + l || i < f.y + s || i > f.y + d) && (a.client.broadcastEvent("SearchBarFocusChange", !1), c.close())
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0), i = n(2).default.getLogger("path-selector");
    let o = {};
    const s = 229;
    t.default = function () {
        r.ipcMain.on("dropdown-file-window-create", (e, t, n) => {
            do {
                let e = r.BrowserWindow.fromId(t);
                if (!e) break;
                if (o.hasOwnProperty(String(t))) {
                    i.information("create window but exist");
                    break
                }
                let a = new r.BrowserWindow({
                    frame: !1,
                    resizable: !1,
                    minimizable: !1,
                    parent: e,
                    show: !1,
                    width: 400,
                    height: s,
                    webPreferences: {spellcheck: !1, nodeIntegration: !0}
                });
                o[t] = a, a.on("ready-to-show", () => {
                    a.webContents.send("dropdown-file-window-created", n)
                }), e.on("close", () => {
                    i.information("parent close"), a.close()
                }), a.on("close", () => {
                }), a.on("closed", () => {
                    delete o[t]
                }), a.on("blur", () => {
                    a.hide()
                });
                const l = "development" === process.env.RUN_ENV ? "http://localhost:9080/dropdown-file-renderer/" : `file:///${__dirname}/dropdown-file-renderer/index.html`;
                a.loadURL(l).catch()
            } while (0)
        }), r.ipcMain.on("dropdown-file-window-show", (e, t, n, s, a, l, d) => {
            do {
                let e = r.BrowserWindow.fromId(t);
                if (o.hasOwnProperty(String(t))) {
                    let c = o[t];
                    if (!c || c.isDestroyed()) break;
                    if (!n) {
                        c.hide();
                        break
                    }
                    a && c.webContents.send("dropdown-file-window-update-options", a, l, d);
                    let u = null;
                    try {
                        u = JSON.parse(s)
                    } catch (e) {
                        i.warning(e)
                    }
                    if (!u) break;
                    let f = r.screen.getCursorScreenPoint(), h = r.screen.getDisplayNearestPoint(f).workAreaSize.height,
                        p = e.getBounds(), m = c.getSize(), w = p.y + u.bottom;
                    i.information("show dropdown", w, m[1], h), w + m[1] > h && (w = p.y + u.top - m[1]), c.setBounds({
                        x: Math.floor(p.x + u.left),
                        y: Math.floor(w),
                        width: Math.floor(u.width),
                        height: Math.floor(m[1])
                    }), i.information("show dropdown setBounds", m[1]), c.show(), c.focus()
                } else i.warning("show dropdown window but doesnot created")
            } while (0)
        }), r.ipcMain.on("dropdown-file-window-select", (e, t, n, i, s, a) => {
            let l = r.BrowserWindow.fromId(t);
            for (let e in o) if (o[e] === l) {
                let t = r.BrowserWindow.fromId(Number(e));
                t.webContents.send("dropdown-file-window-select", n, i, s, a), t.focus();
                break
            }
        }), r.ipcMain.on("dropdown-file-window-click-hide", (e, t) => {
            let n = r.BrowserWindow.fromId(t);
            n.hide();
            for (let e in o) if (o[e] === n) {
                r.BrowserWindow.fromId(Number(e)).focus();
                break
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0), i = n(7);
    t.default = function (e, t) {
        r.ipcMain.on("embedded-browser-create", (t, n, o) => {
            let s = e, a = r.BrowserWindow.fromId(n);
            null === a || void 0 === a || a.isDestroyed() || (a.on("ready-to-show", () => {
                o && (s = null);
                try {
                    let e = r.nativeImage.createFromPath(`${__rootDir}/static/thunder11.ico`);
                    a.setIcon(e)
                } catch (e) {
                }
                i.roundRectWindow(a, s)
            }), a.on("close", () => {
                s && s.focus()
            }))
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0), i = n(5), o = n(7);
    t.default = function (e, t) {
        r.ipcMain.on("create-shadow-window", (t, n, s, a, l, d) => {
            let c = null, u = r.BrowserWindow.fromId(n);
            c = i.isNumber(s) ? r.BrowserWindow.fromId(s) : e, i.isBoolean(a) || (a = !0), i.isBoolean(l) || (l = !0), i.isNumber(d) || (d = 16), null === u || void 0 === u || u.isDestroyed() || u.once("ready-to-show", () => {
                o.roundRectWindow(u, c, a, l, d)
            })
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(5), s = n(2), a = n(6), l = n(17), d = n(36), c = n(19), u = n(81), f = n(7), h = n(11),
        p = s.default.getLogger("LoginUI");
    t.loginUIObj = new class {
        constructor() {
            this.retryLoginWnd = null, this.loginWnd = null, this.thunderHelperObj = null, this.parentWnd = null, this.loginWndDefaultWidth = 300, this.loginWndDefaultHeight = 440, this.isShowLoginWnd = !1
        }

        init(e, t) {
            this.parentWnd = e, this.thunderHelperObj = t, i.ipcMain.on(u.NodeEventMesssageNS.eventLoginWndCreate, (e, t, n, i, o, s) => r(this, void 0, void 0, function* () {
                yield this.createLoginWnd(t, n, i, o, s)
            })), i.ipcMain.on(u.NodeEventMesssageNS.eventLoginWndShow, (e, t, n, r, i, o) => {
                let s = this.updateLoginWnd(t, n, r, i, o);
                e.sender.send(u.NodeEventMesssageNS.eventLoginWndShowResult, s)
            }), i.ipcMain.on(u.NodeEventMesssageNS.eventLoginWndClose, (e, t) => {
                this.closeLoginWnd(t)
            }), i.ipcMain.on(u.NodeEventMesssageNS.eventRetryLoginWndCreate, (e, t, n) => {
                this.createRetryLoginWnd(t, n)
            }), i.ipcMain.on(u.NodeEventMesssageNS.eventModifierUserinfoWndCreate, (e, t) => {
                this.createModifierUserInfoWnd(t)
            }), i.ipcMain.on("create-personal-info-window", (e, t, n, r) => {
                let i = this.createPersonalInfoWnd(t, n, r);
                i.on("ready-to-show", () => {
                    e.sender.isDestroyed() || e.sender.send("personal-info-window-ready-to-show", i.id)
                }), e.sender.isDestroyed() || e.sender.send("personal-info-window-created", i.id)
            })
        }

        createLoginWnd(e, t, n, s, u) {
            return r(this, void 0, void 0, function* () {
                if (p.information("create loginwnd:", e, t, n, s, u, this.loginWnd), null !== this.loginWnd && void 0 !== this.loginWnd && !this.loginWnd.isDestroyed()) return p.information("createLoginWnd: 登陆框已经存在"), void (!0 === this.isShowLoginWnd && (this.loginWnd.show(), l.ToolsUtilitiesAWNS.setForegroundWindow(this.thunderHelperObj, this.loginWnd).catch()));
                if (o.isNullOrUndefined(e) || o.isNullOrUndefined(t)) p.information("createLoginWnd: 参数有问题"); else if (t = "file:///" + t, o.isNullOrUndefined(s) && (s = 300), o.isNullOrUndefined(u) && (u = 440), this.loginWndDefaultWidth = s, this.loginWndDefaultHeight = u, this.loginWnd = new i.BrowserWindow({
                    width: this.loginWndDefaultWidth,
                    height: this.loginWndDefaultHeight,
                    modal: !1,
                    resizable: !1,
                    minimizable: !1,
                    frame: !1,
                    parent: this.parentWnd,
                    show: !1,
                    alwaysOnTop: !0,
                    webPreferences: {
                        devTools: !1,
                        spellcheck: !1,
                        nodeIntegration: !0,
                        webSecurity: !1,
                        preload: `${__rootDir}/out/common-preload.js`
                    }
                }), !o.isNullOrUndefined(this.loginWnd) && !this.loginWnd.isDestroyed()) {
                    this.isShowLoginWnd = !1;
                    let e = (yield a.client.callServerFunction("GetInitUserLoginParam")).userAgent,
                        r = yield a.client.callServerFunction("GetThunderVersion");
                    if (this.loginWnd.loadURL(t, {userAgent: "thunderx/" + r + " " + e.replace(/thunderx\/\d{2,}\.\d{1,}\.\d{1,}\.\d{2,}/, "")}).catch(), d.ThunderWindowNS.centerWnd(this.loginWnd, this.parentWnd, this.thunderHelperObj), null !== n && void 0 !== n && "" !== n) {
                        let e = `logfrom=${n}`;
                        h.XLStatNS.trackEvent("user_info", "loginpanel_show", "", 0, 0, 0, 0, e)
                    }
                    this.loginWnd.on("close", () => {
                        a.client.callServerFunction("ClosePopMutual", c.PopView.LOGIN).catch()
                    }), this.loginWnd.once("show", () => {
                        f.roundRectWindow(this.loginWnd, this.parentWnd)
                    }), this.loginWnd.once("closed", () => {
                        p.information("loginWnd closed");
                        do {
                            if (null === this.parentWnd || void 0 === this.parentWnd || this.parentWnd.isDestroyed()) break;
                            this.parentWnd.focus()
                        } while (0);
                        this.loginWnd = null, this.isShowLoginWnd = !1
                    })
                }
            })
        }

        closeLoginWnd(e) {
            p.information("closeLoginWnd:", e), null === this.loginWnd || void 0 === this.loginWnd || this.loginWnd.isDestroyed() || this.loginWnd.close()
        }

        updateLoginWnd(e, t, n, r, i) {
            let o = !1;
            do {
                if (p.information("updateLoginWnd:", e, t, n, r, this.loginWnd), null === this.loginWnd || void 0 === this.loginWnd || this.loginWnd.isDestroyed()) {
                    p.information("updateLoginWnd:不显示登陆框 this.loginWnd 存在问题");
                    break
                }
                if (!0 === this.isShowLoginWnd) {
                    p.information("updateLoginWnd:登陆框已经处于显示状态");
                    break
                }
                e ? (p.information("updateLoginWnd:显示登陆框"), this.isShowLoginWnd = !0, (this.parentWnd.isMinimized() || !1 === this.parentWnd.isVisible()) && (this.parentWnd.isMinimized() && this.parentWnd.restore(), this.parentWnd.show()), this.loginWnd.show(), o = !0, l.ToolsUtilitiesAWNS.setForegroundWindow(this.thunderHelperObj, this.loginWnd).catch()) : this.loginWnd.hide()
            } while (0);
            return o
        }

        createRetryLoginWnd(e, t) {
            let n = 0, r = 0;
            if ("userAvatar" === e) {
                let e = null;
                e = this.parentWnd.getBounds();
                let t = this.parentWnd.getContentSize();
                e.x < 0 || e.y < 0 ? e.width > t[0] && e.height > t[1] ? (n = e.x + Math.round((e.width - t[0]) / 2), r = e.y + Math.round((e.height - t[1]) / 2) - 1) : (n = -1, r = -1) : (n = e.x, r = e.y), p.information("createRetryLoginWnd:", e, t)
            }
            if (null === this.retryLoginWnd) {
                const e = "development" === process.env.RUN_ENV ? "http://localhost:9080/retry-login-renderer/" : `file:///${__dirname}/retry-login-renderer/index.html`;
                this.retryLoginWnd = new i.BrowserWindow({
                    x: n + 15,
                    y: r + 49,
                    width: 246,
                    height: 112,
                    frame: !1,
                    resizable: !1,
                    minimizable: !1,
                    parent: this.parentWnd,
                    show: !1,
                    modal: !1,
                    alwaysOnTop: !0,
                    webPreferences: {
                        spellcheck: !1,
                        nodeIntegration: !0,
                        webSecurity: "development" !== process.env.RUN_ENV
                    }
                }), this.retryLoginWnd.loadURL(e).catch(), this.retryLoginWnd.on("ready-to-show", () => {
                    this.retryLoginWnd.webContents.send("onSendData", t)
                }), this.retryLoginWnd.on("close", () => {
                    do {
                        if (null === this.parentWnd || void 0 === this.parentWnd || this.parentWnd.isDestroyed()) break;
                        this.parentWnd.focus()
                    } while (0)
                }), this.retryLoginWnd.on("hide", () => {
                    do {
                        if (null === this.parentWnd || void 0 === this.parentWnd || this.parentWnd.isDestroyed()) break;
                        this.parentWnd.focus()
                    } while (0)
                }), this.retryLoginWnd.on("closed", () => {
                    this.retryLoginWnd = null
                })
            } else this.retryLoginWnd.isDestroyed || (this.retryLoginWnd.setBounds({
                x: n + 15,
                y: r + 49,
                width: 246,
                height: 112
            }, !1), this.retryLoginWnd.webContents.send("onSendData", t))
        }

        createModifierUserInfoWnd(e) {
            const t = "development" === process.env.RUN_ENV ? "http://localhost:9080/modifier-userinfo-renderer/" : `file:///${__dirname}/modifier-userinfo-renderer/index.html`;
            let n = new i.BrowserWindow(Object.assign({
                width: 400,
                height: 474,
                frame: !1,
                resizable: !1,
                minimizable: !1,
                parent: this.parentWnd,
                show: !1,
                modal: !0,
                webPreferences: {
                    spellcheck: !1,
                    nodeIntegration: !0,
                    webSecurity: "development" !== process.env.RUN_ENV
                }
            }));
            n.loadURL(t).catch(), n.on("ready-to-show", () => {
                f.roundRectWindow(n, this.parentWnd), d.ThunderWindowNS.centerWnd(n, this.parentWnd, this.thunderHelperObj), n.show()
            }), n.on("closed", () => {
                do {
                    if (null === this.parentWnd || void 0 === this.parentWnd || this.parentWnd.isDestroyed()) break;
                    this.parentWnd.focus()
                } while (0)
            })
        }

        createPersonalInfoWnd(e, t, n) {
            let r = "development" === process.env.RUN_ENV ? "http://localhost:9080/personal-info-renderer/" : `file:///${__dirname}/personal-info-renderer/index.html`;
            r = `${r}?logined=${n ? 1 : 0}`;
            let o = this.parentWnd, s = o.getBounds(), a = o.getContentSize();
            (s.x < 0 || s.y < 0) && (s.width >= a[0] && s.height >= a[1] ? (s.x = s.x + Math.round((s.width - a[0]) / 2), s.y = s.y + Math.round((s.height - a[1]) / 2) - 1) : (s.x = -1, s.y = -1)), p.information("updatePersonalInfoWnd:", s, a, e);
            let l = new i.BrowserWindow({
                x: s.x + 100,
                y: s.y + 48,
                width: 270,
                height: 370,
                frame: !1,
                resizable: !1,
                minimizable: !1,
                parent: o,
                show: !1,
                modal: !1,
                webPreferences: {
                    spellcheck: !1,
                    nodeIntegration: !0,
                    webSecurity: "development" !== process.env.RUN_ENV
                }
            });
            return i.ipcMain.once("personal-info-init", n => {
                p.information("personal-info-init");
                try {
                    n.sender.send("personal-info-init-reply", e, t)
                } catch (e) {
                    p.warning("err", e)
                }
            }), l.on("ready-to-show", () => {
            }), l.once("show", () => {
                f.roundRectWindow(l, this.parentWnd)
            }), l.on("closed", () => {
                this.parentWnd.isMinimized() && this.parentWnd.restore(), this.parentWnd.focus()
            }), l.loadURL(r).catch(), l
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.eventPluginLoderPluginReady = "event_plugin_loader_plugin_ready", e.eventDownloadItemActive = "event_download_item_active", e.eventDownloadItemChosen = "event_download_item_chosen", e.eventDetailSwitch2Index = "event_detail_switch_to_index", e.eventDownloadSwitchCategory = "event_download_switch_category", e.evetDownloadMove2Tail = "event_download_move_to_tail", e.eventBringMainWindowToTop = "event_bring_main_window_to_top", e.eventDownloadContextMenuClick = "event_download_context_menu_click", e.eventOnCommand = "event_on_command", e.eventOnCommandline = "event_on_command_line", e.eventDownloadKernelInitEnd = "event_dk_init_end", e.eventDownloadSDKRecover = "event_sdk_crash_recover", e.eventTaskDataBaseLoadEnd = "event_dk_task_data_base_load_end", e.eventGlobalDownloadSpeedChanged = "event_dk_global_download_speed_changed", e.eventGlobalUploadSpeedChanged = "event_dk_global_upload_speed_changed", e.eventConfigInitFinished = "event_config_init_finished", e.eventConfigValueChanged = "event_config_value_changed", e.eventBHOConfigInitFinished = "event_bho_config_init_finished", e.eventBHOConfigValueChanged = "event_bho_config_value_changed", e.eventMemoryConfigValueChanged = "event_memory_config_value_changed", e.eventShowHomePage = "event_show_home_page", e.eventShowSearchTaskPage = "event_show_searchtask_page", e.eventConfigBrowserInitFinished = "event_config_browser_init_finished", e.eventDownloadContextMenuPopup = "event_download_context_menu_popup", e.eventDownloadContextMenuEnd = "event_download_context_menu_end", e.eventEmbeddedBrowserWndClick = "event_embedded_browser_wnd_click", e.eventLoginWndCreate = "event_login_wnd_create", e.eventLoginWndCreated = "event_login_wnd_created", e.eventLoginWndShow = "event_login_wnd_show", e.eventLoginWndShowResult = "event_login_wnd_show_result", e.eventLoginWndClose = "event_login_wnd_close", e.eventRetryLoginWndCreate = "event_retry_login_wnd_create", e.eventModifierUserinfoWndCreate = "event_modifier-userinfo-wnd-create", e.eventBrowserNumberChange = "event_browser_number_change", e.eventUploadConfigInitFinished = "event_upload_config_init_finished", e.eventUploadConfigValueChanged = "event_upload_config_value_changed"
    }(t.NodeEventMesssageNS || (t.NodeEventMesssageNS = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(8), s = n(7), a = n(6), l = n(15), d = n(2), c = n(83);
    let u = null, f = !1;
    const h = `${__rootDir}/out/common-preload.js`, p = d.default.getLogger("main-suspension");
    !function (e) {
        e.createSuspensionWindow = function (e) {
            if (null !== u) return;
            u = new i.BrowserWindow({
                frame: !1,
                height: 262,
                width: 400,
                skipTaskbar: !0,
                show: !1,
                resizable: !1,
                minimizable: !1,
                alwaysOnTop: !0,
                x: -999,
                y: -999,
                backgroundColor: "#0000",
                webPreferences: {
                    devTools: !1,
                    spellcheck: !1,
                    nodeIntegration: !0,
                    webSecurity: "development" !== process.env.RUN_ENV,
                    preload: h
                }
            });
            const t = "development" === process.env.RUN_ENV ? "http://localhost:9080/suspension-renderer/" : `file:///${__dirname}/suspension-renderer/index.html`;
            u.loadURL(t).catch(), u.on("ready-to-show", () => {
                s.roundRectWindow(u)
            }), u.on("show", () => {
                f = !0, u.webContents.send(o.ThunderChannelList.channelMRSuspensionWindowShowOrHide, !0)
            }), u.on("hide", () => {
                u.webContents.send(o.ThunderChannelList.channelMRSuspensionWindowShowOrHide, !1)
            }), u.on("closed", () => {
                f = !1, u = null
            })
        }, e.createXdasSuspensionWindow = function (e) {
            return r(this, void 0, void 0, function* () {
                if (null !== u) return u;
                let t = yield a.client.callServerFunction("GetConfigValue", "ConfigSuspensionXdas", "SuspensionX"),
                    n = yield a.client.callServerFunction("GetConfigValue", "ConfigSuspensionXdas", "SuspensionY"),
                    r = i.screen.getPrimaryDisplay(), o = r.workAreaSize;
                if (t && n) {
                    let e = i.screen.getDisplayNearestPoint({
                        x: t + c.SuspensionInfo.autoHideAtX,
                        y: n + c.SuspensionInfo.autoHideAtY
                    }), o = function (e, t) {
                        let n = {x: e.x, y: e.y};
                        return e.x + 367 < t.workArea.x ? (n.x = t.workArea.x - 367, p.information(`############### x超出左边，${e.x}调整为${n.x}`)) : e.x + 367 + 74 > t.workArea.x + t.workArea.width && (n.x = t.workArea.x + t.workArea.width - 74 - 367, p.information(`############### x超出右边，${e.x}调整为${n.x}`)), e.y + 233 < t.workArea.y ? (n.y = t.workArea.y - 233, p.information(`############### x超出上边，${e.y}调整为${n.y}`)) : e.y + 233 + 74 > t.workArea.y + t.workArea.height && (p.information(`############### x超出下边，${e.y}调整为${n.y}`), n.y = t.workArea.y + t.workArea.height - 233 - 74), p.information("##################verify suspension pos", e, n), n
                    }({x: t, y: n}, e && e.id !== r.id ? e : r);
                    o.x !== t && (t = o.x, yield a.client.callServerFunction("SetConfigValue", "ConfigSuspensionXdas", "SuspensionX", t)), o.y !== n && (n = o.y, yield a.client.callServerFunction("SetConfigValue", "ConfigSuspensionXdas", "SuspensionY", n))
                }
                let s = o.width - 500;
                u = new i.BrowserWindow({
                    transparent: !0,
                    frame: !1,
                    height: 540,
                    resizable: !0,
                    minimizable: !1,
                    maximizable: !1,
                    width: 808,
                    skipTaskbar: !0,
                    alwaysOnTop: !0,
                    show: !1,
                    backgroundColor: "#0000",
                    x: t || s,
                    y: n || -160,
                    webPreferences: {
                        spellcheck: !1,
                        nodeIntegration: !0,
                        webSecurity: "development" !== process.env.RUN_ENV,
                        preload: h
                    }
                });
                const d = "development" === process.env.RUN_ENV ? "http://localhost:9080/suspension-xdas-renderer/" : `file:///${__dirname}/suspension-xdas-renderer/index.html`;
                return u.loadURL(d).catch(), u.on("ready-to-show", () => {
                }), u.once("show", () => {
                    f = !0, u.setSkipTaskbar(!0), setTimeout(() => {
                        u.setAlwaysOnTop(!0, "pop-up-menu")
                    }, 500)
                }), u.on("closed", () => {
                    u = null, f = !1
                }), u.on("always-on-top-changed", (t, n) => {
                    if (!n) {
                        let t = u.getNativeWindowHandle().readUIntLE(0, 4);
                        e.modifyStyleEx(t, 0, l.WindowStyleEx.WS_EX_TOPMOST)
                    }
                }), u
            })
        }, e.getSuspensionWindow = function () {
            return u
        }, e.isReadyToShow = function () {
            return f
        }
    }(t.SuspensionWindowHelper || (t.SuspensionWindowHelper = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e[e.autoHideAtX = 380] = "autoHideAtX", e[e.autoHideAtY = 226] = "autoHideAtY", e[e.ballSize = 52] = "ballSize", e[e.ballTop = 10] = "ballTop", e[e.weltSize = 12] = "weltSize", e[e.weltTopSize = 62] = "weltTopSize", e[e.speedWidth = 72] = "speedWidth"
    }(t.SuspensionInfo || (t.SuspensionInfo = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(85), i = n(86);
    !function (e) {
        e.getWindowPreference = function (e = !1) {
            let t = i.default(), n = {};
            return t && t.colors && "string" == typeof t.colors.colorPrimaryControl1 && (n.hoverBackgroundColor = e ? parseInt(r.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1), 16) : r.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1)), n
        }
    }(t.WindowPreferenceNS || (t.WindowPreferenceNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        function t(e) {
            let t = e.toString(16).toUpperCase();
            return t.length < 2 && (t = "0" + t), t
        }

        function n(e, n, r, i) {
            return "0x" + t(i) + t(e) + t(n) + t(r)
        }

        e.rgbaStringToHexWith0xBegin = function (e) {
            if (void 0 !== e) {
                let t = e.split(",");
                return n(parseInt(t[0] || "0", 10), parseInt(t[1] || "0", 10), parseInt(t[2] || "0", 10), parseInt(t[3] || "255", 10))
            }
        }, e.colorNumberToHex = t, e.rgbaToHexWith0xBegin = n
    }(t.ColorUtilNS || (t.ColorUtilNS = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(2), s = n(6), a = o.default.getLogger("GetSkinInfo");
    let l;
    (function () {
        return r(this, void 0, void 0, function* () {
            "renderer" === process.type ? (a.information("renderer process"), s.client.callServerFunction("GetSkinInfo").then(e => {
                l = e, a.information("send OnChangeSkin", e)
            }).catch(e => {
                a.warning(e)
            }), s.client.attachServerEvent("OnChangeSkin", (e, t) => {
                l = t, a.information("send OnChangeSkin", t)
            })) : "browser" === process.type && (a.information("main process"), i.ipcMain.on("OnChangeSkin", (e, t) => {
                a.information("OnChangeSkin", t), l = t
            }))
        })
    })().catch(e => {
        a.information(e)
    }), t.default = function () {
        return l
    }
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(1), o = n(3), s = n(2), a = n(0), l = n(8), d = n(13), c = n(20), u = n(88),
        f = s.default.getLogger("ThunderNewTask"), h = o.default(i.join(__rootDir, "../bin/ThunderHelper.node"));
    let p = 5;
    !function (e) {
        let t;

        function o(e, t, n, r) {
            void 0 === n && (n = c.ThunderHelper.getTaskTypeFromUrl(e));
            let o = void 0, s = -1, a = "", l = "";
            do {
                if (n !== d.DownloadKernel.TaskType.Emule && n !== d.DownloadKernel.TaskType.P2sp) break;
                let c = u.ParseUrlFileNameNS.getNameFromUrl(e), f = i.extname(c);
                if ("" !== f && (a = f.substring(1)), n === d.DownloadKernel.TaskType.Emule) {
                    let t = u.ParseUrlFileNameNS.parseEd2kUrl(e);
                    s = t.fileSize, l = t.fileHash
                }
                o = {
                    url: e,
                    cookie: "",
                    referer: "",
                    fileName: c,
                    browser: "",
                    statClick: t = void 0 === t ? "" : t,
                    fileSize: s,
                    fileHash: l,
                    fileType: a,
                    birdkeyChars: r
                };
                break
            } while (0);
            return o
        }

        e.taskOptFileNameFixed = 2, function (e) {
            e.PreNewTask = "PreNewTaskCtrl", e.NewTask = "NewTaskCtrl", e.UrlFilter = "UrlFilterCtrl", e.Magnet = "BtCtrl"
        }(t = e.TaskCtrlType || (e.TaskCtrlType = {})), e.updateThreadCount = function (e) {
            do {
                if (isNaN(e)) break;
                if (e <= 0 || e > 10) break;
                p = e
            } while (0)
        }, e.contructTaskByUrl = function (e, t, n, r) {
            let i = o(e, t, n, r);
            f.verbose(e);
            let s = 5;
            return {
                taskType: n,
                data: i,
                setting: {
                    loginFtp: !1,
                    ftpInfo: {userName: "", password: ""},
                    onlyOrigin: !1,
                    thread: s = null !== i.thread && void 0 !== i.thread ? i.thread : p,
                    note: "",
                    openAfterDownload: !1
                },
                selected: !0
            }
        }, e.contructTaskByUrlData = function (e, t) {
            let n = void 0, r = c.ThunderHelper.getTaskTypeFromUrl(e.url);
            if (r === d.DownloadKernel.TaskType.Emule && (void 0 === e.fileHash || "" === e.fileHash)) {
                let t = u.ParseUrlFileNameNS.parseEd2kUrl(e.url);
                e.fileSize = t.fileSize, e.fileHash = t.fileHash
            }
            if (void 0 !== e.fileSize && null !== e.fileSize && 0 !== e.fileSize || (e.fileSize = -1), e.fileName || (e.fileName = u.ParseUrlFileNameNS.getNameFromUrl(e.url)), e.fileName = e.fileName.replace(/[*?/\\:|<>\"]/g, "_"), !e.fileType) {
                let t = i.extname(e.fileName);
                "" !== t && (e.fileType = t.substring(1))
            }
            if (void 0 === t || null === t) {
                let n = 5;
                t = {
                    loginFtp: !1,
                    ftpInfo: {userName: "", password: ""},
                    onlyOrigin: !1,
                    thread: n = null !== e.thread && void 0 !== e.thread ? e.thread : p,
                    note: "",
                    openAfterDownload: !1
                }
            }
            return n = {taskType: r, data: e, setting: t, selected: !0}
        }, e.getDesktopPath = function () {
            return h.getDesktopPath()
        }, e.getDocumentPath = function () {
            return h.getDocumentPath()
        }, e.queryFileExists = function (e) {
            return h.queryFileExists(e)
        }, e.isFilePathValid = function (e) {
            return h.isFilePathValid(e)
        }, e.getNewTaskDataByUrl = o, e.getDownloadResult = function (e, ...t) {
            return r(this, void 0, void 0, function* () {
                let n = {result: !1};
                return a.ipcRenderer.send(l.ThunderChannelList.channelRMNewTaskCreateNewTask, e, ...t), n = yield new Promise(e => {
                    a.ipcRenderer.once(l.ThunderChannelList.channelMRNewTaskCreateNewTaskResult, (t, n, r) => {
                        e({result: n, message: r})
                    })
                })
            })
        }, e.readThunderUnionConfig = function (e) {
            return r(this, void 0, void 0, function* () {
                let t = null, r = null;
                try {
                    const r = yield n(90);
                    r.defaults.adapter = n(43), t = yield r.get(e)
                } catch (e) {
                    f.information(e)
                }
                return null !== t && void 0 !== t.status && 200 === t.status && void 0 !== t.data && null !== t.data && (r = t.data), r
            })
        }
    }(t.ThunderNewtaskHelperNS || (t.ThunderNewtaskHelperNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(1), i = n(2), o = n(13), s = n(89), a = n(20), l = n(3), d = i.default.getLogger("ThunderNewTask"),
        c = l.default(r.join(__rootDir, "../bin/ThunderHelper.node")),
        u = ".asf;.avi;.exe;.iso;.mp3;.mpeg;.mpg;.mpga;.ra;.rar;.rm;.rmvb;.tar;.wma;.wmp;.wmv;\n  .mov;.zip;.3gp;.chm;.mdf;.torrent;.jar;.msi;.arj;.bin;.dll;.psd;.hqx;.sit;.lzh;.gz;.tgz;.xlsx;.xls;.doc;.docx;.ppt;\n  .pptx;.flv;.swf;.mkv;.tp;.ts;.flac;.ape;.wav;.aac;.txt;.dat;.7z;.ttf;.bat;.xv;.xvx;.pdf;.mp4;.apk;.ipa;.epub;.mobi;\n  .deb;.sisx;.cab;.pxl;.dmg;.msu;",
        f = ".a;.a3m;.a3w;.a4m;.a4p;.a4w;.a5w;.aam;.aas;.abf;.abk;.abs;.ace;.acm;.acp;.act;.ad;\n  .ada;.adb;.adf;.adi;.adm;.adp;.adr;.ads;.af2;.af3;.afm;.ai;.aif;.aifc;.aiff;.aim;.ais;.akw;.alb;.all;.ams;.anc;.ani;\n  .ans;.ant;.api;.aps;.ari;.arj;.art;.asa;.asc;.asd;.ase;.asf;.asm;.aso;.asp;.asv;.asx;.atw;.au;.avb;.avi;.avr;.avs;\n  .awd;.awr;.axx;.bak;.bas;.bat;.bdf;.bgl;.bi;.bif;.biff;.bin;.bk;.bk$;.bks;.bmk;.bmp;.book;.brx;.bsp;.btm;.bud;.bun;\n  .bw;.bwv;.c;.cab;.cad;.cal;.cap;.cas;.cb;.cc;.ccb;.cch;.cco;.cct;.cda;.cdf;.cdi;.cdm;.cdr;.cdt;.cdx;.cfg;.cgi;.cgm;\n  .chk;.chm;.chr;.cif;.cil;.class;.cll;.clp;.cls;.cmf;.cmv;.cmx;.cnf;.cnm;.cnt;.cod;.com;.cpl;.cpo;.cpp;.cpr;.cpt;.cpx;\n  .crd;.crp;.crt;.csc;.csp;.cst;.csv;.ctl;.cur;.cv;.cxx;.dat;.db;.dbc;.dbf;.dbx;.dcm;.dcs;.dct;.dcu;.dcx;.dem;.der;.dewf;\n  .dib;.dic;.dif;.dig;.dir;.diz;.dlg;.dll;.dls;.dmd;.dmf;.doc;.dot;.draw;.drv;.drw;.dsf;.dsg;.dsm;.dsp;.dsq;.dsw;.dtd;\n  .dun;.dv;.dxf;.dxr;.eda;.edd;.emd;.emf;.eml;.ephtml;.eps;.exe;.fav;.fax;.fcd;.fdf;.ffa;.ffk;.ffl;.ffo;.fif;.fla;.flc;\n  .fm;.fml;.fng;.fnk;.fon;.fot;.frt;.frx;.ftg;.fts;.gal;.gdb;.gdm;.gem;.gen;.getright;.gfi;.gfx;.gho;.gif;.gim;.gix;.gkh;\n  .gks;.gl;.gna;.gnt;.gnx;.gra;.grf;.grp;.hcom;.hgl;.hlp;.hpj;.hpp;.hst;.ht;.htm;.html;.htt;.htx;.icb;.icc;.icl;.icm;.ico;\n  .idd;.idf;.idq;.idx;.iff;.iges;.igf;.ilbm;.ima;.inf;.ini;.inrs;.ins;.int;.iqy;.iso;.ist;.isu;.iwc;.j62;.jar;.java;.jbf;\n  .jff;.jfif;.jif;.jmp;.jpe;.jpeg;.jpg;.js;.jsp;.jtf;.k25;.kar;.kdc;.key;.kfx;.kiz;.kkw;.kmp;.kqp;.lab;.lbm;.lbt;.lbx;.ldb;\n  .ldl;.leg;.lft;.lgo;.lha;.lib;.lin;.lis;.llx;.lnk;.log;.lst;.lu;.lyr;.lzh;.lzs;.m1v;.m3u;.mad;.maf;.mam;.map;.maq;.mar;.mat;\n  .mb1;.mbx;.mcr;.mdb;.mde;.mdl;.mdn;.mdw;.mdz;.mic;.mid;.mim;.mime;.mli;.mme;.mng;.mnu;.mod;.mov;.mp2;.mp3;.mpa;.mpe;.mpeg;\n  .mpg;.mpp;.mpr;.msg;.msi;.msn;.msp;.mst;.mtm;.nan;.nap;.ncb;.ncd;.ncf;.nff;.nft;.nil;.nist;.nls;.nlu;.ntx;.nwc;.nws;.obj;\n  .ocx;.ods;.ofn;.oft;.olb;.ole;.oogl;.opo;.p65;.pab;.part;.pas;.pbd;.pbl;.pbm;.pbr;.pcd;.pcl;.pcm;.pdd;.pdf;.pfm;.pgl;.pgm;\n  .ph;.php;.php3;.phtml;.pic;.pjt;.pjx;.pkg;.pli;.png;.pot;.ppa;.ppf;.ppm;.pps;.ppt;.prf;.prg;.prj;.prn;.prt;.psd;.psp;.pst;\n  .pwz;.qic;.qif;.qlb;.qry;.qtp;.qtx;.qw;.ra;.ram;.rar;.rdf;.reg;.rep;.res;.rft;.rgb;.rm;.rmd;.rpt;.rtf;.rul;.rvp;.s;.sav;.sbl;\n  .scc;.scf;.scp;.scr;.sct;.scx;.sdt;.sdv;.sdx;.sep;.sfd;.sfi;.sfr;.sfx;.sgi;.sgml;.shg;.shtml;.shw;.sig;.ska;.skl;.sl;.spl;\n  .sqc;.sqr;.str;.swa;.swf;.sys;.syw;.taz;.tga;.theme;.thn;.tif;.tiff;.tig;.tlb;.tmp;.tol;.tpl;.trm;.trn;.ttf;.txt;.txw;.udf;\n  .ult;.url;.use;.uwf;.vbp;.vbp;.vbw;.vbw;.vbx;.vbx;.vct;.vcx;.vda;.vda;.vir;.vir;.viv;.vqf;.vsd;.vsd;.vsl;.vsl;.vss;.vss;.vst;\n  .vst;.vsw;.vsw;.vxd;.vxd;.w3l;.wab;.wad;.wav;.wbk;.wcm;.wdb;.wfm;.wfn;.wil;.wiz;.wll;.wmf;.wow;.wp;.wpd;.wpf;.wpg;.wps;.wpt;.wr1;\n  .wrk;.wrl;.wrz;.x;.x16;.x32;.xar;.xbm;.xi;.xla;.xlb;.xlc;.xld;.xlk;.xll;.xlm;.xls;.xlt;.xlv;.xlw;.xnk;.xpm;.xwd;.xwf;.yal;.z;.zap;.zip;";
    !function (e) {
        function t(e) {
            let t = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e || "." === e) break;
                if (u.indexOf(e) > -1) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        }

        function n(e) {
            let t = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e) break;
                if (e.match(/[\/\\"<>\?\*|]/)) break;
                t = !0
            } while (0);
            return t
        }

        function i(e) {
            let n = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e || "." === e) break;
                let r = s.TaskUtilHelper.getTaskFileType(void 0, e);
                if (r === s.TaskUtilHelper.FileExtType.Video || r === s.TaskUtilHelper.FileExtType.Music || r === s.TaskUtilHelper.FileExtType.Pic) {
                    n = !0;
                    break
                }
                n = t(e)
            } while (0);
            return n
        }

        function l(e) {
            let t = !1, o = r.parse(e);
            return t = n(o.name) && i(o.ext)
        }

        function h(e) {
            let t = {};
            do {
                if (void 0 === e || null === e) break;
                d.information("parseDynamicUrlArgs");
                let n = /([^&=?]+)=([^&]*)/g;
                for (; n.exec(e);) t[RegExp.$1] = RegExp.$2;
                d.information("parseDynamicUrlArgs ret ", t)
            } while (0);
            return t
        }

        function p(e) {
            let t = {pageFileName: void 0, args: void 0};
            do {
                if (void 0 === e || null === e) break;
                d.information("parseDynamicUrlPath"), e.match(/[\/]?([^?]*)\?([^\s]*)/) ? (t.pageFileName = RegExp.$1, t.args = RegExp.$2) : (t.pageFileName = e, t.args = ""), d.information("parseDynamicUrlPath ret", t)
            } while (0);
            return t
        }

        function m(e) {
            let t = "";
            do {
                if (void 0 === e || null === e) break;
                let n = p(e);
                if (void 0 !== n.args) {
                    let e = h(n.args);
                    for (let n in e) {
                        let r = e[n];
                        if (l(r)) {
                            t = r;
                            break
                        }
                    }
                }
                void 0 !== n.pageFileName && l(n.pageFileName) && (t = n.pageFileName)
            } while (0);
            return t
        }

        function w(e) {
            let t = [];
            do {
                if (void 0 === e || null === e) break;
                let n = m(e);
                if ("" !== n && !t.includes(n)) {
                    let e = g(n);
                    t.push(e)
                }
                let r = g(e);
                t.includes(r) || t.push(r)
            } while (0);
            return t
        }

        function g(e) {
            return c.parseFileNameFromP2spUrlPath(e)
        }

        function _(e) {
            return c.isThunderPrivateUrl(e)
        }

        function v(e) {
            return c.parseEd2kUrl(e)
        }

        function b(e) {
            return c.parseUrl(e)
        }

        e.isDownloadFileExtName = t, e.isIllegalFileName = n, e.isGoodFileExtName = i, e.isUsualFileExtName = function (e) {
            let t = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e || "." === e) break;
                if (i(e)) {
                    t = !0;
                    break
                }
                if (f.indexOf(e) > -1) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        }, e.isGoodFileName = l, e.parseDynamicUrlArgs = h, e.parseDynamicUrlPath = p, e.parseFileNameFromDynamicUrlPath = m, e.getFileNameListFromUrlPath = w, e.getNameFromUrl = function (e) {
            let t = "index.html", n = a.ThunderHelper.getTaskTypeFromUrl(e);
            if (n === o.DownloadKernel.TaskType.P2sp) {
                let n = b(e);
                if (n) {
                    let e = w(n.fullPath);
                    e.length > 0 && (t = e[0])
                } else {
                    let n = /:\/\/.*?\[.+?\].*(\/.+)/.exec(e);
                    if (n && n[1]) {
                        let e = w(n[1]);
                        e.length > 0 && (t = e[0])
                    }
                }
            } else n === o.DownloadKernel.TaskType.Emule && (t = v(e).fileName);
            return t.replace(/[*?/\\:|<>\"]/g, "_")
        }, e.parseFileNameFromP2spUrlPath = g, e.isThunderPrivateUrl = _, e.parseThunderPrivateUrl = function (e) {
            let t = {url: e, codePage: -1};
            return _(e) && (t = c.parseThunderPrivateUrl(e)), t
        }, e.parseEd2kUrl = v, e.parseUrl = b, e.parseMagnetUrl = function (e) {
            return c.parseMagnetUrl(e)
        }, e.makeUrl = function (e) {
            return c.makeUrl(e)
        }
    }(t.ParseUrlFileNameNS || (t.ParseUrlFileNameNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(1), i = n(13);
    let o = ["apk", "pic", "video", "mp4", "rmvb", "wmv", "mpg", "mkv", "mov", "rm", "avi", "flv", "doc", "link", "ppt", "word", "magnetic", "music", "pdf", "rar", "xls", "txt", "unknow", "gif", "ipa", "ipsw", "dll", "chm", "text", "install", "iso"];
    const s = ".xv;.xlmv;.3gp;.3gp2;.3gpp;.3gpp2;.3mm;.3p2;.60d;.787;.aaf;.aep;.aepx;.aet;.aetx;.ajp;.ale;.amv;.amx;.arf;\n  .asf;.asx;.avb;.avd;.avi;.avp;.avs;.avs;.axm;.bdm;.bdmv;.bik;.bix;.bmk;.bnp;.box;.bs4;.bsf;.byu;.camproj;.camrec;.clpi;.cmmp;\n  .cmmtpl;.cmproj;.cmrec;.cpi;.cst;.cvc;.d2v;.d3v;.dat;.dav;.dce;.dck;.ddat;.dif;.dir;.divx;.dlx; .dmb;.dmsm;.dmsm3d;.dmss;.dnc;.dpg;\n  .dream;.dsy;.dv;.dv-avi;.dv4;.dvdmedia;.dvr-ms;.dvx;.dxr;.dzm;.dzp;.dzt;.edl;.evo;.eye;.f4p;.f4v;.fbr;.fbr;.fbz;.fcp;.flc;.flh;\n  .fli;.flv;.flx;.gfp;.gl;.grasp;.gts;.gvi;.gvp;.hdmov;.hkm;.ifo;.imovieproj;.imovieproject;.iva;.ivf;.ivr;.ivs;.izz;.izzy;.jts;.jtv;\n  .k3g;.lrec;.lsf;.lsx;.m15;.m1pg;.m1v;.m21;.m21;.m2a;.m2p;.m2t;.m2ts;.m2v;.m4e;.m4u;.m4v;.m75;.meta;.mgv;.mj2;.mjp;.mjpg;.mkv;.mmv;\n  .mnv;.mod;.modd;.moff;.moi;.moov;.mov;.movie;.mp21;.mp2v;.mp4;.mp4v;.mpe;.mpeg;.mpeg4;.mpf;.mpg;.mpg2;.mpgindex;.mpl;.mpls;\n  .mpsub;.mpv;.mpv2;.mqv;.msdvd;.msh;.mswmm;.mts;.mtv;.mvb;.mvc;.mvd;.mve;.mvp;.mvy;.mxf;.mys;.ncor;.nsv;.nuv;.nvc;.ogm;.ogv;.ogx;.osp;\n  .par;.pds;.pgi;.piv;.pjs;.pmf;.pns;.ppj;.prel;.pro;.prproj;.prtl;.psh;.pssd;.pva;.pvr;.pxv;.qt;.qtch;.qtl;.qtm;.qtz;\n  .r3d;.rcproject;.rdb;.rec;.rm;.rmd;.rmp;.rms;.rmvb;.roq;.rp;.rts;.rts;.rum;.rv;.sbk;.sbt;.scc;.scm;.scn;.screenflow;.sec;.seq;.sfd;\n  .sfvidcap;.smk;.sml;.smv;.spl;.ssm;.stl;.str;.stx;.svi;.swf;.swi;.swt;.tda3mt;.tivo;.tix;.tod;.tp;.tp0;.tpd;\n  .tpr;.trp;.ts;.tts;.tvs;.vc1;.vcpf;.vcr;.vcv;.vdo;.vdr;.veg;.vem;.vf;.vfw;.vfz;.vgz;.vid;.viewlet;.viv;.vivo;.vlab;.vob;.vp3;.vp6;.vp7;\n  .vro;.vs4;.vse;.vsp;.w32;.wcp;.webm;.wlmp;.wm;.wmd;.wmmp;.wmv;.wmx;.wp3;.wpl;.wtv;.wvx;.xfl;.xvid;.yuv;.zm1;.zm2;.zm3;.zmv;",
        a = ".exe;.com;.bat;.msi;.apk;.ipa;.iso;.mds;.bin;.img;.ipsw;",
        l = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.\n  dot;.dotm;.dotx;.email;.rp;.pps;.et;.ett;.xlt;.dbf;.prn;.csv;.mht;.mhtml;.xml;.wpt;.dps;.dpt;.pot;.ppsx;.epub;.mobi;.lit;.wdl;.ceb;.abm;\n  .pdg;.umb;.ibooks;",
        d = ".aiff;.cue;.m3u;.au;.cdda;.raw;.wav;.flac;.tak;.mp3;.aac;.wma;.m4a;.mid;.mka;.mp2;.mpa;.mpc;.ape;.ofr;\n  .ogg;.ra;.wv;.tta;.ac3;.dts;.nsf;.mod;.s3m;.xm;.it;.vst;",
        c = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;.mef;\n  .mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico;",
        u = ".zip;.zipx;.rar;.7z;.isz;.cab;.arj;.ace;.alz;.uue;.tar;.gz; .gzip;.tgz;.tpz;.bzip2;.bz2;.bz;.tbz;.tbz2;.xz;.txz;\n  .lzh;.lha;.zt;.az; .xpi;.jar;.wim;.swm;.rpm;.xar;.deb;.dmg;.hfs;.cpio;.lzma;.lzma86;.split;",
        f = ".torrent;", h = ".idx;.smi;.sub;.psb;.ssa;.ass;.usf;.ssf;.srt;.sup",
        p = ".3gp;.asf;.avi;.divx;.f4v;.flv;.mkv;.mov;.movie;.mp4;.mpeg;.mpeg4;.mpg;.mpg2;.rm;.rmvb;.rp;.swf;.tp;.tp0;.ts;.wmv",
        m = ".exe;.com;.bat;.msi", w = ".wav;.flac;.mp3;.aac;.wma;.m4a;.mid;.ape;.ogg;.ra;.mod",
        g = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.pdf;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;\n  .mef;.mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico",
        _ = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.dot;.dotm;.dotx;.email;.rp;.pps",
        v = ".rar;.tar;.zip;.gzip;.cab;.uue;.arj;.bz2;.lzh;.jar;.ace;.iso;.7-zip;.7z",
        b = ".asf;.mpg;.rmvb;.rm;.wmv;.avi;.mp4;.mpeg;.mkv;.mov;.ts;.flv;.3gp;.m2ts;",
        y = ".exe;.com;.bat;.scr;.lnk;.pif;.wsh;", T = ".iso;";
    !function (e) {
        let t;

        function n(e) {
            let n = t.Unkown, i = r.extname(e);
            return null !== i && void 0 !== i && i.length >= 2 && (i = i.toLowerCase()), void 0 === i || "" === i || i.length < 2 ? n = t.Unkown : p.indexOf(i) > -1 ? n = t.Video : m.indexOf(i) > -1 ? n = t.Software : _.indexOf(i) > -1 ? n = t.Doc : w.indexOf(i) > -1 ? n = t.Music : g.indexOf(i) > -1 ? n = t.Pic : v.indexOf(i) > -1 && (n = t.Zip), i.length > 1 && ".z" === i.slice(0, 2) && /[0-9]+/.test(i.substring(2)) && (n = t.Zip), n
        }

        e.getTaskIcon = function (e, t, n) {
            n = n || "xly-type-";
            let p = "";
            do {
                if (t === i.DownloadKernel.TaskType.Bt) {
                    p = "bt-file";
                    break
                }
                if (t === i.DownloadKernel.TaskType.Group) {
                    p = "group";
                    break
                }
                p = "unknown";
                let n = r.extname(e);
                if ("" === n || n.length < 2) break;
                let m = (n = n.toLowerCase()).substring(1);
                if (o.indexOf(m) > -1) {
                    p = "doc" === n ? "word" : m;
                    break
                }
                if (n += ";", s.indexOf(n) > -1) {
                    p = "video";
                    break
                }
                if (a.indexOf(n) > -1) {
                    p = "install", [".mds", ".bin", ".img"].indexOf(n) > -1 && (p = "iso");
                    break
                }
                if (l.indexOf(n) > -1) {
                    if (p = "doc", [".htm", ".html", ".mht"].indexOf(n) > -1) {
                        p = "link";
                        break
                    }
                    if ("docx" === n) {
                        p = "word";
                        break
                    }
                    if ("xlsx" === n) {
                        p = "xls";
                        break
                    }
                    if ("pptx" === n) {
                        p = "ppt";
                        break
                    }
                    break
                }
                if (d.indexOf(n) > -1) {
                    p = "music";
                    break
                }
                if (c.indexOf(n) > -1) {
                    p = "pic";
                    break
                }
                if (u.indexOf(n) > -1) {
                    p = "rar";
                    break
                }
                if (f.indexOf(n) > -1) {
                    p = "bt-link";
                    break
                }
                if (h.indexOf(n) > -1) {
                    p = "text";
                    break
                }
            } while (0);
            return `${n}${p}`
        }, function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.Video = 1] = "Video", e[e.Software = 2] = "Software", e[e.Doc = 3] = "Doc", e[e.Music = 4] = "Music", e[e.Pic = 5] = "Pic", e[e.Zip = 6] = "Zip", e[e.Bt = 7] = "Bt"
        }(t = e.FileExtType || (e.FileExtType = {})), e.getTaskFileType = function (e, n) {
            let i = t.Unkown;
            return void 0 === n && void 0 !== e && (n = r.extname(e)), null !== n && void 0 !== n && n.length >= 2 && (n = n.toLowerCase(), n += ";"), void 0 === n || "" === n || n.length < 3 ? i = t.Unkown : s.indexOf(n) > -1 ? i = t.Video : a.indexOf(n) > -1 ? i = t.Software : l.indexOf(n) > -1 ? i = t.Doc : d.indexOf(n) > -1 ? i = t.Music : c.indexOf(n) > -1 ? i = t.Pic : u.indexOf(n) > -1 ? i = t.Zip : f.indexOf(n) > -1 && (i = t.Bt), n.length > 1 && ".z" === n.slice(0, 2) && /[0-9]+/.test(n.substring(2)) && (i = t.Zip), i
        }, e.isVideoFileExt = function (e) {
            let t = !1;
            do {
                if (null === e || void 0 === e || "" === e) break;
                let n = r.extname(e);
                if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                n = n.toLowerCase(), n += ";", b.indexOf(n) > -1 && (t = !0)
            } while (0);
            return t
        }, e.isSubtitleExt = function (e) {
            let t = !1;
            do {
                if (null === e || void 0 === e || "" === e) break;
                let n = r.extname(e);
                if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                n = n.toLowerCase(), n += ";", h.indexOf(n) > -1 && (t = !0)
            } while (0);
            return t
        }, e.isExecutableExt = function (e) {
            let t = !1;
            do {
                if (null === e || void 0 === e || "" === e) break;
                let n = r.extname(e);
                if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                n = n.toLowerCase(), n += ";", y.indexOf(n) > -1 && (t = !0)
            } while (0);
            return t
        }, e.isIsoExt = function (e) {
            let t = !1;
            do {
                if (null === e || void 0 === e || "" === e) break;
                let n = r.extname(e);
                if (!(null !== n && void 0 !== n && n.length >= 2)) break;
                n = n.toLowerCase(), n += ";", T.indexOf(n) > -1 && (t = !0)
            } while (0);
            return t
        }, e.getGroupFileType = n, e.getDefaultGroupPrefix = function (e) {
            let r = "任务组";
            do {
                if (void 0 === e || null === e || 0 === e.length) break;
                let i = [];
                for (let e = 0; e < 7; e++) i[e] = 0;
                for (let t of e) {
                    let e = n(t);
                    i[e] = i[e] + 1
                }
                let o = t.Unkown;
                for (let e = 1; e < i.length; e++) i[e] > i[o] && (o = e);
                o === t.Video ? r = "视频任务组" : o === t.Software ? r = "程序任务组" : o === t.Music ? r = "音乐任务组" : o === t.Pic ? r = "图片任务组" : o === t.Doc ? r = "文档任务组" : o === t.Zip && (r = "压缩包任务组")
            } while (0);
            return r
        }, e.compareVersion = function (e, t) {
            let n = -2;
            do {
                if (null === e || void 0 === e || "" === e || null === t || void 0 === t || "" === t) break;
                let r = 0, i = 0, o = 0, s = 0, a = 0, l = 0, d = 0, c = 0, u = e.split(/\./);
                if (null === u || void 0 === u || u.length < 3) break;
                if (r = Number(u[0]), i = Number(u[1]), o = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (s = Number(u[3])), null === (u = t.split(/\./)) || void 0 === u || u.length < 3) break;
                if (a = Number(u[0]), l = Number(u[1]), d = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (c = Number(u[3])), a > r) {
                    n = 1;
                    break
                }
                if (a < r) {
                    n = -1;
                    break
                }
                if (l > i) {
                    n = 1;
                    break
                }
                if (l < i) {
                    n = -1;
                    break
                }
                if (d > o) {
                    n = 1;
                    break
                }
                if (d < o) {
                    n = -1;
                    break
                }
                if (0 !== s) {
                    if (c > s) {
                        n = 1;
                        break
                    }
                    if (c < s) {
                        n = -1;
                        break
                    }
                }
                n = 0
            } while (0);
            return n
        }
    }(t.TaskUtilHelper || (t.TaskUtilHelper = {}))
}, function (e, t, n) {
    e.exports = n(91)
}, function (e, t, n) {
    "use strict";
    var r = n(4), i = n(39), o = n(93), s = n(21);

    function a(e) {
        var t = new o(e), n = i(o.prototype.request, t);
        return r.extend(n, o.prototype, t), r.extend(n, t), n
    }

    var l = a(s);
    l.Axios = o, l.create = function (e) {
        return a(r.merge(s, e))
    }, l.Cancel = n(50), l.CancelToken = n(116), l.isCancel = n(49), l.all = function (e) {
        return Promise.all(e)
    }, l.spread = n(117), e.exports = l, e.exports.default = l
}, function (e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function (e) {
        return null != e && (n(e) || function (e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(21), i = n(4), o = n(111), s = n(112);

    function a(e) {
        this.defaults = e, this.interceptors = {request: new o, response: new o}
    }

    a.prototype.request = function (e) {
        "string" == typeof e && (e = i.merge({url: arguments[0]}, arguments[1])), (e = i.merge(r, {method: "get"}, this.defaults, e)).method = e.method.toLowerCase();
        var t = [s, void 0], n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected)
        }), this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected)
        }); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, i.forEach(["delete", "get", "head", "options"], function (e) {
        a.prototype[e] = function (t, n) {
            return this.request(i.merge(n || {}, {method: e, url: t}))
        }
    }), i.forEach(["post", "put", "patch"], function (e) {
        a.prototype[e] = function (t, n, r) {
            return this.request(i.merge(r || {}, {method: e, url: t, data: n}))
        }
    }), e.exports = a
}, function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function (e, t) {
        r.forEach(e, function (n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4), i = n(40), o = n(42), s = n(96), a = n(97), l = n(22),
        d = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(98);
    e.exports = function (e) {
        return new Promise(function (t, c) {
            var u = e.data, f = e.headers;
            r.isFormData(u) && delete f["Content-Type"];
            var h = new XMLHttpRequest, p = "onreadystatechange", m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || a(e.url) || (h = new window.XDomainRequest, p = "onload", m = !0, h.onprogress = function () {
            }, h.ontimeout = function () {
            }), e.auth) {
                var w = e.auth.username || "", g = e.auth.password || "";
                f.Authorization = "Basic " + d(w + ":" + g)
            }
            if (h.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h[p] = function () {
                if (h && (4 === h.readyState || m) && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders" in h ? s(h.getAllResponseHeaders()) : null, r = {
                        data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                        status: 1223 === h.status ? 204 : h.status,
                        statusText: 1223 === h.status ? "No Content" : h.statusText,
                        headers: n,
                        config: e,
                        request: h
                    };
                    i(t, c, r), h = null
                }
            }, h.onerror = function () {
                c(l("Network Error", e, null, h)), h = null
            }, h.ontimeout = function () {
                c(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), h = null
            }, r.isStandardBrowserEnv()) {
                var _ = n(99),
                    v = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? _.read(e.xsrfCookieName) : void 0;
                v && (f[e.xsrfHeaderName] = v)
            }
            if ("setRequestHeader" in h && r.forEach(f, function (e, t) {
                void 0 === u && "content-type" === t.toLowerCase() ? delete f[t] : h.setRequestHeader(t, e)
            }), e.withCredentials && (h.withCredentials = !0), e.responseType) try {
                h.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                h && (h.abort(), c(e), h = null)
            }), void 0 === u && (u = null), h.send(u)
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4),
        i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var t, n, o, s = {};
        return e ? (r.forEach(e.split("\n"), function (e) {
            if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) {
                if (s[t] && i.indexOf(t) >= 0) return;
                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
            }
        }), s) : s
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = r.isStandardBrowserEnv() ? function () {
        var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");

        function i(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }

        return e = i(window.location.href), function (t) {
            var n = r.isString(t) ? i(t) : t;
            return n.protocol === e.protocol && n.host === e.host
        }
    }() : function () {
        return !0
    }
}, function (e, t, n) {
    "use strict";
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function i() {
        this.message = "String contains an invalid character"
    }

    i.prototype = new Error, i.prototype.code = 5, i.prototype.name = "InvalidCharacterError", e.exports = function (e) {
        for (var t, n, o = String(e), s = "", a = 0, l = r; o.charAt(0 | a) || (l = "=", a % 1); s += l.charAt(63 & t >> 8 - a % 1 * 8)) {
            if ((n = o.charCodeAt(a += .75)) > 255) throw new i;
            t = t << 8 | n
        }
        return s
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = r.isStandardBrowserEnv() ? {
        write: function (e, t, n, i, o, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(i) && a.push("path=" + i), r.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ")
        }, read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        }, remove: function (e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function () {
        }, read: function () {
            return null
        }, remove: function () {
        }
    }
}, function (e, t) {
    e.exports = require("assert")
}, function (e, t) {
    e.exports = require("stream")
}, function (e, t, n) {
    "undefined" == typeof process || "renderer" === process.type ? e.exports = n(103) : e.exports = n(105)
}, function (e, t, n) {
    function r() {
        var e;
        try {
            e = t.storage.debug
        } catch (e) {
        }
        return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
    }

    (t = e.exports = n(48)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }, t.formatArgs = function (e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
        var r = "color: " + this.color;
        e.splice(1, 0, r, "color: inherit");
        var i = 0, o = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && "%c" === e && (o = ++i)
        }), e.splice(o, 0, r)
    }, t.save = function (e) {
        try {
            null == e ? t.storage.removeItem("debug") : t.storage.debug = e
        } catch (e) {
        }
    }, t.load = r, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
            return window.localStorage
        } catch (e) {
        }
    }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
            return JSON.stringify(e)
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message
        }
    }, t.enable(r())
}, function (e, t) {
    var n = 1e3, r = 60 * n, i = 60 * r, o = 24 * i, s = 365.25 * o;

    function a(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }

    e.exports = function (e, t) {
        t = t || {};
        var l, d = typeof e;
        if ("string" === d && e.length > 0) return function (e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var a = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case"years":
                case"year":
                case"yrs":
                case"yr":
                case"y":
                    return a * s;
                case"days":
                case"day":
                case"d":
                    return a * o;
                case"hours":
                case"hour":
                case"hrs":
                case"hr":
                case"h":
                    return a * i;
                case"minutes":
                case"minute":
                case"mins":
                case"min":
                case"m":
                    return a * r;
                case"seconds":
                case"second":
                case"secs":
                case"sec":
                case"s":
                    return a * n;
                case"milliseconds":
                case"millisecond":
                case"msecs":
                case"msec":
                case"ms":
                    return a;
                default:
                    return
            }
        }(e);
        if ("number" === d && !1 === isNaN(e)) return t.long ? a(l = e, o, "day") || a(l, i, "hour") || a(l, r, "minute") || a(l, n, "second") || l + " ms" : function (e) {
            if (e >= o) return Math.round(e / o) + "d";
            if (e >= i) return Math.round(e / i) + "h";
            if (e >= r) return Math.round(e / r) + "m";
            if (e >= n) return Math.round(e / n) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function (e, t, n) {
    var r = n(106), i = n(5);
    (t = e.exports = n(48)).init = function (e) {
        e.inspectOpts = {};
        for (var n = Object.keys(t.inspectOpts), r = 0; r < n.length; r++) e.inspectOpts[n[r]] = t.inspectOpts[n[r]]
    }, t.log = function () {
        return process.stderr.write(i.format.apply(i, arguments) + "\n")
    }, t.formatArgs = function (e) {
        var n = this.namespace;
        if (this.useColors) {
            var r = this.color, i = "[3" + (r < 8 ? r : "8;5;" + r), o = "  " + i + ";1m" + n + " [0m";
            e[0] = o + e[0].split("\n").join("\n" + o), e.push(i + "m+" + t.humanize(this.diff) + "[0m")
        } else e[0] = (t.inspectOpts.hideDate ? "" : (new Date).toISOString() + " ") + n + " " + e[0]
    }, t.save = function (e) {
        null == e ? delete process.env.DEBUG : process.env.DEBUG = e
    }, t.load = s, t.useColors = function () {
        return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : r.isatty(process.stderr.fd)
    }, t.colors = [6, 2, 3, 4, 5, 1];
    try {
        var o = n(107);
        o && o.level >= 2 && (t.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
    } catch (e) {
    }

    function s() {
        return process.env.DEBUG
    }

    t.inspectOpts = Object.keys(process.env).filter(function (e) {
        return /^debug_/i.test(e)
    }).reduce(function (e, t) {
        var n = t.substring(6).toLowerCase().replace(/_([a-z])/g, function (e, t) {
            return t.toUpperCase()
        }), r = process.env[t];
        return r = !!/^(yes|on|true|enabled)$/i.test(r) || !/^(no|off|false|disabled)$/i.test(r) && ("null" === r ? null : Number(r)), e[n] = r, e
    }, {}), t.formatters.o = function (e) {
        return this.inspectOpts.colors = this.useColors, i.inspect(e, this.inspectOpts).split("\n").map(function (e) {
            return e.trim()
        }).join(" ")
    }, t.formatters.O = function (e) {
        return this.inspectOpts.colors = this.useColors, i.inspect(e, this.inspectOpts)
    }, t.enable(s())
}, function (e, t) {
    e.exports = require("tty")
}, function (e, t, n) {
    "use strict";
    const r = n(9), i = n(108), o = process.env;
    let s;

    function a(e) {
        return function (e) {
            return 0 !== e && {level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3}
        }(function (e) {
            if (!1 === s) return 0;
            if (i("color=16m") || i("color=full") || i("color=truecolor")) return 3;
            if (i("color=256")) return 2;
            if (e && !e.isTTY && !0 !== s) return o.VSCODE_PID ? 1 : 0;
            const t = s ? 1 : 0;
            if ("win32" === process.platform) {
                const e = r.release().split(".");
                return Number(process.versions.node.split(".")[0]) >= 8 && Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1
            }
            if ("CI" in o) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(e => e in o) || "codeship" === o.CI_NAME ? 1 : t;
            if ("TEAMCITY_VERSION" in o) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(o.TEAMCITY_VERSION) ? 1 : 0;
            if ("truecolor" === o.COLORTERM) return 3;
            if ("TERM_PROGRAM" in o) {
                const e = parseInt((o.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
                switch (o.TERM_PROGRAM) {
                    case"iTerm.app":
                        return e >= 3 ? 3 : 2;
                    case"Apple_Terminal":
                        return 2
                }
            }
            return /-256(color)?$/i.test(o.TERM) ? 2 : /^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(o.TERM) ? 1 : "COLORTERM" in o ? 1 : (o.TERM, t)
        }(e))
    }

    i("no-color") || i("no-colors") || i("color=false") ? s = !1 : (i("color") || i("colors") || i("color=true") || i("color=always")) && (s = !0), "FORCE_COLOR" in o && (s = 0 === o.FORCE_COLOR.length || 0 !== parseInt(o.FORCE_COLOR, 10)), e.exports = {
        supportsColor: a,
        stdout: a(process.stdout),
        stderr: a(process.stderr)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = ((e, t) => {
        t = t || process.argv;
        const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--", r = t.indexOf(n + e), i = t.indexOf("--");
        return -1 !== r && (-1 === i || r < i)
    })
}, function (e, t) {
    e.exports = require("zlib")
}, function (e) {
    e.exports = {
        _args: [["axios@0.18.0", "D:\\thunder11\\trunk\\build\\app"]],
        _from: "axios@0.18.0",
        _id: "axios@0.18.0",
        _inBundle: !1,
        _integrity: "sha1-MtU+SFHv3AoRmTts0AB4nXDAUQI=",
        _location: "/axios",
        _phantomChildren: {},
        _requested: {
            type: "version",
            registry: !0,
            raw: "axios@0.18.0",
            name: "axios",
            escapedName: "axios",
            rawSpec: "0.18.0",
            saveSpec: null,
            fetchSpec: "0.18.0"
        },
        _requiredBy: ["/", "/@types/axios", "/@xunlei/thunderx-login-main"],
        _resolved: "http://xnpm.repo.xunlei.cn/axios/-/axios-0.18.0.tgz",
        _spec: "0.18.0",
        _where: "D:\\thunder11\\trunk\\build\\app",
        author: {name: "Matt Zabriskie"},
        browser: {"./lib/adapters/http.js": "./lib/adapters/xhr.js"},
        bugs: {url: "https://github.com/axios/axios/issues"},
        bundlesize: [{path: "./dist/axios.min.js", threshold: "5kB"}],
        dependencies: {"follow-redirects": "^1.3.0", "is-buffer": "^1.1.5"},
        description: "Promise based HTTP client for the browser and node.js",
        devDependencies: {
            bundlesize: "^0.5.7",
            coveralls: "^2.11.9",
            "es6-promise": "^4.0.5",
            grunt: "^1.0.1",
            "grunt-banner": "^0.6.0",
            "grunt-cli": "^1.2.0",
            "grunt-contrib-clean": "^1.0.0",
            "grunt-contrib-nodeunit": "^1.0.0",
            "grunt-contrib-watch": "^1.0.0",
            "grunt-eslint": "^19.0.0",
            "grunt-karma": "^2.0.0",
            "grunt-ts": "^6.0.0-beta.3",
            "grunt-webpack": "^1.0.18",
            "istanbul-instrumenter-loader": "^1.0.0",
            "jasmine-core": "^2.4.1",
            karma: "^1.3.0",
            "karma-chrome-launcher": "^2.0.0",
            "karma-coverage": "^1.0.0",
            "karma-firefox-launcher": "^1.0.0",
            "karma-jasmine": "^1.0.2",
            "karma-jasmine-ajax": "^0.1.13",
            "karma-opera-launcher": "^1.0.0",
            "karma-safari-launcher": "^1.0.0",
            "karma-sauce-launcher": "^1.1.0",
            "karma-sinon": "^1.0.5",
            "karma-sourcemap-loader": "^0.3.7",
            "karma-webpack": "^1.7.0",
            "load-grunt-tasks": "^3.5.2",
            minimist: "^1.2.0",
            sinon: "^1.17.4",
            typescript: "^2.0.3",
            "url-search-params": "^0.6.1",
            webpack: "^1.13.1",
            "webpack-dev-server": "^1.14.1"
        },
        homepage: "https://github.com/axios/axios",
        keywords: ["xhr", "http", "ajax", "promise", "node"],
        license: "MIT",
        main: "index.js",
        name: "axios",
        repository: {type: "git", url: "git+https://github.com/axios/axios.git"},
        scripts: {
            build: "NODE_ENV=production grunt build",
            coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
            examples: "node ./examples/server.js",
            postversion: "git push && git push --tags",
            preversion: "npm test",
            start: "node ./sandbox/server.js",
            test: "grunt test && bundlesize",
            version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
        },
        typings: "./index.d.ts",
        version: "0.18.0"
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4);

    function i() {
        this.handlers = []
    }

    i.prototype.use = function (e, t) {
        return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
    }, i.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, i.prototype.forEach = function (e) {
        r.forEach(this.handlers, function (t) {
            null !== t && e(t)
        })
    }, e.exports = i
}, function (e, t, n) {
    "use strict";
    var r = n(4), i = n(113), o = n(49), s = n(21), a = n(114), l = n(115);

    function d(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }

    e.exports = function (e) {
        return d(e), e.baseURL && !a(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
            delete e.headers[t]
        }), (e.adapter || s.adapter)(e).then(function (t) {
            return d(e), t.data = i(t.data, t.headers, e.transformResponse), t
        }, function (t) {
            return o(t) || (d(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function (e, t, n) {
        return r.forEach(n, function (n) {
            e = n(e, t)
        }), e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(50);

    function i(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
            t = e
        });
        var n = this;
        e(function (e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        })
    }

    i.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, i.source = function () {
        var e;
        return {
            token: new i(function (t) {
                e = t
            }), cancel: e
        }
    }, e.exports = i
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(0), i = n(6), o = n(7);
    t.browserWindowCreator = new class {
        constructor() {
            this.inited = !1
        }

        init(e) {
            do {
                if (this.inited) break;
                this.inited = !0, this.parent = e, i.client.registerFunctions({CreateBrowserWindow: this.createBrowserWindow.bind(this)})
            } while (0)
        }

        createBrowserWindow(e, ...t) {
            let n = -1, i = t[0], s = t[1], a = this.parent, l = t[2];
            {
                -1 === s ? a = null : void 0 !== s && null !== s && (a = r.BrowserWindow.fromId(s)), i = i || {}, a && (i.parent = a);
                let e = Object.assign({}, i, {
                    show: !1,
                    webPreferences: {
                        devTools: !1,
                        spellcheck: !1,
                        nodeIntegration: !0,
                        webSecurity: "development" !== process.env.RUN_ENV,
                        preload: `file:///${__rootDir}/out/plugin-boot.js`
                    }
                }), t = new r.BrowserWindow(e);
                t.on("ready-to-show", () => {
                    o.roundRectWindow(t, a), !1 !== i.show && t.show()
                }), n = t.id, l && t.loadURL(l).catch()
            }
            return n
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(1), o = n(0), s = n(2), a = n(19), l = n(6), d = n(3), c = n(13), u = n(37), f = n(8), h = n(120),
        p = n(16), m = s.default.getLogger("main-thundernewtask"),
        w = d.default(i.join(__rootDir, "../bin/ThunderNewTask.node")),
        g = d.default(i.join(__rootDir, "../bin/ThunderHelper.node"));
    const _ = new class {
        constructor() {
            this.serverReady = !1
        }

        init() {
            o.ipcMain.once(f.ThunderChannelList.channelRMProcessSend, () => {
                this.serverReady = !0
            }), m.information("main thundernewtask init"), w.setNewTaskCallback(e => r(this, void 0, void 0, function* () {
                if (m.information("[xxxx] setNewTaskCallback", e), e.length > 0) {
                    let t = [], n = [];
                    for (let r of e) {
                        let e = r.url, i = g.getTaskTypeFromUrl(e);
                        i === c.DownloadKernel.TaskType.P2sp || i === c.DownloadKernel.TaskType.Emule ? t.push(r) : i !== c.DownloadKernel.TaskType.Magnet && i !== c.DownloadKernel.TaskType.Bt || n.push(r)
                    }
                    if (t.length > 0) {
                        m.information("main createPreNewTaskWindow");
                        do {
                            if (!this.serverReady || t.length > 1) {
                                u.NewTaskDlgsManagerNS.instance().createNewTaskWindow(t, this.serverReady).catch();
                                break
                            }
                            if (0 === (yield l.client.callServerFunction("GetConfigValue", "TaskDefaultSettings", "OpenSilenceDownload", 0))) {
                                u.NewTaskDlgsManagerNS.instance().createNewTaskWindow(t, this.serverReady).catch();
                                break
                            }
                            yield l.client.callServerFunction("CreateTaskDirectly", t)
                        } while (0)
                    }
                    if (n.length > 0) {
                        yield h.default({name: p.mainProcessContext});
                        for (let e of n) yield l.client.callServerFunction("SetPopMutual", a.PopView.BT_NEW_TASK), u.NewTaskDlgsManagerNS.instance().createBtTaskWindow({
                            url: e.url,
                            type: "url"
                        }, {browser: e.browser, source: e.statClick, referer: e.referer, cookie: e.cookie}).catch()
                    }
                }
            })), w.setCommandLineCallback(e => r(this, void 0, void 0, function* () {
                m.information("setCommandLineCallback", e), yield h.default({name: p.mainProcessContext}), m.information("setCommandLineCallback ProcessCommandLine"), yield l.client.callServerFunction("ProcessCommandLine", e)
            })), w.initNodeBKWindow()
        }

        uninit() {
            w.uninitNodeBKWindow()
        }
    };
    !function (e) {
        e.instance = function () {
            return _
        }
    }(t.MainThunderNewTaskNS || (t.MainThunderNewTaskNS = {}))
}, function (e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(6);

    function o(e, t, n) {
        return r(this, void 0, void 0, function* () {
            return new Promise(r => {
                i.client.start(e, t, n, (e, ...t) => {
                    if ("connect" === e) r(!0); else if ("error" === e) {
                        "ENOENT" === t[0].code && r(!1)
                    }
                })
            })
        })
    }

    t.default = function (e, t, n) {
        return r(this, void 0, void 0, function* () {
            return new Promise(i => r(this, void 0, void 0, function* () {
                do {
                    if (yield o(e, t, n)) {
                        i();
                        break
                    }
                    let s = null;
                    s = setInterval(() => r(this, void 0, void 0, function* () {
                        (yield o(e, t, n)) && (clearInterval(s), s = null, i())
                    }), 1e3)
                } while (0)
            }))
        })
    }
}]);
/*! Thunder 11 BY LUOCHENZHIMU */
/*! Last updated on 2020/12/27 */
/*! https://www.luochenzhimu.com */