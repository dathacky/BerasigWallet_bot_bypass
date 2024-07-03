(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6930], {
    84076: function(e, t, a) {
        "use strict";
        a.d(t, {
            QV: function() {
                return d
            },
            cD: function() {
                return m
            },
            v0: function() {
                return u
            }
        });
        var r = a(17441)
          , s = a(32194)
          , n = a(38766)
          , i = a(62958)
          , l = a(95696)
          , c = a(13208)
          , o = a(79484);
        let u = ()=>{
            let e = localStorage.getItem("AUTH:USER_ID")
              , t = localStorage.getItem("AUTH:SERVER_ID");
            return {
                userId: e,
                serverId: t,
                bccToken: localStorage.getItem("AUTH:TOKEN"),
                lifeTime: localStorage.getItem("AUTH:LIFE_TIME"),
                teleAuth: localStorage.getItem("AUTH:TELE_AUTH")
            }
        }
          , d = e=>{
            e.userId && localStorage.setItem("AUTH:USER_ID", e.userId),
            e.serverId && localStorage.setItem("AUTH:SERVER_ID", e.serverId),
            e.bccToken && localStorage.setItem("AUTH:TOKEN", e.bccToken),
            e.lifeTime && localStorage.setItem("AUTH:LIFE_TIME", e.lifeTime),
            e.teleAuth && localStorage.setItem("AUTH:TELE_AUTH", e.teleAuth)
        }
          , f = r.Z.create({
            baseURL: "".concat(i.default.cluster.beraSigServer, "/mining-app")
        })
          , m = async e=>{
            let t = await localStorage.getItem("user");
            if (!t)
                throw Error("User not found!");
            let a = JSON.parse(t).state.user
              , r = await n.getItem("ZUSTAND_KEYS");
            if (!r)
                throw Error("Please connect wallet first!");
            let i = JSON.parse(r).state.privateKey
              , u = JSON.stringify({
                signer: a.address,
                verifier: "BERA::BEE::CATCHER::VERIFIER",
                nonce: a.nonce,
                data: e
            })
              , d = (0,
            l.J)((0,
            c.Y0)(u))
              , f = (await (0,
            s.BL)((0,
            o.Pw)(d), i.privateKey)).toCompactHex()
              , m = "".concat(a.address, "/").concat(f, "/").concat(a.nonce);
            return {
                authorization: "Bearer ".concat(m)
            }
        }
        ;
        f.interceptors.request.use(e=>{
            let t = u();
            return e.headers.userId = null == t ? void 0 : t.userId,
            e.headers.serverId = null == t ? void 0 : t.serverId,
            e.headers.bccToken = null == t ? void 0 : t.bccToken,
            e.headers.bccLifetime = null == t ? void 0 : t.lifeTime,
            e.headers.bbcsalt = "berachain",
            e.headers.teleauth = t.teleAuth,
            e
        }
        , e=>Promise.reject(e)),
        t.ZP = f
    },
    32341: function(e, t, a) {
        "use strict";
        a.d(t, {
            m: function() {
                return n
            },
            t: function() {
                return s
            }
        });
        var r = a(84076);
        let s = async e=>{
            let {data: t} = await r.ZP.get("/servers/".concat(e));
            return t
        }
          , n = async e=>{
            let {data: t} = await r.ZP.get("/servers/".concat(e, "/stat"));
            return t
        }
    },
    35800: function(e, t, a) {
        "use strict";
        a.d(t, {
            GJ: function() {
                return p
            },
            M: function() {
                return g
            },
            PR: function() {
                return n
            },
            QT: function() {
                return v
            },
            Rf: function() {
                return l
            },
            Tj: function() {
                return f
            },
            Wt: function() {
                return h
            },
            d0: function() {
                return i
            },
            hv: function() {
                return x
            },
            iX: function() {
                return d
            },
            jd: function() {
                return c
            },
            nX: function() {
                return u
            },
            pe: function() {
                return m
            },
            r4: function() {
                return s
            },
            y8: function() {
                return o
            }
        });
        var r = a(84076);
        let s = async e=>{
            let {data: t} = await r.ZP.post("/users", {
                ...e
            });
            return t
        }
          , n = async e=>{
            let {data: t} = await r.ZP.get("/users/".concat(e));
            return t
        }
          , i = async(e,t)=>{
            let {data: a} = await r.ZP.get("/users/by-telegram-id?server=".concat(e, "&telegramId=").concat(t));
            return a
        }
          , l = async e=>{
            let {data: t} = await r.ZP.get("/users", {
                params: e
            });
            return t
        }
          , c = async e=>{
            let {authorization: t} = await (0,
            r.cD)({
                txHash: e
            })
              , {data: a} = await r.ZP.patch("/users/claim-token", {
                txHash: e
            }, {
                headers: {
                    authorization: t
                }
            });
            return a
        }
          , o = async e=>{
            let t = (e.page - 1) * e.perPage
              , {data: a} = await r.ZP.get("/users/leaderboard", {
                params: {
                    offset: t,
                    limit: e.perPage,
                    ...e
                }
            });
            return a
        }
          , u = async e=>{
            let {userId: t} = e
              , {authorization: a} = await (0,
            r.cD)({
                userId: t
            })
              , {data: s} = await r.ZP.patch("/users/steal-token", {
                userId: t
            }, {
                headers: {
                    authorization: a
                }
            });
            return s
        }
          , d = async e=>{
            let {data: t} = await r.ZP.patch("/users/upgrade-item", e);
            return t
        }
          , f = async e=>{
            let {authorization: t} = await (0,
            r.cD)(e)
              , {data: a} = await r.ZP.patch("/users/quest/claim", e, {
                headers: {
                    authorization: t
                }
            });
            return {
                user: a.user,
                cert: a.cert
            }
        }
          , m = async e=>{
            let {authorization: t} = await (0,
            r.cD)(e)
              , {data: a} = await r.ZP.patch("/users/take-token", e, {
                headers: {
                    authorization: t
                }
            });
            return a
        }
          , h = async e=>{
            let {data: t} = await r.ZP.patch("/users/change-wallet", e);
            return t
        }
          , g = async e=>({})
          , p = async e=>{
            let {data: t} = await r.ZP.get("/users/quest-certificates", {
                params: {
                    platform: e
                }
            });
            return t
        }
          , v = async()=> null
          , x = async()=> r.ZP.patch("/users/reset-account")
    },
    5790: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, {
            default: function() {
                return j
            }
        });
        var r, s, n = a(91153), i = a(11055), l = a(7517), c = a(42478), o = a(51267), u = a(25278), d = a(63225), f = a(26530), m = a(36930), h = a(47985);
        function g(e) {
            let {data: t, loading: a} = (0,
            m.a)(e.userId);
            return a ? (0,
            n.jsx)(d.Z, {
                msg: "Loading user"
            }) : (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [(0,
                n.jsx)(o.default, {
                    src: f.Z,
                    alt: "banner"
                }), (0,
                n.jsx)("div", {
                    className: "card !border-danger",
                    children: (0,
                    n.jsx)("span", {
                        className: "text-danger",
                        children: "This account has been logged into from another device. Please enter your passphrase or private key to use this account."
                    })
                }), (0,
                n.jsxs)("div", {
                    className: "card flex-col gap-1 items-center mb-2",
                    children: [(0,
                    n.jsxs)("p", {
                        className: "font-bold text-[18px] mb-4",
                        children: ["Henlo Henlo", " ", (0,
                        n.jsx)("span", {
                            className: "text-danger text-[18px]",
                            children: t.name
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "Name:"
                        }), t && (0,
                        n.jsxs)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: [(0,
                            n.jsx)(u.Z, {
                                userId: t._id
                            }), (0,
                            n.jsx)("p", {
                                className: "font-bold",
                                children: t.name
                            })]
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "Address:"
                        }), (0,
                        n.jsx)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: (0,
                            n.jsx)("p", {
                                className: "text-secondary",
                                children: (0,
                                h.Sy)(t.address, {
                                    maxLength: 4
                                })
                            })
                        })]
                    })]
                })]
            })
        }
        var p = a(83263)
          , v = a(38165)
          , x = a(86196)
          , w = a(41222)
          , y = a(35800)
          , A = a(98431)
          , b = a(70958);
        function N() {
            let {setCurrentKey: e} = (0,
            x.$$)()
              , {data: t} = (0,
            m.a)()
              , [a,r] = (0,
            i.useState)((0,
            w.OF)())
              , [s,l] = (0,
            i.useState)("")
              , [c,o] = (0,
            i.useState)(0)
              , [d,f] = (0,
            i.useState)(!1)
              , g = (0,
            v.i)({
                phrase: a
            })
              , {message: N} = (0,
            A.p)();
            (0,
            i.useEffect)(()=>{
                c > 0 && setTimeout(()=>{
                    o(c - 1)
                }
                , 1e3)
            }
            , [c]);
            let j = async()=>{
                try {
                    await (0,
                    y.Wt)({
                        serverId: t.server,
                        pubkey: g.publicKey
                    }),
                    e({
                        ...(0,
                        v.i)({
                            phrase: a
                        }),
                        phrase: a
                    }),
                    window.location.reload()
                } catch (e) {
                    N({
                        msg: e.response.data.message,
                        type: "error"
                    })
                } finally {
                    f(!1)
                }
            }
              , E = "I agree to change wallet";
            return (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [(0,
                n.jsx)("div", {
                    className: "card !border-danger",
                    children: (0,
                    n.jsxs)("span", {
                        className: "text-danger",
                        children: ["Generating a new passphrase will completely unbind your previous wallet with this Telegram account. ", (0,
                        n.jsx)("br", {}), " All processes associated with this Telegram ID will remain the same, but the wallet will be updated.", (0,
                        n.jsx)("br", {}), " Remember to save your passphrase to experience the BeraSig Wallet and Berachain Ecosystem in general."]
                    })
                }), (0,
                n.jsxs)("div", {
                    className: "card flex-col gap-1 items-center mb-2",
                    children: [(0,
                    n.jsxs)("p", {
                        className: "font-bold text-[18px] mb-4",
                        children: ["Henlo Henlo", " ", (0,
                        n.jsx)("span", {
                            className: "text-danger text-[18px]",
                            children: t.name
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "Name:"
                        }), t && (0,
                        n.jsxs)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: [(0,
                            n.jsx)(u.Z, {
                                userId: t._id
                            }), (0,
                            n.jsx)("p", {
                                className: "font-bold",
                                children: t.name
                            })]
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "Current Address:"
                        }), (0,
                        n.jsxs)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: [(0,
                            n.jsx)("p", {
                                className: "text-secondary",
                                children: (0,
                                h.Sy)(t.address, {
                                    maxLength: 4
                                })
                            }), (0,
                            n.jsx)(b.S, {
                                className: "w-4 text-secondary",
                                content: t.address,
                                onClick: ()=>{}
                            })]
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full flex flex-row gap-4 justify-between items-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-secondary",
                            children: "New address:"
                        }), (0,
                        n.jsxs)("div", {
                            className: "flex flex-row gap-1 items-center",
                            children: [(0,
                            n.jsx)("p", {
                                className: "text-secondary",
                                children: (0,
                                h.Sy)(g.address.toLowerCase(), {
                                    maxLength: 4
                                })
                            }), (0,
                            n.jsx)(b.S, {
                                className: "w-4 text-secondary",
                                content: g.address.toLowerCase(),
                                onClick: ()=>{}
                            })]
                        })]
                    })]
                }), (0,
                n.jsxs)(i.Fragment, {
                    children: [(0,
                    n.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: (0,
                        n.jsx)("div", {
                            className: "group-input !rounded-2xl",
                            children: (0,
                            n.jsx)("textarea", {
                                className: "bg-body min-h-20 text-secondary font-medium",
                                value: s,
                                rows: 1,
                                onChange: e=>l(e.target.value),
                                placeholder: E
                            })
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "flex flex-col gap-4",
                        children: (0,
                        n.jsxs)("button", {
                            className: "btn flex-row gap-[10px] p-4 w-full",
                            disabled: s !== E || d,
                            onClick: j,
                            children: [(0,
                            n.jsx)(p.Z, {
                                className: "w-6 text-white"
                            }), (0,
                            n.jsx)("h6", {
                                className: "font-bold text-white",
                                children: s !== E ? "Enter confirm text" : "Change Wallet"
                            }), d && (0,
                            n.jsx)("span", {
                                className: "loading"
                            })]
                        })
                    })]
                })]
            })
        }
        function j() {
            let {setCurrentKey: e} = (0,
            x.$$)()
              , {data: t} = (0,
            m.a)()
              , [a,r] = (0,
            i.useState)("")
              , [s,o] = (0,
            i.useState)(1)
              , [u,d] = (0,
            i.useState)("")
              , [f,h] = (0,
            i.useState)(!1);
            return ((0,
            i.useEffect)(()=>{
                try {
                    if (!a)
                        throw Error("Invalid secret key");
                    let e = {
                        publicKey: "",
                        privateKey: "",
                        address: ""
                    };
                    if (1 === s && (0,
                    v.i)({
                        phrase: a
                    }) && (e = (0,
                    v.i)({
                        phrase: a
                    })),
                    0 === s && (0,
                    v.i)({
                        privateKey: a
                    }) && (e = (0,
                    v.i)({
                        privateKey: a
                    })),
                    !e)
                        throw Error("Invalid secret key");
                    if (t.address.toLowerCase() !== e.address.toLowerCase())
                        throw Error("Address does not match");
                    d("")
                } catch (e) {
                    d(e.message)
                }
            }
            , [a, e, s, t.address]),
            f) ? (0,
            n.jsx)(N, {}) : (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [(0,
                n.jsx)(g, {
                    userId: t._id
                }), (0,
                n.jsxs)(i.Fragment, {
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-row gap-1",
                        children: [(0,
                        n.jsx)("button", {
                            className: (0,
                            l.Z)("border border-border rounded-[20px] px-2 py-1", {
                                "bg-primary text-white": 1 === s
                            }),
                            onClick: ()=>o(1),
                            children: "Passphrase"
                        }), (0,
                        n.jsx)("button", {
                            className: (0,
                            l.Z)("border border-border rounded-[20px] px-2 py-1", {
                                "bg-primary text-white": 0 === s
                            }),
                            onClick: ()=>o(0),
                            children: "Private Key"
                        })]
                    }), (0,
                    n.jsx)("div", {
                        className: "flex flex-col gap-6",
                        children: (0,
                        n.jsx)("div", {
                            className: "group-input !rounded-2xl",
                            children: (0,
                            n.jsx)("textarea", {
                                className: "bg-body min-h-20 text-secondary font-medium",
                                value: a,
                                rows: 3,
                                onChange: e=>r(e.target.value),
                                placeholder: 1 === s ? "e.g skirt melt company ..." : "e.g 93ca1aw43a13ml8d9aw9 ..."
                            })
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0,
                        n.jsx)("p", {
                            className: "text-secondary text-end font-bold underline cursor-pointer",
                            onClick: ()=>h(!0),
                            children: "Forgot your passphrase or private key?"
                        }), (0,
                        n.jsxs)("button", {
                            className: "btn flex-row gap-[10px] p-4 w-full",
                            disabled: !!u,
                            onClick: ()=>1 === s ? e({
                                ...(0,
                                v.i)({
                                    phrase: a
                                }),
                                phrase: a
                            }) : 0 === s ? e({
                                ...(0,
                                v.i)({
                                    privateKey: a
                                }),
                                phrase: ""
                            }) : void 0,
                            children: [(0,
                            n.jsx)(c.Z, {
                                className: "w-6 text-white"
                            }), (0,
                            n.jsx)("h6", {
                                className: "font-bold text-white",
                                children: u || "Import Wallet"
                            })]
                        })]
                    })]
                })]
            })
        }
        (r = s || (s = {}))[r.Private = 0] = "Private",
        r[r.Phrase = 1] = "Phrase"
    },
    25278: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return i
            }
        });
        var r = a(91153)
          , s = a(36930)
          , n = a(81845);
        function i(e) {
            let {userId: t, size: a=24} = e
              , {data: i} = (0,
            s.a)(t);
            return (0,
            r.jsx)(n.Z, {
                className: "rounded-full",
                src: i.isPremium ? i.thumbnail : "",
                size: a,
                fallbackSalt: i.name
            })
        }
    },
    70958: function(e, t, a) {
        "use strict";
        a.d(t, {
            S: function() {
                return o
            },
            T: function() {
                return u
            }
        });
        var r = a(91153)
          , s = a(11055)
          , n = a(87900)
          , i = a.n(n)
          , l = a(25583)
          , c = a(98431);
        function o(e) {
            let {content: t, className: a, onClick: n} = e
              , c = (0,
            s.useCallback)(async(e,t)=>{
                t.stopPropagation(),
                i()(e),
                n()
            }
            , [n]);
            return (0,
            r.jsx)("div", {
                className: "flex flex-row gap-1 cursor-pointer",
                onClick: e=>c(t, e),
                children: (0,
                r.jsx)(l.Z, {
                    className: a
                })
            })
        }
        function u(e) {
            let {content: t, children: a} = e
              , {message: n} = (0,
            c.p)()
              , l = (0,
            s.useCallback)(async(e,t)=>{
                t.stopPropagation(),
                i()(e),
                n({
                    msg: "Copy to clipboard",
                    type: "success"
                })
            }
            , [n]);
            return (0,
            r.jsx)("div", {
                className: "cursor-pointer",
                onClick: e=>l(t, e),
                children: a
            })
        }
    },
    95501: function(e, t, a) {
        "use strict";
        var r = a(91153)
          , s = a(51267)
          , n = a(81682);
        t.Z = e=>(0,
        r.jsxs)("div", {
            className: "flex flex-col gap-4 ",
            children: [(0,
            r.jsx)(s.default, {
                src: n.Z,
                alt: "welcome"
            }), (0,
            r.jsxs)("div", {
                className: "flex flex-col gap-4 text-center p-4",
                children: [(0,
                r.jsx)("h5", {
                    className: "",
                    children: "Whoops! Something went wrong"
                }), (0,
                r.jsx)("div", {}), (0,
                r.jsx)("div", {
                    className: "text-[13px] leading-8",
                    children: e.msg
                }), (0,
                r.jsx)("button", {
                    className: "btn p-5",
                    children: (0,
                    r.jsx)("h5", {
                        className: "font-bold",
                        onClick: ()=>{
                            window.location.reload()
                        }
                        ,
                        children: "Reload App"
                    })
                })]
            })]
        })
    },
    81845: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return l
            }
        });
        var r = a(91153)
          , s = a(51267)
          , n = a(11055)
          , i = a(47985);
        function l(e) {
            let {src: t, fallbackSrc: a, fallbackSalt: l="", size: c, ...o} = e
              , [u,d] = (0,
            n.useState)(0)
              , f = [t, a].filter(e=>!!e)[u];
            return f ? (0,
            r.jsx)(s.default, {
                alt: "avatar",
                width: c,
                height: c,
                src: f,
                className: "rounded-full",
                onLoadingComplete: e=>{
                    0 === e.naturalWidth && d(u + 1)
                }
                ,
                onError: ()=>{
                    d(u + 1)
                }
                ,
                ...o
            }) : (0,
            r.jsx)("div", {
                style: {
                    width: c,
                    height: c,
                    backgroundColor: (0,
                    i.p)(l)
                },
                className: "rounded-full flex flex-col items-center justify-center",
                children: (0,
                r.jsx)("p", {
                    className: "capitalize",
                    style: {
                        fontSize: c / 2,
                        color: "white"
                    },
                    children: l.slice(0, 1)
                })
            })
        }
    },
    63225: function(e, t, a) {
        "use strict";
        var r = a(91153);
        a(49160),
        t.Z = e=>(0,
        r.jsxs)("div", {
            className: "loading-page",
            style: {
                height: (null == e ? void 0 : e.height) ? e.height : e.page ? "calc(100vh - 140px);" : void 0
            },
            children: [(0,
            r.jsx)("div", {
                className: "loader"
            }), (0,
            r.jsx)("div", {
                className: "text-loader"
            }), (0,
            r.jsx)("span", {
                className: "text-secondary",
                style: {
                    fontSize: 10
                },
                children: e.msg
            })]
        })
    },
    42891: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return o
            }
        });
        var r = a(91153)
          , s = a(51267)
          , n = a(11055)
          , i = a(24886)
          , l = a(45187)
          , c = a(94114);
        function o(e) {
            let {type: t="success"} = e
              , a = (0,
            n.useMemo)(()=>{
                switch (t) {
                case "success":
                    return i.default;
                case "error":
                    return l.default;
                case "warning":
                    return c.default
                }
            }
            , [t]);
            return (0,
            r.jsx)(s.default, {
                src: a,
                alt: t
            })
        }
    },
    62958: function(e, t, a) {
        "use strict";
        a.d(t, {
            default: function() {
                return s
            }
        });
        let r = "production";
        var s = {
            env: r,
            cluster: {
                development: {
                    beraSigServer: "https://api.berasig.com",
                    serverId: "6666d1d03f6375581720e70e"
                },
                staging: {
                    beraSigServer: "https://berasig-server-staging.onrender.com",
                    serverId: "6666d1d03f6375581720e70e"
                },
                production: {
                    beraSigServer: "https://api.berasig.com",
                    serverId: "6666d1d03f6375581720e70e"
                }
            }[r]
        }
    },
    38165: function(e, t, a) {
        "use strict";
        a.d(t, {
            i: function() {
                return c
            }
        });
        var r = a(32194)
          , s = a(25201)
          , n = a(6906)
          , i = a(41222)
          , l = a(8767);
        let c = e=>{
            let {phrase: t, privateKey: a} = e
              , c = a;
            if (t && (0,
            i._I)(t)) {
                let e = s.gk.fromPhrase(t);
                if (!e)
                    throw Error("Passphrase is invalid!");
                c = e.privateKey
            }
            if (!c)
                throw Error("Private key is invalid!");
            c = c.startsWith("0x") ? c.slice(2) : c;
            let o = (0,
            r.$3)(c, !0)
              , u = (0,
            l.encode)(o)
              , d = (0,
            n.d)("0x".concat(c));
            return {
                publicKey: u,
                privateKey: c,
                address: d
            }
        }
    },
    40822: function(e, t, a) {
        "use strict";
        a.d(t, {
            o: function() {
                return l
            },
            q: function() {
                return s
            }
        });
        var r, s, n = a(58352), i = a(11055);
        (r = s || (s = {})).items = "items",
        r.users = "users",
        r.guilds = "guilds",
        r.guildChequeSkills = "guildChequeSkills",
        r.guildChequeSkill = "guildChequeSkill",
        r.games = "games",
        r.gameCheques = "gameCheques";
        let l = ()=>{
            let e = (0,
            n.NL)();
            return {
                invalidateQueries: (0,
                i.useCallback)(t=>{
                    for (let a of t)
                        e.invalidateQueries({
                            predicate: e=>{
                                let {queryKey: t} = e;
                                return String(t[0]).startsWith(a)
                            }
                            ,
                            type: "all"
                        })
                }
                , [e]),
                queryClient: e
            }
        }
    },
    9888: function(e, t, a) {
        "use strict";
        a.d(t, {
            Y: function() {
                return g
            },
            default: function() {
                return v
            },
            q: function() {
                return h
            }
        });
        var r = a(91153)
          , s = a(11055)
          , n = a(71219)
          , i = a(58544)
          , l = a(58352)
          , c = a(63225)
          , o = a(95501)
          , u = a(32341)
          , d = a(47985)
          , f = a(62958)
          , m = a(35800);
        let h = (0,
        n.Ue)()(e=>({
            serverName: "",
            chainId: "",
            serverId: "",
            owner: "",
            fee: "0",
            news: "",
            readNews: "",
            items: [],
            skills: [],
            setApp: t=>e({
                ...t
            })
        }))
          , g = ()=>h()
          , p = new i.S({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: !1,
                    refetchOnMount: !1,
                    staleTime: 3e5
                }
            }
        });
        function v(e) {
            let {children: t} = e
              , {setApp: a} = h()
              , [n,i] = (0,
            s.useState)("")
              , [g,v] = (0,
            s.useState)(!0)
              , [x,w] = (0,
            s.useState)(!1);
            (0,
            s.useEffect)(()=>{
                "serviceWorker"in navigator && navigator.serviceWorker.ready.then(e=>{
                    e.unregister(),
                    caches && caches.keys().then(async e=>{
                        await Promise.all(e.map(e=>caches.delete(e)))
                    }
                    )
                }
                )
            }
            , []);
            let y = (0,
            s.useCallback)(async()=>{
                try {
                    let {server: e, items: t, skills: r} = await (0,
                    u.t)(f.default.cluster.serverId);
                    a({
                        serverName: e.name,
                        serverId: f.default.cluster.serverId,
                        chainId: e.chainId,
                        owner: e.owner,
                        fee: e.fee,
                        news: e.news,
                        items: t,
                        skills: r
                    })
                } catch (e) {
                    i(e.message)
                } finally {
                    v(!1)
                }
            }
            , [a]);
            return ((0,
            d.Nr)(y, 300, [y]),
            (0,
            s.useEffect)(()=>{
                "false" !== localStorage.getItem("soundTrack") && (document.addEventListener("click", ()=>{
                    var e = new Audio("https://directory.audio/media/fc_local_media/audio_preview/vibe%20tracks%20-%20universal%20-dramatic-.mp3");
                    e.volume = .2,
                    e.addEventListener("ended", function() {
                        this.currentTime = 0,
                        this.play()
                    }, !1),
                    e.play(),
                    document.addEventListener("visibilitychangez", function() {
                        document.hidden ? e.pause() : e.play()
                    })
                }
                , {
                    once: !0
                }),
                document.addEventListener("click", function(e) {
                    e.isTrusted || (0,
                    m.QT)();
                    let t = document.createElement("div");
                    t.className = "ripple",
                    t.style.transform = "translate(".concat(e.x, "px, ").concat(e.y, "px)"),
                    document.body.appendChild(t),
                    t.addEventListener("animationend", function() {
                        t.remove()
                    })
                }))
            }
            , []),
            (0,
            s.useEffect)(()=>{
                let e;
                let t = ()=>{
                    document.hidden ? e = setTimeout(()=>{
                        w(!0)
                    }
                    , 2e4) : (clearTimeout(e),
                    w(!1))
                }
                ;
                return document.addEventListener("visibilitychangez", t),
                ()=>{
                    document.removeEventListener("visibilitychangez", t)
                }
            }
            , []),
            x) ? null : n ? (0,
            r.jsx)(o.Z, {
                msg: n
            }) : g ? (0,
            r.jsx)(c.Z, {
                msg: "Loading server data (3/6)"
            }) : (0,
            r.jsx)(l.aH, {
                client: p,
                children: t
            })
        }
    },
    86196: function(e, t, a) {
        "use strict";
        a.d(t, {
            $$: function() {
                return h
            },
            default: function() {
                return g
            },
            kS: function() {
                return m
            }
        });
        var r = a(91153)
          , s = a(11055)
          , n = a(71219)
          , i = a(41222)
          , l = a(38766)
          , c = a(38165)
          , o = a(11866)
          , u = a(63225);
        let d = {
            address: "",
            phrase: "",
            privateKey: "",
            publicKey: ""
        }
          , f = (0,
        n.Ue)()((0,
        o.tJ)(e=>({
            privateKey: void 0,
            setPrivateKey: t=>e({
                privateKey: t,
                initialized: !0
            }),
            initialized: !1,
            _hasHydrated: !1
        }), {
            name: "ZUSTAND_KEYS",
            storage: (0,
            o.FL)(()=>l),
            onRehydrateStorage: ()=>()=>{
                f.setState({
                    _hasHydrated: !0
                })
            }
        }))
          , m = ()=>{
            let {privateKey: e} = f();
            return {
                currentKey: (0,
                s.useMemo)(()=>e || d, [e])
            }
        }
          , h = ()=>{
            let {setPrivateKey: e, privateKey: t} = f();
            return {
                createPrivateKey: (0,
                s.useCallback)(()=>{
                    if (null == t ? void 0 : t.privateKey)
                        return (0,
                        c.i)({
                            privateKey: t.privateKey
                        });
                    let a = (0,
                    i.OF)()
                      , r = (0,
                    c.i)({
                        phrase: a
                    });
                    return e({
                        ...r,
                        phrase: a
                    }),
                    r
                }
                , [null == t ? void 0 : t.privateKey, e]),
                privateKey: t,
                setCurrentKey: e
            }
        }
        ;
        function g(e) {
            let {children: t} = e;
            return f(e=>e._hasHydrated) ? (0,
            r.jsx)(s.Fragment, {
                children: t
            }) : (0,
            r.jsx)(u.Z, {
                msg: "Loading wallet"
            })
        }
    },
    94470: function(e, t, a) {
        "use strict";
        a.d(t, {
            TelegramProvider: function() {
                return g
            },
            wA: function() {
                return p
            }
        });
        var r, s, n = a(91153), i = a(11055), l = a(63225), c = a(26818), o = a(71219), u = a(47985), d = a(84076), f = a(77820);
        let m = (0,
        o.Ue)()(e=>({
            setStore: t=>{
                let {webApp: a, webAppUser: r} = t;
                return e({
                    webApp: a,
                    webAppUser: r
                })
            }
        }))
          , h = "";
        function g(e) {
            let {children: t} = e
              , a = m()
              , r = p()
              , s = (0,
            c.useRouter)()
              , o = (0,
            i.useCallback)(()=>{
                try {
                    let e = window.Telegram
                      , t = null == e ? void 0 : e.WebApp;
                    t && (t.ready(),
                    t.expand(),
                    t.BackButton.show(),
                    t.onEvent("backButtonClicked", ()=>{
                        s.back()
                    }
                    ),
                    t.isClosingConfirmationEnabled = !0,
                    (0,
                    d.QV)({
                        teleAuth: t.initData
                    }),
                    a.setStore({
                        webApp: t,
                        webAppUser: t.initDataUnsafe.user
                    }))
                } catch (e) {
                    console.log("error", e)
                } finally {}
            }
            , [s, a]);
            return ((0,
            u.Nr)(o, 300, [o]),
            r.id) ? (0,
            n.jsx)(n.Fragment, {
                children: t
            }) : (0,
            n.jsx)(l.Z, {
                msg: "Loading Telegram (2/6)"
            })
        }
        h = null === (s = window) || void 0 === s ? void 0 : null === (r = s.location) || void 0 === r ? void 0 : r.search;
        let p = ()=>{
            var e;
            let {webAppUser: t, webApp: a} = m();
            return (0,
            i.useMemo)(()=>{
                var e, r;
                let s = (null == a ? void 0 : null === (e = a.initDataUnsafe) || void 0 === e ? void 0 : e.start_param) || new URLSearchParams(h).get("tgWebAppStartParam") || ""
                  , n = "";
                t && (n = "".concat(t.first_name, " ").concat(t.last_name).trim()),
                "berachain_ecosystem" === s && (s = "66670f70ea503f89b906aa8c");
                let i = {
                    id: (null == t ? void 0 : t.id) || 0,
                    name: n,
                    username: (null == t ? void 0 : t.username) || (null == t ? void 0 : null === (r = t.id) || void 0 === r ? void 0 : r.toString()) || "",
                    referrer: s,
                    isPremium: !!(null == t ? void 0 : t.is_premium),
                    thumbnail: (null == t ? void 0 : t.photo_url) || "",
                    initData: (null == a ? void 0 : a.initData) || ""
                };
                return f.env.NEXT_PUBLIC_TELEGRAM_USERNAME && f.env.NEXT_PUBLIC_TELEGRAM_ID && (i.username = f.env.NEXT_PUBLIC_TELEGRAM_USERNAME,
                i.name = f.env.NEXT_PUBLIC_TELEGRAM_USERNAME,
                i.id = Number(f.env.NEXT_PUBLIC_TELEGRAM_ID)),
                i
            }
            , [null == a ? void 0 : a.initData, null == a ? void 0 : null === (e = a.initDataUnsafe) || void 0 === e ? void 0 : e.start_param, t])
        }
    },
    98431: function(e, t, a) {
        "use strict";
        a.d(t, {
            p: function() {
                return i
            }
        });
        var r = a(91153);
        a(11055);
        var s = a(95287)
          , n = a(42891);
        let i = ()=>({
            message: e=>{
                let {msg: t, type: a} = e;
                return (0,
                s.default)(t, {
                    icon: (0,
                    r.jsx)(n.Z, {
                        type: a
                    }),
                    className: "hot-toast hot-toast-".concat(a)
                })
            }
        })
    },
    36930: function(e, t, a) {
        "use strict";
        a.d(t, {
            L: function() {
                return b
            },
            a: function() {
                return N
            },
            default: function() {
                return j
            }
        });
        var r = a(91153)
          , s = a(11055)
          , n = a(71219)
          , i = a(79967)
          , l = a(16166)
          , c = a(80779)
          , o = a(11866)
          , u = a(95501)
          , d = a(63225)
          , f = a(5790)
          , m = a(35800)
          , h = a(40822)
          , g = a(9888)
          , p = a(94470)
          , v = a(86196)
          , x = a(26818)
          , w = a(84076)
          , y = a(47985);
        let A = {
            _id: "",
            address: "",
            createdAt: "",
            guild: "",
            items: [],
            lastClaimAt: new Date,
            name: "",
            pubkey: "",
            referrer: "",
            server: "",
            tokenBalance: 0,
            totalTokenBonus: 0,
            totalTokenClaimed: 0,
            totalTokenEarned: 0,
            totalQuestClaimed: 0,
            totalTokenStolen: 0,
            username: "",
            telegramId: 0,
            isPremium: !1,
            thumbnail: "",
            totalReferral: 0,
            guildRequests: [],
            totalGuildDonate: 0,
            stolenBy: [],
            ip: "",
            userAgent: "",
            guildJoinedAt: "",
            updatedAt: "",
            takeTokenUpdateAt: new Date,
            takeTokenNonce: 0,
            takeTokenTotal: 0,
            nonce: 0,
            banned: !1
        }
          , b = (0,
        n.Ue)()((0,
        o.tJ)(e=>({
            user: A,
            setUser: t=>e({
                user: t
            }),
            updateUser: t=>e((0,
            i.Uy)(e=>{
                let {user: a} = e;
                Object.assign(a, t)
            }
            ))
        }), {
            name: "user",
            storage: (0,
            o.FL)(()=>localStorage)
        }))
          , N = e=>{
            let {user: t, setUser: a} = b()
              , r = e || (null == t ? void 0 : t._id)
              , {queryClient: n} = (0,
            h.o)()
              , i = (0,
            l.a)({
                queryKey: ["".concat(h.q.users, ":").concat(r)],
                queryFn: async()=>{
                    let e = await (0,
                    m.PR)(r);
                    return r === (null == t ? void 0 : t._id) && a(e),
                    e
                }
                ,
                enabled: !!r
            })
              , c = (0,
            s.useCallback)(e=>{
                n.setQueryData(["".concat(h.q.users, ":").concat(e._id)], e),
                e._id === (null == t ? void 0 : t._id) && a(e)
            }
            , [n, a, null == t ? void 0 : t._id]);
            return {
                data: i.data || A,
                loading: i.isLoading,
                setUser: c
            }
        }
        ;
        function j(e) {
            var t, a;
            let {children: n} = e
              , {user: i, setUser: l} = b()
              , o = (0,
            v.$$)()
              , {serverId: h} = (0,
            g.q)()
              , N = (0,
            p.wA)()
              , j = (0,
            x.useRouter)()
              , [E,S] = (0,
            s.useState)(!0)
              , I = (0,
            s.useCallback)(async function() {
                var e, t;
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date().toISOString();
                if (null === (e = o.privateKey) || void 0 === e ? void 0 : e.privateKey) {
                    let e = new c.w(null === (t = o.privateKey) || void 0 === t ? void 0 : t.privateKey)
                      , r = "".concat(i._id, ":").concat(h, ":").concat(a)
                      , s = await e.signMessage(r);
                    (0,
                    w.QV)({
                        serverId: h,
                        userId: i._id,
                        bccToken: s,
                        lifeTime: a
                    })
                }
            }, [null === (t = o.privateKey) || void 0 === t ? void 0 : t.privateKey, h, i._id]);
            (0,
            y.Nr)(I, 1e3, [I]),
            (0,
            s.useEffect)(()=>{
                let e = setInterval(()=>{
                    I(new Date().toISOString())
                }
                , 3e5);
                return ()=>{
                    clearInterval(e)
                }
            }
            , [I]);
            let T = (0,
            s.useCallback)(async()=>{
                try {
                    if (!N.id)
                        throw Error("Invalid telegram account");
                    let e = await (0,
                    m.d0)(h, N.id);
                    if (!e._id)
                        throw Error("Not found account");
                    return l(e || A),
                    j.push("/home/earn")
                } catch (e) {
                    return j.push("/onboarding")
                } finally {
                    S(!1)
                }
            }
            , [h, N.id, l, j]);
            return ((0,
            y.Nr)(T, 500, [T]),
            E) ? (0,
            r.jsx)(d.Z, {
                msg: "Loading user (4/6)"
            }) : N.id ? (null == i ? void 0 : i._id) && i.address.toLowerCase() !== (null === (a = o.privateKey) || void 0 === a ? void 0 : a.address.toLowerCase()) ? (0,
            r.jsx)(f.default, {}) : i.telegramId && i.telegramId !== N.id ? (0,
            r.jsx)(u.Z, {
                msg: "Invalid telegram account with user"
            }) : n : (0,
            r.jsx)(u.Z, {
                msg: "Invalid telegram account"
            })
        }
    },
    47985: function(e, t, a) {
        "use strict";
        a.d(t, {
            Nr: function() {
                return c
            },
            Sy: function() {
                return s
            },
            p: function() {
                return n
            },
            sA: function() {
                return i
            }
        });
        var r = a(11055);
        let s = (e,t)=>{
            let a = (null == t ? void 0 : t.maxLength) || 3
              , r = (null == t ? void 0 : t.symbol) || "..."
              , s = (null == t ? void 0 : t.suffix) === void 0 || t.suffix;
            if (!e || e.length <= 2 * a)
                return e;
            let n = "".concat(r).concat(e.substring(e.length - a));
            return "".concat(e.substring(0, a)).concat(s ? n : "")
        }
          , n = (e,t)=>{
            let a = Math.floor(16777215 * Math.random());
            if (e) {
                a = 0;
                for (let t = 0; t < e.length; t++)
                    a = e.charCodeAt(t) + ((a << 5) - a)
            }
            var r = [0, 0, 0];
            for (let e = 0; e < 3; e++) {
                var s = a >> 8 * e & 255;
                r[e] = s
            }
            return "rgba(".concat(r[0], ", 100, ").concat(r[1], ",").concat(t || 1, ")")
        }
          , i = e=>new Promise(t=>setTimeout(t, e))
          , l = (e,t)=>{
            let a = (0,
            r.useRef)(!1)
              , s = (0,
            r.useRef)()
              , n = (0,
            r.useRef)(e)
              , i = (0,
            r.useCallback)(()=>a.current, [])
              , l = (0,
            r.useCallback)(()=>{
                a.current = !1,
                s.current && clearTimeout(s.current),
                s.current = setTimeout(()=>{
                    a.current = !0,
                    n.current()
                }
                , t)
            }
            , [t])
              , c = (0,
            r.useCallback)(()=>{
                a.current = null,
                s.current && clearTimeout(s.current)
            }
            , []);
            return (0,
            r.useEffect)(()=>{
                n.current = e
            }
            , [e]),
            (0,
            r.useEffect)(()=>(l(),
            c), [c, t, l]),
            [i, c, l]
        }
          , c = (e,t,a)=>{
            let[s,n,i] = l(e, t);
            return (0,
            r.useEffect)(i, a),
            [s, n]
        }
    },
    49160: function() {},
    26530: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/bear-group.0a1e7126.png",
            height: 1029,
            width: 1029,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AfT5+wDZ3uIGDxQODCHote4DLWAA/f/0C/XKdBaJvSPkAez2+nMNBwWCBgIA8frNnXgBES5h/RMlxfHGEch+SgDJAfH//zYO+PlX4d28ctTm9wAB/v4AI/rQzSdFgpzfCASlAQAAAAq0dQCJ2CWJbEIgE/oODh8B1Ma/BTgvMfMEQlQrAc3At2DOvrSf5xH3/Vgu+gP87Qn/7r/HARAxWuMrZHA9AeHKyV2/qpeit9zX/X1IFAAF9QL/9+j0BO0ZNvIlXX4tAYGxF7385A9C6vgEAEoWHwACAAwA0OvIAPgRCQABE/2tAY2/Io79AQFIAgD0Bff+N64CAvsF/gDKEwb+Cg0FAQCz60F3vxdIZEwAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8
        }
    },
    81682: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/warning_bear.47070f2e.png",
            height: 385,
            width: 385,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABC0lEQVR4nAVAO0vDQBz//a/JNcHEQSE6iI+AOEhBiyBtUamdDHRzEBzUxV0ddRVdnPwiTtJZxFn7ACn1QZG2QQptktocMb1C81MLz80RMpeWKvaNBBkq4UNG8gZJPusrFbKXV6WhEOxeFXYbMAA08isgEeO1xUA7u4XhdPdNyxaPpVB1UhlQebhHbC7hKzYlOfltYbWfeO70FutbBQReH8QSqNfKuLo4B23ksmJT9/jAraIjTJTqPs5ODhF2Gnj8GYKO0mthXwuSasTw/fsHrnGQ10TGOYCIEpJqqcX4DgprTRKUQYTAD/E+Y+HampN7fo/ITdtl/1+mSqTIF51RV0gUR7F0ApcmuPY5BkhzadCB+rXkAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }
    },
    45187: function(e, t) {
        "use strict";
        t.default = {
            src: "/_next/static/media/error.74bd8204.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    24886: function(e, t) {
        "use strict";
        t.default = {
            src: "/_next/static/media/success.f629c4ea.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    94114: function(e, t) {
        "use strict";
        t.default = {
            src: "/_next/static/media/warning.d82fe2f3.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
    }
}]);
