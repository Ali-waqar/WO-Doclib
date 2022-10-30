(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [49159], {
        426565: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => $
            });
            var n = s(184481),
                i = s(784600),
                a = s(453040),
                l = s(545763),
                c = s(445884),
                o = s(350337),
                r = s.n(o),
                h = s(14560),
                d = s(313888),
                p = s(199334),
                m = s(48253),
                u = s(339587),
                v = s(227258),
                g = s(458326),
                f = s(528846),
                S = s(227361),
                z = s.n(S),
                k = s(177140),
                E = s(5212),
                b = s(102066),
                w = s.n(b),
                y = s(260470),
                _ = s.n(y);
            const x = s.p + "9ff2eb46387c0feb7cbb.png",
                C = s.p + "61861015857c5020a5e9.png";
            var Z = s(785893);
            const V = {
                iOS: {
                    fr: () => (0, Z.jsx)(f.Z, {
                        className: "dl-full-width",
                        src: x
                    }),
                    de: () => (0, Z.jsx)(f.Z, {
                        className: "dl-full-width",
                        src: C
                    })
                },
                Android: {
                    fr: () => (0, Z.jsx)(w(), {}),
                    de: () => (0, Z.jsx)(_(), {})
                }
            };
            class D extends n.Component {
                render() {
                    const {
                        kind: e
                    } = this.props, t = z()(V, [k.Uh.os.name, (0, E.rZ)()]);
                    return t ? (0, Z.jsxs)("div", {
                        children: [(0, Z.jsx)(a.Z, {
                            className: "dl-margin-y-16",
                            children: c.Z.t(`common.telehealth.setup.tutorial.${e}_step_html`)
                        }), (0, Z.jsx)("div", {
                            style: {
                                maxWidth: "280px"
                            },
                            children: t()
                        }), "iOS" === k.Uh.os.name && (0, Z.jsx)(a.Z, {
                            className: "dl-margin-y-16",
                            children: c.Z.t("common.telehealth.setup.tutorial.action_ios")
                        }), "Android" === k.Uh.os.name && (0, Z.jsx)(a.Z, {
                            className: "dl-margin-y-16",
                            children: c.Z.t("common.telehealth.setup.tutorial.action_android")
                        })]
                    }) : null
                }
            }
            const T = D;
            var R = s(192772),
                P = s(30987),
                j = s(516590),
                H = s(747317),
                O = s(437124),
                I = s(458),
                F = s(160160),
                U = s(763801);

            function M(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            const N = (0, p.ZP)(p.IC.PATIENT),
                A = [d.Z, u.Q, u.I, N, m.Z],
                L = {
                    [u.I.name]: () => (0, Z.jsx)(T, {
                        kind: u.I.name
                    }),
                    [u.Q.name]: () => (0, Z.jsx)(T, {
                        kind: u.Q.name
                    })
                },
                W = e => {
                    let {
                        onTap: t
                    } = e;
                    return (0, Z.jsxs)(i.Z, {
                        children: [(0, Z.jsx)("div", {
                            className: "dl-text-center",
                            children: (0, Z.jsx)(r(), {})
                        }), (0, Z.jsx)(a.Z, {
                            align: "center",
                            className: "dl-margin-y-16",
                            uiStyle: "body-s-bold",
                            children: c.Z.t("common.telehealth.setup.authorize_list")
                        }), (0, Z.jsx)(a.Z, {
                            align: "center",
                            className: "dl-margin-y-16",
                            children: c.Z.t("common.telehealth.setup.authorize_info")
                        }), (0, Z.jsx)(l.Z, {
                            block: !0,
                            onTap: t,
                            children: c.Z.t("common.telehealth.setup.authorize")
                        })]
                    })
                };
            class q extends n.Component {
                constructor() {
                    super(...arguments), M(this, "state", {
                        started: !1,
                        checks: {},
                        trackingUuid: null
                    }), M(this, "startChecks", (() => {
                        var e, t, s, n;
                        null === (e = (t = this.props).postEvent) || void 0 === e || e.call(t, "started"), m.Z.run().then((e => {
                            this.handleCheckUpdate(m.Z.name)(e), this.setState({
                                started: !0
                            })
                        })), null === (s = (n = this.props).onChecksStarted) || void 0 === s || s.call(n)
                    })), M(this, "postTelehealthDiagnostic", (() => {
                        var e, t;
                        null === (e = (t = this.props).postEvent) || void 0 === e || e.call(t, "done");
                        const s = A.map((e => e.name)).reduce(((e, t) => ({ ...e,
                            [t.split(".")[0]]: t in this.state.checks ? {
                                status: this.state.checks[t],
                                results: this.state.checkResults[t]
                            } : {
                                status: v.Z.HIDDEN,
                                results: {}
                            }
                        })), {});
                        Object.values(s).every((e => e.status !== v.Z.KO)) && (0, U.Gh)({
                            id: this.props.appointmentId
                        }, "tcs_device_verified"), O.ZP.post(`/patient_app/appointments/${this.props.appointmentId}/telehealth_diagnostics`, {
                            body: { ...s,
                                kind: this.props.kind,
                                trackingUuid: this.state.trackingUuid
                            }
                        })
                    })), M(this, "handleCheckUpdate", (e => (t, s) => {
                        var n, i;
                        t === v.Z.LOADING || t === this.state.checks[e] && e !== m.Z.name || (this.setState((n => ({
                            checks: { ...n.checks,
                                [e]: t
                            },
                            checkResults: { ...n.checkResults,
                                [e]: s
                            }
                        })), (() => {
                            var s, n;
                            null === (s = (n = this.props).onChecksUpdate) || void 0 === s || s.call(n, this.state.checks);
                            const i = Object.keys(this.state.checks),
                                a = i.length === A.length,
                                l = e === m.Z.name && t === v.Z.KO && 1 === i.length;
                            (a || l) && this.postTelehealthDiagnostic()
                        })), e === N.name && (this.speedStats = s), s && (null === (n = (i = this.props).postEvent) || void 0 === n || n.call(i, e, {
                            status: t === v.Z.HIDDEN ? v.Z.OK : t,
                            ...s
                        })))
                    })), M(this, "track", (e => {
                        let {
                            name: t,
                            details: s = {}
                        } = e;
                        (0, j.ZP)({
                            name: t,
                            itemType: H.i.APPOINTMENT,
                            itemId: this.props.appointmentId,
                            details: { ...s,
                                trackingUuid: this.state.trackingUuid
                            }
                        })
                    })), M(this, "renderChecks", (() => {
                        const {
                            checks: e
                        } = this.state, t = [u.I, u.Q].every((t => {
                            let {
                                name: s
                            } = t;
                            return (0, g.uE)(e, s)
                        })) && window.OT;
                        return (0, Z.jsxs)(Z.Fragment, {
                            children: [t ? (0, Z.jsx)(P.Z, {
                                track: this.track,
                                showTechnicalProblemSection: !0
                            }) : null, A.map((e => e.name === m.Z.name || (0, g.uE)(this.state.checks, m.Z.name) ? t && ["camera", "micro"].includes(e.name) ? null : (0, Z.jsx)(h.Z, {
                                check: e,
                                checks: this.state.checks,
                                onCheckUpdate: this.handleCheckUpdate(e.name),
                                ref: e === m.Z ? this.browserCheckRef : void 0,
                                errorTutorial: L[e.name],
                                hideHelp: this.props.showDownloadApp
                            }, `check-${e.name}`) : null))]
                        })
                    }))
                }
                componentDidMount() {
                    this.setState({
                        trackingUuid: (0, F.Z)()
                    })
                }
                render() {
                    return (0, Z.jsx)(Z.Fragment, {
                        children: this.state.started ? this.renderChecks() : (0, Z.jsx)(W, {
                            onTap: this.startChecks
                        })
                    })
                }
            }
            M(q, "contextType", R.pu);
            const $ = (0, I.nX)(q)
        },
        47876: (e, t, s) => {
            "use strict";
            s.d(t, {
                U2: () => l
            });
            var n = s(527360),
                i = s.n(n);
            s(977954);
            const a = "video-setup-working";

            function l() {
                return i().get(a)
            }
        },
        458: (e, t, s) => {
            "use strict";
            s.d(t, {
                ZP: () => q,
                nX: () => W
            });
            var n = s(184481),
                i = s(929014),
                a = s(857152),
                l = s(600625),
                c = s(177140),
                o = s(445884),
                r = s(432107),
                h = s(284295),
                d = s(14570),
                p = s(136171),
                m = s(51048),
                u = s(822895),
                v = s(888748),
                g = s(47876),
                f = s(527360),
                S = s.n(f),
                z = s(971691),
                k = s(953008),
                E = s(192772),
                b = s(294184),
                w = s.n(b),
                y = s(5212),
                _ = s(8955),
                x = s(261397),
                C = s(136591),
                Z = s(315872),
                V = s(516590),
                D = s(747317),
                T = s(497846),
                R = s(380703),
                P = s(329487),
                j = s(97034),
                H = s(171493),
                O = (s(85871), s(785893));

            function I(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            const F = "telehealth-notification",
                U = ["OT_TIMEOUT", "OT_ICE_WORKFLOW_FAILED", "OT_SOCKET_CLOSE_TIMEOUT", "OT_UNEXPECTED_SERVER_RESPONSE"],
                M = () => document.pictureInPictureElement && document.querySelector(".dl-video-chat-subscriber video") === document.pictureInPictureElement,
                N = async () => !document.pictureInPictureElement || document.exitPictureInPicture(),
                A = () => {
                    const e = document.querySelector(".dl-video-chat-subscriber video");
                    e && (M() ? N() : e.requestPictureInPicture())
                };
            class L extends n.PureComponent {
                constructor() {
                    var e;
                    super(...arguments), e = this, I(this, "state", {
                        mediaDevicesRequested: !1,
                        audio: !1,
                        video: !1,
                        screenSharing: !1,
                        screenSharingVideoSource: null,
                        screenWatching: !1,
                        fullscreen: !1,
                        snapshots: [],
                        waitingRoom: this.props.isPatient && this.props.videoChat && [a.AS, a.i3].includes(this.props.videoChat.status),
                        showHangupDialog: !1,
                        showScreenSharingDialog: !1,
                        cameraSwitchDisabled: !1,
                        displayConnectionError: !1,
                        subscriberAudioLevelEnabled: !1,
                        subscriberMicIsOn: !0,
                        subscriberMicTracked: !1,
                        snapshotError: !1
                    }), I(this, "videoChatUrl", this.props.isPatient ? `/patient_app/video_chats/${this.props.videoChat.appointment_id}` : `/doctor_app/video_chats/${this.props.videoChat.appointment_id}`), I(this, "videoChatRef", (0, n.createRef)()), I(this, "publisherRef", (0, n.createRef)()), I(this, "subscriberRef", (0, n.createRef)()), I(this, "sessionEventHandlers", {
                        sessionConnected: e => {
                            this.session = e.target, 1 === this.session.connections.length() && this.props.onParticipantDisconnect && this.props.onParticipantDisconnect(), this.session.on("signal:hangup", (e => {
                                this.session && e.from.connectionId !== this.session.connection.id && (this.props.onHangup(this.props.isPatient ? "doctor" : "patient"), this.log("received_hangup"))
                            })), this.props.isPatient && this.session.on("signal:snapshot", (() => {
                                m.N.notify({
                                    message: o.Z.t("common.telehealth.snapshot_notification")
                                })
                            }))
                        },
                        sessionDisconnected: e => {
                            this.session = null, "forceDisconnected" === e.reason && this.props.onForceDisconnection && this.props.onForceDisconnection()
                        },
                        sessionReconnecting: () => this.setState({
                            reconnecting: !0
                        }),
                        sessionReconnected: () => this.setState({
                            reconnecting: !1
                        }),
                        connectionCreated: e => {
                            this.session && e.connection.id !== this.session.connection.id && this.props.onParticipantConnect && this.props.onParticipantConnect()
                        },
                        connectionDestroyed: e => {
                            this.session && "forceDisconnected" !== e.reason && e.connection.id !== this.session.connection.id && this.props.onParticipantDisconnect && this.props.onParticipantDisconnect()
                        },
                        streamCreated: e => {
                            this.setState({
                                subscriberMicIsOn: e.stream.hasAudio
                            }), this.hasDisconnected && m.N.notify({
                                message: o.Z.t("common.telehealth.connectivity_issue_fixed")
                            }), (0, Z._O)(e.stream.videoType) && this.setState({
                                screenWatching: !0
                            })
                        },
                        streamDestroyed: e => {
                            if ((0, Z._O)(e.stream.videoType)) this.setState({
                                screenWatching: !1
                            });
                            else if (this.props.isPatient || this.exitScreenSharing(), "forceDisconnected" !== e.reason && (this.hasDisconnected = !0, this.props.isPatient)) {
                                const e = o.Z.t("common.telehealth.doctor_connectivity_issue", {
                                    name: this.props.videoChat.profile.name_with_title
                                });
                                m.N.notify({
                                    message: e,
                                    uiStyle: "danger"
                                })
                            }
                        },
                        streamPropertyChanged: e => {
                            e.stream.publisher || "hasAudio" !== e.changedProperty || this.setState({
                                subscriberMicIsOn: e.newValue
                            })
                        }
                    }), I(this, "fetchDeviceState", (async () => {
                        c.d && (0, c.IX)();
                        const e = await (0, c.xr)();
                        return e.audio.working || e.video.working ? e.audio.working ? e.video.working || this.setLocalTracksError(e.video.exception, "video") : this.setLocalTracksError(e.audio.exception, "audio") : this.setLocalTracksError(e.audio.exception, "both"), this.setState({
                            mediaDevicesRequested: !0,
                            audio: e.audio.working,
                            video: e.video.working && this.videoCapable(),
                            deviceState: e
                        }), !0
                    })), I(this, "setLocalTracksError", ((e, t) => {
                        const s = "NotAllowedError" !== e.name ? `unknown_error_${t}` : `permission_denied_${t}`;
                        this.log("error_creating_local_tracks", {
                            name: e.name,
                            message: e.message
                        }), this.setState({
                            localTracksError: s
                        })
                    })), I(this, "toggle", (e => () => {
                        if ("fullscreen" === e) {
                            const e = !this.state.fullscreen;
                            if (!this.videoChatRef) return;
                            if (e) {
                                const e = this.videoChatRef.current;
                                e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.requestFullscreen && e.requestFullscreen()
                            } else document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.exitFullscreen && document.exitFullscreen()
                        } else if ("cameraSwitch" === e) this.setState({
                            cameraSwitchDisabled: !0
                        }), this.publisherRef.current.getPublisher().cycleVideo().then((() => this.setState({
                            cameraSwitchDisabled: !1
                        }))).catch((e => this.log("camera_switch_error", e)));
                        else if ("pip" === e) try {
                            A()
                        } catch (e) {
                            this.log("pip_error", e)
                        }
                        this.unmounted || this.setState((t => {
                            const s = !t[e];
                            return this.log(e, {
                                toggle: s
                            }), {
                                [e]: s
                            }
                        }))
                    })), I(this, "toggleScreenSharing", (() => {
                        this.setState((e => e.screenSharing ? (this.log("stop_sharing_screen"), N(), {
                            video: !0,
                            screenSharing: !1,
                            screenSharingVideoSource: null
                        }) : (e.fullscreen && document.webkitExitFullscreen(), {
                            showScreenSharingDialog: !0,
                            fullscreen: !1
                        })))
                    })), I(this, "exitScreenSharing", (() => {
                        this.setState((e => e.screenSharing ? (this.log("stop_sharing_screen"), N(), {
                            video: !0,
                            screenSharing: !1,
                            screenSharingVideoSource: null
                        }) : {}))
                    })), I(this, "hangup", (() => {
                        this.state.showHangupDialog || !this.props.isPatient ? (this.log("hangup"), this.session && this.session.signal({
                            type: "hangup"
                        }), this.props.isPatient || this.updateVideoChat({
                            status: a.h6
                        }), this.setState({
                            showHangupDialog: !1
                        }), setTimeout((() => this.props.onHangup(this.props.isPatient ? "patient" : "doctor")), 300)) : this.setState({
                            showHangupDialog: !0
                        })
                    })), I(this, "handleFullscreenChange", (() => {
                        this.setState({
                            fullscreen: !!document.webkitIsFullScreen
                        })
                    })), I(this, "updateVideoChat", (e => {
                        l.ZP.put(this.videoChatUrl, {
                            body: e
                        }).then((() => {
                            this.props.refreshAppointment && this.props.refreshAppointment()
                        }))
                    })), I(this, "log", (function(t) {
                        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return console.log(t, s), (0, u.y)(e.props.videoChat.appointment_id, t, s)
                    })), I(this, "onError", (e => {
                        let {
                            name: t,
                            ...s
                        } = e;
                        this.log(t, s), U.includes(t) ? this.setState({
                            displayConnectionError: !0
                        }) : "OT_USER_MEDIA_ACCESS_DENIED" === t && this.exitScreenSharing()
                    })), I(this, "onRestart", (() => {
                        this.log("manually_reload_connection_issues").finally((() => {
                            window.location.reload()
                        }))
                    })), I(this, "buildEncryptedBody", (async e => {
                        let {
                            blob: t
                        } = e;
                        const {
                            account: s,
                            tanker: {
                                encryptFile: n,
                                startTanker: i
                            },
                            videoChat: a,
                            medicalFolder: l
                        } = this.props, c = await i(s);
                        if (!(0, x.aE)(c, s)) throw new Error("User is not Tanker enrolled");
                        const o = new FormData;
                        o.append("document[kind]", H.Id), o.append("document[extension]", "png"), o.append("appointment_id", a.appointment_id), null !== l && void 0 !== l && l.id && o.append("medical_folder_id", l.id);
                        const {
                            encryptedFile: r
                        } = await n(t, [{
                            agendaId: a.agenda_id
                        }]);
                        if (!r) throw new Error("Encryption of the snapshot failed");
                        return o.append("document[tanker_encrypted]", !0), o.append("file", r), o
                    })), I(this, "uploadSnapshot", (async e => {
                        let {
                            canvas: t
                        } = e;
                        return new Promise((e => {
                            t.toBlob((t => {
                                this.buildEncryptedBody({
                                    blob: t
                                }).then((t => (0, j.v_)("/doctor_app/documents", t).then(e)))
                            }))
                        }))
                    })), I(this, "onSnapshot", (async () => {
                        const {
                            onSnapshot: e
                        } = this.props, t = (0, T.$U)(this.subscriberRef);
                        if (t) try {
                            "de" === (0, y.rZ)() ? (0, T.cv)(t) : await this.uploadSnapshot({
                                canvas: t
                            }), this.setState((e => {
                                let {
                                    snapshots: s
                                } = e;
                                return {
                                    snapshots: [...s, t]
                                }
                            })), this.session.signal({
                                type: "snapshot"
                            }), e && e()
                        } catch (e) {
                            this.setState((() => ({
                                snapshotError: !0
                            }))), window.crashReporter.captureException(e)
                        }
                    })), I(this, "videoCapable", (() => {
                        const e = _.U2("videoCapable");
                        return void 0 === e || e
                    })), I(this, "onSubscriberTalk", (e => {
                        if (this.unmounted) return;
                        let t = !1;
                        this.setState((s => (t = !s.subscriberMicTracked && e, {
                            subscriberAudioLevelEnabled: e,
                            subscriberMicTracked: s.subscriberMicTracked || e
                        }))), t && (0, V.ZP)({
                            name: "telehealth_vc_audio_detected",
                            itemId: this.props.videoChat.id,
                            itemType: D.i.VIDEO_CHAT,
                            details: {
                                kind: this.props.isPatient ? "doctor" : "patient",
                                time: _.U2(`timer_start_${this.props.videoChat.appointment_id}`) || null
                            }
                        })
                    })), I(this, "onConfirmScreenSharing", (async () => {
                        M() || document.pictureInPictureElement || A(), this.setState({
                            showScreenSharingDialog: !1
                        }), this.props.closeNotes && this.props.closeNotes();
                        const e = await (0, Z.gO)();
                        e && (this.log("start_sharing_screen"), this.setState((() => ({
                            video: !1,
                            screenSharing: !0,
                            screenSharingVideoSource: e
                        }))))
                    }))
                }
                componentDidMount() {
                    document.onwebkitfullscreenchange && (document.onwebkitfullscreenchange = this.handleFullscreenChange);
                    const {
                        isPatient: e
                    } = this.props;
                    this.fetchDeviceState(), c.d && (0, Z.nf)(), this.log("device", c.Uh), e ? (0, v.IH)(F, "/audios/telehealth-notification.mp3") : this.log("diagnostic_status", {
                        status: g.U2() || "not-set",
                        lastDiagnostic: S().get("last_diagnostic")
                    }), this.props.setTogglePip && this.props.setTogglePip((() => this.toggle("pip")))
                }
                componentWillUnmount() {
                    this.unmounted = !0, this.session && this.session.signal({
                        type: "hangup"
                    }), document.onwebkitfullscreenchange && (document.onwebkitfullscreenchange = null), this.unmounted = !0
                }
                render() {
                    const {
                        audio: e,
                        video: t,
                        screenSharing: s,
                        screenWatching: n,
                        deviceState: a,
                        fullscreen: l,
                        showHangupDialog: c,
                        showScreenSharingDialog: u,
                        reconnecting: g,
                        waitingRoom: f,
                        mediaDevicesRequested: S,
                        displayConnectionError: E,
                        cameraSwitchDisabled: b,
                        snapshots: y,
                        localTracksError: _,
                        snapshotError: x
                    } = this.state, {
                        videoChat: C,
                        isPatient: Z
                    } = this.props;
                    return (0, O.jsxs)(O.Fragment, {
                        children: [(0, O.jsx)(k.Z, {
                            show: E,
                            onHide: () => this.setState({
                                displayConnectionError: !1
                            }),
                            onTap: this.onRestart
                        }), !!_ && (0, O.jsx)(i.Z, {
                            variant: "deprecated-alert-interface",
                            uiStyle: "error",
                            className: "snapshot-display-none",
                            children: o.Z.t(`common.telehealth.${_}_html`)
                        }), g && (0, O.jsxs)(i.Z, {
                            variant: "deprecated-alert-interface",
                            uiStyle: "warning",
                            children: [o.Z.t("common.telehealth.connectivity_issue"), !Z && (0, O.jsx)("div", {
                                children: o.Z.t("common.telehealth.call_patient_if_problem_persists")
                            })]
                        }), (0, O.jsxs)("div", {
                            ref: this.videoChatRef,
                            className: w()("dl-video-chat", {
                                "dl-video-chat-tutorial": C.tutorial
                            }),
                            "data-walkme": "video-consultation-video",
                            children: [(0, O.jsxs)("div", {
                                className: "dl-toast-wrapper snapshot-hide dl-toast-wrapper-left",
                                children: [y.map(((e, t) => (0, O.jsx)(T.$j, {
                                    dataUrl: e.toDataURL()
                                }, t))), x && (0, O.jsx)(P.FN, {
                                    onHide: () => this.setState({
                                        snapshotError: !1
                                    }),
                                    message: (0, O.jsx)("div", {
                                        className: "flex dl-align-items-center",
                                        children: (0, O.jsx)("div", {
                                            className: "dl-padding-x-16",
                                            children: o.Z.t("common.error")
                                        })
                                    })
                                })]
                            }), Z && (0, O.jsx)(m.Z, {}), (0, O.jsx)(d.Z, {
                                show: c,
                                onConfirm: this.hangup,
                                onDismiss: () => this.setState({
                                    showHangupDialog: !1
                                })
                            }), (0, O.jsx)(p.Z, {
                                show: u,
                                onConfirm: this.onConfirmScreenSharing,
                                onDismiss: () => this.setState({
                                    showScreenSharingDialog: !1
                                })
                            }), f && (0, O.jsx)(r.Z, {
                                onClose: () => this.context.dismiss("/"),
                                ...C
                            }), (0, O.jsx)(z.Z, {
                                subscriberRef: this.subscriberRef,
                                publisherRef: this.publisherRef,
                                sessionEventHandlers: this.sessionEventHandlers,
                                screenSharingEventHandlers: {
                                    mediaStopped: () => this.exitScreenSharing()
                                },
                                mediaDevicesRequested: S,
                                onParticipantJoin: () => {
                                    Z && (0, v.hY)(F), this.setState({
                                        waitingRoom: !1,
                                        reconnecting: !1
                                    })
                                },
                                onError: this.onError,
                                log: this.log,
                                audio: e,
                                video: t,
                                screenSharing: s,
                                screenSharingVideoSource: this.state.screenSharingVideoSource,
                                screenWatching: n,
                                deviceState: a,
                                onSubscriberTalk: this.onSubscriberTalk,
                                ...this.props
                            }), !f && S && (0, O.jsx)(h.Z, {
                                isPatient: Z,
                                videoChat: C,
                                fullscreen: l,
                                onHangup: this.hangup,
                                onToggle: this.toggle,
                                onSnapshot: this.onSnapshot,
                                audio: e,
                                video: t,
                                screenSharing: s,
                                toggleScreenSharing: this.toggleScreenSharing,
                                deviceState: a,
                                cameraSwitchDisabled: b,
                                audioLevelEnabled: this.state.subscriberAudioLevelEnabled,
                                subscriberMicIsOn: this.state.subscriberMicIsOn,
                                isEhr: this.props.isEhr
                            })]
                        })]
                    })
                }
            }
            I(L, "contextType", E.pu);
            const W = e => t => {
                    const [i, a] = (0, n.useState)("undefined" !== typeof window.OT), l = (0, C.Z)();
                    return (0, n.useEffect)((() => {
                        (async () => {
                            if (!i) {
                                const e = await s.e(85447).then(s.t.bind(s, 110772, 23)).then((e => {
                                    let {
                                        default: t
                                    } = e;
                                    return t
                                }));
                                if (window.OT = e, !l.current) return;
                                a(!0)
                            }
                        })()
                    }), []), i ? (0, O.jsx)(e, { ...t
                    }) : null
                },
                q = (0, x._M)((0, R.Z)(W(L)))
        },
        48253: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => h
            });
            var n = s(177140),
                i = s(835866),
                a = s(598942),
                l = s.n(a),
                c = s(5212),
                o = s(227258);
            const r = n.gO && n.G6 || ["Android", "macOS", "Windows", "Linux"].includes(n.Uh.os.name) && ["Chrome", "Electron", "Samsung Internet for Android"].includes(n.Uh.browser.name) && !n.WE.match(/xiaomi/i);
            const h = {
                run: async function() {
                    return [((0, c.Zz)() && window.OT ? 1 === window.OT.checkSystemRequirements() : r) ? o.Z.HIDDEN : o.Z.KO, {
                        isWebRTCCapable: r,
                        ...n.Uh
                    }]
                },
                name: "browser",
                iconMap: {
                    default: l()
                },
                extraMessage: i.Z
            }
        },
        458326: (e, t, s) => {
            "use strict";
            s.d(t, {
                i: () => a,
                sN: () => l,
                uE: () => i
            });
            var n = s(227258);
            const i = (e, t) => [n.Z.OK, n.Z.HIDDEN].includes(e[t]),
                a = (e, t) => Object.entries(e).some((e => {
                    let [s, i] = e;
                    return t.includes(s) && i === n.Z.KO
                })),
                l = e => Object.keys(e).filter((t => !i(e, t))).map((e => e.startsWith("connection") ? "connection" : e))
        },
        260470: (e, t, s) => {
            var n = s(184481);
            const i = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, [n.createElement("path", {
                    d: "M0 0h262v44H0z",
                    key: 0
                }), n.createElement("g", {
                    key: 1
                }, [n.createElement("rect", {
                    width: "262",
                    height: "35",
                    fill: "#F2F3F5",
                    fillRule: "nonzero",
                    rx: "17.5",
                    key: 0
                }), n.createElement("path", {
                    d: "M14 10h16v16H14z",
                    key: 1
                }), n.createElement("path", {
                    fill: "#008439",
                    fillRule: "nonzero",
                    d: "M20 18h4v4h-4z",
                    key: 2
                }), n.createElement("path", {
                    fill: "#008439",
                    fillRule: "nonzero",
                    d: "M26 15.3h-.7V14a3.3 3.3 0 0 0-6.6 0v1.3H18c-.7 0-1.3.6-1.3 1.4v6.6c0 .8.6 1.4 1.3 1.4h8c.7 0 1.3-.6 1.3-1.4v-6.6c0-.8-.6-1.4-1.3-1.4zm-4 6c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3zm2-6h-4V14a2 2 0 0 1 4 0v1.3z",
                    key: 3
                }), n.createElement("path", {
                    fill: "#7791A2",
                    d: "m185.2 20.4 1.7-5.3h1.2l-2.5 6.9h-.9l-2.5-6.9h1.2l1.8 5.3zm5.3 1.6h-1.2v-6.9h1.2V22zm-1.3-8.7c0-.2 0-.3.2-.5l.5-.2.5.2.2.5c0 .2 0 .4-.2.5l-.5.2c-.2 0-.4 0-.5-.2a.7.7 0 0 1-.2-.5zm2.9 5.2.1-1.4.6-1.1c.2-.3.5-.6.9-.7.3-.2.7-.3 1-.3.5 0 .9 0 1.2.2l.8.6v-3.6h1.2V22h-1.1v-.7c-.3.2-.6.5-1 .6a2.7 2.7 0 0 1-2.1 0c-.4-.2-.7-.4-.9-.8l-.6-1-.1-1.5zm1.1.1.1 1 .4.8.5.5c.3.2.5.2.8.2h.6a1.6 1.6 0 0 0 .8-.6l.3-.4V17l-.3-.4a1.6 1.6 0 0 0-.8-.5 2 2 0 0 0-1.4.1l-.5.5-.4.8v1.1zm9.3 3.5c-.5 0-.9 0-1.3-.2a2.9 2.9 0 0 1-1.6-1.8c-.2-.4-.2-.8-.2-1.3v-.3c0-.5 0-1 .2-1.5.2-.4.4-.8.7-1a2.9 2.9 0 0 1 3.3-.7c.4.1.7.4 1 .7l.4 1 .2 1.4v.5h-4.7l.2.9.4.7a2 2 0 0 0 1.5.7c.4 0 .8-.1 1-.3l.8-.7.7.6a3.1 3.1 0 0 1-1 1l-.7.2-.9.1zm-.1-6.1a1.6 1.6 0 0 0-1.2.5 2 2 0 0 0-.4.6l-.2.8h3.4v-.7c-.1-.3-.2-.5-.4-.6l-.5-.5-.7-.1zm3.8 2.5c0-.5.1-1 .3-1.4.1-.4.3-.8.6-1a2.8 2.8 0 0 1 2.3-1.1c.5 0 .9 0 1.3.3.4.1.7.4 1 .7l.6 1.1.2 1.4v.1c0 .5 0 1-.2 1.4l-.6 1.1-1 .8-1.3.2c-.5 0-1 0-1.3-.2l-1-.8c-.3-.3-.5-.6-.6-1l-.3-1.5v-.1zm1.2.1.1 1 .4.8.6.6.9.2a1.7 1.7 0 0 0 1.4-.8l.4-.8.1-1v-.1l-.1-1c0-.3-.2-.5-.4-.8-.1-.2-.3-.4-.6-.5-.2-.2-.5-.2-.8-.2a1.7 1.7 0 0 0-1.5.7l-.4.8v1.1zm9 0h-3v-1h3v1zm4 2.6a1.8 1.8 0 0 0 1-.4l.4-.4.1-.6h1.1c0 .3 0 .6-.2 1l-.6.6a3 3 0 0 1-1.9.7c-.5 0-1 0-1.3-.2l-1-.8-.6-1-.1-1.4v-.3l.1-1.3.6-1c.3-.4.6-.6 1-.8a3 3 0 0 1 1.3-.3c.4 0 .8 0 1.1.2l.9.5.5.8c.2.3.2.6.2 1h-1l-.2-.6a1.6 1.6 0 0 0-1.5-1c-.4 0-.7.1-.9.3l-.6.6-.3.7v2.1c0 .3.2.6.3.8l.6.6 1 .2zm5.1-5.2c.3-.3.6-.6 1-.7.3-.2.6-.3 1-.3l1 .1.7.5.4.8.2 1.1V22h-1.2v-4.5l-.1-.7c0-.2-.1-.3-.3-.5a1 1 0 0 0-.4-.2 2 2 0 0 0-1.6.2 2 2 0 0 0-.7.8V22h-1.1v-9.8h1.1V16zm10.3 6-.1-.3-.1-.4a3.1 3.1 0 0 1-.8.6 2.6 2.6 0 0 1-1.2.2l-1-.1-.6-.5a1.9 1.9 0 0 1-.7-1.4l.2-1 .7-.7a3 3 0 0 1 1-.4l1.2-.2h1.2v-.5c0-.4-.1-.7-.4-1-.2-.2-.6-.3-1-.3a2 2 0 0 0-.7 0l-.4.3c-.2 0-.3.2-.3.3l-.2.4h-1.1c0-.2 0-.5.2-.7 0-.2.3-.5.5-.6.2-.2.5-.4.9-.5l1.1-.2 1 .1.8.5.6.7.2 1v3.2a4.7 4.7 0 0 0 .2 1.4v.1h-1.2zm-2-.9a2 2 0 0 0 1.1-.3 1.9 1.9 0 0 0 .7-.7v-1.4h-1c-.7 0-1.2 0-1.6.3a1 1 0 0 0-.5 1v.4l.3.4.4.2.6.1zm6.4-7.6V15h1.3v1h-1.3v4.6l.2.3.3.1h.8v.9h-.4l-.5.1a2 2 0 0 1-.6 0l-.5-.4-.4-.5V16h-1.3v-.9h1.2v-1.6h1.2z",
                    key: 4
                }), n.createElement("path", {
                    fill: "#435F71",
                    d: "m68.9 21.4.1-.5c.2-.2.3-.2.6-.2.2 0 .4 0 .5.2l.2.5c0 .2 0 .3-.2.5l-.5.2-.6-.2a.7.7 0 0 1-.1-.5zm0-5.6.1-.5c.2-.2.3-.2.6-.2.2 0 .4 0 .5.2.2.1.2.3.2.5s0 .3-.2.5l-.5.2-.6-.2a.7.7 0 0 1-.1-.5zm3.4 7h-1l3.8-10h1l-3.8 10zm4 0h-1.1l3.9-10h1l-3.9 10zm11.1-2.4 1.3-5.3H90L88 22h-1l-1.6-5.2-1.6 5.2h-1l-2-6.9H82l1.3 5.2 1.6-5.2h1l1.6 5.3zm9.8 0 1.3-5.3h1.2l-2 6.9h-1l-1.6-5.2-1.7 5.2h-1l-2-6.9h1.3l1.3 5.2 1.6-5.2h1l1.6 5.3zm9.7 0 1.4-5.3h1.1l-2 6.9h-1l-1.6-5.2-1.6 5.2h-1l-2-6.9h1.2l1.4 5.2 1.6-5.2h1l1.5 5.3zm3 1c0-.2 0-.4.2-.5 0-.2.3-.2.5-.2s.4 0 .5.2c.2.1.2.3.2.5s0 .3-.2.5l-.5.2-.5-.2a.7.7 0 0 1-.2-.5zm3-2.9c0-.5.2-1 .3-1.4.1-.5.3-.8.5-1.1.3-.3.6-.6.9-.7.3-.2.7-.3 1.1-.3.4 0 .8 0 1 .2l1 .6v-3.6h1V22h-1v-.7l-.9.6a2.7 2.7 0 0 1-2.2 0l-.9-.8-.5-1-.2-1.5zm1.3.1v1l.4.8c.1.2.3.4.6.5.2.2.5.2.8.2h.5a1.6 1.6 0 0 0 .8-.6l.3-.4V17c0-.2-.2-.3-.3-.4a1.6 1.6 0 0 0-.8-.5 2 2 0 0 0-1.3.1c-.3.1-.5.3-.6.5-.2.3-.3.5-.3.8l-.1 1v.1zm6-.1c0-.5.2-1 .3-1.4l.6-1a2.8 2.8 0 0 1 2.3-1.1c.5 0 1 0 1.3.3.4.1.7.4 1 .7.3.3.5.7.6 1.1.2.4.2.9.2 1.4v.1c0 .5 0 1-.2 1.4-.1.5-.3.8-.6 1.1l-1 .8-1.3.2c-.5 0-.9 0-1.3-.2l-1-.8-.6-1-.2-1.5v-.1zm1.3.1v1l.5.8.6.6.8.2a1.7 1.7 0 0 0 1.5-.8c.1-.2.3-.5.3-.8l.2-1v-.1c0-.3 0-.7-.2-1 0-.3-.2-.5-.3-.8l-.6-.5c-.3-.2-.6-.2-.9-.2a1.7 1.7 0 0 0-1.4.7l-.4.8-.1 1v.1zm9.3 2.6a1.8 1.8 0 0 0 1-.4l.4-.4.2-.6h1.1l-.2 1-.6.6a3 3 0 0 1-2 .7c-.4 0-.9 0-1.3-.2l-1-.8-.5-1-.2-1.4v-.3c0-.4 0-.9.2-1.3.1-.4.3-.8.6-1 .2-.4.5-.6 1-.8a3 3 0 0 1 1.3-.3c.4 0 .7 0 1 .2l1 .5.5.8.2 1h-1.1c0-.2 0-.4-.2-.6a1.6 1.6 0 0 0-1.4-1c-.4 0-.7.1-1 .3-.2.1-.4.3-.5.6-.2.2-.3.5-.3.7l-.1 1v1.1l.4.8.6.6.9.2zm5.6-7.7V15h1.3v1h-1.3v4.6l.2.3.3.1h.8v.9h-.3l-.6.1a2 2 0 0 1-.6 0l-.5-.4-.3-.5-.2-1V16H134v-.9h1.2v-1.6h1.2zm2.2 5 .2-1.4c.2-.4.4-.8.7-1a2.8 2.8 0 0 1 2.2-1.1c.5 0 1 0 1.4.3l1 .7.6 1.1.2 1.4v.1c0 .5 0 1-.2 1.4l-.7 1.1c-.2.3-.6.6-1 .8l-1.2.2c-.5 0-1 0-1.3-.2-.4-.2-.8-.5-1-.8l-.7-1-.2-1.5v-.1zm1.2.1.1 1 .4.8.6.6.9.2a1.7 1.7 0 0 0 1.4-.8l.4-.8.1-1v-.1l-.1-1-.4-.8-.6-.5c-.2-.2-.5-.2-.9-.2a1.7 1.7 0 0 0-1.4.7l-.4.8v1.1zm7.8 3.4h-1.1v-9.8h1.1V22zm3.2 0h-1.2v-6.9h1.2V22zm-1.3-8.7c0-.2 0-.3.2-.5l.5-.2.5.2.2.5c0 .2 0 .4-.2.5l-.5.2c-.2 0-.4 0-.5-.2a.7.7 0 0 1-.2-.5zm9 5.3c0 .5 0 1-.2 1.4-.1.5-.3.8-.5 1.1-.2.4-.5.6-.9.8l-1 .2c-.5 0-1 0-1.3-.2l-.8-.7v.8h-1.1v-9.8h1.1V16a2.3 2.3 0 0 1 2-.9c.4 0 .8 0 1.1.3.4.1.7.4.9.7l.5 1 .2 1.5v.1zm-1.2 0v-1l-.4-.9c-.1-.2-.3-.4-.6-.5l-.8-.2a2 2 0 0 0-.6 0 1.7 1.7 0 0 0-.8.7l-.3.4v3l.3.4a1.7 1.7 0 0 0 .8.5 2 2 0 0 0 1.4 0l.6-.6.3-.8.1-1zm2.7 2.8c0-.2 0-.4.2-.5 0-.2.3-.2.5-.2s.4 0 .6.2l.1.5-.1.5-.6.2-.5-.2a.7.7 0 0 1-.2-.5zm3-2.9c0-.5.2-1 .3-1.4.1-.5.3-.8.5-1.1.3-.3.6-.6.9-.7.3-.2.7-.3 1.1-.3.4 0 .8 0 1.1.2l.8.6v-3.6h1.2V22h-1l-.1-.7-.9.6a2.7 2.7 0 0 1-2.2 0l-.9-.8-.5-1-.2-1.5zm1.3.1v1l.4.8c.1.2.3.4.6.5.2.2.5.2.8.2h.5a1.6 1.6 0 0 0 .8-.6l.3-.4V17c0-.2-.1-.3-.3-.4a1.6 1.6 0 0 0-.8-.5 2 2 0 0 0-1.3.1c-.3.1-.5.3-.6.5-.1.3-.3.5-.3.8l-.1 1v.1zm9.3 3.5c-.5 0-1 0-1.3-.2a2.9 2.9 0 0 1-1.7-1.8l-.2-1.3v-.3l.3-1.5a2.9 2.9 0 0 1 4-1.8l.9.8.5 1 .1 1.4v.5h-4.6l.1.9.4.7a2 2 0 0 0 1.5.7c.4 0 .8-.1 1-.3.4-.2.6-.4.8-.7l.8.6a3.1 3.1 0 0 1-1 1l-.7.2-1 .1zm-.2-6.1a1.6 1.6 0 0 0-1.2.5 2 2 0 0 0-.4.6l-.2.8h3.5l-.1-.7-.3-.6-.5-.5-.8-.1zm4.4 6.8h-1l3.9-10h1l-3.9 10z",
                    key: 5
                }), n.createElement("path", {
                    fill: "#008439",
                    d: "M40 16c.3-.3.6-.6 1-.7.3-.2.7-.3 1-.3l1 .1.7.5.4.8.2 1.1V22H43v-5.2l-.3-.5a1 1 0 0 0-.5-.2 2 2 0 0 0-1.6.2 2 2 0 0 0-.6.8V22h-1.2v-9.8H40V16zm7.6-2.5V15H49v1h-1.3v4.2l.1.4.2.3.2.1h.8v.9h-.4l-.5.1a2 2 0 0 1-.7 0l-.5-.4-.3-.5-.1-1V16h-1.3v-.9h1.3v-1.6h1.1zm4.3 0V15h1.3v1h-1.3v4.6l.2.3.3.1h.8v.9h-.4l-.5.1a2 2 0 0 1-.6 0l-.5-.4-.4-.5V16h-1.3v-.9h1.2v-1.6H52zm8.4 5.1-.1 1.4c-.2.5-.3.8-.6 1.1-.2.4-.5.6-.8.8l-1.1.2a3 3 0 0 1-1.1-.2c-.4-.1-.7-.3-.9-.6v3.3h-1.2v-9.5h1.1v.8l1-.7 1-.2c.5 0 .9 0 1.2.3.3.1.6.4.9.7l.5 1 .1 1.5v.1zm-1.1 0-.1-1-.4-.9c-.1-.2-.3-.4-.6-.5l-.8-.2a2 2 0 0 0-.5 0 1.6 1.6 0 0 0-.8.6l-.3.3v3.3c0 .2.2.3.3.4a1.6 1.6 0 0 0 .8.5h.5a1.6 1.6 0 0 0 1.4-.7l.4-.8v-1zm6.6 1.6v-.4l-.2-.3-.5-.3a5 5 0 0 0-.8-.2c-.4 0-.8-.2-1-.3l-.9-.4-.4-.5c-.2-.3-.2-.5-.2-.8 0-.3 0-.5.2-.8 0-.2.3-.4.5-.6l.8-.4 1-.2c.4 0 .8 0 1.1.2.3 0 .6.2.9.4a2 2 0 0 1 .6 1.6h-1.1l-.1-.5-.3-.4-.5-.2-.6-.1a2 2 0 0 0-.6 0l-.4.3a.9.9 0 0 0-.3.7v.3l.3.3.4.2.8.2 1.1.4c.3 0 .6.2.8.4.2.2.4.3.5.6l.1.7a1.8 1.8 0 0 1-.7 1.5l-.9.4-1 .1c-.5 0-.9 0-1.2-.2-.4 0-.7-.3-1-.5l-.5-.7a2 2 0 0 1-.2-.8h1.2a1.2 1.2 0 0 0 .6 1l.5.2a2.5 2.5 0 0 0 1.2 0l.5-.2.2-.3.1-.4z",
                    key: 6
                })]), n.createElement("g", {
                    transform: "translate(14 22)",
                    key: 2
                })]))
            }));
            i.defaultProps = {
                width: "262",
                height: "44"
            }, e.exports = i, i.default = i
        },
        102066: (e, t, s) => {
            var n = s(184481);
            const i = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, [n.createElement("path", {
                    d: "M0 0h262v44H0z",
                    key: 0
                }), n.createElement("g", {
                    key: 1
                }, [n.createElement("rect", {
                    width: "262",
                    height: "35",
                    fill: "#F2F3F5",
                    fillRule: "nonzero",
                    rx: "17.5",
                    key: 0
                }), n.createElement("path", {
                    d: "M14 10h16v16H14z",
                    key: 1
                }), n.createElement("path", {
                    fill: "#008439",
                    fillRule: "nonzero",
                    d: "M20 18h4v4h-4z",
                    key: 2
                }), n.createElement("path", {
                    fill: "#008439",
                    fillRule: "nonzero",
                    d: "M26 15.3h-.7V14a3.3 3.3 0 0 0-6.6 0v1.3H18c-.7 0-1.3.6-1.3 1.4v6.6c0 .8.6 1.4 1.3 1.4h8c.7 0 1.3-.6 1.3-1.4v-6.6c0-.8-.6-1.4-1.3-1.4zm-4 6c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3zm2-6h-4V14a2 2 0 0 1 4 0v1.3z",
                    key: 3
                }), n.createElement("path", {
                    fill: "#7791A2",
                    d: "m180.2 20.4 1.7-5.3h1.2l-2.5 6.9h-.9l-2.5-6.9h1.2l1.8 5.3zm5.3 1.6h-1.2v-6.9h1.2V22zm-1.3-8.7c0-.2 0-.3.2-.5l.5-.2.5.2.2.5c0 .2 0 .4-.2.5l-.5.2c-.2 0-.4 0-.5-.2a.7.7 0 0 1-.2-.5zm2.9 5.2.1-1.4.6-1.1c.2-.3.5-.6.9-.7.3-.2.7-.3 1-.3.5 0 .9 0 1.2.2l.8.6v-3.6h1.2V22h-1.1v-.7c-.3.2-.6.5-1 .6a2.7 2.7 0 0 1-2.1 0c-.4-.2-.7-.4-.9-.8l-.6-1-.1-1.5zm1.1.1.1 1 .4.8.5.5c.3.2.5.2.8.2h.6a1.6 1.6 0 0 0 .8-.6l.3-.4V17l-.3-.4a1.6 1.6 0 0 0-.8-.5 2 2 0 0 0-1.4.1l-.5.5-.4.8v1.1zm9.3 3.5c-.5 0-.9 0-1.3-.2a2.9 2.9 0 0 1-1.6-1.8c-.2-.4-.2-.8-.2-1.3v-.3c0-.5 0-1 .2-1.5.2-.4.4-.8.7-1a2.9 2.9 0 0 1 3.3-.7c.4.1.7.4 1 .7l.4 1 .2 1.4v.5h-4.7l.2.9.4.7a2 2 0 0 0 1.5.7c.4 0 .8-.1 1-.3l.8-.7.7.6a3.1 3.1 0 0 1-1 1l-.7.2-.9.1zm-.1-6.1a1.6 1.6 0 0 0-1.2.5 2 2 0 0 0-.4.6l-.2.8h3.4v-.7c-.1-.3-.2-.5-.4-.6l-.5-.5-.7-.1zm3.8 2.5c0-.5.1-1 .3-1.4.1-.4.3-.8.6-1a2.8 2.8 0 0 1 2.3-1.1c.5 0 .9 0 1.3.3.4.1.7.4 1 .7l.6 1.1.2 1.4v.1c0 .5 0 1-.2 1.4l-.6 1.1-1 .8-1.3.2c-.5 0-1 0-1.3-.2l-1-.8c-.3-.3-.5-.6-.6-1l-.3-1.5v-.1zm1.2.1.1 1 .4.8.6.6.9.2a1.7 1.7 0 0 0 1.4-.8l.4-.8.1-1v-.1l-.1-1c0-.3-.2-.5-.4-.8-.1-.2-.3-.4-.6-.5-.2-.2-.5-.2-.8-.2a1.7 1.7 0 0 0-1.5.7l-.4.8v1.1zm9 0h-3v-1h3v1zm4 2.6a1.8 1.8 0 0 0 1-.4l.4-.4.1-.6h1.1c0 .3 0 .6-.2 1l-.6.6a3 3 0 0 1-1.9.7c-.5 0-1 0-1.3-.2l-1-.8-.6-1-.1-1.4v-.3l.1-1.3.6-1c.3-.4.6-.6 1-.8a3 3 0 0 1 1.3-.3c.4 0 .8 0 1.1.2l.9.5.5.8c.2.3.2.6.2 1h-1l-.2-.6a1.6 1.6 0 0 0-1.5-1c-.4 0-.7.1-.9.3l-.6.6-.3.7v2.1c0 .3.2.6.3.8l.6.6 1 .2zm5.1-5.2c.3-.3.6-.6 1-.7.3-.2.6-.3 1-.3l1 .1.7.5.4.8.2 1.1V22h-1.2v-4.5l-.1-.7c0-.2-.1-.3-.3-.5a1 1 0 0 0-.4-.2 2 2 0 0 0-1.6.2 2 2 0 0 0-.7.8V22h-1.1v-9.8h1.1V16zm10.3 6-.1-.3-.1-.4a3.1 3.1 0 0 1-.8.6 2.6 2.6 0 0 1-1.2.2l-1-.1-.6-.5a1.9 1.9 0 0 1-.7-1.4l.2-1 .7-.7a3 3 0 0 1 1-.4l1.2-.2h1.2v-.5c0-.4-.1-.7-.4-1-.2-.2-.6-.3-1-.3a2 2 0 0 0-.7 0l-.4.3c-.2 0-.3.2-.3.3l-.2.4h-1.1c0-.2 0-.5.2-.7 0-.2.3-.5.5-.6.2-.2.5-.4.9-.5l1.1-.2 1 .1.8.5.6.7.2 1v3.2a4.7 4.7 0 0 0 .2 1.4v.1h-1.2zm-2-.9a2 2 0 0 0 1.1-.3 1.9 1.9 0 0 0 .7-.7v-1.4h-1c-.7 0-1.2 0-1.6.3a1 1 0 0 0-.5 1v.4l.3.4.4.2.6.1zm6.4-7.6V15h1.3v1h-1.3v4.6l.2.3.3.1h.8v.9h-.4l-.5.1a2 2 0 0 1-.6 0l-.5-.4-.4-.5V16h-1.3v-.9h1.2v-1.6h1.2z",
                    key: 4
                }), n.createElement("path", {
                    fill: "#435F71",
                    d: "m68.9 21.4.1-.5c.2-.2.3-.2.6-.2.2 0 .4 0 .5.2l.2.5c0 .2 0 .3-.2.5l-.5.2-.6-.2a.7.7 0 0 1-.1-.5zm0-5.6.1-.5c.2-.2.3-.2.6-.2.2 0 .4 0 .5.2.2.1.2.3.2.5s0 .3-.2.5l-.5.2-.6-.2a.7.7 0 0 1-.1-.5zm3.4 7h-1l3.8-10h1l-3.8 10zm4 0h-1.1l3.9-10h1l-3.9 10zm11.1-2.4 1.3-5.3H90L88 22h-1l-1.6-5.2-1.6 5.2h-1l-2-6.9H82l1.3 5.2 1.6-5.2h1l1.6 5.3zm9.8 0 1.3-5.3h1.2l-2 6.9h-1l-1.6-5.2-1.7 5.2h-1l-2-6.9h1.3l1.3 5.2 1.6-5.2h1l1.6 5.3zm9.7 0 1.4-5.3h1.1l-2 6.9h-1l-1.6-5.2-1.6 5.2h-1l-2-6.9h1.2l1.4 5.2 1.6-5.2h1l1.5 5.3zm3 1c0-.2 0-.4.2-.5 0-.2.3-.2.5-.2s.4 0 .5.2c.2.1.2.3.2.5s0 .3-.2.5l-.5.2-.5-.2a.7.7 0 0 1-.2-.5zm3-2.9c0-.5.2-1 .3-1.4.1-.5.3-.8.5-1.1.3-.3.6-.6.9-.7.3-.2.7-.3 1.1-.3.4 0 .8 0 1 .2l1 .6v-3.6h1V22h-1v-.7l-.9.6a2.7 2.7 0 0 1-2.2 0l-.9-.8-.5-1-.2-1.5zm1.3.1v1l.4.8c.1.2.3.4.6.5.2.2.5.2.8.2h.5a1.6 1.6 0 0 0 .8-.6l.3-.4V17c0-.2-.2-.3-.3-.4a1.6 1.6 0 0 0-.8-.5 2 2 0 0 0-1.3.1c-.3.1-.5.3-.6.5-.2.3-.3.5-.3.8l-.1 1v.1zm6-.1c0-.5.2-1 .3-1.4l.6-1a2.8 2.8 0 0 1 2.3-1.1c.5 0 1 0 1.3.3.4.1.7.4 1 .7.3.3.5.7.6 1.1.2.4.2.9.2 1.4v.1c0 .5 0 1-.2 1.4-.1.5-.3.8-.6 1.1l-1 .8-1.3.2c-.5 0-.9 0-1.3-.2l-1-.8-.6-1-.2-1.5v-.1zm1.3.1v1l.5.8.6.6.8.2a1.7 1.7 0 0 0 1.5-.8c.1-.2.3-.5.3-.8l.2-1v-.1c0-.3 0-.7-.2-1 0-.3-.2-.5-.3-.8l-.6-.5c-.3-.2-.6-.2-.9-.2a1.7 1.7 0 0 0-1.4.7l-.4.8-.1 1v.1zm9.3 2.6a1.8 1.8 0 0 0 1-.4l.4-.4.2-.6h1.1l-.2 1-.6.6a3 3 0 0 1-2 .7c-.4 0-.9 0-1.3-.2l-1-.8-.5-1-.2-1.4v-.3c0-.4 0-.9.2-1.3.1-.4.3-.8.6-1 .2-.4.5-.6 1-.8a3 3 0 0 1 1.3-.3c.4 0 .7 0 1 .2l1 .5.5.8.2 1h-1.1c0-.2 0-.4-.2-.6a1.6 1.6 0 0 0-1.4-1c-.4 0-.7.1-1 .3-.2.1-.4.3-.5.6-.2.2-.3.5-.3.7l-.1 1v1.1l.4.8.6.6.9.2zm5.6-7.7V15h1.3v1h-1.3v4.6l.2.3.3.1h.8v.9h-.3l-.6.1a2 2 0 0 1-.6 0l-.5-.4-.3-.5-.2-1V16H134v-.9h1.2v-1.6h1.2zm2.2 5 .2-1.4c.2-.4.4-.8.7-1a2.8 2.8 0 0 1 2.2-1.1c.5 0 1 0 1.4.3l1 .7.6 1.1.2 1.4v.1c0 .5 0 1-.2 1.4l-.7 1.1c-.2.3-.6.6-1 .8l-1.2.2c-.5 0-1 0-1.3-.2-.4-.2-.8-.5-1-.8l-.7-1-.2-1.5v-.1zm1.2.1.1 1 .4.8.6.6.9.2a1.7 1.7 0 0 0 1.4-.8l.4-.8.1-1v-.1l-.1-1-.4-.8-.6-.5c-.2-.2-.5-.2-.9-.2a1.7 1.7 0 0 0-1.4.7l-.4.8v1.1zm7.8 3.4h-1.1v-9.8h1.1V22zm3.2 0h-1.2v-6.9h1.2V22zm-1.3-8.7c0-.2 0-.3.2-.5l.5-.2.5.2.2.5c0 .2 0 .4-.2.5l-.5.2c-.2 0-.4 0-.5-.2a.7.7 0 0 1-.2-.5zm9 5.3c0 .5 0 1-.2 1.4-.1.5-.3.8-.5 1.1-.2.4-.5.6-.9.8l-1 .2c-.5 0-1 0-1.3-.2l-.8-.7v.8h-1.1v-9.8h1.1V16a2.3 2.3 0 0 1 2-.9c.4 0 .8 0 1.1.3.4.1.7.4.9.7l.5 1 .2 1.5v.1zm-1.2 0v-1l-.4-.9c-.1-.2-.3-.4-.6-.5l-.8-.2a2 2 0 0 0-.6 0 1.7 1.7 0 0 0-.8.7l-.3.4v3l.3.4a1.7 1.7 0 0 0 .8.5 2 2 0 0 0 1.4 0l.6-.6.3-.8.1-1zm2.7 2.8c0-.2 0-.4.2-.5 0-.2.3-.2.5-.2s.4 0 .6.2l.1.5-.1.5-.6.2-.5-.2a.7.7 0 0 1-.2-.5zm4 .6v-6h-1.1v-.9h1v-.7l.2-1 .5-.7.7-.4 1-.2.7.1v1a3.3 3.3 0 0 0-.7 0c-.4 0-.6 0-.9.3-.2.2-.3.5-.3 1v.6h1.5v1h-1.5V22H164zm7.2-5.8a3.1 3.1 0 0 0-.6 0c-.4 0-.7 0-1 .2l-.5.7V22h-1.2v-6.9h1.1v.8l.7-.6a1.8 1.8 0 0 1 1.5-.2v1zm1.3 6.6h-1l3.9-10h1l-3.9 10z",
                    key: 5
                }), n.createElement("path", {
                    fill: "#008439",
                    d: "M40 16c.3-.3.6-.6 1-.7.3-.2.7-.3 1-.3l1 .1.7.5.4.8.2 1.1V22H43v-5.2l-.3-.5a1 1 0 0 0-.5-.2 2 2 0 0 0-1.6.2 2 2 0 0 0-.6.8V22h-1.2v-9.8H40V16zm7.6-2.5V15H49v1h-1.3v4.2l.1.4.2.3.2.1h.8v.9h-.4l-.5.1a2 2 0 0 1-.7 0l-.5-.4-.3-.5-.1-1V16h-1.3v-.9h1.3v-1.6h1.1zm4.3 0V15h1.3v1h-1.3v4.6l.2.3.3.1h.8v.9h-.4l-.5.1a2 2 0 0 1-.6 0l-.5-.4-.4-.5V16h-1.3v-.9h1.2v-1.6H52zm8.4 5.1-.1 1.4c-.2.5-.3.8-.6 1.1-.2.4-.5.6-.8.8l-1.1.2a3 3 0 0 1-1.1-.2c-.4-.1-.7-.3-.9-.6v3.3h-1.2v-9.5h1.1v.8l1-.7 1-.2c.5 0 .9 0 1.2.3.3.1.6.4.9.7l.5 1 .1 1.5v.1zm-1.1 0-.1-1-.4-.9c-.1-.2-.3-.4-.6-.5l-.8-.2a2 2 0 0 0-.5 0 1.6 1.6 0 0 0-.8.6l-.3.3v3.3c0 .2.2.3.3.4a1.6 1.6 0 0 0 .8.5h.5a1.6 1.6 0 0 0 1.4-.7l.4-.8v-1zm6.6 1.6v-.4l-.2-.3-.5-.3a5 5 0 0 0-.8-.2c-.4 0-.8-.2-1-.3l-.9-.4-.4-.5c-.2-.3-.2-.5-.2-.8 0-.3 0-.5.2-.8 0-.2.3-.4.5-.6l.8-.4 1-.2c.4 0 .8 0 1.1.2.3 0 .6.2.9.4a2 2 0 0 1 .6 1.6h-1.1l-.1-.5-.3-.4-.5-.2-.6-.1a2 2 0 0 0-.6 0l-.4.3a.9.9 0 0 0-.3.7v.3l.3.3.4.2.8.2 1.1.4c.3 0 .6.2.8.4.2.2.4.3.5.6l.1.7a1.8 1.8 0 0 1-.7 1.5l-.9.4-1 .1c-.5 0-.9 0-1.2-.2-.4 0-.7-.3-1-.5l-.5-.7a2 2 0 0 1-.2-.8h1.2a1.2 1.2 0 0 0 .6 1l.5.2a2.5 2.5 0 0 0 1.2 0l.5-.2.2-.3.1-.4z",
                    key: 6
                })]), n.createElement("g", {
                    transform: "translate(14 22)",
                    key: 2
                })]))
            }));
            i.defaultProps = {
                width: "262",
                height: "44"
            }, e.exports = i, i.default = i
        },
        350337: (e, t, s) => {
            var n = s(184481);
            const i = n.forwardRef((function(e, t) {
                return n.createElement("svg", { ...e,
                    ref: t
                }, n.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, n.createElement("g", {
                    transform: "translate(-87.000000, -110.000000)"
                }, n.createElement("g", {
                    transform: "translate(87.000000, 110.000000)"
                }, [n.createElement("g", {
                    transform: "translate(0.000000, 5.000000)",
                    key: 0
                }, [n.createElement("path", {
                    d: "M15.556 2.147C.966 5.01 0 10.465 0 28.764c0 18.3 24.035 16.812 34.582 16.812s27.05-2.522 29.734-14.464C67.001 19.169 54.108 5.01 44.345 2.147c-9.763-2.863-14.198-2.863-28.789 0z",
                    fill: "#CCECFA",
                    key: 0
                }), n.createElement("path", {
                    d: "M40 23v-4.667C40 17.6 39.325 17 38.5 17h-18c-.825 0-1.5.6-1.5 1.333v13.334C19 32.4 19.675 33 20.5 33h18c.825 0 1.5-.6 1.5-1.333V27l4.164 3.701c.678.603 1.836.176 1.836-.674V19.973c0-.85-1.158-1.277-1.836-.674L40 23z",
                    fill: "#0596DE",
                    key: 1
                })]), n.createElement("g", {
                    transform: "translate(79.000000, 0.000000)",
                    key: 1
                }, [n.createElement("path", {
                    d: "M59.818 37.839C48.827 46.665 44.986 48.594 34.886 50.36 24.786 52.13 5.48 45.475.943 33.964c-4.54-11.51 8.303-20.873 17.437-25.46 9.134-4.588 29.094-16.33 39.612-.483C68.509 23.87 70.808 29.013 59.818 37.84z",
                    fill: "#CCECFA",
                    key: 0
                }), n.createElement("path", {
                    d: "M33.206 31.026c2.172 0 3.912-1.678 3.912-3.757l.013-7.513c0-2.078-1.753-3.756-3.925-3.756-2.172 0-3.925 1.678-3.925 3.756v7.513c0 2.079 1.753 3.757 3.925 3.757zm7.728-2.732c0 3.688-3.704 6.27-7.728 6.27-4.024 0-7.727-2.582-7.727-6.27H23c0 4.204 3.966 7.659 8.748 8.261v4.032h2.916v-4.032c4.782-.59 8.748-4.057 8.748-8.261h-2.478z",
                    fill: "#0596DE",
                    fillRule: "nonzero",
                    key: 1
                })])]))))
            }));
            i.defaultProps = {
                width: "147px",
                height: "51px",
                viewBox: "0 0 147 51"
            }, e.exports = i, i.default = i
        }
    }
]);
//# sourceMappingURL=../49159-db517586134e31391fc8.js.map