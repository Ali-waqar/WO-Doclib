"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [11864], {
        947249: (e, t, n) => {
            n.d(t, {
                VP: () => l,
                YB: () => d,
                ZP: () => u
            });
            var a = n(184481),
                o = n(845126),
                r = n(294184),
                i = n.n(r),
                s = (n(202969), n(785893));
            const d = Symbol("all-selected"),
                l = Symbol("some-selected");
            class c extends a.PureComponent {
                handleKeyPress(e) {
                    " " === e.key && this.props.onClick(e)
                }
                render() {
                    const {
                        className: e,
                        disabled: t,
                        selected: n,
                        onClick: a
                    } = this.props;
                    return (0, s.jsx)("span", {
                        className: i()("dc-checkbox", e, {
                            "dc-disabled": t,
                            "dc-all-selected": n === d,
                            "dc-some-selected": n === l
                        }),
                        disabled: t,
                        onClick: a,
                        role: "checkbox",
                        "aria-checked": (r = n, r === d || (r === l ? "mixed" : r)),
                        onKeyPress: this.handleKeyPress,
                        children: n === d && (0, s.jsx)(o.Z, {
                            name: "solid/check",
                            className: "dc-checkbox-icon",
                            role: "presentation"
                        })
                    });
                    var r
                }
            }
            const u = c
        },
        698225: (e, t, n) => {
            n.d(t, {
                J4: () => o,
                Nt: () => a
            });
            n(66604), n(339138);
            const a = Object.freeze({
                    a6: "A6",
                    a5: "A5",
                    a4: "A4"
                }),
                o = Object.freeze({
                    landscape: "landscape",
                    portrait: "portrait"
                });
            Object.freeze({
                [a.a6]: {
                    width: 105,
                    height: 148
                },
                [a.a5]: {
                    width: 148,
                    height: 210
                },
                [a.a4]: {
                    width: 210,
                    height: 297
                }
            })
        },
        752646: (e, t, n) => {
            n.d(t, {
                m: () => o
            });
            var a = n(747317);
            const o = e => e ? a.i.ESTABLISHMENTS_PROFILES : a.i.PROFILE
        },
        774435: (e, t, n) => {
            n.d(t, {
                P: () => h,
                Z: () => p
            });
            var a = n(184481),
                o = n(364579),
                r = n(929014),
                i = n(445884),
                s = n(545763),
                d = n(516590),
                l = n(422554),
                c = n(785893);
            const u = e => e && e.hasOwnProperty("name") && "ChunkLoadError" === e.name,
                m = e => e && e.message.includes("Loading CSS chunk");
            class p extends a.Component {
                static getDerivedStateFromError(e) {
                    return u(e) || m(e) ? {
                        chunkError: !0
                    } : {
                        genericError: !0
                    }
                }
                constructor(e) {
                    super(e), this.state = {
                        chunkError: !1,
                        genericError: !1
                    }
                }
                componentDidCatch(e) {
                    const {
                        component: t,
                        team: n
                    } = this.props, a = {
                        tags: {
                            component: t,
                            transactionTeam: n
                        },
                        fingerprint: [n, t, e.message]
                    };
                    u(e) || m(e) ? (0, l.LL)({
                        name: "error_boundary_chunk_error",
                        details: {
                            item_type: "error",
                            chunk_type: u(e) ? "js" : "css",
                            category_name: t
                        }
                    }) : ((0, l.LL)({
                        name: "error_boundary_exception",
                        details: {
                            item_type: "error",
                            category_name: t,
                            subcategory_name: n,
                            error_message: e.message
                        }
                    }), (0, d.ZP)({
                        name: "error_boundary_exception",
                        details: {
                            category_name: t,
                            subcategory_name: n,
                            error: {
                                message: e.message
                            }
                        }
                    }), window.crashReporter.captureException(e, a))
                }
                render() {
                    return this.state.genericError || this.state.chunkError ? "desktop" === window.platforms.variant ? (0, c.jsxs)(r.Z, {
                        variant: "deprecated-alert-interface",
                        uiStyle: "error",
                        className: this.props.className,
                        children: [i.Z.t("common.long_error"), this.props.onClose && (0, c.jsxs)(c.Fragment, {
                            children: [" ", (0, c.jsx)(s.Z, {
                                uiStyle: "link-primary",
                                onClick: this.props.onClose,
                                children: i.Z.t("common.long_error_click_to_close")
                            })]
                        })]
                    }) : (0, c.jsx)(o.Z, {
                        error: this.state.chunkError ? i.Z.t("common.network_error") : void 0
                    }) : this.props.children
                }
            }
            const h = (e, t) => n => {
                var a, o;
                return (0, c.jsx)(p, {
                    component: null !== (a = null !== (o = t.component) && void 0 !== o ? o : e.displayName) && void 0 !== a ? a : e.name,
                    team: t.team,
                    ...t,
                    children: (0, c.jsx)(e, { ...n
                    })
                })
            }
        },
        710270: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var a = n(118704),
                o = n(437124);
            const r = e => (0, a.S)({
                httpClient: o.ZP,
                ...e
            })
        },
        83057: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var a = n(294184),
                o = n.n(a),
                r = n(184481),
                i = n.n(r),
                s = n(45697),
                d = n.n(s),
                l = n(981590),
                c = n(728853),
                u = n.n(c),
                m = n(329648),
                p = n(785893);
            l.Y, d().bool, d().bool, d().func, d().oneOfType([d().bool, u()]), d().func, d().func, d().func, d().func, d().func, d().func, d().oneOf(["top", "right", "bottom", "left"]);
            const h = {
                animation: m.Z,
                rootClose: !1,
                show: !1,
                placement: "right"
            };
            class _ extends i().Component {
                render() {
                    const {
                        animation: e,
                        children: t,
                        ...n
                    } = this.props, a = !0 === e ? m.Z : e || null;
                    let i;
                    return i = a ? t : (0, r.cloneElement)(t, {
                        className: o()(t.props.className, "in")
                    }), (0, p.jsx)(l.Z, { ...n,
                        transition: a,
                        children: i
                    })
                }
            }
            _.defaultProps = h;
            const g = _
        },
        441775: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var a = n(294184),
                o = n.n(a),
                r = n(184481),
                i = n.n(r),
                s = n(999722),
                d = (n(655638), n(215827)),
                l = n(785893);
            class c extends i().Component {
                render() {
                    const {
                        placement: e,
                        positionTop: t,
                        positionLeft: n,
                        arrowOffsetTop: a,
                        arrowOffsetLeft: r,
                        className: i,
                        style: c,
                        children: u,
                        innerRef: m,
                        tooltipHtml: p,
                        ...h
                    } = this.props, [_, g] = (0, d.D9)(h), T = { ...(0, d.Nj)(_),
                        [e]: !0
                    }, v = {
                        top: t,
                        left: n,
                        ...c
                    }, w = {
                        top: a,
                        left: r
                    };
                    return (0, l.jsxs)("div", { ...g,
                        ref: m,
                        role: "tooltip",
                        className: o()(i, T),
                        style: v,
                        children: [(0, l.jsx)("div", {
                            className: (0, d.O4)(_, "arrow"),
                            style: w
                        }), p ? (0, l.jsx)(s.Z, {
                            className: (0, d.O4)(_, "inner"),
                            children: p
                        }) : (0, l.jsx)("div", {
                            className: (0, d.O4)(_, "inner"),
                            children: u
                        })]
                    })
                }
            }
            c.defaultProps = {
                placement: "right"
            };
            const u = (0, d.Pn)("tooltip", c)
        },
        13912: (e, t, n) => {
            n.d(t, {
                $u: () => a,
                H2: () => o,
                ZM: () => r,
                bg: () => i
            });
            const a = {
                    LARGE: "large",
                    SMALL: "small",
                    XSMALL: "xsmall"
                },
                o = {
                    large: "lg",
                    medium: "md",
                    small: "sm",
                    xsmall: "xs",
                    lg: "lg",
                    md: "md",
                    sm: "sm",
                    xs: "xs"
                },
                r = {
                    SUCCESS: "success",
                    WARNING: "warning",
                    DANGER: "danger",
                    INFO: "info"
                },
                i = {
                    DEFAULT: "default",
                    PRIMARY: "primary",
                    LINK: "link",
                    INVERSE: "inverse"
                }
        },
        149746: (e, t, n) => {
            n.d(t, {
                Z: () => i,
                s: () => r
            });
            var a = n(925148);
            const o = () => ({
                api: {
                    preValidate: a.Z.noop,
                    validate: a.Z.noop
                },
                children: {},
                getProps: () => ({})
            });

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return { ...o(),
                    ...e
                }
            }
            const i = class {
                constructor(e) {
                    this.root = r(e)
                }
                addNode(e) {
                    let t = this.root;
                    const n = a.Z.makePathArray(e.fullField);
                    for (; n.length > 1;) t.children[n[0]] || (t.children[n[0]] = r({
                        nested: !0,
                        field: n[0],
                        fullField: a.Z.makePathArray([t.fullField, n[0]]),
                        parent: t
                    })), t = t.children[n[0]], n.shift();
                    const o = r({ ...e,
                        field: n[0],
                        parent: t
                    });
                    t.children[n[0]] = o
                }
                removeNode(e) {
                    let t = this.root;
                    const n = a.Z.makePathArray(e.fullField);
                    for (; n.length > 1;) {
                        if (!t.children[n[0]]) return;
                        t = t.children[n[0]], n.shift()
                    }
                    delete t.children[n[0]]
                }
                getNodeByField(e) {
                    let {
                        closest: t
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this.root;
                    const o = a.Z.makePathArray(e);
                    for (; o.length;) {
                        if (!n.children || !n.children[o[0]]) return t ? n : null;
                        n = n.children[o[0]], o.shift()
                    }
                    return n
                }
            }
        },
        65872: (e, t, n) => {
            n.d(t, {
                jy: () => G,
                nx: () => M
            });
            var a = n(698225),
                o = n(734334),
                r = n(414706),
                i = n(604534),
                s = n(940944),
                d = n(930302),
                l = n(915054),
                c = n(885880),
                u = n(790714),
                m = n(595601),
                p = n(750510),
                h = n(68517),
                _ = n(47872),
                g = n(624084),
                T = n(496310),
                v = n(36274),
                w = n(486206),
                P = n(701252),
                N = n(882546),
                f = n(837019),
                E = n(17206),
                y = n(527199),
                C = n(211228),
                O = n(21051),
                k = n(597724),
                I = n(781809),
                A = n(822113),
                S = n(801124),
                b = n(136478),
                R = n(276898),
                x = n(447041),
                L = n(952678);
            const {
                a4: Z
            } = a.Nt, {
                portrait: D
            } = a.J4, M = Object.freeze({
                workStoppage: {
                    kind: "work_stoppage",
                    version: "work_stoppage_2022_01",
                    orientation: D,
                    format: Z,
                    previewImages: [d, l, c]
                },
                workStoppage202205: {
                    kind: "work_stoppage",
                    version: "work_stoppage_2022_05",
                    orientation: D,
                    format: Z,
                    previewImages: [u, m, p]
                },
                transportVoucher: {
                    kind: "transport_voucher",
                    version: "transport_voucher_2022_01",
                    orientation: D,
                    format: Z,
                    previewImages: [h, _]
                },
                nursingCareProcedure: {
                    kind: "nursing_care_procedure",
                    version: "nursing_care_procedure_2022_01",
                    orientation: D,
                    format: Z,
                    previewImages: [g, T]
                },
                workAccident: {
                    kind: "work_accident",
                    version: "work_accident_2022_01",
                    orientation: D,
                    format: Z,
                    previewImages: [v, w, P, N]
                },
                workAccident202205: {
                    kind: "work_accident",
                    version: "work_accident_2022_05",
                    orientation: D,
                    format: Z,
                    previewImages: [f, E, y]
                },
                mdphFile: {
                    kind: "mdph_file",
                    version: "mdph_file_2022_01",
                    orientation: D,
                    format: Z,
                    previewImages: [C, O, k, I, A, S, b, R]
                },
                spaTreatment: {
                    kind: "spa_treatment",
                    version: "spa_treatment_2022_01",
                    orientation: D,
                    format: Z,
                    previewImages: [x, L]
                },
                exceptionMedication: {
                    kind: "exception_medication",
                    version: "exception_medication_2022_10",
                    orientation: D,
                    format: Z,
                    previewImages: [o, r, i, s]
                }
            }), G = Object.values(M).map((e => e.kind))
        },
        903676: (e, t, n) => {
            n.d(t, {
                W: () => r
            });
            var a = n(445884),
                o = n(123195);

            function r(e) {
                if (!e) return "";
                const t = [];
                return e.phone_number && t.push((0, o.W)(e.phone_number)), e.secondary_phone_number && t.push((0, o.W)(e.secondary_phone_number)), t.join(` ${a.Z.t("common.or")} `)
            }
        },
        320020: (e, t, n) => {
            n.d(t, {
                W: () => o
            });
            var a = n(445884);

            function o(e) {
                return e ? e.place_of_birth_unknown ? a.Z.t("common.unknown") : e.place_of_birth_name || "" : ""
            }
        },
        217272: (e, t, n) => {
            n.d(t, {
                N: () => a
            });
            const a = e => {
                "loading" !== window.document.readyState ? e() : window.document.addEventListener("DOMContentLoaded", e)
            }
        },
        366675: (e, t, n) => {
            n.d(t, {
                Fs: () => c,
                OQ: () => l,
                qh: () => d,
                uf: () => s
            });
            var a = n(492844),
                o = n(275824);
            const r = e => (e || "").replace(/\s+/g, ""),
                i = (e, t) => (0, a.h)(r(t), e),
                s = (e, t, n) => {
                    try {
                        const a = i(t, n);
                        return a.country === e ? a.formatNational() : a.formatInternational()
                    } catch (e) {
                        return n || ""
                    }
                },
                d = (e, t) => {
                    if (!t) return !0;
                    try {
                        return i(e, t).isValid()
                    } catch {
                        return !1
                    }
                },
                l = (e, t) => {
                    try {
                        const n = i(e, t).getType();
                        return d(e, t) && ("MOBILE" === n || "FIXED_LINE_OR_MOBILE" === n)
                    } catch {
                        return !1
                    }
                },
                c = (e, t) => {
                    t = r(t);
                    try {
                        const n = new o.R(e);
                        return Array.from(t).reduce(((e, t) => n.input(t)), "")
                    } catch (e) {
                        return t
                    }
                }
        },
        975990: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var a = n(788832);
            new a.Z({
                type: "exact"
            });
            const o = new a.Z({
                type: "dashSpace"
            })
        },
        288802: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var a = n(608575),
                o = n(990626),
                r = n(409205),
                i = n(5212),
                s = n(177140),
                d = n(516590),
                l = n(752646),
                c = n(24553),
                u = n(451421);
            const m = () => {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                        "gtm.start": (new Date).getTime(),
                        event: "gtm.js"
                    });
                    const e = document.getElementsByTagName("script")[0],
                        t = document.createElement("script");
                    t.async = !0, t.src = "https://www.googletagmanager.com/gtm.js?id=GTM-NP3Q9S5", e.parentNode.insertBefore(t, e)
                },
                p = e => i.IF() || i.dm() && i.gw() ? e() : (0, r.aJ)(e),
                h = {
                    state: {
                        enabled: i.IF(),
                        dataLayerKeys: [],
                        customDatalayer: [],
                        currentPageType: void 0
                    },
                    changeGtmStatus(e) {
                        this.state.enabled !== e && (this.state.enabled = e, e && this.sendGtmPageView(this.state.currentPageType, window.location.pathname, !0))
                    },
                    injectGTMScript() {
                        (0, r.vi)(r.GO, r.Dl, m)
                    },
                    sendGtmPageView() {
                        var e;
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        t && (this.resetDataLayer(), this.setEnvironmentVariables(), this.pushToDataLayer(...this.state.customDatalayer), this.pushToDataLayer({
                            user_logged: !!window.current_account,
                            user_account_id: null === (e = window.current_account) || void 0 === e ? void 0 : e.id
                        }), this.pushToDataLayer({
                            page_type: t
                        }), this.pushPathnameData(n), this.triggerPageView(), a || this.triggerInternalTracking(t), this.state.enabled && (this.state.customDatalayer = []), this.state = { ...this.state,
                            currentPageType: t
                        })
                    },
                    triggerInternalTracking(e) {
                        var t, n, o, r, i;
                        const s = null === (t = window.current_account) || void 0 === t ? void 0 : t.id,
                            c = null === (n = this.state.customDatalayer.filter((e => e.appointment_id))[0]) || void 0 === n ? void 0 : n.appointment_id,
                            u = null === (o = this.state.customDatalayer.filter((e => e.profile_id))[0]) || void 0 === o ? void 0 : o.profile_id,
                            m = null === (r = this.state.customDatalayer.filter((e => e.speciality_id))[0]) || void 0 === r ? void 0 : r.speciality_id,
                            p = null === (i = this.state.customDatalayer.filter((e => e.profile_type))[0]) || void 0 === i ? void 0 : i.profile_type,
                            h = (0, a.parse)(window.location.href, !0).query.utm_source,
                            _ = (0, a.parse)(window.location.href, !0).query.utm_medium,
                            g = (0, a.parse)(window.location.href, !0).query.utm_campaign,
                            T = (0, a.parse)(window.location.href, !0).query.utm_content,
                            v = (0, a.parse)(window.location.href, !0).query.utm_term,
                            w = Object.assign({}, ...this.state.customDatalayer),
                            P = document.referrer,
                            N = document.URL,
                            f = (0, l.m)("organization" === p);
                        (0, d.ZP)({
                            name: e,
                            ...u && {
                                itemId: u,
                                itemType: f
                            },
                            details: { ...h && {
                                    source: h
                                },
                                ..._ && {
                                    medium: _
                                },
                                ...g && {
                                    campaign: g
                                },
                                ...T && {
                                    content: T
                                },
                                ...v && {
                                    term: v
                                },
                                ...P && {
                                    referrer: P
                                },
                                ...N && {
                                    page_url: N
                                },
                                ...w,
                                ...s && {
                                    account_id: s
                                },
                                ...u && {
                                    profile_id: u
                                },
                                ...c && {
                                    appointment_id: c
                                },
                                ...m && {
                                    speciality_id: m
                                },
                                ...p && {
                                    profile_type: p
                                }
                            }
                        }, {
                            schema: "gtm_event"
                        })
                    },
                    triggerPageView(e) {
                        if (!this.state.enabled) return;
                        const t = e ? {
                            pagePath: e
                        } : null;
                        p((() => window.dataLayer.push({
                            event: "ga_pageview",
                            ...t
                        })))
                    },
                    resetDataLayer() {
                        this.state.enabled && this.state.dataLayerKeys.length && (window.dataLayer.push(this.state.dataLayerKeys.reduce(((e, t) => ({ ...e,
                            [t]: void 0
                        })), {})), this.state.dataLayerKeys = [])
                    },
                    setEnvironmentVariables() {
                        this.pushToDataLayer({
                            env_channel: i.mr(),
                            env_country: i.rZ(),
                            env_language: i.Kd(),
                            env_work: {
                                staging: "preprod",
                                test: "test",
                                production: "prod",
                                development: "development"
                            }[i.zj()],
                            env_device: (0, s._v)(),
                            env_iframe: i.dm()
                        })
                    },
                    pushToDataLayer(e) {
                        e && (window.dataLayer || (window.dataLayer = []), this.state.dataLayerKeys = [...Object.keys(e), ...this.state.dataLayerKeys], p((() => window.dataLayer.push(e))))
                    },
                    pushToCustomDataLayer(e) {
                        this.state.enabled || (this.state.customDatalayer = []), this.state.customDatalayer = [e, this.state.customDatalayer]
                    },
                    trackGtmEvent(e) {
                        let {
                            event: t = "ga_event",
                            category: n = null,
                            action: a = null,
                            label: o = null,
                            item_id: r = null,
                            ...i
                        } = e;
                        this.pushToDataLayer({
                            event: t,
                            eventCategory: n,
                            eventAction: a,
                            eventLabel: o,
                            ...i
                        }), (0, d.ZP)({
                            itemType: n,
                            name: a,
                            ...r && {
                                itemId: r
                            },
                            details: { ...o && {
                                    label: o
                                },
                                ...i
                            }
                        }, {
                            schema: "gtm_event"
                        })
                    },
                    getUniversalPageType(e) {
                        let {
                            pathname: t
                        } = e;
                        return "/" === t ? o.ZP.GTM_CONTENT_GROUPS.HOMEPAGE : (0, c.matchPath)({
                            path: "/sessions/new",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.ACCOUNT_LOGIN_SIGNUP : (0, c.matchPath)({
                            path: "/passwords/new",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.ACCOUNT_PASSWORD_RESET : (0, c.matchPath)({
                            path: "/passwords/:id/edit",
                            end: !1
                        }, t) || (0, c.matchPath)({
                            path: "/account/passwords/:id/edit",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.ACCOUNT_PASSWORD_RESET_NEW_PASSWORD : (0, c.matchPath)({
                            path: "/account/edit",
                            end: !1
                        }, t) || (0, c.matchPath)({
                            path: "/account/information",
                            end: !1
                        }, t) || (0, c.matchPath)({
                            path: "/account/relatives",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.ACCOUNT_EDIT : (0, c.matchPath)({
                            path: "/account/appointments",
                            end: !0
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.ACCOUNT_APPOINTMENTS_LIST : (0, c.matchPath)({
                            path: "/account/appointments/details/:id",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.ACCOUNT_APPOINTMENT_DETAILS : (0, c.matchPath)({
                            path: "/account/documents",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.ACCOUNT_DOCUMENTS : (0, c.matchPath)({
                            path: "/account/questions",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.ACCOUNT_QUESTIONS : (0, c.matchPath)({
                            path: "/account/credit_cards",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.ACCOUNT_CREDIT_CARDS : (0, c.matchPath)({
                            path: "/appointments/:id/move",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.APPOINTMENT_MOVE_NEW_SLOT_SELECTION : (0, c.matchPath)({
                            path: "/account/email_verifications/pending",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.ACCOUNT_EMAIL_VERIFICATION_PENDING : (0, c.matchPath)({
                            path: "/help",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.HELP : (0, c.matchPath)({
                            path: "/tickets/new",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.HELP_CONTACT_SUPPORT : (0, c.matchPath)({
                            path: "/video_consultation",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.LANDING_PAGE_VIDEO_CONSULTATION : (0, c.matchPath)({
                            path: "/video-chat/:id/setup",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.VIDEO_CONSULTATION_CHAT_SETUP : (0, c.matchPath)({
                            path: "/video-chat/:id/feedback",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.VIDEO_CONSULTATION_CHAT_FEEDBACK : (0, c.matchPath)({
                            path: "/video-chat/:id",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.VIDEO_CONSULTATION_CHAT_IN_PROGRESS : (0, c.matchPath)({
                            path: "/specialities",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.SPECIALITIES_LIST : (0, c.matchPath)({
                            path: "/skills",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.SKILLS_LIST : (0, c.matchPath)({
                            path: "/directory",
                            end: !0
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.PRACTITIONERS_LIST_NEW : (0, c.matchPath)({
                            path: "/directory/:letter",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.PRACTITIONERS_LIST_LETTER : (0, c.matchPath)({
                            path: "/appointments/:id/reviews",
                            end: !0
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.REVIEW_CONFIRMATION : (0, c.matchPath)({
                            path: "/appointments/:id/reviews/new",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.REVIEW : (0, c.matchPath)({
                            path: "/ap/:token",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.ALERT_PROPOSAL : (0, c.matchPath)({
                            path: "/search-doctors",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.SEARCH_PRACTITIONER_SPECIALITY_INPUT : (0, c.matchPath)({
                            path: "/search-locations",
                            end: !1
                        }, t) ? o.ZP.GTM_CONTENT_GROUPS.SEARCH_LOCATION_INPUT : null
                    },
                    pushPathnameData(e) {
                        if (!e) return;
                        let t = (0, c.matchPath)({
                            path: "/appointments/:id/reviews",
                            end: !1
                        }, e);
                        t ? this.pushToDataLayer({
                            appointment_id: (0, u.id)(t.params.id)
                        }) : (t = (0, c.matchPath)({
                            path: "/ap/:token",
                            end: !1
                        }, e), t && this.pushToDataLayer({
                            item_type: "appointment_proposal",
                            item_id: t.params.token
                        }))
                    },
                    getCurrentPageType() {
                        return this.state.currentPageType
                    }
                }
        },
        873857: (e, t, n) => {
            n.d(t, {
                GA: () => s,
                PG: () => r,
                zH: () => i
            });
            var a = n(990626),
                o = n(5212);
            const r = {
                    fr: a.ZP.NGINX_NEWRELIC_EVENT_URL,
                    de: a.ZP.NGINX_NEWRELIC_EVENT_URL_DE,
                    it: a.ZP.NGINX_NEWRELIC_EVENT_URL_IT
                }[(0, o.rZ)()] || "/newrelic_api",
                i = "TankerMonitoring",
                s = "FrontendPerformance"
        },
        990762: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var a = n(957557),
                o = n.n(a),
                r = n(990626),
                i = n(516590),
                s = n(437124),
                d = n(649497);
            const l = async e => {
                    const t = await Promise.all([n.e(34510), n.e(35300)]).then(n.bind(n, 935300));
                    return await t.prehashPassword(e)
                },
                c = (e => {
                    let {
                        httpClient: t
                    } = e;
                    return {
                        async login(e, n) {
                            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            const s = function() {
                                let n, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return n = a.hash ? "hash" : null !== a && void 0 !== a && a.thirdParty ? "third_party" : null !== a && void 0 !== a && a.refresh_token ? "refresh_token" : "password", (0, i.ZP)({
                                    name: "account_connection_sent",
                                    details: {
                                        kind: n,
                                        account_kind: a.kind
                                    }
                                }), t.post(e, {
                                    body: a,
                                    query: o
                                })
                            };
                            if (n.thirdParty) return s(n);
                            const c = a ? {
                                    redirection: a
                                } : {},
                                u = () => s(n, c);
                            if (n.password && (0, r.cr)("send_client_side_pwd_hash") && !n.username.endsWith("@doctolib.com")) {
                                const e = await l(n.password),
                                    t = { ...o()(n, "password"),
                                        hash: e
                                    };
                                return s(t, c).catch((e => {
                                    var t;
                                    let {
                                        response: n
                                    } = e;
                                    if ((null === (t = n.bodyData) || void 0 === t ? void 0 : t.error) === d.Z.BadCredentials) return u();
                                    throw {
                                        response: n
                                    }
                                }))
                            }
                            return u()
                        },
                        async register(e, n) {
                            const a = n => ((0, i.ZP)({
                                    name: "account_creation_sent",
                                    details: {
                                        kind: n.account.hash ? "hash" : "password",
                                        account_kind: "patient"
                                    }
                                }), t.post(e, {
                                    body: n
                                })),
                                s = () => a(n);
                            if ((0, r.cr)("send_client_side_pwd_hash")) {
                                const e = await l(n.account.password),
                                    t = { ...n,
                                        account: { ...o()(n.account, "password"),
                                            hash: e
                                        }
                                    };
                                return a(t).catch((e => {
                                    var t;
                                    let {
                                        response: n
                                    } = e;
                                    if ([d.Z.WrongPasswordFormat, d.Z.BadCredentials].includes(null === (t = n.bodyData) || void 0 === t ? void 0 : t.error)) return s();
                                    throw {
                                        response: n
                                    }
                                }))
                            }
                            return s()
                        }
                    }
                })({
                    httpClient: s.ZP
                })
        },
        951969: (e, t, n) => {
            n.d(t, {
                sF: () => i,
                uz: () => r,
                vG: () => o
            });
            var a = n(5212);
            const o = e => {
                    const t = window.platforms.reactNativeAppVersion.split(".").map(Number),
                        n = e.split(".").map(Number);
                    let a = 0;
                    for (; a < t.length; a++) {
                        if (a === n.length) return !0;
                        if (t[a] > n[a]) return !0;
                        if (t[a] < n[a]) return !1
                    }
                    return !(a < n.length) || n.slice(a).every((e => 0 === e))
                },
                r = e => (0, a.l1)() && o(e),
                i = e => (0, a.uT)() && o(e)
        },
        648230: (e, t, n) => {
            n.d(t, {
                u3: () => z
            });
            var a = n(977954),
                o = n.n(a),
                r = (n(496023), n(180790), n(715551), n(370178)),
                i = n.n(r),
                s = n(629387),
                d = n.n(s),
                l = n(828734),
                c = n.n(l),
                u = n(96036),
                m = n.n(u),
                p = n(366607),
                h = n.n(p),
                _ = n(196671),
                g = n.n(_),
                T = n(510285),
                v = n.n(T),
                w = n(537412),
                P = n.n(w),
                N = n(679212),
                f = n.n(N),
                E = n(201646),
                y = n.n(E),
                C = n(455183),
                O = n.n(C),
                k = n(337181),
                I = n.n(k),
                A = n(207124),
                S = n.n(A),
                b = n(356176),
                R = n.n(b),
                x = n(59542),
                L = n.n(x),
                Z = n(884110),
                D = n.n(Z),
                M = n(570660),
                G = n.n(M),
                U = n(5212),
                j = n(137912);
            o().extend(i()), o().extend(d()), o().extend(h()), o().extend(m()), o().extend(g()), o().extend(c()), o().extend(v()), o().extend(P()), o().extend(f()), o().extend(y()), o().extend(O()), o().extend(I()), o().extend(D()), o().extend(S()), o().extend(R()), o().extend(L()), o().extend(G()), o().prototype.localize = function(e) {
                return this.format((0, j.T)(e, (0, U.Kd)()))
            }, o().prototype.localizeTimeToParisTimeZone = function(e) {
                return this.tz("Europe/Paris").localize(e)
            };
            const z = e => {
                o().updateLocale("en", {
                    weekStart: 1
                }), o().locale(e)
            }
        },
        396693: (e, t, n) => {
            n.d(t, {
                T: () => r.TrackingEventItemContext,
                Z: () => s
            });
            var a = n(184481),
                o = n(23838),
                r = n(304083),
                i = n(785893);
            const s = e => {
                let {
                    itemId: t = null,
                    itemType: n = null,
                    value: s,
                    children: d
                } = e;
                const l = (0, a.useContext)(r.TrackingEventItemContext),
                    c = (0, a.useContext)(o.Z),
                    u = (0, a.useMemo)((() => ({ ...l,
                        itemId: t,
                        itemType: n
                    })), [l, t, n]),
                    m = (0, a.useMemo)((() => ({ ...c,
                        ...s
                    })), [c, s]);
                return (0, i.jsx)(r.TrackingEventItemContext.Provider, {
                    value: u,
                    children: (0, i.jsx)(o.Z.Provider, {
                        value: m,
                        children: d
                    })
                })
            }
        },
        409205: (e, t, n) => {
            n.d(t, {
                Dl: () => o,
                GO: () => a,
                Wl: () => r,
                aJ: () => i,
                vi: () => s
            });
            const a = n(253565).Z.config.analyticsPurposeId(),
                o = "c:googleana-KFKzpWjb";
            window.didomiOnReady = window.didomiOnReady || [];
            const r = () => {
                    var e, t;
                    return null === (e = window.Didomi) || void 0 === e || null === (t = e.getUserConsentStatusForPurpose) || void 0 === t ? void 0 : t.call(e, a)
                },
                i = e => window.didomiOnReady.push(e),
                s = (e, t, n) => {
                    window.didomiOnReady.push((() => {
                        window.Didomi.getObservableOnUserConsentStatusForVendor(t).filter((() => window.Didomi.getUserConsentStatus(e, t))).first().subscribe(n)
                    }))
                }
        },
        234810: (e, t, n) => {
            n.d(t, {
                OI: () => l,
                Wu: () => d,
                bI: () => s,
                o: () => i
            });
            var a = n(55331),
                o = n(445884),
                r = n(235043);

            function i(e) {
                return e.message.startsWith("could not find key for resource")
            }

            function s(e) {
                return e.message.includes("Closing the client")
            }
            async function d(e, t, n, a) {
                if ("patient" !== t.kind) return null;
                if (!i(n)) return null;
                const o = await (0, r.nw)(e, a);
                return o || function(e, t) {
                    const n = {
                        document_id: t
                    };
                    return e.post("/master_patient_reshares", {
                        body: n
                    })
                }(e, a)
            }

            function l(e) {
                return function(e) {
                    return ["HTTP error 504", "HTTP error 502", "HTTP error 520", "HTTP error 525", "Invalid provisional identity provided: null"].some((t => null === e || void 0 === e ? void 0 : e.message.includes(t))) || ["InvalidStateError", "NetworkError", "ChunkLoadError", "TypeError", "UnknownError"].some((t => e.name === t))
                }(e) ? {
                    errorMessage: o.Z.t("tanker.errors.temporary_error"),
                    trackerName: a.Fl,
                    error: e
                } : function(e) {
                    return e.message.includes("mutation operation was attempted on a database that did not allow mutations")
                }(e) ? {
                    errorMessage: o.Z.t("tanker.errors.browser_not_supported_html"),
                    trackerName: a._X,
                    error: e
                } : function(e) {
                    return "QuotaExceededError" === e.name || e.message.includes("QuotaExceededError")
                }(e) ? {
                    errorMessage: o.Z.t("tanker.errors.unexpected_device_error"),
                    trackerName: a.mv,
                    error: e
                } : i(e) ? {
                    errorMessage: o.Z.t("tanker.errors.no_key_for_resource_error"),
                    trackerName: a.xY,
                    error: e
                } : {
                    errorMessage: o.Z.t("tanker.errors.temporary_error"),
                    trackerName: a.Az,
                    error: e
                }
            }
        },
        959021: (e, t, n) => {
            n.d(t, {
                IG: () => u,
                Lu: () => i,
                eK: () => c,
                hG: () => d,
                jx: () => l,
                q6: () => s
            });
            var a = n(554640),
                o = n(682492),
                r = n.n(o);
            class i extends Error {
                constructor(e, t) {
                    super(e), this.requestUrl = t.url, this.responseStatusCode = t.status, this.responseRedirectLocation = t.headers.get("location"), this.responseContentType = t.headers.get("content-type")
                }
            }
            class s extends i {}
            class d extends Error {}

            function l(e, t) {
                Object.defineProperty(e.prototype, "name", {
                    value: t
                })
            }

            function c(e) {
                try {
                    const t = {
                        tags: {
                            team: "DAP"
                        }
                    };
                    (0, a.T)(e, t), e.next && (0, a.T)(e.next, r()(t, {
                        tags: {
                            unwrappedName: e.name,
                            unwrappedMessage: e.message
                        }
                    }))
                } catch (e) {}
            }
            l(i, "RequestError"), l(s, "IdentityUpdateError"), l(d, "NoPermissionToDecryptError");
            const u = (e, t) => {
                console.info("%cThe Tanker email verification code for %c%s %cis %c%s", "font-size: 140%;", "font-size: 140%; font-weight: bold;", e, "font-size: 140%;", "font-size: 140%; font-weight: bold;", t)
            }
        },
        28573: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var a = n(785893),
                o = n(45697),
                r = n.n(o),
                i = n(184481),
                s = n(294184),
                d = n.n(s),
                l = n(597043),
                c = n(453040),
                u = n(565503);
            n(613642);
            const m = (0, i.forwardRef)(((e, t) => {
                let {
                    active: n,
                    children: o,
                    className: r,
                    item: i,
                    selected: s,
                    onSelect: m,
                    onActive: p,
                    withCheckMark: h = !0,
                    "data-walkme": _,
                    onMouseEnter: g,
                    onMouseLeave: T
                } = e;
                return (0, a.jsx)(l.Z, {
                    className: d()("dl-dropdown-item", {
                        "dl-dropdown-item-highlighted": n
                    }, r),
                    item: !0,
                    onClick: () => m(i),
                    onMouseOver: () => p(i),
                    xsSize: 12,
                    ref: t,
                    "data-walkme": _,
                    onMouseEnter: g,
                    onMouseLeave: T,
                    "data-design-system": "base",
                    children: (0, a.jsxs)(l.Z, {
                        container: !0,
                        style: {
                            height: "100%"
                        },
                        xsAlign: "center",
                        xsPadding: "small",
                        xsSpacing: 0,
                        children: [(0, a.jsxs)(l.Z, {
                            className: "dl-dropdown-item-label",
                            item: !0,
                            xsSize: !0,
                            children: [i.leftIcon && (0, a.jsx)("div", {
                                className: d()("dl-flex-center dl-margin-y-4 dl-margin-r-8", {
                                    "dl-align-self-flex-start": i.iconTop
                                }),
                                children: i.leftIcon
                            }), o || (0, a.jsxs)(c.Z, {
                                children: [i.label, i.annotation]
                            }), i.icon && (0, a.jsx)("div", {
                                className: "dl-flex-center dl-margin-y-4 dl-margin-l-8",
                                children: i.icon
                            })]
                        }), h && (0, a.jsx)(l.Z, {
                            className: "dl-dropdown-item-icon",
                            item: !0,
                            children: (0, a.jsx)(u.Z, {
                                checked: s
                            })
                        })]
                    })
                })
            }));
            m.propTypes = {
                active: r().bool.isRequired,
                children: r().node,
                className: r().string,
                onActive: r().func.isRequired,
                onSelect: r().func.isRequired,
                item: r().shape({
                    annotation: r().node,
                    icon: r().node,
                    iconTop: r().bool,
                    label: r().node,
                    leftIcon: r().node
                }).isRequired,
                selected: r().bool.isRequired,
                withCheckMark: r().bool
            };
            const p = m
        },
        259855: (e, t, n) => {
            var a;
            n(977954), n(37090);
            ! function(e) {
                e.KVDT_DATE_FORMAT = "YYYYMMDD", e.KVDT_ONLY_MONTH_AND_YEAR_DATE_FORMAT = "YYYYMM00", e.KVDT_ONLY_YEAR_DATE_FORMAT = "YYYY0000", e.KVDT_UNKNOWN_DATE_FORMAT = "00000000", e.KVDT_DATE_TIME_FORMAT = "YYYYMMDDHHmmss", e.KVK_FULL_DATE_FORMAT = "DDMMYYYY", e.KVK_DATE_FORMAT = "MMYY", e.KVDT_QUARTER_FORMAT = "QYYYY"
            }(a || (a = {}))
        },
        723358: (e, t, n) => {
            n(37090), n(977954)
        },
        37090: (e, t, n) => {
            n(977954)
        },
        649497: (e, t, n) => {
            var a;
            n.d(t, {
                    Z: () => o
                }),
                function(e) {
                    e.AccountDeactivated = "account_deactivated", e.BadAuthCode = "wrong_auth_code", e.BadCredentials = "bad_credentials", e.BadEmail = "wrong_email_or_type", e.BadPassword = "wrong_password", e.BadPin = "wrong_pin", e.BadRefreshToken = "wrong_refresh_token", e.EmailVerificationPending = "email_verification_pending", e.HardLogout = "hard_logout", e.LdapDisallowPin = "ldap_disallow_pin", e.LdapInexistingAccount = "ldap_inexisting_account", e.Locked = "locked", e.MissingPinLoginCookie = "missing_pin_login_cookie", e.NoAccess = "no_access", e.NoPinSet = "no_pin_set", e.NoRemainingPinAttempts = "no_remaining_pin_attempts", e.NotAllowed = "not_allowed", e.PinBadAccount = "pin_bad_account_id", e.UnexpectedAccount = "unexpected_account", e.WrongCaptcha = "wrong_captcha", e.WrongPasswordFormat = "wrong_password_format", e.SecurityLocked = "security_locked"
                }(a || (a = {}));
            const o = a
        },
        516590: (e, t, n) => {
            n.d(t, {
                J0: () => S,
                ZP: () => b,
                ck: () => I,
                gu: () => A
            });
            var a = n(527360),
                o = n.n(a),
                r = n(160160),
                i = n(990626),
                s = n(177140),
                d = n(5212),
                l = n(409205),
                c = n(325876),
                u = n(688424),
                m = n(912198),
                p = n(426613);
            const h = "Account",
                _ = "Session",
                g = "de" === (0, d.rZ)() ? "de" : "com",
                T = (0, r.Z)(),
                v = new Map,
                w = {
                    development: null,
                    test: null,
                    interf: null,
                    staging: `https://events-logs-staging.doctolib.${g}`,
                    production: `https://events-logs.doctolib.${g}`
                },
                P = e => "month" === e ? (() => {
                    const e = new Date;
                    return e.setHours(0, 0, 0, 0), e.setDate(3), e.valueOf()
                })() : "day" === e ? (() => {
                    const e = new Date;
                    return e.setHours(0, 0, 0, 0), e.valueOf()
                })() : Date.now(),
                N = (e, t, n, a) => `Bad ${n} schema for event ${e}, please see https://doctolib.atlassian.net/wiki/spaces/DATA/pages/941424933/Tracking+Events+Schema+Enforcement. Errors: ${a.join("; ")}. Event details: ${JSON.stringify(t)}.`,
                f = function(e) {
                    var t, n, a, r, l, p, g, N;
                    let {
                        name: f,
                        itemId: E,
                        itemType: y,
                        details: C = {}
                    } = e, {
                        isUnload: O = !1,
                        truncateTo: k,
                        includeUserIdentifiers: I = !0,
                        includeUserAgent: A = !0
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const S = I ? (null === (t = window.current_account) || void 0 === t ? void 0 : t.tracking_event_id) || (null === (n = window.account) || void 0 === n ? void 0 : n.tracking_event_id) : null,
                        b = I ? o().get("ssid") || null : "anonymous",
                        R = I && o().get("esid") ? o().get("esid") : null,
                        x = I ? (null === (a = window.current_account) || void 0 === a ? void 0 : a.id) || (null === (r = window.account) || void 0 === r ? void 0 : r.id) : "anonymous",
                        L = I ? S ? h : _ : "anonymous",
                        Z = P(k),
                        D = k ? Z : Z + (i.ZP.CLIENT_TIME_DELTA || 0),
                        M = window.platforms.reactNative ? "app" : window.platforms.variant,
                        G = A ? s.WE : "anonymous",
                        U = I ? T : null,
                        j = {
                            id: (0, c.eC)(),
                            new_version: !0,
                            name: f,
                            ssid: b,
                            user_type: L,
                            tracking_event_id: S,
                            item_id: (0, u.X)(E),
                            item_type: y,
                            created_at: D,
                            updated_at: D,
                            client_time: Z,
                            details: { ...Object.fromEntries(v),
                                ...C,
                                esid: R,
                                device_category: M,
                                device: i.ZP.TRACKING_DEVICE,
                                user_agent: G,
                                country: window.country,
                                user_id: x,
                                dpd_user: s.d,
                                domain_name: window.location.hostname,
                                assumed_authorizations_account: null === (l = window.current_account) || void 0 === l ? void 0 : l.assumed_authorizations_account,
                                assumed_authorizations_organization: null === (p = window.current_account) || void 0 === p ? void 0 : p.assumed_authorizations_organization,
                                assumed_authorizations_organization_ids: null === (g = window.current_account) || void 0 === g ? void 0 : g.assumed_authorizations_organization_ids,
                                page_load_id: U
                            }
                        };
                    null === (N = window.crashReporter) || void 0 === N || N.addBreadcrumb({
                        category: "tracking event",
                        name: f
                    }), (0, m.Z)(w[(0, d.zj)()], j, {
                        isUnload: O
                    })
                },
                E = (e, t) => {
                    var n, a, r, l;
                    let {
                        name: c,
                        itemId: g,
                        itemType: v,
                        details: N = {}
                    } = e, {
                        isUnload: f = !1,
                        truncateTo: E,
                        includeUserIdentifiers: y = !0,
                        includeUserAgent: C = !0,
                        schema: O
                    } = t;
                    const k = y ? (null === (n = window.current_account) || void 0 === n ? void 0 : n.tracking_event_id) || (null === (a = window.account) || void 0 === a ? void 0 : a.tracking_event_id) : null,
                        I = y ? o().get("ssid") || null : "anonymous",
                        A = y && o().get("esid") ? o().get("esid") : null,
                        S = y ? (null === (r = window.current_account) || void 0 === r ? void 0 : r.id) || (null === (l = window.account) || void 0 === l ? void 0 : l.id) : null,
                        b = y ? k ? h : _ : "anonymous",
                        R = P(E),
                        x = E ? R : R + (i.ZP.CLIENT_TIME_DELTA || 0),
                        L = window.platforms.reactNative ? "app" : window.platforms.variant,
                        Z = C ? s.WE : "anonymous",
                        D = y ? T : null,
                        M = { ...N,
                            name: c,
                            ssid: I,
                            esid: A,
                            user_id: S,
                            user_type: b,
                            item_id: (0, u.X)(g),
                            item_type: v,
                            created_at: x,
                            user_agent: Z,
                            domain_name: window.location.hostname,
                            device_category: L,
                            device: i.ZP.TRACKING_DEVICE,
                            dpd_user: s.d,
                            country: window.country,
                            page_load_id: D
                        },
                        G = w[(0, d.zj)()];
                    (0, m.Z)(G ? G + (0, p.DW)(O) : null, M, {
                        isUnload: f,
                        saveInTests: !1
                    })
                },
                y = ["b2c_content_engagement"],
                C = e => (0, d.Gl)() && (0, i.cr)("consent_management_v2") && !y.includes(e) && !(0, l.Wl)(),
                O = () => (0, i.cr)("clean_tracking") && (0, d.Gl)(),
                k = function(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const a = (e = e.details ? { ...e,
                            details: (0, u.a)(e.details)
                        } : e).details || {},
                        o = n.schema || p.PA.default,
                        r = (0, p.ZA)(a, o);
                    r.length > 0 && console.error(N(e.name, a, o, r)), e = O() ? { ...e,
                        itemId: void 0,
                        details: e.details ? (0, p.W_)(e.details, o) : void 0
                    } : e, C(n.schema) || (n.schema && !(0, d.IF)() ? E(e, n) : f(e, n)), null === (t = n.trackingCallback) || void 0 === t || t.call(n, {
                        trackingId: e.name,
                        details: e.details
                    })
                },
                I = (e, t) => {
                    let {
                        name: n,
                        itemId: a,
                        itemType: o,
                        details: r = {}
                    } = e;
                    "de" === window.country && (r = { ...r,
                        locale: window.locale,
                        referrer: document.referrer
                    }, k({
                        name: n,
                        itemId: a,
                        itemType: o,
                        details: r
                    }, t))
                },
                A = e => {
                    let {
                        trackingId: t,
                        details: n = {},
                        trackingCallback: a,
                        schema: o = p.PA.global_tracking
                    } = e;
                    k({
                        name: t,
                        details: n
                    }, {
                        schema: o,
                        trackingCallback: a
                    })
                };

            function S(e, t, n, a) {
                let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : p.PA.global_tracking;
                return r => {
                    t && A({
                        trackingId: t,
                        details: n,
                        trackingCallback: a,
                        schema: o
                    }), null === e || void 0 === e || e(r)
                }
            }
            s.d && window.addEventListener("dl_send_tracking_event", (e => {
                k(e.detail)
            }));
            const b = k
        },
        205615: (e, t, n) => {
            n.d(t, {
                XK: () => h,
                fI: () => _
            });
            var a = n(947376),
                o = n.n(a),
                r = n(873857),
                i = n(516590),
                s = n(834444),
                d = n.n(s),
                l = n(360270),
                c = n(545742);
            async function u(e, t) {
                const n = t.map((e => d()({
                    eventType: r.zH,
                    ...e
                })));
                return e.request({
                    pathname: r.PG,
                    method: "POST",
                    body: n
                })
            }
            const m = new c.q((async function(e) {
                    const t = e.map((e => new Promise((t => {
                        (0, i.ZP)(e, {
                            trackingCallback: function() {
                                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                                return t(n)
                            },
                            schema: "tanker_event"
                        })
                    }))));
                    return Promise.all(t)
                })),
                p = new Map;

            function h(e, t, n) {
                let {
                    samplingRate: a,
                    account: r,
                    document: i,
                    error: s,
                    ...d
                } = n;
                if (function(e) {
                        if (null == e) return !1;
                        if (e < 0 || e > 1) throw new Error("sampling rate must be a number between 0 and 1");
                        return Math.random() > e
                    }(a)) return;
                const {
                    sendTrackingEvent: h,
                    sendNewRelicEvent: _,
                    ...g
                } = {
                    sendTrackingEvent: !0,
                    sendNewRelicEvent: !0,
                    ...d
                }, T = o().getParser(window.navigator.userAgent), v = T.getBrowserName(), w = T.getBrowserVersion(), P = T.getPlatformType(), N = {
                    name: t,
                    samplingRate: null !== a && void 0 !== a ? a : void 0,
                    details: { ...g,
                        error: (0, l.J)(s),
                        browserName: v,
                        browserVersion: w,
                        browserType: P,
                        account_kind: null === r || void 0 === r ? void 0 : r.kind,
                        account_id: null === r || void 0 === r ? void 0 : r.id,
                        document_id: null === i || void 0 === i ? void 0 : i.id,
                        document_created_at: null === i || void 0 === i ? void 0 : i.created_at
                    }
                };
                if (h) {
                    const e = {
                        name: t,
                        details: { ...((e, t) => {
                                const n = Object.keys(e).filter((e => t.includes(e))).map((t => ({
                                    [t]: e[t]
                                })));
                                return Object.assign({}, ...n)
                            })(g, ["status", "error", "type", "source", "document_id", "url", "origin", "site", "account_kind"]),
                            account_kind: null === r || void 0 === r ? void 0 : r.kind,
                            error: (0, l.J)(s),
                            document_id: null === i || void 0 === i ? void 0 : i.id
                        }
                    };
                    m.send(e)
                }
                if (_) {
                    let t = p.get(e);
                    null == t && (t = new c.q(u.bind(null, e)), p.set(e, t)), t.send(N)
                }
            }
            async function _(e) {
                const t = p.get(e);
                return Promise.all([t.sendBatch(), m.sendBatch()])
            }
        },
        148388: (e, t, n) => {
            var a, o;
            n.d(t, {
                    MD: () => r,
                    Mk: () => i,
                    dv: () => o
                }),
                function(e) {
                    e.STATUS = "status", e.TYPE = "type"
                }(a || (a = {})),
                function(e) {
                    e.AGENDA_NOTES = "agenda_notes", e.CALENDAR = "calendar", e.PATIENT_INFO = "patient_info", e.SEARCHBAR = "searchbar", e.REQUEST_DASHBOARD = "request_dashboard"
                }(o || (o = {}));
            const r = {
                    CHECK_EXAM_RESULTS: "check_exam_results",
                    EXAMS_PRESCRIPTION: "exams_prescription",
                    RENEW_PRESCRIPTION: "renew_prescription",
                    OTHER: "other"
                },
                i = {
                    COVID19_CLARIFICATIONS: "covid19_clarifications",
                    NOT_ACUTE_SYMPTOMS: "not_acute_symptoms"
                };
            i.COVID19_CLARIFICATIONS, i.NOT_ACUTE_SYMPTOMS, r.CHECK_EXAM_RESULTS, r.EXAMS_PRESCRIPTION, r.RENEW_PRESCRIPTION, r.OTHER
        },
        335963: (e, t, n) => {
            n.d(t, {
                Z: () => _,
                c: () => p
            });
            var a = n(785893),
                o = n(184481),
                r = n(294184),
                i = n.n(r),
                s = n(445884),
                d = n(348187),
                l = n(845126),
                c = n(619595),
                u = n(453040),
                m = n(653591);
            n(772564);
            const p = e => {
                    let {
                        children: t
                    } = e;
                    return (0, a.jsx)("ul", {
                        className: "dl-pill-list",
                        children: t.map((e => (0, o.cloneElement)(e, {
                            component: "li"
                        })))
                    })
                },
                h = e => {
                    let {
                        ellipsis: t,
                        label: n,
                        size: o
                    } = e;
                    const r = "medium" === o ? "body-s-regular" : "body-xs-regular";
                    return (0, a.jsx)(u.Z, {
                        align: "center",
                        className: "dl-min-width",
                        component: "span",
                        ellipsis: t,
                        uiStyle: r,
                        children: n
                    })
                },
                _ = e => {
                    let {
                        avatar: t,
                        className: n,
                        color: o = "neutral-020",
                        component: r = "span",
                        dataWalkme: u,
                        deleteIconAriaLabel: p,
                        rightIconAriaLabel: _,
                        disabled: g = !1,
                        ellipsis: T = !1,
                        iconDataWalkme: v,
                        iconName: w,
                        iconTooltip: P,
                        label: N,
                        onClick: f,
                        onDelete: E,
                        onDeleteTooltip: y,
                        onMouseEnter: C,
                        onMouseLeave: O,
                        onRightIconClick: k,
                        rightIconName: I,
                        notificationCount: A,
                        selected: S,
                        size: b = "medium",
                        children: R,
                        "deprecated-pill-interface": x
                    } = e;
                    const L = Boolean(f || E || S || k);
                    (e => {
                        let {
                            color: t,
                            iconName: n,
                            isInteractive: a,
                            size: o,
                            avatar: r,
                            onDelete: i,
                            rightIconName: s,
                            onRightIconClick: d,
                            rightIconAriaLabel: l,
                            notificationCount: c
                        } = e;
                        "xsmall" === o && a && console.error('Cannot use size "xsmall" on interactive pill'), "xsmall" === o && n && console.error('Cannot use size "xsmall" with icon'), "medium" !== o && r && console.error(`Cannot use size ${o} with avatar`), "solid/square-info" === n && "primary-020" !== t && console.error(`Cannot use color "${t}" with icon "${n}"`), "solid/circle-check" === n && "success-020" !== t && console.error(`Cannot use color "${t}" with icon "${n}"`), "solid/triangle-exclamation" === n && "warning-020" !== t && console.error(`Cannot use color "${t}" with icon "${n}"`), "solid/diamond-exclamation" === n && "error-020" !== t && console.error(`Cannot use color "${t}" with icon "${n}"`), r && n && console.error("Cannot use both avatar and icon"), i && s && console.error("Cannot use both delete action and right icon"), d && !s && console.error("Cannot have a right icon action without a right icon"), s && !l && console.error("Right icon should have an aria label"), "medium" !== o && c && console.error('Can only use size "medium" with a badge'), d && c && console.error("Cannot have a badge notification and a right action")
                    })({
                        color: o,
                        iconName: w,
                        isInteractive: L,
                        size: b,
                        avatar: t,
                        onRightIconClick: k,
                        rightIconName: I,
                        rightIconAriaLabel: _,
                        notificationCount: A
                    });
                    const Z = e => {
                        E && !g && (e.preventDefault(), e.stopPropagation(), E(e))
                    };
                    let D = null;
                    E && (D = (0, a.jsx)(c.ZP, {
                        "aria-label": p || s.Z.t("common.actions.delete"),
                        className: i()("dl-pill-delete-button", {
                            [`dl-pill-${o}`]: o
                        }),
                        disabled: g,
                        name: "xmark-large",
                        onClick: Z,
                        size: "small" === b ? "xxsmall" : "xsmall",
                        tooltip: y
                    }));
                    let M = null;
                    w && (M = (0, a.jsx)(l.Z, {
                        "aria-hidden": !0,
                        className: i()({
                            "dl-margin-r-4": "small" === b,
                            "dl-margin-r-8": "medium" === b
                        }),
                        "data-test": w,
                        "data-walkme": v,
                        name: w,
                        size: "small" === b ? "xxsmall" : "xsmall"
                    }), P && (M = (0, a.jsx)(m.Z, {
                        tooltip: P,
                        children: M
                    })));
                    let G = null;
                    I && (G = (0, a.jsx)(c.ZP, {
                        "aria-label": _,
                        className: i()("dl-pill-right-icon-button", {
                            [`dl-pill-${o}`]: o
                        }),
                        "data-test": I,
                        disabled: g,
                        name: I,
                        onClick: k,
                        size: "small" === b ? "xxsmall" : "xsmall"
                    }));
                    const U = i()("inline-flex", "dl-align-items-center", "h-fit", "dl-rounded-borders-lg", {
                            [`dl-pill-${o}`]: o,
                            [`dl-pill-${b}`]: b,
                            "dl-pill-selected": S,
                            "dl-ellipsis-container": T,
                            "dl-pill-interactive": L,
                            "dl-pill-clickable": f,
                            "dl-pill-deletable": E,
                            "dl-pill-right-icon": I,
                            "dl-pill-disabled": g,
                            "dl-width-fit-content": !T,
                            "dl-padding-l-4": t
                        }),
                        j = f ? "button" : "span";
                    return (0, a.jsxs)(r, {
                        className: i()("dl-pill inline-flex dl-align-items-center", {
                            "dl-ellipsis-container": T
                        }, n),
                        onMouseEnter: C,
                        onMouseLeave: O,
                        "data-design-system": "oxygen",
                        children: [(0, a.jsxs)(j, {
                            "aria-pressed": f ? S : void 0,
                            "data-walkme": u,
                            disabled: g,
                            className: i()(U),
                            onClick: e => {
                                f && !g && (e.preventDefault(), e.stopPropagation(), f(e))
                            },
                            children: [t || M, x ? R : (0, a.jsx)(h, {
                                ellipsis: T,
                                label: N,
                                size: b
                            }), void 0 !== A && A > 0 && (0, a.jsx)(d.Z, {
                                size: "small",
                                className: "dl-notification",
                                children: A > 99 ? "99+" : A
                            })]
                        }), G || D]
                    })
                }
        },
        809918: () => {},
        459401: () => {}
    }
]);
//# sourceMappingURL=11864-3b013e2fb9a161560391.js.map