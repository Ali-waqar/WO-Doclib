(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [53842], {
        417849: (t, e) => {
            "use strict";
            const i = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
                n = "[" + i + "][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",
                s = new RegExp("^" + n + "$");
            e.isExist = function(t) {
                return "undefined" !== typeof t
            }, e.isEmptyObject = function(t) {
                return 0 === Object.keys(t).length
            }, e.merge = function(t, e, i) {
                if (e) {
                    const n = Object.keys(e),
                        s = n.length;
                    for (let r = 0; r < s; r++) t[n[r]] = "strict" === i ? [e[n[r]]] : e[n[r]]
                }
            }, e.getValue = function(t) {
                return e.isExist(t) ? t : ""
            }, e.isName = function(t) {
                const e = s.exec(t);
                return !(null === e || "undefined" === typeof e)
            }, e.getAllMatches = function(t, e) {
                const i = [];
                let n = e.exec(t);
                for (; n;) {
                    const s = [];
                    s.startIndex = e.lastIndex - n[0].length;
                    const r = n.length;
                    for (let t = 0; t < r; t++) s.push(n[t]);
                    i.push(s), n = e.exec(t)
                }
                return i
            }, e.nameRegexp = n
        },
        878501: (t, e, i) => {
            "use strict";
            const n = i(417849),
                s = {
                    allowBooleanAttributes: !1,
                    unpairedTags: []
                };

            function r(t) {
                return " " === t || "\t" === t || "\n" === t || "\r" === t
            }

            function o(t, e) {
                const i = e;
                for (; e < t.length; e++)
                    if ("?" != t[e] && " " != t[e]);
                    else {
                        const n = t.substr(i, e - i);
                        if (e > 5 && "xml" === n) return c("InvalidXml", "XML declaration allowed only at the start of the document.", p(t, e));
                        if ("?" == t[e] && ">" == t[e + 1]) {
                            e++;
                            break
                        }
                    }
                return e
            }

            function a(t, e) {
                if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
                    for (e += 3; e < t.length; e++)
                        if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
                            e += 2;
                            break
                        }
                } else if (t.length > e + 8 && "D" === t[e + 1] && "O" === t[e + 2] && "C" === t[e + 3] && "T" === t[e + 4] && "Y" === t[e + 5] && "P" === t[e + 6] && "E" === t[e + 7]) {
                    let i = 1;
                    for (e += 8; e < t.length; e++)
                        if ("<" === t[e]) i++;
                        else if (">" === t[e] && (i--, 0 === i)) break
                } else if (t.length > e + 9 && "[" === t[e + 1] && "C" === t[e + 2] && "D" === t[e + 3] && "A" === t[e + 4] && "T" === t[e + 5] && "A" === t[e + 6] && "[" === t[e + 7])
                    for (e += 8; e < t.length; e++)
                        if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
                            e += 2;
                            break
                        }
                return e
            }
            e.validate = function(t, e) {
                e = Object.assign({}, s, e);
                const i = [];
                let u = !1,
                    f = !1;
                "\ufeff" === t[0] && (t = t.substr(1));
                for (let s = 0; s < t.length; s++)
                    if ("<" === t[s] && "?" === t[s + 1]) {
                        if (s += 2, s = o(t, s), s.err) return s
                    } else {
                        if ("<" !== t[s]) {
                            if (r(t[s])) continue;
                            return c("InvalidChar", "char '" + t[s] + "' is not expected.", p(t, s))
                        } {
                            let x = s;
                            if (s++, "!" === t[s]) {
                                s = a(t, s);
                                continue
                            } {
                                let m = !1;
                                "/" === t[s] && (m = !0, s++);
                                let N = "";
                                for (; s < t.length && ">" !== t[s] && " " !== t[s] && "\t" !== t[s] && "\n" !== t[s] && "\r" !== t[s]; s++) N += t[s];
                                if (N = N.trim(), "/" === N[N.length - 1] && (N = N.substring(0, N.length - 1), s--), g = N, !n.isName(g)) {
                                    let e;
                                    return e = 0 === N.trim().length ? "Invalid space after '<'." : "Tag '" + N + "' is an invalid name.", c("InvalidTag", e, p(t, s))
                                }
                                const b = l(t, s);
                                if (!1 === b) return c("InvalidAttr", "Attributes for '" + N + "' have open quote.", p(t, s));
                                let E = b.value;
                                if (s = b.index, "/" === E[E.length - 1]) {
                                    const i = s - E.length;
                                    E = E.substring(0, E.length - 1);
                                    const n = h(E, e);
                                    if (!0 !== n) return c(n.err.code, n.err.msg, p(t, i + n.err.line));
                                    u = !0
                                } else if (m) {
                                    if (!b.tagClosed) return c("InvalidTag", "Closing tag '" + N + "' doesn't have proper closing.", p(t, s));
                                    if (E.trim().length > 0) return c("InvalidTag", "Closing tag '" + N + "' can't have attributes or invalid starting.", p(t, x)); {
                                        const e = i.pop();
                                        if (N !== e.tagName) {
                                            let i = p(t, e.tagStartPos);
                                            return c("InvalidTag", "Expected closing tag '" + e.tagName + "' (opened in line " + i.line + ", col " + i.col + ") instead of closing tag '" + N + "'.", p(t, x))
                                        }
                                        0 == i.length && (f = !0)
                                    }
                                } else {
                                    const n = h(E, e);
                                    if (!0 !== n) return c(n.err.code, n.err.msg, p(t, s - E.length + n.err.line));
                                    if (!0 === f) return c("InvalidXml", "Multiple possible root nodes found.", p(t, s)); - 1 !== e.unpairedTags.indexOf(N) || i.push({
                                        tagName: N,
                                        tagStartPos: x
                                    }), u = !0
                                }
                                for (s++; s < t.length; s++)
                                    if ("<" === t[s]) {
                                        if ("!" === t[s + 1]) {
                                            s++, s = a(t, s);
                                            continue
                                        }
                                        if ("?" !== t[s + 1]) break;
                                        if (s = o(t, ++s), s.err) return s
                                    } else if ("&" === t[s]) {
                                    const e = d(t, s);
                                    if (-1 == e) return c("InvalidChar", "char '&' is not expected.", p(t, s));
                                    s = e
                                } else if (!0 === f && !r(t[s])) return c("InvalidXml", "Extra text at the end", p(t, s));
                                "<" === t[s] && s--
                            }
                        }
                    }
                var g;
                return u ? 1 == i.length ? c("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", p(t, i[0].tagStartPos)) : !(i.length > 0) || c("InvalidXml", "Invalid '" + JSON.stringify(i.map((t => t.tagName)), null, 4).replace(/\r?\n/g, "") + "' found.", {
                    line: 1,
                    col: 1
                }) : c("InvalidXml", "Start tag expected.", 1)
            };

            function l(t, e) {
                let i = "",
                    n = "",
                    s = !1;
                for (; e < t.length; e++) {
                    if ('"' === t[e] || "'" === t[e]) "" === n ? n = t[e] : n !== t[e] || (n = "");
                    else if (">" === t[e] && "" === n) {
                        s = !0;
                        break
                    }
                    i += t[e]
                }
                return "" === n && {
                    value: i,
                    index: e,
                    tagClosed: s
                }
            }
            const u = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");

            function h(t, e) {
                const i = n.getAllMatches(t, u),
                    s = {};
                for (let t = 0; t < i.length; t++) {
                    if (0 === i[t][1].length) return c("InvalidAttr", "Attribute '" + i[t][2] + "' has no space in starting.", g(i[t]));
                    if (void 0 !== i[t][3] && void 0 === i[t][4]) return c("InvalidAttr", "Attribute '" + i[t][2] + "' is without value.", g(i[t]));
                    if (void 0 === i[t][3] && !e.allowBooleanAttributes) return c("InvalidAttr", "boolean attribute '" + i[t][2] + "' is not allowed.", g(i[t]));
                    const n = i[t][2];
                    if (!f(n)) return c("InvalidAttr", "Attribute '" + n + "' is an invalid name.", g(i[t]));
                    if (s.hasOwnProperty(n)) return c("InvalidAttr", "Attribute '" + n + "' is repeated.", g(i[t]));
                    s[n] = 1
                }
                return !0
            }

            function d(t, e) {
                if (";" === t[++e]) return -1;
                if ("#" === t[e]) return function(t, e) {
                    let i = /\d/;
                    for ("x" === t[e] && (e++, i = /[\da-fA-F]/); e < t.length; e++) {
                        if (";" === t[e]) return e;
                        if (!t[e].match(i)) break
                    }
                    return -1
                }(t, ++e);
                let i = 0;
                for (; e < t.length; e++, i++)
                    if (!(t[e].match(/\w/) && i < 20)) {
                        if (";" === t[e]) break;
                        return -1
                    }
                return e
            }

            function c(t, e, i) {
                return {
                    err: {
                        code: t,
                        msg: e,
                        line: i.line || i,
                        col: i.col
                    }
                }
            }

            function f(t) {
                return n.isName(t)
            }

            function p(t, e) {
                const i = t.substring(0, e).split(/\r?\n/);
                return {
                    line: i.length,
                    col: i[i.length - 1].length + 1
                }
            }

            function g(t) {
                return t.startIndex + t[1].length
            }
        },
        341192: (t, e, i) => {
            "use strict";
            const n = i(382592),
                s = {
                    attributeNamePrefix: "@_",
                    attributesGroupName: !1,
                    textNodeName: "#text",
                    ignoreAttributes: !0,
                    cdataPropName: !1,
                    format: !1,
                    indentBy: "  ",
                    suppressEmptyNode: !1,
                    suppressUnpairedNode: !0,
                    suppressBooleanAttributes: !0,
                    tagValueProcessor: function(t, e) {
                        return e
                    },
                    attributeValueProcessor: function(t, e) {
                        return e
                    },
                    preserveOrder: !1,
                    commentPropName: !1,
                    unpairedTags: [],
                    entities: [{
                        regex: new RegExp("&", "g"),
                        val: "&amp;"
                    }, {
                        regex: new RegExp(">", "g"),
                        val: "&gt;"
                    }, {
                        regex: new RegExp("<", "g"),
                        val: "&lt;"
                    }, {
                        regex: new RegExp("'", "g"),
                        val: "&apos;"
                    }, {
                        regex: new RegExp('"', "g"),
                        val: "&quot;"
                    }],
                    processEntities: !0,
                    stopNodes: [],
                    transformTagName: !1
                };

            function r(t) {
                this.options = Object.assign({}, s, t), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
                    return !1
                } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = p), this.processTextOrObjNode = a, this.options.format ? (this.indentate = f, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
                    return ""
                }, this.tagEndChar = ">", this.newLine = ""), this.options.suppressEmptyNode ? (this.buildTextNode = c, this.buildObjNode = u) : (this.buildTextNode = h, this.buildObjNode = l), this.buildTextValNode = h, this.buildObjectNode = l, this.replaceEntitiesValue = d, this.buildAttrPairStr = o
            }

            function o(t, e) {
                return e = this.options.attributeValueProcessor(t, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && "true" === e ? " " + t : " " + t + '="' + e + '"'
            }

            function a(t, e, i) {
                const n = this.j2x(t, i + 1);
                return void 0 !== t[this.options.textNodeName] && 1 === Object.keys(t).length ? this.buildTextNode(t[this.options.textNodeName], e, n.attrStr, i) : this.buildObjNode(n.val, e, n.attrStr, i)
            }

            function l(t, e, i, n) {
                let s = "</" + e + this.tagEndChar,
                    r = "";
                return "?" === e[0] && (r = "?", s = ""), i && -1 === t.indexOf("<") ? this.indentate(n) + "<" + e + i + r + ">" + t + s : !1 !== this.options.commentPropName && e === this.options.commentPropName && 0 === r.length ? this.indentate(n) + `\x3c!--${t}--\x3e` + this.newLine : this.indentate(n) + "<" + e + i + r + this.tagEndChar + t + this.indentate(n) + s
            }

            function u(t, e, i, n) {
                return "" !== t ? this.buildObjectNode(t, e, i, n) : "?" === e[0] ? this.indentate(n) + "<" + e + i + "?" + this.tagEndChar : this.indentate(n) + "<" + e + i + "/" + this.tagEndChar
            }

            function h(t, e, i, n) {
                if (!1 !== this.options.cdataPropName && e === this.options.cdataPropName) return this.indentate(n) + `<![CDATA[${t}]]>` + this.newLine;
                if (!1 !== this.options.commentPropName && e === this.options.commentPropName) return this.indentate(n) + `\x3c!--${t}--\x3e` + this.newLine; {
                    let s = this.options.tagValueProcessor(e, t);
                    return s = this.replaceEntitiesValue(s), "" === s && -1 !== this.options.unpairedTags.indexOf(e) ? this.options.suppressUnpairedNode ? this.indentate(n) + "<" + e + this.tagEndChar : this.indentate(n) + "<" + e + "/" + this.tagEndChar : this.indentate(n) + "<" + e + i + ">" + s + "</" + e + this.tagEndChar
                }
            }

            function d(t) {
                if (t && t.length > 0 && this.options.processEntities)
                    for (let e = 0; e < this.options.entities.length; e++) {
                        const i = this.options.entities[e];
                        t = t.replace(i.regex, i.val)
                    }
                return t
            }

            function c(t, e, i, n) {
                return "" === t && -1 !== this.options.unpairedTags.indexOf(e) ? this.options.suppressUnpairedNode ? this.indentate(n) + "<" + e + this.tagEndChar : this.indentate(n) + "<" + e + "/" + this.tagEndChar : "" !== t ? this.buildTextValNode(t, e, i, n) : "?" === e[0] ? this.indentate(n) + "<" + e + i + "?" + this.tagEndChar : this.indentate(n) + "<" + e + i + "/" + this.tagEndChar
            }

            function f(t) {
                return this.options.indentBy.repeat(t)
            }

            function p(t) {
                return !!t.startsWith(this.options.attributeNamePrefix) && t.substr(this.attrPrefixLen)
            }
            r.prototype.build = function(t) {
                return this.options.preserveOrder ? n(t, this.options) : (Array.isArray(t) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (t = {
                    [this.options.arrayNodeName]: t
                }), this.j2x(t, 0).val)
            }, r.prototype.j2x = function(t, e) {
                let i = "",
                    n = "";
                for (let s in t)
                    if ("undefined" === typeof t[s]);
                    else if (null === t[s]) "?" === s[0] ? n += this.indentate(e) + "<" + s + "?" + this.tagEndChar : n += this.indentate(e) + "<" + s + "/" + this.tagEndChar;
                else if (t[s] instanceof Date) n += this.buildTextNode(t[s], s, "", e);
                else if ("object" !== typeof t[s]) {
                    const r = this.isAttribute(s);
                    if (r) i += this.buildAttrPairStr(r, "" + t[s]);
                    else if (s === this.options.textNodeName) {
                        let e = this.options.tagValueProcessor(s, "" + t[s]);
                        n += this.replaceEntitiesValue(e)
                    } else n += this.buildTextNode(t[s], s, "", e)
                } else if (Array.isArray(t[s])) {
                    const i = t[s].length;
                    for (let r = 0; r < i; r++) {
                        const i = t[s][r];
                        "undefined" === typeof i || (null === i ? "?" === s[0] ? n += this.indentate(e) + "<" + s + "?" + this.tagEndChar : n += this.indentate(e) + "<" + s + "/" + this.tagEndChar : n += "object" === typeof i ? this.processTextOrObjNode(i, s, e) : this.buildTextNode(i, s, "", e))
                    }
                } else if (this.options.attributesGroupName && s === this.options.attributesGroupName) {
                    const e = Object.keys(t[s]),
                        n = e.length;
                    for (let r = 0; r < n; r++) i += this.buildAttrPairStr(e[r], "" + t[s][e[r]])
                } else n += this.processTextOrObjNode(t[s], s, e);
                return {
                    attrStr: i,
                    val: n
                }
            }, t.exports = r
        },
        382592: t => {
            function e(t, o, a, l) {
                let u = "",
                    h = "";
                o.format && o.indentBy.length > 0 && (h = "\n" + o.indentBy.repeat(l));
                for (let d = 0; d < t.length; d++) {
                    const c = t[d],
                        f = i(c);
                    let p = "";
                    if (p = 0 === a.length ? f : `${a}.${f}`, f === o.textNodeName) {
                        let t = c[f];
                        s(p, o) || (t = o.tagValueProcessor(f, t), t = r(t, o)), u += h + t;
                        continue
                    }
                    if (f === o.cdataPropName) {
                        u += h + `<![CDATA[${c[f][0][o.textNodeName]}]]>`;
                        continue
                    }
                    if (f === o.commentPropName) {
                        u += h + `\x3c!--${c[f][0][o.textNodeName]}--\x3e`;
                        continue
                    }
                    if ("?" === f[0]) {
                        const t = n(c[":@"], o),
                            e = "?xml" === f ? "" : h;
                        let i = c[f][0][o.textNodeName];
                        i = 0 !== i.length ? " " + i : "", u += e + `<${f}${i}${t}?>`;
                        continue
                    }
                    let g = h + `<${f}${n(c[":@"],o)}`,
                        x = e(c[f], o, p, l + 1); - 1 !== o.unpairedTags.indexOf(f) ? o.suppressUnpairedNode ? u += g + ">" : u += g + "/>" : x && 0 !== x.length || !o.suppressEmptyNode ? u += g + `>${x}${h}</${f}>` : u += g + "/>"
                }
                return u
            }

            function i(t) {
                const e = Object.keys(t);
                for (let t = 0; t < e.length; t++) {
                    const i = e[t];
                    if (":@" !== i) return i
                }
            }

            function n(t, e) {
                let i = "";
                if (t && !e.ignoreAttributes)
                    for (let n in t) {
                        let s = e.attributeValueProcessor(n, t[n]);
                        s = r(s, e), !0 === s && e.suppressBooleanAttributes ? i += ` ${n.substr(e.attributeNamePrefix.length)}` : i += ` ${n.substr(e.attributeNamePrefix.length)}="${s}"`
                    }
                return i
            }

            function s(t, e) {
                let i = (t = t.substr(0, t.length - e.textNodeName.length - 1)).substr(t.lastIndexOf(".") + 1);
                for (let n in e.stopNodes)
                    if (e.stopNodes[n] === t || e.stopNodes[n] === "*." + i) return !0;
                return !1
            }

            function r(t, e) {
                if (t && t.length > 0 && e.processEntities)
                    for (let i = 0; i < e.entities.length; i++) {
                        const n = e.entities[i];
                        t = t.replace(n.regex, n.val)
                    }
                return t
            }
            t.exports = function(t, i) {
                return e(t, i, "", 0)
            }
        },
        574780: t => {
            const e = RegExp("^\\s([a-zA-z0-0]+)[ \t](['\"])([^&]+)\\2");

            function i(t, i) {
                const n = e.exec(t);
                n && (i[n[1]] = {
                    regx: RegExp(`&${n[1]};`, "g"),
                    val: n[3]
                })
            }
            t.exports = function(t, e) {
                const n = {};
                if ("O" !== t[e + 3] || "C" !== t[e + 4] || "T" !== t[e + 5] || "Y" !== t[e + 6] || "P" !== t[e + 7] || "E" !== t[e + 8]) throw new Error("Invalid Tag instead of DOCTYPE"); {
                    e += 9;
                    let s = 1,
                        r = !1,
                        o = !1,
                        a = !1,
                        l = "";
                    for (; e < t.length; e++)
                        if ("<" === t[e]) {
                            if (r && "!" === t[e + 1] && "E" === t[e + 2] && "N" === t[e + 3] && "T" === t[e + 4] && "I" === t[e + 5] && "T" === t[e + 6] && "Y" === t[e + 7]) e += 7, o = !0;
                            else if (r && "!" === t[e + 1] && "E" === t[e + 2] && "L" === t[e + 3] && "E" === t[e + 4] && "M" === t[e + 5] && "E" === t[e + 6] && "N" === t[e + 7] && "T" === t[e + 8]) e += 8;
                            else if (r && "!" === t[e + 1] && "A" === t[e + 2] && "T" === t[e + 3] && "T" === t[e + 4] && "L" === t[e + 5] && "I" === t[e + 6] && "S" === t[e + 7] && "T" === t[e + 8]) e += 8;
                            else if (r && "!" === t[e + 1] && "N" === t[e + 2] && "O" === t[e + 3] && "T" === t[e + 4] && "A" === t[e + 5] && "T" === t[e + 6] && "I" === t[e + 7] && "O" === t[e + 8] && "N" === t[e + 9]) e += 9;
                            else {
                                if ("!" !== t[e + 1] || "-" !== t[e + 2] || "-" !== t[e + 3]) throw new Error("Invalid DOCTYPE");
                                a = !0
                            }
                            s++, l = ""
                        } else if (">" === t[e]) {
                        if (a) {
                            if ("-" !== t[e - 1] || "-" !== t[e - 2]) throw new Error("Invalid XML comment in DOCTYPE");
                            a = !1
                        } else o && (i(l, n), o = !1);
                        if (s--, 0 === s) break
                    } else "[" === t[e] ? r = !0 : l += t[e];
                    if (0 !== s) throw new Error("Unclosed DOCTYPE")
                }
                return {
                    entities: n,
                    i: e
                }
            }
        },
        166745: (t, e) => {
            const i = {
                preserveOrder: !1,
                attributeNamePrefix: "@_",
                attributesGroupName: !1,
                textNodeName: "#text",
                ignoreAttributes: !0,
                removeNSPrefix: !1,
                allowBooleanAttributes: !1,
                parseTagValue: !0,
                parseAttributeValue: !1,
                trimValues: !0,
                cdataPropName: !1,
                numberParseOptions: {
                    hex: !0,
                    leadingZeros: !0
                },
                tagValueProcessor: function(t, e) {
                    return e
                },
                attributeValueProcessor: function(t, e) {
                    return e
                },
                stopNodes: [],
                alwaysCreateTextNode: !1,
                isArray: () => !1,
                commentPropName: !1,
                unpairedTags: [],
                processEntities: !0,
                htmlEntities: !1,
                ignoreDeclaration: !1,
                ignorePiTags: !1,
                transformTagName: !1
            };
            e.buildOptions = function(t) {
                return Object.assign({}, i, t)
            }, e.defaultOptions = i
        },
        481078: (t, e, i) => {
            "use strict";
            const n = i(417849),
                s = i(436311),
                r = i(574780),
                o = i(14153);
            "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, n.nameRegexp);

            function a(t) {
                const e = Object.keys(t);
                for (let i = 0; i < e.length; i++) {
                    const n = e[i];
                    this.lastEntities[n] = {
                        regex: new RegExp("&" + n + ";", "g"),
                        val: t[n]
                    }
                }
            }

            function l(t, e, i, n, s, r, o) {
                if (void 0 !== t && (this.options.trimValues && !n && (t = t.trim()), t.length > 0)) {
                    o || (t = this.replaceEntitiesValue(t));
                    const n = this.options.tagValueProcessor(e, t, i, s, r);
                    if (null === n || void 0 === n) return t;
                    if (typeof n !== typeof t || n !== t) return n;
                    if (this.options.trimValues) return b(t, this.options.parseTagValue, this.options.numberParseOptions);
                    return t.trim() === t ? b(t, this.options.parseTagValue, this.options.numberParseOptions) : t
                }
            }

            function u(t) {
                if (this.options.removeNSPrefix) {
                    const e = t.split(":"),
                        i = "/" === t.charAt(0) ? "/" : "";
                    if ("xmlns" === e[0]) return "";
                    2 === e.length && (t = i + e[1])
                }
                return t
            }
            const h = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");

            function d(t, e) {
                if (!this.options.ignoreAttributes && "string" === typeof t) {
                    const i = n.getAllMatches(t, h),
                        s = i.length,
                        r = {};
                    for (let t = 0; t < s; t++) {
                        const n = this.resolveNameSpace(i[t][1]);
                        let s = i[t][4];
                        const o = this.options.attributeNamePrefix + n;
                        if (n.length)
                            if (void 0 !== s) {
                                this.options.trimValues && (s = s.trim()), s = this.replaceEntitiesValue(s);
                                const t = this.options.attributeValueProcessor(n, s, e);
                                r[o] = null === t || void 0 === t ? s : typeof t !== typeof s || t !== s ? t : b(s, this.options.parseAttributeValue, this.options.numberParseOptions)
                            } else this.options.allowBooleanAttributes && (r[o] = !0)
                    }
                    if (!Object.keys(r).length) return;
                    if (this.options.attributesGroupName) {
                        const t = {};
                        return t[this.options.attributesGroupName] = r, t
                    }
                    return r
                }
            }
            const c = function(t) {
                    t = t.replace(/\r\n?/g, "\n");
                    const e = new s("!xml");
                    let i = e,
                        n = "",
                        o = "";
                    for (let a = 0; a < t.length; a++) {
                        if ("<" === t[a])
                            if ("/" === t[a + 1]) {
                                const e = x(t, ">", a, "Closing Tag is not closed.");
                                let s = t.substring(a + 2, e).trim();
                                if (this.options.removeNSPrefix) {
                                    const t = s.indexOf(":"); - 1 !== t && (s = s.substr(t + 1))
                                }
                                this.options.transformTagName && (s = this.options.transformTagName(s)), i && (n = this.saveTextToParentTag(n, i, o)), o = o.substr(0, o.lastIndexOf(".")), i = this.tagsNodeStack.pop(), n = "", a = e
                            } else if ("?" === t[a + 1]) {
                            let e = m(t, a, !1, "?>");
                            if (!e) throw new Error("Pi Tag is not closed.");
                            if (n = this.saveTextToParentTag(n, i, o), this.options.ignoreDeclaration && "?xml" === e.tagName || this.options.ignorePiTags);
                            else {
                                const t = new s(e.tagName);
                                t.add(this.options.textNodeName, ""), e.tagName !== e.tagExp && e.attrExpPresent && (t[":@"] = this.buildAttributesMap(e.tagExp, o)), i.addChild(t)
                            }
                            a = e.closeIndex + 1
                        } else if ("!--" === t.substr(a + 1, 3)) {
                            const e = x(t, "--\x3e", a + 4, "Comment is not closed.");
                            if (this.options.commentPropName) {
                                const s = t.substring(a + 4, e - 2);
                                n = this.saveTextToParentTag(n, i, o), i.add(this.options.commentPropName, [{
                                    [this.options.textNodeName]: s
                                }])
                            }
                            a = e
                        } else if ("!D" === t.substr(a + 1, 2)) {
                            const e = r(t, a);
                            this.docTypeEntities = e.entities, a = e.i
                        } else if ("![" === t.substr(a + 1, 2)) {
                            const e = x(t, "]]>", a, "CDATA is not closed.") - 2,
                                s = t.substring(a + 9, e);
                            if (n = this.saveTextToParentTag(n, i, o), this.options.cdataPropName) i.add(this.options.cdataPropName, [{
                                [this.options.textNodeName]: s
                            }]);
                            else {
                                let t = this.parseTextData(s, i.tagname, o, !0, !1, !0);
                                void 0 == t && (t = ""), i.add(this.options.textNodeName, t)
                            }
                            a = e + 2
                        } else {
                            let r = m(t, a, this.options.removeNSPrefix),
                                l = r.tagName,
                                u = r.tagExp,
                                h = r.attrExpPresent,
                                d = r.closeIndex;
                            this.options.transformTagName && (l = this.options.transformTagName(l)), i && n && "!xml" !== i.tagname && (n = this.saveTextToParentTag(n, i, o, !1)), l !== e.tagname && (o += o ? "." + l : l);
                            const c = i;
                            if (c && -1 !== this.options.unpairedTags.indexOf(c.tagname) && (i = this.tagsNodeStack.pop()), this.isItStopNode(this.options.stopNodes, o, l)) {
                                let e = "";
                                if (u.length > 0 && u.lastIndexOf("/") === u.length - 1) a = r.closeIndex;
                                else if (-1 !== this.options.unpairedTags.indexOf(l)) a = r.closeIndex;
                                else {
                                    const i = this.readStopNodeData(t, l, d + 1);
                                    if (!i) throw new Error(`Unexpected end of ${l}`);
                                    a = i.i, e = i.tagContent
                                }
                                const n = new s(l);
                                l !== u && h && (n[":@"] = this.buildAttributesMap(u, o)), e && (e = this.parseTextData(e, l, o, !0, h, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), n.add(this.options.textNodeName, e), i.addChild(n)
                            } else {
                                if (u.length > 0 && u.lastIndexOf("/") === u.length - 1) {
                                    "/" === l[l.length - 1] ? (l = l.substr(0, l.length - 1), u = l) : u = u.substr(0, u.length - 1), this.options.transformTagName && (l = this.options.transformTagName(l));
                                    const t = new s(l);
                                    l !== u && h && (t[":@"] = this.buildAttributesMap(u, o)), o = o.substr(0, o.lastIndexOf(".")), i.addChild(t)
                                } else {
                                    const t = new s(l);
                                    this.tagsNodeStack.push(i), l !== u && h && (t[":@"] = this.buildAttributesMap(u, o)), i.addChild(t), i = t
                                }
                                n = "", a = d
                            }
                        } else n += t[a]
                    }
                    return e.child
                },
                f = function(t) {
                    if (this.options.processEntities) {
                        for (let e in this.docTypeEntities) {
                            const i = this.docTypeEntities[e];
                            t = t.replace(i.regx, i.val)
                        }
                        for (let e in this.lastEntities) {
                            const i = this.lastEntities[e];
                            t = t.replace(i.regex, i.val)
                        }
                        if (this.options.htmlEntities)
                            for (let e in this.htmlEntities) {
                                const i = this.htmlEntities[e];
                                t = t.replace(i.regex, i.val)
                            }
                        t = t.replace(this.ampEntity.regex, this.ampEntity.val)
                    }
                    return t
                };

            function p(t, e, i, n) {
                return t && (void 0 === n && (n = 0 === Object.keys(e.child).length), void 0 !== (t = this.parseTextData(t, e.tagname, i, !1, !!e[":@"] && 0 !== Object.keys(e[":@"]).length, n)) && "" !== t && e.add(this.options.textNodeName, t), t = ""), t
            }

            function g(t, e, i) {
                const n = "*." + i;
                for (const i in t) {
                    const s = t[i];
                    if (n === s || e === s) return !0
                }
                return !1
            }

            function x(t, e, i, n) {
                const s = t.indexOf(e, i);
                if (-1 === s) throw new Error(n);
                return s + e.length - 1
            }

            function m(t, e, i, n = ">") {
                const s = function(t, e, i = ">") {
                    let n, s = "";
                    for (let r = e; r < t.length; r++) {
                        let e = t[r];
                        if (n) e === n && (n = "");
                        else if ('"' === e || "'" === e) n = e;
                        else if (e === i[0]) {
                            if (!i[1]) return {
                                data: s,
                                index: r
                            };
                            if (t[r + 1] === i[1]) return {
                                data: s,
                                index: r
                            }
                        } else "\t" === e && (e = " ");
                        s += e
                    }
                }(t, e + 1, n);
                if (!s) return;
                let r = s.data;
                const o = s.index,
                    a = r.search(/\s/);
                let l = r,
                    u = !0;
                if (-1 !== a && (l = r.substr(0, a).replace(/\s\s*$/, ""), r = r.substr(a + 1)), i) {
                    const t = l.indexOf(":"); - 1 !== t && (l = l.substr(t + 1), u = l !== s.data.substr(t + 1))
                }
                return {
                    tagName: l,
                    tagExp: r,
                    closeIndex: o,
                    attrExpPresent: u
                }
            }

            function N(t, e, i) {
                const n = i;
                let s = 1;
                for (; i < t.length; i++)
                    if ("<" === t[i])
                        if ("/" === t[i + 1]) {
                            const r = x(t, ">", i, `${e} is not closed`);
                            if (t.substring(i + 2, r).trim() === e && (s--, 0 === s)) return {
                                tagContent: t.substring(n, i),
                                i: r
                            };
                            i = r
                        } else if ("?" === t[i + 1]) {
                    i = x(t, "?>", i + 1, "StopNode is not closed.")
                } else if ("!--" === t.substr(i + 1, 3)) {
                    i = x(t, "--\x3e", i + 3, "StopNode is not closed.")
                } else if ("![" === t.substr(i + 1, 2)) {
                    i = x(t, "]]>", i, "StopNode is not closed.") - 2
                } else {
                    const n = m(t, i, ">");
                    if (n) {
                        (n && n.tagName) === e && "/" !== n.tagExp[n.tagExp.length - 1] && s++, i = n.closeIndex
                    }
                }
            }

            function b(t, e, i) {
                if (e && "string" === typeof t) {
                    const e = t.trim();
                    return "true" === e || "false" !== e && o(t, i)
                }
                return n.isExist(t) ? t : ""
            }
            t.exports = class {
                constructor(t) {
                    this.options = t, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
                        apos: {
                            regex: /&(apos|#39|#x27);/g,
                            val: "'"
                        },
                        gt: {
                            regex: /&(gt|#62|#x3E);/g,
                            val: ">"
                        },
                        lt: {
                            regex: /&(lt|#60|#x3C);/g,
                            val: "<"
                        },
                        quot: {
                            regex: /&(quot|#34|#x22);/g,
                            val: '"'
                        }
                    }, this.ampEntity = {
                        regex: /&(amp|#38|#x26);/g,
                        val: "&"
                    }, this.htmlEntities = {
                        space: {
                            regex: /&(nbsp|#160);/g,
                            val: " "
                        },
                        cent: {
                            regex: /&(cent|#162);/g,
                            val: "\xa2"
                        },
                        pound: {
                            regex: /&(pound|#163);/g,
                            val: "\xa3"
                        },
                        yen: {
                            regex: /&(yen|#165);/g,
                            val: "\xa5"
                        },
                        euro: {
                            regex: /&(euro|#8364);/g,
                            val: "\u20ac"
                        },
                        copyright: {
                            regex: /&(copy|#169);/g,
                            val: "\xa9"
                        },
                        reg: {
                            regex: /&(reg|#174);/g,
                            val: "\xae"
                        },
                        inr: {
                            regex: /&(inr|#8377);/g,
                            val: "\u20b9"
                        }
                    }, this.addExternalEntities = a, this.parseXml = c, this.parseTextData = l, this.resolveNameSpace = u, this.buildAttributesMap = d, this.isItStopNode = g, this.replaceEntitiesValue = f, this.readStopNodeData = N, this.saveTextToParentTag = p
                }
            }
        },
        358844: (t, e, i) => {
            const {
                buildOptions: n
            } = i(166745), s = i(481078), {
                prettify: r
            } = i(416997), o = i(878501);
            t.exports = class {
                constructor(t) {
                    this.externalEntities = {}, this.options = n(t)
                }
                parse(t, e) {
                    if ("string" === typeof t);
                    else {
                        if (!t.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
                        t = t.toString()
                    }
                    if (e) {
                        !0 === e && (e = {});
                        const i = o.validate(t, e);
                        if (!0 !== i) throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`)
                    }
                    const i = new s(this.options);
                    i.addExternalEntities(this.externalEntities);
                    const n = i.parseXml(t);
                    return this.options.preserveOrder || void 0 === n ? n : r(n, this.options)
                }
                addEntity(t, e) {
                    if (-1 !== e.indexOf("&")) throw new Error("Entity value can't have '&'");
                    if (-1 !== t.indexOf("&") || -1 !== t.indexOf(";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
                    if ("&" === e) throw new Error("An entity with value '&' is not permitted");
                    this.externalEntities[t] = e
                }
            }
        },
        416997: (t, e) => {
            "use strict";

            function i(t, e, o) {
                let a;
                const l = {};
                for (let u = 0; u < t.length; u++) {
                    const h = t[u],
                        d = n(h);
                    let c = "";
                    if (c = void 0 === o ? d : o + "." + d, d === e.textNodeName) void 0 === a ? a = h[d] : a += "" + h[d];
                    else {
                        if (void 0 === d) continue;
                        if (h[d]) {
                            let t = i(h[d], e, c);
                            const n = r(t, e);
                            h[":@"] ? s(t, h[":@"], c, e) : 1 !== Object.keys(t).length || void 0 === t[e.textNodeName] || e.alwaysCreateTextNode ? 0 === Object.keys(t).length && (e.alwaysCreateTextNode ? t[e.textNodeName] = "" : t = "") : t = t[e.textNodeName], void 0 !== l[d] && l.hasOwnProperty(d) ? (Array.isArray(l[d]) || (l[d] = [l[d]]), l[d].push(t)) : e.isArray(d, c, n) ? l[d] = [t] : l[d] = t
                        }
                    }
                }
                return "string" === typeof a ? a.length > 0 && (l[e.textNodeName] = a) : void 0 !== a && (l[e.textNodeName] = a), l
            }

            function n(t) {
                const e = Object.keys(t);
                for (let t = 0; t < e.length; t++) {
                    const i = e[t];
                    if (":@" !== i) return i
                }
            }

            function s(t, e, i, n) {
                if (e) {
                    const s = Object.keys(e),
                        r = s.length;
                    for (let o = 0; o < r; o++) {
                        const r = s[o];
                        n.isArray(r, i + "." + r, !0, !0) ? t[r] = [e[r]] : t[r] = e[r]
                    }
                }
            }

            function r(t, e) {
                const i = Object.keys(t).length;
                return !!(0 === i || 1 === i && t[e.textNodeName])
            }
            e.prettify = function(t, e) {
                return i(t, e)
            }
        },
        436311: t => {
            "use strict";
            t.exports = class {
                constructor(t) {
                    this.tagname = t, this.child = [], this[":@"] = {}
                }
                add(t, e) {
                    this.child.push({
                        [t]: e
                    })
                }
                addChild(t) {
                    t[":@"] && Object.keys(t[":@"]).length > 0 ? this.child.push({
                        [t.tagname]: t.child,
                        ":@": t[":@"]
                    }) : this.child.push({
                        [t.tagname]: t.child
                    })
                }
            }
        },
        14153: t => {
            const e = /^[-+]?0x[a-fA-F0-9]+$/,
                i = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
            !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
            const n = {
                hex: !0,
                leadingZeros: !0,
                decimalPoint: ".",
                eNotation: !0
            };
            t.exports = function(t, s = {}) {
                if (s = Object.assign({}, n, s), !t || "string" !== typeof t) return t;
                let r = t.trim();
                if (void 0 !== s.skipLike && s.skipLike.test(r)) return t;
                if (s.hex && e.test(r)) return Number.parseInt(r, 16); {
                    const e = i.exec(r);
                    if (e) {
                        const i = e[1],
                            n = e[2];
                        let o = function(t) {
                            if (t && -1 !== t.indexOf(".")) return "." === (t = t.replace(/0+$/, "")) ? t = "0" : "." === t[0] ? t = "0" + t : "." === t[t.length - 1] && (t = t.substr(0, t.length - 1)), t;
                            return t
                        }(e[3]);
                        const a = e[4] || e[6];
                        if (!s.leadingZeros && n.length > 0 && i && "." !== r[2]) return t;
                        if (!s.leadingZeros && n.length > 0 && !i && "." !== r[1]) return t; {
                            const e = Number(r),
                                l = "" + e;
                            return -1 !== l.search(/[eE]/) || a ? s.eNotation ? e : t : -1 !== r.indexOf(".") ? "0" === l && "" === o || l === o || i && l === "-" + o ? e : t : n ? o === l || i + o === l ? e : t : r === l || r === i + l ? e : t
                        }
                    }
                    return t
                }
            }
        }
    }
]);
//# sourceMappingURL=../53842-0c7a40cd58d26cdad038.js.map