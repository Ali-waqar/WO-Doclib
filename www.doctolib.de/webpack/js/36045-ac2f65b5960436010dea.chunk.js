"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [36045], {
        553152: (e, t, n) => {
            n.d(t, {
                c: () => a.SearchContext
            });
            n(184481), n(24553), n(112985), n(78599), n(437124), n(445884), n(103755), n(608575);
            var a = n(304083);
            n(785893)
        },
        103755: (e, t, n) => {
            n(478718);
            const a = ["availabilities", "regulation_sector", "ref_visit_motive_id", "insurance_sector", "language", "telehealth", "allow_new_patients"],
                i = ["ref_visit_motive_ids[]", "single_shot_appointment", "start_date"]
        },
        169994: (e, t, n) => {
            n(8955)
        },
        143318: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var a = n(189734),
                i = n.n(a),
                o = n(121804),
                s = n.n(o);
            const r = e => `-${s()(e.toLowerCase())}-`,
                l = e => {
                    let {
                        input: t,
                        output: {
                            bodyData: {
                                profiles: n,
                                specialities: a,
                                organization_statuses: o
                            }
                        }
                    } = e;
                    return a.map((e => ({ ...e,
                        is_speciality: !0
                    }))).concat(o.map((e => ({ ...e,
                        is_speciality: !0
                    })))).slice(0, 5).concat(i()(n, (e => {
                        let {
                            main_name: n
                        } = e;
                        return n && r(n).includes(r(t)) ? -1 : 1
                    }), "owner_type", (e => {
                        let {
                            kind: t
                        } = e;
                        return s()(t)
                    }), (e => {
                        let {
                            name: t
                        } = e;
                        return s()(t)
                    })))
                }
        },
        646975: (e, t, n) => {
            n.d(t, {
                U: () => k,
                Z: () => C
            });
            var a = n(184481),
                i = n(445884),
                o = n(15377),
                s = n(629535),
                r = n(951787),
                l = n(165577),
                c = n(872486),
                d = n(471667),
                p = n(528846),
                m = n(883764),
                u = n(118974),
                h = n.n(u),
                _ = n(294184),
                g = n.n(_),
                x = n(619423),
                v = n(573692),
                Z = n.n(v),
                y = n(357960),
                j = n.n(y),
                f = n(143318),
                D = (n(217106), n(785893));

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const w = e => {
                    let {
                        item: t,
                        query: n
                    } = e;
                    return (0, D.jsx)("div", {
                        className: "searchbar-result-speciality",
                        children: (0, D.jsx)(d.Z, {
                            query: n,
                            text: t.name
                        })
                    })
                },
                S = e => {
                    let {
                        item: t,
                        query: n
                    } = e;
                    return (0, D.jsxs)("div", {
                        className: "searchbar-result-profile",
                        children: [(0, D.jsx)("div", {
                            className: "searchbar-result-profile-avatar",
                            children: (0, D.jsx)(p.Z, {
                                rounded: !0,
                                src: (0, m.Z)(t.cloudinary_public_id, "w_40,h_40,c_fill,g_face")
                            })
                        }), (0, D.jsxs)("div", {
                            className: "searchbar-result-profile-details",
                            children: [(0, D.jsx)(d.Z, {
                                query: n,
                                text: t.name
                            }), (0, D.jsx)("div", {
                                className: "searchbar-result-profile-subtitle",
                                children: (0, D.jsx)(d.Z, {
                                    query: n,
                                    text: [t.kind, t.city].join(" - ")
                                })
                            })]
                        })]
                    })
                },
                N = (0, a.forwardRef)(((e, t) => (0, D.jsx)(c.Z, {
                    ref: t,
                    className: e.item.is_speciality ? null : "searchbar-result-profile-wrapper",
                    ...e,
                    children: e.item.is_speciality ? (0, D.jsx)(w, {
                        item: e.item,
                        query: e.query
                    }) : (0, D.jsx)(S, {
                        item: e.item,
                        query: e.query
                    })
                }))),
                I = e => {
                    let {
                        name: t
                    } = e;
                    return t
                };
            class k extends a.PureComponent {
                constructor() {
                    super(...arguments), b(this, "state", {
                        suggestionOpened: !1,
                        activeItem: void 0
                    }), b(this, "setSuggestionOpened", (e => this.setState({
                        suggestionOpened: e
                    }))), b(this, "onFirstSuggestionChange", (e => {
                        const {
                            onSelect: t,
                            setSpeciality: n
                        } = this.props;
                        e && (e.is_speciality ? t(e, !0) : n(null))
                    }))
                }
                render() {
                    const {
                        suggestionOpened: e,
                        activeItem: t
                    } = this.state, {
                        value: n,
                        onChange: a,
                        onSelect: s,
                        onFocus: c,
                        focus: d,
                        onBlur: p,
                        dataFetcher: m,
                        otherInputFocused: u,
                        placeholder: _
                    } = this.props, x = g()("searchbar-query-input", this.props.className, {
                        "searchbar-query-input-opened": e,
                        "searchbar-query-input-focused": d
                    }), v = "search-query-input-results-container";
                    return (0, D.jsx)("div", {
                        className: "searchbar-query",
                        children: (0, D.jsx)(r.Z, {
                            id: v,
                            dataFetcher: m,
                            onChange: a,
                            onSelect: s,
                            onActive: e => this.setState({
                                activeItem: e
                            }),
                            value: n,
                            valueSelector: I,
                            itemComponent: N,
                            onSuggestionToggle: this.setSuggestionOpened,
                            minAutocomplete: 1,
                            stopOnEmptyResults: !1,
                            onFirstSuggestionChange: this.onFirstSuggestionChange,
                            children: (0, D.jsx)(l.Z, {
                                className: x,
                                placeholder: _ || i.Z.t("patient_common.root.searchbar.query_placeholder"),
                                icon: (0, D.jsx)(h(), {}),
                                onFocus: c,
                                onBlur: p,
                                focus: d,
                                owns: v,
                                suggestionOpened: e,
                                activeItem: t,
                                onKeyDown: e => {
                                    e.keyCode === o.Mf && t && (a(I(t)), s(t))
                                },
                                otherInputFocused: u
                            })
                        })
                    })
                }
            }
            const F = new(Z())({
                    max: 500
                }),
                C = e => {
                    let {
                        onQueryInputSuccess: t,
                        setQueryLoading: n,
                        ...a
                    } = e;
                    return (0, D.jsx)(k, { ...a,
                        dataFetcher: e => {
                            n(!0);
                            const t = (a = e, `${"searchbar.autocomplete"}-${JSON.stringify(j()(a))}`);
                            var a;
                            const i = F.get(t);
                            return i ? Promise.resolve(i) : x.Z.search((0, s.Z)(e)).then((t => (0, f.Z)({
                                input: e,
                                output: t
                            }))).then((e => {
                                n(!1);
                                return F.set(t, e, {
                                    cacheOptions: {
                                        ttl: 3e5
                                    }
                                }), e
                            }))
                        }
                    })
                }
        },
        998735: (e, t, n) => {
            n.d(t, {
                fG: () => o
            });
            var a = n(184481);
            n(977954), n(943174), n(823493), n(710270), n(451421), n(129303), n(800274), n(169994), n(763801), n(785893);
            const i = (0, a.createContext)({}),
                o = () => {
                    const {
                        fetchUpcomingAppointments: e
                    } = (0, a.useContext)(i);
                    return (0, a.useCallback)(e, [])
                }
        },
        112985: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var a = n(24553),
                i = n(78599);
            const o = () => {
                const e = (0, a.useLocation)();
                return (0, i.e3)(e.search)
            }
        },
        65502: (e, t, n) => {
            n.d(t, {
                n: () => i
            });
            var a = n(129303);
            const i = () => {
                const {
                    platforms: e = {}
                } = window;
                return e.reactNative ? a.ZP.call({
                    method: "getCurrentPosition"
                }) : window.navigator.geolocation ? new Promise(((e, t) => {
                    window.navigator.geolocation.getCurrentPosition(e, t)
                })) : Promise.reject(new Error("Geolocation not supported"))
            }
        },
        690747: (e, t, n) => {
            n.d(t, {
                K: () => o
            });
            var a = n(785893),
                i = n(179522);
            const o = e => {
                let {
                    completable: t = !0,
                    completed: n = !1,
                    iconName: o,
                    label: s,
                    description: r,
                    pillLabel: l,
                    onTap: c
                } = e;
                const d = t && !n && l;
                return (0, a.jsxs)(i.Z, {
                    chevron: !0,
                    className: "dl-appointment-preparation-item",
                    border: "between",
                    onTap: c,
                    size: "medium",
                    children: [t && n ? (0, a.jsx)(i.Z.Icon, {
                        align: r ? "top" : "center",
                        color: "success-110",
                        name: "solid/circle-check"
                    }) : (0, a.jsx)(i.Z.Icon, {
                        align: r ? "top" : "center",
                        color: "primary-110",
                        name: o
                    }), (0, a.jsxs)(i.Z.Content, {
                        className: "dl-margin-l-8",
                        children: [(0, a.jsx)(i.Z.Title, {
                            color: "primary-110",
                            uiStyle: "body-s-bold",
                            children: s
                        }), !!r && (0, a.jsx)(i.Z.Description, {
                            children: r
                        })]
                    }), !!d && (0, a.jsx)(i.Z.Pill, {
                        color: "warning-020",
                        label: l
                    })]
                })
            }
        },
        832738: (e, t, n) => {
            n.d(t, {
                ZP: () => F,
                ty: () => N,
                rL: () => I,
                ul: () => k
            });
            var a = n(785893),
                i = n(184481),
                o = n(24553),
                s = n(977954),
                r = n.n(s),
                l = n(951969),
                c = n(904497),
                d = n(857152),
                p = n(990626),
                m = n(445884),
                u = n(690747),
                h = n(5212),
                _ = n(592290),
                g = n(5699),
                x = n(692988);
            const v = e => {
                    let {
                        showDrawer: t,
                        setShowDrawer: n,
                        appointmentId: i,
                        markDeviceAsVerified: o,
                        markDeviceAsVerifiedInstantly: s,
                        supportStandaloneDiagnostic: r,
                        patientId: l
                    } = e;
                    return (0, a.jsx)(_.ZP, {
                        show: t,
                        title: m.Z.t("appointments.telehealth.preparation.title"),
                        position: "right",
                        className: "dl-full-height dl-padding-24",
                        onHide: () => n(!1),
                        children: (0, a.jsxs)(_.Ng, {
                            className: "dl-margin-t-16-between-children",
                            children: [(0, a.jsx)(g.Z, {
                                appointmentId: i,
                                markDeviceAsVerified: o,
                                markDeviceAsVerifiedInstantly: s,
                                supportStandaloneDiagnostic: r,
                                patientId: l
                            }), (0, a.jsx)(x.Z, {})]
                        })
                    })
                },
                Z = e => {
                    var t;
                    let {
                        appointment: n
                    } = e;
                    const s = (0, o.useNavigate)(),
                        [r, l] = (0, i.useState)(!1),
                        {
                            wasDeviceVerified: c,
                            markDeviceAsVerified: d,
                            markDeviceAsVerifiedInstantly: p,
                            supportStandaloneDiagnostic: _
                        } = k({
                            appointment: n
                        });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, h.Zz)() && (0, a.jsx)(v, {
                            showDrawer: r,
                            setShowDrawer: l,
                            appointmentId: n.id,
                            patientId: null === (t = n.patient) || void 0 === t ? void 0 : t.id,
                            markDeviceAsVerified: d,
                            markDeviceAsVerifiedInstantly: p,
                            supportStandaloneDiagnostic: _
                        }), (0, a.jsx)(u.K, {
                            completed: c,
                            iconName: "video",
                            pillLabel: m.Z.t("appointments.appointment_card.preparation_section.items.telehealth.todo"),
                            label: m.Z.t("appointments.telehealth.preparation.title"),
                            onTap: () => (0, h.Zz)() ? l(!0) : s(`/appointments/${n.id}/telehealth_tutorial`)
                        })]
                    })
                };
            var y = n(23838),
                j = n(516590),
                f = n(192772),
                D = n(129303),
                b = n(72281);
            const w = e => {
                    let {
                        appointment: t,
                        children: n
                    } = e;
                    const o = (0, f.ZP)(),
                        [s, r] = (0, i.useState)(!1),
                        l = N();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [n({
                            onTap: e => {
                                e.stopPropagation(), l.reactNative ? l.supportStandaloneDiagnostic ? D.ZP.call({
                                    method: "navigateNative",
                                    params: ["TelehealthDiagnostic", {
                                        appointmentId: t.id
                                    }]
                                }) : r(!0) : o.show(`/appointments/${t.id}/telehealth_diagnostic`)
                            }
                        }), (0, a.jsx)(b.Z, {
                            show: s,
                            onHide: e => {
                                e.stopPropagation(), r(!1)
                            }
                        })]
                    })
                },
                S = e => {
                    let {
                        appointment: t,
                        isAnonymousFunnel: n
                    } = e;
                    const o = { ...(0, i.useContext)(y.Z)
                        },
                        {
                            wasDeviceVerified: s,
                            markDeviceAsVerified: r,
                            markDeviceAsVerifiedInstantly: l
                        } = k({
                            appointment: t
                        });
                    return (0, a.jsx)(w, {
                        appointment: t,
                        children: e => {
                            let {
                                onTap: t
                            } = e;
                            return (0, a.jsx)(u.K, {
                                completed: s,
                                iconName: "video",
                                pillLabel: m.Z.t("appointments.appointment_card.preparation_section.items.telehealth.todo"),
                                label: m.Z.t("appointments.appointment_card.preparation_section.items.telehealth.label"),
                                description: n ? m.Z.t("appointments.appointment_card.preparation_section.items.telehealth.description") : void 0,
                                onTap: e => {
                                    (0, j.ZP)({
                                        name: "patient_clicks_telehealth_diagnostic_appointment_card",
                                        details: o
                                    }, {
                                        schema: "patient"
                                    }), l && r(), t(e)
                                }
                            })
                        }
                    })
                },
                N = () => {
                    const {
                        platforms: {
                            android: e,
                            ios: t,
                            reactNative: n
                        }
                    } = window;
                    return {
                        reactNative: n,
                        supportStandaloneDiagnostic: e && (0, l.vG)("3.2.16") || t && (0, l.vG)("3.2.22")
                    }
                },
                I = e => {
                    let {
                        appointment: t,
                        isAnonymousFunnel: n
                    } = e;
                    const a = r()(t.start_date).isAfter(r()());
                    return [t.telehealth && (a || (0, d.od)(t)), {
                        appointment: t,
                        isAnonymousFunnel: n
                    }]
                },
                k = e => {
                    var t;
                    let {
                        appointment: n
                    } = e;
                    const {
                        tcsDiagnosticsCompleted: a
                    } = null !== (t = (0, o.useLocation)().state) && void 0 !== t ? t : {}, [s, r] = (0, c.Z)(n, "tcs_device_verified"), l = N(), d = Boolean(l.reactNative && l.supportStandaloneDiagnostic);
                    return (0, i.useEffect)((() => {
                        a && r()
                    }), [r, a]), {
                        wasDeviceVerified: s,
                        markDeviceAsVerified: r,
                        markDeviceAsVerifiedInstantly: d,
                        supportStandaloneDiagnostic: l.supportStandaloneDiagnostic
                    }
                },
                F = e => {
                    let {
                        appointment: t,
                        isAnonymousFunnel: n
                    } = e;
                    return (0, p.cr)("new_online_booking_confirmation_page") && !n ? (0, a.jsx)(Z, {
                        appointment: t
                    }) : (0, a.jsx)(S, {
                        appointment: t,
                        isAnonymousFunnel: n
                    })
                }
        },
        5699: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var a = n(785893),
                i = n(453040),
                o = n(784600),
                s = n(545763),
                r = n(590728),
                l = n(129303),
                c = n(445884),
                d = n(451421),
                p = n(184481),
                m = n(5212),
                u = n(72281);
            n(463512);
            const h = e => {
                    let {
                        markDeviceAsVerified: t,
                        appointmentId: n,
                        markDeviceAsVerifiedInstantly: i,
                        supportStandaloneDiagnostic: o,
                        patientId: r
                    } = e;
                    const [m, h] = (0, p.useState)(!1);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(s.Z, {
                            type: "button",
                            uiStyle: "outlined",
                            className: "m-auto",
                            leftIcon: "regular/microphone",
                            trackingId: "patient_clicks_telehealth_diagnostic_appointment_card",
                            trackingDetails: {
                                user_id: r,
                                appointment_id: (0, d.id)(n) || void 0,
                                source: "appointment_view",
                                type: "appointment_list"
                            },
                            onTap: e => {
                                i && t(), (e => {
                                    e.stopPropagation(), o ? l.ZP.call({
                                        method: "navigateNative",
                                        params: ["TelehealthDiagnostic", {
                                            appointmentId: n
                                        }]
                                    }) : h(!0)
                                })(e)
                            },
                            children: [c.Z.t("appointments.telehealth.preparation.first_section"), " "]
                        }), (0, a.jsx)(u.Z, {
                            show: m,
                            onHide: e => {
                                e.stopPropagation(), h(!1)
                            }
                        })]
                    })
                },
                _ = e => {
                    let {
                        appointmentId: t,
                        patientId: n
                    } = e;
                    return (0, a.jsx)(s.Z, {
                        type: "button",
                        uiStyle: "outlined",
                        className: "m-auto",
                        leftIcon: "regular/microphone",
                        href: `/appointments/${t}/telehealth_diagnostic`,
                        trackingId: "patient_clicks_telehealth_diagnostic_appointment_card",
                        trackingDetails: {
                            user_id: n,
                            appointment_id: (0, d.id)(t) || void 0,
                            source: "appointment_view",
                            type: "appointment_list"
                        },
                        children: c.Z.t("appointments.telehealth.preparation.first_section")
                    })
                },
                g = e => {
                    let {
                        appointmentId: t,
                        patientId: n
                    } = e;
                    return (0, a.jsx)(s.Z, {
                        type: "button",
                        uiStyle: "outlined",
                        className: "m-auto",
                        leftIcon: "regular/microphone",
                        to: `/appointments/${t}/telehealth_diagnostic`,
                        trackingId: "patient_clicks_telehealth_diagnostic_appointment_card",
                        trackingDetails: {
                            user_id: n,
                            appointment_id: (0, d.id)(t) || void 0,
                            source: "appointment_view",
                            type: "appointment_list"
                        },
                        children: c.Z.t("appointments.telehealth.preparation.first_section")
                    })
                },
                x = e => {
                    let {
                        markDeviceAsVerified: t,
                        appointmentId: n,
                        markDeviceAsVerifiedInstantly: i,
                        supportStandaloneDiagnostic: o,
                        patientId: s
                    } = e;
                    return (0, m.b$)() ? (0, a.jsx)(h, {
                        markDeviceAsVerified: t,
                        appointmentId: n,
                        markDeviceAsVerifiedInstantly: i,
                        supportStandaloneDiagnostic: o,
                        patientId: s
                    }) : (0, m.Zz)() ? (0, a.jsx)(_, {
                        appointmentId: n,
                        patientId: s
                    }) : (0, a.jsx)(g, {
                        appointmentId: n,
                        patientId: s
                    })
                },
                v = e => {
                    let {
                        markDeviceAsVerified: t,
                        appointmentId: n,
                        markDeviceAsVerifiedInstantly: s,
                        supportStandaloneDiagnostic: l,
                        patientId: d
                    } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(i.Z, {
                            uiStyle: "body-s-bold",
                            children: c.Z.t("appointments.telehealth.preparation.first_section")
                        }), (0, a.jsxs)(o.Z, {
                            className: "dl-margin-b-32",
                            contentClassName: "dl-hardware-checking-card",
                            bgColor: "neutral-010",
                            children: [(0, a.jsxs)("div", {
                                className: "flex dl-flex-grow",
                                children: [(0, a.jsx)("img", {
                                    className: "dl-height-8-unit dl-margin-y-auto",
                                    src: r,
                                    alt: ""
                                }), (0, a.jsx)(i.Z, {
                                    className: "dl-margin-16",
                                    children: "Check your hardware now to ensure the quality of the video consultation."
                                })]
                            }), (0, a.jsx)("div", {
                                className: "dl-flex-grow flex",
                                children: (0, a.jsx)(x, {
                                    markDeviceAsVerified: t,
                                    appointmentId: n,
                                    patientId: d,
                                    markDeviceAsVerifiedInstantly: s,
                                    supportStandaloneDiagnostic: l
                                })
                            })]
                        })]
                    })
                }
        },
        692988: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var a = n(785893),
                i = n(952893),
                o = n(845126),
                s = n(453040),
                r = n(445884);
            const l = e => {
                    let {
                        points: t
                    } = e;
                    return (0, a.jsx)("div", {
                        className: "dl-max-width-360 my-0 mx-auto dl-margin-y-24 dl-margin-t-24-between-children",
                        children: (0, i.Z)(t.map(((e, t) => (0, a.jsxs)("div", {
                            className: "flex dl-align-items-center dl-flex-column dl-text-center",
                            children: [(0, a.jsx)(s.Z, {
                                uiStyle: "title-s-bold",
                                className: "dl-margin-b-8",
                                children: r.Z.t(e.title)
                            }), (0, a.jsx)(s.Z, {
                                children: r.Z.t(e.html)
                            })]
                        }, t))), (0, a.jsx)(o.Z, {
                            name: "angle-double-down",
                            color: "primary-120",
                            backgroundColor: "primary-010",
                            size: "medium",
                            backgroundClassName: "my-0 mx-auto"
                        }))
                    })
                },
                c = () => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.Z, {
                        uiStyle: "body-s-bold",
                        className: "dl-margin-t-16op-32",
                        children: r.Z.t("appointments.telehealth.preparation.second_section")
                    }), (0, a.jsx)(l, {
                        points: [{
                            title: "appointments.telehealth.tutorial.one_title",
                            html: "appointments.telehealth.tutorial.one_html"
                        }, {
                            title: "appointments.telehealth.tutorial.two_title",
                            html: "appointments.telehealth.tutorial.two_html"
                        }, {
                            title: "appointments.telehealth.tutorial.three_title",
                            html: "appointments.telehealth.tutorial.three_html"
                        }]
                    })]
                })
        },
        904497: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var a = n(184481),
                i = n(763801);
            const o = (e, t) => {
                const [n, o] = (0, a.useState)((0, i.nm)(e.id, t));
                return [n, (0, a.useCallback)((() => {
                    (0, i.Gh)(e, t), o(!0)
                }), [])]
            }
        },
        261089: (e, t, n) => {
            n.d(t, {
                Ci: () => l,
                IU: () => s,
                pU: () => r
            });
            var a = n(239417),
                i = n(184481),
                o = n(174976);
            const s = e => ["appointments", e],
                r = e => {
                    let {
                        appointmentId: t
                    } = e;
                    const n = (0, i.useContext)(a._O);
                    return (0, o.useQuery)(s(t), (() => n.get(`/appointments/${t}`).then((e => {
                        let {
                            bodyData: t
                        } = e;
                        return t
                    }))), {
                        enabled: Boolean(t)
                    })
                },
                l = e => {
                    let {
                        query: t,
                        onSuccess: n
                    } = e;
                    const s = (0, i.useContext)(a._O);
                    return (0, o.useQuery)(["account", "appointments", {
                        query: t
                    }], (() => s.get("/account/appointments.json", {
                        query: t
                    }).then((e => {
                        let {
                            bodyData: t
                        } = e;
                        return t
                    }))), {
                        onSuccess: n
                    })
                }
        },
        763801: (e, t, n) => {
            n.d(t, {
                Gh: () => c,
                nm: () => l
            });
            var a = n(8955);
            const i = "appointment-preparation-",
                o = e => `${i}${e.slice(0,30)}`,
                s = e => a.U2(e) || {
                    steps: {}
                },
                r = e => s(o(e)),
                l = (e, t) => {
                    const n = r(e);
                    return t in n.steps && n.steps[t]
                },
                c = (e, t) => {
                    const n = r(e.id);
                    n.steps[t] = !0, ((e, t) => {
                        const n = e.end_date ? { ...t,
                            ttl: Date.parse(e.end_date) + 6048e5
                        } : t;
                        a.t8(o(e.id), n)
                    })(e, n)
                }
        },
        706958: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var a = n(785893),
                i = n(184481),
                o = n(24553),
                s = n(160160),
                r = n(445884),
                l = n(516590),
                c = n(396693),
                d = n(5212),
                p = n(23838),
                m = n(800274),
                u = n(580163),
                h = n(261397),
                _ = n(657637),
                g = n(592290),
                x = n(727350);
            const v = e => {
                    let {
                        appointment: t,
                        show: n,
                        onHide: i,
                        useBasicLinkForNavigation: o
                    } = e;
                    return (0, a.jsx)(g.ZP, {
                        show: n,
                        title: r.Z.t("appointments.appointment_card.preparation_section.questionnaires_panel.title"),
                        onHide: i,
                        position: "right",
                        className: "dl-full-height",
                        children: (0, a.jsx)(g.Ng, {
                            className: "dl-padding-x-8",
                            children: (0, a.jsx)(x.Z, {
                                appointment: t,
                                useBasicLinkForNavigation: o
                            })
                        })
                    })
                },
                Z = "questionnaire-requests-panel",
                y = e => {
                    var t;
                    let {
                        appointment: n,
                        useBasicLinkForNavigation: g,
                        children: x,
                        completedCount: y,
                        totalCount: j
                    } = e;
                    const f = (0, m.ZP)(),
                        D = (0, u.ZP)(),
                        {
                            sharingFunnelId: b
                        } = null !== (t = (0, o.useLocation)().state) && void 0 !== t ? t : {},
                        {
                            startTanker: w
                        } = (0, i.useContext)(h.WA),
                        S = (0, i.useContext)(p.Z),
                        {
                            isVisible: N,
                            open: I,
                            close: k
                        } = (0, _.M)(Z);
                    return f ? (0, a.jsxs)(c.Z, {
                        value: {
                            sharing_funnel_id: b
                        },
                        children: [x({
                            onTap: async () => {
                                const e = (0, s.Z)();
                                (0, l.ZP)({
                                    name: "patient_start_share_questionnaire_appt",
                                    details: { ...S,
                                        appointment_id: void 0,
                                        appointment_telehealth: !!n.telehealth,
                                        sharing_funnel_id: e,
                                        questionnaires_total_count: j,
                                        questionnaires_completed_count: y
                                    }
                                }, {
                                    schema: "patient"
                                });
                                const t = await w(f, {
                                    enforceFullRegistration: !0
                                });
                                (0, h.aE)(t, f) ? ((0, l.ZP)({
                                    name: "patient_start_share_questionnaire_appt_display",
                                    details: { ...S,
                                        appointment_id: void 0,
                                        appointment_telehealth: !!n.telehealth,
                                        sharing_funnel_id: e,
                                        questionnaires_total_count: j,
                                        questionnaires_completed_count: y
                                    }
                                }, {
                                    schema: "patient"
                                }), I({
                                    sharingFunnelId: e,
                                    funnelType: S.type
                                })) : D({
                                    message: r.Z.t("tanker.must_verify_identity.document"),
                                    uiStyle: "error"
                                })
                            }
                        }), (0, d.Zz)() && (0, a.jsx)(v, {
                            appointment: n,
                            show: N && Boolean(b),
                            useBasicLinkForNavigation: g,
                            onHide: k
                        })]
                    }) : null
                }
        },
        727350: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var a = n(785893),
                i = n(184481),
                o = n(445884),
                s = n(545763),
                r = n(179522),
                l = n(511466),
                c = n(236019),
                d = n(658313),
                p = n(23838);
            const m = e => {
                    let {
                        request: t,
                        useBasicLinkForNavigation: n,
                        mobile: l
                    } = e;
                    const {
                        sharing_funnel_id: c,
                        type: d,
                        source: m
                    } = (0, i.useContext)(p.Z), u = new URLSearchParams({
                        sharingFunnelId: c,
                        funnelType: d,
                        funnelSource: m
                    }), h = `/account/appointments/details/${t.appointment_id}/questionnaire-requests/${t.id}?${u.toString()}`;
                    return (0, a.jsx)(r.Z, {
                        border: "none",
                        className: "dl-padding-0",
                        children: (0, a.jsxs)(r.Z.Content, {
                            children: [(0, a.jsx)(r.Z.Title, {
                                children: t.questionnaire.title
                            }), (0, a.jsx)(r.Z.Description, {
                                children: (0, a.jsx)(s.Z, {
                                    className: "dl-margin-t-8",
                                    uiStyle: "outlined",
                                    block: l,
                                    href: n ? h : void 0,
                                    to: n ? void 0 : h,
                                    children: o.Z.t("patient_common.root.check_in.questionnaire.request.button_complete")
                                })
                            })]
                        })
                    })
                },
                u = e => {
                    let {
                        requests: t,
                        useBasicLinkForNavigation: n,
                        mobile: i
                    } = e;
                    return 0 === t.length ? null : (0, a.jsx)("ul", {
                        className: "dl-padding-0 dl-flex-column dl-flex-gap-24",
                        children: t.map((e => (0, a.jsx)(m, {
                            request: e,
                            useBasicLinkForNavigation: n,
                            mobile: i
                        }, e.id)))
                    })
                },
                h = e => {
                    let {
                        appointment: t,
                        useBasicLinkForNavigation: n = !1,
                        mobile: i = !1
                    } = e;
                    const {
                        data: o = [],
                        isInitialLoading: s
                    } = (0, c.H)({
                        appointmentId: t.id
                    });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(d.Z, {
                            appointment: t,
                            readOnly: !t.patient_can_share_documents,
                            wordingReadOnly: "appointments.appointment_card.preparation_section.questionnaires_panel.sharing_not_available_html",
                            wordingAct: "appointments.appointment_card.preparation_section.questionnaires_panel.sharing_available_html",
                            wordingActHospital: "appointments.appointment_card.preparation_section.questionnaires_panel.sharing_available_in_hospital_html"
                        }), s ? (0, a.jsx)(l.Z, {}) : (0, a.jsx)(u, {
                            requests: o,
                            useBasicLinkForNavigation: n,
                            mobile: i
                        })]
                    })
                }
        },
        878181: (e, t, n) => {
            n.d(t, {
                Z: () => V
            });
            var a = n(785893),
                i = n(184481),
                o = n(24553),
                s = n(160160),
                r = n(445884),
                l = n(990626),
                c = n(451421),
                d = n(516590),
                p = n(396693),
                m = n(5212),
                u = n(23838),
                h = n(800274),
                _ = n(580163),
                g = n(982761),
                x = n(261397),
                v = n(657637),
                Z = n(592290),
                y = n(453040),
                j = n(479670),
                f = n(793330),
                D = n(527926),
                b = n(545763),
                w = n(912536),
                S = n(258721);
            const N = e => {
                    let {
                        expanded: t,
                        disabled: n,
                        onClick: o
                    } = e;
                    const s = (0, i.useContext)(u.Z);
                    return (0, a.jsx)(b.Z, {
                        "aria-expanded": t,
                        "aria-controls": "add-document-dropdown",
                        uiStyle: "outlined",
                        leftIcon: "regular/file-arrow-up",
                        onClick: e => {
                            (0, d.ZP)({
                                name: "patient_share_document_appt_select_document",
                                details: s
                            }), o(e)
                        },
                        disabled: n,
                        children: r.Z.t("patient_common.root.documents.document_selector.add_a_document")
                    })
                },
                I = e => {
                    let {
                        selectFromDoctolibDocuments: t,
                        uploadFromDevice: n,
                        canSelectFromDoctolibDocuments: i,
                        disabled: o
                    } = e;
                    if (!i) return (0, a.jsx)(N, {
                        onClick: n,
                        disabled: o
                    });
                    return (0, a.jsx)(S.Z, {
                        contentClassName: "dl-position-absolute",
                        triggerComponent: (e, t) => (0, a.jsx)(N, {
                            onClick: e,
                            expanded: t,
                            disabled: o
                        }),
                        children: (0, a.jsxs)(w.Z, {
                            className: "dl-margin-t-8 w-max",
                            id: "add-document-dropdown",
                            children: [(0, a.jsx)(w.Z.Button, {
                                uiStyle: "link-primary",
                                onTap: n,
                                className: "dl-padding-x-16",
                                disabled: o,
                                children: r.Z.t("patient_common.root.documents.document_selector.actions.from_my_computer")
                            }), (0, a.jsx)(w.Z.Button, {
                                uiStyle: "link-primary",
                                onTap: t,
                                className: "dl-padding-x-16",
                                disabled: o,
                                children: r.Z.t("patient_common.root.documents.document_selector.actions.from_my_doctolib_documents")
                            })]
                        })
                    })
                };
            var k = n(979776),
                F = n(778075);
            const C = e => {
                let {
                    show: t,
                    onAccept: n,
                    onDismiss: i
                } = e;
                return (0, a.jsx)(F.Z, {
                    title: r.Z.t("appointments.appointment_card.preparation_section.document_sharing_panel.quit_without_sharing.title"),
                    onDismiss: i,
                    onAccept: n,
                    show: t,
                    dismissText: r.Z.t("common.actions.cancel"),
                    acceptText: r.Z.t("common.actions.quit"),
                    children: r.Z.t("appointments.appointment_card.preparation_section.document_sharing_panel.quit_without_sharing.description")
                })
            };
            var q = n(668173),
                P = n(103942);
            const A = e => {
                    let {
                        appointment: t,
                        isLoading: n,
                        uploadFromDevice: i,
                        selectFromDoctolibDocuments: o,
                        canSelectFromDoctolibDocuments: s
                    } = e;
                    return t.patient_can_share_documents ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "flex dl-margin-t-24 dl-justify-center",
                            children: (0, a.jsx)(I, {
                                uploadFromDevice: i,
                                selectFromDoctolibDocuments: o,
                                canSelectFromDoctolibDocuments: s,
                                disabled: n
                            })
                        }), (0, a.jsx)("div", {
                            className: "dl-text-center dl-margin-t-24",
                            children: (0, a.jsx)(y.Z, {
                                uiStyle: "body-s-regular",
                                color: "neutral-090",
                                children: r.Z.t("appointments.appointment_card.preparation_section.document_sharing_panel.max_size_and_file_types")
                            })
                        })]
                    }) : null
                },
                T = e => {
                    let {
                        appointment: t,
                        sharingFunnelId: n,
                        show: o,
                        onHide: s
                    } = e;
                    const {
                        shareDocument: r,
                        isLoading: l
                    } = (0, f.z)({
                        appointment: t,
                        sharingFunnelId: n
                    }), [c, p] = (0, i.useState)(null), [m, h] = (0, i.useState)(!1), {
                        documents: _,
                        updateDocument: x
                    } = (0, g.Z)(), {
                        setLastNativeUpload: v
                    } = (0, i.useContext)(D.Z), y = (0, i.useContext)(u.Z), b = (0, i.useCallback)((e => {
                        (0, d.ZP)({
                            name: e,
                            details: { ...y,
                                source_type: "doctolib_documents"
                            }
                        })
                    }), [y]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(Z.ZP, {
                            show: o,
                            title: (0, k.Mo)({
                                appointment: t,
                                step: c
                            }),
                            onBack: null !== c ? () => {
                                "document_preview" === c && p("document_list"), "document_list" === c && p(null)
                            } : void 0,
                            onHide: null === c ? s : () => {
                                b("patient_quit_without_sharing_document_modal_display"), h(!0)
                            },
                            position: "right",
                            className: "dl-full-height",
                            children: o && (0, a.jsx)(j.Z, {
                                appointment: t,
                                hiddenDocumentIds: (0, k.YF)(t.id, _),
                                updateDocument: x,
                                onDocumentSelected: async e => {
                                    await r(e.id), v(Date.now())
                                },
                                masterPatients: [{
                                    first_name: t.patient.master_patient.first_name,
                                    last_name: t.patient.master_patient.last_name,
                                    id: t.patient.master_patient_id
                                }],
                                step: c,
                                setStep: p,
                                drawerBodyClassName: "dl-padding-x-8",
                                children: e => {
                                    let {
                                        uploadFromDevice: n,
                                        selectFromDoctolibDocuments: i,
                                        canSelectFromDoctolibDocuments: o,
                                        stepComponent: s
                                    } = e;
                                    return null !== s && void 0 !== s ? s : (0, a.jsxs)(Z.Ng, {
                                        className: "dl-padding-x-8",
                                        children: [(0, a.jsx)(q.Z, {
                                            appointment: t
                                        }), (0, a.jsx)(g.L, {
                                            appointmentId: t.id,
                                            masterPatientId: void 0,
                                            children: (0, a.jsx)(P.Z, {
                                                appointment: t,
                                                className: "dl-margin-t-16"
                                            })
                                        }), (0, a.jsx)(A, {
                                            appointment: t,
                                            isLoading: l,
                                            uploadFromDevice: n,
                                            selectFromDoctolibDocuments: e => {
                                                p("document_list"), i(e)
                                            },
                                            canSelectFromDoctolibDocuments: o
                                        })]
                                    })
                                }
                            })
                        }), (0, a.jsx)(C, {
                            show: m,
                            onAccept: () => {
                                b("patient_quit_without_sharing_document_confirmed"), h(!1), p(null), s()
                            },
                            onDismiss: () => {
                                b("patient_quit_without_sharing_document_canceled"), h(!1)
                            }
                        })]
                    })
                };
            n(40372);
            const L = "share-document-panel",
                V = e => {
                    var t;
                    let {
                        appointment: n,
                        children: Z
                    } = e;
                    const y = (0, h.ZP)(),
                        j = (0, _.ZP)(),
                        {
                            sharingFunnelId: f
                        } = null !== (t = (0, o.useLocation)().state) && void 0 !== t ? t : {},
                        {
                            startTanker: b
                        } = (0, i.useContext)(x.WA),
                        {
                            documents: w,
                            fetchDocuments: S
                        } = (0, g.Z)(),
                        N = (0, i.useContext)(u.Z),
                        {
                            setLastNativeUpload: I
                        } = (0, i.useContext)(D.Z),
                        {
                            isVisible: k,
                            open: F,
                            close: C
                        } = (0, v.M)(L);
                    if ((0, i.useEffect)((() => {
                            k && null !== w && void 0 !== w && w.length && S()
                        }), [k, null === w || void 0 === w ? void 0 : w.length]), !y) return null;
                    return (0, a.jsxs)(p.Z, {
                        value: {
                            sharing_funnel_id: f
                        },
                        children: [Z({
                            onTap: async () => {
                                const e = (0, s.Z)();
                                (0, d.ZP)({
                                    name: "patient_start_share_document_appt",
                                    details: { ...N,
                                        appointment_id: (0, c.id)(n.id),
                                        sharing_funnel_id: e,
                                        is_appointment_request: !!n.appointment_request_entry,
                                        is_appointment_request_enabled: (0, l.cr)("patient_appointment_requests")
                                    }
                                });
                                const t = await b(y, {
                                    enforceFullRegistration: !0
                                });
                                (0, x.aE)(t, y) ? ((0, d.ZP)({
                                    name: "patient_start_share_document_appt_display",
                                    details: { ...N,
                                        appointment_id: (0, c.id)(n.id),
                                        sharing_funnel_id: e
                                    }
                                }, {
                                    schema: "patient"
                                }), F({
                                    sharingFunnelId: e,
                                    funnelType: N.type
                                })) : j({
                                    message: r.Z.t("tanker.must_verify_identity.document"),
                                    uiStyle: "error"
                                })
                            }
                        }), (0, m.Zz)() && (0, a.jsx)(T, {
                            appointment: n,
                            sharingFunnelId: f,
                            show: k && Boolean(f),
                            onHide: () => {
                                C(), I(Date.now())
                            }
                        })]
                    })
                }
        },
        103942: (e, t, n) => {
            n.d(t, {
                K: () => h,
                Z: () => _
            });
            var a = n(785893),
                i = n(294184),
                o = n.n(i),
                s = n(549995),
                r = n.n(s),
                l = n(875472),
                c = n.n(l),
                d = n(247557),
                p = n(130498),
                m = n(982761);
            const u = e => {
                    let {
                        documents: t,
                        onDocumentDestroy: n,
                        appointment: i,
                        className: s,
                        viewOnly: l = !1
                    } = e;
                    if (!t.length) return null;
                    const c = r()(t, "title");
                    return (0, a.jsx)("div", {
                        className: s,
                        children: t.map(((e, s) => {
                            const r = t.slice(0, s).filter((t => {
                                    let {
                                        title: n
                                    } = t;
                                    return n === e.title
                                })).length + 1,
                                p = c[e.title] > 1 ? `${e.title} ${r}` : e.title;
                            return (0, a.jsx)(d.Z, {
                                condensed: !0,
                                doc: { ...e,
                                    title: p
                                },
                                appointment: i,
                                onDestroyed: n,
                                border: !0,
                                viewOnly: l,
                                className: o()({
                                    "dl-margin-t-16": s > 0
                                })
                            }, e.id)
                        }))
                    })
                },
                h = e => c()(e.filter((e => e.sharings && e.sharings.some((e => e.is_created_by_self)))), "created_at"),
                _ = e => {
                    let {
                        appointment: t,
                        className: n
                    } = e;
                    const {
                        documents: i,
                        fetchDocuments: o,
                        isFetching: s
                    } = (0, m.Z)(), r = h(i);
                    return s ? (0, a.jsx)(p.Z, {
                        className: "dl-margin-t-16"
                    }) : (0, a.jsx)(u, {
                        documents: r,
                        onDocumentDestroy: o,
                        appointment: t,
                        className: n
                    })
                }
        },
        668173: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var a = n(785893),
                i = n(445884),
                o = n(453040),
                s = n(929014),
                r = n(658313);
            const l = e => {
                    let {
                        checkInHospitalEnabled: t
                    } = e;
                    const n = t ? {
                        text: i.Z.t("helpers.appointment.document_kinds_checkin_hospitals_html"),
                        size: "small"
                    } : {
                        text: i.Z.t("helpers.appointment.document_kind_examples"),
                        size: "medium"
                    };
                    return (0, a.jsx)(s.Z, {
                        variant: "deprecated-alert-interface",
                        uiStyle: "info",
                        size: n.size,
                        className: "dl-margin-t-8",
                        children: (0, a.jsx)(o.Z, {
                            className: "flex dl-align-items-center",
                            children: n.text
                        })
                    })
                },
                c = e => {
                    let {
                        appointment: t
                    } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.Z, {
                            appointment: t,
                            readOnly: !t.patient_can_share_documents,
                            wordingReadOnly: "appointments.appointment_card.preparation_section.document_sharing_panel.sharing_not_available_html",
                            wordingAct: "appointments.appointment_card.preparation_section.document_sharing_panel.sharing_available_html",
                            wordingActHospital: "appointments.appointment_card.preparation_section.document_sharing_panel.sharing_available_in_hospital_html"
                        }), t.patient_can_share_documents && (0, a.jsx)(l, {
                            checkInHospitalEnabled: t.organization.has_document_check_in
                        })]
                    })
                }
        },
        979776: (e, t, n) => {
            n.d(t, {
                Mo: () => s,
                YF: () => r
            });
            var a = n(445884),
                i = n(451421);
            const o = {
                    document_list: "appointments.appointment_card.preparation_section.document_sharing_panel.title_document_list",
                    document_preview: "appointments.appointment_card.preparation_section.document_sharing_panel.title_document_preview"
                },
                s = e => {
                    let {
                        appointment: t,
                        step: n
                    } = e;
                    return n ? a.Z.t(o[n]) : t.patient_can_share_documents ? a.Z.t("appointments.appointment_card.preparation_section.document_sharing_panel.title") : a.Z.t("appointments.appointment_card.preparation_section.document_sharing_panel.title_shared")
                },
                r = (e, t) => t.filter((t => t.sharings.some((t => (0, i.ZP)(t.appointment_id, e))))).map((e => e.id))
        },
        793330: (e, t, n) => {
            n.d(t, {
                z: () => m
            });
            var a = n(184481),
                i = n(445884),
                o = n(990626),
                s = n(516590),
                r = n(23838),
                l = n(580163),
                c = n(975645),
                d = n(261397),
                p = n(148336);
            const m = e => {
                let {
                    appointment: t,
                    sharingFunnelId: n
                } = e;
                const {
                    getResourceId: m,
                    shareResourceWith: u
                } = (0, a.useContext)(d.WA), h = (0, a.useContext)(r.Z), [_, g] = (0, a.useState)(!1), x = (0, l.ZP)(), {
                    mutateAsync: v
                } = (0, p.k)({
                    appointmentId: t.id
                }), Z = e => {
                    x({
                        message: i.Z.t("common.error"),
                        uiStyle: "error"
                    }), window.crashReporter.captureException(e)
                };
                return {
                    shareDocument: async e => {
                        g(!0);
                        const a = await m({
                                documentId: e
                            }).then((t => ({
                                resourceId: t,
                                documentId: e
                            }))),
                            r = [],
                            l = [];
                        if (a.resourceId ? l.push(a.resourceId) : r.push(a.documentId), r.length > 0 && (0, s.ZP)({
                                name: "share_unencrypted_documentIds",
                                details: { ...h,
                                    appointment_id: t.id,
                                    agenda_id: t.agenda_id,
                                    checkedDocumentIds: r
                                }
                            }), l.length > 0) {
                            const e = [{
                                agendaId: t.agenda_id
                            }, {
                                agendaId: t.agenda_id,
                                role: "sync"
                            }, {
                                agendaId: t.agenda_id,
                                role: "secretaries"
                            }];
                            await u(l, e)
                        }
                        await v({
                            documentIds: [e]
                        }).then((() => (e => {
                            const a = t.substitute_name || (0, c.WU)(t.profile);
                            x({
                                message: i.Z.t("patient_common.root.documents.sharing_successful", {
                                    doctor_name: a
                                }),
                                uiStyle: "success"
                            }), (0, s.ZP)({
                                name: "patient_end_share_document_appt",
                                details: { ...h,
                                    document_uuids: [e],
                                    sharing_funnel_id: n,
                                    is_appointment_request: !(null === t || void 0 === t || !t.appointment_request_entry),
                                    is_appointment_request_enabled: (0, o.cr)("patient_appointment_requests")
                                }
                            }, {
                                schema: "patient"
                            })
                        })(e)), Z), g(!1)
                    },
                    isLoading: _
                }
            }
        },
        479670: (e, t, n) => {
            n.d(t, {
                Z: () => F
            });
            var a = n(785893),
                i = n(774435),
                o = n(184481),
                s = n(160160),
                r = n(580163),
                l = n(516590),
                c = n(5212),
                d = n(23838),
                p = n(569090),
                m = n(445884),
                u = n(545763),
                h = n(592290),
                _ = n(982761),
                g = n(12015),
                x = n(784600),
                v = n(257629),
                Z = n(269911);
            const y = e => {
                    let {
                        document: t,
                        onTap: n
                    } = e;
                    return (0, a.jsxs)(x.Z, {
                        border: !0,
                        contentClassName: "flex dl-align-items-center",
                        onTap: n,
                        children: [(0, a.jsx)(Z.Z, {
                            kind: t.kind
                        }), (0, a.jsx)("div", {
                            className: "dl-padding-l-16 dl-overflow-hidden",
                            children: (0, a.jsx)(v.Z, {
                                viewed: !0,
                                document: t,
                                dateFormat: "D MMMM"
                            })
                        })]
                    })
                },
                j = e => {
                    let {
                        onDocumentSelected: t,
                        documentsToDisplay: n,
                        drawerBodyClassName: i
                    } = e;
                    const {
                        lastPage: o,
                        showMore: s,
                        loading: r
                    } = (0, _.Z)();
                    return (0, a.jsxs)(h.Ng, {
                        className: i,
                        children: [(0, a.jsx)("div", {
                            className: "dl-margin-y-16-between-children",
                            children: (0, a.jsx)(g.Z, {
                                documents: n,
                                render: e => e.map((e => (0, a.jsx)(y, {
                                    document: e,
                                    onTap: () => t(e)
                                }, e.id)))
                            })
                        }), !o && (0, a.jsx)("div", {
                            className: "dl-margin-y-16",
                            children: (0, a.jsx)(u.Z, {
                                uiStyle: "info-link",
                                block: !0,
                                onTap: s,
                                disabled: r,
                                children: m.Z.t("common.mobile.availabilities.see_more")
                            })
                        })]
                    })
                };
            var f = n(977954),
                D = n.n(f),
                b = n(511466),
                w = n(453040),
                S = n(143545),
                N = n(991136);
            const I = e => {
                    let {
                        document: t,
                        updateDocument: n,
                        onDocumentSelected: i,
                        drawerBodyClassName: s,
                        onBack: l
                    } = e;
                    const c = (0, r.ZP)(),
                        [d, p] = (0, o.useState)(!1),
                        {
                            data: _,
                            isLoading: g
                        } = (0, N.Z)({
                            document: t,
                            onSuccess: () => n({ ...t,
                                viewed_at: (new Date).toISOString()
                            }),
                            onError: e => {
                                c({
                                    message: e.message,
                                    uiStyle: "warning"
                                }), l()
                            }
                        });
                    return g || !_ ? (0, a.jsx)(h.Ng, {
                        className: s,
                        children: (0, a.jsx)(b.Z, {})
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(h.Ng, {
                            className: s,
                            children: [(0, a.jsx)("div", {
                                className: "dl-text-center dl-margin-b-16",
                                children: (0, a.jsxs)(w.Z, {
                                    uiStyle: "body-s-regular",
                                    color: "neutral-130",
                                    children: [t.title, " \u2022 ", D()(t.created_at).format("MMMM YYYY")]
                                })
                            }), (0, a.jsx)(S.Z, {
                                document: t,
                                showPadesMessage: !1,
                                url: _.decryptedFileUrl
                            })]
                        }), (0, a.jsx)(h.ze, {
                            children: (0, a.jsx)(u.Z, {
                                leftIcon: "regular/paper-plane",
                                onClick: async () => {
                                    p(!0);
                                    try {
                                        await i(t)
                                    } catch (e) {
                                        p(!1)
                                    }
                                },
                                loadable: {
                                    loading: d
                                },
                                children: m.Z.t("patient_common.root.documents.document_selector.send")
                            })
                        })]
                    })
                },
                k = e => {
                    let {
                        children: t,
                        appointment: n,
                        updateDocument: i,
                        onDocumentSelected: m,
                        hiddenDocumentIds: u = [],
                        masterPatients: h,
                        step: g,
                        setStep: x,
                        drawerBodyClassName: v
                    } = e;
                    const [Z, y] = (0, o.useState)(), [f, D] = (0, o.useState)(), b = (0, o.useContext)(d.Z), w = (0, r.ZP)(), S = (0, o.useCallback)((e => {
                        let {
                            name: t,
                            sourceType: n,
                            documentId: a,
                            funnelId: i
                        } = e;
                        (0, l.ZP)({
                            name: t,
                            details: { ...b,
                                source_type: n,
                                ...a && {
                                    document_id: a
                                },
                                ...i && {
                                    funnel_id: i
                                }
                            }
                        })
                    }), [b]), N = () => {
                        S({
                            name: "patient_select_document",
                            sourceType: "doctolib_documents"
                        })
                    }, {
                        canSelectFromDoctolibDocuments: k,
                        documentsToDisplay: F
                    } = (e => {
                        let {
                            hiddenDocumentIds: t
                        } = e;
                        const {
                            documents: n
                        } = (0, _.Z)(), a = n.filter((e => !t.includes(e.id)));
                        return {
                            canSelectFromDoctolibDocuments: a.length > 0,
                            documentsToDisplay: a
                        }
                    })({
                        hiddenDocumentIds: u
                    }), C = () => {
                        switch (g) {
                            case "document_list":
                                return (0, a.jsx)(j, {
                                    documentsToDisplay: F,
                                    onDocumentSelected: e => {
                                        const t = (0, s.Z)();
                                        y(t), D(e), S({
                                            name: "patient_doctolib_documents_document_selected",
                                            sourceType: "doctolib_documents",
                                            documentId: e.id,
                                            funnelId: t
                                        }), x("document_preview")
                                    },
                                    drawerBodyClassName: v
                                });
                            case "document_preview":
                                return f ? (0, a.jsx)(I, {
                                    document: f,
                                    updateDocument: i,
                                    onDocumentSelected: async () => {
                                        S({
                                            name: "patient_doctolib_documents_document_sent",
                                            sourceType: "doctolib_documents",
                                            documentId: f.id,
                                            funnelId: Z
                                        }), await m(f), x(null)
                                    },
                                    onBack: () => x("document_list"),
                                    drawerBodyClassName: v
                                }) : null;
                            default:
                                return null
                        }
                    };
                    return (0, a.jsx)(p.Z, {
                        onUpload: e => {
                            m(e)
                        },
                        onError: (e, t, n) => {
                            w({
                                message: n,
                                uiStyle: "error"
                            })
                        },
                        masterPatients: h,
                        shared: !0,
                        startTankerOnMount: !0,
                        showLoader: !0,
                        className: "dl-position-absolute dl-top-0 dl-left-0",
                        displayCameraFileInput: (0, c.rl)(),
                        appointment: n,
                        children: e => {
                            let {
                                onClick: n
                            } = e;
                            return t({
                                uploadFromDevice: e => {
                                    S({
                                        name: "patient_select_document",
                                        sourceType: "upload_from_device"
                                    }), n(e, "upload_from_device")
                                },
                                uploadFromCamera: e => {
                                    S({
                                        name: "patient_select_document",
                                        sourceType: "upload_from_camera"
                                    }), n(e, "upload_from_camera")
                                },
                                selectFromDoctolibDocuments: N,
                                canSelectFromDoctolibDocuments: k,
                                stepComponent: C()
                            })
                        }
                    })
                },
                F = e => (0, a.jsx)(i.Z, {
                    component: "DocumentSelector",
                    team: "phr",
                    children: (0, a.jsx)(k, { ...e
                    })
                })
        },
        797984: (e, t, n) => {
            n.d(t, {
                Z: () => m,
                w: () => p
            });
            var a = n(785893),
                i = n(165668),
                o = n(774435),
                s = n(294184),
                r = n.n(s),
                l = n(92970),
                c = n(70774),
                d = n(145082);
            const p = (0, o.P)((e => {
                    let {
                        cards: t,
                        isLoading: n = !1,
                        limit: o = 3,
                        loaderCount: s = 3,
                        uiStyle: l,
                        direction: c = "row",
                        noShadow: p,
                        className: m
                    } = e;
                    return n ? (0, a.jsx)(d.Z, {
                        count: s,
                        uiStyle: l,
                        noShadow: p,
                        className: m,
                        direction: c
                    }) : 1 === o && t.length > 0 ? (0, a.jsx)(i.Z, {
                        position: 0,
                        card: t[0],
                        uiStyle: l,
                        noShadow: p,
                        className: m,
                        direction: c
                    }) : (0, a.jsx)("div", {
                        className: r()({
                            "dl-flex-column": "column" === c,
                            flex: "row" === c
                        }, "dl-gap-16", m),
                        children: t.map(((e, t) => (0, a.jsx)(i.Z, {
                            position: t,
                            card: e,
                            uiStyle: l,
                            noShadow: p,
                            direction: c
                        }, e.id)))
                    })
                }), {
                    component: "PatientEngagementZoneCards",
                    team: "domak"
                }),
                m = (0, o.P)((e => {
                    let {
                        target: t = l.J.homepage,
                        limit: n = 3,
                        loaderCount: i = 3,
                        uiStyle: o,
                        direction: s = "row",
                        noShadow: r,
                        className: d
                    } = e;
                    const {
                        data: m,
                        isLoading: u
                    } = (0, c.O)({
                        target: t,
                        limit: n
                    }), h = m || [];
                    return (0, a.jsx)(p, {
                        cards: h,
                        loaderCount: i,
                        uiStyle: o,
                        direction: s,
                        noShadow: r,
                        className: d,
                        limit: n,
                        isLoading: u
                    })
                }), {
                    component: "PatientEngagementZone",
                    team: "domak"
                })
        }
    }
]);
//# sourceMappingURL=../36045-bf2e521d197e2a638454.js.map