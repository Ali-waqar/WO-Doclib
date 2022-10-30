"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [35966], {
        835966: (t, e, o) => {
            o.d(e, {
                Z: () => m
            });
            var r = o(570655),
                n = o(934755),
                i = o(27366),
                s = o(946013),
                a = o(435941),
                u = o(874087),
                c = o(98418),
                f = o(239135),
                h = o(509958),
                d = o(209874),
                p = o(451441),
                g = o(174634),
                l = o(951071),
                v = o(126789),
                y = o(752717);
            const m = function() {
                function t(t, e, o) {
                    var r = this;
                    if (this.defaultWordBreaks = [" "], this.computePages = function() {
                            var t = [];
                            return r.catalog.Pages().traverse((function(e, o) {
                                if (e instanceof h.Eg) {
                                    var n = r.pageMap.get(e);
                                    n || (n = u.Z.of(e, o, r), r.pageMap.set(e, n)), t.push(n)
                                }
                            })), t
                        }, this.getOrCreateForm = function() {
                            var t = r.catalog.getOrCreateAcroForm();
                            return c.Z.of(t, r)
                        }, (0, p.ku)(t, "context", [
                            [h.o6, "PDFContext"]
                        ]), (0, p.ku)(e, "ignoreEncryption", ["boolean"]), this.context = t, this.catalog = t.lookup(t.trailerInfo.Root), this.isEncrypted = !!t.lookup(t.trailerInfo.Encrypt), this.pageCache = p.Ct.populatedBy(this.computePages), this.pageMap = new Map, this.formCache = p.Ct.populatedBy(this.getOrCreateForm), this.fonts = [], this.images = [], this.embeddedPages = [], this.embeddedFiles = [], this.javaScripts = [], !e && this.isEncrypted) throw new n.ip;
                    o && this.updateInfoDict()
                }
                return t.load = function(e, o) {
                    return void 0 === o && (o = {}), (0, r.mG)(this, void 0, void 0, (function() {
                        var n, i, s, a, u, c, f, g, l, v, y;
                        return (0, r.Jh)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = o.ignoreEncryption, i = void 0 !== n && n, s = o.parseSpeed, a = void 0 === s ? d.u.Slow : s, u = o.throwOnInvalidObject, c = void 0 !== u && u, f = o.updateMetadata, g = void 0 === f || f, l = o.capNumbers, v = void 0 !== l && l, (0, p.ku)(e, "pdf", ["string", Uint8Array, ArrayBuffer]), (0, p.ku)(i, "ignoreEncryption", ["boolean"]), (0, p.ku)(a, "parseSpeed", ["number"]), (0, p.ku)(c, "throwOnInvalidObject", ["boolean"]), y = (0, p._f)(e), [4, h.h9.forBytesWithOptions(y, a, c, v).parseDocument()];
                                case 1:
                                    return [2, new t(r.sent(), i, g)]
                            }
                        }))
                    }))
                }, t.create = function(e) {
                    return void 0 === e && (e = {}), (0, r.mG)(this, void 0, void 0, (function() {
                        var o, n, i, s, a, u;
                        return (0, r.Jh)(this, (function(r) {
                            return o = e.updateMetadata, n = void 0 === o || o, i = h.o6.create(), s = h.N8.withContext(i), a = i.register(s), u = h.lR.withContextAndPages(i, a), i.trailerInfo.Root = i.register(u), [2, new t(i, !1, n)]
                        }))
                    }))
                }, t.prototype.registerFontkit = function(t) {
                    this.fontkit = t
                }, t.prototype.getForm = function() {
                    var t = this.formCache.access();
                    return t.hasXFA() && (console.warn("Removing XFA form data as pdf-lib does not support reading or writing XFA"), t.deleteXFA()), t
                }, t.prototype.getTitle = function() {
                    var t = this.getInfoDict().lookup(h.wQ.Title);
                    if (t) return b(t), t.decodeText()
                }, t.prototype.getAuthor = function() {
                    var t = this.getInfoDict().lookup(h.wQ.Author);
                    if (t) return b(t), t.decodeText()
                }, t.prototype.getSubject = function() {
                    var t = this.getInfoDict().lookup(h.wQ.Subject);
                    if (t) return b(t), t.decodeText()
                }, t.prototype.getKeywords = function() {
                    var t = this.getInfoDict().lookup(h.wQ.Keywords);
                    if (t) return b(t), t.decodeText()
                }, t.prototype.getCreator = function() {
                    var t = this.getInfoDict().lookup(h.wQ.Creator);
                    if (t) return b(t), t.decodeText()
                }, t.prototype.getProducer = function() {
                    var t = this.getInfoDict().lookup(h.wQ.Producer);
                    if (t) return b(t), t.decodeText()
                }, t.prototype.getCreationDate = function() {
                    var t = this.getInfoDict().lookup(h.wQ.CreationDate);
                    if (t) return b(t), t.decodeDate()
                }, t.prototype.getModificationDate = function() {
                    var t = this.getInfoDict().lookup(h.wQ.ModDate);
                    if (t) return b(t), t.decodeDate()
                }, t.prototype.setTitle = function(t, e) {
                    (0, p.ku)(t, "title", ["string"]);
                    var o = h.wQ.of("Title");
                    (this.getInfoDict().set(o, h.Ij.fromText(t)), null === e || void 0 === e ? void 0 : e.showInWindowTitleBar) && this.catalog.getOrCreateViewerPreferences().setDisplayDocTitle(!0)
                }, t.prototype.setAuthor = function(t) {
                    (0, p.ku)(t, "author", ["string"]);
                    var e = h.wQ.of("Author");
                    this.getInfoDict().set(e, h.Ij.fromText(t))
                }, t.prototype.setSubject = function(t) {
                    (0, p.ku)(t, "author", ["string"]);
                    var e = h.wQ.of("Subject");
                    this.getInfoDict().set(e, h.Ij.fromText(t))
                }, t.prototype.setKeywords = function(t) {
                    (0, p.ku)(t, "keywords", [Array]);
                    var e = h.wQ.of("Keywords");
                    this.getInfoDict().set(e, h.Ij.fromText(t.join(" ")))
                }, t.prototype.setCreator = function(t) {
                    (0, p.ku)(t, "creator", ["string"]);
                    var e = h.wQ.of("Creator");
                    this.getInfoDict().set(e, h.Ij.fromText(t))
                }, t.prototype.setProducer = function(t) {
                    (0, p.ku)(t, "creator", ["string"]);
                    var e = h.wQ.of("Producer");
                    this.getInfoDict().set(e, h.Ij.fromText(t))
                }, t.prototype.setLanguage = function(t) {
                    (0, p.ku)(t, "language", ["string"]);
                    var e = h.wQ.of("Lang");
                    this.catalog.set(e, h.u2.of(t))
                }, t.prototype.setCreationDate = function(t) {
                    (0, p.ku)(t, "creationDate", [
                        [Date, "Date"]
                    ]);
                    var e = h.wQ.of("CreationDate");
                    this.getInfoDict().set(e, h.u2.fromDate(t))
                }, t.prototype.setModificationDate = function(t) {
                    (0, p.ku)(t, "modificationDate", [
                        [Date, "Date"]
                    ]);
                    var e = h.wQ.of("ModDate");
                    this.getInfoDict().set(e, h.u2.fromDate(t))
                }, t.prototype.getPageCount = function() {
                    return void 0 === this.pageCount && (this.pageCount = this.getPages().length), this.pageCount
                }, t.prototype.getPages = function() {
                    return this.pageCache.access()
                }, t.prototype.getPage = function(t) {
                    var e = this.getPages();
                    return (0, p.gI)(t, "index", 0, e.length - 1), e[t]
                }, t.prototype.getPageIndices = function() {
                    return (0, p.w6)(0, this.getPageCount())
                }, t.prototype.removePage = function(t) {
                    var e = this.getPageCount();
                    if (0 === this.pageCount) throw new n.jw;
                    (0, p.gI)(t, "index", 0, e - 1), this.catalog.removeLeafNode(t), this.pageCount = e - 1
                }, t.prototype.addPage = function(t) {
                    return (0, p.ku)(t, "page", ["undefined", [u.Z, "PDFPage"], Array]), this.insertPage(this.getPageCount(), t)
                }, t.prototype.insertPage = function(t, e) {
                    var o = this.getPageCount();
                    if ((0, p.gI)(t, "index", 0, o), (0, p.ku)(e, "page", ["undefined", [u.Z, "PDFPage"], Array]), !e || Array.isArray(e)) {
                        var r = Array.isArray(e) ? e : f.b.A4;
                        (e = u.Z.create(this)).setSize.apply(e, r)
                    } else if (e.doc !== this) throw new n.Nl;
                    var i = this.catalog.insertLeafNode(e.ref, t);
                    return e.node.setParent(i), this.pageMap.set(e.node, e), this.pageCache.invalidate(), this.pageCount = o + 1, e
                }, t.prototype.copyPages = function(e, o) {
                    return (0, r.mG)(this, void 0, void 0, (function() {
                        var n, i, s, a, c, f, d, g;
                        return (0, r.Jh)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return (0, p.ku)(e, "srcDoc", [
                                        [t, "PDFDocument"]
                                    ]), (0, p.ku)(o, "indices", [Array]), [4, e.flush()];
                                case 1:
                                    for (r.sent(), n = h.Wy.for(e.context, this.context), i = e.getPages(), s = new Array(o.length), a = 0, c = o.length; a < c; a++) f = i[o[a]], d = n.copy(f.node), g = this.context.register(d), s[a] = u.Z.of(d, g, this);
                                    return [2, s]
                            }
                        }))
                    }))
                }, t.prototype.copy = function() {
                    return (0, r.mG)(this, void 0, void 0, (function() {
                        var e, o, n, i;
                        return (0, r.Jh)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, t.create()];
                                case 1:
                                    return [4, (e = r.sent()).copyPages(this, this.getPageIndices())];
                                case 2:
                                    for (o = r.sent(), n = 0, i = o.length; n < i; n++) e.addPage(o[n]);
                                    return void 0 !== this.getAuthor() && e.setAuthor(this.getAuthor()), void 0 !== this.getCreationDate() && e.setCreationDate(this.getCreationDate()), void 0 !== this.getCreator() && e.setCreator(this.getCreator()), void 0 !== this.getModificationDate() && e.setModificationDate(this.getModificationDate()), void 0 !== this.getProducer() && e.setProducer(this.getProducer()), void 0 !== this.getSubject() && e.setSubject(this.getSubject()), void 0 !== this.getTitle() && e.setTitle(this.getTitle()), e.defaultWordBreaks = this.defaultWordBreaks, [2, e]
                            }
                        }))
                    }))
                }, t.prototype.addJavaScript = function(t, e) {
                    (0, p.ku)(t, "name", ["string"]), (0, p.ku)(e, "script", ["string"]);
                    var o = y.Z.for(e, t),
                        r = this.context.nextRef(),
                        n = v.Z.of(r, this, o);
                    this.javaScripts.push(n)
                }, t.prototype.attach = function(t, e, o) {
                    return void 0 === o && (o = {}), (0, r.mG)(this, void 0, void 0, (function() {
                        var n, i, s, a;
                        return (0, r.Jh)(this, (function(r) {
                            return (0, p.ku)(t, "attachment", ["string", Uint8Array, ArrayBuffer]), (0, p.ku)(e, "name", ["string"]), (0, p.MU)(o.mimeType, "mimeType", ["string"]), (0, p.MU)(o.description, "description", ["string"]), (0, p.MU)(o.creationDate, "options.creationDate", [Date]), (0, p.MU)(o.modificationDate, "options.modificationDate", [Date]), (0, p.GT)(o.afRelationship, "options.afRelationship", g.J), n = (0, p._f)(t), i = g.Z.for(n, e, o), s = this.context.nextRef(), a = l.Z.of(s, this, i), this.embeddedFiles.push(a), [2]
                        }))
                    }))
                }, t.prototype.embedFont = function(t, e) {
                    return void 0 === e && (e = {}), (0, r.mG)(this, void 0, void 0, (function() {
                        var o, n, i, a, u, c, f, d, g, l;
                        return (0, r.Jh)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return o = e.subset, n = void 0 !== o && o, i = e.customName, a = e.features, (0, p.ku)(t, "font", ["string", Uint8Array, ArrayBuffer]), (0, p.ku)(n, "subset", ["boolean"]), (0, p.Cl)(t) ? (u = h.IL.for(t, i), [3, 7]) : [3, 1];
                                case 1:
                                    return (0, p.TE)(t) ? (c = (0, p._f)(t), f = this.assertFontkit(), n ? [4, h.zO.for(f, c, i, a)] : [3, 3]) : [3, 6];
                                case 2:
                                    return d = r.sent(), [3, 5];
                                case 3:
                                    return [4, h.Wz.for(f, c, i, a)];
                                case 4:
                                    d = r.sent(), r.label = 5;
                                case 5:
                                    return u = d, [3, 7];
                                case 6:
                                    throw new TypeError("`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`");
                                case 7:
                                    return g = this.context.nextRef(), l = s.Z.of(g, this, u), this.fonts.push(l), [2, l]
                            }
                        }))
                    }))
                }, t.prototype.embedStandardFont = function(t, e) {
                    if ((0, p.ku)(t, "font", ["string"]), !(0, p.Cl)(t)) throw new TypeError("`font` must be one of type `StandardFonts`");
                    var o = h.IL.for(t, e),
                        r = this.context.nextRef(),
                        n = s.Z.of(r, this, o);
                    return this.fonts.push(n), n
                }, t.prototype.embedJpg = function(t) {
                    return (0, r.mG)(this, void 0, void 0, (function() {
                        var e, o, n, i;
                        return (0, r.Jh)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return (0, p.ku)(t, "jpg", ["string", Uint8Array, ArrayBuffer]), e = (0, p._f)(t), [4, h.sm.for(e)];
                                case 1:
                                    return o = r.sent(), n = this.context.nextRef(), i = a.Z.of(n, this, o), this.images.push(i), [2, i]
                            }
                        }))
                    }))
                }, t.prototype.embedPng = function(t) {
                    return (0, r.mG)(this, void 0, void 0, (function() {
                        var e, o, n, i;
                        return (0, r.Jh)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return (0, p.ku)(t, "png", ["string", Uint8Array, ArrayBuffer]), e = (0, p._f)(t), [4, h.Le.for(e)];
                                case 1:
                                    return o = r.sent(), n = this.context.nextRef(), i = a.Z.of(n, this, o), this.images.push(i), [2, i]
                            }
                        }))
                    }))
                }, t.prototype.embedPdf = function(e, o) {
                    return void 0 === o && (o = [0]), (0, r.mG)(this, void 0, void 0, (function() {
                        var n, i, s;
                        return (0, r.Jh)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return (0, p.ku)(e, "pdf", ["string", Uint8Array, ArrayBuffer, [t, "PDFDocument"]]), (0, p.ku)(o, "indices", [Array]), e instanceof t ? (i = e, [3, 3]) : [3, 1];
                                case 1:
                                    return [4, t.load(e)];
                                case 2:
                                    i = r.sent(), r.label = 3;
                                case 3:
                                    return n = i, s = (0, p.Jp)(n.getPages(), o), [2, this.embedPages(s)]
                            }
                        }))
                    }))
                }, t.prototype.embedPage = function(t, e, o) {
                    return (0, r.mG)(this, void 0, void 0, (function() {
                        return (0, r.Jh)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return (0, p.ku)(t, "page", [
                                        [u.Z, "PDFPage"]
                                    ]), [4, this.embedPages([t], [e], [o])];
                                case 1:
                                    return [2, r.sent()[0]]
                            }
                        }))
                    }))
                }, t.prototype.embedPages = function(t, e, o) {
                    return void 0 === e && (e = []), void 0 === o && (o = []), (0, r.mG)(this, void 0, void 0, (function() {
                        var n, s, a, u, c, f, d, p, g, l, v, y, m;
                        return (0, r.Jh)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    if (0 === t.length) return [2, []];
                                    for (f = 0, d = t.length - 1; f < d; f++)
                                        if (n = t[f], s = t[f + 1], n.node.context !== s.node.context) throw new h.qX;
                                    a = t[0].node.context, u = a === this.context ? function(t) {
                                        return t
                                    } : h.Wy.for(a, this.context).copy, c = new Array(t.length), f = 0, d = t.length, r.label = 1;
                                case 1:
                                    return f < d ? (p = u(t[f].node), g = e[f], l = o[f], [4, h.dS.for(p, g, l)]) : [3, 4];
                                case 2:
                                    v = r.sent(), y = this.context.nextRef(), c[f] = i.Z.of(y, this, v), r.label = 3;
                                case 3:
                                    return f++, [3, 1];
                                case 4:
                                    return (m = this.embeddedPages).push.apply(m, c), [2, c]
                            }
                        }))
                    }))
                }, t.prototype.flush = function() {
                    return (0, r.mG)(this, void 0, void 0, (function() {
                        return (0, r.Jh)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.embedAll(this.fonts)];
                                case 1:
                                    return t.sent(), [4, this.embedAll(this.images)];
                                case 2:
                                    return t.sent(), [4, this.embedAll(this.embeddedPages)];
                                case 3:
                                    return t.sent(), [4, this.embedAll(this.embeddedFiles)];
                                case 4:
                                    return t.sent(), [4, this.embedAll(this.javaScripts)];
                                case 5:
                                    return t.sent(), [2]
                            }
                        }))
                    }))
                }, t.prototype.save = function(t) {
                    return void 0 === t && (t = {}), (0, r.mG)(this, void 0, void 0, (function() {
                        var e, o, n, i, s, a, u, c, f;
                        return (0, r.Jh)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return e = t.useObjectStreams, o = void 0 === e || e, n = t.addDefaultPage, i = void 0 === n || n, s = t.objectsPerTick, a = void 0 === s ? 50 : s, u = t.updateFieldAppearances, c = void 0 === u || u, (0, p.ku)(o, "useObjectStreams", ["boolean"]), (0, p.ku)(i, "addDefaultPage", ["boolean"]), (0, p.ku)(a, "objectsPerTick", ["number"]), (0, p.ku)(c, "updateFieldAppearances", ["boolean"]), i && 0 === this.getPageCount() && this.addPage(), c && (f = this.formCache.getValue()) && f.updateFieldAppearances(), [4, this.flush()];
                                case 1:
                                    return r.sent(), [2, (o ? h.pV : h.Bn).forContext(this.context, a).serializeToBuffer()]
                            }
                        }))
                    }))
                }, t.prototype.saveAsBase64 = function(t) {
                    return void 0 === t && (t = {}), (0, r.mG)(this, void 0, void 0, (function() {
                        var e, o, n, i, s;
                        return (0, r.Jh)(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return e = t.dataUri, o = void 0 !== e && e, n = (0, r._T)(t, ["dataUri"]), (0, p.ku)(o, "dataUri", ["boolean"]), [4, this.save(n)];
                                case 1:
                                    return i = a.sent(), s = (0, p.Eo)(i), [2, o ? "data:application/pdf;base64," + s : s]
                            }
                        }))
                    }))
                }, t.prototype.findPageForAnnotationRef = function(t) {
                    for (var e = this.getPages(), o = 0, r = e.length; o < r; o++) {
                        var n = e[o],
                            i = n.node.Annots();
                        if (void 0 !== (null === i || void 0 === i ? void 0 : i.indexOf(t))) return n
                    }
                }, t.prototype.embedAll = function(t) {
                    return (0, r.mG)(this, void 0, void 0, (function() {
                        var e, o;
                        return (0, r.Jh)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    e = 0, o = t.length, r.label = 1;
                                case 1:
                                    return e < o ? [4, t[e].embed()] : [3, 4];
                                case 2:
                                    r.sent(), r.label = 3;
                                case 3:
                                    return e++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, t.prototype.updateInfoDict = function() {
                    var t = "pdf-lib (https://github.com/Hopding/pdf-lib)",
                        e = new Date,
                        o = this.getInfoDict();
                    this.setProducer(t), this.setModificationDate(e), o.get(h.wQ.of("Creator")) || this.setCreator(t), o.get(h.wQ.of("CreationDate")) || this.setCreationDate(e)
                }, t.prototype.getInfoDict = function() {
                    var t = this.context.lookup(this.context.trailerInfo.Info);
                    if (t instanceof h.mh) return t;
                    var e = this.context.obj({});
                    return this.context.trailerInfo.Info = this.context.register(e), e
                }, t.prototype.assertFontkit = function() {
                    if (!this.fontkit) throw new n.I3;
                    return this.fontkit
                }, t
            }();

            function b(t) {
                if (!(t instanceof h.Ij) && !(t instanceof h.u2)) throw new h.VX([h.Ij, h.u2], t)
            }
        }
    }
]);
//# sourceMappingURL=35966-b6a75c61c36051dd06d1.js.map