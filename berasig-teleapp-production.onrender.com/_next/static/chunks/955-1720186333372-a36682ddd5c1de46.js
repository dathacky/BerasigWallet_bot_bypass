"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[955], {
    20955: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return Z
            }
        });
        var n, s, i = a(91153), r = a(11055), l = a(89111), o = a(4930), c = a(76966), d = a(71436), u = a(6738), m = a(25278), p = a(58352), h = a(31592), y = a(7517), x = a(1329), f = a(63114), b = a(9888), g = a(14095), w = a(98431), v = a(36930), k = a(35800), N = a(35804), j = a(30177), B = a(42880), A = {
            src: "/_next/static/media/bera-coin.0e19c771.svg",
            height: 48,
            width: 49,
            blurWidth: 0,
            blurHeight: 0
        };
        let E = (e,t)=>{
            let a = {
                x: t.pageX,
                y: t.pageY
            }
              , n = JSON.parse(localStorage.getItem("BOT_DETECTION:".concat(e)) || "[]");
            return n.push(a),
            n.length > 6 && n.shift(),
            localStorage.setItem("BOT_DETECTION:".concat(e), JSON.stringify(n)),
            !!(6 === n.length && C(n))
        }
          , C = e=>{
            for (let t = 1; t < e.length; t++)
                if (!_(e[t], e[t - 1], 2))
                    return !1;
            return !0
        }
          , _ = (e,t,a)=>Math.abs(e.x - t.x) <= a && Math.abs(e.y - t.y) <= a;
        var F = a(19429)
          , S = a(9923);
        function T(e) {
            let {amountBee: t, disabled: a=!1} = e
              , [n,s] = (0,
            r.useState)(!1)
              , [o,c] = (0,
            r.useState)(!1)
              , [d,m] = (0,
            r.useState)()
              , {data: C, setUser: _} = (0,
            v.a)()
              , {message: T} = (0,
            w.p)()
              , R = (0,
            f.xo)()
              , {owner: D, fee: M} = (0,
            b.Y)()
              , {native: Z} = (0,
            g.a0)()
              , I = (0,
            p.NL)()
              , O = (0,
            F.c)(e=>e.setCheckBot)
              , P = (0,
            r.useMemo)(()=>new x.BN(Z.amountRaw).lt(new x.BN(M)), [Z.amountRaw, M])
              , q = (0,
            r.useCallback)(async()=>{
                if (!R)
                    throw Error("Please connect wallet first!");
                if (P)
                    throw Error("Insufficient BERA Balance!");
                let e = await R.transferNative(D, new x.BN(M))
                  , {txHash: t} = await R.signAndBroadcast(e);
                return await I.invalidateQueries({
                    queryKey: ["Bera-native-assets-".concat(C.address)]
                }),
                t || ""
            }
            , [M, P, D, I, C.address, R])
              , H = (0,
            h.D)({
                mutationFn: async()=>{
                    if (o)
                        throw Error("Being processed for a claim");
                    c(!0);
                    let e = "";
                    "bera" === d && (e = await q()),
                    _(await (0,
                    k.jd)(e)),
                    (0,
                    j.mI)()
                }
                ,
                onSuccess: ()=>{
                    s(!1),
                    c(!1),
                    T({
                        msg: "Claim BEE successfully",
                        type: "success"
                    })
                }
                ,
                onError: e=>{
                    var t, a;
                    c(!1),
                    T({
                        msg: (null == e ? void 0 : null === (a = e.response) || void 0 === a ? void 0 : null === (t = a.data) || void 0 === t ? void 0 : t.message) || e.message,
                        type: "error"
                    })
                }
            })
              , W = (0,
            r.useCallback)(async e=>{
                e.isTrusted || await (0,
                k.M)("Click claim by scripts"),
                E("onClaim", e) && await (0,
                k.M)("Click claim by bot high risk"),
                s(!0),
                O()
            }
            , [O]);
            return (0,
            i.jsxs)(r.Fragment, {
                children: [(0,
                i.jsx)("button", {
                    className: "rung btn px-5 py-3",
                    onClick: () => H.mutate(),
                    disabled: a,
                    children: "HackyCommunity"
                }), (0,
                i.jsx)(u.Z, {
                    onClose: ()=>{
                        o || s(!1)
                    }
                    ,
                    open: n,
                    children: (0,
                    i.jsxs)("div", {
                        className: "flex flex-col gap-4 mt-6",
                        children: [(0,
                        i.jsxs)("div", {
                            className: "flex flex-col gap-2 max-level-card p-4 items-center w-full text-white",
                            children: [(0,
                            i.jsx)(l.Z, {
                                src: B.Z,
                                alt: "bee",
                                width: 64,
                                height: 64
                            }), (0,
                            i.jsx)("h5", {
                                children: "Claim BEE"
                            }), (0,
                            i.jsx)("p", {
                                className: "text-center text-sm",
                                children: "Claiming BEE requires a small fee in BERA or BEE. BERA is the cheaper option."
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: (0,
                            y.Z)("card !border-2 flex-row gap-2 items-center w-full cursor-pointer", {
                                "!border-primary !bg-[#F9F4D5]": "bera" === d
                            }),
                            onClick: ()=>{
                                o || m("bera")
                            }
                            ,
                            children: [(0,
                            i.jsx)(l.Z, {
                                src: A,
                                alt: "bee",
                                width: 48,
                                height: 48
                            }), (0,
                            i.jsxs)("div", {
                                className: "flex flex-1 flex-col",
                                children: [(0,
                                i.jsx)("p", {
                                    className: "font-bold text-base",
                                    children: "Pay with BERA"
                                }), (0,
                                i.jsxs)("p", {
                                    className: "text-secondary text-sm font-normal",
                                    children: ["Fee: ", Number(M) / 1e18, " BERA"]
                                })]
                            }), (0,
                            i.jsxs)("div", {
                                className: "flex flex-row gap-1 items-center",
                                children: [(0,
                                i.jsx)("p", {
                                    className: "text-primary text-lg font-semibold",
                                    children: (0,
                                    N.CE)(t)
                                }), (0,
                                i.jsx)(l.Z, {
                                    src: B.Z,
                                    alt: "bee",
                                    width: 20,
                                    height: 20
                                })]
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: (0,
                            y.Z)("card !border-2 flex-row gap-2 items-center w-full cursor-pointer", {
                                "!border-primary !bg-[#F9F4D5]": "bee" === d
                            }),
                            onClick: ()=>{
                                o || m("bee")
                            }
                            ,
                            children: [(0,
                            i.jsx)(l.Z, {
                                src: B.Z,
                                alt: "bee",
                                width: 48,
                                height: 48
                            }), (0,
                            i.jsxs)("div", {
                                className: "flex flex-1 flex-col",
                                children: [(0,
                                i.jsx)("p", {
                                    className: "font-bold text-base ",
                                    children: "Pay with BEE"
                                }), (0,
                                i.jsx)("p", {
                                    className: "text-secondary text-sm font-normal",
                                    children: "Fee: 30% BEE minted"
                                })]
                            }), (0,
                            i.jsxs)("div", {
                                className: "flex flex-row gap-1 items-center",
                                children: [(0,
                                i.jsx)("p", {
                                    className: "text-primary text-lg font-semibold",
                                    children: (0,
                                    N.CE)(.7 * t)
                                }), (0,
                                i.jsx)(l.Z, {
                                    src: B.Z,
                                    alt: "bee",
                                    width: 20,
                                    height: 20
                                })]
                            })]
                        }), (0,
                        i.jsx)(S.Z, {
                            onOk: ()=>H.mutate(),
                            disabled: !d,
                            children: (0,
                            i.jsxs)("button", {
                                className: "btn p-5 w-full flex flex-row gap-1 items-center",
                                disabled: !d,
                                children: [o && (0,
                                i.jsx)("span", {
                                    className: "loading loading-spinner loading-xs"
                                }), (0,
                                i.jsx)("h5", {
                                    children: "Confirm"
                                })]
                            })
                        })]
                    })
                })]
            })
        }
        (n = s || (s = {})).Bera = "bera",
        n.Bee = "bee";
        var R = a(21863)
          , D = a(61845)
          , M = a(77082);
        function Z() {
            let[e,t] = (0,
            r.useState)(!1)
              , {data: a} = (0,
            v.a)()
              , {data: n} = (0,
            D.Q)(a._id)
              , {news: s, readNews: o, setApp: m} = (0,
            b.Y)()
              , p = (0,
            r.useMemo)(()=>n.totalStolen / a.stolenBy.length, [n.totalStolen, a.stolenBy.length])
              , h = (0,
            r.useCallback)(async()=>{
                window.open(s, "_blank"),
                m({
                    readNews: s
                })
            }
            , [s, m])
              , y = (0,
            r.useMemo)(()=>o === s, [s, o]);
            return (0,
            i.jsxs)(r.Fragment, {
                children: [(0,
                i.jsxs)("div", {
                    className: "card card-opacity card-blur flex-col gap-2",
                    children: [!!a.stolenBy.length && (0,
                    i.jsxs)("div", {
                        onClick: ()=>t(!0),
                        className: "flex flex-row gap-2 items-center cursor-pointer bg-white px-4 py-2 -mx-4 -mt-4 rounded-t-[20px] border-border",
                        children: [(0,
                        i.jsx)(l.Z, {
                            src: M.Z,
                            width: 16,
                            height: 16,
                            alt: "thief"
                        }), (0,
                        i.jsx)("p", {
                            className: "text-secondary flex-1",
                            children: "Yikes! Looks like your BEE stash got stung!"
                        }), (0,
                        i.jsx)(c.Z, {
                            width: 16
                        })]
                    }), (0,
                    i.jsxs)("div", {
                        className: "flex flex-row gap-1",
                        children: [(0,
                        i.jsx)("span", {
                            children: "Collected"
                        }), (0,
                        i.jsx)(d.Z, {
                            className: "w-5"
                        })]
                    }), (0,
                    i.jsxs)("div", {
                        className: "flex flex-row",
                        children: [(0,
                        i.jsxs)("div", {
                            className: "flex flex-col flex-1 gap-2",
                            children: [(0,
                            i.jsx)("div", {
                                className: "flex flex-row gap-1 max-w-40 text-primary items-center",
                                children: (0,
                                i.jsx)("h3", {
                                    className: "font-bold",
                                    children: (0,
                                    R.uR)(n.amount - n.totalStolen).format({
                                        mantissa: 4
                                    })
                                })
                            }), (0,
                            i.jsxs)("div", {
                                className: "flex relative h-2 max-w-40",
                                children: [(0,
                                i.jsx)("progress", {
                                    className: "progress rounded-full  w-full bg-white",
                                    value: n.amount - n.totalStolen,
                                    max: n.maximum || 0
                                }), (0,
                                i.jsx)("div", {
                                    className: "absolute h-2 w-1 left-1/4 bg-primary top-0 rounded-2xl opacity-50"
                                })]
                            })]
                        }), y ? (0,
                        i.jsx)(T, {
                            amountBee: n.amount - n.totalStolen,
                            disabled: n.amount < 25 * n.maximum / 100
                        }) : (0,
                        i.jsx)("button", {
                            className: "btn px-5 py-3 !bg-[#F47226] !text-base",
                            onClick: h,
                            children: "Check NEWS"
                        })]
                    })]
                }), (0,
                i.jsx)(u.Z, {
                    placement: "bottom",
                    open: e,
                    onClose: ()=>t(!1),
                    children: (0,
                    i.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-2 overflow-hidden",
                        children: [(0,
                        i.jsx)(l.Z, {
                            src: M.Z,
                            width: 65,
                            height: 65,
                            alt: "thief"
                        }), (0,
                        i.jsxs)("p", {
                            className: "text-lg text-primary font-bold",
                            children: ["List of thieves (", a.stolenBy.length, ")"]
                        }), (0,
                        i.jsx)("p", {
                            className: "text-secondary text-center",
                            children: "Someone made a sticky getaway with your BEE! Who are they?"
                        }), (0,
                        i.jsxs)("p", {
                            className: "font-bold text-base",
                            children: ["Total Stolen: ", (0,
                            R.uR)(n.totalStolen).format("0,0.[000000]"), " ", "BEE"]
                        }), (0,
                        i.jsx)("div", {
                            className: "flex flex-col max-h-72 gap-2 overflow-y-scroll w-full",
                            children: a.stolenBy.map(e=>(0,
                            i.jsx)(I, {
                                userId: e,
                                singleStolen: p
                            }, e))
                        })]
                    })
                })]
            })
        }
        let I = e=>{
            let {userId: t, singleStolen: a} = e
              , {data: n} = (0,
            v.a)(t);
            return (0,
            i.jsxs)("div", {
                className: "card w-full flex-row gap-2 items-center",
                children: [(0,
                i.jsx)(m.Z, {
                    size: 48,
                    userId: t
                }), (0,
                i.jsxs)("div", {
                    className: " flex flex-col gap-2 items-start",
                    children: [(0,
                    i.jsx)("p", {
                        children: n.name
                    }), (0,
                    i.jsxs)("div", {
                        className: "flex flex-row gap-1 items-center",
                        children: [(0,
                        i.jsx)(l.Z, {
                            className: " w-4 h-4 ",
                            src: B.Z,
                            alt: "coin"
                        }), (0,
                        i.jsx)("p", {
                            className: "font-bold ",
                            children: (0,
                            R.uR)(a).format("0,0.[000000]")
                        })]
                    })]
                }), (0,
                i.jsx)("div", {
                    className: "flex-1"
                }), (0,
                i.jsx)(o.default, {
                    href: "/user-details?id=".concat(t),
                    className: "btn !bg-[#F1A025] ",
                    children: "Revenge"
                })]
            })
        }
    },
    88020: function(e, t, a) {
        a.d(t, {
            i: function() {
                return n
            }
        });
        let n = {
            chainId: "0x138d4"
        }
    },
    80807: function(e, t, a) {
        a.d(t, {
            A: function() {
                return n
            }
        });
        let n = {
            [a(88020).i.chainId]: "https://bartio.rpc.berachain.com"
        }
    },
    63114: function(e, t, a) {
        a.d(t, {
            VV: function() {
                return k
            },
            j1: function() {
                return w
            },
            xo: function() {
                return v
            }
        });
        var n = a(11055)
          , s = a(16166)
          , i = a(72223);
        let r = {
            [i.q.Bera]: ()=>a.e(1533).then(a.bind(a, 41533))
        };
        class l {
        }
        l.newInstance = async(e,t)=>new Promise((a,n)=>{
            r[i.q.Bera]().then(async n=>{
                let {default: s} = n;
                a(new s(e,t))
            }
            ).catch(e=>{
                n(e)
            }
            )
        }
        );
        var o = a(81156)
          , c = a(93063)
          , d = a(27410)
          , u = a(21863)
          , m = a(80807);
        class p {
            async getTokenDecimals(e) {
                return this.isNative(e) ? this._nativeDecimals : (await this.getTokenMetadata(e)).decimals || 0
            }
            async toRawAmount(e, t) {
                let a = await this.getTokenDecimals(e);
                return (0,
                u.$q)(t, a)
            }
            constructor(e, t, a) {
                this._chainId = e,
                this._native = t,
                this._nativeDecimals = a,
                this.isNative = e=>!e || this._native.address.toLowerCase() === (null == e ? void 0 : e.toLowerCase()),
                this.rpc = m.A[e]
            }
        }
        var h = a(54450);
        let y = {};
        class x extends p {
            async getProvider() {
                try {
                    let e = new o.r6(this.rpc);
                    return await e._detectNetwork(),
                    e
                } catch (e) {
                    console.log(e)
                }
            }
            get ankrProvider() {
                return new d.AnkrProvider("https://rpc.ankr.com/multichain")
            }
            getBlockchain(e) {
                let t = y[e];
                if (!t)
                    throw Error("Chain ".concat(e, " not supported"));
                return t
            }
            async getTokenMetadata(e) {
                let t = await this.getProvider()
                  , a = new c.CH(e,h.R,t)
                  , n = await a.decimals()
                  , s = await a.name()
                  , i = await a.symbol();
                return {
                    decimals: Number(n),
                    name: s,
                    symbol: i,
                    address: e
                }
            }
            async getErc20Balance(e, t) {
                let a = await this.getProvider()
                  , n = new c.CH(e,h.R,a);
                return await n.balanceOf(t)
            }
            async getTokenAssets(e) {
                try {
                    let t = {};
                    for (let a of (await this.ankrProvider.getAccountBalance({
                        walletAddress: e,
                        blockchain: this.getBlockchain(this._chainId),
                        onlyWhitelisted: !1
                    })).assets)
                        a.contractAddress && (t[a.contractAddress] = {
                            amountRaw: a.balanceRawInteger,
                            tokenAddress: a.contractAddress,
                            price: Number(a.tokenPrice),
                            name: a.tokenName,
                            symbol: a.tokenSymbol,
                            decimals: a.tokenDecimals,
                            thumbnail: a.thumbnail
                        });
                    return Object.values(t)
                } catch (e) {
                    return []
                }
            }
            async getNativeAsset(e) {
                try {
                    let t = await this.getProvider();
                    if (!t)
                        throw Error("Invalid connection");
                    return {
                        amountRaw: (await t.getBalance(e)).toString(),
                        tokenAddress: this._native.address,
                        ...this._native
                    }
                } catch (e) {
                    return {
                        amountRaw: "0",
                        tokenAddress: this._native.address,
                        ...this._native
                    }
                }
            }
            async getAllowance(e, t, a) {
                let n = await this.getProvider()
                  , s = new c.CH(t,h.R,n);
                return (await s.allowance(e, a)).toString()
            }
            async erc20Contract(e) {
                let t = await this.getProvider();
                return new c.CH(e,h.R,t)
            }
        }
        class f {
        }
        f.getInstance = e=>{
            let t = i.g[i.q.Bera];
            return new x(e,t,t.decimals)
        }
        ;
        var b = a(86196)
          , g = a(88020);
        let w = ()=>(0,
        n.useMemo)(()=>f.getInstance(g.i.chainId), [])
          , v = ()=>{
            let {currentKey: e} = (0,
            b.kS)()
              , {data: t} = (0,
            s.a)({
                queryKey: ["web3-provider:".concat(e.address)],
                queryFn: async()=>{
                    if (e.publicKey)
                        return await l.newInstance(g.i.chainId, e.privateKey)
                }
                ,
                enabled: !!e.address
            });
            return t
        }
          , k = e=>{
            let {currentKey: t} = (0,
            b.kS)()
              , a = w()
              , {data: n, isLoading: i} = (0,
            s.a)({
                queryKey: ["ERC20-Balance", t.address, e],
                queryFn: async()=>{
                    if (!e)
                        return "0";
                    let n = await a.getErc20Balance(e, t.address);
                    return Number(n) ? n.toString() : "0"
                }
                ,
                enabled: !!e && !!t
            });
            return {
                amountRaw: n || "0",
                isLoading: i
            }
        }
    },
    54450: function(e, t, a) {
        a.d(t, {
            R: function() {
                return n
            }
        });
        let n = [{
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_spender",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                name: "success",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_from",
                type: "address"
            }, {
                name: "_to",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                name: "success",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{
                name: "",
                type: "uint8"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "version",
            outputs: [{
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "_owner",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                name: "balance",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_to",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                name: "success",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_spender",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }, {
                name: "_extraData",
                type: "bytes"
            }],
            name: "approveAndCall",
            outputs: [{
                name: "success",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "_owner",
                type: "address"
            }, {
                name: "_spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                name: "remaining",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                name: "_initialAmount",
                type: "uint256"
            }, {
                name: "_tokenName",
                type: "string"
            }, {
                name: "_decimalUnits",
                type: "uint8"
            }, {
                name: "_tokenSymbol",
                type: "string"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            payable: !1,
            stateMutability: "nonpayable",
            type: "fallback"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "_from",
                type: "address"
            }, {
                indexed: !0,
                name: "_to",
                type: "address"
            }, {
                indexed: !1,
                name: "_value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "_owner",
                type: "address"
            }, {
                indexed: !0,
                name: "_spender",
                type: "address"
            }, {
                indexed: !1,
                name: "_value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }]
    },
    72223: function(e, t, a) {
        a.d(t, {
            q: function() {
                return n
            },
            g: function() {
                return i
            }
        });
        var n, s = a(2020);
        (n || (n = {})).Bera = "Bera";
        let i = {
            Bera: {
                address: s.N,
                name: "Berachain Token",
                symbol: "BERA",
                decimals: 18,
                thumbnail: "/_next/static/media/bera_logo.5ff7b77f.png"
            }
        }
    },
    14095: function(e, t, a) {
        a.d(t, {
            ZP: function() {
                return N
            },
            _H: function() {
                return b
            },
            a0: function() {
                return v
            },
            dQ: function() {
                return g
            },
            Ny: function() {
                return k
            },
            pQ: function() {
                return w
            }
        });
        var n, s, i = a(91153), r = a(11055), l = a(71219), o = a(11866), c = a(16166), d = a(79967), u = "/_next/static/media/honey.03a4445d.png";
        let m = [{
            tokenAddress: "0x5806E416dA447b267cEA759358cF22Cc41FAE80F",
            symbol: "WBERA",
            name: "Wrapped Berachain Token",
            decimals: 18,
            thumbnail: "/_next/static/media/wbera.d50f6582.png"
        }, {
            tokenAddress: "0xAcD97aDBa1207dCf27d5C188455BEa8a32E80B8b",
            symbol: "BGT",
            name: "Bera Governance Token",
            decimals: 18,
            thumbnail: "/_next/static/media/bgt.e39ef8d4.png"
        }, {
            tokenAddress: "0x6581e59A1C8dA66eD0D313a0d4029DcE2F746Cc5",
            symbol: "STGUSDC",
            name: "Stable Collateral USD Coin",
            decimals: 18,
            thumbnail: "/_next/static/media/usdc.d3638d7e.png"
        }, {
            tokenAddress: "0x7EeCA4205fF31f947EdBd49195a7A88E6A91161B",
            symbol: "HONEY",
            name: "Honey",
            decimals: 18,
            thumbnail: u
        }, {
            tokenAddress: "0x9DAD8A1F64692adeB74ACa26129e0F16897fF4BB",
            symbol: "WBTC",
            name: "WBTC",
            decimals: 8,
            thumbnail: "/_next/static/media/btc.f97712cd.png"
        }, {
            tokenAddress: "0x8239FBb3e3D0C2cDFd7888D8aF7701240Ac4DcA4",
            symbol: "WETH",
            name: "WETH",
            decimals: 18,
            thumbnail: "/_next/static/media/eth.d979e274.png"
        }, {
            tokenAddress: "0x7f8E75356015fECfafF66e2B34F181A093Dc4519",
            symbol: "vdHONEY",
            name: "Honey Variable Debt Token",
            decimals: 18,
            thumbnail: u
        }, {
            tokenAddress: "0xc63FAb87Cb00249190577937Ab6E04dA0AE69633",
            symbol: "aHONEY",
            name: "Honey aToken",
            decimals: 18,
            thumbnail: u
        }];
        var p = a(63114)
          , h = a(72223)
          , y = a(36930);
        (n = s || (s = {})).BeraSig = "PLATFORM::BERASIG",
        n.Desig = "PLATFORM::DESIG";
        let x = {
            amountRaw: "0",
            symbol: "",
            name: "",
            tokenAddress: ""
        }
          , f = {
            amountRaw: "0",
            tokenAddress: "",
            ...h.g[h.q.Bera]
        }
          , b = (0,
        l.Ue)()((0,
        o.tJ)(e=>({
            localTokens: [],
            upsertLocalToken: t=>e((0,
            d.Uy)(e=>{
                let {localTokens: a} = e
                  , n = a.findIndex(e=>{
                    let {tokenAddress: a} = e;
                    return a && t.tokenAddress
                }
                );
                n < 0 ? a.push(t) : a.splice(n, 1)
            }
            )),
            setLocalTokens: t=>e({
                localTokens: t
            })
        }), {
            name: "Assets",
            storage: (0,
            o.FL)(()=>localStorage)
        }))
          , g = e=>{
            let t = (0,
            p.j1)()
              , {tokens: a} = k()
              , {localTokens: n} = b()
              , {native: s} = v()
              , i = (0,
            r.useMemo)(()=>n.find(t=>t.tokenAddress === e), [n, e])
              , {amountRaw: l, isLoading: o} = (0,
            p.VV)(null == i ? void 0 : i.tokenAddress);
            return {
                tokenData: (0,
                r.useMemo)(()=>t.isNative(e) && s ? s : i ? {
                    ...i,
                    amountRaw: l
                } : a.find(t=>t.tokenAddress === e) || x, [l, i, s, e, t, a]),
                loading: o
            }
        }
          , w = e=>"-"
          , v = ()=>{
            let e = (0,
            p.j1)()
              , {data: t} = (0,
            y.a)()
              , {data: a, isLoading: n} = (0,
            c.a)({
                queryKey: ["Bera-native-assets-".concat(t.address)],
                queryFn: async()=>await e.getNativeAsset(t.address),
                enabled: !!t.address,
                refetchOnMount: "always"
            });
            return {
                native: a || f,
                loading: n
            }
        }
          , k = ()=>{
            let e = (0,
            p.j1)()
              , {data: t} = (0,
            y.a)()
              , {data: a, isLoading: n} = (0,
            c.a)({
                queryKey: ["Bera-token-assets-".concat(t.address)],
                queryFn: async()=>await e.getTokenAssets(t.address),
                enabled: !!t.address,
                refetchOnMount: "always",
                refetchOnWindowFocus: "always"
            });
            return {
                tokens: a || [],
                loading: n
            }
        }
        ;
        function N(e) {
            let {children: t} = e
              , {setLocalTokens: a} = b()
              , {data: n} = (0,
            y.a)()
              , s = (0,
            r.useCallback)(async()=>{
                try {
                    if (!n.address)
                        return;
                    await a([...m])
                } catch (e) {
                    console.log(e)
                }
            }
            , [a, n.address]);
            return (0,
            r.useEffect)(()=>{
                s()
            }
            , [s]),
            (0,
            i.jsx)(r.Fragment, {
                children: t
            })
        }
    },
    77082: function(e, t) {
        t.Z = {
            src: "/_next/static/media/thief.c2f30622.svg",
            height: 63,
            width: 63,
            blurWidth: 0,
            blurHeight: 0
        }
    }
}]);
