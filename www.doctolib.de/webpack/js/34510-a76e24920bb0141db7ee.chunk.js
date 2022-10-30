"use strict";
(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [34510], {
        579849: (e, t, n) => {
            n.r(t), n.d(t, {
                __assign: () => i,
                __asyncDelegator: () => _,
                __asyncGenerator: () => w,
                __asyncValues: () => x,
                __await: () => g,
                __awaiter: () => c,
                __classPrivateFieldGet: () => j,
                __classPrivateFieldIn: () => A,
                __classPrivateFieldSet: () => S,
                __createBinding: () => f,
                __decorate: () => a,
                __exportStar: () => d,
                __extends: () => o,
                __generator: () => h,
                __importDefault: () => P,
                __importStar: () => E,
                __makeTemplateObject: () => k,
                __metadata: () => u,
                __param: () => l,
                __read: () => y,
                __rest: () => s,
                __spread: () => m,
                __spreadArray: () => v,
                __spreadArrays: () => b,
                __values: () => p
            });
            var r = function(e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            };

            function o(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var i = function() {
                return i = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, i.apply(this, arguments)
            };

            function s(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            }

            function a(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            }

            function l(e, t) {
                return function(n, r) {
                    t(n, r, e)
                }
            }

            function u(e, t) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function c(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            l(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            l(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    l((r = r.apply(e, t || [])).next())
                }))
            }

            function h(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            }
            var f = Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n);
                var o = Object.getOwnPropertyDescriptor(t, n);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, o)
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            };

            function d(e, t) {
                for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || f(t, e, n)
            }

            function p(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function y(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function m() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(y(arguments[t]));
                return e
            }

            function b() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++)
                    for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                return r
            }

            function v(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                return e.concat(r || Array.prototype.slice.call(t))
            }

            function g(e) {
                return this instanceof g ? (this.v = e, this) : new g(e)
            }

            function w(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, o = n.apply(e, t || []),
                    i = [];
                return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function s(e) {
                    o[e] && (r[e] = function(t) {
                        return new Promise((function(n, r) {
                            i.push([e, t, n, r]) > 1 || a(e, t)
                        }))
                    })
                }

                function a(e, t) {
                    try {
                        (n = o[e](t)).value instanceof g ? Promise.resolve(n.value.v).then(l, u) : c(i[0][2], n)
                    } catch (e) {
                        c(i[0][3], e)
                    }
                    var n
                }

                function l(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function c(e, t) {
                    e(t), i.shift(), i.length && a(i[0][0], i[0][1])
                }
            }

            function _(e) {
                var t, n;
                return t = {}, r("next"), r("throw", (function(e) {
                    throw e
                })), r("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function r(r, o) {
                    t[r] = e[r] ? function(t) {
                        return (n = !n) ? {
                            value: g(e[r](t)),
                            done: "return" === r
                        } : o ? o(t) : t
                    } : o
                }
            }

            function x(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise((function(r, o) {
                            (function(e, t, n, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }), t)
                            })(r, o, (t = e[n](t)).done, t.value)
                        }))
                    }
                }
            }

            function k(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            var O = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };

            function E(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && f(t, e, n);
                return O(t, e), t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function j(e, t, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" === typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            }

            function S(e, t, n, r, o) {
                if ("m" === r) throw new TypeError("Private method is not writable");
                if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" === typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
            }

            function A(e, t) {
                if (null === t || "object" !== typeof t && "function" !== typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" === typeof e ? t === e : e.has(t)
            }
        },
        704683: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(273235);
            class o extends Error {
                constructor(e) {
                    super(`Dexie can't support search for ${e} values on an index, as they are invalid IndexedDB keys.`), Object.setPrototypeOf(this, o.prototype), this.name = this.constructor.name
                }
            }
            const i = "undefined" !== typeof window && window.parent && window.parent !== window ? r.transform.fixObjects : r.transform.identity;
            t.default = e => class t {
                constructor(e) {
                    this.add = async (e, t) => {
                        try {
                            await this._db.table(e).add(t)
                        } catch (e) {
                            const t = e;
                            if ("ConstraintError" === t.name) throw new r.errors.RecordNotUnique(t);
                            throw new r.errors.UnknownError(t)
                        }
                    }, this.put = async (e, t) => {
                        try {
                            await this._db.table(e).put(t)
                        } catch (e) {
                            const t = e;
                            if ("ConstraintError" === t.name) throw new r.errors.RecordNotUnique(t);
                            throw new r.errors.UnknownError(t)
                        }
                    }, this.bulkAdd = async (e, t, ...n) => {
                        const o = t instanceof Array ? t : [t, ...n];
                        try {
                            await this._db.table(e).bulkAdd(o)
                        } catch (e) {
                            const t = e;
                            if ("BulkError" === t.name && t.failures.every((e => "ConstraintError" === e.name))) return;
                            throw new r.errors.UnknownError(t)
                        }
                    }, this.bulkPut = async (e, t, ...n) => {
                        const o = t instanceof Array ? t : [t, ...n];
                        try {
                            await this._db.table(e).bulkPut(o)
                        } catch (e) {
                            const t = e;
                            if ("ConstraintError" === t.name) throw new r.errors.RecordNotUnique(t);
                            throw new r.errors.UnknownError(t)
                        }
                    }, this.bulkDelete = async (e, t, ...n) => {
                        const o = t instanceof Array ? t : [t, ...n];
                        try {
                            await this._db.table(e).bulkDelete(o.map((e => e._id)))
                        } catch (e) {
                            throw new r.errors.UnknownError(e)
                        }
                    }, this.get = async (e, t) => {
                        let n;
                        try {
                            n = i(await this._db.table(e).get(t))
                        } catch (e) {
                            throw new r.errors.UnknownError(e)
                        }
                        if (!n) throw new r.errors.RecordNotFound;
                        return n
                    }, this.getAll = async e => {
                        const t = await this._db.table(e).toArray();
                        return i(t)
                    }, this.find = async (e, t = {}) => {
                        const {
                            selector: n,
                            sort: r,
                            limit: o
                        } = t, s = this._db.table(e);
                        let a = null,
                            l = s;
                        if (n) {
                            const t = Object.keys(n),
                                r = [];
                            if (t.length < 1) throw new Error("A selector must provide at least one field");
                            if (t.forEach((t => {
                                    !a && this.isIndexed(e, t) ? a = t : r.push(t)
                                })), !a) throw new Error("A selector must provide at least one indexed field");
                            const o = this._chainWhere(s, a, n[a]);
                            if (l = o, r.length > 0) {
                                const e = { ...n
                                };
                                delete e[a], l = this._chainAnd(o, e)
                            }
                        }
                        let u = l;
                        r && (u = this._chainSort(l, r, a, e));
                        let c, h = u;
                        return o && (h = this._chainLimit(u, o)), c = this._isTable(h) || this._isCollection(h) ? h.toArray() : h, i(await c)
                    }, this.first = async (e, t = {}) => (await this.find(e, { ...t,
                        limit: 1
                    }))[0], this.delete = async (e, t) => {
                        try {
                            await this._db.table(e).delete(t)
                        } catch (e) {
                            throw new r.errors.UnknownError(e)
                        }
                    }, Object.defineProperty(this, "_db", {
                        value: e,
                        writable: !0
                    }), Object.defineProperty(this, "_indexes", {
                        value: {},
                        writable: !0
                    })
                }
                get className() {
                    return this.constructor.name
                }
                isIndexed(e, t) {
                    return "_id" === t || !(!this._indexes[e] || !this._indexes[e][t])
                }
                async close() {
                    if (this._db) try {
                        this._db.close(), this._db = null, this._indexes = null
                    } catch (e) {
                        console.error(`Error when closing ${this.className}: `, e)
                    }
                }
                async destroy() {
                    this._db && (await this._db.delete(), this._db = null, this._indexes = null)
                }
                async clear(e) {
                    await this._db.table(e).clear()
                }
                static async open(n) {
                    if (!n || !n.dbName) throw new Error("Invalid empty dbName in config");
                    const o = new e(n.dbName, {
                            autoOpen: !1
                        }),
                        i = new t(o);
                    await i.defineSchemas(n.schemas);
                    try {
                        await o.open()
                    } catch (e) {
                        const t = e;
                        if ("VersionError" === t.name) throw new r.errors.VersionError(t);
                        throw new r.errors.UnknownError(t)
                    }
                    return i
                }
                async defineSchemas(e) {
                    for (const t of e) {
                        const {
                            version: e,
                            tables: n
                        } = t, r = {};
                        for (const e of n) {
                            const {
                                name: t,
                                indexes: n,
                                deleted: o
                            } = e;
                            if (o) r[t] = null;
                            else {
                                const e = ["_id"];
                                if (n)
                                    for (const r of n) this._indexes[t] || (this._indexes[t] = {}), this._indexes[t][r[0]] = !0, e.push(1 === r.length ? r[0] : `[${r.join("+")}]`);
                                r[t] = e.join(",")
                            }
                        }
                        this._db.version(e).stores(r)
                    }
                }
                _isTable(e) {
                    return e instanceof this._db.Table
                }
                _isCollection(e) {
                    return e instanceof this._db.Collection
                }
                _chainWhere(e, t, n) {
                    const r = e.where(t);
                    let i;
                    if (n instanceof Object)
                        if ("$in" in n) i = r.anyOf(n.$in);
                        else if ("$gt" in n) i = r.above(n.$gt);
                    else if ("$gte" in n) i = r.aboveOrEqual(n.$gte);
                    else if ("$lt" in n) i = r.below(n.$lt);
                    else if ("$lte" in n) i = r.belowOrEqual(n.$lte);
                    else if ("$eq" in n) i = r.equals(n.$eq);
                    else {
                        if (!("$ne" in n)) throw new Error(`A selector provided an unknown value: ${JSON.stringify(n)}`);
                        i = r.notEqual(n.$ne)
                    } else {
                        if ("boolean" === typeof n) throw new o("boolean");
                        if (null === n) throw new o("null");
                        i = r.equals(n)
                    }
                    return i
                }
                _chainAnd(e, t) {
                    const n = Object.keys(t);
                    return e.and((e => {
                        for (const r of n) {
                            const n = t[r];
                            if (n instanceof Object)
                                if ("$in" in n) {
                                    if (!n.$in.includes(e[r])) return !1
                                } else if ("$gt" in n) {
                                if (e[r] <= n.$gt) return !1
                            } else if ("$gte" in n) {
                                if (e[r] < n.$gte) return !1
                            } else if ("$lt" in n) {
                                if (e[r] >= n.$lt) return !1
                            } else if ("$lte" in n) {
                                if (e[r] > n.$lte) return !1
                            } else if ("$eq" in n) {
                                if (e[r] !== n.$eq) return !1
                            } else if ("$ne" in n) {
                                if (e[r] === n.$ne) return !1
                            } else {
                                if (!("$exists" in n)) throw new Error(`A selector provided an unknown value: ${JSON.stringify(n)}`);
                                if (n.$exists && !(r in e)) return !1;
                                if (!n.$exists && r in e) return !1
                            } else if (e[r] !== n) return !1
                        }
                        return !0
                    }))
                }
                _chainSort(e, t, n, r) {
                    if (1 !== t.length) throw new Error(`Exactly one sort param should be provided: found ${t.length}`);
                    const o = t[0];
                    let i, s = "asc";
                    o instanceof Object ? ([i] = Object.keys(o), "desc" === o[i] && (s = "desc")) : i = o;
                    let a, l = e;
                    return "desc" === s && (l = l.reverse()), a = this._isTable(l) && (n === i || !n && this.isIndexed(r, i)) ? l.orderBy(i) : l.sortBy(i), a
                }
                _chainLimit(e, t) {
                    let n;
                    return n = this._isTable(e) || this._isCollection(e) ? e.limit(t) : e.then((e => e.slice(0, t))), n
                }
            }
        },
        796129: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(99319),
                o = r.__importDefault(n(549520)),
                i = r.__importDefault(n(704683));
            o.default.dataStoreName = "DexieBrowser", t.default = () => (0, i.default)(o.default)
        },
        99319: (e, t, n) => {
            n.r(t), n.d(t, {
                __assign: () => i,
                __asyncDelegator: () => _,
                __asyncGenerator: () => w,
                __asyncValues: () => x,
                __await: () => g,
                __awaiter: () => c,
                __classPrivateFieldGet: () => j,
                __classPrivateFieldIn: () => A,
                __classPrivateFieldSet: () => S,
                __createBinding: () => f,
                __decorate: () => a,
                __exportStar: () => d,
                __extends: () => o,
                __generator: () => h,
                __importDefault: () => P,
                __importStar: () => E,
                __makeTemplateObject: () => k,
                __metadata: () => u,
                __param: () => l,
                __read: () => y,
                __rest: () => s,
                __spread: () => m,
                __spreadArray: () => v,
                __spreadArrays: () => b,
                __values: () => p
            });
            var r = function(e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            };

            function o(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var i = function() {
                return i = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, i.apply(this, arguments)
            };

            function s(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            }

            function a(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            }

            function l(e, t) {
                return function(n, r) {
                    t(n, r, e)
                }
            }

            function u(e, t) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function c(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            l(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            l(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    l((r = r.apply(e, t || [])).next())
                }))
            }

            function h(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            }
            var f = Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n);
                var o = Object.getOwnPropertyDescriptor(t, n);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, o)
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            };

            function d(e, t) {
                for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || f(t, e, n)
            }

            function p(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function y(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function m() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(y(arguments[t]));
                return e
            }

            function b() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++)
                    for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];
                return r
            }

            function v(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                return e.concat(r || Array.prototype.slice.call(t))
            }

            function g(e) {
                return this instanceof g ? (this.v = e, this) : new g(e)
            }

            function w(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, o = n.apply(e, t || []),
                    i = [];
                return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function s(e) {
                    o[e] && (r[e] = function(t) {
                        return new Promise((function(n, r) {
                            i.push([e, t, n, r]) > 1 || a(e, t)
                        }))
                    })
                }

                function a(e, t) {
                    try {
                        (n = o[e](t)).value instanceof g ? Promise.resolve(n.value.v).then(l, u) : c(i[0][2], n)
                    } catch (e) {
                        c(i[0][3], e)
                    }
                    var n
                }

                function l(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function c(e, t) {
                    e(t), i.shift(), i.length && a(i[0][0], i[0][1])
                }
            }

            function _(e) {
                var t, n;
                return t = {}, r("next"), r("throw", (function(e) {
                    throw e
                })), r("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function r(r, o) {
                    t[r] = e[r] ? function(t) {
                        return (n = !n) ? {
                            value: g(e[r](t)),
                            done: "return" === r
                        } : o ? o(t) : t
                    } : o
                }
            }

            function x(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise((function(r, o) {
                            (function(e, t, n, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }), t)
                            })(r, o, (t = e[n](t)).done, t.value)
                        }))
                    }
                }
            }

            function k(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            var O = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };

            function E(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && f(t, e, n);
                return O(t, e), t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function j(e, t, n, r) {
                if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                if ("function" === typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            }

            function S(e, t, n, r, o) {
                if ("m" === r) throw new TypeError("Private method is not writable");
                if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" === typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
            }

            function A(e, t) {
                if (null === t || "object" !== typeof t && "function" !== typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" === typeof e ? t === e : e.has(t)
            }
        },
        549520: (e, t, n) => {
            n.r(t), n.d(t, {
                Dexie: () => Ln,
                RangeSet: () => Rn,
                default: () => Ln,
                liveQuery: () => Yn,
                mergeRanges: () => Fn,
                rangesOverlap: () => Nn
            });
            const r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
                o = Object.keys,
                i = Array.isArray;

            function s(e, t) {
                return "object" != typeof t || o(t).forEach((function(n) {
                    e[n] = t[n]
                })), e
            }
            "undefined" == typeof Promise || r.Promise || (r.Promise = Promise);
            const a = Object.getPrototypeOf,
                l = {}.hasOwnProperty;

            function u(e, t) {
                return l.call(e, t)
            }

            function c(e, t) {
                "function" == typeof t && (t = t(a(e))), ("undefined" == typeof Reflect ? o : Reflect.ownKeys)(t).forEach((n => {
                    f(e, n, t[n])
                }))
            }
            const h = Object.defineProperty;

            function f(e, t, n, r) {
                h(e, t, s(n && u(n, "get") && "function" == typeof n.get ? {
                    get: n.get,
                    set: n.set,
                    configurable: !0
                } : {
                    value: n,
                    configurable: !0,
                    writable: !0
                }, r))
            }

            function d(e) {
                return {
                    from: function(t) {
                        return e.prototype = Object.create(t.prototype), f(e.prototype, "constructor", e), {
                            extend: c.bind(null, e.prototype)
                        }
                    }
                }
            }
            const p = Object.getOwnPropertyDescriptor;

            function y(e, t) {
                let n;
                return p(e, t) || (n = a(e)) && y(n, t)
            }
            const m = [].slice;

            function b(e, t, n) {
                return m.call(e, t, n)
            }

            function v(e, t) {
                return t(e)
            }

            function g(e) {
                if (!e) throw new Error("Assertion Failed")
            }

            function w(e) {
                r.setImmediate ? setImmediate(e) : setTimeout(e, 0)
            }

            function _(e, t) {
                return e.reduce(((e, n, r) => {
                    var o = t(n, r);
                    return o && (e[o[0]] = o[1]), e
                }), {})
            }

            function x(e, t) {
                if (u(e, t)) return e[t];
                if (!t) return e;
                if ("string" != typeof t) {
                    for (var n = [], r = 0, o = t.length; r < o; ++r) {
                        var i = x(e, t[r]);
                        n.push(i)
                    }
                    return n
                }
                var s = t.indexOf(".");
                if (-1 !== s) {
                    var a = e[t.substr(0, s)];
                    return void 0 === a ? void 0 : x(a, t.substr(s + 1))
                }
            }

            function k(e, t, n) {
                if (e && void 0 !== t && (!("isFrozen" in Object) || !Object.isFrozen(e)))
                    if ("string" != typeof t && "length" in t) {
                        g("string" != typeof n && "length" in n);
                        for (var r = 0, o = t.length; r < o; ++r) k(e, t[r], n[r])
                    } else {
                        var s = t.indexOf(".");
                        if (-1 !== s) {
                            var a = t.substr(0, s),
                                l = t.substr(s + 1);
                            if ("" === l) void 0 === n ? i(e) && !isNaN(parseInt(a)) ? e.splice(a, 1) : delete e[a] : e[a] = n;
                            else {
                                var c = e[a];
                                c && u(e, a) || (c = e[a] = {}), k(c, l, n)
                            }
                        } else void 0 === n ? i(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n
                    }
            }

            function O(e) {
                var t = {};
                for (var n in e) u(e, n) && (t[n] = e[n]);
                return t
            }
            const E = [].concat;

            function P(e) {
                return E.apply([], e)
            }
            const j = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(P([8, 16, 32, 64].map((e => ["Int", "Uint", "Float"].map((t => t + e + "Array")))))).filter((e => r[e])),
                S = j.map((e => r[e]));
            _(j, (e => [e, !0]));
            let A = null;

            function K(e) {
                A = "undefined" != typeof WeakMap && new WeakMap;
                const t = C(e);
                return A = null, t
            }

            function C(e) {
                if (!e || "object" != typeof e) return e;
                let t = A && A.get(e);
                if (t) return t;
                if (i(e)) {
                    t = [], A && A.set(e, t);
                    for (var n = 0, r = e.length; n < r; ++n) t.push(C(e[n]))
                } else if (S.indexOf(e.constructor) >= 0) t = e;
                else {
                    const n = a(e);
                    for (var o in t = n === Object.prototype ? {} : Object.create(n), A && A.set(e, t), e) u(e, o) && (t[o] = C(e[o]))
                }
                return t
            }
            const {
                toString: T
            } = {};

            function I(e) {
                return T.call(e).slice(8, -1)
            }
            const D = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator",
                R = "symbol" == typeof D ? function(e) {
                    var t;
                    return null != e && (t = e[D]) && t.apply(e)
                } : function() {
                    return null
                },
                B = {};

            function F(e) {
                var t, n, r, o;
                if (1 === arguments.length) {
                    if (i(e)) return e.slice();
                    if (this === B && "string" == typeof e) return [e];
                    if (o = R(e)) {
                        for (n = []; !(r = o.next()).done;) n.push(r.value);
                        return n
                    }
                    if (null == e) return [e];
                    if ("number" == typeof(t = e.length)) {
                        for (n = new Array(t); t--;) n[t] = e[t];
                        return n
                    }
                    return [e]
                }
                for (t = arguments.length, n = new Array(t); t--;) n[t] = arguments[t];
                return n
            }
            const N = "undefined" != typeof Symbol ? e => "AsyncFunction" === e[Symbol.toStringTag] : () => !1;
            var M = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

            function q(e, t) {
                M = e, $ = t
            }
            var $ = () => !0;
            const U = !new Error("").stack;

            function L() {
                if (U) try {
                    throw L.arguments, new Error
                } catch (e) {
                    return e
                }
                return new Error
            }

            function V(e, t) {
                var n = e.stack;
                return n ? (t = t || 0, 0 === n.indexOf(e.name) && (t += (e.name + e.message).split("\n").length), n.split("\n").slice(t).filter($).map((e => "\n" + e)).join("")) : ""
            }
            var W = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"],
                G = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(W),
                Y = {
                    VersionChanged: "Database version changed by other database connection",
                    DatabaseClosed: "Database has been closed",
                    Abort: "Transaction aborted",
                    TransactionInactive: "Transaction has already completed or failed",
                    MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
                };

            function z(e, t) {
                this._e = L(), this.name = e, this.message = t
            }

            function H(e, t) {
                return e + ". Errors: " + Object.keys(t).map((e => t[e].toString())).filter(((e, t, n) => n.indexOf(e) === t)).join("\n")
            }

            function Q(e, t, n, r) {
                this._e = L(), this.failures = t, this.failedKeys = r, this.successCount = n, this.message = H(e, t)
            }

            function X(e, t) {
                this._e = L(), this.name = "BulkError", this.failures = Object.keys(t).map((e => t[e])), this.failuresByPos = t, this.message = H(e, t)
            }
            d(z).from(Error).extend({
                stack: {
                    get: function() {
                        return this._stack || (this._stack = this.name + ": " + this.message + V(this._e, 2))
                    }
                },
                toString: function() {
                    return this.name + ": " + this.message
                }
            }), d(Q).from(z), d(X).from(z);
            var J = G.reduce(((e, t) => (e[t] = t + "Error", e)), {});
            const Z = z;
            var ee = G.reduce(((e, t) => {
                var n = t + "Error";

                function r(e, r) {
                    this._e = L(), this.name = n, e ? "string" == typeof e ? (this.message = `${e}${r?"\n "+r:""}`, this.inner = r || null) : "object" == typeof e && (this.message = `${e.name} ${e.message}`, this.inner = e) : (this.message = Y[t] || n, this.inner = null)
                }
                return d(r).from(Z), e[t] = r, e
            }), {});
            ee.Syntax = SyntaxError, ee.Type = TypeError, ee.Range = RangeError;
            var te = W.reduce(((e, t) => (e[t + "Error"] = ee[t], e)), {}),
                ne = G.reduce(((e, t) => (-1 === ["Syntax", "Type", "Range"].indexOf(t) && (e[t + "Error"] = ee[t]), e)), {});

            function re() {}

            function oe(e) {
                return e
            }

            function ie(e, t) {
                return null == e || e === oe ? t : function(n) {
                    return t(e(n))
                }
            }

            function se(e, t) {
                return function() {
                    e.apply(this, arguments), t.apply(this, arguments)
                }
            }

            function ae(e, t) {
                return e === re ? t : function() {
                    var n = e.apply(this, arguments);
                    void 0 !== n && (arguments[0] = n);
                    var r = this.onsuccess,
                        o = this.onerror;
                    this.onsuccess = null, this.onerror = null;
                    var i = t.apply(this, arguments);
                    return r && (this.onsuccess = this.onsuccess ? se(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? se(o, this.onerror) : o), void 0 !== i ? i : n
                }
            }

            function le(e, t) {
                return e === re ? t : function() {
                    e.apply(this, arguments);
                    var n = this.onsuccess,
                        r = this.onerror;
                    this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? se(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? se(r, this.onerror) : r)
                }
            }

            function ue(e, t) {
                return e === re ? t : function(n) {
                    var r = e.apply(this, arguments);
                    s(n, r);
                    var o = this.onsuccess,
                        i = this.onerror;
                    this.onsuccess = null, this.onerror = null;
                    var a = t.apply(this, arguments);
                    return o && (this.onsuccess = this.onsuccess ? se(o, this.onsuccess) : o), i && (this.onerror = this.onerror ? se(i, this.onerror) : i), void 0 === r ? void 0 === a ? void 0 : a : s(r, a)
                }
            }

            function ce(e, t) {
                return e === re ? t : function() {
                    return !1 !== t.apply(this, arguments) && e.apply(this, arguments)
                }
            }

            function he(e, t) {
                return e === re ? t : function() {
                    var n = e.apply(this, arguments);
                    if (n && "function" == typeof n.then) {
                        for (var r = this, o = arguments.length, i = new Array(o); o--;) i[o] = arguments[o];
                        return n.then((function() {
                            return t.apply(r, i)
                        }))
                    }
                    return t.apply(this, arguments)
                }
            }
            ne.ModifyError = Q, ne.DexieError = z, ne.BulkError = X;
            var fe = {};
            const [de, pe, ye] = "undefined" == typeof Promise ? [] : (() => {
                let e = Promise.resolve();
                if ("undefined" == typeof crypto || !crypto.subtle) return [e, a(e), e];
                const t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
                return [t, a(t), e]
            })(), me = pe && pe.then, be = de && de.constructor, ve = !!ye;
            var ge = !1,
                we = ye ? () => {
                    ye.then(Le)
                } : r.setImmediate ? setImmediate.bind(null, Le) : r.MutationObserver ? () => {
                    var e = document.createElement("div");
                    new MutationObserver((() => {
                        Le(), e = null
                    })).observe(e, {
                        attributes: !0
                    }), e.setAttribute("i", "1")
                } : () => {
                    setTimeout(Le, 0)
                },
                _e = function(e, t) {
                    Ke.push([e, t]), ke && (we(), ke = !1)
                },
                xe = !0,
                ke = !0,
                Oe = [],
                Ee = [],
                Pe = null,
                je = oe,
                Se = {
                    id: "global",
                    global: !0,
                    ref: 0,
                    unhandleds: [],
                    onunhandled: dt,
                    pgp: !1,
                    env: {},
                    finalize: function() {
                        this.unhandleds.forEach((e => {
                            try {
                                dt(e[0], e[1])
                            } catch (e) {}
                        }))
                    }
                },
                Ae = Se,
                Ke = [],
                Ce = 0,
                Te = [];

            function Ie(e) {
                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                this._listeners = [], this.onuncatched = re, this._lib = !1;
                var t = this._PSD = Ae;
                if (M && (this._stackHolder = L(), this._prev = null, this._numPrev = 0), "function" != typeof e) {
                    if (e !== fe) throw new TypeError("Not a function");
                    return this._state = arguments[1], this._value = arguments[2], void(!1 === this._state && Fe(this, this._value))
                }
                this._state = null, this._value = null, ++t.ref, Be(this, e)
            }
            const De = {
                get: function() {
                    var e = Ae,
                        t = Ze;

                    function n(n, r) {
                        var o = !e.global && (e !== Ae || t !== Ze);
                        const i = o && !rt();
                        var s = new Ie(((t, s) => {
                            Me(this, new Re(ht(n, e, o, i), ht(r, e, o, i), t, s, e))
                        }));
                        return M && Ue(s, this), s
                    }
                    return n.prototype = fe, n
                },
                set: function(e) {
                    f(this, "then", e && e.prototype === fe ? De : {
                        get: function() {
                            return e
                        },
                        set: De.set
                    })
                }
            };

            function Re(e, t, n, r, o) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r, this.psd = o
            }

            function Be(e, t) {
                try {
                    t((t => {
                        if (null === e._state) {
                            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                            var n = e._lib && Ve();
                            t && "function" == typeof t.then ? Be(e, ((e, n) => {
                                t instanceof Ie ? t._then(e, n) : t.then(e, n)
                            })) : (e._state = !0, e._value = t, Ne(e)), n && We()
                        }
                    }), Fe.bind(null, e))
                } catch (t) {
                    Fe(e, t)
                }
            }

            function Fe(e, t) {
                if (Ee.push(t), null === e._state) {
                    var n = e._lib && Ve();
                    t = je(t), e._state = !1, e._value = t, M && null !== t && "object" == typeof t && !t._promise && function(e, t, n) {
                            try {
                                e.apply(null, void 0)
                            } catch (e) {}
                        }((() => {
                            var n = y(t, "stack");
                            t._promise = e, f(t, "stack", {
                                get: () => ge ? n && (n.get ? n.get.apply(t) : n.value) : e.stack
                            })
                        })),
                        function(e) {
                            Oe.some((t => t._value === e._value)) || Oe.push(e)
                        }(e), Ne(e), n && We()
                }
            }

            function Ne(e) {
                var t = e._listeners;
                e._listeners = [];
                for (var n = 0, r = t.length; n < r; ++n) Me(e, t[n]);
                var o = e._PSD;
                --o.ref || o.finalize(), 0 === Ce && (++Ce, _e((() => {
                    0 == --Ce && Ge()
                }), []))
            }

            function Me(e, t) {
                if (null !== e._state) {
                    var n = e._state ? t.onFulfilled : t.onRejected;
                    if (null === n) return (e._state ? t.resolve : t.reject)(e._value);
                    ++t.psd.ref, ++Ce, _e(qe, [n, e, t])
                } else e._listeners.push(t)
            }

            function qe(e, t, n) {
                try {
                    Pe = t;
                    var r, o = t._value;
                    t._state ? r = e(o) : (Ee.length && (Ee = []), r = e(o), -1 === Ee.indexOf(o) && function(e) {
                        for (var t = Oe.length; t;)
                            if (Oe[--t]._value === e._value) return void Oe.splice(t, 1)
                    }(t)), n.resolve(r)
                } catch (e) {
                    n.reject(e)
                } finally {
                    Pe = null, 0 == --Ce && Ge(), --n.psd.ref || n.psd.finalize()
                }
            }

            function $e(e, t, n) {
                if (t.length === n) return t;
                var r = "";
                if (!1 === e._state) {
                    var o, i, s = e._value;
                    null != s ? (o = s.name || "Error", i = s.message || s, r = V(s, 0)) : (o = s, i = ""), t.push(o + (i ? ": " + i : "") + r)
                }
                return M && ((r = V(e._stackHolder, 2)) && -1 === t.indexOf(r) && t.push(r), e._prev && $e(e._prev, t, n)), t
            }

            function Ue(e, t) {
                var n = t ? t._numPrev + 1 : 0;
                n < 100 && (e._prev = t, e._numPrev = n)
            }

            function Le() {
                Ve() && We()
            }

            function Ve() {
                var e = xe;
                return xe = !1, ke = !1, e
            }

            function We() {
                var e, t, n;
                do {
                    for (; Ke.length > 0;)
                        for (e = Ke, Ke = [], n = e.length, t = 0; t < n; ++t) {
                            var r = e[t];
                            r[0].apply(null, r[1])
                        }
                } while (Ke.length > 0);
                xe = !0, ke = !0
            }

            function Ge() {
                var e = Oe;
                Oe = [], e.forEach((e => {
                    e._PSD.onunhandled.call(null, e._value, e)
                }));
                for (var t = Te.slice(0), n = t.length; n;) t[--n]()
            }

            function Ye(e) {
                return new Ie(fe, !1, e)
            }

            function ze(e, t) {
                var n = Ae;
                return function() {
                    var r = Ve(),
                        o = Ae;
                    try {
                        return at(n, !0), e.apply(this, arguments)
                    } catch (e) {
                        t && t(e)
                    } finally {
                        at(o, !1), r && We()
                    }
                }
            }
            c(Ie.prototype, {
                then: De,
                _then: function(e, t) {
                    Me(this, new Re(null, null, e, t, Ae))
                },
                catch: function(e) {
                    if (1 === arguments.length) return this.then(null, e);
                    var t = arguments[0],
                        n = arguments[1];
                    return "function" == typeof t ? this.then(null, (e => e instanceof t ? n(e) : Ye(e))) : this.then(null, (e => e && e.name === t ? n(e) : Ye(e)))
                },
                finally: function(e) {
                    return this.then((t => (e(), t)), (t => (e(), Ye(t))))
                },
                stack: {
                    get: function() {
                        if (this._stack) return this._stack;
                        try {
                            ge = !0;
                            var e = $e(this, [], 20).join("\nFrom previous: ");
                            return null !== this._state && (this._stack = e), e
                        } finally {
                            ge = !1
                        }
                    }
                },
                timeout: function(e, t) {
                    return e < 1 / 0 ? new Ie(((n, r) => {
                        var o = setTimeout((() => r(new ee.Timeout(t))), e);
                        this.then(n, r).finally(clearTimeout.bind(null, o))
                    })) : this
                }
            }), "undefined" != typeof Symbol && Symbol.toStringTag && f(Ie.prototype, Symbol.toStringTag, "Dexie.Promise"), Se.env = lt(), c(Ie, {
                all: function() {
                    var e = F.apply(null, arguments).map(ot);
                    return new Ie((function(t, n) {
                        0 === e.length && t([]);
                        var r = e.length;
                        e.forEach(((o, i) => Ie.resolve(o).then((n => {
                            e[i] = n, --r || t(e)
                        }), n)))
                    }))
                },
                resolve: e => {
                    if (e instanceof Ie) return e;
                    if (e && "function" == typeof e.then) return new Ie(((t, n) => {
                        e.then(t, n)
                    }));
                    var t = new Ie(fe, !0, e);
                    return Ue(t, Pe), t
                },
                reject: Ye,
                race: function() {
                    var e = F.apply(null, arguments).map(ot);
                    return new Ie(((t, n) => {
                        e.map((e => Ie.resolve(e).then(t, n)))
                    }))
                },
                PSD: {
                    get: () => Ae,
                    set: e => Ae = e
                },
                totalEchoes: {
                    get: () => Ze
                },
                newPSD: tt,
                usePSD: ut,
                scheduler: {
                    get: () => _e,
                    set: e => {
                        _e = e
                    }
                },
                rejectionMapper: {
                    get: () => je,
                    set: e => {
                        je = e
                    }
                },
                follow: (e, t) => new Ie(((n, r) => tt(((t, n) => {
                    var r = Ae;
                    r.unhandleds = [], r.onunhandled = n, r.finalize = se((function() {
                        ! function(e) {
                            Te.push((function t() {
                                e(), Te.splice(Te.indexOf(t), 1)
                            })), ++Ce, _e((() => {
                                0 == --Ce && Ge()
                            }), [])
                        }((() => {
                            0 === this.unhandleds.length ? t() : n(this.unhandleds[0])
                        }))
                    }), r.finalize), e()
                }), t, n, r)))
            }), be && (be.allSettled && f(Ie, "allSettled", (function() {
                const e = F.apply(null, arguments).map(ot);
                return new Ie((t => {
                    0 === e.length && t([]);
                    let n = e.length;
                    const r = new Array(n);
                    e.forEach(((e, o) => Ie.resolve(e).then((e => r[o] = {
                        status: "fulfilled",
                        value: e
                    }), (e => r[o] = {
                        status: "rejected",
                        reason: e
                    })).then((() => --n || t(r)))))
                }))
            })), be.any && "undefined" != typeof AggregateError && f(Ie, "any", (function() {
                const e = F.apply(null, arguments).map(ot);
                return new Ie(((t, n) => {
                    0 === e.length && n(new AggregateError([]));
                    let r = e.length;
                    const o = new Array(r);
                    e.forEach(((e, i) => Ie.resolve(e).then((e => t(e)), (e => {
                        o[i] = e, --r || n(new AggregateError(o))
                    }))))
                }))
            })));
            const He = {
                awaits: 0,
                echoes: 0,
                id: 0
            };
            var Qe = 0,
                Xe = [],
                Je = 0,
                Ze = 0,
                et = 0;

            function tt(e, t, n, r) {
                var o = Ae,
                    i = Object.create(o);
                i.parent = o, i.ref = 0, i.global = !1, i.id = ++et;
                var a = Se.env;
                i.env = ve ? {
                    Promise: Ie,
                    PromiseProp: {
                        value: Ie,
                        configurable: !0,
                        writable: !0
                    },
                    all: Ie.all,
                    race: Ie.race,
                    allSettled: Ie.allSettled,
                    any: Ie.any,
                    resolve: Ie.resolve,
                    reject: Ie.reject,
                    nthen: ft(a.nthen, i),
                    gthen: ft(a.gthen, i)
                } : {}, t && s(i, t), ++o.ref, i.finalize = function() {
                    --this.parent.ref || this.parent.finalize()
                };
                var l = ut(i, e, n, r);
                return 0 === i.ref && i.finalize(), l
            }

            function nt() {
                return He.id || (He.id = ++Qe), ++He.awaits, He.echoes += 100, He.id
            }

            function rt() {
                return !!He.awaits && (0 == --He.awaits && (He.id = 0), He.echoes = 100 * He.awaits, !0)
            }

            function ot(e) {
                return He.echoes && e && e.constructor === be ? (nt(), e.then((e => (rt(), e)), (e => (rt(), pt(e))))) : e
            }

            function it(e) {
                ++Ze, He.echoes && 0 != --He.echoes || (He.echoes = He.id = 0), Xe.push(Ae), at(e, !0)
            }

            function st() {
                var e = Xe[Xe.length - 1];
                Xe.pop(), at(e, !1)
            }

            function at(e, t) {
                var n = Ae;
                if ((t ? !He.echoes || Je++ && e === Ae : !Je || --Je && e === Ae) || ct(t ? it.bind(null, e) : st), e !== Ae && (Ae = e, n === Se && (Se.env = lt()), ve)) {
                    var o = Se.env.Promise,
                        i = e.env;
                    pe.then = i.nthen, o.prototype.then = i.gthen, (n.global || e.global) && (Object.defineProperty(r, "Promise", i.PromiseProp), o.all = i.all, o.race = i.race, o.resolve = i.resolve, o.reject = i.reject, i.allSettled && (o.allSettled = i.allSettled), i.any && (o.any = i.any))
                }
            }

            function lt() {
                var e = r.Promise;
                return ve ? {
                    Promise: e,
                    PromiseProp: Object.getOwnPropertyDescriptor(r, "Promise"),
                    all: e.all,
                    race: e.race,
                    allSettled: e.allSettled,
                    any: e.any,
                    resolve: e.resolve,
                    reject: e.reject,
                    nthen: pe.then,
                    gthen: e.prototype.then
                } : {}
            }

            function ut(e, t, n, r, o) {
                var i = Ae;
                try {
                    return at(e, !0), t(n, r, o)
                } finally {
                    at(i, !1)
                }
            }

            function ct(e) {
                me.call(de, e)
            }

            function ht(e, t, n, r) {
                return "function" != typeof e ? e : function() {
                    var o = Ae;
                    n && nt(), at(t, !0);
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        at(o, !1), r && ct(rt)
                    }
                }
            }

            function ft(e, t) {
                return function(n, r) {
                    return e.call(this, ht(n, t), ht(r, t))
                }
            }

            function dt(e, t) {
                var n;
                try {
                    n = t.onuncatched(e)
                } catch (e) {}
                if (!1 !== n) try {
                    var o, i = {
                        promise: t,
                        reason: e
                    };
                    if (r.document && document.createEvent ? ((o = document.createEvent("Event")).initEvent("unhandledrejection", !0, !0), s(o, i)) : r.CustomEvent && s(o = new CustomEvent("unhandledrejection", {
                            detail: i
                        }), i), o && r.dispatchEvent && (dispatchEvent(o), !r.PromiseRejectionEvent && r.onunhandledrejection)) try {
                        r.onunhandledrejection(o)
                    } catch (e) {}
                    M && o && !o.defaultPrevented && console.warn(`Unhandled rejection: ${e.stack||e}`)
                } catch (e) {}
            } - 1 === ("" + me).indexOf("[native code]") && (nt = rt = re);
            var pt = Ie.reject;

            function yt(e, t, n, r) {
                if (e.idbdb && (e._state.openComplete || Ae.letThrough || e._vip)) {
                    var o = e._createTransaction(t, n, e._dbSchema);
                    try {
                        o.create(), e._state.PR1398_maxLoop = 3
                    } catch (o) {
                        return o.name === J.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e._close(), e.open().then((() => yt(e, t, n, r)))) : pt(o)
                    }
                    return o._promise(t, ((e, t) => tt((() => (Ae.trans = o, r(e, t, o)))))).then((e => o._completion.then((() => e))))
                }
                if (e._state.openComplete) return pt(new ee.DatabaseClosed(e._state.dbOpenError));
                if (!e._state.isBeingOpened) {
                    if (!e._options.autoOpen) return pt(new ee.DatabaseClosed);
                    e.open().catch(re)
                }
                return e._state.dbReadyPromise.then((() => yt(e, t, n, r)))
            }
            const mt = String.fromCharCode(65535),
                bt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
                vt = [],
                gt = "undefined" != typeof navigator && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
                wt = gt,
                _t = gt,
                xt = e => !/(dexie\.js|dexie\.min\.js)/.test(e);

            function kt(e, t) {
                return e ? t ? function() {
                    return e.apply(this, arguments) && t.apply(this, arguments)
                } : e : t
            }
            const Ot = {
                type: 3,
                lower: -1 / 0,
                lowerOpen: !1,
                upper: [
                    []
                ],
                upperOpen: !1
            };

            function Et(e) {
                return "string" != typeof e || /\./.test(e) ? e => e : t => (void 0 === t[e] && e in t && delete(t = K(t))[e], t)
            }
            class Pt {
                _trans(e, t, n) {
                    const r = this._tx || Ae.trans,
                        o = this.name;

                    function i(e, n, r) {
                        if (!r.schema[o]) throw new ee.NotFound("Table " + o + " not part of transaction");
                        return t(r.idbtrans, r)
                    }
                    const s = Ve();
                    try {
                        return r && r.db === this.db ? r === Ae.trans ? r._promise(e, i, n) : tt((() => r._promise(e, i, n)), {
                            trans: r,
                            transless: Ae.transless || Ae
                        }) : yt(this.db, e, [this.name], i)
                    } finally {
                        s && We()
                    }
                }
                get(e, t) {
                    return e && e.constructor === Object ? this.where(e).first(t) : this._trans("readonly", (t => this.core.get({
                        trans: t,
                        key: e
                    }).then((e => this.hook.reading.fire(e))))).then(t)
                }
                where(e) {
                    if ("string" == typeof e) return new this.db.WhereClause(this, e);
                    if (i(e)) return new this.db.WhereClause(this, `[${e.join("+")}]`);
                    const t = o(e);
                    if (1 === t.length) return this.where(t[0]).equals(e[t[0]]);
                    const n = this.schema.indexes.concat(this.schema.primKey).filter((e => e.compound && t.every((t => e.keyPath.indexOf(t) >= 0)) && e.keyPath.every((e => t.indexOf(e) >= 0))))[0];
                    if (n && this.db._maxKey !== mt) return this.where(n.name).equals(n.keyPath.map((t => e[t])));
                    !n && M && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${t.join("+")}]`);
                    const {
                        idxByName: r
                    } = this.schema, s = this.db._deps.indexedDB;

                    function a(e, t) {
                        try {
                            return 0 === s.cmp(e, t)
                        } catch (e) {
                            return !1
                        }
                    }
                    const [l, u] = t.reduce((([t, n], o) => {
                        const s = r[o],
                            l = e[o];
                        return [t || s, t || !s ? kt(n, s && s.multi ? e => {
                            const t = x(e, o);
                            return i(t) && t.some((e => a(l, e)))
                        } : e => a(l, x(e, o))) : n]
                    }), [null, null]);
                    return l ? this.where(l.name).equals(e[l.keyPath]).filter(u) : n ? this.filter(u) : this.where(t).equals("")
                }
                filter(e) {
                    return this.toCollection().and(e)
                }
                count(e) {
                    return this.toCollection().count(e)
                }
                offset(e) {
                    return this.toCollection().offset(e)
                }
                limit(e) {
                    return this.toCollection().limit(e)
                }
                each(e) {
                    return this.toCollection().each(e)
                }
                toArray(e) {
                    return this.toCollection().toArray(e)
                }
                toCollection() {
                    return new this.db.Collection(new this.db.WhereClause(this))
                }
                orderBy(e) {
                    return new this.db.Collection(new this.db.WhereClause(this, i(e) ? `[${e.join("+")}]` : e))
                }
                reverse() {
                    return this.toCollection().reverse()
                }
                mapToClass(e) {
                    this.schema.mappedClass = e;
                    const t = t => {
                        if (!t) return t;
                        const n = Object.create(e.prototype);
                        for (var r in t)
                            if (u(t, r)) try {
                                n[r] = t[r]
                            } catch (e) {}
                        return n
                    };
                    return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = t, this.hook("reading", t), e
                }
                defineClass() {
                    return this.mapToClass((function(e) {
                        s(this, e)
                    }))
                }
                add(e, t) {
                    const {
                        auto: n,
                        keyPath: r
                    } = this.schema.primKey;
                    let o = e;
                    return r && n && (o = Et(r)(e)), this._trans("readwrite", (e => this.core.mutate({
                        trans: e,
                        type: "add",
                        keys: null != t ? [t] : null,
                        values: [o]
                    }))).then((e => e.numFailures ? Ie.reject(e.failures[0]) : e.lastResult)).then((t => {
                        if (r) try {
                            k(e, r, t)
                        } catch (e) {}
                        return t
                    }))
                }
                update(e, t) {
                    if ("object" != typeof e || i(e)) return this.where(":id").equals(e).modify(t); {
                        const n = x(e, this.schema.primKey.keyPath);
                        if (void 0 === n) return pt(new ee.InvalidArgument("Given object does not contain its primary key"));
                        try {
                            "function" != typeof t ? o(t).forEach((n => {
                                k(e, n, t[n])
                            })) : t(e, {
                                value: e,
                                primKey: n
                            })
                        } catch (e) {}
                        return this.where(":id").equals(n).modify(t)
                    }
                }
                put(e, t) {
                    const {
                        auto: n,
                        keyPath: r
                    } = this.schema.primKey;
                    let o = e;
                    return r && n && (o = Et(r)(e)), this._trans("readwrite", (e => this.core.mutate({
                        trans: e,
                        type: "put",
                        values: [o],
                        keys: null != t ? [t] : null
                    }))).then((e => e.numFailures ? Ie.reject(e.failures[0]) : e.lastResult)).then((t => {
                        if (r) try {
                            k(e, r, t)
                        } catch (e) {}
                        return t
                    }))
                }
                delete(e) {
                    return this._trans("readwrite", (t => this.core.mutate({
                        trans: t,
                        type: "delete",
                        keys: [e]
                    }))).then((e => e.numFailures ? Ie.reject(e.failures[0]) : void 0))
                }
                clear() {
                    return this._trans("readwrite", (e => this.core.mutate({
                        trans: e,
                        type: "deleteRange",
                        range: Ot
                    }))).then((e => e.numFailures ? Ie.reject(e.failures[0]) : void 0))
                }
                bulkGet(e) {
                    return this._trans("readonly", (t => this.core.getMany({
                        keys: e,
                        trans: t
                    }).then((e => e.map((e => this.hook.reading.fire(e)))))))
                }
                bulkAdd(e, t, n) {
                    const r = Array.isArray(t) ? t : void 0,
                        o = (n = n || (r ? void 0 : t)) ? n.allKeys : void 0;
                    return this._trans("readwrite", (t => {
                        const {
                            auto: n,
                            keyPath: i
                        } = this.schema.primKey;
                        if (i && r) throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                        if (r && r.length !== e.length) throw new ee.InvalidArgument("Arguments objects and keys must have the same length");
                        const s = e.length;
                        let a = i && n ? e.map(Et(i)) : e;
                        return this.core.mutate({
                            trans: t,
                            type: "add",
                            keys: r,
                            values: a,
                            wantResults: o
                        }).then((({
                            numFailures: e,
                            results: t,
                            lastResult: n,
                            failures: r
                        }) => {
                            if (0 === e) return o ? t : n;
                            throw new X(`${this.name}.bulkAdd(): ${e} of ${s} operations failed`, r)
                        }))
                    }))
                }
                bulkPut(e, t, n) {
                    const r = Array.isArray(t) ? t : void 0,
                        o = (n = n || (r ? void 0 : t)) ? n.allKeys : void 0;
                    return this._trans("readwrite", (t => {
                        const {
                            auto: n,
                            keyPath: i
                        } = this.schema.primKey;
                        if (i && r) throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                        if (r && r.length !== e.length) throw new ee.InvalidArgument("Arguments objects and keys must have the same length");
                        const s = e.length;
                        let a = i && n ? e.map(Et(i)) : e;
                        return this.core.mutate({
                            trans: t,
                            type: "put",
                            keys: r,
                            values: a,
                            wantResults: o
                        }).then((({
                            numFailures: e,
                            results: t,
                            lastResult: n,
                            failures: r
                        }) => {
                            if (0 === e) return o ? t : n;
                            throw new X(`${this.name}.bulkPut(): ${e} of ${s} operations failed`, r)
                        }))
                    }))
                }
                bulkDelete(e) {
                    const t = e.length;
                    return this._trans("readwrite", (t => this.core.mutate({
                        trans: t,
                        type: "delete",
                        keys: e
                    }))).then((({
                        numFailures: e,
                        lastResult: n,
                        failures: r
                    }) => {
                        if (0 === e) return n;
                        throw new X(`${this.name}.bulkDelete(): ${e} of ${t} operations failed`, r)
                    }))
                }
            }

            function jt(e) {
                var t = {},
                    n = function(n, r) {
                        if (r) {
                            for (var o = arguments.length, i = new Array(o - 1); --o;) i[o - 1] = arguments[o];
                            return t[n].subscribe.apply(null, i), e
                        }
                        if ("string" == typeof n) return t[n]
                    };
                n.addEventType = a;
                for (var r = 1, s = arguments.length; r < s; ++r) a(arguments[r]);
                return n;

                function a(e, r, o) {
                    if ("object" == typeof e) return l(e);
                    r || (r = ce), o || (o = re);
                    var i = {
                        subscribers: [],
                        fire: o,
                        subscribe: function(e) {
                            -1 === i.subscribers.indexOf(e) && (i.subscribers.push(e), i.fire = r(i.fire, e))
                        },
                        unsubscribe: function(e) {
                            i.subscribers = i.subscribers.filter((function(t) {
                                return t !== e
                            })), i.fire = i.subscribers.reduce(r, o)
                        }
                    };
                    return t[e] = n[e] = i, i
                }

                function l(e) {
                    o(e).forEach((function(t) {
                        var n = e[t];
                        if (i(n)) a(t, e[t][0], e[t][1]);
                        else {
                            if ("asap" !== n) throw new ee.InvalidArgument("Invalid event config");
                            var r = a(t, oe, (function() {
                                for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                                r.subscribers.forEach((function(e) {
                                    w((function() {
                                        e.apply(null, t)
                                    }))
                                }))
                            }))
                        }
                    }))
                }
            }

            function St(e, t) {
                return d(t).from({
                    prototype: e
                }), t
            }

            function At(e, t) {
                return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter)
            }

            function Kt(e, t) {
                e.filter = kt(e.filter, t)
            }

            function Ct(e, t, n) {
                var r = e.replayFilter;
                e.replayFilter = r ? () => kt(r(), t()) : t, e.justLimit = n && !r
            }

            function Tt(e, t) {
                if (e.isPrimKey) return t.primaryKey;
                const n = t.getIndexByKeyPath(e.index);
                if (!n) throw new ee.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
                return n
            }

            function It(e, t, n) {
                const r = Tt(e, t.schema);
                return t.openCursor({
                    trans: n,
                    values: !e.keysOnly,
                    reverse: "prev" === e.dir,
                    unique: !!e.unique,
                    query: {
                        index: r,
                        range: e.range
                    }
                })
            }

            function Dt(e, t, n, r) {
                const o = e.replayFilter ? kt(e.filter, e.replayFilter()) : e.filter;
                if (e.or) {
                    const i = {},
                        s = (e, n, r) => {
                            if (!o || o(n, r, (e => n.stop(e)), (e => n.fail(e)))) {
                                var s = n.primaryKey,
                                    a = "" + s;
                                "[object ArrayBuffer]" === a && (a = "" + new Uint8Array(s)), u(i, a) || (i[a] = !0, t(e, n, r))
                            }
                        };
                    return Promise.all([e.or._iterate(s, n), Rt(It(e, r, n), e.algorithm, s, !e.keysOnly && e.valueMapper)])
                }
                return Rt(It(e, r, n), kt(e.algorithm, o), t, !e.keysOnly && e.valueMapper)
            }

            function Rt(e, t, n, r) {
                var o = ze(r ? (e, t, o) => n(r(e), t, o) : n);
                return e.then((e => {
                    if (e) return e.start((() => {
                        var n = () => e.continue();
                        t && !t(e, (e => n = e), (t => {
                            e.stop(t), n = re
                        }), (t => {
                            e.fail(t), n = re
                        })) || o(e.value, e, (e => n = e)), n()
                    }))
                }))
            }

            function Bt(e, t) {
                try {
                    const n = Ft(e),
                        r = Ft(t);
                    if (n !== r) return "Array" === n ? 1 : "Array" === r ? -1 : "binary" === n ? 1 : "binary" === r ? -1 : "string" === n ? 1 : "string" === r ? -1 : "Date" === n ? 1 : "Date" !== r ? NaN : -1;
                    switch (n) {
                        case "number":
                        case "Date":
                        case "string":
                            return e > t ? 1 : e < t ? -1 : 0;
                        case "binary":
                            return function(e, t) {
                                const n = e.length,
                                    r = t.length,
                                    o = n < r ? n : r;
                                for (let n = 0; n < o; ++n)
                                    if (e[n] !== t[n]) return e[n] < t[n] ? -1 : 1;
                                return n === r ? 0 : n < r ? -1 : 1
                            }(Nt(e), Nt(t));
                        case "Array":
                            return function(e, t) {
                                const n = e.length,
                                    r = t.length,
                                    o = n < r ? n : r;
                                for (let n = 0; n < o; ++n) {
                                    const r = Bt(e[n], t[n]);
                                    if (0 !== r) return r
                                }
                                return n === r ? 0 : n < r ? -1 : 1
                            }(e, t)
                    }
                } catch (e) {}
                return NaN
            }

            function Ft(e) {
                const t = typeof e;
                if ("object" !== t) return t;
                if (ArrayBuffer.isView(e)) return "binary";
                const n = I(e);
                return "ArrayBuffer" === n ? "binary" : n
            }

            function Nt(e) {
                return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e)
            }
            class Mt {
                _read(e, t) {
                    var n = this._ctx;
                    return n.error ? n.table._trans(null, pt.bind(null, n.error)) : n.table._trans("readonly", e).then(t)
                }
                _write(e) {
                    var t = this._ctx;
                    return t.error ? t.table._trans(null, pt.bind(null, t.error)) : t.table._trans("readwrite", e, "locked")
                }
                _addAlgorithm(e) {
                    var t = this._ctx;
                    t.algorithm = kt(t.algorithm, e)
                }
                _iterate(e, t) {
                    return Dt(this._ctx, e, t, this._ctx.table.core)
                }
                clone(e) {
                    var t = Object.create(this.constructor.prototype),
                        n = Object.create(this._ctx);
                    return e && s(n, e), t._ctx = n, t
                }
                raw() {
                    return this._ctx.valueMapper = null, this
                }
                each(e) {
                    var t = this._ctx;
                    return this._read((n => Dt(t, e, n, t.table.core)))
                }
                count(e) {
                    return this._read((e => {
                        const t = this._ctx,
                            n = t.table.core;
                        if (At(t, !0)) return n.count({
                            trans: e,
                            query: {
                                index: Tt(t, n.schema),
                                range: t.range
                            }
                        }).then((e => Math.min(e, t.limit)));
                        var r = 0;
                        return Dt(t, (() => (++r, !1)), e, n).then((() => r))
                    })).then(e)
                }
                sortBy(e, t) {
                    const n = e.split(".").reverse(),
                        r = n[0],
                        o = n.length - 1;

                    function i(e, t) {
                        return t ? i(e[n[t]], t - 1) : e[r]
                    }
                    var s = "next" === this._ctx.dir ? 1 : -1;

                    function a(e, t) {
                        var n = i(e, o),
                            r = i(t, o);
                        return n < r ? -s : n > r ? s : 0
                    }
                    return this.toArray((function(e) {
                        return e.sort(a)
                    })).then(t)
                }
                toArray(e) {
                    return this._read((e => {
                        var t = this._ctx;
                        if ("next" === t.dir && At(t, !0) && t.limit > 0) {
                            const {
                                valueMapper: n
                            } = t, r = Tt(t, t.table.core.schema);
                            return t.table.core.query({
                                trans: e,
                                limit: t.limit,
                                values: !0,
                                query: {
                                    index: r,
                                    range: t.range
                                }
                            }).then((({
                                result: e
                            }) => n ? e.map(n) : e))
                        } {
                            const n = [];
                            return Dt(t, (e => n.push(e)), e, t.table.core).then((() => n))
                        }
                    }), e)
                }
                offset(e) {
                    var t = this._ctx;
                    return e <= 0 || (t.offset += e, At(t) ? Ct(t, (() => {
                        var t = e;
                        return (e, n) => 0 === t || (1 === t ? (--t, !1) : (n((() => {
                            e.advance(t), t = 0
                        })), !1))
                    })) : Ct(t, (() => {
                        var t = e;
                        return () => --t < 0
                    }))), this
                }
                limit(e) {
                    return this._ctx.limit = Math.min(this._ctx.limit, e), Ct(this._ctx, (() => {
                        var t = e;
                        return function(e, n, r) {
                            return --t <= 0 && n(r), t >= 0
                        }
                    }), !0), this
                }
                until(e, t) {
                    return Kt(this._ctx, (function(n, r, o) {
                        return !e(n.value) || (r(o), t)
                    })), this
                }
                first(e) {
                    return this.limit(1).toArray((function(e) {
                        return e[0]
                    })).then(e)
                }
                last(e) {
                    return this.reverse().first(e)
                }
                filter(e) {
                    var t, n;
                    return Kt(this._ctx, (function(t) {
                        return e(t.value)
                    })), t = this._ctx, n = e, t.isMatch = kt(t.isMatch, n), this
                }
                and(e) {
                    return this.filter(e)
                }
                or(e) {
                    return new this.db.WhereClause(this._ctx.table, e, this)
                }
                reverse() {
                    return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this
                }
                desc() {
                    return this.reverse()
                }
                eachKey(e) {
                    var t = this._ctx;
                    return t.keysOnly = !t.isMatch, this.each((function(t, n) {
                        e(n.key, n)
                    }))
                }
                eachUniqueKey(e) {
                    return this._ctx.unique = "unique", this.eachKey(e)
                }
                eachPrimaryKey(e) {
                    var t = this._ctx;
                    return t.keysOnly = !t.isMatch, this.each((function(t, n) {
                        e(n.primaryKey, n)
                    }))
                }
                keys(e) {
                    var t = this._ctx;
                    t.keysOnly = !t.isMatch;
                    var n = [];
                    return this.each((function(e, t) {
                        n.push(t.key)
                    })).then((function() {
                        return n
                    })).then(e)
                }
                primaryKeys(e) {
                    var t = this._ctx;
                    if ("next" === t.dir && At(t, !0) && t.limit > 0) return this._read((e => {
                        var n = Tt(t, t.table.core.schema);
                        return t.table.core.query({
                            trans: e,
                            values: !1,
                            limit: t.limit,
                            query: {
                                index: n,
                                range: t.range
                            }
                        })
                    })).then((({
                        result: e
                    }) => e)).then(e);
                    t.keysOnly = !t.isMatch;
                    var n = [];
                    return this.each((function(e, t) {
                        n.push(t.primaryKey)
                    })).then((function() {
                        return n
                    })).then(e)
                }
                uniqueKeys(e) {
                    return this._ctx.unique = "unique", this.keys(e)
                }
                firstKey(e) {
                    return this.limit(1).keys((function(e) {
                        return e[0]
                    })).then(e)
                }
                lastKey(e) {
                    return this.reverse().firstKey(e)
                }
                distinct() {
                    var e = this._ctx,
                        t = e.index && e.table.schema.idxByName[e.index];
                    if (!t || !t.multi) return this;
                    var n = {};
                    return Kt(this._ctx, (function(e) {
                        var t = e.primaryKey.toString(),
                            r = u(n, t);
                        return n[t] = !0, !r
                    })), this
                }
                modify(e) {
                    var t = this._ctx;
                    return this._write((n => {
                        var r;
                        if ("function" == typeof e) r = e;
                        else {
                            var i = o(e),
                                s = i.length;
                            r = function(t) {
                                for (var n = !1, r = 0; r < s; ++r) {
                                    var o = i[r],
                                        a = e[o];
                                    x(t, o) !== a && (k(t, o, a), n = !0)
                                }
                                return n
                            }
                        }
                        const a = t.table.core,
                            {
                                outbound: l,
                                extractKey: u
                            } = a.schema.primaryKey,
                            c = this.db._options.modifyChunkSize || 200,
                            h = [];
                        let f = 0;
                        const d = [],
                            p = (e, t) => {
                                const {
                                    failures: n,
                                    numFailures: r
                                } = t;
                                f += e - r;
                                for (let e of o(n)) h.push(n[e])
                            };
                        return this.clone().primaryKeys().then((o => {
                            const i = s => {
                                const h = Math.min(c, o.length - s);
                                return a.getMany({
                                    trans: n,
                                    keys: o.slice(s, s + h),
                                    cache: "immutable"
                                }).then((f => {
                                    const d = [],
                                        y = [],
                                        m = l ? [] : null,
                                        b = [];
                                    for (let e = 0; e < h; ++e) {
                                        const t = f[e],
                                            n = {
                                                value: K(t),
                                                primKey: o[s + e]
                                            };
                                        !1 !== r.call(n, n.value, n) && (null == n.value ? b.push(o[s + e]) : l || 0 === Bt(u(t), u(n.value)) ? (y.push(n.value), l && m.push(o[s + e])) : (b.push(o[s + e]), d.push(n.value)))
                                    }
                                    const v = At(t) && t.limit === 1 / 0 && ("function" != typeof e || e === qt) && {
                                        index: t.index,
                                        range: t.range
                                    };
                                    return Promise.resolve(d.length > 0 && a.mutate({
                                        trans: n,
                                        type: "add",
                                        values: d
                                    }).then((e => {
                                        for (let t in e.failures) b.splice(parseInt(t), 1);
                                        p(d.length, e)
                                    }))).then((() => (y.length > 0 || v && "object" == typeof e) && a.mutate({
                                        trans: n,
                                        type: "put",
                                        keys: m,
                                        values: y,
                                        criteria: v,
                                        changeSpec: "function" != typeof e && e
                                    }).then((e => p(y.length, e))))).then((() => (b.length > 0 || v && e === qt) && a.mutate({
                                        trans: n,
                                        type: "delete",
                                        keys: b,
                                        criteria: v
                                    }).then((e => p(b.length, e))))).then((() => o.length > s + h && i(s + c)))
                                }))
                            };
                            return i(0).then((() => {
                                if (h.length > 0) throw new Q("Error modifying one or more objects", h, f, d);
                                return o.length
                            }))
                        }))
                    }))
                }
                delete() {
                    var e = this._ctx,
                        t = e.range;
                    return At(e) && (e.isPrimKey && !_t || 3 === t.type) ? this._write((n => {
                        const {
                            primaryKey: r
                        } = e.table.core.schema, o = t;
                        return e.table.core.count({
                            trans: n,
                            query: {
                                index: r,
                                range: o
                            }
                        }).then((t => e.table.core.mutate({
                            trans: n,
                            type: "deleteRange",
                            range: o
                        }).then((({
                            failures: e,
                            lastResult: n,
                            results: r,
                            numFailures: o
                        }) => {
                            if (o) throw new Q("Could not delete some values", Object.keys(e).map((t => e[t])), t - o);
                            return t - o
                        }))))
                    })) : this.modify(qt)
                }
            }
            const qt = (e, t) => t.value = null;

            function $t(e, t) {
                return e < t ? -1 : e === t ? 0 : 1
            }

            function Ut(e, t) {
                return e > t ? -1 : e === t ? 0 : 1
            }

            function Lt(e, t, n) {
                var r = e instanceof Ht ? new e.Collection(e) : e;
                return r._ctx.error = n ? new n(t) : new TypeError(t), r
            }

            function Vt(e) {
                return new e.Collection(e, (() => zt(""))).limit(0)
            }

            function Wt(e, t, n, r, o, i) {
                for (var s = Math.min(e.length, r.length), a = -1, l = 0; l < s; ++l) {
                    var u = t[l];
                    if (u !== r[l]) return o(e[l], n[l]) < 0 ? e.substr(0, l) + n[l] + n.substr(l + 1) : o(e[l], r[l]) < 0 ? e.substr(0, l) + r[l] + n.substr(l + 1) : a >= 0 ? e.substr(0, a) + t[a] + n.substr(a + 1) : null;
                    o(e[l], u) < 0 && (a = l)
                }
                return s < r.length && "next" === i ? e + n.substr(e.length) : s < e.length && "prev" === i ? e.substr(0, n.length) : a < 0 ? null : e.substr(0, a) + r[a] + n.substr(a + 1)
            }

            function Gt(e, t, n, r) {
                var o, i, s, a, l, u, c, h = n.length;
                if (!n.every((e => "string" == typeof e))) return Lt(e, "String expected.");

                function f(e) {
                    o = function(e) {
                        return "next" === e ? e => e.toUpperCase() : e => e.toLowerCase()
                    }(e), i = function(e) {
                        return "next" === e ? e => e.toLowerCase() : e => e.toUpperCase()
                    }(e), s = "next" === e ? $t : Ut;
                    var t = n.map((function(e) {
                        return {
                            lower: i(e),
                            upper: o(e)
                        }
                    })).sort((function(e, t) {
                        return s(e.lower, t.lower)
                    }));
                    a = t.map((function(e) {
                        return e.upper
                    })), l = t.map((function(e) {
                        return e.lower
                    })), u = e, c = "next" === e ? "" : r
                }
                f("next");
                var d = new e.Collection(e, (() => Yt(a[0], l[h - 1] + r)));
                d._ondirectionchange = function(e) {
                    f(e)
                };
                var p = 0;
                return d._addAlgorithm((function(e, n, r) {
                    var o = e.key;
                    if ("string" != typeof o) return !1;
                    var f = i(o);
                    if (t(f, l, p)) return !0;
                    for (var d = null, y = p; y < h; ++y) {
                        var m = Wt(o, f, a[y], l[y], s, u);
                        null === m && null === d ? p = y + 1 : (null === d || s(d, m) > 0) && (d = m)
                    }
                    return n(null !== d ? function() {
                        e.continue(d + c)
                    } : r), !1
                })), d
            }

            function Yt(e, t, n, r) {
                return {
                    type: 2,
                    lower: e,
                    upper: t,
                    lowerOpen: n,
                    upperOpen: r
                }
            }

            function zt(e) {
                return {
                    type: 1,
                    lower: e,
                    upper: e
                }
            }
            class Ht {
                get Collection() {
                    return this._ctx.table.db.Collection
                }
                between(e, t, n, r) {
                    n = !1 !== n, r = !0 === r;
                    try {
                        return this._cmp(e, t) > 0 || 0 === this._cmp(e, t) && (n || r) && (!n || !r) ? Vt(this) : new this.Collection(this, (() => Yt(e, t, !n, !r)))
                    } catch (e) {
                        return Lt(this, bt)
                    }
                }
                equals(e) {
                    return null == e ? Lt(this, bt) : new this.Collection(this, (() => zt(e)))
                }
                above(e) {
                    return null == e ? Lt(this, bt) : new this.Collection(this, (() => Yt(e, void 0, !0)))
                }
                aboveOrEqual(e) {
                    return null == e ? Lt(this, bt) : new this.Collection(this, (() => Yt(e, void 0, !1)))
                }
                below(e) {
                    return null == e ? Lt(this, bt) : new this.Collection(this, (() => Yt(void 0, e, !1, !0)))
                }
                belowOrEqual(e) {
                    return null == e ? Lt(this, bt) : new this.Collection(this, (() => Yt(void 0, e)))
                }
                startsWith(e) {
                    return "string" != typeof e ? Lt(this, "String expected.") : this.between(e, e + mt, !0, !0)
                }
                startsWithIgnoreCase(e) {
                    return "" === e ? this.startsWith(e) : Gt(this, ((e, t) => 0 === e.indexOf(t[0])), [e], mt)
                }
                equalsIgnoreCase(e) {
                    return Gt(this, ((e, t) => e === t[0]), [e], "")
                }
                anyOfIgnoreCase() {
                    var e = F.apply(B, arguments);
                    return 0 === e.length ? Vt(this) : Gt(this, ((e, t) => -1 !== t.indexOf(e)), e, "")
                }
                startsWithAnyOfIgnoreCase() {
                    var e = F.apply(B, arguments);
                    return 0 === e.length ? Vt(this) : Gt(this, ((e, t) => t.some((t => 0 === e.indexOf(t)))), e, mt)
                }
                anyOf() {
                    const e = F.apply(B, arguments);
                    let t = this._cmp;
                    try {
                        e.sort(t)
                    } catch (e) {
                        return Lt(this, bt)
                    }
                    if (0 === e.length) return Vt(this);
                    const n = new this.Collection(this, (() => Yt(e[0], e[e.length - 1])));
                    n._ondirectionchange = n => {
                        t = "next" === n ? this._ascending : this._descending, e.sort(t)
                    };
                    let r = 0;
                    return n._addAlgorithm(((n, o, i) => {
                        const s = n.key;
                        for (; t(s, e[r]) > 0;)
                            if (++r, r === e.length) return o(i), !1;
                        return 0 === t(s, e[r]) || (o((() => {
                            n.continue(e[r])
                        })), !1)
                    })), n
                }
                notEqual(e) {
                    return this.inAnyRange([
                        [-1 / 0, e],
                        [e, this.db._maxKey]
                    ], {
                        includeLowers: !1,
                        includeUppers: !1
                    })
                }
                noneOf() {
                    const e = F.apply(B, arguments);
                    if (0 === e.length) return new this.Collection(this);
                    try {
                        e.sort(this._ascending)
                    } catch (e) {
                        return Lt(this, bt)
                    }
                    const t = e.reduce(((e, t) => e ? e.concat([
                        [e[e.length - 1][1], t]
                    ]) : [
                        [-1 / 0, t]
                    ]), null);
                    return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
                        includeLowers: !1,
                        includeUppers: !1
                    })
                }
                inAnyRange(e, t) {
                    const n = this._cmp,
                        r = this._ascending,
                        o = this._descending,
                        i = this._min,
                        s = this._max;
                    if (0 === e.length) return Vt(this);
                    if (!e.every((e => void 0 !== e[0] && void 0 !== e[1] && r(e[0], e[1]) <= 0))) return Lt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", ee.InvalidArgument);
                    const a = !t || !1 !== t.includeLowers,
                        l = t && !0 === t.includeUppers;
                    let u, c = r;

                    function h(e, t) {
                        return c(e[0], t[0])
                    }
                    try {
                        u = e.reduce((function(e, t) {
                            let r = 0,
                                o = e.length;
                            for (; r < o; ++r) {
                                const o = e[r];
                                if (n(t[0], o[1]) < 0 && n(t[1], o[0]) > 0) {
                                    o[0] = i(o[0], t[0]), o[1] = s(o[1], t[1]);
                                    break
                                }
                            }
                            return r === o && e.push(t), e
                        }), []), u.sort(h)
                    } catch (e) {
                        return Lt(this, bt)
                    }
                    let f = 0;
                    const d = l ? e => r(e, u[f][1]) > 0 : e => r(e, u[f][1]) >= 0,
                        p = a ? e => o(e, u[f][0]) > 0 : e => o(e, u[f][0]) >= 0;
                    let y = d;
                    const m = new this.Collection(this, (() => Yt(u[0][0], u[u.length - 1][1], !a, !l)));
                    return m._ondirectionchange = e => {
                        "next" === e ? (y = d, c = r) : (y = p, c = o), u.sort(h)
                    }, m._addAlgorithm(((e, t, n) => {
                        for (var o = e.key; y(o);)
                            if (++f, f === u.length) return t(n), !1;
                        return !! function(e) {
                            return !d(e) && !p(e)
                        }(o) || (0 === this._cmp(o, u[f][1]) || 0 === this._cmp(o, u[f][0]) || t((() => {
                            c === r ? e.continue(u[f][0]) : e.continue(u[f][1])
                        })), !1)
                    })), m
                }
                startsWithAnyOf() {
                    const e = F.apply(B, arguments);
                    return e.every((e => "string" == typeof e)) ? 0 === e.length ? Vt(this) : this.inAnyRange(e.map((e => [e, e + mt]))) : Lt(this, "startsWithAnyOf() only works with strings")
                }
            }

            function Qt(e) {
                return ze((function(t) {
                    return Xt(t), e(t.target.error), !1
                }))
            }

            function Xt(e) {
                e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault()
            }
            const Jt = jt(null, "storagemutated");
            class Zt {
                _lock() {
                    return g(!Ae.global), ++this._reculock, 1 !== this._reculock || Ae.global || (Ae.lockOwnerFor = this), this
                }
                _unlock() {
                    if (g(!Ae.global), 0 == --this._reculock)
                        for (Ae.global || (Ae.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();) {
                            var e = this._blockedFuncs.shift();
                            try {
                                ut(e[1], e[0])
                            } catch (e) {}
                        }
                    return this
                }
                _locked() {
                    return this._reculock && Ae.lockOwnerFor !== this
                }
                create(e) {
                    if (!this.mode) return this;
                    const t = this.db.idbdb,
                        n = this.db._state.dbOpenError;
                    if (g(!this.idbtrans), !e && !t) switch (n && n.name) {
                        case "DatabaseClosedError":
                            throw new ee.DatabaseClosed(n);
                        case "MissingAPIError":
                            throw new ee.MissingAPI(n.message, n);
                        default:
                            throw new ee.OpenFailed(n)
                    }
                    if (!this.active) throw new ee.TransactionInactive;
                    return g(null === this._completion._state), (e = this.idbtrans = e || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
                        durability: this.chromeTransactionDurability
                    }) : t.transaction(this.storeNames, this.mode, {
                        durability: this.chromeTransactionDurability
                    }))).onerror = ze((t => {
                        Xt(t), this._reject(e.error)
                    })), e.onabort = ze((t => {
                        Xt(t), this.active && this._reject(new ee.Abort(e.error)), this.active = !1, this.on("abort").fire(t)
                    })), e.oncomplete = ze((() => {
                        this.active = !1, this._resolve(), "mutatedParts" in e && Jt.storagemutated.fire(e.mutatedParts)
                    })), this
                }
                _promise(e, t, n) {
                    if ("readwrite" === e && "readwrite" !== this.mode) return pt(new ee.ReadOnly("Transaction is readonly"));
                    if (!this.active) return pt(new ee.TransactionInactive);
                    if (this._locked()) return new Ie(((r, o) => {
                        this._blockedFuncs.push([() => {
                            this._promise(e, t, n).then(r, o)
                        }, Ae])
                    }));
                    if (n) return tt((() => {
                        var e = new Ie(((e, n) => {
                            this._lock();
                            const r = t(e, n, this);
                            r && r.then && r.then(e, n)
                        }));
                        return e.finally((() => this._unlock())), e._lib = !0, e
                    }));
                    var r = new Ie(((e, n) => {
                        var r = t(e, n, this);
                        r && r.then && r.then(e, n)
                    }));
                    return r._lib = !0, r
                }
                _root() {
                    return this.parent ? this.parent._root() : this
                }
                waitFor(e) {
                    var t = this._root();
                    const n = Ie.resolve(e);
                    if (t._waitingFor) t._waitingFor = t._waitingFor.then((() => n));
                    else {
                        t._waitingFor = n, t._waitingQueue = [];
                        var r = t.idbtrans.objectStore(t.storeNames[0]);
                        ! function e() {
                            for (++t._spinCount; t._waitingQueue.length;) t._waitingQueue.shift()();
                            t._waitingFor && (r.get(-1 / 0).onsuccess = e)
                        }()
                    }
                    var o = t._waitingFor;
                    return new Ie(((e, r) => {
                        n.then((n => t._waitingQueue.push(ze(e.bind(null, n)))), (e => t._waitingQueue.push(ze(r.bind(null, e))))).finally((() => {
                            t._waitingFor === o && (t._waitingFor = null)
                        }))
                    }))
                }
                abort() {
                    this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new ee.Abort))
                }
                table(e) {
                    const t = this._memoizedTables || (this._memoizedTables = {});
                    if (u(t, e)) return t[e];
                    const n = this.schema[e];
                    if (!n) throw new ee.NotFound("Table " + e + " not part of transaction");
                    const r = new this.db.Table(e, n, this);
                    return r.core = this.db.core.table(e), t[e] = r, r
                }
            }

            function en(e, t, n, r, o, i, s) {
                return {
                    name: e,
                    keyPath: t,
                    unique: n,
                    multi: r,
                    auto: o,
                    compound: i,
                    src: (n && !s ? "&" : "") + (r ? "*" : "") + (o ? "++" : "") + tn(t)
                }
            }

            function tn(e) {
                return "string" == typeof e ? e : e ? "[" + [].join.call(e, "+") + "]" : ""
            }

            function nn(e, t, n) {
                return {
                    name: e,
                    primKey: t,
                    indexes: n,
                    mappedClass: null,
                    idxByName: _(n, (e => [e.name, e]))
                }
            }
            let rn = e => {
                try {
                    return e.only([
                        []
                    ]), rn = () => [
                        []
                    ], [
                        []
                    ]
                } catch (e) {
                    return rn = () => mt, mt
                }
            };

            function on(e) {
                return null == e ? () => {} : "string" == typeof e ? function(e) {
                    return 1 === e.split(".").length ? t => t[e] : t => x(t, e)
                }(e) : t => x(t, e)
            }

            function sn(e) {
                return [].slice.call(e)
            }
            let an = 0;

            function ln(e) {
                return null == e ? ":id" : "string" == typeof e ? e : `[${e.join("+")}]`
            }

            function un(e, t, n) {
                function r(e) {
                    if (3 === e.type) return null;
                    if (4 === e.type) throw new Error("Cannot convert never type to IDBKeyRange");
                    const {
                        lower: n,
                        upper: r,
                        lowerOpen: o,
                        upperOpen: i
                    } = e;
                    return void 0 === n ? void 0 === r ? null : t.upperBound(r, !!i) : void 0 === r ? t.lowerBound(n, !!o) : t.bound(n, r, !!o, !!i)
                }
                const {
                    schema: o,
                    hasGetAll: s
                } = function(e, t) {
                    const n = sn(e.objectStoreNames);
                    return {
                        schema: {
                            name: e.name,
                            tables: n.map((e => t.objectStore(e))).map((e => {
                                const {
                                    keyPath: t,
                                    autoIncrement: n
                                } = e, r = i(t), o = null == t, s = {}, a = {
                                    name: e.name,
                                    primaryKey: {
                                        name: null,
                                        isPrimaryKey: !0,
                                        outbound: o,
                                        compound: r,
                                        keyPath: t,
                                        autoIncrement: n,
                                        unique: !0,
                                        extractKey: on(t)
                                    },
                                    indexes: sn(e.indexNames).map((t => e.index(t))).map((e => {
                                        const {
                                            name: t,
                                            unique: n,
                                            multiEntry: r,
                                            keyPath: o
                                        } = e, a = {
                                            name: t,
                                            compound: i(o),
                                            keyPath: o,
                                            unique: n,
                                            multiEntry: r,
                                            extractKey: on(o)
                                        };
                                        return s[ln(o)] = a, a
                                    })),
                                    getIndexByKeyPath: e => s[ln(e)]
                                };
                                return s[":id"] = a.primaryKey, null != t && (s[ln(t)] = a.primaryKey), a
                            }))
                        },
                        hasGetAll: n.length > 0 && "getAll" in t.objectStore(n[0]) && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
                    }
                }(e, n), a = o.tables.map((e => function(e) {
                    const t = e.name;
                    return {
                        name: t,
                        schema: e,
                        mutate: function({
                            trans: e,
                            type: n,
                            keys: o,
                            values: i,
                            range: s
                        }) {
                            return new Promise(((a, l) => {
                                a = ze(a);
                                const u = e.objectStore(t),
                                    c = null == u.keyPath,
                                    h = "put" === n || "add" === n;
                                if (!h && "delete" !== n && "deleteRange" !== n) throw new Error("Invalid operation type: " + n);
                                const {
                                    length: f
                                } = o || i || {
                                    length: 1
                                };
                                if (o && i && o.length !== i.length) throw new Error("Given keys array must have same length as given values array.");
                                if (0 === f) return a({
                                    numFailures: 0,
                                    failures: {},
                                    results: [],
                                    lastResult: void 0
                                });
                                let d;
                                const p = [],
                                    y = [];
                                let m = 0;
                                const b = e => {
                                    ++m, Xt(e)
                                };
                                if ("deleteRange" === n) {
                                    if (4 === s.type) return a({
                                        numFailures: m,
                                        failures: y,
                                        results: [],
                                        lastResult: void 0
                                    });
                                    3 === s.type ? p.push(d = u.clear()) : p.push(d = u.delete(r(s)))
                                } else {
                                    const [e, t] = h ? c ? [i, o] : [i, null] : [o, null];
                                    if (h)
                                        for (let r = 0; r < f; ++r) p.push(d = t && void 0 !== t[r] ? u[n](e[r], t[r]) : u[n](e[r])), d.onerror = b;
                                    else
                                        for (let t = 0; t < f; ++t) p.push(d = u[n](e[t])), d.onerror = b
                                }
                                const v = e => {
                                    const t = e.target.result;
                                    p.forEach(((e, t) => null != e.error && (y[t] = e.error))), a({
                                        numFailures: m,
                                        failures: y,
                                        results: "delete" === n ? o : p.map((e => e.result)),
                                        lastResult: t
                                    })
                                };
                                d.onerror = e => {
                                    b(e), v(e)
                                }, d.onsuccess = v
                            }))
                        },
                        getMany: ({
                            trans: e,
                            keys: n
                        }) => new Promise(((r, o) => {
                            r = ze(r);
                            const i = e.objectStore(t),
                                s = n.length,
                                a = new Array(s);
                            let l, u = 0,
                                c = 0;
                            const h = e => {
                                    const t = e.target;
                                    a[t._pos] = t.result, ++c === u && r(a)
                                },
                                f = Qt(o);
                            for (let e = 0; e < s; ++e) null != n[e] && (l = i.get(n[e]), l._pos = e, l.onsuccess = h, l.onerror = f, ++u);
                            0 === u && r(a)
                        })),
                        get: ({
                            trans: e,
                            key: n
                        }) => new Promise(((r, o) => {
                            r = ze(r);
                            const i = e.objectStore(t).get(n);
                            i.onsuccess = e => r(e.target.result), i.onerror = Qt(o)
                        })),
                        query: function(e) {
                            return n => new Promise(((o, i) => {
                                o = ze(o);
                                const {
                                    trans: s,
                                    values: a,
                                    limit: l,
                                    query: u
                                } = n, c = l === 1 / 0 ? void 0 : l, {
                                    index: h,
                                    range: f
                                } = u, d = s.objectStore(t), p = h.isPrimaryKey ? d : d.index(h.name), y = r(f);
                                if (0 === l) return o({
                                    result: []
                                });
                                if (e) {
                                    const e = a ? p.getAll(y, c) : p.getAllKeys(y, c);
                                    e.onsuccess = e => o({
                                        result: e.target.result
                                    }), e.onerror = Qt(i)
                                } else {
                                    let e = 0;
                                    const t = a || !("openKeyCursor" in p) ? p.openCursor(y) : p.openKeyCursor(y),
                                        n = [];
                                    t.onsuccess = r => {
                                        const i = t.result;
                                        return i ? (n.push(a ? i.value : i.primaryKey), ++e === l ? o({
                                            result: n
                                        }) : void i.continue()) : o({
                                            result: n
                                        })
                                    }, t.onerror = Qt(i)
                                }
                            }))
                        }(s),
                        openCursor: function({
                            trans: e,
                            values: n,
                            query: o,
                            reverse: i,
                            unique: s
                        }) {
                            return new Promise(((a, l) => {
                                a = ze(a);
                                const {
                                    index: u,
                                    range: c
                                } = o, h = e.objectStore(t), f = u.isPrimaryKey ? h : h.index(u.name), d = i ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", p = n || !("openKeyCursor" in f) ? f.openCursor(r(c), d) : f.openKeyCursor(r(c), d);
                                p.onerror = Qt(l), p.onsuccess = ze((t => {
                                    const n = p.result;
                                    if (!n) return void a(null);
                                    n.___id = ++an, n.done = !1;
                                    const r = n.continue.bind(n);
                                    let o = n.continuePrimaryKey;
                                    o && (o = o.bind(n));
                                    const i = n.advance.bind(n),
                                        s = () => {
                                            throw new Error("Cursor not stopped")
                                        };
                                    n.trans = e, n.stop = n.continue = n.continuePrimaryKey = n.advance = () => {
                                        throw new Error("Cursor not started")
                                    }, n.fail = ze(l), n.next = function() {
                                        let e = 1;
                                        return this.start((() => e-- ? this.continue() : this.stop())).then((() => this))
                                    }, n.start = e => {
                                        const t = new Promise(((e, t) => {
                                                e = ze(e), p.onerror = Qt(t), n.fail = t, n.stop = t => {
                                                    n.stop = n.continue = n.continuePrimaryKey = n.advance = s, e(t)
                                                }
                                            })),
                                            a = () => {
                                                if (p.result) try {
                                                    e()
                                                } catch (e) {
                                                    n.fail(e)
                                                } else n.done = !0, n.start = () => {
                                                    throw new Error("Cursor behind last entry")
                                                }, n.stop()
                                            };
                                        return p.onsuccess = ze((e => {
                                            p.onsuccess = a, a()
                                        })), n.continue = r, n.continuePrimaryKey = o, n.advance = i, a(), t
                                    }, a(n)
                                }), l)
                            }))
                        },
                        count({
                            query: e,
                            trans: n
                        }) {
                            const {
                                index: o,
                                range: i
                            } = e;
                            return new Promise(((e, s) => {
                                const a = n.objectStore(t),
                                    l = o.isPrimaryKey ? a : a.index(o.name),
                                    u = r(i),
                                    c = u ? l.count(u) : l.count();
                                c.onsuccess = ze((t => e(t.target.result))), c.onerror = Qt(s)
                            }))
                        }
                    }
                }(e))), l = {};
                return a.forEach((e => l[e.name] = e)), {
                    stack: "dbcore",
                    transaction: e.transaction.bind(e),
                    table(e) {
                        if (!l[e]) throw new Error(`Table '${e}' not found`);
                        return l[e]
                    },
                    MIN_KEY: -1 / 0,
                    MAX_KEY: rn(t),
                    schema: o
                }
            }

            function cn({
                _novip: e
            }, t) {
                const n = t.db,
                    r = function(e, t, {
                        IDBKeyRange: n,
                        indexedDB: r
                    }, o) {
                        const i = function(e, t) {
                            return t.reduce(((e, {
                                create: t
                            }) => ({ ...e,
                                ...t(e)
                            })), e)
                        }(un(t, n, o), e.dbcore);
                        return {
                            dbcore: i
                        }
                    }(e._middlewares, n, e._deps, t);
                e.core = r.dbcore, e.tables.forEach((t => {
                    const n = t.name;
                    e.core.schema.tables.some((e => e.name === n)) && (t.core = e.core.table(n), e[n] instanceof e.Table && (e[n].core = t.core))
                }))
            }

            function hn({
                _novip: e
            }, t, n, r) {
                n.forEach((n => {
                    const o = r[n];
                    t.forEach((t => {
                        const r = y(t, n);
                        (!r || "value" in r && void 0 === r.value) && (t === e.Transaction.prototype || t instanceof e.Transaction ? f(t, n, {
                            get() {
                                return this.table(n)
                            },
                            set(e) {
                                h(this, n, {
                                    value: e,
                                    writable: !0,
                                    configurable: !0,
                                    enumerable: !0
                                })
                            }
                        }) : t[n] = new e.Table(n, o))
                    }))
                }))
            }

            function fn({
                _novip: e
            }, t) {
                t.forEach((t => {
                    for (let n in t) t[n] instanceof e.Table && delete t[n]
                }))
            }

            function dn(e, t) {
                return e._cfg.version - t._cfg.version
            }

            function pn(e, t, n, r) {
                const i = e._dbSchema,
                    s = e._createTransaction("readwrite", e._storeNames, i);
                s.create(n), s._completion.catch(r);
                const a = s._reject.bind(s),
                    l = Ae.transless || Ae;
                tt((() => {
                    Ae.trans = s, Ae.transless = l, 0 === t ? (o(i).forEach((e => {
                        mn(n, e, i[e].primKey, i[e].indexes)
                    })), cn(e, n), Ie.follow((() => e.on.populate.fire(s))).catch(a)) : function({
                        _novip: e
                    }, t, n, r) {
                        const i = [],
                            s = e._versions;
                        let a = e._dbSchema = vn(e, e.idbdb, r),
                            l = !1;
                        return s.filter((e => e._cfg.version >= t)).forEach((s => {
                                i.push((() => {
                                    const i = a,
                                        u = s._cfg.dbschema;
                                    gn(e, i, r), gn(e, u, r), a = e._dbSchema = u;
                                    const c = yn(i, u);
                                    c.add.forEach((e => {
                                        mn(r, e[0], e[1].primKey, e[1].indexes)
                                    })), c.change.forEach((e => {
                                        if (e.recreate) throw new ee.Upgrade("Not yet support for changing primary key"); {
                                            const t = r.objectStore(e.name);
                                            e.add.forEach((e => bn(t, e))), e.change.forEach((e => {
                                                t.deleteIndex(e.name), bn(t, e)
                                            })), e.del.forEach((e => t.deleteIndex(e)))
                                        }
                                    }));
                                    const h = s._cfg.contentUpgrade;
                                    if (h && s._cfg.version > t) {
                                        cn(e, r), n._memoizedTables = {}, l = !0;
                                        let t = O(u);
                                        c.del.forEach((e => {
                                            t[e] = i[e]
                                        })), fn(e, [e.Transaction.prototype]), hn(e, [e.Transaction.prototype], o(t), t), n.schema = t;
                                        const s = N(h);
                                        let a;
                                        s && nt();
                                        const f = Ie.follow((() => {
                                            if (a = h(n), a && s) {
                                                var e = rt.bind(null, null);
                                                a.then(e, e)
                                            }
                                        }));
                                        return a && "function" == typeof a.then ? Ie.resolve(a) : f.then((() => a))
                                    }
                                })), i.push((t => {
                                    l && wt || function(e, t) {
                                        [].slice.call(t.db.objectStoreNames).forEach((n => null == e[n] && t.db.deleteObjectStore(n)))
                                    }(s._cfg.dbschema, t), fn(e, [e.Transaction.prototype]), hn(e, [e.Transaction.prototype], e._storeNames, e._dbSchema), n.schema = e._dbSchema
                                }))
                            })),
                            function e() {
                                return i.length ? Ie.resolve(i.shift()(n.idbtrans)).then(e) : Ie.resolve()
                            }().then((() => {
                                var e, t;
                                t = r, o(e = a).forEach((n => {
                                    t.db.objectStoreNames.contains(n) || mn(t, n, e[n].primKey, e[n].indexes)
                                }))
                            }))
                    }(e, t, s, n).catch(a)
                }))
            }

            function yn(e, t) {
                const n = {
                    del: [],
                    add: [],
                    change: []
                };
                let r;
                for (r in e) t[r] || n.del.push(r);
                for (r in t) {
                    const o = e[r],
                        i = t[r];
                    if (o) {
                        const e = {
                            name: r,
                            def: i,
                            recreate: !1,
                            del: [],
                            add: [],
                            change: []
                        };
                        if ("" + (o.primKey.keyPath || "") != "" + (i.primKey.keyPath || "") || o.primKey.auto !== i.primKey.auto && !gt) e.recreate = !0, n.change.push(e);
                        else {
                            const t = o.idxByName,
                                r = i.idxByName;
                            let s;
                            for (s in t) r[s] || e.del.push(s);
                            for (s in r) {
                                const n = t[s],
                                    o = r[s];
                                n ? n.src !== o.src && e.change.push(o) : e.add.push(o)
                            }(e.del.length > 0 || e.add.length > 0 || e.change.length > 0) && n.change.push(e)
                        }
                    } else n.add.push([r, i])
                }
                return n
            }

            function mn(e, t, n, r) {
                const o = e.db.createObjectStore(t, n.keyPath ? {
                    keyPath: n.keyPath,
                    autoIncrement: n.auto
                } : {
                    autoIncrement: n.auto
                });
                return r.forEach((e => bn(o, e))), o
            }

            function bn(e, t) {
                e.createIndex(t.name, t.keyPath, {
                    unique: t.unique,
                    multiEntry: t.multi
                })
            }

            function vn(e, t, n) {
                const r = {};
                return b(t.objectStoreNames, 0).forEach((e => {
                    const t = n.objectStore(e);
                    let o = t.keyPath;
                    const i = en(tn(o), o || "", !1, !1, !!t.autoIncrement, o && "string" != typeof o, !0),
                        s = [];
                    for (let e = 0; e < t.indexNames.length; ++e) {
                        const n = t.index(t.indexNames[e]);
                        o = n.keyPath;
                        var a = en(n.name, o, !!n.unique, !!n.multiEntry, !1, o && "string" != typeof o, !1);
                        s.push(a)
                    }
                    r[e] = nn(e, i, s)
                })), r
            }

            function gn({
                _novip: e
            }, t, n) {
                const o = n.db.objectStoreNames;
                for (let r = 0; r < o.length; ++r) {
                    const i = o[r],
                        s = n.objectStore(i);
                    e._hasGetAll = "getAll" in s;
                    for (let e = 0; e < s.indexNames.length; ++e) {
                        const n = s.indexNames[e],
                            r = s.index(n).keyPath,
                            o = "string" == typeof r ? r : "[" + b(r).join("+") + "]";
                        if (t[i]) {
                            const e = t[i].idxByName[o];
                            e && (e.name = n, delete t[i].idxByName[o], t[i].idxByName[n] = e)
                        }
                    }
                }
                "undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && r.WorkerGlobalScope && r instanceof r.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1)
            }
            class wn {
                _parseStoresSpec(e, t) {
                    o(e).forEach((n => {
                        if (null !== e[n]) {
                            var r = e[n].split(",").map(((e, t) => {
                                    const n = (e = e.trim()).replace(/([&*]|\+\+)/g, ""),
                                        r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
                                    return en(n, r || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), i(r), 0 === t)
                                })),
                                o = r.shift();
                            if (o.multi) throw new ee.Schema("Primary key cannot be multi-valued");
                            r.forEach((e => {
                                if (e.auto) throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");
                                if (!e.keyPath) throw new ee.Schema("Index must have a name and cannot be an empty string")
                            })), t[n] = nn(n, o, r)
                        }
                    }))
                }
                stores(e) {
                    const t = this.db;
                    this._cfg.storesSource = this._cfg.storesSource ? s(this._cfg.storesSource, e) : e;
                    const n = t._versions,
                        r = {};
                    let i = {};
                    return n.forEach((e => {
                        s(r, e._cfg.storesSource), i = e._cfg.dbschema = {}, e._parseStoresSpec(r, i)
                    })), t._dbSchema = i, fn(t, [t._allTables, t, t.Transaction.prototype]), hn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], o(i), i), t._storeNames = o(i), this
                }
                upgrade(e) {
                    return this._cfg.contentUpgrade = he(this._cfg.contentUpgrade || re, e), this
                }
            }

            function _n(e, t) {
                let n = e._dbNamesDB;
                return n || (n = e._dbNamesDB = new Ln("__dbnames", {
                    addons: [],
                    indexedDB: e,
                    IDBKeyRange: t
                }), n.version(1).stores({
                    dbnames: "name"
                })), n.table("dbnames")
            }

            function xn(e) {
                return e && "function" == typeof e.databases
            }

            function kn(e) {
                return tt((function() {
                    return Ae.letThrough = !0, e()
                }))
            }

            function On() {
                var e;
                return !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise((function(t) {
                    var n = function() {
                        return indexedDB.databases().finally(t)
                    };
                    e = setInterval(n, 100), n()
                })).finally((function() {
                    return clearInterval(e)
                })) : Promise.resolve()
            }

            function En(e) {
                var t = t => e.next(t),
                    n = o(t),
                    r = o((t => e.throw(t)));

                function o(e) {
                    return t => {
                        var o = e(t),
                            s = o.value;
                        return o.done ? s : s && "function" == typeof s.then ? s.then(n, r) : i(s) ? Promise.all(s).then(n, r) : n(s)
                    }
                }
                return o(t)()
            }

            function Pn(e, t, n) {
                var r = arguments.length;
                if (r < 2) throw new ee.InvalidArgument("Too few arguments");
                for (var o = new Array(r - 1); --r;) o[r - 1] = arguments[r];
                n = o.pop();
                var i = P(o);
                return [e, i, n]
            }

            function jn(e, t, n, r, o) {
                return Ie.resolve().then((() => {
                    const i = Ae.transless || Ae,
                        s = e._createTransaction(t, n, e._dbSchema, r),
                        a = {
                            trans: s,
                            transless: i
                        };
                    if (r) s.idbtrans = r.idbtrans;
                    else try {
                        s.create(), e._state.PR1398_maxLoop = 3
                    } catch (r) {
                        return r.name === J.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e._close(), e.open().then((() => jn(e, t, n, null, o)))) : pt(r)
                    }
                    const l = N(o);
                    let u;
                    l && nt();
                    const c = Ie.follow((() => {
                        if (u = o.call(s, s), u)
                            if (l) {
                                var e = rt.bind(null, null);
                                u.then(e, e)
                            } else "function" == typeof u.next && "function" == typeof u.throw && (u = En(u))
                    }), a);
                    return (u && "function" == typeof u.then ? Ie.resolve(u).then((e => s.active ? e : pt(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn")))) : c.then((() => u))).then((e => (r && s._resolve(), s._completion.then((() => e))))).catch((e => (s._reject(e), pt(e))))
                }))
            }

            function Sn(e, t, n) {
                const r = i(e) ? e.slice() : [e];
                for (let e = 0; e < n; ++e) r.push(t);
                return r
            }
            const An = {
                stack: "dbcore",
                name: "VirtualIndexMiddleware",
                level: 1,
                create: function(e) {
                    return { ...e,
                        table(t) {
                            const n = e.table(t),
                                {
                                    schema: r
                                } = n,
                                o = {},
                                i = [];

                            function s(e, t, n) {
                                const r = ln(e),
                                    a = o[r] = o[r] || [],
                                    l = null == e ? 0 : "string" == typeof e ? 1 : e.length,
                                    u = t > 0,
                                    c = { ...n,
                                        isVirtual: u,
                                        keyTail: t,
                                        keyLength: l,
                                        extractKey: on(e),
                                        unique: !u && n.unique
                                    };
                                return a.push(c), c.isPrimaryKey || i.push(c), l > 1 && s(2 === l ? e[0] : e.slice(0, l - 1), t + 1, n), a.sort(((e, t) => e.keyTail - t.keyTail)), c
                            }
                            const a = s(r.primaryKey.keyPath, 0, r.primaryKey);
                            o[":id"] = [a];
                            for (const e of r.indexes) s(e.keyPath, 0, e);

                            function l(t) {
                                const n = t.query.index;
                                return n.isVirtual ? { ...t,
                                    query: {
                                        index: n,
                                        range: (r = t.query.range, o = n.keyTail, {
                                            type: 1 === r.type ? 2 : r.type,
                                            lower: Sn(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, o),
                                            lowerOpen: !0,
                                            upper: Sn(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, o),
                                            upperOpen: !0
                                        })
                                    }
                                } : t;
                                var r, o
                            }
                            const u = { ...n,
                                schema: { ...r,
                                    primaryKey: a,
                                    indexes: i,
                                    getIndexByKeyPath: function(e) {
                                        const t = o[ln(e)];
                                        return t && t[0]
                                    }
                                },
                                count: e => n.count(l(e)),
                                query: e => n.query(l(e)),
                                openCursor(t) {
                                    const {
                                        keyTail: r,
                                        isVirtual: o,
                                        keyLength: i
                                    } = t.query.index;
                                    return o ? n.openCursor(l(t)).then((n => n && function(n) {
                                        const o = Object.create(n, {
                                            continue: {
                                                value: function(o) {
                                                    null != o ? n.continue(Sn(o, t.reverse ? e.MAX_KEY : e.MIN_KEY, r)) : t.unique ? n.continue(n.key.slice(0, i).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, r)) : n.continue()
                                                }
                                            },
                                            continuePrimaryKey: {
                                                value(t, o) {
                                                    n.continuePrimaryKey(Sn(t, e.MAX_KEY, r), o)
                                                }
                                            },
                                            primaryKey: {
                                                get: () => n.primaryKey
                                            },
                                            key: {
                                                get() {
                                                    const e = n.key;
                                                    return 1 === i ? e[0] : e.slice(0, i)
                                                }
                                            },
                                            value: {
                                                get: () => n.value
                                            }
                                        });
                                        return o
                                    }(n))) : n.openCursor(t)
                                }
                            };
                            return u
                        }
                    }
                }
            };

            function Kn(e, t, n, r) {
                return n = n || {}, r = r || "", o(e).forEach((o => {
                    if (u(t, o)) {
                        var i = e[o],
                            s = t[o];
                        if ("object" == typeof i && "object" == typeof s && i && s) {
                            const e = I(i);
                            e !== I(s) ? n[r + o] = t[o] : "Object" === e ? Kn(i, s, n, r + o + ".") : i !== s && (n[r + o] = t[o])
                        } else i !== s && (n[r + o] = t[o])
                    } else n[r + o] = void 0
                })), o(t).forEach((o => {
                    u(e, o) || (n[r + o] = t[o])
                })), n
            }
            const Cn = {
                stack: "dbcore",
                name: "HooksMiddleware",
                level: 2,
                create: e => ({ ...e,
                    table(t) {
                        const n = e.table(t),
                            {
                                primaryKey: r
                            } = n.schema,
                            o = { ...n,
                                mutate(e) {
                                    const o = Ae.trans,
                                        {
                                            deleting: i,
                                            creating: s,
                                            updating: a
                                        } = o.table(t).hook;
                                    switch (e.type) {
                                        case "add":
                                            if (s.fire === re) break;
                                            return o._promise("readwrite", (() => l(e)), !0);
                                        case "put":
                                            if (s.fire === re && a.fire === re) break;
                                            return o._promise("readwrite", (() => l(e)), !0);
                                        case "delete":
                                            if (i.fire === re) break;
                                            return o._promise("readwrite", (() => l(e)), !0);
                                        case "deleteRange":
                                            if (i.fire === re) break;
                                            return o._promise("readwrite", (() => function(e) {
                                                return c(e.trans, e.range, 1e4)
                                            }(e)), !0)
                                    }
                                    return n.mutate(e);

                                    function l(e) {
                                        const t = Ae.trans,
                                            o = e.keys || function(e, t) {
                                                return "delete" === t.type ? t.keys : t.keys || t.values.map(e.extractKey)
                                            }(r, e);
                                        if (!o) throw new Error("Keys missing");
                                        return "delete" !== (e = "add" === e.type || "put" === e.type ? { ...e,
                                                keys: o
                                            } : { ...e
                                            }).type && (e.values = [...e.values]), e.keys && (e.keys = [...e.keys]),
                                            function(e, t, n) {
                                                return "add" === t.type ? Promise.resolve([]) : e.getMany({
                                                    trans: t.trans,
                                                    keys: n,
                                                    cache: "immutable"
                                                })
                                            }(n, e, o).then((l => {
                                                const c = o.map(((n, o) => {
                                                    const c = l[o],
                                                        h = {
                                                            onerror: null,
                                                            onsuccess: null
                                                        };
                                                    if ("delete" === e.type) i.fire.call(h, n, c, t);
                                                    else if ("add" === e.type || void 0 === c) {
                                                        const i = s.fire.call(h, n, e.values[o], t);
                                                        null == n && null != i && (n = i, e.keys[o] = n, r.outbound || k(e.values[o], r.keyPath, n))
                                                    } else {
                                                        const r = Kn(c, e.values[o]),
                                                            i = a.fire.call(h, r, n, c, t);
                                                        if (i) {
                                                            const t = e.values[o];
                                                            Object.keys(i).forEach((e => {
                                                                u(t, e) ? t[e] = i[e] : k(t, e, i[e])
                                                            }))
                                                        }
                                                    }
                                                    return h
                                                }));
                                                return n.mutate(e).then((({
                                                    failures: t,
                                                    results: n,
                                                    numFailures: r,
                                                    lastResult: i
                                                }) => {
                                                    for (let r = 0; r < o.length; ++r) {
                                                        const i = n ? n[r] : o[r],
                                                            s = c[r];
                                                        null == i ? s.onerror && s.onerror(t[r]) : s.onsuccess && s.onsuccess("put" === e.type && l[r] ? e.values[r] : i)
                                                    }
                                                    return {
                                                        failures: t,
                                                        results: n,
                                                        numFailures: r,
                                                        lastResult: i
                                                    }
                                                })).catch((e => (c.forEach((t => t.onerror && t.onerror(e))), Promise.reject(e))))
                                            }))
                                    }

                                    function c(e, t, o) {
                                        return n.query({
                                            trans: e,
                                            values: !1,
                                            query: {
                                                index: r,
                                                range: t
                                            },
                                            limit: o
                                        }).then((({
                                            result: n
                                        }) => l({
                                            type: "delete",
                                            keys: n,
                                            trans: e
                                        }).then((r => r.numFailures > 0 ? Promise.reject(r.failures[0]) : n.length < o ? {
                                            failures: [],
                                            numFailures: 0,
                                            lastResult: void 0
                                        } : c(e, { ...t,
                                            lower: n[n.length - 1],
                                            lowerOpen: !0
                                        }, o)))))
                                    }
                                }
                            };
                        return o
                    }
                })
            };

            function Tn(e, t, n) {
                try {
                    if (!t) return null;
                    if (t.keys.length < e.length) return null;
                    const r = [];
                    for (let o = 0, i = 0; o < t.keys.length && i < e.length; ++o) 0 === Bt(t.keys[o], e[i]) && (r.push(n ? K(t.values[o]) : t.values[o]), ++i);
                    return r.length === e.length ? r : null
                } catch (e) {
                    return null
                }
            }
            const In = {
                stack: "dbcore",
                level: -1,
                create: e => ({
                    table: t => {
                        const n = e.table(t);
                        return { ...n,
                            getMany: e => {
                                if (!e.cache) return n.getMany(e);
                                const t = Tn(e.keys, e.trans._cache, "clone" === e.cache);
                                return t ? Ie.resolve(t) : n.getMany(e).then((t => (e.trans._cache = {
                                    keys: e.keys,
                                    values: "clone" === e.cache ? K(t) : t
                                }, t)))
                            },
                            mutate: e => ("add" !== e.type && (e.trans._cache = null), n.mutate(e))
                        }
                    }
                })
            };

            function Dn(e) {
                return !("from" in e)
            }
            const Rn = function(e, t) {
                if (!this) {
                    const t = new Rn;
                    return e && "d" in e && s(t, e), t
                }
                s(this, arguments.length ? {
                    d: 1,
                    from: e,
                    to: arguments.length > 1 ? t : e
                } : {
                    d: 0
                })
            };

            function Bn(e, t, n) {
                const r = Bt(t, n);
                if (isNaN(r)) return;
                if (r > 0) throw RangeError();
                if (Dn(e)) return s(e, {
                    from: t,
                    to: n,
                    d: 1
                });
                const o = e.l,
                    i = e.r;
                if (Bt(n, e.from) < 0) return o ? Bn(o, t, n) : e.l = {
                    from: t,
                    to: n,
                    d: 1,
                    l: null,
                    r: null
                }, qn(e);
                if (Bt(t, e.to) > 0) return i ? Bn(i, t, n) : e.r = {
                    from: t,
                    to: n,
                    d: 1,
                    l: null,
                    r: null
                }, qn(e);
                Bt(t, e.from) < 0 && (e.from = t, e.l = null, e.d = i ? i.d + 1 : 1), Bt(n, e.to) > 0 && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1);
                const a = !e.r;
                o && !e.l && Fn(e, o), i && a && Fn(e, i)
            }

            function Fn(e, t) {
                Dn(t) || function e(t, {
                    from: n,
                    to: r,
                    l: o,
                    r: i
                }) {
                    Bn(t, n, r), o && e(t, o), i && e(t, i)
                }(e, t)
            }

            function Nn(e, t) {
                const n = Mn(t);
                let r = n.next();
                if (r.done) return !1;
                let o = r.value;
                const i = Mn(e);
                let s = i.next(o.from),
                    a = s.value;
                for (; !r.done && !s.done;) {
                    if (Bt(a.from, o.to) <= 0 && Bt(a.to, o.from) >= 0) return !0;
                    Bt(o.from, a.from) < 0 ? o = (r = n.next(a.from)).value : a = (s = i.next(o.from)).value
                }
                return !1
            }

            function Mn(e) {
                let t = Dn(e) ? null : {
                    s: 0,
                    n: e
                };
                return {
                    next(e) {
                        const n = arguments.length > 0;
                        for (; t;) switch (t.s) {
                            case 0:
                                if (t.s = 1, n)
                                    for (; t.n.l && Bt(e, t.n.from) < 0;) t = {
                                        up: t,
                                        n: t.n.l,
                                        s: 1
                                    };
                                else
                                    for (; t.n.l;) t = {
                                        up: t,
                                        n: t.n.l,
                                        s: 1
                                    };
                            case 1:
                                if (t.s = 2, !n || Bt(e, t.n.to) <= 0) return {
                                    value: t.n,
                                    done: !1
                                };
                            case 2:
                                if (t.n.r) {
                                    t.s = 3, t = {
                                        up: t,
                                        n: t.n.r,
                                        s: 0
                                    };
                                    continue
                                }
                            case 3:
                                t = t.up
                        }
                        return {
                            done: !0
                        }
                    }
                }
            }

            function qn(e) {
                var t, n;
                const r = ((null === (t = e.r) || void 0 === t ? void 0 : t.d) || 0) - ((null === (n = e.l) || void 0 === n ? void 0 : n.d) || 0),
                    o = r > 1 ? "r" : r < -1 ? "l" : "";
                if (o) {
                    const t = "r" === o ? "l" : "r",
                        n = { ...e
                        },
                        r = e[o];
                    e.from = r.from, e.to = r.to, e[o] = r[o], n[o] = r[t], e[t] = n, n.d = $n(n)
                }
                e.d = $n(e)
            }

            function $n({
                r: e,
                l: t
            }) {
                return (e ? t ? Math.max(e.d, t.d) : e.d : t ? t.d : 0) + 1
            }
            c(Rn.prototype, {
                add(e) {
                    return Fn(this, e), this
                },
                addKey(e) {
                    return Bn(this, e, e), this
                },
                addKeys(e) {
                    return e.forEach((e => Bn(this, e, e))), this
                },
                [D]() {
                    return Mn(this)
                }
            });
            const Un = {
                stack: "dbcore",
                level: 0,
                create: e => {
                    const t = e.schema.name,
                        n = new Rn(e.MIN_KEY, e.MAX_KEY);
                    return { ...e,
                        table: r => {
                            const s = e.table(r),
                                {
                                    schema: a
                                } = s,
                                {
                                    primaryKey: l
                                } = a,
                                {
                                    extractKey: u,
                                    outbound: c
                                } = l,
                                h = { ...s,
                                    mutate: e => {
                                        const o = e.trans,
                                            l = o.mutatedParts || (o.mutatedParts = {}),
                                            u = e => {
                                                const n = `idb://${t}/${r}/${e}`;
                                                return l[n] || (l[n] = new Rn)
                                            },
                                            c = u(""),
                                            h = u(":dels"),
                                            {
                                                type: f
                                            } = e;
                                        let [d, p] = "deleteRange" === e.type ? [e.range] : "delete" === e.type ? [e.keys] : e.values.length < 50 ? [
                                            [], e.values
                                        ] : [];
                                        const y = e.trans._cache;
                                        return s.mutate(e).then((e => {
                                            if (i(d)) {
                                                "delete" !== f && (d = e.results), c.addKeys(d);
                                                const t = Tn(d, y);
                                                t || "add" === f || h.addKeys(d), (t || p) && function(e, t, n, r) {
                                                    t.indexes.forEach((function(t) {
                                                        const o = e(t.name || "");

                                                        function s(e) {
                                                            return null != e ? t.extractKey(e) : null
                                                        }
                                                        const a = e => t.multiEntry && i(e) ? e.forEach((e => o.addKey(e))) : o.addKey(e);
                                                        (n || r).forEach(((e, t) => {
                                                            const o = n && s(n[t]),
                                                                i = r && s(r[t]);
                                                            0 !== Bt(o, i) && (null != o && a(o), null != i && a(i))
                                                        }))
                                                    }))
                                                }(u, a, t, p)
                                            } else if (d) {
                                                const e = {
                                                    from: d.lower,
                                                    to: d.upper
                                                };
                                                h.add(e), c.add(e)
                                            } else c.add(n), h.add(n), a.indexes.forEach((e => u(e.name).add(n)));
                                            return e
                                        }))
                                    }
                                },
                                f = ({
                                    query: {
                                        index: t,
                                        range: n
                                    }
                                }) => {
                                    var r, o;
                                    return [t, new Rn(null !== (r = n.lower) && void 0 !== r ? r : e.MIN_KEY, null !== (o = n.upper) && void 0 !== o ? o : e.MAX_KEY)]
                                },
                                d = {
                                    get: e => [l, new Rn(e.key)],
                                    getMany: e => [l, (new Rn).addKeys(e.keys)],
                                    count: f,
                                    query: f,
                                    openCursor: f
                                };
                            return o(d).forEach((e => {
                                h[e] = function(o) {
                                    const {
                                        subscr: i
                                    } = Ae;
                                    if (i) {
                                        const a = e => {
                                                const n = `idb://${t}/${r}/${e}`;
                                                return i[n] || (i[n] = new Rn)
                                            },
                                            l = a(""),
                                            h = a(":dels"),
                                            [f, p] = d[e](o);
                                        if (a(f.name || "").add(p), !f.isPrimaryKey) {
                                            if ("count" !== e) {
                                                const t = "query" === e && c && o.values && s.query({ ...o,
                                                    values: !1
                                                });
                                                return s[e].apply(this, arguments).then((n => {
                                                    if ("query" === e) {
                                                        if (c && o.values) return t.then((({
                                                            result: e
                                                        }) => (l.addKeys(e), n)));
                                                        const e = o.values ? n.result.map(u) : n.result;
                                                        o.values ? l.addKeys(e) : h.addKeys(e)
                                                    } else if ("openCursor" === e) {
                                                        const e = n,
                                                            t = o.values;
                                                        return e && Object.create(e, {
                                                            key: {
                                                                get: () => (h.addKey(e.primaryKey), e.key)
                                                            },
                                                            primaryKey: {
                                                                get() {
                                                                    const t = e.primaryKey;
                                                                    return h.addKey(t), t
                                                                }
                                                            },
                                                            value: {
                                                                get: () => (t && l.addKey(e.primaryKey), e.value)
                                                            }
                                                        })
                                                    }
                                                    return n
                                                }))
                                            }
                                            h.add(n)
                                        }
                                    }
                                    return s[e].apply(this, arguments)
                                }
                            })), h
                        }
                    }
                }
            };
            class Ln {
                constructor(e, t) {
                    this._middlewares = {}, this.verno = 0;
                    const n = Ln.dependencies;
                    this._options = t = {
                        addons: Ln.addons,
                        autoOpen: !0,
                        indexedDB: n.indexedDB,
                        IDBKeyRange: n.IDBKeyRange,
                        ...t
                    }, this._deps = {
                        indexedDB: t.indexedDB,
                        IDBKeyRange: t.IDBKeyRange
                    };
                    const {
                        addons: r
                    } = t;
                    this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
                    const o = {
                        dbOpenError: null,
                        isBeingOpened: !1,
                        onReadyBeingFired: null,
                        openComplete: !1,
                        dbReadyResolve: re,
                        dbReadyPromise: null,
                        cancelOpen: re,
                        openCanceller: null,
                        autoSchema: !0,
                        PR1398_maxLoop: 3
                    };
                    var i;
                    o.dbReadyPromise = new Ie((e => {
                        o.dbReadyResolve = e
                    })), o.openCanceller = new Ie(((e, t) => {
                        o.cancelOpen = t
                    })), this._state = o, this.name = e, this.on = jt(this, "populate", "blocked", "versionchange", "close", {
                        ready: [he, re]
                    }), this.on.ready.subscribe = v(this.on.ready.subscribe, (e => (t, n) => {
                        Ln.vip((() => {
                            const r = this._state;
                            if (r.openComplete) r.dbOpenError || Ie.resolve().then(t), n && e(t);
                            else if (r.onReadyBeingFired) r.onReadyBeingFired.push(t), n && e(t);
                            else {
                                e(t);
                                const r = this;
                                n || e((function e() {
                                    r.on.ready.unsubscribe(t), r.on.ready.unsubscribe(e)
                                }))
                            }
                        }))
                    })), this.Collection = (i = this, St(Mt.prototype, (function(e, t) {
                        this.db = i;
                        let n = Ot,
                            r = null;
                        if (t) try {
                            n = t()
                        } catch (e) {
                            r = e
                        }
                        const o = e._ctx,
                            s = o.table,
                            a = s.hook.reading.fire;
                        this._ctx = {
                            table: s,
                            index: o.index,
                            isPrimKey: !o.index || s.schema.primKey.keyPath && o.index === s.schema.primKey.name,
                            range: n,
                            keysOnly: !1,
                            dir: "next",
                            unique: "",
                            algorithm: null,
                            filter: null,
                            replayFilter: null,
                            justLimit: !0,
                            isMatch: null,
                            offset: 0,
                            limit: 1 / 0,
                            error: r,
                            or: o.or,
                            valueMapper: a !== oe ? a : null
                        }
                    }))), this.Table = function(e) {
                        return St(Pt.prototype, (function(t, n, r) {
                            this.db = e, this._tx = r, this.name = t, this.schema = n, this.hook = e._allTables[t] ? e._allTables[t].hook : jt(null, {
                                creating: [ae, re],
                                reading: [ie, oe],
                                updating: [ue, re],
                                deleting: [le, re]
                            })
                        }))
                    }(this), this.Transaction = function(e) {
                        return St(Zt.prototype, (function(t, n, r, o, i) {
                            this.db = e, this.mode = t, this.storeNames = n, this.schema = r, this.chromeTransactionDurability = o, this.idbtrans = null, this.on = jt(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Ie(((e, t) => {
                                this._resolve = e, this._reject = t
                            })), this._completion.then((() => {
                                this.active = !1, this.on.complete.fire()
                            }), (e => {
                                var t = this.active;
                                return this.active = !1, this.on.error.fire(e), this.parent ? this.parent._reject(e) : t && this.idbtrans && this.idbtrans.abort(), pt(e)
                            }))
                        }))
                    }(this), this.Version = function(e) {
                        return St(wn.prototype, (function(t) {
                            this.db = e, this._cfg = {
                                version: t,
                                storesSource: null,
                                dbschema: {},
                                tables: {},
                                contentUpgrade: null
                            }
                        }))
                    }(this), this.WhereClause = function(e) {
                        return St(Ht.prototype, (function(t, n, r) {
                            this.db = e, this._ctx = {
                                table: t,
                                index: ":id" === n ? null : n,
                                or: r
                            };
                            const o = e._deps.indexedDB;
                            if (!o) throw new ee.MissingAPI;
                            this._cmp = this._ascending = o.cmp.bind(o), this._descending = (e, t) => o.cmp(t, e), this._max = (e, t) => o.cmp(e, t) > 0 ? e : t, this._min = (e, t) => o.cmp(e, t) < 0 ? e : t, this._IDBKeyRange = e._deps.IDBKeyRange
                        }))
                    }(this), this.on("versionchange", (e => {
                        e.newVersion > 0 ? console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`), this.close()
                    })), this.on("blocked", (e => {
                        !e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${this.name}') was blocked`) : console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${e.oldVersion/10}`)
                    })), this._maxKey = rn(t.IDBKeyRange), this._createTransaction = (e, t, n, r) => new this.Transaction(e, t, n, this._options.chromeTransactionDurability, r), this._fireOnBlocked = e => {
                        this.on("blocked").fire(e), vt.filter((e => e.name === this.name && e !== this && !e._state.vcFired)).map((t => t.on("versionchange").fire(e)))
                    }, this.use(An), this.use(Cn), this.use(Un), this.use(In), this.vip = Object.create(this, {
                        _vip: {
                            value: !0
                        }
                    }), r.forEach((e => e(this)))
                }
                version(e) {
                    if (isNaN(e) || e < .1) throw new ee.Type("Given version is not a positive number");
                    if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new ee.Schema("Cannot add version when database is open");
                    this.verno = Math.max(this.verno, e);
                    const t = this._versions;
                    var n = t.filter((t => t._cfg.version === e))[0];
                    return n || (n = new this.Version(e), t.push(n), t.sort(dn), n.stores({}), this._state.autoSchema = !1, n)
                }
                _whenReady(e) {
                    return this.idbdb && (this._state.openComplete || Ae.letThrough || this._vip) ? e() : new Ie(((e, t) => {
                        if (this._state.openComplete) return t(new ee.DatabaseClosed(this._state.dbOpenError));
                        if (!this._state.isBeingOpened) {
                            if (!this._options.autoOpen) return void t(new ee.DatabaseClosed);
                            this.open().catch(re)
                        }
                        this._state.dbReadyPromise.then(e, t)
                    })).then(e)
                }
                use({
                    stack: e,
                    create: t,
                    level: n,
                    name: r
                }) {
                    r && this.unuse({
                        stack: e,
                        name: r
                    });
                    const o = this._middlewares[e] || (this._middlewares[e] = []);
                    return o.push({
                        stack: e,
                        create: t,
                        level: null == n ? 10 : n,
                        name: r
                    }), o.sort(((e, t) => e.level - t.level)), this
                }
                unuse({
                    stack: e,
                    name: t,
                    create: n
                }) {
                    return e && this._middlewares[e] && (this._middlewares[e] = this._middlewares[e].filter((e => n ? e.create !== n : !!t && e.name !== t))), this
                }
                open() {
                    return function(e) {
                        const t = e._state,
                            {
                                indexedDB: n
                            } = e._deps;
                        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then((() => t.dbOpenError ? pt(t.dbOpenError) : e));
                        M && (t.openCanceller._stackHolder = L()), t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
                        const r = t.openCanceller;

                        function i() {
                            if (t.openCanceller !== r) throw new ee.DatabaseClosed("db.open() was cancelled")
                        }
                        let s = t.dbReadyResolve,
                            a = null,
                            l = !1;
                        return Ie.race([r, ("undefined" == typeof navigator ? Ie.resolve() : On()).then((() => new Ie(((r, s) => {
                            if (i(), !n) throw new ee.MissingAPI;
                            const u = e.name,
                                c = t.autoSchema ? n.open(u) : n.open(u, Math.round(10 * e.verno));
                            if (!c) throw new ee.MissingAPI;
                            c.onerror = Qt(s), c.onblocked = ze(e._fireOnBlocked), c.onupgradeneeded = ze((r => {
                                if (a = c.transaction, t.autoSchema && !e._options.allowEmptyDB) {
                                    c.onerror = Xt, a.abort(), c.result.close();
                                    const e = n.deleteDatabase(u);
                                    e.onsuccess = e.onerror = ze((() => {
                                        s(new ee.NoSuchDatabase(`Database ${u} doesnt exist`))
                                    }))
                                } else {
                                    a.onerror = Qt(s);
                                    var o = r.oldVersion > Math.pow(2, 62) ? 0 : r.oldVersion;
                                    l = o < 1, e._novip.idbdb = c.result, pn(e, o / 10, a, s)
                                }
                            }), s), c.onsuccess = ze((() => {
                                a = null;
                                const n = e._novip.idbdb = c.result,
                                    i = b(n.objectStoreNames);
                                if (i.length > 0) try {
                                    const r = n.transaction(1 === (s = i).length ? s[0] : s, "readonly");
                                    t.autoSchema ? function({
                                        _novip: e
                                    }, t, n) {
                                        e.verno = t.version / 10;
                                        const r = e._dbSchema = vn(0, t, n);
                                        e._storeNames = b(t.objectStoreNames, 0), hn(e, [e._allTables], o(r), r)
                                    }(e, n, r) : (gn(e, e._dbSchema, r), function(e, t) {
                                        const n = yn(vn(0, e.idbdb, t), e._dbSchema);
                                        return !(n.add.length || n.change.some((e => e.add.length || e.change.length)))
                                    }(e, r) || console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")), cn(e, r)
                                } catch (e) {}
                                var s;
                                vt.push(e), n.onversionchange = ze((n => {
                                    t.vcFired = !0, e.on("versionchange").fire(n)
                                })), n.onclose = ze((t => {
                                    e.on("close").fire(t)
                                })), l && function({
                                    indexedDB: e,
                                    IDBKeyRange: t
                                }, n) {
                                    !xn(e) && "__dbnames" !== n && _n(e, t).put({
                                        name: n
                                    }).catch(re)
                                }(e._deps, u), r()
                            }), s)
                        }))))]).then((() => (i(), t.onReadyBeingFired = [], Ie.resolve(kn((() => e.on.ready.fire(e.vip)))).then((function n() {
                            if (t.onReadyBeingFired.length > 0) {
                                let r = t.onReadyBeingFired.reduce(he, re);
                                return t.onReadyBeingFired = [], Ie.resolve(kn((() => r(e.vip)))).then(n)
                            }
                        }))))).finally((() => {
                            t.onReadyBeingFired = null, t.isBeingOpened = !1
                        })).then((() => e)).catch((n => {
                            t.dbOpenError = n;
                            try {
                                a && a.abort()
                            } catch (e) {}
                            return r === t.openCanceller && e._close(), pt(n)
                        })).finally((() => {
                            t.openComplete = !0, s()
                        }))
                    }(this)
                }
                _close() {
                    const e = this._state,
                        t = vt.indexOf(this);
                    if (t >= 0 && vt.splice(t, 1), this.idbdb) {
                        try {
                            this.idbdb.close()
                        } catch (e) {}
                        this._novip.idbdb = null
                    }
                    e.dbReadyPromise = new Ie((t => {
                        e.dbReadyResolve = t
                    })), e.openCanceller = new Ie(((t, n) => {
                        e.cancelOpen = n
                    }))
                }
                close() {
                    this._close();
                    const e = this._state;
                    this._options.autoOpen = !1, e.dbOpenError = new ee.DatabaseClosed, e.isBeingOpened && e.cancelOpen(e.dbOpenError)
                }
                delete() {
                    const e = arguments.length > 0,
                        t = this._state;
                    return new Ie(((n, r) => {
                        const o = () => {
                            this.close();
                            var e = this._deps.indexedDB.deleteDatabase(this.name);
                            e.onsuccess = ze((() => {
                                ! function({
                                    indexedDB: e,
                                    IDBKeyRange: t
                                }, n) {
                                    !xn(e) && "__dbnames" !== n && _n(e, t).delete(n).catch(re)
                                }(this._deps, this.name), n()
                            })), e.onerror = Qt(r), e.onblocked = this._fireOnBlocked
                        };
                        if (e) throw new ee.InvalidArgument("Arguments not allowed in db.delete()");
                        t.isBeingOpened ? t.dbReadyPromise.then(o) : o()
                    }))
                }
                backendDB() {
                    return this.idbdb
                }
                isOpen() {
                    return null !== this.idbdb
                }
                hasBeenClosed() {
                    const e = this._state.dbOpenError;
                    return e && "DatabaseClosed" === e.name
                }
                hasFailed() {
                    return null !== this._state.dbOpenError
                }
                dynamicallyOpened() {
                    return this._state.autoSchema
                }
                get tables() {
                    return o(this._allTables).map((e => this._allTables[e]))
                }
                transaction() {
                    const e = Pn.apply(this, arguments);
                    return this._transaction.apply(this, e)
                }
                _transaction(e, t, n) {
                    let r = Ae.trans;
                    r && r.db === this && -1 === e.indexOf("!") || (r = null);
                    const o = -1 !== e.indexOf("?");
                    let i, s;
                    e = e.replace("!", "").replace("?", "");
                    try {
                        if (s = t.map((e => {
                                var t = e instanceof this.Table ? e.name : e;
                                if ("string" != typeof t) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                                return t
                            })), "r" == e || "readonly" === e) i = "readonly";
                        else {
                            if ("rw" != e && "readwrite" != e) throw new ee.InvalidArgument("Invalid transaction mode: " + e);
                            i = "readwrite"
                        }
                        if (r) {
                            if ("readonly" === r.mode && "readwrite" === i) {
                                if (!o) throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                                r = null
                            }
                            r && s.forEach((e => {
                                if (r && -1 === r.storeNames.indexOf(e)) {
                                    if (!o) throw new ee.SubTransaction("Table " + e + " not included in parent transaction.");
                                    r = null
                                }
                            })), o && r && !r.active && (r = null)
                        }
                    } catch (e) {
                        return r ? r._promise(null, ((t, n) => {
                            n(e)
                        })) : pt(e)
                    }
                    const a = jn.bind(null, this, i, s, r, n);
                    return r ? r._promise(i, a, "lock") : Ae.trans ? ut(Ae.transless, (() => this._whenReady(a))) : this._whenReady(a)
                }
                table(e) {
                    if (!u(this._allTables, e)) throw new ee.InvalidTable(`Table ${e} does not exist`);
                    return this._allTables[e]
                }
            }
            const Vn = "undefined" != typeof Symbol && "observable" in Symbol ? Symbol.observable : "@@observable";
            class Wn {
                constructor(e) {
                    this._subscribe = e
                }
                subscribe(e, t, n) {
                    return this._subscribe(e && "function" != typeof e ? e : {
                        next: e,
                        error: t,
                        complete: n
                    })
                }[Vn]() {
                    return this
                }
            }

            function Gn(e, t) {
                return o(t).forEach((n => {
                    Fn(e[n] || (e[n] = new Rn), t[n])
                })), e
            }

            function Yn(e) {
                return new Wn((t => {
                    const n = N(e);
                    let r = !1,
                        i = {},
                        s = {};
                    const a = {
                        get closed() {
                            return r
                        },
                        unsubscribe: () => {
                            r = !0, Jt.storagemutated.unsubscribe(h)
                        }
                    };
                    t.start && t.start(a);
                    let l = !1,
                        u = !1;

                    function c() {
                        return o(s).some((e => i[e] && Nn(i[e], s[e])))
                    }
                    const h = e => {
                            Gn(i, e), c() && f()
                        },
                        f = () => {
                            if (l || r) return;
                            i = {};
                            const o = {},
                                d = function(t) {
                                    n && nt();
                                    const r = () => tt(e, {
                                            subscr: t,
                                            trans: null
                                        }),
                                        o = Ae.trans ? ut(Ae.transless, r) : r();
                                    return n && o.then(rt, rt), o
                                }(o);
                            u || (Jt("storagemutated", h), u = !0), l = !0, Promise.resolve(d).then((e => {
                                l = !1, r || (c() ? f() : (i = {}, s = o, t.next && t.next(e)))
                            }), (e => {
                                l = !1, t.error && t.error(e), a.unsubscribe()
                            }))
                        };
                    return f(), a
                }))
            }
            let zn;
            try {
                zn = {
                    indexedDB: r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
                    IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange
                }
            } catch (r) {
                zn = {
                    indexedDB: null,
                    IDBKeyRange: null
                }
            }
            const Hn = Ln;

            function Qn(e) {
                let t = Xn;
                try {
                    Xn = !0, Jt.storagemutated.fire(e)
                } finally {
                    Xn = t
                }
            }
            c(Hn, { ...ne,
                delete: e => new Hn(e, {
                    addons: []
                }).delete(),
                exists: e => new Hn(e, {
                    addons: []
                }).open().then((e => (e.close(), !0))).catch("NoSuchDatabaseError", (() => !1)),
                getDatabaseNames(e) {
                    try {
                        return function({
                            indexedDB: e,
                            IDBKeyRange: t
                        }) {
                            return xn(e) ? Promise.resolve(e.databases()).then((e => e.map((e => e.name)).filter((e => "__dbnames" !== e)))) : _n(e, t).toCollection().primaryKeys()
                        }(Hn.dependencies).then(e)
                    } catch (e) {
                        return pt(new ee.MissingAPI)
                    }
                },
                defineClass: () => function(e) {
                    s(this, e)
                },
                ignoreTransaction: e => Ae.trans ? ut(Ae.transless, e) : e(),
                vip: kn,
                async: function(e) {
                    return function() {
                        try {
                            var t = En(e.apply(this, arguments));
                            return t && "function" == typeof t.then ? t : Ie.resolve(t)
                        } catch (e) {
                            return pt(e)
                        }
                    }
                },
                spawn: function(e, t, n) {
                    try {
                        var r = En(e.apply(n, t || []));
                        return r && "function" == typeof r.then ? r : Ie.resolve(r)
                    } catch (e) {
                        return pt(e)
                    }
                },
                currentTransaction: {
                    get: () => Ae.trans || null
                },
                waitFor: function(e, t) {
                    const n = Ie.resolve("function" == typeof e ? Hn.ignoreTransaction(e) : e).timeout(t || 6e4);
                    return Ae.trans ? Ae.trans.waitFor(n) : n
                },
                Promise: Ie,
                debug: {
                    get: () => M,
                    set: e => {
                        q(e, "dexie" === e ? () => !0 : xt)
                    }
                },
                derive: d,
                extend: s,
                props: c,
                override: v,
                Events: jt,
                on: Jt,
                liveQuery: Yn,
                extendObservabilitySet: Gn,
                getByKeyPath: x,
                setByKeyPath: k,
                delByKeyPath: function(e, t) {
                    "string" == typeof t ? k(e, t, void 0) : "length" in t && [].map.call(t, (function(t) {
                        k(e, t, void 0)
                    }))
                },
                shallowClone: O,
                deepClone: K,
                getObjectDiff: Kn,
                cmp: Bt,
                asap: w,
                minKey: -1 / 0,
                addons: [],
                connections: vt,
                errnames: J,
                dependencies: zn,
                semVer: "3.2.2",
                version: "3.2.2".split(".").map((e => parseInt(e))).reduce(((e, t, n) => e + t / Math.pow(10, 2 * n)))
            }), Hn.maxKey = rn(Hn.dependencies.IDBKeyRange), "undefined" != typeof dispatchEvent && "undefined" != typeof addEventListener && (Jt("storagemutated", (e => {
                if (!Xn) {
                    let t;
                    gt ? (t = document.createEvent("CustomEvent"), t.initCustomEvent("x-storagemutated-1", !0, !0, e)) : t = new CustomEvent("x-storagemutated-1", {
                        detail: e
                    }), Xn = !0, dispatchEvent(t), Xn = !1
                }
            })), addEventListener("x-storagemutated-1", (({
                detail: e
            }) => {
                Xn || Qn(e)
            })));
            let Xn = !1;
            if ("undefined" != typeof BroadcastChannel) {
                const e = new BroadcastChannel("x-storagemutated-1");
                Jt("storagemutated", (t => {
                    Xn || e.postMessage(t)
                })), e.onmessage = e => {
                    e.data && Qn(e.data)
                }
            } else if ("undefined" != typeof self && "undefined" != typeof navigator) {
                Jt("storagemutated", (e => {
                    try {
                        Xn || ("undefined" != typeof localStorage && localStorage.setItem("x-storagemutated-1", JSON.stringify({
                            trig: Math.random(),
                            changedParts: e
                        })), "object" == typeof self.clients && [...self.clients.matchAll({
                            includeUncontrolled: !0
                        })].forEach((t => t.postMessage({
                            type: "x-storagemutated-1",
                            changedParts: e
                        }))))
                    } catch (e) {}
                })), "undefined" != typeof addEventListener && addEventListener("storage", (e => {
                    if ("x-storagemutated-1" === e.key) {
                        const t = JSON.parse(e.newValue);
                        t && Qn(t.changedParts)
                    }
                }));
                const e = self.document && navigator.serviceWorker;
                e && e.addEventListener("message", (function({
                    data: e
                }) {
                    e && "x-storagemutated-1" === e.type && Qn(e.changedParts)
                }))
            }
            Ie.rejectionMapper = function(e, t) {
                if (!e || e instanceof z || e instanceof TypeError || e instanceof SyntaxError || !e.name || !te[e.name]) return e;
                var n = new te[e.name](t || e.message, e);
                return "stack" in e && f(n, "stack", {
                    get: function() {
                        return this.inner.stack
                    }
                }), n
            }, q(M, xt)
        }
    }
]);
//# sourceMappingURL=../34510-c5556c479c29a23fdf55.js.map