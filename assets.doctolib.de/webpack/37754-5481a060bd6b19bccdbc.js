"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [37754], {
        578221: (e, t, i) => {
            i.d(t, {
                Z: () => $
            });
            var a = i(184481),
                n = i(108519),
                l = i(516590),
                s = i(402804);
            const o = (e, t) => {
                    switch (t.type) {
                        case "TRACKING_DONE":
                            return { ...e,
                                availabilityDataChanged: !1
                            };
                        case "NEW_AVAILABILITY_DATA":
                            return {
                                availabilityData: t.availabilityData,
                                availabilityDataChanged: !0
                            };
                        default:
                            return e
                    }
                },
                r = e => {
                    let {
                        initialAvailabilityData: t,
                        trackedSearchResultData: i
                    } = e;
                    const [r, d] = (0, n.Z)(), [{
                        availabilityData: c,
                        availabilityDataChanged: m
                    }, u] = (0, a.useReducer)(o, {
                        availabilityData: t,
                        availabilityDataChanged: !1
                    }), p = () => {
                        i && c && (0, l.ZP)({
                            name: "search_result_card_viewed",
                            details: { ...i,
                                availabilities: c && (0, s.o8)(c),
                                type: (0, s.oL)(c)
                            }
                        }, {
                            schema: "patient"
                        })
                    };
                    return (0, a.useEffect)((() => {
                        r && p()
                    }), [r]), (0, a.useEffect)((() => {
                        r && m && (p(), u({
                            type: "TRACKING_DONE"
                        }))
                    }), [m]), {
                        calendarRef: d,
                        dispatch: u
                    }
                };
            var d = i(990626),
                c = i(288802),
                m = i(445884),
                u = i(58978),
                p = i(294184),
                v = i.n(p),
                _ = i(977954),
                b = i.n(_),
                h = i(974691),
                g = i.n(h),
                y = i(396026),
                f = i.n(y),
                x = i(313311),
                S = i.n(x),
                j = i(931381),
                Z = i(136591),
                N = i(619423),
                k = i(43975),
                D = i(494537),
                I = i(429697),
                T = (i(405360), i(785893));
            const C = e => {
                    let {
                        children: t
                    } = e;
                    return (0, T.jsx)(D.Z, {
                        "data-design-system": "base",
                        children: a.Children.map(t, (e => e && (0, T.jsx)(I.Z, {
                            classNames: "transition-opacity",
                            timeout: {
                                enter: 200,
                                exit: 150
                            },
                            children: e
                        })))
                    })
                },
                w = C,
                A = e => {
                    let {
                        children: t,
                        full: i
                    } = e;
                    return (0, T.jsx)("div", {
                        className: v()("dl-desktop-availabilities-overlay", {
                            "dl-desktop-availabilities-overlay-full": i
                        }),
                        children: t
                    })
                };
            var M = i(602366),
                E = i(453040);
            const P = (0, a.memo)((e => {
                    let {
                        children: t,
                        details: i
                    } = e;
                    return (0, T.jsx)("div", {
                        className: "dl-full-height dl-full-width dl-desktop-availabilities-message dl-rounded-borders dl-justify-center dl-flex-column dl-align-items-center dl-text-left",
                        children: (0, T.jsxs)("div", {
                            className: "dl-padding-x-16",
                            children: [(0, T.jsxs)("div", {
                                className: "dl-flex-center",
                                children: [(0, T.jsx)("img", {
                                    className: "dl-calendar-image dl-margin-r-8",
                                    src: M,
                                    alt: ""
                                }), (0, T.jsx)(E.Z, {
                                    uiStyle: "body-s-bold",
                                    color: "neutral-150",
                                    component: "div",
                                    children: (null === t || void 0 === t ? void 0 : t.element) || (null === t || void 0 === t ? void 0 : t.text) || t
                                })]
                            }), i && (0, T.jsx)("div", {
                                className: "dl-desktop-availabilities-message-details dl-margin-t-4",
                                children: (0, T.jsx)(E.Z, {
                                    uiStyle: "body-s-regular",
                                    color: "neutral-150",
                                    component: "div",
                                    children: i
                                })
                            })]
                        })
                    })
                })),
                O = (0, a.memo)((e => {
                    let {
                        children: t,
                        details: i
                    } = e;
                    return t ? (0, T.jsx)(w, {
                        children: (0, T.jsx)(A, {
                            children: (0, T.jsx)(P, {
                                details: i,
                                children: t
                            })
                        })
                    }) : null
                }));
            var R = i(545763);
            const Y = e => {
                let {
                    date: t,
                    onSlotChange: i,
                    showNoAvailabilityThisWeekMessage: a
                } = e;
                return t ? (0, T.jsx)(O, {
                    children: (0, T.jsx)("div", {
                        className: "availabilities-message",
                        children: (0, T.jsxs)("div", {
                            className: "flex dl-align-items-center availabilities-next-slot",
                            children: [a && (0, T.jsx)("div", {
                                className: "availabilities-next-slot-no-availability",
                                children: m.Z.t("patient_common.root.profiles.booking.availabilities.no_availability_this_week")
                            }), (0, T.jsx)(R.Z, {
                                uiStyle: "link-primary",
                                leftIcon: "solid/eye",
                                onClick: () => i(t),
                                "aria-live": "polite",
                                children: m.Z.t("patient_common.root.profiles.booking.availabilities.next_availability", {
                                    date: b()(t).localize("Do MMMM YYYY")
                                })
                            })]
                        })
                    })
                }) : null
            };
            var L = i(511466);
            const q = (0, a.memo)((e => {
                let {
                    delayedProgress: t
                } = e;
                return (0, T.jsx)(w, {
                    children: t ? (0, T.jsx)(A, {
                        full: !0,
                        children: (0, T.jsx)(L.Z, {})
                    }) : null
                })
            }));
            var G = i(210346),
                V = i(755506);
            const z = (0, a.memo)((e => {
                    let {
                        onClick: t,
                        hasMoreSlots: i
                    } = e;
                    return i && (0, T.jsxs)(T.Fragment, {
                        children: [(0, T.jsx)(V.Z, {
                            className: "dl-margin-0"
                        }), (0, T.jsx)(R.Z, {
                            block: !0,
                            onClick: t,
                            uiStyle: "info-link",
                            children: m.Z.t("patient_common.root.profiles.booking.availabilities.see_more")
                        })]
                    })
                })),
                F = e => {
                    let {
                        uiStyle: t = "default",
                        title: i,
                        element: a,
                        text: n,
                        classes: l
                    } = e;
                    return (0, T.jsxs)("div", {
                        className: `booking-message booking-message-${t} ${l}`,
                        children: [i ? (0, T.jsx)(E.Z, {
                            uiStyle: "body-s-bold",
                            colorInherit: !0,
                            component: "div",
                            children: i
                        }) : null, a || (n ? (0, T.jsx)(E.Z, {
                            uiStyle: "body-s-regular",
                            colorInherit: !0,
                            children: n
                        }) : null)]
                    })
                };
            var B = i(752646),
                U = i(944373);
            const H = e => {
                    const t = (0, j.kn)(e);
                    if (!t) return null;
                    const i = {
                        text: (0, s.Oi)(e)
                    };
                    return t !== j.$$ && (c.Z.trackGtmEvent({
                        category: c.Z.getCurrentPageType(),
                        action: d.ZP.GTM_EVENTS.ONLINE_BOOKING_UNAVAILABLE
                    }), e.vaccinationCenter && e.forCovidVaccination ? i.text = m.Z.t("common.availabilities.no_availabilities_vaccination") : i.title = m.Z.t("common.availabilities.not_bookable"), i.uiStyle = "warning"), i
                },
                W = (0, u.Z)((e => {
                    var t, i;
                    let {
                        onTemporaryAppointmentDelete: n,
                        compact: o,
                        className: c,
                        containerWidth: m,
                        initialNbSlots: u,
                        flat: p,
                        bookingMessage: _,
                        setBookingMessage: h,
                        landlineNumber: y,
                        onSlotSelect: x,
                        minDate: D,
                        selectedSlot: I,
                        showLoaderOnSelected: C,
                        data: w,
                        loading: A,
                        message: M,
                        disabled: E,
                        initialResult: P,
                        onSubstitutionsChange: R,
                        onAppointmentRequestSlotsChange: L,
                        trackForTelehealthOrGermany: V,
                        trackedSearchResultData: W
                    } = e;
                    const $ = (0, Z.Z)(),
                        K = (0, a.useRef)(!1),
                        J = (0, a.useMemo)((() => (0, U.Qj)(m)), [m]),
                        [Q, X] = (0, a.useState)(o && _ ? 0 : u),
                        [ee, te] = (0, a.useState)(null),
                        [ie, ae] = (0, a.useState)(!1),
                        {
                            calendarRef: ne,
                            dispatch: le
                        } = r({
                            initialAvailabilityData: P,
                            trackedSearchResultData: W
                        }),
                        {
                            bookingTemporaryDisabled: se,
                            bookingDisabled: oe,
                            bookingNoSearchResult: re,
                            vaccinationCenter: de,
                            forCovidVaccination: ce
                        } = w,
                        me = H({
                            bookingTemporaryDisabled: se,
                            bookingDisabled: oe,
                            bookingNoSearchResult: re,
                            landlineNumber: w.landlineNumber,
                            vaccinationCenter: de,
                            message: M
                        }),
                        [ue, pe] = (0, a.useState)(me),
                        [ve, _e] = (0, a.useState)(D),
                        be = {
                            limit: J,
                            ...w,
                            date: ve
                        },
                        [he, ge] = (0, a.useState)({
                            availabilityData: P
                        }),
                        ye = e => {
                            let {
                                availabilityData: t,
                                ...i
                            } = e;
                            const a = { ...P,
                                next_slot: void 0
                            };
                            ge({
                                availabilityData: { ...a,
                                    ...t
                                },
                                ...i
                            })
                        },
                        fe = null === (t = he.availabilityData) || void 0 === t ? void 0 : t.availabilities,
                        xe = Math.max(...(null === fe || void 0 === fe ? void 0 : fe.map((e => {
                            let {
                                slots: t
                            } = e;
                            return t.length
                        }))) || []),
                        Se = A || he.loading || I && C;
                    (0, a.useEffect)((() => {
                        var e;
                        K.current || !P ? me || I || (ye({
                            loading: !0,
                            availabilityData: {
                                availabilities: null === (e = he.availabilityData) || void 0 === e ? void 0 : e.availabilities
                            }
                        }), N.Z.profiles.fetchAvailabilities(be, E).then((e => {
                            $.current && (le({
                                type: "NEW_AVAILABILITY_DATA",
                                availabilityData: e
                            }), (e.bookingDisabled || e.bookingTemporaryDisabled) && pe(H(e)), ye({
                                availabilityData: e,
                                loading: !1,
                                success: !0
                            }))
                        })).catch((e => {
                            $.current && ye({
                                error: e,
                                loading: !1,
                                success: !1
                            })
                        }))) : K.current = !0
                    }), [JSON.stringify(be), E]);
                    const je = he.success ? null === (i = he.availabilityData) || void 0 === i ? void 0 : i.reason : null,
                        Ze = [j.c8, j.$k, j.vk].includes(je),
                        Ne = Se || Number(b()(ve).startOf("day")) === Number(b()(D).startOf("day")) || !!ue && !Ze || E,
                        ke = Se || !!ue || E;
                    (0, a.useEffect)((() => {
                        if (!he && !ue) return;
                        const {
                            message: e,
                            reason: t,
                            parameters: i
                        } = he.availabilityData || {}, a = me || (0, U.FC)({
                            error: he.error,
                            reason: t,
                            messageFromRequest: e,
                            parameters: i,
                            landlineNumber: y,
                            forCovidVaccination: ce,
                            onTemporaryAppointmentDelete: n
                        });
                        if (pe(a), a !== _ && !Ze && h && h(a), R && fe) {
                            const e = fe.reduce(((e, t) => {
                                let {
                                    substitution: i
                                } = t;
                                return { ...e,
                                    ...i
                                }
                            }), {});
                            R(e)
                        }
                        if (L && fe) {
                            const e = fe.reduce(((e, t) => {
                                let {
                                    appointment_request_slots: i
                                } = t;
                                return i ? [...e, ...i] : e
                            }), []);
                            L(e)
                        }
                    }), [he]), (0, a.useEffect)((() => {
                        ue !== _ && !Ze && h && h(ue)
                    }), [ue]), (0, a.useEffect)((() => {
                        xe > 0 && X(g()(xe, u, u))
                    }), [fe, xe]), (0, a.useEffect)((() => {
                        if (E || Se || !fe) return;
                        const e = (0, U.Pj)(he.availabilityData || {}),
                            t = S()(fe, (e => {
                                let {
                                    slots: t
                                } = e;
                                return (null === t || void 0 === t ? void 0 : t.length) > 0
                            }));
                        if (te(e), ie) return;
                        t && V && V({
                            firstAvailableSlot: t.slots[0],
                            nextSlot: e
                        });
                        let i = "visible";
                        if (e ? i = "notVisible" : !ue && fe.some((e => e.slots.length > 0)) || (i = "noAvailability"), (0, l.ZP)({
                                name: "availabilitiesDisplay",
                                itemType: (0, B.m)(w.isOrganization),
                                itemId: w.profileId,
                                details: {
                                    label: i,
                                    is_appointment_request_enabled: (0, d.cr)("patient_appointment_requests")
                                }
                            }, {
                                schema: "patient"
                            }), null !== w && void 0 !== w && w.profileId) {
                            var a, n, o, r;
                            const e = {
                                profile_id: w.profileId,
                                profile_type: null !== w && void 0 !== w && w.isOrganization ? "establishmentsProfiles" : "practitioner",
                                practice_id: (null === w || void 0 === w || null === (a = w.practiceIds) || void 0 === a ? void 0 : a.length) > 0 ? w.practiceIds[0] : void 0,
                                visit_motive_id: (null === w || void 0 === w || null === (n = w.visitMotiveIds) || void 0 === n ? void 0 : n.length) > 0 ? null === w || void 0 === w ? void 0 : w.visitMotiveIds[0] : void 0,
                                availabilities: fe && (0, s.o8)({
                                    availabilities: fe
                                })
                            };
                            he.availabilityData && (0, s.oL)(he.availabilityData) === s.ul && (e.first_available_slot = null !== (o = he.availabilityData) && void 0 !== o && o.next_slot ? b()(null === (r = he.availabilityData) || void 0 === r ? void 0 : r.next_slot).toJSON() : null), (0, l.ZP)({
                                name: "profile_results_displayed_desktop",
                                details: e
                            }, {
                                schema: "patient"
                            })
                        }
                        ae(!0)
                    }), [ue, fe, Se]);
                    const De = v()(c, "dl-desktop-availabilities", {
                        "dl-desktop-availabilities-flat": p,
                        "dl-desktop-availabilities-disabled": E
                    });
                    return _ && o ? (0, T.jsx)("div", {
                        className: De,
                        style: {
                            width: m
                        },
                        children: (0, T.jsx)(F, { ..._
                        })
                    }) : (0, T.jsx)("div", {
                        className: De,
                        style: {
                            width: m
                        },
                        ref: ne,
                        children: (0, T.jsxs)("div", {
                            className: "dl-desktop-availabilities-inner",
                            children: [(0, T.jsxs)("div", {
                                className: "dl-desktop-availabilities-days",
                                style: {
                                    opacity: ue || ee ? "0.8" : "1"
                                },
                                children: [(0, T.jsx)(G.Z, {
                                    disabled: Ne,
                                    onClick: e => {
                                        (0, U.U1)(d.ZP.GTM_EVENTS.AVAILABILITIES_NAVIG_PREVIOUS_DAYS), _e((e => b()(e).subtract(J, "day").format("YYYY-MM-DD")))
                                    },
                                    position: "left"
                                }), f()(J).map((e => {
                                    const t = fe && fe[e] || {},
                                        i = t.date || b()(D).add(e, "day").format("YYYY-MM-DD");
                                    return (0, T.jsx)(k.Z, {
                                        selectedSlot: I,
                                        date: i,
                                        maxSlotNumber: Q,
                                        compact: o,
                                        slots: t.slots,
                                        appointmentRequestSlots: t.appointment_request_slots,
                                        substitution: t.substitution,
                                        onSlotSelect: e => {
                                            var i;
                                            (0, U.U1)("availabilitiesChooseSlot", {
                                                is_appointment_request_enabled: (0, d.cr)("patient_appointment_requests"),
                                                is_appointment_request: (null !== (i = t.appointment_request_slots) && void 0 !== i ? i : []).includes(e)
                                            }), x(e, t.slots.find((t => (t.start_date || t) === e)))
                                        }
                                    }, i)
                                })), (0, T.jsx)(G.Z, {
                                    disabled: ke,
                                    onClick: e => {
                                        (0, U.U1)(d.ZP.GTM_EVENTS.AVAILABILITIES_NAVIG_NEXT_DAYS), _e((e => b()(e).add(J, "day").format("YYYY-MM-DD")))
                                    },
                                    position: "right",
                                    message: ue
                                })]
                            }), (0, T.jsx)(z, {
                                onClick: () => {
                                    (0, U.U1)("availabilitiesMoreLaterInDay");
                                    const e = Q + 100;
                                    xe > 0 && X(g()(xe, u, e))
                                },
                                hasMoreSlots: xe > Q
                            }), (0, T.jsx)(Y, {
                                date: ee,
                                onSlotChange: e => {
                                    (0, U.U1)(d.ZP.GTM_EVENTS.AVAILABILITIES_NEXT_AVAILABILITY), _e(e)
                                },
                                showNoAvailabilityThisWeekMessage: J >= 7
                            }), ue && (0, T.jsx)(O, {
                                details: ue.details,
                                children: ue
                            }), (0, T.jsx)(q, {
                                delayedProgress: Se
                            })]
                        })
                    })
                }));
            W.defaultProps = {
                minDate: b()().format("YYYY-MM-DD")
            };
            const $ = W
        },
        43975: (e, t, i) => {
            i.d(t, {
                Z: () => S
            });
            var a = i(184481),
                n = i(977954),
                l = i.n(n),
                s = i(396026),
                o = i.n(s),
                r = i(56477),
                d = i(516590),
                c = i(294184),
                m = i.n(c),
                u = i(958530),
                p = i(182888),
                v = i(398198),
                _ = i(795361),
                b = i(785893),
                h = i(468644);
            const g = e => {
                    let {
                        className: t,
                        title: i,
                        onClick: a,
                        children: n,
                        disabled: l
                    } = e;
                    return (0, b.jsx)(h.Z, {
                        disabled: l,
                        component: "div",
                        className: m()("availabilities-slot", t),
                        onTap: a,
                        tabIndex: 0,
                        role: "button",
                        "aria-label": i,
                        title: i,
                        children: n
                    })
                },
                y = e => {
                    let {
                        disabled: t,
                        hasSubstitution: i,
                        selectedSlot: n,
                        slot: s,
                        onClick: o,
                        isAppointmentRequestSlot: r
                    } = e;
                    const [d, c] = (0, a.useState)(), {
                        createTrackingEventWithContext: h
                    } = (0, _.Z)(), y = () => {
                        o(s)
                    };
                    return (0, b.jsxs)(b.Fragment, {
                        children: [(0, b.jsxs)(g, {
                            disabled: t,
                            className: m()({
                                "availabilities-slot-selected": n === s
                            }),
                            title: l()(s).localizeTimeToParisTimeZone("ddd D MMM HH:mm"),
                            onClick: () => {
                                r ? (h({
                                    name: "patient_appointment_request_modal_displayed"
                                }), c(!0)) : y()
                            },
                            children: [r && (0, b.jsx)(p.Z, {
                                className: "desktop-appointment-request-slot-indicator"
                            }), i && (0, b.jsx)(u.Z, {
                                className: "desktop-availabilities-slot-substitution"
                            }), l()(s).localizeTimeToParisTimeZone("HH[:]mm")]
                        }), r && (0, b.jsx)(v.Z, {
                            showModal: d,
                            setShowModal: c,
                            onConfirm: () => y()
                        })]
                    })
                },
                f = () => (0, b.jsx)("div", {
                    className: "availabilities-empty-slot",
                    children: (0, b.jsx)("div", {
                        className: "availabilities-empty-slot-dash"
                    })
                }),
                x = (0, a.memo)(f),
                S = e => {
                    let {
                        selectedSlot: t,
                        date: i,
                        compact: n,
                        maxSlotNumber: s,
                        onSlotSelect: c,
                        slots: m,
                        substitution: u,
                        appointmentRequestSlots: p
                    } = e;
                    i = i ? l()(i) : null;
                    const v = m ? m.length : 0,
                        _ = Math.max(0, s - v),
                        h = (e => e ? Object.keys(e).reduce(((t, i) => e[i].slots.reduce(((e, t) => ({ ...e,
                            [t]: i
                        })), t)), {}) : {})(u),
                        {
                            unavailableSlots: g = []
                        } = (0, a.useContext)(r.ZP) || {};
                    return (0, b.jsxs)("div", {
                        className: "availabilities-day",
                        children: [(0, b.jsxs)("div", {
                            className: "availabilities-day-title",
                            children: [(0, b.jsx)("div", {
                                className: "availabilities-day-name",
                                children: n ? i.localize("ddd") : i.localize("dddd")
                            }), (0, b.jsx)("div", {
                                className: "availabilities-day-date",
                                children: i.localize("D MMM")
                            })]
                        }), (0, b.jsxs)("div", {
                            className: "availabilities-slots",
                            children: [m && m.slice(0, s).map((e => {
                                const i = e.start_date || e;
                                return (0, b.jsx)(y, {
                                    selectedSlot: t,
                                    slot: i,
                                    disabled: g.includes(i),
                                    hasSubstitution: Boolean(h[i]),
                                    isAppointmentRequestSlot: null === p || void 0 === p ? void 0 : p.includes(i),
                                    onClick: () => {
                                        (0, d.ck)({
                                            name: "select_availability"
                                        }, {
                                            schema: "patient"
                                        }), c(i)
                                    }
                                }, i)
                            })), o()(_).map((e => (0, b.jsx)(x, {}, e)))]
                        })]
                    })
                }
        },
        210346: (e, t, i) => {
            i.d(t, {
                Z: () => c
            });
            var a = i(184481),
                n = i(445884),
                l = i(294184),
                s = i.n(l),
                o = i(322009),
                r = i(845126);
            var d = i(785893);
            const c = (0, a.memo)((e => {
                let {
                    onClick: t,
                    disabled: i,
                    position: a
                } = e;
                const l = "left" === a ? "solid/chevron-left" : "solid/chevron-right",
                    c = "left" === a ? n.Z.t("common.availabilities.previous_availabilities") : n.Z.t("common.availabilities.next_availabilities");
                return (0, d.jsx)("div", {
                    className: s()("availabilities-pagination", {
                        "availabilities-pagination-disabled": i
                    }),
                    children: (0, d.jsx)(o.Z, {
                        size: "medium",
                        className: "dl-availabilities-pagination-icon-button",
                        color: i ? "faded" : "primary",
                        disabled: i,
                        title: c,
                        onTap: i ? null : t,
                        children: (0, d.jsx)(r.Z, {
                            name: l,
                            size: "large",
                            className: "availabilities-pagination-arrow"
                        })
                    })
                })
            }))
        },
        793345: (e, t, i) => {
            i.d(t, {
                Z: () => u
            });
            var a = i(827856),
                n = i.n(a),
                l = i(294184),
                s = i.n(l),
                o = i(445884),
                r = i(5212),
                d = i(755506),
                c = i(958530);
            var m = i(785893);
            const u = e => {
                var t;
                let {
                    substitutions: i,
                    className: a,
                    compact: l
                } = e;
                if (!i || 0 === Object.keys(i).length) return null;
                const u = Object.keys(i),
                    p = 1 === u.length,
                    v = n().sanitize(u[0], {
                        ALLOWED_TAGS: []
                    }),
                    _ = null === (t = Object.values(i)[0]) || void 0 === t ? void 0 : t.status,
                    b = "de" !== (0, r.rZ)() ? null === _ || void 0 === _ ? void 0 : _.toLowerCase() : _;
                return (0, m.jsxs)("div", {
                    children: [l && (0, m.jsx)(d.Z, {}), (0, m.jsxs)("div", {
                        className: s()("availabilities-substition-description", {
                            "availabilities-substition-description-compact": l
                        }, a),
                        children: [(0, m.jsx)(c.Z, {}), (0, m.jsx)("span", {
                            className: "availabilities-substition-name",
                            children: p ? l ? o.Z.t("patient_common.root.profiles.booking.availabilities.substitution_with_html", {
                                status: b,
                                name: v
                            }) : o.Z.t("patient_common.root.profiles.booking.availabilities.substitution_with", {
                                status: b,
                                name: v
                            }) : o.Z.t("patient_common.root.profiles.booking.availabilities.substitution")
                        })]
                    })]
                })
            }
        },
        944373: (e, t, i) => {
            i.d(t, {
                FC: () => h,
                Pj: () => f,
                Qj: () => y,
                U1: () => g
            });
            var a = i(445884),
                n = i(288802),
                l = i(990626),
                s = i(974691),
                o = i.n(s),
                r = i(977954),
                d = i.n(r),
                c = i(931381),
                m = i(943993),
                u = i(441609),
                p = i.n(u),
                v = i(414293),
                _ = i.n(v),
                b = i(785893);
            const h = e => {
                    let {
                        error: t,
                        messageFromRequest: i,
                        reason: n,
                        forCovidVaccination: l,
                        landlineNumber: s,
                        parameters: o
                    } = e;
                    if (t) return {
                        uiStyle: "error",
                        text: a.Z.t("patient_common.root.generic.error")
                    };
                    let r = i,
                        d = null;
                    if (l && n === c.vk && (r = a.Z.t("common.availabilities.no_availabilities_vaccination")), n === c.tF && (r = a.Z.t("common.availabilities.no_new_patients"), d = s && a.Z.t("common.availabilities.no_new_patients_details", {
                            landline_number: s
                        })), r) return {
                        uiStyle: "warning",
                        text: r,
                        details: d,
                        reason: n
                    };
                    if (n === c.kF) {
                        const {
                            next_step_path: e,
                            appointment_date: t,
                            appointment_id: i
                        } = o;
                        return {
                            element: (0, b.jsx)(m.Z, {
                                nextStepPath: e,
                                appointmentDate: t,
                                appointmentId: i,
                                onTemporaryAppointmentDelete: () => {
                                    window.location.reload()
                                }
                            })
                        }
                    }
                    return null
                },
                g = (e, t) => {
                    const i = n.Z.getCurrentPageType();
                    [l.ZP.GTM_CONTENT_GROUPS.ESTABLISHMENTS_PROFILES, l.ZP.GTM_CONTENT_GROUPS.PRACTITIONERS_PROFILES, l.ZP.GTM_CONTENT_GROUPS.PATIENT_SLOT_SELECTION_FUNNEL_DISPLAY].includes(i) && n.Z.trackGtmEvent({
                        category: i,
                        action: e,
                        ...t
                    })
                },
                y = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 72;
                    return o()(Math.round((e - 80) / t), 3, 7)
                },
                f = e => {
                    let {
                        availabilities: t,
                        next_slot: i
                    } = e;
                    return p()(t) || _()(i) || !d()(i).isValid() ? null : d()(i).format("YYYY-MM-DD")
                }
        },
        166343: (e, t, i) => {
            i.d(t, {
                Z: () => n
            });
            var a = i(785893);
            const n = e => t => {
                const {
                    appointmentId: i,
                    agendaIds: n,
                    visitMotive: l,
                    insuranceSector: s,
                    practiceIds: o
                } = t, r = { ...t,
                    data: {
                        agendaIds: n,
                        appointmentId: i,
                        practiceIds: o,
                        bookingDisabled: !1,
                        bookingTemporaryDisabled: !1,
                        insuranceSector: s,
                        visitMotiveIds: [l.id]
                    }
                };
                return (0, a.jsx)(e, { ...r
                })
            }
        },
        958530: (e, t, i) => {
            i.d(t, {
                Z: () => s
            });
            var a = i(294184),
                n = i.n(a);
            var l = i(785893);
            const s = e => {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: n()("availabilities-substitution-indicator", t)
                })
            }
        },
        943993: (e, t, i) => {
            i.d(t, {
                Z: () => h
            });
            var a = i(184481),
                n = i(977954),
                l = i.n(n),
                s = i(445884),
                o = i(545763),
                r = i(453040),
                d = i(511466),
                c = i(710270),
                m = i(192772),
                u = i(708221),
                p = i(5212),
                v = i(426613),
                _ = i(795361),
                b = i(785893);
            const h = e => {
                let {
                    nextStepPath: t,
                    onTemporaryAppointmentDelete: i,
                    appointmentDate: n,
                    appointmentId: h
                } = e;
                const [g, y] = (0, a.useState)(!1), f = (0, m.ZP)(), {
                    destroyTemporary: x,
                    loading: S,
                    success: j
                } = (0, c.Z)({
                    url: "/appointments/destroy_temporary",
                    trigger: "destroyTemporary",
                    method: "delete",
                    onSuccess: () => {
                        i()
                    }
                }), {
                    createTrackingEventWithContext: Z
                } = (0, _.Z)();
                (0, a.useEffect)((() => {
                    Z({
                        name: "display_existing_temporary_appointment",
                        additionalDetails: {
                            appointment_id: h
                        }
                    })
                }), []);
                return g || S || j ? (0, b.jsx)(d.Z, {}) : (0, b.jsxs)("div", {
                    className: "dl-flex-column dl-flex-center",
                    children: [(0, b.jsx)(r.Z, {
                        uiStyle: "body-s-regular",
                        component: "div",
                        align: "center",
                        "aria-live": "polite",
                        children: s.Z.t("patient_common.root.existing_temporary_appointment", {
                            date: l()(n).localizeTimeToParisTimeZone("dddd D MMMM \xe0 HH:mm")
                        })
                    }), (0, b.jsx)(o.Z, {
                        onTap: e => {
                            e.preventDefault(), y(!0), (0, p.rl)() ? f.show(t) : (0, u.Z)(t)
                        },
                        trackingId: "confirm_existing_temporary_appointment",
                        trackingDetails: {
                            appointment_id: h
                        },
                        trackingSchema: v.PA.patient,
                        uiStyle: "info-link",
                        block: !0,
                        children: s.Z.t("patient_common.root.confirm_appointment")
                    }), (0, b.jsx)(o.Z, {
                        onTap: e => {
                            e.preventDefault(), x()
                        },
                        trackingId: "cancel_existing_temporary_appointment",
                        trackingDetails: {
                            appointment_id: h
                        },
                        trackingSchema: v.PA.patient,
                        uiStyle: "danger",
                        block: !0,
                        children: s.Z.t("patient_common.root.cancel_appointment")
                    })]
                })
            }
        },
        752951: (e, t, i) => {
            i.d(t, {
                e5: () => a
            });
            const a = new Set(["Adulte - Consultation de m\xe9decine g\xe9n\xe9rale", "Avis m\xe9decin", "Enfant - Consultation de m\xe9decine g\xe9n\xe9rale", "Consultation", "Consultation de gyn\xe9cologie", "Consultation de gyn\xe9cologie m\xe9dicale", "Consultation de m\xe9decine g\xe9n\xe9rale", "Consultation de p\xe9diatrie", "Consultation de dermatologie", "Consultation gyn\xe9cologique", "Consultation p\xe9diatrique", "Consultation m\xe9decine g\xe9n\xe9rale", "Consultation simple Adulte", "Patient d\xe9j\xe0 suivi - M\xe9decine G\xe9n\xe9rale", "Renouvellement de traitement"])
        },
        58978: (e, t, i) => {
            i.d(t, {
                Z: () => s
            });
            var a = i(611728),
                n = i(785893);
            const l = {
                    disableHeight: !0
                },
                s = e => t => (0, n.jsx)(a.Z, { ...l,
                    children: i => {
                        if (0 === i.width && 0 === i.height) return null;
                        const a = { ...t
                        };
                        return l.disableHeight || (a.containerHeight = i.height), l.disableWidth || (a.containerWidth = i.width), (0, n.jsx)(e, { ...a
                        })
                    }
                })
        },
        212211: (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            const a = new(i(217192).Z)
        },
        398198: (e, t, i) => {
            i.d(t, {
                Z: () => p
            });
            var a = i(785893),
                n = i(445884),
                l = i(169339),
                s = i(383915),
                o = i(968461),
                r = i(929014),
                d = i(545763),
                c = i(528846),
                m = i(263729),
                u = i(795361);
            const p = e => {
                let {
                    showModal: t,
                    setShowModal: i,
                    onConfirm: p
                } = e;
                const {
                    createTrackingEventWithContext: v
                } = (0, u.Z)();
                return (0, a.jsxs)(l.Z, {
                    show: t,
                    title: n.Z.t("patient_common.root.appointment_requests.appointment_request_confirmation_modal.title"),
                    size: "small",
                    onHide: () => {
                        v({
                            name: "patient_appointment_request_modal_dismissed"
                        }), i(!1)
                    },
                    children: [(0, a.jsx)(s.Z, {
                        children: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: "flex dl-justify-center",
                                children: (0, a.jsx)(c.Z, {
                                    src: m,
                                    width: 120,
                                    className: "dl-margin-b-16",
                                    alt: ""
                                })
                            }), (0, a.jsx)(r.Z, {
                                uiStyle: "warning",
                                label: n.Z.t("patient_common.root.appointment_requests.appointment_request_confirmation_modal.warning_html")
                            })]
                        })
                    }), (0, a.jsx)(o.Z, {
                        children: (0, a.jsx)(d.Z, {
                            onClick: () => {
                                v({
                                    name: "patient_appointment_request_modal_validated"
                                }), i(!1), p()
                            },
                            children: n.Z.t("patient_common.root.appointment_requests.appointment_request_confirmation_modal.button")
                        })
                    })]
                })
            }
        },
        182888: (e, t, i) => {
            i.d(t, {
                Z: () => s
            });
            var a = i(785893),
                n = i(294184),
                l = i.n(n);
            const s = e => {
                let {
                    className: t
                } = e;
                return (0, a.jsx)("div", {
                    className: l()("appointment-request-slot-indicator", t)
                })
            }
        },
        108519: (e, t, i) => {
            i.d(t, {
                Z: () => n
            });
            var a = i(914679);
            const n = function() {
                let {
                    threshold: e = 0
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const [t, i] = "undefined" !== typeof IntersectionObserver ? (0, a.Z)({
                    threshold: e
                }) : [null, null];
                return [t, i]
            }
        },
        650337: (e, t, i) => {
            i.d(t, {
                b: () => m,
                v: () => c
            });
            var a = i(414293),
                n = i.n(a),
                l = i(618446),
                s = i.n(l),
                o = i(496486),
                r = i(359176),
                d = i(172371);
            const c = 0;

            function m(e, t) {
                if (t.isNewPatient && (e = e.filter((e => (0, r.mD)(e, t.insuranceSector)))), t.motiveIds && (e = e.filter((e => t.motiveIds && t.motiveIds.includes(e.id)))), t.specialityId && (e = e.filter((e => e.speciality_id === t.specialityId))), t.insuranceSector && t.agendas && (e = e.filter((0, d.Us)({
                        insuranceSector: t.insuranceSector,
                        agendaIds: t.agendas.map((e => e.id))
                    }))), t.motiveCategoryIds && !(0, o.isEmpty)(t.motiveCategoryIds)) {
                    const i = s()(t.motiveCategoryIds, [c]) ? [null] : t.motiveCategoryIds;
                    e = e.filter((e => {
                        let {
                            visit_motive_category_id: t
                        } = e;
                        return i.includes(t)
                    }))
                }
                return n()(t.telehealth) || (e = e.filter((e => t.telehealth === e.telehealth))), e
            }
        },
        629161: (e, t, i) => {
            i.d(t, {
                Bl: () => m,
                FY: () => v,
                Or: () => p,
                xw: () => u
            });
            var a = i(594654),
                n = i.n(a),
                l = i(944908),
                s = i.n(l),
                o = i(393386),
                r = i.n(o),
                d = i(441609),
                c = i.n(d);

            function m(e) {
                return s()(n()(e, (e => e.practice_id ? e.practice_id : Object.keys(e.visit_motive_ids_by_practice_id).map(Number))))
            }

            function u(e, t, i) {
                return i && "NO_PREFERENCE" !== i ? function(e, t) {
                    const i = e.find((e => {
                        let {
                            id: i
                        } = e;
                        return i === t
                    }));
                    return i ? i.practice_ids : []
                }(e, i) : m(t)
            }

            function p(e, t) {
                return e.filter((e => {
                    let {
                        practice_ids: i
                    } = e;
                    return i.some((e => t.includes(e)))
                }))
            }

            function v(e, t) {
                const i = m(e),
                    a = function(e, t) {
                        const i = t.map((e => e.id));
                        return e.reduce(((e, t) => (Object.entries(t.visit_motive_ids_by_practice_id).forEach((t => {
                            let [a, n] = t;
                            const l = n.filter((e => i.includes(e)));
                            e[a] = r()(e[a] || [], l)
                        })), e)), {})
                    }(e, t);
                return i.filter((e => !c()(a[e])))
            }
        },
        359176: (e, t, i) => {
            i.d(t, {
                PT: () => Z,
                RI: () => y,
                Rd: () => g,
                Yn: () => j,
                mD: () => S,
                pG: () => f,
                pK: () => N,
                wd: () => x
            });
            var a = i(594654),
                n = i.n(a),
                l = i(510752),
                s = i.n(l),
                o = i(607739),
                r = i.n(o),
                d = i(253632),
                c = i.n(d),
                m = i(478718),
                u = i.n(m),
                p = i(189734),
                v = i.n(p),
                _ = i(944908),
                b = i.n(_),
                h = i(629161);

            function g(e, t, i) {
                return function(e, t) {
                    const i = s()(e.map((e => {
                        const i = u()(e.visit_motive_ids_by_practice_id, t);
                        return Object.values(i)
                    })));
                    return b()(i)
                }(e, (0, h.xw)(t, e, i))
            }
            const y = (e, t) => {
                const i = ((e, t) => t.map(((t, i) => {
                        const {
                            visit_motive_category_id: a
                        } = t, n = a ? e.find((e => {
                            let {
                                ids: t
                            } = e;
                            return t.has(a)
                        })) : void 0, l = n && n.key;
                        return { ...t,
                            visit_motive_category_key: l,
                            key: [t.name, t.speciality_id, l, t.configurations && i].filter(Boolean).join("-")
                        }
                    })))(e, t),
                    a = r()(i, "key"),
                    l = n()(a, (e => {
                        const t = u()(e[0], ["key", "name", "speciality_id", "organization_id", "visit_motive_category_key", "configurations", "vaccination_motive", "covid_vaccination_set_appointment_organization", "first_shot_motive", "vaccination_days_range", "allow_new_patients", "allow_new_patients_on_insurance_sector"]),
                            i = e.map((e => u()(e, ["id", "allow_new_patients", "allow_new_patients_on_insurance_sector", "configurations"])));
                        return { ...t,
                            telehealth: e.some((e => e.telehealth)),
                            ids: new Set(e.map((e => e.id))),
                            position: c()(e.map((e => e.position))) || 1 / 0,
                            visitMotives: i
                        }
                    }));
                return v()(l, ["position", "name"])
            };

            function f() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.some((e => {
                    let {
                        vaccination_motive: t,
                        covid_vaccination_set_appointment_organization: i
                    } = e;
                    return t && i
                }))
            }

            function x(e) {
                return e.map((e => e.id))
            }
            const S = (e, t) => !!e.allow_new_patients || !!e.allow_new_patients_on_insurance_sector && (t ? t === e.allow_new_patients_on_insurance_sector : !e.configurations || e.configurations.some((t => t.insurance === e.allow_new_patients_on_insurance_sector))),
                j = (e, t) => 0 === e.length || e.every((e => !S(e, t))),
                Z = e => e.some((e => !e.allow_new_patients)),
                N = (e, t, i) => Boolean(t) && e.visitMotives.every((e => !S(e, i)))
        },
        349381: () => {},
        207575: () => {},
        405360: () => {},
        159726: () => {},
        600709: () => {},
        689666: () => {},
        792105: () => {},
        337559: () => {},
        858401: () => {},
        121287: () => {},
        45410: () => {},
        485440: () => {},
        641792: () => {},
        602366: (e, t, i) => {
            e.exports = i.p + "a0862a159ff8bf675d97.png"
        },
        263729: (e, t, i) => {
            e.exports = i.p + "a7970a180330b6cc8054.svg"
        }
    }
]);
//# sourceMappingURL=37754-5481a060bd6b19bccdbc.js.map