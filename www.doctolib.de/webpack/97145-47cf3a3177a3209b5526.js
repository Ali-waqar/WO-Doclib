/*! For license information please see 97145-47cf3a3177a3209b5526.js.LICENSE.txt */
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [97145], {
        468607: e => {
            var t;
            window, t = function() {
                return function(e) {
                    var t = {};

                    function n(r) {
                        if (t[r]) return t[r].exports;
                        var o = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                    }
                    return n.m = e, n.c = t, n.d = function(e, t, r) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: r
                        })
                    }, n.r = function(e) {
                        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
                        var r = Object.create(null);
                        if (n.r(r), Object.defineProperty(r, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e)
                            for (var o in e) n.d(r, o, function(t) {
                                return e[t]
                            }.bind(null, o));
                        return r
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return n.d(t, "a", t), t
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, n.p = "", n(n.s = 0)
                }({
                    "./src/index.js": function(e, t, n) {
                        "use strict";
                        n.r(t), n("./src/sass/index.scss");
                        var r = n("./src/js/init.js").default.init;
                        "undefined" !== typeof window && (window.printJS = r), t.default = r
                    },
                    "./src/js/browser.js": function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = {
                            isFirefox: function() {
                                return "undefined" !== typeof InstallTrigger
                            },
                            isIE: function() {
                                return -1 !== navigator.userAgent.indexOf("MSIE") || !!document.documentMode
                            },
                            isEdge: function() {
                                return !r.isIE() && !!window.StyleMedia
                            },
                            isChrome: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                                return !!e.chrome
                            },
                            isSafari: function() {
                                return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 || -1 !== navigator.userAgent.toLowerCase().indexOf("safari")
                            },
                            isIOSChrome: function() {
                                return -1 !== navigator.userAgent.toLowerCase().indexOf("crios")
                            }
                        };
                        t.default = r
                    },
                    "./src/js/functions.js": function(e, t, n) {
                        "use strict";
                        n.r(t), n.d(t, "addWrapper", (function() {
                            return i
                        })), n.d(t, "capitalizePrint", (function() {
                            return s
                        })), n.d(t, "collectStyles", (function() {
                            return c
                        })), n.d(t, "addHeader", (function() {
                            return u
                        })), n.d(t, "cleanUp", (function() {
                            return d
                        })), n.d(t, "isRawHTML", (function() {
                            return p
                        }));
                        var r = n("./src/js/modal.js"),
                            o = n("./src/js/browser.js");

                        function a(e) {
                            return a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                                return typeof e
                            } : function(e) {
                                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, a(e)
                        }

                        function i(e, t) {
                            return '<div style="font-family:' + t.font + " !important; font-size: " + t.font_size + ' !important; width:100%;">' + e + "</div>"
                        }

                        function s(e) {
                            return e.charAt(0).toUpperCase() + e.slice(1)
                        }

                        function c(e, t) {
                            for (var n = "", r = (document.defaultView || window).getComputedStyle(e, ""), o = 0; o < r.length; o++)(-1 !== t.targetStyles.indexOf("*") || -1 !== t.targetStyle.indexOf(r[o]) || l(t.targetStyles, r[o])) && r.getPropertyValue(r[o]) && (n += r[o] + ":" + r.getPropertyValue(r[o]) + ";");
                            return n += "max-width: " + t.maxWidth + "px !important; font-size: " + t.font_size + " !important;"
                        }

                        function l(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if ("object" === a(t) && -1 !== t.indexOf(e[n])) return !0;
                            return !1
                        }

                        function u(e, t) {
                            var n = document.createElement("div");
                            if (p(t.header)) n.innerHTML = t.header;
                            else {
                                var r = document.createElement("h1"),
                                    o = document.createTextNode(t.header);
                                r.appendChild(o), r.setAttribute("style", t.headerStyle), n.appendChild(r)
                            }
                            e.insertBefore(n, e.childNodes[0])
                        }

                        function d(e) {
                            e.showModal && r.default.close(), e.onLoadingEnd && e.onLoadingEnd(), (e.showModal || e.onLoadingStart) && window.URL.revokeObjectURL(e.printable);
                            var t = "mouseover";
                            (o.default.isChrome() || o.default.isFirefox()) && (t = "focus"), window.addEventListener(t, (function n() {
                                window.removeEventListener(t, n), e.onPrintDialogClose();
                                var r = document.getElementById(e.frameId);
                                r && r.remove()
                            }))
                        }

                        function p(e) {
                            return new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>").test(e)
                        }
                    },
                    "./src/js/html.js": function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n("./src/js/functions.js"),
                            o = n("./src/js/print.js");

                        function a(e) {
                            return a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                                return typeof e
                            } : function(e) {
                                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, a(e)
                        }

                        function i(e, t) {
                            for (var n = e.cloneNode(), o = Array.prototype.slice.call(e.childNodes), a = 0; a < o.length; a++)
                                if (-1 === t.ignoreElements.indexOf(o[a].id)) {
                                    var s = i(o[a], t);
                                    n.appendChild(s)
                                }
                            switch (t.scanStyles && 1 === e.nodeType && n.setAttribute("style", Object(r.collectStyles)(e, t)), e.tagName) {
                                case "SELECT":
                                    n.value = e.value;
                                    break;
                                case "CANVAS":
                                    n.getContext("2d").drawImage(e, 0, 0)
                            }
                            return n
                        }
                        t.default = {
                            print: function(e, t) {
                                var n, s = "object" === a(n = e.printable) && n && (n instanceof HTMLElement || 1 === n.nodeType) ? e.printable : document.getElementById(e.printable);
                                s ? (e.printableElement = i(s, e), e.header && Object(r.addHeader)(e.printableElement, e), o.default.send(e, t)) : window.console.error("Invalid HTML element id: " + e.printable)
                            }
                        }
                    },
                    "./src/js/image.js": function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n("./src/js/functions.js"),
                            o = n("./src/js/print.js"),
                            a = n("./src/js/browser.js");
                        t.default = {
                            print: function(e, t) {
                                e.printable.constructor !== Array && (e.printable = [e.printable]), e.printableElement = document.createElement("div"), e.printable.forEach((function(t) {
                                    var n = document.createElement("img");
                                    if (n.setAttribute("style", e.imageStyle), n.src = t, a.default.isFirefox()) {
                                        var r = n.src;
                                        n.src = r
                                    }
                                    var o = document.createElement("div");
                                    o.appendChild(n), e.printableElement.appendChild(o)
                                })), e.header && Object(r.addHeader)(e.printableElement, e), o.default.send(e, t)
                            }
                        }
                    },
                    "./src/js/init.js": function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n("./src/js/browser.js"),
                            o = n("./src/js/modal.js"),
                            a = n("./src/js/pdf.js"),
                            i = n("./src/js/html.js"),
                            s = n("./src/js/raw-html.js"),
                            c = n("./src/js/image.js"),
                            l = n("./src/js/json.js");

                        function u(e) {
                            return u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                                return typeof e
                            } : function(e) {
                                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, u(e)
                        }
                        var d = ["pdf", "html", "image", "json", "raw-html"];
                        t.default = {
                            init: function() {
                                var e = {
                                        printable: null,
                                        fallbackPrintable: null,
                                        type: "pdf",
                                        header: null,
                                        headerStyle: "font-weight: 300;",
                                        maxWidth: 800,
                                        properties: null,
                                        gridHeaderStyle: "font-weight: bold; padding: 5px; border: 1px solid #dddddd;",
                                        gridStyle: "border: 1px solid lightgray; margin-bottom: -1px;",
                                        showModal: !1,
                                        onError: function(e) {
                                            throw e
                                        },
                                        onLoadingStart: null,
                                        onLoadingEnd: null,
                                        onPrintDialogClose: function() {},
                                        onIncompatibleBrowser: function() {},
                                        modalMessage: "Retrieving Document...",
                                        frameId: "printJS",
                                        printableElement: null,
                                        documentTitle: "Document",
                                        targetStyle: ["clear", "display", "width", "min-width", "height", "min-height", "max-height"],
                                        targetStyles: ["border", "box", "break", "text-decoration"],
                                        ignoreElements: [],
                                        repeatTableHeader: !0,
                                        css: null,
                                        style: null,
                                        scanStyles: !0,
                                        base64: !1,
                                        onPdfOpen: null,
                                        font: "TimesNewRoman",
                                        font_size: "12pt",
                                        honorMarginPadding: !0,
                                        honorColor: !1,
                                        imageStyle: "max-width: 100%;"
                                    },
                                    t = arguments[0];
                                if (void 0 === t) throw new Error("printJS expects at least 1 attribute.");
                                switch (u(t)) {
                                    case "string":
                                        e.printable = encodeURI(t), e.fallbackPrintable = e.printable, e.type = arguments[1] || e.type;
                                        break;
                                    case "object":
                                        for (var n in e.printable = t.printable, e.fallbackPrintable = "undefined" !== typeof t.fallbackPrintable ? t.fallbackPrintable : e.printable, e.fallbackPrintable = e.base64 ? "data:application/pdf;base64,".concat(e.fallbackPrintable) : e.fallbackPrintable, e) "printable" !== n && "fallbackPrintable" !== n && (e[n] = "undefined" !== typeof t[n] ? t[n] : e[n]);
                                        break;
                                    default:
                                        throw new Error('Unexpected argument type! Expected "string" or "object", got ' + u(t))
                                }
                                if (!e.printable) throw new Error("Missing printable information.");
                                if (!e.type || "string" !== typeof e.type || -1 === d.indexOf(e.type.toLowerCase())) throw new Error("Invalid print type. Available types are: pdf, html, image and json.");
                                e.showModal && o.default.show(e), e.onLoadingStart && e.onLoadingStart();
                                var p = document.getElementById(e.frameId);
                                p && p.parentNode.removeChild(p);
                                var f = document.createElement("iframe");
                                switch (r.default.isFirefox() ? f.setAttribute("style", "width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0") : f.setAttribute("style", "visibility: hidden; height: 0; width: 0; position: absolute; border: 0"), f.setAttribute("id", e.frameId), "pdf" !== e.type && (f.srcdoc = "<html><head><title>" + e.documentTitle + "</title>", e.css && (Array.isArray(e.css) || (e.css = [e.css]), e.css.forEach((function(e) {
                                    f.srcdoc += '<link rel="stylesheet" href="' + e + '">'
                                }))), f.srcdoc += "</head><body></body></html>"), e.type) {
                                    case "pdf":
                                        if (r.default.isIE()) try {
                                            console.info("Print.js doesn't support PDF printing in Internet Explorer.");
                                            var g = window.open(e.fallbackPrintable, "_blank");
                                            g.focus(), e.onIncompatibleBrowser()
                                        } catch (t) {
                                            e.onError(t)
                                        } finally {
                                            e.showModal && o.default.close(), e.onLoadingEnd && e.onLoadingEnd()
                                        } else a.default.print(e, f);
                                        break;
                                    case "image":
                                        c.default.print(e, f);
                                        break;
                                    case "html":
                                        i.default.print(e, f);
                                        break;
                                    case "raw-html":
                                        s.default.print(e, f);
                                        break;
                                    case "json":
                                        l.default.print(e, f)
                                }
                            }
                        }
                    },
                    "./src/js/json.js": function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n("./src/js/functions.js"),
                            o = n("./src/js/print.js");

                        function a(e) {
                            return a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                                return typeof e
                            } : function(e) {
                                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, a(e)
                        }
                        t.default = {
                            print: function(e, t) {
                                if ("object" !== a(e.printable)) throw new Error("Invalid javascript data object (JSON).");
                                if ("boolean" !== typeof e.repeatTableHeader) throw new Error("Invalid value for repeatTableHeader attribute (JSON).");
                                if (!e.properties || !Array.isArray(e.properties)) throw new Error("Invalid properties array for your JSON data.");
                                e.properties = e.properties.map((function(t) {
                                    return {
                                        field: "object" === a(t) ? t.field : t,
                                        displayName: "object" === a(t) ? t.displayName : t,
                                        columnSize: "object" === a(t) && t.columnSize ? t.columnSize + ";" : 100 / e.properties.length + "%;"
                                    }
                                })), e.printableElement = document.createElement("div"), e.header && Object(r.addHeader)(e.printableElement, e), e.printableElement.innerHTML += function(e) {
                                    var t = e.printable,
                                        n = e.properties,
                                        o = '<table style="border-collapse: collapse; width: 100%;">';
                                    e.repeatTableHeader && (o += "<thead>"), o += "<tr>";
                                    for (var a = 0; a < n.length; a++) o += '<th style="width:' + n[a].columnSize + ";" + e.gridHeaderStyle + '">' + Object(r.capitalizePrint)(n[a].displayName) + "</th>";
                                    o += "</tr>", e.repeatTableHeader && (o += "</thead>"), o += "<tbody>";
                                    for (var i = 0; i < t.length; i++) {
                                        o += "<tr>";
                                        for (var s = 0; s < n.length; s++) {
                                            var c = t[i],
                                                l = n[s].field.split(".");
                                            if (l.length > 1)
                                                for (var u = 0; u < l.length; u++) c = c[l[u]];
                                            else c = c[n[s].field];
                                            o += '<td style="width:' + n[s].columnSize + e.gridStyle + '">' + c + "</td>"
                                        }
                                        o += "</tr>"
                                    }
                                    return o += "</tbody></table>"
                                }(e), o.default.send(e, t)
                            }
                        }
                    },
                    "./src/js/modal.js": function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = {
                            show: function(e) {
                                var t = document.createElement("div");
                                t.setAttribute("style", "font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;"), t.setAttribute("id", "printJS-Modal");
                                var n = document.createElement("div");
                                n.setAttribute("style", "display:table-cell; vertical-align:middle; padding-bottom:100px;");
                                var o = document.createElement("div");
                                o.setAttribute("class", "printClose"), o.setAttribute("id", "printClose"), n.appendChild(o);
                                var a = document.createElement("span");
                                a.setAttribute("class", "printSpinner"), n.appendChild(a);
                                var i = document.createTextNode(e.modalMessage);
                                n.appendChild(i), t.appendChild(n), document.getElementsByTagName("body")[0].appendChild(t), document.getElementById("printClose").addEventListener("click", (function() {
                                    r.close()
                                }))
                            },
                            close: function() {
                                var e = document.getElementById("printJS-Modal");
                                e && e.parentNode.removeChild(e)
                            }
                        };
                        t.default = r
                    },
                    "./src/js/pdf.js": function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n("./src/js/print.js"),
                            o = n("./src/js/functions.js");

                        function a(e, t, n) {
                            var o = new window.Blob([n], {
                                type: "application/pdf"
                            });
                            o = window.URL.createObjectURL(o), t.setAttribute("src", o), r.default.send(e, t)
                        }
                        t.default = {
                            print: function(e, t) {
                                if (e.base64) {
                                    var n = Uint8Array.from(atob(e.printable), (function(e) {
                                        return e.charCodeAt(0)
                                    }));
                                    a(e, t, n)
                                } else {
                                    e.printable = /^(blob|http|\/\/)/i.test(e.printable) ? e.printable : window.location.origin + ("/" !== e.printable.charAt(0) ? "/" + e.printable : e.printable);
                                    var r = new window.XMLHttpRequest;
                                    r.responseType = "arraybuffer", r.addEventListener("error", (function() {
                                        Object(o.cleanUp)(e), e.onError(r.statusText, r)
                                    })), r.addEventListener("load", (function() {
                                        if (-1 === [200, 201].indexOf(r.status)) return Object(o.cleanUp)(e), void e.onError(r.statusText, r);
                                        a(e, t, r.response)
                                    })), r.open("GET", e.printable, !0), r.send()
                                }
                            }
                        }
                    },
                    "./src/js/print.js": function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n("./src/js/browser.js"),
                            o = n("./src/js/functions.js"),
                            a = {
                                send: function(e, t) {
                                    document.getElementsByTagName("body")[0].appendChild(t);
                                    var n = document.getElementById(e.frameId);
                                    n.onload = function() {
                                        if ("pdf" !== e.type) {
                                            var t = n.contentWindow || n.contentDocument;
                                            if (t.document && (t = t.document), t.body.appendChild(e.printableElement), "pdf" !== e.type && e.style) {
                                                var o = document.createElement("style");
                                                o.innerHTML = e.style, t.head.appendChild(o)
                                            }
                                            var a = t.getElementsByTagName("img");
                                            a.length > 0 ? function(e) {
                                                var t = e.map((function(e) {
                                                    if (e.src && e.src !== window.location.href) return function(e) {
                                                        return new Promise((function(t) {
                                                            ! function n() {
                                                                e && "undefined" !== typeof e.naturalWidth && 0 !== e.naturalWidth && e.complete ? t() : setTimeout(n, 500)
                                                            }()
                                                        }))
                                                    }(e)
                                                }));
                                                return Promise.all(t)
                                            }(Array.from(a)).then((function() {
                                                return i(n, e)
                                            })) : i(n, e)
                                        } else r.default.isFirefox() ? setTimeout((function() {
                                            return i(n, e)
                                        }), 1e3) : i(n, e)
                                    }
                                }
                            };

                        function i(e, t) {
                            try {
                                if (e.focus(), r.default.isEdge() || r.default.isIE()) try {
                                    e.contentWindow.document.execCommand("print", !1, null)
                                } catch (t) {
                                    e.contentWindow.print()
                                } else e.contentWindow.print()
                            } catch (e) {
                                t.onError(e)
                            } finally {
                                r.default.isFirefox() && (e.style.visibility = "hidden", e.style.left = "-1px"), Object(o.cleanUp)(t)
                            }
                        }
                        t.default = a
                    },
                    "./src/js/raw-html.js": function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n("./src/js/print.js");
                        t.default = {
                            print: function(e, t) {
                                e.printableElement = document.createElement("div"), e.printableElement.setAttribute("style", "width:100%"), e.printableElement.innerHTML = e.printable, r.default.send(e, t)
                            }
                        }
                    },
                    "./src/sass/index.scss": function(e, t, n) {},
                    0: function(e, t, n) {
                        e.exports = n("./src/index.js")
                    }
                }).default
            }, e.exports = t()
        },
        415253: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => R
            });
            var r = n(487462),
                o = n(145987),
                a = n(671002),
                i = n(215671),
                s = n(143144),
                c = n(497326),
                l = n(360136),
                u = n(182963),
                d = n(661120),
                p = n(204942),
                f = n(184481),
                g = n.n(f),
                m = n(45697),
                y = n.n(m),
                h = n(684845),
                b = n(8094),
                v = n(289624),
                w = n(702177),
                E = n(645298),
                j = n(178783),
                S = n(192670),
                P = n(218383),
                x = n(525605),
                k = n(246617),
                Z = n(727453),
                L = n(153317),
                T = ["url"];

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function A(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, d.Z)(e);
                    if (t) {
                        var o = (0, d.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, u.Z)(this, n)
                }
            }
            var I = j.PDFDataRangeTransport,
                R = function(e) {
                    (0, l.Z)(n, e);
                    var t = A(n);

                    function n() {
                        var e;
                        (0, i.Z)(this, n);
                        for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++) s[l] = arguments[l];
                        return e = t.call.apply(t, [this].concat(s)), (0, p.Z)((0, c.Z)(e), "state", {
                            pdf: null
                        }), (0, p.Z)((0, c.Z)(e), "viewer", {
                            scrollPageIntoView: function(t) {
                                var n = t.dest,
                                    r = t.pageIndex,
                                    o = t.pageNumber,
                                    a = e.props.onItemClick;
                                if (a) a({
                                    dest: n,
                                    pageIndex: r,
                                    pageNumber: o
                                });
                                else {
                                    var i = e.pages[r];
                                    i ? i.scrollIntoView() : (0, E.Z)(!1, "An internal link leading to page ".concat(o, " was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>."))
                                }
                            }
                        }), (0, p.Z)((0, c.Z)(e), "linkService", new x.Z), (0, p.Z)((0, c.Z)(e), "loadDocument", (function() {
                            (0, Z.LJ)(e.runningTask), e.loadingTask && e.loadingTask.destroy();
                            var t = (0, b.Z)(e.findDocumentSource());
                            e.runningTask = t, t.promise.then((function(t) {
                                if (e.onSourceSuccess(), t) {
                                    e.setState((function(e) {
                                        return e.pdf ? {
                                            pdf: null
                                        } : null
                                    }));
                                    var n = e.props,
                                        r = n.options,
                                        o = n.onLoadProgress,
                                        a = n.onPassword;
                                    e.loadingTask = j.getDocument(C(C({}, t), r)), e.loadingTask.onPassword = a, o && (e.loadingTask.onProgress = o);
                                    var i = (0, b.Z)(e.loadingTask.promise);
                                    e.runningTask = i, i.promise.then((function(t) {
                                        e.setState((function(e) {
                                            return e.pdf && e.pdf.fingerprint === t.fingerprint ? null : {
                                                pdf: t
                                            }
                                        }), e.onLoadSuccess)
                                    })).catch((function(t) {
                                        e.onLoadError(t)
                                    }))
                                }
                            })).catch((function(t) {
                                e.onSourceError(t)
                            }))
                        })), (0, p.Z)((0, c.Z)(e), "setupLinkService", (function() {
                            var t = e.props,
                                n = t.externalLinkRel,
                                r = t.externalLinkTarget;
                            e.linkService.setViewer(e.viewer), e.linkService.setExternalLinkRel(n), e.linkService.setExternalLinkTarget(r)
                        })), (0, p.Z)((0, c.Z)(e), "onSourceSuccess", (function() {
                            var t = e.props.onSourceSuccess;
                            t && t()
                        })), (0, p.Z)((0, c.Z)(e), "onSourceError", (function(t) {
                            (0, E.Z)(t);
                            var n = e.props.onSourceError;
                            n && n(t)
                        })), (0, p.Z)((0, c.Z)(e), "onLoadSuccess", (function() {
                            var t = e.props.onLoadSuccess,
                                n = e.state.pdf;
                            t && t(n), e.pages = new Array(n.numPages), e.linkService.setDocument(n)
                        })), (0, p.Z)((0, c.Z)(e), "onLoadError", (function(t) {
                            e.setState({
                                pdf: !1
                            }), (0, E.Z)(t);
                            var n = e.props.onLoadError;
                            n && n(t)
                        })), (0, p.Z)((0, c.Z)(e), "findDocumentSource", (function() {
                            return new Promise((function(t) {
                                var n = e.props.file;
                                if (n || t(null), "string" === typeof n) {
                                    if ((0, Z.gJ)(n)) {
                                        var r = (0, Z.us)(n);
                                        t({
                                            data: r
                                        })
                                    }(0, Z.tN)(), t({
                                        url: n
                                    })
                                }
                                if (n instanceof I && t({
                                        range: n
                                    }), (0, Z.eP)(n) && t({
                                        data: n
                                    }), Z.jU && ((0, Z.Lj)(n) || (0, Z.zE)(n)))(0, Z.eR)(n).then((function(e) {
                                    t({
                                        data: e
                                    })
                                }));
                                else {
                                    if ((0, w.Z)("object" === (0, a.Z)(n), "Invalid parameter in file, need either Uint8Array, string or a parameter object"), (0, w.Z)(n.url || n.data || n.range, "Invalid parameter object: need either .data, .range or .url"), "string" === typeof n.url) {
                                        if ((0, Z.gJ)(n.url)) {
                                            var i = n.url,
                                                s = (0, o.Z)(n, T),
                                                c = (0, Z.us)(i);
                                            t(C({
                                                data: c
                                            }, s))
                                        }(0, Z.tN)()
                                    }
                                    t(n)
                                }
                            }))
                        })), (0, p.Z)((0, c.Z)(e), "registerPage", (function(t, n) {
                            e.pages[t] = n
                        })), (0, p.Z)((0, c.Z)(e), "unregisterPage", (function(t) {
                            delete e.pages[t]
                        })), e
                    }
                    return (0, s.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.loadDocument(), this.setupLinkService()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            this.props.file !== e.file && this.loadDocument()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            (0, Z.LJ)(this.runningTask), this.loadingTask && this.loadingTask.destroy()
                        }
                    }, {
                        key: "childContext",
                        get: function() {
                            var e = this.linkService,
                                t = this.registerPage,
                                n = this.unregisterPage,
                                r = this.props,
                                o = r.imageResourcesPath,
                                a = r.renderMode,
                                i = r.rotate;
                            return {
                                imageResourcesPath: o,
                                linkService: e,
                                pdf: this.state.pdf,
                                registerPage: t,
                                renderMode: a,
                                rotate: i,
                                unregisterPage: n
                            }
                        }
                    }, {
                        key: "eventProps",
                        get: function() {
                            var e = this;
                            return (0, h.ZP)(this.props, (function() {
                                return e.state.pdf
                            }))
                        }
                    }, {
                        key: "renderChildren",
                        value: function() {
                            var e = this.props.children;
                            return g().createElement(S.Z.Provider, {
                                value: this.childContext
                            }, e)
                        }
                    }, {
                        key: "renderContent",
                        value: function() {
                            var e = this.props.file,
                                t = this.state.pdf;
                            if (!e) {
                                var n = this.props.noData;
                                return g().createElement(P.Z, {
                                    type: "no-data"
                                }, "function" === typeof n ? n() : n)
                            }
                            if (null === t) {
                                var r = this.props.loading;
                                return g().createElement(P.Z, {
                                    type: "loading"
                                }, "function" === typeof r ? r() : r)
                            }
                            if (!1 === t) {
                                var o = this.props.error;
                                return g().createElement(P.Z, {
                                    type: "error"
                                }, "function" === typeof o ? o() : o)
                            }
                            return this.renderChildren()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.className,
                                n = e.inputRef;
                            return g().createElement("div", (0, r.Z)({
                                className: (0, v.Z)("react-pdf__Document", t),
                                ref: n
                            }, this.eventProps), this.renderContent())
                        }
                    }]), n
                }(f.PureComponent);
            R.defaultProps = {
                error: "Failed to load PDF file.",
                loading: "Loading PDF\u2026",
                noData: "No PDF file specified.",
                onPassword: function(e, t) {
                    switch (t) {
                        case k.Z.NEED_PASSWORD:
                            e(prompt("Enter the password to open this PDF file."));
                            break;
                        case k.Z.INCORRECT_PASSWORD:
                            e(prompt("Invalid password. Please try again."))
                    }
                }
            };
            var N = y().oneOfType([y().func, y().node]);
            R.propTypes = C(C({}, L.Gg), {}, {
                children: y().node,
                className: L.$n,
                error: N,
                externalLinkRel: y().string,
                externalLinkTarget: y().string,
                file: L.zE,
                imageResourcesPath: y().string,
                inputRef: L.dq,
                loading: N,
                noData: N,
                onItemClick: y().func,
                onLoadError: y().func,
                onLoadProgress: y().func,
                onLoadSuccess: y().func,
                onPassword: y().func,
                onSourceError: y().func,
                onSourceSuccess: y().func,
                rotate: y().number
            })
        },
        466115: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => D
            });
            var r = n(487462),
                o = n(215671),
                a = n(143144),
                i = n(497326),
                s = n(360136),
                c = n(182963),
                l = n(661120),
                u = n(204942),
                d = n(184481),
                p = n.n(d),
                f = n(45697),
                g = n.n(f),
                m = n(8094),
                y = n(684845),
                h = n(289624),
                b = n(512324),
                v = n(702177),
                w = n(645298),
                E = n(192670),
                j = n(720670),
                S = n(218383),
                P = n(692026),
                x = n(546436),
                k = n(406165),
                Z = n(457347),
                L = n(727453),
                T = n(153317);

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, u.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function A(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, l.Z)(e);
                    if (t) {
                        var o = (0, l.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, c.Z)(this, n)
                }
            }
            var I = function(e) {
                (0, s.Z)(n, e);
                var t = A(n);

                function n() {
                    var e;
                    (0, o.Z)(this, n);
                    for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(a)), (0, u.Z)((0, i.Z)(e), "state", {
                        page: null
                    }), (0, u.Z)((0, i.Z)(e), "pageElement", (0, d.createRef)()), (0, u.Z)((0, i.Z)(e), "onLoadSuccess", (function() {
                        var t = e.props,
                            n = t.onLoadSuccess,
                            r = t.registerPage,
                            o = e.state.page;
                        n && n((0, L.XZ)(o, e.scale)), r && r(e.pageIndex, e.pageElement.current)
                    })), (0, u.Z)((0, i.Z)(e), "onLoadError", (function(t) {
                        e.setState({
                            page: !1
                        }), (0, w.Z)(t);
                        var n = e.props.onLoadError;
                        n && n(t)
                    })), (0, u.Z)((0, i.Z)(e), "loadPage", (function() {
                        var t = e.props.pdf,
                            n = e.getPageNumber();
                        if (n) {
                            e.setState((function(e) {
                                return e.page ? {
                                    page: null
                                } : null
                            }));
                            var r = (0, m.Z)(t.getPage(n));
                            e.runningTask = r, r.promise.then((function(t) {
                                e.setState({
                                    page: t
                                }, e.onLoadSuccess)
                            })).catch((function(t) {
                                e.onLoadError(t)
                            }))
                        }
                    })), e
                }
                return (0, a.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props.pdf;
                        (0, v.Z)(e, "Attempted to load a page, but no document was specified."), this.loadPage()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.props.pdf;
                        if (e.pdf && t !== e.pdf || this.getPageNumber() !== this.getPageNumber(e)) {
                            var n = this.props.unregisterPage;
                            n && n(this.getPageIndex(e)), this.loadPage()
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this.props.unregisterPage;
                        e && e(this.pageIndex), (0, L.LJ)(this.runningTask)
                    }
                }, {
                    key: "childContext",
                    get: function() {
                        var e = this.state.page;
                        if (!e) return {};
                        var t = this.props,
                            n = t.canvasBackground,
                            r = t.customTextRenderer,
                            o = t.onGetAnnotationsError,
                            a = t.onGetAnnotationsSuccess,
                            i = t.onGetTextError,
                            s = t.onGetTextSuccess,
                            c = t.onRenderAnnotationLayerError,
                            l = t.onRenderAnnotationLayerSuccess,
                            u = t.onRenderError,
                            d = t.onRenderSuccess,
                            p = t.renderForms,
                            f = t.renderInteractiveForms;
                        return {
                            canvasBackground: n,
                            customTextRenderer: r,
                            onGetAnnotationsError: o,
                            onGetAnnotationsSuccess: a,
                            onGetTextError: i,
                            onGetTextSuccess: s,
                            onRenderAnnotationLayerError: c,
                            onRenderAnnotationLayerSuccess: l,
                            onRenderError: u,
                            onRenderSuccess: d,
                            page: e,
                            renderForms: null !== p && void 0 !== p ? p : f,
                            rotate: this.rotate,
                            scale: this.scale
                        }
                    }
                }, {
                    key: "getPageIndex",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                        return (0, L.T8)(e.pageNumber) ? e.pageNumber - 1 : (0, L.T8)(e.pageIndex) ? e.pageIndex : null
                    }
                }, {
                    key: "getPageNumber",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                        return (0, L.T8)(e.pageNumber) ? e.pageNumber : (0, L.T8)(e.pageIndex) ? e.pageIndex + 1 : null
                    }
                }, {
                    key: "pageIndex",
                    get: function() {
                        return this.getPageIndex()
                    }
                }, {
                    key: "pageNumber",
                    get: function() {
                        return this.getPageNumber()
                    }
                }, {
                    key: "rotate",
                    get: function() {
                        var e = this.props.rotate;
                        if ((0, L.T8)(e)) return e;
                        var t = this.state.page;
                        return t ? t.rotate : null
                    }
                }, {
                    key: "scale",
                    get: function() {
                        var e = this.state.page;
                        if (!e) return null;
                        var t = this.props,
                            n = t.scale,
                            r = t.width,
                            o = t.height,
                            a = this.rotate,
                            i = 1,
                            s = null === n ? 1 : n;
                        if (r || o) {
                            var c = e.getViewport({
                                scale: 1,
                                rotation: a
                            });
                            i = r ? r / c.width : o / c.height
                        }
                        return s * i
                    }
                }, {
                    key: "eventProps",
                    get: function() {
                        var e = this;
                        return (0, y.ZP)(this.props, (function() {
                            var t = e.state.page;
                            return t ? (0, L.XZ)(t, e.scale) : t
                        }))
                    }
                }, {
                    key: "pageKey",
                    get: function() {
                        var e = this.state.page;
                        return "".concat(e.pageIndex, "@").concat(this.scale, "/").concat(this.rotate)
                    }
                }, {
                    key: "pageKeyNoScale",
                    get: function() {
                        var e = this.state.page;
                        return "".concat(e.pageIndex, "/").concat(this.rotate)
                    }
                }, {
                    key: "renderMainLayer",
                    value: function() {
                        var e = this.props,
                            t = e.canvasRef;
                        switch (e.renderMode) {
                            case "none":
                                return null;
                            case "svg":
                                return p().createElement(x.Z, {
                                    key: "".concat(this.pageKeyNoScale, "_svg")
                                });
                            default:
                                return p().createElement(P.Z, {
                                    key: "".concat(this.pageKey, "_canvas"),
                                    canvasRef: t
                                })
                        }
                    }
                }, {
                    key: "renderTextLayer",
                    value: function() {
                        var e = this.props.renderTextLayer;
                        return e ? p().createElement(k.Z, {
                            key: "".concat(this.pageKey, "_text")
                        }) : null
                    }
                }, {
                    key: "renderAnnotationLayer",
                    value: function() {
                        var e = this.props.renderAnnotationLayer;
                        return e ? p().createElement(Z.Z, {
                            key: "".concat(this.pageKey, "_annotations")
                        }) : null
                    }
                }, {
                    key: "renderChildren",
                    value: function() {
                        var e = this.props.children;
                        return p().createElement(j.Z.Provider, {
                            value: this.childContext
                        }, this.renderMainLayer(), this.renderTextLayer(), this.renderAnnotationLayer(), e)
                    }
                }, {
                    key: "renderContent",
                    value: function() {
                        var e = this.pageNumber,
                            t = this.props.pdf,
                            n = this.state.page;
                        if (!e) {
                            var r = this.props.noData;
                            return p().createElement(S.Z, {
                                type: "no-data"
                            }, "function" === typeof r ? r() : r)
                        }
                        if (null === t || null === n) {
                            var o = this.props.loading;
                            return p().createElement(S.Z, {
                                type: "loading"
                            }, "function" === typeof o ? o() : o)
                        }
                        if (!1 === t || !1 === n) {
                            var a = this.props.error;
                            return p().createElement(S.Z, {
                                type: "error"
                            }, "function" === typeof a ? a() : a)
                        }
                        return this.renderChildren()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.pageNumber,
                            t = this.props,
                            n = t.className,
                            o = t.inputRef;
                        return p().createElement("div", (0, r.Z)({
                            className: (0, h.Z)("react-pdf__Page", n),
                            "data-page-number": e,
                            ref: (0, b.Z)(o, this.pageElement),
                            style: {
                                position: "relative"
                            }
                        }, this.eventProps), this.renderContent())
                    }
                }]), n
            }(d.PureComponent);
            I.defaultProps = {
                error: "Failed to load the page.",
                loading: "Loading page\u2026",
                noData: "No page specified.",
                renderAnnotationLayer: !0,
                renderForms: !1,
                renderMode: "canvas",
                renderTextLayer: !0,
                scale: 1
            };
            var R = g().oneOfType([g().func, g().node]);

            function N(e, t) {
                return p().createElement(E.Z.Consumer, null, (function(n) {
                    return p().createElement(I, (0, r.Z)({
                        ref: t
                    }, n, e))
                }))
            }
            I.propTypes = C(C({}, T.Gg), {}, {
                canvasBackground: g().string,
                children: g().node,
                className: T.$n,
                customTextRenderer: g().func,
                error: R,
                height: g().number,
                imageResourcesPath: g().string,
                inputRef: T.dq,
                loading: R,
                noData: R,
                onGetTextError: g().func,
                onGetTextSuccess: g().func,
                onLoadError: g().func,
                onLoadSuccess: g().func,
                onRenderError: g().func,
                onRenderSuccess: g().func,
                pageIndex: T.qd,
                pageNumber: T.F$,
                pdf: T.Ze,
                registerPage: g().func,
                renderAnnotationLayer: g().bool,
                renderForms: g().bool,
                renderInteractiveForms: g().bool,
                renderMode: T.DV,
                renderTextLayer: g().bool,
                rotate: T.lA,
                scale: g().number,
                unregisterPage: g().func,
                width: g().number
            });
            const D = p().forwardRef(N)
        }
    }
]);
//# sourceMappingURL=97145-47cf3a3177a3209b5526.js.map