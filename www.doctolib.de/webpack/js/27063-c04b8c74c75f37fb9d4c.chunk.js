(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [27063], {
        832906: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => c
            });
            var n = a(184481),
                l = a(294184),
                r = a.n(l),
                i = a(297516),
                o = (a(349381), a(785893));
            const s = (0, n.forwardRef)(((e, t) => {
                const {
                    className: a,
                    uiStyle: n,
                    children: l,
                    defaultScrollTop: s,
                    scrollable: c,
                    outline: d,
                    ...m
                } = e, h = r()("dl-list", {
                    [`dl-list-${n}`]: n,
                    "dl-list-scrollable": c,
                    "dl-list-outline": d
                }, a);
                return c ? (0, o.jsx)(i.Z, { ...m,
                    ref: t,
                    className: h,
                    defaultScrollTop: s,
                    "data-design-system": "deprecated",
                    children: (0, o.jsx)("ul", {
                        children: l
                    })
                }) : (0, o.jsx)("div", { ...m,
                    className: h,
                    ref: t,
                    "data-design-system": "deprecated",
                    children: (0, o.jsx)("ul", {
                        children: l
                    })
                })
            }));
            s.defaultProps = {
                scrollable: !0,
                outline: !1
            };
            const c = s
        },
        470354: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => v
            });
            var n = a(977954),
                l = a.n(n),
                r = a(453040),
                i = a(919722),
                o = a.n(i),
                s = a(14846),
                c = a.n(s),
                d = a(169015),
                m = a.n(d),
                h = a(793916),
                p = a.n(h),
                u = a(263666),
                _ = a.n(u),
                g = (a(913255), a(785893));
            const f = {
                    visa: c(),
                    maestro: p(),
                    mastercard: m(),
                    "american express": _()
                },
                v = e => {
                    let {
                        brand: t,
                        last_digits: a,
                        expiry_date: n,
                        width: i = 24,
                        height: s = 24
                    } = e;
                    const c = f[t.toLowerCase()] || o();
                    return (0, g.jsx)("div", {
                        className: "dl-credit-card-item",
                        children: (0, g.jsxs)("div", {
                            className: "dl-flex-center",
                            children: [(0, g.jsx)(c, {
                                width: i,
                                height: s
                            }), (0, g.jsxs)(r.Z, {
                                className: "dl-margin-x-16",
                                uiStyle: "body-s-bold",
                                children: ["****", a]
                            }), (0, g.jsx)("div", {
                                children: l()(n).format("MM/YY")
                            })]
                        })
                    })
                }
        },
        202206: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => lt
            });
            var n = a(184481),
                l = a(24553),
                r = a(288802),
                i = a(990626),
                o = a(800274),
                s = a(712722),
                c = a(297516),
                d = a(527360),
                m = a.n(d),
                h = a(977954),
                p = a.n(h);
            const u = "acknowledgedAppointmentId";
            var _ = a(5212),
                g = a(451421),
                f = a(784600),
                v = a(755506),
                y = a(256320),
                x = a(406288),
                j = a(591035),
                Z = a(534130),
                E = a(975645),
                b = a(56100),
                w = a.n(b),
                N = a(952893),
                C = a(785893);
            const k = e => {
                let {
                    appointment: t,
                    telehealth: a,
                    displayCancelButton: n
                } = e;
                const {
                    cancelable: l,
                    id: r,
                    start_date: i,
                    phone_number: o,
                    too_late_to_cancel: s,
                    uncancelable_reason: c,
                    displayBillingStep: d,
                    needs_preparation: m,
                    profile: {
                        name_with_title: h
                    } = {}
                } = t;
                return (0, C.jsx)(f.Z, {
                    className: "dl-margin-16 dl-padding-0",
                    header: (0, C.jsx)(y.Z, {
                        date: t.start_date
                    }),
                    children: (0, N.Z)([(0, C.jsx)(x.Z, {
                        children: (0, C.jsx)("div", {
                            className: "dl-anonymous-session-header flex dl-justify-between",
                            children: (0, C.jsx)(j.Z, {
                                compact: !0,
                                telehealth: a,
                                doctor: t.profile,
                                substitute: t.substitute_name,
                                substitution_wording: t.substitution_wording
                            })
                        })
                    }, "doctor-card"), t.show_patient && (0, C.jsxs)(x.Z, {
                        contentClassName: "flex",
                        children: [(0, C.jsx)(w(), {
                            className: "dl-confirmed-item-icon dl-confirmed-item-icon-user dl-margin-x-16"
                        }), (0, E.WU)(t.patient)]
                    }, "patient"), n && (0, C.jsx)(x.Z, {
                        contentClassName: "flex dl-justify-center dl-padding-8",
                        children: (0, C.jsx)(Z.Z, {
                            cancelable: l,
                            appointmentId: r,
                            date: i,
                            doctorName: h,
                            doctorPhone: o,
                            tooLate: s,
                            uncancelableReason: c,
                            future: p()(i).isAfter(),
                            pricing: d,
                            needsPreparation: m,
                            block: !1
                        })
                    }, "cancel-appointment")], (0, C.jsx)(v.Z, {}))
                })
            };
            var S = a(78599),
                I = a(640415),
                P = a(445884),
                A = a(545763),
                T = a(462814),
                V = a(177140),
                z = a(547745),
                L = a.n(z),
                M = a(755440),
                R = a(232558),
                F = a(245755),
                H = a(478983),
                B = a.n(H),
                O = a(14846),
                D = a.n(O),
                G = a(169015),
                U = a.n(G),
                $ = a(793916),
                K = a.n($),
                Y = a(263666),
                q = a.n(Y),
                W = a(919722),
                J = a.n(W),
                Q = a(704098),
                X = a(642979),
                ee = a(516590),
                te = a(747317),
                ae = a(150217);

            function ne(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            class le extends n.Component {
                constructor() {
                    super(...arguments), ne(this, "trackTelehealthLegalsClick", (e => (0, ee.ZP)({
                        name: "telehealth_terms_click",
                        itemId: this.props.appointment.id,
                        itemType: te.i.APPOINTMENT,
                        details: {
                            terms: e
                        }
                    }))), ne(this, "getTelehealthWording", ((e, t) => {
                        const a = "de" === e ? t === ae.Z.Private ? "patient_common.root.telehealth.private_insurance_consent" : "patient_common.root.telehealth.public_insurance_consent" : "patient_common.root.telehealth.consent";
                        return this.props.tosAccepted ? [P.Z.t(a), "."].join("") : [P.Z.t(a), P.Z.t("patient_common.root.telehealth.and_i_accept"), (0, C.jsx)(X.Z, {
                            className: "dl-font-normal",
                            href: i.ZP.PATIENT_LEGAL_INFO_LINKS.terms_and_conditions,
                            target: "_blank",
                            onClick: () => this.trackTelehealthLegalsClick("telehealth_terms"),
                            children: P.Z.t("patient_common.root.legal_titles.telehealth_terms")
                        }, "cpu"), "."]
                    }))
                }
                render() {
                    const {
                        tosAccepted: e,
                        country: t,
                        insuranceSector: a
                    } = this.props;
                    return (0, C.jsxs)("div", {
                        className: "dl-margin-b",
                        children: [(0, C.jsx)(Q.Z, {
                            field: "telehealth_consent",
                            required: !0,
                            label: this.getTelehealthWording(t, a)
                        }), e ? null : (0, C.jsx)("div", {
                            className: "dl-margin-t-16",
                            children: (0, C.jsx)(Q.Z, {
                                field: "telehealth_tos",
                                required: !0,
                                label: (0, C.jsxs)(C.Fragment, {
                                    children: [P.Z.t("patient_common.root.telehealth.telehealth_data_security_accept"), (0, C.jsx)(X.Z, {
                                        className: "dl-font-normal",
                                        href: i.ZP.PATIENT_LEGAL_INFO_LINKS.privacy_policy,
                                        target: "_blank",
                                        onClick: () => this.trackTelehealthLegalsClick("telehealth_agreement"),
                                        children: P.Z.t("patient_common.root.legal_titles.telehealth_agreement")
                                    }), "."]
                                })
                            })
                        })]
                    })
                }
            }
            const re = le;
            var ie = a(437124);
            const oe = {
                loading: !1,
                cardNumberCompleted: !1,
                expiryCompleted: !1,
                cvcCompleted: !1,
                savingFailure: !1,
                keepAfterCharge: !1
            };

            function se(e, t) {
                const {
                    type: a,
                    ...n
                } = t;
                switch (a) {
                    case "START_SAVING":
                        return { ...e,
                            loading: !0,
                            savingFailure: !1
                        };
                    case "COMPLETE_SAVING":
                        return { ...e,
                            loading: !1
                        };
                    case "SET_FIELD_COMPLETION":
                        return { ...e,
                            ...n
                        };
                    case "SAVING_FAILURE":
                        return { ...e,
                            savingFailure: !0,
                            loading: !1
                        };
                    default:
                        throw new Error
                }
            }
            const ce = L()(F.ZP, R.kv)((e => {
                let {
                    appointment: t,
                    onCardFailure: a,
                    onChargeFailure: l,
                    onSuccess: r,
                    stripe: i,
                    track: s,
                    isEmailValid: c,
                    email: d,
                    amount: m
                } = e;
                const h = (0, o.ZP)(),
                    [p, u] = (0, n.useReducer)(se, oe),
                    [{
                        loading: g,
                        success: f
                    }, y] = (0, n.useState)({
                        loading: !1,
                        success: !1
                    }),
                    [{
                        loading: x,
                        success: j
                    }, Z] = (0, n.useState)({
                        loading: !1,
                        success: !1
                    }),
                    E = (0, n.useRef)({
                        numberElement: void 0,
                        expiryElement: void 0,
                        cvcElement: void 0
                    }),
                    b = e => (y({
                        loading: !0
                    }), ie.ZP.post(`/appointments/${t.id}/charges`, {
                        body: e
                    }).then((t => (y({
                        loading: !1,
                        success: !1
                    }), r({
                        data: t.bodyData,
                        input: e
                    }), t))).catch((e => {
                        let {
                            response: t = {}
                        } = e;
                        return y({
                            loading: !1,
                            success: !1
                        }), t
                    }))),
                    {
                        loading: w,
                        cardNumberCompleted: N,
                        expiryCompleted: k,
                        cvcCompleted: S,
                        savingFailure: z,
                        keepAfterCharge: L
                    } = p,
                    H = ((e, t) => {
                        var a;
                        return Boolean(null === t || void 0 === t || null === (a = t.features) || void 0 === a ? void 0 : a.includes(e))
                    })("demo-telehealth", h),
                    O = async e => {
                        let {
                            cardholderName: n,
                            keep_after_charge: r
                        } = e;
                        const {
                            bodyData: {
                                client_secret: o
                            }
                        } = await ie.ZP.get("/account/credit_cards/new.json").catch((e => {
                            let {
                                response: t = {}
                            } = e;
                            return u({
                                type: "SAVING_FAILURE"
                            }), a({
                                data: t.bodyData
                            }), t
                        }));
                        if (!o) return;
                        const s = await i.handleCardSetup(o, {
                            payment_method_data: {
                                billing_details: {
                                    name: n
                                }
                            }
                        });
                        if (s.error) {
                            let e = s.error.message;
                            "setup_intent_authentication_failure" === s.error.code && (e = P.Z.t("patient_common.root.telehealth.credit_card_form.errors.setup_intent_authentication_failure")), u({
                                type: "SAVING_FAILURE"
                            }), a({
                                data: {
                                    errors: [e]
                                }
                            })
                        } else {
                            const {
                                bodyData: e
                            } = await (c = {
                                token: s.setupIntent.payment_method,
                                appointment_id: null === t || void 0 === t ? void 0 : t.id,
                                keep_after_charge: r
                            }, Z({
                                loading: !0
                            }), ie.ZP.post("/account/credit_cards", {
                                body: c
                            }).then((e => (Z({
                                loading: !1,
                                success: !0
                            }), e))).catch((e => {
                                let {
                                    response: t = {}
                                } = e;
                                return Z({
                                    loading: !1,
                                    success: !1
                                }), u({
                                    type: "SAVING_FAILURE"
                                }), a({
                                    data: t.bodyData
                                }), t
                            }))), {
                                bodyData: n
                            } = await b({
                                amount: t.telehealth.price,
                                credit_card_id: e.id
                            });
                            n.errors && (u({
                                type: "SAVING_FAILURE"
                            }), l({
                                appointment: t,
                                creditCard: e,
                                data: {
                                    errors: n.errors
                                }
                            }))
                        }
                        var c
                    };
                return (0, C.jsx)(T.Z, {
                    horizontal: !1,
                    onSubmit: async e => {
                        let {
                            first_name: n,
                            last_name: r,
                            keep_after_charge: o
                        } = e;
                        if ((0, V.I6)() || (0, _.rl)() && setTimeout((() => {
                                E.current.numberElement.focus(), E.current.numberElement.blur(), E.current.expiryElement.focus(), E.current.expiryElement.blur(), E.current.cvcElement.focus(), E.current.cvcElement.blur()
                            }), 20), H) return void await b({
                            stripe_charge_id: "demo"
                        });
                        u({
                            type: "START_SAVING"
                        });
                        const c = [r, n].join(" ");
                        (0, I.m4)(t) ? (async e => {
                            let {
                                cardholderName: n,
                                keep_after_charge: r
                            } = e;
                            const {
                                bodyData: {
                                    client_secret: o
                                }
                            } = await ie.ZP.post(`/appointments/${t.id}/payment_intents`, {
                                query: {
                                    keep_after_charge: L,
                                    amount: m
                                }
                            }).catch((e => {
                                let {
                                    response: t = {}
                                } = e;
                                return u({
                                    type: "SAVING_FAILURE"
                                }), a({
                                    data: t.bodyData
                                }), t
                            }));
                            if (!o) return;
                            s({
                                name: "telehealth_stripe_payment_started"
                            }, {
                                schema: "patient"
                            });
                            const c = await i.handleCardPayment(o, {
                                payment_method_data: {
                                    billing_details: {
                                        name: n
                                    }
                                }
                            });
                            if (c.error) u({
                                type: "SAVING_FAILURE"
                            }), l({
                                data: {
                                    errors: [c.error.message]
                                }
                            }), s({
                                name: "telehealth_stripe_payment_failed",
                                details: {
                                    error: c.error
                                }
                            }, {
                                schema: "patient"
                            });
                            else {
                                s({
                                    name: "telehealth_stripe_payment_succeeded"
                                }, {
                                    schema: "patient"
                                });
                                const {
                                    bodyData: e
                                } = await b({
                                    stripe_charge_id: c.paymentIntent.id,
                                    keep_after_charge: r,
                                    patient_attributes: {
                                        email: d
                                    }
                                });
                                e.errors && (u({
                                    type: "SAVING_FAILURE"
                                }), l({
                                    appointment: t,
                                    data: {
                                        errors: e.errors
                                    }
                                }))
                            }
                        })({
                            cardholderName: c,
                            keep_after_charge: o
                        }) : O({
                            cardholderName: c,
                            keep_after_charge: o
                        })
                    },
                    defaultValues: { ...h,
                        telehealth_tos: Boolean(null === h || void 0 === h ? void 0 : h.telehealth_tos_accepted_at),
                        telehealth_consent: !1,
                        keep_after_charge: !1
                    },
                    validityIndicators: !1,
                    children: e => {
                        const t = !N || !k || !S || !e.getValue("telehealth_tos") || !e.getValue("telehealth_consent") || !h && !c;
                        return (0, C.jsxs)(C.Fragment, {
                            children: [(0, C.jsxs)("div", {
                                className: "dl-padding-16",
                                children: [(0, C.jsxs)("div", {
                                    className: "dl-credit-card-brands flex dl-align-items-center",
                                    children: [(0, C.jsx)(D(), {
                                        height: 36,
                                        width: 36
                                    }), (0, C.jsx)(U(), {
                                        height: 36,
                                        width: 36
                                    }), (0, C.jsx)(K(), {
                                        height: 36,
                                        width: 36
                                    }), (0, C.jsx)(q(), {
                                        height: 36,
                                        width: 36
                                    })]
                                }), (0, C.jsxs)("div", {
                                    className: "dl-credit-card-fields",
                                    children: [(0, C.jsx)(M.Z, {
                                        horizontal: !1,
                                        label: P.Z.t("patient_common.root.telehealth.credit_card_form.number_label"),
                                        icon: (0, C.jsx)(J(), {}),
                                        children: (0, C.jsx)(R.Ke, {
                                            style: F.BI,
                                            onReady: e => {
                                                E.current.numberElement = e
                                            },
                                            onChange: e => {
                                                let {
                                                    complete: t
                                                } = e;
                                                u({
                                                    type: "SET_FIELD_COMPLETION",
                                                    cardNumberCompleted: t
                                                }), t && E.current.expiryElement.focus()
                                            },
                                            placeholder: ""
                                        })
                                    }), (0, C.jsx)(M.Z, {
                                        horizontal: !1,
                                        label: P.Z.t("patient_common.root.telehealth.credit_card_form.expiry_label"),
                                        children: (0, C.jsx)(R.Oh, {
                                            style: F.BI,
                                            onReady: e => {
                                                E.current.expiryElement = e
                                            },
                                            onChange: e => {
                                                let {
                                                    complete: t
                                                } = e;
                                                u({
                                                    type: "SET_FIELD_COMPLETION",
                                                    expiryCompleted: t
                                                }), t && E.current.cvcElement.focus()
                                            }
                                        })
                                    }), (0, C.jsx)(M.Z, {
                                        horizontal: !1,
                                        label: P.Z.t("patient_common.root.telehealth.credit_card_form.security_code_label"),
                                        children: (0, C.jsx)(R.vk, {
                                            style: F.BI,
                                            onReady: e => {
                                                E.current.cvcElement = e
                                            },
                                            onChange: e => {
                                                let {
                                                    complete: t
                                                } = e;
                                                u({
                                                    type: "SET_FIELD_COMPLETION",
                                                    cvcCompleted: t
                                                })
                                            },
                                            placeholder: ""
                                        })
                                    })]
                                }), h && (0, C.jsx)(Q.Z, {
                                    field: "keep_after_charge",
                                    label: P.Z.t("patient_common.root.telehealth.payment_form.save_authorization"),
                                    onChange: e => {
                                        u({
                                            type: "SET_FIELD_COMPLETION",
                                            keepAfterCharge: e
                                        })
                                    }
                                })]
                            }), (0, C.jsx)(v.Z, {}), (0, C.jsxs)("div", {
                                className: "dl-padding-16",
                                children: [(0, C.jsx)(re, {
                                    tosAccepted: !(null === h || void 0 === h || !h.telehealth_tos_accepted_at)
                                }), (0, C.jsxs)(A.Z, {
                                    type: "submit",
                                    block: !0,
                                    disabled: t,
                                    loadable: {
                                        loading: w || x || g,
                                        success: !z && (j || f)
                                    },
                                    children: [(0, C.jsx)(B(), {}), (0, C.jsx)("span", {
                                        children: P.Z.t("patient_common.root.telehealth.payment_form.validate")
                                    })]
                                })]
                            })]
                        })
                    }
                })
            }));
            var de = a(172099),
                me = a(580163),
                he = a(453040),
                pe = a(929014),
                ue = a(233625),
                _e = a(584619),
                ge = a(722562),
                fe = a(298203),
                ve = a(408404),
                ye = a.n(ve),
                xe = a(294184),
                je = a.n(xe),
                Ze = a(169339),
                Ee = a(383915),
                be = a(968461),
                we = a(259627),
                Ne = a(977314);
            const Ce = e => {
                    let {
                        show: t,
                        onShow: a = (() => {}),
                        onClose: l,
                        img: r,
                        title: i,
                        isLastStep: o,
                        hasGif: s,
                        children: c
                    } = e;
                    return (0, n.useEffect)((() => {
                        t && a()
                    }), [t]), (0, C.jsx)("div", {
                        className: "dl-text-center dl-flex-column dl-full-height",
                        children: (0, C.jsxs)("div", {
                            className: "dl-flex dl-full-height dl-flex-column dl-padding-x-8",
                            children: [(0, C.jsx)("div", {
                                className: je()("dl-tutorial-step-illustration", {
                                    "snapshot-hide": s
                                }),
                                style: {
                                    backgroundImage: `url(${r})`
                                }
                            }), (0, C.jsxs)("div", {
                                className: "dl-tutorial-text dl-flex-grow-auto",
                                children: [(0, C.jsx)(he.Z, {
                                    uiStyle: "DEPRECATED-title-sub-regular",
                                    className: "dl-margin-y-16",
                                    children: i
                                }), (0, C.jsx)(he.Z, {
                                    children: "function" === typeof c ? c({
                                        onClose: l
                                    }) : c
                                })]
                            }), o && (0, C.jsx)(A.Z, {
                                block: !0,
                                onTap: l,
                                className: "dl-margin-b",
                                children: P.Z.t("common.got_it")
                            })]
                        })
                    })
                },
                ke = e => {
                    let {
                        show: t,
                        onClose: a,
                        children: l
                    } = e;
                    const [r, i] = (0, n.useState)(0), o = n.Children.toArray(l).filter((e => !!e)), s = o.length;
                    return (0, n.useEffect)((() => {
                        t || 0 === r || i(0)
                    }), [t]), s ? (0, C.jsxs)(Ze.Z, {
                        onHide: a,
                        size: "small",
                        show: t,
                        children: [(0, C.jsx)(Ee.Z, {
                            className: je()({
                                "dl-padding-t-24": (0, _.rl)()
                            }),
                            children: (0, C.jsx)(Ne.ZP, {
                                index: r,
                                onChangeIndex: e => i(e),
                                resistance: !0,
                                style: {
                                    height: "100%"
                                },
                                containerStyle: {
                                    height: "100%"
                                },
                                children: o.map(((e, l) => (0, n.cloneElement)(e, {
                                    key: l,
                                    show: t && l === r,
                                    isLastStep: l === s - 1,
                                    onClose: a,
                                    onTap: () => {
                                        l !== s - 1 && i(l + 1)
                                    }
                                })))
                            })
                        }), s > 1 && (0, C.jsx)(be.Z, {
                            children: (0, C.jsxs)("div", {
                                className: "dl-full-width flex dl-justify-between dl-align-items-center",
                                children: [(0, C.jsx)("div", {
                                    className: "dl-dot-pagination-actions",
                                    children: r > 0 && (0, C.jsx)(A.Z, {
                                        size: "small",
                                        uiStyle: "info-link",
                                        onClick: () => i(r - 1),
                                        children: P.Z.t("common.actions.back")
                                    })
                                }), (0, C.jsx)(we.Z, {
                                    index: r,
                                    onIndexChange: i,
                                    total: s
                                }), (0, C.jsx)("div", {
                                    className: "dl-dot-pagination-actions",
                                    children: r < s - 1 && (0, C.jsx)(A.Z, {
                                        size: "small",
                                        onClick: () => i(r + 1),
                                        children: P.Z.t("common.actions.next")
                                    })
                                })]
                            })
                        })]
                    }) : null
                },
                Se = a.p + "a6c6daccd5cbf8016a00.png",
                Ie = a.p + "396518a69b18e7d7a9c1.png",
                Pe = a.p + "29e3a85f2428053f08d7.png",
                Ae = a.p + "8e53d5427eda9d7c87b5.svg",
                Te = e => {
                    var t;
                    let {
                        appointment: a,
                        show: n,
                        onHide: l,
                        source: r
                    } = e;
                    const i = a.telehealth.pricing / 100,
                        o = e => () => {
                            (0, ee.ZP)({
                                name: "display_payment_tutorial_step",
                                itemId: a.id,
                                itemType: te.i.APPOINTMENT,
                                details: {
                                    current_step: e,
                                    source: r
                                }
                            }, {
                                schema: "patient"
                            })
                        };
                    return (0, C.jsxs)(ke, {
                        show: n,
                        onClose: () => {
                            (0, ee.ZP)({
                                name: "dismiss_payment_tutorial",
                                itemId: a.id,
                                itemType: te.i.APPOINTMENT,
                                details: {
                                    source: r
                                }
                            }), l()
                        },
                        children: [(null === a || void 0 === a || null === (t = a.profile) || void 0 === t ? void 0 : t.medical) && (0, C.jsxs)(Ce, {
                            img: Pe,
                            title: P.Z.t("patient_common.root.telehealth.payment_tutorial.reimbursement.title"),
                            onShow: o("reimbursement"),
                            children: [P.Z.t("patient_common.root.telehealth.payment_tutorial.reimbursement.body"), (0, C.jsx)(he.Z, {
                                color: "neutral-090",
                                className: "dl-margin-t-16",
                                component: "div",
                                children: P.Z.t("patient_common.root.telehealth.payment_tutorial.reimbursement.footer")
                            })]
                        }), (0, C.jsx)(Ce, {
                            img: Se,
                            title: P.Z.t("patient_common.root.telehealth.payment_tutorial.bank_print.title"),
                            onShow: o("bank_print"),
                            children: P.Z.t("patient_common.root.telehealth.payment_tutorial.bank_print.body")
                        }), (0, C.jsxs)(Ce, {
                            img: Ae,
                            title: P.Z.t("patient_common.root.telehealth.payment_tutorial.payment.title"),
                            onShow: o("payment"),
                            children: [P.Z.t("patient_common.root.telehealth.payment_tutorial.payment.body", {
                                amount: i
                            }), (0, C.jsx)(he.Z, {
                                color: "neutral-090",
                                className: "dl-margin-t-16",
                                component: "div",
                                children: P.Z.t("patient_common.root.telehealth.payment_tutorial.payment.footer")
                            })]
                        }), (0, C.jsx)(Ce, {
                            img: Ie,
                            title: P.Z.t("patient_common.root.telehealth.payment_tutorial.issue.title"),
                            onShow: o("issue"),
                            children: P.Z.t("patient_common.root.telehealth.payment_tutorial.issue.body")
                        })]
                    })
                };
            var Ve = a(710270);
            const ze = L()(F.ZP, R.kv)((e => {
                    let {
                        appointment: t,
                        tosAccepted: a,
                        onFailure: l,
                        onSuccess: r,
                        amount: i,
                        creditCard: s,
                        secure: c,
                        stripe: d,
                        track: m,
                        isEmailValid: h
                    } = e;
                    const p = (0, o.ZP)(),
                        {
                            abortController: u
                        } = (0, fe.Z)(),
                        [_, g] = (0, n.useState)(!1),
                        {
                            createCharge: f,
                            loading: v,
                            success: y
                        } = (0, Ve.Z)({
                            url: `/appointments/${t.id}/charges`,
                            method: "post",
                            trigger: "createCharge",
                            onSuccess: r,
                            onFailure: e => (g(!1), l(e))
                        });
                    return (0, C.jsx)(T.Z, {
                        defaultValues: {
                            telehealth_tos: a,
                            telehealth_consent: !1
                        },
                        onSubmit: async () => {
                            var e;
                            if (g(!0), (0, I.m4)(t) && (null === p || void 0 === p || null === (e = p.features) || void 0 === e || !e.includes("demo-telehealth"))) {
                                const {
                                    bodyData: e
                                } = await ie.ZP.post(`/appointments/${t.id}/payment_intents`, {
                                    query: s ? {
                                        credit_card_id: s.id,
                                        amount: i
                                    } : {
                                        amount: i
                                    },
                                    signal: u.signal
                                }).catch((e => {
                                    let {
                                        response: t = {}
                                    } = e;
                                    const {
                                        bodyData: a,
                                        status: n
                                    } = t;
                                    return l({
                                        data: a,
                                        status: n
                                    }), {
                                        bodyData: a
                                    }
                                })), a = null === e || void 0 === e ? void 0 : e.client_secret;
                                if (!a) return g(!1);
                                m({
                                    name: "telehealth_stripe_payment_started"
                                }, {
                                    schema: "patient"
                                });
                                const n = await d.handleCardPayment(a);
                                return n.error ? (m({
                                    name: "telehealth_stripe_payment_failed",
                                    details: {
                                        error: n.error
                                    }
                                }, {
                                    schema: "patient"
                                }), g(!1), l({
                                    data: {
                                        errors: [n.error.message]
                                    }
                                })) : (m({
                                    name: "telehealth_stripe_payment_succeeded"
                                }, {
                                    schema: "patient"
                                }), f({
                                    stripe_charge_id: n.paymentIntent.id
                                }))
                            }
                            return f({
                                amount: i,
                                credit_card_id: s.id
                            })
                        },
                        className: "dl-margin-16",
                        children: e => {
                            const n = e.getValue("telehealth_tos") && e.getValue("telehealth_consent") && (p || h);
                            return (0, C.jsxs)(C.Fragment, {
                                children: [(0, C.jsx)(re, {
                                    appointment: t,
                                    tosAccepted: a,
                                    country: t.country,
                                    insuranceSector: t.insurance_sector || t.patient.insurance_sector
                                }), (0, C.jsxs)(A.Z, {
                                    block: !0,
                                    disabled: !n || _,
                                    loadable: {
                                        loading: v,
                                        success: y
                                    },
                                    type: "submit",
                                    children: [c && (0, C.jsx)(B(), {}), (0, C.jsx)("span", {
                                        children: P.Z.t("patient_common.root.telehealth.payment_form.validate")
                                    })]
                                })]
                            })
                        }
                    })
                })),
                Le = a.p + "51e616dcb90b0ec23cb1.png",
                Me = a.p + "f09677fef2102ed62b03.png",
                Re = a.p + "47491c67968b6e4d4139.png",
                Fe = (e, t) => (0, i.LA)("insurance_sector") ? t === ae.Z.Private ? Me : Re : Le,
                He = (e, t) => (0, i.LA)("insurance_sector") ? t === ae.Z.Private ? "patient_common.root.telehealth.private_insurance_explanation" : "patient_common.root.telehealth.public_insurance_explanation" : "patient_common.root.telehealth.free_explanation",
                Be = e => {
                    let {
                        country: t,
                        insuranceSector: a
                    } = e;
                    return (0, C.jsxs)(C.Fragment, {
                        children: [(0, C.jsx)("div", {
                            className: "dl-payment-illustration",
                            children: (0, C.jsx)("img", {
                                src: Fe(0, a),
                                alt: P.Z.t(He(0, a))
                            })
                        }), (0, C.jsx)(he.Z, {
                            component: "div",
                            align: "center",
                            children: P.Z.t(He(0, a))
                        })]
                    })
                },
                Oe = () => (0, C.jsxs)(C.Fragment, {
                    children: [(0, C.jsx)("div", {
                        className: "dl-payment-illustration",
                        children: (0, C.jsx)("img", {
                            src: "/img/payment_issue.png",
                            alt: ""
                        })
                    }), (0, C.jsx)(he.Z, {
                        children: P.Z.t("patient_common.root.telehealth.stripe_unavailable")
                    })]
                }),
                De = e => {
                    let {
                        onFailure: t,
                        onSuccess: a,
                        stripeUnavailable: l,
                        stripeBypassToken: r,
                        email: i,
                        appointment: s,
                        tosAccepted: c,
                        isEmailValid: d
                    } = e;
                    const [m, h] = (0, n.useState)(!1), p = (0, o.ZP)(), {
                        createCharge: u,
                        loading: _,
                        success: g
                    } = (0, Ve.Z)({
                        url: `/appointments/${s.id}/charges`,
                        method: "post",
                        trigger: "createCharge",
                        onSuccess: a,
                        onFailure: e => (h(!1), t(e))
                    });
                    return (0, C.jsx)(T.Z, {
                        defaultValues: {
                            telehealth_tos: c,
                            telehealth_consent: !1
                        },
                        onSubmit: async () => (h(!0), u(l ? {
                            patient_attributes: {
                                email: i
                            },
                            stripe_unavailable: l,
                            bypass_token: r
                        } : {
                            patient_attributes: {
                                email: i
                            },
                            amount: 0
                        })),
                        className: "dl-margin-16",
                        children: e => {
                            const t = e.getValue("telehealth_tos") && e.getValue("telehealth_consent") && (p || d);
                            return (0, C.jsxs)(C.Fragment, {
                                children: [(0, C.jsxs)("div", {
                                    className: "dl-margin-16 dl-text-center ",
                                    children: [l ? (0, C.jsx)(Oe, {}) : (0, C.jsx)(Be, {
                                        country: s.country,
                                        insuranceSector: s.insurance_sector || s.patient.insurance_sector
                                    }), (0, C.jsx)(v.Z, {
                                        className: "dl-margin-t-16"
                                    })]
                                }), (0, C.jsx)(re, {
                                    appointment: s,
                                    tosAccepted: c,
                                    country: s.country,
                                    insuranceSector: s.insurance_sector || s.patient.insurance_sector
                                }), (0, C.jsx)(A.Z, {
                                    block: !0,
                                    disabled: !t || m,
                                    loadable: {
                                        loading: _,
                                        success: g
                                    },
                                    type: "submit",
                                    children: (0, C.jsx)("span", {
                                        children: P.Z.t("patient_common.root.telehealth.payment_form.validate")
                                    })
                                })]
                            })
                        }
                    })
                };
            var Ge = a(258637),
                Ue = a(934418),
                $e = a.n(Ue),
                Ke = a(662020),
                Ye = a.n(Ke);
            const qe = e => {
                    let {
                        appointment: t,
                        email: a,
                        setEmail: r,
                        isEmailValid: i,
                        loggedIn: o
                    } = e;
                    const s = (0, l.useNavigate)(),
                        c = (0, n.useRef)(!1),
                        d = t.patient.master_patient_id;
                    if (o) return null;
                    const m = (e, a) => {
                        (0, ee.ZP)({
                            name: e,
                            itemId: t.id,
                            itemType: te.i.APPOINTMENT,
                            details: a
                        })
                    };
                    return (0, C.jsxs)(f.Z, {
                        className: "dl-margin-16 dl-padding-0",
                        children: [(0, C.jsxs)(ue.Z, {
                            uiStyle: "dark",
                            align: "left",
                            className: "flex dl-align-items-center",
                            children: [(0, C.jsx)(Ye(), {
                                className: "dl-margin-r"
                            }), (0, C.jsx)("span", {
                                children: P.Z.t("patient_common.root.telehealth.payment_form.no_account_block.title")
                            })]
                        }), (0, C.jsxs)("div", {
                            className: "dl-padding-16",
                            children: [(0, C.jsx)(he.Z, {
                                children: P.Z.t("patient_common.root.telehealth.payment_form.no_account_block.subtitle")
                            }), (0, C.jsxs)("div", {
                                className: "flex dl-accountless-email-container dl-padding-t-16",
                                children: [(0, C.jsx)(Ge.Z, {
                                    validationState: a && !i ? "error" : void 0,
                                    name: "email",
                                    type: "email",
                                    icon: (0, C.jsx)($e(), {}),
                                    iconPosition: "left",
                                    placeholder: P.Z.t("patient_common.root.telehealth.payment_form.no_account_block.email"),
                                    value: a,
                                    onChange: e => r(e.target.value),
                                    onBlur: () => {
                                        i && !c.current && (m("anonymous_type_email", {
                                            patientId: t.patient.id,
                                            withFee: Boolean(t.telehealth.pricing),
                                            email: a
                                        }), c.current = !0)
                                    }
                                }), !d && (0, C.jsx)(A.Z, {
                                    uiStyle: "info-link",
                                    onClick: () => {
                                        m("anonymous_register_link", {
                                            patientId: t.patient.id,
                                            withFee: Boolean(t.telehealth.pricing)
                                        });
                                        const e = "/appointments/anonymous/register";
                                        return s && (0, _.rl)() ? s(e, {
                                            replace: !0
                                        }) : (window.location.pathname = e, !0)
                                    },
                                    children: P.Z.t("patient_common.root.telehealth.payment_form.no_account_block.register_link")
                                })]
                            }), (0, C.jsxs)("div", {
                                className: "dl-margin-t-16",
                                children: [(0, C.jsx)(he.Z, {
                                    block: !0,
                                    children: P.Z.t("patient_common.root.telehealth.payment_form.no_account_block.login.description")
                                }), (0, C.jsx)(l.Link, {
                                    to: "/appointments/anonymous/register?action=login",
                                    onClick: () => {
                                        m("anonymous_login_link", {
                                            patientId: t.patient.id,
                                            withFee: Boolean(t.telehealth.pricing)
                                        })
                                    },
                                    className: "dl-margin-t-16",
                                    children: P.Z.t("patient_common.root.telehealth.payment_form.no_account_block.login.link")
                                })]
                            })]
                        })]
                    })
                },
                We = (e, t) => ({ ...e,
                    ...t
                }),
                Je = e => {
                    var t;
                    let {
                        appointment: a,
                        cards: r,
                        fetchAppointments: i
                    } = e;
                    const s = (0, o.ZP)(),
                        c = (0, l.useNavigate)(),
                        {
                            abortController: d
                        } = (0, fe.Z)(),
                        [m, h] = (0, n.useState)(a),
                        [u, y] = (0, n.useState)(m.telehealth.stripe_unavailable),
                        [x, j] = (0, n.useState)(),
                        Z = Boolean(null === s || void 0 === s ? void 0 : s.telehealth_tos_accepted_at),
                        E = Number(m.telehealth.pricing || 0),
                        b = E > 0 && 0 === r.length,
                        [w, N] = (0, n.useState)((null === (t = m.patient) || void 0 === t ? void 0 : t.email) || ""),
                        k = (0, _e.Z)(w),
                        [{
                            creditCards: S,
                            selectedCard: I,
                            showPaymentInfoModal: T
                        }, V] = (0, n.useReducer)(We, {
                            creditCards: r,
                            selectedCard: r.length ? r[0] : void 0,
                            showPaymentInfoModal: b
                        }),
                        z = (0, me.ZP)(),
                        L = e => {
                            let {
                                name: t,
                                details: a
                            } = e;
                            (0, ee.ZP)({
                                name: t,
                                itemId: m.id,
                                itemType: te.i.APPOINTMENT,
                                details: a
                            }, {
                                schema: "patient"
                            })
                        },
                        M = e => t => {
                            let {
                                data: {
                                    stripe_unavailable: a,
                                    errors: n,
                                    bypass_token: l
                                },
                                status: r
                            } = t;
                            "boolean" === typeof a && y(a), l && j(l);
                            const i = n ? n.join(".\n") : P.Z.t("common.error");
                            z({
                                uiStyle: "error",
                                message: i
                            }), 409 === r && ie.ZP.get(`/appointments/${m.id}.json`, {
                                signal: d.signal
                            }).then((e => {
                                let {
                                    bodyData: t
                                } = e;
                                return h(t)
                            })), L({
                                name: e,
                                details: {
                                    appointment_id: m.id,
                                    errors: n
                                }
                            })
                        };
                    (0, de.Z)({
                        name: "display_telehealth_payment_step",
                        details: {
                            appointment_id: (0, g.id)(m.id)
                        }
                    }, {
                        schema: "patient"
                    });
                    const R = e => {
                            let {
                                data: {
                                    redirection: t
                                }
                            } = e;
                            if ((0, ee.ZP)({
                                    name: "anonymous_payment_validation",
                                    itemId: m.id,
                                    itemType: te.i.APPOINTMENT,
                                    details: {
                                        patientId: m.patient.id,
                                        withFee: Boolean(m.telehealth.pricing)
                                    }
                                }), !c || !(0, _.rl)()) return window.location = t, !0;
                            try {
                                i && i()
                            } finally {
                                c(t, {
                                    replace: !0
                                })
                            }
                        },
                        F = p()(m.start_date).isBefore(new Date, "day");
                    if (0 === E || u) return (0, C.jsxs)(C.Fragment, {
                        children: [(0, C.jsx)(qe, {
                            appointment: m,
                            email: w,
                            setEmail: N,
                            isEmailValid: k,
                            loggedIn: !!s
                        }), (0, C.jsx)(f.Z, {
                            className: "dl-margin-16 dl-padding-0",
                            children: F ? (0, C.jsx)(pe.Z, {
                                variant: "deprecated-alert-interface",
                                uiStyle: "error",
                                size: "medium",
                                children: P.Z.t("patient_common.root.telehealth.payment_form.is_past_error")
                            }) : (0, C.jsx)(De, {
                                email: w,
                                isEmailValid: k,
                                appointment: m,
                                tosAccepted: Z,
                                stripeUnavailable: u,
                                stripeBypassToken: x,
                                onFailure: M("charge_creation_failed"),
                                onSuccess: R
                            })
                        })]
                    });
                    const H = new Intl.NumberFormat(document.documentElement.lang, {
                        style: "currency",
                        currency: "EUR"
                    }).format(E / 100);
                    return (0, C.jsxs)("div", {
                        className: "unified-payment-form",
                        children: [(0, C.jsx)(qe, {
                            appointment: m,
                            email: w,
                            setEmail: N,
                            isEmailValid: k,
                            loggedIn: !!s
                        }), (0, C.jsxs)(f.Z, {
                            className: "dl-margin-16 dl-padding-0",
                            children: [(0, C.jsxs)(ue.Z, {
                                uiStyle: "dark",
                                align: "left",
                                className: "flex dl-align-items-center",
                                children: [(0, C.jsx)(ye(), {
                                    style: {
                                        fill: "white"
                                    },
                                    className: "dl-margin-r"
                                }), P.Z.t("patient_common.root.telehealth.payment_form.secured_page")]
                            }), (0, C.jsxs)("div", {
                                className: "dl-padding-16",
                                children: [(0, C.jsx)(he.Z, {
                                    uiStyle: "body-s-bold",
                                    children: P.Z.t("patient_common.root.telehealth.payment_form.title", {
                                        amount: H
                                    })
                                }), (0, C.jsxs)("div", {
                                    className: "dl-payment-reassurance",
                                    children: [(0, C.jsx)(he.Z, {
                                        color: "neutral-090",
                                        children: P.Z.t("patient_common.root.telehealth.payment_form.reassurance", {
                                            name: m.profile.name_with_title
                                        })
                                    }), (0, C.jsx)(A.Z, {
                                        uiStyle: "info-link",
                                        onClick: () => {
                                            V({
                                                showPaymentInfoModal: !0
                                            })
                                        },
                                        children: P.Z.t("common.actions.know_more")
                                    })]
                                })]
                            }), (0, C.jsx)(v.Z, {}), S.length > 0 && (0, C.jsxs)("fieldset", {
                                className: "dl-margin-16",
                                children: [(0, C.jsx)(he.Z, {
                                    component: "legend",
                                    uiStyle: "body-s-bold",
                                    className: "dl-margin-b",
                                    children: P.Z.t("patient_common.root.telehealth.payment_form.saved_cards")
                                }), (0, C.jsx)(ge.Z, {
                                    creditCards: S,
                                    selectedCard: I,
                                    onSelectCard: e => {
                                        e && L({
                                            name: "change_credit_card"
                                        }), V({
                                            selectedCard: e
                                        })
                                    }
                                })]
                            }), I ? (0, C.jsx)(ze, {
                                amount: E,
                                appointment: m,
                                tosAccepted: Z,
                                onFailure: M("charge_creation_failed"),
                                creditCard: I,
                                onSuccess: R,
                                track: L,
                                secure: !0
                            }) : (0, C.jsx)(ce, {
                                amount: E,
                                email: w,
                                isEmailValid: k,
                                appointment: m,
                                track: L,
                                onCardFailure: M("credit_card_creation_failed"),
                                onChargeFailure: e => {
                                    let {
                                        creditCard: t,
                                        data: a
                                    } = e;
                                    if (t) {
                                        const e = !t.delete_after_charge;
                                        V({
                                            selectedCard: e ? t : void 0,
                                            creditCards: e ? [...S, t] : S
                                        })
                                    }
                                    M("charge_creation_failed")({
                                        data: a
                                    })
                                },
                                onSuccess: R
                            })]
                        }), (0, C.jsx)(Te, {
                            show: T,
                            appointment: m,
                            source: "unified_payment_step",
                            onHide: () => V({
                                showPaymentInfoModal: !1
                            })
                        })]
                    })
                },
                Qe = e => {
                    let {
                        appointment: t,
                        creditCards: a,
                        fetchAppointments: n
                    } = e;
                    const r = (0, o.ZP)(),
                        i = (0, I.iE)(t),
                        {
                            tcs_converted: s
                        } = (0, S.e3)(window.location.search);
                    return r || s || i ? (0, C.jsx)(Je, {
                        appointment: t,
                        cards: a,
                        fetchAppointments: n
                    }) : (0, C.jsx)(l.Navigate, {
                        to: "/appointments/anonymous/register"
                    })
                };
            var Xe = a(552691);
            const et = e => {
                    let {
                        appointment: t,
                        displaySocialSecurityCoverage: a
                    } = e;
                    const n = "doctor" === t.source ? {
                        title: P.Z.t("patient_common.root.upcoming_appointment")
                    } : {
                        title: P.Z.t(a ? "reimbursement" : "confirming", {
                            scope: "appointments.edit.step_titles"
                        }),
                        steps: {
                            current: 3,
                            total: 5
                        }
                    };
                    return (0, C.jsx)(Xe.Z, { ...n,
                        onBack: () => window.history.back()
                    })
                },
                tt = (e, t) => {
                    var a, n, l;
                    t && function(e) {
                        let {
                            id: t
                        } = e;
                        m().set(u, t, {
                            expires: p()(new Date).add(1, "hours").format()
                        })
                    }(e), r.Z.pushToCustomDataLayer({
                        profile_id: null === (a = e.profile) || void 0 === a ? void 0 : a.id,
                        profile_practice_id: null === (n = e.practice) || void 0 === n ? void 0 : n.id,
                        speciality_id: null === (l = e.profile) || void 0 === l ? void 0 : l.speciality_id,
                        appointment_id: (0, g.id)(e.id),
                        appointment_telehealth: !!e.telehealth
                    }), r.Z.sendGtmPageView(t ? i.ZP.GTM_CONTENT_GROUPS.ANONYMOUS_APPOINTMENTS_VIDEO_CONSULTATION : i.ZP.GTM_CONTENT_GROUPS.BOOKING_VIDEO_CONSULTATION_CREDIT_CARD)
                },
                at = e => {
                    let {
                        appointment: t,
                        children: a
                    } = e;
                    const n = (e => {
                        var t;
                        let {
                            appointment: a
                        } = e;
                        return !!(null === a || void 0 === a || null === (t = a.profile) || void 0 === t ? void 0 : t.medical) && !!a.telehealth.pricing
                    })({
                        appointment: t
                    });
                    return (0, C.jsxs)(s.Z, {
                        children: [(0, C.jsx)(et, {
                            appointment: t,
                            displaySocialSecurityCoverage: n
                        }), (0, C.jsx)(c.Z, {
                            children: a
                        })]
                    })
                },
                nt = e => {
                    let {
                        children: t
                    } = e;
                    return (0, C.jsx)("div", {
                        children: t
                    })
                },
                lt = e => {
                    let {
                        appointment: t,
                        anonymousMode: a,
                        fetchAppointments: r
                    } = e;
                    const i = (0, o.ZP)(),
                        s = (0, g.fH)(m().get(u), t.id),
                        c = (0, _.rl)();
                    if ((0, n.useEffect)((() => {
                            tt(t, a)
                        }), []), !t || t.canceled) return c ? (0, C.jsx)(l.Navigate, {
                        to: "/"
                    }) : (window.location.pathname = "/account/appointments", !1);
                    const d = c ? at : nt;
                    return (0, C.jsxs)(d, {
                        appointment: t,
                        children: ["doctor" === t.source && (0, C.jsx)(k, {
                            appointment: t,
                            displayCancelButton: !s,
                            telehealth: !0
                        }), (0, C.jsx)(Qe, {
                            fetchAppointments: r,
                            appointment: t,
                            creditCards: i && i.credit_cards || []
                        })]
                    })
                }
        },
        722562: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => c
            });
            var n = a(445884),
                l = (a(545763), a(592290), a(179522)),
                r = a(832906),
                i = (a(294910), a(470354)),
                o = a(785893);
            const s = e => {
                    let {
                        creditCards: t,
                        onSelectCard: a,
                        selectedCard: s
                    } = e;
                    return (0, o.jsxs)(r.Z, {
                        uiStyle: "card",
                        outline: !0,
                        scrollable: !1,
                        children: [t.map((e => {
                            const t = !!s && s.id === e.id,
                                n = `credit-card-${e.id}`;
                            return (0, o.jsxs)(l.Z, {
                                onTap: () => a(e),
                                className: "dl-credit-card-description",
                                children: [(0, o.jsx)(l.Z.RadioButton, {
                                    checked: t,
                                    readOnly: !0,
                                    id: n,
                                    className: "dl-margin-r dl-margin-t-8",
                                    name: "credit-cards-selector"
                                }), (0, o.jsx)(l.Z.Description, {
                                    className: "dl-full-width",
                                    children: (0, o.jsx)("label", {
                                        htmlFor: n,
                                        children: (0, o.jsx)(i.Z, { ...e
                                        })
                                    })
                                })]
                            }, n)
                        })), (0, o.jsxs)(l.Z, {
                            onTap: () => a(void 0),
                            children: [(0, o.jsx)(l.Z.RadioButton, {
                                checked: !s,
                                readOnly: !0,
                                className: "dl-margin-r dl-margin-t-8",
                                name: "credit-cards-selector",
                                id: "new-card"
                            }), (0, o.jsx)(l.Z.Description, {
                                className: "dl-full-width",
                                children: (0, o.jsx)("label", {
                                    htmlFor: "new-card",
                                    children: n.Z.t("patient_common.root.telehealth.payment_form.add_card")
                                })
                            })]
                        }, "new-card")]
                    })
                },
                c = s
        },
        245755: (e, t, a) => {
            "use strict";
            a.d(t, {
                BI: () => c,
                ZP: () => d
            });
            var n = a(184481),
                l = a(232558),
                r = a(990626),
                i = (a(511888), a(107925)),
                o = a(136591),
                s = a(785893);
            const c = {
                    base: {
                        color: "#435f71",
                        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                        fontSmoothing: "antialiased",
                        fontSize: "14px",
                        "::placeholder": {
                            color: "rgba(67, 95, 113, 0.7)"
                        }
                    },
                    invalid: {
                        color: "#e62638",
                        iconColor: "#e62638"
                    }
                },
                d = e => t => {
                    const [a, c] = (0, n.useState)(), d = (0, o.Z)();
                    return (0, n.useEffect)((() => {
                        (async () => {
                            window.Stripe || await (0, i.Z)("https://js.stripe.com/v3/"), d.current && c(window.Stripe(r.ZP.STRIPE_PUBLISHABLE_KEY, {
                                apiVersion: r.ZP.STRIPE_API_VERSION
                            }))
                        })()
                    }), [d]), a ? (0, s.jsx)(l.vw, {
                        apiKey: r.ZP.STRIPE_PUBLISHABLE_KEY,
                        apiVersion: r.ZP.STRIPE_API_VERSION,
                        children: (0, s.jsx)(l.eK, {
                            locale: window.locale,
                            children: (0, s.jsx)(e, { ...t
                            })
                        })
                    }) : null
                }
        },
        107925: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            const n = e => new Promise(((t, a) => {
                const n = window.document.createElement("script");
                n.type = "text/javascript", n.src = e, n.onload = t, n.onerror = a, window.document.body.appendChild(n)
            }))
        },
        934418: (e, t, a) => {
            var n = a(184481);
            const l = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("path", {
                    d: "M17.697 7.963a.188.188 0 0 1 .303.146V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5V8.113c0-.157.178-.244.303-.147.7.543 1.628 1.234 4.816 3.55.66.48 1.772 1.493 2.881 1.487 1.116.01 2.25-1.025 2.884-1.487 3.188-2.316 4.113-3.01 4.813-3.553zM10 12c-.725.013-1.769-.912-2.294-1.294-4.147-3.01-4.462-3.275-5.418-4.022A.752.752 0 0 1 2 6.094V5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v.594c0 .231-.106.45-.288.59-.956.75-1.271 1.013-5.418 4.022-.525.382-1.569 1.307-2.294 1.294z"
                }))
            }));
            l.defaultProps = {
                width: "20",
                height: "20",
                fill: "currentColor",
                viewBox: "0 0 20 20"
            }, e.exports = l, l.default = l
        },
        662020: (e, t, a) => {
            var n = a(184481);
            const l = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("g", {
                    id: "User"
                }, n.createElement("path", {
                    d: "M10 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm2.8 1a4.2 4.2 0 0 1 4.2 4.2v1.3a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-1.3A4.2 4.2 0 0 1 7.2 11h.522a5.445 5.445 0 0 0 4.556 0h.522z"
                })))
            }));
            l.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "currentColor"
            }, e.exports = l, l.default = l
        },
        408404: (e, t, a) => {
            var n = a(184481);
            const l = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, n.createElement("path", {
                    d: "M10.248 0h.05c.394-.005 2.943.006 4.989.704 2.228.76 3.148 1.737 3.148 1.737l.16 9.331s.109 2.172-2.16 3.96c-2.28 1.789-6.131 4.12-6.131 4.12s-3.852-2.331-6.132-4.12C2.16 14.154 2.008 12.278 2 11.858v-.086l.16-9.331s.927-.977 3.15-1.737C7.354.006 9.903-.005 10.297 0zm-.02 2a3.113 3.113 0 0 0-3.114 3.113v2.04h-.017C6.491 7.153 6 7.645 6 8.251v4.52c0 .606.491 1.098 1.097 1.098h6.26c.605 0 1.097-.492 1.097-1.098v-4.52c0-.606-.492-1.098-1.098-1.098h-.016v-2.04A3.113 3.113 0 0 0 10.227 2zm.517 6.67a1.166 1.166 0 0 1 0 2.088v1.197a.518.518 0 0 1-1.036 0v-1.197a1.166 1.166 0 0 1 1.036-2.089zm-.518-5.374c1.004 0 1.818.814 1.818 1.818v2.04H8.409v-2.04c0-1.004.814-1.818 1.818-1.818z",
                    fill: "currentColor"
                })))
            }));
            l.defaultProps = {
                width: "20px",
                height: "20px",
                viewBox: "0 0 20 20"
            }, e.exports = l, l.default = l
        },
        263666: (e, t, a) => {
            var n = a(184481);
            const l = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, [n.createElement("path", {
                    d: "M16.015 14.378c0-.32-.135-.496-.344-.622-.21-.12-.464-.135-.81-.135h-1.543v2.82h.675v-1.027h.72c.24 0 .39.024.478.125.12.13.104.38.104.55v.35h.66v-.555c-.002-.25-.017-.376-.108-.516a.75.75 0 0 0-.33-.234l.02-.008a.784.784 0 0 0 .48-.747zm-.87.407-.028-.002c-.09.053-.195.058-.33.058h-.81v-.63h.824c.12 0 .24 0 .33.05a.266.266 0 0 1 .15.255c0 .12-.045.215-.134.27zm5.152 1.052H19v.6h1.304c.676 0 1.05-.278 1.05-.884 0-.28-.066-.448-.187-.582-.153-.133-.392-.193-.73-.207l-.376-.015c-.104 0-.18 0-.255-.03a.212.212 0 0 1-.15-.21c0-.09.017-.166.09-.21a.495.495 0 0 1 .272-.06h1.23v-.602h-1.35c-.704 0-.958.437-.958.84 0 .9.776.855 1.407.87.104 0 .18.015.225.06.046.03.082.106.082.18 0 .077-.035.15-.08.18-.06.053-.15.07-.277.07z",
                    key: 0
                }), n.createElement("path", {
                    d: "M0 0v10.096L.81 8.22h1.75l.225.464V8.22h2.043l.45 1.02.437-1.013h6.502c.295 0 .56.057.756.236v-.23h1.787v.23c.307-.17.686-.23 1.12-.23h2.606l.24.466v-.466h1.918l.254.465v-.466h1.858v3.948H20.87l-.36-.6v.585h-2.353l-.256-.63h-.583l-.27.614h-1.213c-.48 0-.84-.104-1.08-.24v.24h-2.89v-.884c0-.12-.03-.12-.105-.135h-.105v1.036H6.067v-.48l-.21.48H4.69l-.202-.48v.465H2.235l-.256-.624H1.4l-.256.624H0V24h23.786v-7.108c-.27.135-.613.18-.973.18H21.09v-.255c-.21.165-.57.255-.914.255H14.71v-.9c0-.12-.018-.12-.12-.12h-.075v1.022h-1.8v-1.066c-.298.136-.643.15-.928.136h-.214v.915h-2.18l-.54-.617-.57.6H4.742v-3.93h3.61l.518.602.554-.6h2.412c.28 0 .74.03.942.225v-.24h2.177c.202 0 .644.045.903.225v-.24h3.265v.24c.163-.164.508-.24.803-.24h1.89v.24c.194-.15.464-.24.84-.24h1.176V0H0z",
                    key: 1
                }), n.createElement("path", {
                    d: "M21.156 14.955c.004.005.006.012.01.016.01.01.024.01.032.02l-.042-.035zm2.672-1.873h.065v.555h-.065z",
                    key: 2
                }), n.createElement("path", {
                    d: "M23.865 15.03v-.005c-.03-.025-.046-.048-.075-.07-.15-.153-.39-.215-.764-.225l-.36-.012a.881.881 0 0 1-.27-.03.212.212 0 0 1-.15-.21c0-.09.03-.16.09-.204.076-.045.15-.05.27-.05h1.223v-.588h-1.283c-.69 0-.96.437-.96.84 0 .9.78.855 1.41.87.104 0 .18.015.224.06.046.03.076.106.076.18 0 .07-.034.138-.09.18-.045.056-.136.07-.27.07h-1.288v.605h1.287c.42 0 .734-.118.9-.36h.03c.09-.134.135-.3.135-.523 0-.24-.045-.39-.135-.526zm-5.268-.822v-.583h-2.235v2.833h2.235v-.585h-1.57v-.57h1.533v-.584h-1.532v-.51M13.51 8.787h.685V11.6h-.684zm-.384.756-.007.006c0-.314-.13-.5-.34-.624-.217-.125-.47-.135-.81-.135H10.43v2.82h.674v-1.034h.72c.24 0 .39.03.487.12.122.136.107.378.107.548v.354h.677v-.553c0-.25-.016-.375-.11-.516a.79.79 0 0 0-.33-.237c.172-.07.472-.3.472-.75zm-.855.396h-.015c-.09.054-.195.056-.33.056H11.1v-.623h.825c.12 0 .24.004.33.05.09.04.15.128.15.25s-.047.22-.134.266zm3.649-.566h.632v-.6h-.644c-.464 0-.804.105-1.02.33-.286.3-.362.69-.362 1.11 0 .512.123.833.36 1.074.232.238.645.31.97.31h.78l.255-.627h1.39l.262.627h1.36v-2.11l1.272 2.11h.95l.002.002V8.786h-.684v1.963l-1.18-1.96h-1.02V11.4L18.11 8.744h-1.004l-.943 2.22h-.3c-.177 0-.362-.03-.468-.134-.125-.15-.186-.36-.186-.662 0-.285.08-.51.194-.63.133-.135.272-.165.516-.165zm1.668-.108.464 1.118v.002h-.93l.466-1.12zM2.38 10.97l.254.628H4V9.393l.972 2.205h.584l.973-2.202.015 2.202h.69v-2.81H6.118l-.807 1.904-.876-1.905H3.343v2.663L2.205 8.787h-.997L.01 11.597h.72l.26-.626h1.39zm-.688-1.705.46 1.118-.003.002h-.915l.457-1.12zm10.164 4.355H9.714l-.85.923-.825-.922H5.346v2.82H8l.855-.932.824.93h1.302v-.94h.838c.6 0 1.17-.164 1.17-.945l-.006-.003c0-.78-.598-.93-1.128-.93zM7.67 15.853l-.014-.002H6.02v-.557h1.47v-.574H6.02v-.51H7.7l.733.82-.764.824zm2.642.33-1.03-1.147 1.03-1.108v2.253zm1.553-1.258h-.885v-.717h.885c.24 0 .42.098.42.344 0 .243-.15.372-.42.372zM9.967 9.373v-.586H7.73V11.6h2.237v-.58H8.4v-.564h1.527V9.88H8.4v-.507",
                    key: 3
                })])
            }));
            l.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24",
                fill: "#2E77BC"
            }, e.exports = l, l.default = l
        },
        793916: (e, t, a) => {
            var n = a(184481);
            const l = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, n.createElement("g", {
                    transform: "translate(-28.000000, -375.000000)"
                }, n.createElement("g", {
                    transform: "translate(14.000000, 248.000000)"
                }, n.createElement("g", {
                    transform: "translate(14.000000, 127.000000)"
                }, n.createElement("g", null, [n.createElement("rect", {
                    fillRule: "nonzero",
                    width: "24",
                    height: "24",
                    key: 0
                }), n.createElement("g", {
                    transform: "translate(1.000000, 5.000000)",
                    key: 1
                }, [n.createElement("polygon", {
                    fill: "#7673C0",
                    points: "8.12226188 12.2727577 14.0158224 12.2727577 14.0158224 1.46920392 8.12226188 1.46920392",
                    key: 0
                }), n.createElement("path", {
                    d: "M8.497 6.871a6.91 6.91 0 0 1 2.572-5.402A6.623 6.623 0 0 0 6.907 0C3.187 0 .172 3.076.172 6.871c0 3.795 3.015 6.87 6.735 6.87a6.623 6.623 0 0 0 4.162-1.468A6.91 6.91 0 0 1 8.497 6.87",
                    fill: "#EB001B",
                    key: 1
                }), n.createElement("path", {
                    d: "M21.967 6.871c0 3.795-3.016 6.87-6.735 6.87a6.623 6.623 0 0 1-4.163-1.468 6.91 6.91 0 0 0 2.573-5.402 6.91 6.91 0 0 0-2.573-5.402A6.623 6.623 0 0 1 15.232 0c3.72 0 6.735 3.076 6.735 6.871",
                    fill: "#00A1DF",
                    key: 2
                })])]))))))
            }));
            l.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = l, l.default = l
        },
        169015: (e, t, a) => {
            var n = a(184481);
            const l = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, n.createElement("g", {
                    transform: "translate(-28.000000, -337.000000)"
                }, n.createElement("g", {
                    transform: "translate(14.000000, 248.000000)"
                }, n.createElement("g", {
                    transform: "translate(14.000000, 89.000000)"
                }, n.createElement("g", null, [n.createElement("rect", {
                    fillRule: "nonzero",
                    width: "24",
                    height: "24",
                    key: 0
                }), n.createElement("g", {
                    transform: "translate(1.000000, 5.000000)",
                    key: 1
                }, [n.createElement("polygon", {
                    fill: "#FF5F00",
                    points: "7.66762639 12.4075074 14.1616288 12.4075074 14.1616288 1.48523325 7.66762639 1.48523325",
                    key: 0
                }), n.createElement("path", {
                    d: "M8.338 6.946a7.01 7.01 0 0 1 2.577-5.46A6.595 6.595 0 0 0 6.745 0C3.02 0 0 3.11 0 6.946c0 3.837 3.02 6.947 6.746 6.947a6.595 6.595 0 0 0 4.169-1.486 7.01 7.01 0 0 1-2.577-5.46",
                    fill: "#EB001B",
                    key: 1
                }), n.createElement("path", {
                    d: "M21.83 6.946c0 3.837-3.021 6.947-6.746 6.947a6.595 6.595 0 0 1-4.17-1.486 7.01 7.01 0 0 0 2.577-5.46 7.01 7.01 0 0 0-2.576-5.462A6.595 6.595 0 0 1 15.084 0c3.725 0 6.745 3.11 6.745 6.946",
                    fill: "#F79E1B",
                    key: 2
                })])]))))))
            }));
            l.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = l, l.default = l
        },
        14846: (e, t, a) => {
            var n = a(184481);
            const l = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, n.createElement("g", {
                    transform: "translate(-28.000000, -299.000000)"
                }, n.createElement("g", {
                    transform: "translate(14.000000, 248.000000)"
                }, n.createElement("g", {
                    transform: "translate(14.000000, 51.000000)"
                }, n.createElement("g", null, [n.createElement("rect", {
                    fillRule: "nonzero",
                    width: "24",
                    height: "24",
                    key: 0
                }), n.createElement("g", {
                    transform: "translate(1.000000, 8.000000)",
                    fill: "#16216A",
                    key: 1
                }, [n.createElement("path", {
                    d: "M15.924.4a4.542 4.542 0 0 0-1.588-.276c-1.749 0-2.982.886-2.993 2.157-.01.939.88 1.463 1.552 1.776.689.32.922.525.918.81-.005.439-.55.639-1.06.639-.708 0-1.084-.1-1.666-.343l-.228-.103-.249 1.463c.413.182 1.178.34 1.973.348 1.861 0 3.07-.876 3.083-2.234.007-.742-.464-1.308-1.486-1.775-.62-.303-.998-.504-.996-.81 0-.272.323-.562 1.015-.562.58-.01 1 .118 1.325.25l.159.075.24-1.416",
                    key: 0
                }), n.createElement("path", {
                    d: "M20.464.244h-1.368c-.424 0-.741.117-.926.542l-2.63 5.99h1.859s.303-.805.373-.982l2.267.003c.053.228.216.979.216.979h1.643L20.464.244zM18.28 4.458c.148-.378.706-1.829.706-1.829-.01.019.146-.378.234-.624l.12.564.411 1.889h-1.47z",
                    key: 1
                }), n.createElement("path", {
                    d: "M6.245.242 4.512 4.7l-.186-.905C4.005 2.75 3 1.618 1.875 1.052l1.584 5.716 1.874-.002L8.12.242H6.245",
                    key: 2
                }), n.createElement("path", {
                    d: "M2.903.239H.047L.025.374c2.221.541 3.692 1.85 4.301 3.42L3.706.79C3.598.376 3.288.254 2.903.24",
                    key: 3
                }), n.createElement("polyline", {
                    points: "7.73090742 6.77311096 8.83769415 0.237994854 10.6092463 0.237994854 9.49985944 6.77311096 7.73090742 6.77311096",
                    key: 4
                })])]))))))
            }));
            l.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = l, l.default = l
        },
        919722: (e, t, a) => {
            var n = a(184481);
            const l = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("path", {
                    d: "M18 0c.55 0 1.02.2 1.4.6.4.38.6.85.6 1.4v10c0 .55-.2 1.02-.6 1.4-.38.4-.85.6-1.4.6H2c-.5 0-.97-.2-1.4-.6-.4-.38-.6-.85-.6-1.4V2C0 1.44.2.97.6.6A2 2 0 0 1 2 0h16zm0 12V6H2v6h16zm0-8V2H2v2h16zM3.98 8.13h.63v.6H4v-.6zM7.62 9.3h.58v-.58h.6v-.6H10v.6h-.6v.6h-.6v.6H7.6v-.6zm2.38.63h-.6V9.3h.6v.63zm-3 0H5.77V9.3h1.2v.63zm.62-1.2v.58H7V8.15h1.2v.6h-.58zM5.2 9.3v.63H3.98V9.3h.63v-.58h.6v-.6h1.2v.6h-.6v.6h-.6z"
                }))
            }));
            l.defaultProps = {
                width: "20",
                height: "14",
                viewBox: "0 0 20 14"
            }, e.exports = l, l.default = l
        },
        478983: (e, t, a) => {
            var n = a(184481);
            const l = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("path", {
                    d: "M16.44 7.03c.3 0 .65.16 1.06.46.33.3.5.6.5.9v9.2c0 .76-.4 1.3-1.2 1.56l-1.57.4a7.3 7.3 0 0 1-2.46.4h-7.5c-.93 0-1.77-.14-2.5-.4l-1.56-.4c-.8-.3-1.2-.8-1.2-1.56V8.4c0-.33.18-.65.4-.96.35-.3.65-.47.9-.47h2.6V5.4c0-1.77.45-3.1 1.3-4C6.04.5 7.3 0 9 0c1.7 0 2.98.48 3.82 1.43.87.88 1.3 2.22 1.3 4v1.6h2.32zm-10-2.1v2.1h5.12v-2.1c0-.84-.23-1.47-.7-1.9-.47-.46-1.1-.7-1.86-.7-.8 0-1.42.24-1.86.7-.47.43-.7 1.06-.7 1.9z"
                }))
            }));
            l.defaultProps = {
                width: "18",
                height: "20",
                viewBox: "0 0 18 20"
            }, e.exports = l, l.default = l
        },
        56100: (e, t, a) => {
            var n = a(184481);
            const l = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("path", {
                    d: "M20 16.76V19H0v-2.24c0-.7 1.45-1.56 4.34-2.57 1.33-.5 2.24-1 2.72-1.5.5-.5.73-1.17.73-2 0-.3-.2-.67-.5-1.05-.3-.4-.56-.9-.7-1.55-.03-.16-.1-.3-.2-.37a.66.66 0 0 0-.3-.17c-.1-.03-.2-.15-.3-.36-.1-.2-.15-.5-.18-.9 0-.22.04-.4.1-.55.08-.14.14-.22.2-.25L6 5.43c-.1-.7-.2-1.33-.24-1.86a3.4 3.4 0 0 1 .88-2.37C7.3.4 8.4 0 10 0c1.6 0 2.7.4 3.36 1.22.65.82.94 1.6.85 2.37L14 5.4c.25.1.38.4.38.88-.03.4-.1.7-.2.9-.1.23-.2.35-.3.38-.1.02-.2.07-.3.16-.1.08-.15.2-.18.38-.1.67-.33 1.2-.66 1.56-.3.38-.5.7-.5 1.02 0 .85.27 1.52.77 2 .5.5 1.4 1 2.7 1.47 2.9 1 4.35 1.85 4.35 2.55z"
                }))
            }));
            l.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20"
            }, e.exports = l, l.default = l
        },
        511888: () => {
            "use strict"
        }
    }
]);
//# sourceMappingURL=../27063-fa67078745739d37ab4d.js.map