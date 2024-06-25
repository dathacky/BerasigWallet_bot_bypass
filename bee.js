// DatHacky
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    13983: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 86375, 23)),
        Promise.resolve().then(n.t.bind(n, 16977, 23)),
        Promise.resolve().then(n.bind(n, 53435)),
        Promise.resolve().then(n.bind(n, 68701)),
        Promise.resolve().then(n.t.bind(n, 88563, 23)),
        Promise.resolve().then(n.t.bind(n, 21198, 23)),
        Promise.resolve().then(n.bind(n, 50529)),
        Promise.resolve().then(n.bind(n, 5723)),
        Promise.resolve().then(n.bind(n, 92266)),
        Promise.resolve().then(n.bind(n, 70978)),
        Promise.resolve().then(n.bind(n, 72278)),
        Promise.resolve().then(n.bind(n, 53072)),
        Promise.resolve().then(n.bind(n, 69885)),
        Promise.resolve().then(n.bind(n, 13317)),
        Promise.resolve().then(n.bind(n, 6059)),
        Promise.resolve().then(n.bind(n, 75380)),
        Promise.resolve().then(n.bind(n, 69458)),
        Promise.resolve().then(n.bind(n, 45638)),
        Promise.resolve().then(n.bind(n, 10779)),
        Promise.resolve().then(n.bind(n, 72745)),
        Promise.resolve().then(n.t.bind(n, 11253, 23)),
        Promise.resolve().then(n.t.bind(n, 24064, 23));
    },
    946: function (e) {
      var t;
      (t = function () {
        'use strict';
        var e = 'millisecond',
          t = 'second',
          n = 'minute',
          r = 'hour',
          a = 'week',
          i = 'month',
          s = 'quarter',
          o = 'year',
          l = 'date',
          c = 'Invalid Date',
          u =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          d =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          h = function (e, t, n) {
            var r = String(e);
            return !r || r.length >= t
              ? e
              : '' + Array(t + 1 - r.length).join(n) + e;
          },
          f = 'en',
          m = {};
        m[f] = {
          name: 'en',
          weekdays:
            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
              '_'
            ),
          months:
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
              '_'
            ),
          ordinal: function (e) {
            var t = ['th', 'st', 'nd', 'rd'],
              n = e % 100;
            return '[' + e + (t[(n - 20) % 10] || t[n] || 'th') + ']';
          },
        };
        var g = '$isDayjsObject',
          y = function (e) {
            return e instanceof w || !(!e || !e[g]);
          },
          p = function e(t, n, r) {
            var a;
            if (!t) return f;
            if ('string' == typeof t) {
              var i = t.toLowerCase();
              m[i] && (a = i), n && ((m[i] = n), (a = i));
              var s = t.split('-');
              if (!a && s.length > 1) return e(s[0]);
            } else {
              var o = t.name;
              (m[o] = t), (a = o);
            }
            return !r && a && (f = a), a || (!r && f);
          },
          b = function (e, t) {
            if (y(e)) return e.clone();
            var n = 'object' == typeof t ? t : {};
            return (n.date = e), (n.args = arguments), new w(n);
          },
          v = {
            s: h,
            z: function (e) {
              var t = -e.utcOffset(),
                n = Math.abs(t);
              return (
                (t <= 0 ? '+' : '-') +
                h(Math.floor(n / 60), 2, '0') +
                ':' +
                h(n % 60, 2, '0')
              );
            },
            m: function e(t, n) {
              if (t.date() < n.date()) return -e(n, t);
              var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                a = t.clone().add(r, i),
                s = n - a < 0,
                o = t.clone().add(r + (s ? -1 : 1), i);
              return +(-(r + (n - a) / (s ? a - o : o - a)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (c) {
              return (
                {
                  M: i,
                  y: o,
                  w: a,
                  d: 'day',
                  D: l,
                  h: r,
                  m: n,
                  s: t,
                  ms: e,
                  Q: s,
                }[c] ||
                String(c || '')
                  .toLowerCase()
                  .replace(/s$/, '')
              );
            },
            u: function (e) {
              return void 0 === e;
            },
          };
        (v.l = p),
          (v.i = y),
          (v.w = function (e, t) {
            return b(e, {
              locale: t.$L,
              utc: t.$u,
              x: t.$x,
              $offset: t.$offset,
            });
          });
        var w = (function () {
            function h(e) {
              (this.$L = p(e.locale, null, !0)),
                this.parse(e),
                (this.$x = this.$x || e.x || {}),
                (this[g] = !0);
            }
            var f = h.prototype;
            return (
              (f.parse = function (e) {
                (this.$d = (function (e) {
                  var t = e.date,
                    n = e.utc;
                  if (null === t) return new Date(NaN);
                  if (v.u(t)) return new Date();
                  if (t instanceof Date) return new Date(t);
                  if ('string' == typeof t && !/Z$/i.test(t)) {
                    var r = t.match(u);
                    if (r) {
                      var a = r[2] - 1 || 0,
                        i = (r[7] || '0').substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              a,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              i
                            )
                          )
                        : new Date(
                            r[1],
                            a,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            i
                          );
                    }
                  }
                  return new Date(t);
                })(e)),
                  this.init();
              }),
              (f.init = function () {
                var e = this.$d;
                (this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds());
              }),
              (f.$utils = function () {
                return v;
              }),
              (f.isValid = function () {
                return this.$d.toString() !== c;
              }),
              (f.isSame = function (e, t) {
                var n = b(e);
                return this.startOf(t) <= n && n <= this.endOf(t);
              }),
              (f.isAfter = function (e, t) {
                return b(e) < this.startOf(t);
              }),
              (f.isBefore = function (e, t) {
                return this.endOf(t) < b(e);
              }),
              (f.$g = function (e, t, n) {
                return v.u(e) ? this[t] : this.set(n, e);
              }),
              (f.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (f.valueOf = function () {
                return this.$d.getTime();
              }),
              (f.startOf = function (e, s) {
                var c = this,
                  u = !!v.u(s) || s,
                  d = v.p(e),
                  h = function (e, t) {
                    var n = v.w(
                      c.$u ? Date.UTC(c.$y, t, e) : new Date(c.$y, t, e),
                      c
                    );
                    return u ? n : n.endOf('day');
                  },
                  f = function (e, t) {
                    return v.w(
                      c
                        .toDate()
                        [e].apply(
                          c.toDate('s'),
                          (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                        ),
                      c
                    );
                  },
                  m = this.$W,
                  g = this.$M,
                  y = this.$D,
                  p = 'set' + (this.$u ? 'UTC' : '');
                switch (d) {
                  case o:
                    return u ? h(1, 0) : h(31, 11);
                  case i:
                    return u ? h(1, g) : h(0, g + 1);
                  case a:
                    var b = this.$locale().weekStart || 0,
                      w = (m < b ? m + 7 : m) - b;
                    return h(u ? y - w : y + (6 - w), g);
                  case 'day':
                  case l:
                    return f(p + 'Hours', 0);
                  case r:
                    return f(p + 'Minutes', 1);
                  case n:
                    return f(p + 'Seconds', 2);
                  case t:
                    return f(p + 'Milliseconds', 3);
                  default:
                    return this.clone();
                }
              }),
              (f.endOf = function (e) {
                return this.startOf(e, !1);
              }),
              (f.$set = function (a, s) {
                var c,
                  u = v.p(a),
                  d = 'set' + (this.$u ? 'UTC' : ''),
                  h = (((c = {}).day = d + 'Date'),
                  (c[l] = d + 'Date'),
                  (c[i] = d + 'Month'),
                  (c[o] = d + 'FullYear'),
                  (c[r] = d + 'Hours'),
                  (c[n] = d + 'Minutes'),
                  (c[t] = d + 'Seconds'),
                  (c[e] = d + 'Milliseconds'),
                  c)[u],
                  f = 'day' === u ? this.$D + (s - this.$W) : s;
                if (u === i || u === o) {
                  var m = this.clone().set(l, 1);
                  m.$d[h](f),
                    m.init(),
                    (this.$d = m.set(l, Math.min(this.$D, m.daysInMonth())).$d);
                } else h && this.$d[h](f);
                return this.init(), this;
              }),
              (f.set = function (e, t) {
                return this.clone().$set(e, t);
              }),
              (f.get = function (e) {
                return this[v.p(e)]();
              }),
              (f.add = function (e, s) {
                var l,
                  c = this;
                e = Number(e);
                var u = v.p(s),
                  d = function (t) {
                    var n = b(c);
                    return v.w(n.date(n.date() + Math.round(t * e)), c);
                  };
                if (u === i) return this.set(i, this.$M + e);
                if (u === o) return this.set(o, this.$y + e);
                if ('day' === u) return d(1);
                if (u === a) return d(7);
                var h =
                    (((l = {})[n] = 6e4), (l[r] = 36e5), (l[t] = 1e3), l)[u] ||
                    1,
                  f = this.$d.getTime() + e * h;
                return v.w(f, this);
              }),
              (f.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (f.format = function (e) {
                var t = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || c;
                var r = e || 'YYYY-MM-DDTHH:mm:ssZ',
                  a = v.z(this),
                  i = this.$H,
                  s = this.$m,
                  o = this.$M,
                  l = n.weekdays,
                  u = n.months,
                  h = n.meridiem,
                  f = function (e, n, a, i) {
                    return (e && (e[n] || e(t, r))) || a[n].slice(0, i);
                  },
                  m = function (e) {
                    return v.s(i % 12 || 12, e, '0');
                  },
                  g =
                    h ||
                    function (e, t, n) {
                      var r = e < 12 ? 'AM' : 'PM';
                      return n ? r.toLowerCase() : r;
                    };
                return r.replace(d, function (e, r) {
                  return (
                    r ||
                    (function (e) {
                      switch (e) {
                        case 'YY':
                          return String(t.$y).slice(-2);
                        case 'YYYY':
                          return v.s(t.$y, 4, '0');
                        case 'M':
                          return o + 1;
                        case 'MM':
                          return v.s(o + 1, 2, '0');
                        case 'MMM':
                          return f(n.monthsShort, o, u, 3);
                        case 'MMMM':
                          return f(u, o);
                        case 'D':
                          return t.$D;
                        case 'DD':
                          return v.s(t.$D, 2, '0');
                        case 'd':
                          return String(t.$W);
                        case 'dd':
                          return f(n.weekdaysMin, t.$W, l, 2);
                        case 'ddd':
                          return f(n.weekdaysShort, t.$W, l, 3);
                        case 'dddd':
                          return l[t.$W];
                        case 'H':
                          return String(i);
                        case 'HH':
                          return v.s(i, 2, '0');
                        case 'h':
                          return m(1);
                        case 'hh':
                          return m(2);
                        case 'a':
                          return g(i, s, !0);
                        case 'A':
                          return g(i, s, !1);
                        case 'm':
                          return String(s);
                        case 'mm':
                          return v.s(s, 2, '0');
                        case 's':
                          return String(t.$s);
                        case 'ss':
                          return v.s(t.$s, 2, '0');
                        case 'SSS':
                          return v.s(t.$ms, 3, '0');
                        case 'Z':
                          return a;
                      }
                      return null;
                    })(e) ||
                    a.replace(':', '')
                  );
                });
              }),
              (f.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (f.diff = function (e, l, c) {
                var u,
                  d = this,
                  h = v.p(l),
                  f = b(e),
                  m = (f.utcOffset() - this.utcOffset()) * 6e4,
                  g = this - f,
                  y = function () {
                    return v.m(d, f);
                  };
                switch (h) {
                  case o:
                    u = y() / 12;
                    break;
                  case i:
                    u = y();
                    break;
                  case s:
                    u = y() / 3;
                    break;
                  case a:
                    u = (g - m) / 6048e5;
                    break;
                  case 'day':
                    u = (g - m) / 864e5;
                    break;
                  case r:
                    u = g / 36e5;
                    break;
                  case n:
                    u = g / 6e4;
                    break;
                  case t:
                    u = g / 1e3;
                    break;
                  default:
                    u = g;
                }
                return c ? u : v.a(u);
              }),
              (f.daysInMonth = function () {
                return this.endOf(i).$D;
              }),
              (f.$locale = function () {
                return m[this.$L];
              }),
              (f.locale = function (e, t) {
                if (!e) return this.$L;
                var n = this.clone(),
                  r = p(e, t, !0);
                return r && (n.$L = r), n;
              }),
              (f.clone = function () {
                return v.w(this.$d, this);
              }),
              (f.toDate = function () {
                return new Date(this.valueOf());
              }),
              (f.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (f.toISOString = function () {
                return this.$d.toISOString();
              }),
              (f.toString = function () {
                return this.$d.toUTCString();
              }),
              h
            );
          })(),
          x = w.prototype;
        return (
          (b.prototype = x),
          [
            ['$ms', e],
            ['$s', t],
            ['$m', n],
            ['$H', r],
            ['$W', 'day'],
            ['$M', i],
            ['$y', o],
            ['$D', l],
          ].forEach(function (e) {
            x[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (b.extend = function (e, t) {
            return e.$i || (e(t, w, b), (e.$i = !0)), b;
          }),
          (b.locale = p),
          (b.isDayjs = y),
          (b.unix = function (e) {
            return b(1e3 * e);
          }),
          (b.en = m[f]),
          (b.Ls = m),
          (b.p = {}),
          b
        );
      }),
        (e.exports = t());
    },
    68701: function (e, t, n) {
      'use strict';
      var r = n(45615),
        a = n(13352),
        i = n(25652),
        s = n(82216),
        o = n(29117),
        l = n.n(o);
      let c = (0, i.Ue)()(
        (0, s.tJ)(
          (e) => ({
            installed: !1,
            setInstalled: (t) =>
              e({
                installed: t,
              }),
          }),
          {
            name: 'ZUSTAND_SERVICE_WORKER',
            storage: (0, s.FL)(() => l()),
          }
        )
      );
      t.default = (e) => {
        let t = c(),
          n = (0, a.useCallback)(async () => {
            try {
              if (t.installed) return;
              'serviceWorker' in navigator &&
                navigator.serviceWorker.register('/cacheSW.js').then(() => {
                  t.setInstalled(!0);
                });
            } catch (e) {
              console.log('error', e);
            } finally {
            }
          }, [t]);
        return (
          (0, a.useEffect)(() => {
            n();
          }, [n]),
          (0, r.jsx)(r.Fragment, {
            children: e.children,
          })
        );
      };
    },
    39723: function (e, t, n) {
      'use strict';
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = {
        chainId: '0x138d4',
      };
    },
    42796: function (e, t, n) {
      'use strict';
      n.d(t, {
        Dd: function () {
          return o;
        },
        Vb: function () {
          return a;
        },
        bl: function () {
          return i;
        },
        hn: function () {
          return l;
        },
        mI: function () {
          return r;
        },
        we: function () {
          return s;
        },
      });
      let r = () => {
          'false' !== localStorage.getItem('soundEffects') &&
            new Audio(
              'https://cdn.pixabay.com/audio/2022/12/17/audio_43e9af63f3.mp3'
            ).play();
        },
        a = () => {
          'false' !== localStorage.getItem('soundEffects') &&
            new Audio(
              'https://cdn.pixabay.com/audio/2024/01/17/audio_009e568069.mp3'
            ).play();
        },
        i = () => {
          'false' !== localStorage.getItem('soundEffects') &&
            new Audio(
              'https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3'
            ).play();
        },
        s = () => {
          'false' !== localStorage.getItem('soundEffects') &&
            new Audio(
              'https://cdn.pixabay.com/audio/2021/08/04/audio_12b0c7443c.mp3'
            ).play();
        },
        o = () => {
          'false' !== localStorage.getItem('soundEffects') &&
            new Audio(
              'https://cdn.pixabay.com/audio/2021/08/04/audio_c003cb2711.mp3'
            ).play();
        },
        l = () => {
          'false' !== localStorage.getItem('soundEffects') &&
            new Audio(
              'https://cdn.pixabay.com/audio/2024/01/02/audio_0c574f2e01.mp3'
            ).play();
        };
    },
    5723: function (e, t, n) {
      'use strict';
      n.d(t, {
        default: function () {
          return M;
        },
      });
      var r = n(45615),
        a = n(48278),
        i = n(80078),
        s = n(6059),
        o = {
          src: '/_next/static/media/baned.a0a82c8a.svg',
          height: 64,
          width: 65,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = n(13352),
        c = n(99880),
        u = n(42796),
        d = n(32530),
        h = (e) => {
          let [t, n] = (0, l.useState)(5),
            i = (0, l.useMemo)(
              () => Math.floor(Math.random() * window.innerWidth),
              []
            ),
            s = (0, l.useMemo)(
              () => Math.floor(Math.random() * window.innerWidth),
              []
            ),
            [o, h] = (0, l.useState)({
              x:
                i < 60
                  ? 20
                  : i > window.innerWidth - 60
                  ? window.innerWidth - 60
                  : i,
              y:
                s < 100
                  ? 100
                  : i > window.innerHeight - 100
                  ? window.innerHeight - 100
                  : i,
            }),
            f = () => {
              let e = Math.floor(Math.random() * window.innerWidth),
                t =
                  e < 60
                    ? 10
                    : e > window.innerWidth - 60
                    ? window.innerWidth - 60
                    : e,
                n = Math.floor(Math.random() * window.innerHeight);
              return {
                x: t,
                y:
                  n < 100
                    ? 100
                    : n > window.innerHeight - 100
                    ? window.innerHeight - 100
                    : n,
              };
            },
            m = async (r) => {
                debugger;
                (e.onClick(), n(5));
            },
            g = (0, l.useCallback)(() => {
              let { x: e, y: t } = f();
              h({
                x: e,
                y: t,
              });
            }, []);
          return (
            (0, l.useEffect)(() => {
              let e = setInterval(g, 1500);
              return () => clearInterval(e);
            }, [g]),
            (0, r.jsxs)('div', {
              onClick: m,
              className: 'take-bee-fly',
              style: {
                transform: 'translate('.concat(o.x, 'px, ').concat(o.y, 'px)'),
                transformOrigin: 'center',
              },
              children: [
                (0, r.jsx)(a.default, {
                  className: 'take-bee-fly-img',
                  src: c.Z,
                  alt: 'Bee',
                }),
                (0, r.jsx)('progress', {
                  className: 'progress rounded-full w-full bg-white',
                  value: t,
                  max: 5,
                }),
              ],
            })
          );
        },
        f = n(52225),
        m = n(60070),
        g = n(79620),
        y = n(94027),
        p = n(45790),
        b = {
          src: '/_next/static/media/catch.580da03d.svg',
          height: 343,
          width: 343,
          blurWidth: 0,
          blurHeight: 0,
        };
      function v(e) {
        let { onClose: t, open: n, time: a } = e,
          i = (0, s.a)(),
          [o, c] = (0, l.useState)({
            type: 'waiting',
            amount: 0,
            msg: '',
          }),
          u = (0, l.useCallback)(() => {
            t(),
              c({
                type: 'waiting',
                amount: 0,
                msg: '',
              });
          }, [t]),
          h = (0, l.useCallback)(async () => {
            n &&
              'waiting' === o.type &&
              setTimeout(async () => {
                try {
                  let e = await (0, d.pe)({
                    type: 0,
                  });
                  i.setUser(e.user),
                    c({
                      type: 'success',
                      amount: e.amount,
                      msg: '',
                    });
                } catch (n) {
                  var e, t;
                  c({
                    type: 'error',
                    amount: 0,
                    msg:
                      (null == n
                        ? void 0
                        : null === (t = n.response) || void 0 === t
                        ? void 0
                        : null === (e = t.data) || void 0 === e
                        ? void 0
                        : e.message) || n.message,
                  });
                }
              }, 3e3);
          }, [n, o.type, a, i]);
        return (
          (0, l.useEffect)(() => {
            h();
          }, [h]),
          (0, r.jsxs)(f.Z, {
            onClose: () => {},
            open: n,
            children: [
              n && 'waiting' === o.type && (0, r.jsx)(A, {}),
              n &&
                'success' === o.type &&
                (0, r.jsx)(x, {
                  amount: o.amount,
                  onClose: u,
                }),
              n &&
                'error' === o.type &&
                (0, r.jsx)(w, {
                  onClose: u,
                  msg: o.msg,
                }),
            ],
          })
        );
      }
      function w(e) {
        return (0, r.jsxs)(l.Fragment, {
          children: [
            (0, r.jsx)(a.default, {
              className: 'absolute -top-8 left-1/3 w-1/3',
              src: g.Z,
              alt: 'Confetti upgraded',
            }),
            (0, r.jsxs)('div', {
              className: 'flex flex-col gap-4 mt-6',
              children: [
                (0, r.jsxs)('div', {
                  className: 'flex flex-col gap-2 items-center',
                  children: [
                    (0, r.jsx)('h6', {
                      className: 'font-bold',
                      children: 'Oh no!',
                    }),
                    (0, r.jsx)('span', {
                      children: e.msg,
                    }),
                  ],
                }),
                (0, r.jsx)('button', {
                  className: 'btn p-5 w-full',
                  onClick: e.onClose,
                  children: 'Close',
                }),
              ],
            }),
          ],
        });
      }
      function x(e) {
        return (
          (0, l.useEffect)(() => {
            (0, u.bl)();
          }, []),
          (0, r.jsxs)(l.Fragment, {
            children: [
              (0, r.jsx)(a.default, {
                className: 'absolute -top-8 left-1/3 w-1/3',
                src: g.Z,
                alt: 'Confetti upgraded',
              }),
              (0, r.jsxs)('div', {
                className: 'flex flex-col gap-4 mt-6',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'flex flex-col gap-2 items-center',
                    children: [
                      (0, r.jsx)('h6', {
                        className: 'font-bold',
                        children: 'Congratulation',
                      }),
                      (0, r.jsx)('span', {
                        children: 'Catch bee successfully',
                      }),
                    ],
                  }),
                  (0, r.jsxs)('div', {
                    className:
                      'flex flex-col gap-1 max-level-card p-4 items-center w-full text-white',
                    children: [
                      (0, r.jsxs)('div', {
                        className:
                          'relative flex w-32 h-32 justify-center items-center',
                        children: [
                          (0, r.jsx)(a.default, {
                            className: 'absolute top-0 left-0 animate-spin ',
                            src: p.Z,
                            alt: 'light',
                          }),
                          (0, r.jsx)('div', {
                            className: 'relative h-14 w-14',
                            children: (0, r.jsx)(a.default, {
                              fill: !0,
                              src: y.Z,
                              alt: 'Items',
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)('h4', {
                        className: 'font-bold',
                        children: ''.concat((0, m.CE)(e.amount), ' BEE'),
                      }),
                    ],
                  }),
                  (0, r.jsx)('button', {
                    className: 'btn p-5 w-full',
                    onClick: () => {
                      (0, u.mI)(), e.onClose();
                    },
                    children: 'Claim',
                  }),
                ],
              }),
            ],
          })
        );
      }
      function A(e) {
        let {} = e;
        return (0, r.jsxs)(l.Fragment, {
          children: [
            (0, r.jsx)(a.default, {
              className: 'absolute -top-8 left-1/3 w-1/3',
              src: g.Z,
              alt: 'Confetti upgraded',
            }),
            (0, r.jsxs)('div', {
              className: 'flex flex-col gap-4 mt-6',
              children: [
                (0, r.jsxs)('div', {
                  className: 'flex flex-col gap-2 items-center',
                  children: [
                    (0, r.jsx)('h6', {
                      className: 'font-bold',
                      children: 'Catching Bee',
                    }),
                    (0, r.jsx)('h4', {
                      className: 'flex justify-center items-center',
                      children: (0, r.jsx)('div', {
                        className: 'text-loader',
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)('div', {
                  className:
                    'flex flex-col gap-1 max-level-card p-4 items-center w-full text-white',
                  children: (0, r.jsx)('div', {
                    className: 'relative w-44 h-44',
                    children: (0, r.jsx)(a.default, {
                      src: b,
                      alt: 'Bee',
                      className: 'object-contain',
                    }),
                  }),
                }),
                (0, r.jsx)('button', {
                  className: 'btn p-5 w-full',
                  disabled: !0,
                  children: 'Catching',
                }),
              ],
            }),
          ],
        });
      }
      n(46385);
      var S = n(75380);
      function C(e) {
        let { children: t } = e,
          [n, a] = (0, l.useState)(!1),
          [i, s] = (0, l.useState)(!1),
          [o, c] = (0, l.useState)(0),
          [u, d] = (0, l.useState)(0),
          f = (0, S.c)((e) => e.setCheckBot),
          g = (0, l.useCallback)(() => {
            a(!1), s(!1);
          }, []);
        return (
          (0, l.useEffect)(() => {
            if (n || i) return;
            let e = setTimeout(() => {
              a(!0), c(new Date().getTime()), setTimeout(() => a(!1), 1e4);
            }, (0, m.V6)(15e3, 25e3));
            return () => clearTimeout(e);
          }, [n, i]),
          (0, r.jsxs)(l.Fragment, {
            children: [
              n &&
                (0, r.jsx)(h, {
                  onClick: () => {
                    a(!1), s(!0), d(new Date().getTime()), f();
                  },
                }),
              (0, r.jsx)(v, {
                open: i,
                onClose: g,
                time: u - o,
              }),
              t,
            ],
          })
        );
      }
      function M(e) {
        let { children: t } = e,
          { data: n } = (0, s.a)();
        return n.banned
          ? (0, r.jsxs)('div', {
              className: 'flex flex-col gap-4',
              children: [
                (0, r.jsx)(i.Z, {
                  disabled: !0,
                }),
                (0, r.jsxs)('div', {
                  className: 'card gap-2 items-center',
                  children: [
                    (0, r.jsx)(a.default, {
                      className: 'w-16',
                      src: o,
                      alt: 'baned',
                    }),
                    (0, r.jsx)('p', {
                      className: 'text-base text-danger font-bold',
                      children: 'YOUR ACCOUNT BANNED',
                    }),
                    (0, r.jsx)('p', {
                      className: 'font-medium text-center',
                      children:
                        "Our system recently identified activity on your account that seems to violate the game's fair play rules. To protect the integrity of the game for all players, we've temporarily locked your account.",
                    }),
                    (0, r.jsx)('p', {
                      className: 'font-medium text-center',
                      children:
                        'If you believe this was a mistake, you can contact our support team to appeal the decision.',
                    }),
                  ],
                }),
                (0, r.jsx)('button', {
                  className: 'btn btn-primary',
                  onClick: () =>
                    window.open('https://discord.gg/KAgSpDTgPg', '_blank'),
                  children: 'Contact Support on Discord',
                }),
              ],
            })
          : (0, r.jsx)(C, {
              children: t,
            });
      }
    },
    92266: function (e, t, n) {
      'use strict';
      n.d(t, {
        default: function () {
          return c;
        },
        m: function () {
          return l;
        },
      });
      var r = n(45615),
        a = n(13352),
        i = n(6059),
        s = n(32530),
        o = n(61590);
      let l = () => {
        var e;
        let t = (0, i.a)();
        return (0, o.a)({
          queryKey: [
            'friends:'.concat(
              null === (e = t.data) || void 0 === e ? void 0 : e._id
            ),
          ],
          queryFn: async () => {
            var e;
            let n = null === (e = t.data) || void 0 === e ? void 0 : e._id;
            if (!n) throw Error('User not found');
            return await (0, s.Rf)({
              referrer: n,
              sort: 'totalTokenClaimed',
            });
          },
          enabled: !!t.data._id,
        });
      };
      function c(e) {
        let { children: t } = e;
        return (0, r.jsx)(a.Fragment, {
          children: t,
        });
      }
    },
    53072: function (e, t, n) {
      'use strict';
      n.d(t, {
        Di: function () {
          return l;
        },
        WD: function () {
          return u;
        },
        default: function () {
          return $;
        },
        gr: function () {
          return E;
        },
        _D: function () {
          return k;
        },
        YY: function () {
          return j;
        },
        Pl: function () {
          return D;
        },
        qV: function () {
          return N;
        },
      });
      var r,
        a,
        i,
        s,
        o,
        l,
        c,
        u,
        d = n(45615),
        h = n(13352),
        f = n(61590),
        m = n(31858),
        g = n(4049),
        y = n(25652),
        p = n(60397),
        b = n(6059),
        v = n(946),
        w = n.n(v);
      ((r = o || (o = {})).YMD = 'YYYYMMDD'),
        (r.SortableTimePattern = 'YYYY-MM-DD HH:mm:ss');
      class x {
        setMilliSeconds(e) {
          this.milliSeconds = e;
        }
        static fromSeconds(e) {
          let t = new x();
          return t.setMilliSeconds(1e3 * e), t;
        }
        static fromMilliSeconds(e) {
          let t = new x();
          return t.setMilliSeconds(e), t;
        }
        static fromYmd(e) {
          let t = e.toString(),
            n = new Date(
              parseInt(t.substring(0, 4)),
              parseInt(t.substring(4, 6)) - 1,
              parseInt(t.substring(6, 8))
            ).getTime();
          return x.fromMilliSeconds(n);
        }
        static toDm(e) {
          let t = (e % 1e4).toString(),
            n = t.substring(0, 2),
            r = t.substring(2);
          return ''.concat(r, '/').concat(n);
        }
        static toMy(e) {
          let t = Math.floor(e / 10);
          return ''.concat(t % 100, '/').concat(Math.floor((t % 1e4) / 10));
        }
        static getListDate(e, t) {
          let n = [],
            r = x.fromMilliSeconds(e),
            a = x.fromMilliSeconds(t);
          for (; r.ymd() <= a.ymd(); ) n.push(r.ymd()), (r = r.addDay());
          return n;
        }
        static getMonthStartEnd(e) {
          let t = new Date().getFullYear();
          return [
            w()(new Date(t, e, 1)).toDate().getTime(),
            w()(new Date(t, e + 1, 1))
              .subtract(1, 'day')
              .toDate()
              .getTime(),
          ];
        }
        format(e) {
          let t = new Date(this.milliSeconds);
          return w()(t).format(e);
        }
        subtractDay() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            t = w()(this.milliSeconds).subtract(e, 'days').valueOf();
          return x.fromSeconds(t / 1e3);
        }
        addDay() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            t = w()(this.milliSeconds).add(e, 'days').valueOf();
          return x.fromSeconds(t / 1e3);
        }
        getTime() {
          return this.milliSeconds;
        }
        ymd() {
          return Number(this.format('YYYYMMDD'));
        }
        static today() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'YYYYMMDD';
          return w()().format(e);
        }
        constructor() {
          this.milliSeconds = new Date().valueOf();
        }
      }
      var A = n(32530),
        S = n(92517),
        C = n(39723);
      let { beraSigServer: M } = S.default.cluster;
      ((a = l || (l = {})).Once = 'Once'),
        (a.Daily = 'Daily'),
        ((i = c || (c = {})).BeraSig = 'PLATFORM::BERASIG'),
        (i.Desig = 'PLATFORM::DESIG'),
        (i.BeraBeeCatcher = 'PLATFORM::BERA_BEE_CATCHER'),
        ((s = u || (u = {})).Social = 'SOCIAL'),
        (s.Swap = 'SWAP'),
        (s.Mint = 'MINT'),
        (s.Redeem = 'REDEEM'),
        (s.Faucet = 'FAUCET'),
        (s.Referral = 'REFERRAL'),
        (s.DailyOnline = 'DAILY_ONLINE'),
        (s.SavePassphrase = 'SAVE_PASSPHRASE');
      let D = (0, y.Ue)()((e) => ({
          quests: [],
          setQuests: (t) =>
            e({
              quests: t,
            }),
          setQuest: (t) =>
            e(
              (0, g.Uy)((e) => {
                let { quests: n } = e,
                  r = n.findIndex((e) => {
                    let { _id: n } = e;
                    return n === t._id;
                  });
                n[r] = t;
              })
            ),
          certs: [],
          setCerts: (t) =>
            e({
              certs: t,
            }),
          upsertCert: (t) =>
            e(
              (0, g.Uy)((e) => {
                let { certs: n } = e,
                  r = n.findIndex((e) => {
                    let { questId: n } = e;
                    return n === t.questId;
                  });
                r > -1 ? (n[r] = t) : n.unshift(t);
              })
            ),
        })),
        j = () => {
          let { data: e } = (0, f.a)({
            queryKey: ['server-current-time'],
            queryFn: async () => {
              let { data: e } = await p.Z.get(
                ''.concat(M, '/faucet/current-time')
              );
              return e.now;
            },
          });
          return Number(e) || Number(x.today());
        },
        E = (e) => {
          let { certs: t } = D(),
            { data: n } = (0, b.a)(),
            r = j(),
            { data: a, isLoading: i } = (0, f.a)({
              queryKey: ['cert-by-questId', e, n.address, ...t],
              queryFn: async () =>
                t.find((t) => {
                  let { createdYmd: n } = t,
                    { _id: a, frequency: i } = t.quest;
                  return a === e && ('Daily' !== i || n === r);
                }) || null,
              enabled: !!e && !!n.address && !!t.length,
            });
          return {
            cert: a,
            isLoading: i,
          };
        },
        N = (e) => {
          let { data: t } = (0, b.a)(),
            { upsertCert: n } = D(),
            r = (0, m.NL)();
          return (0, h.useCallback)(async () => {
            let { data: a } = await p.Z.post(
              ''.concat(M, '/quests/').concat(e, '/verify'),
              {
                walletAddress: t.address.toLowerCase(),
                chainId: C.i.chainId,
              }
            );
            await n(a),
              await r.invalidateQueries({
                queryKey: ['cert-by-questId', e, t.address.toLowerCase()],
              });
          }, [r, e, n, t.address]);
        },
        k = (e) => {
          let { upsertCert: t } = D(),
            n = (0, m.NL)(),
            r = (0, b.a)();
          return (0, h.useCallback)(async () => {
            let { user: a, cert: i } = await (0, A.Tj)({
              questId: e,
            });
            await t(i),
              await r.setUser(a),
              await n.invalidateQueries({
                queryKey: ['cert-by-questId', e, r.data.address],
              });
          }, [n, e, t, r]);
        };
      function $(e) {
        let { children: t } = e,
          { setCerts: n, setQuests: r } = D(),
          { data: a } = (0, b.a)(),
          i = (0, h.useCallback)(async () => {
            if (a.address)
              try {
                let e = await (0, A.GJ)('PLATFORM::BERA_BEE_CATCHER');
                await n(e);
                let { data: t } = await p.Z.get(''.concat(M, '/quests'), {
                  params: {
                    platform: 'PLATFORM::BERA_BEE_CATCHER',
                    chainId: C.i.chainId,
                  },
                });
                await r(t);
              } catch (e) {
                console.log(e);
              }
          }, [n, r, a.address]);
        return (
          (0, h.useEffect)(() => {
            i();
          }, [i]),
          (0, d.jsx)(h.Fragment, {
            children: t,
          })
        );
      }
    },
    69885: function (e, t, n) {
      'use strict';
      n.d(t, {
        default: function () {
          return u;
        },
      });
      var r = n(45615),
        a = n(13352);
      /*!
devtools-detect
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/
      let i = {
          isOpen: !1,
          orientation: void 0,
        },
        s = (e, t) => {
          globalThis.dispatchEvent(
            new globalThis.CustomEvent('devtoolschange', {
              detail: {
                isOpen: e,
                orientation: t,
              },
            })
          );
        },
        o = ({ emitEvents: e = !0 } = {}) => {
          let t = globalThis.outerWidth - globalThis.innerWidth > 170,
            n = globalThis.outerHeight - globalThis.innerHeight > 170,
            r = t ? 'vertical' : 'horizontal';
          !(n && t) &&
          ((globalThis.Firebug &&
            globalThis.Firebug.chrome &&
            globalThis.Firebug.chrome.isInitialized) ||
            t ||
            n)
            ? ((!i.isOpen || i.orientation !== r) && e && s(!0, r),
              (i.isOpen = !0),
              (i.orientation = r))
            : (i.isOpen && e && s(!1, void 0),
              (i.isOpen = !1),
              (i.orientation = void 0));
        };
      o({
        emitEvents: !1,
      }),
        setInterval(o, 500);
      var l = n(9351);
      let c = () => !!l.env.NEXT_PUBLIC_TELEGRAM_USERNAME;
      var u = (e) => {
        let t = (function () {
            let [e, t] = (0, a.useState)(i.isOpen);
            return (
              (0, a.useEffect)(() => {
                let e = (e) => {
                  t(e.detail.isOpen);
                };
                return (
                  window.addEventListener('devtoolschange', e),
                  () => {
                    window.removeEventListener('devtoolschange', e);
                  }
                );
              }, []),
              e
            );
          })(),
          n = c();
        function s() {
          return false;
        }
        return ((0, a.useEffect)(() => {
          if (!n) {
            let e = (e) => {
                ('F12' === e.key ||
                  (e.ctrlKey && e.shiftKey && 'I' === e.key) ||
                  (e.ctrlKey && e.shiftKey && 'C' === e.key) ||
                  (e.ctrlKey && e.shiftKey && 'J' === e.key) ||
                  (e.ctrlKey && 'U' === e.key)) &&
                  e.preventDefault();
              },
              t = (e) => {
                e.preventDefault();
              };
            return (
              window.addEventListener('keydown', e),
              window.addEventListener('contextmenu', t),
              () => {
                window.removeEventListener('keydown', e),
                  window.removeEventListener('contextmenu', t);
              }
            );
          }
        }, [n]),
        n)
          ? (0, r.jsx)(r.Fragment, {
              children: e.children,
            })
          : false
          ? (0, r.jsxs)('div', {
              children: [
                'Violation of game rules. Please contact to admin.',
                ' ',
                JSON.stringify(t),
                ' | ',
                JSON.stringify(!!s()),
              ],
            })
          : (0, r.jsx)(r.Fragment, {
              children: e.children,
            });
      };
    },
    75380: function (e, t, n) {
      'use strict';
      n.d(t, {
        default: function () {
          return y;
        },
        c: function () {
          return g;
        },
      });
      var r = n(45615),
        a = n(13352),
        i = n(25652),
        s = n(82216),
        o = n(48278),
        l = n(52225),
        c = n(33078);
      function u(e) {
        let { setValue: t, contentClassName: n, className: i } = e,
          s = (0, a.useRef)(null),
          o = (0, a.useCallback)((e) => {
            let t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
              n = '';
            for (let r = 0; r < e; r++) {
              let e = Math.floor(Math.random() * t.length);
              n += t[e];
            }
            return n;
          }, []),
          l = (0, a.useCallback)((e) => {
            let t = s.current;
            if (!t) return;
            let n = t.getContext('2d');
            n &&
              (n.clearRect(0, 0, t.width, t.height),
              (n.fillStyle = 'transparent'),
              n.fillRect(0, 0, t.width, t.height),
              (n.font = '24px Arial'),
              (n.fillStyle = '#000000'),
              (n.textAlign = 'center'),
              (n.textBaseline = 'middle'),
              n.fillText(e, t.width / 2, t.height / 2),
              (n.strokeStyle = '#000'),
              (n.lineWidth = 1),
              n.beginPath(),
              n.moveTo(0, 0),
              n.lineTo(t.width, t.height),
              n.stroke(),
              (n.fillStyle = '#000'),
              n.fillRect(0, t.height / 2, t.width, 1.5),
              (n.strokeStyle = '#000'),
              (n.lineWidth = 1),
              n.beginPath(),
              n.moveTo(0, t.height),
              n.lineTo(t.width, 0),
              n.stroke());
          }, []),
          u = (0, a.useCallback)(() => {
            let e = o(3);
            t(e), l(e);
          }, [l, o, t]);
        return (
          (0, a.useEffect)(() => {
            u();
          }, [u]),
          (0, r.jsxs)('div', {
            className:
              'w-full flex flex-row gap-2 p-1 pr-4 justify-between border border-border bg-[#FFF2EA] rounded-2xl '.concat(
                i
              ),
            children: [
              (0, r.jsx)('div', {
                className: n,
                children: (0, r.jsx)('canvas', {
                  ref: s,
                  height: 36,
                  width: 120,
                }),
              }),
              (0, r.jsx)(c.Z, {
                className: 'cursor-pointer w-5',
                onClick: u,
              }),
            ],
          })
        );
      }
      var d = n(6059),
        h = {
          src: '/_next/static/media/warning.19966d29.png',
          height: 360,
          width: 686,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbElEQVR42mNI89GaHW0W7KpT76/bEGAYbKOd5qAXZ6XHwMOqHyuqn2RkcLDGfl+FnaOMJgOnLoOIPoO2sRODiXWGc3J/buSkrJBMjyh7SQUGXj2GnHDzgmjbRF+3gqjUrKCwZHfbZFuNWAtNADNuGtUlNHTmAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 4,
        },
        f = n(32530),
        m = n(4049);
      let g = (0, i.Ue)()(
        (0, s.tJ)(
          (e) => ({
            checkBot: 0,
            checkedPoint: 0,
            setCheckBot: () =>
              e(
                (0, m.Uy)((e) => {
                  e.checkBot = e.checkBot + 1;
                })
              ),
            setCheckedPoint: (t) =>
              e(
                (0, m.Uy)((e) => {
                  (e.checkedPoint = t), (e.checkBot = 0);
                })
              ),
          }),
          {
            name: 'warning::agreed',
            storage: (0, s.FL)(() => localStorage),
          }
        )
      );
      function y(e) {
        let { children: t } = e,
          { data: n } = (0, d.a)(),
          [i, s] = (0, a.useState)(''),
          [c, m] = (0, a.useState)(''),
          [y, p] = (0, a.useState)(!1),
          { checkBot: b, checkedPoint: v, setCheckedPoint: w } = g(),
          x = (0, a.useMemo)(() => {
            let e = 0;
            if ((n.botApiCount && (e += n.botApiCount), n.toolLogs))
              for (let t of n.toolLogs) e += t.count;
            return e;
          }, [n.botApiCount, n.toolLogs]),
          A = (0, a.useMemo)(() => {
            let e = 0;
            if ((n.hisBotApiCount && (e += n.hisBotApiCount), n.hisToolLogs))
              for (let t of n.hisToolLogs) e += t.count;
            return e;
          }, [n.hisBotApiCount, n.hisToolLogs]),
          S = 100;
        x > 100 && (S = 50),
          x > 500 && (S = 10),
          (0, a.useEffect)(() => {
            let e = x + A > 20 && v < b - S,
              t = v < b - 280;
            (e || t) && p(!0);
          }, [S, x, b, v, A]);
        let C = (0, a.useCallback)(() => {
          if (c) {
            if (i.toLowerCase() !== c.toLowerCase())
              return console.log('wrong captcha');
            p(!1), w(x);
          }
        }, [x, i, w, c]);
        (0, a.useEffect)(() => {
          let e;
          return (
            y &&
              (e = setInterval(() => {
                (0, f.M)('Bot Detected - Account at Risk ('.concat(i, ')'));
              }, 15e3)),
            () => {
              e && clearTimeout(e);
            }
          );
        }, [i, y]);
        let M =
            x > 30
              ? 'Cheating Detected - Account at Risk'
              : 'Quick Verification - Account at Risk \n',
          D =
            x > 30
              ? ' We suspect your account of cheating. Close the unauthorized app\n                and play fairly immediately to avoid a ban'
              : "We noticed some activity that might indicate automated use. To keep our platform secure, please verify you're a human by completing this quick step to avoid a ban.";
        return (0, r.jsxs)(a.Fragment, {
          children: [
            t,
            (0, r.jsx)(l.Z, {
              open: y,
              onClose: () => {},
              children: (0, r.jsxs)('div', {
                className: 'flex flex-col gap-4',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'card flex-col gap-4 !p-0 overflow-hidden',
                    children: [
                      (0, r.jsx)(o.default, {
                        src: h,
                        alt: 'warning',
                      }),
                      (0, r.jsxs)('div', {
                        className: 'flex flex-col gap-2 p-4',
                        children: [
                          (0, r.jsxs)('p', {
                            className:
                              'text-base text-danger font-bold text-center',
                            children: [M, ' (', x, ')'],
                          }),
                          (0, r.jsx)('span', {
                            className: 'text-center',
                            children: D,
                          }),
                          (0, r.jsx)(u, {
                            className: 'py-2',
                            contentClassName: 'w-full flex justify-center',
                            setValue: s,
                          }),
                          (0, r.jsx)('input', {
                            placeholder: 'Enter Captcha',
                            className:
                              'input input-lg border-border rounded-2xl text-center',
                            value: c,
                            onChange: (e) => m(e.target.value),
                            style: {
                              outline: 'none',
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)('button', {
                    className: 'btn p-4',
                    onClick: C,
                    disabled: !c,
                    children: 'Confirm',
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    21198: function () {},
    46385: function () {},
    24064: function () {},
    11253: function () {},
    99880: function (e, t) {
      'use strict';
      t.Z = {
        src: '/_next/static/media/bee.f27a67a3.svg',
        height: 69,
        width: 50,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    69458: function (e, t) {
      'use strict';
      t.default = {
        src: '/_next/static/media/maintenance.d226cff6.png',
        height: 2344,
        width: 1373,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAo0lEQVR42gWATQvBYACAn/dDa4uVJpIUN3Jwc1NODg6OfoEf4B9ylzO1HGRpyXxsiA2vxGza/xUtS7i2S3yNic5v5NyXFGSEI3bk7YjFTaA7dY+DaPJ6GuycolON0X6iSBwX8/miMk0Q35DLIKScbBjUUrzHmlV4Qk/KhvGoh+OVaLgWx+0SbZQi2G0ZWj7RNaTddZCtRkrp4iP2Dy7ZnV7F8AeriT4XcdOefAAAAABJRU5ErkJggg==',
        blurWidth: 5,
        blurHeight: 8,
      };
    },
    79620: function (e, t) {
      'use strict';
      t.Z = {
        src: '/_next/static/media/star-confetti.c76d87cc.png',
        height: 148,
        width: 345,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Af//rgUAAP8M7ZVTAhNKcnoABwcA77GHhxFdn/8ADBXzAfzOW5oCBf9i89DQZQkgE5j//gQG+OPlYg0uMZv+AAmhAfevG2P17+9i790WaAoD4CHr4AAGHTYI1v4JBZYEBhKrV+wqo4NibaEAAAAASUVORK5CYII=',
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    45790: function (e, t) {
      'use strict';
      t.Z = {
        src: '/_next/static/media/light-circle.672559a2.svg',
        height: 124,
        width: 125,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    16977: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__Radio_Canada_e5ce5e', '__Radio_Canada_Fallback_e5ce5e'",
          fontStyle: 'normal',
        },
        className: '__className_e5ce5e',
      };
    },
    33078: function (e, t, n) {
      'use strict';
      var r = n(13352);
      let a = r.forwardRef(function (e, t) {
        let { title: n, titleId: a, ...i } = e;
        return r.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 1.5,
              stroke: 'currentColor',
              'aria-hidden': 'true',
              'data-slot': 'icon',
              ref: t,
              'aria-labelledby': a,
            },
            i
          ),
          n
            ? r.createElement(
                'title',
                {
                  id: a,
                },
                n
              )
            : null,
          r.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99',
          })
        );
      });
      t.Z = a;
    },
  },
  function (e) {
    e.O(
      0,
      [
        1342, 5071, 4224, 5863, 8278, 2643, 8575, 8528, 9109, 8817, 78, 4586,
        4939, 1744,
      ],
      function () {
        return e((e.s = 13983));
      }
    ),
      (_N_E = e.O());
  },
]);
