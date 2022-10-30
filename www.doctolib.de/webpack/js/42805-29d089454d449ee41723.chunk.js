"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [42805], {
        745244: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            n(499655);
            var o = n(785893);
            const i = e => {
                const {
                    children: t,
                    component: n
                } = e, i = n || "div";
                return (0, o.jsx)(i, {
                    className: "dl-card-section-title",
                    "data-design-system": "base",
                    children: t
                })
            }
        },
        574682: (e, t, n) => {
            n.d(t, {
                Z: () => M,
                R: () => F
            });
            var o = n(977954),
                i = n.n(o),
                a = n(445884),
                s = n(451421),
                r = n(172099),
                l = n(192772),
                c = n(545763),
                d = n(453040),
                p = n(406288),
                m = n(755506),
                u = n(857152),
                h = n(173493),
                _ = n(534130),
                Z = n(294184),
                x = n.n(Z),
                g = n(800274),
                j = n(184481),
                v = n(24553),
                f = n(72281),
                y = n(169339),
                b = n(383915),
                w = n(968461),
                N = n(437124),
                I = n(951969),
                C = n(129303),
                T = n(923663),
                k = n(785893);
            const A = e => {
                let {
                    appointment: {
                        id: t,
                        patient: n,
                        profile: o
                    },
                    children: i
                } = e;
                const [s, r] = (0, j.useState)(!1), [l, d] = (0, j.useState)(!1), [p, m] = (0, j.useState)(!1), u = (0, v.useNavigate)(), {
                    platforms: {
                        android: h,
                        ios: _,
                        reactNative: Z
                    }
                } = window;
                return (0, k.jsxs)(k.Fragment, {
                    children: [(0, k.jsxs)(y.Z, {
                        show: p,
                        title: a.Z.t("patient_common.root.telehealth.service_unavailable_title"),
                        children: [(0, k.jsx)(b.Z, {
                            children: a.Z.t("patient_common.root.telehealth.service_unavailable_html", {
                                name: o.name_with_title,
                                phone_number: (0, T.un)(n.phone_number)
                            })
                        }), (0, k.jsx)(w.Z, {
                            children: (0, k.jsx)(c.Z, {
                                onTap: () => m(!1),
                                children: a.Z.t("common.got_it")
                            })
                        })]
                    }), (0, k.jsx)(f.Z, {
                        show: s,
                        onHide: () => r(!1)
                    }), i({
                        onTap: async e => {
                            let n;
                            e.stopPropagation(), d(!0);
                            try {
                                n = await N.ZP.post("/video_chats", {
                                    body: {
                                        appointment_id: t
                                    }
                                }), d(!1)
                            } catch (e) {
                                return void m(!0)
                            }
                            const {
                                token: o,
                                room_name: i,
                                temporary_auth_token: a,
                                use_native_tokbox: s
                            } = n.bodyData;
                            if (!Z) {
                                const e = `/video-chat/${t}/setup`;
                                return void(u ? u(e) : window.location = e)
                            }
                            if (h && (0, I.vG)("3.2.20") || _ && (0, I.vG)("3.2.22")) {
                                if (await C.ZP.call({
                                        method: "openVideo",
                                        params: [o, i, t, a, s]
                                    }), s) {
                                    const {
                                        bodyData: {
                                            surcharge: e
                                        }
                                    } = await N.ZP.get(`/appointments/${t}/surcharge`);
                                    u(e ? `/surcharges/${e.uuid}` : `/video-chat/${t}/feedback`)
                                }
                            } else r(!0)
                        },
                        disabled: l
                    })]
                })
            };
            var O = n(520711);
            const P = (e, t) => {
                    var n;
                    return (null === e || void 0 === e || null === (n = e.telehealth) || void 0 === n ? void 0 : n.ready) || Array.isArray(e) && e.some((e => {
                        var n;
                        return (0, s.fH)(null === e || void 0 === e ? void 0 : e.id, t) && (null === e || void 0 === e || null === (n = e.telehealth) || void 0 === n ? void 0 : n.ready)
                    }))
                },
                E = e => {
                    let {
                        appointment: t
                    } = e;
                    const n = (0, g.ZP)();
                    (0, r.Z)({
                        name: "telehealth_display_wait_section",
                        itemId: t.id,
                        itemType: "Appointment"
                    }, {
                        schema: "patient"
                    });
                    const [o] = (0, O.Z)({
                        url: n ? `/appointments/${t.id}.json` : "/appointments/anonymous",
                        delay: 2e4,
                        until: e => P(e, t.id)
                    }), i = P(o, t.id);
                    return (0, k.jsxs)("div", {
                        children: [(0, k.jsx)(d.Z, {
                            children: a.Z.t("common.telehealth.when_to_join_html")
                        }), (0, k.jsx)(A, {
                            appointment: t,
                            children: e => {
                                let {
                                    onTap: t,
                                    disabled: n
                                } = e;
                                return (0, k.jsx)(c.Z, {
                                    onTap: t,
                                    disabled: n || !i,
                                    className: "dl-margin-t-16",
                                    block: !0,
                                    children: a.Z.t("common.telehealth.setup.join")
                                })
                            }
                        })]
                    })
                },
                q = e => {
                    let {
                        appointment: t
                    } = e;
                    return (0, r.Z)({
                        name: "telehealth_display_join_section",
                        itemId: t.id,
                        itemType: "Appointment"
                    }, {
                        schema: "patient"
                    }), (0, k.jsxs)("div", {
                        children: [(0, k.jsx)(d.Z, {
                            children: a.Z.t("common.telehealth.just_before")
                        }), (0, k.jsx)(A, {
                            appointment: t,
                            children: e => {
                                let {
                                    onTap: t,
                                    disabled: n
                                } = e;
                                return (0, k.jsx)(c.Z, {
                                    onTap: t,
                                    disabled: n,
                                    className: "dl-margin-t-16",
                                    block: !0,
                                    children: a.Z.t("common.telehealth.setup.join")
                                })
                            }
                        })]
                    })
                },
                R = e => {
                    let {
                        appointment: t,
                        compact: n
                    } = e;
                    const o = [];
                    return (0, u.od)(t) ? o.push(q) : o.push(E), (0, k.jsx)("div", {
                        className: x()("dl-margin-x-16 dl-margin-y-16"),
                        children: o.map(((e, o) => (0, k.jsx)(e, {
                            step: o + 1,
                            appointment: t,
                            compact: n
                        }, o)))
                    })
                },
                S = e => {
                    let {
                        degradedMode: t
                    } = e;
                    return (0, k.jsx)(p.Z, {
                        leftIcon: "info-circle",
                        children: (0, k.jsx)(d.Z, {
                            children: a.Z.t(t ? "patient_common.root.telehealth.degraded_mode_finalizing_html" : "patient_common.root.telehealth.finalizing_status")
                        })
                    }, "finalizing")
                },
                D = e => {
                    let {
                        appointment: t
                    } = e;
                    (0, r.Z)({
                        name: "telehealth_display_payment_required",
                        itemId: (0, s.id)(t.id),
                        itemType: "Appointment"
                    }, {
                        schema: "patient"
                    });
                    const n = (0, l.ZP)(),
                        {
                            cancelable: o,
                            id: u,
                            start_date: h,
                            phone_number: Z,
                            too_late_to_cancel: x,
                            uncancelable_reason: g,
                            displayBillingStep: j,
                            needs_preparation: v,
                            profile: {
                                name_with_title: f
                            } = {}
                        } = t;
                    return (0, k.jsxs)(p.Z, {
                        contentClassName: "dl-padding-b-0",
                        children: [(0, k.jsx)(d.Z, {
                            className: "dl-flex-center",
                            children: a.Z.t("common.telehealth.payment_required.description")
                        }), (0, k.jsx)(c.Z, {
                            block: !0,
                            uiStyle: "warning",
                            className: "dl-margin-y-16",
                            onTap: e => {
                                e.stopPropagation(), n.show({
                                    pathname: `/appointments/${u}/charges/new`,
                                    search: window.location.search
                                })
                            },
                            children: a.Z.t("common.telehealth.payment_required.cta")
                        }), (0, k.jsx)(m.Z, {}), (0, k.jsx)("div", {
                            className: "dl-flex-center",
                            children: (0, k.jsx)(_.Z, {
                                buttonClassName: "dl-full-width",
                                cancelable: o,
                                appointmentId: u,
                                date: h,
                                doctorName: f,
                                doctorPhone: Z,
                                tooLate: x,
                                uncancelableReason: g,
                                pricing: j,
                                needsPreparation: v,
                                future: i()(h).isAfter(),
                                block: !1
                            })
                        })]
                    })
                },
                F = e => {
                    let {
                        appointment: t,
                        compact: n,
                        future: o
                    } = e;
                    return !t.telehealth || t.canceled || (0, u.Yc)(t) ? null : t.needs_preparation && i()(t.start_date).isAfter(i()().startOf("day")) ? (0, k.jsx)(h.Z, {
                        children: (0, k.jsx)(D, {
                            appointment: t
                        })
                    }) : (0, u.ZF)(t) ? (0, k.jsx)(h.Z, {
                        children: (0, k.jsx)(S, {
                            degradedMode: t.telehealth.degraded_mode
                        })
                    }) : o || (0, u.od)(t) ? (0, k.jsx)(h.Z, {
                        children: (0, k.jsx)(R, {
                            appointment: t,
                            compact: n
                        })
                    }) : null
                },
                M = e => F(e)
        },
        429810: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var o = n(184481),
                i = n(977954),
                a = n.n(i),
                s = n(710270),
                r = n(406288),
                l = n(778075),
                c = n(179522),
                d = n(453040),
                p = n(445884),
                m = n(173493),
                u = n(137912);
            var h = n(785893);
            const _ = e => {
                    let {
                        appointmentDate: t,
                        firstTimeDisplay: n,
                        defaultChecked: i,
                        appointmentId: _,
                        alertEligible: Z
                    } = e;
                    const [x, g] = (0, o.useState)(!1), [j, v] = (0, o.useState)(i), [f, y] = (0, o.useState)(!Z && !j), {
                        createAlert: b
                    } = (0, s.Z)({
                        url: "/appointment_alerts.json",
                        trigger: "createAlert",
                        method: "post",
                        query: {
                            appointment_id: _
                        },
                        onSuccess: () => {
                            g(!0), v(!0)
                        }
                    }), {
                        removeAlert: w
                    } = (0, s.Z)({
                        url: `/appointment_alerts/${_}.json`,
                        trigger: "removeAlert",
                        method: "delete",
                        onSuccess: () => v(!1)
                    });
                    let N, I;
                    return j ? (N = p.Z.t("patient_common.root.account.appointments.details.alert.title_with_alert"), I = p.Z.t("patient_common.root.account.appointments.details.alert.body_with_alert")) : (N = n ? p.Z.t("patient_common.root.account.appointments.details.alert.title_without_alert") : p.Z.t("patient_common.root.account.appointments.details.alert.title_without_alert_state"), I = p.Z.t("patient_common.root.account.appointments.details.alert.body_without_alert")), (0, o.useEffect)((() => {
                        y(!Z && !j)
                    }), [Z, j]), (0, h.jsxs)(m.Z, {
                        children: [(0, h.jsx)(r.Z, {
                            contentClassName: "dl-padding-0 dl-padding-y-8",
                            children: (0, h.jsxs)(c.Z, {
                                border: !1,
                                disabled: f,
                                children: [(0, h.jsx)(c.Z.Icon, {
                                    className: "dl-margin-t-4",
                                    color: "neutral-090",
                                    name: "solid/bell",
                                    align: "top"
                                }), (0, h.jsxs)(c.Z.Content, {
                                    className: "dl-margin-l-8",
                                    children: [(0, h.jsx)(c.Z.Title, {
                                        uiStyle: "body-s-bold",
                                        color: "neutral-130",
                                        children: N
                                    }), (0, h.jsx)(c.Z.Description, {
                                        children: f ? (0, h.jsx)(d.Z, {
                                            color: "warning-090",
                                            children: p.Z.t("patient_common.root.account.appointments.details.alert.warning.not_eligible", {
                                                days: "5"
                                            })
                                        }) : I
                                    })]
                                }), (0, h.jsx)(c.Z.Toggle, {
                                    labelClassName: "dl-margin-l-16",
                                    checked: j,
                                    name: "on_waitlist",
                                    onChange: e => {
                                        e ? b() : w()
                                    }
                                })]
                            })
                        }), (0, h.jsx)(l.Z, {
                            acceptText: p.Z.t("common.actions.continue"),
                            onAccept: () => {
                                g(!1)
                            },
                            show: x,
                            title: p.Z.t("patient_common.root.account.appointments.details.alert.dialog_title"),
                            children: p.Z.t("patient_common.root.account.appointments.details.alert.dialog_body_html", {
                                date: a()(t).format((0, u.T)("dddd D MMMM \xe0 HH:mm"))
                            })
                        })]
                    })
                },
                Z = (0, o.memo)(_)
        },
        395591: (e, t, n) => {
            n.d(t, {
                Z: () => ze
            });
            var o = n(184481),
                i = n.n(o),
                a = n(977954),
                s = n.n(a),
                r = n(24553),
                l = n(5212),
                c = n(192772),
                d = n(710270),
                p = n(800274),
                m = n(990626),
                u = n(445884),
                h = n(396693),
                _ = n(47871),
                Z = n(889736),
                x = n(294184),
                g = n.n(x),
                j = n(952893),
                v = n(516590),
                f = n(752646),
                y = n(857152),
                b = n(755506),
                w = n(929014),
                N = n(784600),
                I = n(453040),
                C = n(406288),
                T = n(591035),
                k = n(162622),
                A = n(220209),
                O = n(129106),
                P = n(288802),
                E = n(845126),
                q = n(534130),
                R = n(545763);
            var S = n(785893);
            const D = e => !e.canceled || e.is_movable,
                F = e => {
                    let {
                        appointment: t,
                        appointmentRequest: n,
                        universalRedirect: o
                    } = e;
                    const {
                        cancelable: i,
                        canceled: a,
                        is_movable: r,
                        id: l,
                        start_date: c,
                        phone_number: d,
                        too_late_to_cancel: p,
                        uncancelable_reason: h,
                        profile: {
                            name_with_title: _,
                            cloudinary_public_id: Z
                        } = {}
                    } = t, x = s()(c).isAfter(), g = n && n.status !== A.G.CONFIRMED;
                    return D(t) ? (0, S.jsx)(C.Z, {
                        children: (0, S.jsxs)("div", {
                            className: "dl-appointment-card-edit-actions",
                            children: [r && !n && (0, S.jsxs)(R.Z, {
                                onTap: () => {
                                    P.Z.trackGtmEvent({
                                        category: m.ZP.GTM_CATEGORIES.ACCOUNT_APPOINTMENT_DETAILS,
                                        action: "changeSlot"
                                    }), o(`/appointments/${t.id}/move/new`)
                                },
                                uiStyle: "link-primary",
                                className: "dl-margin-y-16",
                                children: [(0, S.jsx)(E.Z, {
                                    name: "solid/clock-rotate-left",
                                    size: "xsmall",
                                    className: "dl-margin-r-8",
                                    color: "primary-110"
                                }), (0, S.jsx)("span", {
                                    children: u.Z.t("patient_mobile.root.account.appointments.details.move_appointment")
                                })]
                            }, "move"), !a && (0, S.jsx)(q.Z, {
                                cancelable: i,
                                appointmentId: l,
                                date: c,
                                doctorName: _,
                                doctorPhone: d,
                                doctorAvatar: Z,
                                uncancelableReason: h,
                                tooLate: p,
                                future: x,
                                block: !1,
                                isRequestCancelation: g
                            }, "cancel")]
                        })
                    }) : null
                };
            var M = n(574682),
                L = n(411422),
                $ = n(451421),
                G = n(261397);
            const z = e => {
                    let {
                        appointmentRequestComment: t,
                        patientId: n
                    } = e;
                    const {
                        decryptRecord: i
                    } = (0, o.useContext)(G.WA), [a, r] = (0, o.useState)(), l = (0, o.useCallback)((async () => await i.v2({
                        body: !0
                    }, t, "AppointmentRequestModal/decryptComment", {
                        subject_type: "Patient",
                        subject_id: (0, $.id)(n)
                    })), [t, n, i]);
                    return (0, o.useEffect)((() => {
                        t && l().then((e => {
                            r(e)
                        }))
                    }), [t, l]), t && (0, S.jsx)(C.Z, {
                        children: (0, S.jsxs)(N.Z, {
                            className: "appointment-request-comment",
                            bgColor: "neutral-010",
                            variant: "stroke",
                            children: [(0, S.jsx)("div", {
                                children: null === a || void 0 === a ? void 0 : a.body
                            }), (0, S.jsx)("div", {
                                children: s()(t.created_at).localize("DD/MM/YYYY HH[h]mm")
                            })]
                        })
                    })
                },
                B = e => {
                    let {
                        appointmentRequest: t,
                        patientId: n
                    } = e;
                    return (0, m.cr)("patient_appointment_requests") && Boolean(t) && t.status !== A.G.CONFIRMED ? (0, S.jsx)(S.Fragment, {
                        children: t.comments.map((e => (0, S.jsx)(z, {
                            appointmentRequestComment: e,
                            patientId: n
                        }, e.id)))
                    }) : null
                };
            var H = n(580163),
                Y = n(160160),
                U = n(975645),
                W = n(982761),
                K = n(298264),
                V = n(320002);
            const Q = e => {
                let {
                    appointment: t,
                    appointmentRequest: n
                } = e;
                const [i, a] = (0, o.useState)(!1), s = (0, H.ZP)(), {
                    fetchDocuments: r
                } = (0, W.Z)(), {
                    mutate: l
                } = (0, V.uK)(t.id);
                return (0, S.jsxs)(S.Fragment, {
                    children: [(0, S.jsx)("div", {
                        className: "dl-padding-16",
                        children: (0, S.jsx)(R.Z, {
                            uiStyle: "primary",
                            block: !0,
                            onClick: () => {
                                var e;
                                a(!0), (0, v.ZP)({
                                    name: "patient_appointment_request_to_complete_click",
                                    itemId: String(t.profile.id),
                                    itemType: (0, f.m)(t.profile.organization),
                                    details: {
                                        profile_id: t.profile.id,
                                        practice_id: null === (e = t.practice) || void 0 === e ? void 0 : e.id,
                                        speciality_id: t.profile.speciality_id,
                                        appointment_telehealth: Boolean(t.telehealth),
                                        appointment_id: parseInt(t.id, 10),
                                        is_appointment_request: !0,
                                        is_appointment_request_enabled: (0, m.cr)("patient_appointment_requests"),
                                        request_status: n.status,
                                        profile_type: t.profile.organization ? "organization" : "practitioner",
                                        visit_motive_id: t.visit_motive_id,
                                        page_url: document.URL,
                                        referrer: document.referrer
                                    }
                                }, {
                                    schema: "patient"
                                })
                            },
                            children: u.Z.t("patient_common.root.account.appointments.appointment_request.complete_my_request")
                        })
                    }, "complete-request-button-div"), i && (0, S.jsx)(W.L, {
                        masterPatientId: t.patient.master_patient_id,
                        appointmentId: void 0,
                        children: (0, S.jsx)(K.Z, {
                            profile: null === t || void 0 === t ? void 0 : t.profile,
                            appointment: t,
                            setShowModal: a,
                            sharingFunnelId: (0, Y.Z)(),
                            onSuccess: () => {
                                const e = t.substitute_name || (0, U.WU)(t.profile);
                                a(!1), r(), s({
                                    message: u.Z.t("patient_common.root.documents.sharing_successful", {
                                        doctor_name: e
                                    }),
                                    uiStyle: "success"
                                }), l(n.id)
                            },
                            source: "appointment_request_completion"
                        })
                    }, "document-sharing-modal"), ","]
                })
            };
            var J = n(321650),
                X = n(527926),
                ee = n(256320),
                te = n(745244);
            const ne = e => {
                    let {
                        steps: t
                    } = e;
                    return (0, S.jsxs)(C.Z, {
                        leftIcon: "arrows-rotate",
                        children: [(0, S.jsx)(te.Z, {
                            children: u.Z.t("patient_common.root.appointments.appointment_set_title")
                        }), t.map((e => (0, S.jsx)("div", {
                            children: (0, S.jsx)(ee.Z, {
                                date: e.start_date
                            })
                        }, e.start_date)))]
                    })
                },
                oe = e => {
                    let {
                        qrCode: t
                    } = e;
                    return (0, S.jsxs)(C.Z, {
                        children: [(0, S.jsx)(I.Z, {
                            component: "div",
                            children: u.Z.t("patient_common.root.appointments.qrcode_description")
                        }), (0, S.jsx)("div", {
                            className: "dl-text-center dl-margin-y-16",
                            children: (0, S.jsx)("img", {
                                src: t,
                                alt: "QR Code"
                            })
                        })]
                    })
                };
            var ie = n(429810),
                ae = n(124854),
                se = n(536442),
                re = n(337209),
                le = n(851747),
                ce = n(898839),
                de = n(743977),
                pe = n(686569);
            const me = e => {
                    let {
                        latitude: t,
                        longitude: n,
                        address: i,
                        zipcode: a,
                        city: s,
                        show: r
                    } = e;
                    const l = {
                            lat: t,
                            lng: n
                        },
                        {
                            hasMapConsent: c,
                            trackedFeatureType: d
                        } = (0, o.useContext)(re.ZP);
                    return (0, o.useEffect)((() => {
                        (0, v.ZP)({
                            name: "patient_map_displayed",
                            details: {
                                opted_in: c,
                                type: d
                            }
                        }, {
                            schema: "patient"
                        })
                    }), [c, d]), (0, S.jsx)(de.Z, {
                        show: r,
                        smallSize: !0,
                        trackConsentAccepted: e => {
                            let {
                                type: t
                            } = e;
                            return (0, v.ZP)({
                                name: "patient_gives_map_consent",
                                details: {
                                    type: t
                                }
                            }, {
                                schema: "patient"
                            })
                        },
                        children: (0, S.jsx)(ce.Z, {
                            address: i,
                            zipcode: a,
                            city: s,
                            children: (0, S.jsx)(pe.Z, {
                                center: l,
                                children: (0, S.jsx)(le.Z, {
                                    position: l,
                                    color: "selected-primary-110",
                                    size: "large"
                                })
                            })
                        })
                    })
                },
                ue = (0, o.memo)(me);
            var he = n(116606),
                _e = n(919469),
                Ze = n(420841),
                xe = n(951969),
                ge = n(508789),
                je = n(129303),
                ve = n(72281),
                fe = n(347964);
            const ye = e => {
                    let {
                        charge: t,
                        surcharge: n
                    } = e;
                    const [i, a] = (0, o.useState)(!1), {
                        tokenize: s,
                        loading: r
                    } = (0, d.Z)({
                        url: `/download/charges/${null===t||void 0===t?void 0:t.id}/tokenize`,
                        trigger: "tokenize",
                        onSuccess: e => {
                            let {
                                data: t
                            } = e;
                            je.ZP.call({
                                method: "openExternalDocument",
                                params: [t.url]
                            })
                        }
                    });
                    return null !== n && void 0 !== n && n.unpaid ? null : (0, S.jsxs)(C.Z, {
                        leftIcon: "euro-sign",
                        children: [(0, S.jsx)(te.Z, {
                            children: u.Z.t("common.telehealth.fee_title")
                        }), (0, S.jsxs)("div", {
                            className: "flex dl-justify-between dl-align-items-center",
                            children: [(0, S.jsx)("div", {
                                children: u.Z.t("common.telehealth.amount_label", {
                                    amount: (0, ge.g3)(t, n)
                                })
                            }), t && (0, S.jsx)(R.Z, {
                                uiStyle: "info-link",
                                disabled: r,
                                onTap: () => {
                                    const {
                                        platforms: {
                                            reactNative: e,
                                            android: n,
                                            ios: o
                                        }
                                    } = window;
                                    e ? n && !(0, xe.vG)(fe.OO) || o && !(0, xe.vG)(fe.xZ) ? a(!0) : s() : window.location.pathname = `/download/charges/${t.id}.pdf`
                                },
                                children: u.Z.t("common.download")
                            })]
                        }), (0, S.jsx)(ve.Z, {
                            show: i,
                            onHide: () => a(!1)
                        })]
                    })
                },
                be = e => {
                    let {
                        surcharge: t
                    } = e;
                    const n = (0, c.ZP)(),
                        o = t.amount / 100;
                    return (0, S.jsxs)(C.Z, {
                        children: [(0, S.jsxs)("div", {
                            className: "flex",
                            children: [(0, S.jsx)("div", {
                                className: "dl-padding-r-8",
                                style: {
                                    marginTop: "3px"
                                },
                                children: (0, S.jsx)(E.Z, {
                                    name: "solid/diamond-exclamation",
                                    color: "error-110"
                                })
                            }), (0, S.jsxs)("div", {
                                className: "dl-flex-column",
                                children: [(0, S.jsx)(I.Z, {
                                    uiStyle: "body-s-bold",
                                    color: "error-110",
                                    children: u.Z.t("appointments.surcharge.title", {
                                        amount: o
                                    })
                                }), (0, S.jsx)(I.Z, {
                                    color: "error-110",
                                    children: u.Z.t("appointments.surcharge.subtitle")
                                })]
                            })]
                        }), (0, S.jsx)(R.Z, {
                            block: !0,
                            className: "dl-margin-t-16",
                            onClick: () => n.show(`/surcharges/${t.uuid}`),
                            children: u.Z.t("appointments.surcharge.cta")
                        })]
                    })
                };
            var we = n(747317);
            const Ne = e => {
                let {
                    appointmentId: t,
                    onTap: n
                } = e;
                (0, o.useEffect)((() => {
                    (0, v.ZP)({
                        name: "telehealth_eligible_to_conversion",
                        itemType: we.i.APPOINTMENT,
                        itemId: t,
                        details: {
                            source: "appointment_card"
                        }
                    })
                }), []);
                return (0, S.jsx)(C.Z, {
                    children: (0, S.jsxs)("div", {
                        className: "section-wrapper",
                        children: [(0, S.jsx)(I.Z, {
                            className: "explanation-text",
                            children: u.Z.t("common.telehealth.convert_appointment.video_recommended")
                        }), (0, S.jsx)(R.Z, {
                            block: !0,
                            leftIcon: "solid/video",
                            onTap: () => {
                                (0, v.ZP)({
                                    name: "telehealth_click_on_conversion",
                                    itemType: we.i.APPOINTMENT,
                                    itemId: t
                                }), n()
                            },
                            children: u.Z.t("common.telehealth.convert_appointment.convert_to_video")
                        })]
                    })
                })
            };
            var Ie = n(335963);
            const Ce = e => {
                let {
                    vaccineName: t
                } = e;
                return (0, S.jsxs)(C.Z, {
                    leftIcon: "solid/syringe",
                    children: [(0, S.jsx)(te.Z, {
                        children: u.Z.t("appointments.vaccine_kind")
                    }), (0, S.jsx)(Ie.Z, {
                        color: "primary-020",
                        className: "dl-margin-t-8 dl-capitalize",
                        label: t
                    })]
                })
            };
            var Te = n(508050),
                ke = n(173493);
            const Ae = e => {
                    let {
                        appointmentId: t,
                        wrapWithProvider: n,
                        children: o
                    } = e;
                    return n ? (0, S.jsx)(X.D, {
                        children: (0, S.jsx)(W.L, {
                            appointmentId: t,
                            children: o
                        }, `appointment-${t}`)
                    }) : o
                },
                Oe = () => (0, S.jsx)(w.Z, {
                    variant: "deprecated-alert-interface",
                    uiStyle: "tips",
                    children: `${u.Z.t("appointments.anonymous_show.online_booking_cta.title")} ${u.Z.t("appointments.anonymous_show.online_booking_cta.content")}`
                }),
                Pe = e => {
                    var t, n, o;
                    let {
                        appointment: i,
                        fullWidth: a,
                        selected: s,
                        bigHeader: r,
                        forwardedRef: c,
                        role: d,
                        handleProfileTap: p,
                        isDoctor: h,
                        future: _,
                        eligible_for_conversion: x,
                        setShowConversionModal: w,
                        readOnly: P,
                        universalRedirect: E,
                        showAlertSection: q,
                        appointmentRules: R,
                        patient: $,
                        locationInformation: G,
                        hideMap: z,
                        paymentInfoEnabled: H,
                        hideCardHeader: Y,
                        marginOnHeaderCard: U,
                        appointmentRequest: W,
                        isAnonymousFunnel: K,
                        isBookingFunnel: V
                    } = e;
                    const {
                        id: X,
                        start_date: ee,
                        substitute_name: te,
                        suspended: re,
                        substitution_wording: le,
                        phone_number: ce,
                        canceled: de,
                        no_show: pe,
                        qr_code: me,
                        telehealth: xe,
                        needs_preparation: ge,
                        charges: je = [],
                        profile: {
                            searchable: ve,
                            trashed: fe,
                            regulation_sector: we,
                            insurance_card: Ie,
                            third_party_payer: Pe,
                            display_payment_means: Ee,
                            payment_means: {
                                cash: qe,
                                check: Re,
                                credit_card: Se,
                                bank_transfer: De,
                                satispay: Fe
                            } = {}
                        } = {},
                        practice: {
                            latitude: Me,
                            longitude: Le,
                            address: $e,
                            zipcode: Ge,
                            city: ze
                        } = {},
                        alert_eligible: Be,
                        appointment_alert: He,
                        vaccine_name: Ye
                    } = i, Ue = ce && !W, We = !xe && !W, Ke = !z && !xe && !W, Ve = H && Ee && !xe && !W, Qe = W && W.status === A.G.WAITING_FOR_PATIENT, Je = !xe && !W && _ && (we || H && (Ie || Pe)), Xe = xe && !W && (0, y.Yc)(i) && "de" !== (0, l.rZ)(), et = !(null !== i && void 0 !== i && i.hasOwnProperty("telehealth")) && (null === i || void 0 === i ? void 0 : i.main_anonymous_appointment) && "doctor" === (null === i || void 0 === i ? void 0 : i.source) && (null === i || void 0 === i || null === (t = i.profile) || void 0 === t ? void 0 : t.allow_online_booking), tt = (0, l.Zz)() && W;
                    var nt;
                    Qe && (0, v.ZP)({
                        name: "patient_appointment_request_confirmation_display",
                        itemId: String(i.profile.id),
                        itemType: (0, f.m)(i.profile.organization),
                        details: {
                            profile_id: i.profile.id,
                            practice_id: null === (nt = i.practice) || void 0 === nt ? void 0 : nt.id,
                            speciality_id: i.profile.speciality_id,
                            appointment_telehealth: Boolean(i.telehealth),
                            appointment_id: parseInt(i.id, 10),
                            is_appointment_request: !0,
                            is_appointment_request_enabled: (0, m.cr)("patient_appointment_requests"),
                            request_status: W.status,
                            profile_type: i.profile.organization ? "organization" : "practitioner",
                            visit_motive_id: i.visit_motive_id,
                            page_url: document.URL,
                            referrer: document.referrer
                        }
                    }, {
                        schema: "patient"
                    });
                    return (0, S.jsxs)(Ae, {
                        wrapWithProvider: !h,
                        appointmentId: i.id,
                        children: [(0, S.jsx)("div", {
                            className: g()({
                                "dl-padding-x-16": U && (0, l.rl)()
                            }),
                            children: (0, S.jsx)(N.Z, {
                                className: "dl-padding-0",
                                header: !Y && (0, S.jsx)(k.Z, {
                                    telehealth: xe,
                                    startDate: ee
                                }),
                                fullWidth: a,
                                headerProps: {
                                    className: "flex dl-justify-between",
                                    uiStyle: (0, Te.k)({
                                        appointment: i,
                                        selected: s
                                    }),
                                    big: r
                                },
                                tabIndex: s ? 0 : void 0,
                                ref: c,
                                role: d,
                                children: (0, j.Z)([(0, S.jsx)(Z.ZP, {
                                    status: null === W || void 0 === W ? void 0 : W.status
                                }, "appointment-request-status"), (0, S.jsx)(B, {
                                    appointmentRequest: W,
                                    patientId: i.patient.id
                                }, "appointment-request-comment"), Qe && (0, S.jsx)(Q, {
                                    appointment: i,
                                    appointmentRequest: W
                                }, "appointment-request-complete-request-button"), i.profile && (0, S.jsx)(C.Z, {
                                    children: (0, S.jsx)(T.Z, {
                                        compact: !0,
                                        onTap: ve && !fe ? p : null,
                                        doctor: i.profile,
                                        appointment: i,
                                        substitute: te,
                                        substitution_wording: le
                                    })
                                }, "doctor-card"), pe && (0, S.jsx)(C.Z, {
                                    children: (0, S.jsx)(I.Z, {
                                        color: "error-090",
                                        children: (0, S.jsx)("strong", {
                                            children: u.Z.t("appointments.light_appointment_card.patient_did_not_show_up")
                                        })
                                    })
                                }, "noshow"), !pe && de && (0, S.jsx)(C.Z, {
                                    children: (0, S.jsx)(I.Z, {
                                        color: "warning-090",
                                        children: (0, S.jsx)("strong", {
                                            children: re ? u.Z.t("appointments.appointment.suspended_appointment") : u.Z.t("appointments.light_appointment_card.appointment_cancelled")
                                        })
                                    })
                                }, "suspended"), !h && !i.canceled && (0, y.Yc)(i) && (0, S.jsx)(C.Z, {
                                    children: (0, S.jsx)(I.Z, {
                                        children: u.Z.t("common.telehealth.closed")
                                    })
                                }, "telehealth-closed"), _ && !P && !ge && D(i) && (0, S.jsx)(F, {
                                    appointment: i,
                                    appointmentRequest: W,
                                    universalRedirect: E
                                }, "actions")], (0, S.jsx)(b.Z, {}))
                            })
                        }), (0, S.jsxs)("div", {
                            className: g()("dl-margin-y-16-between-children", {
                                "dl-padding-x-16": (0, l.rl)()
                            }),
                            children: [!h && (0, S.jsx)(M.Z, {
                                appointment: i,
                                future: _
                            }, `telehealth-${i.id}`), !h && (null === (n = i.surcharge) || void 0 === n ? void 0 : n.unpaid) && (0, S.jsx)(ke.Z, {
                                children: (0, S.jsx)(be, {
                                    surcharge: i.surcharge
                                }, "surcharge-payment-section")
                            }), x && (0, S.jsx)(ke.Z, {
                                children: (0, S.jsx)(Ne, {
                                    appointmentId: i.id,
                                    onTap: () => w(!0)
                                }, "convert-to-tlh-section")
                            }), et && (0, S.jsx)(Oe, {}), !h && (0, S.jsx)(O.Z, {
                                appointment: i,
                                appointmentRules: R,
                                isAnonymousFunnel: K,
                                isBookingFunnel: V
                            }), q && (0, S.jsx)(ke.Z, {
                                children: (0, S.jsx)(ie.Z, {
                                    appointmentDate: ee.toString(),
                                    appointmentId: X,
                                    firstTimeDisplay: He.first_time,
                                    defaultChecked: He.active,
                                    alertEligible: Be
                                })
                            }), Ye && (0, S.jsx)(ke.Z, {
                                children: (0, S.jsx)(Ce, {
                                    vaccineName: Ye
                                }, "vaccine-name")
                            }), h && R.length > 0 && (0, S.jsx)(ke.Z, {
                                children: (0, S.jsx)(he.Z, {
                                    appointmentRules: R
                                }, "rules")
                            }), !h && (0, S.jsx)(J.Z, {
                                appointment: i,
                                showPatientDocuments: tt
                            }), (0, S.jsx)(ke.Z, {
                                children: (0, j.Z)([(0, S.jsx)(_e.Z, {
                                    patient: $
                                }, "patient-section"), Ue && (0, S.jsx)(ae.Z, {
                                    phoneNumber: ce
                                }, "phone-section"), We && (0, S.jsx)(se.Z, {
                                    locationInformation: G,
                                    hideMap: z
                                }, "location-section"), Ke && (0, S.jsx)(ue, {
                                    show: !0,
                                    latitude: Me,
                                    longitude: Le,
                                    address: $e,
                                    zipcode: Ge,
                                    city: ze
                                }, "map-section"), Ve && (0, S.jsx)(L.Z, {
                                    cash: "1" === qe,
                                    check: "1" === Re,
                                    creditCard: "1" === Se,
                                    bankTransfer: "1" === De,
                                    satispay: "1" === Fe
                                }, "payment-means-section"), Je && (0, S.jsx)(Ze.Z, {
                                    paymentInfoEnabled: H,
                                    regulation_sector: we,
                                    insurance_card: Ie,
                                    third_party_payer: Pe
                                }, "fees-section"), Xe && (0, S.jsx)(ye, {
                                    charge: je.find((e => e.captured_amount)),
                                    surcharge: i.surcharge
                                }, "charge"), (null === (o = i.steps) || void 0 === o ? void 0 : o.length) && !i.vaccination_appointment && (0, S.jsx)(ne, {
                                    steps: i.steps
                                }, "steps-section"), me && (0, S.jsx)(oe, {
                                    qrCode: me
                                }, "qrCode")], (0, S.jsx)("div", {
                                    className: "dl-margin-x-16",
                                    children: (0, S.jsx)(b.Z, {})
                                }))
                            })]
                        })]
                    })
                };
            var Ee = n(433052),
                qe = n(93708);
            const Re = e => {
                let {
                    profile: t
                } = e;
                return (0, S.jsx)(qe.c, {
                    onTap: () => {
                        window.location.href = t.link
                    },
                    icon: "clipboard-user",
                    title: u.Z.t("appointments.edit.come_back_on_doctor_profile_link", {
                        doctor: t.name_with_title
                    }),
                    dataAnalyticsEventCategory: m.ZP.GTM_CATEGORIES.BOOKING_CONFIRMATION,
                    dataAnalyticsEventAction: m.ZP.GTM_EVENTS.BACK_TO_PROFILE
                }, "profile")
            };
            var Se = n(795361);
            const De = () => {
                    const {
                        createTrackingEventWithContext: e
                    } = (0, Se.Z)();
                    return (0, S.jsx)(qe.c, {
                        onTap: () => {
                            e({
                                name: "patient_diary_redirection_from_appointment_page"
                            }), window.location.href = "/account/documents?tab=notes"
                        },
                        icon: "note-sticky",
                        title: u.Z.t("patient_mobile.root.account.appointments.details.create_a_note"),
                        chevron: !0
                    }, "note")
                },
                Fe = () => (0, S.jsx)(qe.c, {
                    onTap: () => {
                        window.location.href = "/account/appointments"
                    },
                    icon: "user",
                    title: u.Z.t("common.back_to_appointments"),
                    dataAnalyticsEventCategory: m.ZP.GTM_CATEGORIES.BOOKING_CONFIRMATION,
                    dataAnalyticsEventAction: m.ZP.GTM_EVENTS.GO_TO_APPOINTMENT_LIST
                }, "my_account"),
                Me = () => (0, S.jsx)(qe.c, {
                    onTap: () => window.print(),
                    icon: "print",
                    title: u.Z.t("common.print")
                }, "my_account"),
                Le = e => {
                    let {
                        appointment: t,
                        appointmentInFuture: n
                    } = e;
                    const {
                        source: o,
                        profile: i
                    } = t, a = (0, p.ZP)(), s = !(t.canceled || t.appointment_request_entry), r = s && m.ZP.PATIENT_DIARY_ENABLED_FOR_COUNTRY && a, c = s && n, d = (0, l.Zz)() && n && !window.onPartnerDomain && "patient" === o && !window.location.pathname.includes("/account/appointments"), u = (0, l.Zz)() && n && "patient" !== o;
                    return (0, S.jsx)("div", {
                        children: (0, S.jsx)(N.Z, {
                            className: "dl-padding-0 dl-overflow-hidden",
                            children: (0, S.jsxs)(C.Z, {
                                contentClassName: "dl-padding-0",
                                children: [r && (0, S.jsx)(De, {}), c && (0, S.jsx)(Ee.Z, {
                                    appointmentId: t.id
                                }), i && (0, S.jsx)(Re, {
                                    profile: i
                                }), d && (0, S.jsx)(Fe, {}), u && (0, S.jsx)(Me, {})]
                            })
                        })
                    })
                };
            var $e = n(444502);
            const Ge = e => {
                    let {
                        className: t,
                        appointment: n,
                        hideMap: o,
                        fullWidth: a,
                        bigHeader: h,
                        readOnly: Z,
                        inlineActions: x = !0,
                        selected: j,
                        children: v,
                        isDoctor: f,
                        role: y,
                        forwardedRef: b,
                        hideCardHeader: w,
                        marginOnHeaderCard: N,
                        isAnonymousFunnel: I,
                        isBookingFunnel: C
                    } = e;
                    const T = (0, c.ZP)(),
                        k = (0, p.ZP)(),
                        A = "patient" === (null === k || void 0 === k ? void 0 : k.kind) && n && !n.telehealth && !n.past,
                        {
                            data: {
                                eligible_for_conversion: O,
                                rules: P
                            } = {}
                        } = (0, d.Z)({
                            url: `/appointments/${n.id}/telehealth_conversion/new`,
                            trigger: A ? void 0 : "dontTrigger"
                        }),
                        [E, q] = i().useState(!1);
                    if (!n) return (0, S.jsx)(r.Navigate, {
                        to: "/account/appointments"
                    });
                    const R = e => {
                            const {
                                platforms: t
                            } = window;
                            "mobile" === t.variant ? T.show(e) : window.location = e
                        },
                        {
                            id: D,
                            start_date: F,
                            practice: {
                                address: M,
                                zipcode: L,
                                city: $,
                                handicap: G,
                                note: z,
                                code1: B,
                                code2: H,
                                intercom: Y,
                                formal_name: U,
                                practice_floor: W,
                                reception_info: K
                            } = {},
                            appointment_rules: V = []
                        } = n,
                        Q = (0, m.LA)("practitioner_configuration_fees"),
                        {
                            patient: J = {}
                        } = n,
                        X = s()(F).isAfter(),
                        ee = V.slice();
                    Q && J.child && ee.push({
                        message: u.Z.t("patient_common.root.profile_practice_details.child_health_record.description"),
                        id: "health-record"
                    });
                    const te = {
                            formalName: U,
                            address: M,
                            zipcode: L,
                            city: $,
                            receptionInfo: K,
                            practiceFloor: W,
                            handicap: G,
                            note: z,
                            code1: B,
                            code2: H,
                            intercom: Y
                        },
                        ne = (0, $e.N)(n, null === k || void 0 === k ? void 0 : k.id);
                    return (0, S.jsxs)("div", {
                        className: g()("dl-appointment-card-wrapper", "dl-padding-b-safe-area", {
                            "dl-appointment-card-wrapper-inline-actions": x,
                            "dl-row-gap-m": (0, l.rl)() || !x,
                            "dl-padding-b-16": (0, l.rl)()
                        }, t),
                        children: [(0, S.jsxs)("div", {
                            className: g()("dl-appointment-card dl-margin-y-16-between-children"),
                            children: [v, (0, S.jsx)(_.Z, {
                                show: E,
                                closeModal: () => q(!1),
                                appointmentId: D,
                                disableNotifications: !0,
                                rules: P
                            }), (0, S.jsx)(Pe, {
                                appointment: n,
                                fullWidth: a,
                                selected: j,
                                bigHeader: h,
                                forwardedRef: b,
                                role: y,
                                handleProfileTap: () => {
                                    R(n.profile.link)
                                },
                                isDoctor: f,
                                future: X,
                                eligible_for_conversion: O,
                                setShowConversionModal: q,
                                readOnly: Z,
                                universalRedirect: R,
                                showAlertSection: ne,
                                appointmentRules: ee,
                                patient: J,
                                locationInformation: te,
                                hideMap: o,
                                paymentInfoEnabled: Q,
                                hideCardHeader: w,
                                marginOnHeaderCard: N,
                                appointmentRequest: n.appointment_request_entry,
                                isAnonymousFunnel: I,
                                isBookingFunnel: C
                            })]
                        }), (0, S.jsx)("div", {
                            className: g()("dl-appointment-card-actions dl-margin-y-16-between-children", {
                                "dl-padding-x-16 dl-padding-b-16": (0, l.rl)()
                            }),
                            children: (0, S.jsx)(Le, {
                                appointment: n,
                                appointmentInFuture: X
                            })
                        })]
                    })
                },
                ze = i().forwardRef(((e, t) => {
                    var n;
                    const {
                        appointment: o,
                        isBookingFunnel: i,
                        isAnonymousFunnel: a = !1
                    } = e;
                    let s = "booking_funnel";
                    i || (s = a ? "anonymous_page" : "appointment_list");
                    const r = (0, Z.qs)(null === o || void 0 === o || null === (n = o.appointment_request_entry) || void 0 === n ? void 0 : n.status) ? "appointment_request_edition" : "appointment_view";
                    return (0, S.jsx)(h.Z, {
                        value: {
                            source: r,
                            type: s,
                            appointment_id: o.id
                        },
                        children: (0, S.jsx)(Ge, { ...e,
                            forwardedRef: t
                        })
                    })
                }))
        },
        162622: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var o = n(294184),
                i = n.n(o),
                a = n(256320),
                s = n(123246),
                r = n.n(s),
                l = n(785893);
            const c = e => {
                let {
                    startDate: t,
                    telehealth: n,
                    isApptCanceled: o
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(a.Z, {
                        date: t,
                        className: i()({
                            "snapshot-hide": n
                        }),
                        isApptCanceled: o
                    }), n && (0, l.jsx)(r(), {
                        className: "dl-tlc-icon",
                        fill: "white"
                    })]
                })
            }
        },
        420841: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var o = n(406288),
                i = n(745244),
                a = n(445884),
                s = n(785893);
            const r = e => {
                let {
                    paymentInfoEnabled: t,
                    third_party_payer: n,
                    regulation_sector: r,
                    insurance_card: l
                } = e;
                return (0, s.jsxs)(o.Z, {
                    leftIcon: "euro-sign",
                    children: [(0, s.jsx)(i.Z, {
                        children: a.Z.t("profiles.show.profile_practice_detail_title")
                    }), [r, t && l ? a.Z.t("patient_common.root.profile_practice_details.insurance_card.description") : null, t && n ? a.Z.t(`patient_common.root.profile_practice_details.third_party_payer.description.${n}`) : null].filter(Boolean).map(((e, t) => (0, s.jsx)("div", {
                        className: t ? "dl-margin-t-16" : null,
                        children: e
                    }, `description-${t}`)))]
                })
            }
        },
        536442: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var o = n(184481),
                i = n(445884),
                a = n(406288),
                s = n(745244),
                r = n(898839),
                l = n(755506),
                c = n(453040);
            var d = n(785893);
            const p = e => {
                    let {
                        locationInformation: t,
                        hideMap: n
                    } = e;
                    const {
                        formalName: o,
                        address: p,
                        zipcode: m,
                        city: u,
                        receptionInfo: h,
                        handicap: _,
                        note: Z,
                        code1: x,
                        code2: g,
                        intercom: j,
                        practiceFloor: v
                    } = t, f = ![null, void 0].includes(v), y = (0, d.jsxs)("div", {
                        children: [(0, d.jsx)(s.Z, {
                            children: o
                        }), (0, d.jsx)("div", {
                            children: p
                        }), (0, d.jsxs)("div", {
                            children: [m, " ", u]
                        })]
                    }), b = () => (0, d.jsx)(r.Z, {
                        address: p,
                        zipcode: m,
                        city: u,
                        inherit: !1,
                        flat: !0,
                        children: y
                    }), w = e => {
                        let {
                            icon: t,
                            label: n,
                            value: o
                        } = e;
                        return (0, d.jsxs)(a.Z, {
                            leftIcon: t,
                            children: [(0, d.jsx)(s.Z, {
                                children: n
                            }), o]
                        })
                    };
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsxs)(a.Z, {
                            leftIcon: "solid/location-dot",
                            className: "dc-address",
                            children: [(0, d.jsx)(s.Z, {
                                children: i.Z.t("patient_mobile.root.account.appointments.how_to_attend")
                            }), n ? (0, d.jsx)(b, {}) : y, h && (0, d.jsx)(c.Z, {
                                block: !0,
                                children: h
                            }), f && (0, d.jsx)(c.Z, {
                                block: !0,
                                children: v
                            }), _ && (0, d.jsx)(c.Z, {
                                block: !0,
                                children: i.Z.t("patient_mobile.root.profiles.details.practices.useful.handicap")
                            }), Z && (0, d.jsx)(c.Z, {
                                block: !0,
                                children: Z
                            })]
                        }), (x || g || j) && (0, d.jsx)("div", {
                            className: "dl-padding-x-16",
                            children: (0, d.jsx)(l.Z, {})
                        }), (0, d.jsxs)("div", {
                            className: "dl-card-sections-merge-paddings",
                            children: [x && (0, d.jsx)(w, {
                                icon: "solid/door-open",
                                label: [i.Z.t("common.digicode"), 1].join(" "),
                                value: x
                            }), g && (0, d.jsx)(w, {
                                icon: "solid/door-open",
                                label: [i.Z.t("common.digicode"), 2].join(" "),
                                value: g
                            }), j && (0, d.jsx)(w, {
                                icon: "solid/speaker",
                                label: i.Z.t("common.intercom"),
                                value: j
                            })]
                        })]
                    })
                },
                m = (0, o.memo)(p)
        },
        124854: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var o = n(184481),
                i = n(445884),
                a = n(288802),
                s = n(990626),
                r = n(406288),
                l = n(745244),
                c = n(642979),
                d = n(785893);
            const p = e => {
                    let {
                        phoneNumber: t
                    } = e;
                    return (0, d.jsxs)(r.Z, {
                        leftIcon: "solid/phone",
                        children: [(0, d.jsx)(l.Z, {
                            children: i.Z.t("patient_mobile.root.account.appointments.phone_number")
                        }), (0, d.jsx)(c.Z, {
                            href: `tel:${t}`,
                            flat: !0,
                            style: {
                                alignSelf: "center"
                            },
                            onClick: () => {
                                a.Z.trackGtmEvent({
                                    category: s.ZP.GTM_CATEGORIES.BOOKING_CONFIRMATION,
                                    action: s.ZP.GTM_EVENTS.PHONE_NUMBER_CLICK
                                })
                            },
                            children: t
                        })]
                    })
                },
                m = (0, o.memo)(p)
        },
        116606: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var o = n(184481),
                i = n(445884),
                a = n(952893),
                s = n(999722),
                r = n(406288),
                l = n(745244),
                c = n(571442),
                d = n.n(c),
                p = n(755506);
            var m = n(785893);
            const u = (0, o.memo)((e => {
                let {
                    appointmentRules: t
                } = e;
                return (0, m.jsxs)(r.Z, {
                    leftIcon: "solid/triangle-exclamation",
                    children: [(0, m.jsx)(l.Z, {
                        children: i.Z.t("appointments.appointment_rules")
                    }), (0, m.jsx)("div", {
                        className: "dl-margin-t-16",
                        children: (0, a.Z)(t.map((e => {
                            let {
                                id: t,
                                message: n
                            } = e;
                            return (0, m.jsxs)("div", {
                                className: "dl-appointment-rule-section",
                                children: [(0, m.jsx)(s.Z, {
                                    className: "dl-appointment-rule-section-body",
                                    children: n
                                }), (0, m.jsx)("div", {
                                    className: "dl-appointment-rule-section-check",
                                    children: (0, m.jsx)(d(), {
                                        width: 12,
                                        height: 12
                                    })
                                })]
                            }, t)
                        })), (0, m.jsx)(p.Z, {
                            margin: !0
                        }))
                    })]
                })
            }))
        },
        508050: (e, t, n) => {
            n.d(t, {
                k: () => o
            });
            const o = e => {
                var t;
                let {
                    appointment: n,
                    selected: o
                } = e;
                const i = {
                    danger: n.no_show || (null === (t = n.surcharge) || void 0 === t ? void 0 : t.unpaid),
                    warning: n.canceled,
                    "light-blue": o,
                    dark: !0
                };
                return Object.entries(i).find((e => {
                    let [, t] = e;
                    return t
                }))[0]
            }
        },
        129106: (e, t, n) => {
            n.d(t, {
                Z: () => F
            });
            var o = n(184481),
                i = n(977954),
                a = n.n(i),
                s = n(445884),
                r = n(516590),
                l = n(23838),
                c = n(406288),
                d = n(173493),
                p = n(785893),
                m = n(5212),
                u = n(192772),
                h = n(690747),
                _ = n(239417),
                Z = n(176307),
                x = n(204161);
            var g = n(791781),
                j = n(592290);
            const v = e => {
                let {
                    showModal: t,
                    onHide: n,
                    clearDocuments: o,
                    appointmentRules: i
                } = e;
                return (0, p.jsx)(j.ZP, {
                    scrollable: !0,
                    show: t,
                    onHide: n,
                    position: "right",
                    className: "dl-full-height",
                    title: s.Z.t("helpers.appointment.instructions_modal.title"),
                    children: (0, p.jsx)(j.Ng, {
                        children: (0, p.jsx)(g.Z, {
                            documents: o,
                            rules: i
                        })
                    })
                })
            };
            var f = n(982761),
                y = n(904497);
            const b = e => {
                    let {
                        appointment: t,
                        appointmentRules: n,
                        isAnonymousFunnel: i,
                        isBookingFunnel: a
                    } = e;
                    const {
                        isPlaceholderData: s,
                        data: r = []
                    } = (e => {
                        let {
                            appointmentId: t,
                            refetchIfEmpty: n = !1
                        } = e;
                        const i = (0, o.useContext)(_._O),
                            {
                                incrementNumberOfRequests: a,
                                refetchInterval: s
                            } = (0, x.Z)({
                                shouldRefetchQuery: e => n && 0 === (null === e || void 0 === e ? void 0 : e.length)
                            }),
                            r = ["appointments", t, "clear_documents"];
                        return (0, Z.useQuery)(r, (() => i.get(`/appointments/${t}/clear_documents.json`).then((e => {
                            let {
                                bodyData: t
                            } = e;
                            return a(), t.clear_documents
                        }))), {
                            enabled: Boolean(t),
                            placeholderData: [],
                            refetchInterval: s
                        })
                    })({
                        appointmentId: t.id,
                        refetchIfEmpty: a
                    }), l = n && n.length > 0, c = r.length > 0;
                    return [l || c, {
                        appointment: t,
                        appointmentRules: n,
                        isLoadingClearDocuments: s,
                        clearDocuments: r,
                        isAnonymousFunnel: i,
                        isBookingFunnel: a
                    }]
                },
                w = e => {
                    let {
                        appointment: t,
                        appointmentRules: n,
                        isLoadingClearDocuments: i,
                        clearDocuments: c,
                        isAnonymousFunnel: d
                    } = e;
                    const [_, Z] = (0, o.useState)(!1), [x, g] = (0, y.Z)(t, "instructions_read"), j = (0, u.ZP)(), b = { ...(0, o.useContext)(l.Z)
                    }, w = a()(t.start_date).isAfter(a()()), N = n && n.length > 0;
                    if (!(c && c.length > 0) && !N) return null;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(h.K, {
                            completable: w,
                            completed: x,
                            iconName: "regular/square-info",
                            pillLabel: s.Z.t("appointments.appointment_card.preparation_section.items.instructions.to_read"),
                            label: s.Z.t("appointments.appointment_card.preparation_section.items.instructions.label"),
                            description: d ? s.Z.t("appointments.appointment_card.preparation_section.items.instructions.description") : void 0,
                            onTap: i ? void 0 : () => {
                                if ((0, r.ZP)({
                                        name: "patient_clicks_read_instruction_appointment_card",
                                        details: b
                                    }), g(), (0, m.Zz)()) Z(!0);
                                else {
                                    const e = d ? `/appointments/anonymous/${t.id}/instructions` : `/account/appointments/details/${t.id}/instructions`;
                                    j.show(e, {
                                        appointment: t,
                                        appointmentRules: n,
                                        clearDocuments: c,
                                        isAnonymousFunnel: d,
                                        funnelType: b.type
                                    })
                                }
                            }
                        }), (0, p.jsx)(f.L, {
                            appointmentId: t.id,
                            masterPatientId: void 0,
                            children: (0, p.jsx)(v, {
                                showModal: _,
                                onHide: () => Z(!1),
                                clearDocuments: c,
                                appointmentRules: n
                            })
                        })]
                    })
                };
            var N = n(832738),
                I = n(24553),
                C = n(878181),
                T = n(390540);
            const k = e => {
                    let {
                        appointment: t
                    } = e;
                    const n = (0, I.useNavigate)();
                    return (0, p.jsx)(h.K, {
                        iconName: "regular/file-arrow-up",
                        label: s.Z.t("appointments.appointment_card.preparation_section.items.documents.label"),
                        description: s.Z.t("appointments.appointment_card.preparation_section.items.documents.description"),
                        onTap: () => {
                            (0, r.ZP)({
                                name: "anonymous_appointment_details_share_document_click",
                                details: {
                                    appointment_id: t.id
                                }
                            }), n("/appointments/anonymous/register", {
                                state: {
                                    hideContinueWithoutAccount: !0
                                }
                            })
                        },
                        completable: t.organization.has_document_check_in,
                        pillLabel: s.Z.t("appointments.appointment_card.preparation_section.items.documents.todo")
                    })
                },
                A = e => {
                    let {
                        appointment: t,
                        isAnonymousFunnel: n,
                        patientDocuments: o
                    } = e;
                    const {
                        isFetching: i
                    } = (0, f.Z)();
                    if (n) return (0, p.jsx)(k, {
                        appointment: t
                    });
                    const a = t.patient_can_share_documents ? s.Z.t("appointments.appointment_card.preparation_section.items.documents.label") : s.Z.t("appointments.appointment_card.preparation_section.items.documents.shared", {
                            count: o.length
                        }),
                        r = t.organization.has_document_check_in && !i && 0 === o.length;
                    return (0, p.jsx)(f.L, {
                        masterPatientId: t.patient.master_patient_id,
                        appointmentId: void 0,
                        children: (0, p.jsx)(C.Z, {
                            appointment: t,
                            children: e => {
                                let {
                                    onTap: t
                                } = e;
                                return (0, p.jsx)(h.K, {
                                    iconName: "regular/file-arrow-up",
                                    label: a,
                                    onTap: t,
                                    completable: r,
                                    pillLabel: s.Z.t("appointments.appointment_card.preparation_section.items.documents.todo")
                                })
                            }
                        })
                    })
                };
            var O = n(103942),
                P = n(236019);
            const E = e => {
                let {
                    appointmentId: t,
                    isAnonymousFunnel: n,
                    isBookingFunnel: i,
                    enabled: a
                } = e;
                const {
                    data: s = [],
                    isInitialLoading: r
                } = (0, P.H)({
                    appointmentId: t,
                    enabled: !n && a,
                    refetchIfEmpty: i
                }), {
                    data: l = [],
                    isInitialLoading: c
                } = (e => {
                    let {
                        appointmentId: t,
                        enabled: n
                    } = e;
                    const i = (0, o.useContext)(_._O),
                        a = ["check_in", "questionnaire", "anonymous_appointments", t, "requests"];
                    return (0, Z.useQuery)(a, (() => i.get(`/questionnaire/anonymous_appointments/${t}/requests`).then((e => {
                        let {
                            bodyData: t
                        } = e;
                        return t
                    }))), {
                        enabled: n
                    })
                })({
                    appointmentId: t,
                    enabled: n && a
                });
                return n ? {
                    isInitialLoading: c,
                    totalCount: l.length,
                    completedCount: 0
                } : {
                    isInitialLoading: r,
                    totalCount: s.length,
                    completedCount: s.filter((e => e.completed)).length
                }
            };
            var q = n(706958);
            const R = e => {
                    let {
                        description: t,
                        onTap: n,
                        appointment: o,
                        completedCount: i,
                        totalCount: a
                    } = e;
                    return (0, p.jsx)(h.K, {
                        iconName: "regular/file-pen",
                        label: s.Z.t("appointments.appointment_card.preparation_section.items.questionnaires.label"),
                        description: t,
                        onTap: n,
                        completable: o.organization.has_document_check_in,
                        pillLabel: `${i}/${a}`
                    })
                },
                S = e => {
                    let {
                        appointment: t,
                        completedCount: n,
                        totalCount: o
                    } = e;
                    const i = (0, I.useNavigate)();
                    return (0, p.jsx)(R, {
                        description: s.Z.t("appointments.appointment_card.preparation_section.items.questionnaires.description"),
                        onTap: () => {
                            (0, r.ZP)({
                                name: "anonymous_appointment_details_share_questionnaire_click",
                                details: {
                                    appointment_id: t.id
                                }
                            }), i("/appointments/anonymous/register", {
                                state: {
                                    hideContinueWithoutAccount: !0
                                }
                            })
                        },
                        appointment: t,
                        completedCount: n,
                        totalCount: o
                    })
                },
                D = e => {
                    let {
                        appointment: t,
                        isAnonymousFunnel: n,
                        useBasicLinkForNavigation: o,
                        completedCount: i,
                        totalCount: a
                    } = e;
                    return n ? (0, p.jsx)(S, {
                        appointment: t,
                        completedCount: i,
                        totalCount: a
                    }) : (0, p.jsx)(q.Z, {
                        appointment: t,
                        useBasicLinkForNavigation: o,
                        completedCount: i,
                        totalCount: a,
                        children: e => {
                            let {
                                onTap: n
                            } = e;
                            return (0, p.jsx)(R, {
                                onTap: n,
                                appointment: t,
                                completedCount: i,
                                totalCount: a
                            })
                        }
                    })
                },
                F = e => {
                    let {
                        appointment: t,
                        appointmentRules: n,
                        isAnonymousFunnel: i = !1,
                        isBookingFunnel: m,
                        useBasicLinkForNavigation: u = !1
                    } = e;
                    const {
                        documents: h = []
                    } = (0, f.Z)(), _ = (0, O.K)(h), [Z, x] = (0, N.rL)({
                        appointment: t,
                        isAnonymousFunnel: i
                    }), [g, j] = b({
                        appointment: t,
                        appointmentRules: n,
                        isAnonymousFunnel: i,
                        isBookingFunnel: m
                    }), [v, y] = (e => {
                        let {
                            appointment: t,
                            isAnonymousFunnel: n,
                            patientDocuments: o
                        } = e;
                        return [t.patient_can_share_documents || (0, T.P)(o), {
                            appointment: t,
                            isAnonymousFunnel: n,
                            patientDocuments: o
                        }]
                    })({
                        appointment: t,
                        isAnonymousFunnel: i,
                        patientDocuments: _
                    }), [I, C] = (e => {
                        let {
                            appointment: t,
                            isAnonymousFunnel: n,
                            isBookingFunnel: o,
                            useBasicLinkForNavigation: i
                        } = e;
                        const a = t.organization.has_document_check_in,
                            {
                                isInitialLoading: s,
                                totalCount: r,
                                completedCount: l
                            } = E({
                                appointmentId: t.id,
                                isAnonymousFunnel: n,
                                isBookingFunnel: o,
                                enabled: a
                            });
                        return [a && !s && r > 0, {
                            appointment: t,
                            isAnonymousFunnel: n,
                            isBookingFunnel: o,
                            useBasicLinkForNavigation: i,
                            completedCount: l,
                            totalCount: r
                        }]
                    })({
                        appointment: t,
                        isAnonymousFunnel: i,
                        isBookingFunnel: m,
                        useBasicLinkForNavigation: u
                    }), k = a()(t.start_date).isAfter(a()()), P = t.telehealth ? s.Z.t("appointments.appointment_card.preparation_section.telehealth_title") : s.Z.t("appointments.appointment_card.preparation_section.title"), q = { ...(0, o.useContext)(l.Z)
                    }, {
                        isLoadingClearDocuments: R
                    } = j;
                    return (0, o.useEffect)((() => {
                        R || (0, r.ZP)({
                            name: "patient_view_prepare_appointment_card",
                            details: {
                                action_required: g,
                                sharing_documents: v,
                                appointment_telehealth: !!t.telehealth,
                                start_date: t.start_date,
                                ...q
                            }
                        })
                    }), [R]), Z || g || v || I ? (0, p.jsx)(d.Z, {
                        title: k ? P : void 0,
                        className: "dl-overflow-hidden",
                        "data-test": "preparation-section",
                        children: (0, p.jsxs)(c.Z, {
                            contentClassName: "dl-padding-0",
                            children: [Z && (0, p.jsx)(N.ZP, { ...x
                            }), g && (0, p.jsx)(w, { ...j
                            }), v && (0, p.jsx)(A, { ...y
                            }), I && (0, p.jsx)(D, { ...C
                            })]
                        })
                    }) : null
                }
        },
        411422: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var o = n(445884),
                i = n(827522),
                a = n(406288),
                s = n(745244);
            var r = n(785893);
            const l = e => {
                const {
                    cash: t,
                    check: n,
                    creditCard: l,
                    bankTransfer: c,
                    satispay: d,
                    ...p
                } = e;
                return (0, r.jsxs)(a.Z, { ...p,
                    leftIcon: "solid/credit-card",
                    className: "card-section-payment-means",
                    children: [(0, r.jsx)(s.Z, {
                        component: "h3",
                        children: o.Z.t("patient_mobile.root.profiles.details.payment_means.title")
                    }), (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("div", {
                            children: l ? null : (0, r.jsx)("strong", {
                                children: o.Z.t("patient_mobile.root.profiles.details.payment_means.no_credit_card")
                            })
                        }), (0, r.jsx)("div", {
                            children: (0, i.Z)([n && o.Z.t("patient_mobile.root.profiles.details.payment_means.check"), t && o.Z.t("patient_mobile.root.profiles.details.payment_means.cash"), l && o.Z.t("patient_mobile.root.profiles.details.payment_means.credit_card"), c && o.Z.t("patient_mobile.root.profiles.details.payment_means.bank_transfer"), d && o.Z.t("patient_mobile.root.profiles.details.payment_means.satispay")].filter(Boolean))
                        })]
                    })]
                })
            }
        },
        898839: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var o = n(642979),
                i = n(785893);
            const a = e => {
                let {
                    address: t,
                    zipcode: n,
                    city: a,
                    fullAddress: s,
                    children: r,
                    inherit: l = !0,
                    ...c
                } = e;
                const d = encodeURIComponent(s || [t, n, a].join(" "));
                return (0, i.jsx)(o.Z, {
                    href: `https://www.google.com/maps?q=${d}`,
                    target: "_blank",
                    inherit: l,
                    ...c,
                    children: r
                })
            }
        },
        272838: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var o = n(184481),
                i = n(5212),
                a = n(608575),
                s = n(289697),
                r = n(298203);
            const l = e => t => {
                let {
                    url: n,
                    delay: l,
                    until: c,
                    initialState: d,
                    query: p,
                    active: m = !0,
                    throwError: u = !0
                } = t;
                const [h, _] = (0, o.useState)(d), {
                    abortController: Z
                } = (0, r.Z)();
                return (0, o.useEffect)((() => {
                    if (!m || !n) return () => {};
                    let t;
                    const o = async () => {
                        try {
                            const {
                                bodyData: o
                            } = await e.get(n, {
                                query: p,
                                signal: Z.signal
                            });
                            _(o), c && c(o) && clearInterval(t)
                        } catch (e) {
                            if (u && e.message !== s.Jr && 401 !== e.response.status) throw e
                        }
                    };
                    return t = setInterval(o, "test" === (0, i.zj)() ? Number((0, a.parse)(window.location.href, !0).query.polling_delay || l) : l), o(), () => clearInterval(t)
                }), [l, m]), [h, _]
            }
        },
        520711: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var o = n(437124);
            const i = (0, n(272838).Z)(o.ZP)
        },
        172099: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var o = n(184481),
                i = n(516590);
            const a = (e, t) => {
                (0, o.useEffect)((() => {
                    (0, i.ZP)(e, t)
                }), [])
            }
        },
        827522: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var o = n(38125),
                i = n.n(o),
                a = n(610928),
                s = n.n(a),
                r = n(445884);
            const l = e => 0 === e.length ? "" : 1 === e.length ? e[0] : 2 === e.length ? e.join(` ${r.Z.t("common.and")} `) : `${i()(e).join(", ")} ${r.Z.t("common.and")} ${s()(e)}`
        },
        321650: (e, t, n) => {
            n.d(t, {
                Z: () => N
            });
            var o = n(875472),
                i = n.n(o),
                a = n(445884),
                s = n(800274),
                r = n(943174),
                l = n.n(r),
                c = n(453040),
                d = n(247557),
                p = n(784600),
                m = n(975645),
                u = n(516590),
                h = n(24553);
            var _ = n(545763),
                Z = n(845126),
                x = n(785893);
            const g = {
                    name: "Document Doctolib",
                    creator_label: "Dr Doctolib",
                    sharings: []
                },
                j = e => {
                    let {
                        appointment: t
                    } = e;
                    const n = (0, h.useNavigate)();
                    return (0, x.jsxs)("div", {
                        className: "dl-anonymous-fake-documents-container ",
                        children: [(0, x.jsxs)("div", {
                            children: [(0, x.jsx)(d.Z, {
                                condensed: !0,
                                doc: g,
                                appointment: t,
                                border: !0,
                                className: "dl-anonymous-fake-documents-card dl-margin-y-16"
                            }), (0, x.jsx)(d.Z, {
                                condensed: !0,
                                doc: g,
                                appointment: t,
                                border: !0,
                                className: "dl-anonymous-fake-documents-card dl-margin-y-16"
                            })]
                        }), (0, x.jsxs)(p.Z, {
                            className: "dl-anonymous-fake-documents-content",
                            children: [(0, x.jsxs)("div", {
                                className: "dl-flex-center",
                                children: [(0, x.jsx)(Z.Z, {
                                    className: "dl-margin-r-8",
                                    name: "solid/lock",
                                    color: "primary-110"
                                }), (0, x.jsx)(c.Z, {
                                    uiStyle: "body-s-bold",
                                    children: a.Z.t("appointments.documents_shared_by_practitioner", {
                                        doctor: (0, m.WU)(null === t || void 0 === t ? void 0 : t.profile)
                                    })
                                })]
                            }), (0, x.jsx)("div", {
                                className: "dl-text-center",
                                children: (0, x.jsx)(_.Z, {
                                    uiStyle: "info-link",
                                    onClick: () => {
                                        n("/appointments/anonymous/register", {
                                            state: {
                                                hideContinueWithoutAccount: !0
                                            }
                                        }), (0, u.ZP)({
                                            name: "anonymous_appointment_details_access_document_click",
                                            details: {
                                                appointment_id: null === t || void 0 === t ? void 0 : t.id
                                            }
                                        })
                                    },
                                    children: a.Z.t("appointments.access_documents")
                                })
                            })]
                        })]
                    })
                },
                v = e => {
                    let {
                        doctorDocuments: t,
                        shouldConnectToSeeDocuments: n = !1,
                        appointment: o
                    } = e;
                    const s = i()(t, "created_at"),
                        [r, p] = l()(s, (e => e.authentication_required_for_access || e.verification_required_for_access)),
                        m = r.length > 0 && r[0].verification_required_for_access,
                        u = r.some((e => e.authentication_required_for_access)),
                        h = m || !!p.length,
                        _ = p.length ? "appointments.your_other_documents" : "appointments.your_documents";
                    return h || n ? (0, x.jsxs)("div", {
                        className: "dl-margin-x-16 dl-margin-b",
                        children: [p.map((e => (0, x.jsx)(d.Z, {
                            condensed: !0,
                            doc: e,
                            appointment: o,
                            border: !0,
                            className: "dl-margin-b"
                        }, e.id))), n && u && (0, x.jsx)(j, {
                            appointment: o
                        }), m && (0, x.jsx)(c.Z, {
                            children: a.Z.t("appointments.verification_required_for", {
                                your_documents: a.Z.t(_, {
                                    count: r.length
                                })
                            })
                        })]
                    }) : null
                };
            var f = n(103942),
                y = n(982761),
                b = n(173493),
                w = n(390540);
            const N = e => {
                let {
                    appointment: t,
                    showPatientDocuments: n = !0,
                    viewOnly: o = !1
                } = e;
                const {
                    documents: r = []
                } = (0, y.Z)(), l = (0, s.ZP)();
                if (0 === r.length) return null;
                const c = i()(r, "createdAt").filter((e => {
                        if (e.authentication_required_for_access || e.verification_required_for_access) return !0;
                        const t = e.sharings;
                        return !(!t || 0 === t.length) && !t[0].is_created_by_self
                    })),
                    d = !l || !t.patient.master_patient_id,
                    p = !d && (0, w.P)(r) && n,
                    m = c.length > 0;
                return m || p ? (0, x.jsxs)(x.Fragment, {
                    children: [p && (0, x.jsx)(b.Z, {
                        title: a.Z.t("common.telehealth.shared_documents_title"),
                        children: (0, x.jsx)("div", {
                            className: "dl-margin-x-16 dl-margin-b",
                            children: (0, x.jsx)(f.Z, {
                                appointment: t,
                                viewOnly: o
                            })
                        })
                    }), m && (0, x.jsx)(b.Z, {
                        title: a.Z.t("helpers.appointment.doctor_documents.title"),
                        children: (0, x.jsx)(v, {
                            doctorDocuments: c,
                            shouldConnectToSeeDocuments: d,
                            appointment: t
                        })
                    })]
                }) : null
            }
        },
        791781: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var o = n(496486),
                i = n(445884),
                a = n(453040),
                s = n(755506),
                r = n(999722),
                l = n(952893),
                c = n(247557),
                d = n(785893);
            const p = e => {
                    let {
                        appointmentRules: t
                    } = e;
                    return t && 0 !== t.length ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(a.Z, {
                            uiStyle: "body-s-bold",
                            className: "dl-margin-b-16",
                            children: i.Z.t("helpers.appointment.instructions_modal.instructions")
                        }), (0, l.Z)(t.map((e => {
                            let {
                                id: t,
                                message: n
                            } = e;
                            return (0, d.jsx)(a.Z, {
                                component: "p",
                                uiStyle: "body-s",
                                className: "dl-margin-y-16",
                                children: (0, d.jsx)(r.Z, {
                                    component: "span",
                                    children: n
                                })
                            }, t)
                        })), (0, d.jsx)(s.Z, {}))]
                    }) : null
                },
                m = e => {
                    let {
                        documents: t,
                        appointment: n
                    } = e;
                    if (!t || 0 === t.length) return null;
                    const s = (0, o.orderBy)(t, "created_at"),
                        r = i.Z.t("helpers.appointment.instructions_modal.clear_documents", {
                            count: t.length
                        });
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(a.Z, {
                            uiStyle: "body-s-bold",
                            className: "dl-margin-b-16",
                            children: r
                        }), (0, d.jsx)("div", {
                            className: "dl-margin-b",
                            children: s.map((e => (0, d.jsx)(c.Z, {
                                condensed: !0,
                                doc: e,
                                appointment: n,
                                border: !0,
                                className: "dl-margin-b"
                            }, e.id)))
                        })]
                    })
                },
                u = e => {
                    let {
                        documents: t,
                        rules: n,
                        appointment: o
                    } = e;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(m, {
                            documents: t,
                            appointment: o
                        }), (0, d.jsx)(p, {
                            appointmentRules: n
                        })]
                    })
                }
        },
        173493: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var o = n(785893),
                i = n(784600),
                a = n(453040),
                s = n(294184),
                r = n.n(s);
            const l = e => {
                let {
                    children: t,
                    className: n,
                    title: s,
                    titleProps: l,
                    "data-test": c
                } = e;
                const d = r()("dl-appointment-section-card dl-padding-0", n);
                return (0, o.jsxs)(i.Z, {
                    className: d,
                    "data-test": c,
                    children: [s && (0, o.jsx)(a.Z, { ...l,
                        className: "dl-padding-16 dl-padding-b-8",
                        uiStyle: "title-s-bold",
                        children: s
                    }), t]
                })
            }
        },
        919469: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var o = n(785893),
                i = n(184481),
                a = n(975645),
                s = n(445884),
                r = n(406288),
                l = n(745244),
                c = n(453040);
            const d = e => {
                    let {
                        patient: t,
                        compact: n = !1
                    } = e;
                    return (0, o.jsxs)(r.Z, {
                        leftIcon: "solid/user",
                        children: [!n && (0, o.jsx)(l.Z, {
                            children: s.Z.t("patient_mobile.root.account.appointments.details.patient")
                        }), (0, o.jsx)(c.Z, {
                            uiStyle: "body-s-regular",
                            component: "div",
                            children: (0, a.WU)((null === t || void 0 === t ? void 0 : t.master_patient) || t)
                        })]
                    })
                },
                p = (0, i.memo)(d)
        },
        444502: (e, t, n) => {
            n.d(t, {
                N: () => a
            });
            var o = n(977954),
                i = n.n(o);
            const a = (e, t) => {
                const n = e.appointment_request_entry,
                    {
                        start_date: o,
                        alert_eligible: a,
                        appointment_alert: s,
                        created_by: r
                    } = e,
                    l = i()(o).isAfter(Date.now()),
                    c = a || (null === s || void 0 === s ? void 0 : s.active);
                return l && c && t === r && Boolean(s) && !n
            }
        },
        390540: (e, t, n) => {
            n.d(t, {
                P: () => o
            });
            const o = e => e.some((e => e.sharings && e.sharings.some((e => e.is_created_by_self))))
        },
        93708: (e, t, n) => {
            n.d(t, {
                c: () => s
            });
            var o = n(785893),
                i = n(179522),
                a = n(288802);
            const s = e => {
                let {
                    onTap: t,
                    icon: n,
                    title: s,
                    dataAnalyticsEventCategory: r,
                    dataAnalyticsEventAction: l,
                    chevron: c = !1
                } = e;
                return (0, o.jsxs)(i.Z, {
                    onTap: () => {
                        t(), r && l && a.Z.trackGtmEvent({
                            category: r,
                            action: l
                        })
                    },
                    border: "between",
                    chevron: c,
                    children: [(0, o.jsx)(i.Z.Icon, {
                        color: "primary-110",
                        name: n
                    }), (0, o.jsx)(i.Z.Content, {
                        className: "dl-margin-l-8",
                        children: (0, o.jsx)(i.Z.Title, {
                            color: "primary-110",
                            uiStyle: "body-s-bold",
                            children: s
                        })
                    })]
                })
            }
        },
        433052: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var o, i = n(785893),
                a = n(184481),
                s = n(445884),
                r = n(437124),
                l = n(592290),
                c = n(545763),
                d = n(5212),
                p = n(977954),
                m = n.n(p),
                u = n(288802),
                h = n(990626),
                _ = n(129303);
            ! function(e) {
                e.GOOGLE = "Google", e.IOS = "iOs", e.OUTLOOK = "Outlook", e.ICAL = "iCal", e.REACT_NATIVE = "ReactNative"
            }(o || (o = {}));
            o.IOS, o.OUTLOOK, o.ICAL;
            const Z = [o.GOOGLE, o.REACT_NATIVE],
                x = [o.GOOGLE, o.OUTLOOK, o.ICAL];
            var g = n(93708);
            const j = e => {
                    let {
                        onClick: t
                    } = e;
                    const [n, o] = (0, a.useState)(!1);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(g.c, {
                            icon: "calendar-plus",
                            onTap: () => o(!0),
                            title: s.Z.t("patient_mobile.root.account.appointments.details.add_to_my_calendar"),
                            chevron: !0
                        }), (0, i.jsx)(l.ZP, {
                            show: n,
                            title: s.Z.t("patient_mobile.root.account.appointments.details.add_to_my_calendar"),
                            position: "right",
                            className: "dl-full-height",
                            onHide: () => o(!1),
                            children: (0, i.jsx)(l.Ng, {
                                className: "dl-flex-column dl-gap-16 dl-margin-32",
                                children: x.map((e => (0, i.jsx)(c.Z, {
                                    uiStyle: "outlined",
                                    onClick: () => t(e),
                                    children: e
                                }, e)))
                            })
                        })]
                    })
                },
                v = e => {
                    let {
                        appointmentId: t
                    } = e;
                    const n = async e => {
                        if (null !== e)
                            if (((e, t) => {
                                    u.Z.trackGtmEvent({
                                        category: h.ZP.GTM_CATEGORIES.BOOKING_CONFIRMATION,
                                        action: h.ZP.GTM_EVENTS.ADD_TO_CALENDAR,
                                        label: t,
                                        appointment_id: e
                                    })
                                })(t, e), Z.includes(e)) {
                                ((e, t) => {
                                    if (e === o.REACT_NATIVE) _.ZP.call({
                                        method: "addCalendarEvent",
                                        params: [{ ...t,
                                            start_date: window.platforms.ios ? m()(t.start_date).format("YYYY-MM-DDTHH:mm:ss.SSSZ") : `${m()(t.start_date).utc().format("YYYY-MM-DDTHH:mm:ss.SSS")}Z`,
                                            end_date: window.platforms.ios ? m()(t.end_date).format("YYYY-MM-DDTHH:mm:ss.SSSZ") : `${m()(t.end_date).utc().format("YYYY-MM-DDTHH:mm:ss.SSS")}Z`
                                        }]
                                    });
                                    else if (e === o.GOOGLE) {
                                        const e = encodeURIComponent(m()(t.start_date).utc().format("YYYYMMDDTHHmmss")),
                                            n = encodeURIComponent(m()(t.end_date).utc().format("YYYYMMDDTHHmmss")),
                                            o = encodeURIComponent(t.title),
                                            i = encodeURIComponent(t.location),
                                            a = encodeURIComponent(t.details),
                                            s = (0, d.Zz)() ? "https://www.google.com/calendar/render?action=TEMPLATE" : "https://www.google.com/calendar/gp#~calendar:view=e&bm=1&trp=false&action=TEMPLATE";
                                        window.open(`${s}&dates=${e}Z/${n}Z&location=${i}&text=${o}&details=${a}`)
                                    }
                                })(e, (await r.ZP.get(`/account/appointments/${t}/export.json`)).bodyData)
                            } else window.open(`/account/appointments/${t}/export`)
                    };
                    return (0, d.rl)() ? (0, i.jsx)(g.c, {
                        icon: "calendar-plus",
                        onTap: () => n(window.platforms.reactNative ? o.REACT_NATIVE : window.platforms.android ? o.GOOGLE : window.platforms.ios ? o.IOS : null),
                        title: s.Z.t("patient_mobile.root.account.appointments.details.add_to_my_calendar")
                    }) : (0, i.jsx)(j, {
                        onClick: n
                    })
                },
                f = (0, a.memo)(v)
        },
        658313: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var o = n(785893),
                i = n(445884),
                a = n(915488),
                s = n(453040),
                r = n(975645);
            const l = e => {
                let {
                    appointment: t,
                    readOnly: n = !0,
                    wordingReadOnly: l,
                    wordingAct: c,
                    wordingActHospital: d
                } = e;
                const p = t.substitute_name || (0, r.WU)(t.profile),
                    m = t.organization.has_document_check_in ? d : c,
                    u = i.Z.t(n ? l : m, {
                        doctorName: p
                    });
                return (0, o.jsxs)("div", {
                    className: "flex dl-align-items-center dl-margin-b-24",
                    children: [(0, o.jsx)(a.ZP, {
                        id: t.profile.id,
                        cloudinaryId: t.profile.cloudinary_public_id,
                        size: "large",
                        rightIcon: "solid/lock"
                    }), (0, o.jsx)(s.Z, {
                        className: "dl-margin-l-8",
                        children: u
                    })]
                })
            }
        },
        657637: (e, t, n) => {
            n.d(t, {
                M: () => i
            });
            var o = n(24553);
            const i = e => {
                const [t, n] = (0, o.useSearchParams)();
                return {
                    isVisible: "opened" === t.get(e),
                    open: function(o) {
                        t.set(e, "opened"), n(t, {
                            state: o
                        })
                    },
                    close: () => {
                        t.delete(e), n(t)
                    }
                }
            }
        },
        204161: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var o = n(184481);
            const i = e => {
                let {
                    shouldRefetchQuery: t
                } = e;
                const [n, i] = (0, o.useState)(0);
                return {
                    refetchInterval: e => !!(e => t(e) && n < 2)(e) && 2e3,
                    incrementNumberOfRequests: () => i((e => e + 1))
                }
            }
        },
        236019: (e, t, n) => {
            n.d(t, {
                H: () => r,
                M: () => l
            });
            var o = n(184481),
                i = n(176307),
                a = n(239417),
                s = n(204161);
            const r = e => {
                    let {
                        appointmentId: t,
                        enabled: n,
                        refetchIfEmpty: r = !1
                    } = e;
                    const l = (0, o.useContext)(a._O),
                        {
                            incrementNumberOfRequests: c,
                            refetchInterval: d
                        } = (0, s.Z)({
                            shouldRefetchQuery: e => r && 0 === (null === e || void 0 === e ? void 0 : e.length)
                        }),
                        p = ["check_in", "questionnaire", "appointments", t, "requests"];
                    return (0, i.useQuery)(p, (() => l.get(`/questionnaire/appointments/${t}/requests`).then((e => {
                        let {
                            bodyData: t
                        } = e;
                        return c(), t
                    }))), {
                        enabled: n,
                        refetchInterval: d
                    })
                },
                l = e => {
                    let {
                        appointmentId: t,
                        questionnaireRequestId: n
                    } = e;
                    const s = (0, o.useContext)(a._O),
                        r = ["check_in", "questionnaire", "appointments", t, "requests", n];
                    return (0, i.useQuery)(r, (() => s.get(`/questionnaire/appointments/${t}/requests/${n}`).then((e => {
                        let {
                            bodyData: t
                        } = e;
                        return t
                    }))))
                }
        },
        463512: () => {},
        590728: (e, t, n) => {
            e.exports = n.p + "0741331f1ca830333fe9.png"
        }
    }
]);
//# sourceMappingURL=../42805-f4c809fa4f41b55193ed.js.map