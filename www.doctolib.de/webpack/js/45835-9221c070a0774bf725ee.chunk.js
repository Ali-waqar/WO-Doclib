(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [45835], {
        130941: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var s, a, l, i = n(184481),
                r = n(294184),
                o = n.n(r),
                c = n(618446),
                d = n.n(c),
                m = n(785893);
            class h extends i.PureComponent {
                componentDidMount() {
                    Boolean(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) && this.requestUserMedia()
                }
                componentDidUpdate(e) {
                    d()(this.props.audioConstraints, e.audioConstraints) && d()(this.props.videoConstraints, e.videoConstraints) || this.requestUserMedia()
                }
                componentWillUnmount() {
                    this.props.innerRef.current && this.props.innerRef.current.srcObject && this.props.innerRef.current.srcObject.getTracks().forEach((e => e.stop()))
                }
                async requestUserMedia() {
                    const {
                        audioConstraints: e,
                        videoConstraints: t
                    } = this.props, n = { ...e,
                        ...t
                    };
                    try {
                        const e = await navigator.mediaDevices.getUserMedia(n);
                        this.props.innerRef.current.srcObject = e
                    } catch (e) {
                        this.props.onFailure && this.props.onFailure(e)
                    }
                }
                render() {
                    return (0, m.jsx)("video", {
                        autoPlay: !0,
                        onPlaying: this.props.onReady,
                        className: o()(this.props.className, "snapshot-hide"),
                        muted: !0,
                        playsInline: !0,
                        ref: this.props.innerRef,
                        "data-design-system": "base"
                    })
                }
            }
            l = {
                className: "",
                audioConstraints: {
                    audio: !0
                },
                videoConstraints: {
                    video: !0
                }
            }, (a = "defaultProps") in (s = h) ? Object.defineProperty(s, a, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : s[a] = l;
            const u = (0, i.forwardRef)(((e, t) => (0, m.jsx)(h, {
                innerRef: t,
                ...e
            })))
        },
        497846: (e, t, n) => {
            "use strict";
            n.d(t, {
                $U: () => d,
                $j: () => c,
                cv: () => m
            });
            var s = n(184481),
                a = n(977954),
                l = n.n(a),
                i = n(445884),
                r = n(329487),
                o = n(785893);
            const c = e => {
                    let {
                        dataUrl: t,
                        ...n
                    } = e;
                    const [a, l] = (0, s.useState)(!0);
                    return a ? (0, o.jsx)(r.FN, {
                        onHide: () => l(!1),
                        message: (0, o.jsxs)("div", {
                            className: "flex dl-align-items-center",
                            children: [(0, o.jsx)("img", {
                                src: t,
                                className: "dl-height-5-unit",
                                alt: "snapshot"
                            }), (0, o.jsx)("div", {
                                className: "dl-padding-x-16",
                                children: i.Z.t("common.telehealth.snapshot_taken")
                            })]
                        }),
                        ...n
                    }) : null
                },
                d = e => {
                    var t;
                    if (null === e || void 0 === e || null === (t = e.current) || void 0 === t || !t.node) return null;
                    const n = e.current.node.querySelector("video");
                    if (!n) return null;
                    const s = document.createElement("canvas");
                    s.height = n.videoHeight, s.width = n.videoWidth;
                    return s.getContext("2d").drawImage(n, 0, 0, s.width, s.height), s
                },
                m = e => e.toBlob((e => {
                    const t = l()().localize("DD/MM/YYYY HH[h]mm");
                    ((e, t) => {
                        const n = document.createElement("a"),
                            s = window.URL.createObjectURL(e);
                        n.style = "display: none", n.href = s, n.download = t, document.body.appendChild(n), n.click(), window.URL.revokeObjectURL(s), n.remove()
                    })(e, `${i.Z.t("common.telehealth.snapshot_prefix")}-${t}.png`)
                }))
        },
        835866: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var s = n(177140),
                a = n(453040);
            const l = n.p + "48ef967cf8c33a5af767.png";
            var i = n(445884),
                r = n(5212),
                o = n(785893);
            const c = () => {
                if (s.gO) return s.G6 ? i.Z.t("common.telehealth.setup.update_ios") : (0, o.jsxs)("div", {
                    className: "flex dl-align-items-center",
                    children: [(0, o.jsx)("img", {
                        src: l,
                        alt: "",
                        style: {
                            height: 44,
                            width: 44,
                            display: "block"
                        }
                    }), (0, o.jsx)(a.Z, {
                        className: "dl-padding-x-16 dl-flex-grow",
                        children: i.Z.t("common.telehealth.setup.use_safari")
                    })]
                });
                if ((0, r.rl)()) return null;
                if (s.G6 || s.i7) return i.Z.t("common.telehealth.setup.update_browser");
                const e = "macOS" === s.Uh.os.name ? "Safari" : "Chrome";
                return i.Z.t("common.telehealth.setup.download_real_browser", {
                    browser: e
                })
            }
        },
        432107: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => x
            });
            var s = n(445884),
                a = n(528846),
                l = n(164544),
                i = n(784600),
                r = n(929014),
                o = n(511466),
                c = n(453040),
                d = n(883764),
                m = n(520711),
                h = n(710270),
                u = n(857152),
                p = n(822895),
                f = n(893157);
            var v = n(785893);
            const x = e => {
                let {
                    patient_setup_issues: t,
                    onClose: n,
                    appointment_id: x
                } = e;
                (0, h.Z)({
                    url: `/patient_app/video_chats/${x}`,
                    method: "put",
                    body: {
                        video_chat: {
                            status: u.i3
                        }
                    }
                });
                const [g = {}] = (0, m.Z)({
                    url: `/patient_app/video_chats/${x}`,
                    delay: 45e3,
                    until: e => e.delay
                }), {
                    profile: w
                } = g, Z = t && t.includes("camera") && t.includes("micro");
                return w ? (0, v.jsx)(f.Z, {
                    title: s.Z.t("common.telehealth.please_wait"),
                    onBack: () => {
                        (0, p.y)(x, "close_waiting_room"), n()
                    },
                    children: w && (0, v.jsxs)(l.Z, {
                        children: [(0, v.jsxs)(i.Z, {
                            className: "dl-margin-16",
                            children: [(0, v.jsxs)("div", {
                                children: [(0, v.jsx)("div", {
                                    className: "dl-pulsing-loader-container snapshot-hide",
                                    children: (0, v.jsx)("div", {
                                        className: "dl-pulsing-loader",
                                        children: (0, v.jsx)(a.Z, {
                                            rounded: !0,
                                            src: (0, d.Z)(w.cloudinary_public_id, "w_138,h_138,c_fill,g_face"),
                                            alt: ""
                                        })
                                    })
                                }), (0, v.jsx)(c.Z, {
                                    uiStyle: "title-s-bold",
                                    align: "center",
                                    className: "dl-margin-y-16",
                                    children: s.Z.t("patient_common.root.telehealth.waiting_room_title", {
                                        name: w.name_with_title
                                    })
                                }), (0, v.jsx)(c.Z, {
                                    uiStyle: "DEPRECATED-hint",
                                    align: "center",
                                    children: s.Z.t("patient_common.root.telehealth.waiting_room_description", {
                                        name: w.name_with_title
                                    })
                                }), (0, v.jsx)(c.Z, {
                                    uiStyle: "DEPRECATED-hint",
                                    align: "center",
                                    style: {
                                        paddingTop: 0
                                    },
                                    children: s.Z.t("patient_common.root.telehealth.waiting_room_advice")
                                })]
                            }), Z && (0, v.jsx)(r.Z, {
                                variant: "deprecated-alert-interface",
                                uiStyle: "error",
                                className: "dl-margin-t-16",
                                children: s.Z.t("common.telehealth.no_media_html")
                            })]
                        }), g && g.delay ? (0, v.jsx)(i.Z, {
                            className: "dl-margin-16",
                            children: (0, v.jsx)(c.Z, {
                                color: "warning-090",
                                align: "center",
                                children: s.Z.t("common.telehealth.delay", {
                                    delay: g.delay,
                                    name: w.name_with_title,
                                    startDate: g.start_time
                                })
                            })
                        }) : null]
                    })
                }) : (0, v.jsx)(o.Z, {})
            }
        },
        14570: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var s = n(778075),
                a = n(445884),
                l = n(785893);
            const i = e => {
                let {
                    show: t,
                    onDismiss: n,
                    onConfirm: i
                } = e;
                return (0, l.jsx)(s.Z, {
                    title: a.Z.t("common.telehealth.hangup_dialog.title"),
                    dismissText: a.Z.t("common.actions.cancel"),
                    onDismiss: n,
                    acceptText: a.Z.t("common.telehealth.hangup_dialog.confirm"),
                    onAccept: i,
                    show: t,
                    children: a.Z.t("common.telehealth.hangup_dialog.body")
                })
            }
        },
        136171: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var s = n(445884),
                a = n(453040),
                l = n(845126),
                i = n(778075),
                r = n(785893);
            const o = e => {
                let {
                    show: t,
                    onConfirm: n,
                    onDismiss: o
                } = e;
                return (0, r.jsxs)(i.Z, {
                    title: s.Z.t("common.telehealth.screen_sharing_dialog.title"),
                    dismissText: s.Z.t("common.telehealth.screen_sharing_dialog.cancel"),
                    onDismiss: o,
                    acceptText: s.Z.t("common.telehealth.screen_sharing_dialog.confirm"),
                    onAccept: n,
                    show: t,
                    children: [(0, r.jsxs)("div", {
                        className: "flex dl-margin-b",
                        children: [(0, r.jsx)(l.Z, {
                            name: "solid/triangle-exclamation",
                            color: "error-090",
                            size: "xsmall",
                            className: "dl-margin-r-8 dl-margin-t-4"
                        }), (0, r.jsx)(a.Z, {
                            align: "left",
                            children: s.Z.t("common.telehealth.screen_sharing_dialog.warning_data_leak_html")
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex dl-margin-b",
                        children: [(0, r.jsx)(l.Z, {
                            name: "mobile",
                            size: "xsmall",
                            className: "dl-margin-r-8 dl-margin-t-4"
                        }), (0, r.jsx)(a.Z, {
                            align: "left",
                            children: s.Z.t("common.telehealth.screen_sharing_dialog.zoom_for_mobile_html")
                        })]
                    })]
                })
            }
        },
        953008: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var s = n(445884),
                a = n(778075),
                l = n(785893);
            const i = e => {
                let {
                    show: t,
                    onHide: n,
                    onTap: i
                } = e;
                return (0, l.jsx)(a.Z, {
                    title: s.Z.t("common.telehealth.dialog_connection_issue_title"),
                    dismissText: s.Z.t("common.actions.cancel"),
                    onDismiss: n,
                    acceptText: s.Z.t("common.actions.restart"),
                    onAccept: i,
                    show: t,
                    children: s.Z.t("common.telehealth.connection_issue_warning")
                })
            }
        },
        284295: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => U
            });
            var s = n(23279),
                a = n.n(s),
                l = n(445884),
                i = n(591035),
                r = n(545763),
                o = n(845126),
                c = n(453040),
                d = n(758025),
                m = n.n(d),
                h = n(446042),
                u = n.n(h),
                p = n(442609),
                f = n.n(p),
                v = n(123246),
                x = n.n(v),
                g = n(154526),
                w = n.n(g),
                Z = n(506505),
                j = n.n(Z),
                _ = n(723409),
                E = n.n(_),
                b = n(570557),
                y = n.n(b),
                k = n(336954),
                S = n.n(k),
                N = n(281524),
                z = n.n(N),
                C = n(184481),
                R = n(177140),
                T = n(822895);
            const A = e => {
                let {
                    appointmentId: t,
                    isPatient: n
                } = e;
                const [s, a] = (0, C.useState)(!1), [l, i] = (0, C.useState)(!0);
                (0, C.useEffect)((() => {
                    n ? (0, R.PW)().then((e => a(e.video.length >= 2))).catch(console.error) : window.OT && window.OT.checkScreenSharingCapability((e => {
                        (0, T.y)(t, "screen_sharing", {
                            capable: e.supported
                        }), e.supported && !1 !== e.extensionRegistered || i(!1)
                    }))
                }), []);
                return {
                    pip: (0, C.useMemo)((() => !n && Boolean("pictureInPictureEnabled" in document)), []),
                    cameraSwitch: s,
                    fullscreen: (0, C.useMemo)((() => document.webkitFullscreenEnabled || document.fullscreenEnabled), []),
                    snapshot: !n,
                    screenSharing: !n && l
                }
            };
            var M = n(977954),
                P = n.n(M),
                O = n(321964),
                I = n(8955);
            var D = n(785893);
            const V = e => {
                let {
                    id: t
                } = e;
                const n = `timer_start_${t}`,
                    [s, a] = (0, C.useState)(I.U2(n) || 0);
                return (0, O.Z)((() => {
                    a(s + 1), I.t8(n, s)
                }), 1e3), (0, D.jsx)("div", {
                    className: "dl-timer snapshot-hide",
                    children: P()().startOf("day").second(s).format("mm:ss")
                })
            };
            var H = n(294184),
                F = n.n(H);
            const L = [3, 6, 10, 15, 8, 12, 4],
                B = e => {
                    let {
                        audioLevelEnabled: t,
                        on: n
                    } = e;
                    return n ? (0, D.jsx)("div", {
                        className: "dl-audio-level-control",
                        children: L.map((e => (0, D.jsx)("div", {
                            className: F()("dl-audio-level-control-dot", {
                                "dl-audio-level-control-dot-sound": t
                            }),
                            style: {
                                height: `${t?e:3}px`
                            }
                        }, e)))
                    }) : (0, D.jsx)("div", {
                        className: "dl-audio-level-control",
                        children: (0, D.jsx)(u(), {})
                    })
                },
                U = e => {
                    let {
                        audio: t,
                        video: n,
                        screenSharing: s,
                        fullscreen: d,
                        cameraSwitchDisabled: h,
                        onHangup: p,
                        onToggle: v,
                        deviceState: g,
                        videoChat: Z,
                        isPatient: _,
                        onSnapshot: b,
                        audioLevelEnabled: k,
                        subscriberMicIsOn: N,
                        toggleScreenSharing: C,
                        isEhr: R
                    } = e;
                    const T = A({
                        appointmentId: Z.appointment_id,
                        isPatient: _
                    });
                    return (0, D.jsxs)(D.Fragment, {
                        children: [(0, D.jsxs)("div", {
                            className: "dl-video-chat-extra-controls",
                            children: [T.fullscreen && (0, D.jsx)(r.Z, {
                                circle: !0,
                                DEPRECATED_outline: !0,
                                uiStyle: "white",
                                size: R ? "small" : void 0,
                                onTap: v("fullscreen"),
                                title: l.Z.t("common.telehealth.fullscreen_mode"),
                                "data-walkme": "video-consultation-fullscreen",
                                children: d ? (0, D.jsx)(z(), {}) : (0, D.jsx)(y(), {})
                            }), T.pip && (0, D.jsx)(r.Z, {
                                circle: !0,
                                DEPRECATED_outline: !0,
                                uiStyle: "white",
                                size: R ? "small" : void 0,
                                onTap: v("pip"),
                                title: l.Z.t("common.actions.minimize"),
                                "data-walkme": "video-consultation-pip",
                                children: (0, D.jsx)(E(), {})
                            }), T.cameraSwitch && (0, D.jsx)(r.Z, {
                                circle: !0,
                                DEPRECATED_outline: !0,
                                uiStyle: "white",
                                size: R ? "small" : void 0,
                                onTap: v("cameraSwitch"),
                                title: l.Z.t("common.telehealth.switch_camera"),
                                disabled: h,
                                children: (0, D.jsx)(f(), {})
                            }), T.snapshot && (0, D.jsx)(r.Z, {
                                circle: !0,
                                DEPRECATED_outline: !0,
                                uiStyle: "white",
                                size: R ? "small" : void 0,
                                onTap: a()(b, 800),
                                title: l.Z.t("common.actions.take_snapshot"),
                                "data-walkme": "video-consultation-snapshot",
                                children: (0, D.jsx)(S(), {})
                            }), T.screenSharing && (0, D.jsx)(r.Z, {
                                circle: !0,
                                DEPRECATED_outline: !0,
                                uiStyle: "white",
                                size: R ? "small" : void 0,
                                onTap: () => C(),
                                "data-walkme": "video-consultation-share-screen",
                                title: l.Z.t("common.telehealth.share_screen"),
                                children: (0, D.jsx)(o.Z, {
                                    color: s ? "error-090" : null,
                                    name: "solid/screenshare",
                                    size: "medium"
                                })
                            })]
                        }), (0, D.jsxs)("div", {
                            className: "dl-video-chat-top-right-info",
                            children: [(0, D.jsx)(B, {
                                audioLevelEnabled: k,
                                on: N
                            }), _ ? null : (0, D.jsx)(V, {
                                id: Z.appointment_id
                            })]
                        }), (0, D.jsxs)("div", {
                            className: "dl-video-chat-bottom-controls",
                            children: [s && (0, D.jsxs)("div", {
                                className: "dl-video-chat-screensharing-bar",
                                children: [(0, D.jsx)(o.Z, {
                                    name: "solid/screenshare",
                                    size: "medium"
                                }), (0, D.jsx)(c.Z, {
                                    children: l.Z.t("common.telehealth.screen_sharing.ongoing")
                                }), (0, D.jsxs)(r.Z, {
                                    uiStyle: "danger",
                                    square: !0,
                                    onClick: C,
                                    children: [(0, D.jsx)(o.Z, {
                                        name: "solid/circle-stop",
                                        size: "medium"
                                    }), l.Z.t("common.telehealth.screen_sharing.stop")]
                                })]
                            }), (0, D.jsxs)("div", {
                                className: "dl-video-chat-controls",
                                children: [_ && (0, D.jsx)("div", {
                                    className: "dl-video-chat-context",
                                    children: (0, D.jsx)(i.Z, {
                                        compact: !0,
                                        doctor: Z.profile
                                    })
                                }), (0, D.jsx)(r.Z, {
                                    circle: !0,
                                    DEPRECATED_outline: !0,
                                    uiStyle: t ? "white" : "danger",
                                    size: R ? "small" : void 0,
                                    title: l.Z.t(t ? "mic_off" : "mic_on", {
                                        scope: "common.telehealth"
                                    }),
                                    onTap: v("audio"),
                                    disabled: !g || !g.audio.working,
                                    "data-walkme": "video-consultation-audio-toggle",
                                    children: t ? (0, D.jsx)(m(), {}) : (0, D.jsx)(u(), {})
                                }), (0, D.jsx)(r.Z, {
                                    circle: !0,
                                    uiStyle: "danger",
                                    onClick: p,
                                    title: l.Z.t("common.telehealth.hangup"),
                                    className: R ? "dl-video-chat-hangup-small" : "dl-video-chat-hangup",
                                    "data-walkme": "video-consultation-hangup",
                                    children: (0, D.jsx)(j(), {})
                                }), (0, D.jsx)(r.Z, {
                                    circle: !0,
                                    DEPRECATED_outline: !0,
                                    uiStyle: n ? "white" : "danger",
                                    size: R ? "small" : void 0,
                                    onTap: v("video"),
                                    title: l.Z.t(n ? "cam_off" : "cam_on", {
                                        scope: "common.telehealth"
                                    }),
                                    disabled: !g || !g.video.working || s,
                                    "data-walkme": "video-consultation-video-toggle",
                                    children: n ? (0, D.jsx)(x(), {}) : (0, D.jsx)(w(), {})
                                })]
                            })]
                        })]
                    })
                }
        },
        971691: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var s = n(184481),
                a = n(445884),
                l = n(990626),
                i = n(185221),
                r = n(5212),
                o = n(591302),
                c = n(426833),
                d = n(545763),
                m = n(169339),
                h = n(758025),
                u = n.n(h),
                p = n(785893);
            const f = {
                    showControls: !1,
                    width: "100%",
                    height: "100%"
                },
                v = e => {
                    let {
                        publisherRef: t,
                        subscriberRef: n,
                        videoChat: h,
                        isPatient: v,
                        onParticipantJoin: x,
                        onError: g,
                        audio: w,
                        video: Z,
                        screenSharing: j,
                        screenWatching: _,
                        sessionEventHandlers: E,
                        screenSharingVideoSource: b,
                        screenSharingEventHandlers: y,
                        deviceState: k,
                        log: S,
                        mediaDevicesRequested: N,
                        onSubscriberTalk: z
                    } = e;
                    const [C, R] = (0, s.useState)(!1), T = "de" === (0, r.rZ)();
                    (0, s.useEffect)((() => {
                        T && !(0, r.IF)() && window.OT.setProxyUrl(l.ZP.TOKBOX_API_NODE_URL)
                    }), []);
                    const A = {
                            publishAudio: w,
                            publishVideo: Z,
                            fitMode: v ? "contain" : "cover",
                            logAnalyticsEvent: T ? () => {} : null,
                            ...f
                        },
                        M = {
                            sessionId: h.room_name,
                            token: h.token,
                            eventHandlers: E,
                            apiKey: T ? l.ZP.TOKBOX_API_KEY_DE : l.ZP.TOKBOX_API_KEY_FR,
                            onError: g
                        },
                        P = (0, o.H)(),
                        O = (0, c.Q)();
                    if (!N) return (0, p.jsx)("div", {
                        className: "dl-video-chat-session"
                    });
                    k.audio.working ? P && (A.audioSource = P) : A.audioSource = null, k.video.working ? O && (A.videoSource = O) : A.videoSource = null;
                    const I = {
                        audioBlocked: () => {
                            S("audio_blocked"), R(!0)
                        },
                        audioUnblocked: () => {
                            S("audio_unblocked"), R(!1)
                        },
                        audioLevelUpdated: e => {
                            z(e.audioLevel > .01)
                        }
                    };
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(m.Z, {
                            show: C,
                            children: (0, p.jsxs)(d.Z, {
                                uiStyle: "warning",
                                block: !0,
                                onTap: () => {
                                    S("audio_click_unblock_audio"), window.OT.unblockAudio(), R(!1)
                                },
                                children: [(0, p.jsx)(u(), {}), (0, p.jsx)("span", {
                                    children: a.Z.t("common.telehealth.enable_sound")
                                })]
                            })
                        }), (0, p.jsx)("div", {
                            className: "dl-video-chat-session",
                            children: (0, p.jsxs)(i.Bp, { ...M,
                                children: [j && !v ? (0, p.jsx)(i.VI, {
                                    ref: t,
                                    properties: {
                                        videoSource: b,
                                        publishAudio: !1
                                    },
                                    onError: g,
                                    style: {
                                        display: "none"
                                    },
                                    eventHandlers: y
                                }) : null, (0, p.jsx)("div", {
                                    className: "dl-video-chat-publisher snapshot-black",
                                    children: (0, p.jsx)(i.VI, {
                                        ref: t,
                                        properties: A,
                                        onError: g
                                    })
                                }), (0, p.jsx)(i.e_, {
                                    children: (0, p.jsx)("div", {
                                        className: "dl-video-chat-subscriber snapshot-black dl-video-chat-subscriber-" + (_ || !v ? "contain" : "cover"),
                                        children: (0, p.jsx)(i.dR, {
                                            ref: n,
                                            properties: f,
                                            onSubscribe: x,
                                            retry: !0,
                                            eventHandlers: I,
                                            onError: g
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                }
        },
        313888: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var s = n(759636),
                a = n.n(s),
                l = n(227258);
            const i = {
                run: async function() {
                    if (!navigator || !navigator.getBattery) return [l.Z.HIDDEN];
                    const e = await navigator.getBattery(),
                        t = {
                            charging: e.charging,
                            level: e.level
                        };
                    return e.charging || e.level > .3 ? [l.Z.OK, t] : e.level > .1 ? [l.Z.WARNING, t] : [l.Z.KO, t]
                },
                name: "battery",
                iconMap: {
                    default: a()
                },
                restart: !0
            }
        },
        426833: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g,
                Q: () => v
            });
            var s = n(184481),
                a = n(453040),
                l = n(452838),
                i = n(845126),
                r = n(445884),
                o = n(8955),
                c = n(597043),
                d = n(545763),
                m = n(130941);
            var h = n(785893);
            const u = e => {
                let {
                    show: t,
                    webcam: n,
                    deviceId: s,
                    onShow: a,
                    track: l
                } = e;
                return (0, h.jsx)(h.Fragment, {
                    children: t ? (0, h.jsx)("div", {
                        className: "flex dl-justify-center",
                        children: (0, h.jsx)(m.Z, {
                            className: "dl-select-device-webcam",
                            innerRef: n,
                            onReady: () => {
                                l({
                                    name: "telehealth_diagnostic_device_detected",
                                    details: {
                                        device: "camera"
                                    }
                                })
                            },
                            audioConstraints: {
                                audio: !1
                            },
                            videoConstraints: {
                                video: {
                                    deviceId: s
                                }
                            }
                        })
                    }) : (0, h.jsxs)(d.Z, {
                        onClick: a,
                        uiStyle: "info-link",
                        size: "small",
                        children: [(0, h.jsx)(i.Z, {
                            name: "solid/video"
                        }), (0, h.jsx)("span", {
                            children: r.Z.t("common.telehealth.setup.test_camera")
                        })]
                    })
                })
            };
            var p = n(5212);
            const f = "camera",
                v = () => o.U2(f),
                x = e => {
                    let {
                        showVisualFeedback: t,
                        webcam: n,
                        deviceId: s,
                        onShowVisualFeedback: l,
                        track: o
                    } = e;
                    return (0, h.jsxs)(c.Z, {
                        container: !0,
                        xsAlignItems: "center",
                        xsPadding: !0,
                        xsSpacing: "small",
                        className: "flex dl-justify-between",
                        children: [(0, h.jsxs)("div", {
                            className: "flex",
                            children: [(0, h.jsx)(i.Z, {
                                name: "webcam",
                                size: "medium"
                            }), (0, h.jsx)(a.Z, {
                                className: "dl-margin-l-8 dl-margin-r",
                                uiStyle: "body-s-bold",
                                children: r.Z.t("common.telehealth.setup.camera")
                            })]
                        }), (0, h.jsx)(u, {
                            show: t,
                            webcam: n,
                            deviceId: s,
                            onShow: l,
                            track: o
                        })]
                    })
                },
                g = e => {
                    let {
                        cameras: t,
                        showVisualFeedback: n,
                        onShowVisualFeedback: d,
                        track: m
                    } = e;
                    const g = (0, s.useRef)(),
                        [w, Z] = (0, s.useState)(v());
                    return t.length ? (0, p.rl)() ? (0, h.jsx)(x, {
                        showVisualFeedback: n,
                        webcam: g,
                        deviceId: w,
                        onShowVisualFeedback: d,
                        track: m
                    }) : (0, h.jsxs)(c.Z, {
                        container: !0,
                        xsAlignItems: "center",
                        xsPadding: !0,
                        xsSpacing: "small",
                        children: [(0, h.jsxs)(c.Z, {
                            item: !0,
                            smSize: 2,
                            xsSize: 12,
                            className: "flex",
                            children: [(0, h.jsx)(i.Z, {
                                name: "webcam",
                                size: "medium"
                            }), (0, h.jsx)(a.Z, {
                                className: "dl-margin-x-16",
                                uiStyle: "body-s-bold",
                                children: r.Z.t("common.telehealth.setup.camera")
                            })]
                        }), (0, h.jsx)(c.Z, {
                            item: !0,
                            smSize: 6,
                            xsSize: 12,
                            children: (0, h.jsx)(l.Z, {
                                block: !0,
                                options: t,
                                defaultValue: v(),
                                onChange: e => {
                                    o.t8(f, e.target.value), Z(e.target.value), m({
                                        name: "telehealth_diagnostic_device_changed",
                                        details: {
                                            device: "camera"
                                        }
                                    })
                                }
                            })
                        }), (0, h.jsx)(c.Z, {
                            item: !0,
                            smSize: 4,
                            xsSize: 6,
                            children: (0, h.jsx)(u, {
                                show: n,
                                webcam: g,
                                deviceId: w,
                                onShow: d,
                                track: m
                            })
                        })]
                    }) : null
                }
        },
        14560: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var s = n(184481),
                a = n(445884),
                l = n(784600),
                i = n(453040),
                r = n(545763),
                o = n(887363),
                c = n.n(o),
                d = n(571442),
                m = n.n(d),
                h = n(71214),
                u = n.n(h),
                p = n(768731),
                f = n.n(p);
            var v = n(227258),
                x = n(785893);

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const w = {
                    [v.Z.OK]: m(),
                    [v.Z.KO]: u(),
                    [v.Z.WARNING]: c(),
                    [v.Z.LOADING]: () => (0, x.jsx)("img", {
                        style: {
                            maxWidth: "24px",
                            maxHeight: "24px"
                        },
                        alt: "",
                        src: "/img/loading.gif"
                    })
                },
                Z = e => {
                    let {
                        extraMessage: t,
                        restart: n,
                        reload: s,
                        status: l,
                        runCheck: i
                    } = e;
                    if ([v.Z.KO, v.Z.WARNING].includes(l)) {
                        if (t) return (0, x.jsx)(t, {});
                        if (n) return (0, x.jsxs)(r.Z, {
                            uiStyle: "outlined",
                            onTap: s ? () => window.location.reload() : i,
                            size: "small",
                            className: "dl-margin-t-16",
                            children: [(0, x.jsx)(f(), {}), (0, x.jsx)("span", {
                                children: a.Z.t("common.telehealth.setup.check_again")
                            })]
                        })
                    }
                    return null
                };
            class j extends s.Component {
                constructor() {
                    super(...arguments), g(this, "state", {
                        status: v.Z.LOADING
                    }), g(this, "runCheck", (async e => {
                        this.setState({
                            status: v.Z.LOADING
                        });
                        const {
                            check: t,
                            onCheckUpdate: n
                        } = this.props, [s, a] = await t.run(e);
                        this.setState({
                            status: s
                        }), n && n(s, a)
                    }))
                }
                componentDidMount() {
                    this.runCheck()
                }
                componentWillUnmount() {
                    clearInterval(this.interval)
                }
                render() {
                    const {
                        check: {
                            iconMap: e,
                            name: t,
                            extraMessage: n,
                            restart: s,
                            reload: r
                        },
                        errorTutorial: o,
                        hideHelp: c
                    } = this.props, {
                        status: d
                    } = this.state;
                    if (d === v.Z.HIDDEN) return null;
                    const m = e[d] || e.default,
                        h = w[d],
                        u = a.Z.t(`common.telehealth.setup.${t}`);
                    return (0, x.jsxs)(l.Z, {
                        className: `dl-margin-b dl-step-${d}`,
                        children: [(0, x.jsxs)("div", {
                            className: "flex",
                            children: [(0, x.jsx)(m, {
                                className: "dl-step-icon"
                            }), (0, x.jsx)("div", {
                                className: "dl-margin-l dl-flex-column dl-flex-grow",
                                children: (0, x.jsx)(i.Z, {
                                    uiStyle: "body-s-bold",
                                    children: "string" === typeof u ? u : u[d]
                                })
                            }), (0, x.jsx)("div", {
                                children: (0, x.jsx)(h, {
                                    className: "dl-step-icon"
                                })
                            })]
                        }), c ? null : (0, x.jsxs)(x.Fragment, {
                            children: [d === v.Z.KO && (o ? o() : (0, x.jsx)(i.Z, {
                                className: "dl-margin-y-16",
                                children: a.Z.t(`common.telehealth.setup.danger.${t}`)
                            })), d === v.Z.WARNING && (0, x.jsx)(i.Z, {
                                className: "dl-margin-y-16",
                                children: a.Z.t(`common.telehealth.setup.warning.${t}`)
                            }), (0, x.jsx)(Z, {
                                extraMessage: n,
                                restart: s,
                                reload: r,
                                status: d,
                                runCheck: this.runCheck
                            })]
                        })]
                    })
                }
            }
            const _ = j
        },
        199334: (e, t, n) => {
            "use strict";
            n.d(t, {
                IC: () => v,
                ZP: () => x
            });
            var s = n(844139);
            const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                l = e => {
                    let t = "";
                    for (let n = 0; n < e; n++) t += a.charAt(Math.floor(Math.random() * a.length));
                    return t
                };
            var i = n(572122),
                r = n.n(i),
                o = n(354872),
                c = n.n(o),
                d = n(249236),
                m = n.n(d),
                h = n(8955),
                u = n(227258);
            const p = Object.freeze({
                good_speed: 2e5,
                medium_speed: 1e4
            });
            const f = async () => {
                    const e = await async function() {
                            const e = document.querySelector('script[src*="patient-mobile"]') || document.querySelector('script[src*="configuration"]');
                            if (e) return await (0, s.F)(e.src, "GET");
                            return p.good_speed
                        }(),
                        t = await async function() {
                            const e = await Promise.all([1e4, 25e3, 5e4, 75e3, 1e6].map((e => (0, s.F)("/api/video_chats/connection_tests.json", "POST", JSON.stringify({
                                file: l(e)
                            })))));
                            return e.length ? e.sort(((e, t) => e - t))[e.length - 1] : 0
                        }(),
                        n = {
                            downloadSpeed: e,
                            uploadSpeed: t,
                            test_version: "doctolib_web"
                        },
                        a = ((e, t) => e >= p.medium_speed && t >= p.medium_speed)(e, t),
                        i = ((e, t) => e >= p.good_speed && t >= p.good_speed)(e, t);
                    return h.t8("videoCapable", i), i ? [u.Z.OK, n] : !i && a ? [u.Z.WARNING, n] : [u.Z.KO, n]
                },
                v = {
                    PATIENT: "patient",
                    DOCTOR: "doctor"
                },
                x = e => ({
                    run: f,
                    name: `connection.${e}`,
                    iconMap: {
                        [u.Z.OK]: r(),
                        [u.Z.KO]: c(),
                        [u.Z.WARNING]: m(),
                        default: m()
                    },
                    restart: !0
                })
        },
        339587: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => d,
                Q: () => m
            });
            var s = n(177140),
                a = n(426061),
                l = n.n(a),
                i = n(123246),
                r = n.n(i),
                o = n(227258);
            const c = e => async () => {
                    const t = await (0, s.q7)(e);
                    return [t.working ? o.Z.OK : o.Z.KO, t]
                },
                d = {
                    run: c("video"),
                    name: "camera",
                    iconMap: {
                        default: r()
                    },
                    restart: !0,
                    reload: !0
                },
                m = {
                    run: c("audio"),
                    name: "micro",
                    iconMap: {
                        default: l()
                    },
                    restart: !0,
                    reload: !0
                }
        },
        591302: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => j,
                H: () => w
            });
            var s = n(184481),
                a = n(136591),
                l = n(597043),
                i = n(452838),
                r = n(453040),
                o = n(845126),
                c = n(445884),
                d = n(8955),
                m = n(545763),
                h = n(294184),
                u = n.n(h);
            var p = n(785893);
            const f = e => {
                    let {
                        audioLevel: t
                    } = e;
                    return (0, p.jsxs)("div", {
                        className: "dl-flex-column dl-align-items-center",
                        children: [(0, p.jsx)(r.Z, {
                            className: "dl-margin-b-8",
                            children: c.Z.t("common.telehealth.setup.speak")
                        }), (0, p.jsx)("div", {
                            className: "flex snapshot-hide",
                            children: Array.from({
                                length: 11
                            }, ((e, t) => t + 1)).map((e => (0, p.jsx)("div", {
                                className: u()("dl-audio-meter-bar", {
                                    "dl-audio-meter-bar-blue": e / 11 < 2 * t
                                })
                            }, e)))
                        })]
                    })
                },
                v = e => {
                    let {
                        show: t,
                        audioLevel: n,
                        onShow: s
                    } = e;
                    return (0, p.jsx)(p.Fragment, {
                        children: t ? (0, p.jsx)(f, {
                            audioLevel: n
                        }) : (0, p.jsxs)(m.Z, {
                            onClick: () => {
                                s(!0)
                            },
                            uiStyle: "info-link",
                            size: "small",
                            children: [(0, p.jsx)(o.Z, {
                                name: "solid/microphone"
                            }), (0, p.jsx)("span", {
                                children: c.Z.t("common.telehealth.setup.test_micro")
                            })]
                        })
                    })
                };
            var x = n(5212);
            const g = "microphone",
                w = () => d.U2(g),
                Z = window.AudioContext || window.webkitAudioContext,
                j = e => {
                    let {
                        microphones: t,
                        showVisualFeedback: n,
                        onShowVisualFeedback: m,
                        track: h
                    } = e;
                    const [u, f] = (0, s.useState)(w()), [j, _] = (0, s.useState)(0), E = (0, a.Z)(), b = e => {
                        E.current && _((e => {
                            if (!e.inputBuffer.getChannelData) return 0;
                            const t = e.inputBuffer.getChannelData(0),
                                n = t.reduce(((e, t) => e + t * t), 0);
                            return Math.sqrt(n / t.length)
                        })(e).toFixed(2))
                    };
                    (0, s.useEffect)((() => {
                        if (!n) return () => {};
                        const e = (async e => {
                            let {
                                audioSource: t,
                                onAudioProcess: n
                            } = e;
                            const s = await window.OT.getUserMedia({
                                    audioSource: t
                                }),
                                a = new Z,
                                l = a.createMediaStreamSource(s),
                                i = a.createScriptProcessor(2048, 1, 1);
                            return i.onaudioprocess = n, l.connect(i), i.connect(a.destination), a
                        })({
                            audioSource: u,
                            onAudioProcess: b
                        });
                        return () => e.then((e => e.close()))
                    }), [u, n]);
                    const [y, k] = (0, s.useState)(!1);
                    return (0, s.useEffect)((() => {
                        !y && j > 0 && (k(!0), h({
                            name: "telehealth_diagnostic_device_detected",
                            details: {
                                device: "micro"
                            }
                        }))
                    }), [j]), t.length ? (0, x.rl)() ? (0, p.jsxs)(l.Z, {
                        container: !0,
                        xsAlignItems: "center",
                        xsPadding: !0,
                        xsSpacing: "small",
                        className: "flex dl-justify-between",
                        children: [(0, p.jsxs)("div", {
                            className: "flex",
                            children: [(0, p.jsx)(o.Z, {
                                name: "microphone",
                                size: "medium"
                            }), (0, p.jsx)(r.Z, {
                                className: "dl-margin-l-8 dl-margin-r",
                                uiStyle: "body-s-bold",
                                children: c.Z.t("common.telehealth.setup.micro")
                            })]
                        }), (0, p.jsx)("div", {
                            className: "flex",
                            children: (0, p.jsx)(v, {
                                audioLevel: j,
                                onShow: m,
                                show: n
                            })
                        })]
                    }) : (0, p.jsxs)(l.Z, {
                        container: !0,
                        xsAlignItems: "center",
                        xsPadding: !0,
                        xsSpacing: "small",
                        children: [(0, p.jsxs)(l.Z, {
                            item: !0,
                            smSize: 2,
                            xsSize: 12,
                            className: "flex",
                            children: [(0, p.jsx)(o.Z, {
                                name: "microphone",
                                size: "medium"
                            }), (0, p.jsx)(r.Z, {
                                className: "dl-margin-x-16",
                                uiStyle: "body-s-bold",
                                children: c.Z.t("common.telehealth.setup.micro")
                            })]
                        }), (0, p.jsx)(l.Z, {
                            item: !0,
                            smSize: 6,
                            xsSize: 12,
                            children: (0, p.jsx)(i.Z, {
                                block: !0,
                                options: t,
                                defaultValue: u,
                                onChange: e => {
                                    const t = e.target.value;
                                    f(t), d.t8(g, t), h({
                                        name: "telehealth_diagnostic_device_changed",
                                        details: {
                                            device: "micro"
                                        }
                                    })
                                }
                            })
                        }), (0, p.jsx)(l.Z, {
                            item: !0,
                            smSize: 4,
                            className: "dl-margin-y-8",
                            children: (0, p.jsx)(v, {
                                audioLevel: j,
                                onShow: m,
                                show: n
                            })
                        })]
                    }) : null
                }
        },
        30987: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var s = n(184481),
                a = n(784600),
                l = n(453040),
                i = n(755506),
                r = n(445884),
                o = n(321964),
                c = n(177140),
                d = n(458),
                m = n(591302),
                h = n(426833),
                u = n(845126),
                p = n(545763),
                f = n(888748),
                v = n(259905),
                x = n(597043),
                g = n(5212),
                w = n(785893);
            const Z = "telehealth-notification",
                j = e => {
                    let {
                        onShowVisualFeedback: t
                    } = e;
                    const [n, a] = (0, s.useState)(), [i, o] = (0, s.useState)(!1), {
                        setTimer: c
                    } = (0, v.Z)(), d = () => {
                        (0, f.hY)(Z), t(), o(!0), c((() => o(!1)), 3500)
                    };
                    return (0, s.useEffect)((() => {
                        (0, f.IH)(Z, "/audios/telehealth-notification.mp3"), navigator.mediaDevices.enumerateDevices().then((e => {
                            const t = e.filter((e => "audiooutput" === e.kind));
                            if (1 === t.length && a(t[0].label), t.length > 1) {
                                const e = t.filter((e => "default" === e.deviceId))[0];
                                e && a(e.label)
                            }
                        }))
                    }), []), (0, g.rl)() ? (0, w.jsxs)(x.Z, {
                        container: !0,
                        xsAlignItems: "center",
                        xsPadding: !0,
                        xsSpacing: "small",
                        className: "flex dl-justify-between",
                        children: [(0, w.jsxs)("div", {
                            className: "flex",
                            children: [(0, w.jsx)(u.Z, {
                                name: "speaker",
                                size: "medium"
                            }), (0, w.jsx)(l.Z, {
                                className: "dl-margin-l-8 dl-margin-r",
                                uiStyle: "body-s-bold",
                                children: r.Z.t("common.telehealth.setup.speakers")
                            })]
                        }), (0, w.jsxs)(p.Z, {
                            onClick: d,
                            uiStyle: "info-link",
                            disabled: i,
                            size: "small",
                            children: [(0, w.jsx)(u.Z, {
                                name: "solid/volume"
                            }), (0, w.jsx)("span", {
                                children: r.Z.t("common.telehealth.setup.test_speakers")
                            })]
                        })]
                    }) : (0, w.jsxs)(x.Z, {
                        container: !0,
                        xsAlignItems: "center",
                        xsPadding: !0,
                        xsSpacing: "small",
                        children: [(0, w.jsxs)(x.Z, {
                            item: !0,
                            smSize: 2,
                            xsSize: 12,
                            className: "flex",
                            children: [(0, w.jsx)(u.Z, {
                                name: "speaker",
                                size: "medium"
                            }), (0, w.jsx)(l.Z, {
                                className: "dl-margin-x-16",
                                uiStyle: "body-s-bold",
                                children: r.Z.t("common.telehealth.setup.speakers")
                            })]
                        }), (0, w.jsx)(x.Z, {
                            item: !0,
                            smSize: 6,
                            xsSize: 12,
                            children: (0, w.jsx)(l.Z, {
                                uiStyle: "body-s-regular",
                                color: "neutral-090",
                                style: {
                                    marginLeft: "5px"
                                },
                                children: n
                            })
                        }), (0, w.jsx)(x.Z, {
                            item: !0,
                            smSize: 4,
                            xsSize: 12,
                            className: "flex dl-justify-center",
                            children: (0, w.jsxs)(p.Z, {
                                onClick: d,
                                uiStyle: "info-link",
                                disabled: i,
                                size: "small",
                                children: [(0, w.jsx)(u.Z, {
                                    name: "solid/volume"
                                }), (0, w.jsx)("span", {
                                    children: r.Z.t("common.telehealth.setup.test_speakers")
                                })]
                            })
                        })]
                    })
                };
            var _ = n(201477),
                E = n(642979),
                b = n(768731),
                y = n.n(b);
            const k = ["micro_issue", "camera_issue", "speaker_issue"],
                S = e => {
                    let {
                        issue: t,
                        mobile: n,
                        track: a
                    } = e;
                    const [i, o] = (0, s.useState)(!1);
                    return (0, w.jsxs)(w.Fragment, {
                        children: [(0, w.jsx)(_.Z, {
                            className: "dl-margin-16",
                            onChange: () => {
                                a({
                                    name: "telehealth_diagnostic_issue_chosen",
                                    details: {
                                        issue: t
                                    }
                                }), o(!i)
                            },
                            label: r.Z.t(`common.telehealth.setup.issue.description.${t}`)
                        }, t), i ? (0, w.jsx)("div", {
                            className: "dl-technical-issue-help",
                            children: (0, w.jsx)(l.Z, {
                                children: r.Z.t(`common.telehealth.setup.issue.help.${n?"mobile":"desktop"}.${t}_html`)
                            })
                        }) : null]
                    })
                },
                N = e => {
                    let {
                        track: t
                    } = e;
                    const [n, a] = (0, s.useState)(!1), i = (0, g.rl)();
                    return (0, w.jsx)("div", {
                        className: "dl-padding-16",
                        children: n ? (0, w.jsxs)(w.Fragment, {
                            children: [(0, w.jsx)(l.Z, {
                                uiStyle: "body-s-bold",
                                children: r.Z.t("common.telehealth.setup.issue.question")
                            }), k.map((e => (0, w.jsx)(S, {
                                issue: e,
                                mobile: i,
                                track: t
                            }, e))), (0, w.jsxs)(p.Z, {
                                uiStyle: "outlined",
                                onTap: () => window.location.reload(),
                                size: "small",
                                className: "dl-margin-t-16",
                                children: [(0, w.jsx)(y(), {}), (0, w.jsx)("span", {
                                    children: r.Z.t("common.telehealth.setup.check_again")
                                })]
                            })]
                        }) : (0, w.jsxs)(w.Fragment, {
                            children: [(0, w.jsx)(l.Z, {
                                children: r.Z.t("common.telehealth.setup.verify_devices_html")
                            }), (0, w.jsx)(E.Z, {
                                className: "dl-margin-l-8",
                                href: "#",
                                onClick: () => {
                                    a(!0), t({
                                        name: "telehealth_diagnostic_issue_reported"
                                    })
                                },
                                children: r.Z.t("common.telehealth.setup.declare_issue")
                            })]
                        })
                    })
                },
                z = e => {
                    let {
                        deviceId: t,
                        label: n
                    } = e;
                    return {
                        value: t,
                        label: n
                    }
                },
                C = () => new Promise(((e, t) => {
                    window.OT.getDevices(((n, s) => {
                        if (n) return void t(n);
                        const a = s.filter((e => "videoInput" === e.kind)).map(z),
                            l = s.filter((e => "audioInput" === e.kind)).map(z);
                        e({
                            cameras: a,
                            microphones: l
                        })
                    }))
                })),
                R = (e, t) => {
                    if (!t.deviceTestOnceAtTheTime) return { ...e
                    };
                    switch (t.type) {
                        case "TEST_CAMERA":
                            return { ...e,
                                showCameraVisualFeedback: !0,
                                showMicroVisualFeedback: !1
                            };
                        case "TEST_MICRO":
                            return { ...e,
                                showCameraVisualFeedback: !1,
                                showMicroVisualFeedback: !0
                            };
                        case "TEST_SPEAKERS":
                            return { ...e,
                                showCameraVisualFeedback: !1,
                                showMicroVisualFeedback: !1
                            };
                        default:
                            throw new Error
                    }
                },
                T = (0, d.nX)((e => {
                    let {
                        track: t = (() => {}),
                        showTechnicalProblemSection: n
                    } = e;
                    const {
                        cameras: d,
                        microphones: u
                    } = (() => {
                        const [e, t] = (0, s.useState)({
                            cameras: [],
                            microphones: []
                        });
                        return (0, s.useEffect)((() => {
                            C().then(t)
                        }), []), (0, o.Z)((() => {
                            C().then(t)
                        }), 5e3), e
                    })(), p = c.gO && c.G6, [{
                        showCameraVisualFeedback: f,
                        showMicroVisualFeedback: v
                    }, x] = (0, s.useReducer)(R, {
                        showCameraVisualFeedback: !p,
                        showMicroVisualFeedback: !p
                    });
                    return (0, s.useEffect)((() => {
                        t({
                            name: "telehealth_device_selection_displayed"
                        })
                    }), []), (0, w.jsxs)("div", {
                        children: [(0, w.jsx)(l.Z, {
                            uiStyle: "title-xl-bold",
                            align: "center",
                            className: "dl-margin-y-16",
                            children: r.Z.t("common.telehealth.setup.verify_devices.title")
                        }), (0, w.jsx)(l.Z, {
                            align: "center",
                            className: "dl-margin-y-16",
                            children: r.Z.t("common.telehealth.setup.verify_devices.subtitle")
                        }), (0, w.jsxs)(a.Z, {
                            className: "dl-margin-b dl-padding-0",
                            children: [(0, w.jsx)(m.Z, {
                                microphones: u,
                                track: t,
                                showVisualFeedback: v,
                                onShowVisualFeedback: () => x({
                                    type: "TEST_MICRO",
                                    deviceTestOnceAtTheTime: p
                                })
                            }), (0, w.jsx)(h.Z, {
                                cameras: d,
                                track: t,
                                showVisualFeedback: f,
                                onShowVisualFeedback: () => x({
                                    type: "TEST_CAMERA",
                                    deviceTestOnceAtTheTime: p
                                })
                            }), (0, w.jsx)(j, {
                                onShowVisualFeedback: () => x({
                                    type: "TEST_SPEAKERS",
                                    deviceTestOnceAtTheTime: p
                                })
                            }), (0, w.jsx)(i.Z, {}), n && (0, w.jsx)(N, {
                                track: t
                            })]
                        })]
                    })
                }))
        },
        227258: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            const s = {
                OK: "ok",
                KO: "ko",
                MEDIUM: "medium",
                WARNING: "medium",
                LOADING: "loading",
                HIDDEN: "hidden"
            }
        },
        822895: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => i
            });
            var s = n(160160),
                a = n(600625);
            const l = (0, s.Z)().slice(0, 6),
                i = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return a.ZP.post(`/api/video_chats/${e}/video_chat_events`, {
                        body: {
                            video_chat_event: {
                                name: t,
                                body: { ...n,
                                    session_identifier: l
                                }
                            }
                        }
                    })
                }
        },
        315872: (e, t, n) => {
            "use strict";
            n.d(t, {
                _O: () => i,
                gO: () => l,
                nf: () => a
            });
            var s = n(177140);

            function a() {
                s.d && window.OT && window.OT.registerScreenSharingExtensionHelper("electron", {
                    isSupportedInThisBrowser: !0,
                    autoRegisters: !0,
                    extensionRequired: !1,
                    getConstraintsShowsPermissionUI: !1,
                    sources: {
                        screen: !0,
                        application: !0,
                        window: !0,
                        browser: !0
                    },
                    register: () => ({
                        isInstalled: e => e(!0),
                        getConstraints: (e, t, n) => {
                            n(void 0, {
                                audio: !0,
                                video: !1
                            })
                        }
                    })
                })
            }
            async function l() {
                if (!s.d) return "screen";
                try {
                    const e = await new Promise(((e, t) => {
                            const n = s => {
                                window.removeEventListener("dl_on_receive_desktop_source", n), s.detail.value || t(new Error("Desktop source not found")), e(s.detail.value)
                            };
                            window.addEventListener("dl_on_receive_desktop_source", n), window.dispatchEvent(new CustomEvent("dl_on_request_desktop_source"))
                        })),
                        t = await navigator.mediaDevices.getUserMedia({
                            audio: !1,
                            video: {
                                mandatory: {
                                    chromeMediaSource: "screen",
                                    chromeMediaSourceId: e
                                }
                            }
                        }),
                        [n] = t.getVideoTracks();
                    return n
                } catch {
                    return null
                }
            }
            async function i(e) {
                return ["screen", "custom"].includes(e)
            }
        },
        321964: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var s = n(184481);
            const a = (e, t) => {
                const n = (0, s.useRef)();
                (0, s.useEffect)((() => {
                    n.current = e
                }), [e]), (0, s.useEffect)((() => {
                    if (null !== t) {
                        const e = setInterval((function() {
                            n.current()
                        }), t);
                        return () => clearInterval(e)
                    }
                    return !0
                }), [t])
            }
        },
        888748: (e, t, n) => {
            "use strict";
            n.d(t, {
                IH: () => a,
                hY: () => l
            });
            const s = {};

            function a(e, t) {
                !s[e] && i() && (s[e] = new Audio(t))
            }

            function l(e) {
                if (!i()) return;
                const t = s[e].play();
                t && t.catch((e => {
                    if ("NotAllowedError" === e.name && e.message.match(/the user didn't interact with the document first/)) return null;
                    throw e
                }))
            }

            function i() {
                return !!window.Audio
            }
        },
        380703: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var s = n(785893),
                a = n(184481),
                l = n(509250);
            const i = e => t => {
                const {
                    account: n,
                    update: i,
                    fetch: r
                } = (0, a.useContext)(l.Z);
                return (0, s.jsx)(e, { ...t,
                    account: t.account || n,
                    update: i,
                    fetch: r
                })
            }
        },
        598942: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, s.createElement("g", {
                    transform: "translate(-28.000000, -84.000000)"
                }, s.createElement("g", {
                    transform: "translate(14.000000, 70.000000)"
                }, s.createElement("g", {
                    transform: "translate(14.000000, 14.000000)"
                }, s.createElement("g", null, [s.createElement("polygon", {
                    points: "0 0 24 0 24 24 0 24",
                    key: 0
                }), s.createElement("path", {
                    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",
                    fill: "#E62638",
                    fillRule: "nonzero",
                    key: 1
                })]))))))
            }));
            a.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = a, a.default = a
        },
        281524: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("path", {
                    d: "M3.4 14.6 0 17.8 2.2 20l3.2-3.4 2.4 2.3v-6.7H1l2.3 2.4zM20 2.2 17.8 0l-3.2 3.4-2.4-2.3v6.7H19l-2.3-2.4L20 2.2z"
                }))
            }));
            a.defaultProps = {
                width: "20",
                height: "20"
            }, e.exports = a, a.default = a
        },
        570557: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("path", {
                    d: "m5 9-3 3-2-2.4V16h6.4L4 14l3-3-2-2zm4.6-9L12 2 9 5l2 2 3-3 2 2.4V0H9.6z"
                }))
            }));
            a.defaultProps = {
                width: "16",
                height: "16"
            }, e.exports = a, a.default = a
        },
        506505: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("path", {
                    d: "M12 8.998c-1.604 0-3.15.252-4.6.718v3.105a1 1 0 0 1-.56.898 11.54 11.54 0 0 0-2.665 1.852.997.997 0 0 1-1.405-.01L.293 13.085a.997.997 0 0 1 .001-1.415A16.944 16.944 0 0 1 12 7c4.536 0 8.658 1.775 11.706 4.67a.997.997 0 0 1 0 1.415l-2.476 2.478a.997.997 0 0 1-1.405.01 11.541 11.541 0 0 0-2.665-1.853 1 1 0 0 1-.56-.898l-.001-3.105a15.002 15.002 0 0 0-4.6-.718z",
                    fill: "#fff"
                }))
            }));
            a.defaultProps = {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                transform: "rotate(360)"
            }, e.exports = a, a.default = a
        },
        446042: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, s.createElement("g", {
                    transform: "translate(-22.000000, -494.000000)"
                }, s.createElement("g", {
                    transform: "translate(14.000000, 486.000000)"
                }, s.createElement("g", {
                    transform: "translate(8.000000, 8.000000)"
                }, [s.createElement("path", {
                    d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
                    key: 0
                }), s.createElement("path", {
                    d: "M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z",
                    fill: "#FFF",
                    fillRule: "nonzero",
                    key: 1
                })])))))
            }));
            a.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = a, a.default = a
        },
        758025: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, s.createElement("g", {
                    transform: "translate(-22.000000, -494.000000)"
                }, s.createElement("g", {
                    transform: "translate(14.000000, 486.000000)"
                }, s.createElement("g", {
                    transform: "translate(8.000000, 8.000000)"
                }, [s.createElement("polygon", {
                    points: "0 0 24 0 24 24 0 24",
                    key: 0
                }), s.createElement("path", {
                    d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z",
                    fill: "currentColor",
                    fillRule: "nonzero",
                    key: 1
                })])))))
            }));
            a.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = a, a.default = a
        },
        426061: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, [s.createElement("path", {
                    d: "M24 28c3.31 0 5.98-2.69 5.98-6L30 10c0-3.32-2.68-6-6-6-3.31 0-6 2.68-6 6v12c0 3.31 2.69 6 6 6zm10.6-6c0 6-5.07 10.2-10.6 10.2-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c6.56-.97 12-6.61 12-13.44h-3.4z",
                    fill: "#fff",
                    key: 0
                }), s.createElement("circle", {
                    cx: "24",
                    cy: "24",
                    r: "20",
                    stroke: "transparent",
                    strokeWidth: "2",
                    fill: "transparent",
                    key: 1
                })])
            }));
            a.defaultProps = {
                width: "24",
                height: "24",
                viewBox: "0 0 48 48"
            }, e.exports = a, a.default = a
        },
        723409: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, [s.createElement("path", {
                    d: "M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z",
                    key: 0
                }), s.createElement("path", {
                    fill: "none",
                    d: "M0 0h24v24H0V0z",
                    key: 1
                })])
            }));
            a.defaultProps = {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, e.exports = a, a.default = a
        },
        768731: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("path", {
                    d: "M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1a6.875 6.875 0 0 0 0 9.79 7.02 7.02 0 0 0 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58a8.987 8.987 0 0 1 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z",
                    mask: "url(#mask-2)"
                }))
            }));
            a.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = a, a.default = a
        },
        442609: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    opacity: "0.9"
                }, s.createElement("g", {
                    transform: "translate(-274.000000, -22.000000)"
                }, s.createElement("g", {
                    transform: "translate(266.000000, 14.000000)"
                }, s.createElement("g", {
                    transform: "translate(8.000000, 8.000000)"
                }, [s.createElement("polygon", {
                    points: "0 0 24 0 24 24 0 24",
                    key: 0
                }), s.createElement("path", {
                    d: "M20 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3.17L9 2h6l1.83 2H20zm-8.136 4.727v1.637l2.181-2.182L11.864 6v1.636A4.362 4.362 0 0 0 7.5 12c0 .856.25 1.653.676 2.324l.797-.797A3.202 3.202 0 0 1 8.59 12a3.275 3.275 0 0 1 3.273-3.273zm3.687.95-.796.796c.24.458.381.976.381 1.527a3.275 3.275 0 0 1-3.272 3.273v-1.637l-2.182 2.182L11.864 18v-1.636A4.362 4.362 0 0 0 16.227 12c0-.856-.25-1.653-.676-2.324z",
                    fill: "#224358",
                    fillRule: "nonzero",
                    key: 1
                })])))))
            }));
            a.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = a, a.default = a
        },
        154526: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, s.createElement("g", {
                    transform: "translate(-274.000000, -494.000000)",
                    fill: "#fff"
                }, s.createElement("g", {
                    transform: "translate(266.000000, 486.000000)"
                }, s.createElement("g", {
                    transform: "translate(8.000000, 8.000000)"
                }, [s.createElement("path", {
                    d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
                    key: 0
                }), s.createElement("path", {
                    d: "m21 6.5-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2 2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z",
                    fillRule: "nonzero",
                    key: 1
                })])))))
            }));
            a.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = a, a.default = a
        },
        887363: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("path", {
                    d: "M19.85 14.93 10.63.36C10.5.16 10.26 0 10 0s-.5.15-.63.36L.15 14.92c-.13.2-.22.55-.1.75.14.2.38.33.64.33h18.6c.26 0 .5-.13.62-.33.14-.2.05-.54-.08-.74zM11 14H9v-2h2v2zm0-3H9V5h2v6z"
                }))
            }));
            a.defaultProps = {
                width: "20",
                height: "16",
                viewBox: "0 0 20 16"
            }, e.exports = a, a.default = a
        },
        759636: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("g", {
                    fill: "none"
                }, [s.createElement("path", {
                    d: "M15 3.33C15 2.6 14.4 2 13.67 2H12V0H8v2H6.33C5.6 2 5 2.6 5 3.33V9h10V3.33z",
                    fill: "#CFD8DC",
                    key: 0
                }), s.createElement("path", {
                    d: "M5 9v9.67C5 19.4 5.6 20 6.33 20h7.33c.74 0 1.34-.6 1.34-1.33V9H5z",
                    fill: "#7791A2",
                    key: 1
                })]))
            }));
            a.defaultProps = {
                width: "20",
                height: "20"
            }, e.exports = a, a.default = a
        },
        354872: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, s.createElement("g", {
                    transform: "translate(-134.000000, -440.000000)"
                }, s.createElement("g", {
                    transform: "translate(134.000000, 440.000000)"
                }, [s.createElement("polygon", {
                    points: "0 0 24 0 24 24 0 24",
                    key: 0
                }), s.createElement("path", {
                    d: "M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z",
                    fillOpacity: "0.3",
                    fill: "currentColor",
                    key: 1
                }), s.createElement("path", {
                    d: "M6.67 14.86 12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z",
                    fill: "currentColor",
                    key: 2
                })]))))
            }));
            a.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = a, a.default = a
        },
        572122: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, s.createElement("g", {
                    transform: "translate(-104.000000, -440.000000)"
                }, s.createElement("g", {
                    transform: "translate(104.000000, 440.000000)"
                }, [s.createElement("polygon", {
                    points: "0 0 24 0 24 24 0 24",
                    key: 0
                }), s.createElement("path", {
                    d: "M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z",
                    fillOpacity: "0.2",
                    fill: "currentColor",
                    key: 1
                }), s.createElement("path", {
                    d: "m3.53 10.95 8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z",
                    fill: "currentColor",
                    key: 2
                })]))))
            }));
            a.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = a, a.default = a
        },
        249236: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, s.createElement("g", {
                    transform: "translate(-99.000000, -399.000000)"
                }, s.createElement("g", {
                    transform: "translate(99.000000, 399.000000)"
                }, [s.createElement("polygon", {
                    points: "0 0 24 0 24 24 0 24",
                    key: 0
                }), s.createElement("path", {
                    d: "M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z",
                    fillOpacity: "0.3",
                    fill: "currentColor",
                    key: 1
                }), s.createElement("path", {
                    d: "m4.79 12.52 7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z",
                    fill: "currentColor",
                    key: 2
                })]))))
            }));
            a.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24"
            }, e.exports = a, a.default = a
        },
        336954: (e, t, n) => {
            var s = n(184481);
            const a = s.forwardRef((function(e, t) {
                return s.createElement("svg", { ...e,
                    ref: t
                }, s.createElement("path", {
                    d: "M10 8a2.95 2.95 0 0 1 3 3c0 .83-.3 1.53-.88 2.12A2.9 2.9 0 0 1 10 14c-.83 0-1.53-.3-2.12-.88A2.89 2.89 0 0 1 7 11c0-.83.3-1.53.88-2.12A2.9 2.9 0 0 1 10 8m8-3c.56 0 1.03.2 1.42.58.39.39.58.86.58 1.42v9c0 .53-.2 1-.58 1.4-.39.4-.86.6-1.42.6H2c-.53 0-1-.2-1.4-.6C.2 17 0 16.53 0 16V7c0-.56.2-1.03.6-1.42C1 5.19 1.47 5 2 5h2.4c.37 0 .64-.2.8-.6l.6-1.84c.13-.37.4-.56.8-.56h6.8c.4 0 .67.19.8.56l.6 1.84c.16.4.43.6.8.6H18m-8 11c1.39 0 2.57-.49 3.54-1.46A4.82 4.82 0 0 0 15 11c0-1.39-.49-2.57-1.46-3.54A4.82 4.82 0 0 0 10 6c-1.39 0-2.57.49-3.54 1.46A4.82 4.82 0 0 0 5 11c0 1.39.49 2.57 1.46 3.54A4.82 4.82 0 0 0 10 16m7.32-7.6c.19 0 .35-.07.48-.22s.2-.31.2-.5a.65.65 0 0 0-.2-.48.65.65 0 0 0-.48-.2c-.48 0-.72.23-.72.68 0 .21.07.39.22.52s.31.2.5.2"
                }))
            }));
            a.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20"
            }, e.exports = a, a.default = a
        },
        85871: () => {
            "use strict"
        }
    }
]);
//# sourceMappingURL=../45835-904dc10bf0a098f42238.js.map