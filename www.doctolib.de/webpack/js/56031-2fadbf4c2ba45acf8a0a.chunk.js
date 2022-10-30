"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [56031], {
        606013: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var l = t(184481),
                a = t(445884),
                r = t(294184),
                o = t.n(r),
                i = t(597043),
                s = t(298203),
                c = t(784600),
                u = t(453040),
                d = t(231754),
                m = t(171493),
                p = t(785893);
            const y = e => {
                    let {
                        content: {
                            resultLines: n,
                            textLines: t,
                            lastName: l,
                            firstName: r,
                            birthday: s
                        },
                        className: d
                    } = e;
                    const m = e => !e[8] || "N" === e[8],
                        y = [l, r].some((e => e && e.length > 0)),
                        v = s && s.length > 0,
                        h = y || v,
                        g = (l && l.length > 0 ? `${l} ` : "") + (r && r.length > 0 ? r : "");
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(null === n || void 0 === n ? void 0 : n.length) && (0, p.jsxs)(c.Z, {
                            className: o()("dl-gray-lighter-bg", "dl-margin-b-24", d),
                            children: [h && (0, p.jsxs)("div", {
                                "data-test": "hprim_patient_info",
                                children: [(0, p.jsx)("div", {
                                    className: "dl-margin-b-8 dl-padding-x-16",
                                    children: (0, p.jsx)(i.Z, {
                                        container: !0,
                                        children: (0, p.jsx)(i.Z, {
                                            item: !0,
                                            xsSize: 4,
                                            children: (0, p.jsx)(u.Z, {
                                                uiStyle: "body-xs-bold",
                                                color: "neutral-090",
                                                transform: "uppercase",
                                                children: a.Z.t("doctor_common.secure_messaging.hprim.patient_info")
                                            })
                                        })
                                    })
                                }), (0, p.jsxs)(c.Z, {
                                    className: "dl-margin-b",
                                    children: [y && (0, p.jsx)(u.Z, {
                                        uiStyle: "body-s-bold",
                                        children: a.Z.t("doctor_common.secure_messaging.hprim.fullname", {
                                            fullname: g
                                        })
                                    }), v && (0, p.jsx)(u.Z, {
                                        uiStyle: "body-s-bold",
                                        children: a.Z.t("doctor_common.secure_messaging.hprim.birthdate", {
                                            birthdate: s
                                        })
                                    })]
                                })]
                            }), (0, p.jsx)("div", {
                                className: "dl-margin-b-8 dl-padding-x-16",
                                children: (0, p.jsxs)(i.Z, {
                                    container: !0,
                                    children: [(0, p.jsx)(i.Z, {
                                        item: !0,
                                        xsSize: 6,
                                        children: (0, p.jsx)(u.Z, {
                                            uiStyle: "body-xs-bold",
                                            color: "neutral-090",
                                            transform: "uppercase",
                                            children: a.Z.t("doctor_common.secure_messaging.hprim.name")
                                        })
                                    }), (0, p.jsx)(i.Z, {
                                        item: !0,
                                        xsSize: 6,
                                        children: (0, p.jsx)(u.Z, {
                                            uiStyle: "body-xs-bold",
                                            color: "neutral-090",
                                            transform: "uppercase",
                                            children: a.Z.t("doctor_common.secure_messaging.hprim.value")
                                        })
                                    })]
                                })
                            }), n.map(((e, n) => "TEX" === e[0] ? (0, p.jsx)(u.Z, {
                                className: "dl-margin-x-16 dl-margin-b-8",
                                block: !0,
                                uiStyle: "body-xs-regular",
                                children: e[1]
                            }, n) : (0, p.jsx)(c.Z, {
                                className: "dl-margin-b",
                                children: (0, p.jsxs)(i.Z, {
                                    container: !0,
                                    children: [(0, p.jsx)(i.Z, {
                                        item: !0,
                                        xsSize: 6,
                                        children: (0, p.jsxs)(u.Z, {
                                            uiStyle: "body-s-bold",
                                            children: [e[1], (0, p.jsx)(u.Z, {
                                                color: "neutral-090",
                                                className: "dl-margin-x-8",
                                                children: e[5]
                                            })]
                                        })
                                    }), (0, p.jsxs)(i.Z, {
                                        item: !0,
                                        xsSize: 6,
                                        children: [(0, p.jsx)(u.Z, {
                                            className: o()("dl-padding-8", "dl-rounded-borders", {
                                                "dl-red-dark-bg": !m(e)
                                            }),
                                            uiStyle: "body-s-bold",
                                            color: m(e) ? "neutral-150" : "white",
                                            component: "span",
                                            children: e[4]
                                        }), e[6] && (0, p.jsxs)(u.Z, {
                                            className: "dl-margin-l-24",
                                            uiStyle: "body-xs-regular",
                                            children: [e[6], " - ", e[7]]
                                        })]
                                    })]
                                })
                            }, `${e.join("|")}-${n}`)))]
                        }), (0, p.jsx)(u.Z, {
                            color: n ? "neutral-090" : null,
                            whiteSpace: !0,
                            children: t.join("\n")
                        })]
                    })
                },
                v = e => {
                    let {
                        url: n,
                        onLoadSuccess: t,
                        displayOnlyHprim: a
                    } = e;
                    const [r, o] = (0, l.useState)(), [i, v] = (0, l.useState)(), {
                        abortController: h
                    } = (0, s.Z)();
                    return (0, l.useEffect)((() => {
                        n && (0, m.s_)(n).then((e => {
                            h.signal.aborted || ((0, d.Ww)(e) ? v((0, d.wx)(e).hprimContent) : o(e))
                        }))
                    }), [h, n]), (0, l.useEffect)((() => {
                        null === t || void 0 === t || t()
                    }), [t]), !i && a ? null : (0, p.jsx)(c.Z, {
                        className: "dl-text-left",
                        children: i ? (0, p.jsx)(y, {
                            content: i
                        }) : (0, p.jsx)(u.Z, {
                            whiteSpace: !0,
                            children: r
                        })
                    })
                }
        },
        1167: (e, n, t) => {
            t.d(n, {
                G: () => u
            });
            var l = t(184481),
                a = t(600625),
                r = t(298203),
                o = t(509250),
                i = t(261397),
                s = t(580163),
                c = t(282786);
            const u = e => {
                const [n, t] = (0, l.useState)(""), [u, d] = (0, l.useState)(!0), {
                    abortController: m
                } = (0, r.Z)(), {
                    account: p
                } = (0, l.useContext)(o.Z), {
                    decryptFile: y
                } = (0, l.useContext)(i.WA), v = (0, s.ZP)();
                return (0, l.useEffect)((() => {
                    e.tanker_encrypted ? (0, c.UE)({
                        account: p,
                        document: e,
                        httpClient: a.ZP,
                        decryptFile: y,
                        toast: v
                    }).then((e => {
                        m.signal.aborted || (t(e), d(!1))
                    })) : (t(e.download_path || `/doctor_app/documents/${e.id}`), d(!1))
                }), [e.id, e.tanker_encrypted, e.download_path]), [n, u]
            }
        },
        388030: (e, n, t) => {
            t.d(n, {
                b: () => o
            });
            var l = t(59255),
                a = t(184481),
                r = t(298203);
            const o = e => {
                const [n, t] = (0, a.useState)(!1), [o, i] = (0, a.useState)(""), {
                    abortController: s
                } = (0, r.Z)();
                return (0, a.useEffect)((() => {
                    fetch(e, {
                        signal: s.signal
                    }).then((e => e.arrayBuffer())).then((e => l.convertToHtml({
                        arrayBuffer: e
                    }))).then((e => s.signal.aborted || i(e.value))).catch((() => s.signal.aborted || t(!0)))
                }), [e, s.signal]), [o, n]
            }
        },
        995882: (e, n, t) => {
            t.d(n, {
                C: () => s
            });
            var l = t(184481),
                a = t(298203),
                r = t(766173),
                o = t.n(r);

            function i(e) {
                const n = o().toRGBA8(e),
                    t = window.document.createElement("canvas"),
                    l = e.width,
                    a = e.height;
                t.width = l, t.height = a;
                const r = t.getContext("2d"),
                    i = new ImageData(new Uint8ClampedArray(n.buffer), l, a);
                return r.putImageData(i, 0, 0), t.toDataURL()
            }
            const s = function(e) {
                let {
                    firstPageOnly: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    firstPageOnly: !1
                };
                const [t, r] = (0, l.useState)(!1), [s, c] = (0, l.useState)(""), [u, d] = (0, l.useState)(0), {
                    abortController: m
                } = (0, a.Z)();
                return (0, l.useEffect)((() => {
                    fetch(e, {
                        signal: m.signal
                    }).then((e => e.arrayBuffer())).then((e => {
                        const t = o().decode(e),
                            l = (n ? t.slice(0, 1) : t).map((n => {
                                try {
                                    o().decodeImage(e, n);
                                    return n.data.every((e => 0 === e)) ? null : i(n)
                                } catch (e) {
                                    return null
                                }
                            }));
                        if (!l.filter(Boolean).length) throw new Error("Nothing to preview for tiff file");
                        m.signal.aborted || (c(l), d(t.length))
                    })).catch((() => m.signal.aborted || r(!0)))
                }), [e, n, m.signal]), [s, t, u]
            }
        },
        621634: (e, n, t) => {
            t.d(n, {
                Z: () => r
            });
            var l = t(335963),
                a = t(785893);
            const r = e => {
                let {
                    label: n,
                    size: t = "small"
                } = e;
                return n ? (0, a.jsx)(l.Z, {
                    color: "success-020",
                    iconName: "file-signature",
                    label: n,
                    size: t
                }) : null
            }
        },
        846690: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var l = t(294184),
                a = t.n(l),
                r = t(445884),
                o = t(5212),
                i = t(929014),
                s = t(453040),
                c = t(642979),
                u = t(785893);
            const d = e => {
                let {
                    className: n
                } = e;
                const t = (0, o.rl)(),
                    l = r.Z.t((0, o._y)() || (0, o.hs)() ? "doctor_common.documents.signature.know_more_pro_href" : "doctor_common.documents.signature.know_more_patient_href"),
                    d = r.Z.t(t ? "doctor_common.documents.signature.short_header_desc" : "doctor_common.documents.signature.header_desc");
                return (0, u.jsx)("div", {
                    className: a()("flex", {
                        "dl-margin-b-24": !t
                    }, "dl-justify-center", n),
                    children: (0, u.jsxs)(i.Z, {
                        variant: "deprecated-alert-interface",
                        children: [(0, u.jsx)(s.Z, {
                            children: d
                        }), " ", (0, u.jsx)(c.Z, {
                            className: "dl-text-body dl-text-s dl-text-bold",
                            href: l,
                            target: "_blank",
                            children: r.Z.t("common.actions.know_more")
                        })]
                    })
                })
            }
        },
        14012: (e, n, t) => {
            t.d(n, {
                ZP: () => c
            });
            var l = t(184481),
                a = t(171493),
                r = t(827856),
                o = t.n(r),
                i = t(97746);
            const s = e => {
                    const n = new XSLTProcessor,
                        t = (new DOMParser).parseFromString(e, "text/xml"),
                        l = (e => !!e.match(/<\?xml-stylesheet type="text\/xsl" href="(.+?)?cda_asip\.xsl"\?>/))(e) ? (e => {
                            const n = new XMLHttpRequest;
                            return n.open("GET", e, !1), n.overrideMimeType("application/xml"), n.send(null), n.responseXML
                        })("/cda/xslt/cda_asip_combined.xsl") : t;
                    if (l) {
                        n.importStylesheet(l);
                        const e = n.transformToFragment(t, document);
                        return '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">' + o().sanitize(e, {
                            ADD_TAGS: ["link", "a"]
                        })
                    }
                    return null
                },
                c = () => {
                    const [e, n] = (0, l.useState)(null), [t, r] = (0, l.useState)(null), o = (0, l.useCallback)((async (e, t) => {
                        const l = function(e) {
                            let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                t = null,
                                l = null;
                            if (e && (t = s(e), n)) {
                                const n = (0, i.S)(e);
                                n.length && (l = n)
                            }
                            return {
                                documentHtml: t,
                                labObservationTableData: l
                            }
                        }(await (0, a.s_)(e), t);
                        return r(l.documentHtml), n(l.labObservationTableData), l
                    }), []);
                    return {
                        labObservationTableData: e,
                        documentHtml: t,
                        fetchAndParseLabObservations: o
                    }
                }
        },
        891073: (e, n, t) => {
            t.d(n, {
                CL: () => o
            });
            var l, a = t(621526),
                r = t(405845);
            ! function(e) {
                e.critical = "critical", e.abnormal = "abnormal", e.normal = "normal"
            }(l || (l = {}));
            new r.u;
            const o = e => {
                const n = e.referenceRange,
                    t = e.value,
                    l = "PQ" === (null === t || void 0 === t ? void 0 : t._type) || "c:PQ" === (null === t || void 0 === t ? void 0 : t._type) || "TS" === (null === t || void 0 === t ? void 0 : t._type) || "c:TS" === (null === t || void 0 === t ? void 0 : t._type) || ("REAL" === (null === t || void 0 === t ? void 0 : t._type) || "c:REAL" === (null === t || void 0 === t ? void 0 : t._type)) && (null === t || void 0 === t ? void 0 : t._value);
                if (n && l) {
                    var r;
                    const e = parseFloat(t._value),
                        l = null === (r = n.observationRange) || void 0 === r ? void 0 : r.value;
                    if (!l) return !1;
                    if ((e => {
                            let {
                                observationFloatValue: n,
                                rangeValues: t
                            } = e;
                            if ((0, a.f8)(t)) {
                                const e = parseFloat(t.low._value);
                                if (n < e || ("false" === t.low._inclusive || void 0 === t.low._inclusive) && n === e) return !0
                            }
                            if ((0, a.hp)(t)) {
                                const e = parseFloat(t.high._value);
                                if (n > e || ("false" === t.high._inclusive || void 0 === t.high._inclusive) && n === e) return !0
                            }
                            return !1
                        })({
                            observationFloatValue: e,
                            rangeValues: l
                        })) return !0
                }
                return !1
            }
        },
        405845: (e, n, t) => {
            t.d(n, {
                u: () => r
            });
            var l = t(843946);

            function a(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            class r {
                constructor() {
                    a(this, "getDisplayNameByCode", (e => {
                        const n = e.replace(/>/g, "&gt;").replace(/</g, "&lt;"),
                            t = this.observationInterpretations.filter((e => e.code === n));
                        if (0 === t.length) throw new Error("Unknown code specified");
                        return t[0].displayName
                    })), a(this, "isObservationCritical", (e => ["AA", "HH", "LL"].includes(e))), a(this, "loadObservationInterpretations", (() => {
                        let e = null;
                        try {
                            e = (0, l.i)().valueSet[0].conceptList[0].concept.map((e => e))
                        } catch {
                            throw new Error("No observation interpretations have been loaded")
                        }
                        return e
                    })), this.observationInterpretations = this.loadObservationInterpretations()
                }
            }
        },
        473032: (e, n, t) => {
            t.d(n, {
                z: () => i
            });
            var l = t(621526),
                a = t(660338),
                r = t(657269);
            const o = (e, n) => {
                    let {
                        battery: t
                    } = e;
                    return {
                        results: t.content.map((e => (0, l.U9)(e) ? (0, r.T2)(e, n) : (0, r.k5)(e, n))),
                        header: (0, r.g5)(t, n)
                    }
                },
                i = (e, n) => {
                    if ((0, a.m)(e)) {
                        const t = e.cluster.content,
                            i = t.filter(a.F),
                            s = i.length > 0 ? i[0] : null,
                            c = t.reduce(((e, t) => (0, l.U9)(t) ? [...e, (0, r.T2)(t, n)] : (0, l.DE)(t) ? [...e, (0, r.k5)(t, n)] : e), []),
                            u = {
                                header: (0, r.g5)(e.cluster, n),
                                results: c
                            };
                        return s && (u.subsection = o(s, n)), u
                    }
                    return (0, a.F)(e) ? o(e, n) : (0, l.U9)(e) ? {
                        results: [(0, r.T2)(e, n)]
                    } : (0, l.DE)(e) ? {
                        results: [(0, r.k5)(e, n)]
                    } : void 0
                }
        },
        74737: (e, n, t) => {
            t.d(n, {
                MB: () => r,
                W9: () => s,
                Zr: () => i,
                _C: () => o
            });
            var l = t(716932),
                a = t(621526);
            const r = e => new l.XMLParser({
                    format: !0,
                    ignoreAttributes: !1,
                    attributeNamePrefix: "_",
                    suppressEmptyNode: !0,
                    removeNSPrefix: !0
                }).parse(e.outerHTML),
                o = e => {
                    const n = new DOMParser,
                        t = (e => e.replace(/<!--(.+?)?FR-Resultat-examens-de-biologie-element-clinique-pertinent(.+?)?-->/g, "<pertinentLabResult></pertinentLabResult>").replace(/<!--(.+?)?FR-Commentaire(.+?)?-->/g, "<commentResult></commentResult>").replace(/<!--(.+?)?COMMENTAIRE SUR L'ECBU(.+?)?-->/g, "<commentResult></commentResult>"))(e);
                    return n.parseFromString(t, "text/xml")
                },
                i = e => {
                    const n = e.nextElementSibling;
                    if (!n) return;
                    const t = n.getElementsByTagNameNS("*", "observation");
                    if (t && t.length > 0) {
                        const e = t[0],
                            n = r(e);
                        if ((0, a.U9)(n)) return n
                    }
                },
                s = e => {
                    const n = e.nextElementSibling;
                    if (!n) return;
                    const t = n.getElementsByTagNameNS("*", "act");
                    if (t && t.length > 0) {
                        const e = t[0],
                            n = r(e);
                        if ((0, a.DE)(n)) return n
                    }
                }
        },
        97746: (e, n, t) => {
            t.d(n, {
                S: () => d
            });
            var l = t(434120),
                a = t(74737),
                r = t(473032);
            const o = e => "pertinentLabResult" === e.tagName ? (0, a.Zr)(e) : "commentResult" === e.tagName ? (0, a.W9)(e) : void 0,
                i = e => {
                    const n = e.querySelectorAll("pertinentLabResult,commentResult");
                    return Array.from(n).map(o).filter(l.$K)
                },
                s = e => {
                    var n;
                    const t = (0, a.MB)(e);
                    return null === t || void 0 === t || null === (n = t.organizer) || void 0 === n ? void 0 : n.code
                },
                c = e => {
                    var n, t, l, r;
                    const o = (0, a.MB)(e);
                    return null === o || void 0 === o || null === (n = o.organizer) || void 0 === n || null === (t = n.specimen) || void 0 === t || null === (l = t.specimenRole) || void 0 === l || null === (r = l.specimenPlayingEntity) || void 0 === r ? void 0 : r.code
                },
                u = e => {
                    const n = [],
                        t = e.querySelector("pertinentLabResult,commentResult"),
                        l = e.querySelector('[classCode="BATTERY"]'),
                        a = e.querySelector('[classCode="CLUSTER"]');
                    if (a && a.contains(t)) {
                        const e = u(a);
                        n.push({
                            cluster: {
                                content: e,
                                code: c(a)
                            }
                        }), a.remove()
                    } else if (l && l.contains(t)) n.push({
                        battery: {
                            content: i(l),
                            code: s(l)
                        }
                    }), l.remove();
                    else if (t) {
                        const e = o(t);
                        e && n.push(e), t.remove()
                    }
                    return e.querySelector("pertinentLabResult,commentResult") && n.push(...u(e)), n
                },
                d = e => {
                    const n = (0, a._C)(e),
                        t = (e => Array.from(e.querySelectorAll("[ID]")).filter((e => 0 === e.childElementCount)).map((e => ({
                            text: e.innerHTML,
                            ID: e.getAttribute("ID") || "",
                            elementType: e.localName
                        }))))(n);
                    return u(n).map((e => (0, r.z)(e, t))).filter(l.$K)
                }
        },
        657269: (e, n, t) => {
            t.d(n, {
                T2: () => g,
                g5: () => v,
                k5: () => _
            });
            var l = t(977954),
                a = t.n(l),
                r = t(621526),
                o = t(434120),
                i = t(445884),
                s = t(405845),
                c = t(891073);
            const u = {
                    true: i.Z.t("common.boolean.true"),
                    false: i.Z.t("common.boolean.false")
                },
                d = e => parseFloat(e.replace(/,/g, ".")).toString(),
                m = (e, n) => {
                    const t = e.reference._value.replace(/#/g, "");
                    return n.find((e => e.ID === t))
                },
                p = e => {
                    let {
                        code: n
                    } = e;
                    return null === n || void 0 === n ? void 0 : n._displayName
                },
                y = (e, n) => {
                    let {
                        code: t
                    } = e;
                    const l = null === t || void 0 === t ? void 0 : t.originalText;
                    if ((0, o.Yk)(l)) {
                        const e = m(l, n);
                        if (e) return e.text
                    }
                },
                v = (e, n) => {
                    let {
                        code: t
                    } = e;
                    const l = y({
                            code: t
                        }, n),
                        a = p({
                            code: t
                        });
                    return l || (null === a || void 0 === a ? void 0 : a.split(" [")[0]) || ""
                },
                h = (e, n) => {
                    const t = e.text;
                    if (t && (0, o.Yk)(t)) {
                        const e = m(t, n);
                        if (e) return e.text
                    }
                },
                g = (e, n) => {
                    let {
                        observation: t
                    } = e;
                    const l = v(t, n),
                        o = (e => {
                            var n, t;
                            const l = null === (n = e.interpretationCode) || void 0 === n ? void 0 : n._code;
                            if (!l) return;
                            const a = new s.u;
                            return {
                                code: l,
                                isCritical: a.isObservationCritical(l),
                                displayName: (null === (t = e.interpretationCode) || void 0 === t ? void 0 : t._displayName) || a.getDisplayNameByCode(l)
                            }
                        })(t),
                        i = ((e, n) => {
                            const t = e.value;
                            if (!t) return {
                                primaryValue: {
                                    value: ""
                                }
                            };
                            if ((0, r.NN)(t)) return {
                                isOutsideRange: (0, c.CL)(e),
                                primaryValue: {
                                    value: d(t._value),
                                    unit: t._unit.replace(/{.+}/g, "")
                                },
                                secondaryValue: t.translation && {
                                    value: d(t.translation._value),
                                    unit: t.translation._code.replace(/{.+}/g, "")
                                }
                            };
                            if ((0, r.iX)(t)) {
                                const e = "true" === t.low._inclusive ? "\u2265" : ">";
                                return {
                                    primaryValue: {
                                        value: `${e} ${d(t.low._value)}`,
                                        unit: t.low._unit
                                    },
                                    secondaryValue: t.low.translation && {
                                        value: `${e} ${d(t.low.translation._value)}`,
                                        unit: t.low.translation._code
                                    }
                                }
                            }
                            if ((0, r.bw)(t)) {
                                const e = "true" === t.high._inclusive ? "\u2264" : "<";
                                return {
                                    primaryValue: {
                                        value: `${e} ${d(t.high._value)}`,
                                        unit: t.high._unit
                                    },
                                    secondaryValue: t.high.translation && {
                                        value: `${e} ${d(t.high.translation._value)}`,
                                        unit: t.high.translation._code
                                    }
                                }
                            }
                            if ((0, r.m2)(t)) return {
                                primaryValue: {
                                    value: t._displayName
                                },
                                secondaryValue: {
                                    value: t.translation._displayName
                                }
                            };
                            if ((0, r.uZ)(t)) return {
                                primaryValue: {
                                    value: `${"true"===t.low._inclusive?"\u2265":">"} ${a().unix(Number(t.low._value)).localize("DD/MM/YYYY HH[h]mm")}`
                                }
                            };
                            if ((0, r.lT)(t)) return {
                                primaryValue: {
                                    value: `${"true"===t.high._inclusive?"\u2264":"<"} ${a().unix(Number(t.high._value)).localize("DD/MM/YYYY HH[h]mm")}`
                                }
                            };
                            if ((0, r.Ng)(t)) return {
                                primaryValue: {
                                    value: `${"true"===t.low._inclusive?"\u2265":">"} ${d(t.low._value)}`
                                }
                            };
                            if ((0, r.j$)(t)) return {
                                primaryValue: {
                                    value: `${"true"===t.high._inclusive?"\u2264":"<"} ${d(t.high._value)}`
                                }
                            };
                            if ((0, r.bN)(t)) return {
                                isOutsideRange: (0, c.CL)(e),
                                primaryValue: {
                                    value: a().unix(Number(t._value)).localize("DD/MM/YYYY HH[h]mm")
                                }
                            };
                            if ((0, r.HN)(t)) return {
                                isOutsideRange: (0, c.CL)(e),
                                primaryValue: {
                                    value: d(t._value)
                                }
                            };
                            if ((0, r.O3)(t)) {
                                const e = t.originalText,
                                    l = m(e, n);
                                if (l) return {
                                    primaryValue: {
                                        value: l.text
                                    }
                                }
                            }
                            return (0, r.md)(t) ? {
                                primaryValue: {
                                    value: u[t._value]
                                }
                            } : (0, r.tC)(t) ? {
                                primaryValue: {
                                    value: d(t._value)
                                }
                            } : (0, r.Ko)(t) || (0, r.lh)(t) ? {
                                primaryValue: {
                                    value: t["#text"]
                                }
                            } : {
                                primaryValue: {
                                    value: "TBD"
                                }
                            }
                        })(t, n),
                        g = (e => {
                            var n, t;
                            const l = null === (n = e.referenceRange) || void 0 === n || null === (t = n.observationRange) || void 0 === t ? void 0 : t.value;
                            let a;
                            return l && (0, r.f8)(l) && (a = {
                                low: {
                                    isInclusive: "true" === l.low._inclusive,
                                    primaryValue: {
                                        value: d(l.low._value),
                                        unit: l.low._unit
                                    },
                                    secondaryValue: l.low.translation && {
                                        value: d(l.low.translation._value),
                                        unit: l.low.translation._code
                                    }
                                }
                            }), l && (0, r.hp)(l) && (a = { ...a,
                                high: {
                                    isInclusive: "true" === l.high._inclusive,
                                    primaryValue: {
                                        value: d(l.high._value),
                                        unit: l.high._unit
                                    },
                                    secondaryValue: l.high.translation && {
                                        value: d(l.high.translation._value),
                                        unit: l.high.translation._code
                                    }
                                }
                            }), a
                        })(t),
                        _ = ((e, n) => {
                            if ((0, r.bW)(e)) {
                                const t = e.entryRelationship.act;
                                return h(t, n)
                            }
                        })(t, n),
                        f = (e => ({
                            code: e.code._code,
                            codeSystem: e.code._codeSystem
                        }))(t);
                    return {
                        code: f,
                        valueName: l,
                        interpretationCode: o,
                        result: i,
                        referenceRange: g,
                        comment: _,
                        fullDisplayName: p(t),
                        altDisplayNameThroughId: y(t, n)
                    }
                },
                _ = (e, n) => {
                    let {
                        act: t
                    } = e;
                    const l = h(t, n);
                    return {
                        valueName: i.Z.t("doctor_common.secure_messaging.shared.mail_body.clinical_observations.conclusion"),
                        comment: l
                    }
                }
        },
        843946: (e, n, t) => {
            t.d(n, {
                i: () => l
            });
            const l = () => JSON.parse('{\n  "valueSet":\n    [\n      {\n        "id": "2.16.840.1.113883.5.83",\n        "name": "JDV_HL7_ObservationInterpretation-CISIS",\n        "displayName": "JDV_HL7_ObservationInterpretation-CISIS",\n        "statusCode": "deprecated",\n        "versionLabel": "1.0",\n        "effectiveDate": "2020-02-13T00:00:00",\n        "sourceCodeSystem": [\n          {\n            "id": "2.16.840.1.113883.5.83",\n            "identifierName": "",\n            "canonicalUri": "urn:oid:2.16.840.1.113883.5.83",\n            "canonicalUriDSTU2": "urn:oid:2.16.840.1.113883.5.83",\n            "canonicalUriSTU3": "urn:oid:2.16.840.1.113883.5.83",\n            "canonicalUriR4": "urn:oid:2.16.840.1.113883.5.83"\n          }\n        ],\n        "publishingAuthority": [\n          {\n            "name": "nar"\n          }\n        ],\n        "conceptList": [\n          {\n            "concept": [\n              {\n                "code": "&lt;",\n                "displayName": "Inf\xe9rieur \xe0 la limite de d\xe9tection",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "&gt;",\n                "displayName": "Sup\xe9rieur \xe0 la limite maximale de mesure",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "A",\n                "displayName": "Anormal",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "AA",\n                "displayName": "Tr\xe8s anormal, alerte",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "B",\n                "displayName": "Am\xe9lioration",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "D",\n                "displayName": "Diminution significative par rapport au r\xe9sultat ant\xe9rieur",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "DET",\n                "displayName": "D\xe9tect\xe9",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "EX",\n                "displayName": "Hors seuils",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "H",\n                "displayName": "Anormalement haut",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "HH",\n                "displayName": "Tr\xe8s anormalement haut, alerte",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "HX",\n                "displayName": "Hors seuil sup\xe9rieur",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "I",\n                "displayName": "Interm\xe9diaire",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "IND",\n                "displayName": "Ind\xe9termin\xe9",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "L",\n                "displayName": "Anormalement bas",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "LL",\n                "displayName": "Tr\xe8s anormalement bas, alerte",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "LX",\n                "displayName": "Hors seuil inf\xe9rieur",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "MS",\n                "displayName": "Mod\xe9r\xe9ment sensible",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "N",\n                "displayName": "Normal",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "ND",\n                "displayName": "Non d\xe9tect\xe9",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "NEG",\n                "displayName": "N\xe9gatif",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "NR",\n                "displayName": "Non r\xe9actif",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "POS",\n                "displayName": "Positif",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "QCF",\n                "displayName": "R\xe9sultat non valide - Probl\xe8me de qualit\xe9 du contr\xf4le",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "R",\n                "displayName": "R\xe9sistant",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "RR",\n                "displayName": "R\xe9actif",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "S",\n                "displayName": "Sensible",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "U",\n                "displayName": "Augmentation significative par rapport au r\xe9sultat ant\xe9rieur",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "VS",\n                "displayName": "Tr\xe8s sensible",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              },\n              {\n                "code": "W",\n                "displayName": "D\xe9gradation",\n                "codeSystem": "2.16.840.1.113883.5.83",\n                "level": "0",\n                "type": "L"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n}')
        },
        660338: (e, n, t) => {
            t.d(n, {
                F: () => a,
                m: () => l
            });
            const l = e => !(null === e || void 0 === e || !e.cluster),
                a = e => !(null === e || void 0 === e || !e.battery)
        },
        621526: (e, n, t) => {
            t.d(n, {
                DE: () => a,
                HN: () => u,
                Ko: () => d,
                NN: () => o,
                Ng: () => f,
                O3: () => c,
                U9: () => l,
                bN: () => y,
                bW: () => r,
                bw: () => s,
                f8: () => S,
                hp: () => N,
                iX: () => i,
                j$: () => b,
                lT: () => p,
                lh: () => g,
                m2: () => _,
                md: () => v,
                tC: () => h,
                uZ: () => m
            });
            const l = e => !(null === e || void 0 === e || !e.observation),
                a = e => !(null === e || void 0 === e || !e.act),
                r = e => {
                    var n;
                    return "SUBJ" === (null === e || void 0 === e || null === (n = e.entryRelationship) || void 0 === n ? void 0 : n._typeCode)
                },
                o = e => "PQ" === e._type || "c:PQ" === e._type,
                i = e => ("IVL_PQ" === e._type || "c:IVL_PQ" === e._type) && !!e.low,
                s = e => ("IVL_PQ" === e._type || "c:IVL_PQ" === e._type) && !!e.high,
                c = e => "CD" === e._type || "c:CD" === e._type,
                u = e => "REAL" === e._type || "c:REAL" === e._type,
                d = e => "ED" === e._type || "c:ED" === e._type,
                m = e => ("IVL_TS" === e._type || "c:IVL_TS" === e._type) && !!e.low,
                p = e => ("IVL_TS" === e._type || "c:IVL_TS" === e._type) && !!e.high,
                y = e => "TS" === e._type || "c:TS" === e._type,
                v = e => "BL" === e._type || "c:BL" === e._type,
                h = e => "INT" === e._type || "c:INT" === e._type,
                g = e => "ST" === e._type || "c:ST" === e._type,
                _ = e => "CE" === e._type || "c:CE" === e._type,
                f = e => ("IVL_REAL" === e._type || "c:IVL_REAL" === e._type) && !!e.low,
                b = e => ("IVL_REAL" === e._type || "c:IVL_REAL" === e._type) && !!e.high,
                S = e => !!e.low,
                N = e => !!e.high
        },
        382091: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var l = t(785893);
            const a = e => {
                let {
                    documentHtml: n
                } = e;
                return (0, l.jsx)("iframe", {
                    srcDoc: n,
                    title: "CdaR2-iframe",
                    allow: "fullscreen",
                    className: "dl-border-none dl-card dl-margin-y-8",
                    height: "90%",
                    width: "100%"
                })
            }
        },
        476049: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var l = t(785893),
                a = t(184481),
                r = t(445884),
                o = t(621634),
                i = t(541584),
                s = t(298203);
            const c = e => {
                let {
                    url: n
                } = e;
                const {
                    abortController: t
                } = (0, s.Z)(), [c, u] = (0, a.useState)();
                return (0, a.useEffect)((() => {
                    (0, i.qk)(n).then((e => {
                        var n;
                        return (null === t || void 0 === t || null === (n = t.signal) || void 0 === n ? void 0 : n.aborted) || u(e)
                    }))
                }), [n, t.signal]), (0, l.jsx)(o.Z, {
                    label: r.Z.t("doctor_common.document_signature.qes_tag_signed_by", {
                        signer: c
                    }),
                    size: "medium"
                })
            }
        },
        105419: () => {}
    }
]);
//# sourceMappingURL=../56031-108ac0c952c150a227d9.js.map