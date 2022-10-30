"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [41389], {
        658363: (e, n) => {
            n.Z = function(e, n) {
                if (e && n) {
                    var t = Array.isArray(n) ? n : n.split(","),
                        r = e.name || "",
                        o = (e.type || "").toLowerCase(),
                        i = o.replace(/\/.*$/, "");
                    return t.some((function(e) {
                        var n = e.trim().toLowerCase();
                        return "." === n.charAt(0) ? r.toLowerCase().endsWith(n) : n.endsWith("/*") ? i === n.replace(/\/.*$/, "") : o === n
                    }))
                }
                return !0
            }
        },
        941389: (e, n, t) => {
            t.d(n, {
                ZP: () => we
            });
            var r = t(184481),
                o = t.n(r),
                i = t(45697),
                a = t.n(i);

            function c(e, n, t, r) {
                return new(t || (t = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var n;
                        e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                            e(n)
                        }))).then(a, c)
                    }
                    u((r = r.apply(e, n || [])).next())
                }))
            }

            function u(e, n) {
                var t, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = n.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            }
            Object.create;

            function l(e, n) {
                var t = "function" === typeof Symbol && e[Symbol.iterator];
                if (!t) return e;
                var r, o, i = t.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === n || n-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (t = i.return) && t.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function s(e, n, t) {
                if (t || 2 === arguments.length)
                    for (var r, o = 0, i = n.length; o < i; o++) !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]);
                return e.concat(r || Array.prototype.slice.call(n))
            }
            Object.create;
            var f = new Map([
                ["aac", "audio/aac"],
                ["abw", "application/x-abiword"],
                ["arc", "application/x-freearc"],
                ["avif", "image/avif"],
                ["avi", "video/x-msvideo"],
                ["azw", "application/vnd.amazon.ebook"],
                ["bin", "application/octet-stream"],
                ["bmp", "image/bmp"],
                ["bz", "application/x-bzip"],
                ["bz2", "application/x-bzip2"],
                ["cda", "application/x-cdf"],
                ["csh", "application/x-csh"],
                ["css", "text/css"],
                ["csv", "text/csv"],
                ["doc", "application/msword"],
                ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
                ["eot", "application/vnd.ms-fontobject"],
                ["epub", "application/epub+zip"],
                ["gz", "application/gzip"],
                ["gif", "image/gif"],
                ["heic", "image/heic"],
                ["heif", "image/heif"],
                ["htm", "text/html"],
                ["html", "text/html"],
                ["ico", "image/vnd.microsoft.icon"],
                ["ics", "text/calendar"],
                ["jar", "application/java-archive"],
                ["jpeg", "image/jpeg"],
                ["jpg", "image/jpeg"],
                ["js", "text/javascript"],
                ["json", "application/json"],
                ["jsonld", "application/ld+json"],
                ["mid", "audio/midi"],
                ["midi", "audio/midi"],
                ["mjs", "text/javascript"],
                ["mp3", "audio/mpeg"],
                ["mp4", "video/mp4"],
                ["mpeg", "video/mpeg"],
                ["mpkg", "application/vnd.apple.installer+xml"],
                ["odp", "application/vnd.oasis.opendocument.presentation"],
                ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
                ["odt", "application/vnd.oasis.opendocument.text"],
                ["oga", "audio/ogg"],
                ["ogv", "video/ogg"],
                ["ogx", "application/ogg"],
                ["opus", "audio/opus"],
                ["otf", "font/otf"],
                ["png", "image/png"],
                ["pdf", "application/pdf"],
                ["php", "application/x-httpd-php"],
                ["ppt", "application/vnd.ms-powerpoint"],
                ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
                ["rar", "application/vnd.rar"],
                ["rtf", "application/rtf"],
                ["sh", "application/x-sh"],
                ["svg", "image/svg+xml"],
                ["swf", "application/x-shockwave-flash"],
                ["tar", "application/x-tar"],
                ["tif", "image/tiff"],
                ["tiff", "image/tiff"],
                ["ts", "video/mp2t"],
                ["ttf", "font/ttf"],
                ["txt", "text/plain"],
                ["vsd", "application/vnd.visio"],
                ["wav", "audio/wav"],
                ["weba", "audio/webm"],
                ["webm", "video/webm"],
                ["webp", "image/webp"],
                ["woff", "font/woff"],
                ["woff2", "font/woff2"],
                ["xhtml", "application/xhtml+xml"],
                ["xls", "application/vnd.ms-excel"],
                ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
                ["xml", "application/xml"],
                ["xul", "application/vnd.mozilla.xul+xml"],
                ["zip", "application/zip"],
                ["7z", "application/x-7z-compressed"],
                ["mkv", "video/x-matroska"],
                ["mov", "video/quicktime"],
                ["msg", "application/vnd.ms-outlook"]
            ]);

            function p(e, n) {
                var t = function(e) {
                    var n = e.name;
                    if (n && -1 !== n.lastIndexOf(".") && !e.type) {
                        var t = n.split(".").pop().toLowerCase(),
                            r = f.get(t);
                        r && Object.defineProperty(e, "type", {
                            value: r,
                            writable: !1,
                            configurable: !1,
                            enumerable: !0
                        })
                    }
                    return e
                }(e);
                if ("string" !== typeof t.path) {
                    var r = e.webkitRelativePath;
                    Object.defineProperty(t, "path", {
                        value: "string" === typeof n ? n : "string" === typeof r && r.length > 0 ? r : e.name,
                        writable: !1,
                        configurable: !1,
                        enumerable: !0
                    })
                }
                return t
            }
            var d = [".DS_Store", "Thumbs.db"];

            function v(e) {
                return "object" === typeof e && null !== e
            }

            function m(e) {
                return h(e.target.files).map((function(e) {
                    return p(e)
                }))
            }

            function g(e) {
                return c(this, void 0, void 0, (function() {
                    return u(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Promise.all(e.map((function(e) {
                                    return e.getFile()
                                })))];
                            case 1:
                                return [2, n.sent().map((function(e) {
                                    return p(e)
                                }))]
                        }
                    }))
                }))
            }

            function y(e, n) {
                return c(this, void 0, void 0, (function() {
                    var t;
                    return u(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return e.items ? (t = h(e.items).filter((function(e) {
                                    return "file" === e.kind
                                })), "drop" !== n ? [2, t] : [4, Promise.all(t.map(w))]) : [3, 2];
                            case 1:
                                return [2, b(D(r.sent()))];
                            case 2:
                                return [2, b(h(e.files).map((function(e) {
                                    return p(e)
                                })))]
                        }
                    }))
                }))
            }

            function b(e) {
                return e.filter((function(e) {
                    return -1 === d.indexOf(e.name)
                }))
            }

            function h(e) {
                if (null === e) return [];
                for (var n = [], t = 0; t < e.length; t++) {
                    var r = e[t];
                    n.push(r)
                }
                return n
            }

            function w(e) {
                if ("function" !== typeof e.webkitGetAsEntry) return x(e);
                var n = e.webkitGetAsEntry();
                return n && n.isDirectory ? j(n) : x(e)
            }

            function D(e) {
                return e.reduce((function(e, n) {
                    return s(s([], l(e), !1), l(Array.isArray(n) ? D(n) : [n]), !1)
                }), [])
            }

            function x(e) {
                var n = e.getAsFile();
                if (!n) return Promise.reject("".concat(e, " is not a File"));
                var t = p(n);
                return Promise.resolve(t)
            }

            function O(e) {
                return c(this, void 0, void 0, (function() {
                    return u(this, (function(n) {
                        return [2, e.isDirectory ? j(e) : A(e)]
                    }))
                }))
            }

            function j(e) {
                var n = e.createReader();
                return new Promise((function(e, t) {
                    var r = [];
                    ! function o() {
                        var i = this;
                        n.readEntries((function(n) {
                            return c(i, void 0, void 0, (function() {
                                var i, a, c;
                                return u(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            if (n.length) return [3, 5];
                                            u.label = 1;
                                        case 1:
                                            return u.trys.push([1, 3, , 4]), [4, Promise.all(r)];
                                        case 2:
                                            return i = u.sent(), e(i), [3, 4];
                                        case 3:
                                            return a = u.sent(), t(a), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            c = Promise.all(n.map(O)), r.push(c), o(), u.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }))
                        }), (function(e) {
                            t(e)
                        }))
                    }()
                }))
            }

            function A(e) {
                return c(this, void 0, void 0, (function() {
                    return u(this, (function(n) {
                        return [2, new Promise((function(n, t) {
                            e.file((function(t) {
                                var r = p(t, e.fullPath);
                                n(r)
                            }), (function(e) {
                                t(e)
                            }))
                        }))]
                    }))
                }))
            }
            var F = t(658363);

            function k(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || z(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function P(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? E(Object(t), !0).forEach((function(n) {
                        S(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function S(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function C(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == t) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try {
                        for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                    } catch (e) {
                        c = !0, o = e
                    } finally {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                    return i
                }(e, n) || z(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, n) {
                if (e) {
                    if ("string" === typeof e) return R(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? R(e, n) : void 0
                }
            }

            function R(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            var I = "file-invalid-type",
                T = "file-too-large",
                M = "file-too-small",
                L = "too-many-files",
                B = function(e) {
                    e = Array.isArray(e) && 1 === e.length ? e[0] : e;
                    var n = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
                    return {
                        code: I,
                        message: "File type must be ".concat(n)
                    }
                },
                K = function(e) {
                    return {
                        code: T,
                        message: "File is larger than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                _ = function(e) {
                    return {
                        code: M,
                        message: "File is smaller than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                U = {
                    code: L,
                    message: "Too many files"
                };

            function $(e, n) {
                var t = "application/x-moz-file" === e.type || (0, F.Z)(e, n);
                return [t, t ? null : B(n)]
            }

            function W(e, n, t) {
                if (G(e.size))
                    if (G(n) && G(t)) {
                        if (e.size > t) return [!1, K(t)];
                        if (e.size < n) return [!1, _(n)]
                    } else {
                        if (G(n) && e.size < n) return [!1, _(n)];
                        if (G(t) && e.size > t) return [!1, K(t)]
                    }
                return [!0, null]
            }

            function G(e) {
                return void 0 !== e && null !== e
            }

            function H(e) {
                var n = e.files,
                    t = e.accept,
                    r = e.minSize,
                    o = e.maxSize,
                    i = e.multiple,
                    a = e.maxFiles,
                    c = e.validator;
                return !(!i && n.length > 1 || i && a >= 1 && n.length > a) && n.every((function(e) {
                    var n = C($(e, t), 1)[0],
                        i = C(W(e, r, o), 1)[0],
                        a = c ? c(e) : null;
                    return n && i && !a
                }))
            }

            function Z(e) {
                return "function" === typeof e.isPropagationStopped ? e.isPropagationStopped() : "undefined" !== typeof e.cancelBubble && e.cancelBubble
            }

            function q(e) {
                return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, (function(e) {
                    return "Files" === e || "application/x-moz-file" === e
                })) : !!e.target && !!e.target.files
            }

            function N(e) {
                e.preventDefault()
            }

            function Y(e) {
                return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/")
            }

            function J(e) {
                return -1 !== e.indexOf("Edge/")
            }

            function Q() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                return Y(e) || J(e)
            }

            function V() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return function(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                    return n.some((function(n) {
                        return !Z(e) && n && n.apply(void 0, [e].concat(r)), Z(e)
                    }))
                }
            }

            function X() {
                return "showOpenFilePicker" in window
            }

            function ee(e) {
                return G(e) ? [{
                    description: "Files",
                    accept: Object.entries(e).filter((function(e) {
                        var n = C(e, 2),
                            t = n[0],
                            r = n[1],
                            o = !0;
                        return oe(t) || (console.warn('Skipped "'.concat(t, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), o = !1), Array.isArray(r) && r.every(ie) || (console.warn('Skipped "'.concat(t, '" because an invalid file extension was provided.')), o = !1), o
                    })).reduce((function(e, n) {
                        var t = C(n, 2),
                            r = t[0],
                            o = t[1];
                        return P(P({}, e), {}, S({}, r, o))
                    }), {})
                }] : e
            }

            function ne(e) {
                if (G(e)) return Object.entries(e).reduce((function(e, n) {
                    var t = C(n, 2),
                        r = t[0],
                        o = t[1];
                    return [].concat(k(e), [r], k(o))
                }), []).filter((function(e) {
                    return oe(e) || ie(e)
                })).join(",")
            }

            function te(e) {
                return e instanceof DOMException && ("AbortError" === e.name || e.code === e.ABORT_ERR)
            }

            function re(e) {
                return e instanceof DOMException && ("SecurityError" === e.name || e.code === e.SECURITY_ERR)
            }

            function oe(e) {
                return "audio/*" === e || "video/*" === e || "image/*" === e || "text/*" === e || /\w+\/[-+.\w]+/g.test(e)
            }

            function ie(e) {
                return /^.*\.[\w]+$/.test(e)
            }
            var ae = ["children"],
                ce = ["open"],
                ue = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
                le = ["refKey", "onChange", "onClick"];

            function se(e) {
                return function(e) {
                    if (Array.isArray(e)) return de(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || pe(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function fe(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == t) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try {
                        for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                    } catch (e) {
                        c = !0, o = e
                    } finally {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                    return i
                }(e, n) || pe(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function pe(e, n) {
                if (e) {
                    if ("string" === typeof e) return de(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? de(e, n) : void 0
                }
            }

            function de(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ve(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function me(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? ve(Object(t), !0).forEach((function(n) {
                        ge(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ve(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function ge(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function ye(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var be = (0, r.forwardRef)((function(e, n) {
                var t = e.children,
                    i = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = me(me({}, he), e),
                            t = n.accept,
                            o = n.disabled,
                            i = n.getFilesFromEvent,
                            a = n.maxSize,
                            c = n.minSize,
                            u = n.multiple,
                            l = n.maxFiles,
                            s = n.onDragEnter,
                            f = n.onDragLeave,
                            p = n.onDragOver,
                            d = n.onDrop,
                            v = n.onDropAccepted,
                            m = n.onDropRejected,
                            g = n.onFileDialogCancel,
                            y = n.onFileDialogOpen,
                            b = n.useFsAccessApi,
                            h = n.autoFocus,
                            w = n.preventDropOnDocument,
                            D = n.noClick,
                            x = n.noKeyboard,
                            O = n.noDrag,
                            j = n.noDragEventsBubbling,
                            A = n.onError,
                            F = n.validator,
                            k = (0, r.useMemo)((function() {
                                return ne(t)
                            }), [t]),
                            E = (0, r.useMemo)((function() {
                                return ee(t)
                            }), [t]),
                            P = (0, r.useMemo)((function() {
                                return "function" === typeof y ? y : Oe
                            }), [y]),
                            S = (0, r.useMemo)((function() {
                                return "function" === typeof g ? g : Oe
                            }), [g]),
                            C = (0, r.useRef)(null),
                            z = (0, r.useRef)(null),
                            R = fe((0, r.useReducer)(xe, De), 2),
                            I = R[0],
                            T = R[1],
                            M = I.isFocused,
                            L = I.isFileDialogActive,
                            B = (0, r.useRef)("undefined" !== typeof window && window.isSecureContext && b && X()),
                            K = function() {
                                !B.current && L && setTimeout((function() {
                                    z.current && (z.current.files.length || (T({
                                        type: "closeDialog"
                                    }), S()))
                                }), 300)
                            };
                        (0, r.useEffect)((function() {
                            return window.addEventListener("focus", K, !1),
                                function() {
                                    window.removeEventListener("focus", K, !1)
                                }
                        }), [z, L, S, B]);
                        var _ = (0, r.useRef)([]),
                            G = function(e) {
                                C.current && C.current.contains(e.target) || (e.preventDefault(), _.current = [])
                            };
                        (0, r.useEffect)((function() {
                            return w && (document.addEventListener("dragover", N, !1), document.addEventListener("drop", G, !1)),
                                function() {
                                    w && (document.removeEventListener("dragover", N), document.removeEventListener("drop", G))
                                }
                        }), [C, w]), (0, r.useEffect)((function() {
                            return !o && h && C.current && C.current.focus(),
                                function() {}
                        }), [C, h, o]);
                        var Y = (0, r.useCallback)((function(e) {
                                A ? A(e) : console.error(e)
                            }), [A]),
                            J = (0, r.useCallback)((function(e) {
                                e.preventDefault(), e.persist(), ke(e), _.current = [].concat(se(_.current), [e.target]), q(e) && Promise.resolve(i(e)).then((function(n) {
                                    if (!Z(e) || j) {
                                        var t = n.length,
                                            r = t > 0 && H({
                                                files: n,
                                                accept: k,
                                                minSize: c,
                                                maxSize: a,
                                                multiple: u,
                                                maxFiles: l,
                                                validator: F
                                            });
                                        T({
                                            isDragAccept: r,
                                            isDragReject: t > 0 && !r,
                                            isDragActive: !0,
                                            type: "setDraggedFiles"
                                        }), s && s(e)
                                    }
                                })).catch((function(e) {
                                    return Y(e)
                                }))
                            }), [i, s, Y, j, k, c, a, u, l, F]),
                            oe = (0, r.useCallback)((function(e) {
                                e.preventDefault(), e.persist(), ke(e);
                                var n = q(e);
                                if (n && e.dataTransfer) try {
                                    e.dataTransfer.dropEffect = "copy"
                                } catch (e) {}
                                return n && p && p(e), !1
                            }), [p, j]),
                            ie = (0, r.useCallback)((function(e) {
                                e.preventDefault(), e.persist(), ke(e);
                                var n = _.current.filter((function(e) {
                                        return C.current && C.current.contains(e)
                                    })),
                                    t = n.indexOf(e.target); - 1 !== t && n.splice(t, 1), _.current = n, n.length > 0 || (T({
                                    type: "setDraggedFiles",
                                    isDragActive: !1,
                                    isDragAccept: !1,
                                    isDragReject: !1
                                }), q(e) && f && f(e))
                            }), [C, f, j]),
                            ae = (0, r.useCallback)((function(e, n) {
                                var t = [],
                                    r = [];
                                e.forEach((function(e) {
                                    var n = fe($(e, k), 2),
                                        o = n[0],
                                        i = n[1],
                                        u = fe(W(e, c, a), 2),
                                        l = u[0],
                                        s = u[1],
                                        f = F ? F(e) : null;
                                    if (o && l && !f) t.push(e);
                                    else {
                                        var p = [i, s];
                                        f && (p = p.concat(f)), r.push({
                                            file: e,
                                            errors: p.filter((function(e) {
                                                return e
                                            }))
                                        })
                                    }
                                })), (!u && t.length > 1 || u && l >= 1 && t.length > l) && (t.forEach((function(e) {
                                    r.push({
                                        file: e,
                                        errors: [U]
                                    })
                                })), t.splice(0)), T({
                                    acceptedFiles: t,
                                    fileRejections: r,
                                    type: "setFiles"
                                }), d && d(t, r, n), r.length > 0 && m && m(r, n), t.length > 0 && v && v(t, n)
                            }), [T, u, k, c, a, l, d, v, m, F]),
                            ce = (0, r.useCallback)((function(e) {
                                e.preventDefault(), e.persist(), ke(e), _.current = [], q(e) && Promise.resolve(i(e)).then((function(n) {
                                    Z(e) && !j || ae(n, e)
                                })).catch((function(e) {
                                    return Y(e)
                                })), T({
                                    type: "reset"
                                })
                            }), [i, ae, Y, j]),
                            pe = (0, r.useCallback)((function() {
                                if (B.current) {
                                    T({
                                        type: "openDialog"
                                    }), P();
                                    var e = {
                                        multiple: u,
                                        types: E
                                    };
                                    window.showOpenFilePicker(e).then((function(e) {
                                        return i(e)
                                    })).then((function(e) {
                                        ae(e, null), T({
                                            type: "closeDialog"
                                        })
                                    })).catch((function(e) {
                                        te(e) ? (S(e), T({
                                            type: "closeDialog"
                                        })) : re(e) ? (B.current = !1, z.current ? (z.current.value = null, z.current.click()) : Y(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : Y(e)
                                    }))
                                } else z.current && (T({
                                    type: "openDialog"
                                }), P(), z.current.value = null, z.current.click())
                            }), [T, P, S, b, ae, Y, E, u]),
                            de = (0, r.useCallback)((function(e) {
                                C.current && C.current.isEqualNode(e.target) && (" " !== e.key && "Enter" !== e.key && 32 !== e.keyCode && 13 !== e.keyCode || (e.preventDefault(), pe()))
                            }), [C, pe]),
                            ve = (0, r.useCallback)((function() {
                                T({
                                    type: "focus"
                                })
                            }), []),
                            be = (0, r.useCallback)((function() {
                                T({
                                    type: "blur"
                                })
                            }), []),
                            we = (0, r.useCallback)((function() {
                                D || (Q() ? setTimeout(pe, 0) : pe())
                            }), [D, pe]),
                            je = function(e) {
                                return o ? null : e
                            },
                            Ae = function(e) {
                                return x ? null : je(e)
                            },
                            Fe = function(e) {
                                return O ? null : je(e)
                            },
                            ke = function(e) {
                                j && e.stopPropagation()
                            },
                            Ee = (0, r.useMemo)((function() {
                                return function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        n = e.refKey,
                                        t = void 0 === n ? "ref" : n,
                                        r = e.role,
                                        i = e.onKeyDown,
                                        a = e.onFocus,
                                        c = e.onBlur,
                                        u = e.onClick,
                                        l = e.onDragEnter,
                                        s = e.onDragOver,
                                        f = e.onDragLeave,
                                        p = e.onDrop,
                                        d = ye(e, ue);
                                    return me(me(ge({
                                        onKeyDown: Ae(V(i, de)),
                                        onFocus: Ae(V(a, ve)),
                                        onBlur: Ae(V(c, be)),
                                        onClick: je(V(u, we)),
                                        onDragEnter: Fe(V(l, J)),
                                        onDragOver: Fe(V(s, oe)),
                                        onDragLeave: Fe(V(f, ie)),
                                        onDrop: Fe(V(p, ce)),
                                        role: "string" === typeof r && "" !== r ? r : "presentation"
                                    }, t, C), o || x ? {} : {
                                        tabIndex: 0
                                    }), d)
                                }
                            }), [C, de, ve, be, we, J, oe, ie, ce, x, O, o]),
                            Pe = (0, r.useCallback)((function(e) {
                                e.stopPropagation()
                            }), []),
                            Se = (0, r.useMemo)((function() {
                                return function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        n = e.refKey,
                                        t = void 0 === n ? "ref" : n,
                                        r = e.onChange,
                                        o = e.onClick,
                                        i = ye(e, le);
                                    return me(me({}, ge({
                                        accept: k,
                                        multiple: u,
                                        type: "file",
                                        style: {
                                            display: "none"
                                        },
                                        onChange: je(V(r, ce)),
                                        onClick: je(V(o, Pe)),
                                        tabIndex: -1
                                    }, t, z)), i)
                                }
                            }), [z, t, u, ce, o]);
                        return me(me({}, I), {}, {
                            isFocused: M && !o,
                            getRootProps: Ee,
                            getInputProps: Se,
                            rootRef: C,
                            inputRef: z,
                            open: je(pe)
                        })
                    }(ye(e, ae)),
                    a = i.open,
                    c = ye(i, ce);
                return (0, r.useImperativeHandle)(n, (function() {
                    return {
                        open: a
                    }
                }), [a]), o().createElement(r.Fragment, null, t(me(me({}, c), {}, {
                    open: a
                })))
            }));
            be.displayName = "Dropzone";
            var he = {
                disabled: !1,
                getFilesFromEvent: function(e) {
                    return c(this, void 0, void 0, (function() {
                        return u(this, (function(n) {
                            return v(e) && v(e.dataTransfer) ? [2, y(e.dataTransfer, e.type)] : function(e) {
                                return v(e) && v(e.target)
                            }(e) ? [2, m(e)] : Array.isArray(e) && e.every((function(e) {
                                return "getFile" in e && "function" === typeof e.getFile
                            })) ? [2, g(e)] : [2, []]
                        }))
                    }))
                },
                maxSize: 1 / 0,
                minSize: 0,
                multiple: !0,
                maxFiles: 0,
                preventDropOnDocument: !0,
                noClick: !1,
                noKeyboard: !1,
                noDrag: !1,
                noDragEventsBubbling: !1,
                validator: null,
                useFsAccessApi: !0,
                autoFocus: !1
            };
            be.defaultProps = he, be.propTypes = {
                children: a().func,
                accept: a().objectOf(a().arrayOf(a().string)),
                multiple: a().bool,
                preventDropOnDocument: a().bool,
                noClick: a().bool,
                noKeyboard: a().bool,
                noDrag: a().bool,
                noDragEventsBubbling: a().bool,
                minSize: a().number,
                maxSize: a().number,
                maxFiles: a().number,
                disabled: a().bool,
                getFilesFromEvent: a().func,
                onFileDialogCancel: a().func,
                onFileDialogOpen: a().func,
                useFsAccessApi: a().bool,
                autoFocus: a().bool,
                onDragEnter: a().func,
                onDragLeave: a().func,
                onDragOver: a().func,
                onDrop: a().func,
                onDropAccepted: a().func,
                onDropRejected: a().func,
                onError: a().func,
                validator: a().func
            };
            const we = be;
            var De = {
                isFocused: !1,
                isFileDialogActive: !1,
                isDragActive: !1,
                isDragAccept: !1,
                isDragReject: !1,
                acceptedFiles: [],
                fileRejections: []
            };

            function xe(e, n) {
                switch (n.type) {
                    case "focus":
                        return me(me({}, e), {}, {
                            isFocused: !0
                        });
                    case "blur":
                        return me(me({}, e), {}, {
                            isFocused: !1
                        });
                    case "openDialog":
                        return me(me({}, De), {}, {
                            isFileDialogActive: !0
                        });
                    case "closeDialog":
                        return me(me({}, e), {}, {
                            isFileDialogActive: !1
                        });
                    case "setDraggedFiles":
                        return me(me({}, e), {}, {
                            isDragActive: n.isDragActive,
                            isDragAccept: n.isDragAccept,
                            isDragReject: n.isDragReject
                        });
                    case "setFiles":
                        return me(me({}, e), {}, {
                            acceptedFiles: n.acceptedFiles,
                            fileRejections: n.fileRejections
                        });
                    case "reset":
                        return me({}, De);
                    default:
                        return e
                }
            }

            function Oe() {}
        }
    }
]);
//# sourceMappingURL=../41389-aa3dcbb083055eea9ab2.js.map