"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [49194], {
        191327: (e, t, i) => {
            i.d(t, {
                Z: () => n
            });
            var o = i(184481);
            class n extends o.Component {
                constructor() {
                    var e, t, i;
                    super(...arguments), i = {
                        display: !1
                    }, (t = "state") in (e = this) ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                }
                componentDidMount() {
                    this.timeoutId = setTimeout((() => {
                        this.setState({
                            display: !0
                        })
                    }), this.props.delay)
                }
                componentWillUnmount() {
                    clearTimeout(this.timeoutId)
                }
                render() {
                    return this.state.display ? this.props.children : null
                }
            }
        },
        985882: (e, t, i) => {
            i.d(t, {
                Z: () => c
            });
            var o = i(552691),
                n = i(712722),
                a = i(511466),
                r = i(191327),
                s = i(785893);
            const l = e => {
                const {
                    children: t,
                    loading: i,
                    navBarProps: l,
                    showNavBar: c
                } = e;
                return (0, s.jsxs)(n.Z, {
                    "data-design-system": "base",
                    children: [c && (0, s.jsx)(o.Z, { ...l
                    }), i && (0, s.jsx)(r.Z, {
                        delay: 500,
                        children: (0, s.jsx)(a.Z, {})
                    }), t]
                })
            };
            l.defaultProps = {
                loading: !1,
                showNavBar: !0
            };
            const c = l
        },
        347802: (e, t, i) => {
            i.d(t, {
                Z: () => h
            });
            var o = i(184481),
                n = i(69572),
                a = i.n(n),
                r = i(445884),
                s = i(453040),
                l = i(989976),
                c = i(630316),
                d = i(795361),
                p = i(785893);
            const u = e => {
                    let {
                        placesWithPhoneNumber: t,
                        uiStyle: i
                    } = e;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsxs)(s.Z, {
                            uiStyle: i,
                            className: "dl-text-center",
                            color: "neutral-130",
                            children: [r.Z.t("appointments.blocked_new_patient_step.description"), " ", r.Z.t("appointments.blocked_new_patient_step.contact_details.multiple_practices")]
                        }), t.map((e => (0, p.jsxs)(s.Z, {
                            block: !0,
                            uiStyle: "body-s-regular",
                            color: "neutral-130",
                            children: [e.name || e.address, " : ", (0, p.jsx)("strong", {
                                children: e.landline_number
                            })]
                        }, e.id)))]
                    })
                },
                m = e => {
                    let {
                        phoneNumber: t,
                        uiStyle: i
                    } = e;
                    return (0, p.jsxs)(s.Z, {
                        uiStyle: i,
                        className: "dl-text-center",
                        color: "neutral-130",
                        children: [r.Z.t("appointments.blocked_new_patient_step.description"), " ", r.Z.t("appointments.blocked_new_patient_step.contact_details.single_pactice_html", {
                            phoneNumber: t
                        })]
                    })
                },
                v = e => {
                    let {
                        uiStyle: t
                    } = e;
                    return (0, p.jsx)(s.Z, {
                        uiStyle: t,
                        className: "dl-text-center",
                        color: "neutral-130",
                        children: r.Z.t("appointments.blocked_new_patient_step.description")
                    })
                },
                _ = e => {
                    let {
                        placesWithPhoneNumber: t,
                        uiStyle: i
                    } = e;
                    return t.length > 1 ? (0, p.jsx)(u, {
                        placesWithPhoneNumber: t,
                        uiStyle: i
                    }) : 1 === t.length ? (0, p.jsx)(m, {
                        phoneNumber: t[0].landline_number,
                        uiStyle: i
                    }) : (0, p.jsx)(v, {
                        uiStyle: i
                    })
                },
                h = e => {
                    let {
                        places: t,
                        uiStyle: i = "body-s-regular"
                    } = e;
                    const n = a()(t.filter((e => e.landline_number)), 3),
                        {
                            createTrackingEventWithContext: r
                        } = (0, d.Z)();
                    return (0, o.useEffect)((() => {
                        r({
                            name: "online_booking_unavailable_for_new_patients"
                        })
                    }), []), (0, p.jsx)(l.Z, {
                        image: c,
                        children: (0, p.jsx)(_, {
                            placesWithPhoneNumber: n,
                            uiStyle: i
                        })
                    })
                }
        },
        355462: (e, t, i) => {
            i.d(t, {
                Z: () => _
            });
            var o = i(184481),
                n = i(294184),
                a = i.n(n),
                r = i(516590),
                s = i(743977),
                l = i(686569),
                c = i(337209),
                d = i(851747),
                p = i(400958),
                u = i(785893);
            const m = e => {
                    let {
                        position: t,
                        onClick: i,
                        label: o
                    } = e;
                    const n = {
                        color: "#fff",
                        fontFamily: p.Z.fontFamilyRoboto,
                        fontWeight: p.Z.fontWeightBold,
                        fontSize: p.Z.fontSizeBody,
                        text: o
                    };
                    return (0, u.jsx)(d.Z, {
                        color: "solid-primary-110",
                        label: n,
                        size: "medium",
                        foreground: !0,
                        position: t,
                        title: `marker-place-${o}`,
                        onClick: () => null === i || void 0 === i ? void 0 : i(o)
                    })
                },
                v = { ...l.v,
                    draggable: !0
                },
                _ = e => {
                    let {
                        places: t
                    } = e;
                    const [i, n] = (0, o.useState)(), {
                        hasMapConsent: d,
                        trackedTeatureType: p,
                        setTrackedFeatureType: _
                    } = (0, o.useContext)(c.ZP);
                    return (0, o.useEffect)((() => {
                        if (i) {
                            const e = t.reduce(((e, t) => (e.extend(new window.google.maps.LatLng(t.latitude, t.longitude)), e)), new window.google.maps.LatLngBounds);
                            i.fitBounds(e)
                        }
                    }), [!!i, t.length]), (0, o.useEffect)((() => {
                        _("booking")
                    }), [_]), (0, o.useEffect)((() => {
                        (0, r.ZP)({
                            name: "patient_map_displayed",
                            details: {
                                opted_in: d,
                                type: "booking"
                            }
                        }, {
                            schema: "patient"
                        })
                    }), [d, p]), (0, u.jsx)(s.Z, {
                        className: a()("booking-place-map", {
                            "booking-place-map-displayed": !!i
                        }),
                        smallSize: !0,
                        trackConsentAccepted: e => {
                            let {
                                type: t
                            } = e;
                            return (0, r.ZP)({
                                name: "patient_gives_map_consent",
                                details: {
                                    type: t
                                }
                            }, {
                                schema: "patient"
                            })
                        },
                        children: (0, u.jsx)(l.Z, {
                            onMapMount: n,
                            options: v,
                            children: t.map(((e, t) => {
                                const i = String(t + 1);
                                return (0, u.jsx)(m, {
                                    label: i,
                                    position: {
                                        lat: e.latitude,
                                        lng: e.longitude
                                    }
                                }, i)
                            }))
                        })
                    })
                }
        },
        546159: (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var o = i(528846);
            var n = i(785893);
            const a = e => {
                let {
                    title: t,
                    subtitle: i,
                    pictureUrl: a
                } = e;
                return (0, n.jsxs)("div", {
                    className: "picture-nav-title",
                    children: [a ? (0, n.jsx)(o.Z, {
                        className: "picture-nav-title-picture",
                        rounded: !0,
                        src: a,
                        alt: ""
                    }) : null, (0, n.jsxs)("div", {
                        className: "picture-nav-title-text",
                        children: [(0, n.jsx)("div", {
                            className: "picture-nav-title-subtitle",
                            "aria-hidden": "true",
                            children: i
                        }), (0, n.jsx)("div", {
                            className: "picture-nav-title-title",
                            "aria-hidden": "true",
                            children: t
                        })]
                    })]
                })
            }
        },
        898116: (e, t, i) => {
            i.d(t, {
                Z: () => r
            });
            var o = i(184481),
                n = i(24553);
            const a = ["/:speciality", "/:speciality/map", "/:speciality/filters", "/:speciality/filters/:param_name", "/:speciality/:location", "/:speciality/:location/map", "/:speciality/:location/filters", "/:speciality/:location/filters/:param_name", "/doctors/:doctor/:location", "/doctors/:doctor/:location/map", "/doctors/:doctor/:location/filters", "/doctors/:doctor/:location/filters/:param_name"],
                r = () => {
                    const {
                        pathname: e
                    } = (0, n.useLocation)(), t = (0, o.useMemo)((() => a.map((t => (0, n.matchPath)({
                        path: t,
                        end: !0
                    }, e))).filter(Boolean)[0]), [e]), i = (0, n.useMatch)({
                        path: "/:speciality/:location/:id",
                        end: !1
                    }), {
                        params: {
                            id: r,
                            doctor: s,
                            location: l,
                            speciality: c
                        } = {}
                    } = t || i || {};
                    if (r) return `/${c}/${l}/${r}`;
                    let d = "";
                    return d += c ? `/${c}` : "/doctors", s && (d += `/${s}`), l && (d += `/${l}`), d
                }
        },
        837812: (e, t, i) => {
            i.d(t, {
                X: () => s
            });
            var o = i(516590),
                n = i(170226),
                a = i(752646),
                r = i(5212);
            const s = (e, t, i) => {
                var s;
                let {
                    profile: l,
                    practiceId: c,
                    isSkipped: d = (0, r.Ex)(),
                    isAppointmentRequestEnabled: p = !1
                } = e;
                const u = i || document.referrer,
                    m = l.is_directory ? {
                        directory_id: l.id,
                        referrer: u,
                        ...(0, n.S)()
                    } : { ...(0, n.S)(),
                        referrer: u,
                        profile_id: l.id,
                        speciality_id: null === (s = l.speciality) || void 0 === s ? void 0 : s.id,
                        profile_practice_id: c,
                        telehealth_suggested: Boolean(l.telehealth),
                        profile_type: l.organization ? "organization" : "practitioner",
                        is_skipped: d
                    };
                (0, o.ZP)({
                    name: t,
                    itemId: l.id,
                    itemType: (0, a.m)(l.organization),
                    details: { ...m,
                        is_appointment_request_enabled: p
                    }
                }, {
                    schema: "gtm_event"
                })
            }
        },
        287991: (e, t, i) => {
            i.d(t, {
                Z: () => n
            });
            var o = i(78599);
            const n = e => {
                var t;
                const i = (0, o.o8)(e);
                return {
                    externalParameters: {
                        agenda_ids: null === i || void 0 === i || null === (t = i.agenda_ids) || void 0 === t ? void 0 : t.map((e => Number(e))),
                        pid: null === i || void 0 === i ? void 0 : i.pid,
                        profileSkipped: (null === i || void 0 === i ? void 0 : i.profile_skipped) && Boolean(null === i || void 0 === i ? void 0 : i.profile_skipped),
                        vmid: (null === i || void 0 === i ? void 0 : i.vmid) && Number(i.vmid),
                        visit_motive_category_id: (null === i || void 0 === i ? void 0 : i.visit_motive_category_id) && Number(i.visit_motive_category_id),
                        speciality_id: null !== i && void 0 !== i && i["highlight[speciality_ids]"] ? Number(i["highlight[speciality_ids]"][0]) : (null === i || void 0 === i ? void 0 : i.speciality_id) && Number(i.speciality_id),
                        insurance_sector: null === i || void 0 === i ? void 0 : i.insurance_sector,
                        practitioner_id: (null === i || void 0 === i ? void 0 : i.practitioner_id) && Number(i.practitioner_id),
                        organization_id: (null === i || void 0 === i ? void 0 : i.organization_id) && Number(i.organization_id)
                    }
                }
            }
        },
        716373: (e, t, i) => {
            i.d(t, {
                Z: () => u
            });
            var o = i(66604),
                n = i.n(o),
                a = i(701469),
                r = i.n(a),
                s = i(768718),
                l = i.n(s),
                c = i(78599);
            const d = e => {
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return e
                    }
                },
                p = (e, t) => l()(e, ((e, i, o) => {
                    e[o] = t.includes(o) ? (e => void 0 !== e ? Boolean(e) : e)(i) : i
                }), {}),
                u = (e, t) => {
                    const i = (0, c.o8)(e);
                    return {
                        params: p((o = i, n()(o, (e => r()(e) ? e.map(d) : d(e)))), t)
                    };
                    var o
                }
        },
        126480: (e, t, i) => {
            i.d(t, {
                M: () => r
            });
            var o = i(239417),
                n = i(184481),
                a = i(174976);
            const r = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const i = (0, n.useContext)(o._O);
                return (0, a.useQuery)(["profiles", e], (() => i.get(`/profiles/${e}`).then((e => {
                    let {
                        bodyData: t
                    } = e;
                    return t
                }))), { ...t,
                    staleTime: 6e4
                })
            }
        },
        170226: (e, t, i) => {
            i.d(t, {
                S: () => n
            });
            var o = i(608575);
            const n = () => {
                const e = (0, o.parse)(window.location.href, !0).query,
                    {
                        utm_source: t,
                        utm_medium: i,
                        utm_content: n,
                        utm_campaign: a
                    } = e;
                return {
                    source: t ? t.toString() : null,
                    medium: i ? i.toString() : void 0,
                    content: n ? n.toString() : void 0,
                    campaign: a ? a.toString() : void 0
                }
            }
        },
        913038: (e, t, i) => {
            i.d(t, {
                $i: () => m,
                wI: () => u,
                xt: () => v
            });
            var o = i(441609),
                n = i.n(o),
                a = i(944908),
                r = i.n(a),
                s = i(225325),
                l = i.n(s),
                c = i(172371),
                d = i(629161),
                p = i(552365);

            function u(e, t) {
                return r()(e.reduce(((e, i) => (t.forEach((t => {
                    const o = i.visit_motive_ids_by_practice_id[t];
                    o && o.forEach((t => {
                        e.push(t)
                    }))
                })), e)), []))
            }

            function m(e, t, i) {
                "undefined" !== typeof i.isBookingDisabled && (e = e.filter((e => i.isBookingDisabled ? e.booking_disabled || e.booking_temporary_disabled : !e.booking_disabled && !e.booking_temporary_disabled))), i.isOrganization && (e = e.filter((e => !e.booking_disabled))), i.specialityId && (e = e.filter((e => e.speciality_id === i.specialityId))), i.practiceIds && (e = e.filter((e => null !== e.practice_id && i.practiceIds && i.practiceIds.includes(e.practice_id))));
                const o = (0, d.xw)(t, e, i.placeId);
                if (i.placeId && (e = e.filter((e => function(e, t) {
                        return e.practice_id ? t.includes(e.practice_id) : t.some((t => e.visit_motive_ids_by_practice_id[t] && e.visit_motive_ids_by_practice_id[t].length > 0))
                    }(e, o)))), i.practiceIds && e.filter((e => e.practice_id ? o.includes(e.practice_id) : o.some((t => e.visit_motive_ids_by_practice_id[t] && e.visit_motive_ids_by_practice_id[t].length > 0)))), i.practitionerId && "NO_PREFERENCE" !== i.practitionerId && (e = e.filter((e => e.practitioner_id === i.practitionerId))), !n()(i.visitMotives)) {
                    const t = i.visitMotives || [],
                        a = t.map((e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })),
                        r = function(e, t) {
                            return e.reduce(((e, i) => (e.set(i.id, n()(t) ? (0, d.Bl)([i]) : t), e)), new Map)
                        }(e, o);
                    e = e.filter((e => {
                        const o = u([e], r.get(e.id) || []),
                            n = l()(o, a);
                        if (0 === n.length) return !1;
                        if (i.insuranceSector) {
                            return (0, p.$)(t, n).some((0, c.Us)({
                                insuranceSector: i.insuranceSector,
                                agendaIds: [e.id]
                            }))
                        }
                        return !0
                    }))
                }
                return e
            }

            function v(e) {
                return e.filter((e => e.practitioner_id))
            }
        },
        52672: (e, t, i) => {
            i.d(t, {
                Z: () => x
            });
            var o = i(441609),
                n = i.n(o),
                a = i(414293),
                r = i.n(a),
                s = i(913038),
                l = i(552365),
                c = i(5212),
                d = i(225325),
                p = i.n(d);
            const u = (e, t) => {
                    const i = t.flatMap((e => {
                        let {
                            visit_motive_ids_by_practice_id: t
                        } = e;
                        return Object.keys(t).map(Number)
                    }));
                    return e.filter((e => {
                        let {
                            practice_ids: t
                        } = e;
                        return !n()(p()(t, i))
                    }))
                },
                m = (e, t) => {
                    const i = t.map((e => {
                        let {
                            practitioner_id: t
                        } = e;
                        return t
                    }));
                    return e.filter((e => {
                        let {
                            id: t
                        } = e;
                        return i.includes(t)
                    }))
                },
                v = (e, t) => {
                    const i = t.map((e => {
                        let {
                            visit_motive_category_id: t
                        } = e;
                        return t
                    }));
                    return e.filter((e => {
                        let {
                            id: t
                        } = e;
                        return i.includes(t)
                    }))
                },
                _ = e => {
                    const t = { ...e
                    };
                    return t.places = u(t.places, t.agendas), t.practitioners = m(t.practitioners, t.agendas), t.visit_motives = ((e, t) => {
                        const i = t.flatMap((e => {
                                let {
                                    visit_motive_ids_by_practice_id: t
                                } = e;
                                return Object.values(t).flat()
                            })),
                            o = t.map((e => {
                                let {
                                    speciality_id: t
                                } = e;
                                return t
                            }));
                        return e.filter((e => {
                            let {
                                id: t,
                                speciality_id: n
                            } = e;
                            return i.includes(t) && o.includes(n)
                        }))
                    })(t.visit_motives, t.agendas), t.visit_motive_categories = v(t.visit_motive_categories, t.visit_motives), t
                },
                h = {
                    agenda_ids: (e, t) => null !== t && void 0 !== t && t.length ? { ...e,
                        agendas: (0, l.$)(e.agendas, t)
                    } : e,
                    organization_id: (e, t) => {
                        const i = { ...e
                            },
                            o = i.agendas.filter((e => {
                                let {
                                    organization_id: i
                                } = e;
                                return i === t
                            }));
                        return n()(o) ? e : (i.agendas = o, _(i))
                    },
                    speciality_id: (e, t) => {
                        const i = { ...e
                            },
                            o = i.specialities.filter((e => {
                                let {
                                    id: i
                                } = e;
                                return i === t
                            }));
                        if (!n()(o)) {
                            i.specialities = o;
                            const e = o.map((e => {
                                let {
                                    id: t
                                } = e;
                                return t
                            }));
                            return i.agendas = i.agendas.filter((t => {
                                let {
                                    speciality_id: i
                                } = t;
                                return e.includes(i)
                            })), _(i)
                        }
                        return e
                    },
                    vmid: (e, t) => {
                        const i = { ...e
                            },
                            o = i.visit_motives.filter((e => {
                                let {
                                    id: i
                                } = e;
                                return i === t
                            }));
                        return n()(o) ? e : (i.visit_motives = o, i.agendas = (0, s.$i)(i.agendas, [], {
                            visitMotives: i.visit_motives
                        }), i.places = u(i.places, i.agendas), i.practitioners = m(i.practitioners, i.agendas), i.visit_motive_categories = v(i.visit_motive_categories, i.visit_motives), i.specialities = (0, l.$)(i.specialities, o.map((e => e.speciality_id))), i)
                    },
                    visit_motive_category_id: (e, t) => {
                        const i = { ...e
                            },
                            o = i.visit_motive_categories.filter((e => {
                                let {
                                    id: i
                                } = e;
                                return i === t
                            }));
                        return n()(o) ? e : (i.visit_motive_categories = o, i.visit_motives = i.visit_motives.filter((e => {
                            let {
                                visit_motive_category_id: i
                            } = e;
                            return i === t
                        })), i.agendas = (0, s.$i)(i.agendas, [], {
                            visitMotives: i.visit_motives
                        }), i.places = u(i.places, i.agendas), i.practitioners = m(i.practitioners, i.agendas), i)
                    },
                    pid: (e, t) => {
                        const i = { ...e
                            },
                            o = i.places.filter((e => {
                                let {
                                    id: i
                                } = e;
                                return i === t
                            }));
                        return n()(o) ? e : (i.places = o, i.agendas = (0, s.$i)(i.agendas, i.places, {
                            placeId: t
                        }), _(i))
                    },
                    practitioner_id: (e, t) => {
                        const i = { ...e
                            },
                            o = i.practitioners.filter((e => {
                                let {
                                    id: i
                                } = e;
                                return i === t
                            }));
                        return n()(o) ? e : (i.practitioners = o, i.agendas = (0, s.$i)(i.agendas, [], {
                            practitionerId: t
                        }), _(i))
                    },
                    insurance_sector: (e, t) => {
                        const i = { ...e
                            },
                            o = (0, s.$i)(i.agendas, [], {
                                insuranceSector: t
                            });
                        return n()(o) ? e : (i.agendas = o, _(i))
                    }
                },
                g = ["organization_id", "speciality_id", "vmid", "visit_motive_category_id"],
                f = ["agenda_ids", "speciality_id", "vmid", "visit_motive_category_id", "pid", "practitioner_id", "insurance_sector"];

            function b(e, t) {
                return e ? g : (e => (0, c.Zz)() || Object.keys(e).filter((t => !r()(e[t]))).length >= 2)(t) ? f : ["agenda_ids"]
            }
            const x = (e, t, i) => {
                const o = b(i, t);
                let n = { ...e
                };
                return o.forEach((e => {
                    const i = h[e],
                        o = t[e];
                    i && o && (n = i(n, o))
                })), n
            }
        },
        184666: (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var o = i(184481),
                n = i(516590);
            const a = e => {
                let {
                    profileId: t
                } = e;
                return {
                    onClickCardTitle: (0, o.useCallback)((() => {
                        t && (0, n.ZP)({
                            name: "patient_on_appointment_recap_card_title",
                            itemId: t.toString()
                        }, {
                            schema: "patient"
                        })
                    }), [t])
                }
            }
        },
        104130: (e, t, i) => {
            i.d(t, {
                Z: () => c
            });
            var o = i(785893),
                n = i(445884),
                a = i(845126),
                r = i(453040),
                s = i(294184),
                l = i.n(s);
            const c = e => {
                let {
                    appointmentDetails: t
                } = e;
                return (0, o.jsxs)("div", {
                    className: "p-16",
                    children: [(0, o.jsx)(r.Z, {
                        uiStyle: "title-s-bold",
                        component: "p",
                        color: "neutral-150",
                        children: n.Z.t("slot_selection_funnel.appointment_card.details_title")
                    }), (0, o.jsx)("ul", {
                        className: "mt-8 mb-0 p-0 list-none",
                        children: t.map(((e, i) => (0, o.jsx)("li", {
                            className: l()({
                                "dl-margin-b-8": i < t.length - 1
                            }),
                            children: (0, o.jsxs)("div", {
                                className: "flex flex-row gap-x-4 items-center",
                                children: [(0, o.jsx)("div", {
                                    className: "self-start mt-4",
                                    children: (0, o.jsx)(a.Z, {
                                        name: e.icon,
                                        color: "neutral-130"
                                    })
                                }), (0, o.jsxs)("div", {
                                    children: [(0, o.jsx)(r.Z, {
                                        component: "p",
                                        color: "neutral-130",
                                        children: e.label
                                    }), e.sublabel && (0, o.jsx)(r.Z, {
                                        component: "p",
                                        color: "neutral-130",
                                        children: e.sublabel
                                    })]
                                })]
                            })
                        }, `recap-item-${e.label}`)))
                    })]
                })
            }
        },
        216535: (e, t, i) => {
            i.d(t, {
                Z: () => c
            });
            var o = i(785893),
                n = i(845126),
                a = i(453040),
                r = i(496486),
                s = i(977954),
                l = i.n(s);
            const c = e => {
                let {
                    appointmentDateTime: t
                } = e;
                return (0, o.jsxs)("div", {
                    className: "flex flex-row dl-background-color-gray-dark px-8 gap-16 dl-rounded-borders-t",
                    children: [(0, o.jsxs)("div", {
                        className: "flex flex-row items-center min-h-40 gap-8",
                        children: [(0, o.jsx)(n.Z, {
                            name: "regular/calendar",
                            color: "white"
                        }), (0, o.jsx)(a.Z, {
                            component: "p",
                            color: "white",
                            uiStyle: "body-s-regular",
                            className: "js-appointment-recap-card-date",
                            children: (0, r.upperFirst)(l()(t).localizeTimeToParisTimeZone("date.precise"))
                        })]
                    }), (0, o.jsxs)("div", {
                        className: "flex flex-row items-center min-h-40 gap-8",
                        children: [(0, o.jsx)(n.Z, {
                            name: "regular/clock",
                            color: "white"
                        }), (0, o.jsx)(a.Z, {
                            component: "p",
                            color: "white",
                            uiStyle: "body-s-regular",
                            className: "js-appointment-recap-card-time",
                            children: l()(t).localizeTimeToParisTimeZone("time.precise")
                        })]
                    })]
                })
            }
        },
        669276: (e, t, i) => {
            i.d(t, {
                Z: () => s
            });
            var o = i(785893),
                n = i(528846),
                a = i(845126),
                r = i(453040);
            const s = e => {
                let {
                    displayHospitalIcon: t,
                    onClickCardTitle: i,
                    pictureUrl: s,
                    regulationSector: l,
                    subtitle: c,
                    title: d
                } = e;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)("div", {
                        className: "flex flex-row items-center p-16",
                        onClick: i,
                        children: [s && s.length > 0 && (0, o.jsx)("div", {
                            className: "self-start mt-4 dl-margin-r-12",
                            children: (0, o.jsx)(n.Z, {
                                src: s,
                                rounded: !0,
                                alt: "",
                                height: "40",
                                width: "40"
                            })
                        }), (0, o.jsxs)("div", {
                            children: [(0, o.jsx)(r.Z, {
                                uiStyle: "title-s-bold",
                                component: "p",
                                color: "neutral-150",
                                children: d
                            }), (0, o.jsxs)("div", {
                                className: "flex flex-row dl-column-gap-xs items-center",
                                children: [t && (0, o.jsx)("div", {
                                    className: "self-start mt-4",
                                    children: (0, o.jsx)(a.Z, {
                                        name: "regular/hospital",
                                        color: "neutral-130",
                                        "data-test-id": "hospital-icon"
                                    })
                                }), (0, o.jsx)(r.Z, {
                                    component: "p",
                                    color: "neutral-130",
                                    children: c
                                })]
                            })]
                        })]
                    }), l && (0, o.jsx)("div", {
                        className: "px-16 pb-16",
                        children: (0, o.jsx)(r.Z, {
                            component: "p",
                            color: "neutral-090",
                            children: l
                        })
                    })]
                })
            }
        },
        845634: (e, t, i) => {
            i.d(t, {
                Z: () => d
            });
            var o = i(785893),
                n = i(445884),
                a = i(795361),
                r = i(990626),
                s = i(179522),
                l = i(471667);
            const c = e => {
                    let {
                        onTap: t,
                        dataTest: i,
                        text: n
                    } = e;
                    return (0, o.jsx)(s.Z, {
                        size: "medium",
                        border: "all",
                        rounded: !0,
                        onTap: t,
                        "data-test": i,
                        children: (0, o.jsx)(s.Z.Content, {
                            children: (0, o.jsx)(s.Z.Description, {
                                children: (0, o.jsx)(l.Z, {
                                    text: n
                                })
                            })
                        })
                    })
                },
                d = e => {
                    let {
                        onNewPatientSelect: t
                    } = e;
                    const {
                        createTrackingEventWithContext: i
                    } = (0, a.Z)(), s = e => {
                        i({
                            name: e ? "new_patient_answer_no" : "new_patient_answer_yes",
                            additionalDetails: {
                                is_appointment_request_enabled: (0, r.cr)("patient_appointment_requests")
                            }
                        }), t(e)
                    };
                    return (0, o.jsxs)("div", {
                        children: [(0, o.jsx)(c, {
                            onTap: () => s(!1),
                            dataTest: "not-new-patient",
                            text: n.Z.t("common.yes")
                        }), (0, o.jsx)(c, {
                            onTap: () => s(!0),
                            dataTest: "is-new-patient",
                            text: n.Z.t("common.no")
                        })]
                    })
                }
        },
        760616: (e, t, i) => {
            i.d(t, {
                Z: () => Ki
            });
            var o = i(785893),
                n = i(985882),
                a = i(414293),
                r = i.n(a),
                s = i(396693),
                l = i(5212),
                c = i(397745),
                d = i(445884),
                p = i(453040),
                u = i(439390),
                m = i(977954),
                v = i.n(m),
                _ = i(639693),
                h = i.n(_),
                g = i(711700),
                f = i.n(g),
                b = i(883764);
            const x = ["specialityId", "placeId", "practitionerId", "motiveIds", "slot"],
                S = ["placeId", "motiveIds", "slot"],
                y = ["specialityId", "telehealth", "placeId", "practitionerId", "motiveIds", "slot"],
                I = ["telehealth", "placeId", "motiveIds", "slot"],
                k = e => {
                    let {
                        profile: t
                    } = e;
                    var i, o;
                    return {
                        details: (i = t.organization, o = t.telehealth, i ? o ? y : x : o ? I : S)
                    }
                },
                j = {
                    telehealth: e => e.telehealth ? {
                        label: d.Z.t("patient_mobile.root.profiles.booking.telehealth.video_appointment")
                    } : void 0,
                    specialityId: (e, t) => {
                        const i = t.specialities.find((t => {
                            let {
                                id: i
                            } = t;
                            return i === e.specialityId
                        }));
                        return i && {
                            label: i.name
                        }
                    },
                    placeId: (e, t) => {
                        if (e.telehealth) return;
                        if ("NO_PREFERENCE" === e.placeId) return {
                            label: d.Z.t("patient_mobile.root.profiles.booking.practices.no_preference")
                        };
                        const i = t.places.find((t => {
                            let {
                                id: i
                            } = t;
                            return i === e.placeId
                        }));
                        return i && {
                            label: `${i.address}, ${i.zipcode} ${i.city}`
                        }
                    },
                    motiveIds: (e, t) => {
                        const i = e.motiveIds && e.motiveIds[0],
                            o = t.visit_motives.find((e => {
                                let {
                                    id: t
                                } = e;
                                return t === i
                            }));
                        return o && {
                            label: o.name
                        }
                    },
                    practitionerId: (e, t) => {
                        if ("NO_PREFERENCE" === e.practitionerId) return {
                            label: d.Z.t("patient_mobile.root.profiles.booking.practitioners.no_preference")
                        };
                        const i = t.practitioners.find((t => {
                            let {
                                id: i
                            } = t;
                            return i === e.practitionerId
                        }));
                        return i && {
                            label: i.name_with_title
                        }
                    },
                    slot: e => e.slot ? {
                        label: f()(`${v()(e.slot).localize("dddd DD MMMM YYYY")} \u2022 ${v()(e.slot).localize("HH:mm")}`)
                    } : void 0
                },
                Z = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i,
                        profile: o
                    } = e;
                    const {
                        details: n
                    } = k({
                        profile: o
                    }), a = (e => {
                        var t;
                        return (null === (t = e.avatar_picture) || void 0 === t ? void 0 : t.public_id) && (0, b.Z)(e.avatar_picture.public_id, "w_40,h_40,c_fill,g_face")
                    })(o), r = ((e, t, i) => h()(e.filter((e => void 0 !== t[e] && j[e])).map((e => {
                        const o = j[e],
                            n = o && o(t, i);
                        return "telehealth" === e || n || window.crashReporter.captureException(new Error(`[BYP] No value for ${e}`)), n
                    }))).map((e => ({
                        icon: "regular/check",
                        ...e
                    }))))(n, i, t);
                    return {
                        pictureUrl: a,
                        title: o.name_with_title,
                        subtitle: o.subtitle,
                        displayHospitalIcon: o.organization,
                        appointmentDetails: r
                    }
                },
                T = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i,
                        profile: n
                    } = e;
                    const a = Z({
                        bookingInfo: t,
                        bookingState: i,
                        profile: n
                    });
                    return (0, o.jsx)(u.default, {
                        profileId: n.id,
                        ...a
                    })
                };
            var N = i(552691),
                w = i(545763),
                E = i(845126),
                P = i(940919),
                D = i(294184),
                C = i.n(D),
                M = i(184481),
                R = i(795361);
            var z = i(546159);
            const O = e => {
                var t;
                let {
                    profile: i
                } = e;
                return (0, o.jsx)(z.Z, {
                    pictureUrl: null !== i && void 0 !== i && null !== (t = i.avatar_picture) && void 0 !== t && t.public_id ? (0, b.Z)(i.avatar_picture.public_id, "w_138,h_138,c_fill,g_face") : null,
                    title: i.name_with_title,
                    subtitle: d.Z.t("patient_mobile.root.profiles.booking.title")
                })
            };
            var A;
            const B = (A = e => {
                    let {
                        onBack: t,
                        profile: i,
                        hideBackButton: n,
                        displayDropShadow: a
                    } = e;
                    return (0, c.s)() ? (0, o.jsx)(N.Z, {
                        large: !0,
                        title: (0, o.jsx)(O, {
                            profile: i
                        }),
                        titleComponent: "h1",
                        className: C()({
                            "shadow-xl": a
                        }),
                        children: !n && (0, o.jsx)(P.Z, {
                            position: "left",
                            size: "medium",
                            onTap: t,
                            title: d.Z.t("common.actions.back"),
                            icon: (0, o.jsx)(E.Z, {
                                name: "chevron-left",
                                color: "white"
                            })
                        })
                    }) : n ? null : (0, o.jsx)(w.Z, {
                        leftIcon: "regular/arrow-left",
                        onClick: t,
                        uiStyle: "small-light",
                        children: d.Z.t("common.actions.previous_step")
                    })
                }, e => {
                    let {
                        currentStep: t,
                        goToPreviousStep: i,
                        ...n
                    } = e;
                    const {
                        createTrackingEventWithContext: a
                    } = (0, R.Z)(), r = (0, M.useCallback)((() => {
                        a({
                            name: "patient_go_back",
                            additionalDetails: {
                                current_step: t
                            }
                        })
                    }), [t]);
                    return (0, M.useEffect)((() => (window.addEventListener("popstate", r), () => setTimeout((() => window.removeEventListener("popstate", r))))), [r]), (0, o.jsx)(A, { ...n,
                        onBack: () => i(r)
                    })
                }),
                $ = e => {
                    let {
                        hasPreviousStep: t
                    } = e;
                    return {
                        hideBackButton: !t && (0, l.dm)()
                    }
                };
            var W = i(581082),
                L = i(990626);
            const F = () => {
                    const {
                        useExperience: e
                    } = (0, M.useContext)(W.ZP), {
                        included: t,
                        experienceReady: i
                    } = e(L.ZP.DUMMY_AB_TEST_DROP_SHADOW_IN_PARTNERS_FUNNEL_EXPERIENCE, (0, l.dm)());
                    return {
                        displayDropShadow: Boolean(i && t)
                    }
                },
                H = e => {
                    let {
                        profile: t,
                        goToPreviousStep: i,
                        currentStep: n,
                        hasPreviousStep: a
                    } = e;
                    const {
                        hideBackButton: r
                    } = $({
                        hasPreviousStep: a
                    }), {
                        displayDropShadow: s
                    } = F();
                    return (0, o.jsx)(B, {
                        profile: t,
                        goToPreviousStep: i,
                        currentStep: n,
                        hideBackButton: r,
                        displayDropShadow: s
                    })
                },
                q = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i,
                        children: n,
                        currentStep: a,
                        goToPreviousStep: r,
                        hasPreviousStep: s,
                        profile: l
                    } = e;
                    return (0, o.jsxs)("div", {
                        className: "dl-flex-column my-48 dl-align-self-center dl-width-100 dl-max-width-1032 px-24",
                        children: [(0, o.jsx)("div", {
                            children: (0, o.jsx)(p.Z, {
                                component: "h1",
                                uiStyle: "title-l-bold",
                                children: d.Z.t("profiles.agendas.title")
                            })
                        }), (0, o.jsx)("div", {
                            className: "mt-8",
                            children: (0, o.jsx)(p.Z, {
                                component: "p",
                                children: d.Z.t("profiles.agendas.subtitle")
                            })
                        }), (0, o.jsxs)("div", {
                            className: "mt-24 dl-flex-row dl-column-gap-xxl",
                            children: [(0, o.jsxs)("div", {
                                className: "slot-selection-funnel-wrapper-l-pannel dl-rounded-borders dl-white-bg",
                                children: [(0, o.jsx)(H, {
                                    profile: l,
                                    goToPreviousStep: r,
                                    currentStep: a,
                                    hasPreviousStep: s
                                }), n]
                            }), (0, o.jsx)("div", {
                                className: "slot-selection-funnel-wrapper-r-pannel dl-align-self-flex-start",
                                children: (0, o.jsx)(T, {
                                    bookingInfo: t,
                                    bookingState: i,
                                    profile: l
                                })
                            })]
                        })]
                    })
                };
            var V = i(712722),
                U = i(878038);
            const G = e => {
                    let {
                        profile: t,
                        currentStep: i,
                        hasPreviousStep: n,
                        goToPreviousStep: a,
                        children: r
                    } = e;
                    return (0, o.jsxs)(V.Z, {
                        children: [(0, o.jsx)(H, {
                            profile: t,
                            goToPreviousStep: a,
                            currentStep: i,
                            hasPreviousStep: n
                        }), (0, o.jsx)(U.Z, {
                            className: "dl-justify-center",
                            children: (0, o.jsx)(V.Z, {
                                className: "dl-max-width-720",
                                children: r
                            })
                        })]
                    })
                },
                Y = () => ({
                    wrapperComponent: (0, c.s)() ? G : q
                }),
                K = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i,
                        profile: n,
                        currentStep: a,
                        hasPreviousStep: r,
                        goToPreviousStep: s,
                        children: l
                    } = e;
                    const {
                        wrapperComponent: c
                    } = Y();
                    return (0, o.jsx)(c, {
                        bookingInfo: t,
                        bookingState: i,
                        profile: n,
                        goToPreviousStep: s,
                        currentStep: a,
                        hasPreviousStep: r,
                        children: l
                    })
                };
            var Q = i(24553),
                X = i(861800),
                J = i(139102),
                ee = i(329347),
                te = i(710270),
                ie = i(580163),
                oe = i(516590),
                ne = i(747317),
                ae = i(437124),
                re = i(975290),
                se = i(898116),
                le = i(793748);
            const ce = e => {
                let {
                    appointment: t,
                    motives: i,
                    landlineNumber: n,
                    onHide: a,
                    profileId: r
                } = e;
                const s = (0, se.Z)(),
                    c = (0, le.Z)(),
                    [d, p] = (0, M.useState)([]),
                    u = !(null === t || void 0 === t || !t.appointment_rule_messages.length);
                (0, M.useEffect)((() => {
                    t && t.id && p(t.appointment_rule_messages || [])
                }), [t && t.id]);
                const {
                    new_search_params: m
                } = t || {}, v = i.find((e => e.id === (null === t || void 0 === t ? void 0 : t.visit_motive_id)));
                return (0, o.jsx)(re.Z, {
                    show: u,
                    onHide: () => {
                        ae.ZP.delete("/appointments/destroy_temporary"), a()
                    },
                    appointmentRules: d,
                    onAppointmentRuleChange: e => p(e),
                    visitMotive: v || {},
                    landlineNumber: n,
                    profileId: r,
                    onValid: () => {
                        t.redirect()
                    },
                    newSearchParams: m,
                    onHideBlockingModal: () => {
                        c((0, l.dm)() ? `${s}/booking` : s, (0, l.rl)() || (0, l.dm)())
                    }
                })
            };
            var de = i(241469),
                pe = i(420391),
                ue = i(778075),
                me = i(734139);
            const ve = e => {
                let {
                    slot: t,
                    onSubmit: i,
                    onCancel: n
                } = e;
                const a = null === t || void 0 === t ? void 0 : t.video,
                    {
                        createTrackingEventWithContext: r
                    } = (0, R.Z)();
                return (0, M.useEffect)((() => {
                    t && r({
                        name: "display_alternative_slot_confirmation",
                        additionalDetails: {
                            alternative_type: me.H
                        }
                    })
                }), [t]), (0, o.jsx)(ue.Z, {
                    title: a ? d.Z.t("doctor_common.telehealth.title") : d.Z.t("patient_common.root.telehealth.physical_title"),
                    dismissText: d.Z.t("common.actions.back"),
                    onDismiss: n,
                    acceptText: d.Z.t("common.actions.confirm"),
                    onAccept: i,
                    show: !!t,
                    children: (0, o.jsx)(p.Z, {
                        className: "dl-text-center",
                        children: d.Z.t(a ? "patient_common.root.telehealth.confirm_vc_dialog" : "patient_common.root.telehealth.confirm_physical_dialog")
                    })
                })
            };
            var _e = i(913038),
                he = i(552365),
                ge = i(931381),
                fe = i(629161),
                be = i(441609),
                xe = i.n(be),
                Se = i(435161),
                ye = i.n(Se);
            const Ie = "firstSlot",
                ke = "secondSlot",
                je = (e, t) => {
                    if (xe()(e)) return [];
                    if (e.some(ge.SB)) {
                        const i = ye()(e, "visit_motive_category_id");
                        return t.filter((e => e.telehealth && i.includes(e.visit_motive_category_id)))
                    }
                    return []
                };

            function Ze(e, t) {
                let {
                    isNewPatient: i,
                    motiveIds: o,
                    placeId: n,
                    specialityId: a,
                    slot: r,
                    secondSlot: s,
                    practitionerId: l,
                    insuranceSector: c,
                    insuranceSectorEnabled: d,
                    telehealth: p
                } = t, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ie;
                const {
                    agendas: m,
                    places: v,
                    profile: _,
                    visit_motives: h,
                    vaccination_center: g
                } = e, f = (0, he.$)(h, o || []), b = (0, _e.$i)(m, v, {
                    specialityId: a,
                    placeId: n,
                    practitionerId: l,
                    insuranceSector: d ? c : void 0,
                    visitMotives: f
                });
                if (xe()(b)) return [{
                    bookingNoSearchResult: !0
                }];
                const x = h.some((e => e.telehealth)),
                    S = {
                        isNewPatient: i,
                        newPatient: void 0,
                        visitMotiveIds: o ? o.sort() : [],
                        telehealth: f.some((e => e.telehealth)),
                        slot: r,
                        secondSlot: s,
                        insuranceSector: c,
                        practitionerId: l,
                        practiceIds: (0, fe.xw)(v, b, n),
                        insuranceSectorEnabled: d,
                        agendaIds: (0, he.H)(b, "id"),
                        bookingDisabled: b.every((e => e.booking_disabled)),
                        bookingTemporaryDisabled: b.every((e => e.booking_temporary_disabled)),
                        landlineNumber: b[0].landline_number,
                        profileId: _.id,
                        isOrganization: Boolean(_.organization),
                        telehealthFeatureEnabled: x,
                        forCovidVaccination: (null === f || void 0 === f ? void 0 : f.some((e => e.vaccination_motive))) && (null === f || void 0 === f ? void 0 : f.some((e => e.covid_vaccination_set_appointment_organization))),
                        firstShotMotive: null === f || void 0 === f ? void 0 : f.some((e => e.first_shot_motive)),
                        secondSlotAvailability: u === ke,
                        vaccinationDaysRange: (null === f || void 0 === f ? void 0 : f.length) > 0 ? f[0].vaccination_days_range : void 0,
                        vaccinationCenter: g
                    };
                if (!x || p) return [S];
                const y = je(f, h),
                    I = (0, he.H)(y, "id"),
                    k = (0, _e.$i)(m, v, {
                        specialityId: a,
                        visitMotives: y,
                        practitionerId: l,
                        insuranceSector: d ? c : void 0
                    }).map((e => e.id));
                return xe()(y) || xe()(k) ? [S] : [S, { ...S,
                    telehealth: !p,
                    agendaIds: k,
                    visitMotiveIds: I
                }]
            }

            function Te(e, t) {
                switch (t.type) {
                    case "CREATE_APPT":
                        return { ...e,
                            showBackdrop: !0,
                            slot: null
                        };
                    case "SHOW_RULE_DIALOG":
                        return { ...e,
                            appointment: t.appointment,
                            showBackdrop: !1
                        };
                    case "HIDE_RULE_DIALOG":
                        return { ...e,
                            appointment: null
                        };
                    case "SHOW_ERROR_DIALOG":
                        return { ...e,
                            showBackdrop: !0,
                            slot: void 0,
                            error: t.error
                        };
                    case "HIDE_ERROR_DIALOG":
                        return { ...e,
                            error: null,
                            slot: void 0,
                            showBackdrop: !1
                        };
                    case "WARN_UNAVAILABLE_SLOT":
                        return { ...e,
                            error: null,
                            showBackdrop: !1,
                            slot: void 0,
                            unavailableSlots: [...e.unavailableSlots, t.slot]
                        };
                    case "SHOW_CONFIRMATION_DIALOG":
                        return { ...e,
                            showConfirmationDialog: !0,
                            slot: t.slot
                        };
                    case "HIDE_CONFIRMATION_DIALOG":
                        return { ...e,
                            showConfirmationDialog: !1,
                            slot: null
                        };
                    case "REDIRECT":
                        return { ...e,
                            appointment: null,
                            showBackdrop: !0
                        };
                    default:
                        throw new Error
                }
            }
            const Ne = e => {
                    let {
                        bookingShow: t,
                        bookingState: i,
                        secondSlot: n,
                        firstSlotAppointmentId: a,
                        setFirstSlotAppointmentId: r,
                        goToNextStep: s,
                        goToPreviousStep: c,
                        setDisplayTitle: p
                    } = e;
                    const u = (0, M.useRef)(!1),
                        m = (0, ie.ZP)(),
                        {
                            createTrackingEventWithContext: v
                        } = (0, R.Z)(),
                        _ = (0, le.Z)(),
                        [h, g] = Ze(t, i, n ? ke : Ie),
                        f = t.visit_motives.find((e => {
                            var t;
                            return e.id === (null === (t = h.visitMotiveIds) || void 0 === t ? void 0 : t[0])
                        })),
                        b = (null === f || void 0 === f ? void 0 : f.vaccination_motive) && (null === f || void 0 === f ? void 0 : f.covid_vaccination_set_appointment_organization),
                        x = null === f || void 0 === f ? void 0 : f.first_shot_motive,
                        S = x && (null === f || void 0 === f ? void 0 : f.vaccination_days_range) > 0 && !n,
                        [{
                            appointment: y,
                            unavailableSlots: I,
                            error: k,
                            slot: j,
                            showBackdrop: Z,
                            showConfirmationDialog: T
                        }, N] = (0, M.useReducer)(Te, {
                            unavailableSlots: []
                        }),
                        w = (0, te.Z)({
                            url: "/appointments.json",
                            method: "post",
                            trigger: "create",
                            onFailure: () => {
                                u.current = !1, alert(d.Z.t("common.error"))
                            },
                            onSuccess: e => {
                                let {
                                    data: t,
                                    input: i
                                } = e;
                                if (u.current = !1, t.error) {
                                    if (b) {
                                        var o, c, p;
                                        m({
                                            uiStyle: "info",
                                            title: d.Z.t("patient_common.root.profiles.booking.availabilities.unavailable_slot_vaccination_error_title")
                                        });
                                        const e = n ? i.second_slot : i.appointment.start_date,
                                            t = {
                                                profile_id: null === (o = i.appointment) || void 0 === o ? void 0 : o.profile_id,
                                                start_date: e,
                                                visit_motive_id: null === (c = i.appointment) || void 0 === c ? void 0 : c.visit_motive_ids,
                                                first_shot_appointment_id: n ? a : null
                                            };
                                        (0, oe.ZP)({
                                            name: n ? "second_shot_slot_unavailable" : "first_shot_slot_unavailable",
                                            itemId: null === (p = i.appointment) || void 0 === p ? void 0 : p.profileId,
                                            itemType: ne.i.PROFILE,
                                            details: t
                                        }), N({
                                            type: "WARN_UNAVAILABLE_SLOT",
                                            slot: e
                                        })
                                    } else N({
                                        type: "SHOW_ERROR_DIALOG",
                                        error: t.error
                                    });
                                    return
                                }
                                r(t.id);
                                const v = () => {
                                    N({
                                        type: "REDIRECT"
                                    }), S ? s({
                                        slot: t.start_date
                                    }) : _(t.redirection, !(0, l.dm)() && !t.doctor_booking && (0, l.rl)())
                                };
                                t.appointment_rule_messages.length && !S ? N({
                                    type: "SHOW_RULE_DIALOG",
                                    appointment: { ...t,
                                        redirect: v
                                    }
                                }) : v()
                            }
                        }),
                        {
                            landlineNumber: E,
                            telehealthFeatureEnabled: P,
                            profileId: D
                        } = h,
                        C = (e, t) => {
                            const {
                                agendaIds: i,
                                visitMotiveIds: o,
                                practiceIds: a,
                                profileId: r,
                                isNewPatient: s,
                                insuranceSector: l,
                                specialityId: c,
                                slot: d
                            } = t;
                            u.current || (u.current = !0, N({
                                type: "CREATE_APPT"
                            }), w.create({
                                appointment: {
                                    source_action: "profile",
                                    start_date: n ? d : e.start_date,
                                    profile_id: r,
                                    insurance_sector: l,
                                    visit_motive_ids: o.join("-"),
                                    new_patient: s
                                },
                                second_slot: n && x && e.start_date,
                                agenda_ids: i.join("-"),
                                speciality_id: c,
                                practice_ids: a
                            }))
                        };
                    return (0, o.jsxs)(o.Fragment, {
                        children: [" ", (0, o.jsx)(ee.Z, {
                            show: Z,
                            loader: !k,
                            uiStyle: "light"
                        }), (0, o.jsx)(de.Z, {
                            show: !!k,
                            error: k,
                            onHide: () => N({
                                type: "HIDE_ERROR_DIALOG"
                            }),
                            forCovidVaccination: b
                        }), (0, o.jsx)(ce, {
                            appointment: y,
                            motives: t.visit_motives,
                            landlineNumber: E,
                            profileId: D,
                            onHide: () => {
                                n && c(), N({
                                    type: "HIDE_RULE_DIALOG"
                                })
                            }
                        }), g && T && (0, o.jsx)(ve, {
                            appointment: y,
                            slot: j,
                            onSubmit: () => C(j, g),
                            onCancel: () => N({
                                type: "HIDE_CONFIRMATION_DIALOG"
                            })
                        }), (0, o.jsx)(pe.Z, {
                            funnelData: h,
                            alternativeData: g,
                            bookingShow: t,
                            secondSlot: n,
                            forCovidVaccination: b,
                            isTelehealthPractitioner: P,
                            unavailableSlots: I,
                            slot: j,
                            firstSlotAppointmentId: a,
                            onSelectSlot: (e, t) => {
                                const i = n ? "second_availabilities_choose_slot" : "availabilitiesChooseSlot",
                                    o = n ? {
                                        appointment_id: a
                                    } : {
                                        is_appointment_request_enabled: (0, L.cr)("patient_appointment_requests"),
                                        is_appointment_request: t
                                    };
                                v({
                                    name: i,
                                    additionalDetails: o
                                });
                                const r = h.telehealth ? !e.video : e.video;
                                g && r ? N({
                                    type: "SHOW_CONFIRMATION_DIALOG",
                                    slot: e
                                }) : C(e, h)
                            },
                            setDisplayTitle: p
                        })]
                    })
                },
                we = e => (0, o.jsx)(Ne, { ...e
                }),
                Ee = (e, t) => (0, J.L)({
                    forCovidVaccination: null === e || void 0 === e ? void 0 : e.forCovidVaccination,
                    secondShotAppointment: !1,
                    secondSlot: t,
                    vaccinationDaysRange: null === e || void 0 === e ? void 0 : e.vaccinationDaysRange,
                    bookingDisabled: null === e || void 0 === e ? void 0 : e.bookingDisabled,
                    bookingTemporaryDisabled: null === e || void 0 === e ? void 0 : e.bookingTemporaryDisabled
                }),
                Pe = {
                    name: "availabilities",
                    component: e => (0, o.jsx)(we, { ...e
                    }),
                    computeStepMetaData: (e, t) => {
                        var i;
                        const o = Ze(e, t, Ie),
                            n = null !== (i = o[0]) && void 0 !== i && i.hasOwnProperty("firstShotMotive") ? o[0] : void 0;
                        return {
                            shouldRender: !0,
                            defaultValues: {},
                            title: Ee(n, null === n || void 0 === n ? void 0 : n.secondSlot)
                        }
                    }
                },
                De = {
                    name: "second-availabilities",
                    component: e => (0, o.jsx)(we, { ...e,
                        secondSlot: !0
                    }),
                    computeStepMetaData: (e, t) => {
                        var i;
                        const o = Ze(e, t, ke),
                            n = null !== (i = o[0]) && void 0 !== i && i.hasOwnProperty("firstShotMotive") ? o[0] : void 0;
                        return {
                            shouldRender: !r()(null === n || void 0 === n ? void 0 : n.firstShotMotive),
                            defaultValues: {},
                            title: Ee(n, ke),
                            subtitle: null !== n && void 0 !== n && n.forCovidVaccination ? d.Z.t("common.mobile.availabilities.second_shot_information", {
                                days: null === n || void 0 === n ? void 0 : n.vaccinationDaysRange
                            }) : void 0
                        }
                    }
                };
            var Ce = i(650337),
                Me = i(359176);
            var Re = i(347802);
            const ze = e => {
                    let {
                        bookingInfo: t,
                        setDisplayTitle: i
                    } = e;
                    return (0, M.useEffect)((() => {
                        i && i(!1)
                    }), []), (0, o.jsx)("div", {
                        className: "dl-full-height",
                        children: (0, o.jsx)(Re.Z, {
                            places: t.places
                        })
                    })
                },
                Oe = e => {
                    let {
                        bookingInfo: t,
                        setDisplayTitle: i
                    } = e;
                    return (0, o.jsx)(ze, {
                        bookingInfo: t,
                        setDisplayTitle: i
                    })
                },
                Ae = {
                    name: "block-new-patient",
                    component: e => (0, o.jsx)(Oe, { ...e
                    }),
                    computeStepMetaData: (e, t) => ({
                        shouldRender: function(e, t) {
                            let {
                                visit_motives: i,
                                agendas: o,
                                places: n,
                                profile: a
                            } = e, {
                                isNewPatientBlocked: r,
                                practitionerId: s,
                                specialityId: l,
                                placeId: c,
                                insuranceSector: d,
                                insuranceSectorEnabled: p,
                                telehealth: u,
                                isNewPatient: m,
                                motiveIds: v,
                                motiveCategoryIds: _
                            } = t;
                            if (r) return !0;
                            if (!m) return !1;
                            const h = (0, _e.$i)(o, n, {
                                    practitionerId: s,
                                    specialityId: l,
                                    placeId: c,
                                    isOrganization: a.organization
                                }),
                                g = (0, Ce.b)(i, {
                                    agendas: h,
                                    insuranceSector: p ? d : void 0,
                                    specialityId: l,
                                    telehealth: u,
                                    isNewPatient: m,
                                    motiveIds: v,
                                    motiveCategoryIds: _
                                });
                            return (0, Me.Yn)(g, d)
                        }(e, t),
                        defaultValues: {}
                    })
                },
                Be = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i,
                        externalParameters: n,
                        goToNextStep: a,
                        goToPreviousStep: r,
                        hasPreviousStep: s,
                        initialStep: c,
                        profile: d,
                        slotSelectionFunnelExperience: p,
                        steps: u
                    } = e;
                    const [m, v] = (0, M.useState)(), [_, h] = (0, M.useState)(!0), {
                        createTrackingEventWithContext: g
                    } = (0, R.Z)();
                    return (0, M.useEffect)((() => {
                        g({
                            name: "patient_slot_selection_funnel_display"
                        })
                    }), []), (0, o.jsxs)(Q.Routes, {
                        children: [u.map((e => {
                            let {
                                name: c,
                                component: u,
                                computeStepMetaData: g
                            } = e;
                            const f = g(t, i, n),
                                b = (0, o.jsx)(X.Z, {
                                    bookingInfo: t,
                                    title: f.title,
                                    displayTitle: c !== Pe.name && c !== Ae.name || _,
                                    subtitle: f.subtitle,
                                    autoFocus: s,
                                    isRelative: (0, l.Zz)() && !(0, l.dm)(),
                                    transparentBackground: (0, l.Zz)() && !(0, l.dm)(),
                                    children: (0, o.jsx)(u, {
                                        bookingInfo: t,
                                        bookingShow: t,
                                        bookingState: i,
                                        profile: d,
                                        firstSlotAppointmentId: m,
                                        setFirstSlotAppointmentId: v,
                                        goToNextStep: a,
                                        goToPreviousStep: r,
                                        slotSelectionFunnelExperience: p,
                                        setDisplayTitle: c === Pe.name || c === Ae.name ? h : void 0
                                    })
                                });
                            return (0, o.jsx)(Q.Route, {
                                path: c,
                                element: b
                            }, c)
                        })), c && (0, o.jsx)(Q.Route, {
                            path: "/",
                            element: (0, o.jsx)(Q.Navigate, {
                                replace: !0,
                                to: {
                                    pathname: c.stepName,
                                    search: c.search
                                }
                            })
                        })]
                    })
                };
            var $e = i(752646),
                We = i(170226);
            const Le = e => {
                const t = (0, $e.m)(e.organization),
                    i = null === e || void 0 === e ? void 0 : e.id;
                return {
                    trackedDetails: { ...(0, We.S)(),
                        referrer: document.referrer,
                        profile_type: null !== e && void 0 !== e && e.organization ? "organization" : "practitioner",
                        profile_id: null === e || void 0 === e ? void 0 : e.id
                    },
                    trackedItemId: i,
                    trackedItemType: t
                }
            };
            var Fe = i(126480),
                He = i(421073),
                qe = i(78599),
                Ve = i(52672),
                Ue = i(837812),
                Ge = i(313311),
                Ye = i.n(Ge),
                Ke = i(708221),
                Qe = i(239417),
                Xe = i(174976);
            var Je = i(150361),
                et = i.n(Je),
                tt = i(535937),
                it = i.n(tt);
            const ot = (e, t, i, o, n, a, s, l) => {
                    const c = et()(t);
                    let d = n;
                    for (; d >= 0 && d < i.length;) {
                        if (o.computeStepMetaData(e, c, l, s).shouldRender) return {
                            step: o,
                            bookingState: c
                        };
                        const t = i[d].computeStepMetaData(e, c, l, s);
                        if (t.shouldRender) return {
                            step: i[d],
                            bookingState: c
                        };
                        const n = it()(t.defaultValues, (e => !r()(e)));
                        Object.assign(c, n), d += a
                    }
                },
                nt = (e, t, i, o, n, a, r, s, l) => {
                    const c = ((e, t) => t.findIndex((t => t.name === e)))(e, o);
                    if (-1 === c) return;
                    const d = l ? { ...i,
                        ...l
                    } : { ...i
                    };
                    return ot(t, d, o, n, c + a, a, r, s)
                };
            var at = i(225325),
                rt = i.n(at),
                st = i(189734),
                lt = i.n(st);

            function ct(e, t) {
                let {
                    agendas: i,
                    specialities: o,
                    places: n,
                    visit_motives: a,
                    profile: s
                } = e, {
                    placeId: l,
                    telehealth: c
                } = t;
                const d = (0, _e.$i)(i, n, {
                        placeId: l,
                        isOrganization: s.organization
                    }),
                    p = (0, Ce.b)(a, {
                        telehealth: c
                    }),
                    u = (0, he.H)(d, "speciality_id"),
                    m = !r()(c) ? rt()(p.map((e => {
                        let {
                            speciality_id: t
                        } = e;
                        return t
                    })), u) : u,
                    v = (0, he.$)(o, m);
                return lt()(v, [e => {
                    let {
                        name: t
                    } = e;
                    return t.toLowerCase()
                }])
            }
            const dt = e => {
                let {
                    bookingInfo: t,
                    bookingState: i
                } = e;
                const {
                    createTrackingEventWithContext: o
                } = (0, R.Z)();
                (0, M.useEffect)((() => {
                    o({
                        name: "specialityChoiceDisplay",
                        additionalDetails: {
                            is_appointment_request_enabled: (0, L.cr)("patient_appointment_requests")
                        }
                    })
                }), []);
                return {
                    stepData: ct(t, i)
                }
            };
            var pt = i(975990),
                ut = i(70679),
                mt = i(738502);
            const vt = e => {
                let {
                    children: t,
                    placeholder: i,
                    items: n,
                    field: a = (e => e.name),
                    ...r
                } = e;
                const [s, l] = (0, M.useState)(""), c = (0, mt.Z)(s, 0 === s.length ? 0 : 100), u = (0, M.useMemo)((() => {
                    const e = pt.Z.getQueryScore.bind(pt.Z, c);
                    return c ? n.reduce(((t, i) => {
                        const o = e(a(i));
                        return o > 0 && t.push({ ...i,
                            score: o
                        }), t
                    }), []).sort(((e, t) => t.score - e.score || a(e).localeCompare(a(t)))) : n
                }), [c]);
                return (0, o.jsxs)("div", {
                    children: [(0, o.jsx)(ut.Z, { ...r,
                        value: s,
                        onChange: l,
                        autoFocus: !0,
                        placeholder: i,
                        className: "dl-booking-autocomplete"
                    }), u && u.length ? t(u || [], c) : (0, o.jsx)(p.Z, {
                        align: "center",
                        uiStyle: "body-s-regular",
                        children: d.Z.t("common.no_results_for_search", {
                            search: c
                        })
                    })]
                })
            };
            var _t = i(179522),
                ht = i(471667);
            const gt = e => {
                    let {
                        speciality: t,
                        onTap: i,
                        searchTerm: n
                    } = e;
                    return (0, o.jsx)(_t.Z, {
                        border: "all",
                        rounded: !0,
                        onTap: i,
                        size: "medium",
                        "data-test": "speciality-list-item",
                        children: (0, o.jsx)(_t.Z.Description, {
                            children: (0, o.jsx)(ht.Z, {
                                query: n,
                                text: t.name
                            })
                        })
                    })
                },
                ft = e => {
                    let {
                        goToNextStep: t,
                        specialities: i,
                        searchTerm: n
                    } = e;
                    const {
                        createTrackingEventWithContext: a
                    } = (0, R.Z)();
                    return (0, o.jsx)("div", {
                        children: i.map((e => (0, o.jsx)(gt, {
                            speciality: e,
                            onTap: () => (e => {
                                let {
                                    id: i
                                } = e;
                                a({
                                    name: "patient_speciality_select",
                                    additionalDetails: {
                                        speciality_id: i,
                                        is_appointment_request_enabled: (0, L.cr)("patient_appointment_requests")
                                    }
                                }), t({
                                    specialityId: i
                                })
                            })(e),
                            searchTerm: n
                        }, e.name)))
                    })
                },
                bt = e => {
                    let {
                        goToNextStep: t,
                        specialities: i
                    } = e;
                    return (0, o.jsx)("div", {
                        children: i.length > 12 ? (0, o.jsx)(vt, {
                            placeholder: d.Z.t("patient_mobile.root.profiles.booking.specialities.placeholder"),
                            items: i,
                            children: (e, i) => (0, o.jsx)(ft, {
                                specialities: e,
                                goToNextStep: t,
                                searchTerm: i
                            })
                        }) : (0, o.jsx)(ft, {
                            specialities: i,
                            goToNextStep: t
                        })
                    })
                },
                xt = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i,
                        goToNextStep: n
                    } = e;
                    const {
                        stepData: a
                    } = dt({
                        bookingInfo: t,
                        bookingState: i
                    });
                    return (0, o.jsx)(bt, {
                        bookingInfo: t,
                        goToNextStep: n,
                        specialities: a
                    })
                },
                St = {
                    name: "specialities",
                    component: e => (0, o.jsx)(xt, { ...e
                    }),
                    computeStepMetaData: (e, t) => {
                        var i;
                        const o = ct(e, t);
                        return {
                            shouldRender: o.length > 1,
                            defaultValues: 1 === o.length ? {
                                specialityId: null === (i = o[0]) || void 0 === i ? void 0 : i.id
                            } : {},
                            title: d.Z.t("patient_mobile.root.profiles.booking.specialities.subtitle")
                        }
                    }
                };
            var yt = i(84741);
            var It = i(845634);
            const kt = e => {
                    let {
                        bookingInfo: t,
                        goToNextStep: i
                    } = e;
                    return (0, o.jsx)(It.Z, {
                        onNewPatientSelect: e => {
                            ! function(e) {
                                i({
                                    isNewPatient: e,
                                    isNewPatientBlocked: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                                })
                            }(e, !!e && (0, Me.Yn)(null === t || void 0 === t ? void 0 : t.visit_motives))
                        }
                    })
                },
                jt = () => {
                    const {
                        createTrackingEventWithContext: e
                    } = (0, R.Z)();
                    (0, M.useEffect)((() => {
                        e({
                            name: "new_patient_question_display",
                            additionalDetails: {
                                is_appointment_request_enabled: (0, L.cr)("patient_appointment_requests")
                            }
                        })
                    }), [])
                },
                Zt = e => {
                    let {
                        bookingInfo: t,
                        goToNextStep: i
                    } = e;
                    return jt(), (0, o.jsx)(kt, {
                        bookingInfo: t,
                        goToNextStep: i
                    })
                },
                Tt = {
                    name: "new-patient",
                    component: e => (0, o.jsx)(Zt, { ...e
                    }),
                    computeStepMetaData: (e, t) => {
                        const i = function(e, t) {
                            let {
                                visit_motives: i,
                                agendas: o,
                                places: n
                            } = e, {
                                specialityId: a,
                                insuranceSector: r
                            } = t;
                            const s = (0, _e.$i)(o, [], {
                                    specialityId: a
                                }),
                                l = (0, Me.Rd)(s, n),
                                c = (0, Ce.b)(i, {
                                    specialityId: a,
                                    motiveIds: l
                                });
                            return {
                                allMotivesBlockNewPatients: (0, Me.Yn)(c, r),
                                someMotivesBlockNewPatients: (0, Me.PT)(c)
                            }
                        }(e, t);
                        return {
                            shouldRender: Boolean(i.someMotivesBlockNewPatients || yt.Su.onProfile(e)),
                            defaultValues: {},
                            title: e.profile.organization ? d.Z.t("appointments.new_patient_step.title_organization", {
                                count: e.specialities.length
                            }) : d.Z.t("appointments.new_patient_step.title"),
                            subtitle: d.Z.t("appointments.new_patient_step.subtitle")
                        }
                    }
                };
            const Nt = e => {
                let {
                    goToNextStep: t
                } = e;
                const {
                    createTrackingEventWithContext: i
                } = (0, R.Z)(), n = (e, o) => {
                    o && i({
                        name: o
                    }), t({
                        telehealth: e
                    })
                };
                return (0, o.jsxs)("div", {
                    children: [(0, o.jsxs)(_t.Z, {
                        border: "all",
                        disabled: !1,
                        rounded: !0,
                        onTap: () => n(!0, "book_telehealth_from_booking"),
                        size: "medium",
                        "aria-label": d.Z.t("patient_mobile.root.profiles.details.book_in_video_a11y"),
                        children: [(0, o.jsx)(_t.Z.Icon, {
                            name: "solid/video-telehealth",
                            size: "medium",
                            className: "dl-margin-r-16"
                        }), (0, o.jsx)(_t.Z.Content, {
                            children: (0, o.jsx)(_t.Z.Description, {
                                children: (0, o.jsx)(p.Z, {
                                    children: d.Z.t("patient_mobile.root.profiles.booking.telehealth.video_appointment")
                                })
                            })
                        })]
                    }), (0, o.jsxs)(_t.Z, {
                        border: "all",
                        disabled: !1,
                        rounded: !0,
                        onTap: () => n(!1, "skip_telehealth"),
                        size: "medium",
                        "aria-label": d.Z.t("patient_mobile.root.profiles.details.book_at_practice_a11y"),
                        children: [(0, o.jsx)(_t.Z.Icon, {
                            name: "solid/house-medical",
                            color: "primary-110",
                            size: "medium",
                            className: "dl-margin-r-16"
                        }), (0, o.jsx)(_t.Z.Content, {
                            children: (0, o.jsx)(_t.Z.Description, {
                                children: (0, o.jsx)(p.Z, {
                                    children: d.Z.t("patient_mobile.root.profiles.booking.telehealth.physical_appointment")
                                })
                            })
                        })]
                    })]
                })
            };
            var wt = i(329765),
                Et = i(288802);
            const Pt = () => {
                    const {
                        createTrackingEventWithContext: e
                    } = (0, R.Z)();
                    (0, M.useEffect)((() => {
                        var t;
                        e({
                            name: "telehealth_modal_from_booking"
                        }), t = {
                            category: wt.INTERSTITIAL_PAW_VIEW_CATEGORY,
                            action: wt.INTERSTITIAL_PAW_TOUCHPOINT,
                            label: wt.INTERSTITIAL_PAW_LABEL
                        }, Et.Z.trackGtmEvent(t), e({
                            name: "videoConsultationChoiceDisplay"
                        })
                    }), [])
                },
                Dt = e => {
                    let {
                        bookingInfo: t,
                        goToNextStep: i
                    } = e;
                    return Pt(), (0, o.jsx)(Nt, {
                        bookingInfo: t,
                        goToNextStep: i
                    })
                },
                Ct = {
                    name: "telehealth-suggestion",
                    component: e => (0, o.jsx)(Dt, { ...e
                    }),
                    computeStepMetaData: (e, t) => {
                        const i = function(e, t) {
                                let {
                                    agendas: i,
                                    visit_motives: o,
                                    profile: n
                                } = e, {
                                    insuranceSectorEnabled: a,
                                    insuranceSector: r,
                                    practitionerId: s,
                                    specialityId: l
                                } = t;
                                const c = (0, _e.$i)(i, [], {
                                        isOrganization: n.organization,
                                        specialityId: l,
                                        visitMotives: o,
                                        insuranceSector: a ? r : void 0,
                                        practitionerId: s
                                    }),
                                    d = (0, fe.Bl)(c),
                                    p = (0, _e.wI)(c, d),
                                    u = o.filter((e => {
                                        let {
                                            id: t
                                        } = e;
                                        return p.includes(t)
                                    }));
                                return {
                                    telehealthMotives: u.filter((e => e.telehealth)),
                                    inPersonMotives: u.filter((e => !e.telehealth))
                                }
                            }(e, t),
                            o = i.telehealthMotives.length > 0 && i.inPersonMotives.length > 0,
                            n = 0 === i.inPersonMotives.length ? {
                                telehealth: !0
                            } : {
                                telehealth: !1
                            };
                        return {
                            shouldRender: o,
                            defaultValues: o ? {} : n,
                            title: d.Z.t("patient_mobile.root.profiles.booking.telehealth.subtitle")
                        }
                    }
                };
            var Mt = i(944908),
                Rt = i.n(Mt),
                zt = i(393386),
                Ot = i.n(zt),
                At = i(496486);

            function Bt(e, t) {
                return e.reduce(((e, i) => {
                    const {
                        visit_motive_ids: o,
                        practitioner_id: n
                    } = i;
                    if (n)
                        if (e[n]) e[n].visitMotiveIds = function(e, t, i) {
                            return Rt()(Ot()(e[t].visitMotiveIds, i))
                        }(e, n, o);
                        else {
                            const i = function(e, t) {
                                return t.find((t => t.id === e))
                            }(n, t);
                            i && (e[n] = {
                                visitMotiveIds: o,
                                practitioner: i
                            })
                        }
                    return e
                }), {})
            }

            function $t(e, t) {
                let {
                    agendas: i,
                    practitioners: o,
                    places: n,
                    profile: a,
                    visit_motives: r
                } = e, {
                    isNewPatient: s,
                    specialityId: l,
                    placeId: c,
                    motiveIds: d,
                    telehealth: p,
                    insuranceSector: u,
                    insuranceSectorEnabled: m
                } = t;
                const v = (0, Ce.b)(r, {
                        telehealth: p,
                        agendas: i,
                        insuranceSector: m ? u : void 0,
                        motiveIds: d
                    }),
                    _ = (0, _e.$i)(i, n, {
                        specialityId: l,
                        placeId: c,
                        insuranceSector: u,
                        visitMotives: v,
                        isBookingDisabled: !1
                    }),
                    h = Bt(_, o),
                    g = (0, Ce.b)(v, {
                        isNewPatient: s,
                        insuranceSector: u
                    }),
                    f = (0, Me.wd)(g),
                    b = (x = h, S = f, Object.entries(x).map((e => {
                        let [t, {
                            visitMotiveIds: i
                        }] = e;
                        return { ...x[t].practitioner,
                            disabled: (0, At.isEmpty)((0, At.intersection)(i, S))
                        }
                    })));
                var x, S;
                const y = _.filter((e => !e.hide_practitioner)),
                    I = y.some((e => e.anonymous)),
                    k = _.some((e => e.hide_practitioner)),
                    j = function(e, t) {
                        const i = (0, _e.xt)(t),
                            o = (0, he.H)(i, "practitioner_id");
                        return (0, At.orderBy)((0, he.$)(e, o).filter((e => e.name)), ["disabled", "name"], ["asc", "asc"])
                    }(b, y);
                return {
                    isOrganizationProfile: a.organization,
                    practitioners: j,
                    hasAnonymousAgenda: I,
                    hasHiddenPractitionerAgenda: k
                }
            }
            const Wt = e => {
                let {
                    bookingInfo: t,
                    bookingState: i
                } = e;
                const {
                    createTrackingEventWithContext: o
                } = (0, R.Z)();
                (0, M.useEffect)((() => {
                    o({
                        name: "practitionerChoiceDisplay"
                    })
                }), []);
                return {
                    stepData: $t(t, i)
                }
            };
            var Lt = i(975645);
            const Ft = e => {
                    let {
                        practitioner: t,
                        onTap: i,
                        query: n
                    } = e;
                    return (0, o.jsxs)(_t.Z, {
                        rounded: !0,
                        border: "all",
                        size: "medium",
                        onTap: i,
                        className: "practitioners-list-item",
                        children: [(0, o.jsx)(_t.Z.Avatar, {
                            cloudinaryId: t.cloudinary_public_id,
                            className: "dl-margin-r-16 dl-align-self-center"
                        }), (0, o.jsxs)(_t.Z.Content, {
                            children: [(0, o.jsx)(_t.Z.Title, {
                                children: (0, o.jsx)(ht.Z, {
                                    query: n,
                                    className: "practitioners-list-item-name",
                                    text: (0, Lt.WU)(t)
                                })
                            }), !!t.speciality && (0, o.jsx)(_t.Z.Description, {
                                className: "practitioners-list-item-speciality",
                                children: t.speciality
                            })]
                        })]
                    })
                },
                Ht = e => {
                    let {
                        showNoPreference: t,
                        practitioners: i,
                        specialityId: n,
                        goToNextStep: a,
                        query: r
                    } = e;
                    const {
                        createTrackingEventWithContext: s
                    } = (0, R.Z)(), l = e => () => {
                        const t = e === ge.K2;
                        s({
                            name: "patient_practitioner_select",
                            additionalDetails: {
                                practitioner_id: t ? null : e,
                                speciality_id: n,
                                is_first_availability: t,
                                is_appointment_request_enabled: (0, L.cr)("patient_appointment_requests")
                            }
                        }, {
                            schema: "patient"
                        }), a({
                            practitionerId: e
                        })
                    };
                    return (0, o.jsxs)("div", {
                        children: [t ? (0, o.jsx)(_t.Z, {
                            rounded: !0,
                            border: "all",
                            size: "medium",
                            onTap: l(ge.K2),
                            children: (0, o.jsx)(_t.Z.Title, {
                                children: (0, o.jsx)("span", {
                                    "data-test": "practitioners-no-preference",
                                    children: d.Z.t("patient_mobile.root.profiles.booking.practitioners.no_preference")
                                })
                            })
                        }) : null, i.map((e => (0, o.jsx)(Ft, {
                            practitioner: e,
                            onTap: l(e.id),
                            query: r
                        }, e.id)))]
                    })
                },
                qt = e => {
                    let {
                        practitioners: t,
                        specialityId: i,
                        hasAnonymousAgenda: n,
                        hasHiddenPractitionerAgenda: a,
                        goToNextStep: r
                    } = e;
                    const s = t.length > 1 || n || a;
                    return (0, o.jsx)("div", {
                        children: t.length > 12 ? (0, o.jsx)(vt, {
                            placeholder: d.Z.t("patient_mobile.root.profiles.booking.practitioners.placeholder"),
                            field: e => e.name_with_title,
                            name: "practitioner",
                            items: t,
                            children: (e, t) => (0, o.jsx)(Ht, {
                                showNoPreference: s,
                                practitioners: e,
                                specialityId: i,
                                goToNextStep: r,
                                query: t
                            })
                        }) : (0, o.jsx)(Ht, {
                            showNoPreference: s,
                            practitioners: t,
                            specialityId: i,
                            goToNextStep: r
                        })
                    })
                },
                Vt = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i,
                        goToNextStep: n
                    } = e;
                    const {
                        stepData: a
                    } = Wt({
                        bookingInfo: t,
                        bookingState: i
                    });
                    return (0, o.jsx)(qt, {
                        bookingInfo: t,
                        goToNextStep: n,
                        specialityId: i.specialityId,
                        ...a
                    })
                },
                Ut = {
                    name: "practitioners",
                    component: e => (0, o.jsx)(Vt, { ...e
                    }),
                    computeStepMetaData: (e, t) => {
                        const i = $t(e, t),
                            {
                                hasAnonymousAgenda: o,
                                hasHiddenPractitionerAgenda: n,
                                isOrganizationProfile: a,
                                practitioners: r
                            } = i;
                        let s = r.length;
                        return n && (s += 1), {
                            shouldRender: a && s > 1,
                            defaultValues: !a || o || n || 1 !== r.length ? {} : {
                                practitionerId: r[0].id
                            },
                            title: d.Z.t("patient_mobile.root.profiles.booking.practitioners.subtitle")
                        }
                    }
                };
            var Gt = i(355462);
            const Yt = e => {
                    let {
                        onTap: t,
                        spot: i,
                        place: {
                            id: n,
                            name: a,
                            address: r,
                            zipcode: s,
                            city: l,
                            specialities: c = []
                        }
                    } = e;
                    return (0, o.jsxs)(_t.Z, {
                        border: "all",
                        rounded: !0,
                        onTap: () => t(n),
                        size: "medium",
                        "data-test": "place-list-item",
                        children: [(0, o.jsx)(_t.Z.Badge, {
                            size: "large",
                            uiStyle: "info",
                            "aria-hidden": "true",
                            children: i
                        }), (0, o.jsxs)(_t.Z.Content, {
                            children: [(0, o.jsx)(_t.Z.Title, {
                                children: a
                            }), (0, o.jsx)(_t.Z.Description, {
                                children: r
                            }), (0, o.jsxs)(_t.Z.Description, {
                                children: [s, " ", l]
                            }), c.length > 0 && (0, o.jsxs)(_t.Z.Description, {
                                children: [(0, o.jsx)(p.Z, {
                                    uiStyle: "body-s-bold",
                                    color: "neutral-130",
                                    component: "span",
                                    children: `${d.Z.t("patient_mobile.root.profiles.booking.practices.specialities",{count:c.length})} : `
                                }), (0, o.jsx)(p.Z, {
                                    uiStyle: "body-s-regular",
                                    color: "neutral-130",
                                    component: "span",
                                    children: c.map((e => {
                                        let {
                                            name: t
                                        } = e;
                                        return t
                                    })).join(", ")
                                })]
                            })]
                        })]
                    })
                },
                Kt = e => {
                    let {
                        onTap: t
                    } = e;
                    return (0, o.jsx)(_t.Z, {
                        border: "all",
                        rounded: !0,
                        onTap: () => t("NO_PREFERENCE"),
                        size: "medium",
                        children: (0, o.jsx)(_t.Z.Title, {
                            children: d.Z.t("patient_mobile.root.profiles.booking.practices.no_preference")
                        })
                    })
                },
                Qt = e => {
                    let {
                        isOrganization: t,
                        places: i,
                        pid: n,
                        isVaccination: a,
                        goToNextStep: r
                    } = e;
                    const {
                        createTrackingEventWithContext: s
                    } = (0, R.Z)(), l = e => {
                        var t;
                        const o = n || (null === (t = i[0]) || void 0 === t ? void 0 : t.id),
                            a = i.findIndex((t => e === t.id));
                        s({
                            name: "patient_location_select",
                            additionalDetails: {
                                location_nb: a + 1,
                                is_same_location: o === e
                            }
                        }), r({
                            placeId: e
                        })
                    }, c = t && !a;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: "dl-rounded-borders",
                            children: (0, o.jsx)(Gt.Z, {
                                places: i
                            })
                        }), (0, o.jsxs)("div", {
                            className: "dl-margin-t-16",
                            children: [c ? (0, o.jsx)(Kt, {
                                onTap: l
                            }) : null, i.map(((e, t) => (0, o.jsx)(Yt, {
                                spot: t + 1,
                                place: e,
                                onTap: l
                            }, e.id)))]
                        })]
                    })
                },
                Xt = (e, t, i, o, n) => {
                    if (n) return e;
                    const a = ((e, t, i, o) => e.map((e => {
                        const n = (0, _e.$i)(t, [], {
                                practiceIds: rt()(i, e.practice_ids)
                            }),
                            a = (0, he.H)(n, "speciality_id");
                        return { ...e,
                            specialities: (0, he.$)(o, a)
                        }
                    })))(e, t, i, o);
                    return Rt()(a.map((e => ye()(e.specialities, "id").sort().join(",")))).length > 1 ? a : e
                };

            function Jt(e, t) {
                let {
                    agendas: i,
                    profile: o,
                    places: n,
                    specialities: a,
                    visit_motives: r
                } = e, {
                    isNewPatient: s,
                    insuranceSector: l,
                    practitionerId: c,
                    specialityId: d,
                    telehealth: p
                } = t;
                const u = (0, Me.pG)(r);
                if (p) return {
                    isOrganization: o.organization,
                    places: [],
                    isVaccination: u
                };
                const m = (0, Ce.b)(r, {
                        telehealth: p,
                        isNewPatient: s
                    }),
                    v = (0, _e.$i)(i, n, {
                        isOrganization: o.organization,
                        specialityId: d,
                        practitionerId: c,
                        insuranceSector: l,
                        visitMotives: m
                    }),
                    _ = (0, fe.FY)(v, m),
                    h = (0, fe.Or)(n, _),
                    g = Xt(h, v, _, a, o.organization);
                return {
                    isOrganization: o.organization,
                    places: g,
                    isVaccination: u
                }
            }
            const ei = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i
                    } = e;
                    const o = Jt(t, i),
                        {
                            createTrackingEventWithContext: n
                        } = (0, R.Z)();
                    return (0, M.useEffect)((() => {
                        n({
                            name: "patient_location_display"
                        })
                    }), []), {
                        stepData: o
                    }
                },
                ti = e => {
                    let {
                        goToNextStep: t,
                        bookingState: i,
                        bookingInfo: n
                    } = e;
                    const {
                        stepData: a
                    } = ei({
                        bookingInfo: n,
                        bookingState: i
                    });
                    return (0, o.jsx)(Qt, {
                        bookingInfo: n,
                        goToNextStep: t,
                        pid: i.pid,
                        ...a
                    })
                },
                ii = {
                    name: "places",
                    component: e => (0, o.jsx)(ti, { ...e
                    }),
                    computeStepMetaData: (e, t) => {
                        const i = Jt(e, t);
                        return {
                            shouldRender: i.places.length > 1,
                            defaultValues: 1 === i.places.length ? {
                                placeId: i.places[0].id
                            } : {},
                            title: d.Z.t("patient_common.root.booking_selection")
                        }
                    }
                },
                oi = e => !0 !== e.disabled && "disabled" !== e.online_booking_status,
                ni = (e, t, i) => {
                    let {
                        configurations: o
                    } = i;
                    if (xe()(o)) return !0;
                    const n = ((e, t) => {
                        const i = new Set(t),
                            o = e.reduce(((e, t) => {
                                const o = r()(t.agenda_id) ? "default_config" : t.agenda_id,
                                    n = r()(t.insurance) ? "null" : t.insurance;
                                var a;
                                return ("default_config" === o || i.has(o)) && (e[o] || (e[o] = {}), (a = e[o])[n] || (a[n] = {
                                    online_booking_status: t.online_booking_status,
                                    disabled: t.disabled
                                })), e
                            }), {}),
                            n = (e, t) => {
                                r()(e.online_booking_status) && (e.online_booking_status = null === t || void 0 === t ? void 0 : t.online_booking_status), r()(e.disabled) && (e.disabled = null === t || void 0 === t ? void 0 : t.disabled)
                            },
                            a = o.default_config;
                        return Object.entries(o).forEach((e => {
                            let [t, i] = e;
                            t && (i.private && null !== a && void 0 !== a && a.private && n(i.private, a.private), i.public && null !== a && void 0 !== a && a.public && n(i.public, a.public))
                        })), o
                    })(o, t);
                    return t.some((t => {
                        var i, o, a;
                        if (null !== (i = n[t]) && void 0 !== i && i[e]) {
                            if (oi(null === (a = n[t]) || void 0 === a ? void 0 : a[e])) return !0
                        } else if (null !== (o = n.default_config) && void 0 !== o && o[e]) {
                            var r;
                            if (oi(null === (r = n.default_config) || void 0 === r ? void 0 : r[e])) return !0
                        }
                        return !1
                    }))
                },
                ai = (e, t, i) => e.some((e => {
                    const o = t.map((e => e.id));
                    return ni(i, o, e)
                }));

            function ri(e, t) {
                let {
                    agendas: i,
                    places: o,
                    visit_motives: n
                } = e, {
                    specialityId: a,
                    placeId: r,
                    practitionerId: s
                } = t;
                const l = (0, _e.$i)(i, o, {
                        placeId: r,
                        practitionerId: s,
                        specialityId: a
                    }),
                    c = (0, Me.Rd)(l, o, r),
                    d = (0, he.$)(n, c),
                    p = l.some((e => e.insurance_sector_enabled)),
                    u = !p || ((e, t) => ai(e, t, "public"))(d, l),
                    m = !!p && ((e, t) => ai(e, t, "private"))(d, l);
                return {
                    insuranceSectorEnabled: p,
                    hasPublicInsuranceMotives: u,
                    hasPrivateInsuranceMotives: m
                }
            }
            const si = e => {
                    let {
                        label: t,
                        value: i,
                        handleTap: n
                    } = e;
                    return (0, o.jsx)(_t.Z, {
                        border: "all",
                        size: "medium",
                        rounded: !0,
                        onTap: () => n(i),
                        children: (0, o.jsx)(_t.Z.Description, {
                            children: t
                        })
                    }, i)
                },
                li = e => {
                    let {
                        goToNextStep: t,
                        availableInsuranceSectors: i
                    } = e;
                    const {
                        createTrackingEventWithContext: n
                    } = (0, R.Z)(), a = e => {
                        n({
                            name: "patient_insurance_select",
                            additionalDetails: {
                                type: e,
                                is_appointment_request_enabled: (0, L.cr)("patient_appointment_requests")
                            }
                        }), t({
                            insuranceSector: e,
                            insuranceSectorEnabled: !0
                        })
                    };
                    return (0, o.jsx)(o.Fragment, {
                        children: i.map((e => {
                            let {
                                label: t,
                                value: i
                            } = e;
                            return (0, o.jsx)(si, {
                                label: t,
                                value: i,
                                handleTap: a
                            }, i)
                        }))
                    })
                };
            var ci = i(152817);
            const di = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i
                    } = e;
                    const {
                        createTrackingEventWithContext: o
                    } = (0, R.Z)();
                    (0, M.useEffect)((() => {
                        o({
                            name: "insuranceChoiceDisplay",
                            additionalDetails: {
                                is_appointment_request_enabled: (0, L.cr)("patient_appointment_requests")
                            }
                        })
                    }), []);
                    const n = ri(t, i);
                    return {
                        availableInsuranceSectors: n.hasPublicInsuranceMotives && !n.hasPrivateInsuranceMotives ? [ci.vT[0]] : !n.hasPublicInsuranceMotives && n.hasPrivateInsuranceMotives ? [ci.vT[1]] : ci.vT
                    }
                },
                pi = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i,
                        goToNextStep: n
                    } = e;
                    const {
                        availableInsuranceSectors: a
                    } = di({
                        bookingInfo: t,
                        bookingState: i
                    });
                    return (0, o.jsx)(li, {
                        bookingInfo: t,
                        goToNextStep: n,
                        availableInsuranceSectors: a
                    })
                },
                ui = {
                    name: "insurance-sector",
                    component: e => (0, o.jsx)(pi, { ...e
                    }),
                    computeStepMetaData: (e, t, i) => {
                        const {
                            insuranceSectorEnabled: o
                        } = ri(e, t);
                        return {
                            shouldRender: o && !(null !== i && void 0 !== i && i.insurance_sector),
                            defaultValues: null !== i && void 0 !== i && i.insurance_sector ? {
                                insuranceSectorEnabled: o,
                                insuranceSector: null === i || void 0 === i ? void 0 : i.insurance_sector
                            } : {},
                            title: d.Z.t("patient_mobile.root.profiles.booking.choose_insurance_sector")
                        }
                    }
                };
            var mi = i(943174),
                vi = i.n(mi),
                _i = i(108816),
                hi = i.n(_i),
                gi = i(188846),
                fi = i.n(gi),
                bi = i(121804),
                xi = i.n(bi),
                Si = i(221146),
                yi = i.n(Si),
                Ii = i(511151),
                ki = i.n(Ii),
                ji = i(253632),
                Zi = i.n(ji),
                Ti = i(766415),
                Ni = i.n(Ti);
            const wi = hi()(fi()((e => ({ ...e,
                key: xi()([e.name, e.speciality_id].join("-"))
            }))), yi()("key"), ki()((e => ({
                key: e[0].key,
                name: e[0].name,
                ids: new Set((0, he.H)(e, "id")),
                position: Zi()(e.map((e => e.position))) || 1 / 0
            }))), Ni()("position"));

            function Ei(e, t) {
                let {
                    agendas: i,
                    visit_motive_categories: o,
                    places: n,
                    visit_motives: a,
                    profile: s
                } = e, {
                    specialityId: l,
                    placeId: c,
                    practitionerId: p,
                    insuranceSectorEnabled: u,
                    insuranceSector: m,
                    telehealth: v
                } = t;
                const _ = (0, _e.$i)(i, n, {
                        specialityId: l,
                        placeId: c,
                        practitionerId: p,
                        isOrganization: s.organization
                    }),
                    h = (0, Me.Rd)(_, n, c),
                    g = (0, he.$)(a, h),
                    f = {
                        insuranceSector: u ? m : void 0,
                        telehealth: v,
                        agendas: _
                    },
                    b = (0, Ce.b)(g, f),
                    x = (0, he.H)(b, "visit_motive_category_id").filter((e => !r()(e))),
                    S = (0, he.$)(o, x),
                    y = wi(S),
                    [I, k] = vi()(b, (e => e.visit_motive_category_id));
                return I.length && k.length && y.push({
                    key: Ce.v.toString(),
                    ids: new Set([Ce.v]),
                    name: d.Z.t("patient_common.root.profiles.booking.other_visit_motives"),
                    position: 1 / 0
                }), y
            }
            const Pi = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i
                    } = e;
                    const {
                        createTrackingEventWithContext: o
                    } = (0, R.Z)();
                    (0, M.useEffect)((() => {
                        o({
                            name: "motivesCategoryChoiceDisplay"
                        })
                    }), []);
                    return {
                        stepData: Ei(t, i)
                    }
                },
                Di = e => {
                    let {
                        onTap: t,
                        visitMotiveCategory: i,
                        searchTerm: n
                    } = e;
                    return (0, o.jsx)(_t.Z, {
                        border: "all",
                        rounded: !0,
                        onTap: t,
                        size: "medium",
                        children: (0, o.jsx)(_t.Z.Content, {
                            children: (0, o.jsx)(_t.Z.Description, {
                                children: (0, o.jsx)(ht.Z, {
                                    query: n,
                                    text: i.name
                                })
                            })
                        })
                    })
                },
                Ci = e => {
                    let {
                        visitMotiveCategories: t,
                        goToNextStep: i,
                        searchTerm: n
                    } = e;
                    const {
                        createTrackingEventWithContext: a
                    } = (0, R.Z)();
                    return (0, o.jsx)("div", {
                        children: t.map((e => (0, o.jsx)(Di, {
                            searchTerm: n,
                            visitMotiveCategory: e,
                            onTap: () => (e => {
                                const t = Array.from(e.ids);
                                a({
                                    name: "patient_visitmotive_category_select",
                                    additionalDetails: {
                                        visit_motive_category: t[0]
                                    }
                                }), i({
                                    motiveCategoryIds: t.sort()
                                })
                            })(e)
                        }, e.name)))
                    })
                },
                Mi = e => {
                    let {
                        goToNextStep: t,
                        motiveCategories: i
                    } = e;
                    return (0, o.jsx)("div", {
                        children: i.length > 12 ? (0, o.jsx)(vt, {
                            placeholder: d.Z.t("patient_mobile.root.profiles.booking.motive_categories.placeholder"),
                            items: i,
                            children: (e, i) => (0, o.jsx)(Ci, {
                                visitMotiveCategories: e,
                                goToNextStep: t,
                                searchTerm: i
                            })
                        }) : (0, o.jsx)(Ci, {
                            visitMotiveCategories: i,
                            goToNextStep: t
                        })
                    })
                },
                Ri = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i,
                        goToNextStep: n
                    } = e;
                    const {
                        stepData: a
                    } = Pi({
                        bookingInfo: t,
                        bookingState: i
                    });
                    return (0, o.jsx)(Mi, {
                        bookingInfo: t,
                        goToNextStep: n,
                        motiveCategories: a
                    })
                },
                zi = {
                    name: "motive-categories",
                    component: e => (0, o.jsx)(Ri, { ...e
                    }),
                    computeStepMetaData: (e, t) => ({
                        shouldRender: Ei(e, t).length > 1,
                        defaultValues: {},
                        title: d.Z.t("patient_mobile.root.profiles.booking.motive_categories.subtitle")
                    })
                };

            function Oi(e, t) {
                let {
                    agendas: i,
                    places: o,
                    visit_motives: n,
                    visit_motive_categories: a
                } = e, {
                    isNewPatient: r,
                    specialityId: s,
                    placeId: l,
                    practitionerId: c,
                    motiveCategoryIds: d,
                    insuranceSector: p,
                    insuranceSectorEnabled: u,
                    telehealth: m
                } = t;
                const v = (0, _e.$i)(i, o, {
                        practitionerId: c,
                        specialityId: s,
                        placeId: l
                    }),
                    _ = (0, Me.Rd)(v, o, l),
                    h = (0, he.$)(n, _),
                    g = (0, Ce.b)(h, {
                        agendas: v,
                        telehealth: m,
                        motiveCategoryIds: d,
                        insuranceSector: u ? p : void 0
                    }),
                    f = wi(a),
                    b = ((e, t, i) => {
                        if (!t.some((e => e.visit_motive_ids_only_for_doctors && e.visit_motive_ids_only_for_doctors.length > 0))) return e;
                        const o = i;
                        return e.map((e => {
                            const i = Array.from(e.ids).filter((e => o.includes(e))).every((e => {
                                const i = t.filter((t => (t.visit_motive_ids || []).includes(e)));
                                return i.length === i.filter((t => (t.visit_motive_ids_only_for_doctors || []).includes(e))).length
                            }));
                            return { ...e,
                                onlyForDoctors: i
                            }
                        }))
                    })((0, Me.RI)(f, g), i, _);
                return {
                    isNewPatient: r,
                    telehealth: m,
                    motives: b
                }
            }
            var Ai = i(957557),
                Bi = i.n(Ai);
            const $i = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i
                    } = e;
                    const {
                        createTrackingEventWithContext: o
                    } = (0, R.Z)();
                    (0, M.useEffect)((() => {
                        o({
                            name: "motiveChoiceDisplay",
                            additionalDetails: {
                                is_appointment_request_enabled: (0, L.cr)("patient_appointment_requests")
                            }
                        })
                    }), []);
                    const n = Oi(t, i),
                        a = n.motives.map((e => ({ ...e,
                            disabled: (0, Me.pK)(e, i.isNewPatient, i.insuranceSector)
                        })));
                    return {
                        stepData: { ...Bi()(n, "motives"),
                            enrichedVisitMotives: a
                        }
                    }
                },
                Wi = e => {
                    let {
                        onTap: t,
                        visitMotiveName: i,
                        isTelehealth: n,
                        isDisabled: a,
                        searchTerm: r
                    } = e;
                    return (0, o.jsxs)(_t.Z, {
                        border: "all",
                        disabled: a,
                        rounded: !0,
                        onTap: t,
                        size: "medium",
                        "data-test": "booking-motive-list-item" + (a ? "-disabled" : ""),
                        children: [n && (a ? (0, o.jsx)(_t.Z.Icon, {
                            name: "solid/video",
                            size: "medium"
                        }) : (0, o.jsx)(_t.Z.Icon, {
                            name: "solid/video-telehealth",
                            size: "medium"
                        })), (0, o.jsx)(_t.Z.Content, {
                            children: (0, o.jsx)(_t.Z.Description, {
                                children: (0, o.jsx)(ht.Z, {
                                    query: r,
                                    text: i
                                })
                            })
                        })]
                    })
                },
                Li = e => {
                    let {
                        visitMotives: t,
                        goToNextStep: i,
                        searchTerm: n
                    } = e;
                    const {
                        createTrackingEventWithContext: a
                    } = (0, R.Z)();
                    return (0, o.jsx)("div", {
                        children: lt()(t, (e => e.disabled)).map((e => (0, o.jsx)(Wi, {
                            isDisabled: Boolean(e.disabled),
                            visitMotiveName: e.name,
                            isTelehealth: e.telehealth,
                            searchTerm: n,
                            onTap: () => (e => {
                                var o, n, s;
                                let {
                                    key: l
                                } = e;
                                const c = t.find((e => e.key === l));
                                r()(c) || (a({
                                    name: "patient_visitmotive_select",
                                    additionalDetails: {
                                        visit_motive_id: c ? null === (o = c.ids) || void 0 === o || null === (n = o.values()) || void 0 === n || null === (s = n.next()) || void 0 === s ? void 0 : s.value : null,
                                        is_appointment_request_enabled: (0, L.cr)("patient_appointment_requests")
                                    }
                                }), i({
                                    motiveIds: Array.from(c.ids).sort()
                                }))
                            })(e)
                        }, e.name)))
                    })
                },
                Fi = e => {
                    let {
                        enrichedVisitMotives: t,
                        goToNextStep: i
                    } = e;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [" ", t.length > 12 ? (0, o.jsx)(vt, {
                            placeholder: d.Z.t("patient_mobile.root.profiles.booking.motives.placeholder"),
                            items: t,
                            children: (e, t) => (0, o.jsx)(Li, {
                                visitMotives: e,
                                goToNextStep: i,
                                searchTerm: t
                            })
                        }) : (0, o.jsx)(Li, {
                            goToNextStep: i,
                            visitMotives: t
                        })]
                    })
                },
                Hi = e => {
                    let {
                        bookingInfo: t,
                        bookingState: i,
                        goToNextStep: n
                    } = e;
                    const {
                        stepData: a
                    } = $i({
                        bookingInfo: t,
                        bookingState: i
                    });
                    return (0, o.jsx)(Fi, {
                        bookingInfo: t,
                        goToNextStep: n,
                        ...a
                    })
                },
                qi = {
                    name: "motives",
                    component: e => (0, o.jsx)(Hi, { ...e
                    }),
                    computeStepMetaData: (e, t) => {
                        const i = Oi(e, t),
                            o = i.motives && i.motives.some((e => (0, Me.pK)(e, i.isNewPatient, t.insuranceSector))) ? d.Z.t("patient_mobile.root.profiles.booking.motives.new_patient_details") : void 0;
                        if ((0, l.dm)() || (0, l.Zz)()) return {
                            shouldRender: i.motives.length >= 2,
                            defaultValues: 1 === i.motives.length ? {
                                motiveIds: Array.from(i.motives[0].ids)
                            } : {},
                            title: d.Z.t("patient_mobile.root.profiles.booking.motives.subtitle"),
                            subtitle: o
                        };
                        const {
                            shouldSkip: n,
                            motiveIds: a
                        } = ((e, t, i, o) => {
                            if (i) {
                                const i = e.filter((e => e.telehealth)).filter((e => !t || e.visitMotives.every((e => (0, Me.mD)(e, o)))));
                                if (1 === i.length) return {
                                    shouldSkip: !0,
                                    motiveIds: Array.from(i[0].ids).sort()
                                }
                            }
                            return {
                                shouldSkip: !1
                            }
                        })(i.motives, i.isNewPatient, i.telehealth, t.insuranceSector);
                        return {
                            shouldRender: i.motives.length >= 1 && !n,
                            defaultValues: {
                                motiveIds: a
                            },
                            title: d.Z.t("patient_mobile.root.profiles.booking.motives.subtitle"),
                            subtitle: o
                        }
                    }
                },
                Vi = [St, Tt, Ct, ii, ui, zi, qi, Ut, Pe, De, Ae],
                Ui = [Tt, Ct, Ut, ii, St, ui, zi, qi, Pe, De, Ae],
                Gi = e => {
                    var t;
                    let {
                        bookingInfo: i
                    } = e;
                    const {
                        useExperience: o
                    } = (0, M.useContext)(W.ZP), {
                        included: n,
                        experienceReady: a
                    } = o(`unified_book_from_search_${(0,l.rZ)()}`), r = {
                        allExperiencesReady: a,
                        unifiedBookFromSearch: n
                    };
                    return {
                        steps: null !== i && void 0 !== i && i.profile ? (null === i || void 0 === i || null === (t = i.profile) || void 0 === t ? void 0 : t.organization) ? Vi : Ui : [],
                        blockingStep: Ae,
                        slotSelectionFunnelExperience: r
                    }
                },
                Yi = e => {
                    var t;
                    let {
                        bookingState: i,
                        currentStep: o,
                        externalParameters: n,
                        profilePath: a,
                        profileSlug: s
                    } = e;
                    const c = (0, Q.useNavigate)(),
                        {
                            data: d
                        } = (0, He.g)(s),
                        {
                            data: p
                        } = (0, Fe.M)(s, {
                            onSuccess: e => {
                                n.profileSkipped && ((e, t) => {
                                    var i, o, n, a, r;
                                    if (null === e || void 0 === e || null === (i = e.data) || void 0 === i || !i.profile || null === e || void 0 === e || null === (o = e.data) || void 0 === o || !o.places) return;
                                    const s = null === e || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.profile,
                                        l = (null === e || void 0 === e || null === (a = e.data) || void 0 === a ? void 0 : a.places) || [],
                                        c = Ye()(l, ["id", t.pid]) || l[0];
                                    (0, Ue.X)({
                                        profile: s,
                                        practiceId: null === c || void 0 === c ? void 0 : c.practice_ids[0],
                                        isSkipped: !0
                                    }, null === (r = e.meta) || void 0 === r ? void 0 : r.page_type)
                                })(e, n)
                            }
                        }),
                        {
                            mutate: u
                        } = (() => {
                            const e = (0, M.useContext)(Qe._O);
                            return (0, Xe.useMutation)((() => e.delete("/appointments/destroy_temporary")))
                        })(),
                        m = (null === d || void 0 === d ? void 0 : d.data) && (0, Ve.Z)(d.data, n, (0, l.dm)()),
                        v = null === p || void 0 === p || null === (t = p.data) || void 0 === t ? void 0 : t.profile,
                        {
                            slotSelectionFunnelExperience: _,
                            blockingStep: h,
                            steps: g
                        } = Gi({
                            bookingInfo: m
                        }),
                        f = o && m && nt(o, m, i, g, h, -1, _, n),
                        b = !o && m ? ((e, t, i, o, n, a) => {
                            const r = ot(e, t, i, o, 0, 1, n, a);
                            if (r) return {
                                stepName: r.step.name,
                                search: (0, qe.YM)(r.bookingState)
                            }
                        })(m, i, g, h, _, n) : void 0,
                        x = e => {
                            _.unifiedBookFromSearch ? !f && (0, l.rl)() && (0, l.Ex)() ? window.history.go(-2) : (f || null === e || void 0 === e || e(), setTimeout((() => c(-1)))) : f ? setTimeout((() => c(-1))) : (0, l.Zz)() ? (null === e || void 0 === e || e(), (0, Ke.Z)(a)) : (0, l.Ex)() ? window.history.go(-2) : setTimeout((() => c(-1)))
                        };
                    return {
                        bookingInfo: m,
                        goToNextStep: e => {
                            if (r()(m) || !o) return;
                            const t = nt(o, m, i, g, h, 1, _, n, e);
                            t && setTimeout((() => {
                                c({
                                    pathname: t.step.name,
                                    search: (0, qe.YM)({ ...t.bookingState,
                                        ...n
                                    })
                                })
                            }))
                        },
                        goToPreviousStep: e => {
                            o === De.name ? u(void 0, {
                                onSettled: () => {
                                    x(e)
                                }
                            }) : x(e)
                        },
                        initialStep: b,
                        hasPreviousStep: !r()(f),
                        profile: v,
                        steps: g,
                        slotSelectionFunnelExperience: _
                    }
                },
                Ki = e => {
                    const {
                        slotSelectionFunnelExperience: t,
                        bookingInfo: i,
                        goToNextStep: a,
                        goToPreviousStep: c,
                        initialStep: d,
                        hasPreviousStep: p,
                        profile: u,
                        steps: m
                    } = Yi(e), {
                        bookingState: v,
                        currentStep: _,
                        externalParameters: h
                    } = e;
                    if (r()(i) || r()(u) || !t.allExperiencesReady) {
                        const e = {
                            large: !0
                        };
                        return (0, o.jsx)(n.Z, {
                            loading: !0,
                            navBarProps: e,
                            showNavBar: (0, l.rl)() || (0, l.dm)()
                        })
                    }
                    const {
                        trackedDetails: g,
                        trackedItemId: f,
                        trackedItemType: b
                    } = Le(i.profile);
                    return (0, o.jsx)(s.Z, {
                        value: g,
                        itemId: f,
                        itemType: b,
                        children: (0, o.jsx)(K, {
                            bookingInfo: i,
                            bookingState: v,
                            profile: u,
                            goToPreviousStep: c,
                            currentStep: _,
                            hasPreviousStep: p,
                            children: (0, o.jsx)(Be, {
                                bookingInfo: i,
                                profile: u,
                                bookingState: v,
                                steps: m,
                                initialStep: d,
                                hasPreviousStep: p,
                                goToNextStep: a,
                                goToPreviousStep: c,
                                slotSelectionFunnelExperience: t,
                                externalParameters: h
                            })
                        })
                    })
                }
        },
        652032: (e, t, i) => {
            i.d(t, {
                Z: () => d
            });
            var o = i(716373),
                n = i(24553),
                a = i(441609),
                r = i.n(a),
                s = i(287991);
            const l = ["insuranceSectorEnabled", "isNewPatient", "telehealth", "isNewPatientBlocked"],
                c = e => {
                    if (null === e || void 0 === e || !e.id) return {
                        currentStep: void 0
                    };
                    return {
                        profileSlug: e.id,
                        currentStep: e["*"] && !r()(e["*"]) ? e["*"] : void 0
                    }
                },
                d = () => {
                    const e = (0, n.useParams)(),
                        t = (0, n.useLocation)(),
                        {
                            params: i
                        } = (0, o.Z)(t.search, l),
                        {
                            externalParameters: a
                        } = (0, s.Z)(t.search);
                    return {
                        bookingState: i,
                        externalParameters: a,
                        ...c(e)
                    }
                }
        },
        552365: (e, t, i) => {
            i.d(t, {
                $: () => d,
                H: () => c
            });
            var o = i(547745),
                n = i.n(o),
                a = i(944908),
                r = i.n(a),
                s = i(435161),
                l = i.n(s);
            const c = n()(r(), l()),
                d = (e, t) => e.filter((e => {
                    let {
                        id: i
                    } = e;
                    return t.includes(i)
                }))
        },
        421073: (e, t, i) => {
            i.d(t, {
                g: () => r
            });
            var o = i(239417),
                n = i(184481),
                a = i(174976);
            const r = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const i = (0, n.useContext)(o._O);
                return (0, a.useQuery)(["booking", e], (() => i.get(`/booking/${e}`).then((e => {
                    let {
                        bodyData: t
                    } = e;
                    return t
                }))), { ...t,
                    staleTime: 6e4
                })
            }
        },
        329347: (e, t, i) => {
            i.d(t, {
                Y: () => d,
                Z: () => p
            });
            var o = i(785893),
                n = i(184481),
                a = i(494537),
                r = i(429697),
                s = i(468644),
                l = i(191327),
                c = i(511466);
            i(319301);
            const d = e => {
                    let {
                        loader: t = !1,
                        show: i,
                        onClick: n,
                        uiStyle: d = "dark"
                    } = e;
                    return (0, o.jsx)(a.Z, {
                        component: "div",
                        "data-design-system": "oxygen",
                        children: i ? (0, o.jsx)(r.Z, {
                            classNames: "dl-backdrop",
                            timeout: {
                                enter: 200,
                                exit: 400
                            },
                            children: (0, o.jsx)(s.Z, {
                                className: `dl-backdrop dl-backdrop-${d}`,
                                onTap: n,
                                children: t ? (0, o.jsx)(l.Z, {
                                    delay: 500,
                                    children: (0, o.jsx)(c.Z, {})
                                }) : null
                            })
                        }) : null
                    })
                },
                p = (0, n.memo)(d)
        }
    }
]);
//# sourceMappingURL=../49194-fe5824e245ed04156375.js.map