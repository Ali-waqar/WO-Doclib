(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [89654], {
        581971: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var a = n(294184),
                i = n.n(a),
                s = n(453040),
                o = (n(663324), n(785893));
            const r = e => {
                const {
                    className: t,
                    oneLine: n,
                    children: a,
                    component: r,
                    ...l
                } = e, c = i()("dl-card-title", {
                    "dl-card-title-one-line": n
                }, t);
                return (0, o.jsx)(s.Z, {
                    uiStyle: "body-s-bold",
                    component: r || "h3",
                    className: c,
                    ...l,
                    "data-design-system": "base",
                    children: a
                })
            };
            r.defaultProps = {
                oneLine: !1
            };
            const l = r
        },
        70679: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var a = n(184481),
                i = n(294184),
                s = n.n(i),
                o = n(445884),
                r = n(5212),
                l = n(845126),
                c = n(453040),
                d = n(335963),
                u = n(468644),
                m = n(322009),
                p = n(357738),
                _ = (n(97884), n(785893));

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class g extends a.PureComponent {
                constructor() {
                    super(...arguments), h(this, "state", {
                        focus: !1
                    }), h(this, "handleFocus", (e => {
                        this.setState({
                            focus: !0
                        }), this.props.onFocus && this.props.onFocus(e)
                    })), h(this, "handleBlur", (e => {
                        this.setState({
                            focus: !1
                        }), this.props.onBlur && this.props.onBlur(e)
                    })), h(this, "handleChange", (e => {
                        this.props.onChange && this.props.onChange(e.target.value)
                    })), h(this, "handleClearTap", (() => {
                        this.props.onClearTap ? this.props.onClearTap() : this.props.onChange && this.props.onChange("")
                    }))
                }
                render() {
                    const {
                        className: e,
                        onFocus: t,
                        onBlur: n,
                        onChange: a,
                        value: i,
                        leftIcon: h,
                        onLeftIconTap: g,
                        onClearTap: b,
                        searchInputRef: v,
                        leftLabel: x,
                        selectedList: f,
                        onRemoveFromListClick: N,
                        ...Z
                    } = this.props, y = (0, r.rl)(), E = s()("dl-search-bar", {
                        "dl-search-bar-idle": !this.state.focus && !i,
                        "dl-rounded-borders-s": !y,
                        "dl-border-blue": this.state.focus && !y,
                        "dl-border": !this.state.focus && !y
                    }, e);
                    return (0, _.jsxs)("div", {
                        className: E,
                        role: "search",
                        "data-design-system": "base",
                        children: [(0, _.jsx)(p.Z, {}), h && (0, _.jsx)(u.Z, {
                            className: "dl-search-bar-icon-left",
                            onTap: g,
                            children: h
                        }), x && (0, _.jsx)(c.Z, {
                            className: "dl-search-bar-label-left",
                            children: x
                        }), null === f || void 0 === f ? void 0 : f.map((e => (0, _.jsx)(d.Z, {
                            className: "dl-margin-r-8",
                            ellipsis: !0,
                            label: e.label,
                            onDelete: () => N(e.id)
                        }, e.id))), (0, _.jsx)("input", {
                            ref: v,
                            type: "search",
                            autoComplete: "off",
                            autoCorrect: "off",
                            autoCapitalize: "off",
                            value: i,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            onChange: this.handleChange,
                            ...Z,
                            className: s()("dl-search-bar-input", {
                                "dl-search-bar-input-left": !h && !x,
                                "dc-input": x
                            })
                        }), i ? (0, _.jsx)(m.Z, {
                            onTap: this.handleClearTap,
                            title: o.Z.t("common.actions.reset"),
                            size: "small",
                            className: "trash-can",
                            children: (0, _.jsx)(l.Z, {
                                name: "solid/xmark-large"
                            })
                        }) : y && (0, _.jsx)("div", {
                            className: "flex dl-padding-r-16",
                            children: (0, _.jsx)(l.Z, {
                                "aria-hidden": "true",
                                name: "magnifying-glass",
                                size: "medium"
                            })
                        })]
                    })
                }
            }
            h(g, "defaultProps", {
                value: ""
            });
            const b = g
        },
        878038: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var a = n(184481),
                i = n(494537),
                s = n(429697),
                o = n(294184),
                r = n.n(o),
                l = (n(459401), n(785893));
            const c = (e, t) => n => n ? (0, l.jsx)(s.Z, {
                classNames: `dl-view-transition-${e}`,
                timeout: t,
                children: n
            }) : null;
            class d extends a.PureComponent {
                componentWillUnmount() {
                    clearTimeout(this.enterTimeout)
                }
                render() {
                    const {
                        children: e,
                        className: t,
                        transition: n,
                        doNotUpdateChildren: s
                    } = this.props, {
                        enter: o,
                        leave: d
                    } = function(e) {
                        switch (e) {
                            case "instant":
                                return {
                                    enter: 1,
                                    leave: 1
                                };
                            case "fade":
                            case "fade-expand":
                            case "fade-contract":
                                return {
                                    enter: 1,
                                    leave: 340
                                };
                            case "seq-fade":
                                return {
                                    enter: 400,
                                    leave: 400
                                };
                            default:
                                return {
                                    enter: 500,
                                    leave: 500
                                }
                        }
                    }(n);
                    return (0, l.jsx)(i.Z, {
                        className: r()("dl-view-container", t),
                        childFactory: s ? e => e : e => (0, a.cloneElement)(e, {
                            classNames: `dl-view-transition-${n}`,
                            timeout: {
                                enter: o,
                                exit: d
                            },
                            onEntered: e => {
                                e && e.className && (e.className = e.className.replace(/dl-view-transition-[-a-z]+( |$)/g, ""))
                            }
                        }),
                        "data-design-system": "base",
                        children: a.Children.map(e, c(n, {
                            enter: o,
                            exit: d
                        }))
                    })
                }
            }
            var u, m, p;
            p = {
                transition: "instant"
            }, (m = "defaultProps") in (u = d) ? Object.defineProperty(u, m, {
                value: p,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : u[m] = p;
            const _ = d
        },
        704098: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n(47760),
                i = n(201477),
                s = n(785893);
            const o = e => {
                let {
                    onChange: t,
                    onBlur: n,
                    ...o
                } = e;
                return (0, s.jsx)(a.gN, { ...o,
                    "data-design-system": "base",
                    children: e => {
                        let {
                            value: a,
                            setValue: o,
                            setTouched: r,
                            fieldName: l,
                            ...c
                        } = e;
                        return (0, s.jsx)(i.Z, { ...c,
                            checked: !!a,
                            name: l,
                            onChange: e => {
                                o(e.target.checked), t && t(e.target.checked, e)
                            },
                            onBlur: e => {
                                r(), n && n(e)
                            }
                        })
                    }
                })
            }
        },
        983923: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var a = n(184481),
                i = n(445884),
                s = n(47760),
                o = n(639693),
                r = n.n(o),
                l = n(366699),
                c = n(838273),
                d = n(453040),
                u = n(884167),
                m = n(845126),
                p = (n(394664), n(785893));
            const _ = e => {
                    let {
                        message: t,
                        warningMessage: n,
                        suggestionMessage: a,
                        noEmptyHint: s,
                        color: o
                    } = e;
                    return (0, p.jsxs)(u.Z, {
                        "aria-live": "polite",
                        color: o,
                        "data-design-system": "base",
                        children: [(0, p.jsx)("span", {
                            children: t || (s ? null : i.Z.t("patient_mobile.root.login.password_usage"))
                        }), (n || a) && (0, p.jsx)(d.Z, {
                            uiStyle: "body-xs-regular",
                            color: "neutral-090",
                            className: "dl-margin-t-8",
                            component: "div",
                            children: r()([n, a]).join(" ")
                        })]
                    })
                },
                h = e => {
                    let {
                        className: t,
                        label: o,
                        placeholder: r,
                        field: d = "password",
                        noEmptyHint: u,
                        disabled: h,
                        showIcon: g = !0,
                        forwardedRef: b,
                        horizontal: v,
                        ...x
                    } = e;
                    const f = (0, a.useRef)(!1),
                        [N, Z] = (0, a.useState)({}),
                        [y, E] = (0, a.useState)(null),
                        {
                            setError: w,
                            getError: S,
                            getFormState: T
                        } = (0, a.useContext)(s.mC),
                        {
                            values: j = {}
                        } = T();
                    (0, a.useEffect)((() => (f.current = !0, y || (async () => {
                        const {
                            passwordStrength: e
                        } = await Promise.all([n.e(1937), n.e(63960)]).then(n.bind(n, 363960)).catch((() => null));
                        e && f.current && E((() => e))
                    })(), () => {
                        f.current = !1
                    })), []), (0, a.useEffect)((() => {
                        Z((e => {
                            let t = null,
                                n = null;
                            if (!y || !e) return {
                                message: null,
                                score: 0
                            };
                            const {
                                score: a,
                                feedback: {
                                    warning: s,
                                    suggestions: o
                                }
                            } = y(e), r = a < 2 ? s : "", l = a < 2 ? o.join(" ") : "";
                            e.length < 8 ? (t = i.Z.t("common.password_input.password_too_small", {
                                minLength: 8
                            }), n = "error-090") : a <= 1 ? (t = i.Z.t("common.password_input.weak"), n = "error-090") : 2 === a ? (t = i.Z.t("common.password_input.medium"), n = "warning-090") : 3 === a ? (t = i.Z.t("common.password_input.strong"), n = "success-110") : a > 3 && (t = i.Z.t("common.password_input.very_strong"), n = "success-110");
                            const c = a >= 2 && e.length >= 8;
                            return c || S(d) ? c && S(d) && w(d, !1) : w(d, !0), {
                                message: t,
                                warningMessage: r,
                                suggestionMessage: l,
                                score: a,
                                color: n
                            }
                        })(j[d]))
                    }), [j[d], y]);
                    const {
                        message: P,
                        warningMessage: I,
                        suggestionMessage: C,
                        score: k,
                        color: A
                    } = N;
                    return (0, p.jsx)(l.Z, {
                        className: t,
                        field: d,
                        hint: (0, p.jsx)(_, {
                            message: P,
                            warningMessage: I,
                            suggestionMessage: C,
                            noEmptyHint: u,
                            color: A
                        }),
                        label: o,
                        horizontal: v,
                        "data-design-system": "base",
                        children: (0, p.jsxs)("div", {
                            className: "dl-full-width",
                            children: [(0, p.jsx)(c.Z, {
                                ref: b,
                                field: d,
                                type: "password",
                                icon: g && (0, p.jsx)(m.Z, {
                                    name: "solid/lock"
                                }),
                                autoComplete: "new-password",
                                placeholder: r,
                                disabled: h,
                                minLength: 8,
                                required: !0,
                                ...x
                            }), (0, p.jsx)("div", {
                                className: "dl-password-indicator-container",
                                children: (0, p.jsx)("div", {
                                    className: `dl-password-indicator dl-password-indicator-${k}`
                                })
                            })]
                        })
                    })
                },
                g = (0, a.forwardRef)(((e, t) => (0, p.jsx)(h, { ...e,
                    forwardedRef: t
                })))
        },
        164544: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var a = n(294184),
                i = n.n(a),
                s = (n(978885), n(785893));
            const o = e => {
                const {
                    bottom: t,
                    center: n,
                    children: a,
                    className: o,
                    display: r,
                    margin: l,
                    size: c,
                    uiStyle: d,
                    ...u
                } = e;
                return (0, s.jsx)("div", {
                    className: i()("dl-layout-body", {
                        "dl-layout-body-center": n,
                        "dl-layout-body-bottom": t,
                        "dl-layout-body-no-margin": !l,
                        [null !== r && void 0 !== r ? r : ""]: r,
                        [`dl-layout-body-size-${c}`]: c,
                        "dl-layout-body-white": "white" === d
                    }, o),
                    ...u,
                    "data-design-system": "base",
                    children: a
                })
            };
            o.defaultProps = {
                bottom: !0,
                center: !1,
                margin: !0,
                size: "normal"
            };
            const r = o
        },
        389520: (e, t, n) => {
            "use strict";
            n.d(t, {
                YQ: () => a
            });
            n(977954), n(8955);
            const a = e => (e.match(/^\/calendar\/([^/]+)\/.+$/) || [])[1]
        },
        357738: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var a = n(184481),
                i = n(468644),
                s = n(516590),
                o = n(389520),
                r = n(175680),
                l = n(656194),
                c = n(509250),
                d = (n(7041), n(785893));
            const u = () => {
                const {
                    setPlaceholder: e,
                    placeholder: t
                } = (0, a.useContext)(r.Z), {
                    isCalendarOverlaid: n,
                    setIsCalendarOverlaid: u
                } = (0, a.useContext)(l.ZP), {
                    account: m
                } = (0, a.useContext)(c.Z);
                return n && (0, d.jsx)(i.Z, {
                    onTap: () => {
                        if (t) {
                            var n;
                            const e = null !== (n = m.agenda_preferences.visibleMobileAgendaIds) && void 0 !== n && n.length ? m.agenda_preferences.visibleMobileAgendaIds : m.agendas.map((e => e.id));
                            (0, s.ZP)({
                                name: "click_in_agenda_select_slot_mobile",
                                details: {
                                    funnel_id: t.funnelId,
                                    action: "touchup",
                                    view: (0, o.YQ)(window.location.pathname),
                                    zoom_level: t.minutesToPixelsRatio,
                                    gcd: t.gcd,
                                    visible_agenda_ids: e,
                                    split_activated: m.agenda_preferences.splitAgendasMobile
                                }
                            })
                        }
                        e(null), u(!1)
                    },
                    className: "dl-calendar-overlay"
                })
            }
        },
        581232: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n(552691),
                i = n(51048),
                s = n(785893);
            const o = e => (0, s.jsxs)("div", {
                children: [(0, s.jsx)(a.Z, { ...e
                }), (0, s.jsx)(i.Z, {})]
            })
        },
        591035: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var a = n(184481),
                i = n(977954),
                s = n.n(i),
                o = n(294184),
                r = n.n(o),
                l = n(711700),
                c = n.n(l),
                d = n(883764),
                u = n(468644),
                m = n(975645),
                p = n(784600),
                _ = n(335963),
                h = n(453040),
                g = n(845126),
                b = n(528846),
                v = n(581971),
                x = n(445884),
                f = n(123246),
                N = n.n(f),
                Z = n(785893);
            const y = () => (0, Z.jsxs)("div", {
                className: "dl-flex-center",
                children: [(0, Z.jsx)(N(), {
                    className: "dl-margin-r-8"
                }), "mobile" !== window.platforms.variant && (0, Z.jsx)(h.Z, {
                    children: x.Z.t("doctor_common.telehealth.telehealth")
                })]
            });
            var E = n(504815),
                w = n.n(E),
                S = n(715834),
                T = n.n(S),
                j = n(245500),
                P = n.n(j);
            n(429146);
            const I = e => {
                let {
                    distance: t
                } = e;
                return (0, Z.jsxs)("div", {
                    className: "flex dl-flex-shrink-zero dl-margin-l-xs distance-on-sr-card",
                    children: [(0, Z.jsx)("div", {
                        children: (0, Z.jsx)(g.Z, {
                            className: "dl-margin-r-xs dl-vertical-align-center",
                            name: "solid/location-arrow",
                            color: "neutral-090"
                        })
                    }), (0, Z.jsx)(h.Z, {
                        uiStyle: "body-s-regular",
                        color: "neutral-090",
                        children: t
                    })]
                })
            };
            class C extends a.PureComponent {
                constructor() {
                    var e, t, n;
                    super(...arguments), n = e => {
                        this.props.onTap && this.props.onTap(e, this.props)
                    }, (t = "handleTap") in (e = this) ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                }
                render() {
                    const {
                        doctor: e,
                        substitute: t,
                        substitution_wording: n,
                        compact: a,
                        showFullAddress: i,
                        className: o,
                        onTap: l,
                        children: g,
                        tappable: x,
                        showIcon: f,
                        hideIconMobile: N,
                        telehealth: E,
                        organizationName: S,
                        appointmentStartDate: j,
                        appointment: C,
                        ...k
                    } = this.props, A = {};
                    l && (A.component = u.Z, A.onTap = this.handleTap);
                    const M = r()("doctor-card", "dl-padding-0", {
                            "doctor-card-compact": a
                        }, o),
                        R = f || (l || x) && "desktop" !== window.platforms.variant && !N ? "chevron-right" : null,
                        O = (0, m.WU)(e),
                        D = j ? s()(j) : null;
                    if (!e) return null;
                    const F = S ? "default_organization_avatar" : e.cloudinary_public_id;
                    return (0, Z.jsxs)(Z.Fragment, {
                        children: [(0, Z.jsxs)(p.Z, {
                            DEPRECATED_horizontal: !0,
                            className: M,
                            DEPRECATED_picture: e.cloudinary_public_id && !t ? (0, Z.jsx)(b.Z, {
                                rounded: !0,
                                src: (0, d.Z)(F, "w_62,h_62,c_fill,g_face"),
                                alt: ""
                            }) : null,
                            iconName: R,
                            ...A,
                            ...k,
                            children: [(0, Z.jsxs)("div", {
                                className: "dl-flex-row dl-justify-between dl-align-items-start",
                                children: [(0, Z.jsx)(v.Z, {
                                    className: "dl-font-size-body",
                                    component: "span",
                                    children: S || t || O
                                }), "distance" in e && (0, Z.jsx)(I, {
                                    distance: e.distance
                                })]
                            }), t && (0, Z.jsx)("div", {
                                className: "dl-doctor-card-substitute",
                                children: n
                            }), (0, Z.jsxs)("div", {
                                className: "flex",
                                children: [e.organization_status && (0, Z.jsx)(w(), {
                                    style: {
                                        fill: "#0596de"
                                    }
                                }), e.speciality || e.organization_status ? (0, Z.jsxs)("div", {
                                    className: r()("flex dl-align-items-center dl-doctor-card-speciality-wrapper", {
                                        "dl-doctor-card-title-with-icon": !!e.organization_status
                                    }),
                                    children: [e.telehealth && (0, Z.jsx)(T(), {
                                        className: "dl-margin-r-8",
                                        height: "24px",
                                        width: "16px"
                                    }), (0, Z.jsx)(h.Z, {
                                        className: "dl-doctor-card-speciality-title",
                                        color: "neutral-130",
                                        block: !0,
                                        component: "span",
                                        children: S ? O : e.speciality || e.organization_status
                                    })]
                                }) : null, D ? (0, Z.jsxs)("div", {
                                    className: "flex dl-align-items-center dl-doctor-card-date",
                                    children: [(0, Z.jsx)(P(), {
                                        className: "dl-date-header-icon dl-date-header-icon-calendar dl-margin-r-4",
                                        fill: "currentColor"
                                    }), c()(D.localizeTimeToParisTimeZone("dddd DD MMMM")), " \u2022 ", D.localizeTimeToParisTimeZone("HH[:]mm")]
                                }) : null]
                            }), a ? null : (0, Z.jsx)("div", {
                                className: "location",
                                children: i ? (0, Z.jsxs)(Z.Fragment, {
                                    children: [(0, Z.jsx)(h.Z, {
                                        color: "neutral-130",
                                        block: !0,
                                        children: e.address || ""
                                    }), (0, Z.jsx)(h.Z, {
                                        color: "neutral-130",
                                        children: `${e.zipcode||""} ${e.city||""}`
                                    })]
                                }) : (0, Z.jsx)(h.Z, {
                                    color: "neutral-130",
                                    block: !0,
                                    children: e.city || ""
                                })
                            }), e.top_specialities ? (0, Z.jsx)(_.c, {
                                children: e.top_specialities.map((e => (0, Z.jsx)(_.Z, {
                                    className: "dl-doctor-card-top-speciality-pill",
                                    label: e
                                }, e)))
                            }) : null]
                        }), E ? (0, Z.jsx)(y, {}) : null]
                    })
                }
            }
        },
        753657: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var a = n(977954),
                i = n.n(a),
                s = n(915488),
                o = n(845126),
                r = n(453040),
                l = n(581232),
                c = n(445884);
            var d = n(785893);
            const u = e => {
                    const t = i()(e);
                    return [t.localizeTimeToParisTimeZone("dddd D MMMM"), t.localizeTimeToParisTimeZone("HH:mm")].join(" \u2022 ")
                },
                m = e => {
                    let {
                        onBack: t,
                        cloudinaryPublicId: n,
                        appointmentStartDate: a,
                        subtitle: i = c.Z.t("appointments.edit.pre_booked_slot_subtitle")
                    } = e;
                    return (0, d.jsx)(l.Z, {
                        onBack: t,
                        className: "dl-nav-bar-large",
                        children: (0, d.jsxs)("div", {
                            className: "flex dl-full-height dl-account-new-navbar-content",
                            children: [(0, d.jsx)(s.ZP, {
                                className: "dl-z-1",
                                size: "medium",
                                cloudinaryId: n
                            }), (0, d.jsx)(o.Z, {
                                name: "solid/lock",
                                color: "success-110",
                                backgroundColor: "white",
                                backgroundClassName: "dl-z-2",
                                size: "xxsmall"
                            }), a && (0, d.jsxs)("div", {
                                className: "dl-flex-column dl-justify-center",
                                "aria-live": "polite",
                                children: [(0, d.jsx)(r.Z, {
                                    uiStyle: "title-s-bold",
                                    className: "dl-text-transform-capitalize",
                                    color: "white",
                                    children: u(a)
                                }), (0, d.jsx)(r.Z, {
                                    uiStyle: "body-xs-regular",
                                    color: "white",
                                    children: i
                                })]
                            })]
                        })
                    })
                }
        },
        804233: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var a = n(591035),
                i = n(710270),
                s = n(445884),
                o = n(453040),
                r = n(179522),
                l = n(785893);
            const c = e => {
                let {
                    onDoctorTap: t,
                    telehealthOnly: n
                } = e;
                const {
                    data: c,
                    success: d
                } = (0, i.Z)({
                    url: "/account/profile_favorites.json"
                });
                return d && null !== c && void 0 !== c && c.length ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: "dl-margin-y-8 dl-padding-y-4",
                        children: (0, l.jsx)(o.Z, {
                            align: "center",
                            uiStyle: "body-s-bold",
                            color: "neutral-130",
                            children: n ? s.Z.t("patient_mobile.root.home.doctors.telehealth_favorites") : s.Z.t("patient_mobile.root.home.doctors.profile_favorites")
                        })
                    }), c.filter((e => !n || e.telehealth)).map((e => (0, l.jsx)(r.Z, {
                        onTap: () => t(e),
                        border: "none",
                        size: "medium",
                        children: (0, l.jsx)(r.Z.Description, {
                            block: !0,
                            children: (0, l.jsx)(a.Z, {
                                doctor: e
                            })
                        })
                    }, e.link)))]
                }) : null
            }
        },
        263448: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => d
            });
            var a = n(657907),
                i = n(47760),
                s = n(93147),
                o = n(290988),
                r = n(755440),
                l = n(445884);
            var c = n(785893);
            const d = e => {
                let {
                    disabled: t,
                    label: n,
                    required: d
                } = e;
                const u = (0, i.XQ)(),
                    m = [{
                        value: s.d.Female,
                        label: l.Z.t("common.biological_sex_options.female"),
                        required: d
                    }, {
                        value: s.d.Male,
                        label: l.Z.t("common.biological_sex_options.male"),
                        required: d
                    }];
                return (0, c.jsx)(r.Z, {
                    label: n,
                    children: (0, c.jsx)(a.Z, {
                        children: (0, c.jsx)(o.Z, {
                            label: n,
                            name: "biological_sex",
                            containerClassName: "dl-flex-grow-2 dl-compact-radio-card-container",
                            className: "flex dl-align-items-start dl-flex-grow-2 dl-compact-radio-card",
                            disabled: t,
                            options: m,
                            type: "radio",
                            value: u.getValue("biological_sex"),
                            onSelect: e => u.setValue("biological_sex", e)
                        })
                    })
                })
            }
        },
        108716: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var a = n(5212),
                i = n(990626),
                s = n(445884),
                o = n(642979),
                r = n(453040),
                l = n(785893);
            const c = e => {
                let {
                    hasVaccinationBlockAvailablilities: t
                } = e;
                return (0, i.LA)("covid_vaccine_legal_terms_in_authentication") ? (0, l.jsxs)("div", {
                    className: "dl-text-center flex dl-margin-16 dl-flex-column",
                    children: [(0, l.jsx)(r.Z, {
                        uiStyle: "body-s-regular",
                        color: "neutral-090",
                        children: (0, a.dm)() || t ? s.Z.t("appointments.login_or_signup.mention_legal.partners_text") : s.Z.t("appointments.login_or_signup.mention_legal.text_html")
                    }), (0, l.jsx)(o.Z, {
                        href: "https://doctolib.legal/legal-info-vaccination",
                        target: "_blank",
                        children: s.Z.t("appointments.login_or_signup.mention_legal.more_info")
                    })]
                }) : null
            }
        },
        879058: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => p,
                F: () => m
            });
            var a = n(990626),
                i = n(8955),
                s = n(619423),
                o = n(516590),
                r = n(554640),
                l = n(129303),
                c = n(5212),
                d = n(143403),
                u = n(951969);
            const m = async (e, t, n) => {
                    let {
                        tankerContext: a,
                        login: i
                    } = e;
                    try {
                        await a.startTankerWithVerificationMethod(t, {
                            passphrase: n.password
                        })
                    } catch (e) {
                        (0, r.T)(e)
                    }
                    i(t), (0, c.b$)() && await (async () => {
                        const e = await l.ZP.call({
                            method: l.nb
                        });
                        await s.Z.saveNotificationToken({
                            token: { ...e,
                                permission: e.permission > 0
                            }
                        }).catch((() => {}))
                    })()
                },
                p = async (e, t, n) => {
                    var s, l;
                    let {
                        password: c,
                        username: m,
                        remember_username: p,
                        refresh_token: _
                    } = n;
                    if (null !== (s = t.tanker_identity) && void 0 !== s && s.passphrase_registered_at && await e.updatePassphraseVerificationMethod({
                            account: t,
                            currentPassword: c,
                            newPassword: c,
                            trackingOrigin: "login_form"
                        }), (0, u.uz)("3.4.19") && _) try {
                        await (0, d.Y8)(m, _)
                    } catch (e) {
                        (0, r.T)(e)
                    }
                    if (!t.two_factor_auth_response) {
                        if (null !== (l = t.tanker_identity) && void 0 !== l && l.email_registered_at) {
                            await (async (e, t) => {
                                try {
                                    var n;
                                    const {
                                        verifiedEmail: a
                                    } = await e.checkTankerStatus(t), i = null === a || void 0 === a ? void 0 : a.toLowerCase(), s = null === (n = t.email) || void 0 === n ? void 0 : n.toLowerCase();
                                    (0, o.ZP)({
                                        name: "emails_are_in_sync",
                                        details: {
                                            tanker_verified_email: i,
                                            email: s,
                                            success: i === s
                                        }
                                    })
                                } catch (e) {}
                            })(e, t);
                            try {
                                var h;
                                await e.refreshGroups(t, {
                                    verificationMethod: c ? {
                                        passphrase: c
                                    } : null,
                                    byPassPostStartChecks: !a.ZP.BYPASS_PATIENT_EMAIL_VERIFICATION_ENABLED && (null === (h = t.tanker_identity) || void 0 === h ? void 0 : h.passphrase_registered_at)
                                })
                            } catch (e) {
                                (0, r.T)(e)
                            }
                        }
                        if (!a.ZP.BYPASS_PATIENT_EMAIL_VERIFICATION_ENABLED) try {
                            var g;
                            (null !== (g = t.tanker_identity) && void 0 !== g && g.passphrase_registered_at || t.should_verify_email_address) && await e.startTankerWithVerificationMethod(t, {
                                passphrase: c
                            })
                        } catch (e) {
                            window.crashReporter.captureException(e)
                        }
                        p ? i.t8("last-login-username", m) : i.Od("last-login-username")
                    }
                }
        },
        723552: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var a = n(527360),
                i = n.n(a),
                s = n(5212),
                o = n(708221),
                r = n(437124),
                l = n(129303),
                c = n(8955),
                d = n(143403);
            const u = async function() {
                let {
                    redirection: e = "/"
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = window.localStorage.getItem("didomi_token"),
                    n = window.localStorage.getItem("euconsent");
                if ((0, s.b$)()) {
                    const e = await l.ZP.call({
                        method: l.nb
                    });
                    await r.ZP.delete(`/api/notification_tokens/${e.value}`);
                    const t = new Date((new Date).setFullYear((new Date).getFullYear() + 1)),
                        n = i().get("ssid"),
                        a = i().get("esid");
                    await l.ZP.call({
                        method: l.Nv
                    }), i().set("ssid", n, {
                        expires: t
                    }), i().set("esid", a), await (0, d.Qk)()
                }(0, c.SI)(), window.localStorage.setItem("didomi_token", t), window.localStorage.setItem("euconsent", n), await r.ZP.get("/deconnexion"), (0, o.Z)(e)
            }
        },
        709282: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => l,
                Z: () => d
            });
            var a = n(184481),
                i = n(445884),
                s = n(929014),
                o = n(649497),
                r = n(785893);
            const l = e => {
                    let {
                        status: t,
                        error: n
                    } = e;
                    if (429 === t) return i.Z.t("patient_mobile.root.login.error.rate_limited");
                    if (423 === t) return i.Z.t("patient_mobile.root.login.error.locked_account_html");
                    switch (n) {
                        case o.Z.BadCredentials:
                            return i.Z.t("patient_mobile.root.login.error.invalid_email_or_password");
                        case o.Z.BadEmail:
                            return i.Z.t("patient_mobile.root.login.error.bad_email");
                        case o.Z.BadPassword:
                            return i.Z.t("patient_mobile.root.login.error.bad_password");
                        case o.Z.BadRefreshToken:
                            return i.Z.t("patient_mobile.root.login.error.bad_refresh_token");
                        case o.Z.UnexpectedAccount:
                            return i.Z.t("patient_mobile.root.login.error.unexpected_account");
                        case o.Z.NotAllowed:
                            return i.Z.t("patient_mobile.root.login.error.not_allowed");
                        case o.Z.WrongCaptcha:
                            return i.Z.t("patient_mobile.root.login.error.wrong_captcha");
                        case o.Z.Locked:
                        case o.Z.SecurityLocked:
                            return i.Z.t("patient_mobile.root.login.error.locked_account_html");
                        default:
                            return n
                    }
                },
                c = e => {
                    let {
                        status: t,
                        error: n
                    } = e;
                    const a = l({
                        status: t,
                        error: n
                    });
                    return a ? (0, r.jsx)(s.Z, {
                        variant: "deprecated-alert-interface",
                        uiStyle: "error",
                        className: "dl-margin-t-16",
                        children: a
                    }) : null
                },
                d = (0, a.memo)(c)
        },
        140161: (e, t, n) => {
            "use strict";
            n.d(t, {
                t: () => A,
                Z: () => F
            });
            var a = n(184481),
                i = n(445884),
                s = n(129303),
                o = n(951969),
                r = n(617999),
                l = n(592290),
                c = n(158270),
                d = n(580163),
                u = n(516590),
                m = n(723552),
                p = n(294184),
                _ = n.n(p),
                h = n(396026),
                g = n.n(h),
                b = n(453040),
                v = n(845126);
            var x = n(785893);
            const f = {
                    TouchID: "fingerprint",
                    Fingerprint: "fingerprint",
                    FaceID: "face-viewfinder"
                },
                N = e => {
                    let {
                        pin: t,
                        pinLength: n
                    } = e;
                    return (0, x.jsx)("div", {
                        className: "dl-digit-indicators-container",
                        children: g()(0, n).map((e => (0, x.jsx)("div", {
                            className: _()("dl-digit-indicator", {
                                "dl-digit-indicator-activated": t.length > e
                            })
                        }, `indicator_${e}`)))
                    })
                },
                Z = (0, a.forwardRef)(((e, t) => {
                    let {
                        pinLength: n = 4,
                        title: i,
                        text: s,
                        codeMessage: o,
                        icon: r,
                        hint: l,
                        onClickHint: c,
                        onBack: d,
                        onComplete: u,
                        biometricType: m,
                        onClickBiometric: p
                    } = e;
                    const [h, g] = (0, a.useState)(""), [Z, y] = (0, a.useState)(!1), [E, w] = (0, a.useState)(!1), [S, T] = (0, a.useState)(s), j = (0, a.useCallback)((e => {
                        g(""), d(e)
                    }), [d]);
                    (0, a.useEffect)((() => {
                        S !== s && (w(!0), setTimeout((() => {
                            T(s), w(!1)
                        }), 600))
                    }), [s]);
                    const P = (0, a.useCallback)((e => () => {
                            if (h.length === n) return;
                            const t = `${h}${e}`;
                            g(t), t.length === n && (null === u || void 0 === u || u(t))
                        }), [h]),
                        I = (0, a.useCallback)((() => {
                            const e = h.slice(0, -1);
                            g(e)
                        }), [h]);
                    (0, a.useImperativeHandle)(t, (() => ({
                        resetPin: () => g(""),
                        shakeIndicators: () => {
                            y(!0), setTimeout((() => y(!1)), 400)
                        }
                    }))), (0, a.useEffect)((() => {
                        m && p && p()
                    }), []);
                    const C = () => (0, x.jsx)("div", {
                            className: "dl-pin-page-digit-container",
                            children: m && (0, x.jsx)(v.Z, {
                                name: f[m],
                                size: "large",
                                color: "white",
                                onClick: p
                            })
                        }),
                        k = e => {
                            let {
                                digit: t
                            } = e;
                            return (0, x.jsx)("div", {
                                className: "dl-pin-page-digit-container",
                                children: t && (0, x.jsx)("div", {
                                    role: "button",
                                    onClick: P(t),
                                    tabIndex: t,
                                    className: "dl-pin-page-digit",
                                    children: (0, x.jsx)(b.Z, {
                                        uiStyle: "headline-xxl-bold",
                                        color: "white",
                                        children: t
                                    })
                                })
                            })
                        },
                        A = () => (0, x.jsx)("div", {
                            className: _()("dl-pin-page-digit-container", {
                                "dl-pin-page-backspace-empty": !h.length
                            }),
                            children: (0, x.jsx)(v.Z, {
                                name: "solid/delete-left",
                                size: "large",
                                color: "white",
                                onClick: I
                            })
                        });
                    return (0, x.jsxs)("div", {
                        className: "dl-pin-page",
                        children: [(0, x.jsxs)("div", {
                            className: "dl-pin-page-top",
                            children: [(0, x.jsx)("div", {
                                className: "dl-pin-page-top-icon",
                                children: d && (0, x.jsx)(v.Z, {
                                    name: "chevron-left",
                                    size: "medium",
                                    color: "white",
                                    onClick: j
                                })
                            }), (0, x.jsx)("div", {
                                className: "dl-pin-page-top-title",
                                children: (0, x.jsx)(b.Z, {
                                    uiStyle: "title-s-bold",
                                    color: "white",
                                    children: i
                                })
                            }), (0, x.jsx)("div", {
                                className: "dl-pin-page-top-icon"
                            })]
                        }), (0, x.jsxs)("div", {
                            className: "dl-pin-page-code",
                            children: [r && (0, x.jsx)(v.Z, {
                                className: "dl-margin-b",
                                name: r,
                                size: "medium",
                                color: "white"
                            }), (0, x.jsxs)("div", {
                                className: "dl-pin-texts-container",
                                children: [(0, x.jsx)(b.Z, {
                                    block: !0,
                                    className: _()("dl-pin-page-current-title", {
                                        "dl-pin-slide-out": E
                                    }),
                                    uiStyle: "title-xl-bold",
                                    color: "white",
                                    children: S
                                }), (0, x.jsx)(b.Z, {
                                    block: !0,
                                    className: _()("dl-pin-page-next-title", {
                                        "dl-pin-slide-in": E
                                    }),
                                    uiStyle: "title-xl-bold",
                                    color: "white",
                                    children: s
                                })]
                            }), (0, x.jsx)("div", {
                                className: _()({
                                    "dl-pin-shake-horizontal": Z
                                }),
                                children: (0, x.jsx)(N, {
                                    pin: h,
                                    pinLength: n
                                })
                            }), (0, x.jsx)(b.Z, {
                                color: "white",
                                className: "dl-margin-t-24",
                                children: o || "\xa0"
                            })]
                        }), (0, x.jsx)("div", {
                            className: "dl-pin-page-keyboard-container",
                            children: (0, x.jsxs)("div", {
                                className: "dl-pin-page-keyboard",
                                children: [(0, x.jsxs)("div", {
                                    className: "dl-pin-page-digits-row",
                                    children: [(0, x.jsx)(k, {
                                        digit: "1"
                                    }), (0, x.jsx)(k, {
                                        digit: "2"
                                    }), (0, x.jsx)(k, {
                                        digit: "3"
                                    })]
                                }), (0, x.jsxs)("div", {
                                    className: "dl-pin-page-digits-row",
                                    children: [(0, x.jsx)(k, {
                                        digit: "4"
                                    }), (0, x.jsx)(k, {
                                        digit: "5"
                                    }), (0, x.jsx)(k, {
                                        digit: "6"
                                    })]
                                }), (0, x.jsxs)("div", {
                                    className: "dl-pin-page-digits-row",
                                    children: [(0, x.jsx)(k, {
                                        digit: "7"
                                    }), (0, x.jsx)(k, {
                                        digit: "8"
                                    }), (0, x.jsx)(k, {
                                        digit: "9"
                                    })]
                                }), (0, x.jsxs)("div", {
                                    className: "dl-pin-page-digits-row",
                                    children: [(0, x.jsx)(C, {}), (0, x.jsx)(k, {
                                        digit: "0"
                                    }), (0, x.jsx)(A, {})]
                                })]
                            })
                        }), l && (0, x.jsx)("div", {
                            className: "dl-flex-center",
                            children: (0, x.jsx)(b.Z, {
                                uiStyle: "body-s-bold",
                                color: "white",
                                role: "button",
                                onClick: c,
                                children: l
                            })
                        })]
                    })
                })),
                y = "patient_common.root.unified_account.lock_my_app.pin_page",
                E = 300,
                w = "setNewPin",
                S = "backToNewPin",
                T = "errorMessageFade",
                j = "challengePinKO",
                P = "resetFlow",
                I = "challenge",
                C = "setPin",
                k = "confirmPin",
                A = {
                    HELLO: "hello",
                    ENABLE_PIN: "enable_pin",
                    DISABLE_PIN: "disable_pin",
                    MODIFY_PIN: "modify_pin"
                },
                M = e => {
                    switch (e) {
                        case A.HELLO:
                            return [I];
                        case A.DISABLE_PIN:
                            return [];
                        case A.ENABLE_PIN:
                        case A.MODIFY_PIN:
                            return [C, k];
                        default:
                            return []
                    }
                },
                R = {
                    tryNumber: 1,
                    currentPin: "",
                    errorMessage: null,
                    stepIndex: 0,
                    steps: [],
                    flow: null
                },
                O = (e, t) => {
                    switch (t.type) {
                        case S:
                            return { ...e,
                                stepIndex: e.stepIndex - 1,
                                currentPin: "",
                                errorMessage: null
                            };
                        case w:
                            return { ...e,
                                stepIndex: e.stepIndex + 1,
                                currentPin: t.currentPin
                            };
                        case T:
                            return { ...e,
                                errorMessage: null
                            };
                        case j:
                            return { ...e,
                                tryNumber: e.tryNumber + 1,
                                errorMessage: t.errorMessage
                            };
                        case P:
                            return { ...R,
                                steps: M(t.flow),
                                flow: t.flow,
                                trackingDetails: t.trackingDetails
                            };
                        default:
                            return e
                    }
                },
                D = (0, a.forwardRef)(((e, t) => {
                    let {
                        flow: n,
                        onFlowSuccess: p,
                        maxTry: _,
                        trackingDetails: h
                    } = e;
                    const g = (0, a.useRef)(),
                        [b, v] = (0, a.useState)(!!n),
                        [f, N] = (0, a.useState)(null),
                        {
                            getPinCode: D,
                            getPinCodeWithBiometric: F,
                            storePinCode: L,
                            resetPinConfig: B
                        } = (0, c.Z)(),
                        [U, H] = (0, a.useReducer)(O, { ...R,
                            steps: M(n),
                            flow: n,
                            trackingDetails: h
                        }),
                        q = (0, d.ZP)(),
                        z = (0, a.useCallback)((e => {
                            (0, u.ZP)({
                                details: { ...U.trackingDetails,
                                    deactivation_trigger: e
                                },
                                name: "authentication_automatic_deactivated"
                            }, {
                                schema: "patient"
                            }), (0, m.Z)({
                                redirection: `/sessions/new/login?${e}=true`
                            }), B()
                        }), []);
                    (0, a.useImperativeHandle)(t, (() => ({
                        triggerFlow: (e, t) => {
                            H({
                                type: P,
                                flow: e,
                                trackingDetails: t
                            }), v(!0)
                        }
                    })));
                    return (0, x.jsx)(l.ZP, {
                        show: b,
                        size: "fullscreen",
                        className: "dl-pin-machine-drawer dl-full-height",
                        blocking: !0,
                        children: (0, x.jsx)(Z, {
                            ref: g,
                            codeMessage: U.errorMessage,
                            ...(() => {
                                switch (U.steps[U.stepIndex]) {
                                    case I:
                                        return {
                                            text: i.Z.t("hello.text", {
                                                scope: y
                                            }),
                                            title: (0, x.jsx)(r.Z, {}),
                                            hint: i.Z.t("hello.hint", {
                                                scope: y
                                            }),
                                            icon: "solid/lock",
                                            onClickHint: () => z("code_forgotten"),
                                            ..."activated" === U.trackingDetails.authentication_biometric && U.trackingDetails.biometric_type ? {
                                                onClickBiometric: async () => {
                                                    try {
                                                        await F() && ((0, u.ZP)({
                                                            details: { ...U.trackingDetails,
                                                                authentication_method: "biometric"
                                                            },
                                                            name: "authentication_succeeded"
                                                        }, {
                                                            schema: "patient"
                                                        }), p(), v(!1))
                                                    } catch (e) {}
                                                },
                                                biometricType: U.trackingDetails.biometric_type
                                            } : {},
                                            onComplete: async e => {
                                                await D() === e ? ((0, u.ZP)({
                                                    details: { ...U.trackingDetails,
                                                        authentication_method: "code"
                                                    },
                                                    name: "authentication_succeeded"
                                                }, {
                                                    schema: "patient"
                                                }), p(), setTimeout((() => {
                                                    v(!1)
                                                }), E)) : U.tryNumber < _ ? (g.current.resetPin(), g.current.shakeIndicators(), (0, o.vG)("3.3.6") ? s.ZP.call({
                                                    method: s.vN,
                                                    params: ["notificationError"]
                                                }) : s.ZP.call({
                                                    method: s.IM,
                                                    params: [400]
                                                }), clearTimeout(f), N(setTimeout((() => {
                                                    H({
                                                        type: T
                                                    })
                                                }), 3e3)), H({
                                                    errorMessage: i.Z.t("hello.error_pin_message", {
                                                        scope: y
                                                    }),
                                                    type: j
                                                })) : (g.current.shakeIndicators(), (0, o.vG)("3.3.6") ? s.ZP.call({
                                                    method: s.vN,
                                                    params: ["notificationError"]
                                                }) : s.ZP.call({
                                                    method: s.IM,
                                                    params: [400]
                                                }), z("too_many_tries"), setTimeout((() => {
                                                    v(!1)
                                                }), E))
                                            }
                                        };
                                    case C:
                                        return {
                                            title: U.flow === A.MODIFY_PIN ? i.Z.t("modify_pin.title", {
                                                scope: y
                                            }) : i.Z.t("set_pin.title", {
                                                scope: y
                                            }),
                                            text: U.flow === A.MODIFY_PIN ? i.Z.t("modify_pin.text", {
                                                scope: y
                                            }) : i.Z.t("set_pin.text", {
                                                scope: y
                                            }),
                                            onBack: () => v(!1),
                                            onComplete: e => {
                                                setTimeout((() => {
                                                    g.current.resetPin(), H({
                                                        currentPin: e,
                                                        type: w
                                                    })
                                                }), E)
                                            }
                                        };
                                    case k:
                                        return {
                                            title: U.flow === A.MODIFY_PIN ? i.Z.t("confirm_modify_pin.title", {
                                                scope: y
                                            }) : i.Z.t("confirm_set_pin.title", {
                                                scope: y
                                            }),
                                            text: U.flow === A.MODIFY_PIN ? i.Z.t("confirm_modify_pin.text", {
                                                scope: y
                                            }) : i.Z.t("confirm_set_pin.text", {
                                                scope: y
                                            }),
                                            onBack: () => {
                                                H({
                                                    type: S
                                                }), g.current.resetPin()
                                            },
                                            onComplete: e => {
                                                U.currentPin === e ? setTimeout((() => {
                                                    v(!1), p(U.currentPin), L(U.currentPin), U.flow === A.ENABLE_PIN && (0, u.ZP)({
                                                        details: { ...U.trackingDetails,
                                                            authentication_code: "activated"
                                                        },
                                                        name: "authentication_code_activated"
                                                    }, {
                                                        schema: "patient"
                                                    }), U.flow === A.ENABLE_PIN && "deactivated" === U.trackingDetails.authentication_biometric || q({
                                                        message: i.Z.t(U.flow === A.ENABLE_PIN ? "set_pin.toaster" : "modify_pin.toaster", {
                                                            scope: y
                                                        }),
                                                        uiStyle: "success"
                                                    })
                                                }), E) : (g.current.shakeIndicators(), g.current.resetPin(), clearTimeout(f), N(setTimeout((() => {
                                                    H({
                                                        type: T
                                                    })
                                                }), 2300)), H({
                                                    errorMessage: i.Z.t("confirm_modify_pin.error_message", {
                                                        scope: y
                                                    }),
                                                    type: j
                                                }))
                                            }
                                        };
                                    default:
                                        return {}
                                }
                            })()
                        })
                    })
                }));
            D.defaultProps = {
                maxTry: 3
            };
            const F = D
        },
        51048: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => r,
                Z: () => l
            });
            var a = n(184481),
                i = n(929014),
                s = n(785893);
            let o = {};
            if (window.flashMessages && window.flashMessages.length) {
                const e = window.flashMessages[0];
                o = {
                    message: e.output,
                    uiStyle: "error" === e.state ? "danger" : "success",
                    show: !0
                }
            }
            const r = {
                    notify: () => null
                },
                l = e => {
                    const [{
                        message: t,
                        uiStyle: n,
                        show: l
                    }, c] = (0, a.useState)({}), d = (0, a.useRef)(null), u = (0, a.useRef)(null), m = (0, a.useCallback)((e => {
                        let {
                            message: t,
                            uiStyle: n = "success"
                        } = e;
                        t && (clearTimeout(d.current), clearTimeout(u.current), c({
                            message: t,
                            uiStyle: n,
                            show: !1
                        }), d.current = setTimeout((() => c((e => ({ ...e,
                            show: !0
                        })))), 200), u.current = setTimeout((() => c((e => ({ ...e,
                            show: !1
                        })))), 5e3))
                    }), []);
                    return r.notify = m, (0, a.useEffect)((() => m(o)), []), (0, a.useEffect)((() => () => {
                        clearTimeout(d.current), clearTimeout(u.current), r.notify = () => null
                    }), []), l && (0, s.jsx)(i.Z, {
                        uiStyle: n,
                        label: t,
                        variant: "banner",
                        size: "small",
                        ...e
                    })
                }
        },
        765508: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var a = n(184481),
                i = n(24553),
                s = n(785893);
            class o extends a.Component {
                componentDidMount() {
                    this.props.onLocationChange && this.props.onLocationChange(this.props.location)
                }
                componentDidUpdate(e) {
                    const {
                        location: t
                    } = this.props;
                    t !== e.location && (this.props.onLocationChange && this.props.onLocationChange(t), this.props.onLocationUpdate && this.props.onLocationUpdate(t))
                }
                render() {
                    return this.props.children
                }
            }
            const r = e => (0, s.jsx)(o, { ...e,
                location: (0, i.useLocation)()
            })
        },
        656194: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => s
            });
            var a = n(184481);
            n(785893);
            const i = (0, a.createContext)({
                    isCalendarOverlaid: !1,
                    setIsCalendarOverlaid: () => {}
                }),
                s = i
        },
        175680: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var a = n(184481);
            n(516590), n(785893);
            const i = (0, a.createContext)({}),
                s = i
        },
        111432: (e, t, n) => {
            "use strict";
            n.d(t, {
                t: () => r
            });
            var a = n(445884),
                i = n(884238),
                s = n.n(i);
            const o = {
                identification: {
                    title: a.Z.t("appointments.edit.step_titles.identification"),
                    index: 0
                },
                verification: {
                    title: a.Z.t("appointments.edit.step_titles.verification"),
                    index: 1
                },
                patient_infos: {
                    title: a.Z.t("appointments.edit.step_titles.patient_infos"),
                    index: 2
                },
                confirmation: {
                    title: a.Z.t("appointments.edit.step_titles.confirmation"),
                    index: 3
                }
            };
            a.Z.t("appointments.edit.step_titles.identification"), a.Z.t("appointments.edit.step_titles.verification"), a.Z.t("appointments.edit.step_titles.patient_infos"), a.Z.t("appointments.edit.step_titles.appointment_request_details"), a.Z.t("appointments.edit.step_titles.confirmation");

            function r(e) {
                const {
                    title: t,
                    index: n
                } = o[e];
                return {
                    title: t,
                    config: {
                        current: n,
                        total: s()(o)
                    }
                }
            }
        },
        158270: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var a = n(184481),
                i = n(129303),
                s = n(253565),
                o = n(800274),
                r = n(445884),
                l = n(5212),
                c = n(951969);
            const d = () => {
                const e = (0, o.ZP)(),
                    t = `${null===e||void 0===e?void 0:e.id}`;
                return {
                    getAvailableBiometric: (0, a.useCallback)((() => i.ZP.call({
                        method: i.i8
                    })), []),
                    hasOSBiometricsAuthorization: () => i.ZP.call({
                        method: i.kf
                    }),
                    storePinCode: n => e && i.ZP.call({
                        method: i.mD,
                        params: [t, n, !1]
                    }),
                    storePinCodeWithBiometrics: n => e && i.ZP.call({
                        method: i.mD,
                        params: [t, n, !0]
                    }),
                    getPinCode: () => e && i.ZP.call({
                        method: i.pU,
                        params: [t]
                    }),
                    getPinCodeWithBiometric: () => {
                        const n = {
                            title: r.Z.t("patient_common.root.unified_account.lock_my_app.authentication_prompt.title"),
                            cancel: r.Z.t("patient_common.root.unified_account.lock_my_app.authentication_prompt.cancel")
                        };
                        return e && i.ZP.call({
                            method: i.mT,
                            params: [t, n]
                        })
                    },
                    getPinConfig: () => e && i.ZP.call({
                        method: i.Uj,
                        params: [t]
                    }),
                    resetPinConfig: () => e && i.ZP.call({
                        method: i.Sx,
                        params: [t]
                    }),
                    isEligibleToLockMyApp: () => (0, l.b$)() && (0, c.vG)("3.2.28") && s.Z.config.isLockMyAppEnabled(),
                    enableBiometric: () => e && i.ZP.call({
                        method: i.bv,
                        params: [t]
                    }),
                    disableBiometric: () => e && i.ZP.call({
                        method: i._J,
                        params: [t]
                    })
                }
            }
        },
        853165: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n(184481),
                i = n(990762),
                s = n(136591);
            const o = e => {
                let {
                    url: t = "/login.json",
                    redirection: n,
                    onSuccess: o,
                    onFailure: r
                } = e;
                const l = (0, s.Z)(),
                    [c, d] = (0, a.useState)({
                        loading: !1,
                        success: !1,
                        error: !1,
                        status: null,
                        data: null
                    }),
                    u = (0, a.useCallback)((e => l.current && d((t => ({ ...t,
                        ...e
                    })))), [l]);
                return { ...c,
                    onSubmit: (0, a.useCallback)((async e => {
                        u({
                            loading: !0
                        });
                        await i.Z.login(t, e, n).then((t => {
                            let {
                                bodyData: n
                            } = t;
                            u({
                                success: !0,
                                error: !1,
                                data: n
                            }), o({
                                data: n,
                                input: e
                            })
                        })).catch((t => {
                            let {
                                response: {
                                    bodyData: n,
                                    status: a
                                }
                            } = t;
                            u({
                                success: !1,
                                error: !0,
                                data: n,
                                status: a
                            }), r({
                                data: n,
                                status: a,
                                input: e
                            })
                        })), u({
                            loading: !1
                        })
                    }), [r, o, n, u, t])
                }
            }
        },
        931441: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var a = n(177140),
                i = n(366675);
            const s = (e, t) => (0, a.I6)() ? t : i.Fs(e.toUpperCase(), (e => e ? e.replace(/[^0-9+]+/g, "") : "")(t))
        },
        977629: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var a, i = n(785893),
                s = n(445884),
                o = n(797664),
                r = n(47760),
                l = n(855874),
                c = n(755440),
                d = n(5212);
            ! function(e) {
                e.MALE = "male", e.FEMALE = "female", e.DIVERSE = "diverse", e.INDETERMINATE = "indeterminate"
            }(a || (a = {}));
            const u = [{
                    label: s.Z.t("patient_mobile.root.account.edit.gender.male"),
                    value: a.MALE
                }, {
                    label: s.Z.t("patient_mobile.root.account.edit.gender.female"),
                    value: a.FEMALE
                }, {
                    label: s.Z.t("patient_mobile.root.account.edit.gender.diverse"),
                    value: a.DIVERSE
                }, {
                    label: s.Z.t("patient_mobile.root.account.edit.gender.indeterminate"),
                    value: a.INDETERMINATE
                }],
                m = () => "de" === (0, d.rZ)() ? u : [{
                    label: s.Z.t("patient_mobile.root.account.edit.gender.male"),
                    value: a.MALE
                }, {
                    label: s.Z.t("patient_mobile.root.account.edit.gender.female"),
                    value: a.FEMALE
                }],
                p = "legal_gender",
                _ = e => {
                    let {
                        disabled: t = !1,
                        label: n = s.Z.t("patient_mobile.root.account.edit.gender.gender"),
                        required: d
                    } = e;
                    const u = (0, r.XQ)(),
                        _ = m();
                    return (0, i.jsx)(c.Z, {
                        label: n,
                        children: (0, i.jsx)(o.Z, {
                            children: (0, i.jsx)(l.Z, {
                                id: "legal-gender-selector",
                                options: _,
                                onChange: e => {
                                    switch (e) {
                                        case a.FEMALE:
                                            u.setValue("gender", !0);
                                            break;
                                        case a.MALE:
                                            u.setValue("gender", !1);
                                            break;
                                        default:
                                            u.setValue("gender", null)
                                    }
                                    u.setValue(p, e)
                                },
                                disabled: t,
                                label: n,
                                placeholder: n,
                                name: "legal_gender",
                                value: u.getValue(p),
                                required: d
                            })
                        })
                    })
                }
        },
        599403: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var a = n(785893),
                i = n(184481),
                s = n(445884),
                o = n(778075);
            const r = e => {
                let {
                    show: t,
                    onAccept: n,
                    onDismiss: r
                } = e;
                const [l, c] = (0, i.useState)(!1), d = (0, i.useCallback)((async () => {
                    c(!0), n()
                }), [n]);
                return (0, a.jsx)(o.Z, {
                    title: s.Z.t("patient_common.root.unified_account.logout_section.title"),
                    dismissText: s.Z.t("common.actions.cancel"),
                    onDismiss: r,
                    acceptText: s.Z.t("patient_common.root.unified_account.logout_section.button"),
                    onAccept: d,
                    show: t,
                    loading: l,
                    destructive: !0,
                    children: s.Z.t("patient_common.root.unified_account.logout_section.body")
                })
            }
        },
        955178: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Zt
            });
            var a, i = n(785893),
                s = n(184481),
                o = n(397745),
                r = n(878038),
                l = n(712722),
                c = n(552691),
                d = n(617999),
                u = n(545763),
                m = n(784600);
            ! function(e) {
                e.AUTHENTICATION_CHOICE_STEP = "choice", e.USERNAME_SIGN_UP_STEP = "username_sign_up", e.USERNAME_SIGN_IN_STEP = "username_sign_in", e.PATIENT_REQUEST_SIGN_IN_STEP = "patient_request_sign_in", e.IDENTITY_STEP = "identity", e.PASSWORD_STEP = "password", e.VERIFY_PHONE_NUMBER_STEP = "phone_number", e.LEGAL_TERMS_STEP = "privacy_policy", e.LOGIN_STEP = "login", e.VERIFICATION_CODE_STEP = "sms_validation", e.VERIFY_EMAIL_STEP = "email", e.PATIENT_REQUEST_VERIFY_EMAIL_STEP = "patient_request_email", e.PATIENT_REQUEST_VERIFY_PHONE_NUMBER_STEP = "patient_request_phone_number", e.MARKETING_OPT_IN_STEP = "marketing_optin"
            }(a || (a = {}));
            var p = n(432613),
                _ = n(445884);
            const h = e => {
                let {
                    children: t,
                    onBack: n,
                    currentStep: s
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c.Z, {
                        title: (0, i.jsx)(d.Z, {})
                    }), (0, i.jsx)(r.Z, {
                        className: "dl-justify-center pt-48",
                        children: (0, i.jsxs)(l.Z, {
                            className: "dl-max-width-608",
                            children: [s.path !== a.AUTHENTICATION_CHOICE_STEP && (0, i.jsx)(p.xv, {
                                uiStyle: "title-l-bold",
                                align: "left",
                                className: "!mb-24",
                                children: s.title
                            }), (0, i.jsxs)(m.Z, {
                                children: [s.path !== a.AUTHENTICATION_CHOICE_STEP && (0, i.jsx)(u.Z, {
                                    uiStyle: "small-neutral",
                                    leftIcon: "arrow-left",
                                    onClick: n,
                                    children: _.Z.t("common.actions.previous_step")
                                }), t]
                            })]
                        })
                    })]
                })
            };
            var g = n(581232),
                b = n(753657),
                v = n(111432);
            const x = e => {
                    let {
                        appointmentStartDate: t,
                        cloudinaryPublicId: n,
                        onBack: s,
                        currentStep: o
                    } = e;
                    const r = (0, v.t)("identification"),
                        l = o.title;
                    return t ? o.path === a.AUTHENTICATION_CHOICE_STEP ? (0, i.jsx)(g.Z, {
                        title: l,
                        steps: r.config,
                        onBack: s
                    }) : (0, i.jsx)(b.Z, {
                        onBack: s,
                        cloudinaryPublicId: n,
                        appointmentStartDate: t
                    }) : (0, i.jsx)(g.Z, {
                        title: l,
                        onBack: s
                    })
                },
                f = e => {
                    let {
                        children: t,
                        onBack: n,
                        cloudinaryPublicId: a,
                        appointmentStartDate: s,
                        currentStep: o
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(x, {
                            onBack: n,
                            cloudinaryPublicId: a,
                            appointmentStartDate: s,
                            currentStep: o
                        }), (0, i.jsx)(r.Z, {
                            className: "dl-justify-center",
                            children: (0, i.jsx)(l.Z, {
                                children: t
                            })
                        })]
                    })
                },
                N = () => ({
                    wrapperComponent: (0, o.s)() ? f : h
                }),
                Z = e => {
                    let {
                        onBack: t,
                        cloudinaryPublicId: n,
                        appointmentStartDate: a,
                        currentStep: s,
                        children: o
                    } = e;
                    const {
                        wrapperComponent: r
                    } = N();
                    return (0, i.jsx)(r, {
                        onBack: t,
                        cloudinaryPublicId: n,
                        appointmentStartDate: a,
                        currentStep: s,
                        children: o
                    })
                };
            var y = n(24553),
                E = n(957557),
                w = n.n(E),
                S = n(682492),
                T = n.n(S),
                j = n(8955),
                P = n(261397),
                I = n(800274),
                C = n(708221),
                k = n(414293),
                A = n.n(k);
            const M = e => e === a.LEGAL_TERMS_STEP,
                R = e => e === a.LOGIN_STEP,
                O = (e, t) => [a.AUTHENTICATION_CHOICE_STEP, a.USERNAME_SIGN_UP_STEP, a.USERNAME_SIGN_IN_STEP].includes(e) || t,
                D = e => e !== a.AUTHENTICATION_CHOICE_STEP;
            var F = n(990626),
                L = n(453040),
                B = n(366699),
                U = n(522917),
                H = n(5212),
                q = n(884167),
                z = n(325391);
            const V = e => {
                let {
                    state: t,
                    formApi: n,
                    label: a
                } = e;
                const [o, r] = (0, s.useState)(null), l = (0, s.useRef)(), c = a || "appointments.login_or_signup.email_or_phonenumber_step.label";
                return (0, s.useEffect)((() => {
                    var e;
                    return r(null !== (e = null === t || void 0 === t ? void 0 : t.error) && void 0 !== e ? e : null)
                }), [t.error, null === n || void 0 === n ? void 0 : n.submits]), (0, s.useEffect)((() => {
                    setTimeout((() => {
                        var e;
                        return null === (e = l.current) || void 0 === e ? void 0 : e.focus()
                    }), 500)
                }), []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(z.Z, {
                        name: "envelope"
                    }), (0, i.jsx)(L.Z, {
                        component: "div",
                        uiStyle: "title-l-bold",
                        className: "!mt-16",
                        children: _.Z.t(c)
                    }), (0, i.jsx)(B.Z, {
                        autoCapitalize: "off",
                        autoComplete: "off",
                        autoCorrect: "off",
                        className: "!mt-16 !mb-0",
                        ref: l,
                        id: "username",
                        field: "username",
                        label: "",
                        type: "text",
                        error: Boolean(o),
                        placeholder: _.Z.t("appointments.login_or_signup.email_or_phonenumber_step.placeholder"),
                        required: !0,
                        validate: e => !!e && !((e => /^[\w+\-.]+@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z0-9]+$/i.test(e))(e) || (e => (0, U.qh)((0, H.rZ)(), e))(e))
                    }), o && (0, i.jsx)(q.Z, {
                        uiStyle: "body-xs-regular",
                        color: "error-090",
                        "aria-live": "polite",
                        children: o
                    })]
                })
            };
            var G = n(294184),
                $ = n.n(G),
                Y = n(263448),
                Q = n(977629);
            const W = [{
                    label: _.Z.t("patient_mobile.root.account.new.identity_step.gender_label.female"),
                    value: !0
                }, {
                    label: _.Z.t("patient_mobile.root.account.new.identity_step.gender_label.male"),
                    value: !1
                }],
                K = e => {
                    let {
                        isInsEnabled: t,
                        isLegalGenderFSEnabled: n
                    } = e;
                    return t ? (0, i.jsx)(Y.T, {
                        required: !0
                    }) : n ? (0, i.jsx)(Q.Z, {
                        disabled: !1,
                        required: !0,
                        label: _.Z.t("patient_mobile.root.account.relatives.gender")
                    }) : (0, i.jsx)("div", {
                        className: "dl-gender-group dl-margin-t-4",
                        children: W.map((e => (0, i.jsx)(B.Z, {
                            label: "",
                            className: "dl-margin-y-0",
                            field: "gender",
                            name: "gender",
                            type: "radio-group",
                            options: [e],
                            required: !0
                        }, String(e.value))))
                    })
                },
                J = (0, F.cr)("ins_for_master_patients") && (0, F.LA)("ins"),
                X = (0, F.cr)("legal_gender") && (0, F.LA)("legal_gender"),
                ee = e => {
                    let {
                        state: t
                    } = e;
                    return (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(z.Z, {
                            name: "user",
                            label: t.data.username
                        }), (0, i.jsx)(L.Z, {
                            component: "div",
                            uiStyle: "title-l-bold",
                            className: "!mt-16",
                            children: _.Z.t("patient_mobile.root.account.new.identity_step.step_title")
                        }), (0, i.jsxs)("fieldset", {
                            className: "mt-16",
                            children: [(0, i.jsx)(L.Z, {
                                component: "legend",
                                uiStyle: "body-s-bold",
                                className: "mt-16",
                                children: _.Z.t("patient_mobile.root.account.new.identity_step.identity_label")
                            }), (0, i.jsx)(K, {
                                isInsEnabled: J,
                                isLegalGenderFSEnabled: X
                            }), (0, i.jsx)(B.Z, {
                                id: "first_name",
                                field: "first_name",
                                type: "text",
                                label: "",
                                autoComplete: "given-name",
                                placeholder: _.Z.t("patient_mobile.root.account.new.identity_step.first_name_placeholder"),
                                className: $()({
                                    "dl-margin-y-16": J || !X,
                                    "dl-margin-t-4": !J && X
                                }),
                                required: !0
                            }), (0, i.jsx)(B.Z, {
                                id: "last_name",
                                field: "last_name",
                                type: "text",
                                label: "",
                                autoComplete: "family-name",
                                placeholder: _.Z.t("patient_mobile.root.account.new.identity_step.last_name_placeholder"),
                                className: "dl-margin-y-16",
                                required: !0
                            })]
                        }), (0, i.jsxs)("fieldset", {
                            children: [(0, i.jsx)(L.Z, {
                                component: "legend",
                                uiStyle: "body-s-bold",
                                className: "mt-16",
                                children: _.Z.t("patient_mobile.root.account.new.identity_step.birthdate_label")
                            }), (0, i.jsx)(B.Z, {
                                id: "birthdate-2",
                                field: "birthdate",
                                type: "birthdate",
                                label: "",
                                autoComplete: "bday",
                                placeholder: _.Z.t("patient_mobile.root.account.new.identity_step.birthdate_placeholder"),
                                className: "dl-margin-t-4 dl-margin-b-0",
                                options: {
                                    minAge: F.ZP.ACCOUNT_MIN_LEGAL_AGE,
                                    minAgeErrorMessage: _.Z.t("accounts.age_too_young", {
                                        min_age: F.ZP.ACCOUNT_MIN_LEGAL_AGE
                                    })
                                },
                                hideInputDetails: !0,
                                hideRequiredIndicator: !0,
                                required: !0
                            })]
                        })]
                    })
                };
            var te = n(169339);
            const ne = e => {
                let {
                    email: t,
                    showModal: n,
                    onHide: a
                } = e;
                return (0, i.jsxs)(te.Z, {
                    title: _.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.email_not_match.title"),
                    show: n,
                    onHide: a,
                    size: "small",
                    children: [(0, i.jsx)(L.Z, {
                        uiStyle: "body-s-regular",
                        block: !0,
                        className: "!mb-16",
                        children: _.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.email_not_match.description_html", {
                            email: t
                        })
                    }), (0, i.jsx)(L.Z, {
                        uiStyle: "body-s-regular",
                        block: !0,
                        children: _.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.how_to_solve_the_error")
                    })]
                })
            };
            var ae = n(929014);
            const ie = e => {
                    let {
                        email: t
                    } = e;
                    return (0, i.jsx)(ae.Z, {
                        variant: "deprecated-alert-interface",
                        size: "medium",
                        className: "!p-8 mt-16",
                        children: (0, i.jsx)(L.Z, {
                            uiStyle: "body-s-regular",
                            block: !0,
                            children: _.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.email_not_match.description_html", {
                                email: t
                            })
                        })
                    })
                },
                se = e => {
                    let {
                        state: t,
                        formApi: n,
                        email: a
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(V, {
                            state: t,
                            formApi: n,
                            label: "appointments.login_or_signup.verify_email_step.label"
                        }), (0, i.jsx)(ie, {
                            email: a
                        })]
                    })
                };
            var oe = n(720113);
            const re = e => {
                    let {
                        state: t
                    } = e;
                    const {
                        email: n
                    } = (0, oe.Z)(), [a, i] = (0, s.useState)(!1);
                    return "email_mismatch" === t.error && (i(!0), t.error = void 0), {
                        email: n,
                        showModal: a,
                        dismissModal: () => {
                            i(!1)
                        }
                    }
                },
                le = e => {
                    let {
                        state: t,
                        formApi: n
                    } = e;
                    const {
                        email: a,
                        showModal: s,
                        dismissModal: o
                    } = re({
                        state: t
                    });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [s && (0, i.jsx)(ne, {
                            email: a,
                            showModal: s,
                            onHide: o
                        }), (0, i.jsx)(se, {
                            state: t,
                            formApi: n,
                            email: a
                        })]
                    })
                };
            var ce = n(328638);
            const de = e => {
                    let {
                        phone_number: t
                    } = e;
                    return (0, i.jsx)(ae.Z, {
                        variant: "deprecated-alert-interface",
                        size: "medium",
                        className: "!p-8",
                        children: (0, i.jsx)(L.Z, {
                            uiStyle: "body-s-regular",
                            block: !0,
                            children: _.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.phone_not_match.description_html", {
                                phone_number: t
                            })
                        })
                    })
                },
                ue = e => {
                    let {
                        formApi: t,
                        phone_number: n
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(ce.Z, {
                            formApi: t
                        }), (0, i.jsx)(de, {
                            phone_number: n
                        })]
                    })
                },
                me = e => {
                    let {
                        phone_number: t,
                        showModal: n,
                        onHide: a
                    } = e;
                    return (0, i.jsxs)(te.Z, {
                        title: _.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.phone_not_match.title"),
                        show: n,
                        onHide: a,
                        size: "small",
                        children: [(0, i.jsx)(L.Z, {
                            uiStyle: "body-s-regular",
                            block: !0,
                            className: "!mb-16",
                            children: _.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.phone_not_match.description_html", {
                                phone_number: t
                            })
                        }), (0, i.jsx)(L.Z, {
                            uiStyle: "body-s-regular",
                            block: !0,
                            children: _.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.contact_info_not_match.how_to_solve_the_error")
                        })]
                    })
                },
                pe = e => {
                    let {
                        state: t
                    } = e;
                    const {
                        phoneNumber: n
                    } = (0, oe.Z)(), [a, i] = (0, s.useState)(!1);
                    return "phone_mismatch" === t.error && (i(!0), t.error = void 0), {
                        phoneNumber: n,
                        showModal: a,
                        dismissModal: () => {
                            i(!1)
                        }
                    }
                },
                _e = e => {
                    let {
                        state: t,
                        formApi: n
                    } = e;
                    const {
                        phoneNumber: a,
                        showModal: s,
                        dismissModal: o
                    } = pe({
                        state: t
                    });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [s && (0, i.jsx)(me, {
                            phone_number: a,
                            showModal: s,
                            onHide: o
                        }), (0, i.jsx)(ue, {
                            formApi: n,
                            phone_number: a
                        })]
                    })
                },
                he = e => {
                    let {
                        state: t,
                        formApi: n
                    } = e;
                    const [a, o] = (0, s.useState)(null), r = (0, s.useRef)();
                    return (0, s.useEffect)((() => {
                        var e;
                        return o(null !== (e = t.error) && void 0 !== e ? e : null)
                    }), [t.error, null === n || void 0 === n ? void 0 : n.submits]), (0, s.useEffect)((() => {
                        setTimeout((() => {
                            var e;
                            return null === (e = r.current) || void 0 === e ? void 0 : e.focus()
                        }), 500)
                    }), []), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(z.Z, {
                            name: "envelope"
                        }), (0, i.jsx)(L.Z, {
                            component: "div",
                            uiStyle: "title-l-bold",
                            className: "!mt-16",
                            children: _.Z.t("appointments.login_or_signup.verify_email_step.label")
                        }), (0, i.jsx)(B.Z, {
                            className: "!mt-16 !mb-0",
                            ref: r,
                            id: "email",
                            field: "email",
                            label: "",
                            type: "email",
                            error: Boolean(a),
                            placeholder: _.Z.t("appointments.login_or_signup.verify_email_step.placeholder"),
                            required: !0
                        }), a && (0, i.jsx)(q.Z, {
                            uiStyle: "body-xs-regular",
                            color: "error-090",
                            "aria-live": "polite",
                            children: a
                        })]
                    })
                };
            var ge = n(983923);
            const be = () => {
                const e = (0, s.useRef)();
                return (0, s.useEffect)((() => {
                    setTimeout((() => {
                        var t;
                        return null === (t = e.current) || void 0 === t ? void 0 : t.focus()
                    }), 500)
                }), []), (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(z.Z, {
                        name: "lock"
                    }), (0, i.jsx)(L.Z, {
                        component: "div",
                        uiStyle: "title-l-bold",
                        className: "!mt-16",
                        children: _.Z.t("patient_mobile.root.account.new.password_step.input_label")
                    }), (0, i.jsx)(ge.Z, {
                        className: "!mt-16 !mb-0",
                        ref: e,
                        noEmptyHint: !0,
                        showIcon: !1,
                        id: "password",
                        field: "password",
                        placeholder: _.Z.t("patient_mobile.root.account.new.password_step.input_placeholder"),
                        label: "",
                        required: !0
                    })]
                })
            };
            var ve = n(383915),
                xe = n(968461),
                fe = n(704098),
                Ne = n(528846),
                Ze = n(516590);
            const ye = n.p + "2a910d57e006d01e8582.png",
                Ee = e => {
                    let {
                        onChange: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: "flex items-center",
                        children: (0, i.jsx)(fe.Z, {
                            labelClassName: "px-16 py-16 rounded-lg dl-border flex w-full",
                            field: "terms_and_conditions",
                            onChange: t,
                            label: (0, i.jsx)(L.Z, {
                                component: "div",
                                className: "!ml-8",
                                children: _.Z.t("patient_mobile.root.account.new.privacy_policy_step.terms_and_conditions.label")
                            })
                        })
                    })
                },
                we = e => {
                    let {
                        error: t
                    } = e;
                    const [n, a] = (0, s.useState)(!1);
                    return (0, s.useEffect)((() => {
                        t && a(!0)
                    }), [t]), (0, i.jsxs)(te.Z, {
                        size: "small",
                        show: n,
                        onHide: () => a(!1),
                        children: [(0, i.jsxs)(ve.Z, {
                            alignText: "left",
                            children: [(0, i.jsx)(L.Z, {
                                component: "div",
                                uiStyle: "body-s-bold",
                                className: "mb-16",
                                children: _.Z.t("common.account_not_created")
                            }), (0, i.jsx)(L.Z, {
                                component: "div",
                                uiStyle: "body-s-regular",
                                className: "mb-16",
                                children: t
                            }, t)]
                        }), (0, i.jsx)(xe.Z, {
                            className: "flex flex-col",
                            children: (0, i.jsx)(u.Z, {
                                onClick: () => a(!1),
                                children: _.Z.t("common.got_it")
                            })
                        })]
                    })
                },
                Se = e => {
                    let {
                        state: {
                            error: t,
                            legalTermAcceptance: n
                        }
                    } = e;
                    const [a, o] = (0, s.useState)(null), r = A()(a) && !1 === n || !1 === a;
                    return (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(Ne.Z, {
                            className: "h-64",
                            src: ye,
                            alt: ""
                        }), (0, i.jsx)(L.Z, {
                            component: "div",
                            uiStyle: "title-s-bold",
                            className: "!mt-16",
                            children: _.Z.t("patient_mobile.root.account.new.privacy_policy_step.title")
                        }), (0, i.jsx)(L.Z, {
                            component: "div",
                            uiStyle: "body-s-regular",
                            className: "!mt-8",
                            children: _.Z.t("patient_mobile.root.account.new.privacy_policy_step.body_html", {
                                url: F.ZP.PATIENT_LEGAL_INFO_LINKS.terms_and_conditions
                            })
                        }), (0, i.jsx)("div", {
                            className: "mt-16",
                            children: (0, i.jsx)(Ee, {
                                onChange: e => {
                                    o(e), e && (0, Ze.ZP)({
                                        name: "patient_signup_accept_terms"
                                    }, {
                                        schema: "patient"
                                    })
                                }
                            })
                        }), (0, i.jsx)(L.Z, {
                            component: "div",
                            uiStyle: "body-s-regular",
                            color: "neutral-090",
                            className: "!mt-16",
                            children: _.Z.t("patient_mobile.root.account.new.privacy_policy_step.data_protection.further_information_html", {
                                url: F.ZP.PATIENT_LEGAL_INFO_LINKS.privacy_policy
                            })
                        }), r && (0, i.jsx)(L.Z, {
                            component: "div",
                            uiStyle: "body-s-regular",
                            color: "error-090",
                            className: "mt-16",
                            children: _.Z.t("patient_mobile.root.account.new.privacy_policy_step.error_message")
                        }), (0, i.jsx)(we, {
                            error: t
                        })]
                    })
                };
            var Te = n(441609),
                je = n.n(Te);
            const Pe = e => {
                let {
                    state: t,
                    formApi: n
                } = e;
                const [a, o] = (0, s.useState)(null), r = (0, y.useNavigate)(), l = (0, U.qh)((0, H.rZ)(), null === n || void 0 === n ? void 0 : n.values.username) ? "tel" : "email", c = "tel" === l ? _.Z.t("appointments.login_or_signup.signin.placeholder_phone_number") : _.Z.t("appointments.login_or_signup.signin.placeholder_email");
                return (0, s.useEffect)((() => {
                    var e;
                    return o(null !== (e = t.error) && void 0 !== e ? e : null)
                }), [t.error, null === n || void 0 === n ? void 0 : n.submits]), (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(z.Z, {
                        name: "lock"
                    }), (0, i.jsx)(L.Z, {
                        uiStyle: "title-l-bold",
                        className: "!mt-16",
                        children: _.Z.t("appointments.login_or_signup.signin.password_title")
                    }), (0, i.jsx)(B.Z, {
                        className: "!mt-16 !mb-0",
                        id: "username",
                        field: "username",
                        label: "",
                        type: l,
                        placeholder: c,
                        required: !0,
                        readOnly: !0
                    }), (0, i.jsx)(B.Z, {
                        className: "!mt-16 !mb-0",
                        id: "password",
                        field: "password",
                        label: "",
                        type: "password",
                        placeholder: _.Z.t("appointments.login_or_signup.signin.password"),
                        error: Boolean(a),
                        validate: e => je()(e),
                        onChange: () => o(null),
                        focus: !0
                    }), a && (0, i.jsx)(q.Z, {
                        uiStyle: "body-xs-regular",
                        color: "error-090",
                        "aria-live": "polite",
                        children: a
                    }), (0, i.jsx)(fe.Z, {
                        labelClassName: "mt-8",
                        field: "remember_username",
                        label: _.Z.t("appointments.login_or_signup.signin.remember_username")
                    }), (0, i.jsx)(u.Z, {
                        className: "mb-24",
                        component: "a",
                        uiStyle: "link-primary",
                        onClick: () => {
                            (0, Ze.ZP)({
                                name: "patient_signin_password_forgotten"
                            }, {
                                schema: "patient"
                            }), r("/account/passwords/new", {
                                state: {
                                    username: null === n || void 0 === n ? void 0 : n.values.username
                                }
                            })
                        },
                        children: _.Z.t("common.password_reset.title")
                    })]
                })
            };
            var Ie = n(108716);
            const Ce = e => {
                    let {
                        inBooking: t,
                        isPatientRequestAnonymous: n
                    } = e;
                    return {
                        title: t ? _.Z.t("appointments.login_or_signup.authentication_choice_step.title") : n ? _.Z.t("api.accounts.index.root.notifications_center.patient_requests.anonymous_funnel.eligible.sign_up_sign_in_title") : _.Z.t("appointments.login_or_signup.email_step.label_out_of_booking")
                    }
                },
                ke = {
                    component: e => {
                        let {
                            onStepSubmit: t,
                            state: {
                                inBooking: n,
                                isVaccination: a,
                                hasVaccinationBlockAvailablilities: s,
                                isPatientRequestAnonymous: o
                            }
                        } = e;
                        const r = (0, H.Zz)(),
                            {
                                title: l
                            } = Ce({
                                isPatientRequestAnonymous: o,
                                inBooking: n
                            });
                        return (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(L.Z, {
                                uiStyle: r ? "title-l-bold" : "title-s-bold",
                                align: "center",
                                className: r ? "mb-24" : "mb-8",
                                children: l
                            }), (0, i.jsx)(m.Z, {
                                className: "mt-8",
                                children: (0, i.jsxs)("div", {
                                    className: "flex flex-col items-stretch text-center",
                                    children: [(0, i.jsx)(L.Z, {
                                        component: "div",
                                        uiStyle: "title-s-bold",
                                        align: "center",
                                        className: "!my-8",
                                        children: _.Z.t("appointments.login_or_signup.new_on_doctolib")
                                    }), (0, i.jsx)(u.Z, {
                                        type: "button",
                                        onClick: () => t({
                                            isNewUser: !0
                                        }),
                                        className: "!my-8",
                                        children: _.Z.t("appointments.login_or_signup.authentication_choice_step.sign_up.button_text")
                                    })]
                                })
                            }), (0, i.jsx)(m.Z, {
                                className: "mt-32",
                                children: (0, i.jsxs)("div", {
                                    className: "flex flex-col items-stretch text-center",
                                    children: [(0, i.jsx)(L.Z, {
                                        component: "div",
                                        uiStyle: "title-s-bold",
                                        align: "center",
                                        className: "!my-8",
                                        children: _.Z.t("appointments.login_or_signup.ever_used_doctolib")
                                    }), (0, i.jsx)(u.Z, {
                                        type: "button",
                                        uiStyle: "DEPRECATED_yellow",
                                        onClick: () => t({
                                            isNewUser: !1
                                        }),
                                        className: "!my-8",
                                        children: _.Z.t("appointments.login_or_signup.authentication_choice_step.sign_in.button_text")
                                    })]
                                })
                            }), a && (0, i.jsx)(Ie.Z, {
                                hasVaccinationBlockAvailablilities: s
                            })]
                        })
                    },
                    path: a.AUTHENTICATION_CHOICE_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.identification"),
                    trackingName: "patient_authentication_choice"
                },
                Ae = {
                    component: V,
                    path: a.USERNAME_SIGN_UP_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.register"),
                    trackingName: "patient_signup_username"
                },
                Me = {
                    component: V,
                    path: a.USERNAME_SIGN_IN_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.login"),
                    trackingName: "patient_signin_username"
                },
                Re = {
                    component: le,
                    path: a.PATIENT_REQUEST_SIGN_IN_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.login"),
                    trackingName: "patient_request_signin_username"
                },
                Oe = {
                    component: ee,
                    path: a.IDENTITY_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.register"),
                    trackingName: "patient_signup_identity"
                },
                De = {
                    component: he,
                    path: a.VERIFY_EMAIL_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.register"),
                    trackingName: "patient_signup_mail"
                },
                Fe = {
                    component: le,
                    path: a.PATIENT_REQUEST_VERIFY_EMAIL_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.register"),
                    trackingName: "patient_request_signup_mail"
                },
                Le = {
                    component: be,
                    path: a.PASSWORD_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.register"),
                    trackingName: "patient_signup_password"
                },
                Be = {
                    component: ce.Z,
                    path: a.VERIFY_PHONE_NUMBER_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.register"),
                    trackingName: "patient_signup_phone"
                },
                Ue = {
                    component: _e,
                    path: a.PATIENT_REQUEST_VERIFY_PHONE_NUMBER_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.register"),
                    trackingName: "patient_request_signup_phone_number"
                },
                He = {
                    component: Se,
                    path: a.LEGAL_TERMS_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.register"),
                    trackingName: "patient_signup_terms_privacy"
                },
                qe = {
                    component: Pe,
                    path: a.LOGIN_STEP,
                    title: _.Z.t("patient_mobile.root.account.new.titles.login"),
                    trackingName: "patient_signin_page"
                },
                ze = {
                    component: null,
                    path: a.VERIFICATION_CODE_STEP,
                    title: "",
                    trackingName: ""
                },
                Ve = {
                    component: null,
                    path: a.MARKETING_OPT_IN_STEP,
                    title: "",
                    trackingName: ""
                },
                Ge = [ke, Ae, Me, Oe, De, Le, Be, He, qe, Ve],
                $e = [ke, Re, Oe, Fe, Ue, Le, He, qe, Ve],
                Ye = [ke, Ae, Oe, Le, Be],
                Qe = [ke, Fe, Oe, Le, Ue],
                We = [ke, Re, qe],
                Ke = [ke, Ae, Oe, De, Le],
                Je = [ke, Me, qe],
                Xe = (0, F.LA)("marketing_consent") && F.ZP.MARKETING_CONSENT_IN_BOOKING_ENABLED ? [He, Ve, ze, qe] : [He, ze, qe],
                et = {
                    patientRequestAnonymous: {
                        signUp: Qe,
                        signIn: We
                    },
                    standard: {
                        signUp: {
                            phoneNumber: Ke,
                            email: Ye
                        },
                        signIn: Je
                    }
                },
                tt = e => {
                    let {
                        isNewUser: t,
                        isPhoneNumberFlow: n,
                        isPatientRequestAnonymous: a
                    } = e;
                    const {
                        patientRequestAnonymous: i,
                        standard: s
                    } = et;
                    if (t && a) return [...i.signUp, ...Xe];
                    if (t) {
                        return [...n ? s.signUp.phoneNumber : s.signUp.email, ...Xe]
                    }
                    return a ? i.signIn : s.signIn
                },
                nt = e => {
                    let {
                        isPatientRequestAnonymous: t,
                        isNewUser: n,
                        isPhoneNumberFlow: a
                    } = e;
                    return {
                        steps: tt({
                            isPatientRequestAnonymous: t,
                            isNewUser: n,
                            isPhoneNumberFlow: a
                        }),
                        stepsForRoutes: t ? $e : Ge
                    }
                },
                at = e => {
                    let {
                        name: t,
                        appointmentId: n,
                        inBooking: a,
                        profileId: i,
                        details: s
                    } = e;
                    return (0, Ze.ZP)({
                        name: t,
                        details: {
                            appointment_id: n,
                            out_of_booking: !a,
                            profile_id: i,
                            ...s
                        }
                    }, {
                        schema: "patient"
                    })
                };
            var it = n(619423),
                st = n(709282),
                ot = n(879058);
            const rt = (e, t) => {
                    if (!t || !t.length) return a.AUTHENTICATION_CHOICE_STEP;
                    const n = t.findIndex((t => t.path === e));
                    return n < 0 ? a.AUTHENTICATION_CHOICE_STEP : t[n + 1].path
                },
                lt = (e, t) => t ? {
                    phone_number: e
                } : {
                    email: e
                },
                ct = e => e ? "phone" : "email",
                dt = e => e ? "username_already_exists" : "unknown_username",
                ut = {
                    [a.AUTHENTICATION_CHOICE_STEP]: async e => {
                        let {
                            values: {
                                isNewUser: t
                            },
                            state: n
                        } = e;
                        const i = tt({ ...n,
                            isNewUser: t
                        });
                        return {
                            nextStepPath: rt(a.AUTHENTICATION_CHOICE_STEP, i),
                            stateInfo: {
                                isNewUser: t
                            }
                        }
                    },
                    [a.USERNAME_SIGN_IN_STEP]: async e => {
                        let {
                            values: t
                        } = e;
                        const n = t.username,
                            {
                                error: i,
                                account_exists: s
                            } = await it.Z.account.checkExistence(n).catch((e => ({
                                error: e
                            })));
                        var o, r, l;
                        if (i) return {
                            error: (0, st.F)({
                                error: null === (o = i.response) || void 0 === o || null === (r = o.bodyData) || void 0 === r ? void 0 : r.error,
                                status: null === (l = i.response) || void 0 === l ? void 0 : l.status
                            })
                        };
                        const c = !s,
                            d = /^\+*[0-9. ]*$/.test(n),
                            u = {
                                isNewUser: c,
                                isPhoneNumberFlow: d,
                                data: {
                                    username: n
                                }
                            };
                        return s ? {
                            nextStepPath: a.LOGIN_STEP
                        } : {
                            nextStepPath: a.IDENTITY_STEP,
                            stateInfo: u,
                            showModal: {
                                reason: dt(s),
                                data: {
                                    value: n,
                                    usernameType: ct(d)
                                }
                            }
                        }
                    },
                    [a.USERNAME_SIGN_UP_STEP]: async e => {
                        let {
                            values: t,
                            state: n
                        } = e;
                        const i = t.username,
                            {
                                error: s,
                                account_exists: o
                            } = await it.Z.account.checkExistence(i).catch((e => ({
                                error: e
                            })));
                        var r, l, c;
                        if (s) return {
                            error: (0, st.F)({
                                error: null === (r = s.response) || void 0 === r || null === (l = r.bodyData) || void 0 === l ? void 0 : l.error,
                                status: null === (c = s.response) || void 0 === c ? void 0 : c.status
                            })
                        };
                        const d = !o,
                            u = /^\+*[0-9. ]*$/.test(i),
                            m = tt({ ...n,
                                isNewUser: d,
                                isPhoneNumberFlow: u
                            });
                        if (o) {
                            const e = {
                                isNewUser: d,
                                isPhoneNumberFlow: u,
                                data: {
                                    username: i
                                }
                            };
                            return {
                                nextStepPath: a.LOGIN_STEP,
                                stateInfo: e,
                                showModal: {
                                    reason: dt(o),
                                    data: {
                                        value: i,
                                        usernameType: ct(u)
                                    }
                                }
                            }
                        }
                        return {
                            nextStepPath: rt(a.USERNAME_SIGN_UP_STEP, m),
                            stateInfo: {
                                isNewUser: d,
                                isPhoneNumberFlow: u
                            }
                        }
                    },
                    [a.PATIENT_REQUEST_SIGN_IN_STEP]: async e => {
                        let {
                            values: t
                        } = e;
                        const n = t.username,
                            {
                                email_match: i
                            } = await it.Z.patientRequest.verifyPatientData(n);
                        if (!i) return {
                            error: "email_mismatch"
                        };
                        const {
                            error: s,
                            account_exists: o
                        } = await it.Z.account.checkExistence(n).catch((e => ({
                            error: e
                        })));
                        var r, l, c;
                        if (s) return {
                            error: (0, st.F)({
                                error: null === (r = s.response) || void 0 === r || null === (l = r.bodyData) || void 0 === l ? void 0 : l.error,
                                status: null === (c = s.response) || void 0 === c ? void 0 : c.status
                            })
                        };
                        const d = !o,
                            u = /^\+*[0-9. ]*$/.test(n),
                            m = {
                                isNewUser: d,
                                isPhoneNumberFlow: u,
                                data: {
                                    username: n
                                }
                            };
                        return o ? {
                            nextStepPath: a.LOGIN_STEP
                        } : {
                            nextStepPath: a.IDENTITY_STEP,
                            stateInfo: m,
                            showModal: {
                                reason: dt(o),
                                data: {
                                    value: n,
                                    usernameType: ct(u)
                                }
                            }
                        }
                    },
                    [a.IDENTITY_STEP]: async e => {
                        let {
                            steps: t
                        } = e;
                        return {
                            nextStepPath: rt(a.IDENTITY_STEP, t)
                        }
                    },
                    [a.VERIFY_EMAIL_STEP]: async e => {
                        let {
                            values: {
                                email: t
                            },
                            steps: n
                        } = e;
                        const {
                            error: i,
                            account_exists: s
                        } = await it.Z.account.checkExistence(t).catch((e => ({
                            error: e
                        })));
                        var o, r, l;
                        if (i) return {
                            error: (0, st.F)({
                                error: null === (o = i.response) || void 0 === o || null === (r = o.bodyData) || void 0 === r ? void 0 : r.error,
                                status: null === (l = i.response) || void 0 === l ? void 0 : l.status
                            })
                        };
                        if (s) {
                            const e = {
                                isNewUser: !1,
                                isPhoneNumberFlow: !1,
                                data: {
                                    username: t
                                }
                            };
                            return {
                                nextStepPath: a.LOGIN_STEP,
                                stateInfo: e,
                                showModal: {
                                    reason: "username_already_exists",
                                    data: {
                                        value: t,
                                        usernameType: "email"
                                    }
                                }
                            }
                        }
                        return {
                            nextStepPath: rt(a.VERIFY_EMAIL_STEP, n)
                        }
                    },
                    [a.PATIENT_REQUEST_VERIFY_EMAIL_STEP]: async e => {
                        let {
                            values: {
                                username: t
                            },
                            steps: n
                        } = e;
                        const {
                            email_match: i
                        } = await it.Z.patientRequest.verifyPatientData(t);
                        if (!i) return {
                            error: "email_mismatch"
                        };
                        const {
                            error: s,
                            account_exists: o
                        } = await it.Z.account.checkExistence(t).catch((e => ({
                            error: e
                        })));
                        var r, l, c;
                        if (s) return {
                            error: (0, st.F)({
                                error: null === (r = s.response) || void 0 === r || null === (l = r.bodyData) || void 0 === l ? void 0 : l.error,
                                status: null === (c = s.response) || void 0 === c ? void 0 : c.status
                            })
                        };
                        if (o) {
                            const e = {
                                isNewUser: !1,
                                isPhoneNumberFlow: !1,
                                data: {
                                    username: t
                                }
                            };
                            return {
                                nextStepPath: a.LOGIN_STEP,
                                stateInfo: e,
                                showModal: {
                                    reason: "username_already_exists",
                                    data: {
                                        value: t,
                                        usernameType: "email"
                                    }
                                }
                            }
                        }
                        return {
                            nextStepPath: rt(a.PATIENT_REQUEST_VERIFY_EMAIL_STEP, n)
                        }
                    },
                    [a.PASSWORD_STEP]: async e => {
                        let {
                            steps: t
                        } = e;
                        return {
                            nextStepPath: rt(a.PASSWORD_STEP, t)
                        }
                    },
                    [a.VERIFY_PHONE_NUMBER_STEP]: async e => {
                        let {
                            values: {
                                phone_number: t
                            },
                            steps: n
                        } = e;
                        const {
                            error: i,
                            account_exists: s
                        } = await it.Z.account.checkExistence(t).catch((e => ({
                            error: e
                        })));
                        var o, r, l;
                        if (i) return {
                            error: (0, st.F)({
                                error: null === (o = i.response) || void 0 === o || null === (r = o.bodyData) || void 0 === r ? void 0 : r.error,
                                status: null === (l = i.response) || void 0 === l ? void 0 : l.status
                            })
                        };
                        if (s) {
                            const e = {
                                isNewUser: !1,
                                isPhoneNumberFlow: !0,
                                data: {
                                    username: t
                                }
                            };
                            return {
                                nextStepPath: a.LOGIN_STEP,
                                stateInfo: e,
                                showModal: {
                                    reason: "username_already_exists",
                                    data: {
                                        value: t,
                                        usernameType: "phone"
                                    }
                                }
                            }
                        }
                        return {
                            nextStepPath: rt(a.VERIFY_PHONE_NUMBER_STEP, n)
                        }
                    },
                    [a.PATIENT_REQUEST_VERIFY_PHONE_NUMBER_STEP]: async e => {
                        let {
                            values: {
                                phone_number: t
                            },
                            steps: n
                        } = e;
                        const {
                            phone_match: i
                        } = await it.Z.patientRequest.verifyPatientData(null, t);
                        if (!i) return {
                            error: "phone_mismatch"
                        };
                        const {
                            error: s,
                            account_exists: o
                        } = await it.Z.account.checkExistence(t).catch((e => ({
                            error: e
                        })));
                        var r, l, c;
                        if (s) return {
                            error: (0, st.F)({
                                error: null === (r = s.response) || void 0 === r || null === (l = r.bodyData) || void 0 === l ? void 0 : l.error,
                                status: null === (c = s.response) || void 0 === c ? void 0 : c.status
                            })
                        };
                        if (o) {
                            const e = {
                                isNewUser: !1,
                                isPhoneNumberFlow: !0,
                                data: {
                                    username: t
                                }
                            };
                            return {
                                nextStepPath: a.LOGIN_STEP,
                                stateInfo: e,
                                showModal: {
                                    reason: "username_already_exists",
                                    data: {
                                        value: t,
                                        usernameType: "phone"
                                    }
                                }
                            }
                        }
                        return {
                            nextStepPath: rt(a.PATIENT_REQUEST_VERIFY_PHONE_NUMBER_STEP, n)
                        }
                    },
                    [a.LEGAL_TERMS_STEP]: async e => {
                        let {
                            values: t,
                            state: {
                                isPhoneNumberFlow: n,
                                tankerContext: i,
                                login: s
                            },
                            steps: o
                        } = e;
                        if (!0 !== t.terms_and_conditions) return {
                            error: "",
                            stateInfo: {
                                legalTermAcceptance: !1
                            }
                        };
                        const r = t.username,
                            l = { ...t,
                                ...lt(r, n)
                            },
                            {
                                error: c,
                                ...d
                            } = await it.Z.account.signup({
                                account: l
                            }).catch((e => ({
                                error: e
                            })));
                        var u, m;
                        if (c) return {
                            error: (null === (u = c.response) || void 0 === u || null === (m = u.bodyData) || void 0 === m ? void 0 : m.error) || _.Z.t("patient_mobile.root.account.new.generic_error")
                        };
                        await (0, ot.F)({
                            tankerContext: i,
                            login: s
                        }, d, l);
                        const p = `?current_step=${o.findIndex((e=>e.path===a.LEGAL_TERMS_STEP))+1}&total_steps=${o.length}`;
                        return {
                            redirect: `${d.redirection}${p}`
                        }
                    },
                    [a.LOGIN_STEP]: async e => {
                        let {
                            values: {
                                username: t,
                                password: n,
                                remember_username: a
                            },
                            state: i
                        } = e;
                        const {
                            error: s,
                            redirection: o,
                            refresh_token: r,
                            ...l
                        } = await it.Z.login({
                            username: t,
                            password: n,
                            redirection: i.redirection
                        }).catch((e => ({
                            error: e
                        })));
                        var c, d, u;
                        return s ? {
                            error: (0, st.F)({
                                error: null === (c = s.response) || void 0 === c || null === (d = c.bodyData) || void 0 === d ? void 0 : d.error,
                                status: null === (u = s.response) || void 0 === u ? void 0 : u.status
                            })
                        } : (await (0, ot.B)(i.tankerContext, l, {
                            username: t,
                            password: n,
                            remember_username: a,
                            refresh_token: r
                        }), {
                            redirect: o
                        })
                    },
                    [a.VERIFICATION_CODE_STEP]: async () => ({}),
                    [a.MARKETING_OPT_IN_STEP]: async () => ({})
                },
                mt = (e, t) => {
                    let {
                        propertiesToOmit: n,
                        propertiesToMerge: a
                    } = t;
                    const i = w()(e, null !== n && void 0 !== n ? n : []);
                    return { ...T()(i, a)
                    }
                },
                pt = e => {
                    let {
                        username: t,
                        currentStepPath: n,
                        isPatientRequestAnonymous: i,
                        isVaccination: o,
                        hasVaccinationBlockAvailablilities: r,
                        inBooking: l,
                        formApi: c,
                        profileId: d,
                        appointmentId: u,
                        redirection: m
                    } = e;
                    const p = (0, y.useNavigate)(),
                        _ = {
                            username: t || j.U2("last-login-username"),
                            remember_username: !0
                        },
                        [h, g] = (0, s.useState)({
                            data: _,
                            tankerContext: (0, s.useContext)(P.WA),
                            login: (0, I.f0)(),
                            inBooking: l,
                            isNewUser: !1,
                            isPhoneNumberFlow: !1,
                            isPatientRequestAnonymous: i,
                            isVaccination: o,
                            hasVaccinationBlockAvailablilities: r,
                            continueButtonDisabled: !1,
                            redirection: m,
                            profileId: d
                        }),
                        {
                            steps: b,
                            stepsForRoutes: v
                        } = nt(h),
                        x = ((e, t) => {
                            const n = e.substring(e.lastIndexOf("/") + 1);
                            return t.find((e => e.path === n)) || ke
                        })(n, b);
                    (0, s.useEffect)((() => {
                        var e, t, i;
                        O(x.path, null === c || void 0 === c || null === (e = c.current) || void 0 === e ? void 0 : e.values) || p(n, {
                            state: {
                                step: a.AUTHENTICATION_CHOICE_STEP
                            }
                        }), null === c || void 0 === c || null === (t = c.current) || void 0 === t || t.resetAll(), null === c || void 0 === c || null === (i = c.current) || void 0 === i || i.setValues(h.data)
                    }), [x]), (0, s.useEffect)((() => at({
                        name: x.trackingName,
                        appointmentId: u,
                        profileId: d,
                        inBooking: h.inBooking
                    })), [u, h.inBooking, x, d]);
                    return {
                        steps: b,
                        state: h,
                        currentStep: x,
                        stepsForRoutes: v,
                        onModalSubmit: async e => {
                            g((e => mt(e, {
                                propertiesToMerge: {
                                    continueButtonDisabled: !0
                                }
                            })));
                            const {
                                nextStepPath: t,
                                stateInfo: n
                            } = await ut[x.path]({
                                values: e,
                                state: h,
                                steps: b
                            });
                            return g((e => mt(e, {
                                propertiesToMerge: { ...n,
                                    continueButtonDisabled: !1
                                }
                            }))), p(t ? `./${t}` : "/sessions/new")
                        },
                        onModalDismiss: () => {
                            g((e => mt(e, {
                                propertiesToMerge: {
                                    continueButtonDisabled: !1
                                }
                            })))
                        },
                        onStepSubmit: async e => {
                            var t, n;
                            g((t => mt(t, {
                                propertiesToMerge: {
                                    data: e,
                                    continueButtonDisabled: !0
                                },
                                propertiesToOmit: ["error", "showModal"]
                            })));
                            const {
                                error: i,
                                nextStepPath: s,
                                redirect: o,
                                stateInfo: r,
                                showModal: l
                            } = await ut[x.path]({
                                values: e,
                                state: h,
                                steps: b
                            }), m = null !== (t = null === r || void 0 === r ? void 0 : r.isPhoneNumberFlow) && void 0 !== t ? t : h.isPhoneNumberFlow, _ = ((e, t, n) => e === a.USERNAME_SIGN_UP_STEP || e === a.LOGIN_STEP ? {
                                phone_success: n && Boolean(t),
                                mail_success: n && !t
                            } : {
                                success: n
                            })(x.path, m, !i), v = (e => M(e.path) ? "create_account_confirm_gdpr" : `${e.trackingName}_validate`)(x);
                            return at({
                                name: v,
                                appointmentId: u,
                                profileId: d,
                                inBooking: h.inBooking,
                                details: _
                            }), l || g((e => mt(e, {
                                propertiesToMerge: {
                                    continueButtonDisabled: !1,
                                    ...r
                                }
                            }))), !A()(i) || l ? g((e => mt(e, {
                                propertiesToMerge: {
                                    error: i,
                                    showModal: l
                                }
                            }))) : o ? (0, C.Z)(o, {
                                replace: !0
                            }) : p({
                                pathname: `./${s||""}`
                            }, {
                                state: {
                                    username: null === (n = c.current) || void 0 === n ? void 0 : n.values.username
                                }
                            })
                        },
                        onChangeForm: e => {
                            g((t => mt(t, {
                                propertiesToMerge: {
                                    data: e
                                }
                            })))
                        }
                    }
                };
            var _t = n(297516),
                ht = n(462814),
                gt = n(895955);
            const bt = e => {
                var t, n;
                let {
                    modalInfo: a,
                    errors: s,
                    values: o,
                    onModalSubmit: r,
                    isSubmitting: l,
                    onModalDismiss: c
                } = e;
                const d = !s && l && !!a;
                return (0, i.jsx)(gt.Z, {
                    isModalVisible: d,
                    username: null === a || void 0 === a || null === (t = a.data) || void 0 === t ? void 0 : t.value,
                    usernameType: null === a || void 0 === a || null === (n = a.data) || void 0 === n ? void 0 : n.usernameType,
                    onModalSubmit: () => r(o),
                    onModalDismiss: c,
                    reason: null === a || void 0 === a ? void 0 : a.reason
                })
            };
            var vt = n(992129);
            const xt = e => e !== a.AUTHENTICATION_CHOICE_STEP && e ? e : "/",
                ft = e => {
                    let {
                        authenticationState: t,
                        formApi: n,
                        onStepSubmit: a,
                        stepsForRoutes: s
                    } = e;
                    return (0, i.jsx)(y.Routes, {
                        children: s.map((e => {
                            let {
                                component: s,
                                path: o
                            } = e;
                            return (0, i.jsx)(y.Route, {
                                path: xt(o),
                                element: s && (0, i.jsx)(s, {
                                    formApi: n,
                                    state: t,
                                    onStepSubmit: a
                                })
                            }, o)
                        }))
                    })
                },
                Nt = e => {
                    let {
                        currentStep: t,
                        formApi: n,
                        onModalSubmit: s,
                        onModalDismiss: o,
                        onStepSubmit: r,
                        onChangeForm: l,
                        state: c,
                        steps: d,
                        stepsForRoutes: u
                    } = e;
                    return (0, i.jsx)(_t.Z, {
                        className: $()("flex flex-col justify-between", {
                            "bg-white": t.path !== a.AUTHENTICATION_CHOICE_STEP
                        }),
                        children: (0, i.jsx)(ht.Z, {
                            className: "p-16 flex flex-col justify-between",
                            autoComplete: "off",
                            horizontal: !1,
                            requiredIndicators: !1,
                            defaultValues: c.data,
                            onSubmit: e => r(e),
                            onChange: e => l(e.values),
                            children: e => {
                                var l;
                                return n.current = e, (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(ft, {
                                        authenticationState: c,
                                        formApi: n.current,
                                        onStepSubmit: r,
                                        stepsForRoutes: u
                                    }), (0, i.jsx)(bt, {
                                        modalInfo: c.showModal,
                                        errors: n.current.errors,
                                        values: n.current.values,
                                        onModalSubmit: s,
                                        onModalDismiss: o,
                                        isSubmitting: c.continueButtonDisabled
                                    }), D(t.path) && (0, i.jsx)(vt.Z, {
                                        hideProgress: R(t.path),
                                        currentStep: null !== (l = d.findIndex((e => e.path === t.path)) + 1) && void 0 !== l ? l : a.AUTHENTICATION_CHOICE_STEP,
                                        totalStep: null === d || void 0 === d ? void 0 : d.length,
                                        disabled: c.continueButtonDisabled
                                    })]
                                })
                            }
                        })
                    })
                },
                Zt = e => {
                    let {
                        username: t,
                        currentStepPath: n,
                        isPatientRequestAnonymous: a,
                        onBack: o,
                        profile_id: r,
                        appointment_id: l,
                        appointment_start_date: c,
                        cloudinary_public_id: d,
                        is_vaccination: u,
                        has_vaccination_block_availablilities: m,
                        redirection: p
                    } = e;
                    const _ = (0, s.useRef)(),
                        {
                            state: h,
                            currentStep: g,
                            steps: b,
                            onModalSubmit: v,
                            onModalDismiss: x,
                            onStepSubmit: f,
                            onChangeForm: N,
                            stepsForRoutes: y
                        } = pt({
                            username: t,
                            currentStepPath: n,
                            formApi: _,
                            isPatientRequestAnonymous: a,
                            isVaccination: u,
                            hasVaccinationBlockAvailablilities: m,
                            inBooking: Boolean(c),
                            appointmentId: l,
                            profileId: r,
                            redirection: p
                        });
                    return (0, i.jsx)(Z, {
                        onBack: o,
                        cloudinaryPublicId: d,
                        currentStep: g,
                        appointmentStartDate: c,
                        children: (0, i.jsx)(Nt, {
                            currentStep: g,
                            formApi: _,
                            onChangeForm: N,
                            onModalSubmit: v,
                            onModalDismiss: x,
                            onStepSubmit: f,
                            state: h,
                            steps: b,
                            stepsForRoutes: y
                        })
                    })
                }
        },
        328638: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var a = n(785893),
                i = n(184481),
                s = n(445884),
                o = n(366699),
                r = n(453040),
                l = n(325391);
            const c = e => {
                var t;
                let {
                    formApi: n,
                    hideHint: c = !1
                } = e;
                const d = Boolean(null === n || void 0 === n || null === (t = n.errors) || void 0 === t ? void 0 : t.phone_number),
                    [u, m] = (0, i.useState)(!1),
                    [p, _] = (0, i.useState)(!1),
                    h = (0, i.useRef)();
                return (0, i.useEffect)((() => {
                    m(d && p)
                }), [d, p]), (0, i.useEffect)((() => {
                    setTimeout((() => {
                        var e;
                        return null === (e = h.current) || void 0 === e ? void 0 : e.element.focus()
                    }), 500)
                }), []), (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(l.Z, {
                        name: "phone"
                    }), (0, a.jsx)(r.Z, {
                        component: "div",
                        uiStyle: "title-l-bold",
                        className: "!mt-16",
                        children: s.Z.t("patient_mobile.root.account.new.phone_number_step.input_label")
                    }), (0, a.jsx)(o.Z, {
                        className: "!mt-16 !mb-0",
                        ref: h,
                        id: "phone_number",
                        field: "phone_number",
                        label: "",
                        type: "tel",
                        autoComplete: "tel",
                        placeholder: s.Z.t("patient_mobile.root.account.new.phone_number_step.input_placeholder"),
                        required: !0,
                        onBlur: () => _(!0),
                        hint: (0, a.jsxs)(a.Fragment, {
                            children: [!c && (0, a.jsx)(r.Z, {
                                component: "div",
                                uiStyle: "body-xs-regular",
                                color: "neutral-090",
                                className: "!mt-8",
                                children: s.Z.t("patient_mobile.root.account.new.phone_number_step.hint")
                            }), u && (0, a.jsx)(r.Z, {
                                component: "div",
                                uiStyle: "body-xs-regular",
                                color: "error-090",
                                className: "!mt-8",
                                children: s.Z.t("patient_mobile.root.account.new.phone_number_step.format_error")
                            })]
                        })
                    })]
                })
            }
        },
        325391: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n(785893),
                i = n(845126),
                s = n(453040);
            const o = e => {
                let {
                    name: t,
                    label: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex items-center",
                    children: [(0, a.jsx)("div", {
                        className: "dl-authentication-step-icon-container rounded-lg items-center justify-center flex",
                        children: (0, a.jsx)(i.Z, {
                            name: t,
                            size: "xsmall",
                            color: "primary-110"
                        })
                    }), n && (0, a.jsx)(s.Z, {
                        component: "div",
                        uiStyle: "body-s-regular",
                        color: "neutral-090",
                        className: "ml-16",
                        children: n
                    })]
                })
            }
        },
        992129: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var a = n(785893),
                i = n(445884),
                s = n(545763),
                o = n(123672);
            const r = e => {
                let {
                    buttonText: t,
                    currentStep: n,
                    disabled: r,
                    hideProgress: l = !1,
                    onNextTap: c,
                    totalStep: d
                } = e;
                const u = !l && n > 0 && d > 0;
                return (0, a.jsxs)("div", {
                    className: "flex flex-col items-stretch mt-24",
                    children: [u && (0, a.jsx)(o.Z, {
                        className: "mb-16",
                        currentStep: n,
                        totalStep: d
                    }), (0, a.jsx)(s.Z, {
                        onClick: c,
                        disabled: r,
                        type: "submit",
                        children: t || i.Z.t("common.actions.continue")
                    })]
                })
            }
        },
        895955: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var a = n(785893),
                i = n(445884),
                s = n(169339),
                o = n(383915),
                r = n(968461),
                l = n(545763),
                c = n(516590),
                d = n(294184),
                u = n.n(d),
                m = n(184481),
                p = n(5212);
            const _ = {
                    title: {
                        signIn: {
                            email: "patient_mobile.root.account.new.username_used_modal.sign_in.email.title",
                            phone: "patient_mobile.root.account.new.username_used_modal.sign_in.phone.title"
                        },
                        signUp: {
                            email: "patient_mobile.root.account.new.username_used_modal.sign_up.email.title",
                            phone: "patient_mobile.root.account.new.username_used_modal.sign_up.phone.title"
                        }
                    },
                    bodyHtml: {
                        signIn: {
                            email: "patient_mobile.root.account.new.username_used_modal.sign_in.email.body_html",
                            phone: "patient_mobile.root.account.new.username_used_modal.sign_in.phone.body_html"
                        },
                        signUp: {
                            email: "patient_mobile.root.account.new.username_used_modal.sign_up.email.body_html",
                            phone: "patient_mobile.root.account.new.username_used_modal.sign_up.phone.body_html"
                        }
                    },
                    ctaLogin: {
                        signIn: {
                            email: "patient_mobile.root.account.new.username_used_modal.sign_in.email.cta_login",
                            phone: "patient_mobile.root.account.new.username_used_modal.sign_in.phone.cta_login"
                        },
                        signUp: {
                            email: "patient_mobile.root.account.new.username_used_modal.sign_up.email.cta_login",
                            phone: "patient_mobile.root.account.new.username_used_modal.sign_up.phone.cta_login"
                        }
                    },
                    ctaChange: {
                        email: "patient_mobile.root.account.new.username_used_modal.email.cta_change",
                        phone: "patient_mobile.root.account.new.username_used_modal.phone.cta_change"
                    }
                },
                h = e => {
                    let {
                        onModalSubmit: t,
                        usernameType: n = "email",
                        isModalVisible: d,
                        onModalDismiss: h,
                        username: g,
                        reason: b
                    } = e;
                    const v = (e => "unknown_username" === e ? "signIn" : "signUp")(b),
                        x = () => {
                            const e = `patient_modify_username_due_to_${b}`;
                            (0, c.ZP)({
                                name: e,
                                details: {
                                    kind: n
                                }
                            }, {
                                schema: "patient"
                            }), null === h || void 0 === h || h()
                        };
                    (0, m.useEffect)((() => {
                        d && (0, c.ZP)({
                            name: `patient_show_modal_${b}`,
                            details: {
                                kind: n
                            }
                        }, {
                            schema: "patient"
                        })
                    }), [d, b, n]);
                    const f = (0, p.Zz)();
                    return (0, a.jsxs)(s.Z, {
                        size: "medium",
                        show: d,
                        isDrawerOnMobile: !1,
                        onHide: x,
                        withCloseIcon: !1,
                        title: i.Z.t(_.title[v][n]),
                        children: [(0, a.jsx)(o.Z, {
                            isDrawerOnMobile: !1,
                            className: "text-center",
                            children: i.Z.t(_.bodyHtml[v][n], {
                                username: g
                            })
                        }), (0, a.jsxs)(r.Z, {
                            className: u()("flex", {
                                "flex-row-reverse !justify-start": f
                            }),
                            children: [(0, a.jsx)(l.Z, {
                                onClick: t,
                                trackingId: `patient_change_flow_due_to_${b}`,
                                trackingDetails: {
                                    kind: n
                                },
                                children: i.Z.t(_.ctaLogin[v][n])
                            }), (0, a.jsx)(l.Z, {
                                className: u()("!mt-16", {
                                    "mt-0 !mr-16": f
                                }),
                                uiStyle: "outlined",
                                onClick: x,
                                children: i.Z.t(_.ctaChange[n])
                            })]
                        })]
                    })
                }
        },
        617999: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var a = n(785893),
                i = n(445884),
                s = n(5212),
                o = n(990626),
                r = n(294184),
                l = n.n(r);
            n(305849);
            const c = e => {
                let {
                    onClick: t,
                    uiStyle: n = "white"
                } = e;
                return (0, a.jsx)("div", {
                    onClick: t,
                    className: l()("logo-doctolib", {
                        "logo-doctolib-pro": (0, s._y)(),
                        "logo-doctolib-beta": (0, o.LA)("beta_version"),
                        [`logo-doctolib-${n}`]: n
                    }),
                    alt: i.Z.t("common.home")
                })
            }
        },
        989231: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => r,
                g: () => o
            });
            var a = n(184481),
                i = n(174976),
                s = n(239417);
            const o = () => {
                    const e = (0, a.useContext)(s._O);
                    return (0, i.useMutation)((t => e.post("/account/passwords", {
                        body: t
                    })))
                },
                r = e => {
                    const t = (0, a.useContext)(s._O);
                    return (0, i.useMutation)((n => t.put(`/account/passwords/${e}.json`, {
                        body: n
                    })))
                }
        },
        93147: (e, t, n) => {
            "use strict";
            var a;
            n.d(t, {
                    d: () => a
                }),
                function(e) {
                    e.Male = "male", e.Female = "female", e.Indeterminate = "indeterminate", e.Diverse = "diverse"
                }(a || (a = {}))
        },
        216852: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var a = n(785893),
                i = n(184481),
                s = n(24553),
                o = n(445884),
                r = n(580163),
                l = n(712722),
                c = n(955178);
            const d = () => {
                const e = (0, s.useNavigate)(),
                    {
                        search: t,
                        pathname: n,
                        state: d
                    } = (0, s.useLocation)(),
                    u = (0, r.ZP)(),
                    m = t.includes("too_many_tries"),
                    p = n.substring(n.lastIndexOf("/") + 1),
                    [_] = (0, s.useSearchParams)(),
                    h = _.get("redirection");
                return (0, i.useEffect)((() => {
                    m && u({
                        title: o.Z.t("patient_common.root.unified_account.lock_my_app.pin_page.hello.error_pin_message"),
                        message: o.Z.t("patient_common.root.unified_account.lock_my_app.pin_page.hello.max_fail_attemps_message"),
                        uiStyle: "info"
                    })
                }), []), (0, a.jsx)(l.Z, {
                    children: (0, a.jsx)(c.Z, {
                        onBack: () => e(-1),
                        currentStepPath: p,
                        username: null === d || void 0 === d ? void 0 : d.username,
                        redirection: h,
                        isPatientRequestAnonymous: !0
                    })
                })
            }
        },
        720113: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n(184481),
                i = n(239417),
                s = n(174976);
            const o = () => {
                const {
                    isLoading: e,
                    data: t,
                    refetch: n
                } = (() => {
                    const e = (0, a.useContext)(i._O);
                    return (0, s.useQuery)(["patient_request", "patient_app", "patient_eligible"], (() => e.get("/anonymous/patient_request.json").then((e => e.bodyData)).then((e => {
                        return {
                            eligible: (t = e).eligible,
                            phoneNumber: t.phone_number,
                            email: t.email,
                            firstName: t.first_name,
                            lastName: t.last_name,
                            phoneMismatch: t.phone_mismatch,
                            emailMismatch: t.email_mismatch
                        };
                        var t
                    }))), {
                        staleTime: 3e5
                    })
                })();
                return {
                    eligible: null === t || void 0 === t ? void 0 : t.eligible,
                    phoneNumber: null === t || void 0 === t ? void 0 : t.phoneNumber,
                    email: null === t || void 0 === t ? void 0 : t.email,
                    firstName: null === t || void 0 === t ? void 0 : t.firstName,
                    lastName: null === t || void 0 === t ? void 0 : t.lastName,
                    phoneMismatch: null === t || void 0 === t ? void 0 : t.phoneMismatch,
                    emailMismatch: null === t || void 0 === t ? void 0 : t.emailMismatch,
                    refetch: n,
                    isLoading: e
                }
            }
        },
        397745: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => i
            });
            var a = n(5212);
            const i = () => !(0, a.Zz)() || (0, a.dm)()
        },
        320002: (e, t, n) => {
            "use strict";
            n.d(t, {
                gL: () => m,
                gd: () => u,
                uK: () => p
            });
            var a = n(184481),
                i = n(174976),
                s = n(990626),
                o = n(5212),
                r = n(800274),
                l = n(261089),
                c = n(239417);
            const d = (e, t) => {
                    const n = ["patient_app", "appointment_requests", "entries", e];
                    return t && n.push(t), n
                },
                u = () => {
                    const e = (0, a.useContext)(c._O),
                        t = (0, r.ZP)() && (0, o.Gl)(),
                        n = Boolean(t && (0, s.cr)("patient_appointment_requests"));
                    return (0, i.useQuery)(d("unseen_count"), (() => e.get("/patient_app/appointment_request/entries/unseen_count").then((e => e.bodyData.count))), {
                        enabled: n,
                        placeholderData: 0,
                        staleTime: s.ZP.APPOINTMENT_REQUESTS_STALE_TIME_PATIENT,
                        cacheTime: s.ZP.APPOINTMENT_REQUESTS_STALE_TIME_PATIENT,
                        refetchInterval: s.ZP.APPOINTMENT_REQUESTS_STALE_TIME_PATIENT,
                        refetchOnWindowFocus: !0
                    })
                },
                m = () => {
                    const e = (0, a.useContext)(c._O),
                        t = (0, i.useQueryClient)();
                    return (0, i.useMutation)((t => e.put("/patient_app/appointment_request/entries/mark_as_seen", {
                        body: {
                            appointment_id: t
                        }
                    })), {
                        onError: e => window.crashReporter.captureException(e),
                        onSuccess: () => t.invalidateQueries(d("unseen_count"))
                    })
                },
                p = e => {
                    const t = (0, a.useContext)(c._O),
                        n = (0, i.useQueryClient)();
                    return (0, i.useMutation)((e => t.put(`/patient_app/appointment_request/entries/${e}/send_response_to_practitioner`)), {
                        onError: e => window.crashReporter.captureException(e),
                        onSuccess: () => {
                            n.invalidateQueries(d("unseen_count")), n.invalidateQueries(["account", "appointments"]), n.invalidateQueries((0, l.IU)(e))
                        }
                    })
                }
        },
        243540: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var a = n(184481),
                i = n(239417),
                s = n(174976),
                o = n(990626),
                r = n(800274);
            const l = () => {
                const {
                    data: e,
                    refetch: t
                } = (() => {
                    const e = (0, a.useContext)(i._O),
                        t = (0, r.ZP)();
                    return (0, s.useQuery)(["patient_requests", "patient_app", "unseen_requests_count"], (() => e.get("/patient_requests/patient_app/unseen_requests_count").then((e => e.bodyData.count))), {
                        enabled: (0, o.LA)("patient_request") && "patient" === (null === t || void 0 === t ? void 0 : t.kind),
                        placeholderData: 0,
                        refetchInterval: o.ZP.UNSEEN_EVENTS_POLLING_INTERVAL,
                        refetchIntervalInBackground: !0,
                        refetchOnWindowFocus: "always"
                    })
                })();
                return {
                    count: e || 0,
                    refetch: t
                }
            }
        },
        488170: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qd: () => v,
                ZP: () => x
            });
            var a = n(785893),
                i = n(184481),
                s = n(45697),
                o = n.n(s),
                r = n(294184),
                l = n.n(r),
                c = n(957557),
                d = n.n(c),
                u = n(907287),
                m = n.n(u),
                p = n(453040),
                _ = n(845126);
            n(540810);
            const h = (0, i.createContext)({
                    isAccordionItemOpen: e => !1,
                    openAccordionItem: e => {},
                    closeAccordionItem: e => {}
                }),
                g = e => {
                    let {
                        children: t,
                        allowMultipleExpand: n = !1,
                        initialItem: s,
                        initialItems: o = []
                    } = e;
                    const r = s ? [s] : o,
                        l = m()(r, r.map((() => !0))),
                        [c, u] = (0, i.useState)(l),
                        p = (0, i.useCallback)((e => !!c[e]), [c]),
                        _ = (0, i.useCallback)((e => {
                            u(n ? t => ({ ...t,
                                [e]: !0
                            }) : {
                                [e]: !0
                            })
                        }), [n]),
                        g = (0, i.useCallback)((e => u((t => d()(t, [e])))), []),
                        b = (0, i.useMemo)((() => ({
                            openItems: c,
                            isAccordionItemOpen: p,
                            openAccordionItem: _,
                            closeAccordionItem: g
                        })), [c, p, _, g]);
                    return (0, a.jsx)(h.Provider, {
                        value: b,
                        children: t
                    })
                },
                b = (0, i.forwardRef)(((e, t) => {
                    let {
                        className: n,
                        headerNode: s,
                        title: o,
                        component: r,
                        children: c,
                        isOpen: d,
                        open: u,
                        close: m,
                        titleProps: h,
                        arrowPosition: g = "left",
                        ...b
                    } = e;
                    const v = (0, i.useId)(),
                        x = `${v}button`,
                        f = `${v}content`;
                    return (0, i.useImperativeHandle)(t, (() => ({
                        close: m
                    }))), (0, a.jsxs)("div", {
                        className: l()("dl-accordion-item", n, {
                            "dl-accordion-item-opened": d
                        }),
                        "data-walkme": b.dataWalkme,
                        "data-design-system": "oxygen",
                        children: [(0, a.jsxs)("div", {
                            className: "dl-flex-row",
                            children: [(0, a.jsxs)("button", {
                                id: x,
                                type: "button",
                                className: `dl-accordion-item-title ${s&&"dl-flex-grow-0"}`,
                                name: o,
                                onClick: () => d ? m() : u(),
                                "aria-expanded": d,
                                "aria-controls": f,
                                children: ["left" === g && (0, a.jsx)(_.Z, {
                                    className: "dl-accordion-item-title-icon",
                                    name: "regular/chevron-right"
                                }), (0, a.jsx)(p.Z, {
                                    uiStyle: b.titleUiStyle ? b.titleUiStyle : "title-s-bold",
                                    className: b.titleClassName ? b.titleClassName : "dl-accordion-item-title-text",
                                    component: r,
                                    ...h,
                                    children: o
                                }), "right" === g && (0, a.jsx)(_.Z, {
                                    className: "dl-accordion-item-title-icon dl-margin-l",
                                    name: "regular/chevron-right"
                                })]
                            }), s && (0, a.jsx)("div", {
                                className: "right" === g ? "dl-margin-l-4" : "dl-margin-l",
                                children: s
                            })]
                        }), d && (0, a.jsx)("div", {
                            className: "dl-accordion-item-content",
                            id: f,
                            role: "region",
                            "aria-labelledby": x,
                            children: c
                        })]
                    })
                })),
                v = (0, i.forwardRef)(((e, t) => {
                    let {
                        title: n,
                        ...s
                    } = e;
                    const {
                        isAccordionItemOpen: o,
                        openAccordionItem: r,
                        closeAccordionItem: l
                    } = (0, i.useContext)(h);
                    return (0, a.jsx)(b, {
                        title: n,
                        ref: t,
                        open: () => r(n),
                        close: () => l(n),
                        isOpen: o(n),
                        ...s
                    })
                }));
            v.propTypes = {
                title: o().string.isRequired,
                children: o().node,
                headerNode: o().node,
                arrowPosition: o().oneOf(["left", "right"])
            }, g.propTypes = {
                allowMultipleExpand: o().bool,
                initialItem: o().string,
                initialItems: o().arrayOf(o().string)
            };
            const x = g
        },
        179522: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var a = n(785893),
                i = n(184481),
                s = n.n(i),
                o = n(45697),
                r = n.n(o),
                l = n(294184),
                c = n.n(l),
                d = n(468644),
                u = n(642979),
                m = n(619595),
                p = n(915488),
                _ = n(348187),
                h = n(545763),
                g = n(201477),
                b = n(845126),
                v = n(335963),
                x = n(924722),
                f = n(453040),
                N = n(298449);
            n(37571);
            const Z = e => {
                    let {
                        children: t,
                        selected: n = !1,
                        chevron: o = !1,
                        className: r = "",
                        component: l = "li",
                        onClick: m,
                        onTap: p,
                        rounded: _ = !1,
                        border: h = "default",
                        disabled: g = !1,
                        size: v = "small",
                        highlighted: x,
                        ...f
                    } = e;
                    const N = (m || p || "label" === l) && !g,
                        Z = "boolean" === typeof(y = _) ? y ? "default" : "none" : y;
                    var y;
                    const E = "all" === Z ? "all" : "boolean" === typeof(w = h) ? w ? "default" : "none" : w;
                    var w;
                    const S = `dl-list-item-${v}`,
                        T = {
                            ["default" === E ? "dl-list-item-border" : `dl-list-item-border-${E}`]: "none" !== E,
                            ["default" === Z ? "dl-list-item-rounded" : `dl-list-item-rounded-${Z}`]: "none" !== Z,
                            "dl-list-item-disabled": g,
                            "dl-margin-b-8": "all" === Z,
                            "dl-list-item-highlighted": x
                        },
                        j = N ? {
                            component: l,
                            tabIndex: 0,
                            role: "button",
                            className: c()(r, "dl-list-item", S, "dl-list-item-tappable", { ...T,
                                "dl-list-item-hover": N
                            }),
                            onClick: m,
                            ...!f.href && {
                                onTap: p
                            }
                        } : {
                            className: c()(r, "dl-list-item", S, { ...T,
                                "dl-list-item-hover": f.href || f.to
                            })
                        },
                        P = f.href ? "a" : f.to ? u.Z : N ? d.Z : l,
                        I = s().Children.map(t, (e => e && (0, i.cloneElement)(e, {
                            disabled: g
                        })));
                    return (0, a.jsx)(P, { ...j,
                        ...f,
                        "aria-disabled": g,
                        "data-design-system": "oxygen",
                        children: (0, a.jsxs)(a.Fragment, {
                            children: [I, n && (0, a.jsx)(b.Z, {
                                className: "dl-list-item-selected-icon",
                                name: "solid/check",
                                color: g ? "neutral-040" : "primary-110"
                            }), o && (0, a.jsx)(b.Z, {
                                className: "dl-list-item-chevron",
                                name: "chevron-right",
                                color: g ? "neutral-040" : "neutral-150"
                            })]
                        })
                    })
                },
                y = e => {
                    let {
                        className: t,
                        children: n,
                        onClick: i,
                        disabled: s = !1,
                        align: o = "center",
                        ...r
                    } = e;
                    return (0, a.jsx)(b.Z, {
                        size: "xsmall",
                        className: c()(t, {
                            "dl-list-item-icon-align-top": "top" === o
                        }, {
                            "dl-list-item-icon": !r.backgroundColor
                        }),
                        onClick: e => {
                            e.preventDefault(), null === i || void 0 === i || i(e)
                        },
                        ...r,
                        color: s ? "neutral-040" : r.color,
                        children: n
                    })
                };
            Z.Action = e => {
                let {
                    children: t,
                    className: n,
                    ...i
                } = e;
                return (0, a.jsx)(h.Z, {
                    uiStyle: "small-primary",
                    className: c()("dl-list-item-action", n),
                    ...i,
                    children: t
                })
            }, Z.Avatar = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)(p.ZP, {
                    size: "small",
                    className: c()("dl-list-item-avatar", t),
                    ...n
                })
            }, Z.Content = e => {
                let {
                    className: t,
                    children: n,
                    disabled: o = !1,
                    ...r
                } = e;
                const l = s().Children.map(n, (e => e && (0, i.cloneElement)(e, {
                    disabled: o
                })));
                return (0, a.jsx)("div", {
                    className: c()("dl-list-item-content", t),
                    ...r,
                    children: l
                })
            }, Z.Title = e => {
                let {
                    className: t,
                    children: n,
                    disabled: i = !1,
                    ...s
                } = e;
                return (0, a.jsx)(f.Z, {
                    uiStyle: "body-s-bold",
                    className: c()("dl-list-item-title", t),
                    ...s,
                    color: i ? "neutral-040" : s.color,
                    children: n
                })
            }, Z.Description = e => {
                let {
                    className: t,
                    disabled: n = !1,
                    children: i,
                    ...s
                } = e;
                return (0, a.jsx)(f.Z, {
                    uiStyle: "body-s-regular",
                    className: c()("dl-list-item-description", t),
                    color: n ? "neutral-040" : "neutral-130",
                    ...s,
                    children: i
                })
            }, Z.Info = e => {
                let {
                    className: t,
                    children: n,
                    ...i
                } = e;
                return (0, a.jsx)(f.Z, {
                    uiStyle: "body-xs-regular",
                    className: c()("dl-list-item-info", t),
                    color: "neutral-110",
                    ...i,
                    children: n
                })
            }, Z.Checkbox = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)(g.Z, {
                    className: c()("dl-list-item-checkbox", t),
                    ...n
                })
            }, Z.RadioButton = e => {
                let { ...t
                } = e;
                return (0, a.jsx)("div", {
                    className: "dl-list-item-radio-button",
                    children: (0, a.jsx)(x.Z, { ...t
                    })
                })
            }, Z.Toggle = e => {
                let {
                    labelClassName: t,
                    ...n
                } = e;
                return (0, a.jsx)(N.Z, {
                    labelClassName: c()("dl-list-item-toggle", t),
                    ...n
                })
            }, Z.Badge = e => {
                let {
                    className: t,
                    children: n,
                    disabled: i = !1,
                    uiStyle: s,
                    ...o
                } = e;
                return (0, a.jsx)(_.Z, {
                    className: c()("dl-list-item-badge", t),
                    uiStyle: i ? "neutral" : s,
                    ...o,
                    children: n
                })
            }, Z.Icon = y, Z.IconButton = e => {
                let {
                    className: t,
                    onClick: n,
                    ...i
                } = e;
                return (0, a.jsx)(m.ZP, {
                    onClick: e => {
                        e.preventDefault(), null === n || void 0 === n || n(e)
                    },
                    className: c()("dl-list-item-icon", t),
                    ...i
                })
            }, Z.Pill = e => {
                let {
                    className: t,
                    size: n = "small",
                    ...i
                } = e;
                return (0, a.jsx)(v.Z, {
                    size: n,
                    className: c()("dl-list-item-pill", t),
                    ...i
                })
            }, Z.Illustration = e => {
                let {
                    className: t,
                    disabled: n = !1,
                    illustration: i
                } = e;
                return (0, a.jsx)(i, {
                    className: c()("dl-list-item-illustration", t, {
                        "dl-list-item-illustration-disabled": n
                    })
                })
            }, Z.DEPRECATEDChildren = e => {
                let {
                    children: t
                } = e;
                return t
            }, y.propTypes = {
                align: r().oneOf(["center", "top"]),
                className: r().string,
                children: r().element,
                onClick: r().func,
                disabled: r().bool
            };
            const E = Z
        },
        123672: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n(785893),
                i = n(294184),
                s = n.n(i);
            n(358824);
            const o = e => {
                let {
                    currentStep: t,
                    totalStep: n,
                    className: i
                } = e;
                return (0, a.jsx)("progress", {
                    className: s()("dl-progress dl-full-width", i),
                    id: "stepper",
                    value: t,
                    max: n,
                    "data-design-system": "oxygen"
                })
            }
        },
        432613: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ct: () => s.Z,
                JO: () => l.Z,
                iz: () => o.Z,
                xv: () => r.Z
            });
            var a = n(785893),
                i = n(620745),
                s = (n(279557), n(400958), n(348187)),
                o = n(755506),
                r = (n(488170), n(453040)),
                l = (n(827955), n(999722), n(201477), n(241096), n(770466), n(938343), n(178287), n(540663), n(88941), n(596365), n(741065), n(924722), n(123672), n(845126));
            ((e, t, n) => {
                class s extends HTMLElement {
                    connectedCallback() {
                        const t = { ...this.dataset
                        };
                        this.root = (0, i.s)(this), this.root.render((0, a.jsx)(e, { ...t,
                            children: this.innerText
                        }))
                    }
                    disconnectedCallback() {
                        var e;
                        null === (e = this.root) || void 0 === e || e.unmount()
                    }
                }
                Object.defineProperty(s, "name", {
                    value: n
                }), window.customElements.get(t) || window.customElements.define(t, s)
            })(s.Z, "doctolib-badge", "DoctolibBadge")
        },
        88941: (e, t, n) => {
            "use strict";
            n(785893), n(201477), n(938343)
        },
        540663: (e, t, n) => {
            "use strict";
            n(785893), n(201477), n(178287)
        },
        504815: (e, t, n) => {
            var a = n(184481);
            const i = a.forwardRef((function(e, t) {
                return a.createElement("svg", { ...e,
                    ref: t
                }, [a.createElement("path", {
                    d: "M19 16.42c0 .32-.26.58-.58.58H12V7h6.42c.32 0 .58.26.58.58v8.84zM8 17v-4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4H1.76a.76.76 0 0 1-.76-.76V1.76c0-.42.34-.76.76-.76h8.47c.42 0 .76.34.76.76V17H8zM18.42 6H12V1.76A1.76 1.76 0 0 0 10.24 0H1.76A1.76 1.76 0 0 0 0 1.76v14.48C0 17.212.788 18 1.76 18h16.66A1.58 1.58 0 0 0 20 16.42V7.58A1.58 1.58 0 0 0 18.42 6z",
                    key: 0
                }), a.createElement("path", {
                    d: "M3.39 5h1.22a.39.39 0 0 1 .39.39v2.23a.39.39 0 0 1-.39.39H3.39A.39.39 0 0 1 3 7.62V5.39A.39.39 0 0 1 3.39 5m4 0h1.22a.39.39 0 0 1 .39.39v2.23a.39.39 0 0 1-.39.39H7.39A.39.39 0 0 1 7 7.62V5.39A.39.39 0 0 1 7.39 5m9.11 5H16v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V11h.5a.5.5 0 0 0 0-1",
                    key: 1
                })])
            }));
            i.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20"
            }, e.exports = i, i.default = i
        },
        123246: (e, t, n) => {
            var a = n(184481);
            const i = a.forwardRef((function(e, t) {
                return a.createElement("svg", { ...e,
                    ref: t
                }, a.createElement("path", {
                    d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
                }))
            }));
            i.defaultProps = {
                fill: "currentColor",
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = i, i.default = i
        },
        7041: () => {
            "use strict"
        },
        305849: () => {},
        37571: () => {
            "use strict"
        },
        358824: () => {
            "use strict"
        },
        400958: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            const a = n(903997).Z
        }
    }
]);
//# sourceMappingURL=../89654-8b8fdfb1e09f472ca6bc.js.map