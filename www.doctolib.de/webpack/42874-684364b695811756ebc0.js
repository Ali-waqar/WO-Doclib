(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [42874], {
        209874: (t, e, o) => {
            "use strict";
            var n;
            o.d(e, {
                    u: () => n
                }),
                function(t) {
                    t[t.Fastest = 1 / 0] = "Fastest", t[t.Fast = 1500] = "Fast", t[t.Medium = 500] = "Medium", t[t.Slow = 100] = "Slow"
                }(n || (n = {}))
        },
        27366: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => a
            });
            var n = o(570655),
                r = o(835966),
                i = o(509958),
                s = o(451441);
            const a = function() {
                function t(t, e, o) {
                    this.alreadyEmbedded = !1, (0, s.ku)(t, "ref", [
                        [i.$F, "PDFRef"]
                    ]), (0, s.ku)(e, "doc", [
                        [r.Z, "PDFDocument"]
                    ]), (0, s.ku)(o, "embedder", [
                        [i.dS, "PDFPageEmbedder"]
                    ]), this.ref = t, this.doc = e, this.width = o.width, this.height = o.height, this.embedder = o
                }
                return t.prototype.scale = function(t) {
                    return (0, s.ku)(t, "factor", ["number"]), {
                        width: this.width * t,
                        height: this.height * t
                    }
                }, t.prototype.size = function() {
                    return this.scale(1)
                }, t.prototype.embed = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        return (0, n.Jh)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.alreadyEmbedded ? [3, 2] : [4, this.embedder.embedIntoContext(this.doc.context, this.ref)];
                                case 1:
                                    t.sent(), this.alreadyEmbedded = !0, t.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    }))
                }, t.of = function(e, o, n) {
                    return new t(e, o, n)
                }, t
            }()
        },
        946013: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => a
            });
            var n = o(570655),
                r = o(835966),
                i = o(509958),
                s = o(451441);
            const a = function() {
                function t(t, e, o) {
                    this.modified = !0, (0, s.ku)(t, "ref", [
                        [i.$F, "PDFRef"]
                    ]), (0, s.ku)(e, "doc", [
                        [r.Z, "PDFDocument"]
                    ]), (0, s.ku)(o, "embedder", [
                        [i.Wz, "CustomFontEmbedder"],
                        [i.IL, "StandardFontEmbedder"]
                    ]), this.ref = t, this.doc = e, this.name = o.fontName, this.embedder = o
                }
                return t.prototype.encodeText = function(t) {
                    return (0, s.ku)(t, "text", ["string"]), this.modified = !0, this.embedder.encodeText(t)
                }, t.prototype.widthOfTextAtSize = function(t, e) {
                    return (0, s.ku)(t, "text", ["string"]), (0, s.ku)(e, "size", ["number"]), this.embedder.widthOfTextAtSize(t, e)
                }, t.prototype.heightAtSize = function(t, e) {
                    var o;
                    return (0, s.ku)(t, "size", ["number"]), (0, s.MU)(null === e || void 0 === e ? void 0 : e.descender, "options.descender", ["boolean"]), this.embedder.heightOfFontAtSize(t, {
                        descender: null === (o = null === e || void 0 === e ? void 0 : e.descender) || void 0 === o || o
                    })
                }, t.prototype.sizeAtHeight = function(t) {
                    return (0, s.ku)(t, "height", ["number"]), this.embedder.sizeOfFontAtHeight(t)
                }, t.prototype.getCharacterSet = function() {
                    return this.embedder instanceof i.IL ? this.embedder.encoding.supportedCodePoints : this.embedder.font.characterSet
                }, t.prototype.embed = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        return (0, n.Jh)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.modified ? [4, this.embedder.embedIntoContext(this.doc.context, this.ref)] : [3, 2];
                                case 1:
                                    t.sent(), this.modified = !1, t.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    }))
                }, t.of = function(e, o, n) {
                    return new t(e, o, n)
                }, t
            }()
        },
        435941: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => a
            });
            var n = o(570655),
                r = o(835966),
                i = o(509958),
                s = o(451441);
            const a = function() {
                function t(t, e, o) {
                    (0, s.ku)(t, "ref", [
                        [i.$F, "PDFRef"]
                    ]), (0, s.ku)(e, "doc", [
                        [r.Z, "PDFDocument"]
                    ]), (0, s.ku)(o, "embedder", [
                        [i.sm, "JpegEmbedder"],
                        [i.Le, "PngEmbedder"]
                    ]), this.ref = t, this.doc = e, this.width = o.width, this.height = o.height, this.embedder = o
                }
                return t.prototype.scale = function(t) {
                    return (0, s.ku)(t, "factor", ["number"]), {
                        width: this.width * t,
                        height: this.height * t
                    }
                }, t.prototype.scaleToFit = function(t, e) {
                    (0, s.ku)(t, "width", ["number"]), (0, s.ku)(e, "height", ["number"]);
                    var o = t / this.width,
                        n = e / this.height,
                        r = Math.min(o, n);
                    return this.scale(r)
                }, t.prototype.size = function() {
                    return this.scale(1)
                }, t.prototype.embed = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var t, e, o;
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.embedder ? (this.embedTask || (e = (t = this).doc, o = t.ref, this.embedTask = this.embedder.embedIntoContext(e.context, o)), [4, this.embedTask]) : [2];
                                case 1:
                                    return n.sent(), this.embedder = void 0, [2]
                            }
                        }))
                    }))
                }, t.of = function(e, o, n) {
                    return new t(e, o, n)
                }, t
            }()
        },
        126789: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => i
            });
            var n = o(570655),
                r = o(509958);
            const i = function() {
                function t(t, e, o) {
                    this.alreadyEmbedded = !1, this.ref = t, this.doc = e, this.embedder = o
                }
                return t.prototype.embed = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var t, e, o, i, s, a, u;
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.alreadyEmbedded ? [3, 2] : (t = this.doc, e = t.catalog, o = t.context, [4, this.embedder.embedIntoContext(this.doc.context, this.ref)]);
                                case 1:
                                    i = n.sent(), e.has(r.wQ.of("Names")) || e.set(r.wQ.of("Names"), o.obj({})), (s = e.lookup(r.wQ.of("Names"), r.mh)).has(r.wQ.of("JavaScript")) || s.set(r.wQ.of("JavaScript"), o.obj({})), (a = s.lookup(r.wQ.of("JavaScript"), r.mh)).has(r.wQ.of("Names")) || a.set(r.wQ.of("Names"), o.obj([])), (u = a.lookup(r.wQ.of("Names"), r.Gr)).push(r.Ij.fromText(this.embedder.scriptName)), u.push(i), this.alreadyEmbedded = !0, n.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    }))
                }, t.of = function(e, o, n) {
                    return new t(e, o, n)
                }, t
            }()
        },
        874087: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => g
            });
            var n = o(570655),
                r = o(80985),
                i = o(981806),
                s = o(350486),
                a = o(835966),
                u = o(27366),
                c = o(946013),
                l = o(435941),
                d = o(467531),
                h = o(115733),
                f = o(945893),
                p = o(509958),
                v = o(451441);
            const g = function() {
                function t(t, e, o) {
                    this.fontSize = 24, this.fontColor = (0, r.B8)(0, 0, 0), this.lineHeight = 24, this.x = 0, this.y = 0, (0, v.ku)(t, "leafNode", [
                        [p.Eg, "PDFPageLeaf"]
                    ]), (0, v.ku)(e, "ref", [
                        [p.$F, "PDFRef"]
                    ]), (0, v.ku)(o, "doc", [
                        [a.Z, "PDFDocument"]
                    ]), this.node = t, this.ref = e, this.doc = o
                }
                return t.prototype.setRotation = function(t) {
                    var e = (0, h.Ux)(t);
                    (0, v.m_)(e, "degreesAngle", 90), this.node.set(p.wQ.of("Rotate"), this.doc.context.obj(e))
                }, t.prototype.getRotation = function() {
                    var t = this.node.Rotate();
                    return (0, h.RW)(t ? t.asNumber() : 0)
                }, t.prototype.setSize = function(t, e) {
                    (0, v.ku)(t, "width", ["number"]), (0, v.ku)(e, "height", ["number"]);
                    var o = this.getMediaBox();
                    this.setMediaBox(o.x, o.y, t, e);
                    var n = this.getCropBox(),
                        r = this.getBleedBox(),
                        i = this.getTrimBox(),
                        s = this.getArtBox(),
                        a = this.node.CropBox(),
                        u = this.node.BleedBox(),
                        c = this.node.TrimBox(),
                        l = this.node.ArtBox();
                    a && (0, v.EO)(n, o) && this.setCropBox(o.x, o.y, t, e), u && (0, v.EO)(r, o) && this.setBleedBox(o.x, o.y, t, e), c && (0, v.EO)(i, o) && this.setTrimBox(o.x, o.y, t, e), l && (0, v.EO)(s, o) && this.setArtBox(o.x, o.y, t, e)
                }, t.prototype.setWidth = function(t) {
                    (0, v.ku)(t, "width", ["number"]), this.setSize(t, this.getSize().height)
                }, t.prototype.setHeight = function(t) {
                    (0, v.ku)(t, "height", ["number"]), this.setSize(this.getSize().width, t)
                }, t.prototype.setMediaBox = function(t, e, o, n) {
                    (0, v.ku)(t, "x", ["number"]), (0, v.ku)(e, "y", ["number"]), (0, v.ku)(o, "width", ["number"]), (0, v.ku)(n, "height", ["number"]);
                    var r = this.doc.context.obj([t, e, t + o, e + n]);
                    this.node.set(p.wQ.MediaBox, r)
                }, t.prototype.setCropBox = function(t, e, o, n) {
                    (0, v.ku)(t, "x", ["number"]), (0, v.ku)(e, "y", ["number"]), (0, v.ku)(o, "width", ["number"]), (0, v.ku)(n, "height", ["number"]);
                    var r = this.doc.context.obj([t, e, t + o, e + n]);
                    this.node.set(p.wQ.CropBox, r)
                }, t.prototype.setBleedBox = function(t, e, o, n) {
                    (0, v.ku)(t, "x", ["number"]), (0, v.ku)(e, "y", ["number"]), (0, v.ku)(o, "width", ["number"]), (0, v.ku)(n, "height", ["number"]);
                    var r = this.doc.context.obj([t, e, t + o, e + n]);
                    this.node.set(p.wQ.BleedBox, r)
                }, t.prototype.setTrimBox = function(t, e, o, n) {
                    (0, v.ku)(t, "x", ["number"]), (0, v.ku)(e, "y", ["number"]), (0, v.ku)(o, "width", ["number"]), (0, v.ku)(n, "height", ["number"]);
                    var r = this.doc.context.obj([t, e, t + o, e + n]);
                    this.node.set(p.wQ.TrimBox, r)
                }, t.prototype.setArtBox = function(t, e, o, n) {
                    (0, v.ku)(t, "x", ["number"]), (0, v.ku)(e, "y", ["number"]), (0, v.ku)(o, "width", ["number"]), (0, v.ku)(n, "height", ["number"]);
                    var r = this.doc.context.obj([t, e, t + o, e + n]);
                    this.node.set(p.wQ.ArtBox, r)
                }, t.prototype.getSize = function() {
                    var t = this.getMediaBox();
                    return {
                        width: t.width,
                        height: t.height
                    }
                }, t.prototype.getWidth = function() {
                    return this.getSize().width
                }, t.prototype.getHeight = function() {
                    return this.getSize().height
                }, t.prototype.getMediaBox = function() {
                    return this.node.MediaBox().asRectangle()
                }, t.prototype.getCropBox = function() {
                    var t, e = this.node.CropBox();
                    return null !== (t = null === e || void 0 === e ? void 0 : e.asRectangle()) && void 0 !== t ? t : this.getMediaBox()
                }, t.prototype.getBleedBox = function() {
                    var t, e = this.node.BleedBox();
                    return null !== (t = null === e || void 0 === e ? void 0 : e.asRectangle()) && void 0 !== t ? t : this.getCropBox()
                }, t.prototype.getTrimBox = function() {
                    var t, e = this.node.TrimBox();
                    return null !== (t = null === e || void 0 === e ? void 0 : e.asRectangle()) && void 0 !== t ? t : this.getCropBox()
                }, t.prototype.getArtBox = function() {
                    var t, e = this.node.ArtBox();
                    return null !== (t = null === e || void 0 === e ? void 0 : e.asRectangle()) && void 0 !== t ? t : this.getCropBox()
                }, t.prototype.translateContent = function(t, e) {
                    (0, v.ku)(t, "x", ["number"]), (0, v.ku)(e, "y", ["number"]), this.node.normalize(), this.getContentStream();
                    var o = this.createContentStream((0, s.bo)(), (0, s.Iu)(t, e)),
                        n = this.doc.context.register(o),
                        r = this.createContentStream((0, s.Pq)()),
                        i = this.doc.context.register(r);
                    this.node.wrapContentStreams(n, i)
                }, t.prototype.scale = function(t, e) {
                    (0, v.ku)(t, "x", ["number"]), (0, v.ku)(e, "y", ["number"]), this.setSize(this.getWidth() * t, this.getHeight() * e), this.scaleContent(t, e), this.scaleAnnotations(t, e)
                }, t.prototype.scaleContent = function(t, e) {
                    (0, v.ku)(t, "x", ["number"]), (0, v.ku)(e, "y", ["number"]), this.node.normalize(), this.getContentStream();
                    var o = this.createContentStream((0, s.bo)(), (0, s.bA)(t, e)),
                        n = this.doc.context.register(o),
                        r = this.createContentStream((0, s.Pq)()),
                        i = this.doc.context.register(r);
                    this.node.wrapContentStreams(n, i)
                }, t.prototype.scaleAnnotations = function(t, e) {
                    (0, v.ku)(t, "x", ["number"]), (0, v.ku)(e, "y", ["number"]);
                    var o = this.node.Annots();
                    if (o)
                        for (var n = 0; n < o.size(); n++) {
                            var r = o.lookup(n);
                            r instanceof p.mh && this.scaleAnnot(r, t, e)
                        }
                }, t.prototype.resetPosition = function() {
                    this.getContentStream(!1), this.x = 0, this.y = 0
                }, t.prototype.setFont = function(t) {
                    (0, v.ku)(t, "font", [
                        [c.Z, "PDFFont"]
                    ]), this.font = t, this.fontKey = this.node.newFontDictionary(this.font.name, this.font.ref)
                }, t.prototype.setFontSize = function(t) {
                    (0, v.ku)(t, "fontSize", ["number"]), this.fontSize = t
                }, t.prototype.setFontColor = function(t) {
                    (0, v.ku)(t, "fontColor", [
                        [Object, "Color"]
                    ]), this.fontColor = t
                }, t.prototype.setLineHeight = function(t) {
                    (0, v.ku)(t, "lineHeight", ["number"]), this.lineHeight = t
                }, t.prototype.getPosition = function() {
                    return {
                        x: this.x,
                        y: this.y
                    }
                }, t.prototype.getX = function() {
                    return this.x
                }, t.prototype.getY = function() {
                    return this.y
                }, t.prototype.moveTo = function(t, e) {
                    (0, v.ku)(t, "x", ["number"]), (0, v.ku)(e, "y", ["number"]), this.x = t, this.y = e
                }, t.prototype.moveDown = function(t) {
                    (0, v.ku)(t, "yDecrease", ["number"]), this.y -= t
                }, t.prototype.moveUp = function(t) {
                    (0, v.ku)(t, "yIncrease", ["number"]), this.y += t
                }, t.prototype.moveLeft = function(t) {
                    (0, v.ku)(t, "xDecrease", ["number"]), this.x -= t
                }, t.prototype.moveRight = function(t) {
                    (0, v.ku)(t, "xIncrease", ["number"]), this.x += t
                }, t.prototype.pushOperators = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    (0, v.pO)(t, "operator", [
                        [p.sI, "PDFOperator"]
                    ]);
                    var o = this.getContentStream();
                    o.push.apply(o, t)
                }, t.prototype.drawText = function(t, e) {
                    var o, n, r, s, a, u, l;
                    void 0 === e && (e = {}), (0, v.ku)(t, "text", ["string"]), (0, v.MU)(e.color, "options.color", [
                        [Object, "Color"]
                    ]), (0, v.zo)(e.opacity, "opacity.opacity", 0, 1), (0, v.MU)(e.font, "options.font", [
                        [c.Z, "PDFFont"]
                    ]), (0, v.MU)(e.size, "options.size", ["number"]), (0, v.MU)(e.rotate, "options.rotate", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(e.xSkew, "options.xSkew", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(e.ySkew, "options.ySkew", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(e.x, "options.x", ["number"]), (0, v.MU)(e.y, "options.y", ["number"]), (0, v.MU)(e.lineHeight, "options.lineHeight", ["number"]), (0, v.MU)(e.maxWidth, "options.maxWidth", ["number"]), (0, v.MU)(e.wordBreaks, "options.wordBreaks", [Array]), (0, v.GT)(e.blendMode, "options.blendMode", d.b);
                    for (var f = this.setOrEmbedFont(e.font), p = f.oldFont, g = f.newFont, y = f.newFontKey, m = e.size || this.fontSize, b = e.wordBreaks || this.doc.defaultWordBreaks, Z = void 0 === e.maxWidth ? (0, v.f7)((0, v.FV)(t)) : (0, v.KU)(t, b, e.maxWidth, (function(t) {
                            return g.widthOfTextAtSize(t, m)
                        })), x = new Array(Z.length), S = 0, w = Z.length; S < w; S++) x[S] = g.encodeText(Z[S]);
                    var C = this.maybeEmbedGraphicsState({
                            opacity: e.opacity,
                            blendMode: e.blendMode
                        }),
                        F = this.getContentStream();
                    F.push.apply(F, (0, i.kw)(x, {
                        color: null !== (o = e.color) && void 0 !== o ? o : this.fontColor,
                        font: y,
                        size: m,
                        rotate: null !== (n = e.rotate) && void 0 !== n ? n : (0, h.RW)(0),
                        xSkew: null !== (r = e.xSkew) && void 0 !== r ? r : (0, h.RW)(0),
                        ySkew: null !== (s = e.ySkew) && void 0 !== s ? s : (0, h.RW)(0),
                        x: null !== (a = e.x) && void 0 !== a ? a : this.x,
                        y: null !== (u = e.y) && void 0 !== u ? u : this.y,
                        lineHeight: null !== (l = e.lineHeight) && void 0 !== l ? l : this.lineHeight,
                        graphicsState: C
                    })), e.font && (p ? this.setFont(p) : this.resetFont())
                }, t.prototype.drawImage = function(t, e) {
                    var o, n, r, s, a, u, c;
                    void 0 === e && (e = {}), (0, v.ku)(t, "image", [
                        [l.Z, "PDFImage"]
                    ]), (0, v.MU)(e.x, "options.x", ["number"]), (0, v.MU)(e.y, "options.y", ["number"]), (0, v.MU)(e.width, "options.width", ["number"]), (0, v.MU)(e.height, "options.height", ["number"]), (0, v.MU)(e.rotate, "options.rotate", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(e.xSkew, "options.xSkew", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(e.ySkew, "options.ySkew", [
                        [Object, "Rotation"]
                    ]), (0, v.zo)(e.opacity, "opacity.opacity", 0, 1), (0, v.GT)(e.blendMode, "options.blendMode", d.b);
                    var f = this.node.newXObject("Image", t.ref),
                        p = this.maybeEmbedGraphicsState({
                            opacity: e.opacity,
                            blendMode: e.blendMode
                        }),
                        g = this.getContentStream();
                    g.push.apply(g, (0, i.AE)(f, {
                        x: null !== (o = e.x) && void 0 !== o ? o : this.x,
                        y: null !== (n = e.y) && void 0 !== n ? n : this.y,
                        width: null !== (r = e.width) && void 0 !== r ? r : t.size().width,
                        height: null !== (s = e.height) && void 0 !== s ? s : t.size().height,
                        rotate: null !== (a = e.rotate) && void 0 !== a ? a : (0, h.RW)(0),
                        xSkew: null !== (u = e.xSkew) && void 0 !== u ? u : (0, h.RW)(0),
                        ySkew: null !== (c = e.ySkew) && void 0 !== c ? c : (0, h.RW)(0),
                        graphicsState: p
                    }))
                }, t.prototype.drawPage = function(t, e) {
                    var o, n, r, s, a;
                    void 0 === e && (e = {}), (0, v.ku)(t, "embeddedPage", [
                        [u.Z, "PDFEmbeddedPage"]
                    ]), (0, v.MU)(e.x, "options.x", ["number"]), (0, v.MU)(e.y, "options.y", ["number"]), (0, v.MU)(e.xScale, "options.xScale", ["number"]), (0, v.MU)(e.yScale, "options.yScale", ["number"]), (0, v.MU)(e.width, "options.width", ["number"]), (0, v.MU)(e.height, "options.height", ["number"]), (0, v.MU)(e.rotate, "options.rotate", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(e.xSkew, "options.xSkew", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(e.ySkew, "options.ySkew", [
                        [Object, "Rotation"]
                    ]), (0, v.zo)(e.opacity, "opacity.opacity", 0, 1), (0, v.GT)(e.blendMode, "options.blendMode", d.b);
                    var c = this.node.newXObject("EmbeddedPdfPage", t.ref),
                        l = this.maybeEmbedGraphicsState({
                            opacity: e.opacity,
                            blendMode: e.blendMode
                        }),
                        f = void 0 !== e.width ? e.width / t.width : void 0 !== e.xScale ? e.xScale : 1,
                        p = void 0 !== e.height ? e.height / t.height : void 0 !== e.yScale ? e.yScale : 1,
                        g = this.getContentStream();
                    g.push.apply(g, (0, i.sS)(c, {
                        x: null !== (o = e.x) && void 0 !== o ? o : this.x,
                        y: null !== (n = e.y) && void 0 !== n ? n : this.y,
                        xScale: f,
                        yScale: p,
                        rotate: null !== (r = e.rotate) && void 0 !== r ? r : (0, h.RW)(0),
                        xSkew: null !== (s = e.xSkew) && void 0 !== s ? s : (0, h.RW)(0),
                        ySkew: null !== (a = e.ySkew) && void 0 !== a ? a : (0, h.RW)(0),
                        graphicsState: l
                    }))
                }, t.prototype.drawSvgPath = function(t, e) {
                    var o, n, a, u, c, l, f, p, g;
                    void 0 === e && (e = {}), (0, v.ku)(t, "path", ["string"]), (0, v.MU)(e.x, "options.x", ["number"]), (0, v.MU)(e.y, "options.y", ["number"]), (0, v.MU)(e.scale, "options.scale", ["number"]), (0, v.MU)(e.rotate, "options.rotate", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(e.borderWidth, "options.borderWidth", ["number"]), (0, v.MU)(e.color, "options.color", [
                        [Object, "Color"]
                    ]), (0, v.zo)(e.opacity, "opacity.opacity", 0, 1), (0, v.MU)(e.borderColor, "options.borderColor", [
                        [Object, "Color"]
                    ]), (0, v.MU)(e.borderDashArray, "options.borderDashArray", [Array]), (0, v.MU)(e.borderDashPhase, "options.borderDashPhase", ["number"]), (0, v.GT)(e.borderLineCap, "options.borderLineCap", s.kP), (0, v.zo)(e.borderOpacity, "options.borderOpacity", 0, 1), (0, v.GT)(e.blendMode, "options.blendMode", d.b);
                    var y = this.maybeEmbedGraphicsState({
                        opacity: e.opacity,
                        borderOpacity: e.borderOpacity,
                        blendMode: e.blendMode
                    });
                    "color" in e || "borderColor" in e || (e.borderColor = (0, r.B8)(0, 0, 0));
                    var m = this.getContentStream();
                    m.push.apply(m, (0, i.os)(t, {
                        x: null !== (o = e.x) && void 0 !== o ? o : this.x,
                        y: null !== (n = e.y) && void 0 !== n ? n : this.y,
                        scale: e.scale,
                        rotate: null !== (a = e.rotate) && void 0 !== a ? a : (0, h.RW)(0),
                        color: null !== (u = e.color) && void 0 !== u ? u : void 0,
                        borderColor: null !== (c = e.borderColor) && void 0 !== c ? c : void 0,
                        borderWidth: null !== (l = e.borderWidth) && void 0 !== l ? l : 0,
                        borderDashArray: null !== (f = e.borderDashArray) && void 0 !== f ? f : void 0,
                        borderDashPhase: null !== (p = e.borderDashPhase) && void 0 !== p ? p : void 0,
                        borderLineCap: null !== (g = e.borderLineCap) && void 0 !== g ? g : void 0,
                        graphicsState: y
                    }))
                }, t.prototype.drawLine = function(t) {
                    var e, o, n, a, u;
                    (0, v.ku)(t.start, "options.start", [
                        [Object, "{ x: number, y: number }"]
                    ]), (0, v.ku)(t.end, "options.end", [
                        [Object, "{ x: number, y: number }"]
                    ]), (0, v.ku)(t.start.x, "options.start.x", ["number"]), (0, v.ku)(t.start.y, "options.start.y", ["number"]), (0, v.ku)(t.end.x, "options.end.x", ["number"]), (0, v.ku)(t.end.y, "options.end.y", ["number"]), (0, v.MU)(t.thickness, "options.thickness", ["number"]), (0, v.MU)(t.color, "options.color", [
                        [Object, "Color"]
                    ]), (0, v.MU)(t.dashArray, "options.dashArray", [Array]), (0, v.MU)(t.dashPhase, "options.dashPhase", ["number"]), (0, v.GT)(t.lineCap, "options.lineCap", s.kP), (0, v.zo)(t.opacity, "opacity.opacity", 0, 1), (0, v.GT)(t.blendMode, "options.blendMode", d.b);
                    var c = this.maybeEmbedGraphicsState({
                        borderOpacity: t.opacity,
                        blendMode: t.blendMode
                    });
                    "color" in t || (t.color = (0, r.B8)(0, 0, 0));
                    var l = this.getContentStream();
                    l.push.apply(l, (0, i.pS)({
                        start: t.start,
                        end: t.end,
                        thickness: null !== (e = t.thickness) && void 0 !== e ? e : 1,
                        color: null !== (o = t.color) && void 0 !== o ? o : void 0,
                        dashArray: null !== (n = t.dashArray) && void 0 !== n ? n : void 0,
                        dashPhase: null !== (a = t.dashPhase) && void 0 !== a ? a : void 0,
                        lineCap: null !== (u = t.lineCap) && void 0 !== u ? u : void 0,
                        graphicsState: c
                    }))
                }, t.prototype.drawRectangle = function(t) {
                    var e, o, n, a, u, c, l, f, p, g, y, m, b;
                    void 0 === t && (t = {}), (0, v.MU)(t.x, "options.x", ["number"]), (0, v.MU)(t.y, "options.y", ["number"]), (0, v.MU)(t.width, "options.width", ["number"]), (0, v.MU)(t.height, "options.height", ["number"]), (0, v.MU)(t.rotate, "options.rotate", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(t.xSkew, "options.xSkew", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(t.ySkew, "options.ySkew", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(t.borderWidth, "options.borderWidth", ["number"]), (0, v.MU)(t.color, "options.color", [
                        [Object, "Color"]
                    ]), (0, v.zo)(t.opacity, "opacity.opacity", 0, 1), (0, v.MU)(t.borderColor, "options.borderColor", [
                        [Object, "Color"]
                    ]), (0, v.MU)(t.borderDashArray, "options.borderDashArray", [Array]), (0, v.MU)(t.borderDashPhase, "options.borderDashPhase", ["number"]), (0, v.GT)(t.borderLineCap, "options.borderLineCap", s.kP), (0, v.zo)(t.borderOpacity, "options.borderOpacity", 0, 1), (0, v.GT)(t.blendMode, "options.blendMode", d.b);
                    var Z = this.maybeEmbedGraphicsState({
                        opacity: t.opacity,
                        borderOpacity: t.borderOpacity,
                        blendMode: t.blendMode
                    });
                    "color" in t || "borderColor" in t || (t.color = (0, r.B8)(0, 0, 0));
                    var x = this.getContentStream();
                    x.push.apply(x, (0, i.JG)({
                        x: null !== (e = t.x) && void 0 !== e ? e : this.x,
                        y: null !== (o = t.y) && void 0 !== o ? o : this.y,
                        width: null !== (n = t.width) && void 0 !== n ? n : 150,
                        height: null !== (a = t.height) && void 0 !== a ? a : 100,
                        rotate: null !== (u = t.rotate) && void 0 !== u ? u : (0, h.RW)(0),
                        xSkew: null !== (c = t.xSkew) && void 0 !== c ? c : (0, h.RW)(0),
                        ySkew: null !== (l = t.ySkew) && void 0 !== l ? l : (0, h.RW)(0),
                        borderWidth: null !== (f = t.borderWidth) && void 0 !== f ? f : 0,
                        color: null !== (p = t.color) && void 0 !== p ? p : void 0,
                        borderColor: null !== (g = t.borderColor) && void 0 !== g ? g : void 0,
                        borderDashArray: null !== (y = t.borderDashArray) && void 0 !== y ? y : void 0,
                        borderDashPhase: null !== (m = t.borderDashPhase) && void 0 !== m ? m : void 0,
                        graphicsState: Z,
                        borderLineCap: null !== (b = t.borderLineCap) && void 0 !== b ? b : void 0
                    }))
                }, t.prototype.drawSquare = function(t) {
                    void 0 === t && (t = {});
                    var e = t.size;
                    (0, v.MU)(e, "size", ["number"]), this.drawRectangle((0, n.pi)((0, n.pi)({}, t), {
                        width: e,
                        height: e
                    }))
                }, t.prototype.drawEllipse = function(t) {
                    var e, o, n, a, u, c, l, h, f, p, g;
                    void 0 === t && (t = {}), (0, v.MU)(t.x, "options.x", ["number"]), (0, v.MU)(t.y, "options.y", ["number"]), (0, v.MU)(t.xScale, "options.xScale", ["number"]), (0, v.MU)(t.yScale, "options.yScale", ["number"]), (0, v.MU)(t.rotate, "options.rotate", [
                        [Object, "Rotation"]
                    ]), (0, v.MU)(t.color, "options.color", [
                        [Object, "Color"]
                    ]), (0, v.zo)(t.opacity, "opacity.opacity", 0, 1), (0, v.MU)(t.borderColor, "options.borderColor", [
                        [Object, "Color"]
                    ]), (0, v.zo)(t.borderOpacity, "options.borderOpacity", 0, 1), (0, v.MU)(t.borderWidth, "options.borderWidth", ["number"]), (0, v.MU)(t.borderDashArray, "options.borderDashArray", [Array]), (0, v.MU)(t.borderDashPhase, "options.borderDashPhase", ["number"]), (0, v.GT)(t.borderLineCap, "options.borderLineCap", s.kP), (0, v.GT)(t.blendMode, "options.blendMode", d.b);
                    var y = this.maybeEmbedGraphicsState({
                        opacity: t.opacity,
                        borderOpacity: t.borderOpacity,
                        blendMode: t.blendMode
                    });
                    "color" in t || "borderColor" in t || (t.color = (0, r.B8)(0, 0, 0));
                    var m = this.getContentStream();
                    m.push.apply(m, (0, i.xL)({
                        x: null !== (e = t.x) && void 0 !== e ? e : this.x,
                        y: null !== (o = t.y) && void 0 !== o ? o : this.y,
                        xScale: null !== (n = t.xScale) && void 0 !== n ? n : 100,
                        yScale: null !== (a = t.yScale) && void 0 !== a ? a : 100,
                        rotate: null !== (u = t.rotate) && void 0 !== u ? u : void 0,
                        color: null !== (c = t.color) && void 0 !== c ? c : void 0,
                        borderColor: null !== (l = t.borderColor) && void 0 !== l ? l : void 0,
                        borderWidth: null !== (h = t.borderWidth) && void 0 !== h ? h : 0,
                        borderDashArray: null !== (f = t.borderDashArray) && void 0 !== f ? f : void 0,
                        borderDashPhase: null !== (p = t.borderDashPhase) && void 0 !== p ? p : void 0,
                        borderLineCap: null !== (g = t.borderLineCap) && void 0 !== g ? g : void 0,
                        graphicsState: y
                    }))
                }, t.prototype.drawCircle = function(t) {
                    void 0 === t && (t = {});
                    var e = t.size,
                        o = void 0 === e ? 100 : e;
                    (0, v.MU)(o, "size", ["number"]), this.drawEllipse((0, n.pi)((0, n.pi)({}, t), {
                        xScale: o,
                        yScale: o
                    }))
                }, t.prototype.setOrEmbedFont = function(t) {
                    var e = this.font,
                        o = this.fontKey;
                    return t ? this.setFont(t) : this.getFont(), {
                        oldFont: e,
                        oldFontKey: o,
                        newFont: this.font,
                        newFontKey: this.fontKey
                    }
                }, t.prototype.getFont = function() {
                    if (!this.font || !this.fontKey) {
                        var t = this.doc.embedStandardFont(f.E.Helvetica);
                        this.setFont(t)
                    }
                    return [this.font, this.fontKey]
                }, t.prototype.resetFont = function() {
                    this.font = void 0, this.fontKey = void 0
                }, t.prototype.getContentStream = function(t) {
                    return void 0 === t && (t = !0), t && this.contentStream || (this.contentStream = this.createContentStream(), this.contentStreamRef = this.doc.context.register(this.contentStream), this.node.addContentStream(this.contentStreamRef)), this.contentStream
                }, t.prototype.createContentStream = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var o = this.doc.context.obj({}),
                        n = p.kK.of(o, t);
                    return n
                }, t.prototype.maybeEmbedGraphicsState = function(t) {
                    var e = t.opacity,
                        o = t.borderOpacity,
                        n = t.blendMode;
                    if (void 0 !== e || void 0 !== o || void 0 !== n) {
                        var r = this.doc.context.obj({
                            Type: "ExtGState",
                            ca: e,
                            CA: o,
                            BM: n
                        });
                        return this.node.newExtGState("GS", r)
                    }
                }, t.prototype.scaleAnnot = function(t, e, o) {
                    for (var n = ["RD", "CL", "Vertices", "QuadPoints", "L", "Rect"], r = 0, i = n.length; r < i; r++) {
                        var s = t.lookup(p.wQ.of(n[r]));
                        s instanceof p.Gr && s.scalePDFNumbers(e, o)
                    }
                    var a = t.lookup(p.wQ.of("InkList"));
                    if (a instanceof p.Gr)
                        for (r = 0, i = a.size(); r < i; r++) {
                            var u = a.lookup(r);
                            u instanceof p.Gr && u.scalePDFNumbers(e, o)
                        }
                }, t.of = function(e, o, n) {
                    return new t(e, o, n)
                }, t.create = function(e) {
                    (0, v.ku)(e, "doc", [
                        [a.Z, "PDFDocument"]
                    ]);
                    var o = p.$F.of(-1),
                        n = p.Eg.withContextAndParent(e.context, o);
                    return new t(n, e.context.register(n), e)
                }, t
            }()
        },
        467531: (t, e, o) => {
            "use strict";
            var n;
            o.d(e, {
                    b: () => n
                }),
                function(t) {
                    t.Normal = "Normal", t.Multiply = "Multiply", t.Screen = "Screen", t.Overlay = "Overlay", t.Darken = "Darken", t.Lighten = "Lighten", t.ColorDodge = "ColorDodge", t.ColorBurn = "ColorBurn", t.HardLight = "HardLight", t.SoftLight = "SoftLight", t.Difference = "Difference", t.Exclusion = "Exclusion"
                }(n || (n = {}))
        },
        945893: (t, e, o) => {
            "use strict";
            var n;
            o.d(e, {
                    E: () => n
                }),
                function(t) {
                    t.Courier = "Courier", t.CourierBold = "Courier-Bold", t.CourierOblique = "Courier-Oblique", t.CourierBoldOblique = "Courier-BoldOblique", t.Helvetica = "Helvetica", t.HelveticaBold = "Helvetica-Bold", t.HelveticaOblique = "Helvetica-Oblique", t.HelveticaBoldOblique = "Helvetica-BoldOblique", t.TimesRoman = "Times-Roman", t.TimesRomanBold = "Times-Bold", t.TimesRomanItalic = "Times-Italic", t.TimesRomanBoldItalic = "Times-BoldItalic", t.Symbol = "Symbol", t.ZapfDingbats = "ZapfDingbats"
                }(n || (n = {}))
        },
        80985: (t, e, o) => {
            "use strict";
            o.d(e, {
                B8: () => a,
                Qn: () => u,
                dd: () => n,
                l6: () => h,
                p4: () => p,
                se: () => s,
                wG: () => v,
                yb: () => f
            });
            var n, r = o(350486),
                i = o(451441);
            ! function(t) {
                t.Grayscale = "Grayscale", t.RGB = "RGB", t.CMYK = "CMYK"
            }(n || (n = {}));
            var s = function(t) {
                    return (0, i.gI)(t, "gray", 0, 1), {
                        type: n.Grayscale,
                        gray: t
                    }
                },
                a = function(t, e, o) {
                    return (0, i.gI)(t, "red", 0, 1), (0, i.gI)(e, "green", 0, 1), (0, i.gI)(o, "blue", 0, 1), {
                        type: n.RGB,
                        red: t,
                        green: e,
                        blue: o
                    }
                },
                u = function(t, e, o, r) {
                    return (0, i.gI)(t, "cyan", 0, 1), (0, i.gI)(e, "magenta", 0, 1), (0, i.gI)(o, "yellow", 0, 1), (0, i.gI)(r, "key", 0, 1), {
                        type: n.CMYK,
                        cyan: t,
                        magenta: e,
                        yellow: o,
                        key: r
                    }
                },
                c = n.Grayscale,
                l = n.RGB,
                d = n.CMYK,
                h = function(t) {
                    return t.type === c ? (0, r.GR)(t.gray) : t.type === l ? (0, r.mE)(t.red, t.green, t.blue) : t.type === d ? (0, r.O8)(t.cyan, t.magenta, t.yellow, t.key) : (0, i.vU)("Invalid color: " + JSON.stringify(t))
                },
                f = function(t) {
                    return t.type === c ? (0, r.dA)(t.gray) : t.type === l ? (0, r.XS)(t.red, t.green, t.blue) : t.type === d ? (0, r.sp)(t.cyan, t.magenta, t.yellow, t.key) : (0, i.vU)("Invalid color: " + JSON.stringify(t))
                },
                p = function(t, e) {
                    return void 0 === e && (e = 1), 1 === (null === t || void 0 === t ? void 0 : t.length) ? s(t[0] * e) : 3 === (null === t || void 0 === t ? void 0 : t.length) ? a(t[0] * e, t[1] * e, t[2] * e) : 4 === (null === t || void 0 === t ? void 0 : t.length) ? u(t[0] * e, t[1] * e, t[2] * e, t[3] * e) : void 0
                },
                v = function(t) {
                    return t.type === c ? [t.gray] : t.type === l ? [t.red, t.green, t.blue] : t.type === d ? [t.cyan, t.magenta, t.yellow, t.key] : (0, i.vU)("Invalid color: " + JSON.stringify(t))
                }
        },
        934755: (t, e, o) => {
            "use strict";
            o.d(e, {
                E9: () => p,
                I3: () => i,
                Ic: () => h,
                Ke: () => f,
                MY: () => d,
                Nl: () => s,
                VV: () => c,
                _D: () => y,
                eB: () => l,
                ip: () => r,
                jw: () => a,
                ll: () => v,
                uo: () => g,
                wx: () => u
            });
            var n = o(570655),
                r = function(t) {
                    function e() {
                        return t.call(this, "Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                i = function(t) {
                    function e() {
                        return t.call(this, "Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                s = function(t) {
                    function e() {
                        return t.call(this, "A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                a = function(t) {
                    function e() {
                        return t.call(this, "PDFDocument has no pages so `PDFDocument.removePage` cannot be called") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                u = function(t) {
                    function e(e) {
                        var o = 'PDFDocument has no form field with the name "' + e + '"';
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                c = function(t) {
                    function e(e, o, n) {
                        var r, i, s = 'Expected field "' + e + '" to be of type ' + (null === o || void 0 === o ? void 0 : o.name) + ", but it is actually of type " + (null !== (i = null === (r = null === n || void 0 === n ? void 0 : n.constructor) || void 0 === r ? void 0 : r.name) && void 0 !== i ? i : n);
                        return t.call(this, s) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                l = function(t) {
                    function e(e) {
                        var o = 'Failed to select check box due to missing onValue: "' + e + '"';
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                d = function(t) {
                    function e(e) {
                        var o = 'A field already exists with the specified name: "' + e + '"';
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                h = function(t) {
                    function e(e) {
                        var o = 'Field name contains invalid component: "' + e + '"';
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                f = function(t) {
                    function e(e) {
                        var o = 'A non-terminal field already exists with the specified name: "' + e + '"';
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                p = function(t) {
                    function e(e) {
                        var o = "Reading rich text fields is not supported: Attempted to read rich text field: " + e;
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                v = function(t) {
                    function e(e, o) {
                        var n = "Failed to layout combed text as lineLength=" + e + " is greater than cellCount=" + o;
                        return t.call(this, n) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                g = function(t) {
                    function e(e, o, n) {
                        var r = "Attempted to set text with length=" + e + " for TextField with maxLength=" + o + " and name=" + n;
                        return t.call(this, r) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                y = function(t) {
                    function e(e, o, n) {
                        var r = "Attempted to set maxLength=" + o + ", which is less than " + e + ", the length of this field's current value (name=" + n + ")";
                        return t.call(this, r) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error)
        },
        887685: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => f
            });
            var n = o(570655),
                r = o(874087),
                i = o(946013),
                s = o(611828),
                a = o(98163),
                u = o(403358),
                c = o(80985),
                l = o(115733),
                d = o(509958),
                h = o(451441);
            const f = function(t) {
                function e(e, o, n) {
                    var r = t.call(this, e, o, n) || this;
                    return (0, h.ku)(e, "acroButton", [
                        [d._, "PDFAcroPushButton"]
                    ]), r.acroField = e, r
                }
                return (0, n.ZT)(e, t), e.prototype.setImage = function(t, e) {
                    void 0 === e && (e = s.C.Center);
                    for (var o = this.acroField.getWidgets(), n = 0, r = o.length; n < r; n++) {
                        var i = o[n],
                            a = this.createImageAppearanceStream(i, t, e);
                        this.updateWidgetAppearances(i, {
                            normal: a
                        })
                    }
                    this.markAsClean()
                }, e.prototype.setFontSize = function(t) {
                    (0, h.z7)(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty()
                }, e.prototype.addToPage = function(t, e, o) {
                    var n, i, s, a, d, f, p, v, g, y, m;
                    (0, h.MU)(t, "text", ["string"]), (0, h.MU)(e, "page", [
                        [r.Z, "PDFPage"]
                    ]), (0, u.b)(o);
                    var b = this.createWidget({
                            x: (null !== (n = null === o || void 0 === o ? void 0 : o.x) && void 0 !== n ? n : 0) - (null !== (i = null === o || void 0 === o ? void 0 : o.borderWidth) && void 0 !== i ? i : 0) / 2,
                            y: (null !== (s = null === o || void 0 === o ? void 0 : o.y) && void 0 !== s ? s : 0) - (null !== (a = null === o || void 0 === o ? void 0 : o.borderWidth) && void 0 !== a ? a : 0) / 2,
                            width: null !== (d = null === o || void 0 === o ? void 0 : o.width) && void 0 !== d ? d : 100,
                            height: null !== (f = null === o || void 0 === o ? void 0 : o.height) && void 0 !== f ? f : 50,
                            textColor: null !== (p = null === o || void 0 === o ? void 0 : o.textColor) && void 0 !== p ? p : (0, c.B8)(0, 0, 0),
                            backgroundColor: null !== (v = null === o || void 0 === o ? void 0 : o.backgroundColor) && void 0 !== v ? v : (0, c.B8)(.75, .75, .75),
                            borderColor: null === o || void 0 === o ? void 0 : o.borderColor,
                            borderWidth: null !== (g = null === o || void 0 === o ? void 0 : o.borderWidth) && void 0 !== g ? g : 0,
                            rotate: null !== (y = null === o || void 0 === o ? void 0 : o.rotate) && void 0 !== y ? y : (0, l.RW)(0),
                            caption: t,
                            hidden: null === o || void 0 === o ? void 0 : o.hidden,
                            page: e.ref
                        }),
                        Z = this.doc.context.register(b.dict);
                    this.acroField.addWidget(Z);
                    var x = null !== (m = null === o || void 0 === o ? void 0 : o.font) && void 0 !== m ? m : this.doc.getForm().getDefaultFont();
                    this.updateWidgetAppearance(b, x), e.node.addAnnot(Z)
                }, e.prototype.needsAppearancesUpdate = function() {
                    var t;
                    if (this.isDirty()) return !0;
                    for (var e = this.acroField.getWidgets(), o = 0, n = e.length; o < n; o++) {
                        if (!((null === (t = e[o].getAppearances()) || void 0 === t ? void 0 : t.normal) instanceof d.kO)) return !0
                    }
                    return !1
                }, e.prototype.defaultUpdateAppearances = function(t) {
                    (0, h.ku)(t, "font", [
                        [i.Z, "PDFFont"]
                    ]), this.updateAppearances(t)
                }, e.prototype.updateAppearances = function(t, e) {
                    (0, h.ku)(t, "font", [
                        [i.Z, "PDFFont"]
                    ]), (0, h.MU)(e, "provider", [Function]);
                    for (var o = this.acroField.getWidgets(), n = 0, r = o.length; n < r; n++) {
                        var s = o[n];
                        this.updateWidgetAppearance(s, t, e)
                    }
                }, e.prototype.updateWidgetAppearance = function(t, e, o) {
                    var n = null !== o && void 0 !== o ? o : a.DS,
                        r = (0, a.TE)(n(this, t, e));
                    this.updateWidgetAppearanceWithFont(t, e, r)
                }, e.of = function(t, o, n) {
                    return new e(t, o, n)
                }, e
            }(u.Z)
        },
        124313: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => d
            });
            var n = o(570655),
                r = o(874087),
                i = o(98163),
                s = o(80985),
                a = o(115733),
                u = o(403358),
                c = o(509958),
                l = o(451441);
            const d = function(t) {
                function e(e, o, n) {
                    var r = t.call(this, e, o, n) || this;
                    return (0, l.ku)(e, "acroCheckBox", [
                        [c.Ei, "PDFAcroCheckBox"]
                    ]), r.acroField = e, r
                }
                return (0, n.ZT)(e, t), e.prototype.check = function() {
                    var t, e = null !== (t = this.acroField.getOnValue()) && void 0 !== t ? t : c.wQ.of("Yes");
                    this.markAsDirty(), this.acroField.setValue(e)
                }, e.prototype.uncheck = function() {
                    this.markAsDirty(), this.acroField.setValue(c.wQ.of("Off"))
                }, e.prototype.isChecked = function() {
                    var t = this.acroField.getOnValue();
                    return !!t && t === this.acroField.getValue()
                }, e.prototype.addToPage = function(t, e) {
                    var o, n, i, d, h, f;
                    (0, l.ku)(t, "page", [
                        [r.Z, "PDFPage"]
                    ]), (0, u.b)(e), e || (e = {}), "textColor" in e || (e.textColor = (0, s.B8)(0, 0, 0)), "backgroundColor" in e || (e.backgroundColor = (0, s.B8)(1, 1, 1)), "borderColor" in e || (e.borderColor = (0, s.B8)(0, 0, 0)), "borderWidth" in e || (e.borderWidth = 1);
                    var p = this.createWidget({
                            x: null !== (o = e.x) && void 0 !== o ? o : 0,
                            y: null !== (n = e.y) && void 0 !== n ? n : 0,
                            width: null !== (i = e.width) && void 0 !== i ? i : 50,
                            height: null !== (d = e.height) && void 0 !== d ? d : 50,
                            textColor: e.textColor,
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: null !== (h = e.borderWidth) && void 0 !== h ? h : 0,
                            rotate: null !== (f = e.rotate) && void 0 !== f ? f : (0, a.RW)(0),
                            hidden: e.hidden,
                            page: t.ref
                        }),
                        v = this.doc.context.register(p.dict);
                    this.acroField.addWidget(v), p.setAppearanceState(c.wQ.of("Off")), this.updateWidgetAppearance(p, c.wQ.of("Yes")), t.node.addAnnot(v)
                }, e.prototype.needsAppearancesUpdate = function() {
                    for (var t, e = this.acroField.getWidgets(), o = 0, n = e.length; o < n; o++) {
                        var r = e[o],
                            i = r.getAppearanceState(),
                            s = null === (t = r.getAppearances()) || void 0 === t ? void 0 : t.normal;
                        if (!(s instanceof c.mh)) return !0;
                        if (i && !s.has(i)) return !0
                    }
                    return !1
                }, e.prototype.defaultUpdateAppearances = function() {
                    this.updateAppearances()
                }, e.prototype.updateAppearances = function(t) {
                    var e;
                    (0, l.MU)(t, "provider", [Function]);
                    for (var o = this.acroField.getWidgets(), n = 0, r = o.length; n < r; n++) {
                        var i = o[n],
                            s = null !== (e = i.getOnValue()) && void 0 !== e ? e : c.wQ.of("Yes");
                        s && this.updateWidgetAppearance(i, s, t)
                    }
                    this.markAsClean()
                }, e.prototype.updateWidgetAppearance = function(t, e, o) {
                    var n = null !== o && void 0 !== o ? o : i.S8,
                        r = (0, i.TE)(n(this, t));
                    this.updateOnOffWidgetAppearance(t, e, r)
                }, e.of = function(t, o, n) {
                    return new e(t, o, n)
                }, e
            }(u.Z)
        },
        14671: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => h
            });
            var n = o(570655),
                r = o(874087),
                i = o(946013),
                s = o(403358),
                a = o(98163),
                u = o(80985),
                c = o(115733),
                l = o(509958),
                d = o(451441);
            const h = function(t) {
                function e(e, o, n) {
                    var r = t.call(this, e, o, n) || this;
                    return (0, d.ku)(e, "acroComboBox", [
                        [l.sS, "PDFAcroComboBox"]
                    ]), r.acroField = e, r
                }
                return (0, n.ZT)(e, t), e.prototype.getOptions = function() {
                    for (var t = this.acroField.getOptions(), e = new Array(t.length), o = 0, n = e.length; o < n; o++) {
                        var r = t[o],
                            i = r.display,
                            s = r.value;
                        e[o] = (null !== i && void 0 !== i ? i : s).decodeText()
                    }
                    return e
                }, e.prototype.getSelected = function() {
                    for (var t = this.acroField.getValues(), e = new Array(t.length), o = 0, n = t.length; o < n; o++) e[o] = t[o].decodeText();
                    return e
                }, e.prototype.setOptions = function(t) {
                    (0, d.ku)(t, "options", [Array]);
                    for (var e = new Array(t.length), o = 0, n = t.length; o < n; o++) e[o] = {
                        value: l.Ij.fromText(t[o])
                    };
                    this.acroField.setOptions(e)
                }, e.prototype.addOptions = function(t) {
                    (0, d.ku)(t, "options", ["string", Array]);
                    for (var e = Array.isArray(t) ? t : [t], o = this.acroField.getOptions(), n = new Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = {
                        value: l.Ij.fromText(e[r])
                    };
                    this.acroField.setOptions(o.concat(n))
                }, e.prototype.select = function(t, e) {
                    void 0 === e && (e = !1), (0, d.ku)(t, "options", ["string", Array]), (0, d.ku)(e, "merge", ["boolean"]);
                    var o = Array.isArray(t) ? t : [t],
                        n = this.getOptions();
                    o.find((function(t) {
                        return !n.includes(t)
                    })) && this.enableEditing(), this.markAsDirty(), (o.length > 1 || 1 === o.length && e) && this.enableMultiselect();
                    for (var r = new Array(o.length), i = 0, s = o.length; i < s; i++) r[i] = l.Ij.fromText(o[i]);
                    if (e) {
                        var a = this.acroField.getValues();
                        this.acroField.setValues(a.concat(r))
                    } else this.acroField.setValues(r)
                }, e.prototype.clear = function() {
                    this.markAsDirty(), this.acroField.setValues([])
                }, e.prototype.setFontSize = function(t) {
                    (0, d.z7)(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty()
                }, e.prototype.isEditable = function() {
                    return this.acroField.hasFlag(l.m0.Edit)
                }, e.prototype.enableEditing = function() {
                    this.acroField.setFlagTo(l.m0.Edit, !0)
                }, e.prototype.disableEditing = function() {
                    this.acroField.setFlagTo(l.m0.Edit, !1)
                }, e.prototype.isSorted = function() {
                    return this.acroField.hasFlag(l.m0.Sort)
                }, e.prototype.enableSorting = function() {
                    this.acroField.setFlagTo(l.m0.Sort, !0)
                }, e.prototype.disableSorting = function() {
                    this.acroField.setFlagTo(l.m0.Sort, !1)
                }, e.prototype.isMultiselect = function() {
                    return this.acroField.hasFlag(l.m0.MultiSelect)
                }, e.prototype.enableMultiselect = function() {
                    this.acroField.setFlagTo(l.m0.MultiSelect, !0)
                }, e.prototype.disableMultiselect = function() {
                    this.acroField.setFlagTo(l.m0.MultiSelect, !1)
                }, e.prototype.isSpellChecked = function() {
                    return !this.acroField.hasFlag(l.m0.DoNotSpellCheck)
                }, e.prototype.enableSpellChecking = function() {
                    this.acroField.setFlagTo(l.m0.DoNotSpellCheck, !1)
                }, e.prototype.disableSpellChecking = function() {
                    this.acroField.setFlagTo(l.m0.DoNotSpellCheck, !0)
                }, e.prototype.isSelectOnClick = function() {
                    return this.acroField.hasFlag(l.m0.CommitOnSelChange)
                }, e.prototype.enableSelectOnClick = function() {
                    this.acroField.setFlagTo(l.m0.CommitOnSelChange, !0)
                }, e.prototype.disableSelectOnClick = function() {
                    this.acroField.setFlagTo(l.m0.CommitOnSelChange, !1)
                }, e.prototype.addToPage = function(t, e) {
                    var o, n, i, a, l, h, f;
                    (0, d.ku)(t, "page", [
                        [r.Z, "PDFPage"]
                    ]), (0, s.b)(e), e || (e = {}), "textColor" in e || (e.textColor = (0, u.B8)(0, 0, 0)), "backgroundColor" in e || (e.backgroundColor = (0, u.B8)(1, 1, 1)), "borderColor" in e || (e.borderColor = (0, u.B8)(0, 0, 0)), "borderWidth" in e || (e.borderWidth = 1);
                    var p = this.createWidget({
                            x: null !== (o = e.x) && void 0 !== o ? o : 0,
                            y: null !== (n = e.y) && void 0 !== n ? n : 0,
                            width: null !== (i = e.width) && void 0 !== i ? i : 200,
                            height: null !== (a = e.height) && void 0 !== a ? a : 50,
                            textColor: e.textColor,
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: null !== (l = e.borderWidth) && void 0 !== l ? l : 0,
                            rotate: null !== (h = e.rotate) && void 0 !== h ? h : (0, c.RW)(0),
                            hidden: e.hidden,
                            page: t.ref
                        }),
                        v = this.doc.context.register(p.dict);
                    this.acroField.addWidget(v);
                    var g = null !== (f = e.font) && void 0 !== f ? f : this.doc.getForm().getDefaultFont();
                    this.updateWidgetAppearance(p, g), t.node.addAnnot(v)
                }, e.prototype.needsAppearancesUpdate = function() {
                    var t;
                    if (this.isDirty()) return !0;
                    for (var e = this.acroField.getWidgets(), o = 0, n = e.length; o < n; o++) {
                        if (!((null === (t = e[o].getAppearances()) || void 0 === t ? void 0 : t.normal) instanceof l.kO)) return !0
                    }
                    return !1
                }, e.prototype.defaultUpdateAppearances = function(t) {
                    (0, d.ku)(t, "font", [
                        [i.Z, "PDFFont"]
                    ]), this.updateAppearances(t)
                }, e.prototype.updateAppearances = function(t, e) {
                    (0, d.ku)(t, "font", [
                        [i.Z, "PDFFont"]
                    ]), (0, d.MU)(e, "provider", [Function]);
                    for (var o = this.acroField.getWidgets(), n = 0, r = o.length; n < r; n++) {
                        var s = o[n];
                        this.updateWidgetAppearance(s, t, e)
                    }
                    this.markAsClean()
                }, e.prototype.updateWidgetAppearance = function(t, e, o) {
                    var n = null !== o && void 0 !== o ? o : a.oX,
                        r = (0, a.TE)(n(this, t, e));
                    this.updateWidgetAppearanceWithFont(t, e, r)
                }, e.of = function(t, o, n) {
                    return new e(t, o, n)
                }, e
            }(s.Z)
        },
        403358: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => h,
                b: () => d
            });
            var n = o(570655),
                r = o(835966),
                i = o(80985),
                s = o(115733),
                a = o(509958),
                u = o(451441),
                c = o(830400),
                l = o(981806),
                d = function(t) {
                    (0, u.MU)(null === t || void 0 === t ? void 0 : t.x, "options.x", ["number"]), (0, u.MU)(null === t || void 0 === t ? void 0 : t.y, "options.y", ["number"]), (0, u.MU)(null === t || void 0 === t ? void 0 : t.width, "options.width", ["number"]), (0, u.MU)(null === t || void 0 === t ? void 0 : t.height, "options.height", ["number"]), (0, u.MU)(null === t || void 0 === t ? void 0 : t.textColor, "options.textColor", [
                        [Object, "Color"]
                    ]), (0, u.MU)(null === t || void 0 === t ? void 0 : t.backgroundColor, "options.backgroundColor", [
                        [Object, "Color"]
                    ]), (0, u.MU)(null === t || void 0 === t ? void 0 : t.borderColor, "options.borderColor", [
                        [Object, "Color"]
                    ]), (0, u.MU)(null === t || void 0 === t ? void 0 : t.borderWidth, "options.borderWidth", ["number"]), (0, u.MU)(null === t || void 0 === t ? void 0 : t.rotate, "options.rotate", [
                        [Object, "Rotation"]
                    ])
                };
            const h = function() {
                function t(t, e, o) {
                    (0, u.ku)(t, "acroField", [
                        [a.Fs, "PDFAcroTerminal"]
                    ]), (0, u.ku)(e, "ref", [
                        [a.$F, "PDFRef"]
                    ]), (0, u.ku)(o, "doc", [
                        [r.Z, "PDFDocument"]
                    ]), this.acroField = t, this.ref = e, this.doc = o
                }
                return t.prototype.getName = function() {
                    var t;
                    return null !== (t = this.acroField.getFullyQualifiedName()) && void 0 !== t ? t : ""
                }, t.prototype.isReadOnly = function() {
                    return this.acroField.hasFlag(a.PV.ReadOnly)
                }, t.prototype.enableReadOnly = function() {
                    this.acroField.setFlagTo(a.PV.ReadOnly, !0)
                }, t.prototype.disableReadOnly = function() {
                    this.acroField.setFlagTo(a.PV.ReadOnly, !1)
                }, t.prototype.isRequired = function() {
                    return this.acroField.hasFlag(a.PV.Required)
                }, t.prototype.enableRequired = function() {
                    this.acroField.setFlagTo(a.PV.Required, !0)
                }, t.prototype.disableRequired = function() {
                    this.acroField.setFlagTo(a.PV.Required, !1)
                }, t.prototype.isExported = function() {
                    return !this.acroField.hasFlag(a.PV.NoExport)
                }, t.prototype.enableExporting = function() {
                    this.acroField.setFlagTo(a.PV.NoExport, !1)
                }, t.prototype.disableExporting = function() {
                    this.acroField.setFlagTo(a.PV.NoExport, !0)
                }, t.prototype.needsAppearancesUpdate = function() {
                    throw new a.iQ(this.constructor.name, "needsAppearancesUpdate")
                }, t.prototype.defaultUpdateAppearances = function(t) {
                    throw new a.iQ(this.constructor.name, "defaultUpdateAppearances")
                }, t.prototype.markAsDirty = function() {
                    this.doc.getForm().markFieldAsDirty(this.ref)
                }, t.prototype.markAsClean = function() {
                    this.doc.getForm().markFieldAsClean(this.ref)
                }, t.prototype.isDirty = function() {
                    return this.doc.getForm().fieldIsDirty(this.ref)
                }, t.prototype.createWidget = function(t) {
                    var e, o = t.textColor,
                        n = t.backgroundColor,
                        r = t.borderColor,
                        c = t.borderWidth,
                        l = (0, s.Ux)(t.rotate),
                        d = t.caption,
                        h = t.x,
                        f = t.y,
                        p = t.width + c,
                        v = t.height + c,
                        g = Boolean(t.hidden),
                        y = t.page;
                    (0, u.m_)(l, "degreesAngle", 90);
                    var m = a.ci.create(this.doc.context, this.ref),
                        b = (0, s.o7)({
                            x: h,
                            y: f,
                            width: p,
                            height: v
                        }, c, l);
                    m.setRectangle(b), y && m.setP(y);
                    var Z = m.getOrCreateAppearanceCharacteristics();
                    n && Z.setBackgroundColor((0, i.wG)(n)), Z.setRotation(l), d && Z.setCaptions({
                        normal: d
                    }), r && Z.setBorderColor((0, i.wG)(r));
                    var x = m.getOrCreateBorderStyle();
                    if (void 0 !== c && x.setWidth(c), m.setFlagTo(a.TV.Print, !0), m.setFlagTo(a.TV.Hidden, g), m.setFlagTo(a.TV.Invisible, !1), o) {
                        var S = (null !== (e = this.acroField.getDefaultAppearance()) && void 0 !== e ? e : "") + "\n" + (0, i.l6)(o).toString();
                        this.acroField.setDefaultAppearance(S)
                    }
                    return m
                }, t.prototype.updateWidgetAppearanceWithFont = function(t, e, o) {
                    var n = o.normal,
                        r = o.rollover,
                        i = o.down;
                    this.updateWidgetAppearances(t, {
                        normal: this.createAppearanceStream(t, n, e),
                        rollover: r && this.createAppearanceStream(t, r, e),
                        down: i && this.createAppearanceStream(t, i, e)
                    })
                }, t.prototype.updateOnOffWidgetAppearance = function(t, e, o) {
                    var n = o.normal,
                        r = o.rollover,
                        i = o.down;
                    this.updateWidgetAppearances(t, {
                        normal: this.createAppearanceDict(t, n, e),
                        rollover: r && this.createAppearanceDict(t, r, e),
                        down: i && this.createAppearanceDict(t, i, e)
                    })
                }, t.prototype.updateWidgetAppearances = function(t, e) {
                    var o = e.normal,
                        n = e.rollover,
                        r = e.down;
                    t.setNormalAppearance(o), n ? t.setRolloverAppearance(n) : t.removeRolloverAppearance(), r ? t.setDownAppearance(r) : t.removeDownAppearance()
                }, t.prototype.createAppearanceStream = function(t, e, o) {
                    var n, r = this.acroField.dict.context,
                        i = t.getRectangle(),
                        s = i.width,
                        a = i.height,
                        u = o && {
                            Font: (n = {}, n[o.name] = o.ref, n)
                        },
                        c = r.formXObject(e, {
                            Resources: u,
                            BBox: r.obj([0, 0, s, a]),
                            Matrix: r.obj([1, 0, 0, 1, 0, 0])
                        });
                    return r.register(c)
                }, t.prototype.createImageAppearanceStream = function(t, e, o) {
                    var r, i, a = this.acroField.dict.context,
                        u = t.getRectangle(),
                        d = t.getAppearanceCharacteristics(),
                        h = t.getBorderStyle(),
                        f = null !== (i = null === h || void 0 === h ? void 0 : h.getWidth()) && void 0 !== i ? i : 0,
                        p = (0, s.U6)(null === d || void 0 === d ? void 0 : d.getRotation()),
                        v = (0, l.kc)((0, n.pi)((0, n.pi)({}, u), {
                            rotation: p
                        })),
                        g = (0, s.bY)(u, p),
                        y = e.scaleToFit(g.width - 2 * f, g.height - 2 * f),
                        m = {
                            x: f,
                            y: f,
                            width: y.width,
                            height: y.height,
                            rotate: (0, s.RW)(0),
                            xSkew: (0, s.RW)(0),
                            ySkew: (0, s.RW)(0)
                        };
                    o === c.C.Center ? (m.x += (g.width - 2 * f) / 2 - y.width / 2, m.y += (g.height - 2 * f) / 2 - y.height / 2) : o === c.C.Right && (m.x = g.width - f - y.width, m.y = g.height - f - y.height);
                    var b = this.doc.context.addRandomSuffix("Image", 10),
                        Z = (0, n.pr)(v, (0, l.AE)(b, m)),
                        x = {
                            XObject: (r = {}, r[b] = e.ref, r)
                        },
                        S = a.formXObject(Z, {
                            Resources: x,
                            BBox: a.obj([0, 0, u.width, u.height]),
                            Matrix: a.obj([1, 0, 0, 1, 0, 0])
                        });
                    return a.register(S)
                }, t.prototype.createAppearanceDict = function(t, e, o) {
                    var n = this.acroField.dict.context,
                        r = this.createAppearanceStream(t, e.on),
                        i = this.createAppearanceStream(t, e.off),
                        s = n.obj({});
                    return s.set(o, r), s.set(a.wQ.of("Off"), i), s
                }, t
            }()
        },
        98418: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => b
            });
            var n = o(570655),
                r = o(835966),
                i = o(887685),
                s = o(124313),
                a = o(14671),
                u = o(798785),
                c = o(919462),
                l = o(283217),
                d = o(372613),
                h = o(934755),
                f = o(946013),
                p = o(945893),
                v = o(981806),
                g = o(350486),
                y = o(509958),
                m = o(451441);
            const b = function() {
                function t(t, e) {
                    var o = this;
                    this.embedDefaultFont = function() {
                        return o.doc.embedStandardFont(p.E.Helvetica)
                    }, (0, m.ku)(t, "acroForm", [
                        [y.PS, "PDFAcroForm"]
                    ]), (0, m.ku)(e, "doc", [
                        [r.Z, "PDFDocument"]
                    ]), this.acroForm = t, this.doc = e, this.dirtyFields = new Set, this.defaultFontCache = m.Ct.populatedBy(this.embedDefaultFont)
                }
                return t.prototype.hasXFA = function() {
                    return this.acroForm.dict.has(y.wQ.of("XFA"))
                }, t.prototype.deleteXFA = function() {
                    this.acroForm.dict.delete(y.wQ.of("XFA"))
                }, t.prototype.getFields = function() {
                    for (var t = this.acroForm.getAllFields(), e = [], o = 0, n = t.length; o < n; o++) {
                        var r = t[o],
                            i = r[0],
                            s = r[1],
                            a = Z(i, s, this.doc);
                        a && e.push(a)
                    }
                    return e
                }, t.prototype.getFieldMaybe = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    for (var e = this.getFields(), o = 0, n = e.length; o < n; o++) {
                        var r = e[o];
                        if (r.getName() === t) return r
                    }
                }, t.prototype.getField = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = this.getFieldMaybe(t);
                    if (e) return e;
                    throw new h.wx(t)
                }, t.prototype.getButton = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = this.getField(t);
                    if (e instanceof i.Z) return e;
                    throw new h.VV(t, i.Z, e)
                }, t.prototype.getCheckBox = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = this.getField(t);
                    if (e instanceof s.Z) return e;
                    throw new h.VV(t, s.Z, e)
                }, t.prototype.getDropdown = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = this.getField(t);
                    if (e instanceof a.Z) return e;
                    throw new h.VV(t, a.Z, e)
                }, t.prototype.getOptionList = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = this.getField(t);
                    if (e instanceof u.Z) return e;
                    throw new h.VV(t, u.Z, e)
                }, t.prototype.getRadioGroup = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = this.getField(t);
                    if (e instanceof c.Z) return e;
                    throw new h.VV(t, c.Z, e)
                }, t.prototype.getSignature = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = this.getField(t);
                    if (e instanceof l.Z) return e;
                    throw new h.VV(t, l.Z, e)
                }, t.prototype.getTextField = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = this.getField(t);
                    if (e instanceof d.Z) return e;
                    throw new h.VV(t, d.Z, e)
                }, t.prototype.createButton = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = x(t),
                        o = this.findOrCreateNonTerminals(e.nonTerminal),
                        n = y._.create(this.doc.context);
                    return n.setPartialName(e.terminal), S(o, [n, n.ref], e.terminal), i.Z.of(n, n.ref, this.doc)
                }, t.prototype.createCheckBox = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = x(t),
                        o = this.findOrCreateNonTerminals(e.nonTerminal),
                        n = y.Ei.create(this.doc.context);
                    return n.setPartialName(e.terminal), S(o, [n, n.ref], e.terminal), s.Z.of(n, n.ref, this.doc)
                }, t.prototype.createDropdown = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = x(t),
                        o = this.findOrCreateNonTerminals(e.nonTerminal),
                        n = y.sS.create(this.doc.context);
                    return n.setPartialName(e.terminal), S(o, [n, n.ref], e.terminal), a.Z.of(n, n.ref, this.doc)
                }, t.prototype.createOptionList = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = x(t),
                        o = this.findOrCreateNonTerminals(e.nonTerminal),
                        n = y.Au.create(this.doc.context);
                    return n.setPartialName(e.terminal), S(o, [n, n.ref], e.terminal), u.Z.of(n, n.ref, this.doc)
                }, t.prototype.createRadioGroup = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = x(t),
                        o = this.findOrCreateNonTerminals(e.nonTerminal),
                        n = y.Ym.create(this.doc.context);
                    return n.setPartialName(e.terminal), S(o, [n, n.ref], e.terminal), c.Z.of(n, n.ref, this.doc)
                }, t.prototype.createTextField = function(t) {
                    (0, m.ku)(t, "name", ["string"]);
                    var e = x(t),
                        o = this.findOrCreateNonTerminals(e.nonTerminal),
                        n = y._X.create(this.doc.context);
                    return n.setPartialName(e.terminal), S(o, [n, n.ref], e.terminal), d.Z.of(n, n.ref, this.doc)
                }, t.prototype.flatten = function(t) {
                    void 0 === t && (t = {
                        updateFieldAppearances: !0
                    }), t.updateFieldAppearances && this.updateFieldAppearances();
                    for (var e = this.getFields(), o = 0, r = e.length; o < r; o++) {
                        for (var i = e[o], s = i.acroField.getWidgets(), a = 0, u = s.length; a < u; a++) {
                            var c = s[a],
                                l = this.findWidgetPage(c),
                                d = this.findWidgetAppearanceRef(i, c),
                                h = l.node.newXObject("FlatWidget", d),
                                f = c.getRectangle(),
                                p = (0, n.pr)([(0, g.bo)(), (0, g.Iu)(f.x, f.y)], (0, v.kc)((0, n.pi)((0, n.pi)({}, f), {
                                    rotation: 0
                                })), [(0, g.Ax)(h), (0, g.Pq)()]).filter(Boolean);
                            l.pushOperators.apply(l, p)
                        }
                        this.removeField(i)
                    }
                }, t.prototype.removeField = function(t) {
                    for (var e = t.acroField.getWidgets(), o = new Set, n = 0, r = e.length; n < r; n++) {
                        var i = e[n],
                            s = this.findWidgetAppearanceRef(t, i),
                            a = this.findWidgetPage(i);
                        o.add(a), a.node.removeAnnot(s)
                    }
                    o.forEach((function(e) {
                        return e.node.removeAnnot(t.ref)
                    })), this.acroForm.removeField(t.acroField);
                    for (var u = t.acroField.normalizedEntries().Kids, c = u.size(), l = 0; l < c; l++) {
                        var d = u.get(l);
                        d instanceof y.$F && this.doc.context.delete(d)
                    }
                    this.doc.context.delete(t.ref)
                }, t.prototype.updateFieldAppearances = function(t) {
                    (0, m.MU)(t, "font", [
                        [f.Z, "PDFFont"]
                    ]), t = null !== t && void 0 !== t ? t : this.getDefaultFont();
                    for (var e = this.getFields(), o = 0, n = e.length; o < n; o++) {
                        var r = e[o];
                        r.needsAppearancesUpdate() && r.defaultUpdateAppearances(t)
                    }
                }, t.prototype.markFieldAsDirty = function(t) {
                    (0, m.MU)(t, "fieldRef", [
                        [y.$F, "PDFRef"]
                    ]), this.dirtyFields.add(t)
                }, t.prototype.markFieldAsClean = function(t) {
                    (0, m.MU)(t, "fieldRef", [
                        [y.$F, "PDFRef"]
                    ]), this.dirtyFields.delete(t)
                }, t.prototype.fieldIsDirty = function(t) {
                    return (0, m.MU)(t, "fieldRef", [
                        [y.$F, "PDFRef"]
                    ]), this.dirtyFields.has(t)
                }, t.prototype.getDefaultFont = function() {
                    return this.defaultFontCache.access()
                }, t.prototype.findWidgetPage = function(t) {
                    var e = t.P(),
                        o = this.doc.getPages().find((function(t) {
                            return t.ref === e
                        }));
                    if (void 0 === o) {
                        var n = this.doc.context.getObjectRef(t.dict);
                        if (void 0 === n) throw new Error("Could not find PDFRef for PDFObject");
                        if (void 0 === (o = this.doc.findPageForAnnotationRef(n))) throw new Error("Could not find page for PDFRef " + n)
                    }
                    return o
                }, t.prototype.findWidgetAppearanceRef = function(t, e) {
                    var o, n = e.getNormalAppearance();
                    if (n instanceof y.mh && (t instanceof s.Z || t instanceof c.Z)) {
                        var r = t.acroField.getValue(),
                            i = null !== (o = n.get(r)) && void 0 !== o ? o : n.get(y.wQ.of("Off"));
                        i instanceof y.$F && (n = i)
                    }
                    if (!(n instanceof y.$F)) {
                        var a = t.getName();
                        throw new Error("Failed to extract appearance ref for: " + a)
                    }
                    return n
                }, t.prototype.findOrCreateNonTerminals = function(t) {
                    for (var e = [this.acroForm], o = 0, n = t.length; o < n; o++) {
                        var r = t[o];
                        if (!r) throw new h.Ic(r);
                        var i = e[0],
                            s = e[1],
                            a = this.findNonTerminal(r, i);
                        if (a) e = a;
                        else {
                            var u = y.qg.create(this.doc.context);
                            u.setPartialName(r), u.setParent(s);
                            var c = this.doc.context.register(u.dict);
                            i.addField(c), e = [u, c]
                        }
                    }
                    return e
                }, t.prototype.findNonTerminal = function(t, e) {
                    for (var o = e instanceof y.PS ? this.acroForm.getFields() : (0, y.P_)(e.Kids()), n = 0, r = o.length; n < r; n++) {
                        var i = o[n],
                            s = i[0],
                            a = i[1];
                        if (s.getPartialName() === t) {
                            if (s instanceof y.qg) return [s, a];
                            throw new h.MY(t)
                        }
                    }
                }, t.of = function(e, o) {
                    return new t(e, o)
                }, t
            }();
            var Z = function(t, e, o) {
                    return t instanceof y._ ? i.Z.of(t, e, o) : t instanceof y.Ei ? s.Z.of(t, e, o) : t instanceof y.sS ? a.Z.of(t, e, o) : t instanceof y.Au ? u.Z.of(t, e, o) : t instanceof y._X ? d.Z.of(t, e, o) : t instanceof y.Ym ? c.Z.of(t, e, o) : t instanceof y.uQ ? l.Z.of(t, e, o) : void 0
                },
                x = function(t) {
                    if (0 === t.length) throw new Error("PDF field names must not be empty strings");
                    for (var e = t.split("."), o = 0, n = e.length; o < n; o++)
                        if ("" === e[o]) throw new Error('Periods in PDF field names must be separated by at least one character: "' + t + '"');
                    return 1 === e.length ? {
                        nonTerminal: [],
                        terminal: e[0]
                    } : {
                        nonTerminal: e.slice(0, e.length - 1),
                        terminal: e[e.length - 1]
                    }
                },
                S = function(t, e, o) {
                    for (var n = t[0], r = t[1], i = e[0], s = e[1], a = n.normalizedEntries(), u = ((0, y.P_)("Kids" in a ? a.Kids : a.Fields)), c = 0, l = u.length; c < l; c++)
                        if (u[c][0].getPartialName() === o) throw new h.MY(o);
                    n.addField(s), i.setParent(r)
                }
        },
        798785: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => h
            });
            var n = o(570655),
                r = o(874087),
                i = o(946013),
                s = o(403358),
                a = o(98163),
                u = o(80985),
                c = o(115733),
                l = o(509958),
                d = o(451441);
            const h = function(t) {
                function e(e, o, n) {
                    var r = t.call(this, e, o, n) || this;
                    return (0, d.ku)(e, "acroListBox", [
                        [l.Au, "PDFAcroListBox"]
                    ]), r.acroField = e, r
                }
                return (0, n.ZT)(e, t), e.prototype.getOptions = function() {
                    for (var t = this.acroField.getOptions(), e = new Array(t.length), o = 0, n = e.length; o < n; o++) {
                        var r = t[o],
                            i = r.display,
                            s = r.value;
                        e[o] = (null !== i && void 0 !== i ? i : s).decodeText()
                    }
                    return e
                }, e.prototype.getSelected = function() {
                    for (var t = this.acroField.getValues(), e = new Array(t.length), o = 0, n = t.length; o < n; o++) e[o] = t[o].decodeText();
                    return e
                }, e.prototype.setOptions = function(t) {
                    (0, d.ku)(t, "options", [Array]), this.markAsDirty();
                    for (var e = new Array(t.length), o = 0, n = t.length; o < n; o++) e[o] = {
                        value: l.Ij.fromText(t[o])
                    };
                    this.acroField.setOptions(e)
                }, e.prototype.addOptions = function(t) {
                    (0, d.ku)(t, "options", ["string", Array]), this.markAsDirty();
                    for (var e = Array.isArray(t) ? t : [t], o = this.acroField.getOptions(), n = new Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = {
                        value: l.Ij.fromText(e[r])
                    };
                    this.acroField.setOptions(o.concat(n))
                }, e.prototype.select = function(t, e) {
                    void 0 === e && (e = !1), (0, d.ku)(t, "options", ["string", Array]), (0, d.ku)(e, "merge", ["boolean"]);
                    var o = Array.isArray(t) ? t : [t],
                        n = this.getOptions();
                    (0, d.k$)(o, "option", n), this.markAsDirty(), (o.length > 1 || 1 === o.length && e) && this.enableMultiselect();
                    for (var r = new Array(o.length), i = 0, s = o.length; i < s; i++) r[i] = l.Ij.fromText(o[i]);
                    if (e) {
                        var a = this.acroField.getValues();
                        this.acroField.setValues(a.concat(r))
                    } else this.acroField.setValues(r)
                }, e.prototype.clear = function() {
                    this.markAsDirty(), this.acroField.setValues([])
                }, e.prototype.setFontSize = function(t) {
                    (0, d.z7)(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty()
                }, e.prototype.isSorted = function() {
                    return this.acroField.hasFlag(l.m0.Sort)
                }, e.prototype.enableSorting = function() {
                    this.acroField.setFlagTo(l.m0.Sort, !0)
                }, e.prototype.disableSorting = function() {
                    this.acroField.setFlagTo(l.m0.Sort, !1)
                }, e.prototype.isMultiselect = function() {
                    return this.acroField.hasFlag(l.m0.MultiSelect)
                }, e.prototype.enableMultiselect = function() {
                    this.acroField.setFlagTo(l.m0.MultiSelect, !0)
                }, e.prototype.disableMultiselect = function() {
                    this.acroField.setFlagTo(l.m0.MultiSelect, !1)
                }, e.prototype.isSelectOnClick = function() {
                    return this.acroField.hasFlag(l.m0.CommitOnSelChange)
                }, e.prototype.enableSelectOnClick = function() {
                    this.acroField.setFlagTo(l.m0.CommitOnSelChange, !0)
                }, e.prototype.disableSelectOnClick = function() {
                    this.acroField.setFlagTo(l.m0.CommitOnSelChange, !1)
                }, e.prototype.addToPage = function(t, e) {
                    var o, n, i, a, l, h, f;
                    (0, d.ku)(t, "page", [
                        [r.Z, "PDFPage"]
                    ]), (0, s.b)(e), e || (e = {}), "textColor" in e || (e.textColor = (0, u.B8)(0, 0, 0)), "backgroundColor" in e || (e.backgroundColor = (0, u.B8)(1, 1, 1)), "borderColor" in e || (e.borderColor = (0, u.B8)(0, 0, 0)), "borderWidth" in e || (e.borderWidth = 1);
                    var p = this.createWidget({
                            x: null !== (o = e.x) && void 0 !== o ? o : 0,
                            y: null !== (n = e.y) && void 0 !== n ? n : 0,
                            width: null !== (i = e.width) && void 0 !== i ? i : 200,
                            height: null !== (a = e.height) && void 0 !== a ? a : 100,
                            textColor: e.textColor,
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: null !== (l = e.borderWidth) && void 0 !== l ? l : 0,
                            rotate: null !== (h = e.rotate) && void 0 !== h ? h : (0, c.RW)(0),
                            hidden: e.hidden,
                            page: t.ref
                        }),
                        v = this.doc.context.register(p.dict);
                    this.acroField.addWidget(v);
                    var g = null !== (f = e.font) && void 0 !== f ? f : this.doc.getForm().getDefaultFont();
                    this.updateWidgetAppearance(p, g), t.node.addAnnot(v)
                }, e.prototype.needsAppearancesUpdate = function() {
                    var t;
                    if (this.isDirty()) return !0;
                    for (var e = this.acroField.getWidgets(), o = 0, n = e.length; o < n; o++) {
                        if (!((null === (t = e[o].getAppearances()) || void 0 === t ? void 0 : t.normal) instanceof l.kO)) return !0
                    }
                    return !1
                }, e.prototype.defaultUpdateAppearances = function(t) {
                    (0, d.ku)(t, "font", [
                        [i.Z, "PDFFont"]
                    ]), this.updateAppearances(t)
                }, e.prototype.updateAppearances = function(t, e) {
                    (0, d.ku)(t, "font", [
                        [i.Z, "PDFFont"]
                    ]), (0, d.MU)(e, "provider", [Function]);
                    for (var o = this.acroField.getWidgets(), n = 0, r = o.length; n < r; n++) {
                        var s = o[n];
                        this.updateWidgetAppearance(s, t, e)
                    }
                    this.markAsClean()
                }, e.prototype.updateWidgetAppearance = function(t, e, o) {
                    var n = null !== o && void 0 !== o ? o : a.E3,
                        r = (0, a.TE)(n(this, t, e));
                    this.updateWidgetAppearanceWithFont(t, e, r)
                }, e.of = function(t, o, n) {
                    return new e(t, o, n)
                }, e
            }(s.Z)
        },
        919462: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => d
            });
            var n = o(570655),
                r = o(874087),
                i = o(403358),
                s = o(98163),
                a = o(80985),
                u = o(115733),
                c = o(509958),
                l = o(451441);
            const d = function(t) {
                function e(e, o, n) {
                    var r = t.call(this, e, o, n) || this;
                    return (0, l.ku)(e, "acroRadioButton", [
                        [c.Ym, "PDFAcroRadioButton"]
                    ]), r.acroField = e, r
                }
                return (0, n.ZT)(e, t), e.prototype.getOptions = function() {
                    var t = this.acroField.getExportValues();
                    if (t) {
                        for (var e = new Array(t.length), o = 0, n = t.length; o < n; o++) e[o] = t[o].decodeText();
                        return e
                    }
                    var r = this.acroField.getOnValues(),
                        i = new Array(r.length);
                    for (o = 0, n = i.length; o < n; o++) i[o] = r[o].decodeText();
                    return i
                }, e.prototype.getSelected = function() {
                    var t = this.acroField.getValue();
                    if (t !== c.wQ.of("Off")) {
                        var e = this.acroField.getExportValues();
                        if (e)
                            for (var o = this.acroField.getOnValues(), n = 0, r = o.length; n < r; n++)
                                if (o[n] === t) return e[n].decodeText();
                        return t.decodeText()
                    }
                }, e.prototype.select = function(t) {
                    (0, l.ku)(t, "option", ["string"]);
                    var e = this.getOptions();
                    (0, l.DA)(t, "option", e), this.markAsDirty();
                    var o = this.acroField.getOnValues(),
                        n = this.acroField.getExportValues();
                    if (n)
                        for (var r = 0, i = n.length; r < i; r++) n[r].decodeText() === t && this.acroField.setValue(o[r]);
                    else
                        for (r = 0, i = o.length; r < i; r++) {
                            var s = o[r];
                            s.decodeText() === t && this.acroField.setValue(s)
                        }
                }, e.prototype.clear = function() {
                    this.markAsDirty(), this.acroField.setValue(c.wQ.of("Off"))
                }, e.prototype.isOffToggleable = function() {
                    return !this.acroField.hasFlag(c.Ub.NoToggleToOff)
                }, e.prototype.enableOffToggling = function() {
                    this.acroField.setFlagTo(c.Ub.NoToggleToOff, !1)
                }, e.prototype.disableOffToggling = function() {
                    this.acroField.setFlagTo(c.Ub.NoToggleToOff, !0)
                }, e.prototype.isMutuallyExclusive = function() {
                    return !this.acroField.hasFlag(c.Ub.RadiosInUnison)
                }, e.prototype.enableMutualExclusion = function() {
                    this.acroField.setFlagTo(c.Ub.RadiosInUnison, !1)
                }, e.prototype.disableMutualExclusion = function() {
                    this.acroField.setFlagTo(c.Ub.RadiosInUnison, !0)
                }, e.prototype.addOptionToPage = function(t, e, o) {
                    var n, s, d, h, f, p, v, g, y;
                    (0, l.ku)(t, "option", ["string"]), (0, l.ku)(e, "page", [
                        [r.Z, "PDFPage"]
                    ]), (0, i.b)(o);
                    var m = this.createWidget({
                            x: null !== (n = null === o || void 0 === o ? void 0 : o.x) && void 0 !== n ? n : 0,
                            y: null !== (s = null === o || void 0 === o ? void 0 : o.y) && void 0 !== s ? s : 0,
                            width: null !== (d = null === o || void 0 === o ? void 0 : o.width) && void 0 !== d ? d : 50,
                            height: null !== (h = null === o || void 0 === o ? void 0 : o.height) && void 0 !== h ? h : 50,
                            textColor: null !== (f = null === o || void 0 === o ? void 0 : o.textColor) && void 0 !== f ? f : (0, a.B8)(0, 0, 0),
                            backgroundColor: null !== (p = null === o || void 0 === o ? void 0 : o.backgroundColor) && void 0 !== p ? p : (0, a.B8)(1, 1, 1),
                            borderColor: null !== (v = null === o || void 0 === o ? void 0 : o.borderColor) && void 0 !== v ? v : (0, a.B8)(0, 0, 0),
                            borderWidth: null !== (g = null === o || void 0 === o ? void 0 : o.borderWidth) && void 0 !== g ? g : 1,
                            rotate: null !== (y = null === o || void 0 === o ? void 0 : o.rotate) && void 0 !== y ? y : (0, u.RW)(0),
                            hidden: null === o || void 0 === o ? void 0 : o.hidden,
                            page: e.ref
                        }),
                        b = this.doc.context.register(m.dict),
                        Z = this.acroField.addWidgetWithOpt(b, c.Ij.fromText(t), !this.isMutuallyExclusive());
                    m.setAppearanceState(c.wQ.of("Off")), this.updateWidgetAppearance(m, Z), e.node.addAnnot(b)
                }, e.prototype.needsAppearancesUpdate = function() {
                    for (var t, e = this.acroField.getWidgets(), o = 0, n = e.length; o < n; o++) {
                        var r = e[o],
                            i = r.getAppearanceState(),
                            s = null === (t = r.getAppearances()) || void 0 === t ? void 0 : t.normal;
                        if (!(s instanceof c.mh)) return !0;
                        if (i && !s.has(i)) return !0
                    }
                    return !1
                }, e.prototype.defaultUpdateAppearances = function() {
                    this.updateAppearances()
                }, e.prototype.updateAppearances = function(t) {
                    (0, l.MU)(t, "provider", [Function]);
                    for (var e = this.acroField.getWidgets(), o = 0, n = e.length; o < n; o++) {
                        var r = e[o],
                            i = r.getOnValue();
                        i && this.updateWidgetAppearance(r, i, t)
                    }
                }, e.prototype.updateWidgetAppearance = function(t, e, o) {
                    var n = null !== o && void 0 !== o ? o : s.gi,
                        r = (0, s.TE)(n(this, t));
                    this.updateOnOffWidgetAppearance(t, e, r)
                }, e.of = function(t, o, n) {
                    return new e(t, o, n)
                }, e
            }(i.Z)
        },
        283217: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => a
            });
            var n = o(570655),
                r = o(403358),
                i = o(509958),
                s = o(451441);
            const a = function(t) {
                function e(e, o, n) {
                    var r = t.call(this, e, o, n) || this;
                    return (0, s.ku)(e, "acroSignature", [
                        [i.uQ, "PDFAcroSignature"]
                    ]), r.acroField = e, r
                }
                return (0, n.ZT)(e, t), e.prototype.needsAppearancesUpdate = function() {
                    return !1
                }, e.of = function(t, o, n) {
                    return new e(t, o, n)
                }, e
            }(r.Z)
        },
        372613: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => v
            });
            var n = o(570655),
                r = o(874087),
                i = o(946013),
                s = o(403358),
                a = o(98163),
                u = o(80985),
                c = o(115733),
                l = o(934755),
                d = o(611828),
                h = o(686719),
                f = o(509958),
                p = o(451441);
            const v = function(t) {
                function e(e, o, n) {
                    var r = t.call(this, e, o, n) || this;
                    return (0, p.ku)(e, "acroText", [
                        [f._X, "PDFAcroText"]
                    ]), r.acroField = e, r
                }
                return (0, n.ZT)(e, t), e.prototype.getText = function() {
                    var t = this.acroField.getValue();
                    if (!t && this.isRichFormatted()) throw new l.E9(this.getName());
                    return null === t || void 0 === t ? void 0 : t.decodeText()
                }, e.prototype.setText = function(t) {
                    (0, p.MU)(t, "text", ["string"]);
                    var e = this.getMaxLength();
                    if (void 0 !== e && t && t.length > e) throw new l.uo(t.length, e, this.getName());
                    this.markAsDirty(), this.disableRichFormatting(), t ? this.acroField.setValue(f.Ij.fromText(t)) : this.acroField.removeValue()
                }, e.prototype.getAlignment = function() {
                    var t = this.acroField.getQuadding();
                    return 0 === t ? h.H.Left : 1 === t ? h.H.Center : 2 === t ? h.H.Right : h.H.Left
                }, e.prototype.setAlignment = function(t) {
                    (0, p.DA)(t, "alignment", h.H), this.markAsDirty(), this.acroField.setQuadding(t)
                }, e.prototype.getMaxLength = function() {
                    return this.acroField.getMaxLength()
                }, e.prototype.setMaxLength = function(t) {
                    if ((0, p.zo)(t, "maxLength", 0, Number.MAX_SAFE_INTEGER), this.markAsDirty(), void 0 === t) this.acroField.removeMaxLength();
                    else {
                        var e = this.getText();
                        if (e && e.length > t) throw new l._D(e.length, t, this.getName());
                        this.acroField.setMaxLength(t)
                    }
                }, e.prototype.removeMaxLength = function() {
                    this.markAsDirty(), this.acroField.removeMaxLength()
                }, e.prototype.setImage = function(t) {
                    for (var e = this.getAlignment(), o = e === h.H.Center ? d.C.Center : e === h.H.Right ? d.C.Right : d.C.Left, n = this.acroField.getWidgets(), r = 0, i = n.length; r < i; r++) {
                        var s = n[r],
                            a = this.createImageAppearanceStream(s, t, o);
                        this.updateWidgetAppearances(s, {
                            normal: a
                        })
                    }
                    this.markAsClean()
                }, e.prototype.setFontSize = function(t) {
                    (0, p.z7)(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty()
                }, e.prototype.isMultiline = function() {
                    return this.acroField.hasFlag(f.oD.Multiline)
                }, e.prototype.enableMultiline = function() {
                    this.markAsDirty(), this.acroField.setFlagTo(f.oD.Multiline, !0)
                }, e.prototype.disableMultiline = function() {
                    this.markAsDirty(), this.acroField.setFlagTo(f.oD.Multiline, !1)
                }, e.prototype.isPassword = function() {
                    return this.acroField.hasFlag(f.oD.Password)
                }, e.prototype.enablePassword = function() {
                    this.acroField.setFlagTo(f.oD.Password, !0)
                }, e.prototype.disablePassword = function() {
                    this.acroField.setFlagTo(f.oD.Password, !1)
                }, e.prototype.isFileSelector = function() {
                    return this.acroField.hasFlag(f.oD.FileSelect)
                }, e.prototype.enableFileSelection = function() {
                    this.acroField.setFlagTo(f.oD.FileSelect, !0)
                }, e.prototype.disableFileSelection = function() {
                    this.acroField.setFlagTo(f.oD.FileSelect, !1)
                }, e.prototype.isSpellChecked = function() {
                    return !this.acroField.hasFlag(f.oD.DoNotSpellCheck)
                }, e.prototype.enableSpellChecking = function() {
                    this.acroField.setFlagTo(f.oD.DoNotSpellCheck, !1)
                }, e.prototype.disableSpellChecking = function() {
                    this.acroField.setFlagTo(f.oD.DoNotSpellCheck, !0)
                }, e.prototype.isScrollable = function() {
                    return !this.acroField.hasFlag(f.oD.DoNotScroll)
                }, e.prototype.enableScrolling = function() {
                    this.acroField.setFlagTo(f.oD.DoNotScroll, !1)
                }, e.prototype.disableScrolling = function() {
                    this.acroField.setFlagTo(f.oD.DoNotScroll, !0)
                }, e.prototype.isCombed = function() {
                    return this.acroField.hasFlag(f.oD.Comb) && !this.isMultiline() && !this.isPassword() && !this.isFileSelector() && void 0 !== this.getMaxLength()
                }, e.prototype.enableCombing = function() {
                    if (void 0 === this.getMaxLength()) {
                        console.warn("PDFTextFields must have a max length in order to be combed")
                    }
                    this.markAsDirty(), this.disableMultiline(), this.disablePassword(), this.disableFileSelection(), this.acroField.setFlagTo(f.oD.Comb, !0)
                }, e.prototype.disableCombing = function() {
                    this.markAsDirty(), this.acroField.setFlagTo(f.oD.Comb, !1)
                }, e.prototype.isRichFormatted = function() {
                    return this.acroField.hasFlag(f.oD.RichText)
                }, e.prototype.enableRichFormatting = function() {
                    this.acroField.setFlagTo(f.oD.RichText, !0)
                }, e.prototype.disableRichFormatting = function() {
                    this.acroField.setFlagTo(f.oD.RichText, !1)
                }, e.prototype.addToPage = function(t, e) {
                    var o, n, i, a, l, d, h;
                    (0, p.ku)(t, "page", [
                        [r.Z, "PDFPage"]
                    ]), (0, s.b)(e), e || (e = {}), "textColor" in e || (e.textColor = (0, u.B8)(0, 0, 0)), "backgroundColor" in e || (e.backgroundColor = (0, u.B8)(1, 1, 1)), "borderColor" in e || (e.borderColor = (0, u.B8)(0, 0, 0)), "borderWidth" in e || (e.borderWidth = 1);
                    var f = this.createWidget({
                            x: null !== (o = e.x) && void 0 !== o ? o : 0,
                            y: null !== (n = e.y) && void 0 !== n ? n : 0,
                            width: null !== (i = e.width) && void 0 !== i ? i : 200,
                            height: null !== (a = e.height) && void 0 !== a ? a : 50,
                            textColor: e.textColor,
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: null !== (l = e.borderWidth) && void 0 !== l ? l : 0,
                            rotate: null !== (d = e.rotate) && void 0 !== d ? d : (0, c.RW)(0),
                            hidden: e.hidden,
                            page: t.ref
                        }),
                        v = this.doc.context.register(f.dict);
                    this.acroField.addWidget(v);
                    var g = null !== (h = e.font) && void 0 !== h ? h : this.doc.getForm().getDefaultFont();
                    this.updateWidgetAppearance(f, g), t.node.addAnnot(v)
                }, e.prototype.needsAppearancesUpdate = function() {
                    var t;
                    if (this.isDirty()) return !0;
                    for (var e = this.acroField.getWidgets(), o = 0, n = e.length; o < n; o++) {
                        if (!((null === (t = e[o].getAppearances()) || void 0 === t ? void 0 : t.normal) instanceof f.kO)) return !0
                    }
                    return !1
                }, e.prototype.defaultUpdateAppearances = function(t) {
                    (0, p.ku)(t, "font", [
                        [i.Z, "PDFFont"]
                    ]), this.updateAppearances(t)
                }, e.prototype.updateAppearances = function(t, e) {
                    (0, p.ku)(t, "font", [
                        [i.Z, "PDFFont"]
                    ]), (0, p.MU)(e, "provider", [Function]);
                    for (var o = this.acroField.getWidgets(), n = 0, r = o.length; n < r; n++) {
                        var s = o[n];
                        this.updateWidgetAppearance(s, t, e)
                    }
                    this.markAsClean()
                }, e.prototype.updateWidgetAppearance = function(t, e, o) {
                    var n = null !== o && void 0 !== o ? o : a.HN,
                        r = (0, a.TE)(n(this, t, e));
                    this.updateWidgetAppearanceWithFont(t, e, r)
                }, e.of = function(t, o, n) {
                    return new e(t, o, n)
                }, e
            }(s.Z)
        },
        98163: (t, e, o) => {
            "use strict";
            o.d(e, {
                DS: () => b,
                E3: () => S,
                HN: () => Z,
                S8: () => y,
                TE: () => d,
                gi: () => m,
                oX: () => x
            });
            var n = o(570655),
                r = o(981806),
                i = o(80985),
                s = o(115733),
                a = o(488329),
                u = o(686719),
                c = o(350486),
                l = o(451441),
                d = function(t) {
                    return "normal" in t ? t : {
                        normal: t
                    }
                },
                h = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/,
                f = function(t) {
                    var e, o, n = null !== (e = t.getDefaultAppearance()) && void 0 !== e ? e : "",
                        r = null !== (o = (0, l.JZ)(n, h).match) && void 0 !== o ? o : [],
                        i = Number(r[2]);
                    return isFinite(i) ? i : void 0
                },
                p = /(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/,
                v = function(t) {
                    var e, o = null !== (e = t.getDefaultAppearance()) && void 0 !== e ? e : "",
                        n = (0, l.JZ)(o, p).match,
                        r = null !== n && void 0 !== n ? n : [],
                        s = r[1],
                        a = r[2],
                        u = r[3],
                        c = r[4],
                        d = r[5];
                    return "g" === d && s ? (0, i.se)(Number(s)) : "rg" === d && s && a && u ? (0, i.B8)(Number(s), Number(a), Number(u)) : "k" === d && s && a && u && c ? (0, i.Qn)(Number(s), Number(a), Number(u), Number(c)) : void 0
                },
                g = function(t, e, o, n) {
                    var r;
                    void 0 === n && (n = 0);
                    var s = [(0, i.l6)(e).toString(), (0, c.vE)(null !== (r = null === o || void 0 === o ? void 0 : o.name) && void 0 !== r ? r : "dummy__noop", n).toString()].join("\n");
                    t.setDefaultAppearance(s)
                },
                y = function(t, e) {
                    var o, a, u, c = v(e),
                        l = v(t.acroField),
                        d = e.getRectangle(),
                        h = e.getAppearanceCharacteristics(),
                        f = e.getBorderStyle(),
                        p = null !== (o = null === f || void 0 === f ? void 0 : f.getWidth()) && void 0 !== o ? o : 0,
                        y = (0, s.U6)(null === h || void 0 === h ? void 0 : h.getRotation()),
                        m = (0, s.bY)(d, y),
                        b = m.width,
                        Z = m.height,
                        x = (0, r.kc)((0, n.pi)((0, n.pi)({}, d), {
                            rotation: y
                        })),
                        S = (0, i.B8)(0, 0, 0),
                        w = null !== (a = (0, i.p4)(null === h || void 0 === h ? void 0 : h.getBorderColor())) && void 0 !== a ? a : S,
                        C = (0, i.p4)(null === h || void 0 === h ? void 0 : h.getBackgroundColor()),
                        F = (0, i.p4)(null === h || void 0 === h ? void 0 : h.getBackgroundColor(), .8),
                        k = null !== (u = null !== c && void 0 !== c ? c : l) && void 0 !== u ? u : S;
                    g(c ? e : t.acroField, k);
                    var A = {
                        x: 0 + p / 2,
                        y: 0 + p / 2,
                        width: b - p,
                        height: Z - p,
                        thickness: 1.5,
                        borderWidth: p,
                        borderColor: w,
                        markColor: k
                    };
                    return {
                        normal: {
                            on: (0, n.pr)(x, (0, r.lg)((0, n.pi)((0, n.pi)({}, A), {
                                color: C,
                                filled: !0
                            }))),
                            off: (0, n.pr)(x, (0, r.lg)((0, n.pi)((0, n.pi)({}, A), {
                                color: C,
                                filled: !1
                            })))
                        },
                        down: {
                            on: (0, n.pr)(x, (0, r.lg)((0, n.pi)((0, n.pi)({}, A), {
                                color: F,
                                filled: !0
                            }))),
                            off: (0, n.pr)(x, (0, r.lg)((0, n.pi)((0, n.pi)({}, A), {
                                color: F,
                                filled: !1
                            })))
                        }
                    }
                },
                m = function(t, e) {
                    var o, a, u, c = v(e),
                        l = v(t.acroField),
                        d = e.getRectangle(),
                        h = e.getAppearanceCharacteristics(),
                        f = e.getBorderStyle(),
                        p = null !== (o = null === f || void 0 === f ? void 0 : f.getWidth()) && void 0 !== o ? o : 0,
                        y = (0, s.U6)(null === h || void 0 === h ? void 0 : h.getRotation()),
                        m = (0, s.bY)(d, y),
                        b = m.width,
                        Z = m.height,
                        x = (0, r.kc)((0, n.pi)((0, n.pi)({}, d), {
                            rotation: y
                        })),
                        S = (0, i.B8)(0, 0, 0),
                        w = null !== (a = (0, i.p4)(null === h || void 0 === h ? void 0 : h.getBorderColor())) && void 0 !== a ? a : S,
                        C = (0, i.p4)(null === h || void 0 === h ? void 0 : h.getBackgroundColor()),
                        F = (0, i.p4)(null === h || void 0 === h ? void 0 : h.getBackgroundColor(), .8),
                        k = null !== (u = null !== c && void 0 !== c ? c : l) && void 0 !== u ? u : S;
                    g(c ? e : t.acroField, k);
                    var A = {
                        x: b / 2,
                        y: Z / 2,
                        width: b - p,
                        height: Z - p,
                        borderWidth: p,
                        borderColor: w,
                        dotColor: k
                    };
                    return {
                        normal: {
                            on: (0, n.pr)(x, (0, r.lt)((0, n.pi)((0, n.pi)({}, A), {
                                color: C,
                                filled: !0
                            }))),
                            off: (0, n.pr)(x, (0, r.lt)((0, n.pi)((0, n.pi)({}, A), {
                                color: C,
                                filled: !1
                            })))
                        },
                        down: {
                            on: (0, n.pr)(x, (0, r.lt)((0, n.pi)((0, n.pi)({}, A), {
                                color: F,
                                filled: !0
                            }))),
                            off: (0, n.pr)(x, (0, r.lt)((0, n.pi)((0, n.pi)({}, A), {
                                color: F,
                                filled: !1
                            })))
                        }
                    }
                },
                b = function(t, e, o) {
                    var c, l, d, h, p, y = v(e),
                        m = v(t.acroField),
                        b = f(e),
                        Z = f(t.acroField),
                        x = e.getRectangle(),
                        S = e.getAppearanceCharacteristics(),
                        w = e.getBorderStyle(),
                        C = null === S || void 0 === S ? void 0 : S.getCaptions(),
                        F = null !== (c = null === C || void 0 === C ? void 0 : C.normal) && void 0 !== c ? c : "",
                        k = null !== (d = null !== (l = null === C || void 0 === C ? void 0 : C.down) && void 0 !== l ? l : F) && void 0 !== d ? d : "",
                        A = null !== (h = null === w || void 0 === w ? void 0 : w.getWidth()) && void 0 !== h ? h : 0,
                        T = (0, s.U6)(null === S || void 0 === S ? void 0 : S.getRotation()),
                        D = (0, s.bY)(x, T),
                        P = D.width,
                        B = D.height,
                        O = (0, r.kc)((0, n.pi)((0, n.pi)({}, x), {
                            rotation: T
                        })),
                        N = (0, i.B8)(0, 0, 0),
                        I = (0, i.p4)(null === S || void 0 === S ? void 0 : S.getBorderColor()),
                        M = (0, i.p4)(null === S || void 0 === S ? void 0 : S.getBackgroundColor()),
                        R = (0, i.p4)(null === S || void 0 === S ? void 0 : S.getBackgroundColor(), .8),
                        j = {
                            x: A,
                            y: A,
                            width: P - 2 * A,
                            height: B - 2 * A
                        },
                        W = (0, a.v0)(F, {
                            alignment: u.H.Center,
                            fontSize: null !== b && void 0 !== b ? b : Z,
                            font: o,
                            bounds: j
                        }),
                        E = (0, a.v0)(k, {
                            alignment: u.H.Center,
                            fontSize: null !== b && void 0 !== b ? b : Z,
                            font: o,
                            bounds: j
                        }),
                        z = Math.min(W.fontSize, E.fontSize),
                        U = null !== (p = null !== y && void 0 !== y ? y : m) && void 0 !== p ? p : N;
                    g(y || void 0 !== b ? e : t.acroField, U, o, z);
                    var G = {
                        x: 0 + A / 2,
                        y: 0 + A / 2,
                        width: P - A,
                        height: B - A,
                        borderWidth: A,
                        borderColor: I,
                        textColor: U,
                        font: o.name,
                        fontSize: z
                    };
                    return {
                        normal: (0, n.pr)(O, (0, r.FC)((0, n.pi)((0, n.pi)({}, G), {
                            color: M,
                            textLines: [W.line]
                        }))),
                        down: (0, n.pr)(O, (0, r.FC)((0, n.pi)((0, n.pi)({}, G), {
                            color: R,
                            textLines: [E.line]
                        })))
                    }
                },
                Z = function(t, e, o) {
                    var u, c, l, d, h, p, y = v(e),
                        m = v(t.acroField),
                        b = f(e),
                        Z = f(t.acroField),
                        x = e.getRectangle(),
                        S = e.getAppearanceCharacteristics(),
                        w = e.getBorderStyle(),
                        C = null !== (u = t.getText()) && void 0 !== u ? u : "",
                        F = null !== (c = null === w || void 0 === w ? void 0 : w.getWidth()) && void 0 !== c ? c : 0,
                        k = (0, s.U6)(null === S || void 0 === S ? void 0 : S.getRotation()),
                        A = (0, s.bY)(x, k),
                        T = A.width,
                        D = A.height,
                        P = (0, r.kc)((0, n.pi)((0, n.pi)({}, x), {
                            rotation: k
                        })),
                        B = (0, i.B8)(0, 0, 0),
                        O = (0, i.p4)(null === S || void 0 === S ? void 0 : S.getBorderColor()),
                        N = (0, i.p4)(null === S || void 0 === S ? void 0 : S.getBackgroundColor()),
                        I = t.isCombed() ? 0 : 1,
                        M = {
                            x: F + I,
                            y: F + I,
                            width: T - 2 * (F + I),
                            height: D - 2 * (F + I)
                        };
                    if (t.isMultiline()) h = (R = (0, a.jg)(C, {
                        alignment: t.getAlignment(),
                        fontSize: null !== b && void 0 !== b ? b : Z,
                        font: o,
                        bounds: M
                    })).lines, p = R.fontSize;
                    else if (t.isCombed()) {
                        h = (R = (0, a.qs)(C, {
                            fontSize: null !== b && void 0 !== b ? b : Z,
                            font: o,
                            bounds: M,
                            cellCount: null !== (l = t.getMaxLength()) && void 0 !== l ? l : 0
                        })).cells, p = R.fontSize
                    } else {
                        var R;
                        h = [(R = (0, a.v0)(C, {
                            alignment: t.getAlignment(),
                            fontSize: null !== b && void 0 !== b ? b : Z,
                            font: o,
                            bounds: M
                        })).line], p = R.fontSize
                    }
                    var j = null !== (d = null !== y && void 0 !== y ? y : m) && void 0 !== d ? d : B;
                    g(y || void 0 !== b ? e : t.acroField, j, o, p);
                    var W = {
                        x: 0 + F / 2,
                        y: 0 + F / 2,
                        width: T - F,
                        height: D - F,
                        borderWidth: null !== F && void 0 !== F ? F : 0,
                        borderColor: O,
                        textColor: j,
                        font: o.name,
                        fontSize: p,
                        color: N,
                        textLines: h,
                        padding: I
                    };
                    return (0, n.pr)(P, (0, r.zh)(W))
                },
                x = function(t, e, o) {
                    var c, l, d, h = v(e),
                        p = v(t.acroField),
                        y = f(e),
                        m = f(t.acroField),
                        b = e.getRectangle(),
                        Z = e.getAppearanceCharacteristics(),
                        x = e.getBorderStyle(),
                        S = null !== (c = t.getSelected()[0]) && void 0 !== c ? c : "",
                        w = null !== (l = null === x || void 0 === x ? void 0 : x.getWidth()) && void 0 !== l ? l : 0,
                        C = (0, s.U6)(null === Z || void 0 === Z ? void 0 : Z.getRotation()),
                        F = (0, s.bY)(b, C),
                        k = F.width,
                        A = F.height,
                        T = (0, r.kc)((0, n.pi)((0, n.pi)({}, b), {
                            rotation: C
                        })),
                        D = (0, i.B8)(0, 0, 0),
                        P = (0, i.p4)(null === Z || void 0 === Z ? void 0 : Z.getBorderColor()),
                        B = (0, i.p4)(null === Z || void 0 === Z ? void 0 : Z.getBackgroundColor()),
                        O = {
                            x: w + 1,
                            y: w + 1,
                            width: k - 2 * (w + 1),
                            height: A - 2 * (w + 1)
                        },
                        N = (0, a.v0)(S, {
                            alignment: u.H.Left,
                            fontSize: null !== y && void 0 !== y ? y : m,
                            font: o,
                            bounds: O
                        }),
                        I = N.line,
                        M = N.fontSize,
                        R = null !== (d = null !== h && void 0 !== h ? h : p) && void 0 !== d ? d : D;
                    g(h || void 0 !== y ? e : t.acroField, R, o, M);
                    var j = {
                        x: 0 + w / 2,
                        y: 0 + w / 2,
                        width: k - w,
                        height: A - w,
                        borderWidth: null !== w && void 0 !== w ? w : 0,
                        borderColor: P,
                        textColor: R,
                        font: o.name,
                        fontSize: M,
                        color: B,
                        textLines: [I],
                        padding: 1
                    };
                    return (0, n.pr)(T, (0, r.zh)(j))
                },
                S = function(t, e, o) {
                    var c, l, d = v(e),
                        h = v(t.acroField),
                        p = f(e),
                        y = f(t.acroField),
                        m = e.getRectangle(),
                        b = e.getAppearanceCharacteristics(),
                        Z = e.getBorderStyle(),
                        x = null !== (c = null === Z || void 0 === Z ? void 0 : Z.getWidth()) && void 0 !== c ? c : 0,
                        S = (0, s.U6)(null === b || void 0 === b ? void 0 : b.getRotation()),
                        w = (0, s.bY)(m, S),
                        C = w.width,
                        F = w.height,
                        k = (0, r.kc)((0, n.pi)((0, n.pi)({}, m), {
                            rotation: S
                        })),
                        A = (0, i.B8)(0, 0, 0),
                        T = (0, i.p4)(null === b || void 0 === b ? void 0 : b.getBorderColor()),
                        D = (0, i.p4)(null === b || void 0 === b ? void 0 : b.getBackgroundColor()),
                        P = t.getOptions(),
                        B = t.getSelected();
                    t.isSorted() && P.sort();
                    for (var O = "", N = 0, I = P.length; N < I; N++) O += P[N], N < I - 1 && (O += "\n");
                    var M = {
                            x: x + 1,
                            y: x + 1,
                            width: C - 2 * (x + 1),
                            height: F - 2 * (x + 1)
                        },
                        R = (0, a.jg)(O, {
                            alignment: u.H.Left,
                            fontSize: null !== p && void 0 !== p ? p : y,
                            font: o,
                            bounds: M
                        }),
                        j = R.lines,
                        W = R.fontSize,
                        E = R.lineHeight,
                        z = [];
                    for (N = 0, I = j.length; N < I; N++) {
                        var U = j[N];
                        B.includes(U.text) && z.push(N)
                    }
                    var G = (0, i.B8)(.6, 193 / 255, 218 / 255),
                        L = null !== (l = null !== d && void 0 !== d ? d : h) && void 0 !== l ? l : A;
                    return g(d || void 0 !== p ? e : t.acroField, L, o, W), (0, n.pr)(k, (0, r.JT)({
                        x: 0 + x / 2,
                        y: 0 + x / 2,
                        width: C - x,
                        height: F - x,
                        borderWidth: null !== x && void 0 !== x ? x : 0,
                        borderColor: T,
                        textColor: L,
                        font: o.name,
                        fontSize: W,
                        color: D,
                        textLines: j,
                        lineHeight: E,
                        selectedColor: G,
                        selectedLines: z,
                        padding: 1
                    }))
                }
        },
        808060: (t, e, o) => {
            "use strict";
            o.d(e, {
                BE: () => c.Z,
                DS: () => n.DS,
                E3: () => n.E3,
                HN: () => n.HN,
                Lf: () => a.Z,
                PK: () => s.Z,
                Qu: () => r.Z,
                S8: () => n.S8,
                TE: () => n.TE,
                X7: () => h.Z,
                bF: () => l.Z,
                gi: () => n.gi,
                o0: () => u.Z,
                oX: () => n.oX,
                vL: () => i.Z,
                yg: () => d.Z
            });
            var n = o(98163),
                r = o(887685),
                i = o(124313),
                s = o(14671),
                a = o(403358),
                u = o(98418),
                c = o(798785),
                l = o(919462),
                d = o(283217),
                h = o(372613)
        },
        611828: (t, e, o) => {
            "use strict";
            var n;
            o.d(e, {
                    C: () => n
                }),
                function(t) {
                    t[t.Left = 0] = "Left", t[t.Center = 1] = "Center", t[t.Right = 2] = "Right"
                }(n || (n = {}))
        },
        830400: (t, e, o) => {
            "use strict";
            o.d(e, {
                C: () => n.C
            });
            var n = o(611828)
        },
        782902: (t, e, o) => {
            "use strict";
            o.d(e, {
                AE: () => c.AE,
                Ao: () => l.Ao,
                Ax: () => l.Ax,
                B8: () => i.B8,
                BE: () => n.BE,
                Bj: () => c.Bj,
                C9: () => l.C9,
                Cb: () => a.C,
                Cs: () => l.Cs,
                Cx: () => Z.Z,
                DS: () => n.DS,
                E3: () => n.E3,
                E9: () => s.E9,
                EE: () => v.E,
                FC: () => c.FC,
                Fc: () => l.Fc,
                Fv: () => l.Fv,
                GR: () => l.GR,
                Ge: () => l.Ge,
                Go: () => l.Go,
                H: () => r.H,
                H7: () => l.H7,
                HN: () => n.HN,
                H_: () => l.H_,
                Ht: () => d.Ht,
                I3: () => s.I3,
                Ic: () => s.Ic,
                If: () => c.ll,
                Ih: () => l.Ih,
                Ip: () => l.Ip,
                Iu: () => l.Iu,
                Iz: () => l.Iz,
                JG: () => c.JG,
                JT: () => c.JT,
                Ke: () => s.Ke,
                Lf: () => n.Lf,
                MR: () => y.Z,
                MY: () => s.MY,
                N$: () => u.N$,
                Nl: () => s.Nl,
                O8: () => l.O8,
                Ou: () => l.Ou,
                PK: () => n.PK,
                Pq: () => l.Pq,
                Q$: () => l.Q$,
                Q0: () => u.Q0,
                Qj: () => l.Qj,
                Qn: () => i.Qn,
                Qu: () => n.Qu,
                RW: () => d.RW,
                Rj: () => g.Z,
                Rt: () => l.Rt,
                Rx: () => l.Rx,
                S8: () => n.S8,
                SI: () => b.Z,
                Sn: () => l.Sn,
                TE: () => n.TE,
                U6: () => d.U6,
                Ux: () => d.Ux,
                VQ: () => l.VQ,
                VV: () => s.VV,
                V_: () => l.V_,
                Vb: () => l.Vb,
                X7: () => n.X7,
                XS: () => l.XS,
                YK: () => l.YK,
                YN: () => l.YN,
                Yr: () => d.Yr,
                Yt: () => d.Yt,
                ZM: () => l.ZM,
                ZT: () => c.ZT,
                ZY: () => l.ZY,
                _D: () => s._D,
                ad: () => l.ad,
                an: () => l.an,
                bA: () => l.bA,
                bF: () => n.bF,
                bY: () => d.bY,
                bi: () => h.b,
                bo: () => l.bo,
                bt: () => f.b,
                dA: () => l.dA,
                dd: () => i.dd,
                eB: () => s.eB,
                gi: () => n.gi,
                h6: () => l.h6,
                hl: () => l.hl,
                ip: () => s.ip,
                jM: () => x.Z,
                jg: () => r.jg,
                jw: () => s.jw,
                kP: () => l.kP,
                kW: () => l.kW,
                kZ: () => l.kZ,
                kc: () => c.kc,
                kw: () => c.kw,
                l6: () => i.l6,
                lf: () => l.lf,
                lg: () => c.lg,
                ll: () => s.ll,
                lt: () => c.lt,
                mE: () => l.mE,
                mH: () => u.mH,
                nU: () => l.nU,
                o0: () => n.o0,
                o7: () => d.o7,
                oX: () => n.oX,
                oq: () => l.oq,
                os: () => c.os,
                p4: () => i.p4,
                pO: () => l.pO,
                pS: () => c.pS,
                qC: () => m.Z,
                qs: () => r.qs,
                r4: () => l.r4,
                rz: () => l.rz,
                sS: () => c.sS,
                se: () => i.se,
                sp: () => l.sp,
                t: () => l.t,
                uR: () => d.uR,
                uc: () => p.u,
                uo: () => s.uo,
                v0: () => r.v0,
                vE: () => l.vE,
                vL: () => n.vL,
                vi: () => d.vi,
                wG: () => i.wG,
                wx: () => s.wx,
                xC: () => l.xC,
                xL: () => c.xL,
                xl: () => l.xl,
                y2: () => l.y2,
                yU: () => c.yU,
                yb: () => i.yb,
                yg: () => n.yg,
                zS: () => l.zS,
                zh: () => c.zh
            });
            var n = o(808060),
                r = o(768065),
                i = o(80985),
                s = o(934755),
                a = o(830400),
                u = o(643552),
                c = o(981806),
                l = o(350486),
                d = o(115733),
                h = o(239135),
                f = o(467531),
                p = o(209874),
                v = o(945893),
                g = o(835966),
                y = o(946013),
                m = o(435941),
                b = o(874087),
                Z = o(27366),
                x = o(126789)
        },
        643552: (t, e, o) => {
            "use strict";
            o.d(e, {
                N$: () => r,
                Q0: () => i,
                mH: () => s
            });
            var n = o(509958),
                r = function(t) {
                    return t instanceof n.wQ ? t : n.wQ.of(t)
                },
                i = function(t) {
                    return t instanceof n.qI ? t : n.qI.of(t)
                },
                s = function(t) {
                    return t instanceof n.qI ? t.asNumber() : t
                }
        },
        981806: (t, e, o) => {
            "use strict";
            o.d(e, {
                AE: () => d,
                Bj: () => C,
                FC: () => w,
                JG: () => p,
                JT: () => k,
                ZT: () => b,
                kc: () => Z,
                kw: () => l,
                lg: () => x,
                ll: () => g,
                lt: () => S,
                os: () => m,
                pS: () => f,
                sS: () => h,
                xL: () => y,
                yU: () => c,
                zh: () => F
            });
            var n = o(570655),
                r = o(80985),
                i = o(350486),
                s = o(115733),
                a = o(173044),
                u = o(643552),
                c = function(t, e) {
                    return [(0, i.bo)(), e.graphicsState && (0, i.Ou)(e.graphicsState), (0, i.Fv)(), (0, r.l6)(e.color), (0, i.vE)(e.font, e.size), (0, i.Iz)((0, s.Yr)(e.rotate), (0, s.Yr)(e.xSkew), (0, s.Yr)(e.ySkew), e.x, e.y), (0, i.V_)(t), (0, i.Qj)(), (0, i.Pq)()].filter(Boolean)
                },
                l = function(t, e) {
                    for (var o = [(0, i.bo)(), e.graphicsState && (0, i.Ou)(e.graphicsState), (0, i.Fv)(), (0, r.l6)(e.color), (0, i.vE)(e.font, e.size), (0, i.H7)(e.lineHeight), (0, i.Iz)((0, s.Yr)(e.rotate), (0, s.Yr)(e.xSkew), (0, s.Yr)(e.ySkew), e.x, e.y)].filter(Boolean), n = 0, a = t.length; n < a; n++) o.push((0, i.V_)(t[n]), (0, i.t)());
                    return o.push((0, i.Qj)(), (0, i.Pq)()), o
                },
                d = function(t, e) {
                    return [(0, i.bo)(), e.graphicsState && (0, i.Ou)(e.graphicsState), (0, i.Iu)(e.x, e.y), (0, i.Ih)((0, s.Yr)(e.rotate)), (0, i.bA)(e.width, e.height), (0, i.VQ)((0, s.Yr)(e.xSkew), (0, s.Yr)(e.ySkew)), (0, i.Ax)(t), (0, i.Pq)()].filter(Boolean)
                },
                h = function(t, e) {
                    return [(0, i.bo)(), e.graphicsState && (0, i.Ou)(e.graphicsState), (0, i.Iu)(e.x, e.y), (0, i.Ih)((0, s.Yr)(e.rotate)), (0, i.bA)(e.xScale, e.yScale), (0, i.VQ)((0, s.Yr)(e.xSkew), (0, s.Yr)(e.ySkew)), (0, i.Ax)(t), (0, i.Pq)()].filter(Boolean)
                },
                f = function(t) {
                    var e, o;
                    return [(0, i.bo)(), t.graphicsState && (0, i.Ou)(t.graphicsState), t.color && (0, r.yb)(t.color), (0, i.H_)(t.thickness), (0, i.Rt)(null !== (e = t.dashArray) && void 0 !== e ? e : [], null !== (o = t.dashPhase) && void 0 !== o ? o : 0), (0, i.Ao)(t.start.x, t.start.y), t.lineCap && (0, i.xC)(t.lineCap), (0, i.Ao)(t.start.x, t.start.y), (0, i.kZ)(t.end.x, t.end.y), (0, i.Go)(), (0, i.Pq)()].filter(Boolean)
                },
                p = function(t) {
                    var e, o;
                    return [(0, i.bo)(), t.graphicsState && (0, i.Ou)(t.graphicsState), t.color && (0, r.l6)(t.color), t.borderColor && (0, r.yb)(t.borderColor), (0, i.H_)(t.borderWidth), t.borderLineCap && (0, i.xC)(t.borderLineCap), (0, i.Rt)(null !== (e = t.borderDashArray) && void 0 !== e ? e : [], null !== (o = t.borderDashPhase) && void 0 !== o ? o : 0), (0, i.Iu)(t.x, t.y), (0, i.Ih)((0, s.Yr)(t.rotate)), (0, i.VQ)((0, s.Yr)(t.xSkew), (0, s.Yr)(t.ySkew)), (0, i.Ao)(0, 0), (0, i.kZ)(0, t.height), (0, i.kZ)(t.width, t.height), (0, i.kZ)(t.width, 0), (0, i.ZM)(), t.color && t.borderWidth ? (0, i.y2)() : t.color ? (0, i.hl)() : t.borderColor ? (0, i.Go)() : (0, i.ZM)(), (0, i.Pq)()].filter(Boolean)
                },
                v = (Math.sqrt(2) - 1) / 3 * 4,
                g = function(t) {
                    var e = (0, u.mH)(t.x),
                        o = (0, u.mH)(t.y),
                        n = (0, u.mH)(t.xScale),
                        r = (0, u.mH)(t.yScale),
                        s = n * v,
                        a = r * v,
                        c = (e -= n) + 2 * n,
                        l = (o -= r) + 2 * r,
                        d = e + n,
                        h = o + r;
                    return [(0, i.bo)(), (0, i.Ao)(e, h), (0, i.rz)(e, h - a, d - s, o, d, o), (0, i.rz)(d + s, o, c, h - a, c, h), (0, i.rz)(c, h + a, d + s, l, d, l), (0, i.rz)(d - s, l, e, h + a, e, h), (0, i.Pq)()]
                },
                y = function(t) {
                    var e, o, a, c, l, d, h, f, p, y, m, b, Z, x, S, w;
                    return (0, n.pr)([(0, i.bo)(), t.graphicsState && (0, i.Ou)(t.graphicsState), t.color && (0, r.l6)(t.color), t.borderColor && (0, r.yb)(t.borderColor), (0, i.H_)(t.borderWidth), t.borderLineCap && (0, i.xC)(t.borderLineCap), (0, i.Rt)(null !== (e = t.borderDashArray) && void 0 !== e ? e : [], null !== (o = t.borderDashPhase) && void 0 !== o ? o : 0)], void 0 === t.rotate ? g({
                        x: t.x,
                        y: t.y,
                        xScale: t.xScale,
                        yScale: t.yScale
                    }) : (c = {
                        x: t.x,
                        y: t.y,
                        xScale: t.xScale,
                        yScale: t.yScale,
                        rotate: null !== (a = t.rotate) && void 0 !== a ? a : (0, s.RW)(0)
                    }, l = (0, u.mH)(c.x), d = (0, u.mH)(c.y), h = (0, u.mH)(c.xScale), f = (0, u.mH)(c.yScale), p = -h, y = -f, m = h * v, b = f * v, Z = p + 2 * h, x = y + 2 * f, S = p + h, w = y + f, [(0, i.Iu)(l, d), (0, i.Ih)((0, s.Yr)(c.rotate)), (0, i.Ao)(p, w), (0, i.rz)(p, w - b, S - m, y, S, y), (0, i.rz)(S + m, y, Z, w - b, Z, w), (0, i.rz)(Z, w + b, S + m, x, S, x), (0, i.rz)(S - m, x, p, w + b, p, w)]), [t.color && t.borderWidth ? (0, i.y2)() : t.color ? (0, i.hl)() : t.borderColor ? (0, i.Go)() : (0, i.ZM)(), (0, i.Pq)()]).filter(Boolean)
                },
                m = function(t, e) {
                    var o, u, c;
                    return (0, n.pr)([(0, i.bo)(), e.graphicsState && (0, i.Ou)(e.graphicsState), (0, i.Iu)(e.x, e.y), (0, i.Ih)((0, s.Yr)(null !== (o = e.rotate) && void 0 !== o ? o : (0, s.RW)(0))), e.scale ? (0, i.bA)(e.scale, -e.scale) : (0, i.bA)(1, -1), e.color && (0, r.l6)(e.color), e.borderColor && (0, r.yb)(e.borderColor), e.borderWidth && (0, i.H_)(e.borderWidth), e.borderLineCap && (0, i.xC)(e.borderLineCap), (0, i.Rt)(null !== (u = e.borderDashArray) && void 0 !== u ? u : [], null !== (c = e.borderDashPhase) && void 0 !== c ? c : 0)], (0, a.A)(t), [e.color && e.borderWidth ? (0, i.y2)() : e.color ? (0, i.hl)() : e.borderColor ? (0, i.Go)() : (0, i.ZM)(), (0, i.Pq)()]).filter(Boolean)
                },
                b = function(t) {
                    var e = (0, u.mH)(t.size),
                        o = -.25,
                        n = -.49,
                        s = -.675;
                    return [(0, i.bo)(), t.color && (0, r.yb)(t.color), (0, i.H_)(t.thickness), (0, i.Iu)(t.x, t.y), (0, i.Ao)(s * e, -.07601036269430045 * e), (0, i.kZ)(o * e, n * e), (0, i.kZ)(.69 * e, .475 * e), (0, i.Go)(), (0, i.Pq)()].filter(Boolean)
                },
                Z = function(t) {
                    return 0 === t.rotation ? [(0, i.Iu)(0, 0), (0, i.Ge)(0)] : 90 === t.rotation ? [(0, i.Iu)(t.width, 0), (0, i.Ge)(90)] : 180 === t.rotation ? [(0, i.Iu)(t.width, t.height), (0, i.Ge)(180)] : 270 === t.rotation ? [(0, i.Iu)(0, t.height), (0, i.Ge)(270)] : []
                },
                x = function(t) {
                    var e = p({
                        x: t.x,
                        y: t.y,
                        width: t.width,
                        height: t.height,
                        borderWidth: t.borderWidth,
                        color: t.color,
                        borderColor: t.borderColor,
                        rotate: (0, s.RW)(0),
                        xSkew: (0, s.RW)(0),
                        ySkew: (0, s.RW)(0)
                    });
                    if (!t.filled) return e;
                    var o = (0, u.mH)(t.width),
                        r = (0, u.mH)(t.height),
                        a = Math.min(o, r) / 2,
                        c = b({
                            x: o / 2,
                            y: r / 2,
                            size: a,
                            thickness: t.thickness,
                            color: t.markColor
                        });
                    return (0, n.pr)([(0, i.bo)()], e, c, [(0, i.Pq)()])
                },
                S = function(t) {
                    var e = (0, u.mH)(t.width),
                        o = (0, u.mH)(t.height),
                        r = Math.min(e, o) / 2,
                        s = y({
                            x: t.x,
                            y: t.y,
                            xScale: r,
                            yScale: r,
                            color: t.color,
                            borderColor: t.borderColor,
                            borderWidth: t.borderWidth
                        });
                    if (!t.filled) return s;
                    var a = y({
                        x: t.x,
                        y: t.y,
                        xScale: .45 * r,
                        yScale: .45 * r,
                        color: t.dotColor,
                        borderColor: void 0,
                        borderWidth: 0
                    });
                    return (0, n.pr)([(0, i.bo)()], s, a, [(0, i.Pq)()])
                },
                w = function(t) {
                    var e = (0, u.mH)(t.x),
                        o = (0, u.mH)(t.y),
                        r = (0, u.mH)(t.width),
                        a = (0, u.mH)(t.height),
                        c = p({
                            x: e,
                            y: o,
                            width: r,
                            height: a,
                            borderWidth: t.borderWidth,
                            color: t.color,
                            borderColor: t.borderColor,
                            rotate: (0, s.RW)(0),
                            xSkew: (0, s.RW)(0),
                            ySkew: (0, s.RW)(0)
                        }),
                        l = C(t.textLines, {
                            color: t.textColor,
                            font: t.font,
                            size: t.fontSize,
                            rotate: (0, s.RW)(0),
                            xSkew: (0, s.RW)(0),
                            ySkew: (0, s.RW)(0)
                        });
                    return (0, n.pr)([(0, i.bo)()], c, l, [(0, i.Pq)()])
                },
                C = function(t, e) {
                    for (var o = [(0, i.Fv)(), (0, r.l6)(e.color), (0, i.vE)(e.font, e.size)], n = 0, a = t.length; n < a; n++) {
                        var u = t[n],
                            c = u.encoded,
                            l = u.x,
                            d = u.y;
                        o.push((0, i.Iz)((0, s.Yr)(e.rotate), (0, s.Yr)(e.xSkew), (0, s.Yr)(e.ySkew), l, d), (0, i.V_)(c))
                    }
                    return o.push((0, i.Qj)()), o
                },
                F = function(t) {
                    var e = (0, u.mH)(t.x),
                        o = (0, u.mH)(t.y),
                        r = (0, u.mH)(t.width),
                        a = (0, u.mH)(t.height),
                        c = (0, u.mH)(t.borderWidth),
                        l = (0, u.mH)(t.padding),
                        d = e + c / 2 + l,
                        h = o + c / 2 + l,
                        f = r - 2 * (c / 2 + l),
                        v = a - 2 * (c / 2 + l),
                        g = [(0, i.Ao)(d, h), (0, i.kZ)(d, h + v), (0, i.kZ)(d + f, h + v), (0, i.kZ)(d + f, h), (0, i.ZM)(), (0, i.oq)(), (0, i.ZY)()],
                        y = p({
                            x: e,
                            y: o,
                            width: r,
                            height: a,
                            borderWidth: t.borderWidth,
                            color: t.color,
                            borderColor: t.borderColor,
                            rotate: (0, s.RW)(0),
                            xSkew: (0, s.RW)(0),
                            ySkew: (0, s.RW)(0)
                        }),
                        m = C(t.textLines, {
                            color: t.textColor,
                            font: t.font,
                            size: t.fontSize,
                            rotate: (0, s.RW)(0),
                            xSkew: (0, s.RW)(0),
                            ySkew: (0, s.RW)(0)
                        }),
                        b = (0, n.pr)([(0, i.Sn)("Tx"), (0, i.bo)()], m, [(0, i.Pq)(), (0, i.Ip)()]);
                    return (0, n.pr)([(0, i.bo)()], y, g, b, [(0, i.Pq)()])
                },
                k = function(t) {
                    for (var e = (0, u.mH)(t.x), o = (0, u.mH)(t.y), r = (0, u.mH)(t.width), a = (0, u.mH)(t.height), c = (0, u.mH)(t.lineHeight), l = (0, u.mH)(t.borderWidth), d = (0, u.mH)(t.padding), h = e + l / 2 + d, f = o + l / 2 + d, v = r - 2 * (l / 2 + d), g = a - 2 * (l / 2 + d), y = [(0, i.Ao)(h, f), (0, i.kZ)(h, f + g), (0, i.kZ)(h + v, f + g), (0, i.kZ)(h + v, f), (0, i.ZM)(), (0, i.oq)(), (0, i.ZY)()], m = p({
                            x: e,
                            y: o,
                            width: r,
                            height: a,
                            borderWidth: t.borderWidth,
                            color: t.color,
                            borderColor: t.borderColor,
                            rotate: (0, s.RW)(0),
                            xSkew: (0, s.RW)(0),
                            ySkew: (0, s.RW)(0)
                        }), b = [], Z = 0, x = t.selectedLines.length; Z < x; Z++) {
                        var S = t.textLines[t.selectedLines[Z]];
                        b.push.apply(b, p({
                            x: S.x - d,
                            y: S.y - (c - S.height) / 2,
                            width: r - l,
                            height: S.height + (c - S.height) / 2,
                            borderWidth: 0,
                            color: t.selectedColor,
                            borderColor: void 0,
                            rotate: (0, s.RW)(0),
                            xSkew: (0, s.RW)(0),
                            ySkew: (0, s.RW)(0)
                        }))
                    }
                    var w = C(t.textLines, {
                            color: t.textColor,
                            font: t.font,
                            size: t.fontSize,
                            rotate: (0, s.RW)(0),
                            xSkew: (0, s.RW)(0),
                            ySkew: (0, s.RW)(0)
                        }),
                        F = (0, n.pr)([(0, i.Sn)("Tx"), (0, i.bo)()], w, [(0, i.Pq)(), (0, i.Ip)()]);
                    return (0, n.pr)([(0, i.bo)()], m, b, y, F, [(0, i.Pq)()])
                }
        },
        350486: (t, e, o) => {
            "use strict";
            o.d(e, {
                Ao: () => O,
                Ax: () => et,
                C9: () => I,
                Cs: () => m,
                Fc: () => h,
                Fv: () => L,
                GR: () => ot,
                Ge: () => g,
                Go: () => R,
                H7: () => q,
                H_: () => T,
                Ih: () => v,
                Ip: () => ct,
                Iu: () => f,
                Iz: () => $,
                O8: () => st,
                Ou: () => F,
                Pq: () => A,
                Q$: () => K,
                Qj: () => V,
                Rt: () => b,
                Rx: () => u,
                Sn: () => ut,
                VQ: () => y,
                V_: () => G,
                Vb: () => U,
                XS: () => it,
                YK: () => tt,
                YN: () => Z,
                ZM: () => B,
                ZY: () => E,
                ad: () => P,
                an: () => _,
                bA: () => p,
                bo: () => k,
                dA: () => nt,
                h6: () => M,
                hl: () => j,
                kP: () => n,
                kW: () => X,
                kZ: () => N,
                lf: () => C,
                mE: () => rt,
                nU: () => Y,
                oq: () => a,
                pO: () => w,
                r4: () => x,
                rz: () => D,
                sp: () => at,
                t: () => z,
                vE: () => H,
                xC: () => S,
                xl: () => Q,
                y2: () => W,
                zS: () => J
            });
            var n, r = o(643552),
                i = o(115733),
                s = o(509958),
                a = function() {
                    return s.sI.of(s.Y3.ClipNonZero)
                },
                u = function() {
                    return s.sI.of(s.Y3.ClipEvenOdd)
                },
                c = Math.cos,
                l = Math.sin,
                d = Math.tan,
                h = function(t, e, o, n, i, a) {
                    return s.sI.of(s.Y3.ConcatTransformationMatrix, [(0, r.Q0)(t), (0, r.Q0)(e), (0, r.Q0)(o), (0, r.Q0)(n), (0, r.Q0)(i), (0, r.Q0)(a)])
                },
                f = function(t, e) {
                    return h(1, 0, 0, 1, t, e)
                },
                p = function(t, e) {
                    return h(t, 0, 0, e, 0, 0)
                },
                v = function(t) {
                    return h(c((0, r.mH)(t)), l((0, r.mH)(t)), -l((0, r.mH)(t)), c((0, r.mH)(t)), 0, 0)
                },
                g = function(t) {
                    return v((0, i.Ht)((0, r.mH)(t)))
                },
                y = function(t, e) {
                    return h(1, d((0, r.mH)(t)), d((0, r.mH)(e)), 1, 0, 0)
                },
                m = function(t, e) {
                    return y((0, i.Ht)((0, r.mH)(t)), (0, i.Ht)((0, r.mH)(e)))
                },
                b = function(t, e) {
                    return s.sI.of(s.Y3.SetLineDashPattern, ["[" + t.map(r.Q0).join(" ") + "]", (0, r.Q0)(e)])
                },
                Z = function() {
                    return b([], 0)
                };
            ! function(t) {
                t[t.Butt = 0] = "Butt", t[t.Round = 1] = "Round", t[t.Projecting = 2] = "Projecting"
            }(n || (n = {}));
            var x, S = function(t) {
                return s.sI.of(s.Y3.SetLineCapStyle, [(0, r.Q0)(t)])
            };
            ! function(t) {
                t[t.Miter = 0] = "Miter", t[t.Round = 1] = "Round", t[t.Bevel = 2] = "Bevel"
            }(x || (x = {}));
            var w, C = function(t) {
                    return s.sI.of(s.Y3.SetLineJoinStyle, [(0, r.Q0)(t)])
                },
                F = function(t) {
                    return s.sI.of(s.Y3.SetGraphicsStateParams, [(0, r.N$)(t)])
                },
                k = function() {
                    return s.sI.of(s.Y3.PushGraphicsState)
                },
                A = function() {
                    return s.sI.of(s.Y3.PopGraphicsState)
                },
                T = function(t) {
                    return s.sI.of(s.Y3.SetLineWidth, [(0, r.Q0)(t)])
                },
                D = function(t, e, o, n, i, a) {
                    return s.sI.of(s.Y3.AppendBezierCurve, [(0, r.Q0)(t), (0, r.Q0)(e), (0, r.Q0)(o), (0, r.Q0)(n), (0, r.Q0)(i), (0, r.Q0)(a)])
                },
                P = function(t, e, o, n) {
                    return s.sI.of(s.Y3.CurveToReplicateInitialPoint, [(0, r.Q0)(t), (0, r.Q0)(e), (0, r.Q0)(o), (0, r.Q0)(n)])
                },
                B = function() {
                    return s.sI.of(s.Y3.ClosePath)
                },
                O = function(t, e) {
                    return s.sI.of(s.Y3.MoveTo, [(0, r.Q0)(t), (0, r.Q0)(e)])
                },
                N = function(t, e) {
                    return s.sI.of(s.Y3.LineTo, [(0, r.Q0)(t), (0, r.Q0)(e)])
                },
                I = function(t, e, o, n) {
                    return s.sI.of(s.Y3.AppendRectangle, [(0, r.Q0)(t), (0, r.Q0)(e), (0, r.Q0)(o), (0, r.Q0)(n)])
                },
                M = function(t, e, o) {
                    return I(t, e, o, o)
                },
                R = function() {
                    return s.sI.of(s.Y3.StrokePath)
                },
                j = function() {
                    return s.sI.of(s.Y3.FillNonZero)
                },
                W = function() {
                    return s.sI.of(s.Y3.FillNonZeroAndStroke)
                },
                E = function() {
                    return s.sI.of(s.Y3.EndPath)
                },
                z = function() {
                    return s.sI.of(s.Y3.NextLine)
                },
                U = function(t, e) {
                    return s.sI.of(s.Y3.MoveText, [(0, r.Q0)(t), (0, r.Q0)(e)])
                },
                G = function(t) {
                    return s.sI.of(s.Y3.ShowText, [t])
                },
                L = function() {
                    return s.sI.of(s.Y3.BeginText)
                },
                V = function() {
                    return s.sI.of(s.Y3.EndText)
                },
                H = function(t, e) {
                    return s.sI.of(s.Y3.SetFontAndSize, [(0, r.N$)(t), (0, r.Q0)(e)])
                },
                Q = function(t) {
                    return s.sI.of(s.Y3.SetCharacterSpacing, [(0, r.Q0)(t)])
                },
                Y = function(t) {
                    return s.sI.of(s.Y3.SetWordSpacing, [(0, r.Q0)(t)])
                },
                K = function(t) {
                    return s.sI.of(s.Y3.SetTextHorizontalScaling, [(0, r.Q0)(t)])
                },
                q = function(t) {
                    return s.sI.of(s.Y3.SetTextLineHeight, [(0, r.Q0)(t)])
                },
                X = function(t) {
                    return s.sI.of(s.Y3.SetTextRise, [(0, r.Q0)(t)])
                };
            ! function(t) {
                t[t.Fill = 0] = "Fill", t[t.Outline = 1] = "Outline", t[t.FillAndOutline = 2] = "FillAndOutline", t[t.Invisible = 3] = "Invisible", t[t.FillAndClip = 4] = "FillAndClip", t[t.OutlineAndClip = 5] = "OutlineAndClip", t[t.FillAndOutlineAndClip = 6] = "FillAndOutlineAndClip", t[t.Clip = 7] = "Clip"
            }(w || (w = {}));
            var J = function(t) {
                    return s.sI.of(s.Y3.SetTextRenderingMode, [(0, r.Q0)(t)])
                },
                _ = function(t, e, o, n, i, a) {
                    return s.sI.of(s.Y3.SetTextMatrix, [(0, r.Q0)(t), (0, r.Q0)(e), (0, r.Q0)(o), (0, r.Q0)(n), (0, r.Q0)(i), (0, r.Q0)(a)])
                },
                $ = function(t, e, o, n, i) {
                    return _(c((0, r.mH)(t)), l((0, r.mH)(t)) + d((0, r.mH)(e)), -l((0, r.mH)(t)) + d((0, r.mH)(o)), c((0, r.mH)(t)), n, i)
                },
                tt = function(t, e, o, n, s) {
                    return $((0, i.Ht)((0, r.mH)(t)), (0, i.Ht)((0, r.mH)(e)), (0, i.Ht)((0, r.mH)(o)), n, s)
                },
                et = function(t) {
                    return s.sI.of(s.Y3.DrawObject, [(0, r.N$)(t)])
                },
                ot = function(t) {
                    return s.sI.of(s.Y3.NonStrokingColorGray, [(0, r.Q0)(t)])
                },
                nt = function(t) {
                    return s.sI.of(s.Y3.StrokingColorGray, [(0, r.Q0)(t)])
                },
                rt = function(t, e, o) {
                    return s.sI.of(s.Y3.NonStrokingColorRgb, [(0, r.Q0)(t), (0, r.Q0)(e), (0, r.Q0)(o)])
                },
                it = function(t, e, o) {
                    return s.sI.of(s.Y3.StrokingColorRgb, [(0, r.Q0)(t), (0, r.Q0)(e), (0, r.Q0)(o)])
                },
                st = function(t, e, o, n) {
                    return s.sI.of(s.Y3.NonStrokingColorCmyk, [(0, r.Q0)(t), (0, r.Q0)(e), (0, r.Q0)(o), (0, r.Q0)(n)])
                },
                at = function(t, e, o, n) {
                    return s.sI.of(s.Y3.StrokingColorCmyk, [(0, r.Q0)(t), (0, r.Q0)(e), (0, r.Q0)(o), (0, r.Q0)(n)])
                },
                ut = function(t) {
                    return s.sI.of(s.Y3.BeginMarkedContent, [(0, r.N$)(t)])
                },
                ct = function() {
                    return s.sI.of(s.Y3.EndMarkedContent)
                }
        },
        115733: (t, e, o) => {
            "use strict";
            o.d(e, {
                Ht: () => c,
                RW: () => s,
                U6: () => f,
                Ux: () => h,
                Yr: () => d,
                Yt: () => n,
                bY: () => p,
                o7: () => v,
                uR: () => i,
                vi: () => l
            });
            var n, r = o(451441);
            ! function(t) {
                t.Degrees = "degrees", t.Radians = "radians"
            }(n || (n = {}));
            var i = function(t) {
                    return (0, r.ku)(t, "radianAngle", ["number"]), {
                        type: n.Radians,
                        angle: t
                    }
                },
                s = function(t) {
                    return (0, r.ku)(t, "degreeAngle", ["number"]), {
                        type: n.Degrees,
                        angle: t
                    }
                },
                a = n.Radians,
                u = n.Degrees,
                c = function(t) {
                    return t * Math.PI / 180
                },
                l = function(t) {
                    return 180 * t / Math.PI
                },
                d = function(t) {
                    return t.type === a ? t.angle : t.type === u ? c(t.angle) : (0, r.vU)("Invalid rotation: " + JSON.stringify(t))
                },
                h = function(t) {
                    return t.type === a ? l(t.angle) : t.type === u ? t.angle : (0, r.vU)("Invalid rotation: " + JSON.stringify(t))
                },
                f = function(t) {
                    void 0 === t && (t = 0);
                    var e = t / 90 % 4;
                    return 0 === e ? 0 : 1 === e ? 90 : 2 === e ? 180 : 3 === e ? 270 : 0
                },
                p = function(t, e) {
                    void 0 === e && (e = 0);
                    var o = f(e);
                    return 90 === o || 270 === o ? {
                        width: t.height,
                        height: t.width
                    } : {
                        width: t.width,
                        height: t.height
                    }
                },
                v = function(t, e, o) {
                    void 0 === e && (e = 0), void 0 === o && (o = 0);
                    var n = t.x,
                        r = t.y,
                        i = t.width,
                        s = t.height,
                        a = f(o),
                        u = e / 2;
                    return 0 === a ? {
                        x: n - u,
                        y: r - u,
                        width: i,
                        height: s
                    } : 90 === a ? {
                        x: n - s + u,
                        y: r - u,
                        width: s,
                        height: i
                    } : 180 === a ? {
                        x: n - i + u,
                        y: r - s + u,
                        width: i,
                        height: s
                    } : 270 === a ? {
                        x: n - u,
                        y: r - i + u,
                        width: s,
                        height: i
                    } : {
                        x: n - u,
                        y: r - u,
                        width: i,
                        height: s
                    }
                }
        },
        239135: (t, e, o) => {
            "use strict";
            o.d(e, {
                b: () => n
            });
            var n = {
                "4A0": [4767.87, 6740.79],
                "2A0": [3370.39, 4767.87],
                A0: [2383.94, 3370.39],
                A1: [1683.78, 2383.94],
                A2: [1190.55, 1683.78],
                A3: [841.89, 1190.55],
                A4: [595.28, 841.89],
                A5: [419.53, 595.28],
                A6: [297.64, 419.53],
                A7: [209.76, 297.64],
                A8: [147.4, 209.76],
                A9: [104.88, 147.4],
                A10: [73.7, 104.88],
                B0: [2834.65, 4008.19],
                B1: [2004.09, 2834.65],
                B2: [1417.32, 2004.09],
                B3: [1000.63, 1417.32],
                B4: [708.66, 1000.63],
                B5: [498.9, 708.66],
                B6: [354.33, 498.9],
                B7: [249.45, 354.33],
                B8: [175.75, 249.45],
                B9: [124.72, 175.75],
                B10: [87.87, 124.72],
                C0: [2599.37, 3676.54],
                C1: [1836.85, 2599.37],
                C2: [1298.27, 1836.85],
                C3: [918.43, 1298.27],
                C4: [649.13, 918.43],
                C5: [459.21, 649.13],
                C6: [323.15, 459.21],
                C7: [229.61, 323.15],
                C8: [161.57, 229.61],
                C9: [113.39, 161.57],
                C10: [79.37, 113.39],
                RA0: [2437.8, 3458.27],
                RA1: [1729.13, 2437.8],
                RA2: [1218.9, 1729.13],
                RA3: [864.57, 1218.9],
                RA4: [609.45, 864.57],
                SRA0: [2551.18, 3628.35],
                SRA1: [1814.17, 2551.18],
                SRA2: [1275.59, 1814.17],
                SRA3: [907.09, 1275.59],
                SRA4: [637.8, 907.09],
                Executive: [521.86, 756],
                Folio: [612, 936],
                Legal: [612, 1008],
                Letter: [612, 792],
                Tabloid: [792, 1224]
            }
        },
        173044: (t, e, o) => {
            "use strict";
            o.d(e, {
                A: () => v
            });
            var n = o(350486),
                r = 0,
                i = 0,
                s = 0,
                a = 0,
                u = 0,
                c = 0,
                l = new Map([
                    ["A", 7],
                    ["a", 7],
                    ["C", 6],
                    ["c", 6],
                    ["H", 1],
                    ["h", 1],
                    ["L", 2],
                    ["l", 2],
                    ["M", 2],
                    ["m", 2],
                    ["Q", 4],
                    ["q", 4],
                    ["S", 4],
                    ["s", 4],
                    ["T", 2],
                    ["t", 2],
                    ["V", 1],
                    ["v", 1],
                    ["Z", 0],
                    ["z", 0]
                ]),
                d = {
                    M: function(t) {
                        return r = t[0], i = t[1], s = a = null, u = r, c = i, (0, n.Ao)(r, i)
                    },
                    m: function(t) {
                        return r += t[0], i += t[1], s = a = null, u = r, c = i, (0, n.Ao)(r, i)
                    },
                    C: function(t) {
                        return r = t[4], i = t[5], s = t[2], a = t[3], (0, n.rz)(t[0], t[1], t[2], t[3], t[4], t[5])
                    },
                    c: function(t) {
                        var e = (0, n.rz)(t[0] + r, t[1] + i, t[2] + r, t[3] + i, t[4] + r, t[5] + i);
                        return s = r + t[2], a = i + t[3], r += t[4], i += t[5], e
                    },
                    S: function(t) {
                        null !== s && null !== a || (s = r, a = i);
                        var e = (0, n.rz)(r - (s - r), i - (a - i), t[0], t[1], t[2], t[3]);
                        return s = t[0], a = t[1], r = t[2], i = t[3], e
                    },
                    s: function(t) {
                        null !== s && null !== a || (s = r, a = i);
                        var e = (0, n.rz)(r - (s - r), i - (a - i), r + t[0], i + t[1], r + t[2], i + t[3]);
                        return s = r + t[0], a = i + t[1], r += t[2], i += t[3], e
                    },
                    Q: function(t) {
                        return s = t[0], a = t[1], r = t[2], i = t[3], (0, n.ad)(t[0], t[1], r, i)
                    },
                    q: function(t) {
                        var e = (0, n.ad)(t[0] + r, t[1] + i, t[2] + r, t[3] + i);
                        return s = r + t[0], a = i + t[1], r += t[2], i += t[3], e
                    },
                    T: function(t) {
                        null === s || null === a ? (s = r, a = i) : (s = r - (s - r), a = i - (a - i));
                        var e = (0, n.ad)(s, a, t[0], t[1]);
                        return s = r - (s - r), a = i - (a - i), r = t[0], i = t[1], e
                    },
                    t: function(t) {
                        null === s || null === a ? (s = r, a = i) : (s = r - (s - r), a = i - (a - i));
                        var e = (0, n.ad)(s, a, r + t[0], i + t[1]);
                        return r += t[0], i += t[1], e
                    },
                    A: function(t) {
                        var e = h(r, i, t);
                        return r = t[5], i = t[6], e
                    },
                    a: function(t) {
                        t[5] += r, t[6] += i;
                        var e = h(r, i, t);
                        return r = t[5], i = t[6], e
                    },
                    L: function(t) {
                        return r = t[0], i = t[1], s = a = null, (0, n.kZ)(r, i)
                    },
                    l: function(t) {
                        return r += t[0], i += t[1], s = a = null, (0, n.kZ)(r, i)
                    },
                    H: function(t) {
                        return r = t[0], s = a = null, (0, n.kZ)(r, i)
                    },
                    h: function(t) {
                        return r += t[0], s = a = null, (0, n.kZ)(r, i)
                    },
                    V: function(t) {
                        return i = t[0], s = a = null, (0, n.kZ)(r, i)
                    },
                    v: function(t) {
                        return i += t[0], s = a = null, (0, n.kZ)(r, i)
                    },
                    Z: function() {
                        var t = (0, n.ZM)();
                        return r = u, i = c, t
                    },
                    z: function() {
                        var t = (0, n.ZM)();
                        return r = u, i = c, t
                    }
                },
                h = function(t, e, o) {
                    for (var r = o[0], i = o[1], s = o[2], a = o[3], u = o[4], c = o[5], l = o[6], d = [], h = 0, v = f(c, l, r, i, a, u, s, t, e); h < v.length; h++) {
                        var g = v[h],
                            y = p.apply(void 0, g);
                        d.push(n.rz.apply(void 0, y))
                    }
                    return d
                },
                f = function(t, e, o, n, r, i, u, c, l) {
                    var d = u * (Math.PI / 180),
                        h = Math.sin(d),
                        f = Math.cos(d);
                    o = Math.abs(o), n = Math.abs(n);
                    var p = (s = f * (c - t) * .5 + h * (l - e) * .5) * s / (o * o) + (a = f * (l - e) * .5 - h * (c - t) * .5) * a / (n * n);
                    p > 1 && (o *= p = Math.sqrt(p), n *= p);
                    var v = f / o,
                        g = h / o,
                        y = -h / n,
                        m = f / n,
                        b = v * c + g * l,
                        Z = y * c + m * l,
                        x = v * t + g * e,
                        S = y * t + m * e,
                        w = 1 / ((x - b) * (x - b) + (S - Z) * (S - Z)) - .25;
                    w < 0 && (w = 0);
                    var C = Math.sqrt(w);
                    i === r && (C = -C);
                    var F = .5 * (b + x) - C * (S - Z),
                        k = .5 * (Z + S) + C * (x - b),
                        A = Math.atan2(Z - k, b - F),
                        T = Math.atan2(S - k, x - F) - A;
                    T < 0 && 1 === i ? T += 2 * Math.PI : T > 0 && 0 === i && (T -= 2 * Math.PI);
                    for (var D = Math.ceil(Math.abs(T / (.5 * Math.PI + .001))), P = [], B = 0; B < D; B++) {
                        var O = A + B * T / D,
                            N = A + (B + 1) * T / D;
                        P[B] = [F, k, O, N, o, n, h, f]
                    }
                    return P
                },
                p = function(t, e, o, n, r, i, s, a) {
                    var u = a * r,
                        c = -s * i,
                        l = s * r,
                        d = a * i,
                        h = .5 * (n - o),
                        f = 8 / 3 * Math.sin(.5 * h) * Math.sin(.5 * h) / Math.sin(h),
                        p = t + Math.cos(o) - f * Math.sin(o),
                        v = e + Math.sin(o) + f * Math.cos(o),
                        g = t + Math.cos(n),
                        y = e + Math.sin(n),
                        m = g + f * Math.sin(n),
                        b = y - f * Math.cos(n);
                    return [u * p + c * v, l * p + d * v, u * m + c * b, l * m + d * b, u * g + c * y, l * g + d * y]
                },
                v = function(t) {
                    return function(t) {
                        r = i = s = a = u = c = 0;
                        for (var e = [], o = 0; o < t.length; o++) {
                            var n = t[o];
                            if (n.cmd && "function" === typeof d[n.cmd]) {
                                var l = d[n.cmd](n.args);
                                Array.isArray(l) ? e = e.concat(l) : e.push(l)
                            }
                        }
                        return e
                    }(function(t) {
                        for (var e, o = [], n = [], r = "", i = !1, s = 0, a = 0, u = t; a < u.length; a++) {
                            var c = u[a];
                            if (l.has(c)) s = l.get(c), e && (r.length > 0 && (n[n.length] = +r), o[o.length] = {
                                cmd: e,
                                args: n
                            }, n = [], r = "", i = !1), e = c;
                            else if ([" ", ","].includes(c) || "-" === c && r.length > 0 && "e" !== r[r.length - 1] || "." === c && i) {
                                if (0 === r.length) continue;
                                n.length === s ? (o[o.length] = {
                                    cmd: e,
                                    args: n
                                }, n = [+r], "M" === e && (e = "L"), "m" === e && (e = "l")) : n[n.length] = +r, i = "." === c, r = ["-", "."].includes(c) ? c : ""
                            } else r += c, "." === c && (i = !0)
                        }
                        return r.length > 0 && (n.length === s ? (o[o.length] = {
                            cmd: e,
                            args: n
                        }, n = [+r], "M" === e && (e = "L"), "m" === e && (e = "l")) : n[n.length] = +r), o[o.length] = {
                            cmd: e,
                            args: n
                        }, o
                    }(t))
                }
        },
        686719: (t, e, o) => {
            "use strict";
            var n;
            o.d(e, {
                    H: () => n
                }),
                function(t) {
                    t[t.Left = 0] = "Left", t[t.Center = 1] = "Center", t[t.Right = 2] = "Right"
                }(n || (n = {}))
        },
        768065: (t, e, o) => {
            "use strict";
            o.d(e, {
                H: () => n.H,
                jg: () => r.jg,
                qs: () => r.qs,
                v0: () => r.v0
            });
            var n = o(686719),
                r = o(488329)
        },
        488329: (t, e, o) => {
            "use strict";
            o.d(e, {
                jg: () => c,
                qs: () => l,
                v0: () => d
            });
            var n = o(934755),
                r = o(686719),
                i = o(451441),
                s = function(t, e, o, n) {
                    void 0 === n && (n = !1);
                    for (var r = 4; r < 500;) {
                        for (var i = 0, s = 0, a = t.length; s < a; s++) {
                            i += 1;
                            for (var u = t[s].split(" "), c = o.width, l = 0, d = u.length; l < d; l++) {
                                var h = l === d - 1 ? u[l] : u[l] + " ",
                                    f = e.widthOfTextAtSize(h, r);
                                (c -= f) <= 0 && (i += 1, c = o.width - f)
                            }
                        }
                        if (!n && i > t.length) return r - 1;
                        var p = e.heightAtSize(r);
                        if ((p + .2 * p) * i > Math.abs(o.height)) return r - 1;
                        r += 1
                    }
                    return r
                },
                a = function(t) {
                    for (var e = t.length; e > 0; e--)
                        if (/\s/.test(t[e])) return e
                },
                u = function(t, e, o, n) {
                    for (var r, i = t.length; i > 0;) {
                        var s = t.substring(0, i),
                            u = o.encodeText(s),
                            c = o.widthOfTextAtSize(s, n);
                        if (c < e) return {
                            line: s,
                            encoded: u,
                            width: c,
                            remainder: t.substring(i) || void 0
                        };
                        i = null !== (r = a(s)) && void 0 !== r ? r : 0
                    }
                    return {
                        line: t,
                        encoded: o.encodeText(t),
                        width: o.widthOfTextAtSize(t, n),
                        remainder: void 0
                    }
                },
                c = function(t, e) {
                    var o = e.alignment,
                        n = e.fontSize,
                        a = e.font,
                        c = e.bounds,
                        l = (0, i.f7)((0, i.FV)(t));
                    void 0 !== n && 0 !== n || (n = s(l, a, c, !0));
                    for (var d = a.heightAtSize(n), h = d + .2 * d, f = [], p = c.x, v = c.y, g = c.x + c.width, y = c.y + c.height, m = c.y + c.height, b = 0, Z = l.length; b < Z; b++)
                        for (var x = l[b]; void 0 !== x;) {
                            var S = u(x, c.width, a, n),
                                w = S.line,
                                C = S.encoded,
                                F = S.width,
                                k = S.remainder,
                                A = o === r.H.Left ? c.x : o === r.H.Center ? c.x + c.width / 2 - F / 2 : o === r.H.Right ? c.x + c.width - F : c.x;
                            A < p && (p = A), (m -= h) < v && (v = m), A + F > g && (g = A + F), m + d > y && (y = m + d), f.push({
                                text: w,
                                encoded: C,
                                width: F,
                                height: d,
                                x: A,
                                y: m
                            }), x = null === k || void 0 === k ? void 0 : k.trim()
                        }
                    return {
                        fontSize: n,
                        lineHeight: h,
                        lines: f,
                        bounds: {
                            x: p,
                            y: v,
                            width: g - p,
                            height: y - v
                        }
                    }
                },
                l = function(t, e) {
                    var o = e.fontSize,
                        r = e.font,
                        s = e.bounds,
                        a = e.cellCount,
                        u = (0, i.VX)((0, i.FV)(t));
                    if (u.length > a) throw new n.ll(u.length, a);
                    void 0 !== o && 0 !== o || (o = function(t, e, o, n) {
                        for (var r = o.width / n, s = o.height, a = 4, u = (0, i.Qs)(t); a < 500;) {
                            for (var c = 0, l = u.length; c < l; c++) {
                                var d = u[c];
                                if (e.widthOfTextAtSize(d, a) > .75 * r) return a - 1
                            }
                            if (e.heightAtSize(a, {
                                    descender: !1
                                }) > s) return a - 1;
                            a += 1
                        }
                        return a
                    }(u, r, s, a));
                    for (var c = s.width / a, l = r.heightAtSize(o, {
                            descender: !1
                        }), d = s.y + (s.height / 2 - l / 2), h = [], f = s.x, p = s.y, v = s.x + s.width, g = s.y + s.height, y = 0, m = 0; y < a;) {
                        var b = (0, i.Vk)(u, m),
                            Z = b[0],
                            x = b[1],
                            S = r.encodeText(Z),
                            w = r.widthOfTextAtSize(Z, o),
                            C = s.x + (c * y + c / 2) - w / 2;
                        C < f && (f = C), d < p && (p = d), C + w > v && (v = C + w), d + l > g && (g = d + l), h.push({
                            text: u,
                            encoded: S,
                            width: w,
                            height: l,
                            x: C,
                            y: d
                        }), y += 1, m += x
                    }
                    return {
                        fontSize: o,
                        cells: h,
                        bounds: {
                            x: f,
                            y: p,
                            width: v - f,
                            height: g - p
                        }
                    }
                },
                d = function(t, e) {
                    var o = e.alignment,
                        n = e.fontSize,
                        a = e.font,
                        u = e.bounds,
                        c = (0, i.VX)((0, i.FV)(t));
                    void 0 !== n && 0 !== n || (n = s([c], a, u));
                    var l = a.encodeText(c),
                        d = a.widthOfTextAtSize(c, n),
                        h = a.heightAtSize(n, {
                            descender: !1
                        }),
                        f = o === r.H.Left ? u.x : o === r.H.Center ? u.x + u.width / 2 - d / 2 : o === r.H.Right ? u.x + u.width - d : u.x,
                        p = u.y + (u.height / 2 - h / 2);
                    return {
                        fontSize: n,
                        line: {
                            text: c,
                            encoded: l,
                            width: d,
                            height: h,
                            x: f,
                            y: p
                        },
                        bounds: {
                            x: f,
                            y: p,
                            width: d,
                            height: h
                        }
                    }
                }
        },
        676834: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => w
            });
            var n = o(570655),
                r = o(999591),
                i = o.n(r),
                s = o(921617),
                a = o(231732),
                u = o(634055),
                c = o(754650),
                l = o(217802),
                d = o(495268),
                h = o(998430),
                f = o(953225),
                p = o(542018),
                v = o(150351),
                g = o(964911),
                y = o(532596),
                m = o(103382),
                b = o(229153),
                Z = o(451441),
                x = o(372370),
                S = function(t, e) {
                    var o = t[0],
                        n = e[0];
                    return o.objectNumber - n.objectNumber
                };
            const w = function() {
                function t() {
                    this.largestObjectNumber = 0, this.header = s.Z.forVersion(1, 7), this.trailerInfo = {}, this.indirectObjects = new Map, this.rng = x.R.withSeed(1)
                }
                return t.prototype.assign = function(t, e) {
                    this.indirectObjects.set(t, e), t.objectNumber > this.largestObjectNumber && (this.largestObjectNumber = t.objectNumber)
                }, t.prototype.nextRef = function() {
                    return this.largestObjectNumber += 1, g.Z.of(this.largestObjectNumber)
                }, t.prototype.register = function(t) {
                    var e = this.nextRef();
                    return this.assign(e, t), e
                }, t.prototype.delete = function(t) {
                    return this.indirectObjects.delete(t)
                }, t.prototype.lookupMaybe = function(t) {
                    for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
                    var n = e.includes(h.Z),
                        r = t instanceof g.Z ? this.indirectObjects.get(t) : t;
                    if (r && (r !== h.Z || n)) {
                        for (var i = 0, s = e.length; i < s; i++) {
                            var u = e[i];
                            if (u === h.Z) {
                                if (r === h.Z) return r
                            } else if (r instanceof u) return r
                        }
                        throw new a.VX(e, r)
                    }
                }, t.prototype.lookup = function(t) {
                    for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
                    var n = t instanceof g.Z ? this.indirectObjects.get(t) : t;
                    if (0 === e.length) return n;
                    for (var r = 0, i = e.length; r < i; r++) {
                        var s = e[r];
                        if (s === h.Z) {
                            if (n === h.Z) return n
                        } else if (n instanceof s) return n
                    }
                    throw new a.VX(e, n)
                }, t.prototype.getObjectRef = function(t) {
                    for (var e = Array.from(this.indirectObjects.entries()), o = 0, n = e.length; o < n; o++) {
                        var r = e[o],
                            i = r[0];
                        if (r[1] === t) return i
                    }
                }, t.prototype.enumerateIndirectObjects = function() {
                    return Array.from(this.indirectObjects.entries()).sort(S)
                }, t.prototype.obj = function(t) {
                    if (t instanceof p.Z) return t;
                    if (null === t || void 0 === t) return h.Z;
                    if ("string" === typeof t) return d.Z.of(t);
                    if ("number" === typeof t) return f.Z.of(t);
                    if ("boolean" === typeof t) return t ? c.Z.True : c.Z.False;
                    if (Array.isArray(t)) {
                        for (var e = u.Z.withContext(this), o = 0, n = t.length; o < n; o++) e.push(this.obj(t[o]));
                        return e
                    }
                    var r = l.Z.withContext(this),
                        i = Object.keys(t);
                    for (o = 0, n = i.length; o < n; o++) {
                        var s = i[o],
                            a = t[s];
                        void 0 !== a && r.set(d.Z.of(s), this.obj(a))
                    }
                    return r
                }, t.prototype.stream = function(t, e) {
                    return void 0 === e && (e = {}), v.Z.of(this.obj(e), (0, Z.b3)(t))
                }, t.prototype.flateStream = function(t, e) {
                    return void 0 === e && (e = {}), this.stream(i().deflate((0, Z.b3)(t)), (0, n.pi)((0, n.pi)({}, e), {
                        Filter: "FlateDecode"
                    }))
                }, t.prototype.contentStream = function(t, e) {
                    return void 0 === e && (e = {}), b.Z.of(this.obj(e), t)
                }, t.prototype.formXObject = function(t, e) {
                    return void 0 === e && (e = {}), this.contentStream(t, (0, n.pi)((0, n.pi)({
                        BBox: this.obj([0, 0, 0, 0]),
                        Matrix: this.obj([1, 0, 0, 1, 0, 0])
                    }, e), {
                        Type: "XObject",
                        Subtype: "Form"
                    }))
                }, t.prototype.getPushGraphicsStateContentStream = function() {
                    if (this.pushGraphicsStateContentStreamRef) return this.pushGraphicsStateContentStreamRef;
                    var t = this.obj({}),
                        e = y.Z.of(m.Z.PushGraphicsState),
                        o = b.Z.of(t, [e]);
                    return this.pushGraphicsStateContentStreamRef = this.register(o), this.pushGraphicsStateContentStreamRef
                }, t.prototype.getPopGraphicsStateContentStream = function() {
                    if (this.popGraphicsStateContentStreamRef) return this.popGraphicsStateContentStreamRef;
                    var t = this.obj({}),
                        e = y.Z.of(m.Z.PopGraphicsState),
                        o = b.Z.of(t, [e]);
                    return this.popGraphicsStateContentStreamRef = this.register(o), this.popGraphicsStateContentStreamRef
                }, t.prototype.addRandomSuffix = function(t, e) {
                    return void 0 === e && (e = 4), t + "-" + Math.floor(this.rng.nextInt() * Math.pow(10, e))
                }, t.create = function() {
                    return new t
                }, t
            }()
        },
        921108: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => c
            });
            var n = o(634055),
                r = o(217802),
                i = o(495268),
                s = o(964911),
                a = o(56962),
                u = o(974874);
            const c = function() {
                function t(t, e) {
                    var o = this;
                    this.traversedObjects = new Map, this.copy = function(t) {
                        return t instanceof u.Z ? o.copyPDFPage(t) : t instanceof r.Z ? o.copyPDFDict(t) : t instanceof n.Z ? o.copyPDFArray(t) : t instanceof a.Z ? o.copyPDFStream(t) : t instanceof s.Z ? o.copyPDFIndirectObject(t) : t.clone()
                    }, this.copyPDFPage = function(t) {
                        for (var e = t.clone(), n = u.Z.InheritableEntries, r = 0, s = n.length; r < s; r++) {
                            var a = i.Z.of(n[r]),
                                c = e.getInheritableAttribute(a);
                            !e.get(a) && c && e.set(a, c)
                        }
                        return e.delete(i.Z.of("Parent")), o.copyPDFDict(e)
                    }, this.copyPDFDict = function(t) {
                        if (o.traversedObjects.has(t)) return o.traversedObjects.get(t);
                        var e = t.clone(o.dest);
                        o.traversedObjects.set(t, e);
                        for (var n = t.entries(), r = 0, i = n.length; r < i; r++) {
                            var s = n[r],
                                a = s[0],
                                u = s[1];
                            e.set(a, o.copy(u))
                        }
                        return e
                    }, this.copyPDFArray = function(t) {
                        if (o.traversedObjects.has(t)) return o.traversedObjects.get(t);
                        var e = t.clone(o.dest);
                        o.traversedObjects.set(t, e);
                        for (var n = 0, r = t.size(); n < r; n++) {
                            var i = t.get(n);
                            e.set(n, o.copy(i))
                        }
                        return e
                    }, this.copyPDFStream = function(t) {
                        if (o.traversedObjects.has(t)) return o.traversedObjects.get(t);
                        var e = t.clone(o.dest);
                        o.traversedObjects.set(t, e);
                        for (var n = t.dict.entries(), r = 0, i = n.length; r < i; r++) {
                            var s = n[r],
                                a = s[0],
                                u = s[1];
                            e.dict.set(a, o.copy(u))
                        }
                        return e
                    }, this.copyPDFIndirectObject = function(t) {
                        if (!o.traversedObjects.has(t)) {
                            var e = o.dest.nextRef();
                            o.traversedObjects.set(t, e);
                            var n = o.src.lookup(t);
                            if (n) {
                                var r = o.copy(n);
                                o.dest.assign(e, r)
                            }
                        }
                        return o.traversedObjects.get(t)
                    }, this.src = t, this.dest = e
                }
                return t.for = function(e, o) {
                    return new t(e, o)
                }, t
            }()
        },
        919e3: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => l
            });
            var n = o(570655),
                r = o(54222),
                i = o(418158),
                s = o(634055),
                a = o(495268),
                u = o(464435),
                c = o(231732);
            const l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.prototype.Opt = function() {
                    return this.dict.lookupMaybe(a.Z.of("Opt"), r.Z, i.Z, s.Z)
                }, e.prototype.setOpt = function(t) {
                    this.dict.set(a.Z.of("Opt"), this.dict.context.obj(t))
                }, e.prototype.getExportValues = function() {
                    var t = this.Opt();
                    if (t) {
                        if (t instanceof r.Z || t instanceof i.Z) return [t];
                        for (var e = [], o = 0, n = t.size(); o < n; o++) {
                            var s = t.lookup(o);
                            (s instanceof r.Z || s instanceof i.Z) && e.push(s)
                        }
                        return e
                    }
                }, e.prototype.removeExportValue = function(t) {
                    var e = this.Opt();
                    if (e)
                        if (e instanceof r.Z || e instanceof i.Z) {
                            if (0 !== t) throw new c.sE(t, 0, 0);
                            this.setOpt([])
                        } else {
                            if (t < 0 || t > e.size()) throw new c.sE(t, 0, e.size());
                            e.remove(t)
                        }
                }, e.prototype.normalizeExportValues = function() {
                    for (var t, e, o, n, r = null !== (t = this.getExportValues()) && void 0 !== t ? t : [], s = [], a = this.getWidgets(), u = 0, c = a.length; u < c; u++) {
                        var l = a[u],
                            d = null !== (e = r[u]) && void 0 !== e ? e : i.Z.fromText(null !== (n = null === (o = l.getOnValue()) || void 0 === o ? void 0 : o.decodeText()) && void 0 !== n ? n : "");
                        s.push(d)
                    }
                    this.setOpt(s)
                }, e.prototype.addOpt = function(t, e) {
                    var o;
                    this.normalizeExportValues();
                    var n, r = t.decodeText();
                    if (e)
                        for (var i = null !== (o = this.getExportValues()) && void 0 !== o ? o : [], s = 0, a = i.length; s < a; s++) {
                            i[s].decodeText() === r && (n = s)
                        }
                    var u = this.Opt();
                    return u.push(t), null !== n && void 0 !== n ? n : u.size() - 1
                }, e.prototype.addWidgetWithOpt = function(t, e, o) {
                    var n = this.addOpt(e, o),
                        r = a.Z.of(String(n));
                    return this.addWidget(t), r
                }, e
            }(u.Z)
        },
        47749: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => a
            });
            var n = o(570655),
                r = o(495268),
                i = o(919e3),
                s = o(231732);
            const a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.prototype.setValue = function(t) {
                    var e;
                    if (t !== (null !== (e = this.getOnValue()) && void 0 !== e ? e : r.Z.of("Yes")) && t !== r.Z.of("Off")) throw new s.vM;
                    this.dict.set(r.Z.of("V"), t);
                    for (var o = this.getWidgets(), n = 0, i = o.length; n < i; n++) {
                        var a = o[n],
                            u = a.getOnValue() === t ? t : r.Z.of("Off");
                        a.setAppearanceState(u)
                    }
                }, e.prototype.getValue = function() {
                    var t = this.V();
                    return t instanceof r.Z ? t : r.Z.of("Off")
                }, e.prototype.getOnValue = function() {
                    var t = this.getWidgets()[0];
                    return null === t || void 0 === t ? void 0 : t.getOnValue()
                }, e.fromDict = function(t, o) {
                    return new e(t, o)
                }, e.create = function(t) {
                    var o = t.obj({
                        FT: "Btn",
                        Kids: []
                    });
                    return new e(o, t.register(o))
                }, e
            }(i.Z)
        },
        51432: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => d
            });
            var n = o(570655),
                r = o(464435),
                i = o(418158),
                s = o(54222),
                a = o(634055),
                u = o(495268),
                c = o(242571),
                l = o(231732);
            const d = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.prototype.setValues = function(t) {
                    if (this.hasFlag(c.m0.Combo) && !this.hasFlag(c.m0.Edit) && !this.valuesAreValid(t)) throw new l.vM;
                    if (0 === t.length && this.dict.delete(u.Z.of("V")), 1 === t.length && this.dict.set(u.Z.of("V"), t[0]), t.length > 1) {
                        if (!this.hasFlag(c.m0.MultiSelect)) throw new l.TC;
                        this.dict.set(u.Z.of("V"), this.dict.context.obj(t))
                    }
                    this.updateSelectedIndices(t)
                }, e.prototype.valuesAreValid = function(t) {
                    for (var e = this.getOptions(), o = function(o, n) {
                            var r = t[o].decodeText();
                            if (!e.find((function(t) {
                                    return r === (t.display || t.value).decodeText()
                                }))) return {
                                value: !1
                            }
                        }, n = 0, r = t.length; n < r; n++) {
                        var i = o(n);
                        if ("object" === typeof i) return i.value
                    }
                    return !0
                }, e.prototype.updateSelectedIndices = function(t) {
                    if (t.length > 1) {
                        for (var e = new Array(t.length), o = this.getOptions(), n = function(n, r) {
                                var i = t[n].decodeText();
                                e[n] = o.findIndex((function(t) {
                                    return i === (t.display || t.value).decodeText()
                                }))
                            }, r = 0, i = t.length; r < i; r++) n(r);
                        this.dict.set(u.Z.of("I"), this.dict.context.obj(e.sort()))
                    } else this.dict.delete(u.Z.of("I"))
                }, e.prototype.getValues = function() {
                    var t = this.V();
                    if (t instanceof s.Z || t instanceof i.Z) return [t];
                    if (t instanceof a.Z) {
                        for (var e = [], o = 0, n = t.size(); o < n; o++) {
                            var r = t.lookup(o);
                            (r instanceof s.Z || r instanceof i.Z) && e.push(r)
                        }
                        return e
                    }
                    return []
                }, e.prototype.Opt = function() {
                    return this.dict.lookupMaybe(u.Z.of("Opt"), s.Z, i.Z, a.Z)
                }, e.prototype.setOptions = function(t) {
                    for (var e = new Array(t.length), o = 0, n = t.length; o < n; o++) {
                        var r = t[o],
                            i = r.value,
                            s = r.display;
                        e[o] = this.dict.context.obj([i, s || i])
                    }
                    this.dict.set(u.Z.of("Opt"), this.dict.context.obj(e))
                }, e.prototype.getOptions = function() {
                    var t = this.Opt();
                    if (t instanceof s.Z || t instanceof i.Z) return [{
                        value: t,
                        display: t
                    }];
                    if (t instanceof a.Z) {
                        for (var e = [], o = 0, n = t.size(); o < n; o++) {
                            var r = t.lookup(o);
                            if ((r instanceof s.Z || r instanceof i.Z) && e.push({
                                    value: r,
                                    display: r
                                }), r instanceof a.Z && r.size() > 0) {
                                var u = r.lookup(0, s.Z, i.Z),
                                    c = r.lookupMaybe(1, s.Z, i.Z);
                                e.push({
                                    value: u,
                                    display: c || u
                                })
                            }
                        }
                        return e
                    }
                    return []
                }, e
            }(r.Z)
        },
        698874: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => s
            });
            var n = o(570655),
                r = o(51432),
                i = o(242571);
            const s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.fromDict = function(t, o) {
                    return new e(t, o)
                }, e.create = function(t) {
                    var o = t.obj({
                        FT: "Ch",
                        Ff: i.m0.Combo,
                        Kids: []
                    });
                    return new e(o, t.register(o))
                }, e
            }(r.Z)
        },
        759925: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => f
            });
            var n = o(217802),
                r = o(54222),
                i = o(418158),
                s = o(495268),
                a = o(953225),
                u = o(634055),
                c = o(964911),
                l = o(451441),
                d = o(231732),
                h = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/;
            const f = function() {
                function t(t, e) {
                    this.dict = t, this.ref = e
                }
                return t.prototype.T = function() {
                    return this.dict.lookupMaybe(s.Z.of("T"), r.Z, i.Z)
                }, t.prototype.Ff = function() {
                    var t = this.getInheritableAttribute(s.Z.of("Ff"));
                    return this.dict.context.lookupMaybe(t, a.Z)
                }, t.prototype.V = function() {
                    var t = this.getInheritableAttribute(s.Z.of("V"));
                    return this.dict.context.lookup(t)
                }, t.prototype.Kids = function() {
                    return this.dict.lookupMaybe(s.Z.of("Kids"), u.Z)
                }, t.prototype.DA = function() {
                    var t = this.dict.lookup(s.Z.of("DA"));
                    if (t instanceof r.Z || t instanceof i.Z) return t
                }, t.prototype.setKids = function(t) {
                    this.dict.set(s.Z.of("Kids"), this.dict.context.obj(t))
                }, t.prototype.getParent = function() {
                    var e = this.dict.get(s.Z.of("Parent"));
                    if (e instanceof c.Z) return new t(this.dict.lookup(s.Z.of("Parent"), n.Z), e)
                }, t.prototype.setParent = function(t) {
                    t ? this.dict.set(s.Z.of("Parent"), t) : this.dict.delete(s.Z.of("Parent"))
                }, t.prototype.getFullyQualifiedName = function() {
                    var t = this.getParent();
                    return t ? t.getFullyQualifiedName() + "." + this.getPartialName() : this.getPartialName()
                }, t.prototype.getPartialName = function() {
                    var t;
                    return null === (t = this.T()) || void 0 === t ? void 0 : t.decodeText()
                }, t.prototype.setPartialName = function(t) {
                    t ? this.dict.set(s.Z.of("T"), i.Z.fromText(t)) : this.dict.delete(s.Z.of("T"))
                }, t.prototype.setDefaultAppearance = function(t) {
                    this.dict.set(s.Z.of("DA"), r.Z.of(t))
                }, t.prototype.getDefaultAppearance = function() {
                    var t = this.DA();
                    return t instanceof i.Z ? t.decodeText() : null === t || void 0 === t ? void 0 : t.asString()
                }, t.prototype.setFontSize = function(t) {
                    var e, o = null !== (e = this.getFullyQualifiedName()) && void 0 !== e ? e : "",
                        n = this.getDefaultAppearance();
                    if (!n) throw new d._z(o);
                    var r = (0, l.JZ)(n, h);
                    if (!r.match) throw new d.Iu(o);
                    var i = n.slice(0, r.pos - r.match[0].length),
                        s = r.pos <= n.length ? n.slice(r.pos) : "",
                        a = i + " /" + r.match[1] + " " + t + " Tf " + s;
                    this.setDefaultAppearance(a)
                }, t.prototype.getFlags = function() {
                    var t, e;
                    return null !== (e = null === (t = this.Ff()) || void 0 === t ? void 0 : t.asNumber()) && void 0 !== e ? e : 0
                }, t.prototype.setFlags = function(t) {
                    this.dict.set(s.Z.of("Ff"), a.Z.of(t))
                }, t.prototype.hasFlag = function(t) {
                    return 0 !== (this.getFlags() & t)
                }, t.prototype.setFlag = function(t) {
                    var e = this.getFlags();
                    this.setFlags(e | t)
                }, t.prototype.clearFlag = function(t) {
                    var e = this.getFlags();
                    this.setFlags(e & ~t)
                }, t.prototype.setFlagTo = function(t, e) {
                    e ? this.setFlag(t) : this.clearFlag(t)
                }, t.prototype.getInheritableAttribute = function(t) {
                    var e;
                    return this.ascend((function(o) {
                        e || (e = o.dict.get(t))
                    })), e
                }, t.prototype.ascend = function(t) {
                    t(this);
                    var e = this.getParent();
                    e && e.ascend(t)
                }, t
            }()
        },
        800175: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => r
            });
            var n = o(570655);
            const r = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.fromDict = function(t, o) {
                    return new e(t, o)
                }, e.create = function(t) {
                    var o = t.obj({
                        FT: "Ch",
                        Kids: []
                    });
                    return new e(o, t.register(o))
                }, e
            }(o(51432).Z)
        },
        834424: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => i
            });
            var n = o(570655),
                r = o(495268);
            const i = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.prototype.addField = function(t) {
                    var e = this.normalizedEntries().Kids;
                    null === e || void 0 === e || e.push(t)
                }, e.prototype.normalizedEntries = function() {
                    var t = this.Kids();
                    return t || (t = this.dict.context.obj([]), this.dict.set(r.Z.of("Kids"), t)), {
                        Kids: t
                    }
                }, e.fromDict = function(t, o) {
                    return new e(t, o)
                }, e.create = function(t) {
                    var o = t.obj({});
                    return new e(o, t.register(o))
                }, e
            }(o(759925).Z)
        },
        727566: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => s
            });
            var n = o(570655),
                r = o(919e3),
                i = o(242571);
            const s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.fromDict = function(t, o) {
                    return new e(t, o)
                }, e.create = function(t) {
                    var o = t.obj({
                        FT: "Btn",
                        Ff: i.Ub.PushButton,
                        Kids: []
                    });
                    return new e(o, t.register(o))
                }, e
            }(r.Z)
        },
        562770: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => u
            });
            var n = o(570655),
                r = o(495268),
                i = o(919e3),
                s = o(242571),
                a = o(231732);
            const u = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.prototype.setValue = function(t) {
                    if (!this.getOnValues().includes(t) && t !== r.Z.of("Off")) throw new a.vM;
                    this.dict.set(r.Z.of("V"), t);
                    for (var e = this.getWidgets(), o = 0, n = e.length; o < n; o++) {
                        var i = e[o],
                            s = i.getOnValue() === t ? t : r.Z.of("Off");
                        i.setAppearanceState(s)
                    }
                }, e.prototype.getValue = function() {
                    var t = this.V();
                    return t instanceof r.Z ? t : r.Z.of("Off")
                }, e.prototype.getOnValues = function() {
                    for (var t = this.getWidgets(), e = [], o = 0, n = t.length; o < n; o++) {
                        var r = t[o].getOnValue();
                        r && e.push(r)
                    }
                    return e
                }, e.fromDict = function(t, o) {
                    return new e(t, o)
                }, e.create = function(t) {
                    var o = t.obj({
                        FT: "Btn",
                        Ff: s.Ub.Radio,
                        Kids: []
                    });
                    return new e(o, t.register(o))
                }, e
            }(i.Z)
        },
        695199: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => r
            });
            var n = o(570655);
            const r = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.fromDict = function(t, o) {
                    return new e(t, o)
                }, e
            }(o(464435).Z)
        },
        464435: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => c
            });
            var n = o(570655),
                r = o(217802),
                i = o(495268),
                s = o(759925),
                a = o(95831),
                u = o(231732);
            const c = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.prototype.FT = function() {
                    var t = this.getInheritableAttribute(i.Z.of("FT"));
                    return this.dict.context.lookup(t, i.Z)
                }, e.prototype.getWidgets = function() {
                    var t = this.Kids();
                    if (!t) return [a.Z.fromDict(this.dict)];
                    for (var e = new Array(t.size()), o = 0, n = t.size(); o < n; o++) {
                        var i = t.lookup(o, r.Z);
                        e[o] = a.Z.fromDict(i)
                    }
                    return e
                }, e.prototype.addWidget = function(t) {
                    this.normalizedEntries().Kids.push(t)
                }, e.prototype.removeWidget = function(t) {
                    var e = this.Kids();
                    if (e) {
                        if (t < 0 || t > e.size()) throw new u.sE(t, 0, e.size());
                        e.remove(t)
                    } else {
                        if (0 !== t) throw new u.sE(t, 0, 0);
                        this.setKids([])
                    }
                }, e.prototype.normalizedEntries = function() {
                    var t = this.Kids();
                    return t || (t = this.dict.context.obj([this.ref]), this.dict.set(i.Z.of("Kids"), t)), {
                        Kids: t
                    }
                }, e.fromDict = function(t, o) {
                    return new e(t, o)
                }, e
            }(s.Z)
        },
        334657: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => u
            });
            var n = o(570655),
                r = o(953225),
                i = o(54222),
                s = o(418158),
                a = o(495268);
            const u = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.prototype.MaxLen = function() {
                    var t = this.dict.lookup(a.Z.of("MaxLen"));
                    if (t instanceof r.Z) return t
                }, e.prototype.Q = function() {
                    var t = this.dict.lookup(a.Z.of("Q"));
                    if (t instanceof r.Z) return t
                }, e.prototype.setMaxLength = function(t) {
                    this.dict.set(a.Z.of("MaxLen"), r.Z.of(t))
                }, e.prototype.removeMaxLength = function() {
                    this.dict.delete(a.Z.of("MaxLen"))
                }, e.prototype.getMaxLength = function() {
                    var t;
                    return null === (t = this.MaxLen()) || void 0 === t ? void 0 : t.asNumber()
                }, e.prototype.setQuadding = function(t) {
                    this.dict.set(a.Z.of("Q"), r.Z.of(t))
                }, e.prototype.getQuadding = function() {
                    var t;
                    return null === (t = this.Q()) || void 0 === t ? void 0 : t.asNumber()
                }, e.prototype.setValue = function(t) {
                    this.dict.set(a.Z.of("V"), t)
                }, e.prototype.removeValue = function() {
                    this.dict.delete(a.Z.of("V"))
                }, e.prototype.getValue = function() {
                    var t = this.V();
                    if (t instanceof i.Z || t instanceof s.Z) return t
                }, e.fromDict = function(t, o) {
                    return new e(t, o)
                }, e.create = function(t) {
                    var o = t.obj({
                        FT: "Tx",
                        Kids: []
                    });
                    return new e(o, t.register(o))
                }, e
            }(o(464435).Z)
        },
        242571: (t, e, o) => {
            "use strict";
            o.d(e, {
                PV: () => n,
                Ub: () => r,
                m0: () => s,
                oD: () => i
            });
            var n, r, i, s, a = function(t) {
                return 1 << t
            };
            ! function(t) {
                t[t.ReadOnly = a(0)] = "ReadOnly", t[t.Required = a(1)] = "Required", t[t.NoExport = a(2)] = "NoExport"
            }(n || (n = {})),
            function(t) {
                t[t.NoToggleToOff = a(14)] = "NoToggleToOff", t[t.Radio = a(15)] = "Radio", t[t.PushButton = a(16)] = "PushButton", t[t.RadiosInUnison = a(25)] = "RadiosInUnison"
            }(r || (r = {})),
            function(t) {
                t[t.Multiline = a(12)] = "Multiline", t[t.Password = a(13)] = "Password", t[t.FileSelect = a(20)] = "FileSelect", t[t.DoNotSpellCheck = a(22)] = "DoNotSpellCheck", t[t.DoNotScroll = a(23)] = "DoNotScroll", t[t.Comb = a(24)] = "Comb", t[t.RichText = a(25)] = "RichText"
            }(i || (i = {})),
            function(t) {
                t[t.Combo = a(17)] = "Combo", t[t.Edit = a(18)] = "Edit", t[t.Sort = a(19)] = "Sort", t[t.MultiSelect = a(21)] = "MultiSelect", t[t.DoNotSpellCheck = a(22)] = "DoNotSpellCheck", t[t.CommitOnSelChange = a(26)] = "CommitOnSelChange"
            }(s || (s = {}))
        },
        757244: (t, e, o) => {
            "use strict";
            o.d(e, {
                Au: () => c.Z,
                Ei: () => r.Z,
                Fs: () => p.Z,
                Kg: () => a.Z,
                P0: () => i.Z,
                PS: () => u.Z,
                PV: () => g.PV,
                P_: () => y.P,
                Ub: () => g.Ub,
                WT: () => y.W,
                Ym: () => h.Z,
                _: () => d.Z,
                _X: () => v.Z,
                m0: () => g.m0,
                oD: () => g.oD,
                qg: () => l.Z,
                ry: () => n.Z,
                sS: () => s.Z,
                uQ: () => f.Z
            });
            var n = o(919e3),
                r = o(47749),
                i = o(51432),
                s = o(698874),
                a = o(759925),
                u = o(678684),
                c = o(800175),
                l = o(834424),
                d = o(727566),
                h = o(562770),
                f = o(695199),
                p = o(464435),
                v = o(334657),
                g = o(242571),
                y = o(241376)
        },
        241376: (t, e, o) => {
            "use strict";
            o.d(e, {
                P: () => m,
                W: () => b
            });
            var n = o(953225),
                r = o(217802),
                i = o(495268),
                s = o(634055),
                a = o(964911),
                u = o(464435),
                c = o(834424),
                l = o(695199),
                d = o(334657),
                h = o(727566),
                f = o(562770),
                p = o(47749),
                v = o(698874),
                g = o(800175),
                y = o(242571),
                m = function(t) {
                    if (!t) return [];
                    for (var e = [], o = 0, n = t.size(); o < n; o++) {
                        var i = t.get(o),
                            s = t.lookup(o);
                        i instanceof a.Z && s instanceof r.Z && e.push([b(s, i), i])
                    }
                    return e
                },
                b = function(t, e) {
                    return Z(t) ? c.Z.fromDict(t, e) : x(t, e)
                },
                Z = function(t) {
                    var e = t.lookup(i.Z.of("Kids"));
                    if (e instanceof s.Z)
                        for (var o = 0, n = e.size(); o < n; o++) {
                            var a = e.lookup(o);
                            if (a instanceof r.Z && a.has(i.Z.of("T"))) return !0
                        }
                    return !1
                },
                x = function(t, e) {
                    var o = F(t, i.Z.of("FT")),
                        n = t.context.lookup(o, i.Z);
                    return n === i.Z.of("Btn") ? S(t, e) : n === i.Z.of("Ch") ? w(t, e) : n === i.Z.of("Tx") ? d.Z.fromDict(t, e) : n === i.Z.of("Sig") ? l.Z.fromDict(t, e) : u.Z.fromDict(t, e)
                },
                S = function(t, e) {
                    var o, r = F(t, i.Z.of("Ff")),
                        s = t.context.lookupMaybe(r, n.Z),
                        a = null !== (o = null === s || void 0 === s ? void 0 : s.asNumber()) && void 0 !== o ? o : 0;
                    return C(a, y.Ub.PushButton) ? h.Z.fromDict(t, e) : C(a, y.Ub.Radio) ? f.Z.fromDict(t, e) : p.Z.fromDict(t, e)
                },
                w = function(t, e) {
                    var o, r = F(t, i.Z.of("Ff")),
                        s = t.context.lookupMaybe(r, n.Z),
                        a = null !== (o = null === s || void 0 === s ? void 0 : s.asNumber()) && void 0 !== o ? o : 0;
                    return C(a, y.m0.Combo) ? v.Z.fromDict(t, e) : g.Z.fromDict(t, e)
                },
                C = function(t, e) {
                    return 0 !== (t & e)
                },
                F = function(t, e) {
                    var o;
                    return k(t, (function(t) {
                        o || (o = t.get(e))
                    })), o
                },
                k = function(t, e) {
                    e(t);
                    var o = t.lookupMaybe(i.Z.of("Parent"), r.Z);
                    o && k(o, e)
                }
        },
        867280: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => u
            });
            var n = o(495268),
                r = o(953225),
                i = o(634055),
                s = o(418158),
                a = o(54222);
            const u = function() {
                function t(t) {
                    this.dict = t
                }
                return t.prototype.R = function() {
                    var t = this.dict.lookup(n.Z.of("R"));
                    if (t instanceof r.Z) return t
                }, t.prototype.BC = function() {
                    var t = this.dict.lookup(n.Z.of("BC"));
                    if (t instanceof i.Z) return t
                }, t.prototype.BG = function() {
                    var t = this.dict.lookup(n.Z.of("BG"));
                    if (t instanceof i.Z) return t
                }, t.prototype.CA = function() {
                    var t = this.dict.lookup(n.Z.of("CA"));
                    if (t instanceof s.Z || t instanceof a.Z) return t
                }, t.prototype.RC = function() {
                    var t = this.dict.lookup(n.Z.of("RC"));
                    if (t instanceof s.Z || t instanceof a.Z) return t
                }, t.prototype.AC = function() {
                    var t = this.dict.lookup(n.Z.of("AC"));
                    if (t instanceof s.Z || t instanceof a.Z) return t
                }, t.prototype.getRotation = function() {
                    var t;
                    return null === (t = this.R()) || void 0 === t ? void 0 : t.asNumber()
                }, t.prototype.getBorderColor = function() {
                    var t = this.BC();
                    if (t) {
                        for (var e = [], o = 0, n = null === t || void 0 === t ? void 0 : t.size(); o < n; o++) {
                            var i = t.get(o);
                            i instanceof r.Z && e.push(i.asNumber())
                        }
                        return e
                    }
                }, t.prototype.getBackgroundColor = function() {
                    var t = this.BG();
                    if (t) {
                        for (var e = [], o = 0, n = null === t || void 0 === t ? void 0 : t.size(); o < n; o++) {
                            var i = t.get(o);
                            i instanceof r.Z && e.push(i.asNumber())
                        }
                        return e
                    }
                }, t.prototype.getCaptions = function() {
                    var t = this.CA(),
                        e = this.RC(),
                        o = this.AC();
                    return {
                        normal: null === t || void 0 === t ? void 0 : t.decodeText(),
                        rollover: null === e || void 0 === e ? void 0 : e.decodeText(),
                        down: null === o || void 0 === o ? void 0 : o.decodeText()
                    }
                }, t.prototype.setRotation = function(t) {
                    var e = this.dict.context.obj(t);
                    this.dict.set(n.Z.of("R"), e)
                }, t.prototype.setBorderColor = function(t) {
                    var e = this.dict.context.obj(t);
                    this.dict.set(n.Z.of("BC"), e)
                }, t.prototype.setBackgroundColor = function(t) {
                    var e = this.dict.context.obj(t);
                    this.dict.set(n.Z.of("BG"), e)
                }, t.prototype.setCaptions = function(t) {
                    var e = s.Z.fromText(t.normal);
                    if (this.dict.set(n.Z.of("CA"), e), t.rollover) {
                        var o = s.Z.fromText(t.rollover);
                        this.dict.set(n.Z.of("RC"), o)
                    } else this.dict.delete(n.Z.of("RC"));
                    if (t.down) {
                        var r = s.Z.fromText(t.down);
                        this.dict.set(n.Z.of("AC"), r)
                    } else this.dict.delete(n.Z.of("AC"))
                }, t.fromDict = function(e) {
                    return new t(e)
                }, t
            }()
        },
        448571: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => c
            });
            var n = o(217802),
                r = o(495268),
                i = o(56962),
                s = o(634055),
                a = o(964911),
                u = o(953225);
            const c = function() {
                function t(t) {
                    this.dict = t
                }
                return t.prototype.Rect = function() {
                    return this.dict.lookup(r.Z.of("Rect"), s.Z)
                }, t.prototype.AP = function() {
                    return this.dict.lookupMaybe(r.Z.of("AP"), n.Z)
                }, t.prototype.F = function() {
                    var t = this.dict.lookup(r.Z.of("F"));
                    return this.dict.context.lookupMaybe(t, u.Z)
                }, t.prototype.getRectangle = function() {
                    var t, e = this.Rect();
                    return null !== (t = null === e || void 0 === e ? void 0 : e.asRectangle()) && void 0 !== t ? t : {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }, t.prototype.setRectangle = function(t) {
                    var e = t.x,
                        o = t.y,
                        n = t.width,
                        i = t.height,
                        s = this.dict.context.obj([e, o, e + n, o + i]);
                    this.dict.set(r.Z.of("Rect"), s)
                }, t.prototype.getAppearanceState = function() {
                    var t = this.dict.lookup(r.Z.of("AS"));
                    if (t instanceof r.Z) return t
                }, t.prototype.setAppearanceState = function(t) {
                    this.dict.set(r.Z.of("AS"), t)
                }, t.prototype.setAppearances = function(t) {
                    this.dict.set(r.Z.of("AP"), t)
                }, t.prototype.ensureAP = function() {
                    var t = this.AP();
                    return t || (t = this.dict.context.obj({}), this.dict.set(r.Z.of("AP"), t)), t
                }, t.prototype.getNormalAppearance = function() {
                    var t = this.ensureAP().get(r.Z.of("N"));
                    if (t instanceof a.Z || t instanceof n.Z) return t;
                    throw new Error("Unexpected N type: " + (null === t || void 0 === t ? void 0 : t.constructor.name))
                }, t.prototype.setNormalAppearance = function(t) {
                    this.ensureAP().set(r.Z.of("N"), t)
                }, t.prototype.setRolloverAppearance = function(t) {
                    this.ensureAP().set(r.Z.of("R"), t)
                }, t.prototype.setDownAppearance = function(t) {
                    this.ensureAP().set(r.Z.of("D"), t)
                }, t.prototype.removeRolloverAppearance = function() {
                    var t = this.AP();
                    null === t || void 0 === t || t.delete(r.Z.of("R"))
                }, t.prototype.removeDownAppearance = function() {
                    var t = this.AP();
                    null === t || void 0 === t || t.delete(r.Z.of("D"))
                }, t.prototype.getAppearances = function() {
                    var t = this.AP();
                    if (t) return {
                        normal: t.lookup(r.Z.of("N"), n.Z, i.Z),
                        rollover: t.lookupMaybe(r.Z.of("R"), n.Z, i.Z),
                        down: t.lookupMaybe(r.Z.of("D"), n.Z, i.Z)
                    }
                }, t.prototype.getFlags = function() {
                    var t, e;
                    return null !== (e = null === (t = this.F()) || void 0 === t ? void 0 : t.asNumber()) && void 0 !== e ? e : 0
                }, t.prototype.setFlags = function(t) {
                    this.dict.set(r.Z.of("F"), u.Z.of(t))
                }, t.prototype.hasFlag = function(t) {
                    return 0 !== (this.getFlags() & t)
                }, t.prototype.setFlag = function(t) {
                    var e = this.getFlags();
                    this.setFlags(e | t)
                }, t.prototype.clearFlag = function(t) {
                    var e = this.getFlags();
                    this.setFlags(e & ~t)
                }, t.prototype.setFlagTo = function(t, e) {
                    e ? this.setFlag(t) : this.clearFlag(t)
                }, t.fromDict = function(e) {
                    return new t(e)
                }, t
            }()
        },
        95831: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => h
            });
            var n = o(570655),
                r = o(217802),
                i = o(495268),
                s = o(964911),
                a = o(54222),
                u = o(418158),
                c = o(836904),
                l = o(448571),
                d = o(867280);
            const h = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.prototype.MK = function() {
                    var t = this.dict.lookup(i.Z.of("MK"));
                    if (t instanceof r.Z) return t
                }, e.prototype.BS = function() {
                    var t = this.dict.lookup(i.Z.of("BS"));
                    if (t instanceof r.Z) return t
                }, e.prototype.DA = function() {
                    var t = this.dict.lookup(i.Z.of("DA"));
                    if (t instanceof a.Z || t instanceof u.Z) return t
                }, e.prototype.P = function() {
                    var t = this.dict.get(i.Z.of("P"));
                    if (t instanceof s.Z) return t
                }, e.prototype.setP = function(t) {
                    this.dict.set(i.Z.of("P"), t)
                }, e.prototype.setDefaultAppearance = function(t) {
                    this.dict.set(i.Z.of("DA"), a.Z.of(t))
                }, e.prototype.getDefaultAppearance = function() {
                    var t = this.DA();
                    return t instanceof u.Z ? t.decodeText() : null === t || void 0 === t ? void 0 : t.asString()
                }, e.prototype.getAppearanceCharacteristics = function() {
                    var t = this.MK();
                    if (t) return d.Z.fromDict(t)
                }, e.prototype.getOrCreateAppearanceCharacteristics = function() {
                    var t = this.MK();
                    if (t) return d.Z.fromDict(t);
                    var e = d.Z.fromDict(this.dict.context.obj({}));
                    return this.dict.set(i.Z.of("MK"), e.dict), e
                }, e.prototype.getBorderStyle = function() {
                    var t = this.BS();
                    if (t) return c.Z.fromDict(t)
                }, e.prototype.getOrCreateBorderStyle = function() {
                    var t = this.BS();
                    if (t) return c.Z.fromDict(t);
                    var e = c.Z.fromDict(this.dict.context.obj({}));
                    return this.dict.set(i.Z.of("BS"), e.dict), e
                }, e.prototype.getOnValue = function() {
                    var t, e = null === (t = this.getAppearances()) || void 0 === t ? void 0 : t.normal;
                    if (e instanceof r.Z)
                        for (var o = e.keys(), n = 0, s = o.length; n < s; n++) {
                            var a = o[n];
                            if (a !== i.Z.of("Off")) return a
                        }
                }, e.fromDict = function(t) {
                    return new e(t)
                }, e.create = function(t, o) {
                    return new e(t.obj({
                        Type: "Annot",
                        Subtype: "Widget",
                        Rect: [0, 0, 0, 0],
                        Parent: o
                    }))
                }, e
            }(l.Z)
        },
        701265: (t, e, o) => {
            "use strict";
            o.d(e, {
                T: () => n
            });
            var n, r = function(t) {
                return 1 << t
            };
            ! function(t) {
                t[t.Invisible = r(0)] = "Invisible", t[t.Hidden = r(1)] = "Hidden", t[t.Print = r(2)] = "Print", t[t.NoZoom = r(3)] = "NoZoom", t[t.NoRotate = r(4)] = "NoRotate", t[t.NoView = r(5)] = "NoView", t[t.ReadOnly = r(6)] = "ReadOnly", t[t.Locked = r(7)] = "Locked", t[t.ToggleNoView = r(8)] = "ToggleNoView", t[t.LockedContents = r(9)] = "LockedContents"
            }(n || (n = {}))
        },
        280095: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => s
            });
            var n = o(964911),
                r = o(905842),
                i = o(451441);
            const s = function() {
                function t(t) {
                    this.subsections = t ? [
                        [t]
                    ] : [], this.chunkIdx = 0, this.chunkLength = t ? 1 : 0
                }
                return t.prototype.addEntry = function(t, e) {
                    this.append({
                        ref: t,
                        offset: e,
                        deleted: !1
                    })
                }, t.prototype.addDeletedEntry = function(t, e) {
                    this.append({
                        ref: t,
                        offset: e,
                        deleted: !0
                    })
                }, t.prototype.toString = function() {
                    for (var t = "xref\n", e = 0, o = this.subsections.length; e < o; e++) {
                        var n = this.subsections[e];
                        t += n[0].ref.objectNumber + " " + n.length + "\n";
                        for (var r = 0, s = n.length; r < s; r++) {
                            var a = n[r];
                            t += (0, i.Sk)(String(a.offset), 10, "0"), t += " ", t += (0, i.Sk)(String(a.ref.generationNumber), 5, "0"), t += " ", t += a.deleted ? "f" : "n", t += " \n"
                        }
                    }
                    return t
                }, t.prototype.sizeInBytes = function() {
                    for (var t = 5, e = 0, o = this.subsections.length; e < o; e++) {
                        var n = this.subsections[e],
                            r = n.length,
                            i = n[0];
                        t += 2, t += String(i.ref.objectNumber).length, t += String(r).length, t += 20 * r
                    }
                    return t
                }, t.prototype.copyBytesInto = function(t, e) {
                    var o = e;
                    return t[e++] = r.Z.x, t[e++] = r.Z.r, t[e++] = r.Z.e, t[e++] = r.Z.f, t[e++] = r.Z.Newline, (e += this.copySubsectionsIntoBuffer(this.subsections, t, e)) - o
                }, t.prototype.copySubsectionsIntoBuffer = function(t, e, o) {
                    for (var n = o, s = t.length, a = 0; a < s; a++) {
                        var u = this.subsections[a],
                            c = String(u[0].ref.objectNumber);
                        o += (0, i.C1)(c, e, o), e[o++] = r.Z.Space;
                        var l = String(u.length);
                        o += (0, i.C1)(l, e, o), e[o++] = r.Z.Newline, o += this.copyEntriesIntoBuffer(u, e, o)
                    }
                    return o - n
                }, t.prototype.copyEntriesIntoBuffer = function(t, e, o) {
                    for (var n = t.length, s = 0; s < n; s++) {
                        var a = t[s],
                            u = (0, i.Sk)(String(a.offset), 10, "0");
                        o += (0, i.C1)(u, e, o), e[o++] = r.Z.Space;
                        var c = (0, i.Sk)(String(a.ref.generationNumber), 5, "0");
                        o += (0, i.C1)(c, e, o), e[o++] = r.Z.Space, e[o++] = a.deleted ? r.Z.f : r.Z.n, e[o++] = r.Z.Space, e[o++] = r.Z.Newline
                    }
                    return 20 * n
                }, t.prototype.append = function(t) {
                    if (0 === this.chunkLength) return this.subsections.push([t]), this.chunkIdx = 0, void(this.chunkLength = 1);
                    var e = this.subsections[this.chunkIdx],
                        o = e[this.chunkLength - 1];
                    t.ref.objectNumber - o.ref.objectNumber > 1 ? (this.subsections.push([t]), this.chunkIdx += 1, this.chunkLength = 1) : (e.push(t), this.chunkLength += 1)
                }, t.create = function() {
                    return new t({
                        ref: n.Z.of(0, 65535),
                        offset: 0,
                        deleted: !0
                    })
                }, t.createEmpty = function() {
                    return new t
                }, t
            }()
        },
        921617: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => i
            });
            var n = o(905842),
                r = o(451441);
            const i = function() {
                function t(t, e) {
                    this.major = String(t), this.minor = String(e)
                }
                return t.prototype.toString = function() {
                    var t = (0, r.D_)(129);
                    return "%PDF-" + this.major + "." + this.minor + "\n%" + t + t + t + t
                }, t.prototype.sizeInBytes = function() {
                    return 12 + this.major.length + this.minor.length
                }, t.prototype.copyBytesInto = function(t, e) {
                    var o = e;
                    return t[e++] = n.Z.Percent, t[e++] = n.Z.P, t[e++] = n.Z.D, t[e++] = n.Z.F, t[e++] = n.Z.Dash, e += (0, r.C1)(this.major, t, e), t[e++] = n.Z.Period, e += (0, r.C1)(this.minor, t, e), t[e++] = n.Z.Newline, t[e++] = n.Z.Percent, t[e++] = 129, t[e++] = 129, t[e++] = 129, t[e++] = 129, e - o
                }, t.forVersion = function(e, o) {
                    return new t(e, o)
                }, t
            }()
        },
        339176: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => i
            });
            var n = o(905842),
                r = o(451441);
            const i = function() {
                function t(t) {
                    this.lastXRefOffset = String(t)
                }
                return t.prototype.toString = function() {
                    return "startxref\n" + this.lastXRefOffset + "\n%%EOF"
                }, t.prototype.sizeInBytes = function() {
                    return 16 + this.lastXRefOffset.length
                }, t.prototype.copyBytesInto = function(t, e) {
                    var o = e;
                    return t[e++] = n.Z.s, t[e++] = n.Z.t, t[e++] = n.Z.a, t[e++] = n.Z.r, t[e++] = n.Z.t, t[e++] = n.Z.x, t[e++] = n.Z.r, t[e++] = n.Z.e, t[e++] = n.Z.f, t[e++] = n.Z.Newline, e += (0, r.C1)(this.lastXRefOffset, t, e), t[e++] = n.Z.Newline, t[e++] = n.Z.Percent, t[e++] = n.Z.Percent, t[e++] = n.Z.E, t[e++] = n.Z.O, t[e++] = n.Z.F, e - o
                }, t.forLastCrossRefSectionOffset = function(e) {
                    return new t(e)
                }, t
            }()
        },
        688799: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => r
            });
            var n = o(905842);
            const r = function() {
                function t(t) {
                    this.dict = t
                }
                return t.prototype.toString = function() {
                    return "trailer\n" + this.dict.toString()
                }, t.prototype.sizeInBytes = function() {
                    return 8 + this.dict.sizeInBytes()
                }, t.prototype.copyBytesInto = function(t, e) {
                    var o = e;
                    return t[e++] = n.Z.t, t[e++] = n.Z.r, t[e++] = n.Z.a, t[e++] = n.Z.i, t[e++] = n.Z.l, t[e++] = n.Z.e, t[e++] = n.Z.r, t[e++] = n.Z.Newline, (e += this.dict.copyBytesInto(t, e)) - o
                }, t.of = function(e) {
                    return new t(e)
                }, t
            }()
        },
        466262: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => c
            });
            var n = o(570655),
                r = o(631078),
                i = o(128422),
                s = o(418158),
                a = o(54222),
                u = o(451441);
            const c = function() {
                function t(t, e, o, n) {
                    var r = this;
                    this.allGlyphsInFontSortedById = function() {
                        for (var t = new Array(r.font.characterSet.length), e = 0, o = t.length; e < o; e++) {
                            var n = r.font.characterSet[e];
                            t[e] = r.font.glyphForCodePoint(n)
                        }
                        return (0, u.PF)(t.sort(u.Yj), (function(t) {
                            return t.id
                        }))
                    }, this.font = t, this.scale = 1e3 / this.font.unitsPerEm, this.fontData = e, this.fontName = this.font.postscriptName || "Font", this.customName = o, this.fontFeatures = n, this.baseFontName = "", this.glyphCache = u.Ct.populatedBy(this.allGlyphsInFontSortedById)
                }
                return t.for = function(e, o, r, i) {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.create(o)];
                                case 1:
                                    return [2, new t(n.sent(), o, r, i)]
                            }
                        }))
                    }))
                }, t.prototype.encodeText = function(t) {
                    for (var e = this.font.layout(t, this.fontFeatures).glyphs, o = new Array(e.length), n = 0, r = e.length; n < r; n++) o[n] = (0, u.CK)(e[n].id, 4);
                    return s.Z.of(o.join(""))
                }, t.prototype.widthOfTextAtSize = function(t, e) {
                    for (var o = this.font.layout(t, this.fontFeatures).glyphs, n = 0, r = 0, i = o.length; r < i; r++) n += o[r].advanceWidth * this.scale;
                    return n * (e / 1e3)
                }, t.prototype.heightOfFontAtSize = function(t, e) {
                    void 0 === e && (e = {});
                    var o = e.descender,
                        n = void 0 === o || o,
                        r = this.font,
                        i = r.ascent,
                        s = r.descent,
                        a = r.bbox,
                        u = (i || a.maxY) * this.scale - (s || a.minY) * this.scale;
                    return n || (u -= Math.abs(s) || 0), u / 1e3 * t
                }, t.prototype.sizeOfFontAtHeight = function(t) {
                    var e = this.font,
                        o = e.ascent,
                        n = e.descent,
                        r = e.bbox;
                    return 1e3 * t / ((o || r.maxY) * this.scale - (n || r.minY) * this.scale)
                }, t.prototype.embedIntoContext = function(t, e) {
                    return this.baseFontName = this.customName || t.addRandomSuffix(this.fontName), this.embedFontDict(t, e)
                }, t.prototype.embedFontDict = function(t, e) {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var o, r, i;
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.embedCIDFontDict(t)];
                                case 1:
                                    return o = n.sent(), r = this.embedUnicodeCmap(t), i = t.obj({
                                        Type: "Font",
                                        Subtype: "Type0",
                                        BaseFont: this.baseFontName,
                                        Encoding: "Identity-H",
                                        DescendantFonts: [o],
                                        ToUnicode: r
                                    }), e ? (t.assign(e, i), [2, e]) : [2, t.register(i)]
                            }
                        }))
                    }))
                }, t.prototype.isCFF = function() {
                    return this.font.cff
                }, t.prototype.embedCIDFontDict = function(t) {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var e, o;
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.embedFontDescriptor(t)];
                                case 1:
                                    return e = n.sent(), o = t.obj({
                                        Type: "Font",
                                        Subtype: this.isCFF() ? "CIDFontType0" : "CIDFontType2",
                                        CIDToGIDMap: "Identity",
                                        BaseFont: this.baseFontName,
                                        CIDSystemInfo: {
                                            Registry: a.Z.of("Adobe"),
                                            Ordering: a.Z.of("Identity"),
                                            Supplement: 0
                                        },
                                        FontDescriptor: e,
                                        W: this.computeWidths()
                                    }), [2, t.register(o)]
                            }
                        }))
                    }))
                }, t.prototype.embedFontDescriptor = function(t) {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var e, o, r, s, a, u, c, l, d, h, f, p, v, g, y;
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.embedFontStream(t)];
                                case 1:
                                    return e = n.sent(), o = this.scale, r = this.font, s = r.italicAngle, a = r.ascent, u = r.descent, c = r.capHeight, l = r.xHeight, d = this.font.bbox, h = d.minX, f = d.minY, p = d.maxX, v = d.maxY, g = t.obj(((y = {
                                        Type: "FontDescriptor",
                                        FontName: this.baseFontName,
                                        Flags: (0, i.q)(this.font),
                                        FontBBox: [h * o, f * o, p * o, v * o],
                                        ItalicAngle: s,
                                        Ascent: a * o,
                                        Descent: u * o,
                                        CapHeight: (c || a) * o,
                                        XHeight: (l || 0) * o,
                                        StemV: 0
                                    })[this.isCFF() ? "FontFile3" : "FontFile2"] = e, y)), [2, t.register(g)]
                            }
                        }))
                    }))
                }, t.prototype.serializeFont = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        return (0, n.Jh)(this, (function(t) {
                            return [2, this.fontData]
                        }))
                    }))
                }, t.prototype.embedFontStream = function(t) {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var e, o, r;
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return r = (o = t).flateStream, [4, this.serializeFont()];
                                case 1:
                                    return e = r.apply(o, [n.sent(), {
                                        Subtype: this.isCFF() ? "CIDFontType0C" : void 0
                                    }]), [2, t.register(e)]
                            }
                        }))
                    }))
                }, t.prototype.embedUnicodeCmap = function(t) {
                    var e = (0, r.L)(this.glyphCache.access(), this.glyphId.bind(this)),
                        o = t.flateStream(e);
                    return t.register(o)
                }, t.prototype.glyphId = function(t) {
                    return t ? t.id : -1
                }, t.prototype.computeWidths = function() {
                    for (var t = this.glyphCache.access(), e = [], o = [], n = 0, r = t.length; n < r; n++) {
                        var i = t[n],
                            s = t[n - 1],
                            a = this.glyphId(i),
                            u = this.glyphId(s);
                        0 === n ? e.push(a) : a - u !== 1 && (e.push(o), e.push(a), o = []), o.push(i.advanceWidth * this.scale)
                    }
                    return e.push(o), e
                }, t
            }()
        },
        842834: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => a
            });
            var n = o(570655),
                r = o(466262),
                i = o(418158),
                s = o(451441);
            const a = function(t) {
                function e(e, o, n, r) {
                    var i = t.call(this, e, o, n, r) || this;
                    return i.subset = i.font.createSubset(), i.glyphs = [], i.glyphCache = s.Ct.populatedBy((function() {
                        return i.glyphs
                    })), i.glyphIdMap = new Map, i
                }
                return (0, n.ZT)(e, t), e.for = function(t, o, r, i) {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, t.create(o)];
                                case 1:
                                    return [2, new e(n.sent(), o, r, i)]
                            }
                        }))
                    }))
                }, e.prototype.encodeText = function(t) {
                    for (var e = this.font.layout(t, this.fontFeatures).glyphs, o = new Array(e.length), n = 0, r = e.length; n < r; n++) {
                        var a = e[n],
                            u = this.subset.includeGlyph(a);
                        this.glyphs[u - 1] = a, this.glyphIdMap.set(a.id, u), o[n] = (0, s.CK)(u, 4)
                    }
                    return this.glyphCache.invalidate(), i.Z.of(o.join(""))
                }, e.prototype.isCFF = function() {
                    return this.subset.cff
                }, e.prototype.glyphId = function(t) {
                    return t ? this.glyphIdMap.get(t.id) : -1
                }, e.prototype.serializeFont = function() {
                    var t = this;
                    return new Promise((function(e, o) {
                        var n = [];
                        t.subset.encodeStream().on("data", (function(t) {
                            return n.push(t)
                        })).on("end", (function() {
                            return e((0, s.Jm)(n))
                        })).on("error", (function(t) {
                            return o(t)
                        }))
                    }))
                }, e
            }(r.Z)
        },
        174634: (t, e, o) => {
            "use strict";
            o.d(e, {
                J: () => n,
                Z: () => a
            });
            var n, r = o(570655),
                i = o(54222),
                s = o(418158);
            ! function(t) {
                t.Source = "Source", t.Data = "Data", t.Alternative = "Alternative", t.Supplement = "Supplement", t.EncryptedPayload = "EncryptedPayload", t.FormData = "EncryptedPayload", t.Schema = "Schema", t.Unspecified = "Unspecified"
            }(n || (n = {}));
            const a = function() {
                function t(t, e, o) {
                    void 0 === o && (o = {}), this.fileData = t, this.fileName = e, this.options = o
                }
                return t.for = function(e, o, n) {
                    return void 0 === n && (n = {}), new t(e, o, n)
                }, t.prototype.embedIntoContext = function(t, e) {
                    return (0, r.mG)(this, void 0, void 0, (function() {
                        var o, n, a, u, c, l, d, h, f;
                        return (0, r.Jh)(this, (function(r) {
                            return o = this.options, n = o.mimeType, a = o.description, u = o.creationDate, c = o.modificationDate, l = o.afRelationship, d = t.flateStream(this.fileData, {
                                Type: "EmbeddedFile",
                                Subtype: null !== n && void 0 !== n ? n : void 0,
                                Params: {
                                    Size: this.fileData.length,
                                    CreationDate: u ? i.Z.fromDate(u) : void 0,
                                    ModDate: c ? i.Z.fromDate(c) : void 0
                                }
                            }), h = t.register(d), f = t.obj({
                                Type: "Filespec",
                                F: i.Z.of(this.fileName),
                                UF: s.Z.fromText(this.fileName),
                                EF: {
                                    F: h
                                },
                                Desc: a ? s.Z.fromText(a) : void 0,
                                AFRelationship: null !== l && void 0 !== l ? l : void 0
                            }), e ? (t.assign(e, f), [2, e]) : [2, t.register(f)]
                        }))
                    }))
                }, t
            }()
        },
        583194: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => a
            });
            var n, r = o(570655),
                i = [65472, 65473, 65474, 65475, 65477, 65478, 65479, 65480, 65481, 65482, 65483, 65484, 65485, 65486, 65487];
            ! function(t) {
                t.DeviceGray = "DeviceGray", t.DeviceRGB = "DeviceRGB", t.DeviceCMYK = "DeviceCMYK"
            }(n || (n = {}));
            var s = {
                1: n.DeviceGray,
                3: n.DeviceRGB,
                4: n.DeviceCMYK
            };
            const a = function() {
                function t(t, e, o, n, r) {
                    this.imageData = t, this.bitsPerComponent = e, this.width = o, this.height = n, this.colorSpace = r
                }
                return t.for = function(e) {
                    return (0, r.mG)(this, void 0, void 0, (function() {
                        var o, n, a, u, c, l, d, h;
                        return (0, r.Jh)(this, (function(r) {
                            if (o = new DataView(e.buffer), 65496 !== o.getUint16(0)) throw new Error("SOI not found in JPEG");
                            for (n = 2; n < o.byteLength && (a = o.getUint16(n), n += 2, !i.includes(a));) n += o.getUint16(n);
                            if (!i.includes(a)) throw new Error("Invalid JPEG");
                            if (n += 2, u = o.getUint8(n++), c = o.getUint16(n), n += 2, l = o.getUint16(n), n += 2, d = o.getUint8(n++), !(h = s[d])) throw new Error("Unknown JPEG channel.");
                            return [2, new t(e, u, l, c, h)]
                        }))
                    }))
                }, t.prototype.embedIntoContext = function(t, e) {
                    return (0, r.mG)(this, void 0, void 0, (function() {
                        var o;
                        return (0, r.Jh)(this, (function(r) {
                            return o = t.stream(this.imageData, {
                                Type: "XObject",
                                Subtype: "Image",
                                BitsPerComponent: this.bitsPerComponent,
                                Width: this.width,
                                Height: this.height,
                                ColorSpace: this.colorSpace,
                                Filter: "DCTDecode",
                                Decode: this.colorSpace === n.DeviceCMYK ? [1, 0, 1, 0, 1, 0, 1, 0] : void 0
                            }), e ? (t.assign(e, o), [2, e]) : [2, t.register(o)]
                        }))
                    }))
                }, t
            }()
        },
        637962: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => h
            });
            var n = o(570655),
                r = o(231732),
                i = o(953225),
                s = o(150351),
                a = o(56962),
                u = o(675386),
                c = o(229153),
                l = o(905842),
                d = o(451441);
            const h = function() {
                function t(t, e, o) {
                    this.page = t;
                    var n = null !== e && void 0 !== e ? e : function(t) {
                        var e = t.MediaBox();
                        return {
                            left: 0,
                            bottom: 0,
                            right: e.lookup(2, i.Z).asNumber() - e.lookup(0, i.Z).asNumber(),
                            top: e.lookup(3, i.Z).asNumber() - e.lookup(1, i.Z).asNumber()
                        }
                    }(t);
                    this.width = n.right - n.left, this.height = n.top - n.bottom, this.boundingBox = n, this.transformationMatrix = null !== o && void 0 !== o ? o : function(t) {
                        return [1, 0, 0, 1, -t.left, -t.bottom]
                    }(n)
                }
                return t.for = function(e, o, r) {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        return (0, n.Jh)(this, (function(n) {
                            return [2, new t(e, o, r)]
                        }))
                    }))
                }, t.prototype.embedIntoContext = function(t, e) {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var o, i, s, a, u, c, l, d, h, f;
                        return (0, n.Jh)(this, (function(n) {
                            if (o = this.page.normalizedEntries(), i = o.Contents, s = o.Resources, !i) throw new r.SR;
                            return a = this.decodeContents(i), u = this.boundingBox, c = u.left, l = u.bottom, d = u.right, h = u.top, f = t.flateStream(a, {
                                Type: "XObject",
                                Subtype: "Form",
                                FormType: 1,
                                BBox: [c, l, d, h],
                                Matrix: this.transformationMatrix,
                                Resources: s
                            }), e ? (t.assign(e, f), [2, e]) : [2, t.register(f)]
                        }))
                    }))
                }, t.prototype.decodeContents = function(t) {
                    for (var e = Uint8Array.of(l.Z.Newline), o = [], n = 0, i = t.size(); n < i; n++) {
                        var h = t.lookup(n, a.Z),
                            f = void 0;
                        if (h instanceof s.Z) f = (0, u.y)(h).decode();
                        else {
                            if (!(h instanceof c.Z)) throw new r.NP(h);
                            f = h.getUnencodedContents()
                        }
                        o.push(f, e)
                    }
                    return d.M5.apply(void 0, o)
                }, t
            }()
        },
        436002: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => i
            });
            var n = o(570655),
                r = o(948357);
            const i = function() {
                function t(t) {
                    this.image = t, this.bitsPerComponent = t.bitsPerComponent, this.width = t.width, this.height = t.height, this.colorSpace = "DeviceRGB"
                }
                return t.for = function(e) {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        return (0, n.Jh)(this, (function(o) {
                            return [2, new t(r.y.load(e))]
                        }))
                    }))
                }, t.prototype.embedIntoContext = function(t, e) {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var o, r;
                        return (0, n.Jh)(this, (function(n) {
                            return o = this.embedAlphaChannel(t), r = t.flateStream(this.image.rgbChannel, {
                                Type: "XObject",
                                Subtype: "Image",
                                BitsPerComponent: this.image.bitsPerComponent,
                                Width: this.image.width,
                                Height: this.image.height,
                                ColorSpace: this.colorSpace,
                                SMask: o
                            }), e ? (t.assign(e, r), [2, e]) : [2, t.register(r)]
                        }))
                    }))
                }, t.prototype.embedAlphaChannel = function(t) {
                    if (this.image.alphaChannel) {
                        var e = t.flateStream(this.image.alphaChannel, {
                            Type: "XObject",
                            Subtype: "Image",
                            Height: this.image.height,
                            Width: this.image.width,
                            BitsPerComponent: this.image.bitsPerComponent,
                            ColorSpace: "DeviceGray",
                            Decode: [0, 1]
                        });
                        return t.register(e)
                    }
                }, t
            }()
        },
        253783: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => s
            });
            var n = o(533162),
                r = o(418158),
                i = o(451441);
            const s = function() {
                function t(t, e) {
                    this.encoding = t === n.S4.ZapfDingbats ? n.e$.ZapfDingbats : t === n.S4.Symbol ? n.e$.Symbol : n.e$.WinAnsi, this.font = n.Zx.load(t), this.fontName = this.font.FontName, this.customName = e
                }
                return t.prototype.encodeText = function(t) {
                    for (var e = this.encodeTextAsGlyphs(t), o = new Array(e.length), n = 0, s = e.length; n < s; n++) o[n] = (0, i.zv)(e[n].code);
                    return r.Z.of(o.join(""))
                }, t.prototype.widthOfTextAtSize = function(t, e) {
                    for (var o = this.encodeTextAsGlyphs(t), n = 0, r = 0, i = o.length; r < i; r++) {
                        var s = o[r].name,
                            a = (o[r + 1] || {}).name,
                            u = this.font.getXAxisKerningForPair(s, a) || 0;
                        n += this.widthOfGlyph(s) + u
                    }
                    return n * (e / 1e3)
                }, t.prototype.heightOfFontAtSize = function(t, e) {
                    void 0 === e && (e = {});
                    var o = e.descender,
                        n = void 0 === o || o,
                        r = this.font,
                        i = r.Ascender,
                        s = r.Descender,
                        a = r.FontBBox,
                        u = (i || a[3]) - (s || a[1]);
                    return n || (u += s || 0), u / 1e3 * t
                }, t.prototype.sizeOfFontAtHeight = function(t) {
                    var e = this.font,
                        o = e.Ascender,
                        n = e.Descender,
                        r = e.FontBBox;
                    return 1e3 * t / ((o || r[3]) - (n || r[1]))
                }, t.prototype.embedIntoContext = function(t, e) {
                    var o = t.obj({
                        Type: "Font",
                        Subtype: "Type1",
                        BaseFont: this.customName || this.fontName,
                        Encoding: this.encoding === n.e$.WinAnsi ? "WinAnsiEncoding" : void 0
                    });
                    return e ? (t.assign(e, o), e) : t.register(o)
                }, t.prototype.widthOfGlyph = function(t) {
                    return this.font.getWidthOfGlyph(t) || 250
                }, t.prototype.encodeTextAsGlyphs = function(t) {
                    for (var e = Array.from(t), o = new Array(e.length), n = 0, r = e.length; n < r; n++) {
                        var s = (0, i.yq)(e[n]);
                        o[n] = this.encoding.encodeUnicodeCodePoint(s)
                    }
                    return o
                }, t.for = function(e, o) {
                    return new t(e, o)
                }, t
            }()
        },
        231732: (t, e, o) => {
            "use strict";
            o.d(e, {
                $O: () => C,
                Dr: () => P,
                EX: () => k,
                Gp: () => s,
                Iu: () => S,
                Ke: () => A,
                NP: () => h,
                RS: () => w,
                SR: () => d,
                SY: () => l,
                Sh: () => T,
                TC: () => Z,
                VX: () => a,
                Y8: () => g,
                _z: () => x,
                aj: () => c,
                bg: () => y,
                dm: () => v,
                iQ: () => i,
                ku: () => B,
                l: () => u,
                or: () => D,
                qX: () => f,
                sE: () => m,
                sV: () => p,
                uu: () => O,
                vM: () => b,
                ze: () => F
            });
            var n = o(570655),
                r = o(451441),
                i = function(t) {
                    function e(e, o) {
                        var n = "Method " + e + "." + o + "() not implemented";
                        return t.call(this, n) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                s = function(t) {
                    function e(e) {
                        var o = "Cannot construct " + e + " - it has a private constructor";
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                a = function(t) {
                    function e(e, o) {
                        var n = function(t) {
                                var e, o;
                                return null !== (e = null === t || void 0 === t ? void 0 : t.name) && void 0 !== e ? e : null === (o = null === t || void 0 === t ? void 0 : t.constructor) || void 0 === o ? void 0 : o.name
                            },
                            r = "Expected instance of " + (Array.isArray(e) ? e.map(n) : [n(e)]).join(" or ") + ", but got instance of " + (o ? n(o) : o);
                        return t.call(this, r) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                u = function(t) {
                    function e(e) {
                        var o = e + " stream encoding not supported";
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                c = function(t) {
                    function e(e, o) {
                        var n = "Cannot call " + e + "." + o + "() more than once";
                        return t.call(this, n) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                l = function(t) {
                    function e(e) {
                        var o = "Missing catalog (ref=" + e + ")";
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                d = function(t) {
                    function e() {
                        return t.call(this, "Can't embed page with missing Contents") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                h = function(t) {
                    function e(e) {
                        var o, n, r, i = "Unrecognized stream type: " + (null !== (r = null !== (n = null === (o = null === e || void 0 === e ? void 0 : e.contructor) || void 0 === o ? void 0 : o.name) && void 0 !== n ? n : null === e || void 0 === e ? void 0 : e.name) && void 0 !== r ? r : e);
                        return t.call(this, i) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                f = function(t) {
                    function e() {
                        return t.call(this, "Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                p = function(t) {
                    function e(e) {
                        var o = "Attempted to convert PDFArray with " + e + " elements to rectangle, but must have exactly 4 elements.";
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                v = function(t) {
                    function e(e) {
                        var o = 'Attempted to convert "' + e + '" to a date, but it does not match the PDF date string format.';
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                g = function(t) {
                    function e(e, o) {
                        var n = "Invalid targetIndex specified: targetIndex=" + e + " must be less than Count=" + o;
                        return t.call(this, n) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                y = function(t) {
                    function e(e, o) {
                        var n = "Failed to " + o + " at targetIndex=" + e + " due to corrupt page tree: It is likely that one or more 'Count' entries are invalid";
                        return t.call(this, n) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                m = function(t) {
                    function e(e, o, n) {
                        var r = "index should be at least " + o + " and at most " + n + ", but was actually " + e;
                        return t.call(this, r) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                b = function(t) {
                    function e() {
                        return t.call(this, "Attempted to set invalid field value") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                Z = function(t) {
                    function e() {
                        return t.call(this, "Attempted to select multiple values for single-select field") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                x = function(t) {
                    function e(e) {
                        var o = "No /DA (default appearance) entry found for field: " + e;
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                S = function(t) {
                    function e(e) {
                        var o = "No Tf operator found for DA of field: " + e;
                        return t.call(this, o) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                w = function(t) {
                    function e(e, o) {
                        var n = "Failed to parse number (line:" + e.line + " col:" + e.column + " offset=" + e.offset + '): "' + o + '"';
                        return t.call(this, n) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                C = function(t) {
                    function e(e, o) {
                        var n = "Failed to parse PDF document (line:" + e.line + " col:" + e.column + " offset=" + e.offset + "): " + o;
                        return t.call(this, n) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(Error),
                F = function(t) {
                    function e(e, o, n) {
                        var r = "Expected next byte to be " + o + " but it was actually " + n;
                        return t.call(this, e, r) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(C),
                k = function(t) {
                    function e(e, o) {
                        var n = "Failed to parse PDF object starting with the following byte: " + o;
                        return t.call(this, e, n) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(C),
                A = function(t) {
                    function e(e) {
                        return t.call(this, e, "Failed to parse invalid PDF object") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(C),
                T = function(t) {
                    function e(e) {
                        return t.call(this, e, "Failed to parse PDF stream") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(C),
                D = function(t) {
                    function e(e) {
                        return t.call(this, e, "Failed to parse PDF literal string due to unbalanced parenthesis") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(C),
                P = function(t) {
                    function e(e) {
                        return t.call(this, e, "Parser stalled") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(C),
                B = function(t) {
                    function e(e) {
                        return t.call(this, e, "No PDF header found") || this
                    }
                    return (0, n.ZT)(e, t), e
                }(C),
                O = function(t) {
                    function e(e, o) {
                        var n = "Did not find expected keyword '" + (0, r.Qo)(o) + "'";
                        return t.call(this, e, n) || this
                    }
                    return (0, n.ZT)(e, t), e
                }(C)
        },
        509958: (t, e, o) => {
            "use strict";
            o.d(e, {
                JN: () => g.J,
                Ub: () => _.Ub,
                m0: () => _.m0,
                PV: () => _.PV,
                oD: () => _.oD,
                TV: () => J.T,
                F5: () => X.Z,
                iJ: () => r.Z,
                bg: () => n.bg,
                Wz: () => p.Z,
                zO: () => v.Z,
                $P: () => Z.$P,
                Gb: () => g.Z,
                sE: () => n.sE,
                vM: () => n.vM,
                dm: () => n.dm,
                Y8: () => n.Y8,
                sm: () => y.Z,
                iQ: () => n.iQ,
                SY: () => n.SY,
                _z: () => n._z,
                uu: () => n.uu,
                ku: () => n.ku,
                SR: () => n.SR,
                Iu: () => n.Iu,
                TC: () => n.TC,
                ze: () => n.ze,
                Ie: () => Z.Ie,
                RS: () => n.RS,
                ry: () => _.ry,
                Ei: () => _.Ei,
                P0: () => _.P0,
                sS: () => _.sS,
                Kg: () => _.Kg,
                PS: () => _.PS,
                Au: () => _.Au,
                qg: () => _.qg,
                _: () => _._,
                Ym: () => _.Ym,
                uQ: () => _.uQ,
                Fs: () => _.Fs,
                _X: () => _._X,
                oY: () => K.Z,
                Gr: () => T.Z,
                sV: () => n.sV,
                hd: () => S.Z,
                lR: () => I.Z,
                kK: () => M.Z,
                o6: () => i.Z,
                w9: () => h.Z,
                PO: () => R.Z,
                mh: () => D.Z,
                QM: () => z.Z,
                o: () => c.Z,
                Ij: () => F.Z,
                wt: () => B.Z,
                Ke: () => n.Ke,
                wQ: () => k.Z,
                oX: () => A.Z,
                qI: () => w.Z,
                bU: () => x.Z,
                Wy: () => s.Z,
                D2: () => L.Z,
                EX: () => n.EX,
                Qc: () => j.Z,
                gz: () => V.Z,
                sI: () => U.Z,
                Y3: () => G.Z,
                dS: () => b.Z,
                Eg: () => E.Z,
                N8: () => W.Z,
                h9: () => H.Z,
                $O: () => n.$O,
                SV: () => N.Z,
                $F: () => P.Z,
                kO: () => O.Z,
                Sh: () => n.Sh,
                pV: () => u.Z,
                u2: () => C.Z,
                $4: () => l.Z,
                O5: () => d.Z,
                ci: () => q.Z,
                Bn: () => a.Z,
                Dw: () => Q.Z,
                qX: () => n.qX,
                Le: () => m.Z,
                A1: () => Z.A1,
                Gp: () => n.Gp,
                M$: () => Z.D2,
                aj: () => n.aj,
                Dr: () => n.Dr,
                IL: () => f.Z,
                or: () => n.or,
                VX: () => n.VX,
                NP: () => n.NP,
                l: () => n.l,
                gF: () => Z.ZP,
                WT: () => _.WT,
                P_: () => _.P_,
                yh: () => Y.y
            });
            var n = o(231732),
                r = o(905842),
                i = o(676834),
                s = o(921108),
                a = o(392862),
                u = o(554237),
                c = o(921617),
                l = o(339176),
                d = o(688799),
                h = o(280095),
                f = o(253783),
                p = o(466262),
                v = o(842834),
                g = o(174634),
                y = o(583194),
                m = o(436002),
                b = o(637962),
                Z = o(638071),
                x = o(542018),
                S = o(754650),
                w = o(953225),
                C = o(54222),
                F = o(418158),
                k = o(495268),
                A = o(998430),
                T = o(634055),
                D = o(217802),
                P = o(964911),
                B = o(170314),
                O = o(56962),
                N = o(150351),
                I = o(226613),
                M = o(229153),
                R = o(104776),
                j = o(194245),
                W = o(834801),
                E = o(974874),
                z = o(303238),
                U = o(532596),
                G = o(103382),
                L = o(96234),
                V = o(888947),
                H = o(293917),
                Q = o(332791),
                Y = o(675386),
                K = o(448571),
                q = o(95831),
                X = o(867280),
                J = o(701265),
                _ = o(757244)
        },
        638071: (t, e, o) => {
            "use strict";
            o.d(e, {
                $P: () => s,
                A1: () => i,
                D2: () => r,
                Ie: () => n,
                ZP: () => f
            });
            var n, r, i, s, a = o(634055),
                u = o(754650),
                c = o(495268),
                l = o(953225),
                d = o(451441),
                h = function(t, e) {
                    if (void 0 !== t) return e[t]
                };
            ! function(t) {
                t.UseNone = "UseNone", t.UseOutlines = "UseOutlines", t.UseThumbs = "UseThumbs", t.UseOC = "UseOC"
            }(n || (n = {})),
            function(t) {
                t.L2R = "L2R", t.R2L = "R2L"
            }(r || (r = {})),
            function(t) {
                t.None = "None", t.AppDefault = "AppDefault"
            }(i || (i = {})),
            function(t) {
                t.Simplex = "Simplex", t.DuplexFlipShortEdge = "DuplexFlipShortEdge", t.DuplexFlipLongEdge = "DuplexFlipLongEdge"
            }(s || (s = {}));
            const f = function() {
                function t(t) {
                    this.dict = t
                }
                return t.prototype.lookupBool = function(t) {
                    var e = this.dict.lookup(c.Z.of(t));
                    if (e instanceof u.Z) return e
                }, t.prototype.lookupName = function(t) {
                    var e = this.dict.lookup(c.Z.of(t));
                    if (e instanceof c.Z) return e
                }, t.prototype.HideToolbar = function() {
                    return this.lookupBool("HideToolbar")
                }, t.prototype.HideMenubar = function() {
                    return this.lookupBool("HideMenubar")
                }, t.prototype.HideWindowUI = function() {
                    return this.lookupBool("HideWindowUI")
                }, t.prototype.FitWindow = function() {
                    return this.lookupBool("FitWindow")
                }, t.prototype.CenterWindow = function() {
                    return this.lookupBool("CenterWindow")
                }, t.prototype.DisplayDocTitle = function() {
                    return this.lookupBool("DisplayDocTitle")
                }, t.prototype.NonFullScreenPageMode = function() {
                    return this.lookupName("NonFullScreenPageMode")
                }, t.prototype.Direction = function() {
                    return this.lookupName("Direction")
                }, t.prototype.PrintScaling = function() {
                    return this.lookupName("PrintScaling")
                }, t.prototype.Duplex = function() {
                    return this.lookupName("Duplex")
                }, t.prototype.PickTrayByPDFSize = function() {
                    return this.lookupBool("PickTrayByPDFSize")
                }, t.prototype.PrintPageRange = function() {
                    var t = this.dict.lookup(c.Z.of("PrintPageRange"));
                    if (t instanceof a.Z) return t
                }, t.prototype.NumCopies = function() {
                    var t = this.dict.lookup(c.Z.of("NumCopies"));
                    if (t instanceof l.Z) return t
                }, t.prototype.getHideToolbar = function() {
                    var t, e;
                    return null !== (e = null === (t = this.HideToolbar()) || void 0 === t ? void 0 : t.asBoolean()) && void 0 !== e && e
                }, t.prototype.getHideMenubar = function() {
                    var t, e;
                    return null !== (e = null === (t = this.HideMenubar()) || void 0 === t ? void 0 : t.asBoolean()) && void 0 !== e && e
                }, t.prototype.getHideWindowUI = function() {
                    var t, e;
                    return null !== (e = null === (t = this.HideWindowUI()) || void 0 === t ? void 0 : t.asBoolean()) && void 0 !== e && e
                }, t.prototype.getFitWindow = function() {
                    var t, e;
                    return null !== (e = null === (t = this.FitWindow()) || void 0 === t ? void 0 : t.asBoolean()) && void 0 !== e && e
                }, t.prototype.getCenterWindow = function() {
                    var t, e;
                    return null !== (e = null === (t = this.CenterWindow()) || void 0 === t ? void 0 : t.asBoolean()) && void 0 !== e && e
                }, t.prototype.getDisplayDocTitle = function() {
                    var t, e;
                    return null !== (e = null === (t = this.DisplayDocTitle()) || void 0 === t ? void 0 : t.asBoolean()) && void 0 !== e && e
                }, t.prototype.getNonFullScreenPageMode = function() {
                    var t, e, o = null === (t = this.NonFullScreenPageMode()) || void 0 === t ? void 0 : t.decodeText();
                    return null !== (e = h(o, n)) && void 0 !== e ? e : n.UseNone
                }, t.prototype.getReadingDirection = function() {
                    var t, e, o = null === (t = this.Direction()) || void 0 === t ? void 0 : t.decodeText();
                    return null !== (e = h(o, r)) && void 0 !== e ? e : r.L2R
                }, t.prototype.getPrintScaling = function() {
                    var t, e, o = null === (t = this.PrintScaling()) || void 0 === t ? void 0 : t.decodeText();
                    return null !== (e = h(o, i)) && void 0 !== e ? e : i.AppDefault
                }, t.prototype.getDuplex = function() {
                    var t, e = null === (t = this.Duplex()) || void 0 === t ? void 0 : t.decodeText();
                    return h(e, s)
                }, t.prototype.getPickTrayByPDFSize = function() {
                    var t;
                    return null === (t = this.PickTrayByPDFSize()) || void 0 === t ? void 0 : t.asBoolean()
                }, t.prototype.getPrintPageRange = function() {
                    var t = this.PrintPageRange();
                    if (!t) return [];
                    for (var e = [], o = 0; o < t.size(); o += 2) {
                        var n = t.lookup(o, l.Z).asNumber(),
                            r = t.lookup(o + 1, l.Z).asNumber();
                        e.push({
                            start: n,
                            end: r
                        })
                    }
                    return e
                }, t.prototype.getNumCopies = function() {
                    var t, e;
                    return null !== (e = null === (t = this.NumCopies()) || void 0 === t ? void 0 : t.asNumber()) && void 0 !== e ? e : 1
                }, t.prototype.setHideToolbar = function(t) {
                    var e = this.dict.context.obj(t);
                    this.dict.set(c.Z.of("HideToolbar"), e)
                }, t.prototype.setHideMenubar = function(t) {
                    var e = this.dict.context.obj(t);
                    this.dict.set(c.Z.of("HideMenubar"), e)
                }, t.prototype.setHideWindowUI = function(t) {
                    var e = this.dict.context.obj(t);
                    this.dict.set(c.Z.of("HideWindowUI"), e)
                }, t.prototype.setFitWindow = function(t) {
                    var e = this.dict.context.obj(t);
                    this.dict.set(c.Z.of("FitWindow"), e)
                }, t.prototype.setCenterWindow = function(t) {
                    var e = this.dict.context.obj(t);
                    this.dict.set(c.Z.of("CenterWindow"), e)
                }, t.prototype.setDisplayDocTitle = function(t) {
                    var e = this.dict.context.obj(t);
                    this.dict.set(c.Z.of("DisplayDocTitle"), e)
                }, t.prototype.setNonFullScreenPageMode = function(t) {
                    (0, d.DA)(t, "nonFullScreenPageMode", n);
                    var e = c.Z.of(t);
                    this.dict.set(c.Z.of("NonFullScreenPageMode"), e)
                }, t.prototype.setReadingDirection = function(t) {
                    (0, d.DA)(t, "readingDirection", r);
                    var e = c.Z.of(t);
                    this.dict.set(c.Z.of("Direction"), e)
                }, t.prototype.setPrintScaling = function(t) {
                    (0, d.DA)(t, "printScaling", i);
                    var e = c.Z.of(t);
                    this.dict.set(c.Z.of("PrintScaling"), e)
                }, t.prototype.setDuplex = function(t) {
                    (0, d.DA)(t, "duplex", s);
                    var e = c.Z.of(t);
                    this.dict.set(c.Z.of("Duplex"), e)
                }, t.prototype.setPickTrayByPDFSize = function(t) {
                    var e = this.dict.context.obj(t);
                    this.dict.set(c.Z.of("PickTrayByPDFSize"), e)
                }, t.prototype.setPrintPageRange = function(t) {
                    Array.isArray(t) || (t = [t]);
                    for (var e = [], o = 0, n = t.length; o < n; o++) e.push(t[o].start), e.push(t[o].end);
                    (0, d.pO)(e, "printPageRange", ["number"]);
                    var r = this.dict.context.obj(e);
                    this.dict.set(c.Z.of("PrintPageRange"), r)
                }, t.prototype.setNumCopies = function(t) {
                    (0, d.gI)(t, "numCopies", 1, Number.MAX_VALUE), (0, d.Qk)(t, "numCopies");
                    var e = this.dict.context.obj(t);
                    this.dict.set(c.Z.of("NumCopies"), e)
                }, t.fromDict = function(e) {
                    return new t(e)
                }, t.create = function(e) {
                    return new t(e.obj({}))
                }, t
            }()
        },
        634055: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => u
            });
            var n = o(570655),
                r = o(953225),
                i = o(542018),
                s = o(905842),
                a = o(231732);
            const u = function(t) {
                function e(e) {
                    var o = t.call(this) || this;
                    return o.array = [], o.context = e, o
                }
                return (0, n.ZT)(e, t), e.prototype.size = function() {
                    return this.array.length
                }, e.prototype.push = function(t) {
                    this.array.push(t)
                }, e.prototype.insert = function(t, e) {
                    this.array.splice(t, 0, e)
                }, e.prototype.indexOf = function(t) {
                    var e = this.array.indexOf(t);
                    return -1 === e ? void 0 : e
                }, e.prototype.remove = function(t) {
                    this.array.splice(t, 1)
                }, e.prototype.set = function(t, e) {
                    this.array[t] = e
                }, e.prototype.get = function(t) {
                    return this.array[t]
                }, e.prototype.lookupMaybe = function(t) {
                    for (var e, o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
                    return (e = this.context).lookupMaybe.apply(e, (0, n.pr)([this.get(t)], o))
                }, e.prototype.lookup = function(t) {
                    for (var e, o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
                    return (e = this.context).lookup.apply(e, (0, n.pr)([this.get(t)], o))
                }, e.prototype.asRectangle = function() {
                    if (4 !== this.size()) throw new a.sV(this.size());
                    var t = this.lookup(0, r.Z).asNumber(),
                        e = this.lookup(1, r.Z).asNumber();
                    return {
                        x: t,
                        y: e,
                        width: this.lookup(2, r.Z).asNumber() - t,
                        height: this.lookup(3, r.Z).asNumber() - e
                    }
                }, e.prototype.asArray = function() {
                    return this.array.slice()
                }, e.prototype.clone = function(t) {
                    for (var o = e.withContext(t || this.context), n = 0, r = this.size(); n < r; n++) o.push(this.array[n]);
                    return o
                }, e.prototype.toString = function() {
                    for (var t = "[ ", e = 0, o = this.size(); e < o; e++) t += this.get(e).toString(), t += " ";
                    return t += "]"
                }, e.prototype.sizeInBytes = function() {
                    for (var t = 3, e = 0, o = this.size(); e < o; e++) t += this.get(e).sizeInBytes() + 1;
                    return t
                }, e.prototype.copyBytesInto = function(t, e) {
                    var o = e;
                    t[e++] = s.Z.LeftSquareBracket, t[e++] = s.Z.Space;
                    for (var n = 0, r = this.size(); n < r; n++) e += this.get(n).copyBytesInto(t, e), t[e++] = s.Z.Space;
                    return t[e++] = s.Z.RightSquareBracket, e - o
                }, e.prototype.scalePDFNumbers = function(t, e) {
                    for (var o = 0, n = this.size(); o < n; o++) {
                        var i = this.lookup(o);
                        if (i instanceof r.Z) {
                            var s = o % 2 === 0 ? t : e;
                            this.set(o, r.Z.of(i.asNumber() * s))
                        }
                    }
                }, e.withContext = function(t) {
                    return new e(t)
                }, e
            }(i.Z)
        },
        754650: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => u
            });
            var n = o(570655),
                r = o(231732),
                i = o(542018),
                s = o(905842),
                a = {};
            const u = function(t) {
                function e(e, o) {
                    var n = this;
                    if (e !== a) throw new r.Gp("PDFBool");
                    return (n = t.call(this) || this).value = o, n
                }
                return (0, n.ZT)(e, t), e.prototype.asBoolean = function() {
                    return this.value
                }, e.prototype.clone = function() {
                    return this
                }, e.prototype.toString = function() {
                    return String(this.value)
                }, e.prototype.sizeInBytes = function() {
                    return this.value ? 4 : 5
                }, e.prototype.copyBytesInto = function(t, e) {
                    return this.value ? (t[e++] = s.Z.t, t[e++] = s.Z.r, t[e++] = s.Z.u, t[e++] = s.Z.e, 4) : (t[e++] = s.Z.f, t[e++] = s.Z.a, t[e++] = s.Z.l, t[e++] = s.Z.s, t[e++] = s.Z.e, 5)
                }, e.True = new e(a, !0), e.False = new e(a, !1), e
            }(i.Z)
        },
        217802: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => u
            });
            var n = o(570655),
                r = o(495268),
                i = o(998430),
                s = o(542018),
                a = o(905842);
            const u = function(t) {
                function e(e, o) {
                    var n = t.call(this) || this;
                    return n.dict = e, n.context = o, n
                }
                return (0, n.ZT)(e, t), e.prototype.keys = function() {
                    return Array.from(this.dict.keys())
                }, e.prototype.values = function() {
                    return Array.from(this.dict.values())
                }, e.prototype.entries = function() {
                    return Array.from(this.dict.entries())
                }, e.prototype.set = function(t, e) {
                    this.dict.set(t, e)
                }, e.prototype.get = function(t, e) {
                    void 0 === e && (e = !1);
                    var o = this.dict.get(t);
                    if (o !== i.Z || e) return o
                }, e.prototype.has = function(t) {
                    var e = this.dict.get(t);
                    return void 0 !== e && e !== i.Z
                }, e.prototype.lookupMaybe = function(t) {
                    for (var e, o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
                    var s = o.includes(i.Z),
                        a = (e = this.context).lookupMaybe.apply(e, (0, n.pr)([this.get(t, s)], o));
                    if (a !== i.Z || s) return a
                }, e.prototype.lookup = function(t) {
                    for (var e, o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
                    var s = o.includes(i.Z),
                        a = (e = this.context).lookup.apply(e, (0, n.pr)([this.get(t, s)], o));
                    if (a !== i.Z || s) return a
                }, e.prototype.delete = function(t) {
                    return this.dict.delete(t)
                }, e.prototype.asMap = function() {
                    return new Map(this.dict)
                }, e.prototype.uniqueKey = function(t) {
                    void 0 === t && (t = "");
                    for (var e = this.keys(), o = r.Z.of(this.context.addRandomSuffix(t, 10)); e.includes(o);) o = r.Z.of(this.context.addRandomSuffix(t, 10));
                    return o
                }, e.prototype.clone = function(t) {
                    for (var o = e.withContext(t || this.context), n = this.entries(), r = 0, i = n.length; r < i; r++) {
                        var s = n[r],
                            a = s[0],
                            u = s[1];
                        o.set(a, u)
                    }
                    return o
                }, e.prototype.toString = function() {
                    for (var t = "<<\n", e = this.entries(), o = 0, n = e.length; o < n; o++) {
                        var r = e[o],
                            i = r[0],
                            s = r[1];
                        t += i.toString() + " " + s.toString() + "\n"
                    }
                    return t += ">>"
                }, e.prototype.sizeInBytes = function() {
                    for (var t = 5, e = this.entries(), o = 0, n = e.length; o < n; o++) {
                        var r = e[o],
                            i = r[0],
                            s = r[1];
                        t += i.sizeInBytes() + s.sizeInBytes() + 2
                    }
                    return t
                }, e.prototype.copyBytesInto = function(t, e) {
                    var o = e;
                    t[e++] = a.Z.LessThan, t[e++] = a.Z.LessThan, t[e++] = a.Z.Newline;
                    for (var n = this.entries(), r = 0, i = n.length; r < i; r++) {
                        var s = n[r],
                            u = s[0],
                            c = s[1];
                        e += u.copyBytesInto(t, e), t[e++] = a.Z.Space, e += c.copyBytesInto(t, e), t[e++] = a.Z.Newline
                    }
                    return t[e++] = a.Z.GreaterThan, t[e++] = a.Z.GreaterThan, e - o
                }, e.withContext = function(t) {
                    return new e(new Map, t)
                }, e.fromMapWithContext = function(t, o) {
                    return new e(t, o)
                }, e
            }(s.Z)
        },
        418158: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => u
            });
            var n = o(570655),
                r = o(542018),
                i = o(905842),
                s = o(451441),
                a = o(231732);
            const u = function(t) {
                function e(e) {
                    var o = t.call(this) || this;
                    return o.value = e, o
                }
                return (0, n.ZT)(e, t), e.prototype.asBytes = function() {
                    for (var t = this.value + (this.value.length % 2 === 1 ? "0" : ""), e = t.length, o = new Uint8Array(t.length / 2), n = 0, r = 0; n < e;) {
                        var i = parseInt(t.substring(n, n + 2), 16);
                        o[r] = i, n += 2, r += 1
                    }
                    return o
                }, e.prototype.decodeText = function() {
                    var t = this.asBytes();
                    return (0, s.O0)(t) ? (0, s.aB)(t) : (0, s.Ji)(t)
                }, e.prototype.decodeDate = function() {
                    var t = this.decodeText(),
                        e = (0, s.sG)(t);
                    if (!e) throw new a.dm(t);
                    return e
                }, e.prototype.asString = function() {
                    return this.value
                }, e.prototype.clone = function() {
                    return e.of(this.value)
                }, e.prototype.toString = function() {
                    return "<" + this.value + ">"
                }, e.prototype.sizeInBytes = function() {
                    return this.value.length + 2
                }, e.prototype.copyBytesInto = function(t, e) {
                    return t[e++] = i.Z.LessThan, e += (0, s.C1)(this.value, t, e), t[e++] = i.Z.GreaterThan, this.value.length + 2
                }, e.of = function(t) {
                    return new e(t)
                }, e.fromText = function(t) {
                    for (var o = (0, s.nB)(t), n = "", r = 0, i = o.length; r < i; r++) n += (0, s.CK)(o[r], 4);
                    return new e(n)
                }, e
            }(r.Z)
        },
        170314: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => r
            });
            var n = o(570655);
            const r = function(t) {
                function e(e) {
                    var o = t.call(this) || this;
                    return o.data = e, o
                }
                return (0, n.ZT)(e, t), e.prototype.clone = function() {
                    return e.of(this.data.slice())
                }, e.prototype.toString = function() {
                    return "PDFInvalidObject(" + this.data.length + " bytes)"
                }, e.prototype.sizeInBytes = function() {
                    return this.data.length
                }, e.prototype.copyBytesInto = function(t, e) {
                    for (var o = this.data.length, n = 0; n < o; n++) t[e++] = this.data[n];
                    return o
                }, e.of = function(t) {
                    return new e(t)
                }, e
            }(o(542018).Z)
        },
        495268: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => d
            });
            var n = o(570655),
                r = o(231732),
                i = o(542018),
                s = o(905842),
                a = o(202736),
                u = o(451441),
                c = {},
                l = new Map;
            const d = function(t) {
                function e(e, o) {
                    var n = this;
                    if (e !== c) throw new r.Gp("PDFName");
                    n = t.call(this) || this;
                    for (var i, l = "/", d = 0, h = o.length; d < h; d++) {
                        var f = o[d],
                            p = (0, u.GN)(f);
                        l += (i = p) >= s.Z.ExclamationPoint && i <= s.Z.Tilde && !a.m[i] ? f : "#" + (0, u.zv)(p)
                    }
                    return n.encodedName = l, n
                }
                return (0, n.ZT)(e, t), e.prototype.asBytes = function() {
                    for (var t = [], e = "", o = !1, n = function(e) {
                            void 0 !== e && t.push(e), o = !1
                        }, r = 1, i = this.encodedName.length; r < i; r++) {
                        var a = this.encodedName[r],
                            c = (0, u.GN)(a),
                            l = this.encodedName[r + 1];
                        o ? c >= s.Z.Zero && c <= s.Z.Nine || c >= s.Z.a && c <= s.Z.f || c >= s.Z.A && c <= s.Z.F ? 2 !== (e += a).length && (l >= "0" && l <= "9" || l >= "a" && l <= "f" || l >= "A" && l <= "F") || (n(parseInt(e, 16)), e = "") : n(c) : c === s.Z.Hash ? o = !0 : n(c)
                    }
                    return new Uint8Array(t)
                }, e.prototype.decodeText = function() {
                    var t = this.asBytes();
                    return String.fromCharCode.apply(String, Array.from(t))
                }, e.prototype.asString = function() {
                    return this.encodedName
                }, e.prototype.value = function() {
                    return this.encodedName
                }, e.prototype.clone = function() {
                    return this
                }, e.prototype.toString = function() {
                    return this.encodedName
                }, e.prototype.sizeInBytes = function() {
                    return this.encodedName.length
                }, e.prototype.copyBytesInto = function(t, e) {
                    return e += (0, u.C1)(this.encodedName, t, e), this.encodedName.length
                }, e.of = function(t) {
                    var o = function(t) {
                            return t.replace(/#([\dABCDEF]{2})/g, (function(t, e) {
                                return (0, u.Dc)(e)
                            }))
                        }(t),
                        n = l.get(o);
                    return n || (n = new e(c, o), l.set(o, n)), n
                }, e.Length = e.of("Length"), e.FlateDecode = e.of("FlateDecode"), e.Resources = e.of("Resources"), e.Font = e.of("Font"), e.XObject = e.of("XObject"), e.ExtGState = e.of("ExtGState"), e.Contents = e.of("Contents"), e.Type = e.of("Type"), e.Parent = e.of("Parent"), e.MediaBox = e.of("MediaBox"), e.Page = e.of("Page"), e.Annots = e.of("Annots"), e.TrimBox = e.of("TrimBox"), e.ArtBox = e.of("ArtBox"), e.BleedBox = e.of("BleedBox"), e.CropBox = e.of("CropBox"), e.Rotate = e.of("Rotate"), e.Title = e.of("Title"), e.Author = e.of("Author"), e.Subject = e.of("Subject"), e.Creator = e.of("Creator"), e.Keywords = e.of("Keywords"), e.Producer = e.of("Producer"), e.CreationDate = e.of("CreationDate"), e.ModDate = e.of("ModDate"), e
            }(i.Z)
        },
        998430: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => s
            });
            var n = o(570655),
                r = o(542018),
                i = o(905842);
            const s = new(function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.prototype.asNull = function() {
                    return null
                }, e.prototype.clone = function() {
                    return this
                }, e.prototype.toString = function() {
                    return "null"
                }, e.prototype.sizeInBytes = function() {
                    return 4
                }, e.prototype.copyBytesInto = function(t, e) {
                    return t[e++] = i.Z.n, t[e++] = i.Z.u, t[e++] = i.Z.l, t[e++] = i.Z.l, 4
                }, e
            }(r.Z))
        },
        953225: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => i
            });
            var n = o(570655),
                r = o(451441);
            const i = function(t) {
                function e(e) {
                    var o = t.call(this) || this;
                    return o.numberValue = e, o.stringValue = (0, r.D$)(e), o
                }
                return (0, n.ZT)(e, t), e.prototype.asNumber = function() {
                    return this.numberValue
                }, e.prototype.value = function() {
                    return this.numberValue
                }, e.prototype.clone = function() {
                    return e.of(this.numberValue)
                }, e.prototype.toString = function() {
                    return this.stringValue
                }, e.prototype.sizeInBytes = function() {
                    return this.stringValue.length
                }, e.prototype.copyBytesInto = function(t, e) {
                    return e += (0, r.C1)(this.stringValue, t, e), this.stringValue.length
                }, e.of = function(t) {
                    return new e(t)
                }, e
            }(o(542018).Z)
        },
        542018: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => r
            });
            var n = o(231732);
            const r = function() {
                function t() {}
                return t.prototype.clone = function(t) {
                    throw new n.iQ(this.constructor.name, "clone")
                }, t.prototype.toString = function() {
                    throw new n.iQ(this.constructor.name, "toString")
                }, t.prototype.sizeInBytes = function() {
                    throw new n.iQ(this.constructor.name, "sizeInBytes")
                }, t.prototype.copyBytesInto = function(t, e) {
                    throw new n.iQ(this.constructor.name, "copyBytesInto")
                }, t
            }()
        },
        150351: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => s
            });
            var n = o(570655),
                r = o(56962),
                i = o(451441);
            const s = function(t) {
                function e(e, o) {
                    var n = t.call(this, e) || this;
                    return n.contents = o, n
                }
                return (0, n.ZT)(e, t), e.prototype.asUint8Array = function() {
                    return this.contents.slice()
                }, e.prototype.clone = function(t) {
                    return e.of(this.dict.clone(t), this.contents.slice())
                }, e.prototype.getContentsString = function() {
                    return (0, i.Qo)(this.contents)
                }, e.prototype.getContents = function() {
                    return this.contents
                }, e.prototype.getContentsSize = function() {
                    return this.contents.length
                }, e.of = function(t, o) {
                    return new e(t, o)
                }, e
            }(r.Z)
        },
        964911: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => c
            });
            var n = o(570655),
                r = o(231732),
                i = o(542018),
                s = o(451441),
                a = {},
                u = new Map;
            const c = function(t) {
                function e(e, o, n) {
                    var i = this;
                    if (e !== a) throw new r.Gp("PDFRef");
                    return (i = t.call(this) || this).objectNumber = o, i.generationNumber = n, i.tag = o + " " + n + " R", i
                }
                return (0, n.ZT)(e, t), e.prototype.clone = function() {
                    return this
                }, e.prototype.toString = function() {
                    return this.tag
                }, e.prototype.sizeInBytes = function() {
                    return this.tag.length
                }, e.prototype.copyBytesInto = function(t, e) {
                    return e += (0, s.C1)(this.tag, t, e), this.tag.length
                }, e.of = function(t, o) {
                    void 0 === o && (o = 0);
                    var n = t + " " + o + " R",
                        r = u.get(n);
                    return r || (r = new e(a, t, o), u.set(n, r)), r
                }, e
            }(i.Z)
        },
        56962: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => c
            });
            var n = o(570655),
                r = o(231732),
                i = o(495268),
                s = o(953225),
                a = o(542018),
                u = o(905842);
            const c = function(t) {
                function e(e) {
                    var o = t.call(this) || this;
                    return o.dict = e, o
                }
                return (0, n.ZT)(e, t), e.prototype.clone = function(t) {
                    throw new r.iQ(this.constructor.name, "clone")
                }, e.prototype.getContentsString = function() {
                    throw new r.iQ(this.constructor.name, "getContentsString")
                }, e.prototype.getContents = function() {
                    throw new r.iQ(this.constructor.name, "getContents")
                }, e.prototype.getContentsSize = function() {
                    throw new r.iQ(this.constructor.name, "getContentsSize")
                }, e.prototype.updateDict = function() {
                    var t = this.getContentsSize();
                    this.dict.set(i.Z.Length, s.Z.of(t))
                }, e.prototype.sizeInBytes = function() {
                    return this.updateDict(), this.dict.sizeInBytes() + this.getContentsSize() + 18
                }, e.prototype.toString = function() {
                    this.updateDict();
                    var t = this.dict.toString();
                    return t += "\nstream\n", t += this.getContentsString(), t += "\nendstream"
                }, e.prototype.copyBytesInto = function(t, e) {
                    this.updateDict();
                    var o = e;
                    e += this.dict.copyBytesInto(t, e), t[e++] = u.Z.Newline, t[e++] = u.Z.s, t[e++] = u.Z.t, t[e++] = u.Z.r, t[e++] = u.Z.e, t[e++] = u.Z.a, t[e++] = u.Z.m, t[e++] = u.Z.Newline;
                    for (var n = this.getContents(), r = 0, i = n.length; r < i; r++) t[e++] = n[r];
                    return t[e++] = u.Z.Newline, t[e++] = u.Z.e, t[e++] = u.Z.n, t[e++] = u.Z.d, t[e++] = u.Z.s, t[e++] = u.Z.t, t[e++] = u.Z.r, t[e++] = u.Z.e, t[e++] = u.Z.a, t[e++] = u.Z.m, e - o
                }, e
            }(a.Z)
        },
        54222: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => u
            });
            var n = o(570655),
                r = o(542018),
                i = o(905842),
                s = o(451441),
                a = o(231732);
            const u = function(t) {
                function e(e) {
                    var o = t.call(this) || this;
                    return o.value = e, o
                }
                return (0, n.ZT)(e, t), e.prototype.asBytes = function() {
                    for (var t = [], e = "", o = !1, n = function(e) {
                            void 0 !== e && t.push(e), o = !1
                        }, r = 0, a = this.value.length; r < a; r++) {
                        var u = this.value[r],
                            c = (0, s.GN)(u),
                            l = this.value[r + 1];
                        o ? c === i.Z.Newline || c === i.Z.CarriageReturn ? n() : c === i.Z.n ? n(i.Z.Newline) : c === i.Z.r ? n(i.Z.CarriageReturn) : c === i.Z.t ? n(i.Z.Tab) : c === i.Z.b ? n(i.Z.Backspace) : c === i.Z.f ? n(i.Z.FormFeed) : c === i.Z.LeftParen ? n(i.Z.LeftParen) : c === i.Z.RightParen ? n(i.Z.RightParen) : c === i.Z.Backspace ? n(i.Z.BackSlash) : c >= i.Z.Zero && c <= i.Z.Seven ? 3 !== (e += u).length && l >= "0" && l <= "7" || (n(parseInt(e, 8)), e = "") : n(c) : c === i.Z.BackSlash ? o = !0 : n(c)
                    }
                    return new Uint8Array(t)
                }, e.prototype.decodeText = function() {
                    var t = this.asBytes();
                    return (0, s.O0)(t) ? (0, s.aB)(t) : (0, s.Ji)(t)
                }, e.prototype.decodeDate = function() {
                    var t = this.decodeText(),
                        e = (0, s.sG)(t);
                    if (!e) throw new a.dm(t);
                    return e
                }, e.prototype.asString = function() {
                    return this.value
                }, e.prototype.clone = function() {
                    return e.of(this.value)
                }, e.prototype.toString = function() {
                    return "(" + this.value + ")"
                }, e.prototype.sizeInBytes = function() {
                    return this.value.length + 2
                }, e.prototype.copyBytesInto = function(t, e) {
                    return t[e++] = i.Z.LeftParen, e += (0, s.C1)(this.value, t, e), t[e++] = i.Z.RightParen, this.value.length + 2
                }, e.of = function(t) {
                    return new e(t)
                }, e.fromDate = function(t) {
                    return new e("D:" + (0, s.Sk)(String(t.getUTCFullYear()), 4, "0") + (0, s.Sk)(String(t.getUTCMonth() + 1), 2, "0") + (0, s.Sk)(String(t.getUTCDate()), 2, "0") + (0, s.Sk)(String(t.getUTCHours()), 2, "0") + (0, s.Sk)(String(t.getUTCMinutes()), 2, "0") + (0, s.Sk)(String(t.getUTCSeconds()), 2, "0") + "Z")
                }, e
            }(r.Z)
        },
        532596: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => s
            });
            var n = o(542018),
                r = o(905842),
                i = o(451441);
            const s = function() {
                function t(t, e) {
                    this.name = t, this.args = e || []
                }
                return t.prototype.clone = function(e) {
                    for (var o = new Array(this.args.length), r = 0, i = o.length; r < i; r++) {
                        var s = this.args[r];
                        o[r] = s instanceof n.Z ? s.clone(e) : s
                    }
                    return t.of(this.name, o)
                }, t.prototype.toString = function() {
                    for (var t = "", e = 0, o = this.args.length; e < o; e++) t += String(this.args[e]) + " ";
                    return t += this.name
                }, t.prototype.sizeInBytes = function() {
                    for (var t = 0, e = 0, o = this.args.length; e < o; e++) {
                        var r = this.args[e];
                        t += (r instanceof n.Z ? r.sizeInBytes() : r.length) + 1
                    }
                    return t += this.name.length
                }, t.prototype.copyBytesInto = function(t, e) {
                    for (var o = e, s = 0, a = this.args.length; s < a; s++) {
                        var u = this.args[s];
                        u instanceof n.Z ? e += u.copyBytesInto(t, e) : e += (0, i.C1)(u, t, e), t[e++] = r.Z.Space
                    }
                    return (e += (0, i.C1)(this.name, t, e)) - o
                }, t.of = function(e, o) {
                    return new t(e, o)
                }, t
            }()
        },
        103382: (t, e, o) => {
            "use strict";
            var n;
            o.d(e, {
                    Z: () => r
                }),
                function(t) {
                    t.NonStrokingColor = "sc", t.NonStrokingColorN = "scn", t.NonStrokingColorRgb = "rg", t.NonStrokingColorGray = "g", t.NonStrokingColorCmyk = "k", t.NonStrokingColorspace = "cs", t.StrokingColor = "SC", t.StrokingColorN = "SCN", t.StrokingColorRgb = "RG", t.StrokingColorGray = "G", t.StrokingColorCmyk = "K", t.StrokingColorspace = "CS", t.BeginMarkedContentSequence = "BDC", t.BeginMarkedContent = "BMC", t.EndMarkedContent = "EMC", t.MarkedContentPointWithProps = "DP", t.MarkedContentPoint = "MP", t.DrawObject = "Do", t.ConcatTransformationMatrix = "cm", t.PopGraphicsState = "Q", t.PushGraphicsState = "q", t.SetFlatness = "i", t.SetGraphicsStateParams = "gs", t.SetLineCapStyle = "J", t.SetLineDashPattern = "d", t.SetLineJoinStyle = "j", t.SetLineMiterLimit = "M", t.SetLineWidth = "w", t.SetTextMatrix = "Tm", t.SetRenderingIntent = "ri", t.AppendRectangle = "re", t.BeginInlineImage = "BI", t.BeginInlineImageData = "ID", t.EndInlineImage = "EI", t.ClipEvenOdd = "W*", t.ClipNonZero = "W", t.CloseAndStroke = "s", t.CloseFillEvenOddAndStroke = "b*", t.CloseFillNonZeroAndStroke = "b", t.ClosePath = "h", t.AppendBezierCurve = "c", t.CurveToReplicateFinalPoint = "y", t.CurveToReplicateInitialPoint = "v", t.EndPath = "n", t.FillEvenOddAndStroke = "B*", t.FillEvenOdd = "f*", t.FillNonZeroAndStroke = "B", t.FillNonZero = "f", t.LegacyFillNonZero = "F", t.LineTo = "l", t.MoveTo = "m", t.ShadingFill = "sh", t.StrokePath = "S", t.BeginText = "BT", t.EndText = "ET", t.MoveText = "Td", t.MoveTextSetLeading = "TD", t.NextLine = "T*", t.SetCharacterSpacing = "Tc", t.SetFontAndSize = "Tf", t.SetTextHorizontalScaling = "Tz", t.SetTextLineHeight = "TL", t.SetTextRenderingMode = "Tr", t.SetTextRise = "Ts", t.SetWordSpacing = "Tw", t.ShowText = "Tj", t.ShowTextAdjusted = "TJ", t.ShowTextLine = "'", t.ShowTextLineAndSpace = '"', t.Type3D0 = "d0", t.Type3D1 = "d1", t.BeginCompatibilitySection = "BX", t.EndCompatibilitySection = "EX"
                }(n || (n = {}));
            const r = n
        },
        96234: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => k
            });
            var n = o(570655),
                r = o(231732),
                i = o(634055),
                s = o(754650),
                a = o(217802),
                u = o(418158),
                c = o(495268),
                l = o(998430),
                d = o(953225),
                h = o(150351),
                f = o(964911),
                p = o(54222),
                v = o(214580),
                g = o(796276),
                y = o(226613),
                m = o(974874),
                b = o(834801),
                Z = o(905842),
                x = o(452558),
                S = o(193042),
                w = o(870986),
                C = o(559685),
                F = o(451441);
            const k = function(t) {
                function e(e, o, n) {
                    void 0 === n && (n = !1);
                    var r = t.call(this, e, n) || this;
                    return r.context = o, r
                }
                return (0, n.ZT)(e, t), e.prototype.parseObject = function() {
                    if (this.skipWhitespaceAndComments(), this.matchKeyword(S.L.true)) return s.Z.True;
                    if (this.matchKeyword(S.L.false)) return s.Z.False;
                    if (this.matchKeyword(S.L.null)) return l.Z;
                    var t = this.bytes.peek();
                    if (t === Z.Z.LessThan && this.bytes.peekAhead(1) === Z.Z.LessThan) return this.parseDictOrStream();
                    if (t === Z.Z.LessThan) return this.parseHexString();
                    if (t === Z.Z.LeftParen) return this.parseString();
                    if (t === Z.Z.ForwardSlash) return this.parseName();
                    if (t === Z.Z.LeftSquareBracket) return this.parseArray();
                    if (w.BE[t]) return this.parseNumberOrRef();
                    throw new r.EX(this.bytes.position(), t)
                }, e.prototype.parseNumberOrRef = function() {
                    var t = this.parseRawNumber();
                    this.skipWhitespaceAndComments();
                    var e = this.bytes.offset();
                    if (w.FT[this.bytes.peek()]) {
                        var o = this.parseRawNumber();
                        if (this.skipWhitespaceAndComments(), this.bytes.peek() === Z.Z.R) return this.bytes.assertNext(Z.Z.R), f.Z.of(t, o)
                    }
                    return this.bytes.moveTo(e), d.Z.of(t)
                }, e.prototype.parseHexString = function() {
                    var t = "";
                    for (this.bytes.assertNext(Z.Z.LessThan); !this.bytes.done() && this.bytes.peek() !== Z.Z.GreaterThan;) t += (0, F.D_)(this.bytes.next());
                    return this.bytes.assertNext(Z.Z.GreaterThan), u.Z.of(t)
                }, e.prototype.parseString = function() {
                    for (var t = 0, e = !1, o = ""; !this.bytes.done();) {
                        var n = this.bytes.next();
                        if (o += (0, F.D_)(n), e || (n === Z.Z.LeftParen && (t += 1), n === Z.Z.RightParen && (t -= 1)), n === Z.Z.BackSlash ? e = !e : e && (e = !1), 0 === t) return p.Z.of(o.substring(1, o.length - 1))
                    }
                    throw new r.or(this.bytes.position())
                }, e.prototype.parseName = function() {
                    this.bytes.assertNext(Z.Z.ForwardSlash);
                    for (var t = ""; !this.bytes.done();) {
                        var e = this.bytes.peek();
                        if (C.a[e] || x.p[e]) break;
                        t += (0, F.D_)(e), this.bytes.next()
                    }
                    return c.Z.of(t)
                }, e.prototype.parseArray = function() {
                    this.bytes.assertNext(Z.Z.LeftSquareBracket), this.skipWhitespaceAndComments();
                    for (var t = i.Z.withContext(this.context); this.bytes.peek() !== Z.Z.RightSquareBracket;) {
                        var e = this.parseObject();
                        t.push(e), this.skipWhitespaceAndComments()
                    }
                    return this.bytes.assertNext(Z.Z.RightSquareBracket), t
                }, e.prototype.parseDict = function() {
                    this.bytes.assertNext(Z.Z.LessThan), this.bytes.assertNext(Z.Z.LessThan), this.skipWhitespaceAndComments();
                    for (var t = new Map; !this.bytes.done() && this.bytes.peek() !== Z.Z.GreaterThan && this.bytes.peekAhead(1) !== Z.Z.GreaterThan;) {
                        var e = this.parseName(),
                            o = this.parseObject();
                        t.set(e, o), this.skipWhitespaceAndComments()
                    }
                    this.skipWhitespaceAndComments(), this.bytes.assertNext(Z.Z.GreaterThan), this.bytes.assertNext(Z.Z.GreaterThan);
                    var n = t.get(c.Z.of("Type"));
                    return n === c.Z.of("Catalog") ? y.Z.fromMapWithContext(t, this.context) : n === c.Z.of("Pages") ? b.Z.fromMapWithContext(t, this.context) : n === c.Z.of("Page") ? m.Z.fromMapWithContext(t, this.context) : a.Z.fromMapWithContext(t, this.context)
                }, e.prototype.parseDictOrStream = function() {
                    var t = this.bytes.position(),
                        e = this.parseDict();
                    if (this.skipWhitespaceAndComments(), !this.matchKeyword(S.L.streamEOF1) && !this.matchKeyword(S.L.streamEOF2) && !this.matchKeyword(S.L.streamEOF3) && !this.matchKeyword(S.L.streamEOF4) && !this.matchKeyword(S.L.stream)) return e;
                    var o, n = this.bytes.offset(),
                        r = e.get(c.Z.of("Length"));
                    r instanceof d.Z ? (o = n + r.asNumber(), this.bytes.moveTo(o), this.skipWhitespaceAndComments(), this.matchKeyword(S.L.endstream) || (this.bytes.moveTo(n), o = this.findEndOfStreamFallback(t))) : o = this.findEndOfStreamFallback(t);
                    var i = this.bytes.slice(n, o);
                    return h.Z.of(e, i)
                }, e.prototype.findEndOfStreamFallback = function(t) {
                    for (var e = 1, o = this.bytes.offset(); !this.bytes.done() && (o = this.bytes.offset(), this.matchKeyword(S.L.stream) ? e += 1 : this.matchKeyword(S.L.EOF1endstream) || this.matchKeyword(S.L.EOF2endstream) || this.matchKeyword(S.L.EOF3endstream) || this.matchKeyword(S.L.endstream) ? e -= 1 : this.bytes.next(), 0 !== e););
                    if (0 !== e) throw new r.Sh(t);
                    return o
                }, e.forBytes = function(t, o, n) {
                    return new e(g.Z.of(t), o, n)
                }, e.forByteStream = function(t, o, n) {
                    return void 0 === n && (n = !1), new e(t, o, n)
                }, e
            }(v.Z)
        },
        888947: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => d
            });
            var n = o(570655),
                r = o(231732),
                i = o(495268),
                s = o(953225),
                a = o(964911),
                u = o(796276),
                c = o(96234),
                l = o(451441);
            const d = function(t) {
                function e(e, o) {
                    var n = t.call(this, u.Z.fromPDFRawStream(e), e.dict.context) || this,
                        r = e.dict;
                    return n.alreadyParsed = !1, n.shouldWaitForTick = o || function() {
                        return !1
                    }, n.firstOffset = r.lookup(i.Z.of("First"), s.Z).asNumber(), n.objectCount = r.lookup(i.Z.of("N"), s.Z).asNumber(), n
                }
                return (0, n.ZT)(e, t), e.prototype.parseIntoContext = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var t, e, o, i, s, u, c, d;
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    if (this.alreadyParsed) throw new r.aj("PDFObjectStreamParser", "parseIntoContext");
                                    this.alreadyParsed = !0, t = this.parseOffsetsAndObjectNumbers(), e = 0, o = t.length, n.label = 1;
                                case 1:
                                    return e < o ? (i = t[e], s = i.objectNumber, u = i.offset, this.bytes.moveTo(this.firstOffset + u), c = this.parseObject(), d = a.Z.of(s, 0), this.context.assign(d, c), this.shouldWaitForTick() ? [4, (0, l.uj)()] : [3, 3]) : [3, 4];
                                case 2:
                                    n.sent(), n.label = 3;
                                case 3:
                                    return e++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.parseOffsetsAndObjectNumbers = function() {
                    for (var t = [], e = 0, o = this.objectCount; e < o; e++) {
                        this.skipWhitespaceAndComments();
                        var n = this.parseRawInt();
                        this.skipWhitespaceAndComments();
                        var r = this.parseRawInt();
                        t.push({
                            objectNumber: n,
                            offset: r
                        })
                    }
                    return t
                }, e.forStream = function(t, o) {
                    return new e(t, o)
                }, e
            }(c.Z)
        },
        293917: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => S
            });
            var n = o(570655),
                r = o(280095),
                i = o(921617),
                s = o(339176),
                a = o(231732),
                u = o(217802),
                c = o(170314),
                l = o(495268),
                d = o(150351),
                h = o(964911),
                f = o(796276),
                p = o(96234),
                v = o(888947),
                g = o(332791),
                y = o(676834),
                m = o(905842),
                b = o(193042),
                Z = o(870986),
                x = o(451441);
            const S = function(t) {
                function e(e, o, n, r) {
                    void 0 === o && (o = 1 / 0), void 0 === n && (n = !1), void 0 === r && (r = !1);
                    var i = t.call(this, f.Z.of(e), y.Z.create(), r) || this;
                    return i.alreadyParsed = !1, i.parsedObjects = 0, i.shouldWaitForTick = function() {
                        return i.parsedObjects += 1, i.parsedObjects % i.objectsPerTick === 0
                    }, i.objectsPerTick = o, i.throwOnInvalidObject = n, i
                }
                return (0, n.ZT)(e, t), e.prototype.parseDocument = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var t, e;
                        return (0, n.Jh)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    if (this.alreadyParsed) throw new a.aj("PDFParser", "parseDocument");
                                    this.alreadyParsed = !0, this.context.header = this.parseHeader(), o.label = 1;
                                case 1:
                                    return this.bytes.done() ? [3, 3] : [4, this.parseDocumentSection()];
                                case 2:
                                    if (o.sent(), (e = this.bytes.offset()) === t) throw new a.Dr(this.bytes.position());
                                    return t = e, [3, 1];
                                case 3:
                                    return this.maybeRecoverRoot(), this.context.lookup(h.Z.of(0)) && (console.warn("Removing parsed object: 0 0 R"), this.context.delete(h.Z.of(0))), [2, this.context]
                            }
                        }))
                    }))
                }, e.prototype.maybeRecoverRoot = function() {
                    var t = function(t) {
                        return t instanceof u.Z && t.lookup(l.Z.of("Type")) === l.Z.of("Catalog")
                    };
                    if (!t(this.context.lookup(this.context.trailerInfo.Root)))
                        for (var e = this.context.enumerateIndirectObjects(), o = 0, n = e.length; o < n; o++) {
                            var r = e[o],
                                i = r[0];
                            t(r[1]) && (this.context.trailerInfo.Root = i)
                        }
                }, e.prototype.parseHeader = function() {
                    for (; !this.bytes.done();) {
                        if (this.matchKeyword(b.L.header)) {
                            var t = this.parseRawInt();
                            this.bytes.assertNext(m.Z.Period);
                            var e = this.parseRawInt(),
                                o = i.Z.forVersion(t, e);
                            return this.skipBinaryHeaderComment(), o
                        }
                        this.bytes.next()
                    }
                    throw new a.ku(this.bytes.position())
                }, e.prototype.parseIndirectObjectHeader = function() {
                    this.skipWhitespaceAndComments();
                    var t = this.parseRawInt();
                    this.skipWhitespaceAndComments();
                    var e = this.parseRawInt();
                    if (this.skipWhitespaceAndComments(), !this.matchKeyword(b.L.obj)) throw new a.uu(this.bytes.position(), b.L.obj);
                    return h.Z.of(t, e)
                }, e.prototype.matchIndirectObjectHeader = function() {
                    var t = this.bytes.offset();
                    try {
                        return this.parseIndirectObjectHeader(), !0
                    } catch (e) {
                        return this.bytes.moveTo(t), !1
                    }
                }, e.prototype.parseIndirectObject = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var t, e;
                        return (0, n.Jh)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return t = this.parseIndirectObjectHeader(), this.skipWhitespaceAndComments(), e = this.parseObject(), this.skipWhitespaceAndComments(), this.matchKeyword(b.L.endobj), e instanceof d.Z && e.dict.lookup(l.Z.of("Type")) === l.Z.of("ObjStm") ? [4, v.Z.forStream(e, this.shouldWaitForTick).parseIntoContext()] : [3, 2];
                                case 1:
                                    return o.sent(), [3, 3];
                                case 2:
                                    e instanceof d.Z && e.dict.lookup(l.Z.of("Type")) === l.Z.of("XRef") ? g.Z.forStream(e).parseIntoContext() : this.context.assign(t, e), o.label = 3;
                                case 3:
                                    return [2, t]
                            }
                        }))
                    }))
                }, e.prototype.tryToParseInvalidIndirectObject = function() {
                    var t = this.bytes.position(),
                        e = "Trying to parse invalid object: " + JSON.stringify(t) + ")";
                    if (this.throwOnInvalidObject) throw new Error(e);
                    console.warn(e);
                    var o = this.parseIndirectObjectHeader();
                    console.warn("Invalid object ref: " + o), this.skipWhitespaceAndComments();
                    for (var n = this.bytes.offset(), r = !0; !this.bytes.done() && (this.matchKeyword(b.L.endobj) && (r = !1), r);) this.bytes.next();
                    if (r) throw new a.Ke(t);
                    var i = this.bytes.offset() - b.L.endobj.length,
                        s = c.Z.of(this.bytes.slice(n, i));
                    return this.context.assign(o, s), o
                }, e.prototype.parseIndirectObjects = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var t;
                        return (0, n.Jh)(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    this.skipWhitespaceAndComments(), e.label = 1;
                                case 1:
                                    if (this.bytes.done() || !Z.FT[this.bytes.peek()]) return [3, 8];
                                    t = this.bytes.offset(), e.label = 2;
                                case 2:
                                    return e.trys.push([2, 4, , 5]), [4, this.parseIndirectObject()];
                                case 3:
                                    return e.sent(), [3, 5];
                                case 4:
                                    return e.sent(), this.bytes.moveTo(t), this.tryToParseInvalidIndirectObject(), [3, 5];
                                case 5:
                                    return this.skipWhitespaceAndComments(), this.skipJibberish(), this.shouldWaitForTick() ? [4, (0, x.uj)()] : [3, 7];
                                case 6:
                                    e.sent(), e.label = 7;
                                case 7:
                                    return [3, 1];
                                case 8:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.maybeParseCrossRefSection = function() {
                    if (this.skipWhitespaceAndComments(), this.matchKeyword(b.L.xref)) {
                        this.skipWhitespaceAndComments();
                        for (var t = -1, e = r.Z.createEmpty(); !this.bytes.done() && Z.FT[this.bytes.peek()];) {
                            var o = this.parseRawInt();
                            this.skipWhitespaceAndComments();
                            var n = this.parseRawInt();
                            this.skipWhitespaceAndComments();
                            var i = this.bytes.peek();
                            if (i === m.Z.n || i === m.Z.f) {
                                var s = h.Z.of(t, n);
                                this.bytes.next() === m.Z.n ? e.addEntry(s, o) : e.addDeletedEntry(s, o), t += 1
                            } else t = o;
                            this.skipWhitespaceAndComments()
                        }
                        return e
                    }
                }, e.prototype.maybeParseTrailerDict = function() {
                    if (this.skipWhitespaceAndComments(), this.matchKeyword(b.L.trailer)) {
                        this.skipWhitespaceAndComments();
                        var t = this.parseDict(),
                            e = this.context;
                        e.trailerInfo = {
                            Root: t.get(l.Z.of("Root")) || e.trailerInfo.Root,
                            Encrypt: t.get(l.Z.of("Encrypt")) || e.trailerInfo.Encrypt,
                            Info: t.get(l.Z.of("Info")) || e.trailerInfo.Info,
                            ID: t.get(l.Z.of("ID")) || e.trailerInfo.ID
                        }
                    }
                }, e.prototype.maybeParseTrailer = function() {
                    if (this.skipWhitespaceAndComments(), this.matchKeyword(b.L.startxref)) {
                        this.skipWhitespaceAndComments();
                        var t = this.parseRawInt();
                        return this.skipWhitespace(), this.matchKeyword(b.L.eof), this.skipWhitespaceAndComments(), this.matchKeyword(b.L.eof), this.skipWhitespaceAndComments(), s.Z.forLastCrossRefSectionOffset(t)
                    }
                }, e.prototype.parseDocumentSection = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        return (0, n.Jh)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.parseIndirectObjects()];
                                case 1:
                                    return t.sent(), this.maybeParseCrossRefSection(), this.maybeParseTrailerDict(), this.maybeParseTrailer(), this.skipJibberish(), [2]
                            }
                        }))
                    }))
                }, e.prototype.skipJibberish = function() {
                    for (this.skipWhitespaceAndComments(); !this.bytes.done();) {
                        var t = this.bytes.offset(),
                            e = this.bytes.peek();
                        if (e >= m.Z.Space && e <= m.Z.Tilde && (this.matchKeyword(b.L.xref) || this.matchKeyword(b.L.trailer) || this.matchKeyword(b.L.startxref) || this.matchIndirectObjectHeader())) {
                            this.bytes.moveTo(t);
                            break
                        }
                        this.bytes.next()
                    }
                }, e.prototype.skipBinaryHeaderComment = function() {
                    this.skipWhitespaceAndComments();
                    try {
                        var t = this.bytes.offset();
                        this.parseIndirectObjectHeader(), this.bytes.moveTo(t)
                    } catch (t) {
                        this.bytes.next(), this.skipWhitespaceAndComments()
                    }
                }, e.forBytesWithOptions = function(t, o, n, r) {
                    return new e(t, o, n, r)
                }, e
            }(p.Z)
        },
        332791: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => c
            });
            var n = o(231732),
                r = o(634055),
                i = o(495268),
                s = o(953225),
                a = o(964911),
                u = o(796276);
            const c = function() {
                function t(t) {
                    this.alreadyParsed = !1, this.dict = t.dict, this.bytes = u.Z.fromPDFRawStream(t), this.context = this.dict.context;
                    var e = this.dict.lookup(i.Z.of("Size"), s.Z),
                        o = this.dict.lookup(i.Z.of("Index"));
                    if (o instanceof r.Z) {
                        this.subsections = [];
                        for (var n = 0, a = o.size(); n < a; n += 2) {
                            var c = o.lookup(n + 0, s.Z).asNumber(),
                                l = o.lookup(n + 1, s.Z).asNumber();
                            this.subsections.push({
                                firstObjectNumber: c,
                                length: l
                            })
                        }
                    } else this.subsections = [{
                        firstObjectNumber: 0,
                        length: e.asNumber()
                    }];
                    var d = this.dict.lookup(i.Z.of("W"), r.Z);
                    this.byteWidths = [-1, -1, -1];
                    for (n = 0, a = d.size(); n < a; n++) this.byteWidths[n] = d.lookup(n, s.Z).asNumber()
                }
                return t.prototype.parseIntoContext = function() {
                    if (this.alreadyParsed) throw new n.aj("PDFXRefStreamParser", "parseIntoContext");
                    return this.alreadyParsed = !0, this.context.trailerInfo = {
                        Root: this.dict.get(i.Z.of("Root")),
                        Encrypt: this.dict.get(i.Z.of("Encrypt")),
                        Info: this.dict.get(i.Z.of("Info")),
                        ID: this.dict.get(i.Z.of("ID"))
                    }, this.parseEntries()
                }, t.prototype.parseEntries = function() {
                    for (var t = [], e = this.byteWidths, o = e[0], n = e[1], r = e[2], i = 0, s = this.subsections.length; i < s; i++)
                        for (var u = this.subsections[i], c = u.firstObjectNumber, l = u.length, d = 0; d < l; d++) {
                            for (var h = 0, f = 0, p = o; f < p; f++) h = h << 8 | this.bytes.next();
                            var v = 0;
                            for (f = 0, p = n; f < p; f++) v = v << 8 | this.bytes.next();
                            var g = 0;
                            for (f = 0, p = r; f < p; f++) g = g << 8 | this.bytes.next();
                            0 === o && (h = 1);
                            var y = c + d,
                                m = {
                                    ref: a.Z.of(y, g),
                                    offset: v,
                                    deleted: 0 === h,
                                    inObjectStream: 2 === h
                                };
                            t.push(m)
                        }
                    return t
                }, t.forStream = function(e) {
                    return new t(e)
                }, t
            }()
        },
        675386: (t, e, o) => {
            "use strict";
            o.d(e, {
                y: () => v
            });
            var n = o(231732),
                r = o(634055),
                i = o(217802),
                s = o(495268),
                a = o(953225),
                u = o(70852),
                c = o(450821),
                l = o(288029),
                d = o(868503),
                h = o(722821),
                f = o(282854),
                p = function(t, e, o) {
                    if (e === s.Z.of("FlateDecode")) return new l.Z(t);
                    if (e === s.Z.of("LZWDecode")) {
                        var r = 1;
                        if (o instanceof i.Z) {
                            var f = o.lookup(s.Z.of("EarlyChange"));
                            f instanceof a.Z && (r = f.asNumber())
                        }
                        return new d.Z(t, void 0, r)
                    }
                    if (e === s.Z.of("ASCII85Decode")) return new u.Z(t);
                    if (e === s.Z.of("ASCIIHexDecode")) return new c.Z(t);
                    if (e === s.Z.of("RunLengthDecode")) return new h.Z(t);
                    throw new n.l(e.asString())
                },
                v = function(t) {
                    var e = t.dict,
                        o = t.contents,
                        a = new f.Z(o),
                        u = e.lookup(s.Z.of("Filter")),
                        c = e.lookup(s.Z.of("DecodeParms"));
                    if (u instanceof s.Z) a = p(a, u, c);
                    else if (u instanceof r.Z)
                        for (var l = 0, d = u.size(); l < d; l++) a = p(a, u.lookup(l, s.Z), c && c.lookupMaybe(l, i.Z));
                    else if (u) throw new n.VX([s.Z, r.Z], u);
                    return a
                }
        },
        226613: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => u
            });
            var n = o(570655),
                r = o(217802),
                i = o(495268),
                s = o(757244),
                a = o(638071);
            const u = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.prototype.Pages = function() {
                    return this.lookup(i.Z.of("Pages"), r.Z)
                }, e.prototype.AcroForm = function() {
                    return this.lookupMaybe(i.Z.of("AcroForm"), r.Z)
                }, e.prototype.getAcroForm = function() {
                    var t = this.AcroForm();
                    if (t) return s.PS.fromDict(t)
                }, e.prototype.getOrCreateAcroForm = function() {
                    var t = this.getAcroForm();
                    if (!t) {
                        t = s.PS.create(this.context);
                        var e = this.context.register(t.dict);
                        this.set(i.Z.of("AcroForm"), e)
                    }
                    return t
                }, e.prototype.ViewerPreferences = function() {
                    return this.lookupMaybe(i.Z.of("ViewerPreferences"), r.Z)
                }, e.prototype.getViewerPreferences = function() {
                    var t = this.ViewerPreferences();
                    if (t) return a.ZP.fromDict(t)
                }, e.prototype.getOrCreateViewerPreferences = function() {
                    var t = this.getViewerPreferences();
                    if (!t) {
                        t = a.ZP.create(this.context);
                        var e = this.context.register(t.dict);
                        this.set(i.Z.of("ViewerPreferences"), e)
                    }
                    return t
                }, e.prototype.insertLeafNode = function(t, e) {
                    var o = this.get(i.Z.of("Pages"));
                    return this.Pages().insertLeafNode(t, e) || o
                }, e.prototype.removeLeafNode = function(t) {
                    this.Pages().removeLeafNode(t)
                }, e.withContextAndPages = function(t, o) {
                    var n = new Map;
                    return n.set(i.Z.of("Type"), i.Z.of("Catalog")), n.set(i.Z.of("Pages"), o), new e(n, t)
                }, e.fromMapWithContext = function(t, o) {
                    return new e(t, o)
                }, e
            }(r.Z)
        },
        229153: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => s
            });
            var n = o(570655),
                r = o(303238),
                i = o(905842);
            const s = function(t) {
                function e(e, o, n) {
                    void 0 === n && (n = !0);
                    var r = t.call(this, e, n) || this;
                    return r.operators = o, r
                }
                return (0, n.ZT)(e, t), e.prototype.push = function() {
                    for (var t, e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
                    (t = this.operators).push.apply(t, e)
                }, e.prototype.clone = function(t) {
                    for (var o = new Array(this.operators.length), n = 0, r = this.operators.length; n < r; n++) o[n] = this.operators[n].clone(t);
                    var i = this.dict,
                        s = this.encode;
                    return e.of(i.clone(t), o, s)
                }, e.prototype.getContentsString = function() {
                    for (var t = "", e = 0, o = this.operators.length; e < o; e++) t += this.operators[e] + "\n";
                    return t
                }, e.prototype.getUnencodedContents = function() {
                    for (var t = new Uint8Array(this.getUnencodedContentsSize()), e = 0, o = 0, n = this.operators.length; o < n; o++) e += this.operators[o].copyBytesInto(t, e), t[e++] = i.Z.Newline;
                    return t
                }, e.prototype.getUnencodedContentsSize = function() {
                    for (var t = 0, e = 0, o = this.operators.length; e < o; e++) t += this.operators[e].sizeInBytes() + 1;
                    return t
                }, e.of = function(t, o, n) {
                    return void 0 === n && (n = !0), new e(t, o, n)
                }, e
            }(r.Z)
        },
        104776: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => c
            });
            var n, r = o(570655),
                i = o(495268),
                s = o(964911),
                a = o(303238),
                u = o(451441);
            ! function(t) {
                t[t.Deleted = 0] = "Deleted", t[t.Uncompressed = 1] = "Uncompressed", t[t.Compressed = 2] = "Compressed"
            }(n || (n = {}));
            const c = function(t) {
                function e(e, o, r) {
                    void 0 === r && (r = !0);
                    var s = t.call(this, e, r) || this;
                    return s.computeIndex = function() {
                        for (var t = [], e = 0, o = 0, n = s.entries.length; o < n; o++) {
                            var r = s.entries[o],
                                i = s.entries[o - 1];
                            0 === o ? t.push(r.ref.objectNumber) : r.ref.objectNumber - i.ref.objectNumber > 1 && (t.push(e), t.push(r.ref.objectNumber), e = 0), e += 1
                        }
                        return t.push(e), t
                    }, s.computeEntryTuples = function() {
                        for (var t = new Array(s.entries.length), e = 0, o = s.entries.length; e < o; e++) {
                            var r = s.entries[e];
                            if (r.type === n.Deleted) {
                                var i = r.type,
                                    a = r.nextFreeObjectNumber,
                                    u = r.ref;
                                t[e] = [i, a, u.generationNumber]
                            }
                            if (r.type === n.Uncompressed) {
                                i = r.type;
                                var c = r.offset;
                                u = r.ref;
                                t[e] = [i, c, u.generationNumber]
                            }
                            if (r.type === n.Compressed) {
                                i = r.type;
                                var l = r.objectStreamRef,
                                    d = r.index;
                                t[e] = [i, l.objectNumber, d]
                            }
                        }
                        return t
                    }, s.computeMaxEntryByteWidths = function() {
                        for (var t = s.entryTuplesCache.access(), e = [0, 0, 0], o = 0, n = t.length; o < n; o++) {
                            var r = t[o],
                                i = r[0],
                                a = r[1],
                                c = r[2],
                                l = (0, u.yJ)(i),
                                d = (0, u.yJ)(a),
                                h = (0, u.yJ)(c);
                            l > e[0] && (e[0] = l), d > e[1] && (e[1] = d), h > e[2] && (e[2] = h)
                        }
                        return e
                    }, s.entries = o || [], s.entryTuplesCache = u.Ct.populatedBy(s.computeEntryTuples), s.maxByteWidthsCache = u.Ct.populatedBy(s.computeMaxEntryByteWidths), s.indexCache = u.Ct.populatedBy(s.computeIndex), e.set(i.Z.of("Type"), i.Z.of("XRef")), s
                }
                return (0, r.ZT)(e, t), e.prototype.addDeletedEntry = function(t, e) {
                    var o = n.Deleted;
                    this.entries.push({
                        type: o,
                        ref: t,
                        nextFreeObjectNumber: e
                    }), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate()
                }, e.prototype.addUncompressedEntry = function(t, e) {
                    var o = n.Uncompressed;
                    this.entries.push({
                        type: o,
                        ref: t,
                        offset: e
                    }), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate()
                }, e.prototype.addCompressedEntry = function(t, e, o) {
                    var r = n.Compressed;
                    this.entries.push({
                        type: r,
                        ref: t,
                        objectStreamRef: e,
                        index: o
                    }), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate()
                }, e.prototype.clone = function(t) {
                    var o = this,
                        n = o.dict,
                        r = o.entries,
                        i = o.encode;
                    return e.of(n.clone(t), r.slice(), i)
                }, e.prototype.getContentsString = function() {
                    for (var t = this.entryTuplesCache.access(), e = this.maxByteWidthsCache.access(), o = "", n = 0, r = t.length; n < r; n++) {
                        for (var i = t[n], s = i[0], a = i[1], c = i[2], l = (0, u.GP)((0, u.DV)(s)), d = (0, u.GP)((0, u.DV)(a)), h = (0, u.GP)((0, u.DV)(c)), f = e[0] - 1; f >= 0; f--) o += (l[f] || 0).toString(2);
                        for (f = e[1] - 1; f >= 0; f--) o += (d[f] || 0).toString(2);
                        for (f = e[2] - 1; f >= 0; f--) o += (h[f] || 0).toString(2)
                    }
                    return o
                }, e.prototype.getUnencodedContents = function() {
                    for (var t = this.entryTuplesCache.access(), e = this.maxByteWidthsCache.access(), o = new Uint8Array(this.getUnencodedContentsSize()), n = 0, r = 0, i = t.length; r < i; r++) {
                        for (var s = t[r], a = s[0], c = s[1], l = s[2], d = (0, u.GP)((0, u.DV)(a)), h = (0, u.GP)((0, u.DV)(c)), f = (0, u.GP)((0, u.DV)(l)), p = e[0] - 1; p >= 0; p--) o[n++] = d[p] || 0;
                        for (p = e[1] - 1; p >= 0; p--) o[n++] = h[p] || 0;
                        for (p = e[2] - 1; p >= 0; p--) o[n++] = f[p] || 0
                    }
                    return o
                }, e.prototype.getUnencodedContentsSize = function() {
                    var t = this.maxByteWidthsCache.access();
                    return (0, u.Sm)(t) * this.entries.length
                }, e.prototype.updateDict = function() {
                    t.prototype.updateDict.call(this);
                    var e = this.maxByteWidthsCache.access(),
                        o = this.indexCache.access(),
                        n = this.dict.context;
                    this.dict.set(i.Z.of("W"), n.obj(e)), this.dict.set(i.Z.of("Index"), n.obj(o))
                }, e.create = function(t, o) {
                    void 0 === o && (o = !0);
                    var n = new e(t, [], o);
                    return n.addDeletedEntry(s.Z.of(0, 65535), 0), n
                }, e.of = function(t, o, n) {
                    return void 0 === n && (n = !0), new e(t, o, n)
                }, e
            }(a.Z)
        },
        303238: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => l
            });
            var n = o(570655),
                r = o(999591),
                i = o.n(r),
                s = o(231732),
                a = o(495268),
                u = o(56962),
                c = o(451441);
            const l = function(t) {
                function e(e, o) {
                    var n = t.call(this, e) || this;
                    return n.computeContents = function() {
                        var t = n.getUnencodedContents();
                        return n.encode ? i().deflate(t) : t
                    }, n.encode = o, o && e.set(a.Z.of("Filter"), a.Z.of("FlateDecode")), n.contentsCache = c.Ct.populatedBy(n.computeContents), n
                }
                return (0, n.ZT)(e, t), e.prototype.getContents = function() {
                    return this.contentsCache.access()
                }, e.prototype.getContentsSize = function() {
                    return this.contentsCache.access().length
                }, e.prototype.getUnencodedContents = function() {
                    throw new s.iQ(this.constructor.name, "getUnencodedContents")
                }, e
            }(u.Z)
        },
        194245: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => c
            });
            var n = o(570655),
                r = o(495268),
                i = o(953225),
                s = o(303238),
                a = o(905842),
                u = o(451441);
            const c = function(t) {
                function e(e, o, n) {
                    void 0 === n && (n = !0);
                    var s = t.call(this, e.obj({}), n) || this;
                    return s.objects = o, s.offsets = s.computeObjectOffsets(), s.offsetsString = s.computeOffsetsString(), s.dict.set(r.Z.of("Type"), r.Z.of("ObjStm")), s.dict.set(r.Z.of("N"), i.Z.of(s.objects.length)), s.dict.set(r.Z.of("First"), i.Z.of(s.offsetsString.length)), s
                }
                return (0, n.ZT)(e, t), e.prototype.getObjectsCount = function() {
                    return this.objects.length
                }, e.prototype.clone = function(t) {
                    return e.withContextAndObjects(t || this.dict.context, this.objects.slice(), this.encode)
                }, e.prototype.getContentsString = function() {
                    for (var t = this.offsetsString, e = 0, o = this.objects.length; e < o; e++) {
                        t += this.objects[e][1] + "\n"
                    }
                    return t
                }, e.prototype.getUnencodedContents = function() {
                    for (var t = new Uint8Array(this.getUnencodedContentsSize()), e = (0, u.C1)(this.offsetsString, t, 0), o = 0, n = this.objects.length; o < n; o++) {
                        e += this.objects[o][1].copyBytesInto(t, e), t[e++] = a.Z.Newline
                    }
                    return t
                }, e.prototype.getUnencodedContentsSize = function() {
                    return this.offsetsString.length + (0, u.Z$)(this.offsets)[1] + (0, u.Z$)(this.objects)[1].sizeInBytes() + 1
                }, e.prototype.computeOffsetsString = function() {
                    for (var t = "", e = 0, o = this.offsets.length; e < o; e++) {
                        var n = this.offsets[e];
                        t += n[0] + " " + n[1] + " "
                    }
                    return t
                }, e.prototype.computeObjectOffsets = function() {
                    for (var t = 0, e = new Array(this.objects.length), o = 0, n = this.objects.length; o < n; o++) {
                        var r = this.objects[o],
                            i = r[0],
                            s = r[1];
                        e[o] = [i.objectNumber, t], t += s.sizeInBytes() + 1
                    }
                    return e
                }, e.withContextAndObjects = function(t, o, n) {
                    return void 0 === n && (n = !0), new e(t, o, n)
                }, e
            }(s.Z)
        },
        974874: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => c
            });
            var n = o(570655),
                r = o(634055),
                i = o(217802),
                s = o(495268),
                a = o(953225),
                u = o(56962);
            const c = function(t) {
                function e(e, o, n) {
                    void 0 === n && (n = !0);
                    var r = t.call(this, e, o) || this;
                    return r.normalized = !1, r.autoNormalizeCTM = n, r
                }
                return (0, n.ZT)(e, t), e.prototype.clone = function(t) {
                    for (var o = e.fromMapWithContext(new Map, t || this.context, this.autoNormalizeCTM), n = this.entries(), r = 0, i = n.length; r < i; r++) {
                        var s = n[r],
                            a = s[0],
                            u = s[1];
                        o.set(a, u)
                    }
                    return o
                }, e.prototype.Parent = function() {
                    return this.lookupMaybe(s.Z.Parent, i.Z)
                }, e.prototype.Contents = function() {
                    return this.lookup(s.Z.of("Contents"))
                }, e.prototype.Annots = function() {
                    return this.lookupMaybe(s.Z.Annots, r.Z)
                }, e.prototype.BleedBox = function() {
                    return this.lookupMaybe(s.Z.BleedBox, r.Z)
                }, e.prototype.TrimBox = function() {
                    return this.lookupMaybe(s.Z.TrimBox, r.Z)
                }, e.prototype.ArtBox = function() {
                    return this.lookupMaybe(s.Z.ArtBox, r.Z)
                }, e.prototype.Resources = function() {
                    var t = this.getInheritableAttribute(s.Z.Resources);
                    return this.context.lookupMaybe(t, i.Z)
                }, e.prototype.MediaBox = function() {
                    var t = this.getInheritableAttribute(s.Z.MediaBox);
                    return this.context.lookup(t, r.Z)
                }, e.prototype.CropBox = function() {
                    var t = this.getInheritableAttribute(s.Z.CropBox);
                    return this.context.lookupMaybe(t, r.Z)
                }, e.prototype.Rotate = function() {
                    var t = this.getInheritableAttribute(s.Z.Rotate);
                    return this.context.lookupMaybe(t, a.Z)
                }, e.prototype.getInheritableAttribute = function(t) {
                    var e;
                    return this.ascend((function(o) {
                        e || (e = o.get(t))
                    })), e
                }, e.prototype.setParent = function(t) {
                    this.set(s.Z.Parent, t)
                }, e.prototype.addContentStream = function(t) {
                    var e = this.normalizedEntries().Contents || this.context.obj([]);
                    this.set(s.Z.Contents, e), e.push(t)
                }, e.prototype.wrapContentStreams = function(t, e) {
                    var o = this.Contents();
                    return o instanceof r.Z && (o.insert(0, t), o.push(e), !0)
                }, e.prototype.addAnnot = function(t) {
                    this.normalizedEntries().Annots.push(t)
                }, e.prototype.removeAnnot = function(t) {
                    var e = this.normalizedEntries().Annots,
                        o = e.indexOf(t);
                    void 0 !== o && e.remove(o)
                }, e.prototype.setFontDictionary = function(t, e) {
                    this.normalizedEntries().Font.set(t, e)
                }, e.prototype.newFontDictionaryKey = function(t) {
                    return this.normalizedEntries().Font.uniqueKey(t)
                }, e.prototype.newFontDictionary = function(t, e) {
                    var o = this.newFontDictionaryKey(t);
                    return this.setFontDictionary(o, e), o
                }, e.prototype.setXObject = function(t, e) {
                    this.normalizedEntries().XObject.set(t, e)
                }, e.prototype.newXObjectKey = function(t) {
                    return this.normalizedEntries().XObject.uniqueKey(t)
                }, e.prototype.newXObject = function(t, e) {
                    var o = this.newXObjectKey(t);
                    return this.setXObject(o, e), o
                }, e.prototype.setExtGState = function(t, e) {
                    this.normalizedEntries().ExtGState.set(t, e)
                }, e.prototype.newExtGStateKey = function(t) {
                    return this.normalizedEntries().ExtGState.uniqueKey(t)
                }, e.prototype.newExtGState = function(t, e) {
                    var o = this.newExtGStateKey(t);
                    return this.setExtGState(o, e), o
                }, e.prototype.ascend = function(t) {
                    t(this);
                    var e = this.Parent();
                    e && e.ascend(t)
                }, e.prototype.normalize = function() {
                    if (!this.normalized) {
                        var t = this.context,
                            e = this.get(s.Z.Contents);
                        this.context.lookup(e) instanceof u.Z && this.set(s.Z.Contents, t.obj([e])), this.autoNormalizeCTM && this.wrapContentStreams(this.context.getPushGraphicsStateContentStream(), this.context.getPopGraphicsStateContentStream());
                        var o = this.getInheritableAttribute(s.Z.Resources),
                            n = t.lookupMaybe(o, i.Z) || t.obj({});
                        this.set(s.Z.Resources, n);
                        var r = n.lookupMaybe(s.Z.Font, i.Z) || t.obj({});
                        n.set(s.Z.Font, r);
                        var a = n.lookupMaybe(s.Z.XObject, i.Z) || t.obj({});
                        n.set(s.Z.XObject, a);
                        var c = n.lookupMaybe(s.Z.ExtGState, i.Z) || t.obj({});
                        n.set(s.Z.ExtGState, c);
                        var l = this.Annots() || t.obj([]);
                        this.set(s.Z.Annots, l), this.normalized = !0
                    }
                }, e.prototype.normalizedEntries = function() {
                    this.normalize();
                    var t = this.Annots(),
                        e = this.Resources();
                    return {
                        Annots: t,
                        Resources: e,
                        Contents: this.Contents(),
                        Font: e.lookup(s.Z.Font, i.Z),
                        XObject: e.lookup(s.Z.XObject, i.Z),
                        ExtGState: e.lookup(s.Z.ExtGState, i.Z)
                    }
                }, e.InheritableEntries = ["Resources", "MediaBox", "CropBox", "Rotate"], e.withContextAndParent = function(t, o) {
                    var n = new Map;
                    return n.set(s.Z.Type, s.Z.Page), n.set(s.Z.Parent, o), n.set(s.Z.Resources, t.obj({})), n.set(s.Z.MediaBox, t.obj([0, 0, 612, 792])), new e(n, t, !1)
                }, e.fromMapWithContext = function(t, o, n) {
                    return void 0 === n && (n = !0), new e(t, o, n)
                }, e
            }(i.Z)
        },
        834801: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => l
            });
            var n = o(570655),
                r = o(634055),
                i = o(217802),
                s = o(495268),
                a = o(953225),
                u = o(974874),
                c = o(231732);
            const l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, n.ZT)(e, t), e.prototype.Parent = function() {
                    return this.lookup(s.Z.of("Parent"))
                }, e.prototype.Kids = function() {
                    return this.lookup(s.Z.of("Kids"), r.Z)
                }, e.prototype.Count = function() {
                    return this.lookup(s.Z.of("Count"), a.Z)
                }, e.prototype.pushTreeNode = function(t) {
                    this.Kids().push(t)
                }, e.prototype.pushLeafNode = function(t) {
                    var e = this.Kids();
                    this.insertLeafKid(e.size(), t)
                }, e.prototype.insertLeafNode = function(t, o) {
                    var n = this.Kids(),
                        r = this.Count().asNumber();
                    if (o > r) throw new c.Y8(o, r);
                    for (var i = o, s = 0, a = n.size(); s < a; s++) {
                        if (0 === i) return void this.insertLeafKid(s, t);
                        var l = n.get(s),
                            d = this.context.lookup(l);
                        if (d instanceof e) {
                            if (d.Count().asNumber() > i) return d.insertLeafNode(t, i) || l;
                            i -= d.Count().asNumber()
                        }
                        d instanceof u.Z && (i -= 1)
                    }
                    if (0 !== i) throw new c.bg(o, "insertLeafNode");
                    this.insertLeafKid(n.size(), t)
                }, e.prototype.removeLeafNode = function(t, o) {
                    void 0 === o && (o = !0);
                    var n = this.Kids(),
                        r = this.Count().asNumber();
                    if (t >= r) throw new c.Y8(t, r);
                    for (var i = t, s = 0, a = n.size(); s < a; s++) {
                        var l = n.get(s),
                            d = this.context.lookup(l);
                        if (d instanceof e) {
                            if (d.Count().asNumber() > i) return d.removeLeafNode(i, o), void(o && 0 === d.Kids().size() && n.remove(s));
                            i -= d.Count().asNumber()
                        }
                        if (d instanceof u.Z) {
                            if (0 === i) return void this.removeKid(s);
                            i -= 1
                        }
                    }
                    throw new c.bg(t, "removeLeafNode")
                }, e.prototype.ascend = function(t) {
                    t(this);
                    var e = this.Parent();
                    e && e.ascend(t)
                }, e.prototype.traverse = function(t) {
                    for (var o = this.Kids(), n = 0, r = o.size(); n < r; n++) {
                        var i = o.get(n),
                            s = this.context.lookup(i);
                        s instanceof e && s.traverse(t), t(s, i)
                    }
                }, e.prototype.insertLeafKid = function(t, e) {
                    var o = this.Kids();
                    this.ascend((function(t) {
                        var e = t.Count().asNumber() + 1;
                        t.set(s.Z.of("Count"), a.Z.of(e))
                    })), o.insert(t, e)
                }, e.prototype.removeKid = function(t) {
                    var e = this.Kids();
                    e.lookup(t) instanceof u.Z && this.ascend((function(t) {
                        var e = t.Count().asNumber() - 1;
                        t.set(s.Z.of("Count"), a.Z.of(e))
                    })), e.remove(t)
                }, e.withContext = function(t, o) {
                    var n = new Map;
                    return n.set(s.Z.of("Type"), s.Z.of("Pages")), n.set(s.Z.of("Kids"), t.obj([])), n.set(s.Z.of("Count"), t.obj(0)), o && n.set(s.Z.of("Parent"), o), new e(n, t)
                }, e.fromMapWithContext = function(t, o) {
                    return new e(t, o)
                }, e
            }(i.Z)
        },
        905842: (t, e, o) => {
            "use strict";
            var n;
            o.d(e, {
                    Z: () => r
                }),
                function(t) {
                    t[t.Null = 0] = "Null", t[t.Backspace = 8] = "Backspace", t[t.Tab = 9] = "Tab", t[t.Newline = 10] = "Newline", t[t.FormFeed = 12] = "FormFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t[t.Space = 32] = "Space", t[t.ExclamationPoint = 33] = "ExclamationPoint", t[t.Hash = 35] = "Hash", t[t.Percent = 37] = "Percent", t[t.LeftParen = 40] = "LeftParen", t[t.RightParen = 41] = "RightParen", t[t.Plus = 43] = "Plus", t[t.Minus = 45] = "Minus", t[t.Dash = 45] = "Dash", t[t.Period = 46] = "Period", t[t.ForwardSlash = 47] = "ForwardSlash", t[t.Zero = 48] = "Zero", t[t.One = 49] = "One", t[t.Two = 50] = "Two", t[t.Three = 51] = "Three", t[t.Four = 52] = "Four", t[t.Five = 53] = "Five", t[t.Six = 54] = "Six", t[t.Seven = 55] = "Seven", t[t.Eight = 56] = "Eight", t[t.Nine = 57] = "Nine", t[t.LessThan = 60] = "LessThan", t[t.GreaterThan = 62] = "GreaterThan", t[t.A = 65] = "A", t[t.D = 68] = "D", t[t.E = 69] = "E", t[t.F = 70] = "F", t[t.O = 79] = "O", t[t.P = 80] = "P", t[t.R = 82] = "R", t[t.LeftSquareBracket = 91] = "LeftSquareBracket", t[t.BackSlash = 92] = "BackSlash", t[t.RightSquareBracket = 93] = "RightSquareBracket", t[t.a = 97] = "a", t[t.b = 98] = "b", t[t.d = 100] = "d", t[t.e = 101] = "e", t[t.f = 102] = "f", t[t.i = 105] = "i", t[t.j = 106] = "j", t[t.l = 108] = "l", t[t.m = 109] = "m", t[t.n = 110] = "n", t[t.o = 111] = "o", t[t.r = 114] = "r", t[t.s = 115] = "s", t[t.t = 116] = "t", t[t.u = 117] = "u", t[t.x = 120] = "x", t[t.LeftCurly = 123] = "LeftCurly", t[t.RightCurly = 125] = "RightCurly", t[t.Tilde = 126] = "Tilde"
                }(n || (n = {}));
            const r = n
        },
        554237: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => v
            });
            var n = o(570655),
                r = o(921617),
                i = o(339176),
                s = o(170314),
                a = o(495268),
                u = o(953225),
                c = o(964911),
                l = o(56962),
                d = o(104776),
                h = o(194245),
                f = o(392862),
                p = o(451441);
            const v = function(t) {
                function e(e, o, n, r) {
                    var i = t.call(this, e, o) || this;
                    return i.encodeStreams = n, i.objectsPerStream = r, i
                }
                return (0, n.ZT)(e, t), e.prototype.computeBufferSize = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var t, e, o, f, v, g, y, m, b, Z, x, S, w, C, F, k, A, T, D;
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    t = this.context.largestObjectNumber + 1, e = r.Z.forVersion(1, 7), o = e.sizeInBytes() + 2, f = d.Z.create(this.createTrailerDict(), this.encodeStreams), v = [], g = [], y = [], m = this.context.enumerateIndirectObjects(), S = 0, w = m.length, n.label = 1;
                                case 1:
                                    return S < w ? (b = m[S], F = b[0], Z = b[1], F === this.context.trailerInfo.Encrypt || Z instanceof l.Z || Z instanceof s.Z || 0 !== F.generationNumber ? (v.push(b), f.addUncompressedEntry(F, o), o += this.computeIndirectObjectSize(b), this.shouldWaitForTick(1) ? [4, (0, p.uj)()] : [3, 3]) : [3, 4]) : [3, 6];
                                case 2:
                                    n.sent(), n.label = 3;
                                case 3:
                                    return [3, 5];
                                case 4:
                                    C = (0, p.Z$)(g), x = (0, p.Z$)(y), C && C.length % this.objectsPerStream !== 0 || (C = [], g.push(C), x = c.Z.of(t++), y.push(x)), f.addCompressedEntry(F, x, C.length), C.push(b), n.label = 5;
                                case 5:
                                    return S++, [3, 1];
                                case 6:
                                    S = 0, w = g.length, n.label = 7;
                                case 7:
                                    return S < w ? (C = g[S], F = y[S], k = h.Z.withContextAndObjects(this.context, C, this.encodeStreams), f.addUncompressedEntry(F, o), o += this.computeIndirectObjectSize([F, k]), v.push([F, k]), this.shouldWaitForTick(C.length) ? [4, (0, p.uj)()] : [3, 9]) : [3, 10];
                                case 8:
                                    n.sent(), n.label = 9;
                                case 9:
                                    return S++, [3, 7];
                                case 10:
                                    return A = c.Z.of(t++), f.dict.set(a.Z.of("Size"), u.Z.of(t)), f.addUncompressedEntry(A, o), T = o, o += this.computeIndirectObjectSize([A, f]), v.push([A, f]), D = i.Z.forLastCrossRefSectionOffset(T), [2, {
                                        size: o += D.sizeInBytes(),
                                        header: e,
                                        indirectObjects: v,
                                        trailer: D
                                    }]
                            }
                        }))
                    }))
                }, e.forContext = function(t, o, n, r) {
                    return void 0 === n && (n = !0), void 0 === r && (r = 50), new e(t, o, n, r)
                }, e
            }(f.Z)
        },
        392862: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => d
            });
            var n = o(570655),
                r = o(280095),
                i = o(921617),
                s = o(339176),
                a = o(688799),
                u = o(194245),
                c = o(905842),
                l = o(451441);
            const d = function() {
                function t(t, e) {
                    var o = this;
                    this.parsedObjects = 0, this.shouldWaitForTick = function(t) {
                        return o.parsedObjects += t, o.parsedObjects % o.objectsPerTick === 0
                    }, this.context = t, this.objectsPerTick = e
                }
                return t.prototype.serializeToBuffer = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var t, e, o, r, i, s, a, d, h, f, p, v, g, y, m, b, Z;
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.computeBufferSize()];
                                case 1:
                                    t = n.sent(), e = t.size, o = t.header, r = t.indirectObjects, i = t.xref, s = t.trailerDict, a = t.trailer, d = 0, h = new Uint8Array(e), d += o.copyBytesInto(h, d), h[d++] = c.Z.Newline, h[d++] = c.Z.Newline, f = 0, p = r.length, n.label = 2;
                                case 2:
                                    return f < p ? (v = r[f], g = v[0], y = v[1], m = String(g.objectNumber), d += (0, l.C1)(m, h, d), h[d++] = c.Z.Space, b = String(g.generationNumber), d += (0, l.C1)(b, h, d), h[d++] = c.Z.Space, h[d++] = c.Z.o, h[d++] = c.Z.b, h[d++] = c.Z.j, h[d++] = c.Z.Newline, d += y.copyBytesInto(h, d), h[d++] = c.Z.Newline, h[d++] = c.Z.e, h[d++] = c.Z.n, h[d++] = c.Z.d, h[d++] = c.Z.o, h[d++] = c.Z.b, h[d++] = c.Z.j, h[d++] = c.Z.Newline, h[d++] = c.Z.Newline, Z = y instanceof u.Z ? y.getObjectsCount() : 1, this.shouldWaitForTick(Z) ? [4, (0, l.uj)()] : [3, 4]) : [3, 5];
                                case 3:
                                    n.sent(), n.label = 4;
                                case 4:
                                    return f++, [3, 2];
                                case 5:
                                    return i && (d += i.copyBytesInto(h, d), h[d++] = c.Z.Newline), s && (d += s.copyBytesInto(h, d), h[d++] = c.Z.Newline, h[d++] = c.Z.Newline), d += a.copyBytesInto(h, d), [2, h]
                            }
                        }))
                    }))
                }, t.prototype.computeIndirectObjectSize = function(t) {
                    var e = t[0],
                        o = t[1];
                    return e.sizeInBytes() + 3 + (o.sizeInBytes() + 9)
                }, t.prototype.createTrailerDict = function() {
                    return this.context.obj({
                        Size: this.context.largestObjectNumber + 1,
                        Root: this.context.trailerInfo.Root,
                        Encrypt: this.context.trailerInfo.Encrypt,
                        Info: this.context.trailerInfo.Info,
                        ID: this.context.trailerInfo.ID
                    })
                }, t.prototype.computeBufferSize = function() {
                    return (0, n.mG)(this, void 0, void 0, (function() {
                        var t, e, o, u, c, d, h, f, p, v, g;
                        return (0, n.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    t = i.Z.forVersion(1, 7), e = t.sizeInBytes() + 2, o = r.Z.create(), u = this.context.enumerateIndirectObjects(), c = 0, d = u.length, n.label = 1;
                                case 1:
                                    return c < d ? (h = u[c], f = h[0], o.addEntry(f, e), e += this.computeIndirectObjectSize(h), this.shouldWaitForTick(1) ? [4, (0, l.uj)()] : [3, 3]) : [3, 4];
                                case 2:
                                    n.sent(), n.label = 3;
                                case 3:
                                    return c++, [3, 1];
                                case 4:
                                    return p = e, e += o.sizeInBytes() + 1, v = a.Z.of(this.createTrailerDict()), e += v.sizeInBytes() + 2, g = s.Z.forLastCrossRefSectionOffset(p), [2, {
                                        size: e += g.sizeInBytes(),
                                        header: t,
                                        indirectObjects: u,
                                        xref: o,
                                        trailerDict: v,
                                        trailer: g
                                    }]
                            }
                        }))
                    }))
                }, t.forContext = function(e, o) {
                    return new t(e, o)
                }, t
            }()
        },
        751934: () => {},
        102056: (t, e, o) => {
            "use strict";
            o.d(e, {
                Z: () => n
            });
            const n = function() {
                function t(t) {
                    this.populate = t, this.value = void 0
                }
                return t.prototype.getValue = function() {
                    return this.value
                }, t.prototype.access = function() {
                    return this.value || (this.value = this.populate()), this.value
                }, t.prototype.invalidate = function() {
                    this.value = void 0
                }, t.populatedBy = function(e) {
                    return new t(e)
                }, t
            }()
        },
        32499: (t, e, o) => {
            "use strict";
            o.d(e, {
                GP: () => h,
                Jm: () => u,
                Jp: () => v,
                M5: () => a,
                PF: () => d,
                Qo: () => c,
                Sm: () => f,
                TE: () => g,
                Yj: () => l,
                Z$: () => i,
                _f: () => y,
                b3: () => s,
                w6: () => p
            });
            var n = o(526617),
                r = o(902244),
                i = function(t) {
                    return t[t.length - 1]
                },
                s = function(t) {
                    if (t instanceof Uint8Array) return t;
                    for (var e = t.length, o = new Uint8Array(e), n = 0; n < e; n++) o[n] = t.charCodeAt(n);
                    return o
                },
                a = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var o = t.length, n = [], r = 0; r < o; r++) {
                        var i = t[r];
                        n[r] = i instanceof Uint8Array ? i : s(i)
                    }
                    var a = 0;
                    for (r = 0; r < o; r++) a += t[r].length;
                    for (var u = new Uint8Array(a), c = 0, l = 0; l < o; l++)
                        for (var d = n[l], h = 0, f = d.length; h < f; h++) u[c++] = d[h];
                    return u
                },
                u = function(t) {
                    for (var e = 0, o = 0, n = t.length; o < n; o++) e += t[o].length;
                    var r = new Uint8Array(e),
                        i = 0;
                    for (o = 0, n = t.length; o < n; o++) {
                        var s = t[o];
                        r.set(s, i), i += s.length
                    }
                    return r
                },
                c = function(t) {
                    for (var e = "", o = 0, n = t.length; o < n; o++) e += (0, r.D_)(t[o]);
                    return e
                },
                l = function(t, e) {
                    return t.id - e.id
                },
                d = function(t, e) {
                    for (var o = [], n = 0, r = t.length; n < r; n++) {
                        var i = t[n],
                            s = t[n - 1];
                        0 !== n && e(i) === e(s) || o.push(i)
                    }
                    return o
                },
                h = function(t) {
                    for (var e = t.length, o = 0, n = Math.floor(e / 2); o < n; o++) {
                        var r = o,
                            i = e - o - 1,
                            s = t[o];
                        t[r] = t[i], t[i] = s
                    }
                    return t
                },
                f = function(t) {
                    for (var e = 0, o = 0, n = t.length; o < n; o++) e += t[o];
                    return e
                },
                p = function(t, e) {
                    for (var o = new Array(e - t), n = 0, r = o.length; n < r; n++) o[n] = t + n;
                    return o
                },
                v = function(t, e) {
                    for (var o = new Array(e.length), n = 0, r = e.length; n < r; n++) o[n] = t[e[n]];
                    return o
                },
                g = function(t) {
                    return t instanceof Uint8Array || t instanceof ArrayBuffer || "string" === typeof t
                },
                y = function(t) {
                    if ("string" === typeof t) return (0, n.Gw)(t);
                    if (t instanceof ArrayBuffer) return new Uint8Array(t);
                    if (t instanceof Uint8Array) return t;
                    throw new TypeError("`input` must be one of `string | ArrayBuffer | Uint8Array`")
                }
        },
        526617: (t, e, o) => {
            "use strict";
            o.d(e, {
                Eo: () => s,
                Gw: () => c,
                nN: () => a
            });
            for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(256), i = 0; i < n.length; i++) r[n.charCodeAt(i)] = i;
            var s = function(t) {
                    for (var e = "", o = t.length, r = 0; r < o; r += 3) e += n[t[r] >> 2], e += n[(3 & t[r]) << 4 | t[r + 1] >> 4], e += n[(15 & t[r + 1]) << 2 | t[r + 2] >> 6], e += n[63 & t[r + 2]];
                    return o % 3 === 2 ? e = e.substring(0, e.length - 1) + "=" : o % 3 === 1 && (e = e.substring(0, e.length - 2) + "=="), e
                },
                a = function(t) {
                    var e, o, n, i, s, a = .75 * t.length,
                        u = t.length,
                        c = 0;
                    "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
                    var l = new Uint8Array(a);
                    for (e = 0; e < u; e += 4) o = r[t.charCodeAt(e)], n = r[t.charCodeAt(e + 1)], i = r[t.charCodeAt(e + 2)], s = r[t.charCodeAt(e + 3)], l[c++] = o << 2 | n >> 4, l[c++] = (15 & n) << 4 | i >> 2, l[c++] = (3 & i) << 6 | 63 & s;
                    return l
                },
                u = /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i,
                c = function(t) {
                    var e = t.trim(),
                        o = e.substring(0, 100).match(u);
                    if (!o) return a(e);
                    var n = o[0],
                        r = e.substring(n.length);
                    return a(r)
                }
        },
        451441: (t, e, o) => {
            "use strict";
            o.d(e, {
                Ct: () => I.Z,
                Rl: () => h,
                si: () => i.si,
                Qo: () => n.Qo,
                pO: () => A,
                Qk: () => B,
                ku: () => F,
                DA: () => b,
                GT: () => Z,
                k$: () => x,
                m_: () => P,
                MU: () => k,
                z7: () => O,
                gI: () => T,
                zo: () => D,
                Ni: () => v,
                KU: () => i.KU,
                Yj: () => n.Yj,
                DV: () => a.DV,
                TE: () => n.TE,
                Vk: () => i.Vk,
                D_: () => i.D_,
                Dc: () => i.Dc,
                Qs: () => i.Qs,
                FV: () => i.FV,
                C1: () => i.C1,
                _s: () => C,
                Bj: () => m,
                nN: () => c.nN,
                Gw: () => c.Gw,
                Eo: () => c.Eo,
                vU: () => u.v,
                hr: () => i.hr,
                xV: () => i.xV,
                JZ: () => i.JZ,
                oL: () => S,
                pY: () => s.pY,
                O0: () => s.O0,
                D1: () => s.D1,
                By: () => i.By,
                Cl: () => f,
                P9: () => w,
                yo: () => s.yo,
                Z$: () => n.Z$,
                f7: () => i.f7,
                $O: () => s.$O,
                M5: () => n.M5,
                VX: () => i.VX,
                Jm: () => n.Jm,
                H1: () => i.H1,
                D$: () => a.D$,
                Sk: () => i.Sk,
                sG: () => i.sG,
                Ji: () => N.J,
                Jp: () => n.Jp,
                w6: () => n.w6,
                EO: () => p,
                GP: () => n.GP,
                ox: () => g,
                yJ: () => a.yJ,
                PF: () => n.PF,
                Sm: () => n.Sm,
                GN: () => i.GN,
                yq: () => i.yq,
                zv: () => i.zv,
                CK: () => i.CK,
                _f: () => n._f,
                b3: () => n.b3,
                aB: () => s.aB,
                nB: () => s.nB,
                Rn: () => s.Rn,
                VO: () => d,
                uj: () => r.u
            });
            var n = o(32499),
                r = o(906240),
                i = o(902244),
                s = o(875235),
                a = o(295398),
                u = o(82383),
                c = o(526617),
                l = o(533162),
                d = function(t) {
                    return Object.keys(t).map((function(e) {
                        return t[e]
                    }))
                },
                h = d(l.S4),
                f = function(t) {
                    return h.includes(t)
                },
                p = function(t, e) {
                    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
                },
                v = function(t) {
                    return "`" + t + "`"
                },
                g = function(t) {
                    return "'" + t + "'"
                },
                y = function(t) {
                    var e = typeof t;
                    return "string" === e ? g(t) : "undefined" === e ? v(t) : t
                },
                m = function(t, e, o) {
                    for (var n = new Array(o.length), r = 0, i = o.length; r < i; r++) {
                        var s = o[r];
                        n[r] = y(s)
                    }
                    var a = n.join(" or ");
                    return v(e) + " must be one of " + a + ", but was actually " + y(t)
                },
                b = function(t, e, o) {
                    Array.isArray(o) || (o = d(o));
                    for (var n = 0, r = o.length; n < r; n++)
                        if (t === o[n]) return;
                    throw new TypeError(m(t, e, o))
                },
                Z = function(t, e, o) {
                    Array.isArray(o) || (o = d(o)), b(t, e, o.concat(void 0))
                },
                x = function(t, e, o) {
                    Array.isArray(o) || (o = d(o));
                    for (var n = 0, r = t.length; n < r; n++) b(t[n], e, o)
                },
                S = function(t) {
                    return null === t ? "null" : void 0 === t ? "undefined" : "string" === typeof t ? "string" : isNaN(t) ? "NaN" : "number" === typeof t ? "number" : "boolean" === typeof t ? "boolean" : "symbol" === typeof t ? "symbol" : "bigint" === typeof t ? "bigint" : t.constructor && t.constructor.name ? t.constructor.name : t.name ? t.name : t.constructor ? String(t.constructor) : String(t)
                },
                w = function(t, e) {
                    return "null" === e ? null === t : "undefined" === e ? void 0 === t : "string" === e ? "string" === typeof t : "number" === e ? "number" === typeof t && !isNaN(t) : "boolean" === e ? "boolean" === typeof t : "symbol" === e ? "symbol" === typeof t : "bigint" === e ? "bigint" === typeof t : e === Date ? t instanceof Date : e === Array ? t instanceof Array : e === Uint8Array ? t instanceof Uint8Array : e === ArrayBuffer ? t instanceof ArrayBuffer : e === Function ? t instanceof Function : t instanceof e[0]
                },
                C = function(t, e, o) {
                    for (var n = new Array(o.length), r = 0, i = o.length; r < i; r++) {
                        var s = o[r];
                        "null" === s && (n[r] = v("null")), "undefined" === s && (n[r] = v("undefined")), "string" === s ? n[r] = v("string") : "number" === s ? n[r] = v("number") : "boolean" === s ? n[r] = v("boolean") : "symbol" === s ? n[r] = v("symbol") : "bigint" === s ? n[r] = v("bigint") : s === Array ? n[r] = v("Array") : s === Uint8Array ? n[r] = v("Uint8Array") : s === ArrayBuffer ? n[r] = v("ArrayBuffer") : n[r] = v(s[1])
                    }
                    var a = n.join(" or ");
                    return v(e) + " must be of type " + a + ", but was actually of type " + v(S(t))
                },
                F = function(t, e, o) {
                    for (var n = 0, r = o.length; n < r; n++)
                        if (w(t, o[n])) return;
                    throw new TypeError(C(t, e, o))
                },
                k = function(t, e, o) {
                    F(t, e, o.concat("undefined"))
                },
                A = function(t, e, o) {
                    for (var n = 0, r = t.length; n < r; n++) F(t[n], e, o)
                },
                T = function(t, e, o, n) {
                    if (F(t, e, ["number"]), F(o, "min", ["number"]), F(n, "max", ["number"]), n = Math.max(o, n), t < o || t > n) throw new Error(v(e) + " must be at least " + o + " and at most " + n + ", but was actually " + t)
                },
                D = function(t, e, o, n) {
                    F(t, e, ["number", "undefined"]), "number" === typeof t && T(t, e, o, n)
                },
                P = function(t, e, o) {
                    if (F(t, e, ["number"]), t % o !== 0) throw new Error(v(e) + " must be a multiple of " + o + ", but was actually " + t)
                },
                B = function(t, e) {
                    if (!Number.isInteger(t)) throw new Error(v(e) + " must be an integer, but was actually " + t)
                },
                O = function(t, e) {
                    if (![1, 0].includes(Math.sign(t))) throw new Error(v(e) + " must be a positive number or 0, but was actually " + t)
                },
                N = o(737242),
                I = o(102056)
        },
        737242: (t, e, o) => {
            "use strict";
            o.d(e, {
                J: () => s
            });
            for (var n = o(902244), r = new Uint16Array(256), i = 0; i < 256; i++) r[i] = i;
            r[22] = (0, n.GN)("\x17"), r[24] = (0, n.GN)("\u02d8"), r[25] = (0, n.GN)("\u02c7"), r[26] = (0, n.GN)("\u02c6"), r[27] = (0, n.GN)("\u02d9"), r[28] = (0, n.GN)("\u02dd"), r[29] = (0, n.GN)("\u02db"), r[30] = (0, n.GN)("\u02da"), r[31] = (0, n.GN)("\u02dc"), r[127] = (0, n.GN)("\ufffd"), r[128] = (0, n.GN)("\u2022"), r[129] = (0, n.GN)("\u2020"), r[130] = (0, n.GN)("\u2021"), r[131] = (0, n.GN)("\u2026"), r[132] = (0, n.GN)("\u2014"), r[133] = (0, n.GN)("\u2013"), r[134] = (0, n.GN)("\u0192"), r[135] = (0, n.GN)("\u2044"), r[136] = (0, n.GN)("\u2039"), r[137] = (0, n.GN)("\u203a"), r[138] = (0, n.GN)("\u2212"), r[139] = (0, n.GN)("\u2030"), r[140] = (0, n.GN)("\u201e"), r[141] = (0, n.GN)("\u201c"), r[142] = (0, n.GN)("\u201d"), r[143] = (0, n.GN)("\u2018"), r[144] = (0, n.GN)("\u2019"), r[145] = (0, n.GN)("\u201a"), r[146] = (0, n.GN)("\u2122"), r[147] = (0, n.GN)("\ufb01"), r[148] = (0, n.GN)("\ufb02"), r[149] = (0, n.GN)("\u0141"), r[150] = (0, n.GN)("\u0152"), r[151] = (0, n.GN)("\u0160"), r[152] = (0, n.GN)("\u0178"), r[153] = (0, n.GN)("\u017d"), r[154] = (0, n.GN)("\u0131"), r[155] = (0, n.GN)("\u0142"), r[156] = (0, n.GN)("\u0153"), r[157] = (0, n.GN)("\u0161"), r[158] = (0, n.GN)("\u017e"), r[159] = (0, n.GN)("\ufffd"), r[160] = (0, n.GN)("\u20ac"), r[173] = (0, n.GN)("\ufffd");
            var s = function(t) {
                for (var e = new Array(t.length), o = 0, n = t.length; o < n; o++) e[o] = r[t[o]];
                return String.fromCodePoint.apply(String, e)
            }
        },
        902244: (t, e, o) => {
            "use strict";
            o.d(e, {
                By: () => g,
                C1: () => l,
                CK: () => i,
                D_: () => a,
                Dc: () => u,
                FV: () => f,
                GN: () => n,
                H1: () => v,
                JZ: () => C,
                KU: () => x,
                Qs: () => Z,
                Sk: () => c,
                VX: () => m,
                Vk: () => b,
                f7: () => y,
                hr: () => h,
                sG: () => w,
                si: () => d,
                xV: () => p,
                yq: () => r,
                zv: () => s
            });
            var n = function(t) {
                    return t.charCodeAt(0)
                },
                r = function(t) {
                    return t.codePointAt(0)
                },
                i = function(t, e) {
                    return c(t.toString(16), e, "0").toUpperCase()
                },
                s = function(t) {
                    return i(t, 2)
                },
                a = function(t) {
                    return String.fromCharCode(t)
                },
                u = function(t) {
                    return a(parseInt(t, 16))
                },
                c = function(t, e, o) {
                    for (var n = "", r = 0, i = e - t.length; r < i; r++) n += o;
                    return n + t
                },
                l = function(t, e, o) {
                    for (var n = t.length, r = 0; r < n; r++) e[o++] = t.charCodeAt(r);
                    return n
                },
                d = function(t, e) {
                    return void 0 === e && (e = 4), t + "-" + Math.floor(Math.random() * Math.pow(10, e))
                },
                h = function(t) {
                    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                },
                f = function(t) {
                    return t.replace(/\t|\u0085|\u2028|\u2029/g, "    ").replace(/[\b\v]/g, "")
                },
                p = ["\\n", "\\f", "\\r", "\\u000B"],
                v = ["\n", "\f", "\r", "\v"],
                g = function(t) {
                    return /^[\n\f\r\u000B]$/.test(t)
                },
                y = function(t) {
                    return t.split(/[\n\f\r\u000B]/)
                },
                m = function(t) {
                    return t.replace(/[\n\f\r\u000B]/g, " ")
                },
                b = function(t, e) {
                    var o, n = t.charCodeAt(e),
                        r = e + 1,
                        i = 1;
                    return n >= 55296 && n <= 56319 && t.length > r && (o = t.charCodeAt(r)) >= 56320 && o <= 57343 && (i = 2), [t.slice(e, e + i), i]
                },
                Z = function(t) {
                    for (var e = [], o = 0, n = t.length; o < n;) {
                        var r = b(t, o),
                            i = r[0],
                            s = r[1];
                        e.push(i), o += s
                    }
                    return e
                },
                x = function(t, e, o, n) {
                    for (var r = function(t) {
                            for (var e = p.join("|"), o = ["$"], n = 0, r = t.length; n < r; n++) {
                                var i = t[n];
                                if (g(i)) throw new TypeError("`wordBreak` must not include " + e);
                                o.push("" === i ? "." : h(i))
                            }
                            var s = o.join("|");
                            return new RegExp("(" + e + ")|((.*?)(" + s + "))", "gm")
                        }(e), i = f(t).match(r), s = "", a = 0, u = [], c = function() {
                            "" !== s && u.push(s), s = "", a = 0
                        }, l = 0, d = i.length; l < d; l++) {
                        var v = i[l];
                        if (g(v)) c();
                        else {
                            var y = n(v);
                            a + y > o && c(), s += v, a += y
                        }
                    }
                    return c(), u
                },
                S = /^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/,
                w = function(t) {
                    var e = t.match(S);
                    if (e) {
                        var o = e[1],
                            n = e[2],
                            r = void 0 === n ? "01" : n,
                            i = e[3],
                            s = void 0 === i ? "01" : i,
                            a = e[4],
                            u = void 0 === a ? "00" : a,
                            c = e[5],
                            l = void 0 === c ? "00" : c,
                            d = e[6],
                            h = void 0 === d ? "00" : d,
                            f = e[7],
                            p = void 0 === f ? "Z" : f,
                            v = e[8],
                            g = void 0 === v ? "00" : v,
                            y = e[9];
                        return new Date(o + "-" + r + "-" + s + "T" + u + ":" + l + ":" + h + ("Z" === p ? "Z" : "" + p + g + ":" + (void 0 === y ? "00" : y)))
                    }
                },
                C = function(t, e) {
                    for (var o, n, r = 0; r < t.length;) {
                        var i = t.substring(r).match(e);
                        if (!i) return {
                            match: n,
                            pos: r
                        };
                        n = i, r += (null !== (o = i.index) && void 0 !== o ? o : 0) + i[0].length
                    }
                    return {
                        match: n,
                        pos: r
                    }
                }
        },
        875235: (t, e, o) => {
            "use strict";
            o.d(e, {
                $O: () => l,
                D1: () => c,
                O0: () => b,
                Rn: () => i,
                aB: () => h,
                nB: () => s,
                pY: () => u,
                yo: () => a
            });
            var n, r = o(902244),
                i = function(t, e) {
                    void 0 === e && (e = !0);
                    var o = [];
                    e && o.push(239, 187, 191);
                    for (var n = 0, i = t.length; n < i;) {
                        var s = t.codePointAt(n);
                        if (s < 128) {
                            var a = 127 & s;
                            o.push(a), n += 1
                        } else if (s < 2048) {
                            a = s >> 6 & 31 | 192;
                            var u = 63 & s | 128;
                            o.push(a, u), n += 1
                        } else if (s < 65536) {
                            a = s >> 12 & 15 | 224, u = s >> 6 & 63 | 128;
                            var c = 63 & s | 128;
                            o.push(a, u, c), n += 1
                        } else {
                            if (!(s < 1114112)) throw new Error("Invalid code point: 0x" + (0, r.zv)(s));
                            a = s >> 18 & 7 | 240, u = s >> 12 & 63 | 128, c = s >> 6 & 63 | 128;
                            var l = s >> 0 & 63 | 128;
                            o.push(a, u, c, l), n += 2
                        }
                    }
                    return new Uint8Array(o)
                },
                s = function(t, e) {
                    void 0 === e && (e = !0);
                    var o = [];
                    e && o.push(65279);
                    for (var n = 0, i = t.length; n < i;) {
                        var s = t.codePointAt(n);
                        if (s < 65536) o.push(s), n += 1;
                        else {
                            if (!(s < 1114112)) throw new Error("Invalid code point: 0x" + (0, r.zv)(s));
                            o.push(c(s), l(s)), n += 2
                        }
                    }
                    return new Uint16Array(o)
                },
                a = function(t) {
                    return t >= 0 && t <= 65535
                },
                u = function(t) {
                    return t >= 65536 && t <= 1114111
                },
                c = function(t) {
                    return Math.floor((t - 65536) / 1024) + 55296
                },
                l = function(t) {
                    return (t - 65536) % 1024 + 56320
                };
            ! function(t) {
                t.BigEndian = "BigEndian", t.LittleEndian = "LittleEndian"
            }(n || (n = {}));
            var d = "\ufffd".codePointAt(0),
                h = function(t, e) {
                    if (void 0 === e && (e = !0), t.length <= 1) return String.fromCodePoint(d);
                    for (var o = e ? g(t) : n.BigEndian, r = e ? 2 : 0, i = []; t.length - r >= 2;) {
                        var s = v(t[r++], t[r++], o);
                        if (f(s))
                            if (t.length - r < 2) i.push(d);
                            else {
                                var a = v(t[r++], t[r++], o);
                                p(a) ? i.push(s, a) : i.push(d)
                            }
                        else p(s) ? (r += 2, i.push(d)) : i.push(s)
                    }
                    return r < t.length && i.push(d), String.fromCodePoint.apply(String, i)
                },
                f = function(t) {
                    return t >= 55296 && t <= 56319
                },
                p = function(t) {
                    return t >= 56320 && t <= 57343
                },
                v = function(t, e, o) {
                    if (o === n.LittleEndian) return e << 8 | t;
                    if (o === n.BigEndian) return t << 8 | e;
                    throw new Error("Invalid byteOrder: " + o)
                },
                g = function(t) {
                    return y(t) ? n.BigEndian : m(t) ? n.LittleEndian : n.BigEndian
                },
                y = function(t) {
                    return 254 === t[0] && 255 === t[1]
                },
                m = function(t) {
                    return 255 === t[0] && 254 === t[1]
                },
                b = function(t) {
                    return y(t) || m(t)
                }
        }
    }
]);
//# sourceMappingURL=42874-684364b695811756ebc0.js.map