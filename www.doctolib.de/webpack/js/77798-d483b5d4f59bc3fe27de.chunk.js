(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [77798], {
        859134: (e, t, r) => {
            var o = r(734155);
            e.exports = function() {
                return "undefined" !== typeof window && "object" === typeof window.process && "renderer" === window.process.type || (!("undefined" === typeof o || "object" !== typeof o.versions || !o.versions.electron) || "object" === typeof navigator && "string" === typeof navigator.userAgent && navigator.userAgent.indexOf("Electron") >= 0)
            }
        },
        549995: (e, t, r) => {
            var o = r(789465),
                n = r(555189),
                a = Object.prototype.hasOwnProperty,
                i = n((function(e, t, r) {
                    a.call(e, r) ? ++e[r] : o(e, r, 1)
                }));
            e.exports = i
        },
        535666: e => {
            var t = function(e) {
                "use strict";
                var t, r = Object.prototype,
                    o = r.hasOwnProperty,
                    n = "function" === typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function c(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    c({}, "")
                } catch (e) {
                    c = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function l(e, t, r, o) {
                    var n = t && t.prototype instanceof y ? t : y,
                        a = Object.create(n.prototype),
                        i = new O(o || []);
                    return a._invoke = function(e, t, r) {
                        var o = p;
                        return function(n, a) {
                            if (o === h) throw new Error("Generator is already running");
                            if (o === f) {
                                if ("throw" === n) throw a;
                                return R()
                            }
                            for (r.method = n, r.arg = a;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = S(i, r);
                                    if (s) {
                                        if (s === g) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if (o === p) throw o = f, r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                o = h;
                                var c = u(e, t, r);
                                if ("normal" === c.type) {
                                    if (o = r.done ? f : d, c.arg === g) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (o = f, r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), a
                }

                function u(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var p = "suspendedStart",
                    d = "suspendedYield",
                    h = "executing",
                    f = "completed",
                    g = {};

                function y() {}

                function m() {}

                function w() {}
                var b = {};
                c(b, a, (function() {
                    return this
                }));
                var v = Object.getPrototypeOf,
                    L = v && v(v(_([])));
                L && L !== r && o.call(L, a) && (b = L);
                var E = w.prototype = y.prototype = Object.create(b);

                function k(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        c(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function x(e, t) {
                    function r(n, a, i, s) {
                        var c = u(e[n], e, a);
                        if ("throw" !== c.type) {
                            var l = c.arg,
                                p = l.value;
                            return p && "object" === typeof p && o.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                r("next", e, i, s)
                            }), (function(e) {
                                r("throw", e, i, s)
                            })) : t.resolve(p).then((function(e) {
                                l.value = e, i(l)
                            }), (function(e) {
                                return r("throw", e, i, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var n;
                    this._invoke = function(e, o) {
                        function a() {
                            return new t((function(t, n) {
                                r(e, o, t, n)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function S(e, r) {
                    var o = e.iterator[r.method];
                    if (o === t) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (e.iterator.return && (r.method = "return", r.arg = t, S(e, r), "throw" === r.method)) return g;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return g
                    }
                    var n = u(o, e.iterator, r.arg);
                    if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, g;
                    var a = n.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, g) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g)
                }

                function j(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function A(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function O(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(j, this), this.reset(!0)
                }

                function _(e) {
                    if (e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" === typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                i = function r() {
                                    for (; ++n < e.length;)
                                        if (o.call(e, n)) return r.value = e[n], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: R
                    }
                }

                function R() {
                    return {
                        value: t,
                        done: !0
                    }
                }
                return m.prototype = w, c(E, "constructor", w), c(w, "constructor", m), m.displayName = c(w, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" === typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, c(e, s, "GeneratorFunction")), e.prototype = Object.create(E), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, k(x.prototype), c(x.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = x, e.async = function(t, r, o, n, a) {
                    void 0 === a && (a = Promise);
                    var i = new x(l(t, r, o, n), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, k(E), c(E, s, "Generator"), c(E, a, (function() {
                    return this
                })), c(E, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return r.value = o, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = _, O.prototype = {
                    constructor: O,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(A), !e)
                            for (var r in this) "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function n(o, n) {
                            return s.type = "throw", s.arg = e, r.next = o, n && (r.method = "next", r.arg = t), !!n
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a],
                                s = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = o.call(i, "catchLoc"),
                                    l = o.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var a = n;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, g) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), A(r), g
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var o = r.completion;
                                if ("throw" === o.type) {
                                    var n = o.arg;
                                    A(r)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, o) {
                        return this.delegate = {
                            iterator: _(e),
                            resultName: r,
                            nextLoc: o
                        }, "next" === this.method && (this.arg = t), g
                    }
                }, e
            }(e.exports);
            try {
                regeneratorRuntime = t
            } catch (e) {
                "object" === typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
            }
        },
        285072: function(e, t, r) {
            var o, n;
            o = function() {
                function e() {
                    var e = arguments.length;
                    if (0 === e) throw new Error("resolveUrl requires at least one argument; got none.");
                    var t = document.createElement("base");
                    if (t.href = arguments[0], 1 === e) return t.href;
                    var r = document.getElementsByTagName("head")[0];
                    r.insertBefore(t, r.firstChild);
                    for (var o, n = document.createElement("a"), a = 1; a < e; a++) n.href = arguments[a], o = n.href, t.href = o;
                    return r.removeChild(t), o
                }
                return e
            }, void 0 === (n = "function" === typeof o ? o.call(t, r, t, e) : o) || (e.exports = n)
        },
        370181: (e, t, r) => {
            const o = r(851158);
            e.exports = {
                recognize: async (e, t, r) => {
                    const n = o(r);
                    return await n.load(), await n.loadLanguage(t), await n.initialize(t), n.recognize(e).finally((async () => {
                        await n.terminate()
                    }))
                },
                detect: async (e, t) => {
                    const r = o(t);
                    return await r.load(), await r.loadLanguage("osd"), await r.initialize("osd"), r.detect(e).finally((async () => {
                        await r.terminate()
                    }))
                }
            }
        },
        606308: e => {
            e.exports = {
                TESSERACT_ONLY: 0,
                LSTM_ONLY: 1,
                TESSERACT_LSTM_COMBINED: 2,
                DEFAULT: 3
            }
        },
        287895: e => {
            e.exports = {
                OSD_ONLY: "0",
                AUTO_OSD: "1",
                AUTO_ONLY: "2",
                AUTO: "3",
                SINGLE_COLUMN: "4",
                SINGLE_BLOCK_VERT_TEXT: "5",
                SINGLE_BLOCK: "6",
                SINGLE_LINE: "7",
                SINGLE_WORD: "8",
                CIRCLE_WORD: "9",
                SINGLE_CHAR: "10",
                SPARSE_TEXT: "11",
                SPARSE_TEXT_OSD: "12"
            }
        },
        379154: (e, t, r) => {
            const o = r(606308);
            e.exports = {
                defaultOEM: o.DEFAULT
            }
        },
        808720: e => {
            e.exports = {
                langPath: "https://tessdata.projectnaptha.com/4.0.0",
                workerBlobURL: !0,
                logger: () => {}
            }
        },
        379520: e => {
            e.exports = {
                AFR: "afr",
                AMH: "amh",
                ARA: "ara",
                ASM: "asm",
                AZE: "aze",
                AZE_CYRL: "aze_cyrl",
                BEL: "bel",
                BEN: "ben",
                BOD: "bod",
                BOS: "bos",
                BUL: "bul",
                CAT: "cat",
                CEB: "ceb",
                CES: "ces",
                CHI_SIM: "chi_sim",
                CHI_TRA: "chi_tra",
                CHR: "chr",
                CYM: "cym",
                DAN: "dan",
                DEU: "deu",
                DZO: "dzo",
                ELL: "ell",
                ENG: "eng",
                ENM: "enm",
                EPO: "epo",
                EST: "est",
                EUS: "eus",
                FAS: "fas",
                FIN: "fin",
                FRA: "fra",
                FRK: "frk",
                FRM: "frm",
                GLE: "gle",
                GLG: "glg",
                GRC: "grc",
                GUJ: "guj",
                HAT: "hat",
                HEB: "heb",
                HIN: "hin",
                HRV: "hrv",
                HUN: "hun",
                IKU: "iku",
                IND: "ind",
                ISL: "isl",
                ITA: "ita",
                ITA_OLD: "ita_old",
                JAV: "jav",
                JPN: "jpn",
                KAN: "kan",
                KAT: "kat",
                KAT_OLD: "kat_old",
                KAZ: "kaz",
                KHM: "khm",
                KIR: "kir",
                KOR: "kor",
                KUR: "kur",
                LAO: "lao",
                LAT: "lat",
                LAV: "lav",
                LIT: "lit",
                MAL: "mal",
                MAR: "mar",
                MKD: "mkd",
                MLT: "mlt",
                MSA: "msa",
                MYA: "mya",
                NEP: "nep",
                NLD: "nld",
                NOR: "nor",
                ORI: "ori",
                PAN: "pan",
                POL: "pol",
                POR: "por",
                PUS: "pus",
                RON: "ron",
                RUS: "rus",
                SAN: "san",
                SIN: "sin",
                SLK: "slk",
                SLV: "slv",
                SPA: "spa",
                SPA_OLD: "spa_old",
                SQI: "sqi",
                SRP: "srp",
                SRP_LATN: "srp_latn",
                SWA: "swa",
                SWE: "swe",
                SYR: "syr",
                TAM: "tam",
                TEL: "tel",
                TGK: "tgk",
                TGL: "tgl",
                THA: "tha",
                TIR: "tir",
                TUR: "tur",
                UIG: "uig",
                UKR: "ukr",
                URD: "urd",
                UZB: "uzb",
                UZB_CYRL: "uzb_cyrl",
                VIE: "vie",
                YID: "yid"
            }
        },
        691949: (e, t, r) => {
            const o = r(55504);
            let n = 0;
            e.exports = ({
                id: e,
                action: t,
                payload: r = {}
            }) => {
                let a = e;
                return "undefined" === typeof a && (a = o("Job", n), n += 1), {
                    id: a,
                    action: t,
                    payload: r
                }
            }
        },
        377877: function(e, t, r) {
            const o = r(691949),
                {
                    log: n
                } = r(663486),
                a = r(55504);
            let i = 0;
            e.exports = () => {
                const e = a("Scheduler", i),
                    t = {},
                    r = {};
                let s = [];
                i += 1;
                const c = () => Object.keys(t).length,
                    l = () => {
                        if (0 !== s.length) {
                            const e = Object.keys(t);
                            for (let o = 0; o < e.length; o += 1)
                                if ("undefined" === typeof r[e[o]]) {
                                    s[0](t[e[o]]);
                                    break
                                }
                        }
                    },
                    u = (t, a) => new Promise(((i, c) => {
                        const u = o({
                            action: t,
                            payload: a
                        });
                        s.push((async e => {
                            s.shift(), r[e.id] = u;
                            try {
                                i(await e[t].apply(this, [...a, u.id]))
                            } catch (e) {
                                c(e)
                            } finally {
                                delete r[e.id], l()
                            }
                        })), n(`[${e}]: Add ${u.id} to JobQueue`), n(`[${e}]: JobQueue length=${s.length}`), l()
                    }));
                return {
                    addWorker: r => (t[r.id] = r, n(`[${e}]: Add ${r.id}`), n(`[${e}]: Number of workers=${c()}`), l(), r.id),
                    addJob: async (t, ...r) => {
                        if (0 === c()) throw Error(`[${e}]: You need to have at least one worker before adding jobs`);
                        return u(t, r)
                    },
                    terminate: async () => {
                        Object.keys(t).forEach((async e => {
                            await t[e].terminate()
                        })), s = []
                    },
                    getQueueLen: () => s.length,
                    getNumWorkers: c
                }
            }
        },
        851158: (e, t, r) => {
            const o = r(651937),
                n = r(893634),
                a = r(691949),
                {
                    log: i
                } = r(663486),
                s = r(55504),
                {
                    defaultOEM: c
                } = r(379154),
                {
                    defaultOptions: l,
                    spawnWorker: u,
                    terminateWorker: p,
                    onMessage: d,
                    loadImage: h,
                    send: f
                } = r(413791);
            let g = 0;
            e.exports = (e = {}) => {
                const t = s("Worker", g),
                    {
                        logger: r,
                        errorHandler: y,
                        ...m
                    } = o({ ...l,
                        ...e
                    }),
                    w = {},
                    b = {};
                let v = u(m);
                g += 1;
                const L = (e, t) => {
                        w[e] = t
                    },
                    E = (e, t) => {
                        b[e] = t
                    },
                    k = ({
                        id: e,
                        action: r,
                        payload: o
                    }) => new Promise(((n, a) => {
                        i(`[${t}]: Start ${e}, action=${r}`), L(r, n), E(r, a), f(v, {
                            workerId: t,
                            jobId: e,
                            action: r,
                            payload: o
                        })
                    }));
                return d(v, (({
                    workerId: e,
                    jobId: t,
                    status: o,
                    action: a,
                    data: s
                }) => {
                    if ("resolve" === o) {
                        i(`[${e}]: Complete ${t}`);
                        let r = s;
                        "recognize" === a ? r = n(s) : "getPDF" === a && (r = Array.from({ ...s,
                            length: Object.keys(s).length
                        })), w[a]({
                            jobId: t,
                            data: r
                        })
                    } else if ("reject" === o) {
                        if (b[a](s), !y) throw Error(s);
                        y(s)
                    } else "progress" === o && r({ ...s,
                        userJobId: t
                    })
                })), {
                    id: t,
                    worker: v,
                    setResolve: L,
                    setReject: E,
                    load: e => k(a({
                        id: e,
                        action: "load",
                        payload: {
                            options: m
                        }
                    })),
                    writeText: (e, t, r) => k(a({
                        id: r,
                        action: "FS",
                        payload: {
                            method: "writeFile",
                            args: [e, t]
                        }
                    })),
                    readText: (e, t) => k(a({
                        id: t,
                        action: "FS",
                        payload: {
                            method: "readFile",
                            args: [e, {
                                encoding: "utf8"
                            }]
                        }
                    })),
                    removeFile: (e, t) => k(a({
                        id: t,
                        action: "FS",
                        payload: {
                            method: "unlink",
                            args: [e]
                        }
                    })),
                    FS: (e, t, r) => k(a({
                        id: r,
                        action: "FS",
                        payload: {
                            method: e,
                            args: t
                        }
                    })),
                    loadLanguage: (e = "eng", t) => k(a({
                        id: t,
                        action: "loadLanguage",
                        payload: {
                            langs: e,
                            options: m
                        }
                    })),
                    initialize: (e = "eng", t = c, r) => k(a({
                        id: r,
                        action: "initialize",
                        payload: {
                            langs: e,
                            oem: t
                        }
                    })),
                    setParameters: (e = {}, t) => k(a({
                        id: t,
                        action: "setParameters",
                        payload: {
                            params: e
                        }
                    })),
                    recognize: async (e, t = {}, r) => k(a({
                        id: r,
                        action: "recognize",
                        payload: {
                            image: await h(e),
                            options: t
                        }
                    })),
                    getPDF: (e = "Tesseract OCR Result", t = !1, r) => k(a({
                        id: r,
                        action: "getPDF",
                        payload: {
                            title: e,
                            textonly: t
                        }
                    })),
                    detect: async (e, t) => k(a({
                        id: t,
                        action: "detect",
                        payload: {
                            image: await h(e)
                        }
                    })),
                    terminate: async () => (null !== v && (p(v), v = null), Promise.resolve())
                }
            }
        },
        893634: e => {
            e.exports = e => {
                const t = [],
                    r = [],
                    o = [],
                    n = [],
                    a = [];
                return e.blocks.forEach((i => {
                    i.paragraphs.forEach((t => {
                        t.lines.forEach((r => {
                            r.words.forEach((o => {
                                o.symbols.forEach((n => {
                                    a.push({ ...n,
                                        page: e,
                                        block: i,
                                        paragraph: t,
                                        line: r,
                                        word: o
                                    })
                                })), n.push({ ...o,
                                    page: e,
                                    block: i,
                                    paragraph: t,
                                    line: r
                                })
                            })), o.push({ ...r,
                                page: e,
                                block: i,
                                paragraph: t
                            })
                        })), r.push({ ...t,
                            page: e,
                            block: i
                        })
                    })), t.push({ ...i,
                        page: e
                    })
                })), { ...e,
                    blocks: t,
                    paragraphs: r,
                    lines: o,
                    words: n,
                    symbols: a
                }
            }
        },
        156376: (e, t, r) => {
            var o = r(734155);
            const n = r(859134);
            e.exports = e => {
                const t = {};
                return "undefined" !== typeof WorkerGlobalScope ? t.type = "webworker" : n() ? t.type = "electron" : "object" === typeof window ? t.type = "browser" : "object" === typeof o && (t.type = "node"), "undefined" === typeof e ? t : t[e]
            }
        },
        55504: e => {
            e.exports = (e, t) => `${e}-${t}-${Math.random().toString(16).slice(3,8)}`
        },
        663486: function(e, t) {
            let r = !1;
            t.logging = r, t.setLogging = e => {
                r = e
            }, t.log = (...e) => r ? console.log.apply(this, e) : null
        },
        651937: (e, t, r) => {
            const o = "browser" === r(156376)("type") ? r(285072) : e => e;
            e.exports = e => {
                const t = { ...e
                };
                return ["corePath", "workerPath", "langPath"].forEach((r => {
                    e[r] && (t[r] = o(t[r]))
                })), t
            }
        },
        384040: (e, t, r) => {
            var o = r(734155);
            const n = r(285072),
                {
                    version: a
                } = r(294547),
                i = r(808720);
            e.exports = { ...i,
                workerPath: "undefined" !== typeof o && "development" === o.env.TESS_ENV ? n(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`) : `https://unpkg.com/tesseract.js@v${a}/dist/worker.min.js`,
                corePath: null
            }
        },
        413791: (e, t, r) => {
            const o = r(384040),
                n = r(691005),
                a = r(60025),
                i = r(809804),
                s = r(957247),
                c = r(741196);
            e.exports = {
                defaultOptions: o,
                spawnWorker: n,
                terminateWorker: a,
                onMessage: i,
                send: s,
                loadImage: c
            }
        },
        741196: (e, t, r) => {
            const o = r(285072),
                n = e => new Promise(((t, r) => {
                    const o = new FileReader;
                    o.onload = () => {
                        t(o.result)
                    }, o.onerror = ({
                        target: {
                            error: {
                                code: e
                            }
                        }
                    }) => {
                        r(Error(`File could not be read! Code=${e}`))
                    }, o.readAsArrayBuffer(e)
                })),
                a = async e => {
                    let t = e;
                    if ("undefined" === typeof e) return "undefined";
                    if ("string" === typeof e)
                        if (/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)) t = atob(e.split(",")[1]).split("").map((e => e.charCodeAt(0)));
                        else {
                            const r = await fetch(o(e));
                            t = await r.arrayBuffer()
                        }
                    else e instanceof HTMLElement ? ("IMG" === e.tagName && (t = await a(e.src)), "VIDEO" === e.tagName && (t = await a(e.poster)), "CANVAS" === e.tagName && await new Promise((r => {
                        e.toBlob((async e => {
                            t = await n(e), r()
                        }))
                    }))) : (e instanceof File || e instanceof Blob) && (t = await n(e));
                    return new Uint8Array(t)
                };
            e.exports = a
        },
        809804: e => {
            e.exports = (e, t) => {
                e.onmessage = ({
                    data: e
                }) => {
                    t(e)
                }
            }
        },
        957247: e => {
            e.exports = async (e, t) => {
                e.postMessage(t)
            }
        },
        691005: e => {
            e.exports = ({
                workerPath: e,
                workerBlobURL: t
            }) => {
                let r;
                if (Blob && URL && t) {
                    const t = new Blob([`importScripts("${e}");`], {
                        type: "application/javascript"
                    });
                    r = new Worker(URL.createObjectURL(t))
                } else r = new Worker(e);
                return r
            }
        },
        60025: e => {
            e.exports = e => {
                e.terminate()
            }
        },
        294547: e => {
            "use strict";
            e.exports = JSON.parse('{"name":"tesseract.js","version":"3.0.3","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.js","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","lint:fix":"eslint --fix src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.18.7","@babel/preset-env":"^7.18.7","@rollup/plugin-commonjs":"^22.0.2","acorn":"^6.4.0","babel-loader":"^8.2.0","buffer":"^6.0.3","cors":"^2.8.5","eslint":"^7.2.0","eslint-config-airbnb-base":"^14.2.0","eslint-plugin-import":"^2.22.1","expect.js":"^0.3.1","express":"^4.17.1","mocha":"^8.1.3","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","nyc":"^15.1.0","rimraf":"^2.7.1","rollup":"^2.79.0","wait-on":"^3.3.0","webpack":"^5.74.0","webpack-bundle-analyzer":"^4.6.0","webpack-cli":"^4.10.0","webpack-dev-middleware":"^5.3.3"},"dependencies":{"babel-eslint":"^10.1.0","bmp-js":"^0.1.0","file-type":"^12.4.1","idb-keyval":"^3.2.0","is-electron":"^2.2.0","is-url":"^1.2.4","node-fetch":"^2.6.0","opencollective-postinstall":"^2.0.2","regenerator-runtime":"^0.13.3","resolve-url":"^0.2.1","tesseract.js-core":"^3.0.2","wasm-feature-detect":"^1.2.11","zlibjs":"^0.3.1"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}')
        }
    }
]);
//# sourceMappingURL=../77798-edc003714be3798861c5.js.map