"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [57630], {
        103461: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => q
            });
            var s = t(184481),
                a = t(445884),
                r = t(294184),
                o = t.n(r),
                i = t(288802),
                l = t(990626),
                c = t(8955),
                d = t(5212),
                u = t(545763),
                m = t(348187),
                p = t(755506),
                _ = t(800274),
                h = t(83057),
                b = t(239702),
                x = t(453040);
            const g = t.p + "7a4d2de37b3f8cecee2a.png";
            var v = t(440877);
            var E = t(785893);
            const k = e => {
                let {
                    show: n,
                    target: t
                } = e;
                const {
                    unreadDocumentsCount: r
                } = (0, s.useContext)(v.Z);
                return (0, E.jsx)(h.Z, {
                    show: n,
                    target: t,
                    placement: "bottom",
                    className: "dl-margin-0 dl-padding-0",
                    children: (0, E.jsx)(b.Z, {
                        className: "dl-unread-documents-popover dl-padding-0 dl-margin-0",
                        id: "unreadDocsInfo",
                        children: (0, E.jsxs)("div", {
                            className: "flex",
                            children: [(0, E.jsx)("img", {
                                src: g,
                                className: "dl-empty-image dl-margin-x-8",
                                alt: ""
                            }), (0, E.jsx)(x.Z, {
                                className: "dl-margin-0",
                                uiStyle: "body-s-bold",
                                children: a.Z.t("patient_mobile.root.user_menu.unread_documents_popover", {
                                    count: r
                                })
                            })]
                        })
                    })
                })
            };
            var N = t(320002),
                T = t(84741),
                Z = t(243540),
                f = t(829405),
                j = t(552691),
                C = t(617999),
                S = t(845126);
            const y = (0, s.forwardRef)(((e, n) => {
                let {
                    children: t,
                    icon: s,
                    ...a
                } = e;
                return (0, E.jsx)("li", {
                    className: "dl-full-height dl-flex-shrink-zero",
                    "data-design-system": "base",
                    children: (0, E.jsxs)("a", {
                        ref: n,
                        className: o()("dl-desktop-navbar-link", {
                            "dl-desktop-navbar-link-active": "/" !== a.href && window.location.pathname.startsWith(a.href)
                        }),
                        ...a,
                        children: [s && (0, E.jsx)(S.Z, {
                            name: s,
                            className: "dl-margin-r-8"
                        }), t]
                    })
                })
            }));
            var w = t(468644),
                P = t(160160);
            t(869197);
            const M = e => {
                    let {
                        children: n,
                        icon: t,
                        href: s,
                        onClick: a
                    } = e;
                    return (0, E.jsx)("li", {
                        "data-design-system": "base",
                        children: (0, E.jsxs)("a", {
                            className: "dl-desktop-navbar-menu-link",
                            href: s,
                            onClick: a,
                            children: [t && (0, E.jsx)(S.Z, {
                                name: t,
                                className: "dl-margin-r-8"
                            }), n]
                        })
                    })
                },
                I = e => {
                    let {
                        children: n,
                        title: t,
                        onClick: a,
                        ariaLabel: r
                    } = e;
                    const [o, i] = (0, s.useState)(!1), l = (0, s.useRef)((0, P.Z)()), c = (0, s.useRef)(), d = (0, s.useRef)();
                    (0, s.useEffect)((() => {
                        const e = e => {
                            var n;
                            null !== c && void 0 !== c && null !== (n = c.current) && void 0 !== n && n.contains(e.target) || i(!1)
                        };
                        return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
                    }), []), (0, s.useEffect)((() => {
                        const e = e => {
                            var n;
                            o && "Escape" === e.key && (i(!1), null === d || void 0 === d || null === (n = d.current) || void 0 === n || n.focus())
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }), [o]);
                    const u = {
                        "aria-expanded": o
                    };
                    return o && (u["aria-controls"] = l.current), (0, E.jsxs)("li", {
                        className: "dl-desktop-navbar-menu dl-full-height",
                        ref: c,
                        "data-design-system": "base",
                        children: [(0, E.jsxs)(w.Z, {
                            className: "dl-transparent-bg dl-border-none dl-desktop-navbar-link dl-desktop-navbar-menu-title",
                            component: "button",
                            "aria-label": r,
                            id: "account-menu",
                            onTap: e => {
                                e.preventDefault(), i((e => !e)), a()
                            },
                            innerRef: d,
                            type: "button",
                            ...u,
                            children: [t, (0, E.jsx)(S.Z, {
                                name: o ? "angle-up" : "angle-down",
                                className: "dl-margin-l-8"
                            })]
                        }), o && (0, E.jsx)("ul", {
                            id: l.current,
                            className: "dl-desktop-navbar-links dl-nav-bar-list",
                            children: n
                        })]
                    })
                },
                O = () => {
                    const {
                        hero: e
                    } = (0, f.g)();
                    return (null === e || void 0 === e ? void 0 : e.tagline) && (0, E.jsxs)("span", {
                        className: "dl-brand-tagline ml-8 text-[13px] leading-8 text-white font-medium font-['Montserrat'] ",
                        children: [(0, E.jsx)("span", {
                            "aria-hidden": !0,
                            children: "| "
                        }), e.tagline]
                    })
                };
            t(439712);
            const A = e => {
                    let {
                        onClick: n
                    } = e;
                    return (0, E.jsx)(y, {
                        href: "/sessions/new",
                        icon: "user",
                        onClick: n,
                        children: (0, E.jsxs)("div", {
                            children: [(0, E.jsx)("div", {
                                children: a.Z.t("patient_mobile.root.login.title")
                            }), (0, E.jsx)("div", {
                                style: {
                                    opacity: .7,
                                    fontSize: 12
                                },
                                children: a.Z.t("layouts.nav.manage_appointments")
                            })]
                        })
                    })
                },
                G = e => {
                    let {
                        b2b_url: n,
                        isB2bDisplayed: t,
                        trackAnchorClick: s
                    } = e;
                    return (0, E.jsxs)(E.Fragment, {
                        children: [t && (0, E.jsx)("li", {
                            children: (0, E.jsx)(u.Z, {
                                component: "a",
                                target: "_blank",
                                href: n,
                                uiStyle: "link-primary",
                                className: "dl-margin-x-16 dl-padding-x-16 dl-desktop-navbar-b2b-solid-btn",
                                onClick: () => s(l.ZP.GTM_EVENTS.B2B),
                                children: a.Z.t("layouts.application.are_you_doc")
                            })
                        }), (0, E.jsx)(y, {
                            href: (0, d._y)() ? `https://doctolib.zendesk.com/hc/${window.locale}` : `https://doctolibpatient.zendesk.com/hc/${window.locale}?source=help_button`,
                            icon: "circle-question",
                            onClick: () => s(l.ZP.GTM_EVENTS.HELP),
                            target: "_blank",
                            children: a.Z.t("patient_mobile.root.main_menu.help")
                        })]
                    })
                },
                q = e => {
                    var n;
                    let {
                        b2b_url: t,
                        hide_nav_links: r,
                        hideDocButton: u = !1,
                        hasTemporaryWarning: h = !1
                    } = e;
                    const b = (0, _.ZP)(),
                        x = b && !(0, d._y)(),
                        g = "/" === window.location.pathname,
                        {
                            isBackgroundHero: S
                        } = (0, f.g)(),
                        {
                            unreadDocumentsCount: w
                        } = (0, s.useContext)(v.Z),
                        {
                            count: P
                        } = (0, Z.Z)(),
                        {
                            data: q
                        } = (0, N.gd)(),
                        [L, V] = (0, s.useState)(g),
                        R = (0, s.useRef)(),
                        B = e => {
                            i.Z.trackGtmEvent({
                                category: l.ZP.GTM_CATEGORIES.NAVBAR,
                                action: e,
                                label: i.Z.getCurrentPageType()
                            })
                        };
                    if ((0, s.useEffect)((() => {
                            const e = window.addEventListener("resize", (() => V(!1)));
                            return () => window.removeEventListener("resize", e)
                        }), []), r) return (0, E.jsx)(j.Z, {
                        large: !b,
                        className: o()("dl-desktop-navbar", {
                            "dl-navbar-translucid": S && !h
                        }),
                        children: (0, E.jsxs)("div", {
                            className: "dl-desktop-navbar-content",
                            children: [(0, E.jsx)(C.Z, {}), (0, E.jsxs)("ul", {
                                className: "flex dl-align-items-center dl-nav-bar-list",
                                children: [(0, E.jsx)(G, {
                                    b2b_url: t,
                                    isB2bDisplayed: !x && !u,
                                    trackAnchorClick: B
                                }), x ? (0, E.jsx)(y, {
                                    href: "/deconnexion?redirect=/",
                                    icon: "right-from-bracket",
                                    onClick: () => {
                                        (0, c.SI)(), B(l.ZP.GTM_EVENTS.LOG_OUT)
                                    },
                                    children: a.Z.t("patient_mobile.root.user_menu.logout")
                                }) : !(0, d._y)() && (0, E.jsx)(A, {
                                    onClick: () => B(l.ZP.GTM_EVENTS.SIGN_IN)
                                })]
                            })]
                        })
                    });
                    let D = 0;
                    return b && !b.verified_at && (D += 1), b && !b.email_verified_at && (D += 1), (0, E.jsx)(j.Z, {
                        large: !b,
                        className: o()("dl-desktop-navbar", {
                            "dl-navbar-translucid": S && !h
                        }),
                        children: (0, E.jsxs)("div", {
                            className: "dl-desktop-navbar-content",
                            children: [(0, E.jsxs)("ul", {
                                className: "flex dl-align-items-center dl-nav-bar-list",
                                children: [(0, E.jsx)("li", {
                                    children: (0, E.jsx)("a", {
                                        href: "/",
                                        title: a.Z.t("common.home"),
                                        "aria-label": a.Z.t("common.home"),
                                        className: "flex",
                                        onClick: () => B(l.ZP.GTM_EVENTS.BACK_TO_HOME),
                                        children: (0, E.jsx)(C.Z, {})
                                    })
                                }), (0, E.jsx)(O, {}), b && !g && (0, E.jsx)(y, {
                                    href: "/",
                                    onClick: () => B(l.ZP.GTM_EVENTS.BACK_TO_HOME),
                                    children: a.Z.t("common.home")
                                })]
                            }), (0, E.jsxs)("ul", {
                                className: "flex dl-align-items-center dl-nav-bar-list",
                                children: [(0, E.jsx)(G, {
                                    b2b_url: t,
                                    isB2bDisplayed: !x && !u,
                                    trackAnchorClick: B
                                }), x ? (0, E.jsxs)(E.Fragment, {
                                    children: [T.Su.globally() && (0, E.jsxs)(y, {
                                        href: "/patient_requests/requests",
                                        onClick: () => B(l.ZP.GTM_EVENTS.MY_REQUESTS),
                                        children: [a.Z.t("patient_request.root.request_view.title"), P > 0 && (0, E.jsx)(m.Z, {
                                            className: "dl-margin-l-8",
                                            children: P
                                        })]
                                    }), (0, E.jsxs)(y, {
                                        href: "/account/appointments",
                                        onClick: () => B(l.ZP.GTM_EVENTS.MY_APPOINTMENTS),
                                        children: [a.Z.t("patient_mobile.root.user_menu.appointments"), q > 0 && (0, E.jsx)(m.Z, {
                                            className: "dl-margin-l-8",
                                            children: q
                                        })]
                                    }), (0, E.jsxs)(y, {
                                        href: "/account/documents",
                                        onClick: () => B(l.ZP.GTM_EVENTS.MY_DOCUMENTS),
                                        ref: R,
                                        children: [a.Z.t("patient_mobile.root.user_menu.documents"), w > 0 && (0, E.jsxs)(E.Fragment, {
                                            children: [(0, E.jsx)(k, {
                                                show: L,
                                                target: R.current
                                            }), (0, E.jsx)(m.Z, {
                                                className: "dl-margin-l-8",
                                                children: w
                                            })]
                                        })]
                                    }), (null === (n = b.patient_questions) || void 0 === n ? void 0 : n.length) > 0 && (0, E.jsx)(y, {
                                        href: "/account/questions",
                                        onClick: () => B(l.ZP.GTM_EVENTS.MY_QUESTIONNAIRES),
                                        children: a.Z.t("patient_mobile.root.user_menu.questions")
                                    }), (0, E.jsxs)(I, {
                                        ariaLabel: a.Z.t("patient_mobile.root.user_menu.additional_links"),
                                        title: (0, E.jsxs)(E.Fragment, {
                                            children: [b.human_full_name, D > 0 && (0, E.jsx)(m.Z, {
                                                className: "dl-margin-l-8",
                                                children: D
                                            })]
                                        }),
                                        onClick: () => V(!1),
                                        children: [(0, E.jsxs)(M, {
                                            href: "/account/edit",
                                            icon: "user",
                                            onClick: () => B(l.ZP.GTM_EVENTS.MY_ACCOUNT),
                                            children: [a.Z.t("common.my_account"), D > 0 && (0, E.jsx)(m.Z, {
                                                className: "dl-margin-l-8",
                                                children: D
                                            })]
                                        }), (0, E.jsx)(p.Z, {}), (0, E.jsx)(M, {
                                            href: "/account/relatives",
                                            icon: "users",
                                            onClick: () => B(l.ZP.GTM_EVENTS.MY_RELATIVES),
                                            children: a.Z.t("patient_mobile.root.user_menu.relatives")
                                        }), (0, E.jsx)(p.Z, {}), (0, E.jsx)(M, {
                                            href: "/deconnexion?redirect=/",
                                            icon: "right-from-bracket",
                                            onClick: () => {
                                                (0, c.SI)(), B(l.ZP.GTM_EVENTS.LOG_OUT)
                                            },
                                            children: a.Z.t("patient_mobile.root.user_menu.logout")
                                        })]
                                    })]
                                }) : !(0, d._y)() && (0, E.jsx)(A, {
                                    onClick: () => B(l.ZP.GTM_EVENTS.SIGN_IN)
                                })]
                            })]
                        })
                    })
                }
        },
        617999: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var s = t(785893),
                a = t(445884),
                r = t(5212),
                o = t(990626),
                i = t(294184),
                l = t.n(i);
            t(305849);
            const c = e => {
                let {
                    onClick: n,
                    uiStyle: t = "white"
                } = e;
                return (0, s.jsx)("div", {
                    onClick: n,
                    className: l()("logo-doctolib", {
                        "logo-doctolib-pro": (0, r._y)(),
                        "logo-doctolib-beta": (0, o.LA)("beta_version"),
                        [`logo-doctolib-${t}`]: t
                    }),
                    alt: a.Z.t("common.home")
                })
            }
        },
        261089: (e, n, t) => {
            t.d(n, {
                Ci: () => l,
                IU: () => o,
                pU: () => i
            });
            var s = t(239417),
                a = t(184481),
                r = t(174976);
            const o = e => ["appointments", e],
                i = e => {
                    let {
                        appointmentId: n
                    } = e;
                    const t = (0, a.useContext)(s._O);
                    return (0, r.useQuery)(o(n), (() => t.get(`/appointments/${n}`).then((e => {
                        let {
                            bodyData: n
                        } = e;
                        return n
                    }))), {
                        enabled: Boolean(n)
                    })
                },
                l = e => {
                    let {
                        query: n,
                        onSuccess: t
                    } = e;
                    const o = (0, a.useContext)(s._O);
                    return (0, r.useQuery)(["account", "appointments", {
                        query: n
                    }], (() => o.get("/account/appointments.json", {
                        query: n
                    }).then((e => {
                        let {
                            bodyData: n
                        } = e;
                        return n
                    }))), {
                        onSuccess: t
                    })
                }
        },
        320002: (e, n, t) => {
            t.d(n, {
                gL: () => m,
                gd: () => u,
                uK: () => p
            });
            var s = t(184481),
                a = t(174976),
                r = t(990626),
                o = t(5212),
                i = t(800274),
                l = t(261089),
                c = t(239417);
            const d = (e, n) => {
                    const t = ["patient_app", "appointment_requests", "entries", e];
                    return n && t.push(n), t
                },
                u = () => {
                    const e = (0, s.useContext)(c._O),
                        n = (0, i.ZP)() && (0, o.Gl)(),
                        t = Boolean(n && (0, r.cr)("patient_appointment_requests"));
                    return (0, a.useQuery)(d("unseen_count"), (() => e.get("/patient_app/appointment_request/entries/unseen_count").then((e => e.bodyData.count))), {
                        enabled: t,
                        placeholderData: 0,
                        staleTime: r.ZP.APPOINTMENT_REQUESTS_STALE_TIME_PATIENT,
                        cacheTime: r.ZP.APPOINTMENT_REQUESTS_STALE_TIME_PATIENT,
                        refetchInterval: r.ZP.APPOINTMENT_REQUESTS_STALE_TIME_PATIENT,
                        refetchOnWindowFocus: !0
                    })
                },
                m = () => {
                    const e = (0, s.useContext)(c._O),
                        n = (0, a.useQueryClient)();
                    return (0, a.useMutation)((n => e.put("/patient_app/appointment_request/entries/mark_as_seen", {
                        body: {
                            appointment_id: n
                        }
                    })), {
                        onError: e => window.crashReporter.captureException(e),
                        onSuccess: () => n.invalidateQueries(d("unseen_count"))
                    })
                },
                p = e => {
                    const n = (0, s.useContext)(c._O),
                        t = (0, a.useQueryClient)();
                    return (0, a.useMutation)((e => n.put(`/patient_app/appointment_request/entries/${e}/send_response_to_practitioner`)), {
                        onError: e => window.crashReporter.captureException(e),
                        onSuccess: () => {
                            t.invalidateQueries(d("unseen_count")), t.invalidateQueries(["account", "appointments"]), t.invalidateQueries((0, l.IU)(e))
                        }
                    })
                }
        },
        829405: (e, n, t) => {
            t.d(n, {
                g: () => r
            });
            var s = t(990626),
                a = t(5212);
            const r = () => {
                const e = (0, s.cr)("hero_in_cms") ? window.patient_engagement_hero : void 0,
                    n = Boolean(e) && "/" === window.location.pathname && (0, a.Gl)();
                return {
                    hero: e,
                    isBackgroundHero: n && (null === e || void 0 === e ? void 0 : e.is_background_image),
                    isClickableHero: n && !(null !== e && void 0 !== e && e.is_background_image)
                }
            }
        },
        243540: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var s = t(184481),
                a = t(239417),
                r = t(174976),
                o = t(990626),
                i = t(800274);
            const l = () => {
                const {
                    data: e,
                    refetch: n
                } = (() => {
                    const e = (0, s.useContext)(a._O),
                        n = (0, i.ZP)();
                    return (0, r.useQuery)(["patient_requests", "patient_app", "unseen_requests_count"], (() => e.get("/patient_requests/patient_app/unseen_requests_count").then((e => e.bodyData.count))), {
                        enabled: (0, o.LA)("patient_request") && "patient" === (null === n || void 0 === n ? void 0 : n.kind),
                        placeholderData: 0,
                        refetchInterval: o.ZP.UNSEEN_EVENTS_POLLING_INTERVAL,
                        refetchIntervalInBackground: !0,
                        refetchOnWindowFocus: "always"
                    })
                })();
                return {
                    count: e || 0,
                    refetch: n
                }
            }
        },
        305849: () => {}
    }
]);
//# sourceMappingURL=../57630-c529819802da468a045e.js.map