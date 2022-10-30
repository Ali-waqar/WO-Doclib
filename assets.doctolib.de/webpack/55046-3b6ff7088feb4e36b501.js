/*! For license information please see 55046-3b6ff7088feb4e36b501.js.LICENSE.txt */
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [55046], {
        654697: (e, r, t) => {
            "use strict";
            t.d(r, {
                Z: () => y
            });
            var s = t(911526),
                a = t(146411),
                n = t(26686),
                c = t(727563),
                o = t(520211),
                i = t(88160),
                u = t(992190),
                l = function(e, r, t) {
                    for (var s = 0, n = 0; s = n, n = (0, a.fj)(), 38 === s && 12 === n && (r[t] = 1), !(0, a.r)(n);)(0, a.lp)();
                    return (0, a.tP)(e, a.FK)
                },
                p = function(e, r) {
                    return (0, a.cE)(function(e, r) {
                        var t = -1,
                            s = 44;
                        do {
                            switch ((0, a.r)(s)) {
                                case 0:
                                    38 === s && 12 === (0, a.fj)() && (r[t] = 1), e[t] += l(a.FK - 1, r, t);
                                    break;
                                case 2:
                                    e[t] += (0, a.iF)(s);
                                    break;
                                case 4:
                                    if (44 === s) {
                                        e[++t] = 58 === (0, a.fj)() ? "&\f" : "", r[t] = e[t].length;
                                        break
                                    }
                                default:
                                    e[t] += (0, n.Dp)(s)
                            }
                        } while (s = (0, a.lp)());
                        return e
                    }((0, a.un)(e), r))
                },
                f = new WeakMap,
                d = function(e) {
                    if ("rule" === e.type && e.parent && !(e.length < 1)) {
                        for (var r = e.value, t = e.parent, s = e.column === t.column && e.line === t.line;
                            "rule" !== t.type;)
                            if (!(t = t.parent)) return;
                        if ((1 !== e.props.length || 58 === r.charCodeAt(0) || f.get(t)) && !s) {
                            f.set(e, !0);
                            for (var a = [], n = p(r, a), c = t.props, o = 0, i = 0; o < n.length; o++)
                                for (var u = 0; u < c.length; u++, i++) e.props[i] = a[o] ? n[o].replace(/&\f/g, c[u]) : c[u] + " " + n[o]
                        }
                    }
                },
                $ = function(e) {
                    if ("decl" === e.type) {
                        var r = e.value;
                        108 === r.charCodeAt(0) && 98 === r.charCodeAt(2) && (e.return = "", e.value = "")
                    }
                };

            function g(e, r) {
                switch ((0, n.vp)(e, r)) {
                    case 5103:
                        return c.G$ + "print-" + e + e;
                    case 5737:
                    case 4201:
                    case 3177:
                    case 3433:
                    case 1641:
                    case 4457:
                    case 2921:
                    case 5572:
                    case 6356:
                    case 5844:
                    case 3191:
                    case 6645:
                    case 3005:
                    case 6391:
                    case 5879:
                    case 5623:
                    case 6135:
                    case 4599:
                    case 4855:
                    case 4215:
                    case 6389:
                    case 5109:
                    case 5365:
                    case 5621:
                    case 3829:
                        return c.G$ + e + e;
                    case 5349:
                    case 4246:
                    case 4810:
                    case 6968:
                    case 2756:
                        return c.G$ + e + c.uj + e + c.MS + e + e;
                    case 6828:
                    case 4268:
                        return c.G$ + e + c.MS + e + e;
                    case 6165:
                        return c.G$ + e + c.MS + "flex-" + e + e;
                    case 5187:
                        return c.G$ + e + (0, n.gx)(e, /(\w+).+(:[^]+)/, c.G$ + "box-$1$2" + c.MS + "flex-$1$2") + e;
                    case 5443:
                        return c.G$ + e + c.MS + "flex-item-" + (0, n.gx)(e, /flex-|-self/, "") + e;
                    case 4675:
                        return c.G$ + e + c.MS + "flex-line-pack" + (0, n.gx)(e, /align-content|flex-|-self/, "") + e;
                    case 5548:
                        return c.G$ + e + c.MS + (0, n.gx)(e, "shrink", "negative") + e;
                    case 5292:
                        return c.G$ + e + c.MS + (0, n.gx)(e, "basis", "preferred-size") + e;
                    case 6060:
                        return c.G$ + "box-" + (0, n.gx)(e, "-grow", "") + c.G$ + e + c.MS + (0, n.gx)(e, "grow", "positive") + e;
                    case 4554:
                        return c.G$ + (0, n.gx)(e, /([^-])(transform)/g, "$1" + c.G$ + "$2") + e;
                    case 6187:
                        return (0, n.gx)((0, n.gx)((0, n.gx)(e, /(zoom-|grab)/, c.G$ + "$1"), /(image-set)/, c.G$ + "$1"), e, "") + e;
                    case 5495:
                    case 3959:
                        return (0, n.gx)(e, /(image-set\([^]*)/, c.G$ + "$1$`$1");
                    case 4968:
                        return (0, n.gx)((0, n.gx)(e, /(.+:)(flex-)?(.*)/, c.G$ + "box-pack:$3" + c.MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + c.G$ + e + e;
                    case 4095:
                    case 3583:
                    case 4068:
                    case 2532:
                        return (0, n.gx)(e, /(.+)-inline(.+)/, c.G$ + "$1$2") + e;
                    case 8116:
                    case 7059:
                    case 5753:
                    case 5535:
                    case 5445:
                    case 5701:
                    case 4933:
                    case 4677:
                    case 5533:
                    case 5789:
                    case 5021:
                    case 4765:
                        if ((0, n.to)(e) - 1 - r > 6) switch ((0, n.uO)(e, r + 1)) {
                            case 109:
                                if (45 !== (0, n.uO)(e, r + 4)) break;
                            case 102:
                                return (0, n.gx)(e, /(.+:)(.+)-([^]+)/, "$1" + c.G$ + "$2-$3$1" + c.uj + (108 == (0, n.uO)(e, r + 3) ? "$3" : "$2-$3")) + e;
                            case 115:
                                return ~(0, n.Cw)(e, "stretch") ? g((0, n.gx)(e, "stretch", "fill-available"), r) + e : e
                        }
                        break;
                    case 4949:
                        if (115 !== (0, n.uO)(e, r + 1)) break;
                    case 6444:
                        switch ((0, n.uO)(e, (0, n.to)(e) - 3 - (~(0, n.Cw)(e, "!important") && 10))) {
                            case 107:
                                return (0, n.gx)(e, ":", ":" + c.G$) + e;
                            case 101:
                                return (0, n.gx)(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + c.G$ + (45 === (0, n.uO)(e, 14) ? "inline-" : "") + "box$3$1" + c.G$ + "$2$3$1" + c.MS + "$2box$3") + e
                        }
                        break;
                    case 5936:
                        switch ((0, n.uO)(e, r + 11)) {
                            case 114:
                                return c.G$ + e + c.MS + (0, n.gx)(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                            case 108:
                                return c.G$ + e + c.MS + (0, n.gx)(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                            case 45:
                                return c.G$ + e + c.MS + (0, n.gx)(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                        }
                        return c.G$ + e + c.MS + e + e
                }
                return e
            }
            var x = [function(e, r, t, s) {
                if (e.length > -1 && !e.return) switch (e.type) {
                    case c.h5:
                        e.return = g(e.value, e.length);
                        break;
                    case c.lK:
                        return (0, o.q)([(0, a.JG)(e, {
                            value: (0, n.gx)(e.value, "@", "@" + c.G$)
                        })], s);
                    case c.Fr:
                        if (e.length) return (0, n.$e)(e.props, (function(r) {
                            switch ((0, n.EQ)(r, /(::plac\w+|:read-\w+)/)) {
                                case ":read-only":
                                case ":read-write":
                                    return (0, o.q)([(0, a.JG)(e, {
                                        props: [(0, n.gx)(r, /:(read-\w+)/, ":" + c.uj + "$1")]
                                    })], s);
                                case "::placeholder":
                                    return (0, o.q)([(0, a.JG)(e, {
                                        props: [(0, n.gx)(r, /:(plac\w+)/, ":" + c.G$ + "input-$1")]
                                    }), (0, a.JG)(e, {
                                        props: [(0, n.gx)(r, /:(plac\w+)/, ":" + c.uj + "$1")]
                                    }), (0, a.JG)(e, {
                                        props: [(0, n.gx)(r, /:(plac\w+)/, c.MS + "input-$1")]
                                    })], s)
                            }
                            return ""
                        }))
                }
            }];
            const y = function(e) {
                var r = e.key;
                if ("css" === r) {
                    var t = document.querySelectorAll("style[data-emotion]:not([data-s])");
                    Array.prototype.forEach.call(t, (function(e) {
                        -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
                    }))
                }
                var a = e.stylisPlugins || x;
                var n, c, l = {},
                    p = [];
                n = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), (function(e) {
                    for (var r = e.getAttribute("data-emotion").split(" "), t = 1; t < r.length; t++) l[r[t]] = !0;
                    p.push(e)
                }));
                var f = [d, $];
                var g, y = [o.P, (0, i.cD)((function(e) {
                        g.insert(e)
                    }))],
                    h = (0, i.qR)(f.concat(a, y));
                c = function(e, r, t, s) {
                    var a;
                    g = t, a = e ? e + "{" + r.styles + "}" : r.styles, (0, o.q)((0, u.MY)(a), h), s && (b.inserted[r.name] = !0)
                };
                var b = {
                    key: r,
                    sheet: new s.m({
                        key: r,
                        container: n,
                        nonce: e.nonce,
                        speedy: e.speedy,
                        prepend: e.prepend,
                        insertionPoint: e.insertionPoint
                    }),
                    nonce: e.nonce,
                    inserted: l,
                    registered: {},
                    insert: c
                };
                return b.sheet.hydrate(p), b
            }
        },
        327278: (e, r, t) => {
            "use strict";
            t.d(r, {
                L: () => n
            });
            var s = t(184481),
                a = !!s.useInsertionEffect && s.useInsertionEffect,
                n = a || function(e) {
                    return e()
                };
            a || s.useLayoutEffect
        },
        181719: (e, r, t) => {
            "use strict";
            t.d(r, {
                FO: () => n,
                ZP: () => c
            });
            var s = t(432807),
                a = t(225165);
            const n = e => (0, s.x9)(e) && "classes" !== e,
                c = (0, s.ZP)({
                    defaultTheme: a.Z,
                    rootShouldForwardProp: n
                })
        },
        495408: (e, r, t) => {
            "use strict";
            t.d(r, {
                L7: () => o,
                VO: () => s,
                W8: () => c,
                k9: () => n
            });
            const s = {
                    xs: 0,
                    sm: 600,
                    md: 900,
                    lg: 1200,
                    xl: 1536
                },
                a = {
                    keys: ["xs", "sm", "md", "lg", "xl"],
                    up: e => `@media (min-width:${s[e]}px)`
                };

            function n(e, r, t) {
                const n = e.theme || {};
                if (Array.isArray(r)) {
                    const e = n.breakpoints || a;
                    return r.reduce(((s, a, n) => (s[e.up(e.keys[n])] = t(r[n]), s)), {})
                }
                if ("object" === typeof r) {
                    const e = n.breakpoints || a;
                    return Object.keys(r).reduce(((a, n) => {
                        if (-1 !== Object.keys(e.values || s).indexOf(n)) {
                            a[e.up(n)] = t(r[n], n)
                        } else {
                            const e = n;
                            a[e] = r[e]
                        }
                        return a
                    }), {})
                }
                return t(r)
            }

            function c(e = {}) {
                var r;
                return (null == (r = e.keys) ? void 0 : r.reduce(((r, t) => (r[e.up(t)] = {}, r)), {})) || {}
            }

            function o(e, r) {
                return e.reduce(((e, r) => {
                    const t = e[r];
                    return (!t || 0 === Object.keys(t).length) && delete e[r], e
                }), r)
            }
        },
        226809: (e, r, t) => {
            "use strict";
            t.d(r, {
                G$: () => $
            });
            var s = t(973019),
                a = t(660208),
                n = t(134523),
                c = t(472053),
                o = t(557373),
                i = t(784126),
                u = t(727081),
                l = t(678241),
                p = t(462605),
                f = t(258706);
            const d = {
                    borders: s.ZP.filterProps,
                    display: a.ZP.filterProps,
                    flexbox: n.ZP.filterProps,
                    grid: c.ZP.filterProps,
                    positions: o.ZP.filterProps,
                    palette: i.ZP.filterProps,
                    shadows: u.Z.filterProps,
                    sizing: l.ZP.filterProps,
                    spacing: p.ZP.filterProps,
                    typography: f.ZP.filterProps
                },
                $ = {
                    borders: s.ZP,
                    display: a.ZP,
                    flexbox: n.ZP,
                    grid: c.ZP,
                    positions: o.ZP,
                    palette: i.ZP,
                    shadows: u.Z,
                    sizing: l.ZP,
                    spacing: p.ZP,
                    typography: f.ZP
                };
            Object.keys(d).reduce(((e, r) => (d[r].forEach((t => {
                e[t] = $[r]
            })), e)), {})
        },
        259766: (e, r, t) => {
            "use strict";
            t.d(r, {
                Z: () => n
            });
            var s = t(487462);

            function a(e) {
                return null !== e && "object" === typeof e && e.constructor === Object
            }

            function n(e, r, t = {
                clone: !0
            }) {
                const c = t.clone ? (0, s.Z)({}, e) : e;
                return a(e) && a(r) && Object.keys(r).forEach((s => {
                    "__proto__" !== s && (a(r[s]) && s in e && a(e[s]) ? c[s] = n(e[s], r[s], t) : c[s] = r[s])
                })), c
            }
        },
        513218: e => {
            e.exports = function(e) {
                var r = typeof e;
                return null != e && ("object" == r || "function" == r)
            }
        },
        620745: (e, r, t) => {
            "use strict";
            var s = t(897170);
            r.s = s.createRoot, s.hydrateRoot
        },
        675251: (e, r, t) => {
            "use strict";
            var s = t(184481),
                a = Symbol.for("react.element"),
                n = Symbol.for("react.fragment"),
                c = Object.prototype.hasOwnProperty,
                o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                i = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function u(e, r, t) {
                var s, n = {},
                    u = null,
                    l = null;
                for (s in void 0 !== t && (u = "" + t), void 0 !== r.key && (u = "" + r.key), void 0 !== r.ref && (l = r.ref), r) c.call(r, s) && !i.hasOwnProperty(s) && (n[s] = r[s]);
                if (e && e.defaultProps)
                    for (s in r = e.defaultProps) void 0 === n[s] && (n[s] = r[s]);
                return {
                    $$typeof: a,
                    type: e,
                    key: u,
                    ref: l,
                    props: n,
                    _owner: o.current
                }
            }
            r.Fragment = n, r.jsx = u, r.jsxs = u
        },
        785893: (e, r, t) => {
            "use strict";
            e.exports = t(675251)
        }
    }
]);
//# sourceMappingURL=55046-3b6ff7088feb4e36b501.js.map