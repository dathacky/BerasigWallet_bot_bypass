(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[680], {
    26818: function(e, t, r) {
        "use strict";
        var n = r(82550);
        r.o(n, "redirect") && r.d(t, {
            redirect: function() {
                return n.redirect
            }
        }),
        r.o(n, "usePathname") && r.d(t, {
            usePathname: function() {
                return n.usePathname
            }
        }),
        r.o(n, "useRouter") && r.d(t, {
            useRouter: function() {
                return n.useRouter
            }
        }),
        r.o(n, "useSearchParams") && r.d(t, {
            useSearchParams: function() {
                return n.useSearchParams
            }
        })
    },
    77820: function(e, t, r) {
        "use strict";
        var n, i;
        e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof (null == (i = r.g.process) ? void 0 : i.env) ? r.g.process : r(92729)
    },
    92729: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, r, n, i = e.exports = {};
                    function s() {
                        throw Error("setTimeout has not been defined")
                    }
                    function o() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function a(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === s || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (r) {
                            try {
                                return t.call(null, e, 0)
                            } catch (r) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : s
                        } catch (e) {
                            t = s
                        }
                        try {
                            r = "function" == typeof clearTimeout ? clearTimeout : o
                        } catch (e) {
                            r = o
                        }
                    }();
                    var u = []
                      , c = !1
                      , l = -1;
                    function h() {
                        c && n && (c = !1,
                        n.length ? u = n.concat(u) : l = -1,
                        u.length && f())
                    }
                    function f() {
                        if (!c) {
                            var e = a(h);
                            c = !0;
                            for (var t = u.length; t; ) {
                                for (n = u,
                                u = []; ++l < t; )
                                    n && n[l].run();
                                l = -1,
                                t = u.length
                            }
                            n = null,
                            c = !1,
                            function(e) {
                                if (r === clearTimeout)
                                    return clearTimeout(e);
                                if ((r === o || !r) && clearTimeout)
                                    return r = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    r(e)
                                } catch (t) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function d(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function p() {}
                    i.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++)
                                t[r - 1] = arguments[r];
                        u.push(new d(e,t)),
                        1 !== u.length || c || a(f)
                    }
                    ,
                    d.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    i.title = "browser",
                    i.browser = !0,
                    i.env = {},
                    i.argv = [],
                    i.version = "",
                    i.versions = {},
                    i.on = p,
                    i.addListener = p,
                    i.once = p,
                    i.off = p,
                    i.removeListener = p,
                    i.removeAllListeners = p,
                    i.emit = p,
                    i.prependListener = p,
                    i.prependOnceListener = p,
                    i.listeners = function(e) {
                        return []
                    }
                    ,
                    i.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    i.cwd = function() {
                        return "/"
                    }
                    ,
                    i.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    i.umask = function() {
                        return 0
                    }
                }
            }
              , r = {};
            function n(e) {
                var i = r[e];
                if (void 0 !== i)
                    return i.exports;
                var s = r[e] = {
                    exports: {}
                }
                  , o = !0;
                try {
                    t[e](s, s.exports, n),
                    o = !1
                } finally {
                    o && delete r[e]
                }
                return s.exports
            }
            n.ab = "//";
            var i = n(229);
            e.exports = i
        }()
    },
    83263: function(e, t, r) {
        "use strict";
        var n = r(11055);
        let i = n.forwardRef(function(e, t) {
            let {title: r, titleId: i, ...s} = e;
            return n.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: t,
                "aria-labelledby": i
            }, s), r ? n.createElement("title", {
                id: i
            }, r) : null, n.createElement("path", {
                fillRule: "evenodd",
                d: "M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z",
                clipRule: "evenodd"
            }))
        });
        t.Z = i
    },
    34147: function(e, t, r) {
        "use strict";
        r.d(t, {
            j: function() {
                return s
            }
        });
        var n = r(63620)
          , i = r(78702)
          , s = new class extends n.l {
            #e;
            #t;
            #r;
            constructor() {
                super(),
                this.#r = e=>{
                    if (!i.sk && window.addEventListener) {
                        let t = ()=>e();
                        return window.addEventListener("visibilitychangez", t, !1),
                        ()=>{
                            window.removeEventListener("visibilitychangez", t)
                        }
                    }
                }
            }
            onSubscribe() {
                this.#t || this.setEventListener(this.#r)
            }
            onUnsubscribe() {
                this.hasListeners() || (this.#t?.(),
                this.#t = void 0)
            }
            setEventListener(e) {
                this.#r = e,
                this.#t?.(),
                this.#t = e(e=>{
                    "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
                }
                )
            }
            setFocused(e) {
                this.#e !== e && (this.#e = e,
                this.onFocus())
            }
            onFocus() {
                let e = this.isFocused();
                this.listeners.forEach(t=>{
                    t(e)
                }
                )
            }
            isFocused() {
                return "boolean" == typeof this.#e ? this.#e : globalThis.document?.visibilityState !== "hidden"
            }
        }
    },
    85876: function(e, t, r) {
        "use strict";
        r.d(t, {
            R: function() {
                return a
            },
            m: function() {
                return o
            }
        });
        var n = r(88405)
          , i = r(84198)
          , s = r(94031)
          , o = class extends i.F {
            #n;
            #i;
            #s;
            constructor(e) {
                super(),
                this.mutationId = e.mutationId,
                this.#i = e.mutationCache,
                this.#n = [],
                this.state = e.state || a(),
                this.setOptions(e.options),
                this.scheduleGc()
            }
            setOptions(e) {
                this.options = e,
                this.updateGcTime(this.options.gcTime)
            }
            get meta() {
                return this.options.meta
            }
            addObserver(e) {
                this.#n.includes(e) || (this.#n.push(e),
                this.clearGcTimeout(),
                this.#i.notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: e
                }))
            }
            removeObserver(e) {
                this.#n = this.#n.filter(t=>t !== e),
                this.scheduleGc(),
                this.#i.notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: e
                })
            }
            optionalRemove() {
                this.#n.length || ("pending" === this.state.status ? this.scheduleGc() : this.#i.remove(this))
            }
            continue() {
                return this.#s?.continue() ?? this.execute(this.state.variables)
            }
            async execute(e) {
                this.#s = (0,
                s.Mz)({
                    fn: ()=>this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error("No mutationFn found")),
                    onFail: (e,t)=>{
                        this.#o({
                            type: "failed",
                            failureCount: e,
                            error: t
                        })
                    }
                    ,
                    onPause: ()=>{
                        this.#o({
                            type: "pause"
                        })
                    }
                    ,
                    onContinue: ()=>{
                        this.#o({
                            type: "continue"
                        })
                    }
                    ,
                    retry: this.options.retry ?? 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: ()=>this.#i.canRun(this)
                });
                let t = "pending" === this.state.status
                  , r = !this.#s.canStart();
                try {
                    if (!t) {
                        this.#o({
                            type: "pending",
                            variables: e,
                            isPaused: r
                        }),
                        await this.#i.config.onMutate?.(e, this);
                        let t = await this.options.onMutate?.(e);
                        t !== this.state.context && this.#o({
                            type: "pending",
                            context: t,
                            variables: e,
                            isPaused: r
                        })
                    }
                    let n = await this.#s.start();
                    return await this.#i.config.onSuccess?.(n, e, this.state.context, this),
                    await this.options.onSuccess?.(n, e, this.state.context),
                    await this.#i.config.onSettled?.(n, null, this.state.variables, this.state.context, this),
                    await this.options.onSettled?.(n, null, e, this.state.context),
                    this.#o({
                        type: "success",
                        data: n
                    }),
                    n
                } catch (t) {
                    try {
                        throw await this.#i.config.onError?.(t, e, this.state.context, this),
                        await this.options.onError?.(t, e, this.state.context),
                        await this.#i.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this),
                        await this.options.onSettled?.(void 0, t, e, this.state.context),
                        t
                    } finally {
                        this.#o({
                            type: "error",
                            error: t
                        })
                    }
                } finally {
                    this.#i.runNext(this)
                }
            }
            #o(e) {
                this.state = (t=>{
                    switch (e.type) {
                    case "failed":
                        return {
                            ...t,
                            failureCount: e.failureCount,
                            failureReason: e.error
                        };
                    case "pause":
                        return {
                            ...t,
                            isPaused: !0
                        };
                    case "continue":
                        return {
                            ...t,
                            isPaused: !1
                        };
                    case "pending":
                        return {
                            ...t,
                            context: e.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: e.isPaused,
                            status: "pending",
                            variables: e.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return {
                            ...t,
                            data: e.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1
                        };
                    case "error":
                        return {
                            ...t,
                            data: void 0,
                            error: e.error,
                            failureCount: t.failureCount + 1,
                            failureReason: e.error,
                            isPaused: !1,
                            status: "error"
                        }
                    }
                }
                )(this.state),
                n.V.batch(()=>{
                    this.#n.forEach(t=>{
                        t.onMutationUpdate(e)
                    }
                    ),
                    this.#i.notify({
                        mutation: this,
                        type: "updated",
                        action: e
                    })
                }
                )
            }
        }
        ;
        function a() {
            return {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: "idle",
                variables: void 0,
                submittedAt: 0
            }
        }
    },
    88405: function(e, t, r) {
        "use strict";
        r.d(t, {
            V: function() {
                return n
            }
        });
        var n = function() {
            let e = []
              , t = 0
              , r = e=>{
                e()
            }
              , n = e=>{
                e()
            }
              , i = e=>setTimeout(e, 0)
              , s = n=>{
                t ? e.push(n) : i(()=>{
                    r(n)
                }
                )
            }
              , o = ()=>{
                let t = e;
                e = [],
                t.length && i(()=>{
                    n(()=>{
                        t.forEach(e=>{
                            r(e)
                        }
                        )
                    }
                    )
                }
                )
            }
            ;
            return {
                batch: e=>{
                    let r;
                    t++;
                    try {
                        r = e()
                    } finally {
                        --t || o()
                    }
                    return r
                }
                ,
                batchCalls: e=>(...t)=>{
                    s(()=>{
                        e(...t)
                    }
                    )
                }
                ,
                schedule: s,
                setNotifyFunction: e=>{
                    r = e
                }
                ,
                setBatchNotifyFunction: e=>{
                    n = e
                }
                ,
                setScheduler: e=>{
                    i = e
                }
            }
        }()
    },
    89352: function(e, t, r) {
        "use strict";
        r.d(t, {
            N: function() {
                return s
            }
        });
        var n = r(63620)
          , i = r(78702)
          , s = new class extends n.l {
            #a = !0;
            #t;
            #r;
            constructor() {
                super(),
                this.#r = e=>{
                    if (!i.sk && window.addEventListener) {
                        let t = ()=>e(!0)
                          , r = ()=>e(!1);
                        return window.addEventListener("online", t, !1),
                        window.addEventListener("offline", r, !1),
                        ()=>{
                            window.removeEventListener("online", t),
                            window.removeEventListener("offline", r)
                        }
                    }
                }
            }
            onSubscribe() {
                this.#t || this.setEventListener(this.#r)
            }
            onUnsubscribe() {
                this.hasListeners() || (this.#t?.(),
                this.#t = void 0)
            }
            setEventListener(e) {
                this.#r = e,
                this.#t?.(),
                this.#t = e(this.setOnline.bind(this))
            }
            setOnline(e) {
                this.#a !== e && (this.#a = e,
                this.listeners.forEach(t=>{
                    t(e)
                }
                ))
            }
            isOnline() {
                return this.#a
            }
        }
    },
    97970: function(e, t, r) {
        "use strict";
        r.d(t, {
            A: function() {
                return a
            },
            z: function() {
                return u
            }
        });
        var n = r(78702)
          , i = r(88405)
          , s = r(94031)
          , o = r(84198)
          , a = class extends o.F {
            #u;
            #c;
            #l;
            #s;
            #h;
            #f;
            constructor(e) {
                super(),
                this.#f = !1,
                this.#h = e.defaultOptions,
                this.setOptions(e.options),
                this.observers = [],
                this.#l = e.cache,
                this.queryKey = e.queryKey,
                this.queryHash = e.queryHash,
                this.#u = e.state || function(e) {
                    let t = "function" == typeof e.initialData ? e.initialData() : e.initialData
                      , r = void 0 !== t
                      , n = r ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                    return {
                        data: t,
                        dataUpdateCount: 0,
                        dataUpdatedAt: r ? n ?? Date.now() : 0,
                        error: null,
                        errorUpdateCount: 0,
                        errorUpdatedAt: 0,
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                        fetchMeta: null,
                        isInvalidated: !1,
                        status: r ? "success" : "pending",
                        fetchStatus: "idle"
                    }
                }(this.options),
                this.state = this.#u,
                this.scheduleGc()
            }
            get meta() {
                return this.options.meta
            }
            setOptions(e) {
                this.options = {
                    ...this.#h,
                    ...e
                },
                this.updateGcTime(this.options.gcTime)
            }
            optionalRemove() {
                this.observers.length || "idle" !== this.state.fetchStatus || this.#l.remove(this)
            }
            setData(e, t) {
                let r = (0,
                n.oE)(this.state.data, e, this.options);
                return this.#o({
                    data: r,
                    type: "success",
                    dataUpdatedAt: t?.updatedAt,
                    manual: t?.manual
                }),
                r
            }
            setState(e, t) {
                this.#o({
                    type: "setState",
                    state: e,
                    setStateOptions: t
                })
            }
            cancel(e) {
                let t = this.#s?.promise;
                return this.#s?.cancel(e),
                t ? t.then(n.ZT).catch(n.ZT) : Promise.resolve()
            }
            destroy() {
                super.destroy(),
                this.cancel({
                    silent: !0
                })
            }
            reset() {
                this.destroy(),
                this.setState(this.#u)
            }
            isActive() {
                return this.observers.some(e=>!1 !== e.options.enabled)
            }
            isDisabled() {
                return this.getObserversCount() > 0 && !this.isActive()
            }
            isStale() {
                return !!this.state.isInvalidated || (this.getObserversCount() > 0 ? this.observers.some(e=>e.getCurrentResult().isStale) : void 0 === this.state.data)
            }
            isStaleByTime(e=0) {
                return this.state.isInvalidated || void 0 === this.state.data || !(0,
                n.Kp)(this.state.dataUpdatedAt, e)
            }
            onFocus() {
                let e = this.observers.find(e=>e.shouldFetchOnWindowFocus());
                e?.refetch({
                    cancelRefetch: !1
                }),
                this.#s?.continue()
            }
            onOnline() {
                let e = this.observers.find(e=>e.shouldFetchOnReconnect());
                e?.refetch({
                    cancelRefetch: !1
                }),
                this.#s?.continue()
            }
            addObserver(e) {
                this.observers.includes(e) || (this.observers.push(e),
                this.clearGcTimeout(),
                this.#l.notify({
                    type: "observerAdded",
                    query: this,
                    observer: e
                }))
            }
            removeObserver(e) {
                this.observers.includes(e) && (this.observers = this.observers.filter(t=>t !== e),
                this.observers.length || (this.#s && (this.#f ? this.#s.cancel({
                    revert: !0
                }) : this.#s.cancelRetry()),
                this.scheduleGc()),
                this.#l.notify({
                    type: "observerRemoved",
                    query: this,
                    observer: e
                }))
            }
            getObserversCount() {
                return this.observers.length
            }
            invalidate() {
                this.state.isInvalidated || this.#o({
                    type: "invalidate"
                })
            }
            fetch(e, t) {
                if ("idle" !== this.state.fetchStatus) {
                    if (void 0 !== this.state.data && t?.cancelRefetch)
                        this.cancel({
                            silent: !0
                        });
                    else if (this.#s)
                        return this.#s.continueRetry(),
                        this.#s.promise
                }
                if (e && this.setOptions(e),
                !this.options.queryFn) {
                    let e = this.observers.find(e=>e.options.queryFn);
                    e && this.setOptions(e.options)
                }
                let r = new AbortController
                  , i = {
                    queryKey: this.queryKey,
                    meta: this.meta
                }
                  , o = e=>{
                    Object.defineProperty(e, "signal", {
                        enumerable: !0,
                        get: ()=>(this.#f = !0,
                        r.signal)
                    })
                }
                ;
                o(i);
                let a = {
                    fetchOptions: t,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: ()=>this.options.queryFn && this.options.queryFn !== n.CN ? (this.#f = !1,
                    this.options.persister) ? this.options.persister(this.options.queryFn, i, this) : this.options.queryFn(i) : Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))
                };
                o(a),
                this.options.behavior?.onFetch(a, this),
                this.#c = this.state,
                ("idle" === this.state.fetchStatus || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#o({
                    type: "fetch",
                    meta: a.fetchOptions?.meta
                });
                let u = e=>{
                    (0,
                    s.DV)(e) && e.silent || this.#o({
                        type: "error",
                        error: e
                    }),
                    (0,
                    s.DV)(e) || (this.#l.config.onError?.(e, this),
                    this.#l.config.onSettled?.(this.state.data, e, this)),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    this.isFetchingOptimistic = !1
                }
                ;
                return this.#s = (0,
                s.Mz)({
                    fn: a.fetchFn,
                    abort: r.abort.bind(r),
                    onSuccess: e=>{
                        if (void 0 === e) {
                            u(Error(`${this.queryHash} data is undefined`));
                            return
                        }
                        this.setData(e),
                        this.#l.config.onSuccess?.(e, this),
                        this.#l.config.onSettled?.(e, this.state.error, this),
                        this.isFetchingOptimistic || this.scheduleGc(),
                        this.isFetchingOptimistic = !1
                    }
                    ,
                    onError: u,
                    onFail: (e,t)=>{
                        this.#o({
                            type: "failed",
                            failureCount: e,
                            error: t
                        })
                    }
                    ,
                    onPause: ()=>{
                        this.#o({
                            type: "pause"
                        })
                    }
                    ,
                    onContinue: ()=>{
                        this.#o({
                            type: "continue"
                        })
                    }
                    ,
                    retry: a.options.retry,
                    retryDelay: a.options.retryDelay,
                    networkMode: a.options.networkMode,
                    canRun: ()=>!0
                }),
                this.#s.start()
            }
            #o(e) {
                this.state = (t=>{
                    switch (e.type) {
                    case "failed":
                        return {
                            ...t,
                            fetchFailureCount: e.failureCount,
                            fetchFailureReason: e.error
                        };
                    case "pause":
                        return {
                            ...t,
                            fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...t,
                            fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...t,
                            ...u(t.data, this.options),
                            fetchMeta: e.meta ?? null
                        };
                    case "success":
                        return {
                            ...t,
                            data: e.data,
                            dataUpdateCount: t.dataUpdateCount + 1,
                            dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                            error: null,
                            isInvalidated: !1,
                            status: "success",
                            ...!e.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                    case "error":
                        let r = e.error;
                        if ((0,
                        s.DV)(r) && r.revert && this.#c)
                            return {
                                ...this.#c,
                                fetchStatus: "idle"
                            };
                        return {
                            ...t,
                            error: r,
                            errorUpdateCount: t.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: t.fetchFailureCount + 1,
                            fetchFailureReason: r,
                            fetchStatus: "idle",
                            status: "error"
                        };
                    case "invalidate":
                        return {
                            ...t,
                            isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...t,
                            ...e.state
                        }
                    }
                }
                )(this.state),
                i.V.batch(()=>{
                    this.observers.forEach(e=>{
                        e.onQueryUpdate()
                    }
                    ),
                    this.#l.notify({
                        query: this,
                        type: "updated",
                        action: e
                    })
                }
                )
            }
        }
        ;
        function u(e, t) {
            return {
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchStatus: (0,
                s.Kw)(t.networkMode) ? "fetching" : "paused",
                ...void 0 === e && {
                    error: null,
                    status: "pending"
                }
            }
        }
    },
    58544: function(e, t, r) {
        "use strict";
        r.d(t, {
            S: function() {
                return p
            }
        });
        var n = r(78702)
          , i = r(97970)
          , s = r(88405)
          , o = r(63620)
          , a = class extends o.l {
            constructor(e={}) {
                super(),
                this.config = e,
                this.#d = new Map
            }
            #d;
            build(e, t, r) {
                let s = t.queryKey
                  , o = t.queryHash ?? (0,
                n.Rm)(s, t)
                  , a = this.get(o);
                return a || (a = new i.A({
                    cache: this,
                    queryKey: s,
                    queryHash: o,
                    options: e.defaultQueryOptions(t),
                    state: r,
                    defaultOptions: e.getQueryDefaults(s)
                }),
                this.add(a)),
                a
            }
            add(e) {
                this.#d.has(e.queryHash) || (this.#d.set(e.queryHash, e),
                this.notify({
                    type: "added",
                    query: e
                }))
            }
            remove(e) {
                let t = this.#d.get(e.queryHash);
                t && (e.destroy(),
                t === e && this.#d.delete(e.queryHash),
                this.notify({
                    type: "removed",
                    query: e
                }))
            }
            clear() {
                s.V.batch(()=>{
                    this.getAll().forEach(e=>{
                        this.remove(e)
                    }
                    )
                }
                )
            }
            get(e) {
                return this.#d.get(e)
            }
            getAll() {
                return [...this.#d.values()]
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e=>(0,
                n._x)(t, e))
            }
            findAll(e={}) {
                let t = this.getAll();
                return Object.keys(e).length > 0 ? t.filter(t=>(0,
                n._x)(e, t)) : t
            }
            notify(e) {
                s.V.batch(()=>{
                    this.listeners.forEach(t=>{
                        t(e)
                    }
                    )
                }
                )
            }
            onFocus() {
                s.V.batch(()=>{
                    this.getAll().forEach(e=>{
                        e.onFocus()
                    }
                    )
                }
                )
            }
            onOnline() {
                s.V.batch(()=>{
                    this.getAll().forEach(e=>{
                        e.onOnline()
                    }
                    )
                }
                )
            }
        }
          , u = r(85876)
          , c = class extends o.l {
            constructor(e={}) {
                super(),
                this.config = e,
                this.#p = new Map,
                this.#y = Date.now()
            }
            #p;
            #y;
            build(e, t, r) {
                let n = new u.m({
                    mutationCache: this,
                    mutationId: ++this.#y,
                    options: e.defaultMutationOptions(t),
                    state: r
                });
                return this.add(n),
                n
            }
            add(e) {
                let t = l(e)
                  , r = this.#p.get(t) ?? [];
                r.push(e),
                this.#p.set(t, r),
                this.notify({
                    type: "added",
                    mutation: e
                })
            }
            remove(e) {
                let t = l(e);
                if (this.#p.has(t)) {
                    let r = this.#p.get(t)?.filter(t=>t !== e);
                    r && (0 === r.length ? this.#p.delete(t) : this.#p.set(t, r))
                }
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            canRun(e) {
                let t = this.#p.get(l(e))?.find(e=>"pending" === e.state.status);
                return !t || t === e
            }
            runNext(e) {
                let t = this.#p.get(l(e))?.find(t=>t !== e && t.state.isPaused);
                return t?.continue() ?? Promise.resolve()
            }
            clear() {
                s.V.batch(()=>{
                    this.getAll().forEach(e=>{
                        this.remove(e)
                    }
                    )
                }
                )
            }
            getAll() {
                return [...this.#p.values()].flat()
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e=>(0,
                n.X7)(t, e))
            }
            findAll(e={}) {
                return this.getAll().filter(t=>(0,
                n.X7)(e, t))
            }
            notify(e) {
                s.V.batch(()=>{
                    this.listeners.forEach(t=>{
                        t(e)
                    }
                    )
                }
                )
            }
            resumePausedMutations() {
                let e = this.getAll().filter(e=>e.state.isPaused);
                return s.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(n.ZT))))
            }
        }
        ;
        function l(e) {
            return e.options.scope?.id ?? String(e.mutationId)
        }
        var h = r(34147)
          , f = r(89352);
        function d(e, {pages: t, pageParams: r}) {
            let n = t.length - 1;
            return e.getNextPageParam(t[n], t, r[n], r)
        }
        var p = class {
            #m;
            #i;
            #h;
            #b;
            #g;
            #v;
            #w;
            #O;
            constructor(e={}) {
                this.#m = e.queryCache || new a,
                this.#i = e.mutationCache || new c,
                this.#h = e.defaultOptions || {},
                this.#b = new Map,
                this.#g = new Map,
                this.#v = 0
            }
            mount() {
                this.#v++,
                1 === this.#v && (this.#w = h.j.subscribe(async e=>{
                    e && (await this.resumePausedMutations(),
                    this.#m.onFocus())
                }
                ),
                this.#O = f.N.subscribe(async e=>{
                    e && (await this.resumePausedMutations(),
                    this.#m.onOnline())
                }
                ))
            }
            unmount() {
                this.#v--,
                0 === this.#v && (this.#w?.(),
                this.#w = void 0,
                this.#O?.(),
                this.#O = void 0)
            }
            isFetching(e) {
                return this.#m.findAll({
                    ...e,
                    fetchStatus: "fetching"
                }).length
            }
            isMutating(e) {
                return this.#i.findAll({
                    ...e,
                    status: "pending"
                }).length
            }
            getQueryData(e) {
                let t = this.defaultQueryOptions({
                    queryKey: e
                });
                return this.#m.get(t.queryHash)?.state.data
            }
            ensureQueryData(e) {
                let t = this.getQueryData(e.queryKey);
                if (void 0 === t)
                    return this.fetchQuery(e);
                {
                    let r = this.defaultQueryOptions(e)
                      , n = this.#m.build(this, r);
                    return e.revalidateIfStale && n.isStaleByTime(r.staleTime) && this.prefetchQuery(r),
                    Promise.resolve(t)
                }
            }
            getQueriesData(e) {
                return this.#m.findAll(e).map(({queryKey: e, state: t})=>[e, t.data])
            }
            setQueryData(e, t, r) {
                let i = this.defaultQueryOptions({
                    queryKey: e
                })
                  , s = this.#m.get(i.queryHash)
                  , o = s?.state.data
                  , a = (0,
                n.SE)(t, o);
                if (void 0 !== a)
                    return this.#m.build(this, i).setData(a, {
                        ...r,
                        manual: !0
                    })
            }
            setQueriesData(e, t, r) {
                return s.V.batch(()=>this.#m.findAll(e).map(({queryKey: e})=>[e, this.setQueryData(e, t, r)]))
            }
            getQueryState(e) {
                let t = this.defaultQueryOptions({
                    queryKey: e
                });
                return this.#m.get(t.queryHash)?.state
            }
            removeQueries(e) {
                let t = this.#m;
                s.V.batch(()=>{
                    t.findAll(e).forEach(e=>{
                        t.remove(e)
                    }
                    )
                }
                )
            }
            resetQueries(e, t) {
                let r = this.#m
                  , n = {
                    type: "active",
                    ...e
                };
                return s.V.batch(()=>(r.findAll(e).forEach(e=>{
                    e.reset()
                }
                ),
                this.refetchQueries(n, t)))
            }
            cancelQueries(e={}, t={}) {
                let r = {
                    revert: !0,
                    ...t
                };
                return Promise.all(s.V.batch(()=>this.#m.findAll(e).map(e=>e.cancel(r)))).then(n.ZT).catch(n.ZT)
            }
            invalidateQueries(e={}, t={}) {
                return s.V.batch(()=>{
                    if (this.#m.findAll(e).forEach(e=>{
                        e.invalidate()
                    }
                    ),
                    "none" === e.refetchType)
                        return Promise.resolve();
                    let r = {
                        ...e,
                        type: e.refetchType ?? e.type ?? "active"
                    };
                    return this.refetchQueries(r, t)
                }
                )
            }
            refetchQueries(e={}, t) {
                let r = {
                    ...t,
                    cancelRefetch: t?.cancelRefetch ?? !0
                };
                return Promise.all(s.V.batch(()=>this.#m.findAll(e).filter(e=>!e.isDisabled()).map(e=>{
                    let t = e.fetch(void 0, r);
                    return r.throwOnError || (t = t.catch(n.ZT)),
                    "paused" === e.state.fetchStatus ? Promise.resolve() : t
                }
                ))).then(n.ZT)
            }
            fetchQuery(e) {
                let t = this.defaultQueryOptions(e);
                void 0 === t.retry && (t.retry = !1);
                let r = this.#m.build(this, t);
                return r.isStaleByTime(t.staleTime) ? r.fetch(t) : Promise.resolve(r.state.data)
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(n.ZT).catch(n.ZT)
            }
            fetchInfiniteQuery(e) {
                var t;
                return e.behavior = (t = e.pages,
                {
                    onFetch: (e,r)=>{
                        let i = async()=>{
                            let r;
                            let i = e.options
                              , s = e.fetchOptions?.meta?.fetchMore?.direction
                              , o = e.state.data?.pages || []
                              , a = e.state.data?.pageParams || []
                              , u = !1
                              , c = t=>{
                                Object.defineProperty(t, "signal", {
                                    enumerable: !0,
                                    get: ()=>(e.signal.aborted ? u = !0 : e.signal.addEventListener("abort", ()=>{
                                        u = !0
                                    }
                                    ),
                                    e.signal)
                                })
                            }
                              , l = e.options.queryFn && e.options.queryFn !== n.CN ? e.options.queryFn : ()=>Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`))
                              , h = async(t,r,i)=>{
                                if (u)
                                    return Promise.reject();
                                if (null == r && t.pages.length)
                                    return Promise.resolve(t);
                                let s = {
                                    queryKey: e.queryKey,
                                    pageParam: r,
                                    direction: i ? "backward" : "forward",
                                    meta: e.options.meta
                                };
                                c(s);
                                let o = await l(s)
                                  , {maxPages: a} = e.options
                                  , h = i ? n.Ht : n.VX;
                                return {
                                    pages: h(t.pages, o, a),
                                    pageParams: h(t.pageParams, r, a)
                                }
                            }
                            ;
                            if (s && o.length) {
                                let e = "backward" === s
                                  , t = {
                                    pages: o,
                                    pageParams: a
                                }
                                  , n = (e ? function(e, {pages: t, pageParams: r}) {
                                    return e.getPreviousPageParam?.(t[0], t, r[0], r)
                                }
                                : d)(i, t);
                                r = await h(t, n, e)
                            } else {
                                r = await h({
                                    pages: [],
                                    pageParams: []
                                }, a[0] ?? i.initialPageParam);
                                let e = t ?? o.length;
                                for (let t = 1; t < e; t++) {
                                    let e = d(i, r);
                                    r = await h(r, e)
                                }
                            }
                            return r
                        }
                        ;
                        e.options.persister ? e.fetchFn = ()=>e.options.persister?.(i, {
                            queryKey: e.queryKey,
                            meta: e.options.meta,
                            signal: e.signal
                        }, r) : e.fetchFn = i
                    }
                }),
                this.fetchQuery(e)
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(n.ZT).catch(n.ZT)
            }
            resumePausedMutations() {
                return f.N.isOnline() ? this.#i.resumePausedMutations() : Promise.resolve()
            }
            getQueryCache() {
                return this.#m
            }
            getMutationCache() {
                return this.#i
            }
            getDefaultOptions() {
                return this.#h
            }
            setDefaultOptions(e) {
                this.#h = e
            }
            setQueryDefaults(e, t) {
                this.#b.set((0,
                n.Ym)(e), {
                    queryKey: e,
                    defaultOptions: t
                })
            }
            getQueryDefaults(e) {
                let t = [...this.#b.values()]
                  , r = {};
                return t.forEach(t=>{
                    (0,
                    n.to)(e, t.queryKey) && (r = {
                        ...r,
                        ...t.defaultOptions
                    })
                }
                ),
                r
            }
            setMutationDefaults(e, t) {
                this.#g.set((0,
                n.Ym)(e), {
                    mutationKey: e,
                    defaultOptions: t
                })
            }
            getMutationDefaults(e) {
                let t = [...this.#g.values()]
                  , r = {};
                return t.forEach(t=>{
                    (0,
                    n.to)(e, t.mutationKey) && (r = {
                        ...r,
                        ...t.defaultOptions
                    })
                }
                ),
                r
            }
            defaultQueryOptions(e) {
                if (e._defaulted)
                    return e;
                let t = {
                    ...this.#h.queries,
                    ...this.getQueryDefaults(e.queryKey),
                    ...e,
                    _defaulted: !0
                };
                return t.queryHash || (t.queryHash = (0,
                n.Rm)(t.queryKey, t)),
                void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode),
                void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
                !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
                !0 !== t.enabled && t.queryFn === n.CN && (t.enabled = !1),
                t
            }
            defaultMutationOptions(e) {
                return e?._defaulted ? e : {
                    ...this.#h.mutations,
                    ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
                    ...e,
                    _defaulted: !0
                }
            }
            clear() {
                this.#m.clear(),
                this.#i.clear()
            }
        }
    },
    84198: function(e, t, r) {
        "use strict";
        r.d(t, {
            F: function() {
                return i
            }
        });
        var n = r(78702)
          , i = class {
            #S;
            destroy() {
                this.clearGcTimeout()
            }
            scheduleGc() {
                this.clearGcTimeout(),
                (0,
                n.PN)(this.gcTime) && (this.#S = setTimeout(()=>{
                    this.optionalRemove()
                }
                , this.gcTime))
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (n.sk ? 1 / 0 : 3e5))
            }
            clearGcTimeout() {
                this.#S && (clearTimeout(this.#S),
                this.#S = void 0)
            }
        }
    },
    94031: function(e, t, r) {
        "use strict";
        r.d(t, {
            DV: function() {
                return c
            },
            Kw: function() {
                return a
            },
            Mz: function() {
                return l
            }
        });
        var n = r(34147)
          , i = r(89352)
          , s = r(78702);
        function o(e) {
            return Math.min(1e3 * 2 ** e, 3e4)
        }
        function a(e) {
            return (e ?? "online") !== "online" || i.N.isOnline()
        }
        var u = class {
            constructor(e) {
                this.revert = e?.revert,
                this.silent = e?.silent
            }
        }
        ;
        function c(e) {
            return e instanceof u
        }
        function l(e) {
            let t, r, c, l = !1, h = 0, f = !1, d = new Promise((e,t)=>{
                r = e,
                c = t
            }
            ), p = ()=>n.j.isFocused() && ("always" === e.networkMode || i.N.isOnline()) && e.canRun(), y = ()=>a(e.networkMode) && e.canRun(), m = n=>{
                f || (f = !0,
                e.onSuccess?.(n),
                t?.(),
                r(n))
            }
            , b = r=>{
                f || (f = !0,
                e.onError?.(r),
                t?.(),
                c(r))
            }
            , g = ()=>new Promise(r=>{
                t = e=>{
                    (f || p()) && r(e)
                }
                ,
                e.onPause?.()
            }
            ).then(()=>{
                t = void 0,
                f || e.onContinue?.()
            }
            ), v = ()=>{
                let t;
                if (!f) {
                    try {
                        t = e.fn()
                    } catch (e) {
                        t = Promise.reject(e)
                    }
                    Promise.resolve(t).then(m).catch(t=>{
                        if (f)
                            return;
                        let r = e.retry ?? (s.sk ? 0 : 3)
                          , n = e.retryDelay ?? o
                          , i = "function" == typeof n ? n(h, t) : n
                          , a = !0 === r || "number" == typeof r && h < r || "function" == typeof r && r(h, t);
                        if (l || !a) {
                            b(t);
                            return
                        }
                        h++,
                        e.onFail?.(h, t),
                        (0,
                        s._v)(i).then(()=>p() ? void 0 : g()).then(()=>{
                            l ? b(t) : v()
                        }
                        )
                    }
                    )
                }
            }
            ;
            return {
                promise: d,
                cancel: t=>{
                    f || (b(new u(t)),
                    e.abort?.())
                }
                ,
                continue: ()=>(t?.(),
                d),
                cancelRetry: ()=>{
                    l = !0
                }
                ,
                continueRetry: ()=>{
                    l = !1
                }
                ,
                canStart: y,
                start: ()=>(y() ? v() : g().then(v),
                d)
            }
        }
    },
    63620: function(e, t, r) {
        "use strict";
        r.d(t, {
            l: function() {
                return n
            }
        });
        var n = class {
            constructor() {
                this.listeners = new Set,
                this.subscribe = this.subscribe.bind(this)
            }
            subscribe(e) {
                return this.listeners.add(e),
                this.onSubscribe(),
                ()=>{
                    this.listeners.delete(e),
                    this.onUnsubscribe()
                }
            }
            hasListeners() {
                return this.listeners.size > 0
            }
            onSubscribe() {}
            onUnsubscribe() {}
        }
    },
    78702: function(e, t, r) {
        "use strict";
        r.d(t, {
            CN: function() {
                return O
            },
            Ht: function() {
                return w
            },
            Kp: function() {
                return a
            },
            PN: function() {
                return o
            },
            Rm: function() {
                return l
            },
            SE: function() {
                return s
            },
            VS: function() {
                return d
            },
            VX: function() {
                return v
            },
            X7: function() {
                return c
            },
            Ym: function() {
                return h
            },
            ZT: function() {
                return i
            },
            _v: function() {
                return b
            },
            _x: function() {
                return u
            },
            oE: function() {
                return g
            },
            sk: function() {
                return n
            },
            to: function() {
                return f
            }
        });
        var n = "undefined" == typeof window || "Deno"in globalThis;
        function i() {}
        function s(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function o(e) {
            return "number" == typeof e && e >= 0 && e !== 1 / 0
        }
        function a(e, t) {
            return Math.max(e + (t || 0) - Date.now(), 0)
        }
        function u(e, t) {
            let {type: r="all", exact: n, fetchStatus: i, predicate: s, queryKey: o, stale: a} = e;
            if (o) {
                if (n) {
                    if (t.queryHash !== l(o, t.options))
                        return !1
                } else if (!f(t.queryKey, o))
                    return !1
            }
            if ("all" !== r) {
                let e = t.isActive();
                if ("active" === r && !e || "inactive" === r && e)
                    return !1
            }
            return ("boolean" != typeof a || t.isStale() === a) && (!i || i === t.state.fetchStatus) && (!s || !!s(t))
        }
        function c(e, t) {
            let {exact: r, status: n, predicate: i, mutationKey: s} = e;
            if (s) {
                if (!t.options.mutationKey)
                    return !1;
                if (r) {
                    if (h(t.options.mutationKey) !== h(s))
                        return !1
                } else if (!f(t.options.mutationKey, s))
                    return !1
            }
            return (!n || t.state.status === n) && (!i || !!i(t))
        }
        function l(e, t) {
            return (t?.queryKeyHashFn || h)(e)
        }
        function h(e) {
            return JSON.stringify(e, (e,t)=>y(t) ? Object.keys(t).sort().reduce((e,r)=>(e[r] = t[r],
            e), {}) : t)
        }
        function f(e, t) {
            return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && !Object.keys(t).some(r=>!f(e[r], t[r]))
        }
        function d(e, t) {
            if (!t || Object.keys(e).length !== Object.keys(t).length)
                return !1;
            for (let r in e)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        function p(e) {
            return Array.isArray(e) && e.length === Object.keys(e).length
        }
        function y(e) {
            if (!m(e))
                return !1;
            let t = e.constructor;
            if (void 0 === t)
                return !0;
            let r = t.prototype;
            return !!(m(r) && r.hasOwnProperty("isPrototypeOf")) && Object.getPrototypeOf(e) === Object.prototype
        }
        function m(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }
        function b(e) {
            return new Promise(t=>{
                setTimeout(t, e)
            }
            )
        }
        function g(e, t, r) {
            return "function" == typeof r.structuralSharing ? r.structuralSharing(e, t) : !1 !== r.structuralSharing ? function e(t, r) {
                if (t === r)
                    return t;
                let n = p(t) && p(r);
                if (n || y(t) && y(r)) {
                    let i = n ? t : Object.keys(t)
                      , s = i.length
                      , o = n ? r : Object.keys(r)
                      , a = o.length
                      , u = n ? [] : {}
                      , c = 0;
                    for (let s = 0; s < a; s++) {
                        let a = n ? s : o[s];
                        (!n && i.includes(a) || n) && void 0 === t[a] && void 0 === r[a] ? (u[a] = void 0,
                        c++) : (u[a] = e(t[a], r[a]),
                        u[a] === t[a] && void 0 !== t[a] && c++)
                    }
                    return s === a && c === s ? t : u
                }
                return r
            }(e, t) : t
        }
        function v(e, t, r=0) {
            let n = [...e, t];
            return r && n.length > r ? n.slice(1) : n
        }
        function w(e, t, r=0) {
            let n = [t, ...e];
            return r && n.length > r ? n.slice(0, -1) : n
        }
        var O = Symbol()
    },
    58352: function(e, t, r) {
        "use strict";
        r.d(t, {
            NL: function() {
                return o
            },
            aH: function() {
                return a
            }
        });
        var n = r(11055)
          , i = r(91153)
          , s = n.createContext(void 0)
          , o = e=>{
            let t = n.useContext(s);
            if (e)
                return e;
            if (!t)
                throw Error("No QueryClient set, use QueryClientProvider to set one");
            return t
        }
          , a = e=>{
            let {client: t, children: r} = e;
            return n.useEffect(()=>(t.mount(),
            ()=>{
                t.unmount()
            }
            ), [t]),
            (0,
            i.jsx)(s.Provider, {
                value: t,
                children: r
            })
        }
    },
    16166: function(e, t, r) {
        "use strict";
        let n;
        r.d(t, {
            a: function() {
                return T
            }
        });
        var i = r(78702)
          , s = r(88405)
          , o = r(34147)
          , a = r(63620)
          , u = r(97970)
          , c = class extends a.l {
            constructor(e, t) {
                super(),
                this.options = t,
                this.#R = e,
                this.#E = null,
                this.bindMethods(),
                this.setOptions(t)
            }
            #R;
            #_ = void 0;
            #C = void 0;
            #T = void 0;
            #P;
            #A;
            #E;
            #F;
            #x;
            #D;
            #j;
            #q;
            #N;
            #U = new Set;
            bindMethods() {
                this.refetch = this.refetch.bind(this)
            }
            onSubscribe() {
                1 === this.listeners.size && (this.#_.addObserver(this),
                l(this.#_, this.options) ? this.#k() : this.updateResult(),
                this.#L())
            }
            onUnsubscribe() {
                this.hasListeners() || this.destroy()
            }
            shouldFetchOnReconnect() {
                return h(this.#_, this.options, this.options.refetchOnReconnect)
            }
            shouldFetchOnWindowFocus() {
                return h(this.#_, this.options, this.options.refetchOnWindowFocus)
            }
            destroy() {
                this.listeners = new Set,
                this.#M(),
                this.#I(),
                this.#_.removeObserver(this)
            }
            setOptions(e, t) {
                let r = this.options
                  , n = this.#_;
                if (this.options = this.#R.defaultQueryOptions(e),
                void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled)
                    throw Error("Expected enabled to be a boolean");
                this.#Q(),
                this.#_.setOptions(this.options),
                r._defaulted && !(0,
                i.VS)(this.options, r) && this.#R.getQueryCache().notify({
                    type: "observerOptionsUpdated",
                    query: this.#_,
                    observer: this
                });
                let s = this.hasListeners();
                s && f(this.#_, n, this.options, r) && this.#k(),
                this.updateResult(t),
                s && (this.#_ !== n || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.#B();
                let o = this.#z();
                s && (this.#_ !== n || this.options.enabled !== r.enabled || o !== this.#N) && this.#K(o)
            }
            getOptimisticResult(e) {
                let t = this.#R.getQueryCache().build(this.#R, e)
                  , r = this.createResult(t, e);
                return (0,
                i.VS)(this.getCurrentResult(), r) || (this.#T = r,
                this.#A = this.options,
                this.#P = this.#_.state),
                r
            }
            getCurrentResult() {
                return this.#T
            }
            trackResult(e, t) {
                let r = {};
                return Object.keys(e).forEach(n=>{
                    Object.defineProperty(r, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: ()=>(this.trackProp(n),
                        t?.(n),
                        e[n])
                    })
                }
                ),
                r
            }
            trackProp(e) {
                this.#U.add(e)
            }
            getCurrentQuery() {
                return this.#_
            }
            refetch({...e}={}) {
                return this.fetch({
                    ...e
                })
            }
            fetchOptimistic(e) {
                let t = this.#R.defaultQueryOptions(e)
                  , r = this.#R.getQueryCache().build(this.#R, t);
                return r.isFetchingOptimistic = !0,
                r.fetch().then(()=>this.createResult(r, t))
            }
            fetch(e) {
                return this.#k({
                    ...e,
                    cancelRefetch: e.cancelRefetch ?? !0
                }).then(()=>(this.updateResult(),
                this.#T))
            }
            #k(e) {
                this.#Q();
                let t = this.#_.fetch(this.options, e);
                return e?.throwOnError || (t = t.catch(i.ZT)),
                t
            }
            #B() {
                if (this.#M(),
                i.sk || this.#T.isStale || !(0,
                i.PN)(this.options.staleTime))
                    return;
                let e = (0,
                i.Kp)(this.#T.dataUpdatedAt, this.options.staleTime);
                this.#j = setTimeout(()=>{
                    this.#T.isStale || this.updateResult()
                }
                , e + 1)
            }
            #z() {
                return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#_) : this.options.refetchInterval) ?? !1
            }
            #K(e) {
                this.#I(),
                this.#N = e,
                !i.sk && !1 !== this.options.enabled && (0,
                i.PN)(this.#N) && 0 !== this.#N && (this.#q = setInterval(()=>{
                    (this.options.refetchIntervalInBackground || o.j.isFocused()) && this.#k()
                }
                , this.#N))
            }
            #L() {
                this.#B(),
                this.#K(this.#z())
            }
            #M() {
                this.#j && (clearTimeout(this.#j),
                this.#j = void 0)
            }
            #I() {
                this.#q && (clearInterval(this.#q),
                this.#q = void 0)
            }
            createResult(e, t) {
                let r;
                let n = this.#_
                  , s = this.options
                  , o = this.#T
                  , a = this.#P
                  , c = this.#A
                  , h = e !== n ? e.state : this.#C
                  , {state: p} = e
                  , y = {
                    ...p
                }
                  , m = !1;
                if (t._optimisticResults) {
                    let r = this.hasListeners()
                      , i = !r && l(e, t)
                      , o = r && f(e, n, t, s);
                    (i || o) && (y = {
                        ...y,
                        ...(0,
                        u.z)(p.data, e.options)
                    }),
                    "isRestoring" === t._optimisticResults && (y.fetchStatus = "idle")
                }
                let {error: b, errorUpdatedAt: g, status: v} = y;
                if (t.select && void 0 !== y.data) {
                    if (o && y.data === a?.data && t.select === this.#F)
                        r = this.#x;
                    else
                        try {
                            this.#F = t.select,
                            r = t.select(y.data),
                            r = (0,
                            i.oE)(o?.data, r, t),
                            this.#x = r,
                            this.#E = null
                        } catch (e) {
                            this.#E = e
                        }
                } else
                    r = y.data;
                if (void 0 !== t.placeholderData && void 0 === r && "pending" === v) {
                    let e;
                    if (o?.isPlaceholderData && t.placeholderData === c?.placeholderData)
                        e = o.data;
                    else if (e = "function" == typeof t.placeholderData ? t.placeholderData(this.#D?.state.data, this.#D) : t.placeholderData,
                    t.select && void 0 !== e)
                        try {
                            e = t.select(e),
                            this.#E = null
                        } catch (e) {
                            this.#E = e
                        }
                    void 0 !== e && (v = "success",
                    r = (0,
                    i.oE)(o?.data, e, t),
                    m = !0)
                }
                this.#E && (b = this.#E,
                r = this.#x,
                g = Date.now(),
                v = "error");
                let w = "fetching" === y.fetchStatus
                  , O = "pending" === v
                  , S = "error" === v
                  , R = O && w
                  , E = void 0 !== r;
                return {
                    status: v,
                    fetchStatus: y.fetchStatus,
                    isPending: O,
                    isSuccess: "success" === v,
                    isError: S,
                    isInitialLoading: R,
                    isLoading: R,
                    data: r,
                    dataUpdatedAt: y.dataUpdatedAt,
                    error: b,
                    errorUpdatedAt: g,
                    failureCount: y.fetchFailureCount,
                    failureReason: y.fetchFailureReason,
                    errorUpdateCount: y.errorUpdateCount,
                    isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                    isFetchedAfterMount: y.dataUpdateCount > h.dataUpdateCount || y.errorUpdateCount > h.errorUpdateCount,
                    isFetching: w,
                    isRefetching: w && !O,
                    isLoadingError: S && !E,
                    isPaused: "paused" === y.fetchStatus,
                    isPlaceholderData: m,
                    isRefetchError: S && E,
                    isStale: d(e, t),
                    refetch: this.refetch
                }
            }
            updateResult(e) {
                let t = this.#T
                  , r = this.createResult(this.#_, this.options);
                if (this.#P = this.#_.state,
                this.#A = this.options,
                void 0 !== this.#P.data && (this.#D = this.#_),
                (0,
                i.VS)(r, t))
                    return;
                this.#T = r;
                let n = {};
                e?.listeners !== !1 && (()=>{
                    if (!t)
                        return !0;
                    let {notifyOnChangeProps: e} = this.options
                      , r = "function" == typeof e ? e() : e;
                    if ("all" === r || !r && !this.#U.size)
                        return !0;
                    let n = new Set(r ?? this.#U);
                    return this.options.throwOnError && n.add("error"),
                    Object.keys(this.#T).some(e=>this.#T[e] !== t[e] && n.has(e))
                }
                )() && (n.listeners = !0),
                this.#H({
                    ...n,
                    ...e
                })
            }
            #Q() {
                let e = this.#R.getQueryCache().build(this.#R, this.options);
                if (e === this.#_)
                    return;
                let t = this.#_;
                this.#_ = e,
                this.#C = e.state,
                this.hasListeners() && (t?.removeObserver(this),
                e.addObserver(this))
            }
            onQueryUpdate() {
                this.updateResult(),
                this.hasListeners() && this.#L()
            }
            #H(e) {
                s.V.batch(()=>{
                    e.listeners && this.listeners.forEach(e=>{
                        e(this.#T)
                    }
                    ),
                    this.#R.getQueryCache().notify({
                        query: this.#_,
                        type: "observerResultsUpdated"
                    })
                }
                )
            }
        }
        ;
        function l(e, t) {
            return !1 !== t.enabled && void 0 === e.state.data && !("error" === e.state.status && !1 === t.retryOnMount) || void 0 !== e.state.data && h(e, t, t.refetchOnMount)
        }
        function h(e, t, r) {
            if (!1 !== t.enabled) {
                let n = "function" == typeof r ? r(e) : r;
                return "always" === n || !1 !== n && d(e, t)
            }
            return !1
        }
        function f(e, t, r, n) {
            return (e !== t || !1 === n.enabled) && (!r.suspense || "error" !== e.state.status) && d(e, r)
        }
        function d(e, t) {
            return !1 !== t.enabled && e.isStaleByTime(t.staleTime)
        }
        var p = r(11055);
        r(91153);
        var y = p.createContext((n = !1,
        {
            clearReset: ()=>{
                n = !1
            }
            ,
            reset: ()=>{
                n = !0
            }
            ,
            isReset: ()=>n
        }))
          , m = ()=>p.useContext(y)
          , b = r(58352)
          , g = p.createContext(!1)
          , v = ()=>p.useContext(g);
        g.Provider;
        var w = r(48381)
          , O = (e,t)=>{
            (e.suspense || e.throwOnError) && !t.isReset() && (e.retryOnMount = !1)
        }
          , S = e=>{
            p.useEffect(()=>{
                e.clearReset()
            }
            , [e])
        }
          , R = e=>{
            let {result: t, errorResetBoundary: r, throwOnError: n, query: i} = e;
            return t.isError && !r.isReset() && !t.isFetching && i && (0,
            w.L)(n, [t.error, i])
        }
          , E = e=>{
            e.suspense && "number" != typeof e.staleTime && (e.staleTime = 1e3)
        }
          , _ = (e,t)=>e?.suspense && t.isPending
          , C = (e,t,r)=>t.fetchOptimistic(e).catch(()=>{
            r.clearReset()
        }
        );
        function T(e, t) {
            return function(e, t, r) {
                let n = (0,
                b.NL)(r)
                  , i = v()
                  , o = m()
                  , a = n.defaultQueryOptions(e);
                a._optimisticResults = i ? "isRestoring" : "optimistic",
                E(a),
                O(a, o),
                S(o);
                let[u] = p.useState(()=>new t(n,a))
                  , c = u.getOptimisticResult(a);
                if (p.useSyncExternalStore(p.useCallback(e=>{
                    let t = i ? ()=>void 0 : u.subscribe(s.V.batchCalls(e));
                    return u.updateResult(),
                    t
                }
                , [u, i]), ()=>u.getCurrentResult(), ()=>u.getCurrentResult()),
                p.useEffect(()=>{
                    u.setOptions(a, {
                        listeners: !1
                    })
                }
                , [a, u]),
                _(a, c))
                    throw C(a, u, o);
                if (R({
                    result: c,
                    errorResetBoundary: o,
                    throwOnError: a.throwOnError,
                    query: n.getQueryCache().get(a.queryHash)
                }))
                    throw c.error;
                return a.notifyOnChangeProps ? c : u.trackResult(c)
            }(e, c, t)
        }
    },
    48381: function(e, t, r) {
        "use strict";
        function n(e, t) {
            return "function" == typeof e ? e(...t) : !!e
        }
        function i() {}
        r.d(t, {
            L: function() {
                return n
            },
            Z: function() {
                return i
            }
        })
    },
    17441: function(e, t, r) {
        "use strict";
        let n, i, s, o;
        r.d(t, {
            Z: function() {
                return ti
            }
        });
        var a, u = {};
        function c(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        r.r(u),
        r.d(u, {
            hasBrowserEnv: function() {
                return eh
            },
            hasStandardBrowserEnv: function() {
                return ef
            },
            hasStandardBrowserWebWorkerEnv: function() {
                return ed
            },
            origin: function() {
                return ep
            }
        });
        let {toString: l} = Object.prototype
          , {getPrototypeOf: h} = Object
          , f = (n = Object.create(null),
        e=>{
            let t = l.call(e);
            return n[t] || (n[t] = t.slice(8, -1).toLowerCase())
        }
        )
          , d = e=>(e = e.toLowerCase(),
        t=>f(t) === e)
          , p = e=>t=>typeof t === e
          , {isArray: y} = Array
          , m = p("undefined")
          , b = d("ArrayBuffer")
          , g = p("string")
          , v = p("function")
          , w = p("number")
          , O = e=>null !== e && "object" == typeof e
          , S = e=>{
            if ("object" !== f(e))
                return !1;
            let t = h(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
        }
          , R = d("Date")
          , E = d("File")
          , _ = d("Blob")
          , C = d("FileList")
          , T = d("URLSearchParams")
          , [P,A,F,x] = ["ReadableStream", "Request", "Response", "Headers"].map(d);
        function D(e, t, {allOwnKeys: r=!1}={}) {
            let n, i;
            if (null != e) {
                if ("object" != typeof e && (e = [e]),
                y(e))
                    for (n = 0,
                    i = e.length; n < i; n++)
                        t.call(null, e[n], n, e);
                else {
                    let i;
                    let s = r ? Object.getOwnPropertyNames(e) : Object.keys(e)
                      , o = s.length;
                    for (n = 0; n < o; n++)
                        i = s[n],
                        t.call(null, e[i], i, e)
                }
            }
        }
        function j(e, t) {
            let r;
            t = t.toLowerCase();
            let n = Object.keys(e)
              , i = n.length;
            for (; i-- > 0; )
                if (t === (r = n[i]).toLowerCase())
                    return r;
            return null
        }
        let q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global
          , N = e=>!m(e) && e !== q
          , U = (i = "undefined" != typeof Uint8Array && h(Uint8Array),
        e=>i && e instanceof i)
          , k = d("HTMLFormElement")
          , L = (({hasOwnProperty: e})=>(t,r)=>e.call(t, r))(Object.prototype)
          , M = d("RegExp")
          , I = (e,t)=>{
            let r = Object.getOwnPropertyDescriptors(e)
              , n = {};
            D(r, (r,i)=>{
                let s;
                !1 !== (s = t(r, i, e)) && (n[i] = s || r)
            }
            ),
            Object.defineProperties(e, n)
        }
          , Q = "abcdefghijklmnopqrstuvwxyz"
          , B = "0123456789"
          , z = {
            DIGIT: B,
            ALPHA: Q,
            ALPHA_DIGIT: Q + Q.toUpperCase() + B
        }
          , K = d("AsyncFunction");
        var H = {
            isArray: y,
            isArrayBuffer: b,
            isBuffer: function(e) {
                return null !== e && !m(e) && null !== e.constructor && !m(e.constructor) && v(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            },
            isFormData: e=>{
                let t;
                return e && ("function" == typeof FormData && e instanceof FormData || v(e.append) && ("formdata" === (t = f(e)) || "object" === t && v(e.toString) && "[object FormData]" === e.toString()))
            }
            ,
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && b(e.buffer)
            },
            isString: g,
            isNumber: w,
            isBoolean: e=>!0 === e || !1 === e,
            isObject: O,
            isPlainObject: S,
            isReadableStream: P,
            isRequest: A,
            isResponse: F,
            isHeaders: x,
            isUndefined: m,
            isDate: R,
            isFile: E,
            isBlob: _,
            isRegExp: M,
            isFunction: v,
            isStream: e=>O(e) && v(e.pipe),
            isURLSearchParams: T,
            isTypedArray: U,
            isFileList: C,
            forEach: D,
            merge: function e() {
                let {caseless: t} = N(this) && this || {}
                  , r = {}
                  , n = (n,i)=>{
                    let s = t && j(r, i) || i;
                    S(r[s]) && S(n) ? r[s] = e(r[s], n) : S(n) ? r[s] = e({}, n) : y(n) ? r[s] = n.slice() : r[s] = n
                }
                ;
                for (let e = 0, t = arguments.length; e < t; e++)
                    arguments[e] && D(arguments[e], n);
                return r
            },
            extend: (e,t,r,{allOwnKeys: n}={})=>(D(t, (t,n)=>{
                r && v(t) ? e[n] = c(t, r) : e[n] = t
            }
            , {
                allOwnKeys: n
            }),
            e),
            trim: e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e=>(65279 === e.charCodeAt(0) && (e = e.slice(1)),
            e),
            inherits: (e,t,r,n)=>{
                e.prototype = Object.create(t.prototype, n),
                e.prototype.constructor = e,
                Object.defineProperty(e, "super", {
                    value: t.prototype
                }),
                r && Object.assign(e.prototype, r)
            }
            ,
            toFlatObject: (e,t,r,n)=>{
                let i, s, o;
                let a = {};
                if (t = t || {},
                null == e)
                    return t;
                do {
                    for (s = (i = Object.getOwnPropertyNames(e)).length; s-- > 0; )
                        o = i[s],
                        (!n || n(o, e, t)) && !a[o] && (t[o] = e[o],
                        a[o] = !0);
                    e = !1 !== r && h(e)
                } while (e && (!r || r(e, t)) && e !== Object.prototype);
                return t
            }
            ,
            kindOf: f,
            kindOfTest: d,
            endsWith: (e,t,r)=>{
                e = String(e),
                (void 0 === r || r > e.length) && (r = e.length),
                r -= t.length;
                let n = e.indexOf(t, r);
                return -1 !== n && n === r
            }
            ,
            toArray: e=>{
                if (!e)
                    return null;
                if (y(e))
                    return e;
                let t = e.length;
                if (!w(t))
                    return null;
                let r = Array(t);
                for (; t-- > 0; )
                    r[t] = e[t];
                return r
            }
            ,
            forEachEntry: (e,t)=>{
                let r;
                let n = (e && e[Symbol.iterator]).call(e);
                for (; (r = n.next()) && !r.done; ) {
                    let n = r.value;
                    t.call(e, n[0], n[1])
                }
            }
            ,
            matchAll: (e,t)=>{
                let r;
                let n = [];
                for (; null !== (r = e.exec(t)); )
                    n.push(r);
                return n
            }
            ,
            isHTMLForm: k,
            hasOwnProperty: L,
            hasOwnProp: L,
            reduceDescriptors: I,
            freezeMethods: e=>{
                I(e, (t,r)=>{
                    if (v(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
                        return !1;
                    if (v(e[r])) {
                        if (t.enumerable = !1,
                        "writable"in t) {
                            t.writable = !1;
                            return
                        }
                        t.set || (t.set = ()=>{
                            throw Error("Can not rewrite read-only method '" + r + "'")
                        }
                        )
                    }
                }
                )
            }
            ,
            toObjectSet: (e,t)=>{
                let r = {};
                return (e=>{
                    e.forEach(e=>{
                        r[e] = !0
                    }
                    )
                }
                )(y(e) ? e : String(e).split(t)),
                r
            }
            ,
            toCamelCase: e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
                return t.toUpperCase() + r
            }),
            noop: ()=>{}
            ,
            toFiniteNumber: (e,t)=>null != e && Number.isFinite(e = +e) ? e : t,
            findKey: j,
            global: q,
            isContextDefined: N,
            ALPHABET: z,
            generateString: (e=16,t=z.ALPHA_DIGIT)=>{
                let r = ""
                  , {length: n} = t;
                for (; e--; )
                    r += t[Math.random() * n | 0];
                return r
            }
            ,
            isSpecCompliantForm: function(e) {
                return !!(e && v(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
            },
            toJSONObject: e=>{
                let t = Array(10)
                  , r = (e,n)=>{
                    if (O(e)) {
                        if (t.indexOf(e) >= 0)
                            return;
                        if (!("toJSON"in e)) {
                            t[n] = e;
                            let i = y(e) ? [] : {};
                            return D(e, (e,t)=>{
                                let s = r(e, n + 1);
                                m(s) || (i[t] = s)
                            }
                            ),
                            t[n] = void 0,
                            i
                        }
                    }
                    return e
                }
                ;
                return r(e, 0)
            }
            ,
            isAsyncFn: K,
            isThenable: e=>e && (O(e) || v(e)) && v(e.then) && v(e.catch)
        };
        function V(e, t, r, n, i) {
            Error.call(this),
            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack,
            this.message = e,
            this.name = "AxiosError",
            t && (this.code = t),
            r && (this.config = r),
            n && (this.request = n),
            i && (this.response = i)
        }
        H.inherits(V, Error, {
            toJSON: function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: H.toJSONObject(this.config),
                    code: this.code,
                    status: this.response && this.response.status ? this.response.status : null
                }
            }
        });
        let W = V.prototype
          , J = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
            J[e] = {
                value: e
            }
        }
        ),
        Object.defineProperties(V, J),
        Object.defineProperty(W, "isAxiosError", {
            value: !0
        }),
        V.from = (e,t,r,n,i,s)=>{
            let o = Object.create(W);
            return H.toFlatObject(e, o, function(e) {
                return e !== Error.prototype
            }, e=>"isAxiosError" !== e),
            V.call(o, e.message, t, r, n, i),
            o.cause = e,
            o.name = e.name,
            s && Object.assign(o, s),
            o
        }
        ;
        var G = r(51199).Buffer;
        function Z(e) {
            return H.isPlainObject(e) || H.isArray(e)
        }
        function $(e) {
            return H.endsWith(e, "[]") ? e.slice(0, -2) : e
        }
        function X(e, t, r) {
            return e ? e.concat(t).map(function(e, t) {
                return e = $(e),
                !r && t ? "[" + e + "]" : e
            }).join(r ? "." : "") : t
        }
        let Y = H.toFlatObject(H, {}, null, function(e) {
            return /^is[A-Z]/.test(e)
        });
        var ee = function(e, t, r) {
            if (!H.isObject(e))
                throw TypeError("target must be an object");
            t = t || new FormData;
            let n = (r = H.toFlatObject(r, {
                metaTokens: !0,
                dots: !1,
                indexes: !1
            }, !1, function(e, t) {
                return !H.isUndefined(t[e])
            })).metaTokens
              , i = r.visitor || c
              , s = r.dots
              , o = r.indexes
              , a = (r.Blob || "undefined" != typeof Blob && Blob) && H.isSpecCompliantForm(t);
            if (!H.isFunction(i))
                throw TypeError("visitor must be a function");
            function u(e) {
                if (null === e)
                    return "";
                if (H.isDate(e))
                    return e.toISOString();
                if (!a && H.isBlob(e))
                    throw new V("Blob is not supported. Use a Buffer instead.");
                return H.isArrayBuffer(e) || H.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : G.from(e) : e
            }
            function c(e, r, i) {
                let a = e;
                if (e && !i && "object" == typeof e) {
                    if (H.endsWith(r, "{}"))
                        r = n ? r : r.slice(0, -2),
                        e = JSON.stringify(e);
                    else {
                        var c;
                        if (H.isArray(e) && (c = e,
                        H.isArray(c) && !c.some(Z)) || (H.isFileList(e) || H.endsWith(r, "[]")) && (a = H.toArray(e)))
                            return r = $(r),
                            a.forEach(function(e, n) {
                                H.isUndefined(e) || null === e || t.append(!0 === o ? X([r], n, s) : null === o ? r : r + "[]", u(e))
                            }),
                            !1
                    }
                }
                return !!Z(e) || (t.append(X(i, r, s), u(e)),
                !1)
            }
            let l = []
              , h = Object.assign(Y, {
                defaultVisitor: c,
                convertValue: u,
                isVisitable: Z
            });
            if (!H.isObject(e))
                throw TypeError("data must be an object");
            return !function e(r, n) {
                if (!H.isUndefined(r)) {
                    if (-1 !== l.indexOf(r))
                        throw Error("Circular reference detected in " + n.join("."));
                    l.push(r),
                    H.forEach(r, function(r, s) {
                        !0 === (!(H.isUndefined(r) || null === r) && i.call(t, r, H.isString(s) ? s.trim() : s, n, h)) && e(r, n ? n.concat(s) : [s])
                    }),
                    l.pop()
                }
            }(e),
            t
        };
        function et(e) {
            let t = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            };
            return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
                return t[e]
            })
        }
        function er(e, t) {
            this._pairs = [],
            e && ee(e, this, t)
        }
        let en = er.prototype;
        function ei(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        function es(e, t, r) {
            let n;
            if (!t)
                return e;
            let i = r && r.encode || ei
              , s = r && r.serialize;
            if (n = s ? s(t, r) : H.isURLSearchParams(t) ? t.toString() : new er(t,r).toString(i)) {
                let t = e.indexOf("#");
                -1 !== t && (e = e.slice(0, t)),
                e += (-1 === e.indexOf("?") ? "?" : "&") + n
            }
            return e
        }
        en.append = function(e, t) {
            this._pairs.push([e, t])
        }
        ,
        en.toString = function(e) {
            let t = e ? function(t) {
                return e.call(this, t, et)
            }
            : et;
            return this._pairs.map(function(e) {
                return t(e[0]) + "=" + t(e[1])
            }, "").join("&")
        }
        ;
        class eo {
            constructor() {
                this.handlers = []
            }
            use(e, t, r) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!r && r.synchronous,
                    runWhen: r ? r.runWhen : null
                }),
                this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                H.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }
        }
        var ea = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        }
          , eu = "undefined" != typeof URLSearchParams ? URLSearchParams : er
          , ec = "undefined" != typeof FormData ? FormData : null
          , el = "undefined" != typeof Blob ? Blob : null;
        let eh = "undefined" != typeof window && "undefined" != typeof document
          , ef = (s = "undefined" != typeof navigator && navigator.product,
        eh && 0 > ["ReactNative", "NativeScript", "NS"].indexOf(s))
          , ed = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts
          , ep = eh && window.location.href || "http://localhost";
        var ey = {
            ...u,
            isBrowser: !0,
            classes: {
                URLSearchParams: eu,
                FormData: ec,
                Blob: el
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        }
          , em = function(e) {
            if (H.isFormData(e) && H.isFunction(e.entries)) {
                let t = {};
                return H.forEachEntry(e, (e,r)=>{
                    !function e(t, r, n, i) {
                        let s = t[i++];
                        if ("__proto__" === s)
                            return !0;
                        let o = Number.isFinite(+s)
                          , a = i >= t.length;
                        return (s = !s && H.isArray(n) ? n.length : s,
                        a) ? H.hasOwnProp(n, s) ? n[s] = [n[s], r] : n[s] = r : (n[s] && H.isObject(n[s]) || (n[s] = []),
                        e(t, r, n[s], i) && H.isArray(n[s]) && (n[s] = function(e) {
                            let t, r;
                            let n = {}
                              , i = Object.keys(e)
                              , s = i.length;
                            for (t = 0; t < s; t++)
                                n[r = i[t]] = e[r];
                            return n
                        }(n[s]))),
                        !o
                    }(H.matchAll(/\w+|\[(\w*)]/g, e).map(e=>"[]" === e[0] ? "" : e[1] || e[0]), r, t, 0)
                }
                ),
                t
            }
            return null
        };
        let eb = {
            transitional: ea,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                let r;
                let n = t.getContentType() || ""
                  , i = n.indexOf("application/json") > -1
                  , s = H.isObject(e);
                if (s && H.isHTMLForm(e) && (e = new FormData(e)),
                H.isFormData(e))
                    return i ? JSON.stringify(em(e)) : e;
                if (H.isArrayBuffer(e) || H.isBuffer(e) || H.isStream(e) || H.isFile(e) || H.isBlob(e) || H.isReadableStream(e))
                    return e;
                if (H.isArrayBufferView(e))
                    return e.buffer;
                if (H.isURLSearchParams(e))
                    return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                    e.toString();
                if (s) {
                    if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                        var o, a;
                        return (o = e,
                        a = this.formSerializer,
                        ee(o, new ey.classes.URLSearchParams, Object.assign({
                            visitor: function(e, t, r, n) {
                                return ey.isNode && H.isBuffer(e) ? (this.append(t, e.toString("base64")),
                                !1) : n.defaultVisitor.apply(this, arguments)
                            }
                        }, a))).toString()
                    }
                    if ((r = H.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                        let t = this.env && this.env.FormData;
                        return ee(r ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                return s || i ? (t.setContentType("application/json", !1),
                function(e, t, r) {
                    if (H.isString(e))
                        try {
                            return (0,
                            JSON.parse)(e),
                            H.trim(e)
                        } catch (e) {
                            if ("SyntaxError" !== e.name)
                                throw e
                        }
                    return (0,
                    JSON.stringify)(e)
                }(e)) : e
            }
            ],
            transformResponse: [function(e) {
                let t = this.transitional || eb.transitional
                  , r = t && t.forcedJSONParsing
                  , n = "json" === this.responseType;
                if (H.isResponse(e) || H.isReadableStream(e))
                    return e;
                if (e && H.isString(e) && (r && !this.responseType || n)) {
                    let r = t && t.silentJSONParsing;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (!r && n) {
                            if ("SyntaxError" === e.name)
                                throw V.from(e, V.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e
                        }
                    }
                }
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: ey.classes.FormData,
                Blob: ey.classes.Blob
            },
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": void 0
                }
            }
        };
        H.forEach(["delete", "get", "head", "post", "put", "patch"], e=>{
            eb.headers[e] = {}
        }
        );
        let eg = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        var ev = e=>{
            let t, r, n;
            let i = {};
            return e && e.split("\n").forEach(function(e) {
                n = e.indexOf(":"),
                t = e.substring(0, n).trim().toLowerCase(),
                r = e.substring(n + 1).trim(),
                !t || i[t] && eg[t] || ("set-cookie" === t ? i[t] ? i[t].push(r) : i[t] = [r] : i[t] = i[t] ? i[t] + ", " + r : r)
            }),
            i
        }
        ;
        let ew = Symbol("internals");
        function eO(e) {
            return e && String(e).trim().toLowerCase()
        }
        function eS(e) {
            return !1 === e || null == e ? e : H.isArray(e) ? e.map(eS) : String(e)
        }
        let eR = e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
        function eE(e, t, r, n, i) {
            if (H.isFunction(n))
                return n.call(this, t, r);
            if (i && (t = r),
            H.isString(t)) {
                if (H.isString(n))
                    return -1 !== t.indexOf(n);
                if (H.isRegExp(n))
                    return n.test(t)
            }
        }
        class e_ {
            constructor(e) {
                e && this.set(e)
            }
            set(e, t, r) {
                let n = this;
                function i(e, t, r) {
                    let i = eO(t);
                    if (!i)
                        throw Error("header name must be a non-empty string");
                    let s = H.findKey(n, i);
                    s && void 0 !== n[s] && !0 !== r && (void 0 !== r || !1 === n[s]) || (n[s || t] = eS(e))
                }
                let s = (e,t)=>H.forEach(e, (e,r)=>i(e, r, t));
                if (H.isPlainObject(e) || e instanceof this.constructor)
                    s(e, t);
                else if (H.isString(e) && (e = e.trim()) && !eR(e))
                    s(ev(e), t);
                else if (H.isHeaders(e))
                    for (let[t,n] of e.entries())
                        i(n, t, r);
                else
                    null != e && i(t, e, r);
                return this
            }
            get(e, t) {
                if (e = eO(e)) {
                    let r = H.findKey(this, e);
                    if (r) {
                        let e = this[r];
                        if (!t)
                            return e;
                        if (!0 === t)
                            return function(e) {
                                let t;
                                let r = Object.create(null)
                                  , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                for (; t = n.exec(e); )
                                    r[t[1]] = t[2];
                                return r
                            }(e);
                        if (H.isFunction(t))
                            return t.call(this, e, r);
                        if (H.isRegExp(t))
                            return t.exec(e);
                        throw TypeError("parser must be boolean|regexp|function")
                    }
                }
            }
            has(e, t) {
                if (e = eO(e)) {
                    let r = H.findKey(this, e);
                    return !!(r && void 0 !== this[r] && (!t || eE(this, this[r], r, t)))
                }
                return !1
            }
            delete(e, t) {
                let r = this
                  , n = !1;
                function i(e) {
                    if (e = eO(e)) {
                        let i = H.findKey(r, e);
                        i && (!t || eE(r, r[i], i, t)) && (delete r[i],
                        n = !0)
                    }
                }
                return H.isArray(e) ? e.forEach(i) : i(e),
                n
            }
            clear(e) {
                let t = Object.keys(this)
                  , r = t.length
                  , n = !1;
                for (; r--; ) {
                    let i = t[r];
                    (!e || eE(this, this[i], i, e, !0)) && (delete this[i],
                    n = !0)
                }
                return n
            }
            normalize(e) {
                let t = this
                  , r = {};
                return H.forEach(this, (n,i)=>{
                    let s = H.findKey(r, i);
                    if (s) {
                        t[s] = eS(n),
                        delete t[i];
                        return
                    }
                    let o = e ? i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e,t,r)=>t.toUpperCase() + r) : String(i).trim();
                    o !== i && delete t[i],
                    t[o] = eS(n),
                    r[o] = !0
                }
                ),
                this
            }
            concat(...e) {
                return this.constructor.concat(this, ...e)
            }
            toJSON(e) {
                let t = Object.create(null);
                return H.forEach(this, (r,n)=>{
                    null != r && !1 !== r && (t[n] = e && H.isArray(r) ? r.join(", ") : r)
                }
                ),
                t
            }
            [Symbol.iterator]() {
                return Object.entries(this.toJSON())[Symbol.iterator]()
            }
            toString() {
                return Object.entries(this.toJSON()).map(([e,t])=>e + ": " + t).join("\n")
            }
            get[Symbol.toStringTag]() {
                return "AxiosHeaders"
            }
            static from(e) {
                return e instanceof this ? e : new this(e)
            }
            static concat(e, ...t) {
                let r = new this(e);
                return t.forEach(e=>r.set(e)),
                r
            }
            static accessor(e) {
                let t = (this[ew] = this[ew] = {
                    accessors: {}
                }).accessors
                  , r = this.prototype;
                function n(e) {
                    let n = eO(e);
                    t[n] || (!function(e, t) {
                        let r = H.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach(n=>{
                            Object.defineProperty(e, n + r, {
                                value: function(e, r, i) {
                                    return this[n].call(this, t, e, r, i)
                                },
                                configurable: !0
                            })
                        }
                        )
                    }(r, e),
                    t[n] = !0)
                }
                return H.isArray(e) ? e.forEach(n) : n(e),
                this
            }
        }
        function eC(e, t) {
            let r = this || eb
              , n = t || r
              , i = e_.from(n.headers)
              , s = n.data;
            return H.forEach(e, function(e) {
                s = e.call(r, s, i.normalize(), t ? t.status : void 0)
            }),
            i.normalize(),
            s
        }
        function eT(e) {
            return !!(e && e.__CANCEL__)
        }
        function eP(e, t, r) {
            V.call(this, null == e ? "canceled" : e, V.ERR_CANCELED, t, r),
            this.name = "CanceledError"
        }
        function eA(e, t, r) {
            let n = r.config.validateStatus;
            !r.status || !n || n(r.status) ? e(r) : t(new V("Request failed with status code " + r.status,[V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],r.config,r.request,r))
        }
        e_.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
        H.reduceDescriptors(e_.prototype, ({value: e},t)=>{
            let r = t[0].toUpperCase() + t.slice(1);
            return {
                get: ()=>e,
                set(e) {
                    this[r] = e
                }
            }
        }
        ),
        H.freezeMethods(e_),
        H.inherits(eP, V, {
            __CANCEL__: !0
        });
        var eF = function(e, t) {
            let r;
            let n = Array(e = e || 10)
              , i = Array(e)
              , s = 0
              , o = 0;
            return t = void 0 !== t ? t : 1e3,
            function(a) {
                let u = Date.now()
                  , c = i[o];
                r || (r = u),
                n[s] = a,
                i[s] = u;
                let l = o
                  , h = 0;
                for (; l !== s; )
                    h += n[l++],
                    l %= e;
                if ((s = (s + 1) % e) === o && (o = (o + 1) % e),
                u - r < t)
                    return;
                let f = c && u - c;
                return f ? Math.round(1e3 * h / f) : void 0
            }
        }
          , ex = function(e, t) {
            let r = 0
              , n = 1e3 / t
              , i = null;
            return function() {
                let t = Date.now();
                if (this === !0 || t - r > n)
                    return i && (clearTimeout(i),
                    i = null),
                    r = t,
                    e.apply(null, arguments);
                i || (i = setTimeout(()=>(i = null,
                r = Date.now(),
                e.apply(null, arguments)), n - (t - r)))
            }
        }
          , eD = (e,t,r=3)=>{
            let n = 0
              , i = eF(50, 250);
            return ex(r=>{
                let s = r.loaded
                  , o = r.lengthComputable ? r.total : void 0
                  , a = s - n
                  , u = i(a);
                n = s;
                let c = {
                    loaded: s,
                    total: o,
                    progress: o ? s / o : void 0,
                    bytes: a,
                    rate: u || void 0,
                    estimated: u && o && s <= o ? (o - s) / u : void 0,
                    event: r,
                    lengthComputable: null != o
                };
                c[t ? "download" : "upload"] = !0,
                e(c)
            }
            , r)
        }
          , ej = ey.hasStandardBrowserEnv ? function() {
            let e;
            let t = /(msie|trident)/i.test(navigator.userAgent)
              , r = document.createElement("a");
            function n(e) {
                let n = e;
                return t && (r.setAttribute("href", n),
                n = r.href),
                r.setAttribute("href", n),
                {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                }
            }
            return e = n(window.location.href),
            function(t) {
                let r = H.isString(t) ? n(t) : t;
                return r.protocol === e.protocol && r.host === e.host
            }
        }() : function() {
            return !0
        }
          , eq = ey.hasStandardBrowserEnv ? {
            write(e, t, r, n, i, s) {
                let o = [e + "=" + encodeURIComponent(t)];
                H.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()),
                H.isString(n) && o.push("path=" + n),
                H.isString(i) && o.push("domain=" + i),
                !0 === s && o.push("secure"),
                document.cookie = o.join("; ")
            },
            read(e) {
                let t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read: ()=>null,
            remove() {}
        };
        function eN(e, t) {
            return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e : t
        }
        let eU = e=>e instanceof e_ ? {
            ...e
        } : e;
        function ek(e, t) {
            t = t || {};
            let r = {};
            function n(e, t, r) {
                return H.isPlainObject(e) && H.isPlainObject(t) ? H.merge.call({
                    caseless: r
                }, e, t) : H.isPlainObject(t) ? H.merge({}, t) : H.isArray(t) ? t.slice() : t
            }
            function i(e, t, r) {
                return H.isUndefined(t) ? H.isUndefined(e) ? void 0 : n(void 0, e, r) : n(e, t, r)
            }
            function s(e, t) {
                if (!H.isUndefined(t))
                    return n(void 0, t)
            }
            function o(e, t) {
                return H.isUndefined(t) ? H.isUndefined(e) ? void 0 : n(void 0, e) : n(void 0, t)
            }
            function a(r, i, s) {
                return s in t ? n(r, i) : s in e ? n(void 0, r) : void 0
            }
            let u = {
                url: s,
                method: s,
                data: s,
                baseURL: o,
                transformRequest: o,
                transformResponse: o,
                paramsSerializer: o,
                timeout: o,
                timeoutMessage: o,
                withCredentials: o,
                withXSRFToken: o,
                adapter: o,
                responseType: o,
                xsrfCookieName: o,
                xsrfHeaderName: o,
                onUploadProgress: o,
                onDownloadProgress: o,
                decompress: o,
                maxContentLength: o,
                maxBodyLength: o,
                beforeRedirect: o,
                transport: o,
                httpAgent: o,
                httpsAgent: o,
                cancelToken: o,
                socketPath: o,
                responseEncoding: o,
                validateStatus: a,
                headers: (e,t)=>i(eU(e), eU(t), !0)
            };
            return H.forEach(Object.keys(Object.assign({}, e, t)), function(n) {
                let s = u[n] || i
                  , o = s(e[n], t[n], n);
                H.isUndefined(o) && s !== a || (r[n] = o)
            }),
            r
        }
        var eL = e=>{
            let t;
            let r = ek({}, e)
              , {data: n, withXSRFToken: i, xsrfHeaderName: s, xsrfCookieName: o, headers: a, auth: u} = r;
            if (r.headers = a = e_.from(a),
            r.url = es(eN(r.baseURL, r.url), e.params, e.paramsSerializer),
            u && a.set("Authorization", "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))),
            H.isFormData(n)) {
                if (ey.hasStandardBrowserEnv || ey.hasStandardBrowserWebWorkerEnv)
                    a.setContentType(void 0);
                else if (!1 !== (t = a.getContentType())) {
                    let[e,...r] = t ? t.split(";").map(e=>e.trim()).filter(Boolean) : [];
                    a.setContentType([e || "multipart/form-data", ...r].join("; "))
                }
            }
            if (ey.hasStandardBrowserEnv && (i && H.isFunction(i) && (i = i(r)),
            i || !1 !== i && ej(r.url))) {
                let e = s && o && eq.read(o);
                e && a.set(s, e)
            }
            return r
        }
          , eM = "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, r) {
                let n;
                let i = eL(e)
                  , s = i.data
                  , o = e_.from(i.headers).normalize()
                  , {responseType: a} = i;
                function u() {
                    i.cancelToken && i.cancelToken.unsubscribe(n),
                    i.signal && i.signal.removeEventListener("abort", n)
                }
                let c = new XMLHttpRequest;
                function l() {
                    if (!c)
                        return;
                    let n = e_.from("getAllResponseHeaders"in c && c.getAllResponseHeaders());
                    eA(function(e) {
                        t(e),
                        u()
                    }, function(e) {
                        r(e),
                        u()
                    }, {
                        data: a && "text" !== a && "json" !== a ? c.response : c.responseText,
                        status: c.status,
                        statusText: c.statusText,
                        headers: n,
                        config: e,
                        request: c
                    }),
                    c = null
                }
                c.open(i.method.toUpperCase(), i.url, !0),
                c.timeout = i.timeout,
                "onloadend"in c ? c.onloadend = l : c.onreadystatechange = function() {
                    c && 4 === c.readyState && (0 !== c.status || c.responseURL && 0 === c.responseURL.indexOf("file:")) && setTimeout(l)
                }
                ,
                c.onabort = function() {
                    c && (r(new V("Request aborted",V.ECONNABORTED,i,c)),
                    c = null)
                }
                ,
                c.onerror = function() {
                    r(new V("Network Error",V.ERR_NETWORK,i,c)),
                    c = null
                }
                ,
                c.ontimeout = function() {
                    let e = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded"
                      , t = i.transitional || ea;
                    i.timeoutErrorMessage && (e = i.timeoutErrorMessage),
                    r(new V(e,t.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,i,c)),
                    c = null
                }
                ,
                void 0 === s && o.setContentType(null),
                "setRequestHeader"in c && H.forEach(o.toJSON(), function(e, t) {
                    c.setRequestHeader(t, e)
                }),
                H.isUndefined(i.withCredentials) || (c.withCredentials = !!i.withCredentials),
                a && "json" !== a && (c.responseType = i.responseType),
                "function" == typeof i.onDownloadProgress && c.addEventListener("progress", eD(i.onDownloadProgress, !0)),
                "function" == typeof i.onUploadProgress && c.upload && c.upload.addEventListener("progress", eD(i.onUploadProgress)),
                (i.cancelToken || i.signal) && (n = t=>{
                    c && (r(!t || t.type ? new eP(null,e,c) : t),
                    c.abort(),
                    c = null)
                }
                ,
                i.cancelToken && i.cancelToken.subscribe(n),
                i.signal && (i.signal.aborted ? n() : i.signal.addEventListener("abort", n)));
                let h = function(e) {
                    let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }(i.url);
                if (h && -1 === ey.protocols.indexOf(h)) {
                    r(new V("Unsupported protocol " + h + ":",V.ERR_BAD_REQUEST,e));
                    return
                }
                c.send(s || null)
            }
            )
        }
          , eI = (e,t)=>{
            let r, n = new AbortController, i = function(e) {
                if (!r) {
                    r = !0,
                    o();
                    let t = e instanceof Error ? e : this.reason;
                    n.abort(t instanceof V ? t : new eP(t instanceof Error ? t.message : t))
                }
            }, s = t && setTimeout(()=>{
                i(new V(`timeout ${t} of ms exceeded`,V.ETIMEDOUT))
            }
            , t), o = ()=>{
                e && (s && clearTimeout(s),
                s = null,
                e.forEach(e=>{
                    e && (e.removeEventListener ? e.removeEventListener("abort", i) : e.unsubscribe(i))
                }
                ),
                e = null)
            }
            ;
            e.forEach(e=>e && e.addEventListener && e.addEventListener("abort", i));
            let {signal: a} = n;
            return a.unsubscribe = o,
            [a, ()=>{
                s && clearTimeout(s),
                s = null
            }
            ]
        }
        ;
        let eQ = function*(e, t) {
            let r, n = e.byteLength;
            if (!t || n < t) {
                yield e;
                return
            }
            let i = 0;
            for (; i < n; )
                r = i + t,
                yield e.slice(i, r),
                i = r
        }
          , eB = async function*(e, t, r) {
            for await(let n of e)
                yield*eQ(ArrayBuffer.isView(n) ? n : await r(String(n)), t)
        }
          , ez = (e,t,r,n,i)=>{
            let s = eB(e, t, i)
              , o = 0;
            return new ReadableStream({
                type: "bytes",
                async pull(e) {
                    let {done: t, value: i} = await s.next();
                    if (t) {
                        e.close(),
                        n();
                        return
                    }
                    let a = i.byteLength;
                    r && r(o += a),
                    e.enqueue(new Uint8Array(i))
                },
                cancel: e=>(n(e),
                s.return())
            },{
                highWaterMark: 2
            })
        }
          , eK = (e,t)=>{
            let r = null != e;
            return n=>setTimeout(()=>t({
                lengthComputable: r,
                total: e,
                loaded: n
            }))
        }
          , eH = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response
          , eV = eH && "function" == typeof ReadableStream
          , eW = eH && ("function" == typeof TextEncoder ? (o = new TextEncoder,
        e=>o.encode(e)) : async e=>new Uint8Array(await new Response(e).arrayBuffer()))
          , eJ = eV && (()=>{
            let e = !1
              , t = new Request(ey.origin,{
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return e = !0,
                    "half"
                }
            }).headers.has("Content-Type");
            return e && !t
        }
        )()
          , eG = eV && !!(()=>{
            try {
                return H.isReadableStream(new Response("").body)
            } catch (e) {}
        }
        )()
          , eZ = {
            stream: eG && (e=>e.body)
        };
        eH && (a = new Response,
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e=>{
            eZ[e] || (eZ[e] = H.isFunction(a[e]) ? t=>t[e]() : (t,r)=>{
                throw new V(`Response type '${e}' is not supported`,V.ERR_NOT_SUPPORT,r)
            }
            )
        }
        ));
        let e$ = async e=>null == e ? 0 : H.isBlob(e) ? e.size : H.isSpecCompliantForm(e) ? (await new Request(e).arrayBuffer()).byteLength : H.isArrayBufferView(e) ? e.byteLength : (H.isURLSearchParams(e) && (e += ""),
        H.isString(e)) ? (await eW(e)).byteLength : void 0
          , eX = async(e,t)=>{
            let r = H.toFiniteNumber(e.getContentLength());
            return null == r ? e$(t) : r
        }
          , eY = {
            http: null,
            xhr: eM,
            fetch: eH && (async e=>{
                let t, r, n, {url: i, method: s, data: o, signal: a, cancelToken: u, timeout: c, onDownloadProgress: l, onUploadProgress: h, responseType: f, headers: d, withCredentials: p="same-origin", fetchOptions: y} = eL(e);
                f = f ? (f + "").toLowerCase() : "text";
                let[m,b] = a || u || c ? eI([a, u], c) : []
                  , g = ()=>{
                    t || setTimeout(()=>{
                        m && m.unsubscribe()
                    }
                    ),
                    t = !0
                }
                ;
                try {
                    if (h && eJ && "get" !== s && "head" !== s && 0 !== (n = await eX(d, o))) {
                        let e, t = new Request(i,{
                            method: "POST",
                            body: o,
                            duplex: "half"
                        });
                        H.isFormData(o) && (e = t.headers.get("content-type")) && d.setContentType(e),
                        t.body && (o = ez(t.body, 65536, eK(n, eD(h)), null, eW))
                    }
                    H.isString(p) || (p = p ? "cors" : "omit"),
                    r = new Request(i,{
                        ...y,
                        signal: m,
                        method: s.toUpperCase(),
                        headers: d.normalize().toJSON(),
                        body: o,
                        duplex: "half",
                        withCredentials: p
                    });
                    let t = await fetch(r)
                      , a = eG && ("stream" === f || "response" === f);
                    if (eG && (l || a)) {
                        let e = {};
                        ["status", "statusText", "headers"].forEach(r=>{
                            e[r] = t[r]
                        }
                        );
                        let r = H.toFiniteNumber(t.headers.get("content-length"));
                        t = new Response(ez(t.body, 65536, l && eK(r, eD(l, !0)), a && g, eW),e)
                    }
                    f = f || "text";
                    let u = await eZ[H.findKey(eZ, f) || "text"](t, e);
                    return a || g(),
                    b && b(),
                    await new Promise((n,i)=>{
                        eA(n, i, {
                            data: u,
                            headers: e_.from(t.headers),
                            status: t.status,
                            statusText: t.statusText,
                            config: e,
                            request: r
                        })
                    }
                    )
                } catch (t) {
                    if (g(),
                    t && "TypeError" === t.name && /fetch/i.test(t.message))
                        throw Object.assign(new V("Network Error",V.ERR_NETWORK,e,r), {
                            cause: t.cause || t
                        });
                    throw V.from(t, t && t.code, e, r)
                }
            }
            )
        };
        H.forEach(eY, (e,t)=>{
            if (e) {
                try {
                    Object.defineProperty(e, "name", {
                        value: t
                    })
                } catch (e) {}
                Object.defineProperty(e, "adapterName", {
                    value: t
                })
            }
        }
        );
        let e0 = e=>`- ${e}`
          , e1 = e=>H.isFunction(e) || null === e || !1 === e;
        var e5 = e=>{
            let t, r;
            let {length: n} = e = H.isArray(e) ? e : [e]
              , i = {};
            for (let s = 0; s < n; s++) {
                let n;
                if (r = t = e[s],
                !e1(t) && void 0 === (r = eY[(n = String(t)).toLowerCase()]))
                    throw new V(`Unknown adapter '${n}'`);
                if (r)
                    break;
                i[n || "#" + s] = r
            }
            if (!r) {
                let e = Object.entries(i).map(([e,t])=>`adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
                throw new V("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(e0).join("\n") : " " + e0(e[0]) : "as no adapter specified"),"ERR_NOT_SUPPORT")
            }
            return r
        }
        ;
        function e2(e) {
            if (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
                throw new eP(null,e)
        }
        function e7(e) {
            return e2(e),
            e.headers = e_.from(e.headers),
            e.data = eC.call(e, e.transformRequest),
            -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1),
            e5(e.adapter || eb.adapter)(e).then(function(t) {
                return e2(e),
                t.data = eC.call(e, e.transformResponse, t),
                t.headers = e_.from(t.headers),
                t
            }, function(t) {
                return !eT(t) && (e2(e),
                t && t.response && (t.response.data = eC.call(e, e.transformResponse, t.response),
                t.response.headers = e_.from(t.response.headers))),
                Promise.reject(t)
            })
        }
        let e3 = "1.7.2"
          , e4 = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
            e4[e] = function(r) {
                return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
            }
        }
        );
        let e8 = {};
        e4.transitional = function(e, t, r) {
            function n(e, t) {
                return "[Axios v" + e3 + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "")
            }
            return (r,i,s)=>{
                if (!1 === e)
                    throw new V(n(i, " has been removed" + (t ? " in " + t : "")),V.ERR_DEPRECATED);
                return t && !e8[i] && (e8[i] = !0,
                console.warn(n(i, " has been deprecated since v" + t + " and will be removed in the near future"))),
                !e || e(r, i, s)
            }
        }
        ;
        var e6 = {
            assertOptions: function(e, t, r) {
                if ("object" != typeof e)
                    throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);
                let n = Object.keys(e)
                  , i = n.length;
                for (; i-- > 0; ) {
                    let s = n[i]
                      , o = t[s];
                    if (o) {
                        let t = e[s]
                          , r = void 0 === t || o(t, s, e);
                        if (!0 !== r)
                            throw new V("option " + s + " must be " + r,V.ERR_BAD_OPTION_VALUE);
                        continue
                    }
                    if (!0 !== r)
                        throw new V("Unknown option " + s,V.ERR_BAD_OPTION)
                }
            },
            validators: e4
        };
        let e9 = e6.validators;
        class te {
            constructor(e) {
                this.defaults = e,
                this.interceptors = {
                    request: new eo,
                    response: new eo
                }
            }
            async request(e, t) {
                try {
                    return await this._request(e, t)
                } catch (e) {
                    if (e instanceof Error) {
                        let t;
                        Error.captureStackTrace ? Error.captureStackTrace(t = {}) : t = Error();
                        let r = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                        try {
                            e.stack ? r && !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + r) : e.stack = r
                        } catch (e) {}
                    }
                    throw e
                }
            }
            _request(e, t) {
                let r, n;
                "string" == typeof e ? (t = t || {}).url = e : t = e || {};
                let {transitional: i, paramsSerializer: s, headers: o} = t = ek(this.defaults, t);
                void 0 !== i && e6.assertOptions(i, {
                    silentJSONParsing: e9.transitional(e9.boolean),
                    forcedJSONParsing: e9.transitional(e9.boolean),
                    clarifyTimeoutError: e9.transitional(e9.boolean)
                }, !1),
                null != s && (H.isFunction(s) ? t.paramsSerializer = {
                    serialize: s
                } : e6.assertOptions(s, {
                    encode: e9.function,
                    serialize: e9.function
                }, !0)),
                t.method = (t.method || this.defaults.method || "get").toLowerCase();
                let a = o && H.merge(o.common, o[t.method]);
                o && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e=>{
                    delete o[e]
                }
                ),
                t.headers = e_.concat(a, o);
                let u = []
                  , c = !0;
                this.interceptors.request.forEach(function(e) {
                    ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) && (c = c && e.synchronous,
                    u.unshift(e.fulfilled, e.rejected))
                });
                let l = [];
                this.interceptors.response.forEach(function(e) {
                    l.push(e.fulfilled, e.rejected)
                });
                let h = 0;
                if (!c) {
                    let e = [e7.bind(this), void 0];
                    for (e.unshift.apply(e, u),
                    e.push.apply(e, l),
                    n = e.length,
                    r = Promise.resolve(t); h < n; )
                        r = r.then(e[h++], e[h++]);
                    return r
                }
                n = u.length;
                let f = t;
                for (h = 0; h < n; ) {
                    let e = u[h++]
                      , t = u[h++];
                    try {
                        f = e(f)
                    } catch (e) {
                        t.call(this, e);
                        break
                    }
                }
                try {
                    r = e7.call(this, f)
                } catch (e) {
                    return Promise.reject(e)
                }
                for (h = 0,
                n = l.length; h < n; )
                    r = r.then(l[h++], l[h++]);
                return r
            }
            getUri(e) {
                return es(eN((e = ek(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
            }
        }
        H.forEach(["delete", "get", "head", "options"], function(e) {
            te.prototype[e] = function(t, r) {
                return this.request(ek(r || {}, {
                    method: e,
                    url: t,
                    data: (r || {}).data
                }))
            }
        }),
        H.forEach(["post", "put", "patch"], function(e) {
            function t(t) {
                return function(r, n, i) {
                    return this.request(ek(i || {}, {
                        method: e,
                        headers: t ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url: r,
                        data: n
                    }))
                }
            }
            te.prototype[e] = t(),
            te.prototype[e + "Form"] = t(!0)
        });
        class tt {
            constructor(e) {
                let t;
                if ("function" != typeof e)
                    throw TypeError("executor must be a function.");
                this.promise = new Promise(function(e) {
                    t = e
                }
                );
                let r = this;
                this.promise.then(e=>{
                    if (!r._listeners)
                        return;
                    let t = r._listeners.length;
                    for (; t-- > 0; )
                        r._listeners[t](e);
                    r._listeners = null
                }
                ),
                this.promise.then = e=>{
                    let t;
                    let n = new Promise(e=>{
                        r.subscribe(e),
                        t = e
                    }
                    ).then(e);
                    return n.cancel = function() {
                        r.unsubscribe(t)
                    }
                    ,
                    n
                }
                ,
                e(function(e, n, i) {
                    r.reason || (r.reason = new eP(e,n,i),
                    t(r.reason))
                })
            }
            throwIfRequested() {
                if (this.reason)
                    throw this.reason
            }
            subscribe(e) {
                if (this.reason) {
                    e(this.reason);
                    return
                }
                this._listeners ? this._listeners.push(e) : this._listeners = [e]
            }
            unsubscribe(e) {
                if (!this._listeners)
                    return;
                let t = this._listeners.indexOf(e);
                -1 !== t && this._listeners.splice(t, 1)
            }
            static source() {
                let e;
                return {
                    token: new tt(function(t) {
                        e = t
                    }
                    ),
                    cancel: e
                }
            }
        }
        let tr = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511
        };
        Object.entries(tr).forEach(([e,t])=>{
            tr[t] = e
        }
        );
        let tn = function e(t) {
            let r = new te(t)
              , n = c(te.prototype.request, r);
            return H.extend(n, te.prototype, r, {
                allOwnKeys: !0
            }),
            H.extend(n, r, null, {
                allOwnKeys: !0
            }),
            n.create = function(r) {
                return e(ek(t, r))
            }
            ,
            n
        }(eb);
        tn.Axios = te,
        tn.CanceledError = eP,
        tn.CancelToken = tt,
        tn.isCancel = eT,
        tn.VERSION = e3,
        tn.toFormData = ee,
        tn.AxiosError = V,
        tn.Cancel = tn.CanceledError,
        tn.all = function(e) {
            return Promise.all(e)
        }
        ,
        tn.spread = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
        ,
        tn.isAxiosError = function(e) {
            return H.isObject(e) && !0 === e.isAxiosError
        }
        ,
        tn.mergeConfig = ek,
        tn.AxiosHeaders = e_,
        tn.formToJSON = e=>em(H.isHTMLForm(e) ? new FormData(e) : e),
        tn.getAdapter = e5,
        tn.HttpStatusCode = tr,
        tn.default = tn;
        var ti = tn
    },
    7517: function(e, t, r) {
        "use strict";
        function n() {
            for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
                (e = arguments[r]) && (t = function e(t) {
                    var r, n, i = "";
                    if ("string" == typeof t || "number" == typeof t)
                        i += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var s = t.length;
                            for (r = 0; r < s; r++)
                                t[r] && (n = e(t[r])) && (i && (i += " "),
                                i += n)
                        } else
                            for (n in t)
                                t[n] && (i && (i += " "),
                                i += n)
                    }
                    return i
                }(e)) && (n && (n += " "),
                n += t);
            return n
        }
        r.d(t, {
            W: function() {
                return n
            }
        }),
        t.Z = n
    },
    80779: function(e, t, r) {
        "use strict";
        r.d(t, {
            w: function() {
                return g
            }
        });
        var n = r(19381)
          , i = r(9528)
          , s = r(55517)
          , o = r(25201)
          , a = r(37514)
          , u = r(19653)
          , c = r(33186)
          , l = r(91160)
          , h = r(79484)
          , f = r(41731);
        function d(e) {
            try {
                if (JSON.parse(e).encseed)
                    return !0
            } catch (e) {}
            return !1
        }
        function p(e, t) {
            let r = JSON.parse(e)
              , n = (0,
            f.Ij)(t)
              , s = (0,
            u.K)((0,
            f.ZA)(r, "ethaddr:string!"))
              , o = (0,
            f.p3)((0,
            f.ZA)(r, "encseed:string!"));
            (0,
            i.en)(o && o.length % 16 == 0, "invalid encseed", "json", e);
            let d = (0,
            h.Pw)((0,
            c.n)(n, n, 2e3, 32, "sha256")).slice(0, 16)
              , p = o.slice(0, 16)
              , y = o.slice(16)
              , m = new a.nq(d,p)
              , b = (0,
            a.lI)((0,
            h.Pw)(m.decrypt(y)))
              , g = "";
            for (let e = 0; e < b.length; e++)
                g += String.fromCharCode(b[e]);
            return {
                address: s,
                privateKey: (0,
                l.id)(g)
            }
        }
        var y = r(10900)
          , m = r(67653);
        function b(e) {
            return new Promise(t=>{
                setTimeout(()=>{
                    t()
                }
                , e)
            }
            )
        }
        class g extends s.c {
            constructor(e, t) {
                "string" != typeof e || e.startsWith("0x") || (e = "0x" + e),
                super("string" == typeof e ? new n.E(e) : e, t)
            }
            connect(e) {
                return new g(this.signingKey,e)
            }
            async encrypt(e, t) {
                let r = {
                    address: this.address,
                    privateKey: this.privateKey
                };
                return await (0,
                y.BZ)(r, e, {
                    progressCallback: t
                })
            }
            encryptSync(e) {
                let t = {
                    address: this.address,
                    privateKey: this.privateKey
                };
                return (0,
                y.B7)(t, e)
            }
            static #V(e) {
                if ((0,
                i.en)(e, "invalid JSON wallet", "json", "[ REDACTED ]"),
                "mnemonic"in e && e.mnemonic && "en" === e.mnemonic.locale) {
                    let t = m.t.fromEntropy(e.mnemonic.entropy)
                      , r = o.gk.fromMnemonic(t, e.mnemonic.path);
                    if (r.address === e.address && r.privateKey === e.privateKey)
                        return r;
                    console.log("WARNING: JSON mismatch address/privateKey != mnemonic; fallback onto private key")
                }
                let t = new g(e.privateKey);
                return (0,
                i.en)(t.address === e.address, "address/privateKey mismatch", "json", "[ REDACTED ]"),
                t
            }
            static async fromEncryptedJson(e, t, r) {
                let n = null;
                return (0,
                y.D_)(e) ? n = await (0,
                y.Y0)(e, t, r) : d(e) && (r && (r(0),
                await b(0)),
                n = p(e, t),
                r && (r(1),
                await b(0))),
                g.#V(n)
            }
            static fromEncryptedJsonSync(e, t) {
                let r = null;
                return (0,
                y.D_)(e) ? r = (0,
                y.zy)(e, t) : d(e) ? r = p(e, t) : (0,
                i.en)(!1, "invalid JSON wallet", "json", "[ REDACTED ]"),
                g.#V(r)
            }
            static createRandom(e) {
                let t = o.gk.createRandom();
                return e ? t.connect(e) : t
            }
            static fromPhrase(e, t) {
                let r = o.gk.fromPhrase(e);
                return t ? r.connect(t) : r
            }
        }
    },
    79967: function(e, t, r) {
        "use strict";
        r.d(t, {
            Uy: function() {
                return z
            }
        });
        var n, i = Symbol.for("immer-nothing"), s = Symbol.for("immer-draftable"), o = Symbol.for("immer-state");
        function a(e, ...t) {
            throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
        }
        var u = Object.getPrototypeOf;
        function c(e) {
            return !!e && !!e[o]
        }
        function l(e) {
            return !!e && (f(e) || Array.isArray(e) || !!e[s] || !!e.constructor?.[s] || b(e) || g(e))
        }
        var h = Object.prototype.constructor.toString();
        function f(e) {
            if (!e || "object" != typeof e)
                return !1;
            let t = u(e);
            if (null === t)
                return !0;
            let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return r === Object || "function" == typeof r && Function.toString.call(r) === h
        }
        function d(e, t) {
            0 === p(e) ? Reflect.ownKeys(e).forEach(r=>{
                t(r, e[r], e)
            }
            ) : e.forEach((r,n)=>t(n, r, e))
        }
        function p(e) {
            let t = e[o];
            return t ? t.type_ : Array.isArray(e) ? 1 : b(e) ? 2 : g(e) ? 3 : 0
        }
        function y(e, t) {
            return 2 === p(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
        }
        function m(e, t, r) {
            let n = p(e);
            2 === n ? e.set(t, r) : 3 === n ? e.add(r) : e[t] = r
        }
        function b(e) {
            return e instanceof Map
        }
        function g(e) {
            return e instanceof Set
        }
        function v(e) {
            return e.copy_ || e.base_
        }
        function w(e, t) {
            if (b(e))
                return new Map(e);
            if (g(e))
                return new Set(e);
            if (Array.isArray(e))
                return Array.prototype.slice.call(e);
            let r = f(e);
            if (!0 !== t && ("class_only" !== t || r)) {
                let t = u(e);
                return null !== t && r ? {
                    ...e
                } : Object.assign(Object.create(t), e)
            }
            {
                let t = Object.getOwnPropertyDescriptors(e);
                delete t[o];
                let r = Reflect.ownKeys(t);
                for (let n = 0; n < r.length; n++) {
                    let i = r[n]
                      , s = t[i];
                    !1 === s.writable && (s.writable = !0,
                    s.configurable = !0),
                    (s.get || s.set) && (t[i] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: s.enumerable,
                        value: e[i]
                    })
                }
                return Object.create(u(e), t)
            }
        }
        function O(e, t=!1) {
            return R(e) || c(e) || !l(e) || (p(e) > 1 && (e.set = e.add = e.clear = e.delete = S),
            Object.freeze(e),
            t && Object.entries(e).forEach(([e,t])=>O(t, !0))),
            e
        }
        function S() {
            a(2)
        }
        function R(e) {
            return Object.isFrozen(e)
        }
        var E = {};
        function _(e) {
            let t = E[e];
            return t || a(0, e),
            t
        }
        function C(e, t) {
            t && (_("Patches"),
            e.patches_ = [],
            e.inversePatches_ = [],
            e.patchListener_ = t)
        }
        function T(e) {
            P(e),
            e.drafts_.forEach(F),
            e.drafts_ = null
        }
        function P(e) {
            e === n && (n = e.parent_)
        }
        function A(e) {
            return n = {
                drafts_: [],
                parent_: n,
                immer_: e,
                canAutoFreeze_: !0,
                unfinalizedDrafts_: 0
            }
        }
        function F(e) {
            let t = e[o];
            0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
        }
        function x(e, t) {
            t.unfinalizedDrafts_ = t.drafts_.length;
            let r = t.drafts_[0];
            return void 0 !== e && e !== r ? (r[o].modified_ && (T(t),
            a(4)),
            l(e) && (e = D(t, e),
            t.parent_ || q(t, e)),
            t.patches_ && _("Patches").generateReplacementPatches_(r[o].base_, e, t.patches_, t.inversePatches_)) : e = D(t, r, []),
            T(t),
            t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
            e !== i ? e : void 0
        }
        function D(e, t, r) {
            if (R(t))
                return t;
            let n = t[o];
            if (!n)
                return d(t, (i,s)=>j(e, n, t, i, s, r)),
                t;
            if (n.scope_ !== e)
                return t;
            if (!n.modified_)
                return q(e, n.base_, !0),
                n.base_;
            if (!n.finalized_) {
                n.finalized_ = !0,
                n.scope_.unfinalizedDrafts_--;
                let t = n.copy_
                  , i = t
                  , s = !1;
                3 === n.type_ && (i = new Set(t),
                t.clear(),
                s = !0),
                d(i, (i,o)=>j(e, n, t, i, o, r, s)),
                q(e, t, !1),
                r && e.patches_ && _("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_)
            }
            return n.copy_
        }
        function j(e, t, r, n, i, s, o) {
            if (c(i)) {
                let o = D(e, i, s && t && 3 !== t.type_ && !y(t.assigned_, n) ? s.concat(n) : void 0);
                if (m(r, n, o),
                !c(o))
                    return;
                e.canAutoFreeze_ = !1
            } else
                o && r.add(i);
            if (l(i) && !R(i)) {
                if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
                    return;
                D(e, i),
                (!t || !t.scope_.parent_) && "symbol" != typeof n && Object.prototype.propertyIsEnumerable.call(r, n) && q(e, i)
            }
        }
        function q(e, t, r=!1) {
            !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && O(t, r)
        }
        var N = {
            get(e, t) {
                if (t === o)
                    return e;
                let r = v(e);
                if (!y(r, t))
                    return function(e, t, r) {
                        let n = L(t, r);
                        return n ? "value"in n ? n.value : n.get?.call(e.draft_) : void 0
                    }(e, r, t);
                let n = r[t];
                return e.finalized_ || !l(n) ? n : n === k(e.base_, t) ? (I(e),
                e.copy_[t] = Q(n, e)) : n
            },
            has: (e,t)=>t in v(e),
            ownKeys: e=>Reflect.ownKeys(v(e)),
            set(e, t, r) {
                let n = L(v(e), t);
                if (n?.set)
                    return n.set.call(e.draft_, r),
                    !0;
                if (!e.modified_) {
                    let n = k(v(e), t)
                      , i = n?.[o];
                    if (i && i.base_ === r)
                        return e.copy_[t] = r,
                        e.assigned_[t] = !1,
                        !0;
                    if ((r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) && (void 0 !== r || y(e.base_, t)))
                        return !0;
                    I(e),
                    M(e)
                }
                return !!(e.copy_[t] === r && (void 0 !== r || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = r,
                e.assigned_[t] = !0,
                !0)
            },
            deleteProperty: (e,t)=>(void 0 !== k(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1,
            I(e),
            M(e)) : delete e.assigned_[t],
            e.copy_ && delete e.copy_[t],
            !0),
            getOwnPropertyDescriptor(e, t) {
                let r = v(e)
                  , n = Reflect.getOwnPropertyDescriptor(r, t);
                return n ? {
                    writable: !0,
                    configurable: 1 !== e.type_ || "length" !== t,
                    enumerable: n.enumerable,
                    value: r[t]
                } : n
            },
            defineProperty() {
                a(11)
            },
            getPrototypeOf: e=>u(e.base_),
            setPrototypeOf() {
                a(12)
            }
        }
          , U = {};
        function k(e, t) {
            let r = e[o];
            return (r ? v(r) : e)[t]
        }
        function L(e, t) {
            if (!(t in e))
                return;
            let r = u(e);
            for (; r; ) {
                let e = Object.getOwnPropertyDescriptor(r, t);
                if (e)
                    return e;
                r = u(r)
            }
        }
        function M(e) {
            !e.modified_ && (e.modified_ = !0,
            e.parent_ && M(e.parent_))
        }
        function I(e) {
            e.copy_ || (e.copy_ = w(e.base_, e.scope_.immer_.useStrictShallowCopy_))
        }
        function Q(e, t) {
            let r = b(e) ? _("MapSet").proxyMap_(e, t) : g(e) ? _("MapSet").proxySet_(e, t) : function(e, t) {
                let r = Array.isArray(e)
                  , i = {
                    type_: r ? 1 : 0,
                    scope_: t ? t.scope_ : n,
                    modified_: !1,
                    finalized_: !1,
                    assigned_: {},
                    parent_: t,
                    base_: e,
                    draft_: null,
                    copy_: null,
                    revoke_: null,
                    isManual_: !1
                }
                  , s = i
                  , o = N;
                r && (s = [i],
                o = U);
                let {revoke: a, proxy: u} = Proxy.revocable(s, o);
                return i.draft_ = u,
                i.revoke_ = a,
                u
            }(e, t);
            return (t ? t.scope_ : n).drafts_.push(r),
            r
        }
        d(N, (e,t)=>{
            U[e] = function() {
                return arguments[0] = arguments[0][0],
                t.apply(this, arguments)
            }
        }
        ),
        U.deleteProperty = function(e, t) {
            return U.set.call(this, e, t, void 0)
        }
        ,
        U.set = function(e, t, r) {
            return N.set.call(this, e[0], t, r, e[0])
        }
        ;
        var B = new class {
            constructor(e) {
                this.autoFreeze_ = !0,
                this.useStrictShallowCopy_ = !1,
                this.produce = (e,t,r)=>{
                    let n;
                    if ("function" == typeof e && "function" != typeof t) {
                        let r = t;
                        t = e;
                        let n = this;
                        return function(e=r, ...i) {
                            return n.produce(e, e=>t.call(this, e, ...i))
                        }
                    }
                    if ("function" != typeof t && a(6),
                    void 0 !== r && "function" != typeof r && a(7),
                    l(e)) {
                        let i = A(this)
                          , s = Q(e, void 0)
                          , o = !0;
                        try {
                            n = t(s),
                            o = !1
                        } finally {
                            o ? T(i) : P(i)
                        }
                        return C(i, r),
                        x(n, i)
                    }
                    if (e && "object" == typeof e)
                        a(1, e);
                    else {
                        if (void 0 === (n = t(e)) && (n = e),
                        n === i && (n = void 0),
                        this.autoFreeze_ && O(n, !0),
                        r) {
                            let t = []
                              , i = [];
                            _("Patches").generateReplacementPatches_(e, n, t, i),
                            r(t, i)
                        }
                        return n
                    }
                }
                ,
                this.produceWithPatches = (e,t)=>{
                    let r, n;
                    return "function" == typeof e ? (t,...r)=>this.produceWithPatches(t, t=>e(t, ...r)) : [this.produce(e, t, (e,t)=>{
                        r = e,
                        n = t
                    }
                    ), r, n]
                }
                ,
                "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze),
                "boolean" == typeof e?.useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
            }
            createDraft(e) {
                var t;
                l(e) || a(8),
                c(e) && (c(t = e) || a(10, t),
                e = function e(t) {
                    let r;
                    if (!l(t) || R(t))
                        return t;
                    let n = t[o];
                    if (n) {
                        if (!n.modified_)
                            return n.base_;
                        n.finalized_ = !0,
                        r = w(t, n.scope_.immer_.useStrictShallowCopy_)
                    } else
                        r = w(t, !0);
                    return d(r, (t,n)=>{
                        m(r, t, e(n))
                    }
                    ),
                    n && (n.finalized_ = !1),
                    r
                }(t));
                let r = A(this)
                  , n = Q(e, void 0);
                return n[o].isManual_ = !0,
                P(r),
                n
            }
            finishDraft(e, t) {
                let r = e && e[o];
                r && r.isManual_ || a(9);
                let {scope_: n} = r;
                return C(n, t),
                x(void 0, n)
            }
            setAutoFreeze(e) {
                this.autoFreeze_ = e
            }
            setUseStrictShallowCopy(e) {
                this.useStrictShallowCopy_ = e
            }
            applyPatches(e, t) {
                let r;
                for (r = t.length - 1; r >= 0; r--) {
                    let n = t[r];
                    if (0 === n.path.length && "replace" === n.op) {
                        e = n.value;
                        break
                    }
                }
                r > -1 && (t = t.slice(r + 1));
                let n = _("Patches").applyPatches_;
                return c(e) ? n(e, t) : this.produce(e, e=>n(e, t))
            }
        }
          , z = B.produce;
        B.produceWithPatches.bind(B),
        B.setAutoFreeze.bind(B),
        B.setUseStrictShallowCopy.bind(B),
        B.applyPatches.bind(B),
        B.createDraft.bind(B),
        B.finishDraft.bind(B)
    }
}]);
console.log = () => null;