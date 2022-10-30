"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [80908], {
        580509: (e, t, i) => {
            i.d(t, {
                Z: () => d
            });
            var n = i(184481),
                o = i(931441),
                a = i(5212),
                c = i(917059),
                s = i(785893);
            const l = e => e.replace(/[^0-9+]+/g, "");
            class r extends n.PureComponent {
                constructor() {
                    var e, t, i;
                    super(...arguments), i = e => {
                        let {
                            target: {
                                value: t
                            }
                        } = e;
                        this.props.onChange && this.props.onChange(l(t))
                    }, (t = "onChange") in (e = this) ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                }
                render() {
                    let e = this.props.value;
                    const {
                        forwardedRef: t,
                        ...i
                    } = this.props;
                    return "string" === typeof e && (e = (0, o.Z)((0, a.rZ)(), l(e)).trim()), (0, s.jsx)(c.Z, { ...i,
                        ref: t,
                        value: e,
                        onChange: this.onChange,
                        type: "tel",
                        "data-design-system": "base"
                    })
                }
            }
            const d = (0, n.forwardRef)(((e, t) => (0, s.jsx)(r, { ...e,
                forwardedRef: t
            })))
        },
        290423: (e, t, i) => {
            i.d(t, {
                Z: () => l
            });
            var n = i(511466),
                o = i(169339),
                a = i(710270),
                c = i(230999),
                s = i(785893);
            const l = e => {
                let {
                    hideModal: t,
                    onSubmitParams: i,
                    onChangeNumber: l,
                    onSuccess: r,
                    title: d,
                    onFailure: m
                } = e;
                const {
                    loading: u,
                    data: _
                } = (0, a.Z)({
                    url: "/account/sms_validation.json"
                });
                return (0, s.jsx)(o.Z, {
                    show: !0,
                    onHide: t,
                    title: d,
                    children: u ? (0, s.jsx)(n.Z, {}) : (0, s.jsx)(c.Z, {
                        isMobile: _.is_mobile_number,
                        phoneNumber: _.phone_number,
                        captchaRequired: _.captcha_required,
                        onChangeNumber: l,
                        onSubmitParams: i,
                        onSuccess: r,
                        onFailure: m,
                        withinModal: !0
                    })
                })
            }
        },
        433307: (e, t, i) => {
            i.d(t, {
                Z: () => H
            });
            var n = i(184481),
                o = i(5212),
                a = i(516590),
                c = i(445884),
                s = i(923663),
                l = i(800274),
                r = i(710270),
                d = i(580163),
                m = i(179522),
                u = i(453040),
                _ = i(545763),
                h = i(169339),
                p = i(383915),
                Z = i(968461),
                f = i(528846),
                x = i(580509),
                g = i(77058),
                j = i(935300),
                v = i(462814),
                y = i(983923),
                b = i(437124),
                w = i(366699),
                k = i(990626),
                S = i(261397),
                N = i(649497),
                P = i(785893);
            const C = e => {
                let {
                    onSuccess: t
                } = e;
                const i = (0, d.ZP)(),
                    o = (0, l.ZP)(),
                    {
                        updatePassphraseVerificationMethod: s
                    } = (0, n.useContext)(S.WA),
                    [r, m] = (0, n.useState)(!1),
                    u = async e => {
                        var n;
                        m(!1), null !== (n = o.tanker_identity) && void 0 !== n && n.passphrase_registered_at && await s({
                            account: o,
                            currentPassword: e.current_password,
                            newPassword: e.new_password,
                            trackingOrigin: "password_form"
                        }), i({
                            message: c.Z.t("accounts.edit.change_password.success"),
                            uiStyle: "success"
                        }), (0, a.ZP)({
                            name: "password_modification_confirmed",
                            details: {
                                success: !0
                            }
                        }), t()
                    },
                    h = e => {
                        const t = (null === e || void 0 === e ? void 0 : e.message) || c.Z.t("common.error");
                        m(!1), i({
                            message: t,
                            uiStyle: "warning"
                        }), (0, a.ZP)({
                            name: "password_modification_confirmed",
                            details: {
                                success: !1,
                                error_message: t
                            }
                        })
                    },
                    p = e => b.ZP.put("/api/accounts/change_password.json", {
                        body: e
                    }),
                    Z = e => async t => {
                        if (m(!0), (0, a.ZP)({
                                name: "password_modification_sent",
                                details: {
                                    kind: e ? "hash" : "password",
                                    account_kind: "patient"
                                }
                            }), e) {
                            const e = await (0, j.prehashPassword)(t.current_password),
                                i = await (0, j.prehashPassword)(t.new_password);
                            p({
                                current_hash: e,
                                new_hash: i
                            }).then((() => u(t))).catch((e => {
                                var i;
                                let {
                                    response: n
                                } = e;
                                (null === n || void 0 === n || null === (i = n.bodyData) || void 0 === i ? void 0 : i.message) === N.Z.WrongPasswordFormat ? Z(!1)(t) : h(null === n || void 0 === n ? void 0 : n.bodyData)
                            }))
                        } else p(t).then((() => u(t))).catch((e => {
                            let {
                                response: t
                            } = e;
                            h(null === t || void 0 === t ? void 0 : t.bodyData)
                        }))
                    };
                return (0, P.jsx)(v.Z, {
                    onSubmit: Z(k.ZP.SEND_CLIENT_SIDE_PWD_HASH_ENABLED),
                    horizontal: !1,
                    requiredIndicators: !1,
                    validityIndicators: !1,
                    children: e => (0, P.jsxs)(P.Fragment, {
                        children: [(0, P.jsx)(w.Z, {
                            type: "password",
                            field: "current_password",
                            placeholder: null,
                            required: !0,
                            label: c.Z.t("patient_mobile.root.account.edit.password.current_password.label")
                        }), (0, P.jsx)(y.Z, {
                            field: "new_password",
                            placeholder: null,
                            required: !0,
                            label: c.Z.t("patient_mobile.root.account.edit.password.new_password.label")
                        }), (0, P.jsx)(_.Z, {
                            type: "submit",
                            disabled: r || !!e.errors,
                            block: !0,
                            children: r ? c.Z.t("common.states.saving") : c.Z.t("common.actions.save")
                        })]
                    })
                })
            };
            var D = i(290423),
                T = i(258637),
                E = i(584619),
                F = i(159162);
            const I = e => {
                let {
                    onSuccess: t,
                    show: i,
                    onHide: o
                } = e;
                const s = (0, l.ZP)(),
                    [d, m] = (0, n.useState)(s.email),
                    [u, f] = (0, n.useState)(null),
                    [x, g] = (0, n.useState)(null),
                    [j, v] = (0, n.useState)(!1),
                    [y, b] = (0, n.useState)(0),
                    {
                        updatePreverifiedEmailVerificationMethod: w
                    } = (0, n.useContext)(S.WA),
                    {
                        saveAccount: k,
                        loading: N
                    } = (0, r.Z)({
                        url: "/account.json",
                        method: "PUT",
                        trigger: "saveAccount",
                        onSuccess: async e => {
                            let {
                                data: i
                            } = e;
                            await w({
                                account: s,
                                email: i.email,
                                trackingOrigin: "email_edit_modal"
                            }), t({
                                data: i
                            }), f(null), v(!1)
                        },
                        onFailure: e => {
                            let {
                                data: t
                            } = e;
                            const i = t && t[0] || (null === t || void 0 === t ? void 0 : t.captcha_required) && c.Z.t("common.captcha_required") || c.Z.t("common.error");
                            f(i), (0, a.ZP)({
                                name: "email_modification_confirmed",
                                details: {
                                    success: !1,
                                    error_message: i,
                                    email: s.email_verified_at ? "verified" : "unverified"
                                }
                            }), v(null === t || void 0 === t ? void 0 : t.captcha_required), b(y + 1)
                        }
                    }),
                    C = (0, n.useCallback)((() => {
                        d === s.email ? f(c.Z.t("patient_common.root.unified_account.connection_section.edit_email.error_same_email")) : (0, E.Z)(d) ? (k({ ...j && {
                                [F.nY]: x
                            },
                            email: d
                        }), g(null)) : f(c.Z.t("patient_common.root.unified_account.connection_section.edit_email.error_bad_email"))
                    }));
                return (0, P.jsxs)(h.Z, {
                    onHide: o,
                    show: i,
                    size: "small",
                    title: c.Z.t("patient_common.root.unified_account.connection_section.edit_email.title"),
                    children: [(0, P.jsxs)(p.Z, {
                        alignText: "left",
                        children: [(0, P.jsx)(T.Z, {
                            label: c.Z.t("patient_common.root.unified_account.connection_section.edit_email.new_email_label"),
                            name: "email",
                            type: "email",
                            autoFocus: !0,
                            value: d,
                            onChange: e => m(e.target.value),
                            validationState: u ? "error" : void 0,
                            message: u
                        }), j && (0, P.jsx)(F.ZP, {
                            nonce: y,
                            onIAmHuman: e => {
                                f(null), g(e)
                            }
                        })]
                    }), (0, P.jsx)(Z.Z, {
                        children: (0, P.jsx)(_.Z, {
                            disabled: N || j && !x,
                            onClick: C,
                            children: c.Z.t("common.actions.save")
                        })
                    })]
                })
            };
            var z = i(86310);
            const A = i.p + "a840135e770b9146007c.png",
                $ = e => {
                    let {
                        account: t,
                        trackingDetails: i
                    } = e;
                    const [g, j] = (0, n.useState)(!1), [v, y] = (0, n.useState)(!1), [b, w] = (0, n.useState)(!1), [k, S] = (0, n.useState)(t.phone_number), [N, C] = (0, n.useState)(null), {
                        fetchAccount: T
                    } = (0, l.dv)(), E = (0, d.ZP)(), F = (0, o.Zz)(), I = "patient_common.root.unified_account.connection_section", A = t.phone_number ? t.verified_at ? "verified" : "not_verified" : "missing", {
                        submitEditPhone: $
                    } = (0, r.Z)({
                        url: "/account.json",
                        method: "put",
                        trigger: "submitEditPhone",
                        onSuccess: async e => {
                            let {
                                data: {
                                    verified_at: t
                                }
                            } = e;
                            await T(), C(null), (0, a.ZP)({
                                name: "phone_modification_confirmed",
                                details: {
                                    success: !0,
                                    phone_number: t ? "verified" : "unverified"
                                }
                            }), y(!0), w(!1), S((0, s.un)(k))
                        },
                        onFailure: e => {
                            let {
                                data: i
                            } = e;
                            const n = i && i[0] || c.Z.t("common.error");
                            C(n), (0, a.ZP)({
                                name: "phone_modification_confirmed",
                                details: {
                                    success: !1,
                                    error_message: n,
                                    phone_number: t.verified_at ? "verified" : "unverified"
                                }
                            })
                        }
                    }), H = () => {
                        S((0, s.un)(t.phone_number)), C(null), w(!1)
                    };
                    return (0, P.jsxs)(P.Fragment, {
                        children: [(0, P.jsxs)(h.Z, {
                            onHide: H,
                            show: b,
                            title: c.Z.t("edit_phone.title", {
                                scope: I
                            }),
                            size: "small",
                            restoreFocus: !1,
                            children: [(0, P.jsxs)(p.Z, {
                                className: "dl-text-left",
                                children: [F && (0, P.jsx)(u.Z, {
                                    uiStyle: "body-s-bold",
                                    className: "dl-padding-y-4",
                                    children: c.Z.t("edit_phone.new_phone", {
                                        scope: I
                                    })
                                }), (0, P.jsx)(x.Z, {
                                    field: "phone_number",
                                    name: "phone_number",
                                    type: "tel",
                                    autoFocus: !0,
                                    value: k,
                                    onChange: S,
                                    placeholder: c.Z.t("edit_phone.placeholder", {
                                        scope: I
                                    }),
                                    validationState: N ? "error" : null
                                }), N && (0, P.jsx)(u.Z, {
                                    uiStyle: "body-xs-regular",
                                    color: "error-090",
                                    children: N
                                })]
                            }), (0, P.jsxs)(Z.Z, {
                                children: [F && (0, P.jsx)(_.Z, {
                                    className: "dl-margin-r",
                                    uiStyle: "tertiary-neutral",
                                    onClick: H,
                                    children: c.Z.t("common.actions.cancel")
                                }), (0, P.jsx)(_.Z, {
                                    onClick: () => {
                                        (0, s.un)(k) === (0, s.un)(t.phone_number) ? C(c.Z.t("edit_phone.error_same_phone_number", {
                                            scope: I
                                        })): $({
                                            account: {
                                                phone_number: (0, s.un)(k)
                                            },
                                            from_account_page: !0
                                        })
                                    },
                                    children: c.Z.t("edit_phone.submit", {
                                        scope: I
                                    })
                                })]
                            })]
                        }), (0, P.jsxs)(h.Z, {
                            onHide: () => j(!1),
                            show: g,
                            title: c.Z.t("verify_phone.title", {
                                scope: I
                            }),
                            size: "small",
                            restoreFocus: !1,
                            children: [(0, P.jsxs)(p.Z, {
                                alignText: "center",
                                children: [(0, P.jsx)(f.Z, {
                                    src: z,
                                    alt: "",
                                    height: "120"
                                }), (0, P.jsx)(u.Z, {
                                    block: !0,
                                    className: "dl-padding-y-16 dl-padding-x-32",
                                    children: c.Z.t("verify_phone.description", {
                                        scope: I
                                    })
                                }), (0, P.jsx)(_.Z, {
                                    uiStyle: "link-primary",
                                    onClick: () => {
                                        w(!0), j(!1)
                                    },
                                    children: c.Z.t("verify_phone.edit_phone", {
                                        scope: I
                                    })
                                })]
                            }), (0, P.jsxs)(Z.Z, {
                                children: [F && (0, P.jsx)(_.Z, {
                                    className: "dl-margin-r",
                                    uiStyle: "tertiary-neutral",
                                    onClick: () => j(!1),
                                    children: c.Z.t("common.actions.cancel")
                                }), (0, P.jsx)(_.Z, {
                                    onClick: () => {
                                        (0, a.ZP)({
                                            name: "phone_verification_clicked"
                                        }), y(!0), j(!1)
                                    },
                                    children: c.Z.t("verify_phone.begin", {
                                        scope: I
                                    })
                                })]
                            })]
                        }), v && (0, P.jsx)(D.Z, {
                            hideModal: () => y(!1),
                            onChangeNumber: () => {
                                w(!0), y(!1)
                            },
                            onSubmitParams: {
                                from_unified_account: !0
                            },
                            onSuccess: () => {
                                (0, a.ZP)({
                                    name: "phone_verification_confirmed",
                                    details: {
                                        success: !0
                                    }
                                }), T(), y(!1), E({
                                    message: c.Z.t("verify_phone.success_toast", {
                                        scope: I
                                    }),
                                    uiStyle: "success"
                                })
                            },
                            onFailure: e => {
                                (0, a.ZP)({
                                    name: "phone_verification_confirmed",
                                    details: {
                                        success: !1,
                                        error_message: e
                                    }
                                })
                            },
                            title: c.Z.t("patient_common.root.unified_account.verify_phone_title")
                        }), (0, P.jsxs)(m.Z, {
                            "data-test": "connection-section-phone",
                            chevron: !0,
                            onTap: () => {
                                (0, a.ZP)({
                                    name: "account_page_phone_number_clicked",
                                    details: i
                                }), "not_verified" === A ? j(!0) : w(!0)
                            },
                            children: [(0, P.jsx)(m.Z.Icon, {
                                name: "solid/phone",
                                color: "primary-110",
                                size: "medium",
                                className: "dl-align-self-flex-start"
                            }), (0, P.jsxs)(m.Z.Content, {
                                children: [(0, P.jsx)(m.Z.Title, {
                                    children: c.Z.t("patient_common.root.unified_account.connection_section.phone.title")
                                }), (0, P.jsx)(m.Z.Description, {
                                    color: "neutral-090",
                                    className: "dl-white-space-normal",
                                    children: t.phone_number ? (0, s.un)(t.phone_number) : c.Z.t("phone.add_phone", {
                                        scope: I
                                    })
                                })]
                            }), (0, P.jsx)(m.Z.Pill, {
                                iconName: "verified" === A ? void 0 : "solid/triangle-exclamation",
                                color: "verified" === A ? "success-020" : "warning-020",
                                label: c.Z.t(`patient_common.root.unified_account.connection_section.status.${A}`)
                            })]
                        })]
                    })
                },
                H = e => {
                    let {
                        account: t,
                        trackingDetails: i
                    } = e;
                    const [s, x] = (0, n.useState)(!1), [j, v] = (0, n.useState)(!1), [y, b] = (0, n.useState)(!1), [w, k] = (0, n.useState)(!1), S = (0, n.useCallback)((() => x(!1)), []), N = (0, d.ZP)(), {
                        fetchAccount: D
                    } = (0, l.dv)(), T = (0, o.Zz)(), E = "patient_common.root.unified_account.connection_section", F = t.email ? t.email_verified_at ? "verified" : "not_verified" : "missing", {
                        sendEmailLink: z
                    } = (0, r.Z)({
                        url: "/api/security/tanker_identities/send_verification_email",
                        method: "POST",
                        trigger: "sendEmailLink",
                        onFailure: e => {
                            let {
                                data: t
                            } = e;
                            return N({
                                message: null === t || void 0 === t ? void 0 : t.error,
                                uiStyle: "error"
                            })
                        }
                    });
                    return (0, P.jsxs)("div", {
                        id: "connection-section",
                        className: "dl-margin-b",
                        children: [(0, P.jsx)(I, {
                            show: y,
                            onHide: () => b(!1),
                            onSuccess: async e => {
                                let {
                                    data: {
                                        email_verified_at: t
                                    }
                                } = e;
                                await D(), (0, a.ZP)({
                                    name: "email_modification_confirmed",
                                    details: {
                                        success: !0,
                                        email: t ? "verified" : "unverified"
                                    }
                                }), b(!1), k(!0)
                            }
                        }), (0, P.jsx)(h.Z, {
                            onHide: S,
                            show: s,
                            size: "small",
                            title: c.Z.t("patient_mobile.root.account.edit.password.change_password"),
                            children: (0, P.jsx)(p.Z, {
                                children: (0, P.jsx)(C, {
                                    onSuccess: S
                                })
                            })
                        }), (0, P.jsxs)(h.Z, {
                            onHide: () => v(!1),
                            show: j,
                            size: "small",
                            title: c.Z.t("tanker.email_verification_title"),
                            restoreFocus: !1,
                            children: [(0, P.jsxs)(p.Z, {
                                alignText: "center",
                                children: [(0, P.jsx)(f.Z, {
                                    src: A,
                                    alt: "",
                                    height: "120"
                                }), (0, P.jsx)(u.Z, {
                                    block: !0,
                                    className: "dl-padding-y-16 dl-padding-x-32",
                                    children: c.Z.t("email.modal_body", {
                                        scope: E
                                    })
                                }), (0, P.jsx)(_.Z, {
                                    uiStyle: "link-primary",
                                    onClick: () => {
                                        b(!0), v(!1)
                                    },
                                    children: c.Z.t("patient_common.root.unified_account.connection_section.verify_email.modify")
                                })]
                            }), (0, P.jsxs)(Z.Z, {
                                children: [T && (0, P.jsx)(_.Z, {
                                    className: "dl-margin-r",
                                    uiStyle: "tertiary-neutral",
                                    onClick: () => v(!1),
                                    children: c.Z.t("common.actions.cancel")
                                }), (0, P.jsx)(_.Z, {
                                    trackingId: "email_verification_clicked",
                                    onClick: () => {
                                        k(!0), v(!1)
                                    },
                                    children: c.Z.t("email.modal_valid", {
                                        scope: E
                                    })
                                })]
                            })]
                        }), (0, P.jsx)(g.Z, {
                            account: t,
                            email: t.email,
                            verifyWithCode: !1,
                            show: w,
                            sendEmailOnShow: !0,
                            sendEmail: e => {
                                z({
                                    body: {
                                        email: (null === e || void 0 === e ? void 0 : e.email) || t.email
                                    }
                                })
                            },
                            onClose: () => k(!1)
                        }), (0, P.jsx)(u.Z, {
                            className: "dl-padding-16",
                            uiStyle: "title-s-bold",
                            color: "neutral-090",
                            component: "h4",
                            children: c.Z.t("patient_common.root.unified_account.connection_section.title")
                        }), (0, P.jsx)($, {
                            account: t,
                            trackingDetails: i
                        }), (0, P.jsxs)(m.Z, {
                            "data-test": "connection-section-email",
                            chevron: !0,
                            onTap: () => {
                                (0, a.ZP)({
                                    name: "account_page_email_clicked",
                                    details: i
                                }), "not_verified" === F ? v(!0) : b(!0)
                            },
                            children: [(0, P.jsx)(m.Z.Icon, {
                                name: "solid/envelope",
                                color: "primary-110",
                                size: "medium",
                                className: "dl-align-self-flex-start"
                            }), (0, P.jsxs)(m.Z.Content, {
                                children: [(0, P.jsx)(m.Z.Title, {
                                    children: c.Z.t("patient_common.root.unified_account.connection_section.email.title")
                                }), (0, P.jsx)(m.Z.Description, {
                                    color: "neutral-090",
                                    className: "dl-white-space-normal",
                                    children: t.email || c.Z.t("patient_common.root.unified_account.connection_section.edit_email.add_email")
                                })]
                            }), (0, P.jsx)(m.Z.Pill, {
                                iconName: "verified" === F ? void 0 : "solid/triangle-exclamation",
                                color: "verified" === F ? "success-020" : "warning-020",
                                label: c.Z.t(`patient_common.root.unified_account.connection_section.status.${F}`)
                            })]
                        }), (0, P.jsxs)(m.Z, {
                            "data-test": "connection-section-password",
                            chevron: !0,
                            onTap: () => {
                                (0, a.ZP)({
                                    name: "account_page_password_clicked",
                                    details: i
                                }), x(!0)
                            },
                            children: [(0, P.jsx)(m.Z.Icon, {
                                name: "solid/lock",
                                color: "primary-110",
                                size: "medium",
                                className: "dl-align-self-flex-start"
                            }), (0, P.jsxs)(m.Z.Content, {
                                children: [(0, P.jsx)(m.Z.Title, {
                                    children: c.Z.t("patient_common.root.unified_account.connection_section.password.title")
                                }), (0, P.jsx)(m.Z.Description, {
                                    color: "neutral-090",
                                    className: "dl-white-space-normal",
                                    children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                                })]
                            })]
                        })]
                    })
                }
        },
        868591: (e, t, i) => {
            i.d(t, {
                Z: () => p
            });
            var n = i(184481),
                o = i(24553),
                a = i(313311),
                c = i.n(a),
                s = i(5212),
                l = i(516590),
                r = i(445884),
                d = i(975645),
                m = i(179522),
                u = i(453040),
                _ = i(511299),
                h = i(785893);
            const p = e => {
                let {
                    trackingDetails: t,
                    masterPatients: i,
                    onCreateMainSuccess: a
                } = e;
                const [p, Z] = (0, n.useState)(!1), f = (0, o.useNavigate)(), x = (0, n.useMemo)((() => c()(i, {
                    kind: "main"
                })), [i]), g = (0, n.useCallback)((() => {
                    (0, l.ZP)({
                        name: "account_page_my_profile_clicked",
                        details: t
                    }), x || i.length ? f("/account/information") : Z(!0)
                }), [i]);
                return (0, h.jsxs)("div", {
                    id: "identity-section",
                    className: "dl-margin-b",
                    children: [(0, h.jsx)(_.Z, {
                        show: p,
                        relative: {
                            kind: "main",
                            main: !0
                        },
                        onHide: () => Z(!1),
                        onSaved: e => {
                            let {
                                data: t
                            } = e;
                            (0, l.ZP)({
                                name: "main_master_patient_addition_confirmed",
                                details: {
                                    master_patient_id: null === t || void 0 === t ? void 0 : t.id,
                                    success: !0,
                                    error_message: null
                                }
                            }), Z(!1), a()
                        },
                        onFailure: e => {
                            let {
                                data: t,
                                input: i
                            } = e;
                            return (0, l.ZP)({
                                name: "main_master_patient_addition_confirmed",
                                details: {
                                    master_patient_id: null === i || void 0 === i ? void 0 : i.main_master_patient_id,
                                    success: !1,
                                    error_message: Object.values(t)
                                }
                            })
                        }
                    }), (0, h.jsx)(u.Z, {
                        className: "dl-padding-16",
                        uiStyle: "title-s-bold",
                        color: "neutral-090",
                        component: "h4",
                        children: r.Z.t("patient_common.root.unified_account.identity_section.title")
                    }), (0, h.jsxs)(m.Z, {
                        "data-test": "identity-section-profile",
                        chevron: !0,
                        onTap: g,
                        children: [(0, h.jsx)(m.Z.Icon, {
                            name: "solid/circle-user",
                            color: "primary-110",
                            size: "medium",
                            className: "dl-align-self-flex-start"
                        }), (0, h.jsxs)(m.Z.Content, {
                            children: [(0, h.jsx)(m.Z.Title, {
                                children: r.Z.t("patient_common.root.unified_account.identity_section.profile.title")
                            }), (0, h.jsx)(m.Z.Description, {
                                color: "neutral-090",
                                className: "dl-white-space-normal",
                                children: x ? (0, d.WU)(x) : r.Z.t("patient_common.root.unified_account.identity_section.profile.description_no_main")
                            })]
                        }), !x && (0, h.jsx)(m.Z.Pill, {
                            color: "warning-020",
                            label: r.Z.t("patient_common.root.unified_account.identity_section.profile.status_no_main")
                        })]
                    }), (0, s.rl)() && (0, h.jsxs)(m.Z, {
                        "data-test": "identity-section-relatives",
                        chevron: !0,
                        onTap: () => {
                            (0, l.ZP)({
                                name: "account_page_my_relatives_clicked",
                                details: t
                            }), f("/account/relatives")
                        },
                        children: [(0, h.jsx)(m.Z.Icon, {
                            name: "solid/users",
                            color: "primary-110",
                            size: "medium",
                            className: "dl-align-self-flex-start"
                        }), (0, h.jsxs)(m.Z.Content, {
                            children: [(0, h.jsx)(m.Z.Title, {
                                children: r.Z.t("patient_common.root.unified_account.identity_section.relatives.title")
                            }), (0, h.jsx)(m.Z.Description, {
                                color: "neutral-090",
                                className: "dl-white-space-normal",
                                children: r.Z.t("patient_common.root.unified_account.identity_section.relatives.description")
                            })]
                        })]
                    })]
                })
            }
        },
        504848: (e, t, i) => {
            i.d(t, {
                Z: () => d
            });
            var n = i(184481),
                o = i(445884),
                a = i(516590),
                c = i(179522),
                s = i(723552),
                l = i(599403),
                r = i(785893);
            const d = () => {
                const [e, t] = (0, n.useState)(!1), i = (0, n.useCallback)((async () => {
                    (0, a.ZP)({
                        name: "patient_logout_confirm"
                    }, {
                        schema: "patient"
                    }), (0, s.Z)()
                }), []);
                return (0, r.jsxs)("div", {
                    className: "logout-section dl-margin-t-24",
                    children: [(0, r.jsx)(l.Z, {
                        show: e,
                        onAccept: i,
                        onDismiss: () => t(!1)
                    }), (0, r.jsxs)(c.Z, {
                        "data-test": "confidentiality-section-logout",
                        chevron: !0,
                        onTap: () => t(!0),
                        children: [(0, r.jsx)(c.Z.Icon, {
                            name: "regular/right-from-bracket",
                            color: "neutral-150",
                            size: "medium"
                        }), (0, r.jsx)(c.Z.Content, {
                            children: (0, r.jsx)(c.Z.Title, {
                                color: "neutral-150",
                                className: "dl-white-space-normal",
                                children: o.Z.t("patient_common.root.unified_account.logout_section.button")
                            })
                        })]
                    })]
                })
            }
        },
        139084: (e, t, i) => {
            i.d(t, {
                Z: () => se
            });
            var n = i(184481),
                o = i(24553),
                a = i(253565),
                c = i(516590),
                s = i(445884),
                l = i(951969),
                r = i(5212),
                d = i(800274),
                m = i(261397),
                u = i(710270),
                _ = i(580163),
                h = i(179522),
                p = i(453040),
                Z = i(784600),
                f = i(778075),
                x = i(619595),
                g = i(169339),
                j = i(383915),
                v = i(158270),
                y = i(470354),
                b = i(923663),
                w = i(968461),
                k = i(545763),
                S = i(335963),
                N = i(642979);
            const P = i.p + "3a8770d4ee71dbaf042e.png";
            var C = i(202889),
                D = i(290423);
            var T = i(785893);
            const E = e => {
                    let {
                        account: t
                    } = e;
                    return (0, T.jsxs)(h.Z, {
                        "data-test": "two-fa-section-email",
                        children: [(0, T.jsx)(h.Z.Icon, {
                            name: "solid/envelope",
                            color: "primary-110",
                            size: "medium",
                            className: "dl-align-self-flex-start"
                        }), (0, T.jsxs)(h.Z.Content, {
                            children: [(0, T.jsx)(h.Z.Title, {
                                children: s.Z.t("patient_common.root.unified_account.2fa_modal.email")
                            }), (0, T.jsx)(h.Z.Description, {
                                className: "dl-text-neutral-090 snapshot-hide",
                                children: t.email
                            })]
                        }), (0, T.jsx)(h.Z.Pill, {
                            color: t.email_verified_at ? "success-020" : "warning-020",
                            label: s.Z.t("patient_common.root.unified_account.2fa_modal." + (t.email_verified_at ? "verified" : "not_verified"))
                        })]
                    })
                },
                F = e => {
                    let {
                        account: t
                    } = e;
                    return (0, T.jsxs)(h.Z, {
                        "data-test": "two-fa-section-phone",
                        children: [(0, T.jsx)(h.Z.Icon, {
                            name: "solid/phone",
                            color: "primary-110",
                            size: "medium",
                            className: "dl-align-self-flex-start"
                        }), (0, T.jsxs)(h.Z.Content, {
                            children: [(0, T.jsx)(h.Z.Title, {
                                children: s.Z.t("common.phone_number")
                            }), (0, T.jsx)(h.Z.Description, {
                                className: "dl-text-neutral-090",
                                children: (0, b.un)(t.phone_number)
                            })]
                        }), (0, T.jsx)(h.Z.Pill, {
                            color: t.verified_at ? "success-020" : "warning-020",
                            label: s.Z.t("patient_common.root.unified_account.2fa_modal." + (t.verified_at ? "verified" : "not_verified"))
                        })]
                    })
                },
                I = e => {
                    let {
                        account: t,
                        closeModal: i
                    } = e;
                    const o = "patient_common.root.unified_account",
                        a = t.verified_at && t.email_verified_at,
                        [c, l] = (0, n.useState)(!1),
                        [r, m] = (0, n.useState)(!1),
                        {
                            fetchAccount: u
                        } = (0, d.dv)();
                    return (0, T.jsxs)(T.Fragment, {
                        children: [(0, T.jsxs)(g.Z, {
                            show: !r,
                            size: "small",
                            onHide: i,
                            title: s.Z.t(`${o}.security_section.2fa.title`),
                            children: [(0, T.jsxs)(j.Z, {
                                className: "dl-flex-column dl-flex-center",
                                children: [(0, T.jsx)("img", {
                                    src: P,
                                    className: "dl-phone-verified-image",
                                    alt: ""
                                }), a && (0, T.jsx)(S.Z, {
                                    color: "success-020",
                                    label: s.Z.t(`${o}.security_section.2fa.status_enabled`)
                                }), (0, T.jsx)(p.Z, {
                                    uiStyle: "title-s-bold",
                                    className: "dl-margin-t-8",
                                    children: s.Z.t(`${o}.2fa_modal.subtitle`)
                                }), (0, T.jsx)(p.Z, {
                                    align: "center",
                                    className: "dl-margin-t-8",
                                    children: s.Z.t(`${o}.2fa_modal.body_${a?"active":"inactive"}`)
                                }), a ? (0, T.jsx)(N.Z, {
                                    flat: !0,
                                    className: "dl-margin-t-8",
                                    href: s.Z.t(`${o}.2fa_modal.know_more_href`),
                                    target: "_blank",
                                    children: s.Z.t(`${o}.2fa_modal.href_text`)
                                }) : (0, T.jsxs)(T.Fragment, {
                                    children: [(0, T.jsx)(p.Z, {
                                        color: "neutral-090",
                                        className: "dl-margin-t-24 dl-margin-b-8",
                                        children: s.Z.t(`${o}.2fa_modal.comment`)
                                    }), (0, T.jsxs)("div", {
                                        className: "dl-text-left dl-full-width",
                                        children: [(0, T.jsx)(F, {
                                            account: t
                                        }), (0, T.jsx)(E, {
                                            account: t
                                        })]
                                    })]
                                })]
                            }), !a && (0, T.jsx)(w.Z, {
                                children: t.verified_at ? (0, T.jsx)(k.Z, {
                                    onClick: () => l(!0),
                                    children: s.Z.t(`${o}.2fa_modal.verify_email`)
                                }) : (0, T.jsx)(k.Z, {
                                    onClick: () => m(!0),
                                    children: s.Z.t(`${o}.2fa_modal.verify_phone`)
                                })
                            })]
                        }), r && (0, T.jsx)(D.Z, {
                            hideModal: () => m(!1),
                            onSubmitParams: {
                                from_unified_account: !0
                            },
                            onSuccess: () => {
                                u(), m(!1)
                            },
                            title: s.Z.t("verify_phone_title", {
                                scope: o
                            })
                        }), c && (0, T.jsx)(C.Z, {
                            sendEmailOnShow: !0,
                            onHide: u
                        })]
                    })
                };
            var z = i(72281),
                A = i(592290);
            const $ = i.p + "03273c090695de5f8250.png",
                H = i.p + "d20f750d44c84377f586.png",
                q = i.p + "ac4c324f166fd36a28f1.png",
                M = "patient_common.root.unified_account.lock_my_app.drawer",
                B = e => {
                    let {
                        actionPrimary: t,
                        actionSecondary: i,
                        isMethodActive: n,
                        method: o,
                        onHide: a,
                        show: c
                    } = e, l = null;
                    switch (o) {
                        case "face_id":
                            l = $;
                            break;
                        case "fingerprint":
                        case "touch_id":
                            l = H;
                            break;
                        default:
                            l = q
                    }
                    return (0, T.jsxs)(A.ZP, {
                        title: s.Z.t(`${o}.title`, {
                            scope: M
                        }),
                        show: c,
                        onHide: a,
                        withCloseIcon: !0,
                        children: [(0, T.jsxs)(A.Ng, {
                            className: "dl-text-center",
                            children: [(0, T.jsx)("img", {
                                src: l,
                                className: "dl-lock-my-app-drawer-image",
                                alt: ""
                            }), (0, T.jsx)(p.Z, {
                                uiStyle: "title-s-bold",
                                className: "dl-margin-t-8",
                                children: s.Z.t("subtitle", {
                                    scope: M
                                })
                            }), (0, T.jsx)(p.Z, {
                                block: !0,
                                uiStyle: "body-s-regular",
                                className: "dl-margin-t-8",
                                children: s.Z.t(`${o}.description`, {
                                    scope: M
                                })
                            })]
                        }), (0, T.jsxs)(A.ze, {
                            children: ["pin" === o && n && (0, T.jsx)(k.Z, {
                                onClick: i,
                                children: s.Z.t("pin.change_code", {
                                    scope: M
                                })
                            }), (0, T.jsx)(k.Z, {
                                uiStyle: n ? "link-primary" : "primary",
                                className: "dl-margin-t-8",
                                onClick: t,
                                children: s.Z.t(`${o}.${n?"deactivate":"activate"}`, {
                                    scope: M
                                })
                            })]
                        })]
                    })
                };
            var O = i(140161);
            const L = "patient_common.root.unified_account.lock_my_app",
                R = e => {
                    let {
                        trackingDetails: t,
                        setTrackingDetails: i,
                        setShowBiometricDrawer: o
                    } = e;
                    const a = "activated" === (null === t || void 0 === t ? void 0 : t.authentication_code),
                        l = (0, n.useRef)(),
                        r = (0, _.ZP)(),
                        [d, m] = (0, n.useState)((() => {})),
                        [u, p] = (0, n.useState)(!1),
                        [Z, f] = (0, n.useState)(!1),
                        {
                            resetPinConfig: x,
                            isEligibleToLockMyApp: g
                        } = (0, v.Z)();
                    return (0, T.jsxs)(T.Fragment, {
                        children: [(0, T.jsx)(z.Z, {
                            show: Z,
                            onHide: () => f(!1)
                        }), (0, T.jsx)(O.Z, {
                            ref: l,
                            trackingDetails: t,
                            onFlowSuccess: d
                        }), (0, T.jsxs)(h.Z, {
                            "data-test": "lock-my-app-pin",
                            chevron: !0,
                            onTap: () => {
                                g() ? (p(!0), (0, c.ZP)({
                                    details: t,
                                    name: "lock_my_app_code_click"
                                })) : f(!0)
                            },
                            children: [(0, T.jsx)(h.Z.Icon, {
                                name: "solid/user-lock",
                                color: "primary-110",
                                size: "medium",
                                className: "dl-align-self-flex-start"
                            }), (0, T.jsxs)(h.Z.Content, {
                                children: [(0, T.jsx)(h.Z.Title, {
                                    children: s.Z.t("pin_section.title", {
                                        scope: L
                                    })
                                }), (0, T.jsx)(h.Z.Description, {
                                    color: "neutral-090",
                                    className: "dl-white-space-normal",
                                    children: s.Z.t("pin_section.description_" + (a ? "enabled" : "disabled"), {
                                        scope: L
                                    })
                                })]
                            }), (0, T.jsx)(h.Z.Pill, {
                                color: a ? "success-020" : "warning-020",
                                label: s.Z.t("status_" + (a ? "enabled" : "disabled"), {
                                    scope: L
                                })
                            })]
                        }), (0, T.jsx)(B, {
                            actionPrimary: a ? () => {
                                x();
                                const e = { ...t,
                                    authentication_code: "deactivated"
                                };
                                i(e), (0, c.ZP)({
                                    details: e,
                                    name: "authentication_code_deactivated"
                                }, {
                                    schema: "patient"
                                }), "activated" === t.authentication_biometric && (e.authentication_biometric = "deactivated", i(e), (0, c.ZP)({
                                    details: e,
                                    name: "authentication_biometric_deactivated"
                                }, {
                                    schema: "patient"
                                })), p(!1), r({
                                    message: s.Z.t("pin_section.pin_unset_toaster", {
                                        scope: L
                                    }),
                                    uiStyle: "success"
                                })
                            } : () => {
                                (0, c.ZP)({
                                    details: t,
                                    name: "set_up_code_click"
                                }, {
                                    schema: "patient"
                                }), m((() => () => {
                                    i({ ...t,
                                        authentication_code: "activated"
                                    }), p(!1), o(!0)
                                })), l.current.triggerFlow(O.t.ENABLE_PIN, t)
                            },
                            actionSecondary: a ? () => {
                                m((() => () => {
                                    p(!1)
                                })), l.current.triggerFlow(O.t.MODIFY_PIN, t)
                            } : null,
                            method: "pin",
                            show: u,
                            onHide: () => p(!1),
                            isMethodActive: a
                        })]
                    })
                };
            var W = i(294184),
                V = i.n(W);
            const Y = {
                    FaceID: "face_id",
                    TouchID: "touch_id",
                    Fingerprint: "fingerprint"
                },
                U = e => {
                    let {
                        trackingDetails: t,
                        setTrackingDetails: i,
                        showBiometricDrawer: o,
                        setShowBiometricDrawer: a
                    } = e;
                    const {
                        enableBiometric: l,
                        disableBiometric: r,
                        isEligibleToLockMyApp: d,
                        getPinCodeWithBiometric: m
                    } = (0, v.Z)(), [u, _] = (0, n.useState)(!1);
                    if ("unavailable" === (null === t || void 0 === t ? void 0 : t.authentication_biometric) || !Object.keys(Y).includes(null === t || void 0 === t ? void 0 : t.biometric_type)) return null;
                    const p = "patient_common.root.unified_account.lock_my_app",
                        Z = Y[t.biometric_type],
                        f = "activated" === (null === t || void 0 === t ? void 0 : t.authentication_biometric),
                        x = "activated" === (null === t || void 0 === t ? void 0 : t.authentication_code);
                    return (0, T.jsxs)(T.Fragment, {
                        children: [(0, T.jsx)(z.Z, {
                            show: u,
                            onHide: () => _(!1)
                        }), (0, T.jsxs)(h.Z, {
                            className: V()({
                                "dl-biometric-listitem-disabled": !x
                            }),
                            "data-test": "lock-my-app-pin",
                            chevron: x,
                            onTap: x && (() => {
                                d() ? (a(!0), (0, c.ZP)({
                                    details: t,
                                    name: "lock_my_app_biometric_click"
                                })) : _(!0)
                            }),
                            children: [(0, T.jsx)(h.Z.Icon, {
                                name: "regular/" + ("face_id" === Z ? "face-viewfinder" : "fingerprint"),
                                color: "primary-110",
                                size: "medium",
                                className: "dl-align-self-flex-start"
                            }), (0, T.jsxs)(h.Z.Content, {
                                children: [(0, T.jsx)(h.Z.Title, {
                                    children: s.Z.t(`${Z}_section.title`, {
                                        scope: p
                                    })
                                }), (0, T.jsx)(h.Z.Description, {
                                    color: "neutral-090",
                                    className: "dl-white-space-normal dl-biometric-listitem-fixed-content",
                                    children: s.Z.t(`${Z}_section.description_${x?f?"enabled":"disabled":"unavailable"}`, {
                                        scope: p
                                    })
                                })]
                            }), x && (0, T.jsx)(h.Z.Pill, {
                                color: f ? "success-020" : "warning-020",
                                label: s.Z.t("status_" + (f ? "enabled" : "disabled"), {
                                    scope: p
                                })
                            })]
                        }), (0, T.jsx)(B, {
                            actionPrimary: f ? async () => {
                                await r();
                                const e = { ...t,
                                    authentication_biometric: "deactivated"
                                };
                                (0, c.ZP)({
                                    name: "authentication_biometric_deactivated",
                                    details: e
                                }, {
                                    schema: "patient"
                                }), i(e), a(!1)
                            } : async () => {
                                (0, c.ZP)({
                                    name: "set_up_biometric_click",
                                    details: t
                                }, {
                                    schema: "patient"
                                });
                                try {
                                    await l();
                                    if (!await m()) throw new Error("Cancel button clicked"); {
                                        const e = { ...t,
                                            authentication_biometric: "activated"
                                        };
                                        (0, c.ZP)({
                                            name: "authentication_biometric_activated",
                                            details: e
                                        }, {
                                            schema: "patient"
                                        }), i(e), a(!1)
                                    }
                                } catch (e) {
                                    await r()
                                }
                            },
                            method: Z,
                            show: o,
                            onHide: () => a(!1),
                            isMethodActive: f
                        })]
                    })
                };
            var K = i(129303),
                Q = i(26298),
                X = i(528846);
            const G = i.p + "06a2e805689d9dc44de1.png",
                J = {
                    FaceID: "face_id",
                    TouchID: "touch_id",
                    Fingerprint: "fingerprint"
                },
                ee = {
                    face_id: {
                        icon: "regular/face-scan",
                        title: s.Z.t("patient_common.root.unified_account.security_section.quick_login.face_id.title"),
                        body: s.Z.t("patient_common.root.unified_account.security_section.quick_login.face_id.body")
                    },
                    touch_id: {
                        icon: "regular/fingerprint",
                        title: s.Z.t("patient_common.root.unified_account.security_section.quick_login.touch_id.title"),
                        body: s.Z.t("patient_common.root.unified_account.security_section.quick_login.touch_id.body")
                    },
                    fingerprint: {
                        icon: "regular/fingerprint",
                        title: s.Z.t("patient_common.root.unified_account.security_section.quick_login.fingerprint.title"),
                        body: s.Z.t("patient_common.root.unified_account.security_section.quick_login.fingerprint.body")
                    }
                },
                te = e => {
                    let {
                        showDrawer: t,
                        setShowDrawer: i,
                        setChecked: n
                    } = e;
                    return (0, T.jsxs)(A.ZP, {
                        title: s.Z.t("patient_common.root.unified_account.security_section.quick_login.face_id.title"),
                        show: t,
                        onHide: () => {
                            n(!1), i(!1)
                        },
                        children: [(0, T.jsxs)(A.Ng, {
                            children: [(0, T.jsx)("div", {
                                className: "text-center mb-16",
                                children: (0, T.jsx)(X.Z, {
                                    src: G,
                                    width: "104px",
                                    height: "104px",
                                    alt: ""
                                })
                            }), (0, T.jsx)(p.Z, {
                                children: s.Z.t("patient_common.root.unified_account.security_section.quick_login.face_id.drawer.body")
                            })]
                        }), (0, T.jsx)(A.ze, {
                            children: (0, T.jsx)(k.Z, {
                                block: !0,
                                onTap: async () => {
                                    await K.ZP.call({
                                        method: K.o0,
                                        params: []
                                    })
                                },
                                children: s.Z.t("patient_common.root.unified_account.security_section.quick_login.face_id.drawer.button")
                            })
                        })]
                    })
                },
                ie = e => {
                    let {
                        availableBiometric: t = "FaceID",
                        biometricPermission: i
                    } = e;
                    const [o, a] = (0, n.useState)(!1), [c, s] = (0, n.useState)(), l = () => {
                        s((e => (Q.hX(!e), !e)))
                    }, [r, d] = (0, n.useState)((() => l));
                    return (0, n.useEffect)((() => {
                        (async () => {
                            if (void 0 !== i)
                                if (!1 === i) d((() => () => a(!0))), s(!1);
                                else {
                                    const e = await Q.KT();
                                    s(e)
                                }
                        })()
                    }), [i]), (0, T.jsxs)(T.Fragment, {
                        children: [(0, T.jsxs)(h.Z, {
                            "data-test": "quick-login-setting",
                            children: [(0, T.jsx)(h.Z.Icon, {
                                name: ee[J[t]].icon,
                                color: "primary-110",
                                size: "medium",
                                className: "dl-align-self-flex-start"
                            }), (0, T.jsxs)(h.Z.Content, {
                                children: [(0, T.jsx)(h.Z.Title, {
                                    children: ee[J[t]].title
                                }), (0, T.jsx)(h.Z.Description, {
                                    color: "neutral-090",
                                    className: "dl-white-space-normal",
                                    children: ee[J[t]].body
                                })]
                            }), (0, T.jsx)(h.Z.Toggle, {
                                className: "mr-8",
                                checked: c,
                                onChange: r
                            })]
                        }), (0, T.jsx)(te, {
                            showDrawer: o,
                            setShowDrawer: a,
                            setChecked: s
                        })]
                    })
                };
            var ne = i(143403);
            const oe = ["FaceID", "TouchID", "Fingerprint"],
                ae = (e, t) => {
                    const i = "de" === (0, r.rZ)(),
                        n = !!e && oe.includes(e);
                    return Boolean(i && (0, ne.mj)() && (n || !1 === t))
                },
                ce = e => {
                    let {
                        trackingDetails: t,
                        creditCards: i = []
                    } = e;
                    const [o, a] = (0, n.useState)(null), [l, r] = (0, n.useState)(!1), [m, p] = (0, n.useState)(!1), {
                        fetchAccount: v
                    } = (0, d.dv)(), b = (0, _.ZP)(), w = "patient_common.root.unified_account.security_section.payments", k = () => {
                        p(!1)
                    }, {
                        loading: S,
                        onDeleteConfirm: N
                    } = (0, u.Z)({
                        method: "delete",
                        url: `/account/credit_cards/${o}`,
                        trigger: "onDeleteConfirm",
                        onSuccess: () => {
                            b({
                                message: s.Z.t("patient_common.root.telehealth.credit_card_removed")
                            }), v(), k(), (0, c.ZP)({
                                name: "payment_method_deletion_confirmed",
                                details: {
                                    payment_method_id: o,
                                    success: !0
                                }
                            })
                        },
                        onFailure: () => {
                            (0, c.ZP)({
                                name: "payment_method_deletion_confirmed",
                                details: {
                                    payment_method_id: o,
                                    success: !1,
                                    error_message: s.Z.t("patient_common.root.telehealth.delete_failed_title")
                                }
                            }), b({
                                message: s.Z.t("patient_common.root.telehealth.delete_failed_title"),
                                uiStyle: "error"
                            }), k()
                        }
                    });
                    return 0 === i.length ? null : (0, T.jsxs)(T.Fragment, {
                        children: [(0, T.jsx)(f.Z, {
                            title: s.Z.t("dialog_title", {
                                scope: w
                            }),
                            dismissText: s.Z.t("common.actions.cancel"),
                            onDismiss: k,
                            acceptDisabled: S,
                            acceptText: s.Z.t("common.actions.delete"),
                            onAccept: N,
                            show: m,
                            destructive: !0,
                            children: s.Z.t("dialog_body", {
                                scope: w
                            })
                        }), (0, T.jsx)(g.Z, {
                            size: "small",
                            show: l,
                            onHide: () => {
                                r(!1)
                            },
                            title: s.Z.t("modal_title", {
                                scope: w
                            }),
                            children: (0, T.jsx)(j.Z, {
                                className: "dl-padding-b-32",
                                children: i.map((e => (0, T.jsxs)(Z.Z, {
                                    className: "dl-padding-y-4 dl-margin-b-8",
                                    contentClassName: "dl-layout-flex-row",
                                    border: !0,
                                    children: [(0, T.jsx)(y.Z, { ...e,
                                        height: 36,
                                        width: 36
                                    }), (0, T.jsx)(x.ZP, {
                                        onClick: () => {
                                            return t = e.id, a(t), void p(!0);
                                            var t
                                        },
                                        className: "dl-padding-0",
                                        size: "medium",
                                        color: "error-090",
                                        name: "regular/trash-can",
                                        title: s.Z.t("dialog_title", {
                                            scope: w
                                        })
                                    })]
                                }, `credit-cards-${e.id}`)))
                            })
                        }), (0, T.jsxs)(h.Z, {
                            "data-test": "security-section-payment-methods",
                            chevron: !0,
                            onTap: () => {
                                (0, c.ZP)({
                                    name: "account_page_my_payment_methods_clicked",
                                    details: t
                                }), r(!0)
                            },
                            children: [(0, T.jsx)(h.Z.Icon, {
                                name: "solid/credit-card",
                                color: "primary-110",
                                size: "medium",
                                className: "dl-align-self-flex-start"
                            }), (0, T.jsxs)(h.Z.Content, {
                                children: [(0, T.jsx)(h.Z.Title, {
                                    children: s.Z.t("title", {
                                        scope: w
                                    })
                                }), (0, T.jsx)(h.Z.Description, {
                                    color: "neutral-090",
                                    className: "dl-white-space-normal",
                                    children: s.Z.t("body", {
                                        scope: w
                                    })
                                })]
                            })]
                        })]
                    })
                },
                se = e => {
                    var t;
                    let {
                        setShowE2EEModal: i,
                        account: d,
                        trackingDetails: u,
                        setTrackingDetails: _
                    } = e;
                    const [Z, f] = (0, n.useState)(!1), [x, g] = (0, n.useState)(), [j, y] = (0, n.useState)(), b = (0, o.useNavigate)(), w = (0, n.useContext)(m.WA), k = d.verified_at && d.email_verified_at ? "enabled" : "disabled", S = null !== (t = d.tanker_identity) && void 0 !== t && t.email_registered_at ? "enabled" : "disabled", {
                        getAvailableBiometric: N,
                        hasOSBiometricsAuthorization: P
                    } = (0, v.Z)();
                    return (0, n.useEffect)((() => {
                        (0, l.uz)("3.4.20") && (async () => {
                            const e = await N();
                            e && g(e), y(await P())
                        })()
                    }), [N, P]), (0, T.jsxs)("div", {
                        id: "security-section",
                        children: [(0, T.jsx)(p.Z, {
                            className: "dl-padding-16",
                            uiStyle: "title-s-bold",
                            color: "neutral-090",
                            component: "h4",
                            children: s.Z.t("patient_common.root.unified_account.security_section.title")
                        }), (0, T.jsxs)(h.Z, {
                            "data-test": "security-section-2fa",
                            chevron: !0,
                            onTap: () => {
                                (0, c.ZP)({
                                    name: "account_page_two_factor_authentication_clicked",
                                    details: u
                                }), b("/account/edit/two-fa")
                            },
                            children: [(0, T.jsx)(h.Z.Icon, {
                                name: "solid/key",
                                color: "primary-110",
                                size: "medium",
                                className: "dl-align-self-flex-start"
                            }), (0, T.jsxs)(h.Z.Content, {
                                children: [(0, T.jsx)(h.Z.Title, {
                                    children: s.Z.t("patient_common.root.unified_account.security_section.2fa.title")
                                }), (0, T.jsx)(h.Z.Description, {
                                    color: "neutral-090",
                                    className: "dl-white-space-normal",
                                    children: s.Z.t(`patient_common.root.unified_account.security_section.2fa.description_${k}`)
                                })]
                            }), (0, T.jsx)(h.Z.Pill, {
                                color: "enabled" === k ? "success-020" : "warning-020",
                                label: s.Z.t(`patient_common.root.unified_account.security_section.2fa.status_${k}`)
                            })]
                        }), (0, T.jsxs)(h.Z, {
                            "data-test": "security-section-e2ee",
                            chevron: !0,
                            onTap: () => ((0, c.ZP)({
                                name: "account_page_document_encryption_clicked",
                                details: u
                            }), "enabled" === S ? i(!0) : w.startTanker(d, {
                                forceCodeEmailVerification: !0,
                                enforceFullRegistration: !0
                            })),
                            children: [(0, T.jsx)(h.Z.Icon, {
                                name: "solid/shield-check",
                                color: "primary-110",
                                size: "medium",
                                className: "dl-align-self-flex-start"
                            }), (0, T.jsxs)(h.Z.Content, {
                                children: [(0, T.jsx)(h.Z.Title, {
                                    children: s.Z.t("patient_common.root.unified_account.security_section.e2ee.title")
                                }), (0, T.jsx)(h.Z.Description, {
                                    color: "neutral-090",
                                    className: "dl-white-space-normal",
                                    children: s.Z.t(`patient_common.root.unified_account.security_section.e2ee.description_${S}`)
                                })]
                            }), (0, T.jsx)(h.Z.Pill, {
                                color: "enabled" === S ? "success-020" : "warning-020",
                                label: s.Z.t(`patient_common.root.unified_account.security_section.e2ee.status_${S}`)
                            })]
                        }), (0, r.b$)() && a.Z.config.isLockMyAppEnabled() && (0, T.jsxs)(T.Fragment, {
                            children: [(0, T.jsx)(R, {
                                trackingDetails: u,
                                setTrackingDetails: _,
                                setShowBiometricDrawer: f
                            }), (0, T.jsx)(U, {
                                trackingDetails: u,
                                showBiometricDrawer: Z,
                                setShowBiometricDrawer: f,
                                setTrackingDetails: _
                            })]
                        }), ae(x, j) && (0, T.jsx)(ie, {
                            availableBiometric: x,
                            biometricPermission: j
                        }), (0, T.jsx)(o.Routes, {
                            children: (0, T.jsx)(o.Route, {
                                path: "two-fa",
                                element: (0, T.jsx)(I, {
                                    account: d,
                                    closeModal: () => b(".")
                                })
                            })
                        }), (0, T.jsx)(ce, {
                            creditCards: d.credit_cards,
                            trackingDetails: u
                        })]
                    })
                }
        },
        202889: (e, t, i) => {
            i.d(t, {
                Z: () => Z
            });
            var n = i(184481),
                o = i(445884),
                a = i(169339),
                c = i(383915),
                s = i(545763),
                l = i(528846),
                r = i(968461),
                d = i(77058),
                m = i(800274),
                u = i(710270);
            const _ = i.p + "5f7debaa6cf05ee93b28.png";
            var h = i(990626),
                p = i(785893);
            const Z = e => {
                let {
                    sendEmailOnShow: t = !1,
                    onHide: i
                } = e;
                const [Z, f] = (0, n.useState)(!1), x = (0, m.ZP)(), g = x.email.toLowerCase(), [j, v] = (0, n.useState)(), {
                    sendEmail: y
                } = (0, u.Z)({
                    method: "post",
                    url: "/api/security/tanker_identities/send_verification_email",
                    trigger: "sendEmail",
                    onFailure: () => v(o.Z.t("api.accounts.index.root.notifications.temporary_error"))
                }), b = "patient" === x.kind && !h.ZP.BYPASS_PATIENT_EMAIL_VERIFICATION_ENABLED;
                return (0, n.useEffect)((() => {
                    !b && t && y({
                        body: {
                            email: g
                        }
                    })
                }), [b]), b ? (0, p.jsx)(d.Z, {
                    account: x,
                    sendEmailOnShow: t,
                    email: g,
                    sendEmail: function() {
                        let {
                            email: e = g
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return y({
                            email: e
                        })
                    },
                    modalErrorMessage: j,
                    onClose: () => {
                        f(!0), null === i || void 0 === i || i()
                    },
                    show: !Z,
                    inflowEmailEdit: !0
                }) : (0, p.jsxs)(a.Z, {
                    show: !Z,
                    title: o.Z.t("accounts.email_verifications.after_booking.mail_verification_header"),
                    children: [(0, p.jsxs)(c.Z, {
                        children: [(0, p.jsx)("div", {
                            className: "dl-margin-16 dl-flex-center",
                            children: (0, p.jsx)(l.Z, {
                                className: "dl-email-verification-image",
                                src: _,
                                alt: ""
                            })
                        }), (0, p.jsx)("div", {
                            className: "dl-margin-t-16",
                            children: o.Z.t("accounts.email_verifications.after_booking.email_sent_html", {
                                email: null === x || void 0 === x ? void 0 : x.email
                            })
                        }), (0, p.jsx)("div", {
                            className: "dl-margin-t-16",
                            children: (0, p.jsx)("strong", {
                                children: o.Z.t("accounts.email_verifications.after_booking.click_verification_link")
                            })
                        })]
                    }), (0, p.jsx)(r.Z, {
                        children: (0, p.jsx)(s.Z, {
                            onClick: () => f(!0),
                            children: o.Z.t("accounts.email_verifications.after_booking.close_button")
                        })
                    })]
                })
            }
        },
        187563: (e, t, i) => {
            i.d(t, {
                Z: () => m
            });
            var n = i(445884),
                o = i(335963),
                a = i(642979),
                c = i(169339),
                s = i(383915),
                l = i(453040),
                r = i(790398),
                d = i(785893);
            const m = e => {
                let {
                    show: t,
                    onHide: i
                } = e;
                return (0, d.jsx)(c.Z, {
                    show: t,
                    size: "small",
                    withCloseIcon: !0,
                    onHide: i,
                    title: n.Z.t("patient_common.root.unified_account.security_section.e2ee.modal.title"),
                    children: (0, d.jsxs)(s.Z, {
                        className: "dl-flex-column dl-align-items-center",
                        children: [(0, d.jsx)("img", {
                            src: r,
                            height: "120",
                            width: "120",
                            className: "dl-margin-t-8",
                            alt: ""
                        }), (0, d.jsx)(o.Z, {
                            color: "success-020",
                            className: "dl-margin-y-16",
                            label: n.Z.t("patient_common.root.unified_account.security_section.e2ee.status_enabled")
                        }), (0, d.jsx)(l.Z, {
                            uiStyle: "body-s-regular",
                            align: "center",
                            children: n.Z.t("patient_common.root.unified_account.security_section.e2ee.modal.enabled.content")
                        }), (0, d.jsx)(a.Z, {
                            flat: !0,
                            className: "dl-margin-y-8",
                            href: n.Z.t("patient_common.root.unified_account.security_section.e2ee.modal.enabled.link"),
                            target: "_blank",
                            children: n.Z.t("patient_common.root.unified_account.security_section.e2ee.modal.enabled.anchor")
                        })]
                    })
                })
            }
        },
        253440: (e, t, i) => {
            i.d(t, {
                Z: () => S
            });
            var n = i(785893),
                o = i(184481),
                a = i(24553),
                c = i(5212),
                s = i(516590),
                l = i(445884),
                r = i(708221),
                d = i(800274),
                m = i(580163),
                u = i(174976),
                _ = i(239417);
            var h = i(179522),
                p = i(453040),
                Z = i(778075),
                f = i(545763),
                x = i(169339),
                g = i(383915),
                j = i(968461),
                v = i(143403);
            const y = () => {
                    const e = (0, a.useNavigate)();
                    return (0, n.jsx)(h.Z, {
                        "data-test": "confidentiality-section-legal-info",
                        chevron: !0,
                        onTap: () => e("/legal-info"),
                        children: (0, n.jsx)(h.Z.Content, {
                            children: (0, n.jsx)(h.Z.Description, {
                                color: "neutral-150",
                                className: "dl-white-space-normal",
                                children: l.Z.t("patient_common.root.legal_info.title")
                            })
                        })
                    })
                },
                b = () => {
                    const e = (0, a.useNavigate)();
                    return (0, n.jsx)(h.Z, {
                        "data-test": "confidentiality-section-settings",
                        chevron: !0,
                        onTap: () => e("/privacy-settings"),
                        children: (0, n.jsx)(h.Z.Content, {
                            children: (0, n.jsx)(h.Z.Description, {
                                color: "neutral-150",
                                className: "dl-white-space-normal",
                                children: l.Z.t("patient_common.root.unified_account.confidentiality_section.preferences.title")
                            })
                        })
                    })
                },
                w = () => {
                    const e = (0, a.useNavigate)(),
                        t = (0, d.ZP)();
                    if (null === t) throw new Error("account not set");
                    if (void 0 === t.patient_questions) throw new Error("account.patient_questions not set");
                    return t.patient_questions.length > 0 ? (0, n.jsx)(h.Z, {
                        "data-test": "confidentiality-section-patient-questions",
                        chevron: !0,
                        onTap: () => e("/account/questions"),
                        children: (0, n.jsx)(h.Z.Content, {
                            children: (0, n.jsx)(h.Z.Description, {
                                color: "neutral-150",
                                className: "dl-white-space-normal",
                                children: l.Z.t("patient_mobile.root.user_menu.questions")
                            })
                        })
                    }) : null
                },
                k = e => {
                    let {
                        trackingDetails: t
                    } = e;
                    const [i, a] = (0, o.useState)(!1), [p, y] = (0, o.useState)(!1), b = (0, m.ZP)(), w = (0, d.ZP)(), k = () => {
                        a(!1)
                    }, S = () => {
                        y(!1)
                    }, {
                        mutate: N,
                        isLoading: P
                    } = (e => {
                        let {
                            onSuccess: t,
                            onError: i
                        } = e;
                        const n = (0, o.useContext)(_._O);
                        return (0, u.useMutation)((() => n.delete("/account.json")), {
                            onSuccess: t,
                            onError: i
                        })
                    })({
                        onSuccess: () => {
                            (0, c.b$)() && (0, v.Qk)(), S(), k(), (0, r.Z)("/", {
                                replace: !0
                            }), (0, s.ZP)({
                                name: "account_deletion_confirmed",
                                details: {
                                    account_id: null === w || void 0 === w ? void 0 : w.id,
                                    success: !0
                                }
                            }, {
                                schema: "default"
                            })
                        },
                        onError: e => {
                            let {
                                data: t
                            } = e;
                            S(), k(), (0, s.ZP)({
                                name: "account_deletion_confirmed",
                                details: {
                                    account_id: null === w || void 0 === w ? void 0 : w.id,
                                    success: !1,
                                    error_message: l.Z.t("patient_mobile.root.account.edit.profile.remove_account.not_deletable")
                                }
                            }, {
                                schema: "default"
                            }), !1 === (null === t || void 0 === t ? void 0 : t.deletable) && b({
                                message: l.Z.t("patient_mobile.root.account.edit.profile.remove_account.not_deletable"),
                                uiStyle: "error"
                            })
                        }
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(Z.Z, {
                            title: l.Z.t("patient_common.root.unified_account.confidentiality_section.suppression.dialog_title"),
                            dismissText: l.Z.t("common.actions.cancel"),
                            onDismiss: S,
                            acceptDisabled: P,
                            acceptText: l.Z.t("common.actions.delete"),
                            onAccept: () => N(),
                            show: p,
                            destructive: !0,
                            children: l.Z.t("patient_common.root.unified_account.confidentiality_section.suppression.dialog_body")
                        }), (0, n.jsxs)(x.Z, {
                            size: "small",
                            show: i,
                            onHide: k,
                            title: l.Z.t("patient_common.root.unified_account.confidentiality_section.suppression.modal_title"),
                            children: [(0, n.jsx)(g.Z, {
                                children: l.Z.t("patient_common.root.unified_account.confidentiality_section.suppression.modal_body")
                            }), (0, n.jsxs)(j.Z, {
                                className: "flex dl-justify-center",
                                children: [(0, n.jsx)(f.Z, {
                                    className: "dl-padding-r-16",
                                    uiStyle: "tertiary-neutral",
                                    onClick: k,
                                    children: l.Z.t("common.actions.cancel")
                                }), (0, n.jsx)(f.Z, {
                                    uiStyle: "danger",
                                    onClick: () => {
                                        y(!0)
                                    },
                                    children: l.Z.t("patient_common.root.unified_account.confidentiality_section.suppression.modal_valid")
                                })]
                            })]
                        }), (0, n.jsx)(h.Z, {
                            chevron: !0,
                            onTap: () => {
                                (0, s.ZP)({
                                    name: "account_page_delete_my_account_clicked",
                                    details: t
                                }), a(!0)
                            },
                            children: (0, n.jsx)(h.Z.Content, {
                                children: (0, n.jsx)(h.Z.Description, {
                                    color: "error-090",
                                    className: "dl-white-space-normal",
                                    children: l.Z.t("patient_common.root.unified_account.confidentiality_section.suppression.title")
                                })
                            })
                        })]
                    })
                },
                S = e => {
                    let {
                        trackingDetails: t
                    } = e;
                    const i = (0, d.ZP)();
                    return (0, n.jsxs)("div", {
                        className: "confidentiality-section dl-margin-t-16",
                        children: [(0, n.jsx)(p.Z, {
                            className: "dl-padding-16",
                            uiStyle: "title-s-bold",
                            color: "neutral-090",
                            component: "h4",
                            children: l.Z.t("patient_common.root.unified_account.confidentiality_section.title")
                        }), (0, n.jsx)(b, {}), (0, n.jsx)(y, {}), i && (0, c.rl)() && (0, n.jsx)(w, {}), i && (0, n.jsx)(k, {
                            trackingDetails: t
                        })]
                    })
                }
        },
        86310: (e, t, i) => {
            e.exports = i.p + "29eae51605d4c343afc3.png"
        }
    }
]);
//# sourceMappingURL=../80908-9fe41ef9519059675429.js.map