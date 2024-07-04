(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3185], {
    27178: function(e, t, s) {
        Promise.resolve().then(s.t.bind(s, 60634, 23)),
        Promise.resolve().then(s.t.bind(s, 22299, 23)),
        Promise.resolve().then(s.t.bind(s, 80721, 23)),
        Promise.resolve().then(s.bind(s, 95287)),
        Promise.resolve().then(s.t.bind(s, 49160, 23)),
        Promise.resolve().then(s.bind(s, 9888)),
        Promise.resolve().then(s.bind(s, 4750)),
        Promise.resolve().then(s.bind(s, 63275)),
        Promise.resolve().then(s.bind(s, 86196)),
        Promise.resolve().then(s.bind(s, 94470)),
        Promise.resolve().then(s.bind(s, 36930)),
        Promise.resolve().then(s.bind(s, 15800)),
        Promise.resolve().then(s.bind(s, 45187)),
        Promise.resolve().then(s.bind(s, 24886)),
        Promise.resolve().then(s.bind(s, 94114)),
        Promise.resolve().then(s.t.bind(s, 52833, 23))
    },
    30177: function(e, t, s) {
        "use strict";
        s.d(t, {
            Dd: function() {
                return c
            },
            Vb: function() {
                return a
            },
            bl: function() {
                return i
            },
            hn: function() {
                return o
            },
            mI: function() {
                return n
            },
            we: function() {
                return l
            }
        });
        let n = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2022/12/17/audio_43e9af63f3.mp3").play()
        }
          , a = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2024/01/17/audio_009e568069.mp3").play()
        }
          , i = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3").play()
        }
          , l = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2021/08/04/audio_12b0c7443c.mp3").play()
        }
          , c = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2021/08/04/audio_c003cb2711.mp3").play()
        }
          , o = ()=>{
            "false" !== localStorage.getItem("soundEffects") && new Audio("https://cdn.pixabay.com/audio/2024/01/02/audio_0c574f2e01.mp3").play()
        }
    },
    4750: function(e, t, s) {
        "use strict";
        s.d(t, {
            default: function() {
                return C
            }
        });
        var n = s(91153)
          , a = s(11055)
          , i = s(89111)
          , l = s(2890)
          , c = s(36930)
          , o = {
            src: "/_next/static/media/baned.a0a82c8a.svg",
            height: 64,
            width: 65,
            blurWidth: 0,
            blurHeight: 0
        }
          , r = s(43138)
          , d = s(30177)
          , u = s(35800)
          , h = e=>{
            let[t,s] = (0,
            a.useState)(5)
              , l = (0,
            a.useMemo)(()=>Math.floor(Math.random() * window.innerWidth), [])
              , c = (0,
            a.useMemo)(()=>Math.floor(Math.random() * window.innerWidth), [])
              , [o,h] = (0,
            a.useState)({
                x: l < 60 ? 20 : l > window.innerWidth - 60 ? window.innerWidth - 60 : l,
                y: c < 100 ? 100 : l > window.innerHeight - 100 ? window.innerHeight - 100 : l
            })
              , m = ()=>{
                let e = Math.floor(Math.random() * window.innerWidth)
                  , t = e < 60 ? 10 : e > window.innerWidth - 60 ? window.innerWidth - 60 : e
                  , s = Math.floor(Math.random() * window.innerHeight);
                return {
                    x: t,
                    y: s < 100 ? 100 : s > window.innerHeight - 100 ? window.innerHeight - 100 : s
                }
            }
              , f = async n=>{ setTimeout(() => (e.onClick(), s(5)), 8000) }
              , g = (0,
            a.useCallback)(()=>{
                let {x: e, y: t} = m();
                h({
                    x: e,
                    y: t
                })
            }
            , []);
            return (0,
            a.useEffect)(()=>{
                // let e = setInterval(g, 1500);
                // return ()=>clearInterval(e)
            }
            , [g]),
            (0,
            n.jsxs)("div", {
                onClick: f,
                className: "take-bee-fly",
                style: {
                    transform: "translate(".concat(o.x, "px, ").concat(o.y, "px)"),
                    transformOrigin: "center"
                },
                children: [(0,
                n.jsx)(i.Z, {
                    className: "take-bee-fly-img",
                    src: r.Z,
                    alt: "Bee"
                }), (0,
                n.jsx)("progress", {
                    className: "progress rounded-full w-full bg-white",
                    value: 0,
                    max: 5
                })]
            })
        }
          , m = s(6738)
          , f = s(35804)
          , g = s(49241)
          , x = s(42880)
          , b = s(52291)
          , p = s(53092);
        function A(e) {
            let {onClose: t, open: s, time: i} = e
              , l = (0,
            c.a)()
              , [o,r] = (0,
            a.useState)({
                type: "waiting",
                amount: 0,
                msg: ""
            })
              , d = (0,
            a.useCallback)(()=>{
                t(),
                r({
                    type: "waiting",
                    amount: 0,
                    msg: ""
                })
            }
            , [t])
              , h = (0,
            a.useCallback)(async()=>{
                s && "waiting" === o.type && setTimeout(async()=>{
                    try {
                        i <= 3500 && await (0,
                        u.M)("Catch a bee by bot 3s");
                        let e = await (0,
                        u.pe)({
                            type: 0
                        });
                        l.setUser(e.user),
                        r({
                            type: "success",
                            amount: e.amount,
                            msg: ""
                        })
                    } catch (s) {
                        var e, t;
                        r({
                            type: "error",
                            amount: 0,
                            msg: (null == s ? void 0 : null === (t = s.response) || void 0 === t ? void 0 : null === (e = t.data) || void 0 === e ? void 0 : e.message) || s.message
                        })
                    }
                }
                , 3e3)
            }
            , [s, o.type, i, l]);
            return (0,
            a.useEffect)(()=>{
                h()
            }
            , [h]),
            (0,
            n.jsxs)(m.Z, {
                onClose: ()=>{}
                ,
                open: s,
                children: [s && "waiting" === o.type && (0,
                n.jsx)(j, {}), s && "success" === o.type && (0,
                n.jsx)(v, {
                    amount: o.amount,
                    onClose: d
                }), s && "error" === o.type && (0,
                n.jsx)(w, {
                    onClose: d,
                    msg: o.msg
                })]
            })
        }
        function w(e) {
            return (0,
            n.jsxs)(a.Fragment, {
                children: [(0,
                n.jsx)(i.Z, {
                    className: "absolute -top-8 left-1/3 w-1/3",
                    src: g.Z,
                    alt: "Confetti upgraded"
                }), (0,
                n.jsxs)("div", {
                    className: "flex flex-col gap-4 mt-6",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-2 items-center",
                        children: [(0,
                        n.jsx)("h6", {
                            className: "font-bold",
                            children: "Oh no!"
                        }), (0,
                        n.jsx)("span", {
                            children: e.msg
                        })]
                    }), (0,
                    n.jsx)("button", {
                        className: "btn p-5 w-full",
                        onClick: e.onClose(),
                        children: "Close"
                    })]
                })]
            })
        }
        function v(e) {
            return (0,
            a.useEffect)(()=>{
                (0,
                d.bl)()
            }
            , []),
            (0,
            n.jsxs)(a.Fragment, {
                children: [(0,
                n.jsx)(i.Z, {
                    className: "absolute -top-8 left-1/3 w-1/3",
                    src: g.Z,
                    alt: "Confetti upgraded"
                }), (0,
                n.jsxs)("div", {
                    className: "flex flex-col gap-4 mt-6",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-2 items-center",
                        children: [(0,
                        n.jsx)("h6", {
                            className: "font-bold",
                            children: "Congratulation"
                        }), (0,
                        n.jsx)("span", {
                            children: "Catch bee successfully"
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-1 max-level-card p-4 items-center w-full text-white",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "relative flex w-32 h-32 justify-center items-center",
                            children: [(0,
                            n.jsx)(i.Z, {
                                className: "absolute top-0 left-0 animate-spin ",
                                src: b.Z,
                                alt: "light"
                            }), (0,
                            n.jsx)("div", {
                                className: "relative h-14 w-14",
                                children: (0,
                                n.jsx)(i.Z, {
                                    fill: !0,
                                    src: x.Z,
                                    alt: "Items"
                                })
                            })]
                        }), (0,
                        n.jsx)("h4", {
                            className: "font-bold",
                            children: "".concat((0,
                            f.CE)(e.amount), " BEE")
                        })]
                    }), (0,
                    n.jsx)("button", {
                        className: "btn p-5 w-full",
                        onClick: (()=>{
                            (0,
                            d.mI)(),
                            e.onClose()
                        })()
                        ,
                        children: "Claim"
                    })]
                })]
            })
        }
        function j(e) {
            let {} = e;
            return (0,
            n.jsxs)(a.Fragment, {
                children: [(0,
                n.jsx)(i.Z, {
                    className: "absolute -top-8 left-1/3 w-1/3",
                    src: g.Z,
                    alt: "Confetti upgraded"
                }), (0,
                n.jsxs)("div", {
                    className: "flex flex-col gap-4 mt-6",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-2 items-center",
                        children: [(0,
                        n.jsx)("h6", {
                            className: "font-bold",
                            children: "Catching Bee"
                        }), (0,
                        n.jsx)("h4", {
                            className: "flex justify-center items-center",
                            children: (0,
                            n.jsx)("div", {
                                className: "text-loader"
                            })
                        })]
                    }), (0,
                    n.jsx)("div", {
                        className: "flex flex-col gap-1 max-level-card p-4 items-center w-full text-white",
                        children: (0,
                        n.jsx)("div", {
                            className: "relative w-44 h-44",
                            children: (0,
                            n.jsx)(i.Z, {
                                src: p.Z,
                                alt: "Bee",
                                className: "object-contain"
                            })
                        })
                    }), (0,
                    n.jsx)("button", {
                        className: "btn p-5 w-full",
                        disabled: !0,
                        children: "Auto Catching"
                    })]
                })]
            })
        }
        s(38407);
        var N = s(19429);
        function y(e) {
            let {children: t} = e
              , [s,i] = (0,
            a.useState)(!1)
              , [l,c] = (0,
            a.useState)(!1)
              , [o,r] = (0,
            a.useState)(0)
              , [d,u] = (0,
            a.useState)(0)
              , m = (0,
            N.c)(e=>e.setCheckBot)
              , g = (0,
            a.useCallback)(()=>{
                i(!1),
                c(!1)
            }
            , []);
            return (0,
            a.useEffect)(()=>{
                if (s || l)
                    return;
                let e = setTimeout(()=>{
                    i(!0),
                    r(new Date().getTime()),
                    setTimeout(()=>i(!1), 1e4)
                }
                , (0,
                f.V6)(15e3, 25e3));
                return ()=>clearTimeout(e)
            }
            , [s, l]),
            (0,
            n.jsxs)(a.Fragment, {
                children: [s && (0,
                n.jsx)(h, {
                    onClick: ()=>{
                        i(!1),
                        c(!0),
                        u(new Date().getTime()),
                        m()
                    }
                }), (0,
                n.jsx)(A, {
                    open: l,
                    onClose: g,
                    time: d - o
                }), t]
            })
        }
        function C(e) {
            let {children: t} = e
              , {data: s} = (0,
            c.a)()
              , [r,d] = (0,
            a.useState)(!1)
              , h = async()=>{
                try {
                    d(!0),
                    await (0,
                    u.hv)(),
                    window.location.reload()
                } catch (e) {
                    d(!1)
                }
            }
            ;
            return s.banned ? (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [(0,
                n.jsx)(l.Z, {
                    disabled: !0
                }), (0,
                n.jsxs)("div", {
                    className: "card gap-2 items-center",
                    children: [(0,
                    n.jsx)(i.Z, {
                        className: "w-16",
                        src: o,
                        alt: "baned"
                    }), (0,
                    n.jsx)("p", {
                        className: "text-base text-danger font-bold",
                        children: "YOUR ACCOUNT BANNED"
                    })]
                }), (0,
                n.jsxs)("button", {
                    disabled: r,
                    className: "btn p-5 w-full flex flex-row gap-1 items-center",
                    onClick: h,
                    children: [r && (0,
                    n.jsx)("span", {
                        className: "loading loading-spinner loading-xs"
                    }), (0,
                    n.jsx)("h5", {
                        children: "Renew your account"
                    })]
                })]
            }) : (0,
            n.jsx)(y, {
                children: t
            })
        }
    },
    19429: function(e, t, s) {
        "use strict";
        s.d(t, {
            c: function() {
                return l
            }
        }),
        s(91153),
        s(11055);
        var n = s(71219)
          , a = s(11866);
        s(89111),
        s(6738),
        s(36930),
        s(35800);
        var i = s(79967);
        let l = (0,
        n.Ue)()((0,
        a.tJ)(e=>({
            checkBot: 0,
            checkedPoint: 0,
            setCheckBot: ()=>e((0,
            i.Uy)(e=>{
                e.checkBot = e.checkBot + 1
            }
            )),
            setCheckedPoint: t=>e((0,
            i.Uy)(e=>{
                e.checkedPoint = t,
                e.checkBot = 0
            }
            ))
        }), {
            name: "warning::agreed",
            storage: (0,
            a.FL)(()=>localStorage)
        }))
    },
    38407: function() {},
    52833: function() {},
    53092: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/catch.580da03d.svg",
            height: 343,
            width: 343,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    43138: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/bee.f27a67a3.svg",
            height: 69,
            width: 50,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    15800: function(e, t) {
        "use strict";
        t.default = {
            src: "/_next/static/media/maintenance.d226cff6.png",
            height: 2344,
            width: 1373,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAo0lEQVR42gWATQvBYACAn/dDa4uVJpIUN3Jwc1NODg6OfoEf4B9ylzO1HGRpyXxsiA2vxGza/xUtS7i2S3yNic5v5NyXFGSEI3bk7YjFTaA7dY+DaPJ6GuycolON0X6iSBwX8/miMk0Q35DLIKScbBjUUrzHmlV4Qk/KhvGoh+OVaLgWx+0SbZQi2G0ZWj7RNaTddZCtRkrp4iP2Dy7ZnV7F8AeriT4XcdOefAAAAABJRU5ErkJggg==",
            blurWidth: 5,
            blurHeight: 8
        }
    },
    49241: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/star-confetti.c76d87cc.png",
            height: 148,
            width: 345,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af//rgUAAP8M7ZVTAhNKcnoABwcA77GHhxFdn/8ADBXzAfzOW5oCBf9i89DQZQkgE5j//gQG+OPlYg0uMZv+AAmhAfevG2P17+9i790WaAoD4CHr4AAGHTYI1v4JBZYEBhKrV+wqo4NibaEAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 3
        }
    },
    52291: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/light-circle.672559a2.svg",
            height: 124,
            width: 125,
            blurWidth: 0,
            blurHeight: 0
        }
    }
}, function(e) {
    e.O(0, [8218, 6246, 5863, 1267, 8666, 680, 1329, 4930, 4552, 1777, 6078, 2661, 7702, 177, 1744], function() {
        return e(e.s = 27178)
    }),
    _N_E = e.O()
}
]);
