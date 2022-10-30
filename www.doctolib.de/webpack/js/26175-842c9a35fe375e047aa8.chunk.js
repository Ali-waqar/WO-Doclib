(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [26175], {
        389138: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var a = n(294184),
                o = n.n(a),
                i = n(184481),
                s = n(956608),
                r = n.n(s),
                l = n(445884),
                d = n(961131),
                c = n(258637),
                p = n(453040),
                u = (n(159726), n(785893));

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class g extends i.Component {
                constructor(e) {
                    super(e), m(this, "state", {
                        fileName: "",
                        focused: !1,
                        error: null
                    }), m(this, "handleBlur", (e => {
                        this.setState({
                            focused: !1
                        }), this.props.onBlur && this.props.onBlur(e)
                    })), m(this, "handleFocus", (e => {
                        this.setState({
                            focused: !0
                        }), this.props.onFocus && this.props.onFocus(e)
                    })), m(this, "handleChange", (async e => {
                        if (!e.target.files.length) return;
                        this.props.onLoadingAndValidatingFile && this.props.onLoadingAndValidatingFile();
                        const t = e.target.files[0],
                            n = e.target.value.split(/(\\|\/)/g).pop(),
                            a = await (0, d.Jt)(t),
                            o = t.type || (0, d.eQ)(a),
                            i = new File([a], n, {
                                type: o
                            });
                        if (void 0 !== this.props.maxSize && i.size > this.props.maxSize) {
                            this.fileInput.current.value = "";
                            const t = l.Z.t("common.file_too_big", {
                                size: (0, d.x5)(this.props.maxSize)
                            });
                            return this.setState({
                                error: t
                            }), void(this.props.onError && this.props.onError(e, "file_too_big", t))
                        }
                        if (this.props.accept && !(0, d.wu)(i.type, this.props.accept)) {
                            this.fileInput.current.value = "";
                            const t = l.Z.t("common.file_type_invalid");
                            return this.setState({
                                error: t
                            }), void(this.props.onError && this.props.onError(e, "file_type_invalid", t))
                        }
                        this.setState({
                            fileName: n,
                            error: null
                        }), this.props.onChange && this.props.onChange(e, i)
                    })), this.fileInput = e.fileInputRef || (0, i.createRef)()
                }
                render() {
                    const {
                        fileName: e
                    } = this.state, {
                        onBlur: t,
                        onChange: n,
                        onFocus: a,
                        onError: i,
                        children: s,
                        uiStyle: l,
                        className: d,
                        required: m,
                        maxSize: g,
                        disabled: h,
                        fileInputRef: _,
                        capture: f,
                        hidden: x,
                        onLoadingAndValidatingFile: v,
                        ...y
                    } = this.props, w = !(i && x) && this.state.error;
                    return (0, u.jsxs)("div", {
                        className: o()("dl-file-input", d, {
                            [`dl-file-input-${l}`]: l
                        }),
                        "data-design-system": "base",
                        children: [(0, u.jsx)("input", {
                            className: o()("dl-file-input-input", {
                                [`dl-file-input-${l}-input`]: l
                            }),
                            onBlur: this.handleBlur,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            ref: this.fileInput,
                            type: "file",
                            disabled: h,
                            capture: f,
                            required: !e && m,
                            tabIndex: x ? -1 : void 0,
                            "aria-hidden": x,
                            ...y
                        }), x ? null : s || (0, u.jsx)(c.Z, {
                            icon: (0, u.jsx)(r(), {}),
                            focused: this.state.focused,
                            placeholder: this.props.filename || this.props.placeholder,
                            tabIndex: -1,
                            value: e,
                            readOnly: !0,
                            validationState: this.state.error ? "error" : null
                        }), w && (0, u.jsx)(p.Z, {
                            color: "error-090",
                            children: this.state.error
                        })]
                    })
                }
            }
        },
        97034: (e, t, n) => {
            "use strict";
            n.d(t, {
                gz: () => x,
                r$: () => f,
                v_: () => _
            });
            var a = n(294184),
                o = n.n(a),
                i = n(478718),
                s = n.n(i),
                r = n(184481),
                l = n(445884),
                d = n(798638),
                c = n(647294),
                p = n(258637),
                u = n(389138),
                m = (n(600709), n(785893));
            const g = e => e >= 200 && e < 300,
                h = e => function(t, n) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return new Promise(((o, i) => {
                        n && c.AM && n.append("secretaryship_account_id", c.AM);
                        const s = new XMLHttpRequest;
                        s.open(e, t);
                        const r = (0, d.HC)();
                        Object.keys(r).forEach((e => s.setRequestHeader(e, r[e])));
                        const {
                            timeout: l,
                            checkHttpStatus: p
                        } = a, u = l ? setTimeout((() => s.abort()), l) : void 0;
                        s.onload = e => {
                            var t;
                            const {
                                responseText: n,
                                status: a
                            } = e.target;
                            if (u && clearTimeout(u), (null === (t = s.getAllResponseHeaders()) || void 0 === t ? void 0 : t.toLowerCase().indexOf("x-csrf-token")) >= 0) {
                                const e = s.getResponseHeader("X-CSRF-Token");
                                e && (0, d.J7)(e)
                            }
                            p && !g(a) ? i(new Error(`Http request failed with status : ${a}`)) : o({
                                responseBody: n,
                                status: a
                            })
                        }, s.onerror = e => i(new Error(`An error occured in FileUploader: ${e.message}`)), s.onabort = e => i(new Error(`An abort error occured in FileUploader: ${e.message}`)), s.send(n)
                    }))
                },
                _ = h("POST"),
                f = h("PATCH"),
                x = h("PUT"),
                v = (h("DELETE"), ["bytes", "created_at", "original_filename", "public_id", "resource_type", "secure_url", "url", "signature", "type", "version"]),
                y = e => {
                    let {
                        placeholder: t,
                        children: n,
                        style: a,
                        uiStyle: i,
                        name: d,
                        filename: c,
                        accept: g,
                        className: h,
                        onComplete: _,
                        onError: f,
                        onProgress: x,
                        fetch: y,
                        type: w,
                        appointment: Z,
                        kind: b,
                        disabled: j,
                        progressBar: E,
                        account: S
                    } = e;
                    const [{
                        percent: N,
                        uploading: P
                    }, A] = (0, r.useState)({
                        percent: 0,
                        uploading: !1
                    }), D = (0, r.useRef)((async e => {
                        e.persist(), A({
                            percent: 0,
                            uploading: !0
                        });
                        const t = e.target.files[0],
                            n = new FormData;
                        n.append("upload_preset", "uhseb2sl"), n.append("file", t), Z && n.append("appointment_id", Z.id), Z && b && n.append("kind", b);
                        const a = w || (e => {
                                if (void 0 !== e) {
                                    const t = e.split(".");
                                    if (["jpg", "jpeg", "png"].includes(t[t.length - 1].toLowerCase())) return "image"
                                }
                                return "raw"
                            })(e.target.files[0].name),
                            o = "patient" === (null === S || void 0 === S ? void 0 : S.kind) ? "/account/documents" : Z ? "/doctor_app/documents" : `//api.cloudinary.com/v1_1/doctolib/${a}/upload`;
                        return y(o, n, (e => {
                            const t = (e => {
                                let {
                                    lengthComputable: t,
                                    loaded: n,
                                    total: a
                                } = e;
                                return t ? Math.ceil(n / a * 100) / 100 : 0
                            })(e);
                            A((e => ({ ...e,
                                percent: t
                            }))), x && x(t)
                        })).then((e => {
                            let t, {
                                responseBody: n,
                                status: a
                            } = e;
                            try {
                                t = JSON.parse(n)
                            } catch (e) {
                                console.error(e)
                            }
                            if (a >= 400) f({
                                body: t
                            }), A((e => ({ ...e,
                                uploading: !1
                            })));
                            else {
                                const e = t.document && t.document.appointment_id;
                                A((e => ({ ...e,
                                    uploading: !1
                                }))), _(e ? t.document : s()(t, v))
                            }
                        })).catch((e => {
                            f({
                                error: e
                            }), A((e => ({ ...e,
                                uploading: !1
                            })))
                        }))
                    }));
                    return P && E ? (0, m.jsxs)("div", {
                        className: o()("cloudinary-file-uploader", h, {
                            [`cloudinary-file-uploader-${i}`]: i
                        }),
                        "data-design-system": "base",
                        children: [(0, m.jsx)(p.Z, {
                            readOnly: !0,
                            value: l.Z.t("common.loading"),
                            uiStyle: i
                        }), (0, m.jsx)("div", {
                            className: o()("cloudinary-file-uploader-progress-bar-container", {
                                [`cloudinary-file-uploader-progress-bar-container-${i}`]: i
                            }),
                            children: (0, m.jsx)("div", {
                                className: "cloudinary-file-uploader-progress-bar",
                                style: {
                                    transform: `scaleX(${N})`
                                }
                            })
                        })]
                    }) : (0, m.jsx)(u.Z, {
                        onChange: D.current,
                        placeholder: t || l.Z.t("common.choose_a_file"),
                        style: a,
                        uiStyle: i,
                        name: d,
                        filename: c,
                        accept: g,
                        className: h,
                        disabled: j,
                        "data-design-system": "base",
                        children: n
                    })
                };
            y.defaultProps = {
                fetch: _,
                progressBar: !0
            }
        },
        259627: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var a = n(396026),
                o = n.n(a),
                i = n(294184),
                s = n.n(i),
                r = (n(888170), n(785893));
            const l = e => {
                let {
                    className: t,
                    index: n,
                    total: a,
                    uiStyle: i = "blue",
                    onIndexChange: l
                } = e;
                return (0, r.jsx)("nav", {
                    className: s()("dl-pagination-dots", t),
                    "data-design-system": "base",
                    children: (0, r.jsx)("ul", {
                        children: o()(a).map((e => {
                            const t = s()("dl-pagination-dot", {
                                "dl-pagination-dot-active": n === e,
                                [`dl-pagination-dot-${i}`]: i
                            });
                            return (0, r.jsx)("li", {
                                children: (0, r.jsx)("div", {
                                    className: t,
                                    onClick: (o = e, e => {
                                        e.persist(), 2 === a ? l(0 === n ? 1 : 0) : n !== o && l(o)
                                    }),
                                    children: (0, r.jsx)("div", {})
                                })
                            }, e);
                            var o
                        }))
                    })
                })
            }
        },
        979437: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var a = n(184481),
                o = n(445884),
                i = n(545763),
                s = n(453040),
                r = n(511466),
                l = n(597043),
                d = n(845126),
                c = n(642979),
                p = n(121646),
                u = n(294184),
                m = n.n(u),
                g = (n(666513), n(785893));
            const h = e => {
                let {
                    disabled: t,
                    uploading: n,
                    uploadErrorMessage: u,
                    innerWording: h,
                    showFileBrowserButton: _,
                    className: f,
                    onClick: x,
                    icon: v
                } = e;
                const y = (0, a.useContext)(p.O);
                return n ? (0, g.jsx)("div", {
                    className: m()("dl-droppable-zone dl-neutral-010-bg dl-padding-16 flex", f),
                    children: (0, g.jsxs)("div", {
                        className: "dl-flex-row dl-justify-center dl-full-width",
                        children: [(0, g.jsx)("div", {
                            className: "dl-min-width",
                            children: (0, g.jsx)(r.Z, {})
                        }), (0, g.jsxs)("div", {
                            className: "dl-droppable-zone-cta dl-flex-column",
                            children: [(0, g.jsx)(s.Z, {
                                children: o.Z.t("doctor_common.documents.document_upload.uploading")
                            }), (0, g.jsx)(s.Z, {
                                color: "neutral-090",
                                children: o.Z.t("doctor_common.documents.document_upload.please_wait")
                            })]
                        })]
                    })
                }) : (0, g.jsx)(c.Z, {
                    flat: !0,
                    onClick: () => {
                        x ? x(y) : y()
                    },
                    children: (0, g.jsxs)("div", {
                        className: m()("dl-droppable-zone dl-neutral-010-bg dl-padding-16", f),
                        children: [u && (0, g.jsx)(s.Z, {
                            color: "error-090",
                            align: "center",
                            className: "dl-margin-y-16",
                            children: u
                        }), (0, g.jsxs)(l.Z, {
                            container: !0,
                            className: "dl-justify-center dl-flex-row",
                            children: [(0, g.jsx)(l.Z, {
                                item: !0,
                                className: "dl-droppable-zone-icon flex",
                                children: (0, g.jsx)(d.Z, {
                                    name: v || "files-medical",
                                    color: "neutral-090"
                                })
                            }), (0, g.jsxs)(l.Z, {
                                item: !0,
                                className: "dl-droppable-zone-cta dl-flex-column dl-flex-start dl-justify-center",
                                children: [(0, g.jsx)(s.Z, {
                                    color: "neutral-090",
                                    children: h || o.Z.t("doctor_common.documents.document_upload.dragndrop")
                                }), _ && (0, g.jsx)(i.Z, {
                                    uiStyle: "link-primary",
                                    color: "danger",
                                    className: "dl-droppable-zone-button",
                                    onClick: e => {
                                        x ? x(y) : y(), e.stopPropagation()
                                    },
                                    disabled: t,
                                    children: o.Z.t("doctor_common.documents.document_upload.browse")
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        725033: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var a = n(184481),
                o = n(710270);
            const i = (e, t) => {
                const [n, i] = (0, a.useState)([]), {
                    fetchMasterPatients: s
                } = (0, o.Z)({
                    url: "/account/master_patients.json",
                    trigger: "fetchMasterPatients",
                    onSuccess: e => {
                        let {
                            data: t
                        } = e;
                        i(t)
                    }
                });
                return (0, a.useEffect)((() => {
                    t ? i(t) : null !== e && void 0 !== e && e.masterPatient ? i([e.masterPatient]) : s()
                }), [null === e || void 0 === e ? void 0 : e.masterPatient, t]), n
            }
        },
        961131: (e, t, n) => {
            "use strict";
            n.d(t, {
                El: () => g,
                GV: () => o,
                Jt: () => s,
                eQ: () => u,
                wu: () => m,
                x5: () => r
            });
            var a = n(966670);
            const o = 1048576,
                i = new a.oc(window.translation_keys || {});
            i.locale = "root";
            const s = async e => new Promise(((t, n) => {
                    const a = new FileReader;
                    a.onload = e => {
                        t(e.target.result)
                    }, a.onerror = () => n(a.error), a.onabort = () => n(a.error), a.readAsArrayBuffer(e)
                })),
                r = (e, t) => {
                    const n = i.t("number.human.storage_units.format");
                    return i.numberToHumanSize(e, {
                        format: n,
                        ...t
                    })
                },
                l = "application/pdf",
                d = "image/png",
                c = "image/jpeg",
                p = [l, d, c],
                u = e => {
                    const t = new Uint8Array(e).subarray(0, 4);
                    let n = "";
                    for (let e = 0; e < t.length; e++) n += t[e].toString(16);
                    return "25504446" === n ? l : "89504e47" === n ? d : "ffd8" === n.slice(0, 4) ? c : void 0
                },
                m = (e, t) => {
                    const n = new RegExp(t.replace(/\s+/g, "").replace(/,/g, "|").replace(/\*/, ".+"));
                    return !(!e.match(n) || !e.match(n)[0].length)
                },
                g = async e => {
                    const t = await s(e),
                        n = u(t);
                    return -1 !== p.indexOf(n)
                }
        },
        987903: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => w
            });
            var a = n(184481),
                o = n(160160),
                i = n(990626),
                s = n(979437),
                r = n(580163),
                l = n(725033),
                d = n(516590),
                c = n(445884),
                p = n(121646),
                u = n(961131),
                m = n(633559),
                g = n(291966),
                h = n.n(g),
                _ = n(785893);
            const f = e => {
                let {
                    onDrop: t,
                    onError: n,
                    children: a,
                    ...o
                } = e;
                return (0, _.jsx)(p.Z, {
                    onDrop: async (e, a) => {
                        const o = (await Promise.all(e.map((async e => {
                                try {
                                    if (!await (0, u.El)(e)) return {
                                        errorMessage: c.Z.t("common.file_type_error_message", {
                                            types: (0, m.at)().join(", "),
                                            name: e.name
                                        }),
                                        file: e
                                    }
                                } catch (t) {
                                    if ("NotReadableError" === t.name) return {
                                        errorMessage: c.Z.t("common.file_permission_error", {
                                            name: e.name
                                        }),
                                        file: e
                                    };
                                    throw t
                                }
                                return null
                            })))).filter(Boolean),
                            i = o.map((e => e.file)),
                            s = h()(e, i);
                        o.length && n && n("file-invalid-type"), await t(s, a.concat(o))
                    },
                    onError: n,
                    acceptedMimeTypes: (0, m.mV)(),
                    ...o,
                    children: a
                })
            };
            var x = n(23838),
                v = n(889736),
                y = n(576563);
            const w = e => {
                let {
                    appointment: t,
                    account: n,
                    onUpload: c,
                    onAdd: p
                } = e;
                const u = (0, a.useState)((0, o.Z)())[0],
                    m = (0, a.useContext)(x.Z);
                let g = "documents_view";
                var h;
                t && (g = (0, v.qs)(null === (h = t.appointment_request_entry) || void 0 === h ? void 0 : h.status) ? "appointment_request_completion" : "appointment_view");
                const w = e => {
                        let {
                            name: n,
                            details: a
                        } = e;
                        (0, d.ZP)({
                            name: n,
                            details: { ...m,
                                source: g,
                                appointment_id: null === t || void 0 === t ? void 0 : t.id,
                                funnel_id: u,
                                is_appointment_request: !(null === t || void 0 === t || !t.appointment_request_entry),
                                is_appointment_request_enabled: (0, i.cr)("patient_appointment_requests"),
                                ...a
                            }
                        })
                    },
                    [Z, b] = (0, a.useState)(),
                    j = (0, l.Z)(t),
                    E = {
                        id: null === n || void 0 === n ? void 0 : n.main_master_patient_id,
                        first_name: null === n || void 0 === n ? void 0 : n.first_name,
                        last_name: null === n || void 0 === n ? void 0 : n.last_name
                    },
                    S = j.length ? j : [E],
                    N = (0, r.ZP)();
                return S.length ? (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(f, {
                        maxSize: i.ZP.DOCUMENT_MAX_SIZE,
                        multiple: !1,
                        onDrop: (e, t) => {
                            b(e[0]), t.forEach((e => {
                                let {
                                    errorMessage: t
                                } = e;
                                N({
                                    message: t,
                                    uiStyle: "error"
                                })
                            })), w({
                                name: "patient_upload_document"
                            })
                        },
                        children: (0, _.jsx)(s.Z, {
                            showFileBrowserButton: !0,
                            onClick: e => {
                                e(), w({
                                    name: "patient_start_upload_document"
                                })
                            }
                        })
                    }), (0, _.jsx)(y.Z, {
                        multiPageInfos: {
                            pages: Z ? [{
                                file: Z
                            }] : [],
                            metadata: !!Z
                        },
                        onUpload: c,
                        onAdd: p,
                        appointment: t,
                        masterPatients: S,
                        onHide: () => {
                            b(null)
                        },
                        trackEvent: w
                    })]
                }) : null
            }
        },
        576563: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => H
            });
            var a = n(785893),
                o = n(184481),
                i = n(445884),
                s = n(169339),
                r = n(383915),
                l = n(592290),
                d = n(511466),
                c = n(778075);
            const p = e => {
                let {
                    show: t,
                    onAccept: n,
                    onDismiss: o
                } = e;
                return (0, a.jsx)(c.Z, {
                    title: "doctor" === window.platforms.businessUnit ? i.Z.t("doctor_mobile.root.new_document.quit_dialog.title") : i.Z.t("patient_mobile.root.new_document.quit_dialog.title"),
                    dismissText: i.Z.t("common.actions.cancel"),
                    onDismiss: o,
                    acceptText: i.Z.t("common.actions.quit"),
                    onAccept: n,
                    show: t,
                    children: "doctor" === window.platforms.businessUnit ? i.Z.t("doctor_mobile.root.new_document.quit_dialog.body") : i.Z.t("patient_mobile.root.new_document.quit_dialog.body")
                })
            };
            var u = n(5212),
                m = n(261397),
                g = n(294184),
                h = n.n(g),
                _ = n(366699),
                f = n(990626),
                x = n(453040),
                v = n(975645),
                y = n(171493),
                w = n(845126),
                Z = n(545763),
                b = n(961131),
                j = n(136591),
                E = n(580163),
                S = n(462814),
                N = n(758162);
            const P = 1024,
                A = (e, t) => new Promise(((n, a) => {
                    try {
                        e.toBlob((e => {
                            n(e)
                        }), t)
                    } catch (e) {
                        a(e)
                    }
                }));
            var D = n(97034),
                I = n(982761);
            const C = e => {
                var t;
                let {
                    pages: s,
                    documentScanner: r,
                    masterPatients: l,
                    onUpload: d,
                    onAdd: c,
                    onHide: p,
                    trackEvent: m,
                    encryptFile: g,
                    shared: C = !1
                } = e;
                const k = {
                        title: null === (t = s[0]) || void 0 === t ? void 0 : t.title,
                        master_patient_id: 1 === l.length ? l[0].id : void 0
                    },
                    T = f.ZP.PATIENT_ACCOUNT_DOCUMENTS.KINDS || [],
                    [F, M] = (0, o.useState)(!1),
                    {
                        fetchDocuments: R
                    } = (0, I.Z)(),
                    z = (0, E.ZP)(),
                    O = (0, u.Zz)(),
                    U = (0, j.Z)(),
                    q = function() {
                        let {
                            message: e
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        U.current && M(!1), z({
                            message: e || i.Z.t("common.error"),
                            uiStyle: "error"
                        })
                    };
                return (0, a.jsx)(S.Z, {
                    className: "dl-flex-grow dl-full-height",
                    horizontal: !1,
                    onSubmit: async e => {
                        let {
                            kind: t,
                            master_patient_id: a,
                            title: o
                        } = e;
                        U.current && M(!0);
                        const l = new FormData;
                        let h;
                        if (h = s.length > 1 ? await (async (e, t) => {
                                const a = await Promise.all([n.e(73540), n.e(35966), n.e(42874), n.e(12088)]).then(n.bind(n, 499055)),
                                    o = await a.PDFDocument.create(),
                                    i = await Promise.all(e.map((async e => {
                                        let {
                                            file: n,
                                            orientation: a,
                                            corners: o,
                                            cropped: i
                                        } = e;
                                        const s = await t.loadOrientedImage(n, a, P);
                                        return i && t.cropAndRotate(s, o), {
                                            canvas: s,
                                            type: n.type
                                        }
                                    }))),
                                    s = i.map((e => {
                                        let {
                                            canvas: t,
                                            type: n
                                        } = e;
                                        return new Promise((e => {
                                            const a = o.addPage([t.width, t.height]);
                                            ("image/jpeg" === n ? o.embedJpg(t.toDataURL(n)) : o.embedPng(t.toDataURL(n))).then((n => {
                                                a.drawImage(n, {
                                                    x: 0,
                                                    y: 0,
                                                    width: t.width,
                                                    height: t.height
                                                }), e()
                                            }))
                                        }))
                                    }));
                                return await Promise.all(s), new File([await o.save()], `${(new Date).toISOString()}.pdf`, {
                                    type: "application/pdf"
                                })
                            })(s, r) : "application/pdf" !== s[0].file.type && (0, u.rl)() ? await async function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                const {
                                    file: a,
                                    orientation: o,
                                    corners: i,
                                    cropped: s
                                } = e, r = await t.loadOrientedImage(a, o, P);
                                s && t.cropAndRotate(r, i);
                                const l = await A(r, a.type);
                                return n ? new File([l], a.name, {
                                    type: a.type
                                }) : l
                            }(s[0], r) : s[0].file, h.size > f.ZP.DOCUMENT_MAX_SIZE) q({
                            message: i.Z.t("common.file_too_big", {
                                size: (0, b.x5)(f.ZP.DOCUMENT_MAX_SIZE)
                            })
                        });
                        else {
                            c && (l.append("title", o || h.name), c(h)), h = await g(h, a), l.append("tanker_encrypted", (!0).toString()), l.append("page_count", s.length.toString()), l.append("file", h), l.append("kind", c ? "patient_request_attachment" : t), l.append("master_patient_id", a.toString()), o && l.append("title", o);
                            try {
                                const {
                                    responseBody: e,
                                    status: t
                                } = await (0, D.v_)("/account/documents", l);
                                if (t >= 400) q();
                                else {
                                    const {
                                        document: t
                                    } = JSON.parse(e);
                                    p({
                                        documentWasSaved: !0
                                    }), m({
                                        name: "patient_end_upload_document",
                                        details: {
                                            document_id: t.id
                                        }
                                    }), await R(), d && d(t), U.current && M(!1)
                                }
                            } catch (e) {
                                q()
                            }
                        }
                    },
                    defaultValues: k,
                    children: e => (0, a.jsxs)("div", {
                        className: "dl-full-height dl-flex-column",
                        children: [(0, a.jsxs)("div", {
                            className: h()("dl-margin-t-16", "dl-flex-grow", {
                                "dl-document-save-form": O
                            }),
                            children: [(0, a.jsx)(_.Z, {
                                field: "title",
                                maxLength: "255",
                                label: i.Z.t("patient_common.root.documents.name_of_document"),
                                placeholder: i.Z.t("patient_common.root.documents.name_of_document")
                            }), (0, a.jsx)(_.Z, {
                                required: !0,
                                field: "kind",
                                label: i.Z.t("patient_common.root.documents.type_of_document"),
                                placeholder: i.Z.t("patient_common.root.documents.select_type"),
                                options: T.map((e => ({
                                    value: e,
                                    label: (0, y.fO)(e)
                                }))),
                                className: "dl-document-type-dropdown"
                            }), 1 === l.length ? (0, a.jsxs)("div", {
                                className: "dl-padding-y-16 dl-text-left",
                                children: [(0, a.jsx)(x.Z, {
                                    children: (0, a.jsx)("strong", {
                                        children: i.Z.t("patient_common.root.documents.patient_linked")
                                    })
                                }), (0, a.jsx)("br", {}), (0, a.jsx)(N.Z, {
                                    masterPatient: l[0]
                                })]
                            }) : (0, a.jsx)(_.Z, {
                                required: !0,
                                field: "master_patient_id",
                                label: i.Z.t("patient_common.root.documents.patient_linked"),
                                placeholder: i.Z.t("patient_common.root.documents.select_patient_linked"),
                                options: l.map((e => ({
                                    value: e.id,
                                    label: (0, v.WU)(e)
                                }))),
                                className: "dl-master-patient-dropdown"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex dl-justify-center dl-align-items-center dl-margin-t-16 dl-margin-b-8",
                            children: [(0, a.jsx)(w.Z, {
                                color: "success-110",
                                name: "solid/lock",
                                size: "xsmall",
                                className: "dl-margin-r-8"
                            }), (0, a.jsx)(x.Z, {
                                uiStyle: "body-s-regular",
                                className: "dl-margin-r-8",
                                children: i.Z.t("patient_common.root.documents.end_to_end.desc_mobile")
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "dl-document-upload-actions",
                            children: [O && (0, a.jsx)(Z.Z, {
                                uiStyle: "tertiary-neutral",
                                className: "dl-margin-r",
                                onClick: () => p(),
                                children: i.Z.t("common.actions.cancel")
                            }), (0, a.jsx)(Z.Z, {
                                block: !O,
                                type: "submit",
                                disabled: !e.values.kind || !e.values.master_patient_id,
                                loadable: {
                                    loading: F
                                },
                                className: "dl-margin-b",
                                children: C ? i.Z.t("patient_common.root.documents.share") : i.Z.t("patient_common.root.documents.add")
                            })]
                        })]
                    })
                })
            };
            var k = n(260585),
                T = n.n(k),
                F = n(773807),
                M = n.n(F),
                R = n(968461);
            const z = e => {
                    let {
                        show: t,
                        label: n,
                        onClick: o,
                        disabled: i,
                        Icon: s
                    } = e;
                    return t ? (0, a.jsx)("div", {
                        className: "dl-flex-grow-shrink-zero dl-text-center",
                        children: (0, a.jsxs)("a", {
                            title: n,
                            onClick: e => {
                                e.preventDefault(), i || o()
                            },
                            className: "dl-link-flat",
                            children: [(0, a.jsx)(Z.Z, {
                                circle: !0,
                                uiStyle: "white",
                                disabled: i,
                                children: (0, a.jsx)(s, {
                                    height: "16"
                                })
                            }), (0, a.jsx)(x.Z, {
                                uiStyle: "body-xs-regular",
                                block: !0,
                                className: "dl-margin-t-8",
                                children: n
                            })]
                        })
                    }) : null
                },
                O = e => {
                    let {
                        show: t,
                        onAccept: n,
                        onDismiss: o,
                        trackingDetails: s
                    } = e;
                    return (0, a.jsx)(c.Z, {
                        title: "doctor" === window.platforms.businessUnit ? i.Z.t("doctor_mobile.root.new_document.remove_page_dialog.title") : i.Z.t("patient_mobile.root.new_document.remove_page_dialog.title"),
                        dismissText: i.Z.t("common.actions.cancel"),
                        onDismiss: o,
                        acceptText: i.Z.t("common.actions.confirm"),
                        acceptTrackingId: "scan_document_trash_page",
                        trackingDetails: s,
                        onAccept: n,
                        show: t,
                        children: "doctor" === window.platforms.businessUnit ? i.Z.t("doctor_mobile.root.new_document.remove_page_dialog.body") : i.Z.t("patient_mobile.root.new_document.remove_page_dialog.body")
                    })
                };
            var U = n(977314);
            const q = e => {
                let {
                    pages: t,
                    pageIndex: n,
                    setPageIndex: o,
                    scrollableRef: i
                } = e;
                return (0, a.jsx)("div", {
                    ref: i,
                    className: "dl-document-upload-scrollable dl-margin-t-16",
                    children: (0, a.jsx)(U.ZP, {
                        enableMouseEvents: !0,
                        index: n,
                        hysteresis: .3,
                        className: "dl-full-height",
                        containerStyle: {
                            margin: "0px 30px",
                            height: "100%"
                        },
                        onChangeIndex: o,
                        onSwitching: () => {
                            setTimeout((() => {
                                i.current && (i.current.scrollTop = 0)
                            }), 300)
                        },
                        children: t.map(((e, t) => (0, a.jsx)("div", {
                            className: "dl-flex-center dl-full-height",
                            children: (0, a.jsx)("img", {
                                "data-displayed": n === t,
                                className: "dl-full-width dl-padding-x-8",
                                src: e.previewDataURL
                            })
                        }, t)))
                    })
                })
            };
            var L = n(259627);
            const B = e => {
                    let {
                        pages: t,
                        pageIndex: n,
                        setPageIndex: o
                    } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [((0, u.Zz)() || t.length > 1) && (0, a.jsx)("div", {
                            className: "dl-text-center",
                            style: {
                                visibility: t.length > 1 ? "visible" : "hidden"
                            },
                            children: (0, a.jsx)(L.Z, {
                                index: n,
                                total: t.length,
                                onIndexChange: o
                            })
                        }), (0, a.jsx)(x.Z, {
                            align: "center",
                            uiStyle: "body-xs-bold",
                            color: "neutral-090",
                            children: "doctor" === window.platforms.businessUnit ? i.Z.t("doctor_mobile.root.new_document.page_count", {
                                currentPage: n + 1,
                                count: t.length
                            }) : i.Z.t("patient_mobile.root.new_document.page_count", {
                                currentPage: n + 1,
                                count: t.length
                            })
                        })]
                    })
                },
                G = e => {
                    let {
                        pages: t,
                        pageIndex: n,
                        processing: s,
                        uploadFile: d,
                        dispatch: c,
                        trackEvent: p
                    } = e;
                    const [m, g] = (0, o.useState)(!1), h = (0, o.useRef)(), _ = e => {
                        c({
                            type: "SET_PAGE_INDEX",
                            pageIndex: e
                        })
                    }, f = (0, u.rl)() ? r.Z : l.Ng, x = (0, u.rl)() ? R.Z : l.ze;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(f, {
                            children: (0, a.jsx)(q, {
                                scrollableRef: h,
                                setPageIndex: _,
                                pageIndex: n,
                                pages: t
                            })
                        }), (0, a.jsxs)(x, {
                            divider: (0, u.Zz)(),
                            children: [(0, a.jsx)(B, {
                                pages: t,
                                setPageIndex: _,
                                pageIndex: n
                            }), (0, a.jsxs)("div", {
                                className: "dl-flex-center",
                                children: [(0, a.jsx)(z, {
                                    show: !0,
                                    disabled: s,
                                    label: i.Z.t("patient_mobile.root.new_document.add_page"),
                                    onClick: () => {
                                        d(), p({
                                            name: "patient_new_page_upload_document"
                                        })
                                    },
                                    Icon: T()
                                }), (0, a.jsx)(z, {
                                    show: !0,
                                    disabled: s,
                                    label: i.Z.t("common.actions.delete"),
                                    onClick: () => {
                                        g(!0)
                                    },
                                    Icon: M()
                                })]
                            }), (0, a.jsx)(Z.Z, {
                                block: !u.Zz,
                                className: "dl-margin-t-24 dl-margin-b",
                                disabled: !t.length || s,
                                onClick: () => {
                                    c({
                                        type: "ADD_DOCUMENT_METADATA"
                                    }), p({
                                        name: "patient_continue_upload_document"
                                    })
                                },
                                children: i.Z.t("common.actions.continue")
                            }), (0, a.jsx)(O, {
                                show: m,
                                onAccept: () => {
                                    c({
                                        type: "REMOVE_PAGE"
                                    }), p({
                                        name: "patient_delete_page_upload_document"
                                    }), g(!1)
                                },
                                onDismiss: () => g(!1),
                                trackingDetails: void 0
                            })]
                        })]
                    })
                },
                H = e => {
                    let {
                        onHide: t,
                        onUpload: n,
                        onAdd: c,
                        uploadFile: g,
                        appointment: h,
                        masterPatients: _,
                        multiPageInfos: f,
                        dispatch: x,
                        documentScanner: v,
                        trackEvent: y,
                        shared: w
                    } = e;
                    const {
                        encryptFile: Z
                    } = (0, o.useContext)(m.WA), [b, j] = (0, o.useState)(!1), {
                        processing: E,
                        pages: S,
                        pageIndex: N,
                        metadata: P
                    } = f, A = function() {
                        var e, n;
                        let {
                            documentWasSaved: a = !1
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        const o = "application/pdf" === (null === (e = S[0]) || void 0 === e || null === (n = e.file) || void 0 === n ? void 0 : n.type),
                            i = S.length && (0, u.rl)() && !o && !a;
                        i ? j(!0) : t()
                    }, D = E && 0 === S.length, I = (0, u.rl)() ? l.ZP : s.Z, k = (0, u.rl)() ? l.Ng : r.Z;
                    return (0, a.jsxs)(I, {
                        show: (null === S || void 0 === S ? void 0 : S.length) > 0 || D,
                        title: w ? i.Z.t("patient_common.root.documents.share_document") : i.Z.t("patient_common.root.documents.add_new_document"),
                        onHide: () => A(),
                        size: (0, u.rl)() ? "fullscreen" : "medium",
                        children: [D ? (0, a.jsx)(d.Z, {}) : P ? (0, a.jsx)(k, {
                            className: "dl-overflow-x-hidden",
                            children: (0, a.jsx)(C, {
                                masterPatients: _,
                                pages: S,
                                onUpload: n,
                                onAdd: c,
                                encryptFile: async (e, t) => {
                                    const n = [{
                                        masterPatientId: t
                                    }];
                                    null !== h && void 0 !== h && h.agenda_id && n.push({
                                        agendaId: h.agenda_id,
                                        role: "sync"
                                    }, {
                                        agendaId: h.agenda_id
                                    });
                                    const {
                                        encryptedFile: a
                                    } = await Z(e, n);
                                    if (!a) throw new Error("There is no file");
                                    return a
                                },
                                documentScanner: v,
                                onHide: A,
                                trackEvent: y,
                                shared: w
                            })
                        }) : (0, a.jsx)(G, {
                            processing: E,
                            pages: S,
                            pageIndex: N,
                            uploadFile: g,
                            dispatch: x,
                            trackEvent: y
                        }), (0, a.jsx)(p, {
                            show: b,
                            onAccept: () => {
                                t(), j(!1)
                            },
                            onDismiss: () => j(!1)
                        })]
                    })
                }
        },
        341226: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var a = n(785893),
                o = n(184481),
                i = n(160160),
                s = n(639693),
                r = n.n(s),
                l = n(943174),
                d = n.n(l),
                c = n(990626),
                p = n(445884),
                u = n(951969),
                m = n(129303),
                g = n(516590),
                h = n(5212),
                _ = n(961131),
                f = n(23838),
                x = n(580163),
                v = n(725033),
                y = n(800274),
                w = n(136591),
                Z = n(511466),
                b = n(259865),
                j = n(389138),
                E = n(261397),
                S = n(889736);
            const N = {
                processing: !1,
                pages: [],
                pageIndex: 0,
                metadata: !1
            };

            function P(e, t) {
                const n = [...e.pages];
                switch (t.type) {
                    case "PROCESSING":
                        return { ...e,
                            processing: !0
                        };
                    case "ADD_PAGE":
                        return { ...e,
                            pages: [...e.pages.slice(0, e.pageIndex + 1), t.page, ...e.pages.slice(e.pageIndex + 1)],
                            pageIndex: n.length ? e.pageIndex + 1 : 0,
                            processing: !1
                        };
                    case "ADD_PAGES":
                        return { ...e,
                            pages: [...e.pages.slice(0, e.pageIndex + 1), ...t.pages, ...e.pages.slice(e.pageIndex + 1)],
                            pageIndex: e.pageIndex + t.pages.length - (n.length ? 0 : 1),
                            processing: !1
                        };
                    case "SET_PAGE_INDEX":
                        return { ...e,
                            pageIndex: t.pageIndex
                        };
                    case "REMOVE_PAGE":
                        return 1 === e.pages.length ? { ...N
                        } : (n.splice(e.pageIndex, 1), { ...e,
                            pages: n,
                            pageIndex: e.pageIndex > 0 ? e.pageIndex - 1 : 0
                        });
                    case "ADD_DOCUMENT_METADATA":
                        return { ...e,
                            metadata: !0
                        };
                    case "RESET":
                        return N;
                    default:
                        throw new Error
                }
            }
            var A = n(576563);
            const D = e => {
                    e.current && (e.current.value = "")
                },
                I = "granted",
                C = e => {
                    var t, s, l;
                    let {
                        appointment: C,
                        displayCameraFileInput: k,
                        onUpload: T,
                        onAdd: F,
                        onError: M,
                        children: R,
                        startTankerOnMount: z,
                        listenNativeUpload: O = !1,
                        masterPatients: U,
                        shared: q = !1,
                        showLoader: L = !1,
                        className: B
                    } = e;
                    const [G, H] = (0, o.useState)((0, i.Z)()), [$, V] = (0, o.useState)(), [X, W] = (0, o.useState)(!1), J = (0, o.useRef)(null), [Q, K] = (0, o.useState)(!1), [Y, ee] = (0, o.useState)(!1), te = (0, w.Z)(), ne = (0, o.useContext)(f.Z), [ae, oe] = (0, o.useState)();
                    let ie = "documents_view";
                    if (O) ie = "native";
                    else if (C) {
                        var se;
                        ie = (0, S.qs)(null === C || void 0 === C || null === (se = C.appointment_request_entry) || void 0 === se ? void 0 : se.status) ? "appointment_request_completion" : "appointment_view"
                    }
                    const re = (0, o.useCallback)((e => {
                        let {
                            name: t,
                            details: n
                        } = e;
                        (0, g.ZP)({
                            name: t,
                            details: {
                                source: ie,
                                appointment_id: null === C || void 0 === C ? void 0 : C.id,
                                funnel_id: G,
                                is_appointment_request: !(null === C || void 0 === C || !C.appointment_request_entry),
                                is_appointment_request_enabled: (0, c.cr)("patient_appointment_requests"),
                                ...ne,
                                ...J.current && {
                                    source_type: J.current
                                },
                                ...n
                            }
                        }, {
                            schema: "patient"
                        })
                    }), [C, G, ne, ie]);
                    (0, o.useEffect)((() => {
                        Promise.all([n.e(33752), n.e(49303), n.e(36521), n.e(90188)]).then(n.bind(n, 990188)).then((e => {
                            te.current && V(e)
                        }))
                    }), [te]), (0, o.useEffect)((() => {
                        $ && O && m.ZP.call({
                            method: m.sC,
                            params: ["native_upload"]
                        })
                    }), [$, O]);
                    const le = (0, o.useRef)(),
                        de = (0, o.useRef)(),
                        ce = (0, x.ZP)(),
                        [pe, ue] = (0, o.useReducer)(P, N),
                        me = (0, v.Z)(C, U),
                        ge = (0, y.ZP)(),
                        {
                            startTanker: he
                        } = (0, o.useContext)(E.WA),
                        _e = (null === (t = window.platforms) || void 0 === t ? void 0 : t.reactNative) && (0, u.vG)("3.2.27"),
                        fe = (null === (s = window.platforms) || void 0 === s ? void 0 : s.reactNative) && (null === (l = window.platforms) || void 0 === l ? void 0 : l.android) && (0, u.vG)("3.2.33"),
                        xe = () => {
                            var e;
                            return null === (e = le.current) || void 0 === e ? void 0 : e.click()
                        },
                        ve = p.Z.t("patient_mobile.root.configuration.camera_access_for_documents");
                    (0, o.useEffect)((() => {
                        if (!z) return;
                        (async () => {
                            if (!ge) return;
                            const e = await he(ge, {
                                enforceFullRegistration: !0
                            });
                            oe(e)
                        })()
                    }), []), (0, o.useEffect)((() => {
                        fe && m.ZP.call({
                            method: m.Y6
                        }).then((e => {
                            K(e)
                        }))
                    }), [fe]);
                    const ye = (0, o.useCallback)((async e => {
                            try {
                                if (!await (0, _.El)(e)) return ce({
                                    message: p.Z.t("common.file_type_invalid"),
                                    uiStyle: "error"
                                }), !1
                            } catch (t) {
                                if (t instanceof DOMException && "NotReadableError" === t.name) return ce({
                                    message: p.Z.t("common.file_permission_error", {
                                        name: e.name
                                    }),
                                    uiStyle: "error"
                                }), !1;
                                throw t
                            }
                            return !0
                        }), []),
                        we = () => {
                            var e;
                            "upload_from_camera" === J.current ? null === (e = de.current) || void 0 === e || e.click() : xe()
                        },
                        Ze = async (e, t) => {
                            try {
                                if (!await ye(e)) return void D(t)
                            } catch (e) {
                                throw D(t), e
                            }
                            const n = (0, h.rl)();
                            if (n && pe.pages.length || re({
                                    name: "patient_upload_document"
                                }), n && "application/pdf" !== e.type) {
                                if (ue({
                                        type: "PROCESSING"
                                    }), !$) return;
                                const t = await $.readFileWithPreview(e);
                                ue({
                                    type: "ADD_PAGE",
                                    page: t
                                })
                            } else ue({
                                type: "ADD_PAGE",
                                page: {
                                    file: e
                                }
                            }), ue({
                                type: "ADD_DOCUMENT_METADATA"
                            });
                            W(!1)
                        },
                        be = (0, o.useCallback)((async () => {
                            if (!ge) return !1;
                            const e = await he(ge, {
                                enforceFullRegistration: !0
                            });
                            return oe(e), !!(0, E.aE)(e, ge) || (ce({
                                message: p.Z.t("tanker.must_verify_identity.document"),
                                uiStyle: "error"
                            }), !1)
                        }), [ge, he]),
                        je = (0, o.useCallback)((async () => {
                            if (!ge || !z || ae && !(0, E.aE)(ae, ge)) {
                                if (!await be()) return !1
                            }
                            return !0
                        }), [ge, z, be, ae]),
                        Ee = (0, o.useCallback)((async e => {
                            let {
                                detail: t
                            } = e;
                            if (t.method === m.jl) {
                                if (pe.metadata) return;
                                const e = (0, i.Z)();
                                H(e), re({
                                    name: "patient_start_upload_document",
                                    details: {
                                        funnel_id: e
                                    }
                                });
                                if (!await je()) return;
                                re({
                                    name: "patient_upload_document",
                                    details: {
                                        funnel_id: e
                                    }
                                });
                                const n = await Promise.all(t.data.files.map((async e => {
                                        let {
                                            fileName: t,
                                            base64data: n
                                        } = e;
                                        const a = await (async e => {
                                            let {
                                                fileName: t,
                                                base64data: n
                                            } = e;
                                            const a = function() {
                                                    switch ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toLowerCase()) {
                                                        case "pdf":
                                                            return "application/pdf";
                                                        case "jpg":
                                                            return "image/jpeg";
                                                        case "png":
                                                            return "image/png";
                                                        default:
                                                            return
                                                    }
                                                }(t.split(".").at(-1)),
                                                o = `data:${a};base64,${n}`,
                                                i = await fetch(o),
                                                s = await i.blob();
                                            return new File([s], t, {
                                                type: a
                                            })
                                        })({
                                            fileName: t,
                                            base64data: n
                                        });
                                        if (!await ye(a)) return;
                                        if (!$) return;
                                        return { ...await $.readFileWithPreview(a),
                                            title: t
                                        }
                                    }))),
                                    [a, o] = d()(r()(n), (e => "application/pdf" === e.file.type));
                                a.length ? (ue({
                                    type: "RESET"
                                }), ue({
                                    type: "ADD_PAGE",
                                    page: { ...a[0]
                                    }
                                }), ue({
                                    type: "ADD_DOCUMENT_METADATA"
                                })) : ue({
                                    type: "ADD_PAGES",
                                    pages: o
                                })
                            }
                        }), [$, je, ye, re, pe.metadata, ue]),
                        Se = (e, t, n) => {
                            ce({
                                message: n,
                                uiStyle: "error"
                            }), W(!1), M && M(e, t, n)
                        };
                    return (0, o.useEffect)((() => {
                        if (O) return window.addEventListener("reactNativeEvent", Ee), () => {
                            window.removeEventListener("reactNativeEvent", Ee)
                        }
                    }), [Ee, O]), null !== me && void 0 !== me && me.length ? z && !ae ? L ? (0, a.jsx)(Z.Z, {}) : null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(j.Z, {
                            hidden: !0,
                            fileInputRef: le,
                            accept: "image/jpeg, image/png, application/pdf",
                            maxSize: c.ZP.DOCUMENT_MAX_SIZE,
                            onChange: (e, t) => Ze(t, le),
                            onError: Se,
                            className: B,
                            onLoadingAndValidatingFile: () => W(!0)
                        }), k && (0, a.jsx)(j.Z, {
                            hidden: !0,
                            capture: !0,
                            id: "camera-file-input",
                            fileInputRef: de,
                            accept: "image/*",
                            maxSize: c.ZP.DOCUMENT_MAX_SIZE,
                            onChange: (e, t) => Ze(t, de),
                            onError: Se,
                            className: B,
                            onLoadingAndValidatingFile: () => W(!0)
                        }), null === R || void 0 === R ? void 0 : R({
                            onClick: async (e, t) => {
                                J.current = t || null;
                                const n = (0, i.Z)();
                                H(n), re({
                                    name: "patient_start_upload_document",
                                    details: {
                                        funnel_id: n
                                    }
                                });
                                await je() && (_e ? Q ? we() : m.ZP.call({
                                    method: m.Cv
                                }).then((e => {
                                    e === I ? we() : (0, u.vG)(b.x) && ee(!0), K(e === I)
                                })) : we())
                            },
                            loadingAndValidatingFile: X
                        }), (0, a.jsx)(A.Z, {
                            onUpload: T,
                            onAdd: F,
                            uploadFile: xe,
                            appointment: C,
                            multiPageInfos: pe,
                            dispatch: ue,
                            documentScanner: $,
                            masterPatients: me,
                            onHide: () => {
                                ue({
                                    type: "RESET"
                                }), D(le), D(de)
                            },
                            trackEvent: re,
                            shared: q
                        }), (0, a.jsx)(b.Z, {
                            show: Y,
                            onHide: () => {
                                ee(!1), we()
                            },
                            title: p.Z.t("patient_mobile.root.configuration.camera_access"),
                            text: ve
                        })]
                    }) : null
                }
        },
        121646: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => d,
                Z: () => c
            });
            var a = n(785893),
                o = n(184481),
                i = n(941389),
                s = n(445884),
                r = n(990626),
                l = n(961131);
            n(45410);
            const d = (0, o.createContext)(null),
                c = e => {
                    let {
                        acceptedMimeTypes: t,
                        children: n,
                        hint: c,
                        maxSize: p = r.ZP.DOCUMENT_MAX_SIZE,
                        onDrop: u,
                        onEnterDragAndDrop: m,
                        onError: g,
                        ...h
                    } = e;
                    const [_, f] = (0, o.useState)(!1), x = (0, o.useRef)(null);
                    (0, o.useEffect)((() => {
                        _ && m && m()
                    }), [_]);
                    const v = () => {
                        var e;
                        null === (e = x.current) || void 0 === e || e.open()
                    };
                    return (0, a.jsx)("div", {
                        "data-design-system": "oxygen",
                        children: (0, a.jsx)(i.ZP, {
                            ref: x,
                            accept: t,
                            onDrop: async (e, n) => {
                                if (f(!1), !u) return;
                                const a = n.map((e => {
                                    let n;
                                    const a = e.errors[0].code;
                                    return n = "file-invalid-type" === a ? s.Z.t("common.file_type_error_message", {
                                        types: t ? Object.values(t).flat().join(", ") : "",
                                        name: e.file.name
                                    }) : "file-too-large" === a ? s.Z.t("common.size_limit_error_message", {
                                        size_mo: p / l.GV,
                                        name: e.file.name
                                    }) : s.Z.t("common.error"), g && g(a), {
                                        file: e.file,
                                        errorMessage: n
                                    }
                                }));
                                await u(e, a)
                            },
                            onDragEnter: () => {
                                f(!0)
                            },
                            onDragLeave: () => {
                                f(!1)
                            },
                            maxSize: p,
                            ...h,
                            children: e => {
                                let {
                                    getRootProps: t,
                                    getInputProps: o
                                } = e;
                                return (0, a.jsxs)("div", {
                                    className: "dl-outline-none",
                                    ...t({
                                        onClick: e => e.stopPropagation()
                                    }),
                                    children: [_ && (0, a.jsx)("div", {
                                        className: "dl-file-dropzone-overlay",
                                        children: c
                                    }), (0, a.jsx)("input", { ...o({
                                            className: "dl-file-dropzone js-dl-file-dropzone"
                                        })
                                    }), (0, a.jsx)(d.Provider, {
                                        value: v,
                                        children: n
                                    })]
                                })
                            }
                        })
                    })
                }
        },
        956608: (e, t, n) => {
            var a = n(184481);
            const o = a.forwardRef((function(e, t) {
                return a.createElement("svg", { ...e,
                    ref: t
                }, a.createElement("path", {
                    d: "M1.5 18.54A4.7 4.7 0 0 1 0 15.16c-.03-1.3.54-2.58 1.7-3.86L11.8 1.23C12.87.14 14.04-.22 15.31.13c.6.16 1.13.48 1.6.95.48.48.8 1.01.96 1.61.35 1.3-.01 2.5-1.1 3.58L7.15 15.9c-.54.54-1.14.85-1.79.93a1.9 1.9 0 0 1-1.62-.57c-.4-.32-.59-.83-.55-1.5.04-.68.36-1.3.96-1.87l6.74-6.79c.33-.35.66-.35 1.02 0s.35.7 0 1.02l-6.75 6.74c-.6.6-.73 1.07-.4 1.43a.66.66 0 0 0 .48.12c.33-.06.64-.23.94-.53l9.63-9.63c.67-.68.9-1.41.69-2.2a2.05 2.05 0 0 0-1.55-1.54c-.73-.19-1.46.06-2.19.73L2.72 12.28c-.9 1.03-1.32 2-1.3 2.9.03.91.38 1.7 1.06 2.38.68.65 1.47 1 2.38 1.02.9.03 1.86-.4 2.86-1.26L17.8 7.28c.32-.32.66-.32 1.01 0 .36.3.36.62 0 .98L8.74 18.33A5.21 5.21 0 0 1 4.96 20a4.56 4.56 0 0 1-3.46-1.46z"
                }))
            }));
            o.defaultProps = {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20"
            }, e.exports = o, o.default = o
        },
        666513: () => {
            "use strict"
        }
    }
]);
//# sourceMappingURL=../26175-3d094fb2a6cdb49af84e.js.map