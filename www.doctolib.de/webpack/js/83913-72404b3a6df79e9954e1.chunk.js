(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [83913], {
        764433: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var s = n(500600),
                o = n(437124),
                i = n(785893);
            const a = e => (0, i.jsx)(s.x, {
                httpClient: o.ZP,
                ...e
            })
        },
        447710: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Z
            });
            var s = n(184481),
                o = n(294184),
                i = n.n(o),
                a = n(288802),
                r = n(990626),
                l = n(445884),
                c = n(5212),
                d = n(169339),
                u = n(383915),
                p = n(968461),
                m = n(545763);
            const h = n.p + "8746a615cb765e17ae9b.png";
            var g = n(516590),
                _ = n(177140),
                v = n(183228);
            var f = n(785893);

            function x(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class b extends s.Component {
                constructor() {
                    super(...arguments), x(this, "onClickContinue", (() => {
                        this.trackGtmEvent("dataPrivacyPopinAccept"), this.trackConsent(!0), this.props.onClickContinue()
                    })), x(this, "onClickGoBack", (() => {
                        this.trackGtmEvent("dataPrivacyPopinRefuse"), this.onHide()
                    })), x(this, "onHide", (() => {
                        this.trackConsent(!1), this.props.onHide()
                    })), x(this, "trackGtmEvent", (e => {
                        a.Z.trackGtmEvent({
                            category: r.ZP.GTM_CONTENT_GROUPS.BOOKING_LOGIN_SIGNUP,
                            action: r.ZP.GTM_EVENTS.SIGN_UP,
                            label: e
                        })
                    })), x(this, "onModalHide", (() => {
                        this.trackGtmEvent("dataPrivacyPopinClose"), this.onHide()
                    }))
                }
                trackConsent(e) {
                    (0, g.ZP)({
                        name: "create_account_confirm_gdpr",
                        details: {
                            accepted: e
                        }
                    }, {
                        schema: "patient"
                    })
                }
                render() {
                    const {
                        show: e,
                        disabled: t,
                        bodyText: n,
                        goBackButtonText: s
                    } = this.props, o = (0, f.jsx)(m.Z, {
                        onClick: this.onClickContinue,
                        disabled: t,
                        block: !(0, c.Zz)(),
                        children: l.Z.t("common.consent.continue")
                    }), a = s ? (0, f.jsx)(m.Z, {
                        onClick: this.onClickGoBack,
                        disabled: t,
                        uiStyle: "info-link",
                        block: !(0, c.Zz)(),
                        children: s
                    }) : null;
                    return (0, f.jsxs)(d.Z, {
                        onHide: this.onModalHide,
                        show: e,
                        title: l.Z.t("common.consent.title"),
                        className: "dl-consent-modal",
                        children: [(0, f.jsxs)(u.Z, {
                            alignText: "left",
                            children: [(0, f.jsx)("div", {
                                className: i()("dl-consent-modal-cover", {
                                    "dl-consent-modal-cover-ios": _.jv && !(0, v.Z)()
                                }),
                                children: (0, f.jsx)("div", {
                                    className: "dl-consent-modal-cover-img",
                                    children: (0, f.jsx)("img", {
                                        src: h,
                                        className: "dl-fullwidth dl-consent-modal-header",
                                        alt: ""
                                    })
                                })
                            }), (0, f.jsx)("div", {
                                className: "dl-margin-t-16 dl-padding-l-8",
                                children: n
                            }), !(0, c.Zz)() && (0, f.jsxs)("div", {
                                className: "dl-margin-t-16",
                                children: [o, a]
                            })]
                        }), (0, c.Zz)() && (0, f.jsxs)(p.Z, {
                            children: [a, o]
                        })]
                    })
                }
            }
            const Z = b
        },
        422930: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => u
            });
            var s = n(977954),
                o = n.n(s),
                i = n(445884),
                a = n(929014),
                r = n(453040),
                l = n(785893);
            const c = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(r.Z, {
                        className: "dl-margin-b",
                        uiStyle: "title-s-bold",
                        children: i.Z.t("appointments.show.appointment_request.title")
                    }), (0, l.jsx)(a.Z, {
                        variant: "deprecated-alert-interface",
                        "aria-live": "assertive",
                        uiStyle: "warning",
                        className: "dl-margin-b",
                        children: i.Z.t("appointments.show.appointment_request.message_html")
                    })]
                }),
                d = e => {
                    let {
                        start_date: t,
                        telehealth: n,
                        vaccination_appointment: s,
                        steps: a
                    } = e;
                    if (window.doctorBooking) return i.Z.t("appointments.edit.reminder_will_be_sent_to_patient");
                    if (s && null !== a && void 0 !== a && a.length) {
                        const e = (0, l.jsxs)("ul", {
                            className: "dl-padding-l-16",
                            children: [(0, l.jsx)("li", {
                                className: "dl-text-transform-capitalize",
                                children: o()(t).format("LLLL")
                            }), a.map(((e, t) => (0, l.jsx)("li", {
                                className: "dl-text-transform-capitalize",
                                children: o()(e.start_date).format("LLLL")
                            }, `step-${t}`)))]
                        });
                        return i.Z.t("appointments.edit.confirmation_and_reminder_set_appointment_html", {
                            set_appointments: e
                        })
                    }
                    return n ? i.Z.t("appointments.edit.reminder_right_before_appointment") : i.Z.t("appointments.edit.confirmation_and_reminder_html")
                },
                u = e => {
                    var t;
                    let {
                        appointment: n
                    } = e;
                    if (n.appointment_request_entry) return (0, l.jsx)(c, {});
                    const s = null !== (t = n.steps) && void 0 !== t && t.length ? i.Z.t("appointments.edit.appointment_set_confirmed") : i.Z.t("appointments.edit.appointment_confirmed");
                    return (0, l.jsxs)(a.Z, {
                        variant: "deprecated-alert-interface",
                        "aria-live": "assertive",
                        uiStyle: "success",
                        className: "dl-margin-b",
                        children: [(0, l.jsx)("b", {
                            children: s
                        }), (0, l.jsx)("div", {
                            children: d(n)
                        })]
                    })
                }
        },
        869423: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var s = n(24553),
                o = n(545763),
                i = n(516590),
                a = n(288802),
                r = n(990626),
                l = n(445884),
                c = n(785893);
            const d = () => {
                const e = (0, s.useNavigate)(),
                    t = "/account/passwords/new",
                    n = /partners.*/i.test(window.location.host) ? {
                        target: "_blank"
                    } : {
                        onClick: n => {
                            var s;
                            a.Z.trackGtmEvent({
                                category: r.ZP.GTM_CONTENT_GROUPS.BOOKING_LOGIN_SIGNUP,
                                action: r.ZP.GTM_EVENTS.LOGIN,
                                label: "linkForgottenPassword"
                            }), (0, i.ZP)({
                                name: "patient_signin_password_forgotten"
                            }, {
                                schema: "patient"
                            }), "desktop" !== (null === (s = window.platforms) || void 0 === s ? void 0 : s.variant) && e && (e(t), n.preventDefault())
                        }
                    };
                return (0, c.jsx)("div", {
                    className: "dl-text-center",
                    children: (0, c.jsx)(o.Z, {
                        className: "dl-margin-y-16",
                        href: t,
                        uiStyle: "default-real-link",
                        ...n,
                        children: l.Z.t("patient_mobile.root.login.forgot_password")
                    })
                })
            }
        },
        420260: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var s = n(184481),
                o = n(441609),
                i = n.n(o),
                a = n(845220),
                r = n.n(a),
                l = n(294184),
                c = n.n(l),
                d = n(929014),
                u = n(288802),
                p = n(990626),
                m = n(445884),
                h = n(8955),
                g = n(708221),
                _ = n(78599),
                v = n(853165),
                f = n(261397),
                x = n(462814),
                b = n(366699),
                Z = n(704098),
                y = n(879058),
                j = n(545763),
                w = n(478983),
                N = n.n(w),
                S = n(869423),
                k = n(709282),
                C = n(785893);
            const E = (e, t, n) => {
                    u.Z.trackGtmEvent({
                        category: n ? p.ZP.GTM_CONTENT_GROUPS.BOOKING_LOGIN_SIGNUP : p.ZP.GTM_CONTENT_GROUPS.ACCOUNT_LOGIN_SIGNUP,
                        action: p.ZP.GTM_EVENTS.LOGIN,
                        label: `${e}With${t&&t.includes("@")?"Email":"PhoneNumber"}`
                    })
                },
                P = (0, s.forwardRef)(((e, t) => {
                    let {
                        appointmentId: n,
                        error: o,
                        onClick: a,
                        onLogin: l,
                        subtitle: w,
                        show: P,
                        raisedButton: T,
                        showLoginOptions: I,
                        className: D,
                        action: A,
                        isBookingFunnel: O
                    } = e;
                    const {
                        redirection: G
                    } = (0, _.e3)(window.location.search), L = (0, s.useContext)(f.WA), R = h.m3("deviceId"), {
                        success: M,
                        status: F,
                        error: B,
                        loading: H,
                        onSubmit: q,
                        data: U
                    } = (0, v.Z)({
                        url: A,
                        redirection: G,
                        onSuccess: async e => {
                            let {
                                data: t,
                                input: {
                                    username: n,
                                    password: s,
                                    remember_username: o
                                }
                            } = e;
                            await (0, y.B)(L, t, {
                                username: n,
                                password: s,
                                remember_username: o
                            }), E("success", n, O);
                            const i = t.redirection;
                            i ? (0, g.Z)(i, {
                                replace: !0
                            }) : l(t)
                        },
                        onFailure: e => {
                            let {
                                input: {
                                    username: t
                                }
                            } = e;
                            return E("failure", t, O)
                        }
                    }), V = h.U2("last-login-username");
                    return (0, C.jsxs)(x.Z, {
                        className: D,
                        horizontal: !1,
                        onSubmit: e => {
                            u.Z.trackGtmEvent({
                                category: O ? p.ZP.GTM_CONTENT_GROUPS.BOOKING_LOGIN_SIGNUP : p.ZP.GTM_CONTENT_GROUPS.ACCOUNT_LOGIN_SIGNUP,
                                action: p.ZP.GTM_EVENTS.LOGIN,
                                label: "submitForm"
                            }), q({ ...e,
                                ...n ? {
                                    appointment_id: n
                                } : {},
                                kind: "patient"
                            })
                        },
                        validityIndicators: !1,
                        defaultValues: {
                            username: V,
                            remember: !0,
                            remember_username: !0
                        },
                        noValidate: !0,
                        children: [(0, C.jsxs)("div", {
                            className: c()("dl-toggleable-form"),
                            style: P ? {
                                maxHeight: 350
                            } : {
                                maxHeight: 0
                            },
                            ...P ? {} : {
                                "aria-hidden": "true"
                            },
                            children: [w, (0, C.jsx)(k.Z, {
                                status: F,
                                error: B ? U && U.error || m.Z.t("common.error") : o
                            }), R && (0, C.jsx)(d.Z, {
                                variant: "deprecated-alert-interface",
                                children: m.Z.t("tanker.login_verification")
                            }), (0, C.jsx)(b.Z, {
                                type: "email",
                                placeholder: m.Z.t("patient_mobile.root.login.email_phone_number"),
                                title: m.Z.t("patient_mobile.root.login.email_phone_number"),
                                label: null,
                                disabled: !P,
                                button: !1,
                                ref: t,
                                field: "username",
                                autoComplete: "username",
                                validate: e => r()(e) || i()(e)
                            }), (0, C.jsx)(b.Z, {
                                type: "password",
                                field: "password",
                                disabled: !P,
                                icon: (0, C.jsx)(N(), {}),
                                label: null,
                                autoComplete: "current-password",
                                validate: e => r()(e) || i()(e)
                            }), (0, C.jsx)("div", {
                                className: "dl-margin-t-16",
                                children: (0, C.jsx)("div", {
                                    className: "flex dl-justify-between",
                                    children: (0, C.jsx)(Z.Z, {
                                        field: "remember_username",
                                        label: m.Z.t("patient_mobile.root.login.remember_username"),
                                        disabled: !P
                                    })
                                })
                            })]
                        }), (0, C.jsx)(j.Z, {
                            block: !0,
                            uiStyle: T ? "DEPRECATED_yellow" : "info-link",
                            className: c()("dl-toggleable-form-button", {
                                "dl-toggleable-form-button-flat": !T
                            }),
                            type: P ? null : "submit",
                            onClick: a,
                            disabled: H || M,
                            children: window.onPartnerDomain ? m.Z.t("patient_mobile.root.login.title_partners") : m.Z.t("patient_mobile.root.login.title")
                        }), P && I && (0, C.jsx)(S.Z, {})]
                    })
                }));
            P.defaultProps = {
                subtitle: null,
                show: !1,
                showLoginOptions: !0,
                action: "/login.json"
            };
            const T = P
        },
        500600: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => c
            });
            var s = n(184481),
                o = n(618446),
                i = n.n(o),
                a = n(798638),
                r = n(608575);

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class c extends s.Component {
                constructor(e) {
                    var t;
                    super(e), t = this, l(this, "state", {
                        loading: !this.props.trigger,
                        success: !1,
                        error: !1,
                        data: null
                    }), l(this, "executeQuery", (e => {
                        const {
                            method: n,
                            url: s,
                            onSuccess: o,
                            onFailure: i,
                            headers: l
                        } = this.props, {
                            pathname: c,
                            query: d
                        } = (0, r.parse)(s, !0);
                        return this.setState({
                            loading: !0
                        }), this.props.httpClient.request({
                            pathname: c,
                            method: n.toUpperCase(),
                            body: e,
                            headers: { ...l,
                                ...(0, a.HC)()
                            },
                            query: this.props.query || d,
                            signal: this.abortController.signal
                        }).then((t => {
                            var n;
                            let {
                                bodyData: s
                            } = t;
                            if ((null === (n = this.abortController.signal) || void 0 === n || !n.aborted) && (this.unmounted || this.setState({
                                    data: s,
                                    success: !0,
                                    loading: !1,
                                    error: !1
                                }), o)) try {
                                o({
                                    data: s,
                                    input: e
                                })
                            } catch (e) {
                                console.error(e)
                            }
                        })).catch((function() {
                            var n;
                            let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (null !== (n = s.request) && void 0 !== n && n.aborted) return null;
                            const {
                                bodyData: o,
                                status: a
                            } = s.response || {};
                            t.setState({
                                error: !0,
                                loading: !1,
                                success: !1,
                                data: o
                            });
                            const r = {
                                data: o,
                                input: e,
                                status: a
                            };
                            return i && i(r), r
                        }))
                    })), this.abortController = window.hasOwnProperty("AbortController") ? new AbortController : {
                        abort: () => null
                    }
                }
                componentDidMount() {
                    this.props.trigger || this.executeQuery(this.props.body)
                }
                componentDidUpdate(e) {
                    let {
                        url: t,
                        query: n,
                        body: s
                    } = e;
                    (t !== this.props.url || !i()(n, this.props.query) || !i()(s, this.props.body)) && !this.props.trigger && this.executeQuery(this.props.body)
                }
                componentWillUnmount() {
                    this.unmounted = !0, this.abortController.abort()
                }
                render() {
                    if (!this.props.children) return null;
                    if ("function" !== typeof this.props.children) return this.props.children;
                    const e = this.state;
                    return this.props.trigger && (e[this.props.trigger] = this.executeQuery), this.props.children(e)
                }
            }
            l(c, "defaultProps", {
                method: "get",
                headers: {}
            })
        },
        159162: (e, t, n) => {
            "use strict";
            n.d(t, {
                nY: () => u,
                K_: () => h,
                ZP: () => g
            });
            var s = n(294184),
                o = n.n(s),
                i = n(184481),
                a = n(821167),
                r = n(5212),
                l = n(47760),
                c = n(990626);
            var d = n(785893);
            const u = "frc-captcha-solution",
                p = {
                    FOCUS: "focus",
                    AUTO: "auto",
                    NONE: "none"
                },
                m = e => {
                    let {
                        nonce: t,
                        onIAmHuman: n,
                        onError: s,
                        className: l,
                        startMode: u = p.AUTO
                    } = e;
                    const m = (0, i.useRef)(),
                        h = (0, i.useRef)(),
                        [g, _] = (0, i.useState)(t),
                        v = (0, i.useCallback)((() => {
                            (0, r.IF)() && u === p.AUTO && setTimeout((() => n("STUBBED-CAPTCHA-SOLUTION")), 300)
                        }), [u, n]);
                    return (0, i.useEffect)((() => {
                        if (!h.current && m.current) {
                            const e = {
                                startMode: u,
                                puzzleEndpoint: c.ZP.FRIENDLY_CAPTCHA_PUZZLE_ENDPOINT,
                                doneCallback: n,
                                errorCallback: s,
                                language: (0, r.Kd)(),
                                skipStyleInjection: !0
                            };
                            h.current = new a.c(m.current, e), v()
                        }
                        return () => {
                            h.current && (n(null), h.current.destroy())
                        }
                    }), [m]), (0, i.useEffect)((() => {
                        var e;
                        t > g && (_(t), n(null), null === (e = h.current) || void 0 === e || e.reset(), v())
                    }), [g, t, h]), (0, d.jsx)("div", {
                        ref: m,
                        className: o()("frc-captcha", "dl-margin-t-16", l),
                        "data-sitekey": c.ZP.FRIENDLY_CAPTCHA_SITE_KEY
                    })
                },
                h = e => {
                    let {
                        field: t = u,
                        ...n
                    } = e;
                    return (0, d.jsx)(l.gN, {
                        field: t,
                        children: e => (0, d.jsx)(m, {
                            onIAmHuman: e.setValue,
                            ...n
                        })
                    })
                },
                g = m
        },
        167029: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var s = n(184481),
                o = n(294184),
                i = n.n(o),
                a = n(478718),
                r = n.n(a),
                l = n(764433),
                c = n(710270),
                d = n(800274),
                u = n(451421),
                p = n(453040),
                m = n(597043),
                h = n(445884),
                g = n(516590),
                _ = n(288802),
                v = n(990626),
                f = n(218334),
                x = n(159162),
                b = n(785893);

            function Z(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class y extends s.Component {
                constructor() {
                    super(...arguments), Z(this, "state", {
                        pinCode: "   ",
                        error: null,
                        captchaRequired: !1,
                        captchaSolution: null,
                        captchaNonce: 0
                    }), Z(this, "computeErrorMessage", ((e, t, n) => e || t && h.Z.t("accounts.errors.invalid_confirmation_code") || n && h.Z.t("common.captcha_required") || h.Z.t("common.error"))), Z(this, "onFailure", (e => {
                        let {
                            data: {
                                error: t,
                                code_invalid: n,
                                captcha_required: s
                            }
                        } = e;
                        return this.setState((e => ({
                            pinCode: n ? "   " : e.pinCode,
                            error: this.computeErrorMessage(t, n, s),
                            captchaRequired: s,
                            captchaSolution: e.captchaSolution,
                            captchaNonce: e.captchaNonce + 1
                        })))
                    }))
                }
                onChange(e, t) {
                    e.pinCode && (e.error = null), this.setState({ ...e
                    }, (() => {
                        this.shouldSubmit(t) && t.submit({
                            signup_code: this.state.pinCode,
                            [x.nY]: this.state.captchaSolution
                        })
                    }))
                }
                shouldSubmit(e) {
                    const {
                        pinCode: t,
                        captchaSolution: n,
                        captchaRequired: s
                    } = this.state, o = e.data && e.data.error;
                    return t && 3 === t.replace(/\D/g, "").length && (n || !s) && !e.loading && (!e.success || o)
                }
                render() {
                    return (0, b.jsx)("div", {
                        children: (0, b.jsx)(l.Z, {
                            url: "/account/verify_from_anonymous_funnel.json",
                            method: "post",
                            trigger: "submit",
                            onFailure: this.onFailure,
                            children: e => (0, b.jsxs)(b.Fragment, {
                                children: [(0, b.jsx)(f.ZP, {
                                    autoFocusOnMount: !0,
                                    values: Array.from(this.state.pinCode).map((e => " " === e ? "" : e)),
                                    showError: Boolean(this.state.error),
                                    errorMessage: this.state.error,
                                    IconComponent: () => null,
                                    displayMode: f.B.TOGGLEABLE_START_VISIBLE,
                                    disabled: e.loading || e.success && !(e.data && e.data.error),
                                    onChange: t => {
                                        let {
                                            values: n
                                        } = t;
                                        const s = n.map((e => e || " ")).join("");
                                        this.onChange({
                                            pinCode: s
                                        }, e)
                                    }
                                }), this.state.captchaRequired && (0, b.jsxs)("div", {
                                    className: "pin-input-group dl-margin-b-16",
                                    children: [(0, b.jsx)("div", {
                                        className: "grow"
                                    }), (0, b.jsx)(x.ZP, {
                                        className: "flex",
                                        nonce: this.state.captchaNonce,
                                        onIAmHuman: t => this.onChange({
                                            captchaSolution: t
                                        }, e)
                                    }), (0, b.jsx)("div", {
                                        className: "grow"
                                    })]
                                })]
                            })
                        })
                    })
                }
            }
            var j = n(545763),
                w = n(965468),
                N = n.n(w),
                S = n(297516),
                k = n(784600);

            function C(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class E extends s.Component {
                constructor() {
                    super(...arguments), C(this, "state", {
                        buttonDisabled: !1
                    }), C(this, "timeoutHandle", null), C(this, "onClick", (e => () => {
                        e(), this.setState({
                            buttonDisabled: !0
                        })
                    })), C(this, "onSuccess", (() => {
                        this.timeoutHandle = window.setTimeout(this.enableButton, 3e4)
                    })), C(this, "enableButton", (() => {
                        window.clearTimeout(this.timeoutHandle), this.timeoutHandle = null, this.setState({
                            buttonDisabled: !1
                        })
                    }))
                }
                componentWillUnmount() {
                    window.clearTimeout(this.timeoutHandle)
                }
                render() {
                    return (0, b.jsx)(l.Z, {
                        url: "/account/send_signup_code.json",
                        method: "post",
                        trigger: "trigger",
                        onSuccess: this.onSuccess,
                        onFailure: this.enableButton,
                        children: e => {
                            let {
                                trigger: t
                            } = e;
                            return (0, b.jsx)(j.Z, {
                                disabled: this.state.buttonDisabled,
                                onClick: this.onClick(t),
                                uiStyle: "info-link",
                                children: h.Z.t("accounts.phone_verification.resend_code")
                            })
                        }
                    })
                }
            }
            const P = !window.platforms || "mobile" !== window.platforms.variant ? e => {
                    let {
                        children: t
                    } = e;
                    return (0, b.jsx)(S.Z, {
                        className: i()("dl-anonymous-appointment-register", "dl-anonymous-appointment-register-desktop"),
                        children: (0, b.jsx)(k.Z, {
                            className: "dl-margin-16",
                            children: t
                        })
                    })
                } : e => {
                    let {
                        children: t
                    } = e;
                    return (0, b.jsxs)(S.Z, {
                        className: "dl-anonymous-appointment-register",
                        children: [(0, b.jsx)(m.Z, {
                            container: !0,
                            xsJustify: "center",
                            children: (0, b.jsx)(N(), {
                                className: "dl-anonymous-appointment-logo"
                            })
                        }), t]
                    })
                },
                T = e => {
                    let {
                        anonymousAppointment: t
                    } = e;
                    const n = (0, d.ZP)(),
                        {
                            fetchAccount: o,
                            loading: i
                        } = (0, d.dv)();
                    (0, s.useEffect)((() => {
                        o()
                    }), []), (0, s.useEffect)((() => {
                        null !== n && void 0 !== n && n.id && !1 === i && t && (0, g.ZP)({
                            name: "account_verify_phone_number_displayed",
                            details: {
                                booking_token_appointment_id: (0, u.id)(t.id)
                            }
                        }, {
                            schema: "patient"
                        })
                    }), [null === n || void 0 === n ? void 0 : n.id, i]);
                    const {
                        data: a,
                        success: l
                    } = (0, c.Z)({
                        url: "/account/sms_validation",
                        onSuccess: e => {
                            let {
                                data: n
                            } = e;
                            t || (_.Z.pushToCustomDataLayer({
                                appointment_id: Number.isNaN((0, u.id)(n.appointment_id)) ? null : (0, u.id)(n.appointment_id),
                                ...r()(n, ["profile_id", "profile_practice_id", "speciality_id"])
                            }), _.Z.sendGtmPageView(v.ZP.GTM_CONTENT_GROUPS.ACCOUNT_CREATION_PHONE_VALIDATION))
                        }
                    });
                    return (0, b.jsxs)(P, {
                        children: [(0, b.jsx)(p.Z, {
                            className: "dl-margin-y-16",
                            align: "center",
                            uiStyle: "title-s-bold",
                            children: h.Z.t("accounts.phone_verification.account_verification")
                        }), (0, b.jsx)(y, { ...a
                        }), l ? (0, b.jsxs)(b.Fragment, {
                            children: [(0, b.jsx)(p.Z, {
                                uiStyle: "body-s-regular",
                                component: "div",
                                align: "center",
                                children: h.Z.t("accounts.phone_verification.just_sent_code")
                            }), (0, b.jsx)(p.Z, {
                                uiStyle: "body-s-bold",
                                align: "center",
                                children: a.phone_number
                            }), (0, b.jsx)(p.Z, {
                                uiStyle: "body-s-regular",
                                component: "div",
                                align: "center",
                                children: h.Z.t("accounts.phone_verification.enter_that_code")
                            })]
                        }) : null, (0, b.jsx)(m.Z, {
                            container: !0,
                            xsJustify: "center",
                            children: (0, b.jsx)(m.Z, {
                                item: !0,
                                children: (0, b.jsx)(E, {})
                            })
                        })]
                    })
                }
        },
        216672: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => A
            });
            var s = n(184481),
                o = n(294184),
                i = n.n(o),
                a = n(708221),
                r = n(990626),
                l = n(297516),
                c = n(597043),
                d = n(965468),
                u = n.n(d),
                p = n(800274),
                m = n(446962),
                h = n(1107),
                g = n(516590),
                _ = n(711700),
                v = n.n(_),
                f = n(944908),
                x = n.n(f),
                b = n(445884),
                Z = n(827522),
                y = n(8955),
                j = n(784600),
                w = n(453040),
                N = n(545763),
                S = n(764433),
                k = n(24553),
                C = n(451421),
                E = n(396719),
                P = n.n(E),
                T = n(785893);
            const I = e => (0, Z.Z)(x()(e.map((e => `${v()(e.patient.first_name)} ${v()(e.patient.last_name)}`)))),
                D = e => {
                    let {
                        account: t,
                        appointments: n,
                        onDismiss: o
                    } = e;
                    const i = (0, p.aU)();
                    (0, s.useEffect)((() => {
                        (0, g.ZP)({
                            name: "anonymous_quick_login"
                        }, {
                            schema: "patient"
                        })
                    }), []);
                    const a = (0, k.useNavigate)();
                    return (0, T.jsxs)(j.Z, {
                        className: "dl-margin-16",
                        children: [(0, T.jsx)(c.Z, {
                            container: !0,
                            xsJustify: "center",
                            xsSpacing: 0,
                            className: "dl-layout-margin-xs",
                            children: (0, T.jsx)(w.Z, {
                                align: "center",
                                uiStyle: "title-s-bold",
                                children: b.Z.t("appointments.login_or_signup.you_are_logged_as")
                            })
                        }), (0, T.jsx)(c.Z, {
                            container: !0,
                            xsJustify: "center",
                            xsSpacing: 0,
                            children: (0, T.jsx)(S.Z, {
                                method: "post",
                                onSuccess: e => {
                                    let {
                                        data: t
                                    } = e;
                                    t.needs_email_verification || t.patients_attached ? window.location.pathname = t.redirection : o()
                                },
                                onFailure: o,
                                url: "/quick_login.json",
                                trigger: "attachAppointments",
                                children: e => {
                                    let {
                                        attachAppointments: s,
                                        loading: o
                                    } = e;
                                    return (0, T.jsxs)(N.Z, {
                                        block: !0,
                                        className: "dl-anonymous-appointment-register-account-button dl-margin-y-16",
                                        type: "submit",
                                        onClick: () => {
                                            const e = n.find((e => e.main_anonymous_appointment));
                                            (0, g.ZP)({
                                                name: "anonymous_click_attach_to_account",
                                                details: {
                                                    booking_token_appointment_id: (0, C.id)(null === e || void 0 === e ? void 0 : e.id)
                                                }
                                            }, {
                                                schema: "patient"
                                            }), t.verified_at ? s() : a("/appointments/anonymous/verify")
                                        },
                                        disabled: o,
                                        children: [(0, T.jsxs)("div", {
                                            className: "dl-text-left dl-justify-between dl-full-width",
                                            children: [(0, T.jsx)(w.Z, {
                                                uiStyle: "body-s-bold",
                                                color: "white",
                                                children: t.human_full_name
                                            }), (0, T.jsx)(w.Z, {
                                                uiStyle: "body-s-regular",
                                                color: "white",
                                                children: t.email
                                            })]
                                        }), (0, T.jsx)(P(), {
                                            className: "dl-anonymous-appointment-register-account-arrow"
                                        })]
                                    })
                                }
                            })
                        }), (0, T.jsx)(c.Z, {
                            container: !0,
                            xsJustify: "center",
                            xsSpacing: 0,
                            children: (0, T.jsx)(j.Z, {
                                bgColor: "DEPRECATED_new",
                                className: "dl-margin-b dl-full-width",
                                children: b.Z.t("appointments.register.attach", {
                                    account_email: t.email,
                                    count: n.length,
                                    patients_names: I(n)
                                })
                            })
                        }), (0, T.jsx)(c.Z, {
                            container: !0,
                            xsJustify: "center",
                            xsSpacing: 0,
                            children: (0, T.jsx)(N.Z, {
                                uiStyle: "info-link",
                                onClick: async () => {
                                    (0, g.ZP)({
                                        name: "anonymous_logout"
                                    }, {
                                        schema: "patient"
                                    }), (0, y.SI)(), await i()
                                },
                                className: "dl-anonymous-appointment-register-switch-account-button",
                                children: b.Z.t("appointments.login_or_signup.switch_account")
                            })
                        })]
                    })
                },
                A = e => {
                    let {
                        appointments: t,
                        onDesktop: n,
                        onDismiss: o,
                        action: d
                    } = e;
                    const g = (0, p.ZP)(),
                        _ = (0, p.f0)(),
                        [v, f] = (0, s.useState)(null),
                        x = (e => e.find((e => e.main_anonymous_appointment)))(t);
                    return (0, m.Z)(r.ZP.GTM_CONTENT_GROUPS.ANONYMOUS_APPOINTMENTS_REGISTER, {
                        appointment: x,
                        account: g
                    }), (0, s.useEffect)((() => {
                        null !== v && (v && v.email && _(v), v.needs_email_verification ? (0, a.Z)(v.redirection) : v.patients_matched ? (0, a.Z)("/account/appointments") : o())
                    }), [v]), null !== v ? null : (0, T.jsxs)(l.Z, {
                        className: i()("dl-anonymous-appointment-register", {
                            "dl-anonymous-appointment-register-desktop": n
                        }),
                        children: [n ? null : (0, T.jsx)(c.Z, {
                            className: i()("dl-anonymous-appointment-logo-backround-mobile"),
                            container: !0,
                            xsJustify: "center",
                            children: (0, T.jsx)(u(), {
                                className: "dl-anonymous-appointment-logo"
                            })
                        }), g ? (0, T.jsx)(D, {
                            account: g,
                            appointments: t,
                            onDismiss: o
                        }) : (0, T.jsx)(h.ZP, {
                            appointments: t,
                            onDismiss: o,
                            action: d,
                            onLogin: f
                        })]
                    })
                }
        },
        1107: (e, t, n) => {
            "use strict";
            n.d(t, {
                ym: () => M,
                kp: () => R,
                ZP: () => F
            });
            var s = n(184481),
                o = n(445884),
                i = n(784600),
                a = n(929014),
                r = n(453040),
                l = n(545763),
                c = n(420260),
                d = n(869423),
                u = n(294184),
                p = n.n(u),
                m = n(990626),
                h = n(516590),
                g = n(990762),
                _ = n(983923),
                v = n(366699),
                f = n(462814),
                x = n(704098),
                b = n(447710),
                Z = n(642979),
                y = n(934418),
                j = n.n(y),
                w = n(353808),
                N = n.n(w),
                S = n(478718),
                k = n.n(S),
                C = n(261397),
                E = n(159162),
                P = (n(886308), n(785893));

            function T(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const I = (e, t, n, s, o) => {
                    const i = Object.values(e.errors || {}).some(Boolean);
                    return n && (!e.values.cgu || !((e, t, n) => {
                        const s = ["email", "password"].concat(t ? ["phone_number"] : []).concat(n ? ["frc-captcha-solution"] : []);
                        return Object.values(k()(e.values, ...s)).filter(Boolean).length === s.length
                    })(e, s, o) || i || t)
                },
                D = {
                    showGdpr: !1,
                    captchaRequired: !1,
                    error: null,
                    accountExists: !1,
                    loading: !1
                };
            class A extends s.Component {
                constructor() {
                    super(...arguments), T(this, "state", D), T(this, "rejectGdpr", (() => this.setState({
                        showGdpr: !1
                    }))), T(this, "onClickSubmit", (() => {
                        this.props.show ? ((0, h.ZP)({
                            name: "create_account_confirm_details"
                        }, {
                            schema: "patient"
                        }), this.setState({
                            showGdpr: !0
                        })) : this.props.onClickFolded()
                    })), T(this, "onSuccess", (async e => {
                        let {
                            data: t,
                            password: n
                        } = e;
                        if (this.setState({
                                showGdpr: !1,
                                error: null,
                                accountExists: !1,
                                captchaRequired: !1,
                                loading: !1
                            }), n) try {
                            await this.context.startTankerWithVerificationMethod(t, {
                                passphrase: n
                            })
                        } catch (e) {
                            window.crashReporter.captureException(e)
                        }
                        this.props.onAccount(t)
                    })), T(this, "onFailure", (e => {
                        let {
                            error: t,
                            captcha_required: n,
                            existing_account: s,
                            redirection: i
                        } = e;
                        this.setState({
                            loading: !1
                        }), t ? s && (this.props.onAccountMatchError(t), this.setState({
                            showGdpr: !1,
                            captchaRequired: n,
                            accountExists: s,
                            error: t
                        })) : this.setState({
                            error: o.Z.t("common.error")
                        }), i ? window.location.replace(i) : s || window.location.replace("/appointments/anonymous?match_error=true&throttled=true")
                    })), T(this, "onFormFirstTouch", (() => {
                        (0, h.ZP)({
                            name: "create_account_start",
                            details: {
                                source: "anonymous"
                            }
                        }, {
                            schema: "patient"
                        })
                    })), T(this, "onIAmHuman", (e => {
                        const t = this.state;
                        this.setState({ ...t,
                            error: null,
                            captchaResponse: e
                        })
                    }))
                }
                render() {
                    const {
                        show: e = !1,
                        raisedButton: t = !1,
                        askForPhoneNumber: n = !1
                    } = this.props;
                    return (0, P.jsx)(f.Z, {
                        autoComplete: "off",
                        onFirstTouch: this.onFormFirstTouch,
                        horizontal: !1,
                        onSubmit: async e => {
                            let {
                                "frc-captcha-solution": t,
                                password: n,
                                ...s
                            } = e;
                            this.setState({
                                loading: !0
                            }), await g.Z.register("/account/create_from_anonymous_funnel.json", {
                                account: { ...s,
                                    password: n
                                },
                                "frc-captcha-solution": t
                            }).then((e => this.onSuccess({
                                data: e.bodyData,
                                password: n
                            }))).catch((e => {
                                let {
                                    response: t
                                } = e;
                                return this.onFailure((null === t || void 0 === t ? void 0 : t.bodyData) || {})
                            }))
                        },
                        requiredIndicators: !1,
                        children: s => (0, P.jsxs)(P.Fragment, {
                            children: [(0, P.jsxs)("div", {
                                className: p()("dl-toggleable-form"),
                                style: {
                                    maxHeight: e ? 560 : 0
                                },
                                children: [this.state.error && !this.state.accountExists ? (0, P.jsx)(a.Z, {
                                    variant: "deprecated-alert-interface",
                                    uiStyle: "error",
                                    children: this.state.error
                                }) : null, (0, P.jsx)(v.Z, {
                                    field: "email",
                                    icon: (0, P.jsx)(j(), {}),
                                    autoComplete: "off",
                                    label: null,
                                    placeholder: o.Z.t("common.password_reset.email"),
                                    required: !0,
                                    type: "email"
                                }), n && (0, P.jsx)(v.Z, {
                                    field: "phone_number",
                                    icon: (0, P.jsx)(N(), {}),
                                    autoComplete: "off",
                                    label: null,
                                    placeholder: o.Z.t("patient_mobile.root.account.new.profile.phone_number.placeholder"),
                                    required: !0,
                                    type: "tel"
                                }), (0, P.jsx)(_.Z, {
                                    noEmptyHint: !0,
                                    label: null,
                                    placeholder: o.Z.t("appointments.signup_booking.password")
                                }), this.state.captchaRequired || this.props.captchaRequired ? (0, P.jsx)(E.ZP, {
                                    onIAmHuman: this.onIAmHuman
                                }) : null, (0, P.jsx)("div", {
                                    className: "dl-margin-y-16",
                                    children: (0, P.jsx)(x.Z, {
                                        field: "cgu",
                                        label: (0, P.jsxs)(P.Fragment, {
                                            children: [o.Z.t("patient_mobile.root.account.new.accept_terms"), (0, P.jsx)(Z.Z, {
                                                className: "dl-font-normal",
                                                href: m.ZP.PATIENT_LEGAL_INFO_LINKS.terms_and_conditions,
                                                target: "_blank",
                                                children: o.Z.t("patient_common.root.legal_titles.terms")
                                            })]
                                        })
                                    })
                                })]
                            }), (0, P.jsx)(l.Z, {
                                block: !0,
                                type: "button",
                                uiStyle: t ? "primary" : "info-link",
                                className: p()("dl-toggleable-form-button", {
                                    "dl-toggleable-form-button-flat": !t
                                }),
                                onClick: this.onClickSubmit,
                                disabled: I(s, this.state.loading, e, n, this.state.captchaRequired || this.props.captchaRequired),
                                children: o.Z.t("appointments.login_or_signup.sign_up")
                            }), (0, P.jsx)(b.Z, {
                                show: this.state.showGdpr,
                                disabled: this.state.loading,
                                onClickContinue: s.submitForm,
                                onHide: this.rejectGdpr,
                                bodyText: (0, P.jsxs)(P.Fragment, {
                                    children: [o.Z.t("common.consent.popin_html", {
                                        privacy_policy_url: m.ZP.PATIENT_LEGAL_INFO_LINKS.privacy_policy
                                    }), (0, P.jsx)("br", {}), (0, P.jsx)("br", {}), o.Z.t("common.consent.convert_patient_to_user_html")]
                                })
                            })]
                        })
                    })
                }
            }
            T(A, "contextType", C.WA);
            var O = n(24553),
                G = n(747317),
                L = n(451421);
            const R = Symbol("signup"),
                M = Symbol("login"),
                F = e => {
                    const {
                        action: t,
                        appointments: n,
                        onDismiss: u,
                        onLogin: p
                    } = e, m = (0, O.useNavigate)(), {
                        state: g
                    } = (0, O.useLocation)(), [_, v] = (0, s.useState)(t), [f, x] = (0, s.useState)(null), [b, Z] = (0, s.useState)(!0), y = (e => e.find((e => e.main_anonymous_appointment)))(n);
                    (0, s.useEffect)((() => {
                        (0, h.ZP)({
                            name: "anonymous_unauthenticated_register_displayed",
                            details: {
                                booking_token_appointment_id: (0, L.id)(y.id)
                            }
                        }, {
                            schema: "patient"
                        })
                    }), []);
                    const j = n.some((e => e.needs_preparation && "de" !== e.country)),
                        w = n.every((e => e.patient.patient_conversion_eligible)),
                        N = 1 === n.length && y.patient.relative_conversion_eligible,
                        S = w || N,
                        k = _ === M || !S;
                    return (0, P.jsxs)(P.Fragment, {
                        children: [j && (0, P.jsx)("div", {
                            className: "dl-margin-16",
                            children: (0, P.jsx)(a.Z, {
                                variant: "deprecated-alert-interface",
                                children: o.Z.t("appointments.anonymous_show.account_required")
                            })
                        }), S && (0, P.jsxs)(i.Z, {
                            className: "dl-margin-16",
                            children: [(0, P.jsx)(r.Z, {
                                uiStyle: "title-s-bold",
                                children: o.Z.t("appointments.login_or_signup.create_account.title")
                            }), (0, P.jsx)(r.Z, {
                                block: !0,
                                uiStyle: "body-s-regular",
                                className: "dl-margin-y-16",
                                children: o.Z.t("appointments.login_or_signup.create_account.retreive_informations")
                            }), (0, P.jsx)(A, {
                                onAccount: e => {
                                    let {
                                        verified_at: t,
                                        ...n
                                    } = e;
                                    t ? p(n) : m("/appointments/anonymous/verify")
                                },
                                onAccountMatchError: e => {
                                    x(e), v(M)
                                },
                                captchaRequired: !1,
                                show: _ === R,
                                askForPhoneNumber: N,
                                raisedButton: !0,
                                onClickFolded: () => {
                                    _ !== R && (x(null), v(R))
                                }
                            })]
                        }), (0, P.jsxs)(i.Z, {
                            className: "dl-margin-16",
                            children: [(0, P.jsx)(r.Z, {
                                className: "dl-margin-b",
                                uiStyle: "title-s-bold",
                                children: o.Z.t("appointments.login_or_signup.signin.title")
                            }), (0, P.jsx)(c.Z, {
                                action: "/login/anonymous.json",
                                className: "dl-margin-b",
                                appointmentId: y.id,
                                error: f,
                                show: k,
                                showLoginOptions: !1,
                                raisedButton: !0,
                                onLogin: e => {
                                    let {
                                        verified_at: t,
                                        ...n
                                    } = e;
                                    t ? p(n) : m("/appointments/anonymous/verify")
                                },
                                onClick: e => {
                                    k || (e.preventDefault(), b && (0, h.ZP)({
                                        name: "login_start",
                                        details: {
                                            source: "anonymous"
                                        }
                                    }, {
                                        schema: "patient"
                                    }), x(null), v(M), Z(!1))
                                }
                            }), k && (0, P.jsx)(r.Z, {
                                align: "center",
                                uiStyle: "body-s-bold",
                                children: (0, P.jsx)(d.Z, {})
                            })]
                        }), !j && (g ? (0, P.jsx)(l.Z, {
                            block: !0,
                            uiStyle: "info-link",
                            onClick: () => m(-1),
                            children: o.Z.t("common.actions.back")
                        }) : (0, P.jsx)(l.Z, {
                            block: !0,
                            uiStyle: "info-link",
                            onClick: () => {
                                (0, h.ZP)({
                                    name: "anonymous_continue_as_guest_clicked",
                                    itemType: G.i.APPOINTMENT,
                                    details: {
                                        booking_token_appointment_id: (0, L.id)(y.id)
                                    }
                                }, {
                                    schema: "patient"
                                }), u()
                            },
                            children: o.Z.t("appointments.anonymous_show.continue_without_account")
                        }))]
                    })
                }
        },
        360123: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var s = n(184481),
                o = n(985882),
                i = n(164544),
                a = n(202206),
                r = n(710270),
                l = n(929014),
                c = n(445884),
                d = n(5212),
                u = n(785893);
            const p = e => {
                let {
                    fetchAppointments: t
                } = e;
                const {
                    loading: n,
                    data: p,
                    success: m
                } = (0, r.Z)({
                    url: "/appointments/anonymous.json"
                }), h = (0, d.Zz)() ? i.Z : s.Fragment;
                return n ? (0, d.rl)() ? (0, u.jsx)(o.Z, {
                    loading: !0
                }) : null : m ? (0, u.jsx)(h, {
                    children: (0, u.jsx)(a.Z, {
                        anonymousMode: !0,
                        fetchAppointments: t,
                        appointment: p.find((e => e.main_anonymous_appointment)) || p.find((e => e.needs_preparation))
                    })
                }) : (0, u.jsx)(l.Z, {
                    variant: "deprecated-alert-interface",
                    uiStyle: "error",
                    children: c.Z.t("common.long_error")
                })
            }
        },
        486118: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var s = n(445884),
                o = n(545763),
                i = n(453040),
                a = n(784600),
                r = n(585482),
                l = n.n(r),
                c = n(840587),
                d = n.n(c);
            var u = n(785893);
            const p = e => {
                let {
                    email: t
                } = e;
                return (0, u.jsx)(a.Z, {
                    className: "propose-to-signup-section dl-margin-b",
                    fullWidth: !0,
                    children: (0, u.jsxs)("div", {
                        className: "flex",
                        children: [(0, u.jsx)(l(), {
                            className: "dl-margin-r user-icon"
                        }), (0, u.jsxs)("div", {
                            children: [(0, u.jsx)(i.Z, {
                                uiStyle: "DEPRECATED-title-sub-regular",
                                children: (0, u.jsx)("strong", {
                                    children: s.Z.t("patient_common.root.telehealth.account_creation.title")
                                })
                            }), (0, u.jsx)("div", {
                                className: "dl-padding-t-8",
                                children: (0, u.jsx)(i.Z, {
                                    children: s.Z.t("patient_common.root.telehealth.account_creation.instructions")
                                })
                            }), (0, u.jsxs)("div", {
                                className: "flex dl-align-items-center dl-margin-t-8",
                                children: [(0, u.jsx)(i.Z, {
                                    uiStyle: "body-s-bold",
                                    children: t
                                }), (0, u.jsx)(d(), {
                                    className: "check-icon dl-margin-l-8",
                                    width: 12
                                })]
                            }), (0, u.jsx)(o.Z, {
                                href: "/appointments/anonymous/register",
                                uiStyle: "info-link",
                                className: "dl-padding-0",
                                children: s.Z.t("patient_common.root.telehealth.account_creation.create_account")
                            })]
                        })]
                    })
                })
            }
        },
        446962: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var s = n(184481),
                o = n(288802),
                i = n(451421);
            const a = (e, t) => {
                let {
                    appointment: n,
                    account: a
                } = t;
                return (0, s.useEffect)((() => {
                    const {
                        profile: t,
                        practice: s
                    } = n;
                    o.Z.pushToCustomDataLayer({
                        profile_id: t.id,
                        speciality_id: t.speciality_id,
                        profile_practice_id: null === s || void 0 === s ? void 0 : s.id,
                        booking_token_appointment_id: (0, i.id)(n.id),
                        appointment_telehealth: !!n.teleheath,
                        account_id: null === a || void 0 === a ? void 0 : a.id
                    }), o.Z.sendGtmPageView(e)
                }), [])
            }
        },
        888502: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => q
            });
            var s = n(184481),
                o = n(24553),
                i = n(445884),
                a = n(990626),
                r = n(129303),
                l = n(23838),
                c = n(5212),
                d = n(580163),
                u = n(845126),
                p = n(929014),
                m = n(511466),
                h = n(522022),
                g = n(940919),
                _ = n(893157),
                v = n(72281),
                f = n(143545),
                x = n(687769),
                b = n(982761),
                Z = n(661763),
                y = n(777226),
                j = n(991136),
                w = n(977954),
                N = n.n(w),
                S = n(160160),
                k = n(8955),
                C = n(592290),
                E = n(453040),
                P = n(528846);
            const T = n.p + "944bf48258358ebdf46c.svg";
            var I = n(282786),
                D = n(833463),
                A = n(545763),
                O = n(785893);
            const G = "prescription_sharing_modal_seen",
                L = () => {
                    k.t8(G, N()().add(6, "month").unix())
                },
                R = e => {
                    let {
                        doc: t,
                        onClick: n,
                        trackingType: a
                    } = e;
                    const r = (0, s.useContext)(l.Z),
                        c = (0, S.Z)(),
                        d = (0, o.useNavigate)(),
                        {
                            trackUsePrescription: u
                        } = (0, D.Z)({
                            doc: t
                        });
                    return (0, O.jsx)(A.Z, {
                        uiStyle: "primary",
                        leftIcon: "regular/paper-plane",
                        onClick: async () => {
                            n && n();
                            const e = {
                                showTransition: {
                                    transition: "show-from-bottom"
                                },
                                dismissTransition: {
                                    transition: "reveal-from-bottom"
                                },
                                source: r.source,
                                prescriptionSharingFunnelId: c,
                                doc: t
                            };
                            d((0, I.kb)(t), {
                                state: e
                            }), u({
                                prescriptionSharingFunnelId: c,
                                type: a
                            })
                        },
                        block: !0,
                        children: i.Z.t(`appointments.documents.prescription_sent_to_title.${t.kind}`)
                    })
                },
                M = e => {
                    let {
                        doc: t
                    } = e;
                    const [n, o] = (0, s.useState)(!0);
                    return (0, O.jsxs)(C.ZP, {
                        title: i.Z.t("patient_common.root.documents.prescription_onboarding.title"),
                        show: n,
                        onHide: () => {
                            o(!1), L()
                        },
                        withCloseIcon: !0,
                        children: [(0, O.jsxs)(C.Ng, {
                            className: "dl-justify-center dl-flex-column dl-align-items-center dl-padding-y-16",
                            children: [(0, O.jsx)(P.Z, {
                                alt: "prescription-onboarding-image",
                                height: "120",
                                className: "dl-margin-b-48",
                                src: T
                            }), (0, O.jsxs)("div", {
                                className: "dl-flex-column dl-row-gap-m",
                                children: [(0, O.jsxs)("div", {
                                    className: "dl-flex-row dl-column-gap-m",
                                    children: [(0, O.jsx)(u.Z, {
                                        name: "location-dot",
                                        size: "medium",
                                        color: "primary-110"
                                    }), (0, O.jsx)(E.Z, {
                                        uiStyle: "body-s-bold",
                                        children: i.Z.t("patient_common.root.documents.prescription_onboarding.incentives.search_pharmacy")
                                    })]
                                }), (0, O.jsxs)("div", {
                                    className: "dl-flex-row dl-column-gap-m",
                                    children: [(0, O.jsx)(u.Z, {
                                        name: "paper-plane",
                                        size: "medium",
                                        color: "primary-110"
                                    }), (0, O.jsx)(E.Z, {
                                        uiStyle: "body-s-bold",
                                        children: i.Z.t("patient_common.root.documents.prescription_onboarding.incentives.one_click_sharing")
                                    })]
                                }), (0, O.jsxs)("div", {
                                    className: "dl-flex-row dl-column-gap-m",
                                    children: [(0, O.jsx)(u.Z, {
                                        name: "regular/capsules",
                                        size: "medium",
                                        color: "primary-110"
                                    }), (0, O.jsx)(E.Z, {
                                        uiStyle: "body-s-bold",
                                        children: i.Z.t("patient_common.root.documents.prescription_onboarding.incentives.get_medicine")
                                    })]
                                })]
                            })]
                        }), (0, O.jsx)(C.ze, {
                            children: (0, O.jsx)(R, {
                                doc: t,
                                onClick: L,
                                trackingType: "prescription_onboarding"
                            })
                        })]
                    })
                };
            var F = n(329487);
            const B = e => {
                    let {
                        displayActions: t,
                        doc: n
                    } = e;
                    const {
                        trackOptions: s
                    } = (0, Z.Z)({
                        doc: n
                    });
                    return (0, O.jsx)(g.Z, {
                        title: i.Z.t("common.menu"),
                        position: "right",
                        icon: (0, O.jsx)(u.Z, {
                            name: "ellipsis",
                            size: "medium"
                        }),
                        onTap: () => {
                            t(!0), s()
                        }
                    })
                },
                H = e => {
                    let {
                        errorMessage: t
                    } = e;
                    return (0, O.jsx)(p.Z, {
                        variant: "deprecated-alert-interface",
                        uiStyle: "error",
                        className: "dl-margin-t-16",
                        children: t
                    })
                },
                q = e => {
                    let {
                        document: t,
                        onRename: n,
                        onDocumentDestroy: u,
                        onDocumentAccessDestroy: p
                    } = e;
                    const g = (0, s.useContext)(l.Z),
                        w = (0, o.useNavigate)(),
                        {
                            updateDocument: S
                        } = (0, b.Z)(),
                        C = () => w(-1),
                        E = t ? t.title : i.Z.t("patient_common.root.documents.title"),
                        [P, T] = (0, s.useState)(!1),
                        [I, D] = (0, s.useState)(!1),
                        [A, L] = (0, s.useState)(!1),
                        q = (0, d.ZP)(),
                        {
                            trackView: U,
                            trackScreenshot: V
                        } = (0, Z.Z)({
                            doc: t
                        }),
                        {
                            data: z,
                            isLoading: K
                        } = (0, j.Z)({
                            document: t,
                            onError: e => {
                                404 === e.status ? q({
                                    message: e.message,
                                    uiStyle: "warning",
                                    duration: F.wD
                                }) : q({
                                    message: e.message,
                                    uiStyle: "warning"
                                }), C()
                            },
                            trackingContext: {
                                source: g.source,
                                type: g.type
                            }
                        }),
                        W = (0, c.rl)(),
                        $ = (0, a.LA)("patient_sharing_prescriptions") && W && t && "medicine_prescription" === t.kind && !t.is_created_by_self && (() => {
                            const e = k.U2(G);
                            return k.Od("document_modal_seen"), e && N()().isAfter(N().unix(e)) ? (k.Od(G), !0) : !e
                        })();
                    return (0, s.useEffect)((() => {
                        const e = e => {
                            var n;
                            (null === e || void 0 === e || null === (n = e.detail) || void 0 === n ? void 0 : n.method) === r.j7 && "clear" !== (null === t || void 0 === t ? void 0 : t.kind) && V()
                        };
                        return window.addEventListener("reactNativeEvent", e), () => window.removeEventListener("reactNativeEvent", e)
                    }), [null === t || void 0 === t ? void 0 : t.kind, V]), (0, O.jsxs)(O.Fragment, {
                        children: [(0, O.jsxs)(_.Z, {
                            onBack: C,
                            title: E,
                            navBar: (0, O.jsx)(B, {
                                displayActions: T,
                                doc: t
                            }),
                            children: [!t && (0, O.jsx)(H, {
                                errorMessage: i.Z.t("patient_common.root.documents.document_not_found")
                            }), (0, O.jsx)(v.Z, {
                                show: A,
                                onHide: () => L(!1)
                            }), t && (!K && z ? (0, O.jsxs)(O.Fragment, {
                                children: [(0, O.jsx)(f.Z, {
                                    document: t,
                                    url: z.decryptedFileUrl,
                                    zoomable: !0,
                                    showPadesMessage: !1,
                                    onLoadSuccess: () => {
                                        t.viewed_at || "clear" === t.kind || S({ ...t,
                                            viewed_at: !0
                                        }), U()
                                    }
                                }), !t.is_created_by_self && (0, h._)({
                                    kind: t.kind
                                }) && (0, O.jsx)("div", {
                                    className: "dl-document-footer",
                                    children: (0, O.jsx)(R, {
                                        doc: t,
                                        trackingType: "sticky_button"
                                    })
                                }), (0, O.jsx)(y.Z, {
                                    doc: t,
                                    show: P,
                                    onHide: () => T(!1),
                                    onDownload: () => {
                                        T(!1)
                                    },
                                    onDestroy: () => {
                                        D(!0)
                                    },
                                    onDocumentAccessDestroy: p,
                                    onRename: n,
                                    hideViewerButton: !0,
                                    displayVersionWarning: L,
                                    sourceType: "document_view_options"
                                }), (0, O.jsx)(x.Z, {
                                    doc: t,
                                    show: I,
                                    onCancel: () => D(!1),
                                    onConfirm: () => {
                                        C(), setTimeout((() => {
                                            u()
                                        }), 300)
                                    }
                                })]
                            }) : (0, O.jsx)(m.Z, {}))]
                        }), $ && (0, O.jsx)(M, {
                            doc: t
                        })]
                    })
                }
        },
        226001: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var s = n(24553),
                o = n(445884),
                i = n(800274),
                a = n(712722),
                r = n(297516),
                l = n(581232),
                c = n(791781),
                d = n(396693),
                u = n(982761),
                p = n(785893);
            const m = () => {
                var e;
                const t = (0, s.useNavigate)(),
                    {
                        appointment: n,
                        appointmentRules: m,
                        clearDocuments: h,
                        isAnonymousFunnel: g,
                        funnelType: _
                    } = null !== (e = (0, s.useLocation)().state) && void 0 !== e ? e : {},
                    v = !(0, i.ZP)(),
                    {
                        appointmentId: f
                    } = (0, s.useParams)(),
                    x = null !== g && void 0 !== g ? g : v,
                    b = x ? `/appointments/anonymous/${f}` : `/account/appointments/details/${f}`;
                if (!n || !m && !h) return (0, p.jsx)(s.Navigate, {
                    to: b,
                    replace: !0
                });
                const Z = x ? "anonymous_page" : _ || "appointment_list",
                    y = n ? {
                        source: "appointment_view"
                    } : {};
                return (0, p.jsx)(d.Z, {
                    value: {
                        type: Z,
                        appointment_id: f,
                        ...y
                    },
                    children: (0, p.jsx)(u.L, {
                        appointmentId: f,
                        children: (0, p.jsxs)(a.Z, {
                            children: [(0, p.jsx)(l.Z, {
                                title: o.Z.t("helpers.appointment.instructions_modal.title"),
                                onBack: () => t(-1)
                            }), (0, p.jsx)(r.Z, {
                                className: "dl-white-bg dl-padding-16",
                                children: (0, p.jsx)(c.Z, {
                                    appointment: n,
                                    documents: h,
                                    rules: m
                                })
                            })]
                        })
                    })
                })
            }
        },
        298264: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var s = n(184481),
                o = n(445884),
                i = n(990626),
                a = n(580163),
                r = n(778075),
                l = n(294184),
                c = n.n(l),
                d = n(592290),
                u = n(545763),
                p = n(453040),
                m = n(912711),
                h = n(148336),
                g = n(982761),
                _ = n(516590),
                v = n(569090),
                f = n(336954),
                x = n.n(f),
                b = n(975645),
                Z = n(261397),
                y = n(5212),
                j = (n(40372), n(451421)),
                w = n(845126),
                N = n(800274),
                S = n(23838),
                k = n(785893);

            function C(e, t, n, s) {
                return n || s || function(e) {
                    var t, n;
                    return 0 === (null !== (t = null === e || void 0 === e || null === (n = e.checkedDocumentIds) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0)
                }(e) || function(e, t) {
                    const n = e.checkedDocumentIds,
                        s = t.map((e => {
                            let {
                                id: t
                            } = e;
                            return t
                        }));
                    return n.some((function(e) {
                        return !s.includes(e)
                    }))
                }(e, t)
            }
            const E = e => {
                    var t;
                    let {
                        appointment: n,
                        checkboxState: i,
                        shareDocuments: a,
                        account: r,
                        onSuccess: l,
                        loading: d,
                        desktop: p,
                        submitDisabled: m,
                        setSubmitDisabled: h
                    } = e;
                    const {
                        getResourceId: v,
                        shareResourceWith: f
                    } = (0, s.useContext)(Z.WA), {
                        documents: x
                    } = (0, g.Z)(), b = (0, s.useContext)(S.Z);
                    return (0, k.jsx)(u.Z, {
                        className: c()({
                            "dl-margin-t-4": p,
                            "dl-margin-16": p
                        }),
                        disabled: C(i, x, d, m),
                        onClick: async () => {
                            if (r) return void l();
                            h(!0);
                            const e = await Promise.all(i.checkedDocumentIds.map((e => v({
                                    documentId: e
                                }).then((t => ({
                                    resourceId: t,
                                    documentId: e
                                })))))),
                                t = [],
                                s = [];
                            if (e.forEach((e => {
                                    e.resourceId ? s.push(e.resourceId) : t.push(e.documentId)
                                })), t.length > 0 && (0, _.ZP)({
                                    name: "share_unencrypted_documentIds",
                                    details: { ...b,
                                        appointment_id: n.id,
                                        agenda_id: n.agenda_id,
                                        checkedDocumentIds: t
                                    }
                                }), s.length > 0) {
                                const e = [{
                                    agendaId: n.agenda_id
                                }, {
                                    agendaId: n.agenda_id,
                                    role: "sync"
                                }, {
                                    agendaId: n.agenda_id,
                                    role: "secretaries"
                                }];
                                await f(s, e)
                            }
                            await a(), h(!1)
                        },
                        children: o.Z.t("helpers.appointment.add_documents", {
                            count: null === i || void 0 === i || null === (t = i.checkedDocumentIds) || void 0 === t ? void 0 : t.length
                        })
                    })
                },
                P = e => {
                    let {
                        show: t,
                        onStay: n,
                        onConfirmLeaving: s
                    } = e;
                    return (0, k.jsx)(r.Z, {
                        title: o.Z.t("patient_common.root.documents.quit_without_sharing_title"),
                        onDismiss: n,
                        onAccept: s,
                        show: t,
                        dismissText: o.Z.t("common.actions.cancel"),
                        acceptText: o.Z.t("common.actions.quit"),
                        children: o.Z.t("patient_common.root.documents.quit_without_sharing_description")
                    })
                },
                T = e => {
                    let {
                        files: t,
                        onAdd: n,
                        onSuccess: i,
                        show: a,
                        setShowModal: r,
                        appointment: l,
                        account: c,
                        checkboxState: m,
                        shareDocuments: h,
                        documents: g,
                        loading: _,
                        submitDisabled: f,
                        setSubmitDisabled: Z,
                        children: y
                    } = e;
                    const j = l.substitute_name || (0, b.WU)(l.profile),
                        [N, S] = (0, s.useState)(!1);
                    return (0, k.jsxs)(k.Fragment, {
                        children: [(0, k.jsx)(P, {
                            show: N,
                            onConfirmLeaving: () => {
                                S(!1), r(!1)
                            },
                            onStay: () => S(!1)
                        }), (0, k.jsxs)(d.ZP, {
                            scrollable: !0,
                            show: a,
                            onHide: () => function(e) {
                                var t;
                                return !(null === e || void 0 === e || null === (t = e.checkedDocumentIds) || void 0 === t || !t.length)
                            }(m) ? S(!0) : r(!1),
                            position: "right",
                            containerClassName: "dl-z-dialog",
                            className: "dl-full-height",
                            children: [(0, k.jsx)(d.Ng, {
                                children: (0, k.jsxs)("div", {
                                    className: "dl-full-height dl-flex-column",
                                    children: [(0, k.jsxs)("div", {
                                        className: "dl-padding-16 dl-document-sharing-title",
                                        children: [(0, k.jsx)(p.Z, {
                                            uiStyle: "title-l-bold",
                                            children: o.Z.t("helpers.appointment.select_documents")
                                        }), (0, k.jsxs)("div", {
                                            className: "flex dl-align-items-center",
                                            children: [(0, k.jsx)(w.Z, {
                                                color: "success-110",
                                                name: "solid/lock",
                                                size: "xsmall",
                                                className: "dl-margin-r-8"
                                            }), (0, k.jsxs)(p.Z, {
                                                color: "neutral-090",
                                                children: [o.Z.t("helpers.appointment.documents_shared_with"), " ", j]
                                            })]
                                        })]
                                    }), (0, k.jsx)("div", {
                                        className: "dl-padding-x-16 dl-margin-b dl-full-width dl-flex-column m-auto",
                                        children: (0, k.jsx)(v.u, {
                                            appointment: l,
                                            account: c,
                                            onUpload: e => null === m || void 0 === m ? void 0 : m.checkDocument(e.id),
                                            onAdd: n,
                                            children: e => {
                                                let {
                                                    onClick: t
                                                } = e;
                                                return (0, k.jsxs)(u.Z, {
                                                    icon: "paperclip",
                                                    onClick: t,
                                                    uiStyle: "info-link",
                                                    className: "dl-full-width",
                                                    children: [(0, k.jsx)(x(), {
                                                        className: "dl-margin-r-8"
                                                    }), o.Z.t("helpers.appointment.add_new_document")]
                                                })
                                            }
                                        })
                                    }), y]
                                })
                            }), (0, k.jsx)(d.ze, {
                                children: (0, k.jsx)(E, {
                                    checkboxState: m,
                                    documents: g,
                                    appointment: l,
                                    account: c,
                                    shareDocuments: h,
                                    onSuccess: () => i(t, m),
                                    loading: _,
                                    submitDisabled: f,
                                    setSubmitDisabled: Z,
                                    desktop: !0
                                })
                            })]
                        })]
                    })
                },
                I = e => {
                    let {
                        files: t,
                        onAdd: n,
                        onSuccess: s,
                        show: i,
                        setShowModal: a,
                        appointment: r,
                        account: l,
                        checkboxState: c,
                        shareDocuments: p,
                        loading: m,
                        submitDisabled: h,
                        setSubmitDisabled: g,
                        children: _,
                        source: f
                    } = e;
                    return (0, k.jsxs)(d.ZP, {
                        show: i,
                        size: "fullscreen",
                        title: o.Z.t("patient_common.root.documents.select_title"),
                        onHide: () => {
                            a(!1)
                        },
                        children: [(0, k.jsx)(d.Ng, {
                            alignText: "left",
                            children: _
                        }), (0, k.jsxs)(d.ze, {
                            children: [(0, k.jsx)("div", {
                                className: "dl-margin-b-16",
                                children: (0, k.jsx)(v.Z, {
                                    appointment: r,
                                    onUpload: e => null === c || void 0 === c ? void 0 : c.checkDocument(e.id),
                                    onAdd: n,
                                    startTankerOnMount: !0,
                                    source: f,
                                    children: e => {
                                        let {
                                            onClick: t
                                        } = e;
                                        return (0, k.jsxs)(u.Z, {
                                            icon: "paperclip",
                                            onClick: t,
                                            uiStyle: "info-link",
                                            className: "dl-full-width",
                                            children: [(0, k.jsx)(x(), {
                                                className: "dl-margin-r-8"
                                            }), o.Z.t("helpers.appointment.add_new_document")]
                                        })
                                    }
                                })
                            }), (0, k.jsx)(E, {
                                checkboxState: c,
                                appointment: r,
                                account: l,
                                shareDocuments: p,
                                onSuccess: () => s(t, c),
                                loading: m,
                                submitDisabled: h,
                                setSubmitDisabled: g
                            })]
                        })]
                    })
                },
                D = e => {
                    let {
                        appointment: t,
                        ...n
                    } = e;
                    const {
                        documents: s,
                        lastPage: o,
                        loading: i,
                        error: a,
                        showMore: r,
                        fetchDocuments: l
                    } = (0, g.Z)();
                    let c = s;
                    return t && (c = s.filter((e => !e.sharings.some((e => (0, j.fH)(e.appointment_id, t.id)))))), (0, k.jsx)(m.Z, {
                        className: "dl-padding-t-16 dl-padding-b-56",
                        viewOnly: !0,
                        isSharing: !0,
                        lastPage: o,
                        loading: i,
                        error: a,
                        showMore: r,
                        documents: c,
                        onDocumentDestroy: l,
                        noListItemContentPadding: (0, y.rl)(),
                        ...n
                    })
                },
                A = (e, t) => {
                    switch (t.type) {
                        case "CHECK":
                            return [...e, t.docId];
                        case "UNCHECK":
                            return e.filter((e => e !== t.docId));
                        default:
                            return e
                    }
                },
                O = e => {
                    var t, n, r;
                    let {
                        appointment: l,
                        profile: c,
                        sharingFunnelId: d,
                        onSuccess: u,
                        setShowModal: p,
                        selectedMasterPatient: m,
                        selectedDocumentIds: g = [],
                        source: v
                    } = e;
                    const [f, x] = (0, s.useState)([]), b = (0, a.ZP)(), [Z, w] = (0, s.useState)(!1), C = (0, N.ZP)(), [E, P] = (0, s.useReducer)(A, g), O = (0, s.useContext)(S.Z), G = (0, y.Zz)(), L = G ? T : I, R = {
                        checkedDocumentIds: E,
                        checkDocument: e => {
                            P({
                                type: "CHECK",
                                docId: e
                            })
                        },
                        uncheckDocument: e => {
                            P({
                                type: "UNCHECK",
                                docId: e
                            })
                        },
                        disabled: Z
                    }, {
                        mutateAsync: M,
                        isLoading: F
                    } = (0, h.k)({
                        appointmentId: null === l || void 0 === l ? void 0 : l.id,
                        onSuccess: () => {
                            u && u(), (0, _.ZP)({
                                name: "patient_end_share_document_appt",
                                details: { ...O,
                                    source: v,
                                    appointment_id: (0, j.id)(null === l || void 0 === l ? void 0 : l.id),
                                    sharing_funnel_id: d,
                                    is_appointment_request: !(null === l || void 0 === l || !l.appointment_request_entry),
                                    is_appointment_request_enabled: (0, i.cr)("patient_appointment_requests")
                                }
                            }, {
                                schema: "patient"
                            })
                        },
                        onError: e => {
                            b({
                                message: o.Z.t("common.error"),
                                uiStyle: "error"
                            }), window.crashReporter.captureException(e)
                        }
                    });
                    return (0, k.jsx)(L, {
                        show: !0,
                        setShowModal: p,
                        appointment: {
                            masterPatient: {
                                first_name: (null === l || void 0 === l || null === (t = l.patient) || void 0 === t ? void 0 : t.first_name) || (null === m || void 0 === m ? void 0 : m.first_name) || (null === C || void 0 === C ? void 0 : C.first_name),
                                last_name: (null === l || void 0 === l || null === (n = l.patient) || void 0 === n ? void 0 : n.last_name) || (null === m || void 0 === m ? void 0 : m.last_name) || (null === C || void 0 === C ? void 0 : C.last_name),
                                id: (null === l || void 0 === l || null === (r = l.patient) || void 0 === r ? void 0 : r.master_patient_id) || (null === m || void 0 === m ? void 0 : m.id) || (null === C || void 0 === C ? void 0 : C.main_master_patient_id)
                            },
                            id: null === l || void 0 === l ? void 0 : l.id,
                            agenda_id: null === l || void 0 === l ? void 0 : l.agenda_id,
                            substitute_name: (null === l || void 0 === l ? void 0 : l.substitute_name) || (null === c || void 0 === c ? void 0 : c.full_name),
                            profile: (null === l || void 0 === l ? void 0 : l.profile) || c,
                            appointment_request_entry: null === l || void 0 === l ? void 0 : l.appointment_request_entry
                        },
                        account: l ? null : C,
                        checkboxState: R,
                        shareDocuments: () => M({
                            documentIds: E
                        }),
                        files: f,
                        onAdd: l ? null : e => x([...f, e]),
                        onSuccess: u,
                        loading: F,
                        submitDisabled: Z,
                        setSubmitDisabled: w,
                        source: v,
                        children: (0, k.jsx)(D, {
                            viewOnly: !0,
                            placeholder: o.Z.t("patient_common.root.documents.empty_list"),
                            appointment: l,
                            profile: c,
                            checkboxState: R,
                            scrollable: G
                        })
                    })
                }
        },
        218334: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => p,
                X3: () => m,
                ZP: () => g
            });
            var s = n(184481),
                o = n(294184),
                i = n.n(o),
                a = n(15377),
                r = n(258637),
                l = n(453040),
                c = n(845126),
                d = (n(638216), n(785893));

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const p = {
                    ALWAYS_VISIBLE: "always_visible",
                    TOGGLEABLE_START_VISIBLE: "toggleable_start_visible",
                    TOGGLEABLE_START_HIDDEN: "toggleable_start_hidden"
                },
                m = {
                    RECTANGLE: "rectangle",
                    SQUARE: "square"
                };
            class h extends s.PureComponent {
                constructor(e) {
                    var t;
                    super(e), t = this, u(this, "isValidChar", (e => "text" === this.props.inputMode || e.match(/^\d$/))), u(this, "fillInputs", (e => {
                        var t, n;
                        const s = [...this.props.values];
                        let o;
                        for (o = 0; o < (null === e || void 0 === e ? void 0 : e.length) && o < this.props.values.length; o++) {
                            const t = e[o];
                            this.isValidChar(t) && (s[o] = t)
                        }
                        const i = s.every((e => "" !== e)) && o === s.length - 1;
                        null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, {
                            values: s,
                            shouldGoForward: i
                        });
                        const a = o < s.length ? o : s.length - 1;
                        h.focusElement(this.inputs[a])
                    })), u(this, "handleKeyPress", (e => t => {
                        if (t.key === a.tW.ENTER) return;
                        const n = String.fromCharCode(t.charCode);
                        this.isValidChar(n) && (this.updateChar(e, n), t.preventDefault())
                    })), u(this, "handleChange", (e => t => {
                        var n, s;
                        if ((null === (n = t.nativeEvent) || void 0 === n || null === (s = n.data) || void 0 === s ? void 0 : s.length) > 1) return void this.fillInputs(t.nativeEvent.data);
                        const o = t.target.value[t.target.value.length - 1] || "";
                        this.isValidChar(o) && this.updateChar(e, o)
                    })), u(this, "handleKeyDown", (e => t => {
                        const n = e - 1,
                            s = e + 1,
                            {
                                values: o
                            } = this.props;
                        switch (t.key) {
                            case a.tW.BACKSPACE:
                                return this.updateChar(e, "", "" === o[e] ? n : e), t.preventDefault();
                            case a.tW.ARROW_LEFT:
                                return t.preventDefault(), n < 0 && this.props.onChange ? this.props.onChange({
                                    values: o,
                                    shouldGoForward: !1,
                                    shouldGoBackward: !0
                                }) : h.focusElement(this.inputs[n]);
                            case a.tW.ARROW_RIGHT:
                                return t.preventDefault(), s > o.length - 1 && this.props.onChange ? this.props.onChange({
                                    values: o,
                                    shouldGoForward: !0,
                                    shouldGoBackward: !1
                                }) : h.focusElement(this.inputs[s])
                        }
                        return null
                    })), u(this, "onPaste", (e => {
                        e.preventDefault();
                        const t = (e.clipboardData || window.clipboardData).getData("text");
                        this.fillInputs(t)
                    })), u(this, "handleRef", (e => t => {
                        t && (this.inputs[e] = t, this.props.innerFocusRef && this.props.innerFocusRefIndex === e && this.props.innerFocusRef(t), t.addEventListener("paste", this.onPaste))
                    })), u(this, "updateChar", (function(e, n) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e + 1;
                        const o = [...t.props.values];
                        o[e] = n;
                        const i = o.every((e => "" !== e)) && e === o.length - 1,
                            a = 0 === e && "" === n;
                        t.props.onChange && t.props.onChange({
                            values: o,
                            shouldGoForward: i,
                            shouldGoBackward: a
                        }), i || a || h.focusElement(t.inputs[s])
                    })), u(this, "toggleHideValues", (() => this.setState((e => ({
                        hideValues: !e.hideValues
                    }))))), this.state = {
                        hideValues: e.displayMode === p.TOGGLEABLE_START_HIDDEN
                    }, this.inputs = new Array(e.values.length), this.handleRefs = new Array(e.values.length);
                    for (let e = 0; e < this.handleRefs.length; e++) this.handleRefs[e] = this.handleRef(e)
                }
                componentDidMount() {
                    this.props.autoFocusOnMount && setTimeout((() => h.focusElement(this.inputs[0])), 0)
                }
                render() {
                    const {
                        hideValues: e
                    } = this.state, {
                        autoComplete: t = "off",
                        showError: n,
                        errorMessage: s,
                        withLockIcon: o,
                        disabled: a,
                        staticMessage: u,
                        inputMode: h,
                        type: g,
                        pattern: _,
                        shape: v,
                        validationState: f = (s ? "error" : void 0)
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: "pin-wrapper dl-margin-y-16",
                        "data-design-system": "oxygen",
                        children: [(0, d.jsxs)("div", {
                            className: i()("pin-input-group", {
                                square: v === m.SQUARE
                            }),
                            children: [this.props.displayMode !== p.ALWAYS_VISIBLE && (0, d.jsx)("div", {
                                className: "grow"
                            }), (0, d.jsx)("div", {
                                className: "no-white-space-wrap flex",
                                children: this.props.values.map(((n, s) => {
                                    var o;
                                    return (0, d.jsx)(r.Z, {
                                        inputRef: this.handleRefs[s],
                                        value: e && "" !== n ? "\u2217" : n,
                                        name: `pin[${s}]`,
                                        "aria-label": null === (o = this.props.labels) || void 0 === o ? void 0 : o[s],
                                        validationState: f,
                                        maxLength: this.props.values.length,
                                        required: !0,
                                        autoComplete: t,
                                        type: g,
                                        pattern: _,
                                        inputMode: h,
                                        onChange: this.handleChange(s),
                                        onKeyPress: this.handleKeyPress(s),
                                        onKeyDown: this.handleKeyDown(s),
                                        disabled: a
                                    }, s)
                                }))
                            }), this.props.displayMode !== p.ALWAYS_VISIBLE && (0, d.jsx)("div", {
                                className: "eye-wrapper grow",
                                children: o ? (0, d.jsx)(c.Z, {
                                    name: "solid/lock",
                                    color: "neutral-090",
                                    size: "medium"
                                }) : (0, d.jsx)(c.Z, {
                                    name: e ? "regular/eye" : "regular/eye-slash",
                                    color: "neutral-090",
                                    role: "button",
                                    size: "medium",
                                    onClick: this.toggleHideValues
                                })
                            })]
                        }), n && (0, d.jsx)(l.Z, {
                            block: !0,
                            color: "error-090",
                            className: "pin-error-message dl-text-center",
                            children: s || " "
                        }), u && (0, d.jsx)(l.Z, {
                            block: !0,
                            className: "pin-message dl-text-center",
                            children: u
                        })]
                    })
                }
            }
            u(h, "focusElement", (e => e && e.focus())), u(h, "defaultProps", {
                autoFocusOnMount: !1,
                showError: !1,
                withLockIcon: !1,
                inputMode: "numeric",
                pattern: "[0-9\u2217]+",
                type: "tel",
                shape: m.RECTANGLE,
                displayMode: p.TOGGLEABLE_START_HIDDEN
            });
            const g = h
        },
        148336: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => a
            });
            var s = n(184481),
                o = n(174976),
                i = n(239417);
            const a = e => {
                let {
                    appointmentId: t,
                    onSuccess: n,
                    onError: a
                } = e;
                const r = (0, s.useContext)(i._O);
                return (0, o.useMutation)((async e => {
                    let {
                        documentIds: n
                    } = e;
                    return r.post(`/appointments/${t}/document_access.json`, {
                        body: {
                            document_ids: n
                        }
                    }).then((e => e.bodyData)).catch((e => ({
                        error: e
                    })))
                }), {
                    onSuccess: n,
                    onError: a
                })
            }
        },
        396719: (e, t, n) => {
            var s = n(184481);
            const o = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("path", {
                    d: "M2.7.5c-.2-.3-.5-.5-1-.5S1 .2.5.5C-.2 1-.2 2 .5 2.7L5.7 8 .5 13.5c-.7.8-.7 1.5 0 2.2.3.3.7.4 1.2.4.4 0 .8 0 1-.3L9 9c.3-.2.4-.5.4-1 0-.4 0-.8-.4-1L2.7.5z"
                }))
            }));
            o.defaultProps = {
                width: "10",
                height: "16",
                viewBox: "0 0 10 16"
            }, e.exports = o, o.default = o
        },
        965468: (e, t, n) => {
            var s = n(184481);
            const o = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, [s.createElement("path", {
                    d: "M126.821 26.93c-.127-.112-.248-.224-.369-.332a3.013 3.013 0 0 1-.299-.312.931.931 0 0 1-.162-.273c-.027-.082-.017-.146.033-.193.075-.072.172-.085.29-.037.116.05.241.132.37.253a3.2 3.2 0 0 1 .396.434c.133.173.257.34.375.505.119.164.216.32.294.467.077.146.13.257.153.33a17.469 17.469 0 0 1-1.081-.843m-6.026-13.476c.062-1.142.133-2.262.208-3.355.077-1.094.21-2.072.397-2.932.193-.862.448-1.545.771-2.052.325-.507.716-.746 1.17-.72.712.053 1.185.482 1.427 1.29.24.806.323 1.81.24 3.015-.078 1.205-.296 2.526-.65 3.968a120.202 120.202 0 0 1-1.102 4.174c-.38 1.341-.795 2.539-1.256 3.598-.454 1.059-.83 1.82-1.114 2.276-.157-3.46-.185-6.548-.09-9.262M88.471 32.335c-.915.5-1.57.5-1.964 0-.665-.624-.894-1.641-.692-3.049.202-1.407.714-2.827 1.537-4.267.375 1.125.88 2.112 1.518 2.955.639.844 1.34 1.515 2.11 2.014-.757 1.065-1.596 1.844-2.509 2.347m-39.539 0c-.915.5-1.57.5-1.964 0-.665-.624-.894-1.641-.691-3.049.201-1.407.714-2.827 1.537-4.267.375 1.125.879 2.112 1.517 2.955.64.844 1.34 1.515 2.11 2.014-.757 1.065-1.595 1.844-2.509 2.347m51.228-19.084c.057-1.142.118-2.261.186-3.356a23.3 23.3 0 0 1 .354-2.931c.173-.862.4-1.545.691-2.052.29-.508.64-.746 1.047-.72.635.053 1.058.483 1.275 1.289.214.807.288 1.812.215 3.017-.07 1.204-.265 2.525-.58 3.967-.32 1.443-.638 2.835-.987 4.174-.517 1.99-1.702 4.433-1.956 4.89-.164-4.071-.313-6.116-.245-8.278m33.387 13.374a.649.649 0 0 0-.494.087 1.72 1.72 0 0 0-.442.378c-.291.545-.679.884-1.168 1.018-.49.138-1.107.109-1.857-.087a4.506 4.506 0 0 0-.246-1.396 3.106 3.106 0 0 0-.766-1.223c-.363-.428-.871-.739-1.525-.932-.652-.194-1.19-.291-1.615-.291-.435.04-.8.175-1.086.407a1.5 1.5 0 0 0-.546.874c-.074.35-.047.737.085 1.165.133.426.382.853.745 1.28a21.4 21.4 0 0 1-.182 1.281c-.088.505-.22.971-.398 1.398a4.11 4.11 0 0 1-.601 1.048c-.225.271-.498.31-.823.116-.324-.195-.57-.533-.741-1.018a9.485 9.485 0 0 1-.4-1.544c-.105-.62-.162-1.28-.166-1.98a33.785 33.785 0 0 0 2.158-3.61 42.651 42.651 0 0 0 1.936-4.279c.58-1.494 1.09-2.99 1.53-4.484.442-1.494.776-2.9 1.01-4.221.23-1.319.314-2.513.25-3.581-.061-1.067-.303-1.911-.72-2.532-.363-.544-.92-1.02-1.675-1.427a10.766 10.766 0 0 0-2.325-.931 11.181 11.181 0 0 0-2.241-.38c-.697-.038-1.206.02-1.525.176-.983.427-1.772 1.33-2.372 2.707-.596 1.378-1.03 2.99-1.3 4.833a44.392 44.392 0 0 0-.441 5.909 59.255 59.255 0 0 0 .21 5.94c.164 1.863.386 3.494.666 4.891.08.406.164.774.25 1.105a8.772 8.772 0 0 1-.902 1.513c-.38.507-.752.933-1.116 1.283-.368.349-.715.612-1.043.785-.329.175-.575.224-.745.146-.232-.116-.4-.426-.505-.931a45.56 45.56 0 0 1-.317-1.69 94.08 94.08 0 0 1-.298-1.834c-.095-.601-.225-1.056-.394-1.367a2.519 2.519 0 0 0-.718-.815 5.765 5.765 0 0 0-1.018-.611 10.66 10.66 0 0 0-1.15-.465 13.49 13.49 0 0 0-1.083-.322c-.302-.034-.508.123-.62.466-.035-.023-.05.01-.034.116a4.109 4.109 0 0 0-.097.828c-.577 2.389-3.41 7.996-5.628 6.858-2.65-1.36-1.632-5.609-1.492-5.837.671-1.09 5.174-6.53 7.039-17.36.185-1.071.606-5.232-3.698-5.944-4.615-.765-5.67 1.569-6.121 2.59-1.561 3.537-1.318 14.854-.227 21.82-.694.76-1.633 1.12-2.25 1.047a5.264 5.264 0 0 0-1.033-2.753c-.604-.808-1.48-1.343-2.626-1.599-.17-.511-.522-.917-1.061-1.216a3.46 3.46 0 0 0-1.698-.447c-.934 0-1.765.246-2.49.735a6.42 6.42 0 0 0-1.821 1.887 9.094 9.094 0 0 0-.816 1.624c-.571.612-.825 1.889-2.044 4.438 0 0-1.672 3.042-3.544 2.412-1.32-.443-1.31-1.294-1.108-2.91.052-.417 1.586-6.901 2.763-11.85 1.72-.039 3.269-.076 4.644-.116 1.729-.048 3.114-.101 4.16-.162 1.047-.06 1.61-.17 1.699-.33.12-.278.002-.577-.352-.896-.356-.318-.82-.614-1.394-.884a11.706 11.706 0 0 0-1.847-.69c-.659-.19-1.244-.276-1.755-.256-.267.01-.974.098-2.117.259-.688.098-1.483.207-2.383.327l.686-2.873s.77-1.82-2.65-2.882c-.808-.252-1.402-.554-1.864-.554-.5 0-.905.175-1.214.525-.158.178-1.021 3.129-1.802 6.659-1.315.126-2.647.24-4 .34 0 0-1.951 1.534 3.62 1.462a64.236 64.236 0 0 0-.674 3.949c-1.416 7.955-3.793 11.747-7.388 10.207-3.107-1.332-1.648-5.911-1.288-6.434 1.99-2.891 4.449 2.454 5.295 1.122.34-.534 1.577-4.2-3.28-5.465-5.046-1.314-6.407 1.132-6.693 1.403-.286.273-.538.727-.758 1.368a6.93 6.93 0 0 0-.35 2.125 7.05 7.05 0 0 0 .002.305c-.702.844-1.708 1.247-2.358 1.17a5.262 5.262 0 0 0-1.032-2.753c-.604-.808-1.48-1.343-2.627-1.599-.17-.511-.522-.917-1.06-1.216a3.464 3.464 0 0 0-1.699-.447c-.934 0-1.765.246-2.49.735a6.423 6.423 0 0 0-1.821 1.887 9.264 9.264 0 0 0-1.114 2.527c-.252.919-.351 1.804-.296 2.657.02.896.322 1.707.91 2.432.587.728 2.159 2.751 4.38 2.75 3.623-.001 5.081-2.263 5.261-2.678.245-.57.485-1.1 1.027-1.16 1.655-.182 2.711-1.129 3.337-2.01.5 1.266 2.961 5.862 7.525 5.897 4.354.035 6.831-3.705 7.413-4.923.065.133.13.264.196.393.664 1.3 1.524 2.385 2.585 3.26 1.057.872 2.384 1.31 3.972 1.31.775 0 1.49-.31 2.145-.932A9.365 9.365 0 0 0 83 31.708c.029.037.055.076.085.113.588.728 2.16 2.751 4.38 2.75 3.624-.001 5.082-2.263 5.262-2.678.245-.57.484-1.1 1.027-1.16 1.572-.173 2.604-1.037 3.24-1.877.05.225.101.443.154.65.347 1.369 2.178 4.862 4.62 4.862 3.92 0 5.912-3.987 6.221-4.628l.072-.153.004.007c.388.699 2.33 4.774 5.453 4.774 3.13 0 4.365-3.053 4.736-4.09 1.212 1.59 3.557 4.09 6.512 4.09 3.758 0 4.93-4.544 4.03-4.674 3.295.478 4.911-3.03 4.751-3.07",
                    key: 0
                }), s.createElement("path", {
                    d: "M109.315 19.19c1.242 0 2.249-1.046 2.249-2.34 0-1.293-1.007-2.34-2.249-2.34-1.242 0-2.248 1.047-2.248 2.34 0 1.294 1.006 2.34 2.248 2.34",
                    key: 1
                }), s.createElement("path", {
                    d: "M43.296 12.539c-.064-.435-.132-.87-.228-1.3-.11-.433-.202-.863-.348-1.288-.249-.856-.624-1.685-1.043-2.477a13.577 13.577 0 0 0-1.526-2.2 13.485 13.485 0 0 0-1.886-1.78 13.8 13.8 0 0 0-2.072-1.323c-.349-.195-.707-.345-1.058-.507-.356-.14-.706-.293-1.058-.407-1.403-.499-2.774-.772-4.069-.933-2.597-.315-4.91-.166-6.908.099a33.545 33.545 0 0 0-5.054 1.089 31.688 31.688 0 0 0-3.11 1.103c-.701.296-1.068.486-1.068.486l-.248.128.103.402.28-.002 1.14-.011a88.756 88.756 0 0 1 3.191.034c1.363.04 3.006.11 4.842.296 1.832.187 3.871.492 5.914 1.08 2.039.573 4.068 1.494 5.576 2.862.38.338.714.717 1.035 1.107.305.403.59.826.836 1.286a11.36 11.36 0 0 1 1.093 3.162c.458 2.373.363 5.184-.133 8.044l-.195 1.079c-.076.36-.159.72-.227 1.086-.067.37-.16.716-.237 1.078l-.114.541c-.04.183-.093.38-.138.569-.194.799-.332 1.462-.535 2.15a17.523 17.523 0 0 1-.724 2.013c-.567 1.311-1.331 2.552-2.31 3.628a11.842 11.842 0 0 1-3.492 2.613c-.658.326-1.344.595-2.046.805-.7.218-1.418.369-2.139.467-1.443.2-2.898.162-4.298-.035-2.812-.402-5.368-1.44-7.63-2.503-2.26-1.086-4.287-2.216-5.942-3.41-1.636-1.206-2.814-2.568-3.214-3.681a3.152 3.152 0 0 1-.124-.407c-.029-.078-.048-.238-.073-.433-.055-.37-.083-.73-.097-1.077-.034-.695.002-1.344.081-1.943.161-1.196.501-2.18.763-2.86.135-.34.226-.599.321-.785l.122-.283.115-.266-.251-.239-.26.13-.274.137a4.48 4.48 0 0 0-.332.19c-.134.081-.293.177-.453.296a8.628 8.628 0 0 0-2.436 2.653A9.783 9.783 0 0 0 .326 25.48c-.07.238-.121.483-.166.735-.053.252-.087.509-.123.772-.047.255-.042.552-.025.935.016.331.06.66.122.988.247 1.319.86 2.53 1.612 3.607a15.017 15.017 0 0 0 2.745 2.873c2.071 1.713 4.626 3 7.462 3.725 2.835.736 5.925.896 9.015.69a36.509 36.509 0 0 0 4.655-.614c.776-.155 1.55-.343 2.322-.563.386-.11.77-.235 1.15-.37.384-.13.764-.273 1.14-.432a19.54 19.54 0 0 0 4.334-2.453 17.922 17.922 0 0 0 3.637-3.654c.52-.698.987-1.438 1.403-2.203.21-.382.408-.77.59-1.164l.496-1.113c.078-.183.157-.356.234-.547l.23-.583c.146-.389.307-.783.435-1.17.137-.389.259-.78.389-1.171l.343-1.19c.43-1.595.774-3.227.97-4.903.19-1.674.229-3.399 0-5.135",
                    key: 2
                }), s.createElement("path", {
                    d: "m24.114 26.366 3.522-18.024c.385-1.968-3.71.307-3.973 1.655L20.14 28.02c-.384 1.968 3.71-.307 3.974-1.655",
                    key: 3
                })])
            }));
            o.defaultProps = {
                height: "40",
                viewBox: "0 0 134 40",
                width: "134"
            }, e.exports = o, o.default = o
        },
        840587: (e, t, n) => {
            var s = n(184481);
            const o = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, s.createElement("g", {
                    transform: "translate(-286.000000, -374.000000)"
                }, s.createElement("g", {
                    transform: "translate(0.000000, 374.000000)"
                }, s.createElement("g", {
                    transform: "translate(286.000000, 0.000000)"
                }, [s.createElement("rect", {
                    width: "20",
                    height: "20",
                    key: 0
                }), s.createElement("circle", {
                    strokeOpacity: "0.3",
                    stroke: "#435F71",
                    cx: "10",
                    cy: "10",
                    r: "9.5",
                    key: 1
                }), s.createElement("g", {
                    key: 2
                }, [s.createElement("rect", {
                    width: "20",
                    height: "20",
                    key: 0
                }), s.createElement("path", {
                    d: "m13.315 6.398-4.324 6.167-2.382-2.514a.906.906 0 0 0-1.315-.042.985.985 0 0 0-.04 1.361s2.893 3.13 3.309 3.444a.91.91 0 0 0 1.3-.213l4.96-7.069a.986.986 0 0 0-.208-1.347.91.91 0 0 0-1.3.213z",
                    fillOpacity: "0.3",
                    fill: "#435F71",
                    key: 1
                })])])))))
            }));
            o.defaultProps = {
                width: "20px",
                height: "20px",
                viewBox: "0 0 20 20"
            }, e.exports = o, o.default = o
        },
        886308: () => {
            "use strict"
        },
        750822: () => {
            "use strict"
        },
        40372: () => {
            "use strict"
        }
    }
]);
//# sourceMappingURL=../83913-8f1ea4fc467137e1ff00.js.map