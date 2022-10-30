"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [48670], {
        994573: (e, t, s) => {
            s.d(t, {
                Z: () => r
            });
            var a = s(294184),
                n = s.n(a),
                l = s(785893);
            const r = e => {
                let {
                    className: t,
                    children: s,
                    ...a
                } = e;
                return (0, l.jsx)("div", { ...a,
                    className: n()("form-group", t),
                    "data-design-system": "base",
                    children: s
                })
            }
        },
        900144: (e, t, s) => {
            s.d(t, {
                Z: () => l
            });
            var a = s(184481),
                n = s(261397);
            Symbol("not loaded");

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                const [s, l] = (0, a.useState)(t);
                return (0, a.useEffect)((() => {
                    let t = !1;
                    return e instanceof n.oM && e.force().then((e => {
                        t || l(e)
                    })), () => {
                        t = !0
                    }
                }), [e]), e instanceof n.oM ? s : e
            }
        },
        147841: (e, t, s) => {
            s.d(t, {
                Z: () => _e
            });
            var a = s(184481),
                n = s.n(a),
                l = s(24553),
                r = s(5212),
                i = s(461576),
                o = s(516590),
                d = s(580163),
                c = s(445884),
                u = s(951969),
                m = s(129303),
                p = s(8955),
                _ = s(982761),
                h = s(294184),
                f = s.n(h),
                x = s(977954),
                v = s.n(x),
                g = s(426613),
                w = s(929014),
                y = s(451749),
                Z = s(755506),
                b = s(453040),
                q = s(785893);
            const j = e => {
                let {
                    date: t
                } = e;
                const s = (0, a.useMemo)((() => {
                    switch (v()().startOf("day").diff(v()(t).startOf("day"), "days")) {
                        case 0:
                            return c.Z.t("common.today");
                        case 1:
                            return c.Z.t("common.yesterday");
                        default:
                            return v()(t).localizeTimeToParisTimeZone("D MMM YYYY")
                    }
                }), [t]);
                return (0, q.jsxs)("div", {
                    className: "dl-flex-center dl-position-relative dl-padding-y-16 dl-margin-x-16",
                    children: [(0, q.jsx)(Z.Z, {
                        uiStyle: "neutral-090",
                        className: "dl-position-absolute dl-full-width"
                    }), (0, q.jsx)(b.Z, {
                        uiStyle: "body-xs-bold",
                        color: "neutral-090",
                        className: "dl-position-absolute dl-padding-x-16 dl-white-bg",
                        children: s
                    })]
                })
            };
            var S = s(990626),
                C = s(708221),
                N = s(437124),
                R = s(545763);
            const k = e => {
                let {
                    doctorName: t,
                    doctorId: s,
                    doctorLink: n,
                    isMobile: r = !1
                } = e;
                const i = (0, l.useNavigate)(),
                    d = (0, a.useCallback)((() => {
                        r ? N.ZP.get("/patient_requests/requests/new.json", {
                            query: {
                                profile_id: s
                            }
                        }).then((() => (0, S.cr)("patient_request_for_minor_relatives") ? i(`${n}/patient-request/patient-request-master-patient`, {
                            replace: !0
                        }) : i(`${n}/patient-request/patient-request-type`, {
                            replace: !0
                        }))) : N.ZP.get("/patient_requests/requests/new.json", {
                            query: {
                                reset: !0
                            }
                        }).then((() => {
                            (0, C.Z)(`/patient_requests/requests/new?profile_id=${s}`)
                        }))
                    }), [s, n, r, i]),
                    u = (0, a.useCallback)((() => {
                        (0, o.ZP)({
                            name: "send_new_patient_request_click"
                        }, {
                            schema: "patient",
                            trackingCallback: d
                        })
                    }), [d]);
                return (0, q.jsx)("span", {
                    className: "dl-text-center mb-24",
                    children: (0, q.jsx)(R.Z, {
                        uiStyle: "small-primary",
                        onClick: u,
                        "data-id": "send_new_request",
                        children: c.Z.t("patient_request.root.request_view.send_new_request", {
                            name: t
                        })
                    })
                })
            };
            var D = s(169339),
                M = s(383915),
                E = s(968461),
                P = s(800274),
                I = s(569096),
                A = s(194718),
                O = s(876616),
                T = s(160160),
                z = s(619595),
                W = s(258637),
                L = s(335963),
                H = s(298264),
                F = s(378616);
            const B = e => {
                    let {
                        documentName: t,
                        onRemove: s,
                        onClick: a
                    } = e;
                    return (0, q.jsx)(L.Z, {
                        className: "dl-full-max-width",
                        ellipsis: !0,
                        iconName: "regular/paperclip",
                        label: t,
                        onClick: a,
                        onDelete: s
                    })
                },
                $ = e => {
                    let {
                        className: t,
                        compact: s = !1,
                        disabled: n,
                        autoFocus: l = !0,
                        profile: r,
                        isLoading: i,
                        sendRequest: o
                    } = e;
                    const [d, u] = (0, a.useState)(""), {
                        uploadedDocuments: m,
                        showDocumentUploadModal: p,
                        setShowDocumentUploadModal: _,
                        checkedDocumentIds: h,
                        onSuccess: x,
                        removeFile: v
                    } = (0, F.Z)(), g = s ? "xsmall" : "medium", w = s ? 3 : 4, y = !(null !== d && void 0 !== d && d.trim()) && (!h || 0 === h.length);
                    return (0, q.jsxs)("div", {
                        className: f()("dl-border-t", "dl-padding-8", t),
                        "data-test": "message-input-container",
                        children: [m && (0, q.jsxs)("div", {
                            className: "dl-flex-row dl-margin-b-16 flex-wrap dl-column-gap-16 dl-row-gap-8",
                            children: [m.slice(0, 3).map((e => (0, q.jsx)(B, {
                                documentName: e.title,
                                onRemove: () => {
                                    v(e)
                                },
                                onClick: () => _(!0),
                                disabled: n
                            }, e.id))), m.length > 3 && (0, q.jsx)(L.Z, {
                                className: "dl-full-max-width",
                                label: "+" + (m.length - 3),
                                onClick: () => _(!0)
                            })]
                        }), (0, q.jsxs)("div", {
                            className: f()("flex", "dl-align-items-end", {
                                "dl-margin-l-8-between-children": s,
                                "dl-margin-l-16-between-children": !s
                            }),
                            children: [(0, q.jsxs)("div", {
                                className: f()("flex", "dl-align-items-end", {
                                    "dl-padding-y-8": s
                                }),
                                children: [p && (0, q.jsx)(H.Z, {
                                    profile: r,
                                    setShowModal: _,
                                    onSuccess: x,
                                    sharingFunnelId: (0, T.Z)(),
                                    selectedDocumentIds: m.map((e => e.id))
                                }), (0, q.jsx)(z.ZP, {
                                    type: "submit",
                                    title: c.Z.t("common.choose_a_file"),
                                    onClick: () => _(!0),
                                    name: "paperclip",
                                    "aria-label": c.Z.t("common.choose_a_file"),
                                    size: g
                                })]
                            }), (0, q.jsx)("div", {
                                className: "dl-flex-grow dl-ellipsis-container",
                                children: (0, q.jsx)(W.Z, {
                                    autoFocus: l,
                                    multiline: !0,
                                    autosize: !0,
                                    maxRows: w,
                                    className: f()("dl-gray-lighter-bg dl-rounded-borders dl-overflow-auto", {
                                        "dl-placeholder-gray-light": n
                                    }),
                                    placeholder: c.Z.t("common.instant_messaging.input_placeholder"),
                                    uiStyle: "transparent",
                                    value: d,
                                    disabled: n,
                                    onChange: e => {
                                        u(e.target.value)
                                    },
                                    "data-walkme": "instant-messaging-send-message"
                                })
                            }), (0, q.jsx)(z.ZP, {
                                type: "submit",
                                name: "paper-plane",
                                disabled: y,
                                onClick: e => {
                                    e.preventDefault(), o && o({
                                        uploadedDocuments: m,
                                        message: d,
                                        checkedDocumentIds: h
                                    })
                                },
                                loadable: {
                                    loading: i
                                },
                                title: c.Z.t("common.actions.send"),
                                className: "dl-send-message-button",
                                size: "medium",
                                color: "white"
                            })]
                        })]
                    })
                };
            var U = s(784600),
                Y = s(597043),
                G = s(900144),
                J = s(511466);
            const K = () => (0, q.jsx)(w.Z, {
                    variant: "deprecated-alert-interface",
                    className: "dl-patient-request-message-error",
                    uiStyle: "error",
                    size: "small",
                    children: c.Z.t("api.accounts.index.root.notifications_center.patient_requests.decryption_failed")
                }),
                Q = e => {
                    let {
                        text: t,
                        noMargin: s,
                        ellipsis: a
                    } = e;
                    const n = (0, G.Z)(t, (0, q.jsx)(J.Z, {
                        size: "small"
                    }));
                    return null === n ? (0, q.jsx)(K, {}) : (0, q.jsx)(Y.Z, {
                        className: `${s?"":"dl-margin-b-16 "} ${a?"dl-text-ellipsis":""}`,
                        children: n
                    })
                };
            var V = s(247557);
            const X = e => {
                    let {
                        name: t,
                        message: s,
                        className: a,
                        requestDocuments: n,
                        setShowReplyDrawer: l,
                        showReplyButton: i,
                        showMessageTimeStamp: o = !0,
                        trackingId: d,
                        trackingDetails: u,
                        trackingSchema: m
                    } = e;
                    const p = n.filter((e => null === e || void 0 === e ? void 0 : e.sharings.some((e => e.patient_request_message_id === s.id))));
                    return (0, q.jsx)(Y.Z, {
                        className: f()("dl-flex-column mx-24 dl-margin-y-24", {
                            "dl-align-self-end": s.from_patient,
                            "dl-align-self-start": s.from_doctor,
                            "dl-width-75": (0, r.rl)(),
                            "dl-width-60": !(0, r.rl)()
                        }, a),
                        children: (0, q.jsxs)(U.Z, {
                            bgColor: s.from_patient ? "neutral-130" : "neutral-020",
                            className: "!rounded-[20px]",
                            children: [(0, q.jsxs)("div", {
                                className: "dl-flex-column dl-full-width flex dl-text-left",
                                children: [(0, q.jsx)(b.Z, {
                                    color: s.from_patient ? "white" : "neutral-150",
                                    uiStyle: "body-s-bold",
                                    className: "!mb-16",
                                    children: t
                                }), (0, q.jsx)(b.Z, {
                                    whiteSpace: !0,
                                    color: s.from_patient ? "white" : "neutral-130",
                                    children: (0, q.jsx)(Q, {
                                        text: s.body
                                    })
                                }), p.map((e => (0, q.jsx)(V.Z, {
                                    className: "dl-margin-b-8",
                                    doc: e,
                                    condensed: !0,
                                    border: !0,
                                    showActionsButton: !1
                                }, e.id)))]
                            }), s.from_patient && (0, q.jsx)(b.Z, {
                                color: "white",
                                className: "dl-font-size-smaller flex dl-justify-end dl-margin-t-8",
                                children: c.Z.t("common.sent_at", {
                                    date: v()(s.created_at).localize("H:mm")
                                })
                            }), s.from_doctor && o && (0, q.jsx)(b.Z, {
                                color: "neutral-130",
                                className: "dl-font-size-smaller flex",
                                children: v()(s.created_at).localize("H:mm")
                            }), i && (0, q.jsx)(R.Z, {
                                trackingId: d,
                                trackingDetails: u,
                                trackingSchema: m,
                                className: "dl-margin-t-16",
                                block: !0,
                                onClick: () => l(!0),
                                children: c.Z.t("common.actions.reply")
                            })]
                        })
                    })
                },
                ee = e => {
                    let {
                        name: t,
                        message: s,
                        show: n,
                        requestId: l,
                        setShow: r,
                        patientBaseId: i,
                        requestDocuments: o,
                        refreshDocuments: d,
                        profile: u
                    } = e;
                    const {
                        refreshRequests: m
                    } = (0, a.useContext)(O.Z), {
                        mutate: p,
                        isLoading: _
                    } = (0, A.NK)(), {
                        withTankerRegistered: h
                    } = (0, I.Z)({
                        errorMessage: c.Z.t("tanker.must_verify_identity.patient_request")
                    }), f = [{
                        patientBaseId: i
                    }, {
                        masterPatientId: (0, P.ZP)().main_master_patient_id
                    }], x = h((e => {
                        let {
                            uploadedDocuments: t,
                            message: s,
                            selectedOption: a,
                            checkedDocumentIds: n,
                            onSuccess: r
                        } = e;
                        p({
                            requestId: l,
                            uploadedDocuments: t,
                            shareWith: f,
                            message: s,
                            selectedOption: a,
                            checkedDocumentIds: n
                        }, {
                            onSuccess: e => {
                                let {
                                    responseBody: t
                                } = e;
                                const s = JSON.parse(t);
                                m(), d(), r && r(s.id)
                            }
                        })
                    }));
                    return (0, q.jsxs)(D.Z, {
                        className: "dl-padding-x-0",
                        contentClassName: "dl-padding-x-0",
                        title: c.Z.t("common.actions.answer_to", {
                            to: t
                        }),
                        show: n,
                        onHide: () => r(!1),
                        children: [(0, q.jsx)(M.Z, {
                            children: (0, q.jsx)(X, {
                                className: "dl-margin-y-0 dl-width-auto",
                                name: t,
                                message: s,
                                requestDocuments: o,
                                showReplyButton: !1,
                                showMessageTimeStamp: !1
                            }, s.id)
                        }), (0, q.jsx)(E.Z, {
                            className: "dl-flex-column dl-reply-footer",
                            children: (0, q.jsx)($, {
                                profile: u,
                                sendRequest: x,
                                isLoading: _
                            })
                        })]
                    })
                };
            var te = s(13553),
                se = s(661288);
            const ae = e => {
                    let {
                        updatedAt: t
                    } = e;
                    const s = c.Z.t("patient_request.root.request_view.request_closed", {
                        date: (0, te.wX)(t),
                        time: (0, se.m)(t)
                    });
                    return (0, q.jsx)(b.Z, {
                        uiStyle: "body-s-regular",
                        color: "neutral-090",
                        align: "center",
                        className: "!mx-32 !mb-16",
                        children: s
                    })
                },
                ne = s.p + "b0690a174ff4340b58fb.png";
            var le = s(432613),
                re = s(528846),
                ie = s(425030);
            const oe = e => {
                    let {
                        request: t
                    } = e;
                    if (!t.created_by.is_doctor) return null;
                    const s = Boolean("other" === t.kind);
                    return (0, q.jsxs)("div", {
                        className: "flex items-center p-16 m-16 dl-neutral-010-bg rounded-lg",
                        "data-test-id": "banner",
                        children: [(0, q.jsx)(re.Z, {
                            src: ne,
                            alt: "inbox-letter-illustration",
                            width: "64px",
                            className: "mr-16"
                        }), (0, q.jsx)(le.xv, {
                            children: s ? c.Z.t("patient_request.root.request_item.banner_info_other_html", {
                                doctor_name: t.profile.name_with_title
                            }) : c.Z.t("patient_request.root.request_item.banner_info_html", {
                                doctor_name: t.profile.name_with_title,
                                request_motive: c.Z.t(ie.f[t.kind].title)
                            })
                        })]
                    })
                },
                de = e => {
                    var t, s, l, i, o;
                    let {
                        request: u,
                        isMobile: m
                    } = e;
                    const {
                        documents: p,
                        fetchDocuments: h
                    } = (0, _.Z)(), [x, Z] = (0, a.useState)(), b = p.filter((e => null === e || void 0 === e ? void 0 : e.sharings.some((e => e.patient_request_entry_id === u.id)))), [S, C] = (0, a.useState)(!1), N = (0, d.ZP)(), R = (0, a.useRef)(null), D = "awaiting_patient_response" === u.status, M = (0, y.Af)(u), E = (0, y.Bw)(u), P = u.profile.patient_request_configuration_enabled, I = null === (t = u.messages) || void 0 === t ? void 0 : t.slice().reverse().find((e => !e.from_patient));
                    (0, a.useLayoutEffect)((() => {
                        const e = R.current;
                        e && e.scrollTo(0, e.scrollHeight)
                    }), [u.messages]), (0, a.useEffect)((() => {
                        x && (N({
                            message: x,
                            uiStyle: "warning"
                        }), Z(null))
                    }), [x, Z, N]);
                    const A = [{
                        id: "banner",
                        type: "banner",
                        created_at: v()(u.created_at).startOf("day").toISOString()
                    }, ...u.messages];
                    return A.sort(((e, t) => v()(e).isBefore(v()(t)))), (0, q.jsx)("div", {
                        ref: R,
                        className: "overflow-y-auto z-0",
                        children: (0, q.jsx)("div", {
                            className: f()({
                                "flex justify-center": (0, r.Zz)()
                            }),
                            children: (0, q.jsxs)("div", {
                                className: f()("flex flex-col mt-24", {
                                    "dl-max-width-1032 flex-grow": (0, r.Zz)()
                                }),
                                children: [null === A || void 0 === A ? void 0 : A.map(((e, t, s) => {
                                    var a;
                                    const l = 0 === t || !v()(s[t - 1].created_at).isSame(v()(e.created_at), "day"),
                                        r = l,
                                        i = l && "banner" === e.type;
                                    return (0, q.jsxs)(n().Fragment, {
                                        children: [r && (0, q.jsx)(j, {
                                            date: e.created_at
                                        }), i ? (0, q.jsx)(oe, {
                                            request: u
                                        }) : (0, q.jsx)(X, {
                                            trackingId: "patient_request_reply_click",
                                            trackingDetails: {
                                                patient_request_id: u.id
                                            },
                                            trackingSchema: g.PA.patient,
                                            name: e.from_patient ? u.created_by.name : null === (a = u.profile) || void 0 === a ? void 0 : a.full_name,
                                            message: e,
                                            requestDocuments: b,
                                            isMobile: m,
                                            showReplyButton: D && t === s.length - 1,
                                            setShowReplyDrawer: C
                                        })]
                                    }, e.id)
                                })), E && (0, q.jsx)(w.Z, {
                                    variant: "no-background",
                                    uiStyle: "success",
                                    label: c.Z.t("patient_request.root.request_item.reassurance_text", {
                                        doctor_name: u.profile.name_with_title
                                    }),
                                    className: "dl-align-self-center mx-16 mb-24"
                                }), M && (0, q.jsx)(ae, {
                                    updatedAt: u.updatedAt
                                }), M && P && (0, q.jsx)(k, {
                                    doctorName: null === (s = u.profile) || void 0 === s ? void 0 : s.full_name,
                                    doctorId: null === (l = u.profile) || void 0 === l ? void 0 : l.id,
                                    doctorLink: null === (i = u.profile) || void 0 === i ? void 0 : i.link,
                                    isMobile: m
                                }), D && (0, q.jsx)(ee, {
                                    show: S,
                                    setShow: C,
                                    name: null === (o = u.profile) || void 0 === o ? void 0 : o.full_name,
                                    patientBaseId: u.patient.patient_base_id,
                                    requestId: u.id,
                                    message: I,
                                    profile: u.profile,
                                    requestDocuments: b,
                                    refreshDocuments: h
                                })]
                            })
                        })
                    })
                };
            var ce = s(915488),
                ue = s(845126);
            const me = e => {
                let {
                    avatarUrl: t,
                    doctorName: s,
                    specialityName: a,
                    city: n,
                    requestType: l,
                    link: i,
                    patientName: o
                } = e;
                return (0, r.Zz)() ? (0, q.jsxs)("div", {
                    className: "flex justify-between items-center p-16 dl-border-b",
                    "data-test": "request-header",
                    children: [(0, q.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, q.jsxs)("a", {
                            href: i,
                            "aria-label": c.Z.t("configuration.profiles.edit.goto_profile_page"),
                            className: "dl-patient-request-avatar_or_name flex items-center no-underline",
                            children: [(0, q.jsx)(ce.ZP, {
                                size: "small",
                                src: t
                            }), (0, q.jsx)(b.Z, {
                                uiStyle: "body-s-bold",
                                className: "!ml-8",
                                children: s
                            })]
                        }), (0, q.jsx)(b.Z, {
                            className: "!mx-8",
                            children: "\u2022"
                        }), (0, q.jsx)(b.Z, {
                            children: a
                        }), (0, q.jsx)(b.Z, {
                            className: "!mx-8",
                            children: "\u2022"
                        }), (0, q.jsx)(b.Z, {
                            className: "!mr-16",
                            children: n
                        })]
                    }), (0, q.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, q.jsx)(ue.Z, {
                            name: "solid/envelope",
                            color: "neutral-130",
                            className: "mr-8"
                        }), (0, q.jsx)(b.Z, {
                            color: "neutral-130",
                            ellipsis: !0,
                            className: "dl-lg-max-width-240",
                            children: l
                        }), o && (0, q.jsxs)(q.Fragment, {
                            children: [(0, q.jsx)(ue.Z, {
                                name: "solid/user-group",
                                className: "ml-16 mr-8",
                                color: "neutral-130"
                            }), (0, q.jsx)(b.Z, {
                                color: "neutral-130",
                                children: o
                            })]
                        })]
                    })]
                }) : (0, q.jsxs)("div", {
                    className: "py-8 px-16 dl-shadow-1 z-10",
                    "data-test": "request-header",
                    children: [(0, q.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, q.jsx)(ue.Z, {
                            name: "solid/envelope",
                            color: "neutral-130",
                            className: "mr-8"
                        }), (0, q.jsx)(b.Z, {
                            color: "neutral-130",
                            ellipsis: !0,
                            children: l
                        })]
                    }), o && (0, q.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, q.jsx)(ue.Z, {
                            name: "solid/user-group",
                            color: "neutral-130",
                            className: "mr-8"
                        }), (0, q.jsx)(b.Z, {
                            color: "neutral-130",
                            ellipsis: !0,
                            children: o
                        })]
                    })]
                })
            };
            var pe = s(12081);
            const _e = e => {
                let {
                    request: t,
                    isMobile: s
                } = e;
                const {
                    avatar_url: n,
                    full_name: h,
                    speciality_name: f,
                    city: x,
                    link: v
                } = t.profile, g = (0, l.useLocation)(), w = (0, d.ZP)(), {
                    markRequestAsSeen: y
                } = (0, a.useContext)(O.Z), [Z, b] = (0, a.useState)(!1), j = (0, a.useCallback)((() => {
                    const e = (0, p.U2)("nps_patient_request_review") || {
                        ids: []
                    };
                    e.ids.length < 4 && !e.ids.includes(t.id) && (b(!0), (0, p.t8)("nps_patient_request_review", {
                        ids: [...e.ids, t.id]
                    }))
                }), [t.id]);
                return (0, a.useEffect)((() => {
                    (0, o.ZP)({
                        name: "patient_request_thread_display",
                        details: {
                            patient_request_id: t.id
                        }
                    }, {
                        schema: "patient"
                    })
                }), [t]), (0, a.useEffect)((() => {
                    t.viewed_by_patient_at || y(t.id)
                }), [t, y]), (0, a.useEffect)((() => {
                    var e;
                    const s = new URLSearchParams(window.location.search);
                    (null !== g && void 0 !== g && null !== (e = g.state) && void 0 !== e && e.displayConfirmation || s.get("display_confirmation")) && !t.viewed_by_patient_at && (j(), w({
                        message: c.Z.t("patient_request.root.confirmation.request_sent"),
                        uiStyle: "success"
                    }), (0, r.b$)() && (0, u.vG)("3.3.6") && m.ZP.call({
                        method: m.vN,
                        params: ["notificationSuccess"]
                    }))
                }), [g, w, t, j]), (0, q.jsx)(_.L, {
                    masterPatientId: t.master_patient_id,
                    children: (0, q.jsxs)(i.Z, {
                        className: "dl-full-width dl-white-bg dl-overflow-hidden",
                        children: [(0, q.jsx)(me, {
                            requestType: c.Z.t(ie.f[t.kind].title),
                            avatarUrl: n,
                            doctorName: h,
                            patientName: t.created_for_relative && t.patient.name,
                            specialityName: f,
                            city: x,
                            link: v
                        }), (0, q.jsx)(de, {
                            request: t,
                            isMobile: s
                        }), (0, q.jsx)(pe.Z, {
                            showReviewModal: Z,
                            setShowReviewModal: b,
                            requestId: t.id
                        })]
                    })
                })
            }
        },
        461576: (e, t, s) => {
            s.d(t, {
                Z: () => r
            });
            var a = s(785893),
                n = s(294184),
                l = s.n(n);
            const r = e => {
                let {
                    children: t,
                    style: s,
                    className: n,
                    "data-test": r
                } = e;
                return (0, a.jsx)("div", {
                    style: s,
                    className: l()("dl-main-panel dl-flex-grow dl-flex-column dl-ellipsis-container", n),
                    "data-test": r,
                    "data-design-system": "base",
                    children: t
                })
            }
        },
        569096: (e, t, s) => {
            s.d(t, {
                Z: () => i
            });
            var a = s(184481),
                n = s(580163),
                l = s(800274),
                r = s(261397);
            const i = e => {
                const t = (0, l.ZP)(),
                    s = (0, n.ZP)(),
                    i = (e => {
                        const t = (0, a.useContext)(r.WA);
                        return async () => {
                            if (!e) return !1;
                            const s = await t.startTanker(e, {
                                forceCodeEmailVerification: !0,
                                enforceFullRegistration: !0
                            });
                            return (0, r.aE)(s, e)
                        }
                    })(t);
                return {
                    withTankerRegistered: a => async function() {
                        if (!t) return;
                        if (null !== e && void 0 !== e && e.disable) return a(...arguments);
                        const n = await i();
                        if (n) return a(...arguments);
                        null !== e && void 0 !== e && e.errorMessage && s({
                            message: null === e || void 0 === e ? void 0 : e.errorMessage,
                            uiStyle: "error"
                        })
                    }
                }
            }
        },
        12081: (e, t, s) => {
            s.d(t, {
                Z: () => A
            });
            var a, n = s(785893),
                l = s(184481),
                r = s(580163),
                i = s(445884),
                o = s(516590),
                d = s(169339);
            ! function(e) {
                e.SCORE = "SCORE", e.LOW_RATE = "LOW RATE", e.HIGH_RATE = "HIGH RATE", e.COMPLICATED_PROCESS = "COMPLICATED PROCESS"
            }(a || (a = {}));
            var c = s(462814),
                u = s(383915),
                m = s(545763),
                p = s(968461);
            const _ = e => {
                let {
                    confirmButtonDisabled: t,
                    onConfirm: s,
                    onClose: a
                } = e;
                return (0, n.jsxs)(p.Z, {
                    children: [(0, n.jsx)(m.Z, {
                        uiStyle: "tertiary-neutral",
                        onClick: a,
                        children: i.Z.t("common.actions.close")
                    }), (0, n.jsx)(m.Z, {
                        disabled: t,
                        onClick: s,
                        children: i.Z.t("common.actions.send")
                    })]
                })
            };
            var h = s(994573),
                f = s(924722);
            const x = e => {
                let {
                    options: t,
                    selectedReason: s,
                    onChange: a
                } = e;
                return (0, n.jsx)(n.Fragment, {
                    children: t.map((e => {
                        const {
                            label: t,
                            value: r
                        } = e;
                        return (0, n.jsx)(l.Fragment, {
                            children: (0, n.jsx)(h.Z, {
                                children: (0, n.jsx)(f.Z, {
                                    checked: s === r,
                                    label: t,
                                    name: r,
                                    onChange: () => a(r),
                                    value: r,
                                    className: "dl-review-radio-button flex dl-align-items-center"
                                })
                            })
                        }, r)
                    }))
                })
            };
            var v = s(453040),
                g = s(366699);
            const w = e => {
                    let {
                        title: t,
                        onChange: s
                    } = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(v.Z, {
                            uiStyle: "title-s-bold",
                            children: t
                        }), (0, n.jsx)(g.Z, {
                            field: "nps_patient_request[comment]",
                            className: "",
                            label: null,
                            type: "textarea",
                            multiline: !0,
                            rows: 3,
                            autoFocus: !0,
                            onChange: s
                        })]
                    })
                },
                y = e => {
                    let {
                        options: t,
                        reasonWithComment: s,
                        onConfirmReview: a,
                        closeReviewModal: r
                    } = e;
                    const [o, d] = (0, l.useState)(""), [m, p] = (0, l.useState)("");
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(u.Z, {
                            children: (0, n.jsxs)(c.Z, {
                                children: [(0, n.jsx)(x, {
                                    options: t,
                                    selectedReason: o,
                                    onChange: d
                                }), s === o && (0, n.jsx)(w, {
                                    title: i.Z.t("patient_request.review_modal.comment_title"),
                                    onChange: p
                                })]
                            })
                        }), (0, n.jsx)(_, {
                            confirmButtonDisabled: !o,
                            onConfirm: () => {
                                a(o, m)
                            },
                            onClose: r
                        })]
                    })
                },
                Z = [{
                    label: i.Z.t("patient_request.review_modal.low_rate_modal.options.complicated_process"),
                    value: "complicated_process"
                }, {
                    label: i.Z.t("patient_request.review_modal.low_rate_modal.options.insufficient_types"),
                    value: "insufficient_types"
                }, {
                    label: i.Z.t("patient_request.review_modal.low_rate_modal.options.treatment_time"),
                    value: "treatment_time"
                }, {
                    label: i.Z.t("patient_request.review_modal.other"),
                    value: "other"
                }],
                b = () => {
                    const e = (0, l.useContext)(I);
                    if (!e) return null;
                    const {
                        setStep: t,
                        closeReviewModal: s,
                        onSubmitReview: r
                    } = e;
                    return (0, n.jsx)(y, {
                        options: Z,
                        reasonWithComment: "other",
                        onConfirmReview: (e, s) => {
                            "complicated_process" === e ? t(a.COMPLICATED_PROCESS) : r(e, s)
                        },
                        closeReviewModal: s
                    })
                };
            var q = s(597043),
                j = s(845126);
            const S = [1, 2, 3, 4, 5],
                C = (e, t, s, a, n) => e > 0 ? s <= e ? a : n : t > 0 && s <= t ? a : n,
                N = () => {
                    const [e, t] = (0, l.useState)(0), [s, r] = (0, l.useState)(0), o = (0, l.useContext)(I);
                    if (!o) return null;
                    const {
                        setNpsScore: d,
                        setStep: c
                    } = o;
                    return (0, n.jsx)(u.Z, {
                        children: (0, n.jsxs)(q.Z, {
                            children: [(0, n.jsx)(q.Z, {
                                className: "dl-flex-center",
                                onMouseLeave: () => t(0),
                                children: S.map((i => (0, n.jsx)(l.Fragment, {
                                    children: (0, n.jsx)(q.Z, {
                                        onClick: () => {
                                            d(i), r(i), (e => {
                                                d(e), c(e < 4 ? a.LOW_RATE : a.HIGH_RATE)
                                            })(i)
                                        },
                                        className: `dl-nps-score-${i}`,
                                        "data-nps-score": i,
                                        children: (0, n.jsx)(j.Z, {
                                            onMouseEnter: () => t(i),
                                            name: C(e, s, i, "solid/star", "regular/star"),
                                            size: "large",
                                            className: `dl-margin-x-8 dl-request-review-icon ${C(e,s,i,"less-than-or-equal","")}`
                                        })
                                    }, i)
                                }, i)))
                            }), (0, n.jsxs)(q.Z, {
                                className: "dl-justify-around dl-flex-row",
                                children: [(0, n.jsx)(v.Z, {
                                    children: i.Z.t("patient_request.review_modal.lowest")
                                }), (0, n.jsx)(v.Z, {
                                    children: i.Z.t("patient_request.review_modal.highest")
                                })]
                            })]
                        })
                    })
                },
                R = [{
                    label: i.Z.t("patient_request.review_modal.complicated_process_modal.options.account_creation"),
                    value: "complicated_process_account_creation"
                }, {
                    label: i.Z.t("patient_request.review_modal.complicated_process_modal.options.sharing_documents"),
                    value: "complicated_process_sharing_documents"
                }, {
                    label: i.Z.t("patient_request.review_modal.complicated_process_modal.options.not_clear"),
                    value: "complicated_process_not_clear_flow"
                }, {
                    label: i.Z.t("patient_request.review_modal.complicated_process_modal.options.many_steps"),
                    value: "complicated_process_many_steps"
                }, {
                    label: i.Z.t("patient_request.review_modal.other"),
                    value: "complicated_process_other"
                }],
                k = () => {
                    const e = (0, l.useContext)(I);
                    if (!e) return null;
                    const {
                        closeReviewModal: t,
                        onSubmitReview: s
                    } = e;
                    return (0, n.jsx)(y, {
                        options: R,
                        reasonWithComment: "complicated_process_other",
                        onConfirmReview: s,
                        closeReviewModal: t
                    })
                },
                D = [{
                    label: i.Z.t("patient_request.review_modal.high_rate_modal.options.easy_process"),
                    value: "easy_process"
                }, {
                    label: i.Z.t("patient_request.review_modal.high_rate_modal.options.save_time"),
                    value: "save_time"
                }, {
                    label: i.Z.t("patient_request.review_modal.high_rate_modal.options.time_accessibility"),
                    value: "send_at_any_time"
                }, {
                    label: i.Z.t("patient_request.review_modal.high_rate_modal.options.device_friendly"),
                    value: "send_from_any_device"
                }, {
                    label: i.Z.t("patient_request.review_modal.other"),
                    value: "other"
                }],
                M = () => {
                    const e = (0, l.useContext)(I);
                    if (!e) return null;
                    const {
                        closeReviewModal: t,
                        onSubmitReview: s
                    } = e;
                    return (0, n.jsx)(y, {
                        options: D,
                        reasonWithComment: "other",
                        onConfirmReview: s,
                        closeReviewModal: t
                    })
                },
                E = {
                    [a.SCORE]: N,
                    [a.LOW_RATE]: b,
                    [a.HIGH_RATE]: M,
                    [a.COMPLICATED_PROCESS]: k
                },
                P = Object.freeze({
                    [a.SCORE]: "patient_request.review_modal.title",
                    [a.LOW_RATE]: "patient_request.review_modal.low_rate_modal.title",
                    [a.HIGH_RATE]: "patient_request.review_modal.high_rate_modal.title",
                    [a.COMPLICATED_PROCESS]: "patient_request.review_modal.complicated_process_modal.title"
                }),
                I = (0, l.createContext)(null),
                A = e => {
                    let {
                        showReviewModal: t,
                        setShowReviewModal: s,
                        requestId: c
                    } = e;
                    const [u, m] = (0, l.useState)(0), [p, _] = (0, l.useState)(a.SCORE), h = (0, r.ZP)(), f = (0, l.useCallback)((() => h({
                        title: i.Z.t("patient_request.review_modal.success_toast.title"),
                        uiStyle: "success",
                        message: i.Z.t("patient_request.review_modal.success_toast.message")
                    })), [h]), x = (0, l.useCallback)(((e, t) => {
                        (0, o.ZP)({
                            name: "nps_patient_request",
                            details: {
                                request_id: c,
                                nps_score: u,
                                nps_score_max: 5,
                                nps_score_min: 1,
                                nps_reason: e,
                                nps_comment: t
                            }
                        }, {
                            schema: "patient"
                        }), f(), s(!1)
                    }), [u, c, s, f]), v = (0, l.useCallback)((() => {
                        s(!1)
                    }), [s]), g = (0, l.useMemo)((() => ({
                        setNpsScore: m,
                        setStep: _,
                        closeReviewModal: v,
                        onSubmitReview: x
                    })), [v, x]), w = E[p];
                    return (0, n.jsx)(d.Z, {
                        title: i.Z.t(P[p]),
                        show: t,
                        onHide: v,
                        withCloseIcon: !0,
                        showOverflow: !0,
                        size: "small",
                        children: (0, n.jsx)(I.Provider, {
                            value: g,
                            children: (0, n.jsx)(w, {})
                        })
                    })
                }
        },
        451749: (e, t, s) => {
            s.d(t, {
                Af: () => n,
                Bw: () => r,
                RD: () => l
            });
            s(445884);
            var a = s(171685);
            const n = e => e.status === a.eJ.TREATED,
                l = e => e.status === a.eJ.AWAITING_PATIENT_RESPONSE,
                r = e => e.status === a.eJ.UNTREATED
        },
        661288: (e, t, s) => {
            s.d(t, {
                m: () => l
            });
            var a = s(977954),
                n = s.n(a);
            const l = e => {
                const t = n()().startOf("day").diff(n()(e).startOf("day"), "days");
                return n()().startOf("year").diff(n()(e).startOf("year"), "years") >= 1 ? n()(e).localize("D MMMM YYYY") : t >= 1 ? n()(e).localize("D MMMM") : n()(e).localize("HH:mm")
            }
        },
        876616: (e, t, s) => {
            s.d(t, {
                Z: () => x,
                H: () => f
            });
            var a = s(785893),
                n = s(184481),
                l = s(261397),
                r = s(977954),
                i = s.n(r),
                o = s(174976),
                d = s(239417);
            var c = s(580163),
                u = s(437124),
                m = s(445884),
                p = s(243540),
                _ = s(171685),
                h = s(304083);
            const f = e => t => {
                    const [s, r] = (0, n.useState)({}), {
                        refetch: f
                    } = (0, p.Z)(), {
                        mutateAsync: x
                    } = (() => {
                        const e = (0, n.useContext)(d._O);
                        return (0, o.useMutation)((t => ((e, t) => e.post("/patient_requests/patient_app/mark_as_seen", {
                            body: {
                                patient_request_entry_ids: [t]
                            }
                        }))(e, t)))
                    })(), {
                        decryptRecord: v
                    } = (0, n.useContext)(l.WA), [g] = (0, n.useState)({
                        sortDirection: "desc",
                        page: 1,
                        requestStatus: _.eJ.UNTREATED,
                        requestType: null
                    }), [w, y] = (0, n.useState)(!0), [Z, b] = (0, n.useState)([]), q = (0, c.ZP)(), j = (0, n.useRef)(new AbortController), S = {
                        "data.*.messages.*.body": {
                            cleartextFallback: !0
                        }
                    }, C = (0, n.useCallback)((e => {
                        x(e).then((() => {
                            f(), b(Z.map((t => t.id === e ? { ...t,
                                viewed_by_patient_at: i().utc().format()
                            } : t)))
                        }))
                    }), [Z, x, f]), N = (0, n.useCallback)((() => {
                        j.current.abort(), j.current = new AbortController, y(!0), u.ZP.get("/patient_requests/requests.json", {
                            query: {
                                sort_direction: g.sortDirection,
                                page: g.page,
                                status: g.requestStatus,
                                request_type: g.requestType
                            },
                            signal: j.current.signal
                        }).then((e => {
                            let {
                                bodyData: t
                            } = e;
                            return v.v2(S, t, "PatientRequestContext", {
                                subject_type: "PatientRequest",
                                subject_id: null
                            })
                        })).then((e => {
                            y(!1), b(e.data)
                        })).catch((e => {
                            var t;
                            y(!1), b([]), null !== e && void 0 !== e && null !== (t = e.request) && void 0 !== t && t.aborted || q({
                                message: m.Z.t("common.error"),
                                uiStyle: "warning"
                            })
                        }))
                    }), [g]);
                    (0, n.useEffect)((() => {
                        N()
                    }), [g]);
                    const R = (0, n.useMemo)((() => ({
                        currentRequest: s,
                        setCurrentRequest: r,
                        refreshRequests: N,
                        loading: w,
                        markRequestAsSeen: C,
                        patientRequests: Z
                    })), [s, N, w, C, Z]);
                    return (0, a.jsx)(h.PatientRequestContext.Provider, {
                        value: R,
                        children: (0, a.jsx)(e, { ...t
                        })
                    })
                },
                x = h.PatientRequestContext
        },
        378616: (e, t, s) => {
            s.d(t, {
                Z: () => l
            });
            var a = s(184481),
                n = s(982761);
            const l = () => {
                const [e, t] = (0, a.useState)(!1), [s, l] = (0, a.useState)([]), {
                    documents: r
                } = (0, n.Z)(), [i, o] = (0, a.useState)([]);
                (0, a.useEffect)((() => {
                    i && l(r.filter((e => i.includes(e.id))))
                }), [i, r]);
                return {
                    checkedDocumentIds: i,
                    documents: r,
                    showDocumentUploadModal: e,
                    setShowDocumentUploadModal: t,
                    onSuccess: async (e, s) => {
                        o(s.checkedDocumentIds), t(!1)
                    },
                    removeFile: e => {
                        o((t => t.filter((t => t !== e.id)))), l((t => t.filter((t => t.id !== e.id))))
                    },
                    uploadedDocuments: s
                }
            }
        },
        194718: (e, t, s) => {
            s.d(t, {
                J: () => o,
                NK: () => d,
                vp: () => c
            });
            var a = s(184481),
                n = s(176307),
                l = s(261397),
                r = s(97034),
                i = s(239417);
            const o = () => {
                    const {
                        encryptRecord: e,
                        getResourceId: t,
                        shareResourceWith: s
                    } = (0, a.useContext)(l.WA);
                    return (0, n.useMutation)((async a => {
                        let {
                            uploadedDocuments: n,
                            shareWith: l,
                            detailedExplanation: i,
                            selectedOption: o,
                            checkedDocumentIds: d
                        } = a;
                        const c = new FormData;
                        n.forEach(((e, t) => {
                            c.append(`documents[${t}][id]`, e.id)
                        }));
                        const {
                            tanker_encrypted_body: u
                        } = await e.v2({
                            body: {
                                shareWith: l
                            }
                        }, {
                            body: i
                        }, "usePatientRequestCreation", {
                            subject_type: "PatientRequest",
                            subject_id: null
                        });
                        if (c.append("patient_request_entry[kind]", o), c.append("message[tanker_encrypted_body]", u), d.length > 0) {
                            const e = await Promise.all(d.map((e => t({
                                documentId: e
                            }))));
                            await s(e, l)
                        }
                        return (0, r.v_)("/patient_requests/requests.json", c)
                    }))
                },
                d = () => {
                    const {
                        encryptRecord: e,
                        getResourceId: t,
                        shareResourceWith: s
                    } = (0, a.useContext)(l.WA);
                    return (0, n.useMutation)((async a => {
                        let {
                            requestId: n,
                            uploadedDocuments: l,
                            shareWith: i,
                            message: o,
                            checkedDocumentIds: d
                        } = a;
                        const c = new FormData;
                        l.forEach(((e, t) => {
                            c.append(`documents[${t}][id]`, e.id)
                        }));
                        const u = await e.v2({
                                body: {
                                    shareWith: i
                                }
                            }, {
                                body: o
                            }, "usePatientRequestUpdate", {
                                subject_type: "PatientRequest",
                                subject_id: null
                            }),
                            {
                                tanker_encrypted_body: m
                            } = u;
                        if (c.append("message[tanker_encrypted_body]", m), d.length > 0) {
                            const e = await Promise.all(d.map((e => t({
                                documentId: e
                            }))));
                            await s(e, i)
                        }
                        return (0, r.r$)(`/patient_requests/requests/${n}`, c)
                    }))
                },
                c = e => {
                    let {
                        query: t,
                        onSuccess: s
                    } = e;
                    const l = (0, a.useContext)(i._O);
                    return (0, n.useQuery)(["patient_requests", "requests", "new", {
                        query: t
                    }], (() => l.get("/patient_requests/requests/new.json", {
                        query: t
                    }).then((e => {
                        let {
                            bodyData: t
                        } = e;
                        return t
                    }))), {
                        enabled: !1,
                        onSuccess: s
                    })
                }
        }
    }
]);
//# sourceMappingURL=../48670-47b9188189ee59c04aae.js.map