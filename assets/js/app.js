! function (n) {
    var i = {};

    function o(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = n, o.c = i, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(n, i, function (e) {
                return t[e]
            }.bind(null, i));
        return n
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 2)
}([function (e, nn, t) {
    ! function (Zt) {
        var en;

        function tn(e) {
            return (tn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }! function (e, t) {
            "use strict";
            "object" === tn(Zt) && "object" === tn(Zt.exports) ? Zt.exports = e.document ? t(e, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function (T, e) {
            "use strict";

            function v(e) {
                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
            }

            function m(e) {
                return null != e && e === e.window
            }
            var t = [],
                n = Object.getPrototypeOf,
                a = t.slice,
                g = t.flat ? function (e) {
                    return t.flat.call(e)
                } : function (e) {
                    return t.concat.apply([], e)
                },
                l = t.push,
                o = t.indexOf,
                i = {},
                r = i.toString,
                y = i.hasOwnProperty,
                s = y.toString,
                c = s.call(Object),
                b = {},
                S = T.document,
                u = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function w(e, t, n) {
                var i, o, r = (n = n || S).createElement("script");
                if (r.text = e, t)
                    for (i in u)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
                n.head.appendChild(r).parentNode.removeChild(r)
            }

            function p(e) {
                return null == e ? e + "" : "object" === tn(e) || "function" == typeof e ? i[r.call(e)] || "object" : tn(e)
            }
            var C = function e(t, n) {
                return new e.fn.init(t, n)
            };

            function d(e) {
                var t = !!e && "length" in e && e.length,
                    n = p(e);
                return !v(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
            }
            C.fn = C.prototype = {
                jquery: "3.6.0",
                constructor: C,
                length: 0,
                toArray: function () {
                    return a.call(this)
                },
                get: function (e) {
                    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function (e) {
                    e = C.merge(this.constructor(), e);
                    return e.prevObject = this, e
                },
                each: function (e) {
                    return C.each(this, e)
                },
                map: function (n) {
                    return this.pushStack(C.map(this, function (e, t) {
                        return n.call(e, t, e)
                    }))
                },
                slice: function () {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                even: function () {
                    return this.pushStack(C.grep(this, function (e, t) {
                        return (t + 1) % 2
                    }))
                },
                odd: function () {
                    return this.pushStack(C.grep(this, function (e, t) {
                        return t % 2
                    }))
                },
                eq: function (e) {
                    var t = this.length,
                        e = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= e && e < t ? [this[e]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: t.sort,
                splice: t.splice
            }, C.extend = C.fn.extend = function () {
                var e, t, n, i, o, r = arguments[0] || {},
                    s = 1,
                    a = arguments.length,
                    l = !1;
                for ("boolean" == typeof r && (l = r, r = arguments[s] || {}, s++), "object" === tn(r) || v(r) || (r = {}), s === a && (r = this, s--); s < a; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = e[t], "__proto__" !== t && r !== n && (l && n && (C.isPlainObject(n) || (i = Array.isArray(n))) ? (o = r[t], o = i && !Array.isArray(o) ? [] : i || C.isPlainObject(o) ? o : {}, i = !1, r[t] = C.extend(l, o, n)) : void 0 !== n && (r[t] = n));
                return r
            }, C.extend({
                expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {},
                isPlainObject: function (e) {
                    return !(!e || "[object Object]" !== r.call(e) || (e = n(e)) && ("function" != typeof (e = y.call(e, "constructor") && e.constructor) || s.call(e) !== c))
                },
                isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0
                },
                globalEval: function (e, t, n) {
                    w(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function (e, t) {
                    var n, i = 0;
                    if (d(e))
                        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                },
                makeArray: function (e, t) {
                    t = t || [];
                    return null != e && (d(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : o.call(t, e, n)
                },
                merge: function (e, t) {
                    for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                    return e.length = o, e
                },
                grep: function (e, t, n) {
                    for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
                    return i
                },
                map: function (e, t, n) {
                    var i, o, r = 0,
                        s = [];
                    if (d(e))
                        for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
                    else
                        for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                    return g(s)
                },
                guid: 1,
                support: b
            }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                i["[object " + t + "]"] = t.toLowerCase()
            });
            var h = function (n) {
                function d(e, t) {
                    return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
                }

                function h(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }

                function i() {
                    T()
                }
                var e, f, w, r, o, p, v, m, x, l, c, T, S, s, C, g, a, u, y, E = "sizzle" + +new Date,
                    b = n.document,
                    k = 0,
                    L = 0,
                    O = le(),
                    z = le(),
                    P = le(),
                    M = le(),
                    _ = function (e, t) {
                        return e === t && (c = !0), 0
                    },
                    $ = {}.hasOwnProperty,
                    t = [],
                    A = t.pop,
                    D = t.push,
                    j = t.push,
                    N = t.slice,
                    I = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    H = "[\\x20\\t\\r\\n\\f]",
                    q = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    B = "\\[" + H + "*(" + q + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + H + "*\\]",
                    F = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
                    W = new RegExp(H + "+", "g"),
                    G = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                    V = new RegExp("^" + H + "*," + H + "*"),
                    Y = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                    X = new RegExp(H + "|>"),
                    U = new RegExp(F),
                    K = new RegExp("^" + q + "$"),
                    Q = {
                        ID: new RegExp("^#(" + q + ")"),
                        CLASS: new RegExp("^\\.(" + q + ")"),
                        TAG: new RegExp("^(" + q + "|[*])"),
                        ATTR: new RegExp("^" + B),
                        PSEUDO: new RegExp("^" + F),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + R + ")$", "i"),
                        needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                    },
                    J = /HTML$/i,
                    Z = /^(?:input|select|textarea|button)$/i,
                    ee = /^h\d$/i,
                    te = /^[^{]+\{\s*\[native \w/,
                    ne = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ie = /[+~]/,
                    oe = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    se = ye(function (e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    j.apply(t = N.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
                } catch (n) {
                    j = {
                        apply: t.length ? function (e, t) {
                            D.apply(e, N.call(t))
                        } : function (e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }

                function ae(e, t, n, i) {
                    var o, r, s, a, l, c, u = t && t.ownerDocument,
                        d = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
                    if (!i && (T(t), t = t || S, C)) {
                        if (11 !== d && (a = ne.exec(e)))
                            if (c = a[1]) {
                                if (9 === d) {
                                    if (!(r = t.getElementById(c))) return n;
                                    if (r.id === c) return n.push(r), n
                                } else if (u && (r = u.getElementById(c)) && y(t, r) && r.id === c) return n.push(r), n
                            } else {
                                if (a[2]) return j.apply(n, t.getElementsByTagName(e)), n;
                                if ((c = a[3]) && f.getElementsByClassName && t.getElementsByClassName) return j.apply(n, t.getElementsByClassName(c)), n
                            } if (f.qsa && !M[e + " "] && (!g || !g.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
                            if (c = e, u = t, 1 === d && (X.test(e) || Y.test(e))) {
                                for ((u = ie.test(e) && ve(t.parentNode) || t) === t && f.scope || ((s = t.getAttribute("id")) ? s = s.replace(re, h) : t.setAttribute("id", s = E)), o = (l = p(e)).length; o--;) l[o] = (s ? "#" + s : ":scope") + " " + ge(l[o]);
                                c = l.join(",")
                            }
                            try {
                                return j.apply(n, u.querySelectorAll(c)), n
                            } catch (t) {
                                M(e, !0)
                            } finally {
                                s === E && t.removeAttribute("id")
                            }
                        }
                    }
                    return m(e.replace(G, "$1"), t, n, i)
                }

                function le() {
                    var i = [];
                    return function e(t, n) {
                        return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n
                    }
                }

                function ce(e) {
                    return e[E] = !0, e
                }

                function ue(e) {
                    var t = S.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t)
                    }
                }

                function de(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
                }

                function he(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(t) {
                    return function (e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function pe(s) {
                    return ce(function (r) {
                        return r = +r, ce(function (e, t) {
                            for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                        })
                    })
                }

                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (e in f = ae.support = {}, o = ae.isXML = function (e) {
                        var t = e && e.namespaceURI,
                            e = e && (e.ownerDocument || e).documentElement;
                        return !J.test(t || e && e.nodeName || "HTML")
                    }, T = ae.setDocument = function (e) {
                        var t, e = e ? e.ownerDocument || e : b;
                        return e != S && 9 === e.nodeType && e.documentElement && (s = (S = e).documentElement, C = !o(S), b != S && (t = S.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", i, !1) : t.attachEvent && t.attachEvent("onunload", i)), f.scope = ue(function (e) {
                            return s.appendChild(e).appendChild(S.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        }), f.attributes = ue(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), f.getElementsByTagName = ue(function (e) {
                            return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
                        }), f.getElementsByClassName = te.test(S.getElementsByClassName), f.getById = ue(function (e) {
                            return s.appendChild(e).id = E, !S.getElementsByName || !S.getElementsByName(E).length
                        }), f.getById ? (w.filter.ID = function (e) {
                            var t = e.replace(oe, d);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }, w.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && C) {
                                e = t.getElementById(e);
                                return e ? [e] : []
                            }
                        }) : (w.filter.ID = function (e) {
                            var t = e.replace(oe, d);
                            return function (e) {
                                e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return e && e.value === t
                            }
                        }, w.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && C) {
                                var n, i, o, r = t.getElementById(e);
                                if (r) {
                                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                    for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                                }
                                return []
                            }
                        }), w.find.TAG = f.getElementsByTagName ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, i = [],
                                o = 0,
                                r = t.getElementsByTagName(e);
                            if ("*" !== e) return r;
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }, w.find.CLASS = f.getElementsByClassName && function (e, t) {
                            if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
                        }, a = [], g = [], (f.qsa = te.test(S.querySelectorAll)) && (ue(function (e) {
                            var t;
                            s.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + E + "-]").length || g.push("~="), (t = S.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                        }), ue(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = S.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        })), (f.matchesSelector = te.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ue(function (e) {
                            f.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), a.push("!=", F)
                        }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), t = te.test(s.compareDocumentPosition), y = t || te.test(s.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                t = t && t.parentNode;
                            return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                        } : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, _ = t ? function (e, t) {
                            return e === t ? (c = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e == S || e.ownerDocument == b && y(b, e) ? -1 : t == S || t.ownerDocument == b && y(b, t) ? 1 : l ? I(l, e) - I(l, t) : 0 : 4 & n ? -1 : 1);
                            var n
                        } : function (e, t) {
                            if (e === t) return c = !0, 0;
                            var n, i = 0,
                                o = e.parentNode,
                                r = t.parentNode,
                                s = [e],
                                a = [t];
                            if (!o || !r) return e == S ? -1 : t == S ? 1 : o ? -1 : r ? 1 : l ? I(l, e) - I(l, t) : 0;
                            if (o === r) return he(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; s[i] === a[i];) i++;
                            return i ? he(s[i], a[i]) : s[i] == b ? -1 : a[i] == b ? 1 : 0
                        }), S
                    }, ae.matches = function (e, t) {
                        return ae(e, null, null, t)
                    }, ae.matchesSelector = function (e, t) {
                        if (T(e), f.matchesSelector && C && !M[t + " "] && (!a || !a.test(t)) && (!g || !g.test(t))) try {
                            var n = u.call(e, t);
                            if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (e) {
                            M(t, !0)
                        }
                        return 0 < ae(t, S, null, [e]).length
                    }, ae.contains = function (e, t) {
                        return (e.ownerDocument || e) != S && T(e), y(e, t)
                    }, ae.attr = function (e, t) {
                        (e.ownerDocument || e) != S && T(e);
                        var n = w.attrHandle[t.toLowerCase()],
                            n = n && $.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                        return void 0 !== n ? n : f.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                    }, ae.escape = function (e) {
                        return (e + "").replace(re, h)
                    }, ae.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ae.uniqueSort = function (e) {
                        var t, n = [],
                            i = 0,
                            o = 0;
                        if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(_), c) {
                            for (; t = e[o++];) t === e[o] && (i = n.push(o));
                            for (; i--;) e.splice(n[i], 1)
                        }
                        return l = null, e
                    }, r = ae.getText = function (e) {
                        var t, n = "",
                            i = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[i++];) n += r(t);
                        return n
                    }, (w = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: ce,
                        match: Q,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(oe, d), e[3] = (e[3] || e[4] || e[5] || "").replace(oe, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                            },
                            PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(oe, d).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function (e) {
                                var t = O[e + " "];
                                return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && O(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (t, n, i) {
                                return function (e) {
                                    e = ae.attr(e, t);
                                    return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(W, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                                }
                            },
                            CHILD: function (p, e, t, v, m) {
                                var g = "nth" !== p.slice(0, 3),
                                    y = "last" !== p.slice(-4),
                                    b = "of-type" === e;
                                return 1 === v && 0 === m ? function (e) {
                                    return !!e.parentNode
                                } : function (e, t, n) {
                                    var i, o, r, s, a, l, c = g != y ? "nextSibling" : "previousSibling",
                                        u = e.parentNode,
                                        d = b && e.nodeName.toLowerCase(),
                                        h = !n && !b,
                                        f = !1;
                                    if (u) {
                                        if (g) {
                                            for (; c;) {
                                                for (s = e; s = s[c];)
                                                    if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                                l = c = "only" === p && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                            for (f = (a = (i = (o = (r = (s = u)[E] || (s[E] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === k && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (f = a = 0) || l.pop();)
                                                if (1 === s.nodeType && ++f && s === e) {
                                                    o[p] = [k, a, f];
                                                    break
                                                }
                                        } else if (!1 === (f = h ? a = (i = (o = (r = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === k && i[1] : f))
                                            for (;
                                                (s = ++a && s && s[c] || (f = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++f || (h && ((o = (r = s[E] || (s[E] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] = [k, f]), s !== e)););
                                        return (f -= m) === v || f % v == 0 && 0 <= f / v
                                    }
                                }
                            },
                            PSEUDO: function (e, r) {
                                var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return s[E] ? s(r) : 1 < s.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, t) {
                                    for (var n, i = s(e, r), o = i.length; o--;) e[n = I(e, i[o])] = !(t[n] = i[o])
                                }) : function (e) {
                                    return s(e, 0, t)
                                }) : s
                            }
                        },
                        pseudos: {
                            not: ce(function (e) {
                                var i = [],
                                    o = [],
                                    a = v(e.replace(G, "$1"));
                                return a[E] ? ce(function (e, t, n, i) {
                                    for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                                }) : function (e, t, n) {
                                    return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
                                }
                            }),
                            has: ce(function (t) {
                                return function (e) {
                                    return 0 < ae(t, e).length
                                }
                            }),
                            contains: ce(function (t) {
                                return t = t.replace(oe, d),
                                    function (e) {
                                        return -1 < (e.textContent || r(e)).indexOf(t)
                                    }
                            }),
                            lang: ce(function (n) {
                                return K.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(oe, d).toLowerCase(),
                                    function (e) {
                                        var t;
                                        do {
                                            if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (e) {
                                var t = n.location && n.location.hash;
                                return t && t.slice(1) === e.id
                            },
                            root: function (e) {
                                return e === s
                            },
                            focus: function (e) {
                                return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: fe(!1),
                            disabled: fe(!0),
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function (e) {
                                return !w.pseudos.empty(e)
                            },
                            header: function (e) {
                                return ee.test(e.nodeName)
                            },
                            input: function (e) {
                                return Z.test(e.nodeName)
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function (e) {
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: pe(function () {
                                return [0]
                            }),
                            last: pe(function (e, t) {
                                return [t - 1]
                            }),
                            eq: pe(function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: pe(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: pe(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: pe(function (e, t, n) {
                                for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                                return e
                            }),
                            gt: pe(function (e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            })
                        }
                    }).pseudos.nth = w.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) w.pseudos[e] = function (t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) w.pseudos[e] = function (n) {
                    return function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n
                    }
                }(e);

                function me() {}

                function ge(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function ye(s, e, t) {
                    var a = e.dir,
                        l = e.next,
                        c = l || a,
                        u = t && "parentNode" === c,
                        d = L++;
                    return e.first ? function (e, t, n) {
                        for (; e = e[a];)
                            if (1 === e.nodeType || u) return s(e, t, n);
                        return !1
                    } : function (e, t, n) {
                        var i, o, r = [k, d];
                        if (n) {
                            for (; e = e[a];)
                                if ((1 === e.nodeType || u) && s(e, t, n)) return !0
                        } else
                            for (; e = e[a];)
                                if (1 === e.nodeType || u)
                                    if (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[a] || e;
                                    else {
                                        if ((o = i[c]) && o[0] === k && o[1] === d) return r[2] = o[2];
                                        if ((i[c] = r)[2] = s(e, t, n)) return !0
                                    } return !1
                    }
                }

                function be(o) {
                    return 1 < o.length ? function (e, t, n) {
                        for (var i = o.length; i--;)
                            if (!o[i](e, t, n)) return !1;
                        return !0
                    } : o[0]
                }

                function we(e, t, n, i, o) {
                    for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
                    return s
                }

                function xe(e) {
                    for (var i, t, n, o = e.length, r = w.relative[e[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = ye(function (e) {
                            return e === i
                        }, s, !0), c = ye(function (e) {
                            return -1 < I(i, e)
                        }, s, !0), u = [function (e, t, n) {
                            n = !r && (n || t !== x) || ((i = t).nodeType ? l : c)(e, t, n);
                            return i = null, n
                        }]; a < o; a++)
                        if (t = w.relative[e[a].type]) u = [ye(be(u), t)];
                        else {
                            if ((t = w.filter[e[a].type].apply(null, e[a].matches))[E]) {
                                for (n = ++a; n < o && !w.relative[e[n].type]; n++);
                                return function e(f, p, v, m, g, t) {
                                    return m && !m[E] && (m = e(m)), g && !g[E] && (g = e(g, t)), ce(function (e, t, n, i) {
                                        var o, r, s, a = [],
                                            l = [],
                                            c = t.length,
                                            u = e || function (e, t, n) {
                                                for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                                                return n
                                            }(p || "*", n.nodeType ? [n] : n, []),
                                            d = !f || !e && p ? u : we(u, a, f, n, i),
                                            h = v ? g || (e ? f : c || m) ? [] : t : d;
                                        if (v && v(d, h, n, i), m)
                                            for (o = we(h, l), m(o, [], n, i), r = o.length; r--;)(s = o[r]) && (h[l[r]] = !(d[l[r]] = s));
                                        if (e) {
                                            if (g || f) {
                                                if (g) {
                                                    for (o = [], r = h.length; r--;)(s = h[r]) && o.push(d[r] = s);
                                                    g(null, h = [], o, i)
                                                }
                                                for (r = h.length; r--;)(s = h[r]) && -1 < (o = g ? I(e, s) : a[r]) && (e[o] = !(t[o] = s))
                                            }
                                        } else h = we(h === t ? h.splice(c, h.length) : h), g ? g(null, t, h, i) : j.apply(t, h)
                                    })
                                }(1 < a && be(u), 1 < a && ge(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(G, "$1"), t, a < n && xe(e.slice(a, n)), n < o && xe(e = e.slice(n)), n < o && ge(e))
                            }
                            u.push(t)
                        } return be(u)
                }
                return me.prototype = w.filters = w.pseudos, w.setFilters = new me, p = ae.tokenize = function (e, t) {
                    var n, i, o, r, s, a, l, c = z[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, a = [], l = w.preFilter; s;) {
                        for (r in n && !(i = V.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = Y.exec(s)) && (n = i.shift(), o.push({
                                value: n,
                                type: i[0].replace(G, " ")
                            }), s = s.slice(n.length)), w.filter) !(i = Q[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: r,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? ae.error(e) : z(e, a).slice(0)
                }, v = ae.compile = function (e, t) {
                    var n, m, g, y, b, i = [],
                        o = [],
                        r = P[e + " "];
                    if (!r) {
                        for (n = (t = t || p(e)).length; n--;)((r = xe(t[n]))[E] ? i : o).push(r);
                        (r = P(e, (m = o, y = 0 < (g = i).length, b = 0 < m.length, y ? ce(s) : s))).selector = e
                    }

                    function s(e, t, n, i, o) {
                        var r, s, a, l = 0,
                            c = "0",
                            u = e && [],
                            d = [],
                            h = x,
                            f = e || b && w.find.TAG("*", o),
                            p = k += null == h ? 1 : Math.random() || .1,
                            v = f.length;
                        for (o && (x = t == S || t || o); c !== v && null != (r = f[c]); c++) {
                            if (b && r) {
                                for (s = 0, t || r.ownerDocument == S || (T(r), n = !C); a = m[s++];)
                                    if (a(r, t || S, n)) {
                                        i.push(r);
                                        break
                                    } o && (k = p)
                            }
                            y && ((r = !a && r) && l--, e && u.push(r))
                        }
                        if (l += c, y && c !== l) {
                            for (s = 0; a = g[s++];) a(u, d, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; c--;) u[c] || d[c] || (d[c] = A.call(i));
                                d = we(d)
                            }
                            j.apply(i, d), o && !e && 0 < d.length && 1 < l + g.length && ae.uniqueSort(i)
                        }
                        return o && (k = p, x = h), u
                    }
                    return r
                }, m = ae.select = function (e, t, n, i) {
                    var o, r, s, a, l, c = "function" == typeof e && e,
                        u = !i && p(e = c.selector || e);
                    if (n = n || [], 1 === u.length) {
                        if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && C && w.relative[r[1].type]) {
                            if (!(t = (w.find.ID(s.matches[0].replace(oe, d), t) || [])[0])) return n;
                            c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                        }
                        for (o = Q.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                            if ((l = w.find[a]) && (i = l(s.matches[0].replace(oe, d), ie.test(r[0].type) && ve(t.parentNode) || t))) {
                                if (r.splice(o, 1), !(e = i.length && ge(r))) return j.apply(n, i), n;
                                break
                            }
                    }
                    return (c || v(e, u))(i, t, !C, n, !t || ie.test(e) && ve(t.parentNode) || t), n
                }, f.sortStable = E.split("").sort(_).join("") === E, f.detectDuplicates = !!c, T(), f.sortDetached = ue(function (e) {
                    return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
                }), ue(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || de("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), f.attributes && ue(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || de("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ue(function (e) {
                    return null == e.getAttribute("disabled")
                }) || de(R, function (e, t, n) {
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
                }), ae
            }(T);
            C.find = h, (C.expr = h.selectors)[":"] = C.expr.pseudos, C.uniqueSort = C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains, C.escapeSelector = h.escape;

            function f(e, t, n) {
                for (var i = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && C(e).is(n)) break;
                        i.push(e)
                    } return i
            }

            function x(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
            var E = C.expr.match.needsContext;

            function k(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function O(e, n, i) {
                return v(n) ? C.grep(e, function (e, t) {
                    return !!n.call(e, t, e) !== i
                }) : n.nodeType ? C.grep(e, function (e) {
                    return e === n !== i
                }) : "string" != typeof n ? C.grep(e, function (e) {
                    return -1 < o.call(n, e) !== i
                }) : C.filter(n, e, i)
            }
            C.filter = function (e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, C.fn.extend({
                find: function (e) {
                    var t, n, i = this.length,
                        o = this;
                    if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
                        for (t = 0; t < i; t++)
                            if (C.contains(o[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, o[t], n);
                    return 1 < i ? C.uniqueSort(n) : n
                },
                filter: function (e) {
                    return this.pushStack(O(this, e || [], !1))
                },
                not: function (e) {
                    return this.pushStack(O(this, e || [], !0))
                },
                is: function (e) {
                    return !!O(this, "string" == typeof e && E.test(e) ? C(e) : e || [], !1).length
                }
            });
            var z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (C.fn.init = function (e, t, n) {
                if (!e) return this;
                if (n = n || P, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : z.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                if (i[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), L.test(i[1]) && C.isPlainObject(t))
                        for (var i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (e = S.getElementById(i[2])) && (this[0] = e, this.length = 1), this
            }).prototype = C.fn;
            var P = C(S),
                M = /^(?:parents|prev(?:Until|All))/,
                _ = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function $(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            C.fn.extend({
                has: function (e) {
                    var t = C(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++)
                            if (C.contains(this, t[e])) return !0
                    })
                },
                closest: function (e, t) {
                    var n, i = 0,
                        o = this.length,
                        r = [],
                        s = "string" != typeof e && C(e);
                    if (!E.test(e))
                        for (; i < o; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                    r.push(n);
                                    break
                                } return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), C.each({
                parent: function (e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function (e) {
                    return f(e, "parentNode")
                },
                parentsUntil: function (e, t, n) {
                    return f(e, "parentNode", n)
                },
                next: function (e) {
                    return $(e, "nextSibling")
                },
                prev: function (e) {
                    return $(e, "previousSibling")
                },
                nextAll: function (e) {
                    return f(e, "nextSibling")
                },
                prevAll: function (e) {
                    return f(e, "previousSibling")
                },
                nextUntil: function (e, t, n) {
                    return f(e, "nextSibling", n)
                },
                prevUntil: function (e, t, n) {
                    return f(e, "previousSibling", n)
                },
                siblings: function (e) {
                    return x((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return x(e.firstChild)
                },
                contents: function (e) {
                    return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
                }
            }, function (i, o) {
                C.fn[i] = function (e, t) {
                    var n = C.map(this, o, e);
                    return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (_[i] || C.uniqueSort(n), M.test(i) && n.reverse()), this.pushStack(n)
                }
            });
            var A = /[^\x20\t\r\n\f]+/g;

            function D(e) {
                return e
            }

            function j(e) {
                throw e
            }

            function N(e, t, n, i) {
                var o;
                try {
                    e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            C.Callbacks = function (i) {
                var e, n;
                i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(A) || [], function (e, t) {
                    n[t] = !0
                }), n) : C.extend({}, i);

                function o() {
                    for (a = a || i.once, s = r = !0; c.length; u = -1)
                        for (t = c.shift(); ++u < l.length;) !1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && (u = l.length, t = !1);
                    i.memory || (t = !1), r = !1, a && (l = t ? [] : "")
                }
                var r, t, s, a, l = [],
                    c = [],
                    u = -1,
                    d = {
                        add: function () {
                            return l && (t && !r && (u = l.length - 1, c.push(t)), function n(e) {
                                C.each(e, function (e, t) {
                                    v(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== p(t) && n(t)
                                })
                            }(arguments), t && !r && o()), this
                        },
                        remove: function () {
                            return C.each(arguments, function (e, t) {
                                for (var n; - 1 < (n = C.inArray(t, l, n));) l.splice(n, 1), n <= u && u--
                            }), this
                        },
                        has: function (e) {
                            return e ? -1 < C.inArray(e, l) : 0 < l.length
                        },
                        empty: function () {
                            return l = l && [], this
                        },
                        disable: function () {
                            return a = c = [], l = t = "", this
                        },
                        disabled: function () {
                            return !l
                        },
                        lock: function () {
                            return a = c = [], t || r || (l = t = ""), this
                        },
                        locked: function () {
                            return !!a
                        },
                        fireWith: function (e, t) {
                            return a || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), r || o()), this
                        },
                        fire: function () {
                            return d.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!s
                        }
                    };
                return d
            }, C.extend({
                Deferred: function (e) {
                    var r = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
                        o = "pending",
                        s = {
                            state: function () {
                                return o
                            },
                            always: function () {
                                return a.done(arguments).fail(arguments), this
                            },
                            catch: function (e) {
                                return s.then(null, e)
                            },
                            pipe: function () {
                                var o = arguments;
                                return C.Deferred(function (i) {
                                    C.each(r, function (e, t) {
                                        var n = v(o[t[4]]) && o[t[4]];
                                        a[t[1]](function () {
                                            var e = n && n.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                        })
                                    }), o = null
                                }).promise()
                            },
                            then: function (t, n, i) {
                                var l = 0;

                                function c(o, r, s, a) {
                                    return function () {
                                        function e() {
                                            var e, t;
                                            if (!(o < l)) {
                                                if ((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                                t = e && ("object" === tn(e) || "function" == typeof e) && e.then, v(t) ? a ? t.call(e, c(l, r, D, a), c(l, r, j, a)) : (l++, t.call(e, c(l, r, D, a), c(l, r, j, a), c(l, r, D, r.notifyWith))) : (s !== D && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
                                            }
                                        }
                                        var n = this,
                                            i = arguments,
                                            t = a ? e : function () {
                                                try {
                                                    e()
                                                } catch (e) {
                                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== j && (n = void 0, i = [e]), r.rejectWith(n, i))
                                                }
                                            };
                                        o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), T.setTimeout(t))
                                    }
                                }
                                return C.Deferred(function (e) {
                                    r[0][3].add(c(0, e, v(i) ? i : D, e.notifyWith)), r[1][3].add(c(0, e, v(t) ? t : D)), r[2][3].add(c(0, e, v(n) ? n : j))
                                }).promise()
                            },
                            promise: function (e) {
                                return null != e ? C.extend(e, s) : s
                            }
                        },
                        a = {};
                    return C.each(r, function (e, t) {
                        var n = t[2],
                            i = t[5];
                        s[t[1]] = n.add, i && n.add(function () {
                            o = i
                        }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), a[t[0]] = function () {
                            return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                        }, a[t[0] + "With"] = n.fireWith
                    }), s.promise(a), e && e.call(a, a), a
                },
                when: function (e) {
                    function t(t) {
                        return function (e) {
                            o[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(o, r)
                        }
                    }
                    var n = arguments.length,
                        i = n,
                        o = Array(i),
                        r = a.call(arguments),
                        s = C.Deferred();
                    if (n <= 1 && (N(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || v(r[i] && r[i].then))) return s.then();
                    for (; i--;) N(r[i], t(i), s.reject);
                    return s.promise()
                }
            });
            var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            C.Deferred.exceptionHook = function (e, t) {
                T.console && T.console.warn && e && I.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, C.readyException = function (e) {
                T.setTimeout(function () {
                    throw e
                })
            };
            var R = C.Deferred();

            function H() {
                S.removeEventListener("DOMContentLoaded", H), T.removeEventListener("load", H), C.ready()
            }
            C.fn.ready = function (e) {
                return R.then(e).catch(function (e) {
                    C.readyException(e)
                }), this
            }, C.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || R.resolveWith(S, [C]))
                }
            }), C.ready.then = R.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(C.ready) : (S.addEventListener("DOMContentLoaded", H), T.addEventListener("load", H));

            function q(e, t, n, i, o, r, s) {
                var a = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === p(n))
                    for (a in o = !0, n) q(e, t, a, n[a], !0, r, s);
                else if (void 0 !== i && (o = !0, v(i) || (s = !0), t = c ? s ? (t.call(e, i), null) : (c = t, function (e, t, n) {
                        return c.call(C(e), n)
                    }) : t))
                    for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
            }
            var B = /^-ms-/,
                F = /-([a-z])/g;

            function W(e, t) {
                return t.toUpperCase()
            }

            function G(e) {
                return e.replace(B, "ms-").replace(F, W)
            }

            function V(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }

            function Y() {
                this.expando = C.expando + Y.uid++
            }
            Y.uid = 1, Y.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function (e, t, n) {
                    var i, o = this.cache(e);
                    if ("string" == typeof t) o[G(t)] = n;
                    else
                        for (i in t) o[G(i)] = t[i];
                    return o
                },
                get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
                },
                access: function (e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function (e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in i ? [t] : t.match(A) || []).length;
                            for (; n--;) delete i[t[n]]
                        }
                        void 0 !== t && !C.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function (e) {
                    e = e[this.expando];
                    return void 0 !== e && !C.isEmptyObject(e)
                }
            };
            var X = new Y,
                U = new Y,
                K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Q = /[A-Z]/g;

            function J(e, t, n) {
                var i, o;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace(Q, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                        try {
                            n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : K.test(o) ? JSON.parse(o) : o)
                        } catch (e) {}
                        U.set(e, t, n)
                    } else n = void 0;
                return n
            }
            C.extend({
                hasData: function (e) {
                    return U.hasData(e) || X.hasData(e)
                },
                data: function (e, t, n) {
                    return U.access(e, t, n)
                },
                removeData: function (e, t) {
                    U.remove(e, t)
                },
                _data: function (e, t, n) {
                    return X.access(e, t, n)
                },
                _removeData: function (e, t) {
                    X.remove(e, t)
                }
            }), C.fn.extend({
                data: function (n, e) {
                    var t, i, o, r = this[0],
                        s = r && r.attributes;
                    if (void 0 !== n) return "object" === tn(n) ? this.each(function () {
                        U.set(this, n)
                    }) : q(this, function (e) {
                        var t;
                        return r && void 0 === e ? void 0 !== (t = U.get(r, n)) || void 0 !== (t = J(r, n)) ? t : void 0 : void this.each(function () {
                            U.set(this, n, e)
                        })
                    }, null, e, 1 < arguments.length, null, !0);
                    if (this.length && (o = U.get(r), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))) {
                        for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = G(i.slice(5)), J(r, i, o[i]));
                        X.set(r, "hasDataAttrs", !0)
                    }
                    return o
                },
                removeData: function (e) {
                    return this.each(function () {
                        U.remove(this, e)
                    })
                }
            }), C.extend({
                queue: function (e, t, n) {
                    var i;
                    if (e) return i = X.get(e, t = (t || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = X.access(e, t, C.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function (e, t) {
                    var n = C.queue(e, t = t || "fx"),
                        i = n.length,
                        o = n.shift(),
                        r = C._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
                        C.dequeue(e, t)
                    }, r)), !i && r && r.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return X.get(e, n) || X.access(e, n, {
                        empty: C.Callbacks("once memory").add(function () {
                            X.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), C.fn.extend({
                queue: function (t, n) {
                    var e = 2;
                    return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                        var e = C.queue(this, t, n);
                        C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
                    })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        C.dequeue(this, e)
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    function n() {
                        --o || r.resolveWith(s, [s])
                    }
                    var i, o = 1,
                        r = C.Deferred(),
                        s = this,
                        a = this.length;
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = X.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
                    return n(), r.promise(t)
                }
            });
            var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
                te = ["Top", "Right", "Bottom", "Left"],
                ne = S.documentElement,
                ie = function (e) {
                    return C.contains(e.ownerDocument, e)
                },
                oe = {
                    composed: !0
                };
            ne.getRootNode && (ie = function (e) {
                return C.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
            });

            function re(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === C.css(e, "display")
            }

            function se(e, t, n, i) {
                var o, r, s = 20,
                    a = i ? function () {
                        return i.cur()
                    } : function () {
                        return C.css(e, t, "")
                    },
                    l = a(),
                    c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                    u = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && ee.exec(C.css(e, t));
                if (u && u[3] !== c) {
                    for (c = c || u[3], u = +(l /= 2) || 1; s--;) C.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
                    C.style(e, t, (u *= 2) + c), n = n || []
                }
                return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
            }
            var ae = {};

            function le(e, t) {
                for (var n, i, o, r, s, a = [], l = 0, c = e.length; l < c; l++)(i = e[l]).style && (n = i.style.display, t ? ("none" === n && (a[l] = X.get(i, "display") || null, a[l] || (i.style.display = "")), "" === i.style.display && re(i) && (a[l] = (s = r = void 0, r = (o = i).ownerDocument, s = o.nodeName, (o = ae[s]) || (r = r.body.appendChild(r.createElement(s)), o = C.css(r, "display"), r.parentNode.removeChild(r), ae[s] = o = "none" === o ? "block" : o)))) : "none" !== n && (a[l] = "none", X.set(i, "display", n)));
                for (l = 0; l < c; l++) null != a[l] && (e[l].style.display = a[l]);
                return e
            }
            C.fn.extend({
                show: function () {
                    return le(this, !0)
                },
                hide: function () {
                    return le(this)
                },
                toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        re(this) ? C(this).show() : C(this).hide()
                    })
                }
            });
            var ce = /^(?:checkbox|radio)$/i,
                ue = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                de = /^$|^module$|\/(?:java|ecma)script/i,
                he = S.createDocumentFragment().appendChild(S.createElement("div"));
            (h = S.createElement("input")).setAttribute("type", "radio"), h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), he.appendChild(h), b.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", b.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", b.option = !!he.lastChild;
            var fe = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function pe(e, t) {
                var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && k(e, t) ? C.merge([e], n) : n
            }

            function ve(e, t) {
                for (var n = 0, i = e.length; n < i; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
            }
            fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td, b.option || (fe.optgroup = fe.option = [1, "<select multiple='multiple'>", "</select>"]);
            var me = /<|&#?\w+;/;

            function ge(e, t, n, i, o) {
                for (var r, s, a, l, c, u = t.createDocumentFragment(), d = [], h = 0, f = e.length; h < f; h++)
                    if ((r = e[h]) || 0 === r)
                        if ("object" === p(r)) C.merge(d, r.nodeType ? [r] : r);
                        else if (me.test(r)) {
                    for (s = s || u.appendChild(t.createElement("div")), a = (ue.exec(r) || ["", ""])[1].toLowerCase(), a = fe[a] || fe._default, s.innerHTML = a[1] + C.htmlPrefilter(r) + a[2], c = a[0]; c--;) s = s.lastChild;
                    C.merge(d, s.childNodes), (s = u.firstChild).textContent = ""
                } else d.push(t.createTextNode(r));
                for (u.textContent = "", h = 0; r = d[h++];)
                    if (i && -1 < C.inArray(r, i)) o && o.push(r);
                    else if (l = ie(r), s = pe(u.appendChild(r), "script"), l && ve(s), n)
                    for (c = 0; r = s[c++];) de.test(r.type || "") && n.push(r);
                return u
            }
            var ye = /^([^.]*)(?:\.(.+)|)/;

            function be() {
                return !0
            }

            function we() {
                return !1
            }

            function xe(e, t) {
                return e === function () {
                    try {
                        return S.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }

            function Te(e, t, n, i, o, r) {
                var s, a;
                if ("object" === tn(t)) {
                    for (a in "string" != typeof n && (i = i || n, n = void 0), t) Te(e, a, n, i, t[a], r);
                    return e
                }
                if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = we;
                else if (!o) return e;
                return 1 === r && (s = o, (o = function (e) {
                    return C().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = C.guid++)), e.each(function () {
                    C.event.add(this, t, o, i, n)
                })
            }

            function Se(e, o, r) {
                r ? (X.set(e, o, !1), C.event.add(e, o, {
                    namespace: !1,
                    handler: function (e) {
                        var t, n, i = X.get(this, o);
                        if (1 & e.isTrigger && this[o]) {
                            if (i.length)(C.event.special[o] || {}).delegateType && e.stopPropagation();
                            else if (i = a.call(arguments), X.set(this, o, i), t = r(this, o), this[o](), i !== (n = X.get(this, o)) || t ? X.set(this, o, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                        } else i.length && (X.set(this, o, {
                            value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                        }), e.stopImmediatePropagation())
                    }
                })) : void 0 === X.get(e, o) && C.event.add(e, o, be)
            }
            C.event = {
                global: {},
                add: function (t, e, n, i, o) {
                    var r, s, a, l, c, u, d, h, f, p = X.get(t);
                    if (V(t))
                        for (n.handler && (n = (r = n).handler, o = r.selector), o && C.find.matchesSelector(ne, o), n.guid || (n.guid = C.guid++), (a = p.events) || (a = p.events = Object.create(null)), (s = p.handle) || (s = p.handle = function (e) {
                                return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                            }), l = (e = (e || "").match(A) || [""]).length; l--;) d = f = (c = ye.exec(e[l]) || [])[1], h = (c[2] || "").split(".").sort(), d && (u = C.event.special[d] || {}, d = (o ? u.delegateType : u.bindType) || d, u = C.event.special[d] || {}, c = C.extend({
                            type: d,
                            origType: f,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && C.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, r), (f = a[d]) || ((f = a[d] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(d, s)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), C.event.global[d] = !0)
                },
                remove: function (e, t, n, i, o) {
                    var r, s, a, l, c, u, d, h, f, p, v, m = X.hasData(e) && X.get(e);
                    if (m && (l = m.events)) {
                        for (c = (t = (t || "").match(A) || [""]).length; c--;)
                            if (f = v = (a = ye.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                                for (d = C.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                                s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || C.removeEvent(e, f, m.handle), delete l[f])
                            } else
                                for (f in l) C.event.remove(e, f + t[c], n, i, !0);
                        C.isEmptyObject(l) && X.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    var t, n, i, o, r, s = new Array(arguments.length),
                        a = C.event.fix(e),
                        l = (X.get(this, "events") || Object.create(null))[a.type] || [],
                        e = C.event.special[a.type] || {};
                    for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                    if (a.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, a)) {
                        for (r = C.event.handlers.call(this, a, l), t = 0;
                            (i = r[t++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (o = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
                        return e.postDispatch && e.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function (e, t) {
                    var n, i, o, r, s, a = [],
                        l = t.delegateCount,
                        c = e.target;
                    if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < C(o, this).index(c) : C.find(o, this, null, [c]).length), s[o] && r.push(i);
                                r.length && a.push({
                                    elem: c,
                                    handlers: r
                                })
                            } return c = this, l < t.length && a.push({
                        elem: c,
                        handlers: t.slice(l)
                    }), a
                },
                addProp: function (t, e) {
                    Object.defineProperty(C.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(e) ? function () {
                            if (this.originalEvent) return e(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[t]
                        },
                        set: function (e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            })
                        }
                    })
                },
                fix: function (e) {
                    return e[C.expando] ? e : new C.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function (e) {
                            e = this || e;
                            return ce.test(e.type) && e.click && k(e, "input") && Se(e, "click", be), !1
                        },
                        trigger: function (e) {
                            e = this || e;
                            return ce.test(e.type) && e.click && k(e, "input") && Se(e, "click"), !0
                        },
                        _default: function (e) {
                            e = e.target;
                            return ce.test(e.type) && e.click && k(e, "input") && X.get(e, "click") || k(e, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, C.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, (C.Event = function (e, t) {
                if (!(this instanceof C.Event)) return new C.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? be : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
            }).prototype = {
                constructor: C.Event,
                isDefaultPrevented: we,
                isPropagationStopped: we,
                isImmediatePropagationStopped: we,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = be, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = be, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = be, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, C.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, C.event.addProp), C.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                C.event.special[e] = {
                    setup: function () {
                        return Se(this, e, xe), !1
                    },
                    trigger: function () {
                        return Se(this, e), !0
                    },
                    _default: function () {
                        return !0
                    },
                    delegateType: t
                }
            }), C.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, o) {
                C.event.special[e] = {
                    delegateType: o,
                    bindType: o,
                    handle: function (e) {
                        var t, n = e.relatedTarget,
                            i = e.handleObj;
                        return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
                    }
                }
            }), C.fn.extend({
                on: function (e, t, n, i) {
                    return Te(this, e, t, n, i)
                },
                one: function (e, t, n, i) {
                    return Te(this, e, t, n, i, 1)
                },
                off: function (e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" !== tn(e)) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function () {
                        C.event.remove(this, e, n, t)
                    });
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
            });
            var Ce = /<script|<style|<link/i,
                Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
                ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Le(e, t) {
                return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
            }

            function Oe(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function ze(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Pe(e, t) {
                var n, i, o, r;
                if (1 === t.nodeType) {
                    if (X.hasData(e) && (r = X.get(e).events))
                        for (o in X.remove(t, "handle events"), r)
                            for (n = 0, i = r[o].length; n < i; n++) C.event.add(t, o, r[o][n]);
                    U.hasData(e) && (e = U.access(e), e = C.extend({}, e), U.set(t, e))
                }
            }

            function Me(n, i, o, r) {
                i = g(i);
                var e, t, s, a, l, c, u = 0,
                    d = n.length,
                    h = d - 1,
                    f = i[0],
                    p = v(f);
                if (p || 1 < d && "string" == typeof f && !b.checkClone && Ee.test(f)) return n.each(function (e) {
                    var t = n.eq(e);
                    p && (i[0] = f.call(this, e, t.html())), Me(t, i, o, r)
                });
                if (d && (t = (e = ge(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
                    for (a = (s = C.map(pe(e, "script"), Oe)).length; u < d; u++) l = e, u !== h && (l = C.clone(l, !0, !0), a && C.merge(s, pe(l, "script"))), o.call(n[u], l, u);
                    if (a)
                        for (c = s[s.length - 1].ownerDocument, C.map(s, ze), u = 0; u < a; u++) l = s[u], de.test(l.type || "") && !X.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce")
                        }, c) : w(l.textContent.replace(ke, ""), l, c))
                }
                return n
            }

            function _e(e, t, n) {
                for (var i, o = t ? C.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || C.cleanData(pe(i)), i.parentNode && (n && ie(i) && ve(pe(i, "script")), i.parentNode.removeChild(i));
                return e
            }
            C.extend({
                htmlPrefilter: function (e) {
                    return e
                },
                clone: function (e, t, n) {
                    var i, o, r, s, a, l, c, u = e.cloneNode(!0),
                        d = ie(e);
                    if (!(b.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                        for (s = pe(u), i = 0, o = (r = pe(e)).length; i < o; i++) a = r[i], l = s[i], c = void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                    if (t)
                        if (n)
                            for (r = r || pe(e), s = s || pe(u), i = 0, o = r.length; i < o; i++) Pe(r[i], s[i]);
                        else Pe(e, u);
                    return 0 < (s = pe(u, "script")).length && ve(s, !d && pe(e, "script")), u
                },
                cleanData: function (e) {
                    for (var t, n, i, o = C.event.special, r = 0; void 0 !== (n = e[r]); r++)
                        if (V(n)) {
                            if (t = n[X.expando]) {
                                if (t.events)
                                    for (i in t.events) o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                                n[X.expando] = void 0
                            }
                            n[U.expando] && (n[U.expando] = void 0)
                        }
                }
            }), C.fn.extend({
                detach: function (e) {
                    return _e(this, e, !0)
                },
                remove: function (e) {
                    return _e(this, e)
                },
                text: function (e) {
                    return q(this, function (e) {
                        return void 0 === e ? C.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function () {
                    return Me(this, arguments, function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                    })
                },
                prepend: function () {
                    return Me(this, arguments, function (e) {
                        var t;
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Le(this, e)).insertBefore(e, t.firstChild)
                    })
                },
                before: function () {
                    return Me(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function () {
                    return Me(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(pe(e, !1)), e.textContent = "");
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return C.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return q(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ce.test(e) && !fe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(pe(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function () {
                    var n = [];
                    return Me(this, arguments, function (e) {
                        var t = this.parentNode;
                        C.inArray(this, n) < 0 && (C.cleanData(pe(this)), t && t.replaceChild(e, this))
                    }, n)
                }
            }), C.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, s) {
                C.fn[e] = function (e) {
                    for (var t, n = [], i = C(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), C(i[r])[s](t), l.apply(n, t.get());
                    return this.pushStack(n)
                }
            });

            function $e(e) {
                var t = e.ownerDocument.defaultView;
                return (t = !t || !t.opener ? T : t).getComputedStyle(e)
            }

            function Ae(e, t, n) {
                var i, o = {};
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                for (i in n = n.call(e), t) e.style[i] = o[i];
                return n
            }
            var De, je, Ne, Ie, Re, He, qe, Be, Fe = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
                We = new RegExp(te.join("|"), "i");

            function Ge(e, t, n) {
                var i, o, r = e.style;
                return (n = n || $e(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || ie(e) || (o = C.style(e, t)), !b.pixelBoxStyles() && Fe.test(o) && We.test(t) && (i = r.width, e = r.minWidth, t = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = e, r.maxWidth = t)), void 0 !== o ? o + "" : o
            }

            function Ve(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }

            function Ye() {
                var e;
                Be && (qe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Be.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(qe).appendChild(Be), e = T.getComputedStyle(Be), De = "1%" !== e.top, He = 12 === Xe(e.marginLeft), Be.style.right = "60%", Ie = 36 === Xe(e.right), je = 36 === Xe(e.width), Be.style.position = "absolute", Ne = 12 === Xe(Be.offsetWidth / 3), ne.removeChild(qe), Be = null)
            }

            function Xe(e) {
                return Math.round(parseFloat(e))
            }
            qe = S.createElement("div"), (Be = S.createElement("div")).style && (Be.style.backgroundClip = "content-box", Be.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === Be.style.backgroundClip, C.extend(b, {
                boxSizingReliable: function () {
                    return Ye(), je
                },
                pixelBoxStyles: function () {
                    return Ye(), Ie
                },
                pixelPosition: function () {
                    return Ye(), De
                },
                reliableMarginLeft: function () {
                    return Ye(), He
                },
                scrollboxSize: function () {
                    return Ye(), Ne
                },
                reliableTrDimensions: function () {
                    var e, t, n;
                    return null == Re && (e = S.createElement("table"), t = S.createElement("tr"), n = S.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ne.appendChild(e).appendChild(t).appendChild(n), n = T.getComputedStyle(t), Re = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, ne.removeChild(e)), Re
                }
            }));
            var Ue = ["Webkit", "Moz", "ms"],
                Ke = S.createElement("div").style,
                Qe = {};

            function Je(e) {
                return C.cssProps[e] || Qe[e] || (e in Ke ? e : Qe[e] = function (e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                        if ((e = Ue[n] + t) in Ke) return e
                }(e) || e)
            }
            var Ze = /^(none|table(?!-c[ea]).+)/,
                et = /^--/,
                tt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                nt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function it(e, t, n) {
                var i = ee.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }

            function ot(e, t, n, i, o, r) {
                var s = "width" === t ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2) "margin" === n && (l += C.css(e, n + te[s], !0, o)), i ? ("content" === n && (l -= C.css(e, "padding" + te[s], !0, o)), "margin" !== n && (l -= C.css(e, "border" + te[s] + "Width", !0, o))) : (l += C.css(e, "padding" + te[s], !0, o), "padding" !== n ? l += C.css(e, "border" + te[s] + "Width", !0, o) : a += C.css(e, "border" + te[s] + "Width", !0, o));
                return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
            }

            function rt(e, t, n) {
                var i = $e(e),
                    o = (!b.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
                    r = o,
                    s = Ge(e, t, i),
                    a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Fe.test(s)) {
                    if (!n) return s;
                    s = "auto"
                }
                return (!b.boxSizingReliable() && o || !b.reliableTrDimensions() && k(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + ot(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
            }

            function st(e, t, n, i, o) {
                return new st.prototype.init(e, t, n, i, o)
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                e = Ge(e, "opacity");
                                return "" === e ? "1" : e
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, r, s, a = G(t),
                            l = et.test(t),
                            c = e.style;
                        if (l || (t = Je(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                        "string" === (r = tn(n)) && (o = ee.exec(n)) && o[1] && (n = se(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (C.cssNumber[a] ? "" : "px")), b.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function (e, t, n, i) {
                    var o, r = G(t);
                    return et.test(t) || (t = Je(r)), "normal" === (o = void 0 === (o = (r = C.cssHooks[t] || C.cssHooks[r]) && "get" in r ? r.get(e, !0, n) : o) ? Ge(e, t, i) : o) && t in nt && (o = nt[t]), "" === n || n ? (t = parseFloat(o), !0 === n || isFinite(t) ? t || 0 : o) : o
                }
            }), C.each(["height", "width"], function (e, a) {
                C.cssHooks[a] = {
                    get: function (e, t, n) {
                        if (t) return !Ze.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, a, n) : Ae(e, tt, function () {
                            return rt(e, a, n)
                        })
                    },
                    set: function (e, t, n) {
                        var i, o = $e(e),
                            r = !b.scrollboxSize() && "absolute" === o.position,
                            s = (r || n) && "border-box" === C.css(e, "boxSizing", !1, o),
                            n = n ? ot(e, a, n, s, o) : 0;
                        return s && r && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - ot(e, a, "border", !1, o) - .5)), n && (i = ee.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = C.css(e, a)), it(0, t, n)
                    }
                }
            }), C.cssHooks.marginLeft = Ve(b.reliableMarginLeft, function (e, t) {
                if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ae(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), C.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (o, r) {
                C.cssHooks[o + r] = {
                    expand: function (e) {
                        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + te[t] + r] = i[t] || i[t - 2] || i[0];
                        return n
                    }
                }, "margin" !== o && (C.cssHooks[o + r].set = it)
            }), C.fn.extend({
                css: function (e, t) {
                    return q(this, function (e, t, n) {
                        var i, o, r = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = $e(e), o = t.length; s < o; s++) r[t[s]] = C.css(e, t[s], !1, i);
                            return r
                        }
                        return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                    }, e, t, 1 < arguments.length)
                }
            }), ((C.Tween = st).prototype = {
                constructor: st,
                init: function (e, t, n, i, o, r) {
                    this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (C.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = st.propHooks[this.prop];
                    return (e && e.get ? e : st.propHooks._default).get(this)
                },
                run: function (e) {
                    var t, n = st.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : st.propHooks._default).set(this), this
                }
            }).init.prototype = st.prototype, (st.propHooks = {
                _default: {
                    get: function (e) {
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
                    },
                    set: function (e) {
                        C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }).scrollTop = st.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, C.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, (C.fx = st.prototype.init).step = {};
            var at, lt, ct = /^(?:toggle|show|hide)$/,
                ut = /queueHooks$/;

            function dt() {
                lt && (!1 === S.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(dt) : T.setTimeout(dt, C.fx.interval), C.fx.tick())
            }

            function ht() {
                return T.setTimeout(function () {
                    at = void 0
                }), at = Date.now()
            }

            function ft(e, t) {
                var n, i = 0,
                    o = {
                        height: e
                    };
                for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = te[i])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o
            }

            function pt(e, t, n) {
                for (var i, o = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                    if (i = o[r].call(n, t, e)) return i
            }

            function vt(o, e, t) {
                var n, r, i = 0,
                    s = vt.prefilters.length,
                    a = C.Deferred().always(function () {
                        delete l.elem
                    }),
                    l = function () {
                        if (r) return !1;
                        for (var e = at || ht(), e = Math.max(0, c.startTime + c.duration - e), t = 1 - (e / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++) c.tweens[n].run(t);
                        return a.notifyWith(o, [c, t, e]), t < 1 && i ? e : (i || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
                    },
                    c = a.promise({
                        elem: o,
                        props: C.extend({}, e),
                        opts: C.extend(!0, {
                            specialEasing: {},
                            easing: C.easing._default
                        }, t),
                        originalProperties: e,
                        originalOptions: t,
                        startTime: at || ht(),
                        duration: t.duration,
                        tweens: [],
                        createTween: function (e, t) {
                            e = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(e), e
                        },
                        stop: function (e) {
                            var t = 0,
                                n = e ? c.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; t < n; t++) c.tweens[t].run(1);
                            return e ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]), this
                        }
                    }),
                    u = c.props;
                for (function (e, t) {
                        var n, i, o, r, s;
                        for (n in e)
                            if (o = t[i = G(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = C.cssHooks[i]) && "expand" in s)
                                for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                            else t[i] = o
                    }(u, c.opts.specialEasing); i < s; i++)
                    if (n = vt.prefilters[i].call(c, o, u, c.opts)) return v(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
                return C.map(u, pt, c), v(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
                    elem: o,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }
            C.Animation = C.extend(vt, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return se(n.elem, e, ee.exec(t), n), n
                    }]
                },
                tweener: function (e, t) {
                    for (var n, i = 0, o = (e = v(e) ? (t = e, ["*"]) : e.match(A)).length; i < o; i++) n = e[i], vt.tweeners[n] = vt.tweeners[n] || [], vt.tweeners[n].unshift(t)
                },
                prefilters: [function (e, t, n) {
                    var i, o, r, s, a, l, c, u = "width" in t || "height" in t,
                        d = this,
                        h = {},
                        f = e.style,
                        p = e.nodeType && re(e),
                        v = X.get(e, "fxshow");
                    for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                            s.unqueued || a()
                        }), s.unqueued++, d.always(function () {
                            d.always(function () {
                                s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
                            })
                        })), t)
                        if (o = t[i], ct.test(o)) {
                            if (delete t[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                                if ("show" !== o || !v || void 0 === v[i]) continue;
                                p = !0
                            }
                            h[i] = v && v[i] || C.style(e, i)
                        } if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                        for (i in u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = v && v.display) && (c = X.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = C.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (d.done(function () {
                                f.display = c
                            }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function () {
                                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                            })), l = !1, h) l || (v ? "hidden" in v && (p = v.hidden) : v = X.access(e, "fxshow", {
                            display: c
                        }), r && (v.hidden = !p), p && le([e], !0), d.done(function () {
                            for (i in p || le([e]), X.remove(e, "fxshow"), h) C.style(e, i, h[i])
                        })), l = pt(p ? v[i] : 0, i, d), i in v || (v[i] = l.start, p && (l.end = l.start, l.start = 0))
                }],
                prefilter: function (e, t) {
                    t ? vt.prefilters.unshift(e) : vt.prefilters.push(e)
                }
            }), C.speed = function (e, t, n) {
                var i = e && "object" === tn(e) ? C.extend({}, e) : {
                    complete: n || !n && t || v(e) && e,
                    duration: e,
                    easing: n && t || t && !v(t) && t
                };
                return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    v(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
                }, i
            }, C.fn.extend({
                fadeTo: function (e, t, n, i) {
                    return this.filter(re).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function (t, e, n, i) {
                    var o = C.isEmptyObject(t),
                        r = C.speed(e, n, i),
                        i = function () {
                            var e = vt(this, C.extend({}, t), r);
                            (o || X.get(this, "finish")) && e.stop(!0)
                        };
                    return i.finish = i, o || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
                },
                stop: function (o, e, r) {
                    function s(e) {
                        var t = e.stop;
                        delete e.stop, t(r)
                    }
                    return "string" != typeof o && (r = e, e = o, o = void 0), e && this.queue(o || "fx", []), this.each(function () {
                        var e = !0,
                            t = null != o && o + "queueHooks",
                            n = C.timers,
                            i = X.get(this);
                        if (t) i[t] && i[t].stop && s(i[t]);
                        else
                            for (t in i) i[t] && i[t].stop && ut.test(t) && s(i[t]);
                        for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                        !e && r || C.dequeue(this, o)
                    })
                },
                finish: function (s) {
                    return !1 !== s && (s = s || "fx"), this.each(function () {
                        var e, t = X.get(this),
                            n = t[s + "queue"],
                            i = t[s + "queueHooks"],
                            o = C.timers,
                            r = n ? n.length : 0;
                        for (t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
                }
            }), C.each(["toggle", "show", "hide"], function (e, i) {
                var o = C.fn[i];
                C.fn[i] = function (e, t, n) {
                    return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(ft(i, !0), e, t, n)
                }
            }), C.each({
                slideDown: ft("show"),
                slideUp: ft("hide"),
                slideToggle: ft("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, i) {
                C.fn[e] = function (e, t, n) {
                    return this.animate(i, e, t, n)
                }
            }), C.timers = [], C.fx.tick = function () {
                var e, t = 0,
                    n = C.timers;
                for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || C.fx.stop(), at = void 0
            }, C.fx.timer = function (e) {
                C.timers.push(e), C.fx.start()
            }, C.fx.interval = 13, C.fx.start = function () {
                lt || (lt = !0, dt())
            }, C.fx.stop = function () {
                lt = null
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function (i, e) {
                return i = C.fx && C.fx.speeds[i] || i, this.queue(e = e || "fx", function (e, t) {
                    var n = T.setTimeout(e, i);
                    t.stop = function () {
                        T.clearTimeout(n)
                    }
                })
            }, he = S.createElement("input"), Z = S.createElement("select").appendChild(S.createElement("option")), he.type = "checkbox", b.checkOn = "" !== he.value, b.optSelected = Z.selected, (he = S.createElement("input")).value = "t", he.type = "radio", b.radioValue = "t" === he.value;
            var mt, gt = C.expr.attrHandle;
            C.fn.extend({
                attr: function (e, t) {
                    return q(this, C.attr, e, t, 1 < arguments.length)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        C.removeAttr(this, e)
                    })
                }
            }), C.extend({
                attr: function (e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === r && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(o && "get" in o && null !== (i = o.get(e, t))) && null == (i = C.find.attr(e, t)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!b.radioValue && "radio" === t && k(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function (e, t) {
                    var n, i = 0,
                        o = t && t.match(A);
                    if (o && 1 === e.nodeType)
                        for (; n = o[i++];) e.removeAttribute(n)
                }
            }), mt = {
                set: function (e, t, n) {
                    return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var s = gt[t] || C.find.attr;
                gt[t] = function (e, t, n) {
                    var i, o, r = t.toLowerCase();
                    return n || (o = gt[r], gt[r] = i, i = null != s(e, t, n) ? r : null, gt[r] = o), i
                }
            });
            var yt = /^(?:input|select|textarea|button)$/i,
                bt = /^(?:a|area)$/i;

            function wt(e) {
                return (e.match(A) || []).join(" ")
            }

            function xt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function Tt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(A) || []
            }
            C.fn.extend({
                prop: function (e, t) {
                    return q(this, C.prop, e, t, 1 < arguments.length)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[C.propFix[e] || e]
                    })
                }
            }), C.extend({
                prop: function (e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = C.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), b.optSelected || (C.propHooks.selected = {
                get: function (e) {
                    e = e.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                },
                set: function (e) {
                    e = e.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                C.propFix[this.toLowerCase()] = this
            }), C.fn.extend({
                addClass: function (t) {
                    var e, n, i, o, r, s, a = 0;
                    if (v(t)) return this.each(function (e) {
                        C(this).addClass(t.call(this, e, xt(this)))
                    });
                    if ((e = Tt(t)).length)
                        for (; n = this[a++];)
                            if (s = xt(n), i = 1 === n.nodeType && " " + wt(s) + " ") {
                                for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                s !== (s = wt(i)) && n.setAttribute("class", s)
                            } return this
                },
                removeClass: function (t) {
                    var e, n, i, o, r, s, a = 0;
                    if (v(t)) return this.each(function (e) {
                        C(this).removeClass(t.call(this, e, xt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = Tt(t)).length)
                        for (; n = this[a++];)
                            if (s = xt(n), i = 1 === n.nodeType && " " + wt(s) + " ") {
                                for (r = 0; o = e[r++];)
                                    for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                                s !== (s = wt(i)) && n.setAttribute("class", s)
                            } return this
                },
                toggleClass: function (o, t) {
                    var r = tn(o),
                        s = "string" === r || Array.isArray(o);
                    return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : v(o) ? this.each(function (e) {
                        C(this).toggleClass(o.call(this, e, xt(this), t), t)
                    }) : this.each(function () {
                        var e, t, n, i;
                        if (s)
                            for (t = 0, n = C(this), i = Tt(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                        else void 0 !== o && "boolean" !== r || ((e = xt(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && X.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    for (var t, n = 0, i = " " + e + " "; t = this[n++];)
                        if (1 === t.nodeType && -1 < (" " + wt(xt(t)) + " ").indexOf(i)) return !0;
                    return !1
                }
            });
            var St = /\r/g;
            C.fn.extend({
                val: function (t) {
                    var n, e, i, o = this[0];
                    return arguments.length ? (i = v(t), this.each(function (e) {
                        1 === this.nodeType && (null == (e = i ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = C.map(e, function (e) {
                            return null == e ? "" : e + ""
                        })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
                    })) : o ? (n = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof (e = o.value) ? e.replace(St, "") : null == e ? "" : e : void 0
                }
            }), C.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = C.find.attr(e, "value");
                            return null != t ? t : wt(C.text(e))
                        }
                    },
                    select: {
                        get: function (e) {
                            for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
                                if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !k(t.parentNode, "optgroup"))) {
                                    if (t = C(t).val(), o) return t;
                                    r.push(t)
                                } return r
                        },
                        set: function (e, t) {
                            for (var n, i, o = e.options, r = C.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), r)) && (n = !0);
                            return n || (e.selectedIndex = -1), r
                        }
                    }
                }
            }), C.each(["radio", "checkbox"], function () {
                C.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
                    }
                }, b.checkOn || (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), b.focusin = "onfocusin" in T;

            function Ct(e) {
                e.stopPropagation()
            }
            var Et = /^(?:focusinfocus|focusoutblur)$/;
            C.extend(C.event, {
                trigger: function (e, t, n, i) {
                    var o, r, s, a, l, c, u, d = [n || S],
                        h = y.call(e, "type") ? e.type : e,
                        f = y.call(e, "namespace") ? e.namespace.split(".") : [],
                        p = u = r = n = n || S;
                    if (3 !== n.nodeType && 8 !== n.nodeType && !Et.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (f = h.split(".")).shift(), f.sort()), a = h.indexOf(":") < 0 && "on" + h, (e = e[C.expando] ? e : new C.Event(h, "object" === tn(e) && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                        if (!i && !c.noBubble && !m(n)) {
                            for (s = c.delegateType || h, Et.test(s + h) || (p = p.parentNode); p; p = p.parentNode) d.push(p), r = p;
                            r === (n.ownerDocument || S) && d.push(r.defaultView || r.parentWindow || T)
                        }
                        for (o = 0;
                            (p = d[o++]) && !e.isPropagationStopped();) u = p, e.type = 1 < o ? s : c.bindType || h, (l = (X.get(p, "events") || Object.create(null))[e.type] && X.get(p, "handle")) && l.apply(p, t), (l = a && p[a]) && l.apply && V(p) && (e.result = l.apply(p, t), !1 === e.result && e.preventDefault());
                        return e.type = h, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !V(n) || a && v(n[h]) && !m(n) && ((r = n[a]) && (n[a] = null), C.event.triggered = h, e.isPropagationStopped() && u.addEventListener(h, Ct), n[h](), e.isPropagationStopped() && u.removeEventListener(h, Ct), C.event.triggered = void 0, r && (n[a] = r)), e.result
                    }
                },
                simulate: function (e, t, n) {
                    e = C.extend(new C.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    C.event.trigger(e, null, t)
                }
            }), C.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        C.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return C.event.trigger(e, t, n, !0)
                }
            }), b.focusin || C.each({
                focus: "focusin",
                blur: "focusout"
            }, function (n, i) {
                function o(e) {
                    C.event.simulate(i, e.target, C.event.fix(e))
                }
                C.event.special[i] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = X.access(e, i);
                        t || e.addEventListener(n, o, !0), X.access(e, i, (t || 0) + 1)
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = X.access(e, i) - 1;
                        t ? X.access(e, i, t) : (e.removeEventListener(n, o, !0), X.remove(e, i))
                    }
                }
            });
            var kt = T.location,
                Lt = {
                    guid: Date.now()
                },
                Ot = /\?/;
            C.parseXML = function (e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new T.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {}
                return n = t && t.getElementsByTagName("parsererror")[0], t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, function (e) {
                    return e.textContent
                }).join("\n") : e)), t
            };
            var zt = /\[\]$/,
                Pt = /\r?\n/g,
                Mt = /^(?:submit|button|image|reset|file)$/i,
                _t = /^(?:input|select|textarea|keygen)/i;
            C.param = function (e, t) {
                function n(e, t) {
                    t = v(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
                }
                var i, o = [];
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
                    n(this.name, this.value)
                });
                else
                    for (i in e) ! function n(i, e, o, r) {
                        if (Array.isArray(e)) C.each(e, function (e, t) {
                            o || zt.test(i) ? r(i, t) : n(i + "[" + ("object" === tn(t) && null != t ? e : "") + "]", t, o, r)
                        });
                        else if (o || "object" !== p(e)) r(i, e);
                        else
                            for (var t in e) n(i + "[" + t + "]", e[t], o, r)
                    }(i, e[i], t, n);
                return o.join("&")
            }, C.fn.extend({
                serialize: function () {
                    return C.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = C.prop(this, "elements");
                        return e ? C.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && _t.test(this.nodeName) && !Mt.test(e) && (this.checked || !ce.test(e))
                    }).map(function (e, t) {
                        var n = C(this).val();
                        return null == n ? null : Array.isArray(n) ? C.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(Pt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Pt, "\r\n")
                        }
                    }).get()
                }
            });
            var $t = /%20/g,
                At = /#.*$/,
                Dt = /([?&])_=[^&]*/,
                jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Nt = /^(?:GET|HEAD)$/,
                It = /^\/\//,
                Rt = {},
                Ht = {},
                qt = "*/".concat("*"),
                Bt = S.createElement("a");

            function Ft(r) {
                return function (e, t) {
                    "string" != typeof e && (t = e, e = "*");
                    var n, i = 0,
                        o = e.toLowerCase().match(A) || [];
                    if (v(t))
                        for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
                }
            }

            function Wt(t, i, o, r) {
                var s = {},
                    a = t === Ht;

                function l(e) {
                    var n;
                    return s[e] = !0, C.each(t[e] || [], function (e, t) {
                        t = t(i, o, r);
                        return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
                    }), n
                }
                return l(i.dataTypes[0]) || !s["*"] && l("*")
            }

            function Gt(e, t) {
                var n, i, o = C.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
                return i && C.extend(!0, e, i), e
            }
            Bt.href = kt.href, C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: kt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": qt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": C.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? Gt(Gt(e, C.ajaxSettings), t) : Gt(C.ajaxSettings, e)
                },
                ajaxPrefilter: Ft(Rt),
                ajaxTransport: Ft(Ht),
                ajax: function (e, t) {
                    "object" === tn(e) && (t = e, e = void 0);
                    var l, c, u, n, d, h, f, i, o, p = C.ajaxSetup({}, t = t || {}),
                        v = p.context || p,
                        m = p.context && (v.nodeType || v.jquery) ? C(v) : C.event,
                        g = C.Deferred(),
                        y = C.Callbacks("once memory"),
                        b = p.statusCode || {},
                        r = {},
                        s = {},
                        a = "canceled",
                        w = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (h) {
                                    if (!n)
                                        for (n = {}; t = jt.exec(u);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = n[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function () {
                                return h ? u : null
                            },
                            setRequestHeader: function (e, t) {
                                return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, r[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return null == h && (p.mimeType = e), this
                            },
                            statusCode: function (e) {
                                if (e)
                                    if (h) w.always(e[w.status]);
                                    else
                                        for (var t in e) b[t] = [b[t], e[t]];
                                return this
                            },
                            abort: function (e) {
                                e = e || a;
                                return l && l.abort(e), x(0, e), this
                            }
                        };
                    if (g.promise(w), p.url = ((e || p.url || kt.href) + "").replace(It, kt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(A) || [""], null == p.crossDomain) {
                        o = S.createElement("a");
                        try {
                            o.href = p.url, o.href = o.href, p.crossDomain = Bt.protocol + "//" + Bt.host != o.protocol + "//" + o.host
                        } catch (e) {
                            p.crossDomain = !0
                        }
                    }
                    if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), Wt(Rt, p, t, w), h) return w;
                    for (i in (f = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nt.test(p.type), c = p.url.replace(At, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace($t, "+")) : (o = p.url.slice(c.length), p.data && (p.processData || "string" == typeof p.data) && (c += (Ot.test(c) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (c = c.replace(Dt, "$1"), o = (Ot.test(c) ? "&" : "?") + "_=" + Lt.guid++ + o), p.url = c + o), p.ifModified && (C.lastModified[c] && w.setRequestHeader("If-Modified-Since", C.lastModified[c]), C.etag[c] && w.setRequestHeader("If-None-Match", C.etag[c])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : p.accepts["*"]), p.headers) w.setRequestHeader(i, p.headers[i]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(v, w, p) || h)) return w.abort();
                    if (a = "abort", y.add(p.complete), w.done(p.success), w.fail(p.error), l = Wt(Ht, p, t, w)) {
                        if (w.readyState = 1, f && m.trigger("ajaxSend", [w, p]), h) return w;
                        p.async && 0 < p.timeout && (d = T.setTimeout(function () {
                            w.abort("timeout")
                        }, p.timeout));
                        try {
                            h = !1, l.send(r, x)
                        } catch (e) {
                            if (h) throw e;
                            x(-1, e)
                        }
                    } else x(-1, "No Transport");

                    function x(e, t, n, i) {
                        var o, r, s, a = t;
                        h || (h = !0, d && T.clearTimeout(d), l = void 0, u = i || "", w.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                            for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i)
                                for (o in a)
                                    if (a[o] && a[o].test(i)) {
                                        l.unshift(o);
                                        break
                                    } if (l[0] in n) r = l[0];
                            else {
                                for (o in n) {
                                    if (!l[0] || e.converters[o + " " + l[0]]) {
                                        r = o;
                                        break
                                    }
                                    s = s || o
                                }
                                r = r || s
                            }
                            if (r) return r !== l[0] && l.unshift(r), n[r]
                        }(p, w, n)), !i && -1 < C.inArray("script", p.dataTypes) && C.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function () {}), s = function (e, t, n, i) {
                            var o, r, s, a, l, c = {},
                                u = e.dataTypes.slice();
                            if (u[1])
                                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                            for (r = u.shift(); r;)
                                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                                    if ("*" === r) r = l;
                                    else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                            break
                                        } if (!0 !== s)
                                    if (s && e.throws) t = s(t);
                                    else try {
                                        t = s(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: s ? e : "No conversion from " + l + " to " + r
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(p, s, w, i), i ? (p.ifModified && ((n = w.getResponseHeader("Last-Modified")) && (C.lastModified[c] = n), (n = w.getResponseHeader("etag")) && (C.etag[c] = n)), 204 === e || "HEAD" === p.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, o = s.data, i = !(r = s.error))) : (r = a, !e && a || (a = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || a) + "", i ? g.resolveWith(v, [o, a, w]) : g.rejectWith(v, [w, a, r]), w.statusCode(b), b = void 0, f && m.trigger(i ? "ajaxSuccess" : "ajaxError", [w, p, i ? o : r]), y.fireWith(v, [w, a]), f && (m.trigger("ajaxComplete", [w, p]), --C.active || C.event.trigger("ajaxStop")))
                    }
                    return w
                },
                getJSON: function (e, t, n) {
                    return C.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return C.get(e, void 0, t, "script")
                }
            }), C.each(["get", "post"], function (e, o) {
                C[o] = function (e, t, n, i) {
                    return v(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
                        url: e,
                        type: o,
                        dataType: i,
                        data: t,
                        success: n
                    }, C.isPlainObject(e) && e))
                }
            }), C.ajaxPrefilter(function (e) {
                for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            }), C._evalUrl = function (e, t, n) {
                return C.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function () {}
                    },
                    dataFilter: function (e) {
                        C.globalEval(e, t, n)
                    }
                })
            }, C.fn.extend({
                wrapAll: function (e) {
                    return this[0] && (v(e) && (e = e.call(this[0])), e = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function (n) {
                    return v(n) ? this.each(function (e) {
                        C(this).wrapInner(n.call(this, e))
                    }) : this.each(function () {
                        var e = C(this),
                            t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n)
                    })
                },
                wrap: function (t) {
                    var n = v(t);
                    return this.each(function (e) {
                        C(this).wrapAll(n ? t.call(this, e) : t)
                    })
                },
                unwrap: function (e) {
                    return this.parent(e).not("body").each(function () {
                        C(this).replaceWith(this.childNodes)
                    }), this
                }
            }), C.expr.pseudos.hidden = function (e) {
                return !C.expr.pseudos.visible(e)
            }, C.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, C.ajaxSettings.xhr = function () {
                try {
                    return new T.XMLHttpRequest
                } catch (e) {}
            };
            var Vt = {
                    0: 200,
                    1223: 204
                },
                Yt = C.ajaxSettings.xhr();
            b.cors = !!Yt && "withCredentials" in Yt, b.ajax = Yt = !!Yt, C.ajaxTransport(function (o) {
                var r, s;
                if (b.cors || Yt && !o.crossDomain) return {
                    send: function (e, t) {
                        var n, i = o.xhr();
                        if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                            for (n in o.xhrFields) i[n] = o.xhrFields[n];
                        for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                        r = function (e) {
                            return function () {
                                r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Vt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                    binary: i.response
                                } : {
                                    text: i.responseText
                                }, i.getAllResponseHeaders()))
                            }
                        }, i.onload = r(), s = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
                            4 === i.readyState && T.setTimeout(function () {
                                r && s()
                            })
                        }, r = r("abort");
                        try {
                            i.send(o.hasContent && o.data || null)
                        } catch (e) {
                            if (r) throw e
                        }
                    },
                    abort: function () {
                        r && r()
                    }
                }
            }), C.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1)
            }), C.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (e) {
                        return C.globalEval(e), e
                    }
                }
            }), C.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), C.ajaxTransport("script", function (n) {
                var i, o;
                if (n.crossDomain || n.scriptAttrs) return {
                    send: function (e, t) {
                        i = C("<script>").attr(n.scriptAttrs || {}).prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", o = function (e) {
                            i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                        }), S.head.appendChild(i[0])
                    },
                    abort: function () {
                        o && o()
                    }
                }
            });
            var Xt = [],
                Ut = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Xt.pop() || C.expando + "_" + Lt.guid++;
                    return this[e] = !0, e
                }
            }), C.ajaxPrefilter("json jsonp", function (e, t, n) {
                var i, o, r, s = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ut, "$1" + i) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                    return r || C.error(i + " was not called"), r[0]
                }, e.dataTypes[0] = "json", o = T[i], T[i] = function () {
                    r = arguments
                }, n.always(function () {
                    void 0 === o ? C(T).removeProp(i) : T[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Xt.push(i)), r && v(o) && o(r[0]), r = o = void 0
                }), "script"
            }), b.createHTMLDocument = ((he = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === he.childNodes.length), C.parseHTML = function (e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (b.createHTMLDocument ? ((i = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(i)) : t = S), i = !n && [], (n = L.exec(e)) ? [t.createElement(n[1])] : (n = ge([e], t, i), i && i.length && C(i).remove(), C.merge([], n.childNodes)));
                var i
            }, C.fn.load = function (e, t, n) {
                var i, o, r, s = this,
                    a = e.indexOf(" ");
                return -1 < a && (i = wt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" === tn(t) && (o = "POST"), 0 < s.length && C.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    r = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
                }).always(n && function (e, t) {
                    s.each(function () {
                        n.apply(this, r || [e.responseText, t, e])
                    })
                }), this
            }, C.expr.pseudos.animated = function (t) {
                return C.grep(C.timers, function (e) {
                    return t === e.elem
                }).length
            }, C.offset = {
                setOffset: function (e, t, n) {
                    var i, o, r, s, a = C.css(e, "position"),
                        l = C(e),
                        c = {};
                    "static" === a && (e.style.position = "relative"), r = l.offset(), i = C.css(e, "top"), s = C.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (o = (a = l.position()).top, a.left) : (o = parseFloat(i) || 0, parseFloat(s) || 0), null != (t = v(t) ? t.call(e, n, C.extend({}, r)) : t).top && (c.top = t.top - r.top + o), null != t.left && (c.left = t.left - r.left + s), "using" in t ? t.using.call(e, c) : l.css(c)
                }
            }, C.fn.extend({
                offset: function (t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                        C.offset.setOffset(this, t, e)
                    });
                    var e, n = this[0];
                    return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function () {
                    if (this[0]) {
                        var e, t, n, i = this[0],
                            o = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                            e && e !== i && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - o.top - C.css(i, "marginTop", !0),
                            left: t.left - o.left - C.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                        return e || ne
                    })
                }
            }), C.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (t, o) {
                var r = "pageYOffset" === o;
                C.fn[t] = function (e) {
                    return q(this, function (e, t, n) {
                        var i;
                        return m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n)
                    }, t, e, arguments.length)
                }
            }), C.each(["top", "left"], function (e, n) {
                C.cssHooks[n] = Ve(b.pixelPosition, function (e, t) {
                    if (t) return t = Ge(e, n), Fe.test(t) ? C(e).position()[n] + "px" : t
                })
            }), C.each({
                Height: "height",
                Width: "width"
            }, function (s, a) {
                C.each({
                    padding: "inner" + s,
                    content: a,
                    "": "outer" + s
                }, function (i, r) {
                    C.fn[r] = function (e, t) {
                        var n = arguments.length && (i || "boolean" != typeof e),
                            o = i || (!0 === e || !0 === t ? "margin" : "border");
                        return q(this, function (e, t, n) {
                            var i;
                            return m(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, o) : C.style(e, t, n, o)
                        }, a, n ? e : void 0, n)
                    }
                })
            }), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                C.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), C.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
                C.fn[n] = function (e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
                }
            });
            var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            C.proxy = function (e, t) {
                var n, i;
                if ("string" == typeof t && (i = e[t], t = e, e = i), v(e)) return n = a.call(arguments, 2), (i = function () {
                    return e.apply(t || this, n.concat(a.call(arguments)))
                }).guid = e.guid = e.guid || C.guid++, i
            }, C.holdReady = function (e) {
                e ? C.readyWait++ : C.ready(!0)
            }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = k, C.isFunction = v, C.isWindow = m, C.camelCase = G, C.type = p, C.now = Date.now, C.isNumeric = function (e) {
                var t = C.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, C.trim = function (e) {
                return null == e ? "" : (e + "").replace(Kt, "")
            }, void 0 === (en = function () {
                return C
            }.apply(nn, [])) || (Zt.exports = en);
            var Qt = T.jQuery,
                Jt = T.$;
            return C.noConflict = function (e) {
                return T.$ === C && (T.$ = Jt), e && T.jQuery === C && (T.jQuery = Qt), C
            }, void 0 === e && (T.jQuery = T.$ = C), C
        })
    }.call(this, t(1)(e))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, n) {
    e.exports = n(5)
}, function (e, i, t) {
    ! function (e) {
        var t;

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        t = function () {
            return i = [function (e, t) {
                "use strict";
                e.exports = function () {
                    if ("undefined" == typeof document || "undefined" == typeof window) return {
                        ask: function () {
                            return "initial"
                        },
                        element: function () {
                            return null
                        },
                        ignoreKeys: function () {},
                        specificKeys: function () {},
                        registerOnChange: function () {},
                        unRegisterOnChange: function () {}
                    };
                    var t = document.documentElement,
                        n = null,
                        r = "initial",
                        s = r,
                        i = Date.now(),
                        o = "false",
                        a = ["button", "input", "select", "textarea"],
                        l = [],
                        c = [16, 17, 18, 91, 93],
                        u = [],
                        d = {
                            keydown: "keyboard",
                            keyup: "keyboard",
                            mousedown: "mouse",
                            mousemove: "mouse",
                            MSPointerDown: "pointer",
                            MSPointerMove: "pointer",
                            pointerdown: "pointer",
                            pointermove: "pointer",
                            touchstart: "touch",
                            touchend: "touch"
                        },
                        h = !1,
                        f = {
                            x: null,
                            y: null
                        },
                        p = {
                            2: "touch",
                            3: "touch",
                            4: "mouse"
                        },
                        e = !1;
                    try {
                        var v = Object.defineProperty({}, "passive", {
                            get: function () {
                                e = !0
                            }
                        });
                        window.addEventListener("test", null, v)
                    } catch (t) {}

                    function m(e) {
                        t.setAttribute("data-what" + e, "input" === e ? r : s), L(e)
                    }

                    function g(e, t) {
                        if (o) try {
                            window.sessionStorage.setItem("what-" + e, t)
                        } catch (e) {}
                    }

                    function y(e) {
                        return "number" == typeof e.pointerType ? p[e.pointerType] : "pen" === e.pointerType ? "touch" : e.pointerType
                    }

                    function b(e) {
                        var t = Date.now(),
                            e = "mouse" === e && "touch" === r && t - i < 200;
                        return i = t, e
                    }
                    var w, x = function () {
                            if (o = !(t.getAttribute("data-whatpersist") || "false" === document.body.getAttribute("data-whatpersist"))) try {
                                window.sessionStorage.getItem("what-input") && (r = window.sessionStorage.getItem("what-input")), window.sessionStorage.getItem("what-intent") && (s = window.sessionStorage.getItem("what-intent"))
                            } catch (e) {}
                            m("input"), m("intent")
                        },
                        T = function (e) {
                            var t = e.which,
                                n = d[e.type];
                            "pointer" === n && (n = y(e));
                            var i, o = !u.length && -1 === c.indexOf(t),
                                e = u.length && -1 !== u.indexOf(t),
                                e = "keyboard" === n && t && (o || e) || "mouse" === n || "touch" === n;
                            (e = b(n) ? !1 : e) && r !== n && (g("input", r = n), m("input")), e && s !== n && (i = document.activeElement) && i.nodeName && (-1 === a.indexOf(i.nodeName.toLowerCase()) || "button" === i.nodeName.toLowerCase() && ! function (e, t) {
                                var n = window.Element.prototype;
                                if (n.matches || (n.matches = n.msMatchesSelector || n.webkitMatchesSelector), n.closest) return e.closest(t);
                                do {
                                    if (e.matches(t)) return e;
                                    e = e.parentElement || e.parentNode
                                } while (null !== e && 1 === e.nodeType);
                                return null
                            }(i, "form")) && (g("intent", s = n), m("intent"))
                        },
                        S = function (e) {
                            var t, n = d[e.type];
                            "pointer" === n && (n = y(e)), t = e, f.x !== t.screenX || f.y !== t.screenY ? (h = !1, f.x = t.screenX, f.y = t.screenY) : h = !0, (!h && !b(n) || h && "wheel" === e.type || "mousewheel" === e.type || "DOMMouseScroll" === e.type) && s !== n && (g("intent", s = n), m("intent"))
                        },
                        C = function (e) {
                            e.target.nodeName ? (n = e.target.nodeName.toLowerCase(), t.setAttribute("data-whatelement", n), e.target.classList && e.target.classList.length && t.setAttribute("data-whatclasses", e.target.classList.toString().replace(" ", ","))) : E()
                        },
                        E = function () {
                            n = null, t.removeAttribute("data-whatelement"), t.removeAttribute("data-whatclasses")
                        },
                        k = function () {
                            return "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"
                        },
                        L = function (e) {
                            for (var t = 0, n = l.length; t < n; t++) l[t].type === e && l[t].fn.call(void 0, "input" === e ? r : s)
                        };
                    return "addEventListener" in window && Array.prototype.indexOf && (d[k()] = "mouse", w = !!e && {
                        passive: !0
                    }, document.addEventListener("DOMContentLoaded", x), window.PointerEvent ? (window.addEventListener("pointerdown", T), window.addEventListener("pointermove", S)) : window.MSPointerEvent ? (window.addEventListener("MSPointerDown", T), window.addEventListener("MSPointerMove", S)) : (window.addEventListener("mousedown", T), window.addEventListener("mousemove", S), "ontouchstart" in window && (window.addEventListener("touchstart", T, w), window.addEventListener("touchend", T))), window.addEventListener(k(), S, w), window.addEventListener("keydown", T), window.addEventListener("keyup", T), window.addEventListener("focusin", C), window.addEventListener("focusout", E)), {
                        ask: function (e) {
                            return "intent" === e ? s : r
                        },
                        element: function () {
                            return n
                        },
                        ignoreKeys: function (e) {
                            c = e
                        },
                        specificKeys: function (e) {
                            u = e
                        },
                        registerOnChange: function (e, t) {
                            l.push({
                                fn: e,
                                type: t || "input"
                            })
                        },
                        unRegisterOnChange: function (e) {
                            e = function (e) {
                                for (var t = 0, n = l.length; t < n; t++)
                                    if (l[t].fn === e) return t
                            }(e);
                            !e && 0 !== e || l.splice(e, 1)
                        },
                        clearStorage: function () {
                            window.sessionStorage.clear()
                        }
                    }
                }()
            }], o = {}, n.m = i, n.c = o, n.p = "", n(0);

            function n(e) {
                if (o[e]) return o[e].exports;
                var t = o[e] = {
                    exports: {},
                    id: e,
                    loaded: !1
                };
                return i[e].call(t.exports, t, t.exports, n), t.loaded = !0, t.exports
            }
            var i, o
        }, "object" === n(i) && "object" === n(e) ? e.exports = t() : void 0 === (t = "function" == typeof (t = t) ? t.apply(i, []) : t) || (e.exports = t)
    }.call(this, t(1)(e))
}, function (e, t, n) {
    ! function (e) {
        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var n, i;
        n = "undefined" != typeof window ? window : {}, i = function (i, h, r) {
            "use strict";
            var f, p;
            if (function () {
                    var e, t = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        fastLoadedClass: "ls-is-cached",
                        iframeLoadMode: 0,
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    for (e in p = i.lazySizesConfig || i.lazysizesConfig || {}, t) e in p || (p[e] = t[e])
                }(), !h || !h.getElementsByClassName) return {
                init: function () {},
                cfg: p,
                noSupport: !0
            };

            function u(e, t) {
                be(e, t) || e.setAttribute("class", (e.getAttribute("class") || "").trim() + " " + t)
            }

            function d(e, t) {
                (t = be(e, t)) && e.setAttribute("class", (e.getAttribute("class") || "").replace(t, " "))
            }

            function v(t, n, e) {
                var i = e ? "addEventListener" : "removeEventListener";
                e && v(t, n), me.forEach(function (e) {
                    t[i](e, n)
                })
            }

            function m(e, t, n, i, o) {
                var r = h.createEvent("Event");
                return (n = n || {}).instance = f, r.initEvent(t, !i, !o), r.detail = n, e.dispatchEvent(r), r
            }

            function g(e, t) {
                var n;
                !ue && (n = i.picturefill || p.pf) ? (t && t.src && !e.getAttribute("srcset") && e.setAttribute("srcset", t.src), n({
                    reevaluate: !0,
                    elements: [e]
                })) : t && t.src && (e.src = t.src)
            }

            function s(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            }

            function o(e, t, n) {
                for (n = n || e.offsetWidth; n < p.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                return n
            }

            function e(n, e) {
                return e ? function () {
                    we(n)
                } : function () {
                    var e = this,
                        t = arguments;
                    we(function () {
                        n.apply(e, t)
                    })
                }
            }

            function t() {
                !t.i && h.getElementsByClassName && (t.i = !0, Te._(), xe._())
            }
            var n, a, l, c, y, b, w, x, T, S, C, E, k, L, O, z, P, M, _, $, A, D, j, N, I, R, H, q, B, F, W, G, V, Y, X, U, K, Q, J, Z, ee, te, ne, ie, oe, re, se, ae, le, ce = h.documentElement,
                ue = i.HTMLPictureElement,
                de = i.addEventListener.bind(i),
                he = i.setTimeout,
                fe = i.requestAnimationFrame || he,
                pe = i.requestIdleCallback,
                ve = /^picture$/i,
                me = ["load", "error", "lazyincluded", "_lazyloaded"],
                ge = {},
                ye = Array.prototype.forEach,
                be = function (e, t) {
                    return ge[t] || (ge[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), ge[t].test(e.getAttribute("class") || "") && ge[t]
                },
                we = (re = [], se = oe = [], ae = function () {
                    var e = se;
                    for (se = oe.length ? re : oe, ie = !(ne = !0); e.length;) e.shift()();
                    ne = !1
                }, (le = function (e, t) {
                    ne && !t ? e.apply(this, arguments) : (se.push(e), ie || (ie = !0, (h.hidden ? he : fe)(ae)))
                })._lsFlush = ae, le),
                le = function (e) {
                    function t() {
                        var e = r.now() - i;
                        e < 99 ? he(t, 99 - e) : (pe || o)(o)
                    }
                    var n, i, o = function () {
                        n = null, e()
                    };
                    return function () {
                        i = r.now(), n = n || he(t, 99)
                    }
                },
                xe = (j = /^img$/i, N = /^iframe$/i, I = "onscroll" in i && !/(gle|ing)bot/.test(navigator.userAgent), q = -1, B = function (e) {
                    H--, e && !(H < 0) && e.target || (H = 0)
                }, F = function (e) {
                    return (D = null == D ? "hidden" == s(h.body, "visibility") : D) || !("hidden" == s(e.parentNode, "visibility") && "hidden" == s(e, "visibility"))
                }, W = function (e, t) {
                    var n, i = e,
                        o = F(e);
                    for (M -= t, A += t, _ -= t, $ += t; o && (i = i.offsetParent) && i != h.body && i != ce;)(o = 0 < (s(i, "opacity") || 1)) && "visible" != s(i, "overflow") && (n = i.getBoundingClientRect(), o = $ > n.left && _ < n.right && A > n.top - 1 && M < n.bottom + 1);
                    return o
                }, n = G = function () {
                    var e, t, n, i, o, r, s, a, l, c, u, d = f.elements;
                    if ((L = p.loadMode) && H < 8 && (e = d.length)) {
                        for (t = 0, q++; t < e; t++)
                            if (d[t] && !d[t]._lazyRace)
                                if (!I || f.prematureUnveil && f.prematureUnveil(d[t])) J(d[t]);
                                else if ((s = d[t].getAttribute("data-expand")) && (o = +s) || (o = R), l || (l = !p.expand || p.expand < 1 ? 500 < ce.clientHeight && 500 < ce.clientWidth ? 500 : 370 : p.expand, c = (f._defEx = l) * p.expFactor, u = p.hFac, D = null, R < c && H < 1 && 2 < q && 2 < L && !h.hidden ? (R = c, q = 0) : R = 1 < L && 1 < q && H < 6 ? l : 0), a !== o && (z = innerWidth + o * u, P = innerHeight + o, r = -1 * o, a = o), c = d[t].getBoundingClientRect(), (A = c.bottom) >= r && (M = c.top) <= P && ($ = c.right) >= r * u && (_ = c.left) <= z && (A || $ || _ || M) && (p.loadHidden || F(d[t])) && (E && H < 3 && !s && (L < 3 || q < 4) || W(d[t], o))) {
                            if (J(d[t]), i = !0, 9 < H) break
                        } else !i && E && !n && H < 4 && q < 4 && 2 < L && (C[0] || p.preloadAfterLoad) && (C[0] || !s && (A || $ || _ || M || "auto" != d[t].getAttribute(p.sizesAttr))) && (n = C[0] || d[t]);
                        n && !i && J(n)
                    }
                }, l = H = R = 0, c = p.throttleDelay, y = p.ricTimeout, b = pe && 49 < y ? function () {
                    pe(Se, {
                        timeout: y
                    }), y !== p.ricTimeout && (y = p.ricTimeout)
                } : e(function () {
                    he(Se)
                }, !0), X = e(Y = function (e) {
                    var t = e.target;
                    t._lazyCache ? delete t._lazyCache : (B(e), u(t, p.loadedClass), d(t, p.loadingClass), v(t, U), m(t, "lazyloaded"))
                }), U = function (e) {
                    X({
                        target: e.target
                    })
                }, K = function (e) {
                    var t, n = e.getAttribute(p.srcsetAttr);
                    (t = p.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                }, Q = e(function (t, e, n, i, o) {
                    var r, s, a, l, c;
                    (a = m(t, "lazybeforeunveil", e)).defaultPrevented || (i && (n ? u(t, p.autosizesClass) : t.setAttribute("sizes", i)), r = t.getAttribute(p.srcsetAttr), n = t.getAttribute(p.srcAttr), o && (s = (c = t.parentNode) && ve.test(c.nodeName || "")), l = e.firesLoad || "src" in t && (r || n || s), a = {
                        target: t
                    }, u(t, p.loadingClass), l && (clearTimeout(k), k = he(B, 2500), v(t, U, !0)), s && ye.call(c.getElementsByTagName("source"), K), r ? t.setAttribute("srcset", r) : n && !s && (N.test(t.nodeName) ? (i = n, 0 == (c = (e = t).getAttribute("data-load-mode") || p.iframeLoadMode) ? e.contentWindow.location.replace(i) : 1 == c && (e.src = i)) : t.src = n), o && (r || s) && g(t, {
                        src: n
                    })), t._lazyRace && delete t._lazyRace, d(t, p.lazyClass), we(function () {
                        var e = t.complete && 1 < t.naturalWidth;
                        l && !e || (e && u(t, p.fastLoadedClass), Y(a), t._lazyCache = !0, he(function () {
                            "_lazyCache" in t && delete t._lazyCache
                        }, 9)), "lazy" == t.loading && H--
                    }, !0)
                }), Z = le(function () {
                    p.loadMode = 3, V()
                }), te = function e() {
                    E || (r.now() - O < 999 ? he(e, 999) : (E = !0, p.loadMode = 3, V(), de("scroll", ee, !0)))
                }, {
                    _: function () {
                        O = r.now(), f.elements = h.getElementsByClassName(p.lazyClass), C = h.getElementsByClassName(p.lazyClass + " " + p.preloadClass), de("scroll", V, !0), de("resize", V, !0), de("pageshow", function (e) {
                            var t;
                            !e.persisted || (t = h.querySelectorAll("." + p.loadingClass)).length && t.forEach && fe(function () {
                                t.forEach(function (e) {
                                    e.complete && J(e)
                                })
                            })
                        }), i.MutationObserver ? new MutationObserver(V).observe(ce, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (ce.addEventListener("DOMNodeInserted", V, !0), ce.addEventListener("DOMAttrModified", V, !0), setInterval(V, 999)), de("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
                            h.addEventListener(e, V, !0)
                        }), /d$|^c/.test(h.readyState) ? te() : (de("load", te), h.addEventListener("DOMContentLoaded", V), he(te, 2e4)), f.elements.length ? (G(), we._lsFlush()) : V()
                    },
                    checkElems: V = function (e) {
                        var t;
                        (e = !0 === e) && (y = 33), a || (a = !0, (t = c - (r.now() - l)) < 0 && (t = 0), e || t < 9 ? b() : he(b, t))
                    },
                    unveil: J = function (e) {
                        var t, n, i, o;
                        e._lazyRace || (!(o = "auto" == (i = (n = j.test(e.nodeName)) && (e.getAttribute(p.sizesAttr) || e.getAttribute("sizes")))) && E || !n || !e.getAttribute("src") && !e.srcset || e.complete || be(e, p.errorClass) || !be(e, p.lazyClass)) && (t = m(e, "lazyunveilread").detail, o && Te.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, H++, Q(e, t, o, i, n))
                    },
                    _aLSL: ee = function () {
                        3 == p.loadMode && (p.loadMode = 2), Z()
                    }
                }),
                Te = (x = e(function (e, t, n, i) {
                    var o, r, s;
                    if (e._lazysizesWidth = i, e.setAttribute("sizes", i += "px"), ve.test(t.nodeName || ""))
                        for (r = 0, s = (o = t.getElementsByTagName("source")).length; r < s; r++) o[r].setAttribute("sizes", i);
                    n.detail.dataAttr || g(e, n.detail)
                }), {
                    _: function () {
                        w = h.getElementsByClassName(p.autosizesClass), de("resize", S)
                    },
                    checkElems: S = le(function () {
                        var e, t = w.length;
                        if (t)
                            for (e = 0; e < t; e++) T(w[e])
                    }),
                    updateElem: T = function (e, t, n) {
                        var i = e.parentNode;
                        i && (n = o(e, i, n), (t = m(e, "lazybeforesizes", {
                            width: n,
                            dataAttr: !!t
                        })).defaultPrevented || (n = t.detail.width) && n !== e._lazysizesWidth && x(e, i, t, n))
                    }
                });

            function Se() {
                a = !1, l = r.now(), n()
            }
            return he(function () {
                p.init && t()
            }), f = {
                cfg: p,
                autoSizer: Te,
                loader: xe,
                init: t,
                uP: g,
                aC: u,
                rC: d,
                hC: be,
                fire: m,
                gW: o,
                rAF: we
            }
        }(n, n.document, Date), n.lazySizes = i, "object" == t(e) && e.exports && (e.exports = i)
    }.call(this, n(1)(e))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i, o, r, s = n(0),
        u = n.n(s);

    function a() {
        return "rtl" === u()("html").attr("dir")
    }

    function l() {
        for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 6, t = 1 < arguments.length ? arguments[1] : void 0, n = "", i = "0123456789abcdefghijklmnopqrstuvwxyz", o = i.length, r = 0; r < e; r++) n += i[Math.floor(Math.random() * o)];
        return t ? "".concat(n, "-").concat(t) : n
    }

    function c(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }

    function d(e) {
        var t, n, i = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            },
            o = document.createElement("div");
        for (n in i) void 0 !== o.style[n] && (t = i[n]);
        return t || (setTimeout(function () {
            e.triggerHandler("transitionend", [e])
        }, 1), "transitionend")
    }

    function h(e, t) {
        function n() {
            return e.triggerHandler(o)
        }
        var i = "complete" === document.readyState,
            o = (i ? "_didLoad" : "load") + ".zf.util.onLoad";
        return e && (t && e.one(o, t), i ? setTimeout(n) : u()(window).one("load", n)), o
    }

    function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    n(3), n(4), window.matchMedia || (window.matchMedia = ((r = window.styleMedia || window.media) || (o = document.createElement("style"), xt = document.getElementsByTagName("script")[0], o.type = "text/css", o.id = "matchmediajs-test", xt ? xt.parentNode.insertBefore(o, xt) : document.head.appendChild(o), i = "getComputedStyle" in window && window.getComputedStyle(o, null) || o.currentStyle, r = {
        matchMedium: function (e) {
            e = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
            return o.styleSheet ? o.styleSheet.cssText = e : o.textContent = e, "1px" === i.width
        }
    }), function (e) {
        return {
            matches: r.matchMedium(e || "all"),
            media: e || "all"
        }
    }));
    var v = {
        queries: [],
        current: "",
        _init: function () {
            if (!0 !== this.isInitialized) {
                this.isInitialized = !0, u()("meta.foundation-mq").length || u()('<meta class="foundation-mq" name="foundation-mq" content>').appendTo(document.head);
                var e, t, n = u()(".foundation-mq").css("font-family");
                for (t in o = {}, e = "string" == typeof (i = n) && (i = n.trim().slice(1, -1)) ? i.split("&").reduce(function (e, t) {
                        var n = t.replace(/\+/g, " ").split("="),
                            t = n[0],
                            n = n[1],
                            t = decodeURIComponent(t),
                            n = void 0 === n ? null : decodeURIComponent(n);
                        return e.hasOwnProperty(t) ? Array.isArray(e[t]) ? e[t].push(n) : e[t] = [e[t], n] : e[t] = n, e
                    }, {}) : o, this.queries = [], e) e.hasOwnProperty(t) && this.queries.push({
                    name: t,
                    value: "only screen and (min-width: ".concat(e[t], ")")
                });
                this.current = this._getCurrentSize(), this._watcher()
            }
            var i, o
        },
        _reInit: function () {
            this.isInitialized = !1, this._init()
        },
        atLeast: function (e) {
            e = this.get(e);
            return !!e && window.matchMedia(e).matches
        },
        only: function (e) {
            return e === this._getCurrentSize()
        },
        upTo: function (e) {
            e = this.next(e);
            return !e || !this.atLeast(e)
        },
        is: function (e) {
            var t, n, t = (t = e.trim().split(" ").filter(function (e) {
                    return !!e.length
                }), n = 2, function (e) {
                    if (Array.isArray(e)) return e
                }(t) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, o, r = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (i = n.next()).done) && (r.push(i.value), !t || r.length !== t); s = !0);
                        } catch (e) {
                            a = !0, o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return r
                    }
                }(t, n) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return p(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                    }
                }(t, n) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                n = t[0],
                t = t[1],
                t = void 0 === t ? "" : t;
            if ("only" === t) return this.only(n);
            if (!t || "up" === t) return this.atLeast(n);
            if ("down" === t) return this.upTo(n);
            throw new Error('\n      Invalid breakpoint passed to MediaQuery.is().\n      Expected a breakpoint name formatted like "<size> <modifier>", got "'.concat(e, '".\n    '))
        },
        get: function (e) {
            for (var t in this.queries)
                if (this.queries.hasOwnProperty(t)) {
                    t = this.queries[t];
                    if (e === t.name) return t.value
                } return null
        },
        next: function (t) {
            var n = this,
                e = this.queries.findIndex(function (e) {
                    return n._getQueryName(e) === t
                });
            if (-1 === e) throw new Error('\n        Unknown breakpoint "'.concat(t, '" passed to MediaQuery.next().\n        Ensure it is present in your Sass "$breakpoints" setting.\n      '));
            e = this.queries[e + 1];
            return e ? e.name : null
        },
        _getQueryName: function (e) {
            if ("string" == typeof e) return e;
            if ("object" === f(e)) return e.name;
            throw new TypeError('\n      Invalid value passed to MediaQuery._getQueryName().\n      Expected a breakpoint name (String) or a breakpoint query (Object), got "'.concat(e, '" (').concat(f(e), ")\n    "))
        },
        _getCurrentSize: function () {
            for (var e, t = 0; t < this.queries.length; t++) {
                var n = this.queries[t];
                window.matchMedia(n.value).matches && (e = n)
            }
            return e && this._getQueryName(e)
        },
        _watcher: function () {
            var n = this;
            u()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery", function () {
                var e = n._getCurrentSize(),
                    t = n.current;
                e !== t && (n.current = e, u()(window).trigger("changed.zf.mediaquery", [e, t]))
            })
        }
    };

    function m(e) {
        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var g = {
        version: "6.7.2",
        _plugins: {},
        _uuids: [],
        plugin: function (e, t) {
            var n = t || y(e),
                t = b(n);
            this._plugins[t] = this[n] = e
        },
        registerPlugin: function (e, t) {
            t = t ? b(t) : y(e.constructor).toLowerCase();
            e.uuid = l(6, t), e.$element.attr("data-".concat(t)) || e.$element.attr("data-".concat(t), e.uuid), e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e), e.$element.trigger("init.zf.".concat(t)), this._uuids.push(e.uuid)
        },
        unregisterPlugin: function (e) {
            var t, n = b(y(e.$element.data("zfPlugin").constructor));
            for (t in this._uuids.splice(this._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-".concat(n)).removeData("zfPlugin").trigger("destroyed.zf.".concat(n)), e) e[t] = null
        },
        reInit: function (e) {
            var t, n, i = e instanceof u.a;
            try {
                i ? e.each(function () {
                    u()(this).data("zfPlugin")._init()
                }) : (t = m(e), n = this, {
                    object: function (e) {
                        e.forEach(function (e) {
                            e = b(e), u()("[data-" + e + "]").foundation("_init")
                        })
                    },
                    string: function () {
                        e = b(e), u()("[data-" + e + "]").foundation("_init")
                    },
                    undefined: function () {
                        this.object(Object.keys(n._plugins))
                    }
                } [t](e))
            } catch (e) {
                console.error(e)
            } finally {
                return e
            }
        },
        reflow: function (n, e) {
            void 0 === e ? e = Object.keys(this._plugins) : "string" == typeof e && (e = [e]);
            var o = this;
            u.a.each(e, function (e, t) {
                var i = o._plugins[t];
                u()(n).find("[data-" + t + "]").addBack("[data-" + t + "]").filter(function () {
                    return void 0 === u()(this).data("zfPlugin")
                }).each(function () {
                    var e = u()(this),
                        n = {
                            reflow: !0
                        };
                    e.attr("data-options") && e.attr("data-options").split(";").forEach(function (e, t) {
                        e = e.split(":").map(function (e) {
                            return e.trim()
                        });
                        e[0] && (n[e[0]] = "true" === (e = e[1]) || "false" !== e && (isNaN(+e) ? e : parseFloat(e)))
                    });
                    try {
                        e.data("zfPlugin", new i(u()(this), n))
                    } catch (e) {
                        console.error(e)
                    } finally {
                        return
                    }
                })
            })
        },
        getFnName: y,
        addToJquery: function (r) {
            return r.fn.foundation = function (n) {
                var e = m(n),
                    t = r(".no-js");
                if (t.length && t.removeClass("no-js"), "undefined" === e) v._init(), g.reflow(this);
                else {
                    if ("string" !== e) throw new TypeError("We're sorry, ".concat(e, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
                    var i = Array.prototype.slice.call(arguments, 1),
                        o = this.data("zfPlugin");
                    if (void 0 === o || void 0 === o[n]) throw new ReferenceError("We're sorry, '" + n + "' is not an available method for " + (o ? y(o) : "this element") + ".");
                    1 === this.length ? o[n].apply(o, i) : this.each(function (e, t) {
                        o[n].apply(r(t).data("zfPlugin"), i)
                    })
                }
                return this
            }, r
        }
    };

    function y(e) {
        if (void 0 !== Function.prototype.name) return (void 0 === e.prototype ? e : e.prototype).constructor.name;
        e = /function\s([^(]{1,})\(/.exec(e.toString());
        return e && 1 < e.length ? e[1].trim() : ""
    }

    function b(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    g.util = {
            throttle: function (n, i) {
                var o = null;
                return function () {
                    var e = this,
                        t = arguments;
                    null === o && (o = setTimeout(function () {
                        n.apply(e, t), o = null
                    }, i))
                }
            }
        }, window.Foundation = g,
        function () {
            Date.now && window.Date.now || (window.Date.now = Date.now = function () {
                return (new Date).getTime()
            });
            for (var i, e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
                var n = e[t];
                window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]
            }!/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) && window.requestAnimationFrame && window.cancelAnimationFrame || (i = 0, window.requestAnimationFrame = function (e) {
                var t = Date.now(),
                    n = Math.max(i + 16, t);
                return setTimeout(function () {
                    e(i = n)
                }, n - t)
            }, window.cancelAnimationFrame = clearTimeout), window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function () {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function (e) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

            function t() {
                return i.apply(this instanceof o ? this : e, n.concat(Array.prototype.slice.call(arguments)))
            }
            var n = Array.prototype.slice.call(arguments, 1),
                i = this,
                o = function () {};
            return this.prototype && (o.prototype = this.prototype), t.prototype = new o, t
        });
    var w = {
        ImNotTouchingYou: function (e, t, n, i, o) {
            return 0 === x(e, t, n, i, o)
        },
        OverlapArea: x,
        GetDimensions: T,
        GetExplicitOffsets: function (e, t, n, i, o, r, s) {
            var a, l, c = T(e),
                u = t ? T(t) : null;
            if (null !== u) {
                switch (n) {
                    case "top":
                        a = u.offset.top - (c.height + o);
                        break;
                    case "bottom":
                        a = u.offset.top + u.height + o;
                        break;
                    case "left":
                        l = u.offset.left - (c.width + r);
                        break;
                    case "right":
                        l = u.offset.left + u.width + r
                }
                switch (n) {
                    case "top":
                    case "bottom":
                        switch (i) {
                            case "left":
                                l = u.offset.left + r;
                                break;
                            case "right":
                                l = u.offset.left - c.width + u.width - r;
                                break;
                            case "center":
                                l = s ? r : u.offset.left + u.width / 2 - c.width / 2 + r
                        }
                        break;
                    case "right":
                    case "left":
                        switch (i) {
                            case "bottom":
                                a = u.offset.top - o + u.height - c.height;
                                break;
                            case "top":
                                a = u.offset.top + o;
                                break;
                            case "center":
                                a = u.offset.top + o + u.height / 2 - c.height / 2
                        }
                }
            }
            return {
                top: a,
                left: l
            }
        }
    };

    function x(e, t, n, i, o) {
        var r, s, a, e = T(e);
        return e = t ? (r = (t = T(t)).height + t.offset.top - (e.offset.top + e.height), s = e.offset.top - t.offset.top, a = e.offset.left - t.offset.left, t.width + t.offset.left - (e.offset.left + e.width)) : (r = e.windowDims.height + e.windowDims.offset.top - (e.offset.top + e.height), s = e.offset.top - e.windowDims.offset.top, a = e.offset.left - e.windowDims.offset.left, e.windowDims.width - (e.offset.left + e.width)), r = o ? 0 : Math.min(r, 0), s = Math.min(s, 0), a = Math.min(a, 0), e = Math.min(e, 0), n ? a + e : i ? s + r : Math.sqrt(s * s + r * r + a * a + e * e)
    }

    function T(e) {
        if ((e = e.length ? e[0] : e) === window || e === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var t = e.getBoundingClientRect(),
            n = e.parentNode.getBoundingClientRect(),
            i = document.body.getBoundingClientRect(),
            o = window.pageYOffset,
            e = window.pageXOffset;
        return {
            width: t.width,
            height: t.height,
            offset: {
                top: t.top + o,
                left: t.left + e
            },
            parentDims: {
                width: n.width,
                height: n.height,
                offset: {
                    top: n.top + o,
                    left: n.left + e
                }
            },
            windowDims: {
                width: i.width,
                height: i.height,
                offset: {
                    top: o,
                    left: e
                }
            }
        }
    }

    function S(e, t) {
        var n = e.length;

        function i() {
            0 == --n && t()
        }
        0 === n && t(), e.each(function () {
            var e, n;
            this.complete && void 0 !== this.naturalWidth ? i() : (e = new Image, n = "load.zf.images error.zf.images", u()(e).one(n, function e(t) {
                u()(this).off(n, e), i()
            }), e.src = u()(this).attr("src"))
        })
    }
    var C = {
            9: "TAB",
            13: "ENTER",
            27: "ESCAPE",
            32: "SPACE",
            35: "END",
            36: "HOME",
            37: "ARROW_LEFT",
            38: "ARROW_UP",
            39: "ARROW_RIGHT",
            40: "ARROW_DOWN"
        },
        E = {};

    function k(e) {
        return !!e && e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function () {
            return !(!u()(this).is(":visible") || u()(this).attr("tabindex") < 0)
        }).sort(function (e, t) {
            if (u()(e).attr("tabindex") == u()(t).attr("tabindex")) return 0;
            var n = parseInt(u()(e).attr("tabindex")),
                i = parseInt(u()(t).attr("tabindex"));
            return void 0 === u()(e).attr("tabindex") && 0 < i ? 1 : void 0 === u()(t).attr("tabindex") && 0 < n ? -1 : 0 == n && 0 < i ? 1 : 0 == i && 0 < n || n < i ? -1 : i < n ? 1 : void 0
        })
    }

    function L(e) {
        var t = (t = C[e.which || e.keyCode] || String.fromCharCode(e.which).toUpperCase()).replace(/\W+/, "");
        return e.shiftKey && (t = "SHIFT_".concat(t)), e.ctrlKey && (t = "CTRL_".concat(t)), (t = e.altKey ? "ALT_".concat(t) : t).replace(/_$/, "")
    }
    var O = {
            keys: function (e) {
                var t, n = {};
                for (t in e) n[e[t]] = e[t];
                return n
            }(C),
            parseKey: L,
            handleKey: function (e, t, n) {
                var i = E[t],
                    t = this.parseKey(e);
                if (!i) return console.warn("Component not defined!");
                !0 !== e.zfIsKeyHandled && ((t = n[(void 0 === i.ltr ? i : a() ? u.a.extend({}, i.ltr, i.rtl) : u.a.extend({}, i.rtl, i.ltr))[t]]) && "function" == typeof t ? (t = t.apply(), e.zfIsKeyHandled = !0, !n.handled && "function" != typeof n.handled || n.handled(t)) : !n.unhandled && "function" != typeof n.unhandled || n.unhandled())
            },
            findFocusable: k,
            register: function (e, t) {
                E[e] = t
            },
            trapFocus: function (e) {
                var t = k(e),
                    n = t.eq(0),
                    i = t.eq(-1);
                e.on("keydown.zf.trapfocus", function (e) {
                    e.target === i[0] && "TAB" === L(e) ? (e.preventDefault(), n.focus()) : e.target === n[0] && "SHIFT_TAB" === L(e) && (e.preventDefault(), i.focus())
                })
            },
            releaseFocus: function (e) {
                e.off("keydown.zf.trapfocus")
            }
        },
        z = ["mui-enter", "mui-leave"],
        P = ["mui-enter-active", "mui-leave-active"],
        M = {
            animateIn: function (e, t, n) {
                _(!0, e, t, n)
            },
            animateOut: function (e, t, n) {
                _(!1, e, t, n)
            }
        };

    function _(e, t, n, i) {
        var o, r;

        function s() {
            t[0].style.transitionDuration = 0, t.removeClass("".concat(o, " ").concat(r, " ").concat(n))
        }(t = u()(t).eq(0)).length && (o = e ? z[0] : z[1], r = e ? P[0] : P[1], s(), t.addClass(n).css("transition", "none"), requestAnimationFrame(function () {
            t.addClass(o), e && t.show()
        }), requestAnimationFrame(function () {
            t[0].offsetWidth, t.css("transition", "").addClass(r)
        }), t.one(d(t), function () {
            e || t.hide(), s(), i && i.apply(t)
        }))
    }
    var $ = {
        Feather: function (e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "zf";
            e.attr("role", "menubar"), e.find("a").attr({
                role: "menuitem"
            });
            var e = e.find("li").attr({
                    role: "none"
                }),
                i = "is-".concat(n, "-submenu"),
                o = "".concat(i, "-item"),
                r = "is-".concat(n, "-submenu-parent"),
                s = "accordion" !== n;
            e.each(function () {
                var e = u()(this),
                    t = e.children("ul");
                t.length && (e.addClass(r), s && (e.children("a:first").attr({
                    "aria-haspopup": !0,
                    "aria-label": e.children("a:first").text()
                }), "drilldown" === n && e.attr({
                    "aria-expanded": !1
                })), t.addClass("submenu ".concat(i)).attr({
                    "data-submenu": "",
                    role: "menubar"
                }), "drilldown" === n && t.attr({
                    "aria-hidden": !0
                })), e.parent("[data-submenu]").length && e.addClass("is-submenu-item ".concat(o))
            })
        },
        Burn: function (e, t) {
            var n = "is-".concat(t, "-submenu"),
                i = "".concat(n, "-item"),
                t = "is-".concat(t, "-submenu-parent");
            e.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(n, " ").concat(i, " ").concat(t, " is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display", "")
        }
    };

    function A(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    var D, j, N, I, R = {},
        H = !1,
        q = !1;

    function B(e) {
        this.removeEventListener("touchmove", F), this.removeEventListener("touchend", B), q || (e = u.a.Event("tap", I || e), u()(this).trigger(e)), I = null, q = H = !1
    }

    function F(e) {
        var t, n;
        !0 === u.a.spotSwipe.preventDefault && e.preventDefault(), H && (n = e.touches[0].pageX, n = D - n, q = !0, N = (new Date).getTime() - j, (t = Math.abs(n) >= u.a.spotSwipe.moveThreshold && N <= u.a.spotSwipe.timeThreshold ? 0 < n ? "left" : "right" : t) && (e.preventDefault(), B.apply(this, arguments), u()(this).trigger(u.a.Event("swipe", Object.assign({}, e)), t).trigger(u.a.Event("swipe".concat(t), Object.assign({}, e)))))
    }

    function W(e) {
        1 === e.touches.length && (D = e.touches[0].pageX, e.touches[0].pageY, I = e, q = !(H = !0), j = (new Date).getTime(), this.addEventListener("touchmove", F, {
            passive: !0 === u.a.spotSwipe.preventDefault
        }), this.addEventListener("touchend", B, !1))
    }

    function G() {
        this.addEventListener && this.addEventListener("touchstart", W, {
            passive: !0
        })
    }
    var V = (A(Y.prototype, [{
        key: "_init",
        value: function () {
            var e = this.$;
            e.event.special.swipe = {
                setup: G
            }, e.event.special.tap = {
                setup: G
            }, e.each(["left", "up", "down", "right"], function () {
                e.event.special["swipe".concat(this)] = {
                    setup: function () {
                        e(this).on("swipe", e.noop)
                    }
                }
            })
        }
    }]), Y);

    function Y(e) {
        ! function (e) {
            if (!(e instanceof Y)) throw new TypeError("Cannot call a class as a function")
        }(this), this.version = "1.0.0", this.enabled = "ontouchstart" in document.documentElement, this.preventDefault = !1, this.moveThreshold = 75, this.timeThreshold = 200, this.$ = e, this._init()
    }

    function X(e) {
        return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    R.setupSpotSwipe = function (e) {
        e.spotSwipe = new V(e)
    }, R.setupTouchHandler = function (i) {
        i.fn.addTouch = function () {
            this.each(function (e, t) {
                i(t).bind("touchstart touchmove touchend touchcancel", function (e) {
                    n(e)
                })
            });
            var n = function (e) {
                var t, n = e.changedTouches[0],
                    e = {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup"
                    } [e.type];
                "MouseEvent" in window && "function" == typeof window.MouseEvent ? t = new window.MouseEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    screenX: n.screenX,
                    screenY: n.screenY,
                    clientX: n.clientX,
                    clientY: n.clientY
                }) : (t = document.createEvent("MouseEvent")).initMouseEvent(e, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(t)
            }
        }
    }, R.init = function (e) {
        void 0 === e.spotSwipe && (R.setupSpotSwipe(e), R.setupTouchHandler(e))
    };

    function U(t, n) {
        t.data(n).split(" ").forEach(function (e) {
            u()("#".concat(e))["close" === n ? "trigger" : "triggerHandler"]("".concat(n, ".zf.trigger"), [t])
        })
    }
    var K = function () {
            for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++)
                if ("".concat(e[t], "MutationObserver") in window) return window["".concat(e[t], "MutationObserver")];
            return !1
        }(),
        Q = {
            Listeners: {
                Basic: {},
                Global: {}
            },
            Initializers: {}
        };

    function J(t, e, n) {
        var i, o = Array.prototype.slice.call(arguments, 3);
        u()(window).off(e).on(e, function (e) {
            i && clearTimeout(i), i = setTimeout(function () {
                n.apply(null, o)
            }, t || 10)
        })
    }

    function Z(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    Q.Listeners.Basic = {
        openListener: function () {
            U(u()(this), "open")
        },
        closeListener: function () {
            u()(this).data("close") ? U(u()(this), "close") : u()(this).trigger("close.zf.trigger")
        },
        toggleListener: function () {
            u()(this).data("toggle") ? U(u()(this), "toggle") : u()(this).trigger("toggle.zf.trigger")
        },
        closeableListener: function (e) {
            var t = u()(this).data("closable");
            e.stopPropagation(), "" !== t ? M.animateOut(u()(this), t, function () {
                u()(this).trigger("closed.zf")
            }) : u()(this).fadeOut().trigger("closed.zf")
        },
        toggleFocusListener: function () {
            var e = u()(this).data("toggle-focus");
            u()("#".concat(e)).triggerHandler("toggle.zf.trigger", [u()(this)])
        }
    }, Q.Initializers.addOpenListener = function (e) {
        e.off("click.zf.trigger", Q.Listeners.Basic.openListener), e.on("click.zf.trigger", "[data-open]", Q.Listeners.Basic.openListener)
    }, Q.Initializers.addCloseListener = function (e) {
        e.off("click.zf.trigger", Q.Listeners.Basic.closeListener), e.on("click.zf.trigger", "[data-close]", Q.Listeners.Basic.closeListener)
    }, Q.Initializers.addToggleListener = function (e) {
        e.off("click.zf.trigger", Q.Listeners.Basic.toggleListener), e.on("click.zf.trigger", "[data-toggle]", Q.Listeners.Basic.toggleListener)
    }, Q.Initializers.addCloseableListener = function (e) {
        e.off("close.zf.trigger", Q.Listeners.Basic.closeableListener), e.on("close.zf.trigger", "[data-closeable], [data-closable]", Q.Listeners.Basic.closeableListener)
    }, Q.Initializers.addToggleFocusListener = function (e) {
        e.off("focus.zf.trigger blur.zf.trigger", Q.Listeners.Basic.toggleFocusListener), e.on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", Q.Listeners.Basic.toggleFocusListener)
    }, Q.Listeners.Global = {
        resizeListener: function (e) {
            K || e.each(function () {
                u()(this).triggerHandler("resizeme.zf.trigger")
            }), e.attr("data-events", "resize")
        },
        scrollListener: function (e) {
            K || e.each(function () {
                u()(this).triggerHandler("scrollme.zf.trigger")
            }), e.attr("data-events", "scroll")
        },
        closeMeListener: function (e, t) {
            e = e.namespace.split(".")[0];
            u()("[data-".concat(e, "]")).not('[data-yeti-box="'.concat(t, '"]')).each(function () {
                var e = u()(this);
                e.triggerHandler("close.zf.trigger", [e])
            })
        }
    }, Q.Initializers.addClosemeListener = function (e) {
        var t = u()("[data-yeti-box]"),
            n = ["dropdown", "tooltip", "reveal"];
        e && ("string" == typeof e ? n.push(e) : "object" === X(e) && "string" == typeof e[0] ? n = n.concat(e) : console.error("Plugin names must be strings")), t.length && (n = n.map(function (e) {
            return "closeme.zf.".concat(e)
        }).join(" "), u()(window).off(n).on(n, Q.Listeners.Global.closeMeListener))
    }, Q.Initializers.addResizeListener = function (e) {
        var t = u()("[data-resize]");
        t.length && J(e, "resize.zf.trigger", Q.Listeners.Global.resizeListener, t)
    }, Q.Initializers.addScrollListener = function (e) {
        var t = u()("[data-scroll]");
        t.length && J(e, "scroll.zf.trigger", Q.Listeners.Global.scrollListener, t)
    }, Q.Initializers.addMutationEventsListener = function (e) {
        if (!K) return !1;

        function t(e) {
            var t = u()(e[0].target);
            switch (e[0].type) {
                case "attributes":
                    "scroll" === t.attr("data-events") && "data-events" === e[0].attributeName && t.triggerHandler("scrollme.zf.trigger", [t, window.pageYOffset]), "resize" === t.attr("data-events") && "data-events" === e[0].attributeName && t.triggerHandler("resizeme.zf.trigger", [t]), "style" === e[0].attributeName && (t.closest("[data-mutate]").attr("data-events", "mutate"), t.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [t.closest("[data-mutate]")]));
                    break;
                case "childList":
                    t.closest("[data-mutate]").attr("data-events", "mutate"), t.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [t.closest("[data-mutate]")]);
                    break;
                default:
                    return !1
            }
        }
        var n = e.find("[data-resize], [data-scroll], [data-mutate]");
        if (n.length)
            for (var i = 0; i <= n.length - 1; i++) new K(t).observe(n[i], {
                attributes: !0,
                childList: !0,
                characterData: !1,
                subtree: !0,
                attributeFilter: ["data-events", "style"]
            })
    }, Q.Initializers.addSimpleListeners = function () {
        var e = u()(document);
        Q.Initializers.addOpenListener(e), Q.Initializers.addCloseListener(e), Q.Initializers.addToggleListener(e), Q.Initializers.addCloseableListener(e), Q.Initializers.addToggleFocusListener(e)
    }, Q.Initializers.addGlobalListeners = function () {
        var e = u()(document);
        Q.Initializers.addMutationEventsListener(e), Q.Initializers.addResizeListener(), Q.Initializers.addScrollListener(), Q.Initializers.addClosemeListener()
    }, Q.init = function (e, t) {
        h(e(window), function () {
            !0 !== e.triggersInitialized && (Q.Initializers.addSimpleListeners(), Q.Initializers.addGlobalListeners(), e.triggersInitialized = !0)
        }), t && (t.Triggers = Q, t.IHearYou = Q.Initializers.addGlobalListeners)
    };
    var ee = (Z(te.prototype, [{
        key: "destroy",
        value: function () {
            this._destroy();
            var e, t = ne(this);
            for (e in this.$element.removeAttr("data-".concat(t)).removeData("zfPlugin").trigger("destroyed.zf.".concat(t)), this) this[e] = null
        }
    }]), te);

    function te(e, t) {
        ! function (e) {
            if (!(e instanceof te)) throw new TypeError("Cannot call a class as a function")
        }(this), this._setup(e, t);
        t = ne(this);
        this.uuid = l(6, t), this.$element.attr("data-".concat(t)) || this.$element.attr("data-".concat(t), this.uuid), this.$element.data("zfPlugin") || this.$element.data("zfPlugin", this), this.$element.trigger("init.zf.".concat(t))
    }

    function ne(e) {
        return e.className.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }

    function ie(e) {
        return (ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function oe(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function re(e, t) {
        return (re = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function se(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = ae(n);
            return function (e, t) {
                if (t && ("object" === ie(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, i ? (e = ae(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function ae(e) {
        return (ae = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var le = function () {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), re(e, t)
        }(n, ee);
        var e = se(n);

        function n() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), e.apply(this, arguments)
        }
        return oe(n.prototype, [{
            key: "_setup",
            value: function (e, t) {
                this.$element = e, this.options = u.a.extend({}, n.defaults, this.$element.data(), t), this.className = "Accordion", this._init(), O.register("Accordion", {
                    ENTER: "toggle",
                    SPACE: "toggle",
                    ARROW_DOWN: "next",
                    ARROW_UP: "previous",
                    HOME: "first",
                    END: "last"
                })
            }
        }, {
            key: "_init",
            value: function () {
                var n = this;
                this._isInitializing = !0, this.$tabs = this.$element.children("[data-accordion-item]"), this.$tabs.each(function (e, t) {
                    var n = u()(t),
                        i = n.children("[data-tab-content]"),
                        o = i[0].id || l(6, "accordion"),
                        t = t.id ? "".concat(t.id, "-label") : "".concat(o, "-label");
                    n.find("a:first").attr({
                        "aria-controls": o,
                        id: t,
                        "aria-expanded": !1
                    }), i.attr({
                        role: "region",
                        "aria-labelledby": t,
                        "aria-hidden": !0,
                        id: o
                    })
                });
                var e = this.$element.find(".is-active").children("[data-tab-content]");
                e.length && (this._initialAnchor = e.prev("a").attr("href"), this._openSingleTab(e)), this._checkDeepLink = function () {
                    var e = window.location.hash;
                    if (!e.length) {
                        if (n._isInitializing) return;
                        n._initialAnchor && (e = n._initialAnchor)
                    }
                    var t = e && u()(e),
                        e = e && n.$element.find('[href$="'.concat(e, '"]'));
                    t.length && e.length && (t && e && e.length ? e.parent("[data-accordion-item]").hasClass("is-active") || n._openSingleTab(t) : n._closeAllTabs(), n.options.deepLinkSmudge && h(u()(window), function () {
                        var e = n.$element.offset();
                        u()("html, body").animate({
                            scrollTop: e.top - n.options.deepLinkSmudgeOffset
                        }, n.options.deepLinkSmudgeDelay)
                    }), n.$element.trigger("deeplink.zf.accordion", [e, t]))
                }, this.options.deepLink && this._checkDeepLink(), this._events(), this._isInitializing = !1
            }
        }, {
            key: "_events",
            value: function () {
                var i = this;
                this.$tabs.each(function () {
                    var t = u()(this),
                        n = t.children("[data-tab-content]");
                    n.length && t.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function (e) {
                        e.preventDefault(), i.toggle(n)
                    }).on("keydown.zf.accordion", function (e) {
                        O.handleKey(e, "Accordion", {
                            toggle: function () {
                                i.toggle(n)
                            },
                            next: function () {
                                var e = t.next().find("a").focus();
                                i.options.multiExpand || e.trigger("click.zf.accordion")
                            },
                            previous: function () {
                                var e = t.prev().find("a").focus();
                                i.options.multiExpand || e.trigger("click.zf.accordion")
                            },
                            first: function () {
                                var e = i.$tabs.first().find(".accordion-title").focus();
                                i.options.multiExpand || e.trigger("click.zf.accordion")
                            },
                            last: function () {
                                var e = i.$tabs.last().find(".accordion-title").focus();
                                i.options.multiExpand || e.trigger("click.zf.accordion")
                            },
                            handled: function () {
                                e.preventDefault()
                            }
                        })
                    })
                }), this.options.deepLink && u()(window).on("hashchange", this._checkDeepLink)
            }
        }, {
            key: "toggle",
            value: function (e) {
                e.closest("[data-accordion]").is("[disabled]") ? console.info("Cannot toggle an accordion that is disabled.") : (e.parent().hasClass("is-active") ? this.up(e) : this.down(e), this.options.deepLink && (e = e.prev("a").attr("href"), this.options.updateHistory ? history.pushState({}, "", e) : history.replaceState({}, "", e)))
            }
        }, {
            key: "down",
            value: function (e) {
                e.closest("[data-accordion]").is("[disabled]") ? console.info("Cannot call down on an accordion that is disabled.") : this.options.multiExpand ? this._openTab(e) : this._openSingleTab(e)
            }
        }, {
            key: "up",
            value: function (e) {
                var t;
                this.$element.is("[disabled]") ? console.info("Cannot call up on an accordion that is disabled.") : (t = e.parent()).hasClass("is-active") && (t = t.siblings(), (this.options.allowAllClosed || t.hasClass("is-active")) && this._closeTab(e))
            }
        }, {
            key: "_openSingleTab",
            value: function (e) {
                var t = this.$element.children(".is-active").children("[data-tab-content]");
                t.length && this._closeTab(t.not(e)), this._openTab(e)
            }
        }, {
            key: "_openTab",
            value: function (e) {
                var t = this,
                    n = e.parent(),
                    i = e.attr("aria-labelledby");
                e.attr("aria-hidden", !1), n.addClass("is-active"), u()("#".concat(i)).attr({
                    "aria-expanded": !0
                }), e.finish().slideDown(this.options.slideSpeed, function () {
                    t.$element.trigger("down.zf.accordion", [e])
                })
            }
        }, {
            key: "_closeTab",
            value: function (e) {
                var t = this,
                    n = e.parent(),
                    i = e.attr("aria-labelledby");
                e.attr("aria-hidden", !0), n.removeClass("is-active"), u()("#".concat(i)).attr({
                    "aria-expanded": !1
                }), e.finish().slideUp(this.options.slideSpeed, function () {
                    t.$element.trigger("up.zf.accordion", [e])
                })
            }
        }, {
            key: "_closeAllTabs",
            value: function () {
                var e = this.$element.children(".is-active").children("[data-tab-content]");
                e.length && this._closeTab(e)
            }
        }, {
            key: "_destroy",
            value: function () {
                this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), this.options.deepLink && u()(window).off("hashchange", this._checkDeepLink)
            }
        }]), n
    }();

    function ce(e) {
        return (ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ue(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function de(e, t) {
        return (de = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function he(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = fe(n);
            return function (e, t) {
                if (t && ("object" === ce(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, i ? (e = fe(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function fe(e) {
        return (fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    le.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1,
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        deepLinkSmudgeOffset: 0,
        updateHistory: !1
    };
    var pe = function () {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), de(e, t)
        }(n, ee);
        var e = he(n);

        function n() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), e.apply(this, arguments)
        }
        return ue(n.prototype, [{
            key: "_setup",
            value: function (e, t) {
                this.$element = e, this.options = u.a.extend({}, n.defaults, this.$element.data(), t), this.className = "Equalizer", this._init()
            }
        }, {
            key: "_init",
            value: function () {
                var e = this.$element.attr("data-equalizer") || "",
                    t = this.$element.find('[data-equalizer-watch="'.concat(e, '"]'));
                v._init(), this.$watched = t.length ? t : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", e || l(6, "eq")), this.$element.attr("data-mutate", e || l(6, "eq")), this.hasNested = 0 < this.$element.find("[data-equalizer]").length, this.isNested = 0 < this.$element.parentsUntil(document.body, "[data-equalizer]").length, this.isOn = !1, this._bindHandler = {
                    onResizeMeBound: this._onResizeMe.bind(this),
                    onPostEqualizedBound: this._onPostEqualized.bind(this)
                };
                var n, e = this.$element.find("img");
                this.options.equalizeOn ? (n = this._checkMQ(), u()(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== n && !1 === n || void 0 === n) && (e.length ? S(e, this._reflow.bind(this)) : this._reflow())
            }
        }, {
            key: "_pauseEvents",
            value: function () {
                this.isOn = !1, this.$element.off({
                    ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                    "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
                    "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
                })
            }
        }, {
            key: "_onResizeMe",
            value: function (e) {
                this._reflow()
            }
        }, {
            key: "_onPostEqualized",
            value: function (e) {
                e.target !== this.$element[0] && this._reflow()
            }
        }, {
            key: "_events",
            value: function () {
                this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : (this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound)), this.isOn = !0
            }
        }, {
            key: "_checkMQ",
            value: function () {
                var e = !v.is(this.options.equalizeOn);
                return e ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), e
            }
        }, {
            key: "_killswitch",
            value: function () {}
        }, {
            key: "_reflow",
            value: function () {
                if (!this.options.equalizeOnStack && this._isStacked()) return this.$watched.css("height", "auto"), !1;
                this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this))
            }
        }, {
            key: "_isStacked",
            value: function () {
                return !this.$watched[0] || !this.$watched[1] || this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
            }
        }, {
            key: "getHeights",
            value: function (e) {
                for (var t = [], n = 0, i = this.$watched.length; n < i; n++) this.$watched[n].style.height = "auto", t.push(this.$watched[n].offsetHeight);
                e(t)
            }
        }, {
            key: "getHeightsByRow",
            value: function (e) {
                var t = this.$watched.length ? this.$watched.first().offset().top : 0,
                    n = [],
                    i = 0;
                n[i] = [];
                for (var o = 0, r = this.$watched.length; o < r; o++) {
                    this.$watched[o].style.height = "auto";
                    var s = u()(this.$watched[o]).offset().top;
                    s != t && (n[++i] = [], t = s), n[i].push([this.$watched[o], this.$watched[o].offsetHeight])
                }
                for (var a = 0, l = n.length; a < l; a++) {
                    var c = u()(n[a]).map(function () {
                            return this[1]
                        }).get(),
                        c = Math.max.apply(null, c);
                    n[a].push(c)
                }
                e(n)
            }
        }, {
            key: "applyHeight",
            value: function (e) {
                e = Math.max.apply(null, e);
                this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", e), this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "applyHeightByRow",
            value: function (e) {
                this.$element.trigger("preequalized.zf.equalizer");
                for (var t = 0, n = e.length; t < n; t++) {
                    var i = e[t].length,
                        o = e[t][i - 1];
                    if (i <= 2) u()(e[t][0][0]).css({
                        height: "auto"
                    });
                    else {
                        this.$element.trigger("preequalizedrow.zf.equalizer");
                        for (var r = 0, s = i - 1; r < s; r++) u()(e[t][r][0]).css({
                            height: o
                        });
                        this.$element.trigger("postequalizedrow.zf.equalizer")
                    }
                }
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "_destroy",
            value: function () {
                this._pauseEvents(), this.$watched.css("height", "auto")
            }
        }]), n
    }();

    function ve(e) {
        return (ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function me(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function ge(e, t) {
        return (ge = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function ye(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = be(n);
            return function (e, t) {
                if (t && ("object" === ve(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, i ? (e = be(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function be(e) {
        return (be = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    pe.defaults = {
        equalizeOnStack: !1,
        equalizeByRow: !1,
        equalizeOn: ""
    };
    var we = function () {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), ge(e, t)
        }(s, ee);
        var e, t = ye(s);

        function s() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, s), t.apply(this, arguments)
        }
        return e = [{
            key: "_setup",
            value: function (e, t) {
                this.$element = e, this.options = u.a.extend({}, s.defaults, this.$element.data(), t), this.rules = [], this.currentPath = "", this.className = "Interchange", Q.init(u.a), this._init(), this._events()
            }
        }, {
            key: "_init",
            value: function () {
                v._init();
                var e = this.$element[0].id || l(6, "interchange");
                this.$element.attr({
                    "data-resize": e,
                    id: e
                }), this._parseOptions(), this._addBreakpoints(), this._generateRules(), this._reflow()
            }
        }, {
            key: "_events",
            value: function () {
                var e = this;
                this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function () {
                    return e._reflow()
                })
            }
        }, {
            key: "_reflow",
            value: function () {
                var e, t, n;
                for (t in this.rules) this.rules.hasOwnProperty(t) && (n = this.rules[t], window.matchMedia(n.query).matches && (e = n));
                e && this.replace(e.path)
            }
        }, {
            key: "_parseOptions",
            value: function () {
                void 0 === this.options.type ? this.options.type = "auto" : -1 === ["auto", "src", "background", "html"].indexOf(this.options.type) && (console.log('Warning: invalid value "'.concat(this.options.type, '" for Interchange option "type"')), this.options.type = "auto")
            }
        }, {
            key: "_addBreakpoints",
            value: function () {
                for (var e in v.queries) v.queries.hasOwnProperty(e) && (e = v.queries[e], s.SPECIAL_QUERIES[e.name] = e.value)
            }
        }, {
            key: "_generateRules",
            value: function (e) {
                var t, n, i, o, r = [];
                for (n in t = "string" == typeof (t = this.options.rules || this.$element.data("interchange")) ? t.match(/\[.*?, .*?\]/g) : t) t.hasOwnProperty(n) && (i = (o = t[n].slice(1, -1).split(", ")).slice(0, -1).join(""), o = o[o.length - 1], s.SPECIAL_QUERIES[o] && (o = s.SPECIAL_QUERIES[o]), r.push({
                    path: i,
                    query: o
                }));
                this.rules = r
            }
        }, {
            key: "replace",
            value: function (t) {
                var n, e, i = this;
                this.currentPath !== t && (n = "replaced.zf.interchange", "src" === (e = "auto" === (e = this.options.type) ? "IMG" === this.$element[0].nodeName ? "src" : t.match(/\.(gif|jpe?g|png|svg|tiff)([?#].*)?/i) ? "background" : "html" : e) ? this.$element.attr("src", t).on("load", function () {
                    i.currentPath = t
                }).trigger(n) : "background" === e ? (t = t.replace(/\(/g, "%28").replace(/\)/g, "%29"), this.$element.css({
                    "background-image": "url(" + t + ")"
                }).trigger(n)) : "html" === e && u.a.get(t, function (e) {
                    i.$element.html(e).trigger(n), u()(e).foundation(), i.currentPath = t
                }))
            }
        }, {
            key: "_destroy",
            value: function () {
                this.$element.off("resizeme.zf.trigger")
            }
        }], me(s.prototype, e), s
    }();

    function xe(e) {
        return (xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Te(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Se(e, t) {
        return (Se = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Ce(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = Ee(n);
            return function (e, t) {
                if (t && ("object" === xe(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, i ? (e = Ee(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function Ee(e) {
        return (Ee = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    we.defaults = {
        rules: null,
        type: "auto"
    }, we.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    };
    var ke = function () {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Se(e, t)
        }(i, ee);
        var e, t, n = Ce(i);

        function i() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), n.apply(this, arguments)
        }
        return t = [{
            key: "scrollToLoc",
            value: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : i.defaults,
                    n = 2 < arguments.length ? arguments[2] : void 0,
                    e = u()(e);
                if (!e.length) return !1;
                e = Math.round(e.offset().top - t.threshold / 2 - t.offset);
                u()("html, body").stop(!0).animate({
                    scrollTop: e
                }, t.animationDuration, t.animationEasing, function () {
                    "function" == typeof n && n()
                })
            }
        }], Te((e = i).prototype, [{
            key: "_setup",
            value: function (e, t) {
                this.$element = e, this.options = u.a.extend({}, i.defaults, this.$element.data(), t), this.className = "SmoothScroll", this._init()
            }
        }, {
            key: "_init",
            value: function () {
                var e = this.$element[0].id || l(6, "smooth-scroll");
                this.$element.attr({
                    id: e
                }), this._events()
            }
        }, {
            key: "_events",
            value: function () {
                this._linkClickListener = this._handleLinkClick.bind(this), this.$element.on("click.zf.smoothScroll", this._linkClickListener), this.$element.on("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener)
            }
        }, {
            key: "_handleLinkClick",
            value: function (e) {
                var t, n = this;
                u()(e.currentTarget).is('a[href^="#"]') && (t = e.currentTarget.getAttribute("href"), this._inTransition = !0, i.scrollToLoc(t, this.options, function () {
                    n._inTransition = !1
                }), e.preventDefault())
            }
        }, {
            key: "_destroy",
            value: function () {
                this.$element.off("click.zf.smoothScroll", this._linkClickListener), this.$element.off("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener)
            }
        }]), Te(e, t), i
    }();

    function Le(e) {
        return (Le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Oe(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function ze(e, t) {
        return (ze = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Pe(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = Me(n);
            return function (e, t) {
                if (t && ("object" === Le(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, i ? (e = Me(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function Me(e) {
        return (Me = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    ke.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        offset: 0
    };
    var _e = function () {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), ze(e, t)
        }(n, ee);
        var e, t = Pe(n);

        function n() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), t.apply(this, arguments)
        }
        return e = [{
            key: "_setup",
            value: function (e, t) {
                this.$element = e, this.options = u.a.extend({}, n.defaults, this.$element.data(), t), this.className = "Magellan", Q.init(u.a), this._init(), this.calcPoints()
            }
        }, {
            key: "_init",
            value: function () {
                var e = this.$element[0].id || l(6, "magellan");
                this.$targets = u()("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({
                    "data-resize": e,
                    "data-scroll": e,
                    id: e
                }), this.$active = u()(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events()
            }
        }, {
            key: "calcPoints",
            value: function () {
                var n = this,
                    e = document.body,
                    t = document.documentElement;
                this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, t.clientHeight)), this.docHeight = Math.round(Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight)), this.$targets.each(function () {
                    var e = u()(this),
                        t = Math.round(e.offset().top - n.options.threshold);
                    e.targetPoint = t, n.points.push(t)
                })
            }
        }, {
            key: "_events",
            value: function () {
                var t = this;
                u()(window).one("load", function () {
                    t.options.deepLinking && location.hash && t.scrollToLoc(location.hash), t.calcPoints(), t._updateActive()
                }), t.onLoadListener = h(u()(window), function () {
                    t.$element.on({
                        "resizeme.zf.trigger": t.reflow.bind(t),
                        "scrollme.zf.trigger": t._updateActive.bind(t)
                    }).on("click.zf.magellan", 'a[href^="#"]', function (e) {
                        e.preventDefault();
                        e = this.getAttribute("href");
                        t.scrollToLoc(e)
                    })
                }), this._deepLinkScroll = function (e) {
                    t.options.deepLinking && t.scrollToLoc(window.location.hash)
                }, u()(window).on("hashchange", this._deepLinkScroll)
            }
        }, {
            key: "scrollToLoc",
            value: function (e) {
                this._inTransition = !0;
                var t = this,
                    n = {
                        animationEasing: this.options.animationEasing,
                        animationDuration: this.options.animationDuration,
                        threshold: this.options.threshold,
                        offset: this.options.offset
                    };
                ke.scrollToLoc(e, n, function () {
                    t._inTransition = !1
                })
            }
        }, {
            key: "reflow",
            value: function () {
                this.calcPoints(), this._updateActive()
            }
        }, {
            key: "_updateActive",
            value: function () {
                var n, i, e, t, o, r, s = this;
                this._inTransition || (n = parseInt(window.pageYOffset, 10), i = this.scrollPos > n, (this.scrollPos = n) < this.points[0] - this.options.offset - (i ? this.options.threshold : 0) || (r = n + this.winHeight === this.docHeight ? this.points.length - 1 : (o = this.points.filter(function (e, t) {
                    return e - s.options.offset - (i ? s.options.threshold : 0) <= n
                })).length ? o.length - 1 : 0), e = this.$active, t = "", void 0 !== r ? (this.$active = this.$links.filter('[href="#' + this.$targets.eq(r).data("magellan-target") + '"]'), this.$active.length && (t = this.$active[0].getAttribute("href"))) : this.$active = u()(), o = !(!this.$active.length && !e.length || this.$active.is(e)), r = t !== window.location.hash, o && (e.removeClass(this.options.activeClass), this.$active.addClass(this.options.activeClass)), this.options.deepLinking && r && (window.history.pushState ? (r = t || window.location.pathname + window.location.search, this.options.updateHistory ? window.history.pushState({}, "", r) : window.history.replaceState({}, "", r)) : window.location.hash = t), o && this.$element.trigger("update.zf.magellan", [this.$active]))
            }
        }, {
            key: "_destroy",
            value: function () {
                var e;
                this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass), this.options.deepLinking && (e = this.$active[0].getAttribute("href"), window.location.hash.replace(e, "")), u()(window).off("hashchange", this._deepLinkScroll), this.onLoadListener && u()(window).off(this.onLoadListener)
            }
        }], Oe(n.prototype, e), n
    }();

    function $e(e) {
        return ($e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ae(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function De(e, t) {
        return (De = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function je(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = Ne(n);
            return function (e, t) {
                if (t && ("object" === $e(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, i ? (e = Ne(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function Ne(e) {
        return (Ne = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    _e.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "is-active",
        deepLinking: !1,
        updateHistory: !1,
        offset: 0
    };
    var Ie = function () {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), De(e, t)
        }(i, ee);
        var e, t = je(i);

        function i() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), t.apply(this, arguments)
        }
        return e = [{
            key: "_setup",
            value: function (e, t) {
                var n = this;
                this.className = "OffCanvas", this.$element = e, this.options = u.a.extend({}, i.defaults, this.$element.data(), t), this.contentClasses = {
                    base: [],
                    reveal: []
                }, this.$lastTrigger = u()(), this.$triggers = u()(), this.position = "left", this.$content = u()(), this.nested = !!this.options.nested, this.$sticky = u()(), this.isInCanvas = !1, u()(["push", "overlap"]).each(function (e, t) {
                    n.contentClasses.base.push("has-transition-" + t)
                }), u()(["left", "right", "top", "bottom"]).each(function (e, t) {
                    n.contentClasses.base.push("has-position-" + t), n.contentClasses.reveal.push("has-reveal-" + t)
                }), Q.init(u.a), v._init(), this._init(), this._events(), O.register("OffCanvas", {
                    ESCAPE: "close"
                })
            }
        }, {
         key: "_init",
            value: function () {
                var e = this.$element.attr("id");
                this.$element.attr("aria-hidden", "true"), this.options.contentId ? this.$content = u()("#" + this.options.contentId) : this.$element.siblings("[data-off-canvas-content]").length ? this.$content = this.$element.siblings("[data-off-canvas-content]").first() : this.$content = this.$element.closest("[data-off-canvas-content]").first(), this.options.contentId ? this.options.contentId && null === this.options.nested && console.warn("Remember to use the nested option if using the content ID option!") : this.nested = 0 === this.$element.siblings("[data-off-canvas-content]").length, !0 === this.nested && (this.options.transition = "overlap", this.$element.removeClass("is-transition-push")), this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")), this.$triggers = u()(document).find('[data-open="' + e + '"], [data-close="' + e + '"], [data-toggle="' + e + '"]').attr("aria-expanded", "false").attr("aria-controls", e), this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position, !0 === this.options.contentOverlay && (e = document.createElement("div"), t = "fixed" === u()(this.$element).css("position") ? "is-overlay-fixed" : "is-overlay-absolute", e.setAttribute("class", "js-off-canvas-overlay " + t), this.$overlay = u()(e), "is-overlay-fixed" == t ? u()(this.$overlay).insertAfter(this.$element) : this.$content.append(this.$overlay));
                var t = new RegExp(c(this.options.revealClass) + "([^\\s]+)", "g").exec(this.$element[0].className);
                t && (this.options.isRevealed = !0, this.options.revealOn = this.options.revealOn || t[1]), !0 === this.options.isRevealed && this.options.revealOn && (this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn)), this._setMQChecker()), this.options.transitionTime && this.$element.css("transition-duration", this.options.transitionTime), this.$sticky = this.$content.find("[data-off-canvas-sticky]"), 0 < this.$sticky.length && "push" === this.options.transition && (this.options.contentScroll = !1);
                t = this.$element.attr("class").match(/\bin-canvas-for-(\w+)/);
                t && 2 === t.length ? this.options.inCanvasOn = t[1] : this.options.inCanvasOn && this.$element.addClass("in-canvas-for-".concat(this.options.inCanvasOn)), this.options.inCanvasOn && this._checkInCanvas(), this._removeContentClasses()
            }
        }, {
            key: "_events",
            value: function () {
                var e = this;
                this.$element.off(".zf.trigger .zf.offCanvas").on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "keydown.zf.offCanvas": this._handleKeyboard.bind(this)
                }), !0 === this.options.closeOnClick && (this.options.contentOverlay ? this.$overlay : this.$content).on({
                    "click.zf.offCanvas": this.close.bind(this)
                }), this.options.inCanvasOn && u()(window).on("changed.zf.mediaquery", function () {
                    e._checkInCanvas()
                })
            }
        }, {
            key: "_setMQChecker",
            value: function () {
                var e = this;
                this.onLoadListener = h(u()(window), function () {
                    v.atLeast(e.options.revealOn) && e.reveal(!0)
                }), u()(window).on("changed.zf.mediaquery", function () {
                    v.atLeast(e.options.revealOn) ? e.reveal(!0) : e.reveal(!1)
                })
            }
        }, {
            key: "_checkInCanvas",
            value: function () {
                this.isInCanvas = v.atLeast(this.options.inCanvasOn), !0 === this.isInCanvas && this.close()
            }
        }, {
            key: "_removeContentClasses",
            value: function (e) {
                "boolean" != typeof e ? this.$content.removeClass(this.contentClasses.base.join(" ")) : !1 === e && this.$content.removeClass("has-reveal-".concat(this.position))
            }
        }, {
            key: "_addContentClasses",
            value: function (e) {
                this._removeContentClasses(e), "boolean" != typeof e ? this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position)) : !0 === e && this.$content.addClass("has-reveal-".concat(this.position))
            }
        }, {
            key: "_fixStickyElements",
            value: function () {
                this.$sticky.each(function (e, t) {
                    var n = u()(t);
                    "fixed" === n.css("position") && (t = parseInt(n.css("top"), 10), n.data("offCanvasSticky", {
                        top: t
                    }), t = u()(document).scrollTop() + t, n.css({
                        top: "".concat(t, "px"),
                        width: "100%",
                        transition: "none"
                    }))
                })
            }
        }, {
            key: "_unfixStickyElements",
            value: function () {
                this.$sticky.each(function (e, t) {
                    var n = u()(t),
                        t = n.data("offCanvasSticky");
                    "object" === $e(t) && (n.css({
                        top: "".concat(t.top, "px"),
                        width: "",
                        transition: ""
                    }), n.data("offCanvasSticky", ""))
                })
            }
        }, {
            key: "reveal",
            value: function (e) {
                e ? (this.close(), this.isRevealed = !0, this.$element.attr("aria-hidden", "false"), this.$element.off("open.zf.trigger toggle.zf.trigger"), this.$element.removeClass("is-closed")) : (this.isRevealed = !1, this.$element.attr("aria-hidden", "true"), this.$element.off("open.zf.trigger toggle.zf.trigger").on({
                    "open.zf.trigger": this.open.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this)
                }), this.$element.addClass("is-closed")), this._addContentClasses(e)
            }
        }, {
            key: "_stopScrolling",
            value: function (e) {
                return !1
            }
        }, {
            key: "_recordScrollable",
            value: function (e) {
                this.lastY = e.touches[0].pageY
            }
        }, {
            key: "_preventDefaultAtEdges",
            value: function (e) {
                var t = e.data,
                    n = this.lastY - e.touches[0].pageY;
                this.lastY = e.touches[0].pageY, t._canScroll(n, this) || e.preventDefault()
            }
        }, {
            key: "_scrollboxTouchMoved",
            value: function (e) {
                var t = e.data,
                    n = this.closest("[data-off-canvas], [data-off-canvas-scrollbox-outer]"),
                    i = this.lastY - e.touches[0].pageY;
                n.lastY = this.lastY = e.touches[0].pageY, e.stopPropagation(), t._canScroll(i, this) || (t._canScroll(i, n) ? n.scrollTop += i : e.preventDefault())
            }
        }, {
            key: "_canScroll",
            value: function (e, t) {
                var n = 0 < t.scrollTop,
                    t = t.scrollTop < t.scrollHeight - t.clientHeight;
                return e < 0 && n || 0 < e && t
            }
        }, {
            key: "open",
            value: function (e, t) {
                var n, i = this;
                this.$element.hasClass("is-open") || this.isRevealed || this.isInCanvas || (n = this, t && (this.$lastTrigger = t), "top" === this.options.forceTo ? window.scrollTo(0, 0) : "bottom" === this.options.forceTo && window.scrollTo(0, document.body.scrollHeight), this.options.transitionTime && "overlap" !== this.options.transition ? this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime) : this.$element.siblings("[data-off-canvas-content]").css("transition-duration", ""), this.$element.addClass("is-open").removeClass("is-closed"), this.$triggers.attr("aria-expanded", "true"), this.$element.attr("aria-hidden", "false"), this.$content.addClass("is-open-" + this.position), !1 === this.options.contentScroll && (u()("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling), this.$element.on("touchstart", this._recordScrollable), this.$element.on("touchmove", this, this._preventDefaultAtEdges), this.$element.on("touchstart", "[data-off-canvas-scrollbox]", this._recordScrollable), this.$element.on("touchmove", "[data-off-canvas-scrollbox]", this, this._scrollboxTouchMoved)), !0 === this.options.contentOverlay && this.$overlay.addClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.addClass("is-closable"), !0 === this.options.autoFocus && this.$element.one(d(this.$element), function () {
                    var e;
                    n.$element.hasClass("is-open") && ((e = n.$element.find("[data-autofocus]")).length ? e : n.$element.find("a, button")).eq(0).focus()
                }), !0 === this.options.trapFocus && (this.$content.attr("tabindex", "-1"), O.trapFocus(this.$element)), "push" === this.options.transition && this._fixStickyElements(), this._addContentClasses(), this.$element.trigger("opened.zf.offCanvas"), this.$element.one(d(this.$element), function () {
                    i.$element.trigger("openedEnd.zf.offCanvas")
                }))
            }
        }, {
            key: "close",
            value: function (e) {
                var t = this;
                this.$element.hasClass("is-open") && !this.isRevealed && (this.$element.trigger("close.zf.offCanvas"), this.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true"), this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"), !0 === this.options.contentOverlay && this.$overlay.removeClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.removeClass("is-closable"), this.$triggers.attr("aria-expanded", "false"), this.$element.one(d(this.$element), function (e) {
                    t.$element.addClass("is-closed"), t._removeContentClasses(), "push" === t.options.transition && t._unfixStickyElements(), !1 === t.options.contentScroll && (u()("body").removeClass("is-off-canvas-open").off("touchmove", t._stopScrolling), t.$element.off("touchstart", t._recordScrollable), t.$element.off("touchmove", t._preventDefaultAtEdges), t.$element.off("touchstart", "[data-off-canvas-scrollbox]", t._recordScrollable), t.$element.off("touchmove", "[data-off-canvas-scrollbox]", t._scrollboxTouchMoved)), !0 === t.options.trapFocus && (t.$content.removeAttr("tabindex"), O.releaseFocus(t.$element)), t.$element.trigger("closed.zf.offCanvas")
                }))
            }
        }, {
            key: "toggle",
            value: function (e, t) {
                this.$element.hasClass("is-open") ? this.close(e, t) : this.open(e, t)
            }
        }, {
            key: "_handleKeyboard",
            value: function (e) {
                var t = this;
                O.handleKey(e, "OffCanvas", {
                    close: function () {
                        return t.close(), t.$lastTrigger.focus(), !0
                    },
                    handled: function () {
                        e.preventDefault()
                    }
                })
            }
        }, {
            key: "_destroy",
            value: function () {
                this.close(), this.$element.off(".zf.trigger .zf.offCanvas"), this.$overlay.off(".zf.offCanvas"), this.onLoadListener && u()(window).off(this.onLoadListener)
            }
        }], Ae(i.prototype, e), i
    }();

    function Re(e) {
        return (Re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function He(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function qe(e, t) {
        return (qe = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Be(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = Fe(n);
            return function (e, t) {
                if (t && ("object" === Re(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, i ? (e = Fe(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function Fe(e) {
        return (Fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    Ie.defaults = {
        closeOnClick: !0,
        contentOverlay: !0,
        contentId: null,
        nested: null,
        contentScroll: !0,
        transitionTime: null,
        transition: "push",
        forceTo: null,
        isRevealed: !1,
        revealOn: null,
        inCanvasOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    };
    var We = function () {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), qe(e, t)
        }(n, ee);
        var e, t = Be(n);

        function n() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), t.apply(this, arguments)
        }
        return e = [{
            key: "_setup",
            value: function (e, t) {
                this.$element = e, this.options = u.a.extend({}, n.defaults, this.$element.data(), t), this.className = "Sticky", Q.init(u.a), this._init()
            }
        }, {
            key: "_init",
            value: function () {
                v._init();
                var e = this.$element.parent("[data-sticky-container]"),
                    t = this.$element[0].id || l(6, "sticky"),
                    n = this;
                e.length ? this.$container = e : (this.wasWrapped = !0, this.$element.wrap(this.options.container), this.$container = this.$element.parent()), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({
                    "data-resize": t,
                    "data-mutate": t
                }), "" !== this.options.anchor && u()("#" + n.options.anchor).attr({
                    "data-mutate": t
                }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, this.onLoadListener = h(u()(window), function () {
                    n.containerHeight = "none" == n.$element.css("display") ? 0 : n.$element[0].getBoundingClientRect().height, n.$container.css("height", n.containerHeight), n.elemHeight = n.containerHeight, "" !== n.options.anchor ? n.$anchor = u()("#" + n.options.anchor) : n._parsePoints(), n._setSizes(function () {
                        var e = window.pageYOffset;
                        n._calc(!1, e), n.isStuck || n._removeSticky(!(e >= n.topPoint))
                    }), n._events(t.split("-").reverse().join("-"))
                })
            }
        }, {
            key: "_parsePoints",
            value: function () {
                for (var e, t, n, i = ["" == this.options.topAnchor ? 1 : this.options.topAnchor, "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor], o = {}, r = 0, s = i.length; r < s && i[r]; r++) "number" == typeof i[r] ? n = i[r] : (e = i[r].split(":"), n = (t = u()("#".concat(e[0]))).offset().top, e[1] && "bottom" === e[1].toLowerCase() && (n += t[0].getBoundingClientRect().height)), o[r] = n;
                this.points = o
            }
        }, {
            key: "_events",
            value: function (n) {
                var i = this,
                    e = this.scrollListener = "scroll.zf.".concat(n);
                this.isOn || (this.canStick && (this.isOn = !0, u()(window).off(e).on(e, function (e) {
                    0 === i.scrollCount ? (i.scrollCount = i.options.checkEvery, i._setSizes(function () {
                        i._calc(!1, window.pageYOffset)
                    })) : (i.scrollCount--, i._calc(!1, window.pageYOffset))
                })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function (e, t) {
                    i._eventsHandler(n)
                }), this.$element.on("mutateme.zf.trigger", function (e, t) {
                    i._eventsHandler(n)
                }), this.$anchor && this.$anchor.on("mutateme.zf.trigger", function (e, t) {
                    i._eventsHandler(n)
                }))
            }
        }, {
            key: "_eventsHandler",
            value: function (e) {
                var t = this,
                    n = this.scrollListener = "scroll.zf.".concat(e);
                t._setSizes(function () {
                    t._calc(!1), t.canStick ? t.isOn || t._events(e) : t.isOn && t._pauseListeners(n)
                })
            }
        }, {
            key: "_pauseListeners",
            value: function (e) {
                this.isOn = !1, u()(window).off(e), this.$element.trigger("pause.zf.sticky")
            }
        }, {
            key: "_calc",
            value: function (e, t) {
                if (e && this._setSizes(), !this.canStick) return this.isStuck && this._removeSticky(!0), !1;
                (t = t || window.pageYOffset) >= this.topPoint ? t <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0)
            }
        }, {
            key: "_setSticky",
            value: function () {
                var e = this,
                    t = this.options.stickTo,
                    n = "top" === t ? "marginTop" : "marginBottom",
                    i = "top" === t ? "bottom" : "top",
                    o = {};
                o[n] = "".concat(this.options[n], "em"), o[t] = 0, o[i] = "auto", this.isStuck = !0, this.$element.removeClass("is-anchored is-at-".concat(i)).addClass("is-stuck is-at-".concat(t)).css(o).trigger("sticky.zf.stuckto:".concat(t)), this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
                    e._setSizes()
                })
            }
        }, {
            key: "_removeSticky",
            value: function (e) {
                var t = this.options.stickTo,
                    n = {},
                    i = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                    o = e ? "top" : "bottom";
                n["top" === t ? "marginTop" : "marginBottom"] = 0, n.bottom = "auto", n.top = e ? 0 : i, this.isStuck = !1, this.$element.removeClass("is-stuck is-at-".concat(t)).addClass("is-anchored is-at-".concat(o)).css(n).trigger("sticky.zf.unstuckfrom:".concat(o))
            }
        }, {
            key: "_setSizes",
            value: function (e) {
                this.canStick = v.is(this.options.stickyOn), this.canStick || e && "function" == typeof e && e();
                var t, n = this.$container[0].getBoundingClientRect().width,
                    i = window.getComputedStyle(this.$container[0]),
                    o = parseInt(i["padding-left"], 10),
                    i = parseInt(i["padding-right"], 10);
                this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({
                    "max-width": "".concat(n - o - i, "px")
                }), !this.options.dynamicHeight && this.containerHeight || (t = this.$element[0].getBoundingClientRect().height || this.containerHeight, t = "none" == this.$element.css("display") ? 0 : t, this.$container.css("height", t), this.containerHeight = t), this.elemHeight = this.containerHeight, !this.isStuck && this.$element.hasClass("is-at-bottom") && (t = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight, this.$element.css("top", t)), this._setBreakPoints(this.containerHeight, function () {
                    e && "function" == typeof e && e()
                })
            }
        }, {
            key: "_setBreakPoints",
            value: function (e, t) {
                if (!this.canStick) {
                    if (!t || "function" != typeof t) return !1;
                    t()
                }
                var n = Ge(this.options.marginTop),
                    i = Ge(this.options.marginBottom),
                    o = this.points ? this.points[0] : this.$anchor.offset().top,
                    r = this.points ? this.points[1] : o + this.anchorHeight,
                    s = window.innerHeight;
                "top" === this.options.stickTo ? (o -= n, r -= e + n) : "bottom" === this.options.stickTo && (o -= s - (e + i), r -= s - i), this.topPoint = o, this.bottomPoint = r, t && "function" == typeof t && t()
            }
        }, {
            key: "_destroy",
            value: function () {
                this._removeSticky(!0), this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
                    height: "",
                    top: "",
                    bottom: "",
                    "max-width": ""
                }).off("resizeme.zf.trigger").off("mutateme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), this.scrollListener && u()(window).off(this.scrollListener), this.onLoadListener && u()(window).off(this.onLoadListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                    height: ""
                })
            }
        }], He(n.prototype, e), n
    }();

    function Ge(e) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * e
    }

    function Ve(e) {
        return (Ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ye(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Xe(e, t) {
        return (Xe = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Ue(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = Ke(n);
            return function (e, t) {
                if (t && ("object" === Ve(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, i ? (e = Ke(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function Ke(e) {
        return (Ke = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    We.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        dynamicHeight: !0,
        checkEvery: -1
    };
    var Qe = function () {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Xe(e, t)
        }(n, ee);
        var e, t = Ue(n);

        function n() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), t.apply(this, arguments)
        }
        return e = [{
            key: "_setup",
            value: function (e, t) {
                this.$element = e, this.options = u.a.extend({}, n.defaults, e.data(), t), this.className = "", this.className = "Toggler", Q.init(u.a), this._init(), this._events()
            }
        }, {
            key: "_init",
            value: function () {
                var e, i = this.$element[0].id,
                    t = u()('[data-open~="'.concat(i, '"], [data-close~="').concat(i, '"], [data-toggle~="').concat(i, '"]'));
                if (this.options.animate) e = this.options.animate.split(" "), this.animationIn = e[0], this.animationOut = e[1] || null, t.attr("aria-expanded", !this.$element.is(":hidden"));
                else {
                    if ("string" != typeof (e = this.options.toggler) || !e.length) throw new Error("The 'toggler' option containing the target class is required, got \"".concat(e, '"'));
                    this.className = "." === e[0] ? e.slice(1) : e, t.attr("aria-expanded", this.$element.hasClass(this.className))
                }
                t.each(function (e, t) {
                    var n = u()(t),
                        t = n.attr("aria-controls") || "";
                    new RegExp("\\b".concat(c(i), "\\b")).test(t) || n.attr("aria-controls", t ? "".concat(t, " ").concat(i) : i)
                })
            }
        }, {
            key: "_events",
            value: function () {
                this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
            }
        }, {
            key: "toggle",
            value: function () {
                this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
            }
        }, {
            key: "_toggleClass",
            value: function () {
                this.$element.toggleClass(this.className);
                var e = this.$element.hasClass(this.className);
                e ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), this._updateARIA(e), this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")
            }
        }, {
            key: "_toggleAnimate",
            value: function () {
                var e = this;
                this.$element.is(":hidden") ? M.animateIn(this.$element, this.animationIn, function () {
                    e._updateARIA(!0), this.trigger("on.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                }) : M.animateOut(this.$element, this.animationOut, function () {
                    e._updateARIA(!1), this.trigger("off.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                })
            }
        }, {
            key: "_updateARIA",
            value: function (e) {
                var t = this.$element[0].id;
                u()('[data-open="'.concat(t, '"], [data-close="').concat(t, '"], [data-toggle="').concat(t, '"]')).attr({
                    "aria-expanded": !!e
                })
            }
        }, {
            key: "_destroy",
            value: function () {
                this.$element.off(".zf.toggler")
            }
        }], Ye(n.prototype, e), n
    }();

    function Je(e) {
        return (Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ze(e) {
        return null !== e && "object" === Je(e) && "constructor" in e && e.constructor === Object
    }

    function et(t, n) {
        void 0 === t && (t = {}), void 0 === n && (n = {}), Object.keys(n).forEach(function (e) {
            void 0 === t[e] ? t[e] = n[e] : Ze(n[e]) && Ze(t[e]) && 0 < Object.keys(n[e]).length && et(t[e], n[e])
        })
    }
    Qe.defaults = {
        toggler: void 0,
        animate: !1
    }, g.addToJquery(u.a), g.rtl = a, g.GetYoDigits = l, g.transitionend = d, g.RegExpEscape = c, g.onLoad = h, g.Box = w, g.onImagesLoaded = S, g.Keyboard = O, g.MediaQuery = v, g.Motion = M, g.Move = function (n, i, o) {
        var r, s, a = null;
        if (0 === n) return o.apply(i), void i.trigger("finished.zf.animate", [i]).triggerHandler("finished.zf.animate", [i]);
        r = window.requestAnimationFrame(function e(t) {
            s = t - (a = a || t), o.apply(i), s < n ? r = window.requestAnimationFrame(e, i) : (window.cancelAnimationFrame(r), i.trigger("finished.zf.animate", [i]).triggerHandler("finished.zf.animate", [i]))
        })
    }, g.Nest = $, g.Timer = function (t, e, n) {
        var i, o, r = this,
            s = e.duration,
            a = Object.keys(t.data())[0] || "timer",
            l = -1;
        this.isPaused = !1, this.restart = function () {
            l = -1, clearTimeout(o), this.start()
        }, this.start = function () {
            this.isPaused = !1, clearTimeout(o), l = l <= 0 ? s : l, t.data("paused", !1), i = Date.now(), o = setTimeout(function () {
                e.infinite && r.restart(), n && "function" == typeof n && n()
            }, l), t.trigger("timerstart.zf.".concat(a))
        }, this.pause = function () {
            this.isPaused = !0, clearTimeout(o), t.data("paused", !0);
            var e = Date.now();
            l -= e - i, t.trigger("timerpaused.zf.".concat(a))
        }
    }, R.init(u.a), Q.init(u.a, g), v._init(), g.plugin(le, "Accordion"), g.plugin(pe, "Equalizer"), g.plugin(we, "Interchange"), g.plugin(_e, "Magellan"), g.plugin(Ie, "OffCanvas"), g.plugin(ke, "SmoothScroll"), g.plugin(We, "Sticky"), g.plugin(Qe, "Toggler");
    var tt = "undefined" != typeof document ? document : {},
        nt = {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: {
                blur: function () {},
                nodeName: ""
            },
            querySelector: function () {
                return null
            },
            querySelectorAll: function () {
                return []
            },
            getElementById: function () {
                return null
            },
            createEvent: function () {
                return {
                    initEvent: function () {}
                }
            },
            createElement: function () {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                        return []
                    }
                }
            },
            createElementNS: function () {
                return {}
            },
            importNode: function () {
                return null
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
    et(tt, nt);
    var it = "undefined" != typeof window ? window : {};
    et(it, {
        document: nt,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function () {},
            pushState: function () {},
            go: function () {},
            back: function () {}
        },
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
            return {}
        }
    });

    function ot(e) {
        ! function (e) {
            if (!(e instanceof ot)) throw new TypeError("Cannot call a class as a function")
        }(this);
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    }

    function rt(e, t) {
        var n = [],
            i = 0;
        if (e && !t && e instanceof ot) return e;
        if (e)
            if ("string" == typeof e) {
                var o, r, s = e.trim();
                if (0 <= s.indexOf("<") && 0 <= s.indexOf(">")) {
                    var a = "div";
                    for (0 === s.indexOf("<li") && (a = "ul"), 0 === s.indexOf("<tr") && (a = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (a = "tr"), 0 === s.indexOf("<tbody") && (a = "table"), 0 === s.indexOf("<option") && (a = "select"), (r = tt.createElement(a)).innerHTML = s, i = 0; i < r.childNodes.length; i += 1) n.push(r.childNodes[i])
                } else
                    for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || tt).querySelectorAll(e.trim()) : [tt.getElementById(e.trim().split("#")[1])], i = 0; i < o.length; i += 1) o[i] && n.push(o[i])
            } else if (e.nodeType || e === it || e === tt) n.push(e);
        else if (0 < e.length && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) n.push(e[i]);
        return new ot(n)
    }

    function st(e) {
        for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
        return t
    }

    function at(e, t) {
        return (at = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function lt(e, t) {
        if (t && ("object" === vt(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return ct(e)
    }

    function ct(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function ut(e) {
        return (ut = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function dt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ht(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function ft(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function pt(e, t, n) {
        return t && ft(e.prototype, t), n && ft(e, n), e
    }

    function vt(e) {
        return (vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    rt.fn = ot.prototype, rt.Class = ot, rt.Dom7 = ot, "resize scroll".split(" ");
    var mt = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[n]);
            return this
        },
        removeClass: function (e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[n]);
            return this
        },
        hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function (e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
            return this
        },
        attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1)
                if (2 === arguments.length) this[n].setAttribute(e, t);
                else
                    for (var i in e) this[n][i] = e[i], this[n].setAttribute(i, e[i]);
            return this
        },
        removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function (e, t) {
            var n;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)(n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                return this
            }
            if (n = this[0]) return n.dom7ElementDataStorage && e in n.dom7ElementDataStorage ? n.dom7ElementDataStorage[e] : n.getAttribute("data-".concat(e)) || void 0
        },
        transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransform = e, n.transform = e
            }
            return this
        },
        transition: function (e) {
            "string" != typeof e && (e = "".concat(e, "ms"));
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransitionDuration = e, n.transitionDuration = e
            }
            return this
        },
        on: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = t[0],
                r = t[1],
                s = t[2],
                o = t[3];

            function a(e) {
                var t = e.target;
                if (t) {
                    var n = e.target.dom7EventData || [];
                    if (n.indexOf(e) < 0 && n.unshift(e), rt(t).is(r)) s.apply(t, n);
                    else
                        for (var i = rt(t).parents(), o = 0; o < i.length; o += 1) rt(i[o]).is(r) && s.apply(i[o], n)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
            }
            "function" == typeof t[1] && (i = t[0], s = t[1], o = t[2], r = void 0);
            for (var c, o = o || !1, u = i.split(" "), d = 0; d < this.length; d += 1) {
                var h = this[d];
                if (r)
                    for (c = 0; c < u.length; c += 1) {
                        var f = u[c];
                        h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({
                            listener: s,
                            proxyListener: a
                        }), h.addEventListener(f, a, o)
                    } else
                        for (c = 0; c < u.length; c += 1) {
                            var p = u[c];
                            h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[p] || (h.dom7Listeners[p] = []), h.dom7Listeners[p].push({
                                listener: s,
                                proxyListener: l
                            }), h.addEventListener(p, l, o)
                        }
            }
            return this
        },
        off: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = t[0],
                o = t[1],
                r = t[2],
                s = t[3];
            "function" == typeof t[1] && (i = t[0], r = t[1], s = t[2], o = void 0);
            for (var s = s || !1, a = i.split(" "), l = 0; l < a.length; l += 1)
                for (var c = a[l], u = 0; u < this.length; u += 1) {
                    var d = this[u],
                        h = void 0;
                    if (!o && d.dom7Listeners ? h = d.dom7Listeners[c] : o && d.dom7LiveListeners && (h = d.dom7LiveListeners[c]), h && h.length)
                        for (var f = h.length - 1; 0 <= f; --f) {
                            var p = h[f];
                            !(r && p.listener === r || r && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === r) && r || (d.removeEventListener(c, p.proxyListener, s), h.splice(f, 1))
                        }
                }
            return this
        },
        trigger: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            for (var i = t[0].split(" "), o = t[1], r = 0; r < i.length; r += 1)
                for (var s = i[r], a = 0; a < this.length; a += 1) {
                    var l = this[a],
                        c = void 0;
                    try {
                        c = new it.CustomEvent(s, {
                            detail: o,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (c = tt.createEvent("Event")).initEvent(s, !0, !0), c.detail = o
                    }
                    l.dom7EventData = t.filter(function (e, t) {
                        return 0 < t
                    }), l.dispatchEvent(c), l.dom7EventData = [], delete l.dom7EventData
                }
            return this
        },
        transitionEnd: function (t) {
            var n, i = ["webkitTransitionEnd", "transitionend"],
                o = this;

            function r(e) {
                if (e.target === this)
                    for (t.call(this, e), n = 0; n < i.length; n += 1) o.off(i[n], r)
            }
            if (t)
                for (n = 0; n < i.length; n += 1) o.on(i[n], r);
            return this
        },
        outerWidth: function (e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function (e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function () {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    n = tt.body,
                    i = e.clientTop || n.clientTop || 0,
                    o = e.clientLeft || n.clientLeft || 0,
                    n = e === it ? it.scrollY : e.scrollTop,
                    e = e === it ? it.scrollX : e.scrollLeft;
                return {
                    top: t.top + n - i,
                    left: t.left + e - o
                }
            }
            return null
        },
        css: function (e, t) {
            var n;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        for (var i in e) this[n].style[i] = e[i];
                    return this
                }
                if (this[0]) return it.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e) return this;
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this
        },
        each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function (e) {
            var t, n, i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = rt(e), n = 0; n < t.length; n += 1)
                    if (t[n] === i) return !0;
                return !1
            }
            if (e === tt) return i === tt;
            if (e === it) return i === it;
            if (e.nodeType || e instanceof ot) {
                for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
                    if (t[n] === i) return !0;
                return !1
            }
            return !1
        },
        index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t = this.length;
            return new ot(t - 1 < e ? [] : e < 0 ? (t = t + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function () {
            for (var e = 0; e < arguments.length; e += 1)
                for (var t = e < 0 || arguments.length <= e ? void 0 : arguments[e], n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) {
                        var i = tt.createElement("div");
                        for (i.innerHTML = t; i.firstChild;) this[n].appendChild(i.firstChild)
                    } else if (t instanceof ot)
                for (var o = 0; o < t.length; o += 1) this[n].appendChild(t[o]);
            else this[n].appendChild(t);
            return this
        },
        prepend: function (e) {
            for (var t, n = 0; n < this.length; n += 1)
                if ("string" == typeof e) {
                    var i = tt.createElement("div");
                    for (i.innerHTML = e, t = i.childNodes.length - 1; 0 <= t; --t) this[n].insertBefore(i.childNodes[t], this[n].childNodes[0])
                } else if (e instanceof ot)
                for (t = 0; t < e.length; t += 1) this[n].insertBefore(e[t], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
            return this
        },
        next: function (e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && rt(this[0].nextElementSibling).is(e) ? new ot([this[0].nextElementSibling]) : new ot([]) : this[0].nextElementSibling ? new ot([this[0].nextElementSibling]) : new ot([]) : new ot([])
        },
        nextAll: function (e) {
            var t = [],
                n = this[0];
            if (!n) return new ot([]);
            for (; n.nextElementSibling;) {
                var i = n.nextElementSibling;
                e && !rt(i).is(e) || t.push(i), n = i
            }
            return new ot(t)
        },
        prev: function (e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && rt(t.previousElementSibling).is(e) ? new ot([t.previousElementSibling]) : new ot([]) : t.previousElementSibling ? new ot([t.previousElementSibling]) : new ot([])
            }
            return new ot([])
        },
        prevAll: function (e) {
            var t = [],
                n = this[0];
            if (!n) return new ot([]);
            for (; n.previousElementSibling;) {
                var i = n.previousElementSibling;
                e && !rt(i).is(e) || t.push(i), n = i
            }
            return new ot(t)
        },
        parent: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1) null === this[n].parentNode || e && !rt(this[n].parentNode).is(e) || t.push(this[n].parentNode);
            return rt(st(t))
        },
        parents: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].parentNode; i;) e && !rt(i).is(e) || t.push(i), i = i.parentNode;
            return rt(st(t))
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? new ot([]) : t = !t.is(e) ? t.parents(e).eq(0) : t
        },
        find: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].querySelectorAll(e), o = 0; o < i.length; o += 1) t.push(i[o]);
            return new ot(t)
        },
        children: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].childNodes, o = 0; o < i.length; o += 1) e ? 1 === i[o].nodeType && rt(i[o]).is(e) && t.push(i[o]) : 1 === i[o].nodeType && t.push(i[o]);
            return new ot(st(t))
        },
        filter: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1) e.call(this[n], n, this[n]) && t.push(this[n]);
            return new ot(t)
        },
        remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function () {
            for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            for (e = 0; e < n.length; e += 1)
                for (var o = rt(n[e]), r = 0; r < o.length; r += 1) this[this.length] = o[r], this.length += 1;
            return this
        },
        styles: function () {
            return this[0] ? it.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(mt).forEach(function (e) {
        rt.fn[e] = rt.fn[e] || mt[e]
    });
    var gt = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach(function (e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function (e) {
                return setTimeout(e, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0)
            },
            now: function () {
                return Date.now()
            },
            getTranslate: function (e) {
                var t, n, i, o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "x",
                    e = it.getComputedStyle(e, null);
                return it.WebKitCSSMatrix ? (6 < (n = e.transform || e.webkitTransform).split(",").length && (n = n.split(", ").map(function (e) {
                    return e.replace(",", ".")
                }).join(", ")), i = new it.WebKitCSSMatrix("none" === n ? "" : n)) : t = (i = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === o && (n = it.WebKitCSSMatrix ? i.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), (n = "y" === o ? it.WebKitCSSMatrix ? i.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5]) : n) || 0
            },
            parseUrlQuery: function (e) {
                var t, n, i, o, r = {},
                    e = e || it.location.href;
                if ("string" == typeof e && e.length)
                    for (o = (n = (e = -1 < e.indexOf("?") ? e.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                            return "" !== e
                        })).length, t = 0; t < o; t += 1) i = n[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                return r
            },
            isObject: function (e) {
                return "object" === vt(e) && null !== e && e.constructor && e.constructor === Object
            },
            extend: function () {
                for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
                    var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                    if (null != n)
                        for (var i = Object.keys(Object(n)), o = 0, r = i.length; o < r; o += 1) {
                            var s = i[o],
                                a = Object.getOwnPropertyDescriptor(n, s);
                            void 0 !== a && a.enumerable && (gt.isObject(e[s]) && gt.isObject(n[s]) ? gt.extend(e[s], n[s]) : !gt.isObject(e[s]) && gt.isObject(n[s]) ? (e[s] = {}, gt.extend(e[s], n[s])) : e[s] = n[s])
                        }
                }
                return e
            }
        },
        yt = {
            touch: !!("ontouchstart" in it || it.DocumentTouch && tt instanceof it.DocumentTouch),
            pointerEvents: !!it.PointerEvent && "maxTouchPoints" in it.navigator && 0 <= it.navigator.maxTouchPoints,
            observer: "MutationObserver" in it || "WebkitMutationObserver" in it,
            passiveListener: function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    it.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in it
        },
        bt = (pt(wt, [{
            key: "on",
            value: function (e, t, n) {
                var i = this;
                if ("function" != typeof t) return i;
                var o = n ? "unshift" : "push";
                return e.split(" ").forEach(function (e) {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][o](t)
                }), i
            }
        }, {
            key: "once",
            value: function (i, o, e) {
                var r = this;
                return "function" != typeof o ? r : (s.f7proxy = o, r.on(i, s, e));

                function s() {
                    r.off(i, s), s.f7proxy && delete s.f7proxy;
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    o.apply(r, t)
                }
            }
        }, {
            key: "off",
            value: function (e, i) {
                var o = this;
                return o.eventsListeners && e.split(" ").forEach(function (n) {
                    void 0 === i ? o.eventsListeners[n] = [] : o.eventsListeners[n] && o.eventsListeners[n].length && o.eventsListeners[n].forEach(function (e, t) {
                        (e === i || e.f7proxy && e.f7proxy === i) && o.eventsListeners[n].splice(t, 1)
                    })
                }), o
            }
        }, {
            key: "emit",
            value: function () {
                var e, n, i = this;
                if (!i.eventsListeners) return i;
                for (var t = arguments.length, o = new Array(t), r = 0; r < t; r++) o[r] = arguments[r];
                var s = "string" == typeof o[0] || Array.isArray(o[0]) ? (e = o[0], n = o.slice(1, o.length), i) : (e = o[0].events, n = o[0].data, o[0].context || i);
                return (Array.isArray(e) ? e : e.split(" ")).forEach(function (e) {
                    var t;
                    i.eventsListeners && i.eventsListeners[e] && (t = [], i.eventsListeners[e].forEach(function (e) {
                        t.push(e)
                    }), t.forEach(function (e) {
                        e.apply(s, n)
                    }))
                }), i
            }
        }, {
            key: "useModulesParams",
            value: function (t) {
                var n = this;
                n.modules && Object.keys(n.modules).forEach(function (e) {
                    e = n.modules[e];
                    e.params && gt.extend(t, e.params)
                })
            }
        }, {
            key: "useModules",
            value: function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    i = this;
                i.modules && Object.keys(i.modules).forEach(function (e) {
                    var n = i.modules[e],
                        e = t[e] || {};
                    n.instance && Object.keys(n.instance).forEach(function (e) {
                        var t = n.instance[e];
                        i[e] = "function" == typeof t ? t.bind(i) : t
                    }), n.on && i.on && Object.keys(n.on).forEach(function (e) {
                        i.on(e, n.on[e])
                    }), n.create && n.create.bind(i)(e)
                })
            }
        }], [{
            key: "components",
            set: function (e) {
                this.use && this.use(e)
            }
        }, {
            key: "installModule",
            value: function (t) {
                var n = this;
                n.prototype.modules || (n.prototype.modules = {});
                var e = t.name || "".concat(Object.keys(n.prototype.modules).length, "_").concat(gt.now());
                if ((n.prototype.modules[e] = t).proto && Object.keys(t.proto).forEach(function (e) {
                        n.prototype[e] = t.proto[e]
                    }), t.static && Object.keys(t.static).forEach(function (e) {
                        n[e] = t.static[e]
                    }), t.install) {
                    for (var i = arguments.length, o = new Array(1 < i ? i - 1 : 0), r = 1; r < i; r++) o[r - 1] = arguments[r];
                    t.install.apply(n, o)
                }
                return n
            }
        }, {
            key: "use",
            value: function (e) {
                var t = this;
                if (Array.isArray(e)) return e.forEach(function (e) {
                    return t.installModule(e)
                }), t;
                for (var n = arguments.length, i = new Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                return t.installModule.apply(t, [e].concat(i))
            }
        }]), wt);

    function wt() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        ht(this, wt);
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e])
        })
    }
    var xt, Tt = {
            updateSize: function () {
                var e = this.$el,
                    t = void 0 !== this.params.width ? this.params.width : e[0].clientWidth,
                    n = void 0 !== this.params.height ? this.params.height : e[0].clientHeight;
                0 === t && this.isHorizontal() || 0 === n && this.isVertical() || (t = t - parseInt(e.css("padding-left"), 10) - parseInt(e.css("padding-right"), 10), n = n - parseInt(e.css("padding-top"), 10) - parseInt(e.css("padding-bottom"), 10), gt.extend(this, {
                    width: t,
                    height: n,
                    size: this.isHorizontal() ? t : n
                }))
            },
            updateSlides: function () {
                var t = this.params,
                    e = this.$wrapperEl,
                    n = this.size,
                    i = this.rtlTranslate,
                    o = this.wrongRTL,
                    r = this.virtual && t.virtual.enabled,
                    s = (r ? this.virtual : this).slides.length,
                    a = e.children(".".concat(this.params.slideClass)),
                    l = (r ? this.virtual.slides : a).length,
                    c = [],
                    u = [],
                    d = [];

                function h(e) {
                    return !t.cssMode || e !== a.length - 1
                }
                var f = t.slidesOffsetBefore;
                "function" == typeof f && (f = t.slidesOffsetBefore.call(this));
                var p = t.slidesOffsetAfter;
                "function" == typeof p && (p = t.slidesOffsetAfter.call(this));
                var v, m = this.snapGrid.length,
                    r = this.snapGrid.length,
                    g = t.spaceBetween,
                    y = -f,
                    b = 0,
                    w = 0;
                if (void 0 !== n) {
                    "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * n), this.virtualSize = -g, i ? a.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : a.css({
                        marginRight: "",
                        marginBottom: ""
                    }), 1 < t.slidesPerColumn && (v = Math.floor(l / t.slidesPerColumn) === l / this.params.slidesPerColumn ? l : Math.ceil(l / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (v = Math.max(v, t.slidesPerView * t.slidesPerColumn)));
                    for (var x, T, S, C, E = t.slidesPerColumn, k = v / E, L = Math.floor(l / t.slidesPerColumn), O = 0; O < l; O += 1) {
                        A = 0;
                        var z, P, M, _, $, A, D, j, N, I, R, H, q = a.eq(O);
                        1 < t.slidesPerColumn && ($ = _ = M = void 0, "row" === t.slidesPerColumnFill && 1 < t.slidesPerGroup ? (H = Math.floor(O / (t.slidesPerGroup * t.slidesPerColumn)), z = O - t.slidesPerColumn * t.slidesPerGroup * H, P = 0 === H ? t.slidesPerGroup : Math.min(Math.ceil((l - H * E * t.slidesPerGroup) / E), t.slidesPerGroup), M = (_ = z - ($ = Math.floor(z / P)) * P + H * t.slidesPerGroup) + $ * v / E, q.css({
                            "-webkit-box-ordinal-group": M,
                            "-moz-box-ordinal-group": M,
                            "-ms-flex-order": M,
                            "-webkit-order": M,
                            order: M
                        })) : "column" === t.slidesPerColumnFill ? ($ = O - (_ = Math.floor(O / E)) * E, (L < _ || _ === L && $ === E - 1) && ($ += 1) >= E && ($ = 0, _ += 1)) : _ = O - ($ = Math.floor(O / k)) * k, q.css("margin-".concat(this.isHorizontal() ? "top" : "left"), 0 !== $ && t.spaceBetween && "".concat(t.spaceBetween, "px"))), "none" !== q.css("display") && ("auto" === t.slidesPerView ? (H = it.getComputedStyle(q[0], null), M = q[0].style.transform, _ = q[0].style.webkitTransform, M && (q[0].style.transform = "none"), _ && (q[0].style.webkitTransform = "none"), A = t.roundLengths ? this.isHorizontal() ? q.outerWidth(!0) : q.outerHeight(!0) : this.isHorizontal() ? (D = parseFloat(H.getPropertyValue("width")), j = parseFloat(H.getPropertyValue("padding-left")), N = parseFloat(H.getPropertyValue("padding-right")), I = parseFloat(H.getPropertyValue("margin-left")), R = parseFloat(H.getPropertyValue("margin-right")), ($ = H.getPropertyValue("box-sizing")) && "border-box" === $ ? D + I + R : D + j + N + I + R) : (D = parseFloat(H.getPropertyValue("height")), j = parseFloat(H.getPropertyValue("padding-top")), N = parseFloat(H.getPropertyValue("padding-bottom")), I = parseFloat(H.getPropertyValue("margin-top")), R = parseFloat(H.getPropertyValue("margin-bottom")), (H = H.getPropertyValue("box-sizing")) && "border-box" === H ? D + I + R : D + j + N + I + R), M && (q[0].style.transform = M), _ && (q[0].style.webkitTransform = _), t.roundLengths && (A = Math.floor(A))) : (A = (n - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (A = Math.floor(A)), a[O] && (this.isHorizontal() ? a[O].style.width = "".concat(A, "px") : a[O].style.height = "".concat(A, "px"))), a[O] && (a[O].swiperSlideSize = A), d.push(A), t.centeredSlides ? (y = y + A / 2 + b / 2 + g, 0 === b && 0 !== O && (y = y - n / 2 - g), 0 === O && (y = y - n / 2 - g), Math.abs(y) < .001 && (y = 0), t.roundLengths && (y = Math.floor(y)), w % t.slidesPerGroup == 0 && c.push(y), u.push(y)) : (t.roundLengths && (y = Math.floor(y)), (w - Math.min(this.params.slidesPerGroupSkip, w)) % this.params.slidesPerGroup == 0 && c.push(y), u.push(y), y = y + A + g), this.virtualSize += A + g, b = A, w += 1)
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, n) + p, i && o && ("slide" === t.effect || "coverflow" === t.effect) && e.css({
                            width: "".concat(this.virtualSize + t.spaceBetween, "px")
                        }), t.setWrapperSize && (this.isHorizontal() ? e.css({
                            width: "".concat(this.virtualSize + t.spaceBetween, "px")
                        }) : e.css({
                            height: "".concat(this.virtualSize + t.spaceBetween, "px")
                        })), 1 < t.slidesPerColumn && (this.virtualSize = (A + t.spaceBetween) * v, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? e.css({
                            width: "".concat(this.virtualSize + t.spaceBetween, "px")
                        }) : e.css({
                            height: "".concat(this.virtualSize + t.spaceBetween, "px")
                        }), t.centeredSlides)) {
                        for (var B = [], F = 0; F < c.length; F += 1) {
                            var W = c[F];
                            t.roundLengths && (W = Math.floor(W)), c[F] < this.virtualSize + c[0] && B.push(W)
                        }
                        c = B
                    }
                    if (!t.centeredSlides) {
                        B = [];
                        for (var G = 0; G < c.length; G += 1) {
                            var V = c[G];
                            t.roundLengths && (V = Math.floor(V)), c[G] <= this.virtualSize - n && B.push(V)
                        }
                        c = B, 1 < Math.floor(this.virtualSize - n) - Math.floor(c[c.length - 1]) && c.push(this.virtualSize - n)
                    }
                    0 === c.length && (c = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? i ? a.filter(h).css({
                        marginLeft: "".concat(g, "px")
                    }) : a.filter(h).css({
                        marginRight: "".concat(g, "px")
                    }) : a.filter(h).css({
                        marginBottom: "".concat(g, "px")
                    })), t.centeredSlides && t.centeredSlidesBounds && (x = 0, d.forEach(function (e) {
                        x += e + (t.spaceBetween || 0)
                    }), T = (x -= t.spaceBetween) - n, c = c.map(function (e) {
                        return e < 0 ? -f : T < e ? T + p : e
                    })), t.centerInsufficientSlides && (S = 0, d.forEach(function (e) {
                        S += e + (t.spaceBetween || 0)
                    }), (S -= t.spaceBetween) < n && (C = (n - S) / 2, c.forEach(function (e, t) {
                        c[t] = e - C
                    }), u.forEach(function (e, t) {
                        u[t] = e + C
                    }))), gt.extend(this, {
                        slides: a,
                        snapGrid: c,
                        slidesGrid: u,
                        slidesSizesGrid: d
                    }), l !== s && this.emit("slidesLengthChange"), c.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== r && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            },
            updateAutoHeight: function (e) {
                var t, n, i = [],
                    o = 0;
                if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && 1 < this.params.slidesPerView)
                    if (this.params.centeredSlides) this.visibleSlides.each(function (e, t) {
                        i.push(t)
                    });
                    else
                        for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                            var r = this.activeIndex + t;
                            if (r > this.slides.length) break;
                            i.push(this.slides.eq(r)[0])
                        } else i.push(this.slides.eq(this.activeIndex)[0]);
                for (t = 0; t < i.length; t += 1) void 0 !== i[t] && (o = o < (n = i[t].offsetHeight) ? n : o);
                o && this.$wrapperEl.css("height", "".concat(o, "px"))
            },
            updateSlidesOffset: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0,
                    t = this,
                    n = t.params,
                    i = t.slides,
                    o = t.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    var r = o ? e : -e;
                    i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (var s = 0; s < i.length; s += 1) {
                        var a, l, c = i[s],
                            u = (r + (n.centeredSlides ? t.minTranslate() : 0) - c.swiperSlideOffset) / (c.swiperSlideSize + n.spaceBetween);
                        (n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) && (l = (a = -(r - c.swiperSlideOffset)) + t.slidesSizesGrid[s], (0 <= a && a < t.size - 1 || 1 < l && l <= t.size || a <= 0 && l >= t.size) && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(s), i.eq(s).addClass(n.slideVisibleClass))), c.progress = o ? -u : u
                    }
                    t.visibleSlides = rt(t.visibleSlides)
                }
            },
            updateProgress: function (e) {
                void 0 === e && (s = this.rtlTranslate ? -1 : 1, e = this && this.translate && this.translate * s || 0);
                var t = this.params,
                    n = this.maxTranslate() - this.minTranslate(),
                    i = this.progress,
                    o = this.isBeginning,
                    r = o,
                    s = a = this.isEnd,
                    a = 0 == n ? o = !(i = 0) : (o = (i = (e - this.minTranslate()) / n) <= 0, 1 <= i);
                gt.extend(this, {
                    progress: i,
                    isBeginning: o,
                    isEnd: a
                }), (t.watchSlidesProgress || t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), o && !r && this.emit("reachBeginning toEdge"), a && !s && this.emit("reachEnd toEdge"), (r && !o || s && !a) && this.emit("fromEdge"), this.emit("progress", i)
            },
            updateSlidesClasses: function () {
                var e = this.slides,
                    t = this.params,
                    n = this.$wrapperEl,
                    i = this.activeIndex,
                    o = this.realIndex,
                    r = this.virtual && t.virtual.enabled;
                e.removeClass("".concat(t.slideActiveClass, " ").concat(t.slideNextClass, " ").concat(t.slidePrevClass, " ").concat(t.slideDuplicateActiveClass, " ").concat(t.slideDuplicateNextClass, " ").concat(t.slideDuplicatePrevClass)), (i = r ? this.$wrapperEl.find(".".concat(t.slideClass, '[data-swiper-slide-index="').concat(i, '"]')) : e.eq(i)).addClass(t.slideActiveClass), t.loop && (i.hasClass(t.slideDuplicateClass) ? n.children(".".concat(t.slideClass, ":not(.").concat(t.slideDuplicateClass, ')[data-swiper-slide-index="').concat(o, '"]')) : n.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, '[data-swiper-slide-index="').concat(o, '"]'))).addClass(t.slideDuplicateActiveClass);
                o = i.nextAll(".".concat(t.slideClass)).eq(0).addClass(t.slideNextClass);
                t.loop && 0 === o.length && (o = e.eq(0)).addClass(t.slideNextClass);
                i = i.prevAll(".".concat(t.slideClass)).eq(0).addClass(t.slidePrevClass);
                t.loop && 0 === i.length && (i = e.eq(-1)).addClass(t.slidePrevClass), t.loop && ((o.hasClass(t.slideDuplicateClass) ? n.children(".".concat(t.slideClass, ":not(.").concat(t.slideDuplicateClass, ')[data-swiper-slide-index="').concat(o.attr("data-swiper-slide-index"), '"]')) : n.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, '[data-swiper-slide-index="').concat(o.attr("data-swiper-slide-index"), '"]'))).addClass(t.slideDuplicateNextClass), (i.hasClass(t.slideDuplicateClass) ? n.children(".".concat(t.slideClass, ":not(.").concat(t.slideDuplicateClass, ')[data-swiper-slide-index="').concat(i.attr("data-swiper-slide-index"), '"]')) : n.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, '[data-swiper-slide-index="').concat(i.attr("data-swiper-slide-index"), '"]'))).addClass(t.slideDuplicatePrevClass))
            },
            updateActiveIndex: function (e) {
                var t = this.rtlTranslate ? this.translate : -this.translate,
                    n = this.slidesGrid,
                    i = this.snapGrid,
                    o = this.params,
                    r = this.activeIndex,
                    s = this.realIndex,
                    a = this.snapIndex,
                    l = e;
                if (void 0 === l) {
                    for (var c = 0; c < n.length; c += 1) void 0 !== n[c + 1] ? t >= n[c] && t < n[c + 1] - (n[c + 1] - n[c]) / 2 ? l = c : t >= n[c] && t < n[c + 1] && (l = c + 1) : t >= n[c] && (l = c);
                    o.normalizeSlideIndex && (l < 0 || void 0 === l) && (l = 0)
                }(o = 0 <= i.indexOf(t) ? i.indexOf(t) : (e = Math.min(o.slidesPerGroupSkip, l)) + Math.floor((l - e) / o.slidesPerGroup)) >= i.length && (o = i.length - 1), l !== r ? (i = parseInt(this.slides.eq(l).attr("data-swiper-slide-index") || l, 10), gt.extend(this, {
                    snapIndex: o,
                    realIndex: i,
                    previousIndex: r,
                    activeIndex: l
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), s !== i && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")) : o !== a && (this.snapIndex = o, this.emit("snapIndexChange"))
            },
            updateClickedSlide: function (e) {
                var t = this.params,
                    n = rt(e.target).closest(".".concat(t.slideClass))[0],
                    i = !1;
                if (n)
                    for (var o = 0; o < this.slides.length; o += 1) this.slides[o] === n && (i = !0);
                if (!n || !i) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                this.clickedSlide = n, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(rt(n).attr("data-swiper-slide-index"), 10) : this.clickedIndex = rt(n).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
            }
        },
        St = {
            getTranslate: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y",
                    t = this.params,
                    n = this.rtlTranslate,
                    i = this.translate,
                    o = this.$wrapperEl;
                if (t.virtualTranslate) return n ? -i : i;
                if (t.cssMode) return i;
                e = gt.getTranslate(o[0], e);
                return (e = n ? -e : e) || 0
            },
            setTranslate: function (e, t) {
                var n = this.rtlTranslate,
                    i = this.params,
                    o = this.$wrapperEl,
                    r = this.wrapperEl,
                    s = this.progress,
                    a = 0,
                    l = 0;
                this.isHorizontal() ? a = n ? -e : e : l = e, i.roundLengths && (a = Math.floor(a), l = Math.floor(l)), i.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -a : -l : i.virtualTranslate || o.transform("translate3d(".concat(a, "px, ").concat(l, "px, ").concat(0, "px)")), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? a : l;
                l = this.maxTranslate() - this.minTranslate();
                (0 == l ? 0 : (e - this.minTranslate()) / l) !== s && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
            },
            minTranslate: function () {
                return -this.snapGrid[0]
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                    n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                    i = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                    o = 4 < arguments.length ? arguments[4] : void 0,
                    r = this,
                    s = r.params,
                    a = r.wrapperEl;
                if (r.animating && s.preventInteractionOnTransition) return !1;
                var l = r.minTranslate(),
                    c = r.maxTranslate(),
                    c = i && l < e ? l : i && e < c ? c : e;
                if (r.updateProgress(c), s.cssMode) {
                    e = r.isHorizontal();
                    return 0 !== t && a.scrollTo ? a.scrollTo((dt(s = {}, e ? "left" : "top", -c), dt(s, "behavior", "smooth"), s)) : a[e ? "scrollLeft" : "scrollTop"] = -c, !0
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(c), n && (r.emit("beforeTransitionStart", t, o), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), n && (r.emit("beforeTransitionStart", t, o), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, n && r.emit("transitionEnd"))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
            }
        },
        Ct = {
            slideTo: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                    n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                    i = 3 < arguments.length ? arguments[3] : void 0,
                    o = this,
                    r = e;
                r < 0 && (r = 0);
                var s = o.params,
                    a = o.snapGrid,
                    l = o.slidesGrid,
                    c = o.previousIndex,
                    u = o.activeIndex,
                    d = o.rtlTranslate,
                    h = o.wrapperEl;
                if (o.animating && s.preventInteractionOnTransition) return !1;
                e = Math.min(o.params.slidesPerGroupSkip, r), e += Math.floor((r - e) / o.params.slidesPerGroup);
                e >= a.length && (e = a.length - 1), (u || s.initialSlide || 0) === (c || 0) && n && o.emit("beforeSlideChangeStart");
                var f, p = -a[e];
                if (o.updateProgress(p), s.normalizeSlideIndex)
                    for (var v = 0; v < l.length; v += 1) - Math.floor(100 * p) >= Math.floor(100 * l[v]) && (r = v);
                if (o.initialized && r !== u) {
                    if (!o.allowSlideNext && p < o.translate && p < o.minTranslate()) return !1;
                    if (!o.allowSlidePrev && p > o.translate && p > o.maxTranslate() && (u || 0) !== r) return !1
                }
                if (f = u < r ? "next" : r < u ? "prev" : "reset", d && -p === o.translate || !d && p === o.translate) return o.updateActiveIndex(r), s.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== s.effect && o.setTranslate(p), "reset" != f && (o.transitionStart(n, f), o.transitionEnd(n, f)), !1;
                if (s.cssMode) {
                    u = o.isHorizontal(), s = -p;
                    return d && (s = h.scrollWidth - h.offsetWidth - s), 0 !== t && h.scrollTo ? h.scrollTo((dt(d = {}, u ? "left" : "top", s), dt(d, "behavior", "smooth"), d)) : h[u ? "scrollLeft" : "scrollTop"] = s, !0
                }
                return 0 === t ? (o.setTransition(0), o.setTranslate(p), o.updateActiveIndex(r), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, i), o.transitionStart(n, f), o.transitionEnd(n, f)) : (o.setTransition(t), o.setTranslate(p), o.updateActiveIndex(r), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, i), o.transitionStart(n, f), o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function (e) {
                    o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(n, f))
                }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd))), !0
            },
            slideToLoop: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                    e = e;
                return this.params.loop && (e += this.loopedSlides), this.slideTo(e, t, !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2], 3 < arguments.length ? arguments[3] : void 0)
            },
            slideNext: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                    t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                    n = 2 < arguments.length ? arguments[2] : void 0,
                    i = this.params,
                    o = this.animating,
                    r = this.activeIndex < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup;
                if (i.loop) {
                    if (o) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                return this.slideTo(this.activeIndex + r, e, t, n)
            },
            slidePrev: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                    t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                    n = 2 < arguments.length ? arguments[2] : void 0,
                    i = this,
                    o = i.params,
                    r = i.animating,
                    s = i.snapGrid,
                    a = i.slidesGrid,
                    l = i.rtlTranslate;
                if (o.loop) {
                    if (r) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }

                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var u, d = c(l ? i.translate : -i.translate),
                    l = s.map(c),
                    h = (a.map(c), s[l.indexOf(d)], s[l.indexOf(d) - 1]);
                return void 0 === h && o.cssMode && s.forEach(function (e) {
                    !h && e <= d && (h = e)
                }), void 0 !== h && (u = a.indexOf(h)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, n)
            },
            slideReset: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.params.speed;
                return this.slideTo(this.activeIndex, e, !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1], 2 < arguments.length ? arguments[2] : void 0)
            },
            slideToClosest: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                    t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                    n = 2 < arguments.length ? arguments[2] : void 0,
                    i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : .5,
                    o = this,
                    r = o.activeIndex,
                    s = Math.min(o.params.slidesPerGroupSkip, r),
                    a = s + Math.floor((r - s) / o.params.slidesPerGroup),
                    l = o.rtlTranslate ? o.translate : -o.translate;
                return l >= o.snapGrid[a] ? (s = o.snapGrid[a], (o.snapGrid[a + 1] - s) * i < l - s && (r += o.params.slidesPerGroup)) : l - (l = o.snapGrid[a - 1]) <= (o.snapGrid[a] - l) * i && (r -= o.params.slidesPerGroup), r = Math.max(r, 0), r = Math.min(r, o.slidesGrid.length - 1), o.slideTo(r, e, t, n)
            },
            slideToClickedSlide: function () {
                var e, t = this,
                    n = t.params,
                    i = t.$wrapperEl,
                    o = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
                    r = t.clickedIndex;
                n.loop ? t.animating || (e = parseInt(rt(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? r < t.loopedSlides - o / 2 || r > t.slides.length - t.loopedSlides + o / 2 ? (t.loopFix(), r = i.children(".".concat(n.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(n.slideDuplicateClass, ")")).eq(0).index(), gt.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - o ? (t.loopFix(), r = i.children(".".concat(n.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(n.slideDuplicateClass, ")")).eq(0).index(), gt.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r)) : t.slideTo(r)
            }
        },
        Et = {
            loopCreate: function () {
                var i = this,
                    e = i.params,
                    t = i.$wrapperEl;
                t.children(".".concat(e.slideClass, ".").concat(e.slideDuplicateClass)).remove();
                var o = t.children(".".concat(e.slideClass));
                if (e.loopFillGroupWithBlank) {
                    var n = e.slidesPerGroup - o.length % e.slidesPerGroup;
                    if (n !== e.slidesPerGroup) {
                        for (var r = 0; r < n; r += 1) {
                            var s = rt(tt.createElement("div")).addClass("".concat(e.slideClass, " ").concat(e.slideBlankClass));
                            t.append(s)
                        }
                        o = t.children(".".concat(e.slideClass))
                    }
                }
                "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = o.length), i.loopedSlides = Math.ceil(parseFloat(e.loopedSlides || e.slidesPerView, 10)), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > o.length && (i.loopedSlides = o.length);
                var a = [],
                    l = [];
                o.each(function (e, t) {
                    var n = rt(t);
                    e < i.loopedSlides && l.push(t), e < o.length && e >= o.length - i.loopedSlides && a.push(t), n.attr("data-swiper-slide-index", e)
                });
                for (var c = 0; c < l.length; c += 1) t.append(rt(l[c].cloneNode(!0)).addClass(e.slideDuplicateClass));
                for (var u = a.length - 1; 0 <= u; --u) t.prepend(rt(a[u].cloneNode(!0)).addClass(e.slideDuplicateClass))
            },
            loopFix: function () {
                this.emit("beforeLoopFix");
                var e, t = this.activeIndex,
                    n = this.slides,
                    i = this.loopedSlides,
                    o = this.allowSlidePrev,
                    r = this.allowSlideNext,
                    s = this.snapGrid,
                    a = this.rtlTranslate;
                this.allowSlidePrev = !0, this.allowSlideNext = !0;
                s = -s[t] - this.getTranslate();
                t < i ? (e = n.length - 3 * i + t, this.slideTo(e += i, 0, !1, !0) && 0 != s && this.setTranslate((a ? -this.translate : this.translate) - s)) : t >= n.length - i && (e = -n.length + t + i, this.slideTo(e += i, 0, !1, !0) && 0 != s && this.setTranslate((a ? -this.translate : this.translate) - s)), this.allowSlidePrev = o, this.allowSlideNext = r, this.emit("loopFix")
            },
            loopDestroy: function () {
                var e = this.$wrapperEl,
                    t = this.params,
                    n = this.slides;
                e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), n.removeAttr("data-swiper-slide-index")
            }
        },
        kt = {
            setGrabCursor: function (e) {
                var t;
                yt.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode || ((t = this.el).style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab")
            },
            unsetGrabCursor: function () {
                yt.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
            }
        },
        Lt = {
            appendSlide: function (e) {
                var t = this.$wrapperEl,
                    n = this.params;
                if (n.loop && this.loopDestroy(), "object" === vt(e) && "length" in e)
                    for (var i = 0; i < e.length; i += 1) e[i] && t.append(e[i]);
                else t.append(e);
                n.loop && this.loopCreate(), n.observer && yt.observer || this.update()
            },
            prependSlide: function (e) {
                var t = this.params,
                    n = this.$wrapperEl,
                    i = this.activeIndex;
                t.loop && this.loopDestroy();
                var o = i + 1;
                if ("object" === vt(e) && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) e[r] && n.prepend(e[r]);
                    o = i + e.length
                } else n.prepend(e);
                t.loop && this.loopCreate(), t.observer && yt.observer || this.update(), this.slideTo(o, 0, !1)
            },
            addSlide: function (e, t) {
                var n = this.$wrapperEl,
                    i = this.params,
                    o = this.activeIndex;
                i.loop && (o -= this.loopedSlides, this.loopDestroy(), this.slides = n.children(".".concat(i.slideClass)));
                var r = this.slides.length;
                if (e <= 0) this.prependSlide(t);
                else if (r <= e) this.appendSlide(t);
                else {
                    for (var s = e < o ? o + 1 : o, a = [], l = r - 1; e <= l; --l) {
                        var c = this.slides.eq(l);
                        c.remove(), a.unshift(c)
                    }
                    if ("object" === vt(t) && "length" in t) {
                        for (var u = 0; u < t.length; u += 1) t[u] && n.append(t[u]);
                        s = e < o ? o + t.length : o
                    } else n.append(t);
                    for (var d = 0; d < a.length; d += 1) n.append(a[d]);
                    i.loop && this.loopCreate(), i.observer && yt.observer || this.update(), i.loop ? this.slideTo(s + this.loopedSlides, 0, !1) : this.slideTo(s, 0, !1)
                }
            },
            removeSlide: function (e) {
                var t = this.params,
                    n = this.$wrapperEl,
                    i = this.activeIndex;
                t.loop && (i -= this.loopedSlides, this.loopDestroy(), this.slides = n.children(".".concat(t.slideClass)));
                var o, r = i;
                if ("object" === vt(e) && "length" in e) {
                    for (var s = 0; s < e.length; s += 1) o = e[s], this.slides[o] && this.slides.eq(o).remove(), o < r && --r;
                    r = Math.max(r, 0)
                } else this.slides[o = e] && this.slides.eq(o).remove(), o < r && --r, r = Math.max(r, 0);
                t.loop && this.loopCreate(), t.observer && yt.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
            },
            removeAllSlides: function () {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        Ot = (t = it.navigator.platform, s = it.navigator.userAgent, n = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!it.cordova && !it.phonegap),
            phonegap: !(!it.cordova && !it.phonegap),
            electron: !1
        }, xt = it.screen.width, w = it.screen.height, $ = s.match(/(Android);?[\s\/]+([\d.]+)?/), le = s.match(/(iPad).*OS\s([\d_]+)/), pe = s.match(/(iPod)(.*OS\s([\d_]+))?/), we = !le && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), _e = 0 <= s.indexOf("MSIE ") || 0 <= s.indexOf("Trident/"), Ie = 0 <= s.indexOf("Edge/"), We = 0 <= s.indexOf("Gecko/") && 0 <= s.indexOf("Firefox/"), Qe = "Win32" === t, nt = 0 <= s.toLowerCase().indexOf("electron"), t = "MacIntel" === t, !le && t && yt.touch && (1024 === xt && 1366 === w || 834 === xt && 1194 === w || 834 === xt && 1112 === w || 768 === xt && 1024 === w) && (le = s.match(/(Version)\/([\d.]+)/), t = !1), n.ie = _e, n.edge = Ie, n.firefox = We, $ && !Qe && (n.os = "android", n.osVersion = $[2], n.android = !0, n.androidChrome = 0 <= s.toLowerCase().indexOf("chrome")), (le || we || pe) && (n.os = "ios", n.ios = !0), we && !pe && (n.osVersion = we[2].replace(/_/g, "."), n.iphone = !0), le && (n.osVersion = le[2].replace(/_/g, "."), n.ipad = !0), pe && (n.osVersion = pe[3] ? pe[3].replace(/_/g, ".") : null, n.ipod = !0), n.ios && n.osVersion && 0 <= s.indexOf("Version/") && "10" === n.osVersion.split(".")[0] && (n.osVersion = s.toLowerCase().split("version/")[1].split(" ")[0]), n.webView = !(!(we || le || pe) || !s.match(/.*AppleWebKit(?!.*Safari)/i) && !it.navigator.standalone) || it.matchMedia && it.matchMedia("(display-mode: standalone)").matches, n.webview = n.webView, n.standalone = n.webView, n.desktop = !(n.ios || n.android) || nt, n.desktop && (n.electron = nt, n.macos = t, n.windows = Qe, n.macos && (n.os = "macos"), n.windows && (n.os = "windows")), n.pixelRatio = it.devicePixelRatio || 1, n);

    function zt() {
        var e, t, n = this.params,
            i = this.el;
        i && 0 === i.offsetWidth || (n.breakpoints && this.setBreakpoint(), e = this.allowSlideNext, t = this.allowSlidePrev, i = this.snapGrid, this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === n.slidesPerView || 1 < n.slidesPerView) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = t, this.allowSlideNext = e, this.params.watchOverflow && i !== this.snapGrid && this.checkOverflow())
    }
    var Pt = !1;

    function Mt() {}
    var _t = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        $t = {
            update: Tt,
            translate: St,
            transition: {
                setTransition: function (e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function () {
                    var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                        t = 1 < arguments.length ? arguments[1] : void 0,
                        n = this.activeIndex,
                        i = this.params,
                        o = this.previousIndex;
                    i.cssMode || (i.autoHeight && this.updateAutoHeight(), t = (t = t) || (o < n ? "next" : n < o ? "prev" : "reset"), this.emit("transitionStart"), e && n !== o && ("reset" !== t ? (this.emit("slideChangeTransitionStart"), "next" === t ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")) : this.emit("slideResetTransitionStart")))
                },
                transitionEnd: function () {
                    var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                        t = 1 < arguments.length ? arguments[1] : void 0,
                        n = this,
                        i = n.activeIndex,
                        o = n.previousIndex,
                        r = n.params;
                    n.animating = !1, r.cssMode || (n.setTransition(0), t = (t = t) || (o < i ? "next" : i < o ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== o && ("reset" !== t ? (n.emit("slideChangeTransitionEnd"), "next" === t ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")) : n.emit("slideResetTransitionEnd")))
                }
            },
            slide: Ct,
            loop: Et,
            grabCursor: kt,
            manipulation: Lt,
            events: {
                attachEvents: function () {
                    var e = this.params,
                        t = this.touchEvents,
                        n = this.el,
                        i = this.wrapperEl;
                    this.onTouchStart = function (e) {
                        var t, n, i, o, r, s = this.touchEventsData,
                            a = this.params,
                            l = this.touches;
                        this.animating && a.preventInteractionOnTransition || (n = rt((t = (t = e).originalEvent ? t.originalEvent : t).target), "wrapper" === a.touchEventsTarget && !n.closest(this.wrapperEl).length || (s.isTouchEvent = "touchstart" === t.type, !s.isTouchEvent && "which" in t && 3 === t.which || !s.isTouchEvent && "button" in t && 0 < t.button || s.isTouched && s.isMoved) || (a.noSwiping && n.closest(a.noSwipingSelector || ".".concat(a.noSwipingClass))[0] ? this.allowClick = !0 : a.swipeHandler && !n.closest(a.swipeHandler)[0] || (l.currentX = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX, l.currentY = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY, i = l.currentX, r = l.currentY, o = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection, e = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold, o && (i <= e || i >= it.screen.width - e) || (gt.extend(s, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), l.startX = i, l.startY = r, s.touchStartTime = gt.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, 0 < a.threshold && (s.allowThresholdMove = !1), "touchstart" !== t.type && (r = !0, n.is(s.formElements) && (r = !1), tt.activeElement && rt(tt.activeElement).is(s.formElements) && tt.activeElement !== n[0] && tt.activeElement.blur(), r = r && this.allowTouchMove && a.touchStartPreventDefault, (a.touchStartForcePreventDefault || r) && t.preventDefault()), this.emit("touchStart", t)))))
                    }.bind(this), this.onTouchMove = function (e) {
                        var t = this.touchEventsData,
                            n = this.params,
                            i = this.touches,
                            o = this.rtlTranslate,
                            r = e;
                        if (r.originalEvent && (r = r.originalEvent), t.isTouched) {
                            if (!t.isTouchEvent || "touchmove" === r.type) {
                                var s = "touchmove" === r.type && r.targetTouches && (r.targetTouches[0] || r.changedTouches[0]),
                                    a = ("touchmove" === r.type ? s : r).pageX,
                                    e = ("touchmove" === r.type ? s : r).pageY;
                                if (r.preventedByNestedSwiper) return i.startX = a, void(i.startY = e);
                                if (!this.allowTouchMove) return this.allowClick = !1, void(t.isTouched && (gt.extend(i, {
                                    startX: a,
                                    startY: e,
                                    currentX: a,
                                    currentY: e
                                }), t.touchStartTime = gt.now()));
                                if (t.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                                    if (this.isVertical()) {
                                        if (e < i.startY && this.translate <= this.maxTranslate() || e > i.startY && this.translate >= this.minTranslate()) return t.isTouched = !1, void(t.isMoved = !1)
                                    } else if (a < i.startX && this.translate <= this.maxTranslate() || a > i.startX && this.translate >= this.minTranslate()) return;
                                if (t.isTouchEvent && tt.activeElement && r.target === tt.activeElement && rt(r.target).is(t.formElements)) return t.isMoved = !0, void(this.allowClick = !1);
                                if (t.allowTouchCallbacks && this.emit("touchMove", r), !(r.targetTouches && 1 < r.targetTouches.length)) {
                                    i.currentX = a, i.currentY = e;
                                    s = i.currentX - i.startX, a = i.currentY - i.startY;
                                    if (!(this.params.threshold && Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2)) < this.params.threshold))
                                        if (void 0 === t.isScrolling && (this.isHorizontal() && i.currentY === i.startY || this.isVertical() && i.currentX === i.startX ? t.isScrolling = !1 : 25 <= s * s + a * a && (e = 180 * Math.atan2(Math.abs(a), Math.abs(s)) / Math.PI, t.isScrolling = this.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)), t.isScrolling && this.emit("touchMoveOpposite", r), void 0 === t.startMoving && (i.currentX === i.startX && i.currentY === i.startY || (t.startMoving = !0)), t.isScrolling) t.isTouched = !1;
                                        else if (t.startMoving) {
                                        this.allowClick = !1, !n.cssMode && r.cancelable && r.preventDefault(), n.touchMoveStopPropagation && !n.nested && r.stopPropagation(), t.isMoved || (n.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !n.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", r)), this.emit("sliderMove", r), t.isMoved = !0;
                                        s = this.isHorizontal() ? s : a;
                                        i.diff = s, s *= n.touchRatio, this.swipeDirection = 0 < (s = o ? -s : s) ? "prev" : "next", t.currentTranslate = s + t.startTranslate;
                                        a = !0, o = n.resistanceRatio;
                                        if (n.touchReleaseOnEdges && (o = 0), 0 < s && t.currentTranslate > this.minTranslate() ? (a = !1, n.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + s, o))) : s < 0 && t.currentTranslate < this.maxTranslate() && (a = !1, n.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - s, o))), a && (r.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), 0 < n.threshold) {
                                            if (!(Math.abs(s) > n.threshold || t.allowThresholdMove)) return void(t.currentTranslate = t.startTranslate);
                                            if (!t.allowThresholdMove) return t.allowThresholdMove = !0, i.startX = i.currentX, i.startY = i.currentY, t.currentTranslate = t.startTranslate, void(i.diff = this.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY)
                                        }
                                        n.followFinger && !n.cssMode && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), n.freeMode && (0 === t.velocities.length && t.velocities.push({
                                            position: i[this.isHorizontal() ? "startX" : "startY"],
                                            time: t.touchStartTime
                                        }), t.velocities.push({
                                            position: i[this.isHorizontal() ? "currentX" : "currentY"],
                                            time: gt.now()
                                        })), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate))
                                    }
                                }
                            }
                        } else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", r)
                    }.bind(this), this.onTouchEnd = function (e) {
                        var t = this,
                            n = t.touchEventsData,
                            i = t.params,
                            o = t.touches,
                            r = t.rtlTranslate,
                            s = t.$wrapperEl,
                            a = t.slidesGrid,
                            l = t.snapGrid,
                            c = e;
                        if (c.originalEvent && (c = c.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", c), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
                        i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        var u, d = gt.now(),
                            e = d - n.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap click", c), e < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)), n.lastClickTime = gt.now(), gt.nextTick(function () {
                                t.destroyed || (t.allowClick = !0)
                            }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === o.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
                        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = i.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate, !i.cssMode)
                            if (i.freeMode)
                                if (u < -t.minTranslate()) t.slideTo(t.activeIndex);
                                else if (u > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                        else {
                            if (i.freeModeMomentum) {
                                1 < n.velocities.length ? (g = n.velocities.pop(), f = n.velocities.pop(), h = g.position - f.position, f = g.time - f.time, t.velocity = h / f, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < f || 300 < gt.now() - g.time) && (t.velocity = 0)) : t.velocity = 0, t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
                                var h = 1e3 * i.freeModeMomentumRatio,
                                    f = t.velocity * h,
                                    p = t.translate + f;
                                r && (p = -p);
                                var v, m, g = !1,
                                    f = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                if (p < t.maxTranslate()) i.freeModeMomentumBounce ? (p + t.maxTranslate() < -f && (p = t.maxTranslate() - f), v = t.maxTranslate(), n.allowMomentumBounce = g = !0) : p = t.maxTranslate(), i.loop && i.centeredSlides && (m = !0);
                                else if (p > t.minTranslate()) i.freeModeMomentumBounce ? (p - t.minTranslate() > f && (p = t.minTranslate() + f), v = t.minTranslate(), n.allowMomentumBounce = g = !0) : p = t.minTranslate(), i.loop && i.centeredSlides && (m = !0);
                                else if (i.freeModeSticky) {
                                    for (var y, b = 0; b < l.length; b += 1)
                                        if (l[b] > -p) {
                                            y = b;
                                            break
                                        } p = -(Math.abs(l[y] - p) < Math.abs(l[y - 1] - p) || "next" === t.swipeDirection ? l[y] : l[y - 1])
                                }
                                if (m && t.once("transitionEnd", function () {
                                        t.loopFix()
                                    }), 0 !== t.velocity) h = r ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), i.freeModeSticky && (h = (m = Math.abs((r ? -p : p) - t.translate)) < (r = t.slidesSizesGrid[t.activeIndex]) ? i.speed : m < 2 * r ? 1.5 * i.speed : 2.5 * i.speed);
                                else if (i.freeModeSticky) return void t.slideToClosest();
                                i.freeModeMomentumBounce && g ? (t.updateProgress(v), t.setTransition(h), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function () {
                                    t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(function () {
                                        t.setTranslate(v), s.transitionEnd(function () {
                                            t && !t.destroyed && t.transitionEnd()
                                        })
                                    }, 0))
                                })) : t.velocity ? (t.updateProgress(p), t.setTransition(h), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function () {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (i.freeModeSticky) return void t.slideToClosest();
                            (!i.freeModeMomentum || e >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        } else {
                            for (var w = 0, x = t.slidesSizesGrid[0], T = 0; T < a.length; T += T < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                                var S = T < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                                void 0 !== a[T + S] ? u >= a[T] && u < a[T + S] && (x = a[(w = T) + S] - a[T]) : u >= a[T] && (w = T, x = a[a.length - 1] - a[a.length - 2])
                            }
                            g = (u - a[w]) / x, h = w < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                            e > i.longSwipesMs ? i.longSwipes ? ("next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(w + h) : t.slideTo(w)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(w + h) : t.slideTo(w))) : t.slideTo(t.activeIndex) : i.shortSwipes ? !t.navigation || c.target !== t.navigation.nextEl && c.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(w + h), "prev" === t.swipeDirection && t.slideTo(w)) : c.target === t.navigation.nextEl ? t.slideTo(w + h) : t.slideTo(w) : t.slideTo(t.activeIndex)
                        }
                    }.bind(this), e.cssMode && (this.onScroll = function () {
                        var e = this.wrapperEl,
                            t = this.rtlTranslate;
                        this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses(), (0 == (e = this.maxTranslate() - this.minTranslate()) ? 0 : (this.translate - this.minTranslate()) / e) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
                    }.bind(this)), this.onClick = function (e) {
                        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(this);
                    var o, r = !!e.nested;
                    !yt.touch && yt.pointerEvents ? (n.addEventListener(t.start, this.onTouchStart, !1), tt.addEventListener(t.move, this.onTouchMove, r), tt.addEventListener(t.end, this.onTouchEnd, !1)) : (yt.touch && (o = !("touchstart" !== t.start || !yt.passiveListener || !e.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, n.addEventListener(t.start, this.onTouchStart, o), n.addEventListener(t.move, this.onTouchMove, yt.passiveListener ? {
                        passive: !1,
                        capture: r
                    } : r), n.addEventListener(t.end, this.onTouchEnd, o), t.cancel && n.addEventListener(t.cancel, this.onTouchEnd, o), Pt || (tt.addEventListener("touchstart", Mt), Pt = !0)), (e.simulateTouch && !Ot.ios && !Ot.android || e.simulateTouch && !yt.touch && Ot.ios) && (n.addEventListener("mousedown", this.onTouchStart, !1), tt.addEventListener("mousemove", this.onTouchMove, r), tt.addEventListener("mouseup", this.onTouchEnd, !1))), (e.preventClicks || e.preventClicksPropagation) && n.addEventListener("click", this.onClick, !0), e.cssMode && i.addEventListener("scroll", this.onScroll), e.updateOnWindowResize ? this.on(Ot.ios || Ot.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", zt, !0) : this.on("observerUpdate", zt, !0)
                },
                detachEvents: function () {
                    var e, t = this.params,
                        n = this.touchEvents,
                        i = this.el,
                        o = this.wrapperEl,
                        r = !!t.nested;
                    !yt.touch && yt.pointerEvents ? (i.removeEventListener(n.start, this.onTouchStart, !1), tt.removeEventListener(n.move, this.onTouchMove, r), tt.removeEventListener(n.end, this.onTouchEnd, !1)) : (yt.touch && (e = !("onTouchStart" !== n.start || !yt.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, i.removeEventListener(n.start, this.onTouchStart, e), i.removeEventListener(n.move, this.onTouchMove, r), i.removeEventListener(n.end, this.onTouchEnd, e), n.cancel && i.removeEventListener(n.cancel, this.onTouchEnd, e)), (t.simulateTouch && !Ot.ios && !Ot.android || t.simulateTouch && !yt.touch && Ot.ios) && (i.removeEventListener("mousedown", this.onTouchStart, !1), tt.removeEventListener("mousemove", this.onTouchMove, r), tt.removeEventListener("mouseup", this.onTouchEnd, !1))), (t.preventClicks || t.preventClicksPropagation) && i.removeEventListener("click", this.onClick, !0), t.cssMode && o.removeEventListener("scroll", this.onScroll), this.off(Ot.ios || Ot.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", zt)
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e, n, t, i = this.activeIndex,
                        o = this.initialized,
                        r = this.loopedSlides,
                        s = void 0 === r ? 0 : r,
                        a = this.params,
                        l = this.$el,
                        c = a.breakpoints;
                    c && 0 !== Object.keys(c).length && (e = this.getBreakpoint(c)) && this.currentBreakpoint !== e && ((n = e in c ? c[e] : void 0) && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                        var t = n[e];
                        void 0 !== t && (n[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    }), t = n || this.originalParams, r = 1 < a.slidesPerColumn, c = 1 < t.slidesPerColumn, r && !c ? l.removeClass("".concat(a.containerModifierClass, "multirow ").concat(a.containerModifierClass, "multirow-column")) : !r && c && (l.addClass("".concat(a.containerModifierClass, "multirow")), "column" === t.slidesPerColumnFill && l.addClass("".concat(a.containerModifierClass, "multirow-column"))), l = t.direction && t.direction !== a.direction, a = a.loop && (t.slidesPerView !== a.slidesPerView || l), l && o && this.changeDirection(), gt.extend(this.params, t), gt.extend(this, {
                        allowTouchMove: this.params.allowTouchMove,
                        allowSlideNext: this.params.allowSlideNext,
                        allowSlidePrev: this.params.allowSlidePrev
                    }), this.currentBreakpoint = e, a && o && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(i - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", t))
                },
                getBreakpoint: function (e) {
                    if (e) {
                        var t = !1,
                            n = Object.keys(e).map(function (e) {
                                if ("string" != typeof e || 0 !== e.indexOf("@")) return {
                                    value: e,
                                    point: e
                                };
                                var t = parseFloat(e.substr(1));
                                return {
                                    value: it.innerHeight * t,
                                    point: e
                                }
                            });
                        n.sort(function (e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        });
                        for (var i = 0; i < n.length; i += 1) {
                            var o = n[i],
                                r = o.point;
                            o.value <= it.innerWidth && (t = r)
                        }
                        return t || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    var e = this.params,
                        t = this.isLocked,
                        n = 0 < this.slides.length && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && n ? this.isLocked = n <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var t = this.classNames,
                        n = this.params,
                        e = this.rtl,
                        i = this.$el,
                        o = [];
                    o.push("initialized"), o.push(n.direction), n.freeMode && o.push("free-mode"), n.autoHeight && o.push("autoheight"), e && o.push("rtl"), 1 < n.slidesPerColumn && (o.push("multirow"), "column" === n.slidesPerColumnFill && o.push("multirow-column")), Ot.android && o.push("android"), Ot.ios && o.push("ios"), n.cssMode && o.push("css-mode"), o.forEach(function (e) {
                        t.push(n.containerModifierClass + e)
                    }), i.addClass(t.join(" "))
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function (e, t, n, i, o, r) {
                    function s() {
                        r && r()
                    }!(rt(e).parent("picture")[0] || e.complete && o) && t ? ((o = new it.Image).onload = s, o.onerror = s, i && (o.sizes = i), n && (o.srcset = n), t && (o.src = t)) : s()
                },
                preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                        var i = e.imagesToLoad[n];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        At = {},
        Dt = function () {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), at(e, t)
            }(h, bt);
            var n, i, d = (n = h, i = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                    return !1
                }
            }(), function () {
                var e, t = ut(n);
                return lt(this, i ? (e = ut(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
            });

            function h() {
                var e, n;
                ht(this, h);
                for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                n = (n = 1 === i.length && i[0].constructor && i[0].constructor === Object ? i[0] : (l = i[0], i[1])) || {}, n = gt.extend({}, n), l && !n.el && (n.el = l), e = d.call(this, n), Object.keys($t).forEach(function (t) {
                    Object.keys($t[t]).forEach(function (e) {
                        h.prototype[e] || (h.prototype[e] = $t[t][e])
                    })
                });
                var r = ct(e);
                void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
                    var t = r.modules[e];
                    t.params && (e = Object.keys(t.params)[0], "object" === vt(t = t.params[e]) && null !== t && e in n && "enabled" in t && (!0 === n[e] && (n[e] = {
                        enabled: !0
                    }), "object" !== vt(n[e]) || "enabled" in n[e] || (n[e].enabled = !0), n[e] || (n[e] = {
                        enabled: !1
                    })))
                });
                var s = gt.extend({}, _t);
                r.useModulesParams(s), r.params = gt.extend({}, s, At, n), r.originalParams = gt.extend({}, r.params), r.passedParams = gt.extend({}, n);
                var a, l, c = (r.$ = rt)(r.params.el);
                if (!(l = c[0])) return lt(e, void 0);
                if (1 < c.length) {
                    var u = [];
                    return c.each(function (e, t) {
                        t = gt.extend({}, n, {
                            el: t
                        });
                        u.push(new h(t))
                    }), lt(e, u)
                }
                return l.swiper = r, c.data("swiper", r), l && l.shadowRoot && l.shadowRoot.querySelector ? (a = rt(l.shadowRoot.querySelector(".".concat(r.params.wrapperClass)))).children = function (e) {
                    return c.children(e)
                } : a = c.children(".".concat(r.params.wrapperClass)), gt.extend(r, {
                    $el: c,
                    el: l,
                    $wrapperEl: a,
                    wrapperEl: a[0],
                    classNames: [],
                    slides: rt(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function () {
                        return "horizontal" === r.params.direction
                    },
                    isVertical: function () {
                        return "vertical" === r.params.direction
                    },
                    rtl: "rtl" === l.dir.toLowerCase() || "rtl" === c.css("direction"),
                    rtlTranslate: "horizontal" === r.params.direction && ("rtl" === l.dir.toLowerCase() || "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === a.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: r.params.allowSlideNext,
                    allowSlidePrev: r.params.allowSlidePrev,
                    touchEvents: (l = yt.pointerEvents ? ["pointerdown", "pointermove", "pointerup"] : ["mousedown", "mousemove", "mouseup"], r.touchEventsTouch = {
                        start: (a = ["touchstart", "touchmove", "touchend", "touchcancel"])[0],
                        move: a[1],
                        end: a[2],
                        cancel: a[3]
                    }, r.touchEventsDesktop = {
                        start: l[0],
                        move: l[1],
                        end: l[2]
                    }, yt.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video, label",
                        lastClickTime: gt.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: r.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), r.useModules(), r.params.init && r.init(), lt(e, r)
            }
            return pt(h, [{
                key: "slidesPerViewDynamic",
                value: function () {
                    var e = this.params,
                        t = this.slides,
                        n = this.slidesGrid,
                        i = this.size,
                        o = this.activeIndex,
                        r = 1;
                    if (e.centeredSlides) {
                        for (var s, a = t[o].swiperSlideSize, l = o + 1; l < t.length; l += 1) t[l] && !s && (r += 1, (a += t[l].swiperSlideSize) > i && (s = !0));
                        for (var c = o - 1; 0 <= c; --c) t[c] && !s && (r += 1, (a += t[c].swiperSlideSize) > i && (s = !0))
                    } else
                        for (var u = o + 1; u < t.length; u += 1) n[u] - n[o] < i && (r += 1);
                    return r
                }
            }, {
                key: "update",
                value: function () {
                    var e, t, n = this;

                    function i() {
                        var e = n.rtlTranslate ? -1 * n.translate : n.translate,
                            e = Math.min(Math.max(e, n.maxTranslate()), n.minTranslate());
                        n.setTranslate(e), n.updateActiveIndex(), n.updateSlidesClasses()
                    }
                    n && !n.destroyed && (e = n.snapGrid, (t = n.params).breakpoints && n.setBreakpoint(), n.updateSize(), n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.params.freeMode ? (i(), n.params.autoHeight && n.updateAutoHeight()) : (("auto" === n.params.slidesPerView || 1 < n.params.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== n.snapGrid && n.checkOverflow(), n.emit("update"))
                }
            }, {
                key: "changeDirection",
                value: function (n) {
                    var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        t = this.params.direction;
                    return (n = n || ("horizontal" === t ? "vertical" : "horizontal")) === t || "horizontal" !== n && "vertical" !== n || (this.$el.removeClass("".concat(this.params.containerModifierClass).concat(t)).addClass("".concat(this.params.containerModifierClass).concat(n)), this.params.direction = n, this.slides.each(function (e, t) {
                        "vertical" === n ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), e && this.update()), this
                }
            }, {
                key: "init",
                value: function () {
                    this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
                }
            }, {
                key: "destroy",
                value: function () {
                    var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                        t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        n = this,
                        i = n.params,
                        o = n.$el,
                        r = n.$wrapperEl,
                        s = n.slides;
                    return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), o.removeAttr("style"), r.removeAttr("style"), s && s.length && s.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function (e) {
                        n.off(e)
                    }), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), gt.deleteProps(n)), n.destroyed = !0), null
                }
            }], [{
                key: "extendDefaults",
                value: function (e) {
                    gt.extend(At, e)
                }
            }, {
                key: "extendedDefaults",
                get: function () {
                    return At
                }
            }, {
                key: "defaults",
                get: function () {
                    return _t
                }
            }, {
                key: "Class",
                get: function () {
                    return bt
                }
            }, {
                key: "$",
                get: function () {
                    return rt
                }
            }]), h
        }(),
        St = {
            name: "device",
            proto: {
                device: Ot
            },
            static: {
                device: Ot
            }
        },
        Ct = {
            name: "support",
            proto: {
                support: yt
            },
            static: {
                support: yt
            }
        },
        kt = {
            isEdge: !!it.navigator.userAgent.match(/Edge/g),
            isSafari: 0 <= (Et = it.navigator.userAgent.toLowerCase()).indexOf("safari") && Et.indexOf("chrome") < 0 && Et.indexOf("android") < 0,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(it.navigator.userAgent)
        },
        Lt = {
            name: "browser",
            proto: {
                browser: kt
            },
            static: {
                browser: kt
            }
        },
        Et = {
            name: "resize",
            create: function () {
                var e = this;
                gt.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function () {
                    it.addEventListener("resize", this.resize.resizeHandler), it.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function () {
                    it.removeEventListener("resize", this.resize.resizeHandler), it.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        jt = {
            func: it.MutationObserver || it.WebkitMutationObserver,
            attach: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = this,
                    i = new jt.func(function (e) {
                        var t;
                        1 !== e.length ? (t = function () {
                            n.emit("observerUpdate", e[0])
                        }, it.requestAnimationFrame ? it.requestAnimationFrame(t) : it.setTimeout(t, 0)) : n.emit("observerUpdate", e[0])
                    });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), n.observer.observers.push(i)
            },
            init: function () {
                if (yt.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        kt = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function () {
                gt.extend(this, {
                    observer: {
                        init: jt.init.bind(this),
                        attach: jt.attach.bind(this),
                        destroy: jt.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function () {
                    this.observer.init()
                },
                destroy: function () {
                    this.observer.destroy()
                }
            }
        },
        Nt = {
            lastScrollTime: gt.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function () {
                return -1 < it.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : ((t = "onwheel" in tt) || ((e = tt.createElement("div")).setAttribute("onwheel", "return;"), t = "function" == typeof e.onwheel), (t = !t && tt.implementation && tt.implementation.hasFeature && !0 !== tt.implementation.hasFeature("", "") ? tt.implementation.hasFeature("Events.wheel", "3.0") : t) ? "wheel" : "mousewheel");
                var e, t
            },
            normalize: function (e) {
                var t = 0,
                    n = 0,
                    i = 0,
                    o = 0;
                return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, o = 10 * n, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = o, o = 0), (i || o) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, o *= 40) : (i *= 800, o *= 800)), {
                    spinX: t = i && !t ? i < 1 ? -1 : 1 : t,
                    spinY: n = o && !n ? o < 1 ? -1 : 1 : n,
                    pixelX: i,
                    pixelY: o
                }
            },
            handleMouseEnter: function () {
                this.mouseEntered = !0
            },
            handleMouseLeave: function () {
                this.mouseEntered = !1
            },
            handle: function (e) {
                var t = e,
                    n = this,
                    i = n.params.mousewheel;
                n.params.cssMode && t.preventDefault();
                var o = n.$el;
                if ("container" !== n.params.mousewheel.eventsTarged && (o = rt(n.params.mousewheel.eventsTarged)), !n.mouseEntered && !o[0].contains(t.target) && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var r = 0,
                    s = n.rtlTranslate ? -1 : 1,
                    o = Nt.normalize(t);
                if (i.forceToAxis)
                    if (n.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        r = -o.pixelX * s
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        r = -o.pixelY
                    }
                else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
                if (0 === r) return !0;
                if (i.invert && (r = -r), n.params.freeMode) {
                    var a = {
                            time: gt.now(),
                            delta: Math.abs(r),
                            direction: Math.sign(r)
                        },
                        s = n.mousewheel.lastEventBeforeSnap,
                        o = s && a.time < s.time + 500 && a.delta <= s.delta && a.direction === s.direction;
                    if (!o) {
                        n.mousewheel.lastEventBeforeSnap = void 0, n.params.loop && n.loopFix();
                        var l, c, u = n.getTranslate() + r * i.sensitivity,
                            s = n.isBeginning,
                            i = n.isEnd;
                        if ((u = u >= n.minTranslate() ? n.minTranslate() : u) <= n.maxTranslate() && (u = n.maxTranslate()), n.setTransition(0), n.setTranslate(u), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!s && n.isBeginning || !i && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = void 0, 15 <= (l = n.mousewheel.recentWheelEvents).length && l.shift(), s = l.length ? l[l.length - 1] : void 0, i = l[0], l.push(a), s && (a.delta > s.delta || a.direction !== s.direction) ? l.splice(0) : 15 <= l.length && a.time - i.time < 500 && 1 <= i.delta - a.delta && a.delta <= 6 && (c = 0 < r ? .8 : .2, n.mousewheel.lastEventBeforeSnap = a, l.splice(0), n.mousewheel.timeout = gt.nextTick(function () {
                                n.slideToClosest(n.params.speed, !0, void 0, c)
                            }, 0)), n.mousewheel.timeout || (n.mousewheel.timeout = gt.nextTick(function () {
                                n.mousewheel.lastEventBeforeSnap = a, l.splice(0), n.slideToClosest(n.params.speed, !0, void 0, .5)
                            }, 500))), o || n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), u === n.minTranslate() || u === n.maxTranslate()) return !0
                    }
                } else {
                    u = {
                        time: gt.now(),
                        delta: Math.abs(r),
                        direction: Math.sign(r),
                        raw: e
                    }, r = n.mousewheel.recentWheelEvents;
                    2 <= r.length && r.shift();
                    e = r.length ? r[r.length - 1] : void 0;
                    if (r.push(u), (!e || u.direction !== e.direction || u.delta > e.delta || u.time > e.time + 150) && n.mousewheel.animateSlider(u), n.mousewheel.releaseScroll(u)) return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            animateSlider: function (e) {
                return 6 <= e.delta && gt.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new it.Date).getTime(), !1)
            },
            releaseScroll: function (e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
                } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                return !1
            },
            enable: function () {
                var e = Nt.event();
                if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (this.mousewheel.enabled) return !1;
                var t = this.$el;
                return (t = "container" !== this.params.mousewheel.eventsTarged ? rt(this.params.mousewheel.eventsTarged) : t).on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0
            },
            disable: function () {
                var e = Nt.event();
                if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (!this.mousewheel.enabled) return !1;
                var t = this.$el;
                return (t = "container" !== this.params.mousewheel.eventsTarged ? rt(this.params.mousewheel.eventsTarged) : t).off(e, this.mousewheel.handle), !(this.mousewheel.enabled = !1)
            }
        },
        It = {
            update: function () {
                var e, t, n = this.params.navigation;
                this.params.loop || (e = (t = this.navigation).$nextEl, (t = t.$prevEl) && 0 < t.length && (this.isBeginning ? t.addClass(n.disabledClass) : t.removeClass(n.disabledClass), t[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](n.lockClass)), e && 0 < e.length && (this.isEnd ? e.addClass(n.disabledClass) : e.removeClass(n.disabledClass), e[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](n.lockClass)))
            },
            onPrevClick: function (e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function (e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function () {
                var e, t, n = this.params.navigation;
                (n.nextEl || n.prevEl) && (n.nextEl && (e = rt(n.nextEl), this.params.uniqueNavElements && "string" == typeof n.nextEl && 1 < e.length && 1 === this.$el.find(n.nextEl).length && (e = this.$el.find(n.nextEl))), n.prevEl && (t = rt(n.prevEl), this.params.uniqueNavElements && "string" == typeof n.prevEl && 1 < t.length && 1 === this.$el.find(n.prevEl).length && (t = this.$el.find(n.prevEl))), e && 0 < e.length && e.on("click", this.navigation.onNextClick), t && 0 < t.length && t.on("click", this.navigation.onPrevClick), gt.extend(this.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function () {
                var e = this.navigation,
                    t = e.$nextEl,
                    e = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), e && e.length && (e.off("click", this.navigation.onPrevClick), e.removeClass(this.params.navigation.disabledClass))
            }
        },
        Rt = {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function () {
                gt.extend(this, {
                    navigation: {
                        init: It.init.bind(this),
                        update: It.update.bind(this),
                        destroy: It.destroy.bind(this),
                        onNextClick: It.onNextClick.bind(this),
                        onPrevClick: It.onPrevClick.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function () {
                    this.navigation.update()
                },
                fromEdge: function () {
                    this.navigation.update()
                },
                destroy: function () {
                    this.navigation.destroy()
                },
                click: function (e) {
                    var t, n = this.navigation,
                        i = n.$nextEl,
                        n = n.$prevEl;
                    !this.params.navigation.hideOnClick || rt(e.target).is(n) || rt(e.target).is(i) || (i ? t = i.hasClass(this.params.navigation.hiddenClass) : n && (t = n.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), i && i.toggleClass(this.params.navigation.hiddenClass), n && n.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        },
        Ht = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    n = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = gt.nextTick(function () {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                }, n)
            },
            start: function () {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
            },
            stop: function () {
                return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
            },
            pause: function (e) {
                this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
            }
        },
        qt = {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function () {
                var t = this;
                gt.extend(t, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: Ht.run.bind(t),
                        start: Ht.start.bind(t),
                        stop: Ht.stop.bind(t),
                        pause: Ht.pause.bind(t),
                        onVisibilityChange: function () {
                            "hidden" === document.visibilityState && t.autoplay.running && t.autoplay.pause(), "visible" === document.visibilityState && t.autoplay.paused && (t.autoplay.run(), t.autoplay.paused = !1)
                        },
                        onTransitionEnd: function (e) {
                            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function () {
                    this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                },
                beforeTransitionStart: function (e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function () {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                touchEnd: function () {
                    this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                },
                destroy: function () {
                    this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                }
            }
        },
        kt = [St, Ct, Lt, Et, kt];

    function Bt(e) {
        return (Bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ft(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Wt(e, t) {
        return (Wt = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Gt(n) {
        var i = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = Vt(n);
            return function (e, t) {
                if (t && ("object" === Bt(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }(this, i ? (e = Vt(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function Vt(e) {
        return (Vt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    void 0 === Dt.use && (Dt.use = Dt.Class.use, Dt.installModule = Dt.Class.installModule), Dt.use(kt);
    kt = function () {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Wt(e, t)
        }(n, ee);
        var e = Gt(n);

        function n() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), e.apply(this, arguments)
        }
        return Ft(n.prototype, [{
            key: "_setup",
            value: function (e, t) {
                Dt.use([Rt, qt]), this.$element = e, this.options = u.a.extend({}, n.defaults, this.$element.data(), t), this.className = "Swiperjs", this.id = this.$element.attr("id") || l(6, "swiperjs"), this.$element.attr("id", this.id);
                e = e.siblings(".swiper-button-prev,.swiper-button-next");
                1 < e.length && (this.options = u.a.extend(this.options, {
                    navigation: {
                        prevEl: u()(e[0]),
                        nextEl: u()(e[1])
                    }
                })), this._init()
            }
        }, {
            key: "_init",
            value: function () {
                var i = this;
                i.options.renderOn ? (u()(window).on("changed.zf.mediaquery", function (e, t, n) {
                    t == i.options.renderOn ? i.render() : n == i.options.renderOn && i.destroy()
                }), v.upTo(i.options.renderOn) && i.render()) : i.render()
            }
        }, {
            key: "render",
            value: function () {
                this.options.renderOn && this.toggleClasses(), this.$swiper = new Dt("#" + this.id, this.options)
            }
        }, {
            key: "destroy",
            value: function () {
                this.$swiper && (this.$swiper.destroy(), this.toggleClasses())
            }
        }, {
            key: "toggleClasses",
            value: function () {
                var e = this.$element,
                    t = e.find("[data-shadow-class]");
                t.push(e), t.each(function (e, t) {
                    var n = u()(t).attr("class") || "",
                        i = u()(t).data("shadowClass") || "";
                    u()(t).removeClass(n).addClass(i).data("shadowClass", n)
                })
            }
        }]), n
    }();
    kt.defaults = {
        spaceBetween: 30,
        autoplay: {
            delay: 5e3
        },
        loop: !0,
        renderOn: "small",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }, window.jQuery = u.a, Foundation.plugin(kt, "Swiperjs"), u()(document).foundation(), u()(function () {
        var n;
        u()("#menu a").on("click", function () {
            var e = u()(this).attr("href");
            u()("#offCanvas").one("close.zf.offCanvas", function () {
                Foundation.SmoothScroll.scrollToLoc(e)
            }).foundation("close")
        }), new Foundation.Sticky(u()("#framework .sticky"), {
            anchor: "framework",
            marginTop: (u()(window).height() - u()("#framework .sticky").height()) / 32,
            stickyOn: "medium"
        }), new Foundation.Sticky(u()(".emblem .sticky"), {
            anchor: "unsystem",
            marginTop: (u()(window).height() - u()(".emblem .sticky").height()) / 32,
            stickyOn: "large"
        }), "function" == typeof IntersectionObserver && (n = new IntersectionObserver(function (e, t) {
            e.forEach(function (e) {
                u()(e.target).toggleClass("in-view", e.isIntersecting)
            })
        }, {
            rootMargin: "-50% 0%"
        }), u()(".frameworkCard").each(function (e, t) {
            n.observe(t)
        }))
    })
}]);

// Initialize the mega menu and language switch
$(document).ready(function(){
  navigationInitialize();
  langSwitch();
});