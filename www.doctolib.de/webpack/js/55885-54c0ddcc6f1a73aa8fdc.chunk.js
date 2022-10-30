(self.webpackChunkdoctolib = self.webpackChunkdoctolib || []).push([
    [55885], {
        498765: (e, r, t) => {
            "use strict";
            t.d(r, {
                default: () => l
            });
            var n, i, a, f = t(999591),
                o = t.n(f),
                s = {};
            s.toRGBA8 = function(e) {
                var r = e.width,
                    t = e.height;
                if (null == e.tabs.acTL) return [s.toRGBA8.decodeImage(e.data, r, t, e).buffer];
                var n = [];
                null == e.frames[0].data && (e.frames[0].data = e.data);
                for (var i = r * t * 4, a = new Uint8Array(i), f = new Uint8Array(i), o = new Uint8Array(i), l = 0; l < e.frames.length; l++) {
                    var c = e.frames[l],
                        u = c.rect.x,
                        d = c.rect.y,
                        h = c.rect.width,
                        v = c.rect.height,
                        g = s.toRGBA8.decodeImage(c.data, h, v, e);
                    if (0 != l)
                        for (var p = 0; p < i; p++) o[p] = a[p];
                    if (0 == c.blend ? s._copyTile(g, h, v, a, r, t, u, d, 0) : 1 == c.blend && s._copyTile(g, h, v, a, r, t, u, d, 1), n.push(a.buffer.slice(0)), 0 == c.dispose);
                    else if (1 == c.dispose) s._copyTile(f, h, v, a, r, t, u, d, 0);
                    else if (2 == c.dispose)
                        for (p = 0; p < i; p++) a[p] = o[p]
                }
                return n
            }, s.toRGBA8.decodeImage = function(e, r, t, n) {
                var i = r * t,
                    a = s.decode._getBPP(n),
                    f = Math.ceil(r * a / 8),
                    o = new Uint8Array(4 * i),
                    l = new Uint32Array(o.buffer),
                    c = n.ctype,
                    u = n.depth,
                    d = s._bin.readUshort;
                Date.now();
                if (6 == c) {
                    var h = i << 2;
                    if (8 == u)
                        for (var v = 0; v < h; v += 4) o[v] = e[v], o[v + 1] = e[v + 1], o[v + 2] = e[v + 2], o[v + 3] = e[v + 3];
                    if (16 == u)
                        for (v = 0; v < h; v++) o[v] = e[v << 1]
                } else if (2 == c) {
                    var g = n.tabs.tRNS;
                    if (null == g) {
                        if (8 == u)
                            for (v = 0; v < i; v++) {
                                var p = 3 * v;
                                l[v] = 255 << 24 | e[p + 2] << 16 | e[p + 1] << 8 | e[p]
                            }
                        if (16 == u)
                            for (v = 0; v < i; v++) {
                                p = 6 * v;
                                l[v] = 255 << 24 | e[p + 4] << 16 | e[p + 2] << 8 | e[p]
                            }
                    } else {
                        var b = g[0],
                            w = g[1],
                            y = g[2];
                        if (8 == u)
                            for (v = 0; v < i; v++) {
                                var m = v << 2;
                                p = 3 * v;
                                l[v] = 255 << 24 | e[p + 2] << 16 | e[p + 1] << 8 | e[p], e[p] == b && e[p + 1] == w && e[p + 2] == y && (o[m + 3] = 0)
                            }
                        if (16 == u)
                            for (v = 0; v < i; v++) {
                                m = v << 2, p = 6 * v;
                                l[v] = 255 << 24 | e[p + 4] << 16 | e[p + 2] << 8 | e[p], d(e, p) == b && d(e, p + 2) == w && d(e, p + 4) == y && (o[m + 3] = 0)
                            }
                    }
                } else if (3 == c) {
                    var A = n.tabs.PLTE,
                        U = n.tabs.tRNS,
                        _ = U ? U.length : 0;
                    if (1 == u)
                        for (var H = 0; H < t; H++) {
                            var I = H * f,
                                q = H * r;
                            for (v = 0; v < r; v++) {
                                m = q + v << 2;
                                var M = 3 * (T = e[I + (v >> 3)] >> 7 - ((7 & v) << 0) & 1);
                                o[m] = A[M], o[m + 1] = A[M + 1], o[m + 2] = A[M + 2], o[m + 3] = T < _ ? U[T] : 255
                            }
                        }
                    if (2 == u)
                        for (H = 0; H < t; H++)
                            for (I = H * f, q = H * r, v = 0; v < r; v++) {
                                m = q + v << 2, M = 3 * (T = e[I + (v >> 2)] >> 6 - ((3 & v) << 1) & 3);
                                o[m] = A[M], o[m + 1] = A[M + 1], o[m + 2] = A[M + 2], o[m + 3] = T < _ ? U[T] : 255
                            }
                    if (4 == u)
                        for (H = 0; H < t; H++)
                            for (I = H * f, q = H * r, v = 0; v < r; v++) {
                                m = q + v << 2, M = 3 * (T = e[I + (v >> 1)] >> 4 - ((1 & v) << 2) & 15);
                                o[m] = A[M], o[m + 1] = A[M + 1], o[m + 2] = A[M + 2], o[m + 3] = T < _ ? U[T] : 255
                            }
                    if (8 == u)
                        for (v = 0; v < i; v++) {
                            var T;
                            m = v << 2, M = 3 * (T = e[v]);
                            o[m] = A[M], o[m + 1] = A[M + 1], o[m + 2] = A[M + 2], o[m + 3] = T < _ ? U[T] : 255
                        }
                } else if (4 == c) {
                    if (8 == u)
                        for (v = 0; v < i; v++) {
                            m = v << 2;
                            var R = e[x = v << 1];
                            o[m] = R, o[m + 1] = R, o[m + 2] = R, o[m + 3] = e[x + 1]
                        }
                    if (16 == u)
                        for (v = 0; v < i; v++) {
                            var x;
                            m = v << 2, R = e[x = v << 2];
                            o[m] = R, o[m + 1] = R, o[m + 2] = R, o[m + 3] = e[x + 2]
                        }
                } else if (0 == c)
                    for (b = n.tabs.tRNS ? n.tabs.tRNS : -1, H = 0; H < t; H++) {
                        var z = H * f,
                            D = H * r;
                        if (1 == u)
                            for (var N = 0; N < r; N++) {
                                var P = (R = 255 * (e[z + (N >>> 3)] >>> 7 - (7 & N) & 1)) == 255 * b ? 0 : 255;
                                l[D + N] = P << 24 | R << 16 | R << 8 | R
                            } else if (2 == u)
                                for (N = 0; N < r; N++) {
                                    P = (R = 85 * (e[z + (N >>> 2)] >>> 6 - ((3 & N) << 1) & 3)) == 85 * b ? 0 : 255;
                                    l[D + N] = P << 24 | R << 16 | R << 8 | R
                                } else if (4 == u)
                                    for (N = 0; N < r; N++) {
                                        P = (R = 17 * (e[z + (N >>> 1)] >>> 4 - ((1 & N) << 2) & 15)) == 17 * b ? 0 : 255;
                                        l[D + N] = P << 24 | R << 16 | R << 8 | R
                                    } else if (8 == u)
                                        for (N = 0; N < r; N++) {
                                            P = (R = e[z + N]) == b ? 0 : 255;
                                            l[D + N] = P << 24 | R << 16 | R << 8 | R
                                        } else if (16 == u)
                                            for (N = 0; N < r; N++) {
                                                R = e[z + (N << 1)], P = d(e, z + (N << v)) == b ? 0 : 255;
                                                l[D + N] = P << 24 | R << 16 | R << 8 | R
                                            }
                    }
                return o
            }, s.decode = function(e) {
                for (var r, t = new Uint8Array(e), n = 8, i = s._bin, a = i.readUshort, f = i.readUint, o = {
                        tabs: {},
                        frames: []
                    }, l = new Uint8Array(t.length), c = 0, u = 0, d = [137, 80, 78, 71, 13, 10, 26, 10], h = 0; h < 8; h++)
                    if (t[h] != d[h]) throw "The input is not a PNG file!";
                for (; n < t.length;) {
                    var v = i.readUint(t, n);
                    n += 4;
                    var g = i.readASCII(t, n, 4);
                    if (n += 4, "IHDR" == g) s.decode._IHDR(t, n, o);
                    else if ("IDAT" == g) {
                        for (h = 0; h < v; h++) l[c + h] = t[n + h];
                        c += v
                    } else if ("acTL" == g) o.tabs[g] = {
                        num_frames: f(t, n),
                        num_plays: f(t, n + 4)
                    }, r = new Uint8Array(t.length);
                    else if ("fcTL" == g) {
                        var p;
                        if (0 != u)(p = o.frames[o.frames.length - 1]).data = s.decode._decompress(o, r.slice(0, u), p.rect.width, p.rect.height), u = 0;
                        var b = {
                                x: f(t, n + 12),
                                y: f(t, n + 16),
                                width: f(t, n + 4),
                                height: f(t, n + 8)
                            },
                            w = a(t, n + 22);
                        w = a(t, n + 20) / (0 == w ? 100 : w);
                        var y = {
                            rect: b,
                            delay: Math.round(1e3 * w),
                            dispose: t[n + 24],
                            blend: t[n + 25]
                        };
                        o.frames.push(y)
                    } else if ("fdAT" == g) {
                        for (h = 0; h < v - 4; h++) r[u + h] = t[n + h + 4];
                        u += v - 4
                    } else if ("pHYs" == g) o.tabs[g] = [i.readUint(t, n), i.readUint(t, n + 4), t[n + 8]];
                    else if ("cHRM" == g) {
                        o.tabs[g] = [];
                        for (h = 0; h < 8; h++) o.tabs[g].push(i.readUint(t, n + 4 * h))
                    } else if ("tEXt" == g) {
                        null == o.tabs[g] && (o.tabs[g] = {});
                        var m = i.nextZero(t, n),
                            A = i.readASCII(t, n, m - n),
                            U = i.readASCII(t, m + 1, n + v - m - 1);
                        o.tabs[g][A] = U
                    } else if ("iTXt" == g) {
                        null == o.tabs[g] && (o.tabs[g] = {});
                        m = 0;
                        var _ = n;
                        m = i.nextZero(t, _);
                        A = i.readASCII(t, _, m - _), t[_ = m + 1], t[_ + 1];
                        _ += 2, m = i.nextZero(t, _);
                        i.readASCII(t, _, m - _);
                        _ = m + 1, m = i.nextZero(t, _);
                        i.readUTF8(t, _, m - _);
                        _ = m + 1;
                        U = i.readUTF8(t, _, v - (_ - n));
                        o.tabs[g][A] = U
                    } else if ("PLTE" == g) o.tabs[g] = i.readBytes(t, n, v);
                    else if ("hIST" == g) {
                        var H = o.tabs.PLTE.length / 3;
                        o.tabs[g] = [];
                        for (h = 0; h < H; h++) o.tabs[g].push(a(t, n + 2 * h))
                    } else if ("tRNS" == g) 3 == o.ctype ? o.tabs[g] = i.readBytes(t, n, v) : 0 == o.ctype ? o.tabs[g] = a(t, n) : 2 == o.ctype && (o.tabs[g] = [a(t, n), a(t, n + 2), a(t, n + 4)]);
                    else if ("gAMA" == g) o.tabs[g] = i.readUint(t, n) / 1e5;
                    else if ("sRGB" == g) o.tabs[g] = t[n];
                    else if ("bKGD" == g) 0 == o.ctype || 4 == o.ctype ? o.tabs[g] = [a(t, n)] : 2 == o.ctype || 6 == o.ctype ? o.tabs[g] = [a(t, n), a(t, n + 2), a(t, n + 4)] : 3 == o.ctype && (o.tabs[g] = t[n]);
                    else if ("IEND" == g) break;
                    n += v;
                    i.readUint(t, n);
                    n += 4
                }
                0 != u && ((p = o.frames[o.frames.length - 1]).data = s.decode._decompress(o, r.slice(0, u), p.rect.width, p.rect.height), u = 0);
                return o.data = s.decode._decompress(o, l, o.width, o.height), delete o.compress, delete o.interlace, delete o.filter, o
            }, s.decode._decompress = function(e, r, t, n) {
                Date.now();
                var i = s.decode._getBPP(e),
                    a = Math.ceil(t * i / 8),
                    f = new Uint8Array((a + 1 + e.interlace) * n);
                r = s.decode._inflate(r, f);
                Date.now();
                return 0 == e.interlace ? r = s.decode._filterZero(r, e, 0, t, n) : 1 == e.interlace && (r = s.decode._readInterlace(r, e)), r
            }, s.decode._inflate = function(e, r) {
                return s.inflateRaw(new Uint8Array(e.buffer, 2, e.length - 6), r)
            }, s.inflateRaw = ((a = {}).H = {}, a.H.N = function(e, r) {
                var t, n, i = Uint8Array,
                    f = 0,
                    o = 0,
                    s = 0,
                    l = 0,
                    c = 0,
                    u = 0,
                    d = 0,
                    h = 0,
                    v = 0;
                if (3 == e[0] && 0 == e[1]) return r || new i(0);
                var g = a.H,
                    p = g.b,
                    b = g.e,
                    w = g.R,
                    y = g.n,
                    m = g.A,
                    A = g.Z,
                    U = g.m,
                    _ = null == r;
                for (_ && (r = new i(e.length >>> 2 << 3)); 0 == f;)
                    if (f = p(e, v, 1), o = p(e, v + 1, 2), v += 3, 0 != o) {
                        if (_ && (r = a.H.W(r, h + (1 << 17))), 1 == o && (t = U.J, n = U.h, u = 511, d = 31), 2 == o) {
                            s = b(e, v, 5) + 257, l = b(e, v + 5, 5) + 1, c = b(e, v + 10, 4) + 4, v += 14;
                            for (var H = 1, I = 0; I < 38; I += 2) U.Q[I] = 0, U.Q[I + 1] = 0;
                            for (I = 0; I < c; I++) {
                                var q = b(e, v + 3 * I, 3);
                                U.Q[1 + (U.X[I] << 1)] = q, q > H && (H = q)
                            }
                            v += 3 * c, y(U.Q, H), m(U.Q, H, U.u), t = U.w, n = U.d, v = w(U.u, (1 << H) - 1, s + l, e, v, U.v);
                            var M = g.V(U.v, 0, s, U.C);
                            u = (1 << M) - 1;
                            var T = g.V(U.v, s, l, U.D);
                            d = (1 << T) - 1, y(U.C, M), m(U.C, M, t), y(U.D, T), m(U.D, T, n)
                        }
                        for (;;) {
                            var R = t[A(e, v) & u];
                            v += 15 & R;
                            var x = R >>> 4;
                            if (x >>> 8 == 0) r[h++] = x;
                            else {
                                if (256 == x) break;
                                var z = h + x - 254;
                                if (x > 264) {
                                    var D = U.q[x - 257];
                                    z = h + (D >>> 3) + b(e, v, 7 & D), v += 7 & D
                                }
                                var N = n[A(e, v) & d];
                                v += 15 & N;
                                var P = N >>> 4,
                                    S = U.c[P],
                                    C = (S >>> 4) + p(e, v, 15 & S);
                                for (v += 15 & S; h < z;) r[h] = r[h++ - C], r[h] = r[h++ - C], r[h] = r[h++ - C], r[h] = r[h++ - C];
                                h = z
                            }
                        }
                    } else {
                        0 != (7 & v) && (v += 8 - (7 & v));
                        var L = 4 + (v >>> 3),
                            B = e[L - 4] | e[L - 3] << 8;
                        _ && (r = a.H.W(r, h + B)), r.set(new i(e.buffer, e.byteOffset + L, B), h), v = L + B << 3, h += B
                    }
                return r.length == h ? r : r.slice(0, h)
            }, a.H.W = function(e, r) {
                var t = e.length;
                if (r <= t) return e;
                var n = new Uint8Array(t << 1);
                return n.set(e, 0), n
            }, a.H.R = function(e, r, t, n, i, f) {
                for (var o = a.H.e, s = a.H.Z, l = 0; l < t;) {
                    var c = e[s(n, i) & r];
                    i += 15 & c;
                    var u = c >>> 4;
                    if (u <= 15) f[l] = u, l++;
                    else {
                        var d = 0,
                            h = 0;
                        16 == u ? (h = 3 + o(n, i, 2), i += 2, d = f[l - 1]) : 17 == u ? (h = 3 + o(n, i, 3), i += 3) : 18 == u && (h = 11 + o(n, i, 7), i += 7);
                        for (var v = l + h; l < v;) f[l] = d, l++
                    }
                }
                return i
            }, a.H.V = function(e, r, t, n) {
                for (var i = 0, a = 0, f = n.length >>> 1; a < t;) {
                    var o = e[a + r];
                    n[a << 1] = 0, n[1 + (a << 1)] = o, o > i && (i = o), a++
                }
                for (; a < f;) n[a << 1] = 0, n[1 + (a << 1)] = 0, a++;
                return i
            }, a.H.n = function(e, r) {
                for (var t, n, i, f, o = a.H.m, s = e.length, l = o.j, c = 0; c <= r; c++) l[c] = 0;
                for (c = 1; c < s; c += 2) l[e[c]]++;
                var u = o.K;
                for (t = 0, l[0] = 0, n = 1; n <= r; n++) t = t + l[n - 1] << 1, u[n] = t;
                for (i = 0; i < s; i += 2) 0 != (f = e[i + 1]) && (e[i] = u[f], u[f]++)
            }, a.H.A = function(e, r, t) {
                for (var n = e.length, i = a.H.m.r, f = 0; f < n; f += 2)
                    if (0 != e[f + 1])
                        for (var o = f >> 1, s = e[f + 1], l = o << 4 | s, c = r - s, u = e[f] << c, d = u + (1 << c); u != d;) t[i[u] >>> 15 - r] = l, u++
            }, a.H.l = function(e, r) {
                for (var t = a.H.m.r, n = 15 - r, i = 0; i < e.length; i += 2) {
                    var f = e[i] << r - e[i + 1];
                    e[i] = t[f] >>> n
                }
            }, a.H.M = function(e, r, t) {
                t <<= 7 & r;
                var n = r >>> 3;
                e[n] |= t, e[n + 1] |= t >>> 8
            }, a.H.I = function(e, r, t) {
                t <<= 7 & r;
                var n = r >>> 3;
                e[n] |= t, e[n + 1] |= t >>> 8, e[n + 2] |= t >>> 16
            }, a.H.e = function(e, r, t) {
                return (e[r >>> 3] | e[1 + (r >>> 3)] << 8) >>> (7 & r) & (1 << t) - 1
            }, a.H.b = function(e, r, t) {
                return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r) & (1 << t) - 1
            }, a.H.Z = function(e, r) {
                return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16) >>> (7 & r)
            }, a.H.i = function(e, r) {
                return (e[r >>> 3] | e[1 + (r >>> 3)] << 8 | e[2 + (r >>> 3)] << 16 | e[3 + (r >>> 3)] << 24) >>> (7 & r)
            }, a.H.m = (n = Uint16Array, i = Uint32Array, {
                K: new n(16),
                j: new n(16),
                X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
                T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
                q: new n(32),
                p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
                z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
                c: new i(32),
                J: new n(512),
                _: [],
                h: new n(32),
                $: [],
                w: new n(32768),
                C: [],
                v: [],
                d: new n(32768),
                D: [],
                u: new n(512),
                Q: [],
                r: new n(32768),
                s: new i(286),
                Y: new i(30),
                a: new i(19),
                t: new i(15e3),
                k: new n(65536),
                g: new n(32768)
            }), function() {
                for (var e = a.H.m, r = 0; r < 32768; r++) {
                    var t = r;
                    t = (4278255360 & (t = (4042322160 & (t = (3435973836 & (t = (2863311530 & t) >>> 1 | (1431655765 & t) << 1)) >>> 2 | (858993459 & t) << 2)) >>> 4 | (252645135 & t) << 4)) >>> 8 | (16711935 & t) << 8, e.r[r] = (t >>> 16 | t << 16) >>> 17
                }

                function n(e, r, t) {
                    for (; 0 != r--;) e.push(0, t)
                }
                for (r = 0; r < 32; r++) e.q[r] = e.S[r] << 3 | e.T[r], e.c[r] = e.p[r] << 4 | e.z[r];
                n(e._, 144, 8), n(e._, 112, 9), n(e._, 24, 7), n(e._, 8, 8), a.H.n(e._, 9), a.H.A(e._, 9, e.J), a.H.l(e._, 9), n(e.$, 32, 5), a.H.n(e.$, 5), a.H.A(e.$, 5, e.h), a.H.l(e.$, 5), n(e.Q, 19, 0), n(e.C, 286, 0), n(e.D, 30, 0), n(e.v, 320, 0)
            }(), a.H.N), s.decode._readInterlace = function(e, r) {
                for (var t = r.width, n = r.height, i = s.decode._getBPP(r), a = i >> 3, f = Math.ceil(t * i / 8), o = new Uint8Array(n * f), l = 0, c = [0, 0, 4, 0, 2, 0, 1], u = [0, 4, 0, 2, 0, 1, 0], d = [8, 8, 8, 4, 4, 2, 2], h = [8, 8, 4, 4, 2, 2, 1], v = 0; v < 7;) {
                    for (var g = d[v], p = h[v], b = 0, w = 0, y = c[v]; y < n;) y += g, w++;
                    for (var m = u[v]; m < t;) m += p, b++;
                    var A = Math.ceil(b * i / 8);
                    s.decode._filterZero(e, r, l, b, w);
                    for (var U = 0, _ = c[v]; _ < n;) {
                        for (var H = u[v], I = l + U * A << 3; H < t;) {
                            var q;
                            if (1 == i) q = (q = e[I >> 3]) >> 7 - (7 & I) & 1, o[_ * f + (H >> 3)] |= q << 7 - ((7 & H) << 0);
                            if (2 == i) q = (q = e[I >> 3]) >> 6 - (7 & I) & 3, o[_ * f + (H >> 2)] |= q << 6 - ((3 & H) << 1);
                            if (4 == i) q = (q = e[I >> 3]) >> 4 - (7 & I) & 15, o[_ * f + (H >> 1)] |= q << 4 - ((1 & H) << 2);
                            if (i >= 8)
                                for (var M = _ * f + H * a, T = 0; T < a; T++) o[M + T] = e[(I >> 3) + T];
                            I += i, H += p
                        }
                        U++, _ += g
                    }
                    b * w != 0 && (l += w * (1 + A)), v += 1
                }
                return o
            }, s.decode._getBPP = function(e) {
                return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth
            }, s.decode._filterZero = function(e, r, t, n, i) {
                var a = s.decode._getBPP(r),
                    f = Math.ceil(n * a / 8),
                    o = s.decode._paeth;
                a = Math.ceil(a / 8);
                var l = 0,
                    c = 1,
                    u = e[t],
                    d = 0;
                if (u > 1 && (e[t] = [0, 0, 1][u - 2]), 3 == u)
                    for (d = a; d < f; d++) e[d + 1] = e[d + 1] + (e[d + 1 - a] >>> 1) & 255;
                for (var h = 0; h < i; h++)
                    if (d = 0, 0 == (u = e[(c = (l = t + h * f) + h + 1) - 1]))
                        for (; d < f; d++) e[l + d] = e[c + d];
                    else if (1 == u) {
                    for (; d < a; d++) e[l + d] = e[c + d];
                    for (; d < f; d++) e[l + d] = e[c + d] + e[l + d - a]
                } else if (2 == u)
                    for (; d < f; d++) e[l + d] = e[c + d] + e[l + d - f];
                else if (3 == u) {
                    for (; d < a; d++) e[l + d] = e[c + d] + (e[l + d - f] >>> 1);
                    for (; d < f; d++) e[l + d] = e[c + d] + (e[l + d - f] + e[l + d - a] >>> 1)
                } else {
                    for (; d < a; d++) e[l + d] = e[c + d] + o(0, e[l + d - f], 0);
                    for (; d < f; d++) e[l + d] = e[c + d] + o(e[l + d - a], e[l + d - f], e[l + d - a - f])
                }
                return e
            }, s.decode._paeth = function(e, r, t) {
                var n = e + r - t,
                    i = n - e,
                    a = n - r,
                    f = n - t;
                return i * i <= a * a && i * i <= f * f ? e : a * a <= f * f ? r : t
            }, s.decode._IHDR = function(e, r, t) {
                var n = s._bin;
                t.width = n.readUint(e, r), r += 4, t.height = n.readUint(e, r), r += 4, t.depth = e[r], r++, t.ctype = e[r], r++, t.compress = e[r], r++, t.filter = e[r], r++, t.interlace = e[r], r++
            }, s._bin = {
                nextZero: function(e, r) {
                    for (; 0 != e[r];) r++;
                    return r
                },
                readUshort: function(e, r) {
                    return e[r] << 8 | e[r + 1]
                },
                writeUshort: function(e, r, t) {
                    e[r] = t >> 8 & 255, e[r + 1] = 255 & t
                },
                readUint: function(e, r) {
                    return 16777216 * e[r] + (e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3])
                },
                writeUint: function(e, r, t) {
                    e[r] = t >> 24 & 255, e[r + 1] = t >> 16 & 255, e[r + 2] = t >> 8 & 255, e[r + 3] = 255 & t
                },
                readASCII: function(e, r, t) {
                    for (var n = "", i = 0; i < t; i++) n += String.fromCharCode(e[r + i]);
                    return n
                },
                writeASCII: function(e, r, t) {
                    for (var n = 0; n < t.length; n++) e[r + n] = t.charCodeAt(n)
                },
                readBytes: function(e, r, t) {
                    for (var n = [], i = 0; i < t; i++) n.push(e[r + i]);
                    return n
                },
                pad: function(e) {
                    return e.length < 2 ? "0" + e : e
                },
                readUTF8: function(e, r, t) {
                    for (var n, i = "", a = 0; a < t; a++) i += "%" + s._bin.pad(e[r + a].toString(16));
                    try {
                        n = decodeURIComponent(i)
                    } catch (n) {
                        return s._bin.readASCII(e, r, t)
                    }
                    return n
                }
            }, s._copyTile = function(e, r, t, n, i, a, f, o, s) {
                for (var l = Math.min(r, i), c = Math.min(t, a), u = 0, d = 0, h = 0; h < c; h++)
                    for (var v = 0; v < l; v++)
                        if (f >= 0 && o >= 0 ? (u = h * r + v << 2, d = (o + h) * i + f + v << 2) : (u = (-o + h) * r - f + v << 2, d = h * i + v << 2), 0 == s) n[d] = e[u], n[d + 1] = e[u + 1], n[d + 2] = e[u + 2], n[d + 3] = e[u + 3];
                        else if (1 == s) {
                    var g = e[u + 3] * (1 / 255),
                        p = e[u] * g,
                        b = e[u + 1] * g,
                        w = e[u + 2] * g,
                        y = n[d + 3] * (1 / 255),
                        m = n[d] * y,
                        A = n[d + 1] * y,
                        U = n[d + 2] * y,
                        _ = 1 - g,
                        H = g + y * _,
                        I = 0 == H ? 0 : 1 / H;
                    n[d + 3] = 255 * H, n[d + 0] = (p + m * _) * I, n[d + 1] = (b + A * _) * I, n[d + 2] = (w + U * _) * I
                } else if (2 == s) {
                    g = e[u + 3], p = e[u], b = e[u + 1], w = e[u + 2], y = n[d + 3], m = n[d], A = n[d + 1], U = n[d + 2];
                    g == y && p == m && b == A && w == U ? (n[d] = 0, n[d + 1] = 0, n[d + 2] = 0, n[d + 3] = 0) : (n[d] = p, n[d + 1] = b, n[d + 2] = w, n[d + 3] = g)
                } else if (3 == s) {
                    g = e[u + 3], p = e[u], b = e[u + 1], w = e[u + 2], y = n[d + 3], m = n[d], A = n[d + 1], U = n[d + 2];
                    if (g == y && p == m && b == A && w == U) continue;
                    if (g < 220 && y > 20) return !1
                }
                return !0
            }, s.encode = function(e, r, t, n, i, a, f) {
                null == n && (n = 0), null == f && (f = !1);
                var o = s.encode.compress(e, r, t, n, [!1, !1, !1, 0, f]);
                return s.encode.compressPNG(o, -1), s.encode._main(o, r, t, i, a)
            }, s.encodeLL = function(e, r, t, n, i, a, f, o) {
                for (var l = {
                        ctype: 0 + (1 == n ? 0 : 2) + (0 == i ? 0 : 4),
                        depth: a,
                        frames: []
                    }, c = (Date.now(), (n + i) * a), u = c * r, d = 0; d < e.length; d++) l.frames.push({
                    rect: {
                        x: 0,
                        y: 0,
                        width: r,
                        height: t
                    },
                    img: new Uint8Array(e[d]),
                    blend: 0,
                    dispose: 1,
                    bpp: Math.ceil(c / 8),
                    bpl: Math.ceil(u / 8)
                });
                return s.encode.compressPNG(l, 0, !0), s.encode._main(l, r, t, f, o)
            }, s.encode._main = function(e, r, t, n, i) {
                null == i && (i = {});
                var a = s.crc.crc,
                    f = s._bin.writeUint,
                    o = s._bin.writeUshort,
                    l = s._bin.writeASCII,
                    c = 8,
                    u = e.frames.length > 1,
                    d = !1,
                    h = 33 + (u ? 20 : 0);
                if (null != i.sRGB && (h += 13), null != i.pHYs && (h += 21), 3 == e.ctype) {
                    for (var v = e.plte.length, g = 0; g < v; g++) e.plte[g] >>> 24 != 255 && (d = !0);
                    h += 8 + 3 * v + 4 + (d ? 8 + 1 * v + 4 : 0)
                }
                for (var p = 0; p < e.frames.length; p++) {
                    u && (h += 38), h += (I = e.frames[p]).cimg.length + 12, 0 != p && (h += 4)
                }
                h += 12;
                var b = new Uint8Array(h),
                    w = [137, 80, 78, 71, 13, 10, 26, 10];
                for (g = 0; g < 8; g++) b[g] = w[g];
                if (f(b, c, 13), l(b, c += 4, "IHDR"), f(b, c += 4, r), f(b, c += 4, t), b[c += 4] = e.depth, b[++c] = e.ctype, b[++c] = 0, b[++c] = 0, b[++c] = 0, f(b, ++c, a(b, c - 17, 17)), c += 4, null != i.sRGB && (f(b, c, 1), l(b, c += 4, "sRGB"), b[c += 4] = i.sRGB, f(b, ++c, a(b, c - 5, 5)), c += 4), null != i.pHYs && (f(b, c, 9), l(b, c += 4, "pHYs"), f(b, c += 4, i.pHYs[0]), f(b, c += 4, i.pHYs[1]), b[c += 4] = i.pHYs[2], f(b, ++c, a(b, c - 13, 13)), c += 4), u && (f(b, c, 8), l(b, c += 4, "acTL"), f(b, c += 4, e.frames.length), f(b, c += 4, null != i.loop ? i.loop : 0), f(b, c += 4, a(b, c - 12, 12)), c += 4), 3 == e.ctype) {
                    f(b, c, 3 * (v = e.plte.length)), l(b, c += 4, "PLTE"), c += 4;
                    for (g = 0; g < v; g++) {
                        var y = 3 * g,
                            m = e.plte[g],
                            A = 255 & m,
                            U = m >>> 8 & 255,
                            _ = m >>> 16 & 255;
                        b[c + y + 0] = A, b[c + y + 1] = U, b[c + y + 2] = _
                    }
                    if (f(b, c += 3 * v, a(b, c - 3 * v - 4, 3 * v + 4)), c += 4, d) {
                        f(b, c, v), l(b, c += 4, "tRNS"), c += 4;
                        for (g = 0; g < v; g++) b[c + g] = e.plte[g] >>> 24 & 255;
                        f(b, c += v, a(b, c - v - 4, v + 4)), c += 4
                    }
                }
                var H = 0;
                for (p = 0; p < e.frames.length; p++) {
                    var I = e.frames[p];
                    u && (f(b, c, 26), l(b, c += 4, "fcTL"), f(b, c += 4, H++), f(b, c += 4, I.rect.width), f(b, c += 4, I.rect.height), f(b, c += 4, I.rect.x), f(b, c += 4, I.rect.y), o(b, c += 4, n[p]), o(b, c += 2, 1e3), b[c += 2] = I.dispose, b[++c] = I.blend, f(b, ++c, a(b, c - 30, 30)), c += 4);
                    var q = I.cimg;
                    f(b, c, (v = q.length) + (0 == p ? 0 : 4));
                    var M = c += 4;
                    l(b, c, 0 == p ? "IDAT" : "fdAT"), c += 4, 0 != p && (f(b, c, H++), c += 4), b.set(q, c), f(b, c += v, a(b, M, c - M)), c += 4
                }
                return f(b, c, 0), l(b, c += 4, "IEND"), f(b, c += 4, a(b, c - 4, 4)), c += 4, b.buffer
            }, s.encode.compressPNG = function(e, r, t) {
                for (var n = 0; n < e.frames.length; n++) {
                    var i = e.frames[n],
                        a = (i.rect.width, i.rect.height),
                        f = new Uint8Array(a * i.bpl + a);
                    i.cimg = s.encode._filterZero(i.img, a, i.bpp, i.bpl, f, r, t)
                }
            }, s.encode.compress = function(e, r, t, n, i) {
                for (var a = i[0], f = i[1], o = i[2], l = i[3], c = i[4], u = 6, d = 8, h = 255, v = 0; v < e.length; v++)
                    for (var g = new Uint8Array(e[v]), p = g.length, b = 0; b < p; b += 4) h &= g[b + 3];
                var w = 255 != h,
                    y = s.encode.framize(e, r, t, a, f, o),
                    m = {},
                    A = [],
                    U = [];
                if (0 != n) {
                    var _ = [];
                    for (b = 0; b < y.length; b++) _.push(y[b].img.buffer);
                    var H = s.encode.concatRGBA(_),
                        I = s.quantize(H, n),
                        q = 0,
                        M = new Uint8Array(I.abuf);
                    for (b = 0; b < y.length; b++) {
                        var T = (j = y[b].img).length;
                        U.push(new Uint8Array(I.inds.buffer, q >> 2, T >> 2));
                        for (v = 0; v < T; v += 4) j[v] = M[q + v], j[v + 1] = M[q + v + 1], j[v + 2] = M[q + v + 2], j[v + 3] = M[q + v + 3];
                        q += T
                    }
                    for (b = 0; b < I.plte.length; b++) A.push(I.plte[b].est.rgba)
                } else
                    for (v = 0; v < y.length; v++) {
                        var R = y[v],
                            x = new Uint32Array(R.img.buffer),
                            z = R.rect.width,
                            D = (p = x.length, new Uint8Array(p));
                        U.push(D);
                        for (b = 0; b < p; b++) {
                            var N = x[b];
                            if (0 != b && N == x[b - 1]) D[b] = D[b - 1];
                            else if (b > z && N == x[b - z]) D[b] = D[b - z];
                            else {
                                var P = m[N];
                                if (null == P && (m[N] = P = A.length, A.push(N), A.length >= 300)) break;
                                D[b] = P
                            }
                        }
                    }
                var S = A.length;
                S <= 256 && 0 == c && (d = S <= 2 ? 1 : S <= 4 ? 2 : S <= 16 ? 4 : 8, d = Math.max(d, l));
                for (v = 0; v < y.length; v++) {
                    (R = y[v]).rect.x, R.rect.y, z = R.rect.width;
                    var C = R.rect.height,
                        L = R.img,
                        B = (new Uint32Array(L.buffer), 4 * z),
                        G = 4;
                    if (S <= 256 && 0 == c) {
                        B = Math.ceil(d * z / 8);
                        for (var Z = new Uint8Array(B * C), k = U[v], E = 0; E < C; E++) {
                            b = E * B;
                            var F = E * z;
                            if (8 == d)
                                for (var Y = 0; Y < z; Y++) Z[b + Y] = k[F + Y];
                            else if (4 == d)
                                for (Y = 0; Y < z; Y++) Z[b + (Y >> 1)] |= k[F + Y] << 4 - 4 * (1 & Y);
                            else if (2 == d)
                                for (Y = 0; Y < z; Y++) Z[b + (Y >> 2)] |= k[F + Y] << 6 - 2 * (3 & Y);
                            else if (1 == d)
                                for (Y = 0; Y < z; Y++) Z[b + (Y >> 3)] |= k[F + Y] << 7 - 1 * (7 & Y)
                        }
                        L = Z, u = 3, G = 1
                    } else if (0 == w && 1 == y.length) {
                        Z = new Uint8Array(z * C * 3);
                        var Q = z * C;
                        for (b = 0; b < Q; b++) {
                            var j, K = 4 * b;
                            Z[j = 3 * b] = L[K], Z[j + 1] = L[K + 1], Z[j + 2] = L[K + 2]
                        }
                        L = Z, u = 2, G = 3, B = 3 * z
                    }
                    R.img = L, R.bpl = B, R.bpp = G
                }
                return {
                    ctype: u,
                    depth: d,
                    plte: A,
                    frames: y
                }
            }, s.encode.framize = function(e, r, t, n, i, a) {
                for (var f = [], o = 0; o < e.length; o++) {
                    var l, c = new Uint8Array(e[o]),
                        u = new Uint32Array(c.buffer),
                        d = 0,
                        h = 0,
                        v = r,
                        g = t,
                        p = n ? 1 : 0;
                    if (0 != o) {
                        for (var b = a || n || 1 == o || 0 != f[o - 2].dispose ? 1 : 2, w = 0, y = 1e9, m = 0; m < b; m++) {
                            for (var A = new Uint8Array(e[o - 1 - m]), U = new Uint32Array(e[o - 1 - m]), _ = r, H = t, I = -1, q = -1, M = 0; M < t; M++)
                                for (var T = 0; T < r; T++) {
                                    u[S = M * r + T] != U[S] && (T < _ && (_ = T), T > I && (I = T), M < H && (H = M), M > q && (q = M))
                                } - 1 == I && (_ = H = I = q = 0), i && (1 == (1 & _) && _--, 1 == (1 & H) && H--);
                            var R = (I - _ + 1) * (q - H + 1);
                            R < y && (y = R, w = m, d = _, h = H, v = I - _ + 1, g = q - H + 1)
                        }
                        A = new Uint8Array(e[o - 1 - w]);
                        1 == w && (f[o - 1].dispose = 2), l = new Uint8Array(v * g * 4), s._copyTile(A, r, t, l, v, g, -d, -h, 0), 1 == (p = s._copyTile(c, r, t, l, v, g, -d, -h, 3) ? 1 : 0) ? s.encode._prepareDiff(c, r, t, l, {
                            x: d,
                            y: h,
                            width: v,
                            height: g
                        }) : s._copyTile(c, r, t, l, v, g, -d, -h, 0)
                    } else l = c.slice(0);
                    f.push({
                        rect: {
                            x: d,
                            y: h,
                            width: v,
                            height: g
                        },
                        img: l,
                        blend: p,
                        dispose: 0
                    })
                }
                if (n)
                    for (o = 0; o < f.length; o++) {
                        if (1 != (C = f[o]).blend) {
                            var x = C.rect,
                                z = f[o - 1].rect,
                                D = Math.min(x.x, z.x),
                                N = Math.min(x.y, z.y),
                                P = {
                                    x: D,
                                    y: N,
                                    width: Math.max(x.x + x.width, z.x + z.width) - D,
                                    height: Math.max(x.y + x.height, z.y + z.height) - N
                                };
                            f[o - 1].dispose = 1, o - 1 != 0 && s.encode._updateFrame(e, r, t, f, o - 1, P, i), s.encode._updateFrame(e, r, t, f, o, P, i)
                        }
                    }
                if (1 != e.length)
                    for (var S = 0; S < f.length; S++) {
                        var C;
                        (C = f[S]).rect.width * C.rect.height
                    }
                return f
            }, s.encode._updateFrame = function(e, r, t, n, i, a, f) {
                for (var o = Uint8Array, l = Uint32Array, c = new o(e[i - 1]), u = new l(e[i - 1]), d = i + 1 < e.length ? new o(e[i + 1]) : null, h = new o(e[i]), v = new l(h.buffer), g = r, p = t, b = -1, w = -1, y = 0; y < a.height; y++)
                    for (var m = 0; m < a.width; m++) {
                        var A = a.x + m,
                            U = a.y + y,
                            _ = U * r + A,
                            H = v[_];
                        0 == H || 0 == n[i - 1].dispose && u[_] == H && (null == d || 0 != d[4 * _ + 3]) || (A < g && (g = A), A > b && (b = A), U < p && (p = U), U > w && (w = U))
                    } - 1 == b && (g = p = b = w = 0), f && (1 == (1 & g) && g--, 1 == (1 & p) && p--), a = {
                        x: g,
                        y: p,
                        width: b - g + 1,
                        height: w - p + 1
                    };
                var I = n[i];
                I.rect = a, I.blend = 1, I.img = new Uint8Array(a.width * a.height * 4), 0 == n[i - 1].dispose ? (s._copyTile(c, r, t, I.img, a.width, a.height, -a.x, -a.y, 0), s.encode._prepareDiff(h, r, t, I.img, a)) : s._copyTile(h, r, t, I.img, a.width, a.height, -a.x, -a.y, 0)
            }, s.encode._prepareDiff = function(e, r, t, n, i) {
                s._copyTile(e, r, t, n, i.width, i.height, -i.x, -i.y, 2)
            }, s.encode._filterZero = function(e, r, t, n, i, a, f) {
                var l, c = [],
                    u = [0, 1, 2, 3, 4]; - 1 != a ? u = [a] : (r * n > 5e5 || 1 == t) && (u = [0]), f && (l = {
                    level: 0
                });
                for (var d = f && null != UZIP ? UZIP : o(), h = 0; h < u.length; h++) {
                    for (var v = 0; v < r; v++) s.encode._filterLine(i, e, v, n, t, u[h]);
                    c.push(d.deflate(i, l))
                }
                var g, p = 1e9;
                for (h = 0; h < c.length; h++) c[h].length < p && (g = h, p = c[h].length);
                return c[g]
            }, s.encode._filterLine = function(e, r, t, n, i, a) {
                var f = t * n,
                    o = f + t,
                    l = s.decode._paeth;
                if (e[o] = a, o++, 0 == a)
                    if (n < 500)
                        for (var c = 0; c < n; c++) e[o + c] = r[f + c];
                    else e.set(new Uint8Array(r.buffer, f, n), o);
                else if (1 == a) {
                    for (c = 0; c < i; c++) e[o + c] = r[f + c];
                    for (c = i; c < n; c++) e[o + c] = r[f + c] - r[f + c - i] + 256 & 255
                } else if (0 == t) {
                    for (c = 0; c < i; c++) e[o + c] = r[f + c];
                    if (2 == a)
                        for (c = i; c < n; c++) e[o + c] = r[f + c];
                    if (3 == a)
                        for (c = i; c < n; c++) e[o + c] = r[f + c] - (r[f + c - i] >> 1) + 256 & 255;
                    if (4 == a)
                        for (c = i; c < n; c++) e[o + c] = r[f + c] - l(r[f + c - i], 0, 0) + 256 & 255
                } else {
                    if (2 == a)
                        for (c = 0; c < n; c++) e[o + c] = r[f + c] + 256 - r[f + c - n] & 255;
                    if (3 == a) {
                        for (c = 0; c < i; c++) e[o + c] = r[f + c] + 256 - (r[f + c - n] >> 1) & 255;
                        for (c = i; c < n; c++) e[o + c] = r[f + c] + 256 - (r[f + c - n] + r[f + c - i] >> 1) & 255
                    }
                    if (4 == a) {
                        for (c = 0; c < i; c++) e[o + c] = r[f + c] + 256 - l(0, r[f + c - n], 0) & 255;
                        for (c = i; c < n; c++) e[o + c] = r[f + c] + 256 - l(r[f + c - i], r[f + c - n], r[f + c - i - n]) & 255
                    }
                }
            }, s.crc = {
                table: function() {
                    for (var e = new Uint32Array(256), r = 0; r < 256; r++) {
                        for (var t = r, n = 0; n < 8; n++) 1 & t ? t = 3988292384 ^ t >>> 1 : t >>>= 1;
                        e[r] = t
                    }
                    return e
                }(),
                update: function(e, r, t, n) {
                    for (var i = 0; i < n; i++) e = s.crc.table[255 & (e ^ r[t + i])] ^ e >>> 8;
                    return e
                },
                crc: function(e, r, t) {
                    return 4294967295 ^ s.crc.update(4294967295, e, r, t)
                }
            }, s.quantize = function(e, r) {
                for (var t = new Uint8Array(e), n = t.slice(0), i = new Uint32Array(n.buffer), a = s.quantize.getKDtree(n, r), f = a[0], o = a[1], l = (s.quantize.planeDst, t), c = i, u = l.length, d = new Uint8Array(t.length >> 2), h = 0; h < u; h += 4) {
                    var v = l[h] * (1 / 255),
                        g = l[h + 1] * (1 / 255),
                        p = l[h + 2] * (1 / 255),
                        b = l[h + 3] * (1 / 255),
                        w = s.quantize.getNearest(f, v, g, p, b);
                    d[h >> 2] = w.ind, c[h >> 2] = w.est.rgba
                }
                return {
                    abuf: n.buffer,
                    inds: d,
                    plte: o
                }
            }, s.quantize.getKDtree = function(e, r, t) {
                null == t && (t = 1e-4);
                var n = new Uint32Array(e.buffer),
                    i = {
                        i0: 0,
                        i1: e.length,
                        bst: null,
                        est: null,
                        tdst: 0,
                        left: null,
                        right: null
                    };
                i.bst = s.quantize.stats(e, i.i0, i.i1), i.est = s.quantize.estats(i.bst);
                for (var a = [i]; a.length < r;) {
                    for (var f = 0, o = 0, l = 0; l < a.length; l++) a[l].est.L > f && (f = a[l].est.L, o = l);
                    if (f < t) break;
                    var c = a[o],
                        u = s.quantize.splitPixels(e, n, c.i0, c.i1, c.est.e, c.est.eMq255);
                    if (c.i0 >= u || c.i1 <= u) c.est.L = 0;
                    else {
                        var d = {
                            i0: c.i0,
                            i1: u,
                            bst: null,
                            est: null,
                            tdst: 0,
                            left: null,
                            right: null
                        };
                        d.bst = s.quantize.stats(e, d.i0, d.i1), d.est = s.quantize.estats(d.bst);
                        var h = {
                            i0: u,
                            i1: c.i1,
                            bst: null,
                            est: null,
                            tdst: 0,
                            left: null,
                            right: null
                        };
                        h.bst = {
                            R: [],
                            m: [],
                            N: c.bst.N - d.bst.N
                        };
                        for (l = 0; l < 16; l++) h.bst.R[l] = c.bst.R[l] - d.bst.R[l];
                        for (l = 0; l < 4; l++) h.bst.m[l] = c.bst.m[l] - d.bst.m[l];
                        h.est = s.quantize.estats(h.bst), c.left = d, c.right = h, a[o] = d, a.push(h)
                    }
                }
                a.sort((function(e, r) {
                    return r.bst.N - e.bst.N
                }));
                for (l = 0; l < a.length; l++) a[l].ind = l;
                return [i, a]
            }, s.quantize.getNearest = function(e, r, t, n, i) {
                if (null == e.left) return e.tdst = s.quantize.dist(e.est.q, r, t, n, i), e;
                var a = s.quantize.planeDst(e.est, r, t, n, i),
                    f = e.left,
                    o = e.right;
                a > 0 && (f = e.right, o = e.left);
                var l = s.quantize.getNearest(f, r, t, n, i);
                if (l.tdst <= a * a) return l;
                var c = s.quantize.getNearest(o, r, t, n, i);
                return c.tdst < l.tdst ? c : l
            }, s.quantize.planeDst = function(e, r, t, n, i) {
                var a = e.e;
                return a[0] * r + a[1] * t + a[2] * n + a[3] * i - e.eMq
            }, s.quantize.dist = function(e, r, t, n, i) {
                var a = r - e[0],
                    f = t - e[1],
                    o = n - e[2],
                    s = i - e[3];
                return a * a + f * f + o * o + s * s
            }, s.quantize.splitPixels = function(e, r, t, n, i, a) {
                var f = s.quantize.vecDot;
                n -= 4;
                for (; t < n;) {
                    for (; f(e, t, i) <= a;) t += 4;
                    for (; f(e, n, i) > a;) n -= 4;
                    if (t >= n) break;
                    var o = r[t >> 2];
                    r[t >> 2] = r[n >> 2], r[n >> 2] = o, t += 4, n -= 4
                }
                for (; f(e, t, i) > a;) t -= 4;
                return t + 4
            }, s.quantize.vecDot = function(e, r, t) {
                return e[r] * t[0] + e[r + 1] * t[1] + e[r + 2] * t[2] + e[r + 3] * t[3]
            }, s.quantize.stats = function(e, r, t) {
                for (var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0], a = t - r >> 2, f = r; f < t; f += 4) {
                    var o = e[f] * (1 / 255),
                        s = e[f + 1] * (1 / 255),
                        l = e[f + 2] * (1 / 255),
                        c = e[f + 3] * (1 / 255);
                    i[0] += o, i[1] += s, i[2] += l, i[3] += c, n[0] += o * o, n[1] += o * s, n[2] += o * l, n[3] += o * c, n[5] += s * s, n[6] += s * l, n[7] += s * c, n[10] += l * l, n[11] += l * c, n[15] += c * c
                }
                return n[4] = n[1], n[8] = n[2], n[9] = n[6], n[12] = n[3], n[13] = n[7], n[14] = n[11], {
                    R: n,
                    m: i,
                    N: a
                }
            }, s.quantize.estats = function(e) {
                var r = e.R,
                    t = e.m,
                    n = e.N,
                    i = t[0],
                    a = t[1],
                    f = t[2],
                    o = t[3],
                    l = 0 == n ? 0 : 1 / n,
                    c = [r[0] - i * i * l, r[1] - i * a * l, r[2] - i * f * l, r[3] - i * o * l, r[4] - a * i * l, r[5] - a * a * l, r[6] - a * f * l, r[7] - a * o * l, r[8] - f * i * l, r[9] - f * a * l, r[10] - f * f * l, r[11] - f * o * l, r[12] - o * i * l, r[13] - o * a * l, r[14] - o * f * l, r[15] - o * o * l],
                    u = c,
                    d = s.M4,
                    h = [.5, .5, .5, .5],
                    v = 0,
                    g = 0;
                if (0 != n)
                    for (var p = 0; p < 10 && (h = d.multVec(u, h), g = Math.sqrt(d.dot(h, h)), h = d.sml(1 / g, h), !(Math.abs(g - v) < 1e-9)); p++) v = g;
                var b = [i * l, a * l, f * l, o * l];
                return {
                    Cov: c,
                    q: b,
                    e: h,
                    L: v,
                    eMq255: d.dot(d.sml(255, b), h),
                    eMq: d.dot(h, b),
                    rgba: (Math.round(255 * b[3]) << 24 | Math.round(255 * b[2]) << 16 | Math.round(255 * b[1]) << 8 | Math.round(255 * b[0]) << 0) >>> 0
                }
            }, s.M4 = {
                multVec: function(e, r) {
                    return [e[0] * r[0] + e[1] * r[1] + e[2] * r[2] + e[3] * r[3], e[4] * r[0] + e[5] * r[1] + e[6] * r[2] + e[7] * r[3], e[8] * r[0] + e[9] * r[1] + e[10] * r[2] + e[11] * r[3], e[12] * r[0] + e[13] * r[1] + e[14] * r[2] + e[15] * r[3]]
                },
                dot: function(e, r) {
                    return e[0] * r[0] + e[1] * r[1] + e[2] * r[2] + e[3] * r[3]
                },
                sml: function(e, r) {
                    return [e * r[0], e * r[1], e * r[2], e * r[3]]
                }
            }, s.encode.concatRGBA = function(e) {
                for (var r = 0, t = 0; t < e.length; t++) r += e[t].byteLength;
                var n = new Uint8Array(r),
                    i = 0;
                for (t = 0; t < e.length; t++) {
                    for (var a = new Uint8Array(e[t]), f = a.length, o = 0; o < f; o += 4) {
                        var s = a[o],
                            l = a[o + 1],
                            c = a[o + 2],
                            u = a[o + 3];
                        0 == u && (s = l = c = 0), n[i + o] = s, n[i + o + 1] = l, n[i + o + 2] = c, n[i + o + 3] = u
                    }
                    i += f
                }
                return n.buffer
            };
            const l = s
        },
        397769: (e, r, t) => {
            "use strict";
            const n = t(726597),
                i = t(640001);
            const a = {
                fromFile: async function(e) {
                    const r = await n.fromFile(e);
                    try {
                        return await i.fromTokenizer(r)
                    } finally {
                        await r.close()
                    }
                }
            };
            Object.assign(a, i), Object.defineProperty(a, "extensions", {
                get: () => i.extensions
            }), Object.defineProperty(a, "mimeTypes", {
                get: () => i.mimeTypes
            }), e.exports = a
        },
        807320: (e, r, t) => {
            t(535666);
            const n = t(377877),
                i = t(851158),
                a = t(370181),
                f = t(379520),
                o = t(606308),
                s = t(287895),
                {
                    setLogging: l
                } = t(663486);
            e.exports = {
                languages: f,
                OEM: o,
                PSM: s,
                createScheduler: n,
                createWorker: i,
                setLogging: l,
                ...a
            }
        }
    }
]);
//# sourceMappingURL=../55885-54234e06ba36b23e815a.js.map