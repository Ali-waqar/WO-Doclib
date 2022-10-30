"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [32353], {
        697575: (e, t, i) => {
            i.d(t, {
                Z: () => I
            });
            var a = i(184481),
                n = i.n(a),
                o = i(977954),
                l = i.n(o),
                s = i(294184),
                r = i.n(s),
                c = i(445884),
                d = i(929014),
                p = i(784600),
                m = i(545763),
                u = i(179522),
                _ = i(755506),
                h = i(975645),
                g = i(406288),
                b = i(591035),
                x = i(785893);
            const v = e => {
                let {
                    leftIcon: t,
                    onTap: i,
                    children: a
                } = e;
                return (0, x.jsx)(m.Z, {
                    className: "dl-appointment-list-item-button",
                    uiStyle: "link-primary",
                    leftIcon: t,
                    onTap: i,
                    block: !0,
                    children: a
                })
            };
            var Z = i(574682),
                j = i(952893),
                k = i(162622),
                f = i(889736),
                y = i(192772),
                N = i(646823),
                w = i(5212),
                S = (i(360052), i(396693));
            const C = e => {
                    var t, i, n, o;
                    let {
                        item: s,
                        onTap: y,
                        selected: S,
                        past: C,
                        floating: P,
                        compact: I,
                        border: T,
                        withButtons: B = !0,
                        className: A,
                        transitionRouter: q
                    } = e;
                    const z = l()(s.start_date).isAfter();
                    let E;
                    s.appointment_alert && s.appointment_alert.active && (E = (0, x.jsx)(d.Z, {
                        uiStyle: "info",
                        label: c.Z.t("patient_mobile.root.account.appointments.alert_enabled"),
                        variant: "banner",
                        size: "small"
                    }));
                    const D = {
                            danger: s.no_show || (null === (t = s.surcharge) || void 0 === t ? void 0 : t.unpaid),
                            warning: s.canceled,
                            "light-blue": S,
                            dark: !0
                        },
                        M = s.telehealth && !I && B,
                        $ = M ? (0, Z.R)({
                            appointment: s,
                            future: z,
                            compact: !0
                        }) : null;
                    return (0, x.jsxs)(p.Z, {
                        header: (0, x.jsx)(k.Z, {
                            telehealth: s.telehealth,
                            startDate: s.start_date,
                            isApptCanceled: s.canceled
                        }),
                        onTap: e => y ? (e.stopPropagation(), y({
                            appointment: s
                        })) : ((0, w.rl)() && s.needs_preparation || (q ? q.show(`/account/appointments/details/${s.id}`) : window.location.pathname = `/account/appointments/details/${s.id}`), e.stopPropagation(), null),
                        headerProps: {
                            uiStyle: Object.entries(D).find((e => {
                                let [, t] = e;
                                return t
                            }))[0],
                            className: "flex dl-justify-between"
                        },
                        className: r()("dl-appointment-item", "dl-padding-0", {
                            "dl-appointment-item-selected": S,
                            "dl-appointment-item-past": C && !S,
                            "dl-appointment-item-cancel": s.canceled,
                            "dl-appointment-item-no-show": s.no_show
                        }, A),
                        DEPRECATED_floating: P,
                        border: T,
                        children: [E, (0, j.Z)([(0, x.jsx)(f.ZP, {
                            status: null === (i = s.appointment_request_entry) || void 0 === i ? void 0 : i.status
                        }, "appointment-request-status"), s.profile ? (0, x.jsx)(g.Z, {
                            children: (0, x.jsx)(b.Z, {
                                compact: !0,
                                tappable: B,
                                doctor: s.profile,
                                substitute: s.substitute_name,
                                substitution_wording: s.substitution_wording
                            })
                        }, "profile") : null, s.show_patient && (0, x.jsx)(g.Z, {
                            contentClassName: "dl-padding-y-0",
                            children: (0, x.jsxs)(u.Z, {
                                border: !1,
                                className: "dl-padding-0",
                                children: [(0, x.jsx)(u.Z.Icon, {
                                    name: "solid/user",
                                    color: "neutral-090"
                                }), (0, x.jsx)(u.Z.Description, {
                                    children: (0, h.WU)((null === (n = s.patient) || void 0 === n ? void 0 : n.master_patient) || s.patient)
                                })]
                            })
                        }, "patient"), $ ? (0, x.jsx)(a.Fragment, {
                            children: $
                        }, `telehealth-section-${s.id}`) : null, B && (0, N.fJ)({
                            appointment: s,
                            future: z
                        }) && !M && (0, x.jsx)(v, {
                            leftIcon: "clipboard-list",
                            children: c.Z.t("helpers.appointment.prepare")
                        }, "prepare-appointment"), B && (null === (o = s.surcharge) || void 0 === o ? void 0 : o.unpaid) && (0, x.jsx)(m.Z, {
                            "data-test": "AppointmentsListItemPaySurcharge",
                            uiStyle: "danger",
                            block: !0,
                            onTap: e => {
                                q.show(`/surcharges/${s.surcharge.uuid}`), e.stopPropagation()
                            },
                            children: c.Z.t("patient_mobile.root.account.appointments.pay_the_surcharge")
                        }, "pay_surcharge")], (0, x.jsx)(_.Z, {}))]
                    })
                },
                P = n().memo(C),
                I = (0, y.v8)((e => {
                    var t, i;
                    const a = (0, f.qs)(null === (t = e.item) || void 0 === t || null === (i = t.appointment_request_entry) || void 0 === i ? void 0 : i.status);
                    return (0, x.jsx)(S.Z, {
                        value: {
                            source: a ? "appointment_request_edition" : "appointment_view",
                            type: "appointment_list"
                        },
                        children: (0, x.jsx)(P, { ...e
                        })
                    })
                }))
        },
        237863: (e, t, i) => {
            i.d(t, {
                Z: () => N
            });
            var a = i(5212),
                n = i(990626),
                o = i(288802),
                l = i(445884),
                s = i(545763),
                r = i(845126),
                c = i(453040);
            const d = i.p + "c30b33d9dfde32fe8d4d.png";
            var p = i(785893);
            const m = () => (0, p.jsxs)("div", {
                className: "dl-b2b-section flex dl-justify-between dl-layout-align-items-start",
                children: [(0, p.jsxs)("div", {
                    className: "dl-flex-column dl-flex-start",
                    children: [(0, p.jsx)(c.Z, {
                        uiStyle: "title-l-bold",
                        className: "dl-margin-0 dl-padding-r-4",
                        component: "h2",
                        children: l.Z.t("static_pages.homepage.b2b_features.title")
                    }), (0, p.jsx)(c.Z, {
                        uiStyle: "title-s-bold",
                        className: "dl-b2b-subtitle dl-margin-t-8 dl-margin-b-24",
                        color: "neutral-090",
                        children: l.Z.t("static_pages.homepage.b2b_features.subtitle")
                    }), [{
                        icon: "stopwatch",
                        i18nKey: "patient_common.root.directory.info_usp.values.first"
                    }, {
                        icon: "eye",
                        i18nKey: "patient_common.root.directory.info_usp.values.second"
                    }, {
                        icon: "hands-holding-heart",
                        i18nKey: "patient_common.root.directory.info_usp.values.third"
                    }, {
                        icon: "house-person-leave",
                        i18nKey: "patient_common.root.directory.info_usp.values.fourth"
                    }].map((e => {
                        let {
                            icon: t,
                            i18nKey: i
                        } = e;
                        return (0, p.jsxs)("div", {
                            className: "flex dl-margin-b-8",
                            children: [(0, p.jsx)(r.Z, {
                                name: t,
                                className: "dl-margin-r-8 dl-margin-t-4 dl-flex-shrink-zero"
                            }), (0, p.jsx)(c.Z, {
                                children: l.Z.t(i)
                            })]
                        }, t)
                    })), (0, p.jsx)(s.Z, {
                        uiStyle: "outlined",
                        target: "_blank",
                        className: "dl-b2b-button",
                        href: `https://${n.ZP.INFO_SUBDOMAIN}.doctolib.${(0,a.rZ)()}/?utm_button=body&utm_content-group=homepage&utm_page-url=${window.location.href}&utm_website=doctolib_patients`,
                        onClick: () => {
                            o.Z.trackGtmEvent({
                                category: o.Z.getCurrentPageType(),
                                action: "b2b",
                                label: "moreInfo"
                            })
                        },
                        children: l.Z.t("static_pages.homepage.b2b_features.discover_doctolib_pro")
                    })]
                }), (0, p.jsx)("img", {
                    className: "dl-b2b-image",
                    src: d,
                    alt: ""
                })]
            });
            var u = i(673976),
                _ = i(642862),
                h = i(503860),
                g = i(784600),
                b = i(406288),
                x = i(516590);
            i(227376);
            const v = () => (0, p.jsx)(g.Z, {
                    id: "promote-security-banner",
                    fullWidth: !0,
                    className: "dl-rounded-borders dl-hp-pc-card dl-padding-0",
                    children: (0, p.jsx)(b.Z, {
                        contentClassName: "dl-hp-pc-container",
                        children: (0, p.jsx)("div", {
                            className: "dl-hp-pc-content",
                            children: (0, p.jsxs)("div", {
                                className: "dl-hp-pc-fixed-width",
                                children: [(0, p.jsx)(c.Z, {
                                    uiStyle: "title-l-bold",
                                    className: "dl-hp-pc-title",
                                    component: "h2",
                                    children: l.Z.t("static_pages.homepage.promote_security.title")
                                }), (0, p.jsx)(c.Z, {
                                    uiStyle: "body-s-regular",
                                    className: "dl-margin-t-16",
                                    component: "div",
                                    children: l.Z.t("static_pages.homepage.promote_security.text")
                                }), (0, p.jsx)(s.Z, {
                                    className: "dl-hp-pc-button dl-margin-t-32",
                                    target: "_blank",
                                    href: l.Z.t("static_pages.homepage.promote_security.link_href"),
                                    onClick: () => (0, x.ZP)({
                                        name: "homepage_banner_promote_security"
                                    }, {
                                        schema: "patient"
                                    }),
                                    children: l.Z.t("static_pages.homepage.promote_security.button_text")
                                })]
                            })
                        })
                    })
                }),
                Z = i.p + "d3c702f77b131e3923c9.png",
                j = i.p + "cbd6d813afcb1456ee02.png",
                k = () => (0, p.jsxs)("div", {
                    className: "dl-career-text",
                    children: [(0, p.jsx)(c.Z, {
                        uiStyle: "title-l-bold",
                        align: "center",
                        className: "dl-margin-b",
                        component: "h2",
                        children: l.Z.t("static_pages.homepage.careers.title")
                    }), (0, p.jsx)(c.Z, {
                        align: "center",
                        className: "dl-career-subtitle",
                        children: l.Z.t("static_pages.homepage.careers.subtitle")
                    }), (0, p.jsx)(s.Z, {
                        className: "dl-career-cta",
                        target: "_blank",
                        href: l.Z.t("static_pages.homepage.careers.cta_href"),
                        onClick: () => o.Z.trackGtmEvent({
                            category: "homepage",
                            action: "hr",
                            label: " joinUs"
                        }),
                        uiStyle: "outlined",
                        children: l.Z.t("static_pages.homepage.careers.cta").toUpperCase()
                    })]
                }),
                f = () => (0, p.jsx)("div", {
                    className: "dl-career-container",
                    children: (0, p.jsxs)(g.Z, {
                        className: "dl-career-card dl-neutral-010-bg dl-rounded-borders",
                        contentClassName: "dl-career-content",
                        children: [(0, p.jsx)("img", {
                            className: "dl-career-image-working",
                            src: Z,
                            alt: ""
                        }), (0, p.jsx)(k, {}), (0, p.jsx)("img", {
                            className: "dl-career-image-customer",
                            src: j,
                            alt: ""
                        }), (0, p.jsx)("div", {
                            className: "dl-career-dots"
                        })]
                    })
                });
            var y = i(800274);
            const N = () => {
                const e = (0, y.ZP)(),
                    t = (0, a.b$)(),
                    i = Boolean(e);
                return (0, p.jsx)("div", {
                    className: "dl-hp-body-container",
                    children: (0, p.jsxs)("div", {
                        className: "dl-hp-body-content",
                        children: [i ? null : (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(h.Z, {
                                loggedOut: !0
                            }), (0, p.jsx)(u.Z, {})]
                        }), (0, p.jsx)(v, {}), (0, n.LA)("mobile_app") && !t && (0, p.jsx)(_.Z, {}), (0, p.jsx)(m, {}), (0, p.jsx)(f, {})]
                    })
                })
            }
        },
        642862: (e, t, i) => {
            i.d(t, {
                Z: () => B
            });
            var a = i(294184),
                n = i.n(a),
                o = i(498913),
                l = i.n(o),
                s = i(445884),
                r = i(5212),
                c = i(784600),
                d = i(453040),
                p = i(406288),
                m = i(177140),
                u = i(492171),
                _ = i(545763),
                h = i(516590),
                g = i(710725),
                b = i(301856),
                x = i(234960),
                v = i(677412),
                Z = i(783005),
                j = i(543920),
                k = i(785893);
            const f = e => {
                    let {
                        href: t,
                        onClick: i,
                        ...a
                    } = e;
                    return (0, k.jsx)("a", {
                        target: "_blank",
                        href: t,
                        onClick: i,
                        children: (0, k.jsx)("img", {
                            style: {
                                height: "38px"
                            },
                            ...a
                        })
                    })
                },
                y = {
                    fr: g,
                    de: b,
                    it: x
                },
                N = {
                    fr: v,
                    de: Z,
                    it: j
                },
                w = e => {
                    let {
                        trackingContext: t,
                        country: i,
                        trackingId: a,
                        trackingDetails: n,
                        ...o
                    } = e;
                    return (0, k.jsx)(f, {
                        href: (0, u.g)({
                            platform: "ios",
                            trackingContext: t
                        }),
                        src: y[i],
                        title: s.Z.t("static_pages.homepage.mobile_app.apple_app_store"),
                        alt: s.Z.t("static_pages.homepage.mobile_app.apple_app_store"),
                        onClick: () => {
                            a && (0, h.ZP)({
                                name: a,
                                details: {
                                    kind: "ios",
                                    ...n
                                }
                            })
                        },
                        ...o
                    })
                },
                S = e => {
                    let {
                        trackingContext: t,
                        country: i,
                        trackingId: a,
                        trackingDetails: n
                    } = e;
                    return (0, k.jsx)(f, {
                        href: (0, u.g)({
                            platform: "android",
                            trackingContext: t
                        }),
                        src: N[i],
                        title: s.Z.t("static_pages.homepage.mobile_app.google_play_store"),
                        alt: s.Z.t("static_pages.homepage.mobile_app.google_play_store"),
                        onClick: () => {
                            a && (0, h.ZP)({
                                name: a,
                                details: {
                                    kind: "android",
                                    ...n
                                }
                            })
                        }
                    })
                },
                C = e => {
                    let {
                        className: t,
                        trackingId: i,
                        trackingContext: a
                    } = e;
                    const n = (0, r.rl)(),
                        o = (0, r.rZ)();
                    return n ? (0, k.jsx)(_.Z, {
                        target: "_blank",
                        className: t,
                        href: (0, u.g)({
                            trackingContext: a
                        }),
                        trackingId: i,
                        trackingDetails: {
                            kind: m.$w
                        },
                        children: s.Z.t("covid.homepage.news_header.promote_mobile_app.link_text")
                    }) : (0, k.jsxs)("div", {
                        className: t,
                        children: [(0, k.jsx)(w, {
                            trackingContext: a,
                            country: o,
                            trackingId: i
                        }), (0, k.jsx)(S, {
                            trackingContext: a,
                            country: o,
                            trackingId: i
                        })]
                    })
                };
            var P = i(793387),
                I = i.n(P);
            i(227376);
            const T = e => {
                    let {
                        rating: t,
                        size: i = 20
                    } = e;
                    return (0, k.jsx)("div", {
                        className: "dl-flex-center",
                        children: l()(t, (e => (0, k.jsx)(I(), {
                            fill: "#f8c400",
                            width: i,
                            height: i
                        }, e)))
                    })
                },
                B = e => {
                    let {
                        margins: t = !0
                    } = e;
                    const i = (0, r.rl)();
                    return (0, k.jsx)(c.Z, {
                        id: "promote-mobile-app-banner",
                        fullWidth: !0,
                        className: n()("dl-rounded-borders dl-hp-pc-card dl-margin-t-32 dl-padding-0", {
                            "dl-hp-mobile-margins": t
                        }),
                        children: (0, k.jsx)(p.Z, {
                            contentClassName: "dl-hp-mobile-container",
                            children: (0, k.jsx)("div", {
                                className: "dl-hp-pc-content",
                                children: (0, k.jsxs)("div", {
                                    className: "dl-hp-pc-fixed-width",
                                    children: [(0, k.jsx)(d.Z, {
                                        uiStyle: "title-l-bold",
                                        className: "dl-hp-pc-title",
                                        component: "h2",
                                        children: s.Z.t("static_pages.homepage.mobile_app_push.title")
                                    }), (0, k.jsx)(d.Z, {
                                        uiStyle: "body-s-regular",
                                        className: "dl-margin-t-16",
                                        component: "div",
                                        children: s.Z.t("static_pages.homepage.mobile_app_push.description")
                                    }), (0, k.jsxs)("div", {
                                        className: n()("dl-margin-t-32 flex flex-wrap dl-column-gap-m", {
                                            "dl-justify-center": i
                                        }),
                                        children: [(0, k.jsx)(T, {
                                            rating: 5
                                        }), (0, k.jsx)(d.Z, {
                                            className: "dl-nowrap",
                                            children: s.Z.t("static_pages.homepage.mobile_app_push.note_description")
                                        })]
                                    }), (0, k.jsx)(C, {
                                        className: n()("dl-margin-t-32", {
                                            flex: !i,
                                            "dl-column-gap-m": !i
                                        }),
                                        trackingId: "app_download_homepage_block_clicked",
                                        trackingContext: "patient_homepage"
                                    })]
                                })
                            })
                        })
                    })
                }
        },
        673976: (e, t, i) => {
            i.d(t, {
                Z: () => h
            });
            var a = i(445884),
                n = i(952893),
                o = i(37946),
                l = i(239702),
                s = i(784600),
                r = i(453040),
                c = i(406288),
                d = i(618742),
                p = i.n(d);
            var m = i(785893);
            const u = e => {
                    let {
                        dataType: t
                    } = e;
                    return (0, m.jsx)(o.Z, {
                        placement: "top",
                        overlay: (0, m.jsx)(l.Z, {
                            id: `${t}-info`,
                            className: "dl-hp-numbers-popover",
                            children: (0, m.jsx)(r.Z, {
                                uiStyle: "body-xs-regular",
                                children: a.Z.t(`static_pages.homepage.dl_numbers.data.disclosure.${t}_html`)
                            })
                        }),
                        children: (0, m.jsx)(p(), {
                            className: "dl-hp-numbers-popover-icon"
                        })
                    }, t)
                },
                _ = e => {
                    let {
                        dataType: t
                    } = e;
                    return (0, m.jsxs)("div", {
                        className: "dl-hp-numbers-data",
                        children: [(0, m.jsx)(r.Z, {
                            uiStyle: "title-xl-bold",
                            component: "h3",
                            children: a.Z.t(`kpis.${t}_number`)
                        }), (0, m.jsxs)("div", {
                            className: "dl-flex-center",
                            children: [(0, m.jsx)(r.Z, {
                                uiStyle: "body-s-bold",
                                color: "neutral-090",
                                component: "div",
                                children: a.Z.t(`static_pages.homepage.dl_numbers.data.${t}_text`)
                            }), (0, m.jsx)(u, {
                                dataType: t
                            })]
                        })]
                    })
                },
                h = () => (0, m.jsx)(s.Z, {
                    className: "dl-padding-0",
                    fullWidth: !0,
                    children: (0, m.jsxs)(c.Z, {
                        contentClassName: "dl-hp-numbers-container m-auto dl-justify-between dl-flex-center dl-text-center",
                        children: [(0, m.jsx)(r.Z, {
                            uiStyle: "title-xl-bold",
                            color: "neutral-090",
                            className: "dl-hp-numbers-title",
                            component: "h2",
                            children: a.Z.t("static_pages.homepage.dl_numbers.description")
                        }), (0, n.Z)(["patients", "professionals", "rating"].map((e => (0, m.jsx)(_, {
                            dataType: e
                        }, e))), (0, m.jsx)("div", {
                            className: "column-divider"
                        }))]
                    })
                })
        },
        988273: (e, t, i) => {
            i.d(t, {
                Z: () => m
            });
            var a = i(184481),
                n = i(294184),
                o = i.n(n),
                l = i(445884),
                s = i(5212),
                r = i(453040);
            var c = i(785893);
            const d = {
                    fr: ["patient_mobile.root.home.book_appointment_specialities.generalist", "patient_mobile.root.home.book_appointment_specialities.ophthalmologist", "patient_mobile.root.home.book_appointment_specialities.dentist", "patient_mobile.root.home.book_appointment_specialities.radiologist", "patient_mobile.root.home.book_appointment_specialities.osteopath", "patient_mobile.root.home.book_appointment_specialities.physiotherapist", "patient_mobile.root.home.book_appointment_specialities.midwife", "patient_mobile.root.home.book_appointment_specialities.psychologist", "patient_mobile.root.home.book_appointment_specialities.laboratory", "patient_mobile.root.home.book_appointment_specialities.pharmacy"],
                    de: ["patient_mobile.root.home.book_appointment_specialities.dentist", "patient_mobile.root.home.book_appointment_specialities.orthopaedist", "patient_mobile.root.home.book_appointment_specialities.gynaecologist", "patient_mobile.root.home.book_appointment_specialities.radiologist", "patient_mobile.root.home.book_appointment_specialities.dermatologist", "patient_mobile.root.home.book_appointment_specialities.ent_doctor", "patient_mobile.root.home.book_appointment_specialities.paediatrician", "patient_mobile.root.home.book_appointment_specialities.internist", "patient_mobile.root.home.book_appointment_specialities.generalist"],
                    it: ["patient_mobile.root.home.book_appointment_specialities.family_doctor", "patient_mobile.root.home.book_appointment_specialities.paediatrician", "patient_mobile.root.home.book_appointment_specialities.dermatologist", "patient_mobile.root.home.book_appointment_specialities.gynaecologist", "patient_mobile.root.home.book_appointment_specialities.ophthalmologist", "patient_mobile.root.home.book_appointment_specialities.ent_doctor", "patient_mobile.root.home.book_appointment_specialities.traumatologist", "patient_mobile.root.home.book_appointment_specialities.nutritionist", "patient_mobile.root.home.book_appointment_specialities.psychologist", "patient_mobile.root.home.book_appointment_specialities.podiatrist", "patient_mobile.root.home.book_appointment_specialities.dentist"]
                },
                p = "test" === (0, s.zj)() ? 6e4 : 4e3,
                m = e => {
                    let {
                        title: t
                    } = e;
                    const [i, n] = (0, a.useState)(0), m = d[(0, s.rZ)()];
                    return (0, a.useEffect)((() => {
                        const e = setInterval((() => {
                            n((e => (e + 1) % m.length))
                        }), p);
                        return () => clearInterval(e)
                    }), [m.length]), (0, c.jsxs)(r.Z, {
                        id: "search-title",
                        uiStyle: "title-xl-bold",
                        color: "white",
                        component: "h1",
                        "aria-label": l.Z.t("patient_mobile.root.home.book_appointment_title_a11y"),
                        children: [t, "\xa0", (0, c.jsx)("div", {
                            className: "dl-position-relative dl-home-tagline-block",
                            "aria-hidden": !0,
                            children: m.map(((e, t) => (0, c.jsx)("div", {
                                className: o()("dl-home-tagline aria-hidden", {
                                    fadeInDown: t === i,
                                    fadeOutDown: t === (0 === i ? m.length - 1 : i - 1)
                                }),
                                children: l.Z.t(e)
                            }, t)))
                        })]
                    })
                }
        },
        503860: (e, t, i) => {
            i.d(t, {
                Z: () => p
            });
            var a = i(294184),
                n = i.n(a),
                o = i(445884),
                l = i(453040);
            const s = i.p + "414f6d548cd8e7420ec2.svg",
                r = i.p + "e293c03bd4b367efb62c.svg",
                c = i.p + "27df8684b01bff357f01.svg";
            var d = i(785893);
            const p = e => {
                let {
                    loggedOut: t
                } = e;
                return (0, d.jsxs)("div", {
                    className: n()("m-auto dl-white-bg", {
                        "dl-value-props": t
                    }),
                    children: [(0, d.jsx)(l.Z, {
                        uiStyle: "title-xl-bold",
                        align: "center",
                        className: "dl-value-props-title dl-margin-b-32 dl-margin-x-16",
                        component: "h2",
                        children: o.Z.t("static_pages.homepage.value_props.title_html")
                    }), (0, d.jsx)("div", {
                        className: "flex flex-wrap dl-justify-around",
                        children: [{
                            i18nKey: "static_pages.homepage.value_props.quick_availabilities_html",
                            imgSrc: r
                        }, {
                            i18nKey: "static_pages.homepage.value_props.informed_decisions_html",
                            imgSrc: s
                        }, {
                            i18nKey: "static_pages.homepage.value_props.mobile_app_html",
                            imgSrc: c
                        }].map((e => {
                            let {
                                i18nKey: t,
                                imgSrc: i
                            } = e;
                            return (0, d.jsxs)("div", {
                                className: "dl-flex-column dl-align-items-center dl-margin-b-24",
                                role: "text",
                                children: [(0, d.jsx)("img", {
                                    src: i,
                                    height: 200,
                                    alt: ""
                                }), (0, d.jsx)(l.Z, {
                                    align: "center",
                                    className: "dl-value-props-text",
                                    children: o.Z.t(t)
                                })]
                            }, t)
                        }))
                    })]
                })
            }
        },
        126097: (e, t, i) => {
            i.d(t, {
                Z: () => g
            });
            var a = i(184481),
                n = i(445884),
                o = i(600625),
                l = i(545763),
                s = i(946402),
                r = i(192772),
                c = i(240125),
                d = i(650829),
                p = i(415927),
                m = i(5212),
                u = i(597043),
                _ = i(785893);
            const h = e => {
                    let {
                        count: t,
                        loading: i
                    } = e;
                    return t < 0 ? null : Array(t).fill().map(((e, t) => (0, _.jsx)(u.Z, {
                        item: !0,
                        xsSize: 12,
                        smSize: 6,
                        lgSize: 4,
                        children: (0, _.jsx)(d.Z, {
                            loading: i
                        })
                    }, t)))
                },
                g = e => {
                    let {
                        title: t,
                        showAppointmentCount: i,
                        className: d,
                        onChange: g
                    } = e;
                    const [b, x] = (0, a.useState)([]), [v, Z] = (0, a.useState)(1), j = (0, r.ZP)(), k = (0, m.Zz)(), {
                        loading: f,
                        success: y,
                        data: N
                    } = (0, c.Z)({
                        url: "/account/profile_favorites.json",
                        query: {
                            page: v,
                            limit: k ? 6 : 5
                        },
                        onSuccess: e => {
                            let {
                                data: t
                            } = e;
                            g && g(t.results.length), x((e => [...e, ...t.results]))
                        }
                    }), w = b.length > 0 && !(null !== N && void 0 !== N && N.is_last_page), S = e => {
                        g && g(b.length - 1);
                        const t = e.profile_favorite.id;
                        x((e => e.filter((e => e.profile_favorite.id !== t)))), o.ZP.delete(`/account/profile_favorites/${t}`)
                    }, C = e => {
                        k ? window.location.pathname = e.link : j.show(e.link)
                    };
                    return y && 0 === b.length ? null : (0, _.jsxs)("div", {
                        className: d,
                        children: [!k && f && 0 === b.length ? (0, _.jsx)(s.Z, {
                            children: (0, _.jsx)(s.Z.Rectangle, {
                                className: "dl-padding-t-24 dl-margin-b-16 dl-width-50"
                            })
                        }) : t, (0, _.jsxs)(u.Z, {
                            container: !0,
                            children: [b.map((e => (0, _.jsx)(u.Z, {
                                item: !0,
                                xsSize: 12,
                                smSize: 6,
                                lgSize: 4,
                                children: (0, _.jsx)(p.Z, {
                                    showAppointmentCount: i,
                                    favorite: e,
                                    onRemove: S,
                                    onTap: C
                                })
                            }, e.id))), k ? (0, _.jsx)(h, {
                                loading: f,
                                count: 6 - b.length
                            }) : f && 0 === b.length && (0, _.jsx)(h, {
                                loading: !0,
                                count: 5
                            }), w && (0, _.jsx)(u.Z, {
                                item: !0,
                                xsSize: 12,
                                smSize: 6,
                                lgSize: 4,
                                children: (0, _.jsx)(l.Z, {
                                    className: "dl-full-width dl-white-bg",
                                    uiStyle: "outlined",
                                    loadable: {
                                        loading: f
                                    },
                                    onTap: () => Z((e => e + 1)),
                                    disabled: f,
                                    children: n.Z.t("common.actions.see_more")
                                })
                            })]
                        })]
                    })
                }
        },
        385799: (e, t, i) => {
            i.d(t, {
                Z: () => c
            });
            var a = i(445884),
                n = i(592290),
                o = i(591035),
                l = i(755506),
                s = i(952893),
                r = i(785893);
            const c = e => {
                let {
                    show: t,
                    onHide: i,
                    doctor: c,
                    showProfile: d,
                    removeFavorite: p
                } = e;
                return (0, r.jsx)(n.ZP, {
                    show: t,
                    onHide: i,
                    children: (0, r.jsx)(n.Ng, {
                        children: (0, s.Z)([(0, r.jsx)(o.Z, {
                            className: "dl-padding-16",
                            doctor: c,
                            hideIconMobile: !0,
                            compact: !0
                        }, "drawer-header"), (0, r.jsx)(n.h6, {
                            actionText: a.Z.t("common.mobile.favorites_drawer.view_profile"),
                            icon: "user-doctor",
                            onClick: d
                        }, "profile-viewer"), (0, r.jsx)(n.h6, {
                            actionText: a.Z.t("common.mobile.favorites_drawer.remove_profile"),
                            icon: "star-crossed",
                            onClick: p
                        }, "profile-remove")], (0, r.jsx)(l.Z, {}))
                    })
                })
            }
        },
        415927: (e, t, i) => {
            i.d(t, {
                Z: () => x
            });
            var a = i(184481),
                n = i(294184),
                o = i.n(n),
                l = i(445884),
                s = i(516590),
                r = i(5212),
                c = i(591035),
                d = i(348187),
                p = i(619595),
                m = i(653591),
                u = i(385799),
                _ = (i(418185), i(785893));
            const h = e => {
                    let {
                        onClick: t,
                        doctorName: i
                    } = e;
                    return (0, _.jsx)("div", {
                        className: "dl-position-absolute dl-top-s dl-right-s",
                        children: (0, _.jsx)(p.ZP, {
                            name: "xmark-large",
                            size: "medium",
                            onClick: t,
                            title: l.Z.t("patient_referrals.home.remove_button", {
                                doctor_name: i
                            })
                        })
                    })
                },
                g = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, _.jsx)("div", {
                        className: "dl-position-absolute dl-right-s dl-absolute-center-y",
                        children: (0, _.jsx)(p.ZP, {
                            title: l.Z.t("common.actions.show_more_actions"),
                            name: "ellipsis",
                            size: "medium",
                            onClick: t
                        })
                    })
                },
                b = e => {
                    let {
                        count: t
                    } = e;
                    return (0, _.jsx)(m.Z, {
                        placement: "right",
                        tooltip: l.Z.t("patient_referrals.home.appointment_counter_tooltip", {
                            count: t
                        }),
                        children: (0, _.jsx)("div", {
                            className: "dl-position-absolute dl-top-m dl-left-m",
                            children: (0, _.jsx)(d.Z, {
                                uiStyle: "info",
                                children: t
                            })
                        })
                    })
                },
                x = e => {
                    let {
                        favorite: t,
                        showAppointmentCount: i,
                        onTap: n,
                        onRemove: l
                    } = e;
                    const {
                        profile_favorite: d,
                        ...p
                    } = t, [m, x] = (0, a.useState)(!1), v = (e, t) => {
                        (0, s.ZP)({
                            details: {
                                profile_id: p.id,
                                source: "homepage",
                                context: t
                            },
                            name: "my_practitioner_card_clicked"
                        }), n(e)
                    }, Z = (e, t) => {
                        (0, s.ZP)({
                            details: {
                                profile_id: p.id,
                                source: "homepage",
                                context: t
                            },
                            name: "my_practitioner_removal_clicked"
                        }), l(e)
                    }, j = (0, r.rl)();
                    return (0, _.jsxs)("div", {
                        className: "dl-position-relative",
                        children: [(0, _.jsx)(c.Z, {
                            className: o()("dl-padding-16", {
                                "dl-padding-r-48": j
                            }),
                            doctor: p,
                            onTap: () => v(t, "card"),
                            hideIconMobile: !0,
                            border: !0,
                            compact: !0
                        }), j ? (0, _.jsxs)(_.Fragment, {
                            children: [(0, _.jsx)(g, {
                                onClick: e => {
                                    e.preventDefault(), x(!0)
                                }
                            }), (0, _.jsx)(u.Z, {
                                doctor: p,
                                show: m,
                                onHide: () => x(!1),
                                showProfile: () => v(t, "drawer"),
                                removeFavorite: () => Z(t, "drawer")
                            })]
                        }) : l && (0, _.jsx)(h, {
                            doctorName: p.name_with_title,
                            onClick: () => Z(t, "card")
                        }), i && (null === d || void 0 === d ? void 0 : d.appointment_counter) > 0 && (0, _.jsx)(b, {
                            count: d.appointment_counter
                        })]
                    })
                }
        },
        650829: (e, t, i) => {
            i.d(t, {
                Z: () => s
            });
            var a = i(946402),
                n = i(784600),
                o = i(785893);
            const l = () => (0, o.jsx)(n.Z, {
                    className: "dl-full-width",
                    border: !0,
                    children: (0, o.jsxs)("div", {
                        className: "dl-flex-row dl-align-items-center dl-margin-b-4",
                        children: [(0, o.jsx)(a.Z.Circle, {
                            size: "medium"
                        }), (0, o.jsxs)("div", {
                            className: "dl-margin-l dl-width-50",
                            children: [(0, o.jsx)(a.Z.Rectangle, {
                                height: "xs",
                                className: "dl-width-50"
                            }), (0, o.jsx)(a.Z.Rectangle, {
                                height: "xs",
                                className: "dl-width-75 dl-margin-t-8"
                            })]
                        })]
                    })
                }),
                s = e => {
                    let {
                        loading: t
                    } = e;
                    return t ? (0, o.jsx)(a.Z, {
                        children: (0, o.jsx)(l, {})
                    }) : (0, o.jsx)(l, {})
                }
        },
        165668: (e, t, i) => {
            i.d(t, {
                S: () => x,
                Z: () => v
            });
            var a = i(785893),
                n = i(184481),
                o = i(294184),
                l = i.n(o),
                s = i(784600),
                r = i(453040),
                c = i(545763),
                d = i(5212),
                p = i(573813),
                m = i(835645),
                u = i(126188),
                _ = i(514599),
                h = i(108519),
                g = i(516590),
                b = i(990626);
            const x = (0, n.forwardRef)(((e, t) => {
                    let {
                        uiStyle: i = "white",
                        noShadow: n = !1,
                        className: o,
                        direction: r = "row",
                        children: c,
                        backgroundUrl: p,
                        ...m
                    } = e;
                    const u = (0, d.Zz)(),
                        _ = p ? {
                            style: {
                                backgroundImage: `linear-gradient(90.19deg, rgba(13, 35, 57, 0.8) 13.53%, rgba(13, 35, 57, 0) 61.4%), url("${p}")`
                            }
                        } : {};
                    return (0, a.jsx)(s.Z, {
                        className: l()("dl-patient-engagement-card", "dl-padding-r-0", {
                            "dl-patient-engagement-card--desktop--row": u && "row" === r,
                            "dl-patient-engagement-card--desktop--column": u && "column" === r,
                            "dl-patient-engagement-card--desktop": u,
                            "dl-patient-engagement-card--mobile": !u,
                            "dl-no-shadow": n
                        }, `dl-patient-engagement-card--${p?"background":i}`, o),
                        contentClassName: "dl-flex-column dl-flex-grow",
                        "data-test-id": "patient-engagement-card",
                        ..._,
                        ...m,
                        ref: t,
                        children: c
                    })
                })),
                v = e => {
                    var t, i, o, s, v, Z, j;
                    let {
                        position: k,
                        card: f,
                        uiStyle: y,
                        noShadow: N,
                        direction: w,
                        className: S
                    } = e;
                    const {
                        cardRef: C,
                        trackCardClicked: P
                    } = (e => {
                        let {
                            card: t,
                            position: i
                        } = e;
                        const a = (0, n.useRef)(!1),
                            o = (0, n.useRef)(!1),
                            [l, s] = (0, h.Z)({
                                threshold: 50
                            }),
                            r = (0, n.useMemo)((() => ({
                                placement_id: t.id,
                                placement_name: t.name,
                                source: t.target,
                                placement_slug: t.slug,
                                placement_position: i
                            })), [t, i]);
                        return (0, n.useEffect)((() => {
                            l && ((0, b.cr)("prevention_tracking") ? o.current || ((0, g.ZP)({
                                name: "card_displayed_anonymous",
                                details: r
                            }, {
                                schema: "b2c_content_engagement",
                                includeUserAgent: !1,
                                includeUserIdentifiers: !1
                            }), o.current = !0) : a.current || ((0, g.ZP)({
                                name: "patient_engagement_card_displayed",
                                details: {
                                    card_id: t.id,
                                    card_name: t.name,
                                    source: t.target,
                                    card_slug: t.slug,
                                    card_position: i
                                }
                            }, {
                                schema: "patient"
                            }), a.current = !0))
                        }), [l, r, t, i]), {
                            cardRef: s,
                            trackCardClicked: (0, n.useCallback)((() => {
                                if ((0, b.cr)("prevention_tracking"))(0, g.ZP)({
                                    name: "card_clicked_anonymous",
                                    details: r
                                }, {
                                    schema: "b2c_content_engagement",
                                    includeUserAgent: !1,
                                    includeUserIdentifiers: !1
                                });
                                else {
                                    const e = (0, d.Zz)() ? "patient_engagement_card_cta_clicked" : "patient_engagement_card_clicked";
                                    (0, g.ZP)({
                                        name: e,
                                        details: {
                                            card_id: t.id,
                                            card_name: t.name,
                                            source: t.target,
                                            card_slug: t.slug,
                                            card_position: i
                                        }
                                    }, {
                                        schema: "patient"
                                    })
                                }
                            }), [r, t, i])
                        }
                    })({
                        card: f,
                        position: k
                    }), I = (0, d.Zz)(), T = (null === (t = f.action) || void 0 === t ? void 0 : t.kind) === u.j.quickbooking, B = null === (i = f.action) || void 0 === i ? void 0 : i.speciality, A = null === (o = f.action) || void 0 === o ? void 0 : o.ref_visit_motive_id, {
                        startQuickBooking: q,
                        QuickBookingModal: z
                    } = (0, _.M)({
                        quickBookingSpeciality: B,
                        quickBookingVisitMotiveId: A
                    }), E = (null === (s = f.action) || void 0 === s ? void 0 : s.kind) === u.j.url && !(null === (v = f.action) || void 0 === v || !v.url) && !((0, d.b$)() && ((0, p.B)(f.action.url) || (0, p.E)(f.action.url))), D = (0, p.B)((null === (Z = f.action) || void 0 === Z ? void 0 : Z.url) || "") ? "_blank" : "_self", M = (0, n.useCallback)((() => {
                        var e, t;
                        P(), T ? q() : null !== (e = f.action) && void 0 !== e && e.url && !E ? (0, m.Z)(f.action.url) : null !== (t = f.action) && void 0 !== t && t.url && !I && window.open(f.action.url, (0, p.B)(f.action.url) ? "_blank" : "_self")
                    }), [f, E, I, P, q, T]), $ = E && null !== (j = f.action) && void 0 !== j && j.url ? {
                        href: f.action.url,
                        target: D
                    } : {};
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(x, {
                            ref: C,
                            uiStyle: y,
                            noShadow: N,
                            className: S,
                            direction: w,
                            onTap: I ? void 0 : M,
                            backgroundUrl: f.is_background_image ? f.image : void 0,
                            children: [(0, a.jsxs)("div", {
                                className: "dl-patient-engagement-content flex dl-justify-between dl-flex-grow-auto",
                                children: [(0, a.jsx)("div", {
                                    className: l()("dl-flex-column", "dl-align-items-start", "dl-patient-engagement-content-text", "" + (I ? "dl-justify-start" : "dl-justify-center"), {
                                        "dl-margin-t-16": I
                                    }),
                                    children: (0, a.jsx)(r.Z, {
                                        className: l()("dl-patient-engagement-title", {
                                            "dl-align-self-start": I,
                                            "dl-align-self-center": !I
                                        }),
                                        uiStyle: "body-s-bold",
                                        component: "span",
                                        id: `patient-engagment-card-${f.id}`,
                                        children: f.body
                                    })
                                }), f.image && !f.is_background_image && (0, a.jsx)("img", {
                                    className: "dl-patient-engagement-image",
                                    src: f.image,
                                    alt: ""
                                })]
                            }), I && (0, a.jsx)("div", {
                                className: "dl-margin-b-16 dl-margin-t-8 mx-24",
                                children: (0, a.jsx)(c.Z, {
                                    className: "dl-full-width dl-align-self-end dl-text-center dl-line-height-inherit",
                                    onClick: M,
                                    "aria-describedby": `patient-engagment-card-${f.id}`,
                                    ...$,
                                    children: f.primary_button_text
                                })
                            })]
                        }), T && I && z]
                    })
                }
        },
        573813: (e, t, i) => {
            i.d(t, {
                B: () => o,
                E: () => n
            });
            const a = ["/gesundheit/", "/salute/", "/sante/"],
                n = e => e && a.some((t => e.includes(t))),
                o = e => e && window.location.host !== new URL(e, window.location.origin).host
        },
        514599: (e, t, i) => {
            i.d(t, {
                M: () => C
            });
            var a = i(785893),
                n = i(184481),
                o = i(24553),
                l = i(5212),
                s = i(553152),
                r = i(169339),
                c = i(383915),
                d = i(445884),
                p = i(619423),
                m = i(992559),
                u = i(646975),
                _ = i(143318),
                h = i(629535);
            const g = () => {
                    const [e, t] = (0, n.useState)("");
                    return {
                        dataFetcher: () => p.Z.search((0, h.Z)(e), {
                            specialities_only: !0
                        }).then((t => (0, _.Z)({
                            input: e,
                            output: t
                        }))),
                        specialitySearch: e,
                        setSpecialitySearch: t
                    }
                },
                b = e => {
                    let {
                        onSpecialitySelect: t
                    } = e;
                    const {
                        dataFetcher: i,
                        setSpecialitySearch: n,
                        specialitySearch: o
                    } = g();
                    return (0, a.jsx)("div", {
                        className: "z-10",
                        children: (0, a.jsx)(u.U, {
                            placeholder: d.Z.t("patient_common.root.searchbar.speciality_placeholder"),
                            onChange: n,
                            onSelect: t,
                            dataFetcher: i,
                            className: "dl-quickbooking-query-input dl-rounded-borders",
                            value: o,
                            focus: !0
                        })
                    })
                };
            var x = i(849762);
            const v = () => {
                const e = (0, m.E)(),
                    t = e.reduce(((e, t) => {
                        const {
                            country: i,
                            city: a,
                            address: n
                        } = t, [o, l] = [n, a, i].filter((e => !!e));
                        return o || l ? [...e, {
                            place: t,
                            main: o,
                            side: l
                        }] : e
                    }), []);
                return {
                    places: e,
                    recentPlaces: t
                }
            };
            var Z = i(453040),
                j = i(179522);
            const k = e => {
                    let {
                        place: t,
                        onPlaceTap: i,
                        main: n,
                        side: o
                    } = e;
                    return (0, a.jsx)(j.Z, {
                        onTap: () => {
                            (0, m.b)(t), i(t)
                        },
                        children: (0, a.jsxs)(j.Z.Description, {
                            children: [(0, a.jsx)(Z.Z, {
                                uiStyle: "body-s-bold",
                                component: "span",
                                className: "!ml-16",
                                children: n
                            }), o && (0, a.jsx)(Z.Z, {
                                component: "span",
                                className: "!ml-16",
                                children: o
                            })]
                        })
                    })
                },
                f = (0, n.memo)((e => {
                    let {
                        onPlaceTap: t,
                        places: i
                    } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [i.length ? (0, a.jsx)(Z.Z, {
                            uiStyle: "body-s-bold",
                            className: "!mt-56 !mb-16",
                            align: "center",
                            children: d.Z.t("patient_mobile.root.home.locations.recent")
                        }) : null, i.map(((e, i) => (0, a.jsx)(k, {
                            place: e.place,
                            onPlaceTap: t,
                            main: e.main,
                            side: e.side
                        }, i)))]
                    })
                })),
                y = e => {
                    let {
                        onPlaceSelect: t,
                        setCurrentLocation: i
                    } = e;
                    const {
                        recentPlaces: n
                    } = v();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "z-10",
                            children: (0, a.jsx)(x.Z, {
                                setSelectedLocation: t,
                                onCurrentPositionSuccess: i,
                                focus: !0,
                                className: "dl-quickbooking-place-input dl-rounded-borders"
                            })
                        }), (0, a.jsx)(f, {
                            places: n,
                            onPlaceTap: t
                        })]
                    })
                },
                N = {
                    speciality: d.Z.t("patient_common.root.searchbar.speciality_search"),
                    place: d.Z.t("patient_common.root.searchbar.location_search")
                },
                w = e => {
                    let {
                        quickBookingSpeciality: t,
                        quickBookingVisitMotiveId: i,
                        hideModal: o
                    } = e;
                    const l = t ? "place" : "speciality",
                        [s, r] = (0, n.useState)(t ? "place" : "speciality"),
                        c = (0, n.useRef)({
                            place: {
                                place_id: null
                            },
                            location: {
                                latitude: void 0,
                                longitude: void 0
                            },
                            speciality: t
                        }),
                        d = () => {
                            var e;
                            const t = { ...c.current.location,
                                ...c.current.place,
                                speciality: null === (e = c.current.speciality) || void 0 === e ? void 0 : e.slug,
                                ref_visit_motive_id: i
                            };
                            return c.current.place && (0, m.b)(c.current.place), p.Z.profiles.search(t).then((e => {
                                let {
                                    path: t
                                } = e;
                                window.location = t
                            }))
                        };
                    return {
                        onHide: () => {
                            r(l), o()
                        },
                        QuickBookingStep: "place" === s ? (0, a.jsx)(y, {
                            onPlaceSelect: e => {
                                c.current = { ...c.current,
                                    place: e
                                }, d()
                            },
                            setCurrentLocation: e => {
                                c.current = { ...c.current,
                                    location: e
                                }, d()
                            }
                        }) : (0, a.jsx)(b, {
                            onSpecialitySelect: (e, t) => {
                                c.current = { ...c.current,
                                    speciality: e
                                }, t || r("place")
                            }
                        }),
                        title: N[s]
                    }
                },
                S = e => {
                    let {
                        quickBookingSpeciality: t,
                        quickBookingVisitMotiveId: i,
                        hideModal: n,
                        show: o
                    } = e;
                    const {
                        onHide: l,
                        QuickBookingStep: s,
                        title: d
                    } = w({
                        quickBookingSpeciality: t,
                        quickBookingVisitMotiveId: i,
                        hideModal: n
                    });
                    return (0, a.jsx)(r.Z, {
                        show: o,
                        title: d,
                        onHide: l,
                        className: "dl-quickbooking-modal",
                        children: (0, a.jsx)(c.Z, {
                            children: s
                        })
                    })
                },
                C = e => {
                    let {
                        quickBookingSpeciality: t,
                        quickBookingVisitMotiveId: i
                    } = e;
                    const [r, c] = (0, n.useState)(!1), d = (0, o.useNavigate)(), p = (0, n.useContext)(s.c), m = (0, l.Zz)();
                    return {
                        startQuickBooking: (0, n.useCallback)((() => m ? c(!0) : (i && p.setRefVisitMotive(i), t ? (p.setSpeciality(t), d("/search-locations")) : d("/search-specialities"))), [p, m, d, t, i]),
                        QuickBookingModal: (0, a.jsx)(S, {
                            quickBookingSpeciality: t,
                            quickBookingVisitMotiveId: i,
                            hideModal: () => c(!1),
                            show: r
                        })
                    }
                }
        },
        70774: (e, t, i) => {
            i.d(t, {
                O: () => c
            });
            var a = i(174976),
                n = i(5212),
                o = i(800274),
                l = i(990626),
                s = i(239417),
                r = i(184481);
            const c = e => {
                let {
                    target: t,
                    limit: i,
                    enabled: c = !0
                } = e;
                const d = (0, r.useContext)(s._O),
                    p = {
                        country: (0, n.rZ)(),
                        variant: (0, n.bB)(),
                        channel: (0, n.mr)(),
                        logged_in: Boolean((0, o.ZP)()),
                        target: t,
                        limit: i
                    };
                return (0, a.useQuery)(["patient_engagement", "cards", p], (() => d.get("/patient_engagement/cards", {
                    query: p
                }).then((e => {
                    let {
                        bodyData: t
                    } = e;
                    return t
                }))), {
                    enabled: (0, l.cr)("patient_engagement_homepage") && c
                })
            }
        },
        92970: (e, t, i) => {
            var a;
            i.d(t, {
                    J: () => a
                }),
                function(e) {
                    e.homepage = "homepage", e.appointment_confirmation = "appointment_confirmation"
                }(a || (a = {}))
        },
        126188: (e, t, i) => {
            var a;
            i.d(t, {
                    j: () => a
                }),
                function(e) {
                    e.quickbooking = "quickbooking", e.url = "destination_url"
                }(a || (a = {}))
        },
        446663: (e, t, i) => {
            i.d(t, {
                Z: () => _
            });
            var a = i(785893),
                n = i(184481),
                o = i(445884),
                l = i(990626),
                s = i(516590),
                r = i(800274),
                c = i(453040),
                d = i(528846),
                p = i(97365),
                m = i(267745),
                u = i(697286);
            const _ = e => {
                let {
                    show: t,
                    onClose: i,
                    onSuccess: _,
                    onAccept: h,
                    source: g
                } = e;
                const b = (0, r.ZP)(),
                    x = [{
                        label: o.Z.t("patient_common.root.patient_privacy_settings.past_appointments_modal.past_appointments_enabled_html"),
                        value: m.aA.ENABLED
                    }, {
                        label: o.Z.t("patient_common.root.patient_privacy_settings.past_appointments_modal.past_appointments_disabled_html"),
                        value: m.aA.DISABLED
                    }];
                (0, n.useEffect)((() => {
                    t && (0, s.ZP)({
                        name: "past_appointments_settings_modal_display",
                        details: {
                            source: g
                        }
                    })
                }), [t, g]);
                const v = o.Z.t("patient_common.root.patient_privacy_settings.past_appointments_modal.learn_more_html", {
                    url: l.ZP.PATIENT_LEGAL_INFO_LINKS.privacy_policy,
                    class: "dl-link dl-link-flat"
                });
                return (0, a.jsxs)(u.Z, {
                    settingName: "show_appointment_history",
                    options: x,
                    show: t,
                    onHide: () => {
                        b && (0, m.D6)(b.id), (0, s.ZP)({
                            name: "past_appointments_settings_modal_dismiss",
                            details: {
                                source: g
                            }
                        }), i()
                    },
                    source: g,
                    titleText: o.Z.t("patient_common.root.patient_privacy_settings.past_appointments_modal.title"),
                    onSubmit: e => {
                        (0, s.ZP)({
                            name: "past_appointments_settings_modal_validate",
                            details: {
                                source: g,
                                status: e
                            }
                        })
                    },
                    onSuccess: e => {
                        e === m.aA.ENABLED && (null === h || void 0 === h || h(e)), null === _ || void 0 === _ || _()
                    },
                    showSettingsLink: !0,
                    children: [(0, a.jsx)("div", {
                        className: "dl-text-center",
                        children: (0, a.jsx)(d.Z, {
                            src: p,
                            height: 100,
                            className: "dl-margin-b-16",
                            alt: ""
                        })
                    }), (0, a.jsx)(c.Z, {
                        block: !0,
                        className: "dl-margin-b-16",
                        children: o.Z.t("patient_common.root.patient_privacy_settings.past_appointments_modal.explanation_html")
                    }), (0, a.jsx)(c.Z, {
                        children: v
                    })]
                })
            }
        },
        697286: (e, t, i) => {
            i.d(t, {
                Z: () => x
            });
            var a = i(785893),
                n = i(184481),
                o = i(445884),
                l = i(294184),
                s = i.n(l),
                r = i(5212),
                c = i(545763),
                d = i(169339),
                p = i(383915),
                m = i(968461),
                u = i(290988),
                _ = i(800274),
                h = i(453040),
                g = i(174976),
                b = i(239417);
            const x = e => {
                var t;
                let {
                    settingName: i,
                    options: l,
                    show: x,
                    source: v,
                    titleText: Z,
                    onSubmit: j,
                    onSuccess: k,
                    onHide: f,
                    showSettingsLink: y = !1,
                    children: N
                } = e;
                const [w, S] = (0, n.useState)(null), {
                    fetchAccount: C
                } = (0, _.dv)(), P = (0, _.ZP)(), I = (null === P || void 0 === P || null === (t = P.patient_privacy_settings) || void 0 === t ? void 0 : t[i]) || null;
                (0, n.useEffect)((() => {
                    x && S(I)
                }), [x, I, v]);
                const {
                    mutateAsync: T,
                    isLoading: B
                } = (e => {
                    let {
                        onSuccess: t,
                        name: i
                    } = e;
                    const a = (0, n.useContext)(b._O);
                    return (0, g.useMutation)((async e => {
                        let {
                            value: t
                        } = e;
                        return a.post("/account_settings/", {
                            body: {
                                name: i,
                                value: t
                            }
                        })
                    }), {
                        onSuccess: t
                    })
                })({
                    name: i,
                    onSuccess: async () => {
                        await C(), null === k || void 0 === k || k(w)
                    }
                }), A = o.Z.t("patient_common.root.patient_privacy_settings.past_appointments_modal.update_here_html", {
                    class: "dl-link dl-link-flat",
                    href: "/privacy-settings"
                });
                return (0, a.jsxs)(d.Z, {
                    title: Z,
                    size: (0, r.rl)() ? "fullscreen" : "medium",
                    show: x,
                    onHide: f,
                    children: [(0, a.jsxs)(p.Z, {
                        className: s()({
                            "dl-text-left": (0, r.rl)()
                        }),
                        children: [N, (0, a.jsx)(u.Z, {
                            type: "radio",
                            name: `${i}_permission`,
                            options: l,
                            onSelect: e => S(e),
                            value: w,
                            horizontal: !1,
                            className: "dl-padding-16",
                            containerClassName: " dl-margin-t-16",
                            "aria-label": o.Z.t("patient_common.root.patient_privacy_settings.past_appointments_modal.select_label")
                        }), y && (0, a.jsx)(h.Z, {
                            children: A
                        })]
                    }), (0, a.jsx)(m.Z, {
                        children: (0, a.jsx)(c.Z, {
                            onClick: () => {
                                T({
                                    value: w
                                }), null === j || void 0 === j || j(w)
                            },
                            disabled: B || !w,
                            children: o.Z.t("common.actions.validate")
                        })
                    })]
                })
            }
        },
        267745: (e, t, i) => {
            i.d(t, {
                CU: () => d,
                D6: () => r,
                HX: () => m,
                UA: () => c,
                aA: () => o,
                wX: () => p
            });
            var a = i(8955),
                n = i(990626);
            const o = {
                    ENABLED: "enabled",
                    DISABLED: "disabled"
                },
                l = "past_appointments_modal_displayed",
                s = () => (0, a.U2)(l) || [],
                r = e => {
                    const t = new Set(s());
                    t.add(e), (0, a.t8)(l, [...new Set(t)])
                },
                c = e => s().includes(null === e || void 0 === e ? void 0 : e.id),
                d = e => {
                    var t;
                    return (0, n.cr)("past_appointments_display_opt_in") && e && void 0 === (null === (t = e.patient_privacy_settings) || void 0 === t ? void 0 : t.show_appointment_history)
                },
                p = e => {
                    var t;
                    return (0, n.JT)("past_appointments_display_opt_in") || e && "enabled" === (null === (t = e.patient_privacy_settings) || void 0 === t ? void 0 : t.show_appointment_history)
                },
                m = {
                    SHOW_APPOINTMENT_HISTORY: "show_appointment_history",
                    PATIENT_DIARY_NOTES: "patient_diary_notes"
                }
        },
        227376: () => {},
        418185: () => {},
        97365: (e, t, i) => {
            e.exports = i.p + "4c512128fe5d9521238f.png"
        }
    }
]);
//# sourceMappingURL=../32353-7870a23626750c376d06.js.map