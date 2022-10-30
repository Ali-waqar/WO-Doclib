"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [2884], {
        134360: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var o = n(294184),
                a = n.n(o),
                s = (n(969119), n(785893));
            const i = e => {
                let {
                    className: t,
                    uiStyle: n,
                    children: o,
                    ...i
                } = e;
                const r = a()("dl-list-separator", t, {
                    [`dl-list-separator-${n}`]: n
                });
                return (0, s.jsx)("li", {
                    className: r,
                    ...i,
                    "data-design-system": "base",
                    children: o
                })
            }
        },
        893157: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var o = n(184481),
                a = n(712722),
                s = n(552691),
                i = n(297516),
                r = n(511466),
                c = n(5212),
                l = n(785893);
            const d = (e, t) => {
                    let {
                        children: n,
                        loading: o,
                        navBar: d,
                        className: m,
                        ...p
                    } = e;
                    return (0, c.Zz)() ? o ? null : n : (0, l.jsxs)(a.Z, {
                        "data-design-system": "base",
                        children: [(0, l.jsx)(s.Z, { ...p,
                            children: d
                        }), o ? (0, l.jsx)(r.Z, {}) : (0, l.jsx)(i.Z, {
                            ref: t,
                            className: m,
                            children: n
                        })]
                    })
                },
                m = (0, o.forwardRef)(d)
        },
        72281: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var o = n(592290),
                a = n(545763),
                s = n(453040),
                i = n(445884),
                r = n(492171),
                c = n(785893);
            const l = e => {
                let {
                    show: t,
                    onHide: n,
                    withCloseIcon: l = !0,
                    body: d = i.Z.t("common.update_required_body")
                } = e;
                return (0, c.jsxs)(o.ZP, {
                    padding: !0,
                    show: t,
                    onHide: n,
                    title: i.Z.t("common.update_required_title"),
                    withCloseIcon: l,
                    children: [(0, c.jsx)(o.Ng, {
                        children: (0, c.jsx)(s.Z, {
                            children: d
                        })
                    }), (0, c.jsx)(o.ze, {
                        children: (0, c.jsx)(a.Z, {
                            block: !0,
                            className: "dl-margin-t-16",
                            uiStyle: "outlined",
                            target: "_blank",
                            onTap: () => {
                                window.open((0, r.g)())
                            },
                            children: i.Z.t("common.update_app")
                        })
                    })]
                })
            }
        },
        777226: (e, t, n) => {
            n.d(t, {
                Z: () => H
            });
            var o = n(184481),
                a = n(445884),
                s = n(5212),
                i = n(523563),
                r = n(592290),
                c = n(169339),
                l = n(383915),
                d = n(268708),
                m = n(527297),
                p = n(297516),
                u = n(686995),
                h = n(785893);
            const g = e => {
                let {
                    show: t,
                    doc: n,
                    onHide: o,
                    ...s
                } = e;
                return (0, h.jsx)(r.ZP, {
                    show: t,
                    size: "fullscreen",
                    title: a.Z.t("patient_common.root.documents.details_of_document"),
                    onHide: () => o(),
                    children: (0, h.jsx)(r.Ng, {
                        children: (0, h.jsx)(p.Z, {
                            children: (0, h.jsx)(u.Z, {
                                doc: n,
                                ...s
                            })
                        })
                    })
                })
            };
            var _ = n(24553),
                x = n(160160),
                y = n(990626),
                Z = n(437124),
                j = n(347964),
                w = n(522022),
                b = n(23838),
                k = n(800274),
                f = n(261397),
                v = n(580163),
                S = n(661763),
                D = n(833463),
                N = n(845126),
                C = n(511466),
                I = n(453040),
                P = n(778075),
                F = n(755506),
                T = n(952893),
                A = n(282786),
                R = n(541584),
                M = n(326841),
                E = n(269911),
                O = n(545763),
                L = n(451421);
            const z = e => {
                let {
                    appointment: t,
                    doc: n,
                    onDocumentAccessDestroy: o
                } = e;
                const {
                    mutateAsync: s
                } = (0, i.j)();
                return (0, h.jsx)(O.Z, {
                    uiStyle: "link-danger",
                    leftIcon: "link-slash",
                    className: "dl-document-drawer-action dl-margin-t-8",
                    onClick: e => {
                        e.preventDefault(), (async () => {
                            const {
                                bodyData: e
                            } = await Z.ZP.get(`/documents/${n.id}/accesses`), a = e.sharings.doctor_sharings.concat(e.sharings.prescription_inbox_sharings).filter((e => e.destroyable && (0, L.fH)(e.appointment_id, t.id))).map((e => s({
                                documentId: e.document_id,
                                accessId: e.old_access_id
                            })));
                            await Promise.all(a), o()
                        })()
                    },
                    children: a.Z.t("patient_common.root.documents.cancel_sharing")
                })
            };
            var V = n(335963);
            const B = e => {
                    let {
                        onDownload: t,
                        onHide: n,
                        show: o
                    } = e;
                    return (0, h.jsx)(P.Z, {
                        show: o,
                        title: a.Z.t("appointments.documents.warning_download.title"),
                        dismissText: a.Z.t("common.actions.download"),
                        acceptText: a.Z.t("common.actions.cancel"),
                        onDismiss: e => {
                            t(e), n()
                        },
                        onAccept: n,
                        children: a.Z.t("appointments.documents.warning_download.body")
                    })
                },
                Y = e => {
                    let {
                        doc: t,
                        show: n,
                        onHide: s,
                        onDownload: i,
                        onDestroy: c,
                        onDocumentAccessDestroy: l,
                        onClickRename: d,
                        onClickDetails: m,
                        displayVersionWarning: p,
                        hideViewerButton: u,
                        appointment: g,
                        sourceType: P,
                        hideDeleteActions: O
                    } = e;
                    const {
                        id: L,
                        title: Y,
                        kind: H,
                        url: G,
                        created_at: W,
                        is_created_by_self: U,
                        sharings: $,
                        creator_label: q
                    } = t, J = (0, _.useNavigate)(), Q = (0, k.ZP)(), {
                        decryptFile: X,
                        getResourceId: K,
                        startTanker: ee
                    } = (0, o.useContext)(f.WA), te = (0, v.ZP)(), ne = !t.is_clear && (U || $.some((e => e.is_created_by_self))), oe = (0, w._)({
                        kind: H
                    }), ae = "clear" !== H;
                    let se = a.Z.t("appointments.documents.prescription_sent_to_title.medicine_prescription");
                    "biological_prescription" === H ? se = a.Z.t("appointments.documents.prescription_sent_to_title.biological_prescription") : "medical_imaging_prescription" === H && (se = a.Z.t("appointments.documents.prescription_sent_to_title.medical_imaging_prescription"));
                    const ie = !t.is_clear && t.master_patient,
                        re = (0, o.useContext)(b.Z),
                        [ce, le] = (0, o.useState)(!1),
                        [de, me] = (0, o.useState)(!1),
                        {
                            trackClickView: pe,
                            trackViewDetails: ue,
                            trackDownload: he,
                            trackClickDownload: ge
                        } = (0, S.Z)({
                            doc: t
                        }),
                        {
                            trackUsePrescription: _e
                        } = (0, D.Z)({
                            doc: t
                        }),
                        xe = async e => {
                            ge(), e.preventDefault(), le(!0);
                            const n = await (0, j.ZP)({
                                httpClient: Z.ZP,
                                app: "patient",
                                decryptFile: X,
                                account: Q,
                                document: t,
                                url: G,
                                displayVersionWarning: p,
                                toast: te
                            });
                            return null !== n && void 0 !== n && n.errorMessage || he(), le(!1), i()
                        },
                        ye = (0, x.Z)(),
                        Ze = () => {
                            J((0, A.pL)(Q, null === g || void 0 === g ? void 0 : g.id, t.id), {
                                state: {
                                    doc: "clear" === H ? t : null,
                                    appointmentId: !Q && g.id,
                                    trackingContextOverride: re
                                }
                            })
                        },
                        je = (0, y.cr)("phr_pades_e_signature") && (0, y.LA)("pades_e_signature") && t.signed === R.Ju.PADES_SIGNED,
                        we = oe && "medicine_prescription" === H && !ne,
                        be = we ? {
                            trackingId: "patient_displayed_download_modal",
                            trackingDetails: {
                                document_id: t.id,
                                kind: t.kind,
                                source: P
                            }
                        } : {
                            href: G,
                            target: "_blank"
                        };
                    return (0, h.jsxs)(h.Fragment, {
                        children: [de && (0, h.jsx)(B, {
                            show: de,
                            onDownload: xe,
                            onHide: () => me(!1),
                            sourceType: P
                        }), (0, h.jsx)(r.ZP, {
                            show: n,
                            onHide: s,
                            children: (0, h.jsx)(r.Ng, {
                                children: (0, T.Z)([(0, h.jsxs)("div", {
                                    className: "dl-padding-b-16",
                                    children: [(0, h.jsxs)("div", {
                                        className: "flex dl-align-items-center",
                                        children: [(0, h.jsx)(E.Z, {
                                            kind: H
                                        }), (0, h.jsxs)("div", {
                                            className: "flex dl-flex-column dl-margin-l",
                                            children: [(0, h.jsxs)(I.Z, {
                                                uiStyle: "title-s-bold",
                                                children: [" ", Y, " "]
                                            }), (0, h.jsx)(M.Z, {
                                                is_created_by_self: U,
                                                creator_label: q,
                                                created_at: W,
                                                dateFormat: "D MMM YYYY",
                                                master_patient: ie
                                            })]
                                        })]
                                    }), t.tanker_encrypted && (0, h.jsxs)("div", {
                                        className: "flex dl-padding-t-8 dl-align-items-center",
                                        children: [(0, h.jsx)(N.Z, {
                                            color: "success-110",
                                            name: "solid/lock",
                                            size: "xsmall"
                                        }), (0, h.jsx)(I.Z, {
                                            block: !0,
                                            uiStyle: "body-s-regular",
                                            className: "dl-padding-x-8",
                                            children: a.Z.t("patient_common.root.documents.end_to_end.desc")
                                        })]
                                    }), je && (0, h.jsxs)("div", {
                                        className: "flex dl-padding-t-8 dl-align-items-center",
                                        children: [(0, h.jsx)(N.Z, {
                                            color: "success-110",
                                            name: "solid/shield-check",
                                            size: "xsmall"
                                        }), (0, h.jsx)(I.Z, {
                                            block: !0,
                                            uiStyle: "body-s-regular",
                                            className: "dl-padding-x-8",
                                            children: a.Z.t("patient_common.root.documents.signed.desc")
                                        })]
                                    })]
                                }, "header"), !u && (0, h.jsx)(r.h6, {
                                    actionText: a.Z.t("common.actions.consult"),
                                    icon: "eye",
                                    onClick: async () => {
                                        pe(), s(), setTimeout(Ze, 150)
                                    },
                                    target: "_blank"
                                }, "viewer"), oe && (0, h.jsxs)("div", {
                                    className: "dl-margin-y-8",
                                    onClick: ne ? () => null : async () => {
                                        if (t.tanker_encrypted) {
                                            const e = await ee(Q, {
                                                enforceFullRegistration: !1
                                            });
                                            if (!(0, f.aE)(e, Q)) return void te({
                                                message: a.Z.t("tanker.must_verify_identity.document"),
                                                uiStyle: "error"
                                            })
                                        }
                                        const e = {
                                            showTransition: {
                                                transition: "show-from-bottom"
                                            },
                                            source: re.source,
                                            prescriptionSharingFunnelId: ye,
                                            doc: t,
                                            appointmentId: null === g || void 0 === g ? void 0 : g.id,
                                            tankerResourceId: t.tanker_encrypted ? await K({
                                                documentId: t.id
                                            }) : null
                                        };
                                        J((0, A.kb)(t), {
                                            state: e
                                        }), _e({
                                            prescriptionSharingFunnelId: ye,
                                            type: P,
                                            appointmentId: null === g || void 0 === g ? void 0 : g.id
                                        }), s()
                                    },
                                    children: [(0, h.jsx)(r.h6, {
                                        disabled: ne,
                                        className: "dl-margin-b-0",
                                        icon: "paper-plane",
                                        actionText: (0, h.jsxs)(h.Fragment, {
                                            children: [se, !ne && "medicine_prescription" === H && (0, h.jsx)(V.Z, {
                                                className: "dl-margin-l-8",
                                                color: "success-020",
                                                label: a.Z.t("appointments.documents.cta_explanation")
                                            })]
                                        })
                                    }, `${L}-use-prescription`), ne && (0, h.jsx)("div", {
                                        className: "dl-padding-b-8 dl-margin-l-24",
                                        children: (0, h.jsx)(I.Z, {
                                            color: "neutral-090",
                                            children: a.Z.t("appointments.documents.cta_sharing_denied")
                                        })
                                    })]
                                }, "share"), ae && (0, h.jsx)(r.h6, {
                                    icon: "pencil",
                                    onClick: () => {
                                        s(), d()
                                    },
                                    actionText: a.Z.t("common.actions.rename")
                                }, `${L}-rename`), (0, h.jsx)(r.h6, {
                                    icon: "info-circle",
                                    onClick: () => {
                                        m(), ue()
                                    },
                                    actionText: a.Z.t("patient_common.root.documents.details")
                                }, `${L}-info`), (0, h.jsx)(r.h6, {
                                    icon: "file-arrow-down",
                                    onClick: e => {
                                        we ? me(!0) : xe(e)
                                    },
                                    disabled: ce,
                                    actionText: ce ? (0, h.jsx)("div", {
                                        children: (0, h.jsx)(C.Z, {
                                            className: "dl-margin-x"
                                        })
                                    }) : a.Z.t("common.actions.download"),
                                    ...be
                                }, `${L}-download`), "clear" !== H && (g ? ne && (0, h.jsx)(z, {
                                    appointment: g,
                                    doc: t,
                                    onDocumentAccessDestroy: l
                                }, "revoke") : !O && (0, h.jsx)(r.h6, {
                                    uiStyle: "link-danger",
                                    actionText: a.Z.t("common.actions.delete"),
                                    icon: "trash-can",
                                    onClick: () => {
                                        c(), s()
                                    }
                                }, `${L}-delete`))], (0, h.jsx)(F.Z, {}))
                            })
                        })]
                    })
                },
                H = e => {
                    var t;
                    let { ...n
                    } = e;
                    const [p, u] = (0, o.useState)(!1), [_, x] = (0, o.useState)(!1), [y, Z] = (0, o.useState)(!1), {
                        data: j,
                        refetch: w
                    } = (0, i.G)({
                        document: n.doc,
                        show: p
                    });
                    return (0, o.useEffect)((() => {
                        var e;
                        null !== (e = n.doc) && void 0 !== e && e.is_clear || !p || w()
                    }), [p, null === (t = n.doc) || void 0 === t ? void 0 : t.kind]), (0, s.Zz)() ? null : (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)(g, { ...n,
                            show: p,
                            doctorSharings: j.doctor_sharings,
                            prescriptionInboxSharings: j.prescription_inbox_sharings,
                            onClickRename: () => x(!0),
                            onClickAccess: () => Z(!0),
                            onHide: () => u(!1)
                        }), (0, h.jsx)(r.ZP, {
                            contentClassName: "dl-document-access-modal",
                            show: y,
                            title: a.Z.t("patient_common.root.documents.document_accesses"),
                            size: "fullheight",
                            onHide: () => Z(!1),
                            children: (0, h.jsx)(r.Ng, {
                                children: (0, h.jsx)(d.Z, {
                                    doctorSharings: j.doctor_sharings,
                                    prescriptionInboxSharings: j.prescription_inbox_sharings,
                                    onDeletion: () => {
                                        w(), n.onDocumentAccessDestroy()
                                    }
                                })
                            })
                        }), (0, h.jsx)(c.Z, {
                            contentClassName: "dl-document-rename-modal",
                            show: _,
                            title: a.Z.t("patient_common.root.documents.edit_document_name"),
                            size: "fullscreen",
                            onHide: () => x(!1),
                            children: (0, h.jsx)(l.Z, {
                                children: (0, h.jsx)(m.Z, {
                                    doc: n.doc,
                                    onRename: n.onRename,
                                    onClose: () => x(!1)
                                })
                            })
                        }), (0, h.jsx)(Y, { ...n,
                            onClickRename: () => x(!0),
                            onClickDetails: () => u(!0)
                        })]
                    })
                }
        },
        687769: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var o = n(445884),
                a = n(580163),
                s = n(778075),
                i = n(437554),
                r = n(661763),
                c = n(785893);
            const l = e => {
                let {
                    show: t,
                    onCancel: n,
                    onConfirm: l,
                    doc: d
                } = e;
                const m = (0, a.ZP)(),
                    {
                        mutateAsync: p,
                        isLoading: u
                    } = (0, i.ik)({
                        onSuccess: () => {
                            m({
                                message: o.Z.t("helpers.appointment.patient_documents.deleted"),
                                uiStyle: "success"
                            }), l()
                        },
                        onError: () => m({
                            message: o.Z.t("helpers.appointment.patient_documents.could_not_delete"),
                            uiStyle: "error"
                        })
                    }),
                    {
                        trackDestroy: h
                    } = (0, r.Z)({
                        doc: d
                    });
                return (0, c.jsxs)(s.Z, {
                    title: o.Z.t("helpers.appointment.patient_documents.confirm_destroy_title"),
                    dismissText: o.Z.t("common.actions.cancel"),
                    onDismiss: n,
                    acceptText: o.Z.t("common.actions.confirm"),
                    acceptDisabled: u,
                    onAccept: () => {
                        h(), p({
                            documentId: d.id
                        })
                    },
                    show: t,
                    children: [(0, c.jsx)("div", {
                        children: o.Z.t("helpers.appointment.patient_documents.confirm_destroy", {
                            documentName: d.title
                        })
                    }), d.is_created_by_self && (0, c.jsx)("div", {
                        children: o.Z.t("helpers.appointment.patient_documents.destroy_consequences")
                    })]
                })
            }
        },
        686995: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var o = n(977954),
                a = n.n(o),
                s = n(545578),
                i = n.n(s),
                r = n(445884),
                c = n(171493),
                l = n(915488),
                d = n(545763),
                m = n(755506),
                p = n(453040),
                u = n(952893),
                h = n(758162),
                g = n(785893);
            const _ = e => {
                    let {
                        title: t,
                        description: n
                    } = e;
                    return (0, g.jsxs)("div", {
                        className: "dl-text-left",
                        children: [(0, g.jsx)(p.Z, {
                            color: "neutral-090",
                            children: t
                        }), (0, g.jsx)("br", {}), (0, g.jsx)(p.Z, {
                            children: (0, g.jsx)("strong", {
                                children: n
                            })
                        })]
                    }, t)
                },
                x = e => {
                    let {
                        creator_avatar: t,
                        creator_initials: n,
                        title: o,
                        description: a,
                        creator_id: s
                    } = e;
                    const i = t || n;
                    return (0, g.jsxs)("div", {
                        className: "dl-text-left",
                        children: [(0, g.jsx)(p.Z, {
                            color: "neutral-090",
                            children: o
                        }), (0, g.jsxs)("div", {
                            className: "flex dl-padding-r-16",
                            children: [i && (t ? (0, g.jsx)(l.ZP, {
                                size: "xsmall",
                                cloudinaryId: t,
                                id: s
                            }) : (0, g.jsx)(l.ZP, {
                                size: "xsmall",
                                text: n,
                                id: s
                            })), (0, g.jsx)(p.Z, {
                                children: (0, g.jsx)("strong", {
                                    children: a
                                })
                            })]
                        })]
                    }, o)
                },
                y = e => {
                    let {
                        title: t,
                        description: n,
                        buttonLabel: o,
                        onClick: a
                    } = e;
                    return (0, g.jsxs)("div", {
                        className: "flex dl-justify-between dl-align-items-center",
                        children: [(0, g.jsxs)("div", {
                            className: "dl-padding-r-16 dl-text-left dl-text-white-space",
                            children: [(0, g.jsx)(p.Z, {
                                color: "neutral-090",
                                children: t
                            }), (0, g.jsx)("br", {}), (0, g.jsx)(p.Z, {
                                children: (0, g.jsx)("strong", {
                                    children: n
                                })
                            })]
                        }), (0, g.jsx)(d.Z, {
                            uiStyle: "link-primary",
                            onClick: a,
                            className: "dl-padding-0",
                            children: (0, g.jsx)("span", {
                                children: o
                            })
                        })]
                    })
                },
                Z = e => {
                    let {
                        doc: {
                            title: t,
                            kind: n,
                            creator_label: o,
                            created_at: s,
                            patient: l,
                            master_patient: d,
                            creator_avatar: p,
                            creator_id: Z,
                            creator_initials: j
                        },
                        doctorSharings: w = [],
                        prescriptionInboxSharings: b = [],
                        onClickRename: k,
                        onClickAccess: f
                    } = e;
                    const v = l || d;
                    return (0, g.jsx)(g.Fragment, {
                        children: (0, u.Z)(["clear" === n ? (0, g.jsx)(_, {
                            title: r.Z.t("patient_common.root.documents.name_of_document"),
                            description: t
                        }, "title") : (0, g.jsx)(y, {
                            title: r.Z.t("patient_common.root.documents.name_of_document"),
                            description: t,
                            buttonLabel: r.Z.t("common.actions.edit"),
                            onClick: k
                        }, "title"), (0, g.jsx)(_, {
                            title: r.Z.t("patient_common.root.documents.type_of_document"),
                            description: (0, c.fO)(n)
                        }, "type"), (0, g.jsx)(_, {
                            title: r.Z.t("common.patient"),
                            description: (0, g.jsx)(h.Z, {
                                uiStyle: "body-s-bold",
                                color: "neutral-150",
                                masterPatient: v
                            })
                        }, "patient"), (0, g.jsx)(x, {
                            title: r.Z.t("patient_common.root.documents.created_by"),
                            description: o,
                            creator_avatar: p,
                            creator_id: Z,
                            creator_initials: j
                        }, "created_by"), (0, g.jsx)(_, {
                            title: r.Z.t("patient_common.root.documents.created_at"),
                            description: a()(s).localize("Do MMMM YYYY")
                        }, "created_at"), w.length + b.length && (0, g.jsx)(y, {
                            title: r.Z.t("patient_common.root.documents.document_accesses"),
                            description: r.Z.t("patient_common.root.documents.number_of_people", {
                                count: i()(w, "patient_id").length + b.length
                            }),
                            buttonLabel: r.Z.t("patient_common.root.documents.see_detail"),
                            onClick: f
                        }, "accesses")], (0, g.jsx)(m.Z, {
                            uiStyle: "neutral-030",
                            className: "dl-margin-y-16"
                        }))
                    })
                }
        },
        247557: (e, t, n) => {
            n.d(t, {
                R: () => Ve,
                Z: () => Be
            });
            var o = n(184481),
                a = n(5212),
                s = n(23838),
                i = n(580163),
                r = n(329487),
                c = n(982761),
                l = n(440877),
                d = n(800274),
                m = n(347964),
                p = n(437124),
                u = n(261397),
                h = n(661763),
                g = n(977954),
                _ = n.n(g),
                x = n(548403),
                y = n.n(x),
                Z = n(445884),
                j = n(990626),
                w = n(516590),
                b = n(169339),
                k = n(383915),
                f = n(453040),
                v = n(545763),
                S = n(755506),
                D = n(522022);
            const N = n.p + "986bdd732ce54e1a19d6.png";
            var C = n(790398),
                I = n(523563),
                P = n(268708),
                F = n(686995),
                T = n(541584),
                A = n(527297),
                R = n(528846),
                M = n(784600),
                E = n(519450),
                O = n.n(E);
            const L = n.p + "355721314b30d680d18c.svg",
                z = n.p + "bc25e3dfab6c680deaaa.png",
                V = n.p + "2c325d925ced2bdcae98.png",
                B = n.p + "94d395a307f758648460.png";
            var Y = n(785893);
            const H = e => {
                    let {
                        image: t,
                        title: n,
                        description: o,
                        alt: a
                    } = e;
                    return (0, Y.jsxs)("div", {
                        className: "flex dl-flex-column dl-flex-grow dl-align-items-center",
                        children: [(0, Y.jsx)(R.Z, {
                            alt: a,
                            src: t,
                            width: "250"
                        }), (0, Y.jsxs)("div", {
                            className: "dl-margin-t-32 dl-margin-r-32",
                            children: [(0, Y.jsx)(f.Z, {
                                uiStyle: "title-s-bold",
                                children: n
                            }), (0, Y.jsx)(f.Z, {
                                children: o
                            })]
                        })]
                    })
                },
                G = e => {
                    let {
                        show: t,
                        onHide: n
                    } = e;
                    return (0, Y.jsx)(b.Z, {
                        show: t,
                        title: Z.Z.t("patient_common.root.documents.pharmacy_prescription_modal.title"),
                        onHide: n,
                        size: "large",
                        children: (0, Y.jsxs)(k.Z, {
                            children: [(0, Y.jsx)(M.Z, {
                                className: "dl-blue-lighter-bg text-center dl-padding-4",
                                children: (0, Y.jsxs)("div", {
                                    className: "flex dl-align-items-center dl-flex-center",
                                    children: [(0, Y.jsx)(O(), {
                                        className: "dl-blue-font dl-margin-r-4"
                                    }), (0, Y.jsx)(f.Z, {
                                        uiStyle: "body-s-bold",
                                        className: "dl-blue-font",
                                        children: Z.Z.t("patient_common.root.documents.pharmacy_prescription_modal.mobile_available")
                                    })]
                                })
                            }), (0, Y.jsxs)("div", {
                                className: "dl-flex-row dl-justify-between dl-margin-t-32",
                                children: [(0, Y.jsx)(H, {
                                    image: z,
                                    title: Z.Z.t("patient_common.root.documents.pharmacy_prescription_modal.step_one"),
                                    description: Z.Z.t("patient_common.root.documents.pharmacy_prescription_modal.step_one_description_html"),
                                    alt: "pharmacy-prescription-sharing-step-1"
                                }), (0, Y.jsx)(H, {
                                    image: V,
                                    title: Z.Z.t("patient_common.root.documents.pharmacy_prescription_modal.step_two"),
                                    description: Z.Z.t("patient_common.root.documents.pharmacy_prescription_modal.step_two_description_html"),
                                    alt: "pharmacy-prescription-sharing-step-2"
                                }), (0, Y.jsx)(H, {
                                    image: B,
                                    title: Z.Z.t("patient_common.root.documents.pharmacy_prescription_modal.step_three"),
                                    description: Z.Z.t("patient_common.root.documents.pharmacy_prescription_modal.step_three_description_html"),
                                    alt: "pharmacy-prescription-sharing-step-3"
                                })]
                            })]
                        })
                    })
                },
                W = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, Y.jsxs)(M.Z, {
                        className: "dl-neutral-010-bg dl-text-center dl-margin-b",
                        children: [(0, Y.jsx)(R.Z, {
                            alt: "pharmacy-prescription-sharing",
                            src: L,
                            width: "64"
                        }), (0, Y.jsx)(f.Z, {
                            uiStyle: "title-s-bold",
                            className: "dl-margin-b-4",
                            children: Z.Z.t("patient_common.root.documents.pharmacy_prescription_modal.title")
                        }), (0, Y.jsx)(f.Z, {
                            block: !0,
                            children: Z.Z.t("patient_common.root.documents.pharmacy_prescription_modal.description")
                        }), (0, Y.jsx)(v.Z, {
                            uiStyle: "link-primary",
                            onClick: t,
                            children: Z.Z.t("patient_common.root.documents.pharmacy_prescription_modal.learn_more")
                        })]
                    })
                };
            var U = n(619595),
                $ = n(893157),
                q = n(143545);
            const J = e => {
                let t, {
                    title: n,
                    show: o,
                    onHide: a,
                    doc: s,
                    decryptedFileUrl: i,
                    leftSideBar: r,
                    rightSideBar: c,
                    children: l,
                    actionBarOptions: d
                } = e;
                return t = d ? { ...d,
                    document: s,
                    url: i
                } : {
                    zoom: !0
                }, (0, Y.jsxs)(b.Z, {
                    contentClassName: "dl-padding-0",
                    show: o,
                    uiStyle: "normal",
                    size: "fullscreen",
                    children: [(0, Y.jsxs)("div", {
                        className: "dl-padding-t-16 dl-padding-b-16 dl-text-center dl-border-b dl-justify-center",
                        children: [(0, Y.jsxs)(f.Z, {
                            uiStyle: "title-s-bold",
                            children: [" ", n]
                        }), (0, Y.jsx)(U.ZP, {
                            className: "dl-modal-close-icon",
                            title: Z.Z.t("common.actions.close"),
                            onTap: a,
                            name: "xmark-large",
                            size: "medium"
                        })]
                    }), (0, Y.jsxs)("div", {
                        className: "flex dl-full-height",
                        children: [(0, Y.jsx)("div", {
                            className: "dl-document-viewer-sidebar dl-border-r",
                            children: r
                        }), (0, Y.jsx)("div", {
                            className: "dl-document-viewer",
                            onContextMenu: e => e.preventDefault(),
                            children: (0, Y.jsx)("div", {
                                className: "flex dl-justify-center dl-align-items-center snapshot-black",
                                children: (0, Y.jsx)("div", {
                                    className: "dl-full-width dl-document-viewer-item my-32 mx-96",
                                    onClick: e => e.stopPropagation(),
                                    children: (0, Y.jsx)($.Z, {
                                        children: (0, Y.jsx)(q.Z, {
                                            document: s,
                                            url: i,
                                            actionBarOptions: t,
                                            zoomable: !0,
                                            showPadesMessage: !1
                                        })
                                    })
                                })
                            })
                        }), (0, Y.jsx)("div", {
                            className: "dl-document-viewer-sidebar dl-border-l dl-padding-16",
                            children: c
                        })]
                    }), l]
                })
            };
            var Q = n(845126),
                X = n(468644),
                K = n(83057),
                ee = n(239702),
                te = n(642979);
            const ne = e => {
                    let {
                        icon: t,
                        category: n,
                        documentImage: a
                    } = e;
                    const [s, i] = (0, o.useState)(!1), [r, c] = (0, o.useState)(null), l = `patient_common.root.documents.${n}`;
                    return (0, Y.jsxs)("div", {
                        className: "flex dl-align-items-center dl-justify-start dl-margin-y-4",
                        children: [(0, Y.jsx)(Q.Z, {
                            color: "success-110",
                            name: t,
                            size: "xsmall"
                        }), (0, Y.jsxs)("div", {
                            className: "flex dl-align-items-center ",
                            children: [(0, Y.jsx)(f.Z, {
                                block: !0,
                                uiStyle: "body-s-regular",
                                className: "dl-padding-x-8",
                                children: Z.Z.t("desc", {
                                    scope: l
                                })
                            }), (0, Y.jsx)(X.Z, {
                                onClick: e => {
                                    i(!0), c(e.target)
                                },
                                className: "dl-full-height dl-flex-center",
                                children: (0, Y.jsx)(Q.Z, {
                                    color: "neutral-090",
                                    name: "regular/circle-question",
                                    size: "xsmall"
                                })
                            })]
                        }), (0, Y.jsx)(K.Z, {
                            show: s,
                            target: r,
                            placement: "left",
                            rootClose: !0,
                            onHide: () => i(!1),
                            children: (0, Y.jsx)(ee.Z, {
                                className: "dl-e-signature-info dl-margin-l dl-margin-t-32",
                                id: "e-signature-info",
                                children: (0, Y.jsxs)("div", {
                                    className: "flex",
                                    children: [(0, Y.jsx)("img", {
                                        src: a,
                                        className: "dl-signature-image dl-margin-r-8",
                                        alt: Z.Z.t("helpers.appointment.patient_documents.kinds.document")
                                    }), (0, Y.jsxs)("div", {
                                        className: "dl-flex-column",
                                        children: [(0, Y.jsx)(f.Z, {
                                            uiStyle: "body-s-bold",
                                            children: Z.Z.t("desc", {
                                                scope: l
                                            })
                                        }), (0, Y.jsxs)("div", {
                                            className: "dl-flex",
                                            children: [(0, Y.jsx)(f.Z, {
                                                children: Z.Z.t("detail", {
                                                    scope: l
                                                })
                                            }), (0, Y.jsx)(te.Z, {
                                                className: "dl-text-body dl-text-s dl-text-bold dl-margin-x-8",
                                                href: Z.Z.t("know_more_href", {
                                                    scope: l
                                                }),
                                                target: "_blank",
                                                children: Z.Z.t("common.actions.know_more")
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                oe = e => {
                    let {
                        children: t,
                        onBack: n
                    } = e;
                    return (0, Y.jsxs)("div", {
                        className: "dl-margin-b",
                        children: [(0, Y.jsx)(v.Z, {
                            uiStyle: "link-primary",
                            onClick: n,
                            leftIcon: "chevron-left",
                            children: Z.Z.t("common.actions.back")
                        }), t]
                    })
                },
                ae = e => {
                    let {
                        showSharingsView: t,
                        setShowSharingsView: n,
                        doctorSharings: o,
                        prescriptionInboxSharings: a,
                        fetchDocumentSharings: s,
                        onDocumentAccessDestroy: i,
                        doc: r,
                        setShowRenameModal: c
                    } = e;
                    return (0, Y.jsx)("div", {
                        className: "dl-padding-16",
                        children: t ? (0, Y.jsxs)(oe, {
                            onBack: () => n(!1),
                            children: [(0, Y.jsx)(f.Z, {
                                block: !0,
                                uiStyle: "title-l-bold",
                                className: "dl-margin-b",
                                children: Z.Z.t("patient_common.root.documents.document_accesses")
                            }), (0, Y.jsx)(P.Z, {
                                className: "dl-margin-t-16",
                                doctorSharings: o,
                                prescriptionInboxSharings: a,
                                onDeletion: () => {
                                    s(), i()
                                }
                            })]
                        }) : (0, Y.jsx)(F.Z, {
                            doc: r,
                            doctorSharings: o,
                            prescriptionInboxSharings: a,
                            onClickRename: () => c(!0),
                            onClickAccess: () => n(!0)
                        })
                    })
                },
                se = e => {
                    let {
                        doc: t,
                        setShowPharmacyPrescriptionModal: n,
                        onDestroy: o,
                        onDownload: s,
                        decryptedFileUrl: i
                    } = e;
                    const r = (0, j.cr)("phr_pades_e_signature") && (0, j.LA)("pades_e_signature") && t.signed === T.Ju.PADES_SIGNED,
                        c = (0, a.Zz)() && (0, D._)({
                            kind: t.kind
                        }) && !t.is_created_by_self;
                    return (0, Y.jsxs)(Y.Fragment, {
                        children: [c && (0, Y.jsx)(W, {
                            onClick: () => {
                                (0, w.ZP)({
                                    name: "patient_clicks_prescription_banner"
                                }), n(!0)
                            }
                        }), (0, Y.jsxs)("div", {
                            className: "dl-flex-column dl-flex-start",
                            children: [t.tanker_encrypted && (0, Y.jsx)(ne, {
                                icon: "solid/lock",
                                category: "end_to_end",
                                documentImage: C
                            }), r && (0, Y.jsx)(ne, {
                                icon: "solid/shield-check",
                                category: "signed",
                                documentImage: N
                            })]
                        }), (t.tanker_encrypted || r) && (0, Y.jsx)(S.Z, {
                            className: "dl-margin-b-16 dl-margin-t-8",
                            uiStyle: "neutral-030"
                        }), (0, Y.jsxs)("div", {
                            className: "dl-flex-column dl-flex-start",
                            children: [(0, Y.jsx)(v.Z, {
                                leftIcon: "file-arrow-down",
                                className: "dl-margin-b-4",
                                uiStyle: "small-primary",
                                onClick: s,
                                children: Z.Z.t("common.actions.download")
                            }), "vaccination_certificate_ibm" === t.kind && (0, Y.jsx)(v.Z, {
                                leftIcon: "print",
                                className: "dl-margin-b-4",
                                uiStyle: "small-primary",
                                onClick: () => window.open(i).print(),
                                children: Z.Z.t("common.actions.print_certificate")
                            }), !t.is_clear && !t.read_only && (0, Y.jsx)(v.Z, {
                                leftIcon: "trash-can",
                                uiStyle: "small-danger",
                                onClick: () => {
                                    o()
                                },
                                children: Z.Z.t("common.actions.delete")
                            }, "delete")]
                        }), !t.read_only && (0, Y.jsx)(S.Z, {
                            className: "dl-margin-b dl-margin-t-16",
                            uiStyle: "neutral-030"
                        })]
                    })
                },
                ie = e => {
                    let {
                        doc: t,
                        show: n,
                        onHide: a,
                        onDestroy: s,
                        onDocumentAccessDestroy: i,
                        onDownload: r,
                        decryptedFileUrl: c
                    } = e;
                    const [l, d] = (0, o.useState)(!1), [m, p] = (0, o.useState)(!1), [u, h] = (0, o.useState)(!1), {
                        data: g,
                        refetch: x
                    } = (0, I.G)({
                        document: t,
                        show: n
                    });
                    return (0, o.useEffect)((() => {
                        !t.is_clear && n && x()
                    }), [n, t.kind]), (0, Y.jsxs)(J, {
                        title: `${t.title} - ${y()(_()(t.created_at).localize("MMMM YYYY"))}`,
                        show: n,
                        onHide: a,
                        doc: t,
                        decryptedFileUrl: c,
                        leftSideBar: (0, Y.jsx)(ae, {
                            showSharingsView: u,
                            setShowSharingsView: h,
                            doctorSharings: g.doctor_sharings,
                            prescriptionInboxSharings: g.prescription_inbox_sharings,
                            fetchDocumentSharings: x,
                            onDocumentAccessDestroy: i,
                            doc: t,
                            setShowRenameModal: d
                        }),
                        rightSideBar: (0, Y.jsx)(se, {
                            doc: t,
                            setShowPharmacyPrescriptionModal: p,
                            onDestroy: s,
                            decryptedFileUrl: c,
                            onDownload: r
                        }),
                        children: [l && (0, Y.jsx)(b.Z, {
                            contentClassName: "dl-document-rename-modal",
                            show: l,
                            title: Z.Z.t("patient_common.root.documents.edit_document_name"),
                            onHide: () => d(!1),
                            children: (0, Y.jsx)(k.Z, {
                                children: (0, Y.jsx)(A.Z, {
                                    doc: t,
                                    isCancelable: !0,
                                    onClose: e => {
                                        null === e || void 0 === e || e.stopPropagation(), d(!1)
                                    }
                                })
                            })
                        }), m && (0, Y.jsx)(G, {
                            show: m,
                            onHide: () => p(!1)
                        })]
                    })
                };
            var re = n(991136);
            const ce = e => {
                let {
                    doc: t,
                    state: n,
                    setState: a,
                    children: s,
                    loadDecryptedDocument: r,
                    viewOnly: c,
                    checkboxState: l,
                    onCheckboxChange: g,
                    isTableView: _,
                    updateDocument: x,
                    onDocumentAccessDestroy: y,
                    ...Z
                } = e;
                const j = (0, d.ZP)(),
                    {
                        decryptFile: w
                    } = (0, o.useContext)(u.WA),
                    b = (0, i.ZP)(),
                    {
                        trackDownload: k,
                        trackClickDownload: f,
                        trackView: v,
                        trackClickView: S
                    } = (0, h.Z)({
                        doc: t
                    }),
                    [D, N] = (0, o.useState)(!1),
                    {
                        data: C
                    } = (0, re.Z)({
                        document: t,
                        enabled: D
                    }),
                    I = async e => {
                        if (S(), null === e || void 0 === e || e.stopPropagation(), t.tanker_encrypted) {
                            a({
                                loadingPreview: !0
                            });
                            const {
                                success: e
                            } = await r();
                            if (a({
                                    loadingPreview: !1
                                }), !e) return
                        } else x({ ...t,
                            viewed_at: !0
                        });
                        v(), N(!0)
                    },
                    P = async e => {
                        f(), e.stopPropagation(), a({
                            loadingDownload: !0
                        });
                        const n = await (0, m.ZP)({
                            httpClient: p.ZP,
                            app: "patient",
                            decryptFile: w,
                            account: j,
                            document: t,
                            url: t.url,
                            displayVersionWarning: e => a({
                                showVersionWarning: e
                            }),
                            toast: b
                        });
                        x({ ...t,
                            viewed_at: !0
                        }), null !== n && void 0 !== n && n.errorMessage || k(), a({
                            loadingDownload: !1
                        })
                    };
                return (0, Y.jsxs)(Y.Fragment, {
                    children: [(0, Y.jsx)(Ve, {
                        doc: t,
                        consultDocument: I,
                        downloadDocument: P,
                        state: n,
                        setState: a,
                        onTap: async e => {
                            l ? g(!l.checked) : c || await I(e)
                        },
                        viewOnly: c,
                        checkboxState: l,
                        onCheckboxChange: g,
                        isTableView: _,
                        account: j,
                        setShowDocumentViewer: N,
                        ...Z,
                        children: s
                    }), C && (0, Y.jsx)(ie, {
                        doc: t,
                        decryptedFileUrl: C.decryptedFileUrl,
                        show: D,
                        onHide: () => N(!1),
                        onDownload: P,
                        onDestroy: () => a({
                            showDestroyDialog: !0
                        }),
                        onDocumentAccessDestroy: y
                    })]
                })
            };
            var le = n(24553),
                de = n(282786),
                me = n(184757),
                pe = n(777226);
            const ue = e => {
                let {
                    doc: t,
                    appointment: n,
                    children: a,
                    state: i,
                    setState: r,
                    loadDecryptedDocument: c,
                    checkboxState: l,
                    onCheckboxChange: m,
                    updateDocument: p,
                    onDownload: u = (() => {}),
                    showPrescriptionSharingButton: g,
                    noContentPadding: _,
                    hideDeleteActions: x,
                    onDocumentAccessDestroy: y,
                    ...Z
                } = e;
                const j = (0, d.ZP)(),
                    w = (0, le.useNavigate)(),
                    b = (0, o.useContext)(s.Z),
                    {
                        trackClickView: k,
                        trackView: f
                    } = (0, h.Z)({
                        doc: t
                    }),
                    {
                        showActions: v
                    } = i;
                return (0, Y.jsxs)(Y.Fragment, {
                    children: [(0, Y.jsx)(Ve, {
                        doc: t,
                        appointment: n,
                        consultDocument: async () => {
                            k(), t.tanker_encrypted ? (r({
                                loadingPreview: !0,
                                showDocumentPreview: !0
                            }), await c(), r({
                                loadingPreview: !1
                            })) : (r({
                                showDocumentPreview: !0
                            }), p({ ...t,
                                viewed_at: !0
                            }), f())
                        },
                        state: i,
                        setState: r,
                        onTap: async () => {
                            if (k(), l) m(!l.checked);
                            else {
                                const e = !n;
                                let o;
                                if (t.is_clear && (o = t), e && t.tanker_encrypted) {
                                    r({
                                        loadingPreview: !0
                                    });
                                    const {
                                        success: e
                                    } = await c();
                                    if (r({
                                            loadingPreview: !1
                                        }), !e) return
                                }
                                t.tanker_encrypted && !e || p({ ...t,
                                    viewed_at: !0
                                }), w((0, de.pL)(j, null === n || void 0 === n ? void 0 : n.id, t.id), {
                                    state: {
                                        doc: o,
                                        appointmentId: !j && n.id,
                                        tankerTrackingSourceType: (0, me.eF)(),
                                        trackingContextOverride: b
                                    }
                                })
                            }
                        },
                        checkboxState: l,
                        onCheckboxChange: m,
                        showPrescriptionSharingButton: g,
                        noContentPadding: _,
                        hideDeleteActions: x,
                        ...Z,
                        children: a
                    }), (0, Y.jsx)(pe.Z, {
                        doc: t,
                        appointment: n,
                        show: v,
                        onHide: () => r({
                            showActions: !1
                        }),
                        onDownload: () => {
                            p({ ...t,
                                viewed_at: !0
                            }), r({
                                showActions: !1
                            }), u()
                        },
                        onDestroy: () => r({
                            showDestroyDialog: !0
                        }),
                        displayVersionWarning: e => r({
                            showVersionWarning: e
                        }),
                        hideDeleteActions: x,
                        sourceType: "document_options",
                        onDocumentAccessDestroy: y
                    })]
                })
            };
            var he = n(171493),
                ge = n(915488),
                _e = n(348187),
                xe = n(511466),
                ye = n(261969),
                Ze = n(687769),
                je = n(451421),
                we = n(912536),
                be = n(258721),
                ke = n(527926);
            const fe = e => t => {
                    t.stopPropagation(), e(t)
                },
                ve = e => {
                    let {
                        viewOnly: t,
                        loading: n,
                        onShow: o,
                        onShowMore: a
                    } = e;
                    return t ? (0, Y.jsx)(U.ZP, {
                        color: "neutral-150",
                        size: "medium",
                        title: Z.Z.t("common.actions.consult"),
                        loadable: {
                            loading: n
                        },
                        onTap: e => {
                            e.stopPropagation(), setTimeout((() => {
                                o()
                            }), 150)
                        },
                        name: "eye"
                    }, "viewer") : (0, Y.jsx)(U.ZP, {
                        size: "medium",
                        loadable: {
                            loading: n
                        },
                        title: Z.Z.t("common.actions.show_more_actions"),
                        onTap: fe(a),
                        name: "ellipsis"
                    })
                },
                Se = e => {
                    let {
                        consultDocumentDesktop: t,
                        desktopDownload: n,
                        renameDocument: a,
                        deleteDocument: s,
                        doc: i,
                        appointment: r,
                        isOnMyDocumentsPage: l,
                        hideDeleteActions: d
                    } = e;
                    const m = !i.is_clear && !i.read_only && l && !d,
                        u = i.is_created_by_self && !l && !d,
                        h = l,
                        {
                            fetchDocuments: g
                        } = (0, c.Z)(),
                        {
                            setLastNativeUpload: _
                        } = (0, o.useContext)(ke.Z),
                        {
                            mutateAsync: x
                        } = (0, I.j)();
                    return (0, Y.jsx)("div", {
                        className: "flex dl-document-popover-edit-action",
                        children: (0, Y.jsx)(be.Z, {
                            size: "small",
                            contentClassName: "dl-position-absolute",
                            position: "left",
                            triggerComponent: e => (e => (0, Y.jsx)(U.ZP, {
                                size: "medium",
                                name: "ellipsis",
                                title: Z.Z.t("common.actions.show_more_actions"),
                                onTap: fe(e)
                            }))(e),
                            children: (0, Y.jsxs)(we.Z, {
                                className: "w-max",
                                children: [(0, Y.jsx)(we.Z.Button, {
                                    leftIcon: "eye",
                                    uiStyle: "link-primary",
                                    onTap: fe(t),
                                    className: "dl-padding-x-16",
                                    children: Z.Z.t("common.actions.consult")
                                }), (0, Y.jsx)(we.Z.Button, {
                                    leftIcon: "file-arrow-down",
                                    uiStyle: "link-primary",
                                    onTap: fe(n),
                                    className: "dl-padding-x-16",
                                    children: Z.Z.t("common.actions.download")
                                }), h && (0, Y.jsx)(we.Z.Button, {
                                    leftIcon: "regular/pencil",
                                    uiStyle: "link-primary",
                                    onTap: fe(a),
                                    className: "dl-padding-x-16",
                                    children: Z.Z.t("common.actions.rename")
                                }), u && (0, Y.jsx)(we.Z.Button, {
                                    leftIcon: "link-slash",
                                    uiStyle: "link-danger",
                                    onTap: fe((async () => {
                                        const {
                                            bodyData: e
                                        } = await p.ZP.get(`/documents/${i.id}/accesses`), t = e.sharings.doctor_sharings.concat(e.sharings.prescription_inbox_sharings).filter((e => e.destroyable && (0, je.fH)(e.appointment_id, r.id))).map((e => x({
                                            documentId: e.document_id,
                                            accessId: e.old_access_id
                                        })));
                                        await Promise.all(t), g(), _(Date.now())
                                    })),
                                    className: "dl-padding-x-16",
                                    children: Z.Z.t("patient_common.root.documents.cancel_sharing")
                                }), m && (0, Y.jsx)(we.Z.Button, {
                                    leftIcon: "trash-can",
                                    uiStyle: "link-danger",
                                    onTap: fe(s),
                                    className: "dl-padding-x-16",
                                    children: Z.Z.t("common.actions.delete")
                                })]
                            })
                        })
                    })
                },
                De = e => {
                    let {
                        doc: t,
                        appointment: n,
                        viewOnly: o,
                        loading: s,
                        setState: i,
                        consultDocument: r,
                        downloadDocument: c,
                        tableView: l,
                        hideDeleteActions: d
                    } = e;
                    const {
                        trackOptions: m
                    } = (0, h.Z)({
                        doc: t
                    });
                    return (0, a.Zz)() && !o ? (0, Y.jsx)(Se, {
                        consultDocumentDesktop: r,
                        desktopDownload: c,
                        doc: t,
                        appointment: n,
                        renameDocument: e => {
                            e.stopPropagation(), i({
                                showRenameModal: !0
                            })
                        },
                        deleteDocument: e => {
                            e.stopPropagation(), i({
                                showDestroyDialog: !0
                            })
                        },
                        isOnMyDocumentsPage: l,
                        hideDeleteActions: d
                    }) : (0, Y.jsx)(ve, {
                        onShowMore: () => {
                            i({
                                showActions: !0
                            }), m()
                        },
                        viewOnly: o,
                        loading: s,
                        onShow: r
                    })
                };
            var Ne = n(269911),
                Ce = n(758162);
            const Ie = e => {
                    let {
                        doc: t,
                        kind: n,
                        titleDocument: o,
                        created_at: a,
                        creator_avatar: s,
                        creator_id: i,
                        creator_initials: r,
                        creator_label: c,
                        docViewed: l,
                        state: d,
                        setState: m,
                        consultDocument: p,
                        downloadDocument: u
                    } = e;
                    const {
                        loadingPreview: h
                    } = d, g = async () => {
                        await p()
                    };
                    return (0, Y.jsxs)(ye.SC, {
                        onClick: () => {},
                        children: [(0, Y.jsx)(ye.pj, {
                            className: "dl-align-items-center",
                            onClick: g,
                            children: (0, Y.jsxs)("div", {
                                className: "flex",
                                children: [(0, Y.jsx)(Ne.Z, {
                                    kind: n
                                }), (0, Y.jsx)(f.Z, {
                                    className: "dl-margin-l",
                                    color: "neutral-150",
                                    uiStyle: l ? "body-s-regular" : "body-s-bold",
                                    children: l ? o : (0, Y.jsxs)(Y.Fragment, {
                                        children: [(0, Y.jsx)(_e.Z, {
                                            className: "dl-margin-r-8"
                                        }), (0, Y.jsx)("strong", {
                                            children: o
                                        })]
                                    })
                                })]
                            })
                        }), (0, Y.jsx)(ye.pj, {
                            onClick: g,
                            children: (0, Y.jsx)(Ce.Z, {
                                uiStyle: l ? "body-s-regular" : "body-s-bold",
                                color: "neutral-150",
                                masterPatient: t.master_patient
                            })
                        }), (0, Y.jsx)(ye.pj, {
                            onClick: g,
                            children: (0, Y.jsx)(f.Z, {
                                color: "neutral-150",
                                children: l ? _()(a).localize("D MMM YYYY") : (0, Y.jsx)("strong", {
                                    children: _()(a).localize("D MMM YYYY")
                                })
                            })
                        }), (0, Y.jsx)(ye.pj, {
                            onClick: g,
                            children: (0, Y.jsxs)("div", {
                                className: "flex",
                                children: [(0, Y.jsx)(ge.ZP, {
                                    size: "small",
                                    cloudinaryId: s,
                                    id: i,
                                    text: r
                                }), (0, Y.jsx)(f.Z, {
                                    align: "left",
                                    color: "neutral-150",
                                    className: "dl-align-self-center",
                                    uiStyle: l ? "body-s-regular" : "body-s-bold",
                                    children: c
                                })]
                            })
                        }), (0, Y.jsx)(ye.pj, {
                            className: "dl-min-width-16-unit",
                            onClick: g,
                            children: h && (0, Y.jsx)(xe.Z, {
                                className: "m-auto"
                            })
                        }), (0, Y.jsx)(ye.pj, {
                            children: (0, Y.jsx)("div", {
                                className: "flex dl-justify-end",
                                children: (0, Y.jsx)(De, {
                                    doc: t,
                                    state: d,
                                    setState: m,
                                    consultDocument: p,
                                    downloadDocument: u,
                                    tableView: !0
                                })
                            })
                        })]
                    })
                },
                Pe = e => {
                    let {
                        doc: t,
                        onDestroyed: n,
                        state: o,
                        setState: a,
                        consultDocument: s,
                        downloadDocument: i,
                        setShowDocumentViewer: r,
                        docViewed: c
                    } = e;
                    const {
                        kind: l,
                        title: d,
                        created_at: m,
                        creator_label: p,
                        creator_id: u,
                        creator_avatar: h,
                        creator_initials: g
                    } = t, _ = d || (0, he.fO)(l);
                    return (0, Y.jsxs)(Y.Fragment, {
                        children: [(0, Y.jsx)(Ie, {
                            doc: t,
                            kind: l,
                            titleDocument: _,
                            created_at: m,
                            creator_avatar: h,
                            creator_id: u,
                            creator_initials: g,
                            creator_label: p,
                            docViewed: c,
                            state: o,
                            setState: a,
                            consultDocument: s,
                            downloadDocument: i,
                            tableView: !0
                        }), (0, Y.jsx)(Ze.Z, {
                            doc: t,
                            show: o.showDestroyDialog,
                            onCancel: e => {
                                null === e || void 0 === e || e.stopPropagation(), a({
                                    showDestroyDialog: !1
                                })
                            },
                            onConfirm: e => {
                                null === e || void 0 === e || e.stopPropagation(), n && n(), a({
                                    showDestroyDialog: !1
                                }), r(!1)
                            }
                        }), (0, Y.jsx)(b.Z, {
                            contentClassName: "dl-document-rename-modal",
                            show: o.showRenameModal,
                            title: Z.Z.t("patient_common.root.documents.edit_document_name"),
                            onHide: () => a({
                                showRenameModal: !1
                            }),
                            children: (0, Y.jsx)(k.Z, {
                                children: (0, Y.jsx)(A.Z, {
                                    doc: t,
                                    isCancelable: !0,
                                    onClose: e => {
                                        null === e || void 0 === e || e.stopPropagation(), a({
                                            showRenameModal: !1
                                        })
                                    }
                                })
                            })
                        })]
                    })
                };
            var Fe = n(294184),
                Te = n.n(Fe),
                Ae = n(201477),
                Re = n(406288),
                Me = n(72281),
                Ee = n(257629);
            const Oe = e => {
                    let {
                        hideGuideline: t,
                        doc: n,
                        viewed: o,
                        condensed: a,
                        children: s,
                        dateFormat: i,
                        ...r
                    } = e;
                    return (0, Y.jsxs)("div", {
                        className: "dl-flex-grow flex dl-overflow-hidden",
                        ...r,
                        children: [(0, Y.jsx)("div", {
                            className: "dl-margin-t-8",
                            children: (0, Y.jsx)(Ne.Z, {
                                kind: n.kind
                            })
                        }), (0, Y.jsxs)("div", {
                            className: "dl-padding-l-16 dl-overflow-hidden",
                            children: [(0, Y.jsx)(Ee.Z, {
                                viewed: o,
                                document: n,
                                dateFormat: i
                            }), !t && (0, he.vE)(n) && (0, Y.jsx)(f.Z, {
                                block: !0,
                                uiStyle: "body-s-bold",
                                color: "warning-090",
                                children: Z.Z.t("common.pract_document_guideline")
                            }), s]
                        })]
                    })
                },
                Le = e => {
                    let {
                        doc: t,
                        appointment: n,
                        onDestroyed: o,
                        border: s,
                        hideGuideline: i,
                        viewOnly: r,
                        checkboxState: c,
                        condensed: l,
                        children: d,
                        className: m,
                        dateFormat: p,
                        state: u,
                        setState: g,
                        consultDocument: _,
                        downloadDocument: x,
                        onCheckboxChange: y,
                        onTap: j,
                        docViewed: w,
                        showPrescriptionSharingButton: k,
                        noContentPadding: f,
                        hideDeleteActions: D,
                        showActionsButton: N = !0
                    } = e;
                    const {
                        trackView: C
                    } = (0, h.Z)({
                        doc: t
                    }), {
                        showVersionWarning: I,
                        showDestroyDialog: P,
                        showDocumentPreview: F,
                        loadingPreview: T
                    } = u, {
                        data: A,
                        isLoading: R
                    } = (0, re.Z)({
                        document: t,
                        enabled: F
                    }), E = !T && t.id ? j : void 0;
                    return (0, Y.jsxs)(Y.Fragment, {
                        children: [(0, Y.jsxs)(M.Z, {
                            border: s,
                            className: Te()("dl-document-item", "dl-padding-x-0", m),
                            onTap: E,
                            children: [(0, Y.jsxs)("div", {
                                className: Te()("flex dl-align-items-center", {
                                    "dl-padding-x-16": !f
                                }),
                                children: [!!c && (0, Y.jsx)(X.Z, {
                                    className: "flex",
                                    onTap: e => {
                                        e.stopPropagation(), y(!c.checked)
                                    },
                                    children: (0, Y.jsx)(Ae.Z, {
                                        className: "dl-margin-r",
                                        checked: c.checked,
                                        disabled: c.disabled
                                    })
                                }), (0, Y.jsx)(Oe, {
                                    hideGuideline: i,
                                    doc: t,
                                    viewed: w,
                                    condensed: l,
                                    dateFormat: p,
                                    children: d
                                }), N && (0, Y.jsx)(De, {
                                    doc: t,
                                    appointment: n,
                                    viewOnly: r,
                                    state: u,
                                    setState: g,
                                    consultDocument: _,
                                    downloadDocument: x,
                                    loading: T || F,
                                    hideDeleteActions: D
                                })]
                            }), k && "medicine_prescription" === t.kind && (0, Y.jsxs)(Y.Fragment, {
                                children: [(0, Y.jsx)(S.Z, {
                                    className: "dl-margin-y-16"
                                }), (0, Y.jsx)(Re.Z, {
                                    contentClassName: "flex dl-justify-center dl-padding-y-0",
                                    children: (0, Y.jsx)(v.Z, {
                                        uiStyle: "link-primary",
                                        leftIcon: "paper-plane",
                                        onTap: j,
                                        children: Z.Z.t("appointments.documents.prescription_sent_to_title.medicine_prescription")
                                    })
                                })]
                            })]
                        }), (0, Y.jsx)(Me.Z, {
                            show: I,
                            onHide: () => g({
                                showVersionWarning: !1
                            })
                        }), (0, Y.jsx)(Ze.Z, {
                            doc: t,
                            show: P,
                            onCancel: () => g({
                                showDestroyDialog: !1
                            }),
                            onConfirm: () => {
                                o && o(), g({
                                    showDestroyDialog: !1
                                })
                            }
                        }), (0, Y.jsx)(b.Z, {
                            show: F,
                            title: t.title,
                            size: "fullscreen",
                            onHide: () => g({
                                showDocumentPreview: !1
                            }),
                            children: (0, Y.jsx)(q.Z, {
                                document: t,
                                url: null === A || void 0 === A ? void 0 : A.decryptedFileUrl,
                                showPadesMessage: (0, a.Zz)(),
                                loading: T || R,
                                onLoadSuccess: () => C()
                            })
                        })]
                    })
                },
                ze = (e, t) => ({ ...e,
                    ...t
                }),
                Ve = e => {
                    let {
                        isTableView: t,
                        ...n
                    } = e;
                    return t ? (0, Y.jsx)(Pe, { ...n
                    }) : (0, Y.jsx)(Le, { ...n
                    })
                },
                Be = e => {
                    let {
                        doc: t,
                        appointment: n,
                        onDestroyed: d,
                        border: m,
                        hideGuideline: p,
                        viewOnly: u,
                        dateFormat: h = "D MMM YYYY",
                        checkboxState: g,
                        condensed: _,
                        children: x,
                        isTableView: y,
                        hideDeleteActions: Z,
                        className: j,
                        onDownload: w,
                        showPrescriptionSharingButton: b,
                        noContentPadding: k,
                        showActionsButton: f
                    } = e;
                    const [v, S] = (0, o.useReducer)(ze, {
                        showActions: !1,
                        showVersionWarning: !1,
                        showDestroyDialog: !1,
                        showRenameModal: !1,
                        showDocumentPreview: !1,
                        loadingPreview: !1,
                        loadingDownload: !1
                    }), {
                        updateDocument: D
                    } = (0, c.Z)(), N = (0, i.ZP)(), {
                        unreadDocumentIds: C
                    } = (0, o.useContext)(l.Z), I = (0, o.useContext)(s.Z), {
                        refetch: P,
                        isStale: F,
                        data: T
                    } = (0, re.Z)({
                        document: t,
                        trackingContext: I,
                        enabled: !1
                    }), A = t.is_clear || !C.includes(t.id), R = (0, a.Zz)() ? ce : ue;
                    return (0, Y.jsx)(R, {
                        doc: t,
                        appointment: n,
                        onDestroyed: () => {
                            D({ ...t,
                                deleted: !0
                            }), d()
                        },
                        onDocumentAccessDestroy: d,
                        border: m,
                        hideGuideline: p,
                        viewOnly: u,
                        dateFormat: h,
                        checkboxState: g,
                        condensed: _,
                        className: j,
                        state: v,
                        setState: S,
                        onCheckboxChange: e => {
                            g.disabled || (e ? g.checkDocument(t.id) : g.uncheckDocument(t.id))
                        },
                        loadDecryptedDocument: async function() {
                            let {
                                updateState: e = !0
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (!T || F) {
                                const {
                                    error: e
                                } = await P();
                                if (e) return 404 === e.status ? N({
                                    message: e.message,
                                    uiStyle: "warning",
                                    duration: r.wD
                                }) : N({
                                    message: e.message,
                                    uiStyle: "warning"
                                }), {
                                    success: !1
                                }
                            }
                            return e && D({ ...t,
                                viewed_at: !0
                            }), {
                                success: !0
                            }
                        },
                        isTableView: y,
                        hideDeleteActions: Z,
                        updateDocument: D,
                        docViewed: A,
                        onDownload: w,
                        showPrescriptionSharingButton: b,
                        noContentPadding: k,
                        showActionsButton: f,
                        children: x
                    })
                }
        },
        933440: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var o = n(294184),
                a = n.n(o),
                s = n(445884),
                i = n(990626),
                r = n(453040),
                c = n(528846),
                l = n(642979),
                d = n(845126),
                m = n(784600);
            const p = n.p + "1ad246a28a28460f5943.svg";
            var u = n(5212),
                h = n(785893);
            const g = () => (0, h.jsx)(m.Z, {
                className: a()("flex dl-align-items-center dl-neutral-010-bg dl-margin-b", {
                    "dl-margin-x-16": (0, u.rl)()
                }),
                children: (0, h.jsx)("div", {
                    className: a()("flex dl-align-items-center", {
                        "dl-flex-center": (0, u.rl)()
                    }),
                    children: (0, i.LA)("patient_sharing_prescriptions") ? (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)(c.Z, {
                            src: p,
                            width: "32",
                            alt: ""
                        }), (0, h.jsxs)(r.Z, {
                            className: "dl-margin-l",
                            children: [s.Z.t("patient_common.root.documents.marketing_document_message"), " ", (0, h.jsx)(l.Z, {
                                href: s.Z.t("patient_common.root.documents.marketing_document_message_href"),
                                target: "_blank",
                                flat: !0,
                                children: s.Z.t("common.actions.know_more")
                            })]
                        })]
                    }) : (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)(d.Z, {
                            color: "success-110",
                            name: "solid/lock",
                            size: "xsmall",
                            className: "dl-margin-r-8"
                        }), (0, h.jsxs)(r.Z, {
                            uiStyle: "body-s-regular",
                            children: [(0, u.rl)() ? s.Z.t("patient_common.root.documents.end_to_end.global_desc") : s.Z.t("patient_common.root.documents.subtitle"), (0, h.jsx)(l.Z, {
                                className: "dl-margin-l-8",
                                href: s.Z.t("patient_common.root.documents.end_to_end.know_more_href"),
                                target: "_blank",
                                flat: !0,
                                children: s.Z.t("common.actions.know_more")
                            })]
                        })]
                    })
                })
            })
        },
        527297: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var o = n(184481),
                a = n(545763),
                s = n(258637),
                i = n(453040),
                r = n(445884),
                c = n(982761),
                l = n(661763),
                d = n(437124),
                m = n(785893);
            const p = e => {
                let {
                    doc: t,
                    onClose: n,
                    onRename: p,
                    isCancelable: u = !1
                } = e;
                const [h, g] = (0, o.useState)(t.title), [_, x] = (0, o.useState)(!1), {
                    updateDocument: y
                } = (0, c.Z)(), {
                    trackRename: Z
                } = (0, l.Z)({
                    doc: t
                }), j = (0, o.useRef)();
                return (0, o.useEffect)((() => {
                    j.current && setTimeout((() => {
                        var e;
                        return null === (e = j.current) || void 0 === e ? void 0 : e.focus()
                    }), 500)
                }), [j.current]), (0, m.jsxs)("form", {
                    onSubmit: async e => {
                        e.preventDefault(), x(!0), await d.ZP.put(`/account/documents/${t.id}`, {
                            body: {
                                title: h
                            }
                        }), x(!1), y({ ...t,
                            title: h
                        }), null === p || void 0 === p || p(t, h), Z(), n()
                    },
                    children: [(0, m.jsxs)("div", {
                        className: "dl-text-left",
                        children: [(0, m.jsx)(i.Z, {
                            component: "label",
                            htmlFor: "document_name",
                            uiStyle: "body-s-bold",
                            children: r.Z.t("patient_common.root.documents.name_of_document")
                        }), (0, m.jsx)(s.Z, {
                            maxLength: "255",
                            id: "document_name",
                            className: "dl-margin-b dl-margin-t-8",
                            value: h,
                            onChange: e => {
                                let {
                                    target: {
                                        value: t
                                    }
                                } = e;
                                g(t)
                            },
                            inputRef: j
                        })]
                    }), (0, m.jsxs)("div", {
                        className: "flex dl-justify-end",
                        children: [u && (0, m.jsx)(a.Z, {
                            uiStyle: "white",
                            className: "dl-margin-r",
                            onTap: n,
                            children: r.Z.t("common.actions.cancel")
                        }), (0, m.jsx)(a.Z, {
                            type: "submit",
                            disabled: !h.length || _,
                            block: !u,
                            children: r.Z.t("common.actions.validate")
                        })]
                    })]
                })
            }
        },
        268708: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var o = n(184481),
                a = n(445884),
                s = n(977954),
                i = n.n(s),
                r = n(453040),
                c = n(915488),
                l = n(784600),
                d = n(778075),
                m = n(169339),
                p = n(383915),
                u = n(968461),
                h = n(545763),
                g = n(883764),
                _ = n(755506),
                x = n(619595),
                y = n(952893),
                Z = n(607739),
                j = n.n(Z),
                w = n(523563),
                b = n(785893);
            const k = e => {
                    let {
                        accesses: t,
                        onDeletion: n
                    } = e;
                    const [s, i] = (0, o.useState)(!1), {
                        mutateAsync: c
                    } = (0, w.j)();
                    return (0, b.jsxs)(b.Fragment, {
                        children: [(0, b.jsx)(x.ZP, {
                            title: a.Z.t("patient_common.root.documents.accesses.remove_access"),
                            onClick: () => i(!0),
                            name: "trash-can",
                            color: "error-090"
                        }), (0, b.jsx)(d.Z, {
                            title: a.Z.t("patient_common.root.documents.accesses.remove_access"),
                            acceptText: a.Z.t("common.actions.delete"),
                            dismissText: a.Z.t("common.actions.cancel"),
                            onAccept: () => (async () => {
                                const e = t.filter((e => e.destroyable)).map((e => c({
                                    documentId: e.document_id,
                                    accessId: e.old_access_id
                                })));
                                await Promise.all(e), n(), i(!1)
                            })(),
                            onDismiss: () => i(!1),
                            show: s,
                            children: (0, b.jsx)(r.Z, {
                                children: a.Z.t("patient_common.root.documents.accesses.doctor_will_lose_access", {
                                    name: t[0].shared_with_name
                                })
                            })
                        })]
                    })
                },
                f = e => {
                    let {
                        doctorName: t
                    } = e;
                    const [n, s] = (0, o.useState)(!1);
                    return (0, b.jsxs)(b.Fragment, {
                        children: [(0, b.jsx)(x.ZP, {
                            title: a.Z.t("patient_common.root.documents.accesses.remove_access"),
                            onClick: () => s(!0),
                            name: "trash-can",
                            color: "neutral-090"
                        }), (0, b.jsxs)(m.Z, {
                            onHide: () => s(!1),
                            title: a.Z.t("patient_common.root.telehealth.delete_failed_title"),
                            show: n,
                            children: [(0, b.jsx)(p.Z, {
                                children: (0, b.jsx)(r.Z, {
                                    children: a.Z.t("patient_common.root.documents.accesses.cannot_delete", {
                                        name: t
                                    })
                                })
                            }), (0, b.jsx)(u.Z, {
                                children: (0, b.jsx)(h.Z, {
                                    onClick: () => s(!1),
                                    children: a.Z.t("common.got_it")
                                })
                            })]
                        })]
                    })
                },
                v = e => {
                    let {
                        kind: t,
                        sharings: n,
                        onDeletion: o
                    } = e;
                    const [s] = n;
                    return (0, b.jsx)(l.Z, {
                        className: "dl-margin-y-16 dl-padding-0 dl-access-item",
                        children: (0, b.jsxs)("div", {
                            className: "flex",
                            children: [(0, b.jsxs)("div", {
                                className: "dl-align-items-center flex dl-margin-r-8",
                                children: [(0, b.jsx)(c.ZP, {
                                    src: (0, g.Z)(s.shared_with_avatar, "w_40,h_40,c_fill,g_face"),
                                    id: s.id,
                                    size: "small"
                                }), " "]
                            }), (0, b.jsxs)("div", {
                                className: "dl-flex-grow",
                                children: [(0, b.jsx)(r.Z, {
                                    align: "left",
                                    uiStyle: "body-s-regular",
                                    color: "neutral-090",
                                    children: a.Z.t("patient_common.root.documents.accesses.date_since", {
                                        date: i()(s.created_at).localize("Do MMMM YYYY")
                                    })
                                }), (0, b.jsx)(r.Z, {
                                    align: "left",
                                    uiStyle: "body-s-bold",
                                    children: s.shared_with_name
                                }), (0, b.jsx)(r.Z, {
                                    align: "left",
                                    uiStyle: "body-s-regular",
                                    children: s.shared_with_speciality
                                })]
                            }), "doctor" === t ? (0, b.jsx)("div", {
                                className: "dl-align-items-center flex",
                                children: n.some((e => e.destroyable)) ? (0, b.jsx)(k, {
                                    accesses: n,
                                    onDeletion: o
                                }) : (0, b.jsx)(f, {
                                    doctorName: s.shared_with_name
                                })
                            }) : null]
                        })
                    })
                },
                S = e => {
                    let {
                        doctorSharings: t,
                        prescriptionInboxSharings: n,
                        onDeletion: o
                    } = e;
                    const s = Object.entries(j()(t, "patient_id"));
                    return (0, b.jsxs)("div", {
                        children: [(0, b.jsx)(r.Z, {
                            color: "neutral-090",
                            uiStyle: "body-s-regular",
                            children: a.Z.t("patient_common.root.documents.accesses.warning_delete")
                        }), (0, b.jsx)(_.Z, {
                            margin: !0
                        }), t.length > 0 && (0, y.Z)(s.map((e => {
                            let [t, n] = e;
                            return (0, b.jsx)(v, {
                                kind: "doctor",
                                sharings: n,
                                onDeletion: () => o(n)
                            }, t)
                        })), (0, b.jsx)(_.Z, {})), t.length > 0 && n.length > 0 && (0, b.jsx)(_.Z, {
                            margin: !0
                        }), n.length > 0 && (0, y.Z)(n.map((e => (0, b.jsx)(v, {
                            kind: "pharma",
                            sharings: [e]
                        }, e.id))), (0, b.jsx)(_.Z, {}))]
                    })
                }
        },
        982761: (e, t, n) => {
            n.d(t, {
                L: () => m,
                Z: () => p
            });
            var o = n(184481),
                a = n(800274),
                s = n(437554),
                i = n(362141),
                r = n(440877),
                c = n(527926),
                l = n(785893);
            const d = (0, o.createContext)(),
                m = e => {
                    let {
                        children: t,
                        masterPatientId: n,
                        appointmentId: m,
                        fetchDocumentOnMount: p = !0
                    } = e;
                    const {
                        updateUnreadDocument: u
                    } = (0, o.useContext)(r.Z), h = (0, a.ZP)(), {
                        lastNativeUpload: g
                    } = (0, o.useContext)(c.Z), [_, x] = (0, o.useState)([]), {
                        fetchDocuments: y,
                        lastPage: Z,
                        loading: j,
                        isFetching: w,
                        fetchNextPage: b
                    } = (e => {
                        let {
                            appointmentId: t,
                            masterPatientId: n
                        } = e;
                        const {
                            refetch: o,
                            isLoading: a,
                            isFetching: r
                        } = (0, i.q)({
                            appointmentId: t
                        }), {
                            fetchNextPage: c,
                            refetch: l,
                            hasNextPage: d,
                            isLoading: m,
                            isFetching: p
                        } = (0, s.q6)({
                            masterPatientId: n
                        });
                        return {
                            fetchDocuments: () => t ? o({
                                appointmentId: t
                            }).then((e => {
                                let {
                                    data: t
                                } = e;
                                return (null === t || void 0 === t ? void 0 : t.documents) || []
                            })) : l().then((e => {
                                let {
                                    data: t
                                } = e;
                                return (null === t || void 0 === t ? void 0 : t.pages.flatMap((e => {
                                    let {
                                        documents: t
                                    } = e;
                                    return t
                                }))) || []
                            })),
                            lastPage: t || !d,
                            loading: t ? a : m,
                            isFetching: t ? r : p,
                            fetchNextPage: t ? () => {} : c
                        }
                    })({
                        masterPatientId: h ? n : null,
                        appointmentId: m
                    }), k = e => {
                        let {
                            documents: t
                        } = e;
                        x((e => t.map((t => ({ ...e.find((e => e.id === t.id)) || {},
                            ...t
                        })))))
                    }, f = () => {
                        y().then((e => k({
                            documents: e
                        })))
                    };
                    return (0, o.useEffect)((() => {
                        (h || m) && p && f()
                    }), []), (0, o.useEffect)((() => {
                        (h || m) && g && f()
                    }), [g]), (0, l.jsx)(d.Provider, {
                        value: {
                            documents: _,
                            fetchDocuments: f,
                            lastPage: Z,
                            showMore: async () => {
                                b().then((e => {
                                    let {
                                        data: t
                                    } = e;
                                    const n = (null === t || void 0 === t ? void 0 : t.pages.flatMap((e => {
                                        let {
                                            documents: t
                                        } = e;
                                        return t
                                    }))) || [];
                                    k({
                                        documents: n
                                    })
                                }))
                            },
                            updateDocument: e => {
                                x((t => t.map((t => ({ ...t,
                                    ...t.id === e.id ? e : {}
                                }))))), u(e)
                            },
                            loading: j,
                            isFetching: w
                        },
                        children: t
                    })
                },
                p = () => (0, o.useContext)(d)
        },
        661763: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var o = n(184481),
                a = n(516590),
                s = n(23838),
                i = n(5212);
            const r = e => {
                let {
                    doc: t
                } = e;
                const n = (e => {
                    let {
                        doc: t
                    } = e;
                    const n = (0, o.useContext)(s.Z);
                    return e => {
                        let {
                            name: o,
                            ...s
                        } = e;
                        t && (0, a.ZP)({
                            name: o,
                            details: { ...n,
                                ...s,
                                document_id: t.id.toString(),
                                kind: t.kind,
                                master_patient_id: t.is_clear ? void 0 : t.master_patient.id
                            }
                        }, {
                            schema: "patient"
                        })
                    }
                })({
                    doc: t
                });
                return {
                    trackClickDownload: () => {
                        (0, i._y)() || n({
                            name: "patient_clicks_download_document"
                        })
                    },
                    trackClickView: () => {
                        (0, i._y)() || n({
                            name: "patient_clicks_view_document"
                        })
                    },
                    trackDestroy: () => {
                        (0, i._y)() || n({
                            name: "patient_delete_document"
                        })
                    },
                    trackDownload: () => {
                        (0, i._y)() || n({
                            name: "patient_download_document"
                        })
                    },
                    trackOptions: () => {
                        (0, i._y)() || n({
                            name: "patient_open_document_options"
                        })
                    },
                    trackRename: () => {
                        (0, i._y)() || n({
                            name: "patient_rename_document"
                        })
                    },
                    trackScreenshot: () => {
                        (0, i._y)() || n({
                            name: "patient_document_screenshot"
                        })
                    },
                    trackView: () => {
                        (0, i._y)() || n({
                            name: "patient_view_document"
                        })
                    },
                    trackViewDetails: () => {
                        (0, i._y)() || n({
                            name: "patient_view_document_details"
                        })
                    }
                }
            }
        },
        523563: (e, t, n) => {
            n.d(t, {
                G: () => i,
                j: () => r
            });
            var o = n(239417),
                a = n(184481),
                s = n(174976);
            const i = e => {
                    let {
                        document: t,
                        show: n
                    } = e;
                    const i = (0, a.useContext)(o._O);
                    return (0, s.useQuery)(["documents", null === t || void 0 === t ? void 0 : t.id, "accesses"], (() => i.get(`/documents/${t.id}/accesses`).then((e => e.bodyData.sharings))), {
                        enabled: n && Boolean(null === t || void 0 === t ? void 0 : t.id) && !(null !== t && void 0 !== t && t.is_clear),
                        placeholderData: []
                    })
                },
                r = () => {
                    const e = (0, a.useContext)(o._O);
                    return (0, s.useMutation)((t => {
                        let {
                            documentId: n,
                            accessId: o
                        } = t;
                        return e.delete(`/documents/${n}/accesses/${o}`)
                    }))
                }
        },
        833463: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var o = n(184481),
                a = n(516590),
                s = n(23838),
                i = n(288802),
                r = n(990626),
                c = n(253565),
                l = n(800274),
                d = n(5212);
            const m = e => {
                let {
                    doc: t
                } = e;
                const n = (e => {
                        let {
                            doc: t
                        } = e;
                        const n = (0, o.useContext)(s.Z);
                        return e => {
                            let {
                                name: o,
                                ...s
                            } = e;
                            t && (0, a.ZP)({
                                name: o,
                                details: { ...n,
                                    ...s,
                                    document_id: t.id,
                                    kind: t.kind,
                                    master_patient_id: t.master_patient.id
                                }
                            }, {
                                schema: "patient"
                            })
                        }
                    })({
                        doc: t
                    }),
                    m = (0, l.ZP)(),
                    p = e => {
                        let {
                            source: t,
                            prescriptionSharingFunnelId: n
                        } = e;
                        return { ...t ? {
                                source: t
                            } : {},
                            prescription_sharing_funnel_id: n
                        }
                    };
                return {
                    trackClickPharmacyRegistered: e => {
                        let {
                            source: t,
                            prescriptionSharingFunnelId: o,
                            appointmentId: a
                        } = e;
                        n({ ...p({
                                source: t,
                                prescriptionSharingFunnelId: o,
                                appointmentId: a
                            }),
                            name: "patient_click_pharmacy_registered"
                        })
                    },
                    trackHasPharmacyRegistered: e => {
                        let {
                            value: t,
                            source: o,
                            prescriptionSharingFunnelId: a,
                            appointmentId: s
                        } = e;
                        (0, d._y)() || n({ ...p({
                                source: o,
                                prescriptionSharingFunnelId: a,
                                appointmentId: s
                            }),
                            name: "patient_has_pharmacy_registered",
                            value: t
                        })
                    },
                    trackInputPharmacyAddress: e => {
                        let {
                            source: t,
                            prescriptionSharingFunnelId: o,
                            appointmentId: a
                        } = e;
                        n({ ...p({
                                source: t,
                                prescriptionSharingFunnelId: o,
                                appointmentId: a
                            }),
                            name: "patient_inputs_pharmacy_address"
                        })
                    },
                    trackInputPharmacyAddressWithPharmacyWords: e => {
                        let {
                            search: t,
                            source: o,
                            prescriptionSharingFunnelId: a,
                            appointmentId: s
                        } = e;
                        t && c.Z.config.pharmacyWords.search().some((e => t.toLowerCase().includes(e))) && n({ ...p({
                                source: o,
                                prescriptionSharingFunnelId: a,
                                appointmentId: s
                            }),
                            item_name: t,
                            name: "patient_inputs_pharmacy_address_with_pharmacy_words"
                        })
                    },
                    trackPaginatesPharmacySearchResults: e => {
                        let {
                            source: t,
                            prescriptionSharingFunnelId: o,
                            appointmentId: a,
                            searchPlace: s,
                            searchResultsTotal: i,
                            searchType: r,
                            searchPageNumber: c
                        } = e;
                        n({ ...p({
                                source: t,
                                prescriptionSharingFunnelId: o,
                                appointmentId: a
                            }),
                            name: "patient_paginates_pharmacy_search_results",
                            search_place: s,
                            search_results_total: i,
                            search_type: r,
                            search_page_number: c
                        })
                    },
                    trackPharmacyGeolocationSettings: e => {
                        let {
                            source: t,
                            prescriptionSharingFunnelId: o,
                            appointmentId: a
                        } = e;
                        n({ ...p({
                                source: t,
                                prescriptionSharingFunnelId: o,
                                appointmentId: a
                            }),
                            name: "patient_pharmacy_geolocation_settings"
                        })
                    },
                    trackPharmacyGeolocationSettingsRedirect: e => {
                        let {
                            source: t,
                            prescriptionSharingFunnelId: o,
                            appointmentId: a
                        } = e;
                        n({ ...p({
                                source: t,
                                prescriptionSharingFunnelId: o,
                                appointmentId: a
                            }),
                            name: "patient_pharmacy_click_geolocation_parameters"
                        })
                    },
                    trackPharmacySearchResultsDisplayed: e => {
                        let {
                            source: t,
                            prescriptionSharingFunnelId: o,
                            appointmentId: a,
                            searchPlace: s,
                            searchResultsTotal: i,
                            searchType: r
                        } = e;
                        n({ ...p({
                                source: t,
                                prescriptionSharingFunnelId: o,
                                appointmentId: a
                            }),
                            name: "patient_pharmacy_search_results_displayed",
                            search_place: s,
                            search_results_total: i,
                            search_type: r
                        })
                    },
                    trackSelectGeolocationPharmacySearch: e => {
                        let {
                            geolocationEnabled: t,
                            source: o,
                            prescriptionSharingFunnelId: a,
                            appointmentId: s
                        } = e;
                        n({ ...p({
                                source: o,
                                prescriptionSharingFunnelId: a,
                                appointmentId: s
                            }),
                            name: "patient_selects_geoloc_pharmacy_search",
                            geolocation_activated: t
                        })
                    },
                    trackSelectPharmacy: e => {
                        let {
                            source: t,
                            prescriptionSharingFunnelId: o,
                            appointmentId: a,
                            type: s,
                            profilePracticeDetailId: i,
                            directoryDoctorId: r
                        } = e;
                        n({ ...p({
                                source: t,
                                prescriptionSharingFunnelId: o,
                                appointmentId: a
                            }),
                            name: "patient_selects_pharmacy",
                            type: s,
                            profile_practice_detail_id: i,
                            directory_doctor_id: r
                        })
                    },
                    trackSelectPharmacyAddress: e => {
                        let {
                            placeId: t,
                            source: o,
                            prescriptionSharingFunnelId: a,
                            appointmentId: s
                        } = e;
                        n({ ...p({
                                source: o,
                                prescriptionSharingFunnelId: a,
                                appointmentId: s
                            }),
                            name: "patient_choses_pharmacy_address",
                            place_id: t
                        })
                    },
                    trackSendPrescription: e => {
                        let {
                            suggested: t,
                            email: o,
                            source: a,
                            prescriptionSharingFunnelId: s,
                            appointmentId: l,
                            type: u,
                            prescriptionSharingId: h
                        } = e;
                        (0, d._y)() || (n({ ...p({
                                source: a,
                                prescriptionSharingFunnelId: s,
                                appointmentId: l
                            }),
                            name: "patient_sent_document_prescription",
                            suggested: t,
                            is_patient_email: !!o && m.email === o.trim().toLowerCase(),
                            is_pharmacy_email: !!o && c.Z.config.pharmacyWords.email().some((e => o.toLowerCase().includes(e))),
                            prescription_sharing_id: h,
                            type: u
                        }), i.Z.trackGtmEvent({
                            category: i.Z.getCurrentPageType(),
                            action: r.ZP.GTM_EVENTS.SENT_PRESCRIPTION
                        }))
                    },
                    trackUsePrescription: e => {
                        let {
                            type: t,
                            prescriptionSharingFunnelId: o
                        } = e;
                        (0, d._y)() || (n({ ...p({
                                prescriptionSharingFunnelId: o
                            }),
                            name: "patient_use_document_prescription",
                            type: t
                        }), i.Z.trackGtmEvent({
                            category: i.Z.getCurrentPageType(),
                            action: r.ZP.GTM_EVENTS.USE_DOCUMENT_AS_PRESCRIPTION
                        }))
                    },
                    trackPatientMapDisplayed: e => {
                        let {
                            source: t,
                            prescriptionSharingFunnelId: o,
                            appointmentId: a,
                            optedIn: s,
                            type: i
                        } = e;
                        n({ ...p({
                                source: t,
                                prescriptionSharingFunnelId: o,
                                appointmentId: a
                            }),
                            name: "patient_map_displayed",
                            opted_in: s,
                            type: i
                        })
                    },
                    trackPatientSearchMapPin: e => {
                        let {
                            source: t,
                            prescriptionSharingFunnelId: o,
                            appointmentId: a,
                            type: s
                        } = e;
                        n({ ...p({
                                source: t,
                                prescriptionSharingFunnelId: o,
                                appointmentId: a
                            }),
                            name: "patient_search_map_pin",
                            type: s
                        })
                    },
                    trackPatientGivesMapConsent: e => {
                        let {
                            source: t,
                            prescriptionSharingFunnelId: o,
                            appointmentId: a,
                            type: s
                        } = e;
                        n({ ...p({
                                source: t,
                                prescriptionSharingFunnelId: o,
                                appointmentId: a
                            }),
                            name: "patient_gives_map_consent",
                            type: s
                        })
                    }
                }
            }
        },
        889736: (e, t, n) => {
            n.d(t, {
                ZP: () => m,
                qs: () => d
            });
            var o = n(785893),
                a = n(445884),
                s = n(990626),
                i = n(406288),
                r = n(220209);
            const c = {
                    [r.Z.UNSEEN_BY_PRACTITIONER]: "solid/hourglass",
                    [r.Z.WAITING_FOR_PRACTITIONER]: "solid/hourglass",
                    [r.Z.WAITING_FOR_PATIENT]: "solid/triangle-exclamation",
                    [r.Z.REJECTED]: "calendar-xmark"
                },
                l = {
                    [r.Z.UNSEEN_BY_PRACTITIONER]: "patient_common.root.account.appointments.appointment_request.status.waiting_for_practitioner",
                    [r.Z.WAITING_FOR_PRACTITIONER]: "patient_common.root.account.appointments.appointment_request.status.waiting_for_practitioner",
                    [r.Z.WAITING_FOR_PATIENT]: "patient_common.root.account.appointments.appointment_request.status.waiting_for_patient",
                    [r.Z.REJECTED]: "patient_common.root.account.appointments.appointment_request.status.rejected"
                },
                d = e => !!e && e !== r.Z.CONFIRMED,
                m = e => {
                    let {
                        status: t
                    } = e;
                    if ((0, s.JT)("patient_appointment_requests")) return null;
                    const n = (e => {
                        if (d(e)) return {
                            icon: c[e],
                            iconColor: e === r.Z.REJECTED ? "error-140" : "warning-140",
                            label: a.Z.t(l[e])
                        }
                    })(t);
                    return n ? (0, o.jsx)(i.Z, {
                        leftIcon: n.icon,
                        leftIconColor: n.iconColor,
                        className: `appointment-request-status-message appointment-request-status-${t}`,
                        children: n.label
                    }) : null
                }
        },
        835645: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var o = n(129303),
                a = n(951969),
                s = n(827955);
            const i = async e => {
                if ((0, a.uz)("3.4.10") || (0, a.sF)("3.3.11")) {
                    const t = s.Z.primary120,
                        n = ((e, t) => new URL(`${e.origin}${e.pathname}?${new URLSearchParams([...Array.from(e.searchParams.entries()),...Object.entries(t)]).toString()}`))(new URL(e), {
                            in_app: "true"
                        }).toString();
                    await o.ZP.call({
                        method: o.bc,
                        params: [n, t]
                    }).catch((() => window.open(e, "_blank")))
                } else window.open(e, "_blank")
            }
        },
        220209: (e, t, n) => {
            var o;
            n.d(t, {
                    G: () => o,
                    Z: () => a
                }),
                function(e) {
                    e.UNSEEN_BY_PRACTITIONER = "unseen_by_practitioner", e.WAITING_FOR_PRACTITIONER = "waiting_for_practitioner", e.WAITING_FOR_PATIENT = "waiting_for_patient", e.CONFIRMED = "confirmed", e.REJECTED = "rejected"
                }(o || (o = {}));
            const a = o
        },
        257629: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var o = n(785893),
                a = n(348187),
                s = n(453040),
                i = n(326841);
            const r = e => {
                let {
                    document: {
                        title: t,
                        created_at: n,
                        creator_label: r,
                        is_created_by_self: c,
                        master_patient: l
                    },
                    viewed: d,
                    dateFormat: m
                } = e;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)("div", {
                        className: "flex flex-column",
                        children: [!d && (0, o.jsx)(a.Z, {
                            className: "dl-margin-r-8 dl-margin-y-8"
                        }), (0, o.jsx)(s.Z, {
                            ellipsis: !0,
                            uiStyle: d ? "body-s-regular" : "body-s-bold",
                            color: "neutral-150",
                            children: t
                        })]
                    }), (0, o.jsx)(i.Z, {
                        dateFormat: m,
                        is_created_by_self: c,
                        creator_label: r,
                        created_at: n,
                        master_patient: l
                    })]
                })
            }
        },
        326841: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var o = n(785893),
                a = n(977954),
                s = n.n(a),
                i = n(445884),
                r = n(453040),
                c = n(758162),
                l = n(800274);
            const d = e => {
                let {
                    is_created_by_self: t,
                    creator_label: n,
                    created_at: a,
                    dateFormat: d,
                    centered: m = !1,
                    master_patient: p
                } = e;
                const u = (0, l.ZP)(),
                    h = p && p.id !== (null === u || void 0 === u ? void 0 : u.main_master_patient_id);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(r.Z, {
                        uiStyle: "body-s-regular",
                        block: !0,
                        ellipsis: !0,
                        align: m ? "center" : "left",
                        color: "neutral-090",
                        children: [t ? i.Z.t("common.document_created_by_you") : n, " \u2022 ", s()(a).localize(d)]
                    }), h ? (0, o.jsx)(c.Z, {
                        masterPatient: p
                    }) : null]
                })
            }
        },
        912711: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var o = n(785893),
                a = n(294184),
                s = n.n(a),
                i = n(445884),
                r = n(835645),
                c = n(784600),
                l = n(989976),
                d = n(545763),
                m = n(453040),
                p = n(952893),
                u = n(297516),
                h = n(294910),
                g = n(134360),
                _ = n(247557);
            const x = n.p + "c7bab3b1efd2553f02c8.png",
                y = () => (0, o.jsxs)("div", {
                    className: "dl-padding-x-16 dl-text-center",
                    children: [(0, o.jsx)("img", {
                        src: x,
                        style: {
                            width: 170
                        },
                        alt: ""
                    }), (0, o.jsx)(m.Z, {
                        color: "neutral-090",
                        className: "dl-margin-t-16",
                        block: !0,
                        children: i.Z.t("patient_common.root.documents.empty_list")
                    })]
                });
            var Z = n(933440),
                j = n(12015),
                w = n(130498),
                b = n(99630);
            const k = e => {
                    let {
                        doc: t,
                        destroyDocument: n,
                        viewOnly: a,
                        checkboxState: s,
                        onDownload: i,
                        border: r,
                        className: c,
                        showPrescriptionSharingButton: l,
                        noListItemContentPadding: d
                    } = e;
                    return (0, o.jsx)(_.Z, {
                        onDestroyed: () => n(t.id),
                        doc: t,
                        hideGuideline: !0,
                        viewOnly: a,
                        checkboxState: s && {
                            checkDocument: s.checkDocument,
                            uncheckDocument: s.uncheckDocument,
                            checked: s.checkedDocumentIds.includes(t.id),
                            disabled: s.disabled
                        },
                        dateFormat: "D MMMM",
                        onDownload: i,
                        border: r,
                        className: c,
                        showPrescriptionSharingButton: l,
                        noContentPadding: d
                    }, t.id)
                },
                f = e => {
                    let {
                        lastPage: t,
                        loading: n,
                        error: a,
                        documents: _,
                        onDocumentDestroy: x,
                        showMore: f,
                        viewOnly: v,
                        isSharing: S,
                        checkboxState: D,
                        headerDisplayed: N = !1,
                        onDownload: C,
                        groupedByYear: I = !0,
                        className: P,
                        noListItemContentPadding: F,
                        showPrescriptionSharingButton: T = !1
                    } = e;
                    return n && 0 === _.length ? (0, o.jsxs)("div", {
                        className: s()("dl-flex-grow", P),
                        children: [N && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(Z.Z, {}), (0, o.jsx)(g.Z, {
                                uiStyle: "line"
                            })]
                        }), (0, p.Z)(Array.from({
                            length: 10
                        }, ((e, t) => (0, o.jsx)(w.D, {}, t))), (0, o.jsx)(g.Z, {
                            uiStyle: "line"
                        }))]
                    }) : a ? (0, o.jsx)(c.Z, {
                        className: "dl-margin-16",
                        children: i.Z.t("common.error")
                    }) : _.length ? (0, o.jsxs)(u.Z, {
                        className: P,
                        children: [N && (0, o.jsx)(Z.Z, {}), I ? (0, o.jsx)(j.Z, {
                            documents: _,
                            render: e => (0, p.Z)(e.map((e => (0, o.jsx)(k, {
                                doc: e,
                                checkboxState: D,
                                viewOnly: v,
                                destroyDocument: () => {
                                    x(), null === D || void 0 === D || D.uncheckDocument(e.id)
                                },
                                onDownload: C,
                                noListItemContentPadding: F,
                                showPrescriptionSharingButton: T
                            }, e.id))), (0, o.jsx)(g.Z, {
                                uiStyle: "line"
                            }))
                        }) : _.map((e => (0, o.jsx)("div", {
                            className: "dl-padding-b-16",
                            children: (0, o.jsx)(k, {
                                doc: e,
                                checkboxState: D,
                                viewOnly: v,
                                destroyDocument: () => {
                                    x(), null === D || void 0 === D || D.uncheckDocument(e.id)
                                },
                                onDownload: C,
                                noListItemContentPadding: F,
                                border: !0,
                                showPrescriptionSharingButton: T
                            })
                        }, e.id))), !t && (0, o.jsx)(h.Z, {
                            className: "flex",
                            children: (0, o.jsx)(d.Z, {
                                uiStyle: "info-link",
                                block: !0,
                                onTap: f,
                                disabled: n,
                                children: i.Z.t("common.mobile.availabilities.see_more")
                            })
                        })]
                    }) : (0, o.jsx)("div", {
                        className: "dl-flex-center dl-flex-column dl-flex-grow",
                        children: S ? (0, o.jsx)(y, {}) : (0, o.jsx)(l.Z, {
                            title: i.Z.t("patient_mobile.root.account.documents.empty_state.logged.title"),
                            image: b,
                            secondaryAction: {
                                text: i.Z.t("patient_mobile.root.account.documents.empty_state.logged.button_text"),
                                onClick: () => (0, r.Z)(i.Z.t("patient_mobile.root.account.documents.empty_state.logged.button_href"))
                            },
                            children: (0, o.jsx)(m.Z, {
                                children: i.Z.t("patient_mobile.root.account.documents.empty_state.logged.description")
                            })
                        })
                    })
                }
        },
        130498: (e, t, n) => {
            n.d(t, {
                D: () => c,
                Z: () => l
            });
            var o = n(785893),
                a = n(784600),
                s = n(946402),
                i = n(406288);
            const r = e => {
                    let {
                        className: t,
                        children: n,
                        withSkeletonLoader: a = !0
                    } = e;
                    return a ? (0, o.jsx)(s.Z, {
                        className: t,
                        children: n
                    }) : (0, o.jsx)("div", {
                        className: t,
                        children: n
                    })
                },
                c = e => {
                    let {
                        className: t,
                        border: n,
                        withLoaderWrapper: c = !0
                    } = e;
                    return (0, o.jsx)(r, {
                        className: t,
                        withSkeletonLoader: c,
                        children: (0, o.jsx)(a.Z, {
                            className: "dl-full-width dl-padding-0",
                            border: n,
                            children: (0, o.jsx)(i.Z, {
                                children: (0, o.jsxs)("div", {
                                    className: "dl-flex-row dl-align-items-center dl-margin-b-4",
                                    children: [(0, o.jsx)(s.Z.Circle, {
                                        size: "medium"
                                    }), (0, o.jsxs)("div", {
                                        className: "dl-margin-l dl-width-75",
                                        children: [(0, o.jsx)(s.Z.Rectangle, {
                                            height: "xs",
                                            className: "dl-full-width"
                                        }), (0, o.jsx)(s.Z.Rectangle, {
                                            height: "xs",
                                            className: "dl-width-50 dl-margin-t-8"
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                l = e => {
                    let {
                        className: t,
                        withTitle: n = !1,
                        withLoaderWrapper: a = !0
                    } = e;
                    return (0, o.jsxs)(r, {
                        className: t,
                        withSkeletonLoader: a,
                        children: [n && (0, o.jsx)("div", {
                            className: "dl-margin-y-16 dl-full-width",
                            children: (0, o.jsx)(s.Z.Rectangle, {
                                height: "s",
                                className: "dl-width-50"
                            })
                        }), (0, o.jsx)(c, {
                            border: !0,
                            withLoaderWrapper: !1
                        })]
                    })
                }
        },
        758162: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var o = n(785893),
                a = n(975645),
                s = n(845126),
                i = n(453040);
            const r = e => {
                let {
                    masterPatient: t,
                    uiStyle: n = "body-s-regular",
                    color: r = "neutral-090"
                } = e;
                return (0, o.jsxs)("div", {
                    className: "flex dl-align-items-center",
                    children: [(0, o.jsx)(s.Z, {
                        name: "solid/user-group",
                        color: r,
                        className: "dl-margin-r-8"
                    }), (0, o.jsx)(i.Z, {
                        align: "left",
                        color: r,
                        uiStyle: n,
                        className: "dl-align-self-center",
                        children: (0, a.WU)(t)
                    })]
                })
            }
        },
        991136: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var o = n(184481),
                a = n(445884),
                s = n(174976),
                i = n(239417),
                r = n(261397),
                c = n(282786),
                l = n(800274);
            const d = 18e5;
            class m extends Error {
                constructor(e, t) {
                    super(e), this.status = t
                }
            }
            const p = e => {
                let {
                    document: t,
                    onSuccess: n,
                    onError: p,
                    enabled: u = !0
                } = e;
                const h = (0, l.ZP)(),
                    {
                        decryptFile: g
                    } = (0, o.useContext)(r.WA),
                    _ = (0, o.useContext)(i._O);
                return (0, s.useQuery)(["account", "documents", null === t || void 0 === t ? void 0 : t.id, "decrypted"], ((e, t, n, o, s) => async () => {
                    if ("clear" === e.kind || !e.tanker_encrypted) return {
                        decryptedFileUrl: e.download_path
                    };
                    if (!t) throw new Error("Cannot decrypt a document without an account");
                    const {
                        errorMessage: i,
                        errorStatus: r,
                        decryptedFileUrl: l
                    } = await (0, c.XS)({
                        account: t,
                        document: e,
                        httpClient: n,
                        decryptFile: o,
                        trackingContext: s,
                        getResourceId: void 0
                    });
                    if (i || !l) throw new m(i || a.Z.t("common.error"), r);
                    return {
                        decryptedFileUrl: l
                    }
                })(t, h, _, g), {
                    enabled: Boolean(t) && u,
                    staleTime: d,
                    cacheTime: d,
                    onSuccess: n,
                    onError: p
                })
            }
        },
        269911: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var o = n(785893),
                a = n(294184),
                s = n.n(a),
                i = n(845126);
            const r = {
                    name: "regular/file",
                    backgroundColor: "neutral-020"
                },
                c = {
                    medicine_prescription: {
                        name: "regular/capsules",
                        backgroundColor: "primary-030"
                    },
                    biological_prescription: {
                        name: "regular/microscope",
                        backgroundColor: "primary-030"
                    },
                    medical_imaging_prescription: {
                        name: "regular/monitor-waveform",
                        backgroundColor: "primary-030"
                    },
                    paramedical_prescription: {
                        name: "regular/bandage",
                        backgroundColor: "primary-030"
                    },
                    picture: {
                        name: "regular/camera",
                        backgroundColor: "warning-020"
                    },
                    lab_results: {
                        name: "regular/heart-pulse",
                        backgroundColor: "purple-010"
                    },
                    medical_imaging: {
                        name: "regular/monitor-waveform",
                        backgroundColor: "warning-020"
                    },
                    treatment_form: {
                        name: "regular/file-certificate",
                        backgroundColor: "error-020"
                    },
                    medical_certificate: {
                        name: "regular/file-certificate",
                        backgroundColor: "error-020"
                    },
                    report: {
                        name: "regular/clipboard-medical",
                        backgroundColor: "purple-010"
                    },
                    referral: {
                        name: "regular/paper-plane",
                        backgroundColor: "error-020"
                    },
                    identity_proof: {
                        name: "regular/address-card",
                        color: "teal-100",
                        backgroundColor: "teal-020"
                    },
                    public_insurance_proof: {
                        name: "regular/credit-card-blank",
                        color: "teal-100",
                        backgroundColor: "teal-020"
                    },
                    private_insurance_proof: {
                        name: "regular/credit-card-blank",
                        color: "teal-100",
                        backgroundColor: "teal-020"
                    },
                    clear: {
                        name: "regular/file",
                        backgroundColor: "neutral-020"
                    },
                    other: r
                },
                l = e => {
                    let {
                        kind: t,
                        size: n = "small",
                        disabled: a = !1
                    } = e;
                    const l = c[t] || r;
                    return (0, o.jsx)(i.Z, {
                        name: l.name,
                        color: l.color,
                        backgroundColor: l.backgroundColor,
                        size: n,
                        square: !0,
                        className: s()({
                            "dl-opacity-0-5": a
                        })
                    })
                }
        },
        362141: (e, t, n) => {
            n.d(t, {
                q: () => s
            });
            var o = n(174976),
                a = n(437124);
            const s = function(e) {
                let {
                    appointmentId: t
                } = e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const s = ["appointments", t, "documents"];
                return (0, o.useQuery)(s, (() => a.ZP.get(`/appointments/${t}/documents.json`).then((e => {
                    let {
                        bodyData: t
                    } = e;
                    return t
                }))), {
                    enabled: n
                })
            }
        },
        946402: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var o = n(785893),
                a = n(23279),
                s = n.n(a),
                i = n(184481),
                r = n(294184),
                c = n.n(r),
                l = n(445884),
                d = n(125287);
            n(3460);
            const m = e => {
                let {
                    children: t,
                    className: n,
                    trackingId: a,
                    skipLoaderTracking: r = !1,
                    uiStyle: m = "white"
                } = e;
                const p = (0, i.useRef)(null),
                    [u, h] = (0, i.useState)();
                return (0, d.Z)(a, r), (0, i.useEffect)((() => {
                    const e = () => {
                            p.current && h(p.current.getBoundingClientRect())
                        },
                        t = s()(e, 200);
                    return e(), window.addEventListener("resize", t), () => {
                        window.removeEventListener("resize", t)
                    }
                }), [p]), (0, o.jsxs)("div", {
                    className: c()(n, "skeleton-loader-container", "dl-position-relative", "dl-overflow-hidden"),
                    ref: p,
                    "aria-label": l.Z.t("common.loading"),
                    "data-design-system": "oxygen",
                    children: [t, u && (0, o.jsx)("div", {
                        className: c()("dl-position-absolute", "skeletonloader-slider", {
                            [`skeletonloader-slider-${m}`]: !0
                        }),
                        style: {
                            right: u.width
                        }
                    })]
                })
            };
            m.Circle = e => {
                let {
                    size: t = "small",
                    className: n = ""
                } = e;
                return (0, o.jsx)("div", {
                    className: c()(n, `skeleton-loader-circle-${t}`, "dl-gray-lighter-bg")
                })
            }, m.Rectangle = e => {
                let {
                    className: t = "",
                    height: n = "s",
                    width: a
                } = e;
                return (0, o.jsx)("div", {
                    className: c()(t, `skeleton-loader-rectangle-${n}`, "dl-rounded-borders-s", "dl-gray-lighter-bg"),
                    style: {
                        width: a
                    }
                })
            };
            const p = m
        },
        14077: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var o = n(785893),
                a = n(45697),
                s = n.n(a),
                i = n(294184),
                r = n.n(i),
                c = n(581311);
            n(966475);
            const l = e => {
                let {
                    fixedLayout: t,
                    children: n,
                    className: a,
                    loading: s,
                    skeletonLoaderProps: i = {},
                    verticalCellPadding: l = "medium",
                    verticalHeadCellPadding: d = "medium",
                    ...m
                } = e;
                return s ? (0, o.jsx)("table", {
                    className: "dl-table",
                    "data-design-system": "oxygen",
                    children: (0, o.jsx)(c.Z, {
                        skeletonLoaderProps: i
                    })
                }) : (0, o.jsx)("table", { ...m,
                    className: r()("dl-table", {
                        "dl-table-layout-fixed": t,
                        [`dl-table-cell-padding-y-${l}`]: l,
                        [`dl-table-head-cell-padding-y-${d}`]: d
                    }, a),
                    "data-design-system": "oxygen",
                    children: n
                })
            };
            l.propTypes = {
                fixedLayout: s().bool,
                className: s().string,
                children: s().node,
                loading: s().bool,
                skeletonLoaderProps: s().shape({
                    numberOfColumns: s().number,
                    displayCheckbox: s().bool
                })
            };
            const d = l
        },
        568541: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var o = n(785893),
                a = n(45697),
                s = n.n(a),
                i = n(294184),
                r = n.n(i),
                c = n(581311);
            n(966475);
            const l = e => {
                let {
                    children: t,
                    className: n,
                    loading: a,
                    skeletonLoaderProps: s = {}
                } = e;
                return a ? (0, o.jsx)(c.Z, {
                    skeletonLoaderProps: s,
                    "data-design-system": "oxygen"
                }) : (0, o.jsx)("tbody", {
                    className: r()("dl-table-body", n),
                    "data-design-system": "oxygen",
                    children: t
                })
            };
            l.propTypes = {
                className: s().string,
                children: s().node,
                loading: s().bool,
                skeletonLoaderProps: s().shape({
                    numberOfColumns: s().number,
                    displayCheckbox: s().bool
                })
            };
            const d = l
        },
        581311: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var o = n(785893),
                a = n(45697),
                s = n.n(a),
                i = n(946402),
                r = n(201477),
                c = n(596365),
                l = n(178287);
            const d = e => {
                let {
                    skeletonLoaderProps: t
                } = e;
                const n = t.numberOfColumns || 5,
                    a = t.displayCheckbox || !1,
                    s = a ? n - 1 : n,
                    d = t.numberOfRows || 5;
                return (0, o.jsx)("tbody", {
                    className: "dl-table-body-skeleton-loader",
                    "data-design-system": "oxygen",
                    children: [...Array(d).keys()].map((e => (0, o.jsxs)(c.Z, {
                        children: [a && (0, o.jsx)(l.Z, {
                            children: (0, o.jsx)(r.Z, {
                                disabled: !0
                            })
                        }), [...Array(s).keys()].map((e => (0, o.jsx)(l.Z, {
                            children: (0, o.jsx)(i.Z, {
                                children: (0, o.jsx)(i.Z.Rectangle, {
                                    height: "xxxl"
                                })
                            })
                        }, e)))]
                    }, e)))
                })
            };
            d.propTypes = {
                skeletonLoaderProps: s().shape({
                    numberOfColumns: s().number,
                    displayCheckbox: s().bool
                })
            };
            const m = d
        },
        3460: () => {},
        99630: (e, t, n) => {
            e.exports = n.p + "61ffe595d879f869e7e9.png"
        },
        790398: (e, t, n) => {
            e.exports = n.p + "172fe7cdf11f336b19cb.png"
        }
    }
]);
//# sourceMappingURL=../2884-f43f22a5f62b7cf9b63a.js.map