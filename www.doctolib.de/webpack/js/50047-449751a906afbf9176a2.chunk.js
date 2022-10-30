"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [50047], {
        294910: (t, e, o) => {
            o.d(e, {
                Z: () => l
            });
            var n = o(184481),
                a = o(468644),
                r = o(294184),
                i = o.n(r),
                c = (o(207575), o(785893));

            function s(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }
            class d extends n.Component {
                constructor() {
                    super(...arguments), s(this, "listItem", (0, n.createRef)()), s(this, "handleTap", (t => {
                        this.listItem.current.focus(), this.props.onTap(t, this.props)
                    }))
                }
                render() {
                    const {
                        className: t,
                        children: e,
                        component: o,
                        moveThresold: n,
                        bordered: r,
                        compact: s,
                        padding: d,
                        highlighted: l,
                        ...p
                    } = this.props, u = i()("DEPRECATED_dl-list-item", t, {
                        "DEPRECATED_dl-list-item-border": r,
                        "DEPRECATED_dl-list-item-compact": s,
                        "DEPRECATED_dl-list-item-nopadding": !d,
                        "DEPRECATED_dl-list-item-highlighted": l
                    });
                    return (0, c.jsx)(a.Z, {
                        innerRef: this.listItem,
                        component: o,
                        tabIndex: 0,
                        role: "button",
                        moveThreshold: n,
                        className: u,
                        ...p,
                        onTap: this.props.onTap && this.handleTap,
                        "data-design-system": "deprecated",
                        children: e
                    })
                }
            }
            s(d, "defaultProps", {
                component: "li",
                moveThresold: 10,
                bordered: !0,
                padding: !0,
                highlighted: !1
            });
            const l = d
        },
        282786: (t, e, o) => {
            o.d(e, {
                UE: () => p,
                XS: () => l,
                kb: () => m,
                pL: () => u
            });
            var n = o(445884),
                a = o(990626),
                r = o(287819),
                i = o(261397),
                c = (o(516590), o(48930));
            class s extends i.Lu {}(0, i.jx)(s, "DocumentLoadError");
            const d = () => null;
            async function l(t) {
                let e, {
                    account: o,
                    document: a,
                    httpClient: l,
                    decryptFile: p,
                    getResourceId: u,
                    setViewedAfterLoad: m = !0,
                    trackingContext: h
                } = t;
                (0, c.Z)();
                try {
                    e = await async function(t) {
                        let {
                            httpClient: e,
                            document: o,
                            account: n,
                            ...a
                        } = t;
                        if (!o.tanker_encrypted) return null;
                        const c = "patient" === (null === n || void 0 === n ? void 0 : n.kind) ? `/account/documents/${o.id}` : `/doctor_app/documents/${o.id}`,
                            l = o.download_path || c,
                            p = await fetch(l, {
                                headers: {
                                    Accept: "*/*"
                                },
                                redirect: "manual"
                            }).catch(d);
                        if (window.current_account && (0, i.XK)(e, r.IO, {
                                url: l,
                                account: n,
                                document: o,
                                status: p.status,
                                contentType: p.headers.get("Content-Type"),
                                location: p.headers.get("Location"),
                                ...a
                            }), p.ok) return p.blob();
                        throw new s(`request for encrypted blob at ${l} failed with status ${p.status}`, p)
                    }({
                        httpClient: l,
                        document: a,
                        account: o,
                        trackingContext: h
                    })
                } catch (g) {
                    (0, i.XK)(l, r.XY, {
                        account: o,
                        document: a,
                        error: g,
                        nextError: g.next,
                        ...h
                    });
                    return {
                        errorMessage: 404 === g.responseStatusCode ? n.Z.t("patient_common.root.documents.document_unavailable_technical_reason") : n.Z.t("api.accounts.index.root.notifications.temporary_error"),
                        errorStatus: g.responseStatusCode
                    }
                }
                const y = await p(e, a, !1, h),
                    {
                        error: g,
                        reshare: v,
                        decryptedFile: _
                    } = y;
                let {
                    errorMessage: w
                } = y;
                if (g && (0, i.o)(g) && "doctor" === o.kind) {
                    var b;
                    const t = o.agendas.map((t => t.security_tanker_group_id));
                    (null === (b = o.registered_tanker_group_ids) || void 0 === b ? void 0 : b.every((e => t.includes(e)))) || (w = n.Z.t("tanker.errors.waiting_for_access"))
                }
                if (g && "password_reset" === (null === v || void 0 === v ? void 0 : v.reason) && (w = n.Z.t("tanker.errors.reset_password_reshare_in_progress")), w) return {
                    errorMessage: w
                };
                !a.viewed_or_downloaded_at && m && l.put("patient" === (null === o || void 0 === o ? void 0 : o.kind) ? `/account/documents/${a.id}` : `/doctor_app/documents/${a.id}`, {
                    body: {
                        viewed: !0
                    }
                }).catch(d);
                const f = URL.createObjectURL(_);
                return {
                    resourceId: u ? await u({
                        encryptedData: e
                    }) : null,
                    decryptedFile: _,
                    decryptedFileUrl: f
                }
            }
            const p = async t => {
                    let {
                        toast: e,
                        ...o
                    } = t;
                    const {
                        errorMessage: n,
                        decryptedFileUrl: a
                    } = await l({ ...o
                    });
                    return n ? (e({
                        message: n,
                        uiStyle: "warning"
                    }), null) : a
                },
                u = (t, e, o) => t ? `/account/documents/${o}/preview` : `/appointments/anonymous/${e}/documents/${o}`,
                m = t => (0, a.LA)("prescription_inbox") && "medicine_prescription" === t.kind ? `/account/documents/${t.id}/search-pharmacy` : `/account/appointments/documents/${t.kind}/${t.id}`
        },
        347964: (t, e, o) => {
            o.d(e, {
                OO: () => d,
                ZP: () => v,
                xZ: () => l
            });
            var n = o(293162),
                a = o.n(n),
                r = o(282786),
                i = o(951969),
                c = o(129303),
                s = o(160160);
            const d = "3.1.5",
                l = "3.1.4",
                p = ["com.apple.UIKit.activity.AddToReadingList", "com.apple.UIKit.activity.AssignToContact", "com.apple.UIKit.activity.Mail", "com.apple.UIKit.activity.MarkupAsPDF", "com.apple.UIKit.activity.OpenInIBooks", "com.apple.UIKit.activity.PostToFacebook", "com.apple.UIKit.activity.PostToFlickr", "com.apple.UIKit.activity.PostToTencentWeibo", "com.apple.UIKit.activity.PostToTwitter", "com.apple.UIKit.activity.PostToVimeo", "com.apple.UIKit.activity.PostToWeibo"],
                u = {
                    android: {
                        doctor: "3.1.5",
                        patient: "3.2.20"
                    },
                    ios: {
                        doctor: "3.1.4",
                        patient: "3.2.22"
                    }
                },
                m = t => {
                    const e = new FileReader;
                    e.readAsDataURL(t);
                    const o = (0, s.Z)();
                    e.onloadend = () => {
                        const n = e.result;
                        c.ZP.call({
                            method: "shareDocument",
                            params: [n, !0, p, t.type, o]
                        })
                    }
                },
                h = async t => {
                    const e = await (async t => (await fetch(t, {
                        headers: {
                            Accept: "*/*"
                        }
                    })).blob())(t);
                    m(e)
                },
                y = async t => {
                    let {
                        platforms: e,
                        app: o,
                        httpClient: n,
                        toast: c,
                        displayVersionWarning: s,
                        account: d,
                        document: l,
                        reactNative: p,
                        decryptFile: h
                    } = t;
                    const {
                        errorMessage: y,
                        decryptedFile: g
                    } = await (0, r.XS)({
                        account: d,
                        document: l,
                        httpClient: n,
                        decryptFile: h
                    });
                    return y ? (c({
                        message: y,
                        uiStyle: "warning"
                    }), y) : p ? ((t, e) => t.android && (0, i.vG)(u.android[e]) || t.ios && (0, i.vG)(u.ios[e]))(e, o) ? m(g) : s(!0) : a()(g, l.name)
                },
                g = t => {
                    let {
                        httpClient: e,
                        document: o,
                        url: n,
                        app: r,
                        reactNative: c,
                        platforms: s,
                        displayVersionWarning: d
                    } = t;
                    c ? ((t, e) => t.android && !(0, i.vG)(u.android[e]) || t.ios && !(0, i.vG)(u.ios[e]))(s, r) ? d(!0) : ((t, e, o) => {
                        e.url ? (t => {
                            let {
                                kind: e,
                                generated: o
                            } = t;
                            return "clear" === e && !o
                        })(e) ? h(e.url) : t.get(e.url).then((async t => {
                            let {
                                bodyData: {
                                    url: e
                                }
                            } = t;
                            h(e)
                        })) : h(o)
                    })(e, o, n) : a()(n, o.name)
                },
                v = t => {
                    let {
                        httpClient: e,
                        app: o,
                        decryptFile: n,
                        account: a,
                        document: r,
                        url: i,
                        displayVersionWarning: c,
                        toast: s
                    } = t;
                    const d = window.platforms,
                        l = window.platforms.reactNative;
                    return r.tanker_encrypted ? y({
                        httpClient: e,
                        platforms: d,
                        app: o,
                        toast: s,
                        displayVersionWarning: c,
                        account: a,
                        document: r,
                        reactNative: l,
                        decryptFile: n
                    }) : g({
                        httpClient: e,
                        document: r,
                        url: i,
                        reactNative: l,
                        platforms: d,
                        app: o,
                        displayVersionWarning: c
                    })
                }
        },
        541584: (t, e, o) => {
            o.d(e, {
                $S: () => s,
                H4: () => c,
                Ju: () => r,
                qk: () => i
            });
            o(348764);
            var n = o(990626),
                a = o(499055);
            o(863412);
            const r = Object.freeze({
                SIGNED: "signed",
                PADES_SIGNED: "pades_signed",
                QES_SIGNED: "qes_signed"
            });
            Object.values(r);
            Error;
            const i = async t => {
                    const e = await
                    function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return new Promise(((o, n) => fetch(t).then((t => t.blob())).then((t => {
                            const a = new FileReader;
                            a.readAsDataURL(t), a.onloadend = () => {
                                const t = e ? a.result : a.result.split(",")[1];
                                o(t)
                            }, a.onerror = t => n(t)
                        }))))
                    }(t, !0);
                    return (await a.PDFDocument.load(e)).getAuthor()
                },
                c = t => !!t && t.signed === r.PADES_SIGNED && (0, n.LA)("pades_e_signature"),
                s = t => !!t && t.signed === r.QES_SIGNED
        }
    }
]);
//# sourceMappingURL=../50047-f450de5cd1b440e6a5c7.js.map