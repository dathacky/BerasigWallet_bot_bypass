(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1077], {
    55553: function(n, e, h) {
        "use strict";
        h.d(e, {
            C: function() {
                return ModalAskUserLogint
            }
        });
        var t = h(85893);
        h(67294);
        var i = h(39028)
          , c = h.n(i)
          , x = h(82008)
          , g = h(3305)
          , a = h(67556)
          , o = h(45007)
          , _ = h(32600);
        h(60390);
        var l = h(11163)
          , r = h(13229)
          , s = h(14610)
          , d = h(41878)
          , ModalAskUserLogint = n => {
            let {isOpenModal: e, onClose: h= () => {}
            } = n
              , i = (0,
            o.I0)()
              , v = (0,
            l.useRouter)()
              , {languageTrans: u} = (0,
            r.Z)()
              , p = (0,
            s.Tc)(v.asPath.replace("/", ""));
            return (0,
            s.Tc)(""),
            e && (0,
            d.j)({
                eventName: "show_popup_sign_up"
            }),
            (0,
            t.jsx)(x.Z, {
                isOpenModal: e,
                imageIcon: a.Z,
                iconWidth: 200,
                iconTop: -130,
                closeModal: () => {
                    i((0,
                    _.uD)({
                        type: "showModal",
                        value: ""
                    }))
                }
                ,
                children: (0,
                t.jsxs)("div", {
                    className: c().wrapper,
                    children: [(0,
                    t.jsxs)("div", {
                        className: c().title,
                        children: [u.general.login_to_learn, " ", (0,
                        t.jsx)("br", {}), u.general.login_to_learn_second]
                    }), (0,
                    t.jsx)("div", {
                        className: c().button,
                        children: (0,
                        t.jsx)(g.z, {
                            text: u.general.create_an_account,
                            fullWidth: !0,
                            onClick: () => {
                                (0,
                                d.j)({
                                    eventName: "click_button_sign_up"
                                }),
                                v.push("".concat("https://accounts.mochidemy.com/", "register").concat(p, "&lang=").concat(v.locale))
                            }
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: c().button,
                        children: (0,
                        t.jsx)(g.z, {
                            text: u.general.login,
                            fullWidth: !0,
                            line: !0,
                            onClick: () => {
                                (0,
                                d.j)({
                                    eventName: "click_button_sign_in"
                                }),
                                v.push("".concat("https://accounts.mochidemy.com/").concat(p, "&lang=").concat(v.locale))
                            }
                        })
                    })]
                })
            })
        }
    },
    3240: function(n, e, h) {
        "use strict";
        h.r(e),
        h.d(e, {
            ModalLoginSuccess: function() {
                return modalLoginSuccess_ModalLoginSuccess
            }
        });
        var t = h(85893);
        h(67294);
        var i = h(72281)
          , c = h.n(i)
          , x = h(82008)
          , g = h(3305)
          , a = h(67556)
          , o = h(45007)
          , _ = h(32600)
          , l = h(11163)
          , r = h(13229)
          , modalLoginSuccess_ModalLoginSuccess = n => {
            let {isOpenModal: e=!0, onClose: h= () => {}
            } = n
              , i = (0,
            o.I0)()
              , s = (0,
            l.useRouter)()
              , handleClickInbox = () => {
                i((0,
                _.uD)({
                    type: "showModal",
                    value: ""
                })),
                i((0,
                _.ms)(!1)),
                s.push("/learn")
            }
              , {languageTrans: d} = (0,
            r.Z)();
            return (0,
            t.jsx)(x.Z, {
                isOpenModal: e,
                imageIcon: a.Z,
                iconWidth: 200,
                iconTop: -130,
                closeModal: handleClickInbox,
                children: (0,
                t.jsxs)("div", {
                    className: c().wrapper,
                    children: [(0,
                    t.jsx)("div", {
                        className: c().title,
                        children: d.general.you_have_success_logged_in
                    }), (0,
                    t.jsx)("div", {
                        className: c().button,
                        children: (0,
                        t.jsx)(g.z, {
                            text: d.general.start_your_lesson,
                            onClick: handleClickInbox
                        })
                    })]
                })
            })
        }
    },
    21077: function(n, e, h) {
        "use strict";
        h.d(e, {
            h: function() {
                return learn_LearnPage
            }
        });
        var t = h(85893)
          , i = h(67294)
          , c = h(45007)
          , x = h(11163)
          , g = h(84307)
          , a = h.n(g)
          , o = h(78786)
          , _ = h(83631)
          , l = h(51378)
          , r = h(80165)
          , s = h(29083)
          , d = h(55553)
          , v = h(60390)
          , u = h(32600)
          , p = h(33498)
          , m = h(12402)
          , f = h(28818)
          , b = h(59232)
          , A = h(44308)
          , k = h(41878)
          , y = h(13229)
          , q = {
            src: "/_next/static/media/mochi-learn-1.871ec240.webp",
            height: 2333,
            width: 1170,
            blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoEAAgAAkA4JaQAAuWrwoAA/vwkFeTKYbxd7shNAAA=",
            blurWidth: 4,
            blurHeight: 8
        }
          , S = {
            src: "/_next/static/media/mochi-learn-2.86ff8c1e.webp",
            height: 2353,
            width: 1170,
            blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoEAAgAAkA4JZwAAudj6ucAAP79wP9wRU7tTqWXgAA=",
            blurWidth: 4,
            blurHeight: 8
        }
          , C = {
            src: "/_next/static/media/mochi-learn-3.5a163214.webp",
            height: 2347,
            width: 1170,
            blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAABQAgCdASoEAAgAAkA4JZACdGuAt/8D0UKmZlAA/v3EO+bMloqtOiYg5eXhyXtM93Je0z91+Dr/VOVEDtm+TxIAAAA=",
            blurWidth: 4,
            blurHeight: 8
        }
          , w = {
            src: "/_next/static/media/SRS.03fb3b66.jpeg",
            height: 628,
            width: 1200,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsYP/xAAVEAEBAAAAAAAAAAAAAAAAAAAAQv/aAAgBAQABPwCn/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",
            blurWidth: 8,
            blurHeight: 4
        }
          , T = {
            how_to_learn_english_vocabulary_effectively: {
                title_h2: "C\xe1ch học từ vựng tiếng Anh hiệu quả",
                title_h3_first: "Học từ vựng theo chủ đề",
                description__h3_first: "Một trong những lời khuy\xean hữu \xedch nhất khi học từ vựng tiếng Anh l\xe0 học theo chủ đề. Đ\xe2y l\xe0 c\xe1ch gi\xfap bạn nắm bắt từ vựng mới một c\xe1ch hệ thống. Khi học 1000 từ vựng cơ bản được chia theo chủ đề với MochiVocab, bạn sẽ dễ d\xe0ng ghi nhớ v\xe0 li\xean kết c\xe1c từ với nhau, việc n\xe0y kh\xf4ng chỉ gi\xfap bạn học từ vựng m\xe0 c\xf2n mở rộng kiến thức về c\xe1c lĩnh vực kh\xe1c nhau. ",
                title_h3_second: "Sử dụng h\xecnh ảnh v\xe0 \xe2m thanh",
                description_h3_second: "Đ\xe2y l\xe0 một c\xe1ch học từ mới rất hiệu quả nhờ v\xe0o t\xe1c động mạnh mẽ của thị gi\xe1c đến bộ n\xe3o v\xe0 khả năng ghi nhớ. C\xe1ch n\xe0y sẽ hữu \xedch cho việc học từ vựng cơ bản về sự vật v\xe0 hiện tượng cụ thể trong đời sống h\xe0ng ng\xe0y. Bạn c\xf3 thể học từ vựng bằng flashcard với MochiVocab, mỗi từ vựng đều đi k\xe8m h\xecnh ảnh, \xe2m thanh ph\xe1t \xe2m v\xe0 c\xe2u v\xed dụ gi\xfap bạn dễ d\xe0ng ghi nhớ từ mới.",
                image_1: q,
                image_2: S,
                image_3: C,
                image_4: w,
                title_h3_third: "D\xe0nh thời gian \xf4n tập từ vựng",
                description_h3_third_1: "Đừng qu\xean \xf4n tập lại kiến thức mới sau khi học xong, v\xec n\xf3 gi\xfap tăng khả năng ghi nhớ v\xe0 vận dụng kiến thức. Một phương ph\xe1p \xf4n tập từ vựng kinh điển bạn n\xean \xe1p dụng l\xe0 Spaced Repetition (Kỹ thuật lặp lại ngắt qu\xe3ng). Bằng việc \xf4n tập lại từ mới v\xe0o đ\xfang thời điểm n\xe3o chuẩn bị qu\xean, khả năng ghi nhớ th\xf4ng tin đ\xf3 sẽ tăng l\xean đ\xe1ng kể. Thay v\xec mất thời gian \xf4n tập qu\xe1 nhiều lần trong ng\xe0y, bạn chỉ cần chọn đ\xfang thời điểm \xf4n để đạt được kết quả ghi nhớ tốt nhất. Đ\xe2y cũng ch\xednh l\xe0 kỹ thuật m\xe0 MochiVocab \xe1p dụng để tối ưu việc học của bạn, được thể hiện qua t\xednh năng “Thời điểm v\xe0ng”",
                description_h3_third_2: "Học từ vựng tiếng Anh l\xe0 một qu\xe1 tr\xecnh li\xean tục v\xe0 cần sự ki\xean nhẫn. Bằng c\xe1ch \xe1p dụng c\xe1c phương ph\xe1p tr\xean, bạn sẽ thấy việc học từ vựng trở n\xean dễ d\xe0ng v\xe0 hiệu quả hơn."
            },
            how_to_learn_basic_ielts_vocabulary_by_popular_topics: {
                title_h2: "C\xe1ch học từ vựng IELTS cơ bản theo chủ đề phổ biến",
                title_h3_first: "Học từ vựng theo chủ đề",
                description__h3_first: "Chứng chỉ tiếng Anh IELTS ng\xe0y c\xe0ng c\xf3 vị tr\xed quan trọng trong học tập v\xe0 c\xf4ng việc. (Để ch\xednh phục chứng chỉ n\xe0y, từ vựng đ\xf3ng vai tr\xf2 l\xe0m nền tảng, gi\xfap bạn sử dụng ng\xf4n ngữ linh hoạt trong 4 kỹ năng: Nghe, N\xf3i, Đọc, Viết). Trong đề thi IELTS thường xoay quanh c\xe1c chủ đề quen thuộc gắn liền với cuộc sống. V\xec vậy ph\xe2n loại từ vựng gi\xfap người học dễ d\xe0ng nắm bắt từ v\xe0 ghi nhớ hiệu quả nhất. Khi đến với MochiVocab với 120 chủ đề kh\xe1c nhau l\xean đến hơn 1000 từ vựng cơ bản th\xec việc học từ vựng l\xe0 một điều dễ d\xe0ng.",
                title_h3_second: "Học qua h\xecnh ảnh v\xe0 \xe2m thanh",
                description_h3_second: "Kh\xe1c với việc học từ vựng qua s\xe1ch, vở. Việc học từ vựng qua \xe2m thanh sinh động, dễ thương v\xe0 h\xecnh ảnh bắt mắt qua flashcard k\xedch th\xedch n\xe3o tăng khả năng ghi nhớ từ mới. C\xe1ch học n\xe0y l\xe0m cho việc học của bạn trở n\xean bớt nh\xe0m ch\xe1n v\xe0 thay v\xe0o đ\xf3 trở n\xean th\xedch th\xfa. Hơn cả vậy, việc học qua flashcard hỗ trợ bạn nghe ch\xednh x\xe1c hơn trong phần thi Listening.",
                image_1: q,
                image_2: S,
                image_3: C,
                image_4: w,
                title_h3_third: "Củng cố từ vựng",
                description_h3_third_1: "Thay v\xec chỉ học xong m\xe0 để qu\xean đấy th\xec h\xe3y cố gắng \xf4n tập những từ vựng mới m\xe0 m\xecnh đ\xe3 học, kh\xf4ng chỉ gi\xfap bạn l\xe0m quen dần m\xe0 c\xf2n gi\xfap bạn ghi nhớ l\xe2u d\xe0i. Kỳ thi Ielts trải d\xe0i nhiều từ vựng với c\xe1c chủ đề kh\xe1c nhau đ\xf2i hỏi bạn phải c\xf3 những vốn từ vựng nhất định. H\xe3y d\xe0nh thời gian trải nghiệm MochiVocab với kỹ thuật Spaced Repetition (lặp lại ngắt qu\xe3ng) trong t\xednh năng ''Thời điểm v\xe0ng'' để tối ưu việc học từ vựng của bạn",
                description_h3_third_2: "C\xf9ng MochiVocab củng cố kiến thức nền thật tốt để chinh phục kỳ thi IELTS với band điểm cao nh\xe9!"
            },
            how_to_learn_common_basic_ielts_phrases: {
                title_h2: "C\xe1ch học c\xe1c cụm từ IELTS cơ bản thường gặp",
                title_h3_first: "Học từ vựng theo chủ đề",
                description__h3_first: "Cụm từ IELTS hay c\xf2n gọi l\xe0 Phrasal Verb trong IELTS l\xe0 một phần quan trọng của b\xe0i thi, gi\xfap tăng điểm phần Speaking v\xe0 Writing. Học cụm từ theo chủ đề l\xe0 một phương ph\xe1p hữu \xedch gi\xfap bạn nắm bắt từ vựng một c\xe1ch c\xf3 hệ thống. Khi học c\xe1c cụm từ IELTS với MochiVocab, việc ph\xe2n chia theo chủ đề sẽ gi\xfap bạn dễ d\xe0ng ghi nhớ v\xe0 li\xean kết c\xe1c cụm từ n\xe0y với nhau, từ đ\xf3 n\xe2ng cao khả năng sử dụng ng\xf4n ngữ trong c\xe1c t\xecnh huống thực tế.",
                title_h3_second: "Sử dụng h\xecnh ảnh v\xe0 \xe2m thanh",
                description_h3_second: "Học từ vựng qua h\xecnh ảnh v\xe0 \xe2m thanh l\xe0 một phương ph\xe1p rất hiệu quả. Thay v\xec học thuộc l\xf2ng một c\xe1ch nh\xe0m ch\xe1n, việc sử dụng c\xe1c h\xecnh ảnh m\xe0u sắc v\xe0 \xe2m thanh sinh động sẽ k\xedch th\xedch tr\xed nhớ của bạn. MochiVocab cung cấp hơn 1000 cụm từ IELTS được thiết kế tr\xean flashcard với h\xecnh ảnh minh họa v\xe0 v\xed dụ cụ thể, gi\xfap việc học trở n\xean th\xfa vị v\xe0 dễ d\xe0ng hơn.",
                image_1: q,
                image_2: S,
                image_3: C,
                image_4: w,
                title_h3_third: "D\xe0nh thời gian \xf4n tập",
                description_h3_third_1: '\xd4n tập l\xe0 một phần kh\xf4ng thể thiếu trong qu\xe1 tr\xecnh học từ vựng. D\xe0nh một ch\xfat thời gian mỗi ng\xe0y để \xf4n lại c\xe1c cụm từ đ\xe3 học sẽ gi\xfap bạn ghi nhớ l\xe2u hơn. Phương ph\xe1p Spaced Repetition (Kỹ thuật lặp lại ngắt qu\xe3ng) l\xe0 một c\xf4ng cụ hữu \xedch trong việc \xf4n tập. Bằng c\xe1ch \xf4n lại từ vựng v\xe0o thời điểm n\xe3o bộ chuẩn bị qu\xean, bạn sẽ tăng khả năng ghi nhớ một c\xe1ch đ\xe1ng kể. MochiVocab cũng \xe1p dụng phương ph\xe1p n\xe0y với t\xednh năng "Thời điểm v\xe0ng", nhắc nhở bạn \xf4n tập đ\xfang l\xfac để đạt hiệu quả tốt nhất.',
                description_h3_third_2: "Bằng c\xe1ch \xe1p dụng c\xe1c phương ph\xe1p học từ vựng th\xf4ng minh v\xe0 \xf4n tập đều đặn, bạn sẽ nhanh ch\xf3ng nắm vững v\xe0 sử dụng th\xe0nh thạo c\xe1c cụm từ IELTS cơ bản thường gặp trong giao tiếp v\xe0 trong b\xe0i thi. H\xe3y bắt đầu h\xe0nh tr\xecnh học tập của m\xecnh ngay h\xf4m nay với MochiVocab v\xe0 tự tin chinh phục kỳ thi IELTS!"
            },
            how_to_learn_ielts_vocabulary_by_topic_to_help_you_score_high: {
                title_h2: "C\xe1ch học từ vựng IELTS theo chủ đề gi\xfap bạn đạt điểm cao",
                title_h3_first: "Học từ vựng hiệu quả",
                description__h3_first: "Để đạt được band điểm IELTS cao kh\xf4ng kh\xf4ng phải một điều dễ d\xe0ng. Kiến thức của bạn kh\xf4ng chỉ xoay quanh c\xe1c chủ đề IELTS cơ bản, gắn với cuộc sống h\xe0ng ng\xe0y m\xe0 c\xf2n phải n\xe2ng cao vốn từ vựng ở mức độ s\xe2u rộng hơn thế nữa. Bạn h\xe3y n\xe2ng cấp cho m\xecnh 500 từ vựng IELTS n\xe2ng cao trong band 7.5 đến 8.0 từ MochiVocab để tự tin cải thiện 4 kỹ năng Nghe  - N\xf3i - Đọc - Viết.",
                title_h3_second: "Sử dụng h\xecnh ảnh v\xe0 \xe2m thanh",
                description_h3_second: "Để c\xf3 thể gi\xe0nh điểm số cao trong kỳ thi IELTS cũng cần một c\xe1ch học c\xe1ch học th\xf4ng minh v\xe0 đem đến hiệu quả. MochiVocab sẽ l\xe0 một c\xf4ng cụ hỗ trợ ho\xe0n hảo gi\xfap bạn học th\xf4ng qua thị gi\xe1c, k\xedch th\xedch n\xe3o bộ cho bạn bằng kho t\xe0ng flashcard ngập tr\xe0n m\xe0u sắc, h\xecnh ảnh r\xf5 n\xe9t, \xe2m thanh sinh động v\xe0 r\xf5 r\xe0ng gi\xfap bạn nghe ch\xednh x\xe1c c\xe1ch ph\xe1t \xe2m của những từ vựng kh\xf3 v\xe0 gi\xfap bạn dễ d\xe0ng ghi nhớ v\xe0 lặp lại phục vụ cho kỹ năng Speaking v\xe0 Listening.",
                image_1: q,
                image_2: S,
                image_3: C,
                image_4: w,
                title_h3_third: "D\xe0nh thời gian \xf4n tập",
                description_h3_third_1: "Chắc hẳn, nếu bạn đang c\xf3 mục ti\xeau gi\xe0nh điểm cao th\xec kỳ thi n\xe0y sẽ cần khoảng thời gian \xf4n tập l\xe2u d\xe0i v\xe0 những \xe1p lực tr\xean vai. MochiVocab hiểu được sự kh\xf3 khăn đ\xf3 n\xean đ\xe3 thiết kế cho bạn học \xe1p dụng phương phương ph\xe1p Spaced Repetition hay c\xf2n gọi l\xe0 Kỹ thuật lặp lại ngắt qu\xe3ng tối ưu thời gian học của bạn bằng c\xe1ch \xf4n tập từ vựng v\xe0o thời điểm n\xe3o bộ sắp qu\xean từ vựng song h\xe0nh với t\xednh năng ''Thời điểm v\xe0ng'' nhắc nhở bạn n\xean chọn khung giờ n\xe0o để ghi nhớ từ vựng. T\xednh năng n\xe0y gi\xfap bạn tối ưu h\xf3a việc học từ vựng phục vụ bạn giải quyết c\xe1c c\xe2u hỏi trong kỳ thi IELTS",
                description_h3_third_2: "\xc1p dụng c\xe1c phương ph\xe1p học hiệu quả v\xe0 \xf4n tập đều đặn, bạn sẽ dễ d\xe0ng đạt được điểm cao trong kỳ thi IELTS. H\xe3y bắt đầu học từ vựng theo chủ đề ngay h\xf4m nay với MochiVocab v\xe0 tiến gần hơn đến mục ti\xeau IELTS của m\xecnh!"
            },
            how_to_learn_more_than_1000_common_phrasal_verbs: {
                title_h2: "C\xe1ch học 1000+ cụm động từ (phrasal verb) thường gặp",
                title_h3_first: "Học từ vựng theo chủ đề",
                description__h3_first: "Phrasal Verb hay Cụm động từ l\xe0 một nh\xe1nh kiến thức tiếng Anh quan trọng, g\xe2y kh\xf3 khăn cho người học đ\xf2i hỏi người học phải danh thời gian, c\xf4ng sức để luyện tập. Lời khuy\xean đầu ti\xean h\xe3y học Phrasal Verb theo từng chủ điểm kh\xe1c nhau. C\xe1ch học n\xe0y gi\xfap bạn nắm bắt được từ vựng một c\xe1ch c\xf3 trật tự. Khi truy cập v\xe0o MochiVocab, việc học 1000 cụm động từ cơ bản được chia theo chủ đề sẽ gi\xfap bạn ghi nhớ hiệu quả.",
                title_h3_second: "Sử dụng h\xecnh ảnh v\xe0 \xe2m thanh",
                description_h3_second: "Kh\xe1c xa với phương ph\xe1p học th\xf4ng thường, nhờ c\xf3 sự k\xedch th\xedch của thị gi\xe1c tiếp x\xfac c\xe1c h\xecnh ảnh m\xe0u sắc rạng rỡ, \xe2m thanh sinh động, r\xf5 r\xe0ng th\xf4ng qua kho t\xe0ng hơn 1000 Phrasal Verb được l\xe0m tr\xean flashcard đ\xednh k\xe8m v\xed dụ đơn giản gi\xfap việc ghi nhớ Phrasal Verb chỉ l\xe0 chuyện nhỏ ",
                image_1: q,
                image_2: S,
                image_3: C,
                image_4: w,
                title_h3_third: "D\xe0nh thời gian \xf4n tập",
                description_h3_third_1: "H\xe3y d\xe0nh một ch\xfat thời gian trong ng\xe0y, tổng quan, học lại những cụm động từ m\xecnh vừa học, điều n\xe0y kh\xf4ng chi gi\xfap cho n\xe3o bộ ghi nhớ ở thời điểm học v\xe0 về l\xe2u về d\xe0i. Bạn h\xe3y thử \xe1p dụng phương ph\xe1p Space Repetition hay c\xf2n gọi l\xe0 Kỹ thuật lặp lại ngắt qu\xe3ng tối ưu thời gian học của bạn bằng c\xe1ch \xf4n tập từ vựng v\xe0o thời điểm n\xe3o bộ sắp qu\xean từ vựng. Điều th\xfa vị ở đ\xe2y l\xe0 MochiVocab cũng đang \xe1p dụng phương ph\xe1p n\xe0y đi k\xe8m với t\xednh năng ''Thời điểm v\xe0ng'' nhắc nhở bạn n\xean học từ vựng v\xe0o thời điểm v\xe0o để việc tăng khả năng ghi nhớ th\xf4ng tin hiệu quả.",
                description_h3_third_2: "Bằng c\xe1ch \xe1p dụng c\xe1c phương ph\xe1p học từ vựng th\xf4ng minh v\xe0 \xf4n tập đều đặn, bạn sẽ nhanh ch\xf3ng nắm vững v\xe0 sử dụng th\xe0nh thạo c\xe1c cụm động từ quan trọng n\xe0y trong giao tiếp h\xe0ng ng\xe0y v\xe0 trong c\xf4ng việc. H\xe3y bắt đầu h\xe0nh tr\xecnh học tập của m\xecnh ngay h\xf4m nay với MochiVocab v\xe0 tự tin chinh phục tiếng Anh!"
            },
            how_to_learn_1000_common_toeic_vocabulary_by_topic: {
                title_h2: "C\xe1ch học 1000 từ vựng TOEIC th\xf4ng dụng theo chủ đề",
                title_h3_first: "Học từ vựng theo chủ đề",
                description__h3_first: "Việc học từ vựng TOEIC theo chủ đề l\xe0 một phương ph\xe1p hữu \xedch gi\xfap bạn nắm bắt từ vựng một c\xe1ch c\xf3 hệ thống v\xe0 hiệu quả. Khi học 1000 từ vựng TOEIC th\xf4ng dụng được ph\xe2n chia theo từng chủ đề với MochiVocab, bạn sẽ dễ d\xe0ng ghi nhớ v\xe0 li\xean kết c\xe1c từ với nhau. C\xe1ch học n\xe0y kh\xf4ng chỉ gi\xfap bạn học từ vựng một c\xe1ch c\xf3 trật tự m\xe0 c\xf2n mở rộng kiến thức về c\xe1c lĩnh vực kh\xe1c nhau, từ đ\xf3 n\xe2ng cao khả năng sử dụng ng\xf4n ngữ trong b\xe0i thi TOEIC.",
                title_h3_second: "Sử dụng h\xecnh ảnh v\xe0 \xe2m thanh",
                description_h3_second: "Học từ vựng qua h\xecnh ảnh v\xe0 \xe2m thanh l\xe0 một phương ph\xe1p rất hiệu quả, đặc biệt với từ vựng li\xean quan đến b\xe0i thi TOEIC. Thay v\xec học thuộc l\xf2ng một c\xe1ch nh\xe0m ch\xe1n, việc sử dụng c\xe1c h\xecnh ảnh m\xe0u sắc v\xe0 \xe2m thanh sinh động sẽ k\xedch th\xedch tr\xed nhớ của bạn. MochiVocab cung cấp c\xe1c từ vựng TOEIC được thiết kế tr\xean flashcard với h\xecnh ảnh minh họa v\xe0 v\xed dụ cụ thể, gi\xfap việc học trở n\xean th\xfa vị v\xe0 dễ d\xe0ng hơn.",
                image_1: q,
                image_2: S,
                image_3: C,
                image_4: w,
                title_h3_third: "D\xe0nh thời gian \xf4n tập",
                description_h3_third_1: '\xd4n tập l\xe0 một phần kh\xf4ng thể thiếu trong qu\xe1 tr\xecnh học từ vựng. D\xe0nh một ch\xfat thời gian mỗi ng\xe0y để \xf4n lại c\xe1c từ đ\xe3 học sẽ gi\xfap bạn ghi nhớ l\xe2u hơn. Phương ph\xe1p Spaced Repetition (Kỹ thuật lặp lại ngắt qu\xe3ng) l\xe0 một c\xf4ng cụ hữu \xedch trong việc \xf4n tập. Bằng c\xe1ch \xf4n lại từ vựng v\xe0o thời điểm n\xe3o bộ chuẩn bị qu\xean, bạn sẽ tăng khả năng ghi nhớ một c\xe1ch đ\xe1ng kể. MochiVocab cũng \xe1p dụng phương ph\xe1p n\xe0y với t\xednh năng "Thời điểm v\xe0ng", nhắc nhở bạn \xf4n tập đ\xfang l\xfac để đạt hiệu quả tốt nhất.',
                description_h3_third_2: "Bằng c\xe1ch \xe1p dụng c\xe1c phương ph\xe1p học từ vựng th\xf4ng minh v\xe0 \xf4n tập đều đặn, bạn sẽ nhanh ch\xf3ng nắm vững v\xe0 sử dụng th\xe0nh thạo c\xe1c từ vựng TOEIC th\xf4ng dụng trong giao tiếp v\xe0 trong b\xe0i thi. H\xe3y bắt đầu h\xe0nh tr\xecnh học tập của m\xecnh ngay h\xf4m nay với MochiVocab v\xe0 tự tin chinh phục kỳ thi TOEIC!"
            },
            how_to_effectively_learn_English_vocabulary_for_the_national_high_school_exam: {
                title_h2: "C\xe1ch học từ vựng tiếng Anh thi THPT Quốc gia hiệu quả",
                title_h3_first: "Học từ vựng theo chủ đề",
                description__h3_first: "Để đạt kết quả tốt trong kỳ thi THPT Quốc gia, việc học từ vựng theo chủ đề l\xe0 rất quan trọng. Khi học 20 chủ đề từ vựng thiết yếu, bạn sẽ c\xf3 một hệ thống từ vựng vững chắc, gi\xfap bạn dễ d\xe0ng li\xean kết v\xe0 ghi nhớ c\xe1c từ. Việc học theo chủ đề kh\xf4ng chỉ gi\xfap bạn mở rộng vốn từ m\xe0 c\xf2n tăng cường kiến thức về nhiều lĩnh vực kh\xe1c nhau.",
                title_h3_second: "Sử dụng h\xecnh ảnh v\xe0 \xe2m thanh",
                description_h3_second: "Học từ vựng qua h\xecnh ảnh v\xe0 \xe2m thanh l\xe0 một phương ph\xe1p rất hiệu quả. Bằng c\xe1ch n\xe0y, bạn c\xf3 thể tận dụng sức mạnh của thị gi\xe1c v\xe0 th\xednh gi\xe1c để ghi nhớ từ vựng l\xe2u hơn. H\xe3y sử dụng flashcard c\xf3 h\xecnh ảnh minh họa v\xe0 \xe2m thanh ph\xe1t \xe2m chuẩn để học từ mới. C\xe1c v\xed dụ cụ thể k\xe8m theo sẽ gi\xfap bạn hiểu r\xf5 hơn về c\xe1ch sử dụng từ trong ngữ cảnh thực tế.",
                image_1: q,
                image_2: S,
                image_3: C,
                image_4: w,
                title_h3_third: "D\xe0nh thời gian \xf4n tập",
                description_h3_third_1: "Đừng qu\xean \xf4n tập lại kiến thức mới sau khi học xong, v\xec n\xf3 gi\xfap tăng khả năng ghi nhớ v\xe0 vận dụng kiến thức. Một phương ph\xe1p \xf4n tập từ vựng kinh điển bạn n\xean \xe1p dụng l\xe0 Spaced Repetition (Kỹ thuật lặp lại ngắt qu\xe3ng). Bằng việc \xf4n tập lại từ mới v\xe0o đ\xfang thời điểm n\xe3o chuẩn bị qu\xean, khả năng ghi nhớ th\xf4ng tin đ\xf3 sẽ tăng l\xean đ\xe1ng kể. Thay v\xec mất thời gian \xf4n tập qu\xe1 nhiều lần trong ng\xe0y, bạn chỉ cần chọn đ\xfang thời điểm \xf4n để đạt được kết quả ghi nhớ tốt nhất. Đ\xe2y cũng ch\xednh l\xe0 kỹ thuật m\xe0 MochiVocab \xe1p dụng để tối ưu việc học của bạn, được thể hiện qua t\xednh năng “Thời điểm v\xe0ng”",
                description_h3_third_2: "Học từ vựng tiếng Anh cho kỳ thi THPT Quốc gia đ\xf2i hỏi sự ki\xean nhẫn v\xe0 phương ph\xe1p học hiệu quả. Bằng c\xe1ch \xe1p dụng c\xe1c phương ph\xe1p tr\xean, bạn sẽ thấy việc học từ vựng trở n\xean dễ d\xe0ng v\xe0 th\xfa vị hơn, gi\xfap bạn tự tin đạt điểm cao trong kỳ thi quan trọng n\xe0y."
            },
            how_to_learn_english_vocabulary_for_tourism_effectively: {
                title_h2: "C\xe1ch học từ vựng tiếng Anh chuy\xean ng\xe0nh du lịch hiệu quả",
                title_h3_first: "Chia nhỏ từ vựng theo từng b\xe0i học nhỏ",
                description__h3_first: "Để học từ vựng tiếng Anh chuy\xean ng\xe0nh du lịch hiệu quả, bạn n\xean chia lượng từ vựng th\xe0nh c\xe1c b\xe0i học nhỏ. Mỗi ng\xe0y, học một nh\xf3m từ vựng nhất định sẽ gi\xfap bạn kh\xf4ng bị qu\xe1 tải v\xe0 dễ d\xe0ng ghi nhớ. Bằng c\xe1ch n\xe0y, bạn c\xf3 thể dần dần x\xe2y dựng vốn từ vựng của m\xecnh một c\xe1ch vững chắc v\xe0 bền vững. Việc học từng ch\xfat một cũng gi\xfap bạn duy tr\xec sự hứng th\xfa v\xe0 động lực trong qu\xe1 tr\xecnh học tập.",
                title_h3_second: "Sử dụng h\xecnh ảnh v\xe0 \xe2m thanh",
                description_h3_second: "Học từ vựng qua h\xecnh ảnh v\xe0 \xe2m thanh l\xe0 một phương ph\xe1p rất hiệu quả, đặc biệt với từ vựng chuy\xean ng\xe0nh du lịch. Bằng c\xe1ch n\xe0y, bạn c\xf3 thể tận dụng sức mạnh của thị gi\xe1c v\xe0 th\xednh gi\xe1c để ghi nhớ từ vựng l\xe2u hơn. H\xe3y sử dụng flashcard c\xf3 h\xecnh ảnh minh họa v\xe0 \xe2m thanh ph\xe1t \xe2m chuẩn để học từ mới. C\xe1c v\xed dụ cụ thể k\xe8m theo sẽ gi\xfap bạn hiểu r\xf5 hơn về c\xe1ch sử dụng từ trong ngữ cảnh thực tế.",
                image_1: q,
                image_2: S,
                image_3: C,
                image_4: w,
                title_h3_third: "D\xe0nh thời gian \xf4n tập từ vựng",
                description_h3_third_1: "Đừng qu\xean \xf4n tập lại kiến thức mới sau khi học xong, v\xec n\xf3 gi\xfap tăng khả năng ghi nhớ v\xe0 vận dụng kiến thức. Một phương ph\xe1p \xf4n tập từ vựng kinh điển bạn n\xean \xe1p dụng l\xe0 Spaced Repetition (Kỹ thuật lặp lại ngắt qu\xe3ng). Bằng việc \xf4n tập lại từ mới v\xe0o đ\xfang thời điểm n\xe3o chuẩn bị qu\xean, khả năng ghi nhớ th\xf4ng tin đ\xf3 sẽ tăng l\xean đ\xe1ng kể. Thay v\xec mất thời gian \xf4n tập qu\xe1 nhiều lần trong ng\xe0y, bạn chỉ cần chọn đ\xfang thời điểm \xf4n để đạt được kết quả ghi nhớ tốt nhất. Đ\xe2y cũng ch\xednh l\xe0 kỹ thuật m\xe0 MochiVocab \xe1p dụng để tối ưu việc học của bạn, được thể hiện qua t\xednh năng “Thời điểm v\xe0ng”",
                description_h3_third_2: "Học từ vựng tiếng Anh chuy\xean ng\xe0nh du lịch đ\xf2i hỏi phương ph\xe1p học hiệu quả v\xe0 li\xean tục \xe1p dụng v\xe0o cuộc sống. Bằng c\xe1ch \xe1p dụng c\xe1c phương ph\xe1p tr\xean, bạn sẽ thấy việc học từ vựng trở n\xean dễ d\xe0ng v\xe0 th\xfa vị hơn, gi\xfap bạn tự tin hơn trong ng\xe0nh du lịch v\xe0 giao tiếp h\xe0ng ng\xe0y."
            },
            how_to_learn_english_vocabulary_on_the_topic_office_life_effectively: {
                title_h2: "C\xe1ch học từ vựng tiếng Anh chủ đề Đời sống c\xf4ng sở hiệu quả",
                title_h3_first: "Chia nhỏ từ vựng theo từng b\xe0i học nhỏ",
                description__h3_first: "Để học từ vựng tiếng Anh chủ đề Đời sống c\xf4ng sở hiệu quả, bạn n\xean chia lượng từ vựng th\xe0nh c\xe1c b\xe0i học nhỏ. Mỗi ng\xe0y, học một nh\xf3m từ vựng nhất định sẽ gi\xfap bạn kh\xf4ng bị qu\xe1 tải v\xe0 dễ d\xe0ng ghi nhớ. Bằng c\xe1ch n\xe0y, bạn c\xf3 thể dần dần x\xe2y dựng vốn từ vựng của m\xecnh một c\xe1ch vững chắc v\xe0 bền vững. Việc học từng ch\xfat một cũng gi\xfap bạn duy tr\xec sự hứng th\xfa v\xe0 động lực trong qu\xe1 tr\xecnh học tập.",
                title_h3_second: "Sử dụng h\xecnh ảnh v\xe0 \xe2m thanh",
                description_h3_second: "Học từ vựng qua h\xecnh ảnh v\xe0 \xe2m thanh l\xe0 một phương ph\xe1p rất hiệu quả, đặc biệt với từ vựng li\xean quan đến đời sống c\xf4ng sở. Bằng c\xe1ch n\xe0y, bạn c\xf3 thể tận dụng sức mạnh của thị gi\xe1c v\xe0 th\xednh gi\xe1c để ghi nhớ từ vựng l\xe2u hơn. H\xe3y sử dụng flashcard c\xf3 h\xecnh ảnh minh họa v\xe0 \xe2m thanh ph\xe1t \xe2m chuẩn để học từ mới. C\xe1c v\xed dụ cụ thể k\xe8m theo sẽ gi\xfap bạn hiểu r\xf5 hơn về c\xe1ch sử dụng từ trong ngữ cảnh thực tế.",
                image_1: q,
                image_2: S,
                image_3: C,
                image_4: w,
                title_h3_third: "D\xe0nh thời gian \xf4n tập từ vựng",
                description_h3_third_1: "Đừng qu\xean \xf4n tập lại kiến thức mới sau khi học xong, v\xec n\xf3 gi\xfap tăng khả năng ghi nhớ v\xe0 vận dụng kiến thức. Một phương ph\xe1p \xf4n tập từ vựng kinh điển bạn n\xean \xe1p dụng l\xe0 Spaced Repetition (Kỹ thuật lặp lại ngắt qu\xe3ng). Bằng việc \xf4n tập lại từ mới v\xe0o đ\xfang thời điểm n\xe3o chuẩn bị qu\xean, khả năng ghi nhớ th\xf4ng tin đ\xf3 sẽ tăng l\xean đ\xe1ng kể. Thay v\xec mất thời gian \xf4n tập qu\xe1 nhiều lần trong ng\xe0y, bạn chỉ cần chọn đ\xfang thời điểm \xf4n để đạt được kết quả ghi nhớ tốt nhất. Đ\xe2y cũng ch\xednh l\xe0 kỹ thuật m\xe0 MochiVocab \xe1p dụng để tối ưu việc học của bạn, được thể hiện qua t\xednh năng “Thời điểm v\xe0ng”",
                description_h3_third_2: "Học từ vựng tiếng Anh chủ đề Đời sống c\xf4ng sở đ\xf2i hỏi phương ph\xe1p học hiệu quả v\xe0 li\xean tục \xe1p dụng v\xe0o cuộc sống. Bằng c\xe1ch \xe1p dụng c\xe1c phương ph\xe1p tr\xean, bạn sẽ thấy việc học từ vựng trở n\xean dễ d\xe0ng v\xe0 th\xfa vị hơn, gi\xfap bạn tự tin hơn trong m\xf4i trường c\xf4ng sở v\xe0 giao tiếp h\xe0ng ng\xe0y."
            },
            how_to_learn_english_vocabulary_related_to_information_technology_effectively: {
                title_h2: "C\xe1ch học từ vựng tiếng Anh chủ đề C\xf4ng nghệ th\xf4ng tin hiệu quả",
                title_h3_first: "Chia nhỏ từ vựng theo từng b\xe0i học nhỏ",
                description__h3_first: "Để học từ vựng tiếng Anh chủ đề C\xf4ng nghệ th\xf4ng tin hiệu quả, bạn n\xean chia lượng từ vựng th\xe0nh c\xe1c b\xe0i học nhỏ. Mỗi ng\xe0y, học một nh\xf3m từ vựng nhất định sẽ gi\xfap bạn kh\xf4ng bị qu\xe1 tải v\xe0 dễ d\xe0ng ghi nhớ. Bằng c\xe1ch n\xe0y, bạn c\xf3 thể dần dần x\xe2y dựng vốn từ vựng của m\xecnh một c\xe1ch vững chắc v\xe0 bền vững. Việc học từng ch\xfat một cũng gi\xfap bạn duy tr\xec sự hứng th\xfa v\xe0 động lực trong qu\xe1 tr\xecnh học tập.",
                title_h3_second: "Sử dụng h\xecnh ảnh v\xe0 \xe2m thanh",
                description_h3_second: "Học từ vựng qua h\xecnh ảnh v\xe0 \xe2m thanh l\xe0 một phương ph\xe1p rất hiệu quả, đặc biệt với từ vựng li\xean quan đến c\xf4ng nghệ th\xf4ng tin. Bằng c\xe1ch n\xe0y, bạn c\xf3 thể tận dụng sức mạnh của thị gi\xe1c v\xe0 th\xednh gi\xe1c để ghi nhớ từ vựng l\xe2u hơn. H\xe3y sử dụng flashcard c\xf3 h\xecnh ảnh minh họa v\xe0 \xe2m thanh ph\xe1t \xe2m chuẩn để học từ mới. C\xe1c v\xed dụ cụ thể k\xe8m theo sẽ gi\xfap bạn hiểu r\xf5 hơn về c\xe1ch sử dụng từ trong ngữ cảnh thực tế.",
                image_1: q,
                image_2: S,
                image_3: C,
                image_4: w,
                title_h3_third: "D\xe0nh thời gian \xf4n tập từ vựng",
                description_h3_third_1: "Đừng qu\xean \xf4n tập lại kiến thức mới sau khi học xong, v\xec n\xf3 gi\xfap tăng khả năng ghi nhớ v\xe0 vận dụng kiến thức. Một phương ph\xe1p \xf4n tập từ vựng kinh điển bạn n\xean \xe1p dụng l\xe0 Spaced Repetition (Kỹ thuật lặp lại ngắt qu\xe3ng). Bằng việc \xf4n tập lại từ mới v\xe0o đ\xfang thời điểm n\xe3o chuẩn bị qu\xean, khả năng ghi nhớ th\xf4ng tin đ\xf3 sẽ tăng l\xean đ\xe1ng kể. Thay v\xec mất thời gian \xf4n tập qu\xe1 nhiều lần trong ng\xe0y, bạn chỉ cần chọn đ\xfang thời điểm \xf4n để đạt được kết quả ghi nhớ tốt nhất. Đ\xe2y cũng ch\xednh l\xe0 kỹ thuật m\xe0 MochiVocab \xe1p dụng để tối ưu việc học của bạn, được thể hiện qua t\xednh năng “Thời điểm v\xe0ng”",
                description_h3_third_2: "Học từ vựng tiếng Anh chủ đề C\xf4ng nghệ th\xf4ng tin đ\xf2i hỏi phương ph\xe1p học hiệu quả v\xe0 li\xean tục \xe1p dụng v\xe0o c\xf4ng việc hằng ng\xe0y. Bằng c\xe1ch \xe1p dụng c\xe1c phương ph\xe1p tr\xean, bạn sẽ thấy việc học từ vựng trở n\xean dễ d\xe0ng v\xe0 th\xfa vị hơn, gi\xfap bạn tự tin hơn trong m\xf4i trường c\xf4ng nghệ v\xe0 giao tiếp h\xe0ng ng\xe0y."
            },
            how_to_learn_english_vocabulary_for_grade_according_to_each_lesson_of_the_latest_program: {
                title_h2_before_grade: "C\xe1ch học từ vựng tiếng Anh lớp ",
                title_h2_after_grade: " theo từng Unit chương tr\xecnh mới nhất",
                title_h3_first: "Học từ vựng theo từng Unit",
                description__h3_first_before_grade: "Một trong những c\xe1ch hiệu quả nhất để học từ vựng tiếng Anh lớp ",
                description__h3_first_after_grade: " l\xe0 học theo từng Unit trong chương tr\xecnh mới. Phương ph\xe1p n\xe0y gi\xfap học sinh nắm bắt từ vựng một c\xe1ch c\xf3 hệ thống v\xe0 li\xean quan đến nội dung học tập tr\xean lớp. Khi học từ vựng theo từng Unit, học sinh sẽ dễ d\xe0ng ghi nhớ v\xe0 sử dụng từ vựng trong ngữ cảnh cụ thể, từ đ\xf3 n\xe2ng cao khả năng ng\xf4n ngữ v\xe0 hiểu b\xe0i tốt hơn.",
                title_h3_second: "Sử dụng h\xecnh ảnh v\xe0 \xe2m thanh",
                description_h3_second_before_grade: "Sử dụng h\xecnh ảnh v\xe0 \xe2m thanh l\xe0 một c\xe1ch học từ vựng rất hiệu quả, đặc biệt đối với c\xe1c em học sinh lớp ",
                description_h3_second_after_grade: ". Phương ph\xe1p n\xe0y khai th\xe1c tối đa khả năng ghi nhớ của n\xe3o bộ th\xf4ng qua thị gi\xe1c v\xe0 th\xednh gi\xe1c. Học sinh c\xf3 thể sử dụng flashcard với h\xecnh ảnh minh họa sinh động v\xe0 \xe2m thanh ph\xe1t \xe2m chuẩn x\xe1c. V\xed dụ, với mỗi từ vựng trong Unit, học sinh sẽ được tiếp cận th\xf4ng qua h\xecnh ảnh, \xe2m thanh v\xe0 c\xe2u v\xed dụ thực tế, gi\xfap việc học trở n\xean th\xfa vị v\xe0 dễ nhớ hơn.",
                image_1: q,
                image_2: S,
                image_3: C,
                image_4: w,
                title_h3_third: "D\xe0nh thời gian \xf4n tập từ vựng",
                description_h3_third_1: "\xd4n tập l\xe0 một phần quan trọng trong qu\xe1 tr\xecnh học từ vựng. Một phương ph\xe1p \xf4n tập từ vựng kinh điển bạn n\xean \xe1p dụng l\xe0 Spaced Repetition (Kỹ thuật lặp lại ngắt qu\xe3ng). Bằng việc \xf4n tập lại từ mới v\xe0o đ\xfang thời điểm n\xe3o chuẩn bị qu\xean, khả năng ghi nhớ th\xf4ng tin đ\xf3 sẽ tăng l\xean đ\xe1ng kể. Thay v\xec mất thời gian \xf4n tập qu\xe1 nhiều lần trong ng\xe0y, bạn chỉ cần chọn đ\xfang thời điểm \xf4n để đạt được kết quả ghi nhớ tốt nhất. Đ\xe2y cũng ch\xednh l\xe0 kỹ thuật m\xe0 MochiVocab \xe1p dụng để tối ưu việc học của bạn, được thể hiện qua t\xednh năng “Thời điểm v\xe0ng”",
                description_h3_third_2_before_grade: "Học từ vựng tiếng Anh lớp ",
                description_h3_third_2_after_grade: " l\xe0 một qu\xe1 tr\xecnh li\xean tục v\xe0 đ\xf2i hỏi sự ki\xean nhẫn. Bằng c\xe1ch \xe1p dụng c\xe1c phương ph\xe1p tr\xean, học sinh sẽ thấy việc học từ vựng trở n\xean dễ d\xe0ng v\xe0 hiệu quả hơn, gi\xfap c\xe1c em tự tin hơn trong việc sử dụng tiếng Anh."
            }
        }
          , j = h(5152)
          , L = h.n(j)
          , I = h(3240)
          , E = h(27387)
          , B = h.n(E)
          , M = h(25675)
          , H = h.n(M);
        function ContentBottom(n) {
            let {contentLearnPage: e, grade: h} = n;
            return (0,
            t.jsx)(t.Fragment, {
                children: (0,
                t.jsxs)("div", {
                    className: B().contentLearnPage,
                    children: [(0,
                    t.jsx)("div", {
                        className: B().titleH2,
                        children: "" === h ? (0,
                        t.jsx)("h2", {
                            children: e.title_h2
                        }) : (0,
                        t.jsxs)("h2", {
                            children: [e.title_h2_before_grade, h, e.title_h2_after_grade]
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: B().titleH3,
                        children: (0,
                        t.jsx)("h3", {
                            children: e.title_h3_first
                        })
                    }), (0,
                    t.jsx)("div", {
                        children: "" === h ? (0,
                        t.jsx)("p", {
                            children: e.description__h3_first
                        }) : (0,
                        t.jsxs)("p", {
                            children: [e.description__h3_first_before_grade, h, e.description__h3_first_after_grade]
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: B().titleH3,
                        children: (0,
                        t.jsx)("h3", {
                            children: e.title_h3_second
                        })
                    }), (0,
                    t.jsx)("div", {
                        children: "" === h ? (0,
                        t.jsx)("p", {
                            children: e.description_h3_second
                        }) : (0,
                        t.jsxs)("p", {
                            children: [e.description_h3_second_before_grade, h, e.description_h3_second_after_grade]
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: B().imageContainer,
                        children: [(0,
                        t.jsx)("div", {
                            className: B().imageCardItem,
                            children: (0,
                            t.jsx)(H(), {
                                src: e.image_1,
                                alt: "img-1"
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: B().imageCardItem,
                            children: (0,
                            t.jsx)(H(), {
                                src: e.image_2,
                                alt: "img-2"
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: B().imageCardItem,
                            children: (0,
                            t.jsx)(H(), {
                                src: e.image_3,
                                alt: "img-3"
                            })
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: B().titleH3,
                        children: (0,
                        t.jsx)("h3", {
                            children: e.title_h3_third
                        })
                    }), (0,
                    t.jsx)("div", {
                        children: (0,
                        t.jsx)("p", {
                            children: e.description_h3_third_1
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: B().imageUnderTitleThird,
                        children: (0,
                        t.jsx)(H(), {
                            src: e.image_4,
                            alt: "img-4"
                        })
                    }), (0,
                    t.jsx)("div", {
                        children: "" === h ? (0,
                        t.jsx)("p", {
                            children: e.description_h3_third_2
                        }) : (0,
                        t.jsxs)("p", {
                            children: [e.description_h3_third_2_before_grade, h, e.description_h3_third_2_after_grade]
                        })
                    })]
                })
            })
        }
        var P = h(47524)
          , V = h(62705)
          , N = h(99789);
        let R = L()( () => h.e(4095).then(h.bind(h, 34095)), {
            loadableGenerated: {
                webpack: () => [34095]
            },
            ssr: !1
        });
        var learn_LearnPage = n => {
            var e, h;
            let g, {isCourseDetailPage: q, courseData: S=[], courseItem: C} = n, w = (0,
            c.I0)(), [j,L] = (0,
            i.useState)([]), E = (0,
            c.v9)(n => n.review), B = (0,
            c.v9)(n => n.learn), M = (0,
            c.v9)(n => n.flowLearningGame), H = (0,
            c.v9)(n => n.user), U = !H.isPremium, K = H.isPremium, [D,Q] = (0,
            i.useState)(!1), O = (0,
            b.$o)("isFirsTimeTrialLesson"), {languageTrans: F} = (0,
            y.Z)(), Z = (0,
            x.useRouter)(), [G,W] = (0,
            i.useState)(F.general.go_premium_to_unlock_all_lessons), {locale: J} = (0,
            x.useRouter)(), [X,Y] = (0,
            i.useState)(), [z,$] = (0,
            i.useState)(), [nn,ne] = (0,
            i.useState)(!1), [nh,nt] = (0,
            i.useState)(!1), ni = "";
            switch (S.id) {
            case "1":
                g = T.how_to_learn_english_vocabulary_effectively;
                break;
            case "3":
                g = T.how_to_learn_english_vocabulary_for_tourism_effectively;
                break;
            case "4":
                g = T.how_to_learn_english_vocabulary_on_the_topic_office_life_effectively;
                break;
            case "5":
                g = T.how_to_learn_english_vocabulary_related_to_information_technology_effectively;
                break;
            case "6":
                g = T.how_to_learn_basic_ielts_vocabulary_by_popular_topics;
                break;
            case "7":
            case "11":
                ni = "12",
                g = T.how_to_learn_english_vocabulary_for_grade_according_to_each_lesson_of_the_latest_program;
                break;
            case "8":
            case "14":
                ni = "11",
                g = T.how_to_learn_english_vocabulary_for_grade_according_to_each_lesson_of_the_latest_program;
                break;
            case "10":
                g = T.how_to_learn_1000_common_toeic_vocabulary_by_topic;
                break;
            case "12":
                g = T.how_to_learn_common_basic_ielts_phrases;
                break;
            case "13":
                g = T.how_to_learn_ielts_vocabulary_by_topic_to_help_you_score_high;
                break;
            case "15":
                g = T.how_to_learn_more_than_1000_common_phrasal_verbs;
                break;
            case "16":
            case "17":
                ni = "10",
                g = T.how_to_learn_english_vocabulary_for_grade_according_to_each_lesson_of_the_latest_program;
                break;
            case "18":
                ni = "6",
                g = T.how_to_learn_english_vocabulary_for_grade_according_to_each_lesson_of_the_latest_program;
                break;
            case "19":
                ni = "7",
                g = T.how_to_learn_english_vocabulary_for_grade_according_to_each_lesson_of_the_latest_program;
                break;
            case "20":
                ni = "8",
                g = T.how_to_learn_english_vocabulary_for_grade_according_to_each_lesson_of_the_latest_program;
                break;
            case "21":
                ni = "9",
                g = T.how_to_learn_english_vocabulary_for_grade_according_to_each_lesson_of_the_latest_program;
                break;
            case "22":
                g = T.how_to_effectively_learn_English_vocabulary_for_the_national_high_school_exam;
                break;
            default:
                ni = "",
                g = ""
            }
            let nc = null;
            switch (S.id) {
            case "1":
                nc = (0,
                t.jsx)(V.Z, {});
                break;
            case "6":
                nc = (0,
                t.jsx)(N.Z, {});
                break;
            default:
                nc = (0,
                t.jsx)(ContentBottom, {
                    contentLearnPage: g,
                    grade: ni
                })
            }
            (0,
            i.useEffect)( () => {
                ("undefined" === O || null === O) && (0,
                b.qQ)("isFirsTimeTrialLesson", !0)
            }
            , []),
            (0,
            i.useEffect)( () => {
                $(window.innerWidth)
            }
            , [z]),
            (0,
            i.useEffect)( () => {
                Q(!0)
            }
            , []),
            (0,
            i.useEffect)( () => {
                if (q) {
                    var n, e;
                    L(null == B ? void 0 : null === (e = B.course) || void 0 === e ? void 0 : null === (n = e.learning) || void 0 === n ? void 0 : n.data)
                }
            }
            , [B]);
            let handleClickCourseList = () => {
                w((0,
                _.BE)(r.lO.MODAL_FIRST_TIME_LEARN))
            }
              , handleRenderLessonStatus = (n, e, h, t) => {
                var i, c, x, g;
                return h ? r.Fk.GREEN : 0 === n && !t && D && ((null == H ? void 0 : null === (c = H.badge) || void 0 === c ? void 0 : null === (i = c.count_word) || void 0 === i ? void 0 : i.data) === 0 || (null == H ? void 0 : null === (g = H.badge) || void 0 === g ? void 0 : null === (x = g.count_word) || void 0 === x ? void 0 : x.data) == void 0) ? r.Fk.YELLOW : !t && n >= 3 && e ? r.Fk.LOCK : void 0
            }
              , handleClickCard = (n, e, h, t, i) => {
                var c, x, g, a, o, _, l;
                O && ((0,
                k.j)({
                    eventName: "1st_trial_lesson"
                }),
                (0,
                b.qQ)("isFirsTimeTrialLesson", !1)),
                !t && n < 3 && e && (null == E ? void 0 : null === (x = E.dashboard) || void 0 === x ? void 0 : null === (c = x.data) || void 0 === c ? void 0 : c.review_count) >= 60 && W(F.general.end_trial_go_premium_to_unlock_all_lessons);
                let s = handleRenderLessonStatus(n, e, h, t)
                  , d = !1;
                s !== r.Fk.LOCK && e || (z >= 768 && w((0,
                u.uD)({
                    type: "showModal",
                    value: v.N$.ASK_USER_LOGIN
                })),
                d = !0),
                z < 768 && !t && (d = !0,
                ne(!0));
                let p = s === r.Fk.LOCK || (null == E ? void 0 : null === (a = E.dashboard) || void 0 === a ? void 0 : null === (g = a.data) || void 0 === g ? void 0 : g.review_count) >= 60;
                !t && e && p && false && (w((0,
                u.uD)({
                    type: "showModal",
                    value: v.N$.ASK_USER_UPGRADE
                })),
                d = !0),
                true && w(m.dA.changeOpenFlowLearningGame({
                    status: !0,
                    lesson_id: i,
                    course_id: null == B ? void 0 : null === (l = B.course) || void 0 === l ? void 0 : null === (_ = l.learning) || void 0 === _ ? void 0 : null === (o = _.course) || void 0 === o ? void 0 : o.id
                }))
            }
            ;
            (0,
            b.$o)("language"),
            (0,
            i.useLayoutEffect)( () => {
                var n, e;
                let h = null == B ? void 0 : null === (e = B.course) || void 0 === e ? void 0 : null === (n = e.learning) || void 0 === n ? void 0 : n.last_learn;
                (null == h ? void 0 : h.lesson_id) && setTimeout( () => {
                    let n = document.getElementById(h.lesson_id);
                    n && n.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                }
                , 500)
            }
            , [Z.pathname, B]),
            null == B || null === (h = B.course) || void 0 === h || null === (e = h.learning) || void 0 === e || e.course;
            let nx = (0,
            f.Z)(null == C ? void 0 : C.title, null == C ? void 0 : C.ja_title, null == C ? void 0 : C.ko_title, null == C ? void 0 : C.th_title);
            return (0,
            i.useEffect)( () => {
                H.showPopupAfterSignUp && (0,
                k.j)({
                    eventName: "show_popup_sign_up_success"
                })
            }
            , [H.showPopupAfterSignUp]),
            (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsxs)("div", {
                    className: "page-flex",
                    children: [(0,
                    t.jsx)("div", {
                        className: "side-column"
                    }), (0,
                    t.jsx)("div", {
                        className: "main-column ".concat(a().main),
                        children: (0,
                        t.jsxs)("div", {
                            className: a().list,
                            children: [q && (0,
                            t.jsx)("div", {
                                className: " ".concat(a().ribbon),
                                children: (0,
                                t.jsx)(o.Y, {
                                    title: nx || "",
                                    onClick: handleClickCourseList
                                })
                            }), null == j ? void 0 : j.map( (n, e) => (0,
                            t.jsx)("div", {
                                id: n.id,
                                children: (0,
                                t.jsx)(R, {
                                    indexCard: e,
                                    lessonIfo: n,
                                    status: handleRenderLessonStatus(e, null == H ? void 0 : H.userInfo.email, null == n ? void 0 : n.checked_feet, null == H ? void 0 : true),
                                    lessonIfoTitle: (0,
                                    f.Z)(n.title, n.ja_title, n.ko_title, n.th_title) || "description",
                                    lessonIfoDescription: (0,
                                    f.Z)(n.description, n.ja_description, n.ko_description, n.th_description) || "description",
                                    onClickCard: () => handleClickCard(e, null == H ? void 0 : H.userInfo.email, null == n ? void 0 : n.checked_feet, null == H ? void 0 : true, null == n ? void 0 : n.id)
                                })
                            }, null == n ? void 0 : n.id)), "vi" === J && nc]
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: "side-column ".concat(a().right),
                        children: [(0,
                        t.jsx)(l.Z, {
                            onClick: handleClickCourseList
                        }), U && H.userInfo.email && (0,
                        t.jsx)(A.Z, {
                            isFree: U,
                            banner4: !1
                        }), K && H.userInfo.email && (0,
                        t.jsx)(A.Z, {
                            isFree: U,
                            banner4: !1
                        }), U && H.userInfo.email && (0,
                        t.jsx)(A.Z, {
                            isFree: U,
                            banner4: !0
                        }), K && H.userInfo.email && (0,
                        t.jsx)(A.Z, {
                            isFree: U,
                            banner4: !0
                        })]
                    })]
                }), M.isOpenGameLearning && (0,
                t.jsx)(s.Z, {}), (0,
                t.jsx)(d.C, {
                    isOpenModal: H.showModal === v.N$.ASK_USER_LOGIN
                }), (0,
                t.jsx)(p.L, {
                    modalTitle: G,
                    isOpenModal: H.showModal === v.N$.ASK_USER_UPGRADE
                }), H.showPopupAfterSignUp && (0,
                t.jsx)(I.ModalLoginSuccess, {}), nn && (0,
                t.jsx)(P.i, {
                    setShowPopupDownloadApp: ne
                })]
            })
        }
    },
    39028: function(n) {
        n.exports = {
            wrapper: "modalAskUserLoginStyle_wrapper__pOpNu",
            title: "modalAskUserLoginStyle_title__NyYgu",
            button: "modalAskUserLoginStyle_button__gKwPY"
        }
    },
    72281: function(n) {
        n.exports = {
            title: "modalLoginSuccessStyle_title__fxBcL",
            button: "modalLoginSuccessStyle_button__EHZ9j"
        }
    },
    27387: function(n) {
        n.exports = {
            contentLearnPage: "contentBottomStyle_contentLearnPage__t_tVm",
            titleH2: "contentBottomStyle_titleH2__XCJqu",
            titleH3: "contentBottomStyle_titleH3__2fLiD",
            imageUnderTitleThird: "contentBottomStyle_imageUnderTitleThird__eeX8w",
            imageContainer: "contentBottomStyle_imageContainer__iLU_r",
            imageCardItem: "contentBottomStyle_imageCardItem__VeCAj",
            loading: "contentBottomStyle_loading__xlOSb",
            list: "contentBottomStyle_list__Yzk2S"
        }
    },
    84307: function(n) {
        n.exports = {
            main: "learnPageStyle_main__I9eH_",
            list: "learnPageStyle_list__XJ_uN",
            contentLearnPage: "learnPageStyle_contentLearnPage__hKwmd",
            titleH2: "learnPageStyle_titleH2__NxKnc",
            titleH3: "learnPageStyle_titleH3__atRf1",
            imageUnderTitleThird: "learnPageStyle_imageUnderTitleThird__X1_vI",
            imageContainer: "learnPageStyle_imageContainer__KtqZU",
            imageCardItem: "learnPageStyle_imageCardItem__RlAW2",
            loading: "learnPageStyle_loading__K_BPy"
        }
    }
}]);
