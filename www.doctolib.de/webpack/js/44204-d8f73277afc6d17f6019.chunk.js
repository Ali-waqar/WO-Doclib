(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [44204], {
        663586: (e, i, t) => {
            "use strict";
            t.d(i, {
                UI: () => v,
                ZP: () => k,
                zn: () => S
            });
            var o = t(184481),
                n = t(298449),
                s = t(668588),
                r = t(445884),
                a = t(545763),
                l = t(597043),
                d = t(453040),
                c = t(548403),
                m = t.n(c),
                h = t(294184),
                u = t.n(h),
                _ = t(71214),
                p = t.n(_),
                g = t(977954),
                f = t.n(g),
                x = t(785893);

            function Z(e, i, t) {
                return i in e ? Object.defineProperty(e, i, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[i] = t, e
            }
            const j = ["00:00", "01:00"],
                y = [
                    ["09:00", "13:00"],
                    ["14:00", "19:00"]
                ],
                b = e => f()(e).format("HH:mm"),
                v = ["09:00", "13:00"],
                S = e => {
                    const [i, t] = e.split(":");
                    return f()().hour(i).minute(t)
                };
            class N extends o.Component {
                constructor() {
                    super(...arguments), Z(this, "onSelectStartsAt", (e => {
                        const {
                            onChange: i,
                            range: t
                        } = this.props;
                        i([b(e), t[1]])
                    })), Z(this, "onSelectEndsAt", (e => {
                        const {
                            onChange: i,
                            range: t
                        } = this.props, o = b(e);
                        i([t[0], o])
                    }))
                }
                render() {
                    const {
                        range: e,
                        onRemove: i,
                        enabled: t,
                        removable: o,
                        day: n,
                        index: a
                    } = this.props, l = e[0], d = e[1];
                    return (0, x.jsxs)("div", {
                        className: "flex",
                        "data-design-system": "base",
                        children: [(0, x.jsxs)("div", {
                            className: "dl-openings-config-range",
                            children: [(0, x.jsx)("span", {
                                className: "dl-openings-config-wording",
                                children: r.Z.t("doctor_common.configuration.from")
                            }), (0, x.jsx)(s.Z, {
                                name: ["day", n, "range", a, "starts_at"].join("-"),
                                step: 15,
                                className: "dl-openings-config-timeselector",
                                value: S(l),
                                onChange: this.onSelectStartsAt,
                                disabled: !t
                            }), (0, x.jsxs)("span", {
                                className: "dl-openings-config-wording",
                                children: [" ", r.Z.t("doctor_common.configuration.to"), " "]
                            }), (0, x.jsx)(s.Z, {
                                name: ["day", n, "range", a, "ends_at"].join("-"),
                                step: 15,
                                className: "dl-openings-config-timeselector",
                                value: S(d),
                                onChange: this.onSelectEndsAt,
                                disabled: !t
                            })]
                        }), (0, x.jsx)("div", {
                            className: "dl-openings-config-range-remove",
                            children: t && o ? (0, x.jsx)("a", {
                                onClick: i,
                                children: (0, x.jsx)(p(), {
                                    style: {
                                        fill: "red"
                                    }
                                })
                            }) : (0, x.jsx)("div", {
                                style: {
                                    width: "16px"
                                }
                            })
                        })]
                    })
                }
            }
            const w = e => {
                let {
                    ranges: i
                } = e;
                if (!i.length) return v;
                const t = i[i.length - 1][1],
                    o = S(t).hour() + 1;
                if (o >= 24) return j;
                return [t, `${o}:00`]
            };
            class C extends o.Component {
                constructor() {
                    super(...arguments), Z(this, "onToggle", (() => {
                        const {
                            day: e,
                            enabled: i,
                            onChange: t,
                            openingHours: o
                        } = this.props;
                        if (i) t({
                            enabled: !1
                        });
                        else {
                            const i = o.findIndex((i => i.day === e)),
                                n = o.filter(((e, t) => e.enabled && t < i)).reverse()[0];
                            t({
                                enabled: !0,
                                ranges: n ? n.ranges : y
                            })
                        }
                    })), Z(this, "onAddRange", (() => {
                        const {
                            ranges: e,
                            onChange: i
                        } = this.props;
                        i({
                            ranges: [...e, w({
                                ranges: e
                            })]
                        })
                    })), Z(this, "onChangeRange", (e => i => {
                        const {
                            ranges: t,
                            onChange: o
                        } = this.props;
                        o({
                            ranges: t.map(((t, o) => o === e ? i : t))
                        })
                    })), Z(this, "onRemoveRange", (e => () => {
                        const {
                            ranges: i,
                            onChange: t
                        } = this.props;
                        t({
                            ranges: i.filter(((i, t) => e !== t))
                        })
                    }))
                }
                render() {
                    const {
                        day: e,
                        ranges: i,
                        enabled: t
                    } = this.props;
                    return (0, x.jsxs)(l.Z, {
                        container: !0,
                        children: [(0, x.jsx)(l.Z, {
                            item: !0,
                            smSize: 2,
                            xsSize: 9,
                            className: "dl-openings-config-day dl-margin-t-24",
                            children: (0, x.jsx)(d.Z, {
                                uiStyle: "body-s-bold",
                                className: "dl-openings-config-day-label",
                                children: m()(r.Z.t(`common.dateformat.weekdays.day_${e}`))
                            })
                        }), (0, x.jsx)(l.Z, {
                            item: !0,
                            smSize: 2,
                            xsSize: 1,
                            className: "dl-openings-config-day dl-margin-t-24",
                            children: (0, x.jsx)(n.Z, {
                                name: ["day", e, "enabled"].join("-"),
                                checked: t,
                                onChange: this.onToggle,
                                labelClassName: "dl-align-items-start dl-margin-t-4"
                            })
                        }), (0, x.jsx)(l.Z, {
                            item: !0,
                            smSize: !0,
                            children: (0, x.jsxs)("div", {
                                className: u()("dl-openings-config-ranges", {
                                    "dl-openings-config-ranges-disabled": !t
                                }),
                                children: [i.map(((o, n) => (0, x.jsx)(N, {
                                    range: o,
                                    onChange: this.onChangeRange(n),
                                    onRemove: this.onRemoveRange(n),
                                    enabled: t,
                                    removable: i.length > 1,
                                    day: e,
                                    index: n
                                }, n))), t ? (0, x.jsx)(a.Z, {
                                    uiStyle: "info-link",
                                    onClick: this.onAddRange,
                                    disabled: !t,
                                    children: r.Z.t("doctor_common.configuration.add_opening_hour")
                                }) : null]
                            })
                        })]
                    })
                }
            }
            const k = C
        },
        921114: (e, i, t) => {
            "use strict";
            t.d(i, {
                Z: () => h
            });
            var o = t(294184),
                n = t.n(o),
                s = t(445884),
                r = t(453040),
                a = t(940919),
                l = t(516590),
                d = t(800274);
            var c = t(24553),
                m = t(785893);
            const h = e => {
                let {
                    className: i,
                    position: t = "right",
                    ...o
                } = e;
                const h = (0, d.ZP)(),
                    u = (0, c.useNavigate)();
                return h ? null : (0, m.jsx)(a.Z, {
                    position: t,
                    className: n()("dl-login-button-nav", i),
                    onTap: () => {
                        (0, l.ZP)({
                            name: "logged_out_state_login_click",
                            details: {
                                context: "homepage"
                            }
                        }), u("/sessions/new")
                    },
                    title: s.Z.t("patient_mobile.root.login.title"),
                    "aria-haspopup": "true",
                    ...o,
                    children: (0, m.jsx)(r.Z, {
                        uiStyle: "body-s-bold",
                        color: "white",
                        children: s.Z.t("patient_mobile.root.login.title")
                    })
                })
            }
        },
        732930: (e, i, t) => {
            "use strict";
            t.d(i, {
                Z: () => F
            });
            var o = t(184481),
                n = t(24553),
                s = t(516590),
                r = t(5212),
                a = t(177140),
                l = t(445884),
                d = t(396693),
                c = t(929014),
                m = t(545763),
                h = t(784600),
                u = t(164544),
                _ = t(290988),
                p = t(297516),
                g = t(453040),
                f = t(520459),
                x = t(462814),
                Z = t(597043),
                j = t(366699),
                y = t(845126),
                b = t(653591),
                v = t(710270),
                S = t(580163),
                N = t(785893);
            const w = () => (0, N.jsxs)("div", {
                    children: [l.Z.t("patient_common.root.directory_modifications.professional_id"), (0, N.jsx)(b.Z, {
                        className: "dl-margin-l-4 dl-vertical-align-center",
                        tooltip: l.Z.t("patient_common.root.directory_modifications.professional_id_tooltip"),
                        placement: "right",
                        children: (0, N.jsx)(y.Z, {
                            color: "neutral-150",
                            name: "solid/square-info"
                        })
                    })]
                }),
                C = e => {
                    let {
                        data: i,
                        onSubmitted: t
                    } = e;
                    const {
                        title: s,
                        name_with_title: r,
                        specialities: a,
                        specialitiesById: d,
                        searchableBy: u,
                        regulation_sectors: _,
                        directory_doctor_id: p,
                        ...g
                    } = i, y = { ...g,
                        claims_ownership: !0,
                        asks_for_deletion: !0
                    }, [b, C] = (0, o.useState)(!1), [k, z] = (0, o.useState)(!1), I = (0, n.useNavigate)(), F = (0, S.ZP)(), {
                        submit: O
                    } = (0, v.Z)({
                        url: "/directory_modifications",
                        trigger: "submit",
                        method: "post",
                        onSuccess: t,
                        onFailure: e => {
                            let {
                                data: i
                            } = e;
                            return F({
                                message: i.error,
                                uiStyle: "error"
                            })
                        }
                    }), P = (e, i) => t => {
                        e.setValue(i, t.target.value)
                    };
                    return (0, N.jsx)(x.Z, {
                        onSubmit: e => {
                            e.claims_ownership && !k || O({
                                directory_modification: { ...e,
                                    directory_doctor_id: p,
                                    opening_hours: JSON.stringify(e.opening_hours)
                                }
                            })
                        },
                        defaultValues: y,
                        horizontal: !1,
                        autoComplete: "off",
                        onFirstTouch: () => {
                            C(!0)
                        },
                        children: e => (0, N.jsxs)(h.Z, {
                            className: "dl-margin-16 dl-padding-0",
                            children: [(0, N.jsx)(c.Z, {
                                variant: "deprecated-alert-interface",
                                uiStyle: "info",
                                className: "dl-rounded-borders dl-margin-b-24",
                                children: l.Z.t("profiles.directory_doctor_form.disclaimer")
                            }), (0, N.jsxs)(Z.Z, {
                                container: !0,
                                children: [(0, N.jsx)(Z.Z, {
                                    item: !0,
                                    className: "dl-padding-y-0",
                                    xsSize: 12,
                                    smSize: 6,
                                    children: (0, N.jsx)(j.Z, {
                                        field: "last_name",
                                        label: l.Z.t("patient_common.root.directory_modifications.last_name"),
                                        id: "modifications-last-name",
                                        onChange: P(e, "last_name"),
                                        value: e.values.last_name,
                                        autoComplete: "off"
                                    })
                                }), (0, N.jsx)(Z.Z, {
                                    item: !0,
                                    className: "dl-padding-y-0",
                                    xsSize: 12,
                                    smSize: 6,
                                    children: (0, N.jsx)(j.Z, {
                                        field: "first_name",
                                        label: l.Z.t("patient_common.root.directory_modifications.first_name"),
                                        id: "modifications-first-name",
                                        onChange: P(e, "first_name"),
                                        value: e.values.first_name,
                                        autoComplete: "off"
                                    })
                                }), (0, N.jsx)(Z.Z, {
                                    item: !0,
                                    className: "dl-padding-y-0",
                                    xsSize: 12,
                                    children: (0, N.jsx)(j.Z, {
                                        id: "modifications-professional-id",
                                        field: "professional_id",
                                        label: (0, N.jsx)(w, {}),
                                        placeholder: l.Z.t("patient_common.root.directory_modifications.professional_id_placeholder"),
                                        validate: e => e && (e.length < 8 || e.length > 11),
                                        autoComplete: "off"
                                    })
                                }), (0, N.jsx)(Z.Z, {
                                    item: !0,
                                    className: "dl-padding-y-0",
                                    xsSize: 12,
                                    children: (0, N.jsx)(j.Z, {
                                        id: "modifications-mobile-phone-number",
                                        field: "phone_number_prospect",
                                        label: l.Z.t("patient_common.root.directory_modifications.doctor_phone_number"),
                                        placeholder: l.Z.t("profiles.directory_doctor_form.phone_placeholder"),
                                        type: "phone-number",
                                        autoComplete: "off",
                                        required: !0
                                    })
                                }), (0, N.jsx)(Z.Z, {
                                    item: !0,
                                    className: "dl-padding-y-0",
                                    xsSize: 12,
                                    children: (0, N.jsx)(j.Z, {
                                        id: "modifications-email",
                                        field: "email",
                                        type: "email",
                                        placeholder: l.Z.t("profiles.directory_doctor_form.email_placeholder"),
                                        required: !0,
                                        autoComplete: "off",
                                        label: l.Z.t("patient_common.root.directory_modifications.doctor_email")
                                    })
                                }), (0, N.jsx)(Z.Z, {
                                    item: !0,
                                    className: "dl-padding-y-0",
                                    xsSize: 12,
                                    children: (0, N.jsx)(j.Z, {
                                        id: "deletion_reason",
                                        field: "deletion_reason",
                                        label: l.Z.t("profiles.directory_doctor_form.deletion_reason_label"),
                                        placeholder: l.Z.t("profiles.directory_doctor_form.deletion_reason_placeholder"),
                                        required: !0,
                                        options: [{
                                            value: "i_stopped_working",
                                            label: l.Z.t("patient_common.root.directory_modifications.i_stopped_working")
                                        }, {
                                            value: "leave_me_alone",
                                            label: l.Z.t("patient_common.root.directory_modifications.leave_me_alone")
                                        }]
                                    })
                                })]
                            }), (0, N.jsx)("div", {
                                className: "dl-padding-y-24",
                                children: (0, N.jsx)(f.default, {
                                    checked: k,
                                    onChange: () => z(!k),
                                    errorMessage: e.submitted && !k ? l.Z.t("patient_common.root.directory_modifications.checkbox_error") : null,
                                    message: l.Z.t("patient_common.root.directory_modifications.asks_for_consent")
                                })
                            }), (0, N.jsxs)("div", {
                                className: "dl-text-right",
                                children: [(0, N.jsx)(m.Z, {
                                    uiStyle: "info-link",
                                    onClick: () => I(-1),
                                    trackingId: "deletedirectory_cancel_button",
                                    children: l.Z.t("common.actions.cancel")
                                }), (0, N.jsx)(m.Z, {
                                    formNoValidate: !0,
                                    type: "submit",
                                    disabled: !b,
                                    trackingId: "deletedirectory_submit_button",
                                    children: l.Z.t("common.actions.validate")
                                })]
                            })]
                        })
                    })
                },
                k = () => (0, N.jsxs)("div", {
                    children: [(0, N.jsx)(y.Z, {
                        name: "circle-check",
                        color: "primary-110",
                        size: "medium"
                    }), (0, N.jsx)(g.Z, {
                        uiStyle: "title-l-bold",
                        className: "dl-margin-y-16",
                        children: l.Z.t("profiles.directory_doctor_form.thanks")
                    }), (0, N.jsx)(g.Z, {
                        uiStyle: "body-m-regular",
                        className: "dl-margin-t-24",
                        children: l.Z.t("profiles.directory_doctor_form.confirmation")
                    })]
                }),
                z = (0, r.Zz)(),
                I = z ? e => {
                    let {
                        children: i
                    } = e;
                    const t = (0, n.useNavigate)();
                    return (0, N.jsxs)(N.Fragment, {
                        children: [(0, N.jsx)(u.Z, {
                            size: "large",
                            children: (0, N.jsx)(m.Z, {
                                uiStyle: "link-primary",
                                leftIcon: "regular/angle-left",
                                onClick: () => t(-1),
                                trackingId: "deletedirectory_cancel_button",
                                children: l.Z.t("common.actions.back")
                            })
                        }), (0, N.jsx)(u.Z, {
                            margin: !0,
                            className: "dl-full-height",
                            children: (0, N.jsx)(h.Z, {
                                className: "dl-padding-16 dl-padding-0",
                                children: i
                            })
                        })]
                    })
                } : e => {
                    let {
                        children: i
                    } = e;
                    return (0, N.jsx)(p.Z, {
                        className: "dl-white-bg",
                        children: (0, N.jsx)(u.Z, {
                            className: "dl-full-height",
                            children: i
                        })
                    })
                },
                F = e => {
                    let {
                        directoryModifications: {
                            data: i
                        }
                    } = e;
                    const t = (0, n.useNavigate)(),
                        [h, u] = (0, o.useState)(null),
                        [p, f] = (0, o.useState)(!1),
                        [x, Z] = (0, o.useState)({});
                    return (0, o.useEffect)((() => {
                        var e;
                        const t = null === (e = window.current_account) || void 0 === e ? void 0 : e.id,
                            o = {
                                directory_doctor_id: i.directory_doctor_id,
                                country: (0, r.rZ)(),
                                device: (0, a._v)(),
                                ...t && {
                                    account_id: t
                                }
                            };
                        Z(o), (0, s.ZP)({
                            details: o,
                            name: "directory_delete_page_view"
                        })
                    }), []), (0, o.useEffect)((() => {
                        window.scrollTo(0, 0)
                    }), [p]), (0, N.jsx)(d.Z, {
                        value: x,
                        children: (0, N.jsx)(I, {
                            children: (0, N.jsxs)("div", {
                                className: "flex dl-flex-column dl-justify-between dl-full-height",
                                children: [(0, N.jsxs)("div", {
                                    children: [!p && (0, N.jsxs)(N.Fragment, {
                                        children: [(0, N.jsx)("div", {
                                            className: "dl-text-center dl-margin-y-24",
                                            children: (0, N.jsx)(g.Z, {
                                                uiStyle: "title-l-bold",
                                                children: (0, N.jsx)("strong", {
                                                    children: l.Z.t("profiles.directory_doctor_form.title_deletion")
                                                })
                                            })
                                        }), (0, N.jsx)(g.Z, {
                                            uiStyle: "body-s-bold",
                                            className: "dl-margin-b dl-margin-l",
                                            children: l.Z.t("profiles.directory_doctor_form.are_you_x", {
                                                name: i.name_with_title
                                            })
                                        }), (0, N.jsx)(_.Z, {
                                            type: z ? "radio" : "",
                                            name: "claim_ownership",
                                            isYesNoSelect: !0,
                                            value: h,
                                            onSelect: e => u(e),
                                            contentClassName: "flex dl-justify-start",
                                            className: "dl-flex-grow dl-justify-center dl-margin-l dl-margin-b-24"
                                        }), !1 === h && (0, N.jsx)(c.Z, {
                                            variant: "deprecated-alert-interface",
                                            uiStyle: "error",
                                            className: "dl-margin-x-16 dl-rounded-borders",
                                            children: l.Z.t("profiles.directory_doctor_form.not_the_practitioner_error")
                                        })]
                                    }), p && (0, N.jsx)(k, {})]
                                }), (!1 === h || p) && (0, N.jsx)("div", {
                                    className: "dl-text-center dl-margin-y-16",
                                    children: (0, N.jsx)(m.Z, {
                                        uiStyle: "info-link",
                                        onClick: () => t(-1),
                                        trackingId: p ? null : "deletedirectory_cancel_button",
                                        children: l.Z.t("profiles.directory_doctor_form.back")
                                    })
                                }), h && !p && (0, N.jsx)(C, {
                                    data: i,
                                    onSubmitted: () => f(!0)
                                })]
                            })
                        })
                    })
                }
        },
        453605: (e, i, t) => {
            "use strict";
            t.d(i, {
                Z: () => K
            });
            var o = t(184481),
                n = t(294184),
                s = t.n(n),
                r = t(288802),
                a = t(990626),
                l = t(78599),
                d = t(445884),
                c = t(164544),
                m = t(297516),
                h = t(784600),
                u = t(545763),
                _ = t(406288),
                p = t(571442),
                g = t.n(p),
                f = t(432073),
                x = t.n(f),
                Z = t(453040),
                j = t(710270);
            var y = t(785893);
            const b = e => {
                let {
                    directory_doctor_id: i,
                    withSubHeader: t = !1,
                    withB2BButton: n = !1
                } = e;
                const {
                    fetchKpis: s,
                    success: r,
                    data: l
                } = (0, j.Z)({
                    trigger: "fetchKpis",
                    url: `/directory_doctors/${i}/doctors_kpis`
                }), {
                    fetchDirectoryDoctor: c,
                    data: m = {},
                    loading: p
                } = (0, j.Z)({
                    trigger: "fetchDirectoryDoctor",
                    url: `/directory_modifications/new.json${window.location.search}`
                });
                (0, o.useEffect)((() => {
                    s(), c()
                }), []);
                const f = (0, o.useCallback)((() => {
                    if (p || !m) return null;
                    const {
                        data: {
                            speciality_id: e,
                            zip_code: i,
                            profile_page: t
                        }
                    } = m, o = `https://${a.ZP.WWW_SUBDOMAIN}.doctolib.${window.country}${t}`, n = Object.entries({
                        origin: "directory-doctor-website-desktop",
                        speciality_id: e,
                        utm_button: "body",
                        "utm_content-group": "directory_page",
                        "utm_page-url": encodeURIComponent(o),
                        utm_website: "doctolib_patients",
                        zipcode: i,
                        utm_step: "2"
                    }).map((e => {
                        let [i, t] = e;
                        return `${i}=${t}`
                    })).join("&");
                    return `https://${a.ZP.INFO_SUBDOMAIN}.doctolib.${window.country}/?${n}`
                }), [m, p]);
                if (!r || !l) return null;
                const {
                    area: b,
                    area_doctors_count: v,
                    telehealth_percentage: S,
                    patient_count: N,
                    telehealth: w,
                    speciality: C,
                    reduce_call_percentage_by_country: k
                } = l;
                return (0, y.jsx)(h.Z, {
                    className: "dl-margin-16",
                    header: (0, y.jsxs)("div", {
                        className: "dl-text-center",
                        children: [t && (0, y.jsxs)("p", {
                            className: "dl-text-neutral-090",
                            children: [" ", d.Z.t("profiles.doctors_kpi.sub_header"), " "]
                        }), (0, y.jsxs)(Z.Z, {
                            uiStyle: "body-s-bold",
                            component: "p",
                            children: [" ", d.Z.t("profiles.doctors_kpi.title"), " "]
                        })]
                    }),
                    headerProps: {
                        uiStyle: "light"
                    },
                    children: (0, y.jsxs)(_.Z, {
                        children: [(0, y.jsxs)(Z.Z, {
                            className: "dl-coronavirus-text-body",
                            children: [(0, y.jsxs)("div", {
                                className: "flex dl-margin-b-16",
                                children: [(0, y.jsx)(x(), {}), (0, y.jsxs)(Z.Z, {
                                    uiStyle: "body-s-bold",
                                    component: "div",
                                    className: "dl-margin-l",
                                    children: [" ", b, " "]
                                })]
                            }), (0, y.jsxs)("ul", {
                                className: "dl-padding-0 dl-ul-without-bullet",
                                children: [(0, y.jsxs)("li", {
                                    className: "flex",
                                    children: [(0, y.jsx)(g(), {
                                        className: "dl-check-position"
                                    }), (0, y.jsx)("div", {
                                        className: "dl-text-neutral-090 dl-margin-l",
                                        children: d.Z.t("profiles.doctors_kpi.first", {
                                            area_doctors_count: v.toLocaleString(),
                                            doctor_speciality: C
                                        })
                                    })]
                                }), w && S && (0, y.jsxs)("li", {
                                    className: "flex",
                                    children: [(0, y.jsx)(g(), {
                                        className: "dl-check-position"
                                    }), (0, y.jsx)("div", {
                                        className: "dl-text-neutral-090 dl-margin-l",
                                        children: d.Z.t("profiles.doctors_kpi.second", {
                                            telehealth_percentage: S
                                        })
                                    })]
                                }), (0, y.jsxs)("li", {
                                    className: "flex",
                                    children: [(0, y.jsx)(g(), {
                                        className: "dl-check-position"
                                    }), (0, y.jsx)("div", {
                                        className: "dl-text-neutral-090 dl-margin-l",
                                        children: d.Z.t("profiles.doctors_kpi.third", {
                                            reduce_call_percentage_by_country: k
                                        })
                                    })]
                                }), (0, y.jsxs)("li", {
                                    className: "flex",
                                    children: [(0, y.jsx)(g(), {
                                        className: "dl-check-position"
                                    }), (0, y.jsx)("div", {
                                        className: "dl-text-neutral-090 dl-margin-l",
                                        children: d.Z.t("profiles.doctors_kpi.fourth", {
                                            patient_count: (1e3 * Math.round(N / 1e3)).toLocaleString()
                                        })
                                    })]
                                })]
                            })]
                        }), n && (0, y.jsx)("div", {
                            className: "dl-text-center",
                            children: (0, y.jsx)(u.Z, {
                                uiStyle: "info-link",
                                className: "dl-uppercase",
                                href: f(),
                                target: "_blank",
                                id: "b2b_link",
                                disabled: p,
                                children: d.Z.t("profiles.doctors_kpi.b2b_link")
                            })
                        })]
                    })
                })
            };
            var v = t(290988),
                S = t(5212),
                N = t(348341),
                w = t.n(N),
                C = t(597043);
            const k = e => {
                let {
                    name_with_title: i,
                    showTitle: t
                } = e;
                return (0, y.jsxs)(C.Z, {
                    item: !0,
                    xsSize: 12,
                    smSize: 10,
                    className: "dl-padding-16 flex dl-align-items-center dl-justify-between dl-margin-t-32",
                    children: [t && (0, y.jsx)(Z.Z, {
                        uiStyle: "title-s-bold",
                        className: "directory-modification-title",
                        children: i
                    }), (0, y.jsx)("span", {
                        className: "directory-modification-lock-icon-container",
                        children: (0, y.jsx)(w(), {})
                    }), (0, y.jsx)("p", {
                        children: d.Z.t("patient_common.root.directory_modifications.header_description_variant")
                    })]
                })
            };
            var z = t(24553),
                I = t(462814),
                F = t(366699),
                O = t(647087),
                P = t(258637),
                T = t(201477),
                R = t(520459),
                A = t(755506),
                E = t(396026),
                M = t.n(E),
                V = t(952893),
                B = t(663586),
                D = t(812396);

            function $(e, i, t) {
                return i in e ? Object.defineProperty(e, i, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[i] = t, e
            }
            const H = e => {
                let {
                    withSuggestions: i
                } = e;
                return [...M()(1, 7), 0].map((e => ({
                    day: e,
                    ranges: i ? [B.UI] : [],
                    enabled: !1
                })))
            };
            class q extends o.Component {
                constructor() {
                    super(...arguments), $(this, "state", {
                        openingHours: this.props.openingHours || H(this.props)
                    }), $(this, "onDayChange", (e => i => this.setState((t => ({
                        openingHours: t.openingHours.map((t => t.day === e ? { ...t,
                            ...i
                        } : t))
                    })), (() => this.props.onChange && this.props.onChange(this.state.openingHours)))))
                }
                render() {
                    const {
                        name: e,
                        preview: i
                    } = this.props, {
                        openingHours: t
                    } = this.state;
                    return (0, y.jsxs)("div", {
                        className: "dl-openings-config",
                        children: [(0, y.jsx)("input", {
                            type: "hidden",
                            name: e,
                            value: JSON.stringify(t)
                        }), (0, V.Z)(t.map((e => {
                            let {
                                day: i,
                                ranges: o,
                                enabled: n,
                                kind: s
                            } = e;
                            return (0, y.jsx)(B.ZP, {
                                day: i,
                                ranges: o,
                                enabled: n,
                                onChange: this.onDayChange(i),
                                openingHours: t,
                                kind: s
                            }, i)
                        })), (0, y.jsx)(A.Z, {})), t.filter((e => {
                            let {
                                enabled: i
                            } = e;
                            return i
                        })).length ? (0, y.jsxs)("div", {
                            children: [(0, y.jsx)(A.Z, {
                                style: {
                                    margin: "0px -14px 7px -14px"
                                }
                            }), (0, y.jsxs)(C.Z, {
                                container: !0,
                                children: [(0, y.jsx)(C.Z, {
                                    item: !0,
                                    xsSize: 3,
                                    children: i.description
                                }), (0, y.jsx)(C.Z, {
                                    item: !0,
                                    xsSize: !0,
                                    children: (0, y.jsxs)("div", {
                                        children: [(0, y.jsx)(Z.Z, {
                                            uiStyle: "body-s-bold",
                                            children: i.title
                                        }), (0, y.jsx)("div", {
                                            children: t.filter((e => {
                                                let {
                                                    enabled: i,
                                                    ranges: t
                                                } = e;
                                                return i && t.length
                                            })).map((e => {
                                                let {
                                                    ranges: i,
                                                    ...t
                                                } = e;
                                                return { ...t,
                                                    ranges: i
                                                }
                                            })).map((e => (0, y.jsx)(D.Z, { ...e
                                            }, e.day)))
                                        })]
                                    })
                                })]
                            })]
                        }) : null]
                    })
                }
            }
            $(q, "defaultProps", {
                withSuggestions: !0
            });
            var U = t(100686),
                G = t(452838),
                L = t(53500),
                Y = t(924722),
                J = t(580163);
            const W = e => {
                    let {
                        data: i,
                        claimsOwnership: t
                    } = e;
                    const {
                        title: n,
                        name_with_title: s,
                        specialities: r,
                        specialitiesById: l,
                        searchableBy: c,
                        regulation_sectors: m,
                        directory_doctor_id: _,
                        ...p
                    } = i, g = (0, z.useNavigate)(), f = (0, J.ZP)(), [x, Z] = (0, o.useState)(t), v = {
                        claims_ownership: x,
                        ...p
                    }, [S, N] = (0, o.useState)(!1), [w, k] = (0, o.useState)(!1), A = r.reduce(((e, i) => (e[i.id] = i.name, e)), {}), E = m.reduce(((e, i) => (e[i.id] = i.name, e)), {}), {
                        submit: M
                    } = (0, j.Z)({
                        url: "/directory_modifications",
                        trigger: "submit",
                        method: "post",
                        onSuccess: e => {
                            let {
                                data: {
                                    data: i
                                }
                            } = e;
                            const {
                                id: t,
                                token: o,
                                prospect_id: n
                            } = i;
                            g({
                                pathname: `/directory_modifications/edit/${t}`,
                                search: (0, z.createSearchParams)({
                                    claims_ownership: x,
                                    token: o,
                                    directory_doctor_id: _,
                                    ...n ? {
                                        lead_id: n
                                    } : {}
                                }).toString()
                            })
                        },
                        onFailure: e => {
                            let {
                                data: i
                            } = e;
                            return f({
                                message: i.error,
                                uiStyle: "error"
                            })
                        }
                    }), V = (e, i) => t => {
                        e.setValue(i, t.target.value)
                    }, B = (e, i) => t => {
                        const o = "true" === t.target.value;
                        if (e.setValue(i, o), "claims_ownership" === i) {
                            if (Z(o), o) return;
                            k(!1), e.setValue("email", ""), e.setError("email", "")
                        }
                    }, D = (e, i) => t => {
                        e.setValue(i, t.target.checked)
                    };
                    return (0, y.jsx)(I.Z, {
                        onSubmit: e => {
                            e.claims_ownership && !w || M({
                                directory_modification: { ...e,
                                    directory_doctor_id: _,
                                    opening_hours: JSON.stringify(e.opening_hours)
                                }
                            })
                        },
                        defaultValues: v,
                        horizontal: !1,
                        autoComplete: "off",
                        onFirstTouch: () => {
                            N(!0)
                        },
                        children: e => (0, y.jsxs)(y.Fragment, {
                            children: [(0, y.jsx)(h.Z, {
                                className: "dl-margin-16",
                                children: (0, y.jsxs)(C.Z, {
                                    container: !0,
                                    children: [(0, y.jsxs)(C.Z, {
                                        item: !0,
                                        xsSize: 12,
                                        smSize: 6,
                                        children: [(0, y.jsx)(O.Z, {
                                            htmlFor: "modifications-last-name",
                                            children: d.Z.t("patient_common.root.directory_modifications.last_name")
                                        }), (0, y.jsx)(P.Z, {
                                            id: "modifications-last-name",
                                            onChange: V(e, "last_name"),
                                            value: e.values.last_name,
                                            autoComplete: "off"
                                        })]
                                    }), (0, y.jsxs)(C.Z, {
                                        item: !0,
                                        xsSize: 12,
                                        smSize: 6,
                                        children: [(0, y.jsx)(O.Z, {
                                            htmlFor: "modifications-first-name",
                                            children: d.Z.t("patient_common.root.directory_modifications.first_name")
                                        }), (0, y.jsx)(P.Z, {
                                            id: "modifications-first-name",
                                            onChange: V(e, "first_name"),
                                            value: e.values.first_name,
                                            autoComplete: "off"
                                        })]
                                    }), e.values.claims_ownership && (0, y.jsxs)(y.Fragment, {
                                        children: [(0, y.jsxs)(C.Z, {
                                            item: !0,
                                            xsSize: 12,
                                            smSize: 6,
                                            children: [(0, y.jsx)(O.Z, {
                                                htmlFor: "modifications-email",
                                                children: d.Z.t("patient_common.root.directory_modifications.doctor_email")
                                            }), (0, y.jsx)(F.Z, {
                                                id: "modifications-email",
                                                field: "email",
                                                type: "email",
                                                required: !0,
                                                autoComplete: "off",
                                                label: null
                                            })]
                                        }), (0, y.jsxs)(C.Z, {
                                            item: !0,
                                            xsSize: 12,
                                            smSize: 6,
                                            children: [(0, y.jsx)(O.Z, {
                                                htmlFor: "modifications-phone-number",
                                                children: d.Z.t("patient_common.root.directory_modifications.doctor_phone_number")
                                            }), (0, y.jsx)(F.Z, {
                                                id: "modifications-mobile-phone-number",
                                                field: "mobile_phone_number",
                                                type: "phone_number",
                                                autoComplete: "off",
                                                label: null,
                                                required: !0
                                            })]
                                        })]
                                    }), (0, y.jsxs)(C.Z, {
                                        item: !0,
                                        xsSize: 12,
                                        smSize: 12,
                                        children: [(0, y.jsx)(O.Z, {
                                            htmlFor: "modifications-speciality",
                                            children: d.Z.t("patient_common.root.directory_modifications.speciality")
                                        }), (0, y.jsx)(G.Z, {
                                            onChange: V(e, "speciality_id"),
                                            id: "modifications-speciality",
                                            block: !0,
                                            options: A,
                                            value: e.values.speciality_id || ""
                                        }), (0, y.jsx)(U.Z, {
                                            size: "large"
                                        })]
                                    })]
                                })
                            }), (0, y.jsxs)(h.Z, {
                                className: "dl-margin-16",
                                children: [(0, y.jsx)(O.Z, {
                                    htmlFor: "modifications-address",
                                    children: d.Z.t("patient_common.root.directory_modifications.practice_location")
                                }), (0, y.jsx)(P.Z, {
                                    id: "modifications-address",
                                    value: e.values.address || "",
                                    onChange: V(e, "address"),
                                    autoComplete: "off"
                                }), (0, y.jsx)(U.Z, {}), (0, y.jsxs)(C.Z, {
                                    container: !0,
                                    children: [(0, y.jsxs)(C.Z, {
                                        item: !0,
                                        xsSize: 12,
                                        smSize: 4,
                                        children: [(0, y.jsx)(P.Z, {
                                            id: "modifications-zip-code",
                                            value: e.values.zip_code || "",
                                            autoComplete: "off",
                                            onChange: V(e, "zip_code")
                                        }), (0, y.jsx)(U.Z, {})]
                                    }), (0, y.jsxs)(C.Z, {
                                        item: !0,
                                        xsSize: 12,
                                        smSize: 8,
                                        children: [(0, y.jsx)(P.Z, {
                                            autoComplete: "off",
                                            value: e.values.city || "",
                                            onChange: V(e, "city")
                                        }), (0, y.jsx)(U.Z, {})]
                                    })]
                                }), (0, y.jsx)(U.Z, {}), (0, y.jsxs)(C.Z, {
                                    container: !0,
                                    children: [(0, y.jsxs)(C.Z, {
                                        item: !0,
                                        xsSize: 12,
                                        smSize: 6,
                                        children: [(0, y.jsx)(O.Z, {
                                            htmlFor: "modifications-phone-number",
                                            children: d.Z.t("patient_common.root.directory_modifications.practice_phone_number")
                                        }), (0, y.jsx)(F.Z, {
                                            id: "modifications-phone-number",
                                            field: "phone_number",
                                            type: "phone_number",
                                            autoComplete: "off",
                                            label: null,
                                            required: !0,
                                            style: {
                                                margin: 0
                                            }
                                        }), (0, y.jsx)(U.Z, {
                                            size: "large"
                                        })]
                                    }), (0, y.jsxs)(C.Z, {
                                        item: !0,
                                        xsSize: 12,
                                        smSize: 6,
                                        children: [(0, y.jsx)(O.Z, {
                                            htmlFor: "modifications-fax-number",
                                            children: d.Z.t("patient_common.root.directory_modifications.fax_number")
                                        }), (0, y.jsx)(P.Z, {
                                            id: "modifications-fax-number",
                                            autoComplete: "off",
                                            value: e.values.fax_number || "",
                                            onChange: V(e, "fax_number")
                                        }), (0, y.jsx)(U.Z, {
                                            size: "large"
                                        })]
                                    }), (0, y.jsxs)(C.Z, {
                                        item: !0,
                                        xsSize: 12,
                                        smSize: 6,
                                        children: [(0, y.jsxs)(O.Z, {
                                            children: [" ", d.Z.t("patient_common.root.directory_modifications.parking")]
                                        }), (0, y.jsxs)(L.Z, {
                                            name: "private-parking",
                                            value: e.values.private_parking,
                                            onChange: V(e, "private_parking"),
                                            children: [(0, y.jsx)(Y.Z, {
                                                value: "yes",
                                                label: d.Z.t("common.yes")
                                            }), (0, y.jsx)(Y.Z, {
                                                value: "none",
                                                label: d.Z.t("common.no")
                                            })]
                                        }), (0, y.jsx)(U.Z, {
                                            size: "large"
                                        })]
                                    }), (0, y.jsxs)(C.Z, {
                                        item: !0,
                                        xsSize: 12,
                                        smSize: 6,
                                        children: [(0, y.jsx)(O.Z, {
                                            htmlFor: "modifications-website",
                                            children: d.Z.t("patient_common.root.directory_modifications.practice_website")
                                        }), (0, y.jsx)(P.Z, {
                                            id: "modifications-website",
                                            value: e.values.website || "",
                                            autoComplete: "off",
                                            onChange: V(e, "website")
                                        }), (0, y.jsx)(U.Z, {
                                            size: "large"
                                        })]
                                    })]
                                })]
                            }), (0, y.jsx)(h.Z, {
                                className: "dl-margin-16",
                                children: (0, y.jsxs)(C.Z, {
                                    container: !0,
                                    children: [(0, y.jsxs)(C.Z, {
                                        item: !0,
                                        xsSize: 12,
                                        smSize: 6,
                                        children: [(0, y.jsx)(O.Z, {
                                            htmlFor: "modifications-regulation-sector",
                                            children: d.Z.t("patient_common.root.directory_modifications.regulation_sector")
                                        }), (0, y.jsx)(G.Z, {
                                            id: "modifications-regulation-sector",
                                            value: e.values.regulation_sector || "",
                                            block: !0,
                                            options: E,
                                            onChange: V(e, "regulation_sector")
                                        }), (0, y.jsx)(U.Z, {
                                            size: "large"
                                        })]
                                    }), (0, a.LA)("practitioner_configuration_fees") && (0, y.jsxs)(C.Z, {
                                        item: !0,
                                        xsSize: 12,
                                        smSize: 6,
                                        children: [(0, y.jsx)(O.Z, {
                                            children: d.Z.t("patient_common.root.directory_modifications.insurance_card_accepted")
                                        }), (0, y.jsxs)(L.Z, {
                                            value: e.values.insurance_card,
                                            name: "insurance-card",
                                            onChange: B(e, "insurance_card"),
                                            children: [(0, y.jsx)(Y.Z, {
                                                value: !0,
                                                label: d.Z.t("common.yes")
                                            }), (0, y.jsx)(Y.Z, {
                                                value: !1,
                                                label: d.Z.t("common.no")
                                            })]
                                        }), (0, y.jsx)(U.Z, {
                                            size: "large"
                                        })]
                                    })]
                                })
                            }), e.values.claims_ownership && (0, y.jsxs)(h.Z, {
                                className: "dl-margin-16",
                                children: [(0, y.jsx)(O.Z, {
                                    htmlFor: "modifications-opening-hours",
                                    children: d.Z.t("patient_common.root.directory_modifications.opening_hours")
                                }), (0, y.jsx)("div", {
                                    id: "modifications-opening-hours",
                                    children: (0, y.jsx)(q, {
                                        opening_hours: e.values.opening_hours,
                                        withSuggestions: !1,
                                        onChange: i => e.setValue("opening_hours", i),
                                        preview: {
                                            title: d.Z.t("configuration.practices.index.opening_hours"),
                                            description: d.Z.t("configuration.practices.index.opening_hours_preview")
                                        }
                                    })
                                })]
                            }), e.values.claims_ownership && (0, y.jsxs)(y.Fragment, {
                                children: [(0, y.jsxs)(h.Z, {
                                    className: "dl-margin-16",
                                    children: [(0, y.jsx)(T.Z, {
                                        label: d.Z.t("patient_common.root.directory_modifications.asks_for_deletion"),
                                        value: e.values.asks_for_deletion || "",
                                        onChange: D(e, "asks_for_deletion")
                                    }), (0, y.jsx)(U.Z, {}), e.values.asks_for_deletion && (0, y.jsx)("div", {
                                        className: "dl-padding-b-16",
                                        children: (0, y.jsxs)(L.Z, {
                                            value: e.values.deletion_reason || "",
                                            onChange: V(e, "deletion_reason"),
                                            name: "deletion-reason",
                                            children: [(0, y.jsx)(Y.Z, {
                                                value: "i_stopped_working",
                                                label: d.Z.t("patient_common.root.directory_modifications.i_stopped_working")
                                            }), (0, y.jsx)(Y.Z, {
                                                value: "leave_me_alone",
                                                label: d.Z.t("patient_common.root.directory_modifications.leave_me_alone")
                                            })]
                                        })
                                    }), (0, y.jsx)(P.Z, {
                                        placeholder: d.Z.t("patient_common.root.directory_modifications.contributor.notes"),
                                        onChange: V(e, "notes"),
                                        autoComplete: "off",
                                        multiline: !0,
                                        rows: "3"
                                    })]
                                }), (0, y.jsx)(b, {
                                    directory_doctor_id: _
                                }), (0, y.jsx)(h.Z, {
                                    className: "dl-margin-16",
                                    children: (0, y.jsx)(R.default, {
                                        checked: w,
                                        onChange: () => k(!w),
                                        errorMessage: e.submitted && !w ? d.Z.t("patient_common.root.directory_modifications.checkbox_error") : null,
                                        message: d.Z.t("patient_common.root.directory_modifications.asks_for_consent")
                                    })
                                })]
                            }), !e.values.claims_ownership && (0, y.jsx)(h.Z, {
                                className: "dl-margin-16",
                                children: (0, y.jsx)(T.Z, {
                                    checked: e.values.no_longer_working || !1,
                                    label: d.Z.t("patient_common.root.directory_modifications.no_longer_working"),
                                    onChange: D(e, "no_longer_working")
                                })
                            }), (0, y.jsx)("div", {
                                className: "dl-padding-x-16",
                                children: (0, y.jsx)(u.Z, {
                                    formNoValidate: !0,
                                    type: "submit",
                                    block: !0,
                                    disabled: !S,
                                    children: d.Z.t("common.actions.send")
                                })
                            })]
                        })
                    })
                },
                K = e => {
                    let {
                        showTitle: i,
                        directoryModifications: {
                            data: t
                        }
                    } = e;
                    const {
                        "is-doctor": n
                    } = (0, l.e3)(window.location.search);
                    (0, o.useEffect)((() => {
                        r.Z.pushToCustomDataLayer({
                            directory_id: t.directory_doctor_id
                        }), r.Z.sendGtmPageView(a.ZP.GTM_CONTENT_GROUPS.DIRECTORY_MODIFICATIONS)
                    }), []);
                    const [_, p] = (0, o.useState)("1" === n || null), [g, f] = (0, o.useState)(!1), x = (0, S.Zz)();
                    return (0, y.jsx)(m.Z, {
                        children: (0, y.jsxs)(c.Z, {
                            children: [(0, y.jsx)(k, {
                                showTitle: i,
                                name_with_title: t.name_with_title
                            }), g ? (0, y.jsx)(W, {
                                data: t,
                                claimsOwnership: _
                            }) : (0, y.jsxs)(y.Fragment, {
                                children: [(0, y.jsxs)(h.Z, {
                                    className: "dl-margin-16 dl-margin-t-32",
                                    children: [(0, y.jsxs)("div", {
                                        className: s()({
                                            "flex dl-align-items-baseline": x
                                        }),
                                        children: [(0, y.jsx)("p", {
                                            className: "dl-margin-r",
                                            children: d.Z.t("profiles.directory_doctor_form.are_you_x", {
                                                name: t.name_with_title
                                            })
                                        }), (0, y.jsx)(v.Z, {
                                            name: "claim_ownership",
                                            isYesNoSelect: !0,
                                            value: _,
                                            onSelect: e => p(e)
                                        })]
                                    }), (0, y.jsx)(u.Z, {
                                        block: !0,
                                        className: "dl-margin-t-32",
                                        disabled: null == _,
                                        onClick: () => {
                                            r.Z.trackGtmEvent({
                                                category: a.ZP.GTM_CATEGORIES.DIRECTORY_MODIFICATIONS_QUALIFICATION,
                                                action: _ ? "takeControlOfYourPage" : "editInformations"
                                            }), f(!0), window.scrollTo({
                                                top: 0,
                                                left: 0,
                                                behavior: "smooth"
                                            })
                                        },
                                        children: _ ? d.Z.t("patient_common.root.directory_modifications.update_page") : d.Z.t("patient_common.root.directory_modifications.update_infos")
                                    })]
                                }), (0, y.jsx)(b, {
                                    directory_doctor_id: t.directory_doctor_id,
                                    withSubHeader: !0,
                                    withB2BButton: !0
                                })]
                            })]
                        })
                    })
                }
        },
        348341: (e, i, t) => {
            var o = t(184481);
            const n = o.forwardRef((function(e, i) {
                return o.createElement("svg", { ...e,
                    ref: i
                }, o.createElement("path", {
                    d: "M15.5 8A1.5 1.5 0 0 1 17 9.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-7A1.5 1.5 0 0 1 4.5 8h1V6.5A4.506 4.506 0 0 1 10.012 2C12.5 2.006 14.5 4.056 14.5 6.544V8h1zM7 6.5V8h6V6.5c0-1.653-1.347-3-3-3s-3 1.347-3 3zm8.5 10v-7h-11v7h11z"
                }))
            }));
            n.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "currentColor"
            }, e.exports = n, n.default = n
        },
        286209: (e, i, t) => {
            var o = t(184481);
            const n = o.forwardRef((function(e, i) {
                return o.createElement("svg", { ...e,
                    ref: i
                }, o.createElement("path", {
                    d: "M9.87 0c2.75-.03 5.12.9 7.1 2.83a9.7 9.7 0 0 1 3.03 7 9.66 9.66 0 0 1-2.85 7.1c-1.93 2-4.27 3-7.02 3.07a9.66 9.66 0 0 1-7.1-2.85c-2-1.93-3-4.27-3.03-7.02a9.51 9.51 0 0 1 2.83-7.1c1.94-2 4.3-3 7.04-3.03M11 3.3c-.6 0-1.08.18-1.4.53-.35.34-.5.7-.5 1.08-.04.45.07.77.3 1 .26.23.62.35 1.08.35.55 0 1-.16 1.33-.48.37-.32.5-.7.5-1.17 0-.85-.4-1.28-1.3-1.28m-2.6 12.9c.44 0 1.05-.2 1.83-.56a8.26 8.26 0 0 0 2.3-1.7l-.4-.52c-.68.53-1.2.8-1.55.8-.2 0-.24-.3-.1-.84l.92-3.5c.35-1.4.2-2.08-.5-2.08-.44 0-1.1.2-1.94.63-.86.42-1.7.96-2.5 1.63l.35.55c.77-.5 1.3-.74 1.6-.74.2 0 .2.23 0 .72l-.76 3.3c-.37 1.5-.13 2.27.74 2.27"
                }))
            }));
            n.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20"
            }, e.exports = n, n.default = n
        }
    }
]);
//# sourceMappingURL=../44204-a8728b583f31aa96836c.js.map