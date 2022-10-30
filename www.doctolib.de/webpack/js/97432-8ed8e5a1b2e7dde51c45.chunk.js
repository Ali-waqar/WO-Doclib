"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [97432], {
        992559: (e, t, n) => {
            n.d(t, {
                E: () => a,
                b: () => i
            });
            var s = n(8955);
            const l = "recentPlaces",
                a = () => s.U2(l) || [],
                i = e => {
                    const t = [e, ...a().filter((t => t.place_id !== e.place_id))].slice(0, 3);
                    s.t8(l, t)
                }
        },
        787169: (e, t, n) => {
            n.d(t, {
                Z: () => k
            });
            var s = n(184481),
                l = n(294184),
                a = n.n(l),
                i = n(253565),
                o = n(445884),
                r = n(488170),
                c = n(784600),
                d = n(453040),
                m = n(745244),
                p = n(406288);
            const h = n.p + "30b13081ce8f348ae36f.png",
                u = n.p + "6ae00ff76ae40aee240f.png",
                x = n.p + "7160f9a84a1515360ed9.png",
                g = n.p + "77d99aadfa647130344f.png";
            var v = n(785893);
            const f = "patient",
                _ = "appointment",
                j = "reimbursement",
                Z = "covid",
                w = [{
                    value: f,
                    icon: h
                }, {
                    value: _,
                    icon: u
                }, {
                    value: j,
                    icon: x
                }, {
                    value: Z,
                    icon: g
                }],
                b = {
                    [f]: i.Z.config.telehealthPatientAwareness.questions.patient(),
                    [_]: i.Z.config.telehealthPatientAwareness.questions.appointment(),
                    [j]: i.Z.config.telehealthPatientAwareness.questions.reimbursement(),
                    [Z]: i.Z.config.telehealthPatientAwareness.questions.covid()
                },
                y = e => {
                    let {
                        icon: t,
                        value: n,
                        onClick: l,
                        selected: i,
                        parentRef: r
                    } = e;
                    const d = (0, s.useRef)(null);
                    return (0, v.jsx)(c.Z, {
                        ref: d,
                        onClick: () => {
                            r.current.scrollLeft = d.current.offsetLeft - 45, l(n)
                        },
                        className: a()("dl-margin-16", "dl-faq-category-card", "dl-faq-category-card-details", {
                            selected: i
                        }, n),
                        children: (0, v.jsxs)("div", {
                            className: "dl-header-container flex",
                            children: [(0, v.jsx)("img", {
                                className: "dl-category-icon dl-margin-r",
                                src: t,
                                alt: ""
                            }), (0, v.jsx)(m.Z, {
                                children: o.Z.t(`patient_common.root.telehealth.awareness.faq.${n}.title`)
                            })]
                        })
                    })
                },
                N = e => {
                    let {
                        current: t,
                        setMode: n
                    } = e;
                    const l = (0, s.useRef)();
                    return (0, v.jsx)("div", {
                        ref: l,
                        className: "categories flex dl-justify-between",
                        children: w.map((e => {
                            let {
                                icon: s,
                                value: a
                            } = e;
                            return (0, v.jsx)(y, {
                                parentRef: l,
                                icon: s,
                                onClick: n,
                                selected: t === a,
                                value: a
                            }, a)
                        }))
                    })
                },
                C = e => {
                    let {
                        category: t
                    } = e;
                    const n = b[t].map((e => ({
                        title: o.Z.t(`patient_common.root.telehealth.awareness.faq.${t}.questions.${e}.question`),
                        content: o.Z.t(`patient_common.root.telehealth.awareness.faq.${t}.questions.${e}.content_html`)
                    })));
                    return (0, v.jsx)("div", {
                        children: (0, v.jsx)(r.ZP, {
                            className: "dl-faq-questions",
                            children: n.map((e => {
                                let {
                                    title: t,
                                    content: n
                                } = e;
                                return (0, v.jsx)(r.Qd, {
                                    component: "h2",
                                    title: t,
                                    children: n
                                }, `question-${t}`)
                            }))
                        })
                    })
                },
                k = () => {
                    const [e, t] = (0, s.useState)(f);
                    return (0, v.jsx)(c.Z, {
                        className: "dl-paw-faq-card dl-padding-0",
                        children: (0, v.jsx)(p.Z, {
                            contentClassName: "dl-flex-column dl-align-items-center",
                            children: (0, v.jsxs)("div", {
                                className: "dl-faq-container dl-faq-wrapper dl-margin-b",
                                children: [(0, v.jsx)(d.Z, {
                                    uiStyle: "title-l-bold",
                                    className: "!my-32",
                                    align: "center",
                                    component: "h2",
                                    children: o.Z.t("patient_common.root.telehealth.awareness.faq.title")
                                }), (0, v.jsx)(N, {
                                    current: e,
                                    setMode: t
                                }), (0, v.jsx)(C, {
                                    category: e
                                })]
                            })
                        })
                    })
                }
        },
        615755: (e, t, n) => {
            n.d(t, {
                Z: () => N
            });
            var s = n(184481),
                l = n(445884),
                a = n(952893),
                i = n(453040),
                o = n(784600),
                r = n(406288),
                c = n(348187),
                d = n(545763),
                m = n(169339),
                p = n(383915);
            var h = n(785893);
            const u = e => {
                    let {
                        width: t = "560",
                        height: n = "315"
                    } = e;
                    return (0, h.jsx)("iframe", {
                        className: "snapshot-black",
                        title: "telehealth-awareness-video",
                        width: t,
                        height: n,
                        src: l.Z.t("url.telehealth_patient_awareness_redesigned_video_url"),
                        frameBorder: "0",
                        allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0
                    })
                },
                x = e => {
                    let {
                        show: t,
                        onHide: n
                    } = e;
                    return (0, h.jsx)(m.Z, {
                        show: t,
                        onHide: n,
                        size: "fullscreen",
                        title: l.Z.t("patient_common.root.vc_patient_awareness.video_title"),
                        className: "dl-paw-video-modal",
                        children: (0, h.jsx)(p.Z, {
                            align: "center",
                            className: "dl-flex-center dl-padding-y-24",
                            children: (0, h.jsx)(u, {})
                        })
                    })
                },
                g = n.p + "c0a21f2fbafda79e2837.png",
                v = n.p + "66a8b716833208f73a77.png",
                f = n.p + "fb68bee818bcf8d4a283.png";
            var _ = n(614084),
                j = n.n(_),
                Z = n(200088),
                w = n.n(Z);
            const b = e => {
                    let {
                        name: t
                    } = e;
                    return {
                        before: (0, h.jsx)("img", {
                            src: g
                        }),
                        during: (0, h.jsx)("img", {
                            src: v
                        }),
                        after: (0, h.jsx)("img", {
                            src: f
                        })
                    }[t]
                },
                y = e => {
                    let {
                        name: t
                    } = e;
                    return (0, h.jsxs)("div", {
                        className: "dl-paw-hdiw-image-block dl-flex-center dl-flex-column text-center",
                        children: [(0, h.jsx)("div", {
                            className: "dl-paw-hdiw-image-container dl-margin-b",
                            children: (0, h.jsx)(b, {
                                name: t
                            })
                        }), (0, h.jsx)("div", {
                            className: "dl-margin-b",
                            children: (0, h.jsx)(c.Z, {
                                uiStyle: "neutral",
                                className: "dl-margin-l dl-margin-r dl-uppercase dl-padding-x-16",
                                children: l.Z.t(`${t}.title`, {
                                    scope: "patient_common.root.vc_patient_awareness.timeline"
                                })
                            })
                        }), (0, h.jsx)(i.Z, {
                            children: l.Z.t(`${t}.explanation`, {
                                scope: "patient_common.root.vc_patient_awareness.timeline"
                            })
                        })]
                    })
                },
                N = () => {
                    const [e, t] = (0, s.useState)(!1);
                    return (0, h.jsxs)(o.Z, {
                        bgColor: "white",
                        className: "dl-paw-hdiw-card",
                        children: [(0, h.jsx)(i.Z, {
                            className: "dl-padding-t-16 dl-md-padding-t-l dl-padding-b-8",
                            align: "center",
                            uiStyle: "title-xl-bold",
                            children: l.Z.t("patient_common.root.telehealth.awareness.how_does_it_work")
                        }), (0, h.jsxs)(r.Z, {
                            contentClassName: "dl-flex-column dl-align-items-center",
                            children: [(0, h.jsx)("div", {
                                className: "dl-paw-hdiw-timelines-container dl-flex-center",
                                children: (0, a.Z)(["before", "during", "after"].map((e => (0, h.jsx)(y, {
                                    name: e
                                }, e))), (0, h.jsxs)(h.Fragment, {
                                    children: [(0, h.jsx)(w(), {
                                        className: "dl-hide-mobile dl-margin-16"
                                    }), (0, h.jsx)(j(), {
                                        className: "dl-hide-desktop dl-margin-16"
                                    })]
                                }))
                            }), (0, h.jsx)(d.Z, {
                                uiStyle: "outlined",
                                className: "dl-padding-16 dl-video-link-btn dl-margin-t-16",
                                leftIcon: "play",
                                color: "blue",
                                onClick: () => t(!0),
                                children: l.Z.t("patient_common.root.vc_patient_awareness.watch_video_description")
                            }), (0, h.jsx)(x, {
                                show: e,
                                onHide: () => t(!1)
                            })]
                        })]
                    })
                }
        },
        470122: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var s = n(288802),
                l = n(445884),
                a = n(952893),
                i = n(784600),
                o = n(453040),
                r = n(660792),
                c = n.n(r),
                d = n(348937),
                m = n.n(d),
                p = n(317314),
                h = n.n(p);
            var u = n(785893);
            const x = e => {
                    let {
                        name: t,
                        ...n
                    } = e;
                    return {
                        anywhere: (0, u.jsx)(h(), { ...n
                        }),
                        anytime: (0, u.jsx)(c(), { ...n
                        }),
                        everything: (0, u.jsx)(m(), { ...n
                        })
                    }[t]
                },
                g = e => {
                    let {
                        name: t
                    } = e;
                    return (0, u.jsxs)("div", {
                        className: "dl-paw-value dl-flex-column dl-align-items-center",
                        children: [(0, u.jsx)(x, {
                            name: t,
                            className: "dl-margin-16"
                        }), (0, u.jsx)(o.Z, {
                            uiStyle: "title-s-bold",
                            className: "dl-margin-b-8",
                            align: "center",
                            component: "div",
                            children: l.Z.t(`${t}.covid_wave_two_title`, {
                                scope: "patient_common.root.vc_patient_awareness.virtues"
                            })
                        }), (0, u.jsx)(o.Z, {
                            align: "center",
                            children: l.Z.t(`${t}.covid_wave_two_description`, {
                                scope: "patient_common.root.vc_patient_awareness.virtues"
                            })
                        })]
                    })
                },
                v = () => (0, u.jsx)(i.Z, {
                    DEPRECATED_floating: !0,
                    className: "dl-paw-values-card dl-padding-8",
                    children: (0, u.jsx)("div", {
                        id: "values",
                        className: "dl-paw-values-container dl-flex-center dl-margin-x-16 dl-margin-b",
                        children: (0, a.Z)(["anywhere", "anytime", "everything"].map((e => (0, u.jsx)(g, {
                            name: e
                        }, e))), (0, u.jsx)("div", {
                            className: "column-divider"
                        }))
                    })
                });
            var f = n(845126),
                _ = n(406288);
            const j = n.p + "7f3ddfe6ad19db2c4d7f.png",
                Z = n.p + "674bc389ab914d19ef29.png";
            var w = n(814688);
            const b = () => (0, u.jsx)(i.Z, {
                className: "dl-padding-0",
                children: (0, u.jsx)(_.Z, {
                    className: "dl-paw-introduction-card-section fixed-height-background",
                    children: (0, u.jsx)("div", {
                        className: "dl-paw-introduction row-center",
                        children: (0, u.jsxs)("div", {
                            className: "dl-paw-introduction-content",
                            children: [(0, u.jsxs)("div", {
                                className: "dl-text-center",
                                children: [(0, u.jsx)(o.Z, {
                                    uiStyle: "title-xl-bold",
                                    className: "dl-paw-introduction-title dl-padding-b-8",
                                    children: l.Z.t("patient_common.root.vc_patient_awareness.covid_wave_two_title_html")
                                }), (0, u.jsx)(o.Z, {
                                    component: "div",
                                    children: l.Z.t("patient_common.root.vc_patient_awareness.covid_wave_two_subtitle_html")
                                }), (0, u.jsx)(w.Z, {
                                    className: "dl-patient-awareness-button",
                                    onClick: () => {
                                        var e;
                                        e = "bookVideoConsultationButtonTop", s.Z.trackGtmEvent({
                                            category: "landingPageVideoConsultation",
                                            action: e
                                        })
                                    }
                                }), (0, u.jsxs)(i.Z, {
                                    className: "dl-covid-19-message dl-text-left",
                                    contentClassName: "flex",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex dl-align-items-center dl-padding-x-8",
                                        children: (0, u.jsx)(f.Z, {
                                            name: "regular/virus",
                                            color: "primary-110",
                                            size: "medium"
                                        })
                                    }), (0, u.jsxs)("div", {
                                        className: "flex dl-flex-column dl-padding-x-8",
                                        children: [(0, u.jsx)(o.Z, {
                                            uiStyle: "body-s-bold",
                                            children: l.Z.t("patient_common.root.vc_patient_awareness.covid_wave_two_ideal_solution")
                                        }), (0, u.jsx)(o.Z, {
                                            uiStyle: "body-xs-regular",
                                            children: l.Z.t("patient_common.root.vc_patient_awareness.covid_wave_two_avoid_contact")
                                        })]
                                    })]
                                })]
                            }), (0, u.jsxs)("div", {
                                className: "dl-hide-mobile dl-flex-center dl-flex-end dl-image-container",
                                children: [(0, u.jsx)("img", {
                                    src: j
                                }), (0, u.jsx)("img", {
                                    src: Z
                                })]
                            }), (0, u.jsx)("div", {
                                className: "dl-paw-values-section dl-flex-center",
                                children: (0, u.jsx)(v, {})
                            })]
                        })
                    })
                })
            })
        },
        876891: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var s = n(498913),
                l = n.n(s),
                a = n(253565),
                i = n(445884),
                o = n(784600),
                r = n(453040),
                c = n(406288),
                d = n(37946),
                m = n(239702),
                p = n(845126);
            var h = n(785893);
            const u = e => {
                    let {
                        rating: t,
                        color: n = "#f8c400"
                    } = e;
                    return l()(t, (e => (0, h.jsx)(p.Z, {
                        name: "solid/star",
                        fill: n,
                        size: "medium"
                    }, e)))
                },
                x = e => {
                    let {
                        kpi: t
                    } = e;
                    return (0, h.jsx)(d.Z, {
                        placement: "top",
                        overlay: (0, h.jsx)(m.Z, {
                            id: `${t}-info`,
                            className: "dl-paw-kpi-info-popover",
                            children: (0, h.jsx)(r.Z, {
                                uiStyle: "body-s-regular",
                                children: i.Z.t(`${t}.disclosure_html`, {
                                    scope: "patient_common.root.vc_patient_awareness.kpis"
                                })
                            })
                        }),
                        children: (0, h.jsx)(p.Z, {
                            name: "circle-question"
                        })
                    }, t)
                },
                g = () => {
                    const e = {
                        video_consultations: "total_video_consultations",
                        professionals: "total_professionals"
                    };
                    return (0, h.jsx)(o.Z, {
                        className: "dl-padding-0",
                        children: (0, h.jsx)(c.Z, {
                            contentClassName: "dl-flex-column dl-align-items-center",
                            children: (0, h.jsx)("div", {
                                className: "dl-paw-kpis-container dl-flex-center dl-margin-y-24",
                                children: ["recommandation", "video_consultations", "professionals"].map((t => (0, h.jsxs)("div", {
                                    className: "dl-paw-kpi dl-flex-column dl-align-items-center dl-text-center",
                                    children: [(0, h.jsx)(r.Z, {
                                        uiStyle: "title-l-bold",
                                        className: "dl-paw-kpi-title dl-margin-16",
                                        component: "div",
                                        children: "recommandation" === t ? (0, h.jsx)(u, {
                                            rating: 5
                                        }) : i.Z.t(`kpis.telehealth.${e[t]}`)
                                    }), (0, h.jsxs)(r.Z, {
                                        uiStyle: "body-s-regular",
                                        className: "text-center dl-paw-kpi-body",
                                        children: [i.Z.t(`${t}.body`, {
                                            scope: "patient_common.root.vc_patient_awareness.kpis"
                                        }), a.Z.config.telehealthPatientAwareness.displayDisclosureOverlay() && (0, h.jsx)(x, {
                                            kpi: t
                                        })]
                                    })]
                                }, t)))
                            })
                        })
                    })
                }
        },
        453205: (e, t, n) => {
            n.d(t, {
                Z: () => x
            });
            var s = n(288802),
                l = n(253565),
                a = n(445884),
                i = n(784600),
                o = n(845126),
                r = n(453040),
                c = n(406288),
                d = n(642979);
            const m = n.p + "2f82a1264f749cf9a571.png";
            var p = n(785893);
            const h = e => {
                    let {
                        advice: t,
                        icon: n
                    } = e;
                    return (0, p.jsxs)("div", {
                        className: "dl-paw-di-advice flex dl-align-items-start",
                        children: [(0, p.jsx)("div", {
                            children: (0, p.jsx)(o.Z, {
                                name: n
                            })
                        }), (0, p.jsx)(r.Z, {
                            uiStyle: "body-s-regular",
                            children: a.Z.t(`patient_common.root.vc_patient_awareness.practitioner_info.body.${t}`)
                        })]
                    })
                },
                u = () => (0, p.jsx)(d.Z, {
                    flat: !0,
                    href: `${l.Z.config.telehealthPatientAwareness.b2bUrl()}?utm_button=videoconsultation-cta&utm_content-group=videoconsultation-page&utm_page-url=${window.location.href}&utm_website=doctolib_patients`,
                    onClick: () => {
                        return e = "b2bVideoConsultationLinkTop", void s.Z.trackGtmEvent({
                            category: "landingPageVideoConsultation",
                            action: e
                        });
                        var e
                    },
                    children: (0, p.jsxs)("div", {
                        className: "dl-paw-di-extra flex dl-align-items-start",
                        children: [(0, p.jsx)("div", {
                            children: (0, p.jsx)(o.Z, {
                                name: "info-circle"
                            })
                        }), (0, p.jsx)(r.Z, {
                            uiStyle: "body-s-bold",
                            component: "div",
                            color: "primary-110",
                            children: a.Z.t("patient_common.root.vc_patient_awareness.practitioner_info.info")
                        })]
                    })
                }),
                x = () => (0, p.jsx)(i.Z, {
                    className: "dl-padding-0",
                    children: (0, p.jsx)(c.Z, {
                        contentClassName: "dl-flex-column dl-align-items-center",
                        children: (0, p.jsxs)("div", {
                            className: "dl-paw-di-container dl-justify-between dl-flex-start dl-flex-center",
                            children: [(0, p.jsxs)("div", {
                                className: "dl-paw-di-content",
                                children: [(0, p.jsx)(r.Z, {
                                    uiStyle: "title-l-bold",
                                    className: "dl-paw-di-title",
                                    component: "h2",
                                    children: a.Z.t("patient_common.root.vc_patient_awareness.practitioner_info.title")
                                }), (0, p.jsx)(r.Z, {
                                    uiStyle: "body-s-regular",
                                    className: "dl-paw-di-body",
                                    component: "div",
                                    children: Object.entries({
                                        follow: "video",
                                        improve: "hands-holding-heart",
                                        pay: "calendar-check"
                                    }).map((e => {
                                        let [t, n] = e;
                                        return (0, p.jsx)(h, {
                                            advice: t,
                                            icon: n
                                        }, t)
                                    }))
                                }), (0, p.jsx)(u, {})]
                            }), (0, p.jsx)("div", {
                                className: "dl-paw-di-image-container dl-flex-center",
                                children: (0, p.jsx)("img", {
                                    src: m,
                                    alt: "video consultation doctors"
                                })
                            })]
                        })
                    })
                })
        },
        801858: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var s = n(184481),
                l = n(253565),
                a = n(445884),
                i = n(784600),
                o = n(453040),
                r = n(406288);
            var c = n(785893);
            const d = () => (0, c.jsx)(i.Z, {
                bgColor: "white",
                className: "dl-paw-reimbursement-card",
                children: (0, c.jsx)(r.Z, {
                    contentClassName: "dl-flex-column dl-align-items-center",
                    children: (0, c.jsxs)("div", {
                        className: "dl-paw-reimbursement-content flex dl-align-items-center dl-rounded-borders",
                        children: [(0, c.jsx)("div", {
                            className: "dl-paw-reimbursement-image-container",
                            children: (0, c.jsx)("img", {
                                src: l.Z.config.telehealthPatientAwareness.paymentCardImage()
                            })
                        }), (0, c.jsx)("div", {
                            className: "dl-paw-reimbursement-text-container dl-padding-8",
                            children: ["reimbursement", "coverage"].map((e => (0, c.jsxs)(s.Fragment, {
                                children: [(0, c.jsx)(o.Z, {
                                    uiStyle: "title-l-bold",
                                    component: "h3",
                                    className: "dl-font-size-big",
                                    children: a.Z.t(`${e}.question`, {
                                        scope: "patient_common.root.vc_patient_awareness.payment"
                                    })
                                }), (0, c.jsx)(o.Z, {
                                    className: "dl-margin-t-8 dl-margin-b",
                                    component: "div",
                                    children: a.Z.t(`${e}.covid_wave_two_answer_html`, {
                                        scope: "patient_common.root.vc_patient_awareness.payment"
                                    })
                                })]
                            }, e)))
                        })]
                    })
                })
            })
        },
        229325: (e, t, n) => {
            n.d(t, {
                Z: () => j
            });
            var s = n(184481),
                l = n(478718),
                a = n.n(l),
                i = n(253565),
                o = n(445884),
                r = n(196738),
                c = n(260902),
                d = n(784600),
                m = n(406288),
                p = n(845126),
                h = n(453040);
            var u = n(785893);
            const x = () => (0, u.jsxs)("div", {
                    className: "dl-sexuality-icon",
                    children: [(0, u.jsx)(p.Z, {
                        name: "mars"
                    }), (0, u.jsx)(p.Z, {
                        name: "venus",
                        className: "dl-absolute-venus"
                    })]
                }),
                g = {
                    follow_up: "stethoscope",
                    contraceptives: "tablets",
                    pregnancy: "baby",
                    prescription: "monitor-waveform",
                    advice: "comment",
                    advice_and_info: "comment",
                    child_and_teen: "child",
                    infertility: "seedling",
                    workplace_related: "user-helmet-safety",
                    contraception: "tablets",
                    postbirth_followup: "baby-carriage",
                    all_patients: "check",
                    registered_patient: "xmark-large",
                    covid_19: "virus"
                },
                v = e => {
                    let {
                        speciality: t,
                        usecase: n
                    } = e;
                    return (0, u.jsxs)("div", {
                        className: "dl-paw-usecase dl-flex-column dl-flex-start dl-margin-y-8 dl-md-margin-l-s dl-md-margin-r",
                        children: [(0, u.jsx)("div", {
                            className: "dl-padding-x-16 dl-rounded-borders",
                            children: "sexuality" === n ? (0, u.jsx)(x, {}) : (0, u.jsx)(p.Z, {
                                name: g[n]
                            })
                        }), (0, u.jsx)(h.Z, {
                            uiStyle: "title-s-bold",
                            component: "h3",
                            className: "dl-margin-t-16 dl-margin-b-8 dl-text-left",
                            children: o.Z.t(`patient_common.root.vc_patient_awareness.use_cases.specialities.${t}.${n}.title`)
                        }), (0, u.jsx)(h.Z, {
                            uiStyle: "body-s-regular",
                            component: "div",
                            className: "dl-text-left",
                            children: o.Z.t(`patient_common.root.vc_patient_awareness.use_cases.specialities.${t}.${n}.examples_html`)
                        })]
                    })
                },
                f = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "down";
                    return (0, u.jsx)(p.Z, {
                        name: `angle-${e}`,
                        className: "dl-vertical-align-center"
                    })
                },
                _ = e => {
                    let {
                        speciality: t,
                        setSpeciality: n
                    } = e;
                    const l = a()(o.Z.t("patient_common.root.vc_patient_awareness.use_cases.title.dropdown_options"), i.Z.config.telehealthPatientAwareness.specialities()),
                        [d, m] = (0, s.useState)(f());
                    return (0, u.jsxs)(r.Z, {
                        id: "usecases-dropdown",
                        className: "dl-paw-usecases-dropdown dl-margin-l-4",
                        onToggle: e => m(f(e ? "up" : "down")),
                        children: [(0, u.jsxs)(r.Z.Toggle, {
                            noCaret: !0,
                            bsStyle: "primary",
                            className: "dl-paw-dropdown dl-padding-0 dl-font-size-big dl-font-700 " + (i.Z.config.telehealthPatientAwareness.capitalizeSpecialityTitle() ? "dl-capitalize" : "!lowercase"),
                            children: [l[t], d]
                        }), (0, u.jsx)(r.Z.Menu, {
                            className: "dl-paw-dropdown-menu dl-text-left",
                            children: Object.entries(l).map((e => {
                                let [s, l] = e;
                                return (0, u.jsx)(c.Z, {
                                    active: t === s,
                                    eventKey: s,
                                    onSelect: e => n(e),
                                    className: "drop-down-item",
                                    children: l
                                }, s)
                            }))
                        })]
                    })
                },
                j = () => {
                    const [e, t] = (0, s.useState)("general_practitioner");
                    return (0, u.jsx)(d.Z, {
                        className: "dl-padding-0",
                        children: (0, u.jsx)(m.Z, {
                            contentClassName: "dl-flex-column dl-align-items-center",
                            children: (0, u.jsxs)("div", {
                                className: "dl-paw-use-cases-container dl-text-center dl-rounded-borders",
                                children: [(0, u.jsxs)("div", {
                                    className: "dl-md-margin-y dl-margin-b dl-font-size-big dl-paw-use-cases-title dl-text-center",
                                    children: [(0, u.jsx)(h.Z, {
                                        uiStyle: "title-l-bold",
                                        component: "h2",
                                        className: "dl-margin-0 dl-font-size-big",
                                        children: o.Z.t("patient_common.root.vc_patient_awareness.use_cases.title.before_dropdown")
                                    }), (0, u.jsx)(_, {
                                        speciality: e,
                                        setSpeciality: t
                                    }), i.Z.config.telehealthPatientAwareness.textAfterSpecialityTitle() && (0, u.jsx)(h.Z, {
                                        uiStyle: "title-l-bold",
                                        component: "h2",
                                        className: "dl-margin-0 dl-font-size-big",
                                        children: o.Z.t("patient_common.root.vc_patient_awareness.use_cases.title.after_dropdown")
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "dl-md-margin dl-flex-column",
                                    children: [(0, u.jsx)("div", {
                                        className: "flex dl-paw-usecases",
                                        children: i.Z.config.telehealthPatientAwareness.useCases[e]().map((t => (0, u.jsx)(v, {
                                            speciality: e,
                                            usecase: t
                                        }, t)))
                                    }), (0, u.jsxs)("div", {
                                        className: "dl-paw-usecases-disclaimer dl-rounded-borders text-left dl-padding-16 flex dl-align-items-start dl-margin-y-16",
                                        children: [(0, u.jsx)("div", {
                                            className: "dl-margin-r-8",
                                            children: (0, u.jsx)(p.Z, {
                                                name: "info-circle"
                                            })
                                        }), (0, u.jsx)(h.Z, {
                                            uiStyle: "body-xs-regular",
                                            component: "div",
                                            align: "left",
                                            children: o.Z.t("patient_common.root.vc_patient_awareness.use_cases.disclaimer")
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                }
        },
        814688: (e, t, n) => {
            n.d(t, {
                Z: () => K
            });
            var s = n(184481),
                l = n(294184),
                a = n.n(l),
                i = n(24553),
                o = n(253565),
                r = n(445884),
                c = n(5212),
                d = n(545763),
                m = n(845126),
                p = n(800274),
                h = n(516590),
                u = n(929014),
                x = n(348187),
                g = n(592290),
                v = n(453040),
                f = n(785893);
            const _ = e => {
                    let {
                        onSearchPractitionerTap: t
                    } = e;
                    return (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(u.Z, {
                            variant: "deprecated-alert-interface",
                            className: "dl-margin-b",
                            children: r.Z.t("static_pages.homepage.virtual_consultation_disclaimer.health_insurance")
                        }), (0, f.jsx)(v.Z, {
                            uiStyle: "body-s-bold",
                            className: "dl-margin-b",
                            children: r.Z.t("static_pages.homepage.virtual_consultation_disclaimer.recommandations")
                        }), (0, f.jsxs)("div", {
                            className: "dl-margin-b flex",
                            children: [(0, f.jsx)(x.Z, {
                                uiStyle: "info",
                                className: "dl-margin-r dl-margin-t-4",
                                children: "1"
                            }), (0, f.jsxs)("div", {
                                children: [(0, f.jsx)(v.Z, {
                                    children: r.Z.t("static_pages.homepage.virtual_consultation_disclaimer.own_practitioner")
                                }), (0, f.jsx)("br", {}), (0, f.jsx)(d.Z, {
                                    component: "a",
                                    onTap: t,
                                    uiStyle: "link-primary",
                                    children: r.Z.t("static_pages.homepage.virtual_consultation_disclaimer.own_practitioner_cta")
                                })]
                            })]
                        }), (0, f.jsxs)("div", {
                            className: "flex",
                            children: [(0, f.jsx)(x.Z, {
                                uiStyle: "info",
                                className: "dl-margin-r dl-margin-t-4",
                                children: "2"
                            }), (0, f.jsx)(v.Z, {
                                children: r.Z.t("static_pages.homepage.virtual_consultation_disclaimer.new_practitioner")
                            })]
                        })]
                    })
                },
                j = e => {
                    let {
                        show: t,
                        onHide: n
                    } = e;
                    const l = (0, i.useNavigate)(),
                        a = (0, p.ZP)();
                    (0, s.useEffect)((() => {
                        t && (0, h.ZP)({
                            name: "patient_fastvc_disclaimer",
                            details: {
                                user_id: null === a || void 0 === a ? void 0 : a.id
                            }
                        })
                    }), [t]);
                    return (0, f.jsxs)(g.ZP, {
                        show: t,
                        title: r.Z.t("static_pages.homepage.virtual_consultation_disclaimer.title"),
                        onHide: n,
                        children: [(0, f.jsx)(g.Ng, {
                            children: (0, f.jsx)(_, {
                                onSearchPractitionerTap: () => {
                                    n(), l("/search-doctors")
                                }
                            })
                        }), (0, f.jsx)(g.ze, {
                            children: (0, f.jsx)(d.Z, {
                                onTap: () => l("/search-specialities?telehealthOnly=true"),
                                children: r.Z.t("common.actions.continue")
                            })
                        })]
                    })
                },
                Z = _;
            var w = n(990626),
                b = n(629535),
                y = n(169339),
                N = n(383915),
                C = n(968461),
                k = n(143318),
                S = n(992559),
                E = n(646975),
                P = n(849762),
                R = n(804233),
                T = n(619423),
                D = n(294910),
                A = n(134360);
            const O = e => {
                    let {
                        location: t,
                        onLocationTap: n
                    } = e;
                    const {
                        country: s,
                        city: l,
                        address: a
                    } = t, [i, o] = [a, l, s].filter(Boolean);
                    return (0, f.jsxs)(D.Z, {
                        onTap: () => {
                            (0, S.b)(t), n(t)
                        },
                        children: [(0, f.jsx)(v.Z, {
                            children: i
                        }), o ? (0, f.jsx)(v.Z, {
                            uiStyle: "body-s-bold",
                            component: "span",
                            className: "dl-margin-l",
                            children: o
                        }) : null]
                    })
                },
                $ = (0, s.memo)((e => {
                    let {
                        onLocationTap: t,
                        className: n
                    } = e;
                    const s = (0, S.E)();
                    return (0, f.jsxs)(f.Fragment, {
                        children: [s.length ? (0, f.jsx)(A.Z, {
                            children: (0, f.jsx)(v.Z, {
                                uiStyle: "body-s-bold",
                                className: n,
                                children: r.Z.t("patient_mobile.root.home.locations.recent")
                            })
                        }) : null, s.map(((e, n) => (0, f.jsx)(O, {
                            location: e,
                            onLocationTap: t
                        }, n)))]
                    })
                })),
                I = {
                    1: {
                        event: "patient_fastvc_disclaimer",
                        title: r.Z.t("static_pages.homepage.virtual_consultation_disclaimer.title"),
                        button: r.Z.t("common.actions.continue")
                    },
                    2: {
                        event: "patient_fastvc_speciality",
                        title: r.Z.t("patient_common.root.searchbar.speciality_search"),
                        button: r.Z.t("common.actions.continue")
                    },
                    3: {
                        event: "patient_fastvc_location",
                        title: r.Z.t("patient_common.root.searchbar.location_search"),
                        button: r.Z.t("common.search")
                    }
                },
                q = e => {
                    let {
                        show: t,
                        onHide: n,
                        redirectOnSearchPractitionerTap: l
                    } = e;
                    const [a, i] = (0, s.useState)("de" === (0, c.rZ)() ? 2 : 1), [o, m] = (0, s.useState)(), [u, x] = (0, s.useState)(""), [g, v] = (0, s.useState)(), [_, j] = (0, s.useState)(null), D = (0, p.ZP)(), A = (e, t) => (0, h.ZP)({
                        name: e,
                        details: {
                            user_id: null === D || void 0 === D ? void 0 : D.id,
                            ...t
                        }
                    });
                    (0, s.useEffect)((() => {
                        if (!t) return;
                        const {
                            event: e
                        } = I[a];
                        e && A(e, {
                            user_id: null === D || void 0 === D ? void 0 : D.id
                        })
                    }), [t, a]);
                    const O = () => {
                            i("de" === (0, c.rZ)() ? 2 : 1), v(void 0), m(void 0), x(""), j(null), n()
                        },
                        q = e => {
                            let t = {};
                            return _ ? t = { ...t,
                                ..._,
                                place_id: null
                            } : e && (t = { ...t,
                                ...e,
                                latitude: void 0,
                                longitude: void 0
                            }), o && (t.speciality = o.slug), t.ref_visit_motive_id = "fr" === (0, c.rZ)() ? w.ZP.TELEHEALTH_NEW_PATIENT_FR_ID : w.ZP.TELEHEALTH_NEW_PATIENT_DE_ID, e && (0, S.b)(e), T.Z.profiles.search(t).then((e => {
                                let {
                                    path: t
                                } = e;
                                window.location = t
                            }))
                        },
                        K = e => {
                            v(e), q(e)
                        };
                    return (0, f.jsxs)(y.Z, {
                        show: t,
                        title: I[a].title,
                        onHide: O,
                        className: "dl-video-consultation-flow-modal",
                        children: [(0, f.jsxs)(N.Z, {
                            children: [1 === a && (0, f.jsx)(Z, {
                                onSearchPractitionerTap: () => {
                                    O(), l && (window.location.pathname = "/")
                                }
                            }), 2 === a && (0, f.jsxs)(f.Fragment, {
                                children: [(0, f.jsx)("div", {
                                    className: "dl-video-consultation-input-container",
                                    children: (0, f.jsx)(E.U, {
                                        placeholder: r.Z.t("patient_common.root.searchbar.speciality_placeholder"),
                                        onChange: x,
                                        onSelect: (e, t) => {
                                            m(e), t || (A("patient_fastvc_speciality_select", {
                                                speciality_id: e.value
                                            }), i(a + 1))
                                        },
                                        dataFetcher: () => T.Z.search((0, b.Z)(u), {
                                            specialities_only: !0
                                        }).then((e => (0, k.Z)({
                                            input: u,
                                            output: e
                                        }))),
                                        className: "dl-video-consultation-flow-query-input dl-rounded-borders",
                                        value: u,
                                        focus: !0
                                    })
                                }), D && (0, f.jsx)(R.Z, {
                                    className: "dl-video-consultation-flow-suggestion",
                                    onDoctorTap: e => {
                                        let {
                                            link: t,
                                            id: n
                                        } = e;
                                        A("patient_fastvc_practitioner_select", {
                                            practitioner_id: n
                                        }), window.location = t
                                    },
                                    telehealthOnly: !0
                                })]
                            }), 3 === a && (0, f.jsxs)(f.Fragment, {
                                children: [(0, f.jsx)("div", {
                                    className: "dl-video-consultation-input-container",
                                    children: (0, f.jsx)(P._, {
                                        setSelectedLocation: K,
                                        onCurrentPositionSuccess: j,
                                        focus: !0,
                                        className: "dl-video-consultation-flow-place-input dl-rounded-borders"
                                    })
                                }), (0, f.jsx)($, {
                                    className: "dl-video-consultation-flow-suggestion",
                                    onLocationTap: K
                                })]
                            })]
                        }), (0, f.jsx)(C.Z, {
                            uiStyle: "normal",
                            children: (0, f.jsx)(d.Z, {
                                disabled: 2 === a && !o || 3 === a && !g && !_,
                                onTap: () => 3 === a ? q(g) : i(a + 1),
                                children: I[a].button
                            })
                        })]
                    })
                },
                K = e => {
                    let {
                        onClick: t,
                        className: n,
                        ...l
                    } = e;
                    const p = (0, i.useNavigate)(),
                        [h, u] = (0, s.useState)(!1),
                        x = (0, c.rl)() ? j : q;
                    return (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsxs)(d.Z, {
                            className: a()("dl-padding-16", n),
                            title: r.Z.t("patient_common.root.vc_patient_awareness.make_a_video_appointment"),
                            onClick: e => {
                                t(e), (0, c.rl)() && o.Z.config.telehealthPatientAwareness.showSpecialitySearch() ? p("/search-specialities?telehealthOnly=true") : u(!0)
                            },
                            ...l,
                            children: [!((0, c.rl)() && o.Z.config.telehealthPatientAwareness.hideIconOnMobile()) && (0, f.jsx)(m.Z, {
                                className: "dl-margin-r",
                                name: "solid/video"
                            }), r.Z.t("patient_common.root.vc_patient_awareness.make_a_video_appointment")]
                        }), (0, f.jsx)(x, {
                            show: h,
                            onHide: () => u(!1),
                            redirectOnSearchPractitionerTap: !0
                        })]
                    })
                }
        },
        487426: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var s = n(288802),
                l = n(445884),
                a = n(784600),
                i = n(406288),
                o = n(453040),
                r = n(814688);
            var c = n(785893);
            const d = () => (0, c.jsx)(a.Z, {
                className: "dl-paw-vc-cta-section dl-padding-0",
                children: (0, c.jsx)(i.Z, {
                    contentClassName: "dl-flex-column dl-align-items-center",
                    children: (0, c.jsx)("div", {
                        className: "dl-paw-vc-cta-container dl-rounded-borders dl-margin-0",
                        children: (0, c.jsxs)("div", {
                            className: "dl-paw-vc-cta-content dl-flex-center dl-flex-column dl-text-center",
                            children: [(0, c.jsx)(o.Z, {
                                color: "white",
                                uiStyle: "title-l-bold",
                                className: "dl-margin-b-8",
                                component: "h2",
                                children: l.Z.t("patient_common.root.vc_patient_awareness.video_consultation_cta.title")
                            }), (0, c.jsx)(r.Z, {
                                className: "dl-margin-t-32 dl-margin-b-8",
                                onClick: () => {
                                    var e;
                                    e = "bookVideoConsultationButtonTop", s.Z.trackGtmEvent({
                                        category: "landingPageVideoConsultation",
                                        action: e
                                    })
                                }
                            })]
                        })
                    })
                })
            })
        },
        234055: (e, t, n) => {
            n.d(t, {
                Z: () => C
            });
            var s = n(184481),
                l = n(24553),
                a = n(784600),
                i = n(406288),
                o = n(453040),
                r = n(511466),
                c = n(545763),
                d = n(845126),
                m = n(581971),
                p = n(528846),
                h = n(975645),
                u = n(883764),
                x = (n(868537), n(785893));
            const g = e => {
                let {
                    doctor: t,
                    ...n
                } = e;
                return (0, x.jsx)(a.Z, {
                    DEPRECATED_horizontal: !0,
                    className: "doctor-telehealth-card",
                    DEPRECATED_picture: t.cloudinary_public_id ? (0, x.jsx)(p.Z, {
                        rounded: !0,
                        src: (0, u.Z)(t.cloudinary_public_id, "w_62,h_62,c_fill,g_face")
                    }) : null,
                    ...n,
                    children: (0, x.jsxs)("div", {
                        className: "flex dl-align-items-center dl-justify-between",
                        children: [(0, x.jsxs)("div", {
                            className: "dl-overflow-hidden",
                            children: [(0, x.jsx)(m.Z, {
                                oneLine: !0,
                                children: (0, h.WU)(t)
                            }), (0, x.jsx)(o.Z, {
                                children: t.speciality
                            })]
                        }), (0, x.jsx)(d.Z, {
                            name: "solid/video",
                            className: "dl-margin-l dl-flex-shrink-zero",
                            color: "primary-110"
                        })]
                    })
                })
            };
            var v = n(800274),
                f = n(710270),
                _ = n(445884);
            var j = n(5212);
            const Z = e => {
                    let {
                        practitioners: t = []
                    } = e;
                    const n = (0, l.useNavigate)(),
                        a = (0, j.rl)(),
                        [i, r] = (0, s.useState)(a && t.length > 6);
                    return (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)(o.Z, {
                            uiStyle: "title-l-bold",
                            align: "center",
                            color: "white",
                            component: "h3",
                            className: "dl-margin-x-16",
                            children: _.Z.t("patient_common.root.patient_awareness.my_prats.logged_in.title", {
                                count: t.length
                            })
                        }), (0, x.jsxs)("div", {
                            className: "flex flex-wrap dl-justify-center dl-margin-t-24 dl-margin-x-16",
                            children: [t.slice(0, i ? 3 : void 0).map((e => (0, x.jsx)(g, {
                                doctor: e,
                                onTap: () => {
                                    a ? n(e.link) : window.location = e.link
                                }
                            }, e.id))), i && (0, x.jsx)(c.Z, {
                                block: !0,
                                uiStyle: "info-link",
                                onClick: () => r(!1),
                                className: "dl-margin-t-8 dl-rounded-borders-s",
                                children: _.Z.t("patient_common.root.patient_awareness.my_prats.see_more")
                            })]
                        })]
                    })
                },
                w = () => (0, x.jsxs)("div", {
                    className: "dl-margin-x-16",
                    children: [(0, x.jsx)(o.Z, {
                        uiStyle: "title-l-bold",
                        align: "center",
                        color: "white",
                        component: "h3",
                        children: _.Z.t("patient_common.root.patient_awareness.my_prats.logged_in.title", {
                            count: 0
                        })
                    }), (0, x.jsx)("div", {
                        className: "flex dl-justify-center dl-margin-t-16",
                        children: (0, x.jsx)(o.Z, {
                            uiStyle: "body-s-regular",
                            align: "center",
                            color: "white",
                            className: "dl-log-in-no-prats-text",
                            children: _.Z.t("patient_common.root.patient_awareness.my_prats.logged_in.tell_them_about_vc")
                        })
                    })]
                }),
                b = () => {
                    const {
                        data: e,
                        loading: t
                    } = (0, f.Z)({
                        url: "/account/my_video_consultation_practitioners.json"
                    });
                    return t ? (0, x.jsx)(r.Z, {
                        className: "dl-margin-y-16"
                    }) : e && 0 !== e.length ? (0, x.jsx)(Z, {
                        practitioners: e
                    }) : (0, x.jsx)(w, {})
                },
                y = () => {
                    const e = (0, j.rl)();
                    return (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)(o.Z, {
                            uiStyle: "title-l-bold",
                            align: "center",
                            color: "white",
                            component: "h3",
                            className: "dl-margin-x-16",
                            children: _.Z.t("patient_common.root.patient_awareness.my_prats.logged_out.title")
                        }), (0, x.jsxs)("div", {
                            className: "flex flex-wrap dl-justify-center dl-margin-t-32",
                            children: [(0, x.jsx)(c.Z, {
                                leftIcon: "user",
                                block: e,
                                className: "dl-margin-b dl-margin-x-16",
                                ...e ? {
                                    to: "/sessions/new"
                                } : {
                                    href: "/sessions/new"
                                },
                                children: _.Z.t("patient_common.root.telehealth.payment_form.no_account_block.login.link")
                            }), (0, x.jsx)(c.Z, {
                                uiStyle: "info-link",
                                leftIcon: "user-plus",
                                block: e,
                                className: "dl-margin-x-16 dl-rounded-borders-s",
                                ...e ? {
                                    to: "/sessions/new"
                                } : {
                                    href: "/sessions/new"
                                },
                                children: _.Z.t("patient_common.root.telehealth.account_creation.create_account")
                            })]
                        })]
                    })
                },
                N = (e, t) => (0, x.jsx)(a.Z, {
                    ref: t,
                    className: "dl-my-video-consultation-practitioners dl-padding-0",
                    children: (0, x.jsx)(i.Z, {
                        contentClassName: "dl-flex-column dl-align-items-center",
                        children: (0, x.jsx)("div", {
                            className: "dl-paw-vc-cta-container dl-rounded-borders dl-margin-0",
                            children: (0, x.jsx)("div", {
                                className: "dl-paw-vc-cta-content",
                                children: (0, v.ZP)() ? (0, x.jsx)(b, {}) : (0, x.jsx)(y, {})
                            })
                        })
                    })
                }),
                C = (0, s.forwardRef)(N)
        },
        792130: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var s = n(294184),
                l = n.n(s),
                a = n(184481),
                i = n.n(a),
                o = (n(728853), n(215827)),
                r = n(13912),
                c = n(360073),
                d = n(785893);
            class m extends i().Component {
                renderAnchor(e, t) {
                    return (0, d.jsx)(c.Z, { ...e,
                        className: l()(t, e.disabled && "disabled")
                    })
                }
                renderButton(e, t) {
                    let {
                        componentClass: n,
                        innerRef: s,
                        ...l
                    } = e;
                    const a = n || "button";
                    return (0, d.jsx)(a, { ...l,
                        ref: s,
                        type: l.type || "button",
                        className: t
                    })
                }
                render() {
                    const {
                        active: e,
                        block: t,
                        className: n,
                        ...s
                    } = this.props, [a, i] = (0, o.D9)(s), r = { ...(0, o.Nj)(a),
                        active: e,
                        [(0, o.O4)(a, "block")]: t
                    }, c = l()(n, r);
                    return i.href ? this.renderAnchor(i, c) : this.renderButton(i, c)
                }
            }
            m.defaultProps = {
                active: !1,
                block: !1,
                disabled: !1
            };
            const p = (0, o.Pn)("btn", (0, o.F6)([r.$u.LARGE, r.$u.SMALL, r.$u.XSMALL], (0, o.KS)([...Object.values(r.ZM), r.bg.DEFAULT, r.bg.PRIMARY, r.bg.LINK], r.bg.DEFAULT, m)))
        },
        866563: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var s = n(294184),
                l = n.n(s),
                a = n(184481),
                i = n.n(a),
                o = (n(304391), n(792130)),
                r = n(215827),
                c = n(785893);
            class d extends i().Component {
                render() {
                    const {
                        block: e,
                        justified: t,
                        vertical: n,
                        className: s,
                        ...a
                    } = this.props, [i, d] = (0, r.D9)(a), m = { ...(0, r.Nj)(i),
                        [(0, r.O4)(i)]: !n,
                        [(0, r.O4)(i, "vertical")]: n,
                        [(0, r.O4)(i, "justified")]: t,
                        [(0, r.O4)(o.Z.defaultProps, "block")]: e
                    };
                    return (0, c.jsx)("div", { ...d,
                        className: l()(s, m)
                    })
                }
            }
            d.defaultProps = {
                block: !1,
                justified: !1,
                vertical: !1
            };
            const m = (0, r.Pn)("btn-group", d)
        },
        196738: (e, t, n) => {
            n.d(t, {
                Z: () => T
            });
            var s = n(294184),
                l = n.n(s),
                a = n(243844),
                i = n(427537),
                o = n.n(i),
                r = n(184481),
                c = n.n(r),
                d = n(45697),
                m = n.n(d),
                p = n(304391),
                h = n.n(p),
                u = n(728853),
                x = n.n(u),
                g = n(655638),
                v = n.n(g),
                f = n(618977),
                _ = n(866563),
                j = n(470313),
                Z = n(477349),
                w = n(215827),
                b = n(442571),
                y = n(729771),
                N = n(792010),
                C = n(785893);
            const k = Z.Z.defaultProps.bsRole,
                S = j.Z.defaultProps.bsRole,
                E = (m().bool, v()(m().oneOfType([m().string, m().number])), x(), h()((0, y.zg)(k, S), (0, y.b4)(S)), m().bool, m().bool, m().bool, m().bool, m().func, m().func, m().string, m().oneOf(["click", "mousedown"]), m().func, m().func, {
                    componentClass: _.Z
                });
            class P extends c().Component {
                constructor(e, t) {
                    super(e, t), this.handleClick = this.handleClick.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleClose = this.handleClose.bind(this), this.lastOpenEventType = null
                }
                componentDidMount() {
                    this.focusNextOnOpen()
                }
                getSnapshotBeforeUpdate(e) {
                    return !(!e.open || this.props.open || !(0, a.r3)(this.menuUlRef, (0, a.AW)(document)))
                }
                componentDidUpdate(e, t, n) {
                    const {
                        open: s
                    } = this.props, l = e.open;
                    s && !l && this.focusNextOnOpen(), !s && l && n && this.focus()
                }
                focus() {
                    const e = this.toggleRef;
                    e && e.focus && e.focus()
                }
                focusNextOnOpen() {
                    const e = this.menu;
                    e && e.focusNext && ("keydown" !== this.lastOpenEventType && "menuitem" !== this.props.role || e.focusNext())
                }
                handleClick(e) {
                    this.props.disabled || this.toggleOpen(e, {
                        source: "click"
                    })
                }
                handleClose(e, t) {
                    this.props.open && this.toggleOpen(e, t)
                }
                handleKeyDown(e) {
                    if (!this.props.disabled) switch (e.keyCode) {
                        case o().codes.down:
                            this.props.open ? this.menu.focusNext && this.menu.focusNext() : this.toggleOpen(e, {
                                source: "keydown"
                            }), e.preventDefault();
                            break;
                        case o().codes.esc:
                        case o().codes.tab:
                            this.handleClose(e, {
                                source: "keydown"
                            })
                    }
                }
                toggleOpen(e, t) {
                    const n = !this.props.open;
                    n && (this.lastOpenEventType = t.source), this.props.onToggle && this.props.onToggle(n, e, t)
                }
                renderMenu(e, t) {
                    let {
                        id: n,
                        onSelect: s,
                        rootCloseEvent: l,
                        ...a
                    } = t, i = e => {
                        this.menu = e
                    };
                    return i = (0, b.Z)(e.ref, i), (0, r.cloneElement)(e, { ...a,
                        ref: i,
                        innerRef: e => {
                            this.menuUlRef = e
                        },
                        labelledBy: n,
                        bsClass: (0, w.O4)(a, "menu"),
                        onClose: (0, b.Z)(e.props.onClose, this.handleClose),
                        onSelect: (0, b.Z)(e.props.onSelect, s, ((e, t) => this.handleClose(t, {
                            source: "select"
                        }))),
                        rootCloseEvent: l
                    })
                }
                renderToggle(e, t) {
                    return (0, r.cloneElement)(e, { ...t,
                        ref: e.ref,
                        innerRef: e => {
                            this.toggleRef = e
                        },
                        bsClass: (0, w.O4)(t, "toggle"),
                        onClick: (0, b.Z)(e.props.onClick, this.handleClick),
                        onKeyDown: (0, b.Z)(e.props.onKeyDown, this.handleKeyDown)
                    })
                }
                render() {
                    const {
                        componentClass: e,
                        id: t,
                        dropup: n,
                        disabled: s,
                        pullRight: a,
                        open: i,
                        onSelect: o,
                        role: r,
                        bsClass: c,
                        className: d,
                        rootCloseEvent: m,
                        children: p,
                        ...h
                    } = this.props;
                    delete h.onToggle;
                    const u = {
                        [c]: !0,
                        open: i,
                        disabled: s
                    };
                    return n && (u[c] = !1, u.dropup = !0), (0, C.jsx)(e, { ...h,
                        className: l()(d, u),
                        children: N.Z.map(p, (e => {
                            switch (e.props.bsRole) {
                                case k:
                                    return this.renderToggle(e, {
                                        id: t,
                                        disabled: s,
                                        open: i,
                                        role: r,
                                        bsClass: c
                                    });
                                case S:
                                    return this.renderMenu(e, {
                                        id: t,
                                        open: i,
                                        pullRight: a,
                                        bsClass: c,
                                        onSelect: o,
                                        rootCloseEvent: m
                                    });
                                default:
                                    return e
                            }
                        }))
                    })
                }
            }
            P.defaultProps = E, (0, w.Pn)("dropdown", P);
            const R = (0, f.nm)(P, {
                open: "onToggle"
            });
            R.Toggle = Z.Z, R.Menu = j.Z;
            const T = R
        },
        470313: (e, t, n) => {
            n.d(t, {
                Z: () => x
            });
            var s = n(294184),
                l = n.n(s),
                a = n(427537),
                i = n.n(a),
                o = n(184481),
                r = n.n(o),
                c = n(446989),
                d = n(215827),
                m = n(442571),
                p = n(792010),
                h = n(785893);
            class u extends r().Component {
                constructor(e) {
                    var t, n, s;
                    super(e), s = e => {
                        this.ulRef = e, this.props.innerRef(e)
                    }, (n = "getRef") in (t = this) ? Object.defineProperty(t, n, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = s, this.handleRootClose = this.handleRootClose.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this)
                }
                getFocusableMenuItems() {
                    const e = this.ulRef;
                    return e ? Array.from(e.querySelectorAll('[tabIndex="-1"]')) : []
                }
                getItemsAndActiveIndex() {
                    const e = this.getFocusableMenuItems(),
                        t = e.indexOf(document.activeElement);
                    return {
                        items: e,
                        activeIndex: t
                    }
                }
                focusNext() {
                    const {
                        items: e,
                        activeIndex: t
                    } = this.getItemsAndActiveIndex();
                    if (0 === e.length) return;
                    e[t === e.length - 1 ? 0 : t + 1].focus()
                }
                focusPrevious() {
                    const {
                        items: e,
                        activeIndex: t
                    } = this.getItemsAndActiveIndex();
                    if (0 === e.length) return;
                    e[0 === t ? e.length - 1 : t - 1].focus()
                }
                handleKeyDown(e) {
                    switch (e.keyCode) {
                        case i().codes.down:
                            this.focusNext(), e.preventDefault();
                            break;
                        case i().codes.up:
                            this.focusPrevious(), e.preventDefault();
                            break;
                        case i().codes.esc:
                        case i().codes.tab:
                            this.props.onClose(e, {
                                source: "keydown"
                            })
                    }
                }
                handleRootClose(e) {
                    this.props.onClose(e, {
                        source: "rootClose"
                    })
                }
                render() {
                    const {
                        open: e,
                        pullRight: t,
                        labelledBy: n,
                        onSelect: s,
                        className: a,
                        rootCloseEvent: i,
                        children: o,
                        ...u
                    } = this.props, [x, g] = (0, d.vD)(u, ["onClose", "innerRef"]), v = { ...(0, d.Nj)(x),
                        [(0, d.O4)(x, "right")]: t
                    };
                    return (0, h.jsx)(c.Z, {
                        disabled: !e,
                        onRootClose: this.handleRootClose,
                        event: i,
                        children: (0, h.jsx)("ul", { ...g,
                            ref: this.getRef,
                            role: "menu",
                            className: l()(a, v),
                            "aria-labelledby": n,
                            children: p.Z.map(o, (e => r().cloneElement(e, {
                                onKeyDown: (0, m.Z)(e.props.onKeyDown, this.handleKeyDown),
                                onSelect: (0, m.Z)(e.props.onSelect, s)
                            })))
                        })
                    })
                }
            }
            u.defaultProps = {
                bsRole: "menu",
                pullRight: !1
            };
            const x = (0, d.Pn)("dropdown-menu", u)
        },
        477349: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var s = n(184481),
                l = n.n(s),
                a = n(294184),
                i = n.n(a),
                o = n(792130),
                r = n(360073),
                c = n(215827),
                d = n(785893);
            class m extends l().Component {
                render() {
                    const {
                        noCaret: e,
                        open: t,
                        useAnchor: n,
                        bsClass: s,
                        className: l,
                        children: a,
                        ...c
                    } = this.props;
                    delete c.bsRole;
                    const m = n ? r.Z : o.Z,
                        p = !e;
                    return (0, d.jsxs)(m, { ...c,
                        role: "button",
                        className: i()(l, s),
                        "aria-haspopup": !0,
                        "aria-expanded": t,
                        children: [a || c.title, p && " ", p && (0, d.jsx)("span", {
                            className: "caret"
                        })]
                    })
                }
            }
            m.defaultProps = {
                open: !1,
                useAnchor: !1,
                bsRole: "toggle"
            };
            const p = (0, c.Pn)("dropdown-toggle", m)
        },
        260902: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var s = n(294184),
                l = n.n(s),
                a = n(184481),
                i = n.n(a),
                o = (n(304391), n(360073)),
                r = n(215827),
                c = n(442571),
                d = n(785893);
            class m extends i().Component {
                constructor(e, t) {
                    super(e, t), this.handleClick = this.handleClick.bind(this)
                }
                handleClick(e) {
                    const {
                        href: t,
                        disabled: n,
                        onSelect: s,
                        eventKey: l
                    } = this.props;
                    t && !n || e.preventDefault(), n || s && s(l, e)
                }
                render() {
                    const {
                        active: e,
                        disabled: t,
                        divider: n,
                        header: s,
                        onClick: a,
                        className: i,
                        style: m,
                        ...p
                    } = this.props, [h, u] = (0, r.vD)(p, ["eventKey", "onSelect"]);
                    return n ? (u.children = void 0, (0, d.jsx)("li", { ...u,
                        role: "separator",
                        className: l()(i, "divider"),
                        style: m
                    })) : s ? (0, d.jsx)("li", { ...u,
                        role: "heading",
                        className: l()(i, (0, r.O4)(h, "header")),
                        style: m
                    }) : (0, d.jsx)("li", {
                        role: "presentation",
                        className: l()(i, {
                            active: e,
                            disabled: t
                        }),
                        style: m,
                        children: (0, d.jsx)(o.Z, { ...u,
                            role: "menuitem",
                            tabIndex: "-1",
                            onClick: (0, c.Z)(a, this.handleClick)
                        })
                    })
                }
            }
            m.defaultProps = {
                divider: !1,
                disabled: !1,
                header: !1
            };
            const p = (0, r.Pn)("dropdown", m)
        },
        360073: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var s = n(184481),
                l = n.n(s),
                a = (n(728853), n(442571)),
                i = n(785893);

            function o(e) {
                return !e || "#" === e.trim()
            }
            class r extends l().Component {
                constructor(e, t) {
                    super(e, t), this.handleClick = this.handleClick.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this)
                }
                handleClick(e) {
                    const {
                        disabled: t,
                        href: n,
                        onClick: s
                    } = this.props;
                    (t || o(n)) && e.preventDefault(), t ? e.stopPropagation() : s && s(e)
                }
                handleKeyDown(e) {
                    " " === e.key && (e.preventDefault(), this.handleClick(e))
                }
                render() {
                    const {
                        componentClass: e,
                        disabled: t,
                        onKeyDown: n,
                        innerRef: s,
                        ...l
                    } = this.props;
                    return o(l.href) && (l.role = l.role || "button", l.href = l.href || "#"), t && (l.tabIndex = -1, l.style = {
                        pointerEvents: "none",
                        ...l.style
                    }), (0, i.jsx)(e, { ...l,
                        ref: s,
                        onClick: this.handleClick,
                        onKeyDown: (0, a.Z)(this.handleKeyDown, n)
                    })
                }
            }
            r.defaultProps = {
                componentClass: "a"
            };
            const c = r
        },
        729771: (e, t, n) => {
            n.d(t, {
                b4: () => c,
                zg: () => r
            });
            var s = n(45697),
                l = n.n(s),
                a = n(682613),
                i = n.n(a),
                o = n(792010);
            l().oneOfType([l().string, l().number]);

            function r() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return i()(((e, n, s) => {
                    let l;
                    return t.every((t => !!o.Z.some(e.children, (e => e.props.bsRole === t)) || (l = t, !1))), l ? new Error(`(children) ${s} - Missing a required child with bsRole: ${l}. ${s} must have at least one child of each of the following bsRoles: ${t.join(", ")}`) : null
                }))
            }

            function c() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return i()(((e, n, s) => {
                    let l;
                    return t.every((t => !(o.Z.filter(e.children, (e => e.props.bsRole === t)).length > 1) || (l = t, !1))), l ? new Error(`(children) ${s} - Duplicate children detected of bsRole: ${l}. Only one child each allowed with the following bsRoles: ${t.join(", ")}`) : null
                }))
            }
        },
        792010: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var s = n(184481),
                l = n.n(s);
            const a = {
                map: function(e, t, n) {
                    let s = 0;
                    return l().Children.map(e, (e => l().isValidElement(e) ? t.call(n, e, s++) : e))
                },
                forEach: function(e, t, n) {
                    let s = 0;
                    l().Children.forEach(e, (e => {
                        l().isValidElement(e) && t.call(n, e, s++)
                    }))
                },
                count: function(e) {
                    let t = 0;
                    return l().Children.forEach(e, (e => {
                        l().isValidElement(e) && ++t
                    })), t
                },
                find: function(e, t, n) {
                    let s, a = 0;
                    return l().Children.forEach(e, (e => {
                        s || l().isValidElement(e) && t.call(n, e, a++) && (s = e)
                    })), s
                },
                filter: function(e, t, n) {
                    let s = 0;
                    const a = [];
                    return l().Children.forEach(e, (e => {
                        l().isValidElement(e) && t.call(n, e, s++) && a.push(e)
                    })), a
                },
                every: function(e, t, n) {
                    let s = 0,
                        a = !0;
                    return l().Children.forEach(e, (e => {
                        a && l().isValidElement(e) && (t.call(n, e, s++) || (a = !1))
                    })), a
                },
                some: function(e, t, n) {
                    let s = 0,
                        a = !1;
                    return l().Children.forEach(e, (e => {
                        a || l().isValidElement(e) && t.call(n, e, s++) && (a = !0)
                    })), a
                },
                toArray: function(e) {
                    const t = [];
                    return l().Children.forEach(e, (e => {
                        l().isValidElement(e) && t.push(e)
                    })), t
                }
            }
        },
        306775: () => {}
    }
]);
//# sourceMappingURL=../97432-a8dc66e2615778629018.js.map