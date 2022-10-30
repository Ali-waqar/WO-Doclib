(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [32781, 78471, 95699, 56354, 63816], {
        520459: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => d
            });
            var i = n(201477),
                a = n(441775),
                o = n(37946),
                s = n(286209),
                l = n.n(s),
                r = n(445884),
                c = (n(405699), n(785893));
            const d = e => {
                const {
                    checked: t,
                    message: n,
                    errorMessage: s,
                    onChange: d
                } = e, m = (0, c.jsx)(a.Z, {
                    id: "collect-consent-tooltip",
                    className: "collect-consent-tooltip",
                    children: r.Z.t("common.consent.tooltip_html")
                });
                return (0, c.jsx)(i.Z, {
                    name: "consent-collect",
                    checked: t,
                    onChange: d,
                    label: (0, c.jsxs)("span", {
                        className: "collect-consent-message",
                        "data-design-system": "base",
                        children: [n, (0, c.jsxs)("span", {
                            className: "inline dl-nowrap",
                            children: ["\xa0", (0, c.jsx)("span", {
                                className: "inline-block",
                                children: (0, c.jsx)(o.Z, {
                                    placement: "right",
                                    overlay: m,
                                    children: (0, c.jsx)(l(), {
                                        className: "icon-infos"
                                    })
                                })
                            })]
                        })]
                    }),
                    errorMessage: s,
                    required: !0,
                    "data-design-system": "base"
                })
            }
        },
        53500: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var i = n(184481),
                a = n(785893);
            const o = e => {
                let {
                    children: t,
                    defaultValue: n,
                    disabled: o,
                    name: s,
                    onChange: l,
                    value: r,
                    ...c
                } = e;
                return (0, a.jsx)("div", {
                    className: "dl-radio-button-group",
                    ...c,
                    "data-design-system": "deprecated",
                    children: i.Children.map(t, (e => e && (0, i.cloneElement)(e, {
                        checked: "undefined" !== typeof r ? r === e.props.value : void 0,
                        defaultChecked: "undefined" !== typeof n ? n === e.props.value : void 0,
                        disabled: "undefined" !== typeof o ? o : e.props.disabled,
                        name: s,
                        onChange: l,
                        className: e.props.className
                    })))
                })
            }
        },
        292611: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var i = n(184481),
                a = n(294184),
                o = n.n(a),
                s = n(258637),
                l = (n(792105), n(785893));
            const r = e => {
                    let {
                        isValid: t = !1,
                        isPristine: n = !0,
                        ...i
                    } = e;
                    const a = n ? "pristine" : t ? "valid" : "error",
                        r = o()("form-control-container", {
                            "form-control-container-pristine": "pristine" === a,
                            "form-control-container-valid": "valid" === a,
                            "form-control-container-error": "error" === a
                        });
                    return (0, l.jsx)("div", {
                        className: r,
                        "data-design-system": "base",
                        children: (0, l.jsx)(s.Z, { ...i
                        })
                    })
                },
                c = (0, i.memo)(r)
        },
        647087: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var i = n(294184),
                a = n.n(i),
                o = n(453040),
                s = (n(337559), n(785893));
            const l = e => {
                let {
                    className: t,
                    children: n,
                    required: i,
                    ...l
                } = e;
                return (0, s.jsxs)(o.Z, {
                    uiStyle: "body-s-regular",
                    component: "label",
                    className: a()("form-label", t),
                    ...l,
                    "data-design-system": "base",
                    children: [n, i && " *"]
                })
            }
        },
        100686: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            n(858401);
            var i = n(785893);
            const a = e => {
                let {
                    size: t
                } = e;
                return (0, i.jsx)("div", {
                    className: `dl-form-space-${t}`,
                    "data-design-system": "base"
                })
            };
            a.defaultProps = {
                size: "normal"
            };
            const o = a
        },
        812396: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h,
                n: () => u
            });
            var i = n(445884),
                a = n(548403),
                o = n.n(a),
                s = n(952893),
                l = n(663586),
                r = n(977954),
                c = n.n(r),
                d = (n(17454), n(785893));
            const m = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                p = (e, t) => [m[e], t.map((e => e.join("-")))].join(" "),
                u = e => e.map(l.zn).map((e => e.localize("HH[h]mm"))).join(" - "),
                h = e => {
                    let {
                        day: t,
                        ranges: n,
                        children: a,
                        showToday: l
                    } = e;
                    return (0, d.jsxs)("time", {
                        itemProp: "openingHours",
                        content: p(t, n),
                        className: "dl-openings-day",
                        "data-design-system": "base",
                        children: [(0, d.jsxs)("div", {
                            className: "dl-openings-day-label",
                            children: [o()(l && c()().day() === Number(t) ? i.Z.t("common.today") : i.Z.t(`common.dateformat.weekdays.day_${t}`)), i.Z.t("common.colon")]
                        }), (0, d.jsxs)("div", {
                            className: "dl-openings-day-slots",
                            children: [(0, s.Z)(n.map(((e, t) => (0, d.jsx)("span", {
                                children: u(e)
                            }, t))), (0, d.jsx)("span", {
                                children: ", "
                            })), a]
                        })]
                    })
                }
        },
        235207: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var i = n(294184),
                a = n.n(i),
                o = n(348187),
                s = n(453040),
                l = n(571442),
                r = n.n(l),
                c = n(785893);
            const d = e => {
                    let {
                        step: t,
                        checked: n,
                        children: i,
                        className: a
                    } = e;
                    return (0, c.jsxs)("div", {
                        className: a,
                        children: [(0, c.jsx)(o.Z, {
                            uiStyle: n ? "success" : "info",
                            children: n ? (0, c.jsx)(r(), {
                                width: 12,
                                height: 12,
                                style: {
                                    fill: "white"
                                }
                            }) : t
                        }), (0, c.jsx)("span", {
                            className: "dl-margin-x-16",
                            children: (0, c.jsx)(s.Z, {
                                children: i
                            })
                        })]
                    })
                },
                m = e => {
                    let {
                        steps: t,
                        step: n,
                        centred: i
                    } = e;
                    return (0, c.jsx)("div", {
                        "data-design-system": "base",
                        children: t.map(((e, t) => (0, c.jsx)(d, {
                            className: a()("dl-margin-y-16 flex", {
                                "dl-align-items-center": i
                            }),
                            step: t + 1,
                            checked: n > t,
                            children: e
                        }, e)))
                    })
                }
        },
        256320: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var i = n(184481),
                a = n(977954),
                o = n.n(a),
                s = n(445884),
                l = n(711700),
                r = n.n(l),
                c = n(12491),
                d = n.n(c),
                m = n(223149),
                p = n.n(m),
                u = n(785893);
            const h = e => {
                    let {
                        date: t,
                        className: n,
                        isApptCanceled: i
                    } = e;
                    const a = o()(t);
                    return (0, u.jsxs)("span", {
                        className: n,
                        children: [(0, u.jsx)(d(), {
                            "aria-label": i ? s.Z.t("appointments.appointment.suspended_appointment") : "",
                            className: "dl-date-header-icon dl-date-header-icon-calendar",
                            fill: "currentColor"
                        }), " ", r()(a.localizeTimeToParisTimeZone(a.isSame(o()(), "year") ? "dddd DD MMMM" : "dddd DD MMMM YYYY")), " ", (0, u.jsx)(p(), {
                            className: "dl-date-header-icon dl-date-header-icon-clock",
                            fill: "currentColor"
                        }), " ", a.localizeTimeToParisTimeZone("HH[:]mm")]
                    })
                },
                _ = (0, i.memo)(h)
        },
        103461: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => O
            });
            var i = n(184481),
                a = n(445884),
                o = n(294184),
                s = n.n(o),
                l = n(288802),
                r = n(990626),
                c = n(8955),
                d = n(5212),
                m = n(545763),
                p = n(348187),
                u = n(755506),
                h = n(800274),
                _ = n(83057),
                x = n(239702),
                g = n(453040);
            const v = n.p + "7a4d2de37b3f8cecee2a.png";
            var f = n(440877);
            var Z = n(785893);
            const j = e => {
                let {
                    show: t,
                    target: n
                } = e;
                const {
                    unreadDocumentsCount: o
                } = (0, i.useContext)(f.Z);
                return (0, Z.jsx)(_.Z, {
                    show: t,
                    target: n,
                    placement: "bottom",
                    className: "dl-margin-0 dl-padding-0",
                    children: (0, Z.jsx)(x.Z, {
                        className: "dl-unread-documents-popover dl-padding-0 dl-margin-0",
                        id: "unreadDocsInfo",
                        children: (0, Z.jsxs)("div", {
                            className: "flex",
                            children: [(0, Z.jsx)("img", {
                                src: v,
                                className: "dl-empty-image dl-margin-x-8",
                                alt: ""
                            }), (0, Z.jsx)(g.Z, {
                                className: "dl-margin-0",
                                uiStyle: "body-s-bold",
                                children: a.Z.t("patient_mobile.root.user_menu.unread_documents_popover", {
                                    count: o
                                })
                            })]
                        })
                    })
                })
            };
            var b = n(320002),
                y = n(84741),
                N = n(243540),
                S = n(829405),
                w = n(552691),
                k = n(617999),
                T = n(845126);
            const C = (0, i.forwardRef)(((e, t) => {
                let {
                    children: n,
                    icon: i,
                    ...a
                } = e;
                return (0, Z.jsx)("li", {
                    className: "dl-full-height dl-flex-shrink-zero",
                    "data-design-system": "base",
                    children: (0, Z.jsxs)("a", {
                        ref: t,
                        className: s()("dl-desktop-navbar-link", {
                            "dl-desktop-navbar-link-active": "/" !== a.href && window.location.pathname.startsWith(a.href)
                        }),
                        ...a,
                        children: [i && (0, Z.jsx)(T.Z, {
                            name: i,
                            className: "dl-margin-r-8"
                        }), n]
                    })
                })
            }));
            var E = n(468644),
                P = n(160160);
            n(869197);
            const I = e => {
                    let {
                        children: t,
                        icon: n,
                        href: i,
                        onClick: a
                    } = e;
                    return (0, Z.jsx)("li", {
                        "data-design-system": "base",
                        children: (0, Z.jsxs)("a", {
                            className: "dl-desktop-navbar-menu-link",
                            href: i,
                            onClick: a,
                            children: [n && (0, Z.jsx)(T.Z, {
                                name: n,
                                className: "dl-margin-r-8"
                            }), t]
                        })
                    })
                },
                A = e => {
                    let {
                        children: t,
                        title: n,
                        onClick: a,
                        ariaLabel: o
                    } = e;
                    const [s, l] = (0, i.useState)(!1), r = (0, i.useRef)((0, P.Z)()), c = (0, i.useRef)(), d = (0, i.useRef)();
                    (0, i.useEffect)((() => {
                        const e = e => {
                            var t;
                            null !== c && void 0 !== c && null !== (t = c.current) && void 0 !== t && t.contains(e.target) || l(!1)
                        };
                        return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
                    }), []), (0, i.useEffect)((() => {
                        const e = e => {
                            var t;
                            s && "Escape" === e.key && (l(!1), null === d || void 0 === d || null === (t = d.current) || void 0 === t || t.focus())
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }), [s]);
                    const m = {
                        "aria-expanded": s
                    };
                    return s && (m["aria-controls"] = r.current), (0, Z.jsxs)("li", {
                        className: "dl-desktop-navbar-menu dl-full-height",
                        ref: c,
                        "data-design-system": "base",
                        children: [(0, Z.jsxs)(E.Z, {
                            className: "dl-transparent-bg dl-border-none dl-desktop-navbar-link dl-desktop-navbar-menu-title",
                            component: "button",
                            "aria-label": o,
                            id: "account-menu",
                            onTap: e => {
                                e.preventDefault(), l((e => !e)), a()
                            },
                            innerRef: d,
                            type: "button",
                            ...m,
                            children: [n, (0, Z.jsx)(T.Z, {
                                name: s ? "angle-up" : "angle-down",
                                className: "dl-margin-l-8"
                            })]
                        }), s && (0, Z.jsx)("ul", {
                            id: r.current,
                            className: "dl-desktop-navbar-links dl-nav-bar-list",
                            children: t
                        })]
                    })
                },
                D = () => {
                    const {
                        hero: e
                    } = (0, S.g)();
                    return (null === e || void 0 === e ? void 0 : e.tagline) && (0, Z.jsxs)("span", {
                        className: "dl-brand-tagline ml-8 text-[13px] leading-8 text-white font-medium font-['Montserrat'] ",
                        children: [(0, Z.jsx)("span", {
                            "aria-hidden": !0,
                            children: "| "
                        }), e.tagline]
                    })
                };
            n(439712);
            const M = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, Z.jsx)(C, {
                        href: "/sessions/new",
                        icon: "user",
                        onClick: t,
                        children: (0, Z.jsxs)("div", {
                            children: [(0, Z.jsx)("div", {
                                children: a.Z.t("patient_mobile.root.login.title")
                            }), (0, Z.jsx)("div", {
                                style: {
                                    opacity: .7,
                                    fontSize: 12
                                },
                                children: a.Z.t("layouts.nav.manage_appointments")
                            })]
                        })
                    })
                },
                R = e => {
                    let {
                        b2b_url: t,
                        isB2bDisplayed: n,
                        trackAnchorClick: i
                    } = e;
                    return (0, Z.jsxs)(Z.Fragment, {
                        children: [n && (0, Z.jsx)("li", {
                            children: (0, Z.jsx)(m.Z, {
                                component: "a",
                                target: "_blank",
                                href: t,
                                uiStyle: "link-primary",
                                className: "dl-margin-x-16 dl-padding-x-16 dl-desktop-navbar-b2b-solid-btn",
                                onClick: () => i(r.ZP.GTM_EVENTS.B2B),
                                children: a.Z.t("layouts.application.are_you_doc")
                            })
                        }), (0, Z.jsx)(C, {
                            href: (0, d._y)() ? `https://doctolib.zendesk.com/hc/${window.locale}` : `https://doctolibpatient.zendesk.com/hc/${window.locale}?source=help_button`,
                            icon: "circle-question",
                            onClick: () => i(r.ZP.GTM_EVENTS.HELP),
                            target: "_blank",
                            children: a.Z.t("patient_mobile.root.main_menu.help")
                        })]
                    })
                },
                O = e => {
                    var t;
                    let {
                        b2b_url: n,
                        hide_nav_links: o,
                        hideDocButton: m = !1,
                        hasTemporaryWarning: _ = !1
                    } = e;
                    const x = (0, h.ZP)(),
                        g = x && !(0, d._y)(),
                        v = "/" === window.location.pathname,
                        {
                            isBackgroundHero: T
                        } = (0, S.g)(),
                        {
                            unreadDocumentsCount: E
                        } = (0, i.useContext)(f.Z),
                        {
                            count: P
                        } = (0, N.Z)(),
                        {
                            data: O
                        } = (0, b.gd)(),
                        [L, F] = (0, i.useState)(v),
                        q = (0, i.useRef)(),
                        z = e => {
                            l.Z.trackGtmEvent({
                                category: r.ZP.GTM_CATEGORIES.NAVBAR,
                                action: e,
                                label: l.Z.getCurrentPageType()
                            })
                        };
                    if ((0, i.useEffect)((() => {
                            const e = window.addEventListener("resize", (() => F(!1)));
                            return () => window.removeEventListener("resize", e)
                        }), []), o) return (0, Z.jsx)(w.Z, {
                        large: !x,
                        className: s()("dl-desktop-navbar", {
                            "dl-navbar-translucid": T && !_
                        }),
                        children: (0, Z.jsxs)("div", {
                            className: "dl-desktop-navbar-content",
                            children: [(0, Z.jsx)(k.Z, {}), (0, Z.jsxs)("ul", {
                                className: "flex dl-align-items-center dl-nav-bar-list",
                                children: [(0, Z.jsx)(R, {
                                    b2b_url: n,
                                    isB2bDisplayed: !g && !m,
                                    trackAnchorClick: z
                                }), g ? (0, Z.jsx)(C, {
                                    href: "/deconnexion?redirect=/",
                                    icon: "right-from-bracket",
                                    onClick: () => {
                                        (0, c.SI)(), z(r.ZP.GTM_EVENTS.LOG_OUT)
                                    },
                                    children: a.Z.t("patient_mobile.root.user_menu.logout")
                                }) : !(0, d._y)() && (0, Z.jsx)(M, {
                                    onClick: () => z(r.ZP.GTM_EVENTS.SIGN_IN)
                                })]
                            })]
                        })
                    });
                    let G = 0;
                    return x && !x.verified_at && (G += 1), x && !x.email_verified_at && (G += 1), (0, Z.jsx)(w.Z, {
                        large: !x,
                        className: s()("dl-desktop-navbar", {
                            "dl-navbar-translucid": T && !_
                        }),
                        children: (0, Z.jsxs)("div", {
                            className: "dl-desktop-navbar-content",
                            children: [(0, Z.jsxs)("ul", {
                                className: "flex dl-align-items-center dl-nav-bar-list",
                                children: [(0, Z.jsx)("li", {
                                    children: (0, Z.jsx)("a", {
                                        href: "/",
                                        title: a.Z.t("common.home"),
                                        "aria-label": a.Z.t("common.home"),
                                        className: "flex",
                                        onClick: () => z(r.ZP.GTM_EVENTS.BACK_TO_HOME),
                                        children: (0, Z.jsx)(k.Z, {})
                                    })
                                }), (0, Z.jsx)(D, {}), x && !v && (0, Z.jsx)(C, {
                                    href: "/",
                                    onClick: () => z(r.ZP.GTM_EVENTS.BACK_TO_HOME),
                                    children: a.Z.t("common.home")
                                })]
                            }), (0, Z.jsxs)("ul", {
                                className: "flex dl-align-items-center dl-nav-bar-list",
                                children: [(0, Z.jsx)(R, {
                                    b2b_url: n,
                                    isB2bDisplayed: !g && !m,
                                    trackAnchorClick: z
                                }), g ? (0, Z.jsxs)(Z.Fragment, {
                                    children: [y.Su.globally() && (0, Z.jsxs)(C, {
                                        href: "/patient_requests/requests",
                                        onClick: () => z(r.ZP.GTM_EVENTS.MY_REQUESTS),
                                        children: [a.Z.t("patient_request.root.request_view.title"), P > 0 && (0, Z.jsx)(p.Z, {
                                            className: "dl-margin-l-8",
                                            children: P
                                        })]
                                    }), (0, Z.jsxs)(C, {
                                        href: "/account/appointments",
                                        onClick: () => z(r.ZP.GTM_EVENTS.MY_APPOINTMENTS),
                                        children: [a.Z.t("patient_mobile.root.user_menu.appointments"), O > 0 && (0, Z.jsx)(p.Z, {
                                            className: "dl-margin-l-8",
                                            children: O
                                        })]
                                    }), (0, Z.jsxs)(C, {
                                        href: "/account/documents",
                                        onClick: () => z(r.ZP.GTM_EVENTS.MY_DOCUMENTS),
                                        ref: q,
                                        children: [a.Z.t("patient_mobile.root.user_menu.documents"), E > 0 && (0, Z.jsxs)(Z.Fragment, {
                                            children: [(0, Z.jsx)(j, {
                                                show: L,
                                                target: q.current
                                            }), (0, Z.jsx)(p.Z, {
                                                className: "dl-margin-l-8",
                                                children: E
                                            })]
                                        })]
                                    }), (null === (t = x.patient_questions) || void 0 === t ? void 0 : t.length) > 0 && (0, Z.jsx)(C, {
                                        href: "/account/questions",
                                        onClick: () => z(r.ZP.GTM_EVENTS.MY_QUESTIONNAIRES),
                                        children: a.Z.t("patient_mobile.root.user_menu.questions")
                                    }), (0, Z.jsxs)(A, {
                                        ariaLabel: a.Z.t("patient_mobile.root.user_menu.additional_links"),
                                        title: (0, Z.jsxs)(Z.Fragment, {
                                            children: [x.human_full_name, G > 0 && (0, Z.jsx)(p.Z, {
                                                className: "dl-margin-l-8",
                                                children: G
                                            })]
                                        }),
                                        onClick: () => F(!1),
                                        children: [(0, Z.jsxs)(I, {
                                            href: "/account/edit",
                                            icon: "user",
                                            onClick: () => z(r.ZP.GTM_EVENTS.MY_ACCOUNT),
                                            children: [a.Z.t("common.my_account"), G > 0 && (0, Z.jsx)(p.Z, {
                                                className: "dl-margin-l-8",
                                                children: G
                                            })]
                                        }), (0, Z.jsx)(u.Z, {}), (0, Z.jsx)(I, {
                                            href: "/account/relatives",
                                            icon: "users",
                                            onClick: () => z(r.ZP.GTM_EVENTS.MY_RELATIVES),
                                            children: a.Z.t("patient_mobile.root.user_menu.relatives")
                                        }), (0, Z.jsx)(u.Z, {}), (0, Z.jsx)(I, {
                                            href: "/deconnexion?redirect=/",
                                            icon: "right-from-bracket",
                                            onClick: () => {
                                                (0, c.SI)(), z(r.ZP.GTM_EVENTS.LOG_OUT)
                                            },
                                            children: a.Z.t("patient_mobile.root.user_menu.logout")
                                        })]
                                    })]
                                }) : !(0, d._y)() && (0, Z.jsx)(M, {
                                    onClick: () => z(r.ZP.GTM_EVENTS.SIGN_IN)
                                })]
                            })]
                        })
                    })
                }
        },
        589655: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => Yl
            });
            var i = n(677691),
                a = n(24553),
                o = n(288802),
                s = n(765508),
                l = n(192772),
                r = n(184481),
                c = n(294184),
                d = n.n(c),
                m = n(63397),
                p = n(990626),
                u = n(445884),
                h = n(545763),
                _ = n(453040),
                x = n(712722),
                g = n(784600),
                v = n(929014),
                f = n(297516),
                Z = n(710270),
                j = n(486118),
                b = n(422930),
                y = n(446962),
                N = n(216672),
                S = n(360123),
                w = n(395591),
                k = n(921114),
                T = n(552691),
                C = n(697575),
                E = n(985882),
                P = (n(750822), n(1107)),
                I = n(5212),
                A = n(871719),
                D = n(888502),
                M = n(982761),
                R = n(226001),
                O = n(396693),
                L = n(167029),
                F = n(785893);
            const q = e => e.find((e => e.main_anonymous_appointment)),
                z = e => {
                    let {
                        onDesktop: t,
                        showRetry: n
                    } = e;
                    const i = (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(v.Z, {
                            variant: "deprecated-alert-interface",
                            uiStyle: "error",
                            className: "dl-margin-16",
                            children: (0, F.jsx)("b", {
                                children: u.Z.t("patient_mobile.root.account.appointments.match_error.could_not_create_account")
                            })
                        }), n && (0, F.jsxs)(F.Fragment, {
                            children: [(0, F.jsx)("div", {
                                className: d()("dl-margin-x-16", {
                                    "dl-text-left": !t
                                }),
                                children: (0, F.jsx)(_.Z, {
                                    children: u.Z.t("patient_mobile.root.account.appointments.match_error.explanation_html")
                                })
                            }), (0, F.jsx)(h.Z, {
                                uiStyle: "info-link",
                                onTap: () => {
                                    window.location.pathname = "/appointments/anonymous/register"
                                },
                                children: u.Z.t("patient_mobile.root.account.appointments.match_error.retry_creating_account")
                            })]
                        })]
                    });
                    return t ? (0, F.jsx)("div", {
                        className: "dl-sm-container dl-text-center",
                        children: i
                    }) : (0, F.jsx)(g.Z, {
                        className: "dl-text-center dl-padding-0",
                        children: i
                    })
                },
                G = function(e, t) {
                    var n, i, a;
                    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return e && e.telehealth ? !t && null !== e && void 0 !== e && null !== (n = e.patient) && void 0 !== n && n.master_patient_id ? null : (0, F.jsxs)("div", {
                        className: d()({
                            "dl-padding-t-16 dl-padding-x-16": o
                        }),
                        children: [t && (0, F.jsx)(b.ZP, {
                            appointment: e
                        }), !(null !== e && void 0 !== e && null !== (i = e.patient) && void 0 !== i && i.master_patient_id) && (0, F.jsx)(j.Z, {
                            email: null === e || void 0 === e || null === (a = e.patient) || void 0 === a ? void 0 : a.email
                        })]
                    }) : null
                },
                V = e => {
                    let {
                        appointment: t,
                        onDismiss: n,
                        showConfirmation: i,
                        withMatchError: a,
                        throttle: o
                    } = e;
                    (0, y.Z)(p.ZP.GTM_CONTENT_GROUPS.ANONYMOUS_APPOINTMENTS_APPOINTMENT_DETAILS, {
                        appointment: t
                    });
                    const s = !o;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(A.ZP, {
                            renderingContext: "anonymous_appointment"
                        }), (0, F.jsx)(x.Z, {
                            children: (0, F.jsxs)(f.Z, {
                                children: [(0, F.jsx)(T.Z, {
                                    title: u.Z.t("patient_common.root.appointments.anonymous_title", {
                                        count: 1
                                    }),
                                    onBack: n
                                }), (0, F.jsxs)("div", {
                                    className: d()({
                                        "dl-padding-t-16": t.telehealth
                                    }),
                                    children: [a && (0, F.jsx)(z, {
                                        showRetry: s,
                                        onDesktop: !1
                                    }), (0, F.jsx)(w.Z, {
                                        hideMap: !0,
                                        appointment: t,
                                        fullWidth: !t.telehealth,
                                        marginOnHeaderCard: t.telehealth,
                                        isAnonymousFunnel: !0,
                                        children: G(t, i, !0)
                                    })]
                                })]
                            })
                        })]
                    })
                },
                B = e => {
                    let {
                        appointments: t,
                        onDismiss: n,
                        onAppointment: i,
                        showConfirmation: a,
                        withMatchError: o,
                        throttle: s
                    } = e;
                    const l = q(t),
                        r = !s;
                    (0, y.Z)(p.ZP.GTM_CONTENT_GROUPS.ANONYMOUS_APPOINTMENTS_APPOINTMENT_DETAILS, {
                        appointment: l
                    });
                    const c = t.some((e => e.patient.id !== l.patient.id));
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(A.ZP, {
                            renderingContext: "anonymous_appointments_list"
                        }), (0, F.jsx)(x.Z, {
                            children: (0, F.jsxs)(f.Z, {
                                children: [(0, F.jsx)(T.Z, {
                                    title: u.Z.t("patient_common.root.appointments.anonymous_title", {
                                        count: t.length
                                    }),
                                    onClose: n,
                                    children: (0, F.jsx)(k.Z, {
                                        position: "left"
                                    })
                                }), o && (0, F.jsx)(z, {
                                    showRetry: r,
                                    onDesktop: !1
                                }), 0 === t.length && (0, F.jsx)("div", {
                                    className: "dl-upcoming-empty",
                                    children: u.Z.t("patient_mobile.root.account.appointments.upcoming_empty", {
                                        button: (0, F.jsx)(h.Z, {
                                            onTap: n,
                                            children: u.Z.t("patient_mobile.root.account.appointments.find_appointment")
                                        })
                                    })
                                }), G(l, a, !0), t.map((e => (0, F.jsx)(C.Z, {
                                    item: { ...e,
                                        show_patient: c
                                    },
                                    onTap: e => {
                                        let {
                                            appointment: t
                                        } = e;
                                        return i(t)
                                    }
                                }, e.id)))]
                            })
                        })]
                    })
                },
                H = e => {
                    let {
                        appointments: t,
                        withMatchError: n,
                        showConfirmation: i,
                        throttle: a
                    } = e;
                    const o = !a,
                        s = (e => {
                            if (e.length < 2) return e;
                            const t = [...e],
                                n = t.findIndex((e => e.main_anonymous_appointment));
                            return n > 0 && t.unshift(t.splice(n, 1)[0]), t
                        })(t),
                        l = q(s);
                    return (0, y.Z)(p.ZP.GTM_CONTENT_GROUPS.ANONYMOUS_APPOINTMENTS_APPOINTMENT_DETAILS, {
                        appointment: l
                    }), (0, F.jsxs)(F.Fragment, {
                        children: [n && (0, F.jsx)(z, {
                            showRetry: o,
                            onDesktop: !0
                        }), s.map(((e, t) => (0, F.jsx)("div", {
                            className: "dl-margin-t-16",
                            children: (0, F.jsx)(w.Z, {
                                bigHeader: !0,
                                hideMap: !0,
                                appointment: e,
                                isAnonymousFunnel: !0,
                                children: !t && G(e, i)
                            })
                        }, e.id)))]
                    })
                },
                U = e => {
                    let {
                        appointments: t
                    } = e;
                    if (1 === (null === t || void 0 === t ? void 0 : t.length)) {
                        const e = q(t);
                        return e.needs_preparation ? "/appointments/anonymous/charges/new" : (0, I.rl)() ? `/appointments/anonymous/${e.id}` : "/appointments/anonymous/list"
                    }
                    return "/appointments/anonymous/list"
                },
                $ = e => {
                    let {
                        appointments: t,
                        setInitialAnonymousQueryParams: n
                    } = e;
                    const {
                        search: i
                    } = (0, a.useLocation)(), o = (0, a.useNavigate)();
                    return (0, r.useEffect)((() => {
                        n({
                            withMatchError: i.includes("match_error=true"),
                            showConfirmation: i.includes("confirmation=true"),
                            throttle: i.includes("throttled=true")
                        }), o({
                            search: ""
                        })
                    }), []), (0, F.jsx)(a.Navigate, {
                        to: U({
                            appointments: t
                        }),
                        replace: !0
                    })
                },
                Y = () => {
                    const {
                        state: e
                    } = (0, a.useLocation)(), {
                        appointmentId: t
                    } = (0, a.useParams)();
                    return (0, F.jsx)(O.Z, {
                        value: {
                            type: "anonymous_page",
                            appointment_id: t
                        },
                        children: (0, F.jsx)(M.L, {
                            appointmentId: t,
                            children: (0, F.jsx)(D.Z, {
                                document: null === e || void 0 === e ? void 0 : e.doc
                            })
                        })
                    })
                },
                W = () => {
                    var e;
                    const t = (0, r.useContext)(l.pu),
                        {
                            data: n,
                            fetchAppointments: i,
                            loading: o,
                            error: s
                        } = (0, Z.Z)({
                            url: "/appointments/anonymous",
                            trigger: "fetchAppointments"
                        });
                    (0, r.useEffect)((() => {
                        i()
                    }), []);
                    const c = e => {
                            e.preventDefault(), t.dismiss("/")
                        },
                        d = e => {
                            e.preventDefault(), t.swap("/")
                        },
                        p = (0, I.Zz)(),
                        h = p ? r.Fragment : x.Z,
                        [g, v] = (0, r.useState)({});
                    return o ? p ? null : (0, F.jsx)(E.Z, {}) : s ? (0, F.jsx)(_.Z, {
                        children: u.Z.t("common.error")
                    }) : Array.isArray(n) ? (0, F.jsxs)(a.Routes, {
                        children: [(0, F.jsx)(a.Route, {
                            index: !0,
                            element: (0, F.jsx)($, {
                                appointments: n,
                                setInitialAnonymousQueryParams: v
                            })
                        }), (0, F.jsx)(a.Route, {
                            path: "list",
                            element: p ? (0, F.jsx)(H, {
                                appointments: n,
                                ...g
                            }) : (0, F.jsx)(B, {
                                appointments: n,
                                onAppointment: e => t.show(`/appointments/anonymous/${e.id}`),
                                onDismiss: d,
                                ...g
                            })
                        }), (0, F.jsx)(a.Route, {
                            path: "register",
                            element: (0, F.jsx)(h, {
                                children: (0, F.jsx)(N.Z, {
                                    appointments: n,
                                    onDesktop: p,
                                    action: "login" === (null === (e = m.parse(window.location.search)) || void 0 === e ? void 0 : e.action) ? P.ym : P.kp,
                                    onDismiss: () => (e => {
                                        t.show({
                                            pathname: U({
                                                appointments: e
                                            })
                                        }, {
                                            from_anonymous: !0
                                        })
                                    })(n)
                                })
                            })
                        }), (0, F.jsx)(a.Route, {
                            path: ":appointmentId/documents/:documentId",
                            element: (0, F.jsx)(Y, {})
                        }), (0, F.jsx)(a.Route, {
                            path: ":appointmentId/instructions",
                            element: (0, F.jsx)(R.Z, {})
                        }), n.map((e => (0, F.jsx)(a.Route, {
                            path: `${e.id}`,
                            element: e.needs_preparation ? (0, F.jsx)(a.Navigate, {
                                to: `/appointments/${e.id}/charges/new`,
                                replace: !0
                            }) : (0, F.jsx)(V, {
                                appointment: e,
                                onDismiss: 1 === n.length ? d : c,
                                ...g
                            })
                        }, e.id))), (0, F.jsx)(a.Route, {
                            path: "verify",
                            element: (0, F.jsx)(h, {
                                children: (0, F.jsx)(L.Z, {
                                    anonymousAppointment: q(n)
                                })
                            })
                        }), (0, F.jsx)(a.Route, {
                            path: "charges/new",
                            element: (0, F.jsx)(S.Z, {
                                fetchAppointments: i
                            })
                        })]
                    }) : null
                };
            var K = n(965468),
                X = n.n(K),
                Q = n(597043);
            const J = e => {
                let {
                    children: t
                } = e;
                return (0, F.jsx)("div", {
                    className: "dl-city-frieze",
                    children: t
                })
            };
            var ee = n(51048);
            const te = e => (0, F.jsx)(J, {
                children: (0, F.jsxs)("div", {
                    className: "dl-desktop-anonymous-appointment dl-margin-t-16 dl-margin-b",
                    children: [(0, F.jsx)(ee.Z, {}), (0, F.jsx)(Q.Z, {
                        container: !0,
                        xsJustify: "center",
                        xsSpacing: 0,
                        children: (0, F.jsx)(X(), {
                            className: "dl-desktop-anonymous-appointment-logo"
                        })
                    }), (0, F.jsx)("div", {
                        className: "dl-desktop-anonymous-appointment-wrapper dl-margin-b",
                        children: (0, F.jsx)(W, { ...e
                        })
                    })]
                })
            });
            var ne = n(364579),
                ie = n(760616),
                ae = n(652032);
            const oe = () => {
                const e = (0, ae.Z)(),
                    t = (0, a.useResolvedPath)("./..").pathname;
                return e.profileSlug ? (0, F.jsx)(ie.Z, {
                    profilePath: t,
                    profileSlug: e.profileSlug,
                    ...e
                }) : (0, F.jsx)(ne.Z, {
                    title: ""
                })
            };
            var se = n(977954),
                le = n.n(se),
                re = n(496486),
                ce = n(618446),
                de = n.n(ce),
                me = n(516590),
                pe = n(747317),
                ue = n(159162),
                he = n(845126),
                _e = n(218334),
                xe = n(177949),
                ge = n(451421),
                ve = n(528846),
                fe = n(348187),
                Ze = n(893157),
                je = n(883764),
                be = n(256320),
                ye = n(617999),
                Ne = n(534130);
            const Se = "cancel",
                we = "connect",
                ke = () => (0, F.jsx)(Q.Z, {
                    item: !0,
                    xsSize: 12,
                    children: (0, F.jsx)("div", {
                        className: "flex dl-justify-center  dl-anonymous-session-header dl-margin-16",
                        children: (0, F.jsx)(X(), {})
                    })
                }),
                Te = () => (0, F.jsx)(Ze.Z, {
                    title: (0, F.jsx)(ye.Z, {}),
                    loading: !0,
                    className: "dl-anonymous-session-header dl-flex-center"
                }),
                Ce = e => {
                    const t = [u.Z.t("appointments.anonymous_show.telehealth.steps.login")];
                    return e && t.push(u.Z.t("appointments.anonymous_show.telehealth.steps.billing")), t.push(u.Z.t("appointments.anonymous_show.telehealth.steps.confirm")), t
                },
                Ee = e => {
                    let {
                        steps: t,
                        onConfirm: n,
                        uncancelable_reason: i,
                        phoneNumber: a,
                        onCancel: o,
                        profile: {
                            name_with_title: s
                        },
                        id: l,
                        startDate: r,
                        displayBillingStep: c,
                        ...d
                    } = e;
                    return (0, F.jsx)("div", {
                        className: "dl-flex-column dl-flex-center",
                        children: (0, F.jsxs)("div", {
                            className: "dl-doctor-booking-actions-steps dl-position-relative",
                            children: [(0, F.jsxs)("div", {
                                className: "flex",
                                children: [(0, F.jsx)(he.Z, {
                                    name: "solid/diamond-exclamation",
                                    color: "warning-090",
                                    size: "medium",
                                    className: "dl-margin-r"
                                }), (0, F.jsx)("div", {
                                    className: "dl-flex-grow",
                                    children: (0, F.jsx)(_.Z, {
                                        className: "dl-doctor-booking-title dl-margin-b",
                                        children: u.Z.t("appointments.anonymous_show.telehealth.steps.warning_html")
                                    }, "title")
                                })]
                            }), t.map(((e, t) => (0, F.jsxs)("div", {
                                className: "flex dl-padding-y-8",
                                children: [(0, F.jsx)(fe.Z, {
                                    uiStyle: "info",
                                    className: "dl-margin-r",
                                    children: t + 1
                                }), (0, F.jsx)("div", {
                                    className: "dl-flex-column",
                                    children: (0, F.jsx)(_.Z, {
                                        children: e
                                    })
                                })]
                            }, `step-${t}`))), (0, F.jsxs)("div", {
                                className: "dl-flex-column dl-full-width dl-justify-around dl-margin-t-16",
                                children: [(0, F.jsx)(h.Z, {
                                    onClick: () => {
                                        (0, me.ZP)({
                                            name: "telehealth_acknowledge_doctor_booking",
                                            details: {
                                                appointment_id: (0, ge.id)(l) || void 0,
                                                anonymous: !0
                                            }
                                        }, {
                                            schema: "patient"
                                        }), n()
                                    },
                                    children: u.Z.t("common.actions.confirm")
                                }), (0, F.jsx)(Ne.Z, {
                                    icon: !1,
                                    appointmentId: l,
                                    uncancelableReason: i,
                                    date: r,
                                    doctorName: s,
                                    doctorPhone: a,
                                    tooLate: r.diff(le()(), "hours") < 4,
                                    future: r.isAfter(),
                                    onCancelationConfirm: o,
                                    pricing: c,
                                    ...d
                                })]
                            })]
                        })
                    })
                },
                Pe = e => {
                    let {
                        profile: t,
                        startDate: n,
                        headerClassname: i,
                        displayBillingStep: a,
                        ...o
                    } = e;
                    return (0, F.jsxs)("div", {
                        className: d()(i, "dl-flex-column"),
                        children: [(0, F.jsxs)(g.Z, {
                            className: "dl-margin-16 dl-padding-0",
                            header: (0, F.jsx)(be.Z, {
                                date: n
                            }),
                            children: [t.cloudinary_public_id ? (0, F.jsx)("div", {
                                className: "dl-card-picture dl-padding-16",
                                children: (0, F.jsx)(ve.Z, {
                                    className: "m-auto",
                                    rounded: !0,
                                    src: (0, je.Z)(t.is_organization ? "default_organization_avatar" : t.cloudinary_public_id, "w_62,h_62,c_fill,g_face"),
                                    alt: ""
                                })
                            }) : null, (0, F.jsxs)("div", {
                                className: "dl-padding-x-16 dl-padding-b-16",
                                children: [(0, F.jsx)(_.Z, {
                                    align: "center",
                                    uiStyle: "title-s-bold",
                                    className: "dl-padding-b-8",
                                    children: t.name_with_title ? u.Z.t("appointments.anonymous_show.telehealth.title", {
                                        doctor_name: t.name_with_title
                                    }) : u.Z.t("appointments.anonymous_show.telehealth.title_with_no_doctor_name")
                                }), a && (0, F.jsx)(_.Z, {
                                    align: "center",
                                    children: u.Z.t("appointments.anonymous_show.telehealth.subtitle")
                                })]
                            })]
                        }), (0, F.jsx)(g.Z, {
                            className: "dl-margin-x-16 dl-margin-b",
                            children: (0, F.jsx)(Ee, {
                                profile: t,
                                startDate: le()(n),
                                displayBillingStep: a,
                                steps: Ce(a),
                                ...o
                            })
                        })]
                    })
                },
                Ie = e => {
                    let {
                        appointmentAction: t,
                        needsPreparation: n,
                        displayBillingStep: i,
                        bookingToken: o,
                        proposalToken: s,
                        onLogout: l,
                        telehealth: c,
                        appointmentId: d,
                        startDate: m,
                        cancelable: p
                    } = e;
                    const h = new URLSearchParams(window.location.search);
                    s && h.set("proposal_token", s);
                    const x = `/sessions/anonymous/${o}.json?${h}`,
                        g = (0, a.useNavigate)(),
                        f = (0, r.useRef)(),
                        [j, b] = (0, r.useState)(["", "", ""]),
                        [y, N] = (0, r.useState)(!1),
                        [S, w] = (0, r.useState)(null),
                        [k, T] = (0, r.useState)(0),
                        [C, E] = (0, r.useState)(null),
                        P = t && c,
                        I = P && t === we,
                        A = P && t === Se,
                        D = e => {
                            const {
                                platforms: t
                            } = window, n = e && e.redirection || "/appointments/anonymous/";
                            "mobile" === t.variant ? (e.logout && l && l(), g(n)) : window.location.href = n
                        },
                        {
                            destroy: M
                        } = (0, xe.Z)({
                            appointmentId: d,
                            onSuccess: e => {
                                let {
                                    data: t
                                } = e;
                                return D(t)
                            }
                        }),
                        {
                            post: R
                        } = (0, Z.Z)({
                            url: x,
                            method: "post",
                            trigger: "post",
                            onFailure: e => {
                                let {
                                    data: t = {}
                                } = e;
                                const {
                                    captcha_required: n = !1,
                                    invalid_trigram: i = !1
                                } = t;
                                N(n), n && S && (i ? E("error") : T(k + 1)), n || E("error")
                            },
                            onSuccess: e => {
                                let {
                                    data: a
                                } = e;
                                (0, me.ZP)({
                                    itemId: d,
                                    itemType: pe.i.APPOINTMENT,
                                    name: "anonymous_session_pin_input",
                                    details: {
                                        appointmentAction: t,
                                        needsPreparation: n,
                                        pricing: i
                                    }
                                }), E("success"), A ? M() : D(a)
                            }
                        }),
                        O = (0, r.useCallback)((0, re.debounce)(((e, t) => {
                            R({
                                last_name_prefix: e,
                                [ue.nY]: t || void 0
                            })
                        }), 200), []);
                    (0, r.useEffect)((() => {
                        clearTimeout(f.current);
                        const e = j.join("");
                        if (!y || !(0, re.isEmpty)(S)) return 3 === e.length ? O(e, S) : 2 === e.length && (f.current = setTimeout((() => O(e, S)), 2e3)), () => clearTimeout(f.current)
                    }), [j, S, y]);
                    const L = P ? A ? u.Z.t("appointments.anonymous_show.telehealth.session_form.secure_cancel") : I ? u.Z.t("appointments.anonymous_show.title") : u.Z.t("appointments.anonymous_show.telehealth.session_form.secure_confirm") : c ? u.Z.t("appointments.anonymous_show.title_telehealth") : s ? u.Z.t("appointments.anonymous_show.appointment_proposal.title") : u.Z.t("appointments.anonymous_show.title"),
                        q = P && !I ? (0, F.jsxs)("span", {
                            children: [u.Z.t(`appointments.anonymous_show.telehealth.session_form.secure_${t}_action`), " ", u.Z.t("appointments.anonymous_show.telehealth.session_form.login_html")]
                        }) : s ? u.Z.t("appointments.anonymous_show.appointment_proposal.login_html") : u.Z.t("appointments.anonymous_show.explanation_html");
                    return !A || p && le()(m).isAfter() ? (0, F.jsxs)("div", {
                        className: "dl-text-center dl-flex-column dl-align-items-center",
                        children: [(0, F.jsx)(v.Z, {
                            variant: "deprecated-alert-interface",
                            className: "dl-margin-b",
                            uiStyle: A ? "warning" : "info",
                            icon: "solid/lock",
                            children: L
                        }), (0, F.jsx)(_.Z, {
                            block: !0,
                            uiStyle: "title-s-bold",
                            className: "dl-margin-x-16",
                            children: q
                        }), (0, F.jsxs)("div", {
                            className: "flex dl-align-items-center dl-justify-center",
                            children: [(0, F.jsx)(_e.ZP, {
                                autoFocusOnMount: !0,
                                hideValues: !1,
                                displayMode: _e.B.ALWAYS_VISIBLE,
                                shape: _e.X3.SQUARE,
                                inputMode: "text",
                                pattern: "[A-Za-z]*",
                                type: "text",
                                values: j,
                                withLockIcon: !1,
                                onChange: e => {
                                    let {
                                        values: t
                                    } = e;
                                    const n = t.map((e => e.toUpperCase()));
                                    de()(n, j) || (E(), b(n))
                                },
                                validationState: C
                            }), C && (0, F.jsxs)("div", {
                                className: "dl-anonymous-form-validation-icon",
                                children: ["error" === C && (0, F.jsx)(he.Z, {
                                    name: "solid/circle-xmark",
                                    color: "error-090",
                                    size: "medium"
                                }), "success" === C && (0, F.jsx)(he.Z, {
                                    name: "solid/circle-check",
                                    color: "success-110",
                                    size: "medium"
                                })]
                            })]
                        }), y && (0, F.jsx)(ue.ZP, {
                            nonce: k,
                            onIAmHuman: w,
                            className: "dl-margin-b-16"
                        }), (0, F.jsx)(_.Z, {
                            uiStyle: "body-xs-regular",
                            color: "neutral-090",
                            children: u.Z.t("appointments.anonymous_show.examples_html")
                        })]
                    }) : (0, F.jsx)(a.Navigate, {
                        to: `/sessions/anonymous/${o}/telehealth`
                    })
                };
            var Ae = n(711700),
                De = n.n(Ae),
                Me = n(406288),
                Re = n(755506),
                Oe = n(335963),
                Le = n(591035);
            const Fe = "new",
                qe = "initial",
                ze = e => {
                    const {
                        type: t,
                        date: n,
                        profile: i,
                        substitute: a,
                        substitutionWording: o
                    } = e, s = le()(n), l = (0, I.rl)(), r = new Map([
                        [Fe, "patient_common.root.appointment_proposals.show.new_appointment_title"],
                        [qe, "patient_common.root.appointment_proposals.show.initial_appointment_title"]
                    ]), c = t === Fe;
                    return (0, F.jsxs)("div", {
                        className: "dl-proposals-appointment",
                        children: [!l && (0, F.jsxs)("div", {
                            className: "dl-flex-row dl-justify-center",
                            children: [c && (0, F.jsx)(Oe.Z, {
                                color: "primary-020",
                                className: "dl-margin-r-8",
                                label: u.Z.t("common.header.tag.new")
                            }), (0, F.jsx)(_.Z, {
                                uiStyle: "body-s-bold",
                                color: "neutral-090",
                                component: "div",
                                children: u.Z.t(r.get(t), {
                                    days_from_now: le()(n).fromNow()
                                })
                            })]
                        }), (0, F.jsxs)(g.Z, {
                            className: d()("dl-padding-0", {
                                "dl-margin-y-16": l,
                                "dl-margin-16": !l,
                                "dl-proposals-appointment-card-new": c
                            }),
                            border: !0,
                            children: [(0, F.jsx)(Me.Z, {
                                children: (0, F.jsx)(Le.Z, {
                                    compact: !0,
                                    substitute: a,
                                    substitution_wording: o,
                                    doctor: i,
                                    className: d()({
                                        "dl-proposals-appointment-card-new-doctor": c
                                    })
                                })
                            }), (0, F.jsx)(Re.Z, {
                                className: d()({
                                    "dl-proposals-appointment-card-new-divider": c
                                })
                            }), (0, F.jsx)(Me.Z, {
                                children: (0, F.jsxs)("div", {
                                    className: "dl-flex-column dl-flex-center",
                                    children: [!l && (0, F.jsx)(_.Z, {
                                        uiStyle: "body-s-regular",
                                        component: "div",
                                        className: "dl-text-center dl-gray-font",
                                        children: u.Z.t("patient_common.root.appointment_proposals.show.date_title")
                                    }), (0, F.jsxs)("div", {
                                        className: "dl-flex-center",
                                        children: [(0, F.jsxs)("div", {
                                            className: "dl-flex-center dl-margin-r",
                                            children: [(0, F.jsx)(he.Z, {
                                                name: "regular/calendar-day",
                                                size: "xsmall",
                                                className: "dl-margin-r-4"
                                            }), (0, F.jsx)(_.Z, {
                                                uiStyle: "body-s-bold",
                                                color: "neutral-150",
                                                component: "div",
                                                className: "dl-text-center",
                                                children: l ? De()(le()(s).localize("ddd DD MMM")) : De()(le()(s).localize("dddd DD MMMM"))
                                            })]
                                        }), (0, F.jsxs)("div", {
                                            className: "dl-flex-center dl-margin-r",
                                            children: [(0, F.jsx)(he.Z, {
                                                name: "regular/clock",
                                                size: "xsmall",
                                                className: "dl-margin-r-4"
                                            }), (0, F.jsx)(_.Z, {
                                                uiStyle: "body-s-bold",
                                                color: "neutral-150",
                                                component: "div",
                                                className: "dl-text-center",
                                                children: le()(s).localize("HH[:]mm")
                                            })]
                                        }), l && (0, F.jsx)("div", {
                                            className: "dl-flex-center",
                                            children: (0, F.jsx)(_.Z, {
                                                uiStyle: "body-s-bold",
                                                color: "neutral-150",
                                                component: "div",
                                                className: "dl-text-center",
                                                children: De()(le()(n).fromNow())
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                },
                Ge = {
                    profile: {
                        cloudinary_public_id: "default_doctor_avatar_m",
                        medical: !0,
                        name_with_title: "Dr Doctolib",
                        speciality: "Doctospecial",
                        title: "Dr"
                    },
                    appointment: {
                        start_date: "2052-02-13T10:00:00.000+01:00"
                    },
                    proposal: {
                        start_date: "2052-01-12T10:00:00.000+01:00"
                    }
                },
                Ve = e => {
                    let {
                        children: t
                    } = e;
                    const n = (0, I.rl)(),
                        i = Ge;
                    return (0, F.jsxs)(g.Z, {
                        className: "dl-md-margin-t-xxl dl-anonymous-fake-appointment-proposals",
                        contentClassName: d()("dl-flex-column dl-justify-between", {
                            "dl-appointments-proposals-choice-container": n
                        }),
                        children: [(0, F.jsxs)("div", {
                            children: [(0, F.jsx)(_.Z, {
                                uiStyle: "title-l-bold",
                                className: "dl-appointments-proposals-choice-container-title",
                                component: "p",
                                children: u.Z.t("patient_common.root.appointment_proposals.show.container_title")
                            }), (0, F.jsx)(_.Z, {
                                uiStyle: "body-s-regular",
                                className: "dl-appointments-proposals-choice-container-subtitle",
                                component: "p",
                                children: u.Z.t("patient_common.root.appointment_proposals.show.container_subtitle_html")
                            })]
                        }), (0, F.jsxs)("div", {
                            className: "dl-anonymous-fake-appointment-proposals-blurred-container",
                            children: [(0, F.jsxs)("div", {
                                className: "dl-anonymous-fake-appointment-proposals-blurred-content",
                                children: [(0, F.jsxs)("div", {
                                    className: "dl-appointments-proposals-choice-cards-container",
                                    children: [(0, F.jsx)(ze, {
                                        profile: i.profile,
                                        substitute: i.appointment.substitute,
                                        substitutionWording: i.appointment.substitution_wording,
                                        date: i.appointment.start_date,
                                        type: qe
                                    }), (0, F.jsx)("div", {
                                        className: "dl-flex-center",
                                        children: (0, F.jsx)(he.Z, {
                                            name: n ? "solid/angle-double-down" : "solid/angle-double-right",
                                            backgroundColor: "neutral-020",
                                            size: "medium",
                                            backgroundClassName: d()("dl-icon-background-large", {
                                                "mx-32": !n
                                            }),
                                            color: "neutral-090"
                                        })
                                    }), (0, F.jsx)(ze, {
                                        profile: i.profile,
                                        substitute: i.proposal.substitute,
                                        substitutionWording: i.proposal.substitution_wording,
                                        date: i.proposal.start_date,
                                        type: Fe
                                    })]
                                }), (0, F.jsxs)("div", {
                                    className: d()("dl-appointments-proposals-choice-buttons-container", {
                                        "dl-margin-16 dl-margin-t-32": !n
                                    }),
                                    children: [(0, F.jsx)(h.Z, {
                                        uiStyle: "info-link",
                                        className: "dl-line-height-normal",
                                        children: u.Z.t("patient_common.root.appointment_proposals.show.reject_button")
                                    }), (0, F.jsx)(h.Z, {
                                        className: "dl-line-height-normal",
                                        children: u.Z.t("patient_common.root.appointment_proposals.show.confirm_button")
                                    })]
                                })]
                            }), (0, F.jsx)("div", {
                                className: "dl-padding-x-16 dl-anonymous-fake-appointment-proposals-content",
                                children: (0, F.jsx)(g.Z, {
                                    border: !0,
                                    children: t
                                })
                            })]
                        })]
                    })
                },
                Be = () => {
                    const {
                        bookingToken: e,
                        proposalToken: t
                    } = (0, a.useParams)();
                    return (0, F.jsxs)(J, {
                        children: [(0, F.jsx)(T.Z, {
                            title: (0, F.jsx)(ye.Z, {})
                        }), (0, F.jsx)(Q.Z, {
                            className: "dl-margin-t-xl dl-flex-column dl-flex-center",
                            children: (0, F.jsx)(Ve, {
                                children: (0, F.jsx)(Ie, {
                                    className: "dl-padding",
                                    bookingToken: e,
                                    proposalToken: t
                                })
                            })
                        })]
                    })
                };
            var He = n(800274),
                Ue = n(164544),
                $e = n(764433),
                Ye = n(201477),
                We = n(290988),
                Ke = n(462814),
                Xe = n(795699),
                Qe = n(47760);
            const Je = e => {
                let {
                    field: t,
                    onChange: n,
                    ...i
                } = e;
                return (0, F.jsx)(Qe.gN, {
                    field: t,
                    pure: !0,
                    "data-design-system": "base",
                    children: e => (0, F.jsx)(Xe.default, { ...i,
                        onChange: t => {
                            e.setValue(t), n && n(t)
                        },
                        value: e.value
                    })
                })
            };
            var et = n(366699),
                tt = n(951969),
                nt = n(129303);
            const it = e => {
                    let {
                        appointmentId: t,
                        token: n,
                        sessionId: i,
                        videoChat: o
                    } = e;
                    const s = (0, a.useNavigate)(),
                        l = window.platforms && window.platforms.reactNative;
                    return (0, F.jsx)(h.Z, {
                        uiStyle: "outlined",
                        onClick: () => {
                            (0, me.ZP)({
                                name: "telehealth_patient_reconnection_button_clicked",
                                itemId: t,
                                itemType: pe.i.APPOINTMENT
                            }), l ? nt.ZP.call({
                                method: "openVideoChat",
                                params: [n, i, o]
                            }) : s(`/video-chat/${t}`, {
                                replace: !0
                            })
                        },
                        children: u.Z.t("patient_common.root.telehealth.feedback.patient.consultation_over.rejoin")
                    })
                },
                at = () => (0, F.jsxs)(g.Z, {
                    border: !0,
                    className: "dl-margin-b dl-full-width",
                    children: [(0, F.jsx)("span", {
                        className: "dl-flex-center dl-margin-b-8",
                        children: (0, F.jsx)(Oe.Z, {
                            color: "success-020",
                            label: u.Z.t("patient_common.root.telehealth.feedback.patient.consultation_over.card_new_tag"),
                            size: "medium"
                        })
                    }), (0, F.jsx)(_.Z, {
                        align: "center",
                        children: u.Z.t("patient_common.root.telehealth.feedback.patient.consultation_over.card_text")
                    }), (0, I.Zz)() && (0, F.jsx)(_.Z, {
                        align: "center",
                        children: u.Z.t("patient_common.root.telehealth.feedback.patient.consultation_over.card_text_desktop")
                    })]
                }),
                ot = e => {
                    let {
                        trackingDetails: t,
                        ...n
                    } = e;
                    const i = (0, a.useNavigate)();
                    return (0, F.jsx)(h.Z, {
                        trackingId: "patient_click_access_documents_post_vc",
                        trackingDetails: t,
                        onClick: () => {
                            i("/account/documents", {
                                replace: !0
                            })
                        },
                        ...n,
                        children: u.Z.t("patient_common.root.telehealth.feedback.patient.consultation_over.access_documents_button")
                    })
                },
                st = e => {
                    var t;
                    let {
                        appointmentId: n,
                        documents: i,
                        token: a,
                        sessionId: o,
                        videoChat: s
                    } = e;
                    const l = {
                            item_type: "Appointment",
                            item_id: n,
                            master_patient_id: null === (t = i[0].master_patient) || void 0 === t ? void 0 : t.id
                        },
                        r = (0, I.rl)();
                    return (0, F.jsxs)(g.Z, {
                        className: "dl-margin-t-16",
                        children: [(0, F.jsx)(_.Z, {
                            uiStyle: "title-l-bold",
                            className: "dl-margin-y-16",
                            align: "center",
                            children: u.Z.t("patient_common.root.telehealth.feedback.patient.consultation_over.title")
                        }), (0, F.jsx)("span", {
                            className: "dl-flex-center",
                            children: (0, F.jsxs)("div", {
                                className: "dl-position-relative",
                                children: [(0, F.jsx)("span", {
                                    className: "dl-position-absolute dl-document-icon-badge"
                                }), (0, F.jsx)(he.Z, {
                                    name: "file-lines",
                                    size: "medium"
                                })]
                            })
                        }), (0, F.jsx)(_.Z, {
                            uiStyle: "title-s-bold",
                            className: d()({
                                "dl-margin-b-8": r
                            }),
                            align: "center",
                            children: u.Z.t("patient_common.root.telehealth.feedback.patient.consultation_over.documents_received")
                        }), (0, F.jsxs)("div", {
                            className: d()({
                                "dl-margin-b-16": !r
                            }, "dl-flex-center dl-flex-column flex-wrap"),
                            children: [(0, F.jsx)(ot, {
                                trackingDetails: l,
                                className: d()({
                                    "dl-full-width": r
                                }, "dl-margin-y-16")
                            }), (0, F.jsx)(at, {}), (0, F.jsx)(it, {
                                appointmentId: n,
                                token: a,
                                sessionId: o,
                                videoChat: s
                            })]
                        })]
                    })
                },
                lt = e => {
                    let {
                        appointmentId: t
                    } = e;
                    const n = (0, a.useNavigate)();
                    return (0, F.jsx)(h.Z, {
                        onClick: () => {
                            (0, me.ZP)({
                                name: "telehealth_redirect_to_appointments_button_clicked",
                                itemId: t,
                                itemType: pe.i.APPOINTMENT
                            }), n("/account/appointments", {
                                replace: !0
                            })
                        },
                        children: u.Z.t("patient_common.root.telehealth.feedback.patient.consultation_over.my_appointments")
                    })
                },
                rt = e => {
                    let {
                        appointmentId: t,
                        videoChat: n
                    } = e;
                    const {
                        token: i,
                        room_name: a
                    } = n, {
                        success: o,
                        data: s
                    } = (0, Z.Z)({
                        url: `/appointments/${t}/documents`
                    });
                    return o && !!s.documents.length ? (0, F.jsx)(st, {
                        appointmentId: t,
                        documents: s.documents,
                        token: i,
                        sessionId: a,
                        videoChat: n
                    }) : (0, F.jsxs)(g.Z, {
                        className: "dl-margin-t-16",
                        children: [(0, F.jsx)("div", {
                            className: "dl-margin-b",
                            children: (0, F.jsx)(_.Z, {
                                uiStyle: "title-l-bold",
                                align: "center",
                                children: u.Z.t("patient_common.root.telehealth.feedback.patient.consultation_over.title")
                            })
                        }), (0, F.jsxs)("div", {
                            className: d()("flex justify-center gap-16", {
                                "flex-col items-stretch": (0, I.rl)()
                            }),
                            children: [(0, F.jsx)(it, {
                                appointmentId: t,
                                token: i,
                                sessionId: a,
                                videoChat: n
                            }), (0, F.jsx)(lt, {
                                appointmentId: t
                            })]
                        })]
                    })
                },
                ct = e => {
                    e && (e.scrollIntoView ? e.scrollIntoView({
                        block: "end",
                        behavior: "smooth"
                    }) : e.scrollTo(0, e.scrollHeight))
                },
                dt = e => {
                    let {
                        field: t,
                        onChange: n
                    } = e;
                    return (0, F.jsx)(Qe.gN, {
                        field: t,
                        children: e => (0, F.jsx)(We.Z, {
                            isYesNoSelect: !0,
                            name: t,
                            onSelect: t => {
                                e.setValue(t), n && n(t)
                            },
                            value: e.value,
                            className: "!grow",
                            "aria-label": u.Z.t("patient_common.root.telehealth.feedback.patient.call_patient_consent")
                        })
                    })
                },
                mt = e => {
                    let {
                        appointmentId: t,
                        children: n,
                        formApi: i
                    } = e;
                    const a = (0, r.createRef)();
                    return (0, r.useEffect)((() => {
                        ct(a.current)
                    }), []), (0, F.jsx)($e.Z, {
                        method: "put",
                        url: `/patient_app/video_chats/${t}`,
                        trigger: "query",
                        children: e => {
                            let {
                                query: t
                            } = e;
                            return (0, F.jsx)("div", {
                                ref: a,
                                children: n((e => t({
                                    video_chat: {
                                        feedback: { ...i.getFormState().values,
                                            ...e
                                        }
                                    }
                                })))
                            })
                        }
                    })
                },
                pt = e => {
                    let {
                        options: t
                    } = e;
                    return (0, F.jsx)(Qe.gN, {
                        field: "issues",
                        children: e => (0, F.jsx)(F.Fragment, {
                            children: t.map(((n, i) => {
                                const a = (null != n.value ? n.value : n).toString();
                                return (0, F.jsx)(Ye.Z, {
                                    label: n.label,
                                    labelClassName: i < t.length - 1 && "!mb-16",
                                    id: `issues-${i}`,
                                    checked: e.value && e.value.includes(a) || !1,
                                    onChange: t => {
                                        let n = e.value || [];
                                        t.target.checked ? n.includes(a) || n.push(a) : n = n.filter((e => a !== e)), e.setValue(n)
                                    },
                                    color: "blue"
                                }, `issues-${i}`)
                            }))
                        })
                    })
                },
                ut = e => {
                    let {
                        appointmentId: t
                    } = e;
                    const n = (0, r.useRef)(),
                        i = (0, a.useNavigate)(),
                        o = (0, He.ZP)(),
                        s = "de" === (0, I.rZ)(),
                        l = !("doctor" === (null === o || void 0 === o ? void 0 : o.kind)),
                        c = e => (e || []).includes("other_issue"),
                        {
                            data: d
                        } = (0, Z.Z)({
                            url: `/patient_app/video_chats/${t}.json`
                        }),
                        m = () => {
                            !o ? window.location = "/appointments/anonymous" : i(`/account/appointments/details/${t}`, {
                                replace: !0
                            })
                        };
                    return (0, F.jsx)(Ze.Z, {
                        title: u.Z.t("common.telehealth.over"),
                        onClose: m,
                        ref: n,
                        children: (0, F.jsxs)(Ue.Z, {
                            children: [!!d && (!window.platforms.reactNative || !(!window.platforms.ios || !(0, tt.vG)("3.2.14")) || !(!window.platforms.android || !(0, tt.vG)("3.2.19"))) && (0, F.jsx)(rt, {
                                appointmentId: t,
                                videoChat: d
                            }), (0, F.jsx)(Ke.Z, {
                                onChange: (e, t) => {
                                    let {
                                        values: n
                                    } = e;
                                    c(n.issues) || t.setValue("other_issue_information", null)
                                },
                                validityIndicators: !1,
                                children: e => (0, F.jsxs)("div", {
                                    className: "dl-text-center",
                                    children: [(0, F.jsx)(mt, {
                                        formApi: e,
                                        appointmentId: t,
                                        children: e => (0, F.jsxs)(g.Z, {
                                            className: "dl-margin-t-16",
                                            children: [(0, F.jsx)(_.Z, {
                                                component: "div",
                                                className: "!mb-16",
                                                uiStyle: "body-s-bold",
                                                children: u.Z.t("patient_common.root.telehealth.feedback.patient.recommend")
                                            }), (0, F.jsx)(Je, {
                                                field: "recommend",
                                                onChange: t => {
                                                    e({
                                                        recommend: t
                                                    })
                                                }
                                            })]
                                        })
                                    }), e.getValue("recommend") && (0, F.jsx)(mt, {
                                        formApi: e,
                                        appointmentId: t,
                                        children: e => (0, F.jsxs)(g.Z, {
                                            className: "dl-margin-t-16",
                                            children: [(0, F.jsx)(_.Z, {
                                                component: "div",
                                                className: "!mb-16",
                                                uiStyle: "body-s-bold",
                                                children: u.Z.t("patient_common.root.telehealth.feedback.patient.communication")
                                            }), (0, F.jsx)(Je, {
                                                field: "quality",
                                                onChange: t => e({
                                                    quality: t
                                                })
                                            })]
                                        })
                                    }), e.getValue("quality") && e.getValue("quality") <= 4 && (0, F.jsx)(mt, {
                                        formApi: e,
                                        appointmentId: t,
                                        children: t => (0, F.jsxs)(F.Fragment, {
                                            children: [(0, F.jsxs)(g.Z, {
                                                className: "dl-margin-t-16",
                                                children: [(0, F.jsx)(_.Z, {
                                                    component: "div",
                                                    className: "!mb-16",
                                                    uiStyle: "body-s-bold",
                                                    children: u.Z.t("patient_common.root.telehealth.feedback.patient.issue_title")
                                                }), (0, F.jsx)(pt, {
                                                    options: Object.entries(u.Z.t("patient_common.root.telehealth.feedback.patient.issues")).map((e => {
                                                        let [t, n] = e;
                                                        return {
                                                            value: t,
                                                            label: n
                                                        }
                                                    }))
                                                }), c(e.getValue("issues")) && (0, F.jsx)(et.Z, {
                                                    multiline: !0,
                                                    field: "other_issue_information",
                                                    label: null,
                                                    className: "dl-margin-l",
                                                    placeholder: u.Z.t("patient_common.root.telehealth.feedback.patient.other_issue_placeholder")
                                                })]
                                            }), (0, F.jsxs)(g.Z, {
                                                className: "dl-margin-t-16",
                                                children: [(0, F.jsx)(_.Z, {
                                                    component: "div",
                                                    className: "!mb-16",
                                                    uiStyle: "body-s-bold",
                                                    children: u.Z.t("patient_common.root.telehealth.feedback.patient.call_patient_consent")
                                                }), (0, F.jsx)(dt, {
                                                    field: "call_patient_consent",
                                                    onChange: e => t({
                                                        call_patient_consent: e
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (e.getValue("quality") > 4 || void 0 !== e.getValue("call_patient_consent")) && (0, F.jsx)(mt, {
                                        formApi: e,
                                        appointmentId: t,
                                        children: e => (0, F.jsxs)(F.Fragment, {
                                            children: [(0, F.jsxs)(g.Z, {
                                                className: "dl-margin-y-16",
                                                children: [(0, F.jsx)(_.Z, {
                                                    component: "div",
                                                    className: "!mb-16",
                                                    uiStyle: "body-s-bold",
                                                    children: u.Z.t("patient_common.root.telehealth.feedback.patient.observation")
                                                }), (0, F.jsx)(et.Z, {
                                                    type: "text",
                                                    onFocus: () => {
                                                        "mobile" === window.platforms.variant && setTimeout((() => ct(n && n.current)), 300)
                                                    },
                                                    multiline: !0,
                                                    field: "observation",
                                                    label: null
                                                }), !s && l && (0, F.jsx)(Qe.gN, {
                                                    field: "patient_comment_consent",
                                                    children: e => {
                                                        let {
                                                            value: t,
                                                            setValue: n,
                                                            setTouched: i
                                                        } = e;
                                                        return (0, F.jsx)(Ye.Z, {
                                                            type: "checkbox",
                                                            id: "patient_comment_consent",
                                                            label: u.Z.t("patient_common.root.telehealth.feedback.patient.comment_consent"),
                                                            checked: !!t,
                                                            onChange: e => {
                                                                n(e.target.checked)
                                                            },
                                                            onBlur: () => {
                                                                i()
                                                            }
                                                        })
                                                    }
                                                })]
                                            }), (0, F.jsx)(h.Z, {
                                                onClick: () => {
                                                    e(), m()
                                                },
                                                block: !0,
                                                children: u.Z.t("common.actions.send")
                                            }), s && (0, F.jsx)(g.Z, {
                                                className: "dl-margin-t-16",
                                                bgColor: "DEPRECATED_grey",
                                                children: (0, F.jsx)(_.Z, {
                                                    component: "div",
                                                    className: "dl-margin-y-16",
                                                    uiStyle: "body-s-regular",
                                                    children: u.Z.t("patient_common.root.telehealth.feedback.patient.data_privacy_notice_html", {
                                                        terms_link: p.ZP.PATIENT_LEGAL_INFO_LINKS.privacy_policy
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                };
            var ht = n(511466),
                _t = n(458),
                xt = n(940919),
                gt = n(857152),
                vt = n(437124);
            const ft = e => {
                    let {
                        title: t,
                        body: n,
                        onDismiss: i
                    } = e;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(T.Z, {
                            title: t,
                            children: (0, F.jsx)(xt.Z, {
                                title: u.Z.t("common.actions.close"),
                                icon: (0, F.jsx)(he.Z, {
                                    name: "xmark-large",
                                    size: "medium",
                                    className: "close-icon"
                                }),
                                position: "left",
                                onTap: i
                            })
                        }), (0, F.jsx)(v.Z, {
                            variant: "deprecated-alert-interface",
                            uiStyle: "warning",
                            className: "dl-margin-t-16",
                            children: n
                        })]
                    })
                },
                Zt = e => {
                    let {
                        children: t
                    } = e;
                    return (0, F.jsx)("div", {
                        className: "dl-video-chat-desktop-wrapper",
                        children: t
                    })
                },
                jt = e => {
                    let {
                        appointmentId: t,
                        redirectToFeedback: n,
                        redirectToSetup: i
                    } = e;
                    const o = (0, a.useNavigate)(),
                        {
                            data: s,
                            loading: l,
                            error: r
                        } = (0, Z.Z)({
                            url: `/patient_app/video_chats/${t}`
                        }),
                        c = (0, I.rl)() ? x.Z : Zt;
                    return (0, F.jsx)(c, {
                        children: l ? (0, F.jsx)(ht.Z, {}) : r ? (0, F.jsx)(ft, {
                            title: u.Z.t("common.telehealth.error_title"),
                            body: u.Z.t("common.telehealth.error_body"),
                            onDismiss: () => o(-1)
                        }) : gt.eP.includes(s.status) ? (0, F.jsx)(ft, {
                            title: u.Z.t("common.telehealth.appointment_is_over"),
                            body: u.Z.t("common.telehealth.cannot_join_patient"),
                            onDismiss: () => o(`/sessions/anonymous/${s.booking_token}`)
                        }) : (0, F.jsx)(_t.ZP, {
                            isPatient: !0,
                            videoChat: s,
                            onHangup: async () => {
                                const {
                                    bodyData: {
                                        surcharge: e
                                    }
                                } = await vt.ZP.get(`/appointments/${t}/surcharge`);
                                e ? o(`/surcharges/${e.uuid}`, {
                                    replace: !0
                                }) : n()
                            },
                            onForceDisconnection: () => {
                                i()
                            }
                        })
                    })
                };
            var bt = n(265842),
                yt = n(822895),
                Nt = n(177140),
                St = n(426565);
            const wt = e => {
                let {
                    children: t,
                    postEvent: n
                } = e;
                return (0, r.useEffect)((() => {
                    n("app_suggested")
                }), []), (0, F.jsxs)(F.Fragment, {
                    children: [(0, F.jsxs)(g.Z, {
                        children: [(0, F.jsx)(_.Z, {
                            align: "center",
                            uiStyle: "title-s-bold",
                            children: u.Z.t("common.telehealth.setup.use_app.title")
                        }), (0, F.jsx)(_.Z, {
                            className: "dl-margin-y-16",
                            align: "center",
                            children: u.Z.t("common.telehealth.setup.use_app.content")
                        }), (0, F.jsx)(_.Z, {
                            align: "center",
                            children: u.Z.t("common.telehealth.setup.use_app.footer")
                        })]
                    }), (0, F.jsx)("div", {
                        className: "dl-margin-t-16",
                        children: t
                    })]
                })
            };
            var kt = n(923663);
            const Tt = e => {
                    let {
                        videoChat: t,
                        majorFailure: n,
                        onTap: i
                    } = e;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(_.Z, {
                            align: "center",
                            className: "dl-padding-16",
                            children: u.Z.t("common.telehealth.setup.info_html", {
                                practitioner: t.profile.name_with_title,
                                phone_number: (0, kt.un)(t.patient_phone_number)
                            })
                        }), (0, F.jsx)(h.Z, {
                            block: !0,
                            uiStyle: n ? "info-link" : "primary",
                            onTap: i,
                            children: u.Z.t("common.telehealth.setup.join")
                        }), "de" === (0, I.rZ)() && (0, F.jsx)(g.Z, {
                            className: "dl-margin-y-16 dl-padding-0",
                            bgColor: "DEPRECATED_grey",
                            children: (0, F.jsx)(_.Z, {
                                align: "center",
                                className: "dl-padding-16",
                                children: u.Z.t("common.telehealth.setup.security_message")
                            })
                        })]
                    })
                },
                Ct = e => {
                    let {
                        app: t,
                        onTap: n,
                        doctorNotified: i
                    } = e;
                    return (0, F.jsx)(F.Fragment, {
                        children: i ? (0, F.jsx)(_.Z, {
                            align: "center",
                            color: "success-110",
                            children: u.Z.t(t ? "doctor_alerted_app" : "doctor_alerted", {
                                scope: "common.telehealth.setup"
                            })
                        }) : (0, F.jsx)(h.Z, {
                            block: !0,
                            uiStyle: "info-link",
                            onTap: n,
                            children: u.Z.t("common.telehealth.setup.alert_doctor")
                        })
                    })
                },
                Et = e => {
                    let {
                        onTap: t,
                        doctorNotified: n
                    } = e;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsxs)(g.Z, {
                            className: "dl-margin-y-16",
                            children: [(0, F.jsx)(_.Z, {
                                align: "center",
                                uiStyle: "title-s-bold",
                                className: "dl-margin-b",
                                children: u.Z.t("common.telehealth.setup.failure_title")
                            }), (0, F.jsx)(_.Z, {
                                align: "center",
                                children: u.Z.t("common.telehealth.setup.failure_consequence")
                            })]
                        }), (0, F.jsx)(Ct, {
                            app: !1,
                            onTap: t,
                            doctorNotified: n
                        })]
                    })
                };
            var Pt = n(199334),
                It = n(48253),
                At = n(339587),
                Dt = n(458326);

            function Mt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const Rt = (0, Pt.ZP)(Pt.IC.PATIENT),
                Ot = [Rt.name, At.I.name, At.Q.name],
                Lt = [It.Z.name, At.Q.name],
                Ft = [It.Z.name];
            class qt extends r.Component {
                constructor() {
                    super(...arguments), Mt(this, "state", {
                        checks: {},
                        hideCTA: !0
                    }), Mt(this, "postEvent", ((e, t) => {
                        (0, yt.y)(this.props.appointmentId, `patient_setup_${e===Rt.name?e.split(".")[0]:e}`, t)
                    })), Mt(this, "saveSetupDetails", (e => vt.ZP.put(`/patient_app/video_chats/${this.props.appointmentId}`, {
                        body: {
                            video_chat: {
                                patient_setup_issues: (0, Dt.sN)(this.state.checks),
                                ...e
                            }
                        }
                    }).then((e => {
                        let {
                            bodyData: t
                        } = e;
                        return t
                    })))), Mt(this, "onChecksUpdate", (e => {
                        this.setState({
                            checks: e
                        })
                    })), Mt(this, "alertDoctor", (() => {
                        this.postEvent("alerted_doctor"), this.saveSetupDetails({
                            status: gt.i3
                        }).then((e => this.setState((t => ({
                            videoChat: { ...t.videoChat,
                                ...e
                            }
                        })))))
                    })), Mt(this, "canJoin", (() => {
                        const {
                            videoChat: e,
                            checks: t
                        } = this.state;
                        return e && (0, Dt.uE)(this.state.checks, It.Z.name) && Ot.every((e => t[e]))
                    })), Mt(this, "handleJoinWaitingRoom", (() => {
                        this.postEvent("join_waiting_room", {
                            failingSteps: (0, Dt.sN)(this.state.checks),
                            downloadSpeedInBps: this.speedStats && this.speedStats.downloadSpeed,
                            uploadSpeedInBps: this.speedStats && this.speedStats.uploadSpeed
                        }), this.saveSetupDetails().then(this.props.onSetupDone)
                    })), Mt(this, "renderCTA", (e => {
                        const {
                            videoChat: t,
                            hideCTA: n
                        } = this.state;
                        return n ? null : e ? (0, F.jsx)(wt, {
                            postEvent: this.postEvent,
                            children: (0, F.jsx)(Ct, {
                                app: !0,
                                onTap: this.alertDoctor,
                                doctorNotified: (0, gt.wi)(t)
                            })
                        }) : this.canJoin() ? (0, F.jsx)(Tt, {
                            videoChat: t,
                            onTap: this.handleJoinWaitingRoom
                        }) : (0, Dt.uE)(this.state.checks, It.Z.name) ? null : (0, F.jsx)(Et, {
                            onTap: this.alertDoctor,
                            doctorNotified: (0, gt.wi)(t)
                        })
                    }))
                }
                componentDidMount() {
                    vt.ZP.get(`/patient_app/video_chats/${this.props.appointmentId}`).then((e => {
                        let {
                            bodyData: t
                        } = e;
                        this.unmounted || this.setState({
                            videoChat: t
                        })
                    })), this.postEvent("displayed")
                }
                componentDidCatch(e) {
                    this.postEvent("crashed", e)
                }
                componentWillUnmount() {
                    this.unmounted = !0
                }
                render() {
                    var e;
                    const t = null === (e = this.state.videoChat) || void 0 === e ? void 0 : e.react_native,
                        n = (0, I.rl)() && (t || Nt.Uh.os.name.match(/android/i) && (0, Dt.i)(this.state.checks, Lt) || Nt.Uh.os.name.match(/ios/i) && (0, Dt.i)(this.state.checks, Ft));
                    return (0, F.jsx)(Ze.Z, {
                        title: u.Z.t("common.telehealth.setup.access_list"),
                        onBack: () => {
                            (0, yt.y)(this.props.appointmentId, "patient_setup_closed"), this.context.dismiss("/")
                        },
                        children: (0, F.jsx)(Ue.Z, {
                            children: (0, F.jsxs)(F.Fragment, {
                                children: [(0, F.jsx)(St.Z, {
                                    kind: "patient_setup",
                                    appointmentId: this.props.appointmentId,
                                    showDownloadApp: n,
                                    postEvent: this.postEvent,
                                    onChecksUpdate: this.onChecksUpdate,
                                    onChecksStarted: () => {
                                        this.setState({
                                            hideCTA: !1
                                        })
                                    }
                                }), this.renderCTA(n)]
                            })
                        })
                    })
                }
            }
            Mt(qt, "contextType", l.pu);
            const zt = (0, _t.nX)(qt),
                Gt = () => {
                    const {
                        appointmentId: e
                    } = (0, a.useParams)(), t = (0, a.useNavigate)();
                    return (0, F.jsxs)(a.Routes, {
                        children: [(0, F.jsx)(a.Route, {
                            path: "feedback",
                            element: (0, F.jsx)(ut, {
                                appointmentId: e
                            })
                        }), (0, F.jsx)(a.Route, {
                            path: "setup",
                            element: (0, F.jsx)(zt, {
                                appointmentId: e,
                                onSetupDone: () => t("./")
                            })
                        }), (0, F.jsx)(a.Route, {
                            index: !0,
                            element: (0, F.jsx)(bt.ub, {
                                children: (0, F.jsx)(jt, {
                                    appointmentId: e,
                                    redirectToFeedback: () => t("./feedback"),
                                    redirectToSetup: () => t("./setup")
                                })
                            })
                        })]
                    })
                },
                Vt = e => {
                    let {
                        appointmentId: t
                    } = e;
                    const n = (0, a.useNavigate)();
                    return (0, F.jsx)(h.Z, {
                        block: !0,
                        uiStyle: "info-link",
                        onTap: () => n(`/account/appointments/details/${t}`),
                        children: u.Z.t("common.telehealth.back_to_appointment")
                    })
                },
                Bt = () => {
                    const e = (0, a.useNavigate)(),
                        {
                            id: t
                        } = (0, a.useParams)(),
                        [n, i] = (0, r.useState)(!1);
                    return (0, F.jsx)(Ze.Z, {
                        title: u.Z.t("common.telehealth.setup.access_list"),
                        onBack: () => {
                            e(-1)
                        },
                        children: (0, F.jsxs)(Ue.Z, {
                            children: [(0, F.jsx)(St.Z, {
                                kind: "patient_standalone",
                                appointmentId: t,
                                onChecksStarted: () => {
                                    i(!0)
                                }
                            }), n && (0, F.jsx)(Vt, {
                                appointmentId: t
                            })]
                        })
                    })
                };
            var Ht = n(160160),
                Ut = n(59156),
                $t = n(468644),
                Yt = n(935185),
                Wt = n(511299),
                Kt = n(169339),
                Xt = n(580163),
                Qt = n(366998),
                Jt = n(806626),
                en = n(723896);
            const tn = e => {
                var t;
                let {
                    relative: n,
                    show: i,
                    onHide: a,
                    onSaved: o,
                    onShare: s
                } = e;
                const l = (0, Xt.ZP)(),
                    r = e => `${e.first_name} ${e.last_name.toUpperCase()}`,
                    c = (0, p.cr)("master_patient_sharing") && "trusted" === (null === n || void 0 === n ? void 0 : n.kind) && (0, kt.su)(n) && (null === n || void 0 === n ? void 0 : n.health_managers_count) < 9,
                    d = "trusted" === (null === n || void 0 === n ? void 0 : n.kind) ? "limited" : "trusted",
                    m = !(null !== n && void 0 !== n && n.booker_relative) && (null === n || void 0 === n || null === (t = n.other_accounts_with_access) || void 0 === t ? void 0 : t.some((e => e.kind === d)));
                return n && (0, F.jsxs)(Kt.Z, {
                    onHide: a,
                    show: i,
                    title: (e => {
                        const t = e.booker_relative ? "patient_mobile.root.account.relatives.access_rights_of" : "patient_mobile.root.account.relatives.access_rights_for";
                        return u.Z.t(t, {
                            sanitized_name: r(e)
                        })
                    })(n),
                    children: [(0, F.jsx)(Jt.Z, {
                        withBorder: !0,
                        relative: n,
                        kind: n.kind,
                        isCurrentAccount: !0
                    }), m && (0, F.jsx)(Jt.Z, {
                        relative: n,
                        kind: d
                    }), c && (0, F.jsx)(Qt.Z, {
                        id: n.id,
                        onTap: () => s(n),
                        withBorder: !0,
                        firstName: n.first_name
                    }), (0, F.jsx)("div", {
                        className: "flex justify-end mt-32",
                        children: (0, F.jsx)(en.Z, {
                            relative: n,
                            onSuccess: () => {
                                setTimeout((() => l({
                                    message: u.Z.t("patient_mobile.root.account.relatives.success_delete"),
                                    uiStyle: "success"
                                })), 300), o(), a()
                            },
                            onFailure: e => {
                                var t;
                                const n = (null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.messageKey) || "error_delete";
                                setTimeout((() => {
                                    l({
                                        message: u.Z.t(n, {
                                            scope: "patient_mobile.root.account.relatives"
                                        }),
                                        uiStyle: "error"
                                    })
                                }), 300)
                            }
                        })
                    })]
                })
            };
            var nn = n(487040),
                an = n(889756),
                on = n(778075);
            const sn = e => {
                let {
                    show: t,
                    onAccept: n,
                    recipientName: i
                } = e;
                return (0, F.jsx)(on.Z, {
                    show: t,
                    title: u.Z.t("patient_common.root.account.relatives.sharing_modal.error_dialog.title", {
                        first_name: i
                    }),
                    acceptText: u.Z.t("patient_common.root.account.relatives.sharing_modal.error_dialog.ok_button"),
                    onAccept: n,
                    children: u.Z.t("patient_common.root.account.relatives.sharing_modal.error_dialog.content")
                })
            };
            var ln = n(901860);
            const rn = e => {
                let {
                    exitSharingFlow: t,
                    funnelId: n,
                    relative: i,
                    show: a
                } = e;
                const [o, s] = (0, r.useState)({
                    first_name: "",
                    identifier: ""
                }), l = e => {
                    (0, me.ZP)({
                        name: e,
                        details: {
                            master_patient_id: i.id,
                            funnel_id: n,
                            kind: "relative"
                        }
                    }, {
                        schema: "patient"
                    })
                }, [c, d] = (0, r.useState)(!1), [m, p] = (0, r.useState)(!1), h = () => {
                    p(!1), s({}), p(!1), t()
                }, {
                    mutate: _,
                    isSuccess: x,
                    isLoading: g
                } = (0, ln.Mb)({
                    onError: e => {
                        e.response.status !== ln.BO && (l("share_master_patient_warning_display"), d(!0))
                    }
                });
                (0, r.useEffect)((() => {
                    x && p(!0)
                }), [x]), (0, r.useEffect)((() => {
                    a && l("share_master_patient_modal_display")
                }), [a]);
                return (0, F.jsxs)(Kt.Z, {
                    size: "small",
                    show: a,
                    onHide: h,
                    onBack: !!m && (() => p(!1)),
                    title: u.Z.t("patient_common.root.account.relatives.sharing_modal.modal_title"),
                    children: [m ? (0, F.jsx)(nn.Z, {
                        funnelId: n,
                        recipient: o,
                        relative: i,
                        onSuccess: h
                    }) : (0, F.jsx)(an.Z, {
                        funnelId: n,
                        relative: i,
                        checkAvailability: _,
                        isCheckingAvailability: g,
                        setRecipient: s,
                        recipient: o
                    }), (0, F.jsx)(sn, {
                        show: c,
                        onAccept: () => d(!1),
                        recipientName: o.first_name
                    })]
                })
            };
            var cn = n(938958);
            const dn = () => {
                const {
                    data: e,
                    refetch: t,
                    isLoading: n,
                    isSuccess: i
                } = (0, Ut.d)({
                    enabled: !1
                }), [a, o] = (0, r.useState)(), [s, l] = (0, r.useState)(), [c, d] = (0, r.useState)(), [m, x] = (0, r.useState)(), v = (0, He.ZP)(), f = !p.ZP.BYPASS_PATIENT_EMAIL_VERIFICATION_ENABLED && (null === v || void 0 === v ? void 0 : v.should_verify_email_address);
                if ((0, r.useEffect)((() => {
                        v && !f && (t(), (0, me.ZP)({
                            name: "display_relatives_page"
                        }, {
                            schema: "patient"
                        }))
                    }), [v, f]), f) return window.location.pathname = "/account/email_verifications", null;
                return (0, F.jsx)("div", {
                    className: "dl-flex-grow dl-white-bg",
                    children: (0, F.jsxs)(Ue.Z, {
                        size: "large",
                        uiStyle: "white",
                        children: [(0, F.jsxs)("div", {
                            className: "dl-relatives-container",
                            children: [(0, F.jsxs)("div", {
                                children: [(0, F.jsx)(_.Z, {
                                    uiStyle: "title-xl-bold",
                                    children: u.Z.t("patient_mobile.root.account.relatives.list.title")
                                }), (0, F.jsx)(_.Z, {
                                    block: !0,
                                    className: "dl-margin-t-8",
                                    children: u.Z.t("patient_mobile.root.account.relatives.list.subtitle")
                                })]
                            }), i && e.length < p.ZP.MAX_NUMBER_OF_RELATIVES && (0, F.jsx)(h.Z, {
                                className: "relatives-header-button",
                                onClick: () => o(!0),
                                leftIcon: "solid/user-plus",
                                children: u.Z.t("patient_mobile.root.account.relatives.create")
                            })]
                        }), n ? (0, F.jsx)(ht.Z, {
                            className: "dl-relatives-placeholder"
                        }) : i && (e.length ? (0, F.jsx)("div", {
                            className: "dl-relatives-body",
                            children: e.filter(Boolean).map(((e, t) => (0, F.jsxs)(g.Z, {
                                className: "dl-margin-y-16 dl-padding-0 dl-relative-card",
                                children: [(0, F.jsx)($t.Z, {
                                    component: "div",
                                    className: "dl-margin-16 dl-padding-0",
                                    onClick: () => o(e),
                                    onKeyPress: () => o(e),
                                    children: (0, F.jsx)(cn.Z, {
                                        relative: e
                                    })
                                }), (0, F.jsx)(Re.Z, {}), (0, F.jsx)("div", {
                                    className: "dl-text-center",
                                    children: (0, F.jsx)(h.Z, {
                                        className: "dl-padding-y-8",
                                        uiStyle: "info-link",
                                        onClick: () => {
                                            l(e), (0, me.ZP)({
                                                name: "relative_manage_access_rights_display"
                                            }, {
                                                schema: "patient"
                                            })
                                        },
                                        trackingId: "relative_manage_access_rights_click",
                                        trackingSchema: "patient",
                                        children: u.Z.t("patient_mobile.root.account.relatives.manage_rights")
                                    })
                                })]
                            }, t)))
                        }) : (0, F.jsx)("div", {
                            className: "dl-relatives-placeholder",
                            children: (0, F.jsx)(Yt.Z, {})
                        })), (0, F.jsx)(Wt.Z, {
                            show: !!a,
                            relative: a,
                            onHide: () => o(void 0),
                            onSaved: t
                        }), (0, F.jsx)(tn, {
                            show: !!s,
                            relative: s,
                            onHide: () => l(void 0),
                            onSaved: t,
                            onShare: e => {
                                const t = (0, Ht.Z)();
                                (0, me.ZP)({
                                    name: "share_master_patient_click",
                                    details: {
                                        master_patient_id: e.id,
                                        funnel_id: t,
                                        kind: "relative"
                                    }
                                }, {
                                    schema: "patient"
                                }), x(t), l(void 0), d(e)
                            }
                        }), (0, F.jsx)(rn, {
                            show: !!c,
                            exitSharingFlow: () => {
                                l(!1), d(!1), x(null)
                            },
                            relative: c,
                            funnelId: m
                        })]
                    })
                })
            };
            var mn = n(30049),
                pn = n(329765),
                un = n(103461),
                hn = n(78599),
                _n = n(975645);
            const xn = e => {
                    let {
                        start_date: t,
                        substitute_name: n,
                        substitution_wording: i,
                        profile: a,
                        practice: o,
                        onClick: s,
                        buttonText: l
                    } = e;
                    return (0, F.jsxs)(g.Z, {
                        className: "dl-margin-16 dl-padding-0",
                        header: (0, F.jsx)(be.Z, {
                            date: t
                        }),
                        children: [(0, F.jsx)(Me.Z, {
                            children: (0, F.jsx)(Le.Z, {
                                substitute: n,
                                substitution_wording: i,
                                doctor: { ...a,
                                    ...o
                                },
                                showFullAddress: !0
                            })
                        }), (0, F.jsx)(Me.Z, {
                            children: l && (0, F.jsx)(h.Z, {
                                block: !0,
                                onClick: s,
                                children: l
                            })
                        })]
                    })
                },
                gn = e => {
                    let {
                        upcomingAppointment: t,
                        currentAppointment: n,
                        upcomingAppointmentOnClick: i,
                        currentAppointmentOnClick: a
                    } = e;
                    return t.cancelable ? (0, F.jsxs)(Ue.Z, {
                        children: [(0, F.jsx)(_.Z, {
                            className: "dl-margin-y-16",
                            align: "center",
                            uiStyle: "title-l-bold",
                            "aria-live": "polite",
                            children: u.Z.t("appointments.upcoming_appointment.title_warning")
                        }), (0, F.jsx)(_.Z, {
                            align: "center",
                            uiStyle: "body-xs-regular",
                            className: "dl-margin-b",
                            children: u.Z.t("appointments.upcoming_appointment.explanation")
                        }), (0, F.jsxs)(Q.Z, {
                            container: !0,
                            xsJustify: "center",
                            children: [(0, F.jsx)(Q.Z, {
                                item: !0,
                                smSize: 6,
                                xsSize: 12,
                                children: (0, F.jsx)(xn, { ...t,
                                    onClick: i,
                                    buttonText: u.Z.t("appointments.upcoming_appointment.keep_appointment")
                                })
                            }), (0, F.jsx)(Q.Z, {
                                item: !0,
                                smSize: 6,
                                xsSize: 12,
                                children: (0, F.jsx)(xn, { ...n,
                                    onClick: a,
                                    buttonText: u.Z.t("appointments.upcoming_appointment_same_day.replace_appointment")
                                })
                            })]
                        })]
                    }) : (0, F.jsxs)(Ue.Z, {
                        children: [(0, F.jsx)(_.Z, {
                            className: "dl-margin-y-16",
                            align: "center",
                            uiStyle: "title-l-bold",
                            "aria-live": "polite",
                            children: u.Z.t("appointments.not_cancelable.title_warning")
                        }), (0, F.jsx)(_.Z, {
                            align: "center",
                            uiStyle: "body-xs-regular",
                            className: "dl-margin-b",
                            children: t.phone_number ? u.Z.t("appointments.not_cancelable.explanation", {
                                phone: t.phone_number,
                                doctor: (0, _n.WU)(t.profile)
                            }) : u.Z.t("appointments.not_cancelable.explanation_no_phone_number", {
                                doctor: (0, _n.WU)(t.profile)
                            })
                        }), (0, F.jsx)(Q.Z, {
                            container: !0,
                            xsJustify: "center",
                            children: (0, F.jsx)(Q.Z, {
                                item: !0,
                                smSize: 6,
                                xsSize: 12,
                                children: (0, F.jsx)(xn, { ...t
                                })
                            })
                        }), (0, F.jsx)(Q.Z, {
                            container: !0,
                            xsJustify: "center",
                            children: (0, F.jsx)(Q.Z, {
                                item: !0,
                                smSize: 5,
                                xsSize: 11,
                                children: (0, F.jsx)(h.Z, {
                                    block: !0,
                                    onClick: () => i(),
                                    children: u.Z.t("common.got_it")
                                })
                            })
                        })]
                    })
                },
                vn = e => {
                    let {
                        upcomingAppointment: t,
                        currentAppointment: n,
                        upcomingAppointmentOnClick: i,
                        currentAppointmentOnClick: a,
                        keepBothAppointmentsOnClick: o
                    } = e;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsxs)(Ue.Z, {
                            children: [(0, F.jsx)(_.Z, {
                                className: "dl-margin-y-16",
                                align: "center",
                                uiStyle: "title-l-bold",
                                "aria-live": "polite",
                                children: u.Z.t("appointments.upcoming_appointment.title_warning")
                            }), (0, F.jsx)(_.Z, {
                                align: "center",
                                uiStyle: "body-xs-regular",
                                className: "dl-margin-b",
                                children: t.cancelable ? u.Z.t("appointments.upcoming_appointment_same_day.same_day_explanation") : u.Z.t("appointments.upcoming_appointment_same_day.not_cancelable_same_day_explanation")
                            }), (0, F.jsxs)(Q.Z, {
                                container: !0,
                                xsJustify: "center",
                                children: [(0, F.jsx)(Q.Z, {
                                    item: !0,
                                    smSize: 6,
                                    xsSize: 12,
                                    children: (0, F.jsx)(xn, { ...t,
                                        onClick: i,
                                        buttonText: u.Z.t("appointments.upcoming_appointment_same_day.keep_appointment")
                                    })
                                }), (0, F.jsx)(Q.Z, {
                                    item: !0,
                                    smSize: 6,
                                    xsSize: 12,
                                    children: (0, F.jsx)(xn, { ...n,
                                        onClick: t.cancelable ? a : o,
                                        buttonText: t.cancelable ? u.Z.t("appointments.upcoming_appointment_same_day.replace_appointment") : u.Z.t("appointments.upcoming_appointment_same_day.keep_both_appointments")
                                    })
                                })]
                            })]
                        }), t.cancelable && (0, F.jsx)(Ue.Z, {
                            children: (0, F.jsx)(Q.Z, {
                                container: !0,
                                xsJustify: "center",
                                children: (0, F.jsx)(Q.Z, {
                                    item: !0,
                                    smSize: 6,
                                    xsSize: 10,
                                    children: (0, F.jsx)(h.Z, {
                                        block: !0,
                                        onClick: () => o(),
                                        children: u.Z.t("appointments.upcoming_appointment_same_day.keep_both_appointments")
                                    })
                                })
                            })
                        })]
                    })
                },
                fn = () => {
                    const {
                        id: e
                    } = (0, a.useParams)(), t = (0, hn.e3)(window.location.search).upcoming_appointment, n = "true" === (0, hn.e3)(window.location.search).overlapping, i = (0, Z.Z)({
                        url: `/appointments/${e}.json`,
                        onSuccess: e => {
                            let {
                                data: {
                                    id: t,
                                    profile: n,
                                    practice: i
                                }
                            } = e;
                            n && i && (o.Z.pushToCustomDataLayer({
                                profile_id: n.id,
                                speciality_id: n.speciality_id,
                                profile_practice_id: i.id,
                                appointment_id: (0, ge.id)(t)
                            }), o.Z.sendGtmPageView(p.ZP.GTM_CONTENT_GROUPS.BOOKING_ALREADY_UPCOMING_APPOINTMENT))
                        }
                    }), s = (0, Z.Z)({
                        url: `/appointments/${t}.json`
                    }), r = i.loading || s.loading, c = (0, l.ZP)(), d = e => {
                        (0, I.rl)() ? c.show(e): window.location.pathname = e
                    }, {
                        selectCurrentAppointment: m
                    } = (0, Z.Z)({
                        url: `/appointments/${t}`,
                        method: "DELETE",
                        trigger: "selectCurrentAppointment",
                        onSuccess: () => {
                            d(`/appointments/${e}/edit`)
                        }
                    }), {
                        selectUpcomingAppointment: h
                    } = (0, Z.Z)({
                        url: "/appointments/destroy_temporary",
                        method: "DELETE",
                        trigger: "selectUpcomingAppointment",
                        onSuccess: () => {
                            d("/account/appointments")
                        }
                    }), {
                        selectBothAppointments: _
                    } = (0, Z.Z)({
                        url: `/appointments/${e}`,
                        method: "PUT",
                        query: {
                            keep_both_upcoming_appointment: !0
                        },
                        trigger: "selectBothAppointments",
                        onSuccess: e => {
                            let {
                                data: t,
                                meta: n
                            } = e;
                            d(t.redirection || n.redirection)
                        }
                    }), x = n => (0, me.ZP)({
                        name: "choose_between_appointments",
                        itemType: pe.i.APPOINTMENT,
                        itemId: e,
                        details: {
                            action: n,
                            current_appointment: {
                                id: e,
                                patient_id: i.data.patient.id
                            },
                            upcoming_appointment: {
                                id: t,
                                patient_id: s.data.patient.id
                            }
                        }
                    }), g = () => {
                        x("select_current_appointment"), m()
                    }, v = () => {
                        x("select_upcoming_appointment"), h()
                    };
                    return (0, F.jsx)(Ze.Z, {
                        loading: r,
                        title: u.Z.t("appointments.upcoming_appointment.page_title"),
                        children: !r && (s.data.profile.speciality_allow_multiple_booking && !n ? (0, F.jsx)(vn, {
                            upcomingAppointment: s.data,
                            upcomingAppointmentOnClick: v,
                            currentAppointment: i.data,
                            currentAppointmentOnClick: g,
                            keepBothAppointmentsOnClick: () => {
                                x("select_both_appointments"), _()
                            }
                        }) : (0, F.jsx)(gn, {
                            upcomingAppointment: s.data,
                            currentAppointment: i.data,
                            upcomingAppointmentOnClick: v,
                            currentAppointmentOnClick: g
                        }))
                    })
                };
            var Zn = n(233625),
                jn = n(581971),
                bn = n(722562),
                yn = n(408404),
                Nn = n.n(yn),
                Sn = (n(286209), n(571442)),
                wn = n.n(Sn),
                kn = n(436458),
                Tn = n.n(kn);
            const Cn = e => new Intl.NumberFormat(document.documentElement.lang, {
                    style: "currency",
                    currency: "EUR"
                }).format(e / 100),
                En = () => (0, F.jsx)(fe.Z, {
                    uiStyle: "success",
                    className: "dl-margin-r-8",
                    children: (0, F.jsx)(wn(), {
                        width: 8,
                        height: 8
                    })
                }),
                Pn = () => (0, F.jsx)(fe.Z, {
                    uiStyle: "neutral",
                    className: "dl-margin-r-8",
                    children: (0, F.jsx)(Tn(), {
                        width: 12,
                        height: 12
                    })
                }),
                In = e => {
                    let {
                        chargeAmount: t,
                        surchargeAmount: n,
                        className: i,
                        subMessage: a,
                        surchargePaid: o = !1
                    } = e;
                    return (0, F.jsxs)("div", {
                        className: i,
                        children: [(0, F.jsxs)("div", {
                            className: "flex",
                            children: [(0, F.jsx)(En, {}), (0, F.jsxs)("div", {
                                className: "dl-flex-column dl-margin-b",
                                children: [(0, F.jsx)(_.Z, {
                                    uiStyle: "body-s-bold",
                                    color: "success-110",
                                    children: u.Z.t("doctor_common.telehealth.bank_imprint", {
                                        amount: Cn(t)
                                    })
                                }), (0, F.jsx)(_.Z, {
                                    color: "success-110",
                                    children: u.Z.t("doctor_common.telehealth.debit_done")
                                })]
                            })]
                        }), (0, F.jsxs)("div", {
                            className: "flex",
                            children: [o ? (0, F.jsx)(En, {}) : (0, F.jsx)(Pn, {}), (0, F.jsxs)("div", {
                                className: "dl-flex-column dl-margin-b",
                                children: [(0, F.jsx)(_.Z, {
                                    uiStyle: "body-s-bold",
                                    color: o ? "success-110" : null,
                                    children: u.Z.t("doctor_common.telehealth.surcharge", {
                                        amount: Cn(n)
                                    })
                                }), o && (0, F.jsx)(_.Z, {
                                    color: "success-110",
                                    children: u.Z.t("doctor_common.telehealth.debit_done")
                                }), a && (0, F.jsx)(_.Z, {
                                    children: a
                                })]
                            })]
                        })]
                    })
                };
            var An = n(547745),
                Dn = n.n(An),
                Mn = n(755440),
                Rn = n(232558),
                On = n(245755),
                Ln = n(478983),
                Fn = n.n(Ln),
                qn = n(14846),
                zn = n.n(qn),
                Gn = n(169015),
                Vn = n.n(Gn),
                Bn = n(793916),
                Hn = n.n(Bn),
                Un = n(263666),
                $n = n.n(Un),
                Yn = n(919722),
                Wn = n.n(Yn),
                Kn = n(258637);
            const Xn = {
                loading: !1,
                cardNumberCompleted: !1,
                expiryCompleted: !1,
                cvcCompleted: !1,
                savingFailure: !1
            };

            function Qn(e, t) {
                const {
                    type: n,
                    ...i
                } = t;
                switch (n) {
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
                            ...i
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
            const Jn = Dn()(On.ZP, Rn.kv)((e => {
                    let {
                        account: t,
                        onCardFailure: n,
                        onSurchargeFailure: i,
                        stripe: a,
                        surcharge: o,
                        onSuccess: s,
                        track: l
                    } = e;
                    const {
                        appointment: c
                    } = o, [d, m] = (0, r.useReducer)(Qn, Xn), p = (0, r.useRef)({
                        numberElement: void 0,
                        expiryElement: void 0,
                        cvcElement: void 0
                    }), [x, g] = (0, r.useState)(t ? [t.last_name, t.first_name].join(" ") : null), {
                        loading: v,
                        cardNumberCompleted: f,
                        expiryCompleted: j,
                        cvcCompleted: b,
                        savingFailure: y
                    } = d, {
                        updateSurcharge: N,
                        loading: S,
                        success: w
                    } = (0, Z.Z)({
                        url: `/surcharges/${o.uuid}`,
                        method: "put",
                        trigger: "updateSurcharge",
                        onSuccess: s,
                        onFailure: e => {
                            m({
                                type: "SAVING_FAILURE"
                            }), i(e)
                        }
                    }), k = !!t && ((e, t) => {
                        var n;
                        return Boolean(null === (n = t.features) || void 0 === n ? void 0 : n.includes(e))
                    })("demo-telehealth", t);
                    return (0, F.jsx)(Ke.Z, {
                        horizontal: !1,
                        onSubmit: async () => {
                            if ((0, Nt.I6)() || (0, I.rl)() && setTimeout((() => {
                                    p.current.numberElement.focus(), p.current.numberElement.blur(), p.current.expiryElement.focus(), p.current.expiryElement.blur(), p.current.cvcElement.focus(), p.current.cvcElement.blur()
                                }), 20), k) return void await N({
                                stripe_id: "demo"
                            });
                            m({
                                type: "START_SAVING"
                            });
                            const {
                                bodyData: {
                                    client_secret: e
                                }
                            } = await vt.ZP.post(`/appointments/${c.id}/payment_intents`, {
                                query: {
                                    surcharge_uuid: o.uuid
                                }
                            }).catch((e => {
                                let {
                                    response: t = {}
                                } = e;
                                const {
                                    bodyData: i
                                } = t;
                                return m({
                                    type: "SAVING_FAILURE"
                                }), n({
                                    data: i
                                }), {
                                    bodyData: i
                                }
                            }));
                            if (!e) return;
                            l({
                                name: "telehealth_stripe_surcharge_payment_started"
                            });
                            const t = await a.handleCardPayment(e, {
                                payment_method_data: {
                                    billing_details: {
                                        name: x
                                    }
                                }
                            });
                            t.error ? (i({
                                data: {
                                    errors: [t.error.message]
                                }
                            }), m({
                                type: "SAVING_FAILURE"
                            })) : (l({
                                name: "telehealth_stripe_surcharge_payment_succeeded"
                            }), await N({
                                stripe_id: t.paymentIntent.id
                            }))
                        },
                        validityIndicators: !1,
                        children: () => {
                            const e = !f || !j || !b;
                            return (0, F.jsxs)(F.Fragment, {
                                children: [(0, F.jsxs)("div", {
                                    className: "dl-padding-16",
                                    children: [(0, F.jsxs)("div", {
                                        className: "dl-credit-card-brands flex dl-align-items-center",
                                        children: [(0, F.jsx)(zn(), {
                                            height: 36,
                                            width: 36
                                        }), (0, F.jsx)(Vn(), {
                                            height: 36,
                                            width: 36
                                        }), (0, F.jsx)(Hn(), {
                                            height: 36,
                                            width: 36
                                        }), (0, F.jsx)($n(), {
                                            height: 36,
                                            width: 36
                                        })]
                                    }), (0, F.jsxs)("div", {
                                        className: "dl-credit-card-fields",
                                        children: [(0, F.jsx)(Mn.Z, {
                                            horizontal: !1,
                                            label: u.Z.t("patient_common.root.telehealth.credit_card_form.number_label"),
                                            icon: (0, F.jsx)(Wn(), {}),
                                            children: (0, F.jsx)(Rn.Ke, {
                                                style: On.BI,
                                                onReady: e => {
                                                    p.current.numberElement = e
                                                },
                                                onChange: e => {
                                                    let {
                                                        complete: t
                                                    } = e;
                                                    m({
                                                        type: "SET_FIELD_COMPLETION",
                                                        cardNumberCompleted: t
                                                    }), t && p.current.expiryElement.focus()
                                                },
                                                placeholder: ""
                                            })
                                        }), (0, F.jsx)(Mn.Z, {
                                            horizontal: !1,
                                            label: u.Z.t("patient_common.root.telehealth.credit_card_form.expiry_label"),
                                            children: (0, F.jsx)(Rn.Oh, {
                                                style: On.BI,
                                                onReady: e => {
                                                    p.current.expiryElement = e
                                                },
                                                onChange: e => {
                                                    let {
                                                        complete: t
                                                    } = e;
                                                    m({
                                                        type: "SET_FIELD_COMPLETION",
                                                        expiryCompleted: t
                                                    }), t && p.current.cvcElement.focus()
                                                }
                                            })
                                        }), (0, F.jsx)(Mn.Z, {
                                            horizontal: !1,
                                            label: u.Z.t("patient_common.root.telehealth.credit_card_form.security_code_label"),
                                            children: (0, F.jsx)(Rn.vk, {
                                                style: On.BI,
                                                onReady: e => {
                                                    p.current.cvcElement = e
                                                },
                                                onChange: e => {
                                                    let {
                                                        complete: t
                                                    } = e;
                                                    m({
                                                        type: "SET_FIELD_COMPLETION",
                                                        cvcCompleted: t
                                                    })
                                                },
                                                placeholder: ""
                                            })
                                        })]
                                    }), (0, F.jsx)(Mn.Z, {
                                        label: u.Z.t("patient_common.root.telehealth.credit_card_form.card_holder"),
                                        labelFor: "card_holder",
                                        children: (0, F.jsx)(Kn.Z, {
                                            type: "text",
                                            required: !0,
                                            onChange: e => {
                                                g(e.target.value)
                                            },
                                            id: "card_holder",
                                            name: "card_holder",
                                            value: x
                                        })
                                    })]
                                }), (0, F.jsx)(Re.Z, {}), (0, F.jsxs)("div", {
                                    className: "dl-padding-16",
                                    children: [(0, F.jsxs)("div", {
                                        className: "dl-text-center dl-padding-b-16",
                                        children: [(0, F.jsx)(_.Z, {
                                            children: u.Z.t("patient_common.root.telehealth.surcharge_form.warning")
                                        }), (0, F.jsx)(_.Z, {
                                            color: "primary-110",
                                            className: "dl-padding-l-8",
                                            children: (0, F.jsx)("strong", {
                                                children: c.phone_number
                                            })
                                        })]
                                    }), (0, F.jsxs)(h.Z, {
                                        type: "submit",
                                        block: !0,
                                        disabled: e,
                                        loadable: {
                                            loading: v || S,
                                            success: !y && w
                                        },
                                        children: [(0, F.jsx)(Fn(), {}), (0, F.jsx)("span", {
                                            children: u.Z.t("patient_common.root.telehealth.surcharge_form.validate")
                                        })]
                                    })]
                                })]
                            })
                        }
                    })
                })),
                ei = Dn()(On.ZP, Rn.kv)((e => {
                    let {
                        account: t,
                        creditCard: n,
                        surcharge: i,
                        secure: a,
                        stripe: o,
                        onFailure: s,
                        onSuccess: l,
                        track: c
                    } = e;
                    const [d, m] = (0, r.useState)(!1), {
                        updateSurcharge: p,
                        loading: _,
                        success: x
                    } = (0, Z.Z)({
                        url: `/surcharges/${i.uuid}`,
                        method: "put",
                        trigger: "updateSurcharge",
                        onSuccess: l,
                        onFailure: e => {
                            m(!1), s(e)
                        }
                    });
                    return (0, F.jsxs)(h.Z, {
                        onClick: async () => {
                            var e;
                            if (m(!0), null !== t && void 0 !== t && null !== (e = t.features) && void 0 !== e && e.includes("demo-telehealth")) return p({
                                stripe_id: "demo"
                            });
                            const {
                                bodyData: a
                            } = await vt.ZP.post(`/appointments/${i.appointment.id}/payment_intents`, {
                                query: {
                                    surcharge_uuid: i.uuid,
                                    credit_card_id: n.id
                                }
                            }).catch((e => {
                                let {
                                    response: t = {}
                                } = e;
                                const {
                                    bodyData: n,
                                    status: i
                                } = t;
                                return s({
                                    data: n,
                                    status: i
                                }), {
                                    bodyData: n
                                }
                            })), l = null === a || void 0 === a ? void 0 : a.client_secret;
                            if (!l) return !1;
                            c({
                                name: "telehealth_stripe_surcharge_payment_started"
                            });
                            const r = await o.handleCardPayment(l);
                            return r.error ? (m(!1), s({
                                data: {
                                    errors: [u.Z.t("common.error")]
                                }
                            })) : (c({
                                name: "telehealth_stripe_surcharge_payment_succeeded"
                            }), p({
                                stripe_id: r.paymentIntent.id
                            }))
                        },
                        block: !0,
                        disabled: d,
                        loadable: {
                            loading: _,
                            success: x
                        },
                        type: "submit",
                        children: [a && (0, F.jsx)(Fn(), {}), (0, F.jsx)("span", {
                            children: u.Z.t("patient_common.root.telehealth.surcharge_form.validate")
                        })]
                    })
                })),
                ti = e => {
                    let {
                        appointment: t,
                        localizedPrice: n,
                        surcharge: i,
                        surchargePaid: a
                    } = e;
                    return (0, F.jsxs)(g.Z, {
                        children: [(0, F.jsx)(jn.Z, {
                            children: a ? u.Z.t("patient_common.root.telehealth.surcharge_form.title_paid") : u.Z.t("patient_common.root.telehealth.surcharge_form.title")
                        }), !a && (0, F.jsx)(_.Z, {
                            block: !0,
                            className: "dl-margin-y-16",
                            children: u.Z.t("patient_common.root.telehealth.surcharge_form.details", {
                                doctor_name: t.doctor_name,
                                amount: n
                            })
                        }), !a && (0, F.jsx)(Re.Z, {}), (0, F.jsx)(In, {
                            className: "dl-margin-t-16",
                            chargeAmount: i.charge.captured_amount,
                            surchargeAmount: i.amount,
                            surchargePaid: a
                        })]
                    })
                },
                ni = () => {
                    const e = (0, a.useNavigate)(),
                        {
                            uuid: t
                        } = (0, a.useParams)(),
                        n = (0, He.ZP)(),
                        i = (null === n || void 0 === n ? void 0 : n.credit_cards) || [],
                        [o, s] = (0, r.useState)(i),
                        [l, c] = (0, r.useState)(i.length ? i[0] : void 0),
                        d = (0, Xt.ZP)(),
                        [m, p] = (0, r.useState)(!1),
                        {
                            data: h = {},
                            loading: x
                        } = (0, Z.Z)({
                            url: `/surcharges/${t}.json`,
                            onSuccess: e => {
                                let {
                                    data: t = {}
                                } = e;
                                p(!!t.captured_at), (0, me.ZP)({
                                    name: "telehealth_surcharge_patient_payment_view",
                                    itemId: t.id,
                                    itemType: pe.i.SURCHARGE,
                                    details: {
                                        surcharge_already_paid: !!t.captured_at
                                    }
                                }, {
                                    schema: "patient"
                                })
                            }
                        }),
                        {
                            appointment: v
                        } = h,
                        f = new Intl.NumberFormat(document.documentElement.lang, {
                            style: "currency",
                            currency: "EUR"
                        }).format((null === h || void 0 === h ? void 0 : h.amount) / 100),
                        j = e => {
                            let {
                                name: t,
                                details: n
                            } = e;
                            (0, me.ZP)({
                                name: t,
                                itemId: h.id,
                                itemType: pe.i.SURCHARGE,
                                details: n
                            }, {
                                schema: "patient"
                            })
                        },
                        b = e => t => {
                            let {
                                data: n
                            } = t;
                            const i = n && n.errors,
                                a = i ? i.join(".\n") : u.Z.t("common.error");
                            d({
                                uiStyle: "error",
                                message: a
                            }), e && j({
                                name: e,
                                details: {
                                    appointment_id: v.id,
                                    errors: i
                                }
                            })
                        },
                        y = t => {
                            let {
                                data: n
                            } = t;
                            d({
                                uiStyle: "success",
                                message: u.Z.t("patient_common.root.telehealth.surcharge_form.success")
                            }), p(!0), setTimeout((() => ((0, I.rl)() ? e(n.redirection, {
                                replace: !0
                            }) : window.location.pathname = n.redirection, !0)), 2e3)
                        };
                    return x ? (0, F.jsx)(ht.Z, {}) : (0, F.jsx)(Ze.Z, {
                        onBack: () => e("/", {
                            replace: !0
                        }),
                        title: u.Z.t("common.telehealth.over"),
                        children: (0, F.jsxs)(Ue.Z, {
                            children: [(0, F.jsx)(ti, {
                                appointment: v,
                                localizedPrice: f,
                                surcharge: h,
                                surchargePaid: m
                            }), !m && (0, F.jsxs)(g.Z, {
                                className: "dl-margin-t-16 dl-padding-0",
                                children: [(0, F.jsxs)(Zn.Z, {
                                    uiStyle: "dark",
                                    align: "left",
                                    className: "flex dl-align-items-center",
                                    children: [(0, F.jsx)(Nn(), {
                                        style: {
                                            fill: "white"
                                        },
                                        className: "dl-margin-r"
                                    }), u.Z.t("patient_common.root.telehealth.payment_form.secured_page")]
                                }), o.length > 0 && (0, F.jsxs)("fieldset", {
                                    className: "dl-margin-16",
                                    children: [(0, F.jsx)(_.Z, {
                                        component: "legend",
                                        uiStyle: "body-s-bold",
                                        className: "dl-margin-b",
                                        children: u.Z.t("patient_common.root.telehealth.payment_form.saved_cards")
                                    }), (0, F.jsx)(bn.Z, {
                                        creditCards: o,
                                        selectedCard: l,
                                        onSelectCard: e => {
                                            e && j({
                                                name: "change_credit_card"
                                            }), c(e)
                                        }
                                    })]
                                }), l ? (0, F.jsx)(ei, {
                                    account: n,
                                    creditCard: l,
                                    surcharge: h,
                                    onFailure: b(),
                                    onSuccess: y,
                                    track: j,
                                    secure: !0
                                }) : (0, F.jsx)(Jn, {
                                    account: n,
                                    surcharge: h,
                                    onCardFailure: b("credit_card_creation_failed"),
                                    onSuccess: y,
                                    onSurchargeFailure: e => {
                                        let {
                                            creditCard: t,
                                            data: n
                                        } = e;
                                        if (t) {
                                            const e = !t.delete_after_charge;
                                            c(e ? t : void 0), s(e ? [...o, t] : o)
                                        }
                                        b("charge_creation_failed")({
                                            data: n
                                        })
                                    },
                                    track: j
                                })]
                            })]
                        })
                    })
                };
            var ii = n(441609),
                ai = n.n(ii),
                oi = n(708221);
            const si = n.p + "c7406ef03e7dc622b27f.png",
                li = e => {
                    let {
                        appointmentBlockedData: t
                    } = e;
                    const n = (0, I.rl)();
                    if (ai()(t) || t.error) return n && (0, F.jsx)(h.Z, {
                        className: "dl-margin-t-16",
                        uiStyle: "link-primary",
                        to: "/",
                        leftIcon: "house",
                        children: u.Z.t("patient_common.root.appointments.bounced.back_to_homepage")
                    });
                    const {
                        blocked_new_patient: i,
                        all_visit_motives_block_new_patient: a,
                        blocked_second_step_vaccination_booking: o,
                        sub_messages: s = [],
                        phone_number: l
                    } = t;
                    return (() => {
                        if (i && a && s.push(u.Z.t("patient_common.root.appointments.blocked.no_vm_available_online")), l) {
                            const e = o ? "patient_common.root.appointments.blocked.second_step_vaccination_contact" : "patient_common.root.appointments.blocked.contact_practitioner_html";
                            s.push(u.Z.t(e, {
                                phone_number: l
                            }))
                        }
                        return s
                    })().map(((e, t) => (0, F.jsx)(_.Z, {
                        uiStyle: "body-s-regular",
                        align: "center",
                        className: "dl-margin-16",
                        children: e
                    }, `reason-${t}`)))
                },
                ri = () => {
                    const e = (0, a.useParams)(),
                        {
                            data: t = {},
                            loading: n
                        } = (0, Z.Z)({
                            url: `/appointments/${e.id}/blocked.json`,
                            query: (0, hn.e3)(window.location.search)
                        }),
                        {
                            redirect_url: i
                        } = t,
                        s = (0, I.rl)();
                    (0, r.useEffect)((() => {
                        t.appointment_id && (e => {
                            let {
                                appointment_id: t,
                                profile_id: n,
                                profile_practice_id: i,
                                speciality_id: a,
                                appointment_telehealth: s
                            } = e;
                            o.Z.pushToCustomDataLayer({
                                appointment_id: (0, ge.id)(t, 10),
                                profile_id: n,
                                profile_practice_id: i,
                                speciality_id: a,
                                appointment_telehealth: s
                            }), o.Z.sendGtmPageView(p.ZP.GTM_CONTENT_GROUPS.BOOKING_CONFIRMATION_BLOCKED), (0, me.ZP)({
                                name: "new_patient_blocking_late_display",
                                details: {
                                    profile_id: n
                                }
                            }, {
                                schema: "patient"
                            })
                        })(t)
                    }), [t]);
                    return (0, F.jsx)(Ze.Z, {
                        loading: n,
                        title: u.Z.t("appointments.blocked.page_title"),
                        onBack: i ? () => {
                            (0, oi.Z)(i)
                        } : null,
                        children: (0, F.jsxs)("div", {
                            className: d()("dl-blocked-content dl-flex-column dl-align-items-center dl-padding-b-24 dl-padding-x-16", {
                                mobile: s
                            }),
                            children: [(0, F.jsx)(ve.Z, {
                                style: {
                                    maxWidth: s ? 191 : 275
                                },
                                src: si,
                                alt: ""
                            }), (0, F.jsx)(_.Z, {
                                uiStyle: "title-l-bold",
                                className: "dl-margin-b",
                                align: "center",
                                alt: "",
                                children: (() => {
                                    const {
                                        blocked_new_patient: e,
                                        all_visit_motives_block_new_patient: n,
                                        profile_name: i,
                                        visit_motive_name: a,
                                        blocked_second_step_vaccination_booking: o,
                                        message: s
                                    } = t;
                                    if (e) return n ? u.Z.t("patient_common.root.appointments.blocked.practitioner_no_vm_online", {
                                        name: i
                                    }) : u.Z.t("patient_common.root.appointments.blocked.practitioner_vm_online", {
                                        name: i,
                                        visit_motive: a
                                    });
                                    if (o) return u.Z.t("patient_common.root.appointments.blocked.second_step_vaccination_not_available");
                                    const l = s || u.Z.t("patient_common.root.appointments.blocked.description_html");
                                    return u.Z.t("patient_common.root.appointments.blocked.title", {
                                        message: l
                                    })
                                })()
                            }), (0, F.jsx)(li, {
                                appointmentBlockedData: t
                            })]
                        })
                    })
                };
            var ci = n(642979);
            const di = () => {
                    const e = (0, a.useParams)(),
                        {
                            data: t = {},
                            loading: n
                        } = (0, Z.Z)({
                            url: `/appointments/${e.id}.json`,
                            query: (0, hn.e3)(window.location.search),
                            onSuccess: e => {
                                let {
                                    data: {
                                        id: t,
                                        telehealth: n,
                                        profile: i,
                                        practice: a
                                    }
                                } = e;
                                i && a && (o.Z.pushToCustomDataLayer({
                                    appointment_id: (0, ge.id)(t),
                                    appointment_telehealth: !!n,
                                    profile_id: i.id,
                                    profile_practice_id: a.id,
                                    speciality_id: i.speciality_id
                                }), o.Z.sendGtmPageView(p.ZP.GTM_CONTENT_GROUPS.BOOKING_CONFIRMATION_BOUNCED))
                            }
                        }),
                        {
                            branding: i,
                            phone_number: s
                        } = t;
                    return (0, F.jsx)(Ze.Z, {
                        loading: n,
                        title: u.Z.t("appointments.blocked.page_title"),
                        onBack: () => {
                            window.location = i ? "/" : (0, hn.e3)(window.location.search).redirection
                        },
                        children: n ? null : (0, F.jsxs)(Ue.Z, {
                            center: !0,
                            size: "large",
                            uiStyle: "white",
                            className: "dl-padding-x-16",
                            children: [(0, F.jsx)(ve.Z, {
                                src: "/email_layout/practitioners_big.png",
                                height: "200",
                                className: "dl-margin-t-32 dl-margin-b"
                            }), (0, F.jsx)(_.Z, {
                                uiStyle: "title-l-bold",
                                className: "dl-margin-b",
                                children: u.Z.t("patient_common.root.appointments.bounced.title")
                            }), (0, F.jsx)(_.Z, {
                                uiStyle: "DEPRECATED-title-sub-regular",
                                className: "dl-margin-y-16",
                                children: (0, F.jsx)("div", {
                                    children: u.Z.t("patient_common.root.appointments.bounced.explanation_html")
                                })
                            }), (0, F.jsx)(h.Z, {
                                size: "big",
                                uiStyle: "raw-link",
                                href: `tel:${s}`,
                                component: ci.Z,
                                children: s
                            }), i && (0, F.jsxs)(F.Fragment, {
                                children: [(0, F.jsx)(Re.Z, {
                                    margin: !0
                                }), (0, F.jsx)(h.Z, {
                                    className: "dl-margin-y-16",
                                    onTap: () => {
                                        window.location = "/"
                                    },
                                    children: u.Z.t("patient_common.root.appointments.bounced.back_to_homepage")
                                })]
                            })]
                        })
                    })
                },
                mi = e => {
                    let {
                        bookingToken: t,
                        sendAnalytics: n
                    } = e;
                    const {
                        data: i = {},
                        loading: a,
                        success: s
                    } = (0, Z.Z)({
                        url: `/sessions/anonymous/${t}.json${window.location.search}`,
                        onSuccess: e => {
                            let {
                                data: t
                            } = e;
                            var i, a, s, l;
                            n && t && (o.Z.pushToCustomDataLayer({
                                profile_id: null === (i = t.profile) || void 0 === i ? void 0 : i.id,
                                speciality_id: null === (a = t.profile) || void 0 === a ? void 0 : a.speciality_id,
                                profile_practice_id: t.practice_id,
                                appointment_id: (0, ge.id)(null === (s = t.appointment) || void 0 === s ? void 0 : s.id),
                                appointment_telehealth: null === (l = t.appointment) || void 0 === l ? void 0 : l.telehealth,
                                organization_name: t.organization_name,
                                profile_type: t.organization_name ? "organization" : "practitioner"
                            }), o.Z.sendGtmPageView(p.ZP.GTM_CONTENT_GROUPS.ANONYMOUS_APPOINTMENTS_THREE_LETTERS, window.location.pathname))
                        }
                    }), {
                        appointment: {
                            start_date: l,
                            phone_number: r,
                            needs_preparation: c,
                            show_quick_preview: d,
                            id: m,
                            ...u
                        } = {}
                    } = i;
                    return {
                        loading: a,
                        success: s,
                        displayBillingStep: null === i || void 0 === i ? void 0 : i.display_billing_step,
                        id: m,
                        phoneNumber: r,
                        startDate: l,
                        showQuickPreview: d,
                        needsPreparation: c,
                        profile: null === i || void 0 === i ? void 0 : i.profile,
                        practice: null === i || void 0 === i ? void 0 : i.practice,
                        organizationName: null === i || void 0 === i ? void 0 : i.organization_name,
                        ...u
                    }
                },
                pi = mi,
                ui = e => {
                    let {
                        children: t
                    } = e;
                    return (0, F.jsx)(J, {
                        children: (0, F.jsxs)(Q.Z, {
                            item: !0,
                            xsSize: 12,
                            smSize: 8,
                            mdSize: 6,
                            className: "m-auto dl-margin-t-32",
                            children: [(0, F.jsx)(ke, {}), t]
                        })
                    })
                },
                hi = e => {
                    let {
                        children: t
                    } = e;
                    return (0, F.jsx)(Ze.Z, {
                        title: (0, F.jsx)(ye.Z, {}),
                        children: t
                    })
                },
                _i = () => {
                    const {
                        bookingToken: e
                    } = (0, a.useParams)(), t = (0, I.rl)(), {
                        success: n,
                        loading: i,
                        profile: o,
                        needsPreparation: s,
                        ...l
                    } = pi({
                        bookingToken: e,
                        sendAnalytics: !t
                    }), r = (0, a.useNavigate)();
                    if (t && i) return (0, F.jsx)(Te, {});
                    if (n && !s) return (0, F.jsx)(a.Navigate, {
                        to: `/sessions/anonymous/${e}/telehealth/connect`,
                        replace: !0
                    });
                    const c = n => {
                            t ? r(`/sessions/anonymous/${e}/telehealth/${n}`) : window.location.pathname = `/sessions/anonymous/${e}/telehealth/${n}`
                        },
                        d = t ? hi : ui;
                    return (0, F.jsx)(d, {
                        children: (0, F.jsx)(Pe, {
                            profile: o || {},
                            onConfirm: () => c("confirm"),
                            onCancel: () => c(Se),
                            needsPreparation: s,
                            ...l
                        })
                    })
                },
                xi = e => {
                    let {
                        children: t
                    } = e;
                    return (0, I.Zz)() ? (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(T.Z, {
                            title: (0, F.jsx)(ye.Z, {})
                        }), (0, F.jsx)(f.Z, {
                            className: "dl-padding-16 dl-anonymous-appointment-register dl-anonymous-pr-register-desktop",
                            children: t
                        })]
                    }) : (0, F.jsx)(Ze.Z, {
                        title: (0, F.jsx)(ye.Z, {}),
                        children: t
                    })
                };
            var gi = n(720113),
                vi = n(174976);
            const fi = () => (0, vi.useMutation)((() => vt.ZP.post("/anonymous/attach_medical_data.json")), {});
            var Zi = n(915488),
                ji = n(723552);
            const bi = e => {
                    let {
                        email: t,
                        firstName: n,
                        lastName: i
                    } = e;
                    const [o, s] = (0, r.useState)(!1), {
                        mutate: l
                    } = fi(), {
                        patientRequestId: c
                    } = (0, a.useParams)();
                    return (0, F.jsx)(g.Z, {
                        children: (0, F.jsxs)("div", {
                            className: "dl-flex-column",
                            children: [(0, F.jsx)(he.Z, {
                                name: "regular/link",
                                backgroundColor: "primary-010",
                                size: "small",
                                square: !0
                            }), (0, F.jsx)(_.Z, {
                                uiStyle: "title-l-bold",
                                className: "dl-margin-t-16",
                                children: u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.eligible.title")
                            }), (0, F.jsx)(_.Z, {
                                block: !0,
                                className: "dl-margin-t-16 dl-margin-b-16",
                                children: u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.eligible.body", {
                                    name: `${n} ${i}`
                                })
                            }), (0, F.jsxs)(g.Z, {
                                variant: "stroke",
                                contentClassName: "dl-flex-row",
                                children: [(0, F.jsx)(Zi.ZP, {
                                    size: "small"
                                }), (0, F.jsx)(_.Z, {
                                    className: "dl-margin-8 dl-margin-8",
                                    color: "neutral-110",
                                    children: t
                                })]
                            }), (0, F.jsx)(h.Z, {
                                className: "dl-margin-b-8 dl-margin-t-16",
                                onClick: () => {
                                    s(!0);
                                    try {
                                        l()
                                    } catch (e) {
                                        s(!1)
                                    }
                                },
                                disabled: o,
                                "data-test-id": "attach-data-cta",
                                children: u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.eligible.button_primary")
                            }), (0, F.jsx)(h.Z, {
                                uiStyle: "tertiary-neutral",
                                onClick: () => (0, ji.Z)({
                                    redirection: `/anonymous/patient_request/${c}`
                                }),
                                "data-test-id": "switch-account-cta",
                                children: u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.eligible.button_tertiary")
                            })]
                        })
                    })
                },
                yi = () => {
                    const e = (0, I.Zz)();
                    return (0, F.jsxs)(g.Z, {
                        className: d()({
                            "dl-margin-l-16 dl-margin-r-16 dl-margin-t-16": !e
                        }),
                        children: [(0, F.jsx)(v.Z, {
                            variant: "deprecated-alert-interface",
                            uiStyle: "error",
                            size: "small",
                            children: u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.non_eligible.alert")
                        }), (0, F.jsx)(_.Z, {
                            block: !0,
                            uiStyle: "body-s-regular",
                            align: "center",
                            className: d()({
                                "dl-margin-t-32": e
                            }, {
                                "dl-margin-t-16": !e
                            }),
                            children: u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.non_eligible.body_top")
                        }), (0, F.jsx)(_.Z, {
                            block: !0,
                            uiStyle: "body-s-regular",
                            align: "center",
                            className: d()({
                                "dl-margin-t-32": e
                            }, {
                                "dl-margin-t-16": !e
                            }),
                            children: u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.non_eligible.body_bottom")
                        })]
                    })
                };
            var Ni = n(432613);
            const Si = () => {
                    const e = {
                            switch_account_cta: u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.switch_account_cta"),
                            home_page_cta: u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.home_page_cta")
                        },
                        {
                            patientRequestId: t
                        } = (0, a.useParams)(),
                        n = (0, I.Zz)();
                    return (0, F.jsxs)("div", {
                        className: d()(n ? "dl-flex-row-reverse" : "dl-flex-column"),
                        children: [(0, F.jsx)(h.Z, {
                            onClick: () => (0, ji.Z)({
                                redirection: `/anonymous/patient_request/${t}`
                            }),
                            className: d()(n ? null : "dl-margin-b-8"),
                            "data-test-id": "switch-account-cta",
                            children: e.switch_account_cta
                        }), (0, F.jsx)(h.Z, {
                            uiStyle: "tertiary-neutral",
                            onClick: () => (0, oi.Z)("/"),
                            "data-test-id": "home-page-cta",
                            children: e.home_page_cta
                        })]
                    })
                },
                wi = {
                    error_info: u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.how_to_solve_the_error")
                };
            class ki {
                constructor(e, t) {
                    this.email = e, this.phoneNumber = t
                }
                getTitle() {
                    return u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.email_and_phone_not_match.title")
                }
                getDescription() {
                    return u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.email_and_phone_not_match.description_html", {
                        email: this.email,
                        phone_number: this.phoneNumber
                    })
                }
            }
            class Ti {
                constructor(e) {
                    this.phoneNumber = e
                }
                getTitle() {
                    return u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.phone_not_match.title")
                }
                getDescription() {
                    return u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.phone_not_match.description_html", {
                        phone_number: this.phoneNumber
                    })
                }
            }
            class Ci {
                constructor(e) {
                    this.email = e
                }
                getTitle() {
                    return u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.email_not_match.title")
                }
                getDescription() {
                    return u.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.email_not_match.description_html", {
                        email: this.email
                    })
                }
            }
            const Ei = e => (0, F.jsxs)(g.Z, {
                    children: [(0, F.jsx)(Ni.xv, {
                        uiStyle: "title-s-bold",
                        className: "dl-margin-b-8",
                        children: e.noMatcher.getTitle()
                    }), (0, F.jsx)("div", {
                        className: "dl-margin-b-16",
                        children: e.noMatcher.getDescription()
                    }), (0, F.jsx)("div", {
                        className: "dl-margin-b-16",
                        children: wi.error_info
                    }), (0, F.jsx)(Si, {})]
                }),
                Pi = () => {
                    const {
                        eligible: e,
                        firstName: t,
                        lastName: n,
                        phoneNumber: i,
                        email: a,
                        isLoading: o,
                        emailMismatch: s,
                        phoneMismatch: l
                    } = (0, gi.Z)();
                    if (o) return null;
                    const r = e && t && a,
                        c = !e && !s && !l,
                        d = s && l,
                        m = s && !l,
                        p = !s && l;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [r && (0, F.jsx)(bi, {
                            firstName: t,
                            lastName: n,
                            email: a
                        }), c && (0, F.jsx)(yi, {}), d && (0, F.jsx)(Ei, {
                            noMatcher: new ki(a, i)
                        }), m && (0, F.jsx)(Ei, {
                            noMatcher: new Ci(a)
                        }), p && (0, F.jsx)(Ei, {
                            noMatcher: new Ti(i)
                        })]
                    })
                },
                Ii = () => (0, F.jsx)(xi, {
                    children: (0, F.jsx)(Pi, {})
                });
            var Ai = n(391337),
                Di = n(161424),
                Mi = n(235207),
                Ri = n(989231);
            const Oi = n.p + "11d9a2e01fcef38d02b4.png",
                Li = () => {
                    const e = `https://doctolibpatient.zendesk.com/hc/${(0,I.rZ)()}/articles/360025317194`,
                        t = (0, a.useNavigate)(),
                        n = (0, a.useLocation)();
                    return (0, F.jsxs)("div", {
                        role: "status",
                        className: d()("dl-flex-column dl-flex-column dl-text-center dl-justify-between", {
                            "dl-full-height": (0, I.rl)()
                        }),
                        children: [(0, F.jsxs)("div", {
                            className: "dl-margin-b dl-flex-grow",
                            children: [(0, F.jsx)(ve.Z, {
                                src: Oi,
                                width: 200,
                                alt: ""
                            }), (0, F.jsx)(_.Z, {
                                uiStyle: "title-s-bold",
                                className: "dl-margin-y-16",
                                children: u.Z.t("common.password_reset.confirmation.email_sent")
                            }), (0, F.jsx)(_.Z, {
                                uiStyle: "body-s-regular",
                                children: u.Z.t("common.password_reset.confirmation.click_link_to_reset")
                            })]
                        }), (0, F.jsxs)("div", {
                            children: [(0, F.jsxs)(_.Z, {
                                color: "neutral-090",
                                uiStyle: "body-s-regular",
                                children: [u.Z.t("common.password_reset.explanation_desc_patient"), (0, F.jsx)(ci.Z, {
                                    trackingId: "patient_reset_password_faq",
                                    href: e,
                                    target: "_blank",
                                    children: u.Z.t("common.password_reset.explanation_desc_patient_link")
                                })]
                            }), (0, F.jsx)(h.Z, {
                                className: "dl-margin-t-16",
                                type: "submit",
                                block: !0,
                                onClick: () => {
                                    var e;
                                    (0, I.Zz)() ? (0, oi.Z)("/sessions/new") : t(null !== (e = n.state) && void 0 !== e && e.username ? -1 : "/sessions/new", {
                                        replace: !0
                                    })
                                },
                                children: u.Z.t("common.got_it")
                            })]
                        })]
                    })
                },
                Fi = n.p + "1f859e575abedc1457de.png",
                qi = () => {
                    const e = `https://doctolibpatient.zendesk.com/hc/${(0,I.rZ)()}/articles/360025317194`,
                        t = (0, a.useNavigate)();
                    return (0, F.jsx)("div", {
                        role: "status",
                        className: "dl-flex-column dl-flex-column dl-text-center dl-justify-between dl-full-height",
                        children: (0, F.jsxs)("div", {
                            className: "dl-flex-grow",
                            children: [(0, F.jsx)(ve.Z, {
                                src: Fi,
                                width: 200,
                                alt: ""
                            }), (0, F.jsx)(_.Z, {
                                uiStyle: "title-s-bold",
                                className: "dl-margin-y-16",
                                children: u.Z.t("common.password_reset.confirmation.sms_sent")
                            }), (0, F.jsx)(_.Z, {
                                uiStyle: "body-s-regular",
                                children: u.Z.t("common.password_reset.confirmation.click_link_sms_to_reset")
                            }), (0, F.jsxs)("div", {
                                className: "dl-margin-t-16",
                                children: [(0, F.jsxs)(_.Z, {
                                    color: "neutral-090",
                                    uiStyle: "body-s-regular",
                                    children: [u.Z.t("common.password_reset.explanation_sms_desk_patient"), (0, F.jsx)(ci.Z, {
                                        trackingId: "patient_reset_password_faq",
                                        href: e,
                                        target: "_blank",
                                        children: u.Z.t("common.password_reset.explanation_desc_patient_link")
                                    })]
                                }), (0, F.jsx)(h.Z, {
                                    className: "dl-margin-t-16",
                                    type: "submit",
                                    block: !0,
                                    onClick: () => {
                                        (0, I.Zz)() ? (0, oi.Z)("/sessions/new") : t(-1)
                                    },
                                    children: u.Z.t("common.got_it")
                                })]
                            })]
                        })
                    })
                },
                zi = e => {
                    let {
                        setChangedAfterSubmit: t
                    } = e;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(et.Z, {
                            field: "phone_number",
                            required: !0,
                            placeholder: u.Z.t("common.password_reset.phone_number_label"),
                            onChange: () => t(!0)
                        }), (0, F.jsx)(et.Z, {
                            field: "birthdate",
                            hideInputDetails: !0,
                            required: !0,
                            placeholder: u.Z.t("common.password_reset.birthdate_label"),
                            onChange: () => t(!0)
                        })]
                    })
                },
                Gi = e => {
                    let {
                        setChangedAfterSubmit: t
                    } = e;
                    return (0, F.jsx)(et.Z, {
                        field: "email",
                        autoFocus: !0,
                        required: !0,
                        className: "dl-margin-t-40",
                        placeholder: u.Z.t("common.password_reset.email_placeholder"),
                        onChange: () => t(!0)
                    })
                },
                Vi = e => {
                    switch (e) {
                        case "bad_email":
                            return u.Z.t("common.password_reset.bad_email_patient");
                        case "bad_infos":
                            return u.Z.t("common.password_reset.bad_infos_patient");
                        case "bad_phone_number":
                            return u.Z.t("common.password_reset.bad_phone_number_patient");
                        default:
                            return u.Z.t("common.error")
                    }
                },
                Bi = e => {
                    let {
                        errorMessage: t
                    } = e;
                    return (0, F.jsx)(v.Z, {
                        variant: "deprecated-alert-interface",
                        uiStyle: "error",
                        className: "dl-margin-y-16",
                        children: Vi(t)
                    })
                },
                Hi = e => {
                    var t;
                    let {
                        step: n
                    } = e;
                    const i = (0, a.useLocation)(),
                        o = null === i || void 0 === i || null === (t = i.state) || void 0 === t ? void 0 : t.username,
                        s = /^\+*[0-9. ]*$/.test(String(o)),
                        l = s ? void 0 : o,
                        c = s ? o : void 0,
                        [m, p] = (0, r.useState)(!0),
                        [x, g] = (0, r.useState)(s),
                        v = (0, I.rl)(),
                        {
                            isError: f,
                            error: Z,
                            isLoading: j,
                            isSuccess: b,
                            mutate: y
                        } = (0, Ri.g)();
                    return b ? x ? (0, F.jsx)(qi, {}) : (0, F.jsx)(Li, {}) : (0, F.jsx)(Ke.Z, {
                        className: d()("dl-flex-column dl-padding-b-safe-area dl-justify-between", {
                            "dl-full-height": v
                        }),
                        onSubmit: e => y(e, {
                            onSettled: () => {
                                p(!1)
                            }
                        }),
                        horizontal: !1,
                        defaultValues: {
                            phone_number: c,
                            email: l
                        },
                        children: e => (0, F.jsxs)(F.Fragment, {
                            children: [(0, F.jsxs)("div", {
                                children: [(0, F.jsx)(_.Z, {
                                    className: "dl-margin-b-24",
                                    align: "center",
                                    uiStyle: "title-l-bold",
                                    children: x ? u.Z.t("common.password_reset.reset_by_sms") : u.Z.t("common.password_reset.reset_by_email")
                                }), (0, F.jsxs)("div", {
                                    className: "dl-margin-b-40",
                                    children: [(0, F.jsx)(Mi.Z, {
                                        centred: !0,
                                        steps: [x ? u.Z.t("common.password_reset.step_1_sms") : u.Z.t("common.password_reset.step_1_patient"), x ? u.Z.t("common.password_reset.step_2_sms") : u.Z.t("common.password_reset.step_2_patient"), u.Z.t("common.password_reset.step_3_patient")],
                                        step: n
                                    }), f && (0, F.jsx)(Bi, {
                                        errorMessage: null === Z || void 0 === Z ? void 0 : Z.message
                                    }), x ? (0, F.jsx)(zi, {
                                        setChangedAfterSubmit: p
                                    }) : (0, F.jsx)(Gi, {
                                        setChangedAfterSubmit: p
                                    }), (0, F.jsx)("div", {
                                        className: "dl-text-left",
                                        children: (0, F.jsx)(h.Z, {
                                            uiStyle: "link-primary",
                                            onClick: () => {
                                                g(!x), e.resetAll()
                                            },
                                            children: x ? u.Z.t("common.password_reset.email_method") : u.Z.t("common.password_reset.sms_method")
                                        })
                                    })]
                                })]
                            }), (0, F.jsx)("div", {
                                className: "flex dl-justify-end",
                                children: (0, F.jsx)(h.Z, {
                                    type: "submit",
                                    disabled: j || !m,
                                    block: v,
                                    children: u.Z.t("common.password_reset.send")
                                })
                            })]
                        })
                    })
                };
            var Ui = n(56354),
                $i = n(86022);
            const Yi = () => (0, F.jsxs)(F.Fragment, {
                children: [(0, F.jsx)(un.default, {
                    hideDocButton: !0
                }), (0, F.jsx)(Q.Z, {
                    className: "dl-desktop-two-factor-container dl-margin-t-32 dl-flex-center",
                    children: (0, F.jsx)(g.Z, {
                        className: "dl-two-factor-card dl-text-center",
                        children: (0, F.jsx)($i.Z, {})
                    })
                })]
            });
            var Wi = n(440877);
            const Ki = "notes";
            var Xi = n(112985),
                Qi = n(239417),
                Ji = n(261397);
            const ea = () => {
                    const {
                        encryptRecord: e,
                        decryptRecord: t
                    } = (0, r.useContext)(Ji.WA), n = [{
                        self: !0
                    }];
                    return {
                        encryptPatientDiaryNoteValues: async t => {
                            let {
                                title: i,
                                body: a
                            } = t;
                            const o = {
                                    title: i || a.split(" ").slice(0, 4).join(" "),
                                    body: a
                                },
                                s = await e.v2({
                                    title: {
                                        shareWith: n
                                    },
                                    body: {
                                        shareWith: n
                                    }
                                }, o, "PatientDiaryCreateOrEditNoteModal/onSubmit", {
                                    subject_type: "PatientDiaryNote",
                                    subject_id: null
                                });
                            return {
                                tanker_encrypted_title: s.tanker_encrypted_title,
                                tanker_encrypted_body: s.tanker_encrypted_body
                            }
                        },
                        decryptNote: e => t.v2({
                            title: !0,
                            body: !0
                        }, e, "usePatientDiaryNotesIndex", {
                            subject_type: "PatientDiaryNote",
                            subject_id: e.id || null
                        })
                    }
                },
                ta = e => {
                    const t = (0, r.useContext)(Qi._O),
                        n = (0, vi.useQueryClient)();
                    return (0, vi.useMutation)((async e => t.delete(`/patient_app/patient_diary/notes/${e}`)), {
                        onError: e,
                        onSuccess: () => n.invalidateQueries(["patient_app", "patient_diary", "notes", "index"])
                    })
                },
                na = n.p + "5b05d805137c8d290ce5.png";
            var ia = n(989976);
            const aa = () => (0, F.jsx)(g.Z, {
                className: d()("flex dl-align-items-center dl-neutral-010-bg dl-margin-b", {
                    "dl-margin-x-16": (0, I.rl)()
                }),
                children: (0, F.jsxs)("div", {
                    className: d()("flex dl-align-items-center", {
                        "dl-flex-center": (0, I.rl)()
                    }),
                    children: [(0, F.jsx)(ve.Z, {
                        src: na,
                        width: "32",
                        alt: ""
                    }), (0, F.jsxs)(_.Z, {
                        className: "dl-margin-l",
                        children: [u.Z.t("patient_common.root.documents.patient_diary.notes_explanation_message"), " "]
                    })]
                })
            });
            var oa = n(134360),
                sa = n(619595),
                la = n(592290);
            const ra = e => {
                    let {
                        note: t,
                        show: n,
                        onHide: i,
                        onDeleteNoteClick: a
                    } = e;
                    return (0, F.jsx)(la.ZP, {
                        show: n,
                        onHide: i,
                        children: (0, F.jsxs)(la.Ng, {
                            children: [(0, F.jsx)("div", {
                                className: "dl-padding-b-16",
                                children: (0, F.jsxs)("div", {
                                    className: "flex dl-align-items-center",
                                    children: [(0, F.jsx)(he.Z, {
                                        name: "solid/note-sticky",
                                        color: "yellow-090",
                                        backgroundColor: "yellow-020",
                                        size: "small",
                                        square: !0
                                    }), (0, F.jsxs)("div", {
                                        className: "flex dl-flex-column dl-margin-l",
                                        children: [(0, F.jsx)(_.Z, {
                                            ellipsis: !0,
                                            uiStyle: "body-s-bold",
                                            color: "neutral-150",
                                            children: t.title
                                        }), (0, F.jsxs)(_.Z, {
                                            uiStyle: "body-s-regular",
                                            block: !0,
                                            ellipsis: !0,
                                            align: "left",
                                            color: "neutral-130",
                                            children: [le()(t.created_at).localize("HH:mm"), " \u2022 ", le()(t.created_at).localize("D MMM YYYY")]
                                        })]
                                    })]
                                })
                            }, "header"), (0, F.jsx)(la.h6, {
                                uiStyle: "link-danger",
                                actionText: u.Z.t("common.actions.delete"),
                                icon: "trash-can",
                                onClick: a
                            }, `${t.id}-delete`)]
                        })
                    })
                },
                ca = e => {
                    let {
                        note: t,
                        onNoteDeleteSuccess: n,
                        onNoteDeleteError: i,
                        onClick: a
                    } = e;
                    const [o, s] = (0, r.useState)(!1), l = e => {
                        (0, me.ZP)({
                            name: "patient_diary_delete_note",
                            itemType: pe.i.PATIENT_DIARY_NOTE,
                            itemId: t.id,
                            details: {
                                success: e
                            }
                        }, {
                            schema: "patient"
                        })
                    }, {
                        mutateAsync: c
                    } = ta((() => {
                        i(), s(!1), l(!1)
                    }));
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(ra, {
                            show: o,
                            onHide: () => s(!1),
                            note: t,
                            onDeleteNoteClick: async () => {
                                await c(t.id), n(), l(!0)
                            }
                        }), (0, F.jsxs)($t.Z, {
                            className: "dl-flex-grow flex dl-overflow-hidden",
                            onTap: () => {
                                (0, me.ZP)({
                                    name: "patient_diary_open_note",
                                    itemId: t.id,
                                    itemType: pe.i.PATIENT_DIARY_NOTE
                                }, {
                                    schema: "patient"
                                }), a(t)
                            },
                            children: [(0, F.jsx)("div", {
                                className: "dl-margin-t-8",
                                children: (0, F.jsx)(he.Z, {
                                    name: "regular/note-sticky",
                                    color: "yellow-090",
                                    backgroundColor: "yellow-020",
                                    size: "small",
                                    square: !0
                                })
                            }), (0, F.jsxs)("div", {
                                className: "dl-padding-l-16 dl-overflow-hidden dl-flex-grow",
                                children: [(0, F.jsx)("div", {
                                    className: "flex flex-column",
                                    children: (0, F.jsx)(_.Z, {
                                        ellipsis: !0,
                                        uiStyle: "body-s-regular",
                                        color: "neutral-150",
                                        children: t.title
                                    })
                                }), (0, F.jsxs)(_.Z, {
                                    uiStyle: "body-s-regular",
                                    block: !0,
                                    ellipsis: !0,
                                    align: "left",
                                    color: "neutral-090",
                                    children: [le()(t.created_at).localize("HH:mm"), " \u2022 ", le()(t.created_at).localize("D MMM YYYY")]
                                })]
                            }), (0, F.jsx)("div", {
                                className: "flex dl-align-items-center",
                                children: (0, F.jsx)(sa.ZP, {
                                    size: "medium",
                                    title: u.Z.t("common.actions.show_more_actions"),
                                    onTap: e => {
                                        e.stopPropagation(), s(!0)
                                    },
                                    name: "ellipsis"
                                })
                            })]
                        })]
                    })
                },
                da = e => {
                    let {
                        notes: t,
                        onNoteDeleteSuccess: n,
                        onNoteDeleteError: i,
                        onNoteClick: a
                    } = e;
                    return (0, F.jsx)("div", {
                        className: "patient-diary-notes-list",
                        children: t.map((e => (0, F.jsxs)("div", {
                            children: [(0, F.jsx)(oa.Z, {
                                uiStyle: "line"
                            }), (0, F.jsx)(g.Z, {
                                children: (0, F.jsx)("div", {
                                    className: d()("flex dl-align-items-center"),
                                    children: (0, F.jsx)(ca, {
                                        note: e,
                                        onNoteDeleteSuccess: n,
                                        onNoteDeleteError: i,
                                        onClick: a
                                    })
                                })
                            })]
                        }, e.id)))
                    })
                };
            var ma = n(261969),
                pa = n(912536),
                ua = n(258721);
            const ha = e => t => {
                    t.stopPropagation(), e(t)
                },
                _a = e => {
                    let {
                        setShowDeleteNoteDialog: t
                    } = e;
                    return (0, F.jsx)("div", {
                        className: "flex dl-document-popover-edit-action",
                        children: (0, F.jsx)(ua.Z, {
                            size: "small",
                            contentClassName: "dl-position-absolute",
                            position: "left",
                            triggerComponent: e => (e => (0, F.jsx)(sa.ZP, {
                                size: "medium",
                                name: "ellipsis",
                                title: u.Z.t("common.actions.show_more_actions"),
                                onTap: ha(e)
                            }))(e),
                            children: (0, F.jsx)(pa.Z, {
                                children: (0, F.jsx)(pa.Z.Button, {
                                    leftIcon: "trash-can",
                                    uiStyle: "link-danger",
                                    onTap: ha((() => {
                                        t(!0)
                                    })),
                                    className: "dl-padding-x-16",
                                    children: u.Z.t("common.actions.delete")
                                })
                            })
                        })
                    })
                },
                xa = e => {
                    let {
                        show: t,
                        onClose: n,
                        onDelete: i,
                        isLoading: a
                    } = e;
                    return (0, F.jsx)(on.Z, {
                        title: u.Z.t("patient_common.root.documents.patient_diary.delete.title"),
                        dismissText: u.Z.t("common.actions.cancel"),
                        onDismiss: n,
                        acceptText: u.Z.t("patient_common.root.documents.patient_diary.delete.title"),
                        acceptDisabled: a,
                        onAccept: i,
                        show: t,
                        children: (0, F.jsx)("div", {
                            children: u.Z.t("patient_common.root.documents.patient_diary.delete.body")
                        })
                    })
                },
                ga = e => {
                    let {
                        note: t,
                        onNoteDeleteSuccess: n,
                        onNoteDeleteError: i,
                        onClick: a
                    } = e;
                    const [o, s] = (0, r.useState)(!1), l = e => {
                        (0, me.ZP)({
                            name: "patient_diary_delete_note",
                            itemType: pe.i.PATIENT_DIARY_NOTE,
                            itemId: t.id,
                            details: {
                                success: e
                            }
                        }, {
                            schema: "patient"
                        })
                    }, {
                        mutateAsync: c
                    } = ta((() => {
                        i(), s(!1), l(!1)
                    })), d = () => {
                        (0, me.ZP)({
                            name: "patient_diary_open_note",
                            itemId: t.id,
                            itemType: pe.i.PATIENT_DIARY_NOTE
                        }, {
                            schema: "patient"
                        }), a(t)
                    };
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(xa, {
                            show: o,
                            onClose: () => s(!1),
                            onDelete: async () => {
                                await c(t.id), n(), l(!0)
                            }
                        }), (0, F.jsxs)(ma.SC, {
                            onClick: () => {},
                            children: [(0, F.jsx)(ma.pj, {
                                onClick: d,
                                children: (0, F.jsxs)("div", {
                                    className: "flex",
                                    children: [(0, F.jsx)(he.Z, {
                                        name: "regular/note-sticky",
                                        color: "yellow-090",
                                        backgroundColor: "yellow-020",
                                        size: "small",
                                        square: !0
                                    }), (0, F.jsx)(_.Z, {
                                        className: "dl-margin-l",
                                        children: t.title
                                    })]
                                })
                            }), (0, F.jsx)(ma.pj, {
                                onClick: d,
                                children: (0, F.jsx)("div", {
                                    className: "dl-flex-column dl-flex-align-center",
                                    children: (0, F.jsxs)(_.Z, {
                                        children: [le()(t.created_at).localize("HH:mm"), " \u2022 ", le()(t.created_at).localize("D MMM YYYY")]
                                    })
                                })
                            }), (0, F.jsx)(ma.pj, {
                                children: (0, F.jsx)("div", {
                                    className: "flex dl-justify-end",
                                    children: (0, F.jsx)(_a, {
                                        setShowDeleteNoteDialog: s
                                    })
                                })
                            })]
                        })]
                    })
                },
                va = e => {
                    let {
                        notes: t,
                        onNoteDeleteSuccess: n,
                        onNoteDeleteError: i,
                        onNoteClick: a
                    } = e;
                    return (0, F.jsx)("div", {
                        className: "patient-diary-notes-list pb-32",
                        children: (0, F.jsxs)(ma.iA, {
                            className: "bordered dl-full-width",
                            fixedLayout: !0,
                            children: [(0, F.jsx)(ma.ss, {
                                children: (0, F.jsxs)(ma.SC, {
                                    children: [(0, F.jsx)(ma.bi, {
                                        children: u.Z.t("common.note")
                                    }), (0, F.jsx)(ma.bi, {
                                        children: u.Z.t("patient_common.root.documents.patient_diary.created_on")
                                    }), (0, F.jsx)(ma.bi, {})]
                                })
                            }), (0, F.jsx)(ma.RM, {
                                children: t.map((e => (0, F.jsx)(ga, {
                                    onClick: a,
                                    note: e,
                                    onNoteDeleteSuccess: n,
                                    onNoteDeleteError: i
                                }, e.id)))
                            })]
                        })
                    })
                };
            var fa = n(383915),
                Za = n(968461),
                ja = n(267745);
            const ba = e => {
                    var t;
                    let {
                        onSuccess: n,
                        onClose: i,
                        show: a,
                        isMobile: o = !1,
                        note: s
                    } = e;
                    const l = (0, He.ZP)(),
                        {
                            fetchAccount: c
                        } = (0, He.dv)(),
                        m = (0, Xt.ZP)(),
                        {
                            encryptPatientDiaryNoteValues: _
                        } = ea(),
                        [x, g] = (0, r.useState)({
                            title: "",
                            body: ""
                        }),
                        [v, f] = (0, r.useState)(!1),
                        [Z, j] = (0, r.useState)(!1),
                        [b, y] = (0, r.useState)(!1),
                        [N, S] = (0, r.useState)(!1);
                    (0, r.useEffect)((() => {
                        s && g({
                            title: s.title || "",
                            body: s.body || ""
                        })
                    }), [s]), (0, r.useEffect)((() => {
                        S(((e, t) => t ? e.title !== t.title || e.body !== t.body : "" !== e.body)(x, s))
                    }), [s, x]);
                    const w = () => {
                            g({
                                title: "",
                                body: ""
                            }), f(!1), y(!1)
                        },
                        k = (e, t) => {
                            (0, me.ZP)({
                                name: "patient_diary_save_note",
                                itemType: pe.i.PATIENT_DIARY_NOTE,
                                itemId: e,
                                details: {
                                    message_length: x.body.length,
                                    success: t
                                }
                            }, {
                                schema: "patient"
                            })
                        },
                        T = () => {
                            m({
                                message: u.Z.t("patient_common.root.documents.patient_diary.toast.error"),
                                uiStyle: "error"
                            }), k(null === s || void 0 === s ? void 0 : s.id, !1)
                        },
                        C = (null === l || void 0 === l || null === (t = l.patient_privacy_settings) || void 0 === t ? void 0 : t.patient_diary_notes) === ja.aA.ENABLED,
                        {
                            mutateAsync: E
                        } = (e => {
                            let {
                                onError: t
                            } = e;
                            const n = (0, r.useContext)(Qi._O),
                                i = (0, vi.useQueryClient)();
                            return (0, vi.useMutation)((e => n.post("/patient_app/patient_diary/notes.json", {
                                body: e
                            })), {
                                onSuccess: () => i.invalidateQueries(["patient_app", "patient_diary", "notes", "index"]),
                                onError: t
                            })
                        })({
                            onError: T
                        }),
                        {
                            mutateAsync: P
                        } = (e => {
                            let {
                                onError: t
                            } = e;
                            const n = (0, r.useContext)(Qi._O),
                                i = (0, vi.useQueryClient)();
                            return (0, vi.useMutation)((e => n.put(`/patient_app/patient_diary/notes/${e.id}.json`, {
                                body: e
                            })), {
                                onSuccess: () => i.invalidateQueries(["patient_app", "patient_diary", "notes", "index"]),
                                onError: t
                            })
                        })({
                            onError: T
                        }),
                        I = async () => {
                            y(!0);
                            const e = {
                                    id: (null === s || void 0 === s ? void 0 : s.id) || null,
                                    patient_diary_consent: !C && v,
                                    ...await _(x)
                                },
                                {
                                    status: t,
                                    bodyData: i
                                } = s ? await P(e) : await E(e);
                            200 === t && (C || await c(), k(i.id, !0), w(), n())
                        },
                        A = () => {
                            N ? j(!0) : (w(), i())
                        },
                        D = !x.body.length,
                        M = !N || D || !C && !v;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(on.Z, {
                            title: u.Z.t("patient_common.root.documents.patient_diary.unsaved_changes.title"),
                            dismissText: u.Z.t("patient_common.root.documents.patient_diary.unsaved_changes.leave"),
                            onDismiss: () => {
                                j(!1), w(), i()
                            },
                            acceptText: u.Z.t("patient_common.root.documents.patient_diary.unsaved_changes.save"),
                            onAccept: () => {
                                j(!1), I()
                            },
                            show: Z,
                            children: u.Z.t("patient_common.root.documents.patient_diary.unsaved_changes.text")
                        }), (0, F.jsxs)(Kt.Z, {
                            title: u.Z.t("patient_common.root.documents.patient_diary.note_modal.title"),
                            onHide: A,
                            show: a,
                            size: o ? "fullscreen" : void 0,
                            children: [(0, F.jsx)(fa.Z, {
                                children: (0, F.jsxs)("div", {
                                    className: "dl-full-height flex flex-col",
                                    children: [(0, F.jsx)("div", {
                                        children: (0, F.jsx)(Kn.Z, {
                                            label: u.Z.t("patient_common.root.documents.patient_diary.note_modal.fields.title.label"),
                                            placeholder: u.Z.t("patient_common.root.documents.patient_diary.note_modal.fields.title.placeholder"),
                                            name: "patient_diary_note_title",
                                            value: x.title,
                                            onChange: e => g({ ...x,
                                                title: e.target.value
                                            })
                                        })
                                    }), (0, F.jsx)("div", {
                                        className: "mt-24",
                                        children: (0, F.jsx)(Kn.Z, {
                                            label: u.Z.t("patient_common.root.documents.patient_diary.note_modal.fields.body.label"),
                                            name: "patient_diary_note_body",
                                            multiline: !0,
                                            rows: "7",
                                            placeholder: u.Z.t("patient_common.root.documents.patient_diary.note_modal.fields.body.placeholder"),
                                            value: x.body,
                                            onChange: e => g({ ...x,
                                                body: e.target.value
                                            })
                                        })
                                    }), !C && (0, F.jsx)("div", {
                                        className: d()({
                                            "mt-24": !o,
                                            "mt-auto": o
                                        }),
                                        children: (0, F.jsx)(Ye.Z, {
                                            name: "patient_diary_consent",
                                            checked: v,
                                            onChange: e => {
                                                f(e.target.checked)
                                            },
                                            label: u.Z.t("patient_common.root.documents.patient_diary.note_modal.fields.patient_diary_consent.label_html", {
                                                more_details_url: p.ZP.PATIENT_LEGAL_INFO_LINKS.patient_diary_privacy_policy
                                            }),
                                            required: !0,
                                            "data-design-system": "base"
                                        })
                                    })]
                                })
                            }), (0, F.jsxs)(Za.Z, {
                                children: [!o && (0, F.jsx)(h.Z, {
                                    onClick: A,
                                    uiStyle: "tertiary-neutral",
                                    className: "dl-margin-r",
                                    children: u.Z.t("common.actions.cancel")
                                }), (0, F.jsx)("div", {
                                    children: (0, F.jsx)(h.Z, {
                                        onClick: I,
                                        disabled: M,
                                        loadable: {
                                            loading: b
                                        },
                                        block: o,
                                        children: u.Z.t("common.actions.save")
                                    })
                                })]
                            })]
                        })]
                    })
                },
                ya = e => {
                    let {
                        isMobile: t,
                        ...n
                    } = e;
                    return t ? (0, F.jsx)(da, { ...n
                    }) : (0, F.jsx)(va, { ...n
                    })
                },
                Na = e => {
                    var t;
                    let {
                        showCreateNoteModal: n,
                        openModal: i,
                        closeModal: a,
                        isMobile: o
                    } = e;
                    const {
                        data: s,
                        isLoading: l,
                        error: c
                    } = (() => {
                        const e = (0, r.useContext)(Qi._O),
                            {
                                decryptNote: t
                            } = ea(),
                            n = (0, He.ZP)() && (0, I.Gl)(),
                            i = p.ZP.PATIENT_DIARY_ENABLED_FOR_COUNTRY,
                            a = Boolean(n && i);
                        return (0, vi.useQuery)(["patient_app", "patient_diary", "notes", "index"], (async () => {
                            const {
                                bodyData: n
                            } = await e.get("/patient_app/patient_diary/notes");
                            return {
                                data: await Promise.all(n.map((e => t(e))))
                            }
                        }), {
                            enabled: a
                        })
                    })(), m = (0, Xt.ZP)(), [h, x] = (0, r.useState)();
                    return l ? null : c ? (0, F.jsx)(v.Z, {
                        variant: "deprecated-alert-interface",
                        uiStyle: "error",
                        children: u.Z.t("common.error")
                    }) : (0, F.jsxs)(F.Fragment, {
                        children: [!(null !== s && void 0 !== s && null !== (t = s.data) && void 0 !== t && t.length) && (0, F.jsx)(ia.Z, {
                            title: u.Z.t("patient_common.root.documents.patient_diary.empty_state.title"),
                            image: na,
                            children: (0, F.jsx)(_.Z, {
                                children: u.Z.t("patient_common.root.documents.patient_diary.empty_state.description")
                            })
                        }), s && 0 !== s.data.length && (0, F.jsxs)(f.Z, {
                            className: d()({
                                "dl-padding-t-16 dl-padding-b-56": o
                            }),
                            children: [(0, F.jsx)(aa, {}), (0, F.jsx)(ya, {
                                onNoteDeleteError: () => {
                                    m({
                                        message: u.Z.t("patient_common.root.documents.patient_diary.toast.delete.error"),
                                        uiStyle: "error"
                                    })
                                },
                                onNoteDeleteSuccess: () => {
                                    m({
                                        message: u.Z.t("patient_common.root.documents.patient_diary.toast.delete.success"),
                                        uiStyle: "success"
                                    })
                                },
                                notes: s.data,
                                onNoteClick: e => {
                                    x(e), i()
                                },
                                isMobile: o
                            })]
                        }), (0, F.jsx)(ba, {
                            show: n,
                            onClose: () => {
                                x(void 0), a()
                            },
                            onSuccess: () => {
                                x(void 0), a(), m({
                                    message: u.Z.t("patient_common.root.documents.patient_diary.toast.success"),
                                    uiStyle: "success"
                                })
                            },
                            note: h,
                            isMobile: o
                        })]
                    })
                };
            var Sa = n(795361),
                wa = n(247557),
                ka = n(933440),
                Ta = n(99630);
            const Ca = e => {
                    let {
                        children: t,
                        buildSortProps: n
                    } = e;
                    const i = (0, r.useCallback)((e => (0, _n.WU)(e.master_patient)), []);
                    return (0, F.jsxs)(ma.iA, {
                        children: [(0, F.jsx)(ma.ss, {
                            children: (0, F.jsxs)(ma.SC, {
                                children: [(0, F.jsx)(ma.bi, {
                                    children: u.Z.t("common.documents")
                                }), (0, F.jsx)(ma.bi, { ...n(i),
                                    children: u.Z.t("patient_common.root.documents.patient_linked")
                                }), (0, F.jsx)(ma.bi, { ...n("created_at"),
                                    children: u.Z.t("patient_common.root.documents.created_at")
                                }), (0, F.jsx)(ma.bi, { ...n("created_by"),
                                    children: u.Z.t("patient_common.root.documents.created_by")
                                }), (0, F.jsx)(ma.bi, {})]
                            })
                        }), (0, F.jsx)(ma.RM, {
                            children: t
                        })]
                    })
                },
                Ea = e => {
                    let {
                        loading: t,
                        error: n,
                        documents: i,
                        children: a
                    } = e;
                    return t && 0 === i.length ? null : n ? (0, F.jsx)(v.Z, {
                        variant: "deprecated-alert-interface",
                        uiStyle: "error",
                        children: u.Z.t("common.error")
                    }) : i.length ? a : (0, F.jsx)(ia.Z, {
                        title: u.Z.t("patient_mobile.root.account.documents.empty_state.logged.title"),
                        image: Ta,
                        secondaryAction: {
                            text: u.Z.t("patient_mobile.root.account.documents.empty_state.logged.button_text"),
                            href: u.Z.t("patient_mobile.root.account.documents.empty_state.logged.button_href")
                        },
                        children: (0, F.jsx)(_.Z, {
                            children: u.Z.t("patient_mobile.root.account.documents.empty_state.logged.description")
                        })
                    })
                },
                Pa = () => {
                    const {
                        documents: e,
                        loading: t,
                        error: n,
                        lastPage: i,
                        showMore: a,
                        fetchDocuments: o
                    } = (0, M.Z)(), {
                        buildSortProps: s,
                        sortedItems: l
                    } = (0, ma.sC)({
                        items: e
                    });
                    return (0, F.jsxs)(F.Fragment, {
                        children: [e.length > 0 && (0, F.jsx)(ka.Z, {}), (0, F.jsx)(Ea, {
                            documents: e,
                            error: n,
                            loading: t,
                            children: (0, F.jsx)(Ca, {
                                documents: e,
                                buildSortProps: s,
                                children: l.map((e => (0, F.jsx)(wa.Z, {
                                    onDestroyed: o,
                                    doc: e,
                                    isTableView: !0
                                }, e.id)))
                            })
                        }), e.length > 0 && !i && (0, F.jsx)("div", {
                            className: "dl-flex-center dl-padding-y-16",
                            children: (0, F.jsx)(h.Z, {
                                uiStyle: "outlined",
                                onTap: a,
                                disabled: t,
                                leftIcon: "chevron-down",
                                children: u.Z.t("patient_common.root.documents.display_more")
                            })
                        })]
                    })
                };
            var Ia = n(569090);
            const Aa = () => {
                    const e = (0, Xt.ZP)();
                    return (0, F.jsx)(Ia.Z, {
                        onUpload: () => {
                            e({
                                message: u.Z.t("helpers.appointment.patient_documents.saved"),
                                uiStyle: "success"
                            })
                        },
                        startTankerOnMount: !0,
                        children: e => {
                            let {
                                onClick: t,
                                loadingAndValidatingFile: n
                            } = e;
                            return (0, F.jsx)(h.Z, {
                                onClick: t,
                                leftIcon: "file-arrow-up",
                                loadable: {
                                    loading: n
                                },
                                children: u.Z.t("patient_common.root.documents.add")
                            })
                        }
                    })
                },
                Da = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, F.jsx)(h.Z, {
                        onClick: t,
                        leftIcon: "note-sticky",
                        children: u.Z.t("patient_common.root.documents.patient_diary.create_note")
                    })
                };
            var Ma = n(540154);
            const Ra = e => {
                    let {
                        tabs: t,
                        activeTab: n,
                        onTabChange: i
                    } = e;
                    return (0, F.jsx)("div", {
                        className: "w-1/5",
                        children: (0, F.jsx)(Ma.m, {
                            children: t.map((e => (0, F.jsx)(Ma.O, {
                                onTap: () => i(e),
                                active: n.value === e.value,
                                children: e.label
                            }, e.value)))
                        })
                    })
                },
                Oa = p.ZP.PATIENT_DIARY_ENABLED_FOR_COUNTRY,
                La = [{
                    value: "documents",
                    label: u.Z.t("common.documents"),
                    component: Pa,
                    button: Aa
                }, {
                    value: Ki,
                    label: u.Z.t("patient_common.root.documents.patient_diary.title"),
                    component: Na,
                    button: Da
                }],
                Fa = () => {
                    const {
                        unreadDocumentsCount: e
                    } = (0, r.useContext)(Wi.Z), t = (0, Xi.Z)(), n = (0, He.ZP)(), i = (0, a.useLocation)(), o = (0, a.useNavigate)(), [s, l] = (0, r.useState)(La[0]), [c, d] = (0, r.useState)(!1), {
                        createTrackingEventWithContext: m
                    } = (0, Sa.Z)();
                    if ((0, r.useEffect)((() => {
                            if (t.tab) {
                                const e = La.find((e => e.value === t.tab));
                                e && l(e)
                            }
                        }), [t]), !n) return window.location = "/sessions/new", null;
                    if (!(0, p.cr)("bypass_patient_email_verification") && (null === n || void 0 === n ? void 0 : n.should_verify_email_address)) return window.location.pathname = "/account/email_verifications", null;
                    const h = () => {
                            d(!0)
                        },
                        x = Oa ? s.component : Pa,
                        g = s.button;
                    return (0, F.jsx)("div", {
                        className: "dl-flex-grow dl-white-bg",
                        children: (0, F.jsxs)(Ue.Z, {
                            size: "large",
                            children: [(0, F.jsxs)("div", {
                                className: "flex dl-justify-between dl-align-items-baseline dl-margin-t-48 dl-margin-b-32",
                                children: [(0, F.jsxs)(_.Z, {
                                    uiStyle: "title-xl-bold",
                                    children: [u.Z.t("patient_common.root.documents.title"), e > 0 && ` (${e})`]
                                }), !Oa && (0, F.jsx)(Aa, {})]
                            }), Oa && (0, F.jsxs)("div", {
                                className: "flex dl-justify-between dl-margin-t-48 dl-margin-b-32",
                                children: [(0, F.jsx)(Ra, {
                                    onTabChange: e => {
                                        t.tab ? o(`${i.pathname}?tab=${e.value}`) : l(e), (e => {
                                            e.value === Ki && m({
                                                name: "patient_diary_access_from_documents_section"
                                            })
                                        })(e)
                                    },
                                    tabs: La,
                                    activeTab: s
                                }), (0, F.jsx)(g, {
                                    onClick: () => {
                                        s.value === Ki && ((0, me.ZP)({
                                            name: "patient_diary_click_on_create_note",
                                            itemType: pe.i.PATIENT_DIARY_NOTE
                                        }, {
                                            schema: "patient"
                                        }), h())
                                    }
                                })]
                            }), (0, F.jsx)(x, {
                                showCreateNoteModal: c,
                                openModal: h,
                                closeModal: () => {
                                    d(!1)
                                }
                            })]
                        })
                    })
                },
                qa = () => (0, F.jsx)(M.L, {
                    children: (0, F.jsx)(O.Z, {
                        value: {
                            source: "documents_view"
                        },
                        children: (0, F.jsx)(Fa, {})
                    })
                });
            var za = n(179522),
                Ga = n(337209),
                Va = n(569100);
            const Ba = e => {
                let {
                    show: t,
                    onCloseModal: n
                } = e;
                const {
                    hasMapConsent: i,
                    onAcceptMapConsent: a,
                    onRevokeMapConsent: o
                } = (0, r.useContext)(Ga.ZP), [s, l] = (0, r.useState)(i);
                (0, r.useEffect)((() => {
                    l(i)
                }), [t, i]);
                return (0, F.jsxs)(Kt.Z, {
                    show: t,
                    size: (0, I.rl)() ? "fullscreen" : "small",
                    withCloseIcon: !0,
                    onHide: n,
                    children: [(0, F.jsx)(_.Z, {
                        align: "center",
                        uiStyle: "title-s-bold",
                        className: d()("mx-24", {
                            "dl-margin-b-16": (0, I.rl)()
                        }),
                        whiteSpace: !0,
                        children: u.Z.t("patient_common.root.unified_account.confidentiality_section.preferences.page.map_section.map_preferences_modal.title")
                    }), (0, I.rl)() && (0, F.jsx)(Re.Z, {
                        className: "map-consent-modal-divider"
                    }), (0, F.jsxs)(fa.Z, {
                        className: "dl-flex-column dl-margin-t-24",
                        children: [(0, F.jsx)("div", {
                            className: "dl-flex-center dl-full-width",
                            children: (0, F.jsx)(ve.Z, {
                                width: "120px",
                                src: Va,
                                alt: "",
                                className: "dl-align-self-center"
                            })
                        }), (0, F.jsxs)("div", {
                            className: " dl-text-left dl-margin-y-16",
                            children: [(0, F.jsxs)(_.Z, {
                                component: "span",
                                align: "left",
                                uiStyle: "body-s-regular",
                                children: [u.Z.t("legals.google_maps_consent"), " "]
                            }), (0, F.jsx)(ci.Z, {
                                href: u.Z.t("legals.google_maps_consent_learn_more_link"),
                                children: (0, F.jsx)(_.Z, {
                                    component: "span",
                                    align: "left",
                                    uiStyle: "body-s-regular",
                                    colorInherit: !0,
                                    children: u.Z.t("legals.google_maps_consent_learn_more")
                                })
                            })]
                        }), (0, F.jsx)(We.Z, {
                            containerClassName: "map-consent-selectable-cards",
                            horizontal: !1,
                            name: "consent_map_display",
                            options: [{
                                label: u.Z.t("patient_common.root.unified_account.confidentiality_section.preferences.page.map_section.map_preferences_modal.consent_to_display_map_html"),
                                value: !0
                            }, {
                                label: u.Z.t("patient_common.root.unified_account.confidentiality_section.preferences.page.map_section.map_preferences_modal.prevent_map_from_display_html"),
                                value: !1
                            }],
                            type: "radio",
                            value: s,
                            onSelect: e => l(e),
                            renderOption: e => (0, F.jsx)(_.Z, {
                                uiStyle: "body-s-regular",
                                children: e.label
                            })
                        })]
                    }), (0, F.jsx)(Za.Z, {
                        className: "dl-margin-t-16 map-consent-footer",
                        children: (0, F.jsx)(h.Z, {
                            onTap: () => {
                                i && !s ? o() : !i && s && a(), n()
                            },
                            uiStyle: "primary",
                            labelClassName: "dl-button-label dl-justify-center",
                            children: u.Z.t("common.actions.validate")
                        })
                    })]
                })
            };
            var Ha = n(446663),
                Ua = n(697286);
            const $a = e => {
                    let {
                        show: t,
                        onClose: n,
                        onSuccess: i
                    } = e;
                    const a = [{
                        label: u.Z.t("patient_common.root.patient_privacy_settings.patient_diary_permission_modal.patient_diary_enabled_html"),
                        value: ja.aA.ENABLED
                    }, {
                        label: u.Z.t("patient_common.root.patient_privacy_settings.patient_diary_permission_modal.patient_diary_disabled_html"),
                        value: ja.aA.DISABLED
                    }];
                    return (0, F.jsxs)(Ua.Z, {
                        settingName: ja.HX.PATIENT_DIARY_NOTES,
                        options: a,
                        show: t,
                        titleText: u.Z.t("patient_common.root.patient_privacy_settings.patient_diary_permission_modal.title"),
                        onHide: n,
                        onSuccess: i,
                        children: [(0, F.jsx)("div", {
                            className: "dl-text-center",
                            children: (0, F.jsx)(ve.Z, {
                                src: na,
                                height: 100,
                                className: "dl-margin-b-16",
                                alt: ""
                            })
                        }), (0, F.jsx)(_.Z, {
                            block: !0,
                            className: "dl-margin-b-16",
                            children: u.Z.t("patient_common.root.patient_privacy_settings.patient_diary_permission_modal.explanation_html")
                        }), (0, F.jsx)(_.Z, {
                            children: u.Z.t("patient_common.root.patient_privacy_settings.patient_diary_permission_modal.learn_more_html", {
                                url: p.ZP.PATIENT_LEGAL_INFO_LINKS.patient_diary_privacy_policy,
                                class: "dl-link dl-link-flat"
                            })
                        })]
                    })
                },
                Ya = e => {
                    let {
                        itemKey: t,
                        icon: n,
                        titleTranslationKey: i,
                        descriptionTranslationKey: a,
                        onTap: o,
                        dataTest: s
                    } = e;
                    return (0, F.jsxs)(za.Z, {
                        chevron: !0,
                        onTap: o,
                        "data-test": s,
                        children: [(0, F.jsx)(za.Z.Icon, {
                            name: n,
                            color: "primary-110",
                            size: "medium",
                            className: "dl-align-self-flex-start"
                        }), (0, F.jsxs)(za.Z.Content, {
                            children: [(0, F.jsx)(za.Z.Title, {
                                children: u.Z.t(i)
                            }), (0, F.jsx)(za.Z.Description, {
                                children: u.Z.t(a)
                            })]
                        })]
                    }, t)
                },
                Wa = () => {
                    const e = !!(0, He.ZP)(),
                        [t, n] = (0, r.useState)(!1),
                        [i, a] = (0, r.useState)(!1),
                        [o, s] = (0, r.useState)(!1);
                    return (0, F.jsxs)("div", {
                        "data-test": "privacy-settings",
                        children: [p.ZP.PAST_APPOINTMENTS_DISPLAY_OPT_IN_ENABLED && e && (0, F.jsx)(Ya, {
                            icon: "solid/calendar-days",
                            itemKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.past_appointments.title",
                            onTap: () => a(!0),
                            titleTranslationKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.past_appointments.title",
                            descriptionTranslationKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.past_appointments.description"
                        }), (0, F.jsx)(Ya, {
                            icon: "solid/location-dot",
                            itemKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.map_section.title",
                            onTap: () => n(!0),
                            titleTranslationKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.map_section.title",
                            descriptionTranslationKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.map_section.description",
                            dataTest: "map-consent-settings"
                        }), (0, F.jsx)(Ya, {
                            icon: "solid/lock",
                            itemKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.cookies.title",
                            onTap: () => window.Didomi.preferences.show(),
                            titleTranslationKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.cookies.title",
                            descriptionTranslationKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.cookies.description"
                        }), p.ZP.PATIENT_DIARY_ENABLED_FOR_COUNTRY && (0, F.jsx)(Ya, {
                            icon: "solid/calendar-days",
                            itemKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.patient_diary.title",
                            onTap: () => s(!0),
                            titleTranslationKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.patient_diary.title",
                            descriptionTranslationKey: "patient_common.root.unified_account.confidentiality_section.preferences.page.patient_diary.description"
                        }), (0, F.jsx)(Ba, {
                            show: t,
                            onCloseModal: () => n(!1)
                        }), p.ZP.PAST_APPOINTMENTS_DISPLAY_OPT_IN_ENABLED && e && (0, F.jsx)(Ha.Z, {
                            show: i,
                            onClose: () => a(!1),
                            onSuccess: () => a(!1),
                            source: "preferences"
                        }), p.ZP.PATIENT_DIARY_ENABLED_FOR_COUNTRY && e && (0, F.jsx)($a, {
                            show: o,
                            onClose: () => s(!1),
                            onSuccess: () => s(!1)
                        })]
                    })
                },
                Ka = () => {
                    const e = (0, a.useNavigate)();
                    return (0, F.jsx)("div", {
                        className: "dl-flex-grow dl-white-bg",
                        children: (0, F.jsxs)(Ue.Z, {
                            className: "dl-margin-t-48 dl-margin-b-32",
                            children: [(0, F.jsx)(h.Z, {
                                uiStyle: "small-neutral",
                                leftIcon: "angle-left",
                                onClick: () => e(-1),
                                children: u.Z.t("common.actions.back")
                            }), (0, F.jsx)(_.Z, {
                                className: "dl-margin-t-32 dl-margin-b-24",
                                uiStyle: "title-xl-bold",
                                children: u.Z.t("patient_common.root.unified_account.confidentiality_section.preferences.page.title")
                            }), (0, F.jsx)(Wa, {})]
                        })
                    })
                };
            var Xa = n(253565),
                Qa = n(835645);
            const Ja = p.ZP.PATIENT_LEGAL_INFO_LINKS,
                eo = [{
                    name: "terms_and_conditions",
                    i18nKey: "patient_common.root.legal_info.items.terms_and_conditions",
                    onClick: () => (0, Qa.Z)(Ja.terms_and_conditions)
                }, {
                    name: "conditions_of_use",
                    i18nKey: "patient_common.root.legal_info.items.conditions_of_use",
                    onClick: () => (0, Qa.Z)(Ja.conditions_of_use)
                }, {
                    name: "privacy_policy",
                    i18nKey: "patient_common.root.legal_info.items.privacy_policy",
                    onClick: () => (0, Qa.Z)(Ja.privacy_policy)
                }, {
                    name: "cookies_policy",
                    i18nKey: "patient_common.root.legal_info.items.cookies_policy",
                    onClick: () => (0, Qa.Z)(Ja.cookie_policy)
                }, {
                    name: "search_transparency",
                    i18nKey: "patient_common.root.legal_info.items.search_transparency",
                    onClick: () => (0, Qa.Z)(Ja.search_transparency)
                }, {
                    name: "impressum",
                    i18nKey: "patient_common.root.legal_info.items.impressum",
                    onClick: () => (0, Qa.Z)(Ja.legal_notice)
                }],
                to = () => {
                    const e = Xa.Z.config.legalInfo.items(),
                        t = eo.filter((t => e.includes(t.name)));
                    return (0, F.jsx)("div", {
                        "data-test": "legal-info",
                        children: t.map((e => {
                            let {
                                i18nKey: t,
                                onClick: n
                            } = e;
                            return (0, F.jsxs)(za.Z, {
                                onTap: n,
                                children: [(0, F.jsx)(za.Z.Content, {
                                    children: (0, F.jsx)(za.Z.Title, {
                                        children: u.Z.t(t)
                                    })
                                }), (0, F.jsx)(za.Z.Icon, {
                                    name: "up-right-from-square"
                                })]
                            }, t)
                        }))
                    })
                },
                no = () => {
                    const e = (0, a.useNavigate)();
                    return (0, F.jsx)("div", {
                        className: "dl-flex-grow dl-white-bg",
                        children: (0, F.jsxs)(Ue.Z, {
                            className: "dl-margin-t-48 dl-margin-b-32",
                            children: [(0, F.jsx)(h.Z, {
                                uiStyle: "small-neutral",
                                leftIcon: "angle-left",
                                onClick: () => e(-1),
                                children: u.Z.t("common.actions.back")
                            }), (0, F.jsx)(_.Z, {
                                className: "dl-margin-t-32 dl-margin-b-24",
                                uiStyle: "title-xl-bold",
                                children: u.Z.t("patient_common.root.legal_info.title")
                            }), (0, F.jsx)(to, {})]
                        })
                    })
                };
            var io = n(876616);
            const ao = n.p + "7692eb583d49fb95f1cc.png",
                oo = () => (0, F.jsx)(ia.Z, {
                    title: u.Z.t("patient_mobile.root.account.patient_requests.empty_state.logged.title"),
                    image: ao,
                    secondaryAction: {
                        text: u.Z.t("patient_mobile.root.account.patient_requests.empty_state.logged.button_text"),
                        href: Xa.Z.config.patientRequest.patientInformation()
                    },
                    children: (0, F.jsx)(_.Z, {
                        children: u.Z.t("patient_mobile.root.account.patient_requests.empty_state.logged.description")
                    })
                });
            var so = n(147841),
                lo = n(900144),
                ro = n(661288),
                co = n(451749);
            const mo = e => (0, ro.m)(e.last_activity_at),
                po = e => ((0, co.Af)(e) || (0, co.RD)(e)) && !e.viewed_by_patient_at,
                uo = e => e.messages.some((e => null === e || void 0 === e ? void 0 : e.from_doctor)) || e.reply_documents_count > 0,
                ho = e => (e => (0, co.Af)(e) && !uo(e))(e) ? u.Z.t("api.accounts.index.root.notifications_center.patient_requests.statuses.patient.closed") : u.Z.t(e.status, {
                    scope: "api.accounts.index.root.notifications_center.patient_requests.statuses.patient"
                });
            var _o = n(171685);
            const xo = e => {
                    let {
                        patientMessage: t
                    } = e;
                    const n = (0, lo.Z)(null === t || void 0 === t ? void 0 : t.body, (0, F.jsx)(ht.Z, {
                        size: "small"
                    }));
                    return (0, F.jsx)(_.Z, {
                        uiStyle: "body-s-regular",
                        className: "dl-list-item-info",
                        color: "neutral-110",
                        ellipsis: !0,
                        children: n
                    })
                },
                go = e => {
                    let {
                        show: t
                    } = e;
                    return t && (0, F.jsx)(fe.Z, {
                        className: "dl-margin-r-8"
                    })
                },
                vo = e => (0, co.Af)(e) ? uo(e) ? "replied" : _o.eJ.TREATED : _o.eJ.UNTREATED,
                fo = e => (0, co.RD)(e) ? {
                    label: ho(e),
                    color: "warning-020"
                } : (0, co.Bw)(e) ? {
                    label: ho(e),
                    color: "neutral-020"
                } : {
                    label: ho(e),
                    color: "success-020",
                    iconName: "solid/circle-check"
                },
                Zo = e => {
                    let {
                        request: t,
                        currentRequest: n,
                        onSelectRequest: i
                    } = e;
                    const a = t.messages.at(-1);
                    return (0, F.jsxs)(za.Z, {
                        className: d()("dl-padding-y-16", "dl-patient-request", t.id === (null === n || void 0 === n ? void 0 : n.id) ? "background-selected-item" : ""),
                        onTap: () => {
                            (0, me.ZP)({
                                name: "click_on_request_on_patient_side",
                                details: {
                                    request_id: t.id,
                                    request_status: vo(t)
                                }
                            }, {
                                schema: "patient"
                            }), i(t)
                        },
                        children: [(0, F.jsx)(za.Z.Avatar, {
                            className: "dl-align-self-start",
                            src: t.profile.avatar_url
                        }), (0, F.jsxs)(za.Z.Content, {
                            className: "dl-flex-grow",
                            children: [(0, F.jsxs)(za.Z.Description, {
                                className: "dl-flex-row",
                                children: [(0, F.jsxs)(za.Z.Title, {
                                    children: [(0, F.jsx)(go, {
                                        show: po(t)
                                    }), t.profile.full_name]
                                }), (0, F.jsx)(za.Z.Info, {
                                    className: "m-auto",
                                    children: mo(t)
                                })]
                            }), t.created_for_relative && (0, F.jsxs)(za.Z.Description, {
                                color: "neutral-090",
                                className: "flex items-center",
                                children: [(0, F.jsx)(he.Z, {
                                    name: "solid/user-group",
                                    className: "mr-8"
                                }), t.patient.name]
                            }), (0, F.jsx)(za.Z.Description, {
                                children: (0, F.jsx)(xo, {
                                    patientMessage: a
                                })
                            }), (0, F.jsx)(za.Z.Description, {
                                className: "dl-margin-t-4",
                                children: (0, F.jsx)(Oe.Z, {
                                    size: "small",
                                    ...fo(t)
                                })
                            })]
                        })]
                    }, t.id)
                },
                jo = e => {
                    let {
                        onSelectRequest: t
                    } = e;
                    const {
                        patientRequests: n,
                        currentRequest: i
                    } = (0, r.useContext)(io.Z);
                    return (0, r.useEffect)((() => {
                        n && (0, me.ZP)({
                            name: "patient_request_list_display",
                            details: {
                                patient_request_ids: n.map((e => e.id))
                            }
                        }, {
                            schema: "patient"
                        })
                    }), [n]), (0, F.jsx)("div", {
                        className: "dl-flex dl-flex-column dl-justify-start dl-text-left dl-full-height overflow-y-auto",
                        children: n.map((e => (0, F.jsx)(Zo, {
                            request: e,
                            currentRequest: i,
                            onSelectRequest: t
                        }, e.id)))
                    })
                },
                bo = () => {
                    const {
                        currentRequest: e
                    } = (0, r.useContext)(io.Z), t = (0, a.useNavigate)();
                    return (0, F.jsxs)("div", {
                        className: "dl-left-panel dl-border-r flex flex-col",
                        children: [(0, F.jsx)("header", {
                            className: "flex dl-justify-center dl-padding-y-24",
                            children: (0, F.jsx)(_.Z, {
                                uiStyle: "title-xl-bold",
                                className: "dl-padding-y-16",
                                children: u.Z.t("patient_request.root.request_view.title")
                            })
                        }), (0, F.jsx)(jo, {
                            onSelectRequest: n => {
                                (null === n || void 0 === n ? void 0 : n.id) !== (null === e || void 0 === e ? void 0 : e.id) && t(`/patient_requests/requests/${null===n||void 0===n?void 0:n.id}`)
                            }
                        })]
                    })
                },
                yo = (0, io.H)((() => {
                    var e;
                    const t = (0, a.useNavigate)(),
                        {
                            patientRequests: n,
                            setCurrentRequest: i,
                            currentRequest: o,
                            loading: s
                        } = (0, r.useContext)(io.Z),
                        l = null === (e = (0, a.useParams)()) || void 0 === e ? void 0 : e.id;
                    return (0, r.useEffect)((() => {
                        if (!n.length) return;
                        const e = n.find((e => e.id === l));
                        var a;
                        null !== e && void 0 !== e && e.id ? i(e) : t(`/patient_requests/requests/${null===(a=n[0])||void 0===a?void 0:a.id}`)
                    }), [l, n, i, t]), s ? (0, F.jsx)(ht.Z, {
                        className: "m-auto"
                    }) : null !== o && void 0 !== o && o.id ? (0, F.jsxs)("main", {
                        className: "flex dl-overflow-hidden dl-white-bg h-full",
                        children: [(0, F.jsx)(bo, {}), (0, F.jsx)(so.Z, {
                            request: o
                        })]
                    }) : (0, F.jsx)("div", {
                        className: "dl-margin-t-112",
                        children: (0, F.jsx)(oo, {})
                    })
                }));
            var No = n(158270),
                So = n(187563),
                wo = n(868591),
                ko = n(433307),
                To = n(139084),
                Co = n(253440),
                Eo = n(504848);
            const Po = () => (0, F.jsx)(_.Z, {
                    className: "dl-margin-t-24",
                    uiStyle: "body-s-regular",
                    color: "neutral-090",
                    component: "h4",
                    align: "center",
                    children: `v${window.platforms.reactNativeAppVersion}`
                }),
                Io = () => {
                    const [e, t] = (0, r.useState)(!0), [n, i] = (0, r.useState)(!1), [a, o] = (0, r.useState)(null), s = (0, He.ZP)(), {
                        isEligibleToLockMyApp: l,
                        getPinConfig: c,
                        getAvailableBiometric: d
                    } = (0, No.Z)(), {
                        fetchAccount: m,
                        loading: p
                    } = (0, He.dv)(), u = (0, r.useCallback)((async () => {
                        const e = await c(),
                            t = await d();
                        return {
                            authentication_code: e ? "activated" : "deactivated",
                            authentication_biometric: t ? "biometric" === e ? "activated" : "deactivated" : "unavailable",
                            biometric_type: t
                        }
                    }), []), {
                        data: h,
                        loadMasterPatients: _,
                        loading: x
                    } = (0, Z.Z)({
                        url: "/account/master_patients.json",
                        trigger: "loadMasterPatients"
                    });
                    return (0, r.useEffect)((() => {
                        s && _()
                    }), []), (0, r.useEffect)((() => {
                        if (!s) return;
                        m();
                        const e = e => {
                            var t, n;
                            const i = {
                                    account: s.main_master_patient_id ? "filled" : "not_filled",
                                    phone_number: s.phone_number ? s.verified_at ? "verified" : "unverified" : "unfilled",
                                    email: s.email ? s.email_verified_at ? "verified" : "unverified" : "unfilled",
                                    two_factor_eligible: s.email_verified_at && s.verified_at ? "activated" : "deactivated",
                                    document_e2eencryption: null !== (t = s.tanker_identity) && void 0 !== t && t.email_registered_at ? "activated" : "deactivated",
                                    payment_methods: (null === (n = s.credit_cards) || void 0 === n ? void 0 : n.length) > 0 ? "available" : "unavailable"
                                },
                                a = Object.assign(i, e);
                            o(a), (0, me.ZP)({
                                name: "account_page_displayed",
                                details: a
                            }, {
                                schema: "patient"
                            })
                        };
                        l() ? u().then((n => {
                            e(n), t(!1)
                        })) : (e(), t(!1))
                    }), []), (0, F.jsx)(F.Fragment, {
                        children: e || p || x ? (0, F.jsx)(ht.Z, {
                            className: "my-32"
                        }) : (0, F.jsxs)(F.Fragment, {
                            children: [(0, F.jsx)(wo.Z, {
                                trackingDetails: a,
                                masterPatients: h,
                                onCreateMainSuccess: _
                            }), (0, F.jsx)(ko.Z, {
                                account: s,
                                trackingDetails: a
                            }), (0, F.jsx)(To.Z, {
                                setShowE2EEModal: i,
                                account: s,
                                trackingDetails: a,
                                setTrackingDetails: o
                            }), (0, F.jsx)(Co.Z, {
                                trackingDetails: a
                            }), (0, I.rl)() && (0, F.jsx)(Eo.Z, {}), (0, I.b$)() && (0, F.jsx)(Po, {}), (0, F.jsx)(So.Z, {
                                show: n,
                                onHide: () => i(!1)
                            })]
                        })
                    })
                },
                Ao = () => (0, F.jsx)(g.Z, {
                    className: "commitments-banner dl-rounded-borders dl-padding-0 dl-margin-b-32",
                    children: (0, F.jsx)(Me.Z, {
                        contentClassName: "dl-sec-container",
                        children: (0, F.jsxs)("div", {
                            className: "dl-sec-content",
                            children: [(0, F.jsx)(_.Z, {
                                className: "dl-margin-b-8",
                                uiStyle: "title-l-bold",
                                component: "h4",
                                children: u.Z.t("static_pages.homepage.promote_security.title")
                            }), (0, F.jsx)(_.Z, {
                                color: "neutral-150",
                                className: "dl-margin-b-8",
                                uiStyle: "body-s-regular",
                                component: "div",
                                children: u.Z.t("static_pages.homepage.promote_security.text")
                            }), (0, F.jsx)(h.Z, {
                                className: "dl-margin-t-16",
                                target: "_blank",
                                href: u.Z.t("static_pages.homepage.promote_security.link_href"),
                                children: u.Z.t("static_pages.homepage.promote_security.button_text")
                            })]
                        })
                    })
                }),
                Do = () => (0, F.jsx)("div", {
                    className: "dl-flex-grow dl-white-bg",
                    children: (0, F.jsxs)(Ue.Z, {
                        className: "unified-account",
                        children: [(0, F.jsx)(_.Z, {
                            className: "dl-margin-t-48 dl-margin-b-32",
                            uiStyle: "title-xl-bold",
                            children: u.Z.t("patient_common.root.unified_account.title")
                        }), (0, F.jsx)(Ao, {}), (0, F.jsx)(Io, {})]
                    })
                });
            var Mo = n(957557),
                Ro = n.n(Mo),
                Oo = n(378994),
                Lo = n(478718),
                Fo = n.n(Lo),
                qo = n(60523),
                zo = n(53500),
                Go = n(539453);
            const Vo = e => {
                let {
                    onSuccess: t,
                    onFailure: n
                } = e;
                const [i, a] = (0, r.useState)(!1), [o, s] = (0, r.useState)(), {
                    data: l,
                    loading: c
                } = (0, Z.Z)({
                    url: "/account/master_patients.json"
                }), {
                    loading: d,
                    updateMainMasterPatient: m
                } = (0, Z.Z)({
                    url: "/main_master_patient.json",
                    method: "post",
                    trigger: "updateMainMasterPatient",
                    onSuccess: t,
                    onFailure: n
                }), x = () => s({
                    kind: "main",
                    main: !0
                }), v = () => s(void 0);
                if (c) return (0, F.jsx)(ht.Z, {
                    className: "dl-margin-16",
                    size: "large"
                });
                const f = l.filter((e => e && e.first_name)).map((e => ({ ...Fo()(e, ["id", "last_name", "first_name", "main", "kind", "gender", "birthdate", "is_complete", "has_own_email", "has_own_phone_number", "email", "phone_number", "maiden_name"]),
                    is_complete: !0
                })));
                return (0, F.jsxs)(F.Fragment, {
                    children: [(0, F.jsx)(Wt.Z, {
                        show: !!o,
                        relative: o,
                        onHide: v,
                        onSaved: () => {
                            t(), v()
                        }
                    }), f.length ? (0, F.jsxs)(g.Z, {
                        className: "dl-padding-0",
                        children: [(0, F.jsx)(_.Z, {
                            className: "dl-margin-8",
                            uiStyle: "title-s-bold",
                            children: u.Z.t("accounts.main_master_patient.title")
                        }), (0, F.jsx)(zo.Z, {
                            name: "masterPatientRadioGroup",
                            className: "dl-flex-column",
                            onChange: e => {
                                a(parseInt(e.target.value, 10))
                            },
                            children: f.filter((e => !(0, Go.t0)(e))).map((e => (0, F.jsx)(qo.Z, {
                                value: e.id,
                                masterPatient: e,
                                openMasterPatientForm: () => {},
                                checked: i === e.id
                            }, e.id)))
                        }), (0, F.jsx)("div", {
                            className: "dl-margin-l-8 dl-margin-t-16",
                            children: f.length <= p.ZP.MAX_NUMBER_OF_RELATIVES ? (0, F.jsx)(h.Z, {
                                uiStyle: "link-primary",
                                leftIcon: "user-plus",
                                onTap: x,
                                children: u.Z.t("patient_mobile.root.account.relatives.my_information.create_new_profile")
                            }) : (0, F.jsx)(_.Z, {
                                className: "dl-margin-y-16",
                                align: "center",
                                uiStyle: "body-s-regular",
                                color: "dark-orange",
                                children: u.Z.t("appointments.appointment_details.cannot_create_more_relatives", {
                                    max: p.ZP.MAX_NUMBER_OF_RELATIVES
                                })
                            })
                        }), (0, F.jsx)("div", {
                            className: "dl-master-patient-selector-footer dl-margin-t-16 dl-text-right",
                            children: (0, F.jsx)(h.Z, {
                                onTap: () => {
                                    m({
                                        main_master_patient_id: i
                                    })
                                },
                                disabled: !i || d,
                                children: u.Z.t("common.validate")
                            })
                        })]
                    }) : (0, F.jsx)("div", {
                        className: "dl-margin-16",
                        children: (0, F.jsx)(h.Z, {
                            onTap: x,
                            children: u.Z.t("patient_mobile.root.account.relatives.my_information.create_my_profile")
                        })
                    })]
                })
            };
            var Bo = n(785901);
            const Ho = Object.freeze(["first_name", "maiden_name", "city_of_birth_id", "country_of_birth_id", "birthdate"]),
                Uo = e => "string" === typeof e ? e.toLowerCase().replaceAll(/[ \-']/g, "") : e,
                $o = e => {
                    let {
                        data: t,
                        originalData: n
                    } = e;
                    const i = Ho.filter((e => n[e] && Uo(n[e]) !== Uo(t[e]))).length;
                    return {
                        master_patient_id: null === t || void 0 === t ? void 0 : t.id,
                        numberOfFieldsUpdated: i,
                        success: !0,
                        error_message: null
                    }
                },
                Yo = e => {
                    let {
                        data: t,
                        input: n
                    } = e;
                    return {
                        master_patient_id: null === n || void 0 === n ? void 0 : n.main_master_patient_id,
                        success: !1,
                        error_message: Object.values(t)
                    }
                },
                Wo = e => {
                    let {
                        onSave: t
                    } = e;
                    const [n, i] = (0, r.useState)(), [a, o] = (0, r.useState)(), {
                        data: s,
                        loading: l,
                        loadMainMasterPatient: c
                    } = (0, Z.Z)({
                        url: "/account/main_master_patient.json",
                        trigger: "loadMainMasterPatient",
                        onSuccess: e => {
                            let {
                                data: t
                            } = e;
                            return o(t)
                        }
                    });
                    if ((0, r.useEffect)((() => {
                            c()
                        }), []), l) return (0, F.jsx)(ht.Z, {
                        className: "dl-margin-16",
                        size: "large"
                    });
                    const d = (0, kt.A0)(s),
                        m = (0, kt.Tg)(s),
                        h = (0, p.JT)("legal_gender") ? (0, _n.rd)(s) : (0, _n.rd)(Ro()(s, "gender"));
                    return (0, F.jsx)(F.Fragment, {
                        children: s ? (0, F.jsxs)(F.Fragment, {
                            children: [(0, F.jsxs)(Bo.Z, {
                                masterPatient: s,
                                onClickEdit: () => i(s),
                                children: [(0, F.jsx)(_.Z, {
                                    block: !0,
                                    uiStyle: "title-s-bold",
                                    className: "dl-margin-y-16",
                                    children: h
                                }), (0, F.jsxs)(_.Z, {
                                    block: !0,
                                    children: [u.Z.t((0, Oo.Cr)(s.gender) ? "patient_mobile.root.account.relatives.my_information.date_of_birth_woman" : "patient_mobile.root.account.relatives.my_information.date_of_birth_man", {
                                        date: (0, kt.nw)(s)
                                    }), " ", (0, p.LA)("place_of_birth") && (d ? u.Z.t("patient_mobile.root.account.relatives.my_information.place_of_birth", {
                                        place: d
                                    }) : (0, F.jsx)(_.Z, {
                                        block: !0,
                                        color: "neutral-090",
                                        children: u.Z.t("patient_mobile.root.account.relatives.my_information.missing_place_of_birth")
                                    }))]
                                }), m ? (0, F.jsx)(_.Z, {
                                    block: !0,
                                    children: (0, kt.Tg)(s)
                                }) : (0, F.jsx)(_.Z, {
                                    block: !0,
                                    color: "neutral-090",
                                    children: u.Z.t("patient_mobile.root.account.relatives.my_information.missing_address")
                                })]
                            }), (0, F.jsx)(Wt.Z, {
                                show: !!n,
                                relative: n,
                                onHide: () => i(void 0),
                                onSaved: e => {
                                    (0, me.ZP)({
                                        name: "main_master_patient_modification_confirmed",
                                        details: $o({
                                            data: null === e || void 0 === e ? void 0 : e.data,
                                            originalData: a
                                        })
                                    }), t && t(), c()
                                },
                                onFailure: e => (0, me.ZP)({
                                    name: "main_master_patient_modification_confirmed",
                                    details: Yo(e)
                                })
                            })]
                        }) : (0, F.jsx)(Vo, {
                            onSuccess: e => {
                                var t;
                                (0, me.ZP)({
                                    name: "main_master_patient_selection_confirmed",
                                    details: (t = null === e || void 0 === e ? void 0 : e.data, {
                                        master_patient_id: null === t || void 0 === t ? void 0 : t.id,
                                        success: !0,
                                        error_message: null
                                    })
                                }), c()
                            },
                            onFailure: e => (0, me.ZP)({
                                name: "main_master_patient_selection_confirmed",
                                details: Yo(e)
                            })
                        })
                    })
                },
                Ko = n.p + "aade719300d3405d9735.png",
                Xo = () => (0, F.jsxs)("div", {
                    className: "dl-flex-center dl-flex-column dl-text-center",
                    children: [(0, F.jsx)("img", {
                        alt: "",
                        src: Ko,
                        width: "80px"
                    }), (0, F.jsx)(_.Z, {
                        uiStyle: "title-s-bold",
                        className: "dl-margin-y-16",
                        children: u.Z.t("patient_mobile.root.account.relatives.my_information.relatives_awareness.did_you_know")
                    }), (0, F.jsx)(_.Z, {
                        children: u.Z.t("patient_mobile.root.account.relatives.my_information.relatives_awareness.handle_relatives_information")
                    }), (0, F.jsx)(h.Z, {
                        to: "/account/relatives",
                        uiStyle: "link-primary",
                        className: "dl-margin-t-16",
                        children: u.Z.t("patient_mobile.root.account.relatives.my_information.relatives_awareness.manage_relatives")
                    })]
                }),
                Qo = () => (0, F.jsx)("div", {
                    className: "dl-flex-grow dl-white-bg",
                    children: (0, F.jsxs)(Ue.Z, {
                        className: "dl-margin-t-48",
                        children: [(0, F.jsx)(h.Z, {
                            to: "/account/edit",
                            uiStyle: "small-neutral",
                            leftIcon: "chevron-left",
                            children: u.Z.t("common.my_account")
                        }), (0, F.jsx)(_.Z, {
                            className: "dl-margin-t-24 dl-margin-b-32",
                            uiStyle: "title-xl-bold",
                            children: u.Z.t("common.my_profile")
                        }), (0, F.jsxs)("div", {
                            className: "flex dl-flex-start",
                            children: [(0, F.jsx)(g.Z, {
                                border: !0,
                                className: "dl-flex-grow dl-margin-r",
                                children: (0, F.jsx)(Wo, {})
                            }), (0, F.jsx)(g.Z, {
                                className: "dl-relatives-awareness-card dl-blue-lighter-bg",
                                children: (0, F.jsx)(Xo, {})
                            })]
                        })]
                    })
                }),
                Jo = n.p + "9bd9931527c51367f942.png";
            var es = n(353808),
                ts = n.n(es);
            const ns = e => {
                let {
                    bookingToken: t,
                    onCancel: n,
                    fromTextMessage: i
                } = e;
                const a = (0, Z.Z)({
                        url: `/appointments/anonymous/${t}/unsubscribe`,
                        trigger: "unsubscribe",
                        method: "POST"
                    }),
                    {
                        unsubscribe: o,
                        loading: s,
                        success: l
                    } = a;
                return (0, F.jsx)(F.Fragment, {
                    children: l ? (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(_.Z, {
                            align: "center",
                            children: (0, F.jsx)("img", {
                                src: Jo,
                                alt: ""
                            })
                        }), (0, F.jsx)(_.Z, {
                            uiStyle: "title-s-bold",
                            align: "center",
                            children: u.Z.t("appointments.anonymous_show.help.thanks")
                        }), (0, F.jsx)(_.Z, {
                            align: "center",
                            children: u.Z.t("appointments.anonymous_show.help.confirmation")
                        }), (0, F.jsx)(_.Z, {
                            uiStyle: "title-s-bold",
                            align: "center",
                            className: "dl-margin-t-16",
                            children: u.Z.t("appointments.anonymous_show.help.need_help")
                        }), (0, F.jsx)(_.Z, {
                            align: "center",
                            children: (0, F.jsx)(h.Z, {
                                onClick: () => {
                                    window.location.pathname = "/help?source=internal_link"
                                },
                                uiStyle: "info-link",
                                children: u.Z.t("appointments.anonymous_show.help.faq")
                            })
                        })]
                    }) : (0, F.jsxs)(g.Z, {
                        className: "dl-padding-0",
                        children: [(0, F.jsxs)(Me.Z, {
                            children: [(0, F.jsx)(_.Z, {
                                uiStyle: "title-s-bold",
                                children: u.Z.t("appointments.anonymous_show.help.explanation_title")
                            }), (0, F.jsx)("div", {
                                className: "dl-margin-t-16",
                                children: (0, F.jsx)(_.Z, {
                                    children: u.Z.t("appointments.anonymous_show.help.source_practitioner")
                                })
                            }), (0, F.jsx)("div", {
                                className: "dl-margin-t-16",
                                children: (0, F.jsx)(_.Z, {
                                    children: u.Z.t("appointments.anonymous_show.help.source_patient")
                                })
                            })]
                        }), i && (0, F.jsxs)(F.Fragment, {
                            children: [(0, F.jsx)(Re.Z, {}), (0, F.jsxs)(Me.Z, {
                                children: [(0, F.jsx)(_.Z, {
                                    uiStyle: "title-s-bold",
                                    className: "dl-margin-t-16",
                                    children: u.Z.t("appointments.anonymous_show.help.wrong_to")
                                }), (0, F.jsx)("div", {
                                    className: "dl-margin-t-16",
                                    children: (0, F.jsx)(_.Z, {
                                        children: u.Z.t("appointments.anonymous_show.help.confirm_phone")
                                    })
                                }), (0, F.jsx)(Ke.Z, {
                                    onSubmit: o,
                                    pure: !0,
                                    requiredIndicators: !1,
                                    horizontal: !1,
                                    className: "dl-full-width",
                                    children: e => (0, F.jsxs)(F.Fragment, {
                                        children: [(0, F.jsx)(et.Z, {
                                            label: null,
                                            field: "phone_number",
                                            type: "tel",
                                            required: !0,
                                            icon: (0, F.jsx)(ts(), {})
                                        }), (0, F.jsx)(h.Z, {
                                            type: "submit",
                                            block: !0,
                                            loadable: {
                                                loading: s
                                            },
                                            disabled: 0 === Object.keys(e.values).length || Boolean(e.errors),
                                            children: u.Z.t("common.validate")
                                        }), (0, F.jsx)(h.Z, {
                                            block: !0,
                                            uiStyle: "info-link",
                                            onTap: n,
                                            children: u.Z.t("common.actions.cancel")
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                })
            };
            var is = n(162622),
                as = n(420841),
                os = n(536442),
                ss = n(919469),
                ls = n(124854),
                rs = n(411422);
            const cs = {
                    phone_number: "00 00 00 00 00",
                    source: "doctor",
                    profile: {
                        name_with_title: "Dr Doctolib",
                        title: "Dr",
                        speciality: "Doctospecialist",
                        display_payment_means: !0,
                        payment_means: {
                            cash: "1",
                            check: "1",
                            credit_card: "1"
                        },
                        insurance_card: !0,
                        regulation_sector: "Doctoregulation",
                        third_party_payer: "national",
                        cloudinary_public_id: "default_doctor_avatar_m"
                    },
                    practice: {
                        address: "10 Doctolib Street ",
                        zipcode: "Doctozip",
                        city: "Doctocity",
                        formal_name: "Doctolib practice name"
                    },
                    patient: {
                        first_name: "Doctolib",
                        last_name: "Doctolib"
                    }
                },
                ds = e => {
                    let {
                        appointment: t = {},
                        className: n,
                        children: i,
                        showQuickPreview: a,
                        telehealth: o
                    } = e;
                    return (0, F.jsxs)(g.Z, {
                        className: d()("dl-anonymous-fake-appointment-card", n),
                        header: (0, F.jsx)(is.Z, {
                            telehealth: t.telehealth,
                            startDate: t.start_date
                        }),
                        children: [a && (0, F.jsxs)(F.Fragment, {
                            children: [t.profile && (0, F.jsx)(Me.Z, {
                                children: (0, F.jsx)(Le.Z, {
                                    compact: !0,
                                    doctor: t.profile
                                })
                            }), t.practice && !o && (0, F.jsxs)(F.Fragment, {
                                children: [(0, F.jsx)(Re.Z, {}), (0, F.jsx)(os.Z, {
                                    hideMap: !0,
                                    locationInformation: t.practice
                                })]
                            })]
                        }), (0, F.jsxs)("div", {
                            className: "dl-anonymous-fake-appointment-card-blurred-container",
                            children: [(0, F.jsxs)("div", {
                                className: "dl-anonymous-fake-appointment-card-blurred-content",
                                children: [!a && (0, F.jsx)(Me.Z, {
                                    children: (0, F.jsx)(Le.Z, {
                                        compact: !0,
                                        doctor: cs.profile
                                    })
                                }), (0, F.jsx)(ss.Z, {
                                    patient: cs.patient
                                }, "patient-section"), (0, F.jsx)(ls.Z, {
                                    phoneNumber: cs.phone_number
                                }, "phone-section"), !a && !o && (0, F.jsx)(os.Z, {
                                    hideMap: !0,
                                    locationInformation: cs.practice
                                }), (0, F.jsx)(rs.Z, {
                                    cash: !0,
                                    check: !0,
                                    creditCard: !0
                                }), (0, F.jsx)(as.Z, {
                                    paymentInfoEnabled: !0,
                                    insurance_card: cs.profile.insurance_card,
                                    regulation_sector: cs.profile.regulation_sector,
                                    third_party_payer: cs.profile.third_party_payer
                                })]
                            }), (0, F.jsx)("div", {
                                className: "dl-padding-x-16 dl-anonymous-fake-appointment-card-content",
                                children: (0, F.jsx)(g.Z, {
                                    border: !0,
                                    children: i
                                })
                            })]
                        })]
                    })
                },
                ms = e => {
                    let {
                        bookingToken: t,
                        onRequestHelp: n,
                        profile: i,
                        practice: a,
                        showQuickPreview: o,
                        startDate: s,
                        telehealth: l,
                        ...r
                    } = e;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [l && (0, F.jsx)("div", {
                            className: "dl-anonymous-fake-appointment-back-button-container",
                            children: (0, F.jsx)(h.Z, {
                                uiStyle: "link-primary",
                                leftIcon: "chevron-left",
                                className: "dl-margin-b-8",
                                onClick: () => {
                                    window.location.pathname = `/sessions/anonymous/${t}/telehealth`
                                },
                                children: u.Z.t("common.actions.back")
                            })
                        }), (0, F.jsx)(ds, {
                            showQuickPreview: o,
                            appointment: {
                                start_date: s,
                                profile: i,
                                practice: a
                            },
                            telehealth: l,
                            children: (0, F.jsx)(Ie, {
                                bookingToken: t,
                                className: "dl-padding-16",
                                profile: i,
                                telehealth: l,
                                startDate: s,
                                ...r
                            })
                        }), (0, F.jsx)(ci.Z, {
                            onTap: n,
                            flat: !0,
                            className: "dl-margin-y-8 flex dl-align-items-center",
                            children: (0, F.jsx)(_.Z, {
                                uiStyle: "body-s-bold",
                                color: "primary-110",
                                children: u.Z.t("appointments.anonymous_show.help.explanation_title")
                            })
                        })]
                    })
                },
                ps = (us = e => {
                    let {
                        profile: t,
                        practice: n,
                        showQuickPreview: i,
                        loading: o,
                        telehealth: s,
                        startDate: l,
                        displayBillingStep: c,
                        id: d,
                        cancelable: m,
                        needsPreparation: p,
                        organizationName: h
                    } = e;
                    const [_, x] = (0, r.useState)(!1), {
                        bookingToken: g,
                        appointmentAction: v
                    } = (0, a.useParams)(), {
                        search: f
                    } = (0, a.useLocation)();
                    if (o) return (0, F.jsx)(ht.Z, {});
                    const Z = (0, hn.e3)(f),
                        j = () => x(!1);
                    return (0, F.jsxs)(J, {
                        children: [(0, F.jsx)(T.Z, {
                            title: (0, F.jsx)(ye.Z, {})
                        }), (0, F.jsx)(Kt.Z, {
                            show: _,
                            onHide: j,
                            title: u.Z.t("appointments.anonymous_show.help.title"),
                            children: (0, F.jsx)(fa.Z, {
                                children: (0, F.jsx)(ns, {
                                    bookingToken: g,
                                    onCancel: j,
                                    fromTextMessage: "sms" === Z.utm_medium
                                })
                            })
                        }), (0, F.jsx)(Q.Z, {
                            className: "dl-margin-t-32 dl-flex-column dl-flex-center",
                            children: (0, F.jsx)(ms, {
                                appointmentAction: v,
                                appointmentId: d,
                                cancelable: m,
                                needsPreparation: p,
                                organizationName: h,
                                displayBillingStep: c,
                                bookingToken: g,
                                cardClassName: "dl-layout-size-xs dl-layout-spacing-xs-0 dl-layout-size-xs-12 dl-layout-size-sm dl-layout-size-sm-6",
                                onRequestHelp: () => x(!0),
                                profile: t,
                                practice: n,
                                showQuickPreview: i,
                                startDate: l,
                                telehealth: s
                            })
                        })]
                    })
                }, e => {
                    const {
                        bookingToken: t,
                        appointmentAction: n
                    } = (0, a.useParams)(), {
                        telehealth: i,
                        loading: o,
                        ...s
                    } = mi({
                        bookingToken: t,
                        sendAnalytics: !0
                    });
                    return i && !n ? (0, F.jsx)(a.Navigate, {
                        to: `/sessions/anonymous/${t}/telehealth`,
                        replace: !0
                    }) : (0, F.jsx)(us, { ...e,
                        loading: o,
                        telehealth: i,
                        ...s
                    })
                });
            var us, hs = n(114736);
            const _s = () => {
                var e, t, n, i;
                const {
                    data: a,
                    success: o
                } = (0, Z.Z)({
                    url: "/account/appointments.json"
                });
                return o && 0 === (null === (e = a.data) || void 0 === e || null === (t = e.confirmed) || void 0 === t ? void 0 : t.length) ? null : (0, F.jsx)("div", {
                    className: "row-center",
                    children: (0, F.jsxs)("div", {
                        className: "dl-upcoming-appointments dl-margin-t-48 dl-margin-b-24",
                        children: [(0, F.jsx)(_.Z, {
                            uiStyle: "title-xl-bold",
                            className: "dl-margin-b",
                            component: "h2",
                            children: u.Z.t("patient_common.root.upcoming_appointment")
                        }), (0, F.jsx)(Q.Z, {
                            container: !0,
                            xsSpacing: 10,
                            children: null === a || void 0 === a || null === (n = a.data) || void 0 === n || null === (i = n.confirmed) || void 0 === i ? void 0 : i.map((e => (0, F.jsx)(Q.Z, {
                                item: !0,
                                xsSize: 6,
                                smSize: 4,
                                children: (0, F.jsx)(C.Z, {
                                    className: "dl-margin-0",
                                    item: e,
                                    compact: !0,
                                    border: !0
                                }, e.id)
                            }, e.id)))
                        })]
                    })
                })
            };
            var xs = n(249361),
                gs = n.n(xs);
            const vs = e => {
                    let {
                        doctorName: t,
                        date: n,
                        notificationId: i
                    } = e;
                    const a = Date.now(),
                        [o, s] = (0, r.useState)(!0),
                        {
                            updateNotification: l
                        } = (0, Z.Z)({
                            method: "put",
                            trigger: "updateNotification",
                            url: `notifications/appointments/${i}`
                        }),
                        c = () => {
                            s(!1), (0, me.ZP)({
                                name: "click_on_no_show_patient_dialog",
                                details: {
                                    element: "no_show_dialog",
                                    action: "confirm",
                                    time_spent: Date.now() - a,
                                    notifications_appointment_id: i
                                }
                            }), l()
                        };
                    return (0, F.jsx)(Kt.Z, {
                        onHide: c,
                        show: o,
                        title: u.Z.t("static_pages.homepage.no_show_dialog.title"),
                        children: (0, F.jsxs)(fa.Z, {
                            className: "dl-margin-16 dl-flex-column dl-align-items-center",
                            children: [(0, F.jsx)(ve.Z, {
                                src: "/email_layout/practitioners_big.png",
                                className: "dl-no-show-dialog-doctors-svg",
                                alt: ""
                            }), (0, F.jsxs)("div", {
                                className: "flex dl-align-items-center",
                                children: [(0, F.jsx)(gs(), {
                                    className: "dl-no-show-dialog-exclamation-svg"
                                }), (0, F.jsx)(_.Z, {
                                    className: "dl-text-bold dl-margin-l-8 dl-text-16",
                                    children: u.Z.t("static_pages.homepage.no_show_dialog.subtitle")
                                })]
                            }), (0, F.jsx)(_.Z, {
                                className: "dl-margin-16",
                                children: u.Z.t("static_pages.homepage.no_show_dialog.body_html", {
                                    date: n,
                                    doctor_name: t
                                })
                            }), (0, F.jsx)(Za.Z, {
                                children: (0, F.jsx)(h.Z, {
                                    onClick: c,
                                    children: u.Z.t("common.got_it")
                                })
                            })]
                        })
                    })
                },
                fs = () => {
                    const {
                        data: e = []
                    } = (0, Z.Z)({
                        url: "notifications/appointments"
                    });
                    return e.map((e => (0, F.jsx)(vs, {
                        doctorName: e.doctor_name,
                        date: e.date,
                        notificationId: e.notification_id
                    }, e.notification_id)))
                };
            var Zs = n(126097),
                js = n(237863),
                bs = n(797984),
                ys = n(92970),
                Ns = n(527360),
                Ss = n.n(Ns);
            const ws = () => {
                    const e = (new Date).getMinutes();
                    return "production" !== (0, I.zj)() ? 0 : Math.floor(6 * e / 60)
                },
                ks = () => {
                    const e = (0, r.useMemo)(ws, []);
                    return (0, F.jsx)("div", {
                        className: "absolute left-0 top-0 right-0 bottom-0 overflow-hidden dl-hide-mobile",
                        children: (0, F.jsx)("div", {
                            className: d()("w-full h-full min-w-[1250px] bg-[length:679px_379px] bg-no-repeat bg-right-bottom", "dl-homepage-search-background", `dl-homepage-search-background-${e}`)
                        })
                    })
                };
            var Ts = n(829405);
            const Cs = e => {
                let {
                    children: t,
                    className: n
                } = e;
                const i = Boolean(Ss().get("temporary_appointment_id")),
                    {
                        hero: a,
                        isBackgroundHero: o
                    } = (0, Ts.g)(),
                    s = o ? {
                        backgroundImage: `linear-gradient(180deg, rgba(13, 35, 57, 0.8) 0%, rgba(13, 35, 57, 0) 9.33%), url("${null===a||void 0===a?void 0:a.image_url}")`
                    } : void 0;
                return (0, r.useEffect)((() => {
                    if (a)
                        if ((0, p.cr)("prevention_tracking")) {
                            const e = {
                                placement_id: a.id,
                                placement_name: a.name,
                                placement_slug: a.slug
                            };
                            (0, me.ZP)({
                                name: "hero_displayed_anonymous",
                                details: e
                            }, {
                                schema: "b2c_content_engagement",
                                includeUserIdentifiers: !1,
                                includeUserAgent: !1
                            })
                        } else(0, me.ZP)({
                            name: "patient_engagement_hero_displayed",
                            details: {
                                card_id: a.id,
                                card_name: a.name,
                                card_slug: a.slug
                            }
                        }, {
                            schema: "patient"
                        })
                }), [a]), (0, F.jsxs)("section", {
                    className: d()("dl-homepage-hero", "dl-blue-bg", {
                        "dl-homepage-brand-hero": o,
                        "dl-homepage-brand-hero--with-temporary-banner": i
                    }, n),
                    style: s,
                    children: [!a && (0, F.jsx)(ks, {}), t]
                })
            };
            var Es = n(988273);
            var Ps = n(573813);
            const Is = () => {
                    const {
                        imageUrl: e,
                        link: t,
                        linkTarget: n,
                        trackClick: i,
                        isBackgroundHero: a,
                        accessibilityLinkText: o
                    } = (() => {
                        const {
                            hero: e,
                            isBackgroundHero: t
                        } = (0, Ts.g)(), n = null === e || void 0 === e ? void 0 : e.url, i = null === e || void 0 === e ? void 0 : e.accessibility_link_text, a = (0, Ps.B)(null !== n && void 0 !== n ? n : "") ? "_blank" : "_self";
                        return {
                            imageUrl: null === e || void 0 === e ? void 0 : e.image_url,
                            link: n,
                            accessibilityLinkText: i,
                            linkTarget: a,
                            trackClick: () => {
                                if ((0, p.cr)("prevention_tracking")) {
                                    const t = {
                                        placement_id: null === e || void 0 === e ? void 0 : e.id,
                                        placement_name: null === e || void 0 === e ? void 0 : e.name,
                                        placement_slug: null === e || void 0 === e ? void 0 : e.slug
                                    };
                                    (0, me.ZP)({
                                        name: "hero_clicked_anonymous",
                                        details: t
                                    }, {
                                        schema: "b2c_content_engagement",
                                        includeUserIdentifiers: !1,
                                        includeUserAgent: !1
                                    })
                                } else(0, me.ZP)({
                                    name: "patient_engagement_hero_clicked",
                                    details: {
                                        card_id: null === e || void 0 === e ? void 0 : e.id,
                                        card_name: null === e || void 0 === e ? void 0 : e.name,
                                        card_slug: null === e || void 0 === e ? void 0 : e.slug
                                    }
                                }, {
                                    schema: "patient"
                                })
                            },
                            isBackgroundHero: t
                        }
                    })();
                    return a ? null : e ? t && n ? (0, F.jsx)("a", {
                        className: "dl-patient-engagement-hero-right-image",
                        href: t,
                        target: n,
                        onClick: i,
                        children: (0, F.jsx)(ve.Z, {
                            alt: null !== o && void 0 !== o ? o : "",
                            src: e,
                            className: "min-w-[412px] w-full h-full"
                        })
                    }) : (0, F.jsx)(ve.Z, {
                        alt: "",
                        src: e,
                        className: "dl-patient-engagement-hero-right-image min-w-[412px] w-full h-full"
                    }) : null
                },
                As = () => {
                    const e = (0, He.ZP)(),
                        t = Boolean(e);
                    return (0, F.jsx)("div", {
                        children: (0, F.jsxs)("div", {
                            className: d()(`home-${(0,I.rZ)()}`, {
                                "dl-white-bg dl-rounded-borders-s": t
                            }),
                            children: [(0, F.jsx)(Cs, {
                                className: "dl-homepage-search",
                                children: (0, F.jsxs)("div", {
                                    className: "search-zone relative flex h-full",
                                    children: [(0, F.jsxs)("div", {
                                        className: "search-zone-content",
                                        children: [(0, F.jsx)(Es.Z, {
                                            title: u.Z.t("patient_mobile.root.home.book_appointment_title")
                                        }), (0, F.jsx)(hs.default, {})]
                                    }), (0, F.jsx)(Is, {})]
                                })
                            }), (0, F.jsx)(bs.Z, {
                                target: ys.J.homepage,
                                className: "dl-patient-engagement-zone-homepage",
                                uiStyle: "white",
                                limit: 3,
                                loaderCount: 3
                            }), t ? (0, F.jsx)("div", {
                                className: "dl-hp-body-container",
                                children: (0, F.jsxs)("div", {
                                    className: "dl-hp-body-content",
                                    children: [(0, F.jsx)(_s, {}), (0, F.jsx)(Zs.Z, {
                                        showAppointmentCount: !1,
                                        title: (0, F.jsx)(_.Z, {
                                            uiStyle: "title-xl-bold",
                                            className: "dl-margin-b",
                                            component: "h2",
                                            children: u.Z.t("static_pages.homepage.profile_favorites")
                                        }),
                                        className: "my-32 row-center"
                                    }), (0, F.jsx)(fs, {})]
                                })
                            }) : null, (0, F.jsx)(js.Z, {})]
                        })
                    })
                };
            var Ds = n(890778),
                Ms = n(216852),
                Rs = n(137912);
            n(429011);
            const Os = e => {
                const {
                    children: t,
                    doctor: n,
                    doctorPosition: i,
                    uiStyle: a,
                    ...o
                } = e;
                return (0, F.jsx)("div", {
                    className: d()("dl-layout-header", {
                        "dl-layout-header-dark": "dark" === a
                    }),
                    ...o,
                    "data-design-system": "base",
                    children: (0, F.jsxs)("div", {
                        className: d()("dl-layout-header-wrapper", {
                            "dl-layout-header-wrapper-doctor": n,
                            [`dl-layout-header-wrapper-doctor-${i}`]: n
                        }),
                        children: [n && (0, F.jsx)("div", {
                            className: "dl-layout-header-doctor-image"
                        }), (0, F.jsx)("div", {
                            children: t
                        })]
                    })
                })
            };
            Os.defaultProps = {
                doctor: !1,
                doctorPosition: "left"
            };
            const Ls = Os;

            function Fs(e) {
                return `/account/appointments/details/${e.id}`
            }
            class qs extends r.PureComponent {
                constructor() {
                    var e, t, n;
                    super(...arguments), n = e => {
                        this.props.useHistory || (e.preventDefault(), window.open(Fs(this.props.data.appointment), "_self"))
                    }, (t = "handleClick") in (e = this) ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                }
                render() {
                    var e;
                    const {
                        data: t,
                        isProposalInThePast: n
                    } = this.props, i = u.Z.t("patient_common.root.appointment_proposals.show.expired.message_html", {
                        current_appointment_date: le()(t.appointment.start_date).format((0, Rs.T)("D MMM YYYY \xe0 HH:mm")),
                        canceled_appointment_date: le()(null === (e = t.proposal) || void 0 === e ? void 0 : e.start_date).format((0, Rs.T)("D MMM YYYY \xe0 HH:mm"))
                    });
                    return (0, F.jsxs)("div", {
                        children: [(0, F.jsx)(Ls, {
                            doctor: !0,
                            doctorPosition: "bottom",
                            children: (0, F.jsx)(_.Z, {
                                uiStyle: "title-l-bold",
                                className: "dl-margin-y-16",
                                children: u.Z.t("patient_common.root.appointment_proposals.show.expired.title")
                            })
                        }), (0, F.jsxs)(Ue.Z, {
                            center: !0,
                            children: [!n && (0, F.jsx)(_.Z, {
                                uiStyle: "body-s-regular",
                                children: i
                            }), (0, F.jsx)("div", {
                                className: "dl-margin-16",
                                children: (0, F.jsx)(h.Z, {
                                    uiStyle: "info-link",
                                    onClick: this.handleClick,
                                    to: Fs(t.appointment),
                                    children: u.Z.t("patient_common.root.appointment_proposals.show.expired.link")
                                })
                            })]
                        })]
                    })
                }
            }
            const zs = () => (0, F.jsx)(v.Z, {
                    uiStyle: "error",
                    label: u.Z.t("common.error"),
                    variant: "banner",
                    size: "small"
                }),
                Gs = (0, r.memo)(zs),
                Vs = e => {
                    let {
                        proposalToken: t,
                        useHistory: n
                    } = e;
                    const i = (0, a.useNavigate)(),
                        [o, s] = (0, r.useState)(!1),
                        [l, c] = (0, r.useState)(!1),
                        [m, p] = (0, r.useState)(!1),
                        [x, v] = (0, r.useState)(!1),
                        j = (0, I.rl)(),
                        b = e => {
                            let {
                                data: {
                                    appointment: {
                                        url: t
                                    },
                                    proposal: {
                                        status: a
                                    }
                                }
                            } = e;
                            "accepted" === a ? window.open(t, "_self") : "rejected" === a ? n ? i("/account/appointments") : window.open("/account/appointments", "_self") : "expired" === a && v(!0)
                        },
                        {
                            data: y,
                            loading: N,
                            success: S,
                            error: w
                        } = (0, Z.Z)({
                            url: `/ap/${t}.json`
                        }),
                        {
                            acceptProposal: k
                        } = (0, Z.Z)({
                            url: `/ap/${t}/accept.json`,
                            trigger: "acceptProposal",
                            method: "PUT",
                            onSuccess: b,
                            onFailure: () => p(!0)
                        }),
                        {
                            rejectProposal: T
                        } = (0, Z.Z)({
                            url: `/ap/${t}/reject.json`,
                            trigger: "rejectProposal",
                            method: "PUT",
                            onSuccess: b,
                            onFailure: () => p(!0)
                        });
                    if (N) return (0, F.jsx)(ht.Z, {});
                    if (w) return (0, F.jsx)("div", {
                        className: j ? "dl-white-bg" : void 0,
                        children: (0, F.jsx)(Gs, {})
                    });
                    if (y) {
                        if (!y.proposal) return (0, me.ZP)({
                            name: "proposals_undefined_bug_research",
                            details: {
                                proposal_token: t
                            }
                        }), (0, F.jsx)("div", {
                            className: j ? "dl-white-bg" : void 0,
                            children: (0, F.jsx)(Gs, {})
                        });
                        const e = le()(y.proposal.start_date).isBefore(le()());
                        if (x || e) return (0, F.jsx)(qs, {
                            data: y,
                            useHistory: n,
                            isProposalInThePast: e
                        });
                        var C, E, P, A;
                        if (S) return (0, F.jsxs)(f.Z, {
                            className: j ? "dl-white-bg" : void 0,
                            children: [m && (0, F.jsx)(Gs, {}), (0, F.jsx)(Ue.Z, {
                                margin: !j,
                                children: (0, F.jsxs)(g.Z, {
                                    className: "dl-md-margin-t-xxl",
                                    contentClassName: d()("dl-flex-column dl-justify-between", {
                                        "dl-appointments-proposals-choice-container": j
                                    }),
                                    children: [(0, F.jsxs)("div", {
                                        children: [(0, F.jsx)(_.Z, {
                                            uiStyle: "title-l-bold",
                                            className: "dl-appointments-proposals-choice-container-title",
                                            component: "p",
                                            children: u.Z.t("patient_common.root.appointment_proposals.show.container_title")
                                        }), (0, F.jsx)(_.Z, {
                                            uiStyle: "body-s-regular",
                                            className: "dl-appointments-proposals-choice-container-subtitle",
                                            component: "p",
                                            children: u.Z.t("patient_common.root.appointment_proposals.show.container_subtitle_html")
                                        }), (0, F.jsxs)("div", {
                                            className: "dl-appointments-proposals-choice-cards-container",
                                            children: [(0, F.jsx)(ze, {
                                                profile: y.profile,
                                                substitute: null === (C = y.appointment) || void 0 === C ? void 0 : C.substitute,
                                                substitutionWording: null === (E = y.appointment) || void 0 === E ? void 0 : E.substitution_wording,
                                                date: y.appointment.start_date,
                                                type: qe
                                            }), (0, F.jsx)("div", {
                                                className: "dl-flex-center",
                                                children: (0, F.jsx)(he.Z, {
                                                    name: j ? "solid/angle-double-down" : "solid/angle-double-right",
                                                    backgroundColor: "neutral-020",
                                                    size: "medium",
                                                    backgroundClassName: d()("dl-icon-background-large", {
                                                        "mx-32": !j
                                                    }),
                                                    color: "neutral-090"
                                                })
                                            }), (0, F.jsx)(ze, {
                                                profile: y.profile,
                                                substitute: null === (P = y.proposal) || void 0 === P ? void 0 : P.substitute,
                                                substitutionWording: null === (A = y.proposal) || void 0 === A ? void 0 : A.substitution_wording,
                                                date: y.proposal.start_date,
                                                type: Fe
                                            })]
                                        })]
                                    }), (0, F.jsxs)("div", {
                                        className: d()("dl-appointments-proposals-choice-buttons-container", {
                                            "dl-margin-16 dl-margin-t-32": !j
                                        }),
                                        children: [(0, F.jsx)(h.Z, {
                                            uiStyle: "info-link",
                                            onClick: () => c(!0),
                                            className: "dl-line-height-normal",
                                            children: u.Z.t("patient_common.root.appointment_proposals.show.reject_button")
                                        }), (0, F.jsx)(h.Z, {
                                            onClick: () => s(!0),
                                            className: "dl-line-height-normal",
                                            children: u.Z.t("patient_common.root.appointment_proposals.show.confirm_button")
                                        })]
                                    })]
                                })
                            }), (0, F.jsx)(on.Z, {
                                title: u.Z.t("common.confirmation"),
                                dismissText: u.Z.t("common.actions.cancel"),
                                onDismiss: () => s(!1),
                                acceptText: u.Z.t("common.actions.confirm"),
                                onAccept: () => {
                                    s(!1), k()
                                },
                                show: o,
                                children: u.Z.t("patient_common.root.appointment_proposals.show.accept_dialog_html", {
                                    appointment_date: le()(y.appointment.start_date).localize("dddd D MMMM \xe0 HH:mm"),
                                    proposal_date: le()(y.proposal.start_date).localize("dddd D MMMM \xe0 HH:mm"),
                                    doctor: y.profile.name_with_title
                                })
                            }), (0, F.jsx)(on.Z, {
                                title: u.Z.t("common.confirmation"),
                                dismissText: u.Z.t("common.actions.cancel"),
                                onDismiss: () => c(!1),
                                acceptText: u.Z.t("common.actions.confirm"),
                                onAccept: () => {
                                    c(!1), T()
                                },
                                show: l,
                                children: u.Z.t("patient_common.root.appointment_proposals.show.reject_dialog_html", {
                                    date: le()(y.appointment.start_date).localize("dddd D MMMM \xe0 HH:mm")
                                })
                            })]
                        })
                    }
                    return null
                },
                Bs = () => {
                    const {
                        proposalToken: e
                    } = (0, a.useParams)();
                    return (0, F.jsx)(Vs, {
                        proposalToken: e,
                        useHistory: !1
                    })
                };
            var Hs = n(100686),
                Us = n(296860),
                $s = n(897170),
                Ys = n.n($s),
                Ws = n(178714),
                Ks = n.n(Ws);
            n(701461);
            const Xs = e => {
                let {
                    arrow: t,
                    onTap: n,
                    children: i,
                    portal: a,
                    buttonProps: o,
                    position: s,
                    leftIcon: l
                } = e;
                const r = (0, F.jsx)($t.Z, {
                    component: "button",
                    className: d()("dl-floating-button-tappable", {
                        [`dl-floating-button-tappable-${s}`]: !0
                    }),
                    onTap: n,
                    ...o,
                    children: (0, F.jsxs)("div", {
                        className: "dl-floating-button-tappable-content",
                        children: [l ? (0, F.jsx)("div", {
                            className: "dl-floating-button-icon-left",
                            children: l
                        }) : null, (0, F.jsx)(_.Z, {
                            uiStyle: "body-s-regular",
                            children: i
                        }), t ? (0, F.jsx)(Ks(), {
                            className: "dl-floating-button-icon-right"
                        }) : null]
                    })
                });
                return (0, F.jsx)("div", {
                    className: "dl-floating-button",
                    children: a ? Ys().createPortal(r, document.body) : r
                })
            };
            Xs.defaultProps = {
                portal: !1,
                position: "bottom-center"
            };
            const Qs = Xs,
                Js = e => {
                    let {
                        appointment: t
                    } = e;
                    const [n, i] = (0, r.useState)(!1), {
                        destroy: a
                    } = (0, xe.Z)({
                        appointmentId: t.id
                    }), s = (0, Xt.ZP)(), c = (0, He.ZP)(), d = (0, l.ZP)(), m = () => i(!1);
                    return t.status_suspended ? null : (0, F.jsxs)("div", {
                        children: [(0, F.jsx)(Qs, {
                            onTap: () => {
                                o.Z.trackGtmEvent({
                                    category: p.ZP.GTM_CATEGORIES.APPOINTMENT_MOVE_NEW_SLOT_SELECTION,
                                    action: "noAvailabilityRight"
                                }), i(!0)
                            },
                            portal: !0,
                            children: u.Z.t("patient_common.root.appointments.details.no_availabilities")
                        }), (0, F.jsxs)(Kt.Z, {
                            onHide: m,
                            show: n,
                            children: [(0, F.jsx)(fa.Z, {
                                children: u.Z.t("patient_common.root.appointments_move.abort_html")
                            }), (0, F.jsxs)(Za.Z, {
                                children: [(0, F.jsx)(h.Z, {
                                    onTap: () => {
                                        window.confirm(u.Z.t("patient_common.root.appointments.details.confirm_cancel_appointment")) && (m(), a())
                                    },
                                    uiStyle: "danger",
                                    children: u.Z.t("patient_common.root.appointments_move.cancel")
                                }), (0, F.jsx)(h.Z, {
                                    onTap: () => {
                                        m(), (() => {
                                            s({
                                                message: u.Z.t("patient_common.root.appointments_move.cancel_success"),
                                                uiStyle: "success"
                                            });
                                            const e = c ? `/account/appointments/details/${t.id}` : "/appointments/anonymous/list";
                                            d.dismiss(e)
                                        })()
                                    },
                                    children: u.Z.t("common.actions.keep")
                                })]
                            })]
                        })]
                    })
                },
                el = e => (0, F.jsx)(h.Z, {
                    type: "submit",
                    block: !0,
                    ...e,
                    children: u.Z.t("patient_common.root.appointments.details.submit")
                });
            var tl = n(47871),
                nl = n(324641),
                il = n(578221);
            const al = e => {
                let {
                    id: t,
                    onFailure: n = (() => {})
                } = e;
                const i = (0, Xt.ZP)(),
                    a = (0, l.ZP)(),
                    {
                        loading: o,
                        moveAppointment: s
                    } = (0, Z.Z)({
                        method: "post",
                        trigger: "moveAppointment",
                        url: `/appointments/${t}/move.json`,
                        onSuccess: e => {
                            let {
                                data: {
                                    meta: t,
                                    redirection: o,
                                    errors: s,
                                    success: l
                                }
                            } = e;
                            l ? t.logged_in && (0, I.rl)() ? ((0, I.b$)() && (0, tt.vG)("3.3.6") && nt.ZP.call({
                                method: nt.vN,
                                params: ["notificationSuccess"]
                            }), i({
                                message: u.Z.t("patient_common.root.appointments_move.move_success"),
                                uiStyle: "success"
                            }), a.show(o)) : window.location = o : n(s)
                        },
                        onFailure: e => {
                            let {
                                data: t
                            } = e;
                            i({
                                uiStyle: "error",
                                message: (null === t || void 0 === t ? void 0 : t.error) || u.Z.t("common.error")
                            }), n([])
                        }
                    });
                return {
                    loading: o,
                    moveAppointment: s
                }
            };
            var ol = n(518634),
                sl = n(793345);
            const ll = e => {
                    let {
                        substitution: t
                    } = e;
                    return t && 0 !== Object.keys(t).length ? (0, F.jsxs)("div", {
                        className: "appointments-move-availabilities-substitution",
                        children: [(0, F.jsx)(Re.Z, {}), (0, F.jsx)(sl.Z, {
                            substitutions: t,
                            className: "appointments-move-availabilities-substitution-content"
                        })]
                    }) : null
                },
                rl = e => {
                    let {
                        appointmentMoveData: {
                            appointment: t,
                            agenda: n,
                            first_appointment: i,
                            second_appointment_agenda_id: a
                        }
                    } = e;
                    const [s, l] = (0, r.useState)(!1), [c, d] = (0, r.useState)({
                        firstSlot: void 0,
                        secondSlot: void 0,
                        onSecondSlotStep: !1
                    }), [m, h] = (0, r.useState)(null), [x, v] = (0, r.useState)(t.custom_fields_values), [f, j] = (0, r.useState)(t.qualification_fields), [b, y] = (0, r.useState)(null), [N, S] = (0, r.useState)([]), w = t.covid_first_vaccination, {
                        data: {
                            eligible_for_conversion: k,
                            rules: T
                        } = {}
                    } = (0, Z.Z)({
                        url: `/appointments/${t.id}/telehealth_conversion/new`
                    }), C = (0, Us.l)(t.booking_fields, t.speciality_id, t.ref_visit_motive_id), E = (0, Xt.ZP)(), {
                        loading: P,
                        moveAppointment: I
                    } = al({
                        id: t.id,
                        onFailure: e => {
                            e.forEach((e => {
                                E({
                                    message: (0, F.jsx)(_.Z, {
                                        dangerouslySetInnerHTML: {
                                            __html: e
                                        }
                                    }),
                                    uiStyle: "error"
                                })
                            })), w && d({
                                onSecondSlotStep: !1,
                                firstSlot: void 0,
                                secondSlot: void 0
                            })
                        }
                    }), A = null !== m && (C.length > 0 || t.qualification_fields.length > 0), D = t.covid_second_vaccination ? le()(i.start_date).add(t.vaccination_days_range, "day").format("YYYY-MM-DD") : t.covid_first_vaccination && c.onSecondSlotStep ? le()(c.start_date).add(t.vaccination_days_range, "day").format("YYYY-MM-DD") : le()().format("YYYY-MM-DD"), M = t.covid_second_vaccination ? i.visit_motive_id : t.visit_motive_id, R = Array.from(new Set([t.agenda_id, a].filter(Boolean))), O = {
                        motiveKey: t.visit_motive_id,
                        visitMotiveIds: [M],
                        motiveType: "visit_motive",
                        agendaIds: R,
                        practiceIds: [n.practice_id],
                        bookingDisabled: n.booking_disabled,
                        bookingTemporaryDisabled: n.booking_temporary_disabled,
                        landlineNumber: n.landline_number,
                        insuranceSector: t.insurance_sector,
                        date: D,
                        slot: c.firstSlot || i.start_date
                    };
                    return (t.two_shot_vaccination_appointment && !t.covid_first_vaccination || c.onSecondSlotStep) && (O.secondSlotAvailability = !0), (0, F.jsxs)("div", {
                        children: [(0, F.jsx)(tl.Z, {
                            show: s,
                            closeModal: () => l(!1),
                            appointmentId: t.id,
                            rules: T
                        }), (0, F.jsxs)(Ue.Z, {
                            children: [(0, F.jsx)(_.Z, {
                                uiStyle: "title-l-bold",
                                className: "dl-margin-y-16",
                                children: w ? c.onSecondSlotStep ? u.Z.t("common.mobile.availabilities.subtitle_second_shot") : u.Z.t("common.mobile.availabilities.subtitle_first_shot") : u.Z.t("patient_common.root.appointments_move.title")
                            }), (0, F.jsx)(_.Z, {
                                uiStyle: "body-s-bold",
                                className: "dl-margin-y-16",
                                children: u.Z.t("patient_common.root.appointments_move.subtitle")
                            }), w && c.onSecondSlotStep && (0, F.jsx)(_.Z, {
                                className: "dl-margin-y-16",
                                children: u.Z.t("common.mobile.availabilities.second_shot_information", {
                                    days: t.vaccination_days_range
                                })
                            }), k && (0, F.jsxs)(g.Z, {
                                className: "dl-margin-b",
                                children: [(0, F.jsx)(Le.Z, {
                                    className: "dl-margin-b",
                                    doctor: t.profile,
                                    compact: !0,
                                    appointmentStartDate: t.start_date
                                }), (0, F.jsx)(nl.Z, {
                                    source: "appointment_move",
                                    appointmentId: t.id,
                                    openConversionModal: () => l(!0)
                                })]
                            }), (0, F.jsx)(il.Z, {
                                data: O,
                                selectedSlot: c.onSecondSlotStep ? c.secondSlot : m,
                                onSubstitutionsChange: y,
                                onAppointmentRequestSlotsChange: S,
                                onSlotSelect: (e, n) => {
                                    let {
                                        agenda_id: i
                                    } = n;
                                    o.Z.trackGtmEvent({
                                        category: p.ZP.GTM_CATEGORIES.APPOINTMENT_MOVE_NEW_SLOT_SELECTION,
                                        action: "chooseNewSlot"
                                    }), h(e);
                                    const a = t.qualification_fields;
                                    if (w && (c.onSecondSlotStep ? d({ ...c,
                                            secondSlot: e
                                        }) : d({ ...c,
                                            firstSlot: e,
                                            onSecondSlotStep: !0
                                        })), 0 === C.length && 0 === a.length) {
                                        const t = {
                                            custom_fields_values: x,
                                            qualification_answers: { ...f.reduce(((e, t) => {
                                                    let {
                                                        id: n,
                                                        value: i
                                                    } = t;
                                                    return { ...e,
                                                        [n]: i
                                                    }
                                                }), {})
                                            }
                                        };
                                        if (w) c.onSecondSlotStep && I({ ...t,
                                            start_date: c.firstSlot,
                                            second_slot: e
                                        });
                                        else {
                                            if (w && !c.onSecondSlotStep) return;
                                            I({ ...t,
                                                start_date: e,
                                                agenda_id: i
                                            })
                                        }
                                    }
                                },
                                showLoaderOnSelected: P,
                                minDate: D,
                                vaccinationAppointment: t.two_shot_vaccination_appointment
                            }, c.onSecondSlotStep ? "second_shot_availabilities" : "availabilities"), (0, F.jsx)(ll, {
                                substitution: b
                            }), (0, F.jsx)(ol.Z, {
                                appointmentRequestSlots: N
                            }), (0, F.jsx)("form", {
                                onSubmit: e => {
                                    const t = {
                                        custom_fields_values: x,
                                        qualification_answers: { ...f.reduce(((e, t) => {
                                                let {
                                                    id: n,
                                                    value: i
                                                } = t;
                                                return { ...e,
                                                    [n]: i
                                                }
                                            }), {})
                                        }
                                    };
                                    e.preventDefault(), w ? c.onSecondSlotStep && I({ ...t,
                                        start_date: c.firstSlot,
                                        second_slot: c.secondSlot
                                    }) : I({ ...t,
                                        start_date: m
                                    })
                                },
                                children: A ? (0, F.jsxs)("div", {
                                    children: [(0, F.jsx)(Hs.Z, {
                                        size: "large"
                                    }), (0, F.jsx)(Re.Z, {}), (0, F.jsx)(Hs.Z, {
                                        size: "large"
                                    }), (0, F.jsx)(_.Z, {
                                        uiStyle: "body-s-bold",
                                        children: u.Z.t("patient_common.root.appointments.details.booking_fields_label")
                                    }), (0, F.jsx)(Hs.Z, {}), (0, F.jsx)(Us.Z, {
                                        bookingFields: C,
                                        specialityId: t.speciality_id,
                                        qualificationAnswers: f,
                                        customFieldsValues: x,
                                        setCustomFieldsValues: v,
                                        setQualificationAnswers: j
                                    }), (0, F.jsx)(Hs.Z, {
                                        size: "large"
                                    }), (0, F.jsx)(el, {
                                        disabled: P
                                    })]
                                }) : null
                            })]
                        }), (0, F.jsx)(Js, {
                            pathBase: `/appointments/${t.id}/move/new`,
                            appointment: t
                        })]
                    })
                },
                cl = () => (0, F.jsx)(rl, {
                    appointmentMoveData: window.appointmentMove.data
                });
            var dl = n(980636);
            const ml = () => (0, F.jsx)(Ue.Z, {
                size: "small",
                children: (0, F.jsx)(dl.default, {
                    defaultForm: dl.LOGIN_FORM
                })
            });
            var pl = n(453605),
                ul = n(732930);
            const hl = () => ((0, r.useEffect)((() => {
                window.directoryModifications && (document.title = window.directoryModifications.data.name_with_title)
            }), []), p.ZP.SHOW_FREEMIUM_PRODUCTS ? (0, F.jsx)(ul.Z, {
                directoryModifications: window.directoryModifications
            }) : (0, F.jsx)(pl.Z, {
                directoryModifications: window.directoryModifications,
                showTitle: !0
            }));
            var _l = n(559997),
                xl = n.n(_l);
            const gl = n.p + "b88ee670b10041807faa.png";
            var vl = n(822659),
                fl = n.n(vl),
                Zl = n(654081),
                jl = n.n(Zl),
                bl = n(231147),
                yl = n.n(bl);
            const Nl = e => {
                    let {
                        directoryDoctorId: t
                    } = e;
                    const {
                        data: n = {},
                        loading: i
                    } = (0, Z.Z)({
                        url: `/profiles/${t}.json`
                    }), a = (0, r.useCallback)((() => {
                        if (i) return null;
                        const {
                            data: {
                                profile: e
                            },
                            jsonld: t
                        } = n, a = `https://${p.ZP.WWW_SUBDOMAIN}.doctolib.${window.country}${t.profile.url}`, o = Object.entries({
                            origin: "directory-doctor-website-desktop",
                            speciality_id: e.speciality_id,
                            utm_button: "body",
                            "utm_content-group": "directory_page",
                            "utm_page-url": encodeURIComponent(a),
                            utm_website: "doctolib_patients",
                            zipcode: e.zip_code,
                            utm_step: "ty"
                        }).map((e => {
                            let [t, n] = e;
                            return `${t}=${n}`
                        })).join("&");
                        return `https://${p.ZP.INFO_SUBDOMAIN}.doctolib.${window.country}/?${o}`
                    }), [i, n]);
                    return (0, F.jsxs)("div", {
                        children: [(0, F.jsx)(_.Z, {
                            uiStyle: "DEPRECATED-title-sub-bold-smaller",
                            color: "neutral-090",
                            className: "dl-margin-y-16",
                            children: u.Z.t("patient_common.root.directory_modifications.confirm.doctor.advertise_question")
                        }), (0, F.jsx)(_.Z, {
                            uiStyle: "title-s-bold",
                            className: "dl-margin-y-16",
                            children: u.Z.t("patient_common.root.directory_modifications.confirm.doctor.advertise_content")
                        }), (0, F.jsxs)("div", {
                            className: "dl-margin-t-32",
                            children: [(0, F.jsxs)(_.Z, {
                                uiStyle: "body-s-regular",
                                component: "p",
                                color: "neutral-090",
                                className: "dl-margin-y-16 flex dl-align-items-center",
                                children: [(0, F.jsx)(fl(), {
                                    className: "primary-color"
                                }), (0, F.jsx)("span", {
                                    className: "dl-padding-l-8",
                                    children: u.Z.t("patient_common.root.directory_modifications.confirm.doctor.proposition_value_one")
                                })]
                            }), (0, F.jsxs)(_.Z, {
                                uiStyle: "body-s-regular",
                                component: "p",
                                color: "neutral-090",
                                className: "dl-margin-y-16 flex dl-align-items-center",
                                children: [(0, F.jsx)(jl(), {
                                    className: "primary-color"
                                }), (0, F.jsx)("span", {
                                    className: "dl-padding-l-8",
                                    children: u.Z.t("patient_common.root.directory_modifications.confirm.doctor.proposition_value_two")
                                })]
                            }), (0, F.jsxs)(_.Z, {
                                uiStyle: "body-s-regular",
                                component: "p",
                                color: "neutral-090",
                                className: "dl-margin-y-16 flex dl-align-items-center",
                                children: [(0, F.jsx)(yl(), {
                                    className: "primary-color"
                                }), (0, F.jsx)("span", {
                                    className: "dl-padding-l-8",
                                    children: u.Z.t("patient_common.root.directory_modifications.confirm.doctor.proposition_value_three")
                                })]
                            })]
                        }), !i && (0, F.jsx)(ci.Z, {
                            onClick: e => {
                                e.preventDefault(), i || window.open(a(), "_self")
                            },
                            href: a(),
                            children: (0, F.jsx)(h.Z, {
                                className: "directory-modifications-doctor-button",
                                children: u.Z.t("patient_common.root.directory_modifications.confirm.doctor.call_to_action")
                            })
                        })]
                    })
                },
                Sl = e => {
                    let {
                        useHistory: t
                    } = e;
                    return (0, F.jsxs)("div", {
                        children: [(0, F.jsx)(_.Z, {
                            uiStyle: "title-s-bold",
                            className: "dl-margin-y-16",
                            children: u.Z.t("patient_common.root.directory_modifications.confirm.patient.advertise")
                        }), (0, F.jsxs)("div", {
                            className: "dl-margin-t-32",
                            children: [(0, F.jsxs)(_.Z, {
                                uiStyle: "body-s-regular",
                                component: "p",
                                color: "neutral-090",
                                className: "dl-margin-y-16 flex dl-align-items-center",
                                children: [(0, F.jsx)(fe.Z, {
                                    uiStyle: "dark-info",
                                    children: "1"
                                }), (0, F.jsx)("span", {
                                    className: "dl-padding-l-8",
                                    children: u.Z.t("patient_common.root.directory_modifications.confirm.patient.feature_find")
                                })]
                            }), (0, F.jsxs)(_.Z, {
                                uiStyle: "body-s-regular",
                                component: "p",
                                color: "neutral-090",
                                className: "dl-margin-y-16 flex dl-align-items-center",
                                children: [(0, F.jsx)(fe.Z, {
                                    uiStyle: "dark-info",
                                    children: "2"
                                }), (0, F.jsx)("span", {
                                    className: "dl-padding-l-8",
                                    children: u.Z.t("patient_common.root.directory_modifications.confirm.patient.feature_choose")
                                })]
                            }), (0, F.jsxs)(_.Z, {
                                uiStyle: "body-s-regular",
                                component: "p",
                                color: "neutral-090",
                                className: "dl-margin-y-16 flex dl-align-items-center",
                                children: [(0, F.jsx)(fe.Z, {
                                    uiStyle: "dark-info",
                                    children: "3"
                                }), (0, F.jsx)("span", {
                                    className: "dl-padding-l-8",
                                    children: u.Z.t("patient_common.root.directory_modifications.confirm.patient.feature_confirm")
                                })]
                            })]
                        }), (0, F.jsx)(ci.Z, {
                            onClick: e => {
                                t || (e.preventDefault(), window.open("/", "_self"))
                            },
                            href: "/",
                            children: (0, F.jsx)(h.Z, {
                                className: "directory-modifications-doctor-button",
                                children: u.Z.t("patient_common.root.directory_modifications.confirm.patient.discover")
                            })
                        })]
                    })
                },
                wl = e => {
                    let {
                        showTitle: t,
                        useHistory: n
                    } = e;
                    const i = (0, a.useLocation)(),
                        {
                            claims_ownership: s,
                            directory_doctor_id: l,
                            lead_id: c
                        } = (0, hn.e3)(i.search);
                    return (0, r.useEffect)((() => {
                        o.Z.pushToCustomDataLayer({
                            directory_id: parseInt(l, 10)
                        }), o.Z.sendGtmPageView(p.ZP.GTM_CONTENT_GROUPS.DIRECTORY_MODIFICATIONS_CONFIRMATION), c && o.Z.trackGtmEvent({
                            category: p.ZP.GTM_CATEGORIES.DIRECTORY_MODIFICATIONS_CONFIRMATION,
                            action: "leadGenerated",
                            label: `${c}`
                        })
                    }), []), (0, F.jsx)("div", {
                        children: (0, F.jsxs)(Ue.Z, {
                            children: [(0, F.jsxs)("div", {
                                className: "directory-modifications-heading",
                                children: [t && (0, F.jsxs)(_.Z, {
                                    uiStyle: "title-s-bold",
                                    className: "dl-margin-y-16 flex dl-align-items-center",
                                    children: [(0, F.jsx)(xl(), {}), (0, F.jsx)("span", {
                                        className: "dl-padding-l-16",
                                        children: u.Z.t("patient_common.root.directory_modifications.confirm.header_title")
                                    })]
                                }), (0, F.jsx)(_.Z, {
                                    uiStyle: "body-s-regular",
                                    children: "true" === s ? u.Z.t("patient_common.root.directory_modifications.confirm.header_description_for_doctors") : u.Z.t("patient_common.root.directory_modifications.confirm.header_description")
                                })]
                            }), (0, F.jsx)(g.Z, {
                                className: "directory-modifications-card-main horizontal",
                                children: (0, F.jsxs)("div", {
                                    className: "flex dl-justify-between",
                                    children: [(0, F.jsx)("div", {
                                        className: "left-pannel",
                                        children: "true" === s ? (0, F.jsx)(Nl, {
                                            directoryDoctorId: parseInt(l, 10)
                                        }) : (0, F.jsx)(Sl, {
                                            useHistory: n
                                        })
                                    }), (0, F.jsx)("div", {
                                        className: "clipzone",
                                        children: (0, F.jsx)(ve.Z, {
                                            className: "directory-modifications-picture",
                                            component: "img",
                                            src: gl
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                kl = () => (0, F.jsx)(wl, {
                    showTitle: !0,
                    useHistory: !1
                });
            var Tl = n(191327);
            const Cl = n.p + "137dc9e549b684f0fbf0.png";
            var El = n(261089),
                Pl = n(320002);
            const Il = e => {
                    let {
                        appointment: t
                    } = e;
                    if (!(0, p.cr)("data_retention_disclaimers_patient_appointment_expiration")) return null;
                    if (!t || !t.start_date || !t.data_retention_limit || !t.data_retention_active) return null;
                    const n = le()(t.start_date).add(t.data_retention_limit, "year").format("DD.MM.YY");
                    return (0, F.jsx)(_.Z, {
                        children: u.Z.t("data_retention.disclaimers.patient_appointment_expiration.post_launch_text_html", {
                            expiration_date: n,
                            retention_period: t.data_retention_limit
                        })
                    })
                },
                Al = () => (0, p.cr)("data_retention_disclaimers_patient_appointment_history_sidebar_desktop") ? (0, F.jsx)("span", {
                    className: "dl-card-bg-transparent dl-padding-0",
                    children: (0, F.jsx)(g.Z, {
                        children: (0, F.jsx)(Me.Z, {
                            children: (0, F.jsx)(_.Z, {
                                color: "neutral-090",
                                className: "dl-margin-t-16",
                                uiStyle: "body-xs-bold",
                                children: u.Z.t("data_retention.disclaimers.patient_appointment_history_sidebar_desktop.default_text_html")
                            })
                        })
                    })
                }) : null,
                Dl = e => {
                    let {
                        appointments: t,
                        title: n,
                        onChange: i,
                        value: a,
                        past: o
                    } = e;
                    return void 0 === t ? null : (0, F.jsxs)(F.Fragment, {
                        children: [t.length ? (0, F.jsx)(oa.Z, {
                            uiStyle: "large",
                            children: u.Z.t(n, {
                                count: t.length
                            })
                        }) : null, t.map((e => (0, F.jsx)(C.Z, {
                            compact: !0,
                            past: o,
                            item: e,
                            onTap: () => i(e),
                            selected: Boolean((0, ge.fH)(a, e.id))
                        }, e.id)))]
                    })
                },
                Ml = e => {
                    let {
                        upcomingAppointments: t,
                        pastAppointments: n,
                        value: i,
                        onChange: a,
                        onShowMore: o,
                        disableShowMore: s,
                        hasNextPage: l
                    } = e;
                    return (0, F.jsxs)("div", {
                        className: "dl-desktop-appointments-view-list",
                        children: [(0, F.jsx)(Dl, {
                            value: i,
                            onChange: a,
                            title: "static_pages.homepage.upcoming_appointments",
                            appointments: t
                        }), void 0 === n && (0, F.jsx)("div", {
                            className: "flex dl-justify-center",
                            children: (0, F.jsx)(h.Z, {
                                uiStyle: "info-link",
                                className: "dl-margin-t-16",
                                onTap: () => o(),
                                children: u.Z.t("appointments.index.show_past_appointments")
                            })
                        }), 0 === (null === n || void 0 === n ? void 0 : n.length) && (0, F.jsx)(_.Z, {
                            align: "center",
                            className: "dl-margin-t-16",
                            children: u.Z.t("appointments.index.no_past_appointments")
                        }), (null === n || void 0 === n ? void 0 : n.length) > 0 && (0, F.jsx)(Dl, {
                            value: i,
                            onChange: a,
                            title: "static_pages.homepage.past_appointments",
                            appointments: n,
                            past: !0
                        }), (null === n || void 0 === n ? void 0 : n.length) > 0 && l && (0, F.jsx)(h.Z, {
                            block: !0,
                            uiStyle: "info-link",
                            disabled: s,
                            onTap: e => {
                                e.preventDefault(), o()
                            },
                            children: u.Z.t("common.mobile.availabilities.see_more")
                        }), void 0 !== n && (0, F.jsx)(Al, {})]
                    })
                },
                Rl = (0, r.forwardRef)(((e, t) => {
                    let {
                        preloadedAppointment: n
                    } = e;
                    const {
                        data: i
                    } = (0, El.pU)({
                        appointmentId: null === n || void 0 === n ? void 0 : n.id
                    }), o = i || n;
                    return o ? (0, F.jsx)(w.Z, {
                        appointment: o,
                        inlineActions: !1,
                        hideMap: !0,
                        selected: !0,
                        ref: t,
                        role: "region"
                    }) : (0, F.jsx)(a.Navigate, {
                        to: "/sessions/new"
                    })
                })),
                Ol = () => {
                    var e;
                    const [t, n] = (0, r.useState)(0), [i, o] = (0, r.useState)(void 0), [s, l] = (0, r.useState)(!1), [c, d] = (0, r.useState)(!1), [m, h] = (0, r.useState)(void 0), [_, x] = (0, r.useState)(!1), g = (0, r.useRef)(!1), v = (0, a.useNavigate)(), f = (0, He.ZP)(), Z = (0, a.useParams)();
                    (0, r.useEffect)((() => {
                        new URLSearchParams(window.location.search).get("show_past_appointments_modal") && !(0, ja.UA)(f) && (0, ja.CU)(f) && d(!0)
                    }), [f]);
                    const j = () => {
                            n((e => e + 1))
                        },
                        b = !!t || void 0,
                        {
                            isLoading: y,
                            error: N
                        } = (0, El.Ci)({
                            query: {
                                page: t,
                                past: b
                            },
                            onSuccess: function() {
                                let {
                                    data: {
                                        confirmed: e = [],
                                        done: n = [],
                                        has_next_page: i
                                    } = {}
                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                t ? (h((e => [...e || [], ...n])), x(i)) : o(e)
                            }
                        }),
                        S = null === Z || void 0 === Z ? void 0 : Z.appointmentId,
                        w = S || (null === (e = (i || [])[0]) || void 0 === e ? void 0 : e.id),
                        k = [...i || [], ...m || []].find((e => (0, ge.fH)(e.id, w))),
                        {
                            mutate: T
                        } = (0, Pl.gL)();
                    return (0, r.useEffect)((() => {
                        w && null !== k && void 0 !== k && k.appointment_request_entry && T(w)
                    }), [w]), (0, r.useEffect)((() => {
                        S && null !== g && void 0 !== g && g.current && setTimeout((() => {
                            var e;
                            null === g || void 0 === g || null === (e = g.current) || void 0 === e || e.focus()
                        }), 250)
                    }), [S, g]), y ? (0, F.jsx)(Tl.Z, {
                        delay: 1e3,
                        children: (0, F.jsx)(ht.Z, {})
                    }) : N ? u.Z.t("common.error") : (0, F.jsxs)(Ue.Z, {
                        display: "flex",
                        size: "large",
                        margin: !1,
                        children: [!!f && (0, p.cr)("past_appointments_display_opt_in") && (0, F.jsx)(Ha.Z, {
                            show: s,
                            onClose: () => l(!1),
                            onSuccess: () => l(!1),
                            onAccept: j,
                            source: "past_appointments"
                        }), !!f && (0, p.cr)("past_appointments_display_opt_in") && (0, F.jsx)(Ha.Z, {
                            show: c,
                            onClose: () => d(!1),
                            onSuccess: () => d(!1),
                            source: "login"
                        }), (0, F.jsx)(Ml, {
                            value: w,
                            onChange: e => {
                                let {
                                    id: t
                                } = e;
                                return v(`/account/appointments/details/${t}`, {
                                    replace: !0
                                })
                            },
                            upcomingAppointments: i,
                            pastAppointments: m,
                            onShowMore: () => {
                                (0, ja.wX)(f) ? j(): l(!0)
                            },
                            disableShowMore: y,
                            hasNextPage: _
                        }), (0, F.jsx)("div", {
                            className: "dl-desktop-appointments-card",
                            children: k ? (0, F.jsxs)(F.Fragment, {
                                children: [(0, F.jsx)(Rl, {
                                    preloadedAppointment: k,
                                    ref: g
                                }), (0, F.jsx)(Il, {
                                    appointment: k
                                })]
                            }) : (0, F.jsx)(ia.Z, {
                                title: u.Z.t("patient_mobile.root.account.appointments.upcoming_empty"),
                                image: Cl,
                                primaryAction: {
                                    text: u.Z.t("patient_mobile.root.account.appointments.find_appointment"),
                                    href: "/"
                                },
                                children: u.Z.t("patient_mobile.root.account.appointments.upcoming_empty_description")
                            })
                        })]
                    })
                },
                Ll = (0, i.Z)((() => n.e(11075).then(n.bind(n, 611075))), "phr"),
                Fl = () => (0, F.jsx)(Ze.Z, {
                    children: (0, F.jsxs)(a.Routes, {
                        children: [(0, F.jsx)(a.Route, {
                            path: "details/:appointmentId/questionnaire-requests/:questionnaireRequestId",
                            element: (0, F.jsx)(Ll, {})
                        }), (0, F.jsx)(a.Route, {
                            path: "details/:appointmentId",
                            element: (0, F.jsx)(Ol, {})
                        }), (0, F.jsx)(a.Route, {
                            index: !0,
                            element: (0, F.jsx)(Ol, {})
                        })]
                    })
                }),
                ql = e => t => ((0, r.useEffect)((() => {
                    e(t)
                }), []), null);
            var zl = n(827856),
                Gl = n.n(zl);
            const Vl = ql((() => {
                const e = document.querySelector("select#ticket_option_id");
                e.addEventListener("change", (function(e) {
                    const t = e.target.closest("form"),
                        n = window.ticket_options[e.target.value],
                        i = t.querySelector(".dl-alert"),
                        a = n && n.info;
                    a ? (i.classList.remove("hide"), i.innerHTML = Gl().sanitize(a, {
                        USE_PROFILES: {
                            html: !0
                        },
                        ADD_ATTR: ["target"]
                    })) : i.classList.add("hide");
                    document.querySelectorAll(".custom-field").forEach((e => {
                        e.closest(".form-group").classList.add("hidden"), e.setAttribute("disabled", "disabled")
                    }));
                    const o = n ? Object.entries(n.available_fields) : [];
                    document.querySelector('button[type="submit"]').disabled = 0 === o.length, o.forEach((e => {
                        const t = e[0],
                            n = e[1],
                            i = document.querySelector(`[name="${t}"]`);
                        i && (i.disabled = !1, i.closest(".form-group").classList.remove("hidden"), "mandatory" === n && i.setAttribute("required", "required"))
                    }))
                })), e.dispatchEvent(new Event("change"))
            }));
            var Bl = n(174e3);
            const Hl = () => (0, F.jsx)("div", {
                    className: "mx-auto pt-64 max-w-[608px]",
                    children: (0, F.jsx)(Bl.Z, {})
                }),
                Ul = (0, i.Z)((() => n.e(17299).then(n.bind(n, 4625))), "domak"),
                $l = () => {
                    window.scrollTo({
                        top: 0,
                        behavior: "instant"
                    }), o.Z.sendGtmPageView(o.Z.getUniversalPageType(window.location), window.location.pathname)
                },
                Yl = () => (0, F.jsx)(a.BrowserRouter, {
                    children: (0, F.jsx)(l.SC, {
                        children: (0, F.jsx)(s.Z, {
                            onLocationUpdate: $l,
                            children: (0, F.jsxs)(a.Routes, {
                                children: [(0, F.jsx)(a.Route, {
                                    path: "/",
                                    element: (0, F.jsx)(As, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/ap/:proposalToken",
                                    element: (0, F.jsx)(Bs, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/directory_modifications/new",
                                    element: (0, F.jsx)(hl, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/directory_modifications/edit/:id",
                                    element: (0, F.jsx)(kl, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/:speciality/:location/:id/claim",
                                    element: (0, F.jsx)(Ul, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/appointments/anonymous/*",
                                    element: (0, F.jsx)(te, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/anonymous/patient_request/:patientRequestId",
                                    element: (0, F.jsx)(Ii, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/appointments/:id/*",
                                    element: (0, F.jsxs)(a.Routes, {
                                        children: [(0, F.jsx)(a.Route, {
                                            path: "move/new",
                                            element: (0, F.jsx)(cl, {})
                                        }), (0, F.jsx)(a.Route, {
                                            path: "upcoming_appointment/*",
                                            element: (0, F.jsx)(fn, {})
                                        }), (0, F.jsx)(a.Route, {
                                            path: "charges/new/*",
                                            element: (0, F.jsx)(mn.default, {
                                                Wrapper: Ue.Z
                                            })
                                        }), (0, F.jsx)(a.Route, {
                                            path: "blocked",
                                            element: (0, F.jsx)(ri, {})
                                        }), (0, F.jsx)(a.Route, {
                                            path: "bounced",
                                            element: (0, F.jsx)(di, {})
                                        }), (0, F.jsx)(a.Route, {
                                            path: "telehealth_diagnostic",
                                            element: (0, F.jsx)(Bt, {})
                                        })]
                                    })
                                }), (0, F.jsx)(a.Route, {
                                    path: "/sessions/anonymous/:bookingToken/telehealth/:appointmentAction/*",
                                    element: (0, F.jsx)(ps, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/sessions/anonymous/:bookingToken/telehealth/*",
                                    element: (0, F.jsx)(_i, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/sessions/anonymous/:bookingToken/ap/:proposalToken",
                                    element: (0, F.jsx)(Be, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/sessions/anonymous/:bookingToken",
                                    element: (0, F.jsx)(ps, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/sessions/new/*",
                                    element: (0, F.jsxs)(F.Fragment, {
                                        children: [(0, F.jsx)(un.default, {
                                            b2b_url: window.navbar_b2b_url
                                        }), (0, F.jsx)(ml, {})]
                                    })
                                }), (0, F.jsx)(a.Route, {
                                    path: "/sessions/two-factor/*",
                                    element: (0, F.jsx)(Yi, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/appointments/*",
                                    element: (0, F.jsx)(Fl, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/documents/*",
                                    element: (0, F.jsx)(qa, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/edit/*",
                                    element: (0, F.jsx)(Do, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/information/*",
                                    element: (0, F.jsx)(Qo, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/relatives/*",
                                    element: (0, F.jsx)(dn, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/marketing_consent/*",
                                    element: (0, F.jsx)(Ds.default, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/relatives/add",
                                    element: (0, F.jsx)(a.Navigate, {
                                        to: "/account/relatives"
                                    })
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/relatives/edit/:id",
                                    element: (0, F.jsx)(a.Navigate, {
                                        to: "/account/relatives"
                                    })
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/relatives/invitations/:token",
                                    element: (0, F.jsx)(Hl, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/passwords/new/*",
                                    element: (0, F.jsx)(Ui.default, {
                                        children: (0, F.jsx)(Hi, {})
                                    })
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/documents/:id/pharmacies",
                                    element: (0, F.jsx)(a.Navigate, {
                                        to: "/account/documents"
                                    })
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/documents/:id/search-pharmacy",
                                    element: (0, F.jsx)(a.Navigate, {
                                        to: "/account/documents"
                                    })
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/documents/:id/profile-practice-details/:profilePracticeDetailId/share-prescription",
                                    element: (0, F.jsx)(a.Navigate, {
                                        to: "/account/documents"
                                    })
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/documents/:id/directory-doctors/:directoryDoctorId/share-prescription",
                                    element: (0, F.jsx)(a.Navigate, {
                                        to: "/account/documents"
                                    })
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/devices_verification/:id/edit",
                                    element: (0, F.jsx)(Di.default, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/account/passwords/:id/edit/*",
                                    element: (0, F.jsx)(Ai.default, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/patient_requests/requests",
                                    element: (0, F.jsx)(yo, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/patient_requests/requests/:id/*",
                                    element: (0, F.jsx)(yo, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/video_consultation",
                                    element: (0, F.jsx)(pn.default, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/video-chat/:appointmentId/*",
                                    element: (0, F.jsx)(Gt, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/tickets/new/*",
                                    element: (0, F.jsx)(Vl, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/surcharges/:uuid/*",
                                    element: (0, F.jsx)(ni, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/security",
                                    element: (0, F.jsx)(a.Navigate, {
                                        to: "/account/edit"
                                    })
                                }), (0, F.jsx)(a.Route, {
                                    path: "/privacy-settings",
                                    element: (0, F.jsx)(Ka, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/legal-info",
                                    element: (0, F.jsx)(no, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "/:speciality/:location/:id/booking/*",
                                    element: (0, F.jsx)(oe, {})
                                }), (0, F.jsx)(a.Route, {
                                    path: "anonymous/patient_request/session/*",
                                    element: (0, F.jsx)(Ms.Z, {})
                                })]
                            })
                        })
                    })
                })
        },
        734139: (e, t, n) => {
            "use strict";
            n.d(t, {
                H: () => r,
                Z: () => c
            });
            var i = n(445884),
                a = n(545763),
                o = (n(101055), n(184481)),
                s = n(795361),
                l = n(785893);
            const r = "video",
                c = e => {
                    var t, n;
                    let {
                        slots: c,
                        alternativeSlotsCount: d,
                        displayedSlots: m,
                        onClick: p
                    } = e;
                    const u = null === (t = c[0]) || void 0 === t ? void 0 : t.start_date,
                        h = null === (n = m[0]) || void 0 === n ? void 0 : n.start_date,
                        {
                            createTrackingEventWithContext: _
                        } = (0, s.Z)();
                    return (0, o.useEffect)((() => {
                        _({
                            name: "same_day_alternative_availabilities_suggested",
                            additionalDetails: {
                                alternative_type: r,
                                first_available_slot: h
                            }
                        })
                    }), []), (0, l.jsx)(a.Z, {
                        onTap: () => {
                            p(), _({
                                name: "same_day_alternative_availabilities_displayed",
                                additionalDetails: {
                                    alternative_type: r,
                                    first_available_slot: u
                                }
                            })
                        },
                        uiStyle: "small-primary",
                        leftIcon: "solid/video",
                        className: "dl-margin-b-16",
                        children: i.Z.t("patient_common.root.telehealth.new_earlier_availabilities_in_day", {
                            count: d
                        })
                    })
                }
        },
        478482: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var i = n(184481),
                a = n(827856),
                o = n.n(a),
                s = n(445884),
                l = n(5212),
                r = (n(638761), n(348187)),
                c = n(845126),
                d = n(785893);
            const m = e => {
                    let {
                        substitution: t
                    } = e;
                    const n = Object.keys(t),
                        i = 1 === n.length,
                        a = o().sanitize(n[0], {
                            ALLOWED_TAGS: []
                        }),
                        c = Object.values(t)[0];
                    let m = c && c.status;
                    return m && "fr" === (0, l.rZ)() && (m = m.toLowerCase()), (0, d.jsx)("div", {
                        className: "dl-availabilities-legend dl-margin-b-16",
                        children: (0, d.jsxs)("span", {
                            className: "dl-text-s",
                            children: [(0, d.jsx)("span", {
                                children: (0, d.jsx)(r.Z, {
                                    className: "dl-margin-r-8",
                                    uiStyle: "info"
                                })
                            }), i ? s.Z.t("common.mobile.availabilities.substitution_with", {
                                status: m,
                                name: a
                            }) : s.Z.t("common.mobile.availabilities.substitution")]
                        })
                    })
                },
                p = () => (0, d.jsx)("div", {
                    className: "revamped-dl-availabilities-legend-symbol",
                    children: (0, d.jsx)(c.Z, {
                        name: "solid/video-telehealth",
                        size: "xsmall"
                    })
                }),
                u = () => (0, d.jsx)("div", {
                    className: "dl-availabilities-legend dl-margin-b-16",
                    children: (0, d.jsxs)("span", {
                        className: "dl-text-s",
                        children: [(0, d.jsx)("span", {
                            children: (0, d.jsx)(r.Z, {
                                className: "dl-margin-r-8",
                                uiStyle: "warning"
                            })
                        }), s.Z.t("common.mobile.availabilities.appointment_request")]
                    })
                }),
                h = e => {
                    let {
                        appointmentRequestDisplayed: t,
                        displayedSlots: n,
                        hasVideoAlternatives: i,
                        substitution: a
                    } = e;
                    const o = a && Object.values(a).some((e => {
                            let {
                                slots: t
                            } = e;
                            return t.some((e => n.find((t => e === (t.start_date || t)))))
                        })),
                        l = i && n.some((e => e.video));
                    if (!(l || o || t)) return null;
                    const r = (0, d.jsxs)(d.Fragment, {
                        children: [l && (0, d.jsxs)("div", {
                            className: "dl-availabilities-legend",
                            "aria-hidden": "true",
                            children: [(0, d.jsx)(p, {}), (0, d.jsx)("span", {
                                className: "dl-text-s",
                                children: s.Z.t("patient_common.root.telehealth.vc_only")
                            })]
                        }), o && (0, d.jsx)(m, {
                            substitution: a
                        }), t && (0, d.jsx)(u, {})]
                    });
                    return (0, d.jsx)("div", {
                        className: "dl-margin-b-16",
                        children: r
                    })
                },
                _ = (0, i.memo)(h)
        },
        708402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => j
            });
            var i = n(184481),
                a = n.n(i),
                o = n(977954),
                s = n.n(o),
                l = n(445884),
                r = n(736015),
                c = n(755506),
                d = n(453040),
                m = n(545763),
                p = n(795361),
                u = n(734139),
                h = n(21254),
                _ = n(642676),
                x = n(478482),
                g = n(711700),
                v = n.n(g),
                f = (n(299250), n(785893));
            const Z = e => {
                var t;
                let {
                    availability: n,
                    defaultExpanded: o,
                    hasVideoAlternatives: g,
                    isAStandardSlot: Z,
                    onSlotSelect: j,
                    selectedSlot: b,
                    showAlternativeAvailabilities: y,
                    showIndicator: N,
                    unavailableSlots: S
                } = e;
                const {
                    createTrackingEventWithContext: w
                } = (0, p.Z)(), k = (0, i.createRef)(), [T, C] = (0, i.useState)({
                    cardExpanded: o,
                    slotsExpanded: !1,
                    showAlternativeSlots: !1
                }), E = !(null === (t = n.appointment_request_slots) || void 0 === t || !t.length), P = () => y || T.showAlternativeSlots, I = () => {
                    const e = P() ? n.slots : n.slots.filter(Z);
                    return T.slotsExpanded ? e : e.slice(0, 6)
                }, A = null !== n && void 0 !== n && n.date ? s().utc(null === n || void 0 === n ? void 0 : n.date).toJSON() : null, D = e => {
                    w({
                        name: e ? "availability_collapse_card" : "availability_expand_card",
                        additionalDetails: {
                            date: A
                        }
                    })
                }, M = () => {
                    w({
                        name: "availabilitiesMoreLaterInDay"
                    }), C({ ...T,
                        slotsExpanded: !0
                    })
                }, R = e => {
                    if (P()) return null;
                    const t = n.slots.filter((e => !Z(e))).length;
                    return 0 === t ? null : (0, f.jsx)(u.Z, {
                        alternativeSlotsCount: t,
                        displayedSlots: e,
                        slots: n.slots,
                        onClick: () => C({ ...T,
                            slotsExpanded: !0,
                            showAlternativeSlots: !0
                        })
                    })
                }, O = () => {
                    const e = I();
                    return (0, f.jsxs)(a().Fragment, {
                        children: [R(e), (0, f.jsx)(_.Z, {
                            slots: e,
                            selectedSlot: b,
                            substitution: n.substitution,
                            onSlotSelect: j,
                            unavailableSlots: S,
                            appointmentRequestSlots: n.appointment_request_slots
                        })]
                    }, "slots")
                }, L = e => {
                    const t = n.slots.length;
                    return (0, f.jsxs)("div", {
                        className: "flex dl-justify-between dl-flex-grow",
                        children: [(0, f.jsx)(d.Z, {
                            uiStyle: "body-s-bold",
                            children: e
                        }), N && (0, f.jsx)(h.Z, {
                            slotCount: t
                        })]
                    })
                };
                return (() => {
                    const e = v()(s()(n.date).localize("dddd Do MMMM"));
                    return (0, f.jsxs)(r.Z, {
                        border: !0,
                        divider: !0,
                        className: "dl-margin-y-8 dl-availabilities-card",
                        headerClassName: "dl-padding-16",
                        actionColor: "primary-110",
                        initiallyCollapsed: !o,
                        ref: k,
                        padding: !1,
                        customHeader: L(e),
                        titleStyle: "body",
                        "aria-label": s()(n.date).localize("YYYY-MM-DD"),
                        onCollapseToggle: D,
                        children: [(0, f.jsxs)("div", {
                            className: "dl-margin-x-16 dl-margin-t-16",
                            children: [O(), (0, f.jsx)(x.Z, {
                                appointmentRequestDisplayed: E,
                                displayedSlots: I(),
                                hasVideoAlternatives: g,
                                substitution: n.substitution
                            }, "substitution")]
                        }), n.slots.length > 6 && !T.slotsExpanded && (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsx)(c.Z, {
                                className: "dl-margin-b-16"
                            }), (0, f.jsx)("div", {
                                "data-test": "more",
                                className: "dl-margin-b-16 dl-margin-x-16",
                                children: (0, f.jsx)(m.Z, {
                                    uiStyle: "info-link",
                                    onTap: M,
                                    block: !0,
                                    className: "dl-full-height",
                                    children: l.Z.t("common.mobile.availabilities.see_more")
                                })
                            }, "more")]
                        })]
                    })
                })()
            };
            Z.defaultProps = {
                defaultExpanded: !1,
                showIndicator: !1
            };
            const j = Z
        },
        549915: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var i = n(184481),
                a = n(294184),
                o = n.n(a),
                s = n(977954),
                l = n.n(s),
                r = n(445884),
                c = (n(115490), n(348187)),
                d = n(545763),
                m = n(845126),
                p = n(453040),
                u = n(398198),
                h = n(795361),
                _ = n(785893);
            const x = () => (0, _.jsx)("span", {
                    className: "revamped-availabilities-slot-telehealth-icon-container",
                    children: (0, _.jsx)(m.Z, {
                        name: "solid/video-telehealth",
                        size: "xsmall",
                        className: "revamped-availabilities-slot-telehealth-icon"
                    })
                }),
                g = e => {
                    let {
                        slot: t,
                        disabled: n,
                        hasSubstitution: a,
                        selected: s,
                        onSlotSelect: m,
                        isAppointmentRequestSlot: g
                    } = e;
                    const [v, f] = (0, i.useState)(), {
                        createTrackingEventWithContext: Z
                    } = (0, h.Z)();
                    return (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsxs)(d.Z, {
                            uiStyle: "default-link",
                            className: o()("availabilities-slot availabilities-slot-button", {
                                "availabilities-slot-selected": s
                            }),
                            disabled: n,
                            onTap: () => {
                                g ? (Z({
                                    name: "patient_appointment_request_modal_displayed"
                                }), f(!0)) : m(t)
                            },
                            children: [a || g ? (0, _.jsxs)("div", {
                                className: "mobile-availabilities-badges-section",
                                children: [a && (0, _.jsx)(c.Z, {
                                    className: "mobile-availabilities-slot-badge mobile-availabilities-slot-substitution dl-padding-0 dl-padding-l-4 dl-padding-t-4",
                                    uiStyle: "info"
                                }), g && (0, _.jsx)(c.Z, {
                                    className: "mobile-availabilities-slot-badge mobile-availabilities-slot-appointment-request dl-padding-0 dl-padding-l-4 dl-padding-t-4",
                                    uiStyle: "warning"
                                })]
                            }) : null, t.video && (0, _.jsx)(x, {}), (0, _.jsxs)(p.Z, {
                                component: "span",
                                uiStyle: "body-s-bold",
                                color: "neutral-130",
                                children: [l()(t.start_date || t).localizeTimeToParisTimeZone("HH:mm"), t.video && (0, _.jsx)("span", {
                                    className: "dl-sr-only",
                                    children: r.Z.t("patient_common.root.telehealth.vc_only")
                                })]
                            })]
                        }), g && (0, _.jsx)(u.Z, {
                            showModal: v,
                            setShowModal: f,
                            onConfirm: () => m(t)
                        })]
                    })
                }
        },
        33057: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var i = n(184481),
                a = n(445884),
                o = n(795361),
                s = n(989976),
                l = n(453040),
                r = n(931381),
                c = n(630316),
                d = n(785893);
            const m = e => {
                    let {
                        data: t,
                        reason: n
                    } = e;
                    const {
                        createTrackingEventWithContext: m
                    } = (0, o.Z)();
                    (0, i.useEffect)((() => {
                        m({
                            name: "onlineBookingUnavailable",
                            additionalDetails: {
                                label: n
                            }
                        })
                    }), []);
                    const {
                        textMessage: p,
                        phoneNumber: u
                    } = function() {
                        let {
                            bookingDisabled: e,
                            bookingTemporaryDisabled: t,
                            bookingNoSearchResult: n,
                            landlineNumber: i,
                            message: o
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        const s = e || n;
                        return s && i ? {
                            textMessage: a.Z.t("common.availabilities.booking_disabled_with_phone"),
                            phoneNumber: i
                        } : s ? {
                            textMessage: a.Z.t("common.availabilities.booking_disabled_no_phone"),
                            phoneNumber: null
                        } : t ? {
                            textMessage: a.Z.t("common.availabilities.booking_temporary_disabled_html"),
                            phoneNumber: null
                        } : {
                            textMessage: o || null,
                            phoneNumber: null
                        }
                    }(t), h = u ? {
                        text: u,
                        href: `tel://${u}`
                    } : null;
                    return (0, d.jsx)("div", {
                        className: "dl-full-height",
                        children: (0, d.jsx)(s.Z, {
                            image: c,
                            title: (0, r.cu)(t, n),
                            secondaryAction: h,
                            children: (0, d.jsx)(l.Z, {
                                block: !0,
                                color: "neutral-130",
                                children: p
                            })
                        })
                    })
                },
                p = (0, i.memo)(m)
        },
        21254: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var i = n(184481),
                a = n(294184),
                o = n.n(a),
                s = n(453040),
                l = n(402804),
                r = (n(932382), n(785893));
            const c = e => {
                    let {
                        slotCount: t
                    } = e;
                    const n = (0, l.Wv)(t),
                        i = o()("availabilities-indicator", {
                            "availabilities-indicator-free": "free" === n,
                            "availabilities-indicator-busy": "busy" === n,
                            "availabilities-indicator-full": "full" === n
                        });
                    return (0, r.jsxs)("span", {
                        className: i,
                        children: [(0, r.jsx)("i", {}), n !== l.fT ? (0, r.jsx)(s.Z, {
                            uiStyle: "body-s-bold",
                            className: "inline",
                            component: "p",
                            children: t
                        }) : null]
                    })
                },
                d = (0, i.memo)(c)
        },
        642676: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var i = n(184481),
                a = n(406288),
                o = n(549915),
                s = n(516590),
                l = (n(439703), n(785893));
            const r = e => {
                    let {
                        slots: t,
                        substitution: n,
                        selectedSlot: i,
                        onSlotSelect: r,
                        unavailableSlots: c,
                        appointmentRequestSlots: d
                    } = e;
                    const m = (e => e ? Object.keys(e).reduce(((t, n) => e[n].slots.reduce(((e, t) => ({ ...e,
                        [t]: n
                    })), t)), {}) : {})(n);
                    return (0, l.jsx)(a.Z, {
                        contentClassName: "dl-padding-0 dl-margin-b-4 availabilities-slots",
                        children: t.map((e => {
                            const t = (null !== d && void 0 !== d ? d : []).includes(e.start_date);
                            return (0, l.jsx)(o.Z, {
                                selected: !!i && (i.start_date || i) === (e.start_date || e),
                                disabled: null === c || void 0 === c ? void 0 : c.includes(e.start_date || e),
                                slot: e,
                                hasSubstitution: Boolean(m[e.start_date || e]),
                                onSlotSelect: () => {
                                    (0, s.ck)({
                                        name: "select_availability"
                                    }, {
                                        schema: "patient"
                                    }), r(e, t)
                                },
                                isAppointmentRequestSlot: t
                            }, e.start_date || e)
                        }))
                    })
                },
                c = (0, i.memo)(r)
        },
        476888: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var i = n(977954),
                a = n.n(i),
                o = n(445884),
                s = n(179522),
                l = n(545763),
                r = n(795361),
                c = n(734139),
                d = n(184481),
                m = n(785893);
            const p = e => {
                let {
                    earlierAlternativeAvailabilitiesCount: t,
                    firstFunnelAvailabilityDate: n,
                    firstAlternativeAvailabilityStartDate: i,
                    setShowAlternativeAvailabilities: p
                } = e;
                const {
                    createTrackingEventWithContext: u
                } = (0, r.Z)(), h = {
                    alternative_type: c.H,
                    quantity_of_earlier_available_slots: t
                };
                (0, d.useEffect)((() => {
                    u({
                        name: "alternative_availabilities_suggested",
                        additionalDetails: { ...h,
                            first_available_slot: n
                        }
                    })
                }), []);
                return (0, m.jsx)("div", {
                    children: (0, m.jsxs)(s.Z, {
                        rounded: !0,
                        border: "all",
                        size: "small",
                        onTap: () => {
                            p(!0), u({
                                name: "alternative_availabilities_displayed",
                                additionalDetails: { ...h,
                                    first_available_slot: i
                                }
                            })
                        },
                        children: [(0, m.jsx)(s.Z.Icon, {
                            name: "solid/video-telehealth",
                            size: "small",
                            className: "dl-margin-r-16"
                        }), (0, m.jsx)(s.Z.Title, {
                            children: [t, o.Z.t("patient_common.root.telehealth.new_earlier_availabilities_in_week_with_count", {
                                start_date: a()(n).format("Do MMMM")
                            })].join(" ")
                        }), (0, m.jsx)(s.Z.Info, {
                            children: (0, m.jsx)(l.Z, {
                                uiStyle: "small-primary",
                                className: "dl-padding-0",
                                children: o.Z.t("common.actions.display")
                            })
                        })]
                    })
                })
            }
        },
        269270: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var i = n(784600),
                a = n(943993),
                o = n(785893);
            const s = e => {
                let {
                    appointmentId: t,
                    appointmentDate: n,
                    nextStepPath: s,
                    onTemporaryAppointmentDelete: l
                } = e;
                return (0, o.jsx)(i.Z, {
                    className: "dl-margin-t-16",
                    children: (0, o.jsx)(a.Z, {
                        appointmentDate: n,
                        appointmentId: t,
                        nextStepPath: s,
                        onTemporaryAppointmentDelete: l
                    })
                })
            }
        },
        980636: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                AuthenticationStepWithRouter: () => X,
                LOGIN_FORM: () => W,
                SIGNUP_FORM: () => Y,
                default: () => Q
            });
            var i = n(184481),
                a = n(24553),
                o = n(451421),
                s = n(478718),
                l = n.n(s),
                r = n(784600),
                c = n(453040),
                d = n(288802),
                m = n(990626),
                p = n(445884),
                u = n(294184),
                h = n.n(u),
                _ = n(420260),
                x = n(516590),
                g = n(129303),
                v = n(437124),
                f = n(800274),
                Z = n(5212),
                j = n(708221),
                b = n(764433),
                y = n(545763),
                N = n(929014),
                S = n(983923),
                w = n(366699),
                k = n(462814),
                T = n(704098),
                C = n(755506),
                E = n(261397),
                P = n(990762),
                I = n(642979),
                A = n(353808),
                D = n.n(A),
                M = n(934418),
                R = n.n(M),
                O = n(447710),
                L = n(8955),
                F = n(522917),
                q = n(159162),
                z = n(785893);

            function G(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const V = e => {
                let {
                    email: t,
                    email_confirmation: n
                } = e;
                return {
                    email_confirmation: t && n && t !== n ? p.Z.t("patient_mobile.root.account.new.profile.email_confirmation_nok") : null
                }
            };
            class B extends i.Component {
                constructor() {
                    super(...arguments), G(this, "state", {
                        showGdpr: !1,
                        error: {},
                        loading: !1,
                        captchaRequired: this.props.captchaRequired
                    }), G(this, "rejectGdpr", (() => this.setState({
                        showGdpr: !1
                    }))), G(this, "onClickSubmit", (() => {
                        this.props.show ? (d.Z.trackGtmEvent({
                            category: this.props.isBookingFunnel ? m.ZP.GTM_CONTENT_GROUPS.BOOKING_LOGIN_SIGNUP : m.ZP.GTM_CONTENT_GROUPS.ACCOUNT_LOGIN_SIGNUP,
                            action: m.ZP.GTM_EVENTS.SIGN_UP,
                            label: "submitForm"
                        }), this.setState({
                            showGdpr: !0
                        }), d.Z.trackGtmEvent({
                            category: this.props.isBookingFunnel ? m.ZP.GTM_CONTENT_GROUPS.BOOKING_LOGIN_SIGNUP : m.ZP.GTM_CONTENT_GROUPS.ACCOUNT_LOGIN_SIGNUP,
                            action: m.ZP.GTM_EVENTS.SIGN_UP,
                            label: "dataPrivacyPopinDisplay"
                        })) : this.props.onClickFolded()
                    })), G(this, "getRequiredFields", (() => {
                        const e = ["phone_number", "email", "email_confirmation", "password", "birthdate"];
                        return this.state.captchaRequired && !(0, Z.IF)() && e.push("frc-captcha-solution"), e
                    })), G(this, "allFieldsPresent", (e => {
                        const t = this.getRequiredFields();
                        return Object.values(l()(e.values, ...t)).filter(Boolean).length === t.length
                    })), G(this, "submitButtonDisabled", ((e, t) => {
                        const n = Object.values(e.errors || {}).some(Boolean);
                        return this.props.show && (!e.values.cgu || !this.allFieldsPresent(e) || n || t)
                    })), G(this, "onSuccess", (async e => {
                        let {
                            data: t,
                            password: n,
                            remember_username: i
                        } = e;
                        if (this.setState({
                                showGdpr: !1,
                                error: {},
                                loading: !1
                            }), t.two_factor_auth_response)(0, j.Z)(t.redirection, {
                            replace: !0
                        });
                        else {
                            if (i ? L.t8("last-login-username", t.email) : L.Od("last-login-username"), n) try {
                                await this.context.startTankerWithVerificationMethod(t, {
                                    passphrase: n
                                })
                            } catch (e) {
                                window.crashReporter.captureException(e)
                            }
                            this.props.onSuccess(t)
                        }
                    })), G(this, "onFailure", (e => {
                        let {
                            error: t,
                            captcha_required: n,
                            existing_account: i
                        } = e;
                        i && this.props.onAccountMatchError(t), this.setState({
                            showGdpr: !1,
                            error: {
                                existingAccount: i,
                                message: t || n && p.Z.t("common.captcha_required") || p.Z.t("common.error")
                            },
                            loading: !1,
                            captchaRequired: n
                        })
                    })), G(this, "onFormFirstTouch", (() => {
                        (0, x.ZP)({
                            name: "create_account_start",
                            details: {
                                source: "booking"
                            }
                        }, {
                            schema: "patient"
                        })
                    })), G(this, "trackAuthenticationStep", (e => {
                        let {
                            data: t
                        } = e;
                        void 0 !== t.austrian_organization && (0, x.ck)({
                            name: "authentication_step_displayed"
                        })
                    }))
                }
                render() {
                    const {
                        show: e = !1,
                        raisedButton: t = !1
                    } = this.props;
                    return (0, z.jsx)(k.Z, {
                        autoComplete: "off",
                        onFirstTouch: this.onFormFirstTouch,
                        horizontal: !1,
                        onSubmit: async e => {
                            let {
                                "frc-captcha-solution": t,
                                birthdate: n,
                                password: i,
                                remember_username: a,
                                ...o
                            } = e;
                            this.setState({
                                loading: !0
                            }), await P.Z.register("/account.json", {
                                account: { ...o,
                                    password: i
                                },
                                ...this.state.captchaRequired && {
                                    "frc-captcha-solution": t
                                }
                            }).then((e => this.onSuccess({
                                data: e.bodyData,
                                password: i,
                                remember_username: a
                            }))).catch((e => {
                                let {
                                    response: t
                                } = e;
                                return this.onFailure(t.bodyData)
                            }))
                        },
                        requiredIndicators: !1,
                        validate: V,
                        defaultValues: {
                            remember_username: !0
                        },
                        children: n => (0, z.jsxs)(z.Fragment, {
                            children: [(0, z.jsxs)("div", {
                                className: h()("dl-toggleable-form"),
                                style: {
                                    maxHeight: e ? 700 : 0
                                },
                                ...e ? {} : {
                                    "aria-hidden": "true"
                                },
                                children: [(0, z.jsx)(c.Z, {
                                    className: "dl-margin-y-16",
                                    align: "center",
                                    component: "p",
                                    children: p.Z.t("appointments.login_or_signup.complete_registration_to_continue")
                                }), this.state.error.message && !this.state.error.existingAccount && (0, z.jsx)(N.Z, {
                                    variant: "deprecated-alert-interface",
                                    uiStyle: "error",
                                    children: this.state.error.message
                                }), "de" === (0, Z.rZ)() && (0, z.jsx)(b.Z, {
                                    url: "/account/new.json",
                                    method: "get",
                                    onSuccess: this.trackAuthenticationStep,
                                    children: e => {
                                        let {
                                            success: t,
                                            data: n
                                        } = e;
                                        return t && n.austrian_organization ? (0, z.jsx)(N.Z, {
                                            variant: "deprecated-alert-interface",
                                            children: p.Z.t("common.country_calling_code_disclaimer")
                                        }) : null
                                    }
                                }), (0, z.jsx)(w.Z, {
                                    field: "phone_number",
                                    ref: this.props.innerRef,
                                    icon: (0, z.jsx)(D(), {}),
                                    autoComplete: "off",
                                    label: null,
                                    disabled: !e,
                                    required: !0,
                                    type: "text",
                                    placeholder: p.Z.t("patient_mobile.root.account.new.profile.phone_number.placeholder"),
                                    hint: p.Z.t("patient_mobile.root.account.new.profile.phone_number.warning"),
                                    validate: e => !(0, F.qh)((0, Z.rZ)(), e)
                                }), (0, z.jsx)(w.Z, {
                                    field: "email",
                                    icon: (0, z.jsx)(R(), {}),
                                    autoComplete: "off",
                                    label: null,
                                    placeholder: p.Z.t("common.password_reset.email"),
                                    disabled: !e,
                                    required: !0,
                                    type: "email"
                                }), (0, z.jsx)(w.Z, {
                                    field: "email_confirmation",
                                    icon: (0, z.jsx)(R(), {}),
                                    autoComplete: "off",
                                    label: null,
                                    placeholder: p.Z.t("patient_mobile.root.login.email_confirmation"),
                                    disabled: !e,
                                    required: !0,
                                    type: "email"
                                }), (0, z.jsx)(w.Z, {
                                    field: "birthdate",
                                    icon: "solid/calendar-day",
                                    autoComplete: "off",
                                    label: null,
                                    placeholder: p.Z.t("patient_mobile.root.login.birthdate"),
                                    disabled: !e,
                                    options: {
                                        minAge: m.ZP.ACCOUNT_MIN_LEGAL_AGE,
                                        minAgeErrorMessage: p.Z.t("accounts.age_too_young", {
                                            min_age: m.ZP.ACCOUNT_MIN_LEGAL_AGE
                                        })
                                    },
                                    hideInputDetails: !0
                                }), (0, z.jsx)(S.Z, {
                                    label: null,
                                    placeholder: p.Z.t("appointments.signup_booking.password"),
                                    disabled: !e
                                }), e && this.state.captchaRequired && (0, z.jsx)(q.K_, {}), (0, z.jsx)(C.Z, {}), (0, z.jsxs)("div", {
                                    className: "dl-margin-y-16",
                                    children: [(0, z.jsx)(T.Z, {
                                        field: "cgu",
                                        disabled: !e,
                                        label: (0, z.jsxs)(z.Fragment, {
                                            children: [p.Z.t("patient_mobile.root.account.new.accept_terms"), (0, z.jsx)(I.Z, {
                                                className: "dl-font-normal",
                                                href: m.ZP.PATIENT_LEGAL_INFO_LINKS.terms_and_conditions,
                                                target: "_blank",
                                                tabIndex: e ? void 0 : -1,
                                                children: p.Z.t("patient_common.root.legal_titles.terms")
                                            })]
                                        })
                                    }), (0, z.jsx)(T.Z, {
                                        field: "remember_username",
                                        label: p.Z.t("patient_mobile.root.login.remember_username"),
                                        disabled: !e
                                    })]
                                })]
                            }), (0, z.jsx)(y.Z, {
                                block: !0,
                                type: "button",
                                uiStyle: t ? "primary" : "info-link",
                                className: h()("dl-toggleable-form-button", {
                                    "dl-toggleable-form-button-flat": !t
                                }),
                                onClick: this.onClickSubmit,
                                disabled: this.submitButtonDisabled(n, this.state.loading),
                                children: window.onPartnerDomain ? p.Z.t("appointments.login_or_signup.sign_up_partners") : p.Z.t("appointments.login_or_signup.sign_up")
                            }), (0, z.jsx)(O.Z, {
                                show: this.state.showGdpr,
                                disabled: this.state.loading,
                                onClickContinue: n.submitForm,
                                onHide: this.rejectGdpr,
                                bodyText: p.Z.t("common.consent.popin_html", {
                                    privacy_policy_url: m.ZP.PATIENT_LEGAL_INFO_LINKS.privacy_policy
                                }),
                                goBackButtonText: p.Z.t("common.consent.go_back")
                            })]
                        })
                    })
                }
            }
            G(B, "contextType", E.WA);
            const H = (0, i.forwardRef)(((e, t) => (0, z.jsx)(B, {
                innerRef: t,
                ...e
            })));
            var U = n(108716);
            n(886308);
            const $ = async () => {
                    const e = await g.ZP.call({
                        method: g.nb
                    });
                    await v.ZP.post("/api/notification_tokens", {
                        body: {
                            token: { ...e,
                                permission: e.permission > 0
                            }
                        }
                    }).catch((() => {}))
                },
                Y = "signup",
                W = "login",
                K = e => {
                    let {
                        captcha_required: t,
                        defaultForm: n,
                        isBookingFunnel: s = !1,
                        isVaccination: u = !1,
                        hasVaccinationBlockAvailablilities: g = !1,
                        isPatientRequest: v,
                        appointment_id: b,
                        ...y
                    } = e;
                    const [N, S] = (0, i.useState)(n), w = (0, f.f0)(), [k, T] = (0, i.useState)(), C = (0, a.useNavigate)(), E = (0, i.useRef)(), P = (0, i.useRef)();
                    (0, i.useEffect)((() => {
                        N && setTimeout((() => {
                            var e, t;
                            N === W ? null === E || void 0 === E || null === (e = E.current) || void 0 === e || e.focus() : null === P || void 0 === P || null === (t = P.current) || void 0 === t || t.focus()
                        }), 300)
                    }), [N]), (0, i.useEffect)((() => {
                        s && b && d.Z.pushToCustomDataLayer({
                            appointment_id: (0, o.id)(b),
                            ...l()(y, ["profile_id", "profile_practice_id", "speciality_id"])
                        }), (s || v) && d.Z.sendGtmPageView(m.ZP.GTM_CONTENT_GROUPS.BOOKING_LOGIN_SIGNUP)
                    }), [s, b]);
                    const I = n === W;
                    return (0, z.jsxs)("div", {
                        children: [(0, z.jsxs)("div", {
                            className: h()("dl-authentication-step", {
                                "dl-authentication-step-reverse": I
                            }),
                            children: [(0, z.jsxs)(r.Z, {
                                className: "dl-margin-16",
                                "data-test": "signup-card",
                                children: [(0, z.jsx)(c.Z, {
                                    component: "div",
                                    uiStyle: "title-s-bold",
                                    align: "center",
                                    children: p.Z.t("appointments.login_or_signup.new_on_doctolib")
                                }), (0, z.jsx)(H, {
                                    captchaRequired: t,
                                    show: N === Y,
                                    ref: P,
                                    raisedButton: N === Y || !N,
                                    isBookingFunnel: s,
                                    onSuccess: e => {
                                        let {
                                            redirection: t,
                                            patient_matched: n,
                                            ...i
                                        } = e;
                                        (0, Z.Zz)() || (0, Z.dm)() ? (0, j.Z)(t, {
                                            replace: !0
                                        }) : (w(i), window.platforms.reactNative && $(), C(t, {
                                            replace: !0
                                        }))
                                    },
                                    onAccountMatchError: e => {
                                        T(e), S(W)
                                    },
                                    onClickFolded: () => {
                                        N !== Y && (S(Y), (s || v) && d.Z.trackGtmEvent({
                                            category: m.ZP.GTM_CONTENT_GROUPS.BOOKING_LOGIN_SIGNUP,
                                            action: m.ZP.GTM_EVENTS.SIGN_UP,
                                            label: "chooseSignUp"
                                        }), (0, x.ck)({
                                            name: "booking_funnel_signup_unfold"
                                        }))
                                    }
                                })]
                            }), (0, z.jsxs)(r.Z, {
                                className: "dl-margin-16",
                                "data-test": "login-card",
                                children: [(0, z.jsx)(c.Z, {
                                    component: "div",
                                    uiStyle: "title-s-bold",
                                    align: "center",
                                    children: p.Z.t("appointments.login_or_signup.ever_used_doctolib")
                                }), (0, z.jsx)(_.Z, {
                                    isBookingFunnel: s,
                                    show: N === W,
                                    raisedButton: N === W || !N,
                                    error: k,
                                    ref: E,
                                    appointmentId: b,
                                    onLogin: () => {
                                        window.platforms.reactNative && $()
                                    },
                                    onClick: e => {
                                        N !== W && (S(W), (s || v) && d.Z.trackGtmEvent({
                                            category: m.ZP.GTM_CONTENT_GROUPS.BOOKING_LOGIN_SIGNUP,
                                            action: m.ZP.GTM_EVENTS.LOGIN,
                                            label: "chooseLogin"
                                        }), e.preventDefault(), (0, x.ck)({
                                            name: "booking_funnel_login_unfold"
                                        }))
                                    }
                                })]
                            })]
                        }), u && (0, z.jsx)(U.Z, {
                            hasVaccinationBlockAvailablilities: g
                        })]
                    })
                },
                X = e => (0, z.jsx)(a.BrowserRouter, {
                    children: (0, z.jsx)(K, { ...e
                    })
                }),
                Q = K
        },
        285096: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var i = n(445884),
                a = n(5212),
                o = n(192772),
                s = n(712722),
                l = n(581232),
                r = n(297516),
                c = n(921114),
                d = n(753657),
                m = n(111432),
                p = n(785893);
            const u = e => {
                let {
                    children: t,
                    isBooking: n,
                    appointmentProfile: u,
                    noBack: h,
                    appointmentStartDate: _,
                    step: x
                } = e;
                const g = (0, o.ZP)(),
                    v = n && u.path ? u.path : "/account/edit",
                    f = h ? null : () => g.dismiss(v),
                    Z = (0, m.t)(x);
                return (0, p.jsxs)(s.Z, {
                    children: [n ? (0, p.jsx)(d.Z, {
                        onBack: f,
                        cloudinaryPublicId: u.cloudinary_public_id,
                        appointmentStartDate: _
                    }) : (0, p.jsx)(l.Z, {
                        title: Z.title,
                        onBack: f,
                        steps: n ? Z.config : null,
                        children: (0, p.jsx)(c.Z, {})
                    }), (0, p.jsx)(r.Z, {
                        children: (0, a.rl)() ? (0, p.jsx)("div", {
                            className: "dl-white-bg dl-full-height",
                            children: t
                        }) : (0, p.jsxs)(p.Fragment, {
                            children: [n && (0, p.jsx)("h3", {
                                className: "dl-text-center dl-font-700 dl-padding-x-16",
                                style: {
                                    marginBottom: 0
                                },
                                children: i.Z.t("appointments.light_appointment_card.your_appointment_is_not_confirmed_yet")
                            }), t]
                        })
                    })]
                })
            }
        },
        890778: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => k
            });
            var i = n(710270),
                a = n(5212),
                o = n(285096),
                s = n(184481),
                l = n(445884),
                r = n(784600),
                c = n(453040),
                d = n(290988),
                m = n(545763);
            const p = n.p + "082953a5eec9fca1f6a0.png";
            var u = n(462814),
                h = n(294184),
                _ = n.n(h),
                x = n(708221),
                g = n(516590),
                v = n(78599),
                f = n(992129),
                Z = n(785893);
            const j = [{
                    label: l.Z.t("appointments.appointment_details.marketing_consent.checkbox_label"),
                    value: "opted_in",
                    selectedTrackingId: "patient_marketing_optin_checkbox",
                    unselectedTrackingId: "patient_marketing_optin_uncheckbox",
                    required: !1
                }],
                b = e => {
                    let {
                        children: t,
                        showRevampedDesign: n
                    } = e;
                    return n ? (0, Z.jsx)("div", {
                        className: "dl-padding-x-16 dl-padding-y-24 dl-full-height dl-flex-column dl-white-bg",
                        children: t
                    }) : (0, Z.jsx)(r.Z, {
                        className: "dl-margin-16",
                        contentClassName: "dl-flex-center dl-flex-column",
                        children: t
                    })
                },
                y = e => {
                    let {
                        showRevampedDesign: t,
                        loading: n,
                        isUserOptedIn: i,
                        currentStep: a,
                        totalStep: o
                    } = e;
                    return t ? (0, Z.jsx)("div", {
                        className: "mt-auto",
                        children: (0, Z.jsx)(f.Z, {
                            currentStep: Number(a),
                            totalStep: Number(o),
                            disabled: n,
                            onNextTap: () => (0, g.ZP)({
                                name: "patient_marketing_optin_click_next_step",
                                details: {
                                    opted_in: i
                                }
                            }, {
                                schema: "patient"
                            })
                        })
                    }) : (0, Z.jsx)(m.Z, {
                        disabled: n,
                        block: !0,
                        trackingId: "patient_marketing_optin_click_next_step",
                        trackingDetails: {
                            opted_in: i
                        },
                        className: "dl-margin-t-16",
                        type: "submit",
                        children: l.Z.t("common.actions.continue")
                    })
                },
                N = () => {
                    const [e, t] = (0, s.useState)([]), {
                        current_step: n = 0,
                        total_steps: o = 0
                    } = (0, v.e3)(window.location.search);
                    (0, s.useEffect)((() => {
                        (0, g.ZP)({
                            name: "patient_marketing_optin_page_view"
                        }, {
                            schema: "patient"
                        })
                    }), []);
                    const r = Boolean(e.length),
                        {
                            submitMarketingConsent: m,
                            loading: h
                        } = (0, i.Z)({
                            url: "/account/marketing_consent",
                            method: "POST",
                            trigger: "submitMarketingConsent",
                            body: {
                                opted_in: r
                            },
                            onSuccess: e => {
                                let {
                                    data: t
                                } = e;
                                const i = `?current_step=${Number(n)+1}&total_steps=${o}`,
                                    s = (0, a.Zz)() ? t.redirection : `${t.redirection}${i}`;
                                (0, x.Z)(s)
                            }
                        });
                    return (0, Z.jsxs)(b, {
                        showRevampedDesign: !(0, a.Zz)(),
                        children: [(0, Z.jsx)("div", {
                            children: (0, Z.jsx)("img", {
                                src: p,
                                alt: ""
                            })
                        }), (0, Z.jsx)(c.Z, {
                            uiStyle: "title-s-bold",
                            className: _()("dl-margin-16", {
                                "dl-text-center": (0, a.Zz)()
                            }),
                            "aria-live": "polite",
                            children: l.Z.t("appointments.appointment_details.marketing_consent.title")
                        }), (0, Z.jsxs)(u.Z, {
                            onSubmit: m,
                            className: _()({
                                "dl-flex-column dl-flex-grow": !(0, a.Zz)()
                            }),
                            children: [(0, Z.jsx)(d.Z, {
                                className: "dl-margin-b-0",
                                contentClassName: "flex dl-justify-start dl-padding-8",
                                horizontal: !1,
                                onSelect: e => t(e),
                                options: j,
                                type: "checkbox",
                                value: e
                            }), (0, Z.jsx)(c.Z, {
                                block: !0,
                                uiStyle: "body-xs-regular",
                                className: "dl-margin-t-16",
                                color: "neutral-130",
                                "aria-live": "polite",
                                children: l.Z.t("appointments.appointment_details.marketing_consent.below_note_html", {
                                    href: l.Z.t("url.configuration.data_protection_patient")
                                })
                            }), (0, Z.jsx)(y, {
                                showRevampedDesign: !(0, a.Zz)(),
                                loading: h,
                                isUserOptedIn: r,
                                currentStep: n,
                                totalStep: o
                            })]
                        })]
                    })
                },
                S = e => {
                    let {
                        children: t,
                        ...n
                    } = e;
                    return (0, a.Zz)() || (0, a.dm)() ? t : (0, Z.jsx)(o.Z, {
                        isBooking: n.is_booking,
                        appointmentProfile: n.appointment_profile,
                        appointmentStartDate: n.appointment_start_date,
                        step: "identification",
                        children: t
                    })
                },
                w = e => (0, Z.jsx)(S, { ...e,
                    children: (0, Z.jsx)(N, {})
                }),
                k = () => {
                    const {
                        data: e
                    } = (0, i.Z)({
                        url: "/account/marketing_consent/new.json"
                    });
                    return (0, Z.jsx)(w, { ...e
                    })
                }
        },
        230999: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => G
            });
            var i = n(184481),
                a = n(784600),
                o = n(5212),
                s = n(294184),
                l = n.n(s),
                r = n(24553),
                c = n(453040),
                d = n(366699),
                m = n(462814),
                p = n(545763),
                u = n(445884),
                h = n(764433),
                _ = n(580163),
                x = n(288802),
                g = n(990626),
                v = n(708221),
                f = n(159162),
                Z = n(785893);
            const j = e => {
                    let {
                        onCallNumberClick: t,
                        onChangeNumberClick: n
                    } = e;
                    return (0, Z.jsxs)("div", {
                        className: "dl-margin-t-16",
                        children: [(0, Z.jsx)(c.Z, {
                            uiStyle: "body-xs-regular",
                            children: u.Z.t("accounts.phone_verification.receive_or_check_number")
                        }), (0, Z.jsxs)(c.Z, {
                            uiStyle: "body-xs-regular",
                            component: "div",
                            children: [
                                ["-", u.Z.t("accounts.phone_verification.correct_number"), u.Z.t("common.colon")].join(" "), (0, Z.jsx)("a", {
                                    href: "#",
                                    onClick: e => {
                                        e.preventDefault(), x.Z.trackGtmEvent({
                                            category: g.ZP.GTM_CATEGORIES.ACCOUNT_CREATION_PHONE_VALIDATION,
                                            action: g.ZP.GTM_EVENTS.RECEIVE_A_PHONE_CALL
                                        }), t(e)
                                    },
                                    children: u.Z.t("accounts.phone_verification.receive_new_code")
                                })
                            ]
                        }), (0, Z.jsxs)(c.Z, {
                            uiStyle: "body-xs-regular",
                            component: "div",
                            children: [
                                ["-", u.Z.t("accounts.phone_verification.incorrect_number"), u.Z.t("common.colon")].join(" "), (0, Z.jsx)("a", {
                                    href: "#",
                                    onClick: e => {
                                        e.preventDefault(), x.Z.trackGtmEvent({
                                            category: g.ZP.GTM_CATEGORIES.ACCOUNT_CREATION_PHONE_VALIDATION,
                                            action: g.ZP.GTM_EVENTS.CHANGE_PHONE_NUMBER
                                        }), n(e)
                                    },
                                    children: u.Z.t("accounts.phone_verification.change_phone_number")
                                })
                            ]
                        }), (0, Z.jsx)("br", {}), window.onPartnerDomain ? null : (0, Z.jsx)(c.Z, {
                            uiStyle: "body-xs-regular",
                            children: u.Z.t("accounts.phone_verification.get_more_info_html", {
                                link: (0, Z.jsx)("a", {
                                    href: "/help?source=internal_link",
                                    target: "_blank",
                                    onClick: () => {
                                        x.Z.trackGtmEvent({
                                            category: g.ZP.GTM_CATEGORIES.ACCOUNT_CREATION_PHONE_VALIDATION,
                                            action: g.ZP.GTM_EVENTS.HELP_PAGE
                                        })
                                    },
                                    children: u.Z.t("accounts.phone_verification.online_help")
                                })
                            })
                        })]
                    })
                },
                b = e => {
                    let {
                        phone_number: t,
                        is_mobile_number: n,
                        onHelpClick: a,
                        onChangeNumberClick: s,
                        onSubmitParams: l,
                        onSuccess: b,
                        onFailure: y,
                        captchaRequired: N
                    } = e;
                    const S = (0, _.ZP)(),
                        w = ((0, i.useContext)(r.UNSAFE_NavigationContext) ? r.useNavigate : () => null)(),
                        [k, T] = (0, i.useState)(N),
                        [C, E] = (0, i.useState)(0),
                        [P, I] = (0, i.useState)(null);
                    return (0, Z.jsxs)("div", {
                        children: [(0, Z.jsx)(c.Z, {
                            uiStyle: "DEPRECATED-title-sub-regular",
                            component: "div",
                            align: "center",
                            "aria-live": "polite",
                            children: [u.Z.t("accounts.phone_verification.enter_the_code"), n ? u.Z.t("accounts.phone_verification.by_sms") : u.Z.t("accounts.phone_verification.by_phone")].join(" ")
                        }), (0, Z.jsx)(c.Z, {
                            uiStyle: "title-s-bold",
                            align: "center",
                            children: t
                        }), (0, Z.jsx)(h.Z, {
                            url: "/account/verify.json",
                            method: "post",
                            trigger: "onSubmit",
                            onSuccess: e => {
                                let {
                                    data: t
                                } = e;
                                if (x.Z.trackGtmEvent({
                                        category: g.ZP.GTM_CATEGORIES.ACCOUNT_CREATION_PHONE_VALIDATION,
                                        action: g.ZP.GTM_EVENTS.PHONE_NUMBER_VALIDATED
                                    }), null === b || void 0 === b || b(t), null === t || void 0 === t || !t.redirection) return;
                                const {
                                    redirection: n,
                                    message: i
                                } = t;
                                (0, o.rl)() ? (w(n), i && setTimeout((() => S({
                                    message: i,
                                    uiStyle: "success"
                                })), 300)) : (0, v.Z)(n)
                            },
                            onFailure: e => {
                                let {
                                    data: {
                                        error: t,
                                        code_invalid: n,
                                        captcha_required: i
                                    }
                                } = e;
                                const a = ((e, t, n) => e || t && u.Z.t("accounts.errors.invalid_confirmation_code") || n && u.Z.t("common.captcha_required") || u.Z.t("common.error"))(t, n, i);
                                I(a), null === y || void 0 === y || y(a), T(i), E(C + 1)
                            },
                            children: e => {
                                let {
                                    onSubmit: t,
                                    loading: n,
                                    success: i
                                } = e;
                                return (0, Z.jsx)(m.Z, {
                                    horizontal: !1,
                                    onSubmit: e => {
                                        x.Z.trackGtmEvent({
                                            category: g.ZP.GTM_CATEGORIES.ACCOUNT_CREATION_PHONE_VALIDATION,
                                            action: g.ZP.GTM_EVENTS.SUBMIT
                                        }), t({ ...e,
                                            ...l
                                        })
                                    },
                                    validityIndicators: !1,
                                    children: e => {
                                        const t = e.values[f.nY],
                                            a = Boolean(e.errors) || !e.values || !e.values.signup_code || !e.values.signup_code.length || k && !t || n || i;
                                        return (0, Z.jsxs)("div", {
                                            children: [(0, Z.jsx)(d.Z, {
                                                pattern: "[0-9]*",
                                                field: "signup_code",
                                                autoComplete: "off",
                                                placeholder: u.Z.t("accounts.phone_verification.code_placeholder"),
                                                maxLength: 3,
                                                label: null,
                                                error: P,
                                                validate: e => !(!e || 3 === e.length) && u.Z.t("accounts.errors.invalid_confirmation_code"),
                                                required: !0,
                                                autoFocus: !0
                                            }), k && (0, Z.jsx)(f.K_, {
                                                nonce: C
                                            }), (0, Z.jsx)(p.Z, {
                                                className: "dl-margin-t-16",
                                                type: "submit",
                                                block: !0,
                                                disabled: a,
                                                children: u.Z.t("accounts.phone_verification.confirm")
                                            })]
                                        })
                                    }
                                })
                            }
                        }), (0, Z.jsx)(j, {
                            onCallNumberClick: a,
                            onChangeNumberClick: s
                        })]
                    })
                };
            var y = n(929014);
            const N = e => {
                let {
                    phone_number: t,
                    onSubmit: n
                } = e;
                return (0, Z.jsxs)("div", {
                    children: [(0, Z.jsx)(c.Z, {
                        uiStyle: "DEPRECATED-title-sub-regular",
                        component: "div",
                        align: "center",
                        children: u.Z.t("accounts.phone_verification.enter_your_phone_number")
                    }), !t && (0, Z.jsx)(y.Z, {
                        variant: "deprecated-alert-interface",
                        uiStyle: "warning",
                        className: "dl-margin-t-16",
                        children: u.Z.t("patient_mobile.root.account.edit.detached_phone_number")
                    }), (0, Z.jsx)(h.Z, {
                        url: "/account/send_signup_code.json",
                        method: "post",
                        trigger: "onSubmit",
                        onSuccess: n,
                        children: e => {
                            let {
                                onSubmit: n,
                                loading: i,
                                data: a
                            } = e;
                            return (0, Z.jsxs)(m.Z, {
                                defaultValues: {
                                    phone_number: t
                                },
                                onSubmit: n,
                                children: [(0, Z.jsx)(d.Z, {
                                    field: "phone_number",
                                    type: "tel",
                                    autoComplete: "off",
                                    label: null,
                                    required: !0,
                                    error: a && a.error
                                }), t && (0, Z.jsx)(c.Z, {
                                    children: u.Z.t("accounts.phone_verification.confirm_via_voice_code_tooltip")
                                }), (0, Z.jsx)("div", {
                                    className: "dl-margin-y-16",
                                    children: (0, Z.jsx)(p.Z, {
                                        type: "submit",
                                        block: !0,
                                        disabled: i,
                                        children: u.Z.t("accounts.phone_verification.verify_my_number")
                                    })
                                }), window.onPartnerDomain ? null : (0, Z.jsx)(c.Z, {
                                    component: "div",
                                    children: u.Z.t("accounts.phone_verification.call_support_if_needed", {
                                        number: u.Z.t("support_phone_number")
                                    })
                                }), (0, Z.jsx)(c.Z, {
                                    component: "div",
                                    children: u.Z.t("accounts.phone_verification.phone_number_only_for_practitioners")
                                })]
                            })
                        }
                    })]
                })
            };
            var S = n(78599),
                w = n(516590),
                k = n(710270),
                T = n(325391),
                C = n(992129),
                E = n(592290);
            const P = "CHANGE_PHONE_NUMBER",
                I = "HELP_PAGE",
                A = "RECEIVE_A_PHONE_CALL",
                D = {
                    [P]: "patient_signup_phone_modification",
                    [I]: "patient_signup_phone_help_online",
                    [A]: "patient_signup_phone_validation_call"
                },
                M = e => {
                    let {
                        isMobileNumber: t,
                        onChangeNumberClick: n,
                        phoneNumber: a
                    } = e;
                    const [s, l] = (0, i.useState)(!1), r = (0, _.ZP)(), {
                        receiveSignupCode: d
                    } = (0, k.Z)({
                        url: "/account/send_signup_code.json",
                        trigger: "receiveSignupCode",
                        method: "post",
                        onFailure: () => {
                            r({
                                message: u.Z.t("accounts.phone_verification.revamped.receive_a_phone_call_error"),
                                uiStyle: "error"
                            })
                        },
                        onSuccess: () => {
                            r({
                                message: u.Z.t("accounts.phone_verification.revamped.receive_a_phone_call_success"),
                                uiStyle: "success"
                            })
                        }
                    }), m = [{
                        icon: "mobile",
                        text: u.Z.t("accounts.phone_verification.revamped.change_phone_number"),
                        name: P,
                        target: "_self",
                        href: "#"
                    }, {
                        icon: "comment",
                        text: u.Z.t("accounts.phone_verification.revamped.online_help"),
                        name: I,
                        target: "_blank",
                        href: "/help?source=internal_link"
                    }, {
                        icon: "phone",
                        text: u.Z.t("accounts.phone_verification.revamped.get_phone_call"),
                        name: A,
                        target: "_self",
                        href: "#"
                    }];
                    return (0, Z.jsxs)(Z.Fragment, {
                        children: [(0, Z.jsx)(c.Z, {
                            component: "div",
                            uiStyle: "body-s-regular",
                            color: "primary-110",
                            onClick: () => l(!s),
                            "data-test": "code_not_received",
                            children: u.Z.t("accounts.phone_verification.revamped.not_received_" + (t ? "by_sms" : "by_phone"))
                        }), (0, Z.jsx)(E.ZP, {
                            show: s,
                            onHide: () => l(!1),
                            children: (0, Z.jsx)(E.Ng, {
                                children: (0, Z.jsx)("div", {
                                    className: "dl-flex-column dl-flex-start",
                                    children: m.map((e => {
                                        let {
                                            icon: t,
                                            text: i,
                                            target: s,
                                            href: r,
                                            name: c
                                        } = e;
                                        return (0, Z.jsx)(E.h6, {
                                            actionText: i,
                                            icon: t,
                                            target: s,
                                            href: r,
                                            onClick: e => ((e, t) => {
                                                switch ((0, w.ZP)({
                                                    name: D[t],
                                                    details: {
                                                        country: (0, o.rZ)()
                                                    }
                                                }), x.Z.trackGtmEvent({
                                                    category: g.ZP.GTM_CATEGORIES.ACCOUNT_CREATION_PHONE_VALIDATION,
                                                    action: g.ZP.GTM_EVENTS[t]
                                                }), t) {
                                                    case P:
                                                        e.preventDefault(), n();
                                                        break;
                                                    case A:
                                                        e.preventDefault(), d({
                                                            phone_number: a
                                                        })
                                                }
                                                l(!1)
                                            })(e, c)
                                        }, c)
                                    }))
                                })
                            })
                        })]
                    })
                },
                R = e => {
                    let {
                        phoneNumber: t,
                        onChangeNumberClick: n,
                        isMobileNumber: a,
                        onSuccess: s,
                        onFailure: l
                    } = e;
                    const [r, p] = (0, i.useState)(null), {
                        current_step: h = 0,
                        total_steps: _ = 0
                    } = (0, S.e3)(window.location.search), v = e => (0, w.ZP)({
                        name: "patient_signup_phone_code_validate",
                        details: {
                            country: (0, o.rZ)(),
                            success: e
                        }
                    }), {
                        verifySignUpCode: f,
                        loading: j
                    } = (0, k.Z)({
                        url: "/account/verify.json",
                        trigger: "verifySignUpCode",
                        method: "post",
                        onFailure: e => {
                            let {
                                data: {
                                    error: t,
                                    code_invalid: n,
                                    captcha_required: i
                                }
                            } = e;
                            v(!1);
                            const a = (o = n, s = i, t || o && u.Z.t("accounts.errors.invalid_confirmation_code") || s && u.Z.t("common.captcha_required") || u.Z.t("common.error"));
                            var o, s;
                            p(a), null === l || void 0 === l || l(a)
                        },
                        onSuccess: e => {
                            let {
                                data: t
                            } = e;
                            v(!0), null === s || void 0 === s || s(t)
                        }
                    });
                    return (0, Z.jsxs)(m.Z, {
                        className: "dl-authentication-form dl-white-bg dl-padding-x-16 dl-padding-t-16 dl-flex-column dl-justify-between",
                        autoComplete: "off",
                        horizontal: !1,
                        requiredIndicators: !1,
                        onSubmit: e => {
                            (e => {
                                x.Z.trackGtmEvent({
                                    category: g.ZP.GTM_CATEGORIES.ACCOUNT_CREATION_PHONE_VALIDATION,
                                    action: g.ZP.GTM_EVENTS.PHONE_NUMBER_VALIDATED
                                }), f(e)
                            })(e)
                        },
                        children: [(0, Z.jsxs)("div", {
                            children: [(0, Z.jsx)(T.Z, {
                                name: "phone"
                            }), (0, Z.jsx)(c.Z, {
                                component: "div",
                                uiStyle: "title-l-bold",
                                className: "dl-margin-t-16",
                                children: a ? u.Z.t("accounts.phone_verification.revamped.title_code_by_sms") : u.Z.t("accounts.phone_verification.revamped.title_code_by_phone")
                            }), (0, Z.jsx)(d.Z, {
                                id: "signup_code",
                                field: "signup_code",
                                autoComplete: "off",
                                className: "dl-margin-t-16 dl-margin-b-8",
                                placeholder: u.Z.t("accounts.phone_verification.revamped.code_placeholder"),
                                maxLength: 3,
                                label: "",
                                required: !0,
                                autoFocus: !0,
                                validate: e => !!e && (!(!r && 3 === (null === e || void 0 === e ? void 0 : e.length)) && u.Z.t("accounts.errors.invalid_confirmation_code")),
                                error: r,
                                onChange: () => p(null),
                                type: "number",
                                pattern: "[0-9]*"
                            }), (0, Z.jsx)(c.Z, {
                                component: "div",
                                uiStyle: "body-s-regular",
                                color: "neutral-090",
                                "aria-live": "polite",
                                children: u.Z.t("accounts.phone_verification.revamped." + (a ? "mobile_phone_hint" : "home_phone_hint"), {
                                    phone_number: t
                                })
                            }), (0, Z.jsx)(M, {
                                isMobileNumber: a,
                                onChangeNumberClick: n,
                                phoneNumber: t
                            })]
                        }), (0, Z.jsx)(C.Z, {
                            currentStep: Number(h),
                            totalStep: Number(_),
                            disabled: j
                        })]
                    })
                };
            var O = n(895955),
                L = n(328638);
            const F = e => {
                    let {
                        phoneNumber: t,
                        onSubmit: n
                    } = e;
                    const [a, o] = (0, i.useState)(!1), [s, l] = (0, i.useState)(""), d = (0, r.useNavigate)(), {
                        verifyPhoneNumber: p,
                        loading: h
                    } = (0, k.Z)({
                        url: "/account/send_signup_code.json",
                        trigger: "verifyPhoneNumber",
                        method: "post",
                        onFailure: () => o(!0),
                        onSuccess: e => {
                            let {
                                input: {
                                    phone_number: t
                                }
                            } = e;
                            n({
                                phone_number: t
                            })
                        }
                    });
                    return (0, Z.jsxs)(Z.Fragment, {
                        children: [(0, Z.jsxs)(m.Z, {
                            className: "dl-authentication-form dl-white-bg dl-padding-x-16 dl-padding-y-24 dl-flex-column dl-justify-between dl-full-height",
                            autoComplete: "off",
                            horizontal: !1,
                            requiredIndicators: !1,
                            onSubmit: e => {
                                l(e.phone_number), p(e)
                            },
                            defaultValues: {
                                phone_number: t
                            },
                            children: [(0, Z.jsxs)("div", {
                                children: [(0, Z.jsx)(L.Z, {
                                    state: {},
                                    hideHint: !0
                                }), (0, Z.jsx)(c.Z, {
                                    component: "div",
                                    uiStyle: "body-s-regular",
                                    color: "neutral-090",
                                    className: "dl-margin-t-16",
                                    children: u.Z.t("accounts.phone_verification.confirm_via_voice_code_tooltip")
                                }), (0, Z.jsx)(c.Z, {
                                    component: "div",
                                    uiStyle: "body-s-regular",
                                    color: "neutral-090",
                                    className: "dl-margin-t-16",
                                    children: u.Z.t("accounts.phone_verification.phone_number_only_for_practitioners")
                                })]
                            }), (0, Z.jsx)(C.Z, {
                                hideProgress: !0,
                                disabled: h,
                                buttonText: u.Z.t("accounts.phone_verification.revamped.confirm_phone_number")
                            })]
                        }), (0, Z.jsx)(O.Z, {
                            isModalVisible: a,
                            username: s,
                            onModalSubmit: () => d("/sessions/new"),
                            usernameType: "phone",
                            onModalDismiss: () => o(!1),
                            reason: "username_already_exists"
                        })]
                    })
                },
                q = "submit_code",
                z = "resend_code",
                G = e => {
                    let {
                        onChangeNumber: t,
                        onSuccess: n,
                        onFailure: s,
                        onSubmitParams: r,
                        phoneNumber: c,
                        isMobile: d,
                        captchaRequired: m,
                        withinModal: p
                    } = e;
                    const u = (0, o.Zz)() || (0, o.dm)(),
                        [h, _] = (0, i.useState)({
                            form: c ? q : z,
                            is_mobile_number: d,
                            phone_number: c
                        }),
                        x = () => _({ ...h,
                            form: z
                        }),
                        g = t || x;
                    return u ? (0, Z.jsx)(a.Z, {
                        className: l()({
                            "dl-margin-16": !p
                        }),
                        children: h.form === z ? (0, Z.jsx)(N, {
                            onSubmit: e => {
                                let {
                                    input: t
                                } = e;
                                return _({ ...h,
                                    form: q,
                                    is_mobile_number: !1,
                                    phone_number: t.phone_number
                                })
                            },
                            phone_number: h.phone_number
                        }) : (0, Z.jsx)(b, {
                            onSubmitParams: r,
                            onSuccess: n,
                            onFailure: s,
                            captchaRequired: m,
                            phone_number: h.phone_number,
                            is_mobile_number: h.is_mobile_number,
                            onHelpClick: x,
                            onChangeNumberClick: g
                        })
                    }) : h.form === z ? (0, Z.jsx)(F, {
                        onSubmit: e => {
                            let {
                                phone_number: t
                            } = e;
                            return _({ ...h,
                                form: q,
                                is_mobile_number: !1,
                                phone_number: t
                            })
                        },
                        phoneNumber: h.phone_number
                    }) : (0, Z.jsx)(R, {
                        phoneNumber: h.phone_number,
                        isMobileNumber: h.is_mobile_number,
                        onChangeNumberClick: g,
                        onSuccess: n,
                        onFailure: s
                    })
                }
        },
        534130: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => I
            });
            var i = n(184481),
                a = n(24553),
                o = n(288802),
                s = n(990626),
                l = n(445884),
                r = n(294184),
                c = n.n(r),
                d = n(545763),
                m = n(845126),
                p = n(177949),
                u = n(710270),
                h = n(511466),
                _ = n(169339),
                x = n(383915),
                g = n(968461),
                v = n(329347),
                f = n(755506),
                Z = n(338115),
                j = n(324641);
            var b = n(785893);
            const y = e => {
                let {
                    appointmentId: t,
                    disableActions: n,
                    closeModal: a,
                    show: r,
                    date: c,
                    doctorName: m,
                    onCancelationConfirm: y,
                    openConversionModal: N,
                    setRules: S,
                    isRequestCancelation: w
                } = e;
                const {
                    destroy: k,
                    loading: T
                } = (0, p.Z)({
                    appointmentId: t,
                    onSuccess: () => a(),
                    onFailure: () => a()
                }), {
                    loading: C,
                    fetchEligibility: E,
                    data: {
                        eligible_for_conversion: P
                    } = {}
                } = (0, u.Z)({
                    url: `/appointments/${t}/telehealth_conversion/new`,
                    trigger: "fetchEligibility",
                    onSuccess: e => {
                        let {
                            data: {
                                rules: t
                            }
                        } = e;
                        S(t)
                    }
                }), I = e => {
                    o.Z.trackGtmEvent({
                        category: s.ZP.GTM_CATEGORIES.ACCOUNT_APPOINTMENT_DETAILS,
                        action: s.ZP.GTM_EVENTS.CANCELLATION_VALIDATION_POPIN,
                        label: e
                    })
                };
                (0, i.useEffect)((() => {
                    r && (I("display"), E())
                }), [r]);
                const A = w ? "patient_common.root.appointments.cancelation.header_request_cancelation" : "patient_common.root.appointments.cancelation.header",
                    D = w ? "patient_common.root.appointments.cancelation.keep_request" : "patient_common.root.appointments.cancelation.keep_appointment";
                return (0, b.jsxs)("div", {
                    children: [(0, b.jsx)(v.Z, {
                        show: n,
                        loader: !0
                    }), (0, b.jsxs)(_.Z, {
                        uiStyle: "normal",
                        size: "medium",
                        onHide: () => {
                            I("close"), a()
                        },
                        show: r,
                        title: l.Z.t(A),
                        children: [C ? (0, b.jsx)(h.Z, {
                            className: "dl-margin-t-32"
                        }) : (0, b.jsxs)(x.Z, {
                            children: [P && (0, b.jsxs)(b.Fragment, {
                                children: [(0, b.jsx)(j.Z, {
                                    source: "appointment_cancel",
                                    appointmentId: t,
                                    openConversionModal: N,
                                    closeModal: a
                                }), (0, b.jsx)(f.Z, {
                                    className: "dl-margin-t-24 dl-margin-b-24"
                                })]
                            }), (0, b.jsx)(Z.Z, {
                                doctorName: m,
                                startDate: c,
                                isRequestCancelation: w
                            })]
                        }), (0, b.jsxs)(g.Z, {
                            className: "dl-cancelation-modal-footer",
                            children: [(0, b.jsx)(d.Z, {
                                block: !0,
                                disabled: n || T,
                                onTap: e => {
                                    e.stopPropagation(), I("back"), a()
                                },
                                uiStyle: "info-link",
                                children: l.Z.t(D)
                            }), (0, b.jsx)(d.Z, {
                                block: !0,
                                disabled: n || T,
                                onTap: e => {
                                    e.stopPropagation(), y ? y() : (I("confirm"), k())
                                },
                                uiStyle: "danger",
                                children: l.Z.t("patient_common.root.appointments.cancelation.confirmation_accept")
                            })]
                        })]
                    })]
                })
            };
            var N = n(929014),
                S = n(592290),
                w = n(5212);
            const k = e => {
                let {
                    closeModal: t,
                    show: n,
                    doctorPhone: a,
                    doctorName: r,
                    tooLate: c
                } = e;
                (0, i.useEffect)((() => {
                    n && o.Z.trackGtmEvent({
                        category: s.ZP.GTM_CATEGORIES.ACCOUNT_APPOINTMENT_DETAILS,
                        action: "cancellationImpossiblePopin",
                        label: "display"
                    })
                }), [n]);
                const m = e => {
                        e.stopPropagation(), t()
                    },
                    p = a ? l.Z.t("patient_common.root.appointments.cancelation.how_to_contact_html", {
                        phone: a,
                        name: r
                    }) : r ? l.Z.t("patient_common.root.appointments.cancelation.how_to_contact_no_phone_number_html", {
                        name: r
                    }) : l.Z.t("patient_common.root.appointments.cancelation.how_to_contact_no_phone_number_no_doctor_name_html"),
                    u = () => (0, b.jsxs)(N.Z, {
                        variant: "deprecated-alert-interface",
                        uiStyle: "error",
                        children: [(0, b.jsx)("strong", {
                            children: l.Z.t("patient_common.root.appointments.cancelation.cannot_cancel")
                        }), (0, b.jsx)("br", {}), c ? l.Z.t("patient_common.root.appointments.cancelation.too_late_message") : null, (0, b.jsx)("br", {}), p]
                    });
                return (0, w.Zz)() ? (0, b.jsxs)(_.Z, {
                    show: n,
                    onHide: t,
                    title: l.Z.t("common.warning"),
                    children: [(0, b.jsx)(x.Z, {
                        children: (0, b.jsx)(u, {})
                    }), (0, b.jsx)(g.Z, {
                        children: (0, b.jsx)(d.Z, {
                            onTap: m,
                            children: l.Z.t("common.actions.continue")
                        })
                    })]
                }) : (0, b.jsxs)(S.ZP, {
                    show: n,
                    onHide: t,
                    title: l.Z.t("common.warning"),
                    children: [(0, b.jsx)(S.Ng, {
                        children: (0, b.jsx)(u, {})
                    }), (0, b.jsx)(S.ze, {
                        children: (0, b.jsx)(d.Z, {
                            block: !0,
                            uiStyle: "info-link",
                            onTap: m,
                            children: l.Z.t("common.actions.continue")
                        })
                    })]
                })
            };
            var T = n(47871),
                C = n(516590),
                E = n(747317),
                P = n(800274);
            const I = e => {
                let {
                    appointmentId: t,
                    tooLate: n,
                    uncancelableReason: r,
                    cancelable: p,
                    pricing: u,
                    needsPreparation: h,
                    future: _,
                    doctorName: x,
                    doctorAvatar: g,
                    date: v,
                    buttonClassName: f,
                    block: Z = !0,
                    icon: j = !0,
                    isRequestCancelation: N,
                    ...S
                } = e;
                const [I, A] = (0, i.useState)(!1), [D, M] = (0, i.useState)(!1), [R, O] = (0, i.useState)([]), L = (0, w.Zz)(), F = (0, a.useNavigate)(), q = (0, P.ZP)(), z = e => (0, C.ZP)({
                    itemId: t,
                    itemType: E.i.APPOINTMENT,
                    name: e,
                    details: {
                        needsPreparation: h,
                        pricing: u,
                        uncancelableReason: r
                    }
                });
                if (!p && !_) return null;
                const G = N ? "patient_common.root.appointments.cancelation.cancel_request" : "patient_common.root.appointments.cancelation.cancel_action",
                    V = p ? y : k;
                return (0, b.jsxs)("div", {
                    children: [(0, b.jsx)(V, {
                        show: I,
                        closeModal: () => A(!1),
                        openConversionModal: p ? () => M(!0) : null,
                        appointmentId: t,
                        doctorName: x,
                        date: v,
                        setRules: O,
                        isRequestCancelation: N,
                        ...S
                    }), (0, b.jsx)(T.Z, {
                        show: D,
                        closeModal: () => M(!1),
                        openCancelationModal: () => A(!0),
                        appointmentId: t,
                        rules: R
                    }), (0, b.jsxs)(d.Z, {
                        uiStyle: "link-danger",
                        onTap: e => {
                            !L && p && q ? (z("cancelation_attempt"), n && z("late_cancelation_attempt"), F(`/appointments/${t}/cancel`, {
                                state: {
                                    doctor: {
                                        name_with_title: x,
                                        cloudinary_public_id: g
                                    },
                                    startDate: v,
                                    appointmentId: t,
                                    ...S
                                }
                            })) : (e => {
                                e.stopPropagation(), A(!0), o.Z.trackGtmEvent({
                                    category: s.ZP.GTM_CATEGORIES.ACCOUNT_APPOINTMENT_DETAILS,
                                    action: "cancelAppointment"
                                }), z(p ? "cancelation_attempt" : "not_cancelable_attempt"), n && z("late_cancelation_attempt")
                            })(e)
                        },
                        block: Z,
                        className: c()("dl-margin-y-16", f),
                        children: [j && (0, b.jsx)(m.Z, {
                            name: "regular/calendar-xmark",
                            size: "xsmall",
                            className: "dl-margin-r-8",
                            color: "error-090"
                        }), (0, b.jsx)("span", {
                            children: l.Z.t(G)
                        })]
                    })]
                })
            }
        },
        338115: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var i = n(977954),
                a = n.n(i),
                o = n(445884),
                s = n(453040),
                l = n(929014),
                r = n(785893);
            const c = e => {
                let {
                    doctorName: t,
                    startDate: n,
                    isRequestCancelation: i
                } = e;
                const c = a()(n).diff(a()(), "hours") < 48,
                    d = i ? "patient_common.root.appointments.cancelation.confirmation_cancel_request" : "patient_common.root.appointments.cancelation.confirmation",
                    m = i ? "patient_common.root.appointments.cancelation.confirmation_cancel_request_with_date_only" : "patient_common.root.appointments.cancelation.confirmation_with_date_only";
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.Z, {
                        align: "center",
                        block: !0,
                        uiStyle: "title-s-bold",
                        transform: "none",
                        className: "dl-cancelation-modal-sub dl-margin-y-16",
                        children: t ? o.Z.t(d, {
                            date: a()(n).localizeTimeToParisTimeZone("dddd D MMMM \xe0 HH:mm"),
                            name: t
                        }) : o.Z.t(m, {
                            date: a()(n).localizeTimeToParisTimeZone("dddd D MMMM \xe0 HH:mm")
                        })
                    }), c && (0, r.jsx)(l.Z, {
                        variant: "deprecated-alert-interface",
                        uiStyle: "warning",
                        children: (0, r.jsx)(s.Z, {
                            className: "dl-padding-r-16 dl-padding-t-8",
                            children: o.Z.t("patient_common.root.appointments.cancelation.confirmation_disclaimer_html")
                        })
                    })]
                })
            }
        },
        324641: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var i = n(184481),
                a = n(453040),
                o = n(545763),
                s = n(784600),
                l = n(406288),
                r = n(445884),
                c = n(516590),
                d = n(747317),
                m = n(240227),
                p = n.n(m);
            var u = n(5212),
                h = n(785893);
            const _ = e => {
                let {
                    source: t,
                    openConversionModal: n,
                    appointmentId: m,
                    closeModal: _
                } = e;
                const x = (0, u.rl)();
                return (0, i.useEffect)((() => {
                    (0, c.ZP)({
                        name: "telehealth_eligible_to_conversion",
                        itemType: d.i.APPOINTMENT,
                        itemId: m,
                        details: {
                            source: t
                        }
                    })
                }), []), (0, h.jsx)(s.Z, {
                    fullWidth: !0,
                    className: "dl-margin-b dl-padding-0",
                    children: (0, h.jsxs)(l.Z, {
                        contentClassName: "dl-rounded-borders dl-convert-to-video-container-" + (x ? "mobile dl-padding-0" : "desktop"),
                        children: [(0, h.jsxs)("div", {
                            className: "dl-text-container",
                            children: [(0, h.jsx)(a.Z, {
                                uiStyle: "title-s-bold",
                                className: "dl-margin-t-16",
                                component: "h2",
                                children: r.Z.t("patient_common.root.appointments.convert_to_video.title")
                            }), (0, h.jsx)(a.Z, {
                                block: !0,
                                uiStyle: "body-s-regular",
                                className: "dl-margin-t-16",
                                children: r.Z.t("patient_common.root.appointments.convert_to_video.body")
                            }), (0, h.jsx)(o.Z, {
                                leftIcon: "solid/video",
                                className: "dl-margin-t-16 dl-convert-to-video-button",
                                onTap: () => {
                                    n(), _ && _()
                                },
                                children: r.Z.t("patient_common.root.appointments.convert_to_video.button")
                            })]
                        }), (0, h.jsx)(p(), {
                            className: "dl-tlh-illustration-" + (x ? "mobile" : "desktop")
                        })]
                    })
                })
            }
        },
        60523: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var i = n(445884),
                a = n(294184),
                o = n.n(a),
                s = n(975645),
                l = n(924722),
                r = n(545763),
                c = n(539453);
            var d = n(785893);
            const m = "appointments.appointment_details",
                p = e => {
                    let {
                        masterPatient: t,
                        openMasterPatientForm: n,
                        ...a
                    } = e;
                    const p = t.is_complete,
                        u = t.mismatchInsurance || !p;
                    return (0, d.jsxs)("div", {
                        onClick: () => !p && n(),
                        className: "dl-master-patient-item",
                        children: [(0, d.jsx)(l.Z, {
                            label: (0, d.jsxs)("div", {
                                children: [(0, d.jsx)("span", {
                                    className: o()({
                                        "dl-main-master-patient": (0, c.t0)(t)
                                    }),
                                    children: (0, s.WU)(t)
                                }), (0, c.t0)(t) ? (0, d.jsx)("span", {
                                    className: "dl-margin-l-8 dl-main-master-patient-its-me",
                                    children: ` ${i.Z.t("its_me",{scope:m})}`
                                }) : null, t.mismatchInsurance ? (0, d.jsxs)("span", {
                                    className: "dl-padding-x-8",
                                    children: [" (", i.Z.t("public_insurance", {
                                        scope: m
                                    }), ")"]
                                }) : null]
                            }),
                            ...a,
                            className: o()("dl-master-patient-item-label", {
                                "dl-master-patient-disabled": u,
                                "dl-master-patient-completed": p
                            }),
                            disabled: u
                        }), p ? null : (0, d.jsx)(r.Z, {
                            className: "dl-master-patient-complete-button",
                            uiStyle: "info-link",
                            children: i.Z.t("complete_informations", {
                                scope: m
                            })
                        })]
                    })
                }
        },
        219139: (e, t, n) => {
            "use strict";
            n.d(t, {
                H: () => s,
                Z: () => l
            });
            var i = n(184481),
                a = n(785893);
            const o = (0, i.createContext)(),
                s = e => {
                    let {
                        children: t
                    } = e;
                    const [n, s] = (0, i.useState)({});
                    return (0, a.jsx)(o.Provider, {
                        value: {
                            errors: n,
                            setErrors: e => s((t => ({ ...t,
                                ...e
                            })))
                        },
                        children: t
                    })
                },
                l = o
        },
        30049: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                BookingChargeViewWithRouter: () => p,
                default: () => u
            });
            var i = n(184481),
                a = n(24553),
                o = n(800274),
                s = n(985882),
                l = n(710270),
                r = n(5212),
                c = n(202206),
                d = n(785893);
            const m = e => {
                    let {
                        Wrapper: t = i.Fragment,
                        appointmentIdFromSlim: n
                    } = e;
                    const m = (0, o.ZP)(),
                        p = (0, a.useParams)(),
                        u = n || p.id,
                        {
                            loading: h,
                            error: _,
                            data: x
                        } = (0, l.Z)({
                            url: `/appointments/${u}.json`,
                            trigger: m ? void 0 : "dontTrigger"
                        });
                    return m ? h ? (0, r.rl)() ? (0, d.jsx)(s.Z, {
                        loading: !0
                    }) : null : _ ? (0, d.jsx)(a.Navigate, {
                        replace: !0,
                        to: "/"
                    }) : (0, d.jsx)(t, {
                        children: (0, d.jsx)(c.Z, {
                            appointment: x
                        })
                    }) : (0, d.jsx)(a.Navigate, {
                        replace: !0,
                        to: {
                            pathname: "/appointments/anonymous/charges/new",
                            search: window.location.search
                        }
                    })
                },
                p = e => (0, d.jsx)(a.BrowserRouter, {
                    children: (0, d.jsx)(m, { ...e
                    })
                }),
                u = m
        },
        580849: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Z
            });
            var i = n(184481),
                a = n(292611),
                o = n(647087),
                s = n(597043),
                l = n(452838),
                r = n(53500),
                c = n(924722),
                d = n(453040),
                m = n(253565),
                p = n(785893);
            const u = e => {
                let {
                    id: t,
                    value: n,
                    blockingMessage: o,
                    onChange: s,
                    ...l
                } = e;
                const [r, c] = (0, i.useState)(!0), u = m.Z.config.ssnConfig.isSocialSecurityValid();
                return (0, p.jsxs)(p.Fragment, {
                    children: [(0, p.jsx)(a.Z, {
                        id: t,
                        type: "text",
                        value: n,
                        isValid: r,
                        isPristine: !1,
                        name: String(t),
                        onBlur: () => {
                            c(u(n))
                        },
                        onChange: e => {
                            !r && u(e.target.value) && c(!0), s(e)
                        },
                        ...l
                    }), (0, p.jsx)(d.Z, {
                        color: "error-090",
                        children: !r && o
                    })]
                })
            };
            var h = n(445884),
                _ = n(478718),
                x = n.n(_),
                g = n(270514),
                v = n(761543);
            const f = {
                    string: "text",
                    price: "number",
                    float: "number",
                    integer: "number"
                },
                Z = e => {
                    let t, {
                        id: n,
                        label: d,
                        type: m,
                        options: _,
                        value: Z,
                        template: j,
                        organizationId: b,
                        ...y
                    } = e;
                    const N = { ...x()(y, "onChange", "required", "placeholder")
                        },
                        S = (0, i.useCallback)(((e, t) => {
                            switch (e) {
                                case g.s:
                                    return h.Z.t("common.coronavirus.custom_field.patient_label");
                                case "vac21":
                                    return h.Z.t("common.coronavirus.vaccination_code.custom_field.patient_label");
                                default:
                                    return t
                            }
                        }), [n]);
                    void 0 !== Z && null !== Z && ("boolean" !== m ? N.value = Z : ["true", "false"].includes(String(Z)) && (N.value = "true" === String(Z)));
                    const w = String(n);
                    switch (m) {
                        case "select":
                        case "fixed_selector":
                        case "selector":
                            N.placeholder || (N.placeholder = h.Z.t("helpers.select.prompt")), t = (0, p.jsx)(l.Z, {
                                id: n,
                                options: (k = _, k && "string" !== typeof k[0] ? k.map((e => {
                                    let [t, n] = e;
                                    return {
                                        label: `${t} - ${n}`,
                                        value: t
                                    }
                                })) : k || []),
                                name: w,
                                block: !0,
                                ...N
                            });
                            break;
                        case "date":
                        case "appointment_after_date":
                        case "appointment_before_date":
                            t = (0, p.jsx)(a.Z, {
                                id: n,
                                name: w,
                                ...N,
                                type: "date"
                            });
                            break;
                        case "boolean":
                            t = (0, p.jsxs)(r.Z, {
                                id: n,
                                name: w,
                                value: Z,
                                ...N,
                                children: [(0, p.jsx)(c.Z, {
                                    label: h.Z.t("common.yes"),
                                    value: !0,
                                    required: "required"
                                }), (0, p.jsx)(c.Z, {
                                    label: h.Z.t("common.no"),
                                    value: !1,
                                    required: "required"
                                })]
                            });
                            break;
                        case "social_security_number":
                            t = (0, p.jsx)(u, {
                                id: n,
                                name: w,
                                blockingMessage: null === j || void 0 === j ? void 0 : j.blocking_message,
                                ...N
                            });
                            break;
                        case "vaccination_code":
                            t = (0, p.jsx)(v.Z, {
                                id: n,
                                name: w,
                                organizationId: b,
                                ...N
                            });
                            break;
                        default:
                            t = (0, p.jsx)(a.Z, {
                                id: n,
                                type: f[m],
                                name: w,
                                ...N
                            })
                    }
                    var k;
                    return (0, p.jsxs)(s.Z, {
                        className: "dl-margin-b-8",
                        children: [(0, p.jsx)(s.Z, {
                            item: !0,
                            className: "dl-margin-b-8",
                            children: (0, p.jsx)(o.Z, {
                                htmlFor: n,
                                children: S(n, d)
                            })
                        }), (0, p.jsx)(s.Z, {
                            item: !0,
                            children: t
                        })]
                    })
                }
        },
        296860: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p,
                l: () => m
            });
            var i = n(184481),
                a = n(441609),
                o = n.n(a),
                s = n(100686),
                l = n(952893),
                r = n(270514),
                c = n(580849),
                d = n(785893);
            const m = (e, t, n, i) => e.filter((e => "not_asked" !== e.booking && (e.required || e.id !== r.s) && (i || "appointment" === e.owner) && ["", t].includes(e.speciality_id) && (o()(e.ref_visit_motive_ids) || e.ref_visit_motive_ids.some((e => Number(e) === Number(n)))))),
                p = (0, i.memo)((e => {
                    let {
                        bookingFields: t,
                        customFieldsValues: n,
                        organizationId: i,
                        specialityId: a,
                        qualificationAnswers: o,
                        setCustomFieldsValues: r,
                        setQualificationAnswers: p,
                        refVisitMotiveId: u,
                        allCustomFields: h = !1,
                        ..._
                    } = e;
                    return (0, d.jsxs)("div", { ..._,
                        children: [t && (0, l.Z)(m(t, a, u, h).map((e => (0, d.jsx)(c.Z, {
                            required: !0,
                            onChange: e => r({ ...n,
                                [e.target.name]: e.target.value
                            }),
                            ...e,
                            value: n[String(e.id)] || ""
                        }, e.id))), (0, d.jsx)(s.Z, {}, "form-space")), o && (0, l.Z)(o.map((e => (0, d.jsx)(c.Z, {
                            required: e.predicate,
                            label: e.template.body,
                            type: e.template.answer_type,
                            organizationId: i,
                            options: e.predicate && e.predicate[1] && e.predicate[1].options,
                            onChange: t => (e => {
                                let {
                                    event: t,
                                    field: n
                                } = e;
                                const i = o.map((e => e.id !== n.id ? e : { ...e,
                                    value: t.target.value
                                }));
                                p(i)
                            })({
                                event: t,
                                field: e
                            }),
                            ...e,
                            value: e.value || ""
                        }, `qualification-${e.id}`))), (0, d.jsx)(s.Z, {}, "form-space-2"))]
                    })
                }))
        },
        761543: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m,
                y: () => d
            });
            var i = n(184481),
                a = n(437124),
                o = n(445884),
                s = n(292611),
                l = n(453040),
                r = n(219139),
                c = n(785893);
            const d = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return !(null === e || void 0 === e || !e.match(/^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}$/))
                },
                m = e => {
                    let {
                        id: t,
                        organizationId: n = "",
                        value: m = "",
                        onChange: p,
                        ...u
                    } = e;
                    const {
                        errors: h,
                        setErrors: _
                    } = (0, i.useContext)(r.Z), [x, g] = (0, i.useState)(!0), v = h[t], f = e => {
                        _({
                            [t]: e
                        })
                    };
                    (0, i.useEffect)((() => {
                        19 === m.length && d(m) && a.ZP.get(`/vaccination_booking_codes/${m}`, {
                            query: {
                                organization_id: n
                            }
                        }).then((() => {
                            f(void 0), g(!0)
                        })).catch((() => {
                            g(!1), f(o.Z.t("common.coronavirus.vaccination_campaign.landing.error"))
                        }))
                    }), [m]);
                    return (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(s.Z, {
                            id: t,
                            type: "text",
                            isValid: x,
                            isPristine: !1,
                            name: String(t),
                            error: v,
                            value: m,
                            placeholder: "XXXX-XXXX-XXXX-XXXX",
                            onChange: e => {
                                const {
                                    target: {
                                        value: t
                                    }
                                } = e;
                                t.length > 19 || (19 !== t.length || d(t) ? f(void 0) : f(o.Z.t("common.coronavirus.vaccination_campaign.landing.format_error")), p(e))
                            },
                            ...u
                        }), v && (0, c.jsx)(l.Z, {
                            color: "error-090",
                            children: v
                        })]
                    })
                }
        },
        329765: (e, t, n) => {
            "use strict";
            n.d(t, {
                INTERSTITIAL_PAW_CLICK_CATEGORY: () => b,
                INTERSTITIAL_PAW_LABEL: () => N,
                INTERSTITIAL_PAW_TOUCHPOINT: () => j,
                INTERSTITIAL_PAW_VIEW_CATEGORY: () => y,
                default: () => w
            });
            var i = n(184481),
                a = n(288802),
                o = n(445884),
                s = n(516590),
                l = n(747317),
                r = n(259905),
                c = n(800274),
                d = (n(169339), n(383915), n(893157)),
                m = n(470122),
                p = n(453205),
                u = n(487426),
                h = n(876891),
                _ = n(229325),
                x = n(801858),
                g = n(615755),
                v = n(787169),
                f = n(234055),
                Z = (n(306775), n(785893));
            const j = "interstitial",
                b = "touchpoint_LP_PAW_click",
                y = "touchpoint_LP_PAW_view",
                N = "know_more",
                S = () => {
                    const e = (0, c.ZP)(),
                        {
                            setTimer: t
                        } = (0, r.Z)(),
                        n = (0, i.createRef)(),
                        o = e => {
                            let {
                                action: t,
                                label: n
                            } = e;
                            (0, s.ZP)({
                                name: "telehealth_patient_awareness_account_interaction",
                                itemType: l.i.APPOINTMENT,
                                details: {
                                    action: t,
                                    label: n
                                }
                            }, {
                                schema: "core_product"
                            })
                        };
                    return (0, i.useEffect)((() => {
                        (0, s.ZP)({
                            name: "telehealth_patient_awareness_landingpage_displayed",
                            itemType: l.i.APPOINTMENT
                        }, {
                            schema: "core_product"
                        }), a.Z.trackGtmEvent({
                            category: "touchpoint_LP_PAW_visit",
                            action: "isUserConnected",
                            label: String(Boolean(e))
                        }), t((() => o({
                            action: "15_seconds_long"
                        })), 15e3)
                    }), []), (0, Z.jsxs)(Z.Fragment, {
                        children: [(0, Z.jsx)(m.Z, {
                            onTap: () => o({
                                action: "introduction_chevron_down"
                            })
                        }), (0, Z.jsx)(h.Z, {}), (0, Z.jsx)(g.Z, {}), (0, Z.jsx)(x.Z, {}), (0, Z.jsx)(f.Z, {
                            ref: n
                        }), (0, Z.jsx)(_.Z, {
                            onTap: () => o({
                                action: "use_cases_chevron"
                            })
                        }), (0, Z.jsx)(v.Z, {}), (0, Z.jsx)(u.Z, {}), (0, Z.jsx)(p.Z, {})]
                    })
                },
                w = e => {
                    let {
                        onClose: t,
                        ...n
                    } = e;
                    return (0, Z.jsx)(d.Z, {
                        title: o.Z.t("patient_mobile.root.profiles.details.telehealth"),
                        onClose: t,
                        onBack: t ? null : () => {
                            window.history.length <= 1 ? window.location.pathname = "/" : window.history.back()
                        },
                        children: (0, Z.jsx)(S, {
                            onClose: t,
                            ...n
                        })
                    })
                }
        },
        86022: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var i = n(184481),
                a = n(445884),
                o = n(580163),
                s = n(362347),
                l = n(545763),
                r = n(453040),
                c = n(169339),
                d = n(383915),
                m = n(592290),
                p = n(218334),
                u = n(528846),
                h = n(755506),
                _ = n(608575),
                x = n(268902),
                g = n(86310),
                v = n(708221),
                f = n(710270),
                Z = n(845126),
                j = n(511466),
                b = n(516590);
            var y = n(785893);
            const N = ["", "", "", "", "", ""],
                S = ["first", "second", "third", "fourth", "fifth", "sixth"].map((e => a.Z.t(`appointments.login_or_signup.two_factor.input_labels.${e}`))),
                w = "sms",
                k = "email",
                T = {
                    [w]: {
                        scope: "appointments.login_or_signup.two_factor.sms",
                        image: g,
                        icon: "message",
                        resendTimeout: 2e4
                    },
                    [k]: {
                        scope: "appointments.login_or_signup.two_factor.email",
                        image: x,
                        icon: "envelope",
                        resendTimeout: 1e4
                    }
                },
                C = () => {
                    const [e, t] = (0, i.useState)(k), [n, x] = (0, i.useState)(N), [g, C] = (0, i.useState)(null), [E, P] = (0, i.useState)(null), [I, A] = (0, i.useState)(!1), [D, M] = (0, i.useState)(!1), [R, O] = (0, i.useState)(!1), [L, F] = (0, i.useState)(!1), q = (0, i.useContext)(s.Z), z = (0, o.ZP)(), {
                        scope: G
                    } = T[e], {
                        sendAuthCode: V
                    } = (0, f.Z)({
                        url: "/api/accounts/send_auth_code",
                        trigger: "sendAuthCode",
                        method: "post",
                        onSuccess: e => {
                            let {
                                input: {
                                    two_factor_auth_method: t
                                }
                            } = e;
                            I && A(!1), (0, b.ZP)({
                                name: "two_factor_code_sent",
                                details: {
                                    two_factor_auth_method: t,
                                    kind: "patient"
                                }
                            }, {
                                schema: "patient"
                            }), D ? z({
                                message: a.Z.t("successfully_resent", {
                                    scope: G
                                }),
                                uiStyle: "success"
                            }) : M(!0)
                        }
                    }), B = () => {
                        D && (e === k ? F(!0) : O(!0)), V({
                            two_factor_auth_method: e
                        })
                    }, {
                        submitChallenge: H
                    } = (0, f.Z)({
                        url: "/login/challenge",
                        trigger: "submitChallenge",
                        method: "post",
                        onSuccess: e => {
                            let {
                                data: t
                            } = e;
                            C("success"), (0, v.Z)(t.redirection, {
                                replace: !0
                            })
                        },
                        onFailure: e => {
                            let {
                                data: t
                            } = e;
                            C("error");
                            const n = (e => "string" === typeof e && e.includes("Retry later") ? a.Z.t("doctor_common.pin_code.challenge.retry_later") : "object" === typeof e && e.error ? a.Z.t(`doctor_common.pin_code.challenge.${e.error}`) : a.Z.t("doctor_common.pin_code.challenge.wrong_auth_code"))(t);
                            t.redirection ? (0, v.Z)(t.redirection) : P(n)
                        }
                    }), U = (0, i.useCallback)((e => {
                        x(N), t(e), A(!1)
                    }));
                    return (0, i.useEffect)(B, [e]), (0, i.useEffect)((() => {
                        R && setTimeout((() => O(!1)), T[w].resendTimeout)
                    }), [R]), (0, i.useEffect)((() => {
                        L && setTimeout((() => F(!1)), T[k].resendTimeout)
                    }), [L]), (0, i.useEffect)((() => {
                        const t = n.join("");
                        var i;
                        6 === t.length && H({
                            two_factor_auth_method: e,
                            auth_code: t,
                            redirection: null === (i = (0, _.parse)(window.location.href, !0).query) || void 0 === i ? void 0 : i.redirection
                        })
                    }), [n]), null == q ? (0, y.jsx)(j.Z, {}) : (0, y.jsxs)("div", {
                        className: "dl-padding-16 dl-two-factor",
                        children: [(0, y.jsx)(c.Z, {
                            show: I,
                            onHide: () => A(!1),
                            title: a.Z.t("appointments.login_or_signup.two_factor.modal_title"),
                            children: (0, y.jsxs)(d.Z, {
                                alignText: "left",
                                children: [(0, y.jsx)(r.Z, {
                                    block: !0,
                                    className: "dl-margin-b",
                                    children: a.Z.t("modal_description", {
                                        scope: G
                                    })
                                }), (0, y.jsx)(m.h6, {
                                    actionText: a.Z.t("resend", {
                                        scope: G
                                    }),
                                    icon: T[e].icon,
                                    onClick: B,
                                    disabled: e === k ? L : R
                                }), (0, y.jsx)(h.Z, {}), (0, y.jsx)(m.h6, {
                                    actionText: a.Z.t("appointments.login_or_signup.two_factor.help"),
                                    icon: "circle-question",
                                    href: a.Z.t("appointments.login_or_signup.two_factor.faq_link"),
                                    target: "_blank",
                                    onClick: () => A(!1)
                                }), (0, y.jsx)(h.Z, {}), e === w ? (0, y.jsx)(m.h6, {
                                    actionText: a.Z.t("appointments.login_or_signup.two_factor.email.send"),
                                    icon: "envelope",
                                    disabled: L,
                                    onClick: () => U(k)
                                }) : (0, y.jsx)(m.h6, {
                                    actionText: a.Z.t("appointments.login_or_signup.two_factor.sms.send"),
                                    icon: "message",
                                    disabled: R,
                                    onClick: () => U(w)
                                })]
                            })
                        }), (0, y.jsx)(u.Z, {
                            className: "dl-two-factor-image",
                            src: T[e].image,
                            alt: ""
                        }), (0, y.jsx)(r.Z, {
                            block: !0,
                            uiStyle: "title-l-bold",
                            className: "dl-margin-t-24",
                            children: a.Z.t("title", {
                                scope: G
                            })
                        }), (0, y.jsx)(r.Z, {
                            block: !0,
                            className: "dl-margin-t-24",
                            children: a.Z.t("description_html", {
                                scope: G,
                                email: q.email,
                                phone_number: q.phone_number
                            })
                        }), (0, y.jsxs)("div", {
                            className: "dl-anonymous-form-validation-wrapper dl-align-items-center dl-justify-center",
                            children: [(0, y.jsx)(p.ZP, {
                                autoFocusOnMount: !0,
                                inputMode: "numeric",
                                pattern: "[0-9]*",
                                autoComplete: "one-time-code",
                                displayMode: p.B.ALWAYS_VISIBLE,
                                values: n,
                                onChange: e => {
                                    let {
                                        values: t
                                    } = e;
                                    P(null), C(null), x(t)
                                },
                                validationState: g,
                                labels: S
                            }), "success" === g && (0, y.jsx)("div", {
                                className: "dl-anonymous-form-validation-icon-success",
                                children: (0, y.jsx)(Z.Z, {
                                    name: "solid/circle-check",
                                    color: "success-110",
                                    size: "medium"
                                })
                            })]
                        }), E && (0, y.jsx)("div", {
                            className: "dl-flex-center",
                            children: (0, y.jsx)(r.Z, {
                                color: "error-090",
                                role: "alert",
                                children: E
                            })
                        }), (0, y.jsxs)("div", {
                            className: "dl-margin-t-32 dl-flex-center",
                            children: [(0, y.jsx)(r.Z, {
                                block: !0,
                                uiStyle: "body-s-regular",
                                color: "neutral-090",
                                children: a.Z.t("appointments.login_or_signup.two_factor.problem")
                            }), (0, y.jsx)(l.Z, {
                                onClick: () => A(!0),
                                uiStyle: "link-primary",
                                className: "dl-margin-l-8",
                                children: a.Z.t("appointments.login_or_signup.two_factor.use_another_method")
                            })]
                        })]
                    })
                }
        },
        56354: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => h
            });
            var i = n(445884),
                a = n(712722),
                o = n(784600),
                s = n(552691),
                l = n(940919),
                r = n(845126),
                c = n(297516),
                d = n(164544),
                m = n(192772),
                p = n(5212),
                u = n(785893);
            const h = e => {
                let {
                    children: t
                } = e;
                const n = (0, m.ZP)(),
                    h = () => n.dismiss("/sessions/new");
                return (0, p.rl)() ? (0, u.jsxs)(a.Z, {
                    color: "white",
                    className: "forgot-password",
                    children: [(0, u.jsx)(s.Z, {
                        title: i.Z.t("common.password_reset.title"),
                        children: (0, u.jsx)(l.Z, {
                            position: "left",
                            onTap: h,
                            icon: (0, u.jsx)(r.Z, {
                                name: "chevron-left",
                                size: "medium"
                            }),
                            title: i.Z.t("common.actions.close")
                        })
                    }), (0, u.jsx)(c.Z, {
                        children: (0, u.jsx)(d.Z, {
                            className: "dl-padding-16 dl-full-height",
                            margin: !1,
                            children: t
                        })
                    })]
                }) : (0, u.jsx)(d.Z, {
                    className: "flex dl-justify-center",
                    children: (0, u.jsx)(o.Z, {
                        className: "dl-margin-16",
                        style: {
                            width: "470px"
                        },
                        children: t
                    })
                })
            }
        },
        857457: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var i = n(445884),
                a = n(445618),
                o = n.n(a),
                s = n(453040),
                l = (n(842942), n(785893));
            const r = () => (0, l.jsxs)("div", {
                children: [(0, l.jsx)(o(), {
                    className: "searchbar-place-around-me-icon"
                }), (0, l.jsx)(s.Z, {
                    uiStyle: "body-s-regular",
                    className: "searchbar-place-around-me-text",
                    children: i.Z.t("patient_common.root.searchbar.aroundme")
                })]
            })
        },
        849762: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C,
                _: () => T
            });
            var i = n(184481),
                a = n(445884),
                o = n(15377),
                s = n(990626),
                l = n(516590),
                r = n(619423),
                c = n(65502),
                d = n(294184),
                m = n.n(d),
                p = n(432073),
                u = n.n(p),
                h = n(951787),
                _ = n(545763),
                x = n(845126),
                g = n(872486),
                v = n(165577),
                f = n(471667),
                Z = n(737395),
                j = n.n(Z),
                b = n(857457),
                y = (n(574433), n(785893));

            function N(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const S = (0, i.forwardRef)(((e, t) => {
                    let {
                        item: n,
                        query: i,
                        ...a
                    } = e;
                    const o = n.address || n.city || n.description,
                        s = n.address ? n.city : n.secondary_text || n.country;
                    return (0, y.jsx)(g.Z, {
                        ref: t,
                        item: n,
                        subtitle: s,
                        className: n.aroundMe ? "searchbar-place-around-me" : null,
                        ...a,
                        children: n.aroundMe ? (0, y.jsx)(b.Z, {}) : (0, y.jsx)(f.Z, {
                            query: i,
                            text: o
                        })
                    })
                })),
                w = e => (null === e || void 0 === e ? void 0 : e.address) || (null === e || void 0 === e ? void 0 : e.city) || (null === e || void 0 === e ? void 0 : e.description),
                k = e => e ? r.Z.placeAutocomplete(e).then((e => {
                    let {
                        bodyData: t
                    } = e;
                    return t
                })).catch((() => [])).then((e => [{
                    aroundMe: !0,
                    description: a.Z.t("patient_common.root.searchbar.aroundme")
                }, ...e])) : Promise.resolve([{
                    aroundMe: !0
                }]);
            class T extends i.PureComponent {
                constructor(e) {
                    super(e), N(this, "state", {
                        suggestionOpened: !1,
                        value: this.props.defaultValue || "",
                        activeItem: void 0,
                        currentLocationLoading: !1,
                        currentLocation: null
                    }), N(this, "onChange", (e => this.setState({
                        value: e
                    }))), N(this, "setSuggestionOpened", (e => this.setState({
                        suggestionOpened: e
                    }))), N(this, "toggleCurrentLocation", (() => {
                        (0, l.ZP)({
                            name: "patient_select_geolocalisation"
                        }, {
                            schema: "patient"
                        });
                        const {
                            currentLocation: e,
                            currentLocationLoading: t
                        } = this.state;
                        var n, i;
                        e ? (this.setState({
                            currentLocation: null
                        }), null === (n = (i = this.props).onCurrentPositionSuccess) || void 0 === n || n.call(i, null)) : e || t || (this.setState({
                            currentLocation: null,
                            currentLocationLoading: !0
                        }), (0, c.n)().then((e => {
                            var t, n, i;
                            let {
                                coords: {
                                    latitude: a,
                                    longitude: o
                                }
                            } = e;
                            this.setState({
                                currentLocation: {
                                    latitude: a,
                                    longitude: o
                                },
                                currentLocationLoading: !1
                            }), null === (t = this.aroundMeButtonRef.current) || void 0 === t || t.focus(), null === (n = (i = this.props).onCurrentPositionSuccess) || void 0 === n || n.call(i, {
                                latitude: a,
                                longitude: o
                            })
                        })).catch((e => {
                            var t, n;
                            null === (t = (n = this.props).onCurrentPositionError) || void 0 === t || t.call(n, e), this.setState({
                                currentLocationLoading: !1
                            })
                        })))
                    })), N(this, "onSelect", (e => {
                        e.aroundMe && (0, l.ZP)({
                            name: "patient_select_geolocalisation"
                        }, {
                            schema: "patient"
                        });
                        const {
                            setSelectedLocation: t
                        } = this.props;
                        return e.aroundMe ? this.toggleCurrentLocation() : t(e)
                    })), this.aroundMeButtonRef = (0, i.createRef)()
                }
                render() {
                    const {
                        suggestionOpened: e,
                        value: t,
                        activeItem: n,
                        currentLocation: i,
                        currentLocationLoading: l
                    } = this.state, {
                        focus: r,
                        onFocus: c,
                        onBlur: d,
                        otherInputFocused: p,
                        disabled: g
                    } = this.props, f = "search-place-input-results-container";
                    return (0, y.jsx)("div", {
                        className: "searchbar-place",
                        children: (0, y.jsx)(h.Z, {
                            debounceDelay: s.ZP.GOOGLE_MAPS_SEARCH_DEBOUNCE_DELAY_VALUE,
                            id: f,
                            dataFetcher: k,
                            onChange: this.onChange,
                            onActive: e => this.setState({
                                activeItem: e
                            }),
                            value: t,
                            valueSelector: w,
                            itemComponent: S,
                            onSelect: this.onSelect,
                            onSuggestionToggle: this.setSuggestionOpened,
                            defaultIndex: 1,
                            className: m()("searchbar-place-input-wrapper", this.props.className),
                            children: (0, y.jsx)(v.Z, {
                                "aria-hidden": null !== i,
                                tabIndex: null !== i ? -1 : 0,
                                readOnly: g,
                                className: "searchbar-place-input",
                                wrapperClassName: "searchbar-input-hide-overflowing-around-me",
                                icon: (0, y.jsx)(u(), {}),
                                placeholder: a.Z.t("patient_common.root.searchbar.place_placeholder"),
                                onFocus: c,
                                onBlur: d,
                                focus: r,
                                owns: f,
                                activeItem: n,
                                suggestionOpened: e,
                                otherInputFocused: p,
                                onKeyDown: e => {
                                    e.keyCode === o.Mf && n && (this.onChange(w(n)), this.onSelect(n))
                                },
                                children: e ? null : (0, y.jsxs)(_.Z, {
                                    ref: this.aroundMeButtonRef,
                                    "aria-pressed": null !== i,
                                    uiStyle: "default-link",
                                    className: m()("searchbar-place-around-me-button", {
                                        "searchbar-place-around-me-button-enabled": i
                                    }),
                                    labelClassName: null,
                                    onClick: this.toggleCurrentLocation,
                                    children: [(0, y.jsx)(j(), {
                                        "aria-hidden": !0,
                                        className: m()("searchbar-place-around-me-icon", {
                                            "searchbar-place-around-me-icon-progress": l
                                        })
                                    }), (0, y.jsx)("span", {
                                        className: "searchbar-place-around-me-label",
                                        children: a.Z.t("patient_common.root.searchbar.aroundme")
                                    }), (0, y.jsx)(x.Z, {
                                        name: "xmark-large",
                                        className: "searchbar-place-around-me-clear"
                                    })]
                                })
                            })
                        })
                    })
                }
            }
            const C = T
        },
        114736: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => x
            });
            var i = n(184481),
                a = n(78599),
                o = n(545763),
                s = n(304083),
                l = n(445884),
                r = n(619423),
                c = n(396719),
                d = n.n(c),
                m = n(294184),
                p = n.n(m),
                u = n(849762),
                h = n(646975),
                _ = (n(568100), n(785893));
            const x = e => {
                let {
                    queryInputProps: t,
                    placeInputProps: n
                } = e;
                const [c, m] = (0, i.useState)(null), [x, g] = (0, i.useState)(null), [v, f] = (0, i.useState)(!1), [Z, j] = (0, i.useState)(!1), [b, y] = (0, i.useState)((null === t || void 0 === t ? void 0 : t.defaultValue) || ""), [N, S] = (0, i.useState)(!1), [w, k] = (0, i.useState)(null), {
                    useExperience: T
                } = (0, i.useContext)(s.ExperienceContext), {
                    included: C,
                    experienceReady: E
                } = T("search_cta"), P = E && C, I = (0, i.useCallback)((e => {
                    e.is_speciality ? m(e) : window.location = e.link
                }), []), A = (0, i.useCallback)((e => {
                    e.preventDefault(), S(!0);
                    const i = (0, a.e3)(window.location.search);
                    let o = { ...t,
                        ...n,
                        ...i
                    };
                    w ? o = { ...o,
                        ...w,
                        place_id: null
                    } : x && (o = { ...o,
                        ...x,
                        latitude: void 0,
                        longitude: void 0
                    }), c ? o.speciality = c.slug : b !== (null === t || void 0 === t ? void 0 : t.defaultValue) && (o.doctor = b), r.Z.profiles.search(o).then((e => {
                        window.location = e.path
                    }))
                }), [w, x, c, n, b, t]);
                return E ? (0, _.jsxs)("form", {
                    className: "searchbar",
                    onSubmit: A,
                    children: [(0, _.jsx)(h.Z, {
                        onSelect: I,
                        onFocus: () => f(!0),
                        onBlur: () => f(!1),
                        focus: v,
                        otherInputFocused: Z,
                        ...t,
                        value: b,
                        onChange: y,
                        setSpeciality: m,
                        setQueryLoading: S
                    }), (0, _.jsxs)("div", {
                        className: "searchbar-place-submit",
                        children: [(0, _.jsx)(u.Z, {
                            onFocus: () => j(!0),
                            onBlur: () => j(!1),
                            focus: Z,
                            otherInputFocused: v,
                            disabled: N,
                            ...n,
                            setSelectedLocation: g,
                            onCurrentPositionSuccess: k,
                            onCurrentPositionError: e => alert(e.message)
                        }), (0, _.jsxs)(o.Z, {
                            type: "submit",
                            className: p()("searchbar-submit-button", {
                                experiment: P
                            }),
                            uiStyle: "DEPRECATED_yellow",
                            disabled: N,
                            children: [(0, _.jsx)("span", {
                                className: "searchbar-submit-button-label dl-text-transform-none",
                                children: l.Z.t("common.search")
                            }), (0, _.jsx)(d(), {
                                className: "searchbar-submit-button-arrow"
                            })]
                        })]
                    })]
                }) : null
            }
        },
        872486: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var i = n(184481),
                a = n(165577),
                o = n(294184),
                s = n.n(o),
                l = (n(883656), n(785893));
            const r = (0, i.forwardRef)(((e, t) => {
                let {
                    active: n,
                    posInSet: i,
                    setSize: o,
                    subtitle: r,
                    children: c,
                    className: d,
                    item: m,
                    onSelect: p,
                    onActive: u
                } = e;
                return (0, l.jsxs)("button", {
                    ref: t,
                    className: s()("searchbar-result", d, {
                        "searchbar-result-active": n
                    }),
                    onMouseOver: () => u(m),
                    onClick: () => p(m),
                    "aria-selected": n,
                    "aria-posinset": i,
                    "aria-setsize": o,
                    tabIndex: -1,
                    id: (0, a.l)(m),
                    role: "option",
                    type: "button",
                    children: [c, r ? (0, l.jsx)("div", {
                        className: "searchbar-result-subtitle",
                        children: r
                    }) : null]
                })
            }))
        },
        165577: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c,
                l: () => r
            });
            var i = n(184481),
                a = n(662522),
                o = n(294184),
                s = n.n(o),
                l = (n(268279), n(785893));
            const r = e => e ? e.place_id || [e.value, e.name].join("-") : null,
                c = (0, a.Z)((0, i.memo)((e => {
                    let {
                        className: t,
                        suggestionOpened: n,
                        activeItem: a,
                        wrapperClassName: o,
                        icon: c,
                        focus: d,
                        otherInputFocused: m,
                        children: p,
                        owns: u,
                        ...h
                    } = e;
                    const _ = (0, i.useId)(),
                        x = s()("searchbar-input", {
                            "searchbar-input-focused": d,
                            "searchbar-input-other-focused": m
                        }, t),
                        g = s()("searchbar-input-wrapper", o),
                        v = s()("searchbar-input-icon", {
                            "searchbar-input-icon-focused": d
                        }),
                        f = r(a);
                    return (0, l.jsxs)("div", {
                        className: g,
                        children: [(0, i.cloneElement)(c, {
                            className: v,
                            "aria-hidden": !0
                        }), (0, l.jsx)("input", {
                            className: x,
                            ...h,
                            "aria-expanded": n,
                            "aria-activedescendant": f || null,
                            "aria-owns": u,
                            "aria-controls": u,
                            "aria-autocomplete": "list",
                            autoComplete: "off",
                            autoCorrect: "off",
                            autoCapitalize: "off",
                            spellCheck: "false",
                            id: _,
                            role: "combobox"
                        }), p]
                    })
                })))
        },
        502986: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var i = n(184481),
                a = n(441609),
                o = n.n(a),
                s = n(445884),
                l = n(929014),
                r = n(545763),
                c = n(511466),
                d = n(931381),
                m = n(708402),
                p = n(33057),
                u = n(886602),
                h = n(269270),
                _ = n(476888),
                x = n(516590),
                g = n(752646),
                v = (n(490757), n(795361)),
                f = n(990626),
                Z = n(785893);
            const j = e => {
                    let {
                        availabilities: t,
                        video: n
                    } = e;
                    for (const e of t) {
                        const t = e.slots.find((e => e.video === n));
                        if (t) return t.start_date
                    }
                    return null
                },
                b = e => {
                    var t, n, a;
                    let {
                        availabilitiesData: b,
                        children: y,
                        data: N,
                        firstSlotAppointmentId: S,
                        forCovidVaccination: w,
                        hasVideoAlternatives: k,
                        isDoctorApp: T,
                        isTelehealthPractitioner: C,
                        onSlotSelect: E,
                        secondShotAppointment: P,
                        selectedSlot: I,
                        setDisplayTitle: A,
                        showAlternativeSlots: D,
                        showAvailabilityIndicator: M = !1,
                        unavailableSlots: R
                    } = e;
                    const {
                        pending: O,
                        availabilities: L,
                        complete: F,
                        reason: q,
                        total: z,
                        message: G,
                        showMore: V
                    } = b, {
                        telehealth: B,
                        profileId: H,
                        isOrganization: U,
                        visitMotiveIds: $,
                        landlineNumber: Y,
                        bookingDisabled: W,
                        bookingTemporaryDisabled: K,
                        vaccinationCenter: X
                    } = N, Q = (0, i.useRef)(!1), J = (0, i.useRef)(!1), ee = (0, i.useRef)(0), te = (0, i.useRef)(null), [ne, ie] = (0, i.useState)(!1), {
                        createTrackingEventWithContext: ae
                    } = (0, v.Z)(), oe = {
                        name: "display_availabilities",
                        itemId: H,
                        itemType: (0, g.m)(U)
                    }, se = e => !(e => e.video && k)(e), le = ((e, t) => {
                        if (o()(e)) return null;
                        const n = e[0].slots,
                            i = o()(n) ? null : n.find(t);
                        return "object" === typeof i ? i.start_date : i
                    })(L, se), re = L.filter((e => ne || e.slots.some(se)));
                    (0, i.useEffect)((() => {
                        C && (ee.current > 1 || ee.current > 0 && !D || L.length && (ee.current += 1, D ? (0, x.ZP)({ ...oe,
                            details: {
                                kind: "mixed",
                                first_available_slot_physical: j({
                                    availabilities: L,
                                    video: !1
                                }),
                                first_available_slot_telehealth: j({
                                    availabilities: L,
                                    video: !0
                                }),
                                profile_id: H
                            }
                        }, {
                            schema: "patient"
                        }) : (0, x.ZP)({ ...oe,
                            details: {
                                kind: B ? "telehealth" : "physical",
                                first_available_slot: le,
                                profile_id: H
                            }
                        }, {
                            schema: "patient"
                        })))
                    }), [L.length, D]), (0, i.useEffect)((() => {
                        if (0 === L.length || Q.current) return;
                        const e = S ? "second_availabilities_display" : "availabilitiesDisplay",
                            t = {
                                kind: B ? "telehealth" : "physical",
                                first_available_slot: le,
                                appointment_id: S,
                                ...!S && {
                                    is_appointment_request_enabled: (0, f.cr)("patient_appointment_requests")
                                }
                            };
                        ae({
                            name: e,
                            additionalDetails: t
                        }), Q.current = !0
                    }), [L.length, U]), (0, i.useEffect)((() => {
                        var e;
                        J.current && (null === (e = te.current) || void 0 === e || e.scrollIntoView({
                            behavior: "smooth"
                        }))
                    }), [null === (t = re.at(-1)) || void 0 === t ? void 0 : t.date]);
                    const ce = {
                        bookingDisabled: W || !$,
                        bookingTemporaryDisabled: K,
                        landlineNumber: Y,
                        message: G,
                        forCovidVaccination: w,
                        vaccinationCenter: X
                    };
                    if ((0, i.useEffect)((() => {
                            A && (q === d.kF || (0, d.kn)(ce) && 0 === z ? A(!1) : A(!0))
                        }), [q]), q === d.kF) return (0, Z.jsx)(h.Z, {
                        appointmentId: b.parameters.appointment_id,
                        appointmentDate: b.parameters.appointment_date,
                        nextStepPath: b.parameters.next_step_path,
                        onTemporaryAppointmentDelete: V
                    });
                    if ((0, d.kn)(ce) && 0 === z) return T ? (0, Z.jsx)(u.Z, {
                        data: ce,
                        reason: q,
                        children: y
                    }) : (0, Z.jsx)(p.Z, {
                        data: ce,
                        reason: q
                    });
                    const de = null === (n = L.find((e => e.slots.some(se)))) || void 0 === n ? void 0 : n.slots.find(se).start_date,
                        me = null === (a = L.find((e => e.slots.length && e.slots.every((e => !se(e)))))) || void 0 === a ? void 0 : a.slots[0].start_date,
                        pe = L.reduce(((e, t) => t.slots.some(se) || t.date >= de ? e : e + t.slots.length), 0);
                    return (0, Z.jsxs)(Z.Fragment, {
                        children: [!O && !ne && pe > 0 && (0, Z.jsx)(_.Z, {
                            earlierAlternativeAvailabilitiesCount: pe,
                            firstFunnelAvailabilityDate: de,
                            firstAlternativeAvailabilityStartDate: me,
                            setShowAlternativeAvailabilities: ie
                        }), re.map(((e, t) => (0, Z.jsx)(m.Z, {
                            availability: e,
                            defaultExpanded: 0 === t,
                            hasVideoAlternatives: k,
                            isAStandardSlot: se,
                            onSlotSelect: E,
                            profileId: H,
                            selectedSlot: I,
                            showAlternativeAvailabilities: ne,
                            showIndicator: M,
                            unavailableSlots: R
                        }, e.date))), (0, Z.jsx)("div", {
                            ref: te
                        }), !O && !F && q !== d.c8 && q !== d.vk && !P && (0, Z.jsx)(r.Z, {
                            uiStyle: "outlined",
                            onTap: e => {
                                ae({
                                    name: "availabilitiesMoreFollowingDays"
                                }), J.current = !0, V(e)
                            },
                            block: !0,
                            children: s.Z.t("common.mobile.availabilities.see_more_availabilities")
                        }), !O && y, q === d.c8 && (0, Z.jsx)("div", {
                            className: "dl-margin-t-16",
                            children: (0, Z.jsx)(l.Z, {
                                variant: "deprecated-alert-interface",
                                uiStyle: "warning",
                                children: s.Z.t("common.mobile.availabilities.not_opened")
                            })
                        }), O && (0, Z.jsx)(c.Z, {
                            className: "dl-mobile-availabilities-loader"
                        })]
                    })
                }
        },
        61946: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => N
            });
            var i = n(184481),
                a = n(177140),
                o = n(445884),
                s = n(784600),
                l = n(453040),
                r = n(329347),
                c = n(545763),
                d = n(322009),
                m = n(963885),
                p = n.n(m),
                u = n(287669),
                h = n.n(u),
                _ = n(71214),
                x = n.n(_),
                g = n(478983),
                v = n.n(g),
                f = n(265842),
                Z = n(172099),
                j = (n(760233), n(785893));
            const b = {
                    microphone: v(),
                    camera: v(),
                    popup: h()
                },
                y = e => {
                    let {
                        device: t,
                        state: n,
                        onDismiss: i
                    } = e;
                    const a = b[t],
                        m = "popup" === t ? "right" : "left";
                    return (0, Z.Z)({
                        name: "browser_permission_overlay",
                        details: {
                            device: t,
                            state: n
                        }
                    }), (0, j.jsxs)(j.Fragment, {
                        children: [(0, j.jsx)(r.Z, {
                            show: !0
                        }), (0, j.jsxs)("div", {
                            className: "dl-notification-help-container",
                            children: [(0, j.jsx)("div", {
                                className: `dl-notification-help-dot dl-notification-help-dot-${m}`
                            }), (0, j.jsx)("div", {
                                className: `dl-position-absolute dl-notification-help-illustration-${m}`,
                                children: (0, j.jsx)(a, {})
                            }), "popup" !== t && (0, j.jsx)(d.Z, {
                                color: "white",
                                size: "small",
                                className: "dl-notification-help-close-button",
                                title: o.Z.t("common.actions.close"),
                                onTap: i,
                                children: (0, j.jsx)(x(), {})
                            }), (0, j.jsxs)("div", {
                                className: "dl-notification-help-message",
                                children: [(0, j.jsx)("div", {
                                    className: "flex dl-margin-x-16 dl-justify-" + ("left" === m ? "start" : "end"),
                                    children: (0, j.jsx)(p(), {
                                        fill: "white",
                                        transform: "left" === m ? "scale(-1,1)" : null
                                    })
                                }), (0, j.jsx)(l.Z, {
                                    color: "white",
                                    uiStyle: "title-s-bold",
                                    padding: "true",
                                    align: "center",
                                    children: o.Z.t(`${t}_authorize_suggestion`, {
                                        scope: "doctor_common.telehealth"
                                    })
                                }), "popup" === t && (0, j.jsxs)(s.Z, {
                                    className: "dl-margin-16",
                                    children: [(0, j.jsx)(l.Z, {
                                        block: !0,
                                        className: "dl-margin-y-16",
                                        children: (0, j.jsxs)("div", {
                                            className: "flex",
                                            children: [o.Z.t("doctor_common.telehealth.popup_fail_step_1"), (0, j.jsx)("div", {
                                                className: "dl-margin-l-8",
                                                children: (0, j.jsx)(h(), {
                                                    width: "10px",
                                                    height: "10px"
                                                })
                                            })]
                                        })
                                    }), (0, j.jsx)(l.Z, {
                                        block: !0,
                                        className: "dl-margin-y-16",
                                        children: o.Z.t("doctor_common.telehealth.popup_fail_step_2")
                                    }), (0, j.jsx)(l.Z, {
                                        block: !0,
                                        className: "dl-margin-y-16",
                                        children: o.Z.t("doctor_common.telehealth.popup_fail_step_3")
                                    })]
                                }), n === f.cg && (0, j.jsx)("div", {
                                    className: "dl-text-center dl-margin-16",
                                    children: (0, j.jsx)(c.Z, {
                                        onClick: () => window.location.reload(),
                                        children: o.Z.t("doctor_common.telehealth.refresh")
                                    })
                                })]
                            })]
                        })]
                    })
                },
                N = () => {
                    const [e, t] = (0, i.useState)({}), [n] = (0, f.ZP)(), o = Object.entries(n).find((e => {
                        let [, t] = e;
                        return t !== f.qZ
                    }));
                    if (!o) return null;
                    const [s, l] = o;
                    return e[s] || a.d ? null : (0, j.jsx)(y, {
                        device: s,
                        state: l,
                        onDismiss: () => {
                            t({
                                [s]: !0
                            })
                        }
                    })
                }
        },
        177949: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var i = n(710270),
                a = n(580163),
                o = n(192772),
                s = n(5212),
                l = n(445884),
                r = n(998735);
            const c = e => {
                let {
                    appointmentId: t,
                    onSuccess: n,
                    onFailure: c
                } = e;
                const d = (0, o.ZP)(),
                    m = (0, a.ZP)(),
                    p = (0, r.fG)();
                return (0, i.Z)({
                    url: `/account/appointments/${t}.json`,
                    method: "delete",
                    trigger: "destroy",
                    onSuccess: e => {
                        let {
                            data: {
                                data: t,
                                meta: i
                            }
                        } = e;
                        if (!t.canceled) return m({
                            message: l.Z.t("patient_common.root.appointments.cancelation.cannot_cancel"),
                            uiStyle: "error"
                        }), void(c && c());
                        i.logged_in && (0, s.rl)() ? (m({
                            message: l.Z.t("patient_mobile.root.account.appointments.confirm_deletion"),
                            uiStyle: "success"
                        }), p(), d.swap(t.redirection), n && n()) : window.location = t.redirection
                    },
                    onFailure: () => {
                        m({
                            message: l.Z.t("patient_common.root.appointments.cancelation.cannot_cancel"),
                            uiStyle: "error"
                        }), c && c()
                    }
                })
            }
        },
        725965: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var i = n(184481),
                a = n(977954),
                o = n.n(a),
                s = n(445884),
                l = n(516590),
                r = n(298203),
                c = n(752646);
            const d = e => (null === e || void 0 === e ? void 0 : e.slots.length) > 0,
                m = {
                    availabilities: [],
                    numberOfDaysToDisplay: 5,
                    pending: !0,
                    complete: !1,
                    initialFetch: !0,
                    total: 0
                };

            function p(e, t) {
                switch (t.type) {
                    case "ADD_AVAILABILITIES":
                        return { ...e,
                            availabilities: [...e.availabilities, ...t.newAvailabilities],
                            reason: void 0,
                            parameters: void 0,
                            total: e.total + t.newAvailabilities.length
                        };
                    case "SHOW_MORE":
                        return { ...e,
                            numberOfDaysToDisplay: e.numberOfDaysToDisplay + 5
                        };
                    case "COMPLETE":
                        return { ...e,
                            complete: !0,
                            reason: t.reason,
                            message: t.message,
                            parameters: t.parameters
                        };
                    case "SHOW_LOADER":
                        return { ...e,
                            pending: !0
                        };
                    case "HIDE_LOADER":
                        return { ...e,
                            pending: !1
                        };
                    case "SET_INITIAL_FETCH":
                        return { ...e,
                            initialFetch: !1
                        };
                    default:
                        throw new Error
                }
            }
            const u = (e, t, n, a) => {
                const {
                    visitMotiveIds: u,
                    practiceIds: h,
                    agendaIds: _,
                    appointmentId: x,
                    insuranceSector: g,
                    telehealth: v,
                    bookingDisabled: f,
                    bookingTemporaryDisabled: Z,
                    secondShotAppointment: j,
                    startAt: b,
                    slot: y
                } = t || {}, [N, S] = (0, i.useReducer)(p, m), w = (0, i.useRef)([]), k = (0, i.useRef)(j ? b : o()().toDate()), T = (0, i.useRef)(!1), {
                    abortController: C
                } = (0, r.Z)(), E = async () => {
                    const i = await e({
                            startDate: k.current,
                            visitMotiveIds: u,
                            agendaIds: _,
                            practiceIds: h,
                            appointmentId: x,
                            insuranceSector: g,
                            telehealth: v,
                            limit: 5,
                            slot: y
                        }, C.signal, n),
                        {
                            next_slot: a,
                            availabilities: s,
                            reason: r,
                            message: m,
                            parameters: p
                        } = i.bodyData,
                        f = s[s.length - 1];
                    if (!f || r || m) return S({
                        type: "COMPLETE",
                        reason: r,
                        message: m,
                        parameters: p
                    }), !1;
                    const Z = ((e, t) => e.filter(d).map((e => ((e, t) => ({ ...e,
                        slots: e.slots.map((e => "object" === typeof e ? e : {
                            start_date: e,
                            video: t
                        }))
                    }))(e, t))))(s, v);
                    if (w.current = [...w.current, ...Z], S({
                            type: "ADD_AVAILABILITIES",
                            newAvailabilities: Z
                        }), a) k.current = o()(a).toDate();
                    else {
                        const e = [o()(k.current).add(5, "days")];
                        if (s.length > 0) {
                            const t = o()(f.date);
                            e.push(t.add(1, "day"))
                        }
                        k.current = o().max(e).toDate()
                    }
                    if (!T.current && "de" === window.country) {
                        var j;
                        T.current = !0;
                        const e = null === (j = s.filter((e => {
                            let {
                                slots: t
                            } = e;
                            return t.length > 0
                        }))[0]) || void 0 === j ? void 0 : j.slots[0];
                        (0, l.ZP)({
                            name: "display_availabilities",
                            itemId: null === t || void 0 === t ? void 0 : t.profileId,
                            itemType: (0, c.m)(null === t || void 0 === t ? void 0 : t.isOrganization),
                            details: {
                                kind: t.telehealth ? "telehealth" : "physical",
                                first_available_slot: (null === e || void 0 === e ? void 0 : e.start_date) || e,
                                referrer: document.referrer
                            }
                        }, {
                            schema: "patient"
                        })
                    }
                    return !0
                };
                return (0, i.useEffect)((() => {
                    u && u.length && !Z && !f && (async () => {
                        S({
                            type: "SHOW_LOADER"
                        });
                        try {
                            const e = j ? 1 : N.numberOfDaysToDisplay;
                            for (; w.current.length < e && await E(););
                        } catch (t) {
                            var e;
                            if (null !== t && void 0 !== t && null !== (e = t.request) && void 0 !== e && e.aborted) return;
                            console.error(t), S({
                                type: "COMPLETE",
                                message: s.Z.t("common.error")
                            })
                        }
                        S({
                            type: "HIDE_LOADER"
                        })
                    })()
                }), [N.numberOfDaysToDisplay]), (0, i.useEffect)((() => {
                    !N.pending && a && a({
                        availabilities: N.availabilities,
                        total: N.total
                    })
                }), [N.pending]), { ...N,
                    showMore: () => {
                        N.pending || S({
                            type: "SHOW_MORE"
                        })
                    }
                }
            }
        },
        265842: (e, t, n) => {
            "use strict";
            n.d(t, {
                YU: () => d,
                ZP: () => _,
                bU: () => c,
                cg: () => r,
                qZ: () => l,
                ub: () => h
            });
            var i = n(184481),
                a = n(177140),
                o = n(61946),
                s = n(785893);
            const l = "granted",
                r = "refresh",
                c = "prompt",
                d = "denied",
                m = (0, i.createContext)(),
                p = e => (0, a.q7)({
                    camera: "video",
                    microphone: "audio"
                }[e]),
                u = e => new Promise((t => {
                    e.onchange = e => {
                        e.target.state === l && t()
                    }
                })),
                h = e => {
                    let {
                        children: t
                    } = e;
                    const [n, a] = (0, i.useState)({}), l = (0, i.useCallback)((e => {
                        a((t => ({ ...t,
                            ...e
                        })))
                    }), []);
                    return (0, s.jsxs)(m.Provider, {
                        value: {
                            permissions: n,
                            setPermission: l
                        },
                        children: [(0, s.jsx)(o.Z, {}), "function" === typeof t ? t((() => {
                            l({
                                popup: r
                            })
                        })) : t]
                    })
                },
                _ = () => {
                    const {
                        permissions: e,
                        setPermission: t
                    } = (0, i.useContext)(m), n = async e => {
                        const n = await navigator.permissions.query({
                            name: e
                        });
                        switch (n.state) {
                            case c:
                                t({
                                    [e]: c
                                }), p(e), await u(n), t({
                                    [e]: l
                                });
                                break;
                            case d:
                                t({
                                    [e]: c
                                }), await u(n), t({
                                    [e]: r
                                });
                                break;
                            case l:
                                t({
                                    [e]: l
                                })
                        }
                    }, a = e => new Promise((n => {
                        const i = setTimeout((() => {
                            t({
                                [e]: c
                            })
                        }), 3e3);
                        p(e).then((a => {
                            clearTimeout(i), a.working ? (t({
                                [e]: l
                            }), n()) : t({
                                [e]: r
                            })
                        }))
                    }));
                    return [e, async () => {
                        try {
                            await n("microphone")
                        } catch (e) {
                            await a("microphone")
                        }
                        try {
                            await n("camera")
                        } catch (e) {
                            await a("camera")
                        }
                    }]
                }
        },
        629535: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            const i = e => e.replace(/[\xe0\xe2\xe1\xe4]/gi, "a").replace(/[\xe9\xe8\xea\xeb]/gi, "e").replace(/[\xef\xee\xec\xed]/gi, "i").replace(/[\xf4\xf6\xf2\xf3\xf5]/gi, "o").replace(/[\xfb\xf9\xfc\xfa]/gi, "u").replace(/\u0153/gi, "oe").replace(/\xe6/gi, "ae").replace(/\xdf/gi, "ss").replace(/\xe7/gi, "c")
        },
        844139: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => o
            });
            n(5212);
            var i = n(798638),
                a = n(348764);
            const o = async function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                const o = new XMLHttpRequest;
                o.open(t, `${e}?cache_buster=${Math.random()}`, !0), o.timeout = 5e3, "POST" === t && (o.setRequestHeader("X-CSRF-Token", (0, i.HC)()["X-CSRF-Token"]), o.setRequestHeader("Content-Type", "application/json"));
                const s = (new Date).getTime(),
                    l = (e, t) => {
                        const i = ((new Date).getTime() - s) / 1e3,
                            o = 8 * (n ? a.Buffer.from(n).length : e.loaded);
                        t(Math.round(o / i))
                    };
                return new Promise((e => {
                    o.onload = t => l(t, e), o.ontimeout = t => {
                        t.loaded ? l(t, e) : e(null)
                    }, o.send(n)
                }))
            }
        },
        420391: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C,
                t: () => T
            });
            var i = n(977954),
                a = n.n(i),
                o = n(437124),
                s = n(502986),
                l = n(402804),
                r = n(725965),
                c = n(108816),
                d = n.n(c),
                m = n(221146),
                p = n.n(m),
                u = n(763360),
                h = n.n(u),
                _ = n(711255),
                x = n.n(_),
                g = n(278085),
                v = n.n(g),
                f = n(967065),
                Z = n.n(f),
                j = n(766415),
                b = n.n(j);
            const y = (e, t) => d()(x(), p()("date"), h(), v()(((e, t) => {
                    let [n, i] = t;
                    if (i) {
                        const t = n.date,
                            l = n.substitution || i.substitution,
                            r = (o = n.slots, s = i.slots, d()(Z()(((e, t) => e.start_date === t.start_date)), b()((e => {
                                let {
                                    start_date: t
                                } = e;
                                return a()(t).unix()
                            })))([...o, ...s]));
                        e.push({
                            date: t,
                            slots: r,
                            substitution: l
                        })
                    } else e.push(n);
                    var o, s;
                    return e
                }), []), b()((e => {
                    let {
                        date: t
                    } = e;
                    return a()(t).unix()
                })))(e, t),
                N = (e, t) => ({ ...e,
                    total: e.total + t.total,
                    availabilities: y(e.availabilities, t.availabilities),
                    showMore: () => {
                        e.showMore(), t.showMore()
                    }
                });
            var S = n(516590),
                w = n(785893);
            const k = e => {
                    let {
                        bookingShow: t,
                        funnelData: n,
                        alternativeData: i,
                        isTelehealthPractitioner: a,
                        onSlotSelect: o,
                        slot: c,
                        forCovidVaccination: d,
                        secondSlot: m,
                        unavailableSlots: p,
                        firstSlotAppointmentId: u,
                        setDisplayTitle: h
                    } = e;
                    const _ = e => {
                            (0, S.ZP)({
                                name: "profile_results_displayed",
                                details: {
                                    profile_id: n.profileId,
                                    profile_type: n.isOrganization ? "establishmentsProfiles" : "practitioner",
                                    availabilities: e && (0, l.o8)(e),
                                    practice_id: n.practiceIds[0],
                                    visit_motive_id: n.visitMotiveIds[0]
                                }
                            }, {
                                schema: "patient"
                            })
                        },
                        x = (0, r.Z)(T, n, m, _),
                        g = (0, r.Z)(T, i, void 0, _),
                        v = N(x, g, !1);
                    return (0, w.jsx)(s.Z, {
                        bookingShow: t,
                        data: n,
                        selectedSlot: c,
                        hasVideoAlternatives: Boolean(i),
                        availabilitiesData: v,
                        isTelehealthPractitioner: a,
                        unavailableSlots: p,
                        onSlotSelect: o,
                        forCovidVaccination: d,
                        secondSlot: m,
                        firstSlotAppointmentId: u,
                        setDisplayTitle: h
                    })
                },
                T = (e, t, n) => {
                    let {
                        startDate: i,
                        visitMotiveIds: s,
                        agendaIds: l,
                        practiceIds: r,
                        appointmentId: c,
                        insuranceSector: d,
                        telehealth: m,
                        slot: p,
                        limit: u = 5
                    } = e;
                    return o.ZP.get("/availabilities.json", {
                        query: {
                            start_date: a()(i).format("YYYY-MM-DD"),
                            visit_motive_ids: s.join("-"),
                            agenda_ids: l.join("-"),
                            practice_ids: r ? r.join("-") : null,
                            appointment_id: c,
                            insurance_sector: d,
                            first_slot: p,
                            telehealth: m,
                            ...n && {
                                second_slot: !0
                            },
                            limit: u
                        },
                        signal: t
                    })
                },
                C = e => {
                    let {
                        bookingShow: t,
                        isTelehealthPractitioner: n,
                        onSelectSlot: i,
                        funnelData: a,
                        alternativeData: o,
                        secondSlot: s,
                        unavailableSlots: l,
                        forCovidVaccination: r,
                        slot: c,
                        firstSlotAppointmentId: d,
                        setDisplayTitle: m
                    } = e;
                    return (0, w.jsx)(k, {
                        bookingShow: t,
                        funnelData: a,
                        alternativeData: o,
                        isTelehealthPractitioner: n,
                        onSlotSelect: i,
                        slot: c,
                        forCovidVaccination: r,
                        secondSlot: s,
                        unavailableSlots: l,
                        firstSlotAppointmentId: d,
                        setDisplayTitle: m
                    })
                }
        },
        145082: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var i = n(294184),
                a = n.n(i),
                o = n(396026),
                s = n.n(o),
                l = n(165668),
                r = n(785893);
            const c = e => {
                let {
                    count: t,
                    uiStyle: n,
                    noShadow: i,
                    className: o,
                    direction: c = "row"
                } = e;
                return (0, r.jsx)("div", {
                    className: a()({
                        flex: "row" === c,
                        "dl-gap-16": "row" === c
                    }, o),
                    children: s()(t).map((e => (0, r.jsx)(l.S, {
                        uiStyle: n,
                        noShadow: i,
                        className: a()({
                            "dl-margin-y-16": t > 1 && "column" === c,
                            "dl-margin-x-8": t > 1 && "column" === c
                        })
                    }, e)))
                })
            }
        },
        886602: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var i = n(785893),
                a = n(184481),
                o = n(402804),
                s = n(931381),
                l = n(871092);
            const r = e => {
                    let {
                        data: t,
                        reason: n,
                        children: a
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: "dl-margin-t-16",
                        children: [(0, i.jsx)(l.Z, {
                            title: (0, s.cu)(t, n),
                            message: (0, o.Oi)(t)
                        }), a]
                    })
                },
                c = (0, a.memo)(r)
        },
        518634: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var i = n(785893),
                a = n(445884),
                o = n(182888);
            const s = e => {
                let {
                    appointmentRequestSlots: t
                } = e;
                return t.length < 1 ? null : (0, i.jsxs)("div", {
                    className: "availabilities-appointment-request-description",
                    children: [(0, i.jsx)(o.Z, {}), (0, i.jsx)("span", {
                        className: "availabilities-appointment-request-text",
                        children: a.Z.t("patient_common.root.profiles.booking.availabilities.appointment_requests")
                    })]
                })
            }
        },
        391337: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => k
            });
            var i = n(785893),
                a = n(184481),
                o = n(935300),
                s = n(24553),
                l = n(462814),
                r = n(983923),
                c = n(712722),
                d = n(552691),
                m = n(940919),
                p = n(164544),
                u = n(784600),
                h = n(545763),
                _ = n(453040),
                x = n(929014),
                g = n(845126),
                v = n(445884),
                f = n(990626),
                Z = n(989231),
                j = n(708221),
                b = n(516590),
                y = n(5212),
                N = n(261397);
            const S = e => {
                    let {
                        children: t
                    } = e;
                    const n = (0, s.useNavigate)();
                    return (0, i.jsxs)(c.Z, {
                        children: [(0, i.jsx)(d.Z, {
                            title: v.Z.t("common.password_reset.new_password"),
                            children: (0, i.jsx)(m.Z, {
                                position: "left",
                                onTap: () => n(-1),
                                icon: (0, i.jsx)(g.Z, {
                                    name: "chevron-left",
                                    size: "medium"
                                }),
                                title: v.Z.t("common.actions.back")
                            })
                        }), (0, i.jsx)(p.Z, {
                            className: "dl-layout-body-white dl-padding-16 dl-full-height",
                            margin: !1,
                            children: t
                        })]
                    })
                },
                w = e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(p.Z, {
                        className: "dl-display-flex dl-justify-center",
                        children: (0, i.jsx)(u.Z, {
                            className: "device-verification-card dl-margin-16",
                            children: t
                        })
                    })
                },
                k = () => {
                    const {
                        updatePassphraseVerificationMethod: e
                    } = (0, a.useContext)(N.WA), t = (0, s.useParams)().id;
                    if (!t) throw new Error("access to this page without a token is not possible");
                    const {
                        isLoading: n,
                        data: c,
                        isSuccess: d,
                        mutate: m
                    } = (0, Z.O)(t), p = (0, y.rl)() ? S : w, u = (0, a.useCallback)((async t => {
                        (0, b.ZP)({
                            name: "password_modification_sent",
                            details: {
                                kind: (0, f.cr)("send_client_side_pwd_hash") ? "hash" : "password",
                                account_kind: "patient"
                            }
                        });
                        let n = t;
                        if ((0, f.cr)("send_client_side_pwd_hash")) {
                            n = {
                                hash: await (0, o.prehashPassword)(t.password)
                            }
                        }
                        m(n, {
                            onSuccess: async n => {
                                var i;
                                const {
                                    bodyData: a
                                } = n;
                                null !== (i = a.account.tanker_identity) && void 0 !== i && i.passphrase_registered_at && await e({
                                    account: a.account,
                                    currentPassword: null,
                                    newPassword: t.password,
                                    trackingOrigin: "new_password_form"
                                }), (0, j.Z)(a.redirection)
                            }
                        })
                    }), [e, m]);
                    return (0, i.jsxs)(p, {
                        children: [(0, i.jsx)(_.Z, {
                            uiStyle: "title-l-bold",
                            className: "dl-margin-b",
                            component: "h1",
                            children: v.Z.t("common.password_reset.send")
                        }), (0, i.jsx)(l.Z, {
                            onSubmit: u,
                            children: e => (0, i.jsxs)(i.Fragment, {
                                children: [c && c.errors ? (0, i.jsx)(x.Z, {
                                    variant: "deprecated-alert-interface",
                                    uiStyle: "error",
                                    className: "dl-margin-y-16",
                                    children: ((null === c || void 0 === c ? void 0 : c.errors) || [v.Z.t("common.error")]).map((e => (0, i.jsx)("div", {
                                        children: e
                                    }, e)))
                                }) : null, (0, i.jsx)(r.Z, {
                                    noEmptyHint: !0,
                                    field: "password",
                                    required: !0,
                                    placeholder: v.Z.t("common.password_reset.new_password"),
                                    label: null,
                                    disabled: n
                                }), (0, i.jsx)(h.Z, {
                                    type: "submit",
                                    block: !0,
                                    disabled: n || d && !c.errors || !!e.errors,
                                    children: v.Z.t("common.password_reset.send")
                                })]
                            })
                        })]
                    })
                }
        },
        47871: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => j
            });
            var i = n(785893),
                a = n(184481),
                o = n(445884),
                s = n(78599),
                l = n(516590),
                r = n(747317),
                c = n(5212),
                d = n(580163),
                m = n(192772),
                p = n(929014),
                u = n(453040),
                h = n(169339),
                _ = n(297516),
                x = n(545763),
                g = n(383915),
                v = n(968461),
                f = n(999722),
                Z = n(722191);
            const j = e => {
                let {
                    show: t,
                    closeModal: n,
                    appointmentId: j,
                    openCancelationModal: b,
                    rules: y,
                    disableNotifications: N = !1
                } = e;
                const S = (0, d.ZP)(),
                    w = (0, m.ZP)(),
                    k = e => (0, l.ZP)({
                        name: e,
                        itemType: r.i.APPOINTMENT,
                        itemId: j
                    });
                (0, a.useEffect)((() => {
                    const {
                        tcs_converted: e
                    } = (0, s.e3)(window.location.search);
                    e && !N && S({
                        title: o.Z.t("patient_common.root.appointments.convert_to_telehealth.toast.title"),
                        message: o.Z.t("patient_common.root.appointments.convert_to_telehealth.toast.appointment_converted"),
                        duration: 1e4,
                        action: {
                            message: o.Z.t("patient_common.root.appointments.convert_to_telehealth.toast.pay"),
                            onClick: () => {
                                w.show({
                                    pathname: `/appointments/${j}/charges/new`,
                                    search: "tcs_converted=true"
                                })
                            }
                        }
                    })
                }), []);
                const {
                    mutate: T
                } = (0, Z.b)({
                    appointmentId: j,
                    onSuccess: e => {
                        let {
                            redirection: t
                        } = e;
                        n(), window.location.href = t
                    },
                    onError: () => {
                        S({
                            message: o.Z.t("common.error"),
                            uiStyle: "warning"
                        })
                    }
                }), C = (0, i.jsx)(x.Z, {
                    onTap: () => {
                        k("telehealth_confirm_convert_dialog"), T()
                    },
                    children: o.Z.t("patient_common.root.appointments.convert_to_telehealth.modal.confirm")
                }), E = (0, i.jsx)(x.Z, {
                    onTap: () => {
                        n(), b && b(), k("telehealth_cancel_convert_dialog")
                    },
                    uiStyle: "info-link",
                    children: o.Z.t("patient_common.root.appointments.convert_to_telehealth.modal.cancel")
                });
                return (0, i.jsxs)(h.Z, {
                    title: o.Z.t("patient_common.root.appointments.convert_to_telehealth.modal.header"),
                    size: "medium",
                    onHide: n,
                    show: t,
                    children: [(0, i.jsx)(g.Z, {
                        alignText: "left",
                        children: (0, i.jsxs)(_.Z, {
                            children: [(0, i.jsx)(p.Z, {
                                variant: "deprecated-alert-interface",
                                uiStyle: "info",
                                children: o.Z.t("patient_common.root.appointments.convert_to_telehealth.modal.confirmation_message")
                            }), (null === y || void 0 === y ? void 0 : y.length) > 0 && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(u.Z, {
                                    className: "dl-margin-y-16",
                                    uiStyle: "title-s-bold",
                                    children: o.Z.t("patient_common.root.appointments.convert_to_telehealth.modal.rules_title")
                                }), y.map((e => (0, i.jsx)("div", {
                                    className: "dl-margin-b",
                                    children: (0, i.jsx)(f.Z, {
                                        children: e.body
                                    })
                                }, e.id)))]
                            })]
                        })
                    }), (0, i.jsxs)(v.Z, {
                        children: [(0, c.Zz)() ? E : C, (0, c.Zz)() ? C : E]
                    })]
                })
            }
        },
        270514: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => i
            });
            const i = "cov19"
        },
        377612: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => q
            });
            var i = n(785893),
                a = n(184481),
                o = n(24553),
                s = n(845126),
                l = n(511466),
                r = n(784600),
                c = n(453040),
                d = n(778075),
                m = n(5212),
                p = n(445884),
                u = n(552691),
                h = n(940919),
                _ = n(712722),
                x = n(164544),
                g = n(218334),
                v = n(545763),
                f = n(462814),
                Z = n(528846);
            const j = n.p + "2ae164020ffb80af2477.png";
            var b = n(977954),
                y = n.n(b),
                N = n(261397),
                S = n(239417),
                w = n(176307);
            var k = n(516590),
                T = n(8955);
            const C = {
                    InvalidVerification: p.Z.t("tanker.wrong_code"),
                    TooManyAttempts: p.Z.t("tanker.errors.too_many_attempts"),
                    ExpiredVerification: p.Z.t("tanker.errors.expired_verification"),
                    Default: p.Z.t("api.accounts.index.root.notifications.temporary_error")
                },
                E = e => {
                    let {
                        accountId: t,
                        tankerIdentity: n,
                        email: i,
                        token: o
                    } = e;
                    const {
                        isLoading: s,
                        error: l,
                        data: r,
                        mutate: c
                    } = (() => {
                        const e = (0, a.useContext)(S._O);
                        return (0, w.useMutation)((t => {
                            let {
                                email: n,
                                token: i
                            } = t;
                            return e.post("/api/security/tanker_identities/send_device_verification_email", {
                                body: {
                                    id: i,
                                    email: n,
                                    method: "verifyWithCode"
                                }
                            })
                        }), {
                            onSuccess: async (e, t) => {
                                let {
                                    bodyData: n
                                } = e, {
                                    email: i
                                } = t;
                                return "verification_code" in n && (0, N.IG)(i, n.verification_code), n
                            }
                        })
                    })(), {
                        codeIsVerified: d,
                        error: m,
                        setError: p,
                        startTankerWithVerificationCode: u
                    } = (e => {
                        let {
                            tankerIdentity: t
                        } = e;
                        const {
                            startTankerWithVerificationMethod: n
                        } = (0, a.useContext)(N.WA), [i, o] = (0, a.useState)(null), [s, l] = (0, a.useState)(null);
                        return {
                            codeIsVerified: s,
                            error: i,
                            setError: o,
                            startTankerWithVerificationCode: async (e, i) => {
                                try {
                                    const a = {
                                            tanker_identity: t
                                        },
                                        s = {
                                            email: e,
                                            verificationCode: i
                                        };
                                    await n(a, s), l(!0), o(null)
                                } catch (e) {
                                    e instanceof Error && Object.keys(C).includes(e.name) ? o(e.name) : o("Default"), l(!1)
                                }
                            }
                        }
                    })({
                        tankerIdentity: n
                    }), h = !s && !r && !l;
                    (e => {
                        let {
                            accountId: t,
                            codeIsVerified: n,
                            error: i
                        } = e;
                        (0, a.useEffect)((() => {
                            null !== n && (0, k.ZP)({
                                name: "start_tanker_with_verification_code",
                                itemType: "account",
                                itemId: String(t),
                                details: {
                                    kind: "email",
                                    success: n,
                                    ...i ? {
                                        error_type: i
                                    } : {}
                                }
                            }, {
                                schema: "tanker_event"
                            })
                        }), [t, n, i])
                    })({
                        accountId: t,
                        codeIsVerified: d,
                        error: m
                    }), (e => {
                        let {
                            sendDeviceVerificationEmail: t,
                            shouldRequestCode: n,
                            errorDeviceMail: i,
                            email: o,
                            token: s,
                            setError: l
                        } = e;
                        (0, a.useEffect)((() => {
                            if (i && l("Default"), !n) return;
                            const e = (0, T.U2)("DeviceVerificationMailThrottle");
                            e && y()().isBefore(y()(e)) || (t({
                                email: o,
                                token: s
                            }), (0, T.t8)("DeviceVerificationMailThrottle", y()().add(1, "minute")))
                        }), [t, n, i, o, s, l])
                    })({
                        sendDeviceVerificationEmail: c,
                        shouldRequestCode: h,
                        errorDeviceMail: l,
                        email: i,
                        token: o,
                        setError: p
                    });
                    return {
                        isLoading: s,
                        codeIsVerified: d,
                        errorMessage: m ? C[m] : "",
                        sendDeviceVerificationEmail: c,
                        onVerificationCodeChange: async e => {
                            e.every((e => !Number.isNaN(parseInt(e, 10)))) && i && await u(i, e.join(""))
                        }
                    }
                },
                P = ["", "", "", "", "", "", "", ""],
                I = e => {
                    let {
                        accountId: t,
                        tankerIdentity: n,
                        email: s,
                        token: r
                    } = e;
                    const [d, u] = (0, a.useState)(P), [h, _] = (0, a.useState)(!1), {
                        isLoading: x,
                        codeIsVerified: b,
                        errorMessage: y,
                        onVerificationCodeChange: N,
                        sendDeviceVerificationEmail: S
                    } = E({
                        accountId: t,
                        tankerIdentity: n,
                        email: s,
                        token: r
                    });
                    return x && !h ? (0, i.jsx)(l.Z, {}) : b ? (0, i.jsx)(o.Navigate, {
                        replace: !0,
                        to: {
                            pathname: `/account/passwords/${r}/edit`,
                            search: window.location.search
                        }
                    }) : (0, i.jsxs)("div", {
                        className: "dl-device-verification dl-flex-column dl-full-height",
                        children: [(0, i.jsx)("div", {
                            className: "dl-full-width dl-flex-center dl-margin-t-16",
                            children: (0, i.jsx)(Z.Z, {
                                src: j,
                                alt: "unlock-device",
                                width: 120,
                                height: 120
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(c.Z, {
                                uiStyle: "title-l-bold",
                                className: "dl-text-center dl-margin-b-24 dl-margin-t-24",
                                children: p.Z.t("tanker.device_verification.title")
                            }), (0, i.jsx)(c.Z, {
                                className: "dl-text-center",
                                children: p.Z.t("tanker.device_verification.description")
                            }), (0, i.jsx)(f.Z, {
                                horizontal: !1,
                                validityIndicators: !1,
                                children: (0, i.jsx)("div", {
                                    className: "dl-anonymous-form-validation-wrapper dl-align-items-center dl-justify-center",
                                    children: (0, i.jsx)(g.ZP, {
                                        autoFocusOnMount: !0,
                                        inputMode: "numeric",
                                        pattern: "[0-9]*",
                                        errorMessage: y,
                                        showError: Boolean(y),
                                        displayMode: g.B.ALWAYS_VISIBLE,
                                        values: d,
                                        onChange: e => {
                                            let {
                                                values: t
                                            } = e;
                                            return (async e => {
                                                u(e), N(e)
                                            })(t)
                                        }
                                    })
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "dl-footer-container dl-layout-body-white dl-padding-0",
                            children: [(0, i.jsx)(c.Z, {
                                uiStyle: "body-s-regular",
                                className: "dl-text-center dl-text-s dl-text-neutral-090",
                                children: p.Z.t("tanker.email_sent_help")
                            }), (0, i.jsxs)("div", {
                                className: "inline-block dl-margin-t-8",
                                children: [(0, i.jsx)(v.Z, {
                                    disabled: h,
                                    uiStyle: "link-primary",
                                    className: "dl-padding-4",
                                    onClick: () => {
                                        _(!0), S({
                                            email: s,
                                            token: r
                                        })
                                    },
                                    children: p.Z.t("tanker.resend_email")
                                }), (0, i.jsx)(c.Z, {
                                    className: "dl-padding-4",
                                    children: "\u2022"
                                }), (0, i.jsx)(v.Z, {
                                    uiStyle: "link-primary",
                                    className: "dl-padding-4",
                                    href: `https://doctolibpatient.zendesk.com/hc/${(0,m.rZ)()}/articles/360025317194`,
                                    target: "_new",
                                    children: p.Z.t("tanker.device_verification.help")
                                })]
                            })]
                        })]
                    })
                };
            var A;
            ! function(e) {
                e[e.Ready = 0] = "Ready", e[e.NoIdentity = 1] = "NoIdentity", e[e.NoEmail = 2] = "NoEmail", e[e.UnknownDevice = 3] = "UnknownDevice"
            }(A || (A = {}));
            const D = e => {
                    let {
                        show: t,
                        setShow: n
                    } = e;
                    const a = (0, o.useNavigate)();
                    return t ? (0, i.jsx)(d.Z, {
                        title: p.Z.t("tanker.device_verification.exit_dialog.title"),
                        dismissText: p.Z.t("common.actions.continue"),
                        acceptText: p.Z.t("common.actions.quit"),
                        show: t,
                        onDismiss: () => n(!1),
                        onAccept: () => a("/sessions/new"),
                        children: (0, i.jsx)(c.Z, {
                            children: p.Z.t("tanker.device_verification.exit_dialog.content")
                        })
                    }) : null
                },
                M = e => {
                    let {
                        children: t
                    } = e;
                    const [n, o] = (0, a.useState)(!1);
                    return (0, i.jsxs)(_.Z, {
                        children: [(0, i.jsx)(u.Z, {
                            title: p.Z.t("tanker.device_verification.page_title"),
                            children: (0, i.jsx)(h.Z, {
                                position: "left",
                                onTap: () => o(!0),
                                icon: (0, i.jsx)(s.Z, {
                                    name: "chevron-left",
                                    size: "medium"
                                }),
                                title: p.Z.t("common.actions.close")
                            })
                        }), (0, i.jsxs)(x.Z, {
                            className: "dl-layout-body-white dl-full-height dl-padding-16 dl-padding-b-32",
                            margin: !1,
                            children: [(0, i.jsx)(D, {
                                show: n,
                                setShow: o
                            }), t]
                        })]
                    })
                },
                R = e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(x.Z, {
                        className: "flex dl-justify-center",
                        children: (0, i.jsx)(r.Z, {
                            className: "device-verification-card dl-margin-16",
                            children: t
                        })
                    })
                },
                O = e => {
                    const t = (0, m.rl)() ? M : R;
                    if (e.shouldDisplaySpinner) return (0, i.jsx)(t, {
                        children: (0, i.jsx)(l.Z, {})
                    });
                    if (null == e.verifiedEmail) return (0, i.jsx)(o.Navigate, {
                        replace: !0,
                        to: e.redirectLocation
                    });
                    if ("redirectLocation" in (n = e) && "verifiedEmail" in n && null != n.redirectLocation && null != n.verifiedEmail) return (0, i.jsx)(o.Navigate, {
                        replace: !0,
                        to: e.redirectLocation
                    });
                    var n;
                    const {
                        accountId: a,
                        verifiedEmail: s,
                        emailSecurityToken: r,
                        tankerIdentity: c
                    } = e;
                    return (0, i.jsx)(t, {
                        children: (0, i.jsx)(I, {
                            accountId: a,
                            email: s,
                            token: r,
                            tankerIdentity: c
                        })
                    })
                },
                L = async (e, t, n) => {
                    const {
                        isError: i,
                        accountId: a,
                        tankerIdentity: o
                    } = e;
                    if (i) return {
                        shouldDisplaySpinner: !1,
                        redirectLocation: {
                            pathname: "/sessions/new"
                        },
                        verifiedEmail: null
                    };
                    const {
                        deviceVerificationStatus: s,
                        verifiedEmail: l
                    } = await (async (e, t) => {
                        let n = null,
                            i = null;
                        if (e.value) {
                            const a = await t({
                                tanker_identity: e
                            });
                            null === a.verifiedEmail && (n = A.NoEmail), n = a.isReady ? A.Ready : A.UnknownDevice, i = a.verifiedEmail
                        } else n = A.NoIdentity;
                        return {
                            deviceVerificationStatus: n,
                            verifiedEmail: i
                        }
                    })(o, t);
                    return { ...{
                            accountId: a,
                            tankerIdentity: o,
                            verifiedEmail: l,
                            shouldDisplaySpinner: !1,
                            deviceVerificationStatus: s
                        },
                        ...[A.Ready, A.NoIdentity, A.NoEmail].includes(s) ? {
                            redirectLocation: (r = n, {
                                pathname: `/account/passwords/${r}/edit`,
                                search: window.location.search
                            })
                        } : {}
                    };
                    var r
                },
                F = e => {
                    const {
                        checkTankerStatus: t
                    } = (0, a.useContext)(N.WA), [n, i] = (0, a.useState)({
                        shouldDisplaySpinner: !0
                    }), o = (e => {
                        const t = (0, a.useContext)(S._O),
                            {
                                isError: n,
                                data: i
                            } = (0, w.useQuery)(["api", "security", "tanker_identities", "reset_identity", e], (() => t.post("/api/security/tanker_identities/reset_identity", {
                                body: {
                                    id: e
                                }
                            }).then((e => e.bodyData))), {});
                        return (0, a.useMemo)((() => i ? {
                            isError: n,
                            accountId: i.account_id,
                            tankerIdentity: i.tanker_identity
                        } : null), [n, i])
                    })(e);
                    var s;
                    return (0, a.useEffect)((() => {
                        o && L(o, t, e).then((e => {
                            i(e)
                        }))
                    }), [o, t, e]), s = n, (0, a.useEffect)((() => {
                        if (!("deviceVerificationStatus" in (e = s)) || void 0 === e.deviceVerificationStatus) return;
                        var e;
                        const {
                            accountId: t,
                            deviceVerificationStatus: n
                        } = s;
                        let i = {
                            kind: "email"
                        };
                        i = n === A.NoIdentity ? { ...i,
                            success: !1,
                            error_type: "no identity"
                        } : n === A.Ready ? { ...i,
                            success: !0
                        } : { ...i,
                            success: !1,
                            error_type: "unknown device"
                        }, (0, k.ZP)({
                            name: "trying_to_start_tanker",
                            itemType: "account",
                            itemId: String(t),
                            details: i
                        }, {
                            schema: "tanker_event"
                        })
                    }), [s]), n
                },
                q = e => {
                    let {
                        emailSecurityToken: t
                    } = e;
                    const n = F(t);
                    return (0, i.jsx)(O, { ...n,
                        emailSecurityToken: t
                    })
                }
        },
        161424: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => s
            });
            var i = n(785893),
                a = n(24553),
                o = n(377612);
            const s = () => {
                const {
                    id: e
                } = (0, a.useParams)();
                if (!e) throw new Error("email security token is not present");
                return (0, i.jsx)(o.Z, {
                    emailSecurityToken: e
                })
            }
        },
        722191: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => l,
                t: () => s
            });
            var i = n(184481),
                a = n(174976),
                o = n(239417);
            const s = e => {
                    let {
                        appointmentId: t,
                        onSuccess: n,
                        enabled: s
                    } = e;
                    const l = (0, i.useContext)(o._O);
                    return (0, a.useQuery)(["appointments", t, "telehealth_conversion", "new"], (() => l.get(`/appointments/${t}/telehealth_conversion/new`).then((e => {
                        let {
                            bodyData: t
                        } = e;
                        return t
                    }))), {
                        onSuccess: n,
                        enabled: s
                    })
                },
                l = e => {
                    let {
                        appointmentId: t,
                        onSuccess: n,
                        onError: s
                    } = e;
                    const l = (0, i.useContext)(o._O);
                    return (0, a.useMutation)((() => l.request({
                        method: "POST",
                        pathname: `/appointments/${t}/telehealth_conversion.json`
                    }).then((e => {
                        let {
                            bodyData: t
                        } = e;
                        return t
                    }))), {
                        onSuccess: n,
                        onError: s
                    })
                }
        },
        439390: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => m
            });
            var i = n(785893),
                a = n(445884),
                o = n(755506),
                s = n(496486),
                l = n(216535),
                r = n(104130),
                c = n(669276),
                d = n(184666);
            const m = e => {
                let {
                    appointmentDateTime: t,
                    appointmentDetails: n,
                    profileId: m,
                    ...p
                } = e;
                const {
                    onClickCardTitle: u
                } = (0, d.Z)({
                    profileId: m
                });
                return (0, i.jsxs)("aside", {
                    "aria-labelledby": "slot-selection-funnel-recap-card",
                    className: "dl-rounded-borders dl-white-bg",
                    children: [(0, i.jsx)("h2", {
                        id: "slot-selection-funnel-recap-card",
                        className: "sr-only",
                        children: a.Z.t("slot_selection_funnel.appointment_card.details_title")
                    }), t && (0, i.jsx)(l.Z, {
                        appointmentDateTime: t
                    }), (0, i.jsx)(c.Z, {
                        onClickCardTitle: u,
                        ...p
                    }), !(0, s.isEmpty)(n) && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.Z, {}), (0, i.jsx)(r.Z, {
                            appointmentDetails: n
                        })]
                    })]
                })
            }
        },
        49284: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var i = n(785893),
                a = n(294184),
                o = n.n(a),
                s = n(170371),
                l = n(554066);
            const r = e => {
                let {
                    fullName: t,
                    hasSomeVaccineMotives: n
                } = e;
                const a = o()({
                    "dl-margin-t-16 dl-margin-b-16": t || n
                });
                return (0, i.jsxs)("div", {
                    className: a,
                    children: [t && (0, i.jsx)(s.Z, {
                        fullName: t,
                        className: o()({
                            "dl-margin-b-8": n
                        })
                    }), n && (0, i.jsx)(l.Z, {})]
                })
            }
        },
        790744: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var i = n(785893),
                a = n(414293),
                o = n.n(a),
                s = n(49284),
                l = n(102732);
            const r = e => {
                let {
                    bookingInfo: t
                } = e;
                const {
                    fullName: n,
                    hasSomeVaccineMotives: a
                } = (0, l.Z)({
                    bookingInfo: t
                });
                return o()(n) && !a ? null : (0, i.jsx)(s.Z, {
                    fullName: n,
                    hasSomeVaccineMotives: a
                })
            }
        },
        102732: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var i = n(359176);
            const a = e => {
                var t;
                let {
                    bookingInfo: n
                } = e;
                return {
                    fullName: null === (t = window.current_account) || void 0 === t ? void 0 : t.full_name,
                    hasSomeVaccineMotives: (0, i.pG)(null === n || void 0 === n ? void 0 : n.visit_motives)
                }
            }
        },
        554066: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var i = n(785893),
                a = n(445884),
                o = n(642979);
            const s = () => (0, i.jsx)("div", {
                className: "dl-footer-content m-auto flex dl-justify-center",
                children: (0, i.jsx)("div", {
                    className: "flex dl-justify-between dl-align-items-center dl-text-center",
                    children: (0, i.jsxs)("div", {
                        className: "dl-footer-help-text flex flex-wrap dl-flex-grow-shrink-auto",
                        children: [(0, i.jsx)("div", {
                            className: "dl-text dl-text-s dl-text-regular dl-margin-r-8",
                            children: a.Z.t("layouts.footer_help_partners.help_title")
                        }), (0, i.jsx)(o.Z, {
                            className: "dl-font-700 dl-text-s dl-flex-shrink-zero",
                            href: "/help",
                            target: "_blank",
                            children: a.Z.t("layouts.footer_help.help_button")
                        })]
                    })
                })
            })
        },
        170371: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var i = n(785893),
                a = n(294184),
                o = n.n(a),
                s = n(445884),
                l = n(642979);
            const r = e => {
                let {
                    fullName: t,
                    className: n
                } = e;
                const a = o()("dl-partners-login-info", "flex", "dl-flex-column", "dl-align-items-center", "dl-text", "dl-text-body", "dl-text-regular", "dl-text-s", n);
                return (0, i.jsxs)("div", {
                    className: a,
                    children: [(0, i.jsx)("div", {
                        children: s.Z.t("profiles.show.current_account_info_partners")
                    }), (0, i.jsxs)("div", {
                        className: "flex dl-font-700",
                        children: [(0, i.jsx)("div", {
                            className: "dl-margin-r-8",
                            children: t
                        }), (0, i.jsx)(l.Z, {
                            href: "/deconnexion",
                            children: s.Z.t("profiles.show.logout_for_partners")
                        })]
                    })]
                })
            }
        },
        139102: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => a
            });
            var i = n(445884);
            n(931381);
            const a = e => {
                if (!e.bookingDisabled && !e.bookingTemporaryDisabled) return e.forCovidVaccination && !e.secondShotAppointment && e.vaccinationDaysRange && e.vaccinationDaysRange > 0 ? e.secondSlot ? i.Z.t("common.mobile.availabilities.subtitle_second_shot") : i.Z.t("common.mobile.availabilities.subtitle_first_shot") : i.Z.t("common.mobile.availabilities.subtitle")
            }
        },
        861800: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var i = n(785893),
                a = n(453040),
                o = n(297516),
                s = n(712722),
                l = n(790744),
                r = n(5212),
                c = n(184481),
                d = n(294184),
                m = n.n(d);
            const p = e => {
                let {
                    bookingInfo: t,
                    children: n,
                    displayTitle: d = !0,
                    autoFocus: p = !1,
                    isRelative: u,
                    transparentBackground: h,
                    subtitle: _,
                    title: x
                } = e;
                const g = (0, c.useRef)();
                return (0, c.useEffect)((() => {
                    p && setTimeout((() => {
                        g.current && g.current.focus()
                    }), 500)
                }), [p, x]), (0, i.jsxs)(s.Z, {
                    uiStyle: h ? "translucid" : void 0,
                    className: m()({
                        "dl-position-relative": u
                    }),
                    children: [d && x && (0, i.jsx)(a.Z, {
                        ref: g,
                        component: "h2",
                        tabIndex: "-1",
                        uiStyle: "title-s-bold",
                        className: "dl-margin-x-16 dl-margin-t-24 dl-outline-none",
                        children: x
                    }), (0, i.jsxs)(o.Z, {
                        className: "dl-padding-x-16 dl-padding-b-24",
                        children: [_ && (0, i.jsx)(a.Z, {
                            component: "p",
                            className: "dl-margin-b-16 dl-margin-t-4",
                            children: _
                        }), (0, i.jsx)("div", {
                            className: m()({
                                "dl-margin-t-16": d
                            }, {
                                "dl-full-height": !d
                            }),
                            children: n
                        })]
                    }), (0, r.dm)() && (0, i.jsx)(l.Z, {
                        bookingInfo: t
                    })]
                })
            }
        },
        829405: (e, t, n) => {
            "use strict";
            n.d(t, {
                g: () => o
            });
            var i = n(990626),
                a = n(5212);
            const o = () => {
                const e = (0, i.cr)("hero_in_cms") ? window.patient_engagement_hero : void 0,
                    t = Boolean(e) && "/" === window.location.pathname && (0, a.Gl)();
                return {
                    hero: e,
                    isBackgroundHero: t && (null === e || void 0 === e ? void 0 : e.is_background_image),
                    isClickableHero: t && !(null !== e && void 0 !== e && e.is_background_image)
                }
            }
        },
        795699: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => c
            });
            var i = n(785893),
                a = n(184481),
                o = n(294184),
                s = n.n(o),
                l = n(653591);
            n(355682);
            const r = e => {
                    let {
                        filled: t,
                        title: n,
                        onRate: a,
                        showTooltip: o,
                        size: r
                    } = e;
                    const c = (0, i.jsx)("span", {
                        role: "button",
                        onClick: a,
                        onKeyPress: e => {
                            "Enter" !== e.code && "Space" !== e.code || a()
                        },
                        className: s()("dl-rating-star", {
                            "dl-rating-star-selected": t,
                            "dl-rating-star-small": "small" === r
                        }),
                        tabIndex: 0,
                        "aria-label": n,
                        children: t ? "\u2605" : "\u2606"
                    });
                    return o ? (0, i.jsx)(l.Z, {
                        placement: "bottom",
                        tooltip: n,
                        children: c
                    }) : c
                },
                c = e => {
                    let {
                        name: t,
                        choices: n = [1, 2, 3, 4, 5],
                        onChange: o,
                        className: s,
                        showTooltip: l,
                        size: c
                    } = e;
                    const [d, m] = (0, a.useState)(0);
                    return (0, i.jsxs)("div", {
                        className: s,
                        "data-design-system": "oxygen",
                        children: [(0, i.jsx)("input", {
                            type: "hidden",
                            name: t,
                            value: d
                        }), n.map(((e, t) => (0, i.jsx)(r, {
                            showTooltip: l,
                            title: e.toString(),
                            filled: d > t,
                            size: c,
                            onRate: () => {
                                m(t + 1), o && o(t + 1)
                            }
                        }, t)))]
                    })
                }
        },
        540154: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => h,
                m: () => u
            });
            var i = n(785893),
                a = n(184481),
                o = n(294184),
                s = n.n(o),
                l = n(468644),
                r = n(23838),
                c = n(516590),
                d = (n(641792), n(845126)),
                m = n(453040),
                p = n(348187);
            const u = e => {
                    let {
                        className: t,
                        children: n,
                        transparentBackground: a = !1,
                        ...o
                    } = e;
                    return (0, i.jsx)("div", {
                        className: s()("dl-tabs", {
                            "dl-tabs-transparent": a
                        }, t),
                        ...o,
                        role: "tablist",
                        "data-design-system": "oxygen",
                        children: n
                    })
                },
                h = e => {
                    let {
                        active: t = !1,
                        children: n,
                        className: o,
                        component: u = "div",
                        leftIcon: h,
                        topIcon: _,
                        renderNotification: x,
                        trackingDetails: g,
                        trackingId: v,
                        onClick: f,
                        onTap: Z,
                        ...j
                    } = e;
                    const b = s()("dl-tab", {
                            "dl-tab-active": t,
                            "dl-tab-icon-vertical": _
                        }, o),
                        y = h || _,
                        N = { ...(0, a.useContext)(r.Z),
                            ...g
                        };
                    return (0, i.jsxs)(l.Z, {
                        component: u,
                        className: b,
                        ...j,
                        role: "tab",
                        "aria-selected": t,
                        tabIndex: 0,
                        onTap: Z && (0, c.J0)(Z, v, N),
                        onClick: f && (0, c.J0)(f, v, N),
                        "data-design-system": "oxygen",
                        children: [y && (0, i.jsx)(d.Z, {
                            name: y
                        }), (0, i.jsxs)(m.Z, {
                            uiStyle: "body-s-bold",
                            className: s()({
                                "dl-position-relative": x
                            }),
                            children: [n, x && (0, i.jsx)(p.Z, {})]
                        })]
                    })
                }
        },
        249361: (e, t, n) => {
            var i = n(184481);
            const a = i.forwardRef((function(e, t) {
                return i.createElement("svg", { ...e,
                    ref: t
                }, [i.createElement("defs", {
                    key: 0
                }, i.createElement("path", {
                    id: "attention_icon_a",
                    d: "M4 0h664a4 4 0 0 1 4 4v420a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                })), i.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    key: 1
                }, [i.createElement("path", {
                    d: "M-158-398h700V857h-700z",
                    key: 0
                }), i.createElement("g", {
                    transform: "translate(-144 -34)",
                    key: 1
                }, [i.createElement("mask", {
                    id: "attention_icon_b",
                    fill: "#fff",
                    key: 0
                }, i.createElement("use", {
                    xlinkHref: "#attention_icon_a"
                })), i.createElement("use", {
                    fill: "#FFF",
                    xlinkHref: "#attention_icon_a",
                    key: 1
                }), i.createElement("g", {
                    mask: "url(#attention_icon_b)",
                    key: 2
                }, i.createElement("path", {
                    d: "M165.3 47c0-5.134-4.164-9.3-9.3-9.3-5.136 0-9.3 4.166-9.3 9.3a9.3 9.3 0 0 0 9.3 9.3 9.3 9.3 0 0 0 9.3-9.3zm-9.3 1.875a1.725 1.725 0 1 1 0 3.45 1.725 1.725 0 0 1 0-3.45zm-1.638-6.2a.45.45 0 0 1 .45-.475h2.376a.45.45 0 0 1 .45.475l-.278 5.1a.45.45 0 0 1-.45.425h-1.82a.45.45 0 0 1-.45-.425l-.278-5.1z",
                    fill: "#E62638"
                }))])])])
            }));
            a.defaultProps = {
                viewBox: "0 0 25 25"
            }, e.exports = a, a.default = a
        },
        178714: (e, t, n) => {
            var i = n(184481);
            const a = i.forwardRef((function(e, t) {
                return i.createElement("svg", { ...e,
                    ref: t
                }, i.createElement("path", {
                    d: "M12.74 2.48c-.22-.32-.57-.48-1.08-.48-.43 0-.8.16-1.12.48-.72.65-.72 1.38 0 2.2l5.15 5.37-5.15 5.32c-.72.82-.72 1.56 0 2.2.28.29.66.43 1.12.43.47 0 .83-.14 1.08-.43l6.23-6.5c.28-.25.43-.59.43-1.02 0-.46-.15-.82-.43-1.07l-6.23-6.5z"
                }))
            }));
            a.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20"
            }, e.exports = a, a.default = a
        },
        436458: (e, t, n) => {
            var i = n(184481);
            const a = i.forwardRef((function(e, t) {
                return i.createElement("svg", { ...e,
                    ref: t
                }, i.createElement("path", {
                    d: "M9.15 10.8a.45.45 0 0 0 .45-.45v-.3a.45.45 0 0 0-.45-.45c0-1.706-.957-3.145-2.266-3.6 1.31-.455 2.266-1.894 2.266-3.6a.45.45 0 0 0 .45-.45v-.3a.45.45 0 0 0-.45-.45h-6.3a.45.45 0 0 0-.45.45v.3c0 .249.201.45.45.45 0 1.706.957 3.145 2.266 3.6-1.31.455-2.266 1.894-2.266 3.6a.45.45 0 0 0-.45.45v.3c0 .249.201.45.45.45h6.3zM7.743 3.6H4.258a3.518 3.518 0 0 1-.208-1.2h3.9c0 .428-.075.836-.207 1.2zm0 4.8H4.257c.32-.877.977-1.5 1.742-1.5s1.422.622 1.742 1.5z",
                    fill: "#435F71",
                    fillRule: "evenodd"
                }))
            }));
            a.defaultProps = {
                width: "12",
                height: "12"
            }, e.exports = a, a.default = a
        },
        445618: (e, t, n) => {
            var i = n(184481);
            const a = i.forwardRef((function(e, t) {
                return i.createElement("svg", { ...e,
                    ref: t
                }, i.createElement("path", {
                    d: "M10.8 19.5a.81.81 0 0 1-.8.5c-.05 0-.12 0-.2-.03a.88.88 0 0 1-.52-.32.9.9 0 0 1-.2-.56v-8.2H.92a.9.9 0 0 1-.55-.2.87.87 0 0 1-.32-.5.74.74 0 0 1 .05-.6c.07-.2.2-.35.4-.44L18.68.1a.9.9 0 0 1 1.05.17c.14.13.23.3.26.5 0 .18 0 .37-.1.55L10.8 19.5z"
                }))
            }));
            a.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20"
            }, e.exports = a, a.default = a
        },
        963885: (e, t, n) => {
            var i = n(184481);
            const a = i.forwardRef((function(e, t) {
                return i.createElement("svg", { ...e,
                    ref: t
                }, i.createElement("path", {
                    d: "M62.282 1.21a1 1 0 0 1 1.666.483l5.787 23.75c.256 1.05-1.106 1.704-1.764.847l-5.042-6.556c-.504-.657-1.55-.457-1.805.332-4.808 14.924-19.57 33.823-36.485 40.532-1.118.444-1.526-.876-.47-1.453 16.434-8.983 26.843-26.268 31.243-40.808.234-.771-.511-1.465-1.272-1.196l-8.849 3.122c-1.013.358-1.8-.916-1.027-1.662L62.282 1.21z"
                }))
            }));
            a.defaultProps = {
                width: "81",
                height: "66",
                viewBox: "0 0 81 66",
                fill: "currentColor"
            }, e.exports = a, a.default = a
        },
        287669: (e, t, n) => {
            var i = n(184481);
            const a = i.forwardRef((function(e, t) {
                return i.createElement("svg", { ...e,
                    ref: t
                }, [i.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M26.4 27.2a2.4 2.4 0 0 0 2.4-2.4V7.2a2.4 2.4 0 0 0-2.4-2.4H5.6a2.4 2.4 0 0 0-2.4 2.4v17.6a2.4 2.4 0 0 0 2.4 2.4h20.8zm-8.8-16.8c-.885 0-1.6-.715-1.6-1.6 0-.885.715-1.6 1.6-1.6.885 0 1.6.715 1.6 1.6 0 .885-.715 1.6-1.6 1.6zm-4.8 0c-.885 0-1.6-.715-1.6-1.6 0-.885.715-1.6 1.6-1.6.885 0 1.6.715 1.6 1.6 0 .885-.715 1.6-1.6 1.6zm-4.8 0c-.885 0-1.6-.715-1.6-1.6 0-.885.715-1.6 1.6-1.6.885 0 1.6.715 1.6 1.6 0 .885-.715 1.6-1.6 1.6zm18.1 14.4H5.9a.3.3 0 0 1-.3-.3V12.8h20.8v11.7a.3.3 0 0 1-.3.3z",
                    fill: "#224358",
                    key: 0
                }), i.createElement("circle", {
                    cx: "24",
                    cy: "24",
                    r: "8",
                    fill: "#E62638",
                    key: 1
                }), i.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "m25.19 24 2.693 2.693a.4.4 0 0 1 0 .564l-.625.626a.4.4 0 0 1-.565 0L24 25.19l-2.693 2.693a.4.4 0 0 1-.564 0l-.626-.625a.4.4 0 0 1 0-.565L22.81 24l-2.693-2.693a.4.4 0 0 1 0-.564l.626-.626a.4.4 0 0 1 .564 0L24 22.81l2.693-2.693a.4.4 0 0 1 .564 0l.626.625a.4.4 0 0 1 0 .565L25.19 24z",
                    fill: "#fff",
                    key: 2
                })])
            }));
            a.defaultProps = {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "currentColor"
            }, e.exports = a, a.default = a
        },
        12491: (e, t, n) => {
            var i = n(184481);
            const a = i.forwardRef((function(e, t) {
                return i.createElement("svg", { ...e,
                    ref: t
                }, i.createElement("path", {
                    d: "M17.78 2.22c.62 0 1.15.22 1.58.65.43.43.64.95.64 1.57v13.34c0 .6-.2 1.1-.64 1.55a2.1 2.1 0 0 1-1.58.67H2.22c-.6 0-1.1-.22-1.55-.67A2.1 2.1 0 0 1 0 17.78V4.44c0-.62.22-1.14.67-1.57.44-.43.96-.65 1.55-.65h1.02v2.22H6.8V2.22h6.44v2.22h3.56V2.22h.98M18 18V8H2v10h16M5.78 0v3.78H4.22V0h1.56m10 0v3.78h-1.56V0h1.56"
                }))
            }));
            a.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20"
            }, e.exports = a, a.default = a
        },
        223149: (e, t, n) => {
            var i = n(184481);
            const a = i.forwardRef((function(e, t) {
                return i.createElement("svg", { ...e,
                    ref: t
                }, i.createElement("path", {
                    d: "M10 0c2.8 0 5 1 7 3s3 4.2 3 7-1 5-3 7-4.2 3-7 3-5-1-7-3-3-4.2-3-7 1-5 3-7 4-3 7-3m0 17.8c2.2 0 4-.7 5.5-2.3a7.8 7.8 0 0 0 2.3-5.5c0-2.2-.7-4-2.3-5.5A7.47 7.47 0 0 0 10 2.2c-2 0-4 .7-5.5 2.3A7.47 7.47 0 0 0 2.2 10c0 2 .7 4 2.3 5.5a7.8 7.8 0 0 0 5.5 2.3m.8-13.5v5.4L14 13l-1 1-3.7-3.7v-6h1.5"
                }))
            }));
            a.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20"
            }, e.exports = a, a.default = a
        },
        559997: (e, t, n) => {
            var i = n(184481);
            const a = i.forwardRef((function(e, t) {
                return i.createElement("svg", { ...e,
                    ref: t
                }, i.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, [i.createElement("g", {
                    fill: "#17B355",
                    key: 0
                }, i.createElement("path", {
                    d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
                })), i.createElement("g", {
                    transform: "translate(5.000000, 5.000000)",
                    key: 1
                }, [i.createElement("rect", {
                    width: "10",
                    height: "10",
                    key: 0
                }), i.createElement("path", {
                    d: "M9.614.685a.823.823 0 0 0-.686-.168.991.991 0 0 0-.613.385L3.983 7.23 1.601 4.656a.82.82 0 0 0-.65-.313.966.966 0 0 0-.674.264 1.044 1.044 0 0 0-.276.698.952.952 0 0 0 .252.698c1.925 2.15 3.024 3.329 3.297 3.538a.93.93 0 0 0 .71.18.837.837 0 0 0 .59-.397l4.98-7.267a.974.974 0 0 0 .157-.722.964.964 0 0 0-.373-.65z",
                    fill: "#FFF",
                    key: 1
                })])]))
            }));
            a.defaultProps = {
                width: "20px",
                height: "20px",
                viewBox: "0 0 20 20"
            }, e.exports = a, a.default = a
        },
        737395: (e, t, n) => {
            var i = n(184481);
            const a = i.forwardRef((function(e, t) {
                return i.createElement("svg", { ...e,
                    ref: t
                }, [i.createElement("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none",
                    key: 0
                }), i.createElement("path", {
                    d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",
                    key: 1
                })])
            }));
            a.defaultProps = {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, e.exports = a, a.default = a
        },
        101055: () => {
            "use strict"
        },
        638761: () => {
            "use strict"
        },
        299250: () => {
            "use strict"
        },
        115490: () => {
            "use strict"
        },
        932382: () => {
            "use strict"
        },
        439703: () => {
            "use strict"
        },
        490757: () => {
            "use strict"
        },
        760233: () => {
            "use strict"
        }
    }
]);
//# sourceMappingURL=../32781-b2e8c35ee98a2231260a.js.map