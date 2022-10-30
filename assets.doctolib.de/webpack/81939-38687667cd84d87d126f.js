(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [81939], {
        326347: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var o = n(184481),
                i = n(571442),
                a = n.n(i),
                l = n(294184),
                r = n.n(l),
                s = (n(273614), n(445884)),
                c = n(785893);

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class p extends o.Component {
                constructor() {
                    super(...arguments), d(this, "state", {
                        clicked: !1
                    }), d(this, "onTap", (e => {
                        const {
                            validated: t,
                            onTap: n
                        } = this.props, {
                            clicked: o
                        } = this.state;
                        o || t || (this.setState({
                            clicked: !0
                        }), setTimeout((() => {
                            n(e)
                        }), 700))
                    }))
                }
                render() {
                    const {
                        clicked: e
                    } = this.state, {
                        children: t,
                        validated: n,
                        ariaDescribedby: o
                    } = this.props;
                    return (0, c.jsx)("div", {
                        onClick: this.onTap,
                        className: r()("dl-button-check-outer", {
                            "dl-button-check-outer-clicked": e,
                            "dl-button-check-animation": e || n,
                            "dl-button-check-outer-validated": n
                        }),
                        "data-design-system": "base",
                        children: (0, c.jsx)("button", {
                            type: "button",
                            className: "dl-button-check-inner",
                            tabIndex: e || n ? "-1" : void 0,
                            "aria-disabled": e || n,
                            "aria-describedby": o,
                            "aria-label": e || n ? s.Z.t("patient_common.root.profiles.booking.motive_rule.accepted_rule") : void 0,
                            children: e || n ? (0, c.jsx)("span", {
                                children: (0, c.jsx)(a(), {
                                    "aria-hidden": "true",
                                    width: 12,
                                    height: 12
                                })
                            }) : t
                        })
                    })
                }
            }
            const u = p
        },
        961783: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => r
            });
            var o = n(5212),
                i = n(795361),
                a = n(516590),
                l = n(288802);
            const r = () => {
                const {
                    createTrackingEventWithContext: e
                } = (0, i.Z)();
                return {
                    createAppointmentRulesTrackingEvent: t => {
                        let {
                            name: n,
                            details: i,
                            itemType: r,
                            itemId: s
                        } = t;
                        (0, o.rl)() ? e({
                            name: n,
                            additionalDetails: i
                        }): (r = r || l.Z.getCurrentPageType(), (0, a.ZP)({
                            name: n,
                            itemId: s,
                            itemType: r,
                            details: i
                        }, {
                            schema: "patient"
                        }))
                    }
                }
            }
        },
        975290: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => H
            });
            var o = n(184481),
                i = n(445884),
                a = n(516590),
                l = n(169339),
                r = n(827856),
                s = n.n(r),
                c = n(618446),
                d = n.n(c),
                p = n(187185),
                u = n.n(p),
                m = n(952893),
                g = n(326347),
                h = n(5212),
                b = n(795361),
                _ = n(545763),
                f = n(383915),
                v = n(968461),
                x = n(453040),
                Z = n(999722),
                y = n(630316),
                k = n(793748),
                j = n(24553),
                w = n(708221),
                C = n(785893);
            const N = e => {
                    let {
                        onHide: t,
                        show: n,
                        blockingRules: r,
                        landlineNumber: s,
                        telehealth: c,
                        newSearchParams: d,
                        profileId: p,
                        safeNavigate: u
                    } = e;
                    const {
                        createTrackingEventWithContext: m
                    } = (0, b.Z)(), g = e => {
                        m({
                            name: e,
                            additionalDetails: {
                                profile_id: p
                            }
                        })
                    };
                    if ((0, o.useEffect)((() => {
                            n && (g("new_patient_blocking_early_display"), (0, a.ck)({
                                name: "blocking_rules",
                                details: {
                                    blockingRules: r,
                                    telehealth: c
                                }
                            }))
                        }), [n]), !n) return null;
                    const k = async e => {
                        g(e), (0, a.ck)({
                            name: "close_blocking_rules_modal"
                        }), t()
                    };
                    return (0, C.jsxs)(l.Z, {
                        className: "appointment-rules-blocking-modal",
                        show: !0,
                        blocking: !0,
                        onHide: () => k("new_patient_blocking_early_closed"),
                        title: i.Z.t("predicates.blocking_modal.title"),
                        children: [(0, C.jsxs)(f.Z, {
                            children: [(0, C.jsx)("div", {
                                className: "flex dl-justify-center",
                                children: (0, C.jsx)("img", {
                                    className: "dl-width-25 dl-full-height",
                                    alt: i.Z.t("predicates.blocking_modal.icon_alt_text"),
                                    src: y
                                })
                            }), (0, C.jsx)("ul", {
                                className: "dl-padding-l-16 dl-margin-y-16 dl-text-left",
                                children: r.map((e => (0, C.jsx)("li", {
                                    className: "dl-margin-y-8",
                                    children: (0, C.jsx)(Z.Z, {
                                        component: "div",
                                        className: "dl-text-s",
                                        children: e.body
                                    })
                                }, e.body)))
                            }), !c && (0, C.jsx)(x.Z, {
                                color: "neutral-130",
                                children: s ? i.Z.t("predicates.blocking_modal.contact_with_phone_html", {
                                    landline_number: s
                                }) : i.Z.t("predicates.blocking_modal.contact_without_phone")
                            })]
                        }), (0, C.jsxs)(v.Z, {
                            className: "dl-flex-column",
                            children: [d && !(0, h.dm)() && (0, C.jsx)(_.Z, {
                                block: !0,
                                onTap: () => (async () => {
                                    g("new_patient_blocking_early_search"), u(`/${d.speciality_slug}/${d.place_slug}`, (0, h.rl)())
                                })(),
                                className: "dl-margin-b",
                                children: i.Z.t("predicates.blocking_modal.new_search_button")
                            }), (0, C.jsx)(_.Z, {
                                block: !0,
                                uiStyle: "info-link",
                                title: i.Z.t("predicates.blocking_modal.modify_appointment_button"),
                                onTap: () => k("new_patient_blocking_early_continue"),
                                children: i.Z.t("predicates.blocking_modal.modify_appointment_button")
                            })]
                        })]
                    })
                },
                R = e => {
                    const t = (0, k.Z)();
                    return (0, C.jsx)(N, { ...e,
                        safeNavigate: t
                    })
                },
                S = e => (0, C.jsx)(N, { ...e,
                    safeNavigate: e => (0, w.Z)(e)
                }),
                T = e => {
                    const t = (0, j.useInRouterContext)() ? R : S;
                    return (0, C.jsx)(t, { ...e
                    })
                };
            var O = n(755506),
                A = n(60546),
                P = n(264570),
                I = n(437124),
                z = n(961783),
                M = n(290988);
            const q = e => {
                    let {
                        body: t,
                        ariaLabel: n,
                        onAcceptOneRule: o,
                        action: i,
                        onChange: a,
                        index: l,
                        answer: r,
                        predicate: s,
                        displayOptions: c
                    } = e;
                    const d = (0, A.Z)(s);
                    return (0, C.jsx)(M.Z, {
                        compact: !0,
                        name: `blocking-rule-${l}`,
                        className: "dl-padding-16 dl-flex-grow",
                        containerClassName: "dl-margin-y-16",
                        options: d.choices,
                        value: r,
                        horizontal: !0,
                        "aria-label": n,
                        onSelect: e => {
                            a({
                                body: t,
                                action: i,
                                predicate: s,
                                answer: e,
                                choiceInfos: d,
                                display_options: c
                            }), void 0 === r && o()
                        },
                        renderOption: e => (0, C.jsx)(x.Z, {
                            className: "dl-selectable-card-title",
                            color: "neutral-130",
                            children: e.label
                        })
                    })
                },
                E = e => {
                    let {
                        body: t,
                        action: n,
                        onChange: o,
                        index: a,
                        answer: l,
                        predicate: r,
                        choiceInfos: s,
                        display_options: c,
                        onAcceptOneRule: d,
                        focusRef: p
                    } = e;
                    return (0, C.jsxs)("div", {
                        className: "dl-padding-y-16",
                        children: [(0, C.jsx)(x.Z, {
                            className: "dl-outline-none dl-focus-visible",
                            id: `blocking-rule-${a}`,
                            color: "neutral-130",
                            ref: p,
                            tabIndex: p ? "-1" : void 0,
                            children: (0, A.Z)(r, c).question
                        }), (0, C.jsx)(q, {
                            body: t,
                            ariaLabel: (0, A.Z)(r, c).question,
                            onAcceptOneRule: d,
                            action: n,
                            onChange: o,
                            index: a,
                            answer: l,
                            predicate: r,
                            choiceInfos: s,
                            displayOptions: c
                        }), void 0 !== l ? (0, C.jsx)(g.Z, {
                            validated: !0,
                            onTap: d,
                            ariaDescribedby: `blocking-rule-${a}`,
                            children: i.Z.t("patient_common.root.profiles.booking.motive_rule.accept_one_rule")
                        }) : null]
                    })
                },
                L = e => {
                    let {
                        body: t,
                        onAcceptOneRule: n,
                        index: o,
                        focusRef: a
                    } = e;
                    return (0, C.jsxs)("div", {
                        className: "dl-margin-y-16",
                        children: [(0, C.jsx)(Z.Z, {
                            className: "dl-text-s dl-outline-none dl-focus-visible",
                            withTargetLinks: !0,
                            id: `information-rule-${o}`,
                            ref: a,
                            tabIndex: a ? "-1" : void 0,
                            children: t
                        }), (0, C.jsx)("div", {
                            className: "dl-margin-t-16",
                            children: (0, C.jsx)(g.Z, {
                                onTap: n,
                                ariaDescribedby: `information-rule-${o}`,
                                children: i.Z.t("patient_common.root.profiles.booking.motive_rule.accept_one_rule")
                            })
                        })]
                    })
                },
                D = e => {
                    let {
                        appointmentRules: t,
                        blockingRules: n,
                        createTrackingEventWithContextIfOnMobile: a,
                        landlineNumber: l,
                        newSearchParams: r,
                        onAppointmentRuleChange: c,
                        onBlocked: p,
                        onHideBlockingModal: g,
                        onValid: h,
                        profileId: b,
                        showBlockingModal: Z,
                        visitMotive: y
                    } = e;
                    const k = (0, o.useRef)(),
                        j = (0, o.useRef)(),
                        w = (0, o.useRef)(),
                        [N, R] = (0, o.useState)(0);
                    (0, o.useEffect)((() => {
                        0 !== N && (j.current && j.current.focus(), k.current && w.current && w.current.scrollTo({
                            top: k.current.offsetTop,
                            behavior: "smooth"
                        }))
                    }), [N]);
                    const S = () => {
                            R((e => e + 1))
                        },
                        A = u()(t, ((e, t) => e.action === t.action && d()(e.predicate, t.predicate) && e.body === t.body)),
                        z = y.telehealth,
                        M = s().sanitize(y.name, {
                            ALLOWED_TAGS: []
                        });
                    return (0, C.jsxs)(C.Fragment, {
                        children: [(0, C.jsx)(T, {
                            telehealth: z,
                            show: Z,
                            blockingRules: n,
                            onHide: g,
                            landlineNumber: l,
                            newSearchParams: r,
                            profileId: b
                        }), (0, C.jsx)(f.Z, {
                            ref: w,
                            children: (0, C.jsxs)("div", {
                                className: "dl-text-left",
                                children: [(0, C.jsx)("div", {
                                    className: "dl-padding-y-16",
                                    children: (0, C.jsx)(x.Z, {
                                        color: "neutral-130",
                                        component: "p",
                                        children: i.Z.t("patient_common.root.profiles.booking.motive_rule.motive_html", {
                                            motive: M
                                        })
                                    })
                                }), (0, C.jsx)(O.Z, {}), (0, m.Z)(A.slice(0, N + 1).map(((e, t) => {
                                    const n = "deny_booking" === e.action ? E : L;
                                    return (0, C.jsx)("div", {
                                        ref: t === N || N === A.length && t === N - 1 ? k : void 0,
                                        children: (0, C.jsx)(n, {
                                            index: t,
                                            onChange: e => c(A.map(((n, o) => t === o ? e : n))),
                                            onAcceptOneRule: S,
                                            focusRef: t === N && t > 0 ? j : void 0,
                                            ...e
                                        })
                                    }, t)
                                })), (0, C.jsx)(O.Z, {}))]
                            })
                        }), N === A.length && (0, C.jsx)(v.Z, {
                            children: (0, C.jsx)(_.Z, {
                                block: !0,
                                className: "booking-motive-rule-button",
                                onTap: () => {
                                    const e = t.filter((e => e.action === P.Td && e.answer !== e.choiceInfos.rightChoice));
                                    a({
                                        name: "appointmentRulesPopin",
                                        details: {
                                            label: "acceptAllRules"
                                        }
                                    }), e.length ? (a({
                                        name: "appointmentRulesPopin",
                                        details: {
                                            label: `blockingMessageDisplay ${e.map((e=>e.body)).join()}`
                                        }
                                    }), I.ZP.delete("/appointments/destroy_temporary.json", {
                                        body: {
                                            deletion_source: "appointment_rule_early"
                                        }
                                    }), p(e)) : h()
                                },
                                children: i.Z.t("patient_common.root.profiles.booking.motive_rule.accept_all_rules", {
                                    count: A.length
                                })
                            })
                        })]
                    })
                },
                B = e => {
                    let {
                        onHideBlockingModal: t,
                        ...n
                    } = e;
                    const [i, a] = (0, o.useState)(), [l, r] = (0, o.useState)(!1), {
                        createAppointmentRulesTrackingEvent: s
                    } = (0, z.h)(), c = (0, o.useCallback)((() => {
                        s({
                            name: "appointmentRulesPopin",
                            details: {
                                label: "blockingMessageClose"
                            }
                        }), null === t || void 0 === t || t(), r(!1)
                    }), [s, t, r]), d = (0, o.useCallback)((e => {
                        a(e), r((null === e || void 0 === e ? void 0 : e.length) > 0)
                    }));
                    return (0, C.jsx)(D, { ...n,
                        blockingRules: i,
                        onBlocked: d,
                        onHideBlockingModal: c,
                        showBlockingModal: l,
                        createTrackingEventWithContextIfOnMobile: s
                    })
                },
                H = e => {
                    let {
                        size: t,
                        show: n,
                        backdrop: r,
                        onHide: s,
                        appointmentRules: c,
                        onAppointmentRuleChange: d,
                        visitMotive: p,
                        landlineNumber: u,
                        onValid: m,
                        onHideBlockingModal: g,
                        newSearchParams: h,
                        profileId: b
                    } = e;
                    const {
                        createAppointmentRulesTrackingEvent: _
                    } = (0, z.h)();
                    (0, o.useEffect)((() => {
                        n && _({
                            name: "display_appointment_rules",
                            details: {
                                profile_id: b
                            }
                        })
                    }), [n]);
                    return (0, C.jsx)(l.Z, {
                        className: "js-appointment-rules-dialog",
                        size: t,
                        show: n,
                        title: i.Z.t("patient_common.root.profiles.booking.motive_rule.subtitle"),
                        onHide: () => {
                            _({
                                name: "appointmentRulesPopin",
                                details: {
                                    label: "close"
                                }
                            }), (0, a.ZP)({
                                name: "close_appointment_rules_modal"
                            }, {
                                schema: "patient"
                            }), s()
                        },
                        backdrop: r,
                        children: (0, C.jsx)(B, {
                            appointmentRules: c,
                            onAppointmentRuleChange: d,
                            visitMotive: p,
                            landlineNumber: u,
                            onValid: m,
                            onHideBlockingModal: g,
                            newSearchParams: h,
                            profileId: b
                        })
                    })
                }
        },
        60546: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var o = n(445884);
            const i = (e, t) => o.Z.t(`common.age.${t}`, {
                    count: e
                }),
                a = e => {
                    let {
                        from_organization_profile: t
                    } = e;
                    return t ? o.Z.t("predicates.question.new_patient_medical_center_alt") : o.Z.t("predicates.question.new_patient")
                },
                l = function(e) {
                    let [t, n] = e, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const r = n || {};
                    switch (t) {
                        case "new_patient":
                            return {
                                question: a(l),
                                choices: [{
                                    label: o.Z.t("common.yes"),
                                    value: !0
                                }, {
                                    label: o.Z.t("common.no"),
                                    value: !1
                                }],
                                rightChoice: !0
                            };
                        case "ratp_employee":
                            return {
                                question: o.Z.t("predicates.question.ratp_employee"),
                                choices: [{
                                    label: o.Z.t("common.yes"),
                                    value: !0
                                }, {
                                    label: o.Z.t("common.no"),
                                    value: !1
                                }],
                                rightChoice: !0
                            };
                        case "patient_age":
                            return {
                                question: o.Z.t("predicates.question.patient_age"),
                                choices: [{
                                    label: o.Z.t("predicates.responses_age.lt", {
                                        age: i(r.age, r.unit)
                                    }),
                                    value: !0
                                }, {
                                    label: o.Z.t("predicates.responses_age.gt", {
                                        age: i(r.age, r.unit)
                                    }),
                                    value: !1
                                }],
                                rightChoice: "gt" === r.operator
                            };
                        case "required_field":
                            return {
                                question: o.Z.t(`predicates.question.required_field.${r.attribute_name}`),
                                choices: [{
                                    label: o.Z.t("common.yes"),
                                    value: !0
                                }, {
                                    label: o.Z.t("common.no"),
                                    value: !1
                                }],
                                rightChoice: !0
                            };
                        default:
                            return null
                    }
                }
        },
        241469: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var o = n(445884),
                i = n(545763),
                a = n(169339),
                l = n(383915),
                r = n(968461),
                s = n(785893);
            const c = e => {
                let {
                    backdrop: t = !1,
                    error: n,
                    onHide: c,
                    show: d
                } = e, p = o.Z.t("patient_common.root.profiles.booking.availabilities.unavailable_slot_error_title"), u = o.Z.t("patient_common.root.profiles.booking.availabilities.unknown_error");
                return "external_availability_service_error" === n && (p = o.Z.t("patient_common.root.profiles.booking.availabilities.external_availability_service_error_title"), u = o.Z.t("patient_common.root.profiles.booking.availabilities.external_availability_service_error")), "unavailable_slot" === n && (p = o.Z.t("patient_common.root.profiles.booking.availabilities.unavailable_slot_error_title"), u = o.Z.t("patient_common.root.profiles.booking.availabilities.unavailable_slot_error")), (0, s.jsxs)(a.Z, {
                    blocking: !0,
                    show: d,
                    backdrop: t,
                    title: p,
                    size: "small",
                    children: [(0, s.jsx)(l.Z, {
                        children: u
                    }), (0, s.jsx)(r.Z, {
                        children: (0, s.jsx)(i.Z, {
                            onTap: c,
                            children: o.Z.t("common.actions.continue")
                        })
                    })]
                })
            }
        },
        681650: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var o = n(184481),
                i = n(445884),
                a = n(855874),
                l = n(258637),
                r = n(597043),
                s = n(785893);

            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const d = {
                    lt: i.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.operator.compare.lt"),
                    gt: i.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.operator.compare.gt")
                },
                p = {
                    years: i.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.unit.age.year"),
                    months: i.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.unit.age.month")
                },
                u = e => {
                    let {
                        onChange: t,
                        value: n
                    } = e;
                    return (0, s.jsx)(a.Z, {
                        options: d,
                        onChange: t,
                        value: n
                    })
                };
            class m extends o.Component {
                constructor() {
                    super(...arguments), c(this, "onChange", (e => {
                        this.props.onChange(e.target.value ? Number.parseInt(e.target.value, 10) : "")
                    }))
                }
                render() {
                    const {
                        value: e
                    } = this.props;
                    return (0, s.jsx)(l.Z, {
                        className: "dc-appointment-rules-predicate-age-value",
                        onChange: this.onChange,
                        value: String(e)
                    })
                }
            }
            const g = e => {
                let {
                    onChange: t,
                    value: n
                } = e;
                return (0, s.jsx)(a.Z, {
                    className: "dc-appointment-rules-predicate-age-operator",
                    options: p,
                    onChange: t,
                    value: n
                })
            };
            class h extends o.Component {
                constructor() {
                    super(...arguments), c(this, "onOperatorChange", (e => {
                        const {
                            age: t,
                            unit: n,
                            onChange: o
                        } = { ...this.props,
                            ...this.props.value
                        };
                        o({
                            operator: e,
                            age: t,
                            unit: n
                        })
                    })), c(this, "onAgeChange", (e => {
                        const {
                            operator: t,
                            unit: n,
                            onChange: o
                        } = { ...this.props,
                            ...this.props.value
                        };
                        o({
                            operator: t,
                            age: e,
                            unit: n
                        })
                    })), c(this, "onUnitChange", (e => {
                        const {
                            age: t,
                            operator: n,
                            onChange: o
                        } = { ...this.props,
                            ...this.props.value
                        };
                        o({
                            operator: n,
                            age: t,
                            unit: e
                        })
                    }))
                }
                render() {
                    const {
                        operator: e,
                        age: t,
                        unit: n
                    } = { ...this.props,
                        ...this.props.value
                    };
                    return (0, s.jsxs)(r.Z, {
                        className: "dc-appointment-rules-predicate-age",
                        container: !0,
                        children: [(0, s.jsx)(r.Z, {
                            item: !0,
                            xsSize: 5,
                            children: (0, s.jsx)(u, {
                                onChange: this.onOperatorChange,
                                value: e
                            })
                        }), (0, s.jsx)(r.Z, {
                            item: !0,
                            xsSize: 2,
                            children: (0, s.jsx)(m, {
                                onChange: this.onAgeChange,
                                value: t
                            })
                        }), (0, s.jsx)(r.Z, {
                            item: !0,
                            xsSize: 5,
                            children: (0, s.jsx)(g, {
                                onChange: this.onUnitChange,
                                value: n
                            })
                        })]
                    })
                }
            }
            const b = h
        },
        296147: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => i
            });
            n(855874);
            var o = n(445884);
            n(785893);
            const i = [{
                label: o.Z.t("common.yes"),
                value: !0
            }, {
                label: o.Z.t("common.no"),
                value: !1
            }]
        },
        856405: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => a
            });
            n(855874);
            var o = n(445884);
            n(275708), n(785893);
            const i = "api.accounts.index.root.configuration.appointment_rules.form.template_answer",
                a = [{
                    label: o.Z.t("no_earlier", {
                        scope: i
                    }),
                    value: "lt"
                }, {
                    label: o.Z.t("no_later", {
                        scope: i
                    }),
                    value: "gt"
                }, {
                    label: o.Z.t("between", {
                        scope: i
                    }),
                    value: "bt"
                }]
        },
        275708: (e, t, n) => {
            "use strict";
            n(184481), n(785893)
        },
        226193: (e, t, n) => {
            "use strict";
            n.d(t, {
                JY: () => a,
                jj: () => l
            });
            n(855874);
            var o = n(445884);
            n(275708), n(785893);
            const i = "api.accounts.index.root.configuration.appointment_rules.form.template_answer",
                a = [{
                    label: o.Z.t("greater", {
                        scope: i
                    }),
                    value: "gt"
                }, {
                    label: o.Z.t("lesser", {
                        scope: i
                    }),
                    value: "lt"
                }],
                l = {
                    years: o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.unit.age.year"),
                    months: o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.unit.age.month")
                }
        },
        487300: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => a
            });
            n(855874);
            var o = n(445884);
            n(275708), n(785893);
            const i = "api.accounts.index.root.configuration.appointment_rules.form.template_answer",
                a = [{
                    label: o.Z.t("equal", {
                        scope: i
                    }),
                    value: "eq"
                }, {
                    label: o.Z.t("greater", {
                        scope: i
                    }),
                    value: "gt"
                }, {
                    label: o.Z.t("lesser", {
                        scope: i
                    }),
                    value: "lt"
                }, {
                    label: o.Z.t("between", {
                        scope: i
                    }),
                    value: "bt"
                }]
        },
        264570: (e, t, n) => {
            "use strict";
            n.d(t, {
                Td: () => c
            });
            var o = n(445884),
                i = n(681650),
                a = n(296147),
                l = n(856405),
                r = n(487300),
                s = n(226193);
            const c = "deny_booking",
                d = "patient_age",
                p = (a.J[0].value, l.J[0].value, l.J[0].value, r.J[0].value, r.J[0].value, s.JY[0].value, Object.keys(s.jj)[0], {
                    required_field: {
                        defaultOptions: {
                            attribute_name: "referrer_id"
                        },
                        label: o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.type.referrer"),
                        description: o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.description.referrer"),
                        countries: ["fr", "de"]
                    },
                    patient_age: {
                        defaultOptions: {
                            age: 18,
                            operator: "gt",
                            unit: "years"
                        },
                        label: o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.type.age"),
                        optionsComponent: i.Z,
                        countries: ["fr", "de", "it"]
                    },
                    booking_frequency: {
                        label: o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.type.booking_frequency"),
                        countries: ["de"]
                    },
                    new_patient: {
                        defaultOptions: {
                            type: "patient_base"
                        },
                        label: o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.type.new_patient"),
                        description: o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.description.new_patient"),
                        countries: ["fr", "de", "it"]
                    },
                    ratp_employee: {
                        defaultOptions: {
                            type: "patient_base"
                        },
                        label: o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.type.ratp_employee"),
                        description: o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.description.ratp_employee"),
                        countries: ["fr"]
                    }
                }),
                u = (o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.type.age"), o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.description.patient_age"), o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.type.new_patient"), o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.description.new_patient"), o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.type.booking_frequency"), o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.description.booking_frequency"), o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.type.referrer"), o.Z.t("api.accounts.index.root.configuration.appointment_rules.predicate.description.referrer"), "required_field");
            p.required_field.defaultOptions
        },
        101636: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var o = n(5212);
            const i = ["places", "geometry"],
                a = () => ({
                    googleMapsApiKey: "AIzaSyDpnSscoubUpsnOs48Kt1x5LhAXPSr4gU4",
                    libraries: i,
                    channel: (0, o.rl)() ? "mobile" : "desktop",
                    language: window.country,
                    authReferrerPolicy: "origin"
                })
        },
        851747: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var o = n(337054),
                i = n(786269),
                a = n(84488),
                l = n(137309),
                r = n(264610),
                s = n(978232),
                c = n(534537),
                d = n(754207),
                p = n(675587),
                u = n(213228),
                m = n(123574),
                g = n(785893);
            const h = {
                    small: {
                        width: 36,
                        height: 48
                    },
                    medium: {
                        width: 40,
                        height: 48
                    },
                    large: {
                        width: 60,
                        height: 80
                    }
                },
                b = {
                    yellow: i,
                    blue: a,
                    "neutral-070": r,
                    "neutral-150": l,
                    "selected-primary-110": s,
                    "solid-neutral-150": p,
                    "solid-selected-primary-110": u,
                    "purple-100": c,
                    "warning-090": d,
                    "solid-primary-110": m
                },
                _ = {
                    small: 40,
                    medium: 24,
                    large: 64
                },
                f = e => {
                    let {
                        position: t,
                        label: n,
                        color: i,
                        size: a,
                        foreground: l,
                        ...r
                    } = e;
                    if ("object" !== typeof google) return null;
                    const s = h[a],
                        c = _[a],
                        d = {
                            url: b[i],
                            anchor: new google.maps.Point(s.width / 2, c),
                            labelOrigin: new google.maps.Point(s.width / 2, 20),
                            size: new google.maps.Size(s.width, s.height),
                            scaledSize: new google.maps.Size(s.width, s.height)
                        };
                    return (0, g.jsx)(o.Jx, {
                        position: t,
                        icon: d,
                        label: n,
                        zIndex: l ? 1 : 0,
                        ...r
                    })
                };
            f.defaultProps = {
                color: "yellow",
                size: "medium"
            };
            const v = f
        },
        686569: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d,
                v: () => s
            });
            var o = n(184481),
                i = n(337054),
                a = n(101636),
                l = n(990626),
                r = n(785893);
            const s = {
                    draggable: !1,
                    disableDefaultUI: !0,
                    disableDoubleClickZoom: !0,
                    mapTypeControl: !1,
                    mapId: l.ZP.GOOGLE_MAP_ID
                },
                c = e => {
                    let {
                        children: t,
                        options: n,
                        onMapMount: l,
                        onZoomChanged: s,
                        ...c
                    } = e;
                    const d = (0, o.useRef)(),
                        p = (0, o.useRef)(),
                        {
                            isLoaded: u
                        } = (0, i.Db)((0, a.Z)());
                    return u ? (0, r.jsx)(i.b6, {
                        mapContainerClassName: "dl-full-width dl-full-height dl-position-absolute dl-border-radius-inherit",
                        onLoad: e => {
                            d.current = e, l && l(e)
                        },
                        onZoomChanged: () => {
                            var e;
                            const t = null === (e = d.current) || void 0 === e ? void 0 : e.getZoom(),
                                n = p.current !== t,
                                o = void 0 === p.current;
                            n && (p.current = t, s && !o && s())
                        },
                        zoom: 15,
                        options: n,
                        ...c,
                        children: t
                    }) : null
                };
            c.defaultProps = {
                options: s
            };
            const d = c
        },
        362956: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var o = n(294184),
                i = n.n(o),
                a = n(445884),
                l = n(528846),
                r = n(453040),
                s = n(545763),
                c = n(642979),
                d = n(569100),
                p = (n(799351), n(785893));
            const u = e => {
                let {
                    onAccept: t,
                    smallSize: n = !1
                } = e;
                return (0, p.jsxs)("div", {
                    className: i()("google-maps-consent", "dl-full-height", "dl-flex-center dl-flex-column", "dl-border-radius-inherit", "dl-padding-" + (n ? "32" : "40")),
                    children: [(0, p.jsx)(l.Z, {
                        className: i()("dl-align-self-center illustration", {
                            "illustration-small": n
                        }),
                        src: d,
                        alt: ""
                    }), (0, p.jsxs)("div", {
                        className: "dl-margin-t-16 dl-flex-center dl-flex-column",
                        children: [(0, p.jsx)(r.Z, {
                            align: "center",
                            uiStyle: "body-s-regular",
                            color: "neutral-130",
                            children: a.Z.t("legals.google_maps_consent")
                        }), (0, p.jsx)(c.Z, {
                            href: a.Z.t("legals.google_maps_consent_learn_more_link"),
                            target: "_blank",
                            className: "dl-underlined",
                            children: (0, p.jsx)(r.Z, {
                                align: "center",
                                uiStyle: "body-s-regular",
                                colorInherit: !0,
                                children: a.Z.t("legals.google_maps_consent_learn_more")
                            })
                        })]
                    }), (0, p.jsx)("div", {
                        className: "dl-margin-t-16",
                        children: (0, p.jsx)(s.Z, {
                            className: "dl-padding-t-8 dl-padding-b-8 dl-padding-r-16 dl-padding-l-16",
                            onClick: t,
                            children: a.Z.t("legals.show_google_maps")
                        })
                    })]
                })
            }
        },
        743977: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var o = n(184481),
                i = n(294184),
                a = n.n(i),
                l = n(5212),
                r = n(990626),
                s = (n(63180), n(362956)),
                c = n(337209),
                d = n(785893);
            const p = e => {
                let {
                    children: t,
                    show: n = !0,
                    className: i,
                    smallSize: p = !1,
                    trackConsentAccepted: u
                } = e;
                const {
                    hasMapConsent: m,
                    onAcceptMapConsent: g,
                    trackedFeatureType: h
                } = (0, o.useContext)(c.ZP), [b, _] = (0, o.useState)(!(0, l._y)() && !m), f = "test" === (0, l.zj)() && !r.ZP.ALLOW_GOOGLE_MAPS_LOAD_IN_TESTS_ENABLED, v = a()("map-container", "dl-border-radius-inherit", i), x = (0, o.useMemo)((() => (0, d.jsx)("div", {
                    className: a()(v, "snapshot-black")
                })), [i]);
                return b ? (0, d.jsx)("div", {
                    className: v,
                    children: (0, d.jsx)(s.Z, {
                        smallSize: p,
                        onAccept: () => {
                            u({
                                type: h
                            }), _(!1), g()
                        }
                    })
                }) : !n || b && !m || f ? x : (0, d.jsx)("div", {
                    className: a()(v, "snapshot-black"),
                    children: t
                })
            }
        },
        793748: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var o = n(184481),
                i = n(996974),
                a = n(708221);
            const l = () => {
                const e = (0, i.s0)();
                return (0, o.useCallback)((function(t) {
                    let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    n ? setTimeout((() => e(t))) : (0, a.Z)(t)
                }), [e])
            }
        },
        571442: (e, t, n) => {
            var o = n(184481);
            const i = o.forwardRef((function(e, t) {
                return o.createElement("svg", { ...e,
                    ref: t
                }, o.createElement("path", {
                    d: "M19.23 1.37a1.65 1.65 0 0 0-1.37-.34 1.98 1.98 0 0 0-1.23.77L7.97 14.46 3.2 9.31c-.35-.42-.79-.63-1.3-.63s-.96.18-1.34.53a2.1 2.1 0 0 0-.56 1.4 1.9 1.9 0 0 0 .5 1.4c3.85 4.3 6.05 6.65 6.6 7.07.45.32.92.44 1.42.36.5-.08.89-.34 1.18-.8l9.96-14.53c.29-.41.4-.9.31-1.44a1.93 1.93 0 0 0-.74-1.3z"
                }))
            }));
            i.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20"
            }, e.exports = i, i.default = i
        },
        273614: () => {
            "use strict"
        },
        799351: () => {
            "use strict"
        },
        63180: () => {
            "use strict"
        },
        569100: (e, t, n) => {
            "use strict";
            e.exports = n.p + "fb74a24b4f36f02dc6fb.png"
        },
        754207: (e, t, n) => {
            "use strict";
            e.exports = n.p + "87f9267acf50efa3a611.svg"
        },
        137309: (e, t, n) => {
            "use strict";
            e.exports = n.p + "ea1d3a2dc46d8dd80760.svg"
        },
        264610: (e, t, n) => {
            "use strict";
            e.exports = n.p + "6e4c06e9067a8df9d7f8.svg"
        },
        534537: (e, t, n) => {
            "use strict";
            e.exports = n.p + "f3294163bde498ac0575.svg"
        },
        978232: (e, t, n) => {
            "use strict";
            e.exports = n.p + "917115ca2812af875a66.svg"
        },
        675587: (e, t, n) => {
            "use strict";
            e.exports = n.p + "ea6d1500bc7d4cf2c50c.svg"
        },
        213228: (e, t, n) => {
            "use strict";
            e.exports = n.p + "2407983e7cbb048ff5f3.svg"
        },
        84488: (e, t, n) => {
            "use strict";
            e.exports = n.p + "e3fcea93180f75ad77ff.png"
        },
        123574: (e, t, n) => {
            "use strict";
            e.exports = n.p + "f4d42eee872f90dbcd7a.svg"
        },
        786269: (e, t, n) => {
            "use strict";
            e.exports = n.p + "d3cd32f43b50fb22d2f7.png"
        }
    }
]);
//# sourceMappingURL=81939-38687667cd84d87d126f.js.map